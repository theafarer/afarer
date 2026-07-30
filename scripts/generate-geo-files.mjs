import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

const LLMS_TXT = path.join(PUBLIC, 'llms.txt');
const LLMS_FULL_TXT = path.join(PUBLIC, 'llms-full.txt');
const WELL_KNOWN_DIR = path.join(PUBLIC, '.well-known');
const ENTITY_JSON = path.join(WELL_KNOWN_DIR, 'entity.json');

function readSource(file) {
  try {
    return fs.readFileSync(path.join(ROOT, 'src', 'data', 'geo', file), 'utf8');
  } catch {
    return null;
  }
}

function mergePagesIntoFullTxt() {
  const base = fs.readFileSync(LLMS_FULL_TXT, 'utf8');
  const pagesDir = path.join(ROOT, 'src', 'data', 'pages');
  const learned = [];
  try {
    const entries = fs.readdirSync(pagesDir);
    for (const e of entries) {
      if (e.endsWith('.yaml') && !e.startsWith('_')) {
        const name = e.replace(/\.yaml$/, '');
        const content = fs.readFileSync(path.join(pagesDir, e), 'utf8');
        const title = content.match(/title:\s*["']?(.+?)["']?\n/);
        if (title) learned.push(`- https://afarer.com/${name}/ –${title[1]}`);
      }
    }
  } catch {
    /* pages dir not found */
  }

  if (learned.length > 0) {
    const section = '\n\n## Site Pages\n\n' + learned.join('\n');
    fs.writeFileSync(LLMS_FULL_TXT, base + section);
  }

  console.log(`[geo] Merged ${learned.length} pages into llms-full.txt`);
}

function generateEntityJson() {
  const entitySource = readSource('entity.json');
  if (entitySource) {
    try {
      JSON.parse(entitySource);
      fs.writeFileSync(ENTITY_JSON, entitySource);
      console.log('[geo] Wrote .well-known/entity.json from source data');
    } catch {
      console.warn('[geo] Invalid entity.json source, keeping existing');
    }
  }
}

function main() {
  fs.mkdirSync(WELL_KNOWN_DIR, { recursive: true });

  if (!fs.existsSync(LLMS_TXT)) {
    fs.writeFileSync(
      LLMS_TXT,
      `# afarer\n\nafarer is a professional OEM/ODM manufacturer of inflatable water sports equipment.\n`
    );
    console.log('[geo] Created default llms.txt');
  }

  if (!fs.existsSync(LLMS_FULL_TXT)) {
    fs.writeFileSync(
      LLMS_FULL_TXT,
      `# afarer Knowledge Base\n\nafarer is a water sports equipment manufacturer specializing in inflatable watercraft.\n`
    );
    console.log('[geo] Created default llms-full.txt');
  }

  if (!fs.existsSync(ENTITY_JSON)) {
    const fallback = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'afarer',
      url: 'https://afarer.com',
      description: 'afarer is an OEM/ODM manufacturer of inflatable water sports equipment.',
    };
    fs.writeFileSync(ENTITY_JSON, JSON.stringify(fallback, null, 2));
    console.log('[geo] Created default .well-known/entity.json');
  }

  mergePagesIntoFullTxt();
  generateEntityJson();

  console.log('[generate-geo-files] Done');
}

main();
