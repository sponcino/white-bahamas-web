# White Bahamas — Datos maestros para rediseño web

**Fecha de corte:** 13 de octubre de 2026  
**Sitio fuente:** https://whitebahamas.com.ar/  
**Base:** auditoría aportada por el usuario, contrastada puntualmente con el sitio público.  
**Estado:** inventario de migración preliminar, **no** exportación del CMS ni especificación técnica completa de todos los modelos.

## 1. Identidad y contacto

- **Marca:** WHITE BAHAMAS / White Bahamas Argentina.
- **Actividad declarada:** fabricación y comercialización de productos SPA, hidromasajes, minipiscinas, sauna, vapor y soluciones de bienestar.
- **Mercados:** consumidores particulares y sectores profesionales (arquitectos, constructoras, desarrollos inmobiliarios, hotelería).
- **Propuesta declarada:** fabricación a medida, variedad de modelos, experiencia, asesoramiento, atención al cliente, garantías y entrega nacional.
- **Experiencia comunicada en página institucional:** más de 10 años y 3.000 productos instalados. **A verificar vigencia antes de publicar como claim actual.**
- **Teléfono y WhatsApp publicados:** +54 9 11 2496-7000 (mostrar separado del enlace técnico).
- **Correo publicado:** info@whitebahamas.com.
- **Showroom publicado:** Av. Cabildo 4769, 4º B, CABA, CP 1429, Argentina. **Confirmar vigencia, atención y horarios.**
- **Sitio principal:** https://whitebahamas.com.ar/ (revisar host www/no-www para canonización).
- **Sitio móvil legado:** m.whitebahamas.com, indexado históricamente; pendiente mapa exhaustivo de redirecciones.
- **Objetivo de negocio inferido:** captación de solicitudes de presupuesto y consultas; **no** asumir venta online ni carrito transaccional.

## 2. Inventario consolidado del sitio

La auditoría enumera **32 rutas de navegación/contenido** y **66 páginas de modelos**. `/vapor` tiene doble rol editorial/comercial y por tanto no debe contarse automáticamente como dos URLs únicas. El listado siguiente es el inventario identificado, no un crawl exhaustivo.

| Sección | Rutas existentes |
|---|---|
| Inicio | `/` |
| Empresa | `/quienessomos`, `/filosofia`, `/porquewhitebahamas` |
| Selector comercial | `/productos` |
| Categorías | `/hidromasajesindividuales`, `/hidromasajesdobles`, `/hidromasajesesquineros`, `/minipiscinas`, `/vapor`, `/sauna` |
| Accesorios | `/hidromasajesindividuales/accesorios`, `/hidromasajesdobles/accesorios`, `/hidromasajesesquineros/accesorios`, `/minipiscinas/accesorios`, `/veraccesoriosmobile.php` |
| Terapias | `/terapias`, `/hidroterapia`, `/hidromasaje-terapia`, `/mantenimiento`, `/vapor`, `/cascadas`, `/ozonoterapia`, `/cromoterapia`, `/aromaterapia` |
| Profesionales | `/wbparaarquitectos`, `/mercadoinmobiliario`, `/industriahotelera` |
| Inspiración | `/galeria` |
| Contacto | `/contacto` |
| Soporte | `/entrega`, `/garantias`, `/preguntasfrecuentes` |

### 2.1 Inventario completo de 66 rutas de modelos

**Regla migratoria:** mantener la relación entre slug histórico, familia y modelo. No deducir ficha técnica a partir de la nomenclatura del slug. Validar respuesta HTTP, nombre visible, atributos, imágenes, PDF y URL canónica antes de lanzar redirects.

#### Hidromasajes individuales — 26

