const fs = require('fs');
const path = require('path');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(astro|ts)$/.test(e.name)) out.push(p);
  }
  return out;
}

const files = walk('E:/github/afarer/src/pages');
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8');
  const lines = s.split('\n');
  lines.forEach((line, i) => {
    const ms = line.match(/`\/\$\{lang\}[^`]*`/g) || [];
    // only non-already-slashed templates
    const interesting = ms.filter((m) => !/\/`\s*$/.test(m) && !m.slice(0, -1).endsWith('/'));
    if (interesting.length) {
      const short = f.replace(/\\/g, '/').replace('E:/github/afarer/src/pages/', '');
      console.log(`${short}:${i + 1}\t${line.trim().slice(0, 160)}`);
    }
  });
}
