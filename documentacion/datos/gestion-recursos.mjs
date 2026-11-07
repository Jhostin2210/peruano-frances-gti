// Dominio de Recursos: planificar la gestión (REC-02 y REC-03), adquirir (REC-04), liderar al equipo (REC-05)
// y monitorear y controlar los recursos (REC-06). Lo que se calcula sale del cronograma; lo demás son hechos
// registrados del proyecto al corte del 07/11/2026.

import { R } from "../proyecto.mjs";
import { ACTIVIDADES } from "./actividades.mjs";
import { FERIADOS, RECESO, SPRINTS, aFecha, aIso, fmt, lunesDeSemana, programar, viernesDeSemana } from "./calendario.mjs";
import { COMUNICACIONES, estadoAl } from "./comunicaciones.mjs";
import { ACTIVIDADES_REALIZADAS } from "./avance.mjs";
import { CAMBIOS, INCIDENTES } from "./registros.mjs";
import { COMPONENTES, PAQUETES } from "./requisitos.mjs";
import { DEDICACION, EQUIPO, HORAS_DAILY, HORAS_DIA, recursosDe } from "./recursos.mjs";

export const CORTE_RECURSOS = "2026-11-07";
const r1 = (n) => Math.round(n * 10) / 10;
const nombre = (completo) => completo.split(" ")[0];

// ───────────────────────── Planificar: organigrama, roles y RACI ─────────────────────────

// Organigrama del proyecto (gráfico jerárquico). Lo dibujan generar-figuras.mjs y el blog.
export const ORGANIGRAMA = {
  raiz: { nombre: "Promotora Directora", detalle: "Patrocinadora · I.E.P. Peruano Francés" },
  hijos: [
    { id: "", nombre: "Product Owner", detalle: `${R.helber} · docente del colegio y canal único con la institución`, hijos: [
      { id: "", nombre: "Coordinación académica", detalle: "Plan de capacitación y piloto" },
      { id: "", nombre: "Docentes tutores", detalle: "Variables del modelo, pruebas y piloto" },
      { id: "", nombre: "Gestora de Cubicol y encargado de TI", detalle: "Exportaciones de notas y red del colegio" },
    ] },
    { id: "", nombre: "Director del proyecto y Scrum Master", detalle: R.jhostin, hijos: [
      { id: "", nombre: "Modelo de Machine Learning", detalle: R.helber },
      { id: "", nombre: "Datos, alertas y despliegue", detalle: R.jadira },
      { id: "", nombre: "Tablero web y control de cambios", detalle: R.carlos },
    ] },
  ],
};

// Fichas de rol (formato orientado al texto: rol, responsabilidades, autoridad y competencias).
export const ROLES_EQUIPO = [
  {
    persona: R.jhostin,
    rol: "Director del proyecto y Scrum Master",
    responsabilidades: ["Planificar y mantener las líneas base y los documentos de gestión", "Facilitar la reunión diaria, la revisión y la retrospectiva", "Quitar impedimentos y mantener la relación con el docente del curso"],
    autoridad: "Asigna el trabajo de gestión, aprueba los informes y propone los cambios a las líneas base (GOB-10).",
    competencias: "Gestión de proyectos (PMBOK y Scrum), MS Project, comunicación.",
  },
  {
    persona: R.helber,
    rol: "Product Owner y responsable del modelo de Machine Learning",
    responsabilidades: ["Ordenar el trabajo de cada sprint y aceptar los entregables", "Ser el canal único con el colegio (SC-11)", "Entrenar y validar el modelo predictivo"],
    autoridad: "Decide prioridades y acepta o rechaza los entregables; decide las solicitudes de cambio del producto.",
    competencias: "Conocimiento del colegio y de sus docentes, Python y scikit-learn.",
  },
  {
    persona: R.jadira,
    rol: "Datos, alertas y despliegue",
    responsabilidades: ["Integrar y limpiar las notas de Cubicol (E-01)", "Construir el motor de alertas", "Desplegar el sistema en la nube"],
    autoridad: "Decide el diseño técnico de los datos y del despliegue dentro de la arquitectura aprobada.",
    competencias: "Bases de datos, ETL, FastAPI y servicios en la nube.",
  },
  {
    persona: R.carlos,
    rol: "Tablero web y control de cambios",
    responsabilidades: ["Diseñar y desarrollar el tablero del docente", "Llevar las actas y el registro de cambios", "Redactar el manual de usuario"],
    autoridad: "Decide el diseño de la interfaz dentro de los requisitos; mantiene el registro de cambios.",
    competencias: "React, diseño de interfaces y documentación.",
  },
];

