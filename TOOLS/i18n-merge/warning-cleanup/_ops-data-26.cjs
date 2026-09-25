// Shard 26 - content-drift fixes (shard 26 batch; EN quality UV rewrite + locale mirrors,
// safety da/ro/th, academy ja/ko, factory stats, 50+ countries, sol-dist regions, el/ar/fr/ru prose)
module.exports = [
  {
    f: 'src/data/pages/quality.yaml',
    find: '  - title: UV Resistance Testing\n    description: Inflatable chambers are subjected to pressures exceeding their recommended operating limits for extended periods. This verifies the airtightness and structural integrity of the material and seams, ensuring the product can withstand intended use and potential over-inflation without failure or leaks.',
    rep: '  - title: UV Resistance Testing\n    description: Material samples undergo accelerated UV exposure simulating years of harsh sunlight, then are re-tested for tensile strength retention and colorfastness. This verifies the PVC and Hypalon compounds resist fading, chalking, and cracking, ensuring long-term durability in sunny marine environments.',
  },
  {
    f: 'src/data/pages/de/quality.yaml',
    find: '  - title: UV-Beständigkeitsprüfung\n    description: >-\n      Aufblasbare Kammern werden über längere Zeiträume Drücken ausgesetzt, die über den empfohlenen Betriebsgrenzen liegen. Dies überprüft die Luftdichtheit und strukturelle Integrität des Materials und der Nähte und stellt sicher, dass das Produkt dem vorgesehenen Gebrauch und möglicher Überdruck\n      standhält, ohne zu versagen oder undicht zu werden.',
    rep: '  - title: UV-Beständigkeitsprüfung\n    description: Materialproben durchlaufen eine beschleunigte UV-Belastung, die Jahre intensiver Sonneneinstrahlung simuliert, und werden anschließend auf Zugfestigkeit und Farbechtheit geprüft. Dies bestätigt, dass die PVC- und Hypalon-Verbindungen Verblassen, Kreiden und Rissbildung widerstehen und langfristige Haltbarkeit in sonnigen maritimen Umgebungen sicherstellen.',
  },
  {
    f: 'src/data/pages/es/quality.yaml',
    find: '  - title: Prueba de resistencia a los rayos UV\n    description: >-\n      Los productos finales se exponen a luz solar simulada durante períodos prolongados para evaluar la resistencia del material a la degradación, la decoloración y el debilitamiento causados por la exposición prolongada a los rayos UV, algo crítico para los botes usados en entornos tropicales y de\n      alta radiación solar.',
    rep: '  - title: Prueba de resistencia a los rayos UV\n    description: Las muestras de material se someten a una exposición UV acelerada que simula años de luz solar intensa y luego se vuelven a evaluar para verificar la retención de resistencia a la tracción y la solidez del color. Esto confirma que los compuestos de PVC y Hypalon resisten la decoloración, el deslustrado y el agrietamiento, garantizando durabilidad a largo plazo en entornos marinos soleados.',
  },
  {
    f: 'src/data/pages/fr/quality.yaml',
    find: '  - title: Tests de Résistance UV\n    description: Les chambres gonflables sont soumises à des pressions dépassant leurs limites de fonctionnement recommandées pendant des périodes prolongées. Cela vérifie l’étanchéité et l’intégrité structurelle du matériau et des joints, garantissant que le produit peut résister à l’utilisation prévue et à une éventuelle surpression sans défaillance ni fuite.',
    rep: '  - title: Tests de Résistance UV\n    description: Les échantillons de matière subissent une exposition UV accélérée simulant des années de fort ensoleillement, puis sont retestés pour la rétention de résistance à la traction et la solidité des couleurs. Cela vérifie que les composés PVC et Hypalon résistent au délavage, au farinage et à la fissuration, garantissant une durabilité à long terme dans les environnements marins ensoleillés.',
  },
  {
    f: 'src/data/pages/it/quality.yaml',
    find: "  - title: Test di resistenza ai UV\n    description: >-\n      Le camere gonfiabili vengono sottoposte a pressioni superiori ai loro limiti operativi raccomandati per periodi prolungati. Ciò verifica la tenuta all'aria e l'integrità strutturale del materiale e delle giunture, assicurando che il prodotto resista all'uso previsto e alla possibile\n      sovrappressione senza cedimenti o perdite.",
    rep: '  - title: Test di resistenza ai UV\n    description: I campioni di materiale vengono sottoposti a esposizione UV accelerata che simula anni di intensa luce solare, per poi essere nuovamente testati per resistenza a trazione e solidità del colore. Questo verifica che i composti in PVC e Hypalon resistano a sbiadimento, ingrigimento e fessurazione, garantendo durabilità a lungo termine in ambienti marini soleggiati.',
  },
  {
    f: 'src/data/pages/pt/quality.yaml',
    find: '  - title: Teste de Resistência UV\n    description: >-\n      As câmaras infláveis são submetidas a pressões que excedem os seus limites operacionais recomendados por períodos prolongados. Isto verifica a estanqueidade e integridade estrutural do material e costuras, garantindo que o produto suporta o uso pretendido e potencial sobre-inflação sem falhas\n      ou fugas.',
    rep: '  - title: Teste de Resistência UV\n    description: As amostras de material são submetidas a exposição UV acelerada que simula anos de luz solar intensa e depois reavaliadas quanto à retenção de resistência à tração e à solidez da cor. Isso verifica que os compostos de PVC e Hypalon resistem ao desbotamento, ao esfarelamento e ao rachamento, garantindo durabilidade a longo prazo em ambientes marinhos ensolarados.',
  },
  {
    f: 'src/data/pages/nl/quality.yaml',
    find: '  - title: UV-bestendigheidstest\n    description: Luchtkamers worden gedurende langere tijd blootgesteld aan druk boven de aanbevolen werklimieten. Dit verifieert de luchtdichtheid en structurele integriteit van materiaal en naden, en zorgt dat het product bestand is tegen normaal gebruik en mogelijk overmatig oppompen zonder falen of lekken.',
    rep: '  - title: UV-bestendigheidstest\n    description: Materiaalmonsters ondergaan een versnelde UV-blootstelling die jaren fel zonlicht simuleert en worden daarna opnieuw getest op behoud van treksterkte en kleurechtheid. Dit bevestigt dat PVC- en Hypalon-samenstellingen bestand zijn tegen verkleuring, krijtvorming en scheurvorming, wat duurzaamheid op lange termijn in zonnige mariene omgevingen waarborgt.',
  },
  {
    f: 'src/data/pages/pl/quality.yaml',
    find: '  - title: Test odporności na promieniowanie UV\n    description: >-\n      Komory pneumatyczne są poddawane ciśnieniu przekraczającemu zalecane limity robocze przez dłuższy czas. Weryfikuje to szczelność i integralność strukturalną materiału oraz szwów, zapewniając, że produkt wytrzyma zamierzone użytkowanie i potencjalne nadmierne napompowanie bez awarii lub\n      przecieków.',
    rep: '  - title: Test odporności na promieniowanie UV\n    description: Próbki materiału poddaje się przyspieszonemu naświetlaniu UV symulującemu lata ostrej ekspozycji słonecznej, a następnie ponownie bada zachowanie wytrzymałości na rozciąganie i odporność barw. Weryfikuje to, że mieszanki PVC i Hypalon opierają się blaknięciu, skórkowaniu i pękaniu, zapewniając długotrwałą trwałość w słonecznych warunkach morskich.',
  },
  {
    f: 'src/data/pages/ru/quality.yaml',
    find: '  - title: Испытание на стойкость к УФ-излучению\n    description: >-\n      Надувные камеры подвергаются давлению, превышающему рекомендуемые рабочие пределы, в течение длительного времени. Это проверяет герметичность и структурную целостность материала и швов, гарантируя, что изделие выдерживает предполагаемое использование и возможное перекачивание без отказов или\n      утечек.',
    rep: '  - title: Испытание на стойкость к УФ-излучению\n    description: Образцы материалов проходят ускоренное УФ-облучение, имитирующее годы интенсивного солнца, а затем повторно испытываются на сохранение прочности на разрыв и цветостойкость. Это подтверждает, что компаунды ПВХ и Hypalon устойчивы к выцветанию, мелению и растрескиванию, обеспечивая долговечность в солнечных морских условиях.',
  },
  {
    f: 'src/data/pages/cs/quality.yaml',
    find: '  - title: Testování odolnosti proti UV\n    description: Nafukovací komory jsou vystaveny tlaku přesahujícímu doporučené provozní limity po delší dobu. To ověřuje vzduchotěsnost a strukturální integritu materiálu a švů, zajišťující, že produkt vydrží zamýšlené použití a případné přehuštění bez selhání nebo netěsností.',
    rep: '  - title: Testování odolnosti proti UV\n    description: Vzorky materiálu procházejí urychleným UV vystavením simulujícím roky silného slunečního záření a následně se znovu testuje zachování pevnosti v tahu a stálost barev. To ověřuje, že směsi PVC a Hypalon odolávají vyblednutí, křídění a praskání a zajišťují dlouhodobou odolnost ve slunných mořských prostředích.',
  },
  {
    f: 'src/data/pages/da/quality.yaml',
    find: '  - title: UV-modstandstestning\n    description: Færdige produkter udsættes for simuleret sollys i længere perioder.',
    rep: '  - title: UV-modstandstestning\n    description: Materialeprøver udsættes for accelereret UV-eksponering, der simulerer års hård sol, og testes derefter igen for fastholdelse af trækstyrke og farveægthed. Det bekræfter, at PVC- og Hypalon-blandinger modstår falming, kridtning og revnedannelse og sikrer langvarig holdbarhed i solrige marine omgivelser.',
  },
  {
    f: 'src/data/pages/sv/quality.yaml',
    find: '  - title: UV-beständighetstest\n    description: Luftkammare utsätts för tryck över rekommenderade driftsgränser under längre tid. Detta verifierar lufttäthet och strukturell integritet hos material och sömmar, vilket säkerställer att produkten tål avsedd användning och potentiell överpumpning utan fel eller läckor.',
    rep: '  - title: UV-beständighetstest\n    description: Materialprover utsätts för accelererad UV-exponering som simulerar års hårt solljus och testas därefter igen för behållen draghållfasthet och färgäkthet. Detta bekräftar att PVC- och Hypalon-blandningar motstår urblekning, kritning och sprickbildning och säkerställer långsiktig hållbarhet i soliga marina miljöer.',
  },
  {
    f: 'src/data/pages/no/quality.yaml',
    find: '  - title: UV-motstandstest\n    description: Luftkamre utsettes for trykk over anbefalte arbeidsgrenser over lengre tid. Dette verifiserer tetthet og strukturell integritet av materiale og sømmer, og sikrer at produktet tåler tiltenkt bruk og potensiell overoppblåsing uten feil eller lekkasjer.',
    rep: '  - title: UV-motstandstest\n    description: Materialeprøver utsettes for akselerert UV-eksponering som simulerer års hard sol, og testes deretter på nytt for beholdt strekkfasthet og fargeektehet. Dette bekrefter at PVC- og Hypalon-blandinger motstår falming, krittning og sprekkdannelse og sikrer langvarig holdbarhet i solrike marine omgivelser.',
  },
  {
    f: 'src/data/pages/fi/quality.yaml',
    find: '  - title: UV-kestävyystestaus\n    description: >-\n      Täytettäviä kammioita altistetaan niiden suositeltuja käyttörajoja korkeammille paineille pitkien ajanjaksojen ajan. Tämä varmistaa materiaalin ja saumojen ilmatiiviyden sekä rakenteellisen eheyden varmistaen, että tuote kestää aiottua käyttöä ja mahdollista ylitäyttöä ilman vikoja tai\n      vuotoja.',
    rep: '  - title: UV-kestävyystestaus\n    description: Materiaalinäytteet altistetaan kiihdytetylle UV-säteilylle, joka simuloi vuosien ankaraa aurinkoa, ja ne testataan sen jälkeen uudelleen vetolujuuden säilymisen ja valonkestävyyden osalta. Tämä varmistaa, että PVC- ja Hypalon-seokset kestävät haalistumista, liituumista ja halkeilua, mikä takaa pitkän käyttöiän aurinkoisissa meriympäristöissä.',
  },
  {
    f: 'src/data/pages/ro/quality.yaml',
    find: '  - title: Testare rezistență UV\n    description: Produsele finite sunt expuse la lumină solară simulată pentru perioade îndelungate.',
    rep: '  - title: Testare rezistență UV\n    description: Probele de material sunt supuse unei expuneri UV accelerate care simulează ani de soare puternic, apoi sunt retestate pentru menținerea rezistenței la tracțiune și rezistența culorii la lumină. Aceasta verifică faptul că compozițiile PVC și Hypalon rezistă la decolorare, pulverizare și crăpare, asigurând durabilitate pe termen lung în medii marine însorite.',
  },
  {
    f: 'src/data/pages/el/quality.yaml',
    find: '  - title: Δοκιμή αντοχής σε UV\n    description: >-\n      Οι αεροθάλαμοι υποβάλλονται σε πίεση που υπερβαίνει τα συνιστώμενα όρια λειτουργίας για παρατεταμένο χρονικό διάστημα. Αυτό επαληθεύει τη στεγανότητα και τη δομική ακεραιότητα του υλικού και των ραφών, διασφαλίζοντας ότι το προϊόν αντέχει την προβλεπόμενη χρήση και πιθανό υπερφούσκωμα χωρίς\n      βλάβη ή διαρροές.',
    rep: '  - title: Δοκιμή αντοχής σε UV\n    description: Δείγματα υλικών υφίστανται επιταχυνόμενη έκθεση UV που προσομοιώνει χρόνια έντονης ηλιοφάνειας και στη συνέχεια ελέγχονται ξανά για διατήρηση της αντοχής σε εφελκυσμό και τη σταθερότητα του χρώματος. Αυτό επαληθεύει ότι οι ενώσεις PVC και Hypalon αντιστέκονται στο ξεθώριασμα, την κιμωλίαση και τη ράγισμα, διασφαλίζοντας μακροχρόνια ανθεκτικότητα σε ηλιόλουστα θαλάσσια περιβάλλοντα.',
  },
];
