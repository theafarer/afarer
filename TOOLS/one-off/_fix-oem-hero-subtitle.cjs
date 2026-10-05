// one-off: translate factory-oem-capability.yaml hero.subtitle (19 locales)
// clears the last 19 check:i18n warnings ("long English value unchanged")
// terminology: reuse each locale's own meta.description phrasing (SUP terms)
// usage: node TOOLS/one-off/_fix-oem-hero-subtitle.cjs [--dry|--write]
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const EN_LINE = '  subtitle: From concept to container — customize every detail of your inflatable watercraft line';

const T = {
  de: 'Von der Idee bis zum Container — individualisieren Sie jedes Detail Ihrer aufblasbaren SUP-Linie',
  pt: 'Do conceito ao contêiner — personalize cada detalhe da sua linha de SUP inflável',
  es: 'De la idea al contenedor — personalice cada detalle de su línea de SUP hinchable',
  it: 'Dal concept al container — personalizza ogni dettaglio della tua linea di SUP gonfiabile',
  ja: 'コンセプトからコンテナまで——インフレータブルSUPシリーズの細部までをカスタマイズ',
  ko: '컨셉에서 컨테이너까지 — 팽창식 SUP 시리즈의 모든 디테일을 맞춤화하세요',
  ru: 'От концепции до контейнера — настройте каждую деталь вашей линейки надувных SUP',
  pl: 'Od koncepcji do kontenera — dostosuj każdy szczegół swojej nadmuchiwanej linii SUP',
  ar: 'من الفكرة إلى الحاوية — خصّص كل تفصيل في سلسلة ألواح SUP القابلة للنفخ الخاصة بك',
  nl: 'Van concept tot container — personaliseer elk detail van jouw opblaasbare SUP-lijn',
  sv: 'Från koncept till container — anpassa varje detalj i din uppblåsbara SUP-serie',
  no: 'Fra konsept til container — tilpass hver detalj i din oppblåsbare SUP-serie',
  el: 'Από την ιδέα στο κοντέινερ — προσαρμόστε κάθε λεπτομέρεια της σειράς φουσκωτών SUP σας',
  tr: 'Konseptten konteynere — şişme SUP serinizin her ayrıntısını özelleştirin',
  fi: 'Konseptista konttiin — räätälöi täytettävän SUP-sarjasi jokainen yksityiskohta',
  cs: 'Od konceptu ke kontejneru — přizpůsobte každý detail vaší nafukovací řady SUP',
  da: 'Fra koncept til container — tilpas hver detalje i din oppustelige SUP-serie',
  ro: 'De la concept la container — personalizați fiecare detaliu al seriei voastre de SUP gonflabile',
  th: 'จากแนวคิดสู่ตู้คอนเทนเนอร์ — ปรับแต่งทุกรายละเอียดของซีรีส์ SUP แบบสูบลมของคุณ',
};

const mode = process.argv[2] || '--dry';
if (mode !== '--dry' && mode !== '--write') {
  console.error('usage: node TOOLS/one-off/_fix-oem-hero-subtitle.cjs [--dry|--write]');
  process.exit(2);
}

let fail = 0;
for (const loc of Object.keys(T)) {
  const file = path.join(ROOT, 'src', 'data', 'pages', loc, 'factory-oem-capability.yaml');
  const raw = fs.readFileSync(file, 'utf8');
  const bom = raw.charCodeAt(0) === 0xfeff;
  const body = bom ? raw.slice(1) : raw;
  const hits = body.split('\n').filter((l) => l === EN_LINE).length;
  if (hits !== 1) {
    console.log(`${loc}: ERR exact EN line found x${hits}, skip`);
    fail++;
    continue;
  }
  const next = body.replace(EN_LINE, '  subtitle: ' + T[loc]);
  console.log(`${loc}: OK ${mode === '--write' ? 'written' : 'would write'} :: ${T[loc].slice(0, 60)}`);
  if (mode === '--write') fs.writeFileSync(file, (bom ? '\ufeff' : '') + next, 'utf8');
}
console.log(fail ? `FAIL ${fail}` : 'ALL OK');
process.exit(fail ? 1 : 0);
