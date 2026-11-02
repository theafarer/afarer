const fs = require('fs');
const path = require('path');
const yaml = require(path.join('E:', 'github', 'afarer', 'node_modules', 'js-yaml'));

const base = __dirname;
const partsDir = path.join(base, 'parts');
const outFile = path.join('E:', 'github', 'afarer', 'src', 'data', 'biz-solutions', 'translations', 'he.ts');

const expectedSlugs = [
  'sup-brand-startup','expand-outdoor-brand-water-sports','inflatable-technology-for-surf-business','ecommerce-sup-brand-development','create-fishing-sup-brand','sup-yoga-wellness-equipment','creator-influencer-sup-brand','commercial-sup-fleet','durable-sup-rental-fleet','resort-water-activity-package','sup-academy-equipment-program','luxury-portable-sup-package','retail-private-label-program','regional-oem-supply-chain-partner','corporate-sup-event-package','expand-your-water-sports-portfolio','pet-friendly-paddle-board-program','complete-beach-activity-equipment-solutions','commercial-water-park-sup-fleet','premium-custom-sup-collection','destination-water-sports-package','kids-exploration-sup-program','professional-water-rescue-sup-system','eco-research-monitoring-sup-platform'
];

const merged = {};
expectedSlugs.forEach((slug, i) => {
  const nn = String(i + 1).padStart(2, '0');
  const f = path.join(partsDir, nn + '_' + slug + '.yaml');
  const data = yaml.load(fs.readFileSync(f, 'utf8'));
  merged[slug] = data;
});

const header = "import type { SolutionOverride } from './fr';\n\n";
const body = 'const he: Record<string, SolutionOverride> = ' + JSON.stringify(merged, null, 2) + ';\n\nexport default he;\n';
fs.writeFileSync(outFile, header + body, 'utf8');

// verification: round-trip
const written = fs.readFileSync(outFile, 'utf8');
const jsonStart = written.indexOf('=') + 1;
const jsonEnd = written.lastIndexOf('};');
const parsed = JSON.parse(written.slice(jsonStart, jsonEnd + 1).replace(/;\s*$/, ''));
const keys = Object.keys(parsed);
if (keys.length !== 24) throw new Error('expected 24 keys, got ' + keys.length);
expectedSlugs.forEach((slug, i) => {
  if (keys[i] !== slug) throw new Error('order mismatch at ' + i + ': ' + keys[i] + ' != ' + slug);
  if (!parsed[slug].meta || parsed[slug].meta.title.indexOf('{SITE}') < 0) throw new Error(slug + ': meta.title missing {SITE}');
});
console.log('he.ts written: ' + keys.length + ' solutions, ' + (written.length / 1024).toFixed(1) + ' KB');
