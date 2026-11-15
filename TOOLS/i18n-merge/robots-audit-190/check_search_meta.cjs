const fs = require('fs');
for (const f of ['dist/ar/search/index.html', 'dist/en/search/index.html', 'dist/search/index.html']) {
  const c = fs.readFileSync('E:/github/afarer/' + f, 'utf8');
  const m = c.match(/name="robots"\s+content="([^"]*)"/);
  console.log(f, 'robots:', m ? m[1] : '(none)');
}
