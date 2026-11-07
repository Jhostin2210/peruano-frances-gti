// Dominio de Recursos: plan de gestión (REC-02), acta de constitución del equipo (REC-03), asignación de recursos
// (REC-04), desempeño del equipo (REC-05) y control de los recursos (REC-06). Datos en datos/gestion-recursos.mjs.

import { c, figura, h, kv, nota, p, sec, tabla, ul } from "../lib/bloques.mjs";
import { PROYECTO as P, R } from "../proyecto.mjs";
import { CAMBIOS } from "../datos/registros.mjs";
import {
  ASIGNACIONES_FISICAS,
  AUTOEVALUACION,
  AUTOEVALUACION_S1,
  COMPROBACION,
  CONTROL_FISICOS,
  COSTO_BENEFICIO,
  CRITERIOS_MCDA,
  DESVIACIONES,
  DISPONIBILIDAD,
  FODA,
  INDICADORES_S1,
  LIDERAZGO,
  LOGROS_S1,
  MCDA,
  RACI_COLUMNAS,
  REASIGNACION_SC12,
  RECOMENDACION_CB,
  RECONOCIMIENTO,
  RETROSPECTIVA_S1,
  ROLES_EQUIPO,
  TUCKMAN,
  asignacionesEquipo,
  calendarioRecursos,
  histograma,
  horasEnSprint,
  matrizRaci,
  semanasExcedidas,
} from "../datos/gestion-recursos.mjs";
import { EQUIPO } from "../datos/recursos.mjs";
import { DOC } from "./comunes.mjs";

const FECHA = "07/11/2026";
const centro = (x, fill, extra = {}) => c(String(x), fill, { align: "center", ...extra });
const n1 = (x) => String(Math.round(x * 10) / 10).replace(".", ",");
const SEM = { verde: "verde", amarillo: "amarillo", rojo: "rojo", gris: "gris" };
const comun = { dominio: "Recursos", carpeta: "05 - Recursos", version: "1.0", fecha: FECHA };
const inicial = (texto) => [["1.0", FECHA, texto, P.director]];

