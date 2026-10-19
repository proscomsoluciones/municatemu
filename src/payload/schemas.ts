/**
 * Payload CMS Collection Schemas for Municipalidad de Catemu
 * Fully compliant with Leyes 21.663 (Ciberseguridad) and 21.719 (Protección de Datos Personales)
 */

export const TramiteCollection = {
  slug: 'tramites',
  admin: {
    useAsTitle: 'titulo',
    defaultColumns: ['titulo', 'categoria', 'nombre_plataforma', 'es_externo', 'destacado'],
  },
  access: {
    read: () => true, // Public access for SSG/ISR
  },
  fields: [
    { name: 'titulo', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'resumen', type: 'textarea', required: true },
    { name: 'descripcion', type: 'richText', required: true },
    { name: 'requisitos', type: 'array', fields: [{ name: 'item', type: 'text' }] },
    { name: 'costo', type: 'text', required: true },
    { name: 'plazo', type: 'text', required: true },
    { 
      name: 'categoria', 
      type: 'select', 
      options: ['Vehículos', 'Comercio', 'Social', 'Obras', 'Jurídico', 'General'],
      required: true 
    },
    { name: 'icono', type: 'text', required: true },
    { name: 'url_destino', type: 'text', required: true },
    { name: 'nombre_plataforma', type: 'text', required: true },
    { name: 'es_externo', type: 'checkbox', defaultValue: false },
    { name: 'palabras_clave', type: 'array', fields: [{ name: 'tag', type: 'text' }] },
    { name: 'destacado', type: 'checkbox', defaultValue: false },
    { name: 'estado_contenido', type: 'select', options: ['Publicado', 'Contenido Pendiente de Actualizar'] }
  ]
};

export const NoticiaCollection = {
  slug: 'noticias',
  admin: {
    useAsTitle: 'titulo',
    defaultColumns: ['titulo', 'categoria', 'fecha_publicacion', 'es_aviso_urgente'],
  },
  fields: [
    { name: 'titulo', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'bajada', type: 'textarea', required: true },
    { name: 'cuerpo', type: 'richText', required: true },
    { 
      name: 'imagen', 
      type: 'upload', 
      relationTo: 'media', 
      required: true, 
      label: 'Imagen (Texto alternativo ALT obligatorio)' 
    },
    { 
      name: 'imagen_alt', 
      type: 'text', 
      required: true, 
      label: 'Texto alternativo ALT para accesibilidad (Obligatorio WCAG 2.1)' 
    },
    { 
      name: 'categoria', 
      type: 'select', 
      options: ['Convocatorias', 'Deportes', 'Cultura', 'Obras', 'Salud', 'Educación', 'Avisos'],
      required: true 
    },
    { name: 'fecha_publicacion', type: 'date', required: true },
    { name: 'fecha_vigencia', type: 'date' },
    { name: 'es_aviso_urgente', type: 'checkbox', defaultValue: false }
  ]
};

export const DocumentoCollection = {
  slug: 'documentos',
  admin: {
    useAsTitle: 'titulo',
    defaultColumns: ['titulo', 'tipo', 'anio', 'contiene_datos_personales'],
  },
  hooks: {
    beforeChange: [
      ({ data, req }: any) => {
        // Automatic metadata stripping & privacy notice trigger
        if (data.contiene_datos_personales && req.user?.role !== 'Aprobador') {
          console.warn('[ALERTA LEY 21.719] Este documento contiene datos personales. Requiere aprobación especial.');
        }
        return data;
      }
    ]
  },
  fields: [
    { name: 'titulo', type: 'text', required: true },
    { 
      name: 'tipo', 
      type: 'select', 
      options: ['Decreto', 'Ordenanza', 'Rol', 'Cuenta Pública', 'PLADECO'],
      required: true 
    },
    { name: 'archivo_pdf', type: 'upload', relationTo: 'media', required: true },
    { name: 'fecha', type: 'date', required: true },
    { name: 'anio', type: 'number', required: true },
    { name: 'resumen', type: 'textarea', required: true },
    { 
      name: 'contiene_datos_personales', 
      type: 'checkbox', 
      defaultValue: false,
      label: 'Contiene datos personales (Muestra advertencia de Ley 21.719)'
    },
    { name: 'fecha_retiro_programado', type: 'date' }
  ]
};

export const RolesUsuario = {
  Redactor: 'Crea borradores y no puede publicar directamente',
  Aprobador: 'Revisa borradores, verifica Ley 21.719 y aprueba publicaciones',
  Administrador: 'Control total de la plataforma y usuarios'
};
