const fs = require('fs');
const he = fs.readFileSync('E:/github/afarer/src/data/biz-solutions/translations/he.ts', 'utf8');
const lines = he.split(/\r?\n/);
lines.forEach((ln, i) => {
  if (ln.indexOf('{SITE}') >= 0) {
    const km = /^\s*(['"])([^'"]+)\1\s*:/.exec(ln);
    console.log((i + 1) + ': key=' + (km ? km[2] : '?') + ' | ' + ln.trim().slice(0, 90));
  }
});
