// Find remaining `${lang}` template hrefs lacking withTrailingSlash in src/components + src/layouts + src/pages
const fs = require('fs');
const path = require('path');

const ROOTS = ['E:/github/afarer/src/components', 'E:/github/afarer/src/layouts', 'E:/github/afarer/src/pages'];
// backtick template starting with /${lang} NOT wrapped in withTrailingSlash, in an href context
const re = /href=\{`\/\$\{lang\}[^`]*`[^}]*\}|href=\{`\/\$\{lang\}[^`]*`\}/g;

let hits = 0;
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (e.name.endsWith('.astro')) {
      const s = fs.readFileSync(fp, 'utf8');
      const lines = s.split('\n');
      lines.forEach((line, i) => {
        if (/href=\{`\/\$\{lang\}/.test(line) && !/withTrailingSlash/.test(line)) {
          console.log(`${fp.replace(/\\/g, '/').replace('E:/github/afarer/', '')}:${i + 1}: ${line.trim().slice(0, 130)}`);
          hits++;
        }
      });
    }
  }
}
for (const r of ROOTS) walk(r);
console.log('hits:', hits);
