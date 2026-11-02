// Merge c01-c13 he chunks, validate against en_ui.json
const fs = require('fs');
const path = require('path');
const dir = __dirname;

// Load EN baseline
const en = JSON.parse(fs.readFileSync(path.join(dir, 'en_ui.json'), 'utf8'));
const enKeys = Object.keys(en);
console.log('EN keys: ' + enKeys.length);

// Merge all he chunks
const merged = {};
const dupes = [];
for (let i = 1; i <= 13; i++) {
  const id = 'c' + String(i).padStart(2, '0');
  const f = path.join(dir, id + '_he.json');
  if (!fs.existsSync(f)) {
    console.log('MISSING CHUNK: ' + id);
    continue;
  }
  const chunk = JSON.parse(fs.readFileSync(f, 'utf8'));
  for (const k of Object.keys(chunk)) {
    if (Object.prototype.hasOwnProperty.call(merged, k)) dupes.push(k + ' (from ' + id + ')');
    merged[k] = chunk[k];
  }
  console.log(id + ': ' + Object.keys(chunk).length + ' keys');
}

const heKeys = Object.keys(merged);
console.log('\nMerged he keys: ' + heKeys.length);
console.log('Dupes: ' + dupes.length + (dupes.length ? '\n  ' + dupes.join('\n  ') : ''));

// 1. Coverage
const missing = enKeys.filter((k) => !Object.prototype.hasOwnProperty.call(merged, k));
const extra = heKeys.filter((k) => !Object.prototype.hasOwnProperty.call(en, k));
console.log('\n[1] Missing (in EN, not in he): ' + missing.length);
missing.forEach((k) => console.log('  MISS: ' + k));
console.log('[1] Extra (in he, not in EN): ' + extra.length);
extra.forEach((k) => console.log('  EXTRA: ' + k));

// 2. Param preservation
const paramRe = /\{[a-zA-Z]+\}/g;
let paramErrs = 0;
for (const k of enKeys) {
  if (!merged[k]) continue;
  const ep = (en[k].match(paramRe) || []).sort().join(',');
  const hp = (merged[k].match(paramRe) || []).sort().join(',');
  if (ep !== hp) {
    console.log('  PARAM MISMATCH: ' + k + ' EN=[' + ep + '] HE=[' + hp + ']');
    paramErrs++;
  }
}
console.log('[2] Param mismatches: ' + paramErrs);

// 3. HTML tag preservation
const tagRe = /<\/?[a-zA-Z][^>]*>/g;
let tagErrs = 0;
for (const k of enKeys) {
  if (!merged[k]) continue;
  const et = (en[k].match(tagRe) || []).sort().join('|');
  const ht = (merged[k].match(tagRe) || []).sort().join('|');
  if (et !== ht) {
    console.log('  TAG MISMATCH: ' + k + ' EN=[' + et + '] HE=[' + ht + ']');
    tagErrs++;
  }
}
console.log('[3] HTML tag mismatches: ' + tagErrs);

// 4. Mojibake + forbidden control chars
const badChars = /[\uFFFD\u00C2\u00C3\u00E2\u20AC\u0153]/;
const ctrlChars = /[\u200E\u200F\u202A-\u202E\u2066-\u2069\uFB1D-\uFB4F]/;
let mojiErrs = 0;
let ctrlErrs = 0;
for (const k of heKeys) {
  const m = merged[k].match(badChars);
  if (m) {
    console.log('  MOJIBAKE: ' + k + ' -> ' + JSON.stringify(merged[k]).slice(0, 120));
    mojiErrs++;
  }
  const c = merged[k].match(ctrlChars);
  if (c) {
    console.log('  BIDI/CTRL/PRESFORM: ' + k + ' -> ' + JSON.stringify(merged[k]).slice(0, 120));
    ctrlErrs++;
  }
}
console.log('[4] Mojibake hits: ' + mojiErrs + ', bidi-control/presentation-form hits: ' + ctrlErrs);

// 5. EN-identical values (review list)
const identical = heKeys.filter((k) => merged[k] === en[k]);
console.log('\n[5] EN-identical values: ' + identical.length);
identical.forEach((k) => console.log('  SAME: ' + k + ' = ' + JSON.stringify(en[k]).slice(0, 80)));

// 6. Hebrew character stats
let heBlockKeys = 0,
  heChars = 0;
const heRe = /[\u0590-\u05FF]/g;
for (const k of heKeys) {
  const m = merged[k].match(heRe);
  if (m) {
    heBlockKeys++;
    heChars += m.length;
  }
}
console.log('\n[6] Hebrew: ' + heBlockKeys + ' keys contain Hebrew chars, ' + heChars + ' Hebrew chars total');
// Keys with no Hebrew and no Latin-brand-only expectation: values with letters but zero Hebrew
const noHebrew = heKeys.filter((k) => !heRe.test(merged[k]) && /[a-zA-Z]/.test(merged[k]));
console.log('[6b] Keys with Latin letters but zero Hebrew (review): ' + noHebrew.length);
noHebrew.forEach((k) => console.log('  NOHE: ' + k + ' = ' + JSON.stringify(merged[k]).slice(0, 80)));

// 7. Empty values
const empties = heKeys.filter((k) => merged[k].trim() === '');
console.log('[7] Empty values: ' + empties.length);
empties.forEach((k) => console.log('  EMPTY: ' + k));

// Write merged output
fs.writeFileSync(path.join(dir, 'he_ui_merged.json'), JSON.stringify(merged, null, 1), 'utf8');
console.log('\nWrote he_ui_merged.json (' + heKeys.length + ' keys)');
