const fs = require('fs');
const path = require('path');
const root = 'E:\\github\\afarer\\src\\data\\pages';
const targets = [];
for (const f of fs.readdirSync(root)) {
  if (f.endsWith('.yaml') && f === 'distributor-program.yaml') targets.push(path.join(root, f));
}
for (const d of fs.readdirSync(root, { withFileTypes: true })) {
  if (!d.isDirectory()) continue;
  const p = path.join(root, d.name, 'distributor-program.yaml');
  if (fs.existsSync(p)) targets.push(p);
}
const needle = '300\u20131,000';
for (const f of targets) {
  let s = fs.readFileSync(f, 'utf8');
  let state = 'ok';
  if (s.includes(needle)) {
    s = s.split(needle).join("'300\u20131,000'");
    fs.writeFileSync(f, s);
    state = 'FIXED';
  }
  console.log(f + ' -> ' + state);
}
