// shard 39: L27 挂账② locale factory 族漂移清单 (12 项挂账 → 9 组修复, 91 ops)
//
// ② custom MOQ 统一 50: 20 locale L56 value + fr L3 description (21 ops)
//    EN SSOT (commit 51974b4c): L3 "MOQ 50 units, CE certified." / L59 "MOQ 50 units (SUP)"
// ③ resorts roi metric 丢失的 "+": de/es/it/nl/pl/pt/ru (7 ops) — 只补 +, 不动本地化数字格式
// ⑨ factory equipment items[3] 误译 (shard 37 EN 恢复后 locale 未跟上):
//    cs/da/fr/ro/th name+spec + el spec 单位 (11 ops)
// ⑤ ja ㎡/无空格 m² 归一 "12,000 m²" + "の" 前多余空格 (10 ops)
// ⑦ ja factory-process steps 复制粘贴污染: 03/05/06/07/08 desc + 05/08 title + 03/04/06/08 duration (6 block ops)
//    (规模远超挂账记载: duration 也全是复制错值, step08 title 也是复制)
// ⑧ material_traceability system 行缺 " + ": de/es/it/nl/pl/pt/ru (7 ops)
// ⑪ tr factory-capacity serigrafie (荷拼) → serigrafi (1 op)
// NEW (dist walk 期发现): "ISO &" 令牌剥除族 (双空格疤痕 "m²  & CE"): EN 根 SSOT 自身损坏 + 9 locale
//    commercial-workboats + fi/it/nl/pt tourism-recreation (14 ops)
// ⑫ fi 英文残留: hydrodynamic-test-tank 11 块 + research-sup-thickness 3 标题 (14 ops)
//
// 挂账销项 (reviewed no-action, 见 TECH.md L29):
// ① home proof_points item3/item4 20 locale 整块重译 → shard 40
// ④ ISO 9001 变体: da/es/pl/tr 均为合法翻译/连字符复合词, 无损坏
// ⑥ da/fi "tsm" 千分位: 该页不存在 (da/fi 无 sup-manufacturer.yaml); da/fi SEP 千分位为全文件族
//    问题 (~33 行/语言) → 专项 shard (按 L25⑧ 全 key 配对扫描计划)
// ⑩ Vatrad vs Aquafarer: EN 根 SSOT 自身并存 (业务决定), locale 与 EN 一致 → 不动
//
// 安全规则: 非 ASCII find/rep 一律运行时从磁盘提取 + ASCII/unicode-escape 变换 (L26③ 教训)
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const rd = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const must = (m, what) => {
  if (!m) throw new Error('ops-39 extract failed: ' + what);
  return m;
};
const indent = (line) => must(line.match(/^\s*/), 'indent').slice(0);

const ops = [];
const OP = (f, find, rep) => ops.push({ f: 'src/data/pages/' + f, find, rep });