const COLEGIO = ["Dirección del colegio", "Coordinación académica", "Docentes tutores", "Gestora de Cubicol"];
export const RACI_COLUMNAS = [...EQUIPO.map(nombre), "Dirección", "Coordinación", "Docentes", "Gestora de Cubicol"];

// Matriz RACI por paquete de la EDT. Reglas: R es el responsable del paquete (en los paquetes de todo el equipo,
// el director); A es el Product Owner en los paquetes del producto y el director en los de gestión (1.1);
// C son los demás que trabajan en sus actividades; I, la Dirección en los paquetes del producto y la
// coordinación y los docentes en alertas, tablero e implantación.
export function matrizRaci() {
  return PAQUETES.map((p) => {
    const acts = ACTIVIDADES.filter((a) => a.paquete === p.id);
    const quienes = new Set(acts.flatMap((a) => recursosDe(a.responsable)));
    const r = p.responsable === "Equipo del proyecto" ? R.jhostin : p.responsable;
    const a = p.id.startsWith("1.1.") ? R.jhostin : R.helber;
    const fila = {};
    for (const persona of EQUIPO) {
      const letras = [];
      if (persona === r) letras.push("R");
      if (persona === a) letras.push("A");
      if (!letras.length && quienes.has(persona)) letras.push("C");
      fila[nombre(persona)] = letras.join("/");
    }
    const producto = !p.id.startsWith("1.1.");
    const usuarios = /^1\.(4|5)\./.test(p.id);
    fila["Dirección"] = quienes.has("Dirección del colegio") ? "C" : producto ? "I" : "";
    fila["Coordinación"] = quienes.has("Coordinación académica") ? "C" : usuarios ? "I" : "";
    fila["Docentes"] = quienes.has("Docentes tutores") ? "C" : usuarios ? "I" : "";
    fila["Gestora de Cubicol"] = p.id === "1.2.1" ? "C" : "";
    const componente = COMPONENTES.find((c) => p.id.startsWith(`${c.id}.`));
    return { id: p.id, nombre: p.nombre, componente: componente?.nombre ?? "", fila };
  });
}

// Análisis FODA del equipo (herramienta del proceso de planificar la gestión de los recursos).
export const FODA = {
  fortalezas: [
    "El Product Owner es docente del colegio: conoce a los docentes y los datos, y acorta las consultas.",
    "Habilidades complementarias: gestión, Machine Learning, datos y desarrollo web.",
    "Los documentos de gestión salen de una fuente única y se actualizan sin contradicciones.",
  ],
  debilidades: [
    "Dedicación parcial: los cuatro integrantes son estudiantes con otros cursos.",
    "Carga desigual: hay integrantes con más horas que las disponibles en los Sprints 2, 3 y 5 (REC-01).",
    "Todo el contacto con el colegio depende de una sola persona.",
  ],
  oportunidades: [
    "Planes gratuitos en la nube y librerías libres de Machine Learning.",
    "Asistentes de inteligencia artificial para documentar, calcular y revisar código.",
    "Interés de la Dirección y de los docentes: el taller del 28/10/2026 reunió a los 16 docentes y a la directora.",
  ],
  amenazas: [
    "Los datos dependen de exportaciones de Cubicol que maneja un tercero.",
    "Las vacaciones escolares (diciembre a febrero) cortan las actividades con docentes.",
    "Límites de los planes gratuitos: la API tarda en responder la primera vez.",
  ],
  estrategias: [
    "Usar el conocimiento del Product Owner para destrabar los pedidos al colegio, pero dejar cada pedido por escrito con fecha (fortaleza frente a amenaza).",
    "Nivelar la carga en la planificación de cada sprint y redistribuir actividades entre integrantes con habilidades afines (debilidad frente a oportunidad).",
  ],
};

// Teoría organizacional y estilos de liderazgo aplicados.
export const LIDERAZGO = [
  { estilo: "Líder servidor", uso: "Estilo principal del Scrum Master: facilita, quita impedimentos y protege el tiempo del equipo." },
  { estilo: "Transformacional", uso: "En las revisiones de sprint: se vuelve al propósito del proyecto (alertar a tiempo a los tutores) para motivar." },
  { estilo: "Transaccional", uso: "Solo para lo pactado en el acta del equipo: plazos, avisos con anticipación y uso de los repositorios." },
];

