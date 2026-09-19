const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', '..');

const CJK_LETTER = {
  '\u628F': 'e', // →抏ntry  -> → entry
  '\u62AA': 'p', // →抪roduct
  '\u62AF': 's', // →抯afety
  '\u628C': 'b', // →抌rand
  '\u6505': 'e', // —攅ntry
  '\u6511': 'p', // —攑roduct
  '\u6515': 's', // —攕afety
  '\u650E': 'm', // —攎anufacturing
  '\u64EF': 'p', // —擯roduct
  '\u63CA': 'f', // —揊ind
  '\u63F3': 'a', // —揳farer
  '\u6415': 't', // —搕hey
  '\u63FB': 'f', // —揻ish
  '\u640D': 'p', // —損recision
};
const sepCjk = new RegExp('([\u2014\u2192])([' + Object.keys(CJK_LETTER).join('') + '])', 'g');
function fixSepCjk(s) {
  return s.replace(sepCjk, (m, sep, cjk) => sep + ' ' + CJK_LETTER[cjk]);
}

const contactLocales = ['contact.yaml', 'cs/contact.yaml', 'da/contact.yaml', 'es/contact.yaml', 'fi/contact.yaml', 'fr/contact.yaml', 'ro/contact.yaml'];
const guideFiles = [
  'beginner-guide',
  'choosing-paddle',
  'how-to-choose-your-sup',
  'inflatable-repair',
  'inflatable-vs-hard',
  'kayak-techniques',
  'multi-day-trip',
  'paddling-techniques',
  'safety-tips',
  'sup-fishing',
  'sup-fitness',
  'sup-maintenance',
  'sup-with-kids',
  'sup-yoga',
  'understanding-specs',
  'weather-conditions',
].map((n) => `src/pages/guides/${n}.astro`);

const tasks = [];
for (const rel of contactLocales) {
  tasks.push({ rel: `src/data/pages/${rel}`, fn: (s) => s.replace(/\u2192(?=\S)/g, '\u2192 ') });
}
for (const rel of guideFiles) {
  tasks.push({ rel, fn: (s) => s.replace(/>\u2192(?:uides|Guides)</g, '>\u2190 Guides<') });
}
tasks.push({
  rel: 'src/lib/seo/brand-layer.ts',
  fn: fixSepCjk,
});
tasks.push({ rel: 'src/lib/seo/brand-os.ts', fn: fixSepCjk });
tasks.push({ rel: 'src/pages/solutions/by-use-case.astro', fn: fixSepCjk });
tasks.push({
  rel: 'src/pages/keystatic/branding.astro',
  fn: (s) =>
    s
      .replace('(Contact email \u2192o)', '(Contact email \u2192 to)')
      .replace('(Contact \u2192rom)', '(Contact \u2192 from)'),
});
tasks.push({ rel: 'src/components/widgets/Footer.astro', fn: (s) => s.replace('${siteName} \u8def All rights reserved.', '${siteName} \u00b7 All rights reserved.') });
tasks.push({
  rel: 'src/pages/factory/index.astro',
  fn: (s) => s.split('Tolerance \u5364').join('Tolerance \u00b1').split('tolerance \u5364').join('tolerance \u00b1'),
});
tasks.push({
  rel: 'src/pages/research/ce-certification-guide.astro',
  fn: (s) => s.split('\u8305').join('\u00e9').split('\u813a').join('\u00dc'),
});
tasks.push({
  rel: 'src/pages/ultra-stable-sup.astro',
  fn: (s) => s.replace('practitioners,\u6444\u5f71 enthusiasts', 'practitioners, photography enthusiasts'),
});
tasks.push({
  rel: 'src/pages/compare/single-chamber-vs-multi-chamber.astro',
  fn: (s) => s.replace('3+\u72ec\u7acb chambers', '3+ independent chambers'),
});
tasks.push({ rel: 'src/pages/solutions/by-industry.astro', fn: (s) => s.replace("join(' \u8def ')", "join(' \u00b7 ')") });

let total = 0;
for (const t of tasks) {
  const p = path.join(root, t.rel);
  const before = fs.readFileSync(p, 'utf8');
  const after = t.fn(before);
  if (after === before) {
    console.log('NOCHANGE', t.rel);
    continue;
  }
  const changedLines = before.split(/\r?\n/).filter((l, i) => l !== after.split(/\r?\n/)[i]).length;
  fs.writeFileSync(p, after, 'utf8');
  total++;
  console.log('FIXED   ', t.rel, `(${changedLines} lines)`);
}
console.log('\nfiles changed:', total);
