const fs = require('fs');
const path = require('path');
const yaml = require(path.join('E:', 'github', 'afarer', 'node_modules', 'js-yaml'));

const base = __dirname;
const enDir = path.join(base, 'en_parts');
const hrDir = path.join(base, 'parts');

let errors = [];

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

const hrFiles = fs
  .readdirSync(hrDir)
  .filter((f) => f.endsWith('.yaml'))
  .sort();
hrFiles.forEach((f) => {
  const enF = path.join(enDir, f);
  if (!fs.existsSync(enF)) {
    errors.push(f + ': no matching EN part');
    return;
  }
  const en = yaml.load(fs.readFileSync(enF, 'utf8'));
  const hr = yaml.load(fs.readFileSync(path.join(hrDir, f), 'utf8'));
  if (!hr.meta || !hr.meta.title || hr.meta.title.indexOf('{SITE}') < 0) errors.push(f + ': meta.title missing {SITE}');
  ['brandName', 'keywords'].forEach((k) => {
    if (k in hr) errors.push(f + ': must drop ' + k);
  });
  if (hr.hero && hr.hero.image && 'src' in hr.hero.image) errors.push(f + ': hero.image.src must be dropped');
  if (hr.cta) {
    ['primaryAction', 'secondaryAction'].forEach((a) => {
      if (hr.cta[a] && 'href' in hr.cta[a]) errors.push(f + ': cta.' + a + '.href must be dropped');
    });
  }
  const enCmp = JSON.parse(JSON.stringify(en));
  delete enCmp.brandName;
  delete enCmp.keywords;
  if (enCmp.hero && enCmp.hero.image) delete enCmp.hero.image.src;
  if (enCmp.cta) {
    if (enCmp.cta.primaryAction) delete enCmp.cta.primaryAction.href;
    if (enCmp.cta.secondaryAction) delete enCmp.cta.secondaryAction.href;
  }
  compareStructure(enCmp, hr, f.replace('.yaml', ''));
  console.log('checked ' + f);
});

if (errors.length) {
  console.log('ERRORS (' + errors.length + '):');
  errors.forEach((e) => console.log(' - ' + e));
  process.exit(1);
}
console.log('PARTIAL VALIDATION PASSED for ' + hrFiles.length + ' parts');
