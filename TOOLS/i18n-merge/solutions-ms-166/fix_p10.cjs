const fs = require('fs');
const p = 'C:/Users/Helleo/AppData/Local/Temp/deveco/ms_solutions_work/parts/10_resort-water-activity-package.yaml';
const s = fs.readFileSync(p, 'utf8').split(/\r?\n/);
if (!s[72].endsWith("'")) {
  s[72] = s[72] + "'";
  fs.writeFileSync(p, s.join('\n'), 'utf8');
  console.log('fixed line 73, last15:', JSON.stringify(s[72].slice(-15)));
} else {
  console.log('line 73 already ends with quote');
}
