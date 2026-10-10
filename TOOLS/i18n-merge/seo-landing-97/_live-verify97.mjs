import { readFileSync } from 'fs';
import { createRequire } from 'module';

const require = createRequire('file:///E:/github/afarer/package.json');
const yaml = require('js-yaml');

const ROOT = 'E:/github/afarer/src/data/pages/';
const NEW_LOCALES = ['es', 'it', 'ja', 'ko', 'pt', 'ru'];
const PAGES = [
  'oem-paddle',
  'co-brand',
  'bateau-gonflable-fabricant',
  'fournisseur-nautique',
  'fabricant-sup-gonflable',
];

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

const fetchHtml = async (p) => {
  const res = await fetch('https://afarer.com' + p, { redirect: 'follow' });
  if (!res.ok) return { err: 'HTTP ' + res.status };
  return { html: decode(await res.text()) };
};

const load = (loc, page) => yaml.load(readFileSync(ROOT + (loc === 'en' ? '' : loc + '/') + page + '.yaml', 'utf8'));

let pass = 0,
  fail = 0;
const bad = (msg) => {
  console.log('FAIL ' + msg);
  fail++;
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const titleOf = (html) => {
  const m = html.match(/<title>([\s\S]*?)<\/title>/);
  return m ? m[1] : '';
};
const flat = (html) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

async function checkPage(loc, page, opts) {
  const y = load(loc, page);
  const p = '/' + (loc === 'en' ? '' : loc + '/') + page + '/';
  try {
    const pg = await fetchHtml(p);
    if (pg.err) {
      bad(p + ' ' + pg.err);
      return;
    }
    const expectTitle = String(y.meta.title).split('|')[0].trim();
    const expectHero = flat(String(y.hero.title));
    const body = flat(pg.html);
    let ok = true;
    if (!titleOf(pg.html).includes(expectTitle)) {
      bad(p + ' title missing "' + expectTitle.slice(0, 40) + '"');
      ok = false;
    }
    if (!body.includes(expectHero)) {
      bad(p + ' hero missing "' + expectHero.slice(0, 40) + '"');
      ok = false;
    }
    if (opts && opts.noEnFallback) {
      const enY = load('en', page);
      const enHero = flat(String(enY.hero.title));
      if (body.includes(enHero) && enHero !== expectHero) {
        bad(p + ' EN fallback hero present');
        ok = false;
      }
    }
    if (ok) {
      pass++;
      console.log('PASS ' + p);
    }
  } catch (e) {
    bad(p + ' EXC ' + e.message);
  }
  await sleep(300);
}

for (const l of NEW_LOCALES) {
  for (const pg of PAGES) {
    await checkPage(l, pg, { noEnFallback: true });
  }
}
// regressions: en pages + fr pages (fr pre-existing)
for (const pg of PAGES) {
  await checkPage('en', pg);
  await checkPage('fr', pg);
}

console.log('---');
console.log('PASS=' + pass + ' FAIL=' + fail);
process.exit(fail ? 1 : 0);
