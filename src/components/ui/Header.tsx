'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAccessibility } from '@/context/AccessibilityContext';
import { 
  Type, 
  Menu, 
  X, 
  Building2, 
  ShieldCheck,
  FileText,
  Users,
  Newspaper,
  PhoneCall
} from 'lucide-react';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { fontScale, increaseFontScale, resetFontScale } = useAccessibility();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Portada', icon: Building2 },
    { href: '/tramites', label: 'Trámites', icon: FileText },
    { href: '/noticias', label: 'Noticias y Avisos', icon: Newspaper },
    { href: '/documentos', label: 'Documentos', icon: FileText },
    { href: '/municipio', label: 'Municipio', icon: Users },
    { href: '/transparencia', label: 'Transparencia', icon: ShieldCheck },
    { href: '/contacto', label: 'Contacto', icon: PhoneCall },
  ];

  return (
    <header className={`w-full sticky top-0 z-40 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-papel/90 dark:bg-[#140715]/90 backdrop-blur-md shadow-md border-lineas/80' 
        : 'bg-papel dark:bg-[#140715] border-lineas shadow-xs'
    }`}>
      {/* Top Official State Bar in Catemu Violet */}
      <div className="bg-[#5E1757] text-white text-xs py-2 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#F07D26] flex-shrink-0"></span>
            <span className="font-semibold tracking-wide truncate sm:whitespace-normal">
              Sitio oficial de la I. Municipalidad de Catemu
            </span>
            <span className="hidden md:inline text-purple-200">| Región de Valparaíso, Chile</span>
          </div>

          {/* Accessibility & Theme Toolbar */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={increaseFontScale}
              className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#F07D26] transition-all text-xs font-medium"
              aria-label={`Cambiar tamaño de texto (Actual: ${Math.round(fontScale * 100)}%)`}
              title="Aumentar tamaño del texto"
            >
              <Type className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Texto</span>
              <span>({Math.round(fontScale * 100)}%)</span>
            </button>
            {fontScale > 1 && (
              <button
                onClick={resetFontScale}
                className="text-[11px] underline hover:text-[#F6A623] focus:outline-none hidden sm:inline"
                aria-label="Restablecer tamaño de texto normal"
              >
                Restablecer
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:py-3.5 flex items-center justify-between">
        {/* Brand / Logo using Official Logo Styling */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#5E1757] rounded-xl p-0.5 sm:p-1"
          aria-label="I. Municipalidad de Catemu - Ir a la portada principal"
        >
          <div className="bg-white/95 dark:bg-white rounded-xl p-1 sm:p-1.5 shadow-xs border border-purple-100/80 dark:border-white/20 group-hover:shadow-md transition-all flex items-center">
            <Image
              src="/images/logo-catemu.png"
              alt="I. Municipalidad de Catemu - Valle hermoso de Aconcagua"
              width={180}
              height={130}
              priority
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navegación principal">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 xl:px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#F4EAF5] dark:bg-[#351737] text-[#5E1757] dark:text-[#F59347] border border-[#5E1757]/20 font-bold'
                    : 'text-tinta hover:bg-black/5 dark:hover:bg-white/5 hover:text-[#5E1757] dark:hover:text-[#F59347]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-tinta dark:text-white hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#5E1757]"
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir o cerrar menú principal"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-lineas bg-papel dark:bg-[#140715] px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-xl">
          <nav aria-label="Navegación móvil">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-[#5E1757] text-white font-bold'
                      : 'text-tinta hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-5 h-5 text-[#F07D26]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
