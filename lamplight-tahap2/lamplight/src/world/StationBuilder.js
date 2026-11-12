// LAMPLIGHT — alat bantu merakit objek dari primitif Three.js.
//
// MeshBatch mengumpulkan banyak primitif (box, silinder, bola, strut…), memberi warna per-face
// (vertex color + variasi acak), lalu menggabungkannya jadi hanya 3 mesh: hull / thin / glow.
//   hull : badan solid (FrontSide, flat shaded)        → casts + receives shadow
//   thin : permukaan tipis dua sisi (kubah, piringan)  → casts + receives shadow
//   glow : emissive (jendela, lampu) — MeshBasic, tidak terkena cahaya
// Hasilnya: seluruh stasiun hanya beberapa draw call → ringan untuk PC spesifikasi rendah.
import * as THREE from 'three';
import { mergeGeometries } from '../utils.js';
import { makePanelTexture, patchHullMaterial } from './Materials.js';

const UP = new THREE.Vector3(0, 1, 0);
const ZERO = [0, 0, 0];
const ONE = [1, 1, 1];
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _d = new THREE.Vector3();
const _c = new THREE.Color();

/**
 * Material stasiun (Tahap 2):
 *   hull : Phong (kilau logam halus dari Matahari) + tekstur panel/paku keling prosedural (1 pembacaan tekstur, dominan-sumbu)
 *   thin : Phong lebih mengkilap (kaca kubah, jendela, mangkuk antena), dua sisi
 *   glow : MeshBasic (emisif, tidak terkena cahaya)
 */
export function createStationMaterials(quality = {}, seed = 1969) {
  const panel = makePanelTexture(quality.panel || 128, seed + 600, quality.aniso || 1);
  const uniforms = { uPanel: { value: panel }, uTune: { value: new THREE.Vector4(0.34, 0.5, 0, 0) } };
  const hull = patchHullMaterial(
    new THREE.MeshPhongMaterial({ vertexColors: true, flatShading: true, specular: 0x2c3036, shininess: 24 }),
    uniforms,
  );
  return {
    hull,
    thin: new THREE.MeshPhongMaterial({ vertexColors: true, flatShading: true, side: THREE.DoubleSide, specular: 0x8793a1, shininess: 64 }),
    glow: new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false }),
    panelTex: panel,
  };
}

/** Buang sebagian segitiga (geometri non-indexed) untuk efek panel pecah/hilang. */
export function dropFaces(geo, rng, { centers = [], radius = 3, hitProb = 0.85, randomProb = 0.03, minY = 0 } = {}) {
  const pos = geo.attributes.position;
  const nor = geo.attributes.normal;
  const keepPos = [];
  const keepNor = [];
  for (let i = 0; i < pos.count; i += 3) {
    const cx = (pos.getX(i) + pos.getX(i + 1) + pos.getX(i + 2)) / 3;
    const cy = (pos.getY(i) + pos.getY(i + 1) + pos.getY(i + 2)) / 3;
    const cz = (pos.getZ(i) + pos.getZ(i + 1) + pos.getZ(i + 2)) / 3;
    let drop = false;
    if (cy > minY) {
      for (const c of centers) {
        const dx = cx - c[0], dy = cy - c[1], dz = cz - c[2];
        if (dx * dx + dy * dy + dz * dz < radius * radius && rng() < hitProb) { drop = true; break; }
      }
      if (!drop && rng() < randomProb) drop = true;
    }
    if (drop) continue;
    for (let k = 0; k < 3; k++) {
      keepPos.push(pos.getX(i + k), pos.getY(i + k), pos.getZ(i + k));
      keepNor.push(nor.getX(i + k), nor.getY(i + k), nor.getZ(i + k));
    }
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(keepPos, 3));
  out.setAttribute('normal', new THREE.Float32BufferAttribute(keepNor, 3));
  geo.dispose();
  return out;
}

export class MeshBatch {
  /**
   * @param rng        PRNG deterministik
   * @param mats       hasil createStationMaterials()
   * @param dustColor  warna debu regolith yang "menempel" di bagian bawah bangunan
   */
  constructor(rng, mats, dustColor = 0x8d8b88) {
    this.rng = rng;
    this.mats = mats;
    this.dust = new THREE.Color(dustColor);
    this.parts = { hull: [], thin: [], glow: [] };
    this.top = new THREE.Matrix4();
    this.stack = [];
    this.colliders = [];     // collider dunia (lihat player/CollisionWorld.js), diisi lewat opsi `collide` / hit*()
  }

