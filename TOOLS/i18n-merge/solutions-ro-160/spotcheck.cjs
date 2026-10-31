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

// Romanian diacritics: ă â î ș ț (and uppercase)
const RO = /[\u0103\u00e2\u00ee\u0218\u0219\u021a\u021b\u0102\u00c2\u00ce]/;

// pick a text fragment (>=25 chars) fully inside one YAML line, starting at a RO diacritic char
const roFrag = (line) => {
  const t = line.trim();
  if (/[&<>]/.test(t)) return null;
  const m = t.match(/[\u0103\u00e2\u00ee\u0219\u021b]/);
  if (!m) return null;
  const idx = t.indexOf(m[0]);
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
  // candidate deep lines: folded-body lines with RO diacritics
  let roLines = [];
  for (const minD of [3, 2, 1]) {
    roLines = [];
    part.forEach((l) => {
      if (/^\s+\S/.test(l) && RO.test(l) && !l.trim().startsWith('-')) {
        const d = (l.match(/[\u0103\u00e2\u00ee\u0218\u0219\u021a\u021b]/g) || []).length;
        if (d >= minD) roLines.push(l);
      }
    });
    if (roLines.length >= 4) break;
  }
  const tryFrag = (idx) => {
    for (let d = 0; d <= 8; d++) {
      for (const j of d === 0 ? [idx] : [idx - d, idx + d]) {
        if (j >= 0 && j < roLines.length) {
          const fr = roFrag(roLines[j]);
          if (fr) return fr;
        }
      }
    }
    return null;
  };
  const picks = [];
  if (roLines.length) {
    picks.push(tryFrag(Math.floor(roLines.length * 0.35)));
    picks.push(tryFrag(Math.floor(roLines.length * 0.8)));
  }
  const frags = picks.filter(Boolean);

  const f = path.join(dist, 'ro', 'solutions', slug, 'index.html');
  if (!fs.existsSync(f)) {
    console.log('MISSING: ' + slug);
    fail++;
    continue;
  }
  const html = fs.readFileSync(f, 'utf8');
  const tm = html.match(/<title>([^<]*)<\/title>/);
  const title = tm ? tm[1] : '';
  const hasRo = RO.test(title);
  let ok = hasRo;
  let line = (hasRo ? 'PASS' : 'FAIL-TITLE') + ' ' + slug + ' | title: ' + title.slice(0, 90);
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
