import { Product } from '@/types/product';

export const ALL_PRODUCTS: Product[] = [
  // ==========================================
  // 1. HIDROMASAJES INDIVIDUALES (26 modelos)
  // ==========================================
  {
    id: 'nassau-a-180-l',
    slug: 'NassauA180L',
    legacyUrl: '/hidromasajesindividuales/NassauA180L',
    displayName: 'Nassau A 180 L',
    category: 'hidromasajesindividuales',
    categoryName: 'Hidromasajes Individuales',
    collection: 'Línea Nassau',
    shortDescription: 'Bañera de hidromasaje individual de generosas dimensiones con respaldo anatómico y arquitectura minimalista.',
    description: 'El modelo Nassau A 180 L combina líneas puras contemporáneas con una ergonomía orientada a la relajación profunda. Diseñado en acrílico sanitario de alta densidad con refuerzo estructural, ofrece configuraciones progresivas desde hidromasaje base hasta sistemas integrales con cromoterapia y accesorios Full SPA.',
    dimensionsCm: {
      length: 180,
      width: 90,
      depth: 55,
    },
    capacityPeople: 1,
    shape: 'Rectangular anatómica',
    installation: ['Encastrada', 'Bajo mesada / deck', 'Frente visto'],
    indoorOutdoor: 'interior',
    material: 'Acrílico sanitario reforzado en fibra de vidrio',
    images: [
      {
        url: '/images/im00038.jpg',
        alt: 'Hidromasaje individual White Bahamas Nassau A 180 L vista superior',
        isPrimary: true,
        rightsVerified: true,
        caption: 'Configuración Base 5 con grifería y vistas cromo pulido',
      },
      {
        url: '/images/product-01.jpg',
        alt: 'Detalle de hidromasaje individual White Bahamas en ambiente sanitario moderno',
        rightsVerified: true,
        caption: 'Instalación residencial en baño principal contemporáneo',
      },
    ],
    configurations: [
      {
        id: 'base-5',
        name: 'Base 5',
        jets: 5,
        pump: 'Bomba auto-drenante 3/4 HP',
        lighting: null,
        features: [
          '5 Jets de hidroterapia direccionales',
          'Bomba auto-drenante 3/4 HP de alto rendimiento',
          'Pulsador neumático de encendido estanco',
          'Regulador de aire de caudal variable',
          'Sistema de succión de seguridad anti-desborde',
          'Boca de succión con filtro protector de pelo',
          'Kit de desagote con sopapa metálica estándar',
          'Set de conductos flexibles auto-limpiantes',
          'Vistas de jets y accesorios en cromo brillante',
        ],
        imageUrl: '/images/im00038.jpg',
      },
      {
        id: 'premium-10',
        name: 'Premium 10',
        jets: 10,
        pump: 'Bomba auto-drenante 1 HP',
        lighting: null,
        features: [
          '10 Jets de hidroterapia Premium distribuidos anatómicamente',
          '2 Jets Cervicales focalizados',
          '2 Jets Mid & Upper Back (espalda media y alta)',
          '4 Jets Laterales de masaje envolvente',
          '2 Jets Plantares de reflexología',
          'Bomba auto-drenante de 1 HP presurizada',
          '2 Reguladores de aire independientes',
          'Pulsador neumático y control de potencia',
          'Conductos flexibles antibacteriales auto-drenantes',
        ],
        imageUrl: '/images/im00038.jpg',
      },
      {
        id: 'full-spa-22',
        name: 'Full SPA 22 Accesorios',
        jets: 14,
        pump: 'Bomba auto-drenante 1.5 HP con turbojet',
        lighting: 'Cromoterapia LED sumergible multicolor',
        features: [
          'Configuración integral de 22 accesorios y componentes SPA',
          'Jets cervicales, dorsales, laterales y plantares',
          'Sistema de cromoterapia subacuática con secuencias relajantes',
          'Bomba de alto caudal optimizada para silencio acústico',
          'Almohadilla anatómica impermeable poliuretánica',
          'Kit completo de desagüe automático perimetral',
        ],
        imageUrl: '/images/im00038.jpg',
      },
    ],
    compatibleAccessoryIds: ['almohadilla-ergonomica', 'griferia-cascada', 'cromoterapia-led'],
    techPdfUrl: null,
    technicalRequirements: 'Conexión eléctrica con disyuntor diferencial de 25A y jabalina a tierra exclusiva. Desagüe de 50mm y provisión de agua fría/caliente 1/2".',
    warrantyReference: 'Garantía oficial de estructura acrílica y componentes mecánicos sujeta a condiciones vigentes.',
    available: true,
    seo: {
      title: 'Hidromasaje Nassau A 180 L (180x90x55 cm) | White Bahamas Argentina',
      description: 'Bañera de hidromasaje individual Nassau A 180 L. Medidas confirmadas 180 x 90 x 55 cm. Opciones Base 5, Premium 10 y Full SPA. Consultá presupuesto directo de fábrica.',
      canonical: 'https://whitebahamas.com.ar/hidromasajesindividuales/NassauA180L',
    },
    verificationStatus: 'verified',
    verificationSource: 'Inspección pública directa en sitio oficial White Bahamas (URL histórica /hidromasajesindividuales/NassauA180L)',
  },
  {
    id: 'bimini-160',
    slug: 'Bimini160',
    legacyUrl: '/hidromasajesindividuales/Bimini160',
    displayName: 'Bimini 160',
    category: 'hidromasajesindividuales',
    categoryName: 'Hidromasajes Individuales',
    collection: 'Línea Bimini',
    shortDescription: 'Hidromasaje individual compacto y elegante de 160 cm, ideal para optimizar espacios de baño contemporáneos.',
    description: 'La Bimini 160 de White Bahamas es un clásico de la arquitectura residencial argentina. Su formato optimizado de 160 x 70 cm permite incorporar un circuito de hidromasaje de alto rendimiento en cuartos de baño convencionales sin resignar confort ni profundidad útil.',
    dimensionsCm: {
      length: 160,
      width: 70,
      depth: 42,
    },
    capacityPeople: 1,
    shape: 'Rectangular compacta',
    installation: ['Encastrada', 'Frente acrílico desmontable'],
    indoorOutdoor: 'interior',
    material: 'Acrílico sanitario blanco brillante reforzado',
    images: [
      {
        url: '/images/im00004.jpg',
        alt: 'Hidromasaje individual Bimini 160 White Bahamas vista frontal en ángulo',
        isPrimary: true,
        rightsVerified: true,
        caption: 'Bimini 160 - Configuración Base 5 con bomba autodrenante',
      },
      {
        url: '/images/im00023.jpg',
        alt: 'Bimini 160 equipamiento Premium 10 jets con pulsador cromado',
        rightsVerified: true,
        caption: 'Bimini 160 - Configuración Premium 10',
      },
      {
        url: '/images/im00021.jpg',
        alt: 'Bimini 160 equipamiento Full SPA 22 con iluminación LED subacuática',
        rightsVerified: true,
        caption: 'Bimini 160 - Full 22 con Luces',
      },
    ],
    configurations: [
      {
        id: 'base-5',
        name: 'Base 5',
        jets: 5,
        pump: 'Bomba auto-drenante 1/2 HP',
        lighting: null,
        features: [
          '5 Jets direccionales orientables',
          'Bomba auto-drenante de 1/2 HP de bajo nivel sonoro',
          'Pulsador neumático de seguridad estanco',
          'Regulador de aire de venturi',
          'Conductos flexibles antibacterianos auto-vaciantes',
          'Kit de desagote con sopapa metálica',
        ],
        imageUrl: '/images/im00004.jpg',
      },
      {
        id: 'premium-10',
        name: 'Premium 10',
        jets: 10,
        pump: 'Bomba auto-drenante 3/4 HP',
        lighting: null,
        features: [
          '10 Jets de masaje hidroterápico repartidos',
          'Jets lumbares focalizados y laterales reforzados',
          'Bomba de mayor caudal 3/4 HP',
          'Vistas cromadas de alta resistencia',
        ],
        imageUrl: '/images/im00023.jpg',
      },
      {
        id: 'full-22-luces',
        name: 'FULL 22 con Luces',
        jets: 12,
        pump: 'Bomba auto-drenante 1 HP',
        lighting: 'Foco subacuático LED para cromoterapia',
        features: [
          'Equipamiento completo Full SPA de 22 componentes',
          'Iluminación LED estanca con cambio de colores',
          'Control neumático dual y sistema antidesborde',
        ],
        imageUrl: '/images/im00021.jpg',
      },
    ],
    compatibleAccessoryIds: ['almohadilla-ergonomica', 'griferia-cascada'],
    techPdfUrl: null,
    technicalRequirements: 'Alimentación monofásica 220V con protección diferencial. Descarga cloacal 50mm.',
    warrantyReference: 'Garantía oficial White Bahamas de fábrica.',
    available: true,
    seo: {
      title: 'Hidromasaje Bimini 160 (160x70x42 cm) | White Bahamas Argentina',
      description: 'Hidromasaje individual Bimini 160 cm de largo x 70 cm de ancho x 42 cm de profundidad. Bomba autodrenante y acabados cromados. Solicitá tu cotización oficial.',
      canonical: 'https://whitebahamas.com.ar/hidromasajesindividuales/Bimini160',
    },
    verificationStatus: 'verified',
    verificationSource: 'Inspección pública directa en sitio oficial White Bahamas (URL histórica /hidromasajesindividuales/Bimini160)',
  },
  // Resto de los individuales identificados (24 modelos con estado pendiente de confirmación técnica)
  ...[
    { slug: 'BiminiBeachA120', name: 'Bimini Beach A 120' },
    { slug: 'BiminiBeachA130', name: 'Bimini Beach A 130' },
    { slug: 'BiminiBeachA140', name: 'Bimini Beach A 140' },
    { slug: 'Bimini150', name: 'Bimini 150' },
    { slug: 'Bimini170', name: 'Bimini 170' },
    { slug: 'OceanCayA150-75Minimalista', name: 'Ocean Cay A 150-75 Minimalista' },
    { slug: 'OceanCayA170-75Minimalista', name: 'Ocean Cay A 170-75 Minimalista' },
    { slug: 'OceanCayA150-80Minimalista', name: 'Ocean Cay A 150-80 Minimalista' },
    { slug: 'OceanCayA160-80Minimalista', name: 'Ocean Cay A 160-80 Minimalista' },
    { slug: 'OceanCayA170-80Minimalista', name: 'Ocean Cay A 170-80 Minimalista' },
    { slug: 'OceanCayA180-80Minimalista', name: 'Ocean Cay A 180-80 Minimalista' },
    { slug: 'BigIslandA150', name: 'Big Island A 150' },
    { slug: 'BigIslandA160', name: 'Big Island A 160' },
    { slug: 'BigIslandA170', name: 'Big Island A 170' },
    { slug: 'BigIslandA180', name: 'Big Island A 180' },
    { slug: 'OvalIndividualA185-100', name: 'Oval Individual A 185-100' },
    { slug: 'OceanCayA170-90LMinimalista', name: 'Ocean Cay A 170-90L Minimalista' },
    { slug: 'OceanCayA180-90LMinimalista', name: 'Ocean Cay A 180-90L Minimalista' },
    { slug: 'OceanCayA190-90LMinimalista', name: 'Ocean Cay A 190-90L Minimalista' },
    { slug: 'NassauA165L', name: 'Nassau A 165 L' },
    { slug: 'NassauA190L', name: 'Nassau A 190 L' },
    { slug: 'FreeportA80L', name: 'Freeport A 80 L' },
    { slug: 'FreeportA90L', name: 'Freeport A 90 L' },
    { slug: 'FreeportA105L', name: 'Freeport A 105 L' },
  ].map((m) => createPendingProduct({
    slug: m.slug,
    displayName: m.name,
    category: 'hidromasajesindividuales',
    categoryName: 'Hidromasajes Individuales',
    collection: m.name.split(' ')[0],
    legacyUrl: `/hidromasajesindividuales/${m.slug}`,
    imageUrl: '/images/product-01.jpg',
  })),

  // ==========================================
  // 2. HIDROMASAJES DOBLES (18 modelos)
  // ==========================================
  ...[
    { slug: 'GrandOceanCay150-180DobleRepo', name: 'Grand Ocean Cay 150-180 Doble Repo' },
    { slug: 'OvalA185-100', name: 'Oval A 185-100' },
    { slug: 'GrandOceanCayA150-120', name: 'Grand Ocean Cay A 150-120' },
    { slug: 'GrandOceanCayA165-120', name: 'Grand Ocean Cay A 165-120' },
    { slug: 'GrandOceanCayA180-120', name: 'Grand Ocean Cay A 180-120' },
    { slug: 'GrandOceanCayA150-130', name: 'Grand Ocean Cay A 150-130' },
    { slug: 'GrandOceanCayA165-130', name: 'Grand Ocean Cay A 165-130' },
    { slug: 'GrandOceanCayA180-130', name: 'Grand Ocean Cay A 180-130' },
    { slug: 'GrandNassauA165XLD', name: 'Grand Nassau A 165 XLD' },
    { slug: 'GrandNassauA180XLD', name: 'Grand Nassau A 180 XLD' },
    { slug: 'GrandFreeportA180XLD', name: 'Grand Freeport A 180 XLD' },
    { slug: 'BahiaA150', name: 'Bahía A 150' },
    { slug: 'BahiaA160', name: 'Bahía A 160' },
    { slug: 'GrandBahiaA180-68', name: 'Grand Bahía A 180-68' },
    { slug: 'WhiteIslandA180-150conReposera', name: 'White Island A 180-150 con Reposera' },
    { slug: 'WhiteIslandA175-130', name: 'White Island A 175-130' },
    { slug: 'WhiteIslandA180-150', name: 'White Island A 180-150' },
    { slug: 'WhiteOceanCayA180-150', name: 'White Ocean Cay A 180-150' },
  ].map((m) => createPendingProduct({
    slug: m.slug,
    displayName: m.name,
    category: 'hidromasajesdobles',
    categoryName: 'Hidromasajes Dobles',
    collection: m.name.split(' ')[0],
    legacyUrl: `/hidromasajesdobles/${m.slug}`,
    imageUrl: '/images/product-02.jpg',
  })),

  // ==========================================
  // 3. HIDROMASAJES ESQUINEROS (7 modelos)
  // ==========================================
  ...[
    { slug: 'ParadiseSandG140', name: 'Paradise Sand G 140' },
    { slug: 'ParadiseStone140', name: 'Paradise Stone 140' },
    { slug: 'ParadiseBeachG130D', name: 'Paradise Beach G 130 D' },
    { slug: 'ParadiseBeachG150D', name: 'Paradise Beach G 150 D' },
    { slug: 'ParadiseBeachA150D', name: 'Paradise Beach A 150 D' },
    { slug: 'ParadiseBeachA160D', name: 'Paradise Beach A 160 D' },
    { slug: 'ParadiseBeachMinimalistaA150', name: 'Paradise Beach Minimalista A 150' },
  ].map((m) => createPendingProduct({
    slug: m.slug,
    displayName: m.name,
    category: 'hidromasajesesquineros',
    categoryName: 'Hidromasajes Esquineros',
    collection: 'Paradise',
    legacyUrl: `/hidromasajesesquineros/${m.slug}`,
    imageUrl: '/images/product-03.jpg',
  })),

  // ==========================================
  // 4. MINIPISCINAS (15 modelos)
  // ==========================================
  {
    id: 'white-ocean-bay-a-180-150',
    slug: 'WhiteOceanBayA180-150',
    legacyUrl: '/minipiscinas/WhiteOceanBayA180-150',
    displayName: 'White Ocean Bay A 180-150',
    category: 'minipiscinas',
    categoryName: 'Minipiscinas',
    collection: 'Línea White Ocean Bay',
    shortDescription: 'Minipiscina SPA de alta capacidad con hidromasaje integral, cromoterapia y doble reposera anatómica.',
    description: 'La minipiscina White Ocean Bay A 180-150 representa el pináculo del bienestar hidroterápico White Bahamas. Diseñada para instalación interior en salas de baño máster o exterior en terrazas y decks privados, ofrece una experiencia inmersiva con cascadas de recirculación, múltiples zonas de hidromasaje y luces LED de relajación.',
    dimensionsCm: {
      length: 180,
      width: 150,
      depth: 55,
    },
    capacityPeople: 2,
    shape: 'Rectangular con reposera dual',
    installation: ['Deck exterior', 'Encastrada en piso', 'Con faldón de madera o acrílico'],
    indoorOutdoor: 'ambos',
    material: 'Acrílico sanitario termoformado de 4.5mm con refuerzo estructural de poliuretano y fibra',
    images: [
      {
        url: '/images/im00347.jpg',
        alt: 'Minipiscina White Bahamas White Ocean Bay A 180-150 con luces y jets cromados',
        isPrimary: true,
        rightsVerified: true,
        caption: 'White Ocean Bay A 180-150 - Especial 10 con luces',
      },
      {
        url: '/images/im00348.jpg',
        alt: 'White Ocean Bay A 180-150 en configuración Premium 16 con luces subacuáticas',
        rightsVerified: true,
        caption: 'White Ocean Bay A 180-150 - Premium 16 con luces',
      },
      {
        url: '/images/im00349.jpg',
        alt: 'White Ocean Bay A 180-150 versión FULL SPA 42 con doble circuito y cromoterapia',
        rightsVerified: true,
        caption: 'White Ocean Bay A 180-150 - FULL SPA 42 con Luces',
      },
    ],
    configurations: [
      {
        id: 'especial-10-luces',
        name: 'Especial 10 con Luces',
        jets: 10,
        pump: 'Bomba auto-drenante 1 HP',
        lighting: '2 Luces LED subacuáticas con cromoterapia',
        features: [
          '10 Jets de hidroterapia con dirección regulable',
          '2 Focos LED de cromoterapia sumergible con ciclos de color',
          'Bomba auto-drenante de 1 HP protegida térmicamente',
          '2 Pulsadores neumáticos de control independientes',
          'Vistas cromadas de grado marino',
          'Sistema de succión de seguridad y filtrado de residuos',
        ],
        imageUrl: '/images/im00347.jpg',
      },
      {
        id: 'premium-16-luces',
        name: 'Premium 16 con Luces',
        jets: 16,
        pump: 'Bomba auto-drenante 1.5 HP',
        lighting: 'Iluminación cromoterapia perimetral LED',
        features: [
          '16 Jets de masaje distribuidos en ambas posiciones',
          'Bomba de alto rendimiento 1.5 HP silenciosa',
          'Regulación de aire venturi de doble circuito',
          'Iluminación LED multicromática sincronizada',
        ],
        imageUrl: '/images/im00348.jpg',
      },
      {
        id: 'full-spa-42-luces',
        name: 'FULL SPA 42 con Luces',
        jets: 24,
        pump: 'Doble bomba auto-drenante (hidroterapia + soplador de aire)',
        lighting: 'Cromoterapia LED integral',
        features: [
          'Sistema completo FULL SPA con 42 componentes activos',
          'Circuito de hidroterapia por agua + masaje por burbujas de aire (blower)',
          'Almohadillas de apoyo cervical impermeables',
          'Regulación digital o neumática de última generación',
        ],
        imageUrl: '/images/im00349.jpg',
      },
    ],
    compatibleAccessoryIds: ['tapa-termica', 'calefactor-electrico', 'ozonizador'],
    techPdfUrl: null,
    technicalRequirements: 'Tendido eléctrico dedicado 220V/32A. Base nivelada de hormigón apta para carga con agua (aprox. 450-500 kg total). Toma de llenado y desagote 63mm.',
    warrantyReference: 'Garantía oficial White Bahamas de fábrica.',
    available: true,
    seo: {
      title: 'Minipiscina White Ocean Bay A 180-150 (180x150x55 cm) | White Bahamas',
      description: 'Minipiscina SPA White Ocean Bay A 180-150. Medidas reales 180x150x55 cm. Opciones 10, 16 y 42 componentes con luces y cromoterapia. Presupuesto oficial White Bahamas.',
      canonical: 'https://whitebahamas.com.ar/minipiscinas/WhiteOceanBayA180-150',
    },
    verificationStatus: 'verified',
    verificationSource: 'Inspección pública directa en sitio oficial White Bahamas (URL histórica /minipiscinas/WhiteOceanBayA180-150)',
  },
  // Resto de las minipiscinas (14 modelos pendientes de confirmación técnica)
  ...[
    { slug: 'KingIslandA290', name: 'King Island A 290' },
    { slug: 'RoyalBahamasOctogonalA230-90', name: 'Royal Bahamas Octogonal A 230-90' },
    { slug: 'RoyalBahamasA230-105conReposera', name: 'Royal Bahamas A 230-105 con Reposera' },
    { slug: 'RoyalBahamasA230-90conReposera', name: 'Royal Bahamas A 230-90 con Reposera' },
    { slug: 'GrandBahamasA195-73conReposera', name: 'Grand Bahamas A 195-73 con Reposera' },
    { slug: 'GrandBahamasA195-85conReposera', name: 'Grand Bahamas A 195-85 con Reposera' },
    { slug: 'GrandBahamasMinimalistaA170-60', name: 'Grand Bahamas Minimalista A 170-60' },
    { slug: 'GrandBahamasMinimalistaA180-60', name: 'Grand Bahamas Minimalista A 180-60' },
    { slug: 'GrandBahamasMinimalistaA195-50', name: 'Grand Bahamas Minimalista A 195-50' },
    { slug: 'GrandBahamasMinimalistaA195-65', name: 'Grand Bahamas Minimalista A 195-65' },
    { slug: 'GrandIslandA180-87', name: 'Grand Island A 180-87' },
    { slug: 'GrandBahamasRedondaA200', name: 'Grand Bahamas Redonda A 200' },
    { slug: 'GrandBahiaA180-65', name: 'Grand Bahía A 180-65' },
    { slug: 'WhiteOceanBayA180-130', name: 'White Ocean Bay A 180-130' },
  ].map((m) => createPendingProduct({
    slug: m.slug,
    displayName: m.name,
    category: 'minipiscinas',
    categoryName: 'Minipiscinas',
    collection: m.name.split(' ')[0],
    legacyUrl: `/minipiscinas/${m.slug}`,
    imageUrl: '/images/product-04.jpg',
  })),
];

