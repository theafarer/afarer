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

// Thai script
const TH = /[\u0e00-\u0e7f]/;

// pick a text fragment (>=25 chars) fully inside one YAML line, starting at a Thai char
const thFrag = (line) => {
  const t = line.trim();
  if (/[&<>]/.test(t)) return null;
  const m = t.match(/[\u0e00-\u0e7f]/);
  if (!m) return null;
  const idx = t.indexOf(m[0]);
  let s = t.slice(idx, idx + 60);
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
  // candidate deep lines: indented lines with Thai chars
  let thLines = [];
  for (const minD of [8, 4, 2, 1]) {
    thLines = [];
    part.forEach((l) => {
      if (/^\s+\S/.test(l) && TH.test(l) && !l.trim().startsWith('-')) {
        const d = (l.match(/[\u0e00-\u0e7f]/g) || []).length;
        if (d >= minD) thLines.push(l);
      }
    });
    if (thLines.length >= 4) break;
  }
  const tryFrag = (idx) => {
    for (let d = 0; d <= 8; d++) {
      for (const j of d === 0 ? [idx] : [idx - d, idx + d]) {
        if (j >= 0 && j < thLines.length) {
          const fr = thFrag(thLines[j]);
          if (fr) return fr;
        }
      }
    }
    return null;
  };
  const picks = [];
  if (thLines.length) {
    picks.push(tryFrag(Math.floor(thLines.length * 0.35)));
    picks.push(tryFrag(Math.floor(thLines.length * 0.8)));
  }
  const frags = picks.filter(Boolean);

  const f = path.join(dist, 'th', 'solutions', slug, 'index.html');
  if (!fs.existsSync(f)) {
    console.log('MISSING: ' + slug);
    fail++;
    continue;
  }
  const html = fs.readFileSync(f, 'utf8');
  const tm = html.match(/<title>([^<]*)<\/title>/);
  const title = tm ? tm[1] : '';
  const hasTh = TH.test(title);
  let ok = hasTh;
  let line = (hasTh ? 'PASS' : 'FAIL-TITLE') + ' ' + slug + ' | title: ' + title.slice(0, 90);
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