// ───────────────────────── REC-02 Plan de gestión de los recursos ─────────────────────────
export const REC02 = DOC({
  ...comun,
  id: "REC-02",
  titulo: "Plan de gestión de los recursos",
  archivo: "REC-02 Plan de gestión de los recursos",
  area: "Planificación",
  proceso: "Planificar la gestión de los recursos",
  salida: "Plan de gestión de los recursos",
  versiones: inicial("Versión inicial."),
  resumen:
    "Define cómo se identifican, obtienen, asignan, desarrollan, controlan y liberan los recursos del equipo y los recursos físicos del proyecto, con el organigrama, los roles y la matriz de responsabilidades.",
  secciones: [
    sec("1. Propósito y entradas", [
      p(
        "Este plan es parte del plan para la dirección del proyecto (GOB-04). Se elaboró con el acta de constitución (GOB-02), la línea base del alcance (ALC-02, EDT versión 4), el cronograma (CRO-01), los requisitos (ALC-03), el registro de interesados (INT-01) y el plan de calidad (ALC-01). El registro de riesgos aún no existe: los riesgos de recursos se anotan en la sección 10.",
      ),
    ]),
    sec("2. Identificación y adquisición de los recursos", [
      tabla(
        ["Tema", "Cómo se hace en el proyecto"],
        [26, 74],
        [
          ["Identificación", "Los recursos se calculan desde las actividades del cronograma y se suman por paquete de la EDT y por sprint (REC-01). Se revisan en la planificación de cada sprint."],
          ["Equipo del proyecto", "Preasignado: lo forma el curso (SC-01). No se incorpora personal (restricción R-03)."],
          ["Personal del colegio", "Se pide siempre a través del Product Owner, con una semana de anticipación (SC-11)."],
          ["Recursos físicos y servicios", "Software libre y planes gratuitos (restricción R-02), en cuentas del proyecto y no en cuentas personales (lección LA-10). Las asignaciones y el calendario están en REC-04."],
        ],
        { titulo: "Identificación y adquisición" },
      ),
    ]),
    sec("3. Organigrama del proyecto", [
      figura("organigrama.png", "Organigrama del proyecto", {
        fuente: "El Product Owner es el canal único con el personal del colegio. El director del proyecto y Scrum Master coordina al equipo de desarrollo.",
        altoMax: 300,
      }),
    ]),
    sec("4. Roles y responsabilidades", [
      tabla(
        ["Rol", "Responsabilidades", "Autoridad", "Competencias"],
        [22, 34, 26, 18],
        ROLES_EQUIPO.map((x) => [c([x.rol, x.persona], undefined, { bold: true }), x.responsabilidades.join("; ") + ".", x.autoridad, x.competencias]),
        { titulo: "Fichas de rol del equipo (formato orientado al texto)", compacta: true },
      ),
    ]),
    sec(
      "5. Matriz de asignación de responsabilidades (RACI)",
      [
        tabla(
          ["Paquete de la EDT", ...RACI_COLUMNAS],
          [28, 8, 8, 8, 8, 9, 10, 9, 12],
          matrizRaci().map((r) => [`${r.id} ${r.nombre}`, ...RACI_COLUMNAS.map((k) => centro(r.fila[k] || "", r.fila[k]?.includes("A") ? "azul" : r.fila[k]?.startsWith("R") ? "verde" : undefined, { bold: Boolean(r.fila[k]?.match(/R|A/)) }))]),
          {
            titulo: "Matriz RACI por paquete de la EDT",
            compacta: true,
            fuente: "R: encargado de hacer el trabajo (uno por paquete). A: rinde cuentas y acepta (uno por paquete): el Product Owner en el producto y el director en la gestión. C: consultado. I: informado.",
          },
        ),
      ],
      { apaisada: true },
    ),
    sec("6. Gestión, capacitación y desarrollo del equipo", [
      tabla(
        ["Tema", "Cómo se hace"],
        [26, 74],
        [
          ["Incorporación", "Acceso al repositorio, a la carpeta de Drive y lectura del acta del equipo (REC-03)."],
          ["Asignación", "En la planificación de cada sprint, según el cronograma y las horas disponibles (REC-04)."],
          ["Liberación", "Al cerrar su último paquete, cada integrante entrega sus archivos al repositorio y sus accesos al director."],
          ["Capacitación", "Protección de datos personales (Ley N.° 29733) para todos antes de cargar datos reales; MS Project en el laboratorio de la universidad; aprendizaje en pareja para scikit-learn y FastAPI."],
          ["Desarrollo del equipo", "Reunión diaria, revisión y retrospectiva de cada sprint, y evaluación del desempeño del equipo al final de cada sprint (REC-05)."],
        ],
        { titulo: "Gestión del equipo" },
      ),
      h("Estilos de liderazgo (teoría organizacional)"),
      tabla(["Estilo", "Cómo se usa"], [24, 76], LIDERAZGO.map((x) => [x.estilo, x.uso]), { titulo: "Estilos de liderazgo aplicados" }),
    ]),
    sec("7. Análisis FODA del equipo", [
      tabla(
        ["Fortalezas", "Debilidades"],
        [50, 50],
        [[FODA.fortalezas.map((x) => `• ${x}`), FODA.debilidades.map((x) => `• ${x}`)]],
        { titulo: "Análisis FODA del equipo del proyecto" },
      ),
      tabla(["Oportunidades", "Amenazas"], [50, 50], [[FODA.oportunidades.map((x) => `• ${x}`), FODA.amenazas.map((x) => `• ${x}`)]]),
      h("Estrategias"),
      ul(...FODA.estrategias),
    ]),
    sec("8. Control de los recursos físicos", [
      ul(
        "Inventario de servicios y cuentas en REC-04, con su responsable.",
        "Revisión semanal de los límites de los planes gratuitos; la hace el responsable del despliegue.",
        "Al cierre, las cuentas de los servicios se transfieren al colegio.",
      ),
    ]),
    sec("9. Plan de reconocimiento", [
      tabla(["Cuándo", "Cómo"], [26, 74], RECONOCIMIENTO.map((x) => [x.cuando, x.como]), { titulo: "Reconocimiento del equipo" }),
      p("El proyecto no tiene presupuesto: los reconocimientos no son monetarios."),
    ]),
    sec("10. Herramientas usadas y actualizaciones", [
      tabla(
        ["Herramienta", "Cómo se usó"],
        [30, 70],
        [
          ["Juicio de expertos", "El Product Owner, docente del colegio, indicó qué participación del personal del colegio es realista."],
          ["Entrevistas", "Entrevista a la Dirección (abril de 2026) y reunión de inicio (12/10/2026)."],
          ["Análisis FODA", "Sección 7."],
          ["Gráficos jerárquicos", "Organigrama (sección 3) y estructura de desglose de recursos (REC-01)."],
          ["Matriz de asignación de responsabilidades", "Matriz RACI (sección 5)."],
          ["Formatos orientados al texto", "Fichas de rol (sección 4)."],
          ["Teoría organizacional", "Estilos de liderazgo (sección 6)."],
          ["Reuniones", "Revisión y retrospectiva del Sprint 1 (06/11/2026)."],
        ],
        { titulo: "Herramientas y técnicas del proceso" },
      ),
      ul(
        "**Registro de supuestos (GOB-03, versión 1.2):** supuestos S-13 (dedicación del 50 %), S-14 (MS Project en el laboratorio) y S-15 (proyector y aula del colegio).",
        "**Riesgos de recursos** (para el registro de riesgos, cuando se desarrolle ese dominio): sobreasignación en los Sprints 2, 3 y 5; dependencia de una sola persona para el contacto con el colegio; arranque lento de la API en el plan gratuito.",
      ),
    ]),
  ],
});

