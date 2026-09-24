#!/usr/bin/env node
/**
 * _patch-exitintent.cjs — ExitIntentPopup 组件文案 UI 化（exitIntent.* 8 键 × 21 语言）
 *
 * 背景: src/components/widgets/ExitIntentPopup.astro 原先硬编码文案，
 * 仅 fr/es/EN 三语，其余语言页面全部显示英文。
 * 本批次新增 8 个 UI 键（EN 为 SSOT），并为 20 个非英语言提供译文。
 *
 * 键清单:
 *   exitIntent.title    exitIntent.subtitle  exitIntent.button
 *   exitIntent.bullet1  exitIntent.bullet2   exitIntent.bullet3
 *   exitIntent.dismiss  exitIntent.close
 *
 * 两种模式（仓库根执行）:
 *   node TOOLS/i18n-merge/_patch-exitintent.cjs --en      # ① 把 8 个 EN 键写入 i18n-config.json（已存在则跳过）
 *   node TOOLS/i18n-merge/_patch-exitintent.cjs --dry     # ② 试跑：报告各 _lang-{lang}.cjs 将追加的键
 *   node TOOLS/i18n-merge/_patch-exitintent.cjs --patch   # ② 正式：把译文追加到 _lang-{lang}.cjs（幂等，已有键跳过）
 *
 * 标准流程: --en → ui-keys.cjs missing → _dump-missing.cjs → --patch
 *           → _verify-langs.cjs <20 langs> → _merge-langs.cjs <20 langs> → npm run build
 */
const fs = require('fs');
const path = require('path');

const CONFIG = path.join(__dirname, '..', '..', 'src', 'data', 'site', 'i18n-config.json');

const EN = {
  'exitIntent.title': 'Before You Go — Download Our OEM Guide',
  'exitIntent.subtitle':
    'Learn how to launch your private label SUP brand with our complete manufacturing white paper. 42 pages covering mold design, QC, compliance, and logistics.',
  'exitIntent.button': 'Download Free Guide',
  'exitIntent.bullet1': '10 chapters covering every stage of OEM production',
  'exitIntent.bullet2': 'Factory audit checklist & NDA templates included',
  'exitIntent.bullet3': 'Real brand launch case studies with budgets',
  'exitIntent.dismiss': 'No thanks, I’ll explore the site',
  'exitIntent.close': 'Close',
};

