const fs = require('fs');
const path = require('path');
const yaml = require(path.join('E:', 'github', 'afarer', 'node_modules', 'js-yaml'));

const base = __dirname;
const enDir = path.join(base, 'en_parts');
const hrDir = path.join(base, 'parts');

const expectedSlugs = [
  'sup-brand-startup',
  'expand-outdoor-brand-water-sports',
  'inflatable-technology-for-surf-business',
  'ecommerce-sup-brand-development',
  'create-fishing-sup-brand',
  'sup-yoga-wellness-equipment',
  'creator-influencer-sup-brand',
  'commercial-sup-fleet',
  'durable-sup-rental-fleet',
  'resort-water-activity-package',
  'sup-academy-equipment-program',
  'luxury-portable-sup-package',
  'retail-private-label-program',
  'regional-oem-supply-chain-partner',
  'corporate-sup-event-package',
  'expand-your-water-sports-portfolio',
  'pet-friendly-paddle-board-program',
  'complete-beach-activity-equipment-solutions',
  'commercial-water-park-sup-fleet',
  'premium-custom-sup-collection',
  'destination-water-sports-package',
  'kids-exploration-sup-program',
  'professional-water-rescue-sup-system',
  'eco-research-monitoring-sup-platform',
];

let errors = [];
let totalKeys = 0;

function countKeys(o) {
  let n = 0;
  if (o && typeof o === 'object') {
    if (Array.isArray(o)) {
      for (const x of o) n += countKeys(x);
    } else {
      for (const k of Object.keys(o)) n += 1 + countKeys(o[k]);
    }
  }
  return n;
}

function compareStructure(en, hr, p) {
  if (en === null || en === undefined) return;
  if (Array.isArray(en)) {
    if (!Array.isArray(hr)) {
      errors.push(p + ': expected array');
      return;
    }
    if (hr.length !== en.length) errors.push(p + ': length ' + hr.length + ' != ' + en.length);
    en.forEach((_, i) => compareStructure(en[i], hr[i], p + '[' + i + ']'));
  } else if (typeof en === 'object') {
    if (!hr || typeof hr !== 'object') {
      errors.push(p + ': expected object');
      return;
    }
    for (const k of Object.keys(en)) {
      if (!(k in hr)) errors.push(p + '.' + k + ': missing');
      else compareStructure(en[k], hr[k], p + '.' + k);
    }
    for (const k of Object.keys(hr)) {
      if (!(k in en)) errors.push(p + '.' + k + ': EXTRA key (must drop ' + k + ')');
    }
  }
}

const enFiles = fs
  .readdirSync(enDir)
  .filter((f) => f.endsWith('.yaml'))
  .sort();
if (enFiles.length !== 24) errors.push('en_parts count ' + enFiles.length + ' != 24');

expectedSlugs.forEach((slug, i) => {
  const nn = String(i + 1).padStart(2, '0');
  const enF = path.join(enDir, nn + '_' + slug + '.yaml');
  const hrF = path.join(hrDir, nn + '_' + slug + '.yaml');
  if (!fs.existsSync(enF)) {
    errors.push('missing EN ' + nn + '_' + slug);
    return;
  }
  if (!fs.existsSync(hrF)) {
    errors.push('missing HR ' + nn + '_' + slug);
    return;
  }
  const en = yaml.load(fs.readFileSync(enF, 'utf8'));
  const hr = yaml.load(fs.readFileSync(hrF, 'utf8'));

  // meta.title must contain {SITE}
  if (!hr.meta || !hr.meta.title || hr.meta.title.indexOf('{SITE}') < 0)
    errors.push(slug + ': meta.title missing {SITE}');
  if (
    hr.meta &&
    hr.meta.title &&
    hr.meta.title.indexOf(slug) >= 0 &&
    hr.meta.title.indexOf('{SITE}') < hr.meta.title.indexOf(slug)
  )
    errors.push(slug + ': {SITE} should be at end of meta.title');
  // must drop EN-only fields
  ['brandName', 'keywords'].forEach((k) => {
    if (k in hr) errors.push(slug + ': must drop ' + k);
  });
  if (hr.hero && hr.hero.image && 'src' in hr.hero.image) errors.push(slug + ': hero.image.src must be dropped');
  if (hr.cta) {
    ['primaryAction', 'secondaryAction'].forEach((a) => {
      if (hr.cta[a] && 'href' in hr.cta[a]) errors.push(slug + ': cta.' + a + '.href must be dropped');
    });
  }
  // structure parity against EN minus dropped fields
  const enCmp = JSON.parse(JSON.stringify(en));
  delete enCmp.brandName;
  delete enCmp.keywords;
  if (enCmp.hero) {
    if (enCmp.hero.image) delete enCmp.hero.image.src;
  }
  if (enCmp.cta) {
    if (enCmp.cta.primaryAction) delete enCmp.cta.primaryAction.href;
    if (enCmp.cta.secondaryAction) delete enCmp.cta.secondaryAction.href;
  }
  compareStructure(enCmp, hr, slug);

  // stray chars: CJK, Cyrillic, mojibake markers
  const raw = fs.readFileSync(hrF, 'utf8');
  const badRe = /[\u0400-\u04FF\u4E00-\u9FFF\u3040-\u30FF\uFFFD\u00C3\u00E2]/;
  const m = badRe.exec(raw);
  if (m)
    errors.push(
      slug +
        ': stray char U+' +
        m[0].codePointAt(0).toString(16) +
        ' at "' +
        raw.slice(Math.max(0, m.index - 20), m.index + 20).replace(/\r?\n/g, ' ') +
        '"'
    );

  totalKeys += countKeys(hr);
});

// empty-string check across all parts
fs.readdirSync(hrDir)
  .filter((f) => f.endsWith('.yaml'))
  .forEach((f) => {
    const raw = fs.readFileSync(path.join(hrDir, f), 'utf8');
    const lines = raw.split(/\r?\n/);
    lines.forEach((ln, i) => {
      const mm = /^(\s*)([\w'"\[\]]+):\s*$/.exec(ln);
      if (mm) {
        const next = lines[i + 1] || '';
        if (!/^\s/.test(next) && next.trim() !== '')
          errors.push(f + ':' + (i + 2) + ': scalar key with empty value: ' + ln.trim());
      }
      if (/:\s*''\s*$/.test(ln) || /:\s*""\s*$/.test(ln))
        errors.push(f + ':' + (i + 1) + ': empty string value: ' + ln.trim());
    });
  });

console.log('parts checked: 24, total hr keys: ' + totalKeys);
if (errors.length) {
  console.log('ERRORS (' + errors.length + '):');
  errors.forEach((e) => console.log(' - ' + e));
  process.exit(1);
}
console.log('ALL VALIDATION PASSED');
