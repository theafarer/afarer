const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const langs = yaml.load(fs.readFileSync('E:/github/afarer/src/data/site/languages.yaml', 'utf8'));
const hr = langs.find((l) => l.locale === 'hr');
console.log('hr in languages.yaml:', JSON.stringify(hr));
const pc = JSON.parse(fs.readFileSync('E:/github/afarer/src/i18n/generated/page-content.json', 'utf8'));
const keys = [
  'hr/site-use-cases',
  'hr/site-tech-cards',
  'hr/site-testimonials',
  'hr/site-learning-center',
  'hr/site-trust-badges',
];
for (const k of keys) console.log(k, '=>', pc[k] ? 'PRESENT' : 'MISSING');
if (pc['hr/site-use-cases']) {
  const s = JSON.stringify(pc['hr/site-use-cases']);
  console.log('use-cases hr sample has diacritics:', /[\u0100-\u017E]/.test(s));
}
