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
  // ru: names transliterated; use tokens that literally appear (surnames may be inflected)
  'sup-yoga-wellness-equipment': ['Кай Ёсида'],
  'creator-influencer-sup-brand': ['Карлос', 'Тор'],
  'commercial-sup-fleet': ['Ахмед', 'Димитри'],
  'durable-sup-rental-fleet': ['Сара', 'Мигель'],
  'resort-water-activity-package': ['Ана', 'Пимчанок'],
  'sup-academy-equipment-program': ['Кэндзи', 'Кайли'],
  'luxury-portable-sup-package': ['Эрик', 'Хамдан'],
  'retail-private-label-program': ['Чен', 'Оконкво'],
  'regional-oem-supply-chain-partner': ['Джеймс', 'Рашид'],
  'corporate-sup-event-package': ['Клаус', 'Прия'],
  'expand-your-water-sports-portfolio': ['Педру', 'Накам'],
  'pet-friendly-paddle-board-program': ['Эмма', 'Локлан'],
  'complete-beach-activity-equipment-solutions': ['Карлос', 'Димитри'],
  'commercial-water-park-sup-fleet': ['Маркус', 'Фаласи'],
  'premium-custom-sup-collection': ['Елена', 'Маттео'],
  'destination-water-sports-package': ['Ана', 'Камиль'],
  'kids-exploration-sup-program': ['Лиам', 'Меган'],
  'professional-water-rescue-sup-system': ['Дэвид', 'Элена'],
  'eco-research-monitoring-sup-platform': ['София', 'Айзек'],
};
// broad hint list: a PASS needs at least one hit; better too many hints than a false FAIL
const ruTitleHints = [
  'Производитель',
  'производитель',
  'Поставщик',
  'поставщик',
  'SUP',
  'бренд',
  'Бренд',
  'Решение',
  'решение',
  'программ',
  'Программ',
  'платформ',
  'Платформ',
  'систем',
  'Систем',
  'комплект',
  'Комплект',
  'флот',
  'прокат',
  'академ',
  'Академ',
  'коллекц',
  'Коллекц',
  'спорт',
  'водн',
  'спасен',
  'исследован',
  'мониторинг',
  'надувн',
];

let pass = 0,
  fail = 0;
for (const s of slugs) {
  const f = path.join(dist, 'ru', 'solutions', s, 'index.html');
  if (!fs.existsSync(f)) {
    console.log('MISSING: ' + s);
    fail++;
    continue;
  }
  const html = fs.readFileSync(f, 'utf8');
  const tm = html.match(/<title>([^<]*)<\/title>/);
  const title = tm ? tm[1] : '';
  const hasRu = ruTitleHints.some((h) => title.toLowerCase().includes(h.toLowerCase()));
  let line = (hasRu ? 'PASS' : 'FAIL-TITLE') + ' ' + s + ' | title: ' + title.slice(0, 90);
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
  if (!hasRu) {
    console.log(line);
    fail++;
    continue;
  }
  console.log(line);
  pass++;
}
console.log('pass=' + pass + ' fail=' + fail);
