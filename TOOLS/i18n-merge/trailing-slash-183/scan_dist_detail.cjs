// Attribute every slashless internal href to its dist page (sampled or full).
// usage: node scan_dist_detail.cjs [full]
const fs = require('fs');
const path = require('path');

const DIST = 'E:/github/afarer/dist';
const FULL = process.argv[2] === 'full';

function walkHtml(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkHtml(p, out);
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

const all = walkHtml(DIST);
console.log('total index.html pages:', all.length);

let pages = all;
if (!FULL) {
  const SAMPLE = new Set();
  const stride = Math.max(1, Math.floor(all.length / 400));
  for (let i = 0; i < all.length; i += stride) SAMPLE.add(all[i]);
  pages = [...SAMPLE];
}

const FILE_RE = /\/[^/]*\.[a-z0-9]+$/i;
// skip unreachable/unfixable namespaces
const SKIP_PAGE = /\\\/keystatic\\\/|\/keystatic\//;
let issuePages = 0;

for (const p of pages) {
  const rel = p.slice(DIST.length + 1).replace(/\\/g, '/');
  if (rel.startsWith('keystatic/')) continue;
  const s = fs.readFileSync(p, 'utf8');
  const hrefs = s.match(/href="\/[^"]*"/g) || [];
  const bad = [];
  for (const h of hrefs) {
    const url = h.slice(6, -1);
    const base = url.split('?')[0].split('#')[0];
    if (base === '' || base === '/') continue;
    if (base.endsWith('/')) continue;
    if (FILE_RE.test(base)) continue;
    bad.push(url);
  }
  if (bad.length) {
    issuePages++;
    console.log(`\n${rel} (${bad.length}):`);
    console.log('  ' + [...new Set(bad)].join(', '));
  }
}
console.log('\npages with issues:', issuePages, 'of', pages.length, 'sampled');
