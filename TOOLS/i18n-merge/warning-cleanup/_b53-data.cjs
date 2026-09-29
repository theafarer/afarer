// shard 53 data — ja/ko 404 dict EN residue + ko explore garbage + en explore German residue
// + it bme 3 EN descriptions & 2 mistranslated titles + fr bme half-translated description.
// Grounded against: EN root 404 values (i18n-config.json en block), EN root brand-marine-expertise.yaml,
// sibling translations (de/nl/tr/el/pl/th for Drop Stitch titles), ja/ko dict terminology probes
// (ja: nav.products 製品 / nav.news ニュース / nav.home ホーム; ko: 제품/뉴스/홈) and dash convention
// (dict has ZERO U+2015; ja block uses U+2014 with spaces, e.g. compare.afarerVsTraditional.title
// "afarer 対 従来型ボートメーカー — 直接比較" → ja 404.title uses "— {name}" like all 20 locales).
//
// EN root SSOT values translated here:
//   404.title       "Page not found — {name}"
//   404.description "Sorry, the page you are looking for has drifted out to sea. Use the links below to find your way back."
//   404.label       "Error"
//   404.heading     "Lost at sea."
//   404.home        "Back to homepage"
//   404.products    "Browse products"
//   404.news        "Read the news"
//   404.explore     should be EN; disk has GERMAN "Produktkategorien erkunden:" (same string as de)
//
// it bme targets (old-EN variants on disk differ from current EN root):
//   materials items[2]      EN root: 'Deep-V hulls for performance in rough conditions. Aluminum hulls for
//                                   heavy-duty commercial applications requiring maximum strength and load capacity.'
//   manufacturing items[3]  EN root: 'Every inflatable product is pressure-tested before shipping. Tubes are tested
//                                   at 1.5x rated pressure — if it holds there, it will perform on the water.'
//   testing items[5]        EN root: 'Every model undergoes sea trials before certification. Real-world testing in
//                                   coastal conditions validates performance, handling, and stability.'
//   titles: 'Drop Stitch Core Assembly' mistranslated as 'Assemblaggio del nucleo a punto basso'
//           (siblings keep the technical term: nl 'Drop Stitch Kernassemblage', tr 'Drop Stitch Çekirdek Montajı',
//            pl 'Zespół rdzenia Drop Stitch', th 'การประกอบแกน Drop Stitch')
//           'Water Testing' mistranslated as 'Analisi dell'acqua' (water analysis, not water testing)
// fr bme target: second sentence of materials items[2] is raw EN on disk.

module.exports = {
  ja404: {
    '404.title': 'ページが見つかりません — {name}',
    '404.description': '申し訳ありません。お探しのページは海へ流されてしまいました。下のリンクからお戻りください。',
    '404.label': 'エラー',
    '404.heading': '海で迷子です。',
    '404.home': 'ホームに戻る',
    '404.products': '製品を見る',
    '404.news': 'ニュースを読む',
  },
  ko404: {
    '404.title': '페이지를 찾을 수 없음 — {name}',
    '404.description': '죄송합니다. 찾고 계신 페이지가 바다로 떠나버렸습니다. 아래 링크를 사용해 돌아가세요.',
    '404.label': '오류',
    '404.heading': '바다에서 길을 잃었습니다.',
    '404.home': '홈페이지로 돌아가기',
    '404.products': '제품 둘러보기',
    '404.news': '뉴스 읽기',
  },
  koExploreNew: '제품 카테고리 살펴보기:',
  enExploreNew: 'Explore product categories:',

  // it bme: [uniqueLinePrefix, newFullLine]
  itBme: [
    [
      '      description: Deep-V fiberglass hulls for RIBs',
      '      description: Scafi Deep-V per prestazioni in condizioni difficili. Scafi in alluminio per applicazioni commerciali pesanti che richiedono la massima resistenza e capacità di carico.',
    ],
    ['    - title: Assemblaggio del nucleo a punto basso', '    - title: Assemblaggio del nucleo Drop Stitch'],
    [
      '      description: Every inflatable product is pressure-tested before shipping',
      '      description: Ogni prodotto gonfiabile viene collaudato a pressione prima della spedizione. I tubolari vengono testati a 1,5 volte la pressione nominale — se reggono a tale pressione, garantiranno prestazioni affidabili in acqua.',
    ],
    ["    - title: Analisi dell'acqua", '    - title: Prove in acqua'],
    [
      '      description: Every SUP model undergoes sea trials before certification',
      '      description: Ogni modello affronta prove in mare prima della certificazione. I test in condizioni costiere reali convalidano prestazioni, maneggevolezza e stabilità.',
    ],
  ],
  frBme: [
    '      description: Coques en V profond pour les conditions difficiles',
    '      description: Coques en V profond pour les conditions difficiles. Coques en aluminium pour les applications commerciales intensives exigeant une résistance et une capacité de charge maximales.',
  ],
};
