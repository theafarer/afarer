// 全量 sitemap URL 状态扫描(HEAD,并发 25;非 200 时 GET 复核)
const https = require('https');
const fs = require('fs');

function req(u, method) {
  return new Promise((resolve) => {
    const r = https.request(u, { method, headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      res.resume();
      res.on('end', () => resolve({ s: res.statusCode, loc: res.headers.location }));
    });
    r.on('error', () => resolve({ s: 'ERR' }));
    r.end();
  });
}

async function check(u) {
  let r = await req(u, 'HEAD');
  if (r.s === 'ERR' || r.s >= 400 || r.s === 405 || r.s === 501) {
    r = await req(u, 'GET'); // 复核(HEAD 可能不被支持)
  }
  return r;
}

(async () => {
  const urls = require('C:/Users/Helleo/AppData/Local/Temp/deveco/sitemisc_work/sitemap_urls.json');
  const results = [];
  let done = 0;
  const CONC = 25;
  let idx = 0;
  async function worker() {
    while (idx < urls.length) {
      const u = urls[idx++];
      const r = await check(u);
      results.push({ u, s: r.s, loc: r.loc });
      done++;
      if (done % 500 === 0) console.log('progress', done, '/', urls.length);
    }
  }
  await Promise.all(Array.from({ length: CONC }, worker));
  const bad = results.filter((r) => r.s !== 200);
  console.log('TOTAL:', results.length, 'non-200:', bad.length);
  const byStatus = {};
  for (const b of bad) byStatus[b.s] = (byStatus[b.s] || 0) + 1;
  console.log('by status:', JSON.stringify(byStatus));
  for (const b of bad.slice(0, 40)) console.log(b.s, b.u, b.loc || '');
  fs.writeFileSync(__dirname + '/status_scan.json', JSON.stringify(results, null, 1));
})();
