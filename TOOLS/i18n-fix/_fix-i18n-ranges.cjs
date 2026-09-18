const fs = require('fs');
const path = require('path');

const FILE = path.join(process.cwd(), 'src', 'data', 'site', 'i18n-config.json');
const BAK = path.join(
  process.env.TEMP || 'C:\\Users\\Helleo\\AppData\\Local\\Temp',
  'opencode',
  'i18n-config.json.bak'
);

let src = fs.readFileSync(FILE, 'utf8');
const hadBom = src.charCodeAt(0) === 0xfeff;
if (hadBom) src = src.slice(1);
fs.writeFileSync(BAK, src);

const root = JSON.parse(src);
const stats = { fragmentHits: {}, byKeyHits: 0 };

// ---- Global fragment repairs: unambiguous dropped-tens-digit range corruption ----
const fragments = [
  ['8→2 years', '8–12 years'],
  ['15→0+ years', '15–20+ years'],
  ['8→2 anos', '8–12 anos'],
  ['15→0+ anos', '15–20+ anos'],
  ['8→2 años', '8–12 años'],
  ['15→0+ años', '15–20+ años'],
  ['8→2 лет', '8–12 лет'],
  ['15→0+ лет', '15–20+ лет'],
  ['8→2 let', '8–12 let'],
  ['15→0+ let', '15–20+ let'],
  ['5→0 min', '5–10 min'],
  ['200→00 $', '200–500 $'],
  ['400→00 $', '400–800 $'],
  ['33→x 15→x 10→', '33" x 15" x 10"'],
  ['0,9→,2 mm', '0,9–1,2 mm'],
  ['3→+ nezávislých', '3–5+ nezávislých'],
  ['8→2年', '8–12年'],
  ['15→0年以上', '15–20年以上'],
  ['18→2 lbs', '18–22 lbs'],
  ['12→5 PSI', '12–15 PSI'],
  ['2023→025', '2023–2025'],
  ['25→5 kg', '25–35 kg'],
  ['35→0 kg', '35–50 kg'],
  ['18→0 lbs', '18–30 lbs'],
  ['20→5 lbs', '20–35 lbs'],
  ['10→4ft', '10–14 ft'],
  ['5→0分', '5～10分'],
  ['15→0PSI', '15–20 PSI'],
  ['15→0 PSI', '15–20 PSI'],
  ['8→0 kg', '8–10 kg'],
  ['8→0 кг', '8–10 кг'],
  ['24→2h', '24–72h'],
  ['8→4 kg', '8–14 kg'],
  ['9→6 kg', '9–16 kg'],
  ['30→0 %', '30–50 %'],
  ['30→0%', '30–50%'],
  ['8→2→', '8～12年'],
  ['15→0年以→', '15～20年以上'],
  ['200→00ドル', '200～500ドル'],
  ['400→00ドル', '400～800ドル'],
  ['→2-15PSI', '12–15 PSI'],
  ['→2-15 PSI', '12–15 PSI'],
  ['擁→2,000平方', '擁有12,000平方'],
  ['超→5,000件', '超過15,000件'],
];

