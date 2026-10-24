const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
// de content-v2 terminology sample
const d = yaml.load(fs.readFileSync('E:/github/afarer/src/data/site/content-v2.de.yaml', 'utf8'));
console.log('de v2 records:', d.length);
const s0 = d[0];
console.log('--- sample record 0 (surfboard) ---');
console.log('title:', s0.title);
console.log('tldr:', s0.tldr);
console.log('problem:', s0.problem.slice(0, 400));
console.log('--- sample record 5 (sup-size-guide) tldr ---');
console.log('tldr:', d[4].tldr);
console.log('--- quotes/dash usage scan ---');
const all = JSON.stringify(d);
for (const pat of ['„', '»', '«', ' – ', ' — ', 'Abstand', 'PSI', 'cm']) {
  console.log(
    JSON.stringify(pat),
    (all.match(new RegExp(pat.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length
  );
}
