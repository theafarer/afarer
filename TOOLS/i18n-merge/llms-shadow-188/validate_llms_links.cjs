// Validate all markdown-link URLs in public llms.txt (root + per-locale) against route-manifest
const fs = require('fs');
const path = require('path');
const PUBLIC = 'E:/github/afarer/public';
const manifest = new Set(
  JSON.parse(fs.readFileSync('E:/github/afarer/src/i18n/generated/route-manifest.json', 'utf8'))
);
const ok = (u) => {
  const p = u.replace(/^https:\/\/afarer\.com/, '').replace(/\/+$/, '') || '/';
  return manifest.has(p) || manifest.has('/en' + p) || p === '/';
};

let total = 0;
let bad = 0;
const files = [];
const rootFile = path.join(PUBLIC, 'llms.txt');
if (fs.existsSync(rootFile)) files.push(rootFile);
for (const e of fs.readdirSync(PUBLIC, { withFileTypes: true })) {
  if (!e.isDirectory() || !/^[a-z]{2}$/.test(e.name)) continue;
  const f = path.join(PUBLIC, e.name, 'llms.txt');
  if (fs.existsSync(f)) files.push(f);
}
const badList = [];
for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  const links = [...c.matchAll(/\]\((https:\/\/afarer\.com\/[^\s)]+)\)/g)].map((m) => m[1]);
  for (const u of links) {
    total++;
    if (!ok(u)) {
      bad++;
      if (badList.length < 15) badList.push(path.basename(path.dirname(f)) + ' ' + u);
    }
  }
}
console.log('files:', files.length, '| links:', total, '| bad:', bad);
for (const b of badList) console.log('  BAD ' + b);
