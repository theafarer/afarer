// Shard 16 — factory card1 (Production Capacity) desc drift (18 ops)
// db928cfa-era desc kept the pre-SUP-rename EN text ("boats/yr across SUP (8,000+),
// SUP (2,000+), inflatable SUP (5,000+)") untranslated in 18 langs.
// New EN ref: '12,000 m² facility producing 15,000+ SUPs/yr across SUP board and
// safety equipment lines. 200+ workers, 2 shifts.' (fi fixed in shard 07; fr current.)
// Number conventions: de/it/pt/nl/da/ro/el 12.000; fr/fi/ru/no/sv/cs 12 000; es/ko/ja/th 12,000.
module.exports = [
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: 12.000 m² Anlage mit Produktion von 15.000+ SUPs/Jahr über SUP-Board- und Sicherheitsausrüstungslinien. 200+ Mitarbeiter, 2 Schichten.',
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: Instalación de 12,000 m² que produce 15,000+ SUP al año en líneas de tablas SUP y equipos de seguridad. 200+ trabajadores, 2 turnos.',
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: Instalação de 12.000 m² produzindo 15.000+ SUPs/ano nas linhas de pranchas SUP e equipamentos de segurança. 200+ trabalhadores, 2 turnos.',
  },
  {
    f: 'src/data/pages/ar/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: منشأة بمساحة 12,000 م² تنتج أكثر من 15,000 لوح SUP سنويًا عبر خطوط ألواح SUP ومعدات السلامة. أكثر من 200 عامل، بواقع ورديتين.',
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: Struttura da 12.000 m² che produce 15.000+ SUP/anno su linee di tavole SUP e attrezzature di sicurezza. 200+ operai, 2 turni.',
  },
  {
    f: 'src/data/pages/ja/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: 12,000 m²の施設で、SUPボードおよび安全装備ラインにて年間15,000台以上のSUPを生産。200名以上の従業員、2交代制で運営。',
  },
  {
    f: 'src/data/pages/ko/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: 12,000 m² 시설에서 SUP 보드 및 안전 장비 라인으로 연간 15,000대 이상의 SUP를 생산합니다. 200명 이상의 작업자가 2교대로 근무합니다.',
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: Производственная площадка 12 000 м² выпускает 15 000+ SUP в год на линиях SUP-досок и снаряжения безопасности. Более 200 сотрудников, 2 смены.',
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: Zakład o powierzchni 12 000 m² produkujący 15 000+ SUP rocznie w liniach desek SUP i sprzętu bezpieczeństwa. 200+ pracowników, 2 zmiany.',
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: Faciliteit van 12.000 m² die 15.000+ SUPs per jaar produceert op SUP-board- en veiligheidsuitrustingslijnen. 200+ medewerkers, 2 ploegen.',
  },
  {
    f: 'src/data/pages/sv/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: Anläggning på 12 000 m² som producerar 15 000+ SUP per år på SUP-board- och säkerhetsutrustningslinjer. 200+ arbetare, 2 skift.',
  },
  {
    f: 'src/data/pages/no/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: Anlegg på 12 000 m² som produserer 15 000+ SUP per år på SUP-brett- og sikkerhetsutstyrslinjer. 200+ arbeidere, 2 skift.',
  },
  {
    f: 'src/data/pages/el/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: Εγκατάσταση 12.000 m² που παράγει 15.000+ SUP ετησίως σε γραμμές πλακών SUP και εξοπλισμού ασφάλειας. 200+ εργαζόμενοι, 2 βάρδιες.',
  },
  {
    f: 'src/data/pages/tr/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: 12.000 m² tesis, SUP board ve güvenlik ekipmanı hatlarında yılda 15.000+ SUP üretiyor. 200+ çalışan, 2 vardiya.',
  },
  {
    f: 'src/data/pages/cs/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: Závod o rozloze 12 000 m² vyrábějící 15 000+ SUP ročně na linkách SUP prken a bezpečnostního vybavení. 200+ pracovníků, 2 směny.',
  },
  {
    f: 'src/data/pages/da/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: Anlæg på 12.000 m², der producerer 15.000+ SUPs om året på SUP-board- og sikkerhedsudrustningslinjer. 200+ medarbejdere, 2 hold.',
  },
  {
    f: 'src/data/pages/ro/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: Instalație de 12.000 m² care produce 15.000+ SUP pe an pe liniile de plăci SUP și echipamente de siguranță. 200+ lucrători, 2 schimburi.',
  },
  {
    f: 'src/data/pages/th/factory.yaml',
    find: '    desc: 12,000 m2 facility producing 15,000+ boats/yr across SUP (8,000+), SUP (2,000+), inflatable SUP (5,000+), and safety equipment lines. 200+ workers, 2 shifts.',
    rep: '    desc: โรงงานขนาด 12,000 ตร.ม. ผลิต SUP มากกว่า 15,000 ลำต่อปีจากไลน์ผลิตบอร์ด SUP และอุปกรณ์ความปลอดภัย พนักงานมากกว่า 200 คน ทำงาน 2 กะ',
  },
];
