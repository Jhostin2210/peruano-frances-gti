// Product Backlog priorizado (actividad A-1.1.1.2, paquete 1.1.1). Una historia de usuario por requisito
// funcional y una historia técnica por requisito no funcional. Los criterios de aceptación son los de cada
// requisito (REQUISITOS); los puntos salen de las horas del paquete en la estimación de recursos (REC-01).

import { REQUISITOS, ENTREGABLES } from "./requisitos.mjs";
import { horasPorPaquete } from "./recursos.mjs";
import { ACTIVIDADES } from "./actividades.mjs";

export const FECHA_BACKLOG = "15/11/2026";

// Criterios cambiados por solicitudes aprobadas que aún no llegan a la próxima versión del enunciado (ALC-02).
const CRITERIO_VIGENTE = {
  "REQ-03": "Validado con datos reales del colegio: el nivel que da el modelo se compara con lo que pasó en el periodo siguiente; «le fue mal» si alguna competencia tiene promedio menor de 11. Se informan AUC, proporción detectada y aciertos de las alertas, frente a una regla simple (SC-08 y SC-14).",
};

// Estado real de cada historia al 15/11/2026 (Hecho = construido y probado; queda la aceptación del Product Owner).
const H = [
  ["HU-01", "REQ-01", "coordinador académico", "tener en una sola base las notas de Cubicol de todos los salones", "no revisar los registros archivo por archivo", "Hecho", "684 notas de 48 estudiantes; tres reconciliaciones correctas (CP-03). Se presenta para aceptación el 04/12/2026."],
  ["HU-02", "REQ-02", "encargado de TI", "que los datos se revisen solos cada noche", "enterarme de los errores antes de que lleguen a los docentes", "Hecho", "Diez reglas de calidad; validación nocturna en GitHub Actions sin fallas (CP-05)."],
  ["HU-03", "REQ-03", "docente tutor", "que el sistema ubique a cada estudiante en riesgo bajo, medio o alto", "saber a quién atender primero", "En curso", "Red neuronal aplicada a los datos del colegio; validación por competencias (SC-14): AUC 0,71. Falta ajustar los cortes de nivel."],
  ["HU-04", "REQ-04", "coordinador académico", "que la clasificación se actualice sola cada semana", "trabajar siempre con datos al día", "Por hacer", "Hoy se clasifica al cargar datos o con el botón «Evaluar aula»."],
  ["HU-05", "REQ-05", "docente tutor", "recibir un correo cuando un estudiante de mi aula pase a riesgo alto", "actuar a tiempo", "Por hacer", "Depende de la solicitud SC-09 (correos personales autorizados)."],
  ["HU-06", "REQ-06", "docente tutor", "un panel con las alertas de mi aula", "ver de un vistazo quién necesita apoyo", "En curso", "Prototipo: lista de estudiantes en riesgo por aula."],
  ["HU-07", "REQ-07", "docente tutor", "registrar qué hice con cada alerta", "que quede el seguimiento de cada caso", "Por hacer", "—"],
  ["HU-08", "REQ-12", "docente tutor", "un comunicado listo para el apoderado de un estudiante en riesgo alto", "avisarle por WhatsApp sin redactarlo desde cero", "En curso", "Prototipo: el sistema redacta el comunicado y el tutor lo envía."],
  ["HU-09", "REQ-08", "Promotora Directora", "un tablero con los indicadores de riesgo por aula", "decidir dónde reforzar", "En curso", "Indicadores por nivel y por aula en línea; faltan filtros por fecha y comparación con el periodo anterior."],
  ["HU-10", "REQ-10", "docente tutor", "la ficha de cada estudiante con sus cursos e historial", "preparar la conversación con la familia", "En curso", "Ficha y reporte en PDF en línea."],
  ["HU-11", "REQ-09", "coordinador académico", "exportar los reportes en PDF y Excel", "presentarlos en reuniones", "En curso", "PDF por estudiante y archivo CSV por aula; falta el formato Excel."],
  ["HU-12", "REQ-11", "encargado de TI", "que cada usuario entre con su rol y vea solo lo que le corresponde", "proteger los datos de los estudiantes", "Por hacer", "La tabla de usuarios con los cuatro roles ya existe en la base."],
  ["HT-01", "RNF-03", "encargado de TI", "inicio de sesión con contraseña segura y sesiones que caducan", "que nadie sin cuenta vea los datos", "Por hacer", "Se construye junto con HU-12."],
  ["HT-02", "RNF-04", "Promotora Directora", "que el sistema cumpla la Ley N.° 29733", "proteger los datos de menores de edad", "En curso", "Datos reales solo en la carpeta privada, códigos en vez de nombres y sin DNI. Los apoderados dieron su conformidad en la reunión del 13/11/2026; faltan el inicio de sesión por rol y la base protegida en la nube."],
  ["HT-03", "RNF-01", "docente tutor", "poder usar el sistema después de una capacitación corta", "incluirlo en mi rutina", "Por hacer", "Se comprueba en las pruebas con docentes y en la capacitación."],
  ["HT-04", "RNF-02", "docente tutor", "que el tablero cargue rápido", "no perder tiempo de clase", "Por hacer", "Se mide en las pruebas de rendimiento (1.6.1)."],
  ["HT-05", "RNF-05", "coordinador académico", "que el sistema esté disponible en el horario escolar", "consultarlo cuando lo necesite", "Por hacer", "Requiere la base gestionada en la nube (Sprint 6)."],
  ["HT-06", "RNF-06", "docente tutor", "usar el sistema en Chrome, Edge o Firefox", "entrar desde cualquier equipo del colegio", "Por hacer", "Se prueba en el Sprint 4."],
  ["HT-07", "RNF-07", "encargado de TI", "que el sistema soporte a todos los estudiantes y usuarios del colegio", "no cambiarlo cuando crezca", "Por hacer", "Se mide en las pruebas de rendimiento (1.6.1)."],
  ["HT-08", "RNF-08", "encargado de TI", "documentación técnica y de uso", "mantener el sistema cuando el equipo termine", "En curso", "Arquitectura, datos, modelo, pruebas y modelo entidad-relación en el repositorio del sistema."],
];

