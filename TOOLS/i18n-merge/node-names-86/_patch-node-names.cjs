const fs = require('fs');
const FILE = 'src/content/graph/nodes.ts';
let t = fs.readFileSync(FILE, 'utf8');

// per-node: { ar: true-arabic, nl, sv, no, fi, cs, da }
const NAMES = {
  'inflatable-sup': {
    ar: 'لوح SUP قابل للنفخ',
    nl: 'Opblaasbaar SUP-board',
    sv: 'Uppblåsbar SUP-bräda',
    no: 'Oppblåsbar SUP-brett',
    fi: 'Ilmava SUP-lauta',
    cs: 'Nafukovací SUP prkno',
    da: 'Oppustelig SUP-bræt',
  },
  'safety-equipment': {
    ar: 'معدات السلامة',
    nl: 'Veiligheidsuitrusting',
    sv: 'Säkerhetsutrustning',
    no: 'Sikkerhetsutstyr',
    fi: 'Turvallisuusvarusteet',
    cs: 'Bezpečnostní vybavení',
    da: 'Sikkerhedsudstyr',
  },
  accessory: {
    ar: 'الملحقات',
    nl: 'Accessoires',
    sv: 'Tillbehör',
    no: 'Tilbehør',
    fi: 'Tarvikkeet',
    cs: 'Příslušenství',
    da: 'Tilbehør',
  },
  paddle: { ar: 'مجداف', nl: 'Paddle', sv: 'Paddel', no: 'Padleåre', fi: 'Mela', cs: 'Pádlo', da: 'Pagaj' },
  'carbon-paddle': {
    ar: 'مجداف من ألياف الكربون',
    nl: 'Carbonfiber paddle',
    sv: 'Kolfiberpaddel',
    no: 'Karbonfiberåre',
    fi: 'Hiilikuitumela',
    cs: 'Karbonové pádlo',
    da: 'Kulfiberpagaj',
  },
  'drop-stitch-core': {
    ar: 'نواة Drop-Stitch',
    nl: 'Drop-stitch kern',
    sv: 'Drop-stitch kärna',
    no: 'Drop-stitch kjerne',
    fi: 'Drop-stitch-ydin',
    cs: 'Drop-stitch jádro',
    da: 'Drop-stitch kerne',
  },
  'dual-action-pump': {
    ar: 'مضخة ثنائية العمل',
    nl: 'Dubbelwerkende pomp',
    sv: 'Dubbelverkande pump',
    no: 'Dobbeltvirkende pumpe',
    fi: 'Kaksitoiminen pumppu',
    cs: 'Dvojčinná pumpa',
    da: 'Dobbeltvirkende pumpe',
  },
  'high-pressure': {
    ar: 'ضغط عالٍ (12-15 PSI)',
    nl: 'Hoge druk (12-15 PSI)',
    sv: 'Högtryck (12-15 PSI)',
    no: 'Høytrykk (12-15 PSI)',
    fi: 'Korkeapaine (12-15 PSI)',
    cs: 'Vysoký tlak (12-15 PSI)',
    da: 'Højt tryk (12-15 PSI)',
  },
  'military-grade-pvc': {
    ar: 'PVC بجودة بحرية',
    nl: 'Maritiem PVC',
    sv: 'Marin kvalitets-PVC',
    no: 'Marint PVC',
    fi: 'Merenkäyttöön soveltuva PVC',
    cs: 'PVC pro námořní použití',
    da: 'Marine-PVC',
  },
  'eva-deck': {
    ar: 'وسادة سطح من رغوة EVA',
    nl: 'EVA-schuim dekpad',
    sv: 'EVA-skum däckpad',
    no: 'EVA-skum dekkpute',
    fi: 'EVA-vaahtokansipeite',
    cs: 'EVA pěnová palubní podložka',
    da: 'EVA-skum dækpad',
  },
  'carbon-fiber': {
    ar: 'ألياف الكربون',
    nl: 'Carbonfiber',
    sv: 'Kolfiber',
    no: 'Karbonfiber',
    fi: 'Hiilikuitu',
    cs: 'Karbonová vlákna',
    da: 'Kulfiber',
  },
  'buoyancy-foam': {
    ar: 'رغوة طفو بحرية',
    nl: 'Maritiem drijfschuim',
    sv: 'Marint flytskum',
    no: 'Marint flyteskum',
    fi: 'Meren kelluntavaahto',
    cs: 'Mořská vztlaková pěna',
    da: 'Marint flydeskum',
  },
  touring: {
    ar: 'التجديف لمسافات طويلة',
    nl: 'Touring & lange afstanden',
    sv: 'Touring & långdistanspadling',
    no: 'Touring & langpadling',
    fi: 'Retkeily ja pitkät melontamatkat',
    cs: 'Turistika a dálkové pádlování',
    da: 'Touring & langdistancepadling',
  },
  beginner: {
    ar: 'للمبتدئين',
    nl: 'Beginner',
    sv: 'Nybörjare',
    no: 'Nybegynner',
    fi: 'Aloittelija',
    cs: 'Začátečník',
    da: 'Begynder',
  },
  fishing: {
    ar: 'الصيد من القوارب القابلة للنفخ',
    nl: 'Vissen vanaf opblaasboten',
    sv: 'Fiske från uppblåsbara båtar',
    no: 'Fiske fra oppblåsbare båter',
    fi: 'Kalastus ilmaveneistä',
    cs: 'Rybolov z nafukovacích člunů',
    da: 'Fiskeri fra oppustelige både',
  },
  'family-recreation': {
    ar: 'ترفيه عائلي',
    nl: 'Gezinsrecreatie',
    sv: 'Familjerekreation',
    no: 'Familierekreasjon',
    fi: 'Perheen vapaa-ajan aktiviteetit',
    cs: 'Rodinná rekreace',
    da: 'Familiefritid',
  },
  'river-touring': {
    ar: 'الجولات النهرية',
    nl: 'Riviertochten',
    sv: 'Flod-/älvpadling',
    no: 'Elvepadling',
    fi: 'Jokiretkeily',
    cs: 'Řční turistika',
    da: 'Flodpadling',
  },
  rescue: {
    ar: 'البحث والإنقاذ',
    nl: 'Zoeken & redden',
    sv: 'Sök och räddning',
    no: 'Søk og redning',
    fi: 'Etsintä ja pelastus',
    cs: 'Pátrání a záchrana',
    da: 'Søg og redning',
  },
};

