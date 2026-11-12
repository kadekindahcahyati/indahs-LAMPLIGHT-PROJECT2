// LAMPLIGHT — kontrol pemain orang pertama (Tahap 2). Modul mandiri: tidak tahu apa pun soal Game/UI.
//
// Input   : W/A/S/D (atau panah) jalan · Shift lari · Spasi lompat · mouse melihat (pointer lock; jika browser menolak,
//           tahan klik kiri dan seret = mode "drag-look" supaya tetap bisa dimainkan, mis. di dalam iframe).
// Fisika  : langkah tetap 1/120 dtk (akumulator) → hasil sama di 30 fps maupun 144 fps; kamera diinterpolasi antar-langkah.
//           Gravitasi Bulan (config.player.gravity), momentum terjaga di udara, lompatan tinggi & panjang.
// Dunia   : tanah = terrain.groundAt (permukaan mesh persis), bangunan/batu = CollisionWorld (dorong keluar + naik undakan),
//           lereng > maxSlopeDeg tidak bisa didaki, batas area jelajah melingkar di sekitar stasiun.
// Kamera  : mengikuti mata pemain; goyang kepala halus saat berjalan, "tekuk" saat mendarat, FOV melebar saat lari.
//
// Hooks (opsional): onLockChange(locked), onDragMode(), onJump(pos), onLand(pos, impact), onStep(pos, speed), onBoundary().
import * as THREE from 'three';

const STEP = 1 / 120;
const _e = new THREE.Euler(0, 0, 0, 'YXZ');
const _v = new THREE.Vector3();
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

export class PlayerController {
  constructor({ camera, canvas, config, terrain, world, hooks = {} }) {
    this.camera = camera;
    this.canvas = canvas;
    this.cfg = config.player;
    this.center = { x: config.station.x, z: config.station.z };
    this.terrain = terrain;
    this.world = world;
    this.hooks = hooks;

    this.pos = new THREE.Vector3();      // kaki (langkah fisika terakhir)
    this.prev = new THREE.Vector3();     // kaki (langkah sebelumnya) → interpolasi
    this.vel = new THREE.Vector3();
    this.yaw = 0;                         // 0 = menghadap -Z
    this.pitch = 0;
    this.grounded = true;
    this.active = false;
    this.locked = false;
    this.dragMode = false;
    this.sensitivity = 1;
    this.invertY = false;

    this.keys = new Set();
    this._dragging = false;
    this._acc = 0;
    this._jumpBuf = 0;
    this._coyote = 0;
    this._stride = 0;
    this._air = 0;
    this._stepOffset = 0;
    this._landDip = 0;
    this._bobPhase = 0;
    this._bobAmp = 0;
    this._fov = this.cfg.fov;
    this._lastFov = -1;
    this._aspect = 16 / 9;
    this._cosSlope = Math.cos(THREE.MathUtils.degToRad(this.cfg.maxSlopeDeg));
    this._g = { h: 0, ny: 1 };
    this._edgeT = 0;

    this._bind();
  }

  // ================================================================== input
  _bind() {
    this._onKeyDown = (e) => {
      if (!this.active || e.metaKey || e.ctrlKey || e.altKey) return;
      const c = e.code;
      if (c === 'Space' || c === 'ArrowUp' || c === 'ArrowDown' || c === 'ArrowLeft' || c === 'ArrowRight') e.preventDefault();
      if (c === 'Space' && !e.repeat) this._jumpBuf = 0.12;
      this.keys.add(c);
    };
    this._onKeyUp = (e) => { this.keys.delete(e.code); };
    this._onMouseMove = (e) => {
      if (!this.active) return;
      if (!(this.locked || (this.dragMode && this._dragging))) return;
      const dx = e.movementX || 0, dy = e.movementY || 0;
      if (Math.abs(dx) > 450 || Math.abs(dy) > 450) return;        // lonjakan glitch (mis. saat kunci baru terpasang)
      const k = this.cfg.mouseRadPerPx * this.sensitivity;
      this.yaw -= dx * k;
      if (this.yaw > Math.PI) this.yaw -= Math.PI * 2; else if (this.yaw < -Math.PI) this.yaw += Math.PI * 2;
      const lim = THREE.MathUtils.degToRad(this.cfg.pitchLimitDeg);
      this.pitch = clamp(this.pitch - dy * k * (this.invertY ? -1 : 1), -lim, lim);
    };
    this._onMouseDown = (e) => {
      if (!this.active || e.button !== 0) return;
      if (!this.locked) this.requestLock();                          // klik = (coba) kunci mouse
      if (this.dragMode) this._dragging = true;
    };
    this._onMouseUp = () => { this._dragging = false; };
    this._onLockChange = () => {
      this.locked = document.pointerLockElement === this.canvas;
      if (this.locked) { this.dragMode = false; this._dragging = false; }
      if (this.hooks.onLockChange) this.hooks.onLockChange(this.locked);
    };
    this._onLockError = () => {
      // Beri kesempatan percobaan ulang (tanpa unadjustedMovement) sebelum menyerah ke mode drag-look.
      setTimeout(() => { if (!this.locked && this.active) this._enableDrag(); }, 400);
    };
    this._onBlur = () => { this.keys.clear(); this._dragging = false; };

    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
    window.addEventListener('mousemove', this._onMouseMove);
    this.canvas.addEventListener('mousedown', this._onMouseDown);
    window.addEventListener('mouseup', this._onMouseUp);
    window.addEventListener('blur', this._onBlur);
    document.addEventListener('pointerlockchange', this._onLockChange);
    document.addEventListener('pointerlockerror', this._onLockError);
  }

