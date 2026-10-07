const fs = require('fs');
const path = require('path');

const DIR = 'src/data/biz-solutions/translations';
const TMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';

// 20 non-EN UI locales with translations
const LOCALES = ['ar','cs','da','de','el','es','fi','fr','it','ja','ko','nl','no','pl','pt','ro','ru','sv','th','tr'];

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

let created = 0, appended = 0;
for (const l of LOCALES) {
  const jsonPath = path.join(TMP, '_sol-meta-' + l + '.json');
  if (!fs.existsSync(jsonPath)) { console.log('MISSING data: ' + l); continue; }
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const tsPath = path.join(DIR, l + '.ts');

  // build the meta-only override entries text (sorted by slug for determinism)
  const slugs = Object.keys(data).sort();
  let entries = '';
  for (const s of slugs) {
    const m = data[s];
    entries += `  '${s}': {\n    meta: { title: '${esc(m.title)}', description: '${esc(m.description)}' },\n  },\n`;
  }

  if (fs.existsSync(tsPath)) {
    // append into existing file (fr/es have a full corporate-sup-event-package override)
    let t = fs.readFileSync(tsPath, 'utf8');
    // skip slugs that already exist in the file
    let skipped = 0;
    const kept = [];
    for (const s of slugs) {
      if (t.includes(`'${s}':`)) { skipped++; continue; }
      kept.push(s);
    }
    if (kept.length === 0) { console.log(l + ': all slugs already present, skip'); continue; }
    let ins = '';
    for (const s of kept) {
      const m = data[s];
      ins += `  '${s}': {\n    meta: { title: '${esc(m.title)}', description: '${esc(m.description)}' },\n  },\n`;
    }
    t = t.replace(/export default \{\n/, (m0) => m0 + ins);
    fs.writeFileSync(tsPath, t);
    appended++;
    console.log(l + ': appended ' + kept.length + ' slugs (skipped ' + skipped + ' existing)');
  } else {
    const t = `import type { SolutionOverride } from './fr';\n\nconst ${l}: Record<string, SolutionOverride> = {\n${entries}};\n\nexport default ${l};\n`;
    fs.writeFileSync(tsPath, t);
    created++;
    console.log(l + ': created with ' + slugs.length + ' slugs');
  }
}

// update index.ts
let idx = `import fr from './fr';\n`;
const others = LOCALES.filter((l) => l !== 'fr');
others.forEach((l) => { idx += `import ${l} from './${l}';\n`; });
idx += `import type { SolutionOverride } from './fr';\n\nexport type { SolutionOverride };\n\nexport const solutionTranslations: Record<string, Record<string, SolutionOverride>> = {\n  fr,\n`;
others.forEach((l) => { idx += `  ${l},\n`; });
idx += `};\n`;
fs.writeFileSync(path.join(DIR, 'index.ts'), idx);
console.log('\nindex.ts rewritten; created=' + created + ' appended=' + appended);
