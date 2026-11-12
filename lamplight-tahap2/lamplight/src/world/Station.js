// LAMPLIGHT — perakit stasiun penelitian yang ditinggalkan.
//
// Semua geometri statis digabung lewat MeshBatch (→ 3 mesh). Yang bergerak/berkedip (lampu hangat,
// lampu suar) dipisah di sini dan di-update murah lewat update(dt, t).
//
// Motif: stasiun gelap & dingin, hanya SATU lampu hangat yang masih menyala — "lamplight".
// Tahap berikutnya (puzzle) bisa memakai `station.lamp` sebagai titik fokus.
import * as THREE from 'three';
import { makeRng } from '../utils.js';
import { MeshBatch, createStationMaterials, freeze } from './StationBuilder.js';
import { stationPalette, buildDome, buildModule, buildTube, buildTower, buildPad, buildLander } from './StationParts.js';
import {
  buildDish, buildMast, buildSolar, buildTanks, buildRover, buildFlag,
  buildLampPost, buildBollards, buildCrates, buildCable, buildFootprints,
} from './StationProps.js';

function radialTexture(size, stops) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const g = cv.getContext('2d');
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  for (const [o, c] of stops) grd.addColorStop(o, c);
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function glowSprite(map, color, size, opacity) {
  const mat = new THREE.SpriteMaterial({
    map, color, opacity, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending, fog: false, toneMapped: false,
  });
  const s = new THREE.Sprite(mat);
  s.scale.set(size, size, 1);
  return s;
}

