// Over-indent detector: inside a folded block scalar, any content line
// indented MORE than the block's base indent renders a literal newline.
const fs = require('fs');
const yaml = require('E:/github/afarer/node_modules/js-yaml');
const file = process.argv[2];
const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
let issues = 0;
let blockBase = -1; // indent of first content line of current folded block
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.trim() === '') continue;
  const indent = line.length - line.trimStart().length;
  const isFoldHeader = /^\s*[-]?\s*\S*:\s*[>|][+-]?\s*$/.test(line) || (/^\s*-\s+\S+\s*$/.test(line) && false);
  if (/:\s*[>|][+-]?\s*$/.test(line)) {
    blockBase = -1; // will be set by first content line
    continue;
  }
  if (/:\s*(\S|$)/.test(line) && indent <= 6) {
    // a normal key line at shallow indent ends the folded block
    blockBase = -1;
    continue;
  }
  // content line
  if (blockBase === -1) {
    blockBase = indent;
  } else if (indent > blockBase) {
    console.log(`OVER-INDENT line ${i + 1}: base=${blockBase} indent=${indent}: ${line.trim().slice(0, 60)}`);
    issues++;
  }
}
console.log(issues === 0 ? 'NO OVER-INDENT' : `${issues} issue(s)`);
