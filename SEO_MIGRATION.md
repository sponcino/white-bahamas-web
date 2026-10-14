# Plan y Mapa de Migración SEO 1:1 — White Bahamas Argentina

**Fecha:** Octubre 2026  
**Dominio canónico de destino:** `https://whitebahamas.com.ar`  
**Host histórico legado:** `www.whitebahamas.com.ar`, `whitebahamas.com`, y subdominio móvil histórico indexado `m.whitebahamas.com`.

---

## 1. Estrategia y Objetivos de Migración

1. **Preservar el 100% del Equity de Enlaces:** Ninguna de las 66 URLs históricas de producto indexadas debe arrojar error 404 ni eliminarse por simplificación estética.
2. **Canonización Estricta:** Unificación sin ambigüedades en `https://whitebahamas.com.ar/` (sin subdominios móviles independientes; un solo DOM responsive).
3. **Mapeo de Rutas Institucionales y de Categoría:** Redirecciones permanentes (301/308) desde las rutas históricas desordenadas hacia las nuevas URLs consolidadas.
4. **Datos Estructurados (Schema.org):** Implementación de `Organization`, `LocalBusiness`, `Product`, `AggregateOffer` y `BreadcrumbList` sin inventar ratings ni precios artificiales.

---

## 2. Mapa de Redirecciones 1:1 (Rutas Institucionales y Editoriales)

| Ruta Histórica Detectada | Código HTTP | Destino Nuevo Canónico | Justificación / Contenido |
|---|:---:|---|---|
| `/quienessomos` | 301 | `/nosotros` | Consolidación institucional de historia y trayectoria. |
| `/filosofia` | 301 | `/nosotros#filosofia` | Sección de pilares de marca (Wellness, Excelencia, Alianzas). |
| `/porquewhitebahamas` | 301 | `/nosotros#por-que-elegirnos` | Sección de ventajas competitivas verificadas. |
| `/wbparaarquitectos` | 301 | `/profesionales` | Landing B2B para estudios de arquitectura y cotas técnicas. |
| `/mercadoinmobiliario` | 301 | `/profesionales` | Soluciones para constructoras y provisión por volumen. |
| `/industriahotelera` | 301 | `/profesionales` | Equipamiento para hotelería, resorts y complejos de cabañas. |
| `/terapias` | 301 | `/bienestar` | Hub editorial de hidroterapia y bienestar en el hogar. |
| `/hidroterapia` | 301 | `/bienestar#hidroterapia` | Sección de hidroterapia y recuperación muscular. |
| `/hidromasaje-terapia` | 301 | `/bienestar#hidroterapia` | Redirección de variante redundante legada. |
| `/cascadas` | 301 | `/bienestar#hidroterapia` | Accesorios de recirculación y caída de agua. |
| `/ozonoterapia` | 301 | `/bienestar#ozonoterapia` | Purificación y oxigenación celular por ozono. |
| `/cromoterapia` | 301 | `/bienestar#cromoterapia` | Iluminación subacuática LED y relajación visual. |
| `/aromaterapia` | 301 | `/bienestar#aromaterapia` | Difusión de aceites botánicos en vapor y circuitos. |
| `/mantenimiento` | 301 | `/soporte#mantenimiento` | Guía de cuidado preventivo de bombas y acrílico. |
| `/entrega` | 301 | `/soporte#entrega` | Cobertura logística nacional y embalaje seguro. |
| `/garantias` | 301 | `/soporte#garantias` | Términos y alcance de garantía oficial de fábrica. |
| `/preguntasfrecuentes` | 301 | `/soporte#faq` | Preguntas frecuentes técnicas y comerciales. |
| `/veraccesoriosmobile.php` | 301 | `/productos` | Eliminación de endpoint PHP legado del sitio móvil. |
| `/hidromasajesindividuales/accesorios` | 301 | `/hidromasajesindividuales` | Evitar páginas vacías de accesorios desarticuladas. |
| `/hidromasajesdobles/accesorios` | 301 | `/hidromasajesdobles` | Evitar páginas vacías de accesorios desarticuladas. |
| `/hidromasajesesquineros/accesorios` | 301 | `/hidromasajesesquineros` | Evitar páginas vacías de accesorios desarticuladas. |
| `/minipiscinas/accesorios` | 301 | `/minipiscinas` | Evitar páginas vacías de accesorios desarticuladas. |

---

## 3. Preservación Nula de Pérdida para los 66 Modelos de Producto

A diferencia de migraciones traumáticas que aplanan las URLs a `/producto?id=123`, **la nueva arquitectura conserva la estructura exacta de ruta histórica**:

- `/hidromasajesindividuales/:slug` → Renderiza la ficha canónica correspondiente (26 modelos).
- `/hidromasajesdobles/:slug` → Renderiza la ficha canónica correspondiente (18 modelos).
- `/hidromasajesesquineros/:slug` → Renderiza la ficha canónica correspondiente (7 modelos).
- `/minipiscinas/:slug` → Renderiza la ficha canónica correspondiente (15 modelos).

### URLs de Configuración Profunda Auditadas
Se detectaron URLs históricas indexadas con niveles de accesorios:
- `/hidromasajesindividuales/NassauA165L/FULLSPA22accesorios` → **301 a** `/hidromasajesindividuales/NassauA165L`
- `/hidromasajesindividuales/BigIslandA150/Premium10accesorios` → **301 a** `/hidromasajesindividuales/BigIslandA150`

Las configuraciones se seleccionan en el cliente manteniendo la URL canónica limpia para evitar canibalización y contenido duplicado en Google.

---

## 4. Subdominio Móvil Legado (`m.whitebahamas.com`)

En el servidor DNS / Nginx de producción se debe aplicar la siguiente regla para desindexar el subdominio móvil heredado:

```nginx
server {
    server_name m.whitebahamas.com;
    return 301 https://whitebahamas.com.ar$request_uri;
}
```

---

## 5. Metadata, OpenGraph y Sitemap

- **Sitemap XML:** Generado dinámicamente en `/sitemap.xml` indexando los 86 endpoints activos con prioridad ponderada.
- **Robots.txt:** Configurado en `/robots.txt` permitiendo el rastreo universal de páginas comerciales y bloqueando rutas internas.
- **OpenGraph y Twitter Cards:** Definidos con etiquetas `es_AR`, imagen optimizada de 1200x630px y títulos no duplicados.
