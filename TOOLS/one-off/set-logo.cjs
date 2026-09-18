const fs = require('fs');
const path = require('path');
const root = process.cwd();
const files = fs.readdirSync(path.join(root, 'src')).filter((f) => /^config(\.\w{2})?\.yaml$/.test(f));

for (const f of files) {
  const p = path.join(root, 'src', f);
  let s = fs.readFileSync(p, 'utf8');
  let changed = false;
  const before = s;

  // branding.logo_image / logo_alt (any indentation)
  s = s.replace(/^(\s*logo_image:\s*).*$/m, `$1'/android-chrome-192x192.png'`);
  s = s.replace(/^(\s*logo_alt:\s*).*$/m, `$1'Afarer_Logo'`);

  // organization.logo
  s = s.replace(/^(\s*logo:\s*).*$/m, `$1'/android-chrome-512x512.png'`);

  changed = s !== before;
  if (changed) {
    fs.writeFileSync(p, s, 'utf8');
    console.log(`updated ${f}`);
  } else {
    console.log(`no change ${f}`);
  }
}
