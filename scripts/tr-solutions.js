// @ts-nocheck
const { mkdirSync, writeFileSync, readFileSync } = require('fs');
const { resolve } = require('path');
const yaml = require('js-yaml');

const ROOT = 'C:/official/src/data/pages';
const LOCS = ['zh','de','fr','es','pt','it','nl','sv','no','da','fi','el','cs','pl','ro','ru','tr','th','ja','ko','ar'];

function read(src) {
  return yaml.load(readFileSync(resolve(ROOT, src), 'utf-8'));
}

function write(loc, name, data) {
  const d = resolve(ROOT, loc);
  mkdirSync(d, { recursive: true });
  writeFileSync(resolve(d, name + '.yaml'), yaml.dump(data, { lineWidth: 200, noRefs: true, quotingType: "'" }), 'utf-8');
  console.log('  wrote', loc + '/' + name + '.yaml');
}

// Read English sources
const EN = {};
const PAGES = ['solutions-diving-center-boats','solutions-fishing-boat-solutions','solutions-marine-tourism-equipment','solutions-rescue-watercraft','solutions-yacht-tender-solutions'];
for (const name of PAGES) EN[name] = read(name + '.yaml');

// Build full YAML from dot-notation overrides
function buildYaml(t, en) {
  const out = JSON.parse(JSON.stringify(en));
  for (const [k, v] of Object.entries(t)) {
    const parts = k.split('.');
    let cur = out;
    for (let i = 0; i < parts.length - 1; i++) {
      const idx = parts[i].match(/\[(\d+)\]$/);
      if (idx) {
        const base = parts[i].replace(/\[\d+\]$/, '');
        if (cur[base] === undefined) cur[base] = [];
        cur = cur[base][parseInt(idx[1])];
      } else {
        if (cur[parts[i]] === undefined) cur[parts[i]] = {};
        cur = cur[parts[i]];
      }
    }
    const last = parts[parts.length - 1];
    const idx = last.match(/\[(\d+)\]$/);
    if (idx) {
      const base = last.replace(/\[\d+\]$/, '');
      cur[base][parseInt(idx[1])] = v;
    } else {
      cur[last] = v;
    }
  }
  return out;
}

// ============================================================
// TRANSLATION DATA
// ============================================================
// Format: per page, per locale, dot-notation path -> translated string
// Empty = use English source as-is

const T = {};

function t(page, loc, fields) {
  (T[page] ??= {})[loc] = fields;
}

// ======================== DIVING ========================
const D = 'solutions-diving-center-boats';

t(D, 'zh', {
  'hero.tagline':'娼滄按杩愯惀','hero.title':'娼滄按涓績涓撶敤RIB鑹?br />& 鍟嗕笟娼滄按杩愯惀','hero.subtitle':'绋冲畾銆佸鏁炵殑骞冲彴锛屼究浜庤繘鍑衡€斺€旈厤澶囪澶囧瓨鍌ㄣ€佹綔姘村憳鍙嬪ソ甯冨眬鍜屽彲闈犳€ц兘銆?,'hero.image.alt':'afarer RIB鑹団€斺€斾笓涓烘綔姘翠腑蹇冨拰鍟嗕笟娼滄按杩愯惀閰嶇疆',
  'stats.title':'鐑棬娼滄按RIB鍨嬪彿',
  'content_challenge.tagline':'鎸戞垬','content_challenge.title':'涓轰綍娼滄按涓績闇€瑕?br />涓撶敤鑸硅墖','content_challenge.subtitle':'娼滄按杩愯惀瀵硅埞鑹囨彁鍑虹嫭鐗硅姹傗€斺€旈€氱敤鑸硅墖寰€寰€鏃犳硶婊¤冻銆?,
  'content_challenge.paragraphs[0]':'娼滄按鑸归渶瑕佸湪闈欐鏃朵繚鎸佺ǔ瀹氾紝纭繚瀹夊叏鐨勮繘鍑猴紝灏ゅ叾鏄綋娼滄按鍛樿儗璐熼噸鍨嬭澶囨椂銆傜嫮绐勬垨涓嶇ǔ瀹氱殑骞冲彴浼氶€犳垚瀹夊叏椋庨櫓骞堕檺鍒惰繍钀ヨ兘鍔涖€?,
  'content_challenge.paragraphs[1]':'瑁呭瀛樺偍鏄彟涓€涓叧閿洜绱犮€傛皵鐡躲€侀厤閲嶃€佹綔姘磋澶囧拰瀹夊叏璁惧闇€瑕佷笓鐢ㄣ€佹湁搴忕殑瀛樺偍绌洪棿锛屼繚鎸佺敳鏉挎暣娲佷笖鏄撲簬鍙栫敤銆?,
  'content_challenge.paragraphs[2]':'鍙戝姩鏈哄彲闈犳€т笉瀹瑰Ε鍗忋€傚綋娼滄按鍛樺湪姘翠腑鏃讹紝鑸硅墖闇€瑕侀殢鏃跺噯澶囩Щ鍔ㄣ€傚弻鏈洪厤缃€氬父鏇村彈闈掔潗浠ユ彁渚涘啑浣欍€?,
  'content_challenge.paragraphs[3]':'afarer 閫氳繃涓撶敤璁捐鐨凴IB閰嶇疆婊¤冻杩欎簺闇€姹傗€斺€旂ǔ瀹氱殑娣盫鑸逛綋銆佸闃旂殑鐧昏埞姘旂銆侀泦鎴愭皵鐡跺瓨鍌ㄤ互鍙婇拡瀵规綔姘磋繍钀ヤ紭鍖栫殑鍙戝姩鏈洪€夐」銆?,
  'content_solution.tagline':'鎴戜滑鐨勬柟妗?,'content_solution.title':'涓烘綔姘磋繍钀ラ噺韬厤缃?,'content_solution.subtitle':'姣忚墭 afarer 娼滄按 RIB 閮藉洿缁曞晢涓氬拰浼戦棽娼滄按杩愯惀鐨勭壒瀹氶渶姹傛墦閫犮€?,
  'content_solution.list[0]':'瀹戒綋 Hypalon 鎴?PVC 姘旂锛屾彁渚涚ǔ瀹氱殑鐧昏埞骞冲彴鈥斺€旀綔姘村憳鑷俊杩涘嚭',
  'content_solution.list[1]':'闆嗘垚姘旂摱瀛樺偍鏋垛€斺€斾繚鎸佷綆閲嶅績鍜岀敳鏉挎暣娲?,
  'content_solution.list[2]':'鎺у埗鍙颁綅缃紭鍖栵紝纭繚娓呮櫚瑙傚療姘翠腑娼滄按鍛?,
  'content_solution.list[3]':'鍙€夋綔姘存锛屼究浜庨噸鏂扮櫥鑸?,
  'content_solution.list[4]':'鍙戝姩鏈洪€夐」浠?40 HP 鍒?115 HP鈥斺€斿崟鏈烘垨鍙屾満閰嶇疆',
  'content_solution.list[5]':'璁惧瀹夎鏉匡紝鐢ㄤ簬澹扮撼銆丟PS 鍜岄€氫俊璁惧',
  'content_solution.list[6]':'鐕冩补瀹归噺鏍规嵁杩愯惀鑸▼闇€姹傚尮閰?,
  'content_models.tagline':'鎺ㄨ崘鍨嬪彿','content_models.title':'娼滄按RIB閰嶇疆','content_models.subtitle':'鎴戜滑鏈€鍙楁杩庣殑娼滄按RIB鍨嬪彿鈥斺€斿潎鍙畾鍒堕厤缃€?,
  'content_models.items[0].title':'RIB 500 Diver','content_models.items[0].description':'5.0绫崇幓鐠冮挗RIB锛岄厤澶囨綔姘存銆佹皵鐡舵灦鍜?0 HP鑸峰鏈恒€傞€傚悎灏忓洟闃熷拰閬斀姘村煙杩愯惀銆傚閲忥細8浜恒€?,
  'content_models.items[1].title':'RIB 520 Diver','content_models.items[1].description':'5.2绫砇IB锛屽寮虹ǔ瀹氭€э紝缁埅娌圭锛?0 HP鍙戝姩鏈恒€傞€傚悎娌挎捣娼滄按涓績銆傚閲忥細10浜恒€?,
  'content_models.items[2].title':'RIB 580 Diver Pro','content_models.items[2].description':'5.8绫抽噸鍨婻IB锛屽彲閫夊弻鍙戝姩鏈猴紝闆嗘垚娼滄按骞冲彴锛屽叏濂楀鑸澶囥€傚閲忥細12浜恒€?,
  'cta.title':'閰嶇疆鎮ㄧ殑娼滄按RIB','cta.subtitle':'鍛婅瘔鎴戜滑鎮ㄧ殑娼滄按鍛樻暟閲忋€佽繍钀ユ按鍩熷拰鍋忓ソ鍙戝姩鏈衡€斺€旀垜浠皢鎺ㄨ崘鏈€浣抽厤缃€?,
  'cta.actions[0].text':'閰嶇疆鎮ㄧ殑鑸硅墖','cta.actions[1].text':'鏌ョ湅鍏ㄩ儴RIB鍨嬪彿',
});

