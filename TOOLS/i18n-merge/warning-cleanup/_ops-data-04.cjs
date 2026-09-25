// Shard 04 — factory.yaml qc0 (insert ASTM D751) + eq1 spec temp fix (39 ops)
// qc0: restore deleted "(ASTM D751)" token; eq1: normalize "200°C–300 °C" → "200–300 °C" (fr/ja/ko fix 600)
module.exports = [
  // === qc0: Raw Material Inspection desc ===
  {
    f: 'src/data/pages/factory.yaml',
    find: 'tensile testing ()',
    rep: 'tensile testing (ASTM D751)',
  },
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: 'des tests de traction, de propagation',
    rep: 'des tests de traction (ASTM D751), de propagation',
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: 'Zugprüfung ()',
    rep: 'Zugprüfung (ASTM D751)',
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: 'pruebas de tracción ()',
    rep: 'pruebas de tracción (ASTM D751)',
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: 'teste de tração ()',
    rep: 'teste de tração (ASTM D751)',
  },
  {
    f: 'src/data/pages/ar/factory.yaml',
    find: 'لاختبار الشدّ ()',
    rep: 'لاختبار الشدّ (ASTM D751)',
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: 'test di trazione ()',
    rep: 'test di trazione (ASTM D751)',
  },
  {
    f: 'src/data/pages/ja/factory.yaml',
    find: '引張テスト、ティア伝播',
    rep: '引張テスト（ASTM D751）、ティア伝播',
  },
  {
    f: 'src/data/pages/ko/factory.yaml',
    find: '인장 테스트, 인열 전파',
    rep: '인장 테스트(ASTM D751), 인열 전파',
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: 'на растяжение ()',
    rep: 'на растяжение (ASTM D751)',
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: 'rozciąganie ()',
    rep: 'rozciąganie (ASTM D751)',
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: 'trekproeven ()',
    rep: 'trekproeven (ASTM D751)',
  },
  // sv/no: ASTM missing entirely — insert
  {
    f: 'src/data/pages/sv/factory.yaml',
    find: 'draghållfasthetstestning, rivspridningstest',
    rep: 'draghållfasthetstestning (ASTM D751), rivspridningstest',
  },
  {
    f: 'src/data/pages/no/factory.yaml',
    find: 'strekktesting, rivingsspredning',
    rep: 'strekktesting (ASTM D751), rivingsspredning',
  },
  // el: truncated desc — restore tear propagation + ASTM + final clause
  {
    f: 'src/data/pages/el/factory.yaml',
    find: 'υποβάλλονται σε δοκιμή εφελκυσμού και UV αντοχής.',
    rep: 'υποβάλλονται σε δοκιμή εφελκυσμού (ASTM D751), έλεγχο διάδοσης σχισμής και επιβεβαίωση αντοχής στην UV πριν οποιαδήποτε παρτίδα εισέλθει στην παραγωγή.',
  },
  {
    f: 'src/data/pages/tr/factory.yaml',
    find: 'çekme testi ()',
    rep: 'çekme testi (ASTM D751)',
  },
  {
    f: 'src/data/pages/cs/factory.yaml',
    find: 'v tahu ()',
    rep: 'v tahu (ASTM D751)',
  },
  {
    f: 'src/data/pages/da/factory.yaml',
    find: 'træktest ()',
    rep: 'træktest (ASTM D751)',
  },
  {
    f: 'src/data/pages/ro/factory.yaml',
    find: 'tracțiune ()',
    rep: 'tracțiune (ASTM D751)',
  },
  {
    f: 'src/data/pages/th/factory.yaml',
    find: 'การทดสอบแรงดึง ()',
    rep: 'การทดสอบแรงดึง (ASTM D751)',
  },
  // === eq1: Heat Sealing Machine spec temperature ===
  {
    f: 'src/data/pages/factory.yaml',
    find: '200°C–300 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: '200°C–600 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '200 °C–300 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '200°C–300 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '200°C–300 °C',
    rep: '200–300 °C',
  },
  // ar already "200–300 °C" — skip
  {
    f: 'src/data/pages/it/factory.yaml',
    find: '200 °C–300 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/ja/factory.yaml',
    find: '200°C–600°C',
    rep: '200°C–300°C',
  },
  {
    f: 'src/data/pages/ko/factory.yaml',
    find: '200°C–600°C',
    rep: '200°C–300°C',
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '200°C–300 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '200°C–300 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '200°C–300 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/sv/factory.yaml',
    find: '200 °C–300 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/no/factory.yaml',
    find: '200 °C–300 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/el/factory.yaml',
    find: '200°C–300 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/tr/factory.yaml',
    find: '200°C–300 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/cs/factory.yaml',
    find: '200°C–300 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/da/factory.yaml',
    find: '200°C–300 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/ro/factory.yaml',
    find: '200°C–300 °C',
    rep: '200–300 °C',
  },
  {
    f: 'src/data/pages/th/factory.yaml',
    find: '200°C–300 °C',
    rep: '200–300 °C',
  },
];
