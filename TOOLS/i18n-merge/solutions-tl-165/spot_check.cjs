const fs = require('fs');
const path = require('path');
const yaml = require(path.join('E:', 'github', 'afarer', 'node_modules', 'js-yaml'));
const dir = path.join(__dirname, 'parts');
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.yaml'));
console.log('files:', files.length);
let ok = true;
for (const f of files) {
  try {
    const doc = yaml.load(fs.readFileSync(path.join(dir, f), 'utf8'));
    const has = (o, k) => o && typeof o === 'object' && k in o;
    if (!has(doc, 'meta') || !has(doc.meta, 'title') || String(doc.meta.title).indexOf('{SITE}') < 0) {
      console.log('BAD {SITE}:', f);
      ok = false;
    }
    if (has(doc, 'brandName') || has(doc, 'keywords')) {
      console.log('MUST DROP field present:', f);
      ok = false;
    }
    if (has(doc, 'hero') && has(doc.hero, 'image') && has(doc.hero.image, 'src')) {
      console.log('hero.image.src must drop:', f);
      ok = false;
    }
    if (has(doc, 'cta')) {
      for (const a of ['primaryAction', 'secondaryAction']) {
        if (has(doc.cta, a) && has(doc.cta[a], 'href')) {
          console.log('cta.' + a + '.href must drop:', f);
          ok = false;
        }
      }
    }
    const raw = fs.readFileSync(path.join(dir, f), 'utf8');
    const badRe = /[\u200E\u200F\u202A-\u202E\u2066-\u2069\uFB1D-\uFB4F\u0400-\u04FF\u4E00-\u9FFF\u3040-\u30FF\uFFFD]/;
    const m = badRe.exec(raw);
    if (m) {
      console.log(
        'STRAY CHAR U+' + m[0].codePointAt(0).toString(16),
        f,
        JSON.stringify(raw.slice(Math.max(0, m.index - 30), m.index + 30))
      );
      ok = false;
    }
  } catch (e) {
    console.log('PARSE FAIL:', f, e.message);
    ok = false;
  }
}
console.log(ok ? 'ALL ' + files.length + ' PARTS OK' : 'PROBLEMS FOUND');
