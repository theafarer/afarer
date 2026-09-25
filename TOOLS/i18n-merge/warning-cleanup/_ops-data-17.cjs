// Shard 17 — factory card1 metrics (MOQ/lead time) + card link/desc scars (42 ops)
// MOQ 'SUP: 5-10 / SUP: 2-5' -> 'SUP: 5–10' (SUP rename left old double-MOQ);
// lead '30-45 days' (EN leak, hyphen) -> translated with en dash;
// extras: ja card1 link_label EN leak, ja card2 desc ' tear' leak, ja card2 link_label
// missing '→', sv card1 link_label '—' instead of '→', sv card2 soft hyphen (U+00AD),
// ru card2 desc tensile/tear both translated as "разрыв".
module.exports = [
  // --- MOQ (18 langs) ---
  { f: 'src/data/pages/de/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/es/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/pt/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/ar/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/it/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/ja/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/ko/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/ru/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/pl/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/nl/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/sv/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/no/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/el/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/tr/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/cs/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/da/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/ro/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  { f: 'src/data/pages/th/factory.yaml', find: "value: 'SUP: 5-10 / SUP: 2-5'", rep: "value: 'SUP: 5–10'" },
  // --- lead time (18 langs) ---
  { f: 'src/data/pages/de/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 Tage' },
  { f: 'src/data/pages/es/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 días' },
  { f: 'src/data/pages/pt/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 dias' },
  { f: 'src/data/pages/ar/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 يومًا' },
  { f: 'src/data/pages/it/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 giorni' },
  { f: 'src/data/pages/ja/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30〜45日' },
  { f: 'src/data/pages/ko/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45일' },
  { f: 'src/data/pages/ru/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 дней' },
  { f: 'src/data/pages/pl/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 dni' },
  { f: 'src/data/pages/nl/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 dagen' },
  { f: 'src/data/pages/sv/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 dagar' },
  { f: 'src/data/pages/no/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 dager' },
  { f: 'src/data/pages/el/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 ημέρες' },
  { f: 'src/data/pages/tr/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 gün' },
  { f: 'src/data/pages/cs/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 dní' },
  { f: 'src/data/pages/da/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 dage' },
  { f: 'src/data/pages/ro/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 zile' },
  { f: 'src/data/pages/th/factory.yaml', find: 'value: 30-45 days', rep: 'value: 30–45 วัน' },
  // --- extras ---
  {
    f: 'src/data/pages/ja/factory.yaml',
    find: 'link_label: Full capacity details →',
    rep: 'link_label: 生産能力の詳細すべて →',
  },
  { f: 'src/data/pages/ja/factory.yaml', find: '（引張、 tear、UV耐性）', rep: '（引張強度、引き裂き、UV耐性）' },
  {
    f: 'src/data/pages/ja/factory.yaml',
    find: 'link_label: ラボの手順と設備\n',
    rep: 'link_label: ラボの手順と設備 →\n',
  },
  {
    f: 'src/data/pages/sv/factory.yaml',
    find: 'link_label: Fullständiga kapacitetsuppgifter —',
    rep: 'link_label: Fullständiga kapacitetsuppgifter →',
  },
  { f: 'src/data/pages/sv/factory.yaml', find: 'Laboratorie­procedurer', rep: 'Laboratorieprocedurer' },
  { f: 'src/data/pages/ru/factory.yaml', find: 'на разрыв, на разрывание', rep: 'на растяжение, на разрыв' },
];
