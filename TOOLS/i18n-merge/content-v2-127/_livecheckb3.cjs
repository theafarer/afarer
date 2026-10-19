// v2 es/it batch-3 live verification via curl (direct, no proxy — afarer.com direct OK).
// Fetches /es/v2/<16 batch-3 slugs>, /it/v2/<16 batch-3 slugs> + both index pages + pt EN-fallback page,
// checks HTTP 200 and translated <title> from the merged yaml source.
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer';
const yaml = require(path.join(ROOT, 'node_modules', 'js-yaml'));
const TMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';

const SLUGS = [
  'how-long-inflatable-boats-last',
  'inflatable-boat-maintenance',
  'marine-life-vest-guide',
  'afarer-vs-red-paddle',
  'afarer-vs-irocker',
  'afarer-vs-bluefin',
  'inflatable-sup-vs-hard-board',
  'wetsuit-care-guide',
  'how-to-choose-a-wetsuit',
  'wetsuit-repair-guide',
  'sup-safety-guide',
  'cold-water-safety-guide',
  'life-jacket-buying-guide',
  'understanding-tides',
  'wind-conditions-sup',
  'weather-planning-water-sports',
];
const FALLBACK_LANG = 'pt'; // pt has no overlay -> EN fallback
const FALLBACK = 'afarer-surfboard-pro';

const titles = {};
for (const loc of ['es', 'it']) {
  const recs = yaml.load(fs.readFileSync(path.join(ROOT, 'src/data/site/content-v2.' + loc + '.yaml'), 'utf8'));
  titles[loc] = new Map(recs.map((r) => [r.slug, r.title]));
}
const enRecs = yaml.load(fs.readFileSync(path.join(ROOT, 'src/data/site/content-v2.yaml'), 'utf8'));
const enFallbackTitle = enRecs.find((r) => r.slug === FALLBACK).title;
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

for (const loc of ['es', 'it']) {
  // index page
  const idxOut = path.join(TMP, 'liveb3_' + loc + '_index.html');
  const code = fetch('https://afarer.com/' + loc + '/v2/', idxOut);
  const idxBody = fs.readFileSync(idxOut, 'utf8');
  if (code === '200' && idxBody.includes('<html')) pass('/' + loc + '/v2/ index 200');
  else fail('/' + loc + '/v2/ index code=' + code);
  const links = new Set(
    (idxBody.match(/href="[^"]*\/v2\/[a-z0-9-]+"/g) || []).map((l) => l.replace(/.*\/v2\//, '').replace(/"$/, ''))
  );
  if (links.size === 75) pass('/' + loc + '/v2/ index lists 75 slugs');
  else fail('/' + loc + '/v2/ index slug count=' + links.size);

  for (const slug of SLUGS) {
    const out = path.join(TMP, 'liveb3_' + loc + '_' + slug + '.html');
    const c = fetch('https://afarer.com/' + loc + '/v2/' + slug, out);
    const body = fs.readFileSync(out, 'utf8');
    const ok = c === '200' && body.includes(esc(String(titles[loc].get(slug))));
    if (ok) {
      pass('/' + loc + '/v2/' + slug);
      n++;
    } else {
      fail(
        '/' + loc + '/v2/' + slug + ' code=' + c + ' titleMatch=' + body.includes(esc(String(titles[loc].get(slug))))
      );
    }
  }
}
// pt fallback page (no overlay -> EN)
{
  const fbOut = path.join(TMP, 'liveb3_pt_fb.html');
  const fc = fetch('https://afarer.com/' + FALLBACK_LANG + '/v2/' + FALLBACK, fbOut);
  const fb = fs.readFileSync(fbOut, 'utf8');
  if (fc === '200' && fb.includes(esc(enFallbackTitle))) pass('/' + FALLBACK_LANG + '/v2/' + FALLBACK + ' EN fallback');
  else
    fail(
      '/' + FALLBACK_LANG + '/v2/' + FALLBACK + ' code=' + fc + ' fbTitleMatch=' + fb.includes(esc(enFallbackTitle))
    );
}

console.log('translated pages ok: ' + n + '/32');
console.log(errors === 0 ? 'LIVE ALL PASS' : 'LIVE FAILURES: ' + errors);
process.exit(errors === 0 ? 0 : 1);
