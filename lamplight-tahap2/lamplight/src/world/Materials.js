// LAMPLIGHT — tekstur prosedural kecil + patch shader ringan untuk material Lambert/Phong (Tahap 2).
//
// Tidak ada file gambar: semua tekstur dihasilkan dari noise deterministik saat loading (≤ 256×256).
//   • detail regolit  (tileable)   : R,G = kemiringan relief (normal map 2 kanal), B = kecerahan butiran
//   • panel lambung   (tileable)   : R,G = kemiringan alur/paku keling,            B = variasi nada panel
// Shader di-patch lewat onBeforeCompile (bukan ShaderMaterial penuh) → pencahayaan Three.js tetap dipakai,
// hanya menambah 1–2 pembacaan tekstur + sedikit aritmetika per piksel.
import * as THREE from 'three';
import { makeRng } from '../utils.js';

// ------------------------------------------------------------------ noise periodik
function tileFbm(seed, base, octaves, gain = 0.5) {
  const layers = [];
  for (let o = 0; o < octaves; o++) {
    const P = base << o;
    const rng = makeRng(seed + o * 131);
    const v = new Float32Array(P * P);
    for (let i = 0; i < v.length; i++) v[i] = rng();
    layers.push({ P, v });
  }
  const sm = (t) => t * t * (3 - 2 * t);
  return (u, w) => {
    let sum = 0, amp = 1, norm = 0;
    for (const { P, v } of layers) {
      const x = u * P, y = w * P;
      let xi = Math.floor(x), yi = Math.floor(y);
      const fx = sm(x - xi), fy = sm(y - yi);
      xi = ((xi % P) + P) % P; yi = ((yi % P) + P) % P;
      const x1 = (xi + 1) % P, y1 = (yi + 1) % P;
      const a = v[yi * P + xi], b = v[yi * P + x1], c = v[y1 * P + xi], d = v[y1 * P + x1];
      const top = a + (b - a) * fx, bot = c + (d - c) * fx;
      sum += amp * (top + (bot - top) * fy);
      norm += amp; amp *= gain;
    }
    return sum / norm;
  };
}

export function dataTexture(arr, w, h, { aniso = 1, repeat = true } = {}) {
  const t = new THREE.DataTexture(arr, w, h, THREE.RGBAFormat, THREE.UnsignedByteType);
  t.wrapS = t.wrapT = repeat ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true;
  t.anisotropy = aniso;
  t.needsUpdate = true;
  return t;
}

const enc = (v) => Math.max(0, Math.min(255, Math.round(128 + v * 127)));

/** Tekstur detail regolit: relief butiran halus + lubang kecil. Tileable. */
export function makeRegolithDetail(size, seed, aniso = 1) {
  const f = tileFbm(seed, 6, 5, 0.55);
  const H = new Float32Array(size * size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) H[y * size + x] = f(x / size, y / size);

  // lubang-lubang kecil (bergulung di tepi → tetap tileable)
  const rng = makeRng(seed + 7);
  const pits = Math.floor(size * 0.55);
  for (let i = 0; i < pits; i++) {
    const cx = rng() * size, cy = rng() * size;
    const r = 1.6 + rng() * rng() * size * 0.045;
    const depth = (0.05 + rng() * 0.12) * Math.min(1, r / 3);
    const R = Math.ceil(r * 1.4);
    for (let dy = -R; dy <= R; dy++) for (let dx = -R; dx <= R; dx++) {
      const t = Math.hypot(dx, dy) / r;
      if (t > 1.4) continue;
      const bowl = t < 1 ? -(1 - t * t) : 0;
      const rim = Math.exp(-Math.pow((t - 1.05) / 0.22, 2)) * 0.35;
      const px = (((Math.round(cx) + dx) % size) + size) % size, py = (((Math.round(cy) + dy) % size) + size) % size;
      H[py * size + px] += (bowl + rim) * depth;
    }
  }

  const out = new Uint8Array(size * size * 4);
  let mean = 0;
  for (let i = 0; i < H.length; i++) mean += H[i];
  mean /= H.length;
  const at = (x, y) => H[(((y % size) + size) % size) * size + (((x % size) + size) % size)];
  const rough = makeRng(seed + 99);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const gx = (at(x + 1, y) - at(x - 1, y)) * size * 0.07;
    const gz = (at(x, y + 1) - at(x, y - 1)) * size * 0.07;
    const h = at(x, y);
    const grain = (rough() - 0.5) * 0.22;                    // butiran per-piksel
    const i = (y * size + x) * 4;
    out[i] = enc(gx); out[i + 1] = enc(gz);
    out[i + 2] = Math.max(0, Math.min(255, Math.round(128 + ((h - mean) * 1.6 + grain) * 127)));
    out[i + 3] = 255;
  }
  return dataTexture(out, size, size, { aniso });
}

