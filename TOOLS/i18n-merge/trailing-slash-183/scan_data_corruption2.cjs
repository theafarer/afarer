// Broad corruption check: extract EVERY string value starting with '/' from yaml/json,
// then apply corruption rules. Catches JSON "key": "/x", yaml key: '/x', href="..." anywhere.
const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer/src/data';
const issues = [];
const frag = [];
const stats = { files: 0, values: 0, skipped: { fullUrl: 0, mailto: 0, anchor: 0, rel: 0 }, clean: 0 };

function check(v, loc) {
  v = String(v);
  if (!v.startsWith('/')) { stats.skipped.rel++; return; }
  stats.values++;
  if (/^https?:\/\//.test(v)) { stats.skipped.fullUrl++; return; }
  if (v.startsWith('//')) { // protocol-relative or double leading
    if (/^\/\/[^/]/.test(v)) { stats.skipped.fullUrl++; return; }
  }
  if (/^(mailto:|tel:)/i.test(v)) { stats.skipped.mailto++; return; }
  const body = v.slice(1);
  if (body.includes('//')) { issues.push({ loc, v, rule: 'double-slash-mid' }); return; }
  if (v.endsWith('//')) { issues.push({ loc, v, rule: 'trailing-double' }); return; }
  const qi = v.indexOf('?');
  if (qi > 0 && v[qi - 1] !== '/') { issues.push({ loc, v, rule: 'no-slash-before-query' }); return; }
  const hi = v.indexOf('#');
  if (hi > 0 && v[hi - 1] !== '/') { frag.push({ loc, v }); return; }
  if (v.endsWith('/') || (qi > 0 && v[qi - 1] === '/')) stats.clean++;
}

function scanFile(fp) {
  const rel = path.relative('E:/github/afarer/src', fp).replace(/\\/g, '/');
  const text = fs.readFileSync(fp, 'utf8');
  const lines = text.split(/\r?\n/);
  lines.forEach((ln, i) => {
    // JSON: "key": "/x..."  (string value only)
    let re = /"(?:href|link|url|to|path|permalink|slug)"\s*:\s*"(\/[^"]*)"/g;
    let m;
    while ((m = re.exec(ln))) check(m[1], `${rel}:${i + 1} json-key`);
    // yaml: key: /x...  (unquoted or quoted, to EOL)
    re = /^\s*(?:href|link|url|to|path|permalink)\s*:\s*['"]?(\/[^\s'"',}\]]*)/g;
    while ((m = re.exec(ln))) check(m[1], `${rel}:${i + 1} yaml-key`);
    // href="..." / href='...' anywhere (inline HTML in yaml strings)
    re = /href=["'](\/[^"']*)["']/g;
    while ((m = re.exec(ln))) check(m[1], `${rel}:${i + 1} html-href`);
    // markdown link targets [t](/x) — data md files if any
    re = /\]\((\/[^)\s]*)\)/g;
    while ((m = re.exec(ln))) check(m[1], `${rel}:${i + 1} md-link`);
  });
}

(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (/\.(ya?ml|json|md|mdx)$/.test(e.name)) { stats.files++; scanFile(fp); }
  }
})(ROOT);

console.log('=== BROAD src/data corruption check ===');
console.log('files:', stats.files, '| path-values:', stats.values, '| clean slashed:', stats.clean, '| skipped:', JSON.stringify(stats.skipped));
console.log('\nISSUES:', issues.length);
issues.slice(0, 80).forEach((it) => console.log(`[${it.rule}] ${it.loc} => ${it.v}`));
if (issues.length > 80) console.log('... +' + (issues.length - 80) + ' more');
console.log('\nFRAGMENT (no slash before #):', frag.length);
frag.slice(0, 40).forEach((it) => console.log(`${it.loc} => ${it.v}`));
if (frag.length > 40) console.log('... +' + (frag.length - 40) + ' more');
