const fs = require('fs');
const path = require('path');

const dir = __dirname;
const OUT = 'E:/github/afarer/src/data/site/evidence-body';
const NEW_LOCALES = ['nl', 'sv', 'no', 'da', 'cs', 'pl'];
const ALL_LOCALES = ['cs', 'da', 'es', 'it', 'ja', 'ko', 'nl', 'no', 'pl', 'pt', 'ru', 'sv'];

fs.mkdirSync(OUT, { recursive: true });

for (const loc of NEW_LOCALES) {
  const draft = JSON.parse(fs.readFileSync(path.join(dir, `_ev-body-${loc}.json`), 'utf8'));
  const meta = JSON.parse(fs.readFileSync(path.join(dir, `_ev-meta-${loc}.json`), 'utf8'));
  const map = {};
  for (const slug of Object.keys(draft).sort()) {
    const d = draft[slug];
    const title = meta[slug].title;
    const client = title.slice(0, title.indexOf(' \u2014 '));
    const product = title.slice(title.indexOf(' \u2014 ') + 3, title.length - ' | Afarer'.length);
    const entry = {
      client: client,
      product: product,
      industry: d.industry,
      challenge: meta[slug].description,
      solution: d.solution,
      result: d.result,
      outcomeMetrics: d.outcomeMetrics.map((m) => ({ label: m.label, value: String(m.value) })),
    };
    if (d.beforeAfter && d.beforeAfter.length > 0) {
      entry.beforeAfter = d.beforeAfter.map((b) => ({
        label: b.label,
        before: String(b.before),
        after: String(b.after),
      }));
    }
    map[slug] = entry;
  }
  fs.writeFileSync(
    path.join(OUT, `${loc}.ts`),
    `import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = ${JSON.stringify(map, null, 2)};
`
  );
  console.log(`wrote ${loc}.ts (${Object.keys(map).length} entries)`);
}

// rebuild index.ts with ALL locales (old modules stay untouched on disk)
let indexImports = '';
let indexEntries = '';
for (const loc of ALL_LOCALES) {
  indexImports += `import { bodyOverrides as ${loc}Body } from './${loc}';\n`;
  indexEntries += `  ${loc}: ${loc}Body,\n`;
}
fs.writeFileSync(
  path.join(OUT, 'index.ts'),
  `${indexImports}import type { EvidenceBodyMap } from './types';

export const EVIDENCE_BODY_OVERRIDES: Record<string, EvidenceBodyMap> = {
${indexEntries}};
export type { EvidenceBodyEntry, EvidenceBodyComparison, EvidenceBodyMetric } from './types';
`
);
console.log(`rebuilt index.ts with ${ALL_LOCALES.length} locales`);
