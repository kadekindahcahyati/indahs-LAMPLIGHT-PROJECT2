// LAMPLIGHT — Terrain permukaan Bulan (low-poly, flat-shaded, vertex color) + detail shader ringan (Tahap 2).
//
// Dua mesh:
//   1) "near"  : 420x420 m dengan detail tinggi (kawah, tonjolan) — tempat gameplay.
//   2) "far"   : plane besar kasar dengan pegunungan di horizon (lubang di tengah, tidak tumpang tindih).
// Tinggi:
//   heightAt(x, z)  fungsi analitik (dipakai membangun mesh + menaruh benda saat loading).
//   surfaceAt(x, z) tinggi PERSIS permukaan mesh near (interpolasi segitiga) → dipakai pemain & batu.
//                   Selisih terhadap heightAt bisa ±0,3 m di lereng karena titik mesh digoyang & flat-shaded.
//
// Tahap 2: kawah lebih bervariasi (bibir tak bulat, puncak tengah, kawah satelit prosedural), warna per-segitiga
// lebih kaya, dan bakeDetail() memasang peta makro (mikro-kawah, AO, ejecta, bayangan terpanggang).
import * as THREE from 'three';
import { makeNoise2D, fbm, lerp, smoothstep, makeRng } from '../utils.js';
import { patchTerrainMaterial, makeRegolithDetail } from './Materials.js';
import { bakeMacroMap, neutralMacro, hash2 } from './TerrainDetail.js';

const SAT_CELL = 34;   // kawah satelit prosedural: 1 sel = maks. 1 kawah

