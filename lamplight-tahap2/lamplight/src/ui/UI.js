// LAMPLIGHT — lapisan UI (DOM murni, tanpa library). Elemen-elemennya didefinisikan di index.html.
//
// Game tidak menyentuh DOM langsung; semua lewat kelas ini supaya tahap berikutnya (dialog, inventori,
// puzzle HUD) tinggal menambah panel baru di sini tanpa mengubah logika game.
import { MODES } from '../Quality.js';

const MODE_LABEL = { auto: 'Otomatis', low: 'Rendah', medium: 'Sedang', high: 'Tinggi' };

export class UI {
  constructor() {
    const $ = (id) => document.getElementById(id);
    this.el = {
      body: document.body,
      loading: $('loading'), loadBar: $('load-bar'), loadText: $('load-text'),
      title: $('title'), start: $('btn-start'), quality: $('btn-quality'), qualityLabel: $('quality-label'),
      hud: $('hud'), stats: $('stats'), fatal: $('fatal'), fatalMsg: $('fatal-msg'),
      pause: $('pause'), resume: $('btn-resume'), toTitle: $('btn-title'),
      sens: $('sens'), sensVal: $('sens-val'), invert: $('inv-y'),
    };
    this._hudTimer = 0;
    this.statsVisible = new URLSearchParams(location.search).has('debug');
    this.el.stats.hidden = !this.statsVisible;
  }

  // ---------------------------------------------------------------- loading
  setProgress(p, text) {
    this.el.loadBar.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
    if (text) this.el.loadText.textContent = text;
  }
  hideLoading() {
    this.el.loading.classList.add('done');
    setTimeout(() => { this.el.loading.hidden = true; }, 900);
  }

  // ---------------------------------------------------------------- title screen
  showTitle() {
    this.el.body.classList.add('cinematic');       // letterbox hitam atas-bawah
    this.el.title.hidden = false;
    // satu frame agar transisi CSS jalan
    requestAnimationFrame(() => this.el.title.classList.add('visible'));
    this.el.hud.classList.remove('visible');
    this.el.start.focus({ preventScroll: true });
  }
  hideTitle() {
    this.el.title.classList.remove('visible');
    setTimeout(() => { if (!this.el.title.classList.contains('visible')) this.el.title.hidden = true; }, 900);
  }
  setCinematic(on) { this.el.body.classList.toggle('cinematic', on); }

  onStart(cb) {
    this.el.start.addEventListener('click', () => cb());
    window.addEventListener('keydown', (e) => {
      // Enter / Space di mana pun saat title tampil (kecuali saat tombol kualitas yang sedang fokus —
      // tombol itu menangani Enter/Space sendiri, kalau tidak START ikut terpicu).
      if ((e.code === 'Enter' || e.code === 'Space') && e.target !== this.el.quality
          && this.el.title.classList.contains('visible')) {
        e.preventDefault();
        cb();
      }
    });
  }

  /** Tombol kualitas grafis: siklus Otomatis → Rendah → Sedang → Tinggi. cb(mode) dipanggil saat berubah. */
  bindQuality(currentMode, cb) {
    let mode = currentMode;
    const paint = () => { this.el.qualityLabel.textContent = MODE_LABEL[mode] || mode; };
    paint();
    this.el.quality.addEventListener('click', () => {
      mode = MODES[(MODES.indexOf(mode) + 1) % MODES.length];
      paint();
      cb(mode);
    });
  }

  // ---------------------------------------------------------------- bermain & menu jeda (Tahap 2)
  /** Mode bermain: tampilkan crosshair, sembunyikan kursor. */
  setPlaying(on) { this.el.body.classList.toggle('playing', !!on); if (!on) this.el.body.classList.remove('dragmode'); }
  setDragMode(on) { this.el.body.classList.toggle('dragmode', !!on); }

  showPause() {
    this.el.body.classList.add('paused');
    this.el.pause.hidden = false;
    requestAnimationFrame(() => this.el.pause.classList.add('visible'));
    this.el.resume.focus({ preventScroll: true });
  }
  hidePause() {
    this.el.body.classList.remove('paused');
    this.el.pause.classList.remove('visible');
    this.el.pause.hidden = true;
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  }

  /** Sambungkan menu jeda. sens: nilai awal slider; callback dipanggil saat pemain mengubah. */
  bindPause({ sens = 1, invert = false, onResume, onTitle, onSens, onInvert }) {
    const paint = (v) => { this.el.sensVal.textContent = `${v.toFixed(2).replace('.', ',')}×`; };
    this.el.sens.value = String(sens); paint(sens);
    this.el.invert.checked = !!invert;
    this.el.resume.addEventListener('click', () => onResume());
    this.el.toTitle.addEventListener('click', () => onTitle());
    this.el.sens.addEventListener('input', () => { const v = parseFloat(this.el.sens.value) || 1; paint(v); onSens(v); });
    this.el.invert.addEventListener('change', () => onInvert(this.el.invert.checked));
  }

  // ---------------------------------------------------------------- HUD minimal (petunjuk)
  showHint(text, ms = 7000) {
    this.el.hud.textContent = text;
    this.el.hud.classList.add('visible');
    clearTimeout(this._hudTimer);
    if (ms > 0) this._hudTimer = setTimeout(() => this.el.hud.classList.remove('visible'), ms);
  }
  hideHint() { clearTimeout(this._hudTimer); this.el.hud.classList.remove('visible'); }

  // ---------------------------------------------------------------- debug
  toggleStats() { this.statsVisible = !this.statsVisible; this.el.stats.hidden = !this.statsVisible; }
  setStats(text) { if (this.statsVisible) this.el.stats.textContent = text; }

  // ---------------------------------------------------------------- error fatal (mis. WebGL tidak ada)
  showFatal(message) {
    this.el.loading.hidden = true;
    this.el.fatalMsg.textContent = message;
    this.el.fatal.hidden = false;
  }
}
