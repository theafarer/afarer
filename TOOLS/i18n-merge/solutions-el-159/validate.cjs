const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const WORK = 'C:/Users/Helleo/AppData/Local/Temp/deveco/el_sol_work';

const enFiles = fs
  .readdirSync(path.join(WORK, 'en_parts'))
  .filter((f) => /^\d{2}_.*\.yaml$/.test(f))
  .sort();
const plFiles = fs
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
  const plPath = path.join(WORK, 'parts', f);
  if (!fs.existsSync(plPath)) {
    console.log('MISSING pl part:', f);
    errors++;
    continue;
  }
  const en = yaml.load(fs.readFileSync(path.join(WORK, 'en_parts', f), 'utf8'));
  const pl = yaml.load(fs.readFileSync(plPath, 'utf8'));
  // pl parts intentionally omit hero.image.src (src is taken from existing ts at merge time)
  if (en.hero && en.hero.image && en.hero.image.src) delete en.hero.image.src;
  const issues = [];
  const enShape = shape(en, 0);
  const plShape = shape(pl, 0);
  if (enShape !== plShape) {
    issues.push('SHAPE MISMATCH');
    // locate first divergence
    const walk = (a, b, p) => {
      if (issues.length > 3) return;
      if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
          issues.push('len ' + p + ': en=' + a.length + ' pl=' + b.length);
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
        issues.push('type ' + p + ': en=' + typeof a + ' pl=' + typeof b);
      }
    };
    walk(en, pl, '');
  }
  if (pl.hero && pl.hero.image && pl.hero.image.src) {
    issues.push('hero.image.src must NOT be in pl part');
  }
  if (pl.cta) {
    for (const act of ['primaryAction', 'secondaryAction']) {
      if (pl.cta[act] && pl.cta[act].href) issues.push('cta.' + act + '.href must NOT be in pl part');
    }
  }
  if (issues.length) {
    console.log(f, '::', issues.join(' | '));
    errors++;
  }
}
console.log('checked', enFiles.length, 'parts, pl parts present:', plFiles.length, ', errors:', errors);
