// LAMPLIGHT — bebatuan low-poly (InstancedMesh) + collider untuk pemain.
//
// Penempatan deterministik (seed), mengikuti permukaan mesh terrain (`terrain.groundAt`, bukan heightAt → batu tidak
// melayang di lereng). Batu besar menumpuk di bibir kawah, batu sedang tersebar, batu kecil berkelompok di sekitar batu
// besar (puing) — supaya tidak terlihat seperti taburan acak yang seragam.
//
// Tahap 2:
//   • 4 bentuk batu (80 segitiga) untuk batu besar/sedang + 2 bentuk kasar (20 segitiga) untuk batu kecil (LOD murah)
//   • warna per-instance lebih variatif (basal gelap, anortosit pucat, kecokelatan)
//   • collider silinder untuk batu ≥ 0,9 m → dikirim ke CollisionWorld
//   • material di-patch: butiran, gelap di dasar (AO kontak), debu regolit di kaki batu
import * as THREE from 'three';
import { makeRng, rand } from '../utils.js';
import { patchRockMaterial } from './Materials.js';

// Lingkaran keep-out dari tata letak stasiun: [x, z, radius]. Dipakai juga oleh Station untuk props.
export function stationKeepouts(L) {
  return [
    [L.dome.x, L.dome.z, L.dome.r + 6],
    [L.airlock.x, L.airlock.z + 2, 6],
    [L.moduleA.x, L.moduleA.z, L.moduleA.len / 2 + 4],
    [L.moduleB.x, L.moduleB.z, L.moduleB.len / 2 + 4],
    [(L.moduleA.x + L.dome.x) / 2 - 4, L.dome.z, 6],
    [(L.moduleB.x + L.dome.x) / 2 + 4, L.dome.z, 6],
    [L.tower.x, L.tower.z, 9],
    [L.pad.x, L.pad.z, L.pad.r + 4],
    [L.dish.x, L.dish.z, 10],
    [L.mast.x, L.mast.z, 6],
    [L.solar.x, L.solar.z, 15],
    [L.tanks.x + 4, L.tanks.z, 11],
    [L.rover.x, L.rover.z, 5],
    [L.flag.x, L.flag.z, 3],
    [L.lamp.x, L.lamp.z, 4],
    // jalur pad → pintu & jalur pintu → tanki dibiarkan bersih
    [-12, 10, 7], [-5, 6, 6], [8, 8, 6],
  ];
}

/** Bentuk batu: ikosahedron yang digeser per-titik berdasarkan hash posisi (konsisten di titik kembar). */
function rockGeometry(seed, squash, jag, detail = 1) {
  const g = new THREE.IcosahedronGeometry(1, detail); // non-indexed
  const p = g.attributes.position;
  const hash = (x, y, z) => {
    const s = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719 + seed * 4.1) * 43758.5453;
    return s - Math.floor(s);
  };
  for (let i = 0; i < p.count; i++) {
    const x = Math.round(p.getX(i) * 1000) / 1000;
    const y = Math.round(p.getY(i) * 1000) / 1000;
    const z = Math.round(p.getZ(i) * 1000) / 1000;
    const k = 1 + (hash(x, y, z) - 0.5) * jag;
    p.setXYZ(i, x * k, y * k * squash, z * k);
  }
  g.computeVertexNormals(); // non-indexed → flat normals
  return g;
}

const BIG_VARIANTS = [
  { seed: 1, squash: 0.70, jag: 0.55 },
  { seed: 2, squash: 0.50, jag: 0.70 },   // pipih
  { seed: 3, squash: 0.85, jag: 0.40 },   // bulat
  { seed: 4, squash: 0.60, jag: 0.88 },   // runcing
];
const SMALL_VARIANTS = [
  { seed: 5, squash: 0.70, jag: 0.60 },
  { seed: 6, squash: 0.50, jag: 0.80 },
];

