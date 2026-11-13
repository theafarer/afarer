// Fix slashless markdown links in src/content: insert '/' before ')' for internal page links.
// Skips file assets, external, anchors, already-slashed.
const fs = require('fs');
const path = require('path');

const roots = ['E:/github/afarer/src/content/news', 'E:/github/afarer/src/content/post'].filter((p) =>
  fs.existsSync(p)
);
const FILE_RE = /\/[^/]*\.[a-z0-9]+$/i;
const linkRe = /\]\((\/[^)\s]*)\)/g;

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
  const out = s.replace(linkRe, (full, href) => {
    if (FILE_RE.test(href)) return full;
    if (href === '/') return full;
    const q = href.indexOf('?');
    const h = href.indexOf('#');
    let end = href.length;
    if (q !== -1) end = Math.min(end, q);
    if (h !== -1) end = Math.min(end, h);
    if (href.slice(0, end).endsWith('/')) return full;
    count++;
    return `](${href}/)`;
  });
  if (count > 0) {
    fs.writeFileSync(fp, out);
    filesChanged++;
    linksFixed += count;
  }
}

for (const r of roots) walk(r);
console.log('files changed:', filesChanged, '| links fixed:', linksFixed);
