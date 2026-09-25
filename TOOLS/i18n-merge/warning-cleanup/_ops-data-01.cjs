// Shard 01 — safety.yaml certifications repair (21 ops)
// EN token restoration + 10 merged-null + cs 2 + da/ro/th + 5 desc-only scars
module.exports = [
  // EN base: restore deleted ISO 12402 tokens
  {
    f: 'src/data/pages/safety.yaml',
    find: '  - title:\n    description: Life vests meet  flotation standards. The Life Vest Classic provides 50N+ buoyancy; the Life Vest Pro meets SOLAS requirements with automatic inflation.',
    rep: '  - title: ISO 12402 Certification\n    description: Life vests meet ISO 12402 flotation standards. The Life Vest Classic provides 50N+ buoyancy; the Life Vest Pro meets SOLAS requirements with automatic inflation.',
  },
  // fr: null title + missing standard in desc
  {
    f: 'src/data/pages/fr/safety.yaml',
    find: '  - title: null\n    description: Les gilets de sauvetage répondent aux normes de flottabilité. Le Life Vest Classic offre une flottabilité de 50N+ ; le Life Vest Pro répond aux exigences SOLAS avec gonflage automatique.',
    rep: '  - title: Certification ISO 12402\n    description: Les gilets de sauvetage répondent aux normes de flottabilité ISO 12402. Le Life Vest Classic offre une flottabilité de 50N+ ; le Life Vest Pro répond aux exigences SOLAS avec gonflage automatique.',
  },
  // pt: null title + " ." scar
  {
    f: 'src/data/pages/pt/safety.yaml',
    find: '  - title: null\n    description: Os coletes salva-vidas atendem aos padrões de flutuação . O Life Vest Classic fornece flutuabilidade 50N+; o Life Vest Pro atende aos requisitos SOLAS com inflação automática.',
    rep: '  - title: Certificação ISO 12402\n    description: Os coletes salva-vidas atendem aos padrões de flutuação ISO 12402. O Life Vest Classic fornece flutuabilidade 50N+; o Life Vest Pro atende aos requisitos SOLAS com inflação automática.',
  },
  // ar: null title + " ." scar
  {
    f: 'src/data/pages/ar/safety.yaml',
    find: '  - title: null\n    description: سترات النجاة تلبي معايير الطفو . توفر سترة Life Vest Classic طفو 50N+؛ وتفي سترة Life Vest Pro بمتطلبات SOLAS مع النفخ التلقائي.',
    rep: '  - title: شهادة ISO 12402\n    description: سترات النجاة تلبي معايير الطفو ISO 12402. توفر سترة Life Vest Classic طفو 50N+؛ وتفي سترة Life Vest Pro بمتطلبات SOLAS مع النفخ التلقائي.',
  },
  // it: null title + " ." scar
  {
    f: 'src/data/pages/it/safety.yaml',
    find: '  - title: null\n    description: I giubbotti di salvataggio soddisfano gli standard di galleggiamento . Il Life Vest Classic fornisce galleggiabilità 50N+; il Life Vest Pro soddisfa i requisiti SOLAS con gonfiaggio automatico.',
    rep: '  - title: Certificazione ISO 12402\n    description: I giubbotti di salvataggio soddisfano gli standard di galleggiamento ISO 12402. Il Life Vest Classic fornisce galleggiabilità 50N+; il Life Vest Pro soddisfa i requisiti SOLAS con gonfiaggio automatico.',
  },
  // ja: null title
  {
    f: 'src/data/pages/ja/safety.yaml',
    find: '  - title: null\n    description: ライフベストは浮力基準を満たしています。Life Vest Classicは50N+の浮力を提供し、Life Vest Proは自動膨張機能でSOLAS要件を満たします。',
    rep: '  - title: ISO 12402認証\n    description: ライフベストはISO 12402浮力基準を満たしています。Life Vest Classicは50N+の浮力を提供し、Life Vest Proは自動膨張機能でSOLAS要件を満たします。',
  },
  // ru: null title + " ." scar
  {
    f: 'src/data/pages/ru/safety.yaml',
    find: '  - title: null\n    description: Спасательные жилеты соответствуют стандартам плавучести . Life Vest Classic обеспечивает плавучесть 50N+; Life Vest Pro соответствует требованиям SOLAS с автоматическим надуванием.',
    rep: '  - title: Сертификация ISO 12402\n    description: Спасательные жилеты соответствуют стандартам плавучести ISO 12402. Life Vest Classic обеспечивает плавучесть 50N+; Life Vest Pro соответствует требованиям SOLAS с автоматическим надуванием.',
  },
  // nl: null title + stray hyphen scar
  {
    f: 'src/data/pages/nl/safety.yaml',
    find: '  - title: null\n    description: Reddingsvesten voldoen aan de -drijfvermogenormen. De Life Vest Classic biedt 50N+ drijfvermogen; de Life Vest Pro voldoet aan SOLAS-eisen met automatisch opblaassysteem.',
    rep: '  - title: ISO 12402-certificering\n    description: Reddingsvesten voldoen aan de ISO 12402-drijfvermogenormen. De Life Vest Classic biedt 50N+ drijfvermogen; de Life Vest Pro voldoet aan SOLAS-eisen met automatisch opblaassysteem.',
  },
  // no: null title + double-space scar
  {
    f: 'src/data/pages/no/safety.yaml',
    find: '  - title: null\n    description: Redningsvester oppfyller  oppdriftsstandarder. Life Vest Classic gir 50N+ oppdrift; Life Vest Pro oppfyller SOLAS-krav med automatisk oppblåsing.',
    rep: '  - title: ISO 12402-sertifisering\n    description: Redningsvester oppfyller ISO 12402 oppdriftsstandarder. Life Vest Classic gir 50N+ oppdrift; Life Vest Pro oppfyller SOLAS-krav med automatisk oppblåsing.',
  },
  // el: null title + " ." scar
  {
    f: 'src/data/pages/el/safety.yaml',
    find: '  - title: null\n    description: Τα σωσίβια συμμορφώνονται με τα πρότυπα άνωσης . Το Life Vest Classic παρέχει άνωση 50N+· το Life Vest Pro πληροί τις απαιτήσεις SOLAS με αυτόματο φούσκωμα.',
    rep: '  - title: Πιστοποίηση ISO 12402\n    description: Τα σωσίβια συμμορφώνονται με τα πρότυπα άνωσης ISO 12402. Το Life Vest Classic παρέχει άνωση 50N+· το Life Vest Pro πληροί τις απαιτήσεις SOLAS με αυτόματο φούσκωμα.',
  },
  // fi: null title + double-space-before-hyphen scar
  {
    f: 'src/data/pages/fi/safety.yaml',
    find: '  - title: null\n    description: Pelastusliivit täyttävät  -kelluvuusstandardit. Life Vest Classic tarjoaa 50N+ kelluvuuden; Life Vest Pro täyttää SOLAS-vaatimukset automaattisella täytöllä.',
    rep: '  - title: ISO 12402-sertifiointi\n    description: Pelastusliivit täyttävät ISO 12402 -kelluvuusstandardit. Life Vest Classic tarjoaa 50N+ kelluvuuden; Life Vest Pro täyttää SOLAS-vaatimukset automaattisella täytöllä.',
  },
  // cs cert[1]: wrong standard ISO 6185 + double-space scar
  {
    f: 'src/data/pages/cs/safety.yaml',
    find: '  - title: ISO 6185\n    description: Záchranné vesty splňují  normy vztlaku. Vesta Life Vest Classic poskytuje vztlak 50N+; vesta Life Vest Pro díky automatickému nafukování splňuje požadavky SOLAS.',
    rep: '  - title: Certifikace ISO 12402\n    description: Záchranné vesty splňují normy vztlaku ISO 12402. Vesta Life Vest Classic poskytuje vztlak 50N+; vesta Life Vest Pro díky automatickému nafukování splňuje požadavky SOLAS.',
  },
  // cs cert[2]: duplicate entry displaced SOLAS — rebuild SOLAS entry
  {
    f: 'src/data/pages/cs/safety.yaml',
    find: '  - title: null\n    description: Záchranné vesty splňují normy vztlaku . Life Vest Classic poskytuje vztlak 50N+; Life Vest Pro splňuje požadavky SOLAS s automatickým nafukováním.',
    rep: '  - title: Soulad s SOLAS\n    description: Vesta Life Vest Pro splňuje předpisy SOLAS (Safety of Life at Sea) pro offshore a komerční námořní operace.',
  },
  // da: wrong standard ISO 6185
  {
    f: 'src/data/pages/da/safety.yaml',
    find: '  - title: ISO 6185\n    description: Redningsveste opfylder ISO 6185 flydestandarder.',
    rep: '  - title: ISO 12402-certificering\n    description: Redningsveste opfylder ISO 12402 flydestandarder.',
  },
  // ro: wrong standard ISO 6185 + " ." scar
  {
    f: 'src/data/pages/ro/safety.yaml',
    find: '  - title: ISO 6185\n    description: Vestele de salvare respectă standardele de flotabilitate .',
    rep: '  - title: Certificare ISO 12402\n    description: Vestele de salvare respectă standardele de flotabilitate ISO 12402.',
  },
  // th: wrong standard ISO 6185
  {
    f: 'src/data/pages/th/safety.yaml',
    find: '  - title: ISO 6185\n    description: เสื้อชูชีพปฏิบัติตามมาตรฐานการลอยตัว',
    rep: '  - title: การรับรอง ISO 12402\n    description: เสื้อชูชีพปฏิบัติตามมาตรฐานการลอยตัว ISO 12402',
  },
  // de desc: stray hyphen scar
  {
    f: 'src/data/pages/de/safety.yaml',
    find: '    description: Schwimmwesten erfüllen die -Auftriebsstandards. Die Life Vest Classic bietet 50N+ Auftrieb; die Life Vest Pro erfüllt SOLAS-Anforderungen mit automatischer Aufblasung.',
    rep: '    description: Schwimmwesten erfüllen die ISO 12402-Auftriebsstandards. Die Life Vest Classic bietet 50N+ Auftrieb; die Life Vest Pro erfüllt SOLAS-Anforderungen mit automatischer Aufblasung.',
  },
  // ko desc: double-space scar
  {
    f: 'src/data/pages/ko/safety.yaml',
    find: '    description: 구명조끼는  부력 기준을 충족합니다. Life Vest Classic은 50N+ 부력을 제공하며, Life Vest Pro는 자동 팽창 기능으로 SOLAS 요구 사항을 충족합니다.',
    rep: '    description: 구명조끼는 ISO 12402 부력 기준을 충족합니다. Life Vest Classic은 50N+ 부력을 제공하며, Life Vest Pro는 자동 팽창 기능으로 SOLAS 요구 사항을 충족합니다.',
  },
  // pl desc: " ." scar
  {
    f: 'src/data/pages/pl/safety.yaml',
    find: '    description: Kamizelki ratunkowe spełniają normy wyporności . Life Vest Classic zapewnia wyporność 50N+; Life Vest Pro spełnia wymogi SOLAS z automatycznym nadmuchiwaniem.',
    rep: '    description: Kamizelki ratunkowe spełniają normy wyporności ISO 12402. Life Vest Classic zapewnia wyporność 50N+; Life Vest Pro spełnia wymogi SOLAS z automatycznym nadmuchiwaniem.',
  },
  // sv desc: stray hyphen scar
  {
    f: 'src/data/pages/sv/safety.yaml',
    find: '    description: Flytvästarna uppfyller -standarderna för flytkraft. Life Vest Classic ger flytkraft 50N+; Life Vest Pro uppfyller SOLAS-kraven med automatisk uppblåsning.',
    rep: '    description: Flytvästarna uppfyller ISO 12402-standarderna för flytkraft. Life Vest Classic ger flytkraft 50N+; Life Vest Pro uppfyller SOLAS-kraven med automatisk uppblåsning.',
  },
  // tr desc: double-space scar
  {
    f: 'src/data/pages/tr/safety.yaml',
    find: '    description: Can yelekleri,  yüzdürme standartlarını karşılar. Life Vest Classic, 50N+ yüzdürme sağlar; Life Vest Pro, otomatik şişirme ile SOLAS gereksinimlerini karşılar.',
    rep: '    description: Can yelekleri, ISO 12402 yüzdürme standartlarını karşılar. Life Vest Classic, 50N+ yüzdürme sağlar; Life Vest Pro, otomatik şişirme ile SOLAS gereksinimlerini karşılar.',
  },
];
