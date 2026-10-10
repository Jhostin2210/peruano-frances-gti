// Monitorear y controlar el alcance: avance del producto frente a la EDT.
// ALC-05 compara lo que existe hoy (el prototipo) con cada paquete de trabajo y prepara la demostración.

import { c, kv, nota, ol, p, sec, tabla, ul } from "../lib/bloques.mjs";
import { PROYECTO as P } from "../proyecto.mjs";
import { SPRINTS, fmtIso } from "../datos/calendario.mjs";
import { PAQUETES } from "../datos/requisitos.mjs";
import { DOC } from "./comunes.mjs";

// Estado de cada paquete al 10/10/2026, según la revisión del repositorio del sistema.
// Cumplido: cumple su criterio de aceptación. En curso: trabajo de gestión que continúa todo el proyecto.
// Prototipo: existe una versión de demostración que aún no cumple el criterio. No iniciado: sin trabajo.
const AVANCE = {
  "1.1.1": ["Cumplido", "Línea base del cronograma, versión 3 (CRO-01).", "Mantenerlo actualizado ante cada cambio."],
  "1.1.2": ["En curso", "Informe de desempeño N.º 1 (GOB-09).", "Un informe al cierre de cada sprint."],
  "1.1.3": ["En curso", "Registro de cambios con 10 solicitudes (GOB-10).", "Actas de las reuniones desde el inicio."],
  "1.2.1": ["Prototipo", "Esquema de la base de datos con ocho tablas. La carga de datos está esbozada y la base está vacía.", "Cargar las exportaciones de Cubicol y reconciliarlas."],
  "1.2.2": ["No iniciado", "—", "Limpieza y reporte de calidad de los datos reales."],
  "1.3.1": ["Prototipo", "Modelo Random Forest de demostración, entrenado con un conjunto de datos sintético.", "Entrenarlo con datos reales del colegio."],
  "1.3.2": ["Prototipo", "La API calcula el riesgo de un caso y lo clasifica en tres niveles.", "Ejecución semanal automática para todos los estudiantes."],
  "1.3.3": ["No iniciado", "No hay métricas reales: las que mostraba el prototipo se retiraron.", "Validar con datos que el modelo no vio (SC-08)."],
  "1.4.1": ["Prototipo", "Lista de alertas en pantalla para los niveles medio y alto.", "Envío por correo, historial y registro de seguimiento."],
  "1.4.2.1": ["Demostrable", "Prototipo navegable en línea: inicio, estudiantes, riesgos y simulador.", "Mostrarlo a los docentes y recoger sus observaciones."],
  "1.4.2.2": ["Prototipo", "Tablero, lista y ficha del estudiante conectados a la API, con datos de ejemplo.", "Datos reales, filtros por nivel educativo y reportes exportables."],
  "1.4.2.3": ["No iniciado", "—", "Pruebas con al menos tres docentes."],
  "1.4.3": ["No iniciado", "La tabla de usuarios está en el esquema; no hay ingreso con usuario y contraseña.", "Autenticación y vistas por rol."],
  "1.5.1": ["Prototipo", "Entorno de demostración en línea (página y API).", "Entorno de producción con base de datos gestionada y tarea programada (GOB-05)."],
  "1.5.2": ["No iniciado", "—", "Manual de usuario."],
  "1.5.3": ["No iniciado", "Guía de instalación en el repositorio del sistema.", "Manual técnico completo."],
  "1.5.4": ["No iniciado", "—", "Plan de capacitación."],
  "1.5.5": ["No iniciado", "—", "Capacitación y cierre."],
  "1.6.1": ["No iniciado", "—", "Pruebas de integración y rendimiento."],
  "1.6.2": ["No iniciado", "—", "Piloto con tres docentes tutores."],
};
const COLOR = { Cumplido: "verde", "En curso": "azul", Demostrable: "teal", Prototipo: "amarillo", "No iniciado": "gris" };
const cuenta = (estado) => PAQUETES.filter((x) => AVANCE[x.id][0] === estado).length;
const SISTEMA = P.enlaces;

