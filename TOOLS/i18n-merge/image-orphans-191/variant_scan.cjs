// Supplementary scan: R2 -NNNw variant references to the 105 deletion candidates
const fs = require('fs');
const path = require('path');
const ROOT = 'E:/github/afarer';
const IMG_DIR = 'E:/github/afarer/public/images/afarer';
const SKIP_DIRS = new Set(['node_modules', '.git', '.astro', 'TOOLS']);
const BINEXT = /\.(png|jpe?g|webp|gif|avif|ico|cur|woff2?|ttf|otf|eot|mp4|webm|mp3|pdf|zip|gz|wasm)$/i;
const KEEP = new Set(['afarer-inflatable-boat-factory.webp']);
const LEGACY_PATTERNS = [
  /products[\\/]rib[\\/]/,
  /afarer-kayak-river-category/,
  /afarer-dinghy-category/,
  /afarer-rib-boat-category/,
  /afarer-inflatable-boat/,
  /afarer-zb-mt350/,
];

function walk(dir, out) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      walk(p, out);
    } else if (e.isFile() && !BINEXT.test(e.name)) out.push(p);
  }
}
function walkImgs(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkImgs(p, out);
    else if (e.isFile()) out.push(p);
  }
}
const allImgs = [];
walkImgs(IMG_DIR, allImgs);
const candidates = allImgs
  .filter((p) => LEGACY_PATTERNS.some((re) => re.test(p)))
  .filter((p) => !KEEP.has(path.basename(p)));
const stems = candidates.map((p) => path.basename(p).replace(/\.[^.]+$/, ''));
const variantRe = new RegExp('(' + stems.join('|') + ')-\\d+w', 'g');

const files = [];
walk(ROOT, files);
console.log('scanning', files.length, 'files for -NNNw variant references...');
const hits = new Map();
for (const f of files) {
  let c;
  try {
    c = fs.readFileSync(f, 'utf8');
  } catch {
    continue;
  }
  variantRe.lastIndex = 0;
  const m = c.match(variantRe);
  if (m) {
    const rel = path.relative(ROOT, f);
    hits.set(rel, [...new Set(m)]);
  }
}
console.log('variant reference hits:', hits.size);
for (const [f, v] of hits) console.log('  ' + f + ' -> ' + v.join(', '));
