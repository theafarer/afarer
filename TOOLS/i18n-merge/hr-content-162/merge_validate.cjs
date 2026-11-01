const fs = require('fs');
const path = require('path');
const yaml = require(path.join('E:\\github\\afarer', 'node_modules', 'js-yaml'));

const dir = __dirname;
const enPath = 'E:\\github\\afarer\\src\\data\\site\\content-v2.yaml';

// Load EN base for slug order + faq counts + field parity
const enRaw = fs.readFileSync(enPath, 'utf8');
const enDocs = yaml.load(enRaw);
const enArr = Array.isArray(enDocs) ? enDocs : enDocs.content || enDocs.articles || enDocs.entries;
if (!enArr) {
  console.error('Cannot find EN array. Top keys:', Object.keys(enDocs));
  process.exit(1);
}
console.log('EN articles:', enArr.length);

const enSlugs = enArr.map((a) => a.slug);
const enBySlug = new Map(enArr.map((a) => [a.slug, a]));

const FIELDS = [
  'slug',
  'title',
  'description',
  'definition',
  'tldr',
  'problem',
  'explanation',
  'solution',
  'recommendation',
  'faq',
];

let hr = [];
const problems = [];
for (let i = 1; i <= 24; i++) {
  const name = 'c' + String(i).padStart(2, '0') + '_hr.yaml';
  const p = path.join(dir, name);
  if (!fs.existsSync(p)) {
    problems.push('MISSING ' + name);
    continue;
  }
  let doc;
  try {
    doc = yaml.load(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    problems.push('YAML PARSE ' + name + ': ' + e.message);
    continue;
  }
  const arr = Array.isArray(doc) ? doc : (doc && doc.content) || [];
  if (arr.length !== 3) problems.push(name + ': expected 3 articles, got ' + arr.length);
  for (const art of arr) hr.push(art);
}
console.log('HR articles merged:', hr.length);

// slug parity in order
if (hr.length !== enSlugs.length) problems.push('COUNT mismatch hr=' + hr.length + ' en=' + enSlugs.length);
for (let i = 0; i < Math.min(hr.length, enSlugs.length); i++) {
  if (hr[i].slug !== enSlugs[i]) {
    problems.push('SLUG ORDER at ' + i + ': hr=' + hr[i].slug + ' en=' + enSlugs[i]);
    break;
  }
}
const dup = hr.length !== new Set(hr.map((a) => a.slug)).size;
if (dup) problems.push('DUPLICATE slugs in HR');

// field checks
const MOJIBAKE = /[\uFFFD\u00C2\u00C3\u00E2\u20AC\u0153]/;
const DIACRITICS = /[čćđšžČĆĐŠŽ]/;
const hrSlugSet = new Set(hr.map((a) => a.slug));
for (const art of hr) {
  const en = enBySlug.get(art.slug);
  if (!en) {
    problems.push('HR slug not in EN: ' + art.slug);
    continue;
  }
  for (const f of FIELDS) {
    if (art[f] === undefined || art[f] === null) {
      problems.push(art.slug + ': missing field ' + f);
      continue;
    }
    const val = String(art[f]);
    if (val.trim() === '') problems.push(art.slug + ': empty field ' + f);
    if (MOJIBAKE.test(val)) problems.push(art.slug + ': mojibake in ' + f);
  }
  // extra fields?
  for (const k of Object.keys(art)) if (!FIELDS.includes(k)) problems.push(art.slug + ': EXTRA field ' + k);
  // faq parity
  if (!Array.isArray(art.faq) || !Array.isArray(en.faq)) {
    problems.push(art.slug + ': faq not array');
    continue;
  }
  if (art.faq.length !== en.faq.length)
    problems.push(art.slug + ': faq count hr=' + art.faq.length + ' en=' + en.faq.length);
  for (const f of art.faq) {
    if (!f.q || !f.a) problems.push(art.slug + ': faq entry missing q/a');
  }
  // diacritics sanity per article (title should have some diacritics in most, not required)
}
// EN leakage quick scan on long prose fields (rough): common English stopword sequences unlikely in Croatian
const LEAK = /\b(the|and|with|for|your|you|when|how|what|that|this|from)\b/i;
for (const art of hr) {
  for (const f of ['title', 'description', 'tldr', 'problem', 'explanation', 'solution', 'recommendation']) {
    const val = String(art[f] || '');
    const m = val.match(LEAK);
    if (m)
      problems.push(
        'Possible EN leak ' +
          art.slug +
          ' [' +
          f +
          ']: ...' +
          val.substring(Math.max(0, m.index - 25), m.index + 30) +
          '...'
      );
  }
  for (const fq of art.faq || []) {
    for (const f of ['q', 'a']) {
      const val = String(fq[f] || '');
      const m = val.match(LEAK);
      if (m)
        problems.push(
          'Possible EN leak ' +
            art.slug +
            ' [faq.' +
            f +
            ']: ...' +
            val.substring(Math.max(0, m.index - 25), m.index + 30) +
            '...'
        );
    }
  }
}

// diacritics presence stats
let noDiac = [];
for (const art of hr) {
  const all = FIELDS.map((f) => String(art[f] || '')).join(' ');
  if (!DIACRITICS.test(all)) noDiac.push(art.slug);
}

console.log('---');
if (problems.length) {
  console.log('PROBLEMS (' + problems.length + '):');
  for (const p of problems) console.log(' -', p);
} else {
  console.log('ALL CHECKS PASS');
}
console.log('---');
console.log('Articles with zero diacritics (' + noDiac.length + '):', noDiac.join(', '));
