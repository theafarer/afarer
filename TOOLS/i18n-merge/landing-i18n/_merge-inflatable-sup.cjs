// shard 67 inflatable-sup landing-i18n merge: 19 per-locale part files -> src/data/landing-i18n/inflatable-sup.json
// Validation: locale set, key count (48), key set identical across locales, key set === manifest
// pages['inflatable-sup.astro'], no empty values, shared keys match _is-shared-values.json,
// dup FAQ pairs (hyphen vs en-dash keys) identical per locale.
const fs = require('fs');
const TMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const OUT = 'E:/github/afarer/src/data/landing-i18n/inflatable-sup.json';
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
const EXPECTED_KEYS = 48;

const merged = {};
for (const loc of LOCALES) {
  const part = JSON.parse(fs.readFileSync(TMP + '/_is-' + loc + '.json', 'utf8'));
  if (merged[loc]) throw new Error('duplicate locale ' + loc);
  merged[loc] = part;
}
const extraLoc = Object.keys(merged).filter((l) => !LOCALES.includes(l));
if (extraLoc.length) throw new Error('unexpected locales: ' + extraLoc.join(','));

const ref = Object.keys(merged[LOCALES[0]]).sort();
if (ref.length !== EXPECTED_KEYS) throw new Error('expected ' + EXPECTED_KEYS + ' keys, got ' + ref.length);
for (const loc of LOCALES) {
  const k = Object.keys(merged[loc]).sort();
  if (k.length !== ref.length) throw new Error(loc + ': key count ' + k.length);
  for (let i = 0; i < k.length; i++) if (k[i] !== ref[i]) throw new Error(loc + ': key mismatch at ' + k[i]);
}
const manifest = JSON.parse(
  fs.readFileSync('E:/github/afarer/TOOLS/i18n-merge/landing-i18n/_landing-manifest.json', 'utf8')
);
const mKeys = manifest.pages['inflatable-sup.astro'].map((e) => e.en).sort();
if (mKeys.length !== EXPECTED_KEYS) throw new Error('manifest key count ' + mKeys.length);
for (let i = 0; i < mKeys.length; i++) if (mKeys[i] !== ref[i]) throw new Error('manifest mismatch at ' + mKeys[i]);

let empties = 0;
for (const loc of LOCALES) for (const k of Object.keys(merged[loc])) if (!merged[loc][k]) empties++;
if (empties) throw new Error(empties + ' empty values');

// shared keys must match shared-values byte-for-byte
const shared = JSON.parse(fs.readFileSync(TMP + '/_is-shared-values.json', 'utf8'));
for (const sk of Object.keys(shared)) {
  for (const loc of LOCALES) {
    if (merged[loc][sk] !== shared[sk][loc]) throw new Error(loc + ': shared mismatch at ' + JSON.stringify(sk));
  }
}
// dup FAQ pairs: hyphen key (idx10/idx12) === en-dash key (idx43/idx44)
const keysInOrder = manifest.pages['inflatable-sup.astro'].map((e) => e.en);
const DUP_PAIRS = [
  [keysInOrder[10], keysInOrder[43]],
  [keysInOrder[12], keysInOrder[44]],
];
for (const [a, b] of DUP_PAIRS) {
  for (const loc of LOCALES) {
    if (merged[loc][a] !== merged[loc][b]) throw new Error(loc + ': dup mismatch at ' + JSON.stringify(a.slice(0, 40)));
  }
}

fs.writeFileSync(OUT, JSON.stringify(merged, null, 2) + '\n', 'utf8');
console.log('merged 19 locales x ' + ref.length + ' keys -> ' + OUT + ' (' + fs.statSync(OUT).size + ' bytes)');
