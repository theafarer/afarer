const fs = require('fs');
const path = require('path');

const DIST = 'E:/github/afarer/dist';

function htmlUnescape(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

(async () => {
  const yaml = require('E:/github/afarer/node_modules/js-yaml');
  const mod = await import('file:///E:/github/afarer/src/data/biz-solutions/translations/de.ts');
  const de = mod.default;
  const enPartsDir = 'C:/Users/Helleo/AppData/Local/Temp/deveco/de_sol_work/en_parts';
  const enBySlug = {};
  for (const f of fs.readdirSync(enPartsDir)) {
    const slug = f.replace(/^\d+_/, '').replace(/\.yaml$/, '');
    enBySlug[slug] = yaml.load(fs.readFileSync(path.join(enPartsDir, f), 'utf8'));
  }
  const slugs = Object.keys(de);
  console.log('de slugs:', slugs.length, '| EN parts:', Object.keys(enBySlug).length);

  let fail = 0;
  for (const s of slugs) {
    const f = path.join(DIST, 'de', 'solutions', s, 'index.html');
    if (!fs.existsSync(f)) {
      console.log('MISSING FILE:', f);
      fail++;
      continue;
    }
    const html = htmlUnescape(fs.readFileSync(f, 'utf8'));
    const entry = de[s];
    const checks = [
      ['clientType', entry.clientType],
      ['hero.title', entry.hero && entry.hero.title],
      ['challenge.title', entry.challenge && entry.challenge.title],
      ['cta.primary', entry.cta && entry.cta.primaryAction && entry.cta.primaryAction.text],
    ];
    if (entry.faqs && entry.faqs.length) checks.push(['faq0.q', entry.faqs[0].question]);
    for (const [name, val] of checks) {
      if (val && !html.includes(val)) {
        console.log('MISSING TEXT:', s, name, JSON.stringify(String(val).slice(0, 60)));
        fail++;
      }
    }
    // EN body must NOT leak into de page
    const enSol = enBySlug[s];
    if (enSol && enSol.clientType && html.includes(enSol.clientType)) {
      console.log('EN LEAK (clientType):', s, JSON.stringify(enSol.clientType));
      fail++;
    }
  }
  console.log('--- spot checks ---');
  // hr has no solution overrides -> EN fallback
  const hrFile = path.join(DIST, 'hr', 'solutions', 'sup-brand-startup', 'index.html');
  if (fs.existsSync(hrFile)) {
    const hr = htmlUnescape(fs.readFileSync(hrFile, 'utf8'));
    const enSlug = enBySlug['sup-brand-startup'];
    console.log('hr EN fallback clientType present:', hr.includes(enSlug.clientType));
  } else {
    console.log('hr file missing');
    fail++;
  }
  // fr sup-brand-startup is meta-only -> EN body fallback
  const frFile = path.join(DIST, 'fr', 'solutions', 'sup-brand-startup', 'index.html');
  if (fs.existsSync(frFile)) {
    const fr = htmlUnescape(fs.readFileSync(frFile, 'utf8'));
    const enSlug = enBySlug['sup-brand-startup'];
    console.log('fr EN fallback clientType present:', fr.includes(enSlug.clientType));
  } else {
    console.log('fr file missing');
    fail++;
  }
  // de page count
  const deDir = path.join(DIST, 'de', 'solutions');
  const built = fs.readdirSync(deDir).filter((d) => fs.existsSync(path.join(deDir, d, 'index.html')));
  console.log('de solutions pages built:', built.length);
  console.log(fail === 0 ? 'VERIFY OK' : 'VERIFY FAILED: ' + fail);
  process.exit(fail === 0 ? 0 : 1);
})().catch((e) => {
  console.error('ERROR', e);
  process.exit(1);
});