export const ALC05 = DOC({
  id: "ALC-05",
  titulo: "Informe de avance del producto por EDT N.º 1",
  archivo: "ALC-05 Avance del producto por EDT 01",
  carpeta: "03 - Alcance/3.5 Controlar el alcance",
  dominio: "Alcance",
  area: "Monitoreo y control",
  proceso: "Monitorear y controlar el alcance",
  salida: "Información de desempeño del trabajo y entregables verificados",
  resumen:
    "Compara lo que existe hoy del sistema con cada paquete de trabajo de la EDT, separa lo real de lo que es demostración y prepara la presentación del entregable al docente asesor.",
  secciones: [
    sec("1. Propósito y corte", [
      p(
        `Monitorear y controlar el alcance es comparar el trabajo hecho con la línea base. Fecha de corte: ${P.fechaEmision}. Los sprints del proyecto empiezan el ${P.inicio}, así que lo que se mide aquí es el punto de partida del producto: el prototipo heredado de la fase de formulación, con los ajustes aplicados el ${P.fechaEmision}.`,
      ),
      kv(
        ["Página del prototipo", SISTEMA.prototipo],
        ["API del prototipo", SISTEMA.api],
        ["Repositorio del sistema", SISTEMA.repoSistema],
      ),
    ]),
    sec("2. Avance por paquete de trabajo", [
      tabla(
        ["Paquete", "Estado", "Qué existe hoy", "Qué falta para cumplir el criterio"],
        [22, 12, 34, 32],
        PAQUETES.map((x) => {
          const [estado, existe, falta] = AVANCE[x.id];
          return [`${x.id} ${x.nombre}`, c(estado, COLOR[estado], { bold: true, align: "center" }), existe, falta];
        }),
        {
          titulo: `Estado de los ${PAQUETES.length} paquetes de la EDT al ${P.fechaEmision}`,
          compacta: true,
          fuente: "Cumplido: cumple su criterio de aceptación. En curso: gestión que continúa todo el proyecto. Demostrable: se puede mostrar, con su criterio cumplido en parte. Prototipo: versión de demostración que aún no cumple el criterio.",
        },
      ),
      tabla(
        ["Estado", "Paquetes"],
        [60, 40],
        [...["Cumplido", "En curso", "Demostrable", "Prototipo", "No iniciado"].map((e) => [c(e, COLOR[e], { bold: true }), c(String(cuenta(e)), undefined, { align: "center" })]), [c("Total", "gris", { bold: true }), c(String(PAQUETES.length), "gris", { align: "center", bold: true })]],
        { titulo: "Resumen del avance" },
      ),
      p(
        "El avance coincide con el cronograma: los paquetes de datos corresponden al Sprint 2, los del modelo al Sprint 3 y los de alertas y tablero al Sprint 4. En interfaz el producto está adelantado, porque el prototipo se construyó en la fase de formulación.",
      ),
    ]),
    sec("3. Entregable que se demuestra", [
      kv(
        ["Paquete de la EDT", "1.4.2.1 Diseño de la interfaz, con avance del 1.4.2.2 Desarrollo del tablero"],
        ["Entregable", "Prototipo validado"],
        ["Criterio de aceptación", "Maquetas aprobadas por el equipo y mostradas a docentes antes de desarrollar."],
        ["Situación del criterio", "Cumplido en parte: el equipo lo aprobó; falta mostrarlo a los docentes y recoger sus observaciones."],
        ["Evidencia", "Prototipo navegable en línea, conectado a la API, con el simulador usando el modelo."],
      ),
      p(
        "Se eligió este paquete porque es el único cuyo resultado se puede mostrar funcionando hoy sin presentar como terminado algo que no lo está.",
      ),
    ]),
    sec("4. Qué es real y qué es demostración", [
      tabla(
        ["Elemento", "Situación", "Detalle"],
        [28, 18, 54],
        [
          ["Pantallas y navegación", c("Real", "verde", { bold: true, align: "center" }), "Inicio, estudiantes, ficha, riesgos y simulador funcionan."],
          ["Conexión de la página con la API", c("Real", "verde", { bold: true, align: "center" }), "La página consulta la API en línea y muestra de dónde vienen los datos."],
          ["Cálculo del riesgo en el simulador", c("Real", "verde", { bold: true, align: "center" }), "Lo calcula el modelo cargado en la API, no una regla escrita en la página."],
          ["Tres niveles de riesgo", c("Real", "verde", { bold: true, align: "center" }), "Bajo, medio y alto, como define el alcance. Los cortes son provisionales."],
          ["Estudiantes y notas", c("Ejemplo", "amarillo", { bold: true, align: "center" }), "Cinco estudiantes ficticios. La base de datos está vacía."],
          ["Modelo", c("Demostración", "amarillo", { bold: true, align: "center" }), "Entrenado con datos sintéticos: no demuestra capacidad de predicción (SC-08)."],
          ["Gráfico de tendencia", c("Ilustrativo", "amarillo", { bold: true, align: "center" }), "No hay historial real de alertas."],
          ["Métricas del modelo", c("No hay", "gris", { bold: true, align: "center" }), "Se publicarán cuando el modelo se valide con datos reales."],
          ["Alertas por correo, usuarios y roles", c("No hay", "gris", { bold: true, align: "center" }), "Corresponden al Sprint 4."],
        ],
        { titulo: "Lo que la demostración muestra de verdad" },
      ),
      nota("La página lleva un rótulo permanente de «Demostración» que dice lo mismo que esta tabla.", "info"),
    ]),
    sec("5. Ajustes aplicados al prototipo", [
      p(`Para que la demostración coincida con la documentación, el ${P.fechaEmision} se aplicaron estos ajustes en el repositorio del sistema:`),
      ul(
        "La página consulta la API en línea; antes apuntaba a una dirección local y mostraba datos fijos.",
        "El simulador pide el cálculo al modelo de la API; si la API no responde, lo dice y no presenta el resultado como si fuera del modelo.",
        "Tres niveles de riesgo en la página y en la API (solicitud de cambio SC-04).",
        "Rótulo visible de demostración y de origen de los datos.",
        "La API ya no devuelve métricas por defecto y tiene una consulta de estado que informa qué es real y qué es de ejemplo (incidente IN-03).",
        "Guía del repositorio con el estado real del sistema.",
      ),
      p("No se cambió el modelo ni se agregaron datos: eso corresponde a los Sprints 2 y 3."),
    ]),
    sec("6. Guion de la demostración", [
      p("Duración: unos cinco minutos. Conviene abrir la página unos minutos antes, porque la API tarda cerca de un minuto en responder la primera vez."),
      ol(
        "**Ubicar el entregable.** Mostrar en la EDT el paquete 1.4.2.1 y su criterio de aceptación.",
        "**Panel principal.** Señalar el rótulo de demostración y explicar qué es de ejemplo. Mostrar la distribución por nivel de riesgo y las alertas.",
        "**Estudiantes.** Filtrar por nivel de riesgo y abrir la ficha de un estudiante.",
        "**Simulador.** Ingresar notas bajas y varias inasistencias: el modelo de la API devuelve riesgo alto y los factores. Cambiar a notas altas: devuelve riesgo bajo.",
        "**Estado de la API.** Abrir la consulta de estado: origen de los datos «ejemplo», modelo cargado y tres niveles.",
        "**Avance por EDT.** Mostrar la tabla de la sección 2 y lo que sigue en el cronograma.",
      ),
    ]),
    sec("7. Qué sigue", [
      tabla(
        ["Sprint", "Cierre", "Qué cambia en el producto"],
        [26, 16, 58],
        [
          ["Sprint 1 · Análisis y diseño", fmtIso(SPRINTS[0].revision), "Variables validadas con los docentes y arquitectura definitiva. El prototipo se muestra a los docentes."],
          ["Sprint 2 · Gestión y datos", fmtIso(SPRINTS[1].revision), "Base de datos con notas reales del colegio; la página deja de usar datos de ejemplo."],
          ["Sprint 3 · Modelo ML", fmtIso(SPRINTS[2].revision), "Modelo entrenado y validado con datos reales; se publican sus métricas."],
          ["Sprint 4 · Alertas y tablero", fmtIso(SPRINTS[3].revision), "Alertas por correo, reportes y acceso por rol."],
        ],
        { titulo: "Próximos cambios del producto según el cronograma" },
      ),
      p("No se generan solicitudes de cambio a partir de este informe. El siguiente se emite al cierre del Sprint 1."),
    ]),
  ],
});
