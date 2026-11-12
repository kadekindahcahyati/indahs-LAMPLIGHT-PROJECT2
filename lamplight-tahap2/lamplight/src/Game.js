// LAMPLIGHT — inti game (Tahap 1: fondasi, Tahap 2: grafis + pemain orang pertama).
//
// Tanggung jawab Game:
//   • membuat renderer (satu-satunya tempat WebGLRenderer dibuat) + dua scene:
//       skyScene : bintang, Bumi, Matahari, Bima Sakti (mengikuti kamera)  → digambar lebih dulu
//       scene    : terrain, batu, stasiun, cahaya, debu, kabut tipis        → digambar setelah depth di-clear
//   • membangun dunia bertahap (supaya progress bar loading bergerak)
//   • dunia tabrakan (CollisionWorld) dari collider stasiun + batu, dan PlayerController
//   • game loop, resize, kualitas adaptif, state machine:
//         loading → title → intro → play ⇄ paused        play/paused → returning → title
//
// Titik sambung untuk tahap berikutnya (lihat README.md):
//   game.terrain.groundAt(x, z)   permukaan mesh persis      game.station.lamp        lampu hangat (puzzle)
//   game.player                   posisi/arah/pemain         game.collision           collider statis
//   game.addUpdater(fn(dt, t))    logika per-frame           game.state               'title' | 'intro' | 'play' | 'paused' | 'returning'
import * as THREE from 'three';
import { CONFIG } from './config.js';
import { AdaptiveQuality, pickQuality } from './Quality.js';
import { CameraRig } from './CameraRig.js';
import { createLighting } from './world/Lighting.js';
import { createTerrain } from './world/Terrain.js';
import { createRocks } from './world/Rocks.js';
import { createSky } from './world/Sky.js';
import { createStation } from './world/Station.js';
import { createDust } from './world/Dust.js';
import { CollisionWorld } from './player/CollisionWorld.js';
import { PlayerController } from './player/PlayerController.js';

const CONTROLS_HINT = 'W A S D jalan  ·  Shift lari  ·  Spasi lompat  ·  Esc jeda  ·  F3 info performa';
const SENS_KEY = 'lamplight.sens';
const INV_KEY = 'lamplight.invertY';

/** Beri browser kesempatan mengecat (progress bar) di antara langkah build yang berat. */
const yieldFrame = () => new Promise((resolve) => {
  if (document.hidden) { setTimeout(resolve, 0); return; }
  requestAnimationFrame(() => setTimeout(resolve, 0));
});

function loadNum(key, def) {
  try { const v = parseFloat(localStorage.getItem(key)); return Number.isFinite(v) ? v : def; } catch { return def; }
}
function saveVal(key, v) { try { localStorage.setItem(key, String(v)); } catch { /* abaikan */ } }

export class Game {
  constructor({ canvas, ui }) {
    this.canvas = canvas;
    this.ui = ui;
    this.config = CONFIG;
    this.quality = pickQuality(CONFIG.quality);
    this.state = 'loading';

    this.scene = new THREE.Scene();
    this.skyScene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(CONFIG.camera.fov, window.innerWidth / window.innerHeight, CONFIG.camera.near, CONFIG.camera.far);

    this.elapsed = 0;
    this._last = 0;
    this._raf = 0;
    this._updaters = [];
    this._fps = 60;
    this._statsT = 0;
    this._running = false;
    this._pausedAt = 0;
  }

