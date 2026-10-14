'use client';

import React, { useState } from 'react';
import { useQuote } from '@/context/QuoteContext';
import { COMPANY_INFO } from '@/data/company';
import { X, Send, MessageCircle, AlertCircle, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function QuoteDrawer() {
  const { isOpen, quoteData, closeQuote, setQuoteData } = useQuote();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'demo-sent' | 'error'>('idle');
  const [privacyAccepted, setPrivacyAccepted] = useState(true);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuoteData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Genera el mensaje estructurado de WhatsApp con contexto completo
  const generateWhatsAppMessage = () => {
    const parts = [
      `¡Hola White Bahamas! Deseo solicitar asesoramiento y cotización oficial:`,
      quoteData.productName ? `• Modelo de interés: ${quoteData.productName}` : null,
      quoteData.category ? `• Categoría: ${quoteData.category}` : null,
      quoteData.dimensions ? `• Medidas: ${quoteData.dimensions}` : null,
      quoteData.configurationName ? `• Configuración deseada: ${quoteData.configurationName}` : null,
      quoteData.projectType ? `• Tipo de proyecto: ${quoteData.projectType}` : null,
      quoteData.customerName ? `• Nombre: ${quoteData.customerName}` : null,
      quoteData.customerLocation ? `• Localidad / Provincia: ${quoteData.customerLocation}` : null,
      quoteData.notes ? `• Consulta adicional: ${quoteData.notes}` : null,
    ].filter(Boolean);

    return encodeURIComponent(parts.join('\n'));
  };

  const whatsappLink = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${generateWhatsAppMessage()}`;

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) return;

    setIsSubmitting(true);
    // Simulación segura de endpoint B2B/B2C con aviso de estado demo explícito
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('demo-sent');
    }, 800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeQuote}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-lg bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-slate-900 text-white">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#23f0fb] font-semibold mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Venta Consultiva Directa
              </div>
              <h2 id="quote-drawer-title" className="text-xl font-editorial text-white">
                Solicitar Presupuesto
              </h2>
            </div>
            <button
              type="button"
              onClick={closeQuote}
              className="rounded-full p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar panel de presupuesto"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            {/* Resumen del modelo seleccionado */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Resumen de tu selección
              </div>
              {quoteData.productName ? (
                <div className="space-y-1.5">
                  <div className="text-base font-semibold text-slate-900 flex items-center justify-between">
                    <span>{quoteData.productName}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium">
                      Modelo seleccionado
                    </span>
                  </div>
                  {quoteData.category && (
                    <div className="text-xs text-slate-600">
                      Familia: <span className="font-medium text-slate-800">{quoteData.category}</span>
                    </div>
                  )}
                  {quoteData.dimensions && (
                    <div className="text-xs text-slate-600">
                      Dimensiones: <span className="font-medium text-slate-800">{quoteData.dimensions}</span>
                    </div>
                  )}
                  {quoteData.configurationName && (
                    <div className="text-xs text-slate-600">
                      Equipamiento: <span className="font-medium text-blue-700">{quoteData.configurationName}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-sm text-slate-600 italic">
                  Presupuesto general de catálogo o asesoramiento para obra en curso.
                </div>
              )}
            </div>

            {/* Acceso Directo por WhatsApp Contextual */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-emerald-950">
                    Atención Inmediata por WhatsApp
                  </h3>
                  <p className="text-xs text-emerald-800 mt-0.5 leading-relaxed">
                    Recibí cotización oficial, fichas técnicas y asistencia de nuestros ingenieros comerciales en minutos.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Abrir WhatsApp con datos precargados
                  </a>
                </div>
              </div>
            </div>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-xs uppercase tracking-wider text-gray-400 font-medium">
                o envianos tus datos por formulario
              </span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Formulario */}
            {submitStatus === 'demo-sent' ? (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-semibold text-blue-950">
                  Solicitud registrada en modo demostración
                </h4>
                <p className="text-xs text-blue-800 leading-relaxed max-w-sm mx-auto">
                  Este entorno prototipo no envía datos personales a un CRM externo sin credenciales productivas. Para una respuesta inmediata, utilizá el canal oficial de WhatsApp precargado:
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-medium hover:bg-emerald-700"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contactar por WhatsApp ahora
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div>
                  <label htmlFor="customerName" className="block text-xs font-medium text-slate-700 mb-1">
                    Nombre y Apellido <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    required
                    value={quoteData.customerName}
                    onChange={handleChange}
                    placeholder="Ej. Martín Gómez"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] focus:border-transparent transition-shadow"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="customerPhone" className="block text-xs font-medium text-slate-700 mb-1">
                      Teléfono / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="customerPhone"
                      name="customerPhone"
                      required
                      value={quoteData.customerPhone}
                      onChange={handleChange}
                      placeholder="Ej. +54 9 11 1234-5678"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] focus:border-transparent transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="customerLocation" className="block text-xs font-medium text-slate-700 mb-1">
                      Localidad / Provincia <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="customerLocation"
                      name="customerLocation"
                      required
                      value={quoteData.customerLocation}
                      onChange={handleChange}
                      placeholder="Ej. Nordelta, Tigre, Bs As"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] focus:border-transparent transition-shadow"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="customerEmail" className="block text-xs font-medium text-slate-700 mb-1">
                    Correo electrónico <span className="text-slate-400 font-normal">(opcional)</span>
                  </label>
                  <input
                    type="email"
                    id="customerEmail"
                    name="customerEmail"
                    value={quoteData.customerEmail || ''}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] focus:border-transparent transition-shadow"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-xs font-medium text-slate-700 mb-1">
                    Tipo de proyecto
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={quoteData.projectType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] focus:border-transparent bg-white"
                  >
                    <option value="particular">Vivienda particular / Residencial</option>
                    <option value="arquitecto">Estudio de Arquitectura / Diseño Interior</option>
                    <option value="desarrollo">Constructora / Desarrollador Inmobiliario</option>
                    <option value="hotel">Hotelería / Spa / Complejo Turístico</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-xs font-medium text-slate-700 mb-1">
                    Detalles del espacio o consulta específica
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={quoteData.notes || ''}
                    onChange={handleChange}
                    placeholder="Indicanos medidas disponibles, si es para interior o deck exterior, requerimientos especiales..."
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] focus:border-transparent transition-shadow resize-none"
                  />
                </div>

                {/* Consentimiento de privacidad */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-0.5 rounded text-[#0099ff] focus:ring-[#0099ff]"
                    />
                    <span>
                      Acepto el tratamiento de mis datos de contacto con fines exclusivos de cotización comercial y asesoramiento técnico por parte de White Bahamas Argentina (Ley 25.326).
                    </span>
                  </label>
                </div>

                {/* Aviso explícito de formulario demo */}
                <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 flex items-start gap-2 text-xs text-amber-800">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Aviso de integración:</strong> Formulario en modo demostración visual hasta la configuración del webhook comercial seguro. WhatsApp activo permanentemente.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !privacyAccepted}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-black text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Procesando...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Solicitud de Presupuesto
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Footer del Drawer */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            <span>Fabricación nacional · Asesoramiento directo de fábrica</span>
          </div>
        </div>
      </div>
    </div>
  );
}
