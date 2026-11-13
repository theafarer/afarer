// Phase B validator: out2/<lang>/g{i}.json vs chunks2/g{i}.json
const fs = require('fs');
const path = require('path');
const base = __dirname;

const CHUNK_FILES = ['g0.json', 'g1.json', 'g2.json', 'g3.json'];
const EXPECTED_COUNTS = { 'g0.json': 183, 'g1.json': 236, 'g2.json': 186, 'g3.json': 199 };
const LOCALES = ['hr', 'hu', 'sk', 'bg', 'sl', 'sr', 'id', 'ms', 'he', 'lt', 'lv', 'et', 'tl'];

const CYR = /[\u0400-\u04FF]/;

const SCRIPT_RULES = {
  hr: { required: ['č', 'ć', 'š', 'ž', 'đ'], forbidden: [], noCyrillic: true },
  hu: { required: ['á', 'é', 'í', 'ó', 'ö', 'ő', 'ú', 'ü', 'ű'], forbidden: [], noCyrillic: true },
  sk: {
    required: ['á', 'ä', 'č', 'ď', 'é', 'í', 'ľ', 'ň', 'ó', 'ô', 'š', 'ť', 'ú', 'ý', 'ž'],
    forbidden: ['ć', 'đ', 'ő', 'ű'],
    noCyrillic: true,
  },
  bg: { required: [], forbidden: ['ѝ', 'Ѝ'], noCyrillic: false, mustHaveCyrillic: true },
  sl: {
    required: ['č', 'š', 'ž'],
    forbidden: ['ć', 'đ', 'ő', 'ű', 'á', 'é', 'í', 'ó', 'ú', 'ý', 'ä', 'ô', 'ľ', 'ŕ'],
    noCyrillic: true,
  },
  sr: {
    required: [],
    forbidden: [
      'ё',
      'ы',
      'э',
      'ю',
      'я',
      'щ',
      'ъ',
      'ь',
      'й',
      'ї',
      'і',
      'ґ',
      'ѓ',
      'ќ',
      'ў',
      'ѝ',
      'Є',
      'Ё',
      'Ы',
      'Э',
      'Ю',
      'Я',
      'Щ',
      'Ъ',
      'Ь',
      'Й',
      'Ї',
      'І',
      'Ґ',
      'Ѓ',
      'Ќ',
      'Ў',
      'Ѝ',
    ],
    noCyrillic: false,
    mustHaveCyrillic: true,
  },
  id: { required: [], forbidden: [], noCyrillic: true },
  ms: { required: [], forbidden: [], noCyrillic: true },
  he: { required: [], forbidden: [], noCyrillic: false, mustHaveHebrew: true },
  lt: {
    required: ['ą', 'č', 'ę', 'ė', 'į', 'š', 'ų', 'ū', 'ž'],
    forbidden: ['ā', 'ē', 'ģ', 'ī', 'ķ', 'ļ', 'ņ', 'ŗ', 'ő', 'ű', 'õ'],
    noCyrillic: true,
  },
  lv: {
    required: ['ā', 'č', 'ē', 'ģ', 'ī', 'ķ', 'ļ', 'ņ', 'š', 'ū', 'ž'],
    forbidden: ['ą', 'ę', 'ė', 'į', 'ų', 'ő', 'ű', 'õ'],
    noCyrillic: true,
  },
  et: {
    required: ['õ', 'ä', 'ö', 'ü'],
    forbidden: ['ā', 'ē', 'ģ', 'ī', 'ķ', 'ļ', 'ņ', 'ŗ', 'ą', 'ę', 'ė', 'į', 'ų', 'ő', 'ű'],
    noCyrillic: true,
  },
  tl: { required: [], forbidden: [], noCyrillic: true },
};

// English function-word residue patterns (Unicode-aware boundaries: letters/digits/hyphen block a match)
const EN_WORDS =
  /(?<![\p{L}\p{N}-])(the|and|with|your|from|this|that|will|should|must|without|between|their|about|which|when|where|while|also|more|most|best|only|every|each|other|into|onto|over|under|after|before|during|because|however|please|thank)(?![\p{L}\p{N}-])/giu;
const BRANDS = [
  'afarer',
  'SUP Explorer 11',
  'SUP Tour 12',
  'SUP Ocean Pulse',
  'SUP Tropical Breeze',
  'SUP Leviathan Wake',
  'SUP Ocean Voyager',
  'Life Vest Classic',
  'Life Vest Pro',
  'HH-66',
  'Clifton',
  'Rite in the Rain',
  'The Wedge',
  'Gordon and Betty Moore',
];
const ACRONYMS = ['SUP', 'PVC', 'CE', 'ISO', 'OEM', 'ODM', 'MOQ', 'PSI', 'EVA', 'PFD', 'USCG', 'VHF', 'GPS', 'UV'];

let errorCount = 0,
  warnCount = 0;
const errors = [],
  warnings = [];

function err(locale, chunk, idx, msg) {
  errorCount++;
  errors.push(`[ERR] ${locale}/${chunk} #${idx}: ${msg}`);
}
function warn(locale, chunk, idx, msg) {
  warnCount++;
  warnings.push(`[WRN] ${locale}/${chunk} #${idx}: ${msg}`);
}

