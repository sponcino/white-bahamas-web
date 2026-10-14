'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ALL_PRODUCTS } from '@/data/products';
import { Product } from '@/types/product';
import { Sparkles, Compass, AlertCircle } from 'lucide-react';

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [onlyVerified, setOnlyVerified] = useState(false);
  const [sortBy, setSortBy] = useState<'name' | 'verified-first'>('verified-first');

  // Filtrado reactivo sin inventar datos
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      // Filtro de categoría
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Filtro de solo verificados
      if (onlyVerified && product.verificationStatus !== 'verified') {
        return false;
      }

      // Filtro de búsqueda
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = product.displayName.toLowerCase().includes(query);
        const matchesCollection = product.collection?.toLowerCase().includes(query);
        const matchesCategory = product.categoryName.toLowerCase().includes(query);
        if (!matchesName && !matchesCollection && !matchesCategory) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'verified-first') {
        if (a.verificationStatus === 'verified' && b.verificationStatus !== 'verified') return -1;
        if (a.verificationStatus !== 'verified' && b.verificationStatus === 'verified') return 1;
      }
      return a.displayName.localeCompare(b.displayName);
    });
  }, [searchQuery, selectedCategory, onlyVerified, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setOnlyVerified(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Catálogo de Productos' }]} />

        {/* Cabecera Editorial */}
        <div className="py-6 mb-8 border-b border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Colección Oficial White Bahamas
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-slate-900 tracking-tight">
              Catálogo de Hidromasajes y Minipiscinas
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              Explorá los 66 modelos identificados de nuestra ingeniería sanitaria. Cada equipo se fabrica bajo estándares de acrílico sanitario reforzado con opciones de hidromasaje base, intermedio y Full SPA.
            </p>
          </div>
        </div>

        {/* Componente de Filtros y Búsqueda */}
        <div className="mb-8">
          <ProductFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onlyVerified={onlyVerified}
            onOnlyVerifiedChange={setOnlyVerified}
            totalResults={filteredProducts.length}
            onResetFilters={handleResetFilters}
          />
        </div>

        {/* Barra de ordenamiento */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-500">
          <div>
            Mostrando <strong>{filteredProducts.length}</strong> de {ALL_PRODUCTS.length} modelos registrados
          </div>
          <div className="flex items-center gap-2">
            <span>Ordenar por:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-800 focus:ring-[#0099ff]"
            >
              <option value="verified-first">Fichas verificadas primero</option>
              <option value="name">Nombre alfabético (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Grid de Productos o Empty State */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4 my-8">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              No se encontraron modelos con los criterios seleccionados
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Probá restableciendo los filtros o buscando por una familia diferente (ej. Individuales, Dobles o Minipiscinas).
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-black transition-colors"
            >
              Restablecer todos los filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
