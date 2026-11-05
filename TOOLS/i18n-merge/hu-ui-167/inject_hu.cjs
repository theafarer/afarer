// Inject hu_ui_merged.json into src/data/site/i18n-config.json as a top-level "hu" object
// and run the sync chain checks. Does NOT run generators (done separately).
const fs = require('fs');
const cfgPath = 'E:\\github\\afarer\\src\\data\\site\\i18n-config.json';
const mergedPath = __dirname + '\\hu_ui_merged.json';

const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const hu = JSON.parse(fs.readFileSync(mergedPath, 'utf8'));

const topKeys = Object.keys(cfg).filter((k) => typeof cfg[k] === 'object' && cfg[k] !== null && !Array.isArray(cfg[k]));
console.log('Top-level language objects: ' + topKeys.join(', '));

if (topKeys.includes('hu')) {
  console.log('ERROR: "hu" already exists in i18n-config.json — aborting to avoid overwrite.');
  process.exit(1);
}

// Sanity: compare key count vs en
const enKeys = Object.keys(cfg.en);
const huKeys = Object.keys(hu);
console.log('en keys in config: ' + enKeys.length + ', hu merged keys: ' + huKeys.length);
const missing = enKeys.filter((k) => !Object.prototype.hasOwnProperty.call(hu, k));
const extra = huKeys.filter((k) => !Object.prototype.hasOwnProperty.call(cfg.en, k));
if (missing.length || extra.length) {
  console.log('Coverage mismatch. Missing: ' + missing.length + ', Extra: ' + extra.length);
  missing.forEach((k) => console.log('  MISS: ' + k));
  extra.forEach((k) => console.log('  EXTRA: ' + k));
  process.exit(1);
}

// Insert hu right after "ms" (the last existing language object), before any non-language keys.
const langSet = new Set(topKeys);
const anchor = topKeys.includes('ms') ? 'ms' : topKeys[topKeys.length - 1];
console.log('Inserting "hu" after "' + anchor + '"');

const out = {};
for (const k of Object.keys(cfg)) {
  out[k] = cfg[k];
  if (k === anchor) out.hu = hu;
}
if (!Object.prototype.hasOwnProperty.call(out, 'hu')) out.hu = hu;

fs.writeFileSync(cfgPath, JSON.stringify(out, null, 1), 'utf8');
console.log('Wrote i18n-config.json with "hu" (' + huKeys.length + ' keys).');

// Verify round-trip
const verify = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
console.log(
  'Verify: hu keys = ' +
    Object.keys(verify.hu).length +
    ', still has en = ' +
    Object.prototype.hasOwnProperty.call(verify, 'en')
);
console.log('Sample: hu["nav.products"] = ' + JSON.stringify(verify.hu['nav.products']));
