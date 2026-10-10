const fs = require('fs');
const path = require('path');
const TMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const ARC = 'E:/github/afarer/TOOLS/i18n-merge/faq-body-95';
const LOCALES = ['ar', 'el', 'fi', 'ro', 'th', 'tr'];

// EN source: prefer Temp copy, fall back to 95 archive
let enPath = path.join(TMP, '_faq-en.json');
if (!fs.existsSync(enPath)) {
  enPath = path.join(ARC, '_faq-en.json');
  fs.copyFileSync(enPath, path.join(TMP, '_faq-en.json'));
}
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const EN_IDS = en.map((r) => r.id);
if (EN_IDS.length !== 53) {
  console.log(`EN record count != 53: ${EN_IDS.length}`);
  process.exit(1);
}
const enById = new Map(en.map((r) => [r.id, r]));

// distinctly-English function words with Unicode boundaries; per-locale loans excluded
const B = String.raw`(?<![\p{L}\p{N}_])`;
const A = String.raw`(?![\p{L}\p{N}_])`;
// locale -> allowed English-looking loans (true Romanian words)
const ALLOW = {
  ar: [],
  el: [],
  fi: [],
  ro: ['are'],
  th: [],
  tr: [],
};
const BASE = [
  'the',
  'and',
  'with',
  'your',
  'you',
  'our',
  'this',
  'that',
  'these',
  'are',
  'board',
  'water',
  'inflatable',
  'warranty',
  'shipping',
];
const ENG_RES = {};
for (const loc of LOCALES) {
  const words = BASE.filter((w) => !ALLOW[loc].includes(w));
  ENG_RES[loc] = new RegExp(`${B}(${words.join('|')})${A}|${B}(?<!Red )paddle(?! Co)${A}`, 'iu');
}

// script / diacritics definitions
const ARABIC = /[\u0600-\u06ff]/;
const GREEK = /[\u0370-\u03ff]/;
const THAI = /[\u0e00-\u0e7f]/;
const CJK = /[\u3040-\u30ff\u4e00-\u9fff]/;
const HANGUL = /[\uac00-\ud7af]/;
const CYR = /[\u0400-\u04ff]/;
const SCRIPT = { ar: ARABIC, el: GREEK, th: THAI };
const DIA = {
  fi: /[äö]/i,
  ro: /[ăâîșț]/i,
  tr: /[ğışöüç]/i,
};

// locale orthography: percent + decimal formats
const pct = (loc, n) => (loc === 'fi' ? `${n} %` : loc === 'tr' ? `%${n}` : `${n}%`);
const dec = (loc, s) => (loc === 'th' ? s.replace(',', '.') : s);
const QMARK = { ar: '؟', el: ';', fi: '?', ro: '?', th: '?', tr: '?' };

