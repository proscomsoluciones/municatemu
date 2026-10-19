'use client';

import React, { useState } from 'react';
import { Users, Phone, Mail, MapPin, Search, Building2, UserCheck, ShieldCheck, ChevronRight } from 'lucide-react';
import { SEED_UNIDADES, Unidad } from '@/data/seedData';

export default function MunicipioPage() {
  const [selectedCat, setSelectedCat] = useState<string>('Todas');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['Todas', 'Alcaldía', 'Administración', 'Desarrollo', 'Servicios', 'Fiscalización'];

  const filteredUnidades = SEED_UNIDADES.filter((u) => {
    const matchesCat = selectedCat === 'Todas' || u.categoria === selectedCat;
    const matchesSearch = 
      u.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.responsable.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-verde-valle dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <Building2 className="w-4 h-4 text-sol" />
          <span>Estructura y Gobierno Comunal</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-tinta dark:text-white">
          Autoridades y Directorio de Unidades Municipales
        </h1>
        <p className="text-base text-texto-secundario dark:text-gray-300 max-w-3xl">
          Conoce al Alcalde, Concejo Municipal y a los responsables de cada dirección y departamento municipal de Catemu.
        </p>
      </div>

      {/* ALCALDE CARD */}
      <section className="bg-gradient-to-br from-verde-valle to-verde-claro text-white rounded-3xl p-8 md:p-10 shadow-hero border border-emerald-500/30 flex flex-col md:flex-row items-center gap-8">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white/20 border-2 border-sol flex items-center justify-center text-sol font-heading font-bold text-4xl shadow-inner flex-shrink-0">
          RDB
        </div>
        <div className="space-y-3 text-center md:text-left">
          <span className="px-3 py-1 rounded-full bg-sol text-tinta font-extrabold text-xs inline-block">
            Alcalde de la Comuna de Catemu
          </span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white">
            Rodrigo Díaz Brito
          </h2>
          <p className="text-gray-100 text-sm md:text-base leading-relaxed max-w-2xl">
            Liderando la gestión comunal enfocada en la participación vecinal, el desarrollo del Valle del Aconcagua, la probidad administrativa y la modernización de los servicios para Catemu.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-emerald-200">
            <span>Correo: alcaldia@municatemu.cl</span>
            <span>• Teléfono: 34 2 631300</span>
          </div>
        </div>
      </section>

      {/* ORGANIGRAMA RESUMIDO UI */}
      <section className="bg-white dark:bg-[#15241C] p-8 rounded-3xl border border-lineas/80 dark:border-verde-valle/30 shadow-card space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-heading font-bold text-2xl text-tinta dark:text-white">
            Organigrama Institucional de Catemu
          </h2>
          <p className="text-sm text-texto-secundario dark:text-gray-300">
            Estructura jerárquica y funcional aprobada según el Reglamento Interno Municipal.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 pt-4">
          <div className="px-6 py-3 rounded-xl bg-verde-valle text-white font-bold text-center shadow w-full max-w-md">
            Alcaldía & Concejo Municipal
          </div>
          <div className="w-0.5 h-6 bg-verde-valle"></div>
          <div className="px-6 py-3 rounded-xl bg-verde-claro text-white font-bold text-center shadow w-full max-w-md">
            Administración Municipal & Asesoría Jurídica
          </div>
          <div className="w-0.5 h-6 bg-verde-valle"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl text-center text-xs font-bold">
            <div className="p-3 rounded-xl bg-verde-suave dark:bg-verde-valle/30 text-verde-valle dark:text-emerald-300 border border-verde-valle/20">SECPLAC</div>
            <div className="p-3 rounded-xl bg-verde-suave dark:bg-verde-valle/30 text-verde-valle dark:text-emerald-300 border border-verde-valle/20">DIDECO</div>
            <div className="p-3 rounded-xl bg-verde-suave dark:bg-verde-valle/30 text-verde-valle dark:text-emerald-300 border border-verde-valle/20">DOM</div>
            <div className="p-3 rounded-xl bg-verde-suave dark:bg-verde-valle/30 text-verde-valle dark:text-emerald-300 border border-verde-valle/20">DAF / Rentas</div>
          </div>
        </div>
      </section>

      {/* DIRECTORIO DE UNIDADES */}
      <section className="space-y-6" aria-labelledby="directorio-title">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 id="directorio-title" className="font-heading font-bold text-2xl md:text-3xl text-tinta dark:text-white">
              Directorio Telefónico y de Contacto Directo
            </h2>
            <p className="text-sm text-texto-secundario dark:text-gray-300">
              {SEED_UNIDADES.length} unidades municipales a tu servicio.
            </p>
          </div>
        </div>

        {/* Filter Panel */}
        <div className="bg-white dark:bg-[#15241C] p-6 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 shadow-card space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-texto-secundario" />
              <input
                type="text"
                placeholder="Buscar por unidad o responsable..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-lineas dark:border-verde-valle/40 bg-papel dark:bg-[#0F1713] text-tinta dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-verde-valle"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCat === cat
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

        {/* Unidades Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUnidades.map((u) => (
            <div
              key={u.id}
              className="bg-white dark:bg-[#15241C] p-6 rounded-2xl border border-lineas/80 dark:border-verde-valle/30 shadow-card hover:border-verde-valle transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-verde-suave dark:bg-verde-valle/40 text-verde-valle dark:text-emerald-300">
                    {u.categoria}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-tinta dark:text-white">
                  {u.nombre}
                </h3>

                <p className="text-xs font-bold text-verde-valle dark:text-emerald-400 flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-sol" />
                  <span>{u.responsable}</span>
                </p>

                <p className="text-xs text-texto-secundario dark:text-gray-300 line-clamp-3">
                  {u.descripcion}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-lineas/60 dark:border-verde-valle/20 space-y-2 text-xs text-texto-secundario dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-sol flex-shrink-0" />
                  <span className="font-semibold text-tinta dark:text-white">{u.telefono}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sol flex-shrink-0" />
                  <a href={`mailto:${u.correo}`} className="underline hover:text-verde-valle">{u.correo}</a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-sol flex-shrink-0 mt-0.5" />
                  <span className={u.direccion === 'PENDIENTE' ? 'text-amber-500 font-bold bg-amber-950/20 px-1.5 rounded' : ''}>
                    {u.direccion}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
