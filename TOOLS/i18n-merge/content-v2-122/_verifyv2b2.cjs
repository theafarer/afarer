const fs = require('fs');
const path = require('path');
const DIST = 'E:/github/afarer/dist';
const read = (p) => fs.readFileSync(path.join(DIST, p), 'utf8');

let fail = 0;
function check(name, cond) {
  console.log((cond ? 'PASS' : 'FAIL') + '  ' + name);
  if (!cond) fail++;
}

// --- all 16 new slugs (EN 17-32) must now be translated on ro + th ---
const NEW_SLUGS = [
  'afarer-surfboard-pro',
  'afarer-wetsuit-pro',
  'why-afarer-exists',
  'ocean-safety-and-responsibility',
  'sup-size-guide',
  'beginner-sup-guide',
  'touring-sup-guide',
  'fishing-sup-guide',
  'yoga-sup-guide',
  'how-to-choose-inflatable-sup',
  'inflatable-sup-maintenance',
  'inflatable-sup-storage',
  'inflatable-sup-repair',
  'paddle-board-size-guide',
  'inflatable-boat-buying-guide',
  'pvc-vs-hypalon-boats',
];

let roTranslated = 0;
let thTranslated = 0;
for (const slug of NEW_SLUGS) {
  const roPage = read(`ro/v2/${slug}/index.html`);
  if (roPage.includes('placă de surf') || /ă|â|î|ș|ț/.test(roPage)) roTranslated++;
  else console.log('  ro NOT translated: ' + slug);
  const thPage = read(`th/v2/${slug}/index.html`);
  if (/[\u0e00-\u0e7f]/.test(thPage)) thTranslated++;
  else console.log('  th NOT translated: ' + slug);
}
check('ro: all 16 new pages translated (got ' + roTranslated + ')', roTranslated === 16);
check('th: all 16 new pages translated (got ' + thTranslated + ')', thTranslated === 16);

// --- spot content checks (new batch texts, not EN fallback) ---
const roSup = read('ro/v2/sup-size-guide/index.html');
check('ro sup-size-guide has RO title', roSup.includes('Ghid de dimensiuni SUP'));
check('ro sup-size-guide has RO tldr text', roSup.includes('SUP-uri all-around'));
const thYoga = read('th/v2/yoga-sup-guide/index.html');
check('th yoga-sup-guide has TH title', thYoga.includes('โยคะบน SUP'));
check('th yoga-sup-guide has TH pose text', thYoga.includes('ท่าสุนัขหันหน้าลง'));
const roPvc = read('ro/v2/pvc-vs-hypalon-boats/index.html');
check('ro pvc-vs-hypalon has RO text', roPvc.includes('PVC-ul triplu strat'));
const thRepair = read('th/v2/inflatable-sup-repair/index.html');
check('th repair has TH text', thRepair.includes('การซ่อม SUP เป่าลม'));

// --- EN fallback for records 33+ still intact (not translated yet) ---
for (const [lang, fb] of [
  ['ro', 'ro/v2/how-long-inflatable-boats-last/index.html'],
  ['th', 'th/v2/how-long-inflatable-boats-last/index.html'],
]) {
  const page = read(fb);
  check(lang + ' fallback (record 33) is EN text', page.includes('How Long Do Inflatable SUPs Last?'));
}

// --- batch-1 pages still translated (no regression) ---
const roOld = read('ro/v2/how-to-choose-a-surfboard-for-beginners/index.html');
check('ro batch-1 page still RO', roOld.includes('placă de surf'));
const thOld = read('th/v2/how-to-choose-a-surfboard-for-beginners/index.html');
check('th batch-1 page still TH', thOld.includes('บอร์ดเซิร์ฟ'));

// --- index pages: 75 entries each ---
for (const lang of ['ro', 'th']) {
  const idx = read(lang + '/v2/index.html');
  check(lang + ' v2 index exists', idx.length > 0);
  const links = idx.match(/href="[^"]*\/v2\/[a-z0-9-]+"/g) || [];
  const unique = new Set(links.map((l) => l.replace(/.*\/v2\//, '').replace(/"$/, '')));
  check(lang + ' v2 index lists 75 slugs (got ' + unique.size + ')', unique.size === 75);
}

// --- other-language fallback page (es, no overlay) still EN for new slug ---
const esPage = read('es/v2/sup-size-guide/index.html');
check('es new-slug page is EN fallback', esPage.includes('SUP Size Guide'));

console.log(fail === 0 ? 'DIST VERIFY ALL PASS' : 'DIST VERIFY FAILURES: ' + fail);
process.exit(fail === 0 ? 0 : 1);
