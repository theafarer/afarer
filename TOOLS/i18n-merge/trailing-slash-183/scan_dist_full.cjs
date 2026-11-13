// FULL scan: every dist index.html, flag internal hrefs lacking trailing slash.
// Excludes: files/assets, external, mailto/tel, anchors, root-tree pages (middleware redirects /x -> /en/x).
const fs = require('fs');
const path = require('path');

const DIST = 'E:/github/afarer/dist';
const SITE = 'https://afarer.com';
const ROOT_TREE = new Set(['guides', 'marine-industry', 'news', 'products', 'v2', 'randdcenter', 'engineering-team', 'factory', 'about', 'contact', 'brand', 'solutions', 'use-cases', 'resources', 'knowledge', 'academy', 'journal', 'lifestyle', 'media', 'quality', 'safety', 'size-guide', 'technology', 'trust', 'warranty', 'custom', 'evidence', 'gallery', 'compare', 'affiliates', 'csr', 'dealers', 'events', 'b2b', 'wholesale', 'blog', 'tags', 'categories', 'keystatic', 'api', 'internal']);

const issues = [];
const stats = { pages: 0, hrefs: 0, rootPagesSkipped: 0 };

function isFile(h) { return /\/[^/]*\.[a-z0-9]{1,6}(?:[?#]|$)/i.test(h); }

function scanPage(fp) {
  const rel = path.relative(DIST, fp).replace(/\\/g, '/');
  const top = rel.split('/')[0].toLowerCase();
  const isRootTree = !rel.includes('/') ? true : (ROOT_TREE.has(top) && !/^(en|fr|de|es|pt|it|nl|ru|zh|ja|ko|ar|he|pl|cs|sk|hu|ro|bg|el|sv|da|fi|no|tr|id|ms|th|vi|uk|hr|sl|sr|lt|lv|et|tl)\//i.test(rel));
  // simpler: root-tree = rel has no locale first segment AND rel !== 'index.html' (homepage is reachable)
  const firstSeg = rel.includes('/') ? rel.split('/')[0].toLowerCase() : '';
  const locales = new Set(['en','fr','de','es','pt','it','nl','ru','zh','ja','ko','ar','he','pl','cs','sk','hu','ro','bg','el','sv','da','fi','no','tr','id','ms','th','vi','uk','hr','sl','sr','lt','lv','et','tl']);
  const rootTree = rel !== 'index.html' && !locales.has(firstSeg);
  stats.pages++;
  if (rootTree) { stats.rootPagesSkipped++; return; }
  const html = fs.readFileSync(fp, 'utf8');
  const re = /href="([^"]+)"/g;
  let m;
  const pageIssues = new Set();
  while ((m = re.exec(html))) {
    let h = m[1];
    if (!h || h.startsWith('#') || /^(mailto:|tel:|javascript:|data:)/i.test(h)) continue;
    if (h.startsWith(SITE)) h = h.slice(SITE.length) || '/';
    if (!h.startsWith('/')) continue; // external or relative
    if (isFile(h)) continue;
    if (h === '/') continue;
    stats.hrefs++;
    // strip query/hash for slash check
    const bare = h.split(/[?#]/)[0];
    if (!bare.endsWith('/')) pageIssues.add(h);
  }
  if (pageIssues.size) issues.push({ page: rel, hrefs: [...pageIssues].sort() });
}

(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (e.name === 'index.html') scanPage(fp);
  }
})(DIST);

console.log('=== FULL dist scan (all [lang] + homepage pages) ===');
console.log('pages scanned:', stats.pages, '| root-tree skipped:', stats.rootPagesSkipped, '| internal hrefs:', stats.hrefs);
console.log('\npages with slashless hrefs:', issues.length);
for (const it of issues) console.log(`${it.page} (${it.hrefs.length}): ${it.hrefs.slice(0, 6).join(', ')}${it.hrefs.length > 6 ? ' ...' : ''}`);
