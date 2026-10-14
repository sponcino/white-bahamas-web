import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProfessionalLeadForm from '@/components/ProfessionalLeadForm';
import { Building2, Compass, Layers, CheckCircle2, Shield, Sparkles, FileText, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Soluciones para Arquitectos, Desarrolladores y Hotelería | White Bahamas',
  description:
    'Canal B2B de White Bahamas Argentina. Fabricación personalizada, asesoramiento técnico en planos, pases de losa y compras por volumen para obras residenciales y hoteleras.',
  alternates: {
    canonical: 'https://whitebahamas.com.ar/profesionales',
  },
};

export default function ProfessionalsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Soluciones para Profesionales' }]} />

        {/* Hero B2B */}
        <div className="py-10 mb-12 border-b border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Ingeniería Sanitaria al Servicio de la Arquitectura
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-slate-900 tracking-tight">
              Diseño, Asesoramiento y Fabricación para Grandes Obras
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
              Trabajamos junto a estudios de arquitectura, desarrolladores inmobiliarios y gerencias hoteleras en Argentina para integrar hidromasajes, saunas y minipiscinas con compatibilidad constructiva total y entregas coordinadas por fases de obra.
            </p>
          </div>
        </div>

        {/* 3 Pilares del Canal Profesional */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0099ff] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Adaptación a Planos & Cotas
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Configuramos pases de cañería, ubicación de bombas autodrenantes y vistas cromadas según el vano y la orientación proyectada en la documentación de obra.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0099ff] flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Provisión Escalonada para Desarrollos
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Para edificios de vivienda multifamiliar o condominios cerrados, coordinamos entregas parciales respetando el cronograma de avance de terminaciones húmedas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0099ff] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">
              Materialidad de Alto Tránsito
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Acrílico sanitario de 4.5 mm termoformado con triple capa de fibra de vidrio estructural y protección UV, apto para exigencia hotelera o intemperie en terrazas.
            </p>
          </div>
        </div>

        {/* Sección Formulario B2B + Descarga de Documentación */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <ProfessionalLeadForm />
          </div>

          {/* Lateral informativo */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                Documentación Técnica
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Brindamos a los proyectistas fichas acotadas, esquemas eléctricos monofásicos/trifásicos y manuales de instalación para incorporar en pliegos.
              </p>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                <div className="font-semibold flex items-center gap-1.5 text-slate-900">
                  <FileText className="w-3.5 h-3.5 text-[#0099ff]" />
                  Paquete para Proyectistas:
                </div>
                <ul className="space-y-1 text-[11px] text-slate-600">
                  <li>• Memoria técnica de bomba y consumo</li>
                  <li>• Requerimientos de ventilación para salas de máquinas</li>
                  <li>• Planos acotados de desagüe cloacal</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-[#23f0fb] font-bold">
                Atención Directa B2B
              </span>
              <h4 className="text-base font-editorial text-white">
                Coordiná una reunión técnica
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Podés visitarnos en nuestras oficinas de CABA con cita previa o coordinar una llamada de ingeniería con nuestro equipo técnico.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#0099ff]">
                (+54 9) 11 2496-7000
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
