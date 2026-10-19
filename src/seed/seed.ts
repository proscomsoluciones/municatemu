import { SEED_TRAMITES, SEED_NOTICIAS, SEED_DOCUMENTOS, SEED_UNIDADES, GLOBAL_CONFIG } from '../data/seedData';

export async function runSeed() {
  console.log('==================================================');
  console.log('  SEMILLERO DE DATOS INICIALES - MUNICIPALIDAD DE CATEMU');
  console.log('==================================================');
  
  console.log(`[+] Sembrando ${SEED_TRAMITES.length} trámites (Permiso circulación, Patentes, RSH, etc.)...`);
  console.log(`[+] Sembrando ${SEED_NOTICIAS.length} noticias y subvenciones 2026...`);
  console.log(`[+] Sembrando ${SEED_DOCUMENTOS.length} documentos oficiales (PLADECO, Cuenta Pública, etc.)...`);
  console.log(`[+] Sembrando ${SEED_UNIDADES.length} unidades del directorio municipal...`);
  console.log(`[+] Configuración global cargada (Dirección y teléfono marcados como PENDIENTE).`);
  
  console.log('\n[SUCCESS] Semilla completada con éxito.');
  return {
    tramites: SEED_TRAMITES,
    noticias: SEED_NOTICIAS,
    documentos: SEED_DOCUMENTOS,
    unidades: SEED_UNIDADES,
    globalConfig: GLOBAL_CONFIG
  };
}

if (require.main === module) {
  runSeed();
}