  dispose() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    window.removeEventListener('mousemove', this._onMouseMove);
    this.canvas.removeEventListener('mousedown', this._onMouseDown);
    window.removeEventListener('mouseup', this._onMouseUp);
    window.removeEventListener('blur', this._onBlur);
    document.removeEventListener('pointerlockchange', this._onLockChange);
    document.removeEventListener('pointerlockerror', this._onLockError);
  }

  _enableDrag() {
    if (this.dragMode) return;
    this.dragMode = true;
    if (this.hooks.onDragMode) this.hooks.onDragMode();
  }

  /** Minta kunci mouse (harus dipanggil dari gestur pengguna: klik/tombol). Gagal → mode drag-look. */
  requestLock() {
    if (this.locked) return;
    const c = this.canvas;
    if (!c.requestPointerLock) { this._enableDrag(); return; }
    const retry = () => {
      try {
        const q = c.requestPointerLock();
        if (q && typeof q.catch === 'function') q.catch(() => {});
      } catch { /* pointerlockerror akan menangani */ }
    };
    try {
      const p = c.requestPointerLock({ unadjustedMovement: true });   // tanpa akselerasi mouse OS (Chrome/Edge)
      if (p && typeof p.catch === 'function') p.catch(retry);
    } catch { retry(); }
  }

  releaseLock() {
    this._dragging = false;
    if (document.pointerLockElement === this.canvas && document.exitPointerLock) document.exitPointerLock();
  }

  // ================================================================== status
  setActive(on) {
    this.active = !!on;
    if (!on) { this.keys.clear(); this._dragging = false; this._jumpBuf = 0; }
    this._acc = 0;
  }

  setAspect(a) { this._aspect = a; this._lastFov = -1; }

  /** Letakkan pemain di bawah pose kamera sekarang (akhir intro sinematik) tanpa lompatan visual. */
  spawnFromCamera() {
    const cam = this.camera;
    _v.set(0, 0, -1).applyQuaternion(cam.quaternion);
    this.yaw = Math.atan2(-_v.x, -_v.z);
    this.pitch = clamp(Math.asin(clamp(_v.y, -1, 1)), -1.5, 1.5);
    this.pos.set(cam.position.x, 0, cam.position.z);
    this.world.resolve(this.pos, this.cfg.radius, this.cfg.height, this.cfg.stepHeight);
    this.pos.y = this._groundHeight(this.pos.x, this.pos.z, 1e9);
    this.prev.copy(this.pos);
    this.vel.set(0, 0, 0);
    this.grounded = true;
    this._stepOffset = cam.position.y - (this.pos.y + this.cfg.eyeHeight);   // mata turun halus ke tinggi normal
    this._landDip = 0; this._bobAmp = 0; this._acc = 0; this._air = 0;
    this._fov = cam.fov;
    this._lastFov = -1;
  }

  teleport(x, z) {
    this.pos.set(x, 0, z);
    this.pos.y = this._groundHeight(x, z, 1e9);
    this.prev.copy(this.pos);
    this.vel.set(0, 0, 0);
    this.grounded = true;
    this._stepOffset = 0;
  }

  get speed() { return Math.hypot(this.vel.x, this.vel.z); }
  get isRunning() { return this.keys.has('ShiftLeft') || this.keys.has('ShiftRight'); }

  // ================================================================== fisika
  _groundHeight(x, z, feet) {
    const gh = this.terrain.groundAt(x, z, this._g);
    const sup = this.world.support(x, z, feet, this.cfg.stepHeight);
    return sup > gh ? sup : gh;
  }

  _blockedBySlope(x, z) {
    const gh = this.terrain.groundAt(x, z, this._g);
    return this._g.ny < this._cosSlope && gh > this.pos.y + 0.02;
  }

  update(dt) {
    if (!this.active) return;
    dt = Math.min(dt, 0.1);
    this._acc += dt;
    let n = 0;
    while (this._acc >= STEP && n < 12) {
      this.prev.copy(this.pos);
      this._step(STEP);
      this._acc -= STEP; n++;
    }
    if (n === 12) this._acc = 0;
    this._updateCamera(dt, this._acc / STEP);
  }

  _step(dt) {
    const c = this.cfg, k = this.keys, pos = this.pos, vel = this.vel;

    // ---- arah yang diinginkan ----
    const fw = (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0);
    const st = (k.has('KeyD') || k.has('ArrowRight') ? 1 : 0) - (k.has('KeyA') || k.has('ArrowLeft') ? 1 : 0);
    const has = fw !== 0 || st !== 0;
    let wx = 0, wz = 0;
    if (has) {
      const sy = Math.sin(this.yaw), cy = Math.cos(this.yaw);
      wx = -sy * fw + cy * st; wz = -cy * fw - sy * st;
      const l = Math.hypot(wx, wz); wx /= l; wz /= l;
    }
    const speed = this.isRunning ? c.runSpeed : c.walkSpeed;

    // ---- percepatan horizontal ----
    if (this.grounded) {
      const tx = wx * speed, tz = wz * speed;
      const a = (has ? c.groundAccel : c.groundFriction) * dt;
      const dx = tx - vel.x, dz = tz - vel.z, d = Math.hypot(dx, dz);
      if (d <= a) { vel.x = tx; vel.z = tz; } else { vel.x += (dx / d) * a; vel.z += (dz / d) * a; }
    } else if (has) {
      // di udara hanya boleh MENAMBAH kecepatan searah keinginan (tidak mengerem) → momentum Bulan terjaga
      const cur = vel.x * wx + vel.z * wz;
      const add = Math.min(Math.max(0, speed - cur), c.airAccel * dt);
      vel.x += wx * add; vel.z += wz * add;
    }

    // ---- lompat (buffer 120 ms + coyote 100 ms) ----
    this._jumpBuf = Math.max(0, this._jumpBuf - dt);
    this._coyote = this.grounded ? 0.1 : Math.max(0, this._coyote - dt);
    if (this._jumpBuf > 0 && (this.grounded || this._coyote > 0)) {
      vel.y = c.jumpSpeed; this.grounded = false; this._coyote = 0; this._jumpBuf = 0;
      if (this.hooks.onJump) this.hooks.onJump(pos);
    }

    // ---- gerak horizontal + tabrakan + lereng ----
    const ox = pos.x, oz = pos.z;
    let nx = ox + vel.x * dt, nz = oz + vel.z * dt;
    const R = c.playRadius, cx = this.center.x, cz = this.center.z;
    const rd = Math.hypot(nx - cx, nz - cz);
    if (rd > R) {                                                  // tepi area jelajah: tahan di lingkaran
      const s = R / rd;
      nx = cx + (nx - cx) * s; nz = cz + (nz - cz) * s;
      const ux = (nx - cx) / R, uz = (nz - cz) / R, out = vel.x * ux + vel.z * uz;
      if (out > 0) { vel.x -= ux * out; vel.z -= uz * out; }
      this._edgeT -= dt;
      if (this._edgeT <= 0) { this._edgeT = 4; if (this.hooks.onBoundary) this.hooks.onBoundary(); }
    }
    if (!this._tryMove(nx, nz, ox, oz)) {
      // tersangkut lereng curam → coba geser sepanjang salah satu sumbu
      if (!this._tryMove(nx, oz, ox, oz)) {
        if (!this._tryMove(ox, nz, ox, oz)) { pos.x = ox; pos.z = oz; vel.x = 0; vel.z = 0; }
      }
    }
    // kecepatan efektif setelah tabrakan (meluncur di dinding, tidak menempel)
    const ex = (pos.x - ox) / dt, ez = (pos.z - oz) / dt;
    const l0 = Math.hypot(vel.x, vel.z), l1 = Math.hypot(ex, ez);
    if (l1 < l0 - 1e-4) { const s = l0 > 0 ? Math.min(1, l1 / l0) : 0; vel.x *= s; vel.z *= s; }

    // ---- vertikal ----
    vel.y = Math.max(-c.maxFall, vel.y - c.gravity * dt);
    const wasGrounded = this.grounded, oy = pos.y;
    pos.y += vel.y * dt;
    const ground = this._groundHeight(pos.x, pos.z, oy);
    if (pos.y <= ground) {
      if (vel.y <= 0) {
        const impact = -vel.y;
        if (wasGrounded) this._stepOffset += oy - ground;
        pos.y = ground; vel.y = 0; this.grounded = true;
        if (!wasGrounded) this._land(impact);
      } else {
        pos.y = ground;                                          // naik di tepi undakan saat masih melompat
        this.grounded = false;
      }
    } else if (wasGrounded && vel.y <= 0 && pos.y - ground <= c.snapDown) {
      this._stepOffset += oy - ground;                           // menuruni lereng/tangga: tetap menempel
      pos.y = ground; vel.y = 0; this.grounded = true;
    } else {
      this.grounded = false;
    }
    if (this.grounded) this._air = 0; else this._air += dt;

    // ---- langkah kaki & ayunan ----
    const hs = Math.hypot(vel.x, vel.z);
    if (this.grounded && hs > 0.5) {
      this._stride += hs * dt;
      this._bobPhase += hs * dt * 2.1;
      if (this._stride > 2.3) { this._stride = 0; if (this.hooks.onStep) this.hooks.onStep(pos, hs); }
    }
    this._bobAmp += ((this.grounded ? Math.min(1, hs / c.walkSpeed) : 0) - this._bobAmp) * Math.min(1, 8 * dt);
  }

  /** Pindah ke (nx,nz) dengan tabrakan; kembalikan false (dan batalkan) bila lereng terlalu curam. */
  _tryMove(nx, nz, ox, oz) {
    const c = this.cfg, pos = this.pos;
    pos.x = nx; pos.z = nz;
    this.world.resolve(pos, c.radius, c.height, c.stepHeight);
    if (this.grounded && this._blockedBySlope(pos.x, pos.z)) { pos.x = ox; pos.z = oz; return false; }
    return true;
  }

  _land(impact) {
    this._landDip = Math.min(0.28, impact * 0.055);
    if (impact > 1.0 && this.hooks.onLand) this.hooks.onLand(this.pos, impact);
  }

  // ================================================================== kamera
  _updateCamera(dt, alpha) {
    const c = this.cfg, cam = this.camera, p = this.prev, q = this.pos;
    this._stepOffset *= Math.exp(-14 * dt);
    this._landDip *= Math.exp(-8 * dt);
    const bob = Math.sin(this._bobPhase * 2) * c.bob * this._bobAmp;
    const sway = Math.sin(this._bobPhase) * c.bob * 0.6 * this._bobAmp;

    const x = p.x + (q.x - p.x) * alpha, y = p.y + (q.y - p.y) * alpha, z = p.z + (q.z - p.z) * alpha;
    _e.set(this.pitch, this.yaw, 0);
    cam.quaternion.setFromEuler(_e);
    const cs = Math.cos(this.yaw), sn = Math.sin(this.yaw);
    cam.position.set(x + cs * sway, y + c.eyeHeight + this._stepOffset + bob - this._landDip, z - sn * sway);

    const runK = this.isRunning && this.grounded ? Math.min(1, this.speed / c.runSpeed) : 0;
    const target = c.fov + (c.runFov - c.fov) * runK;
    this._fov += (target - this._fov) * Math.min(1, 6 * dt);
    let vf = this._fov;
    if (this._aspect < 16 / 9) {                                  // layar sempit: lebarkan FOV vertikal agar tidak terpotong
      const v = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(vf) / 2) * ((16 / 9) / this._aspect));
      vf = Math.min(100, THREE.MathUtils.radToDeg(v));
    }
    if (Math.abs(vf - this._lastFov) > 0.01) {
      cam.fov = vf; cam.updateProjectionMatrix(); this._lastFov = vf;
    }
  }
}
