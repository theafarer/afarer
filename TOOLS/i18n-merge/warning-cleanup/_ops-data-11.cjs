// Shard 11 — FAQ dup fix A (7 ops): fr/de/es/it/pl/nl/sv
// q2 (lead time) answer was copy-pasted from q1 (BSCI) — replace with proper lead-time answer.
// Find includes the q2 question line for disambiguation (answer text appears twice pre-fix).
module.exports = [
  {
    f: 'src/data/pages/fr/factory.yaml',
    find: "    - q: Quel est le délai habituel pour une commande OEM ?\n      a: Oui. Notre usine maintient une certification de conformité sociale BSCI valide (rapport d'audit disponible sur demande). Nous détenons également la certification pour la gestion de la qualité et tous les produits portent la certification CE. La documentation de conformité REACH et RoHS est fournie avec chaque expédition OEM.",
    rep: "    - q: Quel est le délai habituel pour une commande OEM ?\n      a: Le délai standard est de 30 à 45 jours à partir de la commande confirmée et de l'acompte pour la production OEM en série. Le développement de moules personnalisés ajoute 15 à 20 jours pour l'outillage. Une production accélérée est disponible pour les commandes urgentes et les pics saisonniers. Les échantillons de prototype sont généralement expédiés sous 15 à 20 jours.",
  },
  {
    f: 'src/data/pages/de/factory.yaml',
    find: '    - q: Wie ist die typische Lieferzeit für einen OEM-Auftrag?\n      a: Ja. Unser Werk unterhält eine gültige BSCI-Social-Compliance-Zertifizierung (Prüfbericht auf Anfrage erhältlich). Wir besitzen auch  für Qualitätsmanagement und alle Produkte tragen die CE-Zertifizierung . REACH- und RoHS-Konformitätsdokumentation wird mit jeder OEM-Sendung bereitgestellt.',
    rep: '    - q: Wie ist die typische Lieferzeit für einen OEM-Auftrag?\n      a: Die Standardlieferzeit beträgt 30–45 Tage ab bestätigter Bestellung und Anzahlung für die OEM-Serienproduktion. Für die Entwicklung kundenspezifischer Formen kommen 15–20 Tage für den Werkzeugbau hinzu. Für dringende Aufträge und saisonale Spitzen ist eine beschleunigte Produktion verfügbar. Prototypenmuster werden in der Regel innerhalb von 15–20 Tagen versendet.',
  },
  {
    f: 'src/data/pages/es/factory.yaml',
    find: '    - q: ¿Cuál es el plazo de entrega típico para un pedido OEM?\n      a: >-\n        Sí. Nuestra fábrica mantiene una certificación válida de cumplimiento social BSCI (informe de auditoría disponible bajo solicitud). También contamos con la certificación de gestión de calidad y todos los productos llevan la certificación CE. Documentación de cumplimiento de REACH y RoHS\n        proporcionada con cada envío OEM.',
    rep: '    - q: ¿Cuál es el plazo de entrega típico para un pedido OEM?\n      a: >-\n        El plazo de entrega estándar es de 30 a 45 días desde el pedido confirmado y el depósito para la producción OEM en serie. El desarrollo de moldes personalizados añade 15 a 20 días para la fabricación de utillaje. Hay producción acelerada disponible para pedidos urgentes y picos estacionales.\n        Las muestras de prototipo normalmente se envían en un plazo de 15 a 20 días.',
  },
  {
    f: 'src/data/pages/it/factory.yaml',
    find: '    - q: Qual è il tempo di consegna tipico per un ordine OEM?\n      a: Sì. La nostra fabbrica mantiene una certificazione conformità sociale BSCI valida (rapporto audit disponibile su richiesta). Deteniamo anche  per la gestione qualità e tutti i prodotti portano la certificazione CE . La documentazione conformità REACH e RoHS è fornita con ogni spedizione OEM.',
    rep: "    - q: Qual è il tempo di consegna tipico per un ordine OEM?\n      a: Il tempo di consegna standard è di 30–45 giorni dall'ordine confermato e dal deposito per la produzione OEM in serie. Lo sviluppo di stampi personalizzati aggiunge 15–20 giorni per la realizzazione degli stampi. È disponibile una produzione accelerata per ordini urgenti e picchi stagionali. I campioni prototipo vengono in genere spediti entro 15–20 giorni.",
  },
  {
    f: 'src/data/pages/pl/factory.yaml',
    find: '    - q: Jaki jest typowy czas realizacji zamówienia OEM?\n      a: Tak. Nasza fabryka utrzymuje ważny certyfikat zgodności społecznej BSCI (raport z audytu dostępny na żądanie). Posiadamy również  do zarządzania jakością, a wszystkie produkty posiadają certyfikat CE . Dokumentacja zgodności REACH i RoHS jest dostarczana z każdą przesyłką OEM.',
    rep: '    - q: Jaki jest typowy czas realizacji zamówienia OEM?\n      a: Standardowy czas realizacji wynosi 30–45 dni od potwierdzenia zamówienia i wpłaty zaliczki przy produkcji OEM w seriach. Opracowanie niestandardowych form dodaje 15–20 dni na wykonanie narzędzi. Przyspieszona produkcja jest dostępna dla pilnych zamówień i sezonowych szczytów. Próbki prototypowe są zazwyczaj wysyłane w ciągu 15–20 dni.',
  },
  {
    f: 'src/data/pages/nl/factory.yaml',
    find: '    - q: Wat is de typische levertijd voor een OEM-bestelling?\n      a: Ja. Onze fabriek beschikt over een geldige BSCI sociale nalevingscertificering (auditrapport op verzoek beschikbaar). We hebben ook  voor kwaliteitsmanagement en alle producten hebben CE -certificering. REACH- en RoHS-nalevingsdocumentatie wordt bij elke OEM-zending geleverd.',
    rep: '    - q: Wat is de typische levertijd voor een OEM-bestelling?\n      a: De standaardlevertijd is 30–45 dagen na bevestigde order en aanbetaling voor serie-OEM-productie. De ontwikkeling van aangepaste mallen voegt 15–20 dagen voor gereedschapsbouw toe. Versnelde productie is beschikbaar voor dringende orders en seizoenspieken. Prototype-monsters worden doorgaans binnen 15–20 dagen verzonden.',
  },
  {
    f: 'src/data/pages/sv/factory.yaml',
    find: '    - q: Vad är typisk ledtid för en OEM-beställning?\n      a: Ja. Vår fabrik har ett giltigt BSCI-intyg om social regelefterlevnad (revisionsrapport tillgänglig på begäran). Vi är även certifierade för kvalitetsledning, och alla produkter är CE-certifierade. REACH- och RoHS-efterlevnadsdokumentation medföljer varje OEM-leverans.',
    rep: '    - q: Vad är typisk ledtid för en OEM-beställning?\n      a: Standardledtiden är 30–45 dagar från bekräftad order och deposition för OEM-serieproduktion. Utveckling av anpassade formar tillför 15–20 dagar för verktygstillverkning. Accelererad produktion finns tillgänglig för brådskande order och säsongstoppar. Prototypexemplar skickas normalt inom 15–20 dagar.',
  },
];
