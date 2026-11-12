// LAMPLIGHT — build: menggabungkan src/ + vendor/three menjadi SATU file klasik dist/lamplight.js.
// Hasilnya bisa dibuka dengan double-click index.html (tanpa server, tanpa internet).
//
//   npm run build      → build sekali (minify)
//   npm run dev        → build tanpa minify + watch + server lokal http://localhost:8080
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build, context } from 'esbuild';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const serve = process.argv.includes('--serve');

const options = {
  entryPoints: [path.join(root, 'src/main.js')],
  outfile: path.join(root, 'dist/lamplight.js'),
  bundle: true,
  format: 'iife',
  target: ['es2020'],
  minify: !serve,
  sourcemap: true,
  legalComments: 'none',
  logLevel: 'info',
  // "three" selalu diambil dari vendor/ (versi terkunci, tidak butuh npm install three).
  alias: { three: path.join(root, 'vendor/three.module.js') },
};

if (serve) {
  const ctx = await context(options);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: root, port: 8080 });
  console.log(`\n  LAMPLIGHT dev server → http://localhost:${port}/\n`);
} else {
  await build(options);
}
