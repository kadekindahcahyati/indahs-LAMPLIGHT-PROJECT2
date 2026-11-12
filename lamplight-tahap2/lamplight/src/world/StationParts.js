// LAMPLIGHT — struktur utama stasiun (bagian 1): kubah, modul, menara lab, landasan, lander.
// Semua fungsi menerima MeshBatch `b` dan menulis geometri ke dalamnya. Koordinat lokal → dunia via b.push().
import * as THREE from 'three';
import { dropFaces } from './StationBuilder.js';

const PI = Math.PI;

/** Palet tambahan (selain config.colors) khusus stasiun. */
export function stationPalette(base) {
  return {
    ...base,
    foil: 0x9c7f3e, solar: 0x1a2a48, solarGrid: 0x34507f, orange: 0xb5642c, teal: 0x4d7b82,
    cable: 0x1a1b1e, deadLamp: 0x1c1f24, amberDim: 0x8a5a24, amberLit: 0xffb347, cyanDim: 0x2a7088,
    concrete: 0x77797c, padDark: 0x4d5158, paintWhite: 0xb9bcbf, paintYellow: 0xb8a24a,
  };
}

// ---------------------------------------------------------------- kubah habitat + airlock
export function buildDome(b, p, C, rng) {
  const r = p.r;
  b.hitDome(p.x, p.z, r, r * 1.1, 0.9);       // tabrakan: alas silinder + setengah bola
  b.push([p.x, 0, p.z]);

  // pondasi
  b.cyl(r * 1.05, r * 1.1, 0.8, 28, C.hullGrey, { at: [0, 0.4, 0] });
  b.cyl(r * 1.01, r * 1.01, 0.18, 28, C.orange, { at: [0, 0.82, 0] });

  // interior (terlihat lewat panel pecah): lantai, pilar tengah, konsol
  b.cyl(r * 0.98, r * 0.98, 0.1, 24, 0x14161a, { at: [0, 0.86, 0] });
  b.cyl(1.0, 1.4, 4.2, 8, C.hullDark, { at: [0, 3.0, 0] });
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * PI * 2 + 0.3;
    b.box(1.9, 1.0, 1.1, i % 2 ? C.hullGrey : C.hullDark, {
      at: [Math.cos(a) * r * 0.55, 1.4, Math.sin(a) * r * 0.55], rot: [0, -a, 0],
    });
    if (i % 3 === 0) {
      b.box(1.2, 0.12, 0.7, C.cyanDim, { bucket: 'glow', at: [Math.cos(a) * r * 0.55, 1.95, Math.sin(a) * r * 0.55], rot: [0, -a, 0] });
    }
  }

  // cangkang kaca (dengan tiga titik "tumbukan" yang pecah)
  b.push([0, 0.9, 0]);
  const centers = [];
  for (let i = 0; i < 3; i++) {
    const az = rng() * PI * 2, el = 0.6 + rng() * 0.7;
    centers.push([Math.cos(az) * Math.cos(el) * r, Math.sin(el) * r, Math.sin(az) * Math.cos(el) * r]);
  }
  const shell = new THREE.SphereGeometry(r, 18, 8, 0, PI * 2, 0, PI / 2).toNonIndexed();
  b.add(dropFaces(shell, rng, { centers, radius: 3.2, minY: r * 0.18 }), C.glass, { bucket: 'thin', jitter: 0.14 });

  // rusuk: 3 cincin + 4 busur meridian
  for (const el of [0.32, 0.72, 1.12]) {
    const R = r * Math.cos(el) * 1.006;
    b.add(new THREE.TorusGeometry(R, 0.14, 4, 30), C.hullWhite, { at: [0, r * Math.sin(el), 0], rot: [PI / 2, 0, 0] });
  }
  for (let k = 0; k < 4; k++) {
    b.add(new THREE.TorusGeometry(r * 1.006, 0.14, 4, 18, PI), C.hullWhite, { rot: [0, (k * PI) / 4, 0] });
  }
  b.cyl(1.0, 1.3, 0.55, 10, C.hullGrey, { at: [0, r + 0.1, 0] });   // oculus puncak
  b.pop();

  // ---- airlock di sisi +Z ----
  b.push([0, 0, r + 0.2]);
  b.box(4.4, 3.4, 3.9, C.hullWhite, { at: [0, 1.7, 0], collide: true });
  b.box(4.5, 0.36, 4.0, C.orange, { at: [0, 0.2, 0] });                       // pita bawah
  b.box(5.2, 0.26, 2.4, C.hullGrey, { at: [0, 3.55, 1.0] });                  // kanopi
  b.box(1.9, 2.55, 0.14, C.hullDark, { at: [0, 1.3, 1.96] });                 // pintu
  b.box(2.2, 0.16, 0.2, C.hullGrey, { at: [0, 2.62, 1.98] });                 // bingkai atas
  b.box(1.5, 0.12, 0.12, C.amberLit, { bucket: 'glow', at: [0, 2.82, 1.98] }); // lampu status: masih menyala
  for (const sx of [-1, 1]) {
    b.box(0.16, 2.6, 0.2, C.hullGrey, { at: [sx * 1.05, 1.3, 1.98] });
    b.box(0.18, 0.2, 0.12, C.deadLamp, { bucket: 'glow', at: [sx * 1.6, 2.4, 1.97] });  // lampu mati
    b.cyl(0.14, 0.14, 3.2, 6, C.hullGrey, { at: [sx * 2.3, 1.6, -0.4] });               // pipa konduit
  }
  for (let i = 0; i < 3; i++) {                                               // tangga 3 anak
    const h = 0.22 * (3 - i);
    b.box(2.8 - i * 0.2, h, 0.6, C.concrete, { at: [0, h / 2, 2.25 + i * 0.6], collide: true });
  }
  b.pop();

  b.pop();
}