// 1 punto ≈ 8 horas del equipo, redondeado a la serie de Fibonacci.
const FIBO = [1, 2, 3, 5, 8, 13, 21];
const aPuntos = (horas) => FIBO.reduce((m, f) => (Math.abs(f - horas / 8) < Math.abs(m - horas / 8) ? f : m), 1);

export function productBacklog() {
  const horas = Object.fromEntries(horasPorPaquete().map((p) => [p.id, p.horas]));
  const porPaquete = {};
  H.forEach(([, req]) => {
    const r = REQUISITOS.find((x) => x.id === req);
    for (const p of r.paquete.split(/ y /)) porPaquete[p] = (porPaquete[p] ?? 0) + 1;
  });
  return H.map(([id, req, rol, quiero, para, estado, nota]) => {
    const r = REQUISITOS.find((x) => x.id === req);
    const paquetes = r.paquete.split(/ y /);
    const h = paquetes.reduce((s, p) => s + (horas[p] ?? 0) / porPaquete[p], 0);
    // Sprint en que se termina: el último sprint de las actividades de sus paquetes.
    const sprints = ACTIVIDADES.filter((a) => paquetes.includes(a.paquete) && !a.continua).map((a) => a.sprint);
    const sprint = sprints.length ? Math.max(...sprints) : ENTREGABLES.find((e) => e.id === r.entregable.split(" y ")[0])?.sprint ?? null;
    return {
      id,
      tipo: id.startsWith("HU") ? "Historia de usuario" : "Historia técnica",
      requisito: req,
      titulo: r.titulo,
      historia: `Como ${rol}, quiero ${quiero} para ${para}.`,
      criterio: CRITERIO_VIGENTE[req] ?? r.criterio,
      prioridad: r.prioridad,
      entregable: r.entregable,
      paquete: r.paquete,
      sprint,
      puntos: aPuntos(h || 8),
      estado,
      nota,
    };
  }).sort((a, b) => (a.sprint ?? 9) - (b.sprint ?? 9) || (a.prioridad === b.prioridad ? 0 : a.prioridad === "Alta" ? -1 : 1) || a.id.localeCompare(b.id));
}

export const DEFINICION_LISTO = [
  "La historia está escrita como «Como…, quiero… para…» y tiene su requisito de origen.",
  "Tiene criterios de aceptación que se pueden comprobar.",
  "Está estimada en puntos y cabe en un sprint.",
  "No depende de algo externo sin resolver (por ejemplo, una solicitud de cambio en evaluación).",
];
export const DEFINICION_TERMINADO = [
  "El código está en el repositorio y pasa la validación automática.",
  "Cumple sus criterios de aceptación y sus casos de prueba de la matriz de trazabilidad.",
  "No expone datos personales de estudiantes (Ley N.° 29733).",
  "Está documentado y el Product Owner lo aceptó en la revisión del sprint.",
];
