const fs = require('fs');
const checks = [
  ['parts/02_expand-outdoor-brand-water-sports.yaml', /\bwith\b/gi],
  ['parts/05_create-fishing-sup-brand.yaml', /\b(the|on)\b/gi],
  ['parts/11_sup-academy-equipment-program.yaml', /\b(the|of)\b/gi],
  ['parts/13_retail-private-label-program.yaml', /\bof\b/gi],
];
for (const [file, re] of checks) {
  const text = fs.readFileSync(file, 'utf8');
  let m;
  const seen = new Set();
  while ((m = re.exec(text)) !== null) {
    const start = Math.max(0, m.index - 50);
    const ctx = text.slice(start, m.index + m[0].length + 50).replace(/\s+/g, ' ');
    if (!seen.has(ctx)) {
      seen.add(ctx);
      console.log(file.slice(6, 16), '>>', ctx);
    }
  }
  console.log('---');
}
