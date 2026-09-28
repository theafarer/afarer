// shard 45 data: es UI dict EN residue (38 keys = 27 exact ===en + 10 stale-EN/embedded-EN + 1 typo)
// Translations follow in-block es precedents:
//   palistas (singleVsMulti/home.community), "Tiempo de Montaje" (singleVsMulti.r6),
//   "tamaño empacado" (singleVsMulti.aiBlock), "Visión General" (commercialWorkboats.rel4),
//   "Contáctanos" (solutionsByIndustry.contactBtn), "Lanchas de Trabajo" (scenario6/rel2),
//   "Soporte de Buceo" (scenario6/answer6/aiBlock), ¿...? question style, " — " spaced em dash.
// Price keys follow sister postfix form "200-500 $" (fr/de/el; en is prefix "$200-$500").
// Gender: pvcVsHypalon r4a/r5a feminine (Resistencia..., r3a "Buena" / r10b "Moderada" precedents);
//   r9b "Pegada = buena" (costura fem, pt "Colada = boa"); ivh r10a "Buena" (r10b es precedent).
module.exports = {
  // --- exact ===en residue (27) ---
  'useCase.fishing': 'Pesca',
  'compare.pvcVsHypalon.r4a': 'Buena',
  'compare.pvcVsHypalon.r5a': 'Moderada',
  'compare.pvcVsHypalon.r5b': 'Excelente',
  'compare.pvcVsHypalon.r7a': '8-12 años',
  'compare.pvcVsHypalon.r7b': '15-20+ años',
  'compare.pvcVsHypalon.r9b': 'Pegada = buena',
  'compare.inflatableVsHard.hardShort': 'SUP Rígido',
  'compare.inflatableVsHard.r1': 'Peso',
  'compare.inflatableVsHard.r2': 'Tamaño Empacado',
  'compare.inflatableVsHard.r3': 'Tiempo de Montaje',
  'compare.inflatableVsHard.r4': 'Durabilidad',
  'compare.inflatableVsHard.r5b': 'Excelente',
  'compare.inflatableVsHard.r6b': 'Excelente',
  'compare.inflatableVsHard.r7': 'Rigidez',
  'compare.inflatableVsHard.r8a': '200-500 $',
  'compare.inflatableVsHard.r8b': '400-800 $',
  'compare.inflatableVsHard.r9': 'Mantenimiento',
  'compare.inflatableVsHard.r10': 'Valor de Reventa',
  'compare.inflatableVsHard.r10a': 'Buena',
  'compare.inflatableVsHard.verdict': 'El Veredicto',
  'commercialWorkboats.a1': 'Soporte de Buceo',
  'solutionsByUseCase.ctaBtn': 'Contáctanos',
  'solutionsByUseCase.relatedTitle': 'Explorar más',
  'solutionsByUseCase.rel1label': 'Visión General',
  'solutionsByUseCase.rel2label': 'Lanchas de Trabajo',
  'solutionsByUseCase.rel4label': 'Filosofía',
  // --- stale-EN / embedded-EN / contamination (11) ---
  'home.useCases.browse': 'Ver todos los casos de uso →',
  'useCase.view': 'Ver caso de uso →',
  'useCase.hubDesc':
    'Desde palistas principiantes hasta operadores profesionales — afarer equipa cada aventura acuática.',
  'home.evidence.read': 'Ver estudio de caso →',
  'home.evidence.browse': 'Ver todas las evidencias →',
  'oem.why': '¿Por qué asociarse con afarer para OEM/ODM?',
  'compare.pvcVsHypalon.recDesc':
    'Elige PVC si eres un navegante recreativo con presupuesto limitado, necesitas un bote ligero portátil o usas tu bote estacionalmente en climas moderados. Elige Hypalon si dejas tu bote inflado permanentemente al sol tropical, operas una flota comercial o planeas conservar el bote por 15+ años.',
  'compare.inflatableVsHard.hardBestDesc':
    'Carreras, surf de rendimiento, palistas avanzados, palistas con espacio de almacenamiento.',
  'compare.inflatableVsHard.verdictDesc':
    'Para el 90% de los palistas, un SUP inflable es la mejor opción. La tecnología moderna de drop-stitch ha reducido enormemente la brecha de rendimiento, mientras ofrece una portabilidad y durabilidad inigualables. Elige una tabla rígida solo si eres un corredor dedicado, surfista de rendimiento o tienes almacenamiento y transporte garantizados. La mayoría de los palistas empiezan con un iSUP y nunca miran atrás.',
  'compare.inflatableVsHard.aiBlock':
    'Comparación definitiva entre tablas de surf inflables (iSUPs) y tablas rígidas de epoxy/fibra de vidrio. Cubre peso, tamaño empacado, tiempo de montaje, durabilidad, rendimiento de deslizamiento, rendimiento en surf, rigidez, precio, mantenimiento y valor de reventa. Los SUPs inflables ofrecen portabilidad, durabilidad, conveniencia de almacenamiento y relación calidad-precio superiores. Los SUPs rígidos ofrecen deslizamiento y rendimiento en surf superiores para palistas avanzados. Recomendación: el 90% de los palistas debería elegir un SUP inflable a menos que sean corredores dedicados o surfistas de rendimiento.',
  // --- typo bonus (1) ---
  'compare.pvcVsHypalon.r3b': 'Excelente (inherente)',
};
