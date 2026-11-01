const fs = require('fs');
const path = require('path');
const frags = path.join(__dirname, 'frags');
const parts = path.join(__dirname, 'parts');
const name = process.argv[2]; // e.g. 01_sup-brand-startup
const segs = ['main', 'fragB', 'fragC'].map((s) => fs.readFileSync(path.join(frags, name + '_' + s + '.yaml'), 'utf8'));
let out = '';
for (const s of segs) {
  let t = s.replace(/\r\n/g, '\n');
  if (!t.endsWith('\n')) t += '\n';
  out += t;
}
fs.writeFileSync(path.join(parts, name + '.yaml'), out, 'utf8');
// garbage scan: CJK, Cyrillic, Greek, Hebrew, Arabic, RO diacritics, curly/straight quotes, soft hyphen
const bad = out.match(
  /[\u3400-\u9fff\uf900-\ufaff\u0400-\u04ff\u0370-\u03ff\u0590-\u05ff\u0600-\u06ff\u0102\u0103\u00c2\u00e2\u00ce\u00ee\u0218-\u021b\u201C\u201D\u2018\u2019\u201E\u00AB\u00BB]/g
);
console.log('garbage chars:', bad ? JSON.stringify(bad.join('')) : 'none');
console.log('straight quotes:', (out.match(/"/g) || []).length, 'apostrophes:', (out.match(/'/g) || []).length);
let shy = 0;
for (let i = 0; i < out.length; i++) if (out.charCodeAt(i) === 0xad) shy++;
console.log('soft hyphens:', shy);
console.log('tail:', JSON.stringify(out.slice(-60)));
