'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuote } from '@/context/QuoteContext';
import { COMPANY_INFO } from '@/data/company';
import { ArrowRight, Sparkles, ShieldCheck, Droplets, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const { openQuote } = useQuote();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950 text-white">
      {/* Fotografía de fondo auténtica con gradiente cinematográfico y respiro */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/redes_sociales.jpg"
          alt="White Bahamas Argentina - Espacio de relajación y bienestar con hidromasaje y luz natural"
          fill
          priority
          className="object-cover object-center opacity-45 scale-102 transition-transform duration-1000"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,153,255,0.08),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center flex flex-col items-center">
        {/* Kicker Editorial */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs uppercase tracking-widest text-[#23f0fb] font-semibold mb-6 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Arquitectura · Agua · Bienestar Contemporáneo</span>
        </div>

        {/* Titular Editorial Contundente */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-editorial font-normal text-white max-w-4xl tracking-tight leading-[1.12] mb-6">
          El arte de habitar el bienestar a través del agua.
        </h1>

        {/* Propuesta de Valor Breve */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed mb-8">
          Hidromasajes de alta gama, minipiscinas y sistemas SPA fabricados a medida en Argentina para residencias contemporáneas, desarrollos y proyectos hoteleros.
        </p>

        {/* CTAs coordinados */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <Link
            href="/productos"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0099ff] hover:bg-[#0088e6] text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#0099ff]/25 active:scale-98"
          >
            <span>Explorar Colección 2026</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={() => openQuote()}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-200 active:scale-98"
          >
            Solicitar asesoramiento
          </button>
        </div>

        {/* Badges de Confianza y Calidad */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-3xl w-full">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#23f0fb]" />
              Fabricación a Medida
            </div>
            <p className="text-[11px] text-slate-400">Adaptación a planos y requerimientos de obra</p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#23f0fb]" />
              Acrílico Sanitario
            </div>
            <p className="text-[11px] text-slate-400">Termoformado reforzado con fibra de alta densidad</p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#23f0fb]" />
              Alcance Nacional
            </div>
            <p className="text-[11px] text-slate-400">Envíos coordinados a todo el territorio argentino</p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#23f0fb]" />
              Venta Consultiva
            </div>
            <p className="text-[11px] text-slate-400">Asesoramiento directo de ingenieros de producto</p>
          </div>
        </div>
      </div>
    </section>
  );
}
