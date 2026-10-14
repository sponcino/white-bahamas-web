'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useQuote } from '@/context/QuoteContext';
import { Sparkles, ArrowRight, ShieldCheck, FileText } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'individuales' | 'dobles' | 'minipiscinas' | 'wellness';
  categoryLabel: string;
  image: string;
  locationNote: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Suite Residencial con Hidromasaje Doble',
    category: 'dobles',
    categoryLabel: 'Hidromasajes Dobles',
    image: '/images/product-02.jpg',
    locationNote: 'Instalación integrada con revestimiento atérmico y vistas abiertas.',
  },
  {
    id: '2',
    title: 'Minipiscina SPA en Terraza Privada',
    category: 'minipiscinas',
    categoryLabel: 'Minipiscinas SPA',
    image: '/images/product-04.jpg',
    locationNote: 'Montaje sobre estructura de deck con circuito de cromoterapia nocturna.',
  },
  {
    id: '3',
    title: 'Cuarto de Baño Contemporáneo Minimalista',
    category: 'individuales',
    categoryLabel: 'Hidromasajes Individuales',
    image: '/images/product-01.jpg',
    locationNote: 'Modelo individual encastrado en acrílico blanco brillante.',
  },
  {
    id: '4',
    title: 'Espacio de Relajación y Luz Natural',
    category: 'wellness',
    categoryLabel: 'Arquitectura Wellness',
    image: '/images/redes_sociales.jpg',
    locationNote: 'Integración armónica con carpinterías de alta prestación.',
  },
  {
    id: '5',
    title: 'Gabinete de Bienestar & Sauna',
    category: 'wellness',
    categoryLabel: 'Sauna y Vapor',
    image: '/images/wellness.jpg',
    locationNote: 'Área de termoterapia y descanso con iluminación cálida.',
  },
  {
    id: '6',
    title: 'Hidromasaje Esquinero en Espacio Angular',
    category: 'individuales',
    categoryLabel: 'Hidromasajes Esquineros',
    image: '/images/product-03.jpg',
    locationNote: 'Optimización de metros cuadrados con máxima superficie de agua.',
  },
];

export default function GaleriaPage() {
  const { openQuote } = useQuote();
  const [filter, setFilter] = useState<'all' | 'individuales' | 'dobles' | 'minipiscinas' | 'wellness'>('all');

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Proyectos e Inspiración' }]} />

        {/* Header */}
        <div className="py-10 mb-8 border-b border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Portafolio de Instalaciones
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-slate-900 tracking-tight">
              Inspiración y Espacios de Bienestar
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
              Explorá cómo nuestros modelos de hidromasaje y minipiscinas se integran a la arquitectura residencial, terrazas, suites principales y áreas de spa. Fotografías reales de productos White Bahamas.
            </p>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Todos los espacios' },
            { id: 'individuales', label: 'Hidromasajes Individuales' },
            { id: 'dobles', label: 'Hidromasajes Dobles' },
            { id: 'minipiscinas', label: 'Minipiscinas' },
            { id: 'wellness', label: 'Wellness & Spa' },
          ].map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                filter === btn.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Grid de Galería */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-104 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                  {item.categoryLabel}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-semibold text-slate-900 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {item.locationNote}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() =>
                      openQuote({
                        notes: `Consulta inspirada en el proyecto: ${item.title}`,
                      })
                    }
                    className="text-xs font-semibold text-[#0099ff] hover:underline flex items-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Cotizar espacio similar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
