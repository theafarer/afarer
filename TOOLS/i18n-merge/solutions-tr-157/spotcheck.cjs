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
// tr: Latin person names were kept as-is; tokens below literally appear in the deep case-study bodies
const deepNames = {
  'sup-yoga-wellness-equipment': ['Kai', 'Yoshida'],
  'creator-influencer-sup-brand': ['Mendes', 'Haugen'],
  'commercial-sup-fleet': ['Ahmed', 'Dimitri'],
  'durable-sup-rental-fleet': ['Sara', 'Miguel'],
  'resort-water-activity-package': ['Camila', 'Chaiyasit'],
  'sup-academy-equipment-program': ['Kenji', 'Kylie'],
  'luxury-portable-sup-package': ['Erik', 'Hamdan'],
  'retail-private-label-program': ['Chen', 'Okonkwo'],
  'regional-oem-supply-chain-partner': ['James', 'Rashid'],
  'corporate-sup-event-package': ['Klaus', 'Priya'],
  'expand-your-water-sports-portfolio': ['Oliveira', 'Isabella'],
  'pet-friendly-paddle-board-program': ['Emma', 'Lachlan'],
  'complete-beach-activity-equipment-solutions': ['Carlos', 'Dimitri'],
  'commercial-water-park-sup-fleet': ['Falasi', 'Nadia'],
  'premium-custom-sup-collection': ['Matteo', 'Verlaine'],
  'destination-water-sports-package': ['Kovacic', 'Delacroix'],
  'kids-exploration-sup-program': ['Connolly', 'Whitfield'],
  'professional-water-rescue-sup-system': ['Tran', 'Rodriguez'],
  'eco-research-monitoring-sup-platform': ['Huamán', 'Torres'],
};
// broad hint list: a PASS needs at least one hit; avoid hints starting with capital İ (İ.toLowerCase() adds a combining dot)
const trTitleHints = [
  'üretici',
  'tedarikçi',
  'sup',
  'marka',
  'çözüm',
  'program',
  'platform',
  'sistem',
  'paket',
  'filo',
  'kiralama',
  'akademi',
  'koleksiyon',
  'spor',
  'kurtarma',
  'araştırma',
  'izleme',
  'şişirilebilir',
  'lüks',
  'premium',
  'kurumsal',
  'plaj',
  'destinasyon',
  'eko',
  'çevre',
  'balık',
  'yoga',
  'e-ticaret',
  'oem',
  'private label',
  'portföy',
  'evcil',
  'park',
];

let pass = 0,
  fail = 0;
for (const s of slugs) {
  const f = path.join(dist, 'tr', 'solutions', s, 'index.html');
  if (!fs.existsSync(f)) {
    console.log('MISSING: ' + s);
    fail++;
    continue;
  }
  const html = fs.readFileSync(f, 'utf8');
  const tm = html.match(/<title>([^<]*)<\/title>/);
  const title = tm ? tm[1] : '';
  const low = title.toLowerCase();
  const hasTr = trTitleHints.some((h) => low.includes(h));
  let line = (hasTr ? 'PASS' : 'FAIL-TITLE') + ' ' + s + ' | title: ' + title.slice(0, 90);
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
  if (!hasTr) {
    console.log(line);
    fail++;
    continue;
  }
  console.log(line);
  pass++;
}
console.log('pass=' + pass + ' fail=' + fail);
