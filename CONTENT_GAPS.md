# White Bahamas — Registro de Brechas de Contenido y Datos Pendientes de Aprobación (CONTENT_GAPS.md)

**Fecha de corte:** Octubre 2026  
**Propósito:** Identificar con total transparencia todos los datos, especificaciones, claims comerciales y textos legales que requieren validación por parte de los responsables de White Bahamas Argentina antes de su publicación definitiva.  
**Regla de negocio:** Ningún dato no verificado debe inventarse ni inferirse a partir de la nomenclatura de slugs o nombres de archivos. Los campos sin confirmación se tratan como `null` y permanecen ocultos o señalizados como "Pendiente de verificación técnica".

---

## 1. Claims Comerciales e Institucionales

| Elemento / Claim | Texto detectado en sitio original | Estado actual | Acción requerida |
|---|---|---|---|
| **Trayectoria e instalaciones** | "Más de 10 años y 3.000 productos instalados" | **No verificado / Desactualizado** | Confirmar cifras vigentes con gerencia comercial antes de publicar en Nosotros/Home. |
| **Atención en Showroom** | "Av. Cabildo 4769, 4º B, CABA, CP 1429" | **Pendiente de confirmación** | Confirmar si la atención es presencial con cita previa, showroom abierto al público o exclusivamente oficinas administrativas. |
| **Teléfono y WhatsApp** | `+54 9 11 2496-7000` / `info@whitebahamas.com` | **Activo observado** | Validar si este es el número exclusivo de cotizaciones y si el buzón de correo recibe leads con trazabilidad. |
| **Instalación incluida** | Inferido en ciertas consultas | **No comprobado** | Indicar que la instalación se realiza bajo manual técnico o asesoramiento consultivo, sin prometer instalación llave en mano sin costo. |

---

## 2. Catálogo y Especificaciones Técnicas (66 Modelos Identificados)

De los 66 modelos relevados en el inventario de migración:

- **Modelos con especificaciones confirmadas puntualmente (3 modelos):**
  1. `Nassau A 180 L` (Individual): 180 cm × 90 cm × 55 cm. Configuraciones: Base 5 (5 jets, bomba 3/4 HP autodrenante), Premium 10 (10 jets, bomba 1 HP), Full SPA 22 accesorios.
  2. `Bimini 160` (Individual): 160 cm × 70 cm × 42 cm. Configuración Base 5 (bomba autodrenante 1/2 HP), Premium 10 y Full 22 con luces.
  3. `White Ocean Bay A 180-150` (Minipiscina): 180 cm × 150 cm × 55 cm. Configuraciones: Especial 10 con luces (10 jets, 2 luces LED cromoterapia), Premium 16 y Full SPA 42 con Luces.

- **Modelos pendientes de ficha técnica oficial (63 modelos):**
  - Hidromasajes Individuales: Bimini Beach A120, A130, A140; Bimini 150, 170; Ocean Cay A150-75, A170-75, A150-80, A160-80, A170-80, A180-80, A170-90L, A180-90L, A190-90L; Big Island A150, A160, A170, A180; Oval Individual A185-100; Nassau A165L, A190L; Freeport A80L, A90L, A105L.
  - Hidromasajes Dobles: Grand Ocean Cay 150-180 Doble Repo, Oval A185-100, Grand Ocean Cay A150-120, A165-120, A180-120, A150-130, A165-130, A180-130, Grand Nassau A165XLD, A180XLD, Grand Freeport A180XLD, Bahía A150, A160, Grand Bahía A180-68, White Island A180-150 con Reposera, A175-130, A180-150, White Ocean Cay A180-150.
  - Hidromasajes Esquineros: Paradise Sand G140, Paradise Stone 140, Paradise Beach G130D, G150D, A150D, A160D, Paradise Beach Minimalista A150.
  - Minipiscinas: King Island A290, Royal Bahamas Octogonal A230-90, Royal Bahamas A230-105 con Reposera, Royal Bahamas A230-90 con Reposera, Grand Bahamas A195-73 con Reposera, Grand Bahamas A195-85 con Reposera, Grand Bahamas Minimalista A170-60, A180-60, A195-50, A195-65, Grand Island A180-87, Grand Bahamas Redonda A200, Grand Bahía A180-65, White Ocean Bay A180-130.
  - Sauna y Vapor: Niveles citados "Standard", "Premiun" y "Deluxe" en textos legados sin ficha técnica contrastada.

**Acción de migración implementada en la plataforma:** Los 63 modelos se cargan con su slug canónico, título editorial, familia correspondiente y estado `verificationStatus: 'pending'`, preservando su indexación y permitiendo presupuestar el modelo exacto sin mostrar datos erróneos inventados.

---

## 3. Condiciones Legales, Garantías y Entrega

| Tema | Situación en sitio original | Riesgo | Recomendación |
|---|---|---|---|
| **Página de Garantías** | Documento heredado con fecha marzo 2019, duplicación del término "Lifetime" y errata en dominio (`whiteabahamas.com`). | Publicar términos que no representen la política actual de fábrica o compromisos legales no avalados. | **Publicar únicamente principios de garantía de fábrica** y derivar las condiciones específicas de cada modelo al asesor comercial hasta aprobación legal. |
| **Política de Entrega** | Mención a cobertura nacional con transportes expresos. | Falta de detalle sobre costos de flete, seguro de traslado y descarga en destino. | Mantener texto consultivo claro: "Envíos a todo el país mediante transportes autorizados, coordinados de forma personalizada". |
| **Privacidad y Datos Personales** | No existía política de privacidad accesible en el formulario original. | Incumplimiento de la Ley 25.326 de Protección de los Datos Personales (Argentina). | Añadir cláusula informativa de consentimiento antes de disparar el envío de cotización o contacto. |

---

## 4. Contenido de Bienestar y Terapias

- Los textos originales incluían términos como "Ducha Escosesa" (error ortográfico) y menciones a beneficios de salud.
- **Acción implementada:** Se corrigió la ortografía a español estándar de Argentina ("Ducha escocesa", "Baño de vapor", "Premium", "Minipiscinas") y se adaptó el tono a confort, relajación, recuperación muscular y alivio de tensiones cotidianas, eliminando cualquier promesa diagnóstica o terapéutica médica no respaldada.

---

## 5. Documentos Técnicos descargables (PDFs y Planos)

- Las llamadas a la función `downloadPdf()` en el sitio original apuntaban a endpoints no recuperados en la auditoría inicial.
- **Acción implementada:** Los botones de "Descargar ficha técnica (PDF)" muestran el estado accesible "Documentación técnica disponible a pedido a través del asesor de proyecto", evitando enlaces rotos (404) y canalizando el interés del profesional hacia el funnel comercial.