export function createStation(config, lighting, quality, terrain) {
  const L = config.layout;
  const C = stationPalette(config.colors);
  const rng = makeRng(config.seed + 21);
  const b = new MeshBatch(rng, createStationMaterials(quality, config.seed), config.colors.regolithLight);

  // ---------------- struktur utama ----------------
  buildDome(b, L.dome, C, rng);
  buildModule(b, L.moduleA, C, rng);
  buildModule(b, L.moduleB, C, rng, { tilt: 0.06, sink: 0.5 });
  buildTube(b, L.moduleA.x + L.moduleA.len / 2, L.dome.x - L.dome.r, 2.4, L.dome.z, C);
  buildTube(b, L.dome.x + L.dome.r, L.moduleB.x - L.moduleB.len / 2, 2.4, L.dome.z, C);
  buildTower(b, L.tower, C, rng);
  buildPad(b, L.pad, C, rng);
  buildLander(b, L.pad, C, rng);
  buildDish(b, L.dish, C, lighting.earthDir);
  const beaconTop = buildMast(b, L.mast, C);
  buildSolar(b, L.solar, C, rng, lighting.sunDir);
  buildTanks(b, L.tanks, C);
  buildRover(b, L.rover, C);
  buildFlag(b, L.flag, C);
  const bulb = buildLampPost(b, L.lamp, C);

  // ---------------- detail penceritaan visual ----------------
  buildBollards(b, [-13.2, 12.2], [-2.8, 6.0], 7, C);
  buildFootprints(b, [-15.5, 13.2], [-0.9, 5.8], C, rng);
  buildFootprints(b, [1.2, 5.6], [-8.2, 12.4], C, rng);
  buildCrates(b, [
    { x: 9.5, z: 6.5, yaw: -0.4, stack: true, second: true },
    { x: -18, z: 2.5, yaw: 0.8, toppled: true, barrel: 2 },
    { x: 26, z: -16, yaw: 0.2, stack: true },
  ], C, rng);
  buildCable(b, [[14.5, 10], [11, 7], [7, 2], [4.8, -2]], C, rng);
  buildCable(b, [[31, -21], [24, -22], [16, -25], [11.5, -26]], C, rng);
  buildCable(b, [[-18, -20], [-19, -14], [-20, -10.5]], C, rng);

  const group = new THREE.Group();
  group.name = 'station';
  group.add(b.toGroup('station-static'));

  // ---------------- lampu hangat (motif utama) ----------------
  const warm = new THREE.Color(config.colors.accent);
  const glowMap = radialTexture(128, [
    [0, 'rgba(255,255,255,1)'], [0.12, 'rgba(255,255,255,0.75)'],
    [0.35, 'rgba(255,255,255,0.2)'], [0.7, 'rgba(255,255,255,0.04)'], [1, 'rgba(255,255,255,0)'],
  ]);
  const poolMap = radialTexture(128, [
    [0, 'rgba(255,255,255,0.9)'], [0.4, 'rgba(255,255,255,0.35)'], [0.75, 'rgba(255,255,255,0.08)'], [1, 'rgba(255,255,255,0)'],
  ]);

  const bulbPos = new THREE.Vector3(bulb[0], bulb[1], bulb[2]);
  const bulbMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xffe2b0, toneMapped: false }),
  );
  bulbMesh.position.copy(bulbPos);
  const halo = glowSprite(glowMap, warm, 10, 0.5);
  halo.position.copy(bulbPos);
  const core = glowSprite(glowMap, 0xfff0d6, 2.3, 1);
  core.position.copy(bulbPos);

  const pool = new THREE.Mesh(
    new THREE.PlaneGeometry(22, 22),
    new THREE.MeshBasicMaterial({
      map: poolMap, color: warm, transparent: true, opacity: 0.3, depthWrite: false,
      blending: THREE.AdditiveBlending, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -2,
    }),
  );
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(bulbPos.x, terrain.heightAt(bulbPos.x, bulbPos.z) + 0.07, bulbPos.z);

  // Satu-satunya PointLight di dunia — hanya preset medium/high (lihat Quality.js).
  const lampLight = new THREE.PointLight(config.colors.accent, 60, 30, 2);
  lampLight.position.copy(bulbPos).add(new THREE.Vector3(0, -0.4, 0));
  lampLight.visible = !!quality.lampLight;

  // status airlock: strip kecil amber yang masih hidup
  const airlockPos = new THREE.Vector3(L.dome.x, 2.85, L.dome.z + L.dome.r + 2.2);
  const airlockGlow = glowSprite(glowMap, 0xffa040, 3.4, 0.4);
  airlockGlow.position.copy(airlockPos);

  // ---------------- lampu suar menara antena ----------------
  const beacon = new THREE.Mesh(
    new THREE.SphereGeometry(0.34, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xff3b2a, toneMapped: false }),
  );
  beacon.position.set(beaconTop[0], beaconTop[1], beaconTop[2]);
  const beaconGlow = glowSprite(glowMap, 0xff2a1a, 7, 0);
  beaconGlow.position.copy(beacon.position);

  group.add(bulbMesh, halo, core, pool, lampLight, airlockGlow, beacon, beaconGlow);
  freeze(group);
  // setelah freeze: yang dianimasikan hanya properti material/intensitas, bukan transform.

  const lamp = {
    position: bulbPos,       // posisi bohlam (dunia)
    light: lampLight, halo, core, pool, mesh: bulbMesh,
    on: true,                // tahap puzzle nanti: ubah lewat station.setLampOn(bool)
    level: 1,                // 0..1, dihaluskan ke target
    _target: 1,
  };

  let flick = 1;
  function update(dt, t) {
    // ---- lampu hangat: kedip halus + sesekali "drop" singkat (lampu tua) ----
    lamp._target = lamp.on ? 1 : 0;
    lamp.level += (lamp._target - lamp.level) * Math.min(1, dt * 3);
    flick = 0.94 + 0.04 * Math.sin(t * 11 + Math.sin(t * 2.7) * 3) + 0.02 * Math.sin(t * 29);
    const ph = t % 9.7;
    if (ph > 9.3) flick *= 0.5 + 0.5 * Math.abs(Math.sin((ph - 9.3) * 38));
    const k = flick * lamp.level;
    halo.material.opacity = 0.5 * k;
    core.material.opacity = k;
    bulbMesh.material.color.setRGB(1 * k, 0.89 * k, 0.69 * k);
    lampLight.intensity = 60 * k;
    pool.material.opacity = (quality.lampLight ? 0.2 : 0.38) * k;

    // ---- lampu suar: kedip tiap 2.4 dtk ----
    const on = (t % 2.4) < 0.22;
    beaconGlow.material.opacity = on ? 0.85 : 0.0;
    beacon.material.color.setRGB(on ? 1 : 0.22, on ? 0.23 : 0.04, on ? 0.16 : 0.03);
  }

  function setQuality(q) {
    lampLight.visible = !!q.lampLight && lamp.on;
    quality = q;
  }

  return {
    group, update, setQuality, lamp,
    colliders: b.colliders,      // → CollisionWorld (Game.js)
    setLampOn(v) { lamp.on = !!v; lampLight.visible = !!quality.lampLight && lamp.on; },
  };
}
