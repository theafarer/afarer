// shard 68 disclaimer landing-i18n merge: 19 per-locale part files -> src/data/landing-i18n/disclaimer.json
// Same validation pattern as _merge-terms.cjs, plus shared keys must match _di-shared-values.json
// byte-for-byte (Limitation of Liability <- terms, Privacy Policy <- privacy, address <- privacy+terms).
// Templ mapping: manifest templ key "Medical Disclaimer — ${SITE.name}" maps to post-wiring data key
// "Medical Disclaimer —" (strip " ${SITE.name}" suffix) — deterministic, never fuzzy.
const fs = require('fs');
const TMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const OUT = 'E:/github/afarer/src/data/landing-i18n/disclaimer.json';
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
const EXPECTED_KEYS = 39;

const merged = {};
for (const loc of LOCALES) {
  const part = JSON.parse(fs.readFileSync(TMP + '/_di-' + loc + '.json', 'utf8'));
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
const mEntries = manifest.pages['disclaimer.astro'];
if (mEntries.length !== EXPECTED_KEYS) throw new Error('manifest key count ' + mEntries.length);
// templ keys arrive pre-wiring; map them onto the post-wiring data keys deterministically
const mKeys = mEntries.map((e) => (e.shape === 'templ' ? e.en.replace(/ \$\{SITE\.name\}$/, '') : e.en)).sort();
for (let i = 0; i < mKeys.length; i++) if (mKeys[i] !== ref[i]) throw new Error('manifest mismatch at ' + mKeys[i]);

let empties = 0;
for (const loc of LOCALES) for (const k of Object.keys(merged[loc])) if (!merged[loc][k]) empties++;
if (empties) throw new Error(empties + ' empty values');

// shared keys must match shared-values byte-for-byte
const shared = JSON.parse(fs.readFileSync(TMP + '/_di-shared-values.json', 'utf8'));
for (const sk of Object.keys(shared)) {
  for (const loc of LOCALES) {
    if (merged[loc][sk] !== shared[sk][loc]) throw new Error(loc + ': shared mismatch at ' + JSON.stringify(sk));
  }
}

fs.writeFileSync(OUT, JSON.stringify(merged, null, 2) + '\n', 'utf8');
console.log('merged 19 locales x ' + ref.length + ' keys -> ' + OUT + ' (' + fs.statSync(OUT).size + ' bytes)');
