const fs = require('fs');

const P = 'src/data/site/i18n-config.json';
const j = JSON.parse(fs.readFileSync(P, 'utf8'));

const KEYS = {
  'solutions.challengeSubtitle': {
    en: 'Four challenges your business faces — and how Afarer solves each one.',
    ar: 'أربعة تحديات تواجهها شركتك — وكيف يحلها Afarer واحدة تلو الأخرى.',
    cs: 'Čtyři výzvy, kterým vaše firma čelí — a jak je Afarer řeší jednu po druhé.',
    da: 'Fire udfordringer, din virksomhed står over for — og hvordan Afarer løser dem én for én.',
    de: 'Vier Herausforderungen, denen Ihr Unternehmen gegenübersteht — und wie Afarer jede einzelne löst.',
    el: 'Τέσσερις προκλήσεις που αντιμετωπίζει η επιχείρησή σας — και πώς η Afarer επιλύει την καθεμία.',
    es: 'Cuatro desafíos a los que se enfrenta tu empresa — y cómo Afarer resuelve cada uno.',
    fi: 'Neljä haastetta, joita yrityksesi kohtaa — ja miten Afarer ratkaisee jokaisen.',
    fr: 'Quatre défis auxquels votre entreprise est confrontée — et comment Afarer les résout.',
    it: 'Quattro sfide che la tua azienda deve affrontare — e come Afarer risolve ciascuna.',
    ja: '企業が直面する4つの課題と、Afarerがそれらを一つずつ解決する方法をご紹介します。',
    ko: '비즈니스가 직면한 네 가지 과제와 Afarer가 각각을 해결하는 방법을 확인하세요.',
    nl: 'Vier uitdagingen waar uw bedrijf voor staat — en hoe Afarer ze één voor één oplost.',
    no: 'Fire utfordringer bedriften din står overfor — og hvordan Afarer løser dem én etter én.',
    pl: 'Cztery wyzwania, przed którymi stoi Twoja firma — i jak Afarer rozwiązuje każde z nich.',
    pt: 'Quatro desafios que a sua empresa enfrenta — e como a Afarer resolve cada um.',
    ro: 'Patru provocări cu care se confruntă compania dumneavoastră — și cum le rezolvă Afarer pe fiecare.',
    ru: 'Четыре задачи, стоящие перед вашим бизнесом, — и как Afarer решает каждую из них.',
    sv: 'Fyra utmaningar ditt företag står inför — och hur Afarer löser dem en i taget.',
    th: 'สี่ความท้าทายที่ธุรกิจของคุณเผชิญ และ Afarer แก้ไขแต่ละอย่างอย่างไร',
    tr: "İşletmenizin karşılaştığı dört zorluk — ve Afarer'ın her birini nasıl çözdüğü.",
  },
  'solutions.solutionsSubtitle': {
    en: 'Proven manufacturing solutions designed for your business.',
    ar: 'حلول تصنيع مثبتة مصممة لتناسب شركتك.',
    cs: 'Ověřená výrobní řešení navržená pro vaši firmu.',
    da: 'Beviste produktionsløsninger designet til din virksomhed.',
    de: 'Bewährte Fertigungslösungen, maßgeschneidert für Ihr Unternehmen.',
    el: 'Αποδεδειγμένες λύσεις παραγωγής σχεδιασμένες για την επιχείρησή σας.',
    es: 'Soluciones de fabricación probadas diseñadas para tu empresa.',
    fi: 'Todistetut valmistusratkaisut yrityksesi tarpeisiin.',
    fr: 'Des solutions de fabrication éprouvées, conçues pour votre entreprise.',
    it: 'Soluzioni di produzione collaudate, progettate per la tua azienda.',
    ja: 'お客様のビジネスのために設計された、実績ある製造ソリューション。',
    ko: '비즈니스를 위해 설계된 검증된 제조 솔루션입니다.',
    nl: 'Bewezen productieoplossingen, ontworpen voor uw bedrijf.',
    no: 'Beviste produksjonsløsninger designet for din bedrift.',
    pl: 'Sprawdzone rozwiązania produkcyjne zaprojektowane dla Twojej firmy.',
    pt: 'Soluções de fabricação comprovadas, desenhadas para a sua empresa.',
    ro: 'Soluții de producție dovedite, proiectate pentru compania dumneavoastră.',
    ru: 'Проверенные производственные решения, разработанные для вашего бизнеса.',
    sv: 'Beprövade tillverkningslösningar utformade för ditt företag.',
    th: 'โซลูชันการผลิตที่พิสูจน์แล้วซึ่งออกแบบมาเพื่อธุรกิจของคุณ',
    tr: 'İşletmeniz için tasarlanmış, kanıtlanmış üretim çözümleri.',
  },
  'solutions.whyTitle': {
    en: 'Trusted by brands worldwide for a decade.',
    ar: 'تثق بها العلامات التجارية حول العالم منذ عقد كامل.',
    cs: 'Značky po celém světě nám důvěřují již deset let.',
    da: 'Betroet af brands verden over i et årti.',
    de: 'Seit einem Jahrzehnt weltweites Vertrauen der Marken.',
    el: 'Η εμπιστοσύνη των brands παγκοσμίως για μια δεκαετία.',
    es: 'La confianza de marcas de todo el mundo durante una década.',
    fi: 'Maailman brändien luottamus jo vuosikymmenen ajan.',
    fr: 'La confiance des marques du monde entier depuis dix ans.',
    it: 'La fiducia dei brand di tutto il mondo da un decennio.',
    ja: '10年にわたり世界中のブランドから信頼されています。',
    ko: '10년 동안 전 세계 브랜드의 신뢰를 받아왔습니다.',
    nl: 'Al tien jaar het vertrouwen van merken wereldwijd.',
    no: 'Betrodd av merkevarer verden over i et tiår.',
    pl: 'Od dekady zaufane przez marki na całym świecie.',
    pt: 'A confiança das marcas de todo o mundo há uma década.',
    ro: 'Încrederea mărcilor din întreaga lume de un deceniu.',
    ru: 'Вот уже десятилетие нам доверяют бренды по всему миру.',
    sv: 'Betrodda av varumärken världen över i ett decennium.',
    th: 'ได้รับความไว้วางใจจากแบรนด์ทั่วโลกมานานหนึ่งทศวรรษ',
    tr: 'On yıldır dünya genelindeki markaların güveni.',
  },
};

const locales = Object.keys(j).filter((k) => typeof j[k] === 'object' && k !== 'en');
let added = 0;
for (const [key, vals] of Object.entries(KEYS)) {
  for (const l of locales) {
    if (j[l][key] === undefined) {
      j[l][key] = vals[l];
      added++;
    } else console.log('SKIP exists: ' + l + '.' + key);
  }
  if (j.en[key] === undefined) j.en[key] = vals.en;
}
fs.writeFileSync(P, JSON.stringify(j, null, 2) + '\n');
console.log('added ' + added + ' entries; locales: ' + locales.length);
