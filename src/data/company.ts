export interface CompanyInfo {
  name: string;
  tagline: string;
  phoneRaw: string;
  phoneFormatted: string;
  whatsappUrl: string;
  email: string;
  showroomAddress: string;
  showroomCity: string;
  showroomId: string;
  hoursNote: string;
}

export const COMPANY_INFO: CompanyInfo = {
  name: 'White Bahamas Argentina',
  tagline: 'Arquitectura de bienestar y fabricación de hidromasajes, minipiscinas y SPA.',
  phoneRaw: '5491124967000',
  phoneFormatted: '(+54 9) 11 2496-7000',
  whatsappUrl: 'https://wa.me/5491124967000',
  email: 'info@whitebahamas.com',
  showroomAddress: 'Av. Cabildo 4769, 4º B',
  showroomCity: 'Ciudad Autónoma de Buenos Aires (CABA), CP 1429, Argentina',
  showroomId: 'Cabildo 4769 4B',
  hoursNote: 'Atención personalizada y asesoramiento técnico para profesionales y particulares previa coordinación.',
};

export interface TherapyItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  benefits: string[];
  recommendedCategory: string;
  iconName: string;
}

export const THERAPIES: TherapyItem[] = [
  {
    id: 'hidroterapia',
    name: 'Hidroterapia',
    subtitle: 'Relajación y descarga articular mediante agua temperada y jets dinámicos',
    description: 'La combinación de flotación en agua tibia y presión orientada en zonas clave disminuye la tensión miofascial, estimula la circulación periférica y favorece un estado de relajación mental profundo tras el estrés diario.',
    benefits: [
      'Alivio de sobrecargas musculares en zona lumbar y cervical',
      'Disminución del impacto gravitacional en articulaciones',
      'Estimulación de la circulación y oxigenación celular',
      'Inducción a un descanso nocturno reparador',
    ],
    recommendedCategory: 'hidromasajesindividuales',
    iconName: 'Droplets',
  },
  {
    id: 'cromoterapia',
    name: 'Cromoterapia Subacuática',
    subtitle: 'Armonía visual mediante espectros lumínicos LED sumergibles',
    description: 'La iluminación subacuática secuencial crea una atmósfera sensorial inmersiva. Tonos cálidos (ámbar y magenta) para revitalización energética o tonos fríos (azul océano y aguamarina) para reducir la sobreestimulación nerviosa.',
    benefits: [
      'Ambiente meditativo y desconexión tecnológica',
      'Personalización del estado anímico mediante ciclos de color',
      'Realce estético del volumen del agua en baños oscurecidos',
    ],
    recommendedCategory: 'minipiscinas',
    iconName: 'Sun',
  },
  {
    id: 'vapor',
    name: 'Baño de Vapor Humectante',
    subtitle: 'Purificación dérmica y apertura de vías aéreas en calor húmedo',
    description: 'Ambientes herméticos con temperatura controlada entre 40°C y 45°C y 100% de humedad relativa, proporcionando una exfoliación natural y alivio de tensiones respiratorias.',
    benefits: [
      'Dilatación de poros y eliminación de impurezas dérmicas',
      'Humectación de las vías respiratorias superiores',
      'Relajación profunda del tono muscular',
    ],
    recommendedCategory: 'vapor',
    iconName: 'Cloud',
  },
  {
    id: 'sauna',
    name: 'Sauna Finlandés Seco',
    subtitle: 'Termoterapia clásica en maderas nobles atérmicas',
    description: 'Calor seco entre 75°C y 90°C con baja humedad. Estimula la respuesta cardiovascular controlada, facilitando la sudoración profunda y una posterior sensación de ligereza corporal.',
    benefits: [
      'Eliminación de toxinas por transpiración activa',
      'Estimulación del sistema circulatorio',
      'Flexibilidad articular y distensión muscular',
    ],
    recommendedCategory: 'sauna',
    iconName: 'Flame',
  },
  {
    id: 'aromaterapia',
    name: 'Aromaterapia',
    subtitle: 'Esencias botánicas integradas a la corriente de aire y vapor',
    description: 'Difusión de aceites esenciales puros (eucalipto, lavanda, bergamota o menta) en el circuito de vapor o cascada para una experiencia multisensorial integradora.',
    benefits: [
      'Despeje y frescura respiratoria',
      'Efecto calmante ante estados de ansiedad y fatiga',
      'Enriquecimiento del ritual diario de bienestar',
    ],
    recommendedCategory: 'vapor',
    iconName: 'Sparkles',
  },
  {
    id: 'ozonoterapia',
    name: 'Ozonoterapia y Purificación',
    subtitle: 'Microburbujas de oxígeno enriquecido y desinfección natural',
    description: 'El ozono inyectado en el circuito de agua actúa como un bactericida natural sin olor ni irritación, manteniendo el agua cristalina y oxigenando la piel de forma delicada.',
    benefits: [
      'Purificación microbiológica sin sobredosis de químicos',
      'Piel más suave y desodorizada tras el baño',
      'Menor mantenimiento del agua en minipiscinas',
    ],
    recommendedCategory: 'minipiscinas',
    iconName: 'ShieldCheck',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
  category: 'instalacion' | 'mantenimiento' | 'compra' | 'garantia';
}

export const FAQS: FaqItem[] = [
  {
    question: '¿Qué requerimientos técnicos se necesitan para instalar un hidromasaje?',
    answer: 'La mayoría de nuestros modelos individuales requieren únicamente una conexión monofásica de 220V con disyuntor diferencial independiente y jabalina a tierra, un desagüe cloacal de 50 mm y provisión de agua fría y caliente de 1/2". En minipiscinas de mayor porte se evalúa además la capacidad de carga estructural del contrapiso o losa (generalmente entre 400 y 550 kg/m² con agua y personas).',
    category: 'instalacion',
  },
  {
    question: '¿Realizan fabricación a medida para proyectos arquitectónicos especiales?',
    answer: 'Sí. Contamos con flexibilidad de configuración en ubicación de bombas, disposición de jets, faldones de terminación y perforaciones para griferías cascada según las necesidades del plano del arquitecto o desarrollador.',
    category: 'compra',
  },
  {
    question: '¿Cómo es el proceso de entrega y logística hacia el interior del país?',
    answer: 'Coordinamos envíos a todo el territorio argentino mediante expresos y empresas de transporte con seguro de carga. Cada unidad se despacha con embalaje reforzado de protección para acrílico y componentes electromecánicos.',
    category: 'compra',
  },
  {
    question: '¿Qué mantenimiento preventivo exige el sistema de conductos y bombas?',
    answer: 'Nuestras bombas son autodrenantes, lo que previene el estancamiento de agua en las cañerías. Recomendamos una limpieza mensual llenando la bañera con agua tibia y solución desinfectante no espumosa para mantener el circuito interno libre de residuos calcáreos y grasas corporales.',
    category: 'mantenimiento',
  },
  {
    question: '¿Cuál es el alcance de la garantía de fábrica?',
    answer: 'White Bahamas respalda la integridad estructural del casco de acrílico sanitario y el correcto funcionamiento electromecánico de sus bombas y componentes de hidromasaje bajo condiciones normales de uso e instalación conforme al manual técnico provisto.',
    category: 'garantia',
  },
];