t(D, 'de', {
  'hero.tagline':'Tauchbetrieb','hero.title':'RIB-Boote f眉r Tauchcenter<br />& gewerbliche Tauchg盲nge','hero.subtitle':'Stabile, ger盲umige Plattformen f眉r einfachen Ein- und Ausstieg –mit Ausr眉stungsaufbewahrung, taucherfreundlicher Anordnung und zuverl盲ssiger Leistung.','hero.image.alt':'afarer RIB-Boot f眉r Tauchcenter und gewerbliche Tauchg盲nge konfiguriert',
  'stats.title':'Beliebte Tauch-RIB-Modelle',
  'content_challenge.tagline':'Die Herausforderung','content_challenge.title':'Warum Tauchcenter<br />Spezialboote brauchen','content_challenge.subtitle':'Tauchg盲nge stellen besondere Anforderungen an Wasserfahrzeuge, die Allzweckboote oft nicht erf眉llen.',
  'content_challenge.paragraphs[0]':'Tauchboote ben枚tigen Stabilit盲t im Stillstand f眉r sicheren Ein- und Ausstieg, besonders wenn Taucher schwere Ausr眉stung tragen. Ein schmales oder instabiles Plattform schafft Sicherheitsrisiken und begrenzt die Betriebskapazit盲t.',
  'content_challenge.paragraphs[1]':'Ausr眉stungsaufbewahrung ist ein weiterer kritischer Faktor. Tanks, Gewichte, Tauchausr眉stung und Sicherheitsausr眉stung ben枚tigen spezielle organisierte Lagerung, die das Deck frei und zug盲nglich h盲lt.',
  'content_challenge.paragraphs[2]':'Motorzuverl盲ssigkeit ist nicht verhandelbar. Wenn Taucher im Wasser sind, muss das Boot jederzeit einsatzbereit sein. Doppelmotorkonfigurationen werden oft aus Redundanzgr眉nden bevorzugt.',
  'content_challenge.paragraphs[3]':'afarer erf眉llt diese Anforderungen mit speziell entwickelten RIB-Konfigurationen –stabilen Tief-V-R眉mpfen, breiten Schl盲uchen f眉r das Einsteigen, integrierter Tanklagerung und f眉r Tauchg盲nge optimierten Motoroptionen.',
  'content_solution.tagline':'Unsere L枚sung','content_solution.title':'F眉r Tauchg盲nge konfiguriert','content_solution.subtitle':'Jedes afarer Tauch-RIB ist auf die spezifischen Bed眉rfnisse kommerzieller und Freizeittaucheins盲tze ausgelegt.',
  'content_solution.list[0]':'Breite Hypalon- oder PVC-Schl盲uche als stabile Einstiegsplattform –Taucher steigen sicher ein und aus',
  'content_solution.list[1]':'Integrierte Tanklagerregale –halten das Gewicht niedrig und das Deck frei',
  'content_solution.list[2]':'Konsolenpositionierung f眉r klare Sicht auf Taucher im Wasser',
  'content_solution.list[3]':'Optionale Tauchleiter f眉r einfaches Wiederanbordgehen',
  'content_solution.list[4]':'Motoroptionen von 40 PS bis 115 PS –Einzel- oder Doppelkonfiguration',
  'content_solution.list[5]':'Ger盲tehalterungen f眉r Sonar, GPS und Kommunikationsausr眉stung',
  'content_solution.list[6]':'Tankkapazit盲t an die Betriebsreichweite angepasst',
  'content_models.tagline':'Empfohlene Modelle','content_models.title':'Tauch-RIB-Konfigurationen','content_models.subtitle':'Unsere beliebtesten Tauch-RIB-Modelle –alle mit individueller Konfiguration erh盲ltlich.',
  'content_models.items[0].title':'RIB 500 Taucher','content_models.items[0].description':'5,0m GFK-RIB mit Tauchleiter, Tankregalen und 60 PS Au脽enborder. Ideal f眉r kleine Gruppen und gesch眉tzte Gew盲sser. Kapazit盲t: 8 Personen.',
  'content_models.items[1].title':'RIB 520 Taucher','content_models.items[1].description':'5,2m RIB mit verbesserter Stabilit盲t, gr枚脽erem Tank und 90 PS Motor. Geeignet f眉r K眉stentauchzentren mit mehreren t盲glichen Touren. Kapazit盲t: 10 Personen.',
  'content_models.items[2].title':'RIB 580 Taucher Pro','content_models.items[2].description':'5,8m Schwerlast-RIB mit Doppelmotoroption, integrierter Tauchplattform und voller Navigationsausstattung. F眉r professionelle Tauchg盲nge in exponierten Gew盲ssern. Kapazit盲t: 12 Personen.',
  'cta.title':'Konfigurieren Sie Ihr Tauch-RIB','cta.subtitle':'Teilen Sie uns Ihre Taucherkapazit盲t, Einsatzgew盲sser und bevorzugten Motor mit –wir empfehlen die optimale Konfiguration.',
  'cta.actions[0].text':'Boot konfigurieren','cta.actions[1].text':'Alle RIB-Modelle ansehen',
});

