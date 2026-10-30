const fs = require('fs');
const path = require('path');

const dist = 'E:/github/afarer/dist';
const partsDir = path.join(__dirname, 'parts');
const slugs = [
  'sup-brand-startup',
  'expand-outdoor-brand-water-sports',
  'inflatable-technology-for-surf-business',
  'ecommerce-sup-brand-development',
  'create-fishing-sup-brand',
  'sup-yoga-wellness-equipment',
  'creator-influencer-sup-brand',
  'commercial-sup-fleet',
  'durable-sup-rental-fleet',
  'resort-water-activity-package',
  'sup-academy-equipment-program',
  'luxury-portable-sup-package',
  'retail-private-label-program',
  'regional-oem-supply-chain-partner',
  'corporate-sup-event-package',
  'expand-your-water-sports-portfolio',
  'pet-friendly-paddle-board-program',
  'complete-beach-activity-equipment-solutions',
  'commercial-water-park-sup-fleet',
  'premium-custom-sup-collection',
  'destination-water-sports-package',
  'kids-exploration-sup-program',
  'professional-water-rescue-sup-system',
  'eco-research-monitoring-sup-platform',
];

// pick a text fragment (>=25 chars) fully inside one YAML line, starting at a Greek char
const greekFrag = (line) => {
  const t = line.trim();
  if (/[&<>]/.test(t)) return null;
  const idx = t.search(/[\u0370-\u03FF]/);
  if (idx < 0) return null;
  let s = t.slice(idx, idx + 50);
  if (s.length < 25) return null;
  const sp = s.lastIndexOf(' ');
  if (sp >= 25) s = s.slice(0, sp);
  return s;
};

let pass = 0,
  fail = 0;
for (const slug of slugs) {
  const pf = fs.readdirSync(partsDir).find((f) => f.endsWith(slug + '.yaml'));
  const part = fs.readFileSync(path.join(partsDir, pf), 'utf8').split('\n');
  // candidate deep lines: folded-body lines with dense Greek, from 3 regions
  let greekLines = [];
  for (const minG of [6, 4, 2]) {
    greekLines = [];
    part.forEach((l, i) => {
      if (/^\s+\S/.test(l) && /[\u0370-\u03FF]/.test(l) && !l.trim().startsWith('-')) {
        const g = (l.match(/[\u0370-\u03FF]/g) || []).length;
        if (g >= minG) greekLines.push({ i, l });
      }
    });
    if (greekLines.length >= 4) break;
  }
  const tryFrag = (idx) => {
    for (let d = 0; d <= 8; d++) {
      for (const j of d === 0 ? [idx] : [idx - d, idx + d]) {
        if (j >= 0 && j < greekLines.length) {
          const fr = greekFrag(greekLines[j].l);
          if (fr) return fr;
        }
      }
    }
    return null;
  };
  const picks = [];
  if (greekLines.length) {
    picks.push(tryFrag(Math.floor(greekLines.length * 0.35)));
    picks.push(tryFrag(Math.floor(greekLines.length * 0.8)));
  }
  const frags = picks.filter(Boolean);

  const f = path.join(dist, 'el', 'solutions', slug, 'index.html');
  if (!fs.existsSync(f)) {
    console.log('MISSING: ' + slug);
    fail++;
    continue;
  }
  const html = fs.readFileSync(f, 'utf8');
  const tm = html.match(/<title>([^<]*)<\/title>/);
  const title = tm ? tm[1] : '';
  const hasEl = /[\u0370-\u03FF]/.test(title);
  let ok = hasEl;
  let line = (hasEl ? 'PASS' : 'FAIL-TITLE') + ' ' + slug + ' | title: ' + title.slice(0, 90);
  if (frags.length < 2) {
    line += ' | WARN: only ' + frags.length + ' frags extracted';
    ok = false;
  } else {
    const missing = frags.filter((fr) => !html.includes(fr));
    line += ' | deep: ' + (missing.length === 0 ? 'OK' : 'MISS ' + JSON.stringify(missing));
    if (missing.length) ok = false;
  }
  if (!ok) {
    console.log(line);
    fail++;
    continue;
  }
  console.log(line);
  pass++;
}
console.log('pass=' + pass + ' fail=' + fail);
