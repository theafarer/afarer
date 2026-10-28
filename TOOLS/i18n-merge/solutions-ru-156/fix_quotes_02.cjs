const fs = require('fs');
const path = 'parts/02_expand-outdoor-brand-water-sports.yaml';
let text = fs.readFileSync(path, 'utf8');
const before = (text.match(/"/g) || []).length;
text = text.replace(/"/g, '\u2033');
fs.writeFileSync(path, text, 'utf8');
console.log('replaced', before, 'straight quotes with U+2033');
