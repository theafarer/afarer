// Inject tl_ui_merged.json into src/data/site/i18n-config.json as a top-level "tl" object
// and run the sync chain checks. Does NOT run generators (done separately).
const fs = require('fs');
const cfgPath = 'E:\\github\\afarer\\src\\data\\site\\i18n-config.json';
const mergedPath = __dirname + '\\tl_ui_merged.json';

const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const tl = JSON.parse(fs.readFileSync(mergedPath, 'utf8'));

const topKeys = Object.keys(cfg).filter((k) => typeof cfg[k] === 'object' && cfg[k] !== null && !Array.isArray(cfg[k]));
console.log('Top-level language objects: ' + topKeys.join(', '));

if (topKeys.includes('tl')) {
  console.log('ERROR: "tl" already exists in i18n-config.json — aborting to avoid overwrite.');
  process.exit(1);
}

// Sanity: compare key count vs en
const enKeys = Object.keys(cfg.en);
const tlKeys = Object.keys(tl);
console.log('en keys in config: ' + enKeys.length + ', tl merged keys: ' + tlKeys.length);
const missing = enKeys.filter((k) => !Object.prototype.hasOwnProperty.call(tl, k));
const extra = tlKeys.filter((k) => !Object.prototype.hasOwnProperty.call(cfg.en, k));
if (missing.length || extra.length) {
  console.log('Coverage mismatch. Missing: ' + missing.length + ', Extra: ' + extra.length);
  missing.forEach((k) => console.log('  MISS: ' + k));
  extra.forEach((k) => console.log('  EXTRA: ' + k));
  process.exit(1);
}

// Insert tl right after the last existing language object, before any non-language keys.
const langSet = new Set(topKeys);
const lastLang = topKeys[topKeys.length - 1];
console.log('Inserting "tl" after "' + lastLang + '"');

const out = {};
for (const k of Object.keys(cfg)) {
  out[k] = cfg[k];
  if (k === lastLang) out.tl = tl;
}
if (!Object.prototype.hasOwnProperty.call(out, 'tl')) out.tl = tl;

fs.writeFileSync(cfgPath, JSON.stringify(out, null, 1), 'utf8');
console.log('Wrote i18n-config.json with "tl" (' + tlKeys.length + ' keys).');

// Verify round-trip
const verify = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
console.log(
  'Verify: tl keys = ' +
    Object.keys(verify.tl).length +
    ', still has en = ' +
    Object.prototype.hasOwnProperty.call(verify, 'en')
);
console.log('Sample: tl["nav.products"] = ' + JSON.stringify(verify.tl['nav.products']));
