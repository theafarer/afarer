const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, 'out');
const en = JSON.parse(fs.readFileSync(path.join(OUT, 'en_source.json'), 'utf8'));

const cases = {
  hr: [
    'research.description',
    'learn.sup.articles.0.title',
    'learn.sup.articles.5.desc',
    'learn.water-safety.description',
    'learn.sup-basics.title',
    'learn.safety-in-water-sports.description',
  ],
  hu: [
    'about.philosophy.cards.1.description',
    'about.design.stats.0.label',
    'about.design.stats.1.label',
    'evidence.certifications.3.desc',
    'evidence.spec_sheets.0.name',
    'learn.sup.articles.4.title',
    'learn.water-safety.description',
    'learn.water-safety.articles.1.title',
    'learn.water-safety.articles.1.desc',
    'learn.intermediate-techniques.title',
    'learn.safety-in-water-sports.description',
  ],
  bg: ['evidence.certifications.1.body'],
  sr: [
    'research.description',
    'evidence.certifications.1.body',
    'learn.sup.articles.5.desc',
    'learn.water-safety.description',
    'learn.intermediate-techniques.title',
    'learn.safety-in-water-sports.description',
  ],
  he: [
    'evidence.certifications.1.body',
    'learn.sup.articles.0.title',
    'learn.sup.articles.1.title',
    'learn.water-safety.articles.1.title',
    'learn.water-safety.articles.1.desc',
    'learn.water-safety.articles.2.title',
    'learn.sup-basics.title',
    'learn.materials.title',
    'learn.misc.trustDesc',
  ],
  et: [
    'about.design.paragraphs.1',
    'about.design.stats.1.label',
    'research.description',
    'evidence.certifications.3.desc',
    'evidence.spec_sheets.0.name',
    'evidence.deployment_photos.0.caption',
    'learn.sup.title',
    'learn.sup.description',
    'learn.sup.articles.0.title',
    'learn.sup.articles.1.title',
    'learn.sup.articles.4.title',
    'learn.water-safety.description',
    'learn.water-safety.articles.1.title',
    'learn.water-safety.articles.2.title',
    'learn.sup-basics.title',
    'learn.inflatable-technology.title',
    'learn.materials.title',
    'learn.materials.description',
    'learn.intermediate-techniques.title',
    'learn.sup-size-guide.title',
    'learn.misc.trustDesc',
  ],
};

for (const [loc, keys] of Object.entries(cases)) {
  const d = JSON.parse(fs.readFileSync(path.join(OUT, loc + '.json'), 'utf8'));
  console.log('===== ' + loc + ' =====');
  for (const k of keys) {
    console.log('-- ' + k);
    console.log('   EN: ' + en[k]);
    console.log('   ' + loc.toUpperCase() + ': ' + d[k]);
  }
}