// ---------------------------------------------------------------- modul silinder
export function buildModule(b, m, C, rng, { yaw = 0, tilt = 0, sink = 0 } = {}) {
  const { len, r } = m;
  const y0 = r + 0.35 - sink;
  b.push([m.x, y0, m.z], [0, yaw, tilt]);
  b.hitBox(len / 2 + r, r, r * 1.05, { toGround: true });     // badan + tutup ujung bulat

  b.cyl(r, r, len, 14, C.hullWhite, { rot: [0, 0, PI / 2] });
  for (const s of [-1, 1]) {
    b.add(new THREE.SphereGeometry(r, 14, 5, 0, PI * 2, 0, PI / 2), C.hullGrey, { at: [s * len / 2, 0, 0], rot: [0, 0, -s * PI / 2] });
  }
  // pita bergantian
  const bands = [-0.36, 0, 0.36];
  bands.forEach((f, i) => b.cyl(r * 1.04, r * 1.04, 0.55, 14, i === 1 ? C.orange : C.hullGrey, { at: [f * len, 0, 0], rot: [0, 0, PI / 2] }));
  // jendela di sisi +Z
  const n = Math.floor((len - 3) / 2.6);
  for (let i = 0; i <= n; i++) {
    const wx = -((n * 2.6) / 2) + i * 2.6;
    b.box(1.2, 0.72, 0.2, C.glass, { bucket: 'thin', at: [wx + 0.8, 0.25, r * 0.97] });
    if (i % 3 === 1) b.box(1.0, 0.5, 0.05, C.cyanDim, { bucket: 'glow', at: [wx + 0.8, 0.25, r * 0.97 + 0.12] });
  }
  // panel surya atap + antena kecil
  b.box(len * 0.6, 0.07, 1.5, C.solar, { at: [0, r + 0.02, 0], rot: [0, 0, 0.0] });
  b.strut([len * 0.3, r, 0], [len * 0.3, r + 2.2, 0], 0.06, C.hullGrey);
  b.sph(0.18, 6, 4, C.hullGrey, { at: [len * 0.3, r + 2.25, 0] });
  // kaki penyangga (ujungnya terbenam di tanah)
  for (const f of [-0.33, 0, 0.33]) b.box(0.7, r + 1.2, 0.8, C.hullDark, { at: [f * len, -(r + 1.2) / 2 - r * 0.45, 0] });
  b.pop();
}

