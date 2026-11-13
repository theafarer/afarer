// Scan src/data/pages/**/*.yaml for href="/..." (slashless) in body HTML
const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer/src/data/pages';
const re = /href="(\/[^"]*)"/g;
const FILE_RE = /\/[^/]*\.[a-z0-9]+$/i;
const summary = new Map();

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (e.name.endsWith('.yaml')) scan(fp);
  }
}

function scan(fp) {
  const s = fs.readFileSync(fp, 'utf8');
  let m;
  while ((m = re.exec(s)) !== null) {
    const href = m[1];
    const base = href.split('?')[0].split('#')[0];
    if (base === '/' || base === '') continue;
    if (base.endsWith('/')) continue;
    if (FILE_RE.test(base)) continue;
    const key = href;
    if (!summary.has(key)) summary.set(key, new Set());
    summary.get(key).add(fp.replace(/\\/g, '/').replace('E:/github/afarer/src/data/pages/', ''));
  }
}

walk(ROOT);
const sorted = [...summary.entries()].sort((a, b) => b[1].size - a[1].size);
let total = 0;
for (const [href, files] of sorted) {
  total += files.size;
  console.log(`${String(files.size).padStart(3)} files  ${href}`);
}
console.log('distinct hrefs:', sorted.length, '| total file-hits:', total);
