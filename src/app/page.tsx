'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Car, 
  Store, 
  Users, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  Calendar, 
  Scale, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { InstantSearch } from '@/components/ui/InstantSearch';
import { HeroAconcaguaSvg } from '@/components/ui/HeroAconcaguaSvg';
import { SEED_TRAMITES, SEED_NOTICIAS, SEED_DOCUMENTOS, TRANSPARENCIA_LINKS } from '@/data/seedData';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { HomeLoadingSkeleton } from '@/components/ui/Skeletons';

export default function PortadaPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Micro-delay skeleton for initial page render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 280);
    return () => clearTimeout(timer);
  }, []);

  const tramitesDestacados = SEED_TRAMITES.filter((t) => t.destacado);
  const noticiasRecientes = SEED_NOTICIAS.slice(0, 4);
  const documentosRecientes = SEED_DOCUMENTOS.slice(0, 4);

  // JSON-LD GovernmentOrganization schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOrganization',
    'name': 'I. Municipalidad de Catemu',
    'url': 'https://www.municatemu.cl',
    'logo': 'https://www.municatemu.cl/images/logo-catemu.png',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Catemu',
      'addressRegion': 'Valparaíso',
      'addressCountry': 'CL'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'Atención al Vecino',
      'email': 'contacto@municatemu.cl'
    }
  };

  if (isLoading) {
    return <HomeLoadingSkeleton />;
  }

  return (
    <div className="w-full space-y-16 pb-16 overflow-hidden">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION WITH DYNAMIC ATMOSPHERE */}
      <section 
        className="relative pt-10 pb-12 px-4 bg-gradient-to-b from-[#F4EAF5]/80 via-papel to-papel dark:from-[#240825]/50 dark:via-[#140715] dark:to-[#140715] border-b border-lineas/60 overflow-hidden"
        aria-labelledby="hero-title"
      >
        {/* Subtle Ambient Decorative Glowing Orbs */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#F07D26]/10 via-[#A82245]/10 to-[#5E1757]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#F6A623]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#5E1757]/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto space-y-8 z-10">
          <ScrollReveal direction="down" distance={20} duration={0.6}>
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4EAF5] dark:bg-[#351737] text-[#5E1757] dark:text-[#F59347] text-xs font-bold border border-[#5E1757]/20 shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-[#F07D26]" />
                <span>I. Municipalidad de Catemu • Portal de Servicios Vecinales</span>
              </span>
              <h1 id="hero-title" className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-tinta dark:text-white tracking-tight leading-tight">
                ¿Qué necesitas hacer hoy en Catemu?
              </h1>
              <p className="text-base md:text-lg text-texto-secundario dark:text-gray-300">
                Encuentra tu trámite, noticia o documento municipal en menos de 3 clics.
              </p>
            </div>
          </ScrollReveal>

          {/* Prominent Instant Search with Interactive Reveal */}
          <ScrollReveal delay={0.15} distance={15}>
            <InstantSearch />
          </ScrollReveal>

          {/* Aconcagua Valley SVG Illustration with Soft Floating Entrance */}
          <ScrollReveal delay={0.25} distance={20}>
            <div className="max-w-4xl mx-auto drop-shadow-sm hover:drop-shadow-md transition-all">
              <HeroAconcaguaSvg />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TRÁMITES DESTACADOS GRID */}
      <section className="max-w-7xl mx-auto px-4" aria-labelledby="tramites-destacados-title">
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-[#5E1757] dark:text-[#F59347] font-bold text-xs uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#F07D26]" />
                <span>Acceso Rápido y Directo</span>
              </div>
              <h2 id="tramites-destacados-title" className="font-heading font-bold text-2xl md:text-3xl text-tinta dark:text-white">
                Trámites Municipales Frecuentes
              </h2>
            </div>
            <Link
              href="/tramites"
              className="inline-flex items-center gap-2 font-semibold text-[#5E1757] dark:text-[#F59347] hover:text-[#A82245] group underline transition-colors"
            >
              <span>Ver todos los trámites</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tramitesDestacados.map((item) => (
            <StaggerItem key={item.id}>
              <article
                className="bg-white dark:bg-[#15241C] p-6 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 shadow-card hover:shadow-card-hover hover:border-[#5E1757]/40 dark:hover:border-[#F59347]/40 transition-all flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F4EAF5] dark:bg-[#351737] text-[#5E1757] dark:text-[#F59347] flex items-center justify-center font-bold group-hover:scale-110 group-hover:rotate-1 transition-transform">
                      {item.icono === 'Car' && <Car className="w-6 h-6" />}
                      {item.icono === 'Store' && <Store className="w-6 h-6" />}
                      {item.icono === 'Users' && <Users className="w-6 h-6" />}
                      {item.icono === 'FileText' && <FileText className="w-6 h-6" />}
                    </div>
                    {item.es_externo && (
                      <span className="text-[11px] font-bold text-[#F07D26] bg-[#F07D26]/10 px-2.5 py-1 rounded-full border border-[#F07D26]/30 flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        <span>{item.nombre_plataforma.split(' ')[0]}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-xl text-tinta dark:text-white mb-2 group-hover:text-[#5E1757] dark:group-hover:text-[#F59347] transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-texto-secundario dark:text-gray-300 line-clamp-3 mb-6">
                    {item.resumen}
                  </p>
                </div>

                <div>
                  {item.es_externo ? (
                    <a
                      href={item.url_destino}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#5E1757] hover:bg-[#A82245] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow hover:shadow-md focus:ring-2 focus:ring-[#F07D26]"
                    >
                      <span>Ir a la plataforma</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={`/tramites/${item.slug}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#5E1757] hover:bg-[#A82245] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow hover:shadow-md focus:ring-2 focus:ring-[#F07D26]"
                    >
                      <span>Ver requisitos y detalle</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                  {item.es_externo && (
                    <span className="block text-center text-[11px] text-texto-secundario dark:text-gray-400 mt-2 font-medium">
                      Se abre en {item.nombre_plataforma}
                    </span>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* NOTICIAS Y AVISOS OFICIALES */}
      <section className="bg-gradient-to-b from-[#F4EAF5]/50 via-papel to-papel dark:from-[#260E27]/40 dark:via-[#140715] dark:to-[#140715] py-14 border-y border-lineas/60 relative" aria-labelledby="noticias-title">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up" distance={20}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 text-[#5E1757] dark:text-[#F59347] font-bold text-xs uppercase tracking-wider mb-1">
                  <Calendar className="w-4 h-4 text-[#F07D26]" />
                  <span>Actualidad Comunal</span>
                </div>
                <h2 id="noticias-title" className="font-heading font-bold text-2xl md:text-3xl text-tinta dark:text-white">
                  Noticias, Subvenciones y Convocatorias 2026
                </h2>
              </div>
              <Link
                href="/noticias"
                className="inline-flex items-center gap-2 font-semibold text-[#5E1757] dark:text-[#F59347] hover:text-[#A82245] group underline transition-colors"
              >
                <span>Ver todas las noticias</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {noticiasRecientes.map((noticia) => (
              <StaggerItem key={noticia.id}>
                <article
                  className="bg-white dark:bg-[#15241C] rounded-2xl overflow-hidden border border-lineas/80 dark:border-verde-valle/30 shadow-card hover:shadow-card-hover hover:border-[#5E1757]/40 dark:hover:border-[#F59347]/40 transition-all flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="relative h-48 bg-[#F4EAF5]/60 flex items-center justify-center overflow-hidden">
                      {noticia.imagen_url ? (
                        <Image
                          src={noticia.imagen_url}
                          alt={noticia.imagen_alt || noticia.titulo}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#5E1757]/20 via-[#A82245]/20 to-[#F07D26]/20 flex items-center justify-center text-[#5E1757] font-bold text-center px-4">
                          <span>{noticia.categoria}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute top-3 left-3 bg-[#5E1757] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow z-10">
                        {noticia.categoria}
                      </span>
                      {noticia.es_aviso_urgente && (
                        <span className="absolute top-3 right-3 bg-[#F07D26] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow flex items-center gap-1 animate-pulse z-10">
                          <AlertCircle className="w-3 h-3" />
                          <span>Vigente</span>
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <time className="text-xs text-texto-secundario dark:text-gray-400 font-medium block mb-2">
                        Publicado: {noticia.fecha_publicacion}
                      </time>
                      <h3 className="font-heading font-bold text-lg text-tinta dark:text-white group-hover:text-[#5E1757] dark:group-hover:text-[#F59347] transition-colors mb-2 line-clamp-2">
                        <Link href={`/noticias/${noticia.slug}`}>
                          {noticia.titulo}
                        </Link>
                      </h3>
                      <p className="text-sm text-texto-secundario dark:text-gray-300 line-clamp-3">
                        {noticia.bajada}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <Link
                      href={`/noticias/${noticia.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5E1757] dark:text-[#F59347] group-hover:translate-x-1.5 transition-transform"
                    >
                      <span>Leer noticia completa</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* DOCUMENTOS Y DECRETOS OFICIALES */}
      <section className="max-w-7xl mx-auto px-4" aria-labelledby="documentos-title">
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-[#5E1757] dark:text-[#F59347] font-bold text-xs uppercase tracking-wider mb-1">
                <Scale className="w-4 h-4 text-[#F07D26]" />
                <span>Repositorio Comunal</span>
              </div>
              <h2 id="documentos-title" className="font-heading font-bold text-2xl md:text-3xl text-tinta dark:text-white">
                Decretos, Ordenanzas y PLADECO Recientes
              </h2>
            </div>
            <Link
              href="/documentos"
              className="inline-flex items-center gap-2 font-semibold text-[#5E1757] dark:text-[#F59347] hover:text-[#A82245] group underline transition-colors"
            >
              <span>Buscar en repositorio documental</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documentosRecientes.map((doc) => (
            <StaggerItem key={doc.id}>
              <div
                className="bg-white dark:bg-[#15241C] p-5 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 flex items-start justify-between gap-4 hover:border-[#5E1757] hover:shadow-card-hover transition-all group h-full"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-[#5E1757] text-white">
                      {doc.tipo}
                    </span>
                    <span className="text-xs text-texto-secundario dark:text-gray-400 font-medium">
                      Año {doc.anio} • {doc.tamano} ({doc.formato})
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-tinta dark:text-white group-hover:text-[#5E1757] dark:group-hover:text-[#F59347] transition-colors">
                    {doc.titulo}
                  </h3>
                  <p className="text-xs text-texto-secundario dark:text-gray-300 line-clamp-2">
                    {doc.resumen}
                  </p>
                </div>

                <a
                  href={doc.archivo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#F4EAF5] dark:bg-[#351737] text-[#5E1757] dark:text-[#F59347] hover:bg-[#5E1757] hover:text-white transition-all flex-shrink-0 group-hover:scale-105 shadow-xs"
                  title={`Descargar ${doc.titulo} en formato PDF`}
                  aria-label={`Descargar ${doc.titulo}`}
                >
                  <FileText className="w-5 h-5" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* BLOQUE DE TRANSPARENCIA ACTIVA */}
      <section className="max-w-7xl mx-auto px-4" aria-labelledby="transparencia-block-title">
        <ScrollReveal direction="up" distance={25}>
          <div className="relative overflow-hidden bg-gradient-to-br from-[#5E1757] via-[#7B1D71] to-[#240825] text-white p-8 md:p-12 rounded-3xl shadow-hero border border-purple-400/20">
            {/* Ambient subtle light inside card */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#F07D26]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative max-w-3xl mb-8 space-y-3 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F07D26]/20 text-[#F6A623] text-xs font-bold border border-[#F07D26]/30">
                <ShieldCheck className="w-4 h-4" />
                <span>Transparencia y Probidad Pública</span>
              </div>
              <h2 id="transparencia-block-title" className="font-heading font-bold text-3xl md:text-4xl text-white">
                Accede a la Transparencia Activa de Catemu
              </h2>
              <p className="text-purple-100 text-base">
                Cumplimiento riguroso de la Ley N° 20.285 de Transparencia y Acceso a la Información Pública y Ley N° 20.730 de Regulaciones del Lobby.
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 z-10">
              {TRANSPARENCIA_LINKS.slice(0, 6).map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all group flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <span className="text-xs font-bold text-[#F6A623] block mb-1">
                      {link.categoria}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#F6A623] transition-colors flex items-center gap-1.5">
                      <span>{link.titulo}</span>
                      <ExternalLink className="w-4 h-4 text-purple-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </h3>
                    <p className="text-xs text-purple-200/90 mt-2 line-clamp-2">
                      {link.descripcion}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-purple-200 font-semibold">
                    <span>Ir a {link.plataforma}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>

            <div className="relative mt-8 text-center z-10">
              <Link
                href="/transparencia"
                className="inline-flex items-center gap-2 py-3 px-7 rounded-xl bg-gradient-to-r from-[#F07D26] to-[#F6A623] text-gray-950 font-bold text-base hover:brightness-110 transition-all shadow-md hover:shadow-lg group"
              >
                <span>Ver Portal Completo de Transparencia</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
