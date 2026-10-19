'use client';

import React, { useState, useEffect } from 'react';
import { FileText, Download, Search, Filter, ShieldAlert, Calendar, CheckCircle2 } from 'lucide-react';
import { SEED_DOCUMENTOS, Documento } from '@/data/seedData';
import { DocumentSkeletonCard, LoadingSpinner } from '@/components/ui/Skeletons';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

export default function DocumentosPage() {
  const [selectedTipo, setSelectedTipo] = useState<string>('Todos');
  const [selectedAnio, setSelectedAnio] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const tipos = ['Todos', 'PLADECO', 'Cuenta Pública', 'Ordenanza', 'Decreto', 'Rol'];
  const anios = ['Todos', '2026', '2025', '2024'];

  // Debounced skeleton loader effect on filter/search change
  useEffect(() => {
    setIsFiltering(true);
    const timer = setTimeout(() => {
      setIsFiltering(false);
    }, 240);
    return () => clearTimeout(timer);
  }, [searchTerm, selectedTipo, selectedAnio]);

  const filteredDocs = SEED_DOCUMENTOS.filter((d) => {
    const matchesTipo = selectedTipo === 'Todos' || d.tipo === selectedTipo;
    const matchesAnio = selectedAnio === 'Todos' || d.anio.toString() === selectedAnio;
    const matchesSearch = 
      d.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.resumen.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTipo && matchesAnio && matchesSearch;
  });

  const handleDownload = (docId: string, url: string) => {
    setDownloadingId(docId);
    setTimeout(() => {
      setDownloadingId(null);
      window.open(url, '_blank');
    }, 550);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
      {/* Header */}
      <ScrollReveal direction="down">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-verde-valle dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <FileText className="w-4 h-4 text-sol" />
            <span>Repositorio Institucional de Documentos</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-tinta dark:text-white">
            Decretos, Ordenanzas, PLADECO y Cuentas Públicas
          </h1>
          <p className="text-base text-texto-secundario dark:text-gray-300 max-w-3xl">
            Consulte y descargue los documentos oficiales emitidos por la I. Municipalidad de Catemu.
          </p>
        </div>
      </ScrollReveal>

      {/* Filter and Search Panel */}
      <ScrollReveal delay={0.1}>
        <div className="bg-white dark:bg-[#15241C] p-6 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 shadow-card space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search input with active indicator */}
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-texto-secundario" />
              <input
                type="text"
                placeholder="Buscar título o palabra clave..."
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

            {/* Tipo select */}
            <div>
              <label className="sr-only">Tipo de documento</label>
              <select
                value={selectedTipo}
                onChange={(e) => setSelectedTipo(e.target.value)}
                className="w-full py-2.5 px-4 rounded-xl border border-lineas dark:border-verde-valle/40 bg-papel dark:bg-[#0F1713] text-tinta dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-verde-valle"
              >
                <option value="Todos">Todos los tipos (Decretos, Ordenanzas...)</option>
                {tipos.filter((t) => t !== 'Todos').map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Año select */}
            <div>
              <label className="sr-only">Año de publicación</label>
              <select
                value={selectedAnio}
                onChange={(e) => setSelectedAnio(e.target.value)}
                className="w-full py-2.5 px-4 rounded-xl border border-lineas dark:border-verde-valle/40 bg-papel dark:bg-[#0F1713] text-tinta dark:text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-verde-valle"
              >
                <option value="Todos">Todos los años (2026, 2025...)</option>
                {anios.filter((a) => a !== 'Todos').map((a) => (
                  <option key={a} value={a}>Año {a}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Documents List with Skeleton Loading */}
      {isFiltering ? (
        <div className="space-y-4">
          <DocumentSkeletonCard />
          <DocumentSkeletonCard />
          <DocumentSkeletonCard />
        </div>
      ) : filteredDocs.length > 0 ? (
        <StaggerContainer className="space-y-4">
          {filteredDocs.map((doc) => (
            <StaggerItem key={doc.id}>
              <div className="bg-white dark:bg-[#15241C] p-6 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 shadow-card hover:shadow-card-hover hover:border-verde-valle transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-verde-valle text-white">
                      {doc.tipo}
                    </span>
                    <span className="text-xs font-semibold text-texto-secundario dark:text-gray-400">
                      Año {doc.anio} • Publicado: {doc.fecha}
                    </span>
                    {doc.contiene_datos_personales && (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-950/20 text-sol border border-sol/30 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>Protegido Ley 21.719</span>
                      </span>
                    )}
                  </div>

                  <h2 className="font-heading font-bold text-xl text-tinta dark:text-white group-hover:text-verde-valle dark:group-hover:text-emerald-400 transition-colors">
                    {doc.titulo}
                  </h2>

                  <p className="text-sm text-texto-secundario dark:text-gray-300">
                    {doc.resumen}
                  </p>

                  {doc.contiene_datos_personales && (
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-medium italic">
                      * Documento sujeto a retiro programado ({doc.fecha_retiro_programado}) por contener titularidades de datos personales.
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <span className="text-xs text-texto-secundario dark:text-gray-400 font-medium">
                    Formato: {doc.formato} • {doc.tamano}
                  </span>
                  <button
                    onClick={() => handleDownload(doc.id, doc.archivo_url)}
                    disabled={downloadingId === doc.id}
                    className="py-2.5 px-5 rounded-xl bg-verde-valle hover:bg-verde-claro text-white font-bold text-sm flex items-center gap-2 shadow hover:shadow-md transition-all focus:ring-2 focus:ring-sol cursor-pointer disabled:opacity-75"
                  >
                    {downloadingId === doc.id ? (
                      <>
                        <LoadingSpinner size="sm" className="border-t-white border-b-white" />
                        <span>Preparando descarga...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                        <span>Descargar Documento</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <div className="p-12 bg-white dark:bg-[#15241C] rounded-2xl text-center border border-lineas shadow-card">
          <p className="text-lg font-bold text-tinta dark:text-white">No se encontraron documentos con esos criterios de búsqueda.</p>
          <p className="text-sm text-texto-secundario dark:text-gray-400 mt-1">Intenta con otro término o selecciona &quot;Todos los tipos&quot;.</p>
        </div>
      )}
    </div>
  );
}
