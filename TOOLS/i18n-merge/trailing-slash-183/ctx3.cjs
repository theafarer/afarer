const fs = require('fs');
const s = fs.readFileSync('E:/github/afarer/dist/en/index.html', 'utf8');
const pats = [
  'href="/login"',
  'href="/resources/download-catalog"',
  'href="/en/whitepaper/oem-sup-manufacturing-guide"',
];
for (const pat of pats) {
  let i = -1;
  let count = 0;
  while ((i = s.indexOf(pat, i + 1)) !== -1 && count < 2) {
    count++;
    console.log('=== ' + pat + ' occurrence ' + count);
    console.log(
      s
        .slice(Math.max(0, i - 300), i + 140)
        .replace(/\n/g, ' ')
        .slice(0, 440)
    );
    console.log();
  }
}
