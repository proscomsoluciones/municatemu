import React from 'react';
import { ShieldCheck, CheckCircle2, Eye, Keyboard, Type } from 'lucide-react';

export default function AccesibilidadPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-verde-valle dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-sol" />
          <span>Norma Técnica de Sitios Web del Estado (DS N°1/2015)</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-tinta dark:text-white">
          Declaración de Accesibilidad Web (WCAG 2.1 AA)
        </h1>
        <p className="text-base text-texto-secundario dark:text-gray-300">
          La Ilustre Municipalidad de Catemu está comprometida con garantizar que su sitio web sea accesible para todas las personas, independientemente de sus capacidades físicas, sensoriales o cognoscitivas.
        </p>
      </div>

      <div className="bg-white dark:bg-[#15241C] p-8 rounded-3xl border border-lineas/80 dark:border-verde-valle/30 shadow-card space-y-6">
        <h2 className="font-heading font-bold text-2xl text-tinta dark:text-white">
          Estándares y Características Implementadas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-verde-suave/60 dark:bg-verde-valle/20 border border-verde-valle/30 space-y-2">
            <div className="flex items-center gap-2 font-bold text-verde-valle dark:text-emerald-300">
              <Keyboard className="w-5 h-5 text-sol" />
              <span>Navegación Teclado</span>
            </div>
            <p className="text-xs text-texto-secundario dark:text-gray-300">
              Todos los componentes interactivos son navegables con la tecla Tab e incluyen enlace directo de salto de contenido.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-verde-suave/60 dark:bg-verde-valle/20 border border-verde-valle/30 space-y-2">
            <div className="flex items-center gap-2 font-bold text-verde-valle dark:text-emerald-300">
              <Eye className="w-5 h-5 text-sol" />
              <span>Contraste y Color</span>
            </div>
            <p className="text-xs text-texto-secundario dark:text-gray-300">
              Relación de contraste mínima de 4.5:1 exigida por WCAG AA y soporte completo para modo oscuro institucional.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-verde-suave/60 dark:bg-verde-valle/20 border border-verde-valle/30 space-y-2">
            <div className="flex items-center gap-2 font-bold text-verde-valle dark:text-emerald-300">
              <Type className="w-5 h-5 text-sol" />
              <span>Escalador de Texto</span>
            </div>
            <p className="text-xs text-texto-secundario dark:text-gray-300">
              Barra superior que permite incrementar el tamaño de la letra hasta un 125% sin distorsionar el diseño.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-verde-suave/60 dark:bg-verde-valle/20 border border-verde-valle/30 space-y-2">
            <div className="flex items-center gap-2 font-bold text-verde-valle dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5 text-sol" />
              <span>Lectores de Pantalla</span>
            </div>
            <p className="text-xs text-texto-secundario dark:text-gray-300">
              Etiquetas ARIA descriptivas, imágenes con texto alternativo obligatorio y un solo h1 por página.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-lineas/60 text-xs text-texto-secundario dark:text-gray-400">
          Si experimentas alguna dificultad de accesibilidad en nuestro sitio web, por favor escríbenos a <a href="mailto:accesibilidad@municatemu.cl" className="underline text-verde-valle">accesibilidad@municatemu.cl</a>.
        </div>
      </div>
    </div>
  );
}
