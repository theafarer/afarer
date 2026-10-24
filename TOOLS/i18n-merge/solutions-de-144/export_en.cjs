const fs = require('fs');
const path = 'E:/github/afarer/src/data/biz-solutions/index.ts';
const s = fs.readFileSync(path, 'utf8');
const start = s.indexOf('const solutions: BizSolution[] = ');
const literal = s.slice(s.indexOf('=', start) + 1, s.indexOf('\nexport default'));
const solutions = new Function('return ' + literal)();
console.log('total solutions:', solutions.length);
let totalBody = 0;
for (const sol of solutions) {
  const body = {
    clientType: sol.clientType,
    hero: sol.hero,
    challenge: sol.challenge,
    solutions: sol.solutions,
    caseStudy: sol.caseStudy,
    whyAfarer: sol.whyAfarer,
    faqs: sol.faqs,
    cta: sol.cta,
  };
  const size = JSON.stringify(body).length;
  totalBody += size;
  console.log(
    sol.slug.padEnd(50),
    String(size).padStart(7),
    'faqs:' + sol.faqs.length,
    'items:' + sol.solutions.items.length,
    'problems:' + sol.challenge.problems.length,
    'why:' + sol.whyAfarer.items.length,
    'moreCS:' + (sol.caseStudy.moreCaseStudies ? sol.caseStudy.moreCaseStudies.length : 0)
  );
}
console.log('TOTAL BODY JSON chars:', totalBody);
fs.writeFileSync(
  'C:/Users/Helleo/AppData/Local/Temp/deveco/de_sol_work/en_body.json',
  JSON.stringify(solutions, null, 2),
  'utf8'
);
console.log('wrote en_body.json');
