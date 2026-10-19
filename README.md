# Nuevo Sitio Web Municipalidad de Catemu 🇨🇱
### Maqueta Interactiva Prototipo en Next.js (App Router, Tailwind CSS, TypeScript, Payload CMS)

Prototipo web institucional de alta fidelidad y accesible construido para la **Ilustre Municipalidad de Catemu** (Región de Valparaíso, Chile), orientado a reemplazar la plataforma actual (Joomla 2019). Cumple rigurosamente con los estándares **WCAG 2.1 AA**, la **Norma Técnica de Sitios Web del Estado (DS N°1/2015)** y las leyes **21.663 (Ciberseguridad)** y **21.719 (Protección de Datos Personales)**.

---

## 🎨 Identidad de Diseño (Valle del Aconcagua)

El diseño está basado en los colores y símbolos del Valle del Aconcagua:
- **Papel (`#F6F7F3`)**: Fondo suave y limpio para máxima legibilidad.
- **Tinta (`#15241C`)**: Texto de alto contraste (mínimo 4.5:1).
- **Verde Valle (`#1F5A43`)**: Color institucional primario.
- **Sol (`#E2A93B`)**: Acento dorado inspirado en el sol del valle.
- **Tierra (`#8C6A4A`)**: Aceptación de los cerros agrícolas de Catemu.
- **Modo Oscuro Institucional**: Alternable con un solo clic o según la preferencia del sistema (`prefers-color-scheme`).
- **Tipografías**: *Bricolage Grotesque* para títulos institucionales e *Instrument Sans* para cuerpos de texto.

---

## 🚀 Stack Técnico
- **Framework**: Next.js 14+ (App Router, TypeScript estricto, React 18).
- **Estilos**: Tailwind CSS con Design Tokens definidos como variables CSS.
- **Búsqueda Instantánea**: Fuse.js integrado en el lado del cliente sobre el índice unificado (trámites, noticias y documentos).
- **CMS**: Payload CMS preparado con modelos TypeScript, hooks de auditoría y validaciones de la Ley 21.719.
- **Accesibilidad**: Barra de control con escalador de texto (100% / 115% / 125%), enlace de salto al contenido principal (`skip-link`), navegación 100% con teclado y atributos `lang="es-CL"`.
- **Seguridad**: Encabezados strictly CSP, HSTS preload, frame-ancestors 'none', `poweredByHeader: false` y archivo `/.well-known/security.txt`.

---

## 📁 Estructura del Proyecto

```text
minicatemu/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root Layout (es-CL, Fonts, Skip Link, Header, Footer)
│   │   ├── page.tsx                  # Portada (Hero Aconcagua, Instant Search, Trámites, Noticias, Transparencia)
│   │   ├── tramites/                 # /tramites y /tramites/[slug] (Ficha de trámites, badges SEM / gob.cl)
│   │   ├── noticias/                 # /noticias y /noticias/[slug] (Categorías, Subvenciones 2026, Alt obligatorio)
│   │   ├── documentos/               # /documentos (Filtros por tipo, año, aviso Ley 21.719)
│   │   ├── municipio/                # /municipio (Alcalde Rodrigo Díaz Brito, Organigrama, Directorio 17 unidades)
│   │   ├── transparencia/            # /transparencia (Transparencia activa, SAI, Ley del Lobby, Gastos)
│   │   ├── canales-oficiales/        # /canales-oficiales (Prevenir fraudes / phishing)
│   │   ├── contacto/                 # /contacto (Formulario Zod, mapa, campos PENDIENTE)
│   │   ├── accesibilidad/            # Declaración WCAG 2.1 AA
│   │   ├── privacidad/               # Política Ley 21.719
│   │   ├── not-found.tsx             # Página 404 personalizada con buscador
│   │   ├── sitemap.ts                # Sitemap XML automático
│   │   └── robots.ts                 # Robots.txt
│   ├── components/
│   │   └── ui/
│   │       ├── Header.tsx            # Barra institucional + accesibilidad
│   │       ├── Footer.tsx            # Pie de página institucional
│   │       ├── InstantSearch.tsx     # Buscador instantáneo con Fuse.js
│   │       ├── HeroAconcaguaSvg.tsx  # Ilustración SVG cerros y sol animado
│   │       └── TopBannerAlert.tsx    # Banner de avisos y emergencias
│   ├── data/
│   │   └── seedData.ts               # Semilla con todos los datos reales iniciales de Catemu
│   ├── payload/
│   │   └── schemas.ts                # Esquemas y colecciones de Payload CMS
│   └── context/
│       └── AccessibilityContext.tsx  # Estado global de tamaño de texto y tema
├── tests/
│   └── accessibility.spec.ts        # Tests automatizados WCAG con Playwright y axe-core
├── GUIA_FUNCIONARIOS.md              # Instructivo para redactores y aprobadores municipales
├── next.config.mjs                   # Seguridad CSP, HSTS y redirecciones 301 Joomla
└── package.json
```

---

## 🛠️ Instrucciones de Instalación y Ejecución Local

### 1. Requisitos Previos
- Node.js 18.x o superior
- npm

### 2. Instalación de Dependencias
```bash
npm install
```

### 3. Sembrado de Datos
```bash
npm run seed
```

### 4. Iniciar Servidor de Desarrollo
```bash
npm run dev
```
Abre en tu navegador [http://localhost:3000](http://localhost:3000) para interactuar con la maqueta funcional.

---

## 🏛️ Datos de Contacto y Autoridades Sembrados
- **Alcalde**: Rodrigo Díaz Brito
- **Administración Municipal**: Naysa Herrera Sánchez
- **Gabinete**: Yersia Peña Zamora
- **Asesoría Jurídica**: Hugo López de Maturana
- **Secretaría Municipal**: Leonardo Martínez Abarca
- **SECPLAC**: Nicolás Pereira Negrete
- **DIDECO**: Andréa Julio Valle
- **Finanzas (DAF)**: Valeria Núñez Cáceres
- **Control**: Mario Silva Olivares
- **Juzgado de Policía Local**: Mario Guerra Estay
- **Obras (DOM)**: Andrés Alfaro Garrido
- **Licitaciones**: Marcos Lizana Santibáñez
- **Medio Ambiente**: Daniela Albornoz Derderian
- **Tránsito**: Margarita González Leiva
- **Rentas**: Gladys López Vargas (Subrogante)
- **DAEM (Educación)**: Leonardo Recabarren Cabrera (Ignacio Carrera Pinto s/n, Tel: 34 2 631365)
- **DESAMU (Salud)**: Christie Silva Pulgar (El Arrayán 300, Tel: 34 2 992500)
- **Campos Marcados PENDIENTE**: Dirección Central, Horario de Atención y Teléfono Central en `GLOBAL_CONFIG`.
