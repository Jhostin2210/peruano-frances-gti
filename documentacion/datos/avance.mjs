// Avance del producto al corte del informe ALC-05 N.º 2 (17/10/2026). Lo usan el ALC-05 y la sección
// «Entregables» del blog, para que ambos digan lo mismo.

import { PROYECTO as P, R } from "../proyecto.mjs";

// Estado de cada paquete al 17/10/2026, según el sistema publicado y su repositorio.
// [estado, % de avance (null en los paquetes de gestión), qué existe, qué falta]
export const AVANCE = {
  "1.1.1": ["Cumplido", null, "Línea base del cronograma v3 (CRO-01), con la conformidad de la patrocinadora (12/10/2026).", "Mantenerla actualizada ante cada cambio."],
  "1.1.2": ["En curso", null, "Informe de desempeño N.º 1 (GOB-09).", "Un informe al cierre de cada sprint."],
  "1.1.3": ["En curso", null, "Registro de cambios con 11 solicitudes (GOB-10) y acta de la reunión de inicio (GOB-12).", "Actas y cambios hasta el cierre."],
  "1.2.1": ["Cumplido en parte", 85, "Carga de la base consolidada de notas del colegio: 3 878 notas de 173 estudiantes, sin duplicados y reconciliada con el archivo de origen.", "Repetir la reconciliación en tres fechas y cargar las exportaciones de Cubicol."],
  "1.2.2": ["Cumplido en parte", 85, "Diez reglas de calidad y validación automática cada noche: 6 noches seguidas sin fallas críticas al 17/10/2026.", "Completar 15 noches seguidas y cotejar las notas transcritas de fotografías."],
  "1.3.1": ["Cumplido", 100, "Red neuronal 35-32-16-8-1 entrenada con una base pública (Student Performance, UCI); clasifica en tres niveles.", "Volver a entrenarla cuando el colegio acumule datos propios."],
  "1.3.2": ["Prototipo", 50, "Clasifica a todos los estudiantes al cargar datos y con el botón «Evaluar aula».", "Ejecución semanal automática."],
  "1.3.3": ["Cumplido en parte", 70, "Prueba con 209 registros no vistos: exactitud 83,7 %, AUC 0,95. Aplicada a 558 casos del colegio: en riesgo alto le fue mal al 55 %; en bajo, al 3 %.", "Cerrar la métrica acordada (SC-08) y contrastar las alertas con los docentes."],
  "1.4.1": ["Prototipo", 40, "Lista de estudiantes en riesgo alto y comunicado al apoderado que el sistema redacta y el tutor envía por WhatsApp (REQ-12).", "Correo al tutor, historial de alertas y registro de seguimiento."],
  "1.4.2.1": ["Cumplido en parte", 80, "Interfaz en línea: inicio, aulas, estudiantes, ficha, evaluación de un caso, modelo y datos.", "Mostrarla a los docentes en el taller del 28/10/2026."],
  "1.4.2.2": ["Cumplido en parte", 75, "Indicadores por nivel y por aula, ficha del estudiante, reporte en PDF y exportación por aula.", "Filtros por fecha, comparación con el periodo anterior y prueba en Firefox y Edge."],
  "1.4.2.3": ["No iniciado", 0, "—", "Pruebas con al menos tres docentes."],
  "1.4.3": ["No iniciado", 5, "La tabla de usuarios con los cuatro roles está en la base de datos.", "Inicio de sesión y vistas por rol."],
  "1.5.1": ["Prototipo", 40, "Sistema en línea (página en Vercel y API en Render) con datos de práctica.", "Base gestionada y entorno de producción con datos reales."],
  "1.5.2": ["No iniciado", 0, "—", "Manual de usuario."],
  "1.5.3": ["Prototipo", 40, "Documentos de arquitectura, datos y variables, modelo y pruebas en el repositorio del sistema.", "Completarlo y validarlo con el encargado de TI."],
  "1.5.4": ["No iniciado", 0, "—", "Plan de capacitación."],
  "1.5.5": ["No iniciado", 0, "—", "Capacitación y cierre."],
  "1.6.1": ["Prototipo", 20, "Pruebas del entregable E-01 y de los flujos de la página.", "Reporte formal de integración y prueba de rendimiento."],
  "1.6.2": ["No iniciado", 0, "—", "Piloto con tres docentes tutores."],
};

