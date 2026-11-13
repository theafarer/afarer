const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const EN = JSON.parse(fs.readFileSync(path.join(BASE, 'guides_en.json'), 'utf8'));
const LOCALES = ['hr', 'hu', 'sk', 'bg', 'sl', 'sr', 'id', 'he', 'ms', 'lt', 'lv', 'et', 'tl'];

// Fields to translate (text) vs keep verbatim
const TEXT_FIELDS = ['title', 'description', 'tldr', 'problem', 'solution', 'audience'];
const KEEP_FIELDS = ['slug', 'category', 'difficulty'];
const KEEP_ARRAYS = ['waterType', 'relatedProducts', 'relatedGuides'];

// Diacritic requirements: at least one of these must appear
const DIACRITICS = {
  hr: ['č', 'ć', 'š', 'ž', 'đ'],
  hu: ['á', 'é', 'í', 'ó', 'ö', 'ő', 'ú', 'ü', 'ű'],
  sk: ['á', 'ä', 'č', 'ď', 'é', 'í', 'ľ', 'ň', 'ó', 'ô', 'š', 'ť', 'ú', 'ý', 'ž'],
  bg: [
    'а',
    'б',
    'в',
    'г',
    'д',
    'е',
    'ж',
    'з',
    'и',
    'й',
    'к',
    'л',
    'м',
    'н',
    'о',
    'п',
    'р',
    'с',
    'т',
    'у',
    'ф',
    'х',
    'ц',
    'ч',
    'ш',
    'щ',
    'ъ',
    'ь',
    'ю',
    'я',
  ],
  sl: ['č', 'š', 'ž'],
  sr: [
    'а',
    'б',
    'в',
    'г',
    'д',
    'ђ',
    'е',
    'ж',
    'з',
    'и',
    'ј',
    'к',
    'л',
    'љ',
    'м',
    'н',
    'њ',
    'о',
    'п',
    'р',
    'с',
    'т',
    'ћ',
    'у',
    'ф',
    'х',
    'ц',
    'ч',
    'џ',
    'ш',
  ],
  id: ['dan', 'yang', 'untuk', 'dengan', 'atau'],
  he: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'],
  ms: ['dan', 'yang', 'untuk', 'dengan', 'atau'],
  lt: ['ą', 'č', 'ę', 'ė', 'į', 'š', 'ų', 'ū', 'ž'],
  lv: ['ā', 'č', 'ē', 'ģ', 'ī', 'ķ', 'ļ', 'ņ', 'ŗ', 'š', 'ū', 'ž'],
  et: ['õ', 'ä', 'ö', 'ü', 'š', 'ž'],
  tl: ['ng', 'na', 'sa', 'ang', 'ngayon'],
};
// Forbidden chars per locale
const FORBIDDEN = {
  bg: ['ѝ', 'Ѝ'],
  sl: ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'к', 'л', 'м', 'о', 'п', 'р', 'с', 'ц', 'ы', 'э', 'ю', 'я'], // Cyrillic (subset without Latin-shared lookalikes)
  hr: ['ы', 'э', 'ю', 'я', 'ъ', 'ь', 'й'],
  hu: ['ы', 'э', 'ю', 'я', 'ъ', 'ь', 'й'],
  sk: ['ы', 'э', 'ю', 'я', 'ъ', 'ь', 'й'],
  lt: ['ā', 'ē', 'ģ', 'ī', 'ķ', 'ļ', 'ņ', 'ŗ', 'ō'],
  lv: ['ą', 'ę', 'ė', 'į', 'ų'],
  et: ['ā', 'ē', 'ģ', 'ī', 'ķ', 'ļ', 'ņ', 'ŗ', 'ą', 'ę', 'ė', 'į', 'ų'],
  id: ['ы', 'э', 'ю', 'я', 'ъ', 'ь', 'й'],
  ms: ['ы', 'э', 'ю', 'я', 'ъ', 'ь', 'й'],
  tl: ['ы', 'э', 'ю', 'я', 'ъ', 'ь', 'й'],
  he: ['ы', 'э', 'ю', 'я', 'ъ', 'ь', 'й'],
};
// sr: Cyrillic letters NOT in the Serbian alphabet
const SR_FORBIDDEN = ['ё', 'ы', 'э', 'ю', 'я', 'щ', 'ъ', 'ь', 'й', 'й', 'ї', 'і', 'ґ', 'ѓ', 'ќ', 'ў'];

// Allowed EN words in translations (brands/acronyms/common)
const ALLOW_EN =
  /(afarer|SUP|PVC|CE|ISO|OEM|ODM|MOQ|PSI|EVA|PFD|USCG|VHF|GPS|UV|HH-66|Clifton|Rite in the Rain|The Wedge|Gordon and Betty Moore|SUP Explorer 11|SUP Tour 12|SUP Ocean Pulse|SUP Tropical Breeze|SUP Leviathan Wake|SUP Ocean Voyager|Life Vest Classic|Life Vest Pro)/;