let fail = 0;
for (const loc of LOCALES) {
  const p = path.join(TMP, `_faq-${loc}.json`);
  let data;
  try {
    data = JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    console.log(`[${loc}] JSON PARSE FAIL: ${e.message}`);
    fail++;
    continue;
  }
  const errs = [];
  if (data.length !== 53) errs.push(`record count ${data.length} != 53`);
  data.forEach((r, i) => {
    const id = r.id || `#${i}`;
    if (r.id !== EN_IDS[i]) errs.push(`idx ${i}: id "${r.id}" != EN "${EN_IDS[i]}"`);
    if (!r.q || r.q.trim().length < 8) errs.push(`${id}: q empty/short`);
    if (!r.a || r.a.trim().length < 60) errs.push(`${id}: a empty/short`);
    const e = enById.get(r.id);
    if (e) {
      if (r.q === e.question) errs.push(`${id}: q identical to EN`);
      if (r.a === e.answer) errs.push(`${id}: a identical to EN`);
    }
    const text = r.q + ' ' + r.a;
    const m = text.match(ENG_RES[loc]);
    if (m) errs.push(`${id}: English residue "${m[0]}"`);
    if (CJK.test(text)) errs.push(`${id}: CJK residue`);
    if (HANGUL.test(text)) errs.push(`${id}: HANGUL residue`);
    if (CYR.test(text)) errs.push(`${id}: CYRILLIC residue`);
    // script mutual exclusion
    if (SCRIPT[loc] && !SCRIPT[loc].test(text)) errs.push(`${id}: no ${loc} script`);
    for (const s of ['ar', 'el', 'th']) {
      if (s !== loc && SCRIPT[s].test(text)) errs.push(`${id}: foreign ${s.toUpperCase()} script`);
    }
    // question mark per locale
    if (!r.q.endsWith(QMARK[loc])) errs.push(`${id}: q does not end with ${QMARK[loc]}`);
    if (loc === 'ar' && r.q.includes('?')) errs.push(`${id}: stray ASCII ?`);
    if (loc === 'el' && r.q.includes('؟')) errs.push(`${id}: stray Arabic ؟`);
    if (/\b(lbs|pounds|inches|feet)\b/i.test(r.a)) errs.push(`${id}: un-localized imperial unit`);
    // brand always lowercase, incl. sentence-initial
    let idx = 0;
    while ((idx = text.indexOf('Afarer', idx)) !== -1) {
      errs.push(`${id}: capitalized "Afarer"`);
      idx += 6;
    }
  });

  const by = (id) => data.find((r) => r.id === id);
  const vw = by('sup-volume-weight');
  if (vw) {
    const d = dec(loc, '2,2');
    if (!vw.a.includes(d) || !vw.a.includes('165') || !vw.a.includes('260')) {
      errs.push(`sup-volume-weight: decimal "${d}" / 165 / 260 missing`);
    }
  }
  const avo = by('afarer-vs-others');
  if (avo) {
    if (!avo.a.includes(pct(loc, 90)) || !avo.a.includes(pct(loc, 60))) {
      errs.push(`afarer-vs-others: percent "${pct(loc, 90)}"/"${pct(loc, 60)}" missing`);
    }
  }
  const wc = by('sup-weight-capacity');
  if (wc && !wc.a.includes(pct(loc, 80))) errs.push(`sup-weight-capacity: "${pct(loc, 80)}" missing`);
  const pay = by('b2b-payment');
  if (pay) {
    if (!pay.a.includes(pct(loc, 30)) || !pay.a.includes(pct(loc, 70))) {
      errs.push(`b2b-payment: "${pct(loc, 30)}"/"${pct(loc, 70)}" missing`);
    }
  }
  const ws = by('wind-safety');
  if (ws && !ws.a.includes('mph')) errs.push('wind-safety: mph missing');
  const ip = by('sup-inflate-pressure');
  if (ip && !ip.a.includes('PSI')) errs.push('sup-inflate-pressure: PSI missing');
  const qc = by('b2b-quality-control');
  if (qc) {
    if (!qc.a.includes(dec(loc, '1,5'))) errs.push(`b2b-quality-control: ${dec(loc, '1,5')} missing`);
    if (!qc.a.includes('AQL') || !qc.a.includes('ISO 2859')) errs.push('b2b-quality-control: AQL/ISO 2859 missing');
  }
  const cws = by('cold-weather-safety');
  if (cws && !cws.a.includes('15°C')) errs.push('cold-weather-safety: 15°C missing');
  for (const sid of ['b2b-shipping', 'sup-oem-process', 'b2b-lead-time']) {
    const r = by(sid);
    if (r && !r.a.includes('FOB Qingdao')) errs.push(`${sid}: FOB Qingdao missing`);
  }

  // diacritics presence (Latin locales)
  if (DIA[loc]) {
    const has = data.some((r) => DIA[loc].test(r.q) || DIA[loc].test(r.a));
    if (!has) errs.push(`no ${loc} diacritics anywhere`);
  }

  if (errs.length) {
    fail++;
    console.log(`[${loc}] ${errs.length} issue(s):`);
    errs.slice(0, 25).forEach((e) => console.log(`   ${e}`));
  } else {
    const lowerCount = data.reduce((n, r) => n + ((r.q + ' ' + r.a).match(/afarer/g) || []).length, 0);
    console.log(`[${loc}] clean (afarer lowercase x${lowerCount})`);
  }
}
console.log(fail === 0 ? 'ALL CLEAN' : `${fail} locale(s) FAILED`);
process.exit(fail === 0 ? 0 : 1);
