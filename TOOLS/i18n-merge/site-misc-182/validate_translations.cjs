const fs = require('fs');
const path = require('path');
const WORK = __dirname;
const OUT = path.join(WORK, 'out');

const en = JSON.parse(fs.readFileSync(path.join(OUT, 'en_source.json'), 'utf8'));
const EN_KEYS = Object.keys(en);

const LOCALES = ['hr', 'hu', 'sk', 'bg', 'sl', 'sr', 'id', 'he', 'ms', 'lt', 'lv', 'et', 'tl'];

// per-locale script specs
const CYRILLIC_ONLY = new Set(['bg', 'sr']);
const HEBREW = new Set(['he']);
const FORBIDDEN = {
  bg: ['\u045D', '\u040D'], // ѝ Ѝ
  sr: [
    '\u0451',
    '\u0401',
    '\u044B',
    '\u042B',
    '\u044D',
    '\u042D',
    '\u044E',
    '\u042E',
    '\u044F',
    '\u042F',
    '\u0449',
    '\u0429',
    '\u044A',
    '\u042A',
    '\u044C',
    '\u042C',
    '\u0439',
    '\u0419',
    '\u0457',
    '\u0407',
    '\u0456',
    '\u0406',
    '\u0454',
    '\u0404',
    '\u0453',
    '\u0403',
    '\u045C',
    '\u040C',
    '\u045E',
    '\u040E',
    '\u045D',
    '\u040D',
  ], // ё ы э ю я щ ъ ь й ї і ґ ѓ ќ ў ѝ
};

// tokens that must appear verbatim in the translation when present in EN
const VERBATIM_TOKENS = [
  'SUP',
  'PVC',
  'ISO',
  'OEM',
  'ODM',
  'BSCI',
  'REACH',
  'RoHS',
  'DTC',
  'UV',
  'SGS',
  'amfori',
  'AQL',
  'PSI',
  'EVA',
  'PFD',
  'QC',
  'SKU',
  'BSI',
  'FOB',
];
// CE / RF are context-sensitive (CE=certification, RF=radio-frequency; translators may use local equivalents) - check but only WARN
const WARN_TOKENS = ['CE', 'RF'];

// values legitimately identical across all locales (proper-noun organization names)
const KEEP_IDENTICAL = new Set(['SGS / BSI', 'European Chemicals Agency']);

function hasToken(text, token) {
  // Hyphen-tolerant: inflected forms (SUP-a, PFD-i, UV-tundi, ה-SUP, CE-, ISO- ja) are correct;
  // only letter/digit adjacency (e.g. "SUPPLY") invalidates the match.
  const esc = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp('(?<![\\p{L}\\p{N}])' + esc + '(?![\\p{L}\\p{N}])', 'u');
  return re.test(text);
}

function wordCount(s) {
  return s.trim().split(/\s+/).length;
}

let totalErrors = 0;
let totalWarnings = 0;
const report = {};

