'use client';

import React from 'react';
import { Product } from '@/types/product';
import { CheckCircle2, AlertCircle, Shield, Info } from 'lucide-react';

interface SpecTableProps {
  product: Product;
}

export default function SpecTable({ product }: SpecTableProps) {
  const isVerified = product.verificationStatus === 'verified';
  const hasDims = product.dimensionsCm.length && product.dimensionsCm.width;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
      <div className="px-6 py-4.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
            Especificaciones Técnicas
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Información dimensional, constructiva y requerimientos de obra
          </p>
        </div>
        <div>
          {isVerified ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Medidas confirmadas
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
              Pendiente de verificación
            </span>
          )}
        </div>
      </div>

      <div className="divide-y divide-slate-100 text-xs sm:text-sm">
        {/* Dimensiones */}
        <div className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <span className="font-medium text-slate-500">Dimensiones (Largo x Ancho)</span>
          <span className="sm:col-span-2 text-slate-900 font-semibold">
            {hasDims
              ? `${product.dimensionsCm.length} cm x ${product.dimensionsCm.width} cm`
              : 'Consultar dimensiones específicas para este modelo'}
          </span>
        </div>

        {/* Profundidad */}
        <div className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <span className="font-medium text-slate-500">Profundidad útil</span>
          <span className="sm:col-span-2 text-slate-900">
            {product.dimensionsCm.depth ? `${product.dimensionsCm.depth} cm` : 'Pendiente de plano técnico'}
          </span>
        </div>

        {/* Capacidad */}
        <div className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <span className="font-medium text-slate-500">Capacidad sugerida</span>
          <span className="sm:col-span-2 text-slate-900">
            {product.capacityPeople
              ? `${product.capacityPeople} ${product.capacityPeople > 1 ? 'personas' : 'persona'}`
              : 'Monoplaza / según disposición interior'}
          </span>
        </div>

        {/* Material */}
        <div className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <span className="font-medium text-slate-500">Material y terminación</span>
          <span className="sm:col-span-2 text-slate-900">
            {product.material || 'Acrílico sanitario termoformado de alta resistencia UV'}
          </span>
        </div>

        {/* Instalación */}
        <div className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <span className="font-medium text-slate-500">Tipo de instalación</span>
          <span className="sm:col-span-2 text-slate-900">
            {product.installation?.join(' · ') || 'Encastrada o sobre estructura'}
          </span>
        </div>

        {/* Ámbito de uso */}
        <div className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <span className="font-medium text-slate-500">Ámbito de uso</span>
          <span className="sm:col-span-2 text-slate-900 capitalize">
            {product.indoorOutdoor === 'ambos'
              ? 'Interior y exterior (apto deck / galería)'
              : product.indoorOutdoor || 'Interior'}
          </span>
        </div>

        {/* Requerimientos técnicos */}
        <div className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-50/50">
          <span className="font-medium text-slate-500">Requerimientos de obra</span>
          <span className="sm:col-span-2 text-slate-700 leading-relaxed text-xs">
            {product.technicalRequirements ||
              'Conexión eléctrica 220V con disyuntor independiente y toma de agua 1/2". Consultar manual según configuración.'}
          </span>
        </div>

        {/* Trazabilidad y fuente de datos */}
        <div className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-50/80">
          <span className="font-medium text-slate-500 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-blue-500" />
            Fuente de verificación
          </span>
          <span className="sm:col-span-2 text-slate-500 text-xs italic">
            {product.verificationSource || 'Inventario maestro White Bahamas (octubre 2026)'}
          </span>
        </div>
      </div>
    </div>
  );
}
