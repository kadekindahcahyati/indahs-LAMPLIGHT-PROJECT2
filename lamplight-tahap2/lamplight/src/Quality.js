// LAMPLIGHT — pengaturan kualitas & adaptasi performa untuk PC spesifikasi rendah.
//
// Urutan preset: low < medium < high. Mode 'auto' memilih awal berdasarkan perangkat,
// lalu AdaptiveQuality menurunkan beban secara otomatis kalau FPS terus rendah.
// Paksa manual lewat URL: ?quality=low | medium | high

// Field baru Tahap 2:
//   maxPixels   : batas jumlah piksel yang dirender (layar besar di GPU lemah → resolusi internal diturunkan otomatis)
//   shadowRadius: setengah lebar frustum bayangan yang mengikuti pemain (m); kecil = tajam
//   terrainSeg  : segmen mesh terrain dekat (Stage 1 = 110)   macroTex/detailTex: ukuran tekstur peta makro/detail
//   detail2     : 2 pembacaan tekstur detail (lebih kaya, memecah pengulangan) vs 1 (paling murah)   aniso: anisotropic filtering tanah
//   motes/puffs : jumlah butiran/kepulan debu   milkyTex: lebar tekstur Bima Sakti (px)   panel: detail panel lambung
export const PRESETS = {
  low:    { name: 'low',    pixelRatio: 1,    maxPixels: 1.0e6, antialias: false, shadows: false, shadowMap: 0,    shadowRadius: 0,  lampLight: false, starScale: 0.55, rockScale: 0.55, earthTex: 512,
            terrainSeg: 110, macroTex: 256, detailTex: 128, detail2: false, aniso: 1, motes: 36,  puffs: 16, milkyTex: 512,  panel: 128 },
  medium: { name: 'medium', pixelRatio: 1.25, maxPixels: 2.1e6, antialias: true,  shadows: true,  shadowMap: 1024, shadowRadius: 64, lampLight: true,  starScale: 0.85, rockScale: 0.8,  earthTex: 1024,
            terrainSeg: 128, macroTex: 512, detailTex: 192, detail2: true,  aniso: 4, motes: 90,  puffs: 28, milkyTex: 1024, panel: 256 },
  high:   { name: 'high',   pixelRatio: 2,    maxPixels: 4.2e6, antialias: true,  shadows: true,  shadowMap: 2048, shadowRadius: 80, lampLight: true,  starScale: 1,    rockScale: 1,    earthTex: 1024,
            terrainSeg: 156, macroTex: 512, detailTex: 256, detail2: true,  aniso: 8, motes: 140, puffs: 32, milkyTex: 1024, panel: 256 },
};
const ORDER = ['low', 'medium', 'high'];

// Pilihan pemain di title screen disimpan di localStorage (dibungkus try/catch: bisa diblokir browser).
export const MODES = ['auto', 'low', 'medium', 'high'];
const STORE_KEY = 'lamplight.quality';
export function savedMode() {
  try { const v = localStorage.getItem(STORE_KEY); return MODES.includes(v) ? v : null; } catch { return null; }
}
export function saveMode(mode) {
  try { localStorage.setItem(STORE_KEY, mode); } catch { /* abaikan */ }
}

/** Prioritas: ?quality= di URL → pilihan tersimpan → config. Hasil punya field `mode` ('auto' atau nama preset). */
export function pickQuality(requested = 'auto') {
  const url = new URLSearchParams(location.search).get('quality');
  const want = url && MODES.includes(url) ? url : (savedMode() || requested);
  if (PRESETS[want]) return { ...PRESETS[want], mode: want };

  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 4;
  const mobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
  let level = 'medium';
  // Bayangan dirender SEKALI (statis), jadi 'medium' aman untuk PC biasa; AdaptiveQuality menurunkan bila perlu.
  if (mobile || cores <= 2 || mem <= 2) level = 'low';
  else if (cores >= 12 && mem >= 8) level = 'high';
  return { ...PRESETS[level], mode: 'auto' };
}

/**
 * Memantau FPS dan menurunkan kualitas bertahap. Tidak pernah menaikkan lagi (stabilitas > kecantikan).
 * Yang bisa diubah saat runtime: pixelRatio dan shadow. (Antialias tidak bisa diganti setelah context dibuat.)
 */
export class AdaptiveQuality {
  constructor(game) {
    this.game = game;
    this.ema = 60;
    this.slowTime = 0;
    this.cooldown = 4;     // detik pemanasan awal (shader compile dll.)
    this.enabled = game.quality.mode === 'auto';   // pilihan manual = tidak diutak-atik otomatis
  }

  update(dt) {
    if (!this.enabled || dt <= 0 || dt > 0.5) return;
    this.cooldown = Math.max(0, this.cooldown - dt);
    this.ema += (1 / dt - this.ema) * Math.min(1, dt * 1.5);
    if (this.cooldown > 0) return;

    if (this.ema < 42) this.slowTime += dt; else this.slowTime = Math.max(0, this.slowTime - dt * 2);
    if (this.slowTime > 2.5) {
      this.slowTime = 0;
      this.cooldown = 3;
      this.stepDown();
    }
  }

  stepDown() {
    const g = this.game;
    const q = g.quality;
    if (q.lampLight) {
      q.lampLight = false;
      g.station.setQuality(q);
      console.info('[LAMPLIGHT] FPS rendah → PointLight lampu dimatikan');
    } else if (q.shadows) {
      g.setShadows(false);
      console.info('[LAMPLIGHT] FPS rendah → shadow dimatikan');
    } else if (q.pixelRatio > 0.75) {
      q.pixelRatio = Math.max(0.75, q.pixelRatio - 0.25);
      g.applyPixelRatio();
      console.info('[LAMPLIGHT] FPS rendah → pixelRatio', q.pixelRatio);
    }
  }
}

export function qualityIndex(name) { return ORDER.indexOf(name); }
