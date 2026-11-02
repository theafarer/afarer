const fs = require('fs');
const path = require('path');

const f = path.join('E:', 'github', 'afarer', 'src', 'data', 'biz-solutions', 'translations', 'he.ts');
const raw = fs.readFileSync(f, 'utf8');

const expectedSlugs = [
  'sup-brand-startup',
  'expand-outdoor-brand-water-sports',
  'inflatable-technology-for-surf-business',
  'ecommerce-sup-brand-development',
  'create-fishing-sup-brand',
  'sup-yoga-wellness-equipment',
  'creator-influencer-sup-brand',
  'commercial-sup-fleet',
  'durable-sup-rental-fleet',
  'resort-water-activity-package',
  'sup-academy-equipment-program',
  'luxury-portable-sup-package',
  'retail-private-label-program',
  'regional-oem-supply-chain-partner',
  'corporate-sup-event-package',
  'expand-your-water-sports-portfolio',
  'pet-friendly-paddle-board-program',
  'complete-beach-activity-equipment-solutions',
  'commercial-water-park-sup-fleet',
  'premium-custom-sup-collection',
  'destination-water-sports-package',
  'kids-exploration-sup-program',
  'professional-water-rescue-sup-system',
  'eco-research-monitoring-sup-platform',
];

let errors = [];
expectedSlugs.forEach((slug) => {
  if (raw.indexOf("'" + slug + "': {") < 0) errors.push('missing slug key: ' + slug);
});
const siteCount = (raw.match(/\{SITE\}/g) || []).length;
if (siteCount !== 30) errors.push('{SITE} count ' + siteCount + ' != 30 (EN baseline)');
if (!/export default he/.test(raw)) errors.push('missing export default he');
if (!/const he: Record<string, SolutionOverride>/.test(raw)) errors.push('missing typed const decl');

// stray char scan: bidi controls, Hebrew presentation forms, Cyrillic homoglyphs, CJK, FFFD, mojibake
const badRe = /[\u200E\u200F\u202A-\u202E\u2066-\u2069\uFB1D-\uFB4F\u0400-\u04FF\u4E00-\u9FFF\u3040-\u30FF\uFFFD]/;
const m = badRe.exec(raw);
if (m) {
  errors.push(
    'stray char U+' +
      m[0].codePointAt(0).toString(16) +
      ' at "' +
      raw.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\r?\n/g, ' ') +
      '"'
  );
}

console.log('he.ts: ' + (raw.length / 1024).toFixed(1) + ' KB, {SITE} count: ' + siteCount);
if (errors.length) {
  errors.forEach((e) => console.log('ERROR: ' + e));
  process.exit(1);
}
console.log('HE.TS VERIFIED');
