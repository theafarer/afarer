// Fix slashless internal hrefs in src/data/pages/**/*.yaml
// Handles: plain (href: /path), single-quoted, double-quoted, with query (insert / before ?)
// Skips: external, anchors, files, already-slashed, non-/ paths.
const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer/src/data/pages';
const FILE_RE = /\/[^/]*\.[a-z0-9]+$/i;

function slashize(href) {
  // returns slashed form or null if no change needed
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
    else if (e.name.endsWith('.yaml')) fix(fp);
  }
}

function fix(fp) {
  const s = fs.readFileSync(fp, 'utf8');
  let count = 0;
  // plain + single-quoted + double-quoted: href: VALUE  (to end of line)
  const out = s.replace(/(href:\s*)(\/[^\s'"{}\[\],]+|'\/[^']*'|"\/[^"]*")/g, (full, pre, val) => {
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
  // HTML-in-YAML: href="/path"
  let out2 = out;
  const htmlFix = out2.replace(/href="(\/[^"]*)"/g, (full, raw) => {
    const fixed = slashize(raw);
    if (fixed === null) return full;
    count++;
    return 'href="' + fixed + '"';
  });
  if (count > 0) {
    fs.writeFileSync(fp, htmlFix);
    filesChanged++;
    fixes += count;
  }
}

walk(ROOT);
console.log('files changed:', filesChanged, '| hrefs fixed:', fixes);
