// shard 47 data: da page-yaml EN residue (56 fixes / 25 files under src/data/pages/da/).
// Each entry: f (repo-root path), ln (1-based raw line, pre-patch), core (fragment that must
// occur exactly n times in the file and be present on line ln), rep (replacement), n.
// Multi-site same-fragment fixes use lns: [...] instead of ln.
// DEFERRED (EN-root drift family, 60 keys, all locales stale — see TECH.md L37): about.brand_hub_subtitle,
// brand-marine-expertise.expertise_materials.items[0].description, request-quotation.content_form.* (15 keys),
// solutions-paddle-clubs (17 keys), solutions-resorts-hotels (21 keys), solutions-retail-partners (5 keys).
module.exports = [
  // ---- home.yaml ----
  // SUPer -> SUP'er was applied as one n=2 op, then corrected by _gen-ops-47b.cjs: L3 is a
  // single-quoted yaml scalar, so ' must be escaped there as SUP''er (L15 is a block scalar).
  // Terminal ops (in _ops-data-47.cjs): L3 "performance-oppustelige SUP'er" -> "SUP''er";
  // L15 "Performance-oppustelige SUPer designet" -> "...SUP'er designet".
  {
    f: 'src/data/pages/da/home.yaml',
    ln: 3,
    core: "performance-oppustelige SUP'er",
    rep: "performance-oppustelige SUP''er",
    n: 1,
  },
  {
    f: 'src/data/pages/da/home.yaml',
    ln: 15,
    core: 'Performance-oppustelige SUPer designet',
    rep: "Performance-oppustelige SUP'er designet",
    n: 1,
  },
  { f: 'src/data/pages/da/home.yaml', ln: 24, core: 'Download katalog', rep: 'Hent katalog', n: 1 },
  { f: 'src/data/pages/da/home.yaml', ln: 125, core: 'Download OEM-guide', rep: 'Hent OEM-guide', n: 1 },
  {
    f: 'src/data/pages/da/home.yaml',
    ln: 148,
    core: 'Download distributørprogrammet',
    rep: 'Hent distributørprogrammet',
    n: 1,
  },
  // ---- about.yaml (meta block, sv translated; "inflatable" embedded EN x4) ----
  {
    f: 'src/data/pages/da/about.yaml',
    ln: 2,
    core: 'Inflatable SUP- & vandsportsbrand',
    rep: 'Oppustelig SUP- & vandsportsbrand',
    n: 1,
  },
  {
    f: 'src/data/pages/da/about.yaml',
    ln: 3,
    core: 'et globalt inflatable SUP- og vandsportsbrand',
    rep: 'et globalt oppusteligt SUP- og vandsportsbrand',
    n: 1,
  },
  { f: 'src/data/pages/da/about.yaml', ln: 5, core: "'inflatable sup brand'", rep: "'oppusteligt sup brand'", n: 1 },
  { f: 'src/data/pages/da/about.yaml', ln: 6, core: "'inflatable bådbrand'", rep: "'oppusteligt bådbrand'", n: 1 },
  // ---- academy.yaml ----
  {
    f: 'src/data/pages/da/academy.yaml',
    ln: 11,
    core: 'tagline: afarer Academy',
    rep: 'tagline: afarer Akademi',
    n: 1,
  }, // intra-file "afarer Akademiet" + no "afarer Akademi"
  {
    f: 'src/data/pages/da/academy.yaml',
    ln: 87,
    core: '- title: All-around vs. touring vs. yoga SUP',
    rep: '- title: Allround vs. touring vs. yoga SUP',
    n: 1,
  }, // sv/no Allround
  {
    f: 'src/data/pages/da/academy.yaml',
    ln: 151,
    core: 'Guide til resorts & hospitality',
    rep: 'Guide til resorts & hoteller',
    n: 1,
  }, // sv/no hotell
  // ---- lab taglines (sv/no Laboratorium; da 01/04 already translated) ----
  {
    f: 'src/data/pages/da/hull-engineering.yaml',
    ln: 7,
    core: 'tagline: Lab 02',
    rep: 'tagline: Laboratorium 02',
    n: 1,
  },
  { f: 'src/data/pages/da/rf-welding.yaml', ln: 7, core: 'tagline: Lab 03', rep: 'tagline: Laboratorium 03', n: 1 },
  {
    f: 'src/data/pages/da/prototype-workshop.yaml',
    ln: 7,
    core: 'tagline: Lab 05',
    rep: 'tagline: Laboratorium 05',
    n: 1,
  },
  {
    f: 'src/data/pages/da/quality-inspection-lab.yaml',
    ln: 7,
    core: 'tagline: Lab 06',
    rep: 'tagline: Laboratorium 06',
    n: 1,
  },
  // ---- research-sup-thickness.yaml (sv Teknik) ----
  {
    f: 'src/data/pages/da/research-sup-thickness.yaml',
    ln: 6,
    core: 'tagline: Engineering',
    rep: 'tagline: Teknik',
    n: 1,
  },
  // ---- brand-global-presence.yaml (sv/no Kina) ----
  {
    f: 'src/data/pages/da/brand-global-presence.yaml',
    ln: 24,
    core: 'amount: Qingdao, China',
    rep: 'amount: Qingdao, Kina',
    n: 1,
  },
  // ---- cases.yaml (sv/no Forenede Arabiske Emirater) ----
  {
    f: 'src/data/pages/da/cases.yaml',
    ln: 52,
    core: 'country: United Arab Emirates',
    rep: 'country: Forenede Arabiske Emirater',
    n: 1,
  },
  // ---- distributor-program.yaml (sv Prov/Produktutvärdering, no Prøve/Produktevaluering, no Testordre) ----
  {
    f: 'src/data/pages/da/distributor-program.yaml',
    ln: 74,
    core: 'Sample / Product Evaluation',
    rep: 'Prøve / Produktevaluering',
    n: 1,
  },
  { f: 'src/data/pages/da/distributor-program.yaml', ln: 75, core: 'Trial Order', rep: 'Testordre', n: 1 },
  {
    f: 'src/data/pages/da/distributor-program.yaml',
    ln: 79,
    core: 'nye forme, emballage',
    rep: 'nye former, emballage',
    n: 1,
  }, // da pl. "former" (sv nya formar, no nye former)
  {
    f: 'src/data/pages/da/distributor-program.yaml',
    ln: 106,
    core: 'Download programoversigten',
    rep: 'Hent programoversigten',
    n: 1,
  },
  // ---- factory-oem-capability.yaml (intra-file L42 "30–45 dage") ----
  {
    f: 'src/data/pages/da/factory-oem-capability.yaml',
    ln: 46,
    core: 'lead_time: 20–30 days',
    rep: 'lead_time: 20–30 dage',
    n: 1,
  },
  // ---- AQL decimal comma (sv/no AQL 2,5; da uses comma decimals) ----
  { f: 'src/data/pages/da/factory-quality-lab.yaml', ln: 26, core: '- value: AQL 2.5', rep: '- value: AQL 2,5', n: 1 },
  { f: 'src/data/pages/da/factory.yaml', ln: 173, core: 'AQL 2.5 (ISO 2859)', rep: 'AQL 2,5 (ISO 2859)', n: 1 },
  {
    f: 'src/data/pages/da/factory.yaml',
    ln: 185,
    core: 'AQL 2.5 for væsentlige fejl, AQL 4.0 for mindre fejl',
    rep: 'AQL 2,5 for væsentlige fejl, AQL 4,0 for mindre fejl',
    n: 1,
  },
  { f: 'src/data/pages/da/factory.yaml', ln: 250, core: '- value: AQL 2.5', rep: '- value: AQL 2,5', n: 1 },
  {
    f: 'src/data/pages/da/research-oem-buyer-guide.yaml',
    ln: 50,
    core: 'AQL 2.5 eller 4.0',
    rep: 'AQL 2,5 eller 4,0',
    n: 1,
  },
  // ---- factory.yaml (sv Vanliga frågor / no Ofte stilte spørsmål; da phrase "PVC af marinekvalitet" = marine.mat0title) ----
  { f: 'src/data/pages/da/factory.yaml', ln: 134, core: 'tagline: FAQ', rep: 'tagline: Ofte stillede spørgsmål', n: 1 },
  {
    f: 'src/data/pages/da/factory.yaml',
    ln: 227,
    core: '- material: Marine-grade PVC',
    rep: '- material: PVC af marinekvalitet',
    n: 1,
  },
  // ---- technology.yaml (dict 46 precedent "PVC-lag i militærkvalitet") ----
  {
    f: 'src/data/pages/da/technology.yaml',
    ln: 17,
    core: '- title: Militær-grade PVC',
    rep: '- title: PVC i militærkvalitet',
    n: 1,
  },
  // ---- inflatable-vs-hardboard.yaml (stale boat-era paragraph; EN root + sv/no current) ----
  {
    f: 'src/data/pages/da/inflatable-vs-hardboard.yaml',
    ln: 42,
    core: '<p><strong>Gummibåden vinder.</strong> Gummibåde er lavet af militær-grade PVC, der modstår stød, punkteringer og UV-skader. Hvis du taber en gummibåd eller rammer en sten, preller den af. Et stift board ville flække, revne eller delaminere ved samme påvirkning.</p>',
    rep: "<p><strong>Den oppustelige vinder.</strong> Oppustelige SUP'er er lavet af PVC i militær kvalitet, der modstår stød, punkteringer og UV-skader. Hvis du taber et oppusteligt board eller rammer en sten, springer det tilbage. Et stift board ville flække, revne eller delaminere ved samme påvirkning.</p>",
    n: 1,
  },
  // ---- trust.yaml (sv/no "og"; 46 Hent verb) ----
  { f: 'src/data/pages/da/trust.yaml', ln: 25, core: '- title: BSCI & REACH', rep: '- title: BSCI og REACH', n: 1 },
  { f: 'src/data/pages/da/trust.yaml', ln: 44, core: '- title: REACH & RoHS', rep: '- title: REACH og RoHS', n: 1 },
  {
    f: 'src/data/pages/da/trust.yaml',
    ln: 126,
    core: 'Download vores certificeringsportefølje',
    rep: 'Hent vores certificeringsportefølje',
    n: 1,
  },
  // ---- Download verb family (46 precedent: Hent; nouns downloads/til download KEEP) ----
  { f: 'src/data/pages/da/b2b-solutions-matrix.yaml', ln: 119, core: 'Download katalog', rep: 'Hent katalog', n: 1 },
  {
    f: 'src/data/pages/da/brand-why-afarer.yaml',
    ln: 71,
    core: 'Download produktkatalog',
    rep: 'Hent produktkatalog',
    n: 1,
  },
  { f: 'src/data/pages/da/media.yaml', ln: 12, core: 'Download brandmaterialer', rep: 'Hent brandmaterialer', n: 1 },
  {
    f: 'src/data/pages/da/resources.yaml',
    ln: 3,
    core: 'Download OEM-produktionsguides',
    rep: 'Hent OEM-produktionsguides',
    n: 1,
  },
  { f: 'src/data/pages/da/resources.yaml', ln: 7, core: 'Download OEM-guides', rep: 'Hent OEM-guides', n: 1 },
  { f: 'src/data/pages/da/resources.yaml', ln: 14, core: 'cta: Download katalog', rep: 'cta: Hent katalog', n: 1 },
  {
    f: 'src/data/pages/da/solutions-build-your-own-brand.yaml',
    ln: 103,
    core: 'download vores OEM-guide',
    rep: 'hent vores OEM-guide',
    n: 1,
  },
  {
    f: 'src/data/pages/da/solutions-build-your-own-brand.yaml',
    ln: 108,
    core: 'Download OEM-guide',
    rep: 'Hent OEM-guide',
    n: 1,
  },
  {
    f: 'src/data/pages/da/solutions-distributors.yaml',
    ln: 43,
    core: 'download vores informationspakke',
    rep: 'hent vores informationspakke',
    n: 1,
  },
  {
    f: 'src/data/pages/da/solutions-distributors.yaml',
    ln: 48,
    core: 'Download distributørkit',
    rep: 'Hent distributørkit',
    n: 1,
  },
  {
    f: 'src/data/pages/da/solutions-paddle-clubs.yaml',
    ln: 107,
    core: 'download vores startguide',
    rep: 'hent vores startguide',
    n: 1,
  },
  {
    f: 'src/data/pages/da/solutions-paddle-clubs.yaml',
    ln: 112,
    core: 'Download klubguide',
    rep: 'Hent klubguide',
    n: 1,
  },
  {
    f: 'src/data/pages/da/solutions-resorts-hotels.yaml',
    ln: 104,
    core: 'download vores komplette resortkatalog',
    rep: 'hent vores komplette resortkatalog',
    n: 1,
  },
  {
    f: 'src/data/pages/da/solutions-resorts-hotels.yaml',
    ln: 109,
    core: 'Download resort-katalog',
    rep: 'Hent resort-katalog',
    n: 1,
  },
  {
    f: 'src/data/pages/da/solutions-retail-partners.yaml',
    ln: 62,
    core: 'Download vores omfattende retail-partnerkit',
    rep: 'Hent vores omfattende retail-partnerkit',
    n: 1,
  },
  {
    f: 'src/data/pages/da/solutions-retail-partners.yaml',
    ln: 95,
    core: 'Download detailkatalog',
    rep: 'Hent detailkatalog',
    n: 1,
  },
  // ---- solutions-resorts-hotels.yaml L82 (sv hotellbranschen, no gjestfrihet) ----
  {
    f: 'src/data/pages/da/solutions-resorts-hotels.yaml',
    ln: 82,
    core: 'hospitality-branchen',
    rep: 'hotelbranchen',
    n: 1,
  },
  // ---- solutions-retail-partners.yaml (sv enheter/år; intra-file L26/36 enheder/år; no beste praksis; da Bestseller) ----
  {
    f: 'src/data/pages/da/solutions-retail-partners.yaml',
    ln: 17,
    core: 'moq: 500 units/yr',
    rep: 'moq: 500 enheder/år',
    n: 1,
  },
  {
    f: 'src/data/pages/da/solutions-retail-partners.yaml',
    ln: 49,
    core: 'Best seller — passer til',
    rep: 'Bestseller — passer til',
    n: 1,
  },
  {
    f: 'src/data/pages/da/solutions-retail-partners.yaml',
    ln: 69,
    core: 'best practices',
    rep: 'bedste praksis',
    n: 1,
  },
  // ---- solutions-rental-operators.yaml (intra-file L50/53 "/år"; L39 min/board KEEP = file "board" convention) ----
  { f: 'src/data/pages/da/solutions-rental-operators.yaml', ln: 56, core: '$XXX,XXX/yr', rep: '$XXX,XXX/år', n: 1 },
  // ---- tourism-recreation.yaml (sv Marint; da phrase "af marinekvalitet") ----
  {
    f: 'src/data/pages/da/tourism-recreation.yaml',
    ln: 42,
    core: 'Marine-grade PVC med høj trækstyrke',
    rep: 'PVC af marinekvalitet med høj trækstyrke',
    n: 1,
  },
];
