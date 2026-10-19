import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, AlertCircle, Share2, ShieldCheck } from 'lucide-react';
import { SEED_NOTICIAS } from '@/data/seedData';

export async function generateStaticParams() {
  return SEED_NOTICIAS.map((n) => ({
    slug: n.slug,
  }));
}

export default function NoticiaDetailPage({ params }: { params: { slug: string } }) {
  const noticia = SEED_NOTICIAS.find((n) => n.slug === params.slug);

  if (!noticia) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div>
        <Link
          href="/noticias"
          className="inline-flex items-center gap-2 text-sm font-semibold text-verde-valle dark:text-emerald-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al listado de noticias</span>
        </Link>
      </div>

      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-verde-valle text-white font-bold text-xs">
            {noticia.categoria}
          </span>
          {noticia.es_aviso_urgente && (
            <span className="px-3 py-1 rounded-full bg-sol text-tinta font-bold text-xs flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Convocatoria Abierta</span>
            </span>
          )}
        </div>

        <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-tinta dark:text-white leading-tight">
          {noticia.titulo}
        </h1>

        <div className="flex items-center gap-4 text-sm text-texto-secundario dark:text-gray-400 font-medium pt-2 border-t border-lineas/60">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-verde-valle dark:text-emerald-400" />
            <span>Fecha de publicación: {noticia.fecha_publicacion}</span>
          </div>
          {noticia.fecha_vigencia && (
            <div className="text-sol font-semibold">
              Vigencia postulación hasta: {noticia.fecha_vigencia}
            </div>
          )}
        </div>
      </header>

      {/* Featured Header Banner */}
      <div className="relative h-64 md:h-96 rounded-3xl bg-verde-valle/10 border border-lineas/80 dark:border-verde-valle/30 overflow-hidden flex items-center justify-center p-8">
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-verde-valle/30 to-verde-claro/40 flex flex-col items-center justify-center text-center p-6 text-verde-valle dark:text-emerald-300">
          <Tag className="w-12 h-12 mb-3 text-sol" />
          <span className="font-heading font-bold text-xl md:text-2xl">{noticia.titulo}</span>
          <span className="text-xs text-tinta dark:text-gray-200 mt-2 font-medium max-w-xl">
            Texto ALT Accesible (WCAG 2.1): {noticia.imagen_alt}
          </span>
        </div>
      </div>

      {/* Article Body */}
      <div className="bg-white dark:bg-[#15241C] p-8 md:p-10 rounded-3xl border border-lineas/80 dark:border-verde-valle/30 shadow-card space-y-6">
        <p className="text-lg md:text-xl font-bold text-tinta dark:text-white leading-relaxed border-l-4 border-sol pl-4">
          {noticia.bajada}
        </p>

        <div className="prose dark:prose-invert max-w-none text-base text-tinta dark:text-gray-200 leading-relaxed space-y-4 whitespace-pre-line">
          {noticia.cuerpo}
        </div>

        <div className="pt-6 border-t border-lineas/60 flex items-center justify-between text-xs text-texto-secundario dark:text-gray-400">
          <span>Fuente Oficial: Ilustre Municipalidad de Catemu</span>
          <div className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Verificado por Gabinete</span>
          </div>
        </div>
      </div>
    </article>
  );
}
