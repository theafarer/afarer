const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const BASE = __dirname;
const REPO = 'E:/github/afarer';
const LOCALES = ['hr', 'hu', 'sk', 'bg', 'sl', 'sr', 'id', 'he', 'ms', 'lt', 'lv', 'et', 'tl'];

for (const lang of LOCALES) {
  const recs = [];
  for (let i = 0; i < 4; i++) {
    recs.push(...JSON.parse(fs.readFileSync(path.join(BASE, 'out', lang, 'g' + i + '.json'), 'utf8')));
  }
  if (recs.length !== 29) throw new Error(lang + ': expected 29 records, got ' + recs.length);
  const out = yaml.dump(recs, { lineWidth: -1, noRefs: true });
  fs.writeFileSync(path.join(REPO, 'src', 'data', 'guides-' + lang + '.yaml'), out, 'utf8');

  const varName = 'guides' + lang.charAt(0).toUpperCase() + lang.slice(1);
  const shim =
    "import yamlData from './guides-" +
    lang +
    ".yaml';\nimport type { GuideRecord } from './guides';\n\nexport const " +
    varName +
    ' = yamlData as GuideRecord[];\n';
  fs.writeFileSync(path.join(REPO, 'src', 'data', 'guides.' + lang + '.ts'), shim, 'utf8');
  console.log(lang + ': yaml ' + out.length + ' bytes, shim written');
}
console.log('DONE');
