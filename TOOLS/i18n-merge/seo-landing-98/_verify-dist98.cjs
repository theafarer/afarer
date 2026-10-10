const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const ROOT = 'E:/github/afarer/src/data/pages';
const DIST = 'E:/github/afarer/dist';
const PAGES = [
  'oem-paddle',
  'co-brand',
  'bateau-gonflable-fabricant',
  'fournisseur-nautique',
  'fabricant-sup-gonflable',
];
const NEW_LOCALES = ['cs', 'da', 'nl', 'no', 'pl', 'sv'];
const REGRESS = [
  ['fr', 'oem-paddle'],
  ['fr', 'fabricant-sup-gonflable'],
  ['de', 'distributor-program'],
  ['en', 'oem-paddle'],
];

let fail = 0;
let pass = 0;

function readHtml(loc, page) {
  const f = path.join(DIST, loc, page, 'index.html');
  try {
    return fs.readFileSync(f, 'utf8');
  } catch {
    return null;
  }
}

function titleOf(html) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/);
  return m ? m[1] : '';
}

// 1. new locale pages: localized <title> + hero, no EN fallback
for (const loc of NEW_LOCALES) {
  for (const page of PAGES) {
    const y = yaml.load(fs.readFileSync(path.join(ROOT, loc, page + '.yaml'), 'utf8'));
    const expectTitle = String(y.meta.title).split('|')[0].trim().slice(0, 24);
    const expectHero = String(y.hero.title)
      .replace(/<br\s*\/?>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 20);
    const html = readHtml(loc, page);
    const tag = loc + '/' + page;
    if (!html) {
      console.log('FAIL ' + tag + ': dist file missing');
      fail++;
      continue;
    }
    const t = titleOf(html);
    const heroFlat = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
    const enY = yaml.load(fs.readFileSync(path.join(ROOT, page + '.yaml'), 'utf8'));
    const enHero = String(enY.hero.title)
      .replace(/<br\s*\/?>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    let ok = true;
    if (!t.includes(expectTitle)) {
      console.log('FAIL ' + tag + ': title missing "' + expectTitle + '" got: ' + t.slice(0, 70));
      ok = false;
    }
    if (!heroFlat.includes(expectHero)) {
      console.log('FAIL ' + tag + ': hero missing "' + expectHero + '"');
      ok = false;
    }
    if (heroFlat.includes(enHero)) {
      console.log('FAIL ' + tag + ': EN fallback hero present');
      ok = false;
    }
    if (ok) {
      pass++;
    } else fail++;
  }
}

// 2. regressions
for (const [loc, page] of REGRESS) {
  const y = yaml.load(
    fs.readFileSync(loc === 'en' ? path.join(ROOT, page + '.yaml') : path.join(ROOT, loc, page + '.yaml'), 'utf8')
  );
  const expectTitle = String(y.meta.title).split('|')[0].trim().slice(0, 24);
  const html = readHtml(loc, page);
  const tag = loc + '/' + page;
  if (!html) {
    console.log('FAIL ' + tag + ': dist file missing');
    fail++;
    continue;
  }
  if (!titleOf(html).includes(expectTitle)) {
    console.log('FAIL ' + tag + ': title regression, got: ' + titleOf(html).slice(0, 70));
    fail++;
  } else pass++;
}

// 3. route-manifest invariant (30 new routes present + total)
const manifest = JSON.parse(fs.readFileSync('E:/github/afarer/src/i18n/generated/route-manifest.json', 'utf8'));
console.log('route-manifest count: ' + manifest.length);
if (manifest.length !== 13858) {
  console.log('FAIL route-manifest expected 13858');
  fail++;
} else pass++;
const set = new Set(manifest);
let missRoutes = 0;
for (const loc of NEW_LOCALES) {
  for (const page of PAGES) {
    if (!set.has('/' + loc + '/' + page)) {
      console.log('FAIL route-manifest missing /' + loc + '/' + page);
      missRoutes++;
      fail++;
    }
  }
}
if (missRoutes === 0) {
  console.log('route-manifest: all 30 new routes present');
  pass++;
}

// 4. sitemap invariant
const sitemap = fs.readFileSync(path.join(DIST, 'sitemap-0.xml'), 'utf8');
const locs = (sitemap.match(/<loc>/g) || []).length;
console.log('sitemap-0 loc count: ' + locs);
if (locs !== 11164) {
  console.log('FAIL sitemap expected 11164');
  fail++;
} else pass++;

console.log('---');
console.log('PASS=' + pass + ' FAIL=' + fail);
process.exit(fail ? 1 : 0);
