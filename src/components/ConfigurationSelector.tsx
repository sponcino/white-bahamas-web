'use client';

import React from 'react';
import { ConfigurationOption } from '@/types/product';
import { Check, Zap, Sparkles, Award } from 'lucide-react';

interface ConfigurationSelectorProps {
  configurations: ConfigurationOption[];
  selectedConfigId: string;
  onSelectConfig: (config: ConfigurationOption) => void;
}

export default function ConfigurationSelector({
  configurations,
  selectedConfigId,
  onSelectConfig,
}: ConfigurationSelectorProps) {
  if (!configurations || configurations.length === 0) return null;

  const activeConfig =
    configurations.find((c) => c.id === selectedConfigId) || configurations[0];

  return (
    <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Configurador de Equipamiento
          </span>
          <h3 className="text-lg font-editorial text-slate-900 mt-0.5">
            Elegí el nivel de hidroterapia para este modelo
          </h3>
        </div>
      </div>

      {/* Tabs / Pills de selección */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {configurations.map((conf) => {
          const isSelected = conf.id === activeConfig.id;
          return (
            <button
              key={conf.id}
              type="button"
              onClick={() => onSelectConfig(conf)}
              className={`p-4 rounded-xl text-left border-2 transition-all relative flex flex-col justify-between ${
                isSelected
                  ? 'border-[#0099ff] bg-white shadow-md ring-2 ring-[#0099ff]/20'
                  : 'border-slate-200 bg-white/60 hover:bg-white hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-slate-900">{conf.name}</h4>
                  {isSelected && (
                    <span className="w-5 h-5 rounded-full bg-[#0099ff] text-white flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </span>
                  )}
                </div>
                {conf.jets && (
                  <div className="text-xs font-semibold text-[#0099ff]">
                    {conf.jets} Jets activos
                  </div>
                )}
                {conf.pump && (
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {conf.pump}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detalle del equipamiento seleccionado con crossfade sin saltos */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs transition-opacity duration-300">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#0099ff]" />
            <h5 className="text-sm font-semibold text-slate-900">
              Componentes incluidos en {activeConfig.name}
            </h5>
          </div>
          {activeConfig.lighting && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 font-medium border border-purple-200">
              {activeConfig.lighting}
            </span>
          )}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
          {activeConfig.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
