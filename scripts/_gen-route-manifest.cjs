/**
 * Generates src/i18n/generated/route-manifest.json — the list of all static
 * page paths from the PREVIOUS build's dist/ output.
 *
 * Used by the language switcher (Header.astro) to avoid linking to
 * /{locale}{path} combinations that were never generated (pages that only
 * exist in a subset of languages).
 *
 * NOTE: two-pass by design. The manifest reflects the previous dist/ state;
 * page sets are stable between builds. The manifest is COMMITTED to the repo
 * (see .gitignore exception) so CI builds render hreflang alternates. When
 * dist/ is missing (fresh checkout) the committed manifest is kept as-is.
 */
const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
const outFile = path.resolve(__dirname, '../src/i18n/generated/route-manifest.json');

const SKIP_DIRS = new Set(['client', '_astro', 'images', 'assets']);

function walk(dir, base, out) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      walk(path.join(dir, e.name), `${base}/${e.name}`, out);
    } else if (e.isFile() && e.name === 'index.html') {
      const p = base === '' ? '/' : base;
      out.push(p);
    }
  }
}

const routes = [];
if (fs.existsSync(distDir)) {
  walk(distDir, '', routes);
  routes.sort();
} else if (fs.existsSync(outFile)) {
  // Fresh checkout (CI): no dist/ to scan, but a committed manifest exists.
  // Keep it — an empty manifest would strip every hreflang alternate at build.
  console.warn('[route-manifest] dist/ not found — keeping committed manifest.');
  process.exit(0);
} else {
  console.warn('[route-manifest] dist/ not found and no existing manifest — writing empty manifest (first build).');
}

// Guard: a failed `astro build` leaves dist/ empty or partial (astro empties
// outDir at build start). Never clobber a healthy manifest with a degenerate one.
let write = true;
if (fs.existsSync(outFile)) {
  try {
    const prev = JSON.parse(fs.readFileSync(outFile, 'utf8'));
    if (Array.isArray(prev) && prev.length > 0 && routes.length < prev.length * 0.5) {
      console.warn(
        `[route-manifest] keeping previous manifest (${prev.length} routes); ` +
          `dist/ only has ${routes.length} pages (incomplete build output?)`
      );
      write = false;
    }
  } catch {
    /* ignore malformed previous manifest */
  }
}

if (write) {
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  // 2-space indent matches prettier output (file is tracked; CI runs prettier --check)
  fs.writeFileSync(outFile, JSON.stringify(routes, null, 2) + '\n', 'utf8');
  console.log(`[route-manifest] ${routes.length} routes -> ${path.relative(process.cwd(), outFile)}`);
}
