const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const WORK = 'C:/Users/Helleo/AppData/Local/Temp/deveco/es_sol_work';
const en = JSON.parse(fs.readFileSync(WORK + '/en_body.json', 'utf8'));
const outDir = WORK + '/en_parts';
fs.mkdirSync(outDir, { recursive: true });
en.forEach((sol, i) => {
  const body = {
    clientType: sol.clientType,
    hero: sol.hero,
    challenge: sol.challenge,
    solutions: sol.solutions,
    caseStudy: sol.caseStudy,
    whyAfarer: sol.whyAfarer,
    faqs: sol.faqs,
    cta: {
      title: sol.cta.title,
      subtitle: sol.cta.subtitle,
      primaryAction: { text: sol.cta.primaryAction.text },
      secondaryAction: sol.cta.secondaryAction ? { text: sol.cta.secondaryAction.text } : undefined,
    },
  };
  const name = String(i + 1).padStart(2, '0') + '_' + sol.slug + '.yaml';
  fs.writeFileSync(outDir + '/' + name, yaml.dump(body, { lineWidth: -1, noRefs: true }), 'utf8');
});
console.log('wrote', en.length, 'EN part files');
