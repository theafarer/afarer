const fs = require('fs');

// 1) Repair: restore `- 'slug: ...'` / `- 'q: ...'` lines damaged by the previous pass.
// 2) Re-run colon fix with corrected list-item rule (skip mapping-style items `- key: value`).
for (const f of ['src/data/guides-es.yaml', 'src/data/guides-it.yaml']) {
  let raw = fs.readFileSync(f, 'utf8');
  let repairs = 0;
  raw = raw
    .split('\n')
    .map((line) => {
      const m = line.match(/^(\s*)- '(slug|q): (.*)'$/);
      if (m) {
        repairs++;
        return m[1] + '- ' + m[2] + ': ' + m[3].replace(/''/g, "'");
      }
      return line;
    })
    .join('\n');
  console.log(f + ': repaired ' + repairs + ' lines');

  let fixes = 0;
  const out = raw.split('\n').map((line) => {
    const r = line.replace(/\r$/, '');
    let m = r.match(/^(\s*)([A-Za-z][\w.]*): (.+)$/);
    if (m && !/^['"&*!|>%@`[{]/.test(m[3]) && /:\s/.test(m[3])) {
      fixes++;
      return m[1] + m[2] + ": '" + m[3].replace(/'/g, "''") + "'";
    }
    m = r.match(/^(\s*)- (.+)$/);
    if (
      m &&
      !/^['"&*!|>%@`[{]/.test(m[2]) &&
      !/^[A-Za-z][\w.]*: /.test(m[2]) && // item is a mapping (`- key: value`), leave alone
      /:\s/.test(m[2])
    ) {
      fixes++;
      return m[1] + "- '" + m[2].replace(/'/g, "''") + "'";
    }
    return line;
  });
  console.log(f + ': fixed ' + fixes + ' lines');
  fs.writeFileSync(f, out.join('\n'), 'utf8');
}
