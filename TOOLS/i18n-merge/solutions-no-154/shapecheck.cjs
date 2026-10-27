const fs = require('fs');
const path = require('path');
const yaml = require('E:/github/afarer/node_modules/js-yaml');

function shape(node, keyPath) {
  if (Array.isArray(node)) {
    if (node.length === 0) return { t: 'arr0', path: keyPath };
    return [{ t: 'arr', n: node.length, path: keyPath }].concat(shape(node[0], keyPath + '[0]'));
  } else if (node && typeof node === 'object') {
    let out = [];
    for (const k of Object.keys(node)) {
      out.push({ t: 'key', k: k, path: keyPath + '.' + k });
      out = out.concat(shape(node[k], keyPath + '.' + k));
    }
    return out;
  }
  return [];
}

function flatten(list) {
  const map = new Map();
  for (const e of list) {
    const id = e.path + '|' + e.t + (e.k ? ':' + e.k : '') + (e.n ? ':' + e.n : '');
    map.set(id, e);
  }
  return map;
}

const file = process.argv[2];
const enFile = path.join('en_parts', file);
const en = yaml.load(fs.readFileSync(enFile, 'utf8'));
const cs = yaml.load(fs.readFileSync(path.join('parts', file), 'utf8'));
const enS = flatten(shape(en, '$'));
const csS = flatten(shape(cs, '$'));
const missing = [];
for (const [id, e] of enS) {
  if (!csS.has(id)) missing.push('MISSING in cs: ' + id);
}
const extra = [];
for (const [id, e] of csS) {
  if (!enS.has(id)) extra.push('EXTRA in cs: ' + id);
}
console.log('EN entries:', enS.size, 'CS entries:', csS.size);
if (missing.length) console.log(missing.join('\n'));
if (extra.length) console.log(extra.join('\n'));
if (!missing.length && !extra.length) console.log('SHAPE OK');