for (const loc of LOCALES) {
  const file = path.join(OUT, loc + '.json');
  const errors = [];
  const warnings = [];
  let data;
  try {
    data = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    console.log(loc + ': FATAL parse error: ' + e.message);
    totalErrors++;
    continue;
  }
  const keys = Object.keys(data);
  const missing = EN_KEYS.filter((k) => !(k in data));
  const extra = keys.filter((k) => !(k in en));
  if (missing.length) errors.push('missing keys: ' + missing.join(','));
  if (extra.length) errors.push('extra keys: ' + extra.join(','));

  for (const k of EN_KEYS) {
    if (!(k in data)) continue;
    const v = data[k];
    if (typeof v !== 'string' || !v.trim()) {
      errors.push(k + ': empty/non-string value');
      continue;
    }
    const env = en[k];

    // verbatim tokens
    for (const tok of VERBATIM_TOKENS) {
      if (hasToken(env, tok) && !hasToken(v, tok)) errors.push(k + ': missing token ' + tok);
    }
    for (const tok of WARN_TOKENS) {
      if (hasToken(env, tok) && !hasToken(v, tok))
        warnings.push(k + ': token ' + tok + ' not verbatim (review: may be localized)');
    }

    // HTML markup preservation
    for (const tag of ['<br />', '<span class="text-sky-600">', '</span>', '<em>', '</em>', '→']) {
      if (env.includes(tag) && !v.includes(tag)) errors.push(k + ': missing markup ' + tag);
    }

    // numbers / units
    const numChecks = [
      [/\b15 PSI\b/, '15 PSI'],
      [/\b1,500\+/, '1,500+'],
      [/\b10yr\b/, '10yr'],
      [/24–48h/, '24–48h'],
      [/\b1\.25x\b/, '1.25x'],
      [/<5%/, '<5%'],
      [/\b100%/, '100%'],
      [/\b0%/, '0%'],
      [/AQL 2\.5/, 'AQL 2.5'],
      [/ISO 2859/, 'ISO 2859'],
      [/#1/, '#1'],
      [/\b15-25 PSI\b/, '15-25 PSI'],
      [/\| Afarer/, '| Afarer'],
    ];
    for (const [re, label] of numChecks) {
      if (re.test(env) && !v.includes(label)) errors.push(k + ': missing numeric/unit ' + label);
    }

    // readTime: same number
    if (k.endsWith('.readTime')) {
      const enNum = env.match(/\d+/);
      const vNum = v.match(/\d+/);
      if (!enNum || !vNum || enNum[0] !== vNum[0])
        errors.push(k + ': readTime number mismatch (' + env + ' vs ' + v + ')');
    }

    // untranslated detection: >=3 words identical (unless legitimately identical proper nouns)
    if (v.trim() === env.trim() && wordCount(env) >= 3 && !KEEP_IDENTICAL.has(env.trim())) {
      warnings.push(k + ': value identical to EN (' + env.slice(0, 50) + ')');
    }

    // script checks (skip legitimately all-Latin proper-noun values)
    const isProperNoun = KEEP_IDENTICAL.has(env.trim());
    if (FORBIDDEN[loc]) {
      for (const ch of FORBIDDEN[loc]) {
        if (v.includes(ch)) errors.push(k + ': forbidden char U+' + ch.codePointAt(0).toString(16));
      }
    }
    if (CYRILLIC_ONLY.has(loc) && !isProperNoun) {
      // prose values (>= 3 words) must contain Cyrillic
      if (wordCount(v) >= 3 && !/[\u0410-\u044F\u0402\u0408\u040B\u0452\u0458\u045B]/.test(v)) {
        errors.push(k + ': no Cyrillic in prose value');
      }
    }
    if (HEBREW.has(loc) && !isProperNoun) {
      if (wordCount(v) >= 3 && !/[\u05D0-\u05EA]/.test(v)) {
        errors.push(k + ': no Hebrew in prose value');
      }
    }
  }

  // afarer lowercase preservation
  const afarKeys = EN_KEYS.filter((k) => /\bafarer\b/.test(en[k]) && !/Afarer/.test(en[k]));
  for (const k of afarKeys) {
    if (!(k in data)) continue;
    if (!data[k].includes('afarer')) errors.push(k + ': lowercase afarer missing');
  }

  report[loc] = { errors, warnings };
  totalErrors += errors.length;
  totalWarnings += warnings.length;
  console.log(loc + ': ' + errors.length + ' errors, ' + warnings.length + ' warnings');
  for (const e of errors) console.log('  [E] ' + e);
  for (const w of warnings) console.log('  [W] ' + w);
}

// tl countries validation
const tlC = JSON.parse(fs.readFileSync(path.join(OUT, 'tl_countries.json'), 'utf8'));
const tlKeys = Object.keys(tlC);
const cErr = [];
if (tlKeys.length !== 195) cErr.push('tl_countries key count: ' + tlKeys.length + ' (expect 195)');
const empty = tlKeys.filter((k) => !String(tlC[k]).trim());
if (empty.length) cErr.push('tl_countries empty values: ' + empty.join(','));
const unchanged = tlKeys.filter((k) => tlC[k] === k);
console.log(
  'tl_countries: ' +
    tlKeys.length +
    ' keys, ' +
    empty.length +
    ' empty, ' +
    unchanged.length +
    ' identical to EN (review list):'
);
console.log('  identical: ' + unchanged.join(', '));
for (const e of cErr) console.log('  [E] ' + e);
totalErrors += cErr.length;

console.log('\nTOTAL: ' + totalErrors + ' errors, ' + totalWarnings + ' warnings');
process.exit(totalErrors > 0 ? 1 : 0);
