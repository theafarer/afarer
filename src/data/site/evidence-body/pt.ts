import type { EvidenceBodyMap } from './types';

export const bodyOverrides: EvidenceBodyMap = {
  'australian-paddle-club': {
    client: 'Associação australiana de clubes de paddle',
    product: 'Frota de clube — SUP + equipamento de segurança',
    industry: 'Lazer / Educação',
    challenge:
      'Uma associação de 15 clubes precisava padronizar o equipamento com SUP duráveis para iniciantes, coletes salva-vidas certificados CE e compras centralizadas para reduzir custos por clube.',
    solution:
      'Padronizamos uma frota de clube em 3 níveis (iniciante, intermediário, instrutor). Projetamos gráficos de deck nas cores do clube com seus logotipos. Implementamos armazenamento centralizado com distribuição trimestral por clube.',
    result:
      '350 unidades em 15 clubes. Redução de custo de 28% por meio de compras consolidadas. Satisfação de 92% dos membros com a qualidade dos equipamentos.',
    outcomeMetrics: [
      {
        label: 'Clubes equipados',
        value: '15',
      },
      {
        label: 'Unidades entregues',
        value: '350',
      },
      {
        label: 'Redução de custo',
        value: '28%',
      },
      {
        label: 'Satisfação dos membros',
        value: '92%',
      },
    ],
  },
  'australian-sup-distributor': {
    client: 'Distribuidor australiano',
    product: 'Linha SUP com certificação CE',
    industry: 'Náutica / Varejo',
    challenge:
      'Um distribuidor australiano exigia uma linha SUP com certificação CE, cores de deck personalizadas, opção de PVC reforçado e conformidade com a norma australiana AS 1799.',
    solution:
      'Produzimos amostras de pré-produção com 4 variantes de cor, adquirimos PVC de grau militar e coordenamos testes de conformidade AS 1799 por terceiros.',
    result:
      'Linha de 3 modelos de SUP lançada no mercado da Austrália e Nova Zelândia. Seguida de contrato com rede varejista de 12 lojas.',
    outcomeMetrics: [
      {
        label: 'Modelos lançados',
        value: '3',
      },
      {
        label: 'Lojas varejistas',
        value: '12',
      },
      {
        label: 'Conformidade',
        value: 'AS 1799',
      },
    ],
  },
  'canadian-retail-chain': {
    client: 'Rede varejista canadense de outdoor',
    product: 'Linha SUP de marca própria + acessórios',
    industry: 'Varejo',
    challenge:
      'Um varejista canadense com 25 lojas exigia uma linha SUP exclusiva de marca própria com embalagem bilíngue francês/inglês, especificações para clima frio e conformidade com normas náuticas canadenses.',
    solution:
      'Desenvolvemos 4 modelos de SUP com composto de PVC cold-flex classificado até -15°C. Produzimos embalagem de varejo bilíngue com marcações regulatórias canadenses. Fornecemos expositores e materiais de treinamento de equipe.',
    result:
      'Linha exclusiva lançada em 25 lojas. 3,800 unidades vendidas na primeira temporada. O varejista renovou o acordo de 3 anos com número expandido de SKUs.',
    outcomeMetrics: [
      {
        label: 'Lojas',
        value: '25',
      },
      {
        label: 'Unidades na primeira temporada',
        value: '3,800',
      },
      {
        label: 'Acordo',
        value: 'renovação de 3 anos',
      },
    ],
  },
  'caribbean-resort-fleet': {
    client: 'Grupo de resorts de luxo do Caribe',
    product: 'Frota de resort — SUP',
    industry: 'Hotelaria / Turismo',
    challenge:
      'Um grupo com 5 resorts precisava de uma frota unificada de SUP de aluguel com branding consistente, materiais resistentes aos raios UV do sol tropical e plano de substituição de 5 anos.',
    solution:
      'Projetamos um pacote de frota de SUP personalizado de 3 modelos com PVC estabilizado contra UV, gráficos de deck com a marca do resort e cronograma de entrega em fases. Fornecemos treinamento de equipe e um kit de peças de reposição dedicado por resort.',
    result:
      '180 unidades entregues em 5 resorts. Pedido de reposição para 2 novas propriedades. Redução de 40% no custo por unidade em relação a fornecedores anteriores.',
    outcomeMetrics: [
      {
        label: 'Unidades entregues',
        value: '180',
      },
      {
        label: 'Resorts',
        value: '5',
      },
      {
        label: 'Redução de custo',
        value: '40%',
      },
    ],
    beforeAfter: [
      {
        label: 'Custo anual de substituição de pranchas',
        before: '$28,000',
        after: '$12,000',
      },
      {
        label: 'Tempo de inatividade da frota (dias/ano)',
        before: '45',
        after: '8',
      },
      {
        label: 'Pontuação de satisfação dos hóspedes',
        before: '3.8/5',
        after: '4.6/5',
      },
    ],
  },
  'corporate-wellness-program': {
    client: 'Corporação global de tecnologia',
    product: 'Bem-estar corporativo — Frota SUP',
    industry: 'Corporativo / Bem-estar',
    challenge:
      'Uma empresa de tecnologia da Fortune 500 queria lançar um programa aquático de bem-estar em 4 campus à beira do lago: 60 SUP com branding corporativo, armazenamento e treinamento de instrutores.',
    solution:
      'Fornecemos uma frota de SUPs estáveis all-around com gráficos de deck com o logotipo corporativo. Projetamos racks de armazenamento resistentes às intempéries no local. Certificamos 12 instrutores internos por meio do programa de treinamento da afarer.',
    result:
      'Programa lançado em 4 campi. Mais de 2,400 participações de funcionários no primeiro ano. Avaliação de satisfação de 94% dos funcionários. Incluído no relatório de sustentabilidade da empresa.',
    outcomeMetrics: [
      {
        label: 'Campi',
        value: '4',
      },
      {
        label: 'Participações',
        value: '2,400+',
      },
      {
        label: 'Satisfação',
        value: '94%',
      },
    ],
  },
  'cruise-line-activity-program': {
    client: 'Operador de cruzeiros do Caribe',
    product: 'Frota de atividades a bordo — SUP',
    industry: 'Hotelaria / Cruzeiros',
    challenge:
      'Uma grande linha de cruzeiros queria oferecer SUP como excursão costeira em 7 navios: armazenamento compacto a bordo, ciclos rápidos de inflar/desinflar e consistência de marca em toda a frota.',
    solution:
      'Desenvolvemos um pacote de SUP específico para cruzeiros com sistemas de válvulas de inflação rápida, armazenamento em mochila compacta e gráficos de deck com a marca do navio. Fornecemos treinamento dedicado para a equipe em terra e armários de peças de reposição em 3 portos insulares.',
    result:
      'Programa lançado em 7 navios. Mais de 15,000 participações de hóspedes na primeira temporada. Avaliação média das excursões de 4.6★. Ampliado para 3 navios adicionais no ano 2.',
    outcomeMetrics: [
      {
        label: 'Navios',
        value: '7',
      },
      {
        label: 'Participações de hóspedes',
        value: '15,000+',
      },
      {
        label: 'Avaliação',
        value: '4.6★',
      },
      {
        label: 'Expansão no ano 2',
        value: '+3 navios',
      },
    ],
  },
  'european-dtc-ecommerce': {
    client: 'Marca europeia DTC de esportes aquáticos',
    product: 'Linha SUP de marca + acessórios',
    industry: 'E-commerce / Varejo',
    challenge:
      'Uma marca DTC em rápida expansão precisava de um kit SUP completo (prancha, bomba, remo, leash, bolsa) com embalagem premium para e-commerce — envio DHL/FedEx direto sem avarias.',
    solution:
      'Desenvolvemos uma linha em co-branding com moldagem personalizada do núcleo de EPS, tecnologia proprietária de drop-stitch para maior pressão e caixas de papelão ondulado de parede dupla prontas para varejo com almofada de inserção. Integramos autenticidade por código QR e registro de garantia.',
    result:
      'Linha de 3 modelos de SUP lançada em 75 dias. Mais de 15,000 unidades nos primeiros 12 meses. Avaliação média de 4.8★ em mais de 2,000 avaliações. Taxa de dano no transporte de 0.3%.',
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
        label: 'Avaliação média',
        value: '4.8★',
      },
      {
        label: 'Taxa de dano',
        value: '0.3%',
      },
    ],
  },
  'european-lake-rental': {
    client: 'Operador europeu de resort lacustre e aluguel',
    product: 'Frota de aluguel — SUP, coletes, acessórios',
    industry: 'Aluguel / Turismo',
    challenge:
      'Um operador com 6 estações de aluguel precisava de uma frota SUP de alta durabilidade com secagem rápida, construção resistente a danos e cronograma plurianual de substituição previsível.',
    solution:
      'Fornecemos SUPs de aluguel de grau comercial com faixas de rail reforçadas, decks de EVA de secagem rápida e PVC estabilizado contra UV. Desenvolvemos um sistema de rastreamento de desgaste codificado por cores com relatórios anuais de condição.',
    result:
      '200 SUPs implantados em 6 estações. Custo anual de manutenção reduzido em 55%. Vida útil dos equipamentos ampliada de 2 para 4 anos.',
    outcomeMetrics: [
      {
        label: 'Estações de aluguel',
        value: '6',
      },
      {
        label: 'SUPs implantados',
        value: '200',
      },
      {
        label: 'Custo de manutenção',
        value: '-55%',
      },
      {
        label: 'Vida útil',
        value: '4 anos',
      },
    ],
    beforeAfter: [
      {
        label: 'Vida média das pranchas',
        before: '2 anos',
        after: '4 anos',
      },
      {
        label: 'Manutenção anual por prancha',
        before: '$85',
        after: '$38',
      },
      {
        label: 'Receita de aluguel por prancha/temporada',
        before: '$1,200',
        after: '$1,850',
      },
    ],
  },
  'fishing-charter-rebrand': {
    client: 'Empresa de charter de pesca da Flórida',
    product: 'Frota SUP de pesca personalizada',
    industry: 'Pesca / Charter',
    challenge:
      'Um operador de charter de pesca da Flórida queria adiciona tours de pesca em SUP: plataformas estáveis com suportes para coolers, trilhos para porta-varas e compatibilidade com transdutores de fishfinder.',
    solution:
      'Personalizamos a plataforma de SUP estável existente com 4 suportes de vara integrados, sistema de montagem removível para cooler e montagem impermeável para transdutor no scupper. Oferecemos preços de frota e programa de substituição sazonal.',
    result:
      'Tours de pesca em SUP lançados como nova fonte de receita. 45% dos clientes de charter existentes reservaram tours de SUP. Frota ampliada de 8 para 20 pranchas em 2 temporadas.',
    outcomeMetrics: [
      {
        label: 'Frota inicial',
        value: '8',
      },
      {
        label: 'Frota no ano 2',
        value: '20',
      },
      {
        label: 'Venda cruzada de charter',
        value: '45%',
      },
    ],
  },
  'humanitarian-aid-project': {
    client: 'Organização humanitária internacional',
    product: 'Barcos infláveis de resgate e ajuda',
    industry: 'ONG / Ajuda humanitária',
    challenge:
      'Uma organização humanitária internacional precisava de 50 barcos infláveis robustos para resgates em enchentes no Sudeste Asiático: leves para transporte de helicóptero e reparáveis em campo.',
    solution:
      'Fabricamos 50 barcos infláveis reforçados com assoalhos de escoamento automático, redundância de múltiplas câmaras e perímetros de cordas de agarramento. Fornecemos kits de reparo de campo com instruções pictóricas. Treinamos 20 técnicos locais.',
    result:
      '50 barcos implantados em 3 regiões propensas a enchentes. Usados em 12 grandes operações de resgate nos primeiros 6 meses. 0 falhas de equipamento relatadas.',
    outcomeMetrics: [
      {
        label: 'Barcos implantados',
        value: '50',
      },
      {
        label: 'Operações de resgate',
        value: '12',
      },
      {
        label: 'Taxa de falhas',
        value: '0%',
      },
    ],
  },
  'japanese-brand-launch': {
    client: 'Marca japonesa de lifestyle',
    product: 'Linha SUP co-branding',
    industry: 'OEM / Marca',
    challenge:
      'Uma marca japonesa premium de lifestyle buscou entrar no mercado de esportes aquáticos com uma linha SUP co-branding: design minimalista, materiais ecológicos e manufatura de precisão.',
    solution:
      'Criamos moldes personalizados com perfil de rail mais elegante. Adquirimos inlays de deck de bambu certificado FSC e opções de PVC reciclado. Desenvolvemos uma experiência de unboxing premium com guias de cuidados com código QR em japonês.',
    result:
      'Linha co-branding de 3 modelos lançada no Tokyo Marine Show. 2,800 unidades pré-vendidas antes do lançamento público. Destaque em 5 publicações japonesas de estilo de vida.',
    outcomeMetrics: [
      {
        label: 'Modelos',
        value: '3',
      },
      {
        label: 'Unidades pré-vendidas',
        value: '2,800',
      },
      {
        label: 'Participações na mídia',
        value: '5',
      },
    ],
  },
  'lakeside-community-amenity': {
    client: 'Comunidade residencial à beira do lago dos EUA',
    product: 'Comodidade comunitária — Frota SUP',
    industry: 'Imóveis / Comunidade',
    challenge:
      'Uma comunidade residencial de luxo à beira do lago queria oferecer SUP como comodidade: frota de baixa manutenção, armazenamento seguro na orla e sistema de empréstimo self-service para 200+ residências.',
    solution:
      'Fornecemos 15 SUPs de grau comercial com sistema de armários resistentes às intempéries. Projetamos checkout por código QR com integração de termo de responsabilidade digital. Fornecemos serviço de manutenção sazonal.',
    result:
      '85% das residências usaram a estrutura de SUP na primeira temporada. O valor dos imóveis na seção à beira do lago aumentou 7%. A comunidade ganhou o prêmio «Best Lakeside Living».',
    outcomeMetrics: [
      {
        label: 'SUPs',
        value: '15',
      },
      {
        label: 'Uso pelas residências',
        value: '85%',
      },
      {
        label: 'Impacto no valor dos imóveis',
        value: '+7%',
      },
      {
        label: 'Prêmio',
        value: 'Best Lakeside Living',
      },
    ],
  },
  'mediterranean-resort-fleet': {
    client: 'Rede de resorts de praia do Mediterrâneo',
    product: 'Frota de resort — SUP + acessórios',
    industry: 'Hotelaria / Turismo',
    challenge:
      'Uma rede mediterrânea de 3 resorts queria lançar um programa unificado de atividades aquáticas com 120 SUP personalizados, cartões de segurança multilíngues e sistema de manutenção rotativa.',
    solution:
      'Projetamos um pacote de frota específico para resorts com PVC marinho resistente a UV, gráficos de deck com a marca do hotel em 3 esquemas de cores e um sistema de etiquetas de manutenção codificado por cores. Inclui treinamento de equipe e reposição trimestral de peças.',
    result:
      'Frota implantada em 3 resorts. A receita de atividades aquáticas aumentou 210% na primeira temporada. As pontuações de satisfação dos hóspedes com as comodidades subiram de 4.1 para 4.7/5.',
    outcomeMetrics: [
      {
        label: 'SUPs entregues',
        value: '120',
      },
      {
        label: 'Resorts',
        value: '3',
      },
      {
        label: 'Aumento de receita',
        value: '210%',
      },
      {
        label: 'Pontuação dos hóspedes',
        value: '4.7/5',
      },
    ],
    beforeAfter: [
      {
        label: 'Receita de atividades aquáticas (anual)',
        before: '$45,000',
        after: '$140,000',
      },
      {
        label: 'Taxa de substituição de equipamentos',
        before: '35%',
        after: '8%',
      },
      {
        label: 'Satisfação dos hóspedes (comodidades)',
        before: '4.1/5',
        after: '4.7/5',
      },
    ],
  },
  'middle-east-distributor': {
    client: 'Distribuidor de esportes aquáticos do Oriente Médio',
    product: 'Linha completa — SUP, barcos, acessórios',
    industry: 'Distribuição / Náutica',
    challenge:
      'Um distribuidor do GCC buscava direitos exclusivos de toda a linha Afarer em 6 países do Golfo, com embalagem em árabe, especificações de materiais resistentes ao calor e garantia conforme a sharia.',
    solution:
      'Estabelecemos acordo de distribuição exclusiva. Desenvolvemos embalagem e materiais de marketing em árabe. Validamos especificações de materiais a 50°C de temperatura ambiente. Adaptamos os termos de garantia para conformidade regional.',
    result:
      '12 pedidos de contêiner nos primeiros 18 meses. Rede de 15 revendas e subdistribuidores estabelecida. Participação de mercado estimada em 18% do segmento de SUP inflável do GCC.',
    outcomeMetrics: [
      {
        label: 'Contêineres',
        value: '12',
      },
      {
        label: 'Rede de revendas',
        value: '15',
      },
      {
        label: 'Participação de mercado',
        value: '18%',
      },
    ],
  },
  'retail-private-label': {
    client: 'Varejista europeu de artigos de outdoor',
    product: 'Linha SUP de marca própria',
    industry: 'Varejo',
    challenge:
      'Um varejista europeu de outdoor precisava de uma linha SUP de marca própria com gráficos de deck exclusivos, PVC ecológico e embalagem pronta para varejo — tudo entregue em 60 dias.',
    solution:
      'Desenvolvemos arquivos de impressão digital personalizados, adquirimos PVC em conformidade com o REACH e comprimimos a amostragem de 3 rodadas para 1 ao alocar a equipe de design em nossa fábrica em Qingdao.',
    result:
      '55 dias da ordem de compra assinada até o FOB. 2,400 unidades em 4 SKUs. Pedido de reposição feito antes da chegada do primeiro contêiner.',
    outcomeMetrics: [
      {
        label: 'Prazo de entrega',
        value: '55 dias',
      },
      {
        label: 'Unidades',
        value: '2,400',
      },
      {
        label: 'SKUs',
        value: '4',
      },
    ],
  },
  'search-rescue-sup-fleet': {
    client: 'Agência marítima do Sudeste Asiático',
    product: 'Frota SUP de patrulha e resgate',
    industry: 'Governo / Segurança Marítima',
    challenge:
      'Uma agência marítima governamental exigia 20 SUP de patrulha e resgate com tecido Hypalon à prova de fogo, suportes de comunicação integrados e conformidade com o capítulo III da SOLAS.',
    solution:
      'Fabricamos 20 SUPs com tubos de CSM Hypalon, argolas em D de alta resistência e pacotes de luzes de navegação pré-instalados. A equipe de inspeção da fábrica presenciou os testes no mar. Pacote completo de documentação SOLAS fornecido.',
    result:
      'Contrato entregue em 4 meses. Frota implantada para patrulha de fronteiras, busca e resgate e resposta a desastres em 3 bases regionais.',
    outcomeMetrics: [
      {
        label: 'SUPs de patrulha',
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
    client: 'Startup americana de esportes aquáticos',
    product: 'Linha SUP personalizada',
    industry: 'Startup / Varejo',
    challenge:
      'Uma startup americana de esportes aquáticos precisava de um SUP de alto desempenho Drop-Stitch com design de deck personalizado, embalagem co-branding e certificação BSCI para o varejo.',
    solution:
      'Adaptamos o molde de SUP existente com perfil de rocker modificado, desenvolvemos a arte da embalagem em co-branding e fornecemos a documentação completa de auditoria BSCI.',
    result:
      'Listado com sucesso em 3 grandes redes de outdoor dos EUA. Mais de 5,000 unidades no primeiro ano com taxa de sell-through de 98%.',
    outcomeMetrics: [
      {
        label: 'Redes de varejo',
        value: '3',
      },
      {
        label: 'Unidades no primeiro ano',
        value: '5,000+',
      },
      {
        label: 'Sell-through',
        value: '98%',
      },
    ],
  },
  'university-club-program': {
    client: 'União esportiva universitária britânica',
    product: 'Frota de clube estudantil — SUP + segurança',
    industry: 'Educação',
    challenge:
      'Uma universidade britânica com clube aquático ativo precisava substituir sua frota envelhecida por SUP infláveis modernos: armazenamento compacto, uso por todos os níveis e padrões de competição BUCS.',
    solution:
      'Fornecemos 25 SUPs all-around com mochilas de armazenamento compactas, 10 SUPs de touring para treinamento de competição e pacote completo de equipamentos de segurança. Fornecemos treinamento para os diretores do clube e oficinas de manutenção.',
    result:
      'Frota lançada na Feira de Calouros. O número de membros do clube cresceu 140%. A universidade sediou a primeira competição interuniversitária de SUP em 5 anos.',
    outcomeMetrics: [
      {
        label: 'SUPs fornecidos',
        value: '35',
      },
      {
        label: 'Crescimento de membros',
        value: '140%',
      },
      {
        label: 'Competições sediadas',
        value: '1',
      },
    ],
  },
  'us-custom-mold': {
    client: 'Marca americana de equipamentos aquáticos',
    product: 'Molde sob medida — SUP de touring',
    industry: 'OEM / Manufatura',
    challenge:
      'Uma marca americana exigia um molde SUP totalmente novo: formato touring de 14 pés, canais para fishfinder, plataforma reforçada e capacidade de carga de 400 lbs.',
    solution:
      'Projetamos um novo molde de drop-stitch de 14 pés com densidade de núcleo reforçada, insertos de rail para acessórios embutidos e camada inferior de PVC de grau militar para resistência à abrasão. Produzimos 3 iterações de protótipo antes da finalização do molde.',
    result:
      'Novo molde fabricado em 14 semanas. 3,500 unidades produzidas na primeira tiragem. Produto nomeado «Best Fishing SUP 2025» pelo Outdoor Gear Lab.',
    outcomeMetrics: [
      {
        label: 'Tempo de molde',
        value: '14 semanas',
      },
      {
        label: 'Primeira tiragem',
        value: '3,500 unidades',
      },
      {
        label: 'Prêmio',
        value: 'Best Fishing SUP 2025',
      },
    ],
  },
};