const LOCALES = ['nl', 'sv', 'no', 'fi', 'cs', 'da'];
let patched = 0;
for (const [id, names] of Object.entries(NAMES)) {
  const idIdx = t.indexOf("id: '" + id + "'");
  if (idIdx < 0) {
    console.log('ID NOT FOUND: ' + id);
    process.exit(1);
  }
  // name block: from 'name: {' at/after idIdx to the closing '},'
  const nameIdx = t.indexOf('name: {', idIdx);
  const descIdx = t.indexOf('description: {', nameIdx);
  const block = t.slice(nameIdx, descIdx);
  let nb = block;
  // 1. replace ar fake translation
  const arRe = /ar:\s*'[^']*'/;
  if (!arRe.test(nb)) {
    console.log('ar line missing in ' + id);
    process.exit(1);
  }
  const oldAr = (nb.match(arRe) || [])[0];
  if (!oldAr.includes(names.ar)) {
    nb = nb.replace(arRe, "ar: '" + names.ar + "'");
  }
  // 2. append 6 locales after the ar line (same indentation)
  const arLineEnd = nb.indexOf("ar: '" + names.ar + "'") + ("ar: '" + names.ar + "'").length;
  const indent = '      ';
  const addLines = LOCALES.filter((l) => !new RegExp('\\b' + l + '\\s*:').test(nb))
    .map((l) => '\n' + indent + l + ": '" + names[l] + "'")
    .join('');
  nb = nb.slice(0, arLineEnd) + addLines + nb.slice(arLineEnd);
  t = t.slice(0, nameIdx) + nb + t.slice(descIdx);
  patched++;
}
fs.writeFileSync(FILE, t);
console.log('patched ' + patched + ' nodes (ar fixed + 6 locales appended each)');
