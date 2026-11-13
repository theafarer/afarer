// Fix reachable root pages: src/pages/index.astro (served at /) + src/pages/404.astro.
// - href="/x" -> href="/x/"  (insert / before ? or # if present, skip files/external/anchors)
const fs = require('fs');

const FILES = ['E:/github/afarer/src/pages/index.astro', 'E:/github/afarer/src/pages/404.astro'];
const isFile = (h) => /\/[^/]*\.[a-z0-9]{1,6}(?:[?#]|$)/i.test(h);

for (const fp of FILES) {
  let src = fs.readFileSync(fp, 'utf8');
  let n = 0;
  src = src.replace(/href="(\/[^"]*)"/g, (full, h) => {
    if (isFile(h)) return full;
    const qi = h.indexOf('?'),
      hi = h.indexOf('#');
    if (qi === 0 || hi === 0) return full; // href="?.." or "#.."
    if (qi > 0) {
      if (h[qi - 1] !== '/') {
        n++;
        return `href="${h.slice(0, qi)}/${h.slice(qi)}"`;
      }
      return full;
    }
    if (hi > 0) {
      if (h[hi - 1] !== '/') {
        n++;
        return `href="${h.slice(0, hi)}/${h.slice(hi)}"`;
      }
      return full;
    }
    if (!h.endsWith('/')) {
      n++;
      return `href="${h}/"`;
    }
    return full;
  });
  fs.writeFileSync(fp, src);
  console.log(fp, '->', n, 'hrefs slashed');
}
