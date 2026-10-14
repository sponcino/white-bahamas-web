'use client';

import React from 'react';
import { Search, X, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

interface ProductFiltersProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  onlyVerified: boolean;
  onOnlyVerifiedChange: (val: boolean) => void;
  totalResults: number;
  onResetFilters: () => void;
}

export default function ProductFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onlyVerified,
  onOnlyVerifiedChange,
  totalResults,
  onResetFilters,
}: ProductFiltersProps) {
  const categories = [
    { id: 'all', label: 'Todos los productos (66)' },
    { id: 'hidromasajesindividuales', label: 'Individuales (26)' },
    { id: 'hidromasajesdobles', label: 'Dobles (18)' },
    { id: 'hidromasajesesquineros', label: 'Esquineros (7)' },
    { id: 'minipiscinas', label: 'Minipiscinas (15)' },
  ];

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'all' ||
    onlyVerified;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-4">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Buscador de modelos */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por modelo (ej. Nassau, Bimini, Ocean Cay, White Ocean Bay)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Toggle de verificación */}
        <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 px-3.5 py-2.5 rounded-xl hover:bg-slate-100 transition-colors shrink-0">
          <input
            type="checkbox"
            checked={onlyVerified}
            onChange={(e) => onOnlyVerifiedChange(e.target.checked)}
            className="rounded text-[#0099ff] focus:ring-[#0099ff]"
          />
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Solo modelos con medidas verificadas</span>
        </label>
      </div>

      {/* Selector de Familias */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
        <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1 flex items-center gap-1">
          <SlidersHorizontal className="w-3 h-3" />
          Familia:
        </span>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onCategoryChange(cat.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-[#0099ff] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Chips activos y contador */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span>
            Mostrando <strong>{totalResults}</strong> {totalResults === 1 ? 'modelo' : 'modelos'}
          </span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onResetFilters}
              className="text-[#0099ff] hover:underline font-medium ml-2 flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              Restablecer filtros
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
