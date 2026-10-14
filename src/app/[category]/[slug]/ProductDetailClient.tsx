'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Product, ConfigurationOption } from '@/types/product';
import { useQuote } from '@/context/QuoteContext';
import { COMPANY_INFO } from '@/data/company';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductGallery from '@/components/ProductGallery';
import SpecTable from '@/components/SpecTable';
import ConfigurationSelector from '@/components/ConfigurationSelector';
import ProductCard from '@/components/ProductCard';
import {
  CheckCircle2,
  AlertCircle,
  FileText,
  MessageCircle,
  Download,
  ShieldCheck,
  Droplets,
  Ruler,
  Sparkles,
  ArrowRight,
  Info,
} from 'lucide-react';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const { openQuote } = useQuote();
  const [selectedConfig, setSelectedConfig] = useState<ConfigurationOption | undefined>(
    product.configurations[0]
  );

  const isVerified = product.verificationStatus === 'verified';
  const hasDims = product.dimensionsCm.length && product.dimensionsCm.width;

  const formattedDims = hasDims
    ? `${product.dimensionsCm.length} x ${product.dimensionsCm.width} cm ${
        product.dimensionsCm.depth ? `(prof. ${product.dimensionsCm.depth} cm)` : ''
      }`
    : 'A confirmar según plano';

  const handleOpenQuote = () => {
    openQuote({
      productId: product.id,
      productName: product.displayName,
      category: product.categoryName,
      dimensions: formattedDims,
      configurationName: selectedConfig?.name,
    });
  };

  const whatsappMessage = encodeURIComponent(
    `¡Hola White Bahamas! Deseo consultar presupuesto y disponibilidad para:\n• Modelo: ${product.displayName}\n• Familia: ${product.categoryName}\n• Medidas: ${formattedDims}${
      selectedConfig ? `\n• Configuración: ${selectedConfig.name}` : ''
    }`
  );

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${whatsappMessage}`;

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Productos', href: '/productos' },
            { label: product.categoryName, href: `/${product.category}` },
            { label: product.displayName },
          ]}
        />

        {/* Sección Principal del Producto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-4 mb-16">
          {/* Galería (5 cols en desktop) */}
          <div className="lg:col-span-6 space-y-6">
            <ProductGallery images={product.images} productName={product.displayName} />

            {/* Ficha técnica PDF & Descargas con transparencia */}
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0099ff] flex items-center justify-center shrink-0">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">
                    Ficha Técnica y Planos de Obra
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Formatos PDF y cotas para planos disponibles bajo consulta
                  </p>
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#0099ff] hover:underline shrink-0"
              >
                Solicitar PDF
              </a>
            </div>
          </div>

          {/* Información y Configurador (6 cols en desktop) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header de la ficha */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-900 text-white uppercase tracking-wider">
                  {product.categoryName}
                </span>

                {isVerified ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Medidas oficiales verificadas
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    Datos sujetos a confirmación técnica
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-editorial text-slate-900 leading-tight">
                {product.displayName}
              </h1>

              {/* Medidas grandes inmediatamente visibles */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
                    <Ruler className="w-4 h-4 text-[#0099ff]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Dimensiones del casco
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {hasDims
                        ? `${product.dimensionsCm.length} x ${product.dimensionsCm.width} cm`
                        : 'Medidas según proyecto'}
                    </span>
                  </div>
                </div>

                {product.dimensionsCm.depth && (
                  <div className="text-right border-l border-slate-200 pl-4">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Profundidad
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {product.dimensionsCm.depth} cm
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Descripción */}
            <div className="prose prose-sm text-slate-600 leading-relaxed">
              <p>{product.description || product.shortDescription}</p>
            </div>

            {/* Configurador de Equipamiento (Si el modelo posee configuraciones validadas) */}
            {product.configurations.length > 0 && (
              <ConfigurationSelector
                configurations={product.configurations}
                selectedConfigId={selectedConfig?.id || ''}
                onSelectConfig={(conf) => setSelectedConfig(conf)}
              />
            )}

            {/* Acciones principales de compra/cotización */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                <span>Venta consultiva directa de fábrica</span>
                <span className="font-semibold text-slate-900">Envíos a todo el país</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleOpenQuote}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0099ff] hover:bg-[#0088e6] text-white font-medium text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-[#0099ff]/20 active:scale-98"
                >
                  <FileText className="w-4 h-4" />
                  <span>Solicitar Presupuesto</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl border border-emerald-500/40 text-emerald-800 hover:bg-emerald-50 font-medium text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp con Modelo</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de Especificaciones Técnicas */}
        <div className="mb-16">
          <SpecTable product={product} />
        </div>

        {/* Modelos Relacionados */}
        {relatedProducts.length > 0 && (
          <div className="pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold">
                  Más opciones
                </span>
                <h3 className="text-2xl font-editorial text-slate-900 mt-1">
                  Modelos de la misma familia
                </h3>
              </div>
              <Link
                href={`/${product.category}`}
                className="text-xs font-semibold text-slate-900 hover:text-[#0099ff] flex items-center gap-1"
              >
                Ver toda la categoría
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Bar en Mobile para CRO */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 lg:hidden z-30 shadow-lg flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs font-bold text-slate-900 truncate">
            {product.displayName}
          </div>
          <div className="text-[11px] text-slate-500 truncate">
            {selectedConfig ? selectedConfig.name : formattedDims}
          </div>
        </div>
        <button
          type="button"
          onClick={handleOpenQuote}
          className="shrink-0 px-4 py-2.5 rounded-lg bg-[#0099ff] text-white text-xs font-semibold uppercase tracking-wider shadow-sm"
        >
          Presupuestar
        </button>
      </div>
    </div>
  );
}
