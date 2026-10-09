import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'australian-paddle-club': {
    client: 'Asociación australiana de clubes de paddle surf',
    product: 'Flota de club — SUP + equipo de seguridad',
    industry: 'Ocio / Educación',
    challenge:
      'Una asociación de 15 clubes necesitaba estandarizar el equipo con SUP duraderos para principiantes, chalecos salvavidas certificados CE y un modelo de compras centralizado para reducir costes.',
    solution:
      'Estandarizamos una flota de club de 3 niveles (principiante, intermedio, instructor). Diseñamos gráficos de cubierta en los colores del club con sus logotipos. Implementamos almacenamiento centralizado con distribución trimestral por club.',
    result:
      '350 unidades en 15 clubes. Reducción de costes del 28% mediante compras consolidadas. Satisfacción del 92% de los socios con la calidad del equipo.',
    outcomeMetrics: [
      {
        label: 'Clubes equipados',
        value: '15',
      },
      {
        label: 'Unidades entregadas',
        value: '350',
      },
      {
        label: 'Reducción de costes',
        value: '28%',
      },
      {
        label: 'Satisfacción de socios',
        value: '92%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Distribuidor australiano',
    product: 'Gama SUP con certificación CE',
    industry: 'Náutica / Minorista',
    challenge:
      'Un distribuidor australiano requería una gama SUP con certificación CE, colores de cubierta personalizados, opción de PVC mejorado y cumplimiento de la norma australiana AS 1799.',
    solution:
      'Producimos muestras de preproducción con 4 variantes de color, buscamos PVC de grado militar y coordinamos ensayos de conformidad AS 1799 por parte de un tercero.',
    result:
      'Gama de 3 modelos SUP lanzada en el mercado de Australia y Nueva Zelanda. Seguida de un contrato con una cadena minorista de 12 tiendas.',
    outcomeMetrics: [
      {
        label: 'Modelos lanzados',
        value: '3',
      },
      {
        label: 'Tiendas minoristas',
        value: '12',
      },
      {
        label: 'Conformidad',
        value: 'AS 1799',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Cadena minorista canadiense de outdoor',
    product: 'Línea SUP de marca propia + accesorios',
    industry: 'Minorista',
    challenge:
      'Un minorista canadiense de 25 tiendas requería una gama SUP exclusiva de marca propia con embalaje bilingüe francés/inglés, especificaciones para clima frío y cumplimiento normativo canadiense.',
    solution:
      'Desarrollamos 4 modelos SUP con compuesto de PVC cold-flex clasificado hasta -15°C. Producimos embalaje minorista bilingüe con marcados reglamentarios canadienses. Proporcionamos expositores y materiales de formación para el personal.',
    result:
      'Línea exclusiva lanzada en 25 tiendas. 3,800 unidades vendidas en la primera temporada. El minorista renovó el acuerdo por 3 años con un número ampliado de SKU.',
    outcomeMetrics: [
      {
        label: 'Tiendas',
        value: '25',
      },
      {
        label: 'Unidades primera temporada',
        value: '3,800',
      },
      {
        label: 'Acuerdo',
        value: 'renovación de 3 años',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Grupo de resorts de lujo del Caribe',
    product: 'Flota de resort — SUP',
    industry: 'Hostelería / Turismo',
    challenge:
      'Un grupo de 5 resorts necesitaba una flota unificada de SUP de alquiler con branding coherente, materiales resistentes a los rayos UV del sol tropical y un plan de reemplazo a 5 años.',
    solution:
      'Diseñamos un paquete de flota SUP a medida de 3 modelos con PVC estabilizado frente a UV, gráficos de cubierta con la marca del resort y un calendario de entrega por fases. Proporcionamos formación al personal y un kit de repuestos dedicado por resort.',
    result:
      '180 unidades entregadas en 5 resorts. Pedido de repetición para 2 nuevas propiedades. Reducción del 40% en el coste por unidad frente a proveedores anteriores.',
    outcomeMetrics: [
      {
        label: 'Unidades entregadas',
        value: '180',
      },
      {
        label: 'Resorts',
        value: '5',
      },
      {
        label: 'Reducción de costes',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Coste anual de sustitución de tablas',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Tiempo de inactividad de la flota (días/año)',
        before: '45',
        after: '8',
      },
      {
        label: 'Puntuación de satisfacción de huéspedes',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Corporación tecnológica global',
    product: 'Bienestar corporativo — Flota SUP',
    industry: 'Corporativo / Bienestar',
    challenge:
      'Una empresa tecnológica Fortune 500 quería lanzar un programa de bienestar acuático en 4 campus junto al lago: 60 SUP con branding corporativo, soluciones de almacenaje y formación de instructores.',
    solution:
      'Suministramos una flota de SUP todoterreno estables con gráficos de cubierta con el logotipo corporativo. Diseñamos soportes de almacenamiento resistentes a la intemperie en las instalaciones. Certificamos a 12 instructores internos mediante el programa de formación de afarer.',
    result:
      'Programa lanzado en 4 campus. Más de 2,400 participaciones de empleados en el primer año. Valoración de satisfacción del 94% de los empleados. Incluido en el informe de sostenibilidad de la empresa.',
    outcomeMetrics: [
      {
        label: 'Campus',
        value: '4',
      },
      {
        label: 'Participaciones',
        value: '2,400+',
      },
      {
        label: 'Satisfacción',
        value: '94%',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Operador de cruceros del Caribe',
    product: 'Flota de actividades a bordo — SUP',
    industry: 'Hostelería / Cruceros',
    challenge:
      'Una gran línea de cruceros quería ofrecer SUP como excursión costera en 7 barcos: almacenaje compacto a bordo, ciclos rápidos de inflado/desinflado y consistencia de marca en toda la flota.',
    solution:
      'Desarrollamos un paquete SUP específico para cruceros con sistemas de válvulas de inflado rápido, almacenamiento en mochila compacta y gráficos de cubierta con la marca del buque. Proporcionamos formación al equipo de tierra y armarios de repuestos en 3 puertos insulares.',
    result:
      'Programa lanzado en 7 buques. Más de 15,000 participaciones de huéspedes en la primera temporada. Valoración media de excursiones de 4.6★. Ampliado a 3 buques adicionales en el año 2.',
    outcomeMetrics: [
      {
        label: 'Buques',
        value: '7',
      },
      {
        label: 'Participaciones de huéspedes',
        value: '15,000+',
      },
      {
        label: 'Valoración',
        value: '4.6★',
      },
      {
        label: 'Ampliación año 2',
        value: '+3 buques',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Marca europea DTC de deportes acuáticos',
    product: 'Línea SUP de marca + accesorios',
    industry: 'Comercio electrónico / Minorista',
    challenge:
      'Una marca DTC en rápido crecimiento necesitaba un pack SUP completo (tabla, bomba, remo, leash, bolsa) con embalaje premium para e-commerce, sin daños en envíos DHL/FedEx directos al cliente.',
    solution:
      'Desarrollamos una línea en co-branding con moldeado personalizado del núcleo EPS, tecnología propia de drop-stitch para mayor presión y cajas de cartón corrugado de doble pared listas para venta minorista con acolchado interior. Integramos la autenticación mediante código QR y el registro de garantía.',
    result:
      'Línea de 3 modelos SUP lanzada en 75 días. Más de 15,000 unidades en los primeros 12 meses. Valoración media de 4.8★ en más de 2,000 reseñas. Tasa de daño en tránsito del 0.3%.',
    outcomeMetrics: [
      {
        label: 'Modelos',
        value: '3',
      },
      {
        label: 'Unidades',
        value: '15,000+',
      },
      {
        label: 'Valoración media',
        value: '4.8★',
      },
      {
        label: 'Tasa de daño',
        value: '0.3%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Operador europeo de resort lacustre y alquiler',
    product: 'Flota de alquiler — SUP, chalecos, accesorios',
    industry: 'Alquiler / Turismo',
    challenge:
      'Un operador con 6 estaciones de alquiler necesitaba una flota SUP de alta durabilidad con sistemas de secado rápido, construcción resistente a daños y un calendario plurianual de reemplazo previsible.',
    solution:
      'Suministramos SUP de alquiler de grado comercial con bandas de riel reforzadas, cubiertas EVA de secado rápido y PVC estabilizado frente a UV. Desarrollamos un sistema codificado por colores de seguimiento de desgaste con informes anuales de estado.',
    result:
      '200 SUP desplegados en 6 estaciones. Coste de mantenimiento anual reducido un 55%. Vida útil del equipo ampliada de 2 a 4 años.',
    outcomeMetrics: [
      {
        label: 'Estaciones de alquiler',
        value: '6',
      },
      {
        label: 'SUP desplegados',
        value: '200',
      },
      {
        label: 'Coste de mantenimiento',
        value: '-55%',
      },
      {
        label: 'Vida útil',
        value: '4 años',
      },
    ],
    beforeAfter: [
      {
        label: 'Vida media de las tablas',
        before: '2 años',
        after: '4 años',
      },
      {
        label: 'Mantenimiento anual por tabla',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Ingresos de alquiler por tabla/temporada',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Compañía de chárter de pesca de Florida',
    product: 'Flota SUP de pesca a medida',
    industry: 'Pesca / Chárter',
    challenge:
      'Un operador de chárter de pesca de Florida quería añadir tours de pesca en SUP: plataformas estables con soportes para neveras, raíles para portacañas y compatibilidad con transductores de sonda.',
    solution:
      'Personalizamos la plataforma SUP estable existente con 4 portacañas integrados, sistema de montura de nevera extraíble y montura estanca para transductor en imbornal. Ofrecimos precios de flota y un programa de sustitución estacional.',
    result:
      'Tours de pesca en SUP lanzados como nueva fuente de ingresos. El 45% de los clientes de chárter existentes reservaron tours en SUP. Flota ampliada de 8 a 20 tablas en 2 temporadas.',
    outcomeMetrics: [
      {
        label: 'Flota inicial',
        value: '8',
      },
      {
        label: 'Flota año 2',
        value: '20',
      },
      {
        label: 'Venta cruzada de chárter',
        value: '45%',
      },
    ],
  },
  'humanitarian-aid-project': {
    client: 'Organización humanitaria internacional',
    product: 'Barcas neumáticas de rescate y ayuda',
    industry: 'ONG / Ayuda humanitaria',
    challenge:
      'Una organización humanitaria internacional necesitaba 50 barcas neumáticas resistentes para rescates en inundaciones en el Sudeste Asiático: ligeras para transporte en helicóptero y reparables en campo.',
    solution:
      'Fabricamos 50 barcas hinchables reforzadas con suelos de achique automático, redundancia de múltiples cámaras y perímetros de línea de agarre. Suministramos kits de reparación de campo con instrucciones pictóricas. Formamos a 20 técnicos locales.',
    result:
      '50 barcas desplegadas en 3 regiones propensas a inundaciones. Utilizadas en 12 operaciones de rescate importantes en los primeros 6 meses. 0 fallos de equipo registrados.',
    outcomeMetrics: [
      {
        label: 'Barcas desplegadas',
        value: '50',
      },
      {
        label: 'Operaciones de rescate',
        value: '12',
      },
      {
        label: 'Tasa de fallos',
        value: '0%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Marca japonesa de lifestyle',
    product: 'Línea SUP co-branding',
    industry: 'OEM / Marca',
    challenge:
      'Una marca japonesa premium de lifestyle buscaba entrar en el mercado de deportes acuáticos con una línea SUP co-branding: diseño minimalista, materiales ecológicos y fabricación de precisión.',
    solution:
      'Creamos moldes a medida con un perfil de riel más estilizado. Buscamos incrustaciones de cubierta de bambú certificado FSC y opciones de PVC reciclado. Desarrollamos una experiencia de desembalaje premium con guías de cuidado con código QR en japonés.',
    result:
      'Línea co-branding de 3 modelos presentada en el Tokyo Marine Show. 2,800 unidades vendidas por adelantado antes del lanzamiento público. Apareció en 5 publicaciones japonesas de estilo de vida.',
    outcomeMetrics: [
      {
        label: 'Modelos',
        value: '3',
      },
      {
        label: 'Unidades de preventa',
        value: '2,800',
      },
      {
        label: 'Apariciones en medios',
        value: '5',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Comunidad residencial junto al lago de EE. UU.',
    product: 'Servicio comunitario — Flota SUP',
    industry: 'Inmobiliaria / Comunidad',
    challenge:
      'Una comunidad residencial de lujo junto al lago quería ofrecer SUP como servicio para residentes: flota de bajo mantenimiento, almacenaje seguro en la orilla y sistema de préstamo autoservicio para 200+ hogares.',
    solution:
      'Suministramos 15 SUP de grado comercial con un sistema de taquillas resistentes a la intemperie. Diseñamos un préstamo autoservicio mediante código QR con integración de renuncias digitales. Proporcionamos servicio de mantenimiento estacional.',
    result:
      'El 85% de los hogares usó la zona de SUP en la primera temporada. El valor de las propiedades de la sección junto al lago subió un 7%. La comunidad ganó el premio «Best Lakeside Living».',
    outcomeMetrics: [
      {
        label: 'SUP',
        value: '15',
      },
      {
        label: 'Uso por hogares',
        value: '85%',
      },
      {
        label: 'Impacto en el valor inmobiliario',
        value: '+7%',
      },
      {
        label: 'Premio',
        value: 'Best Lakeside Living',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Cadena de resorts de playa del Mediterráneo',
    product: 'Flota de resort — SUP + accesorios',
    industry: 'Hostelería / Turismo',
    challenge:
      'Una cadena mediterránea de 3 resorts quería lanzar un programa unificado de actividades acuáticas con 120 SUP de branding personalizado, tarjetas de seguridad multilingües y rotación de mantenimiento.',
    solution:
      'Diseñamos un paquete de flota específico para resorts con PVC marino resistente a los UV, gráficos de cubierta con la marca del hotel en 3 combinaciones de color y un sistema de etiquetado codificado por colores para el mantenimiento. Incluye formación del personal y reposición trimestral de repuestos.',
    result:
      'Flota desplegada en 3 resorts. Los ingresos por actividades acuáticas aumentaron un 210% en la primera temporada. La puntuación de satisfacción de los huéspedes por servicios subió de 4.1 a 4.7/5.',
    outcomeMetrics: [
      {
        label: 'SUP entregados',
        value: '120',
      },
      {
        label: 'Resorts',
        value: '3',
      },
      {
        label: 'Aumento de ingresos',
        value: '210%',
      },
      {
        label: 'Puntuación de huéspedes',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Ingresos por actividades acuáticas (anuales)',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Tasa de sustitución de equipos',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Satisfacción de huéspedes (servicios)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Distribuidor de deportes acuáticos de Oriente Medio',
    product: 'Línea completa — SUP, barcas, accesorios',
    industry: 'Distribución / Náutica',
    challenge:
      'Un distribuidor del CCG deseaba derechos exclusivos de toda la línea Afarer en 6 países del Golfo, con embalaje en árabe, especificaciones de materiales resistentes al calor y garantía conforme a la sharia.',
    solution:
      'Establecimos un acuerdo de distribución en exclusiva. Desarrollamos embalaje y material de marketing en árabe. Validamos las especificaciones de los materiales a 50°C de temperatura ambiente. Adaptamos los términos de garantía a la conformidad regional.',
    result:
      '12 pedidos de contenedor en los primeros 18 meses. Red de 15 concesionarios y subdistribuidores establecida. Cuota de mercado estimada del 18% del segmento SUP inflable en el GCC.',
    outcomeMetrics: [
      {
        label: 'Contenedores',
        value: '12',
      },
      {
        label: 'Red de concesionarios',
        value: '15',
      },
      {
        label: 'Cuota de mercado',
        value: '18%',
      },
    ],
  },
  'retail-private-label': {
    client: 'Minorista europeo de outdoor',
    product: 'Línea SUP de marca propia',
    industry: 'Minorista',
    challenge:
      'Un minorista europeo de artículos outdoor necesitaba una línea SUP de marca propia con gráficos de cubierta únicos, PVC ecológico y embalaje listo para venta minorista, todo entregado en 60 días.',
    solution:
      'Desarrollamos archivos de impresión digital personalizados, buscamos PVC conforme al REACH y comprimimos el muestreo de 3 rondas a 1, ubicando al equipo de diseño en nuestra fábrica de Qingdao.',
    result:
      '55 días desde la orden de compra firmada hasta FOB. 2,400 unidades en 4 SKU. Pedido de repetición realizado antes de la llegada del primer contenedor.',
    outcomeMetrics: [
      {
        label: 'Plazo de entrega',
        value: '55 días',
      },
      {
        label: 'Unidades',
        value: '2,400',
      },
      {
        label: 'SKU',
        value: '4',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Agencia marítima del Sudeste Asiático',
    product: 'Flota SUP de patrulla y rescate',
    industry: 'Gobierno / Seguridad marítima',
    challenge:
      'Una agencia marítima gubernamental requería 20 SUP de patrulla y rescate con tela Hypalon resistente al fuego, soportes de comunicación integrados y cumplimiento del capítulo III de SOLAS.',
    solution:
      'Fabricamos 20 SUP con tubos de CSM Hypalon, anillos en D de alta resistencia y paquetes de luces de navegación preinstalados. El equipo de inspección de fábrica presenció las pruebas de mar. Se proporcionó el paquete completo de documentación SOLAS.',
    result:
      'Contrato entregado en 4 meses. Flota desplegada para patrulla fronteriza, búsqueda y rescate y respuesta ante desastres en 3 bases regionales.',
    outcomeMetrics: [
      {
        label: 'SUP de patrulla',
        value: '20',
      },
      {
        label: 'Entrega',
        value: '4 meses',
      },
      {
        label: 'Bases',
        value: '3',
      },
    ],
  },
  'startup-custom-sup-line': {
    client: 'Startup estadounidense de deportes acuáticos',
    product: 'Línea SUP personalizada',
    industry: 'Startup / Minorista',
    challenge:
      'Una startup estadounidense de deportes acuáticos necesitaba un SUP de alto rendimiento Drop-Stitch con diseño de cubierta personalizado, embalaje co-branding y certificación BSCI para venta minorista.',
    solution:
      'Adaptamos el molde SUP existente con un perfil de rocker modificado, desarrollamos el diseño del embalaje en co-branding y proporcionamos la documentación completa de auditoría BSCI.',
    result:
      'Listado con éxito en 3 grandes cadenas de outdoor de EE. UU. Más de 5,000 unidades en el primer año con una tasa de sell-through del 98%.',
    outcomeMetrics: [
      {
        label: 'Cadenas minoristas',
        value: '3',
      },
      {
        label: 'Unidades primer año',
        value: '5,000+',
      },
      {
        label: 'Sell-through',
        value: '98%',
      },
    ],
  },
  'university-club-program': {
    client: 'Unión deportiva universitaria británica',
    product: 'Flota de club estudiantil — SUP + seguridad',
    industry: 'Educación',
    challenge:
      'Una universidad británica con club acuático activo necesitaba reemplazar su flota envejecida por SUP inflables modernos: almacenaje compacto, uso para todos los niveles y estándares de competición BUCS.',
    solution:
      'Suministramos 25 SUP todoterreno con mochilas de almacenaje compactas, 10 SUP de travesía para entrenamiento de competición y un paquete completo de equipo de seguridad. Impartimos formación a los responsables del club y talleres de mantenimiento.',
    result:
      'Flota presentada en la Feria de Novatos. El número de socios del club creció un 140%. La universidad acogió la primera competición interuniversitaria de SUP en 5 años.',
    outcomeMetrics: [
      {
        label: 'SUP suministrados',
        value: '35',
      },
      {
        label: 'Crecimiento de socios',
        value: '140%',
      },
      {
        label: 'Competiciones organizadas',
        value: '1',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Marca estadounidense de equipo acuático',
    product: 'Molde a medida — SUP de travesía',
    industry: 'OEM / Fabricación',
    challenge:
      'Una marca estadounidense requería un molde SUP totalmente nuevo: forma de travesía de 14 pies, canales para sonda de pesca, plataforma reforzada y capacidad de carga de 400 lbs.',
    solution:
      'Ingeniamos un nuevo molde de drop-stitch de 14 pies con mayor densidad del núcleo, insertos de riel para accesorios empotrados y capa inferior de PVC de grado militar resistente a la abrasión. Produjimos 3 iteraciones de prototipo antes de la fabricación definitiva del molde.',
    result:
      'Nuevo molde fabricado en 14 semanas. 3,500 unidades producidas en la primera tirada. Producto nombrado «Best Fishing SUP 2025» por Outdoor Gear Lab.',
    outcomeMetrics: [
      {
        label: 'Tiempo de molde',
        value: '14 semanas',
      },
      {
        label: 'Primera tirada',
        value: '3,500 unidades',
      },
      {
        label: 'Premio',
        value: 'Best Fishing SUP 2025',
      },
    ],
  },
};
