// 全面体检:拉取全量 sitemap URL,批量 HEAD/GET 状态检查 + 结构分析
const https = require('https');
const fs = require('fs');

function get(u, method = 'GET', tries = 3) {
  return new Promise((resolve, reject) => {
    const req = https.request(u, { method, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      // drain body for GET
      let b = '';
      res.on('data', (c) => (b += c));
      res.on('end', () => resolve({ s: res.statusCode, loc: res.headers.location, b }));
    });
    req.on('error', (e) => {
      if (tries > 1) resolve(get(u, method, tries - 1));
      else reject(e);
    });
    req.end();
  });
}

(async () => {
  const d = await get('https://afarer.com/sitemap-0.xml');
  const urls = [...d.b.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log('urls:', urls.length);

  // 结构分析:按 locale 分组、按路径模式聚合
  const byLocale = {};
  const byPattern = {};
  for (const u of urls) {
    const p = new URL(u).pathname;
    const seg = p.split('/').filter(Boolean);
    const loc = /^[a-z]{2}$/.test(seg[0] || '') ? seg[0] : '(root)';
    byLocale[loc] = (byLocale[loc] || 0) + 1;
    // pattern: 首段 locale + 后续静态段(动态段以 :slug 表示)
    const rest = seg.slice(/^[a-z]{2}$/.test(seg[0] || '') ? 1 : 0);
    const pat = rest
      .map((s, i) => (i === rest.length - 1 && rest.length > 1 && !s.includes('.') && s.length > 2 && !['index'].includes(s) ? ':slug' : s))
      .join('/');
    byPattern[pat] = (byPattern[pat] || 0) + 1;
  }
  const locales = Object.keys(byLocale).sort();
  console.log('locales:', locales.join(','));
  console.log('locale counts:', JSON.stringify(byLocale));
  const pats = Object.entries(byPattern).sort((a, b) => b[1] - a[1]);
  console.log('patterns:', pats.length);
  fs.writeFileSync(__dirname + '/sitemap_urls.json', JSON.stringify(urls, null, 1));
  fs.writeFileSync(
    __dirname + '/sitemap_patterns.json',
    JSON.stringify(Object.fromEntries(pats), null, 1)
  );
  console.log('saved sitemap_urls.json + sitemap_patterns.json');
})();
