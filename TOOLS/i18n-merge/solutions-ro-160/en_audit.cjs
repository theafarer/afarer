// EN-morphology audit for Latin-script ro parts: flags English stop words and
// English morphology suffixes that should never appear in Romanian body text.
// Every hit needs manual review; legitimate tokens go into ALLOWED below.
const fs = require('fs');
const path = require('path');

const WORK = 'C:/Users/Helleo/AppData/Local/Temp/deveco/ro_sol_work/parts';

// tokens allowed to appear verbatim (brands/acronyms/loanwords legit in Romanian)
const ALLOWED = new Set([
  // brand/product/company/org names (kept Latin per ro convention)
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
  // loanwords / terms legit in Romanian text
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
  // Romanian words whose ASCII prefix trips EN morphology regexes
  'negative',
  'conving',
  'resping',
  'informative',
  'competitive',
  'semnificative',
  'semnificative.',
  'repetitive',
  'distructive',
  'excesive',
  'consecutive',
  'Shopping',
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
  /[A-Za-z]+ing\b/, // no Romanian words end in -ing (except loans)
  /[A-Za-z]+tions?\b/, // Romanian: -ție/-ții
  /[A-Za-z]+ity\b/, // Romanian: -itate
  /[A-Za-z]+ous\b/, // Romanian: -os/-oasă
  /[A-Za-z]+ive\b/, // Romanian: -iv/-ivă
  /[A-Za-z]+ally\b/, // Romanian: -al
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
