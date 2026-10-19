const fs = require('fs');
const path = require('path');
const DIST = 'E:/github/afarer/dist';
const read = (p) => fs.readFileSync(path.join(DIST, p), 'utf8');

let fail = 0;
function check(name, cond) {
  console.log((cond ? 'PASS' : 'FAIL') + '  ' + name);
  if (!cond) fail++;
}

// --- all 16 new slugs (EN 33-48) must now be translated on ro + th ---
const NEW_SLUGS = [
  'how-long-inflatable-boats-last',
  'inflatable-boat-maintenance',
  'marine-life-vest-guide',
  'afarer-vs-red-paddle',
  'afarer-vs-irocker',
  'afarer-vs-bluefin',
  'inflatable-sup-vs-hard-board',
  'wetsuit-care-guide',
  'how-to-choose-a-wetsuit',
  'wetsuit-repair-guide',
  'sup-safety-guide',
  'cold-water-safety-guide',
  'life-jacket-buying-guide',
  'understanding-tides',
  'wind-conditions-sup',
  'weather-planning-water-sports',
];

let roTranslated = 0;
let thTranslated = 0;
for (const slug of NEW_SLUGS) {
  const roPage = read(`ro/v2/${slug}/index.html`);
  if (/ă|â|î|ș|ț/.test(roPage)) roTranslated++;
  else console.log('  ro NOT translated: ' + slug);
  const thPage = read(`th/v2/${slug}/index.html`);
  if (/[\u0e00-\u0e7f]/.test(thPage)) thTranslated++;
  else console.log('  th NOT translated: ' + slug);
}
check('ro: all 16 new pages translated (got ' + roTranslated + ')', roTranslated === 16);
check('th: all 16 new pages translated (got ' + thTranslated + ')', thTranslated === 16);

// --- spot content checks (new batch texts, not EN fallback) ---
const roLife = read('ro/v2/marine-life-vest-guide/index.html');
check('ro marine-life-vest has RO title', roLife.includes('Ghidul vestei de salvare marine'));
check('ro marine-life-vest has RO brand text', roLife.includes('afarer Life Vest Pro'));
const thTides = read('th/v2/understanding-tides/index.html');
check('th understanding-tides has TH title', thTides.includes('น้ำขึ้นน้ำลง'));
check('th understanding-tides has TH spring-tide text', thTides.includes('spring tide'));
const roBluefin = read('ro/v2/afarer-vs-bluefin/index.html');
check('ro afarer-vs-bluefin has RO text', roBluefin.includes('reduceri permanente'));
const thWind = read('th/v2/wind-conditions-sup/index.html');
check('th wind-conditions has TH text', thWind.includes('มาตราโบฟอร์ต'));
const roCold = read('ro/v2/cold-water-safety-guide/index.html');
check('ro cold-water has RO text', roCold.includes('Șocul la rece'));
const thWetsuitCare = read('th/v2/wetsuit-care-guide/index.html');
check('th wetsuit-care has TH text', thWetsuitCare.includes('แชมพูชุดดำน้ำ'));

// --- EN fallback for records 49+ still intact (not translated yet) ---
for (const [lang, fb] of [
  ['ro', 'ro/v2/afarer-sup-explorer-11-review/index.html'],
  ['th', 'th/v2/afarer-sup-explorer-11-review/index.html'],
]) {
  const page = read(fb);
  check(lang + ' fallback (record 49) is EN text', page.includes('afarer SUP Explorer 11'));
}

// --- batch-1/2 pages still translated (no regression) ---
const roOld = read('ro/v2/how-to-choose-a-surfboard-for-beginners/index.html');
check('ro batch-1 page still RO', roOld.includes('placă de surf'));
const thOld = read('th/v2/how-to-choose-a-surfboard-for-beginners/index.html');
check('th batch-1 page still TH', thOld.includes('บอร์ดเซิร์ฟ'));
const roOld2 = read('ro/v2/sup-size-guide/index.html');
check('ro batch-2 page still RO', roOld2.includes('Ghid de dimensiuni SUP'));
const thOld2 = read('th/v2/yoga-sup-guide/index.html');
check('th batch-2 page still TH', thOld2.includes('โยคะบน SUP'));

// --- index pages: 75 entries each ---
for (const lang of ['ro', 'th']) {
  const idx = read(lang + '/v2/index.html');
  check(lang + ' v2 index exists', idx.length > 0);
  const links = idx.match(/href="[^"]*\/v2\/[a-z0-9-]+"/g) || [];
  const unique = new Set(links.map((l) => l.replace(/.*\/v2\//, '').replace(/"$/, '')));
  check(lang + ' v2 index lists 75 slugs (got ' + unique.size + ')', unique.size === 75);
}

// --- other-language fallback page (es, no overlay) still EN for new slug ---
const esPage = read('es/v2/understanding-tides/index.html');
check('es new-slug page is EN fallback', esPage.includes('Understanding Tides'));

console.log(fail === 0 ? 'DIST VERIFY ALL PASS' : 'DIST VERIFY FAILURES: ' + fail);
process.exit(fail === 0 ? 0 : 1);
