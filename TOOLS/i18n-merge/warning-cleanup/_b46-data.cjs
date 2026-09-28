// shard 46 data: da UI dict EN residue (28 keys)
// 10x Download->Hent + 18 embedded-EN/hybrid fixes, all backed by da-block precedents:
//   militærkvalitet (technology.metaDesc / defense.cert1 / answer4 / materials.desc),
//   e-mail (home.contact.email / social.email), anvendelsestilfælde (knowledgeGraph.subtitle),
//   vildt vand (ai.useCase), verden over (solutions.oem.metaDesc), SUP-brætter (block-wide),
//   Præstationsdrevet (ai.entity), etiketter (sv/no sisters), billede (sv/no sisters).
// KEEP (cognate/loanword, verified): Guides/guides, Find, Definition, Innovation, Design &
// Innovation, Compliance (noun), Brand/branding, Co-Brand (sv keeps), Scroll, Rail (de keeps
// Rails), Node (no keeps), Yoga/Surf/FAQ/TLDR, fair pris, touring, startup, resort,
// door-to-door, bulk, private label, stealth, tutorials, whitepaper, platform, support,
// nav sister-family (7t), numeric/lbs/inch families, $$$ (premium).
module.exports = {
  // --- Download -> Hent (sv Ladda ner / no Last ned) ---
  'home.resources.download': 'Hent PDF',
  'retail.download': 'Hent',
  'home.resources.b2bSubtitle':
    'Hent produktkataloger, kvalitetsrapporter og overholdelsesdokumentation for at udforske afarers kollektioner og partnerprogrammer.',
  'buyerCenter.downloadCatalog': 'Hent katalog',
  'buyerCenter.b2bResourcesDesc': 'Hent kataloger, QC-rapporter og fabriksrundvisningsinformation.',
  'oem.catalog': 'Hent produktkatalog',
  'resources.metaDesc':
    'Hent produktkataloger, OEM-produktionsguider, indkøbschecklister og teknisk dokumentation til indkøb af marineudstyr.',
  'nav.resourcesDownloadCatalog': 'Hent katalog',
  'exitIntent.title': 'Inden du går — Hent vores OEM-guide',
  'exitIntent.button': 'Hent guiden gratis',
  // --- embedded EN words ---
  'home.tech.pvc.title': 'PVC-lag i militærkvalitet',
  'home.learn.guide3': 'Gummibåd vs. hårdt bræt',
  'techspecs.supDesc': 'Oppustelige drop-stitch SUP-brætter med højtryksstivhed.',
  'compare.pvcVsHypalon.subtitle':
    'Den endelige sammenligning mellem PVC og Hypalon CSM — de to dominerende materialer i gummibådsfremstilling verden over.',
  'compare.inflatableVsHard.hardBestDesc': 'Løb, præstationssurfing, avancerede padlere, padlere med opbevaringsplads.',
  'home.products.sup.title': 'Letvægt. Stabil. Præstationsdrevet.',
  'compare.singleVsMulti.cta': 'Se flerkammer-SUP-brætter',
  'home.evidence.viewCaseStudy': 'Vis casestudie',
  'home.problem.wrongGear.desc':
    'Et begynderbræt taget med i åben søgang. Et racebræt brugt i vildt vand. Udstyr presset ud over dets designgrænser fører til usikre situationer og dårlige oplevelser.',
  'carousel.prev': 'Forrige billede',
  'carousel.next': 'Næste billede',
  'chat.sendEmail': 'Send e-mail',
  'geo.mediumSeverity': 'Middels alvorlighed ({count})',
  'graph.subtitle': 'Udforsk relationer mellem produkter, teknologier, materialer og anvendelsestilfælde',
  'academy.learningCenterDesc':
    'Trinvise guider og tutorials organiseret efter færdighedsniveau — fra det grundlæggende i SUP til avancerede redningsteknikker.',
  'academy.metaDesc':
    'Guider og tutorials for hvert færdighedsniveau — fra det grundlæggende i SUP til avancerede redningsteknikker. Lær i dit eget tempo med Afarer Academy.',
  'oem.pkg.growing.f2': 'Skræddersyet emballage & etiketter',
  'solutionsByIndustry.sar.cert1': 'SOLAS-kompatible muligheder',
};
