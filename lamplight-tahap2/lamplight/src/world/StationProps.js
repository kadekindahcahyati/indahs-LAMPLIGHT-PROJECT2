// LAMPLIGHT — struktur & properti stasiun (bagian 2): antena, panel surya, tangki, rover, bendera,
// tiang lampu, bollard, kabel, jejak kaki, peti. Semua statis (yang bergerak ada di Station.js).
import * as THREE from 'three';

const PI = Math.PI;
const UP = new THREE.Vector3(0, 1, 0);

// ---------------------------------------------------------------- antena parabola → menghadap Bumi
export function buildDish(b, p, C, earthDir) {
  b.push([p.x, 0, p.z]);
  b.box(3.2, 0.8, 3.2, C.concrete, { at: [0, 0.4, 0], collide: true, shadow: false });
  b.box(2.2, 0.5, 2.2, C.hullGrey, { at: [0, 1.05, 0], collide: true, shadow: false });
  b.cyl(0.55, 0.7, 2.8, 8, C.hullWhite, { at: [0, 2.6, 0], collide: true, shadow: false });
  b.box(1.4, 0.7, 1.0, C.hullDark, { at: [0, 4.2, 0] });             // kepala sumbu
  const q = new THREE.Quaternion().setFromUnitVectors(UP, earthDir);
  b.pushQ([0, 4.9, 0], q);
  b.hitBox(5.5, 0.95, 5.5, { at: [0, 0.95, 0], shadow: false });      // mangkuk (lingkaran miring)
  // mangkuk: tutup bola, sisi cekung menghadap +Y lokal
  const R = 9, th = 0.66;
  const bowl = new THREE.SphereGeometry(R, 22, 6, 0, PI * 2, PI - th, th);
  bowl.translate(0, R, 0);
  b.add(bowl, C.hullWhite, { bucket: 'thin', jitter: 0.04 });
  b.cyl(0.9, 0.9, 0.5, 8, C.hullGrey, { at: [0, 0.1, 0] });
  b.strut([0, 0.2, 0], [0, 5.1, 0], 0.09, C.hullGrey);                 // feed
  b.box(0.5, 0.35, 0.5, C.hullDark, { at: [0, 5.2, 0] });
  const rimR = R * Math.sin(th), rimH = R * (1 - Math.cos(th));
  for (let k = 0; k < 3; k++) {
    const a = (k * 2 * PI) / 3 + 0.5;
    b.strut([Math.cos(a) * rimR, rimH, Math.sin(a) * rimR], [0, 5.0, 0], 0.06, C.hullGrey);
  }
  b.pop();
  b.pop();
}

// ---------------------------------------------------------------- menara antena rangka
// Mengembalikan posisi puncak (untuk lampu suar yang berkedip).
export function buildMast(b, p, C, ground) {
  const H = 26, SEC = 6;
  const r0 = 2.0, r1 = 0.5;
  const rAt = (y) => r0 + (r1 - r0) * (y / H);
  const P = (i, y) => {
    const a = (i * 2 * PI) / 3 + 0.4;
    return [Math.cos(a) * rAt(y), y, Math.sin(a) * rAt(y)];
  };
  b.push([p.x, 0, p.z]);
  b.cyl(2.9, 3.2, 0.6, 8, C.concrete, { at: [0, 0.3, 0], collide: true, shadow: false });
  for (let s = 0; s < SEC; s++) {
    const y0 = (s * H) / SEC + 0.3, y1 = ((s + 1) * H) / SEC;
    for (let i = 0; i < 3; i++) {
      b.strut(P(i, y0), P(i, y1), 0.12, C.hullGrey);
      b.strut(P(i, y1), P((i + 1) % 3, y1), 0.07, C.hullGrey);
      b.strut(P(i, y0), P((i + 1) % 3, y1), 0.05, C.hullDark);
    }
  }
  for (let i = 0; i < 3; i++) b.hitStrut(P(i, 0.3), P(i, 6), 0.22, { shadow: false });   // kaki rangka (bagian bawah)
  // lengan antena & piringan kecil
  b.strut([-2.2, 19.5, 0], [2.2, 19.5, 0], 0.07, C.hullGrey);
  b.strut([0, 22.5, -2], [0, 22.5, 2], 0.07, C.hullGrey);
  b.add(new THREE.SphereGeometry(1.1, 10, 4, 0, PI * 2, 0, 0.9), C.hullWhite, { bucket: 'thin', at: [2.4, 19.6, 0], rot: [0, 0, -PI / 2 + 0.2] });
  b.strut([0, H, 0], [0, H + 3.2, 0], 0.05, C.hullGrey);
  b.pop();
  return [p.x, H + 3.4, p.z];
}

