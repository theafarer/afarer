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
const LOCALES = ['de'];
const LATIN = new Set(['de']); // EN_INDICATOR route

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
]);

// whitelisted Latin loanwords (standard German usage, Duden)
const COMMON = new Set([
  'Co-Brand',
  'Co-Branded',
  'Co-Branding',
  'co-brand',
  'co-branded',
  'co-branding',
  'Project',
  'Agreement',
  'Pack',
  'paddle',
  'Paddle',
  'paddleboard',
  'paddles',
  'Paddles',
  'board',
  'Board',
  'boards',
  'brief',
  'naming',
  'media',
  'online',
  'premium',
  'design',
  'drop-stitch',
  'standard',
  'concept',
  'Pilot',
  'pilot',
  'brand',
  'brands',
  'club',
  'clubs',
  'resort',
  'resorts',
  'partner',
  'partners',
  'tender',
  'start',
  'guide',
  'download',
  'community',
  'communities',
  'event',
  'events',
  'hotel',
  'hotels',
  'marketing',
  'test',
  'tests',
  'float',
  'floats',
  'update',
]);

// per-locale extra loanwords (verified usage in the 100 files)
const EXTRA = {
  de: new Set(['Briefing', 'Compliance', 'Go-to-Market', 'Floats']),
};

// English indicator words for de (German vocabulary does NOT include these).
// Removed vs 99: was (German "was" = what), will (German "will" = want to),
// communities/events/hotels (standard German loanwords), test/tests (German Test).
const EN_INDICATOR = new Set([
  'the',
  'and',
  'with',
  'your',
  'from',
  'our',
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
  'weeks',
  'days',
  'countries',
  'hours',
  'business',
  'distributors',
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
  'fleet',
  'fleets',
  'water',
]);

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

    if (keyTree(en, '', []).join('|') !== keyTree(tr, '', []).join('|')) {
      console.log('STRUCT-DIFF ' + tag);
      errors++;
    }

    if (!String(tr.meta.title).includes('{SITE}')) {
      console.log('MISSING-SITE ' + tag);
      errors++;
    }

    const extra = EXTRA[loc] || new Set();
    for (const [p0, raw] of collect(tr, '', [])) {
      const p = p0.replace(/^\./, '');
      if (!TRANS.some((r) => r.test(p))) continue;
      const s = raw
        .replace(/\{SITE\}/g, ' ')
        .replace(/<br\s*\/?>/gi, ' ')
        .replace(/m²/g, ' ')
        .replace(/\b(B2B|3D|2D|R&D)\b/g, ' ');
      const tokens = s.match(/[A-Za-z][A-Za-z'’·-]*/g) || [];
      for (const t0 of tokens) {
        const t = t0.replace(/['’·-]+$/g, '');
        if (!t) continue;
        if (TECH.has(t0) || TECH.has(t)) continue;
        if (COMMON.has(t0) || COMMON.has(t)) continue;
        if (extra.has(t0) || extra.has(t)) continue;
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
