const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const ROOT = 'E:/github/afarer/src/data/pages';
const PAGES = [
  'oem-paddle',
  'co-brand',
  'bateau-gonflable-fabricant',
  'fournisseur-nautique',
  'fabricant-sup-gonflable',
];
const LOCALES = ['es', 'it', 'ja', 'ko', 'pt', 'ru'];
const LATIN = new Set(['es', 'it', 'pt']);

// technical / kept-as-is terms (case-sensitive as written)
const TECH = new Set([
  'OEM',
  'ODM',
  'SUP',
  'PVC',
  'VS2',
  'Hypalon',
  'PSI',
  'CE',
  'ISO',
  'UKCA',
  'BSCI',
  'REACH',
  'USCG',
  'MOQ',
  'FOB',
  'CIF',
  'QC',
  'USD',
  'AQL',
  'UV',
  'FAQ',
  'B2B',
  'R&D',
  '3D',
  '2D',
  'VS',
  'Afarer',
  'Qingdao',
  'Co-Brand',
  'Co-Branding',
]);
// borrowed business/marketing terms used as-is in Romance locales (per repo precedent)
const BORROWED = new Set([
  'private',
  'label',
  'trading',
  'company',
  'Pack',
  'Project',
  'Agreement',
  'paddle',
  'tender',
  'design',
  'brief',
  'briefing',
  'naming',
  'standard',
  'concept',
  'drop-stitch',
  'media',
  'online',
  'premium',
  'test',
  'flow',
  'club',
  'clubs',
  'resort',
  'resorts',
  'villages',
  'per',
  'via',
]);

// English indicator words: function/content words that are NOT valid es/it/pt vocabulary.
const EN_INDICATOR = new Set([
  'the',
  'and',
  'with',
  'your',
  'from',
  'our',
  'for',
  'are',
  'was',
  'were',
  'be',
  'been',
  'being',
  'this',
  'that',
  'these',
  'those',
  'every',
  'each',
  'more',
  'most',
  'than',
  'then',
  'will',
  'would',
  'can',
  'could',
  'should',
  'have',
  'has',
  'had',
  'does',
  'did',
  'not',
  'but',
  'all',
  'any',
  'what',
  'which',
  'who',
  'when',
  'where',
  'how',
  'into',
  'onto',
  'over',
  'about',
  'after',
  'before',
  'through',
  'between',
  'per',
  'via',
  'brand',
  'water',
  'weeks',
  'days',
  'countries',
  'hours',
  'business',
  'partners',
  'distributors',
  'clubs',
  'resorts',
  'hotels',
  'events',
  'communities',
  'sports',
  'equipment',
  'supplier',
  'manufacturer',
  'wholesale',
  'shipping',
  'certified',
  'collection',
  'market',
  'units',
  'factory',
  'production',
  'quality',
  'custom',
  'boards',
  'paddlers',
  'paddling',
  'season',
  'ready',
  'launch',
  'talk',
  'let',
  'see',
  'request',
  'download',
  'start',
  'build',
  'brings',
  'bring',
  'life',
  'receive',
  'quote',
  'guide',
]);

// translatable string paths (regex on dotted path, arrays as [i])
const TRANS = [
  /^meta\.title$/,
  /^meta\.description$/,
  /^meta\.keywords\[\d+\]$/,
  /^hero\.tagline$/,
  /^hero\.title$/,
  /^hero\.subtitle$/,
  /^hero\.image\.alt$/,
  /^hero\.actions\[\d+\]\.text$/,
  /^stats\[\d+\]\.label$/,
  /^features\.title$/,
  /^features\.subtitle$/,
  /^features\.items\[\d+\]\.title$/,
  /^features\.items\[\d+\]\.description$/,
  /^table\.title$/,
  /^table\.subtitle$/,
  /^table\.caption$/,
  /^table\.head\[\d+\]$/,
  /^table\.rows\[\d+\]\[\d+\]$/,
  /^faqs\.title$/,
  /^faqs\.subtitle$/,
  /^faqs\.items\[\d+\]\.title$/,
  /^faqs\.items\[\d+\]\.description$/,
  /^geo\.tagline$/,
  /^geo\.sentence$/,
  /^geo\.audiences\[\d+\]$/,
  /^cta\.title$/,
  /^cta\.subtitle$/,
  /^cta\.actions\[\d+\]\.text$/,
];

function collect(node, p, out) {
  if (Array.isArray(node)) {
    node.forEach((v, i) => collect(v, p + '[' + i + ']', out));
  } else if (node && typeof node === 'object') {
    Object.keys(node).forEach((k) => collect(node[k], p + '.' + k, out));
  } else if (typeof node === 'string') {
    out.push([p, node]);
  }
  return out;
}

function keyTree(node, prefix, out) {
  if (Array.isArray(node)) {
    out.push(prefix + '#' + node.length);
    node.forEach((v, i) => keyTree(v, prefix + '/' + i, out));
  } else if (node && typeof node === 'object') {
    Object.keys(node)
      .sort()
      .forEach((k) => keyTree(node[k], prefix + '/' + k, out));
  } else {
    out.push(prefix);
  }
  return out;
}

let errors = 0;
let warnings = 0;
const enAll = {};
for (const page of PAGES) enAll[page] = yaml.load(fs.readFileSync(path.join(ROOT, page + '.yaml'), 'utf8'));

for (const loc of LOCALES) {
  for (const page of PAGES) {
    const tag = loc + '/' + page;
    const en = enAll[page];
    let tr;
    try {
      tr = yaml.load(fs.readFileSync(path.join(ROOT, loc, page + '.yaml'), 'utf8'));
    } catch (e) {
      console.log('FATAL ' + tag + ': ' + e.message.split('\n')[0]);
      errors++;
      continue;
    }

    // structure
    if (keyTree(en, '', []).join('|') !== keyTree(tr, '', []).join('|')) {
      console.log('STRUCT-DIFF ' + tag);
      errors++;
    }

    // {SITE}
    if (!String(tr.meta.title).includes('{SITE}')) {
      console.log('MISSING-SITE ' + tag);
      errors++;
    }

    // residue scan on translatable fields only
    for (const [p0, raw] of collect(tr, '', [])) {
      const p = p0.replace(/^\./, '');
      if (!TRANS.some((r) => r.test(p))) continue;
      const s = raw.replace(/\{SITE\}/g, ' ').replace(/<br\s*\/?>/gi, ' ');
      const tokens = s.match(/[A-Za-z][A-Za-z'’·-]*/g) || [];
      for (const t0 of tokens) {
        const t = t0.replace(/['’·-]+$/g, '');
        if (!t) continue;
        if (TECH.has(t0) || TECH.has(t)) continue;
        if (BORROWED.has(t0) || BORROWED.has(t) || BORROWED.has(t0.toLowerCase())) continue;
        if (LATIN.has(loc)) {
          if (EN_INDICATOR.has(t.toLowerCase()) || EN_INDICATOR.has(t)) {
            console.log('EN-RESIDUE ' + tag + ' ' + p + ': "' + t0 + '"  ctx: ' + s.slice(0, 90));
            errors++;
          }
        } else {
          // CJK/Cyrillic locales: any leftover ASCII word is suspect
          if (t.length >= 2) {
            console.log('EN-RESIDUE ' + tag + ' ' + p + ': "' + t0 + '"  ctx: ' + s.slice(0, 90));
            warnings++;
          }
        }
      }
    }
  }
}
console.log('---');
console.log('errors=' + errors + ' cjkCandidates=' + warnings);
process.exit(errors ? 1 : 0);
