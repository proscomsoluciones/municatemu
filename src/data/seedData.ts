export interface Tramite {
  id: string;
  titulo: string;
  slug: string;
  resumen: string;
  descripcion: string;
  requisitos: string[];
  costo: string;
  plazo: string;
  categoria: 'Vehículos' | 'Comercio' | 'Social' | 'Obras' | 'Jurídico' | 'General';
  icono: string;
  url_destino: string;
  nombre_plataforma: string;
  es_externo: boolean;
  palabras_clave: string[];
  destacado: boolean;
  estado_contenido?: 'Publicado' | 'Contenido Pendiente de Actualizar';
}

export interface Noticia {
  id: string;
  titulo: string;
  slug: string;
  bajada: string;
  cuerpo: string;
  imagen_url: string;
  imagen_alt: string;
  categoria: 'Convocatorias' | 'Deportes' | 'Cultura' | 'Obras' | 'Salud' | 'Educación' | 'Avisos';
  fecha_publicacion: string;
  fecha_vigencia?: string;
  es_aviso_urgente?: boolean;
}

export interface Documento {
  id: string;
  titulo: string;
  tipo: 'Decreto' | 'Ordenanza' | 'Rol' | 'Cuenta Pública' | 'PLADECO';
  archivo_url: string;
  fecha: string;
  anio: number;
  resumen: string;
  tamano: string;
  formato: string;
  contiene_datos_personales: boolean;
  fecha_retiro_programado?: string;
}

export interface Unidad {
  id: string;
  nombre: string;
  responsable: string;
  descripcion: string;
  telefono: string;
  correo: string;
  direccion: string;
  categoria: 'Alcaldía' | 'Administración' | 'Desarrollo' | 'Servicios' | 'Fiscalización';
}

