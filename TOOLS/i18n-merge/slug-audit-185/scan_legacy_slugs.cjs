// Scan dist for legacy slug strings from 6 flagged nodes (non use-case types)
const fs = require('fs');
const path = require('path');
const DIST = 'E:/github/afarer/dist';
const NEEDLES = [
  'inflatable-sup-board',
  'carbon-fiber-paddle',
  'high-pressure-12-15-psi',
  'eva-foam-deck-pad',
  'marine-buoyancy-foam',
];
// 'accessories' is too generic - handled separately below

let hits = [];
let files = 0;

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(html|xml|txt|json|js|css)$/.test(e.name)) {
      files++;
      const c = fs.readFileSync(p, 'utf8');
      for (const n of NEEDLES) {
        let idx = c.indexOf(n);
        while (idx !== -1) {
          hits.push({
            file: p.replace(DIST + '/', ''),
            needle: n,
            ctx: c.slice(Math.max(0, idx - 60), idx + 80).replace(/\s+/g, ' '),
          });
          idx = c.indexOf(n, idx + 1);
          if (hits.length > 200) return;
        }
      }
    }
  }
}

walk(DIST);
console.log('files scanned:', files, '| needle hits:', hits.length);
const byNeedle = {};
for (const h of hits) byNeedle[h.needle] = (byNeedle[h.needle] || 0) + 1;
console.log('by needle:', JSON.stringify(byNeedle));
// classify: URL-style usage (in href/loc/sitemap) vs text/meta usage
const urlish = hits.filter((h) => /href=|<loc>|\.txt url|llms/.test(h.ctx));
console.log('URL-style hits:', urlish.length);
for (const h of urlish.slice(0, 20)) console.log(`  URL [${h.needle}] ${h.file}: ${h.ctx}`);
for (const h of hits.slice(0, 250)) console.log(`  [${h.needle}] ${h.file}\n      ...${h.ctx}...`);
