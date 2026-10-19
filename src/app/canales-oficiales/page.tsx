import React from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, ExternalLink, Globe, Lock } from 'lucide-react';
import { CANALES_OFICIALES } from '@/data/seedData';

export default function CanalesOficialesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-verde-valle dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-sol" />
          <span>Seguridad de la Información • Ley 21.663</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-tinta dark:text-white">
          Registro Oficial de Dominios y Canales Válidos
        </h1>
        <p className="text-base text-texto-secundario dark:text-gray-300">
          Para prevenir suplantaciones de identidad, fraudes o páginas falsas, verifique siempre que la dirección en la barra de su navegador corresponda a uno de los siguientes dominios autorizados.
        </p>
      </div>

      <div className="bg-amber-100 dark:bg-amber-950/60 border border-sol/40 p-5 rounded-2xl flex items-start gap-3 text-tinta dark:text-gray-200">
        <AlertTriangle className="w-6 h-6 text-sol flex-shrink-0 mt-0.5" />
        <div className="text-sm space-y-1">
          <strong className="font-bold text-amber-900 dark:text-amber-200">Advertencia contra fraudes y phishing:</strong>
          <p className="text-amber-800 dark:text-amber-300">
            La I. Municipalidad de Catemu NUNCA le solicitará claves bancarias, claves del SII o pagos mediante transferencias a cuentas de personas naturales.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#15241C] p-6 rounded-3xl border border-lineas/80 dark:border-verde-valle/30 shadow-card divide-y divide-lineas/60 dark:divide-verde-valle/20">
        {CANALES_OFICIALES.map((canal, i) => (
          <div key={i} className="py-4 first:pt-0 last:pb-0 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-verde-valle dark:text-emerald-400" />
                <span className="font-heading font-bold text-lg text-tinta dark:text-white">
                  https://{canal.dominio}
                </span>
              </div>
              <p className="text-xs text-texto-secundario dark:text-gray-300 pl-6">
                {canal.proposito}
              </p>
            </div>
            <span className="px-2.5 py-1 rounded bg-verde-suave dark:bg-verde-valle/30 text-verde-valle dark:text-emerald-300 font-bold text-xs flex items-center gap-1 flex-shrink-0">
              <Lock className="w-3 h-3" />
              <span>Verificado</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
