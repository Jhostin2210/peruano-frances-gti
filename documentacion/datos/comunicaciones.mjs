// Comunicaciones del proyecto: lo que el plan compromete y lo que efectivamente se comunica.
// Alimenta el plan (INT-03), el registro (INT-06), el informe de monitoreo (INT-07) y el tablero del blog.
//
// Para registrar una comunicación: agregar una fila a COMUNICACIONES o cambiar su estado a "Realizada"
// con su constancia, y volver a generar (node documentacion/generar.mjs).

import { R } from "../proyecto.mjs";
import { SPRINTS } from "./calendario.mjs";

// Fecha de corte de los documentos emitidos.
export const CORTE = "2026-10-17";

// ───────────────────────── Matriz del plan (INT-03) ─────────────────────────
export const PLAN_COMUNICACIONES = [
  { id: "PC-01", que: "Informe de desempeño del proyecto", para: "Patrocinadora, Product Owner y docente asesor", emisor: R.jhostin, canal: "Documento PDF que el Product Owner entrega a la Dirección", frecuencia: "Al cierre de cada sprint", constancia: "Informe (GOB-09 y siguientes)" },
  { id: "PC-02", que: "Demostración de avances (revisión del sprint)", para: "Product Owner; la Dirección da su conformidad por su intermedio", emisor: R.equipo, canal: "Demostración al Product Owner", frecuencia: "Cada cuatro semanas", constancia: "Acta de aceptación (ALC-04)" },
  { id: "PC-03", que: "Coordinación del trabajo diario", para: "Equipo del proyecto", emisor: R.jhostin, canal: "Reunión breve y grupo de mensajería del equipo", frecuencia: "Diaria, 15 minutos", constancia: "Tablero de tareas" },
  { id: "PC-04", que: "Pedidos y entregas de datos", para: "Gestora de Cubicol y encargado de TI", emisor: `${R.jadira}, por medio del Product Owner`, canal: "Pedido escrito que el Product Owner entrega en el colegio", frecuencia: "Semanal en los Sprints 1 a 3", constancia: "Registro de entrega de datos" },
  { id: "PC-05", que: "Validación de variables y del tablero", para: "Docentes tutores", emisor: `${R.helber} y ${R.carlos}`, canal: "Taller presencial", frecuencia: "Semanas 3 y 15, y piloto", constancia: "Lista de asistencia y acuerdos" },
  { id: "PC-06", que: "Avance académico del proyecto", para: "Docente asesor", emisor: R.equipo, canal: "Clase y blog del proyecto", frecuencia: "Semanal", constancia: "Blog actualizado" },
  { id: "PC-07", que: "Aviso sobre el proyecto y el uso de los datos", para: "Padres y apoderados", emisor: "Dirección, por medio de los tutores; redacta el equipo", canal: "Mensaje de WhatsApp del tutor de cada aula", frecuencia: "Antes de cargar datos reales y al iniciar el piloto", constancia: "Texto del mensaje y confirmación de envío de cada tutor" },
  { id: "PC-08", que: "Solicitudes de cambio y su decisión", para: "Solicitante, patrocinadora y Product Owner", emisor: R.carlos, canal: "Reunión y documento", frecuencia: "Cuando ocurre", constancia: "Registro de cambios (GOB-10)" },
  { id: "PC-09", que: "Incidentes de prioridad alta", para: "Product Owner y afectados", emisor: R.jhostin, canal: "Llamada o mensaje directo", frecuencia: "En menos de 24 horas", constancia: "Registro de incidentes (GOB-06)" },
  { id: "PC-10", que: "Capacitación y manuales", para: "Tutores, coordinación y encargado de TI", emisor: R.jhostin, canal: "Sesión presencial de 2 horas y manuales", frecuencia: "Semana 23", constancia: "Lista de asistencia" },
  { id: "PC-12", que: "Coordinación con el colegio: pedidos, observaciones e indicaciones", para: "Dirección, coordinación y docentes", emisor: `${R.helber} (Product Owner)`, canal: "Comunicación directa del Product Owner en el colegio y grupo del equipo", frecuencia: "Cuando haga falta; reemplaza a las entrevistas", constancia: "Mensaje en el grupo del equipo y registro de comunicaciones" },
  { id: "PC-11", que: "Cierre del proyecto", para: "Todos los interesados del colegio y docente asesor", emisor: R.jhostin, canal: "Reunión de cierre", frecuencia: "23/04/2027", constancia: "Acta de cierre e informe final" },
];

