// Verifies _lang-*.cjs files against _missing-en.json (424 keys, batch 2026-09).
// Usage: node TOOLS/i18n-merge/_verify-langs.cjs it ja ko ...
const fs = require('fs');
const path = require('path');

const missing = JSON.parse(fs.readFileSync(path.join(__dirname, '_missing-en.json'), 'utf8'));
const expectedKeys = Object.keys(missing);
const expectedSet = new Set(expectedKeys);
const langs = process.argv.slice(2);

if (langs.length === 0) {
  console.error('usage: node _verify-langs.cjs <lang> [lang ...]');
  process.exit(1);
}

let failed = false;
for (const lang of langs) {
  const file = path.join(__dirname, `_lang-${lang}.cjs`);
  if (!fs.existsSync(file)) {
    console.log(`[${lang}] FAIL: file not found ${file}`);
    failed = true;
    continue;
  }
  let tr;
  try {
    tr = require(file);
  } catch (e) {
    console.log(`[${lang}] FAIL: syntax error: ${e.message}`);
    failed = true;
    continue;
  }
  const keys = Object.keys(tr);
  const problems = [];
  if (keys.length !== expectedKeys.length) {
    problems.push(`key count ${keys.length} != ${expectedKeys.length}`);
  }
  const missingKeys = expectedKeys.filter((k) => !(k in tr));
  if (missingKeys.length > 0) {
    problems.push(
      `missing keys (${missingKeys.length}): ${missingKeys.slice(0, 5).join(', ')}${missingKeys.length > 5 ? ' ...' : ''}`
    );
  }
  const extraKeys = keys.filter((k) => !expectedSet.has(k));
  if (extraKeys.length > 0) {
    problems.push(
      `extra keys (${extraKeys.length}): ${extraKeys.slice(0, 5).join(', ')}${extraKeys.length > 5 ? ' ...' : ''}`
    );
  }
  const emptyKeys = keys.filter((k) => !String(tr[k]).trim());
  if (emptyKeys.length > 0) {
    problems.push(`empty values (${emptyKeys.length}): ${emptyKeys.slice(0, 5).join(', ')}`);
  }
  // Markup / symbol preservation: <strong>, <br />, →
  for (const k of expectedKeys) {
    if (!(k in tr)) continue;
    const en = String(missing[k]);
    const val = String(tr[k]);
    for (const tag of ['<strong>', '</strong>', '<br />', '→']) {
      const enCount = en.split(tag).length - 1;
      const valCount = val.split(tag).length - 1;
      if (enCount !== valCount) {
        problems.push(`markup mismatch on ${k}: expected ${enCount}x "${tag}", got ${valCount}`);
      }
    }
  }
  // CJK leak check (ja allowed; ko must not contain hanji ideographs)
  const cjkIdeograph = /[\u4e00-\u9fff]/;
  const kana = /[\u3040-\u30ff]/;
  for (const k of keys) {
    const val = String(tr[k]);
    if (lang !== 'ja' && cjkIdeograph.test(val)) {
      problems.push(`CJK ideograph leak on ${k}`);
    }
    if (lang !== 'ja' && kana.test(val)) {
      problems.push(`kana leak on ${k}`);
    }
  }
  if (problems.length > 0) {
    console.log(`[${lang}] FAIL:`);
    for (const p of problems.slice(0, 20)) console.log(`  - ${p}`);
    if (problems.length > 20) console.log(`  ... and ${problems.length - 20} more`);
    failed = true;
  } else {
    console.log(`[${lang}] OK: ${keys.length}/${expectedKeys.length} keys, markup + charset clean`);
  }
}
process.exit(failed ? 1 : 0);