  // ---- transform stack ----
  push(at = ZERO, rot = ZERO, scale = ONE) {
    this.stack.push(this.top.clone());
    _q.setFromEuler(_e.set(rot[0], rot[1], rot[2], 'YXZ'));
    _m.compose(_p.set(at[0], at[1], at[2]), _q, _s.set(scale[0], scale[1], scale[2]));
    this.top.multiply(_m);
    return this;
  }
  pushQ(at, quat) {
    this.stack.push(this.top.clone());
    _m.compose(_p.set(at[0], at[1], at[2]), quat, _s.set(1, 1, 1));
    this.top.multiply(_m);
    return this;
  }
  pop() { this.top = this.stack.pop(); return this; }

  // ---- primitif ----
  /** Tambah geometri apa pun. opt: { bucket, at, rot, quat, scale, jitter } */
  add(geo, color, { bucket = 'hull', at = ZERO, rot = ZERO, quat = null, scale = ONE, jitter = 0.06 } = {}) {
    let g = geo.index ? geo.toNonIndexed() : geo;
    if (g !== geo) geo.dispose();
    if (g.attributes.uv) g.deleteAttribute('uv');
    if (quat) _q.copy(quat); else _q.setFromEuler(_e.set(rot[0], rot[1], rot[2], 'YXZ'));
    _m.compose(_p.set(at[0], at[1], at[2]), _q, _s.set(scale[0], scale[1], scale[2]));
    _m.premultiply(this.top);
    g.applyMatrix4(_m);

    const n = g.attributes.position.count;
    const col = new Float32Array(n * 3);
    _c.set(color);
    for (let i = 0; i < n; i += 3) {
      const j = 1 + (this.rng() - 0.5) * 2 * jitter;       // variasi per-segitiga
      for (let k = 0; k < 3; k++) {
        const o = (i + k) * 3;
        col[o] = _c.r * j; col[o + 1] = _c.g * j; col[o + 2] = _c.b * j;
      }
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    this.parts[bucket].push(g);
    return this;
  }

  box(w, h, d, color, opt) {
    if (opt && opt.collide) this.hitBox(w / 2, h / 2, d / 2, opt);
    return this.add(new THREE.BoxGeometry(w, h, d), color, opt);
  }
  cyl(rTop, rBot, h, seg, color, opt) {
    if (opt && opt.collide) this.hitCyl(Math.max(rTop, rBot), h, opt);
    return this.add(new THREE.CylinderGeometry(rTop, rBot, h, seg, 1), color, opt);
  }
  sph(r, ws, hs, color, opt) { return this.add(new THREE.SphereGeometry(r, ws, hs), color, opt); }

  /** Batang silinder tipis dari titik a ke b (untuk rangka, kaki, pipa). */
  strut(a, b, r, color, opt = {}) {
    _d.set(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    const len = _d.length();
    if (len < 1e-4) return this;
    const quat = new THREE.Quaternion().setFromUnitVectors(UP, _d.normalize());
    const geo = new THREE.CylinderGeometry(r, r, len, opt.seg || 5, 1, true);
    return this.add(geo, color, {
      ...opt, quat,
      at: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2],
    });
  }

  // ---- collider (tanpa mesh) ----
  // Semua hit*() memakai transform stack yang sama dengan geometri, jadi collider selalu sinkron dengan visual.
  // opsi: { at, rot, quat, scale } seperti add(); `toGround` → rentang tinggi diperpanjang sampai tanah;
  //       `shadow:false` → tidak ikut memberi bayangan pada peta bayangan terpanggang (benda tipis/rangka).
  _world(opt) {
    const { at = ZERO, rot = ZERO, quat = null, scale = ONE } = opt || {};
    if (quat) _q.copy(quat); else _q.setFromEuler(_e.set(rot[0], rot[1], rot[2], 'YXZ'));
    return new THREE.Matrix4().compose(_p.set(at[0], at[1], at[2]), _q, _s.set(scale[0], scale[1], scale[2])).premultiply(this.top);
  }

  /** Kotak setengah-ukuran (hx,hy,hz) pada transform `opt`. Jejak = OBB terbaik yang membungkus kotak (bisa miring). */
  hitBox(hx, hy, hz, opt = {}) {
    const m = this._world(opt), el = m.elements;
    const ang = Math.atan2(el[2], el[0]);                 // arah sumbu-X lokal pada bidang XZ
    const c = Math.cos(ang), s = Math.sin(ang);
    let u0 = Infinity, u1 = -Infinity, v0 = Infinity, v1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for (let i = 0; i < 8; i++) {
      _d.set(i & 1 ? hx : -hx, i & 2 ? hy : -hy, i & 4 ? hz : -hz).applyMatrix4(m);
      const u = _d.x * c + _d.z * s, v = -_d.x * s + _d.z * c;
      if (u < u0) u0 = u; if (u > u1) u1 = u;
      if (v < v0) v0 = v; if (v > v1) v1 = v;
      if (_d.y < y0) y0 = _d.y; if (_d.y > y1) y1 = _d.y;
    }
    const cu = (u0 + u1) / 2, cv = (v0 + v1) / 2;
    this.colliders.push({
      k: 'b', x: cu * c - cv * s, z: cu * s + cv * c, hx: (u1 - u0) / 2, hz: (v1 - v0) / 2, c, s,
      y0: opt.toGround ? Math.min(0, y0) : y0, y1, sh: opt.shadow === false ? 0 : 1,
    });
    return this;
  }

  /** Silinder (sumbu = Y lokal) radius r, tinggi h. Tegak → lingkaran; miring/rebah → kotak pembungkus. */
  hitCyl(r, h, opt = {}) {
    const m = this._world(opt), el = m.elements;
    const ay = Math.hypot(el[4], el[5], el[6]) || 1;
    if (Math.abs(el[5]) / ay > 0.97) {
      const sx = Math.hypot(el[0], el[1], el[2]), sz = Math.hypot(el[8], el[9], el[10]);
      const cy = el[13], hh = (h / 2) * ay;
      this.colliders.push({
        k: 'c', x: el[12], z: el[14], r: r * Math.max(sx, sz),
        y0: opt.toGround ? Math.min(0, cy - hh) : cy - hh, y1: cy + hh, sh: opt.shadow === false ? 0 : 1,
      });
    } else {
      this.hitBox(r, h / 2, r, opt);
    }
    return this;
  }

  /** Kubah: setengah bola radius R berpusat (x, y0+baseH, z) di atas alas silinder radius baseR setinggi baseH. */
  hitDome(x, z, R, baseR, baseH, y0 = 0) {
    this.colliders.push({ k: 'd', x, z, R, baseR, baseH, y0, y1: y0 + baseH + R, sh: 1 });
    return this;
  }

  /** Rangkaian lingkaran kecil sepanjang batang a→b (kaki lander, rangka menara). Koordinat lokal stack. */
  hitStrut(a, b, r, { shadow = true } = {}) {
    const len = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    const n = Math.max(2, Math.ceil(len / 0.7));
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      _d.set(a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t).applyMatrix4(this.top);
      const half = (len / n) * 0.5 * Math.abs(b[1] - a[1]) / (len || 1) + r;
      this.colliders.push({ k: 'c', x: _d.x, z: _d.z, r, y0: _d.y - half, y1: _d.y + half, sh: shadow ? 1 : 0 });
    }
    return this;
  }

