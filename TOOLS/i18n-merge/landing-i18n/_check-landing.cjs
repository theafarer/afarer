// landing-i18n completeness checker — validates src/data/landing-i18n/*.json against
// the source manifest (TOOLS/i18n-merge/landing-i18n/_landing-manifest.json, produced by
// _extract-landing.cjs). For every page that HAS a data file, all 19 locales must cover
// all EN keys extracted from the page source. Also reports stale keys (table entries whose
// EN key no longer exists in source). Exit 1 on missing keys; stale keys are warnings only.
// Run from repo root: node TOOLS/i18n-merge/landing-i18n/_check-landing.cjs
const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..', '..', '..');
const MANIFEST = path.join(__dirname, '_landing-manifest.json');
const DATA_DIR = path.join(REPO, 'src', 'data', 'landing-i18n');

const LOCALES = [
  'de',
  'pt',
  'es',
  'it',
  'ja',
  'ko',
  'ru',
  'pl',
  'ar',
  'nl',
  'sv',
  'no',
  'el',
  'tr',
  'fi',
  'cs',
  'da',
  'ro',
  'th',
];

function pageKey(p) {
  return p
    .replace(/\.astro$/, '')
    .replace('/index', '')
    .replace(/\//g, '-');
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
let missing = 0;
let stale = 0;
let checked = 0;

for (const [page, entries] of Object.entries(manifest.pages)) {
  const key = pageKey(page);
  const dataFile = path.join(DATA_DIR, key + '.json');
  if (!fs.existsSync(dataFile)) continue;
  checked++;
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  const srcKeys = new Set(entries.map((e) => e.en));
  for (const locale of LOCALES) {
    if (!data[locale]) {
      console.error('MISSING locale "' + locale + '" entirely in ' + key + '.json');
      missing += srcKeys.size;
      continue;
    }
    const table = data[locale];
    for (const k of srcKeys) {
      if (typeof table[k] !== 'string' || table[k].length === 0) {
        console.error('MISSING [' + key + '][' + locale + ']: ' + JSON.stringify(k.slice(0, 80)));
        missing++;
      }
    }
  }
  for (const locale of Object.keys(data)) {
    for (const k of Object.keys(data[locale])) {
      if (!srcKeys.has(k)) {
        console.warn('stale [' + key + '][' + locale + ']: ' + JSON.stringify(k.slice(0, 80)));
        stale++;
      }
    }
  }
}

console.log('---');
console.log('pages checked: ' + checked + ', missing: ' + missing + ', stale: ' + stale);
if (missing > 0) process.exit(1);
console.log('landing-i18n completeness: PASS');
