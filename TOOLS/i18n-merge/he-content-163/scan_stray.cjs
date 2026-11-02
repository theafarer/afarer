const fs = require('fs');
const path = require('path');
const dir = 'E:/github/afarer/src/data/site';
const files = [
  'content-v2.he.yaml',
  'learning-center.he.yaml',
  'tech-cards.he.yaml',
  'testimonials.he.yaml',
  'trust-badges.he.yaml',
  'use-cases.he.yaml',
];
const bad = [];
const re = /[\uFFFD\u200E\u200F\u202A-\u202E\u2066-\u2069\uFB1D-\uFB4F]/g;
for (const f of files) {
  const p = path.join(dir, f);
  const txt = fs.readFileSync(p, 'utf8');
  const lines = txt.split(/\r?\n/);
  lines.forEach((line, i) => {
    let m;
    re.lastIndex = 0;
    while ((m = re.exec(line)) !== null) {
      bad.push(
        `${f}:${i + 1} U+${m[0].codePointAt(0).toString(16).toUpperCase()} ${JSON.stringify(line.slice(Math.max(0, m.index - 20), m.index + 20))}`
      );
    }
  });
}
if (bad.length) {
  console.log('STRAY FOUND:');
  bad.forEach((b) => console.log(b));
  process.exit(1);
} else {
  console.log('CLEAN: no stray/bidi/presentation chars in ' + files.length + ' files');
}
