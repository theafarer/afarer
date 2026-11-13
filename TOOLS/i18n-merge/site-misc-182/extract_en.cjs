const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

const SITE = 'E:/github/afarer/src/data/site';
const OUT = path.join(__dirname, 'out');
fs.mkdirSync(OUT, { recursive: true });

const about = yaml.load(fs.readFileSync(path.join(SITE, 'about.yaml'), 'utf8'));
const research = yaml.load(fs.readFileSync(path.join(SITE, 'research.yaml'), 'utf8'));
const evidence = yaml.load(fs.readFileSync(path.join(SITE, 'evidence.yaml'), 'utf8'));

const src = {};
function put(id, v) {
  if (typeof v !== 'string' || !v.trim()) throw new Error('empty value for ' + id);
  src[id] = v;
}

// ---- about ----
put('about.origin.tagline', about.origin.tagline);
put('about.origin.heading', about.origin.heading);
about.origin.paragraphs.forEach((p, i) => put(`about.origin.paragraphs.${i}`, p));
put('about.origin.image_alt', about.origin.image_alt);
put('about.philosophy.tagline', about.philosophy.tagline);
put('about.philosophy.heading', about.philosophy.heading);
put('about.philosophy.description', about.philosophy.description);
about.philosophy.cards.forEach((c, i) => {
  put(`about.philosophy.cards.${i}.title`, c.title);
  put(`about.philosophy.cards.${i}.description`, c.description);
});
put('about.design.tagline', about.design.tagline);
put('about.design.heading', about.design.heading);
about.design.paragraphs.forEach((p, i) => put(`about.design.paragraphs.${i}`, p));
put('about.design.image_alt', about.design.image_alt);
about.design.stats.forEach((s, i) => put(`about.design.stats.${i}.label`, s.label));

// ---- research ----
put('research.badge', research.badge);
put('research.heading', research.heading);
put('research.description', research.description);
research.topics.forEach((t, i) => {
  put(`research.topics.${i}.category`, t.category);
  put(`research.topics.${i}.readTime`, t.readTime);
});

// ---- evidence ----
put('evidence.badge', evidence.badge);
put('evidence.heading', evidence.heading);
put('evidence.description', evidence.description);
evidence.certifications.forEach((c, i) => {
  put(`evidence.certifications.${i}.body`, c.body);
  put(`evidence.certifications.${i}.desc`, c.desc);
});
evidence.test_results.forEach((t, i) => {
  put(`evidence.test_results.${i}.metric`, t.metric);
  put(`evidence.test_results.${i}.detail`, t.detail);
});
evidence.spec_sheets.forEach((s, i) => put(`evidence.spec_sheets.${i}.name`, s.name));
evidence.deployment_photos.forEach((p, i) => {
  put(`evidence.deployment_photos.${i}.caption`, p.caption);
  put(`evidence.deployment_photos.${i}.context`, p.context);
});

// tags: unique translatable words (OEM/SUP/BSCI stay verbatim)
const VERBATIM_TAGS = new Set(['OEM', 'SUP', 'BSCI']);
const tagWords = new Set();
evidence.case_studies.forEach((cs) =>
  cs.tags.forEach((tg) => {
    if (!VERBATIM_TAGS.has(tg)) tagWords.add(tg);
  })
);
const tagList = [...tagWords].sort();
tagList.forEach((w) => put(`evidence.tags.${w}`, w));

