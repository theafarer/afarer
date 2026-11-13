const fs = require('fs');
const path = require('path');

const dir = 'E:/github/afarer/src/data/landing-i18n';
const BASE = __dirname;
const SKIP = new Set(['dock-platform.json', 'giant-sup.json', 'surf-sup.json']); // all-empty parity files
const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.json') && !SKIP.has(f))
  .sort();

const entries = [];
for (const f of files) {
  const j = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  const first = Object.keys(j)[0];
  const keys = Object.keys(j[first]);
  for (const k of keys) entries.push({ file: f, key: k });
  console.log(f + ': ' + keys.length + ' keys');
}
console.log('TOTAL entries: ' + entries.length);

// Split into 4 chunks balanced by key bytes
const totalBytes = entries.reduce((s, e) => s + e.key.length, 0);
const target = Math.ceil(totalBytes / 4);
const chunks = [];
let cur = [],
  curBytes = 0;
for (const e of entries) {
  cur.push(e);
  curBytes += e.key.length;
  if (curBytes >= target && chunks.length < 3) {
    chunks.push(cur);
    cur = [];
    curBytes = 0;
  }
}
chunks.push(cur);
fs.mkdirSync(path.join(BASE, 'chunks2'), { recursive: true });
chunks.forEach((c, i) => {
  const bytes = c.reduce((s, e) => s + e.key.length, 0);
  const p = path.join(BASE, 'chunks2', 'g' + i + '.json');
  fs.writeFileSync(p, JSON.stringify(c, null, 1), 'utf8');
  console.log(
    'g' + i + ': ' + c.length + ' entries, ' + bytes + ' key chars, ' + fs.statSync(p).size + ' bytes on disk'
  );
});
console.log('DONE');
