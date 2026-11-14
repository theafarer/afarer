// Middleware-aware validation of llms-full.txt URLs against dist
const fs = require('fs');
const path = require('path');
const DIST = 'E:/github/afarer/dist';
const LANGS = new Set([
  'en',
  'fr',
  'de',
  'es',
  'pt',
  'ar',
  'it',
  'ru',
  'pl',
  'nl',
  'sv',
  'no',
  'el',
  'tr',
  'fi',
  'cs',
  'da',
  'ro',
  'th',
  'hr',
  'hu',
  'sk',
  'bg',
  'sl',
  'sr',
  'id',
  'he',
  'ms',
  'lt',
  'lv',
  'et',
  'tl',
]);
const txt = fs.readFileSync('E:/github/afarer/public/llms-full.txt', 'utf8');
const urls = [...txt.matchAll(/https:\/\/afarer\.com(\/[^\s)\]]*)/g)].map((m) => m[1]);

const exists = (p) => fs.existsSync(path.join(DIST, p));

function check(u) {
  let rel = u.split('?')[0].split('#')[0];
  if (rel === '/' || rel === '') return exists('index.html') ? null : '/';
  const seg = rel.slice(1);
  const file = (p) => (/\.[a-z0-9]+$/i.test(p) ? exists(p) : exists(path.posix.join(p, 'index.html')));
  if (file(seg)) return null; // exact dist asset
  const top = seg.split('/')[0];
  if (LANGS.has(top)) return rel; // lang URL not in dist -> real 404
  // non-lang path: middleware rewrites to /en/<path> for default-locale visitors
  if (file('en/' + seg)) return null;
  return rel; // neither root asset nor /en/ -> 404 for everyone
}

const seen = new Set();
const missing = [];
let checked = 0;
for (const u of urls) {
  if (seen.has(u)) continue;
  seen.add(u);
  checked++;
  const r = check(u);
  if (r) missing.push(r);
}
console.log('unique URLs:', checked, '| real 404:', missing.length);
const byTop = {};
for (const m of missing) {
  const t = m.split('/')[1] || '(root)';
  byTop[t] = (byTop[t] || 0) + 1;
}
console.log('404 by first segment:', JSON.stringify(byTop));
fs.writeFileSync('llms_404_list.txt', missing.join('\n'));
console.log('full list -> llms_404_list.txt');
