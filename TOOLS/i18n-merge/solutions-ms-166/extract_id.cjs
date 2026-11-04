const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const SRC = 'E:/github/afarer/src/data/biz-solutions/translations/id.ts';
const OUT_DIR = path.join(__dirname, 'id_parts');
fs.mkdirSync(OUT_DIR, { recursive: true });

let src = fs.readFileSync(SRC, 'utf8');
const startIdx = src.indexOf('const id:');
if (startIdx < 0) throw new Error('const id: not found');
let js = src
  .slice(startIdx)
  .replace('const id: Record<string, SolutionOverride> =', 'const id =')
  .replace('export default id;', '');
const id = new Function(js + '\nreturn id;')();
console.log('id solutions:', Object.keys(id).length);

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

slugs.forEach((slug, i) => {
  const doc = id[slug];
  if (!doc) throw new Error('missing id for ' + slug);
  const out = yaml.dump(doc, { lineWidth: -1, noRefs: true, quotingType: "'" });
  const name = String(i + 1).padStart(2, '0') + '_' + slug + '.yaml';
  fs.writeFileSync(path.join(OUT_DIR, name), out, 'utf8');
});
console.log('wrote', slugs.length, 'id part files');