// fr/es 译文沿用组件内原有文案；其余 18 语言为本批次新译。
const TR = {
  fr: {
    'exitIntent.title': 'Avant de partir — Téléchargez notre guide OEM',
    'exitIntent.subtitle':
      'Découvrez comment lancer votre marque de SUP en marque blanche grâce à notre livre blanc complet sur la fabrication. 42 pages couvrant la conception des moules, le contrôle qualité, la conformité et la logistique.',
    'exitIntent.button': 'Télécharger le guide gratuit',
    'exitIntent.bullet1': '10 chapitres couvrant chaque étape de la production OEM',
    'exitIntent.bullet2': 'Check-list d’audit d’usine et modèles de NDA inclus',
    'exitIntent.bullet3': 'Études de cas réelles de lancements de marques, avec budgets',
    'exitIntent.dismiss': 'Non merci, je vais continuer à explorer le site',
    'exitIntent.close': 'Fermer',
  },
  es: {
    'exitIntent.title': 'Antes de irte — Descarga nuestra guía OEM',
    'exitIntent.subtitle':
      'Descubre cómo lanzar tu marca de SUP de marca privada con nuestro libro blanco completo de fabricación. 42 páginas que cubren diseño de moldes, control de calidad, cumplimiento y logística.',
    'exitIntent.button': 'Descargar la guía gratis',
    'exitIntent.bullet1': '10 capítulos que cubren cada etapa de la producción OEM',
    'exitIntent.bullet2': 'Checklist de auditoría de fábrica y plantillas de NDA incluidas',
    'exitIntent.bullet3': 'Casos reales de lanzamiento de marcas, con presupuestos',
    'exitIntent.dismiss': 'No gracias, seguiré explorando el sitio',
    'exitIntent.close': 'Cerrar',
  },
  de: {
    'exitIntent.title': 'Bevor Sie gehen — Laden Sie unseren OEM-Guide herunter',
    'exitIntent.subtitle':
      'Erfahren Sie in unserem umfassenden Whitepaper zur Fertigung, wie Sie Ihre eigene SUP-Marke (Private Label) auf den Markt bringen. 42 Seiten zu Formenbau, Qualitätskontrolle, Konformität und Logistik.',
    'exitIntent.button': 'Kostenlosen Guide herunterladen',
    'exitIntent.bullet1': '10 Kapitel zu allen Phasen der OEM-Produktion',
    'exitIntent.bullet2': 'Inklusive Checkliste für Werksaudit und NDA-Vorlagen',
    'exitIntent.bullet3': 'Echte Fallstudien zu Markeneinführungen inklusive Budgets',
    'exitIntent.dismiss': 'Nein danke, ich schaue mich weiter um',
    'exitIntent.close': 'Schließen',
  },
  pt: {
    'exitIntent.title': 'Antes de ir — Baixe nosso guia OEM',
    'exitIntent.subtitle':
      'Saiba como lançar sua marca de SUP private label com nosso white paper completo de fabricação. 42 páginas cobrindo design de moldes, controle de qualidade, conformidade e logística.',
    'exitIntent.button': 'Baixar o guia gratuito',
    'exitIntent.bullet1': '10 capítulos cobrindo cada etapa da produção OEM',
    'exitIntent.bullet2': 'Checklist de auditoria de fábrica e modelos de NDA inclusos',
    'exitIntent.bullet3': 'Estudos de caso reais de lançamento de marcas, com orçamentos',
    'exitIntent.dismiss': 'Não, obrigado, vou continuar explorando o site',
    'exitIntent.close': 'Fechar',
  },
  it: {
    'exitIntent.title': 'Prima di andare — Scarica la nostra guida OEM',
    'exitIntent.subtitle':
      'Scopri come lanciare il tuo marchio SUP a marchio privato con il nostro white paper completo sulla produzione. 42 pagine su progettazione degli stampi, controllo qualità, conformità e logistica.',
    'exitIntent.button': 'Scarica la guida gratuita',
    'exitIntent.bullet1': '10 capitoli che coprono ogni fase della produzione OEM',
    'exitIntent.bullet2': 'Include checklist di audit di fabbrica e modelli di NDA',
    'exitIntent.bullet3': 'Casi studio reali di lanci di marchi, con budget',
    'exitIntent.dismiss': 'No grazie, continuerò a esplorare il sito',
    'exitIntent.close': 'Chiudi',
  },
  nl: {
    'exitIntent.title': 'Voordat u gaat — Download onze OEM-gids',
    'exitIntent.subtitle':
      'Ontdek hoe u uw private label SUP-merk lanceert met onze complete whitepaper over productie. 42 pagina’s over malontwerp, kwaliteitscontrole, compliance en logistiek.',
    'exitIntent.button': 'Download de gratis gids',
    'exitIntent.bullet1': '10 hoofdstukken over elke fase van OEM-productie',
    'exitIntent.bullet2': 'Inclusief checklist voor fabrieksaudit en NDA-sjablonen',
    'exitIntent.bullet3': 'Echte case studies van merklanceringen, inclusief budgetten',
    'exitIntent.dismiss': 'Nee dankjewel, ik verken de site verder',
    'exitIntent.close': 'Sluiten',
  },
  sv: {
    'exitIntent.title': 'Innan du går — Ladda ner vår OEM-guide',
    'exitIntent.subtitle':
      'Lär dig hur du lanserar ditt privatmärkta SUP-varumärke med vårt kompletta tillverknings-whitepaper. 42 sidor om formgivning av formar, kvalitetskontroll, efterlevnad och logistik.',
    'exitIntent.button': 'Ladda ner guiden gratis',
    'exitIntent.bullet1': '10 kapitel som täcker varje steg i OEM-tillverkningen',
    'exitIntent.bullet2': 'Inkluderar checklista för fabriksrevision och NDA-mallar',
    'exitIntent.bullet3': 'Verkliga fallstudier av varumärkeslanseringar, med budgetar',
    'exitIntent.dismiss': 'Nej tack, jag fortsätter utforska webbplatsen',
    'exitIntent.close': 'Stäng',
  },
  no: {
    'exitIntent.title': 'Før du går — Last ned vår OEM-guide',
    'exitIntent.subtitle':
      'Lær hvordan du lanserer ditt private label SUP-merke med vårt komplette produksjons-whitepaper. 42 sider om utforming av former, kvalitetskontroll, samsvar og logistikk.',
    'exitIntent.button': 'Last ned guiden gratis',
    'exitIntent.bullet1': '10 kapitler som dekker hvert trinn i OEM-produksjonen',
    'exitIntent.bullet2': 'Inkluderer sjekkliste for fabrikkrevisjon og NDA-maler',
    'exitIntent.bullet3': 'Ekte casestudier av merkelanseringer, med budsjetter',
    'exitIntent.dismiss': 'Nei takk, jeg fortsetter å utforske nettstedet',
    'exitIntent.close': 'Lukk',
  },
  da: {
    'exitIntent.title': 'Inden du går — Download vores OEM-guide',
    'exitIntent.subtitle':
      'Lær, hvordan du lancerer dit eget private label SUP-brand med vores komplette produktions-whitepaper. 42 sider om formdesign, kvalitetskontrol, overholdelse og logistik.',
    'exitIntent.button': 'Download guiden gratis',
    'exitIntent.bullet1': '10 kapitler, der dækker hvert trin i OEM-produktionen',
    'exitIntent.bullet2': 'Inkluderer tjekliste til fabriksaudit og NDA-skabeloner',
    'exitIntent.bullet3': 'Ægte casestudier af brandlanceringer, med budgetter',
    'exitIntent.dismiss': 'Nej tak, jeg fortsætter med at udforske sitet',
    'exitIntent.close': 'Luk',
  },
  fi: {
    'exitIntent.title': 'Ennen kuin lähdet — Lataa OEM-oppaamme',
    'exitIntent.subtitle':
      'Opi, miten käynnistät oman private label SUP-merkkisi brändin valmistusaiheisen white paperin avulla. 42 sivua muottien suunnittelusta, laadunvalvonnasta, vaatimustenmukaisuudesta ja logistiikasta.',
    'exitIntent.button': 'Lataa ilmainen opas',
    'exitIntent.bullet1': '10 lukua, jotka kattavat OEM-valmistuksen jokaisen vaiheen',
    'exitIntent.bullet2': 'Sisältää tehtaan auditoinnin tarkistuslistan ja NDA-mallipohjat',
    'exitIntent.bullet3': 'Aitoja tapaustutkimuksia brändien lanseerauksista budjetteineen',
    'exitIntent.dismiss': 'Ei kiitos, jatkan sivuston selailua',
    'exitIntent.close': 'Sulje',
  },
  pl: {
    'exitIntent.title': 'Zanim wyjdziesz — Pobierz nasz przewodnik OEM',
    'exitIntent.subtitle':
      'Dowiedz się, jak wprowadzić na rynek własną markę desek SUP (private label), korzystając z naszego kompletnego white paper o produkcji. 42 strony obejmujące projektowanie form, kontrolę jakości, zgodność i logistykę.',
    'exitIntent.button': 'Pobierz darmowy przewodnik',
    'exitIntent.bullet1': '10 rozdziałów obejmujących każdy etap produkcji OEM',
    'exitIntent.bullet2': 'W zestawie lista kontrolna audytu fabryki i wzory NDA',
    'exitIntent.bullet3': 'Realne studia przypadków wprowadzenia marek, wraz z budżetami',
    'exitIntent.dismiss': 'Nie, dziękuję, będę dalej przeglądać stronę',
    'exitIntent.close': 'Zamknij',
  },
  cs: {
    'exitIntent.title': 'Než odejdete — Stáhněte si naši příručku OEM',
    'exitIntent.subtitle':
      'Zjistěte, jak uvést na trh vlastní značku SUP pod privátní značkou, díky našemu kompletnímu white paperu o výrobě. 42 stran věnujících se návrhu forem, kontrole kvality, shodě a logistice.',
    'exitIntent.button': 'Stáhnout příručku zdarma',
    'exitIntent.bullet1': '10 kapitol pokrývajících všechny fáze výroby OEM',
    'exitIntent.bullet2': 'Zahrnuje kontrolní seznam auditu továrny a šablony NDA',
    'exitIntent.bullet3': 'Skutečné případové studie uvádění značek na trh včetně rozpočtů',
    'exitIntent.dismiss': 'Ne, děkuji, budu stránky dál prozkoumávat',
    'exitIntent.close': 'Zavřít',
  },
  ro: {
    'exitIntent.title': 'Înainte de a pleca — Descărcați ghidul nostru OEM',
    'exitIntent.subtitle':
      'Aflați cum să vă lansați marca de SUP private label cu white paper-ul nostru complet despre producție. 42 de pagini despre proiectarea matrițelor, controlul calității, conformitate și logistică.',
    'exitIntent.button': 'Descarcă ghidul gratuit',
    'exitIntent.bullet1': '10 capitole care acoperă fiecare etapă a producției OEM',
    'exitIntent.bullet2': 'Include checklist de audit de fabrică și șabloane NDA',
    'exitIntent.bullet3': 'Studii de caz reale de lansare de branduri, cu bugete',
    'exitIntent.dismiss': 'Nu, mulțumesc, continui să explorez site-ul',
    'exitIntent.close': 'Închide',
  },
  el: {
    'exitIntent.title': 'Πριν φύγετε — Κατεβάστε τον οδηγό μας OEM',
    'exitIntent.subtitle':
      'Μάθετε πώς να λανσάρετε τη δική σας ιδιωτική επωνυμία SUP με το πλήρες white paper παραγωγής μας. 42 σελίδες για τη σχεδίαση καλουπιών, τον έλεγχο ποιότητας, τη συμμόρφωση και τη λογιστική.',
    'exitIntent.button': 'Λήψη δωρεάν οδηγού',
    'exitIntent.bullet1': '10 κεφάλαια που καλύπτουν κάθε στάδιο της παραγωγής OEM',
    'exitIntent.bullet2': 'Περιλαμβάνει λίστα ελέγχου εργοστασιακού audit και πρότυπα NDA',
    'exitIntent.bullet3': 'Πραγματικά case studies λανσαρισμάτων επωνυμιών, με προϋπολογισμούς',
    'exitIntent.dismiss': 'Όχι ευχαριστώ, θα συνεχίσω να περιηγούμαι στον ιστότοπο',
    'exitIntent.close': 'Κλείσιμο',
  },
  tr: {
    'exitIntent.title': 'Gitmeden önce — OEM rehberimizi indirin',
    'exitIntent.subtitle':
      'Üretim üzerine kapsamlı white paper rehberimizle kendi private label SUP markanızı nasıl kuracağınızı öğrenin. Kalıp tasarımı, kalite kontrol, uygunluk ve lojistiği kapsayan 42 sayfa.',
    'exitIntent.button': 'Ücretsiz rehberi indir',
    'exitIntent.bullet1': 'OEM üretiminin her aşamasını kapsayan 10 bölüm',
    'exitIntent.bullet2': 'Fabrika denetim kontrol listesi ve NDA şablonları dahil',
    'exitIntent.bullet3': 'Bütçeleriyle gerçek marka lansmanı vaka çalışmaları',
    'exitIntent.dismiss': 'Hayır teşekkürler, siteyi keşfetmeye devam edeceğim',
    'exitIntent.close': 'Kapat',
  },
  ru: {
    'exitIntent.title': 'Прежде чем уйти — скачайте наше руководство OEM',
    'exitIntent.subtitle':
      'Узнайте, как запустить собственный бренд SUP-досок под вашей торговой маркой, с нашим полным white paper о производстве. 42 страницы: проектирование пресс-форм, контроль качества, соответствие стандартам и логистика.',
    'exitIntent.button': 'Скачать руководство бесплатно',
    'exitIntent.bullet1': '10 глав, охватывающих все этапы OEM-производства',
    'exitIntent.bullet2': 'Включен чек-лист аудита завода и шаблоны NDA',
    'exitIntent.bullet3': 'Реальные кейсы запуска брендов с бюджетами',
    'exitIntent.dismiss': 'Нет, спасибо, я продолжу изучать сайт',
    'exitIntent.close': 'Закрыть',
  },
  ar: {
    'exitIntent.title': 'قبل أن تغادر — حمّل دليلنا OEM',
    'exitIntent.subtitle':
      'تعرّف على كيفية إطلاق علامتك التجارية الخاصة لألواح SUP مع كتابنا الأبيض الشامل عن التصنيع. 42 صفحة تغطي تصميم القوالب وضبط الجودة والمطابقة والخدمات اللوجستية.',
    'exitIntent.button': 'حمّل الدليل مجانًا',
    'exitIntent.bullet1': '10 فصول تغطي كل مرحلة من مراحل إنتاج OEM',
    'exitIntent.bullet2': 'تشمل قائمة التحقق لتدقيق المصنع ونماذج اتفاقية عدم الإفصاح (NDA)',
    'exitIntent.bullet3': 'دراسات حالة حقيقية لإطلاق العلامات التجارية مع الميزانيات',
    'exitIntent.dismiss': 'لا شكرًا، سأواصل استكشاف الموقع',
    'exitIntent.close': 'إغلاق',
  },
  ja: {
    'exitIntent.title': 'その前に — OEMガイドを無料ダウンロード',
    'exitIntent.subtitle':
      'OEM製造に関する完全ホワイトペーパーで、プライベートブランドのSUPブランドを立ち上げる方法を解説。金型設計、品質管理、コンプライアンス、物流を網羅する42ページ。',
    'exitIntent.button': '無料ガイドをダウンロード',
    'exitIntent.bullet1': 'OEM生産の全工程を網羅する10章構成',
    'exitIntent.bullet2': '工場監査チェックリストとNDAテンプレートを収録',
    'exitIntent.bullet3': '予算付きの実際のブランド立ち上げ事例集',
    'exitIntent.dismiss': '結構です、サイトを見続けます',
    'exitIntent.close': '閉じる',
  },
  ko: {
    'exitIntent.title': '가기 전에 — OEM 가이드 무료 다운로드',
    'exitIntent.subtitle':
      '포괄적인 제조 백서로 프라이빗 레이블 SUP 브랜드를 론칭하는 방법을 알아보세요. 금형 설계, 품질 관리, 인증 컴플라이언스, 물류를 다루는 42페이지 분량입니다.',
    'exitIntent.button': '무료 가이드 다운로드',
    'exitIntent.bullet1': 'OEM 생산의 모든 단계를 다루는 10개 장',
    'exitIntent.bullet2': '공장 감사 체크리스트 및 NDA 템플릿 포함',
    'exitIntent.bullet3': '예산을 포함한 실제 브랜드 론칭 사례 연구',
    'exitIntent.dismiss': '괜찮습니다, 사이트를 계속 둘러볼게요',
    'exitIntent.close': '닫기',
  },
  th: {
    'exitIntent.title': 'ก่อนออกจากหน้านี้ — ดาวน์โหลดคู่มือ OEM ของเรา',
    'exitIntent.subtitle':
      'เรียนรู้วิธีเปิดตัวแบรนด์ SUP ของคุณเองด้วย white paper การผลิตฉบับสมบูรณ์ของเรา 42 หน้า ครอบคลุมการออกแบบแม่พิมพ์ การควบคุมคุณภาพ การปฏิบัติตามมาตรฐาน และการโลจิสติกส์',
    'exitIntent.button': 'ดาวน์โหลดคู่มือฟรี',
    'exitIntent.bullet1': '10 บทที่ครอบคลุมทุกขั้นตอนของการผลิต OEM',
    'exitIntent.bullet2': 'รวมเช็กลิสต์การตรวจโรงงานและเทมเพลต NDA',
    'exitIntent.bullet3': 'กรณีศึกษาการเปิดตัวแบรนด์จริง พร้อมงบประมาณ',
    'exitIntent.dismiss': 'ไม่เป็นไร ขอเดินชมเว็บไซต์ต่อ',
    'exitIntent.close': 'ปิด',
  },
};

