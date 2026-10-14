import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import { THERAPIES } from '@/data/company';
import { Droplets, Sparkles, Sun, Cloud, Flame, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Guía de Bienestar & Terapias | White Bahamas Argentina',
  description:
    'Conocé los principios de hidroterapia, cromoterapia subacuática, sauna seco finlandés, baño de vapor y aromaterapia. Diseño de espacios de bienestar en casa.',
  alternates: {
    canonical: 'https://whitebahamas.com.ar/bienestar',
  },
};

export default function BienestarPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sun':
        return <Sun className="w-5 h-5 text-amber-500" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-sky-500" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-rose-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      default:
        return <Droplets className="w-5 h-5 text-[#0099ff]" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Bienestar y Terapias' }]} />

        {/* Header Editorial */}
        <div className="py-10 mb-12 border-b border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Filosofía Wellness White Bahamas
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-slate-900 tracking-tight">
              Terapias de Agua, Calor y Estímulo Sensorial
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
              El estrés contemporáneo exige rituales de desconexión efectivos en el hogar. Integramos circuitos de agua presurizada, termoterapia seca y húmeda, cromoterapia y aromaterapia diseñados para restablecer la vitalidad y la calma muscular.
            </p>
          </div>
        </div>

        {/* Grid de Terapias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {THERAPIES.map((th) => (
            <div
              key={th.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs flex flex-col justify-between hover:shadow-lg hover:border-[#0099ff]/50 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5">
                  {getIcon(th.iconName)}
                </div>

                <h3 className="text-xl font-editorial text-slate-900 mb-1">
                  {th.name}
                </h3>
                <p className="text-xs font-semibold text-[#0099ff] mb-4">
                  {th.subtitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {th.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                    Beneficios observables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {th.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={`/${th.recommendedCategory}`}
                  className="text-xs font-semibold text-slate-900 hover:text-[#0099ff] flex items-center justify-between transition-colors"
                >
                  <span>Ver productos con {th.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bloque de aviso médico responsable */}
        <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-xs text-blue-900 leading-relaxed">
          <strong>Aviso de bienestar responsable:</strong> Las terapias de hidromasaje, vapor y sauna descritas tienen un fin orientado al confort, la relajación muscular y la calidad de vida cotidiana. No sustituyen tratamientos médicos ni prescripciones kinesiológicas para patologías específicas.
        </div>
      </div>
    </div>
  );
}
