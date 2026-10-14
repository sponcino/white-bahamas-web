# Sistema de Diseño White Bahamas — Guía de Identidad, Tokens y Motion

**Versión:** 2.0 (Rediseño 2026)  
**Sitio fuente inspeccionado:** https://whitebahamas.com.ar/  
**Archivos CSS inspeccionados:** `css/00_main.css?v=8` y `css/00_main_wb.css?v=10`  
**Filosofía estética:** *Premium Minimalism + Wellness Architecture* (Arquitectura contemporánea, agua, diseño interior y bienestar).

---

## 1. Trazabilidad de Color e Identidad Cromática

La inspección directa del código fuente original reveló los siguientes valores exactos:

| Token / Rol | Valor Original Detectado | Origen en CSS original | Tratamiento en Rediseño | Estado |
|---|---|---|---|---|
| **Primary Action Blue** | `#0099FF` / `#00BBFF` | `00_main_wb.css` (`.button-action { background: #0099FF; }`), `.i-nav a:hover { color: #00bbff; }` | Azul de acción primario White Bahamas (simboliza agua, pureza, hidroterapia). | **Confirmado en sitio original** |
| **Aqua Cyan Accent** | `#23F0FB` | `00_main.css` (`.headline { background: #23F0FB; }`) | Acento sutil para micro-indicadores, badges de estado "Full SPA" e iluminación LED/cromoterapia. | **Confirmado en sitio original** |
| **Dark Neutral / Charcoal** | `#2B2925` | `00_main_wb.css` (`.button-action:hover { background: #2B2925; }`) | Grafito cálido para tipografía principal, bordes refinados y superficies contrastadas. | **Confirmado en sitio original** |
| **Pure Black** | `#000000` | `00_main.css` (`.i-nav { background: black; }`, `body { background: black; }`) | Utilizado con sobriedad en navigation bar sticky y textos de alta jerarquía. | **Confirmado en sitio original** |
| **Pure White** | `#FFFFFF` | `00_main.css` (`.box { background: white; }`) | Fondo principal luminoso, acrílico sanitario y superficies limpias. | **Confirmado en sitio original** |
| **Hover Neutral Gray** | `#ECECEC` | `00_main_wb.css` (`.js-background:hover { background-color: #ececec; }`) | Fondos de tarjetas de especificaciones técnicas y divisores neutros. | **Confirmado en sitio original** |
| **Soft Surface Warm Gray** | `#F7F7F8` | *Token propuesto para modernización* | Superficie neutra para alternancia de ritmo en bloques editoriales. | *Añadido para el rediseño (Documentado)* |
| **Border Subtle** | `#E5E7EB` / `rgba(0,0,0,0.08)` | *Token propuesto para modernización* | Delimitación sutil sin cargar visualmente las retículas. | *Añadido para el rediseño (Documentado)* |
| **Success / Verified Green** | `#059669` | *Token funcional propuesto* | Chips de "Medidas verificadas" y confirmación de presupuesto. | *Añadido para el rediseño (Documentado)* |
| **WhatsApp Brand Green** | `#25D366` | Canal comercial oficial | Acceso directo contextual con mensaje precargado. | **Confirmado para canal oficial** |

### Tokens CSS Centralizados (`src/app/globals.css`)

```css
:root {
  /* Identidad cromática original confirmada */
  --wb-blue: #0099ff;
  --wb-blue-hover: #007acc;
  --wb-blue-light: #e6f4ff;
  --wb-cyan: #23f0fb;
  --wb-charcoal: #2b2925;
  --wb-black: #0a0a0a;
  --wb-white: #ffffff;
  --wb-gray-surface: #f8fafc;
  --wb-gray-hover: #ececec;
  --wb-gray-border: #e2e8f0;
  --wb-text-primary: #1e293b;
  --wb-text-secondary: #64748b;
  --wb-text-muted: #94a3b8;

  /* Tipografía */
  --font-serif: "Playfair Display", "PT Serif", Georgia, serif;
  --font-sans: "Plus Jakarta Sans", "Roboto", -apple-system, BlinkMacSystemFont, sans-serif;

  /* Radios de borde sobrios */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Sombras arquitectónicas suaves */
  --shadow-subtle: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);
  --shadow-card: 0 10px 30px -10px rgba(0, 0, 0, 0.06);
  --shadow-floating: 0 20px 40px -15px rgba(0, 0, 0, 0.12);
}
```