// ───────────────────────── Adquirir: asignaciones, calendario e histograma ─────────────────────────

const SEMANAS = Array.from({ length: 24 }, (_, i) => i + 1);
const esHabil = (d) => d.getUTCDay() !== 0 && d.getUTCDay() !== 6 && !FERIADOS.some((f) => f.fecha === aIso(d));
const diasDeSemana = (k) => {
  const dias = [];
  for (let d = lunesDeSemana(k); d <= viernesDeSemana(k); d = new Date(d.getTime() + 86400000)) if (esHabil(d)) dias.push(aIso(d));
  return dias;
};

// Reasignación que propone la solicitud SC-12 (actividad → nuevo responsable).
export const REASIGNACION_SC12 = { "A-2.1.1.1": R.helber, "A-2.2.1.1": R.carlos };

// Horas por integrante y semana: 8 h × 50 % por cada día hábil de cada actividad a su cargo, más la reunión diaria.
export function histograma(reasignacion = {}) {
  const prog = programar();
  const semanas = SEMANAS.map((k) => ({ n: k, dias: diasDeSemana(k), inicio: aIso(lunesDeSemana(k)) }));
  const horas = Object.fromEntries(EQUIPO.map((p) => [p, SEMANAS.map(() => 0)]));
  for (const a of prog) {
    const responsables = recursosDe(reasignacion[a.id] ?? a.responsable).filter((x) => EQUIPO.includes(x));
    semanas.forEach((s, i) => {
      const dentro = s.dias.filter((d) => d >= aIso(a.inicio) && d <= aIso(a.fin)).length;
      if (!dentro) return;
      if (a.continua) EQUIPO.forEach((p) => (horas[p][i] += dentro * HORAS_DAILY));
      else responsables.forEach((p) => (horas[p][i] += dentro * HORAS_DIA * DEDICACION));
    });
  }
  return {
    semanas: semanas.map((s) => ({ n: s.n, inicio: s.inicio, sprint: SPRINTS.find((sp) => s.n >= sp.semanas[0] && s.n <= sp.semanas[1]).n, capacidad: s.dias.length * HORAS_DIA * DEDICACION })),
    integrantes: EQUIPO.map((p) => ({ nombre: p, horas: horas[p].map(r1) })),
  };
}

// Semanas en que un integrante supera lo disponible.
export const semanasExcedidas = (h) =>
  h.integrantes.flatMap((t) => t.horas.map((x, i) => ({ nombre: t.nombre, semana: i + 1, horas: x, capacidad: h.semanas[i].capacidad })).filter((x) => x.horas > x.capacidad));

// Horas de un integrante en un sprint (suma de sus semanas).
export const horasEnSprint = (h, persona, sprint) =>
  r1(h.integrantes.find((t) => t.nombre === persona).horas.reduce((s, x, i) => s + (h.semanas[i].sprint === sprint ? x : 0), 0));

// Asignaciones del equipo del proyecto (preasignación: el equipo lo forma el curso).
export function asignacionesEquipo() {
  return EQUIPO.map((p) => ({
    persona: p,
    rol: ROLES_EQUIPO.find((x) => x.persona === p).rol,
    paquetes: PAQUETES.filter((x) => x.responsable === p).map((x) => x.id),
    desde: "12/10/2026",
    hasta: "23/04/2027",
    forma: p === R.helber ? "Preasignado por el curso; designado Product Owner en la reunión de inicio (12/10/2026)" : "Preasignado por el curso (SC-01)",
  }));
}

