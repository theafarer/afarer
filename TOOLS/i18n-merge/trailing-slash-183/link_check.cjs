const https = require('https');
https.get('https://afarer.com/', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (r) => {
  let b = '';
  r.on('data', (c) => (b += c));
  r.on('end', () => {
    const hrefs = [...b.matchAll(/href="(\/[a-z][^"]*)"/g)].map((m) => m[1]);
    const slashless = hrefs.filter((h) => !h.endsWith('/') && !/\.[a-z0-9]+$/i.test(h));
    console.log('internal hrefs:', hrefs.length, '| slashless non-asset:', slashless.length);
    console.log('sample slashless:', [...new Set(slashless)].slice(0, 8).join(' '));
    const canon = (b.match(/rel="canonical" href="([^"]+)"/) || [])[1];
    console.log('canonical:', canon);
    const alt = [...b.matchAll(/hreflang="[a-z-]+" href="([^"]+)"/g)].map((m) => m[1]).slice(0, 3);
    console.log('hreflang sample:', alt.join(' '));
    const ogurl = (b.match(/property="og:url" content="([^"]+)"/) || [])[1];
    console.log('og:url:', ogurl);
  });
});