export function createTerrain(config, quality = {}) {
  const { world, craters, station, colors } = config;
  const half = world.size / 2;
  const segments = quality.terrainSeg || world.segments;
  const noise = makeNoise2D(config.seed);
  const noiseB = makeNoise2D(config.seed + 77);
  const noiseC = makeNoise2D(config.seed + 191);

  // ---------- fungsi tinggi ----------
  function craterProfile(dx, dz, c) {
    const dist = Math.sqrt(dx * dx + dz * dz);
    // bibir tidak bulat sempurna: radius efektif dimodulasi noise sudut (stabil per kawah)
    const a = Math.atan2(dz, dx);
    const wob = 1 + (noiseC(c.x * 0.37 + Math.cos(a) * 2.1, c.z * 0.37 + Math.sin(a) * 2.1) - 0.5) * (c.r > 20 ? 0.16 : 0.1);
    const t = dist / (c.r * wob);
    let h = 0;
    if (t < 1) {
      const bowl = 1 - t * t;                 // mangkuk halus
      h -= c.d * bowl * (0.55 + 0.45 * bowl); // dasar agak datar
      if (c.r >= 26) h += c.d * 0.3 * Math.exp(-Math.pow(dist / (c.r * 0.11), 2));   // puncak tengah kawah besar
    }
    // bibir kawah (ring terangkat) + lereng luar yang meluruh
    const rim = Math.exp(-Math.pow((t - 1.02) / 0.2, 2));
    const skirt = t > 1.02 ? Math.exp(-(t - 1.02) * 2.2) : 0;
    h += c.d * 0.34 * rim + c.d * 0.1 * skirt;
    return h;
  }

  const sat = { r: 0, d: 0, x: 0, z: 0 };
  function nearHeight(x, z) {
    let h = fbm(noise, x * 0.011, z * 0.011, 4) * 5.5;
    h += fbm(noiseB, x * 0.045, z * 0.045, 3) * 0.9;
    h += fbm(noise, x * 0.19 + 40, z * 0.19 - 12, 2) * 0.16;
    for (let i = 0; i < craters.length; i++) {
      const c = craters[i];
      const dx = x - c.x, dz = z - c.z;
      if (dx * dx + dz * dz < c.r * c.r * 5.5) h += craterProfile(dx, dz, c);
    }
    // kawah satelit prosedural (3–10 m) → permukaan tidak terlihat seragam
    const ci = Math.floor(x / SAT_CELL), cj = Math.floor(z / SAT_CELL);
    for (let j = -1; j <= 1; j++) for (let i = -1; i <= 1; i++) {
      const I = ci + i, J = cj + j;
      if (hash2(I, J, 1) > 0.66) continue;
      sat.x = (I + 0.15 + 0.7 * hash2(I, J, 2)) * SAT_CELL; sat.z = (J + 0.15 + 0.7 * hash2(I, J, 3)) * SAT_CELL;
      sat.r = 3.6 + 7 * Math.pow(hash2(I, J, 4), 1.7);
      sat.d = sat.r * (0.11 + 0.1 * hash2(I, J, 5));
      const dx = x - sat.x, dz = z - sat.z;
      if (dx * dx + dz * dz < sat.r * sat.r * 5.5) h += craterProfile(dx, dz, sat);
    }
    // ratakan area stasiun
    const sd = Math.hypot(x - station.x, z - station.z);
    const flat = 1 - smoothstep(station.flatRadius, station.blendRadius, sd);
    h = lerp(h, world.baseHeight, flat);
    // turun ke 0 di tepi supaya menyatu dengan far-field
    const m = Math.max(Math.abs(x), Math.abs(z));
    h *= smoothstep(0, 45, half - m);
    return h;
  }

  function farHeight(x, z) {
    const m = Math.max(Math.abs(x), Math.abs(z));
    const amp = smoothstep(half + 20, half + 760, m);
    let h = fbm(noise, x * 0.004, z * 0.004, 4) * 70 * amp;
    h += Math.max(0, fbm(noiseB, x * 0.0022 + 9, z * 0.0022 - 3, 3)) * 140 * amp * amp;
    h += fbm(noiseB, x * 0.02, z * 0.02, 2) * 5 * smoothstep(half, half + 150, m);
    return h;
  }

  function heightAt(x, z) {
    const m = Math.max(Math.abs(x), Math.abs(z));
    return m <= half ? nearHeight(x, z) : farHeight(x, z);
  }

  const _n = new THREE.Vector3();
  function normalAt(x, z, out = _n) {
    const e = 0.8;
    const hl = heightAt(x - e, z), hr = heightAt(x + e, z);
    const hd = heightAt(x, z - e), hu = heightAt(x, z + e);
    return out.set(hl - hr, 2 * e, hd - hu).normalize();
  }

  // ---------- warna per-face ----------
  const cLight = new THREE.Color(colors.regolithLight);
  const cDark = new THREE.Color(colors.regolithDark);
  const cRock = new THREE.Color(colors.rockDark);
  const cWarm = new THREE.Color(0x8b7d6c);     // regolit kecokelatan
  const cCool = new THREE.Color(0x6c727d);     // regolit keabuan-biru
  const cMare = new THREE.Color(0x3f4045);     // dataran gelap luas
  const tmp = new THREE.Color();
  const clampT = (t) => Math.min(1, Math.max(0, t));

  function colorizeFaces(geo, rng, nearMode) {
    const pos = geo.attributes.position;
    const nor = geo.attributes.normal;
    const col = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i += 3) {
      const cx = (pos.getX(i) + pos.getX(i + 1) + pos.getX(i + 2)) / 3;
      const cy = (pos.getY(i) + pos.getY(i + 1) + pos.getY(i + 2)) / 3;
      const cz = (pos.getZ(i) + pos.getZ(i + 1) + pos.getZ(i + 2)) / 3;
      const ny = nor.getY(i);
      const patch = noise(cx * 0.03 + 5, cz * 0.03 + 5);           // bercak besar
      const mare = noiseB(cx * 0.0075 + 11, cz * 0.0075 - 4);       // dataran gelap skala sangat besar
      const hue = noiseC(cx * 0.017 + 70, cz * 0.017 + 9);          // pergeseran warna hangat/dingin
      const grain = rng();                                          // variasi per-segitiga
      let t = 0.36 + patch * 0.46 + (grain - 0.5) * 0.17;
      if (nearMode) {
        t += smoothstep(-0.5, 2.5, cy) * 0.08;                      // bibir kawah lebih terang
        t -= smoothstep(-0.5, -4.0, cy) * 0.22;                     // dasar kawah lebih gelap
      }
      tmp.copy(cDark).lerp(cLight, clampT(t));
      tmp.lerp(hue > 0.5 ? cWarm : cCool, Math.min(0.5, Math.abs(hue - 0.5) * 1.3));
      tmp.lerp(cMare, smoothstep(0.42, 0.28, mare) * 0.45);
      const steep = smoothstep(0.94, 0.78, ny);                     // lereng curam → gelap seperti batu
      tmp.lerp(cRock, steep * 0.7);
      for (let k = 0; k < 3; k++) {
        col[(i + k) * 3] = tmp.r; col[(i + k) * 3 + 1] = tmp.g; col[(i + k) * 3 + 2] = tmp.b;
      }
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  }

  // ---------- material ----------
  const aniso = quality.aniso || 1;
  const fineTex = makeRegolithDetail(quality.detailTex || 128, config.seed + 400, aniso);
  const uniforms = {
    uFine: { value: fineTex },
    uMacro: { value: neutralMacro() },
    uMacroXf: { value: new THREE.Vector4(-half, -half, 1 / world.size, 1 / world.size) },
    // tiltHalus, kontrasButiran, tiltMakro
    uTune: { value: new THREE.Vector4(0.55, 0.42, 1.0, 0) },
  };
  const material = patchTerrainMaterial(
    new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true }),
    uniforms,
    { twoTap: !!quality.detail2 },
  );
  const farMaterial = new THREE.MeshLambertMaterial({ vertexColors: true, flatShading: true });
  const group = new THREE.Group();
  group.name = 'terrain';

  // ---------- mesh near ----------
  const rng = makeRng(config.seed + 5);
  const nearGeo = new THREE.PlaneGeometry(world.size, world.size, segments, segments);
  nearGeo.rotateX(-Math.PI / 2);
  {
    const p = nearGeo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      // goyang halus posisi XZ supaya grid tidak terlihat kaku
      const jx = (rng() - 0.5) * (world.size / segments) * 0.55;
      const jz = (rng() - 0.5) * (world.size / segments) * 0.55;
      const x = p.getX(i), z = p.getZ(i);
      const edge = Math.abs(x) >= half - 0.01 || Math.abs(z) >= half - 0.01;
      const nx = edge ? x : x + jx, nz = edge ? z : z + jz;
      p.setXYZ(i, nx, nearHeight(nx, nz), nz);
    }
  }
  const near = nearGeo.toNonIndexed();
  nearGeo.dispose();
  near.computeVertexNormals();
  colorizeFaces(near, rng, true);
  const nearMesh = new THREE.Mesh(near, material);
  nearMesh.name = 'terrain-near';
  nearMesh.receiveShadow = true;
  group.add(nearMesh);

  // ---------- permukaan mesh near → surfaceAt (grid segitiga) ----------
  const surf = buildSurfaceGrid(near, half);

  // ---------- mesh far (dengan lubang persegi di tengah) ----------
  const FAR_SIZE = 2520, FAR_SEG = 84; // spasi grid 30 m → garis grid jatuh tepat di ±210
  const farGeo = new THREE.PlaneGeometry(FAR_SIZE, FAR_SIZE, FAR_SEG, FAR_SEG);
  farGeo.rotateX(-Math.PI / 2);
  {
    const p = farGeo.attributes.position;
    for (let i = 0; i < p.count; i++) p.setY(i, farHeight(p.getX(i), p.getZ(i)));
    // buang segitiga yang seluruhnya berada di dalam area near
    const idx = farGeo.index.array;
    const keep = [];
    const eps = 0.01;
    for (let i = 0; i < idx.length; i += 3) {
      let inside = true;
      for (let k = 0; k < 3; k++) {
        const x = p.getX(idx[i + k]), z = p.getZ(idx[i + k]);
        if (Math.abs(x) > half + eps || Math.abs(z) > half + eps) { inside = false; break; }
      }
      if (!inside) keep.push(idx[i], idx[i + 1], idx[i + 2]);
    }
    farGeo.setIndex(keep);
  }
  const far = farGeo.toNonIndexed();
  farGeo.dispose();
  far.computeVertexNormals();
  colorizeFaces(far, makeRng(config.seed + 6), false);
  const farMesh = new THREE.Mesh(far, farMaterial);
  farMesh.name = 'terrain-far';
  group.add(farMesh);

  // ---------- API ----------
  const _g = { h: 0, ny: 1 };
  /** Tinggi permukaan mesh di (x,z). Mengisi `out` {h, ny (normal-Y segitiga)}; mengembalikan h. */
  function groundAt(x, z, out = _g) {
    if (Math.abs(x) >= half || Math.abs(z) >= half || !surf.query(x, z, out)) {
      out.h = heightAt(x, z);
      const n = normalAt(x, z);
      out.ny = n.y;
    }
    return out.h;
  }

  /** Dipanggil Game setelah stasiun & batu ada: pasang peta makro (mikro-kawah, AO, bayangan terpanggang). */
  function bakeDetail({ colliders = [], sunDir }) {
    const tex = bakeMacroMap({
      config, half, size: quality.macroTex || 512, heightFn: nearHeight, colliders, sunDir,
      noise, noiseB, aniso,
    });
    if (uniforms.uMacro.value && uniforms.uMacro.value.dispose) uniforms.uMacro.value.dispose();
    uniforms.uMacro.value = tex;
    return tex;
  }

  return {
    group, nearMesh, farMesh, heightAt, normalAt, groundAt, surfaceAt: groundAt, material, farMaterial, uniforms,
    half, bakeDetail, craterProfile,
  };
}