// ---------- ② custom MOQ 50 (21 ops) ----------
const UNIT_SRC = {
  cs: [rd('src/data/pages/cs/factory.yaml'), /5.10 ([^ ]+) na model/],
  da: [rd('src/data/pages/da/factory.yaml'), /5.10 ([^ ]+) pr\. model/],
  th: [null, null],
};
{
  const thC = rd('src/data/pages/th/custom.yaml');
  const thDesc = thC.split('\n').find((l) => / 50 /.test(l) && !/5.10|5-10/.test(l));
  UNIT_SRC.th = [thDesc, /50 ([^ ]+)/];
}
for (const lc of [
  'ar',
  'cs',
  'da',
  'de',
  'el',
  'es',
  'fi',
  'fr',
  'it',
  'ja',
  'ko',
  'nl',
  'no',
  'pl',
  'pt',
  'ro',
  'ru',
  'sv',
  'th',
  'tr',
]) {
  const t = rd('src/data/pages/' + lc + '/custom.yaml');
  const line = must(t.match(/value: MOQ[^\n]*/), lc + ' custom L56')[0];
  let rep;
  if (lc === 'ja') {
    const unit = must(line.match(/5.10([^\s(（]+)[\s(（]/), lc + ' unit')[1];
    rep = 'value: MOQ 50' + unit + '（SUP）';
  } else if (lc === 'ko') {
    const unit = must(line.match(/5.10([^\s(（]+)[\s(（]/), lc + ' unit')[1];
    rep = 'value: MOQ 50' + unit + ' (SUP)';
  } else if (lc === 'ar') {
    rep = 'value: MOQ 50 \u0648\u0627\u062d\u062f\u0629 (SUP)'; // وحدة (singular after 50)
  } else if (lc === 'cs' || lc === 'da' || lc === 'th') {
    const src = UNIT_SRC[lc];
    const unit = must(must(src[0], lc + ' unit src').match(src[1]), lc + ' unit')[1];
    rep = 'value: MOQ 50 ' + unit + ' (SUP)';
  } else {
    const unit = must(line.match(/5.10\s+([^\s(]+)\s*[(/]/), lc + ' unit')[1];
    rep = 'value: MOQ 50 ' + unit + ' (SUP)';
  }
  OP(lc + '/custom.yaml', line, rep);
}
{
  // fr L3 description: "MOQ 5–10 unités, certifié CE" -> "MOQ 50 unités, certifié CE"
  const frC = rd('src/data/pages/fr/custom.yaml');
  const m = must(frC.match(/MOQ 5.10 [^,]+, [^.']+/), 'fr custom L3');
  // BUGFIX: slice(indexOf(' ')) hits the space after "MOQ" -> "MOQ 50 5–10 unités"; replace token instead
  OP('fr/custom.yaml', m[0], m[0].replace(/MOQ 5.10/, 'MOQ 50'));
}

// ---------- ③ resorts roi "+" (7 ops) ----------
for (const lc of ['de', 'es', 'it', 'nl', 'pl', 'pt', 'ru']) {
  const t = rd('src/data/pages/' + lc + '/solutions-resorts-hotels.yaml');
  const ms = (t.match(/- metric: [^\n]*/g) || []).filter((l) => /50/.test(l) && /200/.test(l));
  if (ms.length !== 1) throw new Error('resorts ' + lc + ' metric lines=' + ms.length);
  const line = ms[0];
  let rep;
  if (lc === 'de')
    rep = line.replace('\\_$"', '+\\_$"'); // YAML "50.000–200.000\_$" (NBSP)
  else if (lc === 'pl') rep = line.replace(/(\s*USD)/, '+$1');
  else rep = line + '+';
  OP(lc + '/solutions-resorts-hotels.yaml', line, rep);
}

// ---------- ⑨ equipment items[3]: Fiberglass Hand-Lay-Up Moulds (11 ops) ----------
const NEW_EQUIP = {
  cs: ['Sklolaminátové formy pro ruční laminování', 'Formy desek SUP až do délky 14 stop'],
  da: ['Glasfiberforme til håndlaminering', 'SUP-boardforme op til 14 ft'],
  fr: ['Moules pour stratification manuelle en fibre de verre', 'Moules de planches SUP jusqu’à 14 ft'],
  ro: ['Matrițe pentru laminare manuală din fibră de sticlă', 'Matrițe pentru plăci SUP de până la 14 ft'],
};
let thMould = null; // for th, extracted from th/prototype-workshop
{
  const thPW = rd('src/data/pages/th/prototype-workshop.yaml');
  thMould = must(thPW.match(/(\S+ \([^)]+\))<\/td>/), 'th mould phrase')[1]; // "แม่พิมพ์ขึ้นรูปด้วยมือ (ไฟเบอร์กลาส)"
}
for (const lc of ['cs', 'da', 'fr', 'ro', 'th', 'el']) {
  const t = rd('src/data/pages/' + lc + '/factory.yaml');
  const pairs = t.match(/- name: [^\n]*\n      spec: [^\n]*/g);
  if (!pairs || pairs.length !== 6) throw new Error('equip ' + lc + ' pairs=' + (pairs && pairs.length));
  const parts = pairs[3].split('\n');
  const nameLine = parts[0];
  const specLine = parts[1];
  if (lc === 'el') {
    // name Καλούπια Υαλονήματος 内容正确; spec 单位错 "6 m" -> EN "14 ft"
    OP(lc + '/factory.yaml', specLine, specLine.replace('6 m', '14 ft'));
  } else if (lc === 'th') {
    OP(lc + '/factory.yaml', nameLine, nameLine.replace(/- name: .*/, '- name: ' + thMould));
    const coreWord = must(specLine.match(/spec: (\S+) /), 'th core word')[1]; // "แกนบอร์ด"
    if (coreWord.length !== 8) throw new Error('th coreWord len=' + coreWord.length);
    const boardTok = coreWord.slice(3); // "บอร์ด" (แกน=3 UTF-16 units)
    // BUGFIX: split(' ')[0] grabs the WHOLE Thai phrase (no spaces); slice first 8 UTF-16 units "แม่พิมพ์"
    const mouldWord = thMould.slice(0, 8);
    if (thMould.charCodeAt(8) !== 0x0e02) throw new Error('th mould word boundary wrong'); // next must be ข
    OP(lc + '/factory.yaml', specLine, specLine.replace(coreWord, mouldWord + boardTok));
  } else {
    const nw = NEW_EQUIP[lc];
    OP(lc + '/factory.yaml', nameLine, nameLine.replace(/- name: .*/, '- name: ' + nw[0]));
    OP(lc + '/factory.yaml', specLine, specLine.replace(/spec: .*/, 'spec: ' + nw[1]));
  }
}

// ---------- ⑤ ja ㎡/m² 归一 (10 ops) ----------
{
  const SQ = '\u33A1'; // ㎡
  const MS = 'm\u00B2'; // m²
  for (const f of [
    'afarer-story',
    'factory-capacity',
    'factory',
    'media',
    'tourism-recreation',
    'trust',
    'brand-team',
  ]) {
    const t = rd('src/data/pages/ja/' + f + '.yaml');
    for (const line of t.match(/[^\n]*12,000 ?\u33A1[^\n]*/g) || []) {
      OP('ja/' + f + '.yaml', line, line.replace(/12,000 ?\u33A1/, '12,000 ' + MS));
    }
    for (const line of t.match(/[^\n]*12,000m\u00B2[^\n]*/g) || []) {
      OP('ja/' + f + '.yaml', line, line.replace('12,000m\u00B2', '12,000 ' + MS));
    }
    for (const line of t.match(/[^\n]*m\u00B2 \u306e[^\n]*/g) || []) {
      OP('ja/' + f + '.yaml', line, line.replace('m\u00B2 \u306e', 'm\u00B2\u306e'));
    }
  }
}

// ---------- ⑦ ja factory-process steps 污染修复 (6 block ops) ----------
{
  const jaFp = rd('src/data/pages/ja/factory-process.yaml');
  const WAVE = must(jaFp.match(/2(.)4/), 'ja wave dash')[1];
  if (!/^[\u301C\uFF5E]$/.test(WAVE)) throw new Error('ja wave unexpected: ' + WAVE.charCodeAt(0));
  const block = (n) =>
    must(
      jaFp.match(
        new RegExp("  - step: '" + n + "'\\n    title: [^\\n]*\\n    description: [^\\n]*\\n    duration: [^\\n]*")
      ),
      'ja step block ' + n
    )[0];
  const JA03 =
    'パネルは熱封着機で仮固定され、管理された200〜300 °Cの温度でホットエア溶着により接合されます。主要継ぎ目は、気密性と高強度を確保するためRF誘電溶接で補強されます。完成したチャンバーは、30分間の気密保持検証のため使用圧力の1.5倍に加圧されます。';
  const JA05 =
    'SUPボードのデッキグラフィックは、フルカラーのフォトクオリティデザインにはデジタルプリントを、耐久性のあるロゴや繰り返しパターンにはスクリーンプリントを用いて施されます。プリントはUV耐性と耐摩耗性を高めるため、硬化・シール処理されます。';
  const JA06 =
    'FRPハルとPVCチューブアセンブリは組立ライン上で結合されます。エンジンを搭載し、操舵・スロットルコントロールを接続し、燃料システムを取り付け、電気配線ハーネス全体を配線します。各ボートは100項目の組立チェックリストに従い、各段階で必須の署名確認が行われます。';
  const JA07 =
    '完成したすべてのボートは、必須の品質ゲートを通過します。チャンバー気密テスト、金具動作確認、締結部品のトルク検証、外観検査を実施します。カスタム・試作艇には、安定性と操縦性を確認する水上試験も実施されます。';
  const JA08 =
    'ボートは空気を抜き、手順に従って折り畳み、丈夫な織バッグまたは合板クレートに梱包して出荷積み込みします。各梱包にはモデル、シリアル番号、配送先を表示します。FCL・LCLコンテナ輸送による世界中への出荷のため、フォワーダーと調整します。';
  const F = 'ja/factory-process.yaml';
  let b = block('03');
  OP(
    F,
    b,
    b
      .replace(/description: .*/, 'description: ' + JA03)
      .replace(/duration: .*/, 'duration: ボートあたり1' + WAVE + '2日')
  );
  b = block('04');
  OP(F, b, b.replace(/duration: .*/, 'duration: ハルあたり2' + WAVE + '4日'));
  b = block('05');
  OP(F, b, b.replace(/title: .*/, 'title: SUPプリント・装飾').replace(/description: .*/, 'description: ' + JA05));
  b = block('06');
  OP(F, b, b.replace(/description: .*/, 'description: ' + JA06).replace(/duration: .*/, 'duration: 2' + WAVE + '4日'));
  b = block('07');
  OP(F, b, b.replace(/description: .*/, 'description: ' + JA07));
  b = block('08');
  OP(
    F,
    b,
    b
      .replace(/title: .*/, 'title: 梱包・出荷')
      .replace(/description: .*/, 'description: ' + JA08)
      .replace(/duration: .*/, 'duration: 1日')
  );
}

// ---------- ⑧ traceability " + " (7 ops) ----------
for (const lc of ['de', 'es', 'it', 'nl', 'pl', 'pt', 'ru']) {
  const t = rd('src/data/pages/' + lc + '/factory.yaml');
  const line = must(t.match(/system: [^\n]*Qingdao[^\n]*/), 'trace ' + lc)[0];
  OP(lc + '/factory.yaml', line, line.replace(') ', ') + '));
}

// ---------- ⑪ tr serigrafie → serigrafi (1 op) ----------
{
  const t = rd('src/data/pages/tr/factory-capacity.yaml');
  const line = must(t.match(/[^\n]*serigrafie[^\n]*/), 'tr serigrafie')[0];
  OP('tr/factory-capacity.yaml', line, line.replace('serigrafie', 'serigrafi'));
}

// ---------- ISO-strip 族 "m²  & CE" (14 ops) ----------
{
  const FIX = [
    ['commercial-workboats.yaml', '12,000 m\u00B2  & CE-certified', '12,000 m\u00B2 ISO & CE-certified'],
    ['da/commercial-workboats.yaml', '12,000 m\u00B2  & CE-certificerede', '12,000 m\u00B2 ISO- og CE-certificerede'],
    ['it/commercial-workboats.yaml', 'fabbrica  & CE di', 'fabbrica ISO & CE di'],
    [
      'ja/commercial-workboats.yaml',
      '12,000 m\u00B2  & CE\u8A8D\u8A3C\u5DE5\u5834',
      '12,000 m\u00B2\u306EISO\uFF06CE\u8A8D\u8A3C\u5DE5\u5834',
    ],
    ['ko/commercial-workboats.yaml', '12,000 m\u00B2  & CE', '12,000 m\u00B2 ISO & CE'],
    ['nl/commercial-workboats.yaml', '12.000 m\u00B2  & CE', '12.000 m\u00B2 ISO & CE'],
    ['no/commercial-workboats.yaml', '12,000 m\u00B2 & CE', '12,000 m\u00B2 ISO- og CE'],
    ['pt/commercial-workboats.yaml', '12.000 m\u00B2  & CE', '12.000 m\u00B2 ISO & CE'],
    ['ro/commercial-workboats.yaml', '12,000 m\u00B2  & ', '12,000 m\u00B2 ISO & '],
    ['sv/commercial-workboats.yaml', '12,000 m\u00B2  & CE', '12,000 m\u00B2 ISO- och CE'],
    ['fi/tourism-recreation.yaml', '12 000 m\u00B2  & CE', '12 000 m\u00B2 ISO- ja CE'],
    ['it/tourism-recreation.yaml', 'fabbrica  & CE di', 'fabbrica ISO & CE di'],
    ['nl/tourism-recreation.yaml', '12.000 m\u00B2  & CE', '12.000 m\u00B2 ISO & CE'],
    ['pt/tourism-recreation.yaml', '12.000 m\u00B2  & CE', '12.000 m\u00B2 ISO & CE'],
  ];
  for (const [f, a, b] of FIX) {
    const t = rd('src/data/pages/' + f);
    const ms = t.match(/[^\n]*(m\u00B2\s*&|  & CE)[^\n]*/g) || [];
    if (ms.length !== 1) throw new Error('iso-strip ' + f + ' lines=' + ms.length);
    OP(f, ms[0], ms[0].replace(a, b));
  }
}

// ---------- ⑫ fi 英文残留 (14 ops) ----------
{
  const fiH = rd('src/data/pages/fi/hydrodynamic-test-tank.yaml');
  const FI_HYDRO = [
    [
      'Testing at model scale',
      '<p>Testaus mallimittakaavassa (tyypillisesti 1:3–1:5) mahdollistaa runkomuotojen nopean ja kustannustehokkaan iteroinnin. Viikko testialtaassa tuottaa saman suorituskykydatan, jonka kerääminen täysikokoisella kokeilulla ja virheellä kestäisi kuukausia — murto-osalla kustannuksista.</p>',
    ],
    [
      'Model build',
      '<li><strong>Mallin valmistus</strong> — 1:3,5-mittakaavan malli työstetään CNC-koneella suurtiheyksisestä vaahtomuovista ja lasikuitulaminoidaan jäykkyyden takaamiseksi. Paino ja painopiste säädetään vastaamaan Froude-skaalattua täyskuormatilaa.</li>',
    ],
    [
      'Resistance runs',
      '<li><strong>Vastusajot</strong> — Malli hinataan 8–10 nopeudella koko käyttöalueen kattavasti. Kokonaisvastus mitataan ja hajotetaan kitka- ja jäännösvastuskomponentteihin ITTC-1957-menetelmällä.</li>',
    ],
    [
      'Trim &amp; sinkage',
      '<li><strong>Trimmi ja upoama</strong> — Ajotrimmi ja upoama tallennetaan jokaisella nopeudella. Tavoitteena on liukuväriseisten runkojen optimaalinen trimmakulma 4–6°.</li>',
    ],
    [
      'Wake survey',
      '<li><strong>Aaltoanalyysi</strong> — Poikittaisia aaltoprofiileja mitataan kahdella nopeudella aallonmuodostusvastuksen arvioimiseksi ja perän häiriöitä aiheuttavien poikittaisten aaltojen yhteisvaikutusten tunnistamiseksi.</li>',
    ],
    [
      'Seakeeping',
      '<li><strong>Merikelpoisuus (valinnainen)</strong> — Ajot vastaan- ja myötäaalloissa säännöllisessä aallokossa lisävastuksen, pystykiihtyvyyden ja slammaustodennäköisyyden mittaamiseksi.</li>',
    ],
    [
      'Data analysis',
      '<li><strong>Data-analyysi ja suositukset</strong> — Toimitettava raportti sisältää vertailukäyriä, nopeus/teho-käyrät ja konkreettiset suunnittelusuositukset täysikokoista runkoa varten.</li>',
    ],
    [
      'Our tank is not only',
      '<p>Testiallastamme käytetään paitsi omien runkomuotojen kehittämiseen — ajamme säännöllisesti testiohjelmia asiakkaille, jotka haluavat validoida mukautetun runkomuodon tai selvittää suorituskykyongelman:</p>',
    ],
    [
      'Hull-form comparison',
      '<li><strong>Runkomuotojen vertailu</strong> — Kaksi tai useampi ehdokasrunkomuotoa testataan identtisissä olosuhteissa, mikä tuottaa objektiivisen vastus/nopeus/vakaus-vertailun suunnittelupäätöksen tueksi.</li>',
    ],
    [
      'Appendage optimisation',
      '<li><strong>Lisäkeoptimointi</strong> — Interseptorilevyjä, spray rail -listoja, trimmitabuja ja runkolistoja voidaan testata eri kokoonpanoissa niiden yksilöllisen vastuksenvähennysvaikutuksen mittaamiseksi.</li>',
    ],
    [
      'Engine-matching study',
      '<li><strong>Koneikonsopivuustutkimus</strong> — Vastusdata muunnetaan tehoennustekäyräksi, jolloin voit valita optimimoottoritehon tavoitenopeutesi ja hyötykuormasi mukaan.</li>',
    ],
  ];
  for (const [anchor, content] of FI_HYDRO) {
    const line = must(
      fiH.match(new RegExp('[^\\n]*' + anchor.replace(/[&]/g, '\\&') + '[^\\n]*')),
      'fi hydro: ' + anchor
    )[0];
    OP('fi/hydrodynamic-test-tank.yaml', line, indent(line) + content);
  }

  const fiT = rd('src/data/pages/fi/research-sup-thickness.yaml');
  let l = must(fiT.match(/[^\n]*Touring &amp; Performance[^\n]*/), 'fi thickness t1')[0];
  OP('fi/research-sup-thickness.yaml', l, l.replace('Performance', 'suorituskyky'));
  l = must(fiT.match(/[^\n]*All-Around[^\n]*/), 'fi thickness t2')[0];
  OP('fi/research-sup-thickness.yaml', l, l.replace('All-Around', 'Monikäyttö'));
  l = must(fiT.match(/[^\n]*Stability &amp; Yoga[^\n]*/), 'fi thickness t3')[0];
  OP('fi/research-sup-thickness.yaml', l, l.replace('Stability &amp; Yoga', 'vakavuus &amp; jooga'));
}

// 静态化: 序列化 ops 到 _ops-data-39.cjs (JSON.stringify 字节精确, 非 ASCII 零手打;
// 静态 find/rep 双态幂等 — pre-patch applied / post-patch already, 与既有 38 分片同构)
// 注意: 生成器只能对 pre-patch 状态运行 (提取依赖损坏文本仍在场)
const out =
  '// shard 39 (GENERATED by _gen-ops-39.cjs — do not edit by hand)\n' +
  '// 91 ops: custom MOQ 50 ×21 (20 locale L56 + fr L3), resorts roi "+" ×7, equipment items[3] ×11,\n' +
  '// ja m2-family ×10, ja factory-process steps ×6 blocks, traceability " + " ×7, tr serigrafi ×1,\n' +
  '// ISO-strip "m2  & CE" ×14 (EN root + 9 cwb + 4 tourism), fi EN-residue ×14 (hydro 11 + thickness 3)\n' +
  'module.exports = ' +
  JSON.stringify(ops, null, 2) +
  ';\n';
fs.writeFileSync(path.join(__dirname, '_ops-data-39.cjs'), out);
console.log('written: ' + ops.length + ' ops');
