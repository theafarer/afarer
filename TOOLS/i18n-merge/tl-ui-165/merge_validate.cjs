// Merge c01-c13 tl chunks, validate against en_ui.json
const fs = require('fs');
const path = require('path');
const dir = __dirname;

// Load EN baseline
const en = JSON.parse(fs.readFileSync(path.join(dir, 'en_ui.json'), 'utf8'));
const enKeys = Object.keys(en);
console.log('EN keys: ' + enKeys.length);

// Merge all tl chunks
const merged = {};
const dupes = [];
for (let i = 1; i <= 13; i++) {
  const cid = 'c' + String(i).padStart(2, '0');
  const f = path.join(dir, cid + '_tl.json');
  if (!fs.existsSync(f)) {
    console.log('MISSING CHUNK: ' + cid);
    continue;
  }
  const chunk = JSON.parse(fs.readFileSync(f, 'utf8'));
  for (const k of Object.keys(chunk)) {
    if (Object.prototype.hasOwnProperty.call(merged, k)) dupes.push(k + ' (from ' + cid + ')');
    merged[k] = chunk[k];
  }
  console.log(cid + ': ' + Object.keys(chunk).length + ' keys');
}

const tlKeys = Object.keys(merged);
console.log('\nMerged tl keys: ' + tlKeys.length);
console.log('Dupes: ' + dupes.length + (dupes.length ? '\n  ' + dupes.join('\n  ') : ''));

// 1. Coverage
const missing = enKeys.filter((k) => !Object.prototype.hasOwnProperty.call(merged, k));
const extra = tlKeys.filter((k) => !Object.prototype.hasOwnProperty.call(en, k));
console.log('\n[1] Missing (in EN, not in tl): ' + missing.length);
missing.forEach((k) => console.log('  MISS: ' + k));
console.log('[1] Extra (in tl, not in EN): ' + extra.length);
extra.forEach((k) => console.log('  EXTRA: ' + k));

// 2. Param preservation
const paramRe = /\{[a-zA-Z]+\}/g;
let paramErrs = 0;
for (const k of enKeys) {
  if (!merged[k]) continue;
  const ep = (en[k].match(paramRe) || []).sort().join(',');
  const ip = (merged[k].match(paramRe) || []).sort().join(',');
  if (ep !== ip) {
    console.log('  PARAM MISMATCH: ' + k + ' EN=[' + ep + '] TL=[' + ip + ']');
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
  const it = (merged[k].match(tagRe) || []).sort().join('|');
  if (et !== it) {
    console.log('  TAG MISMATCH: ' + k + ' EN=[' + et + '] TL=[' + it + ']');
    tagErrs++;
  }
}
console.log('[3] HTML tag mismatches: ' + tagErrs);

// 4. Mojibake + forbidden control chars + foreign scripts
// Filipino (Tagalog) is pure-ASCII Latin orthography: accented Latin, other scripts, bidi controls are all strays.
const badChars = /[\uFFFD]/;
const ctrlChars = /[\u200E\u200F\u202A-\u202E\u2066-\u2069]/;
// foreign script blocks: Greek, Cyrillic, Hebrew, Arabic, Thai, CJK, Hangul, kana
const foreignRe =
  /[\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u0900-\u097F\u0E00-\u0E7F\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]/;
// accented / extended Latin (not part of modern Filipino orthography — mojibake or copy-paste strays)
const accentRe = /[\u00C0-\u00D6\u00D8-\u00FF\u0100-\u017F\u0180-\u024F]/;
let mojiErrs = 0;
let ctrlErrs = 0;
let foreignErrs = 0;
let accentErrs = 0;
for (const k of tlKeys) {
  if (badChars.test(merged[k])) {
    console.log('  MOJIBAKE: ' + k + ' -> ' + JSON.stringify(merged[k]).slice(0, 120));
    mojiErrs++;
  }
  if (ctrlChars.test(merged[k])) {
    console.log('  BIDI/CTRL: ' + k + ' -> ' + JSON.stringify(merged[k]).slice(0, 120));
    ctrlErrs++;
  }
  if (foreignRe.test(merged[k])) {
    console.log('  FOREIGN-SCRIPT: ' + k + ' -> ' + JSON.stringify(merged[k]).slice(0, 120));
    foreignErrs++;
  }
  if (accentRe.test(merged[k])) {
    console.log('  ACCENTED-LATIN: ' + k + ' -> ' + JSON.stringify(merged[k]).slice(0, 120));
    accentErrs++;
  }
}
console.log(
  '[4] Mojibake: ' +
    mojiErrs +
    ', bidi-ctrl: ' +
    ctrlErrs +
    ', foreign-script: ' +
    foreignErrs +
    ', accented-Latin: ' +
    accentErrs
);

// 5. EN-identical values (review list)
const identical = tlKeys.filter((k) => merged[k] === en[k]);
console.log('\n[5] EN-identical values: ' + identical.length);
identical.forEach((k) => console.log('  SAME: ' + k + ' = ' + JSON.stringify(en[k]).slice(0, 80)));

// 6. Filipino marker stats (soft quality signal)
const tlMarkers = /\b(ang|ng|mga|sa|na|ay|para|atin|aming|inyong|hindi|isang|banig|pantalan|tubig)\b/i;
let markerKeys = 0;
for (const k of tlKeys) {
  if (tlMarkers.test(merged[k])) markerKeys++;
}
console.log('\n[6] Keys containing common Filipino markers: ' + markerKeys + ' of ' + tlKeys.length);

// 7. Empty values
const empties = tlKeys.filter((k) => merged[k].trim() === '');
console.log('[7] Empty values: ' + empties.length);
empties.forEach((k) => console.log('  EMPTY: ' + k));

// Write merged output
fs.writeFileSync(path.join(dir, 'tl_ui_merged.json'), JSON.stringify(merged, null, 1), 'utf8');
console.log('\nWrote tl_ui_merged.json (' + tlKeys.length + ' keys)');
