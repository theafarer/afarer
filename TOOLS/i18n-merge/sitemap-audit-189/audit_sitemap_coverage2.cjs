// Correct cross-audit: manifest routes vs sitemap, proper root<->en normalization
const fs = require('fs');
const manifest = JSON.parse(fs.readFileSync('E:/github/afarer/src/i18n/generated/route-manifest.json', 'utf8'));
const smRaw = fs.readFileSync('C:/Users/Helleo/AppData/Local/Temp/deveco/sitemisc_work/sitemap0.xml', 'utf8');
const smUrls = [...smRaw.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const LOCALES = new Set([
  'en',
  'fr',
  'de',
  'es',
  'pt',
  'ar',
  'it',
  'ru',
  'pl',
  'nl',
  'sv',
  'no',
  'el',
  'tr',
  'fi',
  'cs',
  'da',
  'ro',
  'th',
  'hr',
  'hu',
  'sk',
  'bg',
  'sl',
  'sr',
  'id',
  'he',
  'ms',
  'lt',
  'lv',
  'et',
  'tl',
]);

const smRaw2 = new Set(smUrls.map((u) => u.replace(/^https:\/\/afarer\.com/, '').replace(/\/+$/, '') || '/'));
// sitemap forms index: for coverage checks we accept exact form or equivalent form
const covered = (r) => {
  if (smRaw2.has(r)) return true;
  const m = r.match(/^\/en(\/|$)/);
  if (m) return smRaw2.has(r.replace(/^\/en/, '') || '/'); // /en/x covered by root /x
  return false;
};

const missing = manifest.filter((r) => !covered(r));
console.log('manifest:', manifest.length, '| sitemap:', smUrls.length, '| uncovered:', missing.length);

// Design excludes (from astro.config.ts)
const EXCLUDED = [
  '/keystatic',
  '/admin',
  '/login',
  '/internal',
  '/geo-report',
  '/404',
  '/500',
  '/about/afarer',
  '/aquafarer',
  '/brand-story',
  '/oem-process',
  '/oem-odm',
  '/quality-testing',
  '/search',
  '/use-cases/touring-distance-paddling',
  '/use-cases/fishing-from-inflatable-craft',
];
const strip = (r) => {
  const seg = r.split('/').filter(Boolean);
  if (seg.length && LOCALES.has(seg[0])) return '/' + seg.slice(1).join('/');
  return r;
};
const byDesign = (r) => {
  const s = strip(r);
  if (s === '/brand/team' || s.startsWith('/brand/team/')) return false;
  if (s === '/brand' || s.startsWith('/brand/')) return true;
  if (s === '/news/tag' || s.startsWith('/news/tag/')) return true;
  if (EXCLUDED.some((p) => s === p || s.startsWith(p + '/'))) return true;
  return false;
};

const real = [];
const designed = [];
for (const r of missing) (byDesign(r) ? designed : real).push(r);
console.log('excluded-by-design:', designed.length, '| genuinely uncovered:', real.length);

const cats = {};
for (const r of real) {
  const s = strip(r);
  const key = s === '/' ? '(home)' : '/' + s.split('/').filter(Boolean)[0];
  if (!cats[key]) cats[key] = [];
  cats[key].push(r);
}
console.log('\ngenuinely uncovered by family:');
for (const [k, list] of Object.entries(cats).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`  ${k}: ${list.length}  e.g. ${list.slice(0, 2).join(' | ')}`);
}
