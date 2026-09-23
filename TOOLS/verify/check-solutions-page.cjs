#!/usr/bin/env node
/**
 * check-solutions-page.cjs — B2B solutions 详情页翻译逐项断言
 *
 * 数据驱动: EXPECTED 表按 slug → lang → 期望出现的译文子串列表。
 * 新增/修改 solutions 页翻译时，在 EXPECTED 中补对应条目即可复用。
 *
 * 用法（仓库根目录执行，需已构建 dist/）:
 *   node TOOLS/verify/check-solutions-page.cjs corporate-sup-event-package fr es
 *   node TOOLS/verify/check-solutions-page.cjs corporate-sup-event-package   # 校验该 slug 全部已登记语言
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');

/** 期望译文子串（slug → lang → [子串...]） */
const EXPECTED = {
  'corporate-sup-event-package': {
    fr: [
      'Solutions SUP personnalisées',
      'exigences différentes',
      'Flotte SUP personnalisée',
      '1 200 ingénieurs',
      'Pouvez-vous reproduire',
      'expérience nautique',
      'Quatre défis',
      'Études de cas',
    ],
    es: [
      'Soluciones SUP Personalizadas',
      'requisitos diferentes',
      'Flota SUP Personalizada',
      '1.200 Ingenieros',
      '¿Pueden igualar',
      'Experiencia Acuática Corporativa',
      'Cuatro desafíos',
      'Casos Prácticos',
    ],
  },
};

/** 已翻译页面不应再出现的英文原句（残留检测） */
const EN_LEFTOVERS = [
  'Four challenges',
  'Case Studies',
  'Real results from real',
  'Trusted by brands worldwide',
  'Frequently Asked Questions',
  'How A Global Beverage Brand Created',
];

const args = process.argv.slice(2);
const slug = args[0];
if (!slug || !EXPECTED[slug]) {
  console.error('用法: node TOOLS/verify/check-solutions-page.cjs <slug> [lang ...]');
  console.error('已登记 slug:', Object.keys(EXPECTED).join(', '));
  process.exit(1);
}
const langs = args.slice(1).length ? args.slice(1) : Object.keys(EXPECTED[slug]);

let failed = 0;
for (const l of langs) {
  const p = path.join(DIST, l, 'solutions', slug, 'index.html');
  if (!fs.existsSync(p)) {
    console.log(`FAIL ${l}: file not found ${path.relative(DIST, p)}`);
    failed++;
    continue;
  }
  if (!EXPECTED[slug][l]) {
    console.log(`SKIP ${l}: EXPECTED 表未登记该语言`);
    continue;
  }
  const s = fs.readFileSync(p, 'utf8');
  console.log(`=== ${l} ===`);
  let miss = 0;
  for (const exp of EXPECTED[slug][l]) {
    const ok = s.includes(exp);
    if (!ok) miss++;
    console.log(`  ${ok ? 'OK  ' : 'MISS'} ${exp}`);
  }
  for (const e of EN_LEFTOVERS) {
    if (s.includes('>' + e) || s.includes(' ' + e)) {
      console.log(`  EN LEFTOVER: ${e}`);
      miss++;
    }
  }
  if (miss) failed++;
}
console.log(failed === 0 ? 'ALL PASS' : `${failed} lang(s) FAILED`);
process.exit(failed === 0 ? 0 : 1);
