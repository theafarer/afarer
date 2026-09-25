// Shard 19 — 机械疤痕清理 (2026-09): EN 源头令牌恢复 + rf-welding 空括号 + ITSCAR
// + factory role 列表 3 空格 → " + " + factory-process/tourism 双空格折叠
// ko/rf-welding:34 整行乱码另行专修, 不在本分片
module.exports = [
  // === EN 源头令牌恢复 (ISO 9001 / UKCA, FCC 被删) ===
  {
    f: 'src/data/pages/commercial-workboats.yaml',
    find: 'Our factory is  certified. Commercial certifications including  available upon request.',
    rep: 'Our factory is ISO 9001 certified. Commercial certifications including UKCA, FCC available upon request.',
    n: 1,
  },
  {
    f: 'src/data/pages/tourism-recreation.yaml',
    find: 'Our factory is  certified. UKCA, FCC',
    rep: 'Our factory is ISO 9001 certified. UKCA, FCC',
    n: 1,
  },
  {
    f: 'src/data/pages/tourism-recreation.yaml',
    find: 'digital printing  for full-colour graphics',
    rep: 'digital printing for full-colour graphics',
    n: 1,
  },
  {
    f: 'src/data/pages/maritime-safety-defense.yaml',
    find: 'Our factory is  certified with CE',
    rep: 'Our factory is ISO 9001 certified with CE',
    n: 1,
  },
  {
    f: 'src/data/pages/trust.yaml',
    find: 'operates under an  quality management system',
    rep: 'operates under an ISO 9001 quality management system',
    n: 1,
  },
  { f: 'src/data/pages/factory-equipment.yaml', find: '50 kN,  / ASTM D751', rep: '50 kN, ASTM D751', n: 1 },
  { f: 'src/data/pages/fr/factory-equipment.yaml', find: '50 kN,  / ASTM D751', rep: '50 kN, ASTM D751', n: 1 },
  {
    f: 'src/data/pages/factory-process.yaml',
    find: 'heat sealing machines  with',
    rep: 'heat sealing machines with',
    n: 1,
  },
  {
    f: 'src/data/pages/factory-process.yaml',
    find: 'digital printing  for full-colour photo-quality designs, and screen printing  for durable logos',
    rep: 'digital printing for full-colour photo-quality designs, and screen printing for durable logos',
    n: 1,
  },
  { f: 'src/data/pages/rf-welding.yaml', find: 'Peel test ()', rep: 'Peel test', n: 1 },
  // === rf-welding 空括号移除 (EN 源头疤 + 15 语言镜像) ===
  { f: 'src/data/pages/ar/rf-welding.yaml', find: 'اختبار الالتصاق ()', rep: 'اختبار الالتصاق', n: 1 },
  { f: 'src/data/pages/cs/rf-welding.yaml', find: 'Odtrhová zkouška ()', rep: 'Odtrhová zkouška', n: 1 },
  { f: 'src/data/pages/da/rf-welding.yaml', find: 'Peeltest ()', rep: 'Peeltest', n: 1 },
  { f: 'src/data/pages/el/rf-welding.yaml', find: 'Δοκιμή αποκόλλησης ()', rep: 'Δοκιμή αποκόλλησης', n: 1 },
  {
    f: 'src/data/pages/es/rf-welding.yaml',
    find: 'Prueba de desprendimiento ()',
    rep: 'Prueba de desprendimiento',
    n: 1,
  },
  // (shard 31 更新) 原 op 'Koorrotesti ()'→'Koorrotesti' 的 rep 锚本身是语言性乱码;
  // shard 31 修复后 'Koorrotesti' 不复存在, 此 op 直接承接正字修复 (find 锚定为当前文件现存文本)
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: '<strong>Koorrotesti</strong>',
    rep: '<strong>Kuorintatesti</strong>',
    n: 1,
  },
  { f: 'src/data/pages/it/rf-welding.yaml', find: 'Test di pelatura ()', rep: 'Test di pelatura', n: 1 },
  { f: 'src/data/pages/nl/rf-welding.yaml', find: 'Peel test ()', rep: 'Peel test', n: 1 },
  { f: 'src/data/pages/no/rf-welding.yaml', find: 'Skalltest ()', rep: 'Skalltest', n: 1 },
  { f: 'src/data/pages/pl/rf-welding.yaml', find: 'Test odrywania ()', rep: 'Test odrywania', n: 1 },
  { f: 'src/data/pages/pt/rf-welding.yaml', find: 'Teste de descolamento ()', rep: 'Teste de descolamento', n: 1 },
  {
    f: 'src/data/pages/ro/rf-welding.yaml',
    find: 'Test de desprindere ()</strong> —O',
    rep: 'Test de desprindere</strong> — O',
    n: 1,
  },
  {
    f: 'src/data/pages/ru/rf-welding.yaml',
    find: 'Испытание на отслаивание ()',
    rep: 'Испытание на отслаивание',
    n: 1,
  },
  { f: 'src/data/pages/sv/rf-welding.yaml', find: 'Dragprov ()', rep: 'Dragprov', n: 1 },
  { f: 'src/data/pages/th/rf-welding.yaml', find: 'การทดสอบการลอก ()', rep: 'การทดสอบการลอก', n: 1 },
  // === ITSCAR: plain scalar 中的 '' 应为 ' ===
  { f: 'src/data/pages/it/afarer-story.yaml', find: "L''inizio", rep: "L'inizio", n: 1 },
  { f: 'src/data/pages/tr/afarer-story.yaml', find: "Qingdao''daki", rep: "Qingdao'daki", n: 1 },
  { f: 'src/data/pages/it/factory.yaml', find: "Segui un''imbarcazione", rep: "Segui un'imbarcazione", n: 1 },
  // === factory role/supplier 列表: 3 空格 → " + " (EN+fr/ja/th/cs/da/ro 既有惯例) ===
  {
    f: 'src/data/pages/de/factory.yaml',
    find: 'Leiter Montageteam   Linien-QC',
    rep: 'Leiter Montageteam + Linien-QC',
    n: 1,
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: 'Endkontrollteam (4 Prüfer)   Verpackungsteamleiter',
    rep: 'Endkontrollteam (4 Prüfer) + Verpackungsteamleiter',
    n: 1,
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: 'Interne Weberei   externer Partner',
    rep: 'Interne Weberei + externer Partner',
    n: 1,
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: 'Líder de equipo de ensamblaje   control de calidad en línea',
    rep: 'Líder de equipo de ensamblaje + control de calidad en línea',
    n: 1,
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: 'Equipo de control de calidad final (4 inspectores)   Líder del equipo de empaque',
    rep: 'Equipo de control de calidad final (4 inspectores) + Líder del equipo de empaque',
    n: 1,
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: 'Tejido interno   socio externo',
    rep: 'Tejido interno + socio externo',
    n: 1,
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: 'Capo squadra di assemblaggio   controllo qualità di linea',
    rep: 'Capo squadra di assemblaggio + controllo qualità di linea',
    n: 1,
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: 'Team di QC finale (4 ispettori)   Capo squadra imballaggio',
    rep: 'Team di QC finale (4 ispettori) + Capo squadra imballaggio',
    n: 1,
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: 'Tessitura interna   partner esterno',
    rep: 'Tessitura interna + partner esterno',
    n: 1,
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: 'Leidinggevende assemblageteam   lijn QC',
    rep: 'Leidinggevende assemblageteam + lijn QC',
    n: 1,
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: 'Eind-QC team (4 inspecteurs)   Verpakkingsploeg leider',
    rep: 'Eind-QC team (4 inspecteurs) + Verpakkingsploeg leider',
    n: 1,
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: 'Interne weving   externe partner',
    rep: 'Interne weving + externe partner',
    n: 1,
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: 'Kierownik zespołu montażowego   kontrola jakości na linii',
    rep: 'Kierownik zespołu montażowego + kontrola jakości na linii',
    n: 1,
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: 'Końcowy zespół kontroli jakości (4 inspektorów)   Kierownik zespołu pakowania',
    rep: 'Końcowy zespół kontroli jakości (4 inspektorów) + Kierownik zespołu pakowania',
    n: 1,
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: 'Tkactwo wewnętrzne   zewnętrzny partner',
    rep: 'Tkactwo wewnętrzne + zewnętrzny partner',
    n: 1,
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: 'Líder de equipe de montagem   QC de linha',
    rep: 'Líder de equipe de montagem + QC de linha',
    n: 1,
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: 'Equipe final de QC (4 inspetores)   Líder da equipe de embalagem',
    rep: 'Equipe final de QC (4 inspetores) + Líder da equipe de embalagem',
    n: 1,
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: 'Tecelagem interna   parceiro externo',
    rep: 'Tecelagem interna + parceiro externo',
    n: 1,
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: 'Руководитель сборочной бригады   линейный контроль качества',
    rep: 'Руководитель сборочной бригады + линейный контроль качества',
    n: 1,
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: 'Внутрифирменное ткачество   внешний партнёр',
    rep: 'Внутрифирменное ткачество + внешний партнёр',
    n: 1,
  },
];
