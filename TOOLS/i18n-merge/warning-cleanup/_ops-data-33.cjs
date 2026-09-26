// shard 33: production_flow stage numeric normalization ru/de/es/it/nl/pl/pt (41) + de/academy Advanced level + fr/partners subtitle
module.exports = [
  {
    f: 'src/data/pages/de/academy.yaml',
    find: '        slug: understanding-tides\n  - level: Fortgeschritten',
    rep: '        slug: understanding-tides\n  - level: Expertenstufe',
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '- stage: Eins',
    rep: "- stage: '01'",
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '- stage: Zwei',
    rep: "- stage: '02'",
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '- stage: Drei',
    rep: "- stage: '03'",
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '- stage: Vier',
    rep: "- stage: '04'",
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '- stage: Fünf',
    rep: "- stage: '05'",
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '- stage: Sechs',
    rep: "- stage: '06'",
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '- stage: Uno',
    rep: "- stage: '01'",
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '- stage: Dos',
    rep: "- stage: '02'",
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '- stage: Tres',
    rep: "- stage: '03'",
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '- stage: Cuatro',
    rep: "- stage: '04'",
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '- stage: Cinco',
    rep: "- stage: '05'",
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '- stage: Seis',
    rep: "- stage: '06'",
  },
  {
    f: 'src/data/pages/fr/partners.yaml',
    find: 'Nous collaborons avec des distributeurs maritimes dans plus de 50 pays.',
    rep: 'Nous collaborons avec des distributeurs maritimes, des concessionnaires nautiques, des détaillants d’équipements et des partenaires de marque dans plus de 50 pays.',
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: '- stage: Due',
    rep: "- stage: '02'",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: '- stage: Tre',
    rep: "- stage: '03'",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: '- stage: Quattro',
    rep: "- stage: '04'",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: '- stage: Cinque',
    rep: "- stage: '05'",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: '- stage: Sei',
    rep: "- stage: '06'",
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '- stage: Een',
    rep: "- stage: '01'",
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '- stage: Twee',
    rep: "- stage: '02'",
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '- stage: Drie',
    rep: "- stage: '03'",
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '- stage: Vier',
    rep: "- stage: '04'",
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '- stage: Vijf',
    rep: "- stage: '05'",
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '- stage: Zes',
    rep: "- stage: '06'",
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '- stage: Jeden',
    rep: "- stage: '01'",
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '- stage: Dwa',
    rep: "- stage: '02'",
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '- stage: Trzy',
    rep: "- stage: '03'",
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '- stage: Cztery',
    rep: "- stage: '04'",
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '- stage: Pięć',
    rep: "- stage: '05'",
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '- stage: Sześć',
    rep: "- stage: '06'",
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '- stage: Um',
    rep: "- stage: '01'",
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '- stage: Dois',
    rep: "- stage: '02'",
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '- stage: Três',
    rep: "- stage: '03'",
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '- stage: Quatro',
    rep: "- stage: '04'",
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '- stage: Cinco',
    rep: "- stage: '05'",
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '- stage: Seis',
    rep: "- stage: '06'",
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '- stage: Один',
    rep: "- stage: '01'",
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '- stage: Два',
    rep: "- stage: '02'",
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '- stage: Три',
    rep: "- stage: '03'",
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '- stage: Четыре',
    rep: "- stage: '04'",
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '- stage: Пять',
    rep: "- stage: '05'",
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '- stage: Шесть',
    rep: "- stage: '06'",
  },
];
