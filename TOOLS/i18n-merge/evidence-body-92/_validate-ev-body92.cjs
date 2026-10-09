const fs = require('fs');
const path = require('path');

const dir = __dirname;
const LOCALES = ['nl', 'sv', 'no', 'da', 'cs', 'pl'];
const en = JSON.parse(fs.readFileSync(path.join(dir, '_ev-body-en.json'), 'utf8'));
const enSlugs = Object.keys(en);

let fail = 0;
const issues = [];
const noSpace = (s) => !s.includes('  ');
const LABEL_WHITELIST = new Set(['Sell-through', 'Resorts', 'Bases', 'SKUs', 'SUPs', 'Containers']);

for (const loc of LOCALES) {
  let draft;
  let meta;
  try {
    draft = JSON.parse(fs.readFileSync(path.join(dir, `_ev-body-${loc}.json`), 'utf8'));
    meta = JSON.parse(fs.readFileSync(path.join(dir, `_ev-meta-${loc}.json`), 'utf8'));
  } catch (e) {
    console.log(`FAIL ${loc}: parse error ${e.message}`);
    fail++;
    continue;
  }
  let locFail = 0;
  const slugs = Object.keys(draft);
  if (slugs.length !== enSlugs.length || !enSlugs.every((s) => slugs.includes(s))) {
    issues.push(`${loc}: slug set mismatch (${slugs.length} vs ${enSlugs.length})`);
    locFail++;
  }
  for (const slug of enSlugs) {
    const d = draft[slug];
    const e = en[slug];
    if (!d) {
      issues.push(`${loc}/${slug}: missing`);
      locFail++;
      continue;
    }
    for (const f of ['industry', 'solution', 'result']) {
      if (!d[f] || typeof d[f] !== 'string') {
        issues.push(`${loc}/${slug}: ${f} empty`);
        locFail++;
      } else if (d[f] === e[f]) {
        issues.push(`${loc}/${slug}: ${f} identical to EN`);
        locFail++;
      } else if (!noSpace(d[f])) {
        issues.push(`${loc}/${slug}: ${f} contains double space`);
        locFail++;
      }
    }
    if (!Array.isArray(d.outcomeMetrics) || d.outcomeMetrics.length !== e.outcomeMetrics.length) {
      issues.push(
        `${loc}/${slug}: outcomeMetrics count ${d.outcomeMetrics ? d.outcomeMetrics.length : 0} != ${e.outcomeMetrics.length}`
      );
      locFail++;
    } else {
      d.outcomeMetrics.forEach((m, i) => {
        if (!m.label || !m.value) {
          issues.push(`${loc}/${slug}: metric ${i} empty label/value`);
          locFail++;
        } else if (m.label === e.outcomeMetrics[i].label && !LABEL_WHITELIST.has(m.label)) {
          issues.push(`${loc}/${slug}: metric label "${m.label}" identical to EN`);
          locFail++;
        } else if (!noSpace(m.label)) {
          issues.push(`${loc}/${slug}: metric label double space`);
          locFail++;
        }
      });
    }
    const enBa = e.beforeAfter || [];
    const dBa = d.beforeAfter || [];
    if (enBa.length > 0) {
      if (dBa.length !== enBa.length) {
        issues.push(`${loc}/${slug}: beforeAfter count ${dBa.length} != ${enBa.length}`);
        locFail++;
      } else {
        dBa.forEach((b, i) => {
          if (!b.label || !b.before || !b.after) {
            issues.push(`${loc}/${slug}: beforeAfter ${i} empty field`);
            locFail++;
          } else if (b.label === enBa[i].label) {
            issues.push(`${loc}/${slug}: beforeAfter label identical to EN`);
            locFail++;
          }
        });
      }
    }
    // reuse-check: shard-90 meta draft must provide client/product (title) + challenge (description)
    const m = meta[slug];
    if (!m || !m.title || !m.description) {
      issues.push(`${loc}/${slug}: meta draft missing title/description for reuse`);
      locFail++;
    } else if (!m.title.includes(' \u2014 ') || !m.title.endsWith(' | Afarer')) {
      issues.push(`${loc}/${slug}: meta title malformed for client/product split: [${m.title}]`);
      locFail++;
    }
  }
  if (locFail === 0) console.log(`PASS ${loc}: ${enSlugs.length}/19 slugs valid`);
  else {
    console.log(`FAIL ${loc}: ${locFail} issues`);
    fail++;
  }
}

if (issues.length) {
  console.log('--- issues ---');
  issues.slice(0, 60).forEach((i) => console.log('  ' + i));
  if (issues.length > 60) console.log(`  ... and ${issues.length - 60} more`);
}
console.log(fail === 0 ? 'ALL 6 LOCALES PASS' : 'VALIDATION FAILED');
process.exit(fail === 0 ? 0 : 1);