for (const locale of LOCALES) {
  const rules = SCRIPT_RULES[locale];
  const localeCharSet = new Set();
  let localeHasCyrillic = false,
    localeHasHebrew = false;

  for (const chunk of CHUNK_FILES) {
    const inPath = path.join(base, 'chunks2', chunk);
    const outPath = path.join(base, 'out2', locale, chunk);
    const src = JSON.parse(fs.readFileSync(inPath, 'utf8'));
    let out;
    try {
      out = JSON.parse(fs.readFileSync(outPath, 'utf8'));
    } catch (e) {
      err(locale, chunk, -1, `output unparseable/missing: ${e.message}`);
      continue;
    }

    if (!Array.isArray(out)) {
      err(locale, chunk, -1, 'output is not an array');
      continue;
    }
    if (out.length !== EXPECTED_COUNTS[chunk])
      err(locale, chunk, -1, `entry count ${out.length} != ${EXPECTED_COUNTS[chunk]}`);
    if (out.length !== src.length) {
      err(locale, chunk, -1, `entry count ${out.length} != source ${src.length}`);
      continue;
    }

    for (let i = 0; i < src.length; i++) {
      const s = src[i],
        o = out[i];
      if (o.file !== s.file) err(locale, chunk, i, `file mismatch: "${o.file}" != "${s.file}"`);
      if (o.key !== s.key) err(locale, chunk, i, `key mismatch: "${String(o.key).slice(0, 60)}..." != source`);
      const val = o.value;
      if (typeof val !== 'string' || val.trim().length === 0) {
        err(locale, chunk, i, 'empty/missing value');
        continue;
      }

      // collect chars
      if (CYR.test(val)) localeHasCyrillic = true;
      if (/[\u0590-\u05FF]/.test(val)) localeHasHebrew = true;
      for (const ch of rules.required) {
        if (val.includes(ch)) localeCharSet.add(ch);
      }

      // forbidden chars
      for (const f of rules.forbidden) {
        if (val.includes(f)) err(locale, chunk, i, `forbidden char "${f}" in value`);
      }
      if (rules.noCyrillic && CYR.test(val)) err(locale, chunk, i, 'Cyrillic in Latin-script locale');

      // markdown fences / artifacts
      if (val.includes('```')) err(locale, chunk, i, 'markdown fence in value');

      // value identical to key (untranslated) — only flag when key has 3+ words
      if (val === s.key && s.key.trim().split(/\s+/).length >= 3)
        warn(locale, chunk, i, `value identical to EN key: "${s.key.slice(0, 50)}"`);

      // English residue
      const enMatch = val.match(EN_WORDS);
      if (enMatch) {
        const hits = [...new Set(enMatch.map((w) => w.toLowerCase()))];
        // 'The Wedge', 'Gordon and Betty Moore', 'Rite in the Rain' are brand exceptions
        const brandFree = BRANDS.every((b) => !val.includes(b));
        if (brandFree) warn(locale, chunk, i, `possible EN residue words [${hits.join(',')}]: "${val.slice(0, 70)}"`);
      }

      // brand verbatim
      for (const b of BRANDS) {
        if (s.key.includes(b) && !val.includes(b)) err(locale, chunk, i, `brand "${b}" missing in value`);
      }
      // acronyms verbatim
      for (const a of ACRONYMS) {
        if (new RegExp(`\\b${a}\\b`).test(s.key) && !val.includes(a)) {
          // reviewed-OK exceptions: "SUP Buddy"/"yoga SUP" rendered semantically
          if (a === 'SUP' && (/SUP buddy/i.test(s.key) || /yoga SUP/i.test(s.key))) continue;
          err(locale, chunk, i, `acronym "${a}" missing in value`);
        }
      }

      // numeric tokens preserved (thousands-separator aware: compare digit-only forms)
      const numsSrc = s.key.match(/\d+(?:[.,]\d+)*/g) || [];
      for (const n of numsSrc) {
        const nDigits = n.replace(/[.,]/g, '');
        const valDigits = val.replace(/(\d)[.,](?=\d{3}(\D|$))/g, '$1').replace(/[^\d]/g, '');
        // skip leading-zero variants (dates like "January 06" -> "6.")
        const nNoLeadZero = String(parseInt(n, 10));
        if (!valDigits.includes(nDigits) && !val.replace(/[^\d]/g, '').includes(nDigits) && !/^\d$|^0\d/.test(n)) {
          warn(locale, chunk, i, `number "${n}" from key not found in value: "${val.slice(0, 70)}"`);
        }
      }
    }
  }

  // locale-level script checks
  for (const ch of rules.required) {
    if (!localeCharSet.has(ch)) warn(locale, -1, -1, `required diacritic "${ch}" never appears in locale`);
  }
  if (rules.mustHaveCyrillic && !localeHasCyrillic) err(locale, -1, -1, 'no Cyrillic found in locale');
  if (rules.mustHaveHebrew && !localeHasHebrew) err(locale, -1, -1, 'no Hebrew found in locale');
}

console.log(`=== Phase B validation: ${errorCount} errors, ${warnCount} warnings ===`);
for (const e of errors) console.log(e);
for (const w of warnings.slice(0, 100)) console.log(w);
if (warnings.length > 100) console.log(`... ${warnings.length - 100} more warnings`);
fs.writeFileSync(
  path.join(base, 'validate_landing_report.txt'),
  `ERRORS ${errorCount}\nWARNINGS ${warnCount}\n\n` + errors.join('\n') + '\n\n' + warnings.join('\n'),
  'utf8'
);
process.exit(errorCount > 0 ? 1 : 0);
