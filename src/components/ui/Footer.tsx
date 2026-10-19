import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Lock, 
  CheckCircle2 
} from 'lucide-react';
import { GLOBAL_CONFIG } from '@/data/seedData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#240825] text-gray-200 pt-12 pb-8 border-t border-[#5E1757]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Col 1: Identity */}
        <div>
          <div className="mb-4">
            <div className="bg-white rounded-2xl p-2.5 inline-block shadow-md mb-3 border border-purple-200/20">
              <Image
                src="/images/logo-catemu.png"
                alt="I. Municipalidad de Catemu - Valle hermoso de Aconcagua"
                width={190}
                height={140}
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-xl text-white tracking-wide">
                I. MUNICIPALIDAD DE CATEMU
              </h2>
              <p className="text-xs text-[#F6A623] font-serif italic">Valle hermoso de Aconcagua</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Portal institucional accesible orientado al servicio rápido y transparente de las vecinas y vecinos de Catemu.
          </p>
          <div className="flex items-center gap-2 text-xs text-purple-200 bg-[#5E1757]/40 px-3 py-2 rounded-xl border border-purple-400/20">
            <ShieldCheck className="w-4 h-4 text-[#F07D26]" />
            <span>Cumple WCAG 2.1 AA | Ley 21.663 & 21.719</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h3 className="font-heading font-semibold text-white text-base mb-4 border-b border-purple-900 pb-2">
            Trámites y Accesos Directos
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/tramites/permiso-de-circulacion" className="hover:text-[#F6A623] transition-colors flex items-center gap-1.5">
                <span>Permiso de Circulación 2026</span>
                <span className="text-[10px] bg-[#5E1757] text-white px-1.5 py-0.5 rounded">SEM</span>
              </Link>
            </li>
            <li>
              <Link href="/tramites/patentes-municipales" className="hover:text-[#F6A623] transition-colors flex items-center gap-1.5">
                <span>Patentes Municipales</span>
                <span className="text-[10px] bg-[#5E1757] text-white px-1.5 py-0.5 rounded">SEM</span>
              </Link>
            </li>
            <li>
              <Link href="/tramites/registro-social-de-hogares" className="hover:text-[#F6A623] transition-colors">
                Registro Social de Hogares
              </Link>
            </li>
            <li>
              <Link href="/transparencia" className="hover:text-[#F6A623] transition-colors">
                Portal de Transparencia Activa
              </Link>
            </li>
            <li>
              <Link href="/canales-oficiales" className="hover:text-[#F6A623] transition-colors text-[#F07D26] font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verificar Canales Oficiales</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Central Contact */}
        <div>
          <h3 className="font-heading font-semibold text-white text-base mb-4 border-b border-purple-900 pb-2">
            Contacto Central
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#F07D26] mt-1 flex-shrink-0" />
              <div>
                <span className="block font-medium text-white">Dirección:</span>
                <span className="text-amber-300 font-medium bg-amber-950/60 px-2 py-0.5 rounded text-xs">
                  {GLOBAL_CONFIG.direccion_central}
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#F07D26] mt-1 flex-shrink-0" />
              <div>
                <span className="block font-medium text-white">Horario de Atención:</span>
                <span className="text-amber-300 font-medium bg-amber-950/60 px-2 py-0.5 rounded text-xs">
                  {GLOBAL_CONFIG.horario_atencion}
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#F07D26] mt-1 flex-shrink-0" />
              <div>
                <span className="block font-medium text-white">Teléfono Central:</span>
                <span className="text-amber-300 font-medium bg-amber-950/60 px-2 py-0.5 rounded text-xs">
                  {GLOBAL_CONFIG.telefono_central}
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#F07D26] mt-1 flex-shrink-0" />
              <div>
                <span className="block font-medium text-white">Correo Electrónico:</span>
                <a href={`mailto:${GLOBAL_CONFIG.correo_contacto}`} className="hover:text-[#F6A623] underline">
                  {GLOBAL_CONFIG.correo_contacto}
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Col 4: Safety & Security */}
        <div>
          <h3 className="font-heading font-semibold text-white text-base mb-4 border-b border-purple-900 pb-2">
            Ciberseguridad y Leyes
          </h3>
          <p className="text-xs text-gray-300 mb-4 leading-relaxed">
            Sitio web auditado bajo la Ley 21.663 de Ciberseguridad e Infraestructura Crítica y Ley 21.719 sobre Protección de Datos Personales.
          </p>
          <div className="space-y-2 text-xs">
            <Link href="/accesibilidad" className="block text-gray-300 hover:text-white underline">
              Declaración de Accesibilidad (WCAG 2.1 AA)
            </Link>
            <Link href="/privacidad" className="block text-gray-300 hover:text-white underline">
              Política de Privacidad y Datos Personales
            </Link>
            <a 
              href="/.well-known/security.txt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-[#F07D26] hover:text-[#F6A623] underline flex items-center gap-1"
            >
              <Lock className="w-3 h-3" />
              <span>security.txt (Reportar Vulnerabilidad)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="max-w-7xl mx-auto px-4 pt-6 border-t border-purple-950 text-xs text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p>© {new Date().getFullYear()} Ilustre Municipalidad de Catemu. Todos los derechos reservados.</p>
        <p className="text-gray-400">
          Diseñado bajo la Norma Técnica de Sitios Web del Estado (DS N°1/2015).
        </p>
      </div>
    </footer>
  );
};
