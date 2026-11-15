// Pass 2: bare-filename check for the 262 pass-1 orphan candidates, scanning src/ + public/ only
const fs = require('fs');
const path = require('path');
const IMG_DIR = 'E:/github/afarer/public/images';
const SRC = 'E:/github/afarer/src';
const PUB = 'E:/github/afarer/public';

function walkFiles(dir, exts, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules') continue;
      walkFiles(p, exts, out);
    } else if (exts.some((x) => e.name.endsWith(x))) out.push(p);
  }
}

const imgs = [];
walkFiles(IMG_DIR, ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.avif'], imgs);

const targets = [];
walkFiles(SRC, ['.astro', '.ts', '.tsx', '.js', '.json', '.yaml', '.yml', '.md', '.css', '.html'], targets);
walkFiles(PUB, ['.txt', '.xml', '.json', '.html', '.md', '.js', '.css'], targets);

const remaining = new Map();
for (const p of imgs) {
  const rel = path.relative(IMG_DIR, p).replace(/\\/g, '/');
  remaining.set(p, ['images/' + rel, path.basename(p)]);
}
for (const f of targets) {
  let c;
  try {
    c = fs.readFileSync(f, 'utf8');
  } catch {
    continue;
  }
  for (const [p, needles] of [...remaining]) {
    if (needles.some((n) => c.includes(n))) remaining.delete(p);
  }
}
let bytes = 0;
for (const p of remaining.keys()) bytes += fs.statSync(p).size;
console.log('src+public unreferenced:', remaining.size, (bytes / 1048576).toFixed(1) + 'MB');
const byDir = {};
for (const p of remaining.keys()) {
  const d = path.dirname(path.relative(IMG_DIR, p));
  byDir[d] = (byDir[d] || 0) + 1;
}
for (const [d, n] of Object.entries(byDir).sort((a, b) => b[1] - a[1])) console.log('  ' + d + ': ' + n);
