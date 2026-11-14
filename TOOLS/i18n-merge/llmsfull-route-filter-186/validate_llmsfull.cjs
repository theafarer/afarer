// Validate every https://afarer.com URL in public/llms-full.txt against dist file existence
const fs = require('fs');
const path = require('path');
const DIST = 'E:/github/afarer/dist';
const txt = fs.readFileSync('E:/github/afarer/public/llms-full.txt', 'utf8');
const urls = [...txt.matchAll(/https:\/\/afarer\.com(\/[^\s)\]]*)/g)].map((m) => m[1]);
const seen = new Set();
const missing = [];
let checked = 0;
for (const u of urls) {
  if (seen.has(u)) continue;
  seen.add(u);
  checked++;
  let rel = u;
  // strip query/hash
  rel = rel.split('?')[0].split('#')[0];
  // map URL path to dist file
  let p;
  if (rel === '/' || rel === '') p = path.join(DIST, 'index.html');
  else if (/\.[a-z0-9]+$/i.test(rel)) p = path.join(DIST, rel);
  else p = path.join(DIST, rel, 'index.html');
  if (!fs.existsSync(p)) missing.push(u);
}
console.log('unique URLs:', checked, '| missing in dist:', missing.length);
for (const m of missing.slice(0, 30)) console.log('  MISSING:', m);
