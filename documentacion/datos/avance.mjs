// Avance del producto al corte del informe ALC-05 N.º 2 (17/10/2026). Lo usan el ALC-05 y la sección
// «Entregables» del blog, para que ambos digan lo mismo.

import { PROYECTO as P } from "../proyecto.mjs";

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
    nota: "Presentado al docente asesor el 17/10/2026 con el informe ALC-05 N.º 2: seis de los ocho casos de prueba aprobados, uno aprobado en parte y uno en curso. Se acepta en la revisión del Sprint 2 (04/12/2026), con el Product Owner.",
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
    nota: "La interfaz en línea tiene aulas, estudiantes, ficha y reportes en PDF. Faltan las pruebas con docentes.",
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
