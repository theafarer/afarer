#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'public');
const OUTPUT_DIR = path.join(ROOT, process.env.OPTIMIZED_ASSETS_DIR || 'optimized-assets');
const MANIFEST_PATH = path.join(OUTPUT_DIR, 'responsive-images.json');
const IMAGE_WIDTHS = [480, 768, 1200, 1920];
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

function relativeAssetPath(file) {
  return '/' + path.relative(SOURCE_DIR, file).replace(/\\/g, '/');
}

function outputPathFor(source, width) {
  const relative = path.relative(SOURCE_DIR, source);
  const parsed = path.parse(relative);
  return path.join(OUTPUT_DIR, parsed.dir, `${parsed.name}-${width}w.webp`);
}

async function optimizeImage(source, manifest) {
  const metadata = await sharp(source).metadata();
  if (!metadata.width) return 0;
  const widths = IMAGE_WIDTHS.filter((width) => width < metadata.width);
  if (widths.length === 0) widths.push(metadata.width);

  const variants = [];
  for (const width of widths) {
    const destination = outputPathFor(source, width);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    await sharp(source)
      .resize({ width, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(destination);
    variants.push({ width, path: '/' + path.relative(OUTPUT_DIR, destination).replace(/\\/g, '/') });
  }

  manifest[relativeAssetPath(source)] = { width: metadata.width, height: metadata.height, variants };
  return variants.length;
}

function compressPdf(source) {
  const relative = path.relative(SOURCE_DIR, source);
  const destination = path.join(OUTPUT_DIR, relative);
  fs.mkdirSync(path.dirname(destination), { recursive: true });

  return new Promise((resolve, reject) => {
    const child = spawn(
      'gs',
      [
        '-sDEVICE=pdfwrite',
        '-dCompatibilityLevel=1.4',
        '-dPDFSETTINGS=/ebook',
        '-dNOPAUSE',
        '-dBATCH',
        '-dSAFER',
        `-sOutputFile=${destination}`,
        source,
      ],
      { stdio: 'inherit' }
    );
    child.on('error', reject);
    child.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`gs exited with code ${code}`))));
  });
}

async function main() {
  fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const files = walk(SOURCE_DIR).filter((file) => !file.startsWith(`${OUTPUT_DIR}${path.sep}`));
  const images = files.filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()));
  const pdfs = files.filter((file) => path.extname(file).toLowerCase() === '.pdf');
  const manifest = {};

  let imageVariants = 0;
  for (const image of images) {
    try {
      imageVariants += await optimizeImage(image, manifest);
    } catch (error) {
      throw new Error(`Image failed (${path.relative(ROOT, image)}): ${error.message}`, { cause: error });
    }
  }
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');

  for (const pdf of pdfs) {
    try {
      await compressPdf(pdf);
    } catch (error) {
      throw new Error(`PDF failed (${path.relative(ROOT, pdf)}): ${error.message}`, { cause: error });
    }
  }

  console.log(
    `[optimize-assets] Generated ${imageVariants} responsive WebP variants and compressed ${pdfs.length} PDF(s) in ${path.relative(ROOT, OUTPUT_DIR)}/`
  );
}

main().catch((error) => {
  console.error(`[optimize-assets] ${error.message}`);
  process.exit(1);
});
