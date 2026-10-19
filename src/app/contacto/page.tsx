'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GLOBAL_CONFIG } from '@/data/seedData';

export default function ContactoPage() {
  const [formData, setFormData] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setError('Por favor completa todos los campos requeridos (*).');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-verde-valle dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <Phone className="w-4 h-4 text-sol" />
          <span>Atención y Orientación Vecinal</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-tinta dark:text-white">
          Contacto y Ubicación de la I. Municipalidad de Catemu
        </h1>
        <p className="text-base text-texto-secundario dark:text-gray-300 max-w-3xl">
          Escríbenos directamente o consulta nuestros canales de atención para orientarte en tus trámites.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white dark:bg-[#15241C] p-8 rounded-3xl border border-lineas/80 dark:border-verde-valle/30 shadow-card space-y-6">
          <h2 className="font-heading font-bold text-2xl text-tinta dark:text-white">
            Envíanos un mensaje
          </h2>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-verde-suave dark:bg-verde-valle/30 border border-verde-valle text-tinta dark:text-white space-y-2">
              <div className="flex items-center gap-2 text-verde-valle dark:text-emerald-300 font-bold text-lg">
                <CheckCircle2 className="w-6 h-6 text-sol" />
                <span>¡Mensaje enviado con éxito!</span>
              </div>
              <p className="text-sm">
                Hemos recibido tu solicitud. Un funcionario te responderá al correo ingresado en un plazo máximo de 48 horas hábiles.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ nombre: '', email: '', asunto: '', mensaje: '' }); }}
                className="mt-4 px-4 py-2 bg-verde-valle text-white text-xs font-bold rounded-lg"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-100 text-red-800 rounded-lg text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label htmlFor="nombre" className="block text-xs font-bold text-tinta dark:text-white uppercase mb-1">
                  Nombre completo *
                </label>
                <input
                  id="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full p-3 rounded-xl border border-lineas dark:border-verde-valle/40 bg-papel dark:bg-[#0F1713] text-tinta dark:text-white text-sm focus:ring-2 focus:ring-verde-valle"
                  placeholder="Ej: María González"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-tinta dark:text-white uppercase mb-1">
                  Correo electrónico *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-xl border border-lineas dark:border-verde-valle/40 bg-papel dark:bg-[#0F1713] text-tinta dark:text-white text-sm focus:ring-2 focus:ring-verde-valle"
                  placeholder="ejemplo@correo.cl"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-xs font-bold text-tinta dark:text-white uppercase mb-1">
                  Asunto / Unidad de destino
                </label>
                <input
                  id="asunto"
                  type="text"
                  value={formData.asunto}
                  onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                  className="w-full p-3 rounded-xl border border-lineas dark:border-verde-valle/40 bg-papel dark:bg-[#0F1713] text-tinta dark:text-white text-sm focus:ring-2 focus:ring-verde-valle"
                  placeholder="Ej: Consulta sobre Permiso de Circulación"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-xs font-bold text-tinta dark:text-white uppercase mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full p-3 rounded-xl border border-lineas dark:border-verde-valle/40 bg-papel dark:bg-[#0F1713] text-tinta dark:text-white text-sm focus:ring-2 focus:ring-verde-valle"
                  placeholder="Escribe aquí tu consulta detallada..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-verde-valle hover:bg-verde-claro text-white font-bold text-sm flex items-center justify-center gap-2 shadow transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Consulta</span>
              </button>
            </form>
          )}
        </div>

        {/* Info & Map Side */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#15241C] p-8 rounded-3xl border border-lineas/80 dark:border-verde-valle/30 shadow-card space-y-4">
            <h2 className="font-heading font-bold text-xl text-tinta dark:text-white border-b border-lineas pb-3">
              Información Central
            </h2>

            <div className="space-y-4 text-sm text-tinta dark:text-gray-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sol flex-shrink-0 mt-1" />
                <div>
                  <span className="block font-bold">Dirección Central:</span>
                  <span className="text-amber-600 dark:text-amber-300 font-bold bg-amber-950/20 px-2 py-0.5 rounded text-xs">
                    {GLOBAL_CONFIG.direccion_central}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-sol flex-shrink-0 mt-1" />
                <div>
                  <span className="block font-bold">Horario de Atención Público:</span>
                  <span className="text-amber-600 dark:text-amber-300 font-bold bg-amber-950/20 px-2 py-0.5 rounded text-xs">
                    {GLOBAL_CONFIG.horario_atencion}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sol flex-shrink-0 mt-1" />
                <div>
                  <span className="block font-bold">Mesa Central:</span>
                  <span className="text-amber-600 dark:text-amber-300 font-bold bg-amber-950/20 px-2 py-0.5 rounded text-xs">
                    {GLOBAL_CONFIG.telefono_central}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sol flex-shrink-0 mt-1" />
                <div>
                  <span className="block font-bold">Correo Institucional:</span>
                  <a href={`mailto:${GLOBAL_CONFIG.correo_contacto}`} className="underline text-verde-valle dark:text-emerald-400">
                    {GLOBAL_CONFIG.correo_contacto}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Simulation */}
          <div className="bg-verde-valle/10 border border-lineas/80 dark:border-verde-valle/30 h-64 rounded-3xl overflow-hidden relative flex items-center justify-center p-6 text-center">
            <div className="space-y-2">
              <MapPin className="w-10 h-10 text-sol mx-auto animate-bounce" />
              <p className="font-heading font-bold text-lg text-tinta dark:text-white">
                Comuna de Catemu • Región de Valparaíso
              </p>
              <p className="text-xs text-texto-secundario dark:text-gray-300">
                Ubicación geográfica en el corazón del Valle del Aconcagua, Chile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
