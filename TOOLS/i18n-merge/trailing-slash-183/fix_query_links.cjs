// Correct query links: ](/contact?package=resort/) -> ](/contact/?package=resort)
const fs = require('fs');
const path = require('path');

const roots = ['E:/github/afarer/src/content/news', 'E:/github/afarer/src/content/post'].filter((p) =>
  fs.existsSync(p)
);
// ](/PATH?QUERY/)  ->  ](/PATH/?QUERY)
const re = /\]\((\/[^)?\s]*)\?([^)\s]*)\/\)/g;

let filesChanged = 0;
let linksFixed = 0;

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (/\.(mdx?|md)$/.test(e.name)) fix(fp);
  }
}

function fix(fp) {
  const s = fs.readFileSync(fp, 'utf8');
  let count = 0;
  const out = s.replace(re, (full, p, q) => {
    count++;
    return `](${p}/?${q})`;
  });
  if (count > 0) {
    fs.writeFileSync(fp, out);
    filesChanged++;
    linksFixed += count;
  }
}

for (const r of roots) walk(r);
console.log('files changed:', filesChanged, '| query links corrected:', linksFixed);