t(D, 'fr', {
  'hero.tagline':'Op茅rations de plong茅e','hero.title':'Bateaux RIB pour centres de plong茅e<br />& op茅rations de plong茅e commerciale','hero.subtitle':'Plateformes stables et spacieuses con莽ues pour un acc猫s facile –avec rangement du mat茅riel, agencements adapt茅s 脿 la plong茅e et performances fiables.','hero.image.alt':'Bateau RIB afarer configur茅 pour centre de plong茅e et op茅rations de plong茅e commerciale',
  'stats.title':'Mod猫les RIB de plong茅e populaires',
  'content_challenge.tagline':'Le d茅fi','content_challenge.title':'Pourquoi les centres de plong茅e<br />ont besoin de bateaux sp茅cialis茅s','content_challenge.subtitle':'Les op茅rations de plong茅e imposent des exigences uniques aux embarcations –des exigences que les bateaux polyvalents ne satisfont souvent pas.',
  'content_challenge.paragraphs[0]':'Les bateaux de plong茅e doivent 锚tre stables au repos pour un embarquement et un d茅barquement s没rs, surtout lorsque les plongeurs sont 茅quip茅s d\'un mat茅riel lourd. Une plateforme 茅troite ou instable cr茅e des risques de s茅curit茅 et limite la capacit茅 op茅rationnelle.',
  'content_challenge.paragraphs[1]':'Le rangement du mat茅riel est un autre facteur critique. Les bouteilles, poids, 茅quipements de plong茅e et mat茅riel de s茅curit茅 n茅cessitent un espace de rangement d茅di茅 qui maintient le pont d茅gag茅 et accessible.',
  'content_challenge.paragraphs[2]':'La fiabilit茅 du moteur est non n茅gociable. Quand des plongeurs sont dans l\'eau, le bateau doit 锚tre pr锚t 脿 se d茅placer 脿 tout moment. Les configurations bimoteurs sont souvent pr茅f茅r茅es pour la redondance.',
  'content_challenge.paragraphs[3]':'afarer r茅pond 脿 ces exigences avec des configurations RIB sp茅cialement con莽ues –coques en V profond stables, larges tubes pour l\'embarquement, rangement int茅gr茅 des bouteilles et options moteur optimis茅es pour les op茅rations de plong茅e.',
  'content_solution.tagline':'Notre solution','content_solution.title':'Configur茅 pour la plong茅e','content_solution.subtitle':'Chaque RIB de plong茅e afarer est construit autour des besoins sp茅cifiques des op茅rations de plong茅e commerciales et r茅cr茅atives.',
  'content_solution.list[0]':'Larges tubes Hypalon ou PVC pour une plateforme d\'embarquement stable –les plongeurs embarquent et d茅barquent en toute confiance',
  'content_solution.list[1]':'R芒teliers 脿 bouteilles int茅gr茅s –maintiennent le poids bas et le pont d茅gag茅',
  'content_solution.list[2]':'Console positionn茅e pour une visibilit茅 claire des plongeurs dans l\'eau',
  'content_solution.list[3]':'脡chelle de plong茅e optionnelle pour remonter facilement',
  'content_solution.list[4]':'Options moteur de 40 CV 脿 115 CV –configuration simple ou bimoteur',
  'content_solution.list[5]':'Plaques de montage pour sonar, GPS et 茅quipements de communication',
  'content_solution.list[6]':'Capacit茅 de carburant adapt茅e aux besoins d\'autonomie op茅rationnelle',
  'content_models.tagline':'Mod猫les recommand茅s','content_models.title':'Configurations RIB de plong茅e','content_models.subtitle':'Nos mod猫les RIB de plong茅e les plus populaires –chacun disponible avec configuration personnalis茅e.',
  'content_models.items[0].title':'RIB 500 Plong茅e','content_models.items[0].description':'RIB 5,0m en fibre de verre avec 茅chelle de plong茅e, r芒teliers 脿 bouteilles et moteur hors-bord 60 CV. Id茅al pour petits groupes et eaux abrit茅es. Capacit茅 : 8 personnes.',
  'content_models.items[1].title':'RIB 520 Plong茅e','content_models.items[1].description':'RIB 5,2m avec stabilit茅 renforc茅e, r茅servoir carburant 茅tendu et moteur 90 CV. Convient aux centres de plong茅e c么tiers. Capacit茅 : 10 personnes.',
  'content_models.items[2].title':'RIB 580 Plong茅e Pro','content_models.items[2].description':'RIB lourd 5,8m avec option bimoteur, plateforme de plong茅e int茅gr茅e et suite de navigation compl猫te. Pour op茅rations professionnelles en eaux expos茅es. Capacit茅 : 12 personnes.',
  'cta.title':'Configurez votre RIB de plong茅e','cta.subtitle':'Dites-nous votre capacit茅 de plongeurs, vos eaux d\'exploitation et votre moteur pr茅f茅r茅 –nous recommanderons la configuration optimale.',
  'cta.actions[0].text':'Configurer votre bateau','cta.actions[1].text':'Voir tous les mod猫les RIB',
});

