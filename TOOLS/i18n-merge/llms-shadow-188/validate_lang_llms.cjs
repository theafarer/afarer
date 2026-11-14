// Validate per-locale dist llms.txt URL lists (knowledge-graph variant) against route-manifest
const fs = require('fs');
const path = require('path');
const DIST = 'E:/github/afarer/dist';
const manifest = new Set(
  JSON.parse(fs.readFileSync('E:/github/afarer/src/i18n/generated/route-manifest.json', 'utf8'))
);

const locales = fs
  .readdirSync(DIST, { withFileTypes: true })
  .filter((e) => e.isDirectory() && /^[a-z]{2}$/.test(e.name))
  .map((e) => e.name)
  .filter((l) => fs.existsSync(path.join(DIST, l, 'llms.txt')));

let totalUrls = 0;
let totalBad = 0;
const badByLocale = {};

for (const loc of locales) {
  const c = fs.readFileSync(path.join(DIST, loc, 'llms.txt'), 'utf8');
  // URLs appear as relative path refs: "- /ar/guides/xxx" (no scheme)
  const refs = [...c.matchAll(/^- (\/[^\s]+)$/gm)].map((m) => m[1]);
  let bad = 0;
  for (const r of refs) {
    totalUrls++;
    const noSlash = r.replace(/\/+$/, '');
    const ok = manifest.has(noSlash) || manifest.has('/en' + noSlash);
    if (!ok) {
      bad++;
      totalBad++;
      if (!badByLocale[loc]) badByLocale[loc] = [];
      if (badByLocale[loc].length < 8) badByLocale[loc].push(r);
    }
  }
}

console.log('locales with llms.txt:', locales.length, '| total URL refs:', totalUrls, '| bad:', totalBad);
for (const [loc, list] of Object.entries(badByLocale)) {
  console.log(`\n${loc} (${list.length}+ bad):`);
  for (const r of list) console.log('  ' + r);
}
