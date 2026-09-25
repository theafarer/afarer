#!/usr/bin/env node
/**
 * Full translation audit against the English YAML source files.
 * Reports structural problems and likely English fallbacks without rewriting
 * translation content. Use --fail to fail CI on structural/encoding issues.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { globSync } from 'glob';
import yaml from 'js-yaml';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LOCALES = [
  'en',
  'fr',
  'de',
  'es',
  'pt',
  'ar',
  'it',
  'ja',
  'ko',
  'ru',
  'pl',
  'nl',
  'sv',
  'no',
  'el',
  'tr',
  'fi',
  'cs',
  'da',
  'ro',
  'th',
];
const OPTIONAL_LOCALIZED_PAGES = new Set([
  'bateau-gonflable-fabricant.yaml',
  'co-brand.yaml',
  'distributor-program.yaml',
  'fabricant-sup-gonflable.yaml',
  'fournisseur-nautique.yaml',
  'oem-odm-manufacturer.yaml',
  'oem-paddle.yaml',
  'what-is-sup.yaml',
]);
const issues = [];
const warnings = [];
const jsonMode = process.argv.includes('--json');

function report(list, message) {
  list.push(message);
  if (!jsonMode) console.log(`  [${list === issues ? 'FAIL' : 'WARN'}] ${message}`);
}

function readFile(file) {
  try {
    return fs.readFileSync(path.join(ROOT, file), 'utf8');
  } catch {
    return null;
  }
}

function parseYaml(file) {
  const source = readFile(file);
  if (source === null) return null;
  try {
    return { source, data: yaml.load(source) ?? {} };
  } catch (error) {
    report(issues, `${file}: invalid YAML (${error.message})`);
    return null;
  }
}

function shape(value) {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, shape(child)]));
  }
  return typeof value;
}

// meta.keywords counts legitimately vary per locale (SEO density); exclude from
// the strict structure comparison so keyword drift does not mask real drift.
function stripMetaKeywords(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return data;
  if (!data.meta || typeof data.meta !== 'object' || Array.isArray(data.meta)) return data;
  const meta = { ...data.meta };
  delete meta.keywords;
  return { ...data, meta };
}

// Client company names in case studies are fictional proper nouns kept in
// English in every locale.
const KEEP_ENGLISH_TEXTS = new Set([
  'Pacific Watersports Pty Ltd',
  'North Sea Marine Equipment BV',
  'Paradise Island Resorts Ltd',
  'Atlantic Coastal Security Agency',
]);

// Certification / standard / industry acronyms that stay verbatim in all locales.
const UNTRANSLATABLE_TOKENS = new Set([
  'CE',
  'ISO',
  'BSCI',
  'REACH',
  'RoHS',
  'UKCA',
  'FCC',
  'FDA',
  'SGS',
  'BV',
  'USCG',
  'SOLAS',
  'AS',
  'ASTM',
  'EN',
  'PVC',
  'EVA',
  'PSI',
  'FOB',
  'CIF',
  'DDP',
  'AQL',
  'RIB',
  'UV',
  'OEM',
  'ODM',
  'CAD',
  'DXF',
  'QC',
  'QA',
  'MOQ',
  'SUP',
  'LLC',
  'ERP',
  'SKU',
  'CSM',
  'DTEX',
  'NBC',
]);

// A comma list made only of cert/standard tokens (e.g. "ISO 9001, BSCI, CE, REACH")
// is intentionally identical across locales.
function isCertificationList(text) {
  return (
    text.includes(',') &&
    text.split(',').every((part) => {
      const token = part.trim();
      if (!token) return true;
      if (UNTRANSLATABLE_TOKENS.has(token)) return true;
      if (/^\d+$/.test(token)) return true;
      const match = token.match(/^([A-Z]{1,8})\s?\d{2,5}$/);
      return !!match && UNTRANSLATABLE_TOKENS.has(match[1]);
    })
  );
}

function leaves(value, prefix = '') {
  if (Array.isArray(value)) return value.flatMap((child, index) => leaves(child, `${prefix}[${index}]`));
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) => leaves(child, prefix ? `${prefix}.${key}` : key));
  }
  return [prefix];
}

function collectText(value, result = []) {
  if (typeof value === 'string') result.push(value.trim());
  else if (Array.isArray(value)) value.forEach((child) => collectText(child, result));
  else if (value && typeof value === 'object') Object.values(value).forEach((child) => collectText(child, result));
  return result;
}

function suspiciousEncoding(source) {
  return /\uFFFD|�|锟|鈸|鈫|鈥|â€|Ã[^\p{L}\s]|Â[^\p{L}\s]/u.test(source);
}

function checkNavigationAndConfig() {
  for (const locale of LOCALES) {
    const navigation = locale === 'en' ? 'src/data/site/navigation.yaml' : `src/data/site/navigation.${locale}.yaml`;
    if (!readFile(navigation)) report(issues, `Missing navigation: ${navigation}`);
    if (locale !== 'en' && !readFile(`src/config.${locale}.yaml`))
      report(issues, `Missing config: src/config.${locale}.yaml`);
  }
}

function checkPages() {
  const englishFiles = globSync('src/data/pages/*.yaml', { cwd: ROOT }).sort();
  const checkedLocales = new Map();
  for (const englishFile of englishFiles) {
    const page = path.basename(englishFile);
    const english = parseYaml(englishFile);
    if (!english) continue;
    const englishShape = JSON.stringify(shape(stripMetaKeywords(english.data)));
    const englishLeaves = new Set(leaves(english.data));

    for (const locale of LOCALES.filter((item) => item !== 'en')) {
      const file = `src/data/pages/${locale}/${page}`;
      const translated = parseYaml(file);
      if (!translated) {
        if (OPTIONAL_LOCALIZED_PAGES.has(page)) continue;
        report(issues, `Missing page: ${file}`);
        continue;
      }
      checkedLocales.set(locale, (checkedLocales.get(locale) || 0) + 1);
      if (suspiciousEncoding(translated.source)) report(issues, `${file}: suspicious encoding/replacement characters`);
      const translatedShape = JSON.stringify(shape(stripMetaKeywords(translated.data)));
      if (!OPTIONAL_LOCALIZED_PAGES.has(page) && translatedShape !== englishShape) {
        const translatedLeaves = new Set(leaves(translated.data));
        const missing = [...englishLeaves].filter((leaf) => !translatedLeaves.has(leaf));
        const extra = [...translatedLeaves].filter((leaf) => !englishLeaves.has(leaf));
        report(warnings, `${file}: structure differs (missing ${missing.length}, extra ${extra.length})`);
      }

      const englishText = new Set(collectText(english.data).filter((text) => text.length >= 24));
      const translatedText = new Set(collectText(translated.data));
      function shouldTranslate(text) {
        if (/^https?:|^data:|^\//.test(text)) return false;
        if (/assets\.afarer\.com/.test(text)) return false;
        if (/^tabler:/.test(text)) return false;
        if (/^(from-|bg-|to-|text-|gap-)/.test(text)) return false;
        if (/\.[a-z0-9]+$/.test(text) && !/\s/.test(text) && !/[\u00e0-\u017f]{2}/.test(text)) return false;
        if (/^[a-z0-9]+(?:-[a-z0-9]+)+$/.test(text)) return false; // kebab-case slugs
        if (KEEP_ENGLISH_TEXTS.has(text)) return false;
        if (isCertificationList(text)) return false;
        return true;
      }
      const unchanged = [...englishText].filter((text) => translatedText.has(text) && shouldTranslate(text));
      if (!OPTIONAL_LOCALIZED_PAGES.has(page) && unchanged.length > 0) {
        report(warnings, `${file}: ${unchanged.length} long English value(s) unchanged; review translation`);
      }
    }
  }

  for (const locale of LOCALES.filter((item) => item !== 'en')) {
    const actual = checkedLocales.get(locale) || 0;
    const required = englishFiles.filter((file) => !OPTIONAL_LOCALIZED_PAGES.has(path.basename(file))).length;
    if (actual < required) report(issues, `${locale}: ${actual}/${required} required page files checked`);
  }
}

function checkAllTextFiles() {
  const files = globSync('src/data/**/*.{yaml,json,ts,tsx,astro,md,mdx}', { cwd: ROOT, posix: true });
  const seen = new Set();
  for (const file of files) {
    const normalized = file.replaceAll('\\\\', '/');
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    const source = readFile(normalized);
    if (source && suspiciousEncoding(source))
      report(issues, `${normalized}: suspicious encoding/replacement characters`);
  }
}

console.log('=== Full Translation Audit ===\n');
checkNavigationAndConfig();
checkPages();
checkAllTextFiles();

const result = {
  passed: issues.length === 0,
  issues,
  warnings,
  totalIssues: issues.length,
  totalWarnings: warnings.length,
};

if (jsonMode) console.log(JSON.stringify(result, null, 2));
else {
  console.log('\n=== Summary ===');
  console.log(`  Issues (FAIL): ${issues.length}`);
  console.log(`  Warnings:      ${warnings.length}`);
  if (issues.length === 0) console.log('  Structural and encoding checks passed.');
}

if (process.argv.includes('--fail') && issues.length > 0) process.exit(1);
