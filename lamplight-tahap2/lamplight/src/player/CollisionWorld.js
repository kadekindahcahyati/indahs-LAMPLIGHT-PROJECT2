// LAMPLIGHT — dunia tabrakan statis (Tahap 2).
//
// Semua bangunan/batu mendaftarkan "collider" sederhana (bukan mesh) ke sini:
//   { k:'c', x, z, r,            y0, y1 }                    silinder tegak (lingkaran di bidang XZ)
//   { k:'b', x, z, hx, hz, c, s, y0, y1 }                    kotak berputar (OBB) — c/s = cos/sin yaw
//   { k:'d', x, z, R, baseR, baseH, cy, y0, y1 }             kubah (setengah bola di atas alas silinder)
// y0..y1 = rentang tinggi absolut (m). Pemain = silinder berjari-jari r setinggi h.
//
// Aturan satu-satunya yang dipakai pemain:
//   • collider "diinjak"  bila  y1 - stepHeight <= kaki  → tidak menghalangi, malah jadi lantai (tangga, peti, landasan)
//   • collider "di atas kepala" bila y0 >= kepala        → boleh lewat di bawahnya
//   • selain itu menghalangi → pemain didorong keluar secara horizontal (meluncur di sisi dinding)
// Broadphase: grid seragam (sel 8 m). Collider didaftarkan ke semua sel yang tersentuh AABB-nya (+margin),
// sehingga query cukup membaca SATU sel di posisi pemain. Tanpa alokasi memori saat runtime.
const CELL = 8;
const MARGIN = 0.6;      // > jari-jari pemain

export class CollisionWorld {
  constructor({ half = 230 } = {}) {
    this.half = half;
    this.n = Math.ceil((half * 2) / CELL);
    this.list = [];
    this.cells = null;           // Array<Array<collider>>
  }

  add(c) { this.list.push(c); return this; }
  addAll(arr) { for (const c of arr) this.list.push(c); return this; }

