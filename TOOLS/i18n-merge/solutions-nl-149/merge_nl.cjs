const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const WORK = 'C:/Users/Helleo/AppData/Local/Temp/deveco/nl_sol_work';
const TS = 'E:/github/afarer/src/data/biz-solutions/translations/nl.ts';

// 0. keep everything before the body marker as the header
//    (nl.ts already imports SolutionOverride from './fr' — no type block to manage)
let src = fs.readFileSync(TS, 'utf8');
const marker = 'const nl: Record<string, SolutionOverride> = {';
const markerIdx = src.indexOf(marker);
if (markerIdx < 0) {
  throw new Error('nl.ts body marker not found');
}
const header = src.slice(0, markerIdx);

// 1. eval-extract existing meta overrides from nl.ts
let js = src
  .slice(markerIdx)
  .replace('const nl: Record<string, SolutionOverride> =', 'const nl =')
  .replace('export default nl;', 'return nl;');
const existing = new Function(js)();
const existingSlugs = Object.keys(existing);
console.log('existing nl.ts slugs:', existingSlugs.length);

// 2. load translated part bodies
const partsDir = path.join(WORK, 'parts');
const files = fs
  .readdirSync(partsDir)
  .filter((f) => /^\d{2}_.*\.yaml$/.test(f))
  .sort();
const bodies = {};
for (const f of files) {
  const slug = f.replace(/^\d+_/, '').replace(/\.yaml$/, '');
  bodies[slug] = yaml.load(fs.readFileSync(path.join(partsDir, f), 'utf8'));
}
const partSlugs = Object.keys(bodies);
console.log('part files:', partSlugs.length);

const missing = existingSlugs.filter((s) => !bodies[s]);
const extra = partSlugs.filter((s) => !existing[s]);
if (missing.length || extra.length) {
  throw new Error(
    'slug set mismatch. missing parts: ' + JSON.stringify(missing) + ' extra parts: ' + JSON.stringify(extra)
  );
}

// 3. merge: meta from existing pt.ts + body fields from part, fixed key order
const ORDER = ['clientType', 'meta', 'hero', 'challenge', 'solutions', 'caseStudy', 'whyAfarer', 'faqs', 'cta'];
const merged = {};
for (const slug of existingSlugs.slice().sort()) {
  const body = bodies[slug];
  const entry = {};
  for (const key of ORDER) {
    if (key === 'meta') {
      entry.meta = existing[slug].meta;
    } else if (body[key] !== undefined && body[key] !== null) {
      entry[key] = body[key];
    }
  }
  merged[slug] = entry;
}

// 4. serialize (JSON style; prettier will reformat to single quotes / printWidth 120)
const out =
  header +
  'const nl: Record<string, SolutionOverride> = ' +
  JSON.stringify(merged, null, 2) +
  ';\n\nexport default nl;\n';
fs.writeFileSync(TS, out);

// 5. sanity summary
let sections = 0;
for (const slug of Object.keys(merged)) {
  for (const key of ORDER) if (merged[slug][key]) sections++;
}
console.log('written. slugs:', Object.keys(merged).length, 'total sections:', sections);
console.log('bytes:', Buffer.byteLength(out));
