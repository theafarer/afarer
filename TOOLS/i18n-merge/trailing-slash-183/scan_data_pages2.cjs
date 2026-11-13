// Scan src/data/pages/**/*.yaml for YAML-style href: /path (slashless) AND quoted href="..."
const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer/src/data/pages';
const FILE_RE = /\/[^/]*\.[a-z0-9]+$/i;
const summary = new Map();

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (e.name.endsWith('.yaml')) scan(fp);
  }
}

function add(href, fp) {
  const base = href.split('?')[0].split('#')[0];
  if (base === '/' || base === '') return;
  if (base.endsWith('/')) return;
  if (FILE_RE.test(base)) return;
  if (!summary.has(href)) summary.set(href, new Set());
  summary.get(href).add(fp.replace(/\\/g, '/').replace('E:/github/afarer/src/data/pages/', ''));
}

function scan(fp) {
  const s = fs.readFileSync(fp, 'utf8');
  // YAML style: href: /path  (possibly quoted with single quotes)
  let m;
  const reY = /href:\s*['"]?(\/[^\s'"{}\[\],]+)['"]?\s*$/gm;
  while ((m = reY.exec(s)) !== null) add(m[1], fp);
  // HTML style
  const reH = /href="(\/[^"]*)"/g;
  while ((m = reH.exec(s)) !== null) add(m[1], fp);
}

walk(ROOT);
const sorted = [...summary.entries()].sort((a, b) => b[1].size - a[1].size);
for (const [href, files] of sorted) {
  console.log(`${String(files.size).padStart(3)} files  ${href}   e.g. ${[...files][0]}`);
}
console.log('distinct:', sorted.length);
