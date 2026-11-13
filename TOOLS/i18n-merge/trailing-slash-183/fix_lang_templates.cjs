const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer/src/pages';

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.astro$/.test(e.name)) out.push(p);
  }
  return out;
}

// three known local helper signatures (buggy: no trailing slash)
const LH_PLAIN = 'const lh = (h: string) => (h ? `/${lang}${h}` : h);';
const LH_PLAIN_NEW = 'const lh = (h: string) => (h ? withTrailingSlash(`/${lang}${h}`) : h);';
const LH_RES = "const lh = (h: string) => (h && !h.startsWith('/resources') ? `/${lang}${h}` : h);";
const LH_RES_NEW =
  "const lh = (h: string) => (h && !h.startsWith('/resources') ? withTrailingSlash(`/${lang}${h}`) : h);";
const P_HELPER = "const p = (path: string) => (lang === 'en' ? path : `/${lang}${path}`);";
const P_HELPER_NEW =
  "const p = (path: string) => (lang === 'en' ? withTrailingSlash(path) : withTrailingSlash(`/${lang}${path}`));";

let totalFiles = 0;
let totalTpl = 0;
let totalHelper = 0;
let skippedUnbalanced = [];

for (const f of walk(ROOT)) {
  let s = fs.readFileSync(f, 'utf8');
  const orig = s;
  let helpers = 0;
  let tpls = 0;

  // 1) helper definitions
  for (const [oldS, newS] of [
    [LH_PLAIN, LH_PLAIN_NEW],
    [LH_RES, LH_RES_NEW],
    [P_HELPER, P_HELPER_NEW],
  ]) {
    while (s.includes(oldS)) {
      s = s.replace(oldS, newS);
      helpers++;
    }
  }

  // 2) wrap slashless `/${lang}...` templates
  s = s.replace(/`\/\$\{lang\}[^`]*`/g, (m) => {
    const content = m.slice(1, -1);
    if (content.endsWith('/')) return m; // already slashed
    const open = (content.match(/\$\{/g) || []).length;
    const close = (content.match(/\}/g) || []).length;
    if (open !== close) {
      skippedUnbalanced.push(`${f.replace(/\\/g, '/')}: ${m.slice(0, 80)}`);
      return m;
    }
    tpls++;
    return `withTrailingSlash(${m})`;
  });

  if (s === orig) continue;

  // 3) ensure import
  if (!/import\s*\{[^}]*withTrailingSlash[^}]*\}\s*from\s*'~\/i18n\/routing'/.test(s)) {
    if (/import\s*\{[^}]*\}\s*from\s*'~\/i18n\/routing'/.test(s)) {
      s = s.replace(/(import\s*\{)([^}]*)(\}\s*from\s*'~\/i18n\/routing')/, '$1withTrailingSlash, $2$3');
    } else {
      // insert after last top import line
      const lines = s.split('\n');
      let lastImport = -1;
      for (let i = 0; i < lines.length; i++) {
        if (/^import\s.*from\s+'.*';\s*$/.test(lines[i])) lastImport = i;
      }
      const imp = "import { withTrailingSlash } from '~/i18n/routing';";
      if (lastImport >= 0) lines.splice(lastImport + 1, 0, imp);
      else lines.splice(1, 0, imp); // after opening ---
      s = lines.join('\n');
    }
  }

  fs.writeFileSync(f, s);
  totalFiles++;
  totalTpl += tpls;
  totalHelper += helpers;
  console.log(`${helpers + tpls}\t(helper:${helpers} tpl:${tpls})\t${f.replace(/\\/g, '/').replace(ROOT + '/', '')}`);
}

console.log(`\nfiles changed: ${totalFiles} | templates wrapped: ${totalTpl} | helpers fixed: ${totalHelper}`);
if (skippedUnbalanced.length) {
  console.log('SKIPPED (unbalanced, manual):');
  for (const x of skippedUnbalanced) console.log('  ' + x);
}
