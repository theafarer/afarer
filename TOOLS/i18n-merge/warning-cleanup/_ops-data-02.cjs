// Shard 02 — stats value-null + custom points[3] + fr label fixes (63 ops)
module.exports = [
  // ===== EN base: restore deleted ISO 9001 tokens =====
  {
    f: 'src/data/pages/quality.yaml',
    find: '  - value:\n    label: Quality certified',
    rep: '  - value: ISO 9001\n    label: Quality certified',
  },
  {
    f: 'src/data/pages/factory.yaml',
    find: '  - value:\n    label: Quality certified',
    rep: '  - value: ISO 9001\n    label: Quality certified',
  },
  {
    f: 'src/data/pages/custom.yaml',
    find: '    - text: certified quality management\n      highlight:',
    rep: '    - text: ISO 9001-certified quality management\n      highlight: ISO 9001',
  },

  // ===== quality.yaml stats[2] value: null -> ISO 9001 =====
  {
    f: 'src/data/pages/es/quality.yaml',
    find: '  - value: null\n    label: Calidad certificada',
    rep: '  - value: ISO 9001\n    label: Calidad certificada',
  },
  {
    f: 'src/data/pages/pt/quality.yaml',
    find: '  - value: null\n    label: Certificado de qualidade',
    rep: '  - value: ISO 9001\n    label: Certificado de qualidade',
  },
  {
    f: 'src/data/pages/ar/quality.yaml',
    find: '  - value: null\n    label: معتمد الجودة',
    rep: '  - value: ISO 9001\n    label: معتمد الجودة',
  },
  {
    f: 'src/data/pages/it/quality.yaml',
    find: '  - value: null\n    label: Certificato qualità',
    rep: '  - value: ISO 9001\n    label: Certificato qualità',
  },
  {
    f: 'src/data/pages/ja/quality.yaml',
    find: '  - value: null\n    label: 品質認証',
    rep: '  - value: ISO 9001\n    label: 品質認証',
  },
  {
    f: 'src/data/pages/ru/quality.yaml',
    find: '  - value: null\n    label: Сертификат качества',
    rep: '  - value: ISO 9001\n    label: Сертификат качества',
  },
  {
    f: 'src/data/pages/nl/quality.yaml',
    find: '  - value: null\n    label: Kwaliteitscertificaat',
    rep: '  - value: ISO 9001\n    label: Kwaliteitscertificaat',
  },
  {
    f: 'src/data/pages/no/quality.yaml',
    find: '  - value: null\n    label: Kvalitetssertifikat',
    rep: '  - value: ISO 9001\n    label: Kvalitetssertifikat',
  },
  {
    f: 'src/data/pages/el/quality.yaml',
    find: '  - value: null\n    label: Πιστοποίηση ποιότητας',
    rep: '  - value: ISO 9001\n    label: Πιστοποίηση ποιότητας',
  },
  {
    f: 'src/data/pages/fi/quality.yaml',
    find: '  - value: null\n    label: Laatusertifioitu',
    rep: '  - value: ISO 9001\n    label: Laatusertifioitu',
  },

  // ===== factory.yaml stats[3] value: null -> ISO 9001 =====
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '  - value: null\n    label: Calidad certificada',
    rep: '  - value: ISO 9001\n    label: Calidad certificada',
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '  - value: null\n    label: Certificado de qualidade',
    rep: '  - value: ISO 9001\n    label: Certificado de qualidade',
  },
  {
    f: 'src/data/pages/ar/factory.yaml',
    find: '  - value: null\n    label: معتمدة الجودة',
    rep: '  - value: ISO 9001\n    label: معتمدة الجودة',
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: '  - value: null\n    label: Certificato qualità',
    rep: '  - value: ISO 9001\n    label: Certificato qualità',
  },
  {
    f: 'src/data/pages/ja/factory.yaml',
    find: '  - value: null\n    label: 品質認証',
    rep: '  - value: ISO 9001\n    label: 品質認証',
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '  - value: null\n    label: Сертифицировано по качеству',
    rep: '  - value: ISO 9001\n    label: Сертифицировано по качеству',
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '  - value: null\n    label: Kwaliteit gecertificeerd',
    rep: '  - value: ISO 9001\n    label: Kwaliteit gecertificeerd',
  },
  {
    f: 'src/data/pages/no/factory.yaml',
    find: '  - value: null\n    label: Kvalitetssertifisert',
    rep: '  - value: ISO 9001\n    label: Kvalitetssertifisert',
  },
  {
    f: 'src/data/pages/el/factory.yaml',
    find: '  - value: null\n    label: Πιστοποιημένο ποιότητας',
    rep: '  - value: ISO 9001\n    label: Πιστοποιημένο ποιότητας',
  },

  // ===== cs/da/ro/th factory stats[2] wrong value '6' =====
  {
    f: 'src/data/pages/cs/factory.yaml',
    find: "  - value: '6'\n    label: Vyrobeno SUP desek ročně",
    rep: '  - value: 15 000+\n    label: Vyrobeno SUP desek ročně',
  },
  {
    f: 'src/data/pages/da/factory.yaml',
    find: "  - value: '6'\n    label: Produktionslinjer",
    rep: '  - value: 15.000+\n    label: SUPs produceret årligt',
  },
  {
    f: 'src/data/pages/ro/factory.yaml',
    find: "  - value: '6'\n    label: Linii de producție",
    rep: '  - value: 15.000+\n    label: SUP-uri produse anual',
  },
  {
    f: 'src/data/pages/th/factory.yaml',
    find: "  - value: '6'\n    label: สายการผลิต",
    rep: '  - value: 15,000+\n    label: SUP ที่ผลิตต่อปี',
  },
  // th stats[3] label copy-paste error
  {
    f: 'src/data/pages/th/factory.yaml',
    find: '  - value: ISO 9001\n    label: ตร.ม. พื้นที่ทั้งหมด',
    rep: '  - value: ISO 9001\n    label: รับรองคุณภาพ',
  },

  // ===== custom.yaml points[3]: text + highlight null -> ISO 9001 =====
  {
    f: 'src/data/pages/fr/custom.yaml',
    find: '    - text: gestion de la qualité certifiée\n      highlight: null',
    rep: '    - text: gestion de la qualité certifiée ISO 9001\n      highlight: ISO 9001',
  },
  {
    f: 'src/data/pages/es/custom.yaml',
    find: '    - text: gestión de calidad certificada\n      highlight: null',
    rep: '    - text: gestión de calidad certificada ISO 9001\n      highlight: ISO 9001',
  },
  {
    f: 'src/data/pages/pt/custom.yaml',
    find: '    - text: Sistema de gestão da qualidade certificado\n      highlight: null',
    rep: '    - text: Sistema de gestão da qualidade certificado ISO 9001\n      highlight: ISO 9001',
  },
  {
    f: 'src/data/pages/ar/custom.yaml',
    find: '    - text: نظام إدارة جودة معتمد\n      highlight: null',
    rep: '    - text: نظام إدارة جودة معتمد ISO 9001\n      highlight: ISO 9001',
  },
  {
    f: 'src/data/pages/it/custom.yaml',
    find: '    - text: Gestione qualità certificata\n      highlight: null',
    rep: '    - text: Gestione qualità certificata ISO 9001\n      highlight: ISO 9001',
  },
  {
    f: 'src/data/pages/ja/custom.yaml',
    find: '    - text: 認証の品質管理\n      highlight: null',
    rep: '    - text: ISO 9001認証の品質管理\n      highlight: ISO 9001',
  },
  {
    f: 'src/data/pages/ru/custom.yaml',
    find: '    - text: Сертифицированная  система менеджмента качества\n      highlight: null',
    rep: '    - text: Сертифицированная ISO 9001 система менеджмента качества\n      highlight: ISO 9001',
  },
  {
    f: 'src/data/pages/nl/custom.yaml',
    find: "    - text: '-gecertificeerd kwaliteitsmanagementsysteem'\n      highlight: null",
    rep: "    - text: 'ISO 9001-gecertificeerd kwaliteitsmanagementsysteem'\n      highlight: ISO 9001",
  },
  {
    f: 'src/data/pages/no/custom.yaml',
    find: '    - text: Kvalitetsstyringssystem sertifisert\n      highlight: null',
    rep: '    - text: ISO 9001-sertifisert kvalitetsstyringssystem\n      highlight: ISO 9001',
  },
  {
    f: 'src/data/pages/el/custom.yaml',
    find: '    - text: Πιστοποιημένο σύστημα διαχείρισης ποιότητας\n      highlight: null',
    rep: '    - text: Πιστοποιημένο σύστημα διαχείρισης ποιότητας ISO 9001\n      highlight: ISO 9001',
  },
  {
    f: 'src/data/pages/fi/custom.yaml',
    find: "    - text: '-sertifioitu laadunhallinta'\n      highlight: null",
    rep: "    - text: 'ISO 9001-sertifioitu laadunhallinta'\n      highlight: ISO 9001",
  },
  {
    f: 'src/data/pages/cs/custom.yaml',
    find: '    - text: certifikované řízení kvality\n      highlight: null',
    rep: '    - text: ISO 9001 certifikované řízení kvality\n      highlight: ISO 9001',
  },
  {
    f: 'src/data/pages/da/custom.yaml',
    find: '    - text: certificeret kvalitetsstyring\n      highlight: null',
    rep: '    - text: ISO 9001-certificeret kvalitetsstyring\n      highlight: ISO 9001',
  },
  {
    f: 'src/data/pages/ro/custom.yaml',
    find: '    - text: management certificat al calității\n      highlight: null',
    rep: '    - text: management al calității certificat ISO 9001\n      highlight: ISO 9001',
  },
  {
    f: 'src/data/pages/th/custom.yaml',
    find: '    - text: การบริหารจัดการคุณภาพที่ได้รับการรับรอง\n      highlight: null',
    rep: '    - text: การบริหารจัดการคุณภาพที่ได้รับการรับรอง ISO 9001\n      highlight: ISO 9001',
  },
  // text-only (highlight already set): de/ko/sv
  {
    f: 'src/data/pages/de/custom.yaml',
    find: '    - text: zertifiziertes Qualitätsmanagement\n      highlight: ISO 9001',
    rep: '    - text: ISO 9001-zertifiziertes Qualitätsmanagement\n      highlight: ISO 9001',
  },
  {
    f: 'src/data/pages/ko/custom.yaml',
    find: '    - text: 인증 품질 관리\n      highlight: ISO 9001',
    rep: '    - text: ISO 9001 인증 품질 관리\n      highlight: ISO 9001',
  },
  {
    f: 'src/data/pages/sv/custom.yaml',
    find: "    - text: '-certifierat kvalitetsledningssystem'\n      highlight: ISO 9001",
    rep: "    - text: 'ISO 9001-certifierat kvalitetsledningssystem'\n      highlight: ISO 9001",
  },

  // ===== fr: quality stats labels (EN leaks + null) =====
  {
    f: 'src/data/pages/fr/quality.yaml',
    find: '  - value: 100 %\n    label: Units pressure-tested',
    rep: '  - value: 100 %\n    label: Unités testées sous pression',
  },
  {
    f: 'src/data/pages/fr/quality.yaml',
    find: '  - value: null\n    label: Quality certified',
    rep: '  - value: ISO 9001\n    label: Qualité certifiée',
  },
  {
    f: 'src/data/pages/fr/quality.yaml',
    find: '  - value: 3-Year\n    label: Limited warranty',
    rep: '  - value: 3 ans\n    label: Garantie limitée',
  },
  { f: 'src/data/pages/fr/quality.yaml', find: '  tagline: Testing Procedures', rep: '  tagline: Procédures de test' },

  // ===== fr: factory stats labels (EN leaks + null) =====
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: '  - value: 12 000 m²\n    label: Manufacturing floor',
    rep: '  - value: 12 000 m²\n    label: Surface de production',
  },
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: '  - value: 200+\n    label: Skilled workers',
    rep: '  - value: 200+\n    label: Ouvriers qualifiés',
  },
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: '  - value: 15 000+\n    label: SUPs produced annually',
    rep: '  - value: 15 000+\n    label: SUP produits par an',
  },
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: '  - value: null\n    label: Quality certified',
    rep: '  - value: ISO 9001\n    label: Qualité certifiée',
  },

  // ===== fr: qc_dashboard labels (EN leaks) =====
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: '    - value: 100 %\n      label: Units pressure-tested',
    rep: '    - value: 100 %\n      label: Unités testées sous pression',
  },
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: '    - value: AQL 2,5\n      label: Major defect threshold',
    rep: '    - value: AQL 2,5\n      label: Seuil de défauts majeurs',
  },
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: '    - value: 24–48 h\n      label: Pressure hold duration',
    rep: '    - value: 24–48 h\n      label: Durée de maintien sous pression',
  },
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: '    - value: 1,25×\n      label: Test pressure vs rated',
    rep: '    - value: 1,25×\n      label: Pression d’essai vs nominale',
  },

  // ===== fr: misc EN leaks =====
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: '      - label: Lab Equipment',
    rep: '      - label: Équipements de laboratoire',
  },
  {
    f: 'src/data/pages/fr/factory-capacity.yaml',
    find: '  - value: 200+\n    label: Skilled workforce',
    rep: '  - value: 200+\n    label: Main-d’œuvre qualifiée',
  },
  {
    f: 'src/data/pages/fr/factory-capacity.yaml',
    find: '  - value: 50+\n    label: Export countries',
    rep: '  - value: 50+\n    label: Pays d’exportation',
  },
  { f: 'src/data/pages/fr/custom.yaml', find: '    - label: Order volume', rep: '    - label: Volume de commande' },
  { f: 'src/data/pages/fr/custom.yaml', find: '    - label: Lead time', rep: '    - label: Délai de production' },
  { f: 'src/data/pages/fr/custom.yaml', find: '    - label: Customisation', rep: '    - label: Personnalisation' },
];
