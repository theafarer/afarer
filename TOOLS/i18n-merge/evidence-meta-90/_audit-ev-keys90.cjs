const fs = require('fs');
const j = JSON.parse(fs.readFileSync('E:/github/afarer/src/data/site/i18n-config.json', 'utf8'));
const locales = Object.keys(j); // en first
const KEYS = [
  'home.evidence.title',
  'home.evidence.caseStudies',
  'home.evidence.subtitle',
  'home.evidence.description',
  'home.evidence.viewCaseStudy',
  'home.evidence.ctaTitle',
  'home.evidence.ctaSubtitle',
  'home.evidence.ctaButton',
  'evidence.beforeAfter',
  'evidence.before',
  'evidence.after',
  'evidence.video',
  'evidence.result',
  'evidence.keyCapabilities',
  'evidence.back',
  'v2.problem',
  'v2.solution',
];
console.log('locale  missing-keys  en-leaks');
for (const l of locales) {
  const missing = KEYS.filter((k) => j[l][k] === undefined);
  const leaks = KEYS.filter((k) => j[l][k] !== undefined && l !== 'en' && j[l][k] === j.en[k]);
  console.log(
    l.padEnd(7) +
      ' ' +
      String(missing.length).padStart(13) +
      '  ' +
      String(leaks.length).padStart(8) +
      (missing.length ? '  MISSING: ' + missing.join(',') : '') +
      (leaks.length ? '  LEAK: ' + leaks.map((k) => k + '=' + JSON.stringify(j[l][k])).join(' | ') : '')
  );
}
