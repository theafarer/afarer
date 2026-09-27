// shard 38: dash-break corruption repair (root templates, data files, static AI files)
//
// Corruption shape (predates repo — initial commit already damaged):
//   A: "word –word"  space + EN DASH (U+2013) attached to following word  -> "word — word"
//      (space-after eaten; site convention is spaced em dash — clean rf-welding.yaml uses
//       " — " everywhere incl. its title, vs damaged root twin " –...", see TECH.md L27/L28)
//   B: "word—word"   EM DASH (U+2014) attached both sides (space-before eaten)
//      -> "word — word"  (CJK guard: ja/ko closed forms and "——" are legit, skip)
//   C: specific token damage aligned to YAML SSOT (rf-welding.astro family, digit strips,
//      N–year hyphens) — applied BEFORE pattern A so A does not half-fix them.
//   D: " –${...}"    space + EN DASH attached to template interpolation (title/alt suffixes)
//      -> " — ${...}"  (A requires a letter after the dash, so interpolations need their own pass)
//
// Scope: src/pages, src/components, src/layouts, src/data, src/content, src/lib,
//        src/config*.yaml, public/ai, public/.well-known
// Excluded: src/i18n/generated, public/data (ignored copies), public/llms*.txt (build-regenerated)
//
// usage: node TOOLS/i18n-merge/warning-cleanup/_fix-dash-breaks.cjs --dry   (report only)
//        node TOOLS/i18n-merge/warning-cleanup/_fix-dash-breaks.cjs --patch (apply, idempotent)
const fs = require('fs');
const path = require('path');

const PATCH = process.argv.includes('--patch');
const DRY = process.argv.includes('--dry');
if (!PATCH && !DRY) {
  console.error('need --dry or --patch');
  process.exit(1);
}

const ROOTS = [
  'src/pages',
  'src/components',
  'src/layouts',
  'src/data',
  'src/content',
  'src/lib',
  'public/ai',
  'public/.well-known',
];
const SKIP = new Set(['src/i18n/generated', 'public/data']);
const EXT = /\.(astro|ts|yaml|mdx|md|json)$/;

// specific token fixes: [file, find, rep, expectedCount]
const SPECIFIC = [
  [
    'src/pages/randdcenter/rf-welding.astro',
    'requirements of –the international standard',
    'requirements of ISO 6185 — the international standard',
    1,
  ],
  ['src/pages/randdcenter/rf-welding.astro', 'Peel test ()', 'Peel test', 1],
  ['src/pages/randdcenter/rf-welding.astro', 'RFopaque', 'RF-opaque', 1],
  ['src/pages/randdcenter/rf-welding.astro', 'Colourchange', 'Colour-change', 1],
  ['src/pages/randdcenter/prototype-workshop.astro', '0.5–.0 m', '0.5–1.0 m', 1],
  ['src/data/standalone-pages.ts', '0.9mm—.2mm', '0.9mm–1.2mm', 1],
  [
    'src/pages/compare/afarer-vs-traditional-manufacturers.astro',
    "'3–year warranty', '1–year warranty'",
    "'3-year warranty', '1-year warranty'",
    1,
  ],
  ['src/data/biz-solutions/index.ts', '($132,600)—210%', '($132,600) — 210%', 1],
  ['src/data/biz-solutions/index.ts', 'oysters)—94%', 'oysters) — 94%', 1],
  ['src/data/biz-solutions/index.ts', '(Term 2)—44%', '(Term 2) — 44%', 1],
];

const CJK = /[\u3040-\u30ff\u3400-\u9fff\uf900-\ufaff\uac00-\ud7af\uff66-\uff9f]/;

function collect() {
  const files = [];
  function walk(dir) {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch (e) {
      return;
    }
    for (const e of entries) {
      const p = path.join(dir, e.name).replace(/\\/g, '/');
      if (SKIP.has(p)) continue;
      if (e.isDirectory()) {
        walk(p);
        continue;
      }
      if (EXT.test(p)) files.push(p);
    }
  }
  ROOTS.forEach(walk);
  for (const f of fs.readdirSync('src')) {
    if (/^config.*\.yaml$/.test(f)) files.push('src/' + f);
  }
  return files;
}

const files = collect();
const report = { C: 0, A: 0, B: 0, D: 0, files: 0 };
const specApplied = {};
const detail = [];

function fixText(p, text) {
  let out = text;
  // C: specific fixes (before pattern A)
  for (const [f, find, rep] of SPECIFIC) {
    if (f !== p) continue;
    const parts = out.split(find);
    if (parts.length > 1) {
      const count = parts.length - 1;
      out = parts.join(rep);
      report.C += count;
      specApplied[f + '|' + find] = count;
      detail.push('C ' + p + ' x' + count + ': ' + JSON.stringify(find.slice(0, 58)));
    }
  }
  // A: space + en dash + attached letter -> space + em dash + space
  out = out.replace(/(^|[ \t\n])–(?=[A-Za-z])/gm, (m, pre, off, s) => {
    report.A++;
    if (report.A <= 400) detail.push('A ' + p + ': ' + JSON.stringify(s.substr(Math.max(0, off - 30), 60)));
    return pre + '— ';
  });
  // D: space + en dash + attached template interpolation -> space + em dash + space
  out = out.replace(/(^|[ \t\n])–(?=\$\{)/gm, (m, pre, off, s) => {
    report.D++;
    if (report.D <= 100) detail.push('D ' + p + ': ' + JSON.stringify(s.substr(Math.max(0, off - 30), 60)));
    return pre + '— ';
  });
  // B: attached em dash both sides -> spaced (guard: preceding char must be alphanumeric —
  //    excludes standalone placeholders '—' / <td>—</td> / >—< (L19-③ do-not-touch);
  //    "——" excluded by regex; CJK-after guard keeps ja/ko closed forms intact)
  out = out.replace(/([A-Za-z0-9])—(?=[^\s—])/g, (m, pre, off, s) => {
    const after = s[off + 2];
    if (CJK.test(after)) return m;
    report.B++;
    if (report.B <= 200) detail.push('B ' + p + ': ' + JSON.stringify(s.substr(Math.max(0, off - 30), 60)));
    return pre + ' — ';
  });
  return out;
}

for (const p of files) {
  const text = fs.readFileSync(p, 'utf8');
  const out = fixText(p, text);
  const changed = out !== text;
  if (!changed) continue;
  report.files++;
  if (PATCH) fs.writeFileSync(p, out, 'utf8');
}

// verify specific-fix state: find x expected (pending/just-applied) OR find gone + rep present (already-applied)
let specErr = 0;
for (const [f, find, rep, expected] of SPECIFIC) {
  const key = f + '|' + find;
  const got = specApplied[key] || 0;
  const t = fs.readFileSync(f, 'utf8');
  if (got === expected) continue; // applied (or would apply) this run
  if (!t.includes(find) && t.includes(rep)) continue; // already applied in a previous run
  console.error(
    'SPECIFIC MISMATCH ' + f + ' ' + JSON.stringify(find.slice(0, 40)) + ': got ' + got + ' expected ' + expected
  );
  specErr++;
}
if (specErr) process.exit(1);

detail.forEach((d) => console.log(d));
console.log(
  (PATCH ? 'PATCH' : 'DRY') +
    ': replacements=' +
    (report.A + report.B + report.C + report.D) +
    ' (A=' +
    report.A +
    ' B=' +
    report.B +
    ' C=' +
    report.C +
    ' D=' +
    report.D +
    ') in ' +
    report.files +
    ' files'
);
