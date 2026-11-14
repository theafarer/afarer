// Validate all markdown-link URLs in public llms.txt (root + per-locale) against the TRUE served set:
// dist filesystem = rendered routes (dir/index.html) + extensionless endpoint files + /en middleware rewrite
const fs = require('fs');
const path = require('path');
const PUBLIC = 'E:/github/afarer/public';
const DIST = 'E:/github/afarer/dist';

// Build the full served-URL set from dist (pre-build dist = same routes as fresh build)
const served = new Set();
function walk(dir, prefix) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = prefix + '/' + e.name;
    if (e.isDirectory()) {
      if (e.name === '_astro' || e.name === 'client') continue;
      walk(path.join(dir, e.name), rel);
    } else if (e.name === 'index.html') {
      served.add(prefix);
    } else if (!e.name.includes('.')) {
      served.add(rel); // extensionless endpoint file (e.g. /llms/brand/afarer)
    }
  }
}
walk(DIST, '');

const ok = (u) => {
  const p = u.replace(/^https:\/\/afarer\.com/, '').replace(/\/+$/, '') || '/';
  return served.has(p) || served.has('/en' + p);
};

let total = 0;
let bad = 0;
const files = [path.join(PUBLIC, 'llms.txt')];
for (const e of fs.readdirSync(PUBLIC, { withFileTypes: true })) {
  if (!e.isDirectory() || !/^[a-z]{2}$/.test(e.name)) continue;
  const f = path.join(PUBLIC, e.name, 'llms.txt');
  if (fs.existsSync(f)) files.push(f);
}
const badList = [];
for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  for (const m of c.matchAll(/\]\((https:\/\/afarer\.com\/[^\s)]+)\)/g)) {
    total++;
    if (!ok(m[1])) {
      bad++;
      if (badList.length < 12) badList.push(path.basename(path.dirname(f)) + ' ' + m[1]);
    }
  }
}
console.log('served URLs:', served.size, '| files:', files.length, '| links:', total, '| bad:', bad);
for (const b of badList) console.log('  BAD ' + b);
