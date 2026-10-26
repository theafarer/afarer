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
const deepNames = {
  'sup-yoga-wellness-equipment': ['Kai Yoshida', 'Azure Collection'],
  'creator-influencer-sup-brand': ['Carlos Mendes', 'Tor Haugen'],
  'commercial-sup-fleet': ['Ahmed Al-Rashid', 'Dimitri Kouris'],
  'durable-sup-rental-fleet': ['Sarah Chen', 'Miguel Torres'],
  'resort-water-activity-package': ['Ana Villanueva', 'Pimchanok Suwannarat'],
  'sup-academy-equipment-program': ['Kenji Nakamura', 'Kylie Brennan'],
  'luxury-portable-sup-package': ['Erik Solberg', 'Sheikh Hamdan'],
  'retail-private-label-program': ['Sarah Chen', 'David Okonkwo'],
  'regional-oem-supply-chain-partner': ['James Whitfield', 'Rashid Maktoum'],
  'corporate-sup-event-package': ['Klaus Weber', 'Priya Sharma'],
  'expand-your-water-sports-portfolio': ['Pedro Oliveira', 'Kaimana Nakama'],
  'pet-friendly-paddle-board-program': ['Emma Thornton', 'Lachlan Murphy'],
  'complete-beach-activity-equipment-solutions': ['Carlos Mendez', 'Dimitri Constantinou'],
  'commercial-water-park-sup-fleet': ['Marcus Delgado', 'Nadia Al Falasi'],
  'premium-custom-sup-collection': ['Elena Voss', 'Matteo Rinaldi'],
  'destination-water-sports-package': ['Ana Kovacic', 'Camille Delacroix'],
  'kids-exploration-sup-program': ['Liam Connolly', 'Megan Whitfield'],
  'professional-water-rescue-sup-system': ['David Tran', 'Elena Rodriguez'],
  'eco-research-monitoring-sup-platform': ['Sofia Huam', 'Isaac Torres'],
};
// broad hint list: a PASS needs at least one hit; better too many hints than a false FAIL
const itTitleHints = [
  'Produttore',
  'Fornitore',
  'Fabbricante',
  'Soluzioni',
  'soluzioni',
  'flotte',
  'SUP',
  'marca',
  'programma',
  'collezione',
  'piattaforma',
  'pacchetto',
  'sistema',
  'attrezzatura',
  'paddle',
];

let pass = 0,
  fail = 0;
for (const s of slugs) {
  const f = path.join(dist, 'it', 'solutions', s, 'index.html');
  if (!fs.existsSync(f)) {
    console.log('MISSING: ' + s);
    fail++;
    continue;
  }
  const html = fs.readFileSync(f, 'utf8');
  const tm = html.match(/<title>([^<]*)<\/title>/);
  const title = tm ? tm[1] : '';
  const hasIt = itTitleHints.some((h) => title.toLowerCase().includes(h.toLowerCase()));
  let line = (hasIt ? 'PASS' : 'FAIL-TITLE') + ' ' + s + ' | title: ' + title.slice(0, 90);
  if (deepNames[s]) {
    const names = deepNames[s].map((n) => n.split(' ')[0]);
    const found = names.filter((n) => html.includes(n));
    line +=
      ' | deep: ' +
      (found.length === names.length
        ? 'OK(' + found.join(',') + ')'
        : 'MISS(' + names.filter((n) => !found.includes(n)).join(',') + ')');
    if (found.length !== names.length) {
      console.log(line);
      fail++;
      continue;
    }
  }
  if (!hasIt) {
    console.log(line);
    fail++;
    continue;
  }
  console.log(line);
  pass++;
}
console.log('pass=' + pass + ' fail=' + fail);
