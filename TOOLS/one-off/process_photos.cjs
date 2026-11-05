// Process SUP usage-scenario photos -> compressed webp sources in
// public/images/afarer/scenarios/<series>/<name>.webp
// Rules: width min 1024 (mild upscale so -768w variant exists), max 1920 (cap repo weight).
// CI deploy (optimize-assets.mjs + fast-upload-r2.mjs) generates -480w/-768w/-1200w/-1920w
// variants and uploads them to R2 -> https://assets.afarer.com/images/afarer/scenarios/...
const sharp = require('E:/github/afarer/node_modules/sharp');
const fs = require('fs');
const path = require('path');

const SRC_ROOT = 'E:/github/afarer优化/图片';
const DEST_ROOT = 'E:/github/afarer/public/images/afarer/scenarios';

const JOBS = [
  ['ALL-AROUND Series', 'Sunlit Paddleboarding in Turquoise Waters.jpg', 'all-around', 'all-around-paddling-1'],
  ['ALL-AROUND Series', 'Sunny Beach Paddleboard Adventure.jpg', 'all-around', 'all-around-paddling-2'],
  ['ALL-AROUND Series', 'Sunny Tropical Paddleboard Beach Scene.jpg', 'all-around', 'all-around-paddling-3'],
  ['Inflatable Dock Platform', 'Inflatable Dock Platform-2.jpeg', 'dock-platform', 'inflatable-dock-platform-1'],
  ['Inflatable Dock Platform', 'Inflatable Pet RampPlatform-5.jpg', 'dock-platform', 'inflatable-dock-platform-2'],
  [
    'Lure Skiff SUP &Inflatable Fishing SUP',
    'Lure Skiff SUP Inflatable Fishing SUP.jpg',
    'fishing',
    'lure-skiff-fishing-sup-1',
  ],
  ['Multi-person  Giant SUP', 'Gaint Sup.jpg', 'giant', 'multi-person-giant-sup-1'],
  ['SURF Series', 'SURF Series.jpg', 'surf', 'surf-series-1'],
  ['TOURING Series', 'TOURING Series.jpg', 'touring', 'touring-series-1'],
  ['WHITEWATER Series', 'WHITEWATER Series.jpg', 'whitewater', 'whitewater-series-1'],
  ['YOGA Series', 'Yoga Application-13.jpg', 'yoga', 'yoga-series-1'],
  ['YOGA Series', 'Yoga Application-2.jpg', 'yoga', 'yoga-series-2'],
];

const MIN_W = 1024;
const MAX_W = 1920;

function maxVariant(width) {
  for (const c of [1920, 1200, 768, 480]) if (c < width) return c;
  return width;
}

(async () => {
  for (const [folder, file, slug, name] of JOBS) {
    const src = path.join(SRC_ROOT, folder, file);
    const destDir = path.join(DEST_ROOT, slug);
    const dest = path.join(destDir, name + '.webp');
    fs.mkdirSync(destDir, { recursive: true });

    const meta = await sharp(src).metadata();
    let pipeline = sharp(src);
    let note = 'native';
    if (meta.width < MIN_W) {
      pipeline = pipeline.resize({ width: MIN_W, fit: 'inside' });
      note = `upscaled ${meta.width}->${MIN_W}`;
    } else if (meta.width > MAX_W) {
      pipeline = pipeline.resize({ width: MAX_W, fit: 'inside', withoutEnlargement: true });
      note = `capped ${meta.width}->${MAX_W}`;
    }
    await pipeline.webp({ quality: 85, effort: 5 }).toFile(dest);

    const outMeta = await sharp(dest).metadata();
    const kb = Math.round(fs.statSync(dest).size / 1024);
    const variant = maxVariant(outMeta.width);
    console.log(`${slug}/${name}.webp | ${outMeta.width}x${outMeta.height} | ${kb}KB | ${note} | ref: -${variant}w`);
  }
})();
