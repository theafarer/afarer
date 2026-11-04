// Merge c01-c13 ms chunks, validate against en_ui.json
const fs = require('fs');
const path = require('path');
const dir = __dirname;

// Load EN baseline
const en = JSON.parse(fs.readFileSync(path.join(dir, 'en_ui.json'), 'utf8'));
const enKeys = Object.keys(en);
console.log('EN keys: ' + enKeys.length);

// Merge all ms chunks
const merged = {};
const dupes = [];
for (let i = 1; i <= 13; i++) {
  const cid = 'c' + String(i).padStart(2, '0');
  const f = path.join(dir, cid + '_ms.json');
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

const msKeys = Object.keys(merged);
console.log('\nMerged ms keys: ' + msKeys.length);
console.log('Dupes: ' + dupes.length + (dupes.length ? '\n  ' + dupes.join('\n  ') : ''));

// 1. Coverage
const missing = enKeys.filter((k) => !Object.prototype.hasOwnProperty.call(merged, k));
const extra = msKeys.filter((k) => !Object.prototype.hasOwnProperty.call(en, k));
console.log('\n[1] Missing (in EN, not in ms): ' + missing.length);
missing.forEach((k) => console.log('  MISS: ' + k));
console.log('[1] Extra (in ms, not in EN): ' + extra.length);
extra.forEach((k) => console.log('  EXTRA: ' + k));

// 2. Param preservation
const paramRe = /\{[a-zA-Z]+\}/g;
let paramErrs = 0;
for (const k of enKeys) {
  if (!merged[k]) continue;
  const ep = (en[k].match(paramRe) || []).sort().join(',');
  const ip = (merged[k].match(paramRe) || []).sort().join(',');
  if (ep !== ip) {
    console.log('  PARAM MISMATCH: ' + k + ' EN=[' + ep + '] MS=[' + ip + ']');
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
    console.log('  TAG MISMATCH: ' + k + ' EN=[' + et + '] MS=[' + it + ']');
    tagErrs++;
  }
}
console.log('[3] HTML tag mismatches: ' + tagErrs);

// 4. Mojibake + forbidden control chars + foreign scripts
// Malay (Bahasa Malaysia) is pure-ASCII Latin orthography: accented Latin, other scripts, bidi controls are all strays.
const badChars = /[\uFFFD]/;
const ctrlChars = /[\u200E\u200F\u202A-\u202E\u2066-\u2069]/;
// foreign script blocks: Greek, Cyrillic, Hebrew, Arabic, Thai, CJK, Hangul, kana
const foreignRe =
  /[\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u0900-\u097F\u0E00-\u0E7F\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]/;
// accented / extended Latin (not part of modern Malay orthography — mojibake or copy-paste strays)
const accentRe = /[\u00C0-\u00D6\u00D8-\u00FF\u0100-\u017F\u0180-\u024F]/;
let mojiErrs = 0;
let ctrlErrs = 0;
let foreignErrs = 0;
let accentErrs = 0;
for (const k of msKeys) {
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
const identical = msKeys.filter((k) => merged[k] === en[k]);
console.log('\n[5] EN-identical values: ' + identical.length);
identical.forEach((k) => console.log('  SAME: ' + k + ' = ' + JSON.stringify(en[k]).slice(0, 80)));

// 6. Malay marker stats (soft quality signal)
const msMarkers = /\b(yang|dan|untuk|dengan|kami|anda|tidak|papan|air|dayung)\b/i;
let markerKeys = 0;
for (const k of msKeys) {
  if (msMarkers.test(merged[k])) markerKeys++;
}
console.log('\n[6] Keys containing common Malay markers: ' + markerKeys + ' of ' + msKeys.length);

// 7. Empty values
const empties = msKeys.filter((k) => merged[k].trim() === '');
console.log('[7] Empty values: ' + empties.length);
empties.forEach((k) => console.log('  EMPTY: ' + k));

// 8. Indonesian-only vocabulary leftovers (id was the drafting reference — catch un-localized words)
// Only unambiguous id-only words that differ from standard Malay (ms: kerana, boleh, ialah, bahawa, adakah,
// di mana, mempunyai, memerlukan, menemui, sila, pelbagai, sebahagian, selepas).
const idOnlyVocabRe =
  /\b(karena|bisa|adalah|bahwa|apakah|dimana|memiliki|membutuhkan|menemukan|silakan|berbagai|sebagian|setelah|gimana|apalagi|dimanapun|kapanpun|bagaimanapun)\b/i;
let idErrs = 0;
for (const k of msKeys) {
  if (idOnlyVocabRe.test(merged[k])) {
    console.log('  ID-ONLY VOCAB: ' + k + ' -> ' + JSON.stringify(merged[k]).slice(0, 120));
    idErrs++;
  }
}
console.log('[8] Indonesian-only vocabulary leftovers: ' + idErrs);

// Write merged output
fs.writeFileSync(path.join(dir, 'ms_ui_merged.json'), JSON.stringify(merged, null, 1), 'utf8');
console.log('\nWrote ms_ui_merged.json (' + msKeys.length + ' keys)');
