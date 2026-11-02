const fs = require('fs');
const path = require('path');
const yaml = require(path.join('E:\\github\\afarer', 'node_modules', 'js-yaml'));

const dir = __dirname;
const enPath = 'E:\\github\\afarer\\src\\data\\site\\content-v2.yaml';

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

let he = [];
const problems = [];
for (let i = 1; i <= 24; i++) {
  const name = 'c' + String(i).padStart(2, '0') + '_he.yaml';
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
  if (i < 24 && arr.length !== 3) problems.push(name + ': expected 3 articles, got ' + arr.length);
  if (i === 24 && arr.length !== 2) problems.push(name + ': expected 2 articles, got ' + arr.length);
  for (const art of arr) he.push(art);
}
console.log('HE articles merged:', he.length);

if (he.length !== enSlugs.length) problems.push('COUNT mismatch he=' + he.length + ' en=' + enSlugs.length);
for (let i = 0; i < Math.min(he.length, enSlugs.length); i++) {
  if (he[i].slug !== enSlugs[i]) {
    problems.push('SLUG ORDER at ' + i + ': he=' + he[i].slug + ' en=' + enSlugs[i]);
    break;
  }
}
const dup = he.length !== new Set(he.map((a) => a.slug)).size;
if (dup) problems.push('DUPLICATE slugs in HE');

const MOJIBAKE = /[\uFFFD]/;
const BIDI = /[\u200E\u200F\u202A-\u202E\u2066-\u2069]/;
const PRESFORM = /[\uFB1D-\uFB4F]/;
const HEBREW = /[\u0590-\u05FF]/;
for (const art of he) {
  const en = enBySlug.get(art.slug);
  if (!en) {
    problems.push('HE slug not in EN: ' + art.slug);
    continue;
  }
  for (const f of FIELDS) {
    if (art[f] === undefined || art[f] === null) {
      problems.push(art.slug + ': missing field ' + f);
      continue;
    }
  }
  for (const k of Object.keys(art)) if (!FIELDS.includes(k)) problems.push(art.slug + ': EXTRA field ' + k);
  for (const f of ['title', 'description', 'definition', 'tldr', 'problem', 'explanation', 'solution', 'recommendation']) {
    const val = String(art[f] || '');
    if (val.trim() === '') problems.push(art.slug + ': empty field ' + f);
    if (MOJIBAKE.test(val)) problems.push(art.slug + ': mojibake in ' + f);
    if (BIDI.test(val)) problems.push(art.slug + ': BIDI control char in ' + f);
    if (PRESFORM.test(val)) problems.push(art.slug + ': presentation form in ' + f);
  }
  if (!Array.isArray(art.faq) || !Array.isArray(en.faq)) {
    problems.push(art.slug + ': faq not array');
    continue;
  }
  if (art.faq.length !== en.faq.length)
    problems.push(art.slug + ': faq count he=' + art.faq.length + ' en=' + en.faq.length);
  for (const f of art.faq) {
    if (!f.q || !f.a) problems.push(art.slug + ': faq entry missing q/a');
    if (BIDI.test(String(f.q)) || BIDI.test(String(f.a))) problems.push(art.slug + ': BIDI in faq');
    if (PRESFORM.test(String(f.q)) || PRESFORM.test(String(f.a))) problems.push(art.slug + ': presentation form in faq');
  }
}

// Hebrew presence stats
let noHebrew = [];
for (const art of he) {
  const all = FIELDS.filter((f) => f !== 'slug')
    .map((f) => String(art[f] || ''))
    .join(' ');
  if (!HEBREW.test(all)) noHebrew.push(art.slug);
}

// EN leak scan on prose fields (review list)
const LEAK = /\b(the|and|with|for|your|you|when|how|what|that|this|from|not|are|will)\b/i;
const leaks = [];
for (const art of he) {
  for (const f of ['title', 'description', 'definition', 'tldr', 'problem', 'explanation', 'solution', 'recommendation']) {
    const val = String(art[f] || '');
    const m = val.match(LEAK);
    if (m)
      leaks.push(
        'LEAK? ' + art.slug + ' [' + f + ']: ...' + val.substring(Math.max(0, m.index - 25), m.index + 30) + '...'
      );
  }
  for (const fq of art.faq || []) {
    for (const f of ['q', 'a']) {
      const val = String(fq[f] || '');
      const m = val.match(LEAK);
      if (m)
        leaks.push(
          'LEAK? ' + art.slug + ' [faq.' + f + ']: ...' + val.substring(Math.max(0, m.index - 25), m.index + 30) + '...'
        );
    }
  }
}

console.log('---');
if (problems.length) {
  console.log('PROBLEMS (' + problems.length + '):');
  for (const p of problems) console.log(' -', p);
} else {
  console.log('ALL CHECKS PASS');
}
console.log('---');
console.log('Articles with zero Hebrew (' + noHebrew.length + '):', noHebrew.join(', '));
console.log('Possible EN leaks (' + leaks.length + '):');
for (const l of leaks) console.log(' -', l);