/** Koridor penghubung antar-bangunan (silinder sepanjang sumbu X). */
export function buildTube(b, x0, x1, y, z, C, { r = 1.3, rot = [0, 0, 0], dy = 0 } = {}) {
  const len = Math.abs(x1 - x0);
  const cx = (x0 + x1) / 2;
  b.push([cx, y + dy, z], rot);
  b.hitBox(len / 2, r * 1.1, r * 1.1, {});
  b.cyl(r, r, len, 10, C.hullGrey, { rot: [0, 0, PI / 2] });
  for (const f of [-0.5, 0, 0.5]) b.cyl(r * 1.1, r * 1.1, 0.35, 10, C.hullDark, { at: [f * len * 0.96, 0, 0], rot: [0, 0, PI / 2] });
  b.pop();
}

// ---------------------------------------------------------------- menara laboratorium
export function buildTower(b, t, C, rng) {
  b.push([t.x, 0, t.z]);
  b.box(9.2, 6.4, 8.2, C.hullWhite, { at: [0, 3.2, 0], collide: true });
  b.box(9.5, 0.55, 8.5, C.orange, { at: [0, 0.5, 0], collide: true });                // pita karat/oranye
  b.box(9.7, 0.45, 8.7, C.hullGrey, { at: [0, 6.6, 0] });              // atap
  b.box(5.6, 3.0, 5.0, C.hullWhite, { at: [-0.8, 8.3, -0.4], collide: true });        // lantai atas
  b.box(5.9, 0.4, 5.3, C.hullGrey, { at: [-0.8, 9.9, -0.4] });
  // jendela pita lantai bawah (+Z)
  b.box(7.4, 1.5, 0.2, C.glass, { bucket: 'thin', at: [0, 3.9, 4.12] });
  for (let i = -3; i <= 3; i++) b.box(0.14, 1.6, 0.26, C.hullGrey, { at: [i * 1.1, 3.9, 4.14] });
  // jendela lantai atas
  b.box(3.6, 1.1, 0.2, C.glass, { bucket: 'thin', at: [-0.8, 8.4, 2.17] });
  // pintu + tangga
  b.box(1.6, 2.4, 0.2, C.hullDark, { at: [-3.0, 1.3, 4.12] });
  for (let i = 0; i < 4; i++) b.box(2.2, 0.2, 0.7, C.concrete, { at: [-3.0, 0.1 + i * 0.0, 4.6 + i * 0.5] });
  // tabung ventilasi + pipa di sisi samping
  for (let i = 0; i < 3; i++) b.cyl(0.35, 0.4, 1.4, 8, C.hullGrey, { at: [3.1 - i * 1.3, 7.4, 2.4] });
  b.strut([4.8, 0.3, -2], [4.8, 6.4, -2], 0.22, C.hullGrey, { seg: 6 });
  b.strut([4.8, 6.4, -2], [4.8, 6.4, 2], 0.22, C.hullGrey, { seg: 6 });
  // antena atap
  b.strut([1.6, 10.1, -1.5], [1.6, 14.6, -1.5], 0.07, C.hullGrey);
  b.strut([1.0, 12.8, -1.5], [2.2, 12.8, -1.5], 0.05, C.hullGrey);
  b.strut([-2.8, 10.1, 0.8], [-2.8, 12.4, 0.8], 0.06, C.hullGrey);
  b.pop();
}

