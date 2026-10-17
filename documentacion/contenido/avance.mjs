// Monitorear y controlar el alcance: avance del producto frente a la EDT.
// ALC-05 compara lo que existe del sistema con cada paquete de trabajo y presenta el entregable que se valida.

import { c, kv, nota, ol, p, sec, tabla, ul } from "../lib/bloques.mjs";
import { PROYECTO as P } from "../proyecto.mjs";
import { SPRINTS, fmtIso } from "../datos/calendario.mjs";
import { PAQUETES, REQUISITOS } from "../datos/requisitos.mjs";
import { DOC } from "./comunes.mjs";

// Estado de cada paquete al 17/10/2026, según el sistema publicado y su repositorio.
// [estado, % de avance (null en los paquetes de gestión), qué existe, qué falta]
const AVANCE = {
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
const COLOR = { Cumplido: "verde", "En curso": "azul", "Cumplido en parte": "teal", Prototipo: "amarillo", "No iniciado": "gris" };
const cuenta = (estado) => PAQUETES.filter((x) => AVANCE[x.id][0] === estado).length;
const delProducto = PAQUETES.filter((x) => AVANCE[x.id][1] !== null);
const promedio = (lista) => Math.round(lista.reduce((s, x) => s + AVANCE[x.id][1], 0) / lista.length);
const GRUPOS = [
  ["1.2", "Datos e integración"],
  ["1.3", "Modelo ML predictivo"],
  ["1.4", "Alertas y tablero"],
  ["1.5", "Implantación y cierre"],
  ["1.6", "Pruebas y piloto"],
];
const SISTEMA = P.enlaces;
const req = (id) => REQUISITOS.find((r) => r.id === id);
const CASOS = [
  ["CP-01", "Se consolidan todos los registros válidos", c("Aprobado", "verde", { bold: true, align: "center" }), "3 878 notas válidas leídas y 3 878 cargadas, de 3 937 filas de 173 estudiantes. Las 59 restantes se reportan con su motivo."],
  ["CP-02", "No se generan duplicados", c("Aprobado", "verde", { bold: true, align: "center" }), "Segunda carga del mismo archivo: 0 cargadas y 3 878 «ya estaban»."],
  ["CP-03", "Reconciliación entre el origen y la base en tres fechas", c("Aprobado en parte", "teal", { bold: true, align: "center" }), "La reconciliación es correcta; falta repetirla con cargas sucesivas en tres fechas."],
  ["CP-04", "Integridad referencial", c("Aprobado", "verde", { bold: true, align: "center" }), "Ninguna nota sin estudiante, curso o periodo; ningún estudiante sin matrícula."],
  ["CP-05", "La validación corre cada noche 15 días seguidos sin fallas", c("En curso", "azul", { bold: true, align: "center" }), "6 de 15 noches seguidas sin fallas al 17/10/2026, en GitHub Actions."],
  ["CP-06", "Detecta duplicados", c("Aprobado", "verde", { bold: true, align: "center" }), "33 notas repetidas en el origen: la carga conserva la primera y las cuenta."],
  ["CP-07", "Detecta vacíos críticos", c("Aprobado", "verde", { bold: true, align: "center" }), "7 casillas vacías o con texto y 15 notas sin periodo identificable, detectadas y no cargadas."],
  ["CP-08", "El resultado queda disponible para el responsable de TI", c("Aprobado", "verde", { bold: true, align: "center" }), "Pantalla «Datos» del sistema, consulta de la API y reporte de cada ejecución nocturna."],
];

export const ALC05 = DOC({
  id: "ALC-05",
  titulo: "Informe de avance del producto por EDT N.º 2",
  archivo: "ALC-05 Avance del producto por EDT 02",
  carpeta: "03 - Alcance/3.5 Controlar el alcance",
  dominio: "Alcance",
  area: "Monitoreo y control",
  proceso: "Monitorear y controlar el alcance",
  salida: "Información de desempeño del trabajo y entregables verificados",
  version: "2.0",
  fecha: P.fechaCorte,
  versiones: [
    ["1.0", P.fechaEmision, "Informe N.º 1: punto de partida, con el prototipo heredado de la fase de formulación.", P.director],
    ["2.0", P.fechaCorte, "Informe N.º 2: presenta el primer entregable del producto (E-01) para su validación y el avance de cada paquete. Reemplaza al N.º 1.", P.director],
  ],
  resumen:
    "Compara lo que existe del sistema con cada paquete de trabajo de la EDT y presenta para su validación el primer entregable del producto: el módulo de integración y limpieza de datos (E-01).",
  secciones: [
    sec("1. Propósito y corte", [
      p(
        `Monitorear y controlar el alcance es comparar el trabajo hecho con la línea base. Fecha de corte: ${P.fechaCorte}, primera semana del Sprint 1. Este informe reemplaza al N.º 1 (${P.fechaEmision}), que describía el prototipo heredado de la fase de formulación.`,
      ),
      kv(
        ["Página del sistema", SISTEMA.prototipo],
        ["API del sistema", SISTEMA.api],
        ["Repositorio del sistema", SISTEMA.repoSistema],
      ),
    ]),
    sec("2. Entregable que se valida: E-01", [
      kv(
        ["Entregable", "E-01 · Módulo de integración y limpieza de datos"],
        ["Paquetes de la EDT", "1.2.1 Integración de datos (ETL) y 1.2.2 Calidad de datos"],
        ["Requisitos", "REQ-01 Centralización de los datos académicos y REQ-02 Limpieza y validación automática de los datos"],
        ["Criterio de REQ-01", req("REQ-01").criterio],
        ["Criterio de REQ-02", req("REQ-02").criterio],
        ["Sprint en que se acepta", `Sprint 2 · revisión del ${fmtIso(SPRINTS[1].revision)}, con el Product Owner`],
        ["Situación", "Cumplido en parte: seis de los ocho casos de prueba aprobados, uno aprobado en parte y uno en curso."],
      ),
      p(
        "Es el primer entregable de la EDT y el único que hoy se puede validar con su criterio de aceptación: la carga, la reconciliación y las reglas de calidad funcionan y se probaron con la base consolidada de notas del colegio.",
      ),
      tabla(
        ["Caso", "Qué comprueba", "Resultado", "Evidencia"],
        [8, 30, 16, 46],
        CASOS,
        { titulo: "Casos de prueba del E-01 (matriz de trazabilidad)", compacta: true, fuente: "Pruebas ejecutadas el 10/10/2026 con la base real del colegio, en un equipo del proyecto; la validación nocturna se revisó el 17/10/2026. Detalle en el documento de pruebas del repositorio del sistema." },
      ),
      ul(
        "**Alcance de los datos.** El E-01 integra hoy las notas, que son los únicos datos digitales del colegio. La asistencia y las incidencias tienen sus tablas, pero el colegio aún las lleva en papel (incidente IN-02).",
        "**Fechas inconsistentes.** Las notas no llevan fechas sueltas: cada una pertenece a un periodo del catálogo (mes o trimestre). La carga rechaza las que no tienen un periodo identificable.",
        "**Datos reales y datos de práctica.** Las pruebas se hicieron con la base real del colegio, que no se publica sin el consentimiento de los apoderados. El sistema en línea usa datos de práctica con la misma estructura.",
      ),
    ]),
    sec("3. Avance por paquete de trabajo", [
      tabla(
        ["Paquete", "Estado", "Avance", "Qué existe", "Qué falta para cumplir el criterio"],
        [20, 12, 8, 32, 28],
        PAQUETES.map((x) => {
          const [estado, pct, existe, falta] = AVANCE[x.id];
          return [`${x.id} ${x.nombre}`, c(estado, COLOR[estado], { bold: true, align: "center" }), c(pct === null ? "—" : `${pct} %`, undefined, { align: "center" }), existe, falta];
        }),
        {
          titulo: `Estado de los ${PAQUETES.length} paquetes de la EDT al ${P.fechaCorte}`,
          compacta: true,
          fuente: "Cumplido: cumple su criterio de aceptación. En curso: gestión que continúa todo el proyecto. Cumplido en parte: funciona y se puede mostrar, con su criterio cumplido en parte. Prototipo: versión inicial que aún no cumple el criterio. El avance es una estimación del equipo frente al criterio de cada paquete.",
        },
      ),
      tabla(
        ["Grupo de la EDT", "Avance"],
        [70, 30],
        [
          ...GRUPOS.map(([id, nombre]) => [`${id} ${nombre}`, c(`${promedio(delProducto.filter((x) => x.id.startsWith(id + ".")))} %`, undefined, { align: "center" })]),
          [c("Producto (paquetes 1.2 a 1.6)", "gris", { bold: true }), c(`${promedio(delProducto)} %`, "gris", { bold: true, align: "center" })],
        ],
        { titulo: "Avance por grupo", fuente: "Promedio simple de los paquetes de cada grupo." },
      ),
      tabla(
        ["Estado", "Paquetes"],
        [60, 40],
        [...["Cumplido", "En curso", "Cumplido en parte", "Prototipo", "No iniciado"].map((e) => [c(e, COLOR[e], { bold: true }), c(String(cuenta(e)), undefined, { align: "center" })]), [c("Total", "gris", { bold: true }), c(String(PAQUETES.length), "gris", { align: "center", bold: true })]],
        { titulo: "Resumen del avance" },
      ),
      p(
        "En lo técnico, el producto cubre lo previsto para los Sprints 1 a 3 y la mitad del Sprint 4. Lo que falta en esos sprints depende del colegio: la validación de las variables con los docentes, las exportaciones de Cubicol, la métrica acordada para el modelo y las pruebas con usuarios. Las fechas del cronograma se mantienen.",
      ),
    ]),
    sec("4. Qué es real y qué es de práctica", [
      tabla(
        ["Elemento", "Situación", "Detalle"],
        [28, 16, 56],
        [
          ["Base de datos, carga y reconciliación", c("Real", "verde", { bold: true, align: "center" }), "Probadas con la base consolidada de notas del colegio."],
          ["Validación automática de los datos", c("Real", "verde", { bold: true, align: "center" }), "Se ejecuta cada noche en GitHub Actions."],
          ["Modelo de riesgo", c("Real", "verde", { bold: true, align: "center" }), "Red neuronal entrenada y probada con una base pública y aplicada a los datos del colegio; sus métricas salen del entrenamiento."],
          ["Pantallas, reporte PDF y comunicado", c("Real", "verde", { bold: true, align: "center" }), "Funcionan en línea con la base de datos y el modelo."],
          ["Estudiantes y notas del sistema en línea", c("Práctica", "amarillo", { bold: true, align: "center" }), "135 estudiantes ficticios con la estructura de la base real. Los datos reales no se publican sin el consentimiento de los apoderados."],
          ["Alertas por correo, usuarios y roles", c("No hay", "gris", { bold: true, align: "center" }), "Corresponden al Sprint 4."],
        ],
        { titulo: "Lo que el sistema muestra de verdad" },
      ),
    ]),
    sec("5. Cambios desde el informe N.º 1", [
      ul(
        "Base de datos de 13 tablas, con la carga de la base consolidada del colegio, reconciliación y bitácora de cargas.",
        "Diez reglas de calidad y validación automática cada noche.",
        "Red neuronal entrenada y probada con una base pública, que reemplaza al modelo de demostración entrenado con datos sintéticos (incidente IN-03 cerrado).",
        "Interfaz rediseñada: inicio, aulas, estudiantes, ficha con informe y acciones, evaluación de un caso, modelo y datos.",
        "Reporte del estudiante en PDF, exportación por aula y comunicado al apoderado por WhatsApp del tutor.",
      ),
    ]),
    sec("6. Guion de la validación", [
      p("Duración: unos cinco minutos. Conviene abrir la página unos minutos antes, porque la API tarda cerca de un minuto en responder la primera vez."),
      ol(
        "**Ubicar el entregable.** Mostrar en la EDT los paquetes 1.2.1 y 1.2.2 y los criterios de REQ-01 y REQ-02 (sección 2).",
        "**Pantalla «Datos» del sistema.** Bitácora de cargas y reconciliación, las diez reglas de calidad con su resultado y el historial de validaciones.",
        "**Casos de prueba.** Recorrer la tabla de la sección 2 y su evidencia con la base real.",
        "**Validación nocturna.** Abrir las ejecuciones de GitHub Actions del repositorio del sistema: una por noche, sin fallas.",
        "**Los datos en uso.** Mostrar que esos datos alimentan el inicio, las aulas y la ficha del estudiante.",
        "**Avance por EDT.** Mostrar la tabla de la sección 3 y lo que sigue.",
      ),
    ]),
    sec("7. Qué sigue", [
      tabla(
        ["Qué", "Cuándo", "Paquete"],
        [56, 22, 22],
        [
          ["Pedido de las exportaciones de Cubicol a través del Product Owner", "20/10/2026", "1.2.1"],
          ["Completar 15 noches seguidas de validación sin fallas", "25/10/2026", "1.2.2"],
          ["Taller de validación de las variables y de la interfaz con docentes", "28/10/2026", "1.4.2.1"],
          ["Reconciliación en tres fechas con las cargas de Cubicol", "Sprint 2", "1.2.1"],
          [`Aceptación del E-01 por el Product Owner`, fmtIso(SPRINTS[1].revision), "1.2"],
        ],
        { titulo: "Próximos pasos" },
      ),
      nota("No se generan solicitudes de cambio a partir de este informe. El siguiente se emite al cierre del Sprint 1.", "info"),
    ]),
  ],
});
