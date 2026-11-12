// LAMPLIGHT — konfigurasi pusat.
// Semua angka "tuning" (ukuran dunia, jumlah objek, warna, kamera) ada di sini
// supaya tahap berikutnya bisa menyetel tanpa menyentuh logika.

export const CONFIG = {
  // Seed deterministik: dunia selalu sama di setiap load (penting untuk level design & puzzle nanti).
  seed: 1969,

  // Ukuran dunia (satuan = meter virtual)
  world: {
    size: 420,          // sisi terrain persegi
    segments: 110,      // jumlah segmen per sisi (low-poly, ~24k segitiga)
    baseHeight: 0,
  },

  // Kawah: [x, z, radius, kedalaman]. Posisi pas dengan stasiun dijaga bebas dari kawah.
  craters: [
    { x: -95,  z: -70,  r: 42, d: 6.5 },   // kawah besar di kiri-belakang
    { x: 110,  z: -40,  r: 30, d: 4.8 },
    { x: 40,   z: 120,  r: 24, d: 3.8 },
    { x: -130, z: 70,   r: 28, d: 4.2 },
    { x: 150,  z: 110,  r: 34, d: 5.0 },
    { x: -30,  z: -150, r: 36, d: 5.4 },
    { x: 28,   z: -92,  r: 16, d: 2.6, fresh: true },   // fresh: ejecta terang + sinar radial (peta makro)
    { x: -55,  z: 55,   r: 11, d: 1.8 },
    { x: 75,   z: 45,   r: 9,  d: 1.5, fresh: true },
    { x: -15,  z: 95,   r: 10, d: 1.6 },
    // Tahap 2: kawah tambahan di tepi area jelajah (di luar zona datar stasiun)
    { x: 125,  z: -150, r: 22, d: 3.4 },
    { x: -172, z: -20,  r: 20, d: 3.2 },
    { x: -105, z: 150,  r: 17, d: 2.8 },
    { x: 170,  z: 20,   r: 12, d: 2.0 },
    { x: -75,  z: -135, r: 9,  d: 1.5 },
    { x: 62,   z: 160,  r: 8,  d: 1.3, fresh: true },
    { x: -148, z: -125, r: 14, d: 2.2 },
    { x: 95,   z: 95,   r: 7,  d: 1.1 },
  ],

  // Area datar tempat stasiun berdiri (terrain diratakan di sini)
  station: {
    x: 0,
    z: 0,
    flatRadius: 46,
    blendRadius: 78,
  },

  // Tata letak stasiun (koordinat dunia, y = atas, +Z = menuju kamera awal).
  // Semua berada di dalam station.flatRadius supaya berdiri di tanah rata.
  // Stasiun, batu (keep-out) dan kamera membaca titik-titik ini — ubah di sini saja.
  layout: {
    dome:    { x: 0,   z: -8,  r: 8.5 },          // kubah habitat utama
    airlock: { x: 0,   z: 2.6 },                   // pintu depan kubah
    lamp:    { x: 4.6, z: 7.0, height: 4.6, arm: -1 }, // satu-satunya lampu hangat: "lamplight" (lengan menghadap pintu)
    moduleA: { x: -21, z: -8,  len: 15, r: 3.1 },
    moduleB: { x: 21,  z: -8,  len: 12, r: 2.8 },  // miring/ambles sedikit
    tower:   { x: 7,   z: -27 },
    pad:     { x: -24, z: 15,  r: 10 },
    dish:    { x: 31,  z: 3 },                     // antena parabola menghadap Bumi
    mast:    { x: 33,  z: -22 },
    solar:   { x: -25, z: -24 },
    tanks:   { x: 17,  z: 11 },
    rover:   { x: -10, z: 14 },
    flag:    { x: 11,  z: 14 },
  },

  rocks: {
    big: 70,
    medium: 150,
    small: 260,
  },

  stars: { count: 1800, radius: 900 },

  earth: {
    radius: 52,
    distance: 700,
    // Arah Bumi di langit (azimuth, elevasi dalam derajat)
    azimuth: 38,
    elevation: 12,   // diturunkan: kamera judul kini menunduk, Bumi harus tetap utuh di bawah letterbox atas
  },

  sun: {
    azimuth: -62,
    elevation: 17,   // rendah → bayangan panjang & dramatis (tapi cukup tinggi agar tanah tidak hitam)
    intensity: 3.6,
  },

  // Cahaya pengisi (sisi yang membelakangi Matahari). Tuning terpusat di sini.
  fill: {
    hemi: 0.8,         // pantulan langit/tanah, sangat redup tapi mencegah hitam pekat
    earthshine: 0.55,  // cahaya Bumi: biru dingin dari arah Bumi
    exposure: 1.1,     // tone-mapping exposure renderer
  },

  colors: {
    regolithLight: 0x8d8b88,
    regolithDark: 0x4a4a4e,
    rock: 0x5e5c5c,
    rockDark: 0x3d3d42,
    hullWhite: 0xc9cdd1,
    hullGrey: 0x6f757c,
    hullDark: 0x30343a,
    rust: 0x7a4a34,
    accent: 0xffb347,      // warna "lampu" — motif LAMPLIGHT
    glass: 0x1d3342,
  },

  camera: {
    fov: 52,
    near: 0.5,
    far: 2200,
    // Shot sinematik (koordinat dunia, y = atas). CameraRig.js membaca ini — ubah di sini untuk menyetel komposisi.
    // Title: kamera rendah "bernapas" pelan antara pose a ↔ b (siklus `period` detik).
    // Kamera menunduk sedikit → cakrawala naik ke ±45% tinggi layar; area gelap di bawahnya
    // dipakai untuk teks judul sehingga LAMPLIGHT tidak menimpa stasiun.
    title: {
      period: 56,
      a: { pos: [-22, 2.1, 56], target: [2, 0.2, -4], fov: 50 },
      b: { pos: [-9, 1.8, 47], target: [6, 0.9, -7], fov: 46 },
    },
    // Pose tenang di depan pintu airlock; lampu hangat berada di sisi kanan frame.
    explore: { pos: [-2.2, 1.75, 19], target: [1.2, 2.6, 0], fov: 56 },
    introDuration: 11,   // detik: START → explore
    backDuration: 7,     // detik: explore → title (tombol Esc)
  },

  // Pemain orang pertama (Tahap 2) — lihat player/PlayerController.js. Satuan: meter, detik.
  player: {
    eyeHeight: 1.68,        // tinggi mata dari kaki
    height: 1.8,            // tinggi kapsul tabrakan
    radius: 0.38,           // jari-jari kapsul tabrakan
    walkSpeed: 3.2,         // m/s (jalan)
    runSpeed: 6.4,          // m/s (tahan Shift)
    groundAccel: 20,        // m/s² saat menekan arah di tanah
    groundFriction: 16,     // m/s² saat melepas tombol di tanah (berhenti halus, tidak tiba-tiba)
    airAccel: 2.6,          // kendali di udara kecil → momentum terasa melayang
    gravity: 2.6,           // m/s². Bumi 9,81 · Bulan asli 1,62 (dibuat sedikit lebih besar agar lompatan tetap terkendali)
    jumpSpeed: 3.1,         // m/s → puncak lompatan ≈ 1,85 m, di udara ≈ 2,4 detik (di Bumi: 0,45 m, 0,6 detik)
    maxFall: 18,
    stepHeight: 0.45,       // tinggi anak tangga/undakan yang otomatis dinaiki
    snapDown: 0.42,         // menempel ke tanah saat menuruni lereng kecil (tidak "terbang" di puncak bukit)
    maxSlopeDeg: 42,        // lereng lebih curam dari ini tidak bisa didaki
    playRadius: 186,        // batas area jelajah dari pusat stasiun (mesh dekat berakhir di ±210)
    fov: 72, runFov: 77,    // FOV vertikal (derajat); melebar sedikit saat lari
    mouseRadPerPx: 0.0022,  // sensitivitas dasar (dikali slider di menu jeda)
    pitchLimitDeg: 89,      // batas pandang atas/bawah — hampir bebas
    bob: 0.032,             // ayunan kepala saat berjalan (m)
  },

  // Preset kualitas (lihat Quality.js). "auto" memilih berdasarkan perangkat.
  quality: 'auto',
};