| # | Ruta histórica | Identificador preliminar |
|---:|---|---|
| 1 | `/hidromasajesindividuales/BiminiBeachA120` | `BiminiBeachA120` |
| 2 | `/hidromasajesindividuales/BiminiBeachA130` | `BiminiBeachA130` |
| 3 | `/hidromasajesindividuales/BiminiBeachA140` | `BiminiBeachA140` |
| 4 | `/hidromasajesindividuales/Bimini150` | `Bimini150` |
| 5 | `/hidromasajesindividuales/Bimini160` | `Bimini160` |
| 6 | `/hidromasajesindividuales/Bimini170` | `Bimini170` |
| 7 | `/hidromasajesindividuales/OceanCayA150-75Minimalista` | `OceanCayA150-75Minimalista` |
| 8 | `/hidromasajesindividuales/OceanCayA170-75Minimalista` | `OceanCayA170-75Minimalista` |
| 9 | `/hidromasajesindividuales/OceanCayA150-80Minimalista` | `OceanCayA150-80Minimalista` |
| 10 | `/hidromasajesindividuales/OceanCayA160-80Minimalista` | `OceanCayA160-80Minimalista` |
| 11 | `/hidromasajesindividuales/OceanCayA170-80Minimalista` | `OceanCayA170-80Minimalista` |
| 12 | `/hidromasajesindividuales/OceanCayA180-80Minimalista` | `OceanCayA180-80Minimalista` |
| 13 | `/hidromasajesindividuales/BigIslandA150` | `BigIslandA150` **(validar existencia de ruta base)** |
| 14 | `/hidromasajesindividuales/BigIslandA160` | `BigIslandA160` |
| 15 | `/hidromasajesindividuales/BigIslandA170` | `BigIslandA170` |
| 16 | `/hidromasajesindividuales/BigIslandA180` | `BigIslandA180` |
| 17 | `/hidromasajesindividuales/OvalIndividualA185-100` | `OvalIndividualA185-100` |
| 18 | `/hidromasajesindividuales/OceanCayA170-90LMinimalista` | `OceanCayA170-90LMinimalista` |
| 19 | `/hidromasajesindividuales/OceanCayA180-90LMinimalista` | `OceanCayA180-90LMinimalista` |
| 20 | `/hidromasajesindividuales/OceanCayA190-90LMinimalista` | `OceanCayA190-90LMinimalista` |
| 21 | `/hidromasajesindividuales/NassauA165L` | `NassauA165L` |
| 22 | `/hidromasajesindividuales/NassauA180L` | `NassauA180L` |
| 23 | `/hidromasajesindividuales/NassauA190L` | `NassauA190L` |
| 24 | `/hidromasajesindividuales/FreeportA80L` | `FreeportA80L` |
| 25 | `/hidromasajesindividuales/FreeportA90L` | `FreeportA90L` |
| 26 | `/hidromasajesindividuales/FreeportA105L` | `FreeportA105L` |

#### Hidromasajes dobles — 18

| # | Ruta histórica | Identificador preliminar |
|---:|---|---|
| 1 | `/hidromasajesdobles/GrandOceanCay150-180DobleRepo` | `GrandOceanCay150-180DobleRepo` |
| 2 | `/hidromasajesdobles/OvalA185-100` | `OvalA185-100` |
| 3 | `/hidromasajesdobles/GrandOceanCayA150-120` | `GrandOceanCayA150-120` |
| 4 | `/hidromasajesdobles/GrandOceanCayA165-120` | `GrandOceanCayA165-120` |
| 5 | `/hidromasajesdobles/GrandOceanCayA180-120` | `GrandOceanCayA180-120` |
| 6 | `/hidromasajesdobles/GrandOceanCayA150-130` | `GrandOceanCayA150-130` |
| 7 | `/hidromasajesdobles/GrandOceanCayA165-130` | `GrandOceanCayA165-130` |
| 8 | `/hidromasajesdobles/GrandOceanCayA180-130` | `GrandOceanCayA180-130` |
| 9 | `/hidromasajesdobles/GrandNassauA165XLD` | `GrandNassauA165XLD` |
| 10 | `/hidromasajesdobles/GrandNassauA180XLD` | `GrandNassauA180XLD` |
| 11 | `/hidromasajesdobles/GrandFreeportA180XLD` | `GrandFreeportA180XLD` |
| 12 | `/hidromasajesdobles/BahiaA150` | `BahiaA150` |
| 13 | `/hidromasajesdobles/BahiaA160` | `BahiaA160` |
| 14 | `/hidromasajesdobles/GrandBahiaA180-68` | `GrandBahiaA180-68` |
| 15 | `/hidromasajesdobles/WhiteIslandA180-150conReposera` | `WhiteIslandA180-150conReposera` |
| 16 | `/hidromasajesdobles/WhiteIslandA175-130` | `WhiteIslandA175-130` |
| 17 | `/hidromasajesdobles/WhiteIslandA180-150` | `WhiteIslandA180-150` |
| 18 | `/hidromasajesdobles/WhiteOceanCayA180-150` | `WhiteOceanCayA180-150` |

