// Inject he_ui_merged.json into src/data/site/i18n-config.json as a top-level "he" object
// and run the sync chain checks. Does NOT run generators (done separately).
const fs = require('fs');
const cfgPath = 'E:\\github\\afarer\\src\\data\\site\\i18n-config.json';
const mergedPath = __dirname + '\\he_ui_merged.json';

const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const he = JSON.parse(fs.readFileSync(mergedPath, 'utf8'));

const topKeys = Object.keys(cfg).filter((k) => typeof cfg[k] === 'object' && cfg[k] !== null && !Array.isArray(cfg[k]));
console.log('Top-level language objects: ' + topKeys.join(', '));

if (topKeys.includes('he')) {
  console.log('ERROR: "he" already exists in i18n-config.json — aborting to avoid overwrite.');
  process.exit(1);
}

// Sanity: compare key count vs en
const enKeys = Object.keys(cfg.en);
const heKeys = Object.keys(he);
console.log('en keys in config: ' + enKeys.length + ', he merged keys: ' + heKeys.length);
const missing = enKeys.filter((k) => !Object.prototype.hasOwnProperty.call(he, k));
const extra = heKeys.filter((k) => !Object.prototype.hasOwnProperty.call(cfg.en, k));
if (missing.length || extra.length) {
  console.log('Coverage mismatch. Missing: ' + missing.length + ', Extra: ' + extra.length);
  missing.forEach((k) => console.log('  MISS: ' + k));
  extra.forEach((k) => console.log('  EXTRA: ' + k));
  process.exit(1);
}

// Insert he right after the last existing language object, before any non-language keys.
// Strategy: rebuild object preserving original key order, insert 'he' after the last language key.
const langSet = new Set(topKeys);
const lastLang = topKeys[topKeys.length - 1];
console.log('Inserting "he" after "' + lastLang + '"');

const out = {};
for (const k of Object.keys(cfg)) {
  out[k] = cfg[k];
  if (k === lastLang) out.he = he;
}
// If lastLang was the final key anyway, out.he is set; safety check:
if (!Object.prototype.hasOwnProperty.call(out, 'he')) out.he = he;

fs.writeFileSync(cfgPath, JSON.stringify(out, null, 1), 'utf8');
console.log('Wrote i18n-config.json with "he" (' + heKeys.length + ' keys).');

// Verify round-trip
const verify = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
console.log(
  'Verify: he keys = ' +
    Object.keys(verify.he).length +
    ', still has en = ' +
    Object.prototype.hasOwnProperty.call(verify, 'en')
);
console.log('Sample: he["nav.products"] = ' + JSON.stringify(verify.he['nav.products']));
