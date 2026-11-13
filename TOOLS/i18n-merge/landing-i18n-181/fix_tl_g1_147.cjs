const fs = require('fs');
const p = 'C:/Users/Helleo/AppData/Local/Temp/deveco/gap_work/out2/tl/g1.json';
const a = JSON.parse(fs.readFileSync(p, 'utf8'));
a[147].value = '$700-$1,200: Premium na SUP';
fs.writeFileSync(p, JSON.stringify(a, null, 2), 'utf8');
console.log('OK:', a[147].key, '->', a[147].value);
