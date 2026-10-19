'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Newspaper, Calendar, ArrowRight, Tag, Search, AlertCircle } from 'lucide-react';
import { SEED_NOTICIAS, Noticia } from '@/data/seedData';

export default function NoticiasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['Todas', 'Convocatorias', 'Deportes', 'Cultura', 'Obras', 'Salud', 'Educación', 'Avisos'];

  const filteredNoticias = SEED_NOTICIAS.filter((n) => {
    const matchesCat = selectedCategory === 'Todas' || n.categoria === selectedCategory;
    const matchesSearch = 
      n.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.bajada.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.cuerpo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
      {/* Page Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-verde-valle dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <Newspaper className="w-4 h-4 text-sol" />
          <span>Información y Prensa Municipal</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-tinta dark:text-white">
          Noticias, Comunicados y Subvenciones 2026
        </h1>
        <p className="text-base text-texto-secundario dark:text-gray-300 max-w-3xl">
          Mantente informado sobre los avances de obras, postulaciones a fondos comunitarios, actividades deportivas y culturales en Catemu.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-[#15241C] p-6 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 shadow-card space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-texto-secundario" />
            <input
              type="text"
              placeholder="Buscar noticia o fondo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-lineas dark:border-verde-valle/40 bg-papel dark:bg-[#0F1713] text-tinta dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-verde-valle"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-verde-valle text-white shadow'
                    : 'bg-verde-suave dark:bg-verde-valle/20 text-verde-valle dark:text-emerald-300 hover:bg-verde-valle/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredNoticias.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNoticias.map((n) => (
            <article
              key={n.id}
              className="bg-white dark:bg-[#15241C] rounded-2xl overflow-hidden border border-lineas/80 dark:border-verde-valle/30 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 bg-verde-valle/10 flex items-center justify-center p-4">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-verde-valle/20 to-verde-claro/30 flex items-center justify-center text-verde-valle dark:text-emerald-300 font-bold text-center px-4">
                    <span>{n.categoria}</span>
                  </div>
                  <span className="absolute top-3 left-3 bg-verde-valle text-white text-xs font-bold px-3 py-1 rounded-md shadow">
                    {n.categoria}
                  </span>
                  {n.es_aviso_urgente && (
                    <span className="absolute top-3 right-3 bg-sol text-tinta text-xs font-bold px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Postulación Abierta</span>
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-texto-secundario dark:text-gray-400 font-medium mb-2">
                    <Calendar className="w-3.5 h-3.5 text-verde-valle dark:text-emerald-400" />
                    <time dateTime={n.fecha_publicacion}>{n.fecha_publicacion}</time>
                    {n.fecha_vigencia && (
                      <span className="text-sol font-semibold">• Cierre: {n.fecha_vigencia}</span>
                    )}
                  </div>

                  <h2 className="font-heading font-bold text-xl text-tinta dark:text-white group-hover:text-verde-valle dark:group-hover:text-emerald-400 transition-colors mb-2 line-clamp-2">
                    <Link href={`/noticias/${n.slug}`}>
                      {n.titulo}
                    </Link>
                  </h2>

                  <p className="text-sm text-texto-secundario dark:text-gray-300 line-clamp-3">
                    {n.bajada}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/noticias/${n.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-verde-suave dark:bg-verde-valle/30 hover:bg-verde-valle text-verde-valle dark:text-emerald-300 hover:text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Leer publicación completa</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="p-12 bg-white dark:bg-[#15241C] rounded-2xl text-center border border-lineas">
          <p className="text-lg font-bold text-tinta dark:text-white">No hay noticias registradas bajo esa categoría.</p>
        </div>
      )}
    </div>
  );
}
