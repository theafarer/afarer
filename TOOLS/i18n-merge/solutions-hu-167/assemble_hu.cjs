const fs = require('fs');
const path = require('path');
const yaml = require(path.join('E:', 'github', 'afarer', 'node_modules', 'js-yaml'));

const base = __dirname;
const partsDir = path.join(base, 'parts');
const frPath = path.join('E:', 'github', 'afarer', 'src', 'data', 'biz-solutions', 'translations', 'fr.ts');
const outPath = path.join('E:', 'github', 'afarer', 'src', 'data', 'biz-solutions', 'translations', 'hu.ts');

// copy the SolutionOverride type header verbatim from fr.ts (lines 1-42, ends with '};')
const frLines = fs.readFileSync(frPath, 'utf8').split(/\r?\n/);
let typeEnd = -1;
for (let i = 0; i < frLines.length; i++) {
  if (frLines[i] === '};') {
    typeEnd = i;
    break;
  }
}
if (typeEnd < 0) throw new Error('type block end not found in fr.ts');
const header = frLines.slice(0, typeEnd + 1).join('\n');

const files = fs
  .readdirSync(partsDir)
  .filter((f) => f.endsWith('.yaml'))
  .sort();
if (files.length !== 24) throw new Error('expected 24 parts, got ' + files.length);

const entries = [];
for (const f of files) {
  const slug = f.replace(/^\d+_/, '').replace(/\.yaml$/, '');
  const doc = yaml.load(fs.readFileSync(path.join(partsDir, f), 'utf8'));
  entries.push([slug, doc]);
}

const body = entries
  .map(([slug, doc]) => {
    const json = JSON.stringify(doc, null, 2)
      .split('\n')
      .map((l, i) => (i === 0 ? l : '  ' + l))
      .join('\n');
    return "  '" + slug + "': " + json + ',';
  })
  .join('\n');

const out = header + '\n\nconst hu: Record<string, SolutionOverride> = {\n' + body + '\n};\n\nexport default hu;\n';
fs.writeFileSync(outPath, out, 'utf8');
console.log('wrote', outPath, out.length, 'chars,', entries.length, 'entries');
