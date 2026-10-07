const fs = require('fs');
const path = require('path');

const DIR = 'src/data/biz-solutions/translations';
const TMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

for (const l of ['fr', 'es']) {
  const data = JSON.parse(fs.readFileSync(path.join(TMP, '_sol-meta-' + l + '.json'), 'utf8'));
  const tsPath = path.join(DIR, l + '.ts');
  let t = fs.readFileSync(tsPath, 'utf8');
  const anchor = /const overrides: Record<string, SolutionOverride> = \{\n/;
  if (!anchor.test(t)) {
    console.log(l + ': ANCHOR NOT FOUND');
    continue;
  }
  const slugs = Object.keys(data).sort();
  let ins = '';
  let added = 0;
  for (const s of slugs) {
    if (t.includes(`'${s}':`)) continue;
    const m = data[s];
    ins += `  '${s}': {\n    meta: { title: '${esc(m.title)}', description: '${esc(m.description)}' },\n  },\n`;
    added++;
  }
  if (added === 0) {
    console.log(l + ': nothing to add');
    continue;
  }
  t = t.replace(anchor, (m0) => m0 + ins);
  fs.writeFileSync(tsPath, t);
  console.log(l + ': appended ' + added + ' slugs');
}
