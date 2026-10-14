'use client';

import React, { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { COMPANY_INFO } from '@/data/company';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
} from 'lucide-react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    subject: 'presupuesto',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const directWhatsAppUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(
    `¡Hola White Bahamas! Deseo realizar una consulta general:\n• Nombre: ${formData.name || '-'}\n• Localidad: ${formData.location || '-'}\n• Asunto: ${formData.subject}\n• Mensaje: ${formData.message || '-'}`
  )}`;

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contacto y Showroom' }]} />

        {/* Header */}
        <div className="py-10 mb-12 border-b border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#0099ff] font-semibold flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Canales Oficiales de Atención
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-slate-900 tracking-tight">
              Contactate con White Bahamas
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
              Estamos a tu disposición para asesorarte sobre modelos, cotizaciones de obra y visitas técnicas a nuestras oficinas comerciales de la Ciudad de Buenos Aires.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Tarjetas de Canales y Showroom (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Showroom */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0099ff] uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                Showroom y Oficinas Comerciales
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Buenos Aires, Argentina
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Dirección:</strong> {COMPANY_INFO.showroomAddress}, {COMPANY_INFO.showroomCity}
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  Atención personalizada
                </div>
                <p>{COMPANY_INFO.hoursNote}</p>
              </div>
            </div>

            {/* Teléfono & WhatsApp */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    WhatsApp & Ventas
                  </h4>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Atención de consultas comerciales y envío de cotizaciones inmediatas.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0099ff] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Correo Electrónico
                  </h4>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-[#0099ff] transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Recepción de pliegos, planos y consultas formales de empresas.
                  </p>
                </div>
              </div>
            </div>

            {/* Enlace al mapa de Cabildo 4769 */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#23f0fb] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Ubicación en CABA
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ubicados en el corredor norte de la Ciudad de Buenos Aires (Nuñez / Saavedra), con accesos rápidos desde Panamericana y Av. General Paz.
              </p>
              <a
                href="https://maps.google.com/?q=Av.+Cabildo+4769,+CABA,+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0099ff] hover:underline pt-1"
              >
                Abrir en Google Maps →
              </a>
            </div>
          </div>

          {/* Formulario de Contacto Directo (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs">
            <h3 className="text-2xl font-editorial text-slate-900 mb-2">
              Envianos tu consulta
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
              Completá los campos para que un asesor especializado te contacte a la brevedad con la información solicitada.
            </p>

            {submitted ? (
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-semibold text-blue-950">
                  Mensaje registrado (Entorno Prototipo)
                </h4>
                <p className="text-xs text-blue-800 max-w-sm mx-auto leading-relaxed">
                  Para obtener respuesta inmediata y coordinar reunión técnica en showroom, comunicate por WhatsApp directo:
                </p>
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-medium hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Abrir WhatsApp Directo
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                      Nombre y Apellido <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej. Lucas Fernández"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                      Correo Electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@correo.com"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-1">
                      Teléfono / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ej. +54 9 11 1234-5678"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff]"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-xs font-medium text-slate-700 mb-1">
                      Localidad y Provincia <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Ej. Vicente López, Bs As"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-700 mb-1">
                    Motivo del contacto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] bg-white"
                  >
                    <option value="presupuesto">Solicitud de presupuesto de modelo</option>
                    <option value="obra-arquitectura">Asesoramiento para proyecto / Arquitectura</option>
                    <option value="cita-showroom">Coordinar visita a oficinas / Showroom</option>
                    <option value="soporte-tecnico">Consulta técnica de instalación o repuestos</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1">
                    Mensaje o detalle de la consulta <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribí aquí tus dudas, medidas aproximadas o requerimientos..."
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] resize-none"
                  />
                </div>

                <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 text-xs text-slate-600 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    Tus datos se encuentran resguardados con fines exclusivos de contacto comercial según Ley 25.326.
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3 px-6 rounded-xl bg-slate-900 hover:bg-black text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Enviando...' : 'Enviar Consulta'}</span>
                  </button>

                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-5 rounded-xl border border-emerald-500/30 text-emerald-700 hover:bg-emerald-50 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Inmediato</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