/** Tekstur panel lambung: kisi panel 4×4, alur sambungan, paku keling, goresan, noda. Tileable. */
export function makePanelTexture(size, seed, aniso = 1) {
  const rng = makeRng(seed);
  const cells = 4, cs = size / cells;
  const H = new Float32Array(size * size);
  const tone = new Float32Array(size * size);
  const stain = tileFbm(seed + 3, 3, 4);
  // nada per panel
  const panelTone = Array.from({ length: cells * cells }, () => (rng() - 0.5) * 0.30);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const cx = Math.floor(x / cs), cy = Math.floor(y / cs);
    const lx = x - cx * cs, ly = y - cy * cs;
    const e = Math.min(lx, ly, cs - 1 - lx, cs - 1 - ly);         // jarak ke tepi panel
    let h = 0;
    if (e < 2.2) h -= (1 - e / 2.2) * 0.9;                          // alur sambungan
    else if (e < 4.5) h += (1 - (e - 2.2) / 2.3) * 0.18;            // tepi panel sedikit naik
    const i = y * size + x;
    H[i] = h;
    tone[i] = panelTone[cy * cells + cx] + (stain(x / size, y / size) - 0.5) * 0.55;
  }
  // paku keling di empat sudut tiap panel
  for (let cy = 0; cy < cells; cy++) for (let cx = 0; cx < cells; cx++) {
    for (const [ox, oy] of [[0.16, 0.16], [0.84, 0.16], [0.16, 0.84], [0.84, 0.84]]) {
      const px = Math.round((cx + ox) * cs), py = Math.round((cy + oy) * cs);
      for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
        const d = Math.hypot(dx, dy);
        if (d <= 1.8) H[(((py + dy) % size + size) % size) * size + (((px + dx) % size + size) % size)] += (1.8 - d) * 0.28;
      }
    }
  }
  // goresan tipis
  for (let n = 0; n < 26; n++) {
    let x = rng() * size, y = rng() * size;
    const a = rng() * Math.PI * 2, len = 6 + rng() * 26, dx = Math.cos(a), dy = Math.sin(a), s = (rng() - 0.5) * 0.16;
    for (let t = 0; t < len; t++, x += dx, y += dy) {
      const px = ((Math.round(x) % size) + size) % size, py = ((Math.round(y) % size) + size) % size;
      tone[py * size + px] += s;
    }
  }
  const out = new Uint8Array(size * size * 4);
  const at = (x, y) => H[(((y % size) + size) % size) * size + (((x % size) + size) % size)];
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const i = (y * size + x) * 4;
    out[i] = enc((at(x + 1, y) - at(x - 1, y)) * 0.55);
    out[i + 1] = enc((at(x, y + 1) - at(x, y - 1)) * 0.55);
    const seam = Math.min(1, Math.abs(at(x, y)) * 0.25);
    out[i + 2] = Math.max(0, Math.min(255, Math.round(128 + (tone[y * size + x] - seam * 0.6) * 127)));
    out[i + 3] = 255;
  }
  return dataTexture(out, size, size, { aniso });
}

// ------------------------------------------------------------------ patch shader
function patch(material, key, uniforms, { vertexPars = '', vertexMain = '', fragPars = '', fragColor = '', fragNormal = '', fragLightEnd = '', defines = {} }) {
  material.defines = { ...(material.defines || {}), ...defines };
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\n${vertexPars}`)
      .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>\n${vertexMain}`);
    let f = shader.fragmentShader
      .replace('#include <common>', `#include <common>\n${fragPars}`)
      .replace('#include <color_fragment>', `#include <color_fragment>\n${fragColor}`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>\n${fragNormal}`);
    if (fragLightEnd) f = f.replace('#include <lights_fragment_end>', `#include <lights_fragment_end>\n${fragLightEnd}`);
    shader.fragmentShader = f;
  };
  material.customProgramCacheKey = () => key + JSON.stringify(defines);
  material.needsUpdate = true;
  return material;
}

/**
 * Tanah regolit (Lambert): detail halus (1 atau 2 tap) + peta makro dunia (tilt mikro-kawah, nada, AO, visibilitas matahari).
 * uniforms: uFine, uMacro, uMacroXf (x,y = pojok kiri-atas dunia, z,w = 1/ukuran), uTune (tiltHalus, butiran, tiltMakro, —)
 */
