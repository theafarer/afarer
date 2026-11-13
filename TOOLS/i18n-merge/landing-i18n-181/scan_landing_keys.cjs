const fs = require('fs');
const path = require('path');
const dir = 'E:/github/afarer/src/data/landing-i18n';
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json'));
let html = 0,
  md = 0,
  ph = 0,
  total = 0,
  longK = 0;
const htmlSamples = [],
  mdSamples = [],
  phSamples = [];
for (const f of files) {
  const j = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  for (const l of Object.keys(j)) {
    for (const k of Object.keys(j[l])) {
      total++;
      if (/<[a-zA-Z][^>]*>/.test(k)) {
        html++;
        if (htmlSamples.length < 5) htmlSamples.push(f + ' :: ' + k.slice(0, 90));
      }
      if (/\*\*|\[[^\]]+\]\(/.test(k)) {
        md++;
        if (mdSamples.length < 5) mdSamples.push(f + ' :: ' + k.slice(0, 90));
      }
      if (/\{\d?\}|%s|%\d\$s|\{\{/.test(k)) {
        ph++;
        if (phSamples.length < 5) phSamples.push(f + ' :: ' + k.slice(0, 90));
      }
      if (k.length > 300) longK++;
    }
  }
}
console.log(
  'total key-locale pairs:',
  total,
  '| html:',
  html,
  '| md:',
  md,
  '| placeholders:',
  ph,
  '| keys>300chars:',
  longK
);
console.log('HTML samples:');
htmlSamples.forEach((s) => console.log('  ' + s));
console.log('MD samples:');
mdSamples.forEach((s) => console.log('  ' + s));
console.log('PH samples:');
phSamples.forEach((s) => console.log('  ' + s));
