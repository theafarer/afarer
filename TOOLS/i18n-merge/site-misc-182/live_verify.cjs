const https = require('https');
const fs = require('fs');

function get(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location && redirects < 5) {
          let loc = res.headers.location;
          if (loc.startsWith('/')) loc = new URL(url).origin + loc;
          return resolve(get(loc, redirects + 1));
        }
        let body = '';
        res.on('data', (c) => (body += c));
        res.on('end', () => resolve({ status: res.statusCode, url, body }));
      })
      .on('error', reject);
  });
}

(async () => {
  const y = require('E:/github/afarer/node_modules/js-yaml');
  const checks = [
    ['https://afarer.com/he/about/', /[\u05D0-\u05EA]{3,}/, 'HEBREW'],
    ['https://afarer.com/sr/evidence/', /Сертификац/, 'SR-CYR'],
    ['https://afarer.com/sr/evidence/case-studies/retail-private-label', /Малопродаја/, 'SR-TAG'],
    ['https://afarer.com/et/research/', /[\u00F5\u0161\u017E]/, 'ET-DIACR'],
    ['https://afarer.com/tl/learn/sup/', /Basahin ang gabay|gabay →/, 'TL-READGUIDE'],
    ['https://afarer.com/bg/contact/', /България/, 'BG-COUNTRY'],
    ['https://afarer.com/hr/learn/water-safety/', /Sigurnost na vodi/, 'HR-WS-TITLE'],
    ['https://afarer.com/hu/about/', /v\u00EDzen \u00E9p\u00EDtett|v\u00EDzre \u00E9p\u00EDtett/i, 'HU-ABOUT'],
    ['https://afarer.com/id/research/', /Riset|Penelitian/, 'ID-RESEARCH'],
    ['https://afarer.com/lv/evidence/', /Sertific\u0113\u0161ana|sertifik/, 'LV-EVID'],
    ['https://afarer.com/ms/learn/sup/', /Baca panduan/, 'MS-READGUIDE'],
    ['https://afarer.com/lt/contact/', /Lietuva/, 'LT-COUNTRY'],
    ['https://afarer.com/sk/about/', /postaven\u00E9 na vode|vode/i, 'SK-ABOUT'],
    ['https://afarer.com/sl/research/', /Raziskave|raziskav/, 'SL-RESEARCH'],
  ];
  let pass = 0,
    fail = 0;
  for (const [url, re, name] of checks) {
    try {
      const r = await get(url);
      const ok = r.status === 200 && re.test(r.body);
      if (ok) pass++;
      else fail++;
      console.log((ok ? 'PASS' : 'FAIL') + ' ' + name + ' status=' + r.status + ' len=' + r.body.length + ' ' + url);
    } catch (e) {
      fail++;
      console.log('FAIL ' + name + ' ERR ' + e.message + ' ' + url);
    }
  }
  console.log('TOTAL: ' + pass + ' pass, ' + fail + ' fail');
})();
