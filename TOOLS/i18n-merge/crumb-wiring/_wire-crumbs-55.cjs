#!/usr/bin/env node
/**
 * _wire-crumbs-55.cjs — shard 55 page-layer EN residue clearing, source wiring (TECH.md L45).
 *
 * Wires hardcoded EN breadcrumb names / related-page badges / guides tagline fallback to
 * existing translated UI-dict keys (t()), plus the 1 new dict key added by the shard 55
 * engine ops (b2bSolutionsMatrix.coreNeed). All keys verified x21 in i18n-config.json.
 *
 * Mapping summary (EN -> dict key):
 *   Home -> nav.home | About -> nav.about | Brand -> nav.brand
 *   Team -> home.resources.team | Case Studies -> nav.cases | Certifications -> nav.certifications
 *   Community -> nav.community | Contact -> nav.contact | Custom Lab -> nav.custom
 *   Factory -> nav.factory | Knowledge -> nav.knowledge (EN "Knowledge" -> "Knowledge Base")
 *   Lifestyle -> nav.lifestyle | News -> nav.news | Partners -> nav.partners
 *   Request a Quote -> cta.requestQuote | Resources -> nav.resources | Solutions -> nav.solutions
 *   Trust -> nav.trust | Warranty -> nav.warranty | Global Presence -> nav.brandGlobalPresence
 *   Marine Expertise -> nav.brandMarineExpertise | Why Afarer -> nav.brandWhyAfarer
 *   Afarer Story -> nav.afarerStory (EN casing "Afarer Story" -> "afarer Story", site nav convention)
 *   B2B Solutions Matrix -> nav.b2bSolutionsMatrix
 *   Build Your Own Brand -> nav.solutionsBuildBrand | Distributors -> nav.solutionsDistributors
 *   Rental Operators -> nav.solutionsRentalOperators | Retail Partners -> nav.solutionsRetailPartners
 *   Privacy Policy -> nav.privacy | Terms and Conditions -> nav.terms (EN -> "Terms")
 *   Medical Disclaimer -> nav.disclaimer
 *   ep badges: Quality -> nav.qualityNav | R&D -> nav.randd (EN -> "R&D Center")
 *              Facility -> nav.factory (EN -> "Factory") | Design -> nav.designPowerhouse
 *   b2b table headers: 'Core Need' (stray quotes bug) -> t('b2bSolutionsMatrix.coreNeed')
 *                      'Solution' (stray quotes bug) -> t('home.useCases.solution')
 *   guides tagline fallback 'Guides' -> t('guides.pageLabel')
 *   design-powerhouse crumb fallback 'Design & Innovation' -> t('nav.designPowerhouse')
 *
 * Out of scope (documented in TECH.md L45): marine-industry/whitepaper page-name fr() crumbs
 * (no dict keys; left as fr()), news/page "Page N" crumb, body-layer literal cards
 * (solutions/index cards, partners programs, certifications items), metadata.title family,
 * learn/[slug] hub, geo-report data layer, extra-locale systemic debt.
 *
 * Idempotent: --dry validates find counts; --patch applies; re-run reports already-applied.
 */
const fs = require('fs');

const REPO = 'E:/github/afarer';
const dry = process.argv.includes('--dry');
const patch = process.argv.includes('--patch');
if (!dry && !patch) {
  console.log('usage: node _wire-crumbs-55.cjs --dry | --patch');
  process.exit(1);
}

const P = 'src/pages/[lang]/';
const count = (s, f) => s.split(f).length - 1;

const T_IMPORT = "import { getUiForLang } from '~/i18n/generated/ui-all';";
const LANG_IMPORT = "import { languages } from '~/i18n/config';";
const LANG_DESTR = 'const { lang } = Astro.params;';
const T_LINE = "const t = (k: string) => getUiForLang(lang)?.[k] || getUiForLang('en')?.[k] || '';";
const TNAV_LINE = "const tnav = (k: string) => getUiForLang(lang)?.[k] || getUiForLang('en')?.[k] || '';";
const QUALITY_T = "const t = (s: string) => (typeof s === 'string' ? s.replace(/\\{SITE\\}/g, SITE.name) : s);";

