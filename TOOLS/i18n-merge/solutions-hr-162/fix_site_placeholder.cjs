const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'parts');
let totalFixed = 0;
for (const f of fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.yaml'))
  .sort()) {
  const p = path.join(dir, f);
  const lines = fs.readFileSync(p, 'utf8').split(/\r?\n/);
  let inMeta = false;
  let count = 0;
  const out = lines.map((ln) => {
    if (/^meta:/.test(ln)) {
      inMeta = true;
      return ln;
    }
    if (/^[A-Za-z]/.test(ln)) {
      inMeta = false;
    }
    if (inMeta) return ln;
    const n = ln.replace(/\{SITE\}/g, 'Afarer');
    count += n !== ln ? 1 : 0;
    return n;
  });
  if (count > 0) {
    fs.writeFileSync(p, out.join('\n'), 'utf8');
    console.log(f + ': fixed ' + count + ' line(s)');
    totalFixed += count;
  }
}
console.log('total lines fixed:', totalFixed);

// verify: {SITE} only remains under meta:
let bad = 0;
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.yaml'))) {
  const lines = fs.readFileSync(path.join(dir, f), 'utf8').split(/\r?\n/);
  let inMeta = false;
  lines.forEach((ln) => {
    if (/^meta:/.test(ln)) {
      inMeta = true;
      return;
    }
    if (/^[A-Za-z]/.test(ln)) inMeta = false;
    if (!inMeta && ln.indexOf('{SITE}') >= 0) {
      console.log('LEAK remains in ' + f + ': ' + ln.trim().slice(0, 80));
      bad++;
    }
  });
}
console.log(bad === 0 ? 'VERIFY OK: {SITE} only in meta blocks' : 'VERIFY FAILED: ' + bad);
