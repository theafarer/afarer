// Audit all slug maps in nodes.ts: which nodes have locale slugs differing from node.id?
const fs = require('fs');
const src = fs.readFileSync('E:/github/afarer/src/content/graph/nodes.ts', 'utf8');

// Split into node blocks: each top-level object starts with "  {" followed by "    id: '...'"
const lines = src.split('\n');
let nodes = [];
let cur = null;
let depth = 0;
for (const line of lines) {
  const idm = line.match(/^\s{4}id: '([^']+)',$/);
  if (idm && !cur) cur = { id: idm[1], slugStart: -1, lines: [] };
  if (cur) {
    cur.lines.push(line);
    if (/^\s{4}slug: \{/.test(line)) cur.slugStart = cur.lines.length - 1;
    if (/^\s{4}\},?\s*$/.test(line) && cur.slugStart >= 0 && cur.lines.length - 1 > cur.slugStart) {
      // closing of slug block: find the slug entries collected
      nodes.push(cur);
      cur = null;
    }
  }
}

for (const n of nodes) {
  const slugLines = n.lines.slice(n.slugStart + 1);
  const entries = [];
  for (const l of slugLines) {
    const m = l.match(/^\s{6}(\w+): '([^']+)',?$/);
    if (m) entries.push([m[1], m[2]]);
    else if (/^\s{4}\}/.test(l)) break;
  }
  const std = entries.filter(([l, s]) => s === n.id).map(([l]) => l);
  const nonStd = entries.filter(([l, s]) => s !== n.id);
  console.log(
    `node '${n.id}': ${entries.length} slug entries | standard(${std.length}): ${std.join(',') || '-'} | NON-STANDARD: ${
      nonStd.map(([l, s]) => l + '=' + s).join(', ') || '(none)'
    }`
  );
}
console.log('\ntotal nodes with slug maps:', nodes.length);