// helper insertion plan: imp = needs T_IMPORT; tline = T_LINE | TNAV_LINE | null
// anchor: 'lang' (after LANG_DESTR) | 'fr' (after contact/news fr helper) | 'qualityT'
const HELPERS = {
  'about.astro': { imp: false, tline: T_LINE, anchor: 'lang' },
  'afarer-story.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'brand/team.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'brand-global-presence.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'brand-marine-expertise.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'brand-why-afarer.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'cases/index.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'community.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'contact.astro': { imp: true, tline: TNAV_LINE, anchor: 'fr' }, // local function t(record) exists
  'factory/equipment.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'factory/process.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'gallery/index.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'lifestyle/index.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'media/index.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'news/index.astro': { imp: true, tline: T_LINE, anchor: 'fr' },
  'news/page/[page].astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'news/[slug].astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'randdcenter/index.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'request-quotation.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'trust.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'disclaimer.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'whitepaper/oem-sup-manufacturing-guide.astro': { imp: true, tline: T_LINE, anchor: 'lang' },
  'quality.astro': { imp: true, tline: TNAV_LINE, anchor: 'qualityT' },
};

const FR_LINE = "const fr = (en: string, francais: string) => (lang === 'fr' ? francais : en);";

const H = (name) => "{ name: t('nav." + name + "') }";

