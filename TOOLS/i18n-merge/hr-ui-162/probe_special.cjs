const fs = require('fs');
const en = JSON.parse(fs.readFileSync(__dirname + '/en_ui.json', 'utf8'));
const keys = Object.keys(en);
const issues = { quotes: [], newline: [], html: [], amp: [] };
for (const k of keys) {
  const v = en[k];
  if (/["']/.test(v)) issues.quotes.push(k + ' => ' + v.slice(0, 80));
  if (/\n/.test(v)) issues.newline.push(k);
  if (/<[a-z]/i.test(v)) issues.html.push(k + ' => ' + v.slice(0, 80));
  if (/&[a-z]+;/.test(v)) issues.amp.push(k + ' => ' + v.slice(0, 80));
}
for (const [name, arr] of Object.entries(issues)) {
  console.log('==', name, arr.length);
  for (const x of arr.slice(0, 15)) console.log('  ', x);
}