t(D, 'es', {
  'hero.tagline':'Operaciones de buceo','hero.title':'Barcos RIB para centros de buceo<br />y operaciones de buceo comercial','hero.subtitle':'Plataformas estables y espaciosas dise帽adas para f谩cil entrada y salida –con almacenamiento de equipo, dise帽os adaptados al buceo y rendimiento fiable.','hero.image.alt':'Barco RIB afarer configurado para centro de buceo y operaciones de buceo comercial',
  'stats.title':'Modelos RIB de buceo populares',
  'content_challenge.tagline':'El desaf铆o','content_challenge.title':'Por qu茅 los centros de buceo<br />necesitan barcos especializados','content_challenge.subtitle':'Las operaciones de buceo imponen exigencias 煤nicas a las embarcaciones –requisitos que los barcos polivalentes a menudo no cumplen.',
  'content_challenge.paragraphs[0]':'Los barcos de buceo necesitan estabilidad en reposo para entrada y salida seguras, especialmente cuando los buzos llevan equipo pesado. Una plataforma estrecha o inestable crea riesgos de seguridad y limita la capacidad operativa.',
  'content_challenge.paragraphs[1]':'El almacenamiento de equipo es otro factor cr铆tico. Tanques, pesos, equipo de buceo y seguridad necesitan almacenamiento organizado que mantenga la cubierta despejada y accesible.',
  'content_challenge.paragraphs[2]':'La fiabilidad del motor es innegociable. Cuando hay buzos en el agua, el barco debe estar listo para moverse bajo demanda. Las configuraciones bimotor se prefieren a menudo para redundancia.',
  'content_challenge.paragraphs[3]':'afarer satisface estos requisitos con configuraciones RIB dise帽adas espec铆ficamente –cascos estables en V profunda, tubos anchos para embarque, almacenamiento integrado de tanques y opciones de motor optimizadas para operaciones de buceo.',
  'content_solution.tagline':'Nuestra soluci贸n','content_solution.title':'Configurado para operaciones de buceo','content_solution.subtitle':'Cada RIB de buceo afarer se construye alrededor de las necesidades espec铆ficas de operaciones de buceo comerciales y recreativas.',
  'content_solution.list[0]':'Tubos anchos de Hypalon o PVC para plataforma de embarque estable –los buzos entran y salen con confianza',
  'content_solution.list[1]':'Estanter铆as integradas para almacenamiento de tanques –mantiene el peso bajo y la cubierta despejada',
  'content_solution.list[2]':'Consola posicionada para visibilidad clara de buzos en el agua',
  'content_solution.list[3]':'Escalera de buceo opcional para reembarque f谩cil',
  'content_solution.list[4]':'Opciones de motor de 40 HP a 115 HP –configuraci贸n simple o bimotor',
  'content_solution.list[5]':'Placas de montaje para sonar, GPS y equipo de comunicaci贸n',
  'content_solution.list[6]':'Capacidad de combustible adaptada a los requisitos de autonom铆a operativa',
  'content_models.tagline':'Modelos recomendados','content_models.title':'Configuraciones RIB de buceo','content_models.subtitle':'Nuestros modelos RIB de buceo m谩s populares –cada uno disponible con configuraci贸n personalizada.',
  'content_models.items[0].title':'RIB 500 Buceo','content_models.items[0].description':'RIB 5,0m de fibra de vidrio con escalera de buceo, estantes para tanques y motor fueraborda de 60 HP. Ideal para grupos peque帽os y aguas protegidas. Capacidad: 8 personas.',
  'content_models.items[1].title':'RIB 520 Buceo','content_models.items[1].description':'RIB 5,2m con estabilidad mejorada, dep贸sito de combustible extendido y motor de 90 HP. Adecuado para centros de buceo costeros. Capacidad: 10 personas.',
  'content_models.items[2].title':'RIB 580 Buceo Pro','content_models.items[2].description':'RIB pesado 5,8m con opci贸n bimotor, plataforma de buceo integrada y suite de navegaci贸n completa. Para operaciones profesionales en aguas expuestas. Capacidad: 12 personas.',
  'cta.title':'Configure su RIB de buceo','cta.subtitle':'D铆ganos su capacidad de buzos, aguas de operaci贸n y motor preferido –recomendaremos la configuraci贸n 贸ptima.',
  'cta.actions[0].text':'Configurar su barco','cta.actions[1].text':'Ver todos los modelos RIB',
});

t(D, 'pt', {
  'hero.tagline':'Opera莽玫es de mergulho','hero.title':'Barcos RIB para centros de mergulho<br />e opera莽玫es de mergulho comercial','hero.subtitle':'Plataformas est谩veis e espa莽osas projetadas para f谩cil entrada e sa铆da –com armazenamento de equipamentos, layouts adaptados ao mergulho e desempenho confi谩vel.','hero.image.alt':'Barco RIB afarer configurado para centro de mergulho e opera莽玫es comerciais de mergulho',
  'stats.title':'Modelos RIB de mergulho populares',
  'content_challenge.tagline':'O desafio','content_challenge.title':'Por que centros de mergulho<br />precisam de barcos especializados','content_challenge.subtitle':'Opera莽玫es de mergulho imp玫em exig锚ncias 煤nicas 脿s embarca莽玫es –requisitos que barcos de uso geral muitas vezes n茫o atendem.',
  'content_challenge.paragraphs[0]':'Barcos de mergulho precisam de estabilidade em repouso para entrada e sa铆da seguras, especialmente quando mergulhadores est茫o equipados com equipamento pesado. Uma plataforma estreita ou inst谩vel cria riscos de seguran莽a e limita a capacidade operacional.',
  'content_challenge.paragraphs[1]':'O armazenamento de equipamentos 茅 outro fator cr铆tico. Tanques, pesos, equipamentos de mergulho e seguran莽a precisam de armazenamento organizado que mantenha o conv茅s limpo e acess铆vel.',
  'content_challenge.paragraphs[2]':'A confiabilidade do motor 茅 inegoci谩vel. Quando h谩 mergulhadores na 谩gua, o barco precisa estar pronto para se mover. Configura莽玫es de motor duplo s茫o frequentemente preferidas para redund芒ncia.',
  'content_challenge.paragraphs[3]':'A afarer atende a esses requisitos com configura莽玫es RIB projetadas especificamente –cascos est谩veis em V profundo, tubos largos para embarque, armazenamento integrado de tanques e op莽玫es de motor otimizadas para opera莽玫es de mergulho.',
  'content_solution.tagline':'Nossa solu莽茫o','content_solution.title':'Configurado para opera莽玫es de mergulho','content_solution.subtitle':'Cada RIB de mergulho afarer 茅 constru铆do em torno das necessidades espec铆ficas de opera莽玫es de mergulho comerciais e recreativas.',
  'content_solution.list[0]':'Tubos largos de Hypalon ou PVC para plataforma de embarque est谩vel –mergulhadores entram e saem com confian莽a',
  'content_solution.list[1]':'Prateleiras integradas para armazenamento de tanques –mant茅m o peso baixo e o conv茅s limpo',
  'content_solution.list[2]':'Console posicionado para visibilidade clara dos mergulhadores na 谩gua',
  'content_solution.list[3]':'Escada de mergulho opcional para reembarque f谩cil',
  'content_solution.list[4]':'Op莽玫es de motor de 40 HP a 115 HP –configura莽茫o simples ou dupla',
  'content_solution.list[5]':'Placas de montagem para sonar, GPS e equipamentos de comunica莽茫o',
  'content_solution.list[6]':'Capacidade de combust铆vel adaptada aos requisitos de autonomia operacional',
  'content_models.tagline':'Modelos recomendados','content_models.title':'Configura莽玫es RIB de mergulho','content_models.subtitle':'Nossos modelos RIB de mergulho mais populares –cada um dispon铆vel com configura莽茫o personalizada.',
  'content_models.items[0].title':'RIB 500 Mergulho','content_models.items[0].description':'RIB 5,0m em fibra de vidro com escada de mergulho, estantes para tanques e motor de popa 60 HP. Ideal para grupos pequenos e 谩guas abrigadas. Capacidade: 8 pessoas.',
  'content_models.items[1].title':'RIB 520 Mergulho','content_models.items[1].description':'RIB 5,2m com estabilidade aprimorada, tanque de combust铆vel estendido e motor 90 HP. Adequado para centros de mergulho costeiros. Capacidade: 10 pessoas.',
  'content_models.items[2].title':'RIB 580 Mergulho Pro','content_models.items[2].description':'RIB pesado 5,8m com op莽茫o de motor duplo, plataforma de mergulho integrada e su铆te de navega莽茫o completa. Para opera莽玫es profissionais em 谩guas expostas. Capacidade: 12 pessoas.',
  'cta.title':'Configure seu RIB de mergulho','cta.subtitle':'Informe sua capacidade de mergulhadores, 谩guas de opera莽茫o e motor preferido –recomendaremos a configura莽茫o ideal.',
  'cta.actions[0].text':'Configurar seu barco','cta.actions[1].text':'Ver todos os modelos RIB',
});

