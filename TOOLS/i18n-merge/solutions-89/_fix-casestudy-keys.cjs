const fs = require('fs');

const P = 'src/data/site/i18n-config.json';
const j = JSON.parse(fs.readFileSync(P, 'utf8'));

const FIX = {
  it: { 'solutions.caseStudy': 'Caso di Studio', 'solutions.caseStudies': 'Casi di Studio' },
  nl: { 'solutions.caseStudy': 'Casestudy', 'solutions.caseStudies': 'Casestudies' },
  sv: { 'solutions.caseStudy': 'Kundcase', 'solutions.caseStudies': 'Kundcase' },
  no: { 'solutions.caseStudy': 'Kundecase', 'solutions.caseStudies': 'Kundecase' },
  da: { 'solutions.caseStudy': 'Kundecase', 'solutions.caseStudies': 'Kundecase' },
};

let n = 0;
for (const [l, kv] of Object.entries(FIX)) {
  for (const [k, v] of Object.entries(kv)) {
    j[l][k] = v;
    n++;
  }
}
fs.writeFileSync(P, JSON.stringify(j, null, 2) + '\n');
console.log('fixed ' + n + ' keys');
