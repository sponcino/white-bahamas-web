'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ProductImage } from '@/types/product';
import { Maximize2, ShieldCheck, Sparkles } from 'lucide-react';

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeImage = images[selectedIndex] || images[0];

  return (
    <div className="space-y-4">
      {/* Imagen Principal */}
      <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-sm group">
        {activeImage ? (
          <Image
            src={activeImage.url}
            alt={activeImage.alt || productName}
            fill
            priority
            className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            Imagen en preparación de catálogo
          </div>
        )}

        {/* Badge de autenticidad */}
        {activeImage?.rightsVerified && (
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Fotografía real White Bahamas
          </div>
        )}

        {/* Caption */}
        {activeImage?.caption && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-xs">
            {activeImage.caption}
          </div>
        )}
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`relative h-20 w-24 shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                selectedIndex === idx
                  ? 'border-[#0099ff] ring-2 ring-[#0099ff]/30 shadow-md scale-102'
                  : 'border-slate-200 opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={img.url}
                alt={img.alt || `${productName} miniatura ${idx + 1}`}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
