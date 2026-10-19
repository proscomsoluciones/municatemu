'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Car, 
  Store, 
  Users, 
  FileText, 
  Scale, 
  Trash2, 
  Building2, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight,
  Filter,
  Search,
  AlertTriangle
} from 'lucide-react';
import { SEED_TRAMITES, Tramite } from '@/data/seedData';
import { TramiteSkeletonCard, LoadingSpinner } from '@/components/ui/Skeletons';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export default function TramitesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  const categories = ['Todos', 'Vehículos', 'Comercio', 'Social', 'Obras', 'Jurídico', 'General'];

  // Debounced skeleton loader effect
  useEffect(() => {
    setIsFiltering(true);
    const timer = setTimeout(() => {
      setIsFiltering(false);
    }, 220);
    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory]);

  const filteredTramites = SEED_TRAMITES.filter((t) => {
    const matchesCategory = selectedCategory === 'Todos' || t.categoria === selectedCategory;
    const matchesSearch = 
      t.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.resumen.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.palabras_clave.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car': return <Car className="w-6 h-6" />;
      case 'Store': return <Store className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'Scale': return <Scale className="w-6 h-6" />;
      case 'Trash2': return <Trash2 className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      default: return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
      {/* Page Header */}
      <ScrollReveal direction="down">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-verde-valle dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <FileText className="w-4 h-4 text-sol" />
            <span>Ventanilla de Atención al Vecino</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-tinta dark:text-white">
            Guía de Trámites y Servicios Municipales
          </h1>
          <p className="text-base text-texto-secundario dark:text-gray-300 max-w-3xl">
            Selecciona tu trámite para conocer los requisitos, costos, plazos y acceder directamente a la plataforma digital correspondiente.
          </p>
        </div>
      </ScrollReveal>

      {/* Filters Bar */}
      <ScrollReveal delay={0.1}>
        <div className="bg-white dark:bg-[#15241C] p-6 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 shadow-card space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search filter input */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-texto-secundario" />
              <input
                type="text"
                placeholder="Filtrar trámite por nombre o palabra..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-lineas dark:border-verde-valle/40 bg-papel dark:bg-[#0F1713] text-tinta dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-verde-valle"
              />
              {isFiltering && (
                <div className="absolute right-3.5 top-3.5">
                  <LoadingSpinner size="sm" />
                </div>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-verde-valle text-white shadow-md scale-105'
                      : 'bg-verde-suave dark:bg-verde-valle/20 text-verde-valle dark:text-emerald-300 hover:bg-verde-valle/20 hover:scale-102'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Trámites Grid with Skeletons */}
      {isFiltering ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TramiteSkeletonCard />
          <TramiteSkeletonCard />
          <TramiteSkeletonCard />
          <TramiteSkeletonCard />
          <TramiteSkeletonCard />
          <TramiteSkeletonCard />
        </div>
      ) : filteredTramites.length > 0 ? (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTramites.map((t) => (
            <StaggerItem key={t.id}>
              <article className="bg-white dark:bg-[#15241C] p-6 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 shadow-card hover:shadow-card-hover hover:border-verde-valle/50 transition-all flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-verde-suave dark:bg-verde-valle/30 text-verde-valle dark:text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(t.icono)}
                    </div>
                    {t.es_externo ? (
                      <span className="text-[11px] font-bold text-sol bg-amber-950/20 px-2.5 py-1 rounded-full border border-sol/30 flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        <span>{t.nombre_plataforma.split(' ')[0]}</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-verde-claro bg-verde-suave dark:bg-verde-valle/40 px-2.5 py-1 rounded-full">
                        Interno
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-texto-secundario dark:text-gray-400">
                      {t.categoria}
                    </span>
                    {t.estado_contenido && (
                      <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        <span>Pendiente</span>
                      </span>
                    )}
                  </div>

                  <h2 className="font-heading font-bold text-xl text-tinta dark:text-white group-hover:text-verde-valle dark:group-hover:text-emerald-400 transition-colors mb-2">
                    {t.titulo}
                  </h2>
                  <p className="text-sm text-texto-secundario dark:text-gray-300 line-clamp-3 mb-6">
                    {t.resumen}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-lineas/60 dark:border-verde-valle/20">
                  <div className="flex items-center justify-between text-xs text-texto-secundario dark:text-gray-400 font-medium">
                    <span>Costo: <strong>{t.costo}</strong></span>
                    <span>Plazo: <strong>{t.plazo}</strong></span>
                  </div>

                  {t.es_externo ? (
                    <a
                      href={t.url_destino}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-verde-valle hover:bg-verde-claro text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow hover:shadow-md focus:ring-2 focus:ring-sol"
                    >
                      <span>Realizar en {t.nombre_plataforma.split(' ')[0]}</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={`/tramites/${t.slug}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-verde-valle hover:bg-verde-claro text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow hover:shadow-md focus:ring-2 focus:ring-sol"
                    >
                      <span>Ver Ficha del Trámite</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                  {t.es_externo && (
                    <span className="block text-center text-[11px] text-texto-secundario dark:text-gray-400">
                      Se abre en {t.nombre_plataforma}
                    </span>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className="p-12 bg-white dark:bg-[#15241C] rounded-2xl text-center border border-lineas shadow-card">
          <p className="text-lg font-bold text-tinta dark:text-white">No se encontraron trámites con ese filtro.</p>
          <p className="text-sm text-texto-secundario dark:text-gray-400 mt-1">Prueba seleccionando &quot;Todos&quot; o buscando otra palabra clave.</p>
        </div>
      )}
    </div>
  );
}
