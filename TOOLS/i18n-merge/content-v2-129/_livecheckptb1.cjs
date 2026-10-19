// v2 pt batch-1 live verification via curl (direct, no proxy — afarer.com direct OK).
// Fetches /pt/v2/<16 batch-1 slugs> + pt index + pt EN-fallback for a record beyond batch 1
// + nl pure EN-fallback page (nl has no overlay).
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer';
const yaml = require(path.join(ROOT, 'node_modules', 'js-yaml'));
const TMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';

const SLUGS = [
  'how-to-choose-a-surfboard-for-beginners',
  'surfing-for-beginners',
  'wetsuit-thickness-guide',
  'what-to-wear-for-surfing',
  'surfing-safety-tips',
  'surfboard-size-guide',
  'types-of-surfboards-explained',
  'cold-water-surfing-gear-guide',
  'ocean-safety-basics',
  'surf-etiquette-rules',
  'best-water-sports-gear-for-beginners',
  'ocean-conditions-explained',
  'foam-board-vs-hard-surfboard',
  '3mm-vs-5mm-wetsuit',
  'longboard-vs-shortboard',
  'best-surf-gear-brands-compared',
];
const PT_FALLBACK = 'afarer-surfboard-pro'; // beyond batch 1 -> EN fallback inside pt
const NL_FALLBACK = 'how-to-choose-a-surfboard-for-beginners'; // nl has no overlay -> pure EN

const ptRecs = yaml.load(fs.readFileSync(path.join(ROOT, 'src/data/site/content-v2.pt.yaml'), 'utf8'));
const titles = new Map(ptRecs.map((r) => [r.slug, r.title]));
if (ptRecs.length !== 16) {
  console.log('FAIL pt overlay record count ' + ptRecs.length);
  process.exit(1);
}
const enRecs = yaml.load(fs.readFileSync(path.join(ROOT, 'src/data/site/content-v2.yaml'), 'utf8'));
const enTitle = (slug) => enRecs.find((r) => r.slug === slug).title;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

let errors = 0;
let n = 0;
const fail = (m) => {
  errors++;
  console.log('FAIL ' + m);
};
const pass = (m) => console.log('PASS ' + m);

const fetch = (url, out) =>
  execFileSync('curl.exe', ['-s', '-L', '-o', out, '-w', '%{http_code}', '--max-time', '60', url], {
    encoding: 'utf8',
  }).trim();

// 1) pt index
{
  const idxOut = path.join(TMP, 'liveptb1_pt_index.html');
  const code = fetch('https://afarer.com/pt/v2/', idxOut);
  const idxBody = fs.readFileSync(idxOut, 'utf8');
  if (code === '200' && idxBody.includes('<html')) pass('/pt/v2/ index 200');
  else fail('/pt/v2/ index code=' + code);
  const links = new Set(
    (idxBody.match(/href="[^"]*\/v2\/[a-z0-9-]+"/g) || []).map((l) => l.replace(/.*\/v2\//, '').replace(/"$/, ''))
  );
  if (links.size === 75) pass('/pt/v2/ index lists 75 slugs');
  else fail('/pt/v2/ index slug count=' + links.size);
}

// 2) 16 translated pt pages
for (const slug of SLUGS) {
  const out = path.join(TMP, 'liveptb1_pt_' + slug + '.html');
  const c = fetch('https://afarer.com/pt/v2/' + slug, out);
  const body = fs.readFileSync(out, 'utf8');
  const t = String(titles.get(slug));
  const enT = enTitle(slug);
  const ok = c === '200' && body.includes(esc(t)) && !(t !== enT && body.includes('<title>' + esc(enT)));
  if (ok) {
    pass('/pt/v2/' + slug);
    n++;
  } else {
    fail('/pt/v2/' + slug + ' code=' + c + ' titleMatch=' + body.includes(esc(t)));
  }
}

// 3) pt EN fallback for record beyond batch 1
{
  const fbOut = path.join(TMP, 'liveptb1_pt_fb.html');
  const fc = fetch('https://afarer.com/pt/v2/' + PT_FALLBACK, fbOut);
  const fb = fs.readFileSync(fbOut, 'utf8');
  const t = enTitle(PT_FALLBACK);
  if (fc === '200' && fb.includes(esc(t))) pass('/pt/v2/' + PT_FALLBACK + ' EN fallback (beyond batch 1)');
  else fail('/pt/v2/' + PT_FALLBACK + ' code=' + fc + ' fbTitleMatch=' + fb.includes(esc(t)));
}

// 4) nl pure EN fallback
{
  const fbOut = path.join(TMP, 'liveptb1_nl_fb.html');
  const fc = fetch('https://afarer.com/nl/v2/' + NL_FALLBACK, fbOut);
  const fb = fs.readFileSync(fbOut, 'utf8');
  const t = enTitle(NL_FALLBACK);
  if (fc === '200' && fb.includes(esc(t))) pass('/nl/v2/' + NL_FALLBACK + ' EN fallback');
  else fail('/nl/v2/' + NL_FALLBACK + ' code=' + fc + ' fbTitleMatch=' + fb.includes(esc(t)));
}

console.log('translated pages ok: ' + n + '/16');
console.log(errors === 0 ? 'LIVE ALL PASS' : 'LIVE FAILURES: ' + errors);
process.exit(errors === 0 ? 0 : 1);