// ───────────────────────── REC-03 Acta de constitución del equipo ─────────────────────────
export const REC03 = DOC({
  ...comun,
  id: "REC-03",
  titulo: "Acta de constitución del equipo",
  archivo: "REC-03 Acta de constitución del equipo",
  area: "Planificación",
  proceso: "Planificar la gestión de los recursos",
  salida: "Acta de constitución del equipo",
  versiones: inicial("Versión inicial, acordada por el equipo el 07/11/2026."),
  aprobacion: "Acordada por el equipo del proyecto",
  resumen: "Establece los valores, las pautas de comunicación, la forma de decidir y de resolver conflictos, las reglas de las reuniones y los acuerdos de trabajo del equipo.",
  secciones: [
    sec("1. Valores del equipo", [
      tabla(
        ["Valor", "Qué significa para nosotros"],
        [24, 76],
        [
          ["Respeto", "Escuchamos todas las opiniones y criticamos el trabajo, no a las personas."],
          ["Transparencia", "Decimos a tiempo lo que no vamos a poder cumplir y mostramos el avance real."],
          ["Responsabilidad compartida", "El resultado del sprint es de todos: si alguien se atrasa, el equipo ayuda."],
          ["Cuidado de los datos", "Los datos son de menores de edad: no salen de la carpeta privada ni se publican."],
          ["Aprendizaje", "Cada error se convierte en una lección aprendida registrada."],
        ],
        { titulo: "Valores" },
      ),
    ]),
    sec("2. Pautas de comunicación", [
      ul(
        "Grupo de WhatsApp del equipo para la coordinación diaria; respuesta en menos de 24 horas en días hábiles.",
        "Videollamada para la reunión diaria y las reuniones de sprint.",
        "Los acuerdos y entregables se guardan en el repositorio y en la carpeta de Drive del proyecto, no en conversaciones.",
        "El contacto con el colegio se hace solo a través del Product Owner.",
      ),
    ]),
    sec("3. Toma de decisiones", [
      tabla(
        ["Tipo de decisión", "Quién decide"],
        [40, 60],
        [
          ["Técnica, dentro de un paquete", "El responsable del paquete, después de consultar a quien corresponda."],
          ["Prioridad y aceptación del producto", "El Product Owner."],
          ["Gestión, cronograma y documentos", "El director del proyecto."],
          ["Cambios a las líneas base", "Solicitud de cambio (GOB-10); decide el Product Owner o la patrocinadora."],
          ["Sin acuerdo", "Se busca consenso en la reunión; si no lo hay, decide el director del proyecto."],
        ],
        { titulo: "Criterios de decisión" },
      ),
    ]),
    sec("4. Resolución de conflictos", [
      ul(
        "Primero, conversación directa entre los involucrados, dentro de las 48 horas.",
        "Si no se resuelve, media el Scrum Master en una reunión breve.",
        "Si sigue sin resolverse, decide el director del proyecto o el Product Owner, según el tema.",
        "Si el conflicto afecta al proyecto, se registra como incidente (GOB-06).",
      ),
    ]),
    sec("5. Pautas para reuniones", [
      tabla(
        ["Reunión", "Cuándo", "Duración", "Regla"],
        [26, 28, 14, 32],
        [
          ["Reunión diaria", "Lunes a viernes, desde el Sprint 2", "15 min", "Qué terminé, qué haré y qué me detiene."],
          ["Planificación del sprint", "Primer día del sprint", "1 h", "Se sale con el trabajo asignado."],
          ["Revisión del sprint", "Último día del sprint", "1 h", "Se muestra el entregable al Product Owner."],
          ["Retrospectiva", "Después de la revisión", "30 min", "Qué salió bien, qué mejorar y acciones."],
        ],
        { titulo: "Reuniones del equipo" },
      ),
      p("Puntualidad, agenda enviada antes y acuerdos anotados al final de cada reunión."),
    ]),
    sec("6. Acuerdos del equipo", [
      ul(
        "Avisar con 48 horas de anticipación si no se podrá cumplir una tarea.",
        "No subir datos personales de estudiantes al repositorio ni al blog.",
        "Declarar el uso de herramientas de inteligencia artificial y revisar todo lo que producen.",
        "Respetar el horario de clase del sábado: no se programa trabajo del proyecto.",
        "Anotar las horas trabajadas una vez por semana (acción de la retrospectiva del Sprint 1).",
      ),
      kv(["Acordada por", EQUIPO.join(", ")], ["Fecha de conformidad", "07/11/2026"]),
    ]),
  ],
});

