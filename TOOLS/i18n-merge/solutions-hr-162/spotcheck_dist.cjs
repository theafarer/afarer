const fs = require('fs');
const slugs = [
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
let fail = 0;
for (const s of slugs) {
  const p = 'E:/github/afarer/dist/hr/solutions/' + s + '/index.html';
  if (!fs.existsSync(p)) {
    console.log(s + ': MISSING');
    fail++;
    continue;
  }
  const h = fs.readFileSync(p, 'utf8');
  const t = /<title>([^<]*)<\/title>/.exec(h);
  const title = t ? t[1] : 'none';
  const issues = [];
  if (h.indexOf('{SITE}') >= 0) issues.push('{SITE} leak');
  const body = h
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    // strip language-switcher anchors (Cyrillic endonyms: Русский/Български/Српски)
    .replace(/<a\b[^>]*>(?:(?!<\/a>)[\s\S])*[\u0400-\u04FF](?:(?!<\/a>)[\s\S])*<\/a>/g, '');
  if (/[\u4E00-\u9FFF]/.test(body)) issues.push('CJK');
  // mojibake markers in body text
  if (/\u00C3[\u00A9\u00A8\u00A1\u00B3\u00B8\u00A5]|â€|Ã\s/.test(body)) issues.push('mojibake');
  if (/[\u0400-\u04FF]/.test(body)) issues.push('cyrillic-in-body');
  if (issues.length) {
    console.log(s + ': ' + issues.join(', '));
    fail++;
  } else console.log(s + ': OK | ' + title.slice(0, 70));
}
console.log(fail === 0 ? '\nALL 24 PAGES PASS' : '\n' + fail + ' PAGE(S) FAILED');
