const fs = require('fs');
const path = require('path');

const DIST = 'E:/github/afarer/dist';

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

// sample: all locales × page types — take every Nth page
const SAMPLE = new Set();
const stride = Math.max(1, Math.floor(all.length / 400));
for (let i = 0; i < all.length; i += stride) SAMPLE.add(all[i]);

const FILE_RE = /\/[^/]*\.[a-z0-9]+$/i;
let pagesWithIssues = 0;
const issueMap = new Map(); // href -> count

for (const p of SAMPLE) {
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
    pagesWithIssues++;
    for (const b of bad) issueMap.set(b, (issueMap.get(b) || 0) + 1);
  }
}

console.log('sampled pages:', SAMPLE.size, '| pages with slashless hrefs:', pagesWithIssues);
const sorted = [...issueMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 60);
for (const [u, c] of sorted) console.log(`${c}\t${u}`);
