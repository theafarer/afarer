const fs = require('fs');
const dir = 'E:/github/afarer/src/data/biz-solutions/translations';
for (const lang of ['fr', 'es']) {
  const s = fs.readFileSync(dir + '/' + lang + '.ts', 'utf8');
  const body = s.slice(s.indexOf('const overrides'));
  const blocks = [...body.matchAll(/^  '([a-z0-9-]+)':\s*\{/gm)].map((m) => m[1]);
  console.log('=== ' + lang + ' ===');
  for (const b of blocks) {
    const i = body.indexOf("'" + b + "'");
    const j = body.indexOf('\n  },', i);
    const seg = body.slice(i, j);
    const fields = [
      'clientType',
      'brandName',
      'hero',
      'challenge',
      'solutions',
      'caseStudy',
      'whyAfarer',
      'faqs',
      'cta',
    ]
      .filter((f) => seg.includes(f + ':'))
      .join(',');
    console.log(b.padEnd(50), fields);
  }
}
