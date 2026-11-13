const https = require('https');
https.get('https://afarer.com/', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (r) => {
  let b = '';
  r.on('data', (c) => (b += c));
  r.on('end', () => {
    const hrefs = [...new Set([...b.matchAll(/href="(\/[a-z][^"]*)"/g)].map((m) => m[1]))];
    const slashless = hrefs.filter(
      (h) => !h.endsWith('/') && !/\.[a-z0-9]+$/i.test(h) && !h.startsWith('/_astro') && !h.includes('#')
    );
    console.log('distinct internal hrefs:', hrefs.length);
    console.log('distinct slashless:', slashless.length);
    console.log(slashless.join('\n'));
  });
});
