// Shard 22 — 阿拉伯品牌拼写统一 (2026-09): أكوافارير (aquafarer 旧转写) → أفارير (afarer 正确转写)
// 依据: academy/brand-*/cases/distributor-program 等近期验证文件均用 أفارير
module.exports = [
  { f: 'src/data/pages/ar/commercial-workboats.yaml', find: 'أكوافارير', rep: 'أفارير', n: 9 },
  { f: 'src/data/pages/ar/community.yaml', find: 'أكوافارير', rep: 'أفارير', n: 6 },
  { f: 'src/data/pages/ar/disaster-relief.yaml', find: 'أكوافارير', rep: 'أفارير', n: 13 },
  { f: 'src/data/pages/ar/knowledge.yaml', find: 'أكوافارير', rep: 'أفارير', n: 2 },
  { f: 'src/data/pages/ar/maritime-safety-defense.yaml', find: 'أكوافارير', rep: 'أفارير', n: 8 },
  { f: 'src/data/pages/ar/search-and-rescue.yaml', find: 'أكوافارير', rep: 'أفارير', n: 7 },
  { f: 'src/data/pages/ar/tourism-recreation.yaml', find: 'أكوافارير', rep: 'أفارير', n: 17 },
  { f: 'src/data/pages/ar/trust.yaml', find: 'أكوافارير', rep: 'أفارير', n: 11 },
];