const LANGS = Object.keys(TR);

const mode = process.argv[2];
if (mode === '--en') {
  const data = JSON.parse(fs.readFileSync(CONFIG, 'utf8'));
  let added = 0;
  for (const [k, v] of Object.entries(EN)) {
    if (data.en[k] === undefined) {
      data.en[k] = v;
      added++;
    }
  }
  fs.writeFileSync(CONFIG, JSON.stringify(data, null, 2), 'utf8');
  console.log(`EN keys added: ${added} (total en keys: ${Object.keys(data.en).length})`);
  process.exit(0);
}

const dry = mode === '--dry';
if (!dry && mode !== '--patch') {
  console.error('用法: node _patch-exitintent.cjs --en | --dry | --patch');
  process.exit(1);
}

let failed = false;
for (const lang of LANGS) {
  const file = path.join(__dirname, `_lang-${lang}.cjs`);
  const src = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
  const existing = src ? require(file) : {};
  const todo = Object.entries(TR[lang]).filter(([k]) => !(k in existing));
  if (todo.length === 0) {
    console.log(`[${lang}] all 8 keys already present (skipped)`);
    continue;
  }
  // 校验键集与 EN 完全一致
  const keyDiff = Object.keys(TR[lang]).filter((k) => !(k in EN));
  if (keyDiff.length > 0) {
    console.error(`[${lang}] FAIL: unknown keys vs EN: ${keyDiff.join(', ')}`);
    failed = true;
    continue;
  }
  // 追加到 module.exports 对象末尾（幂等：只补缺的键）；文件不存在则新建标准骨架
  const lines = todo.map(([k, v]) => `  '${k}': '${String(v).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}',`);
  const insert = '\n' + lines.join('\n');
  if (!src) {
    const body = `// ${lang} UI 字符串键值数据（扁平 "path.to.key": "译文"）。\nmodule.exports = {${insert}\n};\n`;
    if (!dry) {
      fs.writeFileSync(file, body, 'utf8');
    }
    console.log(`[${lang}] ${dry ? '[dry] ' : ''}created new file with ${todo.length} keys`);
    continue;
  }
  const lastBrace = src.lastIndexOf('};');
  if (lastBrace === -1) {
    console.error(`[${lang}] FAIL: cannot find closing '};' in _lang-${lang}.cjs`);
    failed = true;
    continue;
  }
  if (!dry) {
    fs.writeFileSync(file, src.slice(0, lastBrace) + insert + '\n' + src.slice(lastBrace), 'utf8');
  }
  console.log(`[${lang}] ${dry ? '[dry] ' : ''}appended ${todo.length} keys: ${todo.map(([k]) => k).join(', ')}`);
}
console.log(`DONE: ${dry ? 'dry run' : 'patch applied'}`);
process.exit(failed ? 1 : 0);
