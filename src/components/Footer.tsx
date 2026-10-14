'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/company';
import { useQuote } from '@/context/QuoteContext';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Shield,
  FileText,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export default function Footer() {
  const { openQuote } = useQuote();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner consultivo superior */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 rounded-2xl p-6 sm:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#23f0fb] font-semibold flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Asesoramiento Personalizado
            </span>
            <h3 className="text-xl sm:text-2xl font-editorial text-white">
              ¿Tenés un proyecto en plano o buscás renovar tu espacio?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Nuestros ingenieros comerciales y especialistas en hidromasaje te asisten con medidas, requerimientos de instalación y fabricación a medida.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => openQuote()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0099ff] hover:bg-[#0088e6] text-white font-medium text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Solicitar Presupuesto
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Directo
            </a>
          </div>
        </div>

        {/* Columnas principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Columna Marca */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-10 w-48">
              <Image
                src="/images/logo-header.png"
                alt="White Bahamas Argentina"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Fabricación y comercialización de productos SPA, hidromasajes de alta gama, minipiscinas y equipamiento de bienestar. Diseños que integran arquitectura contemporánea, tecnología de hidroterapia y terminaciones de excelencia.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#0099ff] shrink-0 mt-0.5" />
                <span>
                  <strong>Showroom & Oficinas:</strong> {COMPANY_INFO.showroomAddress}, {COMPANY_INFO.showroomCity}
                  <br />
                  <span className="text-[11px] text-slate-400 font-normal italic">
                    (Atención personalizada previa cita)
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Tel / WhatsApp:</strong>{' '}
                  <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-[#23f0fb] shrink-0" />
                <span>
                  <strong>Correo oficial:</strong>{' '}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                    {COMPANY_INFO.email}
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Columna Catálogo */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Productos
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/hidromasajesindividuales" className="hover:text-[#0099ff] transition-colors">
                  Hidromasajes Individuales (26)
                </Link>
              </li>
              <li>
                <Link href="/hidromasajesdobles" className="hover:text-[#0099ff] transition-colors">
                  Hidromasajes Dobles (18)
                </Link>
              </li>
              <li>
                <Link href="/hidromasajesesquineros" className="hover:text-[#0099ff] transition-colors">
                  Hidromasajes Esquineros (7)
                </Link>
              </li>
              <li>
                <Link href="/minipiscinas" className="hover:text-[#0099ff] transition-colors">
                  Minipiscinas SPA (15)
                </Link>
              </li>
              <li>
                <Link href="/sauna" className="hover:text-[#0099ff] transition-colors">
                  Sauna Finlandés
                </Link>
              </li>
              <li>
                <Link href="/vapor" className="hover:text-[#0099ff] transition-colors">
                  Baño de Vapor
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-[#0099ff] font-medium flex items-center gap-1 hover:underline">
                  Ver catálogo completo <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Soluciones & Terapias */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Soluciones & Wellness
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/profesionales" className="hover:text-[#0099ff] transition-colors">
                  Para Arquitectos y Diseñadores
                </Link>
              </li>
              <li>
                <Link href="/profesionales" className="hover:text-[#0099ff] transition-colors">
                  Desarrollos Inmobiliarios
                </Link>
              </li>
              <li>
                <Link href="/profesionales" className="hover:text-[#0099ff] transition-colors">
                  Hotelería & Resorts
                </Link>
              </li>
              <li>
                <Link href="/bienestar" className="hover:text-[#0099ff] transition-colors">
                  Hidroterapia & Recuperación
                </Link>
              </li>
              <li>
                <Link href="/bienestar" className="hover:text-[#0099ff] transition-colors">
                  Cromoterapia Subacuática
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:text-[#0099ff] transition-colors">
                  Galería de Proyectos e Inspiración
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Institucional & Soporte */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-semibold">
              Empresa & Soporte
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/nosotros" className="hover:text-[#0099ff] transition-colors">
                  Quiénes Somos & Filosofía
                </Link>
              </li>
              <li>
                <Link href="/soporte" className="hover:text-[#0099ff] transition-colors">
                  Requerimientos de Instalación
                </Link>
              </li>
              <li>
                <Link href="/soporte" className="hover:text-[#0099ff] transition-colors">
                  Logística y Envíos al País
                </Link>
              </li>
              <li>
                <Link href="/soporte" className="hover:text-[#0099ff] transition-colors">
                  Preguntas Frecuentes (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/soporte" className="hover:text-[#0099ff] transition-colors">
                  Estado de Garantías de Fábrica
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#0099ff] transition-colors">
                  Canales de Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Pie de página y créditos legales */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-slate-400" />
            <span>
              © {new Date().getFullYear()} White Bahamas Argentina. Todos los derechos reservados.
            </span>
          </div>
          <div className="text-[11px] text-slate-400 text-center md:text-right max-w-md">
            Información técnica y comercial sujeta a cotización oficial. Los datos no confirmados se encuentran señalizados con fines de trazabilidad según inventario de migración.
          </div>
        </div>
      </div>
    </footer>
  );
}
