// LAMPLIGHT — entry point. Dibundel esbuild menjadi dist/lamplight.js (lihat tools/build.mjs).
import { Game } from './Game.js';
import { UI } from './ui/UI.js';
import { saveMode } from './Quality.js';

async function main() {
  const ui = new UI();
  const game = new Game({ canvas: document.getElementById('scene'), ui });
  window.LAMPLIGHT = game;   // akses konsol/debug: LAMPLIGHT.terrain.heightAt(0,0), LAMPLIGHT.state, …

  ui.onStart(() => game.start());
  ui.bindQuality(game.quality.mode, (mode) => {
    saveMode(mode);
    // hapus ?quality= dari URL (kalau ada) supaya pilihan tersimpan yang dipakai, lalu muat ulang
    const url = new URL(location.href);
    url.searchParams.delete('quality');
    location.replace(url.toString());
  });

  try {
    await game.init();
  } catch (err) {
    console.error('[LAMPLIGHT]', err);
    ui.showFatal(err && err.message ? err.message : String(err));
  }
}

main();
