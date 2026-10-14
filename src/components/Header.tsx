'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useQuote } from '@/context/QuoteContext';
import { COMPANY_INFO } from '@/data/company';
import MegaMenu from './MegaMenu';
import {
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  FileText,
  Phone,
  Sparkles,
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const { openQuote } = useQuote();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Productos', href: '/productos', isMega: true },
    { label: 'Soluciones', href: '/profesionales' },
    { label: 'Bienestar', href: '/bienestar' },
    { label: 'Proyectos', href: '/galeria' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Soporte', href: '/soporte' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-black/85 backdrop-blur-xs py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-[#0099ff] rounded-md p-1"
          >
            <div className="relative h-10 w-44 sm:h-11 sm:w-52">
              <Image
                src="/images/logo-header.png"
                alt="White Bahamas Argentina - Logo Oficial"
                fill
                priority
                className="object-contain object-left group-hover:opacity-90 transition-opacity"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href) && (link.href !== '/' || pathname === '/');
              if (link.isMega) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                  >
                    <button
                      type="button"
                      onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      className={`px-3 py-2 text-xs uppercase tracking-widest font-semibold flex items-center gap-1 rounded-md transition-colors ${
                        isActive || megaMenuOpen
                          ? 'text-[#23f0fb] bg-white/5'
                          : 'text-gray-200 hover:text-white hover:bg-white/5'
                      }`}
                      aria-expanded={megaMenuOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          megaMenuOpen ? 'rotate-180 text-[#23f0fb]' : ''
                        }`}
                      />
                    </button>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-xs uppercase tracking-widest font-semibold rounded-md transition-colors ${
                    isActive
                      ? 'text-[#23f0fb] bg-white/5'
                      : 'text-gray-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: WhatsApp + CTA Presupuesto */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar a White Bahamas por WhatsApp"
              className="p-2 rounded-full text-emerald-400 hover:text-emerald-300 hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Atención WhatsApp (+54 9) 11 2496-7000"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="hidden xl:inline text-gray-300">WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => openQuote()}
              className="py-2 px-4 rounded-lg bg-[#0099ff] hover:bg-[#0088e6] text-white font-medium text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 shadow-sm shadow-[#0099ff]/20 active:scale-98"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Solicitar presupuesto</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => openQuote()}
              className="p-2 rounded-lg bg-[#0099ff] text-white text-xs font-semibold uppercase tracking-wider"
              aria-label="Pedir presupuesto"
            >
              Cotizar
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MegaMenu Dropdown */}
        <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 lg:hidden overflow-hidden"
        >
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-slate-900 text-white shadow-2xl flex flex-col p-6 animate-fade-in">
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="relative h-8 w-36">
                <Image
                  src="/images/logo-header.png"
                  alt="White Bahamas"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-white"
                aria-label="Cerrar menú móvil"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 space-y-2">
              <div className="text-[10px] uppercase tracking-widest text-[#23f0fb] font-bold px-3 mb-2">
                Navegación
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 border-t border-slate-800 space-y-1">
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold px-3 mb-2">
                  Categorías de Producto
                </div>
                <Link
                  href="/hidromasajesindividuales"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                >
                  Hidromasajes Individuales (26)
                </Link>
                <Link
                  href="/hidromasajesdobles"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                >
                  Hidromasajes Dobles (18)
                </Link>
                <Link
                  href="/hidromasajesesquineros"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                >
                  Hidromasajes Esquineros (7)
                </Link>
                <Link
                  href="/minipiscinas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                >
                  Minipiscinas SPA (15)
                </Link>
                <Link
                  href="/sauna"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                >
                  Sauna Seco
                </Link>
                <Link
                  href="/vapor"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                >
                  Baño de Vapor
                </Link>
              </div>
            </nav>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuote();
                }}
                className="w-full py-3 rounded-lg bg-[#0099ff] hover:bg-[#0088e6] text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Solicitar presupuesto
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: {COMPANY_INFO.phoneFormatted}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
