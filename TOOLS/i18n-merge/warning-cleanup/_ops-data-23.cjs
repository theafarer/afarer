// Shard 23 — solutions-* 套餐列表分隔符 (2/3 空格或单空格 → " + ", EN 惯例) + 补漏 pl/tourism ISO 9001
module.exports = [
  {
    f: 'src/data/pages/pl/tourism-recreation.yaml',
    find: 'Nasza fabryka jest certyfikowana . UKCA',
    rep: 'Nasza fabryka jest certyfikowana ISO 9001. UKCA',
    n: 1,
  },
  // de
  {
    f: 'src/data/pages/de/solutions-paddle-clubs.yaml',
    find: 'Startanleitung   Sicherheitscheckliste',
    rep: 'Startanleitung + Sicherheitscheckliste',
    n: 1,
  },
  {
    f: 'src/data/pages/de/solutions-paddle-clubs.yaml',
    find: '20 Paddel   20 Schwimmwesten (verschiedene Größen)',
    rep: '20 Paddel + 20 Schwimmwesten (verschiedene Größen)',
    n: 1,
  },
  {
    f: 'src/data/pages/de/solutions-resorts-hotels.yaml',
    find: '12-monatige Garantie   CE-zertifiziert',
    rep: '12-monatige Garantie + CE-zertifiziert',
    n: 2,
  },
  {
    f: 'src/data/pages/de/solutions-resorts-hotels.yaml',
    find: '50 Paddel  50 Schwimmwesten',
    rep: '50 Paddel + 50 Schwimmwesten',
    n: 1,
  },
  {
    f: 'src/data/pages/de/solutions-resorts-hotels.yaml',
    find: '24-monatige Garantie   CE-zertifiziert',
    rep: '24-monatige Garantie + CE-zertifiziert',
    n: 1,
  },
  // es
  {
    f: 'src/data/pages/es/solutions-paddle-clubs.yaml',
    find: 'Guía de lanzamiento   lista de verificación de seguridad',
    rep: 'Guía de lanzamiento + lista de verificación de seguridad',
    n: 1,
  },
  {
    f: 'src/data/pages/es/solutions-paddle-clubs.yaml',
    find: '4 bombas   juegos de reparación',
    rep: '4 bombas + juegos de reparación',
    n: 1,
  },
  {
    f: 'src/data/pages/es/solutions-paddle-clubs.yaml',
    find: '20 remos 20 chalecos salvavidas',
    rep: '20 remos + 20 chalecos salvavidas',
    n: 1,
  },
  {
    f: 'src/data/pages/es/solutions-resorts-hotels.yaml',
    find: 'Garantía de 12 meses   Certificado CE',
    rep: 'Garantía de 12 meses + Certificado CE',
    n: 2,
  },
  {
    f: 'src/data/pages/es/solutions-resorts-hotels.yaml',
    find: '50 remos 50 chalecos salvavidas',
    rep: '50 remos + 50 chalecos salvavidas',
    n: 1,
  },
  {
    f: 'src/data/pages/es/solutions-resorts-hotels.yaml',
    find: 'Garantía de 24 meses   Certificado CE',
    rep: 'Garantía de 24 meses + Certificado CE',
    n: 1,
  },
  // it
  {
    f: 'src/data/pages/it/solutions-paddle-clubs.yaml',
    find: 'Guida al lancio   lista di controllo per la sicurezza',
    rep: 'Guida al lancio + lista di controllo per la sicurezza',
    n: 1,
  },
  {
    f: 'src/data/pages/it/solutions-paddle-clubs.yaml',
    find: '4 pompe   kit di riparazione',
    rep: '4 pompe + kit di riparazione',
    n: 1,
  },
  {
    f: 'src/data/pages/it/solutions-paddle-clubs.yaml',
    find: '20 pagaie 20 giubbotti di salvataggio',
    rep: '20 pagaie + 20 giubbotti di salvataggio',
    n: 1,
  },
  {
    f: 'src/data/pages/it/solutions-resorts-hotels.yaml',
    find: 'Garanzia di 12 mesi   Certificato CE',
    rep: 'Garanzia di 12 mesi + Certificato CE',
    n: 2,
  },
  {
    f: 'src/data/pages/it/solutions-resorts-hotels.yaml',
    find: '50 pagaie   50 giubbotti di salvataggio',
    rep: '50 pagaie + 50 giubbotti di salvataggio',
    n: 1,
  },
  {
    f: 'src/data/pages/it/solutions-resorts-hotels.yaml',
    find: 'Garanzia di 24 mesi   Certificato CE',
    rep: 'Garanzia di 24 mesi + Certificato CE',
    n: 1,
  },
  // nl
  {
    f: 'src/data/pages/nl/solutions-paddle-clubs.yaml',
    find: '20 peddels   20 zwemvesten (verschillende maten)',
    rep: '20 peddels + 20 zwemvesten (verschillende maten)',
    n: 1,
  },
  {
    f: 'src/data/pages/nl/solutions-paddle-clubs.yaml',
    find: '4 pompen   reparatiesets',
    rep: '4 pompen + reparatiesets',
    n: 1,
  },
  {
    f: 'src/data/pages/nl/solutions-resorts-hotels.yaml',
    find: '12 maanden garantie   CE-gecertificeerd',
    rep: '12 maanden garantie + CE-gecertificeerd',
    n: 2,
  },
  {
    f: 'src/data/pages/nl/solutions-resorts-hotels.yaml',
    find: '50 peddels   50 reddingsvesten',
    rep: '50 peddels + 50 reddingsvesten',
    n: 1,
  },
  {
    f: 'src/data/pages/nl/solutions-resorts-hotels.yaml',
    find: '24 maanden garantie   CE-gecertificeerd',
    rep: '24 maanden garantie + CE-gecertificeerd',
    n: 1,
  },
  // pl
  {
    f: 'src/data/pages/pl/solutions-paddle-clubs.yaml',
    find: 'Przewodnik uruchomienia   lista kontrolna bezpieczeństwa',
    rep: 'Przewodnik uruchomienia + lista kontrolna bezpieczeństwa',
    n: 1,
  },
  {
    f: 'src/data/pages/pl/solutions-paddle-clubs.yaml',
    find: '20 wioseł   20 kamizelek ratunkowych (różne rozmiary)',
    rep: '20 wioseł + 20 kamizelek ratunkowych (różne rozmiary)',
    n: 1,
  },
  {
    f: 'src/data/pages/pl/solutions-resorts-hotels.yaml',
    find: '12-miesięczna gwarancja   Certyfikowane CE',
    rep: '12-miesięczna gwarancja + Certyfikowane CE',
    n: 2,
  },
  {
    f: 'src/data/pages/pl/solutions-resorts-hotels.yaml',
    find: '50 wioseł 50 kamizelek ratunkowych',
    rep: '50 wioseł + 50 kamizelek ratunkowych',
    n: 1,
  },
  {
    f: 'src/data/pages/pl/solutions-resorts-hotels.yaml',
    find: '24-miesięczna gwarancja   Certyfikat CE',
    rep: '24-miesięczna gwarancja + Certyfikat CE',
    n: 1,
  },
  // pt
  {
    f: 'src/data/pages/pt/solutions-paddle-clubs.yaml',
    find: 'Guia de lançamento   lista de verificação de segurança',
    rep: 'Guia de lançamento + lista de verificação de segurança',
    n: 1,
  },
  {
    f: 'src/data/pages/pt/solutions-paddle-clubs.yaml',
    find: '20 remos   20 coletes salva-vidas (vários tamanhos)',
    rep: '20 remos + 20 coletes salva-vidas (vários tamanhos)',
    n: 1,
  },
  {
    f: 'src/data/pages/pt/solutions-paddle-clubs.yaml',
    find: '4 bombas   kits de reparo',
    rep: '4 bombas + kits de reparo',
    n: 1,
  },
  {
    f: 'src/data/pages/pt/solutions-resorts-hotels.yaml',
    find: 'Garantia de 12 meses   Certificado CE',
    rep: 'Garantia de 12 meses + Certificado CE',
    n: 2,
  },
  {
    f: 'src/data/pages/pt/solutions-resorts-hotels.yaml',
    find: '50 remos   50 coletes salva-vidas',
    rep: '50 remos + 50 coletes salva-vidas',
    n: 1,
  },
  {
    f: 'src/data/pages/pt/solutions-resorts-hotels.yaml',
    find: 'Garantia de 24 meses   Certificado CE',
    rep: 'Garantia de 24 meses + Certificado CE',
    n: 1,
  },
  // ru
  {
    f: 'src/data/pages/ru/solutions-paddle-clubs.yaml',
    find: 'Руководство по запуску   контрольный список безопасности',
    rep: 'Руководство по запуску + контрольный список безопасности',
    n: 1,
  },
  {
    f: 'src/data/pages/ru/solutions-paddle-clubs.yaml',
    find: '4 насоса   комплекта для ремонта',
    rep: '4 насоса + комплекта для ремонта',
    n: 1,
  },
  {
    f: 'src/data/pages/ru/solutions-paddle-clubs.yaml',
    find: '20 весёл 20 спасательных жилетов',
    rep: '20 весёл + 20 спасательных жилетов',
    n: 1,
  },
  {
    f: 'src/data/pages/ru/solutions-resorts-hotels.yaml',
    find: '12-месячная гарантия   Сертификат CE',
    rep: '12-месячная гарантия + Сертификат CE',
    n: 2,
  },
  {
    f: 'src/data/pages/ru/solutions-resorts-hotels.yaml',
    find: '50 весёл 50 спасательных жилетов',
    rep: '50 весёл + 50 спасательных жилетов',
    n: 1,
  },
  {
    f: 'src/data/pages/ru/solutions-resorts-hotels.yaml',
    find: '24-месячная гарантия   Сертификат CE',
    rep: '24-месячная гарантия + Сертификат CE',
    n: 1,
  },
];
