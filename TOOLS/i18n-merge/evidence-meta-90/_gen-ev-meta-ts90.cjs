const fs = require('fs');
const path = require('path');

const dir = __dirname;
const outDir = 'E:/github/afarer/src/data/site/evidence-meta';
const en = JSON.parse(fs.readFileSync(path.join(dir, '_ev-meta-en.json'), 'utf8'));
const locales = [
  'ja',
  'ko',
  'ru',
  'es',
  'pt',
  'it',
  'nl',
  'sv',
  'no',
  'da',
  'cs',
  'pl',
  'ro',
  'tr',
  'ar',
  'el',
  'fi',
  'th',
];
const enSlugs = Object.keys(en);

if (enSlugs.length !== 19) {
  console.log(`FATAL: EN source has ${enSlugs.length} slugs, expected 19`);
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

fs.writeFileSync(
  path.join(outDir, 'types.ts'),
  `export interface EvidenceMetaEntry {\n  title: string;\n  description: string;\n}\n\nexport type EvidenceMetaMap = Record<string, EvidenceMetaEntry>;\n`
);

const cap = (l) => l.charAt(0).toUpperCase() + l.slice(1);
const names = {};

for (const loc of locales) {
  const draft = JSON.parse(fs.readFileSync(path.join(dir, `_ev-meta-${loc}.json`), 'utf8'));
  const name = `evidenceMeta${cap(loc)}`;
  names[loc] = name;
  let out = `import type { EvidenceMetaMap } from './types';\n\nexport const ${name}: EvidenceMetaMap = {\n`;
  for (const slug of enSlugs) {
    if (!(slug in draft)) {
      console.log(`FATAL: ${loc} missing slug ${slug}`);
      process.exit(1);
    }
    out += `  '${slug}': {\n    title: ${JSON.stringify(draft[slug].title)},\n    description: ${JSON.stringify(draft[slug].description)},\n  },\n`;
  }
  out += '};\n';
  fs.writeFileSync(path.join(outDir, `${loc}.ts`), out);
}

const sorted = [...locales].sort();
let idx = "import type { EvidenceMetaMap } from './types';\n";
for (const loc of sorted) {
  idx += `import { ${names[loc]} } from './${loc}';\n`;
}
idx += `\nexport const EVIDENCE_META_OVERRIDES: Record<string, EvidenceMetaMap> = {\n`;
for (const loc of sorted) {
  idx += `  ${loc}: ${names[loc]},\n`;
}
idx += '};\n';
fs.writeFileSync(path.join(outDir, 'index.ts'), idx);

console.log(`Generated ${locales.length} locale files + index.ts + types.ts in ${outDir}`);
