// EN-morphology audit for Latin tokens in Thai parts: flags English stop words and
// English morphology suffixes that should never appear in Thai body text.
// Every hit needs manual review; legitimate tokens go into ALLOWED below.
const fs = require('fs');
const path = require('path');

const WORK = 'C:/Users/Helleo/AppData/Local/Temp/deveco/th_sol_work/parts';

// tokens allowed to appear verbatim (brands/acronyms/loanwords legit in Thai)
const ALLOWED = new Set([
  // brand/product/company/org names (kept Latin per th convention)
  'Afarer',
  'Afarer.',
  'GoPro',
  'HERO12',
  'Black',
  'Garmin',
  'echoMAP',
  'Plus',
  '74cv',
  'RAM-mount',
  'Boston',
  'Whaler',
  'Yamaha',
  'VX',
  'Cruiser',
  'Parker',
  'Tohatsu',
  'Bell',
  '412',
  'Laerdal',
  'Phillips',
  'HeartStart',
  'FRx',
  'Ferno',
  'KED',
  'M9',
  'North',
  'American',
  'Rescue',
  'Mote',
  'Marine',
  'Laboratory',
  'Mote.',
  'YSI',
  'EXO2',
  'GNSS',
  'SBEP',
  'FWC',
  'Niskin',
  'Pelican',
  'NRS',
  'Orion',
  'RFD',
  'SLSQ',
  'NBFD',
  'ARA',
  'IUCN',
  'UNESCO',
  'IRF',
  'IRB',
  'TDLR',
  'OFB',
  'LBTB',
  'FRTCB',
  'SOLAS',
  'VHF',
  'UHF',
  'AED',
  'Aquatic',
  'Conservation',
  'Inia',
  'geoffrensis',
  'Pteronura',
  'brasiliensis',
  'Trichechus',
  'manatus',
  'latirostris',
  'Rite',
  'in',
  'the',
  'Rain',
  'Paddle',
  'into',
  'Production',
  // loanwords / terms legit in Thai text
  'premium',
  'leader',
  'design',
  'branding',
  'shopping',
  'check-in',
  'marketing',
  'marketing.',
  'feedback',
  'business',
  'outdoor',
  'lifestyle',
  'trade-in',
  'input',
  'output',
  'rain',
  'wind',
  'crowdfunding',
  // YAML structural keys
  'description',
  'solutions',
  'question',
  'location',
  'primaryAction',
  'secondaryAction',
  // part 01 names (brand / place)
  'Trinity',
  'Expeditions',
  // part 02 product/law names + legit loans
  'Expedition',
  'Proposition',
  'camping',
  // part 21 product/route names
  'EcoTouring',
  // part 22 brand names
  'Old',
  // part 23 org names
  'Saving',
  // part 04 terms (Google Trends keyword, hardware, Google Shopping)
  'paddleboarding',
  'D-ring',
  'Shopping',
  // part 05 terms (brand names, Google Ads keywords, retailer)
  'Angling',
  'fishing',
  'Fishing',
  // part 06 terms (resort chain, product/board/class names, software)
  'Collection',
  'Serenity',
  'Acuity',
  'Scheduling',
  'Restorative',
  // part 09 terms (custom edition product names)
  'Edition',
  // part 15 terms (BMW Driving Experience program name, Google Cloud award name)
  'Driving',
  'Availability',
]);

const EN_STOP = new Set([
  'the',
  'and',
  'of',
  'with',
  'for',
  'from',
  'that',
  'this',
  'these',
  'those',
  'which',
  'when',
  'where',
  'because',
  'between',
  'during',
  'within',
  'across',
  'including',
  'featuring',
  'before',
  'after',
  'about',
  'into',
  'onto',
  'over',
  'under',
  'than',
  'then',
  'them',
  'they',
  'you',
  'your',
  'our',
  'their',
  'was',
  'were',
  'been',
  'being',
  'has',
  'had',
  'did',
  'does',
  'not',
  'each',
  'every',
  'both',
  'also',
  'only',
  'just',
  'very',
  'more',
  'most',
  'will',
  'would',
  'should',
  'could',
  'might',
  'must',
  'can',
  'offers',
  'offer',
  'provides',
  'provide',
  'delivers',
  'deliver',
  'ensures',
  'ensure',
  'makes',
  'make',
  'made',
  'using',
  'used',
  'use',
  'new',
  'old',
  'first',
  'last',
  'next',
  'same',
  'such',
  'own',
  'how',
  'why',
  'what',
  'who',
  'its',
  'itself',
  'themselves',
  'himself',
  'herself',
]);

const MORPHO = [
  /[A-Za-z]+ing\b/, // no Thai words end in -ing (except loans)
  /[A-Za-z]+tions?\b/, // English -tion suffix
  /[A-Za-z]+ity\b/, // English -ity suffix
  /[A-Za-z]+ous\b/, // English -ous suffix
  /[A-Za-z]+ive\b/, // English -ive suffix
  /[A-Za-z]+ally\b/, // English -ally suffix
];

const files = fs
  .readdirSync(WORK)
  .filter((f) => /^\d{2}_.*\.yaml$/.test(f))
  .sort();

let hits = 0;
for (const f of files) {
  const text = fs.readFileSync(path.join(WORK, f), 'utf8');
  const tokens = text.match(/[A-Za-z][A-Za-z'&.\-]*/g) || [];
  const perToken = new Map();
  for (const tok of tokens) {
    if (ALLOWED.has(tok)) continue;
    if (EN_STOP.has(tok.toLowerCase())) {
      perToken.set(tok, (perToken.get(tok) || 0) + 1);
      continue;
    }
    for (const re of MORPHO) {
      if (re.test(tok) && tok.length > 5) {
        perToken.set(tok, (perToken.get(tok) || 0) + 1);
        break;
      }
    }
  }
  if (perToken.size) {
    hits += perToken.size;
    const list = [...perToken.entries()].map(([k, v]) => k + ' x' + v).join(', ');
    console.log(f + ' :: ' + list);
  }
}
console.log(hits === 0 ? 'NO SUSPECT EN TOKENS' : hits + ' suspect token(s) — review each');
