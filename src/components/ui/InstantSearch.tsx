'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';
import { Search, ExternalLink, FileText, Newspaper, Sparkles, ArrowRight, X } from 'lucide-react';
import { SEED_TRAMITES, SEED_NOTICIAS, SEED_DOCUMENTOS } from '@/data/seedData';
import { SearchSkeletonItem, LoadingSpinner } from './Skeletons';

interface SearchItem {
  type: 'tramite' | 'noticia' | 'documento';
  title: string;
  summary: string;
  url: string;
  badge?: string;
  isExternal?: boolean;
  platform?: string;
  keywords?: string[];
}

export const InstantSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Combine items for Fuse.js index
  const searchIndex: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [];

    SEED_TRAMITES.forEach((t) => {
      items.push({
        type: 'tramite',
        title: t.titulo,
        summary: t.resumen,
        url: t.es_externo ? t.url_destino : `/tramites/${t.slug}`,
        badge: 'Trámite',
        isExternal: t.es_externo,
        platform: t.nombre_plataforma,
        keywords: t.palabras_clave,
      });
    });

    SEED_NOTICIAS.forEach((n) => {
      items.push({
        type: 'noticia',
        title: n.titulo,
        summary: n.bajada,
        url: `/noticias/${n.slug}`,
        badge: 'Noticia',
      });
    });

    SEED_DOCUMENTOS.forEach((d) => {
      items.push({
        type: 'documento',
        title: d.titulo,
        summary: d.resumen,
        url: `/documentos`,
        badge: `Documento (${d.tipo})`,
      });
    });

    return items;
  }, []);

  // Configure Fuse.js
  const fuse = useMemo(() => {
    return new Fuse(searchIndex, {
      keys: ['title', 'summary', 'keywords', 'platform', 'badge'],
      threshold: 0.35,
      ignoreLocation: true,
    });
  }, [searchIndex]);

  // Debounce search state for micro-loader feedback
  useEffect(() => {
    if (!query.trim()) {
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    const timer = setTimeout(() => {
      setIsSearching(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [query]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).map((res) => res.item).slice(0, 6);
  }, [query, fuse]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (term: string) => {
    setQuery(term);
    setIsOpen(true);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto">
      {/* Search Input Box */}
      <div className="relative">
        <label htmlFor="catemu-hero-search" className="sr-only">
          Buscar trámite, noticia o documento municipal
        </label>
        <div className="relative flex items-center shadow-hero rounded-2xl overflow-hidden bg-white dark:bg-[#16291F] border-2 border-verde-valle/40 focus-within:border-verde-valle focus-within:ring-4 focus-within:ring-verde-valle/20 transition-all">
          <Search className="w-6 h-6 text-verde-valle dark:text-emerald-400 ml-4 flex-shrink-0" aria-hidden="true" />
          <input
            id="catemu-hero-search"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="¿Qué necesitas hacer hoy en Catemu? (Ej: Permiso de circulación, patentes, RSH...)"
            className="w-full py-4 pl-3 pr-12 text-base md:text-lg bg-transparent text-tinta dark:text-white placeholder-texto-secundario dark:placeholder-gray-400 font-medium focus:outline-none"
            autoComplete="off"
          />
          <div className="absolute right-3 flex items-center gap-1.5">
            {isSearching && (
              <LoadingSpinner size="sm" />
            )}
            {query && !isSearching && (
              <button
                onClick={() => setQuery('')}
                className="p-1.5 text-gray-400 hover:text-tinta dark:hover:text-white focus:outline-none rounded-lg"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Instant Suggestions under input */}
      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-texto-secundario dark:text-gray-300">
        <span className="flex items-center gap-1 text-verde-valle dark:text-emerald-400">
          <Sparkles className="w-3.5 h-3.5 text-sol" />
          <span>Sugerencias rápidas:</span>
        </span>
        {[
          'Permiso de circulación',
          'Patentes municipales',
          'Subvenciones 2026',
          'Registro Social',
          'PLADECO'
        ].map((term) => (
          <button
            key={term}
            onClick={() => handleSuggestionClick(term)}
            className="px-2.5 py-1 rounded-full bg-verde-suave dark:bg-verde-valle/30 text-verde-valle dark:text-emerald-300 hover:bg-verde-valle hover:text-white dark:hover:bg-verde-valle transition-colors border border-verde-valle/20"
          >
            {term}
          </button>
        ))}
      </div>

      {/* Results Dropdown */}
      {isOpen && query.trim().length > 0 && (
        <div 
          className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-[#15241C] rounded-2xl shadow-card-hover border border-lineas/80 dark:border-verde-valle/30 z-50 overflow-hidden animate-fade-in"
          role="listbox"
          aria-label="Resultados de búsqueda"
        >
          {isSearching ? (
            <div className="divide-y divide-lineas/50 dark:divide-verde-valle/20 p-2">
              <div className="px-3 py-1.5 text-xs font-medium text-texto-secundario dark:text-gray-400 flex items-center gap-2">
                <LoadingSpinner size="sm" />
                <span>Buscando en catálogo municipal...</span>
              </div>
              <SearchSkeletonItem />
              <SearchSkeletonItem />
              <SearchSkeletonItem />
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y divide-lineas/50 dark:divide-verde-valle/20">
              <div className="px-4 py-2 bg-verde-suave/60 dark:bg-verde-valle/20 text-xs font-bold text-verde-valle dark:text-emerald-300 uppercase tracking-wider flex items-center justify-between">
                <span>Resultados encontrados ({results.length})</span>
                <span className="text-[11px] font-normal text-texto-secundario">Presiona para ir</span>
              </div>
              {results.map((item, idx) => (
                <div key={idx} className="p-4 hover:bg-verde-suave/40 dark:hover:bg-verde-valle/30 transition-colors">
                  {item.isExternal ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 rounded text-[11px] font-extrabold bg-verde-valle text-white">
                              {item.badge}
                            </span>
                            {item.platform && (
                              <span className="text-xs font-medium text-sol bg-amber-950/20 px-2 py-0.5 rounded border border-sol/30 flex items-center gap-1">
                                <ExternalLink className="w-3 h-3" />
                                <span>Se abre en {item.platform}</span>
                              </span>
                            )}
                          </div>
                          <h4 className="font-heading font-bold text-base text-tinta dark:text-white group-hover:text-verde-valle dark:group-hover:text-emerald-400 flex items-center gap-1.5">
                            <span>{item.title}</span>
                            <ExternalLink className="w-4 h-4 text-texto-secundario group-hover:text-verde-valle" />
                          </h4>
                          <p className="text-sm text-texto-secundario dark:text-gray-300 line-clamp-2 mt-1">
                            {item.summary}
                          </p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <Link
                      href={item.url}
                      className="block group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 rounded text-[11px] font-extrabold bg-verde-claro text-white">
                              {item.badge}
                            </span>
                          </div>
                          <h4 className="font-heading font-bold text-base text-tinta dark:text-white group-hover:text-verde-valle dark:group-hover:text-emerald-400 flex items-center gap-1.5">
                            <span>{item.title}</span>
                            <ArrowRight className="w-4 h-4 text-texto-secundario group-hover:text-verde-valle" />
                          </h4>
                          <p className="text-sm text-texto-secundario dark:text-gray-300 line-clamp-2 mt-1">
                            {item.summary}
                          </p>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-base font-semibold text-tinta dark:text-white mb-1">
                No se encontraron resultados para &quot;{query}&quot;
              </p>
              <p className="text-sm text-texto-secundario dark:text-gray-300">
                Prueba buscando palabras como &quot;permiso&quot;, &quot;patentes&quot;, &quot;dideco&quot; o &quot;decretos&quot;.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
