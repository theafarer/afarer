const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const TEMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const EN_SLUGS = [
  'afarer-sup-explorer-11-review', 'afarer-sup-tour-12-review', 'afarer-airdeck-360-review',
  'afarer-airdeck-270-review', 'afarer-rib-330-review', 'afarer-rib-450-patrol-review',
  'afarer-life-vest-classic-review', 'afarer-life-vest-pro-review', 'afarer-oars-pump-set-review',
  'afarer-zb-mt350-review', 'sup-vs-surfboard', 'kayak-vs-sup', 'sup-fitness-workout',
  'sup-travel-guide', 'sup-paddle-guide', 'sup-anchor-guide', 'winter-paddle-boarding',
  'sup-with-dog', 'sup-self-rescue', 'sup-launch-techniques', 'sup-navigation-guide',
  'sup-hydration-sun-protection', 'ocean-kayaking-beginners', 'inflatable-kayak-guide',
  'sup-leash-guide', 'sup-pump-guide', 'sup-accessories-guide'
];
const EXPECT49 = EN_SLUGS; // 27 slugs, order = #49..#75
const FIELDS = ['slug', 'title', 'description', 'definition', 'tldr', 'problem', 'explanation', 'solution', 'recommendation', 'faq'];

let fail = 0;
function checkLang(lang) {
  let idx = 0;
  for (const p of ['p1', 'p2', 'p3', 'p4']) {
    const f = path.join(TEMP, `_v2${lang}_${p}.yaml`);
    let docs;
    try {
      docs = yaml.load(fs.readFileSync(f, 'utf8'), { json: true });
    } catch (e) {
      console.log(`FATAL ${lang} ${p}: YAML parse error: ${e.message}`);
      fail++; continue;
    }
    if (!Array.isArray(docs)) { console.log(`FATAL ${lang} ${p}: not an array`); fail++; continue; }
    docs.forEach((rec, i) => {
      const want = EXPECT49[idx];
      if (rec.slug !== want) { console.log(`ERR ${lang} ${p} #${i}: slug "${rec.slug}" expected "${want}"`); fail++; }
      for (const k of FIELDS) {
        if (rec[k] === undefined || rec[k] === null || rec[k] === '') { console.log(`ERR ${lang} ${p} ${rec.slug}: missing/empty field "${k}"`); fail++; }
      }
      if (!Array.isArray(rec.faq) || rec.faq.length !== 4) { console.log(`ERR ${lang} ${p} ${rec.slug}: faq len=${rec.faq ? rec.faq.length : 'n/a'}`); fail++; }
      else {
        rec.faq.forEach((item, j) => {
          if (item.q === undefined || item.a === undefined || item.q === '' || item.a === '') {
            console.log(`ERR ${lang} ${p} ${rec.slug}: faq[${j}] missing q/a`); fail++;
          }
        });
      }
      idx++;
    });
    console.log(`${lang} ${p}: ${docs.length} records OK-parsed`);
  }
  if (idx !== 27) { console.log(`FATAL ${lang}: total ${idx} != 27`); fail++; }
}

checkLang('ro');
checkLang('th');
console.log(fail === 0 ? 'ALL_PARTS_OK' : `FAILURES: ${fail}`);
process.exit(fail === 0 ? 0 : 1);
