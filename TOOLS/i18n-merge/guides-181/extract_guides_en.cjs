// Extract EN guides (29 records) from src/data/guides.ts into JSON + 4 chunks.
const fs = require('fs');
const path = require('path');
const REPO = 'E:\\github\\afarer';
const OUT = __dirname;

const src = fs.readFileSync(path.join(REPO, 'src/data/guides.ts'), 'utf8');
const marker = 'export const guides: GuideRecord[] = [';
const idx = src.indexOf(marker);
if (idx < 0) {
  console.error('marker not found');
  process.exit(1);
}
const body = src.slice(idx + marker.length).replace(/\];\s*$/, '');
const fn = new Function('module', 'exports', 'require', 'return ' + '[' + body + '];');
const mod = { exports: {} };
const records = fn(mod, mod.exports, require);
if (!Array.isArray(records) || records.length !== 29) {
  console.error('unexpected record count: ' + (records && records.length));
  process.exit(1);
}
fs.writeFileSync(path.join(OUT, 'guides_en.json'), JSON.stringify(records, null, 1), 'utf8');

const bounds = [
  [0, 8],
  [8, 15],
  [15, 22],
  [22, 29],
];
bounds.forEach(([a, b], i) => {
  const chunk = records.slice(a, b);
  fs.writeFileSync(path.join(OUT, 'chunks', 'g' + i + '.json'), JSON.stringify(chunk, null, 1), 'utf8');
  console.log(
    'g' + i + ': records ' + a + '-' + (b - 1) + ', ' + JSON.stringify(chunk.map((r) => r.slug)).slice(0, 120)
  );
});
const leafCount = (o) =>
  typeof o === 'string'
    ? 1
    : Array.isArray(o)
      ? o.reduce((s, x) => s + leafCount(x), 0)
      : o && typeof o === 'object'
        ? Object.values(o).reduce((s, x) => s + leafCount(x), 0)
        : 0;
console.log(
  'total leaf strings:',
  records.reduce((s, r) => s + leafCount(r), 0)
);
console.log('OK');
