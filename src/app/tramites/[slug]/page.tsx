import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ExternalLink, 
  Clock, 
  DollarSign, 
  MapPin, 
  HelpCircle, 
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import { SEED_TRAMITES } from '@/data/seedData';

export async function generateStaticParams() {
  return SEED_TRAMITES.map((t) => ({
    slug: t.slug,
  }));
}

export default function TramiteDetailPage({ params }: { params: { slug: string } }) {
  const tramite = SEED_TRAMITES.find((t) => t.slug === params.slug);

  if (!tramite) {
    notFound();
  }

  // GovernmentService JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    'name': tramite.titulo,
    'description': tramite.resumen,
    'provider': {
      '@type': 'GovernmentOrganization',
      'name': 'Ilustre Municipalidad de Catemu'
    },
    'serviceType': tramite.categoria,
    'offers': {
      '@type': 'Offer',
      'price': tramite.costo
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back button */}
      <div>
        <Link
          href="/tramites"
          className="inline-flex items-center gap-2 text-sm font-semibold text-verde-valle dark:text-emerald-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al catálogo de trámites</span>
        </Link>
      </div>

      {/* Header Card */}
      <div className="bg-white dark:bg-[#15241C] p-8 rounded-3xl border border-lineas/80 dark:border-verde-valle/30 shadow-card space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-verde-suave dark:bg-verde-valle/40 text-verde-valle dark:text-emerald-300 font-bold text-xs">
            {tramite.categoria}
          </span>
          {tramite.es_externo ? (
            <span className="px-3 py-1 rounded-full bg-amber-950/20 text-sol font-bold text-xs border border-sol/30 flex items-center gap-1">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Plataforma externa: {tramite.nombre_plataforma}</span>
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-verde-claro text-white font-bold text-xs">
              Trámite Municipal Interno
            </span>
          )}
          {tramite.estado_contenido && (
            <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold text-xs flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>{tramite.estado_contenido}</span>
            </span>
          )}
        </div>

        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-tinta dark:text-white">
          {tramite.titulo}
        </h1>

        <p className="text-lg text-texto-secundario dark:text-gray-300 font-medium leading-relaxed">
          {tramite.resumen}
        </p>

        {/* Action Button Banner */}
        <div className="p-6 rounded-2xl bg-verde-suave/60 dark:bg-verde-valle/20 border border-verde-valle/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase text-verde-valle dark:text-emerald-400 block">
              Plataforma de procesamiento:
            </span>
            <span className="text-base font-bold text-tinta dark:text-white">
              {tramite.nombre_plataforma}
            </span>
          </div>

          {tramite.es_externo ? (
            <a
              href={tramite.url_destino}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-verde-valle hover:bg-verde-claro text-white font-bold text-base flex items-center gap-2 shadow transition-colors focus:ring-2 focus:ring-sol"
            >
              <span>Iniciar trámite en línea</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          ) : (
            <a
              href={tramite.url_destino}
              className="py-3 px-6 rounded-xl bg-verde-valle hover:bg-verde-claro text-white font-bold text-base flex items-center gap-2 shadow transition-colors focus:ring-2 focus:ring-sol"
            >
              <span>Ingresar solicitud</span>
              <CheckCircle2 className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Summary info cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-[#15241C] p-5 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 flex items-center gap-3">
          <DollarSign className="w-8 h-8 text-sol flex-shrink-0" />
          <div>
            <span className="text-xs text-texto-secundario dark:text-gray-400 block font-medium">Costo del trámite</span>
            <span className="font-bold text-tinta dark:text-white">{tramite.costo}</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#15241C] p-5 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 flex items-center gap-3">
          <Clock className="w-8 h-8 text-verde-valle dark:text-emerald-400 flex-shrink-0" />
          <div>
            <span className="text-xs text-texto-secundario dark:text-gray-400 block font-medium">Plazo estimado</span>
            <span className="font-bold text-tinta dark:text-white">{tramite.plazo}</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[#15241C] p-5 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 flex items-center gap-3">
          <MapPin className="w-8 h-8 text-tierra flex-shrink-0" />
          <div>
            <span className="text-xs text-texto-secundario dark:text-gray-400 block font-medium">Lugar / Vía</span>
            <span className="font-bold text-tinta dark:text-white truncate block">{tramite.nombre_plataforma.split(' ')[0]}</span>
          </div>
        </div>
      </div>

      {/* Detailed Description */}
      <div className="bg-white dark:bg-[#15241C] p-8 rounded-3xl border border-lineas/80 dark:border-verde-valle/30 shadow-card space-y-6">
        <div>
          <h2 className="font-heading font-bold text-2xl text-tinta dark:text-white mb-3">
            ¿En qué consiste este trámite?
          </h2>
          <p className="text-base text-texto-secundario dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {tramite.descripcion}
          </p>
        </div>

        {/* Requirements */}
        <div className="pt-6 border-t border-lineas/60 dark:border-verde-valle/20">
          <h2 className="font-heading font-bold text-2xl text-tinta dark:text-white mb-4">
            Requisitos obligatorios
          </h2>
          <ul className="space-y-3">
            {tramite.requisitos.map((req, idx) => (
              <li key={idx} className="flex items-start gap-3 text-base text-tinta dark:text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-verde-valle dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
