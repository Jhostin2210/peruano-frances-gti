// Dominio de Alcance · Validar el alcance: acta de aceptación de la revisión del Sprint 1 (formato del ALC-04).

import { c, firmas, kv, p, sec, tabla } from "../lib/bloques.mjs";
import { PROYECTO as P, R } from "../proyecto.mjs";
import { PAQUETES } from "../datos/requisitos.mjs";
import { DOC } from "./comunes.mjs";

const paquete = (id) => PAQUETES.find((x) => x.id === id);
const aceptado = c("Aceptado", "verde", { bold: true, align: "center" });

export const ALC06 = DOC({
  id: "ALC-06",
  titulo: "Acta de aceptación del Sprint 1",
  archivo: "ALC-06 Acta de aceptación del Sprint 1",
  carpeta: "03 - Alcance/3.4 Validar el alcance",
  dominio: "Alcance",
  area: "Monitoreo y control",
  proceso: "Validar el alcance",
  salida: "Entregables aceptados",
  version: "1.0",
  fecha: "07/11/2026",
  versiones: [["1.0", "07/11/2026", "Acta de la revisión del Sprint 1 del 06/11/2026.", P.director]],
  aprobacion: "Firmada por el Product Owner y el director del proyecto",
  resumen:
    "Deja constancia de la aceptación de los entregables del Sprint 1 (análisis y diseño) en la revisión del sprint, según el procedimiento de validación del alcance (ALC-04).",
  secciones: [
    sec("1. Datos de la revisión", [
      kv(
        ["Revisión", "Sprint 1 · Análisis y diseño (semanas 1 a 4)"],
        ["Fecha", "06/11/2026"],
        ["Acepta", `${R.helber}, Product Owner`],
        ["Presenta", "Equipo del proyecto"],
        ["Procedimiento", "Validación del alcance (ALC-04): inspección de cada entregable frente a su criterio de aceptación."],
      ),
    ]),
    sec("2. Entregables revisados", [
      tabla(
        ["Entregable", "Criterio de aceptación", "Evidencia presentada", "Resultado", "Observaciones"],
        [20, 26, 26, 12, 16],
        [
          [`Arquitectura del sistema (paquete ${paquete("1.0.4").id})`, paquete("1.0.4").criterio, "Documento de arquitectura en el repositorio del sistema.", aceptado, "—"],
          [`Lista de variables del modelo validada con docentes (paquete ${paquete("1.0.3").id})`, paquete("1.0.3").criterio, "Taller del 28/10/2026 con los 16 docentes y la directora; lista de asistencia y acuerdos.", aceptado, "—"],
        ],
        { titulo: "Entregables del Sprint 1" },
      ),
      p("Con estos entregables se cumple el hito 1 del cronograma: arquitectura validada y variables del modelo definidas."),
    ]),
    sec("3. Acuerdos y pendientes", [
      tabla(
        ["N.º", "Acuerdo", "Responsable", "Plazo"],
        [8, 56, 20, 16],
        [
          ["1", "Aprobar sin cambios la solicitud SC-08 (rediseño de la validación del modelo).", R.helber, c("Cumplido", "verde", { align: "center" })],
          ["2", "Iniciar el Sprint 2: integración y calidad de los datos (E-01).", R.equipo, "09/11/2026"],
          ["3", "Presentar el E-01 para su aceptación en la revisión del Sprint 2.", R.equipo, "04/12/2026"],
        ],
        { titulo: "Acuerdos" },
      ),
      p("Solicitudes de cambio derivadas: ninguna nueva."),
      firmas(
        { nombre: P.productOwner.split(",")[0], rol: "Product Owner — I.E.P. Peruano Francés", firma: "helber", fecha: "06/11/2026" },
        { nombre: P.director, rol: "Director del proyecto", firma: "jhostin", fecha: "06/11/2026" },
      ),
    ]),
  ],
});
