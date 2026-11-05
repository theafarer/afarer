const fs = require('fs');
const path = require('path');
const dir = 'parts';
let issues = 0;
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.yaml'))) {
  const lines = fs.readFileSync(path.join(dir, f), 'utf8').split('\n');
  lines.forEach((l, i) => {
    for (let j = 0; j < l.length; j++) {
      const ch = l[j];
      if (ch === '\u011b' || ch === '\u0159' || ch === '\u016f' || (ch === '\u010d' && false)) {
        console.log(
          f,
          'line',
          i + 1,
          'CZECH CHAR',
          JSON.stringify(ch),
          JSON.stringify(l.slice(Math.max(0, j - 30), j + 20))
        );
        issues++;
      }
    }
  });
}
console.log(issues === 0 ? 'NO CZECH-ONLY CHARS' : issues + ' issues');