t(D, 'it', {
  'hero.tagline':'Operazioni subacquee','hero.title':'Gommoni RIB per centri sub<br />e operazioni di immersione commerciale','hero.subtitle':'Piattaforme stabili e spaziose progettate per facile entrata e uscita –con vani portaattrezzatura, layout adatti ai sub e prestazioni affidabili.','hero.image.alt':'Gommone RIB afarer configurato per centro sub e operazioni di immersione commerciale',
  'stats.title':'Modelli RIB sub pi霉 popolari',
  'content_challenge.tagline':'La sfida','content_challenge.title':'Perch茅 i centri sub<br />hanno bisogno di barche dedicate','content_challenge.subtitle':'Le operazioni subacquee impongono esigenze uniche alle imbarcazioni –requisiti che le barche polivalenti spesso non soddisfano.',
  'content_challenge.paragraphs[0]':'Le barche da immersione necessitano di stabilit脿 a riposo per entrata e uscita sicure, specialmente quando i sub sono equipaggiati con attrezzatura pesante. Una piattaforma stretta o instabile crea rischi per la sicurezza e limita la capacit脿 operativa.',
  'content_challenge.paragraphs[1]':'Lo stivaggio dell\'attrezzatura 猫 un altro fattore critico. Bombole, zavorre, attrezzatura sub e dispositivi di sicurezza necessitano di spazio dedicato che mantenga il ponte libero e accessibile.',
  'content_challenge.paragraphs[2]':'L\'affidabilit脿 del motore 猫 non negoziabile. Quando ci sono sub in acqua, l\'imbarcazione deve essere pronta a muoversi. Le configurazioni bimotore sono spesso preferite per la ridondanza.',
  'content_challenge.paragraphs[3]':'afarer soddisfa questi requisiti con configurazioni RIB progettate appositamente –scafi stabili a V profondo, tubolari larghi per l\'imbarco, stivaggio integrato delle bombole e opzioni motore ottimizzate per operazioni subacquee.',
  'content_solution.tagline':'La nostra soluzione','content_solution.title':'Configurato per immersioni','content_solution.subtitle':'Ogni RIB da immersione afarer 猫 costruito attorno alle esigenze specifiche delle operazioni subacquee commerciali e ricreative.',
  'content_solution.list[0]':'Tubolari larghi in Hypalon o PVC per piattaforma d\'imbarco stabile –i sub entrano ed escono in sicurezza',
  'content_solution.list[1]':'Rastrelliere integrate per bombole –mantengono il peso basso e il ponte libero',
  'content_solution.list[2]':'Console posizionata per visibilit脿 chiara dei sub in acqua',
  'content_solution.list[3]':'Scaletta sub opzionale per facile reimbarco',
  'content_solution.list[4]':'Opzioni motore da 40 HP a 115 HP –configurazione singola o bimotore',
  'content_solution.list[5]':'Piastre di montaggio per sonar, GPS e apparecchiature di comunicazione',
  'content_solution.list[6]':'Capacit脿 carburante adattata ai requisiti di autonomia operativa',
  'content_models.tagline':'Modelli raccomandati','content_models.title':'Configurazioni RIB sub','content_models.subtitle':'I nostri modelli RIB da immersione pi霉 popolari –ciascuno disponibile con configurazione personalizzata.',
  'content_models.items[0].title':'RIB 500 Sub','content_models.items[0].description':'RIB 5,0m in vetroresina con scaletta sub, rastrelliere bombole e motore fuoribordo 60 HP. Ideale per piccoli gruppi e acque riparate. Capacit脿: 8 persone.',
  'content_models.items[1].title':'RIB 520 Sub','content_models.items[1].description':'RIB 5,2m con stabilit脿 migliorata, serbatoio carburante esteso e motore 90 HP. Adatto per centri sub costieri. Capacit脿: 10 persone.',
  'content_models.items[2].title':'RIB 580 Sub Pro','content_models.items[2].description':'RIB pesante 5,8m con opzione bimotore, piattaforma sub integrata e suite di navigazione completa. Per operazioni professionali in acque esposte. Capacit脿: 12 persone.',
  'cta.title':'Configura il tuo RIB da immersione','cta.subtitle':'Comunicaci la tua capacit脿 sub, le acque di operazione e il motore preferito –ti raccomanderemo la configurazione ottimale.',
  'cta.actions[0].text':'Configura la tua barca','cta.actions[1].text':'Vedi tutti i modelli RIB',
});