  // ---- hasil ----
  _dust(geo) {
    const pos = geo.attributes.position, col = geo.attributes.color;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (y > 1.4) continue;
      const t = Math.pow(1 - Math.max(0, y) / 1.4, 1.6) * 0.55;
      col.setXYZ(i,
        col.getX(i) + (this.dust.r * 0.8 - col.getX(i)) * t,
        col.getY(i) + (this.dust.g * 0.8 - col.getY(i)) * t,
        col.getZ(i) + (this.dust.b * 0.8 - col.getZ(i)) * t);
    }
  }

  toGroup(name, { dust = true, shadow = true } = {}) {
    const group = new THREE.Group();
    group.name = name;
    for (const key of Object.keys(this.parts)) {
      const list = this.parts[key];
      if (!list.length) continue;
      const geo = mergeGeometries(list);
      for (const g of list) g.dispose();
      if (dust && key !== 'glow') this._dust(geo);
      const mesh = new THREE.Mesh(geo, this.mats[key]);
      mesh.name = `${name}-${key}`;
      mesh.castShadow = shadow && key !== 'glow';
      mesh.receiveShadow = key !== 'glow';
      group.add(mesh);
    }
    this.parts = { hull: [], thin: [], glow: [] };
    return group;
  }
}

/** Matikan update matriks otomatis untuk objek statis (hemat CPU tiap frame). */
export function freeze(obj) {
  obj.updateMatrixWorld(true);
  obj.traverse((o) => { o.matrixAutoUpdate = false; });
  return obj;
}
