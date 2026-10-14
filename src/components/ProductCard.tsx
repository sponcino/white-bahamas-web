'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { useQuote } from '@/context/QuoteContext';
import { CheckCircle2, AlertCircle, ArrowRight, FileText, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openQuote } = useQuote();
  const primaryImg = product.images.find((img) => img.isPrimary) || product.images[0];
  const isVerified = product.verificationStatus === 'verified';
  const hasDimensions = product.dimensionsCm.length && product.dimensionsCm.width;

  const handleQuickQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openQuote({
      productId: product.id,
      productName: product.displayName,
      category: product.categoryName,
      dimensions: hasDimensions
        ? `${product.dimensionsCm.length} x ${product.dimensionsCm.width} x ${product.dimensionsCm.depth || '-'} cm`
        : undefined,
      configurationName: product.configurations[0]?.name,
    });
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:border-[#0099ff]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Imagen con badge y zoom sutil */}
        <Link
          href={`/${product.category}/${product.slug}`}
          className="relative aspect-4/3 block w-full overflow-hidden bg-slate-100"
        >
          <Image
            src={primaryImg?.url || '/images/product-01.jpg'}
            alt={primaryImg?.alt || product.displayName}
            fill
            className="object-cover group-hover:scale-104 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Badge de Verificación */}
          <div className="absolute top-3 left-3 flex items-center gap-1">
            {isVerified ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/80 text-emerald-300 backdrop-blur-md shadow-sm border border-emerald-500/30">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Medidas verificadas
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-900/70 text-slate-300 backdrop-blur-md border border-slate-700/50">
                <AlertCircle className="w-2.5 h-2.5 text-amber-400" />
                Ficha a consultar
              </span>
            )}
          </div>

          {/* Categoría Chip */}
          <div className="absolute bottom-3 left-3">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-black/60 text-white backdrop-blur-md uppercase tracking-wider">
              {product.collection || product.categoryName}
            </span>
          </div>
        </Link>

        {/* Contenido textual */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#0099ff] transition-colors leading-snug">
              <Link href={`/${product.category}/${product.slug}`}>
                {product.displayName}
              </Link>
            </h3>
          </div>

          {/* Medidas confirmadas o estado pendiente */}
          <div className="mb-3.5">
            {hasDimensions ? (
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                  {product.dimensionsCm.length} x {product.dimensionsCm.width} cm
                </span>
                {product.dimensionsCm.depth && (
                  <span className="text-slate-500 text-[11px]">
                    Prof. {product.dimensionsCm.depth} cm
                  </span>
                )}
              </div>
            ) : (
              <span className="text-[11px] text-slate-400 italic">
                Dimensiones sujetas a plano de fabricación
              </span>
            )}
          </div>

          {/* Equipamiento disponible */}
          {product.configurations.length > 0 ? (
            <div className="flex flex-wrap gap-1 mb-4">
              {product.configurations.map((conf) => (
                <span
                  key={conf.id}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100"
                >
                  {conf.name}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
              {product.shortDescription || 'Equipamiento y personalización técnica según proyecto.'}
            </p>
          )}
        </div>
      </div>

      {/* Acciones de la tarjeta */}
      <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
        <Link
          href={`/${product.category}/${product.slug}`}
          className="text-xs font-semibold text-slate-700 hover:text-[#0099ff] flex items-center gap-1 transition-colors"
        >
          Ver detalles
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <button
          type="button"
          onClick={handleQuickQuote}
          className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-[#0099ff] text-white text-xs font-medium transition-colors flex items-center gap-1.5 shadow-xs"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Presupuestar</span>
        </button>
      </div>
    </div>
  );
}
