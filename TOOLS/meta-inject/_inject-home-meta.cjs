const fs = require('fs');
const path = require('path');
const ROOT = process.cwd();
const PAGES_DIR = path.join(ROOT, 'src', 'data', 'pages');

const meta = {
  zh: {
    title: '充氣 SUP 製造商 — 工廠與 OEM/ODM | {SITE}',
    description:
      'afarer 是專業的充氣 SUP 和船艇製造商，擁有 12,000 平方米工廠：OEM/ODM 槳板、自有品牌生產、CE 認證。與我們的 SUP 工廠合作。',
    keywords: ['充氣 SUP 製造商', 'SUP 工廠 中國', 'OEM 槳板', '充氣槳板供應商', '充氣船製造商'],
  },
  de: {
    title: 'Hersteller aufblasbarer SUPs & Boote — OEM/ODM | {SITE}',
    description:
      'afarer ist ein Hersteller aufblasbarer SUPs und Boote mit 12.000 m² Werk: OEM/ODM-Paddleboards, Private-Label-Produktion, CE-zertifiziert. Werden Sie Partner unserer SUP-Fabrik.',
    keywords: [
      'Hersteller aufblasbarer SUPs',
      'SUP-Fabrik China',
      'OEM Paddleboard',
      'Anbieter aufblasbarer Paddleboards',
      'Hersteller aufblasbarer Boote',
    ],
  },
  pt: {
    title: 'Fabricante de SUP Infláveis & Barcos — OEM/ODM | {SITE}',
    description:
      'afarer é um fabricante de SUP infláveis e barcos com fábrica de 12.000 m²: pranchas OEM/ODM, produção de marca própria, certificação CE. Seja parceiro da nossa fábrica de SUP.',
    keywords: [
      'fabricante de SUP inflável',
      'fábrica de SUP China',
      'paddleboard OEM',
      'fornecedor de SUP inflável',
      'fabricante de barcos infláveis',
    ],
  },
  es: {
    title: 'Fabricante de SUP Hinchables & Barcos — OEM/ODM | {SITE}',
    description:
      'afarer es un fabricante de SUP hinchables y barcos con una fábrica de 12.000 m²: tablas OEM/ODM, producción de marca privada, certificado CE. Sea socio de nuestra fábrica de SUP.',
    keywords: [
      'fabricante de SUP hinchable',
      'fábrica de SUP China',
      'paddleboard OEM',
      'proveedor de SUP hinchable',
      'fabricante de barcos inflables',
    ],
  },
  it: {
    title: 'Produttore di SUP Gonfiabili & Barche — OEM/ODM | {SITE}',
    description:
      'afarer è un produttore di SUP gonfiabili e barche con una fabbrica di 12.000 m²: tavole OEM/ODM, produzione a marchio privato, certificazione CE. Diventa partner della nostra fabbrica di SUP.',
    keywords: [
      'produttore di SUP gonfiabili',
      'fabbrica SUP Cina',
      'paddleboard OEM',
      'fornitore di SUP gonfiabili',
      'produttore di barche gonfiabili',
    ],
  },
  ja: {
    title: 'インフレータブルSUP・ボート製造 — 工場 & OEM/ODM | {SITE}',
    description:
      'afarer は 12,000m² の工場を持つインフレータブルSUP・ボートメーカーです: OEM/ODM パドルボード、プライベートブランド生産、CE認証。SUP 工場のパートナーになりましょう。',
    keywords: [
      'インフレータブルSUP メーカー',
      'SUP 工場 中国',
      'OEM パドルボード',
      'インフレータブルSUP サプライヤー',
      'インフレータブルボート メーカー',
    ],
  },
  ko: {
    title: '팽창식 SUP·보트 제조사 — 공장 & OEM/ODM | {SITE}',
    description:
      'afarer는 12,000m² 공장을 보유한 팽창식 SUP·보트 제조사입니다: OEM/ODM 패들보드, 자체 브랜드 생산, CE 인증. SUP 공장과 파트너가 되세요.',
    keywords: ['팽창식 SUP 제조사', 'SUP 공장 중국', 'OEM 패들보드', '팽창식 SUP 공급업체', '팽창식 보트 제조사'],
  },
  ru: {
    title: 'Производитель надувных SUP и лодок — завод и OEM/ODM | {SITE}',
    description:
      'afarer — производитель надувных SUP и лодок с заводом 12 000 м²: доски OEM/ODM, производство под частной маркой, сертификация CE. Станьте партнёром нашей SUP-фабрики.',
    keywords: [
      'производитель надувных SUP',
      'фабрика SUP Китай',
      'OEM паддлборды',
      'поставщик надувных SUP',
      'производитель надувных лодок',
    ],
  },
  pl: {
    title: 'Producent pompowanych SUP i łodzi — fabryka i OEM/ODM | {SITE}',
    description:
      'afarer to producent pompowanych SUP i łodzi z fabryką o powierzchni 12 000 m²: deski OEM/ODM, produkcja pod marką własną, certyfikat CE. Zostań partnerem naszej fabryki SUP.',
    keywords: [
      'producent pompowanych SUP',
      'fabryka SUP Chiny',
      'deska OEM',
      'dostawca pompowanych SUP',
      'producent łodzi pontonowych',
    ],
  },
  ar: {
    title: 'مصنع SUP القابل للنفخ والقوارب — OEM/ODM | {SITE}',
    description:
      'afarer هي شركة تصنيع ألواح SUP القابلة للنفخ والقوارب بمصنع مساحته 12,000 م²: ألواح OEM/ODM، إنتاج بالعلامة الخاصة، شهادة CE. كن شريكاً لمصنع SUP الخاص بنا.',
    keywords: [
      'مصنع SUP القابل للنفخ',
      'مصنع SUP الصين',
      'لوح OEM',
      'مورد SUP القابل للنفخ',
      'مصنع القوارب القابلة للنفخ',
    ],
  },
  nl: {
    title: "Fabrikant van opblaasbare SUP's & boten — OEM/ODM | {SITE}",
    description:
      "afarer is een fabrikant van opblaasbare SUP's en boten met een fabriek van 12.000 m²: OEM/ODM-paddleboards, productie onder eigen label, CE-gecertificeerd. Word partner van onze SUP-fabriek.",
    keywords: [
      "fabrikant van opblaasbare SUP's",
      'SUP-fabriek China',
      'OEM paddleboard',
      "leverancier van opblaasbare SUP's",
      'fabrikant van opblaasbare boten',
    ],
  },
  sv: {
    title: 'Tillverkare av uppblåsbara SUP:ar & båtar — OEM/ODM | {SITE}',
    description:
      'afarer är en tillverkare av uppblåsbara SUP:ar och båtar med en fabrik på 12 000 m²: OEM/ODM-paddelbrädor, private label-produktion, CE-certifierad. Bli partner med vår SUP-fabrik.',
    keywords: [
      'tillverkare av uppblåsbara SUP',
      'SUP-fabrik Kina',
      'OEM paddleboard',
      'leverantör av uppblåsbara SUP',
      'tillverkare av uppblåsbara båtar',
    ],
  },
  no: {
    title: 'Produsent av oppblåsbare SUP-er & båter — OEM/ODM | {SITE}',
    description:
      'afarer er en produsent av oppblåsbare SUP-er og båter med en fabrikk på 12 000 m²: OEM/ODM-padlebrett, private label-produksjon, CE-sertifisert. Bli partner med vår SUP-fabrikk.',
    keywords: [
      'produsent av oppblåsbare SUP',
      'SUP-fabrikk Kina',
      'OEM padlebrett',
      'leverandør av oppblåsbare SUP',
      'produsent av oppblåsbare båter',
    ],
  },
  el: {
    title: 'Κατασκευαστής φουσκωτών SUP & σκαφών — OEM/ODM | {SITE}',
    description:
      'Η afarer είναι κατασκευαστής φουσκωτών SUP και σκαφών με εργοστάσιο 12.000 m²: σανίδες OEM/ODM, παραγωγή ιδιωτικής ετικέτας, πιστοποίηση CE. Γίνετε συνεργάτης του εργοστασίου SUP μας.',
    keywords: [
      'κατασκευαστής φουσκωτών SUP',
      'εργοστάσιο SUP Κίνα',
      'OEM σανίδες',
      'προμηθευτής φουσκωτών SUP',
      'κατασκευαστής φουσκωτών σκαφών',
    ],
  },
  tr: {
    title: 'Şişme SUP & Tekne Üreticisi — Fabrika ve OEM/ODM | {SITE}',
    description:
      'afarer, 12.000 m² fabrikaya sahip şişme SUP ve tekne üreticisidir: OEM/ODM paddleboard, özel marka üretimi, CE sertifikalı. SUP fabrikamızın ortağı olun.',
    keywords: [
      'şişme SUP üreticisi',
      'SUP fabrikası Çin',
      'OEM paddleboard',
      'şişme SUP tedarikçisi',
      'şişme bot üreticisi',
    ],
  },
  fi: {
    title: 'Täytettävien SUP-lautojen & veneiden valmistaja — OEM/ODM | {SITE}',
    description:
      'afarer on täytettävien SUP-lautojen ja veneiden valmistaja, jolla on 12 000 m² tehdas: OEM/ODM-paddleboardit, oman merkin tuotanto, CE-sertifioitu. Ryhdy SUP-tehtaamme kumppaniksi.',
    keywords: [
      'täytettävien SUP-lautojen valmistaja',
      'SUP-tehdas Kiina',
      'OEM paddleboard',
      'täytettävien SUP-lautojen toimittaja',
      'täytettävien veneiden valmistaja',
    ],
  },
  cs: {
    title: 'Výrobce nafukovacích SUP a lodí — OEM/ODM | {SITE}',
    description:
      'afarer je výrobce nafukovacích SUP a lodí s továrnou o rozloze 12 000 m²: prkna OEM/ODM, výroba pod vlastní značkou, certifikace CE. Staňte se partnerem naší továrny na SUP.',
    keywords: [
      'výrobce nafukovacích SUP',
      'továrna na SUP Čína',
      'OEM prkna',
      'dodavatel nafukovacích SUP',
      'výrobce nafukovacích lodí',
    ],
  },
  da: {
    title: 'Producent af oppustelige SUP-boards & både — OEM/ODM | {SITE}',
    description:
      'afarer er en producent af oppustelige SUP-boards og både med en fabrik på 12.000 m²: OEM/ODM-paddleboards, private label-produktion, CE-certificeret. Bliv partner med vores SUP-fabrik.',
    keywords: [
      'producent af oppustelige SUP-boards',
      'SUP-fabrik Kina',
      'OEM paddleboard',
      'leverandør af oppustelige SUP-boards',
      'producent af oppustelige både',
    ],
  },
  ro: {
    title: 'Producător de SUP-uri gonflabile & bărci — OEM/ODM | {SITE}',
    description:
      'afarer este un producător de SUP-uri gonflabile și bărci cu o fabrică de 12.000 m²: plăci OEM/ODM, producție sub marcă proprie, certificare CE. Deveniți partener al fabricii noastre de SUP.',
    keywords: [
      'producător de SUP gonflabile',
      'fabrică SUP China',
      'plăci OEM',
      'furnizor de SUP gonflabile',
      'producător de bărci gonflabile',
    ],
  },
  th: {
    title: 'ผู้ผลิต SUP แบบเป่าลมและเรือ — OEM/ODM | {SITE}',
    description:
      'afarer คือผู้ผลิต SUP แบบเป่าลมและเรือที่มีโรงงานขนาด 12,000 ตร.ม.: แผ่น SUP OEM/ODM, การผลิตแบรนด์ส่วนตัว, รับรอง CE ร่วมเป็นพันธมิตรกับโรงงาน SUP ของเรา',
    keywords: ['ผู้ผลิต SUP แบบเป่าลม', 'โรงงาน SUP จีน', 'แผ่น OEM', 'ผู้จัดจำหน่าย SUP แบบเป่าลม', 'ผู้ผลิตเรือยาง'],
  },
};

function yq(s) {
  return "'" + String(s).replace(/'/g, "''") + "'";
}

function buildBlock(m) {
  const lines = ['meta:'];
  lines.push('  title: ' + yq(m.title));
  lines.push('  description: ' + yq(m.description));
  lines.push('  keywords:');
  for (const k of m.keywords) lines.push('    - ' + yq(k));
  return lines.join('\n') + '\n';
}

let done = 0;
for (const [lang, m] of Object.entries(meta)) {
  const p = path.join(PAGES_DIR, lang, 'home.yaml');
  if (!fs.existsSync(p)) {
    console.log(lang, 'SKIP (no home.yaml)');
    continue;
  }
  const src = fs.readFileSync(p, 'utf8');
  if (/^meta:/m.test(src)) {
    console.log(lang, 'SKIP (meta exists)');
    continue;
  }
  const block = buildBlock(m);
  const out = block + src;
  fs.writeFileSync(p, out);
  console.log(lang, 'OK');
  done++;
}
console.log('injected meta into', done, 'home.yaml files');