#### Hidromasajes esquineros — 7

| # | Ruta histórica | Identificador preliminar |
|---:|---|---|
| 1 | `/hidromasajesesquineros/ParadiseSandG140` | `ParadiseSandG140` |
| 2 | `/hidromasajesesquineros/ParadiseStone140` | `ParadiseStone140` |
| 3 | `/hidromasajesesquineros/ParadiseBeachG130D` | `ParadiseBeachG130D` |
| 4 | `/hidromasajesesquineros/ParadiseBeachG150D` | `ParadiseBeachG150D` |
| 5 | `/hidromasajesesquineros/ParadiseBeachA150D` | `ParadiseBeachA150D` |
| 6 | `/hidromasajesesquineros/ParadiseBeachA160D` | `ParadiseBeachA160D` |
| 7 | `/hidromasajesesquineros/ParadiseBeachMinimalistaA150` | `ParadiseBeachMinimalistaA150` |

#### Minipiscinas — 15

| # | Ruta histórica | Identificador preliminar |
|---:|---|---|
| 1 | `/minipiscinas/KingIslandA290` | `KingIslandA290` |
| 2 | `/minipiscinas/RoyalBahamasOctogonalA230-90` | `RoyalBahamasOctogonalA230-90` |
| 3 | `/minipiscinas/RoyalBahamasA230-105conReposera` | `RoyalBahamasA230-105conReposera` |
| 4 | `/minipiscinas/RoyalBahamasA230-90conReposera` | `RoyalBahamasA230-90conReposera` |
| 5 | `/minipiscinas/GrandBahamasA195-73conReposera` | `GrandBahamasA195-73conReposera` |
| 6 | `/minipiscinas/GrandBahamasA195-85conReposera` | `GrandBahamasA195-85conReposera` |
| 7 | `/minipiscinas/GrandBahamasMinimalistaA170-60` | `GrandBahamasMinimalistaA170-60` |
| 8 | `/minipiscinas/GrandBahamasMinimalistaA180-60` | `GrandBahamasMinimalistaA180-60` |
| 9 | `/minipiscinas/GrandBahamasMinimalistaA195-50` | `GrandBahamasMinimalistaA195-50` |
| 10 | `/minipiscinas/GrandBahamasMinimalistaA195-65` | `GrandBahamasMinimalistaA195-65` |
| 11 | `/minipiscinas/GrandIslandA180-87` | `GrandIslandA180-87` |
| 12 | `/minipiscinas/GrandBahamasRedondaA200` | `GrandBahamasRedondaA200` |
| 13 | `/minipiscinas/GrandBahiaA180-65` | `GrandBahiaA180-65` |
| 14 | `/minipiscinas/WhiteOceanBayA180-130` | `WhiteOceanBayA180-130` |
| 15 | `/minipiscinas/WhiteOceanBayA180-150` | `WhiteOceanBayA180-150` |

### 2.2 Otras rutas de producto y deuda de indexación

