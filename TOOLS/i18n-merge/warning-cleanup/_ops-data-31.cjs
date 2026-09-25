// shard 31: rf-welding family repair — fi/sv targeted linguistic fixes + fr full retranslation (intro + content_html) + fi/factory peel-term rider
module.exports = [
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: '  description: Radiotaajuushitasausteknologia määräystenmukaisten ilmatiivaiden saumien luomiseksi. Kuorimistestaus, ilmanpidätteston validointi ja mukautetut saumaspesifikaatiot.',
    rep: '  description: Radiotaajuushitsausteknologia määräystenmukaisten ilmatiivaiden saumien luomiseksi. Kuorintatestaus, ilmanpidon validointi ja räätälöidyt saumaspesifikaatiot.',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: '  subtitle: Sähköeristävä yhdistämistekniikka paineen kestäville hitsille',
    rep: '  subtitle: Dielektrinen liitostekniikka painetta kestäville hitsauksille',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: '  image_alt: Afarerin RF-hitsauksen dielektrinen liimausprosessi',
    rep: '  image_alt: Afarerin RF-hitsauksen dielektrinen liitosprosessi',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: '  Painistettava vene on yhtä luotettava kuin sen nahat. Yksi heikko hitsaus voi vaarantaa koko kamarin — ja merellä kamarin vika ei ole häiriö; se on turvallisuusriski. Olemme {SITE.name} investoineet erikoistuneeseen Radio-Frequency (RF) Hitsauskeskuksessa, joka yhdistää teollisuusstandardin\n  dielektrinen hitsauspainat ja tiukan prosessinvalvonnan sekä jälkihitsaus testauksen. Jokaisen nahteemme on dokumentoitu, jäljitettävissä ja todistettu täyttävän tai ylittävän vaatimukset — kansainvälinen ISO 6185 -standardi tulehdettavat veneet.',
    rep: '  Ilmatäytettävä vene on vain yhtä luotettava kuin saumansa. Yksi heikko hitsaus voi vaarantaa koko kammion — ja merellä kammion vika ei ole pelkkä häiriö; se on turvallisuusriski. {SITE.name}:llä olemme investoineet erikoistuneeseen RF-hitsauskeskukseen, joka yhdistää teollisuusluokan dielektriset hitsauspuristimet\n  tiukkaan prosessinvalvontaan ja hitsauksen jälkeiseen testaukseen. Jokainen tuottamamme sauma on dokumentoitu, jäljitettävissä ja sertifioitu täyttämään tai ylittämään vaatimukset — kansainvälinen ISO 6185 -standardi ilmatäytettäville veneille.',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'Salauksen takana oleva tiede',
    rep: 'Sauman takana oleva tiede',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'Päätpitkittäissaumat, ahtaajaputkiyhdistelmät',
    rep: 'Pääpitkittäissaumat, peräpeili-putkiyhdistelmät',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'CNC-säädettävä RF-hitsausteline',
    rep: 'CNC-ohjattu RF-hitsauskone',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'logo/paneeli kohopaino, tarkka paikkatöitä',
    rep: 'logo-/paneelikohopainatus, tarkkuuspaikkaukset',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'Kuumakiila-automaattihitsausteline',
    rep: 'Kuumakiila-automaattihitsauskone',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'Varaustapa Hypalon/CSM-materiaaleille',
    rep: 'Varamenetelmä Hypalon/CSM-materiaaleille',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'suljetun järjestelmän lämpötila- ja painevalvonnalla',
    rep: 'suljetun silmukan lämpötila- ja painevalvonnalla',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'pakollisella nelitestiohjelmalla',
    rep: 'pakollisella neljän testin ohjelmalla',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'epäkeskittymisen',
    rep: 'virheasennon',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'Vähimmäis-korruvoima',
    rep: 'Vähimmäiskuorintavoima',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: '<strong>Ilmantsapito testi</strong>',
    rep: '<strong>Ilmanpitotesti</strong>',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: '</strong> -näytekoappaleet kierretään',
    rep: '</strong> — näytekappaleet kierrätetään',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: '50 kiertoa, minkä jälkeen suoritetaan uusi koorrotesti',
    rep: '50 syklillä, minkä jälkeen suoritetaan uusi kuorintatesti',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'Koorrosvetolujuuden vertailu',
    rep: 'Kuorintavetolujuuden vertailu',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'Hitsausryhmämme on vanhemman prosessinsinöörin johdolla, jolla',
    rep: 'Hitsaustiimiämme johtaa vanhempi prosessinsinööri, jolla',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'ennen kuin hänet sallitaan työskentelemään',
    rep: 'ennen kuin hän saa työskennellä',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'tuotantosaumoissa. Uudelleensertifioinnin',
    rep: 'tuotantosaumoissa. Uudelleensertifiointi',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: '(korruvoima ≥ 160 N/25 mm)',
    rep: '(kuorintavoima ≥ 160 N/25 mm)',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'käytännön hitsustesti',
    rep: 'käytännön hitsauskoe',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: '<strong>Monikerroksiset vahvistuskappalet</strong>',
    rep: '<strong>Monikerroksiset vahvistuspaikkaukset</strong>',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'hankauslaitoihin ja keulakartioihin',
    rep: 'hankaussuojalistoihin ja keulakartioihin',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'kulumakestöisen ulkokerroksen lujuutta rajoittamatta',
    rep: 'kulumiskestävän ulkokerroksen joustavuutta heikentämättä',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'Johtavat tai RF-läpäisymättömät saumat',
    rep: 'Johtavat tai RF-epäläpäisevät saumat',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'Värin vaihtuvien paneelien hitsaus',
    rep: 'Värinvaihtopaneelien hitsaus',
  },
  {
    f: 'src/data/pages/fi/rf-welding.yaml',
    find: 'hitsataan piilollaulella',
    rep: 'hitsataan piilotetulla päällekkäisyydellä',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: '  description: Radiofrekvenssvetsteknik för att leverera efterlevnadskraftiga lufttätta sömmar. Peelingprovning, luftläckagevalidering och skräddarsydda sömmspecifikationer.',
    rep: '  description: Radiofrekvenssvetsteknik för att leverera regelkonforma lufttäta sömmar. Skalprovning, lufttäthetsvalidering och skräddarsydda sömmspecifikationer.',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: '  image_alt: Afarers RF-svets­process för die­lektrisk binding',
    rep: '  image_alt: Afarers RF-svetsprocess för dielektrisk binding',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: '  En oppustbar båt är bara så pålitlig som dess sömmar. En enda svag svetsning kan äventyra en hel kammare — och till havs är ett kammabrot en säkerhetsrisk, inte ett besvär. På {SITE.name} har vi investerat i ett dedikerat Radiofrekvens (RF) svetsningscenter som kombinerar industriella\n  dielektriska svetspressar med strikt processkontroll och efter-svetsprovning. Varje söm vi producerar dokumenteras, är spårbar och certifierad för att uppfylla eller överträffa kraven i ISO 6185 — den internationella standarden för oppustbara fartyg.',
    rep: '  En uppblåsbar båt är bara så pålitlig som dess sömmar. En enda svag svetsning kan äventyra en hel kammare — och till havs är en kammarruptur inte bara ett besvär; det är en säkerhetsrisk. På {SITE.name} har vi investerat i ett dedikerat RF-svetsningscenter som kombinerar industriella dielektriska svetspressar\n  med strikt processkontroll och eftersvetsprovning. Varje söm vi producerar dokumenteras, är spårbar och certifierad för att uppfylla eller överträffa kraven i ISO 6185 — den internationella standarden för uppblåsbara farkoster.',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'pola moleklerna',
    rep: 'polära molekylerna',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'varmlufts- eller vinkkantssvetsning',
    rep: 'varmlufts- eller varmkilsvetsning',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'Huvudlångsömmar, transom-rörfogar',
    rep: 'Huvudlängsömmar, akterspegel-till-rör-fogar',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'Bafflesvetsning',
    rep: 'Skottsvetsning',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'Kurvor, sömmar, logotyp-/panelpreget, precisionssvarsning',
    rep: 'Kurviga sömmar, logotyp-/panelpreget, exakta patcharbeten',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'Varmkantssvets automatisk',
    rep: 'Automatisk varmkilsvets',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'stängd slinga',
    rep: 'sluten slinga',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'lopsmeterna',
    rep: 'löpande metrarna',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'Varje färdig kamma ',
    rep: 'Varje färdig kammare ',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'och dragprovats därefter igen',
    rep: 'och dragprovas därefter igen',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'Acceptabelt styrkeförlust',
    rep: 'Acceptabel styrkeförlust',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'Vårt svetsningspersonal',
    rep: 'Vår svetsningspersonal',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'Omskolning krävs årligen',
    rep: 'Omcertifiering krävs årligen',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'svetspecifikation',
    rep: 'svetsspecifikation',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'skraplistar och bogsken',
    rep: 'slitlister och förstävskoner',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'utan att kompromissa flexibiliteten',
    rep: 'utan att äventyra flexibiliteten',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'svetsar vi ledande nät innanför sömsuppen',
    rep: 'svetsar vi in ledande nätlager i sömmens lageruppbyggnad',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: '<strong>Färgbyte panelsvetsning</strong>',
    rep: '<strong>Svetsning av färgväxlande paneler</strong>',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'driven av verklighetsbaserad driftdata',
    rep: 'styrd av verklig driftdata',
  },
  {
    f: 'src/data/pages/sv/rf-welding.yaml',
    find: 'font-medium"> min.</span>',
    rep: 'font-medium">Min.</span>',
  },
  {
    f: 'src/data/pages/fr/rf-welding.yaml',
    find: '  description: "Technologie de soudure radiofréquence pour joints étanches conformes. Tests de pelage, rétention d\'air et assemblage des SUP gonflables et bateaux PVC."',
    rep: "  description: 'Technologie de soudage par radiofréquence pour des soudures étanches conformes. Essais de pelage, validation de la rétention d’air et spécifications de soudures personnalisées.'",
  },
  {
    f: 'src/data/pages/fr/rf-welding.yaml',
    find: "intro: Un bateau gonflable n'est aussi fiable que ses soudures. Une seule soudure faible peut compromettre une chambre entière. Chez {SITE.name}, nous avons investi dans un Centre de Soudure RF dédié combinant des presses de soudure diélectrique industrielles avec un contrôle de processus rigoureux.",
    rep: 'intro: Un bateau gonflable n’est jamais plus fiable que ses soudures. Une seule soudure défaillante peut compromettre une chambre entière — et en mer, la défaillance d’une chambre n’est pas un simple désagrément ; c’est un danger pour la sécurité. Chez {SITE.name}, nous avons investi dans un Centre de Soudure RF dédié, qui combine des presses de soudage diélectrique de qualité industrielle avec un contrôle rigoureux des processus et des essais après soudure. Chaque soudure que nous produisons est documentée, traçable et certifiée pour satisfaire ou dépasser les exigences de la norme ISO 6185 — la référence internationale pour les embarcations gonflables.',
  },
  {
    f: 'src/data/pages/fr/rf-welding.yaml',
    find: 'par soudure RF afarer',
    rep: 'par soudure RF d’Afarer',
  },
  {
    f: 'src/data/pages/fr/rf-welding.yaml',
    find: "  <h2>La science derrière la soudure</h2>\n  <p>La soudure RF utilise de l'énergie électromagnétique haute fréquence (généralement 27,12 MHz) pour exciter les molécules polaires dans le tissu enduit PVC ou Hypalon, générant de la chaleur précisément à l'interface du matériau. Contrairement à la soudure à air chaud ou à coin chaud, la soudure RF crée une véritable liaison moléculaire — les deux couches de tissu fusionnent en un seul matériau homogène dans la zone de soudure, produisant un joint aussi résistant que le matériau lui-même.</p>\n\n  <h2>Cycle de soudure RF</h2>\n  <ul>\n    <li><strong>Chargement :</strong> Les pièces sont placées entre des électrodes en laiton\n    </li>\n    <li><strong>Pressage :</strong> Les électrodes se ferment avec une force contrôlée\n    </li>\n    <li><strong>Soudure :</strong> L'énergie RF est appliquée pendant 2–8 secondes selon l'épaisseur\n    </li>\n    <li><strong>Refroidissement :</strong> Le joint refroidit sous pression pour cristalliser la liaison\n    </li>\n    <li><strong>Déchargement :</strong> La pièce finie est retirée pour inspection</li>\n  </ul>\n\n  <h2>Contrôle qualité</h2>\n  <p>Chaque soudure est inspectée visuellement et testée selon notre protocole obligatoire à quatre niveaux : inspection visuelle, test de pelage, test d'étanchéité et cyclage thermique. Notre équipe de soudage est dirigée par un ingénieur senior avec 11 ans d'expérience.</p>\n\n  <h2>Notre engagement</h2>\n  <p>Chaque bateau que nous livrons est accompagné de notre garantie de qualité de soudure : si une soudure défaille en service normal pendant la période de garantie, nous réparons ou remplaçons la chambre concernée sans frais. Choisir afarer, c'est choisir des soudures conçues, testées et documentées — pas simplement soudées.</p>",
    rep: '  <h2>La science derrière la soudure</h2>\n  <p>La soudure RF utilise une énergie électromagnétique haute fréquence (généralement 27,12 MHz) pour exciter les molécules polaires au sein du tissu enduit de PVC ou d’Hypalon, générant de la chaleur précisément à l’interface du matériau. Contrairement au soudage à l’air chaud ou à coin chaud, la soudure RF crée une véritable liaison moléculaire — les deux couches de tissu fusionnent en un matériau homogène unique dans la zone de soudure, produisant un joint aussi résistant que le matériau de base lui-même.</p>\n\n  <h2>Équipements de soudage et contrôle des processus</h2>\n  <p>Notre centre de soudage est équipé de :</p>\n  <table>\n    <thead><tr><th>Machine</th><th>Puissance / Capacité</th><th>Application</th></tr></thead>\n    <tbody>\n      <tr><td>Presse RF diélectrique 1</td><td>15 kW, plateau 2000 × 600 mm</td><td>Soudures longitudinales principales, jonctions tableau-tube</td></tr>\n      <tr><td>Presse RF diélectrique 2</td><td>10 kW, plateau 1500 × 500 mm</td><td>Soudure des cloisons, fixation des cônes, patchs de valves</td></tr>\n      <tr><td>Soudeuse RF à commande CNC</td><td>8 kW, table XY 2500 × 1200 mm</td><td>Soudures courbes, gaufrage logo/panneau, patchwork de précision</td></tr>\n      <tr><td>Soudeuse automatique à coin chaud</td><td>Température variable, 1,2 m/min max</td><td>Méthode de secours pour les matériaux Hypalon/CSM</td></tr>\n    </tbody>\n  </table>\n  <p>Chaque presse RF est dotée d’une surveillance de la température et de la pression en boucle fermée. Les paramètres de soudage — puissance, temps de pressage, temps de refroidissement, pression des électrodes — sont programmés par type de matériau et consignés dans notre système de gestion de production (MES) pour une traçabilité complète.</p>\n\n  <h2>Essais de qualité des soudures — chaque soudure, chaque bateau</h2>\n  <p>L’intégrité des soudures est vérifiée par un protocole obligatoire de quatre essais :</p>\n  <ol>\n    <li><strong>Inspection visuelle</strong> — 100 % des soudures sont inspectées visuellement afin de détecter tout percement, désalignement, contamination ou fusion incomplète. Seuil de rejet : 0,5 % des mètres linéaires.</li>\n    <li><strong>Essai de pelage</strong> — Une bande de 25 mm de large est découpée dans une éprouvette soudée avec chaque lot de production. Force de pelage minimale : 120 N/25 mm pour le PVC 1100 dtex.</li>\n    <li><strong>Essai de rétention d’air</strong> — Chaque chambre achevée est pressurisée à 1,5 × la pression de service et maintenue pendant 30 minutes. La chute de pression ne doit pas dépasser 2 %.</li>\n    <li><strong>Essai de cyclage thermique</strong> — Les éprouvettes subissent 50 cycles de -20 °C à +60 °C, puis sont à nouveau soumises à l’essai de pelage. Perte de résistance acceptable : &lt; 10 %.</li>\n  </ol>\n\n  <div class="not-prose my-10 p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">\n    <p class="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Comparaison de la résistance au pelage — Soudure RF vs soudage à l’air chaud (PVC 1100 dtex)</p>\n    <div class="space-y-3">\n      <div class="flex items-center gap-3">\n        <span class="w-24 text-xs font-medium">Soudure RF</span>\n        <div class="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded">\n          <div class="h-full bg-blue-600 rounded" style="width:92%"></div>\n        </div>\n        <span class="text-xs font-bold w-12 text-right">184 N</span>\n      </div>\n      <div class="flex items-center gap-3">\n        <span class="w-24 text-xs font-medium">Air chaud</span>\n        <div class="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded">\n          <div class="h-full bg-gray-400 rounded" style="width:65%"></div>\n        </div>\n        <span class="text-xs font-bold w-12 text-right">130 N</span>\n      </div>\n      <div class="flex items-center gap-3">\n        <span class="w-24 text-xs font-medium">Min.</span>\n        <div class="flex-1 h-6 bg-gray-200 dark:bg-gray-700 rounded">\n          <div class="h-full bg-green-500 rounded" style="width:48%"></div>\n        </div>\n        <span class="text-xs font-bold w-12 text-right">96 N</span>\n      </div>\n    </div>\n    <p class="text-xs text-gray-400 mt-2">La soudure RF atteint systématiquement 90-95 % de la résistance du matériau de base, bien au-delà du minimum requis.</p>\n  </div>\n\n  <h2>Expertise professionnelle</h2>\n  <p>Notre équipe de soudage est dirigée par un ingénieur processus senior fort de 11 ans d’expérience dans le soudage diélectrique des textiles enduits. Chaque opérateur suit un programme de certification interne de 6 mois avant d’être autorisé à travailler sur les soudures de production. Une recertification est requise chaque année, avec un essai de soudure pratique évalué selon notre norme interne de grade A (résistance au pelage ≥ 160 N/25 mm).</p>\n\n  <h2>Solutions de soudage personnalisées pour des exigences uniques</h2>\n  <p>Nous savons qu’une même spécification de soudage ne convient pas à toutes les applications. Notre Centre de Soudure RF développe régulièrement des configurations de soudures personnalisées pour les clients aux exigences particulières :</p>\n  <ul>\n    <li><strong>Patchs de renforcement multicouches</strong> — pour les zones très sollicitées comme les listons de protection et les cônes de proue, nous développons des soudures RF multipasses intégrant une couche extérieure résistante à l’abrasion sans compromettre la flexibilité.</li>\n    <li><strong>Soudures conductrices ou opaques aux RF</strong> — pour les navires militaires ou de surveillance nécessitant un blindage électromagnétique, nous soudons des couches de maillage conducteur au sein de l’empilement de la soudure.</li>\n    <li><strong>Soudure de panneaux bicolores</strong> — panneaux de tissu bicolores (par ex. coque orange + dessus gris) soudés avec un recouvrement dissimulé afin de préserver l’esthétique de la marque sans ligne de jonction visible.</li>\n  </ul>\n\n  <h2>Notre engagement envers vous</h2>\n  <p>Chaque bateau que nous livrons est couvert par notre garantie de qualité de soudure : si une soudure cède en service normal pendant la période de garantie, nous réparons ou remplaçons la chambre concernée sans frais, et une analyse de la cause première est menée pour éviter toute récidive. Ce n’est pas une simple garantie — c’est un engagement en faveur d’une amélioration continue, nourri par des données opérationnelles réelles.</p>\n  <p>En choisissant {SITE.name}, vous choisissez des soudures conçues, testées et documentées — pas seulement soudées. C’est la différence entre un bateau qui flotte et un bateau qui performe.</p>',
  },
  {
    f: 'src/data/pages/fi/factory.yaml',
    find: 'qc_threshold: Koorroisuus väh. 8 N/cm. Hitsin leveyden toleranssi ±1 mm. Mikä tahansa näkyvä kanaali = hylkää',
    rep: 'qc_threshold: Kuorintalujuus väh. 8 N/cm. Hitsin leveyden toleranssi ±1 mm. Mikä tahansa näkyvä kanavointi = hylkää',
  },
];
