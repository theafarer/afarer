// Inject hr_ui_merged.json into src/data/site/i18n-config.json as a top-level "hr" object
// and run the sync chain checks. Does NOT run generators (done separately).
const fs = require('fs');
const cfgPath = 'E:\\github\\afarer\\src\\data\\site\\i18n-config.json';
const mergedPath = __dirname + '\\hr_ui_merged.json';

const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const hr = JSON.parse(fs.readFileSync(mergedPath, 'utf8'));

const topKeys = Object.keys(cfg).filter((k) => typeof cfg[k] === 'object' && cfg[k] !== null && !Array.isArray(cfg[k]));
console.log('Top-level language objects: ' + topKeys.join(', '));

if (topKeys.includes('hr')) {
  console.log('ERROR: "hr" already exists in i18n-config.json — aborting to avoid overwrite.');
  process.exit(1);
}

// Sanity: compare key count vs en
const enKeys = Object.keys(cfg.en);
const hrKeys = Object.keys(hr);
console.log('en keys in config: ' + enKeys.length + ', hr merged keys: ' + hrKeys.length);
const missing = enKeys.filter((k) => !Object.prototype.hasOwnProperty.call(hr, k));
const extra = hrKeys.filter((k) => !Object.prototype.hasOwnProperty.call(cfg.en, k));
if (missing.length || extra.length) {
  console.log('Coverage mismatch. Missing: ' + missing.length + ', Extra: ' + extra.length);
  missing.forEach((k) => console.log('  MISS: ' + k));
  extra.forEach((k) => console.log('  EXTRA: ' + k));
  process.exit(1);
}

// Insert hr right after the last existing language object, before any non-language keys.
// Strategy: rebuild object preserving original key order, insert 'hr' after the last language key.
const langSet = new Set(topKeys);
const lastLang = topKeys[topKeys.length - 1];
console.log('Inserting "hr" after "' + lastLang + '"');

const out = {};
for (const k of Object.keys(cfg)) {
  out[k] = cfg[k];
  if (k === lastLang) out.hr = hr;
}
// If lastLang was the final key anyway, out.hr is set; safety check:
if (!Object.prototype.hasOwnProperty.call(out, 'hr')) out.hr = hr;

fs.writeFileSync(cfgPath, JSON.stringify(out, null, 1), 'utf8');
console.log('Wrote i18n-config.json with "hr" (' + hrKeys.length + ' keys).');

// Verify round-trip
const verify = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
console.log(
  'Verify: hr keys = ' +
    Object.keys(verify.hr).length +
    ', still has en = ' +
    Object.prototype.hasOwnProperty.call(verify, 'en')
);
console.log('Sample: hr["nav.products"] = ' + JSON.stringify(verify.hr['nav.products']));
