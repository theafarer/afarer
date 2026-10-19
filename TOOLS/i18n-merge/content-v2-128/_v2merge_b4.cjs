/* Append batch-4 records (49-75) to existing content-v2.{es,it}.yaml overlays (48 -> 75 records), then validate with js-yaml. */
const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');
const req = createRequire('E:\\github\\afarer\\node_modules\\js-yaml\\package.json');
const yaml = req('js-yaml');

const TMP = 'C:\\Users\\Helleo\\AppData\\Local\\Temp\\deveco';
const SITE = 'E:\\github\\afarer\\src\\data\\site';

function mergeAppend(lang, parts, out) {
  const existing = fs.readFileSync(path.join(SITE, out), 'utf8').replace(/\r\n/g, '\n').trimEnd();
  const prev = yaml.load(existing);
  if (!Array.isArray(prev)) throw new Error(out + ' existing not an array');
  const chunks = parts.map((p) => fs.readFileSync(path.join(TMP, p), 'utf8').replace(/\r\n/g, '\n').trimEnd());
  const content = existing + '\n' + chunks.join('\n') + '\n';
  const merged = yaml.load(content);
  if (!Array.isArray(merged) || merged.length !== prev.length + 27)
    throw new Error(
      out + ' merged count ' + (Array.isArray(merged) ? merged.length : 'NaN') + ' != ' + (prev.length + 27)
    );
  const slugs = new Set(merged.map((r) => r.slug));
  if (slugs.size !== merged.length) throw new Error(out + ' duplicate slugs');
  fs.writeFileSync(path.join(SITE, out), content, 'utf8');
  console.log('wrote ' + out + ' (' + prev.length + ' -> ' + merged.length + ' records, ' + content.length + ' chars)');
}

mergeAppend(
  'es',
  [
    '_v2es4_p1.yaml',
    '_v2es4_p2.yaml',
    '_v2es4_p3.yaml',
    '_v2es4_p4.yaml',
    '_v2es4_p5.yaml',
    '_v2es4_p6.yaml',
    '_v2es4_p7.yaml',
  ],
  'content-v2.es.yaml'
);
mergeAppend(
  'it',
  [
    '_v2it4_p1.yaml',
    '_v2it4_p2.yaml',
    '_v2it4_p3.yaml',
    '_v2it4_p4.yaml',
    '_v2it4_p5.yaml',
    '_v2it4_p6.yaml',
    '_v2it4_p7.yaml',
  ],
  'content-v2.it.yaml'
);
console.log('MERGE APPEND DONE');
