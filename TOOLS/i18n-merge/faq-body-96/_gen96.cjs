const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const TMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const OUT = 'E:/github/afarer/src/data';
const LOCALES = ['ar', 'el', 'fi', 'ro', 'th', 'tr'];
const EXPORT_NAME = { ar: 'faqsAr', el: 'faqsEl', fi: 'faqsFi', ro: 'faqsRo', th: 'faqsTh', tr: 'faqsTr' };

const en = JSON.parse(fs.readFileSync(path.join(TMP, '_faq-en.json'), 'utf8'));
const enById = new Map(en.map((r) => [r.id, r]));

const sq = (s) => `'${String(s).replace(/'/g, "''")}'`;

let fail = 0;
for (const loc of LOCALES) {
  const draft = JSON.parse(fs.readFileSync(path.join(TMP, `_faq-${loc}.json`), 'utf8'));
  const draftById = new Map(draft.map((r) => [r.id, r]));
  const lines = [];
  for (const e of en) {
    const d = draftById.get(e.id);
    if (!d) {
      console.log(`[${loc}] missing draft for ${e.id}`);
      fail++;
      continue;
    }
    lines.push(`- id: ${e.id}`);
    lines.push(`  question: ${sq(d.q)}`);
    lines.push(`  answer: ${sq(d.a)}`);
    lines.push(`  category: ${e.category}`);
    lines.push(
      e.relatedProducts.length
        ? '  relatedProducts:\n' + e.relatedProducts.map((p) => `    - ${p}`).join('\n')
        : '  relatedProducts: []'
    );
    lines.push(
      e.relatedGuides.length
        ? '  relatedGuides:\n' + e.relatedGuides.map((g) => `    - ${g}`).join('\n')
        : '  relatedGuides: []'
    );
  }
  const yamlText = lines.join('\n') + '\n';

  // round-trip verification: parse must equal merged intent exactly
  const parsed = yaml.load(yamlText);
  let ok = parsed.length === 53;
  parsed.forEach((r, i) => {
    if (r.id !== en[i].id) ok = false;
    if (r.question !== draftById.get(r.id).q) ok = false;
    if (r.answer !== draftById.get(r.id).a) ok = false;
    if (r.category !== en[i].category) ok = false;
    if (JSON.stringify(r.relatedProducts) !== JSON.stringify(en[i].relatedProducts)) ok = false;
    if (JSON.stringify(r.relatedGuides) !== JSON.stringify(en[i].relatedGuides)) ok = false;
    if (typeof r.question !== 'string' || typeof r.answer !== 'string') ok = false;
  });
  if (!ok) {
    console.log(`[${loc}] ROUND-TRIP MISMATCH`);
    fail++;
    continue;
  }

  const yamlPath = path.join(OUT, `faq-${loc}.yaml`);
  fs.writeFileSync(yamlPath, yamlText, 'utf8');
  const tsPath = path.join(OUT, `faq.${loc}.ts`);
  fs.writeFileSync(
    tsPath,
    `import yamlData from './faq-${loc}.yaml';\nimport type { FaqRecord } from './faq';\n\nexport const ${EXPORT_NAME[loc]} = yamlData as FaqRecord[];\n`,
    'utf8'
  );
  console.log(`[${loc}] wrote faq-${loc}.yaml (${yamlText.length}B) + faq.${loc}.ts — round-trip OK`);
}
console.log(fail === 0 ? 'GEN OK' : `${fail} FAILED`);
process.exit(fail === 0 ? 0 : 1);
