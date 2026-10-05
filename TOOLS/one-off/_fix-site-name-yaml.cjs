// one-off: replace literal `{SITE.name}` placeholders in page YAML body content
// shard 76 class E — 165 occurrences in 124 files (randdcenter 6 pages × locales)
// all occurrences live in `intro` / `content_html` body keys (meta titles use `{SITE}`
// and are replaced at render time; body content is rendered verbatim, so the placeholder
// leaked into dist HTML as visible text "At {SITE.name}, ...")
// fix: data-level replacement with the brand constant (placeholder was never a supported
// convention for body content — no renderer expands it)
// usage: node TOOLS/one-off/_fix-site-name-yaml.cjs [--dry|--write]
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const DIR = path.join(ROOT, 'src', 'data', 'pages');
const WRITE = process.argv.includes('--write');
const BRAND = 'Afarer';

function walk(d) {
  const out = [];
  for (const e of fs.readdirSync(d)) {
    const p = path.join(d, e);
    if (fs.statSync(p).isDirectory()) out.push(...walk(p));
    else if (p.endsWith('.yaml')) out.push(p);
  }
  return out;
}

let files = 0;
let count = 0;
for (const p of walk(DIR)) {
  const raw = fs.readFileSync(p, 'utf8');
  const n = (raw.match(/\{SITE\.name\}/g) || []).length;
  if (!n) continue;
  files++;
  count += n;
  if (WRITE) fs.writeFileSync(p, raw.split(/\{SITE\.name\}/).join(BRAND), 'utf8');
  console.log((WRITE ? 'WROTE ' : 'DRY   ') + n + ' x ' + path.relative(ROOT, p));
}
console.log('---');
console.log(files + ' files, ' + count + ' occurrences' + (WRITE ? ' (written)' : ' (dry run)'));

// post-write verification: zero residual
if (WRITE) {
  let residual = 0;
  for (const p of walk(DIR)) {
    if (fs.readFileSync(p, 'utf8').includes('{SITE.name}')) {
      console.log('RESIDUAL: ' + path.relative(ROOT, p));
      residual++;
    }
  }
  console.log(residual === 0 ? 'VERIFY OK: zero {SITE.name} residual' : 'VERIFY FAIL: ' + residual);
  process.exit(residual === 0 ? 0 : 1);
}
