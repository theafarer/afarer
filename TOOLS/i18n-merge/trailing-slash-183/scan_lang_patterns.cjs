const fs = require('fs');
const path = require('path');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(astro|ts)$/.test(e.name)) out.push(p);
  }
  return out;
}

const files = walk('E:/github/afarer/src/pages');
const report = [];
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8');
  const tpl = (s.match(/`\/\$\{lang\}(\/[^`?]*)`/g) || []).length;
  const plus = (s.match(/'\/' \+ lang \+/g) || []).length;
  const hard = (s.match(/href="\/(?!\/)[^"]*"/g) || []).filter((m) => !/\.[a-z0-9]+["?]$/i.test(m)).length;
  if (tpl || plus) report.push({ f: f.replace(/\\/g, '/').replace('E:/github/afarer/', ''), tpl, plus });
}
report.sort((a, b) => b.tpl + b.plus - (a.tpl + a.plus));
console.log('files with lang-template/plus patterns:', report.length);
for (const r of report) console.log(`${r.tpl + r.plus}\t(tpl:${r.tpl} plus:${r.plus})\t${r.f}`);