// Helper para crear registros tipados con verificación 'pending'
function createPendingProduct(params: {
  slug: string;
  displayName: string;
  category: Product['category'];
  categoryName: string;
  collection: string;
  legacyUrl: string;
  imageUrl: string;
}): Product {
  const id = params.slug.toLowerCase().replace(/[^a-z0-9]/g, '-');
  return {
    id,
    slug: params.slug,
    legacyUrl: params.legacyUrl,
    displayName: params.displayName,
    category: params.category,
    categoryName: params.categoryName,
    collection: params.collection,
    shortDescription: `Modelo ${params.displayName} de White Bahamas Argentina. Fabricación personalizada y asesoramiento técnico a medida.`,
    description: `El modelo ${params.displayName} pertenece a la familia de ${params.categoryName.toLowerCase()} de White Bahamas. Consultá con nuestro equipo de ingeniería comercial por especificaciones técnicas, planos y opciones de equipamiento compatibles para tu espacio.`,
    dimensionsCm: {
      length: null,
      width: null,
      depth: null,
    },
    capacityPeople: null,
    shape: null,
    installation: ['Encastrada', 'Bajo proyecto arquitectónico'],
    indoorOutdoor: params.category === 'minipiscinas' ? 'ambos' : 'interior',
    material: 'Acrílico sanitario termoformado de alta densidad',
    images: [
      {
        url: params.imageUrl,
        alt: `${params.displayName} - ${params.categoryName} White Bahamas`,
        isPrimary: true,
        rightsVerified: true,
        caption: `Fotografía de referencia de la línea ${params.categoryName}`,
      },
    ],
    configurations: [],
    compatibleAccessoryIds: [],
    techPdfUrl: null,
    technicalRequirements: 'Requerimientos técnicos particulares provistos bajo consulta técnica según proyecto.',
    warrantyReference: 'Garantía oficial White Bahamas sujeta a términos vigentes de fábrica.',
    available: true,
    seo: {
      title: `${params.displayName} | White Bahamas Argentina`,
      description: `Conocé el modelo ${params.displayName} de ${params.categoryName}. Fabricación a medida y asesoramiento comercial personalizado en White Bahamas.`,
      canonical: `https://whitebahamas.com.ar${params.legacyUrl}`,
    },
    verificationStatus: 'pending',
    verificationSource: 'Inventario maestro White Bahamas (pendiente de exportación de ficha técnica individual)',
  };
}

