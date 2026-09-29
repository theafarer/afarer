// shard 52 data table — contact form structure repair (TECH.md L42 / 挂账⑨).
//
// Damage (all 20 locales, introduced at translation commit db928cfa): the 13-field block was
// re-assembled on a WRONG skeleton — firstName/lastName/companyName/address received the three
// select option groups (optionsKey 'countries' landed on firstName, translated), orderVolume got
// type:select + withCountryCode, customization/productInterest lost type+options, tel lost
// withCountryCode, email lost type:email, rows scrambled, and machine option `value` strings were
// translated (de 'Beispiel'/'Was geht?', pl 'siema', es '¿qué tal?'). fr additionally had field
// NAMES translated (pays/adresse/code postal) and type values ('sélectionner') — FormData keys
// broken. Runtime: Contact.astro only honors optionsKey === 'countries' → country dropdown empty
// in 19/20 locales.
//
// Fix strategy: one whole-block replacement per locale to the EN-root structure; the 13 field
// labels and 3x5 option labels are REUSED from the locale's own disk content (19 locales by
// canonical field name, fr by position); this table supplies only fresh/patched strings.

module.exports = {
  // fresh submit_button for 13 locales that lost the "→ Get a Quote" tail.
  // cs/da/es/fi/fr/ro/th already carry a full two-part CTA — untouched.
  // Verb grounding: de/nl/no/sv/pt reuse the rq-page imperative (Angebot anfordern / Offerte
  // aanvragen / Be om tilbud / Begär en offert / Obter cotação); ru from rq steps
  // "Получите вашу смету"; it from "Richiedi un Preventivo"; ar/el/ja/ko/tr from site CTAs.
  submits: {
    ar: 'أرسل الاستفسار → احصل على عرض سعر',
    de: 'Anfrage senden → Angebot anfordern',
    el: 'Αποστολή ερωτήματος → Λήψη προσφοράς',
    it: 'Invia la richiesta → Ottieni un preventivo',
    ja: 'お問い合わせを送信 → 見積もりを入手',
    ko: '문의 보내기 → 견적 받기',
    nl: 'Aanvraag verzenden → Offerte aanvragen',
    no: 'Send forespørsel → Be om tilbud',
    pl: 'Wyślij zapytanie → Uzyskaj wycenę',
    pt: 'Enviar solicitação → Obter cotação',
    ru: 'Отправить запрос → Получить смету',
    sv: 'Skicka förfrågan → Begär en offert',
    tr: 'Talep gönder → Teklif al',
  },

  // fresh hero_text.title for ja/ko/th — current titles duplicate their taglines verbatim.
  // Grounded on site CTAs: ja footer/rq "お気軽にお問い合わせください", ko "우리 팀에 문의하세요",
  // th "พูดคุยกับทีมงานของเรา".
  heroTitles: {
    ja: 'お気軽にお問い合わせください',
    ko: '우리 팀에 문의하세요',
    th: 'พูดคุยกับทีมงานของเรา',
  },

  // phone description: 7 locales lost the '+86' prefix (value reads "86 13305324192").
  // Rep uses the EN-root quoted form "+86 13305324192" (prettier preserves author quoting).
  phoneLocales: ['de', 'es', 'it', 'nl', 'pl', 'pt', 'ru'],
  phoneNewValue: '+86 13305324192',
  phoneOldValue: '86 13305324192',

  // ja address simplified-character repair (hq description + map.address, same string both).
  // 青岛市 → 青島市, 莱西 → 萊西 (traditional forms used in the ja corpus).
  jaAddrNew: '中国山東省青島市萊西市経済開発区、郵便番号266600',

  // option-label quality fixes, keyed o{group}c{index} onto the reused groups
  // (group 0 = orderVolume, 1 = customization, 2 = productInterest). 19 fixes total.
  optFixes: {
    de: { o0c4: '500+ Einheiten (Mengenpreis)', o1c4: 'Nicht sicher — brauche Beratung' },
    el: { o2c2: 'Σανίδες SUP / Paddleboards' },
    es: { o0c2: '5–10 unidades (MOQ estándar)', o0c4: '500+ unidades (Precio por volumen)' },
    fi: {
      o0c0: 'Valitse arvioitu tilausmäärä...',
      o0c2: '5–10 kappaletta (standardi MOQ)',
      o2c4: 'Lisävarusteet (pumput, melat, laukut)',
    },
    it: { o0c4: '500+ unità (Prezzo a volume)', o1c4: 'Non sicuro — serve una consulenza' },
    nl: { o0c4: '500+ eenheden (volumeprijzen)', o1c4: 'Niet zeker — overleg nodig' },
    no: { o0c2: '5–10 enheter (standard MOQ)' },
    pl: { o0c4: '500+ jednostek (Cennik ilościowy)', o1c4: 'Nie jestem pewien — potrzebna konsultacja' },
    pt: { o0c4: '500+ unidades (Preços por volume)' },
    ru: {
      o0c2: '5–10 единиц (стандартный MOQ)',
      o0c4: '500+ единиц (Объемное ценообразование)',
    },
    sv: { o1c2: 'Endast anpassad logotyp / varumärke' },
  },
};