// ---- learn (EN hardcoded in src/pages/[lang]/learn/[slug].astro) ----
const learn = {
  sup: {
    title: 'SUP Knowledge — Inflatable SUP Guides & Resources | Afarer',
    description:
      'Complete SUP knowledge hub covering beginner guides, board sizing, technique tutorials, safety tips, and inflatable SUP technology.',
    articles: [
      {
        title: "SUP Basics — Beginner's Guide",
        desc: 'Everything a beginner needs to know — board types, paddle sizing, stance, and first-day tips.',
      },
      {
        title: 'SUP Size Guide',
        desc: 'Find the right board length, width, and volume for your weight, skill, and paddling style.',
      },
      {
        title: 'Inflatable vs Hard Board',
        desc: 'Which is right for you? Portability, performance, durability, and cost compared.',
      },
      {
        title: 'Intermediate Techniques',
        desc: 'Step up your paddling with advanced strokes, turning techniques, and rough-water handling.',
      },
      {
        title: 'How to Choose an Inflatable SUP',
        desc: 'Navigate the key factors — construction, thickness, fin setup, and included accessories.',
      },
      {
        title: 'Water Safety',
        desc: 'Essential safety knowledge including weather reading, PFD selection, self-rescue, and group paddling.',
      },
    ],
  },
  'water-safety': {
    title: 'Water Safety Knowledge — Safe Paddling Guides | Afarer',
    description:
      'Comprehensive water safety resources for SUP, kayaking, and boating. Learn about PFD selection, weather reading, self-rescue, cold water safety, and CE certification.',
    articles: [
      {
        title: 'Water Safety Guide',
        desc: 'Essential safety knowledge for every paddler — weather, PFDs, self-rescue, and group paddling protocols.',
      },
      {
        title: 'Life Jacket & PFD Guide',
        desc: 'How to choose the right personal flotation device for SUP, kayaking, boating, and professional use.',
      },
      {
        title: 'SUP Safety Checklist',
        desc: 'Pre-launch safety checklist every stand-up paddle boarder should follow before hitting the water.',
      },
      {
        title: 'Cold Water Paddling Safety',
        desc: 'Essential precautions, gear, and techniques for paddling in cold water conditions.',
      },
      {
        title: 'Beginner Paddling Mistakes',
        desc: 'Common mistakes first-time paddlers make and how to avoid them for a safer, more enjoyable experience.',
      },
      {
        title: 'CE Certification Explained',
        desc: 'What CE certification means for inflatable SUP boards — the standards, testing, and why it matters for safety.',
      },
    ],
  },
  'sup-basics': {
    title: "SUP Basics — Beginner's Guide to Stand-Up Paddle Boarding",
    description:
      "Everything you need to know to start stand-up paddle boarding. Gear guides, sizing advice, safety tips, and beginner techniques from Afarer's knowledge center.",
  },
  'drop-stitch-core': {
    title: 'Drop-Stitch Core Technology — How Inflatable SUPs Achieve Rigidity',
    description:
      'Deep dive into drop-stitch construction technology: how thousands of polyester threads create rigid inflatable platforms at 15-25 PSI. Thread density, fabric integration, manufacturing process, and performance comparisons.',
  },
  'inflatable-technology': {
    title: 'Inflatable SUP Technology — Materials, Construction & Engineering',
    description:
      'How inflatable SUP boards are built — material layup, drop-stitch cores, valve systems, RF welding, and quality testing. Understand what makes a durable, high-performance inflatable.',
  },
  'intermediate-techniques': {
    title: 'Intermediate SUP & Kayak Techniques — Beyond the Basics',
    description:
      'Level up your paddling skills with advanced paddle strokes, rough water handling, wind management, self-rescue techniques, and group paddling etiquette. For paddlers ready to move beyond beginner skills.',
  },
  materials: {
    title: 'Inflatable SUP Materials — PVC, EVA & Drop-Stitch Fabric',
    description:
      'Comprehensive guide to materials used in inflatable SUP manufacturing: military-grade PVC, EVA foam decking, drop-stitch fabric, carbon fiber, and aluminum alloys. Specifications, applications, and selection criteria.',
  },
  'safety-in-water-sports': {
    title: 'Water Sports Safety — Essential Knowledge for Paddlers',
    description:
      'Essential safety knowledge for every paddler — weather reading, PFD selection, self-rescue, and group paddling protocols.',
  },
  'sup-size-guide': {
    title: 'SUP Size Guide — How to Choose the Right Board Length, Width & Volume',
    description:
      'Comprehensive SUP sizing guide covering board length, width, thickness, volume (liters), and rider weight matching. Find the right inflatable SUP size for your weight, skill level, and paddling activity.',
  },
};
for (const [slug, d] of Object.entries(learn)) {
  put(`learn.${slug}.title`, d.title);
  put(`learn.${slug}.description`, d.description);
  (d.articles || []).forEach((a, i) => {
    put(`learn.${slug}.articles.${i}.title`, a.title);
    put(`learn.${slug}.articles.${i}.desc`, a.desc);
  });
}
put('learn.misc.readGuide', 'Read guide →');
put('learn.misc.techDesc', 'Marine safety engineering and material testing');
put('learn.misc.productsDesc', 'Explore the full Afarer product catalog');
put('learn.misc.trustDesc', 'CE, ISO and BSCI compliance');

// cross-check learn EN strings appear verbatim in the .astro source
const astro = fs.readFileSync('E:/github/afarer/src/pages/[lang]/learn/[slug].astro', 'utf8');
for (const [id, v] of Object.entries(src)) {
  if (!id.startsWith('learn.')) continue;
  if (id === 'learn.misc.readGuide') continue; // 'Read guide →' is inside fr() call
  const probe = v.replace(/\s+/g, ' ').trim();
  const astroNorm = astro.replace(/\s+/g, ' ');
  if (!astroNorm.includes(probe.slice(0, 60))) throw new Error('learn string not found in .astro: ' + id);
}

fs.writeFileSync(path.join(OUT, 'en_source.json'), JSON.stringify(src, null, 1), 'utf8');
console.log('en_source.json:', Object.keys(src).length, 'strings');
console.log('tag words:', tagList.join(', '));