  // ================================================================= init
  async init() {
    const { ui, config, quality } = this;
    this._createRenderer();
    this._bindEvents();

    const step = async (p, text, fn) => { ui.setProgress(p, text); await yieldFrame(); return fn(); };

    this.lighting = await step(0.04, 'Menyalakan Matahari…', () => createLighting(this.scene, config, quality));
    this.terrain = await step(0.10, 'Membentuk permukaan Bulan…', () => createTerrain(config, quality));
    this.rocks = await step(0.32, 'Menebar bebatuan…', () => createRocks(config, quality, this.terrain));
    this.sky = await step(0.44, 'Menata langit dan Bumi…', () => createSky(config, this.lighting, quality));
    this.station = await step(0.60, 'Membangun stasiun penelitian…', () => createStation(config, this.lighting, quality, this.terrain));

    // dunia tabrakan + peta makro terrain (bayangan terpanggang butuh posisi bangunan & batu)
    await step(0.74, 'Memanggang bayangan dan detail permukaan…', () => {
      const colliders = [...this.station.colliders, ...this.rocks.colliders];
      this.collision = new CollisionWorld({ half: config.world.size / 2 + 20 }).addAll(colliders).build();
      this.terrain.bakeDetail({ colliders, sunDir: this.lighting.sunDir });
    });

    // kabut sangat tipis: pemisah kedalaman pegunungan jauh (ringan, bawaan material)
    this.scene.fog = new THREE.FogExp2(0x0b1018, 0.00042);

    this.dust = createDust(config, quality);
    this.scene.add(this.terrain.group, this.rocks.group, this.station.group, this.dust.group);
    this.skyScene.add(this.sky.group);

    this.rig = new CameraRig(this.camera, config, this.terrain);
    this.rig.setAspect(this.camera.aspect);
    this._createPlayer();
    this.adaptive = new AdaptiveQuality(this);
    this.applyPixelRatio();

    // pemanasan shader → tidak ada "patah" saat frame pertama tampil
    await step(0.9, 'Mengompilasi shader…', async () => {
      try {
        await this.renderer.compileAsync(this.scene, this.camera);
        await this.renderer.compileAsync(this.skyScene, this.camera);
      } catch { /* tidak fatal: shader akan dikompilasi saat render pertama */ }
    });
    this.sky.update(0, 0, this.camera);
    this._render();
    ui.setProgress(1, 'Siap');

    this.state = 'title';
    ui.showTitle();
    ui.hideLoading();
    this._running = true;
    this._last = performance.now();
    this._raf = requestAnimationFrame(this._loop);
  }

  _createPlayer() {
    const ui = this.ui;
    this.player = new PlayerController({
      camera: this.camera, canvas: this.canvas, config: this.config, terrain: this.terrain, world: this.collision,
      hooks: {
        onLockChange: (locked) => this._onLockChange(locked),
        onDragMode: () => {
          ui.setDragMode(true);
          ui.showHint('Kunci mouse tidak tersedia di sini: tahan klik kiri lalu geser mouse untuk melihat sekeliling', 9000);
        },
        onJump: (p) => this.dust.puff(p.x, p.y, p.z, 'jump'),
        onLand: (p, impact) => this.dust.puff(p.x, p.y, p.z, 'land', impact / 3),
        onStep: (p, speed) => this.dust.puff(p.x, p.y, p.z, 'step', speed / 6),
        onBoundary: () => ui.showHint('Batas area jelajah. Kembali ke arah stasiun.', 3500),
      },
    });
    this.player.sensitivity = loadNum(SENS_KEY, 1);
    this.player.invertY = loadNum(INV_KEY, 0) === 1;
    this.player.setAspect(this.camera.aspect);

    ui.bindPause({
      sens: this.player.sensitivity,
      invert: this.player.invertY,
      onResume: () => this.resume(),
      onTitle: () => this.backToTitle(),
      onSens: (v) => { this.player.sensitivity = v; saveVal(SENS_KEY, v); },
      onInvert: (on) => { this.player.invertY = on; saveVal(INV_KEY, on ? 1 : 0); },
    });
  }

