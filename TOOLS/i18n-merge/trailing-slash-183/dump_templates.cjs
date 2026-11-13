const fs = require('fs');
const path = require('path');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(astro|ts)$/.test(e.name)) out.push(p);
  }
  return out;
}

const files = walk('E:/github/afarer/src/pages');
const uniq = new Map();
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8');
  const ms = s.match(/`\/\$\{lang\}[^`]*`/g) || [];
  for (const m of ms) uniq.set(m, (uniq.get(m) || 0) + 1);
}
const arr = [...uniq.entries()].sort((a, b) => b[1] - a[1]);
console.log('unique templates:', arr.length);
for (const [t, c] of arr) console.log(`${c}\t${t}`);