// ---------------------------------------------------------------- landasan + lander
export function buildPad(b, p, C, rng) {
  const r = p.r;
  b.push([p.x, 0, p.z]);
  b.cyl(r, r * 1.04, 0.3, 32, C.padDark, { at: [0, 0.15, 0], collide: true });
  b.add(new THREE.RingGeometry(r * 0.80, r * 0.88, 40), C.paintWhite, { at: [0, 0.31, 0], rot: [-PI / 2, 0, 0], bucket: 'thin' });
  b.add(new THREE.RingGeometry(r * 0.42, r * 0.47, 40), C.paintYellow, { at: [0, 0.315, 0], rot: [-PI / 2, 0, 0], bucket: 'thin' });
  for (let k = 0; k < 4; k++) {
    const a = (k * PI) / 2 + PI / 4;
    b.box(0.5, 0.03, r * 0.32, C.paintYellow, { at: [Math.cos(a) * r * 0.62, 0.32, Math.sin(a) * r * 0.62], rot: [0, -a + PI / 2, 0] });
  }
  // lampu tepi landasan: kebanyakan mati
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * PI * 2;
    const lit = i === 3 || i === 8;
    b.cyl(0.28, 0.34, 0.34, 6, C.hullGrey, { at: [Math.cos(a) * r * 0.96, 0.46, Math.sin(a) * r * 0.96] });
    b.cyl(0.2, 0.2, 0.08, 6, lit ? C.amberDim : C.deadLamp, { bucket: 'glow', at: [Math.cos(a) * r * 0.96, 0.66, Math.sin(a) * r * 0.96] });
  }
  b.pop();
}

export function buildLander(b, p, C, rng) {
  b.hitCyl(2.55, 8.2, { at: [p.x, 0.3 + 4.1, p.z] });                 // badan lander (dari tanah sampai antena)
  b.push([p.x, 0.3, p.z], [0.03, 0.4, 0.05]);                      // sedikit miring: salah satu kaki ambles
  // tahap turun (foil emas) + tahap naik
  b.cyl(2.3, 2.5, 1.9, 8, C.foil, { at: [0, 3.2, 0] });
  b.cyl(2.45, 2.45, 0.25, 8, C.hullGrey, { at: [0, 4.25, 0] });
  b.cyl(1.55, 1.8, 1.9, 8, C.hullWhite, { at: [0.15, 5.3, 0] });
  b.cyl(1.2, 1.55, 0.6, 8, C.hullGrey, { at: [0.15, 6.5, 0] });
  b.box(0.9, 0.7, 0.2, C.glass, { bucket: 'thin', at: [0.15, 5.5, 1.62], rot: [0, 0, 0] });
  b.box(0.7, 0.5, 0.05, C.cyanDim, { bucket: 'glow', at: [0.15, 5.5, 1.75] });
  b.strut([0.15, 6.8, 0], [0.15, 8.4, 0], 0.06, C.hullGrey);
  b.add(new THREE.CylinderGeometry(0.7, 0.05, 0.5, 8, 1, true), C.hullGrey, { at: [0.15, 8.6, 0], rot: [PI, 0, 0], bucket: 'thin' });
  // nozzle mesin
  b.cyl(0.35, 0.95, 1.3, 8, C.hullDark, { at: [0, 1.85, 0] });
  // empat kaki
  for (let k = 0; k < 4; k++) {
    const a = (k * PI) / 2 + PI / 4;
    const top = [Math.cos(a) * 2.1, 3.7, Math.sin(a) * 2.1];
    const foot = [Math.cos(a) * 4.7, 0.2, Math.sin(a) * 4.7];
    b.strut(top, foot, 0.14, C.hullGrey, { seg: 5 });
    b.hitStrut(top, foot, 0.2);
    b.strut([Math.cos(a) * 2.3, 2.5, Math.sin(a) * 2.3], [Math.cos(a) * 3.7, 1.0, Math.sin(a) * 3.7], 0.09, C.hullGrey);
    b.cyl(0.62, 0.7, 0.14, 8, C.hullGrey, { at: [foot[0], 0.07, foot[2]] });
  }
  // tangga pada satu kaki
  const a0 = PI / 4 + PI;
  for (let i = 0; i < 5; i++) {
    const f = i / 4;
    b.box(0.7, 0.05, 0.12, C.hullGrey, { at: [Math.cos(a0) * (2.3 + f * 2.2), 3.3 - f * 3.0, Math.sin(a0) * (2.3 + f * 2.2)], rot: [0, -a0, 0] });
  }
  b.pop();
}
