// Shard 25 — ar 品牌变体 أكوافارر (漏 ي) → أفارير (承接分片 22 品牌统一决策, em dash 扫描时发现)
// config.ar.yaml 7 / ar/factory-process.yaml 2 / ar/factory.yaml 2 / site/i18n-config.json 10
module.exports = [
  { f: 'src/config.ar.yaml', find: 'أكوافارر', rep: 'أفارير', n: 7 },
  { f: 'src/data/pages/ar/factory-process.yaml', find: 'أكوافارر', rep: 'أفارير', n: 2 },
  { f: 'src/data/pages/ar/factory.yaml', find: 'أكوافارر', rep: 'أفارير', n: 2 },
  { f: 'src/data/site/i18n-config.json', find: 'أكوافارر', rep: 'أفارير', n: 10 },
];
