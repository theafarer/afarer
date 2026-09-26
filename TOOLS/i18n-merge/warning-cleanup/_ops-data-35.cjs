// shard 35: stat-value normalization — spelled numbers x7 locales, 15,000+ missing-plus family (+ar),
// ar digit forms (community/about), trust ISO 9001 locale titles x12 + ru duplicated desc,
// m2 superscript restore x27 + factory stat unit loss x4 (cs/da/ro/th),
// paddle benefits 40%/5-Year missing plus x7 locales (translated units kept),
// addendum: home oem steps 01-05 x7, quality stat 8 x7, randdcenter rd stats 14/8/6 x7,
// resorts case_study +40% prefix x7 (global stat-field scout findings),
// addendum 2: custom num 01-04 x27, factory-process step 01-08 x55, factory qc step 1-3 x20,
// about amount separator x6 (cs/da/el/fi/fr/ro)
module.exports = [
  {
    f: 'src/data/pages/ar/about.yaml',
    find: '      amount: 2 400\n',
    rep: '      amount: 2,400+\n',
  },
  {
    f: 'src/data/pages/ar/about.yaml',
    find: '      amount: ٤٠\n',
    rep: "      amount: '40'\n",
  },
  {
    f: 'src/data/pages/ar/afarer-story.yaml',
    find: "        value: '15000'\n",
    rep: "        value: '15,000+'\n",
  },
  {
    f: 'src/data/pages/ar/community.yaml',
    find: "    - title: '+40'\n",
    rep: "    - title: '40+'\n",
  },
  {
    f: 'src/data/pages/ar/community.yaml',
    find: "    - title: '+12'\n",
    rep: "    - title: '12+'\n",
  },
  {
    f: 'src/data/pages/ar/custom.yaml',
    find: "      highlight: '15000'\n",
    rep: "      highlight: '15,000+'\n",
  },
  {
    f: 'src/data/pages/ar/factory-capacity.yaml',
    find: "  - value: '15000'\n",
    rep: "  - value: '15,000+'\n",
  },
  {
    f: 'src/data/pages/ar/factory.yaml',
    find: 'subtitle: 12,000 m2',
    rep: 'subtitle: 12,000 m²',
  },
  {
    f: 'src/data/pages/ar/factory.yaml',
    find: '  - value: 12,000 م2\n',
    rep: '  - value: 12,000 م²\n',
  },
  {
    f: 'src/data/pages/ar/solutions.yaml',
    find: "      amount: '15000'\n",
    rep: "      amount: '15,000+'\n",
  },
  {
    f: 'src/data/pages/ar/trust.yaml',
    find: "    - value: '15000'\n",
    rep: "    - value: '15,000+'\n",
  },
  {
    f: 'src/data/pages/ar/trust.yaml',
    find: "    - title: ''\n      description: نظام إدارة جودة منذ 2012",
    rep: '    - title: ISO 9001\n      description: نظام إدارة جودة منذ 2012',
  },
  {
    f: 'src/data/pages/ar/trust.yaml',
    find: "    - title: ''\n      description: منشأتنا في تشينغداو بمساحة 12,000 م² تعمل تحت نظام إدارة جودة ISO 9001. كل دفعة إنتاج قابلة للتتبع وموثقة ومفحوصة.",
    rep: '    - title: ISO 9001\n      description: منشأتنا في تشينغداو بمساحة 12,000 م² تعمل تحت نظام إدارة جودة ISO 9001. كل دفعة إنتاج قابلة للتتبع وموثقة ومفحوصة.',
  },
  {
    f: 'src/data/pages/cs/factory.yaml',
    find: '- value: 12 000\n',
    rep: '- value: 12 000 m²\n',
  },
  {
    f: 'src/data/pages/cs/gallery.yaml',
    find: '12 000 m2 v čínském',
    rep: '12 000 m² v čínském',
  },
  {
    f: 'src/data/pages/cs/trust.yaml',
    find: '    - title: BSCI\n      description: Náš závod 12 000 m² v Qingdao funguje pod systémem řízení kvality ISO 9001. Každá výrobní dávka je dohledatelná, zdokumentovaná a zkontrolovaná.',
    rep: '    - title: ISO 9001\n      description: Náš závod 12 000 m² v Qingdao funguje pod systémem řízení kvality ISO 9001. Každá výrobní dávka je dohledatelná, zdokumentovaná a zkontrolovaná.',
  },
  {
    f: 'src/data/pages/da/factory.yaml',
    find: "- value: '12.000'\n",
    rep: "- value: '12.000 m²'\n",
  },
  {
    f: 'src/data/pages/de/about.yaml',
    find: '      amount: Zweitausendvierhundert\n',
    rep: "      amount: '2.400+'\n",
  },
  {
    f: 'src/data/pages/de/about.yaml',
    find: '      amount: Vierzig\n',
    rep: "      amount: '40'\n",
  },
  {
    f: 'src/data/pages/de/about.yaml',
    find: '      amount: Sechzig\n',
    rep: "      amount: '60'\n",
  },
  {
    f: 'src/data/pages/de/about.yaml',
    find: '      amount: Vierundzwanzig\n',
    rep: "      amount: '24'\n",
  },
  {
    f: 'src/data/pages/de/afarer-story.yaml',
    find: '      amount: Fünfzig\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/de/afarer-story.yaml',
    find: '      amount: Zweihundert\n',
    rep: "      amount: '200+'\n",
  },
  {
    f: 'src/data/pages/de/afarer-story.yaml',
    find: '      amount: Vierzehn\n',
    rep: "      amount: '14+'\n",
  },
  {
    f: 'src/data/pages/de/afarer-story.yaml',
    find: '        value: Zweihundert\n',
    rep: "        value: '200+'\n",
  },
  {
    f: 'src/data/pages/de/afarer-story.yaml',
    find: '        value: Vierzehn\n',
    rep: "        value: '14+'\n",
  },
  {
    f: 'src/data/pages/de/brand-global-presence.yaml',
    find: '      amount: Fünfzig\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/de/community.yaml',
    find: '    - title: Vierzig\n',
    rep: "    - title: '40+'\n",
  },
  {
    f: 'src/data/pages/de/community.yaml',
    find: '    - title: Zwölf\n',
    rep: "    - title: '12+'\n",
  },
  {
    f: 'src/data/pages/de/custom.yaml',
    find: '      highlight: Zweihundert\n',
    rep: "      highlight: '200+'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: "  - value: '15.000'\n",
    rep: "  - value: '15.000+'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '  - value: Zweihundert\n',
    rep: "  - value: '200+'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '  - value: Fünfzig\n',
    rep: "  - value: '50+'\n",
  },
  {
    f: 'src/data/pages/de/factory-capacity.yaml',
    find: '  - value: Zehn\n',
    rep: "  - value: '10+'\n",
  },
  {
    f: 'src/data/pages/de/factory-oem-capability.yaml',
    find: '  - value: Zehn\n',
    rep: "  - value: '10+'\n",
  },
  {
    f: 'src/data/pages/de/factory-oem-capability.yaml',
    find: '  - value: Fünfzig\n',
    rep: "  - value: '50+'\n",
  },
  {
    f: 'src/data/pages/de/factory-oem-capability.yaml',
    find: '  - value: Zweihundert\n',
    rep: "  - value: '200+'\n",
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '  engineers: Fünfundzwanzig\n',
    rep: "  engineers: '25+'\n",
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '      count: Fünfundzwanzig\n',
    rep: "      count: '25+'\n",
  },
  {
    f: 'src/data/pages/de/home.yaml',
    find: '    - metric: Zehn\n',
    rep: "    - metric: '10+'\n",
  },
  {
    f: 'src/data/pages/de/home.yaml',
    find: '    - metric: Fünfzig\n',
    rep: "    - metric: '50+'\n",
  },
  {
    f: 'src/data/pages/de/solutions-paddle-clubs.yaml',
    find: '    - metric: Fünfhundert\n',
    rep: "    - metric: '500+'\n",
  },
  {
    f: 'src/data/pages/de/solutions-paddle-clubs.yaml',
    find: 'metric: 40%\n',
    rep: 'metric: 40%+\n',
  },
  {
    f: 'src/data/pages/de/solutions-paddle-clubs.yaml',
    find: 'metric: 5 Jahre\n',
    rep: 'metric: 5+ Jahre\n',
  },
  {
    f: 'src/data/pages/de/solutions-resorts-hotels.yaml',
    find: '    - metric: Fünfhundert\n',
    rep: "    - metric: '500+'\n",
  },
  {
    f: 'src/data/pages/de/solutions.yaml',
    find: '      amount: Einhundert\n',
    rep: "      amount: '100+'\n",
  },
  {
    f: 'src/data/pages/de/solutions.yaml',
    find: '      amount: Fünfzig\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/de/solutions.yaml',
    find: "      amount: '15.000'\n",
    rep: "      amount: '15.000+'\n",
  },
  {
    f: 'src/data/pages/de/trust.yaml',
    find: '    - value: Zweihundert\n',
    rep: "    - value: '200+'\n",
  },
  {
    f: 'src/data/pages/de/trust.yaml',
    find: "    - value: '15.000'\n",
    rep: "    - value: '15.000+'\n",
  },
  {
    f: 'src/data/pages/el/factory.yaml',
    find: 'subtitle: 12.000 m2 ολοκληρωμένης',
    rep: 'subtitle: 12.000 m² ολοκληρωμένης',
  },
  {
    f: 'src/data/pages/el/factory.yaml',
    find: '- value: 12.000 m2\n',
    rep: '- value: 12.000 m²\n',
  },
  {
    f: 'src/data/pages/el/trust.yaml',
    find: "    - title: ''\n      description: Σύστημα διαχείρισης ποιότητας από το 2012",
    rep: '    - title: ISO 9001\n      description: Σύστημα διαχείρισης ποιότητας από το 2012',
  },
  {
    f: 'src/data/pages/el/trust.yaml',
    find: "    - title: ''\n      description: Η εγκατάστασή μας 12.000 m² στο Qingdao λειτουργεί υπό σύστημα διαχείρισης ποιότητας ISO 9001. Κάθε παρτίδα παραγωγής είναι ιχνηλάσιμη και ελεγμένη.",
    rep: '    - title: ISO 9001\n      description: Η εγκατάστασή μας 12.000 m² στο Qingdao λειτουργεί υπό σύστημα διαχείρισης ποιότητας ISO 9001. Κάθε παρτίδα παραγωγής είναι ιχνηλάσιμη και ελεγμένη.',
  },
  {
    f: 'src/data/pages/el/trust.yaml',
    find: 'των 12,000 m2 στο',
    rep: 'των 12,000 m² στο',
  },
  {
    f: 'src/data/pages/es/about.yaml',
    find: '      amount: 2400+\n',
    rep: '      amount: 2.400+\n',
  },
  {
    f: 'src/data/pages/es/about.yaml',
    find: '      amount: Cuarenta\n',
    rep: "      amount: '40'\n",
  },
  {
    f: 'src/data/pages/es/about.yaml',
    find: '      amount: Sesenta\n',
    rep: "      amount: '60'\n",
  },
  {
    f: 'src/data/pages/es/about.yaml',
    find: '      amount: Veinticuatro\n',
    rep: "      amount: '24'\n",
  },
  {
    f: 'src/data/pages/es/afarer-story.yaml',
    find: '      amount: Cincuenta\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/es/afarer-story.yaml',
    find: '      amount: Doscientos\n',
    rep: "      amount: '200+'\n",
  },
  {
    f: 'src/data/pages/es/afarer-story.yaml',
    find: '      amount: Catorce\n',
    rep: "      amount: '14+'\n",
  },
  {
    f: 'src/data/pages/es/afarer-story.yaml',
    find: '        value: Doscientos\n',
    rep: "        value: '200+'\n",
  },
  {
    f: 'src/data/pages/es/afarer-story.yaml',
    find: '        value: Catorce\n',
    rep: "        value: '14+'\n",
  },
  {
    f: 'src/data/pages/es/afarer-story.yaml',
    find: '        value: 15,000\n',
    rep: '        value: 15.000+\n',
  },
  {
    f: 'src/data/pages/es/brand-global-presence.yaml',
    find: '      amount: Cincuenta\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/es/community.yaml',
    find: '    - title: Cuarenta\n',
    rep: "    - title: '40+'\n",
  },
  {
    f: 'src/data/pages/es/community.yaml',
    find: '    - title: Doce\n',
    rep: "    - title: '12+'\n",
  },
  {
    f: 'src/data/pages/es/community.yaml',
    find: '    - title: Diez mil\n',
    rep: "    - title: '10.000+'\n",
  },
  {
    f: 'src/data/pages/es/custom.yaml',
    find: '      highlight: Doscientos\n',
    rep: "      highlight: '200+'\n",
  },
  {
    f: 'src/data/pages/es/custom.yaml',
    find: '      highlight: 15,000\n',
    rep: '      highlight: 15.000+\n',
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '  - value: 15,000\n',
    rep: '  - value: 15.000+\n',
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '  - value: Doscientos\n',
    rep: "  - value: '200+'\n",
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '  - value: Cincuenta\n',
    rep: "  - value: '50+'\n",
  },
  {
    f: 'src/data/pages/es/factory-capacity.yaml',
    find: '  - value: Diez\n',
    rep: "  - value: '10+'\n",
  },
  {
    f: 'src/data/pages/es/factory-oem-capability.yaml',
    find: '  - value: Diez\n',
    rep: "  - value: '10+'\n",
  },
  {
    f: 'src/data/pages/es/factory-oem-capability.yaml',
    find: '  - value: Cincuenta\n',
    rep: "  - value: '50+'\n",
  },
  {
    f: 'src/data/pages/es/factory-oem-capability.yaml',
    find: '  - value: Doscientos\n',
    rep: "  - value: '200+'\n",
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '  engineers: Veinticinco\n',
    rep: "  engineers: '25+'\n",
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '      count: Veinticinco\n',
    rep: "      count: '25+'\n",
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '- value: 12.000 m2\n',
    rep: '- value: 12.000 m²\n',
  },
  {
    f: 'src/data/pages/es/home.yaml',
    find: '    - metric: Diez\n',
    rep: "    - metric: '10+'\n",
  },
  {
    f: 'src/data/pages/es/home.yaml',
    find: '    - metric: Cincuenta\n',
    rep: "    - metric: '50+'\n",
  },
  {
    f: 'src/data/pages/es/hull-engineering.yaml',
    find: '87 kN/m2</span>',
    rep: '87 kN/m²</span>',
  },
  {
    f: 'src/data/pages/es/solutions-paddle-clubs.yaml',
    find: 'metric: 40%\n',
    rep: 'metric: 40%+\n',
  },
  {
    f: 'src/data/pages/es/solutions-paddle-clubs.yaml',
    find: 'metric: 5 años\n',
    rep: 'metric: 5+ años\n',
  },
  {
    f: 'src/data/pages/es/solutions.yaml',
    find: '      amount: Cien\n',
    rep: "      amount: '100+'\n",
  },
  {
    f: 'src/data/pages/es/solutions.yaml',
    find: '      amount: Cincuenta\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/es/solutions.yaml',
    find: '      amount: 15,000\n',
    rep: '      amount: 15.000+\n',
  },
  {
    f: 'src/data/pages/es/trust.yaml',
    find: '    - value: Doscientos\n',
    rep: "    - value: '200+'\n",
  },
  {
    f: 'src/data/pages/es/trust.yaml',
    find: '    - value: 15,000\n',
    rep: '    - value: 15.000+\n',
  },
  {
    // shard 37 replaced the subtitle line; carry-forward m2->m² fix to new text (TECH L22 ①)
    f: 'src/data/pages/factory.yaml',
    find: 'subtitle: 12,000 m2 of integrated manufacturing',
    rep: 'subtitle: 12,000 m² of integrated manufacturing',
  },
  {
    f: 'src/data/pages/factory.yaml',
    find: '- value: 12,000 m2\n',
    rep: '- value: 12,000 m²\n',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'subtitle: 12 000 m2 integroitua',
    rep: 'subtitle: 12 000 m² integroitua',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: '- value: 12 000 m2\n',
    rep: '- value: 12 000 m²\n',
  },
  {
    f: 'src/data/pages/fi/trust.yaml',
    find: "    - title: ''\n      description: Laadunhallintajärjestelmä vuodesta 2012",
    rep: '    - title: ISO 9001\n      description: Laadunhallintajärjestelmä vuodesta 2012',
  },
  {
    f: 'src/data/pages/fi/trust.yaml',
    find: "    - title: ''\n      description: 12 000 m² Qingdaon laitoksemme toimii ISO 9001 -laadunhallintajärjestelmän alla. Jokainen tuotantoerä on jäljitettävissä, dokumentoitu ja tarkastettu.",
    rep: '    - title: ISO 9001\n      description: 12 000 m² Qingdaon laitoksemme toimii ISO 9001 -laadunhallintajärjestelmän alla. Jokainen tuotantoerä on jäljitettävissä, dokumentoitu ja tarkastettu.',
  },
  {
    f: 'src/data/pages/fr/trust.yaml',
    find: "    - title: ''\n      description: Système de management de la qualité depuis 2012",
    rep: '    - title: ISO 9001\n      description: Système de management de la qualité depuis 2012',
  },
  {
    f: 'src/data/pages/fr/trust.yaml',
    find: "    - title: ''\n      description: Notre installation de 12 000 m² à Qingdao fonctionne sous un système de gestion de la qualité. Chaque lot de production est traçable, documenté et inspecté.",
    rep: '    - title: ISO 9001\n      description: Notre installation de 12 000 m² à Qingdao fonctionne sous un système de gestion de la qualité. Chaque lot de production est traçable, documenté et inspecté.',
  },
  {
    f: 'src/data/pages/it/about.yaml',
    find: '      amount: Duemilaquattrocento\n',
    rep: "      amount: '2.400+'\n",
  },
  {
    f: 'src/data/pages/it/about.yaml',
    find: '      amount: Quaranta\n',
    rep: "      amount: '40'\n",
  },
  {
    f: 'src/data/pages/it/about.yaml',
    find: '      amount: Sessanta\n',
    rep: "      amount: '60'\n",
  },
  {
    f: 'src/data/pages/it/about.yaml',
    find: '      amount: Ventiquattro\n',
    rep: "      amount: '24'\n",
  },
  {
    f: 'src/data/pages/it/afarer-story.yaml',
    find: '      amount: Cinquanta\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/it/afarer-story.yaml',
    find: '      amount: Duecento\n',
    rep: "      amount: '200+'\n",
  },
  {
    f: 'src/data/pages/it/afarer-story.yaml',
    find: '      amount: Quattordici\n',
    rep: "      amount: '14+'\n",
  },
  {
    f: 'src/data/pages/it/afarer-story.yaml',
    find: '        value: Duecento\n',
    rep: "        value: '200+'\n",
  },
  {
    f: 'src/data/pages/it/afarer-story.yaml',
    find: '        value: Quattordici\n',
    rep: "        value: '14+'\n",
  },
  {
    f: 'src/data/pages/it/brand-global-presence.yaml',
    find: '      amount: Cinquanta\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/it/community.yaml',
    find: '    - title: Quaranta\n',
    rep: "    - title: '40+'\n",
  },
  {
    f: 'src/data/pages/it/community.yaml',
    find: '    - title: Dodici\n',
    rep: "    - title: '12+'\n",
  },
  {
    f: 'src/data/pages/it/custom.yaml',
    find: '      highlight: Duecento\n',
    rep: "      highlight: '200+'\n",
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: "  - value: '15.000'\n",
    rep: "  - value: '15.000+'\n",
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: '  - value: Duecento\n',
    rep: "  - value: '200+'\n",
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: '  - value: Cinquanta\n',
    rep: "  - value: '50+'\n",
  },
  {
    f: 'src/data/pages/it/factory-capacity.yaml',
    find: '  - value: Dieci\n',
    rep: "  - value: '10+'\n",
  },
  {
    f: 'src/data/pages/it/factory-oem-capability.yaml',
    find: '  - value: Dieci\n',
    rep: "  - value: '10+'\n",
  },
  {
    f: 'src/data/pages/it/factory-oem-capability.yaml',
    find: '  - value: Cinquanta\n',
    rep: "  - value: '50+'\n",
  },
  {
    f: 'src/data/pages/it/factory-oem-capability.yaml',
    find: '  - value: Duecento\n',
    rep: "  - value: '200+'\n",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: '  engineers: Venticinque\n',
    rep: "  engineers: '25+'\n",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: '      count: Venticinque\n',
    rep: "      count: '25+'\n",
  },
  {
    f: 'src/data/pages/it/home.yaml',
    find: '    - metric: Dieci\n',
    rep: "    - metric: '10+'\n",
  },
  {
    f: 'src/data/pages/it/home.yaml',
    find: '    - metric: Cinquanta\n',
    rep: "    - metric: '50+'\n",
  },
  {
    f: 'src/data/pages/it/solutions-paddle-clubs.yaml',
    find: '    - metric: Cinquecento\n',
    rep: "    - metric: '500+'\n",
  },
  {
    f: 'src/data/pages/it/solutions-paddle-clubs.yaml',
    find: 'metric: 40%\n',
    rep: 'metric: 40%+\n',
  },
  {
    f: 'src/data/pages/it/solutions-paddle-clubs.yaml',
    find: 'metric: 5 anni\n',
    rep: 'metric: 5+ anni\n',
  },
  {
    f: 'src/data/pages/it/solutions-resorts-hotels.yaml',
    find: '    - metric: Cinquecento\n',
    rep: "    - metric: '500+'\n",
  },
  {
    f: 'src/data/pages/it/solutions.yaml',
    find: '      amount: Cento\n',
    rep: "      amount: '100+'\n",
  },
  {
    f: 'src/data/pages/it/solutions.yaml',
    find: '      amount: Cinquanta\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/it/solutions.yaml',
    find: "      amount: '15.000'\n",
    rep: "      amount: '15.000+'\n",
  },
  {
    f: 'src/data/pages/it/trust.yaml',
    find: '    - value: Duecento\n',
    rep: "    - value: '200+'\n",
  },
  {
    f: 'src/data/pages/it/trust.yaml',
    find: "    - value: '15.000'\n",
    rep: "    - value: '15.000+'\n",
  },
  {
    f: 'src/data/pages/it/trust.yaml',
    find: "    - title: ''\n      description: Sistema di gestione qualità dal 2012",
    rep: '    - title: ISO 9001\n      description: Sistema di gestione qualità dal 2012',
  },
  {
    f: 'src/data/pages/it/trust.yaml',
    find: "    - title: ''\n      description: Il nostro impianto di 12.000 m² a Qingdao opera sotto un sistema di gestione qualità ISO 9001. Ogni lotto di produzione è tracciabile, documentato e ispezionato.",
    rep: '    - title: ISO 9001\n      description: Il nostro impianto di 12.000 m² a Qingdao opera sotto un sistema di gestione qualità ISO 9001. Ogni lotto di produzione è tracciabile, documentato e ispezionato.',
  },
  {
    f: 'src/data/pages/ja/factory.yaml',
    find: '12,000m2の統合製造',
    rep: '12,000m²の統合製造',
  },
  {
    f: 'src/data/pages/ko/trust.yaml',
    find: '12,000m2 규모',
    rep: '12,000m² 규모',
  },
  {
    f: 'src/data/pages/nl/about.yaml',
    find: '      amount: Tweeduizend vierhonderd\n',
    rep: "      amount: '2.400+'\n",
  },
  {
    f: 'src/data/pages/nl/about.yaml',
    find: '      amount: Veertig\n',
    rep: "      amount: '40'\n",
  },
  {
    f: 'src/data/pages/nl/about.yaml',
    find: '      amount: Zestig\n',
    rep: "      amount: '60'\n",
  },
  {
    f: 'src/data/pages/nl/about.yaml',
    find: '      amount: Vierentwintig\n',
    rep: "      amount: '24'\n",
  },
  {
    f: 'src/data/pages/nl/afarer-story.yaml',
    find: '      amount: Vijftig\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/nl/afarer-story.yaml',
    find: '      amount: Tweehonderd\n',
    rep: "      amount: '200+'\n",
  },
  {
    f: 'src/data/pages/nl/afarer-story.yaml',
    find: '      amount: Veertien\n',
    rep: "      amount: '14+'\n",
  },
  {
    f: 'src/data/pages/nl/afarer-story.yaml',
    find: '        value: Tweehonderd\n',
    rep: "        value: '200+'\n",
  },
  {
    f: 'src/data/pages/nl/afarer-story.yaml',
    find: '        value: Veertien\n',
    rep: "        value: '14+'\n",
  },
  {
    f: 'src/data/pages/nl/brand-global-presence.yaml',
    find: '      amount: Vijftig\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/nl/community.yaml',
    find: '    - title: Veertig\n',
    rep: "    - title: '40+'\n",
  },
  {
    f: 'src/data/pages/nl/community.yaml',
    find: '    - title: Twaalf\n',
    rep: "    - title: '12+'\n",
  },
  {
    f: 'src/data/pages/nl/custom.yaml',
    find: '      highlight: Tweehonderd\n',
    rep: "      highlight: '200+'\n",
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: "  - value: '15.000'\n",
    rep: "  - value: '15.000+'\n",
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: '  - value: Tweehonderd\n',
    rep: "  - value: '200+'\n",
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: '  - value: Vijftig\n',
    rep: "  - value: '50+'\n",
  },
  {
    f: 'src/data/pages/nl/factory-capacity.yaml',
    find: '  - value: Tien\n',
    rep: "  - value: '10+'\n",
  },
  {
    f: 'src/data/pages/nl/factory-oem-capability.yaml',
    find: '  - value: Tien\n',
    rep: "  - value: '10+'\n",
  },
  {
    f: 'src/data/pages/nl/factory-oem-capability.yaml',
    find: '  - value: Vijftig\n',
    rep: "  - value: '50+'\n",
  },
  {
    f: 'src/data/pages/nl/factory-oem-capability.yaml',
    find: '  - value: Tweehonderd\n',
    rep: "  - value: '200+'\n",
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '  engineers: Vijfentwintig\n',
    rep: "  engineers: '25+'\n",
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '      count: Vijfentwintig\n',
    rep: "      count: '25+'\n",
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: 'subtitle: 12.000 m2 geïntegreerde',
    rep: 'subtitle: 12.000 m² geïntegreerde',
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '- value: 12.000 m2\n',
    rep: '- value: 12.000 m²\n',
  },
  {
    f: 'src/data/pages/nl/home.yaml',
    find: '    - metric: Tien\n',
    rep: "    - metric: '10+'\n",
  },
  {
    f: 'src/data/pages/nl/home.yaml',
    find: '    - metric: Vijftig\n',
    rep: "    - metric: '50+'\n",
  },
  {
    f: 'src/data/pages/nl/solutions-paddle-clubs.yaml',
    find: '    - metric: Vijfhonderd\n',
    rep: "    - metric: '500+'\n",
  },
  {
    f: 'src/data/pages/nl/solutions-paddle-clubs.yaml',
    find: 'metric: 40%\n',
    rep: 'metric: 40%+\n',
  },
  {
    f: 'src/data/pages/nl/solutions-paddle-clubs.yaml',
    find: 'metric: 5 jaar\n',
    rep: 'metric: 5+ jaar\n',
  },
  {
    f: 'src/data/pages/nl/solutions-resorts-hotels.yaml',
    find: '    - metric: Vijfhonderd\n',
    rep: "    - metric: '500+'\n",
  },
  {
    f: 'src/data/pages/nl/solutions.yaml',
    find: '      amount: Honderd\n',
    rep: "      amount: '100+'\n",
  },
  {
    f: 'src/data/pages/nl/solutions.yaml',
    find: '      amount: Vijftig\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/nl/solutions.yaml',
    find: "      amount: '15.000'\n",
    rep: "      amount: '15.000+'\n",
  },
  {
    f: 'src/data/pages/nl/trust.yaml',
    find: '    - value: Tweehonderd\n',
    rep: "    - value: '200+'\n",
  },
  {
    f: 'src/data/pages/nl/trust.yaml',
    find: "    - value: '15.000'\n",
    rep: "    - value: '15.000+'\n",
  },
  {
    f: 'src/data/pages/nl/trust.yaml',
    find: "    - title: ''\n      description: Kwaliteitsmanagementsysteem sinds 2012",
    rep: '    - title: ISO 9001\n      description: Kwaliteitsmanagementsysteem sinds 2012',
  },
  {
    f: 'src/data/pages/nl/trust.yaml',
    find: "    - title: ''\n      description: Onze 12.000 m² faciliteit in Qingdao werkt onder een kwaliteitsmanagementsysteem volgens ISO 9001. Elke productiebatch is traceerbaar, gedocumenteerd en geïnspecteerd.",
    rep: '    - title: ISO 9001\n      description: Onze 12.000 m² faciliteit in Qingdao werkt onder een kwaliteitsmanagementsysteem volgens ISO 9001. Elke productiebatch is traceerbaar, gedocumenteerd en geïnspecteerd.',
  },
  {
    f: 'src/data/pages/no/factory.yaml',
    find: '- value: 12 000 m2\n',
    rep: '- value: 12 000 m²\n',
  },
  {
    f: 'src/data/pages/no/trust.yaml',
    find: "    - title: ''\n      description: Kvalitetsstyringssystem siden 2012",
    rep: '    - title: ISO 9001\n      description: Kvalitetsstyringssystem siden 2012',
  },
  {
    f: 'src/data/pages/no/trust.yaml',
    find: "    - title: ''\n      description: Vårt 12.000 m² Qingdao-anlegg opererer under et kvalitetsstyringssystem i samsvar med ISO 9001. Hver produksjonsbatch er sporbar, dokumentert og inspisert.",
    rep: '    - title: ISO 9001\n      description: Vårt 12.000 m² Qingdao-anlegg opererer under et kvalitetsstyringssystem i samsvar med ISO 9001. Hver produksjonsbatch er sporbar, dokumentert og inspisert.',
  },
  {
    f: 'src/data/pages/pl/about.yaml',
    find: '      amount: Dwa tysiące czterysta\n',
    rep: "      amount: '2 400+'\n",
  },
  {
    f: 'src/data/pages/pl/about.yaml',
    find: '      amount: Czterdzieści\n',
    rep: "      amount: '40'\n",
  },
  {
    f: 'src/data/pages/pl/about.yaml',
    find: '      amount: Sześćdziesiąt\n',
    rep: "      amount: '60'\n",
  },
  {
    f: 'src/data/pages/pl/about.yaml',
    find: '      amount: Dwadzieścia cztery\n',
    rep: "      amount: '24'\n",
  },
  {
    f: 'src/data/pages/pl/afarer-story.yaml',
    find: '      amount: Pięćdziesiąt\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/pl/afarer-story.yaml',
    find: '      amount: Dwieście\n',
    rep: "      amount: '200+'\n",
  },
  {
    f: 'src/data/pages/pl/afarer-story.yaml',
    find: '      amount: Czternaście\n',
    rep: "      amount: '14+'\n",
  },
  {
    f: 'src/data/pages/pl/afarer-story.yaml',
    find: '        value: Dwieście\n',
    rep: "        value: '200+'\n",
  },
  {
    f: 'src/data/pages/pl/afarer-story.yaml',
    find: '        value: Czternaście\n',
    rep: "        value: '14+'\n",
  },
  {
    f: 'src/data/pages/pl/brand-global-presence.yaml',
    find: '      amount: Pięćdziesiąt\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/pl/community.yaml',
    find: '    - title: Czterdzieści\n',
    rep: "    - title: '40+'\n",
  },
  {
    f: 'src/data/pages/pl/community.yaml',
    find: '    - title: Dwanaście\n',
    rep: "    - title: '12+'\n",
  },
  {
    f: 'src/data/pages/pl/custom.yaml',
    find: '      highlight: Dwieście\n',
    rep: "      highlight: '200+'\n",
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: '  - value: 15 000\n',
    rep: '  - value: 15 000+\n',
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: '  - value: Dwieście\n',
    rep: "  - value: '200+'\n",
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: '  - value: Pięćdziesiąt\n',
    rep: "  - value: '50+'\n",
  },
  {
    f: 'src/data/pages/pl/factory-capacity.yaml',
    find: '  - value: Ten\n',
    rep: "  - value: '10+'\n",
  },
  {
    f: 'src/data/pages/pl/factory-oem-capability.yaml',
    find: '  - value: Ten\n',
    rep: "  - value: '10+'\n",
  },
  {
    f: 'src/data/pages/pl/factory-oem-capability.yaml',
    find: '  - value: Pięćdziesiąt\n',
    rep: "  - value: '50+'\n",
  },
  {
    f: 'src/data/pages/pl/factory-oem-capability.yaml',
    find: '  - value: Dwieście\n',
    rep: "  - value: '200+'\n",
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '  engineers: Dwadzieścia pięć\n',
    rep: "  engineers: '25+'\n",
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '      count: Dwadzieścia pięć\n',
    rep: "      count: '25+'\n",
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: 'subtitle: 12.000 m2 zintegrowanej',
    rep: 'subtitle: 12.000 m² zintegrowanej',
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '- value: 12.000 m2\n',
    rep: '- value: 12.000 m²\n',
  },
  {
    f: 'src/data/pages/pl/home.yaml',
    find: '    - metric: Ten\n',
    rep: "    - metric: '10+'\n",
  },
  {
    f: 'src/data/pages/pl/home.yaml',
    find: '    - metric: Pięćdziesiąt\n',
    rep: "    - metric: '50+'\n",
  },
  {
    f: 'src/data/pages/pl/solutions-paddle-clubs.yaml',
    find: '    - metric: Pięćset\n',
    rep: "    - metric: '500+'\n",
  },
  {
    f: 'src/data/pages/pl/solutions-paddle-clubs.yaml',
    find: 'metric: 40%\n',
    rep: 'metric: 40%+\n',
  },
  {
    f: 'src/data/pages/pl/solutions-paddle-clubs.yaml',
    find: 'metric: 5 lat\n',
    rep: 'metric: 5+ lat\n',
  },
  {
    f: 'src/data/pages/pl/solutions-resorts-hotels.yaml',
    find: '    - metric: Pięćset\n',
    rep: "    - metric: '500+'\n",
  },
  {
    f: 'src/data/pages/pl/solutions.yaml',
    find: '      amount: Sto\n',
    rep: "      amount: '100+'\n",
  },
  {
    f: 'src/data/pages/pl/solutions.yaml',
    find: '      amount: Pięćdziesiąt\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/pl/solutions.yaml',
    find: '      amount: 15 000\n',
    rep: '      amount: 15 000+\n',
  },
  {
    f: 'src/data/pages/pl/trust.yaml',
    find: '    - value: Dwieście\n',
    rep: "    - value: '200+'\n",
  },
  {
    f: 'src/data/pages/pl/trust.yaml',
    find: '    - value: 15 000\n',
    rep: '    - value: 15 000+\n',
  },
  {
    f: 'src/data/pages/pt/about.yaml',
    find: '      amount: Dois mil e quatrocentos\n',
    rep: "      amount: '2.400+'\n",
  },
  {
    f: 'src/data/pages/pt/about.yaml',
    find: '      amount: Quarenta\n',
    rep: "      amount: '40'\n",
  },
  {
    f: 'src/data/pages/pt/about.yaml',
    find: '      amount: Sessenta\n',
    rep: "      amount: '60'\n",
  },
  {
    f: 'src/data/pages/pt/about.yaml',
    find: '      amount: Vinte e Quatro\n',
    rep: "      amount: '24'\n",
  },
  {
    f: 'src/data/pages/pt/afarer-story.yaml',
    find: '      amount: Cinquenta\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/pt/afarer-story.yaml',
    find: '      amount: Duzentos\n',
    rep: "      amount: '200+'\n",
  },
  {
    f: 'src/data/pages/pt/afarer-story.yaml',
    find: '      amount: Quatorze\n',
    rep: "      amount: '14+'\n",
  },
  {
    f: 'src/data/pages/pt/afarer-story.yaml',
    find: '        value: Duzentos\n',
    rep: "        value: '200+'\n",
  },
  {
    f: 'src/data/pages/pt/afarer-story.yaml',
    find: '        value: Quatorze\n',
    rep: "        value: '14+'\n",
  },
  {
    f: 'src/data/pages/pt/brand-global-presence.yaml',
    find: '      amount: Cinquenta\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/pt/community.yaml',
    find: '    - title: Quarenta\n',
    rep: "    - title: '40+'\n",
  },
  {
    f: 'src/data/pages/pt/community.yaml',
    find: '    - title: Doze\n',
    rep: "    - title: '12+'\n",
  },
  {
    f: 'src/data/pages/pt/custom.yaml',
    find: '      highlight: Duzentos\n',
    rep: "      highlight: '200+'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: "  - value: '15.000'\n",
    rep: "  - value: '15.000+'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '  - value: Duzentos\n',
    rep: "  - value: '200+'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '  - value: Cinquenta\n',
    rep: "  - value: '50+'\n",
  },
  {
    f: 'src/data/pages/pt/factory-capacity.yaml',
    find: '  - value: Dez\n',
    rep: "  - value: '10+'\n",
  },
  {
    f: 'src/data/pages/pt/factory-oem-capability.yaml',
    find: '  - value: Dez\n',
    rep: "  - value: '10+'\n",
  },
  {
    f: 'src/data/pages/pt/factory-oem-capability.yaml',
    find: '  - value: Cinquenta\n',
    rep: "  - value: '50+'\n",
  },
  {
    f: 'src/data/pages/pt/factory-oem-capability.yaml',
    find: '  - value: Duzentos\n',
    rep: "  - value: '200+'\n",
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '  engineers: Vinte e cinco\n',
    rep: "  engineers: '25+'\n",
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '      count: Vinte e cinco\n',
    rep: "      count: '25+'\n",
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: 'subtitle: 12.000 m2 de fabricação',
    rep: 'subtitle: 12.000 m² de fabricação',
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '- value: 12.000 m2\n',
    rep: '- value: 12.000 m²\n',
  },
  {
    f: 'src/data/pages/pt/home.yaml',
    find: '    - metric: Dez\n',
    rep: "    - metric: '10+'\n",
  },
  {
    f: 'src/data/pages/pt/home.yaml',
    find: '    - metric: Cinquenta\n',
    rep: "    - metric: '50+'\n",
  },
  {
    f: 'src/data/pages/pt/solutions-paddle-clubs.yaml',
    find: '    - metric: Quinhentos\n',
    rep: "    - metric: '500+'\n",
  },
  {
    f: 'src/data/pages/pt/solutions-paddle-clubs.yaml',
    find: 'metric: 40%\n',
    rep: 'metric: 40%+\n',
  },
  {
    f: 'src/data/pages/pt/solutions-paddle-clubs.yaml',
    find: 'metric: 5 anos\n',
    rep: 'metric: 5+ anos\n',
  },
  {
    f: 'src/data/pages/pt/solutions-resorts-hotels.yaml',
    find: '    - metric: Quinhentos\n',
    rep: "    - metric: '500+'\n",
  },
  {
    f: 'src/data/pages/pt/solutions.yaml',
    find: '      amount: Cem\n',
    rep: "      amount: '100+'\n",
  },
  {
    f: 'src/data/pages/pt/solutions.yaml',
    find: '      amount: Cinquenta\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/pt/solutions.yaml',
    find: "      amount: '15.000'\n",
    rep: "      amount: '15.000+'\n",
  },
  {
    f: 'src/data/pages/pt/trust.yaml',
    find: '    - value: Duzentos\n',
    rep: "    - value: '200+'\n",
  },
  {
    f: 'src/data/pages/pt/trust.yaml',
    find: "    - value: '15.000'\n",
    rep: "    - value: '15.000+'\n",
  },
  {
    f: 'src/data/pages/pt/trust.yaml',
    find: "    - title: ''\n      description: Sistema de gestão da qualidade desde 2012",
    rep: '    - title: ISO 9001\n      description: Sistema de gestão da qualidade desde 2012',
  },
  {
    f: 'src/data/pages/pt/trust.yaml',
    find: "    - title: ''\n      description: Nossa instalação de 12.000 m² em Qingdao opera sob um sistema de gestão da qualidade ISO 9001. Cada lote de produção é rastreável, documentado e inspecionado.",
    rep: '    - title: ISO 9001\n      description: Nossa instalação de 12.000 m² em Qingdao opera sob um sistema de gestão da qualidade ISO 9001. Cada lote de produção é rastreável, documentado e inspecionado.',
  },
  {
    f: 'src/data/pages/ro/factory.yaml',
    find: "- value: '12.000'\n",
    rep: "- value: '12.000 m²'\n",
  },
  {
    f: 'src/data/pages/ro/trust.yaml',
    find: '    - title: BSCI\n      description: Unitatea noastră de 12.000 m² din Qingdao funcționează sub un sistem de management al calității ISO 9001. Fiecare lot de producție este trasabil, documentat și inspectat.',
    rep: '    - title: ISO 9001\n      description: Unitatea noastră de 12.000 m² din Qingdao funcționează sub un sistem de management al calității ISO 9001. Fiecare lot de producție este trasabil, documentat și inspectat.',
  },
  {
    f: 'src/data/pages/ru/about.yaml',
    find: '      amount: Две тысячи четыреста\n',
    rep: "      amount: '2 400+'\n",
  },
  {
    f: 'src/data/pages/ru/about.yaml',
    find: '      amount: Сорок\n',
    rep: "      amount: '40'\n",
  },
  {
    f: 'src/data/pages/ru/about.yaml',
    find: '      amount: Шестьдесят\n',
    rep: "      amount: '60'\n",
  },
  {
    f: 'src/data/pages/ru/about.yaml',
    find: '      amount: Двадцать четыре\n',
    rep: "      amount: '24'\n",
  },
  {
    f: 'src/data/pages/ru/afarer-story.yaml',
    find: '      amount: Пятьдесят\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/ru/afarer-story.yaml',
    find: '      amount: Двести\n',
    rep: "      amount: '200+'\n",
  },
  {
    f: 'src/data/pages/ru/afarer-story.yaml',
    find: '      amount: Четырнадцать\n',
    rep: "      amount: '14+'\n",
  },
  {
    f: 'src/data/pages/ru/afarer-story.yaml',
    find: '        value: Двести\n',
    rep: "        value: '200+'\n",
  },
  {
    f: 'src/data/pages/ru/afarer-story.yaml',
    find: '        value: Четырнадцать\n',
    rep: "        value: '14+'\n",
  },
  {
    f: 'src/data/pages/ru/afarer-story.yaml',
    find: '        value: 15 000\n',
    rep: '        value: 15 000+\n',
  },
  {
    f: 'src/data/pages/ru/brand-global-presence.yaml',
    find: '      amount: Пятьдесят\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/ru/community.yaml',
    find: '    - title: Сорок\n',
    rep: "    - title: '40+'\n",
  },
  {
    f: 'src/data/pages/ru/community.yaml',
    find: '    - title: Двенадцать\n',
    rep: "    - title: '12+'\n",
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: '  - value: 15 000\n',
    rep: '  - value: 15 000+\n',
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: '  - value: Двести\n',
    rep: "  - value: '200+'\n",
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: '  - value: Пятьдесят\n',
    rep: "  - value: '50+'\n",
  },
  {
    f: 'src/data/pages/ru/factory-capacity.yaml',
    find: '  - value: Десять\n',
    rep: "  - value: '10+'\n",
  },
  {
    f: 'src/data/pages/ru/factory-oem-capability.yaml',
    find: '  - value: Десять\n',
    rep: "  - value: '10+'\n",
  },
  {
    f: 'src/data/pages/ru/factory-oem-capability.yaml',
    find: '  - value: Пятьдесят\n',
    rep: "  - value: '50+'\n",
  },
  {
    f: 'src/data/pages/ru/factory-oem-capability.yaml',
    find: '  - value: Двести\n',
    rep: "  - value: '200+'\n",
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '  engineers: Двадцать пять\n',
    rep: "  engineers: '25+'\n",
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '      count: Двадцать пять\n',
    rep: "      count: '25+'\n",
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: 'subtitle: 12 000 м2',
    rep: 'subtitle: 12 000 м²',
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '- value: 12 000 м2\n',
    rep: '- value: 12 000 м²\n',
  },
  {
    f: 'src/data/pages/ru/home.yaml',
    find: '    - metric: Десять\n',
    rep: "    - metric: '10+'\n",
  },
  {
    f: 'src/data/pages/ru/home.yaml',
    find: '    - metric: Пятьдесят\n',
    rep: "    - metric: '50+'\n",
  },
  {
    f: 'src/data/pages/ru/solutions-paddle-clubs.yaml',
    find: '    - metric: Пятьсот\n',
    rep: "    - metric: '500+'\n",
  },
  {
    f: 'src/data/pages/ru/solutions-paddle-clubs.yaml',
    find: 'metric: 40%\n',
    rep: 'metric: 40%+\n',
  },
  {
    f: 'src/data/pages/ru/solutions-paddle-clubs.yaml',
    find: 'metric: 5 лет\n',
    rep: 'metric: 5+ лет\n',
  },
  {
    f: 'src/data/pages/ru/solutions-resorts-hotels.yaml',
    find: '    - metric: Пятьсот\n',
    rep: "    - metric: '500+'\n",
  },
  {
    f: 'src/data/pages/ru/solutions.yaml',
    find: '      amount: Сто\n',
    rep: "      amount: '100+'\n",
  },
  {
    f: 'src/data/pages/ru/solutions.yaml',
    find: '      amount: Пятьдесят\n',
    rep: "      amount: '50+'\n",
  },
  {
    f: 'src/data/pages/ru/solutions.yaml',
    find: '      amount: 15 000\n',
    rep: '      amount: 15 000+\n',
  },
  {
    f: 'src/data/pages/ru/trust.yaml',
    find: '    - value: Двести\n',
    rep: "    - value: '200+'\n",
  },
  {
    f: 'src/data/pages/ru/trust.yaml',
    find: '    - value: 15 000\n',
    rep: '    - value: 15 000+\n',
  },
  {
    f: 'src/data/pages/ru/trust.yaml',
    find: "    - title: ''\n      description: Система менеджмента качества с 2012 года",
    rep: '    - title: ISO 9001\n      description: Система менеджмента качества с 2012 года',
  },
  {
    f: 'src/data/pages/ru/trust.yaml',
    find: "    - title: ''\n      description: Все SUP, байдарки, тузики и SUP afarer соответствуют европейскому стандарту безопасности CE для прогулочных плавсредств. Каждое изделие проходит испытания давлением, плавучестью и нагрузкой перед отправкой с фабрики.",
    rep: '    - title: ISO 9001\n      description: Наше производственное предприятие площадью 12 000 м² в Циндао работает по системе менеджмента качества ISO 9001. Каждая партия продукции отслеживается, документируется и проходит проверку.',
  },
  {
    f: 'src/data/pages/sv/factory.yaml',
    find: '- value: 12 000 m2\n',
    rep: '- value: 12 000 m²\n',
  },
  {
    f: 'src/data/pages/sv/hull-engineering.yaml',
    find: '87 kN/m2</span>',
    rep: '87 kN/m²</span>',
  },
  {
    f: 'src/data/pages/th/factory.yaml',
    find: '- value: 12,000\n',
    rep: '- value: 12,000 ตร.ม.\n',
  },
  {
    f: 'src/data/pages/th/trust.yaml',
    find: '    - title: BSCI\n      description: โรงงานของเราขนาด 12,000 ตร.ม. ในชิงเต่าดำเนินงานภายใต้ระบบการจัดการคุณภาพ ISO 9001 ทุกชุดการผลิตสามารถตรวจสอบย้อนกลับได้ มีเอกสาร และได้รับการตรวจสอบ',
    rep: '    - title: ISO 9001\n      description: โรงงานของเราขนาด 12,000 ตร.ม. ในชิงเต่าดำเนินงานภายใต้ระบบการจัดการคุณภาพ ISO 9001 ทุกชุดการผลิตสามารถตรวจสอบย้อนกลับได้ มีเอกสาร และได้รับการตรวจสอบ',
  },
  {
    f: 'src/data/pages/tr/factory.yaml',
    find: 'subtitle: 12.000 m2 entegre',
    rep: 'subtitle: 12.000 m² entegre',
  },
  {
    f: 'src/data/pages/tr/factory.yaml',
    find: '- value: 12.000 m2\n',
    rep: '- value: 12.000 m²\n',
  },
  {
    f: 'src/data/pages/de/home.yaml',
    find: '    - number: Eins\n',
    rep: "    - number: '01'\n",
  },
  {
    f: 'src/data/pages/de/home.yaml',
    find: '    - number: Zwei\n',
    rep: "    - number: '02'\n",
  },
  {
    f: 'src/data/pages/de/home.yaml',
    find: '    - number: Drei\n',
    rep: "    - number: '03'\n",
  },
  {
    f: 'src/data/pages/de/home.yaml',
    find: '    - number: Vier\n',
    rep: "    - number: '04'\n",
  },
  {
    f: 'src/data/pages/de/home.yaml',
    find: '    - number: Fünf\n',
    rep: "    - number: '05'\n",
  },
  {
    f: 'src/data/pages/es/home.yaml',
    find: '    - number: Uno\n',
    rep: "    - number: '01'\n",
  },
  {
    f: 'src/data/pages/es/home.yaml',
    find: '    - number: Dos\n',
    rep: "    - number: '02'\n",
  },
  {
    f: 'src/data/pages/es/home.yaml',
    find: '    - number: Tres\n',
    rep: "    - number: '03'\n",
  },
  {
    f: 'src/data/pages/es/home.yaml',
    find: '    - number: Cuatro\n',
    rep: "    - number: '04'\n",
  },
  {
    f: 'src/data/pages/es/home.yaml',
    find: '    - number: Cinco\n',
    rep: "    - number: '05'\n",
  },
  {
    f: 'src/data/pages/it/home.yaml',
    find: '    - number: Due\n',
    rep: "    - number: '02'\n",
  },
  {
    f: 'src/data/pages/it/home.yaml',
    find: '    - number: Tre\n',
    rep: "    - number: '03'\n",
  },
  {
    f: 'src/data/pages/it/home.yaml',
    find: '    - number: Quattro\n',
    rep: "    - number: '04'\n",
  },
  {
    f: 'src/data/pages/it/home.yaml',
    find: '    - number: Cinque\n',
    rep: "    - number: '05'\n",
  },
  {
    f: 'src/data/pages/nl/home.yaml',
    find: '    - number: Een\n',
    rep: "    - number: '01'\n",
  },
  {
    f: 'src/data/pages/nl/home.yaml',
    find: '    - number: Twee\n',
    rep: "    - number: '02'\n",
  },
  {
    f: 'src/data/pages/nl/home.yaml',
    find: '    - number: Drie\n',
    rep: "    - number: '03'\n",
  },
  {
    f: 'src/data/pages/nl/home.yaml',
    find: '    - number: Vier\n',
    rep: "    - number: '04'\n",
  },
  {
    f: 'src/data/pages/nl/home.yaml',
    find: '    - number: Vijf\n',
    rep: "    - number: '05'\n",
  },
  {
    f: 'src/data/pages/pl/home.yaml',
    find: '    - number: Jeden\n',
    rep: "    - number: '01'\n",
  },
  {
    f: 'src/data/pages/pl/home.yaml',
    find: '    - number: Dwa\n',
    rep: "    - number: '02'\n",
  },
  {
    f: 'src/data/pages/pl/home.yaml',
    find: '    - number: Trzy\n',
    rep: "    - number: '03'\n",
  },
  {
    f: 'src/data/pages/pl/home.yaml',
    find: '    - number: Cztery\n',
    rep: "    - number: '04'\n",
  },
  {
    f: 'src/data/pages/pl/home.yaml',
    find: '    - number: Pięć\n',
    rep: "    - number: '05'\n",
  },
  {
    f: 'src/data/pages/pt/home.yaml',
    find: '    - number: Um\n',
    rep: "    - number: '01'\n",
  },
  {
    f: 'src/data/pages/pt/home.yaml',
    find: '    - number: Dois\n',
    rep: "    - number: '02'\n",
  },
  {
    f: 'src/data/pages/pt/home.yaml',
    find: '    - number: Três\n',
    rep: "    - number: '03'\n",
  },
  {
    f: 'src/data/pages/pt/home.yaml',
    find: '    - number: Quatro\n',
    rep: "    - number: '04'\n",
  },
  {
    f: 'src/data/pages/pt/home.yaml',
    find: '    - number: Cinco\n',
    rep: "    - number: '05'\n",
  },
  {
    f: 'src/data/pages/ru/home.yaml',
    find: '    - number: Один\n',
    rep: "    - number: '01'\n",
  },
  {
    f: 'src/data/pages/ru/home.yaml',
    find: '    - number: Два\n',
    rep: "    - number: '02'\n",
  },
  {
    f: 'src/data/pages/ru/home.yaml',
    find: '    - number: Три\n',
    rep: "    - number: '03'\n",
  },
  {
    f: 'src/data/pages/ru/home.yaml',
    find: '    - number: Четыре\n',
    rep: "    - number: '04'\n",
  },
  {
    f: 'src/data/pages/ru/home.yaml',
    find: '    - number: Пять\n',
    rep: "    - number: '05'\n",
  },
  {
    f: 'src/data/pages/de/quality.yaml',
    find: '  - value: Acht\n',
    rep: "  - value: '8'\n",
  },
  {
    f: 'src/data/pages/es/quality.yaml',
    find: '  - value: Ocho\n',
    rep: "  - value: '8'\n",
  },
  {
    f: 'src/data/pages/it/quality.yaml',
    find: '  - value: Otto\n',
    rep: "  - value: '8'\n",
  },
  {
    f: 'src/data/pages/nl/quality.yaml',
    find: '  - value: Acht\n',
    rep: "  - value: '8'\n",
  },
  {
    f: 'src/data/pages/pl/quality.yaml',
    find: '  - value: Osiem\n',
    rep: "  - value: '8'\n",
  },
  {
    f: 'src/data/pages/pt/quality.yaml',
    find: '  - value: Oito\n',
    rep: "  - value: '8'\n",
  },
  {
    f: 'src/data/pages/ru/quality.yaml',
    find: '  - value: Восемь\n',
    rep: "  - value: '8'\n",
  },
  {
    f: 'src/data/pages/de/randdcenter.yaml',
    find: '  - value: Vierzehn\n',
    rep: "  - value: '14'\n",
  },
  {
    f: 'src/data/pages/de/randdcenter.yaml',
    find: '  - value: Acht\n',
    rep: "  - value: '8'\n",
  },
  {
    f: 'src/data/pages/de/randdcenter.yaml',
    find: '  - value: Sechs\n',
    rep: "  - value: '6'\n",
  },
  {
    f: 'src/data/pages/es/randdcenter.yaml',
    find: '  - value: Catorce\n',
    rep: "  - value: '14'\n",
  },
  {
    f: 'src/data/pages/es/randdcenter.yaml',
    find: '  - value: Ocho\n',
    rep: "  - value: '8'\n",
  },
  {
    f: 'src/data/pages/es/randdcenter.yaml',
    find: '  - value: Seis\n',
    rep: "  - value: '6'\n",
  },
  {
    f: 'src/data/pages/it/randdcenter.yaml',
    find: '  - value: Quattordici\n',
    rep: "  - value: '14'\n",
  },
  {
    f: 'src/data/pages/it/randdcenter.yaml',
    find: '  - value: Otto\n',
    rep: "  - value: '8'\n",
  },
  {
    f: 'src/data/pages/it/randdcenter.yaml',
    find: '  - value: Sei\n',
    rep: "  - value: '6'\n",
  },
  {
    f: 'src/data/pages/nl/randdcenter.yaml',
    find: '  - value: Veertien\n',
    rep: "  - value: '14'\n",
  },
  {
    f: 'src/data/pages/nl/randdcenter.yaml',
    find: '  - value: Acht\n',
    rep: "  - value: '8'\n",
  },
  {
    f: 'src/data/pages/nl/randdcenter.yaml',
    find: '  - value: Zes\n',
    rep: "  - value: '6'\n",
  },
  {
    f: 'src/data/pages/pl/randdcenter.yaml',
    find: '  - value: Czternaście\n',
    rep: "  - value: '14'\n",
  },
  {
    f: 'src/data/pages/pl/randdcenter.yaml',
    find: '  - value: Osiem\n',
    rep: "  - value: '8'\n",
  },
  {
    f: 'src/data/pages/pl/randdcenter.yaml',
    find: '  - value: Sześć\n',
    rep: "  - value: '6'\n",
  },
  {
    f: 'src/data/pages/pt/randdcenter.yaml',
    find: '  - value: Quatorze\n',
    rep: "  - value: '14'\n",
  },
  {
    f: 'src/data/pages/pt/randdcenter.yaml',
    find: '  - value: Oito\n',
    rep: "  - value: '8'\n",
  },
  {
    f: 'src/data/pages/pt/randdcenter.yaml',
    find: '  - value: Seis\n',
    rep: "  - value: '6'\n",
  },
  {
    f: 'src/data/pages/ru/randdcenter.yaml',
    find: '  - value: Четырнадцать\n',
    rep: "  - value: '14'\n",
  },
  {
    f: 'src/data/pages/ru/randdcenter.yaml',
    find: '  - value: Восемь\n',
    rep: "  - value: '8'\n",
  },
  {
    f: 'src/data/pages/ru/randdcenter.yaml',
    find: '  - value: Шесть\n',
    rep: "  - value: '6'\n",
  },
  {
    f: 'src/data/pages/de/solutions-resorts-hotels.yaml',
    find: '      value: 40%\n',
    rep: '      value: +40%\n',
  },
  {
    f: 'src/data/pages/es/solutions-resorts-hotels.yaml',
    find: '      value: 40%\n',
    rep: '      value: +40%\n',
  },
  {
    f: 'src/data/pages/it/solutions-resorts-hotels.yaml',
    find: '      value: 40%\n',
    rep: '      value: +40%\n',
  },
  {
    f: 'src/data/pages/nl/solutions-resorts-hotels.yaml',
    find: '      value: 40%\n',
    rep: '      value: +40%\n',
  },
  {
    f: 'src/data/pages/pl/solutions-resorts-hotels.yaml',
    find: '      value: 40%\n',
    rep: '      value: +40%\n',
  },
  {
    f: 'src/data/pages/pt/solutions-resorts-hotels.yaml',
    find: '      value: 40%\n',
    rep: '      value: +40%\n',
  },
  {
    f: 'src/data/pages/ru/solutions-resorts-hotels.yaml',
    find: '      value: 40%\n',
    rep: '      value: +40%\n',
  },
  {
    f: 'src/data/pages/de/custom.yaml',
    find: '    - num: Eins\n',
    rep: "    - num: '01'\n",
  },
  {
    f: 'src/data/pages/de/custom.yaml',
    find: '    - num: Zwei\n',
    rep: "    - num: '02'\n",
  },
  {
    f: 'src/data/pages/de/custom.yaml',
    find: '    - num: Drei\n',
    rep: "    - num: '03'\n",
  },
  {
    f: 'src/data/pages/de/custom.yaml',
    find: '    - num: Vier\n',
    rep: "    - num: '04'\n",
  },
  {
    f: 'src/data/pages/es/custom.yaml',
    find: '    - num: Uno\n',
    rep: "    - num: '01'\n",
  },
  {
    f: 'src/data/pages/es/custom.yaml',
    find: '    - num: Dos\n',
    rep: "    - num: '02'\n",
  },
  {
    f: 'src/data/pages/es/custom.yaml',
    find: '    - num: Tres\n',
    rep: "    - num: '03'\n",
  },
  {
    f: 'src/data/pages/es/custom.yaml',
    find: '    - num: Cuatro\n',
    rep: "    - num: '04'\n",
  },
  {
    f: 'src/data/pages/it/custom.yaml',
    find: '    - num: Due\n',
    rep: "    - num: '02'\n",
  },
  {
    f: 'src/data/pages/it/custom.yaml',
    find: '    - num: Tre\n',
    rep: "    - num: '03'\n",
  },
  {
    f: 'src/data/pages/it/custom.yaml',
    find: '    - num: Quattro\n',
    rep: "    - num: '04'\n",
  },
  {
    f: 'src/data/pages/nl/custom.yaml',
    find: '    - num: Een\n',
    rep: "    - num: '01'\n",
  },
  {
    f: 'src/data/pages/nl/custom.yaml',
    find: '    - num: Twee\n',
    rep: "    - num: '02'\n",
  },
  {
    f: 'src/data/pages/nl/custom.yaml',
    find: '    - num: Drie\n',
    rep: "    - num: '03'\n",
  },
  {
    f: 'src/data/pages/nl/custom.yaml',
    find: '    - num: Vier\n',
    rep: "    - num: '04'\n",
  },
  {
    f: 'src/data/pages/pl/custom.yaml',
    find: '    - num: Jeden\n',
    rep: "    - num: '01'\n",
  },
  {
    f: 'src/data/pages/pl/custom.yaml',
    find: '    - num: Dwa\n',
    rep: "    - num: '02'\n",
  },
  {
    f: 'src/data/pages/pl/custom.yaml',
    find: '    - num: Trzy\n',
    rep: "    - num: '03'\n",
  },
  {
    f: 'src/data/pages/pl/custom.yaml',
    find: '    - num: Cztery\n',
    rep: "    - num: '04'\n",
  },
  {
    f: 'src/data/pages/pt/custom.yaml',
    find: '    - num: Um\n',
    rep: "    - num: '01'\n",
  },
  {
    f: 'src/data/pages/pt/custom.yaml',
    find: '    - num: Dois\n',
    rep: "    - num: '02'\n",
  },
  {
    f: 'src/data/pages/pt/custom.yaml',
    find: '    - num: Três\n',
    rep: "    - num: '03'\n",
  },
  {
    f: 'src/data/pages/pt/custom.yaml',
    find: '    - num: Quatro\n',
    rep: "    - num: '04'\n",
  },
  {
    f: 'src/data/pages/ru/custom.yaml',
    find: '    - num: Один\n',
    rep: "    - num: '01'\n",
  },
  {
    f: 'src/data/pages/ru/custom.yaml',
    find: '    - num: Два\n',
    rep: "    - num: '02'\n",
  },
  {
    f: 'src/data/pages/ru/custom.yaml',
    find: '    - num: Три\n',
    rep: "    - num: '03'\n",
  },
  {
    f: 'src/data/pages/ru/custom.yaml',
    find: '    - num: Четыре\n',
    rep: "    - num: '04'\n",
  },
  {
    f: 'src/data/pages/de/factory-process.yaml',
    find: '  - step: Eins\n',
    rep: "  - step: '01'\n",
  },
  {
    f: 'src/data/pages/de/factory-process.yaml',
    find: '  - step: Zwei\n',
    rep: "  - step: '02'\n",
  },
  {
    f: 'src/data/pages/de/factory-process.yaml',
    find: '  - step: Drei\n',
    rep: "  - step: '03'\n",
  },
  {
    f: 'src/data/pages/de/factory-process.yaml',
    find: '  - step: Vier\n',
    rep: "  - step: '04'\n",
  },
  {
    f: 'src/data/pages/de/factory-process.yaml',
    find: '  - step: Fünf\n',
    rep: "  - step: '05'\n",
  },
  {
    f: 'src/data/pages/de/factory-process.yaml',
    find: '  - step: Sechs\n',
    rep: "  - step: '06'\n",
  },
  {
    f: 'src/data/pages/de/factory-process.yaml',
    find: '  - step: Sieben\n',
    rep: "  - step: '07'\n",
  },
  {
    f: 'src/data/pages/de/factory-process.yaml',
    find: '  - step: Acht\n',
    rep: "  - step: '08'\n",
  },
  {
    f: 'src/data/pages/es/factory-process.yaml',
    find: '  - step: Uno\n',
    rep: "  - step: '01'\n",
  },
  {
    f: 'src/data/pages/es/factory-process.yaml',
    find: '  - step: Dos\n',
    rep: "  - step: '02'\n",
  },
  {
    f: 'src/data/pages/es/factory-process.yaml',
    find: '  - step: Tres\n',
    rep: "  - step: '03'\n",
  },
  {
    f: 'src/data/pages/es/factory-process.yaml',
    find: '  - step: Cuatro\n',
    rep: "  - step: '04'\n",
  },
  {
    f: 'src/data/pages/es/factory-process.yaml',
    find: '  - step: Cinco\n',
    rep: "  - step: '05'\n",
  },
  {
    f: 'src/data/pages/es/factory-process.yaml',
    find: '  - step: Seis\n',
    rep: "  - step: '06'\n",
  },
  {
    f: 'src/data/pages/es/factory-process.yaml',
    find: '  - step: Siete\n',
    rep: "  - step: '07'\n",
  },
  {
    f: 'src/data/pages/es/factory-process.yaml',
    find: '  - step: Ocho\n',
    rep: "  - step: '08'\n",
  },
  {
    f: 'src/data/pages/it/factory-process.yaml',
    find: '  - step: Due\n',
    rep: "  - step: '02'\n",
  },
  {
    f: 'src/data/pages/it/factory-process.yaml',
    find: '  - step: Tre\n',
    rep: "  - step: '03'\n",
  },
  {
    f: 'src/data/pages/it/factory-process.yaml',
    find: '  - step: Quattro\n',
    rep: "  - step: '04'\n",
  },
  {
    f: 'src/data/pages/it/factory-process.yaml',
    find: '  - step: Cinque\n',
    rep: "  - step: '05'\n",
  },
  {
    f: 'src/data/pages/it/factory-process.yaml',
    find: '  - step: Sei\n',
    rep: "  - step: '06'\n",
  },
  {
    f: 'src/data/pages/it/factory-process.yaml',
    find: '  - step: Sette\n',
    rep: "  - step: '07'\n",
  },
  {
    f: 'src/data/pages/it/factory-process.yaml',
    find: '  - step: Otto\n',
    rep: "  - step: '08'\n",
  },
  {
    f: 'src/data/pages/nl/factory-process.yaml',
    find: '  - step: Een\n',
    rep: "  - step: '01'\n",
  },
  {
    f: 'src/data/pages/nl/factory-process.yaml',
    find: '  - step: Twee\n',
    rep: "  - step: '02'\n",
  },
  {
    f: 'src/data/pages/nl/factory-process.yaml',
    find: '  - step: Drie\n',
    rep: "  - step: '03'\n",
  },
  {
    f: 'src/data/pages/nl/factory-process.yaml',
    find: '  - step: Vier\n',
    rep: "  - step: '04'\n",
  },
  {
    f: 'src/data/pages/nl/factory-process.yaml',
    find: '  - step: Vijf\n',
    rep: "  - step: '05'\n",
  },
  {
    f: 'src/data/pages/nl/factory-process.yaml',
    find: '  - step: Zes\n',
    rep: "  - step: '06'\n",
  },
  {
    f: 'src/data/pages/nl/factory-process.yaml',
    find: '  - step: Zeven\n',
    rep: "  - step: '07'\n",
  },
  {
    f: 'src/data/pages/nl/factory-process.yaml',
    find: '  - step: Acht\n',
    rep: "  - step: '08'\n",
  },
  {
    f: 'src/data/pages/pl/factory-process.yaml',
    find: '  - step: Jeden\n',
    rep: "  - step: '01'\n",
  },
  {
    f: 'src/data/pages/pl/factory-process.yaml',
    find: '  - step: Dwa\n',
    rep: "  - step: '02'\n",
  },
  {
    f: 'src/data/pages/pl/factory-process.yaml',
    find: '  - step: Trzy\n',
    rep: "  - step: '03'\n",
  },
  {
    f: 'src/data/pages/pl/factory-process.yaml',
    find: '  - step: Cztery\n',
    rep: "  - step: '04'\n",
  },
  {
    f: 'src/data/pages/pl/factory-process.yaml',
    find: '  - step: Pięć\n',
    rep: "  - step: '05'\n",
  },
  {
    f: 'src/data/pages/pl/factory-process.yaml',
    find: '  - step: Sześć\n',
    rep: "  - step: '06'\n",
  },
  {
    f: 'src/data/pages/pl/factory-process.yaml',
    find: '  - step: Siedem\n',
    rep: "  - step: '07'\n",
  },
  {
    f: 'src/data/pages/pl/factory-process.yaml',
    find: '  - step: Osiem\n',
    rep: "  - step: '08'\n",
  },
  {
    f: 'src/data/pages/pt/factory-process.yaml',
    find: '  - step: Um\n',
    rep: "  - step: '01'\n",
  },
  {
    f: 'src/data/pages/pt/factory-process.yaml',
    find: '  - step: Dois\n',
    rep: "  - step: '02'\n",
  },
  {
    f: 'src/data/pages/pt/factory-process.yaml',
    find: '  - step: Três\n',
    rep: "  - step: '03'\n",
  },
  {
    f: 'src/data/pages/pt/factory-process.yaml',
    find: '  - step: Quatro\n',
    rep: "  - step: '04'\n",
  },
  {
    f: 'src/data/pages/pt/factory-process.yaml',
    find: '  - step: Cinco\n',
    rep: "  - step: '05'\n",
  },
  {
    f: 'src/data/pages/pt/factory-process.yaml',
    find: '  - step: Seis\n',
    rep: "  - step: '06'\n",
  },
  {
    f: 'src/data/pages/pt/factory-process.yaml',
    find: '  - step: Sete\n',
    rep: "  - step: '07'\n",
  },
  {
    f: 'src/data/pages/pt/factory-process.yaml',
    find: '  - step: Oito\n',
    rep: "  - step: '08'\n",
  },
  {
    f: 'src/data/pages/ru/factory-process.yaml',
    find: '  - step: Один\n',
    rep: "  - step: '01'\n",
  },
  {
    f: 'src/data/pages/ru/factory-process.yaml',
    find: '  - step: Два\n',
    rep: "  - step: '02'\n",
  },
  {
    f: 'src/data/pages/ru/factory-process.yaml',
    find: '  - step: Три\n',
    rep: "  - step: '03'\n",
  },
  {
    f: 'src/data/pages/ru/factory-process.yaml',
    find: '  - step: Четыре\n',
    rep: "  - step: '04'\n",
  },
  {
    f: 'src/data/pages/ru/factory-process.yaml',
    find: '  - step: Пять\n',
    rep: "  - step: '05'\n",
  },
  {
    f: 'src/data/pages/ru/factory-process.yaml',
    find: '  - step: Шесть\n',
    rep: "  - step: '06'\n",
  },
  {
    f: 'src/data/pages/ru/factory-process.yaml',
    find: '  - step: Семь\n',
    rep: "  - step: '07'\n",
  },
  {
    f: 'src/data/pages/ru/factory-process.yaml',
    find: '  - step: Восемь\n',
    rep: "  - step: '08'\n",
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '    - step: Eins\n',
    rep: "    - step: '1'\n",
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '    - step: Zwei\n',
    rep: "    - step: '2'\n",
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '    - step: Drei\n',
    rep: "    - step: '3'\n",
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '    - step: Uno\n',
    rep: "    - step: '1'\n",
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '    - step: Dos\n',
    rep: "    - step: '2'\n",
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '    - step: Tres\n',
    rep: "    - step: '3'\n",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: '    - step: Due\n',
    rep: "    - step: '2'\n",
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: '    - step: Tre\n',
    rep: "    - step: '3'\n",
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '    - step: Een\n',
    rep: "    - step: '1'\n",
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '    - step: Twee\n',
    rep: "    - step: '2'\n",
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '    - step: Drie\n',
    rep: "    - step: '3'\n",
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '    - step: Jeden\n',
    rep: "    - step: '1'\n",
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '    - step: Dwa\n',
    rep: "    - step: '2'\n",
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '    - step: Trzy\n',
    rep: "    - step: '3'\n",
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '    - step: Um\n',
    rep: "    - step: '1'\n",
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '    - step: Dois\n',
    rep: "    - step: '2'\n",
  },
  {
    f: 'src/data/pages/pt/factory.yaml',
    find: '    - step: Três\n',
    rep: "    - step: '3'\n",
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '    - step: Один\n',
    rep: "    - step: '1'\n",
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '    - step: Два\n',
    rep: "    - step: '2'\n",
  },
  {
    f: 'src/data/pages/ru/factory.yaml',
    find: '    - step: Три\n',
    rep: "    - step: '3'\n",
  },
  {
    f: 'src/data/pages/cs/about.yaml',
    find: 'amount: 2,400+\n',
    rep: 'amount: 2 400+\n',
  },
  {
    f: 'src/data/pages/da/about.yaml',
    find: 'amount: 2,400+\n',
    rep: 'amount: 2.400+\n',
  },
  {
    f: 'src/data/pages/el/about.yaml',
    find: 'amount: 2,400+\n',
    rep: 'amount: 2.400+\n',
  },
  {
    f: 'src/data/pages/fi/about.yaml',
    find: 'amount: 2,400+\n',
    rep: 'amount: 2 400+\n',
  },
  {
    f: 'src/data/pages/fr/about.yaml',
    find: 'amount: 2,400+\n',
    rep: 'amount: 2 400+\n',
  },
  {
    f: 'src/data/pages/ro/about.yaml',
    find: 'amount: 2,400+\n',
    rep: 'amount: 2.400+\n',
  },
];
