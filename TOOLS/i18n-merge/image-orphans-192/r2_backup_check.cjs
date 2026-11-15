// R2 backup check for the 56 round-2 deletion candidates
const fs = require('fs');
const https = require('https');
const path = require('path');

const IMG_ROOT = 'E:/github/afarer/public/images';
const list = fs
  .readFileSync('round2_orphans.txt', 'utf8')
  .split(/\r?\n/)
  .filter((l) => l.trim());
list.push('E:\\github\\afarer\\public\\images\\afarer\\news\\afarer-supply-chain.webp');

const targets = [...new Set(list)].map((p) => {
  const rel = path.relative(IMG_ROOT, p).replace(/\\/g, '/');
  return { p, rel, url: 'https://assets.afarer.com/images/' + rel };
});

function check(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', timeout: 15000 }, (res) => {
      res.resume();
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
        check(res.headers.location).then(resolve);
        return;
      }
      resolve(res.statusCode);
    });
    req.on('timeout', () => {
      req.destroy();
      resolve('TIMEOUT');
    });
    req.on('error', () => resolve('ERR'));
    req.end();
  });
}

(async () => {
  const results = [];
  const CONC = 6;
  for (let i = 0; i < targets.length; i += CONC) {
    const chunk = targets.slice(i, i + CONC);
    const codes = await Promise.all(chunk.map((t) => check(t.url)));
    chunk.forEach((t, j) => results.push({ ...t, code: codes[j] }));
  }
  const backed = results.filter((r) => r.code === 200);
  const notBacked = results.filter((r) => r.code !== 200);
  console.log('total:', results.length, '| R2-backed (200):', backed.length, '| NOT on R2:', notBacked.length);
  for (const r of notBacked) console.log('  ' + r.code + '  ' + r.rel);
  fs.writeFileSync('round2_r2check.txt', results.map((r) => r.code + '\t' + r.rel).join('\n') + '\n', 'utf8');
})();
