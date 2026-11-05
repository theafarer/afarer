// Merge c01-c13 hu chunks, validate against en_ui.json
const fs = require('fs');
const path = require('path');
const dir = __dirname;

// Load EN baseline
const en = JSON.parse(fs.readFileSync(path.join(dir, 'en_ui.json'), 'utf8'));
const enKeys = Object.keys(en);
console.log('EN keys: ' + enKeys.length);

// Merge all hu chunks
const merged = {};
const dupes = [];
for (let i = 1; i <= 13; i++) {
  const cid = 'c' + String(i).padStart(2, '0');
  const f = path.join(dir, cid + '_hu.json');
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

const huKeys = Object.keys(merged);
console.log('\nMerged hu keys: ' + huKeys.length);
console.log('Dupes: ' + dupes.length + (dupes.length ? '\n  ' + dupes.join('\n  ') : ''));

// 1. Coverage
const missing = enKeys.filter((k) => !Object.prototype.hasOwnProperty.call(merged, k));
const extra = huKeys.filter((k) => !Object.prototype.hasOwnProperty.call(en, k));
console.log('\n[1] Missing (in EN, not in hu): ' + missing.length);
missing.forEach((k) => console.log('  MISS: ' + k));
console.log('[1] Extra (in hu, not in EN): ' + extra.length);
extra.forEach((k) => console.log('  EXTRA: ' + k));

// 2. Param preservation
const paramRe = /\{[a-zA-Z]+\}/g;
let paramErrs = 0;
for (const k of enKeys) {
  if (!merged[k]) continue;
  const ep = (en[k].match(paramRe) || []).sort().join(',');
  const ip = (merged[k].match(paramRe) || []).sort().join(',');
  if (ep !== ip) {
    console.log('  PARAM MISMATCH: ' + k + ' EN=[' + ep + '] HU=[' + ip + ']');
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
    console.log('  TAG MISMATCH: ' + k + ' EN=[' + et + '] HU=[' + it + ']');
    tagErrs++;
  }
}
console.log('[3] HTML tag mismatches: ' + tagErrs);

// 4. Mojibake + forbidden control chars + foreign scripts + non-Hungarian accented Latin
// Hungarian orthography allows: a á e é i í o ó ö ő u ú ü ű (+ uppercase).
// Any other accented/extended Latin letter is a stray (mojibake or copy-paste from another locale).
const badChars = /[\uFFFD]/;
const ctrlChars = /[\u200E\u200F\u202A-\u202E\u2066-\u2069]/;
// foreign script blocks: Greek, Cyrillic, Hebrew, Arabic, Devanagari, Thai, CJK, Hangul, kana
const foreignRe =
  /[\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u0900-\u097F\u0E00-\u0E7F\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]/;
// Hungarian-allowed extended-Latin letters (plain ASCII a-z is always fine)
const huAllowed = new Set('áÁéÉíÍóÓöÖőŐúÚüÜűŰ'.split(''));
// Latin-1 Supplement + Latin Extended-A/B accented letters — flag those outside the Hungarian set
const extendedLatinRe = /[\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0100-\u017F\u0180-\u024F]/g;
let mojiErrs = 0;
let ctrlErrs = 0;
let foreignErrs = 0;
let accentErrs = 0;
for (const k of huKeys) {
  const v = merged[k];
  if (badChars.test(v)) {
    console.log('  MOJIBAKE: ' + k + ' -> ' + JSON.stringify(v).slice(0, 120));
    mojiErrs++;
  }
  if (ctrlChars.test(v)) {
    console.log('  BIDI/CTRL: ' + k + ' -> ' + JSON.stringify(v).slice(0, 120));
    ctrlErrs++;
  }
  if (foreignRe.test(v)) {
    console.log('  FOREIGN-SCRIPT: ' + k + ' -> ' + JSON.stringify(v).slice(0, 120));
    foreignErrs++;
  }
  for (const ch of v.match(extendedLatinRe) || []) {
    if (!huAllowed.has(ch)) {
      console.log(
        '  NON-HUNGARIAN LATIN: ' +
          k +
          ' char=' +
          JSON.stringify(ch) +
          ' (U+' +
          ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0') +
          ') -> ' +
          JSON.stringify(v).slice(0, 120)
      );
      accentErrs++;
      break;
    }
  }
}
console.log(
  '[4] Mojibake: ' +
    mojiErrs +
    ', bidi-ctrl: ' +
    ctrlErrs +
    ', foreign-script: ' +
    foreignErrs +
    ', non-Hungarian-Latin: ' +
    accentErrs
);

// 5. EN-identical values (review list)
const identical = huKeys.filter((k) => merged[k] === en[k]);
console.log('\n[5] EN-identical values: ' + identical.length);
identical.forEach((k) => console.log('  SAME: ' + k + ' = ' + JSON.stringify(en[k]).slice(0, 80)));

// 6. Hungarian marker stats (soft quality signal)
const huMarkers = /[ és]|^és\b|\b(vagy|nem|hajó|víz|deszka|felfújható|garancia|biztonsági|megoldás)\b/i;
let markerKeys = 0;
for (const k of huKeys) {
  if (huMarkers.test(merged[k])) markerKeys++;
}
console.log('\n[6] Keys containing common Hungarian markers: ' + markerKeys + ' of ' + huKeys.length);

// 7. Empty values
const empties = huKeys.filter((k) => merged[k].trim() === '');
console.log('[7] Empty values: ' + empties.length);
empties.forEach((k) => console.log('  EMPTY: ' + k));

// 8. English function-word leftovers (catch half-translated strings)
const enLeftoverRe = /\b(the|and|with|from|your|our|this|that|when|what|which|where)\b/;
let enErrs = 0;
for (const k of huKeys) {
  if (enLeftoverRe.test(merged[k])) {
    console.log('  EN-LEFTOVER: ' + k + ' -> ' + JSON.stringify(merged[k]).slice(0, 120));
    enErrs++;
  }
}
console.log('[8] English function-word leftovers: ' + enErrs);

// Write merged output
fs.writeFileSync(path.join(dir, 'hu_ui_merged.json'), JSON.stringify(merged, null, 1), 'utf8');
console.log('\nWrote hu_ui_merged.json (' + huKeys.length + ' keys)');