// Entregables del producto (ALC-02): paquetes de la EDT que los componen, estado y evidencias.
// El estado sigue al ALC-05: solo el E-01 se presentó para validación; se acepta en la revisión del Sprint 2.
const sistema = P.enlaces.prototipo;
const repo = `${P.enlaces.repoSistema}/blob/main/docs`;
export const ENTREGABLES_AVANCE = {
  "E-01": {
    paquetes: ["1.2.1", "1.2.2"],
    estado: "En validación",
    nota: "Presentado al docente asesor el 17/10/2026 con el informe ALC-05 N.º 2. Al 31/10/2026, siete de los ocho casos de prueba están aprobados; falta repetir la reconciliación en tres fechas (CP-03). Se acepta en la revisión del Sprint 2 (04/12/2026), con el Product Owner.",
    evidencias: [
      { texto: "Pantalla «Datos» del sistema", url: `${sistema}/#/datos` },
      { texto: "Casos de prueba del Sprint 2", url: `${repo}/pruebas-sprint-2.md` },
      { texto: "Datos y variables", url: `${repo}/datos-y-variables.md` },
    ],
    documentos: ["ALC-05", "ALC-04"],
  },
  "E-02": {
    paquetes: ["1.3.1", "1.3.2", "1.3.3"],
    estado: "En desarrollo",
    nota: "La red neuronal está entrenada y clasifica en tres niveles; falta la ejecución semanal automática y cerrar la métrica acordada (SC-08).",
    evidencias: [
      { texto: "Pantalla «Modelo» del sistema", url: `${sistema}/#/modelo` },
      { texto: "Evaluar un caso", url: `${sistema}/#/evaluar` },
      { texto: "Modelo y validación", url: `${repo}/modelo-y-validacion.md` },
    ],
    documentos: ["ALC-05"],
  },
  "E-03": {
    paquetes: ["1.4.1"],
    estado: "En desarrollo",
    nota: "Hay un prototipo: lista de estudiantes en riesgo alto y comunicado al apoderado que redacta el sistema. Faltan el correo al tutor y el registro de seguimiento.",
    evidencias: [{ texto: "Inicio del sistema (riesgo alto)", url: sistema }],
    documentos: ["ALC-05"],
  },
  "E-04": {
    paquetes: ["1.4.2.1", "1.4.2.2", "1.4.2.3"],
    estado: "En desarrollo",
    nota: "La interfaz en línea tiene aulas, estudiantes, ficha y reportes en PDF, y los docentes tutores le dieron su conformidad en el taller del 28/10/2026. Faltan las pruebas de uso con docentes (1.4.2.3).",
    evidencias: [
      { texto: "Pantalla «Aulas»", url: `${sistema}/#/aulas` },
      { texto: "Pantalla «Estudiantes»", url: `${sistema}/#/estudiantes` },
    ],
    documentos: ["ALC-05"],
  },
  "E-05": { paquetes: ["1.4.3"], estado: "No iniciado", nota: "Solo existe la tabla de usuarios con los cuatro roles en la base de datos.", evidencias: [], documentos: [] },
  "E-06": { paquetes: ["1.5.2"], estado: "No iniciado", nota: "Se elabora en el Sprint 6.", evidencias: [], documentos: [] },
  "E-07": {
    paquetes: ["1.5.3"],
    estado: "En desarrollo",
    nota: "Hay documentos de arquitectura, datos, modelo y pruebas en el repositorio del sistema; falta completarlo y validarlo con el encargado de TI.",
    evidencias: [{ texto: "Arquitectura del sistema", url: `${repo}/arquitectura.md` }],
    documentos: [],
  },
  "E-08": { paquetes: ["1.5.4", "1.5.5"], estado: "No iniciado", nota: "Se elabora y se dicta en el Sprint 6.", evidencias: [], documentos: [] },
  "E-09": { paquetes: ["1.6.2"], estado: "No iniciado", nota: "El piloto con tres docentes tutores es en el Sprint 5 (marzo de 2027).", evidencias: [], documentos: [] },
};

