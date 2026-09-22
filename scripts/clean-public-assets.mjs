import { existsSync, rmSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');

export function cleanBuildAssets() {
  // Check both dist/client/ (Worker mode) and dist/ (Pages mode)
  const candidates = [
    { dir: path.join(ROOT, 'dist', 'client'), label: 'dist/client/' },
    { dir: path.join(ROOT, 'dist'), label: 'dist/' },
  ];

  const removed = [];

  for (const { dir, label } of candidates) {
    if (!existsSync(dir)) continue;

    // images/ and files/ are served from the R2 CDN custom domain;
    // data/ holds build-time JSON copies (page-content.json is ~30MB) with no
    // runtime consumers — deploying them breaks the Cloudflare asset size limit.
    for (const sub of ['images', 'files', 'data']) {
      const subDir = path.join(dir, sub);
      if (existsSync(subDir)) {
        rmSync(subDir, { recursive: true, force: true });
        removed.push(label + sub + '/');
        console.log(`[clean] Removed ${label}${sub}/`);
      }
    }
  }

  if (removed.length === 0) {
    console.log('[clean] No assets to clean');
  }

  return removed;
}

cleanBuildAssets();
