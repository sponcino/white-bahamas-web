# Lista de Comprobaciones de Calidad (QA_CHECKLIST.md) — White Bahamas

**Fecha de ejecución:** Octubre 2026  
**Entorno evaluado:** Next.js 16.4.0 (Turbopack) con TypeScript 5 y Tailwind CSS 4 en Windows / Node v24.20.0  
**Servidor de pruebas:** `http://localhost:3000` (Production build `npm run start`)

---

## 1. Pruebas Automáticas y Verificaciones Realizadas

### A. Compilación, Tipado y Bundling
- [x] **TypeScript Type-Check:** Compilación completa de todos los módulos sin errores de tipos (`Finished TypeScript in 9.5s`).
- [x] **Static Generation (SSG):** Generación exitosa de 86 rutas estáticas en 7.5 segundos (Home, 66 fichas de producto, categorías, páginas institucionales, sitemap.xml y robots.txt).
- [x] **Zero Build Errors:** Salida con código 0 sin fallas de sintaxis ni importaciones rotas.

### B. Rutas y Códigos de Respuesta HTTP
- [x] `GET /` → **HTTP 200** (Home interactiva con 10 secciones requeridas).
- [x] `GET /productos` → **HTTP 200** (Catálogo completo de 66 modelos con filtros).
- [x] `GET /hidromasajesindividuales/NassauA180L` → **HTTP 200** (Ficha verificada con medidas 180x90x55 cm).
- [x] `GET /minipiscinas/WhiteOceanBayA180-150` → **HTTP 200** (Ficha verificada con medidas 180x150x55 cm).
- [x] `GET /profesionales` → **HTTP 200** (Landing B2B y formulario técnico de obras).
- [x] `GET /bienestar` → **HTTP 200** (Hub de terapias e hidroterapia con claims responsables).
- [x] `GET /nosotros` → **HTTP 200** (Historia y los 3 pilares con imágenes originales).
- [x] `GET /soporte` → **HTTP 200** (Guía de instalación, envíos nacionales y FAQ).
- [x] `GET /contacto` → **HTTP 200** (Datos confirmados de showroom, teléfono y formulario).
- [x] `GET /sitemap.xml` → **HTTP 200** (XML dinámico estructurado).
- [x] `GET /robots.txt` → **HTTP 200** (Reglas de rastreo limpias).
- [x] `GET /quienessomos` → **HTTP 308 Permanent Redirect** a `/nosotros`.
- [x] `GET /wbparaarquitectos` → **HTTP 308 Permanent Redirect** a `/profesionales`.

### C. Componentes Interactivos y CRO
- [x] **MegaMenu de Navegación:** Despliegue interactivo en desktop al posar o pulsar "Productos" con miniaturas de categoría auténticas.
- [x] **ProductFilters:** Búsqueda en tiempo real por nombre de modelo, filtrado por familia y toggle de "Solo medidas verificadas".
- [x] **ConfigurationSelector:** Conmutación reactiva entre Base 5, Premium 10 y Full SPA sin saltos bruscos de altura en el DOM.
- [x] **ProductGallery:** Selector de imágenes en miniatura y zoom controlado al hacer hover sobre la imagen principal.
- [x] **QuoteDrawer:** 
  - Apertura desde botón de header, hero, tarjetas de catálogo y fichas individuales.
  - Precarga de modelo, familia, medidas y configuración seleccionada.
  - Generación de enlace deep-link a WhatsApp oficial con mensaje redactado y estructurado.
  - Formulario con aviso explícito de modo demostración (sin falsos envíos ni almacenamiento inseguro de PII).
- [x] **FAQAccordion:** Acordeón accesible con teclado para resolución de dudas técnicas.
- [x] **ProfessionalLeadForm:** Captura de datos de proyecto B2B (tipología, localidad, unidades estimadas y planos).

### D. Accesibilidad y Estándares Web (WCAG AA)
- [x] **Skip to main content:** Enlace invisible al inicio que se activa con la tecla `Tab` para saltar la navegación.
- [x] **Visible Focus:** Estilos de `:focus-visible` con anillo contrastado (`ring-2 ring-wb-blue`) en todos los botones y enlaces interactivos.
- [x] **Prefers-reduced-motion:** Regla global en CSS que anula transiciones y animaciones para usuarios con sensibilidad al movimiento en el sistema operativo.
- [x] **Contraste Tipográfico:** Fondos neutros luminosos (`#ffffff`, `#f8fafc`) con tipografía oscura de alta legibilidad (`#1e293b`) y acentos visibles (`#0099ff`, `#0a0a0a`).
- [x] **Textos Alternativos (Alt):** Imágenes con descripciones descriptivas auténticas (reemplazando el legado `alt="sinFoto"`).

### E. Responsive y Layout
- [x] **Desktop (1440px):** Retícula de 12 columnas equilibrada con espacio negativo generoso, mega menú y navegación sticky sobria.
- [x] **Mobile (390px):** 
  - Menú lateral tipo drawer colapsable accesible desde el botón de hamburguesa.
  - Barra sticky inferior fija con nombre de modelo y CTA "Presupuestar" para máxima conversión en pantallas táctiles.
  - Tarjetas adaptadas a columna única sin desbordamiento horizontal (`overflow-x: hidden`).

---

## 2. Elementos Pendientes para Producción Real (Fuera del Alcance del Prototipo Local)

Los siguientes puntos dependen de decisiones comerciales, legales y de infraestructura del cliente antes del despliegue final en `whitebahamas.com.ar`:

1. **Infraestructura de Servidor y Certificados:**
   - Configuración de redirección 301 a nivel de servidor web (Nginx/Cloudflare) para el subdominio `m.whitebahamas.com` y canonización sin `www`.
2. **Backend Comercial y Webhooks:**
   - Conectar un webhook seguro (vía API Route o integración con CRM/email transaccional como Resend/Sendgrid) para recibir los leads del formulario web sin depender únicamente de WhatsApp.
3. **Validación Factual de los 63 Modelos Pendientes:**
   - La gerencia técnica de White Bahamas debe aportar las tablas de medidas reales (largo, ancho y profundidad) de los 63 modelos marcados como `pending` para actualizar su estado a `verified`.
4. **Actualización Legal de la Política de Garantía:**
   - Revisión del documento histórico de marzo de 2019 para emitir la póliza oficial vigente y publicar sus cláusulas definitivas en `/soporte`.
5. **Medición Real de Core Web Vitals en Tráfico Público:**
   - Medir p75 de LCP, INP y CLS en Google Search Console una vez que el sitio esté indexado y con tráfico real en producción.
