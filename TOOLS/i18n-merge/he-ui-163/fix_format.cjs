// Rewrite i18n-config.json with 2-space indent + CRLF to match repo formatting
const fs = require('fs');
const p = 'E:\\github\\afarer\\src\\data\\site\\i18n-config.json';
const cfg = JSON.parse(fs.readFileSync(p, 'utf8'));
const json = JSON.stringify(cfg, null, 2).replace(/\n/g, '\r\n');
fs.writeFileSync(p, json, 'utf8');
console.log('Rewrote with 2-space indent + CRLF, he keys = ' + Object.keys(cfg.he).length);
