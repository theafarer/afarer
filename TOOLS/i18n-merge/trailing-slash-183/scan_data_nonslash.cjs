// List values starting with '/' that have NO trailing slash and NO query — classify files vs routes.
const fs = require('fs');
const path = require('path');
const ROOT = 'E:/github/afarer/src/data';
const out = [];
const seen = new Map();

function record(v, loc) {
  if (!v.startsWith('/')) return;
  if (/^https?:|^\/\//.test(v)) return;
  const qi = v.indexOf('?'), hi = v.indexOf('#');
  if (v.endsWith('/')) return;
  if (qi > 0 || hi > 0) return;
  const key = v;
  if (!seen.has(key)) seen.set(key, []);
  if (seen.get(key).length < 3) seen.get(key).push(loc);
}

(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (/\.(ya?ml|json|md|mdx)$/.test(e.name)) {
      const rel = path.relative('E:/github/afarer/src', fp).replace(/\\/g, '/');
      const lines = fs.readFileSync(fp, 'utf8').split(/\r?\n/);
      lines.forEach((ln, i) => {
        const pats = [
          /"(?:href|link|url|to|path|permalink|slug)"\s*:\s*"(\/[^"]*)"/g,
          /^\s*(?:href|link|url|to|path|permalink)\s*:\s*['"]?(\/[^\s'"',}\]]*)/g,
          /href=["'](\/[^"']*)["']/g,
          /\]\((\/[^)\s]*)\)/g,
        ];
        for (const re of pats) { let m; while ((m = re.exec(ln))) record(m[1], `${rel}:${i + 1}`); }
      });
    }
  }
})(ROOT);

const keys = [...seen.keys()].sort();
console.log('distinct non-slashed /-values:', keys.length);
for (const k of keys) {
  const isFile = /\.[a-z0-9]+$/i.test(k);
  const tag = isFile ? 'FILE?' : 'ROUTE!';
  console.log(`[${tag}] ${k}  (${seen.get(k).join(', ')})`);
}
