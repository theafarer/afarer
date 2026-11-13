const fs = require('fs');
const s = fs.readFileSync('E:/github/afarer/dist/ar/products/compare/index.html', 'utf8');
const i = s.indexOf('href="/products/sup-touring-cruiser"');
console.log('inside <script>:', s.lastIndexOf('<script', i) > s.lastIndexOf('</script', i));
console.log(JSON.stringify(s.slice(i - 200, i + 120)));
