import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Sparkles, CheckCircle2, Shield, Wrench, HeartHandshake, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quiénes Somos, Filosofía y Trayectoria | White Bahamas Argentina',
  description:
    'Conocé la historia, pilares de diseño y excelencia productiva de White Bahamas Argentina. Especialistas en hidromasajes y equipamiento SPA fabricado en el país.',
  alternates: {
    canonical: 'https://whitebahamas.com.ar/nosotros',
  },
};

export default function NosotrosPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Nosotros' }]} />

        {/* Header Editorial */}
        <div className="py-10 mb-12 border-b border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Empresa & Trayectoria
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-slate-900 tracking-tight">
              Ingeniería Sanitaria, Diseño y Vocación por el Bienestar
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
              White Bahamas nació para transformar el cuarto de baño tradicional en un refugio de recuperación y desconexión personal. Fabricamos en Argentina con materiales de primera línea y asesoramiento técnico directo de fábrica.
            </p>
          </div>
        </div>

        {/* 3 Pilares Fundamentales (Wellness, Excelencia, Negocios) con Fotos Originales */}
        <div className="space-y-16 mb-20">
          {/* Pilar 1: Wellness */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl border border-slate-200/90 p-8 lg:p-10 shadow-xs">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#0099ff] font-bold">
                Pilar 01 · Filosofía
              </span>
              <h2 className="text-2xl sm:text-3xl font-editorial text-slate-900">
                Wellness como Eje de Vida
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                El bienestar no es un accesorio decorativo: es una necesidad de salud física y mental. Diseñamos circuitos de agua con bombas autodrenantes que proporcionan un masaje muscular preciso sin retención de agua residual, garantizando higiene absoluta y confort térmico sostenido.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ergonomía anatómica adaptada a la postura natural de descanso</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sistemas de cromoterapia y luces LED subacuáticas para serenidad visual</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="/images/wellness.jpg"
                alt="Filosofía Wellness White Bahamas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Pilar 2: Excelencia Constructiva */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl border border-slate-200/90 p-8 lg:p-10 shadow-xs">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100 lg:order-1">
              <Image
                src="/images/excelencia.jpg"
                alt="Excelencia constructiva en acrílico sanitario White Bahamas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4 lg:order-2">
              <span className="text-xs uppercase tracking-widest text-[#0099ff] font-bold">
                Pilar 02 · Calidad
              </span>
              <h2 className="text-2xl sm:text-3xl font-editorial text-slate-900">
                Excelencia en Cada Detalle Constructivo
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Utilizamos acrílico sanitario termoformado de alta densidad con refuerzo estructural de fibra de vidrio y resinas poliuretánicas. Esta materialidad previene la formación de microfisuras, conserva el brillo original con un simple mantenimiento y resiste los agentes químicos no abrasivos.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Superficie atérmica y no porosa que inhibe la fijación de bacterias</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Vistas de jets y reguladores de aire en color cromo de alta durabilidad</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pilar 3: Venta Consultiva y Alianzas Comerciales */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl border border-slate-200/90 p-8 lg:p-10 shadow-xs">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#0099ff] font-bold">
                Pilar 03 · Compromiso
              </span>
              <h2 className="text-2xl sm:text-3xl font-editorial text-slate-900">
                Relaciones Comerciales Transparentes
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No somos intermediarios ni comercializadores de stock genérico. Ofrecemos trato directo entre fábrica y cliente, brindando presupuestos trazables, asesoramiento preventivo para instalaciones de desagüe y potencia, y soporte postventa confiable.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Atención dedicada para estudios de arquitectura y desarrolladores</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Despachos asegurados a todo el territorio argentino</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src="/images/negocios.jpg"
                alt="Compromiso comercial y atención al cliente White Bahamas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-editorial">
            Conocé nuestros modelos o visitanos en el showroom
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Coordiná una entrevista con nuestros especialistas técnicos para ver terminaciones, consultar medidas y recibir cotización oficial.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/productos"
              className="px-6 py-3 rounded-xl bg-[#0099ff] hover:bg-[#0088e6] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Explorar Catálogo
            </Link>
            <Link
              href="/contacto"
              className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Ver Canales de Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