export function createRocks(config, quality, terrain, rng = makeRng(config.seed + 11)) {
  const { rocks, craters, station, layout, colors, world } = config;
  const half = world.size / 2 - 14;
  const keep = stationKeepouts(layout);
  const blocked = (x, z, pad) => {
    for (let i = 0; i < keep.length; i++) {
      const k = keep[i];
      const dx = x - k[0], dz = z - k[1];
      if (dx * dx + dz * dz < (k[2] + pad) * (k[2] + pad)) return true;
    }
    return false;
  };
  const inStation = (x, z, r) => Math.hypot(x - station.x, z - station.z) < r;

  const scale = quality.rockScale;
  const plan = [
    { n: Math.floor(rocks.big * scale), s: [2.4, 6.2], mode: 'rim', small: false },
    { n: Math.floor(rocks.medium * scale), s: [0.9, 2.3], mode: 'mix', small: false },
    { n: Math.floor(rocks.small * scale), s: [0.22, 0.75], mode: 'any', small: true },
  ];

  const bigGeo = BIG_VARIANTS.map((v) => rockGeometry(v.seed, v.squash, v.jag, 1));
  const smallGeo = SMALL_VARIANTS.map((v) => rockGeometry(v.seed, v.squash, v.jag, 0));
  const variants = [...bigGeo, ...smallGeo];
  const lists = variants.map(() => []);

  // palet batu: basal gelap, abu netral, anortosit pucat, kecokelatan
  const palette = [new THREE.Color(0x35353a), new THREE.Color(colors.rockDark), new THREE.Color(colors.rock),
    new THREE.Color(0x77746f), new THREE.Color(0x8a8782), new THREE.Color(0x5a5048)];
  const col = new THREE.Color(), cW = new THREE.Color(0x6a625c);

  const colliders = [];
  const anchors = [];                    // batu besar/sedang → pusat "puing" batu kecil
  const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3();

  for (const tier of plan) {
    let placed = 0, guard = 0;
    while (placed < tier.n && guard++ < tier.n * 40) {
      let x, z;
      const pickRim = tier.mode === 'rim' || (tier.mode === 'mix' && rng() < 0.55);
      if (tier.small && anchors.length && rng() < 0.62) {            // puing di sekitar batu yang lebih besar
        const a = anchors[Math.floor(rng() * anchors.length)];
        const ang = rng() * Math.PI * 2, d = a.s * rand(rng, 1.0, 2.6);
        x = a.x + Math.cos(ang) * d; z = a.z + Math.sin(ang) * d;
      } else if (pickRim) {
        const c = craters[Math.floor(rng() * craters.length)];
        const a = rng() * Math.PI * 2, d = c.r * rand(rng, 0.85, 1.5);
        x = c.x + Math.cos(a) * d; z = c.z + Math.sin(a) * d;
      } else {
        x = rand(rng, -half, half); z = rand(rng, -half, half);
      }
      if (Math.abs(x) > half || Math.abs(z) > half) continue;
      const sz = rand(rng, tier.s[0], tier.s[1]);
      if (blocked(x, z, sz * 0.6)) continue;
      // batu besar/sedang tidak boleh berdiri di area datar stasiun; batu kecil boleh (jarang)
      if (tier.mode !== 'any' && inStation(x, z, station.flatRadius + 2)) continue;
      if (tier.mode === 'any' && inStation(x, z, station.flatRadius) && rng() < 0.8) continue;

      const sx = sz * rand(rng, 0.8, 1.3), sz2 = sz * rand(rng, 0.8, 1.3);
      // dasar batu menempel pada titik TERENDAH di bawah telapaknya (tidak melayang di lereng)
      const rr = Math.max(sx, sz2) * 0.55;
      const g = Math.min(
        terrain.groundAt(x, z), terrain.groundAt(x + rr, z), terrain.groundAt(x - rr, z),
        terrain.groundAt(x, z + rr), terrain.groundAt(x, z - rr),
      );
      const sink = sz * rand(rng, 0.14, 0.26);
      const vi = tier.small ? bigGeo.length + Math.floor(rng() * smallGeo.length) : Math.floor(rng() * bigGeo.length);
      const squash = (tier.small ? SMALL_VARIANTS[vi - bigGeo.length] : BIG_VARIANTS[vi]).squash;

      _m.compose(
        _p.set(x, g - sink + sz * 0.3, z),
        _q.setFromEuler(_e.set(rand(rng, -0.25, 0.25), rng() * Math.PI * 2, rand(rng, -0.25, 0.25))),
        _s.set(sx, sz, sz2),
      );
      col.copy(palette[Math.floor(rng() * palette.length)]).lerp(palette[Math.floor(rng() * palette.length)], rng() * 0.5)
        .lerp(cW, rng() * 0.18);
      lists[vi].push({ m: _m.clone(), col: col.clone() });

      if (!tier.small) {
        anchors.push({ x, z, s: Math.max(sx, sz2) });
        colliders.push({
          k: 'c', x, z, r: 0.8 * Math.max(sx, sz2),
          y0: g - 3, y1: g - sink + sz * 0.3 + sz * squash * 0.88, sh: 1,
        });
      }
      placed++;
    }
  }

  const uniforms = {
    uFine: terrain.uniforms.uFine,
    uTune: { value: new THREE.Vector4(0.5, 0.35, 0, 0) },
    uDust: { value: new THREE.Color(colors.regolithLight) },
  };
  const material = patchRockMaterial(new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true }), uniforms);
  const group = new THREE.Group();
  group.name = 'rocks';
  const meshes = variants.map((geo, i) => {
    const list = lists[i];
    const mesh = new THREE.InstancedMesh(geo, material, Math.max(1, list.length));
    mesh.count = list.length;
    list.forEach((it, k) => { mesh.setMatrixAt(k, it.m); mesh.setColorAt(k, it.col); });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.castShadow = i < bigGeo.length;          // batu kecil tidak ikut peta bayangan (hemat)
    mesh.receiveShadow = true;
    mesh.computeBoundingSphere();
    mesh.matrixAutoUpdate = false;
    mesh.name = `rocks-${i}`;
    mesh.visible = list.length > 0;
    group.add(mesh);
    return mesh;
  });

  return { group, meshes, material, uniforms, colliders, count: lists.reduce((s, l) => s + l.length, 0) };
}
