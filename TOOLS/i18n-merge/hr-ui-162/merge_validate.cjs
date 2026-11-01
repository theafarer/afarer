// Merge c01-c13 hr chunks, validate against en_ui.json
const fs = require('fs');
const path = require('path');
const dir = __dirname;

// Load EN baseline
const en = JSON.parse(fs.readFileSync(path.join(dir, 'en_ui.json'), 'utf8'));
const enKeys = Object.keys(en);
console.log('EN keys: ' + enKeys.length);

// Merge all hr chunks
const merged = {};
const dupes = [];
for (let i = 1; i <= 13; i++) {
  const id = 'c' + String(i).padStart(2, '0');
  const f = path.join(dir, id + '_hr.json');
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

const hrKeys = Object.keys(merged);
console.log('\nMerged hr keys: ' + hrKeys.length);
console.log('Dupes: ' + dupes.length + (dupes.length ? '\n  ' + dupes.join('\n  ') : ''));

// 1. Coverage
const missing = enKeys.filter((k) => !Object.prototype.hasOwnProperty.call(merged, k));
const extra = hrKeys.filter((k) => !Object.prototype.hasOwnProperty.call(en, k));
console.log('\n[1] Missing (in EN, not in hr): ' + missing.length);
missing.forEach((k) => console.log('  MISS: ' + k));
console.log('[1] Extra (in hr, not in EN): ' + extra.length);
extra.forEach((k) => console.log('  EXTRA: ' + k));

// 2. Param preservation
const paramRe = /\{[a-zA-Z]+\}/g;
let paramErrs = 0;
for (const k of enKeys) {
  if (!merged[k]) continue;
  const ep = (en[k].match(paramRe) || []).sort().join(',');
  const hp = (merged[k].match(paramRe) || []).sort().join(',');
  if (ep !== hp) {
    console.log('  PARAM MISMATCH: ' + k + ' EN=[' + ep + '] HR=[' + hp + ']');
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
    console.log('  TAG MISMATCH: ' + k + ' EN=[' + et + '] HR=[' + ht + ']');
    tagErrs++;
  }
}
console.log('[3] HTML tag mismatches: ' + tagErrs);

// 4. Mojibake check
const badChars = /[\uFFFD\u00C2\u00C3\u00E2\u20AC\u0153]/;
let mojiErrs = 0;
for (const k of hrKeys) {
  const m = merged[k].match(badChars);
  if (m) {
    console.log('  MOJIBAKE: ' + k + ' -> ' + JSON.stringify(merged[k]).slice(0, 120));
    mojiErrs++;
  }
}
console.log('[4] Mojibake hits: ' + mojiErrs);

// 5. EN-identical values (review list)
const identical = hrKeys.filter((k) => merged[k] === en[k]);
console.log('\n[5] EN-identical values: ' + identical.length);
identical.forEach((k) => console.log('  SAME: ' + k + ' = ' + JSON.stringify(en[k]).slice(0, 80)));

// 6. Diacritics stats
let diaKeys = 0,
  diaChars = 0;
const diaRe = /[čćđšžČĆĐŠŽ]/g;
for (const k of hrKeys) {
  const m = merged[k].match(diaRe);
  if (m) {
    diaKeys++;
    diaChars += m.length;
  }
}
console.log(
  '\n[6] Diacritics: ' + diaKeys + ' keys contain Croatian diacritics, ' + diaChars + ' diacritic chars total'
);

// 7. Empty values
const empties = hrKeys.filter((k) => merged[k].trim() === '');
console.log('[7] Empty values: ' + empties.length);
empties.forEach((k) => console.log('  EMPTY: ' + k));

// Write merged output
fs.writeFileSync(path.join(dir, 'hr_ui_merged.json'), JSON.stringify(merged, null, 1), 'utf8');
console.log('\nWrote hr_ui_merged.json (' + hrKeys.length + ' keys)');