// Asignaciones de recursos físicos y virtuales: quién lo provee y su estado al corte.
export const ASIGNACIONES_FISICAS = [
  { recurso: "Laptops del equipo", rbs: "2.1.1", provee: "Cada integrante", responsable: "Cada integrante", necesita: "Todo el proyecto", estado: "En uso", real: "Las 4 en uso desde el 12/10/2026", libera: "Al cierre" },
  { recurso: "Proyector o pantalla del colegio", rbs: "2.1.1", provee: "Colegio", responsable: R.helber, necesita: "Sprints 5 y 6 (piloto y capacitación)", estado: "Por pedir", real: "Se pide a través del Product Owner una semana antes de usarlo", libera: "Al terminar cada sesión" },
  { recurso: "Python, scikit-learn, FastAPI, React y Vite", rbs: "2.1.2", provee: "Software libre", responsable: R.jadira, necesita: "Sprints 2 a 6", estado: "En uso", real: "En uso en el repositorio del sistema", libera: "No aplica" },
  { recurso: "MS Project", rbs: "2.1.2", provee: "Universidad (laboratorio) o licencia de estudiante", responsable: R.jhostin, necesita: "Cada vez que se actualiza el cronograma", estado: "Sin obtener", real: "El equipo no tiene un equipo con licencia; el cronograma se generó como archivo XML de MS Project", libera: "No aplica" },
  { recurso: "Vercel (página web)", rbs: "2.1.3", provee: "Plan gratuito", responsable: R.jadira, necesita: "Desde el Sprint 2", estado: "En uso", real: "Página del sistema y blog publicados desde octubre de 2026", libera: "Se transfiere al colegio al cierre" },
  { recurso: "Render (API)", rbs: "2.1.3", provee: "Plan gratuito", responsable: R.jadira, necesita: "Desde el Sprint 2", estado: "En uso", real: "API publicada; en el plan gratuito tarda cerca de un minuto en responder la primera vez", libera: "Se transfiere al colegio al cierre" },
  { recurso: "GitHub y GitHub Actions", rbs: "2.1.3", provee: "Plan gratuito", responsable: R.jhostin, necesita: "Todo el proyecto", estado: "En uso", real: "Dos repositorios y la validación nocturna de datos en funcionamiento", libera: "Se transfiere al colegio al cierre" },
  { recurso: "Google Drive", rbs: "2.1.3", provee: "Plan gratuito", responsable: R.jhostin, necesita: "Todo el proyecto", estado: "En uso", real: "Carpeta compartida con los documentos de gestión en Word", libera: "Al cierre" },
  { recurso: "Base de datos gestionada en la nube", rbs: "2.1.3", provee: "Plan gratuito", responsable: R.jadira, necesita: "Sprint 6", estado: "Aún no se necesita", real: "Los datos reales se trabajan en local hasta el Sprint 6", libera: "Se transfiere al colegio al cierre" },
  { recurso: "Servicio de envío de correo", rbs: "2.1.3", provee: "Plan gratuito", responsable: R.jadira, necesita: "Sprint 4", estado: "Aún no se necesita", real: "Depende de la solicitud SC-09, en evaluación", libera: "Se transfiere al colegio al cierre" },
  { recurso: "Conexión a internet", rbs: "2.1.4", provee: "Hogares del equipo y colegio", responsable: "Cada integrante", necesita: "Todo el proyecto", estado: "En uso", real: "En uso para el trabajo remoto", libera: "No aplica" },
  { recurso: "Aula o laboratorio del colegio", rbs: "2.2.1", provee: "Colegio", responsable: R.helber, necesita: "Sprint 6 (capacitación, 2 horas)", estado: "Por pedir", real: "Se reserva a través del Product Owner en el Sprint 5", libera: "Al terminar la capacitación" },
];

// Calendario de recursos por sprint: días hábiles, horas disponibles y disponibilidad del colegio.
export function calendarioRecursos() {
  const h = histograma();
  return SPRINTS.map((sp) => {
    const semanas = h.semanas.filter((s) => s.sprint === sp.n);
    const feriados = FERIADOS.filter((f) => f.fecha >= sp.inicio && f.fecha <= sp.fin).map((f) => `${fmt(aFecha(f.fecha))} ${f.nombre}`);
    return {
      sprint: sp.n,
      nombre: sp.nombre,
      fechas: `${fmt(aFecha(sp.inicio))} al ${fmt(aFecha(sp.fin))}`,
      dias: semanas.reduce((s, x) => s + x.capacidad / (HORAS_DIA * DEDICACION), 0),
      horasPorIntegrante: semanas.reduce((s, x) => s + x.capacidad, 0),
      feriados,
      colegio: sp.n <= 2 ? "Docentes disponibles (año escolar 2026)" : sp.n === 3 ? "Cierre del año escolar: disponibilidad limitada" : sp.n === 4 ? "Vacaciones escolares: solo el Product Owner" : "Docentes disponibles (año escolar 2027)",
    };
  });
}
export const DISPONIBILIDAD = [
  "Equipo: lunes a viernes, medio día hábil (50 %) por integrante; los sábados son de clase del curso y no se programa trabajo.",
  `Receso del ${fmt(aFecha(RECESO.inicio))} al ${fmt(aFecha(RECESO.fin))}: no hay actividades programadas.`,
  "Colegio: se coordina siempre a través del Product Owner, con una semana de anticipación.",
];