- Configuraciones profundas detectadas: `/hidromasajesindividuales/NassauA165L/FULLSPA22accesorios` y `/hidromasajesindividuales/BigIslandA150/Premium10accesorios`.
- Hay URLs históricas del sitio móvil con `productos?id=`, `producto?modelo=` y `accesorios?id=`. Los valores de esos parámetros **no** se inventarian en el informe.
- Es necesario exportar todas las URL reales, códigos HTTP, enlaces PDF y datos de canonical/robots antes de decidir qué se redirige y qué se conserva.

## 3. Familias y contenido comercial

| Familia | Registros de modelo identificados | Evidencia/observaciones |
|---|---:|---|
| Hidromasajes individuales | 26 | Incluye Bimini Beach, Bimini, Ocean Cay, Big Island, Oval Individual, Nassau y Freeport |
| Hidromasajes dobles | 18 | Incluye Grand Ocean Cay, Oval, Grand Nassau, Grand Freeport, Bahía, Grand Bahía, White Island y White Ocean Cay |
| Hidromasajes esquineros | 7 | Paradise Sand, Paradise Stone y variantes Paradise Beach |
| Minipiscinas | 15 | King Island, Royal Bahamas, Grand Bahamas, Grand Island, Grand Bahía y White Ocean Bay |
| Sauna | No cuantificado | Opciones citadas Standard, «Premiun» [error del sitio] y Deluxe; validar niveles reales |
| Vapor | No cuantificado | Área comercial y también terapias; requiere ficha técnica |
| Accesorios | No cuantificado | Accesorios por cuatro familias y endpoint general legado |

### 3.1 Ejemplos técnicos confirmados puntualmente en sitio público

Estos **no** representan las especificaciones de los 66 modelos:

| Modelo | Largo | Ancho | Profundidad | Detalle observado | Fuente |
|---|---:|---:|---:|---|---|
| Nassau A 180 L | 180 cm | 90 cm | 55 cm | Opción Base 5 con 5 jets y bomba autodrenante de 3/4 HP | https://www.whitebahamas.com.ar/hidromasajesindividuales/NassauA180L |
| Bimini 160 | 160 cm | 70 cm | 42 cm | Opción Base 5 con bomba autodrenante de 1/2 HP | https://www.whitebahamas.com.ar/hidromasajesindividuales/Bimini160 |
| White Ocean Bay A 180-150 | 180 cm | 150 cm | 55 cm | Configuración «Especial 10 con luces», 10 jets y 2 luces LED con cromoterapia | https://www.whitebahamas.com.ar/minipiscinas/WhiteOceanBayA180-150 |

**Importante:** etiquetas como «Base», «Premium» o «Full SPA» aparecen en fichas, pero no hay una matriz global fiable de equipamientos, precios o compatibilidad por modelo. No trasladar características de un producto a otro.

## 4. Contenido por área a preservar y reescribir

