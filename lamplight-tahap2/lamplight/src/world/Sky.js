// LAMPLIGHT — langit gelap: bintang (Points + shader kecil), Bima Sakti (tekstur prosedural 1 pembacaan/piksel),
// Bumi prosedural (lampu kota sisi malam, kilau laut, atmosfer), Matahari.
// Seluruh grup langit mengikuti posisi kamera setiap frame → objek terasa "tak terhingga jauhnya".
// Grup ini dirender di scene TERPISAH (skyScene) lebih dulu, lalu depth di-clear, baru dunia digambar.
// Dengan begitu tanah otomatis menutupi langit tanpa trik renderOrder.
import * as THREE from 'three';
import { makeRng, makeNoise2D, fbm, smoothstep, dirFromAngles } from '../utils.js';

// ---------------------------------------------------------------- bintang
const GALAXY_BAND = new THREE.Vector3(0.32, 0.88, 0.34).normalize();   // normal bidang galaksi (bintang + Bima Sakti)
function createStars(config, quality, seedOffset = 0) {
  const rng = makeRng(config.seed + 900 + seedOffset);
  const count = Math.floor(config.stars.count * quality.starScale);
  const haze = Math.floor(900 * quality.starScale);   // butiran sangat halus pembentuk pita galaksi
  const total = count + haze;
  const pos = new Float32Array(total * 3);
  const col = new Float32Array(total * 3);
  const size = new Float32Array(total);
  const phase = new Float32Array(total);
  const R = config.stars.radius * 1.9;
  const band = GALAXY_BAND;                                       // bidang galaksi
  const v = new THREE.Vector3();
  const tint = [new THREE.Color(0xbfd4ff), new THREE.Color(0xffffff), new THREE.Color(0xffe6c4), new THREE.Color(0xffc9a0)];

  const randDir = () => {
    const u = rng() * 2 - 1, a = rng() * Math.PI * 2, s = Math.sqrt(1 - u * u);
    return v.set(s * Math.cos(a), u, s * Math.sin(a));
  };

  for (let i = 0; i < total; i++) {
    randDir();
    const isHaze = i >= count;
    const inBand = isHaze || rng() < 0.35;
    if (inBand) { // tekan ke pita galaksi
      const d = v.dot(band);
      v.addScaledVector(band, -d * (isHaze ? 0.93 : 0.78)).normalize();
    }
    pos[i * 3] = v.x * R; pos[i * 3 + 1] = v.y * R; pos[i * 3 + 2] = v.z * R;

    // Butiran pita galaksi: kecil, redup, dan hanya putih-dingin. (Versi awal memakai titik 14–36 px
    // berwarna hangat → tampak seperti bokeh/lensa kotor, bukan bintang.)
    const c = isHaze ? tint[rng() < 0.65 ? 0 : 1] : tint[Math.floor(rng() * tint.length)];
    let b, s;
    if (isHaze) { b = 0.07 + rng() * 0.08; s = 4 + rng() * 6; }
    else {
      const m = rng();
      b = 0.35 + m * m * 0.65; s = 1.1 + m * m * m * 2.6;
      if (inBand) b *= 0.8;
    }
    col[i * 3] = c.r * b; col[i * 3 + 1] = c.g * b; col[i * 3 + 2] = c.b * b;
    size[i] = s;
    phase[i] = rng();
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(size, 1));
  geo.setAttribute('phase', new THREE.BufferAttribute(phase, 1));

  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uPx: { value: 1 } },
    vertexShader: /* glsl */`
      attribute float size; attribute float phase; attribute vec3 color;
      uniform float uTime; uniform float uPx;
      varying vec3 vColor;
      void main() {
        float tw = 0.88 + 0.12 * sin(uTime * 1.4 + phase * 60.0);
        vColor = color * tw;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * uPx;
      }`,
    fragmentShader: /* glsl */`
      varying vec3 vColor;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(vColor, a * a);
      }`,
    transparent: true, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  points.renderOrder = -30;
  points.name = 'stars';
  return points;
}