---

## 2. Tipografía y Jerarquía Editorial

El sitio original empleaba `PT Serif` y `Crimson Text` para titulares con espaciado amplio (`letter-spacing: 0.15em - 0.5em`), combinado con `Roboto`.

Para el rediseño mantenemos esa impronta editorial pero con proporciones contemporáneas de alta legibilidad en español de Argentina:

1. **Headings (Titulares Editoriales):**  
   - Familia: Serif refinada (`Playfair Display` / `PT Serif`).
   - Peso: 400 (regular) a 600 (semi-bold) para no generar pesadez visual.
   - Letter-spacing: `0.02em` a `0.1em` en mayúsculas pequeñas / kickers.
   - Tamaños: Display 3.5rem (56px) en desktop, H1 2.5rem (40px), H2 2rem (32px), H3 1.5rem (24px).

2. **Cuerpo y UI:**  
   - Familia: Sans-serif limpia y geométrica (`Plus Jakarta Sans` / `Roboto`).
   - Peso: 400 regular, 500 medium, 600 semi-bold.
   - Interlineado generoso (`line-height: 1.6 - 1.7`) para facilitar lectura descansada.

---

## 3. Retícula y Layout

- **Estructura Desktop:** Grid de 12 columnas con ancho máximo contenido de 1320px (`max-w-7xl`), márgenes laterales de 24px a 48px según viewport.
- **Espaciado vertical:** Módulos separados por ritmos amplios (`py-16` a `py-24` en desktop, `py-10` en mobile) para generar respiro y sofisticación arquitectónica.
- **Tarjetas y superficies:** Prohibido el efecto plantilla repetitiva. Se alternan composiciones asimétricas (imagen 60% + texto 40%), galerías de ritmo dinámico, bloques de texto manifiesto a ancho parcial y fichas técnicas estructuradas.

---

## 4. Motion Design y Principios de Animación

El movimiento guía la atención sin entorpecer la velocidad ni causar fatiga:

1. **Secuencia Hero:**  
   - 0ms: Fotografía principal ingresa con fade-in suave y escala sutil (1.02 -> 1.00).
   - 150ms: Kicker editorial de bienvenida.
   - 300ms: Título principal con reveal vertical de 16px.
   - 450ms: Bajada de texto comercial.
   - 600ms: Acciones primarias y secundarias ("Explorar productos" / "Solicitar asesoramiento").

2. **Scroll Reveals:**  
   - Implementado mediante `IntersectionObserver` y clases CSS performantes (`will-change: opacity, transform`).
   - Traslación máxima de 20px en eje Y para evitar saltos perceptuales.
   - Duración: 600ms con curva de aceleración natural `cubic-bezier(0.16, 1, 0.3, 1)`.

3. **Microinteracciones en Catálogo y Ficha:**  
   - Hover en tarjetas de producto: Zoom controlado de imagen (`transform: scale(1.03)` en 400ms) + elevación sutil de sombra.
   - Cambio de configuración (Base 5 / Premium 10 / Full SPA): Transición de specs y fotos con crossfade limpio sin saltos de altura en el DOM.
   - Drawer de cotización: Desplazamiento lateral desde la derecha (`translate-x`) con backdrop blur atenuado.

4. **Accesibilidad y `prefers-reduced-motion`:**  
   - Todas las animaciones se desactivan o se reducen a crossfade instantáneo si el usuario tiene activada la preferencia de movimiento reducido en el sistema operativo.
   - Estados `:focus-visible` con anillo contrastado (`ring-2 ring-wb-blue`) para navegación por teclado completa.