  /** Bangun grid. Panggil setelah semua collider terdaftar. */
  build() {
    const n = this.n;
    this.cells = Array.from({ length: n * n }, () => []);
    for (const c of this.list) {
      const [x0, z0, x1, z1] = aabb(c);
      const i0 = this._ci(x0 - MARGIN), i1 = this._ci(x1 + MARGIN);
      const j0 = this._ci(z0 - MARGIN), j1 = this._ci(z1 + MARGIN);
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) this.cells[j * n + i].push(c);
    }
    return this;
  }

  _ci(v) { return Math.max(0, Math.min(this.n - 1, Math.floor((v + this.half) / CELL))); }
  _cell(x, z) { return this.cells[this._ci(z) * this.n + this._ci(x)]; }

  /**
   * Dorong `p` (x,z) keluar dari semua collider penghalang. p.y = tinggi kaki.
   * Mengembalikan jumlah sentuhan (0 = bebas).
   */
  resolve(p, r, h, stepH) {
    const cell = this._cell(p.x, p.z);
    if (!cell.length) return 0;
    let hits = 0;
    for (let iter = 0; iter < 3; iter++) {
      let moved = false;
      const feet = p.y, head = p.y + h;
      for (let i = 0; i < cell.length; i++) {
        const c = cell[i];
        if (c.y1 - stepH <= feet || c.y0 >= head) continue;
        if (c.k === 'c') {
          const dx = p.x - c.x, dz = p.z - c.z, rr = c.r + r;
          const d2 = dx * dx + dz * dz;
          if (d2 < rr * rr) {
            const d = Math.sqrt(d2) || 1e-6;
            const k = (rr - d) / d;
            p.x += (d2 > 1e-10 ? dx : 1e-3) * k; p.z += dz * k;
            moved = true; hits++;
          }
        } else if (c.k === 'b') {
          const dx = p.x - c.x, dz = p.z - c.z;
          const lx = dx * c.c + dz * c.s, lz = -dx * c.s + dz * c.c;
          const qx = lx < -c.hx ? -c.hx : lx > c.hx ? c.hx : lx;
          const qz = lz < -c.hz ? -c.hz : lz > c.hz ? c.hz : lz;
          const ex = lx - qx, ez = lz - qz, d2 = ex * ex + ez * ez;
          if (d2 < r * r) {
            let nx, nz, pen;
            if (d2 > 1e-9) { const d = Math.sqrt(d2); nx = ex / d; nz = ez / d; pen = r - d; }
            else {                                     // pusat di dalam kotak → keluar lewat sisi terdekat
              const px = c.hx - Math.abs(lx), pz = c.hz - Math.abs(lz);
              if (px < pz) { nx = lx < 0 ? -1 : 1; nz = 0; pen = px + r; }
              else { nx = 0; nz = lz < 0 ? -1 : 1; pen = pz + r; }
            }
            // basis lokal → dunia: u=(c,s), v=(-s,c)
            p.x += (nx * c.c - nz * c.s) * pen;
            p.z += (nx * c.s + nz * c.c) * pen;
            moved = true; hits++;
          }
        } else {                                        // kubah
          const f = feet - c.y0;
          let rr;
          if (f < c.baseH) rr = c.baseR;
          else { const q = f - c.baseH; rr = q < c.R ? Math.sqrt(c.R * c.R - q * q) : 0; }
          if (rr <= 0) continue;
          rr += r;
          const dx = p.x - c.x, dz = p.z - c.z, d2 = dx * dx + dz * dz;
          if (d2 < rr * rr) {
            const d = Math.sqrt(d2) || 1e-6, k = (rr - d) / d;
            p.x += dx * k; p.z += dz * k; moved = true; hits++;
          }
        }
      }
      if (!moved) break;
    }
    return hits;
  }

  /**
   * Tinggi lantai tertinggi yang bisa diinjak di (x,z) untuk pemain dengan kaki di `feet`.
   * Mengembalikan -Infinity bila tidak ada (hanya tanah).
   */
  support(x, z, feet, stepH, margin = 0.12) {
    const cell = this._cell(x, z);
    let best = -Infinity;
    for (let i = 0; i < cell.length; i++) {
      const c = cell[i];
      if (c.k === 'd') continue;
      if (c.y1 > feet + stepH || c.y0 > feet + stepH || c.y1 <= best) continue;
      if (c.k === 'c') {
        const dx = x - c.x, dz = z - c.z, rr = c.r + margin;
        if (dx * dx + dz * dz > rr * rr) continue;
      } else {
        const dx = x - c.x, dz = z - c.z;
        const lx = dx * c.c + dz * c.s, lz = -dx * c.s + dz * c.c;
        if (Math.abs(lx) > c.hx + margin || Math.abs(lz) > c.hz + margin) continue;
      }
      best = c.y1;
    }
    return best;
  }

  /** Ada collider yang menutupi titik (x,z) pada ketinggian y? (untuk uji & penempatan) */
  blockedAt(x, z, y, r = 0.38, h = 1.8, stepH = 0.45) {
    const p = { x, y, z };
    const ox = x, oz = z;
    this.resolve(p, r, h, stepH);
    return Math.hypot(p.x - ox, p.z - oz) > 1e-4;
  }
}

function aabb(c) {
  if (c.k === 'c') return [c.x - c.r, c.z - c.r, c.x + c.r, c.z + c.r];
  if (c.k === 'b') {
    const ex = Math.abs(c.hx * c.c) + Math.abs(c.hz * c.s);
    const ez = Math.abs(c.hx * c.s) + Math.abs(c.hz * c.c);
    return [c.x - ex, c.z - ez, c.x + ex, c.z + ez];
  }
  return [c.x - c.baseR, c.z - c.baseR, c.x + c.baseR, c.z + c.baseR];
}
