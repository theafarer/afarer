// v2 batch-1 live verification via curl (socks5 proxy).
// Fetches /ro/v2/<16 slugs>, /th/v2/<16 slugs> + both index pages + EN-fallback page,
// checks HTTP 200 and translated <title> from the merged yaml source.
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer';
const yaml = require(path.join(ROOT, 'node_modules', 'js-yaml'));
const TMP = path.join(process.env.TEMP, 'deveco');

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
const FALLBACK = 'afarer-surfboard-pro';

const titles = {};
for (const loc of ['ro', 'th']) {
  const recs = yaml.load(fs.readFileSync(path.join(ROOT, 'src/data/site/content-v2.' + loc + '.yaml'), 'utf8'));
  titles[loc] = new Map(recs.map((r) => [r.slug, r.title]));
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

let errors = 0;
const fail = (m) => {
  errors++;
  console.log('FAIL ' + m);
};
const pass = (m) => console.log('PASS ' + m);

const fetch = (url, out) =>
  execFileSync(
    'curl.exe',
    ['-s', '-L', '-o', out, '-w', '%{http_code}', '--socks5-hostname', '127.0.0.1:10808', '--max-time', '60', url],
    { encoding: 'utf8' }
  ).trim();

let n = 0;
for (const loc of ['ro', 'th']) {
  // index page
  const idxOut = path.join(TMP, 'live121_' + loc + '_index.html');
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
    const out = path.join(TMP, 'live121_' + loc + '_' + slug + '.html');
    const c = fetch('https://afarer.com/' + loc + '/v2/' + slug, out);
    const body = fs.readFileSync(out, 'utf8');
    const ok = c === '200' && body.includes(esc(String(titles[loc].get(slug))));
    if (ok) {
      pass('/' + loc + '/v2/' + slug);
      n++;
    } else
      fail(
        '/' + loc + '/v2/' + slug + ' code=' + c + ' titleMatch=' + body.includes(esc(String(titles[loc].get(slug))))
      );
  }
  // EN fallback page
  const fbOut = path.join(TMP, 'live121_' + loc + '_fb.html');
  const fc = fetch('https://afarer.com/' + loc + '/v2/' + FALLBACK, fbOut);
  const fb = fs.readFileSync(fbOut, 'utf8');
  if (fc === '200' && fb.includes('The afarer Surfboard Pro')) pass('/' + loc + '/v2/' + FALLBACK + ' EN fallback');
  else fail('/' + loc + '/v2/' + FALLBACK + ' code=' + fc);
}

console.log('translated pages ok: ' + n + '/32');
console.log(errors === 0 ? 'LIVE ALL PASS' : 'LIVE FAILURES: ' + errors);
process.exit(errors === 0 ? 0 : 1);
