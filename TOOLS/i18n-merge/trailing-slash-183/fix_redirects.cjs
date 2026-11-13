// Append trailing '/' to slashless redirect targets in Astro.redirect() calls.
// Handles string literals and template literals; skips '' , '/' , already-slashed, and _login.astro (keystatic admin).
const fs = require('fs');
const path = require('path');

const ROOT = 'E:/github/afarer/src/pages';
let filesChanged = 0;
let fixes = 0;

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp);
    else if (e.name.endsWith('.astro') && e.name !== '_login.astro') fix(fp);
  }
}

function fix(fp) {
  const s = fs.readFileSync(fp, 'utf8');
  const lines = s.split('\n');
  let changed = false;
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i].includes('Astro.redirect')) continue;
    let line = lines[i];
    // single-quoted path literals (len>1, start /, not ending /)
    const fixed = line.replace(/'((?:\\.|[^'\\])+)'/g, (full, lit) => {
      if (!lit.startsWith('/') || lit.endsWith('/') || lit.length < 2) return full;
      // only fix literals that are the redirect target (last string arg) — heuristic: path-like
      fixes++;
      return `'${lit}/'`;
    });
    if (fixed !== line) {
      lines[i] = fixed;
      changed = true;
      continue;
    }
    // template literals
    const fixedT = line.replace(/`([^`]*)`/g, (full, lit) => {
      if (!lit.startsWith('/') || lit.endsWith('/') || lit.length < 2) return full;
      fixes++;
      return `\`${lit}/\``;
    });
    if (fixedT !== line) {
      lines[i] = fixedT;
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(fp, lines.join('\n'));
    filesChanged++;
    console.log('fixed:', fp.replace(/\\/g, '/').replace('E:/github/afarer/src/pages/', ''));
  }
}

walk(ROOT);
console.log('files changed:', filesChanged, '| redirect targets fixed:', fixes);
