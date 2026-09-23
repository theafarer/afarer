export type SolutionOverride = {
  clientType?: string;
  brandName?: string;
  meta?: { title: string; description: string };
  hero?: {
    tagline?: string;
    title?: string;
    subtitle?: string;
    image?: { src?: string; alt?: string };
  };
  challenge?: {
    title?: string;
    problems?: { title: string; description: string }[];
  };
  solutions?: {
    title?: string;
    items?: { title: string; description: string; features?: string[] }[];
  };
  caseStudy?: {
    title?: string;
    customer?: { location?: string; background?: string; goal?: string };
    steps?: { title: string; detail: string }[];
    results?: string[];
    moreCaseStudies?: {
      title: string;
      customer: { location?: string; background?: string; goal?: string };
      steps: { title: string; detail: string }[];
      results: string[];
    }[];
  };
  whyAfarer?: {
    title?: string;
    items?: { title: string; description: string }[];
  };
  faqs?: { question: string; answer: string }[];
  cta?: {
    title?: string;
    subtitle?: string;
    primaryAction?: { text: string };
    secondaryAction?: { text: string };
  };
};

const overrides: Record<string, SolutionOverride> = {
  'corporate-sup-event-package': {
    clientType: 'Comprador de Proyectos Corporativos Personalizados',

    meta: {
      title: 'Tablas SUP Personalizadas para Eventos Corporativos | Soluciones OEM para Eventos | {SITE}',
      description:
        'Afarer crea tablas SUP personalizadas para eventos corporativos, actividades de team building y campañas de marketing. Personalización completa del logo, igualación de colores corporativos, prototipado rápido y producción OEM en volumen.',
    },

    hero: {
      tagline: 'Paquete SUP para Eventos Corporativos™',
      title: 'Soluciones SUP Personalizadas para Eventos Corporativos, Team Building y Campañas de Marketing de Marca',
      subtitle: 'Convierte el Equipo de Deportes Acuáticos en una Experiencia de Marca Poderosa',
      image: { alt: 'Tablas SUP Personalizadas para Eventos Corporativos' },
    },

    challenge: {
      title: 'Los proyectos corporativos tienen requisitos diferentes a las compras normales',
      problems: [
        {
          title: 'La identidad de marca debe estar perfectamente representada',
          description:
            'Los clientes corporativos se preocupan por cada detalle visual, incluidos los colores corporativos exactos, la reproducción precisa del logo y una apariencia de marca consistente. Una pequeña diferencia de color puede afectar la imagen de marca, la calidad del marketing y la presentación del evento.',
        },
        {
          title: 'La visibilidad del logo grande es crítica',
          description:
            'A diferencia de los productos de consumo normales, el equipo para eventos debe atraer la atención. Las empresas necesitan logos de gran tamaño, gráficos de alta visibilidad y apariencia profesional, ya que las tablas SUP se convierten en plataformas publicitarias flotantes.',
        },
        {
          title: 'Los cronogramas de los eventos son extremadamente ajustados',
          description:
            'Los eventos corporativos suelen ser proyectos de fecha fija con plazos de aprobación de producto, cronogramas de eventos y campañas de marketing. Una entrega tardía puede causar la interrupción del evento, el fracaso del marketing y pérdidas financieras.',
        },
        {
          title: 'Los proyectos puntuales también requieren calidad profesional',
          description:
            'Aunque muchos proyectos son puntuales, las empresas esperan una apariencia premium, un rendimiento confiable y una presentación profesional. Los productos promocionales de baja calidad pueden dañar la percepción de la marca.',
        },
      ],
    },

    solutions: {
      title: 'Soluciones Completas de Deportes Acuáticos Personalizados para Eventos de Marca',
      items: [
        {
          title: 'Personalización Completa con la Marca Corporativa',
          description:
            'Afarer admite la impresión de logos de gran superficie, el branding de la superficie de la tabla, la personalización de remos y el branding de accesorios con igualación de colores corporativos mediante referencias Pantone y requisitos de identidad visual.',
          features: [
            'Aplicación del Logo Corporativo',
            'Igualación de Colores Corporativos',
            'Diseño Gráfico Personalizado',
          ],
        },
        {
          title: 'Desarrollo de Productos SUP Específicos para Eventos',
          description:
            'Diferentes eventos requieren diferentes soluciones. Afarer ofrece paquetes de team building para grupos grandes de empleados, paquetes de activación de marca para campañas de marketing y paquetes de experiencia VIP para eventos de clientes premium.',
          features: ['Paquete de Team Building', 'Paquete de Activación de Marca', 'Paquete de Experiencia VIP'],
        },
        {
          title: 'Proceso Rápido de Prototipado y Aprobación',
          description:
            'Afarer admite la confirmación rápida del diseño con revisión de arte y ajuste de gráficos, el desarrollo de prototipos para confirmar color y ubicación del logo, y la programación de producción alineada con los plazos del evento.',
          features: ['Confirmación Rápida de Diseño', 'Desarrollo de Prototipos', 'Programación de Producción'],
        },
        {
          title: 'Capacidad de Producción Personalizada en Volumen',
          description:
            'Afarer admite pedidos corporativos desde pequeños eventos de 50-100 unidades para actividades internas, proyectos de marketing medianos de 100-500 unidades para activaciones de marca, hasta grandes campañas corporativas de 500-1000+ unidades para eventos nacionales.',
          features: [
            'Eventos Corporativos Pequeños (50-100 uds)',
            'Proyectos de Marketing Medianos (100-500 uds)',
            'Grandes Campañas Corporativas (500-1000+ uds)',
          ],
        },
        {
          title: 'Paquetes Completos de Equipo para Eventos',
          description:
            'Afarer proporciona soluciones completas para eventos que incluyen tablas SUP personalizadas, remos ajustables, bombas, leash, bolsas de transporte, kits de reparación y, opcionalmente, remos personalizados, accesorios para eventos y materiales de exhibición.',
          features: ['El Paquete Estándar Incluye', 'Personalización Opcional', 'Equipo para el Personal'],
        },
        {
          title: 'Soporte para Campañas de Marketing',
          description:
            'El equipo SUP favorece la exposición en redes sociales mediante diseños llamativos, el contenido generado por usuarios a través de fotos del evento y el compartir de los participantes, y activos de marca a largo plazo para futuros eventos de empleados y clientes.',
          features: [
            'Exposición en Redes Sociales',
            'Contenido Generado por Usuarios',
            'Activos de Marca a Largo Plazo',
          ],
        },
        {
          title: 'Control de Calidad para Proyectos de Marca',
          description:
            'Afarer proporciona inspección de calidad de producción para materiales e impresión, control de precisión del branding para la posición del logo y la consistencia del color, e inspección de entrega para cantidad, empaque y accesorios.',
          features: [
            'Inspección de Calidad de Producción',
            'Control de Precisión del Branding',
            'Inspección de Entrega',
          ],
        },
        {
          title: 'Soporte de Entrega para Eventos Globales',
          description:
            'Para empresas multinacionales, Afarer admite proyectos multinacionales, eventos regionales y campañas globales con producción, empaque y preparación de envíos coordinados entre ubicaciones.',
          features: ['Proyectos Multinacionales', 'Eventos Regionales', 'Campañas Globales'],
        },
      ],
    },

    caseStudy: {
      title: 'Cómo una Marca Global de Bebidas Creó una Campaña de Marketing de Playa con Equipo SUP Personalizado',
      customer: {
        location: 'Internacional',
        background:
          'Marca internacional de bebidas que ejecutaba una campaña de marketing lifestyle de verano centrada en activaciones de playa y participación de consumidores.',
        goal: 'Crear una experiencia memorable de activación en playa con un fuerte impacto visual de marca.',
      },
      steps: [
        {
          title: 'Integración del Diseño de Marca',
          detail:
            'Afarer desarrolló gráficos personalizados de tabla con igualación exacta del color de marca y ubicación de logo de gran tamaño para maximizar el impacto visual en el agua.',
        },
        {
          title: 'Aprobación del Prototipo',
          detail:
            'Confirmación del diseño con muestras visuales y aprobación de producción para garantizar que cada detalle cumpliera los estándares exigentes de la marca antes de la producción en serie.',
        },
        {
          title: 'Producción en Serie',
          detail:
            'Producción de una flota de SUP personalizados para eventos que incluye tablas, remos y accesorios con calidad consistente en todo el pedido.',
        },
        {
          title: 'Entrega de la Campaña',
          detail:
            'Los productos se entregaron a tiempo para eventos de playa, actividades de interacción con clientes y promoción de marca en múltiples ubicaciones.',
        },
      ],
      results: [
        'Fuerte presencia visual en eventos de activación de playa',
        'Alta participación de los asistentes e interacción con la marca',
        'Mayor exposición en redes sociales gracias a contenido compartible',
        'Presentación profesional de la marca que refuerza el posicionamiento premium',
      ],

      moreCaseStudies: [
        {
          title: 'BMW Group Driving Experience — Flota SUP Personalizada para 18 Eventos Europeos',
          customer: {
            location: 'Múnich, Alemania',
            background:
              'El equipo Global Brand Experience de BMW Group, liderado por el director Klaus Weber, gestiona programas de participación de clientes de alta gama, incluida la BMW Driving Experience y eventos de activación de marca en toda Europa. Querían crear una experiencia de marca acuática que complementara su mensaje «Sheer Driving Pleasure» para el lanzamiento de los modelos totalmente eléctricos BMW i5 e i7. El equipo de Klaus tenía un presupuesto de 850.000 € para una gira europea en verano de 2025 dirigida a 6.000 clientes VIP, y necesitaba tablas SUP premium totalmente personalizadas capaces de soportar más de 40 días de eventos en sedes costeras y lacustres con mantenimiento mínimo.',
            goal: 'Desplegar 120 tablas de paddle totalmente personalizadas con la marca BMW i en 18 eventos VIP europeos de mayo a septiembre de 2025, entregar más de 6.000 experiencias a invitados y lograr puntuaciones de satisfacción superiores al 90% sin incidentes de seguridad.',
          },
          steps: [
            {
              title: 'Concepto del Programa e Ingeniería de Producto Personalizado',
              detail:
                'En noviembre de 2024, el equipo de Klaus se reunió con la división de Eventos Corporativos de Afarer en el salón náutico boot Düsseldorf para revisar el concepto. Afarer propuso una tabla de touring personalizada de 11\'6" en los colores de la serie i de BMW (Blue Ridge Mountain Metallic, Frozen Pure Grey) con acentos de fibra de carbono tejida a juego con la tapicería interior del i7. Los ingenieros de Afarer crearon 3 tablas prototipo con soportes GoPro integrados para fotografía de acción, alfombrillas antideslizantes con costuras inspiradas en BMW M y tapas de válvula personalizadas con el emblema de BMW. BMW aprobó 120 unidades a 895 € por tabla con un sistema dedicado de almacenamiento y transporte con carritos con ruedas personalizados.',
            },
            {
              title: 'Integración de Marca y Planificación Logística de Eventos',
              detail:
                'El equipo gráfico de Afarer desarrolló calcomanías resistentes a UV de cobertura total con el branding de BMW i, códigos QR que enlazan al configurador BMW i y gráficos de instrucciones de seguridad en 8 idiomas. El equipo logístico diseñó un sistema de rotación que enviaba 40 tablas a cada una de 3 regiones (Sur de Europa, Europa Central, Nórdico/Báltico) con estaciones de inflado móviles, infladores a batería y vestidores impermeables. El equipo de eventos de BMW seleccionó 18 sedes, incluidas el lago de Como (Italia), Saint-Tropez (Francia), el lago de Lucerna (Suiza), el lago de Garda (Italia) y el archipiélago cerca de Estocolmo (Suecia), cada una recibiendo a 300-600 invitados en programas de 2-3 días.',
            },
            {
              title: 'Activación In Situ y Diseño de la Experiencia del Invitado',
              detail:
                'Cada evento presentaba una «BMW i Paddle Experience» con 40 tablas disponibles en sesiones guiadas de 90 minutos dirigidas por instructores formados por Afarer. Los invitados recibían rash guards personalizados de BMW i y fundas impermeables para teléfono. Fotógrafos profesionales capturaban a cada invitado remando con los soportes de cámara integrados de las tablas; las imágenes se editaban y entregaban en menos de 2 horas a través de un micrositio con la marca. La activación se combinaba con test drives del BMW i7 por carreteras costeras escénicas, creando una inmersión de marca tierra y agua. En los primeros 10 eventos, la satisfacción de los invitados alcanzó 4,8/5 y BMW reportó que el 23% de los participantes solicitó un test drive en concesionario.',
            },
            {
              title: 'Revisión de Rendimiento y Expansión del Programa',
              detail:
                'La gira completa de 18 eventos concluyó el 30 de septiembre de 2025 con 6.840 experiencias de invitados en total (14% por encima del objetivo). No se registraron incidentes de seguridad. La encuesta post-evento de BMW mostró que el 94% de los participantes calificó la experiencia SUP como «excepcional» y el 87% dijo que impactó positivamente su percepción de la marca BMW i. El equipo de Klaus capturó más de 6.500 piezas de contenido generado por usuarios compartidas en redes sociales, generando 3,2 millones de impresiones orgánicas. BMW ordenó 80 tablas adicionales para su programa 2026, expandiéndose a 25 eventos, incluidas activaciones en el Festival de Cannes y el Gran Premio de Mónaco.',
            },
          ],
          results: [
            '6.840 experiencias de invitados VIP entregadas en 18 eventos europeos con 94% de satisfacción y cero incidentes de seguridad',
            '770 € por tabla de costo total incluyendo branding, logística e instrucción — 14% bajo el presupuesto de 850.000 €, ahorrando 80.000 €',
            'El 23% de los participantes solicitó test drives de BMW i en concesionario tras el evento, generando un pipeline de ventas atribuible estimado en 2,1 M€',
            '3,2 millones de impresiones orgánicas en redes sociales a partir de más de 6.500 piezas de contenido generado por usuarios con tablas SUP de marca BMW i',
          ],
        },
        {
          title: 'Google Cloud «Paddle into Production» — Programa SUP de Team Building para 1.200 Ingenieros',
          customer: {
            location: 'Sunnyvale, California, EE. UU.',
            background:
              'La Directora de Cultura de Ingeniería de Google Cloud, Dra. Priya Sharma, fue encargada de crear un programa memorable de team building para 1.200 ingenieros de software en 6 oficinas de Norteamérica. Los retiros tradicionales en salas de conferencias y las salas de escape mostraban puntajes de participación decrecientes (3,1/5 en promedio). La Dra. Sharma quería una actividad al aire libre que promoviera la colaboración, fuera inclusiva con todos los niveles de condición física y reforzara el mensaje «build, connect, scale» de Google Cloud. Tenía un presupuesto de 400.000 $ para un programa de verano 2025 y necesitaba una solución llave en mano que incluyera branding, equipo, instrucción y gestión de seguridad.',
            goal: 'Diseñar y ejecutar un programa escalable de team building con SUP para 1.200 ingenieros de Google Cloud en 6 ubicaciones con más del 90% de participación, lograr un Net Promoter Score de 4,5/5 o superior y ajustarse al presupuesto de 400.000 $.',
          },
          steps: [
            {
              title: 'Diseño del Programa y Planificación Logística Multisede',
              detail:
                'El equipo de la Dra. Sharma contrató a Afarer en febrero de 2025 para un programa corporativo personalizado. Afarer propuso un tema «Paddle into Production» donde equipos de 8-10 ingenieros navegaban cursos SUP que representaban las etapas del pipeline de despliegue de Google Cloud. Afarer personalizó 80 tablas con el branding de Google Cloud, código de colores por equipo y soportes técnicos impermeables para dispositivos móviles. El plan logístico cubría 6 ubicaciones: la sede de Sunnyvale, Seattle, Nueva York, Austin, Chicago y Boulder, con eventos escalonados cada 2 semanas de junio a agosto de 2025. Afarer se comprometió con 320.000 € por 80 tablas, 24 instructores, logística completa y equipo personalizado para 1.200 participantes.',
            },
            {
              title: 'Desarrollo de Actividades Inclusivas y Marco de Seguridad',
              detail:
                'El equipo de programación de Afarer creó 3 niveles: «Beginner Buoy» (remero básico y juegos de estabilidad), «Production Racer» (carreras de relevo por equipos) y «Cloud Cluster» (desafíos de formación grupal que requieren coordinación). Cada nivel incluía retos con temática de Google Cloud como «desplegar un contenedor» (equilibrar una pelota en la tabla mientras se rema) y «escalar a cero» (todos deben sentarse simultáneamente). Afarer contrató 24 instructores SUP certificados en todas las ubicaciones y desarrolló un protocolo de seguridad integral que incluía chalecos salvavidas obligatorios, sistema de compañeros, pruebas de natación y supervisores en el agua con tablas de rescate.',
            },
            {
              title: 'Incorporación, Artículos Promocionales Personalizados y Ejecución de Eventos',
              detail:
                'Cada participante recibía un kit de bienvenida personalizado que incluía un rash guard de Google Cloud x Afarer, bálsamo labial SPF, bolsa seca y folleto del evento. Las sesiones de 2 horas incluían 30 minutos de instrucción en tierra, 75 minutos de actividades en el agua y 15 minutos de relajación con foto de equipo tomada con dron. El equipo de eventos de Afarer se encargaba de toda la instalación, el desmontaje y la limpieza en cada sede — los empleados de Google solo tenían que presentarse. El primer evento en Shoreline Lake en Mountain View el 12 de junio de 2025 logró un 97% de asistencia, con equipos compitiendo por el premio «Highest Availability» basado en coordinación y velocidad.',
            },
            {
              title: 'Análisis de Resultados y Expansión al Segundo Año',
              detail:
                'Durante 8 semanas, participaron 1.168 ingenieros de Google Cloud (97,3% de asistencia). Las encuestas post-evento mostraron un NPS de 4,7/5, el 92% de los participantes dijo sentirse «más conectado con sus compañeros de equipo» y el 88% consideró que la actividad fue «más efectiva que un retiro tradicional». El equipo de liderazgo de la Dra. Sharma reportó una mejora del 15% en las métricas de colaboración entre equipos en el trimestre siguiente al programa. Google Cloud ordenó 40 tablas adicionales para su programa 2026, expandiéndose a 10 ubicaciones, incluidas Londres, Zúrich y Bangalore, con un presupuesto de 580.000 $.',
            },
          ],
          results: [
            '1.168 ingenieros participaron en 6 ubicaciones con un 97,3% de asistencia, superando el objetivo del 90%',
            'Net Promoter Score de 4,7/5 — el más alto de cualquier programa de team building de Google Cloud en 2 años',
            'El 92% de los participantes reportó sentirse más conectado con compañeros de equipos multifuncionales después del evento',
            'Programa entregado a 22 $ por participante bajo el presupuesto de 400.000 $ (333 $/pp frente a 355 $/pp objetivo), ahorrando 26.000 $',
          ],
        },
      ],
    },

    whyAfarer: {
      title: 'Por Qué las Empresas Eligen Afarer',
      items: [
        {
          title: 'Presentación de Marca',
          description:
            'Cada detalle representa a tu empresa, desde la ubicación del logo hasta la precisión del color y la apariencia general del producto.',
        },
        {
          title: 'Ejecución Rápida de Proyectos',
          description:
            'Los plazos importan. El proceso optimizado de Afarer avanza del concepto a la entrega dentro de cronogramas de eventos ajustados.',
        },
        {
          title: 'Fabricación Personalizada',
          description:
            'Tu marca merece productos únicos. Personalización total, desde los gráficos de las tablas hasta los accesorios y el empaque.',
        },
        {
          title: 'Entrega Confiable',
          description:
            'Los eventos no pueden esperar. Afarer garantiza la programación de producción y la coordinación de envíos para cumplir fechas de evento fijas.',
        },
        {
          title: 'Impacto Visual',
          description:
            'Creamos productos que generan atención en redes sociales y convierten a los participantes en embajadores de marca.',
        },
        {
          title: 'Gestión de Extremo a Extremo',
          description:
            'Desde el concepto inicial y la aprobación del diseño hasta la producción, el control de calidad y la entrega en eventos globales.',
        },
      ],
    },

    faqs: [
      {
        question: '¿Pueden igualar los colores corporativos exactos (Pantone) en las tablas SUP?',
        answer:
          'Sí, Afarer admite la igualación de colores Pantone y los requisitos de identidad visual corporativa con reproducción precisa del color. Proporcionamos muestras de prototipo para la aprobación del color antes de la producción en serie, para garantizar que el producto final coincida exactamente con los estándares de tu marca.',
      },
      {
        question: '¿Cuál es la cantidad mínima de pedido para tablas SUP personalizadas?',
        answer:
          'Afarer se adapta a diferentes escalas de proyecto. Los eventos corporativos pequeños y las actividades internas comienzan en 50-100 unidades. Las campañas de marketing medianas van de 100 a 500 unidades, y los grandes eventos nacionales o multisede pueden escalar a 500-1000+ unidades.',
      },
      {
        question: '¿Cuánto tiempo tarda el proceso de prototipado y aprobación?',
        answer:
          'El proceso de prototipado está diseñado para la rapidez. Afarer ofrece confirmación rápida del diseño, revisión de arte y desarrollo de prototipos generalmente en 1-2 semanas. Esto deja tiempo suficiente para la aprobación y la producción en serie antes de los plazos del evento.',
      },
      {
        question: '¿Pueden entregar en múltiples ubicaciones para eventos de campañas globales?',
        answer:
          'Sí, Afarer admite campañas de eventos multinacionales y multisede. Coordinamos la producción, el empaque y la preparación de envíos para garantizar una entrega consistente en todas las sedes de eventos regionales o globales.',
      },
      {
        question: '¿Qué opciones de personalización están disponibles más allá de la impresión del logo?',
        answer:
          'Además de la impresión del logo, Afarer ofrece branding de toda la superficie de la tabla, personalización de remos, igualación de colores corporativos con referencias Pantone, diseños gráficos temáticos de eventos, arte de edición limitada y accesorios personalizados que incluyen remos, bombas y bolsas.',
      },
      {
        question: '¿Ofrecen paquetes completos de eventos que incluyan accesorios y remos?',
        answer:
          'Sí, Afarer proporciona paquetes completos de equipo para eventos que incluyen tablas SUP personalizadas, remos ajustables, bombas, leash, bolsas de transporte y kits de reparación. Las adiciones opcionales incluyen remos personalizados, accesorios para eventos, materiales de exhibición y equipo para el personal.',
      },
    ],

    cta: {
      title: 'Crea tu Experiencia Acuática Corporativa con Afarer',
      subtitle: 'Tu marca merece ser recordada.',
      primaryAction: { text: 'Inicia tu Proyecto SUP Corporativo Hoy' },
      secondaryAction: { text: 'Ver Nuestras Opciones de Personalización' },
    },
  },
};

export default overrides;
