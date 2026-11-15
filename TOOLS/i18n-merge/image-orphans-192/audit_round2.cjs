// Round 2 orphan audit: classify ALL current public/images files by reference status
// Layers: tight (stem+boundary / -NNNw variant) = functional reference;
//         looseOnly (substring hit w/o boundary) = manual triage;
//         orphan (no hit at all)
const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer';
const IMG_ROOT = 'E:/github/afarer/public/images';
const SKIP_DIRS = new Set(['node_modules', '.git', '.astro', 'TOOLS']);
const SKIP_FILES = new Set(['TECH.md']);
const BINEXT = /\.(png|jpe?g|webp|gif|avif|ico|cur|woff2?|ttf|otf|eot|mp4|webm|mp3|pdf|zip|gz|wasm)$/i;

function walk(dir, out, includeBin) {
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
      walk(p, out, includeBin);
    } else if (e.isFile()) {
      if (SKIP_FILES.has(e.name)) continue;
      if (!includeBin && BINEXT.test(e.name)) continue;
      out.push(p);
    }
  }
}

// collect images
const imgs = [];
(function collectImgs(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) collectImgs(p);
    else if (e.isFile() && BINEXT.test(e.name)) imgs.push(p);
  }
})(IMG_ROOT);

const info = imgs.map((p) => {
  const rel = path.relative(IMG_ROOT, p).replace(/\\/g, '/');
  const base = path.basename(p);
  const stem = base.replace(/\.[^.]+$/, '');
  return { p, rel, base, stem, status: 'orphan', looseHits: [] };
});
const byStem = new Map();
for (const i of info) if (!byStem.has(i.stem)) byStem.set(i.stem, i);

const stems = info.map((i) => i.stem);
// sort longest-first so longer stems win alternation preference deterministically
stems.sort((a, b) => b.length - a.length);
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const reStem = new RegExp('(' + stems.map(esc).join('|') + ')(?![\\w-])', 'g');
const reVariant = new RegExp('(' + stems.map(esc).join('|') + ')-\\d+w', 'g');
const reLoose = new RegExp('(' + stems.map(esc).join('|') + ')', 'g');

const files = [];
walk(ROOT, files, false);
console.log('images:', info.length, '| scanning', files.length, 'repo text files...');

for (const f of files) {
  let c;
  try {
    c = fs.readFileSync(f, 'utf8');
  } catch {
    continue;
  }
  const relFile = path.relative(ROOT, f).replace(/\\/g, '/');
  reStem.lastIndex = 0;
  reVariant.lastIndex = 0;
  reLoose.lastIndex = 0;
  const mStem = c.match(reStem);
  const mVar = c.match(reVariant);
  const mLoose = c.match(reLoose);
  if (!mLoose) continue;
  const tight = new Set([...(mStem || []), ...(mVar || []).map((v) => v.replace(/-\d+w$/, ''))]);
  for (const m of new Set(mLoose)) {
    const img = byStem.get(m);
    if (!img) continue;
    if (tight.has(m)) {
      img.status = 'referenced';
      img.looseHits.push(relFile + ' [tight]');
    } else {
      if (img.status !== 'referenced') img.status = 'looseOnly';
      img.looseHits.push(relFile + ' [loose]');
    }
  }
}

const referenced = info.filter((i) => i.status === 'referenced');
const looseOnly = info.filter((i) => i.status === 'looseOnly');
const orphan = info.filter((i) => i.status === 'orphan');

const mb = (arr) =>
  (
    arr.reduce((a, i) => {
      try {
        return a + fs.statSync(i.p).size;
      } catch {
        return a;
      }
    }, 0) /
    1024 /
    1024
  ).toFixed(2);

console.log('\nreferenced (KEEP):', referenced.length, '(' + mb(referenced) + 'MB)');
console.log('looseOnly (TRIAGE):', looseOnly.length);
for (const i of looseOnly) {
  console.log('  ' + i.rel);
  for (const h of [...new Set(i.looseHits)].slice(0, 6)) console.log('     ' + h);
}
console.log('orphan (DELETE CANDIDATES):', orphan.length, '(' + mb(orphan) + 'MB)');

fs.writeFileSync('round2_orphans.txt', orphan.map((i) => i.p).join('\n') + '\n', 'utf8');
fs.writeFileSync(
  'round2_loose.txt',
  looseOnly.map((i) => i.rel + '\t' + [...new Set(i.looseHits)].join(' | ')).join('\n') + '\n',
  'utf8'
);
console.log('\nlists written: round2_orphans.txt / round2_loose.txt');