// Funciones selectoras
export function getAllProducts(): Product[] {
  return ALL_PRODUCTS;
}

export function getProductsByCategory(category: string): Product[] {
  return ALL_PRODUCTS.filter((p) => p.category === category);
}

export function getProductBySlug(category: string, slug: string): Product | undefined {
  return ALL_PRODUCTS.find(
    (p) => p.category.toLowerCase() === category.toLowerCase() && p.slug.toLowerCase() === slug.toLowerCase()
  );
}

export function getProductByHistoricalSlug(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getVerifiedProducts(): Product[] {
  return ALL_PRODUCTS.filter((p) => p.verificationStatus === 'verified');
}

export const CATEGORIES_INFO = [
  {
    id: 'hidromasajesindividuales',
    name: 'Hidromasajes Individuales',
    slug: 'hidromasajesindividuales',
    shortDescription: 'Líneas limpias, ergonomía milimétrica y máxima relajación para espacios privados.',
    itemCount: 26,
    imageUrl: '/images/product-01.jpg',
  },
  {
    id: 'hidromasajesdobles',
    name: 'Hidromasajes Dobles',
    slug: 'hidromasajesdobles',
    shortDescription: 'Confort compartido con dobles apoyos, circuitos diferenciados y amplitud superior.',
    itemCount: 18,
    imageUrl: '/images/product-02.jpg',
  },
  {
    id: 'hidromasajesesquineros',
    name: 'Hidromasajes Esquineros',
    slug: 'hidromasajesesquineros',
    shortDescription: 'Geometría angular optimizada para maximizar metros cuadrados y luminosidad.',
    itemCount: 7,
    imageUrl: '/images/product-03.jpg',
  },
  {
    id: 'minipiscinas',
    name: 'Minipiscinas SPA',
    slug: 'minipiscinas',
    shortDescription: 'Instalaciones exteriores e interiores de alta capacidad, cromoterapia y relax integral.',
    itemCount: 15,
    imageUrl: '/images/product-04.jpg',
  },
  {
    id: 'sauna',
    name: 'Sauna Seco',
    slug: 'sauna',
    shortDescription: 'Termoterapia tradicional en maderas seleccionadas con generadores de calor protegidos.',
    itemCount: null,
    imageUrl: '/images/menu-sauna.png',
  },
  {
    id: 'vapor',
    name: 'Baño de Vapor',
    slug: 'vapor',
    shortDescription: 'Generadores de vapor humectante para desintoxicación, vías respiratorias y calma.',
    itemCount: null,
    imageUrl: '/images/menu-bano-vapor.png',
  },
];
