const fs = require('fs');
const path = require('path');
const DIST = 'E:/github/afarer/dist';
const read = (p) => fs.readFileSync(path.join(DIST, p), 'utf8');

let fail = 0;
function check(name, cond) {
  console.log((cond ? 'PASS' : 'FAIL') + '  ' + name);
  if (!cond) fail++;
}

// --- all 27 new slugs (EN 49-75) must now be translated on ro + th ---
const NEW_SLUGS = [
  'afarer-sup-explorer-11-review',
  'afarer-sup-tour-12-review',
  'afarer-airdeck-360-review',
  'afarer-airdeck-270-review',
  'afarer-rib-330-review',
  'afarer-rib-450-patrol-review',
  'afarer-life-vest-classic-review',
  'afarer-life-vest-pro-review',
  'afarer-oars-pump-set-review',
  'afarer-zb-mt350-review',
  'sup-vs-surfboard',
  'kayak-vs-sup',
  'sup-fitness-workout',
  'sup-travel-guide',
  'sup-paddle-guide',
  'sup-anchor-guide',
  'winter-paddle-boarding',
  'sup-with-dog',
  'sup-self-rescue',
  'sup-launch-techniques',
  'sup-navigation-guide',
  'sup-hydration-sun-protection',
  'ocean-kayaking-beginners',
  'inflatable-kayak-guide',
  'sup-leash-guide',
  'sup-pump-guide',
  'sup-accessories-guide',
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
check('ro: all 27 new pages translated (got ' + roTranslated + ')', roTranslated === 27);
check('th: all 27 new pages translated (got ' + thTranslated + ')', thTranslated === 27);

// --- spot content checks (batch-4 texts, not EN fallback) ---
const roAnchor = read('ro/v2/sup-anchor-guide/index.html');
check('ro sup-anchor-guide has RO trolley text', roAnchor.includes('troliu de ancoră'));
const roPump = read('ro/v2/sup-pump-guide/index.html');
check('ro sup-pump-guide has RO dual-chamber text', roPump.includes('cu două camere'));
const roWinter = read('ro/v2/winter-paddle-boarding/index.html');
check('ro winter-paddle-boarding has RO wetsuit text', roWinter.includes('costum de neopren'));
const roRescue = read('ro/v2/sup-self-rescue/index.html');
check('ro sup-self-rescue has RO self-rescue text', roRescue.includes('auto-salvare'));
const roVestPro = read('ro/v2/afarer-life-vest-pro-review/index.html');
check('ro life-vest-pro has RO brand text', roVestPro.includes('afarer Life Vest Pro'));
const thPaddle = read('th/v2/sup-paddle-guide/index.html');
check('th sup-paddle-guide has TH paddle-guide title', thPaddle.includes('คู่มือไม้พาย SUP'));
const thKayakSup = read('th/v2/kayak-vs-sup/index.html');
check('th kayak-vs-sup has TH all-around vs touring title', thKayakSup.includes('SUP ออลอะราวด์กับ SUP ทัวริ่ง'));
const thWinter = read('th/v2/winter-paddle-boarding/index.html');
check('th winter-paddle-boarding has TH cold-shock text', thWinter.includes('ภาวะช็อกจากน้ำเย็น'));
const thPump = read('th/v2/sup-pump-guide/index.html');
check('th sup-pump-guide has TH dual-chamber text', thPump.includes('ปั๊มมือสองช่อง'));
const thAccessories = read('th/v2/sup-accessories-guide/index.html');
check('th sup-accessories-guide has TH accessories title', thAccessories.includes('อุปกรณ์เสริม SUP'));

// --- regression: batch-1/2/3 pages still translated ---
const roOld = read('ro/v2/how-to-choose-a-surfboard-for-beginners/index.html');
check('ro batch-1 page still RO', roOld.includes('placă de surf'));
const thOld = read('th/v2/how-to-choose-a-surfboard-for-beginners/index.html');
check('th batch-1 page still TH', thOld.includes('บอร์ดเซิร์ฟ'));
const roOld2 = read('ro/v2/sup-size-guide/index.html');
check('ro batch-2 page still RO', roOld2.includes('Ghid de dimensiuni SUP'));
const thOld2 = read('th/v2/yoga-sup-guide/index.html');
check('th batch-2 page still TH', thOld2.includes('โยคะบน SUP'));
const roOld3 = read('ro/v2/cold-water-safety-guide/index.html');
check('ro batch-3 page still RO', roOld3.includes('Șocul la rece'));
const thOld3 = read('th/v2/wind-conditions-sup/index.html');
check('th batch-3 page still TH', thOld3.includes('มาตราโบฟอร์ต'));

// --- index pages: 75 entries each ---
for (const lang of ['ro', 'th']) {
  const idx = read(lang + '/v2/index.html');
  check(lang + ' v2 index exists', idx.length > 0);
  const links = idx.match(/href="[^"]*\/v2\/[a-z0-9-]+"/g) || [];
  const unique = new Set(links.map((l) => l.replace(/.*\/v2\//, '').replace(/"$/, '')));
  check(lang + ' v2 index lists 75 slugs (got ' + unique.size + ')', unique.size === 75);
}

// --- other-language fallback page (es, no overlay) still EN for new slug ---
const esPage = read('es/v2/sup-paddle-guide/index.html');
check('es new-slug page is EN fallback', esPage.includes('SUP Paddle Guide'));

console.log(fail === 0 ? 'DIST VERIFY ALL PASS' : 'DIST VERIFY FAILURES: ' + fail);
process.exit(fail === 0 ? 0 : 1);