function collectText(rec, out) {
  for (const f of TEXT_FIELDS) if (typeof rec[f] === 'string') out.push(rec[f]);
  if (Array.isArray(rec.steps)) for (const s of rec.steps) out.push(s);
  if (Array.isArray(rec.faq))
    for (const f of rec.faq) {
      out.push(f.q);
      out.push(f.a);
    }
}
function shape(rec) {
  // structural signature: key order + array lengths
  const keys = Object.keys(rec).join(',');
  const steps = Array.isArray(rec.steps) ? rec.steps.length : -1;
  const faq = Array.isArray(rec.faq) ? rec.faq.length : -1;
  const wt = Array.isArray(rec.waterType) ? rec.waterType.length : -1;
  const rp = Array.isArray(rec.relatedProducts) ? rec.relatedProducts.length : -1;
  const rg = Array.isArray(rec.relatedGuides) ? rec.relatedGuides.length : -1;
  const fq = Array.isArray(rec.faq) ? rec.faq.map((f) => Object.keys(f).join(',')).join(';') : '';
  return keys + '|' + steps + '|' + faq + '|' + wt + '|' + rp + '|' + rg + '|' + fq;
}
function numbers(s) {
  return s.match(/\d+(?:[.,]\d+)?/g) || [];
}

let errors = 0,
  warnings = 0;
for (const lang of LOCALES) {
  const dir = path.join(BASE, 'out', lang);
  const recs = [];
  for (let i = 0; i < 4; i++) {
    const p = path.join(dir, 'g' + i + '.json');
    if (!fs.existsSync(p)) {
      console.log('FATAL ' + lang + ': missing g' + i + '.json');
      errors++;
      continue;
    }
    try {
      const arr = JSON.parse(fs.readFileSync(p, 'utf8'));
      if (!Array.isArray(arr)) {
        console.log('FATAL ' + lang + ' g' + i + ': not an array');
        errors++;
        continue;
      }
      recs.push(...arr);
    } catch (e) {
      console.log('FATAL ' + lang + ' g' + i + ': JSON parse error: ' + e.message);
      errors++;
    }
  }
  if (recs.length !== EN.length) {
    console.log('ERR ' + lang + ': record count ' + recs.length + ' != ' + EN.length);
    errors++;
  }

  let diacriticHits = 0;
  const enTexts = EN.map((r) => {
    const t = [];
    collectText(r, t);
    return t;
  });
  for (let i = 0; i < recs.length && i < EN.length; i++) {
    const en = EN[i],
      tr = recs[i];
    // slug order
    if (tr.slug !== en.slug) {
      console.log('ERR ' + lang + ' rec' + i + ': slug order mismatch: ' + tr.slug + ' vs EN ' + en.slug);
      errors++;
      continue;
    }
    // shape
    if (shape(tr) !== shape(en)) {
      console.log('ERR ' + lang + ' ' + en.slug + ': shape mismatch\n  EN: ' + shape(en) + '\n  TR: ' + shape(tr));
      errors++;
    }
    // verbatim fields
    for (const f of KEEP_FIELDS)
      if (tr[f] !== en[f]) {
        console.log(
          'ERR ' +
            lang +
            ' ' +
            en.slug +
            ': keep field ' +
            f +
            ' changed: ' +
            JSON.stringify(tr[f]) +
            ' != ' +
            JSON.stringify(en[f])
        );
        errors++;
      }
    for (const f of KEEP_ARRAYS) {
      const a = en[f] || [],
        b = tr[f] || [];
      if (a.length !== b.length || a.some((v, j) => v !== b[j])) {
        console.log('ERR ' + lang + ' ' + en.slug + ': keep array ' + f + ' changed');
        errors++;
      }
    }
    // text fields
    const trTexts = [];
    collectText(tr, trTexts);
    for (let j = 0; j < trTexts.length; j++) {
      const t = trTexts[j];
      if (!t || t.trim() === '') {
        console.log('ERR ' + lang + ' ' + en.slug + ': empty text at index ' + j);
        errors++;
        continue;
      }
      if (t === enTexts[i][j]) {
        // identical to EN — flag unless short/allowed token
        if (!ALLOW_EN.test(t) && t.length > 3) {
          console.log('WARN ' + lang + ' ' + en.slug + ': text identical to EN: ' + t.slice(0, 60));
          warnings++;
        }
      }
      // forbidden chars
      const forb = lang === 'sr' ? SR_FORBIDDEN : FORBIDDEN[lang] || [];
      for (const c of forb)
        if (t.includes(c)) {
          console.log('ERR ' + lang + ' ' + en.slug + ': forbidden char "' + c + '" in: ' + t.slice(0, 50));
          errors++;
        }
      // diacritics
      for (const c of DIACRITICS[lang] || []) if (t.includes(c)) diacriticHits++;
    }
    // numbers preserved: every EN number must appear in TR (concatenated)
    const enNums = numbers(enTexts[i].join(' '));
    const trAll = trTexts.join(' ');
    for (const n of enNums)
      if (!trAll.includes(n)) {
        console.log('WARN ' + lang + ' ' + en.slug + ': number "' + n + '" from EN not found in translation');
        warnings++;
      }
  }
  if (diacriticHits < 5 && lang !== 'id' && lang !== 'ms' && lang !== 'tl') {
    console.log('WARN ' + lang + ': very few diacritic/script chars found (' + diacriticHits + ')');
    warnings++;
  }
  console.log(lang + ': ' + recs.length + ' records checked');
}
console.log('---');
console.log('ERRORS: ' + errors + '  WARNINGS: ' + warnings);
