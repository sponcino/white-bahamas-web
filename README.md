# White Bahamas Argentina — Rediseño Web Oficial (2026)

Rediseño moderno, minimalista, sofisticado y orientado a la conversión para **White Bahamas Argentina** (fabricación de hidromasajes, minipiscinas y equipamiento SPA).

Este proyecto sustituye el catálogo técnico heredado por una experiencia digital editorial contemporánea inspirada en arquitectura de bienestar, preservando la identidad cromática original, la indexación de los 66 modelos identificados y garantizando honestidad de datos en todo el recorrido de compra.

---

## 1. Stack Tecnológico

- **Framework:** [Next.js 16 (App Router + Turbopack)](https://nextjs.org/)
- **Lenguaje:** TypeScript 5 (tipado estricto para modelos, variantes y cotizaciones)
- **Estilos:** Tailwind CSS 4 + Variables CSS nativas de marca
- **Iconografía:** Lucide React
- **Fuentes:** Playfair Display (titulares editoriales) + Plus Jakarta Sans (interfaz y cuerpo)
- **Renderizado:** Server-Side Rendering (SSR) y Static Site Generation (SSG) de 86 páginas
- **SEO & Datos Estructurados:** Sitemap XML dinámico, robots.txt, metadatos canónicos y JSON-LD (`Product`, `BreadcrumbList`, `Organization`).

---

## 2. Estructura del Proyecto

```text
├── src/
│   ├── app/
│   │   ├── [category]/
│   │   │   ├── [slug]/
│   │   │   │   ├── page.tsx               # Ficha de producto dinámica (SSG para 66 modelos)
│   │   │   │   └── ProductDetailClient.tsx # Configurador, galería, specs y sticky CTA
│   │   │   └── page.tsx                   # Páginas de familias / categorías
│   │   ├── bienestar/page.tsx             # Hub editorial de hidroterapia y terapias
│   │   ├── contacto/page.tsx              # Formulario y showroom Cabildo 4769
│   │   ├── galeria/page.tsx               # Portafolio filtrable de instalaciones reales
│   │   ├── nosotros/page.tsx              # Historia, filosofía y pilares de marca
│   │   ├── productos/page.tsx             # Catálogo completo con buscador y filtros
│   │   ├── profesionales/page.tsx         # Landing B2B y formulario técnico de obras
│   │   ├── soporte/page.tsx               # Requerimientos de instalación, envíos y FAQ
│   │   ├── layout.tsx                     # Layout global con Header, Footer y QuoteDrawer
│   │   ├── page.tsx                       # Home con las 10 secciones de marca requeridas
│   │   ├── globals.css                    # Tokens de diseño, tipografía y accesibilidad
│   │   ├── sitemap.ts                     # Generador de sitemap.xml
│   │   ├── robots.ts                      # Directivas de rastreo
│   │   ├── loading.tsx                    # Estado de carga
│   │   └── not-found.tsx                  # Página 404 personalizada
│   ├── components/
│   │   ├── Header.tsx                     # Navegación sticky con logo y WhatsApp
│   │   ├── MegaMenu.tsx                   # Desplegable visual de categorías
│   │   ├── Hero.tsx                       # Hero editorial con fotografía auténtica
│   │   ├── ProductCard.tsx                # Tarjeta con badge de verificación y cotizador
│   │   ├── ProductFilters.tsx             # Buscador en tiempo real y chips de filtro
│   │   ├── ProductGallery.tsx             # Galería interactiva con miniaturas y zoom
│   │   ├── SpecTable.tsx                  # Tabla de medidas y requerimientos técnicos
│   │   ├── ConfigurationSelector.tsx      # Selector de niveles Base / Premium / Full SPA
│   │   ├── QuoteDrawer.tsx                # Drawer de presupuesto con WhatsApp contextual
│   │   ├── ProfessionalLeadForm.tsx       # Formulario para arquitectos y constructoras
│   │   ├── FAQAccordion.tsx               # Acordeón de preguntas frecuentes
│   │   ├── Breadcrumbs.tsx                # Migas de pan con JSON-LD
│   │   └── Footer.tsx                     # Pie de página institucional completo
│   ├── context/
│   │   └── QuoteContext.tsx               # Estado global del drawer de presupuesto
│   ├── data/
│   │   ├── products.ts                    # Repositorio de los 66 modelos y categorías
│   │   └── company.ts                     # Datos institucionales, terapias y FAQs
│   └── types/
│       └── product.ts                     # Tipado TypeScript del esquema de datos
├── public/
│   └── images/                            # Activos auténticos recuperados del sitio original
├── DESIGN_SYSTEM.md                       # Documentación de colores, tipografía y motion
├── CONTENT_GAPS.md                        # Registro de datos no confirmados y claims pendientes
├── SEO_MIGRATION.md                       # Mapa de redirecciones 1:1 y canonización
└── QA_CHECKLIST.md                        # Lista exhaustiva de pruebas y validaciones
```

---

## 3. Comandos de Instalación y Ejecución

### Requisitos Previos
- Node.js v18.17+ o Node.js LTS (instalado v24.20.0 en el sistema).
- npm v10+

### Instalación de dependencias
```bash
npm install
```

### Ejecutar en entorno de desarrollo
```bash
npm run dev
```
La aplicación quedará disponible en [http://localhost:3000](http://localhost:3000).

### Compilar para producción (Build)
```bash
npm run build
```
Genera de forma optimizada todas las páginas estáticas y rutas dinámicas mediante Turbopack.

### Iniciar servidor de producción
```bash
npm run start -- -p 3000
```

---

## 4. Documentación Complementaria de Entrega

Para revisar en detalle cada fase del proyecto, consultá los archivos adjuntos en la raíz:

- **[DESIGN_SYSTEM.md](file:///c:/Users/WB10/Desktop/white%20bahamas%20web/DESIGN_SYSTEM.md):** Colores capturados del CSS original (`#0099FF`, `#23F0FB`, `#2B2925`, `#000000`, `#FFFFFF`), tokens CSS y principios de animación accesible.
- **[CONTENT_GAPS.md](file:///c:/Users/WB10/Desktop/white%20bahamas%20web/CONTENT_GAPS.md):** Detalle de datos no confirmados (cifras de trayectoria, showroom presencial, póliza de garantías 2019 y los 63 modelos en estado `pending`).
- **[SEO_MIGRATION.md](file:///c:/Users/WB10/Desktop/white%20bahamas%20web/SEO_MIGRATION.md):** Plan de migración 1:1, mapeo de redirecciones y preservación total de las 66 URLs de producto históricas.
- **[QA_CHECKLIST.md](file:///c:/Users/WB10/Desktop/white%20bahamas%20web/QA_CHECKLIST.md):** Comprobaciones técnicas ejecutadas, pruebas de código HTTP 200/308, accesibilidad WCAG AA y puntos para el despliegue final.
