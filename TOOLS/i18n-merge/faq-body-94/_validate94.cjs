const fs = require('fs');
const path = require('path');
const TMP = 'C:/Users/Helleo/AppData/Local/Temp/deveco';
const LOCALES = ['es', 'it', 'pt', 'ru', 'ja', 'ko'];

const en = JSON.parse(fs.readFileSync(path.join(TMP, '_faq-en.json'), 'utf8'));
const EN_IDS = en.map((r) => r.id);
if (EN_IDS.length !== 53) {
  console.log(`EN record count != 53: ${EN_IDS.length}`);
  process.exit(1);
}
const enById = new Map(en.map((r) => [r.id, r]));

// distinctly-English function words; use \p{L} boundaries so accented letters
// (e.g. pt "anéis") do not create false \b boundaries; "Red Paddle Co" is a brand
const B = String.raw`(?<![\p{L}\p{N}_])`;
const A = String.raw`(?![\p{L}\p{N}_])`;
const ENG_RE = new RegExp(
  `${B}(the|and|with|your|for|you|our|this|that|these|is|are|board|water|inflatable|warranty|shipping)${A}` +
    `|${B}(?<!Red )paddle(?! Co)${A}`,
  'iu'
);
const CJK_KANA = /[\u3040-\u30ff]/;
const KANJI = /[\u4e00-\u9fff]/;
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
    // English residue
    const m = (r.q + ' ' + r.a).match(ENG_RE);
    if (m) errs.push(`${id}: English residue "${m[0]}"`);
    // cross-script
    if (loc === 'ja') {
      if (!CJK_KANA.test(r.a)) errs.push(`${id}: no kana in ja answer`);
    } else if (CJK_KANA.test(r.q + r.a) || KANJI.test(r.q + r.a)) {
      errs.push(`${id}: CJK residue in ${loc}`);
    }
    if (loc === 'ko') {
      if (!HANGUL.test(r.a)) errs.push(`${id}: no hangul in ko answer`);
    } else if (HANGUL.test(r.q + r.a)) {
      errs.push(`${id}: HANGUL residue in ${loc}`);
    }
    if (loc === 'ru') {
      if (!CYR.test(r.a)) errs.push(`${id}: no cyrillic in ru answer`);
    } else if (CYR.test(r.q + r.a)) {
      errs.push(`${id}: CYRILLIC residue in ${loc}`);
    }
    // question punctuation
    if (!r.q.endsWith('?') && !r.q.endsWith('？')) errs.push(`${id}: q does not end with ?`);
    if (loc === 'es' && !r.q.includes('¿')) errs.push(`${id}: es q missing ¿`);
    if (loc !== 'es' && r.q.includes('¿')) errs.push(`${id}: stray ¿ in ${loc}`);
    // imperial units must be localized words, not "lbs"/"inches"/"feet"
    if (/\b(lbs|pounds|inches|feet)\b/i.test(r.a)) errs.push(`${id}: un-localized imperial unit`);
  });

  // locale conventions on specific records
  const by = (id) => data.find((r) => r.id === id);
  const vw = by('sup-volume-weight');
  if (vw) {
    const dec = loc === 'ja' || loc === 'ko' ? '2.2' : '2,2';
    if (!vw.a.includes(dec)) errs.push(`sup-volume-weight: decimal ${dec} missing (got: ${vw.a.slice(0, 80)}...)`);
  }
  const avo = by('afarer-vs-others');
  if (avo) {
    if (loc === 'es') {
      if (!avo.a.includes('90 %') || !avo.a.includes('60 %'))
        errs.push('afarer-vs-others: es percent spacing "90 %" missing');
    } else if (!avo.a.includes('90%') || !avo.a.includes('60%')) {
      errs.push('afarer-vs-others: "90%"/"60%" missing');
    }
  }
  const ws = by('wind-safety');
  if (ws && !ws.a.includes('mph')) errs.push('wind-safety: mph missing');
  const ip = by('sup-inflate-pressure');
  if (ip && !ip.a.includes('PSI')) errs.push('sup-inflate-pressure: PSI missing');
  const qc = by('b2b-quality-control');
  if (qc) {
    const dec15 = loc === 'ja' || loc === 'ko' ? '1.5' : '1,5';
    if (!qc.a.includes(dec15)) errs.push(`b2b-quality-control: ${dec15} missing`);
    if (!qc.a.includes('AQL') || !qc.a.includes('ISO 2859')) errs.push('b2b-quality-control: AQL/ISO 2859 missing');
  }

  // brand casing report: flag "Afarer" not at sentence start
  const brandIssues = [];
  let lowerCount = 0;
  data.forEach((r) => {
    const text = r.q + ' ' + r.a;
    lowerCount += (text.match(/afarer/g) || []).length;
    let idx = 0;
    while ((idx = text.indexOf('Afarer', idx)) !== -1) {
      const prev = text.slice(Math.max(0, idx - 2), idx);
      if (!/(^|[.?!…]\s|:\s)$/.test(prev)) {
        brandIssues.push(`${r.id}: "Afarer" mid-sentence (prev "${prev}")`);
      }
      idx += 6;
    }
  });
  if (brandIssues.length) {
    brandIssues.slice(0, 10).forEach((b) => errs.push(b));
  }

  if (errs.length) {
    fail++;
    console.log(`[${loc}] ${errs.length} issue(s):`);
    errs.slice(0, 25).forEach((e) => console.log(`   ${e}`));
  } else {
    console.log(`[${loc}] clean (afarer lowercase x${lowerCount})`);
  }
}
console.log(fail === 0 ? 'ALL CLEAN' : `${fail} locale(s) FAILED`);
process.exit(fail === 0 ? 0 : 1);
