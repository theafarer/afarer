// Shard 10 — fi/factory.yaml repair part 4: FAQ + process_cta (L137-146 + L268, 6 ops)
// L141: mojibake + dbl-space + missing ISO 9001 + " ." scar; L144: °C-corrupted ranges
module.exports = [
  // faq q1
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Mik? on v?himm?istilausm??r? (MOQ) OEM-kumisille SUP-laudoille?',
    rep: 'Mikä on vähimmäistilausmäärä (MOQ) OEM-kumisille SUP-laudoille?',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'MOQ alkaa 5–10 yksiköstä vakio-OEM-malleille. R??t?l?idyt muotit ja oman etiketin projektit vaativat v?hint??n 200 yksikk?? riippuen monimutkaisuudesta. Koetilaukset ja n?yte-er?t ovat saatavilla uusille br?ndilanseerauksille.',
    rep: 'MOQ alkaa 5–10 yksiköstä vakio-OEM-malleille. Räätälöidyt muotit ja oman etiketin projektit vaativat vähintään 200 yksikköä riippuen monimutkaisuudesta. Koetilaukset ja näyte-erät ovat saatavilla uusille brändilanseerauksille.',
  },
  // faq q2 (BSCI answer, folded block)
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Kyll?. Tehtaallamme on voimassa oleva BSCI-sosiaalinen vaatimustenmukaisuussertifiointi (auditointiraportti saatavilla pyynn?st?). Meill? on my?s  laadunhallinnalle ja kaikki tuotteet ovat CE-sertifioituja . REACH- ja RoHS-vaatimustenmukaisuusdokumentaatio toimitetaan jokaisen\n        OEM-toimituksen mukana.',
    rep: 'Kyllä. Tehtaallamme on voimassa oleva BSCI-sosiaalisen vaatimustenmukaisuuden sertifiointi (auditointiraportti saatavilla pyynnöstä). Meillä on myös ISO 9001 -sertifiointi laadunhallinnalle, ja kaikki tuotteet ovat CE-sertifioituja. REACH- ja RoHS-vaatimustenmukaisuusdokumentaatio toimitetaan jokaisen\n        OEM-toimituksen mukana.',
  },
  // faq q3: °C-corrupted ranges
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Vakiotoimitusaika on 30°C45 p?iv?? vahvistetusta ostotilauksesta ja k?sirahasta. R??t?l?ityjen muottien kehitys lis?? 15°C20 p?iv?? ty?kalujen valmistukseen. Tarjoamme nopeutettua tuotantoa kiireellisille tilauksille ja sesonkikiireille ennen kes?? (tammi°Cmaaliskuu).',
    rep: 'Vakiotoimitusaika on 30–45 päivää vahvistetusta ostotilauksesta ja käsirahasta. Räätälöityjen muottien kehitys lisää 15–20 päivää työkalujen valmistukseen. Tarjoamme nopeutettua tuotantoa kiireellisille tilauksille ja sesonkikiireille ennen kesää (tammi–maaliskuu).',
  },
  // faq q4
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Kyll?. Toimitamme FOB Qingdao, CIF t?rkeimpiin maailmansatamiin ja DDP p?teville kumppaneille. Logistiikkatiimimme hoitaa konttivarauksen, vientidokumentaation ja tulliselvityksen. Toimitamme yli 50 maahan EU:n, USA:n, AU:n ja Aasian markkinoilla.',
    rep: 'Kyllä. Toimitamme FOB Qingdao, CIF tärkeimpiin maailmansatamiin ja DDP päteville kumppaneille. Logistiikkatiimimme hoitaa konttivarauksen, vientidokumentaation ja tulliselvityksen. Toimitamme yli 50 maahan EU:n, USA:n, AU:n ja Aasian markkinoilla.',
  },
  // process_cta desc
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'desc: Seuraa venett? l?pi jokaisen tuotannon vaiheen —raaka-aineesta merivalmiiksi alukseksi.',
    rep: 'desc: Seuraa venettä läpi jokaisen tuotannon vaiheen —raaka-aineesta merivalmiiksi alukseksi.',
  },
];
