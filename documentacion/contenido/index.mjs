// Lista ordenada de documentos. El orden es el de las carpetas y el del índice (BASE-01).

import { GOB01, GOB02, GOB03 } from "./gobernanza-inicio.mjs";
import { GOB04, GOB05 } from "./gobernanza-plan.mjs";
import { GOB06, GOB07, GOB08, GOB10, GOB11, crearGOB09 } from "./gobernanza-ejecucion.mjs";
import { GOB12 } from "./acta-inicio.mjs";
import { INT01, INT02, INT04, INT05 } from "./interesados.mjs";
import { INT03, INT06, INT07 } from "./comunicaciones.mjs";
import { ALC01, ALC02, ALC03, ALC04 } from "./alcance.mjs";
import { ALC05 } from "./avance.mjs";
import { CRO01 } from "./cronograma.mjs";
import { ALC06 } from "./aceptacion.mjs";
import { REC01 } from "./recursos.mjs";
import { DOCS_GESTION_RECURSOS } from "./recursos-gestion.mjs";
import { ALC07, GOB13 } from "./sprint2.mjs";
import { DOCS_FINANZAS } from "./finanzas.mjs";
import { BASE_META, crearBASE01 } from "./base.mjs";

export { AREAS, DOMINIOS, PROCESOS } from "./procesos.mjs";

const antesDelInforme = [GOB01, GOB02, GOB03, GOB04, GOB05, GOB06, GOB07, GOB08];
const despuesDelInforme = [GOB10, GOB11, GOB12, INT01, INT02, INT04, INT05, INT03, INT06, INT07, ALC01, ALC02, ALC03, ALC04, ALC05, CRO01];

// El informe de desempeño cuenta los documentos emitidos, incluida la ficha.
// El informe N.º 1 se emitió antes del acta del Sprint 1 y del REC-01: no los cuenta.
const GOB09 = crearGOB09([BASE_META, ...antesDelInforme, ...despuesDelInforme]);
const conNuevos = despuesDelInforme.flatMap((d) => (d.id === "ALC-05" ? [d, ALC06, ALC07] : d.id === "GOB-12" ? [d, GOB13] : d.id === "CRO-01" ? [d, REC01, ...DOCS_GESTION_RECURSOS, ...DOCS_FINANZAS] : [d]));
const sinFicha = [...antesDelInforme, GOB09, ...conNuevos];

export const DOCUMENTOS = [crearBASE01(sinFicha), ...sinFicha];
