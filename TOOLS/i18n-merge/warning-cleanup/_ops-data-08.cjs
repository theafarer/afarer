// Shard 08 — fi/factory.yaml repair part 2: workshops/equipment (L66-104, 14 ops)
// ws1: dbl-space + ISO 6185; ws4: align to EN SUP assembly; rest: mojibake fix
module.exports = [
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'tagline: Ty?pajat',
    rep: 'tagline: Työpajat',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'title: Tuotantoty?pajat',
    rep: 'title: Tuotantotyöpajat',
  },
  // ws0
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Automaattiset CNC-leikkauskoneet k?sittelev?t PVC-, Hypalon- ja drop-stitch-kankaita alle millimetrin tarkkuudella. Tietokoneoptimoitu sijoittelu minimoi materiaalihukkaa ja varmistaa, ett? jokainen paneeli t?ytt?? mittam??rittelyns? ennen hitsausta.',
    rep: 'Automaattiset CNC-leikkauskoneet käsittelevät PVC-, Hypalon- ja drop-stitch-kankaita alle millimetrin tarkkuudella. Tietokoneoptimoitu sijoittelu minimoi materiaalihukkaa ja varmistaa, että jokainen paneeli täyttää mittamäärittelynsä ennen hitsausta.',
  },
  // ws1: dbl-spaces + missing ISO 6185 + mojibake
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Erillinen hitsausty?paja kuumasaumauskoneilla  ja RF-dielektrisill? puristimilla. Kuumailmatiivistimet liimaavat ja sulattavat PVC-putkikammioita, kun taas RF-hitsaus tuottaa lujia, ilmatiiviit? saumoja, jotka ylitt?v?t  -vaatimukset.',
    rep: 'Erillinen hitsaustyöpaja kuumasaumauskoneilla ja RF-dielektrisillä puristimilla. Kuumailmatiivistimet liimaavat ja sulattavat PVC-putkikammioita, kun taas RF-hitsaus tuottaa lujia, ilmatiiviitä saumoja, jotka ylittävät ISO 6185 -vaatimukset.',
  },
  // ws2 (mojibake only; fiberglass content drift = debt)
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'SUP-veneiden rungot valmistetaan k?sinlaminoimalla lasikuitua polyesteri- ja vinyyliesterihartsij?rjestelmill?. Jokainen kerros k?sitell??n k?sin ja tyhji?pussitetaan tasaisen laadun varmistamiseksi. Gelcoat-ruiskutuskoppi tuottaa korkeakiiltoisen, UV-kest?v?n meripinnan.',
    rep: 'SUP-veneiden rungot valmistetaan käsinlaminoimalla lasikuitua polyesteri- ja vinyyliesterihartsijärjestelmillä. Jokainen kerros käsitellään käsin ja tyhjiöpussitetaan tasaisen laadun varmistamiseksi. Gelcoat-ruiskutuskoppi tuottaa korkeakiiltoisen, UV-kestävän meripinnan.',
  },
  // ws3: dbl-spaces + mojibake
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'SUP-laudat koristellaan digitaalipainatuksella  t?ysv?rigrafiikoille ja silkkipainatuksella  logoille ja toistuville kuvioille. Digitaalitulostimet tuottavat valokuvanlaatuisia kansikuvioita, kun taas silkkipainatus tuottaa kest?vi?, kirkkaita br?ndimerkkej?.',
    rep: 'SUP-laudat koristellaan digitaalipainatuksella täysvärigrafiikoille ja silkkipainatuksella logoille ja toistuville kuvioille. Digitaalitulostimet tuottavat valokuvanlaatuisia kansikuvioita, kun taas silkkipainatus tuottaa kestäviä, kirkkaita brändimerkkejä.',
  },
  // ws4: old motorboat content → EN SUP assembly
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Kokoonpanolinja, jossa lasikuituiset rungot ja PVC-putket yhdistet??n, moottorit asennetaan, ohjaus- ja hallintalaitteet kytket??n ja s?hk?j?rjestelm?t johdotetaan. Jokainen vene noudattaa 100-pisteist? kokoonpanotarkistuslistaa, jonka tiiminvet?j? allekirjoittaa.',
    rep: 'Kokoonpanolinja, jossa venttiilit, D-renkaat, kahvat, evätelineet ja kansipehmusteet asennetaan jokaiseen SUP-lautaan. Jokainen lauta noudattaa 100-pisteistä kokoonpanotarkistuslistaa, jonka tiiminvetäjä allekirjoittaa.',
  },
  // ws5
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'Jokainen valmis vene k?y l?pi pakollisen ilmanpysyvyystestauksen, sauman vetolujuuden varmistuksen ja t?ydellisen j?rjestelm?tarkastuksen ennen l?hetyst?. Laatulaboratoriomme toimii riippumattomana tuotannosta ja raportoi suoraan johdolle.',
    rep: 'Jokainen valmis vene käy läpi pakollisen ilmanpysyvyystestauksen, sauman vetolujuuden varmistuksen ja täydellisen järjestelmätarkastuksen ennen lähetystä. Laatulaboratoriomme toimii riippumattomana tuotannosta ja raportoi suoraan johdolle.',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'view_full: Katso t?ydellinen laiteluettelo →',
    rep: 'view_full: Katso täydellinen laiteluettelo →',
  },
  // eq1 spec: temp mojibake
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'spec: Kuumailma, 200°C600 –C, putkien liitt?miseen',
    rep: 'spec: Kuumailma, 200–300 °C, putkien liittämiseen',
  },
  // eq3 (mojibake only; old fiberglass content drift = debt)
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'name: Lasikuituiset k?sinlaminaattimuotit',
    rep: 'name: Lasikuituiset käsilaminointimuotit',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'spec: SUP-rungot enint??n 6 m',
    rep: 'spec: SUP-rungot enintään 6 m',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'spec: T?ysv?riset SUP-kansigrafiikat',
    rep: 'spec: Täysväriset SUP-kansigrafiikat',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'spec: Moniv?rinen logojen painatus',
    rep: 'spec: Monivärinen logojen painatus',
  },
];
