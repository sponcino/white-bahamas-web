import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import FAQAccordion from '@/components/FAQAccordion';
import { CATEGORIES_INFO, getVerifiedProducts } from '@/data/products';
import { THERAPIES, FAQS, COMPANY_INFO } from '@/data/company';
import {
  ArrowRight,
  Sparkles,
  Droplets,
  Layers,
  Wrench,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Compass,
  FileText,
  PhoneCall,
  Clock,
  ChevronRight,
} from 'lucide-react';

export default function HomePage() {
  const verifiedProducts = getVerifiedProducts();

  return (
    <div className="flex flex-col">
      {/* 1. Hero Full-Bleed */}
      <Hero />

      {/* 2. Manifiesto Editorial (2-3 líneas de alto impacto visual) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold flex items-center justify-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Manifiesto White Bahamas
          </span>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-editorial text-slate-900 leading-[1.35] tracking-tight">
            «Creemos que el agua es el elemento esencial para restituir la armonía cotidiana. Concebimos cada hidromasaje y minipiscina como una pieza de arquitectura interior donde el diseño sobrio se une a la precisión hidroterápica».
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <span>Diseño sobrio</span>
            <span>·</span>
            <span>Acrílico sanitario de alta densidad</span>
            <span>·</span>
            <span>Fabricación argentina a medida</span>
          </div>
        </div>
      </section>

      {/* 3. Explorador Visual de Categorías */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold">
                Líneas de Producto
              </span>
              <h2 className="text-2xl sm:text-4xl font-editorial text-slate-900 mt-1">
                Explorador de Categorías
              </h2>
            </div>
            <Link
              href="/productos"
              className="text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-[#0099ff] flex items-center gap-1.5 transition-colors"
            >
              Ver catálogo completo (66 modelos)
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES_INFO.map((cat) => (
              <Link
                key={cat.id}
                href={`/${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#0099ff]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={cat.imageUrl}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {cat.itemCount && (
                    <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-full font-medium">
                      {cat.itemCount} modelos
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#0099ff] transition-colors">
                      {cat.name}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0099ff] group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {cat.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Modelos Validados y Destacados (Con medidas verificadas) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-emerald-700 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Datos Verificados en Sitio Oficial
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial text-slate-900 mt-3">
              Modelos con Especificaciones Confirmadas
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Consulte las fichas técnicas auditadas directamente del sitio público, con medidas reales, configuraciones de bomba y jets comprobados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verifiedProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bloque Narrativo: Fabricación a Medida & Asesoramiento */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(ellipse_at_center,rgba(0,153,255,0.15),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#23f0fb] font-semibold flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" />
                Ingeniería Sanitaria Argentina
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial leading-tight">
                Fabricación que se adapta a tu espacio, no al revés.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                A diferencia de los catálogos rígidos de importación, en White Bahamas diseñamos y fabricamos contemplando la arquitectura particular de cada proyecto. Evaluamos la posición óptima de la bomba autodrenante, la ubicación de las vistas cromadas y los faldones a medida para garantizar una instalación prolija y duradera.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#23f0fb]" />
                    Orientación de Bombas
                  </div>
                  <p className="text-xs text-slate-400">Ubicación a derecha o izquierda para facilitar el acceso de inspección.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#23f0fb]" />
                    Pases de Grifería
                  </div>
                  <p className="text-xs text-slate-400">Perforaciones y refuerzos para cascadas o llenados específicos.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/profesionales"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#23f0fb] hover:text-white transition-colors"
                >
                  Conocé las soluciones para arquitectos y constructoras
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="/images/excelencia.jpg"
                alt="Detalle de fabricación y excelencia en terminaciones White Bahamas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90">
                <span className="font-semibold block text-white">Compromiso de Calidad</span>
                Procesos de termoformado y refuerzo con altos estándares de durabilidad.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Módulo Editorial de Terapias y Bienestar */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold">
                Guía de Bienestar
              </span>
              <h2 className="text-3xl sm:text-4xl font-editorial text-slate-900 mt-1">
                La Ciencia de la Hidroterapia y el Relax
              </h2>
            </div>
            <Link
              href="/bienestar"
              className="text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-[#0099ff] flex items-center gap-1.5 transition-colors"
            >
              Explorar todas las terapias
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {THERAPIES.slice(0, 3).map((th) => (
              <div
                key={th.id}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between hover:border-[#0099ff]/40 hover:bg-white hover:shadow-lg transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0099ff] flex items-center justify-center mb-4">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {th.name}
                  </h3>
                  <p className="text-xs font-medium text-[#0099ff] mb-3">
                    {th.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {th.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Beneficios principales:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {th.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Soluciones para Profesionales: Arquitectura, Desarrollos y Hotelería */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <Image
                src="/images/negocios.jpg"
                alt="White Bahamas - Relaciones corporativas y soluciones para estudios de arquitectura y proyectos hoteleros"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                <span className="font-semibold block">Canal B2B White Bahamas</span>
                Atención directa para pliegos de licitación, desarrolladores y cadenas hoteleras.
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                Soluciones Profesionales
              </span>
              <h2 className="text-3xl sm:text-4xl font-editorial text-slate-900 leading-tight">
                Equipamiento integral para arquitectos, desarrollos y hotelería.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Brindamos soporte técnico en etapa de anteproyecto para garantizar compatibilidad con instalaciones sanitarias, cálculo de cargas en terrazas y requerimientos eléctricos. Ofrecemos condiciones comerciales escalables para compras por volumen.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Asistencia en pases de cañerías y especificaciones de memoria técnica</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Provisión para edificios multifamiliares con entrega programada por etapas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Línea exterior de alta resistencia UV para complejos turísticos y hoteles boutique</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/profesionales"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-black text-white text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <span>Conocer Canal Profesional</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Galería de Proyectos e Inspiración */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold">
                Portafolio e Inspiración
              </span>
              <h2 className="text-3xl sm:text-4xl font-editorial text-slate-900 mt-1">
                Instalaciones y Ambientes Reales
              </h2>
            </div>
            <Link
              href="/galeria"
              className="text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-[#0099ff] flex items-center gap-1.5 transition-colors"
            >
              Ver portafolio de inspiración
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="/images/wellness.jpg"
                alt="Ambiente de bienestar White Bahamas"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                Espacios Wellness
              </div>
            </div>

            <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="/images/product-02.jpg"
                alt="Hidromasaje doble White Bahamas en suite principal"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                Suites Residenciales
              </div>
            </div>

            <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="/images/product-04.jpg"
                alt="Minipiscina exterior instalada en deck"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                Decks & Terrazas
              </div>
            </div>

            <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="/images/redes_sociales.jpg"
                alt="Instalación White Bahamas con luz natural"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs font-medium">
                Iluminación Natural
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Proceso de Consulta en 4 Pasos Transparentes */}
      <section className="py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold">
              Metodología Consultiva
            </span>
            <h2 className="text-3xl sm:text-4xl font-editorial text-slate-900 mt-2">
              Cómo trabajamos tu proyecto
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Un flujo ordenado y transparente sin sorpresas constructivas ni costos ocultos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-3 relative">
              <span className="text-2xl font-editorial text-[#0099ff] font-bold">01</span>
              <h3 className="text-base font-semibold text-slate-900">Descubrir</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Explorá nuestras familias de hidromasajes y minipiscinas según las medidas disponibles en tu baño, terraza o jardín.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-3 relative">
              <span className="text-2xl font-editorial text-[#0099ff] font-bold">02</span>
              <h3 className="text-base font-semibold text-slate-900">Elegir y Configurar</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seleccioná el nivel de equipamiento (Base, Premium o Full SPA) y los accesorios de confort compatibles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-3 relative">
              <span className="text-2xl font-editorial text-[#0099ff] font-bold">03</span>
              <h3 className="text-base font-semibold text-slate-900">Solicitar Presupuesto</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enviá tu solicitud precargada por formulario o directamente a WhatsApp con el contexto completo del modelo elegido.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-3 relative">
              <span className="text-2xl font-editorial text-[#0099ff] font-bold">04</span>
              <h3 className="text-base font-semibold text-slate-900">Asesoramiento Técnico</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Un ingeniero comercial valida requerimientos de desagüe, potencia eléctrica y cronograma de entrega oficial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes Destacadas en Home */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold">
              Claridad y Transparencia
            </span>
            <h2 className="text-3xl font-editorial text-slate-900 mt-1">
              Preguntas Frecuentes
            </h2>
          </div>
          <FAQAccordion items={FAQS.slice(0, 4)} />
          <div className="text-center mt-8">
            <Link
              href="/soporte"
              className="text-xs font-semibold text-[#0099ff] hover:underline"
            >
              Ver todas las preguntas y guías de soporte →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
