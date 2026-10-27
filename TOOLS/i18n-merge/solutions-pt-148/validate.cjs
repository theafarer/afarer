const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const WORK = 'C:/Users/Helleo/AppData/Local/Temp/deveco/pt_sol_work';

const enFiles = fs
  .readdirSync(path.join(WORK, 'en_parts'))
  .filter((f) => /^\d{2}_.*\.yaml$/.test(f))
  .sort();
const ptFiles = fs
  .readdirSync(path.join(WORK, 'parts'))
  .filter((f) => /^\d{2}_.*\.yaml$/.test(f))
  .sort();

let errors = 0;
function shape(node, depth) {
  if (Array.isArray(node)) return '[' + node.map((n) => shape(n, depth + 1)).join(',') + ']';
  if (node && typeof node === 'object') {
    const keys = Object.keys(node);
    return '{' + keys.map((k) => k + ':' + shape(node[k], depth + 1)).join(',') + '}';
  }
  return typeof node;
}

for (const f of enFiles) {
  const ptPath = path.join(WORK, 'parts', f);
  if (!fs.existsSync(ptPath)) {
    console.log('MISSING pt part:', f);
    errors++;
    continue;
  }
  const en = yaml.load(fs.readFileSync(path.join(WORK, 'en_parts', f), 'utf8'));
  const pt = yaml.load(fs.readFileSync(ptPath, 'utf8'));
  // pt parts intentionally omit hero.image.src (src is taken from existing ts at merge time)
  if (en.hero && en.hero.image && en.hero.image.src) delete en.hero.image.src;
  const issues = [];
  const enShape = shape(en, 0);
  const ptShape = shape(pt, 0);
  if (enShape !== ptShape) {
    issues.push('SHAPE MISMATCH');
    // locate first divergence
    const walk = (a, b, p) => {
      if (issues.length > 3) return;
      if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
          issues.push('len ' + p + ': en=' + a.length + ' pt=' + b.length);
          return;
        }
        a.forEach((x, i) => walk(x, b[i], p + '[' + i + ']'));
      } else if (a && typeof a === 'object' && b && typeof b === 'object') {
        const ka = Object.keys(a),
          kb = Object.keys(b);
        for (const k of ka)
          if (!kb.includes(k)) {
            issues.push('missing key ' + p + '.' + k);
          }
        for (const k of kb)
          if (!ka.includes(k)) {
            issues.push('extra key ' + p + '.' + k);
          }
        for (const k of ka) if (kb.includes(k)) walk(a[k], b[k], p + '.' + k);
      } else if (typeof a !== typeof b) {
        issues.push('type ' + p + ': en=' + typeof a + ' pt=' + typeof b);
      }
    };
    walk(en, pt, '');
  }
  if (pt.hero && pt.hero.image && pt.hero.image.src) {
    issues.push('hero.image.src must NOT be in pt part');
  }
  if (pt.cta) {
    for (const act of ['primaryAction', 'secondaryAction']) {
      if (pt.cta[act] && pt.cta[act].href) issues.push('cta.' + act + '.href must NOT be in pt part');
    }
  }
  if (issues.length) {
    console.log(f, '::', issues.join(' | '));
    errors++;
  }
}
console.log('checked', enFiles.length, 'parts, pt parts present:', ptFiles.length, ', errors:', errors);
