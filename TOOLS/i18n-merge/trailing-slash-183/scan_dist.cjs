const fs = require('fs');
const path = require('path');

const dist = 'E:/github/afarer/dist';
const read = (p) => fs.readFileSync(path.join(dist, p), 'utf8');

// --- 1. sitemap URLs ---
const sitemapXml = read('sitemap-0.xml');
const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const slashed = urls.filter((u) => u.endsWith('/') || u === 'https://afarer.com/');
const slashless = urls.filter((u) => !u.endsWith('/'));
const enRoot = urls.filter((u) => /\/en\/?$/.test(u.replace('https://afarer.com', '')));
const hasRoot = urls.includes('https://afarer.com/');
console.log('=== SITEMAP ===');
console.log('total URLs:', urls.length);
console.log('slashed (200-form):', slashed.length);
console.log('slashless (308-form):', slashless.length, slashless.slice(0, 5));
console.log('/en or /en/ still present:', enRoot);
console.log('root https://afarer.com/ present:', hasRoot);

// --- 2. EN homepage canonical / og:url / hreflang ---
const enHome = read('en/index.html');
const canonical = enHome.match(/<link rel="canonical" href="(.*?)"/);
const ogUrl = enHome.match(/property="og:url" content="(.*?)"/);
const hreflangs = [...enHome.matchAll(/<link rel="alternate" hreflang="(.*?)" href="(.*?)"/g)].map(
  (m) => `${m[1]} -> ${m[2]}`
);
console.log('\n=== EN HOMEPAGE (dist/en/index.html) ===');
console.log('canonical:', canonical && canonical[1]);
console.log('og:url:', ogUrl && ogUrl[1]);
console.log('hreflang count:', hreflangs.length);
console.log('hreflang sample:', hreflangs.slice(0, 6));
console.log(
  'hreflang en:',
  hreflangs.filter((h) => h.startsWith('en '))
);
console.log(
  'hreflang x-default:',
  hreflangs.filter((h) => h.startsWith('x-default'))
);

// --- 3. EN homepage internal slashless hrefs ---
const hrefs = new Set([...enHome.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1]));
const fileRe = /\.[a-z0-9]+(\?|#|$)/i;
const slashlessInternal = [...hrefs].filter((h) => {
  const base = h.split('?')[0].split('#')[0];
  if (base === '/' || base.endsWith('/') || fileRe.test(base)) return false;
  return true;
});
console.log('\n=== EN HOMEPAGE internal hrefs ===');
console.log('distinct internal hrefs:', hrefs.size);
console.log('slashless (excluding files/assets):', slashlessInternal.length);
console.log(slashlessInternal.slice(0, 30));

// --- 4. DE homepage spot check ---
const deHome = read('de/index.html');
const deCanonical = deHome.match(/<link rel="canonical" href="(.*?)"/);
const deHreflangs = [...deHome.matchAll(/<link rel="alternate" hreflang="(.*?)" href="(.*?)"/g)].map(
  (m) => `${m[1]} -> ${m[2]}`
);
console.log('\n=== DE HOMEPAGE ===');
console.log('canonical:', deCanonical && deCanonical[1]);
console.log('hreflang count:', deHreflangs.length, 'sample:', deHreflangs.slice(0, 4));

// --- 5. /en/about/ page ---
const enAbout = read('en/about/index.html');
const aboutCanonical = enAbout.match(/<link rel="canonical" href="(.*?)"/);
const aboutOg = enAbout.match(/property="og:url" content="(.*?)"/);
const aboutHreflangs = [...enAbout.matchAll(/<link rel="alternate" hreflang="(.*?)" href="(.*?)"/g)].map(
  (m) => `${m[1]} -> ${m[2]}`
);
console.log('\n=== EN ABOUT ===');
console.log('canonical:', aboutCanonical && aboutCanonical[1]);
console.log('og:url:', aboutOg && aboutOg[1]);
console.log('hreflang sample:', aboutHreflangs.slice(0, 4), '... count:', aboutHreflangs.length);

// --- 6. RSS ---
const rss = read('rss.xml');
const rssLinks = [...rss.matchAll(/<link>(.*?)<\/link>/g)].map((m) => m[1]).filter((l) => l.includes('afarer.com'));
console.log('\n=== RSS ===');
console.log('item link count:', rssLinks.length);
console.log('sample:', rssLinks.slice(0, 3));
console.log('slashless:', rssLinks.filter((l) => !l.endsWith('/')).length);
