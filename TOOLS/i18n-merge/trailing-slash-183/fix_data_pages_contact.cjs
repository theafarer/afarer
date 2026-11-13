// Fix slashless href="/contact" -> href="/contact/" in src/data/pages/**/*.yaml
const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer/src/data/pages';
let files = 0;
let fixes = 0;

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (e.name.endsWith('.yaml')) fix(fp);
  }
}

function fix(fp) {
  const s = fs.readFileSync(fp, 'utf8');
  if (!s.includes('href="/contact"')) return;
  const out = s.split('href="/contact"').join('href="/contact/"');
  fs.writeFileSync(fp, out);
  files++;
  fixes += (s.match(/href="\/contact"/g) || []).length;
}

walk(ROOT);
console.log('files fixed:', files, '| occurrences:', fixes);
