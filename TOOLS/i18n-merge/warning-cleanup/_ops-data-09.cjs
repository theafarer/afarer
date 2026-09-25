// Shard 09 — fi/factory.yaml repair part 3: qc steps + oem cases (L112-132, 14 ops)
// qc0: insert ASTM D751; rest: mojibake fix
module.exports = [
  // qc0
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'PVC-, Hypalon- ja drop-stitch-kankaat k?yv?t l?pi vetolujuustestauksen (), repe?m?n levi?misen ja UV-kest?vyyden varmistuksen ennen kuin mik??n er? menee tuotantoon.',
    rep: 'PVC-, Hypalon- ja drop-stitch-kankaat käyvät läpi vetolujuustestauksen (ASTM D751), repeämän leviämisen ja UV-kestävyyden varmistuksen ennen kuin mikään erä menee tuotantoon.',
  },
  // qc1
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Jokainen putkikammio t?ytet??n 125 %:iin nimellispaineesta ja pidet??n 48 tuntia. Yli 5 %:n paineen lasku aiheuttaa automaattisen hylk?yksen ja sauman uudelleentarkastuksen.',
    rep: 'Jokainen putkikammio täytetään 125 %:iin nimellispaineesta ja pidetään 48 tuntia. Yli 5 %:n paineen lasku aiheuttaa automaattisen hylkäyksen ja sauman uudelleentarkastuksen.',
  },
  // qc2
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Valmiit veneet kuormitetaan enimm?iskantavuuteen ja testataan vakauden, vapaan laidan ja k?sitelt?vyyden osalta. Jokainen alus vesitestataan ennen lopullista tarkastusta.',
    rep: 'Valmiit veneet kuormitetaan enimmäiskantavuuteen ja testataan vakauden, vapaan laidan ja käsiteltävyyden osalta. Jokainen alus vesitestataan ennen lopullista tarkastusta.',
  },
  // oem title/subtitle
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'title: Br?ndi- ja OEM-kumppanuustapaustutkimukset',
    rep: 'title: Brändi- ja OEM-kumppanuustapaustutkimukset',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Konseptista konttiin — kuinka autamme maailmanlaajuisia br?ndej? lanseeraamaan ja skaalaamaan kumiveneiden tuotelinjojaan.',
    rep: 'Konseptista konttiin — kuinka autamme maailmanlaajuisia brändejä lanseeraamaan ja skaalaamaan kumiveneiden tuotelinjojaan.',
  },
  // case 1
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Eurooppalainen ulkoilukauppias tarvitsi oman etiketin SUP-tuotelinjan ainutlaatuisella kansigrafiikalla, ymp?rist?yst?v?llisell? PVC:ll? ja v?hitt?ismyyntivalmiilla pakkauksella — kaikki toimitettuna 60 p?iv?ss?.',
    rep: 'Eurooppalainen ulkoilukauppias tarvitsi oman etiketin SUP-tuotelinjan ainutlaatuisella kansigrafiikalla, ympäristöystävällisellä PVC:llä ja vähittäismyyntivalmiilla pakkauksella — kaikki toimitettuna 60 päivässä.',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Kehitimme r??t?l?idyt digitaalitulostustiedostot, hankimme REACH-yhteensopivan PVC:n ja tiivistimme n?ytteenoton 3 kierroksesta 1:een sijoittamalla suunnittelutiimin Qingdaon tehtaallemme.',
    rep: 'Kehitimme räätälöidyt digitaalitulostustiedostot, hankimme REACH-yhteensopivan PVC:n ja tiivistimme näytteenoton 3 kierroksesta 1:een sijoittamalla suunnittelutiimin Qingdaon tehtaallemme.',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: '55 p?iv?? allekirjoitetusta ostotilauksesta FOB:hen. 2 400 yksikk?? 4 tuotekoodilla. Uusintatilaus tehtiin ennen ensimm?isen kontin saapumista.',
    rep: '55 päivää allekirjoitetusta ostotilauksesta FOB:hen. 2 400 yksikköä 4 tuotekoodilla. Uusintatilaus tehtiin ennen ensimmäisen kontin saapumista.',
  },
  // case 2
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Yhdysvaltalainen vesiliikuntastartup tarvitsi suorituskykyisen drop-stitch-kajakin r??t?l?idyll? rungon muodolla, yhteisbr?nd?tyll? pakkauksella ja BSCI-sertifioinnilla v?hitt?ismyynti? varten.',
    rep: 'Yhdysvaltalainen vesiliikuntastartup tarvitsi suorituskykyisen drop-stitch-kajakin räätälöidyllä rungon muodolla, yhteisbrändätyllä pakkauksella ja BSCI-sertifioinnilla vähittäismyyntiä varten.',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Mukautimme olemassa olevaa drop-stitch-kajakkimuottia modifioidulla keulanprofiililla, kehitimme yhteisbr?nd?tyn pakkausgrafiikan ja toimitimme t?ydellisen BSCI-auditointidokumentaation.',
    rep: 'Mukautimme olemassa olevaa drop-stitch-kajakkimuottia modifioidulla keulanprofiililla, kehitimme yhteisbrändätyn pakkausgrafiikan ja toimitimme täydellisen BSCI-auditointidokumentaation.',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Listattu onnistuneesti 3 suuressa yhdysvaltalaisessa ulkoiluketjussa. Yli 5 000 yksikk?? ensimm?isen? vuonna 98 %:n myyntil?p?isyasteella.',
    rep: 'Listattu onnistuneesti 3 suuressa yhdysvaltalaisessa ulkoiluketjussa. Yli 5 000 yksikköä ensimmäisenä vuonna 98 %:n myyntiläpikäisyasteella.',
  },
  // case 3
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Australialainen jakelija tarvitsi CE-sertifioidun SUP-venemalliston r??t?l?idyill? putkiv?reill?, Hypalon-p?ivitysvaihtoehdolla ja Australian standardin AS 1799 vaatimustenmukaisuudella.',
    rep: 'Australialainen jakelija tarvitsi CE-sertifioidun SUP-venemalliston räätälöidyillä putkiväreillä, Hypalon-päivitysvaihtoehdolla ja Australian standardin AS 1799 vaatimustenmukaisuudella.',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Tuotimme esituotanton?ytteet 4 putkiv?rivaihtoehdolla, hankimme CSM-Hypalonin japanilaiselta toimittajalta ja koordinoimme kolmannen osapuolen AS 1799 -vaatimustenmukaisuustestauksen.',
    rep: 'Tuotimme esituotantonäytteet 4 putkivärivaihtoehdolla, hankimme CSM-Hypalonin japanilaiselta toimittajalta ja koordinoimme kolmannen osapuolen AS 1799 -vaatimustenmukaisuustestauksen.',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: '3-mallin SUP-mallisto lanseerattiin AU/NZ-markkinoilla. Seurasi valtion tarjousvoitto 12 partio-SUP-veneest?.',
    rep: '3-mallin SUP-mallisto lanseerattiin AU/NZ-markkinoilla. Seurasi valtion tarjousvoitto 12 partio-SUP-veneestä.',
  },
];