// Análisis de decisiones con múltiples criterios: a quién pasar cada actividad que sobrecarga a Jadira en el Sprint 2.
// Puntajes de 1 a 5 del director del proyecto, para que decida el Product Owner (SC-12).
export const CRITERIOS_MCDA = [
  { criterio: "Horas libres en el Sprint 2", peso: 0.4 },
  { criterio: "Afinidad con la actividad", peso: 0.4 },
  { criterio: "Continuidad con su propio trabajo", peso: 0.2 },
];
export const MCDA = [
  {
    actividad: "A-2.1.1.1",
    candidatos: [
      { persona: R.helber, puntajes: [5, 5, 4], razon: "59 h libres; hizo con Jadira el diagnóstico de los datos (1.0.2) y conoce las fuentes del colegio; prepara su análisis del Sprint 3." },
      { persona: R.jhostin, puntajes: [4, 3, 2], razon: "43 h libres; conoce el alcance, pero no trabaja con los datos." },
      { persona: R.carlos, puntajes: [3, 2, 3], razon: "27 h libres; trabaja en el ETL más adelante." },
    ],
  },
  {
    actividad: "A-2.2.1.1",
    candidatos: [
      { persona: R.carlos, puntajes: [3, 4, 5], razon: "Colabora en el ETL y verifica la consistencia de los datos (A-2.2.1.2) en los mismos días." },
      { persona: R.helber, puntajes: [4, 3, 2], razon: "Le quedarían 43 h libres tras la otra actividad; su trabajo es el modelo." },
      { persona: R.jhostin, puntajes: [4, 2, 2], razon: "43 h libres; no trabaja en el código de datos." },
    ],
  },
].map((x) => ({
  ...x,
  descripcion: ACTIVIDADES.find((a) => a.id === x.actividad).descripcion,
  candidatos: x.candidatos.map((c) => ({ ...c, total: Math.round(c.puntajes.reduce((s, v, i) => s + v * CRITERIOS_MCDA[i].peso, 0) * 100) / 100 })),
}));

// ───────────────────────── Liderar al equipo: evaluación del Sprint 1 ─────────────────────────

const S1 = SPRINTS[0];
const enS1 = (iso) => iso >= S1.inicio && iso <= S1.fin;
const actividadesS1 = ACTIVIDADES.filter((a) => a.sprint === 1 && !a.continua);
const comunicacionesS1 = COMUNICACIONES.filter((c) => enS1(c.fecha));
const cambiosS1 = CAMBIOS.filter((c) => c.decidido && enS1(c.decidido));
const vencidos = INCIDENTES.filter((i) => {
  const [d, m, a] = i.limite.split("/");
  return `${a}-${m}-${d}` <= S1.fin && i.estado !== "Cerrado";
});

export const RETROSPECTIVA_S1 = {
  fecha: "06/11/2026",
  bien: [
    "Se cumplió el hito 1 en la fecha prevista: arquitectura validada y variables del modelo definidas.",
    "El Product Owner aceptó los dos entregables del sprint sin observaciones (ALC-06).",
    "El taller de validación de las variables reunió a los 16 docentes y a la directora.",
    "Se aprobaron las solicitudes SC-08 (validación del modelo) y SC-10 (EDT versión 4).",
    "Se realizaron todas las comunicaciones programadas en el sprint.",
  ],
  mejorar: [
    "La primera exportación de Cubicol llegó el 06/11/2026; se había pedido el 20/10/2026.",
    "La solicitud SC-09 (correo de las alertas) debía decidirse en el Sprint 1 y sigue en evaluación.",
    `${vencidos.length} incidentes llegaron a su fecha límite sin cerrarse.`,
    "No se registraron las horas reales trabajadas.",
    "El Sprint 2 empieza con un integrante sobreasignado.",
  ],
  acciones: [
    { accion: "Presentar la solicitud SC-12 para nivelar la carga del Sprint 2.", responsable: R.jhostin, fecha: "09/11/2026" },
    { accion: "Anotar las horas reales de cada integrante en una hoja compartida, una vez por semana.", responsable: R.jhostin, fecha: "Desde el 09/11/2026" },
    { accion: "Revisar los incidentes abiertos en la reunión diaria de cada lunes.", responsable: R.carlos, fecha: "Desde el 09/11/2026" },
    { accion: "Pedir las exportaciones 2 y 3 de Cubicol con fecha de entrega acordada.", responsable: R.helber, fecha: "13/11/2026" },
  ],
};