  // ================================================================= renderer
  _createRenderer() {
    const q = this.quality;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: this.canvas, antialias: q.antialias, alpha: false, stencil: false, powerPreference: 'default',
      });
    } catch (err) {
      throw new Error('WebGL tidak tersedia di browser ini.');
    }
    if (!renderer.getContext()) throw new Error('WebGL tidak tersedia di browser ini.');

    renderer.autoClear = false;                 // kita clear manual (dua scene)
    renderer.info.autoReset = false;            // statistik dijumlah per frame, di-reset manual
    renderer.setClearColor(0x000000, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = this.config.fill.exposure;

    // Bayangan Matahari: peta dirender ulang HANYA bila perlu (autoUpdate=false): saat pemain berpindah jauh
    // (lihat _followShadow) atau kualitas berubah. Biaya per-frame ≈ 0.
    renderer.shadowMap.enabled = !!q.shadows;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.shadowMap.autoUpdate = false;
    renderer.shadowMap.needsUpdate = true;

    this.renderer = renderer;
  }

  applyPixelRatio() {
    const q = this.quality;
    const w = window.innerWidth, h = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, q.pixelRatio);
    // GPU lemah (mis. Intel UHD 600): batasi jumlah piksel yang dirender; layar besar → resolusi internal turun otomatis
    if (q.maxPixels) dpr = Math.min(dpr, Math.sqrt(q.maxPixels / Math.max(1, w * h)));
    dpr = Math.max(0.5, dpr);
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(w, h, false);
    if (this.sky) this.sky.setPixelRatio(dpr);
    if (this.dust) this.dust.setPixelRatio(dpr);
    this._dpr = dpr;
  }

  setShadows(on) {
    this.quality.shadows = !!on;
    this.renderer.shadowMap.enabled = !!on;
    this.lighting.setShadows(!!on);
    if (on) this.renderer.shadowMap.needsUpdate = true;   // render ulang peta bayangan
  }

  /** Pindahkan frustum bayangan mengikuti pemain; dirender ulang hanya tiap ±18 m (snap ke texel → tidak berenang). */
  _followShadow() {
    if (!this.quality.shadows) return;
    const f = this.lighting.shadowFocus, p = this.player.pos;
    if (Math.hypot(p.x - f.x, p.z - f.z) > this.lighting.shadowRadius * 0.28) {
      this.lighting.focusShadow(p.x, p.z);
      this.renderer.shadowMap.needsUpdate = true;
    }
  }

  // ================================================================= events
  _bindEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      if (this.rig) this.rig.setAspect(this.camera.aspect);
      if (this.player) this.player.setAspect(this.camera.aspect);
      this.applyPixelRatio();
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.rig) return;
      this.rig.pointer.set((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1));
    });

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        if (this.state === 'play') this.pause();
        // Esc yang SAMA yang melepas kunci mouse bisa ikut sampai ke sini → abaikan 300 ms pertama setelah jeda.
        // Pakai waktu PEMBUATAN event (bukan waktu handler berjalan): bila satu frame berat berada di antara
        // pointerlockchange dan keydown, handler terlambat tidak boleh dianggap Esc kedua dari pemain.
        else if (this.state === 'paused') {
          const t = e.timeStamp > 0 && e.timeStamp < 1e11 ? e.timeStamp : performance.now();
          if (t - this._pausedAt > 300) this.resume();
        }
      } else if (e.code === 'F3') { e.preventDefault(); this.ui.toggleStats(); }
    });

    // tab disembunyikan → jeda (kalau sedang bermain) & jangan akumulasi dt raksasa saat kembali
    document.addEventListener('visibilitychange', () => {
      this._last = performance.now();
      if (document.hidden && this.state === 'play') this.pause();
    });

    this.canvas.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      this._running = false;
      cancelAnimationFrame(this._raf);
      this.ui.showFatal('Konteks grafis terputus (driver/GPU me-reset). Muat ulang halaman untuk melanjutkan.');
    });
    this.canvas.addEventListener('webglcontextrestored', () => location.reload());
  }

  _onLockChange(locked) {
    if (locked) {
      // Permintaan kunci yang masih tertunda bisa dikabulkan SETELAH menu jeda tampil (Esc cepat setelah "Lanjutkan")
      // → lepaskan lagi, kalau tidak kursor tetap terkunci dan tombol menu tidak bisa diklik.
      if (this.state === 'paused' || this.state === 'title' || this.state === 'returning') {
        this.player.releaseLock();
        return;
      }
      this.ui.setDragMode(false);
      if (this.state === 'play') this.ui.showHint(CONTROLS_HINT, 8000);
    } else if (this.state === 'play') {
      this.pause();               // kunci mouse lepas (Esc / alt-tab) → menu jeda
    }
  }

  // ================================================================= state machine
  start() {
    if (this.state !== 'title') return;
    this.state = 'intro';
    this.ui.hideTitle();
    this.dust.setVisible(false);
    this.player.requestLock();    // klik/Enter START adalah gestur pengguna → kunci mouse langsung tersedia saat intro selesai
    this.rig.goTo('explore', this.config.camera.introDuration, {
      arc: [9, 1.6, 0],
      onDone: () => this._beginPlay(),
    });
  }

  /** Akhir intro sinematik: kamera diserahkan ke pemain tanpa lompatan visual. */
  _beginPlay() {
    this.rig.enabled = false;
    this.player.spawnFromCamera();
    this.player.setActive(true);
    this.state = 'play';
    this.ui.setCinematic(false);
    this.ui.setPlaying(true);
    this.dust.clear();
    this.dust.setVisible(true);
    if (this.player.locked || this.player.dragMode) this.ui.showHint(CONTROLS_HINT, 9000);
    else this.ui.showHint('Klik layar untuk mengunci mouse  ·  ' + CONTROLS_HINT, 0);
  }

  pause() {
    if (this.state !== 'play') return;
    this.state = 'paused';
    this._pausedAt = performance.now();
    this.player.setActive(false);
    this.player.releaseLock();
    this.ui.hideHint();
    this.ui.showPause();
  }

  resume() {
    if (this.state !== 'paused') return;
    this.state = 'play';
    this._last = performance.now();
    this.ui.hidePause();
    this.player.setActive(true);
    if (!this.player.locked && !this.player.dragMode) {
      this.player.requestLock();                       // dipanggil dari klik tombol → gestur sah
      this.ui.showHint('Klik layar untuk mengunci mouse', 0);
    }
  }

  backToTitle() {
    if (this.state !== 'play' && this.state !== 'paused') return;
    this.state = 'returning';
    this.player.setActive(false);
    this.player.releaseLock();
    this.dust.setVisible(false);
    this.ui.hidePause();
    this.ui.hideHint();
    this.ui.setPlaying(false);
    this.ui.setCinematic(true);
    if (this.quality.shadows) { this.lighting.focusShadow(0, 0); this.renderer.shadowMap.needsUpdate = true; }
    this.rig.enabled = true;
    this.rig.syncFromCamera();                         // transisi mulai dari pose pemain terakhir
    this.rig.goTo('title', this.config.camera.backDuration, {
      arc: [-6, 1.0, 0],
      onDone: () => { this.state = 'title'; this.ui.showTitle(); },
    });
  }

  /** Daftarkan logika per-frame (tahap berikutnya: puzzle, dll.). fn(dt, elapsed). */
  addUpdater(fn) { this._updaters.push(fn); return () => { this._updaters = this._updaters.filter((f) => f !== fn); }; }

  // ================================================================= loop
  _loop = (now) => {
    if (!this._running) return;
    this._raf = requestAnimationFrame(this._loop);
    const dt = Math.min(0.1, Math.max(0, (now - this._last) / 1000));
    this._last = now;
    this.elapsed += dt;

    this.rig.update(dt);
    if (this.state === 'play') { this.player.update(dt); this._followShadow(); }
    this.sky.update(dt, this.elapsed, this.camera);
    this.station.update(dt, this.elapsed);
    this.dust.update(dt, this.camera, this.renderer.domElement.height);
    for (let i = 0; i < this._updaters.length; i++) this._updaters[i](dt, this.elapsed);
    this.adaptive.update(dt);

    this._render();
    this._stats(dt);
  };

  _render() {
    const r = this.renderer;
    r.info.reset();
    r.clear();
    r.render(this.skyScene, this.camera);   // langit dulu
    r.clearDepth();                         // …lalu depth dibuang → tanah selalu menutupi langit
    r.render(this.scene, this.camera);
  }

  _stats(dt) {
    if (dt > 0) this._fps += (1 / dt - this._fps) * Math.min(1, dt * 2);
    this._statsT += dt;
    if (this._statsT < 0.5) return;
    this._statsT = 0;
    if (!this.ui.statsVisible) return;
    const i = this.renderer.info.render;
    const q = this.quality;
    const p = this.player;
    this.ui.setStats(
      `${this._fps.toFixed(0)} fps · ${i.calls} draw · ${(i.triangles / 1000).toFixed(1)}k tri\n` +
      `grafis: ${q.name}${q.mode === 'auto' ? ' (auto)' : ''} · px ${this._dpr.toFixed(2)} · bayangan ${q.shadows ? 'on' : 'off'}\n` +
      `state: ${this.state} · pemain ${p.pos.x.toFixed(1)}, ${p.pos.y.toFixed(1)}, ${p.pos.z.toFixed(1)} · ` +
      `${p.speed.toFixed(1)} m/s · ${p.grounded ? 'tanah' : 'udara'}${p.locked ? ' · mouse terkunci' : p.dragMode ? ' · drag-look' : ''}`,
    );
  }
}
