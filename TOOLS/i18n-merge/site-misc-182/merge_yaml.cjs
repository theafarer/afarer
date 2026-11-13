const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const WORK = __dirname;
const OUT = path.join(WORK, 'out');
const SITE = 'E:/github/afarer/src/data/site';
const DATA = 'E:/github/afarer/src/data';

const LOCALES = ['hr', 'hu', 'sk', 'bg', 'sl', 'sr', 'id', 'he', 'ms', 'lt', 'lv', 'et', 'tl'];
const CLDR_LOCALES = ['hr', 'hu', 'sk', 'bg', 'sl', 'sr', 'id', 'he', 'ms', 'lt', 'lv', 'et'];

const en = JSON.parse(fs.readFileSync(path.join(OUT, 'en_source.json'), 'utf8'));
const aboutEn = yaml.load(fs.readFileSync(path.join(SITE, 'about.yaml'), 'utf8'));
const researchEn = yaml.load(fs.readFileSync(path.join(SITE, 'research.yaml'), 'utf8'));
const evidenceEn = yaml.load(fs.readFileSync(path.join(SITE, 'evidence.yaml'), 'utf8'));

function T(loc, id) {
  const v = JSON.parse(fs.readFileSync(path.join(OUT, loc + '.json'), 'utf8'))[id];
  if (typeof v !== 'string' || !v.trim()) throw new Error(loc + ' missing ' + id);
  return v;
}

const DUMP = { lineWidth: 999, noRefs: true };

for (const loc of LOCALES) {
  // ---- about.<loc>.yaml ----
  const about = {
    origin: {
      tagline: T(loc, 'about.origin.tagline'),
      heading: T(loc, 'about.origin.heading'),
      paragraphs: aboutEn.origin.paragraphs.map((_, i) => T(loc, `about.origin.paragraphs.${i}`)),
      image: aboutEn.origin.image,
      image_alt: T(loc, 'about.origin.image_alt'),
    },
    philosophy: {
      tagline: T(loc, 'about.philosophy.tagline'),
      heading: T(loc, 'about.philosophy.heading'),
      description: T(loc, 'about.philosophy.description'),
      cards: aboutEn.philosophy.cards.map((c, i) => ({
        emoji: c.emoji,
        title: T(loc, `about.philosophy.cards.${i}.title`),
        description: T(loc, `about.philosophy.cards.${i}.description`),
      })),
    },
    design: {
      tagline: T(loc, 'about.design.tagline'),
      heading: T(loc, 'about.design.heading'),
      paragraphs: aboutEn.design.paragraphs.map((_, i) => T(loc, `about.design.paragraphs.${i}`)),
      image: aboutEn.design.image,
      image_alt: T(loc, 'about.design.image_alt'),
      stats: aboutEn.design.stats.map((s, i) => ({
        value: s.value,
        label: T(loc, `about.design.stats.${i}.label`),
      })),
    },
  };
  fs.writeFileSync(path.join(SITE, `about.${loc}.yaml`), yaml.dump(about, DUMP), 'utf8');

  // ---- research.<loc>.yaml ----
  const research = {
    badge: T(loc, 'research.badge'),
    heading: T(loc, 'research.heading'),
    description: T(loc, 'research.description'),
    topics: researchEn.topics.map((t, i) => ({
      slug: t.slug,
      category: T(loc, `research.topics.${i}.category`),
      readTime: T(loc, `research.topics.${i}.readTime`),
    })),
  };
  fs.writeFileSync(path.join(SITE, `research.${loc}.yaml`), yaml.dump(research, DUMP), 'utf8');

  // ---- evidence.<loc>.yaml ----
  const VERBATIM_TAGS = new Set(['OEM', 'SUP', 'BSCI']);
  const tagMap = {};
  for (const w of [
    'Charter',
    'Club',
    'Co-Brand',
    'Community',
    'Corporate',
    'Cruise',
    'Custom-Mold',
    'DTC',
    'Distribution',
    'E-commerce',
    'Education',
    'Fishing',
    'Government',
    'Hospitality',
    'Middle-East',
    'Premium',
    'Private-Label',
    'Real-Estate',
    'Rental',
    'Resort',
    'Retail',
    'Wellness',
  ]) {
    tagMap[w] = T(loc, `evidence.tags.${w}`);
  }
  const evidence = {
    badge: T(loc, 'evidence.badge'),
    heading: T(loc, 'evidence.heading'),
    description: T(loc, 'evidence.description'),
    case_studies: evidenceEn.case_studies.map((cs) => ({
      ...cs,
      tags: cs.tags.map((tg) => (VERBATIM_TAGS.has(tg) ? tg : tagMap[tg])),
    })),
    certifications: evidenceEn.certifications.map((c, i) => ({
      name: c.name,
      body: T(loc, `evidence.certifications.${i}.body`),
      desc: T(loc, `evidence.certifications.${i}.desc`),
    })),
    test_results: evidenceEn.test_results.map((t, i) => ({
      metric: T(loc, `evidence.test_results.${i}.metric`),
      value: t.value,
      detail: T(loc, `evidence.test_results.${i}.detail`),
    })),
    spec_sheets: evidenceEn.spec_sheets.map((s, i) => ({
      name: T(loc, `evidence.spec_sheets.${i}.name`),
      href: s.href,
    })),
    deployment_photos: evidenceEn.deployment_photos.map((p, i) => ({
      image: p.image,
      caption: T(loc, `evidence.deployment_photos.${i}.caption`),
      context: T(loc, `evidence.deployment_photos.${i}.context`),
    })),
  };
  fs.writeFileSync(path.join(SITE, `evidence.${loc}.yaml`), yaml.dump(evidence, DUMP), 'utf8');

  // ---- learn-<loc>.yaml ----
  const learnEn = JSON.parse(fs.readFileSync(path.join(OUT, 'en_source.json'), 'utf8'));
  const slugs = [
    'sup',
    'water-safety',
    'sup-basics',
    'drop-stitch-core',
    'inflatable-technology',
    'intermediate-techniques',
    'materials',
    'safety-in-water-sports',
    'sup-size-guide',
  ];
  const learn = {
    misc: {
      readGuide: T(loc, 'learn.misc.readGuide'),
      techDesc: T(loc, 'learn.misc.techDesc'),
      productsDesc: T(loc, 'learn.misc.productsDesc'),
      trustDesc: T(loc, 'learn.misc.trustDesc'),
    },
  };
  const articleSources = {
    sup: [
      ['/learn/sup', 'learn.sup.articles.0'],
      ['/size-guide', 'learn.sup.articles.1'],
      ['/compare/inflatable-vs-hardboard', 'learn.sup.articles.2'],
      ['/learn/intermediate-techniques', 'learn.sup.articles.3'],
      ['/v2/how-to-choose-inflatable-sup', 'learn.sup.articles.4'],
      ['/learn/water-safety', 'learn.sup.articles.5'],
    ],
    'water-safety': [
      ['/learn/water-safety', 'learn.water-safety.articles.0'],
      ['/v2/life-jacket-buying-guide', 'learn.water-safety.articles.1'],
      ['/v2/sup-safety-guide', 'learn.water-safety.articles.2'],
      ['/v2/cold-water-safety-guide', 'learn.water-safety.articles.3'],
      ['/v2/beginner-sup-guide', 'learn.water-safety.articles.4'],
      ['/trust', 'learn.water-safety.articles.5'],
    ],
  };
  for (const s of slugs) {
    const entry = {
      title: T(loc, `learn.${s}.title`),
      description: T(loc, `learn.${s}.description`),
      articles: [],
    };
    if (articleSources[s]) {
      entry.articles = articleSources[s].map(([href, idp]) => ({
        title: T(loc, `${idp}.title`),
        desc: T(loc, `${idp}.desc`),
        href,
      }));
    }
    learn[s] = entry;
  }
  fs.writeFileSync(path.join(DATA, `learn-${loc}.yaml`), yaml.dump(learn, DUMP), 'utf8');
}
console.log('wrote about/research/evidence.<loc>.yaml x13 + learn-<loc>.yaml x13');

