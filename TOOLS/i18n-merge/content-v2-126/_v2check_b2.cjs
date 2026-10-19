const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');
const req = createRequire('E:\\github\\afarer\\node_modules\\js-yaml\\package.json');
const yaml = req('js-yaml');

const TMP = 'C:\\Users\\Helleo\\AppData\\Local\\Temp\\deveco';
const SITE = 'E:\\github\\afarer\\src\\data\\site';
const SLUGS = [
  'afarer-surfboard-pro',
  'afarer-wetsuit-pro',
  'why-afarer-exists',
  'ocean-safety-and-responsibility',
  'sup-size-guide',
  'beginner-sup-guide',
  'touring-sup-guide',
  'fishing-sup-guide',
  'yoga-sup-guide',
  'how-to-choose-inflatable-sup',
  'inflatable-sup-maintenance',
  'inflatable-sup-storage',
  'inflatable-sup-repair',
  'paddle-board-size-guide',
  'inflatable-boat-buying-guide',
  'pvc-vs-hypalon-boats',
];
const FAQN = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
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

let fails = 0;
const bad = (m) => {
  console.log('FAIL: ' + m);
  fails++;
};
const ok = (m) => console.log('ok: ' + m);

function checkLang(lang, parts) {
  console.log('=== ' + lang.toUpperCase() + ' ===');
  let all = [];
  for (const p of parts) {
    const raw = fs.readFileSync(path.join(TMP, p), 'utf8');
    const docs = yaml.load(raw);
    if (!Array.isArray(docs)) {
      bad(p + ' not an array');
      continue;
    }
    all = all.concat(docs);
  }
  if (all.length !== 16) bad(lang + ' record count ' + all.length + ' != 16');
  else ok(lang + ' 16 records total');
  all.forEach((r, i) => {
    if (r.slug !== SLUGS[i]) bad('#' + (i + 1) + ' slug mismatch: ' + r.slug + ' != ' + SLUGS[i]);
    if (typeof r.slug !== 'string' || r.slug.length < 3) bad('#' + (i + 1) + ' slug missing');
    for (const f of FIELDS) {
      if (f === 'slug' || f === 'faq') continue;
      if (typeof r[f] !== 'string' || r[f].length < 20) bad('#' + (i + 1) + ' field ' + f + ' missing/short');
    }
    if (!Array.isArray(r.faq)) {
      bad('#' + (i + 1) + ' faq not array');
      return;
    }
    if (r.faq.length !== FAQN[i]) bad('#' + (i + 1) + ' faq count ' + r.faq.length + ' != ' + FAQN[i]);
    r.faq.forEach((f, j) => {
      if (typeof f.q !== 'string' || typeof f.a !== 'string') bad('#' + (i + 1) + ' faq[' + j + '] missing q/a');
      if (f.q.length < 5 || f.a.length < 20) bad('#' + (i + 1) + ' faq[' + j + '] too short');
    });
  });
  ok(lang + ' structure checked');
  // residue checks across all string fields
  const texts = [];
  all.forEach((r) => {
    FIELDS.forEach((f) => texts.push(r[f]));
    r.faq.forEach((f) => texts.push(f.q, f.a));
  });
  const joined = texts.join('\n');
  const cjk = joined.match(/[\u4e00-\u9fff]/g);
  if (cjk) bad(lang + ' contains CJK: ' + cjk.slice(0, 20).join(''));
  else ok(lang + ' no CJK');
  // leftover common English words (whole words, brand/tech terms excluded by construction)
  const enWords = /\b(the|and you|your board|when you|with the|of the|for the|beginners should)\b/i;
  const hits = texts.filter((t) => enWords.test(t));
  if (hits.length) bad(lang + ' possible EN residue in ' + hits.length + ' fields, e.g.: ' + hits[0].slice(0, 80));
  else ok(lang + ' no obvious EN residue');
  // afarer brand check
  const lower = joined.toLowerCase();
  if (lower.includes('afarer ')) ok(lang + ' brand afarer present');
  else bad(lang + ' brand afarer missing');
}

checkLang('es', ['_v2es2_p1.yaml', '_v2es2_p2.yaml', '_v2es2_p3.yaml', '_v2es2_p4.yaml']);
checkLang('it', ['_v2it2_p1.yaml', '_v2it2_p2.yaml', '_v2it2_p3.yaml', '_v2it2_p4.yaml']);

console.log(fails === 0 ? 'ALL CHECKS PASSED' : fails + ' CHECKS FAILED');
process.exit(fails === 0 ? 0 : 1);
