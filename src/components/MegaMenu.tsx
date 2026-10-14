'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES_INFO } from '@/data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xl z-40 transition-all duration-300 py-8 px-6 lg:px-12 animate-fade-in"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Colección Oficial White Bahamas
            </span>
            <h3 className="text-xl font-editorial text-slate-900 mt-1">
              Catálogo de Hidromasajes, Minipiscinas y SPA
            </h3>
          </div>
          <Link
            href="/productos"
            onClick={onClose}
            className="text-xs font-semibold text-slate-900 hover:text-[#0099ff] flex items-center gap-1.5 transition-colors uppercase tracking-wider"
          >
            Ver todos los modelos (66)
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES_INFO.map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.slug}`}
              onClick={onClose}
              className="group block p-3 rounded-xl border border-slate-100 hover:border-slate-300 hover:bg-slate-50/80 transition-all text-left"
            >
              <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-slate-100 mb-3">
                <Image
                  src={cat.imageUrl}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                {cat.itemCount && (
                  <span className="absolute top-1.5 right-1.5 bg-black/60 backdrop-blur-xs text-[10px] text-white px-1.5 py-0.5 rounded font-medium">
                    {cat.itemCount} mod.
                  </span>
                )}
              </div>
              <h4 className="text-sm font-semibold text-slate-900 group-hover:text-[#0099ff] transition-colors leading-snug">
                {cat.name}
              </h4>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                {cat.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
