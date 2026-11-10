import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'retail-private-label': {
    client: 'Euroopa outdoor-jaemüüja',
    product: 'Privaatbrändi SUP-sari',
    industry: 'Jaemüük',
    challenge:
      'Euroopa outdoor-jaemüüja vajas privaatbrändi SUP-sarja ainulaadse tekigraafika, keskkonnasõbraliku PVC ja jaemüügivalmis pakendiga — kõik tuli tarnida 60 päevaga.',
    solution:
      'Töötasime välja kohandatud digitaalsed trükifailid, hankisime REACHi nõuetele vastava PVC ja lühendasime proovimise kolmelt ringilt ühele, paigutades disainimeeskonna meie Qingdao tehasse.',
    result:
      '55 päeva allkirjastatud ostutellimusest FOB-tarneni. 2,400 ühikut 4 SKU-s. Kordustellimus esitati enne esimese konteineri saabumist.',
    outcomeMetrics: [
      {
        label: 'Täitmisaeg',
        value: '55 päeva',
      },
      {
        label: 'Ühikud',
        value: '2,400',
      },
      {
        label: 'SKU-d',
        value: '4',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'USA veespordi idufirma',
    product: 'Kohandatud SUP-sari',
    industry: 'Idufirma / Jaemüük',
    challenge:
      'USA veespordi idufirma vajas suure jõudlusega drop-stitch SUP-i kohandatud tekidisaini, ühisbränditud pakendi ja BSCI sertifikaadiga jaemüügipaigutuseks.',
    solution:
      'Kohandasime olemasolevat SUP-vormi muudetud rokkerprofiiliga, töötasime välja ühisbränditud pakendi kujunduse ja esitasime täieliku BSCI auditidokumentatsiooni.',
    result: 'Edukalt müügil 3 suures USA outdoor-ketis. Üle 5,000 ühiku esimesel aastal 98% läbimüügimääraga.',
    outcomeMetrics: [
      {
        label: 'Jaemüügiketid',
        value: '3',
      },
      {
        label: 'Esimese aasta ühikud',
        value: '5,000+',
      },
      {
        label: 'Läbimüük',
        value: '98%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Austraalia levitaja',
    product: 'CE-sertifitseeritud SUP-valik',
    industry: 'Merendus / Jaemüük',
    challenge:
      'Austraalia levitaja nõudis CE-sertifitseeritud SUP-valikut kohandatud tekivärvide, täiendatud PVC-valiku ja vastavusega Austraalia standardile AS 1799.',
    solution:
      'Valmistasime eeltootmisproovid 4 värvis variandis, hankisime sõjaväeklassi PVC ja korraldasime kolmanda osapoole AS 1799 vastavuskatsed.',
    result: '3-mudeline SUP-valik käivitatud AU/NZ turul. Järgnes jaeketi leping 12 poe jaoks.',
    outcomeMetrics: [
      {
        label: 'Käivitatud mudelid',
        value: '3',
      },
      {
        label: 'Jaemüügipoed',
        value: '12',
      },
      {
        label: 'Vastavus',
        value: 'AS 1799',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Kariibi mere luksuskuurortide grupp',
    product: 'Kuurordi laevastik — SUP-id',
    industry: 'Majutus / Turism',
    challenge:
      '5 kuurorti hõlmav grupp vajas ühtset rendiveespordivarustuse laevastikku — SUP-laudu — ühtse brändingu, troopilise päikese jaoks UV-kindlate materjalide ja 5-aastase asendusplaaniga.',
    solution:
      'Kujundasime kohandatud 3-mudelise SUP-laevastiku paketi UV-stabiliseeritud PVC-ga, kuurortide brändinguga tekigraafika ja etapiviisilise tarneajakavaga. Andsime personalile koolituse ja igale kuurordile eraldi varuosade komplekti.',
    result:
      '180 ühikut tarnitud 5 kuurordile. Kordustellimus 2 uuele objektile. Ühikukulu vähenes 40% võrreldes varasemate tarnijatega.',
    outcomeMetrics: [
      {
        label: 'Tarnitud ühikud',
        value: '180',
      },
      {
        label: 'Kuurordid',
        value: '5',
      },
      {
        label: 'Kulude vähenemine',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Aastased laudade asendamise kulud',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Laevastiku seisuaeg (päeva/aastas)',
        before: '45',
        after: '8',
      },
      {
        label: 'Külaliste rahulolu skoor',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Kagu-Aasia mereamet',
    product: 'Patrull- ja pääste-SUP-laevastik',
    industry: 'Valitsus / Mereohutus',
    challenge:
      'Valitsuse mereamet vajas 20 patrull- ja pääste-SUP-i hästi nähtavate tekkide, integreeritud sidevahendite kinnituste ja CE-sertifitseeritud konstruktsiooniga.',
    solution:
      'Valmistasime 20 SUP-i sõjaväeklassi PVC-konstruktsiooniga, vastupidavate D-rõngaste ja eelpaigaldatud navigatsioonitulede komplektidega. Tehase inspektsioonimeeskond jälgis merekatsetusi. Esitasime täieliku vastavusdokumentatsiooni paketi.',
    result:
      'Leping täidetud 4 kuuga. Laevastik rakendatud piirivalveks, otsingu- ja päästetöödeks ning katastroofidele reageerimiseks 3 piirkondlikus baasis.',
    outcomeMetrics: [
      {
        label: 'Patrull-SUP-id',
        value: '20',
      },
      {
        label: 'Tarneaeg',
        value: '4 kuud',
      },
      {
        label: 'Baasid',
        value: '3',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Euroopa DTC veespordibränd',
    product: 'Bränditud SUP- ja tarvikutesari',
    industry: 'E-kaubandus / Jaemüük',
    challenge:
      'Kiiresti kasvav DTC veespordibränd vajas täielikku SUP-paketti (laut, pump, aer, turvarihm, kott) e-kaubanduse tarneks mõeldud esmaklassilise pakendiga — otse tarbijale DHL/FedEx kaudu, kahjustusteta.',
    solution:
      'Töötasime välja ühisbränditud tootesarja kohandatud EPS-tuuma kujunduse, kõrgema rõhu jaoks mõeldud ainulaadse drop-stitch tehnoloogia ning jaemüügivalmis kahekihiliste lainepappkarpidega sisestusvoodriga. Integreerisime QR-koodil põhineva ehtsuskontrolli ja garantiiregistreerimise.',
    result:
      '3-mudeline SUP-sari käivitatud 75 päevaga. Üle 15,000 ühiku esimese 12 kuuga. 4.8★ keskmine hinne üle 2,000 arvustuse põhjal. 0.3% transportimise kahjustuste määr.',
    outcomeMetrics: [
      {
        label: 'Mudelid',
        value: '3',
      },
      {
        label: 'Ühikud',
        value: '15,000+',
      },
      {
        label: 'Keskmine hinne',
        value: '4.8★',
      },
      {
        label: 'Kahjustuste määr',
        value: '0.3%',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Vahemere rannakuurortide kett',
    product: 'Kuurordi laevastik — SUP-id ja tarvikud',
    industry: 'Majutus / Turism',
    challenge:
      '3 objektiga Vahemere kuurordikett soovis käivitada oma rannaäärsetes hotellides ühtse veetegevuste programmi, vajades 120 SUP-i kohandatud brändingu, mitmekeelsete ohutuskaartide ja hooldusrotsioonisüsteemiga.',
    solution:
      'Kujundasime kuurordipõhise laevastikupaketi mereklassi UV-kindla PVC-ga, hotellibränditud tekigraafikaga 3 värviskeemis ja värvikodeeritud hooldusmärgistussüsteemiga. Kaasas olid personalikoolitus ja kvartalne varuosade täiendamine.',
    result:
      'Laevastik paigaldatud 3 kuurordis. Veetegevuste tulu kasvas esimesel hooajal 210%. Külaliste rahulolu skoor mugavuste osas tõusis 4.1-lt 4.7-le /5.',
    outcomeMetrics: [
      {
        label: 'Tarnitud SUP-id',
        value: '120',
      },
      {
        label: 'Kuurordid',
        value: '3',
      },
      {
        label: 'Tulu kasv',
        value: '210%',
      },
      {
        label: 'Külaliste skoor',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Veetegevuste tulu (aastas)',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Varustuse asendusmäär',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Külaliste rahulolu (mugavused)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'australian-paddle-club': {
    client: 'Austraalia aerutusklubide liit',
    product: 'Klubilaevastik — SUP-id ja ohutusvarustus',
    industry: 'Vaba aeg / Haridus',
    challenge:
      '15 klubi ühendav liit vajas liikmesklubide varustuse ühtlustamist vastupidavate, algajatesõbralike SUP-laudade, CE-sertifitseeritud päästevestide ja tsentraliseeritud hankega kulude vähendamiseks.',
    solution:
      'Ühtlustasime 3-tasandilise klubilaevastiku (algaja, kesktase, juhendaja). Kujundasime klubivärvides tekigraafika klubide logodega. Rakendasime keskhoidluse kvartalise jaotusega klubi kaupa.',
    result:
      '350 ühikut 15 klubis. 28% kulude vähenemine koondatud hanke kaudu. 92% liikmete rahulolu varustuse kvaliteediga.',
    outcomeMetrics: [
      {
        label: 'Varustatud klubid',
        value: '15',
      },
      {
        label: 'Tarnitud ühikud',
        value: '350',
      },
      {
        label: 'Kulude vähenemine',
        value: '28%',
      },
      {
        label: 'Liikmete rahulolu',
        value: '92%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Euroopa järvekuurordi ja rendioperaator',
    product: 'Rendilaevastik — SUP-id, päästevestid, tarvikud',
    industry: 'Renditeenus / Turism',
    challenge:
      '6 rendipunktiga järvekuurordi operaator vajas suure vastupidavusega rendi-SUP-laevastikku kiire kuivamise süsteemide, kahjustuskindla konstruktsiooni ja prognoositava mitmeaastase asendusajakavaga.',
    solution:
      'Tarnisime kommertsklassi rendi-SUP-id tugevdatud küljeribade, kiiresti kuivavate EVA-tekkide ja UV-stabiliseeritud PVC-ga. Töötasime välja värvikodeeritud kulumise jälgimissüsteemi aastaste seisukorraraportitega.',
    result:
      '200 SUP-i paigaldatud 6 rendipunkti. Aastased hoolduskulud vähenesid 55%. Varustuse eluiga pikenes 2-lt 4 aastale.',
    outcomeMetrics: [
      {
        label: 'Rendipunktid',
        value: '6',
      },
      {
        label: 'Paigaldatud SUP-id',
        value: '200',
      },
      {
        label: 'Hoolduskulud',
        value: '-55%',
      },
      {
        label: 'Eluiga',
        value: '4 aastat',
      },
    ],
    beforeAfter: [
      {
        label: 'Keskmine lau eluiga',
        before: '2 aastat',
        after: '4 aastat',
      },
      {
        label: 'Aastane hooldus laua kohta',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Renditulu laua kohta hooajal',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Kanada outdoor-jaemüügikett',
    product: 'Privaatbrändi SUP- ja tarvikutesari',
    industry: 'Jaemüük',
    challenge:
      '25 poega Kanada outdoor-jaemüüja nõudis eksklusiivset privaatbrändi SUP-valikut prantsuse/inglise kaheskeelse pakendi, külmailmaste materjalispetsifikatsioonide ja Kanada paadieeskirjadele vastavusega.',
    solution:
      'Töötasime välja 4 SUP-mudelit külmapainduva PVC-seguga, taluvusega kuni -15°C. Valmistasime kaheskeelse jaemüügipakendi Kanada regulatiivsete märgistustega. Andsime müügiesitlusaluseid ja personalikoolituse materjale.',
    result:
      'Eksklusiivne sari käivitatud 25 poes. 3,800 ühikut müüdud esimesel hooajal. Jaemüüja uuendas 3-aastast lepingut laiendatud SKU-arvuga.',
    outcomeMetrics: [
      {
        label: 'Poed',
        value: '25',
      },
      {
        label: 'Esimese hooaja ühikud',
        value: '3,800',
      },
      {
        label: 'Leping',
        value: '3-aastane uuendus',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Lähis-Ida veespordi levitaja',
    product: 'Täielik tootesari — SUP-id ja tarvikud',
    industry: 'Levitamine / Merendus',
    challenge:
      'GCC piirkonnas tegutsev levitaja soovis eksklusiivõigust esindada kogu afarer tootesarja 6 laheriigis, kohandatud araabiakeelse pakendi, kuumakindlate materjalide spetsifikatsioonide ja šariaakohaste garantiitingimustega.',
    solution:
      'Sõlmisime eksklusiivse levituslepingu. Töötasime välja araabiakeelse pakendi ja turundusmaterjalid. Kinnitasime materjalide spetsifikatsioonid 50°C õhutemperatuuri juures. Kohandasime garantiitingimusi piirkondliku vastavuse jaoks.',
    result:
      '12 konteineritellimust esimese 18 kuuga. Loodud 15 edasimüüja/allevitaja võrgustik. Turuosa hinnanguliselt 18% GCC täispuhutavate SUP-ide segmendist.',
    outcomeMetrics: [
      {
        label: 'Konteinerid',
        value: '12',
      },
      {
        label: 'Edasimüüjate võrgustik',
        value: '15',
      },
      {
        label: 'Turuosa',
        value: '18%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Jaapani elustiilibränd',
    product: 'Ühisbränditud SUP-sari',
    industry: 'OEM / Bränd',
    challenge:
      'Esmaklassiline Jaapani elustiilibränd soovis siseneda veesporditurule ühisbränditud SUP-sarjaga, rõhuasetusega minimalismile, keskkonnasõbralikele materjalidele ja nõudliku Jaapani tarbija jaoks sobivale täpsele tootmisele.',
    solution:
      'Lõime kohandatud vormid aerodünaamilisema küljeprofiiliga. Hankisime FSC-sertifitseeritud bambuse tekinarsiad ja taaskasutatud PVC valikud. Töötasime välja esmaklassilise avamiskogemuse jaapanikeelsete QR-koodiga hooldusjuhenditega.',
    result:
      '3-mudeline ühisbränditud sari esitletud Tokyo merendusmessil. 2,800 ühikut eelmüüdud enne avalikku müüki. Kajastatud 5 Jaapani elustiiliväljaandes.',
    outcomeMetrics: [
      {
        label: 'Mudelid',
        value: '3',
      },
      {
        label: 'Eelmüüdud ühikud',
        value: '2,800',
      },
      {
        label: 'Meediakajastused',
        value: '5',
      },
    ],
  },
  'us-custom-mold': {
    client: 'USA veespordivarustuse bränd',
    product: 'Kohandatud vorm — matka-SUP',
    industry: 'OEM / Tootmine',
    challenge:
      'USA bränd vajas täiesti uut SUP-vormi 14-jalase matkakuju, integreeritud kalalokaatori paigalduskanalite, tugevdatud seisualuse ja 400-naelase kandevõimega — mõeldud kalastus-SUP-i turule.',
    solution:
      'Konstrueerisime uue 14-jalase drop-stitch vormi tugevdatud drop-stitch tuumatihedusega, sisseehitatud tarvikuliistude sisestusega ja sõjaväeklassi PVC põhikihiga kulumiskindluse tagamiseks. Valmistasime 3 prototüübi iteratsiooni enne vormi lõplikku valmimist.',
    result:
      'Uus vorm valmis 14 nädalaga. 3,500 ühikut toodetud esimeses partiis. Tooted nimetati ajakirja Outdoor Gear Lab poolt "Parimaks kalastus-SUP-iks 2025".',
    outcomeMetrics: [
      {
        label: 'Vormi valmistusaeg',
        value: '14 nädalat',
      },
      {
        label: 'Esimene partii',
        value: '3,500 ühikut',
      },
      {
        label: 'Auhind',
        value: 'Parim kalastus-SUP 2025',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Globaalne tehnoloogiaettevõte',
    product: 'Ettevõtte heaolu — SUP-laevastik',
    industry: 'Ettevõtted / Heaolu',
    challenge:
      'Fortune 500 tehnoloogiafirma soovis käivitada töötajatele veepõhise heaoluprogrammi 4 järveäärses globaalses linnakus, vajades 60 SUP-i ettevõtte brändingu, hoiulahenduste ja juhendajate koolitusega.',
    solution:
      'Tarnisime stabiilsete universaalsete SUP-ide laevastiku ettevõtte logoga tekigraafikaga. Kujundasime ilmastikukindlad kohapealsed hoiuraamid. Sertifitseerisime afarer koolitusprogrammi kaudu 12 ettevõttesisest juhendajat.',
    result:
      'Programm käivitatud 4 linnakus. Üle 2,400 töötaja osalemise esimesel aastal. 94% töötajate rahulolu hinnang. Kajastatud ettevõtte jätkusuutlikkusaruandes.',
    outcomeMetrics: [
      {
        label: 'Linnakud',
        value: '4',
      },
      {
        label: 'Osalejad',
        value: '2,400+',
      },
      {
        label: 'Rahulolu',
        value: '94%',
      },
    ],
  },
  'university-club-program': {
    client: 'Suurbritannia ülikooli spordiühing',
    product: 'Üliõpilasklubi laevastik — SUP-id ja ohutus',
    industry: 'Haridus',
    challenge:
      'Aktiivse veespordiklubiga Suurbritannia ülikool vajas vananeva laevastiku asendamist kaasaegsete täispuhutavate SUP-laudadega, mida saaks hoida ülikooli piiratud ruumides, kasutada oskustasemelt erinevate üliõpilastega ja mis vastaksid BUCS võistlusstandarditele.',
    solution:
      'Tarnisime 25 universaalset SUP-i kompaktsate hoidmisseljakottidega, 10 matka-SUP-i võistlustreeninguteks ja täieliku ohutusvarustuse paketi. Andsime klubijuhatajatele koolitust ja hooldustöötubasid.',
    result:
      'Laevastik esitletud esmakursuslaste laadal. Klubi liikmeskond kasvas 140%. Ülikool korraldas 5 aasta jooksul esimese ülikoolidevahelise SUP-võistluse.',
    outcomeMetrics: [
      {
        label: 'Tarnitud SUP-id',
        value: '35',
      },
      {
        label: 'Liikmeskonna kasv',
        value: '140%',
      },
      {
        label: 'Korraldatud võistlusi',
        value: '1',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Kariibi kruiisioperaator',
    product: 'Laevapealne tegevuslaevastik — SUP-id',
    industry: 'Majutus / Kruiisid',
    challenge:
      'Suur kruiisibränd soovis pakkuda SUP-i kaldale siirdumise ekskursioonitegevusena 7 laeval, mis randuvad privaatsete saarte sadamates. Nõuti kompaktset hoiust laeval, kiireid täispuhumise/tühjendamise tsükleid ja laevastikutaset brändi järjepidevust.',
    solution:
      'Töötasime välja kruiisipõhise SUP-paketi kiire täispuhumise ventiilsüsteemide, kompaktsete seljakott-hoidmisega ja laevabränditud tekigraafikaga. Andsime kaldameeskondadele sihipärase koolituse ja varuosade hoiukapid 3 saare sadamas.',
    result:
      'Programm käivitatud 7 laeval. Üle 15,000 külalise osalemise esimesel hooajal. 4.6★ keskmine ekskursioonihinne. Teisel aastal lisandus 3 laeva.',
    outcomeMetrics: [
      {
        label: 'Laevad',
        value: '7',
      },
      {
        label: 'Külaliste osalemised',
        value: '15,000+',
      },
      {
        label: 'Hinne',
        value: '4.6★',
      },
      {
        label: '2. aasta laienemine',
        value: '+3 laeva',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Florida kalastuscharteri ettevõte',
    product: 'Kohandatud kalastus-SUP-laevastik',
    industry: 'Kalapüük / Charter',
    challenge:
      'Floridas tegutsev kalastuscharteri operaator soovis oma pakkumisse lisada SUP-kalastusreisid, vajades stabiilseid platvorme integreeritud jahutipaigaldustega, õngeritvahoidjate rööbastega ja kalalokaatori anduriga ühilduvust.',
    solution:
      'Kohandasime olemasolevat stabiilset SUP-platvormi 4 sisseehitatud õngeritvahoidikuga, eemaldatava jahutikinnituse süsteemiga ja veekindla anduri scupper-paigaldusega. Andsime laevastikuhinnad ja hooajalise asendusprogrammi.',
    result:
      'SUP-kalastusreisid käivitatud uue tuluallikana. 45% olemasolevatest charterklientidest broneerisid SUP-reise. Laevastik laienes 2 hooajaga 8-lt 20 lauani.',
    outcomeMetrics: [
      {
        label: 'Algne laevastik',
        value: '8',
      },
      {
        label: '2. aasta laevastik',
        value: '20',
      },
      {
        label: 'Charteri ristmüük',
        value: '45%',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'USA järveäärne elamurajoon',
    product: 'Kogukonna mugavus — SUP-laevastik',
    industry: 'Kinnisvara / Kogukond',
    challenge:
      'Luksuslik järveäärne elamurajoon soovis pakkuda SUP-laudu elanikele mugavusena, vajades väiksema hooldusega laevastikku, turvalist järvekülje hoiust ja iseteeninduslaenutuse süsteemi 200+ kodu jaoks.',
    solution:
      'Tarnisime 15 kommertsklassi SUP-i ilmastikukindla hoiukapisüsteemiga. Kujundasime QR-koodil põhineva iseteeninduslaenutuse digitaalse loobumislepingu integratsiooniga. Andsime hooajalise hooldusteenuse.',
    result:
      '85% leibkondadest kasutas SUP-mugavust esimesel hooajal. Kinnisvara väärtus järveäärses osas kasvas 7%. Rajoon võitis auhinna "Parim järveelu".',
    outcomeMetrics: [
      {
        label: 'SUP-id',
        value: '15',
      },
      {
        label: 'Leibkondade kasutus',
        value: '85%',
      },
      {
        label: 'Kinnisvaraväärtuse mõju',
        value: '+7%',
      },
      {
        label: 'Auhind',
        value: 'Parim järveelu',
      },
    ],
  },
};
