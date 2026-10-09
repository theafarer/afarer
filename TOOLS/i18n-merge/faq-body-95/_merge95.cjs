const fs = require('fs');
const P = 'C:/Users/Helleo/AppData/Local/Temp/deveco/';
const ref = JSON.parse(fs.readFileSync(P + '_faq-da.json', 'utf8'))
  .map((x) => x.id)
  .join(',');
let fail = 0;
for (const l of ['nl', 'no', 'pl', 'sv']) {
  const a = JSON.parse(fs.readFileSync(P + '_faq-' + l + '-p1.json', 'utf8'));
  const b = JSON.parse(fs.readFileSync(P + '_faq-' + l + '-p2.json', 'utf8'));
  const all = a.concat(b);
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
