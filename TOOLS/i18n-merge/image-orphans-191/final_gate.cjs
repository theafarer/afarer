// Final pre-deletion gate for legacy image removal (TECH 191)
// 1) Find what references afarer-inflatable-boat-factory.webp (the one REFERENCED legacy image)
// 2) Verify the other 105 legacy images are referenced NOWHERE in the repo (any text file)
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
    } else if (e.isFile() && !BINEXT.test(e.name)) {
      out.push(p);
    }
  }
}

// collect legacy candidates
function walkImgs(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkImgs(p, out);
    else if (e.isFile()) out.push(p);
  }
}
const allImgs = [];
walkImgs(IMG_DIR, allImgs);
const legacy = allImgs.filter((p) => LEGACY_PATTERNS.some((re) => re.test(p)));
const candidates = legacy.filter((p) => !KEEP.has(path.basename(p)));
console.log(
  'legacy total:',
  legacy.length,
  '| deletion candidates:',
  candidates.length,
  '| kept (referenced):',
  legacy.length - candidates.length
);

// combined stem regex: any stem not followed by word char or hyphen
const stems = candidates.map((p) => {
  const b = path.basename(p);
  return b.replace(/\.[^.]+$/, '');
});
const combined = new RegExp('(' + stems.join('|') + ')(?![\\w-])', 'g');
const perStem = new Map();
for (const s of stems) perStem.set(s, new RegExp(s + '(?![\\w-])'));

const files = [];
walk(ROOT, files);
console.log('scanning', files.length, 'text files across repo...');

const factoryRefs = [];
const candidateHits = new Map(); // file -> [stems]

for (const f of files) {
  let c;
  try {
    c = fs.readFileSync(f, 'utf8');
  } catch {
    continue;
  }
  if (c.includes('afarer-inflatable-boat-factory')) factoryRefs.push(path.relative(ROOT, f));
  combined.lastIndex = 0;
  const m = c.match(combined);
  if (m) {
    const found = [...new Set(m)];
    // classify precisely per stem
    const hits = [];
    for (const s of found) {
      const re = perStem.get(s);
      if (re.test(c)) hits.push(s);
    }
    if (hits.length) candidateHits.set(path.relative(ROOT, f), hits);
  }
}

console.log('\n=== references to kept image afarer-inflatable-boat-factory.webp ===');
for (const r of factoryRefs) console.log('  ' + r);
console.log('\n=== candidate hits (should be EMPTY for deletion) ===');
for (const [f, hits] of candidateHits) console.log('  ' + f + ' -> ' + hits.join(', '));

// write delete list
const totalBytes = candidates.reduce((a, p) => {
  try {
    return a + fs.statSync(p).size;
  } catch {
    return a;
  }
}, 0);
fs.writeFileSync('delete_list.txt', candidates.join('\n') + '\n', 'utf8');
console.log('\ndelete list written:', candidates.length, 'files,', (totalBytes / 1024 / 1024).toFixed(2), 'MB');
