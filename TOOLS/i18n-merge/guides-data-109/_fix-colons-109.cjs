const fs = require('fs');

// Shard 109: quote-wrap plain yaml values containing ": " (same rule set as _fix-colons-108.cjs).
// Skips mapping-style list items (`- key: value`) and already-quoted values.
for (const f of ['src/data/guides-ja.yaml', 'src/data/guides-ko.yaml']) {
  let raw = fs.readFileSync(f, 'utf8');
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
