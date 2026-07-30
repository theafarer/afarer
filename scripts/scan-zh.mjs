import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';
import OpenCC from 'opencc-js';

const conv = OpenCC.Converter({ from: 'cn', to: 'tw' });
const root = process.cwd();

const dirs = ['src/data/site', 'src/data/pages/zh', 'src/content', 'scripts', 'public/zh'];
let found = false;

for (const dir of dirs) {
  const abs = join(root, dir);
  if (!existsSync(abs)) continue;
  function walk(d) {
    const entries = readdirSync(d, { withFileTypes: true });
    for (const e of entries) {
      const fp = join(d, e.name);
      if (fp.includes('node_modules') || fp.includes('.git') || fp.includes('generated') || fp.includes('dist'))
        continue;
      if (e.isDirectory()) {
        walk(fp);
        continue;
      }
      if (!/\.(yaml|json|ts|js|mjs|txt|astro)$/i.test(e.name)) continue;
      try {
        const c = readFileSync(fp, 'utf8');
        if (!/[\u4e00-\u9fff]/.test(c)) continue;
        const lines = c.split('\n');
        for (let i = 0; i < lines.length; i++) {
          // match zh: followed by quoted string containing Chinese
          const m = lines[i].match(/zh:\s*['"]([^'"]*[\u4e00-\u9fff][^'"]*)['"]/);
          if (m) {
            const orig = m[1];
            const converted = conv(orig);
            if (converted !== orig) {
              const rel = fp
                .replace(root + '\\', '')
                .replace(root + '/', '')
                .replace(/\\/g, '/');
              console.log(rel + ':' + (i + 1) + ': ' + orig.substring(0, 80));
              console.log('  -> ' + converted.substring(0, 80));
              console.log();
              found = true;
            }
          }
        }
      } catch {
        /* skip */
      }
    }
  }
  walk(abs);
}
if (!found) console.log('No remaining Simplified Chinese found in zh: values!');