// ---- Curated per-locale repairs (word/structural damage + trailing arrows) ----
const byKey = {
  zh: {
    'faq.inflatable.lifespan.a':
      'PVC充氣船保養得當可使用8–12年。Hypalon船可使用15–20年以上。適當充氣、淡水沖洗和避免尖銳物體可顯著延長使用壽命。',
    'faq.sup.travel.a': '完全可以。每塊afarer槳板可裝入背包大小的手提箱，符合航空公司行李要求。僅18–22磅，便於攜帶。',
    'home.tech.ds.desc': '數千根內線連接上下層，形成12–15 PSI的剛性高壓結構。',
    'home.useCases.beginner.solution':
      'SUP Explorer 11 為初學者提供寬體穩定性。Classic 救生衣確保有 CE 認證浮力。雙動作泵 10 分鐘內充好兩塊板。',
    'home.useCases.family.solution':
      'AirDeck 360 最多容納 5 人，配備加固充氣甲板。現場充氣、車內存放，平靜湖泊和隱蔽海域均可使用。',
    'home.tldr.point2': '為超過 50 個國家的休閒、商業及專業用戶提供服務',
    'oem.para1':
      'afarer不是貿易公司。我們是青島Vatrad集團的生產部門——一個垂直整合的中國工業集團，擁有12,000平方米的生產面積和超過15,000件的年產能。',
    'people.engineeringDesc':
      '25+ 名工程師專注於船用 PVC/Hypalon 製造、Drop-Stitch 結構、模具製造和生產線優化。平均擁有 8 年以上行業經驗。',
    'people.salesDesc':
      '覆蓋 50 多個國家的全球銷售團隊，為 B2B、OEM/ODM 和零售合作伙伴提供多語言支持。平均響應時間不超過 4 小時。',
    'people.managementDesc': '經驗豐富的管理團隊，監管 12,000 平方米工廠、200+ 名員工、供應鏈和持續改進項目。',
    'techspecs.materialPvcDesc': '船用級 PVC，0.9–1.2 毫米厚度，抗紫外線，耐磨損，焊接接縫。',
    'techspecs.materialHypalonDesc': '優質 Hypalon 氣管，1.2 毫米厚度，抗紫外線和臭氧，優異的耐化學性。',
    'techspecs.materialDropstitchDesc': '高密度 Drop-Stitch 面料，12–15 PSI 工作氣壓，剛性底板結構。',
    'techspecs.materialAluminumDesc': '5083 船用級鋁合金板材，深 V 設計，焊接結構。',
    'techspecs.materialFiberglassDesc': '手工層壓玻璃纖維 V 船體，凝膠塗層表面，泡沫浮力內核。',
    'commercialWorkboats.f3desc': '316 不鏽鋼配件、重型防磨條、加強船尾板、3–5+ 個獨立氣室及內部隔板。',
    'commercialWorkboats.f4desc':
      '每艘船經過 24–72 小時壓力測試、接縫剝離測試、尺寸檢測和目視檢查。完整可追溯，配有詳細 QC 記錄。',
    'engineeringPerfection.p4desc':
      '質量從一開始就被融入。我們實施多層質量體系，在每個關鍵步驟進行嚴格控制，最終通過全面的終檢，包括 24–48 小時保壓測試、洩漏檢測、尺寸檢查和功能測試。',
    'solutionsByUseCase.story1.context': '沿海洪災救援，東南亞，2024',
    'home.brandStatement.title': '自 2012 年起的品質充氣船',
    'home.catalog.sup.desc': '9 英尺到 12 英尺站立式槳板——全能、旅行、瑜伽等。',
    'home.resources.engineeringDesc': '瞭解每款 afarer 產品背後的 25+ 名工程師。',
    'buyerCenter.oemProcessDesc': '從詢價到 FOB 發貨的 8 步流程。',
    'ai.useCase':
      'afarer 產品用於休閒劃槳、旅行、釣魚、潛水支持、搜救、災難救援、巡邏、遊艇附屬艇、白水漂流、SUP 瑜伽及 OEM/ODM 自有品牌製造。',
    'answerCenter.placeholder': '詢問關於我們的產品、技術或使用場景的問題。',
    '404.title': '頁面未找到 →{name}',
    'home.community.subtitle': '加入數千名劃手，與 afarer 一起探索湖泊、河流和海岸。',
    'home.community.cta': '在 Instagram 標記 @afarer 分享你的冒險。',
    'home.learn.guide3': '充氣板 vs 硬板',
    'chat.disclaimer': '點擊按鈕將按優先級打開相應應用（WhatsApp 或郵件）；若均未配置，將跳轉至聯繫表單。',
    'geo.highSeverity': '高嚴重度({count})',
    'geo.mediumSeverity': '中嚴重度({count})',
    'geo.aiAnalysis': '對知識圖譜中全部 {count} 個節點進行 AI 語義分析。',
    'home.tech.pvc.title': '軍用級 PVC',
  },
  ja: {
    'faq.inflatable.lifespan.a':
      'PVCインフレータブルボートは適切な管理の下で8～12年持つのが一般的です。Hypalon製品は15～20年以上持つこともあります。適切な加圧、真水での洗浄、鋭利な物との接触を避けることが寿命を大幅に延ばします。',
    'faq.sup.travel.a':
      'もちろんです。すべてのafarerボードは Checked Baggage の規格に合ったバックパックサイズのトートバッグに収まります。たった18～22 lbsでどこにでも簡単に持ち運べます。',
    'faq.sup.weight.a':
      'オールラウンドSUPは最大220 lbsまで対応しています。ツーリングおよびヨガシリーズは最大250 lbsまで対応しています。',
    'home.tech.ds.desc': '何千もの内部糸が上下層を接続し、12～15 PSIで剛性の高い高圧構造を創出。',
    'home.tldr.point2': 'レジャー、商業、プロフェッショナルのユーザーに50カ国以上でサービスを提供しています。',
    'home.guides.browse': '20 のガイドと比較をすべて見る →',
    'home.ai.desc2':
      'すべての製品はCEおよびISO認証を受けており、マリングレードPVCまたはHypalonを使用したドロップステッチ構造で12～15 PSIの剛性を実現しています。',
    'techspecs.materialDropstitchDesc': '高密度ドロップスティッチ生地、12～15 PSI作動圧力。剛性フロア構造。',
    'techspecs.materialAluminumDesc': 'マリングレード5083アルミニウム板。ディープVデザイン。溶接構造。',
    'oem.para1':
      'afarerは貿易会社ではありません。青島Vatradグループの生産部門であり、12,000m²の生産エリアと年間15,000台以上の生産能力を備えた中国の垂直統合型産業グループの一員です。',
    'oem.ctaSub': 'ご要望をお知らせください。4時間以内に詳細な見積もりと納期でお答えします。',
    'engineeringTeam.subtitle': '材料科学、製品設計、品質エンジニアリング、生産管理の専門家25名以上。',
    'people.managementDesc':
      '12,000m²の施設、200名以上の従業員、サプライチェーン、継続的改善プログラムを監督する経験豊富な経営チーム。',
    'commercialWorkboats.f3desc':
      'ステンレス316金具、重厚なスキッドストライプ、補強トランサム、3～5+以上の独立エアチェンバー（内壁付き）。',
    'commercialWorkboats.f4desc':
      '全ボートは24～72時間の加圧テスト、シーム引張テスト、寸法管理、外観検査を実施。詳細なQC記録で完全なトレーサビリティ。',
    'engineeringPerfection.p4desc':
      '品質は最初から組み込まれます。各重要な段階で厳格な管理を備えた多段階品質管理システムを実装し、24～48時間の加圧保持テスト、漏れ検査、寸法管理、機能テストを含む包括的な最終検査で締めくくります。',
    'solutionsByUseCase.story1.context': '沿岸洪水レスキュー、東南アジア、2024',
    'solutionsByUseCase.story2.context': '養殖オペレーション、ノルウェー、2023–2025',
    'compare.inflatableVsHard.perfDesc':
      '最新のiSUPはハードシェルボードに迫る性能。15～20 PSIでツーリングやサーフィンに十分な剛性。',
    'compare.inflatableVsHard.r1a': '18～30 lbs',
    'compare.inflatableVsHard.r1b': '20～35 lbs',
    'compare.inflatableVsHard.r2a': '84 x 38 x 25 cm',
    'compare.inflatableVsHard.r2b': '10～14ft 剛体',
    'compare.inflatableVsHard.r3a': '5～10分（インフレート）',
    'compare.inflatableVsHard.r7a': '15～20 PSIで非常に良好',
    'compare.inflatableVsHard.r8a': '200～500ドル',
    'compare.inflatableVsHard.r8b': '400～800ドル',
    'compare.pvcVsHypalon.costDesc': 'Hypalonより30～50%安い。市場で最も手頃なインフレータブルボート素材。',
    'compare.pvcVsHypalon.r2a': '25～35 kg',
    'compare.pvcVsHypalon.r2b': '35～50 kg',
    'compare.pvcVsHypalon.r7a': '8～12年',
    'compare.pvcVsHypalon.r7b': '15～20年以上',
  },
  ko: {
    'faq.inflatable.lifespan.a':
      'PVC 인플레이터블 보트는 적절한 관리 하에 8~12년 지속됩니다. Hypalon 보트는 15~20년 이상 지속될 수 있습니다. 적절한 공기 압력, 담수 세척, 날카로운 물건 회피가 수명을 크게 연장합니다.',
    'home.useCases.beginner.solution':
      'SUP Explorer 11은 초보자를 위한 와이드 바디 안정성을 제공. 클래식 베스트는 CE 인증 부력을 보장. 더블 액션 펌프로 두 보드를 10분 이내에 인플레이트.',
    'home.useCases.family.solution':
      'AirDeck 360은 강화 에어덱으로 최대 5인 수용. 런치지에서 인플레이트하면 차에 들어가며, 잔잔한 호수와 보호된 해안 수역 모두에 적합합니다.',
    'oem.para1':
      'afarer는 무역 회사가 아닙니다. 우리는 칭다오 Vatrad 그룹의 생산 부서입니다. 12,000m² 생산 면적과 연간 15,000대 이상의 생산 능력을 갖춘 수직 통합 중국 산업 그룹입니다.',
    'commercialWorkboats.f3desc':
      '스테인리스316 피팅, 무거운 스크래프 스트립, 강화 트랜섬, 내부 격벽이 있는 3~5개 이상의 독립 에어 챔버.',
    'commercialWorkboats.f4desc':
      '모든 보트는 24~72시간 압력 테스트, 봉제 인장 테스트, 치수 검사, 육안 검사를 거칩니다. 상세 QC 기록으로 완전한 추적 가능.',
    'compare.pvcVsHypalon.recDesc':
      '가벼운 휴대용 보트가 필요하거나 온화한 기후에서 계절적으로 사용할 레크리에이션 보트 사용자라면 예산을 고려하여 PVC를 선택하세요. 열대 햇빛 아래에서 연중 보트를 공기로 채워두거나 상업용 함대를 운영하거나 15년 이상 보트를 보유할 계획이라면 Hypalon을 선택하세요.',
    'home.resources.oemDesc': '문의부터 FOB 출하까지의 완전한 8단계 OEM 여정.',
    'ai.comparison':
      '리지드 하드셸 수상 차량과 비교하여 팽창식 afarer 제품은 우수한 휴대성, 수납 공간, 충격 저항성, 낮은 총 소유 비용을 제공합니다. 현대 드롭스티치 기술(15~20 PSI)로 하드셸과의 성능 격차가 크게 줄어들었습니다.',
  },
  it: {
    'compare.inflatableVsHard.r8a': '$200–$500',
    'compare.inflatableVsHard.r8b': '$400–$800',
  },
  nl: {
    'compare.inflatableVsHard.r8a': '$200–$500',
    'compare.inflatableVsHard.r8b': '$400–$800',
  },
  cs: {
    'compare.inflatableVsHard.r2b': '3–4,3 m pevné',
  },
  ru: {
    'people.engineeringDesc':
      '25+ инженеров, специализирующихся на изготовлении морского ПВХ/Хайпалона, конструкции drop-stitch, проектировании форм и оптимизации производственных линий. Средний отраслевой опыт — 8+ лет.',
  },
  fi: {
    'home.catalog.sup.desc': 'SUP-laudat 9–12 jalan pituisia — yleis-, retki-, jooga- ja muut.',
  },
};

