const fs = require('fs');
const file = 'E:/github/afarer/src/pages/[lang]/index.astro';
let s = fs.readFileSync(file, 'utf8');
const orig = s;

// 1. import
s = s.replace(
  "import { supScenarios } from '~/data/sup-scenarios';",
  "import { supScenarios } from '~/data/sup-scenarios';\nimport { localizeHref } from '~/i18n/routing';"
);

// 2. lh helper after page-content init
s = s.replace(
  'const page = getPageContent(lang);\n',
  `const page = getPageContent(lang);

// Emit internal links in the live 200 (directory) form, localized for this page.
const lh = (h?: string): string => {
  if (!h) return '#';
  if (!h.startsWith('/') || h.startsWith('//')) return h;
  return localizeHref(h, lang || defaultLang);
};
`
);

// 3. hero/distributor/cta action ternary blocks -> lh(act.href || fallback)
s = s.replace(
  /\(act\.href \|\| '([^']*)'\)\.startsWith\('\/resources'\)\s*\?\s*act\.href\s*:\s*\(act\.href \|\| '[^']*'\)\.startsWith\('\/'\)\s*\?\s*'\/' \+ lang \+ act\.href\s*:\s*act\.href/g,
  "lh(act.href || '$1')"
);
// blocks without fallback
s = s.replace(
  /act\.href\.startsWith\('\/resources'\)\s*\?\s*act\.href\s*:\s*act\.href\.startsWith\('\/'\)\s*\?\s*'\/' \+ lang \+ act\.href\s*:\s*act\.href/g,
  'lh(act.href)'
);

// 4. who_we_serve ternary
s = s.replace(
  /\(item\.link \|\| '#'\)\.startsWith\('\/'\) \? '\/' \+ lang \+ item\.link : item\.link/g,
  'lh(item.link)'
);

// 5. template literals `/${lang}/x` -> lh('/x')
s = s.replace(/`\/\$\{lang\}(\/[^`?]*)`/g, "lh('$1')");

// 6. remaining '/' + lang + X -> lh(X)
s = s.replace(/'\/' \+ lang \+ ('(?:[^']*)'|[A-Za-z_$][\w$?.]*)/g, 'lh($1)');

if (s === orig) {
  console.log('NO CHANGES');
  process.exit(1);
}
fs.writeFileSync(file, s, 'utf8');

// verify
const left = (s.match(/'\/' \+ lang/g) || []).length;
const leftT = (s.match(/`\/\$\{lang\}/g) || []).length;
const lhCount = (s.match(/\blh\(/g) || []).length;
console.log("remaining '/' + lang:", left, '| remaining template:', leftT, '| lh( calls:', lhCount);
console.log('import ok:', s.includes("from '~/i18n/routing'"));
