// shard 57 marine-industry landing-i18n merge: 19 per-locale part files -> src/data/landing-i18n/marine-industry.json
// Part files (_mi-<loc>.json) were written one-locale-per-file in the session temp dir to stay under the
// write-tool size limit, then merged here. Validates: locale set, key count (116), key set identical
// across locales, key set === manifest pages['marine-industry/index.astro'], no empty values.
// Reusable pattern for future per-page shards: swap PAGE/EXPECTED_KEYS/manifest entry and part prefix.
const fs = require('fs');
const TMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const OUT = 'E:/github/afarer/src/data/landing-i18n/marine-industry.json';
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
const EXPECTED_KEYS = 116;

const merged = {};
for (const loc of LOCALES) {
  const part = JSON.parse(fs.readFileSync(TMP + '/_mi-' + loc + '.json', 'utf8'));
  if (merged[loc]) throw new Error('duplicate locale ' + loc);
  merged[loc] = part;
}
const extraLoc = Object.keys(merged).filter((l) => !LOCALES.includes(l));
if (extraLoc.length) throw new Error('unexpected locales: ' + extraLoc.join(','));

// key set identical across locales
const ref = Object.keys(merged[LOCALES[0]]).sort();
if (ref.length !== EXPECTED_KEYS) throw new Error('expected ' + EXPECTED_KEYS + ' keys, got ' + ref.length);
for (const loc of LOCALES) {
  const k = Object.keys(merged[loc]).sort();
  if (k.length !== ref.length) throw new Error(loc + ': key count ' + k.length);
  for (let i = 0; i < k.length; i++) if (k[i] !== ref[i]) throw new Error(loc + ': key mismatch at ' + k[i]);
}
// key set matches manifest
const manifest = JSON.parse(
  fs.readFileSync('E:/github/afarer/TOOLS/i18n-merge/landing-i18n/_landing-manifest.json', 'utf8')
);
const mKeys = manifest.pages['marine-industry/index.astro'].map((e) => e.en).sort();
if (mKeys.length !== EXPECTED_KEYS) throw new Error('manifest key count ' + mKeys.length);
for (let i = 0; i < mKeys.length; i++) if (mKeys[i] !== ref[i]) throw new Error('manifest mismatch at ' + mKeys[i]);

// sanity: no empty values
let empties = 0;
for (const loc of LOCALES) for (const k of Object.keys(merged[loc])) if (!merged[loc][k]) empties++;
if (empties) throw new Error(empties + ' empty values');

fs.writeFileSync(OUT, JSON.stringify(merged, null, 2) + '\n', 'utf8');
console.log('merged 19 locales x ' + ref.length + ' keys -> ' + OUT + ' (' + fs.statSync(OUT).size + ' bytes)');