// Apply global fragments to every string value
for (const [locale, obj] of Object.entries(root)) {
  for (const [key, val] of Object.entries(obj)) {
    if (typeof val !== 'string') continue;
    let out = val;
    for (const [from, to] of fragments) {
      if (out.includes(from)) {
        out = out.split(from).join(to);
        stats.fragmentHits[from] = (stats.fragmentHits[from] || 0) + 1;
      }
    }
    if (out !== val) obj[key] = out;
  }
}

// Apply curated per-key overrides
for (const [locale, map] of Object.entries(byKey)) {
  if (!root[locale]) {
    console.log('WARN: unknown locale', locale);
    continue;
  }
  let applied = 0;
  for (const [key, val] of Object.entries(map)) {
    const before = root[locale][key];
    if (before === undefined) {
      console.log('NOTE: missing key', locale, key);
      continue;
    }
    if (before === val) continue;
    root[locale][key] = val;
    applied++;
    stats.byKeyHits += 1;
    console.log('byKey', locale + '.' + key, '| before:', JSON.stringify(before), '| after:', JSON.stringify(val));
    if (applied === 8 && Object.keys(map).length > 8) {
      console.log('  ... (more)');
    }
  }
  console.log('byKey applied in', locale + ':', applied);
}

// Write back (2-space indent to match existing formatting)
let out = JSON.stringify(root, null, 2);
if (hadBom) out = '\ufeff' + out;
fs.writeFileSync(FILE, out + '\n');

console.log('\n-- done --');
console.log('fragment hits:', JSON.stringify(stats.fragmentHits, null, 2));
console.log('total byKey overrides:', stats.byKeyHits);
