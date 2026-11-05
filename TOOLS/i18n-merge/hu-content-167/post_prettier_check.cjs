const fs = require('fs');
const path = require('path');
const yaml = require(path.join('E:\\github\\afarer', 'node_modules', 'js-yaml'));
const p = 'E:\\github\\afarer\\src\\data\\site\\content-v2.hu.yaml';
const doc = yaml.load(fs.readFileSync(p, 'utf8'));
console.log('articles:', doc.length);
const ok = doc.length === 71 && doc.every((a) => a.slug && a.title && a.faq && a.faq.every((f) => f.q && f.a));
console.log(ok ? 'POST-PRETTIER OK' : 'POST-PRETTIER FAIL');
