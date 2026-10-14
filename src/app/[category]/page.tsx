import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import { ALL_PRODUCTS, CATEGORIES_INFO, getProductsByCategory } from '@/data/products';
import { Sparkles, ArrowRight, ShieldCheck, Droplets, CheckCircle2 } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { category: 'hidromasajesindividuales' },
    { category: 'hidromasajesdobles' },
    { category: 'hidromasajesesquineros' },
    { category: 'minipiscinas' },
    { category: 'sauna' },
    { category: 'vapor' },
    { category: 'accesorios' },
  ];
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const info = CATEGORIES_INFO.find((c) => c.slug === category);

  if (!info && category !== 'accesorios') {
    return {
      title: 'Categoría no encontrada | White Bahamas Argentina',
    };
  }

  const name = info?.name || category;

  return {
    title: `${name} | White Bahamas Argentina`,
    description: `Catálogo de ${name} White Bahamas. Fabricación en acrílico sanitario reforzado, asesoramiento técnico directo y cotización a medida.`,
    alternates: {
      canonical: `https://whitebahamas.com.ar/${category}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = CATEGORIES_INFO.find((c) => c.slug === category);
  const products = getProductsByCategory(category);

  if (!categoryInfo && category !== 'accesorios') {
    notFound();
  }

  // Si es sauna o vapor (que no tienen los 66 modelos individuales pero sí propuesta comercial)
  const isSpecialCategory = category === 'sauna' || category === 'vapor';

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Productos', href: '/productos' },
            { label: categoryInfo?.name || category },
          ]}
        />

        {/* Header de Categoría */}
        <div className="py-8 mb-10 border-b border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Línea Especializada White Bahamas
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-slate-900 tracking-tight">
              {categoryInfo?.name || category}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              {categoryInfo?.shortDescription ||
                'Equipamiento de alta gama para proyectos residenciales y profesionales con fabricación nacional.'}
            </p>
          </div>
        </div>

        {/* Para categorías con productos registrados */}
        {products.length > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-6 text-xs text-slate-500">
              <span>
                Mostrando <strong>{products.length}</strong> modelos registrados en esta familia
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        ) : isSpecialCategory ? (
          /* Vista editorial para Sauna o Baño de Vapor */
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold">
                  Termoterapia & Relax
                </span>
                <h2 className="text-2xl sm:text-3xl font-editorial text-slate-900">
                  {category === 'sauna' ? 'Saunas Secos a Medida' : 'Generadores y Cabinas de Vapor'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {category === 'sauna'
                    ? 'Fabricación en maderas nobles atérmicas seleccionadas con aislación termoacústica y calefactores de alta seguridad con piedras volcánicas. Niveles de equipamiento adaptables a espacios residenciales o spas profesionales.'
                    : 'Equipos generadores de vapor humectante con control digital o electromecánico estanco, difusores de aromas botánicos y sistemas de purificación para baños y duchas escocesas.'}
                </p>

                <div className="pt-2">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0099ff] text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    <span>Solicitar asesoramiento para {categoryInfo?.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src={categoryInfo?.imageUrl || '/images/wellness.jpg'}
                  alt={categoryInfo?.name || 'White Bahamas'}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <h3 className="text-base font-semibold text-slate-900 mb-1">
              Catálogo en actualización
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Consultá con nuestro equipo de ventas para conocer las opciones disponibles en este rubro.
            </p>
            <Link
              href="/productos"
              className="text-xs font-semibold text-[#0099ff] hover:underline"
            >
              ← Volver al catálogo general
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
