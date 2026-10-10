import { readFileSync } from 'fs';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const base = dirname(fileURLToPath(import.meta.url)) + '/';
const NEW_LOCALES = ['ar', 'el', 'fi', 'ro', 'th', 'tr'];
const drafts = {};
for (const l of NEW_LOCALES) drafts[l] = JSON.parse(readFileSync(base + '_faq-' + l + '.json', 'utf8'));
const enDraft = JSON.parse(readFileSync(base + '_faq-en.json', 'utf8'));

const require = createRequire('file:///E:/github/afarer/package.json');
const yaml = require('js-yaml');

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

const fetchHtml = async (p) => {
  const res = await fetch('https://afarer.com' + p, { redirect: 'follow' });
  if (!res.ok) return { err: 'HTTP ' + res.status };
  return { html: decode(await res.text()) };
};

let pass = 0,
  fail = 0;
const bad = (msg) => {
  console.log('FAIL ' + msg);
  fail++;
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// 6 new locales: all 53 q + a rendered, 53 items, FAQPage JsonLd
for (const l of NEW_LOCALES) {
  const p = '/' + l + '/faq/';
  try {
    const pg = await fetchHtml(p);
    if (pg.err) {
      bad(p + ' ' + pg.err);
      continue;
    }
    const missingQ = drafts[l].filter((r) => !pg.html.includes(r.q)).map((r) => r.id);
    const missingA = drafts[l].filter((r) => !pg.html.includes(r.a)).map((r) => r.id);
    const itemCount = (pg.html.match(/data-faq-question=/g) || []).length;
    const hasJsonLd = pg.html.includes('"@type":"FAQPage"');
    if (missingQ.length || missingA.length || itemCount !== 53 || !hasJsonLd) {
      bad(
        p +
          ' missingQ=[' +
          missingQ.join(',') +
          '] missingA=[' +
          missingA.join(',') +
          '] items=' +
          itemCount +
          ' jsonLd=' +
          hasJsonLd
      );
    } else {
      console.log('PASS ' + p + ' | 53 q+a, 53 items, JsonLd OK');
      pass++;
    }
  } catch (e) {
    bad(p + ' ' + e.message);
  }
  await sleep(300);
}

// B2B spot-check: payment structure answer must carry locale text (sample ids)
{
  const ids = ['b2b-payment', 'b2b-quality-control', 'sup-inflate-pressure'];
  for (const l of NEW_LOCALES) {
    const p = '/' + l + '/faq/';
    const pg = await fetchHtml(p);
    if (pg.err) {
      bad(p + ' (spot) ' + pg.err);
      continue;
    }
    const miss = ids.filter((id) => {
      const r = drafts[l].find((x) => x.id === id);
      return !r || !pg.html.includes(r.a);
    });
    if (miss.length) bad(p + ' spot missing [' + miss.join(',') + ']');
    else {
      console.log('PASS ' + p + ' | B2B/PSI spot-check');
      pass++;
    }
    await sleep(300);
  }
}

// de/fr/es regression: yaml q+a intact (all 53)
for (const l of ['de', 'fr', 'es']) {
  const data = yaml.load(readFileSync('E:/github/afarer/src/data/faq-' + l + '.yaml', 'utf8'));
  const p = '/' + l + '/faq/';
  try {
    const pg = await fetchHtml(p);
    if (pg.err) {
      bad(p + ' ' + pg.err);
      continue;
    }
    const missing = data.filter((f) => !pg.html.includes(f.question) || !pg.html.includes(f.answer)).map((f) => f.id);
    if (missing.length) bad(p + ' yaml missing [' + missing.join(',') + ']');
    else {
      console.log('PASS ' + p + ' | ' + data.length + ' yaml q+a');
      pass++;
    }
  } catch (e) {
    bad(p + ' ' + e.message);
  }
  await sleep(300);
}

// EN regression: /en/faq/ + root /faq/
for (const p of ['/en/faq/', '/faq/']) {
  try {
    const pg = await fetchHtml(p);
    if (pg.err) {
      bad(p + ' ' + pg.err);
      continue;
    }
    const missing = enDraft
      .filter((r) => !pg.html.includes(r.question) || !pg.html.includes(r.answer))
      .map((r) => r.id);
    if (missing.length) bad(p + ' EN missing [' + missing.join(',') + ']');
    else {
      console.log('PASS ' + p + ' | 53 EN q+a');
      pass++;
    }
  } catch (e) {
    bad(p + ' ' + e.message);
  }
  await sleep(300);
}

console.log('\n' + pass + ' pass / ' + fail + ' fail');
process.exit(fail ? 1 : 0);
