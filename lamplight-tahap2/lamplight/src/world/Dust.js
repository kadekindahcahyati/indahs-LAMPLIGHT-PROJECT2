// LAMPLIGHT — debu bulan (efek atmosferik ringan, Tahap 2).
//
//   motes : butiran debu melayang di sekitar pemain (satu draw call, SELURUH animasi di vertex shader → 0 biaya CPU/frame).
//   puffs : kepulan debu saat melompat / mendarat / berjalan (kolam kecil 28 partikel, diupdate di CPU).
// Keduanya Points + ShaderMaterial kecil, tanpa tekstur. Hanya tampil saat pemain mengendalikan (bukan di title screen).
import * as THREE from 'three';
import { makeRng } from '../utils.js';

const BOX = new THREE.Vector3(34, 14, 34);

function createMotes(count) {
  const rng = makeRng(777);
  const pos = new Float32Array(count * 3);
  const rnd = new Float32Array(count * 4);
  for (let i = 0; i < count; i++) {
    rnd[i * 4] = rng(); rnd[i * 4 + 1] = rng(); rnd[i * 4 + 2] = rng(); rnd[i * 4 + 3] = rng();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aRnd', new THREE.BufferAttribute(rnd, 4));
  const mat = new THREE.ShaderMaterial({
    uniforms: { uCam: { value: new THREE.Vector3() }, uTime: { value: 0 }, uBox: { value: BOX.clone() }, uPx: { value: 1 } },
    vertexShader: /* glsl */`
      attribute vec4 aRnd;
      uniform vec3 uCam; uniform float uTime; uniform vec3 uBox; uniform float uPx;
      varying float vA;
      void main() {
        vec3 p = aRnd.xyz * uBox + vec3(sin(uTime * 0.07 + aRnd.w * 6.28) * 2.2,
                                         uTime * 0.045 * (0.4 + aRnd.w),
                                         cos(uTime * 0.05 + aRnd.w * 6.28) * 2.2);
        p = mod(p - uCam + 0.5 * uBox, uBox) - 0.5 * uBox;
        float d = length(p);
        vA = (0.30 + 0.70 * fract(aRnd.w * 7.0)) * (1.0 - smoothstep(9.0, 17.0, d)) * smoothstep(0.7, 2.5, d)
           * (0.65 + 0.35 * sin(uTime * 1.3 + aRnd.w * 40.0));
        vec4 mv = viewMatrix * vec4(uCam + p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(uPx * (1.1 + 1.6 * aRnd.w) * clamp(12.0 / max(d, 1.0), 0.6, 2.2), 1.0, 5.0);
      }`,
    fragmentShader: /* glsl */`
      varying float vA;
      void main() {
        float r = length(gl_PointCoord - 0.5);
        gl_FragColor = vec4(1.0, 0.93, 0.8, smoothstep(0.5, 0.05, r) * vA * 0.5);
      }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  pts.name = 'dust-motes';
  return pts;
}

function createPuffs(max) {
  const pos = new Float32Array(max * 3);
  const age = new Float32Array(max).fill(99);
  const life = new Float32Array(max).fill(1);
  const size = new Float32Array(max);
  const vel = new Float32Array(max * 3);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aAge', new THREE.BufferAttribute(age, 1));
  geo.setAttribute('aLife', new THREE.BufferAttribute(life, 1));
  geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: { uPxPerUnit: { value: 600 } },
    vertexShader: /* glsl */`
      attribute float aAge; attribute float aLife; attribute float aSize;
      uniform float uPxPerUnit; varying float vA;
      void main() {
        float k = clamp(aAge / aLife, 0.0, 1.0);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        float w = aSize * (0.5 + 1.6 * sqrt(k));
        gl_PointSize = aAge >= aLife ? 0.0 : clamp(w * uPxPerUnit / max(-mv.z, 0.3), 1.0, 90.0);
        vA = (1.0 - k) * (1.0 - k) * smoothstep(0.0, 0.06, k + 0.06) * 0.55;
      }`,
    fragmentShader: /* glsl */`
      varying float vA;
      void main() {
        float r = length(gl_PointCoord - 0.5) * 2.0;
        if (r > 1.0) discard;
        gl_FragColor = vec4(0.58, 0.57, 0.56, (1.0 - r * r) * vA);
      }`,
    transparent: true, depthWrite: false,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  pts.name = 'dust-puffs';
  return { pts, pos, age, life, size, vel, geo, max, next: 0 };
}

export function createDust(config, quality) {
  const group = new THREE.Group();
  group.name = 'dust';
  const motes = createMotes(quality.motes || 0);
  const puffs = createPuffs(quality.puffs || 0);
  if (quality.motes) group.add(motes);
  if (quality.puffs) group.add(puffs.pts);
  group.visible = false;
  const rng = makeRng(4242);
  const g = config.player.gravity;

  /** Semburan debu di (x,y,z). kind: 'step' | 'jump' | 'land'. */
  function puff(x, y, z, kind = 'step', strength = 1) {
    if (!quality.puffs) return;
    const n = kind === 'land' ? 7 : kind === 'jump' ? 5 : 2;
    for (let i = 0; i < n; i++) {
      const s = puffs.next; puffs.next = (puffs.next + 1) % puffs.max;
      const a = rng() * Math.PI * 2, v = (0.5 + rng()) * (kind === 'step' ? 0.7 : 1.5) * Math.min(1.6, strength);
      puffs.pos[s * 3] = x + Math.cos(a) * 0.25; puffs.pos[s * 3 + 1] = y + 0.08; puffs.pos[s * 3 + 2] = z + Math.sin(a) * 0.25;
      puffs.vel[s * 3] = Math.cos(a) * v; puffs.vel[s * 3 + 1] = (0.25 + rng() * 0.6) * (kind === 'step' ? 0.7 : 1.1); puffs.vel[s * 3 + 2] = Math.sin(a) * v;
      puffs.age[s] = 0; puffs.life[s] = 1.8 + rng() * 1.6; puffs.size[s] = (kind === 'step' ? 0.35 : 0.55) + rng() * 0.35;
    }
  }

  function update(dt, camera, viewportH) {
    if (!group.visible) return;
    if (quality.motes) {
      const u = motes.material.uniforms;
      u.uCam.value.copy(camera.position);
      u.uTime.value += dt;
    }
    if (quality.puffs) {
      const P = puffs, pxu = viewportH / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2));
      P.pts.material.uniforms.uPxPerUnit.value = pxu;
      let any = false;
      const drag = Math.exp(-1.1 * dt);
      for (let i = 0; i < P.max; i++) {
        if (P.age[i] >= P.life[i]) continue;
        any = true;
        P.age[i] += dt;
        P.vel[i * 3] *= drag; P.vel[i * 3 + 2] *= drag;
        P.vel[i * 3 + 1] = (P.vel[i * 3 + 1] - g * 0.35 * dt) * drag;
        P.pos[i * 3] += P.vel[i * 3] * dt; P.pos[i * 3 + 1] += P.vel[i * 3 + 1] * dt; P.pos[i * 3 + 2] += P.vel[i * 3 + 2] * dt;
      }
      if (any || P.dirty) {
        P.geo.attributes.position.needsUpdate = true;
        P.geo.attributes.aAge.needsUpdate = true;
        P.geo.attributes.aLife.needsUpdate = true;
        P.geo.attributes.aSize.needsUpdate = true;
        P.dirty = any;
      }
    }
  }

  function setPixelRatio(px) { motes.material.uniforms.uPx.value = px; }
  function clear() { puffs.age.fill(99); puffs.life.fill(1); puffs.dirty = true; }

  return { group, motes, puffs, puff, update, setPixelRatio, clear, setVisible(v) { group.visible = !!v; } };
}
