'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generación de JSON-LD BreadcrumbList
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://whitebahamas.com.ar/',
      },
      ...items.map((it, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: it.label,
        item: it.href ? `https://whitebahamas.com.ar${it.href}` : undefined,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Migas de pan" className="py-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          <li className="flex items-center gap-1.5">
            <Link
              href="/"
              className="hover:text-[#0099ff] transition-colors flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#0099ff] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-slate-900" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
