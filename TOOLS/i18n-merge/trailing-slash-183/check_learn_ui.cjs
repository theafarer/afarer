const fs = require('fs');
const slugs = ['sup','water-safety','sup-basics','drop-stitch-core','inflatable-technology','intermediate-techniques','materials','safety-in-water-sports','sup-size-guide'];
const locales = ['hr','hu','sk','bg','sl','sr','id','he','ms','lt','lv','et','tl'];
let allOk = true;
for (const l of locales) {
  const c = fs.readFileSync('E:/github/afarer/src/i18n/generated/ui/' + l + '.ts', 'utf8');
  const miss = slugs.filter(s => !c.includes('"learn.' + s + '.title"') || !c.includes('"learn.' + s + '.description"'));
  if (miss.length) { allOk = false; console.log(l + ' MISSING:', miss.join(',')); }
}
console.log(allOk ? 'ALL 9 slugs x 13 locales COVERED in UI dict' : 'GAPS FOUND');