// ---------------------------------------------------------------- ladang panel surya
export function buildSolar(b, p, C, rng, sunDir, ground) {
  const yaw = Math.atan2(sunDir.x, sunDir.z);             // normal panel menghadap azimuth matahari
  const cols = 5, rows = 3;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = p.x + (c - (cols - 1) / 2) * 4.7;
      const z = p.z + (r - (rows - 1) / 2) * 4.6;
      const roll = rng();
      b.push([x, 0, z]);
      if (roll < 0.1) {                                     // jatuh terlentang di tanah
        b.push([0, 0.35, 0], [0.05, rng() * PI, 0.18]);
        panel(b, C, rng);
        b.pop();
      } else {
        const broken = roll < 0.35;
        const tilt = 0.62 + (broken ? (rng() - 0.5) * 0.9 : (rng() - 0.5) * 0.06);
        const skew = broken ? (rng() - 0.5) * 0.5 : 0;
        b.strut([0, 0, -0.3], [0, 1.5, -0.3], 0.1, C.hullGrey);
        b.strut([-1.4, 0, -0.3], [-1.4, 1.2, -0.3], 0.08, C.hullGrey);
        b.strut([1.4, 0, -0.3], [1.4, 1.2, -0.3], 0.08, C.hullGrey);
        b.push([0, 1.5, 0], [-tilt, yaw + (broken ? skew : 0), broken ? skew * 0.6 : 0]);
        panel(b, C, rng);
        b.pop();
      }
      b.pop();
    }
  }
}

function panel(b, C, rng) {
  b.box(4.3, 0.12, 2.5, C.hullGrey, { jitter: 0.04, collide: true });
  b.box(4.1, 0.05, 2.3, C.solar, { at: [0, 0.07, 0], jitter: 0.05 });
  for (let i = -1; i <= 1; i++) b.box(0.04, 0.02, 2.3, C.solarGrid, { at: [i * 1.0, 0.1, 0] });
  b.box(4.1, 0.02, 0.04, C.solarGrid, { at: [0, 0.1, 0] });
}

// ---------------------------------------------------------------- tangki bahan bakar + pipa
export function buildTanks(b, p, C) {
  b.push([p.x, 0, p.z]);
  for (const z of [-1.7, 1.7]) {
    b.hitBox(4.7, 1.5, 1.5, { at: [0, 1.9, z], toGround: true });          // tabung + tutup bulat
    b.cyl(1.5, 1.5, 6.4, 12, C.hullWhite, { at: [0, 1.9, z], rot: [0, 0, PI / 2] });
    for (const s of [-1, 1]) b.add(new THREE.SphereGeometry(1.5, 12, 4, 0, PI * 2, 0, PI / 2), C.hullGrey, { at: [s * 3.2, 1.9, z], rot: [0, 0, -s * PI / 2] });
    b.cyl(1.58, 1.58, 0.5, 12, C.orange, { at: [-1.2, 1.9, z], rot: [0, 0, PI / 2] });
    for (const x of [-2.2, 2.2]) b.box(0.5, 1.6, 0.8, C.concrete, { at: [x, 0.8, z] });
  }
  // bola tekanan di atas kaki
  b.hitCyl(2.35, 5.9, { at: [8.3, 2.95, 3.6] });
  b.sph(2.3, 12, 8, C.hullWhite, { at: [8.3, 3.6, 3.6] });
  b.cyl(2.35, 2.35, 0.35, 12, C.orange, { at: [8.3, 3.6, 3.6] });
  for (let k = 0; k < 4; k++) {
    const a = (k * PI) / 2 + PI / 4;
    b.strut([8.3 + Math.cos(a) * 1.6, 2.2, 3.6 + Math.sin(a) * 1.6], [8.3 + Math.cos(a) * 2.2, 0, 3.6 + Math.sin(a) * 2.2], 0.14, C.hullGrey);
  }
  // pipa penghubung
  b.strut([3.4, 3.6, 1.7], [3.4, 3.6, 3.6], 0.16, C.hullGrey);
  b.strut([3.4, 3.6, 3.6], [6.2, 3.6, 3.6], 0.16, C.hullGrey);
  b.strut([3.4, 3.4, -1.7], [3.4, 3.4, 1.7], 0.16, C.hullGrey);
  b.box(0.7, 0.7, 0.7, C.rust, { at: [3.4, 3.6, 3.6] });
  b.pop();
}

