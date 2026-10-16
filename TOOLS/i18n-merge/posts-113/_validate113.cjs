#!/usr/bin/env node
/**
 * _validate113.cjs — shard 113 posts body batch 3 (pt + ar)
 *
 * 1. EN sources = src/content/news/*.mdx (19 posts). Locale MDX = src/content/news/<loc>/<slug>.mdx.
 * 2. Frontmatter invariants equal to EN: publishDate, image, tags, category, author.
 * 3. Translated: title, excerpt, metadata.title, metadata.description, body — non-empty, != EN.
 * 4. EN-leak scan (LATIN route, pt/ar): tokens hit EN_INDICATOR wordlist = residue.
 * 5. File set: locale dir holds exactly the 19 EN slugs, no extras.
 *
 * Usage (repo root): node TOOLS/i18n-merge/posts-113/_validate113.cjs [locales]   (default "pt,ar")
 */
const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const ROOT = 'E:/github/afarer';
const LOCALES = (process.argv[2] || 'pt,ar').split(',');
const EN_DIR = path.join(ROOT, 'src/content/news');

// English indicator words for Latin locales — Portuguese/Arabic vocabulary does NOT include these.
const EN_INDICATOR = new Set([
  'the',
  'and',
  'with',
  'your',
  'from',
  'our',
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
  'weeks',
  'days',
  'hours',
  'countries',
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
  'events',
  'hotels',
  'water',
  'test',
  'tests',
  'board',
  'boards',
  'paddle',
  'paddles',
  'paddling',
  'paddler',
  'paddlers',
  'inflatable',
  'whitewater',
  'beginner',
  'intermediate',
  'advanced',
]);

// technical / kept-as-is terms that may legitimately appear inside pt/ar prose
const TECH = new Set([
  'SUP',
  'PVC',
  'PSI',
  'CE',
  'USCG',
  'UV',
  'GPS',
  'VHF',
  'EVA',
  'EPS',
  'OEM',
  'ODM',
  'MOQ',
  'Afarer',
  'HH',
  'Clifton',
  'drop-stitch',
  'O-ring',
  'cross-bow',
]);

// per-locale allowed loanwords (CASE-SENSITIVE — sentence-initial capitalized forms FAIL)
// pt: Portuguese borrows 'paddle' (stand-up paddle); 'Paddle' only inside the proper noun
//     Lake Tahoe Paddle Club; 'Life' only inside product names (Life Vest Pro/Classic);
//     'Water' only inside the proper noun US Water Rescue Association.
// ar: 'Paddle' only inside Lake Tahoe Paddle Club; 'Life' only inside product names;
//     'Water' only inside US Water Rescue Association.
const ALLOW = {
  pt: new Set(['paddle', 'Paddle', 'Life', 'Water']),
  ar: new Set(['Paddle', 'Life', 'Water']),
};

function parseMdx(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) throw new Error('frontmatter not found in ' + file);
  return { data: yaml.load(m[1]), body: m[2].trim() };
}

let errors = 0;
const bad = (m) => {
  console.log('FAIL ' + m);
  errors++;
};

const slugs = fs
  .readdirSync(EN_DIR)
  .filter((f) => f.endsWith('.mdx'))
  .map((f) => f.slice(0, -4))
  .sort();
console.log('EN posts: ' + slugs.length);

const TRANS_FIELDS = ['title', 'excerpt', 'metadata.title', 'metadata.description', 'body'];

for (const loc of LOCALES) {
  const dir = path.join(EN_DIR, loc);
  if (!fs.existsSync(dir)) {
    bad(loc + ': directory missing ' + dir);
    continue;
  }
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.slice(0, -4))
    .sort();
  if (files.join('|') !== slugs.join('|')) {
    bad(
      loc +
        ': file set mismatch — missing: [' +
        slugs.filter((s) => !files.includes(s)).join(',') +
        '] extra: [' +
        files.filter((s) => !slugs.includes(s)).join(',') +
        ']'
    );
  }

  for (const slug of slugs) {
    const f = path.join(dir, slug + '.mdx');
    if (!fs.existsSync(f)) {
      bad(loc + '/' + slug + ': file missing');
      continue;
    }
    const tag = loc + '/' + slug;
    let en, tr;
    try {
      en = parseMdx(path.join(EN_DIR, slug + '.mdx'));
      tr = parseMdx(f);
    } catch (e) {
      bad(tag + ': parse error: ' + e.message.split('\n')[0]);
      continue;
    }

    // frontmatter invariants
    const inv = ['publishDate', 'image', 'category', 'author'];
    for (const k of inv) {
      if (String(tr.data[k]) !== String(en.data[k]))
        bad(tag + ' ' + k + ' mismatch: "' + tr.data[k] + '" != EN "' + en.data[k] + '"');
    }
    if ((tr.data.tags || []).join('|') !== (en.data.tags || []).join('|')) bad(tag + ' tags mismatch');
    const enMeta = en.data.metadata || {};
    const trMeta = tr.data.metadata || {};
    if (Object.keys(enMeta).sort().join('|') !== Object.keys(trMeta).sort().join('|'))
      bad(tag + ' metadata key set mismatch');

    // translated fields
    const fields = [
      ['title', tr.data.title, en.data.title],
      ['excerpt', tr.data.excerpt, en.data.excerpt],
      ['metadata.title', trMeta.title, enMeta.title],
      ['metadata.description', trMeta.description, enMeta.description],
      ['body', tr.body, en.body],
    ];
    for (const [p, v, ev] of fields) {
      if (typeof v !== 'string' || !v.trim()) bad(tag + ' ' + p + ' empty');
      else if (v.trim() === (ev || '').trim()) bad(tag + ' ' + p + ' identical to EN');
    }

    // EN-leak scan over translated strings
    for (const [p, raw] of fields) {
      if (typeof raw !== 'string') continue;
      const tokens = raw.match(/[A-Za-z][A-Za-z'’·-]*/g) || [];
      for (const t0 of tokens) {
        const t1 = t0.replace(/['’·-]+$/g, '');
        if (!t1) continue;
        if (TECH.has(t0) || TECH.has(t1)) continue;
        if ((ALLOW[loc] || new Set()).has(t1) || (ALLOW[loc] || new Set()).has(t0)) continue;
        if (EN_INDICATOR.has(t1.toLowerCase()) || EN_INDICATOR.has(t1)) {
          bad(tag + ' ' + p + ' EN-RESIDUE "' + t0 + '"  ctx: ' + raw.slice(0, 90));
        }
      }
    }
  }
  console.log(loc + ': checked ' + files.length + ' files');
}

console.log('---');
console.log('errors=' + errors);
process.exit(errors ? 1 : 0);
