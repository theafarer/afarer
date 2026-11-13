const fs = require('fs');
const files = [
  '[lang]/afarer-story.astro',
  '[lang]/brand/team.astro',
  '[lang]/brand-global-presence.astro',
  '[lang]/brand-marine-expertise.astro',
  '[lang]/brand-why-afarer.astro',
  '[lang]/cases/index.astro',
  '[lang]/certifications.astro',
  '[lang]/partners.astro',
  '[lang]/request-quotation.astro',
  '[lang]/resources.astro',
  '[lang]/solutions/build-your-own-brand.astro',
  '[lang]/solutions/distributors.astro',
  '[lang]/solutions/index.astro',
  '[lang]/solutions/paddle-clubs.astro',
  '[lang]/solutions/rental-operators.astro',
  '[lang]/solutions/resorts-hotels.astro',
  '[lang]/solutions/retail-partners.astro',
  '[lang]/solutions/[slug].astro',
];
const ROOT = 'E:/github/afarer/src/pages/';

const BROKEN_PLAIN = 'const lh = (h: string) => (h ? withTrailingSlash() : h);';
const FIXED_PLAIN = 'const lh = (h: string) => (h ? withTrailingSlash(`/${lang}${h}`) : h);';
const BROKEN_RES = "const lh = (h: string) => (h && !h.startsWith('/resources') ? withTrailingSlash() : h);";
const FIXED_RES =
  "const lh = (h: string) => (h && !h.startsWith('/resources') ? withTrailingSlash(`/${lang}${h}`) : h);";

let n = 0;
for (const f of files) {
  const p = ROOT + f;
  let s = fs.readFileSync(p, 'utf8');
  const before = s;
  while (s.includes(BROKEN_PLAIN)) {
    s = s.replace(BROKEN_PLAIN, FIXED_PLAIN);
    n++;
  }
  while (s.includes(BROKEN_RES)) {
    s = s.replace(BROKEN_RES, FIXED_RES);
    n++;
  }
  if (s !== before) fs.writeFileSync(p, s);
  console.log((s !== before ? 'fixed ' : 'check ') + f);
}
console.log('repairs:', n);