// ---------------------------------------------------------------- rover enam roda (ditinggalkan)
export function buildRover(b, p, C) {
  b.push([p.x, 0, p.z], [0, 0.55, 0]);
  b.push([0, 0, 0], [0.0, 0, 0.04]);
  b.hitBox(1.75, 0.78, 1.4, { at: [0, 0.78, 0] });
  b.box(3.2, 0.7, 1.9, C.hullWhite, { at: [0, 1.15, 0] });
  b.box(3.3, 0.18, 2.0, C.orange, { at: [0, 0.95, 0] });
  b.add(new THREE.SphereGeometry(0.85, 8, 4, 0, PI * 2, 0, PI / 2), C.glass, { bucket: 'thin', at: [1.1, 1.5, 0], scale: [1, 0.75, 1] });
  b.box(2.2, 0.06, 1.5, C.solar, { at: [-0.4, 1.53, 0], rot: [0, 0, 0.06] });
  for (const x of [-1.15, 0, 1.15]) for (const z of [-1.15, 1.15]) {
    b.cyl(0.55, 0.55, 0.42, 10, C.hullDark, { at: [x, 0.55, z], rot: [PI / 2, 0, 0] });
    b.cyl(0.2, 0.2, 0.46, 6, C.hullGrey, { at: [x, 0.55, z], rot: [PI / 2, 0, 0] });
  }
  b.strut([-1.15, 0.55, 0], [1.15, 0.55, 0], 0.09, C.hullGrey);
  b.strut([-1.1, 1.5, 0.7], [-1.1, 3.0, 0.7], 0.05, C.hullGrey);
  b.add(new THREE.SphereGeometry(0.5, 8, 3, 0, PI * 2, 0, 0.9), C.hullWhite, { bucket: 'thin', at: [-1.1, 3.0, 0.7], rot: [0, 0, 0.5] });
  b.box(0.25, 0.2, 0.2, C.hullDark, { at: [1.5, 1.7, 0.6] });
  b.pop();
  b.pop();
}

// ---------------------------------------------------------------- bendera pudar
export function buildFlag(b, p, C) {
  b.push([p.x, 0, p.z], [0, -0.35, 0]);
  b.cyl(0.4, 0.45, 0.2, 8, C.concrete, { at: [0, 0.1, 0] });
  b.cyl(0.05, 0.06, 5.6, 6, C.hullWhite, { at: [0, 2.9, 0], collide: true, shadow: false });
  b.sph(0.12, 6, 4, C.hullGrey, { at: [0, 5.75, 0] });
  b.strut([0, 5.2, 0], [2.4, 5.2, 0], 0.03, C.hullGrey);
  const stripes = [C.teal, 0xaeb2b5, C.orange];
  stripes.forEach((col, i) => b.box(2.3, 0.36, 0.03, col, { at: [1.2, 5.0 - i * 0.36, 0], rot: [0, 0, -0.03], jitter: 0.05 }));
  b.pop();
}

// ---------------------------------------------------------------- tiang lampu (bagian statis)
// Mengembalikan posisi bohlam dunia.
export function buildLampPost(b, p, C) {
  const H = p.height;
  b.push([p.x, 0, p.z]);
  b.cyl(0.5, 0.6, 0.25, 8, C.concrete, { at: [0, 0.125, 0], collide: true, shadow: false });
  b.cyl(0.08, 0.12, H, 6, C.hullGrey, { at: [0, H / 2, 0], collide: true, shadow: false });
  const a = p.arm ?? 1;                                      // arah lengan: +1 → +X, -1 → -X
  b.strut([0, H, 0], [0.95 * a, H + 0.35, 0], 0.07, C.hullGrey);
  b.cyl(0.14, 0.42, 0.34, 8, C.hullDark, { at: [0.95 * a, H + 0.55, 0] });   // kap lampu
  b.pop();
  return [p.x + 0.95 * a, H + 0.3, p.z];
}

