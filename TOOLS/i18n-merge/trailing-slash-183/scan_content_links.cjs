// Scan src/content/news (and post if exists) for markdown links ](/path) lacking trailing slash
// Excludes: external http(s), mailto, anchors, asset files (.png/.pdf/etc), already-slashed, pure slash.
const fs = require('fs');
const path = require('path');

const roots = ['E:/github/afarer/src/content/news', 'E:/github/afarer/src/content/post'].filter((p) =>
  fs.existsSync(p)
);
const FILE_RE = /\/[^/]*\.[a-z0-9]+$/i;
const linkRe = /\]\((\/[^)\s]*)\)/gi;
const summary = {};

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (/\.(mdx?|md)$/.test(e.name)) scan(fp);
  }
}

function scan(fp) {
  const s = fs.readFileSync(fp, 'utf8');
  let m;
  while ((m = linkRe.exec(s)) !== null) {
    const href = m[1];
    if (FILE_RE.test(href)) continue; // file asset
    if (href === '/') continue;
    if (/\?$/.test(href)) continue;
    // strip query/hash for slash check
    const q = href.indexOf('?');
    const h = href.indexOf('#');
    let end = href.length;
    if (q !== -1) end = Math.min(end, q);
    if (h !== -1) end = Math.min(end, h);
    const clean = href.slice(0, end);
    if (clean.endsWith('/')) continue; // already slashed
    const key = href.replace(/^\/(da|ar|es|de|el|fr|cs|fi|tr|it|nl|pl|ru|pt|th|sv|ro|no|hu|sk|bg|sl|sr|id|he|ms|lt|lv|et|tl)\//, '/[loc]/');
    summary[key] = summary[key] || { count: 0, files: new Set() };
    summary[key].count++;
    summary[key].files.add(fp.replace(/\\/g, '/').replace('E:/github/afarer/src/content/', ''));
  }
}

for (const r of roots) walk(r);
const keys = Object.keys(summary).sort((a, b) => summary[b].count - summary[a].count);
for (const k of keys) {
  console.log(`${String(summary[k].count).padStart(4)}  ${k}   [${[...summary[k].files].slice(0, 3).join(', ')}${summary[k].files.size > 3 ? ', ...' : ''}]`);
}
console.log('TOTAL:', keys.reduce((a, k) => a + summary[k].count, 0), 'links in', keys.length, 'patterns');