// ───────────────────────── REC-04 Asignación de recursos y calendarios ─────────────────────────
const hBase = histograma();
const hSc12 = histograma(REASIGNACION_SC12);
const sc12 = CAMBIOS.find((x) => x.id === "SC-12");

export const REC04 = DOC({
  ...comun,
  id: "REC-04",
  titulo: "Asignación de recursos y calendarios de recursos",
  archivo: "REC-04 Asignación de recursos y calendarios",
  area: "Ejecución",
  proceso: "Adquirir recursos",
  salida: "Asignaciones del equipo y de los recursos físicos, calendarios de recursos y solicitudes de cambio",
  versiones: inicial("Versión inicial, al inicio del Sprint 2."),
  resumen: "Registra quién integra el equipo y qué recursos físicos y servicios tiene el proyecto, cuándo están disponibles y cómo se reparte la carga semana a semana.",
  secciones: [
    sec("1. Asignaciones del equipo del proyecto", [
      tabla(
        ["Integrante", "Rol", "Paquetes a su cargo (R)", "Forma de adquisición"],
        [20, 26, 22, 32],
        asignacionesEquipo().map((x) => [x.persona, x.rol, x.paquetes.join(", "), x.forma]),
        { titulo: "Asignaciones del equipo (del 12/10/2026 al 23/04/2027)", compacta: true },
      ),
      p("Técnicas: preasignación (el equipo y el Product Owner quedaron definidos antes de planificar) y equipo virtual (trabajo remoto con WhatsApp, videollamada, GitHub y Drive)."),
    ]),
    sec(
      "2. Asignaciones de recursos físicos y servicios",
      [
        tabla(
          ["Recurso (RBS)", "Lo provee", "Responsable", "Se necesita", "Estado al 07/11/2026", "Se libera"],
          [20, 15, 13, 16, 22, 14],
          ASIGNACIONES_FISICAS.map((x) => [`${x.recurso} (${x.rbs})`, x.provee, x.responsable, x.necesita, c(`${x.estado}. ${x.real}`, x.estado === "En uso" ? "verde" : x.estado === "Sin obtener" ? "rojo" : undefined), x.libera]),
          { titulo: "Asignaciones de recursos físicos y virtuales", compacta: true },
        ),
      ],
      { apaisada: true },
    ),
    sec("3. Calendarios de recursos", [
      ul(...DISPONIBILIDAD),
      tabla(
        ["Sprint", "Fechas", "Días hábiles", "Horas por integrante", "Feriados", "Personal del colegio"],
        [12, 22, 10, 12, 22, 22],
        calendarioRecursos().map((x) => [`${x.sprint} · ${x.nombre}`, x.fechas, centro(x.dias), centro(x.horasPorIntegrante), x.feriados.join("; ") || "—", x.colegio]),
        { titulo: "Calendario de recursos por sprint", compacta: true },
      ),
    ]),
    sec(
      "4. Histograma de recursos",
      [
        figura("histograma.png", "Histograma de recursos: horas por integrante y semana", {
          fuente: `Línea base del cronograma. ${semanasExcedidas(hBase).filter((x) => x.horas > x.capacidad * 1.1).length} semanas-integrante superan en más del 10 % lo disponible; los excesos pequeños se deben a la reunión diaria. Los picos semanales se absorben dentro del sprint; la carga se controla por sprint.`,
        }),
      ],
      { apaisada: true },
    ),
    sec("5. Nivelación del Sprint 2: análisis de decisiones con múltiples criterios", [
      p(`En el Sprint 2, ${R.jadira} tiene ${n1(horasEnSprint(hBase, R.jadira, 2))} horas asignadas frente a 80 disponibles. Se analizó a quién pasar dos de sus actividades sin mover fechas.`),
      tabla(["Criterio", "Peso"], [70, 30], CRITERIOS_MCDA.map((x) => [x.criterio, centro(`${x.peso * 100} %`)]), { titulo: "Criterios de selección" }),
      ...MCDA.map((m) =>
        tabla(
          ["Candidato", ...CRITERIOS_MCDA.map((x) => x.criterio), "Total", "Razón"],
          [16, 11, 11, 11, 9, 42],
          m.candidatos.map((x, i) => [x.persona, ...x.puntajes.map((v) => centro(v)), centro(n1(x.total), i === 0 ? "verde" : undefined, { bold: i === 0 }), x.razon]),
          { titulo: `${m.actividad} ${m.descripcion}`, compacta: true },
        ),
      ),
      tabla(
        ["Integrante", "Horas en el Sprint 2 (línea base)", "Con la SC-12", "Disponibles"],
        [34, 22, 22, 22],
        EQUIPO.map((x) => [x, centro(n1(horasEnSprint(hBase, x, 2)), horasEnSprint(hBase, x, 2) > 80 ? "rojo" : undefined), centro(n1(horasEnSprint(hSc12, x, 2)), horasEnSprint(hSc12, x, 2) > 80 ? "rojo" : "verde"), centro("80")]),
        { titulo: "Efecto de la reasignación", compacta: true, fuente: "Puntajes de 1 a 5 asignados por el director del proyecto; la decisión es del Product Owner." },
      ),
      nota(`Se presenta la solicitud de cambio ${sc12.id} «${sc12.titulo}» (GOB-10), en evaluación.`, "info"),
    ]),
    sec("6. Negociación y actualizaciones", [
      ul(
        "Con el colegio, a través del Product Owner: exportaciones 2 y 3 de Cubicol con fecha acordada, proyector y aula para el piloto y la capacitación.",
        "Estructura de desglose de recursos (REC-01, versión 1.1) y registro de supuestos (GOB-03, versión 1.2).",
        `Si se aprueba la ${sc12.id}, se actualizan los responsables de ${Object.keys(REASIGNACION_SC12).join(" y ")} en el cronograma (CRO-01).`,
      ),
    ]),
  ],
});

