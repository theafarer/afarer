// Quantify unambiguous legacy image families (deleted product lines: RIB/kayak/dinghy/boat)
const fs = require('fs');
const path = require('path');
const IMG_DIR = 'E:/github/afarer/public/images/afarer';

const LEGACY_PATTERNS = [
  /products[\\/]rib[\\/]/,
  /afarer-kayak-river-category/,
  /afarer-dinghy-category/,
  /afarer-rib-boat-category/,
  /afarer-inflatable-boat/,
  /afarer-zb-mt350/,
];

function walkFiles(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkFiles(p, out);
    else out.push(p);
  }
}
const all = [];
walkFiles(IMG_DIR, all);
const legacy = all.filter((p) => LEGACY_PATTERNS.some((re) => re.test(p)));
let bytes = 0;
for (const p of legacy) bytes += fs.statSync(p).size;
console.log('legacy images to delete:', legacy.length, (bytes / 1048576).toFixed(1) + 'MB');
for (const p of legacy.slice(0, 8)) console.log('  ' + path.relative(IMG_DIR, p));
console.log('  ...');
