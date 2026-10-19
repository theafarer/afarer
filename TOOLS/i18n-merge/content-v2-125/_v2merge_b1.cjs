const fs = require('fs');
const path = require('path');

const TMP = 'C:\\Users\\Helleo\\AppData\\Local\\Temp\\deveco';
const SITE = 'E:\\github\\afarer\\src\\data\\site';

function merge(lang, parts, out) {
  const chunks = parts.map((p) => fs.readFileSync(path.join(TMP, p), 'utf8').replace(/\r\n/g, '\n').trimEnd());
  const content = chunks.join('\n') + '\n';
  fs.writeFileSync(path.join(SITE, out), content, 'utf8');
  console.log('wrote ' + out + ' (' + content.length + ' chars)');
}

merge('es', ['_v2es_p1.yaml', '_v2es_p2.yaml', '_v2es_p3.yaml', '_v2es_p4.yaml'], 'content-v2.es.yaml');
merge('it', ['_v2it_p1.yaml', '_v2it_p2.yaml', '_v2it_p3.yaml', '_v2it_p4.yaml'], 'content-v2.it.yaml');
console.log('MERGE DONE');
