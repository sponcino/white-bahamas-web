import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import { FAQS, COMPANY_INFO } from '@/data/company';
import {
  Wrench,
  Truck,
  ShieldCheck,
  HelpCircle,
  FileText,
  AlertCircle,
  Sparkles,
  Phone,
  MessageCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Soporte, Instalación, Envíos y Preguntas Frecuentes | White Bahamas',
  description:
    'Guía técnica de instalación de hidromasajes y minipiscinas, logística nacional, manuales de mantenimiento y preguntas frecuentes de White Bahamas Argentina.',
  alternates: {
    canonical: 'https://whitebahamas.com.ar/soporte',
  },
};

export default function SoportePage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Soporte y Preguntas Frecuentes' }]} />

        {/* Header */}
        <div className="py-10 mb-12 border-b border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Centro de Atención Técnica
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-slate-900 tracking-tight">
              Soporte, Instalación y Preguntas Frecuentes
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
              Encontrá las pautas técnicas esenciales para la conexión eléctrica, provisión de agua, desagüe cloacal y logística de entrega de tu hidromasaje o minipiscina White Bahamas.
            </p>
          </div>
        </div>

        {/* 3 Bloques Técnicos Informativos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Bloque 1: Requerimientos de Instalación */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0099ff] flex items-center justify-center">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Guía Básica de Instalación
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
              <li>
                <strong>• Conexión Eléctrica:</strong> Línea exclusiva 220V/50Hz con disyuntor termomagnético independiente y descarga a tierra mediante jabalina.
              </li>
              <li>
                <strong>• Desagüe:</strong> Cañería de PVC de 50 mm (individuales y dobles) o 63 mm (minipiscinas) con pendiente mínima del 2%.
              </li>
              <li>
                <strong>• Carga Estructural:</strong> Minipiscinas requieren base plana y nivelada apta para 450 a 550 kg/m² con carga llena.
              </li>
            </ul>
          </div>

          {/* Bloque 2: Logística y Entrega Nacional */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Logística y Envíos al País
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Efectuamos despachos a todo el territorio argentino coordinados con empresas de transporte expreso especializadas en carga frágil.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
              <li>• Embalaje de alta protección para acrílico sanitario y motor</li>
              <li>• Coordinación de remito y seguimiento de guía</li>
              <li>• Entrega en depósito de transporte o domicilio según cobertura</li>
            </ul>
          </div>

          {/* Bloque 3: Estado de Garantías */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Garantía de Fábrica
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              White Bahamas respalda la integridad del casco acrílico termoformado y los componentes electromecánicos frente a defectos de fabricación.
            </p>
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-[11px] text-amber-900 leading-relaxed">
              <AlertCircle className="w-3.5 h-3.5 inline mr-1 text-amber-700" />
              <strong>Aviso legal:</strong> Los términos particulares y alcance extendido de la póliza de garantía se adjuntan a la orden de compra oficial según modelo adquirido.
            </div>
          </div>
        </div>

        {/* Sección FAQ Completa */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs mb-16">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#0099ff] font-bold mb-1">
              <HelpCircle className="w-4 h-4" />
              Resolución de Dudas
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial text-slate-900">
              Preguntas Frecuentes
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Respuestas a las consultas más habituales sobre funcionamiento, mantenimiento preventivo y adquisición de equipos.
            </p>
          </div>

          <FAQAccordion items={FAQS} />
        </div>

        {/* Asistencia Técnica Telefónica / WhatsApp */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-editorial">
              ¿Tenés una duda técnica sobre tu instalación?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Comunicate directamente con nuestro soporte técnico de fábrica para consultar planos y manuales de modelos White Bahamas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs flex items-center justify-center transition-colors"
            >
              Formulario de Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
