const fs = require('fs');
const path = require('path');
const TMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const ARC = 'E:/github/afarer/TOOLS/i18n-merge/faq-body-94';
const LOCALES = ['cs', 'da', 'nl', 'no', 'pl', 'sv'];

// EN source: prefer Temp copy, fall back to 94 archive
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
// locale -> allowed English-looking loans (true Danish/Dutch/Norwegian/Swedish words)
const ALLOW = {
  cs: [],
  da: ['board', 'paddle', 'is', 'for'],
  nl: ['board', 'paddle', 'water', 'is', 'for'],
  no: ['is', 'for'],
  pl: [],
  sv: ['is'],
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
  let re = `${B}(${words.join('|')})${A}`;
  if (!ALLOW[loc].includes('paddle')) re += `|${B}(?<!Red )paddle(?! Co)${A}`;
  ENG_RES[loc] = new RegExp(re, 'iu');
}
const PCT_SPACE = { cs: true, da: true, nl: false, no: true, pl: false, sv: true };
const DIA = {
  cs: /[ěščřžýáíéůú]/i,
  da: /[æøå]/i,
  nl: null,
  no: /[æøå]/i,
  pl: /[łążóćęśźń]/i,
  sv: /[åäö]/i,
};
const CJK = /[\u3040-\u30ff\u4e00-\u9fff]/;
const HANGUL = /[\uac00-\ud7af]/;
const CYR = /[\u0400-\u04ff]/;

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
    const m = (r.q + ' ' + r.a).match(ENG_RES[loc]);
    if (m) errs.push(`${id}: English residue "${m[0]}"`);
    if (CJK.test(r.q + r.a)) errs.push(`${id}: CJK residue`);
    if (HANGUL.test(r.q + r.a)) errs.push(`${id}: HANGUL residue`);
    if (CYR.test(r.q + r.a)) errs.push(`${id}: CYRILLIC residue`);
    if (!r.q.endsWith('?')) errs.push(`${id}: q does not end with ?`);
    if (r.q.includes('¿')) errs.push(`${id}: stray ¿`);
    if (/\b(lbs|pounds|inches|feet)\b/i.test(r.a)) errs.push(`${id}: un-localized imperial unit`);
    // 95 convention: brand always lowercase, incl. sentence-initial
    let idx = 0;
    const text = r.q + ' ' + r.a;
    while ((idx = text.indexOf('Afarer', idx)) !== -1) {
      errs.push(`${id}: capitalized "Afarer"`);
      idx += 6;
    }
  });

  const by = (id) => data.find((r) => r.id === id);
  const vw = by('sup-volume-weight');
  if (vw && !vw.a.includes('2,2')) errs.push('sup-volume-weight: decimal 2,2 missing');
  const avo = by('afarer-vs-others');
  if (avo) {
    const p90 = PCT_SPACE[loc] ? '90 %' : '90%';
    const p60 = PCT_SPACE[loc] ? '60 %' : '60%';
    if (!avo.a.includes(p90) || !avo.a.includes(p60)) errs.push(`afarer-vs-others: percent "${p90}"/"${p60}" missing`);
  }
  const ws = by('wind-safety');
  if (ws && !ws.a.includes('mph')) errs.push('wind-safety: mph missing');
  const ip = by('sup-inflate-pressure');
  if (ip && !ip.a.includes('PSI')) errs.push('sup-inflate-pressure: PSI missing');
  const qc = by('b2b-quality-control');
  if (qc) {
    if (!qc.a.includes('1,5')) errs.push('b2b-quality-control: 1,5 missing');
    if (!qc.a.includes('AQL') || !qc.a.includes('ISO 2859')) errs.push('b2b-quality-control: AQL/ISO 2859 missing');
  }
  const cws = by('cold-weather-safety');
  if (cws && !cws.a.includes('15°C')) errs.push('cold-weather-safety: 15°C missing');

  // diacritics presence
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
