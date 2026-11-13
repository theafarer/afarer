// Slash all internal link:/href: values across src/data (YAML + JSON). Idempotent.
const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer/src/data';
const FILE_RE = /\/[^/]*\.[a-z0-9]+$/i;

function slashize(href) {
  if (!href.startsWith('/') || href === '/') return null;
  const qi = href.indexOf('?');
  const hi = href.indexOf('#');
  let end = href.length;
  if (qi !== -1) end = Math.min(end, qi);
  if (hi !== -1) end = Math.min(end, hi);
  const clean = href.slice(0, end);
  if (clean.endsWith('/')) return null;
  if (FILE_RE.test(clean)) return null;
  return clean + '/' + href.slice(end);
}

let filesChanged = 0;
let fixes = 0;

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (/\.(yaml|json)$/.test(e.name)) fix(fp);
  }
}

function fix(fp) {
  const s = fs.readFileSync(fp, 'utf8');
  let count = 0;
  // YAML: href:/link: value (plain or quoted), line-anchored
  const out = s.replace(/((?:href|link):\s*)(\/[^\s'"{}\[\],]+|'\/[^']*'|"\/[^"]*")/g, (full, pre, val) => {
    let raw = val;
    let q = '';
    if ((raw.startsWith("'") && raw.endsWith("'")) || (raw.startsWith('"') && raw.endsWith('"'))) {
      q = raw[0];
      raw = raw.slice(1, -1);
    }
    const fixed = slashize(raw);
    if (fixed === null) return full;
    count++;
    return pre + q + fixed + q;
  });
  // JSON: "href": "/..." or "link": "/..."
  const out2 = out.replace(/("(?:href|link)":\s*)"(\/[^"]*)"/g, (full, pre, raw) => {
    const fixed = slashize(raw);
    if (fixed === null) return full;
    count++;
    return pre + '"' + fixed + '"';
  });
  if (count > 0) {
    fs.writeFileSync(fp, out2);
    filesChanged++;
    fixes += count;
  }
}

walk(ROOT);
console.log('files changed:', filesChanged, '| link/href values slashed:', fixes);