export function patchTerrainMaterial(material, uniforms, { twoTap = false } = {}) {
  return patch(material, 'lamplight-terrain', uniforms, {
    defines: twoTap ? { DETAIL_2TAP: 1 } : {},
    vertexPars: 'varying vec3 vWPos;',
    vertexMain: 'vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;',
    fragPars: `
      uniform sampler2D uFine; uniform sampler2D uMacro; uniform vec4 uMacroXf; uniform vec4 uTune;
      varying vec3 vWPos;
      float gSunVis; vec2 gTilt;`,
    fragColor: `
      vec4 mc = texture2D(uMacro, (vWPos.xz - uMacroXf.xy) * uMacroXf.zw);
      float dN = 1.0 - smoothstep(14.0, 85.0, length(vViewPosition));
      vec4 f1 = texture2D(uFine, vWPos.xz * 0.27);
      float grain = f1.b - 0.5;
      vec2 tl = (mc.rg - 0.5) * 2.0 * uTune.z + (f1.rg - 0.5) * 2.0 * uTune.x * dN;
      #ifdef DETAIL_2TAP
        // tap kedua: tile lebih rapat & diputar → memecah pengulangan; fade menurut jarak (sampling di luar cabang → mip aman)
        vec4 f2 = texture2D(uFine, vec2(vWPos.z, -vWPos.x) * 1.07 + 0.31);
        float w2 = 1.0 - smoothstep(6.0, 40.0, length(vViewPosition));
        grain += (f2.b - 0.5) * 0.75 * (0.35 + 0.65 * w2);
        tl += (f2.rg - 0.5) * 2.0 * uTune.x * 0.55 * w2;
      #endif
      diffuseColor.rgb *= clamp((0.50 + 1.0 * mc.b) * (1.0 + grain * uTune.y * dN), 0.0, 2.2);
      gSunVis = mc.a;`,
    fragNormal: 'normal = normalize(normal - mat3(viewMatrix) * vec3(tl.x, 0.0, tl.y));',
    fragLightEnd: 'reflectedLight.directDiffuse *= mix(0.10, 1.0, gSunVis);',
  });
}

/** Batu (Lambert + InstancedMesh): butiran dominan-sumbu, gelap di dasar (AO kontak) + debu regolit. */
export function patchRockMaterial(material, uniforms) {
  return patch(material, 'lamplight-rock', uniforms, {
    vertexPars: 'varying vec3 vWPos; varying vec3 vWN; varying float vLocalY;',
    vertexMain: `
      vec4 lwp = vec4(transformed, 1.0);
      vec3 lwn = objectNormal;
      #ifdef USE_INSTANCING
        lwp = instanceMatrix * lwp; lwn = mat3(instanceMatrix) * lwn;
      #endif
      vWPos = (modelMatrix * lwp).xyz; vWN = normalize(mat3(modelMatrix) * lwn); vLocalY = position.y;`,
    fragPars: `
      uniform sampler2D uFine; uniform vec4 uTune; uniform vec3 uDust;
      varying vec3 vWPos; varying vec3 vWN; varying float vLocalY;`,
    fragColor: `
      vec3 an = abs(vWN);
      vec2 ruv = an.y > max(an.x, an.z) ? vWPos.xz : (an.x > an.z ? vWPos.zy : vWPos.xy);
      vec4 rf = texture2D(uFine, ruv * 0.45);
      float rdN = 1.0 - smoothstep(10.0, 70.0, length(vViewPosition));
      float lowK = 1.0 - smoothstep(-0.75, 0.05, vLocalY);
      diffuseColor.rgb = mix(diffuseColor.rgb, uDust * 0.9, lowK * 0.42);
      diffuseColor.rgb *= (1.0 + (rf.b - 0.5) * uTune.y * 1.5 * rdN) * mix(0.55, 1.0, smoothstep(-0.95, -0.1, vLocalY));
      vec2 rt = (rf.rg - 0.5) * 2.0 * uTune.x * 1.4 * rdN;
      vec3 rtw = an.y > max(an.x, an.z) ? vec3(rt.x, 0.0, rt.y) : (an.x > an.z ? vec3(0.0, rt.y, rt.x) : vec3(rt.x, rt.y, 0.0));`,
    fragNormal: 'normal = normalize(normal - mat3(viewMatrix) * rtw);',
  });
}

/** Lambung stasiun (Phong): panel + alur + paku keling dengan pemetaan dominan-sumbu di koordinat dunia. */
export function patchHullMaterial(material, uniforms) {
  return patch(material, 'lamplight-hull', uniforms, {
    vertexPars: 'varying vec3 vWPos; varying vec3 vWN;',
    vertexMain: 'vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz; vWN = normalize(mat3(modelMatrix) * objectNormal);',
    fragPars: `
      uniform sampler2D uPanel; uniform vec4 uTune;
      varying vec3 vWPos; varying vec3 vWN;`,
    fragColor: `
      vec3 an = abs(vWN);
      bool topDom = an.y > max(an.x, an.z);
      vec2 puv = topDom ? vWPos.xz : (an.x > an.z ? vWPos.zy : vWPos.xy);
      vec4 pn = texture2D(uPanel, puv * 0.3333);
      float pf = 1.0 - smoothstep(26.0, 100.0, length(vViewPosition));
      diffuseColor.rgb *= 1.0 + (pn.b - 0.5) * uTune.x * pf;
      vec2 pt = (pn.rg - 0.5) * 2.0 * uTune.y * pf;
      vec3 ptw = topDom ? vec3(pt.x, 0.0, pt.y) : (an.x > an.z ? vec3(0.0, pt.y, pt.x) : vec3(pt.x, pt.y, 0.0));`,
    fragNormal: 'normal = normalize(normal - mat3(viewMatrix) * ptw);',
  });
}
