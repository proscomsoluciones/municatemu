import React from 'react';
import { ShieldCheck, ExternalLink, FileText, DollarSign, Users, CheckCircle2, Lock } from 'lucide-react';
import { TRANSPARENCIA_LINKS } from '@/data/seedData';

export default function TransparenciaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-verde-valle dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-sol" />
          <span>Ley N° 20.285 sobre Acceso a la Información Pública</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-tinta dark:text-white">
          Portal Unificado de Transparencia, Lobby y Gastos
        </h1>
        <p className="text-base text-texto-secundario dark:text-gray-300 max-w-3xl">
          Accede a todos los registros oficiales de probidad, ejecución de presupuestos, audiencias reguladas y contrataciones de la I. Municipalidad de Catemu.
        </p>
      </div>

      {/* Grid of Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TRANSPARENCIA_LINKS.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-[#15241C] p-6 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 shadow-card hover:shadow-card-hover hover:border-verde-valle transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-verde-valle dark:text-emerald-400 bg-verde-suave dark:bg-verde-valle/30 px-2.5 py-1 rounded-full">
                  {link.categoria}
                </span>
                <ExternalLink className="w-4 h-4 text-texto-secundario group-hover:text-verde-valle" />
              </div>

              <h2 className="font-heading font-bold text-xl text-tinta dark:text-white group-hover:text-verde-valle dark:group-hover:text-emerald-400 transition-colors mb-2">
                {link.titulo}
              </h2>

              <p className="text-sm text-texto-secundario dark:text-gray-300 mb-6">
                {link.descripcion}
              </p>
            </div>

            <div className="pt-4 border-t border-lineas/60 dark:border-verde-valle/20 flex items-center justify-between text-xs font-semibold text-verde-valle dark:text-emerald-300">
              <span>Ingresar a {link.plataforma}</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>

      {/* Legal Banner */}
      <div className="bg-verde-suave/60 dark:bg-verde-valle/20 p-8 rounded-3xl border border-verde-valle/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h2 className="font-heading font-bold text-xl text-tinta dark:text-white">
            ¿Necesitas realizar una Solicitud de Información (SAI)?
          </h2>
          <p className="text-sm text-texto-secundario dark:text-gray-300">
            Cualquier persona tiene derecho a solicitar información pública contenida en actos, resoluciones, actas o expedientes de la I. Municipalidad de Catemu.
          </p>
        </div>
        <a
          href="https://www.portaltransparencia.cl/PortalPdT/ingreso-sai-v2?idOrg=487"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-6 rounded-xl bg-verde-valle hover:bg-verde-claro text-white font-bold text-sm flex items-center gap-2 shadow transition-colors flex-shrink-0"
        >
          <span>Ingresar Solicitud SAI</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
