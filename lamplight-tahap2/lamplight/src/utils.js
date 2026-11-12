// LAMPLIGHT — utilitas kecil yang dipakai banyak modul.
import * as THREE from 'three';

/** PRNG deterministik (mulberry32). Pakai ini, BUKAN Math.random(), untuk apa pun di dunia. */
export function makeRng(seed) {
  let a = seed >>> 0;
  return function rng() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (e0, e1, x) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};
export const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
export const rand = (rng, lo, hi) => lo + (hi - lo) * rng();

/** Noise nilai 2D sederhana & murah (cukup untuk terrain low-poly). */
export function makeNoise2D(seed) {
  const rng = makeRng(seed);
  const N = 256;
  const perm = new Uint8Array(N * 2);
  const vals = new Float32Array(N);
  for (let i = 0; i < N; i++) { perm[i] = i; vals[i] = rng(); }
  for (let i = N - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const t = perm[i]; perm[i] = perm[j]; perm[j] = t;
  }
  for (let i = 0; i < N; i++) perm[i + N] = perm[i];
  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  const at = (x, y) => vals[perm[(perm[x & 255] + (y & 255)) & 255]];
  return function noise(x, y) {
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;
    const u = fade(xf), v = fade(yf);
    const a = at(xi, yi), b = at(xi + 1, yi);
    const c = at(xi, yi + 1), d = at(xi + 1, yi + 1);
    return lerp(lerp(a, b, u), lerp(c, d, u), v); // 0..1
  };
}

/** fBm dari fungsi noise. Hasil kira-kira -1..1. */
export function fbm(noise, x, y, octaves = 4, lacunarity = 2.0, gain = 0.5) {
  let amp = 1, freq = 1, sum = 0, norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += (noise(x * freq, y * freq) * 2 - 1) * amp;
    norm += amp;
    amp *= gain;
    freq *= lacunarity;
  }
  return sum / norm;
}

/** Konversi azimuth/elevasi (derajat) ke vektor arah satuan. Azimuth 0 = -Z (depan kamera awal). */
export function dirFromAngles(azimuthDeg, elevationDeg, out = new THREE.Vector3()) {
  const az = THREE.MathUtils.degToRad(azimuthDeg);
  const el = THREE.MathUtils.degToRad(elevationDeg);
  return out.set(Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el));
}

/** Gabung banyak geometri (non-indexed atau indexed) jadi satu draw call. Warna vertex dipertahankan. */
export function mergeGeometries(geos) {
  const prepared = geos.map((g) => (g.index ? g.toNonIndexed() : g));
  let total = 0;
  for (const g of prepared) total += g.attributes.position.count;
  const pos = new Float32Array(total * 3);
  const nor = new Float32Array(total * 3);
  const col = new Float32Array(total * 3);
  let o = 0;
  for (const g of prepared) {
    const n = g.attributes.position.count;
    pos.set(g.attributes.position.array, o * 3);
    if (g.attributes.normal) nor.set(g.attributes.normal.array, o * 3);
    if (g.attributes.color) col.set(g.attributes.color.array, o * 3);
    else col.fill(1, o * 3, (o + n) * 3);
    o += n;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('color', new THREE.BufferAttribute(col, 3));
  out.computeBoundingSphere();
  out.computeBoundingBox();
  return out;
}

/** Warnai seluruh geometri dengan satu warna (vertex color) — dasar "low-poly flat look". */
export function paint(geo, color, jitter = 0, rng = null) {
  const c = new THREE.Color(color);
  const n = geo.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const j = jitter && rng ? 1 + (rng() - 0.5) * jitter : 1;
    arr[i * 3] = c.r * j; arr[i * 3 + 1] = c.g * j; arr[i * 3 + 2] = c.b * j;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

/** Terapkan transform (posisi/rotasi/skala) ke geometri lalu kembalikan. */
export function placed(geo, { x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1 } = {}) {
  const m = new THREE.Matrix4().compose(
    new THREE.Vector3(x, y, z),
    new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)),
    new THREE.Vector3(sx, sy, sz),
  );
  geo.applyMatrix4(m);
  return geo;
}
