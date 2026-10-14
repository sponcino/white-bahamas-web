'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '@/data/company';
import { Send, CheckCircle2, MessageCircle, AlertCircle, Building2, Briefcase } from 'lucide-react';

export default function ProfessionalLeadForm() {
  const [formData, setFormData] = useState({
    professionalName: '',
    firmOrCompany: '',
    role: 'arquitecto',
    projectType: 'residencial-premium',
    location: '',
    estimatedUnits: '1-5',
    phone: '',
    email: '',
    projectNotes: '',
    hasPlans: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const generateB2BWhatsApp = () => {
    const text = [
      `¡Hola White Bahamas! Contacto profesional para canal corporativo / B2B:`,
      `• Profesional / Estudio: ${formData.professionalName} (${formData.firmOrCompany || 'Independiente'})`,
      `• Rol: ${formData.role}`,
      `• Tipo de Proyecto: ${formData.projectType}`,
      `• Localidad: ${formData.location}`,
      `• Cantidad estimada de unidades: ${formData.estimatedUnits}`,
      `• Cuenta con planos / memoria técnica: ${formData.hasPlans ? 'Sí' : 'En desarrollo'}`,
      formData.projectNotes ? `• Requerimientos particulares: ${formData.projectNotes}` : null,
    ].filter(Boolean).join('\n');

    return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0099ff] mb-2">
        <Building2 className="w-4 h-4" />
        Canal de Atención a Profesionales
      </div>
      <h3 className="text-xl sm:text-2xl font-editorial text-slate-900 mb-2">
        Solicitud de Asesoramiento Técnico y Proyectos por Volumen
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
        Nuestro departamento de ingeniería comercial colabora estrechamente con arquitectos, constructoras y directores de obra para coordinar especificaciones, pases de losa y fabricación adaptada a planos.
      </p>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-base font-semibold text-emerald-950">
            Solicitud B2B registrada exitosamente (Modo Demo)
          </h4>
          <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
            Hemos recibido tus parámetros de obra. En producción real este formulario dispara la notificación a ingeniería comercial. Podés iniciar la consulta de inmediato por nuestro WhatsApp oficial:
          </p>
          <a
            href={generateB2BWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Vincular por WhatsApp con Asesor de Obras
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="professionalName" className="block text-xs font-medium text-slate-700 mb-1">
                Nombre del profesional o contacto <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="professionalName"
                name="professionalName"
                required
                value={formData.professionalName}
                onChange={handleChange}
                placeholder="Ej. Arq. Carolina Rossi"
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="firmOrCompany" className="block text-xs font-medium text-slate-700 mb-1">
                Estudio / Empresa Constructora
              </label>
              <input
                type="text"
                id="firmOrCompany"
                name="firmOrCompany"
                value={formData.firmOrCompany}
                onChange={handleChange}
                placeholder="Ej. Rossi & Asociados Arquitectura"
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="role" className="block text-xs font-medium text-slate-700 mb-1">
                Rol en la obra
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] bg-white"
              >
                <option value="arquitecto">Arquitecto proyectista</option>
                <option value="director-obra">Director de obra / Constructor</option>
                <option value="interiorista">Diseñador interior / Interiorista</option>
                <option value="desarrollador">Desarrollador inmobiliario</option>
                <option value="hotelero">Gerencia hotelera / Operador SPA</option>
              </select>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-xs font-medium text-slate-700 mb-1">
                Tipología del proyecto
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] bg-white"
              >
                <option value="residencial-premium">Vivienda unifamiliar premium</option>
                <option value="edificio-residencial">Edificio residencial multifamiliar</option>
                <option value="hotel-boutique">Hotel boutique / Complejo de cabañas</option>
                <option value="wellness-center">Centro SPA / Gimnasio / Wellness</option>
              </select>
            </div>

            <div>
              <label htmlFor="estimatedUnits" className="block text-xs font-medium text-slate-700 mb-1">
                Unidades estimadas
              </label>
              <select
                id="estimatedUnits"
                name="estimatedUnits"
                value={formData.estimatedUnits}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] bg-white"
              >
                <option value="1-2">1 a 2 unidades</option>
                <option value="3-10">3 a 10 unidades</option>
                <option value="11-30">11 a 30 unidades</option>
                <option value="30+">Más de 30 unidades (escala mayor)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-1">
                Teléfono / WhatsApp de contacto <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ej. +54 9 11 9876-5432"
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff]"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-xs font-medium text-slate-700 mb-1">
                Localidad y Provincia de la obra <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                placeholder="Ej. San Isidro / Córdoba / Bariloche"
                className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="projectNotes" className="block text-xs font-medium text-slate-700 mb-1">
              Requerimientos de espacio, medidas o particularidades constructivas
            </label>
            <textarea
              id="projectNotes"
              name="projectNotes"
              rows={3}
              value={formData.projectNotes}
              onChange={handleChange}
              placeholder="Indicanos si el proyecto requiere faldones a medida, bomba desplazada, hidromasaje exterior para deck, etc."
              className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-[#0099ff] resize-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="hasPlans"
              name="hasPlans"
              checked={formData.hasPlans}
              onChange={handleChange}
              className="rounded text-[#0099ff] focus:ring-[#0099ff]"
            />
            <label htmlFor="hasPlans" className="text-xs text-slate-700 cursor-pointer">
              Cuento con planos CAD/BIM o bocetos en planta para cotejo de cotas
            </label>
          </div>

          {/* Aviso Demo seguro */}
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 flex items-start gap-2 text-xs text-slate-600">
            <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              <strong>Nota de confidencialidad y entorno prototipo:</strong> Los datos remitidos se procesan con reserva estricta para evaluación técnica. Para una interacción inmediata con un asesor técnico, utilizá el enlace directo a WhatsApp.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 px-6 rounded-xl bg-slate-900 hover:bg-black text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Enviando...' : 'Enviar Consulta B2B'}</span>
            </button>

            <a
              href={generateB2BWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl border border-emerald-500/30 text-emerald-700 hover:bg-emerald-50 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Contactar Asesor B2B por WhatsApp</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
