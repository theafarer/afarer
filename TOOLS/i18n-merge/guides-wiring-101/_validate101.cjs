const fs = require('fs');

let fail = 0;
let pass = 0;
const bad = (m) => {
  console.log('FAIL ' + m);
  fail++;
};

// 1. SSOT: 3 difficulty keys + comparison category key x 21 locales
const j = JSON.parse(fs.readFileSync('E:/github/afarer/src/data/site/i18n-config.json', 'utf8'));
const locales = Object.keys(j);
if (locales.length !== 21) bad('locale count ' + locales.length);
else pass++;
const EN_VALUES = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  comparison: 'Comparisons',
};
const LEGIT_EN_SAME = { nl: ['Beginner'] }; // Dutch word "beginner" is standard
const CHECK_KEYS = [
  'guides.difficulty.beginner',
  'guides.difficulty.intermediate',
  'guides.difficulty.advanced',
  'guides.category.comparison',
];
for (const loc of locales) {
  for (const k of CHECK_KEYS) {
    const v = j[loc][k];
    const leaf = k.split('.').pop();
    if (typeof v !== 'string' || !v) bad(loc + '.' + k + ' missing');
    else if (loc !== 'en' && v === EN_VALUES[leaf] && !(LEGIT_EN_SAME[loc] || []).includes(v)) {
      bad(loc + '.' + k + ' equals EN (untranslated?)');
    }
  }
}
pass++;
console.log('SSOT difficulty + comparison keys: checked 21 locales x 4');

// 2. astro files: no FR maps / catNames remain; t() wiring present
const slugSrc = fs.readFileSync('E:/github/afarer/src/pages/[lang]/guides/[slug].astro', 'utf8');
const idxSrc = fs.readFileSync('E:/github/afarer/src/pages/[lang]/guides/index.astro', 'utf8');
for (const [name, src, banned, required] of [
  [
    '[slug].astro',
    slugSrc,
    ['FR_CATEGORY_LABELS', 'FR_DIFFICULTY_LABELS'],
    ["t('guides.category.'", "t('guides.difficulty.'"],
  ],
  [
    'index.astro',
    idxSrc,
    ['catNames', "fr('guides'", "fr('categories'", "fr('Read guide"],
    [
      "t('guides.category.'",
      "t('guides.difficulty.'",
      "t('guides.count')",
      "t('guides.categories')",
      "t('guides.readGuide')",
      "t('guides.pageLabel')}",
    ],
  ],
]) {
  for (const b of banned) if (src.includes(b)) bad(name + ' still contains banned "' + b + '"');
  for (const r of required) if (!src.includes(r)) bad(name + ' missing required "' + r + '"');
}
pass++;
console.log('astro wiring: checked');

// 3. metadata title uses pageLabel (index)
if (!idxSrc.includes("title: `${t('guides.pageLabel')} — ${SITE.name}`")) bad('index metadata title not wired');
else pass++;

console.log('---');
console.log('PASS=' + pass + ' FAIL=' + fail);
process.exit(fail ? 1 : 0);