| Área | Contenido fuente | Tratamiento en la nueva web |
|---|---|---|
| Home | Presentación visual, galería, acceso a entrega, garantías y preguntas frecuentes | Hero con propuesta de valor y CTA, familias principales, categorías, personalización, ventajas, proyectos y contacto |
| Nosotros | Historia, producto SPA, variedad, trayectoria, públicos | Texto conciso y comprobación de claims cuantitativos |
| Filosofía | Wellness, Excelencia, Negocios/atención al cliente | Resumir en pilares de marca, con imágenes autorizadas |
| Por qué elegirnos | Experiencia, atención, transparencia, entrega, calidad, variedad, fabricación a medida y garantías | Beneficios respaldados y sin promesas no verificadas |
| Categorías | Modelos, medidas, profundidad, botones «Ver»/«Contactanos» | Tarjetas con filtros por dimensiones, capacidad y tipo; no mostrar datos sin confirmar |
| Fichas | Dimensiones, configuraciones, jets, bombas, accesorios, CTA, descarga PDF | Fotos, especificaciones, tabla comparativa, selector de equipamiento, CTA contextual, PDFs verificados |
| Terapias | Hidroterapia, hidromasaje, ducha escocesa, vapor, cascadas, ozonoterapia, cromoterapia, aromaterapia | Hub educativo enlazado a familias relevantes; revisar claims clínicos |
| Profesionales | Fabricación a medida, volumen, descuentos, inmobiliario y hotelería | Landing B2B con solicitud por proyecto; no prometer CAD/BIM sin archivos disponibles |
| Galería | Galerías de hidromasajes y minipiscinas | Portafolio filtrable; títulos/casos reales sólo si están documentados |
| Entrega | Logística y alcance nacional | Reescribir con condiciones y coberturas vigentes aprobadas |
| Garantías | Esquemas estándar, extendido y «Lifetime» | **Bloquear publicación de condiciones legales hasta revisión**, pues hay duplicaciones/antigüedad |
| FAQ | Materiales, mantenimiento, terapias y uso | FAQ segmentada con revisión editorial/técnica |
| Contacto | Nombre, correo, teléfono, localidad, asunto, consulta; showroom | Formulario contextual de cotización, privacidad, canales directos |

## 5. Recursos gráficos detectados

| Asset o grupo | Ruta/hallazgo | Estado |
|---|---|---|
| Logotipo | `/images/logo-up.png` | Localizar original, variantes y licencia |
| Foto Wellness | `/images/wellness.jpg` | Verificar licencia y resolución |
| Foto Excelencia | `/images/excelencia.jpg` | Verificar licencia y resolución |
| Foto Negocios | `/images/negocios.jpg` | Verificar licencia y resolución |
| Imagen footer/slider | `/admin/uploads/slider/footer/001_footer_imagen_1.jpg` | Migrar sólo si los derechos están acreditados |
| Fotos catálogo | Host histórico `www.whitebahamas.com/admin/images/…`, algunas `_300.jpg` | Exportar activos, mapear modelo, calidad y licencias |
| Galería | `/galeria` y galería móvil histórica | Falta inventario binario completo |
| PDF técnico | Acciones «Descargar PDF» en fichas | Los URLs concretos no fueron recuperados: **pendiente** |

No hay valores CSS exactos de colores, tipografías o dimensiones de assets confirmados por la auditoría. Se debe inspeccionar el sitio renderizado para elegir tokens de diseño basados en la marca real.

## 6. Arquitectura propuesta para el rediseño (propuesta, no contenido existente)

- **Productos:** Hidromasajes (individuales, dobles, esquineros), Minipiscinas, Sauna y Vapor, Accesorios.
- **Soluciones:** Hogar, Arquitectos y desarrolladores, Hotelería y Wellness.
- **Bienestar:** Terapias y guías.
- **Proyectos:** Galería/casos de instalación, si hay material autorizado.
- **Soporte:** Entrega, Garantías, Instalación, Preguntas frecuentes, Servicio técnico (solo con canales y condiciones confirmadas).
- **Nosotros:** Historia, filosofía y razones para elegir la marca.
- **CTA permanente:** Solicitar presupuesto.

## 7. Esquema de datos sugerido para CMS

```yaml
product:
  id: string
  legacyUrl: string
  slug: string
  displayName: string
  category: individual | doble | esquinero | minipiscina | sauna | vapor
  collection: string | null
  dimensionsCm:
    length: number | null
    width: number | null
    depth: number | null
  capacityPeople: number | null
  shape: string | null
  installation: [string]
  indoorOutdoor: string | null
  material: string | null
  images: [{url: string, alt: string, rightsVerified: boolean}]
  configurations: [{id: string, name: string, jets: number | null, pump: string | null, features: [string]}]
  compatibleAccessoryIds: [string]
  techPdfUrl: string | null
  technicalRequirements: string | null
  warrantyReference: string | null
  available: boolean | null
  seo: {title: string | null, description: string | null, canonical: string | null}
  verificationStatus: verified | pending | disputed
```

