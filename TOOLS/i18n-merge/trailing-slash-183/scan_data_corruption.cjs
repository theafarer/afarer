// Proper corruption check for src/data link/href values.
// Checks (unlike earlier flawed check, '/contact/?subject=x' is CORRECT):
//  1. double slash mid-path (excluding protocol '://' and leading '//')
//  2. trailing '//'
//  3. '?' present but char before '?' is neither '/' nor a domain char in a full URL (i.e. missing slash before query)
//  4. '#' internal fragment on a path that lacks trailing slash (e.g. '/x#y')  [review-only]
//  5. bare 'mailto:'/'tel:'/'#'/'http(s)://' values are counted separately, not flagged
const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer/src/data';
const issues = [];
const stats = { files: 0, values: 0, fullUrl: 0, mailtoTel: 0, anchorOnly: 0, cleanSlashed: 0, fragmentReview: [] };

function checkVal(val, file, line, kind, key) {
  const v = String(val).trim();
  if (!v) return;
  stats.values++;
  if (/^(https?:)?\/\//.test(v) || /^https?:\/\//.test(v)) { stats.fullUrl++; return; }
  if (/^(mailto:|tel:)/i.test(v)) { stats.mailtoTel++; return; }
  if (v.startsWith('#')) { stats.anchorOnly++; return; }
  if (!v.startsWith('/')) return; // relative/other, out of scope
  // 1: mid-path double slash (leading '/' consumed; check rest for '//' not preceded by ':')
  const body = v.slice(1);
  if (body.includes('//')) {
    issues.push({ file, line, kind, key, val: v, rule: 'double-slash' });
    return;
  }
  // 2: trailing '//'  (body ending in '/' means '//' total)
  if (body.endsWith('/')) {
    // single trailing slash on body == '/x/' which is FINE; check body ends with '/' AND v ends with '//'
  }
  if (v.endsWith('//')) {
    issues.push({ file, line, kind, key, val: v, rule: 'trailing-double-slash' });
    return;
  }
  // 3: query without slash before '?'
  const qi = v.indexOf('?');
  if (qi > 0 && v[qi - 1] !== '/' && !/[a-z0-9]/i.test(v[qi - 1]) === false) {
    // char before ? must be '/' for site paths; if it's an alphanumeric this is '/path?x' -> missing slash
    if (v[qi - 1] !== '/') {
      issues.push({ file, line, kind, key, val: v, rule: 'missing-slash-before-query' });
      return;
    }
  }
  // 4: fragment without trailing slash before '#' (review only)
  const hi = v.indexOf('#');
  if (hi > 0 && v[hi - 1] !== '/') {
    stats.fragmentReview.push({ file, line, val: v });
  }
  if (v.endsWith('/') || (qi > 0 && v[qi - 1] === '/')) stats.cleanSlashed++;
}

function scanFile(fp) {
  const rel = path.relative('E:/github/afarer/src', fp).replace(/\\/g, '/');
  const lines = fs.readFileSync(fp, 'utf8').split(/\r?\n/);
  lines.forEach((ln, i) => {
    // yaml: href: /x   |  link: /x   |  href="/x" (inline html in yaml strings)
    let m = ln.match(/^\s*(href|link|url|to):\s*(["']?)(\/[^\s"']*)\2\s*$/);
    if (m) { checkVal(m[2], rel, i + 1, 'yaml-key', m[1]); return; }
    // inline html href="..." inside yaml/md string values
    const re = /href="(\/[^"]*)"/g;
    let mm;
    while ((mm = re.exec(ln))) checkVal(mm[1], rel, i + 1, 'html-href', 'href');
  });
}

(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (/\.(ya?ml|json)$/.test(e.name)) { stats.files++; scanFile(fp); }
  }
})(ROOT);

console.log('=== src/data corruption check ===');
console.log('files scanned:', stats.files);
console.log('values checked:', stats.values);
console.log('full URLs (skipped):', stats.fullUrl, '| mailto/tel:', stats.mailtoTel, '| anchor-only:', stats.anchorOnly);
console.log('clean slashed values:', stats.cleanSlashed);
console.log('\n--- ISSUES:', issues.length);
for (const it of issues.slice(0, 60)) {
  console.log(`[${it.rule}] ${it.file}:${it.line} (${it.kind} ${it.key}) => ${it.val}`);
}
if (issues.length > 60) console.log('... +' + (issues.length - 60) + ' more');
console.log('\n--- FRAGMENT REVIEW (no slash before #):', stats.fragmentReview.length);
for (const it of stats.fragmentReview.slice(0, 40)) console.log(`${it.file}:${it.line} => ${it.val}`);
if (stats.fragmentReview.length > 40) console.log('... +' + (stats.fragmentReview.length - 40) + ' more');
