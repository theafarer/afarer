import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';
import yaml from 'js-yaml';
import OpenCC from 'opencc-js';

const converter = OpenCC.Converter({ from: 'cn', to: 'tw' });

let totalStrings = 0;

function convertText(text) {
  if (typeof text !== 'string') return text;
  const converted = converter(text);
  if (converted !== text) totalStrings++;
  return converted;
}

function walkAndConvert(obj) {
  if (typeof obj === 'string') {
    if (/[\u4e00-\u9fff]/.test(obj)) return convertText(obj);
    return obj;
  }
  if (Array.isArray(obj)) return obj.map((item) => walkAndConvert(item));
  if (obj !== null && typeof obj === 'object') {
    const result = {};
    for (const [key, value] of Object.entries(obj)) result[key] = walkAndConvert(value);
    return result;
  }
  return obj;
}

// Helper: convert Chinese text in TS/JS files (targeted: only zh: string values)
function convertChineseInTsFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  const original = content;

  // Match Chinese strings in zh: '...' patterns
  content = content.replace(/(zh:\s*')([^']*[\u4e00-\u9fff][^']*)(')/g, (match, prefix, str, suffix) => {
    const converted = convertText(str);
    return converted !== str ? prefix + converted + suffix : match;
  });

  if (content !== original) {
    writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

// 1. Convert YAML files
console.log('Converting YAML page files...');
const yamlFiles = globSync('src/data/pages/zh/*.yaml');
let yamlChanged = 0;
for (const file of yamlFiles) {
  const original = readFileSync(file, 'utf-8');
  const data = yaml.load(original);
  if (data) {
    const converted = walkAndConvert(data);
    const output = yaml.dump(converted, {
      indent: 2,
      lineWidth: -1,
      quotingType: "'",
      forceQuotes: false,
      noRefs: true,
      sortKeys: false,
    });
    const finalOutput = output.replace(/\n$/, '');
    if (finalOutput !== original.replace(/\n$/, '')) {
      writeFileSync(file, finalOutput + '\n', 'utf-8');
      yamlChanged++;
    }
  }
}
console.log(`  ${yamlChanged}/${yamlFiles.length} files modified`);

// 2. Convert contact-form-text.yaml (parse yaml, convert zh values, dump)
console.log('Converting contact-form-text.yaml...');
const contactFile = 'src/data/site/contact-form-text.yaml';
const contactOriginal = readFileSync(contactFile, 'utf-8');
const contactData = yaml.load(contactOriginal);
if (contactData) {
  const converted = walkAndConvert(contactData);
  const output = yaml.dump(converted, {
    indent: 2,
    lineWidth: -1,
    quotingType: "'",
    forceQuotes: false,
    noRefs: true,
    sortKeys: false,
  });
  const finalOutput = output.replace(/\n$/, '');
  if (finalOutput !== contactOriginal.replace(/\n$/, '')) {
    writeFileSync(contactFile, finalOutput + '\n', 'utf-8');
    console.log('  modified');
  } else {
    console.log('  no change');
  }
}

// 2a. Convert countries.yaml
console.log('Converting countries.yaml...');
const countriesFile = 'src/data/site/countries.yaml';
const countriesOriginal = readFileSync(countriesFile, 'utf-8');
const countriesData = yaml.load(countriesOriginal);
if (countriesData) {
  const converted = walkAndConvert(countriesData);
  const output = yaml.dump(converted, {
    indent: 2,
    lineWidth: -1,
    quotingType: "'",
    forceQuotes: false,
    noRefs: true,
    sortKeys: false,
  });
  const finalOutput = output.replace(/\n$/, '');
  if (finalOutput !== countriesOriginal.replace(/\n$/, '')) {
    writeFileSync(countriesFile, finalOutput + '\n', 'utf-8');
    console.log('  modified');
  } else {
    console.log('  no change');
  }
}

// 3. Convert i18n-config.json
console.log('Converting i18n-config.json...');
const configFile = 'src/data/site/i18n-config.json';
let configContent = readFileSync(configFile, 'utf-8');
const hasBom = configContent.charCodeAt(0) === 0xfeff;
const cleanContent = hasBom ? configContent.slice(1) : configContent;
const configData = JSON.parse(cleanContent);
if (configData.zh) {
  const convertedZh = walkAndConvert(configData.zh);
  configData.zh = convertedZh;
  const newJson = JSON.stringify(configData, null, 2);
  const finalOutput = hasBom ? '\uFEFF' + newJson : newJson;
  if (finalOutput !== configContent) {
    writeFileSync(configFile, finalOutput, 'utf-8');
    console.log('  modified');
  } else {
    console.log('  no change');
  }
}

// 4. Convert build-geo-v4.ts
console.log('Converting build-geo-v4.ts...');
if (convertChineseInTsFile('scripts/build-geo-v4.ts')) {
  console.log('  modified');
} else {
  console.log('  no change');
}

// 5. Convert nodes.ts
console.log('Converting nodes.ts...');
if (convertChineseInTsFile('src/content/graph/nodes.ts')) {
  console.log('  modified');
} else {
  console.log('  no change');
}

// 6. Convert config.zh.yaml
console.log('Converting config.zh.yaml...');
const configZhFile = 'src/config.zh.yaml';
const configZhOriginal = readFileSync(configZhFile, 'utf-8');
const configZhData = yaml.load(configZhOriginal);
if (configZhData) {
  const converted = walkAndConvert(configZhData);
  const output = yaml.dump(converted, {
    indent: 2,
    lineWidth: -1,
    quotingType: "'",
    forceQuotes: false,
    noRefs: true,
    sortKeys: false,
  });
  const finalOutput = output.replace(/\n$/, '');
  if (finalOutput !== configZhOriginal.replace(/\n$/, '')) {
    writeFileSync(configZhFile, finalOutput + '\n', 'utf-8');
    console.log('  modified');
  } else {
    console.log('  no change');
  }
}

// 7. Convert llms.txt
console.log('Converting llms.txt...');
try {
  const llmContent = readFileSync('public/zh/llms.txt', 'utf-8');
  if (/[\u4e00-\u9fff]/.test(llmContent)) {
    const converted = convertText(llmContent);
    if (converted !== llmContent) {
      writeFileSync('public/zh/llms.txt', converted, 'utf-8');
      console.log('  modified');
    } else {
      console.log('  no change');
    }
  }
} catch (e) {
  console.log(`  error: ${e.message}`);
}

console.log(`\nDone! Converted ${totalStrings} string values.`);
