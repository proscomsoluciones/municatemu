'use client';

import React, { useState } from 'react';
import { AlertTriangle, Info, X } from 'lucide-react';
import { GLOBAL_CONFIG } from '@/data/seedData';

export const TopBannerAlert: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const alerta = GLOBAL_CONFIG.alerta_emergencia;

  if (!alerta || !alerta.activa || !visible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso de Emergencia o Información Oficial"
      className="bg-sol/15 dark:bg-sol/20 border-b border-sol/30 text-tinta px-4 py-2.5 text-sm transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="p-1 rounded-full bg-sol text-tinta flex-shrink-0">
            {alerta.tipo === 'urgente' ? (
              <AlertTriangle className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Info className="w-4 h-4" aria-hidden="true" />
            )}
          </span>
          <p className="font-medium truncate">
            <strong className="font-bold mr-1.5">{alerta.titulo}:</strong>
            <span className="text-texto-secundario dark:text-gray-200">{alerta.mensaje}</span>
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="p-1 text-texto-secundario hover:text-tinta focus:outline-none focus:ring-2 focus:ring-sol rounded"
          aria-label="Cerrar aviso de información"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
