const fs = require('fs');
const P = 'C:/Users/Helleo/AppData/Local/Temp/deveco/';
const ref = JSON.parse(fs.readFileSync(P + '_faq-en.json', 'utf8'))
  .map((x) => x.id)
  .join(',');
const PARTS = {
  ar: ['p1', 'p2'],
  el: ['p1', 'p2'],
  fi: ['p1', 'p2'],
  ro: ['p1', 'p2'],
  th: ['p1', 'p2a', 'p2b'],
  tr: ['p1', 'p2'],
};
let fail = 0;
for (const l of Object.keys(PARTS)) {
  const all = PARTS[l].flatMap((s) => JSON.parse(fs.readFileSync(P + '_faq-' + l + '-' + s + '.json', 'utf8')));
  const ids = all.map((x) => x.id).join(',');
  const n = all.length;
  const badQ = all.filter((x) => !x.q || !x.a || x.q.length < 5 || x.a.length < 20).length;
  const okIds = ids === ref;
  console.log(l + ': ' + n + ' items, ids=' + (okIds ? 'OK' : 'MISMATCH') + ', bad=' + badQ);
  if (n !== 53 || !okIds || badQ > 0) fail = 1;
  else fs.writeFileSync(P + '_faq-' + l + '.json', JSON.stringify(all, null, 2).replace(/\r\n/g, '\n') + '\n');
}
if (fail) process.exit(1);
console.log('ALL MERGED OK');
