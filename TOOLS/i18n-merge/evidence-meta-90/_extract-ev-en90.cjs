const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const src = yaml.load(fs.readFileSync('E:/github/afarer/src/data/site/evidence.yaml', 'utf8'));
const out = {};
for (const cs of src.case_studies) {
  out[cs.id] = {
    client: cs.client,
    product: cs.product,
    challenge: cs.challenge,
    enTitle: `${cs.client} — ${cs.product} | Afarer`,
    enDesc: cs.challenge.substring(0, 160),
  };
}
fs.writeFileSync('C:/Users/Helleo/AppData/Local/Temp/deveco/_ev-meta-en.json', JSON.stringify(out, null, 2) + '\n');
console.log('slugs: ' + Object.keys(out).length);
for (const [id, v] of Object.entries(out)) {
  console.log(id + ' | ' + v.enTitle + ' | descLen=' + v.enDesc.length);
}
