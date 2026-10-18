const fs = require('fs');
const path = require('path');
const DIST = 'E:/github/afarer/dist';
const read = (p) => fs.readFileSync(path.join(DIST, p), 'utf8');

let fail = 0;
function check(name, cond) {
  console.log((cond ? 'PASS' : 'FAIL') + '  ' + name);
  if (!cond) fail++;
}

// ro translated page
const roPage = read('ro/v2/how-to-choose-a-surfboard-for-beginners/index.html');
check('ro translated page exists', roPage.length > 0);
check('ro page has RO title', roPage.includes('placă de surf'));
check('ro page has RO diacritics', /ță|ș|ă/.test(roPage));
check('ro page TLDR ro', roPage.includes('Concentrează-te pe volum'));
// EN fallback page (slug 17, not translated)
const roFallback = read('ro/v2/afarer-surfboard-pro/index.html');
check('ro fallback page exists', roFallback.length > 0);
check('ro fallback is EN text', roFallback.includes('The afarer Surfboard Pro'));
// th
const thPage = read('th/v2/how-to-choose-a-surfboard-for-beginners/index.html');
check('th translated page exists', thPage.length > 0);
check('th page has TH text', thPage.includes('บอร์ดเซิร์ฟ'));
check('th page TLDR th', thPage.includes('ผู้เริ่มต้นควรเริ่มด้วยบอร์ดโฟม'));
const thFallback = read('th/v2/afarer-surfboard-pro/index.html');
check('th fallback is EN text', thFallback.includes('The afarer Surfboard Pro'));
// index pages: 75 entries each
for (const lang of ['ro', 'th']) {
  const idx = read(lang + '/v2/index.html');
  check(lang + ' v2 index exists', idx.length > 0);
  // count occurrences of href to v2 slugs on index
  const links = idx.match(/href="[^"]*\/v2\/[a-z0-9-]+"/g) || [];
  const unique = new Set(links.map((l) => l.replace(/.*\/v2\//, '').replace(/"$/, '')));
  check(lang + ' v2 index lists 75 slugs (got ' + unique.size + ')', unique.size === 75);
}
// journal + faq consumers still build (spot check ro journal page)
const roJournal = read('ro/journal/index.html');
check('ro journal exists', roJournal.length > 0);
const roFaq = read('ro/faq/index.html');
check('ro faq exists', roFaq.length > 0);

console.log(fail === 0 ? 'DIST VERIFY ALL PASS' : 'DIST VERIFY FAILURES: ' + fail);
process.exit(fail === 0 ? 0 : 1);