// ---------------------------------------------------------------- bollard sepanjang jalur
export function buildBollards(b, from, to, count, C) {
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const x = from[0] + (to[0] - from[0]) * t;
    const z = from[1] + (to[1] - from[1]) * t;
    const lit = i === 2 || i === 5;
    b.cyl(0.16, 0.2, 0.9, 6, C.hullGrey, { at: [x, 0.45, z], collide: true, shadow: false });
    b.cyl(0.19, 0.19, 0.12, 6, lit ? C.amberDim : C.deadLamp, { bucket: 'glow', at: [x, 0.94, z] });
  }
}

// ---------------------------------------------------------------- peti, drum, kabel, jejak kaki
export function buildCrates(b, spots, C, rng) {
  const cols = [C.hullGrey, C.rust, 0x56604e, C.hullDark, 0x7a7f84];
  for (const s of spots) {
    b.push([s.x, 0, s.z], [0, s.yaw || 0, 0]);
    const w = 1.2 + rng() * 0.6, h = 0.9 + rng() * 0.5;
    b.box(w, h, w, cols[Math.floor(rng() * cols.length)], { at: [0, h / 2, 0], collide: true });
    b.box(w + 0.06, 0.12, w + 0.06, C.hullDark, { at: [0, h * 0.78, 0] });
    if (s.stack) b.box(w * 0.8, h * 0.8, w * 0.8, cols[Math.floor(rng() * cols.length)], { at: [0.1, h + h * 0.4, 0.05], rot: [0, 0.4, 0], collide: true });
    if (s.second) b.box(1.0, 0.9, 1.5, cols[Math.floor(rng() * cols.length)], { at: [w + 0.3, 0.45, 0.2], rot: [0, 0.2, 0], collide: true });
    if (s.toppled) b.box(1.3, 1.0, 1.3, C.rust, { at: [-w - 0.7, 0.5, 0.5], rot: [0.0, 0.5, 1.2], collide: true });
    if (s.barrel) for (let i = 0; i < s.barrel; i++) b.cyl(0.38, 0.38, 1.0, 8, i % 2 ? C.orange : C.hullGrey, { at: [w + 0.5 + i * 0.85, 0.5, -0.7], collide: true });
    b.pop();
  }
}

/** Kabel yang tergeletak di tanah, melengkung sedikit. pts: [[x,z],...] */
export function buildCable(b, pts, C, rng, r = 0.09) {
  const v = pts.map((q, i) => new THREE.Vector3(q[0], 0.12 + (i % 2 ? 0.05 : 0), q[1]));
  const curve = new THREE.CatmullRomCurve3(v, false, 'catmullrom', 0.5);
  b.add(new THREE.TubeGeometry(curve, pts.length * 8, r, 5, false), C.cable, { jitter: 0.1 });
}

/** Jejak kaki dari titik `from` ke `to` (zig-zag kiri/kanan). */
export function buildFootprints(b, from, to, C, rng, step = 0.85) {
  const dx = to[0] - from[0], dz = to[1] - from[1];
  const len = Math.hypot(dx, dz);
  const n = Math.floor(len / step);
  const ang = Math.atan2(dx, dz);
  const nx = Math.cos(ang), nz = -Math.sin(ang);       // tegak lurus arah jalan
  const col = 0x3b3a3c;
  for (let i = 1; i < n; i++) {
    const t = i / n;
    const side = i % 2 ? 1 : -1;
    const wob = Math.sin(i * 0.7) * 0.4;
    const x = from[0] + dx * t + nx * (side * 0.17 + wob);
    const z = from[1] + dz * t + nz * (side * 0.17 + wob);
    b.box(0.17, 0.02, 0.36, col, { at: [x, 0.012, z], rot: [0, ang + side * 0.12, 0], jitter: 0.15, bucket: 'hull' });
  }
}