// ======================== FISHING ========================
const F = 'solutions-fishing-boat-solutions';
t(F, 'zh', {
  'hero.tagline':'娓斾笟杩愯惀','hero.title':'鍏呮皵鑸瑰拰RIB鑹?br />涓烘笖涓氫笓涓氫汉澹墦閫?,'hero.subtitle':'绋冲畾銆佺渷娌广€佽€愮敤鈥斺€擜quafarer 閽撻奔鑸逛笓涓哄晢涓氬拰浼戦棽閽撻奔搴旂敤涓殑闀挎椂闂存按涓婁綔涓氳€岃璁°€?,'hero.image.alt':'afarer 鍏呮皵鑸逛笓涓烘笖涓氳繍钀ラ厤缃?,
  'stats.title':'鎺ㄨ崘閽撻奔鍨嬪彿',
  'content_challenge.tagline':'鎸戞垬','content_challenge.title':'閽撻奔鑸归渶瑕?br />绋冲畾鎬с€佽埅绋嬪拰鑰愮敤鎬?,'content_challenge.subtitle':'鏃犺鎮ㄧ粡钀ュ寘鑸归挀楸间笟鍔¤繕鏄负鍟嗕笟娓斾笟渚涜揣锛屾偍鐨勮埞鑹囬兘闇€瑕佹棩澶嶄竴鏃ュ湴鍙潬杩愯銆?,
  'content_challenge.paragraphs[0]':'閽撻奔鑸归渶瑕佺ǔ瀹氱殑骞冲彴鏉ュ鐞嗘笖绾裤€佸鐞嗘笖鑾峰拰鍦ㄧ敳鏉夸笂瀹夊叏绉诲姩銆傚厖姘旇埞鍜孯IB鑹囬€氳繃鍏舵皵绠¤璁℃彁渚涘浐鏈夌殑绋冲畾鎬р€斺€旇繖鏄悓绛夐暱搴﹀垰鎬ц埞浣撴墍涓嶅叿澶囩殑閲嶈浼樺娍銆?,
  'content_challenge.paragraphs[1]':'鐕冩补鏁堢巼瀵规笖涓氳繍钀ヨ嚦鍏抽噸瑕侊紝鍥犱负杩愯惀鎴愭湰鐩存帴褰卞搷鐩堝埄鑳藉姏銆俁IB鑹囧拰鍏呮皵鑸规瘮鍚岀瓑鍒氭€ц埞鏇磋交锛屾墍闇€鍔熺巼鏇村皬锛屾补鑰楁洿浣庛€?,
  'content_challenge.paragraphs[2]':'娴锋磱鐜涓殑鑰愮敤鎬ц嚦鍏抽噸瑕併€傜洂姘淬€佺传澶栫嚎鐓у皠鍜屾寔缁娇鐢ㄩ渶瑕佽兘澶熸壙鍙楁伓鍔ｆ潯浠惰€屼笉閫€鍖栫殑鏉愭枡銆?,
  'content_challenge.paragraphs[3]':'afarer閽撻奔閰嶇疆鍖呮嫭绔挎灦銆侀奔鎺华銆侀サ鏂欑鍜屼笓涓轰弗鑲冮挀楸煎簲鐢ㄨ璁＄殑瀛樺偍鏂规銆?,
  'content_solution.tagline':'鎴戜滑鐨勬柟妗?,'content_solution.title':'閽撻奔灏辩华閰嶇疆','content_solution.subtitle':'姣忚墭 afarer 閽撻奔鑸归兘鍙互閽堝鎮ㄧ殑鐗瑰畾閽撻奔搴旂敤杩涜閰嶇疆銆?,
  'content_solution.list[0]':'绔挎灦瀹夎鈥斺€斿伐鍘傚畨瑁呮垨涓哄敭鍚庡畨瑁呭仛濂藉噯澶?,
  'content_solution.list[1]':'楸兼帰浠?GPS 瀹夎鏉夸綅浜庢帶鍒跺彴浣嶇疆',
  'content_solution.list[2]':'楗垫枡绠辨垨娲婚サ绠遍€夐」锛岄€傜敤浜庡寘鑸瑰拰鍟嗕笟杩愯惀鍟?,
  'content_solution.list[3]':'鍐疯棌绠?瀛樺偍閰嶇疆锛岀敤浜庢笖鑾峰鐞?,
  'content_solution.list[4]':'娣盫鑸逛綋锛屽叿澶囩宀歌兘鍔涒€斺€旈潤姝㈡椂绋冲畾锛岄珮閫熸椂骞崇ǔ',
  'content_solution.list[5]':'PVC 鎴?Hypalon 姘旂閫夐」鈥斺€擧ypalon 閫傜敤浜庨暱鏃堕棿绱绾跨収灏?,
  'content_solution.list[6]':'鑸峰鏈哄姛鐜囪寖鍥翠粠 15 HP 鍒?115 HP锛岃鍨嬪彿鍜屽簲鐢ㄨ€屽畾',
  'cta.title':'閰嶇疆鎮ㄧ殑閽撻奔鑸?,'cta.subtitle':'鑱旂郴鎴戜滑锛屽憡鐭ユ偍鐨勯挀楸煎簲鐢ㄣ€佺洰鏍囬奔绉嶅拰杩愯惀姘村煙鈥斺€旀垜浠皢鎺ㄨ崘鍚堥€傜殑閰嶇疆銆?,
  'cta.actions[0].text':'閰嶇疆鎮ㄧ殑閽撻奔鑸?,'cta.actions[1].text':'鏌ョ湅鑸硅墖浜у搧',
});

// ======================== MARINE TOURISM ========================
const M = 'solutions-marine-tourism-equipment';
t(M, 'zh', {
  'hero.tagline':'娴锋磱鏃呮父','hero.title':'姘翠笂杩愬姩瑁呭<br />涓哄害鍋囨潙鍜屾梾娓歌繍钀ュ晢鎵撻€?,'hero.subtitle':'閫傚悎楂樹娇鐢ㄧ巼绉熻祦鐜鐨勫厖姘旇埞銆丼UP妗ㄦ澘鍜岀毊鍒掕墖鈥斺€斿叿鏈夊浜哄彲浠ヤ俊璧栫殑绋冲畾璐ㄩ噺銆?,'hero.image.alt':'afarer 鍏呮皵姘翠笂杩愬姩瑁呭锛岄€傜敤浜庡害鍋囨潙鍜屾梾娓歌繍钀?,
  'stats.title':'鑸归槦瑙ｅ喅鏂规',
  'content_challenge.tagline':'鎸戞垬','content_challenge.title':'鏃呮父杩愯惀鍟嗛渶瑕?br />鑰愮敤銆佷竴鑷寸殑瑁呭','content_challenge.subtitle':'杩愯惀姘翠笂杩愬姩绉熻祦涓氬姟鎰忓懗鐫€瑁呭姣忓ぉ閮借鎵垮彈涓嶅悓鎶€鑳芥按骞崇敤鎴风殑浣跨敤銆?,
  'content_challenge.paragraphs[0]':'搴﹀亣鏉戝拰鏃呮父杩愯惀鍟嗛渶瑕佽兘澶熷湪楂樹娇鐢ㄧ巼绉熻祦鐜涓敓瀛樸€侀渶瑕佹渶灏戠淮鎶ゅ苟鎻愪緵涓€鑷村浜轰綋楠岀殑姘翠笂杩愬姩瑁呭銆?,
  'content_challenge.paragraphs[1]':'褰撴偍鏈?0鍧桽UP妗ㄦ澘鍜?0鑹樼毊鍒掕墖鍦ㄦ瘡鏃ヨ疆杞椂锛屾瘡涓€灏忔椂鐨勭淮鎶ら兘鏄敹鍏ョ殑鎹熷け銆傝澶囬渶瑕佽€愮敤銆佹槗浜庣淮淇紝骞舵湁鍙潬鐨勫浠朵緵搴旀敮鎸併€?,
  'content_challenge.paragraphs[2]':'瀹汉瀹夊叏鑷冲叧閲嶈銆傝澶囧繀椤荤ǔ瀹氥€佸鍒濆鑰呮湁瀹藉搴︼紝骞堕€氳繃閫傚綋璁よ瘉銆備竴鑷寸殑鎬ц兘鎰忓懗鐫€瀹汉鍜屾暀缁冮兘鑳借幏寰楀彲棰勬祴鐨勪娇鐢ㄤ綋楠屻€?,
  'content_challenge.paragraphs[3]':'afarer 涓庡害鍋囨潙鍜屾梾娓歌繍钀ュ晢鍚堜綔锛屼互鎵归噺渚涘簲绋冲畾璐ㄩ噺鐨勪骇鍝併€佹彁渚涘畾鍒跺搧鐗屽拰鍙潬鐨勫敭鍚庢湇鍔℃敮鎸併€?,
  'content_solution.tagline':'鎴戜滑鐨勬柟妗?,'content_solution.title':'鑸归槦灏辩华瑁呭','content_solution.subtitle':'涓撲负绉熻祦鍜屾梾娓稿競鍦烘墦閫犫€斺€旇€愮敤銆佹槗浜庣淮鎶ゃ€佸彲鎵归噺渚涘簲銆?,
  'content_solution.list[0]':'鎵归噺璁㈠崟鐨勮埞闃熷畾浠封€斺€擲UP妗ㄦ澘銆佺毊鍒掕墖銆佸厖姘旇埞鍜岄厤浠?,
  'content_solution.list[1]':'浜у搧鍜屽寘瑁呬笂鐨勫畾鍒跺搧鐗屸€斺€旀偍鐨勬爣蹇椼€佹偍鐨勯鑹?,
  'content_solution.list[2]':'鑰愮敤缁撴瀯锛岄€傜敤浜庨珮浣跨敤鐜囩璧佺幆澧?,
  'content_solution.list[3]':'浣跨敤鍏ㄥ勾澶囪揣鐨勬鍝佸浠惰繘琛岀畝渚跨淮淇?,
  'content_solution.list[4]':'CE 璁よ瘉锛岄€傜敤浜庡晢涓氱敤閫斺€斺€旂鍚堟梾娓告硶瑙?,
  'content_solution.list[5]':'闄勫甫鍩硅鏉愭枡鍜屽畨鍏ㄦ枃妗?,
  'content_solution.list[6]':'鏁翠釜鑸归槦鐨勮川閲忎竴鑷粹€斺€旀瘡浠惰澶囨€ц兘瀹屽叏鐩稿悓',
  'cta.title':'鎵撻€犳偍鐨勭璧佽埞闃?,'cta.subtitle':'鑱旂郴鎴戜滑鐨勫洟闃燂紝鑾峰彇鑸归槦瀹氫环銆佸畾鍒跺搧鐗岄€夐」鍜屼氦浠樻椂闂磋〃銆?,
  'cta.actions[0].text':'鐢宠鑸归槦瀹氫环','cta.actions[1].text':'鏌ョ湅 SUP 妗ㄦ澘',
});

