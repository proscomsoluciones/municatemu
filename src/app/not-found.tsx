import React from 'react';
import Link from 'next/link';
import { Search, Home, FileText, ArrowRight, AlertCircle } from 'lucide-react';
import { InstantSearch } from '@/components/ui/InstantSearch';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-8">
      <div className="space-y-4">
        <div className="w-20 h-20 rounded-3xl bg-sol/20 text-sol flex items-center justify-center mx-auto border border-sol/40">
          <AlertCircle className="w-10 h-10" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-verde-valle dark:text-emerald-400 bg-verde-suave dark:bg-verde-valle/30 px-3 py-1 rounded-full">
          Error 404 • Página No Encontrada
        </span>
        <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-tinta dark:text-white">
          La página que buscas no existe o ha sido movida
        </h1>
        <p className="text-base text-texto-secundario dark:text-gray-300 max-w-xl mx-auto">
          No te preocupes. Utiliza el buscador principal o accede directamente a los trámites municipales más frecuentados.
        </p>
      </div>

      {/* Instant Search Component */}
      <div className="max-w-2xl mx-auto pt-4">
        <InstantSearch />
      </div>

      {/* Quick shortcuts */}
      <div className="pt-8 border-t border-lineas/60 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href="/"
          className="p-4 rounded-2xl bg-white dark:bg-[#15241C] border border-lineas/80 dark:border-verde-valle/30 hover:border-verde-valle font-bold text-tinta dark:text-white flex items-center justify-between group shadow-sm"
        >
          <div className="flex items-center gap-3">
            <Home className="w-5 h-5 text-verde-valle dark:text-emerald-400" />
            <span>Volver a la Portada</span>
          </div>
          <ArrowRight className="w-4 h-4 text-texto-secundario group-hover:text-verde-valle" />
        </Link>

        <Link
          href="/tramites"
          className="p-4 rounded-2xl bg-white dark:bg-[#15241C] border border-lineas/80 dark:border-verde-valle/30 hover:border-verde-valle font-bold text-tinta dark:text-white flex items-center justify-between group shadow-sm"
        >
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-sol" />
            <span>Ir a Trámites Municipales</span>
          </div>
          <ArrowRight className="w-4 h-4 text-texto-secundario group-hover:text-verde-valle" />
        </Link>
      </div>
    </div>
  );
}
