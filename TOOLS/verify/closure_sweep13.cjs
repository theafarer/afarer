// 收官回归:13 语言 × 7 关键路由,HTTP 200 + 脚本字符阈值断言
// 用法: node closure_sweep13.cjs  (Node 18+,需联网)
const LOCALES = ['hr', 'hu', 'sk', 'bg', 'sl', 'sr', 'id', 'ms', 'he', 'lt', 'lv', 'et', 'tl'];
const ROUTES = [
  '/', // 首页(UI 词典 + content)
  '/solutions/', // solutions 索引
  '/solutions/sup-brand-startup/', // solution 详情
  '/guides/', // guides 索引
  '/guides/beginner-guide/', // guide 详情
  '/yoga-sup/', // landing-i18n 页
  '/privacy/', // 法律 landing 页
];
// 脚本字符集与最低阈值(语言切换器/导航/页脚本地化 UI 保证底线)
const SCRIPTS = {
  hr: { re: /[čćšžđ]/g, min: 10 },
  hu: { re: /[áéíóöőúüű]/g, min: 10 },
  sk: { re: /[áäčďéíĺľňóôŕšťúýž]/g, min: 10 },
  bg: { re: /[\u0400-\u04FF]/g, min: 100 },
  sl: { re: /[čšž]/g, min: 10 },
  sr: { re: /[\u0400-\u04FF]/g, min: 100 },
  id: null, // ASCII 拉丁,无变音符断言
  ms: null,
  he: { re: /[\u0590-\u05FF]/g, min: 100 },
  lt: { re: /[ąčęėįšųūž]/g, min: 5 },
  lv: { re: /[āčēģīķļņšūž]/g, min: 5 },
  et: { re: /[õäöüšž]/g, min: 5 },
  tl: null,
};

async function fetchRetry(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { redirect: 'follow' });
      const text = await res.text();
      return { status: res.status, text };
    } catch (e) {
      if (i === tries - 1) throw e;
      await new Promise((r) => setTimeout(r, 1500));
    }
  }
  throw new Error('unreachable');
}

(async () => {
  let pass = 0,
    fail = 0;
  const failures = [];
  for (const loc of LOCALES) {
    for (const route of ROUTES) {
      const url = 'https://afarer.com/' + loc + route;
      try {
        const { status, text } = await fetchRetry(url);
        if (status !== 200) {
          fail++;
          failures.push(`${loc} ${route} HTTP ${status}`);
          continue;
        }
        const rule = SCRIPTS[loc];
        if (rule) {
          const count = (text.match(rule.re) || []).length;
          if (count < rule.min) {
            fail++;
            failures.push(`${loc} ${route} script chars ${count} < ${rule.min}`);
            continue;
          }
        }
        pass++;
        console.log(`PASS ${loc} ${route}${rule ? ' (' + (text.match(rule.re) || []).length + ')' : ''}`);
      } catch (e) {
        fail++;
        failures.push(`${loc} ${route} FETCH ${e.message}`);
      }
    }
  }
  console.log(
    `\n=== closure sweep: ${pass} pass, ${fail} fail (${LOCALES.length} locales x ${ROUTES.length} routes) ===`
  );
  for (const f of failures) console.log('FAIL ' + f);
  process.exit(fail > 0 ? 1 : 0);
})();
