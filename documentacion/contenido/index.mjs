// Lista ordenada de documentos. El orden es el de las carpetas y el del índice (BASE-01).

import { GOB01, GOB02, GOB03 } from "./gobernanza-inicio.mjs";
import { GOB04, GOB05 } from "./gobernanza-plan.mjs";
import { GOB06, GOB07, GOB08, GOB10, GOB11, crearGOB09 } from "./gobernanza-ejecucion.mjs";
import { INT01, INT02, INT04, INT05 } from "./interesados.mjs";
import { INT03, INT06, INT07 } from "./comunicaciones.mjs";
import { ALC01, ALC02, ALC03, ALC04 } from "./alcance.mjs";
import { CRO01 } from "./cronograma.mjs";
import { BASE_META, crearBASE01 } from "./base.mjs";

export { AREAS, DOMINIOS, PROCESOS } from "./procesos.mjs";

const antesDelInforme = [GOB01, GOB02, GOB03, GOB04, GOB05, GOB06, GOB07, GOB08];
const despuesDelInforme = [GOB10, GOB11, INT01, INT02, INT04, INT05, INT03, INT06, INT07, ALC01, ALC02, ALC03, ALC04, CRO01];

// El informe de desempeño cuenta los documentos emitidos, incluida la ficha.
const GOB09 = crearGOB09([BASE_META, ...antesDelInforme, ...despuesDelInforme]);
const sinFicha = [...antesDelInforme, GOB09, ...despuesDelInforme];

export const DOCUMENTOS = [crearBASE01(sinFicha), ...sinFicha];
