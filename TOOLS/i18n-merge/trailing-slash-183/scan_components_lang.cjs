// Scan src/components + src/layouts for slashless lang-pattern href emitters:
// 1) href={`/${lang}...`} without withTrailingSlash (already done for these dirs? recheck)
// 2) local helpers appending `/${lang}${h}` without withTrailingSlash
// 3) href={'/' + lang + ...} concat without trailing slash
const fs = require('fs');
const path = require('path');

const ROOTS = ['E:/github/afarer/src/components', 'E:/github/afarer/src/layouts'];
let hits = 0;

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (e.name.endsWith('.astro') || e.name.endsWith('.ts')) scan(fp);
  }
}

function scan(fp) {
  const s = fs.readFileSync(fp, 'utf8');
  const lines = s.split('\n');
  lines.forEach((line, i) => {
    const l = line.trim();
    if (l.startsWith('//') || l.startsWith('*') || l.startsWith('/*')) return;
    // template: `/${lang}...` appearing in href context or helper, without withTrailingSlash
    if (l.includes('`/${lang}') && !l.includes('withTrailingSlash') && !l.includes('/`') && !/`\$\{lang\}\/`/.test(l)) {
      console.log(`${rel(fp)}:${i + 1}: ${l.slice(0, 130)}`);
      hits++;
      return;
    }
    // concat: '/' + lang + '...'
    if (/href=\{'\/'\s*\+\s*lang/.test(l) && !l.endsWith('/') && !l.includes(" '/'")) {
      console.log(`${rel(fp)}:${i + 1}: ${l.slice(0, 130)}`);
      hits++;
    }
  });
}

function rel(fp) {
  return fp.replace(/\\/g, '/').replace('E:/github/afarer/', '');
}

for (const r of ROOTS) walk(r);
console.log('hits:', hits);
