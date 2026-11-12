// LAMPLIGHT — rig kamera sinematik (title + intro + kembali ke title). Saat bermain, kamera diambil alih oleh
// PlayerController (rig.enabled = false); syncFromCamera() menyambung kembali pose terakhir pemain ke transisi sinematik.
//
// Konsep: setiap "mode" adalah FUNGSI POSE  f(waktu) → { pos, target, fov }.
//   title   : kamera rendah, "bernapas" pelan antara dua pose (config.camera.title) — dipakai di layar judul.
//   explore : pose tenang di depan airlock + sedikit goyang napas + parallax mouse.
// Perpindahan antar mode = transisi sinematik: pose terakhir (snapshot) dicampur ke pose tujuan
// dengan easing + lengkung samping (arc) supaya lintasannya melengkung, bukan garis lurus.
//
// Tahap berikutnya: tambahkan mode baru dengan menulis fungsi pose, atau matikan rig ini saat pemain
// mengambil alih kamera (rig.enabled = false).
import * as THREE from 'three';
import { easeInOut, clamp } from './utils.js';

const _v = new THREE.Vector3();

function makePose() {
  return { pos: new THREE.Vector3(), target: new THREE.Vector3(), fov: 50 };
}
function copyPose(dst, src) {
  dst.pos.copy(src.pos); dst.target.copy(src.target); dst.fov = src.fov;
  return dst;
}

export class CameraRig {
  /**
   * @param camera   THREE.PerspectiveCamera
   * @param config   CONFIG
   * @param terrain  untuk menjaga kamera tidak menembus tanah (terrain.heightAt)
   */
  constructor(camera, config, terrain) {
    this.camera = camera;
    this.cfg = config.camera;
    this.terrain = terrain;
    this.enabled = true;

    this.mode = 'title';          // 'title' | 'explore'  (mode tujuan saat sedang transisi)
    this.transitioning = false;
    this.time = 0;                // waktu rig (detik)
    this.aspect = 16 / 9;

    this.pointer = new THREE.Vector2();        // -1..1, diisi dari Game (mouse)
    this._pointerSmooth = new THREE.Vector2();

    this._from = makePose();
    this._live = makePose();
    this._out = makePose();
    this._k = 0;
    this._duration = 1;
    this._arc = new THREE.Vector3();
    this._onDone = null;
    this._lastFov = -1;

    this._pose(this.mode, 0, this._out);
    this._apply(this._out);
  }

  setAspect(aspect) { this.aspect = aspect; this._lastFov = -1; }

  /**
   * Ambil pose dari kamera yang sedang dipakai (mis. pemain) sebagai titik awal transisi berikutnya.
   * Dipanggil sebelum goTo() setelah rig diaktifkan kembali.
   */
  syncFromCamera() {
    const cam = this.camera;
    this._out.pos.copy(cam.position);
    cam.getWorldDirection(_v);
    this._out.target.copy(cam.position).addScaledVector(_v, 24);
    let fov = cam.fov;
    const ref = 16 / 9;
    if (this.aspect < ref) {                                   // batalkan pelebaran FOV layar sempit (_fovFor menerapkannya lagi)
      fov = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(fov) / 2) * (this.aspect / ref)));
    }
    this._out.fov = fov;
    this._lastFov = -1;
    this.transitioning = false;
    this._onDone = null;
  }

  /** Pindah ke mode lain dengan transisi sinematik. */
  goTo(mode, duration, { arc = [6, 1.2, 0], onDone = null } = {}) {
    copyPose(this._from, this._out);               // snapshot pose saat ini
    this.mode = mode;
    this.transitioning = true;
    this._k = 0;
    this._duration = Math.max(0.01, duration);
    this._arc.set(arc[0], arc[1], arc[2]);
    this._onDone = onDone;
  }

  // ---------------------------------------------------------------- fungsi pose
  _pose(mode, t, out) {
    const c = this.cfg;
    const px = this._pointerSmooth.x, py = this._pointerSmooth.y;
    if (mode === 'title') {
      const { a, b, period } = c.title;
      const s = 0.5 - 0.5 * Math.cos((t / period) * Math.PI * 2);     // 0..1..0 mulus
      out.pos.fromArray(a.pos).lerp(_v.fromArray(b.pos), s);
      out.target.fromArray(a.target).lerp(_v.fromArray(b.target), s);
      out.fov = a.fov + (b.fov - a.fov) * s;
      // napas halus + parallax mouse sangat kecil
      out.pos.y += Math.sin(t * 0.43) * 0.06;
      out.target.x += px * 1.2; out.target.y += py * 0.6;
    } else {
      const e = c.explore;
      out.pos.fromArray(e.pos);
      out.target.fromArray(e.target);
      out.fov = e.fov;
      out.pos.x += Math.sin(t * 0.31) * 0.07;
      out.pos.y += Math.sin(t * 0.77) * 0.025;
      out.target.x += px * 3.2; out.target.y += py * 1.5;   // "melihat sekeliling" sedikit
    }
    return out;
  }

  /** FOV vertikal efektif: layar sempit (rasio < 16:9) melebar supaya komposisi tidak terpotong. */
  _fovFor(fov) {
    const ref = 16 / 9;
    if (this.aspect >= ref) return fov;
    const v = 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(fov) / 2) * (ref / this.aspect));
    return Math.min(78, THREE.MathUtils.radToDeg(v));
  }

  // ---------------------------------------------------------------- per-frame
  update(dt) {
    if (!this.enabled) return;
    this.time += dt;
    this._pointerSmooth.lerp(this.pointer, 1 - Math.exp(-dt * 2.5));

    const live = this._pose(this.mode, this.time, this._live);
    const out = this._out;

    if (this.transitioning) {
      this._k = Math.min(1, this._k + dt / this._duration);
      const s = easeInOut(this._k);
      const bump = Math.sin(Math.PI * s);
      out.pos.copy(this._from.pos).lerp(live.pos, s).addScaledVector(this._arc, bump);
      // target bergerak sedikit lebih lambat di awal → kamera "menoleh" setelah mulai bergerak
      const st = easeInOut(clamp((this._k - 0.06) / 0.94, 0, 1));
      out.target.copy(this._from.target).lerp(live.target, st);
      out.fov = this._from.fov + (live.fov - this._from.fov) * s;
      if (this._k >= 1) {
        this.transitioning = false;
        const cb = this._onDone; this._onDone = null;
        if (cb) cb();
      }
    } else {
      copyPose(out, live);
    }
    this._apply(out);
  }

  _apply(p) {
    const cam = this.camera;
    cam.position.copy(p.pos);
    // jangan pernah menembus tanah (di area datar stasiun heightAt = 0)
    const floor = this.terrain.heightAt(cam.position.x, cam.position.z) + 1.3;
    if (cam.position.y < floor) cam.position.y = floor;
    cam.lookAt(p.target);
    const fov = this._fovFor(p.fov);
    if (Math.abs(fov - this._lastFov) > 0.001) {
      cam.fov = fov;
      cam.updateProjectionMatrix();
      this._lastFov = fov;
    }
  }
}
