const targets = [
  'https://afarer.com/ar/geo-report/',
  'https://afarer.com/ar/search/',
  'https://afarer.com/keystatic/',
  'https://afarer.com/internal/',
  'https://afarer.com/admin/',
  'https://afarer.com/login/',
];
(async () => {
  for (const t of targets) {
    try {
      const r = await fetch(t, { redirect: 'follow' });
      const c = await r.text();
      const m = c.match(/name="robots"\s+content="([^"]*)"/);
      const hasNoindex = /noindex/.test(c);
      console.log(
        t,
        '=>',
        r.status,
        'robots-meta:',
        m ? m[1] : hasNoindex ? 'noindex(bare)' : '(none)',
        'len:',
        c.length
      );
    } catch (e) {
      console.log(t, '=> ERR', e.message);
    }
  }
})();