// ---------------------------------------------------------------- Bima Sakti (Tahap 2)
// Dibake sekali (512×256 Low / 1024×512 lainnya) dalam koordinat galaktik: bidang galaksi = khatulistiwa tekstur.
// Isi: pita bercahaya yang menebal ke arah "pusat", awan bintang, jalur debu gelap, sedikit rona hangat di inti.
function createMilkyWay(config, quality, band) {
  const W = quality.milkyTex || 512, H = W / 2;
  const noise = makeNoise2D(config.seed + 41), noiseB = makeNoise2D(config.seed + 42), noiseC = makeNoise2D(config.seed + 43);
  const data = new Uint8Array(W * H * 4);
  const rng = makeRng(config.seed + 44);
  // noise tanpa sambungan di lon = ±π: bergantung pada lon hanya lewat cos/sin
  const ns = (nz, lon, lat, k, oct) => fbm(nz, Math.cos(lon) * k + lat * k * 0.8, Math.sin(lon) * k - lat * k * 1.1 + 13, oct);
  for (let y = 0; y < H; y++) {
    const lat = (y + 0.5) / H * Math.PI - Math.PI / 2;
    for (let x = 0; x < W; x++) {
      const lon = ((x + 0.5) / W - 0.5) * Math.PI * 2;
      const bulge = Math.pow(Math.max(0, Math.cos(lon - 0.4)), 3);
      const w = 0.16 + 0.12 * bulge;
      const prof = Math.exp(-(lat * lat) / (w * w));
      const cloud = 0.5 + 0.5 * ns(noise, lon, lat, 2.4, 5);
      const cloudS = smoothstep(0.25, 0.8, cloud);
      const fine = Math.pow(Math.max(0, 0.5 + 0.5 * ns(noiseB, lon, lat, 9.0, 3)), 2.2);
      const lane = smoothstep(0.52, 0.78, 1 - Math.abs(ns(noiseC, lon, lat * 2.6, 3.0, 4))) * Math.exp(-(lat * lat) / (0.09 * 0.09 + 0.05 * bulge));
      let I = prof * (0.30 + 0.70 * cloudS) * (0.55 + 0.9 * fine) * (1 - 0.7 * lane);
      I += Math.exp(-(lat * lat) / 0.5) * 0.035 * (0.5 + cloud);          // glow luas sangat tipis di luar pita
      const core = bulge * prof;
      // rona: pita dingin kebiruan, inti hangat
      let r = 0.58 + 0.42 * core, g = 0.68 + 0.18 * core, b = 1.0 - 0.28 * core;
      const k = 74 * I;                                                    // puncak ≈ 74/255 → tetap redup di langit hitam
      const jit = (rng() - 0.5) * 1.6;                                     // dither: tidak ada banding di gradasi gelap
      const o = (y * W + x) * 4;
      data[o] = Math.max(0, Math.min(255, k * r + jit));
      data[o + 1] = Math.max(0, Math.min(255, k * g + jit));
      data[o + 2] = Math.max(0, Math.min(255, k * b + jit));
      data[o + 3] = 255;
    }
  }
  const tex = new THREE.DataTexture(data, W, H, THREE.RGBAFormat, THREE.UnsignedByteType);
  tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.magFilter = THREE.LinearFilter; tex.minFilter = THREE.LinearFilter; tex.generateMipmaps = false;
  tex.needsUpdate = true;

  // basis galaksi: N = normal bidang, U/V di bidang
  const N = band.clone().normalize();
  const U = new THREE.Vector3(0, 0, 1).cross(N).normalize();
  const V = N.clone().cross(U).normalize();
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(1900, 32, 16),
    new THREE.ShaderMaterial({
      uniforms: { map: { value: tex }, gU: { value: U }, gV: { value: V }, gN: { value: N } },
      vertexShader: /* glsl */`
        varying vec3 vDir;
        void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: /* glsl */`
        uniform sampler2D map; uniform vec3 gU; uniform vec3 gV; uniform vec3 gN; varying vec3 vDir;
        void main() {
          vec3 d = normalize(vDir);
          float lon = atan(dot(d, gV), dot(d, gU));
          float lat = asin(clamp(dot(d, gN), -1.0, 1.0));
          gl_FragColor = vec4(texture2D(map, vec2(lon * 0.15915494 + 0.5, lat * 0.31830989 + 0.5)).rgb, 1.0);
        }`,
      side: THREE.BackSide, depthWrite: false, depthTest: false,
    }),
  );
  mesh.frustumCulled = false;
  mesh.renderOrder = -40;
  mesh.name = 'milkyway';
  return { mesh, tex };
}

// ---------------------------------------------------------------- Bumi
/**
 * Tekstur Bumi equirectangular (RGBA8, DataTexture → tanpa pra-kali alpha).
 * Kanal A dikemas: A < 128 → daratan (A*2 = intensitas lampu kota, hanya terlihat di sisi malam);
 *                  A ≥ 128 → laut   ((A-128)*2 = kekuatan kilau Matahari; berkurang di bawah awan).
 */
function makeEarthTexture(config, W) {
  const H = W / 2;
  const d = new Uint8Array(W * H * 4);
  const nLand = makeNoise2D(config.seed + 31);
  const nCloud = makeNoise2D(config.seed + 32);
  const nDetail = makeNoise2D(config.seed + 33);
  const nCity = makeNoise2D(config.seed + 34);

  for (let y = 0; y < H; y++) {
    const v = 1 - (y + 0.5) / H;                       // baris 0 = v tekstur 0 (DataTexture tidak di-flip) → samakan orientasi Tahap 1
    const lat = Math.abs(v - 0.5) * 2;                 // 0 khatulistiwa … 1 kutub
    for (let x = 0; x < W; x++) {
      const u = x / W;
      let h = fbm(nLand, u * 5.5, v * 3.0, 5);
      h += (fbm(nDetail, u * 18, v * 9, 3)) * 0.12;
      const sea = h < 0.04;
      let r, g, b;
      if (sea) {
        const depth = smoothstep(0.04, -0.4, h);
        r = 10 + (1 - depth) * 20; g = 52 + (1 - depth) * 55; b = 110 + (1 - depth) * 60;
      } else {
        const hi = smoothstep(0.04, 0.4, h);
        const dry = smoothstep(0.25, 0.75, lat < 0.35 ? fbm(nDetail, u * 7 + 3, v * 4, 3) * 0.5 + 0.5 : 0.2);
        r = 52 + hi * 80 + dry * 70; g = 96 + hi * 25 + dry * 20; b = 48 + hi * 30 + dry * 6;
      }
      // kutub es
      const ice = smoothstep(0.8 + (fbm(nDetail, u * 12, v * 12, 2)) * 0.06, 0.92, lat);
      r += (240 - r) * ice; g += (244 - g) * ice; b += (250 - b) * ice;
      // awan
      const cl = smoothstep(0.02, 0.5, fbm(nCloud, u * 9 + 5, v * 5.5 + 2, 5) + (lat > 0.55 ? 0.06 : 0));
      const ca = cl * 0.82;
      r += (252 - r) * ca; g += (252 - g) * ca; b += (255 - b) * ca;
      // kanal A: kilau laut / lampu kota
      let a;
      if (sea) a = 128 + 127 * (1 - ca) * (1 - ice);
      else {
        const city = smoothstep(0.52, 0.8, fbm(nCity, u * 34, v * 17, 3) * 0.5 + 0.5) * smoothstep(0.62, 0.3, lat) * (1 - ice)
          * smoothstep(0.04, 0.16, h) * (1 - ca * 0.9);
        a = 127 * city;
      }
      const i = (y * W + x) * 4;
      d[i] = r; d[i + 1] = g; d[i + 2] = b; d[i + 3] = a;
    }
  }
  const tex = new THREE.DataTexture(d, W, H, THREE.RGBAFormat, THREE.UnsignedByteType);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

function createEarth(config, quality, sunDir) {
  const E = config.earth;
  const group = new THREE.Group();
  group.name = 'earth';

  const tex = makeEarthTexture(config, quality.earthTex);
  const body = new THREE.Mesh(
    new THREE.SphereGeometry(E.radius, 40, 28),
    new THREE.ShaderMaterial({
      uniforms: { map: { value: tex }, sunDir: { value: sunDir.clone() } },
      vertexShader: /* glsl */`
        varying vec2 vUv; varying vec3 vN; varying vec3 vView;
        void main() {
          vUv = uv;
          vN = normalize(mat3(modelMatrix) * normal);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vView = normalize(cameraPosition - wp.xyz);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }`,
      fragmentShader: /* glsl */`
        uniform sampler2D map; uniform vec3 sunDir;
        varying vec2 vUv; varying vec3 vN; varying vec3 vView;
        void main() {
          vec3 n = normalize(vN);
          vec3 vd = normalize(vView);
          vec4 t = texture2D(map, vUv);
          vec3 tex = t.rgb;
          float isSea = step(0.5, t.a);
          float glintMask = isSea * (t.a - 0.5) * 2.0;
          float lights = (1.0 - isSea) * t.a * 2.0;
          vec3 sd = normalize(sunDir);
          float ndl = dot(n, sd);
          float day = smoothstep(-0.10, 0.22, ndl);
          vec3 night = tex * 0.03 + vec3(0.002, 0.006, 0.016) + vec3(1.0, 0.70, 0.36) * lights * 0.85 * (1.0 - day);
          vec3 lit = tex * (0.10 + 1.05 * max(ndl, 0.0));
          vec3 col = mix(night, lit, day);
          // kilau Matahari di laut (Blinn)
          vec3 hv = normalize(sd + vd);
          col += vec3(1.0, 0.94, 0.82) * pow(max(dot(n, hv), 0.0), 70.0) * glintMask * day * 1.6;
          float fres = pow(1.0 - max(dot(n, vd), 0.0), 3.0);
          col += vec3(0.22, 0.48, 1.0) * fres * (0.10 + 0.9 * day) * 0.9;
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`,
    }),
  );
  body.frustumCulled = false;
  body.renderOrder = -20;
  body.rotation.z = THREE.MathUtils.degToRad(-23);
  group.add(body);

  const atmo = new THREE.Mesh(
    new THREE.SphereGeometry(E.radius * 1.09, 40, 28),
    new THREE.ShaderMaterial({
      uniforms: { sunDir: { value: sunDir.clone() } },
      vertexShader: /* glsl */`
        varying vec3 vVN; varying vec3 vWN;
        void main() {
          vVN = normalize(normalMatrix * normal);
          vWN = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: /* glsl */`
        uniform vec3 sunDir; varying vec3 vVN; varying vec3 vWN;
        void main() {
          float k = pow(max(0.0, 1.0 + vVN.z), 2.6);
          float lit = 0.12 + 0.88 * smoothstep(-0.35, 0.45, dot(normalize(vWN), normalize(sunDir)));
          gl_FragColor = vec4(vec3(0.25, 0.52, 1.0) * k * lit * 1.5, k * lit);
        }`,
      transparent: true, side: THREE.BackSide, depthWrite: false, depthTest: true, blending: THREE.AdditiveBlending,
    }),
  );
  atmo.frustumCulled = false;
  atmo.renderOrder = -19;
  group.add(atmo);

  return { group, body, tex };
}

// ---------------------------------------------------------------- Matahari
function glowTexture(size = 256) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const g = cv.getContext('2d');
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grd.addColorStop(0.0, 'rgba(255,248,230,1)');
  grd.addColorStop(0.08, 'rgba(255,236,200,0.85)');
  grd.addColorStop(0.28, 'rgba(255,200,140,0.22)');
  grd.addColorStop(0.6, 'rgba(255,170,100,0.05)');
  grd.addColorStop(1.0, 'rgba(255,160,90,0)');
  g.fillStyle = grd; g.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function createSun(sunDir) {
  const group = new THREE.Group();
  group.name = 'sun';
  const mat = new THREE.SpriteMaterial({
    map: glowTexture(), color: 0xffffff, blending: THREE.AdditiveBlending,
    depthTest: true, depthWrite: false, transparent: true, fog: false, toneMapped: false,
  });
  const glow = new THREE.Sprite(mat);
  glow.scale.set(520, 520, 1);
  glow.renderOrder = -10;
  const core = new THREE.Sprite(mat.clone());
  core.scale.set(95, 95, 1);
  core.renderOrder = -9;
  group.add(glow, core);
  group.position.copy(sunDir).multiplyScalar(1500);
  return { group, glow, core };
}

// ---------------------------------------------------------------- API
export function createSky(config, lighting, quality) {
  const group = new THREE.Group();
  group.name = 'sky';

  const stars = createStars(config, quality);
  const milky = createMilkyWay(config, quality, GALAXY_BAND);
  const earth = createEarth(config, quality, lighting.sunDir);
  earth.group.position.copy(lighting.earthDir).multiplyScalar(config.earth.distance);
  const sun = createSun(lighting.sunDir);
  group.add(milky.mesh, stars, earth.group, sun.group);

  return {
    group, stars, earth, sun,
    setPixelRatio(px) { stars.material.uniforms.uPx.value = px; },
    update(dt, elapsed, camera) {
      group.position.copy(camera.position);       // ikuti kamera → jarak "tak hingga"
      stars.material.uniforms.uTime.value = elapsed;
      earth.body.rotation.y += dt * 0.012;        // rotasi Bumi sangat lambat
    },
  };
}