// Indicadores objetivos del desempeño del equipo en el Sprint 1 (datos de los registros del proyecto).
export const INDICADORES_S1 = [
  { indicador: "Entregables del sprint aceptados", meta: "Todos", resultado: "2 de 2 (ALC-06)", ok: true },
  { indicador: "Hito del sprint cumplido en fecha", meta: "Sí", resultado: `Sí, el ${fmt(aFecha(S1.revision))}`, ok: true },
  { indicador: "Actividades del sprint terminadas", meta: "Todas", resultado: `${actividadesS1.filter((a) => ACTIVIDADES_REALIZADAS[a.id]).length} de ${actividadesS1.length}`, ok: actividadesS1.every((a) => ACTIVIDADES_REALIZADAS[a.id]) },
  { indicador: "Comunicaciones programadas realizadas", meta: "Todas", resultado: `${comunicacionesS1.filter((c) => estadoAl(c, S1.fin) === "Realizada").length} de ${comunicacionesS1.length}`, ok: comunicacionesS1.every((c) => estadoAl(c, S1.fin) === "Realizada") },
  { indicador: "Solicitudes de cambio decididas en el sprint", meta: "Las previstas", resultado: `${cambiosS1.length} aprobadas (${cambiosS1.map((c) => c.id).join(", ")}); SC-09 sigue en evaluación`, ok: false },
  { indicador: "Incidentes con fecha límite vencida", meta: "Ninguno", resultado: `${vencidos.length} (${vencidos.map((i) => i.id).join(", ")})`, ok: vencidos.length === 0 },
  { indicador: "Integrantes que dejaron el equipo", meta: "Ninguno", resultado: "Ninguno (supuesto S-10 vigente)", ok: true },
];

export const TUCKMAN = {
  etapas: ["Formación", "Conflicto", "Normalización", "Desempeño", "Disolución"],
  actual: "Normalización",
  evidencia: "Los roles están definidos (Product Owner desde el 12/10/2026), hay acuerdos de trabajo y el equipo cumplió su primer hito. Aún no se mide la productividad real (no hay registro de horas), por eso no se considera en la etapa de desempeño.",
};

export const AUTOEVALUACION = [
  "Cumplí los compromisos que asumí en el sprint.",
  "Avisé a tiempo los impedimentos.",
  "Colaboré con el trabajo de otros integrantes.",
  "Respeté los acuerdos del acta del equipo.",
  "Aprendí algo nuevo que aplico en el proyecto.",
];

export const RECONOCIMIENTO = [
  { cuando: "Revisión de cada sprint", como: "Se nombran en el acta y en el blog los logros del sprint y quién los hizo posibles." },
  { cuando: "Cada demostración", como: "Presenta el integrante que construyó el entregable." },
  { cuando: "Cierre del proyecto", como: "Constancia de participación firmada por el director del proyecto para cada integrante." },
];
// Logros del Sprint 1 por paquete a cargo de cada integrante (hechos registrados).
export const LOGROS_S1 = [
  { persona: R.helber, logro: "Variables del modelo (1.0.3): taller del 28/10/2026 con los 16 docentes y la directora, organizado a través del colegio." },
  { persona: R.jadira, logro: "Arquitectura del sistema (1.0.4): aceptada en la revisión del 06/11/2026." },
  { persona: R.jhostin, logro: "Levantamiento del alcance (1.0.1): reunión de inicio del 12/10/2026 y su acta (GOB-12)." },
  { persona: R.carlos, logro: "Actas y control de cambios (1.1.3): dos solicitudes aprobadas en el sprint (SC-08 y SC-10)." },
];

// ───────────────────────── Monitorear y controlar los recursos ─────────────────────────

const SEMAFORO = { "En uso": "verde", "Aún no se necesita": "gris", "Por pedir": "gris", "Sin obtener": "rojo" };
export const CONTROL_FISICOS = ASIGNACIONES_FISICAS.map((x) => ({
  recurso: x.recurso,
  planificado: x.necesita,
  real: x.real,
  estado: x.estado,
  semaforo: x.recurso.startsWith("Render") ? "amarillo" : SEMAFORO[x.estado],
}));