export interface GlobalConfig {
  nombre_municipio: string;
  region: string;
  direccion_central: string; // PENDIENTE
  horario_atencion: string; // PENDIENTE
  telefono_central: string; // PENDIENTE
  correo_contacto: string;
  alerta_emergencia?: {
    activa: boolean;
    titulo: string;
    mensaje: string;
    tipo: 'info' | 'alerta' | 'urgente';
  };
  redes_sociales: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

export const GLOBAL_CONFIG: GlobalConfig = {
  nombre_municipio: 'I. Municipalidad de Catemu',
  region: 'Región de Valparaíso, Chile',
  direccion_central: 'PENDIENTE',
  horario_atencion: 'PENDIENTE',
  telefono_central: 'PENDIENTE',
  correo_contacto: 'contacto@municatemu.cl',
  alerta_emergencia: {
    activa: true,
    titulo: 'Aviso importante sobre Permisos de Circulación 2026',
    mensaje: 'Recuerda que ya se encuentra habilitado el pago online del Permiso de Circulación a través de la plataforma oficial SEM.',
    tipo: 'info'
  },
  redes_sociales: {
    facebook: 'https://facebook.com/municatemu',
    instagram: 'https://instagram.com/municatemu',
    youtube: 'https://youtube.com/municatemu'
  }
};

export const SEED_TRAMITES: Tramite[] = [
  {
    id: 'tramite-1',
    titulo: 'Permiso de Circulación 2026',
    slug: 'permiso-de-circulacion',
    resumen: 'Paga online el Permiso de Circulación de tu vehículo de forma rápida y segura en la plataforma oficial SEM del Estado.',
    descripcion: 'El Permiso de Circulación es el documento que permite que los automóviles, camionetas, motos y otros vehículos puedan circular por las calles del país de manera legal. Puedes realizar el pago 100% en línea si tu vehículo pagó el permiso anterior en Catemu o si registras la traslación de dominio.',
    requisitos: [
      'Permiso de circulación anterior (año 2025) pagado',
      'Seguro Obligatorio de Accidentes Personales (SOAP) vigente al 2027',
      'Revisión técnica y de gases al día o certificado de homologación',
      'No registrar multas de tránsito impagas en el Registro Civil'
    ],
    costo: 'Según tasación fiscal del SII del vehículo',
    plazo: 'Inmediato al completar la verificación en línea',
    categoria: 'Vehículos',
    icono: 'Car',
    url_destino: 'https://www.sem2.gob.cl/tramites/permisos-de-circulacion-2c/69050900/buscar',
    nombre_plataforma: 'SEM (Sitio Oficial del Estado)',
    es_externo: true,
    palabras_clave: ['permiso', 'circulación', 'auto', 'vehículo', 'soap', 'patente', 'sem'],
    destacado: true
  },
  {
    id: 'tramite-2',
    titulo: 'Patentes Municipales',
    slug: 'patentes-municipales',
    resumen: 'Declaración y pago en línea de patentes comerciales, industriales, profesionales y de alcoholes.',
    descripcion: 'Servicio para la renovación y pago de patentes comerciales en la comuna de Catemu. Todo negocio o profesional independiente que ejerza una actividad lucrativa debe contar con su patente al día.',
    requisitos: [
      'Rut de la empresa o persona natural',
      'Declaración de capital propio o formulario 22 del SII',
      'Certificado de recepción definitiva de la propiedad (si corresponde)'
    ],
    costo: 'Según capital propio declarado ante el SII',
    plazo: 'Hasta 48 horas hábiles para validación',
    categoria: 'Comercio',
    icono: 'Store',
    url_destino: 'https://www.sem2.gob.cl/tramites/patentes-municipales/69050900/buscar',
    nombre_plataforma: 'SEM (Sitio Oficial del Estado)',
    es_externo: true,
    palabras_clave: ['patente', 'comercial', 'pyme', 'negocio', 'empresa', 'sem'],
    destacado: true
  },
  {
    id: 'tramite-3',
    titulo: 'Registro Social de Hogares (RSH)',
    slug: 'registro-social-de-hogares',
    resumen: 'Solicita el ingreso, actualización o descarga de la cartola del Registro Social de Hogares.',
    descripcion: 'El Registro Social de Hogares es un sistema de información cuyo fin es apoyar los procesos de selección de beneficiarios de las prestaciones sociales de programas estatales y municipales.',
    requisitos: [
      'ClaveÚnica',
      'Cédula de identidad vigente',
      'Comprobante de domicilio (boleta de servicio básico a nombre de un integrante)'
    ],
    costo: 'Gratuito',
    plazo: 'Cartola inmediata; solicitudes de cambio toman hasta 30 días',
    categoria: 'Social',
    icono: 'Users',
    url_destino: 'https://www.registrosocial.gob.cl',
    nombre_plataforma: 'gob.cl (Ministerio de Desarrollo Social)',
    es_externo: true,
    palabras_clave: ['rsh', 'registro social', 'hogares', 'cartola', 'beneficios', 'subsidios', 'dideco'],
    destacado: true
  },
  {
    id: 'tramite-4',
    titulo: 'Trámites en Línea y Ventanilla Única',
    slug: 'tramites-en-linea',
    resumen: 'Plataforma digital para la solicitud de certificados, peticiones vecinales y seguimiento de solicitudes.',
    descripcion: 'Ventanilla virtual municipal para ingresar solicitudes vecinales, certificados de residencia, audiencias con autoridades y seguimiento en tiempo real.',
    requisitos: [
      'ClaveÚnica o Registro de Usuario Municipal',
      'Correo electrónico activo'
    ],
    costo: 'Según el certificado solicitado',
    plazo: '3 a 5 días hábiles',
    categoria: 'General',
    icono: 'FileText',
    url_destino: 'https://municatemu.chilesinpapeleo.cl/home/index',
    nombre_plataforma: 'ChileSinPapeleo (Plataforma Oficial)',
    es_externo: true,
    palabras_clave: ['ventanilla', 'certificados', 'chile sin papeleo', 'solicitudes'],
    destacado: true
  },
  {
    id: 'tramite-5',
    titulo: 'Validar un Documento Digital',
    slug: 'validar-documento',
    resumen: 'Verifica la autenticidad y firma digital de certificados expedidos por la Municipalidad.',
    descripcion: 'Herramienta de verificación de validez para certificados y documentos emitidos mediante firma electrónica avanzada por la Municipalidad de Catemu.',
    requisitos: [
      'Código de verificación o FOLIO ubicado al pie del documento impreso o PDF'
    ],
    costo: 'Gratuito',
    plazo: 'Instantáneo',
    categoria: 'General',
    icono: 'CheckCircle2',
    url_destino: 'https://www.sem.gob.cl/pago/validacion/',
    nombre_plataforma: 'SEM (Sitio Oficial del Estado)',
    es_externo: true,
    palabras_clave: ['validar', 'verificar', 'folio', 'firma digital', 'autenticidad'],
    destacado: false
  },
  {
    id: 'tramite-6',
    titulo: 'Notificaciones del Juzgado de Policía Local',
    slug: 'notificaciones-jpl',
    resumen: 'Consulta el estado de causas, citaciones y pagos de partes de tránsito en el JPL de Catemu.',
    descripcion: 'Página informativa para vecinos y conductores sobre el estado de citaciones, fechas de audiencia y modalidades de pago ante el Juzgado de Policía Local de Catemu.',
    requisitos: [
      'Número de causa o RUT del citado',
      'Patente del vehículo en caso de infracción de tránsito'
    ],
    costo: 'Según resolución del tribunal',
    plazo: 'Atención presencial en horario de juzgado',
    categoria: 'Jurídico',
    icono: 'Scale',
    url_destino: '/tramites/notificaciones-jpl',
    nombre_plataforma: 'Municipalidad de Catemu (Interno)',
    es_externo: false,
    palabras_clave: ['juzgado', 'jpl', 'partes', 'partes de tránsito', 'multas', 'citación'],
    destacado: false
  },
  {
    id: 'tramite-7',
    titulo: 'Aseo Domiciliario y Derechos de Extracción',
    slug: 'aseo-domiciliario',
    resumen: 'Información sobre exenciones, calendarios de recolección y pago de derechos de aseo.',
    descripcion: 'Contenido explicativo sobre la tarifa anual de aseo domiciliario, causales de exención social ante DIDECO y calendario de rutas del camión recolector por sectores de Catemu.',
    requisitos: [
      'Rol de Avalúo de la propiedad',
      'Ficha RSH para postulantes a exención'
    ],
    costo: 'Según avalúo fiscal y ordenanza local',
    plazo: 'Pago en 4 cuotas anuales',
    categoria: 'General',
    icono: 'Trash2',
    url_destino: '/tramites/aseo-domiciliario',
    nombre_plataforma: 'Municipalidad de Catemu (Interno)',
    es_externo: false,
    palabras_clave: ['aseo', 'basura', 'recolección', 'exención', 'derechos de aseo'],
    destacado: false,
    estado_contenido: 'Contenido Pendiente de Actualizar'
  },
  {
    id: 'tramite-8',
    titulo: 'Certificados de Edificación (DOM)',
    slug: 'certificados-edificacion',
    resumen: 'Certificados de Informaciones Previas (CIP), recepción definitiva y permisos de obras.',
    descripcion: 'Trámites ante la Dirección de Obras Municipales (DOM) para regulación de edificaciones, subdivisiones rurales y certificados de informaciones previas en la comuna.',
    requisitos: [
      'Rol de la propiedad',
      'Plano firmado por arquitecto patrocinante (cuando corresponda)'
    ],
    costo: 'Según arancel de la Ley General de Urbanismo y Construcciones',
    plazo: '15 a 30 días hábiles',
    categoria: 'Obras',
    icono: 'Building2',
    url_destino: '/tramites/certificados-edificacion',
    nombre_plataforma: 'Municipalidad de Catemu (Interno)',
    es_externo: false,
    palabras_clave: ['dom', 'obras', 'cip', 'edificación', 'construcción', 'permiso de obra'],
    destacado: false,
    estado_contenido: 'Contenido Pendiente de Actualizar'
  }
];

export const SEED_NOTICIAS: Noticia[] = [
  {
    id: 'noticia-1',
    titulo: 'Abren postulaciones a las Subvenciones Municipales 2026 para organizaciones comunitarias',
    slug: 'subvenciones-municipales-2026-organizaciones-comunitarias',
    bajada: 'Juntas de vecinos, clubes de adulto mayor y agrupaciones funcionales de Catemu podrán postular proyectos de desarrollo social y comunitario.',
    cuerpo: `La Municipalidad de Catemu informa a todas las directivas de organizaciones comunitarias con personalidad jurídica vigente que a contar de esta semana se encuentra abierto el proceso de postulación a Fondos Concursables de Subvención Municipal 2026.

Las bases y formularios de postulación se encuentran disponibles para ser descargados directamente desde este portal o retirados presencialmente en las oficinas de DIDECO.

El objetivo de este fondo es financiar proyectos de infraestructura comunitaria, equipamiento, talleres participativos y fortalecimiento del tejido social en los diversos sectores rurales y urbanos de la comuna.`,
    imagen_url: '/images/noticias/subvenciones.jpg',
    imagen_alt: 'Vecinos participando en reunión comunitaria en centro social de Catemu',
    categoria: 'Convocatorias',
    fecha_publicacion: '2026-03-15',
    fecha_vigencia: '2026-04-30',
    es_aviso_urgente: true
  },
  {
    id: 'noticia-2',
    titulo: 'Lanzamiento oficial de las Becas Deportivas Municipales 2026',
    slug: 'becas-deportivas-municipales-2026',
    bajada: 'Apoyo económico directo a deportistas destacados de la comuna que compiten a nivel regional y nacional.',
    cuerpo: `Con el propósito de incentivar el talento deportivo local, la Alcaldía junto al Concejo Municipal han dispuesto la apertura de la convocatoria para las Becas Deportivas 2026.

Este beneficio está dirigido a atletas y deportistas de distintas disciplinas que representen a Catemu en competencias de alto rendimiento o ligas federadas. Los requisitos contemplan certificado de residencia, acreditación de logros deportivos del último año y evaluación socioeconómica por parte de la DIDECO.`,
    imagen_url: '/images/noticias/deportes.jpg',
    imagen_alt: 'Jóvenes deportistas practicando atletismo en el recinto deportivo municipal de Catemu',
    categoria: 'Deportes',
    fecha_publicacion: '2026-03-10'
  },
  {
    id: 'noticia-3',
    titulo: 'Convocatoria a Subvención 2026 para Clubes de Huasos de Catemu',
    slug: 'subvencion-2026-clubes-de-huasos',
    bajada: 'Fondo especial destinado a la preservación de las tradiciones del campo y el patrimonio ecuestre del Valle del Aconcagua.',
    cuerpo: `El municipio reafirma su compromiso con las costumbres tradicionales del Valle del Aconcagua abriendo la línea de subvenciones destinadas a clubes de huasos y agrupaciones de la cultura criolla local.

Los fondos permitirán la mejora de medialunas, adquisición de mantención para equipamiento folclórico y realización de rodeos y fiestas costumbristas autorizadas en la comuna.`,
    imagen_url: '/images/noticias/huasos.jpg',
    imagen_alt: 'Integrantes de club de huasos luciendo vestimenta tradicional en desfile de Catemu',
    categoria: 'Cultura',
    fecha_publicacion: '2026-03-05'
  },
  {
    id: 'noticia-4',
    titulo: 'Fondo de Apoyo a la Subvención 2026 para Clubes de Fútbol Local',
    slug: 'subvencion-2026-clubes-de-futbol',
    bajada: 'Inversión en indumentaria, arbitrajes y mejoramiento de canchas de la liga de fútbol rural y urbana.',
    cuerpo: `Los clubes de fútbol de Catemu podrán acceder a recursos de subvención municipal para el desarrollo del campeonato 2026. La iniciativa busca potenciar el deporte formativo en niñas, niños y adultos, financiando implementación deportiva, materiales y pago de arbitrajes.`,
    imagen_url: '/images/noticias/futbol.jpg',
    imagen_alt: 'Cancha de fútbol amateur en Catemu con jugadores durante un encuentro deportivo',
    categoria: 'Deportes',
    fecha_publicacion: '2026-03-01'
  }
];

export const SEED_DOCUMENTOS: Documento[] = [
  {
    id: 'doc-1',
    titulo: 'Plan de Desarrollo Comunal (PLADECO) Catemu 2024 - 2028',
    tipo: 'PLADECO',
    archivo_url: '/documentos/pladeco_catemu_2024_2028.pdf',
    fecha: '2024-01-15',
    anio: 2024,
    resumen: 'Instrumento de planificación estratégica municipal que fija las líneas priorizadas de inversión, ordenamiento territorial y desarrollo comunitario para la Comuna de Catemu.',
    tamano: '4.8 MB',
    formato: 'PDF',
    contiene_datos_personales: false
  },
  {
    id: 'doc-2',
    titulo: 'Cuenta Pública Institucional Gestión 2025',
    tipo: 'Cuenta Pública',
    archivo_url: '/documentos/cuenta_publica_catemu_2025.pdf',
    fecha: '2025-04-28',
    anio: 2025,
    resumen: 'Balance general de la gestión municipal, presupuestos ejecutados, avances en infraestructura sanitaria, caminos rurales y proyectos sociales realizados durante el periodo 2025.',
    tamano: '8.2 MB',
    formato: 'PDF',
    contiene_datos_personales: false
  },
  {
    id: 'doc-3',
    titulo: 'Ordenanza de Limpieza, Medio Ambiente y Cuidado de Espacios Públicos',
    tipo: 'Ordenanza',
    archivo_url: '/documentos/ordenanza_medio_ambiente_2025.pdf',
    fecha: '2025-09-10',
    anio: 2025,
    resumen: 'Regulaciones comunales sobre manejo de microbasurales, tenencia responsable de mascotas, poda de arbolado urbano y sanciones aplicables por inspectores municipales.',
    tamano: '1.4 MB',
    formato: 'PDF',
    contiene_datos_personales: false
  },
  {
    id: 'doc-4',
    titulo: 'Decreto Exento N° 1420 - Modificación Presupuestaria Sector Educación',
    tipo: 'Decreto',
    archivo_url: '/documentos/decreto_exento_1420_2026.pdf',
    fecha: '2026-02-18',
    anio: 2026,
    resumen: 'Aprobación de la transferencia de fondos municipales suplementarios para el perfeccionamiento docente y arreglos menores en escuelas rurales.',
    tamano: '620 KB',
    formato: 'PDF',
    contiene_datos_personales: false
  },
  {
    id: 'doc-5',
    titulo: 'Rol Registral de Patentes Comerciales 1er Semestre 2026',
    tipo: 'Rol',
    archivo_url: '/documentos/rol_patentes_1semestre_2026.pdf',
    fecha: '2026-01-05',
    anio: 2026,
    resumen: 'Nómina oficial de patentes comerciales activas en la comuna para fines tributarios y de fiscalización.',
    tamano: '2.1 MB',
    formato: 'PDF',
    contiene_datos_personales: true,
    fecha_retiro_programado: '2026-12-31'
  }
];

export const SEED_UNIDADES: Unidad[] = [
  {
    id: 'u-1',
    nombre: 'Alcaldía',
    responsable: 'Rodrigo Díaz Brito (Alcalde)',
    descripcion: 'Máxima autoridad ejecutiva de la Municipalidad de Catemu, encargada de la dirección, administración superior y supervigilancia del funcionamiento municipal.',
    telefono: '34 2 631300',
    correo: 'alcaldia@municatemu.cl',
    direccion: 'PENDIENTE (Marked in global config)',
    categoria: 'Alcaldía'
  },
  {
    id: 'u-2',
    nombre: 'Administración Municipal',
    responsable: 'Naysa Herrera Sánchez (Administradora Municipal)',
    descripcion: 'Coordinación ejecutiva de las distintas direcciones internas y cumplimiento de las metas de gestión municipal.',
    telefono: '34 2 631302',
    correo: 'administracion@municatemu.cl',
    direccion: 'PENDIENTE',
    categoria: 'Administración'
  },
  {
    id: 'u-3',
    nombre: 'Gabinete de Alcaldía',
    responsable: 'Yersia Peña Zamora',
    descripcion: 'Asesoría directa al Alcalde, agenda institucional, relaciones públicas y comunicaciones.',
    telefono: '34 2 631305',
    correo: 'gabinete@municatemu.cl',
    direccion: 'PENDIENTE',
    categoria: 'Alcaldía'
  },
  {
    id: 'u-4',
    nombre: 'Asesoría Jurídica',
    responsable: 'Hugo López de Maturana',
    descripcion: 'Unidad asesora en materias legales para el Alcalde y el Concejo Municipal.',
    telefono: '34 2 631308',
    correo: 'juridico@municatemu.cl',
    direccion: 'PENDIENTE',
    categoria: 'Administración'
  },
  {
    id: 'u-5',
    nombre: 'Secretaría Municipal',
    responsable: 'Leonardo Martínez Abarca (Secretario Municipal)',
    descripcion: 'Ministro de fe de la actuación municipal y del Concejo Municipal. Emisión de decretos y atención del Registro Comunal de Organizaciones.',
    telefono: '34 2 631310',
    correo: 'secretaria@municatemu.cl',
    direccion: 'PENDIENTE',
    categoria: 'Administración'
  },
  {
    id: 'u-6',
    nombre: 'SECPLAC (Secretaría Comunal de Planificación)',
    responsable: 'Nicolás Pereira Negrete',
    descripcion: 'Elaboración de proyectos de inversión pública, postulación a fondos FNDR y diseño del PLADECO.',
    telefono: '34 2 631320',
    correo: 'secplac@municatemu.cl',
    direccion: 'PENDIENTE',
    categoria: 'Desarrollo'
  },
  {
    id: 'u-7',
    nombre: 'DIDECO (Dirección de Desarrollo Comunitario)',
    responsable: 'Andréa Julio Valle',
    descripcion: 'Gestión de programas sociales, Registro Social de Hogares, subsidios, asistencia a familias vulnerables y organizaciones sociales.',
    telefono: '34 2 631330',
    correo: 'dideco@municatemu.cl',
    direccion: 'PENDIENTE',
    categoria: 'Desarrollo'
  },
  {
    id: 'u-8',
    nombre: 'Administración y Finanzas (DAF)',
    responsable: 'Valeria Núñez Cáceres',
    descripcion: 'Gestión del presupuesto municipal, contabilidad, tesorería y adquisiciones.',
    telefono: '34 2 631340',
    correo: 'daf@municatemu.cl',
    direccion: 'PENDIENTE',
    categoria: 'Administración'
  },
  {
    id: 'u-9',
    nombre: 'Dirección de Control',
    responsable: 'Mario Silva Olivares',
    descripcion: 'Fiscalización interna del cumplimiento de las normas legales y legalidad de los actos municipales.',
    telefono: '34 2 631350',
    correo: 'control@municatemu.cl',
    direccion: 'PENDIENTE',
    categoria: 'Fiscalización'
  },
  {
    id: 'u-10',
    nombre: 'Juzgado de Policía Local (JPL)',
    responsable: 'Mario Guerra Estay (Juez Titular)',
    descripcion: 'Administración de justicia local en materias de tránsito, ordenanzas municipales y ley del consumidor.',
    telefono: '34 2 631360',
    correo: 'jpl@municatemu.cl',
    direccion: 'PENDIENTE',
    categoria: 'Fiscalización'
  },
  {
    id: 'u-11',
    nombre: 'Obras Municipales (DOM)',
    responsable: 'Andrés Alfaro Garrido',
    descripcion: 'Aprobación de permisos de edificación, recepción de obras, fiscalización urbanística y catastro comunal.',
    telefono: '34 2 631370',
    correo: 'dom@municatemu.cl',
    direccion: 'PENDIENTE',
    categoria: 'Desarrollo'
  },
  {
    id: 'u-12',
    nombre: 'Licitaciones y Contratación Pública',
    responsable: 'Marcos Lizana Santibáñez',
    descripcion: 'Unidad de compras públicas a través del sistema Mercado Público para insumos y obras municipales.',
    telefono: '34 2 631375',
    correo: 'licitaciones@municatemu.cl',
    direccion: 'PENDIENTE',
    categoria: 'Administración'
  },
  {
    id: 'u-13',
    nombre: 'Medio Ambiente y Sustentabilidad',
    responsable: 'Daniela Albornoz Derderian',
    descripcion: 'Programas de reciclaje, arborización urbana, control de microbasurales y educación ambiental.',
    telefono: '34 2 631380',
    correo: 'medioambiente@municatemu.cl',
    direccion: 'PENDIENTE',
    categoria: 'Servicios'
  },
  {
    id: 'u-14',
    nombre: 'Dirección de Tránsito y Transporte Público',
    responsable: 'Margarita González Leiva',
    descripcion: 'Otorgamiento de licencias de conducir, permisos de circulación y señalética vial comunal.',
    telefono: '34 2 631390',
    correo: 'transito@municatemu.cl',
    direccion: 'PENDIENTE',
    categoria: 'Servicios'
  },
  {
    id: 'u-15',
    nombre: 'Rentas y Patentes Municipales',
    responsable: 'Gladys López Vargas (Subrogante)',
    descripcion: 'Otorgamiento, enrolamiento y cobranza de patentes comerciales, industriales, profesionales y de alcoholes.',
    telefono: '34 2 631395',
    correo: 'rentas@municatemu.cl',
    direccion: 'PENDIENTE',
    categoria: 'Servicios'
  },
  {
    id: 'u-16',
    nombre: 'Dirección de Educación Municipal (DAEM)',
    responsable: 'Leonardo Recabarren Cabrera',
    descripcion: 'Administración de las escuelas y liceos públicos de la comuna de Catemu.',
    telefono: '34 2 631365',
    correo: 'educacion@municatemu.cl',
    direccion: 'Ignacio Carrera Pinto s/n, Catemu',
    categoria: 'Servicios'
  },
  {
    id: 'u-17',
    nombre: 'Dirección de Salud Municipal (DESAMU)',
    responsable: 'Christie Silva Pulgar',
    descripcion: 'Gestión del CESFAM, postas rurales y programas de atención primaria de salud en Catemu.',
    telefono: '34 2 992500',
    correo: 'salud@municatemu.cl',
    direccion: 'El Arrayán 300, Catemu',
    categoria: 'Servicios'
  }
];

export const TRANSPARENCIA_LINKS = [
  {
    titulo: 'Portal de Transparencia Activa',
    descripcion: 'Información pública sobre actos, resoluciones, contrataciones, personal y presupuestos de la Municipalidad de Catemu.',
    url: 'https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU032',
    plataforma: 'Portal Transparencia (CPLT)',
    categoria: 'Transparencia Activa'
  },
  {
    titulo: 'Solicitud de Información Ley de Transparencia (SAI)',
    descripcion: 'Ingresa una solicitud formal de información pública conforme a la Ley N° 20.285.',
    url: 'https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=487',
    plataforma: 'Portal Transparencia (SAI)',
    categoria: 'Derecho a la Información'
  },
  {
    titulo: 'Registro de Ley del Lobby',
    descripcion: 'Agenda de audiencias, viajes y donaciones de autoridades y funcionarios sujetos a la Ley N° 20.730.',
    url: 'https://www.leylobby.gob.cl/instituciones/MU032',
    plataforma: 'LeyLobby.gob.cl',
    categoria: 'Probidad y Probidad'
  },
  {
    titulo: 'Portal de Gastos Municipales',
    descripcion: 'Visualizador interactivo de ejecución presupuestaria, contrataciones y desembolsos.',
    url: 'https://gastosmunicipales.municatemu.cl',
    plataforma: 'Gastos Municipales Catemu',
    categoria: 'Finanzas Públicas'
  },
  {
    titulo: 'Sesiones del Concejo Municipal',
    descripcion: 'Transmitido y actas oficiales de las sesiones ordinarias y extraordinarias del Concejo de Catemu.',
    url: 'https://sesiones.municatemu.cl/',
    plataforma: 'Plataforma del Concejo',
    categoria: 'Participación Ciudadana'
  },
  {
    titulo: 'Pago a Proveedores y Facturación',
    descripcion: 'Consulta de estado de facturas emitidas a la Municipalidad a través de la plataforma de BancoEstado.',
    url: 'https://www.bancoestado.cl',
    plataforma: 'BancoEstado (Sitio Oficial)',
    categoria: 'Finanzas Públicas'
  }
];

export const CANALES_OFICIALES = [
  { dominio: 'www.municatemu.cl', proposito: 'Portal Web Principal de la Municipalidad de Catemu' },
  { dominio: 'admin.municatemu.cl', proposito: 'Panel Administrativo CMS para Funcionarios (Subdominio Seguro)' },
  { dominio: 'gastosmunicipales.municatemu.cl', proposito: 'Visualizador de Gastos y Transparencia Financiera' },
  { dominio: 'sesiones.municatemu.cl', proposito: 'Repositorio de Actas y Video de Sesiones del Concejo' },
  { dominio: 'municatemu.chilesinpapeleo.cl', proposito: 'Ventanilla Única Digital de Trámites' },
  { dominio: 'sem2.gob.cl', proposito: 'Plataforma del Estado para Permisos de Circulación y Patentes' },
  { dominio: 'portaltransparencia.cl', proposito: 'Portal del Consejo para la Transparencia (MU032)' }
];
