const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const SRC = 'E:/github/afarer/src/data/biz-solutions/index.ts';
const OUT_DIR = path.join(__dirname, 'en_parts');
fs.mkdirSync(OUT_DIR, { recursive: true });

let src = fs.readFileSync(SRC, 'utf8');
// cut everything from the translations import onward
const cutIdx = src.indexOf("import { solutionTranslations } from './translations';");
if (cutIdx < 0) throw new Error('tail marker not found');
let js = src.slice(0, cutIdx);
// strip types/interfaces, keep the array literal
const arrStart = js.indexOf('const solutions: BizSolution[] = ');
if (arrStart < 0) throw new Error('array marker not found');
js = js.slice(arrStart).replace('const solutions: BizSolution[] =', 'const solutions =');
js = js.replace(/export default solutions;/, '');
const solutions = new Function(js + '\nreturn solutions;')();
console.log('EN solutions:', solutions.length);

const slugs = solutions.map((s) => s.slug);
console.log('slugs:', slugs.join(', '));
let totalLines = 0;
solutions.forEach((s, i) => {
  const { slug, ...rest } = s;
  const out = yaml.dump(rest, { lineWidth: -1, noRefs: true, quotingType: "'" });
  const name = String(i + 1).padStart(2, '0') + '_' + slug + '.yaml';
  fs.writeFileSync(path.join(OUT_DIR, name), out, 'utf8');
  totalLines += out.split('\n').length;
});
console.log('wrote', solutions.length, 'files, total', totalLines, 'lines');
