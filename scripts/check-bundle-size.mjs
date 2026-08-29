import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const MAX_JS_KB = Number(process.env.CLIENT_JS_MAX_KB ?? 750);
const MAX_CSS_KB = Number(process.env.CLIENT_CSS_MAX_KB ?? 220);

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

if (!readdirSync(DIST, { withFileTypes: true }).length) {
  throw new Error('dist/ is empty; run the production build first');
}

const assets = walk(DIST).filter((file) => /\.(?:js|css)$/i.test(file));
const checks = [
  { extension: '.js', limit: MAX_JS_KB, label: 'JavaScript' },
  { extension: '.css', limit: MAX_CSS_KB, label: 'CSS' },
];
let failed = false;

for (const check of checks) {
  const largest = assets
    .filter((file) => file.endsWith(check.extension))
    .map((file) => ({ file, kb: statSync(file).size / 1024 }))
    .sort((a, b) => b.kb - a.kb)[0];

  if (!largest) {
    console.log(`[bundle] No ${check.label} assets found`);
    continue;
  }

  const ok = largest.kb <= check.limit;
  console.log(
    `[bundle] largest ${check.label}: ${largest.file} = ${largest.kb.toFixed(0)}KB (limit ${check.limit}KB) ${ok ? 'OK' : 'OVER LIMIT'}`
  );
  if (!ok) failed = true;
}

if (failed) {
  console.error('[bundle] size gate failed');
  process.exit(1);
}
console.log('[bundle] size gate passed');
