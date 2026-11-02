const fs = require('fs');
const path = require('path');

const base = path.join('E:', 'github', 'afarer', 'dist', 'he', 'solutions');
const slugs = [
  'sup-brand-startup','expand-outdoor-brand-water-sports','inflatable-technology-for-surf-business','ecommerce-sup-brand-development','create-fishing-sup-brand','sup-yoga-wellness-equipment','creator-influencer-sup-brand','commercial-sup-fleet','durable-sup-rental-fleet','resort-water-activity-package','sup-academy-equipment-program','luxury-portable-sup-package','retail-private-label-program','regional-oem-supply-chain-partner','corporate-sup-event-package','expand-your-water-sports-portfolio','pet-friendly-paddle-board-program','complete-beach-activity-equipment-solutions','commercial-water-park-sup-fleet','premium-custom-sup-collection','destination-water-sports-package','kids-exploration-sup-program','professional-water-rescue-sup-system','eco-research-monitoring-sup-platform'
];

const badRe = /[\u200E\u200F\u202A-\u202E\u2066-\u2069\uFB1D-\uFB4F\uFFFD]/;
let errors = [];
slugs.forEach(slug => {
  const f = path.join(base, slug, 'index.html');
  if (!fs.existsSync(f)) { errors.push(slug + ': missing index.html'); return; }
  const raw = fs.readFileSync(f, 'utf8');
  const m = badRe.exec(raw);
  if (m) errors.push(slug + ': stray char U+' + m[0].codePointAt(0).toString(16) + ' at "' + raw.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\r?\n/g, ' ') + '"');
  if (raw.indexOf('{SITE}') >= 0) errors.push(slug + ': unresolved {SITE}');
  if (raw.indexOf('dir="rtl"') < 0) errors.push(slug + ': missing dir=rtl');
});
if (errors.length) { errors.forEach(e => console.log('ERROR: ' + e)); process.exit(1); }
console.log('DIST SPOT-CHECK PASSED: 24 he solution pages clean');