const EDITS = [
  // ---- simple two-item crumb one-liners ----
  {
    f: 'about.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'About' }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.about') }];",
  },
  {
    f: 'afarer-story.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Afarer Story' }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.afarerStory') }];",
  },
  {
    f: 'cases/index.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Case Studies' }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.cases') }];",
  },
  {
    f: 'certifications.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Certifications' }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.certifications') }];",
  },
  {
    f: 'community.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Community' }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.community') }];",
  },
  {
    f: 'custom/index.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Custom Lab' }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.custom') }];",
  },
  {
    f: 'lifestyle/index.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Lifestyle' }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.lifestyle') }];",
  },
  {
    f: 'partners.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Partners' }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.partners') }];",
  },
  {
    f: 'request-quotation.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Request a Quote' }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('cta.requestQuote') }];",
  },
  {
    f: 'resources.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Resources' }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.resources') }];",
  },
  {
    f: 'trust.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Trust' }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.trust') }];",
  },
  {
    f: 'warranty.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Warranty' }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.warranty') }];",
  },
  {
    f: 'solutions/index.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Solutions' }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.solutions') }];",
  },
  {
    f: 'solutions/by-use-case.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: t('solutionsByUseCase.title') }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('solutionsByUseCase.title') }];",
  },
  {
    f: 'gallery/index.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: hero.title }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: hero.title }];",
  },
  {
    f: 'media/index.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: hero.title }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: hero.title }];",
  },
  {
    f: 'quality.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: hero.tagline }];",
    rep: "const crumbs = [{ name: tnav('nav.home'), href: `/${lang}/` }, { name: hero.tagline }];",
  },
  {
    f: 'randdcenter/index.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: hero.tagline }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: hero.tagline }];",
  },

  // ---- fr() legal-page crumbs ----
  {
    f: 'privacy.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: fr('Privacy Policy', 'Politique de Confidentialité') }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.privacy') }];",
  },
  {
    f: 'terms.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: fr('Terms and Conditions', 'Conditions Générales') }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.terms') }];",
  },
  {
    f: 'disclaimer.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: fr('Medical Disclaimer', 'Avertissement médical') }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.disclaimer') }];",
  },

  // ---- inline breadcrumbs attr ----
  {
    f: 'contact.astro',
    find: "breadcrumbs={[{ name: 'Home', href: `/${lang}/` }, { name: 'Contact' }]}",
    rep: "breadcrumbs={[{ name: tnav('nav.home'), href: `/${lang}/` }, { name: tnav('nav.contact') }]}",
  },
  {
    f: 'news/index.astro',
    find: "breadcrumbs={[{ name: 'Home', href: `/${lang}/` }, { name: 'News' }]}>",
    rep: "breadcrumbs={[{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.news') }]}>",
  },
  {
    f: 'news/[slug].astro',
    find: "breadcrumbs={[{ name: 'Home', href: `/${lang}/` }, { name: 'News', href: `/${lang}/news` }, { name: post.title }]}",
    rep: "breadcrumbs={[\n    { name: t('nav.home'), href: `/${lang}/` },\n    { name: t('nav.news'), href: `/${lang}/news` },\n    { name: post.title },\n  ]}",
  },

  // ---- multi-line crumb blocks ----
  {
    f: 'b2b-solutions-matrix.astro',
    find: "  { name: 'Home', href: `/${lang}/` },\n  { name: t('nav.solutions') || 'Solutions' },\n  { name: 'B2B Solutions Matrix' },",
    rep: "  { name: t('nav.home'), href: `/${lang}/` },\n  { name: t('nav.solutions') || 'Solutions' },\n  { name: t('nav.b2bSolutionsMatrix') },",
  },
  {
    f: 'engineering-perfection.astro',
    find: "  { name: 'Home', href: `/${lang}/` },\n  { name: t('engineeringPerfection.nav') || 'Engineering Perfection' },",
    rep: "  { name: t('nav.home'), href: `/${lang}/` },\n  { name: t('engineeringPerfection.nav') || 'Engineering Perfection' },",
  },
  {
    f: 'engineering-team.astro',
    find: "      { name: 'Home', href: `/${lang}/` },\n      { name: 'About', href: `/${lang}/about` },",
    rep: "      { name: t('nav.home'), href: `/${lang}/` },\n      { name: t('nav.about'), href: `/${lang}/about` },",
  },
  {
    f: 'factory/capacity.astro',
    find: "  { name: 'Home', href: `/${lang}/` },\n  { name: 'Factory', href: `/${lang}/factory` },",
    rep: "  { name: t('nav.home'), href: `/${lang}/` },\n  { name: t('nav.factory'), href: `/${lang}/factory` },",
  },
  {
    f: 'factory/equipment.astro',
    find: "  { name: 'Home', href: `/${lang}/` },\n  { name: 'Factory', href: `/${lang}/factory` },",
    rep: "  { name: t('nav.home'), href: `/${lang}/` },\n  { name: t('nav.factory'), href: `/${lang}/factory` },",
  },
  {
    f: 'factory/index.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Factory' }];",
    rep: "const crumbs = [{ name: t('nav.home'), href: `/${lang}/` }, { name: t('nav.factory') }];",
  },
  {
    f: 'factory/oem-capability.astro',
    find: "  { name: 'Home', href: `/${lang}/` },\n  { name: 'Factory', href: `/${lang}/factory` },",
    rep: "  { name: t('nav.home'), href: `/${lang}/` },\n  { name: t('nav.factory'), href: `/${lang}/factory` },",
  },
  {
    f: 'factory/process.astro',
    find: "  { name: 'Home', href: `/${lang}/` },\n  { name: 'Factory', href: `/${lang}/factory` },",
    rep: "  { name: t('nav.home'), href: `/${lang}/` },\n  { name: t('nav.factory'), href: `/${lang}/factory` },",
  },
  {
    f: 'factory/quality-lab.astro',
    find: "  { name: 'Home', href: `/${lang}/` },\n  { name: 'Factory', href: `/${lang}/factory` },",
    rep: "  { name: t('nav.home'), href: `/${lang}/` },\n  { name: t('nav.factory'), href: `/${lang}/factory` },",
  },
  {
    f: 'knowledge.astro',
    find: "  { name: 'Home', href: `/${lang}/` },\n  { name: 'Knowledge', href: `/${lang}/knowledge` },",
    rep: "  { name: t('nav.home'), href: `/${lang}/` },\n  { name: t('nav.knowledge'), href: `/${lang}/knowledge` },",
  },
  {
    f: 'news/page/[page].astro',
    find: "    { name: 'Home', href: `/${lang}/` },\n    { name: 'News', href: `/${lang}/news` },",
    rep: "    { name: t('nav.home'), href: `/${lang}/` },\n    { name: t('nav.news'), href: `/${lang}/news` },",
  },
  {
    f: 'solutions/by-industry.astro',
    find: "  { name: 'Home', href: `/${lang}/` },\n  { name: t('solutionsByIndustry.title') || 'Solutions by Industry' },",
    rep: "  { name: t('nav.home'), href: `/${lang}/` },\n  { name: t('solutionsByIndustry.title') || 'Solutions by Industry' },",
  },
  {
    f: 'use-cases/[slug].astro',
    find: "      { name: 'Home', href: `/${lang}/` },",
    rep: "      { name: t('nav.home'), href: `/${lang}/` },",
  },
  {
    f: 'marine-industry/index.astro',
    find: "      { name: fr('Home', 'Accueil'), href: `/${lang}/` },",
    rep: "      { name: t('nav.home'), href: `/${lang}/` },",
  },
  {
    f: 'whitepaper/oem-sup-manufacturing-guide.astro',
    find: "    { name: fr('Home', 'Accueil'), href: `/${lang}/` },",
    rep: "    { name: t('nav.home'), href: `/${lang}/` },",
  },
  {
    f: 'whitepaper/oem-sup-manufacturing-guide.astro',
    find: "    { name: fr('Resources', 'Ressources'), href: `/${lang}/research` },",
    rep: "    { name: t('nav.resources'), href: `/${lang}/research` },",
  },

  // ---- three-item one-liners -> multi-line ----
  {
    f: 'brand/team.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Brand', href: `/${lang}/brand/` }, { name: 'Team' }];",
    rep: "const crumbs = [\n  { name: t('nav.home'), href: `/${lang}/` },\n  { name: t('nav.brand'), href: `/${lang}/brand/` },\n  { name: t('home.resources.team') },\n];",
  },
  {
    f: 'brand-global-presence.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Brand' }, { name: 'Global Presence' }];",
    rep: "const crumbs = [\n  { name: t('nav.home'), href: `/${lang}/` },\n  { name: t('nav.brand') },\n  { name: t('nav.brandGlobalPresence') },\n];",
  },
  {
    f: 'brand-marine-expertise.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Brand' }, { name: 'Marine Expertise' }];",
    rep: "const crumbs = [\n  { name: t('nav.home'), href: `/${lang}/` },\n  { name: t('nav.brand') },\n  { name: t('nav.brandMarineExpertise') },\n];",
  },
  {
    f: 'brand-why-afarer.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: 'Brand' }, { name: 'Why Afarer' }];",
    rep: "const crumbs = [\n  { name: t('nav.home'), href: `/${lang}/` },\n  { name: t('nav.brand') },\n  { name: t('nav.brandWhyAfarer') },\n];",
  },

  // ---- solutions subpage third crumbs ----
  {
    f: 'solutions/build-your-own-brand.astro',
    find: "  { name: 'Build Your Own Brand' },",
    rep: "  { name: t('nav.solutionsBuildBrand') },",
  },
  {
    f: 'solutions/distributors.astro',
    find: "  { name: 'Distributors' },",
    rep: "  { name: t('nav.solutionsDistributors') },",
  },
  {
    f: 'solutions/rental-operators.astro',
    find: "  { name: 'Rental Operators' },",
    rep: "  { name: t('nav.solutionsRentalOperators') },",
  },
  {
    f: 'solutions/retail-partners.astro',
    find: "  { name: 'Retail Partners' },",
    rep: "  { name: t('nav.solutionsRetailPartners') },",
  },

  // ---- engineering-perfection related-page badges ----
  { f: 'engineering-perfection.astro', find: "        label: 'Quality',", rep: "        label: t('nav.qualityNav')," },
  { f: 'engineering-perfection.astro', find: "        label: 'R&D',", rep: "        label: t('nav.randd')," },
  { f: 'engineering-perfection.astro', find: "        label: 'Facility',", rep: "        label: t('nav.factory')," },
  {
    f: 'engineering-perfection.astro',
    find: "        label: 'Design',",
    rep: "        label: t('nav.designPowerhouse'),",
  },

  // ---- b2b table headers (stray-quote bug; reps in prettier-normalized form) ----
  {
    f: 'b2b-solutions-matrix.astro',
    find: "w-[28%]\">'Core Need'</th>",
    rep: "w-[28%]\"\n              >{t('b2bSolutionsMatrix.coreNeed') || 'Core Need'}</th\n            >",
  },
  {
    f: 'b2b-solutions-matrix.astro',
    find: "w-[44%]\">'Solution'</th>",
    rep: "w-[44%]\"\n              >{t('home.useCases.solution') || 'Solution'}</th\n            >",
  },

  // ---- guides tagline fallback + design-powerhouse crumb fallback ----
  {
    f: 'guides/index.astro',
    find: "{hero.tagline || 'Guides'}",
    rep: "{hero.tagline || t('guides.pageLabel') || 'Guides'}",
  },
  {
    f: 'design-powerhouse.astro',
    find: "const crumbs = [{ name: 'Home', href: `/${lang}/` }, { name: _('designPowerhouse.nav', 'Design & Innovation') }];",
    rep: "const crumbs = [\n  { name: t('nav.home'), href: `/${lang}/` },\n  { name: _('designPowerhouse.nav', t('nav.designPowerhouse')) },\n];",
  },

  // ---- design-powerhouse _() fallback revival (pre-existing bug found in dist walk) ----
  // t() returns '' on a missing key, so `v === key` was never true and EVERY _() call rendered
  // '' for all 21 locales (empty title/stats/caps/crumb; designPowerhouse.* keys exist nowhere).
  {
    f: 'design-powerhouse.astro',
    find: '  const v = t(key);\n  return v === key ? fallback : v;',
    rep: '  const v = t(key);\n  return v || fallback;',
  },
];

