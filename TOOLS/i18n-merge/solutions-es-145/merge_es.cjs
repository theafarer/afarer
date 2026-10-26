const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const WORK = 'C:/Users/Helleo/AppData/Local/Temp/deveco/es_sol_work';
const TS = 'E:/github/afarer/src/data/biz-solutions/translations/es.ts';

// 1. eval-extract existing meta overrides from es.ts
//    (es.ts currently carries a redundant local `export type SolutionOverride` block; nothing imports
//     from './es', so the regenerated file will use the standard `import type ... from './fr'` header)
let src = fs.readFileSync(TS, 'utf8');
const constIdx = src.indexOf('const overrides: Record<string, SolutionOverride> = {');
if (constIdx < 0) {
  throw new Error('es.ts body marker not found');
}
let js = src
  .slice(constIdx)
  .replace('const overrides: Record<string, SolutionOverride> =', 'const overrides =')
  .replace('export default overrides;', 'return overrides;');
const existing = new Function(js)();
const existingSlugs = Object.keys(existing);
console.log('existing es.ts slugs:', existingSlugs.length);

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

// 3. merge: meta from existing es.ts + body fields from part, fixed key order
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
  "import type { SolutionOverride } from './fr';\n\n" +
  'const es: Record<string, SolutionOverride> = ' +
  JSON.stringify(merged, null, 2) +
  ';\n\nexport default es;\n';
fs.writeFileSync(TS, out);

// 5. sanity summary
let sections = 0;
for (const slug of Object.keys(merged)) {
  for (const key of ORDER) if (merged[slug][key]) sections++;
}
console.log('written. slugs:', Object.keys(merged).length, 'total sections:', sections);
console.log('bytes:', Buffer.byteLength(out));