// ====================================================================== grid segitiga untuk surfaceAt
function buildSurfaceGrid(geo, half) {
  const pos = geo.attributes.position.array;
  const nTri = pos.length / 9;
  const CELL = 6, G = Math.ceil((half * 2) / CELL);
  const STR = 10;
  const tri = new Float32Array(nTri * STR);
  const counts = new Int32Array(G * G + 1);
  const ci = (v) => Math.max(0, Math.min(G - 1, Math.floor((v + half) / CELL)));

  for (let t = 0; t < nTri; t++) {
    const o = t * 9;
    const ax = pos[o], ay = pos[o + 1], az = pos[o + 2];
    const bx = pos[o + 3], by = pos[o + 4], bz = pos[o + 5];
    const cx = pos[o + 6], cy = pos[o + 7], cz = pos[o + 8];
    const e1x = bx - ax, e1z = bz - az, e2x = cx - ax, e2z = cz - az;
    const det = e1x * e2z - e2x * e1z;
    const inv = Math.abs(det) < 1e-9 ? 0 : 1 / det;
    // normal-Y segitiga = komponen y dari (e1 × e2) dinormalisasi
    const e1y = by - ay, e2y = cy - ay;
    const nx = e1y * e2z - e1z * e2y, ny = e1z * e2x - e1x * e2z, nz = e1x * e2y - e1y * e2x;
    const nl = Math.hypot(nx, ny, nz) || 1;
    const s = t * STR;
    tri[s] = ax; tri[s + 1] = az; tri[s + 2] = ay;
    tri[s + 3] = e2z * inv; tri[s + 4] = -e2x * inv; tri[s + 5] = -e1z * inv; tri[s + 6] = e1x * inv;
    tri[s + 7] = e1y; tri[s + 8] = e2y; tri[s + 9] = Math.abs(ny) / nl;
    const i0 = ci(Math.min(ax, bx, cx)), i1 = ci(Math.max(ax, bx, cx));
    const j0 = ci(Math.min(az, bz, cz)), j1 = ci(Math.max(az, bz, cz));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) counts[j * G + i + 1]++;
  }
  for (let i = 0; i < G * G; i++) counts[i + 1] += counts[i];
  const fill = counts.slice(0, G * G);
  const list = new Int32Array(counts[G * G]);
  for (let t = 0; t < nTri; t++) {
    const o = t * 9;
    const xs = [pos[o], pos[o + 3], pos[o + 6]], zs = [pos[o + 2], pos[o + 5], pos[o + 8]];
    const i0 = ci(Math.min(...xs)), i1 = ci(Math.max(...xs)), j0 = ci(Math.min(...zs)), j1 = ci(Math.max(...zs));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) list[fill[j * G + i]++] = t;
  }

  const EPS = 1e-4;
  function query(x, z, out) {
    const cell = ci(z) * G + ci(x);
    for (let k = counts[cell]; k < counts[cell + 1]; k++) {
      const s = list[k] * STR;
      const px = x - tri[s], pz = z - tri[s + 1];
      const u = tri[s + 3] * px + tri[s + 4] * pz;
      const w = tri[s + 5] * px + tri[s + 6] * pz;
      if (u >= -EPS && w >= -EPS && u + w <= 1 + EPS) {
        out.h = tri[s + 2] + u * tri[s + 7] + w * tri[s + 8];
        out.ny = tri[s + 9];
        return true;
      }
    }
    return false;
  }
  return { query };
}
