// Merge c01-c13 sk chunks, validate against en_ui.json
const fs = require('fs');
const path = require('path');
const dir = __dirname;

// Load EN baseline
const en = JSON.parse(fs.readFileSync(path.join(dir, 'en_ui.json'), 'utf8'));
const enKeys = Object.keys(en);
console.log('EN keys: ' + enKeys.length);

// Merge all sk chunks
const merged = {};
const dupes = [];
for (let i = 1; i <= 13; i++) {
  const cid = 'c' + String(i).padStart(2, '0');
  const f = path.join(dir, cid + '_sk.json');
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

const skKeys = Object.keys(merged);
console.log('\nMerged sk keys: ' + skKeys.length);
console.log('Dupes: ' + dupes.length + (dupes.length ? '\n  ' + dupes.join('\n  ') : ''));

// 1. Coverage
const missing = enKeys.filter((k) => !Object.prototype.hasOwnProperty.call(merged, k));
const extra = skKeys.filter((k) => !Object.prototype.hasOwnProperty.call(en, k));
console.log('\n[1] Missing (in EN, not in sk): ' + missing.length);
missing.forEach((k) => console.log('  MISS: ' + k));
console.log('[1] Extra (in sk, not in EN): ' + extra.length);
extra.forEach((k) => console.log('  EXTRA: ' + k));

// 2. Param preservation
const paramRe = /\{[a-zA-Z]+\}/g;
let paramErrs = 0;
for (const k of enKeys) {
  if (!merged[k]) continue;
  const ep = (en[k].match(paramRe) || []).sort().join(',');
  const ip = (merged[k].match(paramRe) || []).sort().join(',');
  if (ep !== ip) {
    console.log('  PARAM MISMATCH: ' + k + ' EN=[' + ep + '] SK=[' + ip + ']');
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
    console.log('  TAG MISMATCH: ' + k + ' EN=[' + et + '] SK=[' + it + ']');
    tagErrs++;
  }
}
console.log('[3] HTML tag mismatches: ' + tagErrs);

// 4. Mojibake + forbidden control chars + foreign scripts + non-Slovak accented Latin
// Slovak orthography allows: a á ä e é i í o ó ô u ú y ý plus caron letters č ď ľ ň š ť ž
// plus l-acute ĺ and r-acute ŕ (and uppercase forms).
const badChars = /[\uFFFD]/;
const ctrlChars = /[\u200E\u200F\u202A-\u202E\u2066-\u2069]/;
// foreign script blocks: Greek, Cyrillic, Hebrew, Arabic, Devanagari, Thai, CJK, Hangul, kana
const foreignRe =
  /[\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u0900-\u097F\u0E00-\u0E7F\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]/;
// Slovak-allowed extended-Latin letters (plain ASCII a-z is always fine)
const skAllowed = new Set('áÁäÄčČďĎéÉíÍĺĹľĽňŇóÓôÔŕŔšŠťŤúÚýÝžŽ'.split(''));
// Latin-1 Supplement + Latin Extended-A/B accented letters — flag those outside the Slovak set
const extendedLatinRe = /[\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0100-\u017F\u0180-\u024F]/g;
let mojiErrs = 0;
let ctrlErrs = 0;
let foreignErrs = 0;
let accentErrs = 0;
for (const k of skKeys) {
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
    if (!skAllowed.has(ch)) {
      console.log(
        '  NON-SLOVAK LATIN: ' +
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
    ', non-Slovak-Latin: ' +
    accentErrs
);

// 5. EN-identical values (review list)
const identical = skKeys.filter((k) => merged[k] === en[k]);
console.log('\n[5] EN-identical values: ' + identical.length);
identical.forEach((k) => console.log('  SAME: ' + k + ' = ' + JSON.stringify(en[k]).slice(0, 80)));

// 6. Slovak marker stats (soft quality signal)
const skMarkers = /[ a]|^a\b|\b(alebo|nie|loď|voda|doska|nafukovací|záruka|bezpečnostné|riešenie)\b/i;
let markerKeys = 0;
for (const k of skKeys) {
  if (skMarkers.test(merged[k])) markerKeys++;
}
console.log('\n[6] Keys containing common Slovak markers: ' + markerKeys + ' of ' + skKeys.length);

// 7. Empty values
const empties = skKeys.filter((k) => merged[k].trim() === '');
console.log('[7] Empty values: ' + empties.length);
empties.forEach((k) => console.log('  EMPTY: ' + k));

// 8. English function-word leftovers (catch half-translated strings)
const enLeftoverRe = /\b(the|and|with|from|your|our|this|that|when|what|which|where)\b/;
let enErrs = 0;
for (const k of skKeys) {
  if (enLeftoverRe.test(merged[k])) {
    console.log('  EN-LEFTOVER: ' + k + ' -> ' + JSON.stringify(merged[k]).slice(0, 120));
    enErrs++;
  }
}
console.log('[8] English function-word leftovers: ' + enErrs);

// Write merged output
fs.writeFileSync(path.join(dir, 'sk_ui_merged.json'), JSON.stringify(merged, null, 1), 'utf8');
console.log('\nWrote sk_ui_merged.json (' + skKeys.length + ' keys)');
