const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const files = ['tech-cards', 'testimonials', 'trust-badges', 'use-cases', 'learning-center'];
for (const f of files) {
  const d = yaml.load(fs.readFileSync('E:/github/afarer/src/data/site/' + f + '.hr.yaml', 'utf8'));
  const s = JSON.stringify(d);
  const m = s.match(/[\u0100-\u017E][^"]{15,60}/);
  console.log(f + ': ' + (m ? m[0] : '(no diacritic string)'));
}