- El esquema es una **propuesta de implementación**, no información exportada del negocio.
- Los datos `null` deben visualizarse como no disponibles u ocultarse; **no** deducirlos de los slugs, fotos o categoría.
- Configuraciones son entidades relacionadas con producto. Su selección no crea una URL indexable salvo definición SEO explícita.

## 8. Funnel comercial y tracking propuestos

**B2C:** Inicio/SEO/Ads → categoría o buscador guiado → modelo → equipamiento/accesorios → resumen → WhatsApp contextual o formulario → seguimiento comercial.

**B2B:** Soluciones profesionales → tipo de proyecto, cantidad y planos (opcional, si se habilita carga segura) → consulta técnica/comercial → seguimiento.

**Eventos propuestos:** `view_category`, `view_product`, `select_configuration`, `view_accessory`, `download_technical_sheet`, `click_whatsapp`, `click_phone`, `start_quote`, `generate_lead`, `book_showroom`, `qualified_lead` (últimos eventos sólo si existe integración y señal real). No enviar PII en eventos de analítica.

## 9. Hallazgos obligatorios para resolver

1. SEO: titles repetidos en productos, www/no-www, subdominio móvil indexado y URLs de configuraciones; crear inventario, redirects 301, sitemap y canonicals antes de migrar.
2. UX: `/productos` no debe llamarse «Carrito de Compras», ya que no es un checkout real.
3. Accesibilidad: `alt="sinFoto"`, headings y cuerpos repetidos, semántica de formulario y contraste pendientes de revisión. Objetivo WCAG AA.
4. Textos: corregir «Ducha Escosesa», «Bańo», «Premiun» y «Micropiscinas» como variantes erróneas.
5. Garantías: documento fechado marzo de 2019, texto «Lifetime» duplicado y `whiteabahamas.com` escrito erróneamente; requiere validación legal.
6. Privacidad: establecer aviso y política conforme a marco aplicable antes de procesar leads reales.
7. Performance: **no hay medidas actuales verificadas** de LCP/INP/CLS; objetivos nuevos p75 LCP ≤2,5 s, INP ≤200 ms y CLS ≤0,1.
8. Tracking: iframe de GTM visto, pero contenedor, GA4 y conversiones no confirmados.
9. Seguridad: no se verificaron headers, TLS extendido, backend o versiones; requiere auditoría técnica.
10. Imágenes y PDFs: auditar derechos, activos y rutas; nunca sustituir por contenido presentado como auténtico si no lo es.

## 10. Pendientes para producción

- Exportar CMS/base de datos y crawl completo (incluidas rutas 404, redirecciones, archivos y query parameters).
- Validar los 66 modelos, nombres comerciales, medidas, capacidad y configuraciones individualmente.
- Obtener fotografías originales, logos y licencia de uso por asset.
- Confirmar teléfono, dirección, email, horario, condiciones de entrega y servicios.
- Aprobar garantías, términos y privacidad con responsables del negocio/asesoría legal.
- Confirmar mecanismo real de gestión de leads: email, CRM, WhatsApp y anti-spam.
- Capturar paleta exacta y tipografía actuales desde CSS/render real; establecer un design system nuevo sin alterar el ADN de marca.
- Validar migración SEO en staging contra el mapa de URLs completo.

## 11. Trazabilidad

**Fuente principal:** informe «Auditoría profunda de White Bahamas para su rediseño», aportado el 13/10/2026.  
**Comprobaciones públicas puntuales:** home, Quiénes Somos, selector Productos y fichas Nassau A180L, Bimini 160, White Ocean Bay A180-150.  
**No verificado:** exportación definitiva del catálogo, precios, stock, capacidad de todos los modelos, licencias, PDFs, condiciones vigentes, analytics, rendimiento real, stack backend y tokens CSS exactos.
