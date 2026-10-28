const fs = require('fs');
// usage: node qfix.cjs parts/NN_xxx.yaml
const f = process.argv[2];
if (!f) {
  console.log('usage: node qfix.cjs parts/NN_xxx.yaml');
  process.exit(1);
}
const t = fs.readFileSync(f, 'utf8');
const count = (t.match(/"/g) || []).length;
if (count % 2 !== 0) {
  console.error('ODD straight-quote count:', count, '- manual fix needed');
  process.exit(1);
}
let open = true;
const out = t.replace(/"/g, () => {
  const ch = open ? '\u201C' : '\u201D';
  open = !open;
  return ch;
});
fs.writeFileSync(f, out);
console.log('converted', count, 'straight quotes to curly pairs in', f);