// Desviaciones y su tratamiento (resolución de problemas en 6 pasos de la guía).
export const DESVIACIONES = [
  {
    problema: "La primera exportación de Cubicol llegó 17 días después del pedido",
    pasos: [
      ["Identificar", "El ETL (1.2.1) no tenía datos reales del periodo para probar."],
      ["Definir", "Pedido del 20/10/2026 (C-09); la exportación llegó el 06/11/2026."],
      ["Investigar", "La exportación depende de la gestora de Cubicol y pasa por el Product Owner; no había fecha de entrega acordada."],
      ["Analizar", "Sin fecha comprometida, cada pedido puede retrasarse igual; faltan dos cargas antes del 04/12/2026."],
      ["Resolver", "Pedir las cargas 2 y 3 con fecha de entrega y seguirlas en la reunión diaria de los lunes."],
      ["Comprobar", "La carga 2 llega en la fecha acordada (revisión del 20/11/2026)."],
    ],
  },
  {
    problema: "No hay un equipo con licencia de MS Project",
    pasos: [
      ["Identificar", "El cronograma existe como XML de MS Project, pero nadie lo ha abierto ni guardado en .mpp."],
      ["Definir", "Recurso de software planificado y no obtenido."],
      ["Investigar", "Opciones: laboratorio de la universidad o licencia de estudiante."],
      ["Analizar", "El laboratorio no tiene costo; la licencia depende de la cuenta de estudiante de cada integrante."],
      ["Resolver", "Abrir el XML en el laboratorio de la universidad y guardar el archivo .mpp."],
      ["Comprobar", "El archivo .mpp está en Drive y coincide con el CRO-01."],
    ],
  },
];

// Análisis costo-beneficio de una corrección: plan gratuito frente a plan de pago de la API para el piloto.
export const COSTO_BENEFICIO = [
  { opcion: "Mantener el plan gratuito de Render", costo: "S/ 0", beneficio: "Cumple la restricción R-02 (sin presupuesto).", contra: "La primera consulta del día tarda cerca de un minuto: mala impresión en el piloto." },
  { opcion: "Plan de pago durante el piloto (marzo de 2027)", costo: "Unos US$ 7 por mes", beneficio: "Respuesta inmediata durante el piloto con docentes.", contra: "Requiere presupuesto, que hoy no existe (R-02), y una solicitud de cambio." },
  { opcion: "Mantener el gratuito y «despertar» la API antes de cada sesión", costo: "S/ 0", beneficio: "Respuesta inmediata en las sesiones programadas.", contra: "Depende de que alguien lo haga a tiempo." },
];
export const RECOMENDACION_CB = "Seguir con el plan gratuito y despertar la API antes de cada sesión del piloto. Revisarlo en la planificación del Sprint 5.";

// Comprobación de resultados del dominio (Tabla 2-10 del PMBOK, 8.ª edición) al corte.
export const COMPROBACION = [
  { resultado: "Existe una propiedad compartida del proyecto.", comprobacion: "Cada paquete de la EDT tiene un responsable y el equipo presentó el Sprint 1.", estado: "Se cumple" },
  { resultado: "Hay un equipo de alto desempeño.", comprobacion: "Hito 1 cumplido y entregables aceptados; equipo en etapa de normalización.", estado: "En camino" },
  { resultado: "Los recursos se usan de forma eficaz.", comprobacion: "Los recursos físicos están en uso o se pedirán a tiempo; falta MS Project.", estado: "En parte" },
  { resultado: "Hay un porcentaje aceptable de tiempo de inactividad.", comprobacion: "No se puede medir: no hay registro de horas reales (acción de la retrospectiva).", estado: "Sin datos" },
  { resultado: "El equipo es productivo.", comprobacion: "Todas las actividades del Sprint 1 se terminaron; falta medir horas.", estado: "En parte" },
  { resultado: "Existe una gestión eficiente de los recursos físicos o virtuales.", comprobacion: "Servicios en planes gratuitos y sin costo; se vigila el arranque lento de la API.", estado: "Se cumple" },
  { resultado: "Se realiza la gestión de la adquisición de recursos.", comprobacion: "Asignaciones y calendario de recursos (REC-04) con quién provee cada recurso y cuándo.", estado: "Se cumple" },
];

// Resumen para el blog.
export const SC12 = CAMBIOS.find((c) => c.id === "SC-12");
