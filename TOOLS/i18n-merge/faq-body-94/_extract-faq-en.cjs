// Extract EN faq records from src/data/faq.ts into a clean JSON draft source. Handles ' and " string delimiters.
const fs = require('fs');
const src = fs.readFileSync('E:/github/afarer/src/data/faq.ts', 'utf8');

const SQ = String.raw`'((?:[^'\\]|\\.)*)'`;
const DQ = String.raw`"((?:[^"\\]|\\.)*)"`;
const STR = `(?:${SQ}|${DQ})`;
const re = new RegExp(
  `\\{\\s*id:\\s*(?:${SQ}|${DQ}),\\s*question:\\s*(?:${SQ}|${DQ}),\\s*answer:\\s*\\n?\\s*(?:${SQ}|${DQ}),\\s*category:\\s*(?:${SQ}|${DQ}),\\s*relatedProducts:\\s*\\[([^\\]]*)\\],\\s*relatedGuides:\\s*\\[([^\\]]*)\\],?\\s*\\}`,
  'g',
);
const records = [];
let m;
while ((m = re.exec(src)) !== null) {
  const unq = (s) => (s === undefined ? '' : s.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, '\n'));
  records.push({
    id: unq(m[1] !== undefined ? m[1] : m[2]),
    question: unq(m[3] !== undefined ? m[3] : m[4]),
    answer: unq(m[5] !== undefined ? m[5] : m[6]),
    category: unq(m[7] !== undefined ? m[7] : m[8]),
    relatedProducts: m[9].replace(/['"]/g, '').split(',').map((s) => s.trim()).filter(Boolean),
    relatedGuides: m[10].replace(/['"]/g, '').split(',').map((s) => s.trim()).filter(Boolean),
  });
}
console.log('records:', records.length);
const ids = records.map((r) => r.id);
const dup = ids.filter((i, k) => ids.indexOf(i) !== k);
console.log('duplicate ids:', JSON.stringify(dup));
fs.writeFileSync('C:/Users/Helleo/AppData/Local/Temp/deveco/_faq-en.json', JSON.stringify(records, null, 2) + '\n');

// id parity check vs faq-de.yaml / faq-fr.yaml
for (const l of ['de', 'fr']) {
  const y = fs.readFileSync(`E:/github/afarer/src/data/faq-${l}.yaml`, 'utf8');
  const yIds = [...y.matchAll(/^\s*- id:\s*(\S+)/gm)].map((x) => x[1]);
  const missingInY = ids.filter((i) => !yIds.includes(i));
  const extraInY = yIds.filter((i) => !ids.includes(i));
  console.log(`${l}: yaml ids=${yIds.length} missingInYaml=${JSON.stringify(missingInY)} extraInYaml=${JSON.stringify(extraInY)}`);
}
