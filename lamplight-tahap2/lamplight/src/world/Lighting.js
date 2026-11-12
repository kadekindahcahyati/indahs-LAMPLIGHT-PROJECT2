// LAMPLIGHT — pencahayaan ringan.
// Hanya 3 cahaya, satu-satunya yang bisa membuat bayangan adalah Matahari:
//   - Sun        : DirectionalLight hangat, sudut rendah → bayangan panjang (dramatis).
//   - Earthshine : DirectionalLight biru redup dari arah Bumi, tanpa bayangan.
//   - Hemisphere : pengisi sangat redup supaya sisi gelap tidak 100% hitam.
// Satu-satunya PointLight (lampu hangat stasiun) dibuat di Station.js dan hanya aktif di preset medium/high.
// Bayangan Matahari statis → dirender SEKALI (renderer.shadowMap.autoUpdate = false, lihat Game.js).
// Tahap 2: frustum bayangan kini kecil & tajam (quality.shadowRadius) dan DIPINDAH mengikuti pemain lewat
// focusShadow(x, z) (disnap ke grid texel → bayangan tidak "berenang") — hanya dirender ulang tiap pemain berpindah ±18 m.
// Di luar frustum bayangan, tanah tetap bernaungan lewat bayangan terpanggang (TerrainDetail.js).
import * as THREE from 'three';
import { dirFromAngles } from '../utils.js';

export function createLighting(scene, config, quality) {
  const sunDir = dirFromAngles(config.sun.azimuth, config.sun.elevation);
  const earthDir = dirFromAngles(config.earth.azimuth, config.earth.elevation);

  // langit gelap kebiruan di atas; tanah regolit yang disinari Matahari memantulkan cahaya hangat ke sisi bawah benda
  const hemi = new THREE.HemisphereLight(0x25314d, 0x3a3631, config.fill.hemi);
  scene.add(hemi);

  const earthshine = new THREE.DirectionalLight(0x6f93c8, config.fill.earthshine);
  earthshine.position.copy(earthDir).multiplyScalar(100);
  scene.add(earthshine);

  const sun = new THREE.DirectionalLight(0xfff1dc, config.sun.intensity);
  sun.position.copy(sunDir).multiplyScalar(260);
  sun.target.position.set(0, 0, 0);
  scene.add(sun, sun.target);

  // Bayangan hanya mencakup sekitar pemain (±R m); R kecil = texel lebih rapat = bayangan lebih tajam.
  const sc = sun.shadow.camera;
  const R = quality.shadowRadius || 95;
  sc.left = -R; sc.right = R; sc.top = R; sc.bottom = -R;
  sc.near = 10; sc.far = 620;
  sun.shadow.bias = -0.0006;
  sun.shadow.radius = 2;
  const focus = { x: 0, z: 0 };
  const _t = new THREE.Vector3(), _r = new THREE.Vector3(), _u = new THREE.Vector3();

  /** Pusatkan frustum bayangan di (x, z) (disnap ke texel agar stabil). Perlu renderer.shadowMap.needsUpdate = true setelahnya. */
  function focusShadow(x, z) {
    const size = sun.shadow.mapSize.x || quality.shadowMap || 1024;
    const texel = (2 * R) / size;
    _r.crossVectors(sunDir, new THREE.Vector3(0, 1, 0)).normalize();    // sumbu "kanan" ruang cahaya
    _u.crossVectors(_r, sunDir).normalize();                            // sumbu "atas" ruang cahaya
    _t.set(x, 0, z);
    const sr = _t.dot(_r), su = _t.dot(_u);
    _t.addScaledVector(_r, Math.round(sr / texel) * texel - sr).addScaledVector(_u, Math.round(su / texel) * texel - su);
    sun.target.position.copy(_t);
    sun.position.copy(_t).addScaledVector(sunDir, 260);
    sun.target.updateMatrixWorld();
    focus.x = x; focus.z = z;
    sun.shadow.normalBias = texel * 1.8;
  }
  focusShadow(0, 0);

  function setShadows(on) {
    sun.castShadow = on;
    if (on && quality.shadowMap) {
      if (sun.shadow.mapSize.x !== quality.shadowMap) {
        sun.shadow.mapSize.set(quality.shadowMap, quality.shadowMap);
        if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
        focusShadow(focus.x, focus.z);
      }
    }
  }
  setShadows(quality.shadows);

  return { hemi, earthshine, sun, sunDir, earthDir, setShadows, focusShadow, shadowFocus: focus, shadowRadius: R };
}