// ---- countries.yaml: add 13 label keys ----
const countriesDoc = yaml.load(fs.readFileSync(path.join(SITE, 'countries.yaml'), 'utf8'));
const codes = JSON.parse(fs.readFileSync(path.join(OUT, 'country_codes.json'), 'utf8'));
const valueToCode = new Map(codes.map((m) => [m.value, m.code]));
const terr = {};
for (const l of CLDR_LOCALES) {
  const j = JSON.parse(fs.readFileSync(path.join(WORK, 'cldr', l + '.json'), 'utf8'));
  terr[l] = j.main[l].localeDisplayNames.territories;
}
const tlCountries = JSON.parse(fs.readFileSync(path.join(OUT, 'tl_countries.json'), 'utf8'));

let missing = 0;
for (const c of countriesDoc.countries) {
  const code = valueToCode.get(c.value);
  if (!code) {
    console.log('NO CODE for ' + c.value);
    missing++;
    continue;
  }
  for (const l of CLDR_LOCALES) {
    const name = terr[l][code];
    if (!name) {
      console.log('NO CLDR ' + l + ' for ' + code);
      missing++;
      continue;
    }
    c.label[l] = name;
  }
  const tlName = tlCountries[c.value];
  if (!tlName) {
    console.log('NO tl for ' + c.value);
    missing++;
    continue;
  }
  c.label.tl = tlName;
}
console.log('countries patched, missing:', missing);
fs.writeFileSync(path.join(SITE, 'countries.yaml'), yaml.dump(countriesDoc, { ...DUMP, lineWidth: 120 }), 'utf8');
console.log('countries.yaml rewritten');
