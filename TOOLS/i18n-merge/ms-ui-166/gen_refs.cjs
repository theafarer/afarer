// Build per-chunk reference files: key -> {en, id} for translation consultation
const fs = require('fs');
const path = require('path');
const dir = __dirname;
const en = JSON.parse(fs.readFileSync(path.join(dir, 'en_ui.json'), 'utf8'));
const id = JSON.parse(fs.readFileSync(path.join(dir, 'id_ui.json'), 'utf8'));

for (let i = 1; i <= 13; i++) {
  const cid = 'c' + String(i).padStart(2, '0');
  const chunk = JSON.parse(fs.readFileSync(path.join(dir, cid + '_en.json'), 'utf8'));
  const ref = {};
  for (const k of Object.keys(chunk)) {
    ref[k] = { en: chunk[k], id: id[k] };
  }
  fs.writeFileSync(path.join(dir, cid + '_ref.json'), JSON.stringify(ref, null, 1), 'utf8');
  console.log(cid + '_ref.json: ' + Object.keys(ref).length + ' keys');
}
