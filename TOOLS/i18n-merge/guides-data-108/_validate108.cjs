#!/usr/bin/env node
/**
 * _validate108.cjs — shard 108 guides data batch 7 (ar + el)
 *
 * 1. EN source loaded from src/data/guides.ts (data-literal slice + eval);
 *    ar/el loaded from src/data/guides-{ar,el}.yaml (js-yaml).
 * 2. Structure: 29 records, slug order, per-record keyTree equality with EN
 *    (14 GuideRecord fields; steps/faq array counts; relatedProducts/relatedGuides/waterType).
 * 3. Invariants: slug/category/difficulty/relatedProducts/relatedGuides/waterType equal to EN.
 * 4. Translation: title/description/tldr/problem/solution/audience/steps/faq non-empty and
 *    not identical to EN.
 * 5. EN-leak scan (LATIN route, ar/el): tokens hit EN_INDICATOR wordlist = residue.
 *
 * Usage (repo root): node TOOLS/i18n-merge/guides-data-108/_validate108.cjs [locales]   (default "ar,el")
 */
const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const ROOT = 'E:/github/afarer';
const LOCALES = (process.argv[2] || 'ar,el').split(',');
const EXPECTED_COUNT = 29;

// English indicator words for Latin locales — ar/el vocabulary does NOT include these.
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
  // guides-dataset specific
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

// technical / kept-as-is terms that may legitimately appear inside ar/el prose
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
// ar: Arabic uses لوح/مجداف/تجديف (anchor: faq-ar.yaml) — Arabic prose; Latin tokens limited to TECH terms.
// el: Greek uses σανίδα/κουπί/κωπηλασία (anchor: faq-el.yaml) — Greek prose; Latin tokens limited to TECH terms.
const ALLOW = {
  ar: new Set([]),
  el: new Set([]),
};

function loadEn() {
  const ts = fs.readFileSync(path.join(ROOT, 'src/data/guides.ts'), 'utf8');
  const marker = 'export const guides: GuideRecord[] =';
  const at = ts.indexOf(marker);
  if (at < 0) throw new Error('guides.ts marker not found');
  const body = ts
    .slice(at + marker.length)
    .trim()
    .replace(/;$/, '');
  const guides = new Function('return ' + body)();
  if (!Array.isArray(guides)) throw new Error('EN guides is not an array');
  return guides;
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

const TRANS_FIELDS = ['title', 'description', 'tldr', 'problem', 'solution', 'audience'];

let errors = 0;
const bad = (m) => {
  console.log('FAIL ' + m);
  errors++;
};

const en = loadEn();
if (en.length !== EXPECTED_COUNT) bad('EN count ' + en.length + ' != ' + EXPECTED_COUNT);

for (const loc of LOCALES) {
  const file = path.join(ROOT, 'src/data/guides-' + loc + '.yaml');
  let tr;
  try {
    tr = yaml.load(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    bad(loc + ': YAML parse error: ' + e.message.split('\n')[0]);
    continue;
  }
  if (!Array.isArray(tr) || tr.length !== EXPECTED_COUNT) {
    bad(loc + ': record count ' + (Array.isArray(tr) ? tr.length : typeof tr) + ' != ' + EXPECTED_COUNT);
    continue;
  }

  for (let i = 0; i < en.length; i++) {
    const tag = loc + '[' + i + ' ' + en[i].slug + ']';
    const e = en[i];
    const t = tr[i];

    if (t.slug !== e.slug) bad(tag + ' slug ' + t.slug + ' != EN ' + e.slug);
    if (t.category !== e.category) bad(tag + ' category mismatch');
    if (t.difficulty !== e.difficulty) bad(tag + ' difficulty mismatch');
    if ((t.relatedProducts || []).join('|') !== e.relatedProducts.join('|')) bad(tag + ' relatedProducts mismatch');
    if ((t.relatedGuides || []).join('|') !== e.relatedGuides.join('|')) bad(tag + ' relatedGuides mismatch');
    if ((t.waterType || []).join('|') !== e.waterType.join('|')) bad(tag + ' waterType mismatch');

    const eTree = keyTree(e, '', []).join('|');
    const tTree = keyTree(t, '', []).join('|');
    if (eTree !== tTree) {
      bad(
        tag +
          ' STRUCT-DIFF (steps=' +
          (t.steps || []).length +
          '/' +
          e.steps.length +
          ' faq=' +
          (t.faq || []).length +
          '/' +
          e.faq.length +
          ')'
      );
    }

    for (const f of TRANS_FIELDS) {
      const tv = t[f];
      if (typeof tv !== 'string' || !tv.trim()) bad(tag + '.' + f + ' empty');
      else if (tv === e[f]) bad(tag + '.' + f + ' identical to EN');
    }
    (e.steps || []).forEach((_, si) => {
      const sv = (t.steps || [])[si];
      if (typeof sv !== 'string' || !sv.trim()) bad(tag + '.steps[' + si + '] empty');
      else if (sv === e.steps[si]) bad(tag + '.steps[' + si + '] identical to EN');
    });
    (e.faq || []).forEach((ef, fi) => {
      const tf = (t.faq || [])[fi] || {};
      if (typeof tf.q !== 'string' || !tf.q.trim() || tf.q === ef.q) bad(tag + '.faq[' + fi + '].q bad/untranslated');
      if (typeof tf.a !== 'string' || !tf.a.trim() || tf.a === ef.a) bad(tag + '.faq[' + fi + '].a bad/untranslated');
    });

    // EN-leak scan over every translated string
    const strings = []
      .concat(TRANS_FIELDS.map((f) => [f, t[f]]))
      .concat((t.steps || []).map((s, si) => ['steps[' + si + ']', s]))
      .concat((t.faq || []).map((f, fi) => ['faq[' + fi + '].q', f.q]))
      .concat((t.faq || []).map((f, fi) => ['faq[' + fi + '].a', f.a]));
    for (const [p, raw] of strings) {
      if (typeof raw !== 'string') continue;
      const tokens = raw.match(/[A-Za-z][A-Za-z'’·-]*/g) || [];
      for (const t0 of tokens) {
        const t1 = t0.replace(/['’·-]+$/g, '');
        if (!t1) continue;
        if (TECH.has(t0) || TECH.has(t1)) continue;
        if ((ALLOW[loc] || new Set()).has(t1)) continue;
        if (EN_INDICATOR.has(t1.toLowerCase()) || EN_INDICATOR.has(t1)) {
          bad(tag + ' ' + p + ' EN-RESIDUE "' + t0 + '"  ctx: ' + raw.slice(0, 90));
        }
      }
    }
  }
  console.log(loc + ': checked ' + tr.length + ' records');
}

console.log('---');
console.log('errors=' + errors);
process.exit(errors ? 1 : 0);
