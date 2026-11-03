// Inject id_ui_merged.json into src/data/site/i18n-config.json as a top-level "id" object
// and run the sync chain checks. Does NOT run generators (done separately).
const fs = require('fs');
const cfgPath = 'E:\\github\\afarer\\src\\data\\site\\i18n-config.json';
const mergedPath = __dirname + '\\id_ui_merged.json';

const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const id = JSON.parse(fs.readFileSync(mergedPath, 'utf8'));

const topKeys = Object.keys(cfg).filter((k) => typeof cfg[k] === 'object' && cfg[k] !== null && !Array.isArray(cfg[k]));
console.log('Top-level language objects: ' + topKeys.join(', '));

if (topKeys.includes('id')) {
  console.log('ERROR: "id" already exists in i18n-config.json — aborting to avoid overwrite.');
  process.exit(1);
}

// Sanity: compare key count vs en
const enKeys = Object.keys(cfg.en);
const idKeys = Object.keys(id);
console.log('en keys in config: ' + enKeys.length + ', id merged keys: ' + idKeys.length);
const missing = enKeys.filter((k) => !Object.prototype.hasOwnProperty.call(id, k));
const extra = idKeys.filter((k) => !Object.prototype.hasOwnProperty.call(cfg.en, k));
if (missing.length || extra.length) {
  console.log('Coverage mismatch. Missing: ' + missing.length + ', Extra: ' + extra.length);
  missing.forEach((k) => console.log('  MISS: ' + k));
  extra.forEach((k) => console.log('  EXTRA: ' + k));
  process.exit(1);
}

// Insert id right after the last existing language object, before any non-language keys.
const langSet = new Set(topKeys);
const lastLang = topKeys[topKeys.length - 1];
console.log('Inserting "id" after "' + lastLang + '"');

const out = {};
for (const k of Object.keys(cfg)) {
  out[k] = cfg[k];
  if (k === lastLang) out.id = id;
}
if (!Object.prototype.hasOwnProperty.call(out, 'id')) out.id = id;

fs.writeFileSync(cfgPath, JSON.stringify(out, null, 1), 'utf8');
console.log('Wrote i18n-config.json with "id" (' + idKeys.length + ' keys).');

// Verify round-trip
const verify = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
console.log(
  'Verify: id keys = ' +
    Object.keys(verify.id).length +
    ', still has en = ' +
    Object.prototype.hasOwnProperty.call(verify, 'en')
);
console.log('Sample: id["nav.products"] = ' + JSON.stringify(verify.id['nav.products']));
