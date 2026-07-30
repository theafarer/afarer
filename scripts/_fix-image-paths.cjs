const fs = require('fs');
const path = require('path');
const glob = require('glob');
const ROOT = process.cwd();

const REPLACEMENTS = {
  'https://assets.afarer.com/images/afarer/factory/afarer factory.webp':
    'https://assets.afarer.com/images/afarer/factory/afarer-factory-building.webp',
  'https://assets.afarer.com/images/afarer/factory/design discuss2.jpeg':
    'https://assets.afarer.com/images/afarer/factory/afarer-design-discussion-2.webp',
  'https://assets.afarer.com/images/afarer/factory/design discuss original.jpeg':
    'https://assets.afarer.com/images/afarer/factory/afarer-design-discussion-original.webp',
  'https://assets.afarer.com/images/afarer/factory/PVC material.jpeg':
    'https://assets.afarer.com/images/afarer/factory/afarer-pvc-material-testing.webp',
  'https://assets.afarer.com/images/afarer/factory/Pressure Testing.jpeg':
    'https://assets.afarer.com/images/afarer/factory/afarer-pressure-testing.webp',
  'https://assets.afarer.com/images/afarer/factory/Stock Boat.webp':
    'https://assets.afarer.com/images/afarer/factory/afarer-stock-boat-inventory.webp',
  'https://assets.afarer.com/images/afarer/factory/UV Resistance Testing.jpeg':
    'https://assets.afarer.com/images/afarer/factory/afarer-uv-resistance-testing.webp',
  'https://assets.afarer.com/images/afarer/factory/sup making.jpeg':
    'https://assets.afarer.com/images/afarer/factory/afarer-sup-manufacturing.webp',
  'https://assets.afarer.com/images/afarer/factory/sup making3.jpeg':
    'https://assets.afarer.com/images/afarer/factory/afarer-sup-manufacturing-3.webp',
  'https://assets.afarer.com/images/afarer/factory/producing department.jpeg':
    'https://assets.afarer.com/images/afarer/factory/afarer-production-department.webp',
  'https://assets.afarer.com/images/afarer/factory/producing department2.jpeg':
    'https://assets.afarer.com/images/afarer/factory/afarer-production-department-2.webp',
  'https://assets.afarer.com/images/afarer/hero/about-banner.webp':
    'https://assets.afarer.com/images/afarer/hero/production-dept.webp',
  'https://assets.afarer.com/images/afarer/hero/academy-banner.webp':
    'https://assets.afarer.com/images/afarer/hero/tech-meeting-small.webp',
  'https://assets.afarer.com/images/afarer/hero/contact-banner.webp':
    'https://assets.afarer.com/images/afarer/hero/factory-gate.webp',
  'https://assets.afarer.com/images/afarer/hero/custom-banner.webp':
    'https://assets.afarer.com/images/afarer/hero/afarer-hero-design-concept.webp',
  'https://assets.afarer.com/images/afarer/products/fishing-banner.webp':
    'https://assets.afarer.com/images/afarer/hero/production-dept.webp',
  'https://assets.afarer.com/images/afarer/factory/factory-banner.webp':
    'https://assets.afarer.com/images/afarer/hero/factory-gate.webp',
  'https://assets.afarer.com/images/afarer/factory/process-banner.webp':
    'https://assets.afarer.com/images/afarer/hero/production-dept.webp',
  'https://assets.afarer.com/images/afarer/factory/production-workshop.webp':
    'https://assets.afarer.com/images/afarer/factory/afarer-production-department.webp',
  'https://assets.afarer.com/images/afarer/factory/quality-workshop.webp':
    'https://assets.afarer.com/images/afarer/factory/afarer-pvc-material-testing.webp',
  'https://assets.afarer.com/images/afarer/factory/rib-workshop.webp':
    'https://assets.afarer.com/images/afarer/products/rib/afarer-rib-330-boat.webp',
  'https://assets.afarer.com/images/afarer/factory/welding-workshop.webp':
    'https://assets.afarer.com/images/afarer/factory/producting department3.webp',
  'https://assets.afarer.com/images/afarer/hero/hero-5.webp':
    'https://assets.afarer.com/images/afarer/hero/factory-gate.webp',
  'https://assets.afarer.com/images/afarer/hero/hero-image.webp':
    'https://assets.afarer.com/images/afarer/hero/afarer-hero-design-concept.webp',
  'https://assets.afarer.com/images/afarer/hero/hero-scenic.webp':
    'https://assets.afarer.com/images/afarer/hero/tech-meeting-small.webp',
  'https://assets.afarer.com/images/afarer/hero/boat man afarer-min.jpeg':
    'https://assets.afarer.com/images/afarer/hero/afarer-hero-design-concept.webp',
  'https://assets.afarer.com/images/afarer/hero/production-workshop.webp':
    'https://assets.afarer.com/images/afarer/factory/afarer-production-department.webp',
  'https://assets.afarer.com/images/afarer/hero/trust-hero.webp':
    'https://assets.afarer.com/images/afarer/hero/tech-meeting-small.webp',
  'https://assets.afarer.com/images/afarer/products/rib-330.webp':
    'https://assets.afarer.com/images/afarer/products/rib/afarer-rib-330-boat.webp',
};

const yamlFiles = glob.sync('src/data/pages/**/*.yaml').map((f) => path.join(ROOT, f));
let totalReplaced = 0;
let totalFiles = 0;

for (const filePath of yamlFiles) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  for (const [oldUrl, newUrl] of Object.entries(REPLACEMENTS)) {
    const re = new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const count = (content.match(re) || []).length;
    if (count > 0) {
      content = content.split(oldUrl).join(newUrl);
      totalReplaced += count;
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content);
    totalFiles++;
  }
}

// Summary per replacement
console.log('Replacement summary:');
for (const [oldUrl, newUrl] of Object.entries(REPLACEMENTS)) {
  const oldName = oldUrl.split('/').pop();
  const newName = newUrl.split('/').pop();
  // Count by scanning files
  let c = 0;
  for (const filePath of yamlFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(newUrl)) c++;
  }
  if (c > 0) console.log('  ' + oldName + ' -> ' + newName + ' (' + c + ' files)');
}

console.log('---');
console.log('Total replacements: ' + totalReplaced);
console.log('Total files changed: ' + totalFiles);

// Verify
let missingCount = 0;
for (const f of yamlFiles) {
  const content = fs.readFileSync(f, 'utf8');
  for (const oldUrl of Object.keys(REPLACEMENTS)) {
    if (content.includes(oldUrl)) {
      console.error('STILL MISSING in ' + f.replace(ROOT + path.sep, '').replace(/\\/g, '/'));
      missingCount++;
    }
  }
}
if (missingCount === 0) console.log('All references updated successfully!');