// Casos de prueba del entregable en validación (E-01), como quedaron en el informe ALC-05 N.º 2.
export const CASOS_E01 = {
  "CP-01": "Aprobado",
  "CP-02": "Aprobado",
  "CP-03": "Aprobado en parte",
  "CP-04": "Aprobado",
  "CP-05": "En curso",
  "CP-06": "Aprobado",
  "CP-07": "Aprobado",
  "CP-08": "Aprobado",
};

// Seguimiento semanal del alcance: alimenta el tablero de monitoreo y control del alcance (ALC-01, sección 7).
// Cada corte registra solo lo que cambió respecto del anterior; el primero es el del informe ALC-05 N.º 2.
// [estado, % de avance, qué existe, qué falta], igual que AVANCE.
export const CORTES_ALCANCE = [
  {
    fecha: "2026-10-17",
    fuente: "Informe ALC-05 N.º 2",
    cambios: {},
    casos: {},
    hechos: ["Se presenta al docente asesor el primer entregable del producto (E-01) con el informe ALC-05 N.º 2."],
    sprint: [],
    alertas: [],
    fueraDeAlcance: [],
  },
  {
    fecha: "2026-10-31",
    fuente: "Seguimiento semanal",
    cambios: {
      "1.2.1": [
        "Cumplido en parte",
        85,
        "Carga de la base consolidada de notas del colegio (3 878 notas de 173 estudiantes), sin duplicados y reconciliada. El colegio ya entrega las exportaciones de Cubicol de forma periódica, a través del Product Owner.",
        "Cargar las exportaciones periódicas de Cubicol y repetir la reconciliación en tres fechas (CP-03).",
      ],
      "1.2.2": [
        "Cumplido en parte",
        95,
        "Diez reglas de calidad y validación automática cada noche: 21 noches seguidas sin fallas, del 11/10 al 31/10/2026 (CP-05 cumplido el 25/10).",
        "Cotejar las notas transcritas de fotografías.",
      ],
      "1.4.2.1": [
        "Cumplido",
        100,
        "Interfaz en línea revisada con los docentes tutores en el taller del 28/10/2026, que dieron su conformidad.",
        "Mantenerla al día con los ajustes de los sprints siguientes.",
      ],
    },
    casos: { "CP-05": "Aprobado" },
    hechos: [
      "28/10: taller de validación con los docentes tutores, organizado por el Product Owner. Conformidad con las variables del modelo y con la interfaz.",
      "El colegio entrega las exportaciones de notas de Cubicol de forma periódica, a través del Product Owner.",
      "25/10: se completan 15 noches seguidas de validación de datos sin fallas (CP-05). Al 31/10 son 21.",
    ],
    // Alcance comprometido del sprint en curso (ALC-04, Sprint 1) y su situación.
    sprint: [
      { que: "Arquitectura del sistema", estado: "Lista para revisión", evidencia: "Documento de arquitectura en el repositorio del sistema; se revisa el 06/11/2026.", url: `${repo}/arquitectura.md` },
      { que: "Lista de variables del modelo validada con docentes", estado: "Cumplido", evidencia: "Taller del 28/10/2026: los docentes tutores dieron su conformidad. Constancia: lista de asistencia y acuerdos." },
    ],
    alertas: [
      { nivel: "Atención", texto: "Archivar la lista de asistencia y los acuerdos del taller del 28/10: son la evidencia para aceptar el alcance del Sprint 1.", responsable: R.helber, fecha: "06/11/2026" },
      { nivel: "Atención", texto: "Decidir la solicitud SC-08 (rediseño de la validación del modelo) en la revisión del Sprint 1.", responsable: R.jhostin, fecha: "06/11/2026" },
      { nivel: "Atención", texto: "Cargar las exportaciones de Cubicol y repetir la reconciliación en tres fechas (CP-03) antes de la aceptación del E-01.", responsable: R.jadira, fecha: "04/12/2026" },
      { nivel: "Seguimiento", texto: "SC-09 (canal de las alertas por correo) y SC-10 (unificación de la EDT) siguen en evaluación.", responsable: R.carlos, fecha: "Sprint 2" },
    ],
    fueraDeAlcance: [
      {
        texto: "Pantalla «Evaluar un caso»: evalúa a un estudiante con datos ingresados a mano. No figura en la matriz de requisitos.",
        estado: "Por revisar",
        accion: "Registrarla como solicitud de cambio o dejarla solo como demostración del modelo.",
      },
    ],
  },
  {
    fecha: "2026-11-07",
    fuente: "Revisión del Sprint 1",
    cambios: {
      "1.0.1": ["Cumplido", 100, "Reunión de inicio del 12/10/2026 con la Dirección, con su acta (GOB-12).", "—"],
      "1.0.2": ["Cumplido", 100, "Fuentes de datos del colegio identificadas, con su calidad y disponibilidad descritas.", "—"],
      "1.0.3": ["Cumplido", 100, "Variables del modelo aprobadas por los docentes tutores en el taller del 28/10/2026.", "—"],
      "1.0.4": ["Cumplido", 100, "Documento de arquitectura aprobado en la revisión del Sprint 1 (06/11/2026).", "—"],
      "1.3.3": [
        "Cumplido en parte",
        70,
        "Prueba con 209 registros no vistos: exactitud 83,7 %, AUC 0,95. Aplicada a 558 casos del colegio. La forma de validarlo (SC-08) se aprobó el 06/11/2026.",
        "Aplicar la validación aprobada en SC-08 con los datos del colegio.",
      ],
    },
    casos: {},
    requisitosCambiados: ["REQ-03"],
    hechos: [
      "06/11: revisión del Sprint 1 con el Product Owner. Se aprueban la arquitectura y la lista de variables del modelo: hito 1 cumplido.",
      "06/11: se aprueba sin cambios la solicitud SC-08 (validación del modelo); cambia el criterio de validación de REQ-03.",
      "07/11: se propone la EDT versión 4 (SC-10): componente 1.0 «Análisis y diseño» y cada actividad del cronograma enlazada a su paquete y su entregable.",
    ],
    sprint: [
      { que: "Arquitectura del sistema", estado: "Cumplido", evidencia: "Aprobada en la revisión del Sprint 1 (06/11/2026).", url: `${repo}/arquitectura.md` },
      { que: "Lista de variables del modelo validada con docentes", estado: "Cumplido", evidencia: "Taller del 28/10/2026 y revisión del Sprint 1 (06/11/2026)." },
    ],
    alertas: [
      { nivel: "Atención", texto: "Aprobar la EDT versión 4 (SC-10) con el Product Owner.", responsable: R.jhostin, fecha: "Sprint 2" },
      { nivel: "Atención", texto: "Cargar las exportaciones de Cubicol y repetir la reconciliación en tres fechas (CP-03) antes de la aceptación del E-01.", responsable: R.jadira, fecha: "04/12/2026" },
      { nivel: "Seguimiento", texto: "SC-09 (canal de las alertas por correo) sigue en evaluación.", responsable: R.carlos, fecha: "Sprint 2" },
    ],
    fueraDeAlcance: [
      {
        texto: "Pantalla «Evaluar un caso»: evalúa a un estudiante con datos ingresados a mano. No figura en la matriz de requisitos.",
        estado: "Por revisar",
        accion: "Registrarla como solicitud de cambio o dejarla solo como demostración del modelo.",
      },
    ],
  },
];

// Actividades del cronograma ya realizadas, con la evidencia de su entregable (entregables del cronograma).
export const ACTIVIDADES_REALIZADAS = {
  "A-0.1.1.1": { fecha: "2026-10-12", evidencias: [{ texto: "Acta GOB-12", doc: "GOB-12" }] },
  "A-0.1.1.2": { fecha: "2026-10-23", evidencias: [{ texto: "Datos y variables", url: `${repo}/datos-y-variables.md` }] },
  "A-0.1.1.3": { fecha: "2026-10-28", evidencias: [{ texto: "Taller con los 16 docentes y la directora; lista de asistencia y acuerdos" }, { texto: "Variables del modelo", url: `${repo}/datos-y-variables.md` }] },
  "A-0.1.1.4": { fecha: "2026-11-06", evidencias: [{ texto: "Arquitectura del sistema", url: `${repo}/arquitectura.md` }] },
};