// ───────────────────────── REC-05 Evaluación del desempeño del equipo ─────────────────────────
export const REC05 = DOC({
  ...comun,
  id: "REC-05",
  titulo: "Evaluación del desempeño del equipo · Sprint 1",
  archivo: "REC-05 Evaluación del desempeño del equipo",
  area: "Ejecución",
  proceso: "Liderar al equipo",
  salida: "Evaluaciones del desempeño del equipo",
  versiones: inicial("Evaluación del Sprint 1 y retrospectiva del 06/11/2026."),
  resumen: "Evalúa el desempeño del equipo en el Sprint 1 con indicadores tomados de los registros del proyecto, la retrospectiva, la etapa del equipo y la autoevaluación de cada integrante.",
  secciones: [
    sec("1. Datos de la evaluación", [
      kv(["Sprint", "1 · Análisis y diseño (12/10/2026 al 06/11/2026)"], ["Revisión y retrospectiva", RETROSPECTIVA_S1.fecha], ["Evalúa", `${R.jhostin}, Scrum Master`], ["Fuente", "Registros del proyecto: actas, comunicaciones, cambios e incidentes"]),
    ]),
    sec("2. Indicadores del desempeño del equipo", [
      tabla(
        ["Indicador", "Meta", "Resultado", "Estado"],
        [36, 14, 34, 16],
        INDICADORES_S1.map((x) => [x.indicador, x.meta, x.resultado, centro(x.ok ? "Cumple" : "A mejorar", x.ok ? "verde" : "amarillo", { bold: true })]),
        { titulo: "Indicadores del Sprint 1" },
      ),
      p("No se registraron horas reales, por eso aún no se mide la productividad por hora. Desde el Sprint 2 cada integrante anota sus horas una vez por semana."),
    ]),
    sec("3. Retrospectiva del Sprint 1", [
      tabla(["Qué salió bien", "Qué mejorar"], [50, 50], [[RETROSPECTIVA_S1.bien.map((x) => `• ${x}`), RETROSPECTIVA_S1.mejorar.map((x) => `• ${x}`)]], { titulo: "Retrospectiva del 06/11/2026" }),
      tabla(["Acción", "Responsable", "Fecha"], [60, 22, 18], RETROSPECTIVA_S1.acciones.map((x) => [x.accion, x.responsable, x.fecha]), { titulo: "Acciones de mejora" }),
    ]),
    sec("4. Etapa del equipo (escalera de Tuckman)", [
      tabla(
        TUCKMAN.etapas,
        TUCKMAN.etapas.map(() => 20),
        [TUCKMAN.etapas.map((x) => (x === TUCKMAN.actual ? centro("Etapa actual", "verde", { bold: true }) : centro("")))],
        { titulo: "Escalera de Tuckman" },
      ),
      p(TUCKMAN.evidencia),
    ]),
    sec("5. Logros y reconocimiento", [
      tabla(["Integrante", "Logro del Sprint 1"], [26, 74], LOGROS_S1.map((x) => [x.persona, x.logro]), { titulo: "Logros a reconocer en el acta de la revisión" }),
    ]),
    sec("6. Autoevaluación del Sprint 1", [
      tabla(
        ["Afirmación (1 = nunca, 5 = siempre)", ...EQUIPO.map((x) => x.split(" ")[0]), "Promedio"],
        [36, 12, 12, 12, 12, 16],
        [
          ...AUTOEVALUACION.map((x, i) => {
            const v = EQUIPO.map((p) => AUTOEVALUACION_S1.puntajes[p][i]);
            return [x, ...v.map((n) => centro(n)), centro(n1(v.reduce((s, n) => s + n, 0) / v.length), "gris", { bold: true })];
          }),
          [
            c("Promedio", "gris", { bold: true }),
            ...EQUIPO.map((p) => centro(n1(AUTOEVALUACION_S1.puntajes[p].reduce((s, n) => s + n, 0) / 5), "gris", { bold: true })),
            centro(n1(Object.values(AUTOEVALUACION_S1.puntajes).flat().reduce((s, n) => s + n, 0) / 20), "verde", { bold: true }),
          ],
        ],
        { titulo: "Autoevaluación individual del Sprint 1 (07/11/2026)", compacta: true, fuente: "Cada integrante se calificó el 07/11/2026. Desde el Sprint 2 se repite al final de cada sprint y el promedio se comenta en la retrospectiva." },
      ),
      p("El punto más bajo del equipo es «Aprendí algo nuevo que aplico en el proyecto» (4,0): en el Sprint 2 conviene compartir en la reunión diaria lo que cada uno aprende de datos y de modelos."),
      ul("**Lecciones aprendidas (GOB-08, próxima versión):** pedir los datos al cliente con fecha de entrega comprometida y seguirlos cada semana; registrar las horas desde el primer sprint."),
    ]),
  ],
});