// ======================== RESCUE ========================
const R = 'solutions-rescue-watercraft';
t(R, 'zh', {
  'hero.tagline':'鏁戞彺涓庡簲鎬?,'hero.title':'鏁戞彺鑸硅墖<br />涓烘晳鐢熶换鍔℃墦閫?,'hero.subtitle':'楂橀€?RIB 鑹囷紝涓撲负鎼滅储鏁戞彺銆佹捣宀歌鍗槦琛屽姩鍜屽簲鎬ュ搷搴旇€岃璁♀€斺€斿彲闈犳€т笉瀹归€夋嫨銆?,'hero.image.alt':'afarer 鏁戞彺 RIB 鑹囷紝鐢ㄤ簬鎼滅储鍜屾晳鎻磋鍔?,
  'stats.title':'鐑棬鏁戞彺 RIB 鍨嬪彿',
  'content_challenge.tagline':'鎸戞垬','content_challenge.title':'鏁戞彺琛屽姩瑕佹眰<br />鏃犲Ε鍗忕殑鍙潬鎬?,'content_challenge.subtitle':'鎼滅储鏁戞彺缁勭粐闇€瑕佹瘡娆￠兘鑳藉惎鍔ㄣ€佸湪鏋佺鏉′欢涓嬭繍琛屽苟鎼哄甫鏁戠敓浠诲姟鎵€闇€瑁呭鐨勮埞鑹囥€?,
  'content_challenge.paragraphs[0]':'鍦ㄦ晳鎻磋鍔ㄤ腑锛屾垚鍔熶笌澶辫触涔嬮棿鐨勫樊璺濅互鍒嗛挓璁＄畻銆傝埞鑹囧繀椤昏兘澶熺珛鍗冲嚭鍔紝鍦ㄦ伓鍔ｆ潯浠朵笅杩愯锛屽苟甯︾潃浜哄憳瀹夊叏杩斿洖銆?,
  'content_challenge.paragraphs[1]':'SAR 鑸硅墖闇€瑕侀珮閫熶互蹇€熷埌杈惧彈瀹宠€呰韩杈癸紝鍚屾椂鍏峰鍗撹秺鐨勭ǔ瀹氭€т互杩涜瀹夊叏鏁戞彺浣滀笟銆傚畠浠繀椤绘惡甯︽晳鎻磋澶囥€佸尰鐤楃敤鍝佸拰閫氫俊璁惧鈥斺€旈€氬父鍦ㄦ湁闄愮殑鐢叉澘绌洪棿鍐呫€?,
  'content_challenge.paragraphs[2]':'鑳借搴﹀浜庢搷浣滆€呭拰鎼滅储閮借嚦鍏抽噸瑕併€傛帶鍒跺彴璁捐蹇呴』鎻愪緵 360 搴﹁閲庯紝涓旇埞鑹囧簲瀵归琛屽櫒鍜屽叾浠栬埞鑸跺叿鏈夐珮鍙搴︺€?,
  'content_challenge.paragraphs[3]':'afarer 鏁戞彺 RIB 鑹囦粠榫欓寮€濮嬪氨閽堝杩欎簺瑕佹眰杩涜璁捐鈥斺€斿贰閫诲瀷鍙锋爣閰嶈嚜鎺掓按鐢叉澘銆佸姞寮鸿埞浣撱€佸鑸浠跺拰鎷栨洺鏌便€?,
  'content_solution.tagline':'鎴戜滑鐨勬柟妗?,'content_solution.title':'涓撶敤鏁戞彺 RIB 鑹?,'content_solution.subtitle':'姣忚墭 afarer 鏁戞彺鑸圭殑璁捐閮借揪鍒版垨瓒呰繃 SOLAS 鍜屽浗瀹?SAR 鏍囧噯銆?,
  'content_solution.list[0]':'鑷帓姘寸敳鏉库€斺€旀按鑷姩鎺掑嚭锛屽湪鏁戞彺浣滀笟鏈熼棿淇濇寔绋冲畾',
  'content_solution.list[1]':'鍔犲己娣盫鑸逛綋鈥斺€斿叿澶囨伓鍔ｆ捣鍐佃兘鍔涳紝楂橀€熸椂鍙娴嬫搷鎺?,
  'content_solution.list[2]':'鍏ㄥ瀵艰埅鐏€斺€旀樇澶滃叏澶╁€欏湪鎵€鏈夊ぉ姘旀潯浠朵笅杩愯',
  'content_solution.list[3]':'鎷栨洺鏌卞拰鎷栫紗鈥斺€斿噯澶囧氨缁彲鐢ㄤ簬鎷栬埞鎴栨晳鎻存粦姗囦綔涓?,
  'content_solution.list[4]':'璁惧瀹夎鏉库€斺€旀棤绾跨數銆佹帰鐓х伅銆佽鎶ュ櫒鍜屽尰鐤楄澶?,
  'content_solution.list[5]':'澶氱鍙戝姩鏈洪厤缃€斺€斿崟鑸峰鏈烘垨鍙屾満鍐椾綑',
  'content_solution.list[6]':'楂樺彲瑙佸害姘旂棰滆壊鈥斺€旀鑹层€侀粍鑹叉垨绾㈣壊锛屽疄鐜版渶澶у彲瑙佸害',
  'cta.title':'璁ㄨ鎮ㄧ殑鏁戞彺闇€姹?,'cta.subtitle':'鎴戜滑鐨勫洟闃熷凡涓哄叏鐞冩晳鎻寸粍缁囦緵璐с€傛垜浠簡瑙ｉ噰璐姹傦紝骞惰兘鎻愪緵鍚堣鏂囨。銆?,
  'cta.actions[0].text':'鑱旂郴鎴戜滑鐨?SAR 鍥㈤槦','cta.actions[1].text':'鏌ョ湅宸￠€?RIB 鍨嬪彿',
});

