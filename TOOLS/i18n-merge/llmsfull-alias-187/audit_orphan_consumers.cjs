// For each of the 28 content-only slugs, find getPageContent consumers in src/pages + src/components
const fs = require('fs');
const path = require('path');
const SRC = 'E:/github/afarer/src';
const SLUGS = [
  'brand-team',
  'factory-capacity',
  'factory-equipment',
  'factory-oem-capability',
  'factory-process',
  'factory-quality-lab',
  'fishing',
  'home',
  'hull-engineering',
  'hydrodynamic-test-tank',
  'inflatable-vs-hardboard',
  'prototype-workshop',
  'pvc-fabric-lab',
  'quality-inspection-lab',
  'research-ce-certification',
  'research-drop-stitch',
  'research-oem-buyer-guide',
  'research-sup-thickness',
  'resources',
  'rf-welding',
  'solutions-build-your-own-brand',
  'solutions-distributors',
  'solutions-paddle-clubs',
  'solutions-rental-operators',
  'solutions-resorts-hotels',
  'solutions-retail-partners',
  'tourism-recreation',
  'what-is-sup',
];

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(astro|ts|tsx)$/.test(e.name)) out.push(p);
  }
}

const files = [];
walk(path.join(SRC, 'pages'), files);
walk(path.join(SRC, 'components'), files);
walk(path.join(SRC, 'layouts'), files);

const contents = new Map(files.map((f) => [f, fs.readFileSync(f, 'utf8')]));

for (const slug of SLUGS) {
  const hits = [];
  for (const [f, c] of contents) {
    // direct getPageContent with this slug, or import of the generated page module
    const re = new RegExp(`getPageContent\\([^)]*'${slug}'`);
    if (re.test(c)) hits.push(f.replace(/\\/g, '/').split('/src/')[1] + ' [getPageContent]');
    const mod = new RegExp(`generated/pages/${slug}\\.ts`);
    if (mod.test(c)) hits.push(f.replace(/\\/g, '/').split('/src/')[1] + ' [import-module]');
  }
  console.log(`${slug}: ${hits.length ? hits.join(' | ') : '(no consumer)'}`);
}