// ───────────────────────── REC-06 Informe de control de los recursos ─────────────────────────
export const REC06 = DOC({
  ...comun,
  id: "REC-06",
  titulo: "Informe de control de los recursos N.º 1",
  archivo: "REC-06 Informe de control de los recursos 01",
  area: "Monitoreo y control",
  proceso: "Monitorear y controlar los recursos",
  salida: "Información de desempeño del trabajo y solicitudes de cambio",
  versiones: inicial("Corte al 07/11/2026, al cerrar el Sprint 1."),
  resumen: "Compara el uso planificado y el uso real de los recursos físicos y virtuales al cierre del Sprint 1, analiza las desviaciones y la tendencia de la carga, y propone acciones correctivas.",
  secciones: [
    sec(
      "1. Uso planificado frente al real",
      [
        p("Este informe controla los recursos físicos y virtuales; el desempeño del equipo se evalúa en REC-05."),
        tabla(
          ["Recurso", "Planificado", "Real al 07/11/2026", "Estado"],
          [22, 22, 40, 16],
          CONTROL_FISICOS.map((x) => [x.recurso, x.planificado, x.real, centro(x.estado, SEM[x.semaforo], { bold: true })]),
          { titulo: "Recursos físicos y virtuales", compacta: true },
        ),
      ],
      { apaisada: true },
    ),
    sec("2. Desviaciones y resolución de problemas", [
      ...DESVIACIONES.map((d) => tabla(["Paso", "Aplicación"], [18, 82], d.pasos, { titulo: d.problema })),
    ]),
    sec("3. Análisis de tendencias", [
      ul(
        `Carga del equipo: con la línea base, ${semanasExcedidas(hBase).filter((x) => x.horas > x.capacidad * 1.1).length} semanas-integrante superan en más del 10 % lo disponible, concentradas en el Sprint 3 (${R.helber}) y en el Sprint 5 (todo el equipo). Se nivelan en la planificación de cada sprint.`,
        "Datos de Cubicol: faltan dos exportaciones antes del 04/12/2026; si se repite el retraso de la primera, se atrasa el E-01.",
        "Servicios: los planes gratuitos alcanzan para el desarrollo; la base de datos en la nube y el correo se activan recién en los Sprints 6 y 4.",
      ),
    ]),
    sec("4. Análisis costo-beneficio", [
      tabla(["Opción", "Costo", "Beneficio", "En contra"], [26, 14, 30, 30], COSTO_BENEFICIO.map((x) => [x.opcion, x.costo, x.beneficio, x.contra]), { titulo: "Velocidad de la API durante el piloto" }),
      p(`**Recomendación:** ${RECOMENDACION_CB}`),
    ]),
    sec("5. Acciones correctivas y solicitudes de cambio", [
      tabla(
        ["Acción", "Responsable", "Fecha"],
        [60, 22, 18],
        [
          [`Solicitud ${sc12.id}: nivelar la carga del Sprint 2 (REC-04).`, R.jhostin, "09/11/2026"],
          ["Pedir las exportaciones 2 y 3 de Cubicol con fecha de entrega acordada.", R.helber, "13/11/2026"],
          ["Abrir el cronograma en MS Project en el laboratorio de la universidad y guardar el .mpp.", R.jhostin, "Sprint 2"],
          ["Cerrar el incidente IN-01 (acceso a los datos de Cubicol) en la próxima versión del GOB-06.", R.carlos, "Sprint 2"],
        ],
        { titulo: "Acciones" },
      ),
    ]),
    sec("6. Comprobación de resultados del dominio", [
      tabla(
        ["Resultado esperado (PMBOK)", "Comprobación al 07/11/2026", "Estado"],
        [32, 50, 18],
        COMPROBACION.map((x) => [x.resultado, x.comprobacion, centro(x.estado, x.estado === "Se cumple" ? "verde" : x.estado === "Sin datos" ? "gris" : "amarillo", { bold: true })]),
        { titulo: "Comprobación de resultados del dominio de los recursos" },
      ),
    ]),
  ],
});

export const DOCS_GESTION_RECURSOS = [REC02, REC03, REC04, REC05, REC06];
