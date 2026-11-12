// LAMPLIGHT — "peta makro" terrain, di-bake SEKALI saat loading (Tahap 2).
//
// Satu tekstur RGBA8 yang menutupi seluruh area dekat (±210 m) dan dibaca 1× per piksel di shader terrain:
//   R,G : kemiringan mikro-relief (mikro-kawah 0,5–3 m, bukan geometri) → normal tambahan
//   B   : nada albedo × oklusi ambien (cekungan kawah gelap, sinar ejecta kawah segar terang)
//   A   : visibilitas Matahari (bayangan TERPANGGANG: bukit, bibir kawah, bangunan, batu → tanpa shadow map!)
//
// Bayangan terpanggang inilah yang membuat preset Low tetap punya bayangan panjang di tanah tanpa biaya per-frame.
import * as THREE from 'three';
import { smoothstep, fbm } from '../utils.js';
import { dataTexture } from './Materials.js';

export function hash2(ix, iz, s = 0) {
  let h = Math.imul(ix | 0, 374761393) ^ Math.imul(iz | 0, 668265263) ^ Math.imul(s | 0, 1274126177);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

const MC = 6.5;   // ukuran sel mikro-kawah (m)
/** Tinggi mikro-relief (m) — kawah kecil 0,5–3,2 m. Deterministik, tanpa state. */
export function microRelief(x, z) {
  const ci = Math.floor(x / MC), cj = Math.floor(z / MC);
  let h = 0;
  for (let j = -1; j <= 1; j++) for (let i = -1; i <= 1; i++) {
    const I = ci + i, J = cj + j;
    if (hash2(I, J, 11) > 0.8) continue;
    const cx = (I + 0.1 + 0.8 * hash2(I, J, 12)) * MC, cz = (J + 0.1 + 0.8 * hash2(I, J, 13)) * MC;
    const r = 0.5 + 2.7 * Math.pow(hash2(I, J, 14), 2.2);
    const dx = x - cx, dz = z - cz, d2 = dx * dx + dz * dz;
    if (d2 > r * r * 2.4) continue;
    const t = Math.sqrt(d2) / r, depth = r * 0.2;
    if (t < 1) h -= (1 - t * t) * depth;
    h += Math.exp(-Math.pow((t - 1.05) / 0.25, 2)) * depth * 0.35;
  }
  return h;
}

/**
 * @param size       sisi tekstur (256 Low, 512 Medium/High)
 * @param colliders  collider dunia (stasiun + batu) → penghalang cahaya
 */
export function bakeMacroMap({ config, half, size: N, heightFn, colliders, sunDir, noise, noiseB, aniso = 1 }) {
  const W = half * 2, texel = W / N;
  const wx = (i) => -half + (i + 0.5) * texel;

  // ---- 1) tinggi kasar (grid 3 m) + raster tinggi dasar T ----
  const G = 142, gs = W / (G - 1);
  const Hs = new Float32Array(G * G);
  for (let j = 0; j < G; j++) for (let i = 0; i < G; i++) Hs[j * G + i] = heightFn(-half + i * gs, -half + j * gs);
  const bil = (x, z) => {
    const fx = Math.min(G - 1.001, Math.max(0, (x + half) / gs)), fz = Math.min(G - 1.001, Math.max(0, (z + half) / gs));
    const i = Math.floor(fx), j = Math.floor(fz), tx = fx - i, tz = fz - j;
    const a = Hs[j * G + i], b = Hs[j * G + i + 1], c = Hs[(j + 1) * G + i], d = Hs[(j + 1) * G + i + 1];
    return (a + (b - a) * tx) * (1 - tz) + (c + (d - c) * tx) * tz;
  };
  const T = new Float32Array(N * N), O = new Float32Array(N * N);
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const h = bil(wx(i), wx(j)); T[j * N + i] = h; O[j * N + i] = h; }

  // ---- 2) stempel penghalang (bangunan, batu) ke O ----
  const toI = (x) => Math.floor((x + half) / texel);
  for (const c of colliders) {
    if (c.sh === 0) continue;
    if (c.k === 'c') {
      const i0 = Math.max(0, toI(c.x - c.r)), i1 = Math.min(N - 1, toI(c.x + c.r));
      const j0 = Math.max(0, toI(c.z - c.r)), j1 = Math.min(N - 1, toI(c.z + c.r));
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
        const dx = wx(i) - c.x, dz = wx(j) - c.z;
        if (dx * dx + dz * dz <= c.r * c.r && c.y1 > O[j * N + i]) O[j * N + i] = c.y1;
      }
    } else if (c.k === 'b') {
      const ex = Math.abs(c.hx * c.c) + Math.abs(c.hz * c.s), ez = Math.abs(c.hx * c.s) + Math.abs(c.hz * c.c);
      const i0 = Math.max(0, toI(c.x - ex)), i1 = Math.min(N - 1, toI(c.x + ex));
      const j0 = Math.max(0, toI(c.z - ez)), j1 = Math.min(N - 1, toI(c.z + ez));
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
        const dx = wx(i) - c.x, dz = wx(j) - c.z;
        const lx = dx * c.c + dz * c.s, lz = -dx * c.s + dz * c.c;
        if (Math.abs(lx) <= c.hx && Math.abs(lz) <= c.hz && c.y1 > O[j * N + i]) O[j * N + i] = c.y1;
      }
    } else {                                                        // kubah
      const i0 = Math.max(0, toI(c.x - c.baseR)), i1 = Math.min(N - 1, toI(c.x + c.baseR));
      const j0 = Math.max(0, toI(c.z - c.baseR)), j1 = Math.min(N - 1, toI(c.z + c.baseR));
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
        const dx = wx(i) - c.x, dz = wx(j) - c.z, d = Math.sqrt(dx * dx + dz * dz);
        let top = d <= c.baseR ? c.y0 + c.baseH : -Infinity;
        if (d < c.R) top = Math.max(top, c.y0 + c.baseH + Math.sqrt(c.R * c.R - d * d));
        if (top > O[j * N + i]) O[j * N + i] = top;
      }
    }
  }

  // ---- 3) visibilitas Matahari: ray-march jarang + penumbra yang melebar menurut jarak ----
  const hl = Math.hypot(sunDir.x, sunDir.z) || 1e-6;
  const sdx = sunDir.x / hl, sdz = sunDir.z / hl, tanE = sunDir.y / hl;
  const steps = [1.1, 2.2, 3.6, 5.4, 7.8, 11, 15, 20, 27, 36, 48, 64, 85, 110];
  const vis = new Float32Array(N * N);
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const idx = j * N + i, x = wx(i), z = wx(j), g = T[idx];
    let v = O[idx] > g + 0.35 ? 0 : 1;                               // tanah di bawah bangunan
    if (v) {
      for (let s = 0; s < steps.length; s++) {
        const d = steps[s];
        const ii = Math.floor((x + sdx * d + half) / texel), jj = Math.floor((z + sdz * d + half) / texel);
        if (ii < 0 || jj < 0 || ii >= N || jj >= N) break;
        const open = (g + d * tanE - O[jj * N + ii]) / (0.7 + 0.075 * d);
        const k = open <= -0.5 ? 0 : open >= 0.5 ? 1 : open + 0.5;
        if (k < v) { v = k; if (v <= 0) break; }
      }
    }
    vis[idx] = v;
  }
  const visB = new Float32Array(N * N);                              // blur 3×3 → tepi bayangan lembut, bebas tangga
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    let s = 0, n = 0;
    for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
      const ii = i + di, jj = j + dj;
      if (ii < 0 || jj < 0 || ii >= N || jj >= N) continue;
      const w = di === 0 && dj === 0 ? 2 : 1;
      s += vis[jj * N + ii] * w; n += w;
    }
    visB[j * N + i] = s / n;
  }

  // ---- 4) mikro-relief (tinggi) → tilt ----
  const M = new Float32Array((N + 2) * (N + 2));
  const MS = N + 2;
  for (let j = -1; j <= N; j++) for (let i = -1; i <= N; i++) {
    const x = -half + (i + 0.5) * texel, z = -half + (j + 0.5) * texel;
    const station = Math.hypot(x - config.station.x, z - config.station.z);
    const k = 0.4 + 0.6 * smoothstep(20, 70, station);              // area stasiun lebih bersih
    M[(j + 1) * MS + (i + 1)] = (microRelief(x, z) + fbm(noise, x * 0.9 + 3, z * 0.9 - 8, 2) * 0.05) * k;
  }

  // ---- 5) albedo + AO + keluaran RGBA ----
  const fresh = config.craters.filter((c) => c.fresh);
  const out = new Uint8Array(N * N * 4);
  const edgeW = 16;
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const x = wx(i), z = wx(j), idx = j * N + i;
    const m0 = M[(j + 1) * MS + i + 1];
    const gx = (M[(j + 1) * MS + i + 2] - M[(j + 1) * MS + i]) / (2 * texel);
    const gz = (M[(j + 2) * MS + i + 1] - M[(j) * MS + i + 1]) / (2 * texel);

    // oklusi cekungan: tinggi tengah dibanding rata-rata tetangga 4 m
    const h = T[idx];
    const cav = h - 0.25 * (bil(x + 4, z) + bil(x - 4, z) + bil(x, z + 4) + bil(x, z - 4));
    let ao = 1 + Math.max(-1.6, Math.min(0.5, cav)) * 0.2 + m0 * 0.32;

    let alb = 1 + fbm(noiseB, x * 0.05 + 21, z * 0.05 - 13, 3) * 0.26 + (noise(x * 0.6, z * 0.6) - 0.5) * 0.14;
    for (const c of fresh) {                                         // ejecta kawah segar: bercak + sinar radial terang
      const dx = x - c.x, dz = z - c.z, d = Math.sqrt(dx * dx + dz * dz);
      if (d > c.r * 6.5) continue;
      const a = Math.atan2(dz, dx);
      const rayN = noise(Math.cos(a) * 3.4 + c.x * 0.13, Math.sin(a) * 3.4 + c.z * 0.13);
      const ray = Math.pow(Math.max(0, rayN * 2 - 0.85), 1.6);
      const env = smoothstep(c.r * 0.85, c.r * 1.25, d) * (1 - smoothstep(c.r * 2.4, c.r * 6.5, d));
      alb += 0.55 * ray * env + 0.28 * (1 - smoothstep(c.r * 1.0, c.r * 2.1, d)) * smoothstep(c.r * 0.5, c.r * 1.0, d);
    }

    // dekat tepi area dekat → netral (menyatu dengan mesh far yang polos)
    const em = Math.min(half - Math.abs(x), half - Math.abs(z));
    const e = smoothstep(0, edgeW, em);
    const o = idx * 4;
    const enc = (v) => Math.max(0, Math.min(255, Math.round(128 + v * 127)));
    out[o] = enc(gx * 2.2 * e);
    out[o + 1] = enc(gz * 2.2 * e);
    out[o + 2] = Math.max(0, Math.min(255, Math.round(255 * 0.5 * (1 + (alb * ao - 1) * e))));
    out[o + 3] = Math.max(0, Math.min(255, Math.round(255 * (1 + (visB[idx] - 1) * e))));
  }

  const tex = dataTexture(out, N, N, { aniso, repeat: false });
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  return tex;
}

/** Tekstur 1×1 netral dipakai sebelum bake selesai (material sudah bisa dikompilasi). */
export function neutralMacro() {
  const t = new THREE.DataTexture(new Uint8Array([128, 128, 128, 255]), 1, 1, THREE.RGBAFormat, THREE.UnsignedByteType);
  t.needsUpdate = true;
  return t;
}
