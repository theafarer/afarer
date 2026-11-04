// Inject ms_ui_merged.json into src/data/site/i18n-config.json as a top-level "ms" object
// and run the sync chain checks. Does NOT run generators (done separately).
const fs = require('fs');
const cfgPath = 'E:\\github\\afarer\\src\\data\\site\\i18n-config.json';
const mergedPath = __dirname + '\\ms_ui_merged.json';

const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const ms = JSON.parse(fs.readFileSync(mergedPath, 'utf8'));

const topKeys = Object.keys(cfg).filter((k) => typeof cfg[k] === 'object' && cfg[k] !== null && !Array.isArray(cfg[k]));
console.log('Top-level language objects: ' + topKeys.join(', '));

if (topKeys.includes('ms')) {
  console.log('ERROR: "ms" already exists in i18n-config.json — aborting to avoid overwrite.');
  process.exit(1);
}

// Sanity: compare key count vs en
const enKeys = Object.keys(cfg.en);
const msKeys = Object.keys(ms);
console.log('en keys in config: ' + enKeys.length + ', ms merged keys: ' + msKeys.length);
const missing = enKeys.filter((k) => !Object.prototype.hasOwnProperty.call(ms, k));
const extra = msKeys.filter((k) => !Object.prototype.hasOwnProperty.call(cfg.en, k));
if (missing.length || extra.length) {
  console.log('Coverage mismatch. Missing: ' + missing.length + ', Extra: ' + extra.length);
  missing.forEach((k) => console.log('  MISS: ' + k));
  extra.forEach((k) => console.log('  EXTRA: ' + k));
  process.exit(1);
}

// Insert ms right after "tl" (the last existing language object), before any non-language keys.
const langSet = new Set(topKeys);
const anchor = topKeys.includes('tl') ? 'tl' : topKeys[topKeys.length - 1];
console.log('Inserting "ms" after "' + anchor + '"');

const out = {};
for (const k of Object.keys(cfg)) {
  out[k] = cfg[k];
  if (k === anchor) out.ms = ms;
}
if (!Object.prototype.hasOwnProperty.call(out, 'ms')) out.ms = ms;

fs.writeFileSync(cfgPath, JSON.stringify(out, null, 1), 'utf8');
console.log('Wrote i18n-config.json with "ms" (' + msKeys.length + ' keys).');

// Verify round-trip
const verify = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
console.log(
  'Verify: ms keys = ' +
    Object.keys(verify.ms).length +
    ', still has en = ' +
    Object.prototype.hasOwnProperty.call(verify, 'en')
);
console.log('Sample: ms["nav.products"] = ' + JSON.stringify(verify.ms['nav.products']));
