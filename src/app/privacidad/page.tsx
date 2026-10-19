import React from 'react';
import { Lock, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacidadPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-verde-valle dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <Lock className="w-4 h-4 text-sol" />
          <span>Cumplimiento Ley N° 21.719 de Protección de Datos Personales</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-tinta dark:text-white">
          Política de Privacidad y Tratamiento de Datos
        </h1>
        <p className="text-base text-texto-secundario dark:text-gray-300">
          En conformidad con la Ley N° 21.719 sobre Protección de Datos Personales y la Ley N° 21.663 de Ciberseguridad, la I. Municipalidad de Catemu garantiza el resguardo riguroso de la información de sus contribuyentes y vecinos.
        </p>
      </div>

      <div className="bg-white dark:bg-[#15241C] p-8 rounded-3xl border border-lineas/80 dark:border-verde-valle/30 shadow-card space-y-6 text-sm text-tinta dark:text-gray-200 leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-heading font-bold text-xl text-tinta dark:text-white">
            1. Recolección de Datos Personales
          </h2>
          <p>
            Los datos personales ingresados en nuestros formularios (tales como nombre, RUT, correo electrónico o teléfono) son recolectados únicamente para la finalidad específica de tramitar solicitudes, emitir certificados o responder consultas ciudadanas.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-xl text-tinta dark:text-white">
            2. Eliminación de Metadatos y Retiro de Registros
          </h2>
          <p>
            En cumplimiento con la normativa técnica municipal, los documentos PDF subidos al repositorio que contengan titularidad de datos personales (como roles de patentes o nóminas tributarias) cuentan con sanitización automática de metadatos y un programa estricto de retiro programado al vencer su periodo legal de exhibición.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading font-bold text-xl text-tinta dark:text-white">
            3. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
          </h2>
          <p>
            Todo ciudadano puede ejercer sus derechos de acceso, rectificación o eliminación de sus datos personales ingresando una solicitud en la Secretaría Municipal o a través de la Ventanilla Única de Atención.
          </p>
        </section>
      </div>
    </div>
  );
}
