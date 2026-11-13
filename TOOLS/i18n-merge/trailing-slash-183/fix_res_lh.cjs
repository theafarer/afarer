// Fix RES-variant lh helpers: exemption branch returns withTrailingSlash(h) instead of raw h
// Also normalize b2b-solutions-matrix inline-append variant.
const fs = require('fs');
const path = require('path');

const base = 'E:/github/afarer/src/pages/[lang]';
const files = [
  'brand-why-afarer.astro',
  'solutions/build-your-own-brand.astro',
  'solutions/distributors.astro',
  'solutions/index.astro',
  'solutions/paddle-clubs.astro',
  'solutions/resorts-hotels.astro',
  'solutions/rental-operators.astro',
  'solutions/[slug].astro',
  'solutions/retail-partners.astro',
];

const resOld = "const lh = (h: string) => (h && !h.startsWith('/resources') ? withTrailingSlash(`/${lang}${h}`) : h);";
const resNew =
  "const lh = (h: string) => (h && !h.startsWith('/resources') ? withTrailingSlash(`/${lang}${h}`) : withTrailingSlash(h));";

let changed = 0;
for (const f of files) {
  const fp = path.join(base, f);
  let s = fs.readFileSync(fp, 'utf8');
  if (s.includes(resOld)) {
    s = s.replace(resOld, resNew);
    fs.writeFileSync(fp, s);
    console.log('RES fixed:', f);
    changed++;
  } else {
    console.log('SKIP (pattern not found):', f);
  }
}

// b2b-solutions-matrix: inline-append variant
const b2b = path.join(base, 'b2b-solutions-matrix.astro');
let s = fs.readFileSync(b2b, 'utf8');
const b2bOld = "const lh = (h: string) => (h && !h.startsWith('/resources') ? `/${lang}${h}/` : h);";
const b2bNew =
  "const lh = (h: string) => (h && !h.startsWith('/resources') ? withTrailingSlash(`/${lang}${h}`) : withTrailingSlash(h));";
if (s.includes(b2bOld)) {
  s = s.replace(b2bOld, b2bNew);
  fs.writeFileSync(b2b, s);
  console.log('B2B fixed');
  changed++;
} else {
  console.log('B2B SKIP (pattern not found)');
}

// Verify withTrailingSlash import present in all touched files
const all = [...files.map((f) => path.join(base, f)), b2b];
for (const fp of all) {
  const s2 = fs.readFileSync(fp, 'utf8');
  if (!s2.includes("withTrailingSlash } from '~/i18n/routing'") && !s2.includes('withTrailingSlash,')) {
    console.log('MISSING IMPORT:', fp);
  }
}
console.log('changed:', changed);
