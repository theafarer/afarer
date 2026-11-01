const fs = require('fs');
const p = 'E:/github/afarer/dist/hr/solutions/sup-brand-startup/index.html';
const h = fs.readFileSync(p, 'utf8');
const body = h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
const re = /[\u0400-\u04FF]+[^\u0400-\u04FF]{0,40}/g;
let m;
const seen = new Set();
while ((m = re.exec(body)) !== null) {
  const key = m[0].slice(0, 50);
  if (!seen.has(key)) {
    seen.add(key);
    console.log(JSON.stringify(m[0]));
  }
}
