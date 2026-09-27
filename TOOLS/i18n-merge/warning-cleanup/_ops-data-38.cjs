// shard 38: locale YAML dash/char damage (2 files, 3 ops)
// es/maritime-safety-defense: em dash attached-before (space eaten) — parenthetical pair
//   "químicos — incluyendo ... descontaminación— lo convierte" -> second dash spaced
// tr/solutions-resorts-hotels: stray 'C' injected into currency ranges (EN root: $50K–$200K+ / $50K–$80K)
module.exports = [
  {
    f: 'src/data/pages/es/maritime-safety-defense.yaml',
    find: 'agentes de descontaminación—',
    rep: 'agentes de descontaminación —',
  },
  {
    f: 'src/data/pages/tr/solutions-resorts-hotels.yaml',
    find: 'metric: $50K–C$200K+',
    rep: 'metric: $50K–$200K+',
  },
  {
    f: 'src/data/pages/tr/solutions-resorts-hotels.yaml',
    find: 'revenue: $50K–C$80K',
    rep: 'revenue: $50K–$80K',
  },
];
