// Inject sk_ui_merged.json into src/data/site/i18n-config.json as a top-level "sk" object
// and run the sync chain checks. Does NOT run generators (done separately).
const fs = require('fs');
const cfgPath = 'E:\\github\\afarer\\src\\data\\site\\i18n-config.json';
const mergedPath = __dirname + '\\sk_ui_merged.json';

const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const sk = JSON.parse(fs.readFileSync(mergedPath, 'utf8'));

const topKeys = Object.keys(cfg).filter((k) => typeof cfg[k] === 'object' && cfg[k] !== null && !Array.isArray(cfg[k]));
console.log('Top-level language objects: ' + topKeys.join(', '));

if (topKeys.includes('sk')) {
  console.log('ERROR: "sk" already exists in i18n-config.json — aborting to avoid overwrite.');
  process.exit(1);
}

// Sanity: compare key count vs en
const enKeys = Object.keys(cfg.en);
const skKeys = Object.keys(sk);
console.log('en keys in config: ' + enKeys.length + ', sk merged keys: ' + skKeys.length);
const missing = enKeys.filter((k) => !Object.prototype.hasOwnProperty.call(sk, k));
const extra = skKeys.filter((k) => !Object.prototype.hasOwnProperty.call(cfg.en, k));
if (missing.length || extra.length) {
  console.log('Coverage mismatch. Missing: ' + missing.length + ', Extra: ' + extra.length);
  missing.forEach((k) => console.log('  MISS: ' + k));
  extra.forEach((k) => console.log('  EXTRA: ' + k));
  process.exit(1);
}

// Insert sk right after "hu" (the last existing language object), before any non-language keys.
const langSet = new Set(topKeys);
const anchor = topKeys.includes('hu') ? 'hu' : topKeys[topKeys.length - 1];
console.log('Inserting "sk" after "' + anchor + '"');

const out = {};
for (const k of Object.keys(cfg)) {
  out[k] = cfg[k];
  if (k === anchor) out.sk = sk;
}
if (!Object.prototype.hasOwnProperty.call(out, 'sk')) out.sk = sk;

fs.writeFileSync(cfgPath, JSON.stringify(out, null, 1), 'utf8');
console.log('Wrote i18n-config.json with "sk" (' + skKeys.length + ' keys).');

// Verify round-trip
const verify = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
console.log(
  'Verify: sk keys = ' +
    Object.keys(verify.sk).length +
    ', still has en = ' +
    Object.prototype.hasOwnProperty.call(verify, 'en')
);
console.log('Sample: sk["nav.products"] = ' + JSON.stringify(verify.sk['nav.products']));
