/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AstroIntegration } from 'astro';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export default function imageOptimizer(): AstroIntegration {
  let outDir: string;

  return {
    name: 'image-optimizer',
    hooks: {
      'astro:config:done': ({ config }) => {
        const raw = config.outDir?.pathname || '/dist/';
        const platformPath = raw.startsWith('/') && process.platform === 'win32' ? raw.slice(1) : raw;
        outDir = path.resolve(platformPath, 'client');
      },
      'astro:build:done': async () => {
        // outDir is already dist/client/ (resolved during config:done)
        const imagesDir = path.join(outDir, 'images', 'afarer');
        if (!fs.existsSync(imagesDir)) {
          console.log(`[image-optimizer] No images directory found (${imagesDir})`);
          return;
        }

        const rootDir = path.resolve(process.cwd());
        const scriptPath = path.join(rootDir, 'scripts', 'optimize-assets.mjs');
        try {
          const output = execSync(`node "${scriptPath}"`, { encoding: 'utf-8', timeout: 60000 });
          console.log(output.trim());
        } catch (err: any) {
          console.error(`[image-optimizer] Failed: ${err.message}`);
          if (err.stdout) console.log(err.stdout);
          if (err.stderr) console.error(err.stderr);
        }
      },
    },
  };
}