// ───────────────────────── Registro de comunicaciones (INT-06) ─────────────────────────
// fecha: día en que ocurrió o fecha límite si está programada. cuando: texto si la fecha es un rango.
// interesados: códigos del registro de interesados (INT-01) que participan. sprint 0: antes del inicio.
const revision = (n) => SPRINTS[n - 1].revision;
const revisionSprint = (n, entregable) => ({
  fecha: revision(n),
  tipo: "Revisión de sprint",
  asunto: `Revisión del Sprint ${n} e informe de desempeño: ${entregable}`,
  emisor: R.equipo,
  interesados: ["I-01", "I-12", "I-13"],
  canal: "Demostración al Product Owner; conformidad de la Dirección por su intermedio",
  sprint: n,
  estado: "Programada",
  constancia: "Acta de aceptación e informe de desempeño",
  plan: "PC-01 y PC-02",
});

export const COMUNICACIONES = [
  // Antes del inicio del proyecto
  { fecha: "2026-04-24", tipo: "Entrevista", asunto: "Entrevista semiestructurada de diagnóstico a la Promotora Directora", emisor: R.equipo, interesados: ["I-01"], canal: "Reunión presencial", sprint: 0, estado: "Realizada", constancia: "Transcripción, video y fotografías", plan: "—" },
  { fecha: "2026-04-24", tipo: "Solicitud", asunto: "Pedido y recojo del organigrama y del formato de reporte de incidencias", emisor: R.equipo, interesados: ["I-01"], canal: "Reunión presencial", sprint: 0, estado: "Realizada", constancia: "Fotografías de los documentos", plan: "—" },
  { fecha: "2026-05-15", tipo: "Encuesta", asunto: "Encuesta sobre seguimiento y rendimiento académico: 6 respuestas de 16 docentes", emisor: R.equipo, interesados: ["I-05"], canal: "Formulario en línea", sprint: 0, estado: "Realizada", constancia: "Hoja de respuestas y gráficos", plan: "—" },
  { fecha: "2026-07-05", tipo: "Entrega de datos", asunto: "Recepción de registros de notas de marzo, abril y primer trimestre de 2026", emisor: "Docentes del colegio", interesados: ["I-05"], canal: "Reunión presencial", sprint: 0, estado: "Realizada", constancia: "Hoja de cálculo y fotografías, en custodia del equipo", plan: "PC-04" },
  { fecha: "2026-10-10", tipo: "Reunión", asunto: "Sesión de trabajo del equipo: análisis de interesados y emisión de los documentos de gestión", emisor: R.jhostin, interesados: ["I-12"], canal: "Reunión del equipo", sprint: 0, estado: "Realizada", constancia: "Documentos INT-01 e INT-02", plan: "PC-03" },
  { fecha: "2026-10-10", tipo: "Publicación", asunto: "Publicación del blog del proyecto con el equipo y el periodo actuales", emisor: R.equipo, interesados: ["I-13"], canal: "Blog del proyecto", sprint: 0, estado: "Realizada", constancia: "Blog en línea", plan: "PC-06" },

  // Sprint 1
  { fecha: "2026-10-12", tipo: "Reunión", asunto: "Reunión de inicio: acta de constitución, calendario, Product Owner, tratamiento de datos y canal de comunicación con el colegio", emisor: R.jhostin, interesados: ["I-01", "I-03", "I-12"], canal: "Reunión virtual", sprint: 1, estado: "Realizada", constancia: "Acta de la reunión de inicio (GOB-12) y acta de constitución firmada (GOB-02)", plan: "PC-01" },
  { fecha: "2026-10-17", tipo: "Avance académico", asunto: "Avance semanal al docente asesor: gestión de las comunicaciones y validación del primer entregable del sistema según la EDT (E-01)", emisor: R.equipo, interesados: ["I-13"], canal: "Clase y blog del proyecto", sprint: 1, estado: "Programada", constancia: "Blog actualizado y observaciones del docente", plan: "PC-06" },
  { fecha: "2026-10-20", tipo: "Solicitud", asunto: "Pedido de las exportaciones de notas de Cubicol, a través del Product Owner", emisor: `${R.jadira} y ${R.helber}`, interesados: ["I-07", "I-08"], canal: "Pedido escrito entregado por el Product Owner", sprint: 1, estado: "Programada", constancia: "Pedido escrito y respuesta del colegio", plan: "PC-04 y PC-12" },
  { fecha: "2026-10-24", tipo: "Avance académico", asunto: "Avance semanal al docente asesor", emisor: R.equipo, interesados: ["I-13"], canal: "Clase y blog del proyecto", sprint: 1, estado: "Programada", constancia: "Blog actualizado", plan: "PC-06" },
  { fecha: "2026-10-28", tipo: "Taller", asunto: "Taller de validación de las variables del modelo, organizado por el Product Owner", emisor: `${R.helber} y ${R.carlos}`, interesados: ["I-05", "I-06"], canal: "Taller presencial en el colegio", sprint: 1, estado: "Programada", constancia: "Lista de asistencia y acuerdos", plan: "PC-05" },
  { fecha: "2026-10-31", tipo: "Avance académico", asunto: "Avance semanal al docente asesor", emisor: R.equipo, interesados: ["I-13"], canal: "Clase y blog del proyecto", sprint: 1, estado: "Programada", constancia: "Blog actualizado", plan: "PC-06" },
  { fecha: "2026-11-03", tipo: "Consulta", asunto: "Consulta sobre el registro de incidencias, a través del Product Owner", emisor: `${R.jadira} y ${R.helber}`, interesados: ["I-04"], canal: "Consulta del Product Owner en el colegio", sprint: 1, estado: "Programada", constancia: "Nota de la consulta en el grupo del equipo", plan: "PC-12" },
  { fecha: "2026-11-06", tipo: "Comunicado", asunto: "Aviso a los apoderados sobre el proyecto y el uso de los datos (fecha tentativa)", emisor: "Dirección, por medio de los tutores; redacta el equipo", interesados: ["I-11", "I-05"], canal: "Mensaje de WhatsApp del tutor de cada aula", sprint: 1, estado: "Programada", constancia: "Texto del mensaje y confirmación de envío de cada tutor", plan: "PC-07" },
  revisionSprint(1, "arquitectura y variables del modelo"),

  // Sprints 2 a 6
  revisionSprint(2, "base de datos centralizada"),
  revisionSprint(3, "modelo validado"),
  { fecha: "2027-01-20", tipo: "Convocatoria", asunto: "Convocatoria a tres docentes tutores para el piloto de marzo", emisor: `${R.helber} (Product Owner)`, interesados: ["I-05", "I-03"], canal: "Convocatoria del Product Owner en el colegio", sprint: 4, estado: "Programada", constancia: "Lista de participantes confirmados", plan: "PC-05" },
  revisionSprint(4, "sistema integrado con alertas y tablero"),
  revisionSprint(5, "resultado de las pruebas y del piloto"),
  { fecha: "2027-04-14", tipo: "Capacitación", asunto: "Capacitación de dos horas a tutores y coordinadores, y entrega de manuales", emisor: R.jhostin, interesados: ["I-05", "I-03", "I-08"], canal: "Taller presencial", sprint: 6, estado: "Programada", constancia: "Lista de asistencia", plan: "PC-10" },
  { fecha: SPRINTS[5].fin, tipo: "Reunión", asunto: "Reunión de cierre del proyecto e informe final", emisor: R.jhostin, interesados: ["I-01", "I-02", "I-03", "I-13"], canal: "Reunión presencial", sprint: 6, estado: "Programada", constancia: "Acta de cierre e informe final", plan: "PC-11" },
]
  .sort((a, b) => a.fecha.localeCompare(b.fecha) || a.sprint - b.sprint)
  .map((x, i) => ({ id: `C-${String(i + 1).padStart(2, "0")}`, cuando: "", ...x }));