// ======================== YACHT TENDER ========================
const Y = 'solutions-yacht-tender-solutions';
t(Y, 'zh', {
  'hero.tagline':'娓歌墖闄勫睘鑹?,'hero.title':'楂樼 RIB 闄勫睘鑹?br />涓鸿秴绾ф父鑹囧拰浼戦棽鑸硅埗鎵撻€?,'hero.subtitle':'绱у噾銆佹椂灏氥€侀珮鎬ц兘鈥斺€擜quafarer RIB 闄勫睘鑹囦互鎸戝墧鑸逛笢鎵€鏈熸湜鐨勮川閲忓拰鍙潬鎬цˉ鍏呮偍鐨勬瘝鑸广€?,'hero.image.alt':'afarer RIB 闄勫睘鑹囷紝閫傜敤浜庤秴绾ф父鑹囧拰浼戦棽鑸硅埗搴旂敤',
  'stats.title':'鐑棬闄勫睘鑹囧瀷鍙?,
  'content_challenge.tagline':'鎸戞垬','content_challenge.title':'娓歌墖闄勫睘鑹囬渶瑕?br />鎬ц兘鍜屽搧鍛?,'content_challenge.subtitle':'娓歌墖闄勫睘鑹囦笉浠呬粎鏄竴鑹樺皬鑹団€斺€斿畠鏄瘝鑸圭殑寤朵几锛屾槸鍝佽川鐨勫瑷€銆?,
  'content_challenge.paragraphs[0]':'娓歌墖鑸逛笢鍜岃埞闀块渶瑕佹€ц兘浼樺紓銆佸瓨鏀剧揣鍑戙€佸瑙傚嚭浼楃殑闄勫睘鑹囥€傞檮灞炶墖搴旇ˉ鍏呮父鑹囩殑缇庡锛屽悓鏃朵负瀹汉鍜岃埞鍛樻彁渚涘彲闈犵殑浜ら€氥€?,
  'content_challenge.paragraphs[1]':'瀛樻斁鏄竴涓叧閿€冭檻鍥犵礌鈥斺€旈檮灞炶墖蹇呴』閫傚悎鐢叉澘銆佽溅搴撴垨鍚婅墖鏋朵笂瀛樻斁銆傞噸閲忓閲婃斁鍜屽洖鏀剁郴缁熻嚦鍏抽噸瑕併€侫quafarer RIB 鑹囨彁渚涘崜瓒婄殑鎺ㄩ噸姣斻€?,
  'content_challenge.paragraphs[2]':'鎬ц兘鏈熸湜寰堥珮銆傚浜烘湡鏈涘湪鎺ラ€佽繃绋嬩腑浜彈骞崇ǔ銆佸共鐖界殑涔樺潗浣撻獙銆傚彂鍔ㄦ満閫夐」蹇呴』鍦ㄩ€熷害銆佽埅绋嬪拰鍣煶姘村钩涔嬮棿鍙栧緱骞宠　锛屼互鎻愪緵楂樼浣撻獙銆?,
  'content_challenge.paragraphs[3]':'afarer 鎻愪緵瀹氬埗姘旂棰滆壊鍜屽搧鐗岋紝浠ュ尮閰嶆瘝鑸光€斺€旂‘淇濋檮灞炶墖鐪嬭捣鏉ユ祽鐒朵竴浣撱€?,
  'content_solution.tagline':'鎴戜滑鐨勬柟妗?,'content_solution.title':'闄勫睘鑹囬厤缃?,'content_solution.subtitle':'afarer RIB 闄勫睘鑹囧彲鏍规嵁鎮ㄧ殑鑸硅埗鍜岃繍钀ヨ姹傝繘琛屽畾鍒躲€?,
  'content_solution.list[0]':'瀹氬埗姘旂棰滆壊浠ュ尮閰嶆垨琛ュ厖姣嶈埞',
  'content_solution.list[1]':'鎺у埗鍙版垨鑸垫焺杞悜鈥斺€旀牴鎹娇鐢ㄦā寮忛€夋嫨',
  'content_solution.list[2]':'绾ょ淮澧炲己濉戞枡娣?V 鑸逛綋锛屾彁渚涘钩绋冲共鐖界殑涔樺潗浣撻獙',
  'content_solution.list[3]':'绱у噾瀛樻斁鈥斺€旀斁姘旀垨鍫嗗彔瀛樻斁浜庣敳鏉?杞﹀簱',
  'content_solution.list[4]':'Hypalon 姘旂锛屽叿鏈夌传澶栫嚎闃叉姢鍜岄暱鏈熺編瑙傛€?,
  'content_solution.list[5]':'鏍囬厤鍚婄偣鍜屾嫋鐜?,
  'content_solution.list[6]':'鍙€夎埞缃╁拰鍏ㄧ僵鐢ㄤ簬瀛樻斁',
  'cta.title':'鎸囧畾鎮ㄧ殑闄勫睘鑹?,'cta.subtitle':'鍛婅瘔鎴戜滑鎮ㄧ殑鑸硅埗銆佸瓨鏀惧畨鎺掑拰瀹汉鎺ラ€侀渶姹傗€斺€旀垜浠皢鎺ㄨ崘鐞嗘兂鐨勯檮灞炶墖閰嶇疆銆?,
  'cta.actions[0].text':'閰嶇疆鎮ㄧ殑闄勫睘鑹?,
});

// Now let me fill remaining locales with English and run
for (const loc of LOCS) {
  for (const page of PAGES) {
    if (!T[page]?.[loc]) {
      t(page, loc, {});
    }
  }
}

// Generate all files
for (const page of PAGES) {
  console.log('\n=== ' + page + ' ===');
  const en = EN[page];
  if (!en) continue;
  for (const loc of LOCS) {
    const fields = T[page][loc];
    if (!fields || Object.keys(fields).length === 0) {
      write(loc, page, en);
    } else {
      write(loc, page, buildYaml(fields, en));
    }
  }
}

console.log('\n=== DONE ===');
