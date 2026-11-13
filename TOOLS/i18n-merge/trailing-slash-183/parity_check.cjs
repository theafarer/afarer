// 全 locale URL 集合奇偶校验 + 根 URL 重定向行为检查
const https = require('https');

function get(u, method = 'GET') {
  return new Promise((resolve, reject) => {
    const req = https.request(u, { method, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let b = '';
      res.on('data', (c) => (b += c));
      res.on('end', () => resolve({ s: res.statusCode, loc: res.headers.location, b: b.slice(0, 500) }));
    });
    req.on('error', reject);
    req.end();
  });
}

(async () => {
  const urls = require('C:/Users/Helleo/AppData/Local/Temp/deveco/sitemisc_work/sitemap_urls.json');

  // 1) cross-locale parity
  const byLoc = {};
  for (const u of urls) {
    const p = new URL(u).pathname;
    const seg = p.split('/').filter(Boolean);
    if (/^[a-z]{2}$/.test(seg[0] || '')) {
      (byLoc[seg[0]] = byLoc[seg[0]] || new Set()).add('/' + seg.slice(1).join('/'));
    }
  }
  const en = byLoc['en'];
  console.log('=== cross-locale parity vs en (non-empty diffs only) ===');
  for (const [loc, set] of Object.entries(byLoc).sort()) {
    if (loc === 'en') continue;
    const missing = [...en].filter((p) => !set.has(p));
    const extra = [...set].filter((p) => !en.has(p));
    if (missing.length || extra.length) {
      console.log(
        loc,
        'missing:',
        missing.length,
        missing.slice(0, 5).join(' '),
        '| extra:',
        extra.length,
        extra.slice(0, 5).join(' ')
      );
    }
  }
  console.log('(locales with no diff are not listed)');

  // 2) root URL behavior (sample 8)
  console.log('\n=== root URL redirect behavior (sample) ===');
  const rootSample = [
    '/yoga-sup',
    '/research/sup-valve-types',
    '/about/afarer-brand',
    '/solutions/oem-brands',
    '/guides/kayak-techniques',
    '/resources/download-catalog',
    '/bundles',
    '/ai-context',
  ];
  for (const p of rootSample) {
    try {
      const r = await get('https://afarer.com' + p, 'HEAD');
      console.log(p, '->', r.s, r.loc || '(no redirect)');
    } catch (e) {
      console.log(p, 'ERR', e.message);
    }
  }

  // 3) de-only pages: what are they?
  console.log('\n=== de-only use-cases pages ===');
  for (const p of ['/de/use-cases/fishing-from-inflatable-craft', '/de/use-cases/touring-distance-paddling']) {
    const r = await get('https://afarer.com' + p + '/');
    const title = (r.b.match(/<title>([^<]*)<\/title>/) || [])[1] || '?';
    console.log(p, r.s, 'title:', title);
  }
  // en use-cases index vs de index link sets
  for (const [loc, p] of [
    ['en', '/en/use-cases/'],
    ['de', '/de/use-cases/'],
  ]) {
    const r = await get('https://afarer.com' + p);
    const links = [...r.b.matchAll(/href="\/[^"]*use-cases\/[^"]+"/g)].map((m) => m[0].slice(6, -1));
    const uniq = [...new Set(links)].filter((l) => !l.endsWith('/use-cases/'));
    console.log(loc, 'use-case links:', uniq.length, uniq.join(' '));
  }
})();
