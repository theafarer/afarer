const fs = require('fs');
const path = require('path');

const dist = 'E:/github/afarer/dist';
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
// ar: person names transliterated to Arabic in deep case-study bodies (verified via probe_names.cjs)
const deepNames = {
  'sup-yoga-wellness-equipment': ['يوشيدا', 'سيمون'],
  'creator-influencer-sup-brand': ['هاوغن', 'ميا'],
  'commercial-sup-fleet': ['أحمد', 'ديميتري'],
  'durable-sup-rental-fleet': ['سارة', 'ميغيل'],
  'resort-water-activity-package': ['تشاياسيت', 'نارونغ'],
  'sup-academy-equipment-program': ['كينجي', 'كايلي'],
  'luxury-portable-sup-package': ['إريك', 'حمدان'],
  'retail-private-label-program': ['أوكونكوو', 'شن'],
  'regional-oem-supply-chain-partner': ['جيمس', 'راشد'],
  'corporate-sup-event-package': ['كلاوس', 'شارما'],
  'expand-your-water-sports-portfolio': ['أوليفيرا', 'إيزابيلا'],
  'pet-friendly-paddle-board-program': ['إيما', 'لوك'],
  'complete-beach-activity-equipment-solutions': ['ديميتري', 'كارلوس'],
  'commercial-water-park-sup-fleet': ['نادية', 'الفلاسي'],
  'premium-custom-sup-collection': ['ماتيو', 'إيلينا'],
  'destination-water-sports-package': ['كوفاتشيتش', 'ديلاكروا'],
  'kids-exploration-sup-program': ['كونولي', 'ويتفيلد'],
  'professional-water-rescue-sup-system': ['تران', 'رودريغيز'],
  'eco-research-monitoring-sup-platform': ['هوامان', 'توريس'],
};

let pass = 0,
  fail = 0;
for (const s of slugs) {
  const f = path.join(dist, 'ar', 'solutions', s, 'index.html');
  if (!fs.existsSync(f)) {
    console.log('MISSING: ' + s);
    fail++;
    continue;
  }
  const html = fs.readFileSync(f, 'utf8');
  const tm = html.match(/<title>([^<]*)<\/title>/);
  const title = tm ? tm[1] : '';
  const hasAr = /[\u0600-\u06FF]/.test(title);
  let line = (hasAr ? 'PASS' : 'FAIL-TITLE') + ' ' + s + ' | title: ' + title.slice(0, 90);
  if (deepNames[s]) {
    const found = deepNames[s].filter((n) => html.includes(n));
    line +=
      ' | deep: ' +
      (found.length === deepNames[s].length
        ? 'OK(' + found.join(',') + ')'
        : 'MISS(' + deepNames[s].filter((n) => !found.includes(n)).join(',') + ')');
    if (found.length !== deepNames[s].length) {
      console.log(line);
      fail++;
      continue;
    }
  }
  if (!hasAr) {
    console.log(line);
    fail++;
    continue;
  }
  console.log(line);
  pass++;
}
console.log('pass=' + pass + ' fail=' + fail);
