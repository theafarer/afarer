// Validate every live sitemap URL resolves to a dist file (served set), incl. middleware rewrite
const fs = require('fs');
const path = require('path');
const DIST = 'E:/github/afarer/dist';
const smRaw = fs.readFileSync('C:/Users/Helleo/AppData/Local/Temp/deveco/sitemisc_work/sitemap0.xml', 'utf8');
const urls = [...smRaw.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const exists = (p) => {
  const noSlash = p.replace(/\/+$/, '') || '/';
  const cands = noSlash === '/' ? ['/index.html'] : [noSlash + '/index.html', noSlash];
  return cands.some((c) => fs.existsSync(path.join(DIST, c)));
};

let bad = 0;
const badList = [];
for (const u of urls) {
  const p = u.replace(/^https:\/\/afarer\.com/, '');
  if (exists(p)) continue;
  // middleware rewrite: root URL -> /en/<path>
  const en = '/en' + (p === '/' ? '' : p);
  if (exists(en)) continue;
  bad++;
  if (badList.length < 15) badList.push(u);
}
console.log('sitemap URLs:', urls.length, '| unresolved:', bad);
for (const b of badList) console.log('  BAD ' + b);