// Estado de una comunicación a una fecha. Cuando pasa la fecha de una programada, queda «por confirmar»
// durante DIAS_PARA_CONFIRMAR días (tiempo para registrarla con su constancia); después cuenta como vencida.
export const DIAS_PARA_CONFIRMAR = 7;
const diasEntre = (desde, hasta) => Math.round((Date.parse(hasta) - Date.parse(desde)) / 86400000);
export const estadoAl = (c, corte = CORTE) =>
  c.estado === "Realizada" ? "Realizada" : c.fecha >= corte ? "Programada" : diasEntre(c.fecha, corte) <= DIAS_PARA_CONFIRMAR ? "Por confirmar" : "Vencida";

export function resumenComunicaciones(corte = CORTE) {
  const por = (e) => COMUNICACIONES.filter((c) => estadoAl(c, corte) === e);
  const realizadas = por("Realizada");
  const idsDe = (lista) => new Set(lista.flatMap((c) => c.interesados));
  return {
    total: COMUNICACIONES.length,
    realizadas: realizadas.length,
    programadas: por("Programada").length,
    vencidas: por("Vencida").length,
    conConstancia: realizadas.filter((c) => c.constancia && c.constancia !== "—").length,
    contactados: [...idsDe(realizadas)].sort(),
    previstos: [...idsDe(COMUNICACIONES)].sort(),
  };
}
