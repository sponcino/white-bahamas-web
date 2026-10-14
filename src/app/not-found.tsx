import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center shadow-xs space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0099ff] mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-1">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-editorial text-slate-900">
            Página no encontrada
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            La ruta solicitada puede haber cambiado durante nuestra migración de catálogo o no encontrarse disponible.
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 text-left space-y-2">
          <span className="font-semibold text-slate-900 block">Te sugerimos explorar:</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Link
              href="/productos"
              className="text-[#0099ff] hover:underline flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5" />
              Catálogo de modelos (66)
            </Link>
            <Link
              href="/hidromasajesindividuales"
              className="text-[#0099ff] hover:underline flex items-center gap-1.5"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              Hidromasajes individuales
            </Link>
            <Link
              href="/minipiscinas"
              className="text-[#0099ff] hover:underline flex items-center gap-1.5"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              Minipiscinas SPA
            </Link>
            <Link
              href="/contacto"
              className="text-[#0099ff] hover:underline flex items-center gap-1.5"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              Canales de contacto
            </Link>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-black text-white text-xs uppercase tracking-wider font-semibold transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Volver a la Página Principal</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
