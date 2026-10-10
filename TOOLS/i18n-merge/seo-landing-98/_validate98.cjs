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
const LOCALES = ['cs', 'da', 'nl', 'no', 'pl', 'sv'];
const LATIN = new Set(['cs', 'da', 'nl', 'no', 'pl', 'sv']);

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
// borrowed business/marketing terms used as-is per repo precedent,
// plus words that are valid vocabulary in cs/da/nl/no/pl/sv (no false positives)
const BORROWED = new Set([
  'private',
  'label',
  'trading',
  'company',
  'Pack',
  'Project',
  'Agreement',
  'paddle',
  'paddleboard',
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
  'per',
  'via',
  // valid in da/no (conjunction/preposition), nl/sv common usage
  'for',
  'over',
  // valid words in the six target locales (da/nl/no/sv/slavic borrowings)
  'start',
  'guide',
  'download',
  'water',
  'partners',
  'boards',
  'events',
  'hotels',
  // da marketing loanword — standard Danish business usage
  'brand',
  'brands',
]);

// English indicator words: function/content words that are NOT valid cs/da/nl/no/pl/sv vocabulary.
const EN_INDICATOR = new Set([
  'the',
  'and',
  'with',
  'your',
  'from',
  'our',
  'are',
  'was',
  'were',
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
  'about',
  'after',
  'before',
  'through',
  'between',
  'brand',
  'weeks',
  'days',
  'countries',
  'hours',
  'business',
  'distributors',
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
  'paddlers',
  'paddling',
  'season',
  'ready',
  'launch',
  'talk',
  'see',
  'request',
  'build',
  'brings',
  'bring',
  'life',
  'receive',
  'quote',
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
        }
      }
    }
  }
}
console.log('---');
console.log('errors=' + errors);
process.exit(errors ? 1 : 0);