function main() {
  const byFile = new Map();
  for (const e of EDITS) {
    if (!byFile.has(e.f)) byFile.set(e.f, []);
    byFile.get(e.f).push(e);
  }
  for (const h of Object.keys(HELPERS)) if (!byFile.has(h)) byFile.set(h, []);
  for (const f of Object.keys(HELPERS)) if (!byFile.has(f)) byFile.set(f, byFile.get(f) || []);

  let applied = 0;
  let already = 0;
  let errors = 0;
  const touched = [];

  for (const [rel, edits] of byFile) {
    const path = REPO + '/' + P + rel;
    let src;
    try {
      src = fs.readFileSync(path, 'utf8');
    } catch (err) {
      errors++;
      console.log('ERR cannot read ' + rel + ': ' + err.message);
      continue;
    }
    let dirty = false;

    // helper insertions
    const hp = HELPERS[rel];
    if (hp) {
      if (hp.imp && !src.includes(T_IMPORT)) {
        if (count(src, LANG_IMPORT) !== 1) {
          errors++;
          console.log('ERR ' + rel + ': languages import anchor x' + count(src, LANG_IMPORT));
        } else {
          src = src.replace(LANG_IMPORT, LANG_IMPORT + '\n' + T_IMPORT);
          dirty = true;
          applied++;
          console.log('  + ' + rel + ': getUiForLang import');
        }
      }
      if (hp.tline && !src.includes(hp.tline)) {
        let anchor = null;
        if (hp.anchor === 'lang') anchor = LANG_DESTR;
        else if (hp.anchor === 'fr') anchor = FR_LINE;
        else if (hp.anchor === 'qualityT') anchor = QUALITY_T;
        if (!anchor || count(src, anchor) !== 1) {
          errors++;
          console.log('ERR ' + rel + ': t-anchor missing/ambiguous');
        } else {
          src = src.replace(anchor, anchor + '\n' + hp.tline);
          dirty = true;
          applied++;
          console.log('  + ' + rel + ': ' + (hp.tline === TNAV_LINE ? 'tnav' : 't') + ' helper');
        }
      }
    }

    // edits
    for (const e of edits) {
      const fc = count(src, e.find);
      const rc = count(src, e.rep);
      if (fc === 1) {
        src = src.replace(e.find, e.rep);
        dirty = true;
        applied++;
        console.log('  ~ ' + rel + ': ' + e.find.slice(0, 60).replace(/\n/g, ' ') + '...');
      } else if (fc === 0 && rc >= 1) {
        already++;
      } else {
        errors++;
        console.log('ERR ' + rel + ': find x' + fc + ' rep x' + rc + ': ' + JSON.stringify(e.find.slice(0, 80)));
      }
    }

    if (dirty) {
      touched.push(rel);
      if (patch) fs.writeFileSync(path, src, 'utf8');
    }
  }

  console.log('');
  console.log(
    '[' +
      (dry ? 'DRY' : 'PATCH') +
      '] applied: ' +
      applied +
      ', already: ' +
      already +
      ', errors: ' +
      errors +
      ', files: ' +
      touched.length
  );
  if (errors) {
    console.log('ABORT: errors present, nothing written' + (patch ? '' : ' (dry)'));
    process.exit(1);
  }
  if (patch) console.log('written: ' + touched.length + ' files');
}

main();
