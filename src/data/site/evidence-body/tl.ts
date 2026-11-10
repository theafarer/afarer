import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'retail-private-label': {
    client: 'Retailer ng Outdoor Products sa Europa',
    product: 'Linya ng SUP na may Sariling Brand',
    industry: 'Retail',
    challenge:
      'Kailangan ng retailer ng mga outdoor product sa Europa ng linya ng SUP na may sariling brand, natatanging disenyo ng deck, PVC na hindi nakakasama sa kalikasan, at packaging na handa na para sa retail — lahat ay naihatid sa loob ng 60 araw.',
    solution:
      'Bumuo ng mga custom na digital print file, nangolekta ng PVC na sumusunod sa REACH, at pinaikli ang sampling mula sa 3 batch tungo sa 1 sa pamamagitan ng pagpasok mismo ng design team sa aming pabrika sa Qingdao.',
    result:
      '55 araw mula sa pirmanahang PO hanggang FOB. 2,400 yunit sa 4 na SKU. Nai-place ang repeat order bago pa dumating ang unang container.',
    outcomeMetrics: [
      {
        label: 'Tagal ng Paghahatid',
        value: '55 araw',
      },
      {
        label: 'Mga Yunit',
        value: '2,400',
      },
      {
        label: 'Mga SKU',
        value: '4',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'Watersports Startup sa US',
    product: 'Custom na Linya ng SUP',
    industry: 'Startup / Retail',
    challenge:
      'Kailangan ng isang watersports startup sa US ng high-performance na drop-stitch SUP na may custom na disenyo ng deck, co-branded na packaging, at BSCI certification para sa pagkakalagay sa mga retail store.',
    solution:
      'Inangkop ang umiiral na mould ng SUP na may binagong rocker profile, binuo ang co-branded na packaging artwork, at binigyan ng kumpletong dokumentasyon ng BSCI audit.',
    result:
      'Matagumpay na nailista sa 3 pangunahing outdoor chain sa US. 5,000+ yunit sa unang taon na may 98% sell-through rate.',
    outcomeMetrics: [
      {
        label: 'Mga Retail Chain',
        value: '3',
      },
      {
        label: 'Mga Yunit sa Unang Taon',
        value: '5,000+',
      },
      {
        label: 'Sell-Through',
        value: '98%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Distributor sa Australia',
    product: 'Linya ng SUP na May CE Certification',
    industry: 'Pandagat / Retail',
    challenge:
      'Kinailangan ng distributor sa Australia ng linya ng SUP na may CE certification, custom na kulay ng deck, opsyon ng upgraded na PVC, at pagsunod sa Australian Standard na AS 1799.',
    solution:
      'Gumawa ng pre-production samples na may 4 na variant ng kulay, nangolekta ng military-grade na PVC, at nag-ugnay ng third-party na pagsubok sa pagsunod ng AS 1799.',
    result:
      'Nailunsad ang linya ng 3 modelong SUP sa merkado ng AU/NZ. Sinundan ng kontrata sa retail chain para sa 12 tindahan.',
    outcomeMetrics: [
      {
        label: 'Mga Nailunsad na Modelo',
        value: '3',
      },
      {
        label: 'Mga Retail Store',
        value: '12',
      },
      {
        label: 'Pagsunod sa Standart',
        value: 'AS 1799',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Grupo ng mga Luxury Resort sa Caribbean',
    product: 'Flota ng Resort — mga SUP',
    industry: 'Hospitality / Turismo',
    challenge:
      'Kailangan ng grupong may 5 resort ng iisang flota ng rental na kagamitan sa watersports — mga SUP board — na may konsistenteng branding, materyales na UV-resistant para sa tropikal na araw, at plano ng pagpapalit sa loob ng 5 taon.',
    solution:
      'Nagdisenyo ng custom na flota ng 3 modelong SUP na may UV-stabilized na PVC, deck graphics na may brand ng resort, at phased na iskedyul ng paghahatid. Nagbigay ng pagsasanay sa kawani at dedikadong spare parts kit kada resort.',
    result:
      '180 yunit ang naihatid sa 5 resort. Repeat order para sa 2 bagong property. 40% pagbawas sa gastos kada yunit kumpara sa mga nakaraang supplier.',
    outcomeMetrics: [
      {
        label: 'Mga Naihatid na Yunit',
        value: '180',
      },
      {
        label: 'Mga Resort',
        value: '5',
      },
      {
        label: 'Pagbawas sa Gastos',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Taunang Gastos sa Pagpapalit ng Board',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Downtime ng Flota (araw/taon)',
        before: '45',
        after: '8',
      },
      {
        label: 'Iskor ng Kasiyahan ng Bisita',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Ahensyang Maritimo sa Timog-Silangang Asya',
    product: 'Flota ng Patrol at Rescue na SUP',
    industry: 'Pamahalaan / Seguridad Pandagat',
    challenge:
      'Kinailangan ng ahensyang maritimo ng pamahalaan ng 20 patrol at rescue na SUP na may high-visibility na deck, integrated na mount para sa komunikasyon, at CE-certified na konstruksyon.',
    solution:
      'Gumawa ng 20 SUP na may military-grade na konstruksyon ng PVC, heavy-duty na D-ring, at pre-installed na pakete ng navigation light. Nasaksihan ng factory inspection team ang sea trials. Nagbigay ng kumpletong dokumentasyon ng pagsunod sa standart.',
    result:
      'Naihatid ang kontrata sa loob ng 4 na buwan. Nailatag ang flota para sa border patrol, search and rescue, at disaster response sa 3 rehiyonal na base.',
    outcomeMetrics: [
      {
        label: 'Mga Patrol na SUP',
        value: '20',
      },
      {
        label: 'Paghatid',
        value: '4 na buwan',
      },
      {
        label: 'Mga Base',
        value: '3',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'DTC Watersports Brand sa Europa',
    product: 'Branded na SUP + Linya ng Accessory',
    industry: 'E-commerce / Retail',
    challenge:
      'Kailangan ng mabilis na lumalagong DTC watersports brand ng kumpletong pakete ng SUP (board, pump, paddle, leash, bag) na may premium na packaging na dinisenyo para sa e-commerce fulfilment — direkta sa consumer sa pamamagitan ng DHL/FedEx nang hindi nasisira.',
    solution:
      'Bumuo ng co-branded na linya ng produkto na may custom na paghubog ng EPS core, proprietary na drop-stitch technology para sa mas mataas na presyon, at retail-ready na double-wall na corrugated boxes na may insert padding. Nag-integrate ng QR-code-based na pagpapatunay ng tunay na produkto at pagrehistro ng warranty.',
    result:
      'Nailunsad ang linya ng 3 modelong SUP sa loob ng 75 araw. 15,000+ yunit sa unang 12 buwan. 4.8★ average na rating sa 2,000+ review. 0.3% damage rate sa transit.',
    outcomeMetrics: [
      {
        label: 'Mga Modelo',
        value: '3',
      },
      {
        label: 'Mga Yunit',
        value: '15,000+',
      },
      {
        label: 'Average na Rating',
        value: '4.8★',
      },
      {
        label: 'Damage Rate',
        value: '0.3%',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Chain ng mga Beach Resort sa Mediterranean',
    product: 'Flota ng Resort — mga SUP + Accessory',
    industry: 'Hospitality / Turismo',
    challenge:
      'Nais ng chain na may 3 resort sa Mediterranean na maglunsad ng iisang programa ng water activity sa mga beachfront hotel nito, na nangangailangan ng 120 SUP na may custom na branding, multilingual na safety card, at sistema ng maintenance rotation.',
    solution:
      'Nagdisenyo ng resort-specific na pakete ng flota na may marine-grade at UV-resistant na PVC, deck graphics na may brand ng hotel sa 3 scheme ng kulay, at color-coded na sistema ng maintenance tagging. Kasama ang pagsasanay sa kawani at quarterly na pagreplenish ng spare parts.',
    result:
      'Nailatag ang flota sa 3 resort. Tumaas nang 210% ang kita mula sa water activity sa unang season. Tumaas ang iskor ng kasiyahan ng bisita sa amenities mula 4.1 tungong 4.7/5.',
    outcomeMetrics: [
      {
        label: 'Mga Naihatid na SUP',
        value: '120',
      },
      {
        label: 'Mga Resort',
        value: '3',
      },
      {
        label: 'Pagtaas ng Kita',
        value: '210%',
      },
      {
        label: 'Iskor ng Bisita',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Taunang Kita mula sa Water Activity',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Rate ng Pagpapalit ng Kagamitan',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Kasiyahan ng Bisita (amenities)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'australian-paddle-club': {
    client: 'Asosasyon ng Paddle Club sa Australia',
    product: 'Flota ng Club — mga SUP + Safety Gear',
    industry: 'Rekreasyon / Edukasyon',
    challenge:
      'Kailangan ng asosasyon na may 15 club na i-standardize ang kagamitan sa mga miyembrong club gamit ang matibay at beginner-friendly na SUP board, CE-certified na life vest, at sentralisadong modelo ng procurement para mabawasan ang gastos kada club.',
    solution:
      'In-standardize ang 3-tier na flota ng club (beginner, intermediate, instructor). Nagdisenyo ng deck graphics na may kulay at logo ng club. Nagpatupad ng sentral na warehousing na may quarterly na distribusyon sa antas ng club.',
    result:
      '350 yunit sa 15 club. 28% pagbawas sa gastos sa pamamagitan ng consolidated purchasing. 92% kasiyahan ng miyembro sa kalidad ng kagamitan.',
    outcomeMetrics: [
      {
        label: 'Mga Club na Nabigyan',
        value: '15',
      },
      {
        label: 'Mga Naihatid na Yunit',
        value: '350',
      },
      {
        label: 'Pagbawas sa Gastos',
        value: '28%',
      },
      {
        label: 'Kasiyahan ng Miyembro',
        value: '92%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Operator ng Lake Resort at Rental sa Europa',
    product: 'Rental na Flota — mga SUP, Life Vest, Accessory',
    industry: 'Rental / Turismo',
    challenge:
      'Kailangan ng operator ng lake resort na may 6 rental station ng matibay na rental na flota ng SUP na may mabilis na sistema ng pagpapatuyo, damage-resistant na konstruksyon, at predictable na iskedyul ng pagpapalit sa loob ng maraming taon.',
    solution:
      'Nagbigay ng commercial-grade na rental na SUP na may reinforced na rail band, quick-dry na EVA deck, at UV-stabilised na PVC. Bumuo ng color-coded na sistema ng wear-tracking na may taunang condition report.',
    result:
      '200 SUP ang nailatag sa 6 station. Bumaba nang 55% ang taunang gastos sa maintenance. Na-extend ang buhay ng kagamitan mula 2 tungong 4 na taon.',
    outcomeMetrics: [
      {
        label: 'Mga Rental Station',
        value: '6',
      },
      {
        label: 'Mga Nailatag na SUP',
        value: '200',
      },
      {
        label: 'Gastos sa Maintenance',
        value: '-55%',
      },
      {
        label: 'Haba ng Buhay ng Kagamitan',
        value: '4 na taon',
      },
    ],
    beforeAfter: [
      {
        label: 'Average na Buhay ng Board',
        before: '2 taon',
        after: '4 na taon',
      },
      {
        label: 'Taunang Maintenance Kada Board',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Kita sa Rental Kada Board/Season',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Outdoor Retail Chain sa Canada',
    product: 'SUP na may Sariling Brand + Linya ng Accessory',
    industry: 'Retail',
    challenge:
      'Kinailangan ng outdoor retailer sa Canada na may 25 tindahan ng eksklusibong linya ng SUP na may sariling brand, bilingual na packaging sa Pranses/Ingles, specs ng materyales para sa malamig na panahon, at pagsunod sa mga regulasyon ng pagbabangka sa Canada.',
    solution:
      'Bumuo ng 4 modelong SUP na may cold-flex na PVC compound na rated hanggang -15°C. Gumawa ng bilingual na retail packaging na may regulatory marking ng Canada. Nagbigay ng display stand at materyales para sa pagsasanay ng kawani.',
    result:
      'Nailunsad ang eksklusibong linya sa 25 tindahan. 3,800 yunit ang nabili sa unang season. Nag-renew ang retailer ng 3-taong kasunduan na may pinalaking bilang ng SKU.',
    outcomeMetrics: [
      {
        label: 'Mga Tindahan',
        value: '25',
      },
      {
        label: 'Mga Yunit sa Unang Season',
        value: '3,800',
      },
      {
        label: 'Kasunduan',
        value: '3-taong renewal',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Distributor ng Watersports sa Gitnang Silangan',
    product: 'Kumpletong Linya ng Produkto — mga SUP at Accessory',
    industry: 'Distribusyon / Pandagat',
    challenge:
      'Nais ng distributor na nakabase sa GCC ng eksklusibong karapatang katawanin ang kumpletong linya ng produkto ng afarer sa 6 bansa sa Gulpo, na may custom na packaging sa Arabic, specs ng materyales na heat-resistant, at termino ng warranty na sumusunod sa sharia.',
    solution:
      'Nagtatag ng eksklusibong kasunduan sa distribusyon. Bumuo ng packaging at marketing collateral sa Arabic. Na-validate ang specs ng materyales sa 50°C na ambient temperature. Inangkop ang termino ng warranty para sa rehiyonal na pagsunod.',
    result:
      '12 container order sa unang 18 buwan. Nagtatag ng network na may 15 dealer/sub-distributor. Tinatayang 18% ng market share sa segment ng inflatable SUP sa GCC.',
    outcomeMetrics: [
      {
        label: 'Mga Container',
        value: '12',
      },
      {
        label: 'Dealer Network',
        value: '15',
      },
      {
        label: 'Market Share',
        value: '18%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Lifestyle Brand sa Hapon',
    product: 'Co-Branded na Linya ng SUP',
    industry: 'OEM / Brand',
    challenge:
      'Naghahanap ng premium na lifestyle brand sa Hapon ng pasok sa merkado ng watersports gamit ang co-branded na linya ng SUP na may diin sa minimalist na disenyo, eco-friendly na materyales, at precision manufacturing na angkop para sa mapiling consumer na Hapones.',
    solution:
      'Gumawa ng custom na mould na mas sleek na rail profile. Nangolekta ng FSC-certified na bamboo deck inlay at opsyon ng recycled na PVC. Bumuo ng premium na unboxing experience na may QR-coded na gabay sa pangangalaga sa wikang Hapones.',
    result:
      'Nailunsad ang co-branded na linya ng 3 modelo sa Tokyo Marine Show. 2,800 yunit ang na-presell bago ang pampublikong release. Naitampok sa 5 publication tungkol sa lifestyle sa Hapon.',
    outcomeMetrics: [
      {
        label: 'Mga Modelo',
        value: '3',
      },
      {
        label: 'Mga Na-presell na Yunit',
        value: '2,800',
      },
      {
        label: 'Mga Tampok sa Media',
        value: '5',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Brand ng Kagamitang Watersports sa US',
    product: 'Custom na Mold — Touring na SUP',
    industry: 'OEM / Pagmamanupaktura',
    challenge:
      "Kinailangan ng isang US brand ng lubos na bagong mould ng SUP na may 14' na hugis touring, integrated na channel ng mount para sa fishfinder, reinforced na plataporma ng pagtayo, at kapasidad na 400 lbs — dinisenyo para sa merkado ng fishing SUP.",
    solution:
      "Nag-engineer ng bagong 14' na drop-stitch mould na may reinforced na densidad ng drop-stitch core, naka-embed na insert ng accessory rail, at military-grade na PVC sa ilalim para sa abrasion resistance. Gumawa ng 3 iterate ng prototype bago ang pagtatapos ng tooling.",
    result:
      'Natapos ang tooling ng bagong mould sa 14 linggo. 3,500 yunit ang nagawa sa unang production run. Napangalangang "Best Fishing SUP 2025" ng Outdoor Gear Lab.',
    outcomeMetrics: [
      {
        label: 'Oras ng Tooling',
        value: '14 na linggo',
      },
      {
        label: 'Unang Run',
        value: '3,500 yunit',
      },
      {
        label: 'Parangal',
        value: 'Best Fishing SUP 2025',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Global na Korporasyon ng Teknolohiya',
    product: 'Corporate Wellness — Flota ng SUP',
    industry: 'Korporasyon / Wellness',
    challenge:
      'Nais ng isang Fortune 500 tech company na maglunsad ng water-based na wellness program para sa mga empleyado sa 4 global na campus na may lokasyon sa tabing-lawa, na nangangailangan ng 60 SUP na may corporate branding, solusyon sa pag-iimbak, at pagsasanay sa instructor.',
    solution:
      'Nagbigay ng flota ng stable na all-around SUP na may deck graphics na may corporate logo. Nagdisenyo ng weatherproof na storage rack sa site. Nag-certify ng 12 in-house na instructor sa pamamagitan ng training program ng afarer.',
    result:
      'Nailunsad ang programa sa 4 campus. 2,400+ pakikilahok ng empleyado sa unang taon. 94% rating ng kasiyahan ng empleyado. Naitampok sa sustainability report ng kumpanya.',
    outcomeMetrics: [
      {
        label: 'Mga Campus',
        value: '4',
      },
      {
        label: 'Mga Kasali',
        value: '2,400+',
      },
      {
        label: 'Kasiyahan',
        value: '94%',
      },
    ],
  },
  'university-club-program': {
    client: 'Sports Union ng Unibersidad sa UK',
    product: 'Flota ng Student Club — mga SUP + Safety',
    industry: 'Edukasyon',
    challenge:
      'Kailangan ng unibersidad sa UK na may aktibong watersports club na palitan ang lumang flota ng modernong inflatable na SUP na kayang iimbak sa limitadong espasyo ng campus, magagamit ng mga mag-aaral sa lahat ng antas ng kasanayan, at sumusunod sa standart ng kompetisyong BUCS.',
    solution:
      'Nagbigay ng 25 all-around SUP na may compact na storage backpack, 10 touring SUP para sa pagsasanay sa kompetisyon, at kumpletong pakete ng safety gear. Nagbigay ng pagsasanay sa club officer at workshop sa maintenance.',
    result:
      "Nailunsad ang flota sa Freshers' Fair. Lumago nang 140% ang miyembro ng club. In-host ng unibersidad ang unang inter-varsity na kompetisyon ng SUP sa loob ng 5 taon.",
    outcomeMetrics: [
      {
        label: 'Mga Nabigay na SUP',
        value: '35',
      },
      {
        label: 'Paglaki ng Miyembro',
        value: '140%',
      },
      {
        label: 'Na-host na Kompetisyon',
        value: '1',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Operator ng Cruise Line sa Caribbean',
    product: 'Flota ng Aktibidad sa Barko — mga SUP',
    industry: 'Hospitality / Cruise',
    challenge:
      'Nais ng malaking cruise line na i-offer ang SUP bilang shore excursion activity sa 7 barkong dumadaong sa mga pribadong isla. Kinailangan ng compact na pag-iimbak sa barko, mabilis na ikot ng inflation/deflation, at konsistenteng brand sa antas ng flota.',
    solution:
      'Bumuo ng cruise-specific na pakete ng SUP na may fast-inflate na sistema ng valve, compact na backpack storage, at deck graphics na may brand ng barko. Nagbigay ng dedikadong pagsasanay sa shore team at locker ng replacement parts sa 3 port ng isla.',
    result:
      'Nailunsad ang programa sa 7 barko. 15,000+ pakikilahok ng bisita sa unang season. 4.6★ average na rating ng excursion. Pinalawak sa 3 karagdagang barko sa ikalawang taon.',
    outcomeMetrics: [
      {
        label: 'Mga Barko',
        value: '7',
      },
      {
        label: 'Mga Pakikilahok ng Bisita',
        value: '15,000+',
      },
      {
        label: 'Rating',
        value: '4.6★',
      },
      {
        label: 'Ekspansyon sa Taong 2',
        value: '+3 barko',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Kumpanya ng Fishing Charter sa Florida',
    product: 'Custom na Flota ng Fishing SUP',
    industry: 'Pangingisda / Charter',
    challenge:
      'Nais ng operator ng fishing charter sa Florida na idagdag ang mga fishing tour sa SUP sa kanilang mga serbisyo, na nangangailangan ng stable na plataporma na may integrated na mount para sa cooler, track ng rod holder, at compatibility sa fishfinder transducer.',
    solution:
      'Nag-customize ng umiiral na stable na plataporma ng SUP na may 4 built-in na rod holder, removable na sistema ng cooler mount, at waterproof na scupper mount para sa transducer. Nagbigay ng presyo ng flota at seasonal na programa ng pagpapalit.',
    result:
      'Nailunsad ang mga fishing tour sa SUP bilang bagong pinagkakakitaan. 45% ng mga kasalukuyang customer ng charter ang nagbook ng SUP tour. Lumaki ang flota mula 8 tungong 20 board sa 2 season.',
    outcomeMetrics: [
      {
        label: 'Inisyal na Flota',
        value: '8',
      },
      {
        label: 'Flota sa Taong 2',
        value: '20',
      },
      {
        label: 'Cross-Sell mula sa Charter',
        value: '45%',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Residential na Komunidad sa Tabing-Lawa sa US',
    product: 'Amenity ng Komunidad — Flota ng SUP',
    industry: 'Real Estate / Komunidad',
    challenge:
      'Nais ng luxury na residential na komunidad sa tabing-lawa na magbigay ng SUP board bilang amenity ng residente, na nangangailangan ng flotang mababang maintenance, secure na storage sa tabing-lawa, at self-service na sistema ng check-out para sa 200+ tahanan.',
    solution:
      'Nagbigay ng 15 commercial-grade na SUP na may weatherproof na sistema ng storage locker. Nagdisenyo ng QR-code-based na self-checkout na may digital na waiver. Nagbigay ng seasonal na serbisyo ng maintenance.',
    result:
      '85% ng mga sambahayan ang gumamit ng SUP amenity sa unang season. Tumaas nang 7% ang halaga ng property sa bahagi ng tabing-lawa. Nanalo ang komunidad ng parangal na "Best Lakeside Living".',
    outcomeMetrics: [
      {
        label: 'Mga SUP',
        value: '15',
      },
      {
        label: 'Paggamit ng Sambahayan',
        value: '85%',
      },
      {
        label: 'Epekto sa Halaga ng Property',
        value: '+7%',
      },
      {
        label: 'Parangal',
        value: 'Best Lakeside Living',
      },
    ],
  },
};
