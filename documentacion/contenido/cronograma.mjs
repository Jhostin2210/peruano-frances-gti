// Dominio de Cronograma: línea base del cronograma, versión 3.
// Mantiene las 44 actividades y su estimación PERT; cambian el equipo, las fechas y el calendario.

import { c, h, nota, p, sec, tabla, ul } from "../lib/bloques.mjs";
import { PROYECTO as P, R } from "../proyecto.mjs";
import { ACTIVIDADES } from "../datos/actividades.mjs";
import { FERIADOS, RECESO, SPRINTS, TOTALES as T, fmt, fmtIso, programar } from "../datos/calendario.mjs";
import { DOC, tablaFeriados, tablaHitos, tablaSprints } from "./comunes.mjs";

const prog = programar();
const n1 = (x) => x.toFixed(1);
const n2 = (x) => x.toFixed(2);
const deSprint = (n) => prog.filter((a) => a.sprint === n);
const conPert = (lista) => lista.filter((a) => !a.continua);

const tablaActividades = (s) => {
  const lista = deSprint(s.n);
  const pert = conPert(lista);
  return tabla(
    ["ID", "Actividad", "Responsable", "Sem.", "Inicio", "Fin", "To", "Tm", "Tp", "Te", "σ", "RC"],
    [8, 33, 15, 6, 8, 8, 3.5, 3.5, 3.5, 4, 4, 3.5],
    [
      ...lista.map((a) => [
        a.id,
        a.descripcion,
        a.responsable,
        c(a.semana, undefined, { align: "center" }),
        c(fmt(a.inicio), undefined, { align: "center" }),
        c(fmt(a.fin), undefined, { align: "center" }),
        c(String(a.to), undefined, { align: "center" }),
        c(String(a.tm), undefined, { align: "center" }),
        c(String(a.tp), undefined, { align: "center" }),
        c(a.continua ? "—" : n1(a.te), undefined, { align: "center", bold: true }),
        c(a.continua ? "—" : n2(a.sigma), undefined, { align: "center" }),
        a.isCritical ? c("Sí", "rojo", { align: "center", bold: true }) : c("", undefined, { align: "center" }),
      ]),
      [
        c("", "gris"),
        c(`Sprint ${s.n}: ${pert.length} actividades`, "gris", { bold: true }),
        c("", "gris"),
        c("", "gris"),
        c(fmtIso(s.inicio), "gris", { align: "center", bold: true }),
        c(fmtIso(s.revision), "gris", { align: "center", bold: true }),
        c("", "gris"),
        c("", "gris"),
        c("", "gris"),
        c(n1(s.te), "gris", { align: "center", bold: true }),
        c(n2(s.sigma), "gris", { align: "center", bold: true }),
        c(String(pert.filter((a) => a.isCritical).length), "gris", { align: "center", bold: true }),
      ],
    ],
    { titulo: `Sprint ${s.n} · ${s.nombre} (semanas ${s.semanas[0]} a ${s.semanas[1]})`, compacta: true },
  );
};

// Gantt por semanas: una fila por grupo de actividades.
const GRUPOS = [
  ["A-0.1.1", "Análisis y diseño"],
  ["A-1.1.1", "Organización del trabajo Scrum"],
  ["A-1.2.1", "Seguimiento y reunión diaria"],
  ["A-2.1.1", "Integración de datos"],
  ["A-2.2.1", "Calidad de datos"],
  ["A-3.1.1", "Entrenamiento del modelo"],
  ["A-3.2.1", "Validación y clasificación de riesgo"],
  ["A-4.1.1", "Motor de alertas"],
  ["A-4.2.1", "Tablero web y accesos"],
  ["A-5.0.1", "Pruebas de integración y rendimiento"],
  ["A-5.0.2", "Piloto con docentes"],
  ["A-5.1.1", "Despliegue y pruebas de aceptación"],
  ["A-5.2.1", "Manuales, capacitación y cierre"],
];
const SEMANAS = Array.from({ length: 24 }, (_, i) => i + 1);
const filaGantt = ([prefijo, nombre]) => {
  const lista = prog.filter((a) => a.id.startsWith(`${prefijo}.`));
  const critico = lista.some((a) => a.isCritical);
  const ocupa = (k) => lista.some((a) => k >= a.semanasNum[0] && k <= a.semanasNum[1]);
  const celda = (k) => (ocupa(k) ? c("", critico ? "rojo" : "teal") : "");
  return [nombre, ...SEMANAS.slice(0, 16).map(celda), c("", "gris"), ...SEMANAS.slice(16).map(celda)];
};
const filaHitos = [
  c("Revisión del sprint (hito)", undefined, { bold: true }),
  ...SEMANAS.slice(0, 16).map((k) => (k % 4 === 0 ? c("◆", "navy", { align: "center", bold: true }) : "")),
  c("", "gris"),
  ...SEMANAS.slice(16).map((k) => (k % 4 === 0 ? c("◆", "navy", { align: "center", bold: true }) : "")),
];
const z = (T.diasHabiles - T.teCritica) / T.sigmaCritica;

// Ejercicio del curso anterior: valor ganado supuesto por sprint, en días.
const SIMULACION = [[1, 16.0], [2, 31.7], [3, 27.5], [4, 31.3], [5, 19.0], [6, 29.0]];

export const CRO01 = DOC({
  id: "CRO-01",
  titulo: "Línea base del cronograma",
  archivo: "CRO-01 Línea base del cronograma",
  carpeta: "04 - Cronograma",
  dominio: "Cronograma",
  area: "Planificación",
  proceso: "Desarrollar el cronograma",
  salida: "Plan de gestión del cronograma, línea base del cronograma y cronograma de hitos",
  version: "3.0",
  versiones: [
    ["1.0", "2026 (curso anterior)", "Cronograma inicial de cuatro sprints.", "Equipo anterior"],
    ["2.0", "2026 (curso anterior)", "Seis sprints y 24 semanas: se agregan el sprint de análisis y el de pruebas y piloto.", "Equipo anterior"],
    ["3.0", P.fechaEmision, "Nuevo equipo (SC-01), nuevo calendario con receso en febrero (SC-02), despliegue en la nube (SC-03) y totales corregidos (SC-06).", P.director],
  ],
  resumen:
    `Programa las ${T.actividades} actividades del proyecto y la reunión diaria en seis sprints, del ${P.inicio} al ${P.fin}, con receso en febrero por vacaciones escolares. Mantiene la estimación PERT de la versión 2 y actualiza equipo, fechas y totales.`,
  secciones: [
    sec("1. Cambios respecto de la versión 2", [
      tabla(
        ["Tema", "Versión 2", "Versión 3", "Cambio"],
        [18, 32, 38, 12],
        [
          ["Periodo", "El documento y sus anexos tenían tres calendarios: marzo a agosto de 2026, agosto de 2026 a enero de 2027, y octubre de 2026 a abril de 2027.", `Un solo calendario: del ${P.inicio} al ${P.fin}.`, "SC-02"],
          ["Receso", "Sin receso: el piloto con docentes caía en vacaciones escolares.", `Receso del ${fmtIso(RECESO.inicio)} al ${fmtIso(RECESO.fin)}; el piloto pasa a marzo de 2027.`, "SC-02"],
          ["Equipo", "Integrantes del curso anterior.", "Equipo actual; paquetes reasignados.", "SC-01"],
          ["Despliegue", "Configurar un servidor en el colegio.", "Configurar el entorno de producción en la nube (A-5.1.1.1).", "SC-03"],
          ["Número de actividades", "El texto decía 40.", `${T.actividades} actividades con estimación PERT y una reunión diaria continua.`, "SC-06"],
          ["Totales PERT", "Desviaciones por sprint y número de actividades críticas que no coincidían con la tabla.", "Totales recalculados desde la tabla de actividades.", "SC-06"],
          ["Control con valor ganado", "Redactado como si fuera el resultado real.", "Presentado como ejercicio de simulación.", "—"],
        ],
        { titulo: "Diferencias entre la versión 2 y la versión 3", compacta: true },
      ),
      p("No cambian las actividades, su secuencia ni sus tres estimaciones de duración."),
    ]),
    sec("2. Plan de gestión del cronograma", [
      tabla(
        ["Aspecto", "Definición"],
        [28, 72],
        [
          ["Método de programación", "Seis sprints de cuatro semanas (Scrum) dentro de una línea base predictiva; ruta crítica para identificar las actividades sin holgura."],
          ["Estimación", "Tres valores por actividad (optimista, más probable y pesimista) y duración esperada PERT: Te = (To + 4·Tm + Tp) / 6. Desviación estándar: σ = (Tp − To) / 6."],
          ["Unidad", "Días hábiles, de lunes a viernes. No se trabaja en feriados."],
          ["Herramientas", "MS Project para la red y el diagrama de Gantt; tablero de tareas para el trabajo del sprint."],
          ["Nivel de detalle", "Actividades de uno a siete días, asignadas a una semana o a un rango de semanas."],
          ["Actualización", "El avance se registra cada semana y se consolida al cierre de cada sprint."],
          ["Umbrales de control", "SPI de 1.00 o más: verde. Entre 0.90 y 0.99: amarillo. Menos de 0.90: rojo; se evalúa una solicitud de cambio."],
          ["Reservas", "Holgura de los sprints frente a los días hábiles disponibles y una semana de reserva de gestión al final del receso (22 al 26 de febrero de 2027)."],
          ["Cambios", "Mover la fecha de un hito requiere una solicitud de cambio (GOB-10)."],
        ],
        { titulo: "Reglas para gestionar el cronograma" },
      ),
    ]),
    sec("3. Calendario del proyecto", [
      tablaSprints(),
      tablaFeriados(),
      p(
        `El proyecto tiene ${T.semanas} semanas de trabajo, que equivalen a ${T.diasHabiles} días hábiles después de descontar los ${FERIADOS.length} feriados. Entre el Sprint 4 y el Sprint 5 hay un receso de cuatro semanas (${fmtIso(RECESO.inicio)} al ${fmtIso(RECESO.fin)}) porque el colegio está de vacaciones y no hay docentes para las pruebas ni para el piloto.`,
      ),
    ]),
    sec(
      "4. Lista de actividades y estimación PERT",
      [
        p(
          "Duraciones en días hábiles. To: optimista. Tm: más probable. Tp: pesimista. Te: duración esperada. σ: desviación estándar. RC: actividad de la ruta crítica. Las fechas de inicio y fin se asignan dentro de la semana indicada, según la duración esperada.",
        ),
        ...SPRINTS.map(tablaActividades),
      ],
      { apaisada: true },
    ),
    sec("5. Resumen de la estimación", [
      tabla(
        ["Sprint", "Actividades", "Te (días)", "σ (días)", "En ruta crítica", "Agregadas en la v2"],
        [34, 13, 13, 13, 14, 13],
        [
          ...SPRINTS.map((s) => {
            const lista = conPert(deSprint(s.n));
            return [
              `Sprint ${s.n} · ${s.nombre}`,
              c(String(lista.length), undefined, { align: "center" }),
              c(n1(s.te), undefined, { align: "center" }),
              c(n2(s.sigma), undefined, { align: "center" }),
              c(String(lista.filter((a) => a.isCritical).length), undefined, { align: "center" }),
              c(String(lista.filter((a) => a.isNew).length), undefined, { align: "center" }),
            ];
          }),
          [
            c("Total", "gris", { bold: true }),
            c(String(T.actividades), "gris", { align: "center", bold: true }),
            c(n1(T.te), "gris", { align: "center", bold: true }),
            c(n2(T.sigma), "gris", { align: "center", bold: true }),
            c(String(T.criticas), "gris", { align: "center", bold: true }),
            c(String(ACTIVIDADES.filter((a) => a.isNew).length), "gris", { align: "center", bold: true }),
          ],
        ],
        {
          titulo: "Resumen PERT por sprint",
          fuente: "La desviación estándar de cada sprint y la del total son la raíz cuadrada de la suma de las varianzas de sus actividades. La reunión diaria no se incluye en los totales.",
        },
      ),
      p(
        `La suma de las duraciones esperadas es de ${n1(T.te)} días. No es la duración del proyecto: varias actividades se hacen en paralelo, a cargo de distintos integrantes.`,
      ),
      p(
        `La ruta crítica reúne ${T.criticas} actividades que suman ${n1(T.teCritica)} días, con una desviación estándar de ${n2(T.sigmaCritica)} días. Frente a los ${T.diasHabiles} días hábiles disponibles queda una holgura de ${n1(T.diasHabiles - T.teCritica)} días. Con la aproximación normal de PERT (z = ${n2(z)}), la probabilidad de terminar la ruta crítica dentro del plazo es superior al 99 %. Esa cifra solo considera la incertidumbre de las duraciones; no incluye los riesgos de datos y de adopción descritos en el acta de constitución.`,
      ),
      ul(
        "El Sprint 1 no tiene actividades críticas: es de análisis y su resultado condiciona el resto, pero sus actividades tienen holgura dentro del sprint.",
        "El Sprint 5 es crítico completo: las pruebas y el piloto dependen de que haya clases y de que tres docentes participen.",
      ),
    ]),
    sec("6. Cronograma de hitos", [tablaHitos("Cronograma de hitos")]),
    sec(
      "7. Diagrama de Gantt por semanas",
      [
        tabla(
          ["Grupo de actividades", ...SEMANAS.slice(0, 16).map(String), "R", ...SEMANAS.slice(16).map(String)],
          [25, ...Array(25).fill(3)],
          [...GRUPOS.map(filaGantt), filaHitos],
          {
            titulo: "Diagrama de Gantt resumido (semanas 1 a 24)",
            compacta: true,
            fuente: "Rojo: grupo con actividades de la ruta crítica. Verde azulado: grupo sin actividades críticas. R: receso de febrero. ◆: revisión del sprint. Las fechas de cada semana están en el calendario de sprints (sección 3). El diagrama de red y el Gantt detallado se elaboraron en MS Project.",
          },
        ),
      ],
      { apaisada: true },
    ),
    sec("8. Asignación por integrante", [
      tabla(
        ["Integrante", "Rol", "Actividades a cargo", "Sprints de mayor carga"],
        [20, 34, 18, 28],
        [
          [R.jhostin, P.equipo[0].rol, cuenta(R.jhostin), sprintsDe(R.jhostin)],
          [R.helber, P.equipo[1].rol, cuenta(R.helber), sprintsDe(R.helber)],
          [R.carlos, P.equipo[2].rol, cuenta(R.carlos), sprintsDe(R.carlos)],
          [R.jadira, P.equipo[3].rol, cuenta(R.jadira), sprintsDe(R.jadira)],
          [R.equipo, "Actividades compartidas por los cuatro integrantes", cuenta(R.equipo), sprintsDe(R.equipo)],
        ],
        {
          titulo: "Actividades por responsable",
          fuente: "Una actividad con dos responsables se cuenta para ambos. El análisis de carga y la nivelación de recursos corresponden al dominio de Recursos.",
        },
      ),
    ]),
    sec("9. Monitoreo y control del cronograma", [
      h("Cómo se controla"),
      ul(
        "**Cada día.** En la reunión diaria, cada integrante dice qué terminó, qué hará y qué lo detiene.",
        "**Cada semana.** Se actualiza el avance de las actividades y el gráfico de trabajo pendiente del sprint.",
        "**Cada sprint.** Se calcula el valor ganado en días de trabajo y se informa en el informe de desempeño (GOB-09 y siguientes).",
      ),
      tabla(
        ["Indicador", "Fórmula", "Lectura"],
        [30, 30, 40],
        [
          ["Valor planificado (PV)", "Te de las actividades programadas a la fecha", "Lo que debía estar hecho."],
          ["Valor ganado (EV)", "Te de las actividades terminadas", "Lo que está hecho."],
          ["Variación del cronograma (SV)", "EV − PV", "Negativa: retraso."],
          ["Índice de desempeño (SPI)", "EV / PV", "Menor de 1.00: retraso."],
        ],
        { titulo: "Indicadores del cronograma" },
      ),
      h("Estado real"),
      p(
        `Al ${P.fechaEmision} el proyecto no ha iniciado su ejecución: el valor planificado y el valor ganado son cero. La primera medición real se hará en la revisión del Sprint 1, el ${fmtIso(SPRINTS[0].revision)}.`,
      ),
      h("Ejercicio de simulación"),
      nota(
        "La tabla siguiente es un ejercicio elaborado en el curso anterior para practicar el cálculo del valor ganado. Sus valores son supuestos: no describen lo ocurrido en el proyecto ni son un pronóstico.",
        "simulado",
      ),
      tabla(
        ["Sprint", "PV (días)", "EV supuesto (días)", "SV", "SPI", "Semáforo"],
        [34, 13, 17, 10, 10, 16],
        [
          ...SIMULACION.map(([n, ev]) => {
            const s = SPRINTS[n - 1];
            const spi = ev / s.te;
            return filaSim(`Sprint ${s.n} · ${s.nombre}`, s.te, ev, spi);
          }),
          filaSim("Total", T.te, SIMULACION.reduce((t, [, ev]) => t + ev, 0), SIMULACION.reduce((t, [, ev]) => t + ev, 0) / T.te, true),
        ],
        { titulo: "Simulación del control con valor ganado (valores supuestos)" },
      ),
      p(
        "En el ejercicio, tres sprints quedan en amarillo y el proyecto cierra con un SPI de 0.97, dentro del umbral. Sirve para mostrar cómo se leerán los indicadores cuando haya datos reales. Las solicitudes de cambio que acompañaban al ejercicio en la versión 2 también eran supuestas y no forman parte del registro de cambios (GOB-10).",
      ),
    ]),
  ],
});

function cuenta(nombre) {
  return c(String(ACTIVIDADES.filter((a) => a.responsable.split(" + ").includes(nombre)).length), undefined, { align: "center" });
}

function sprintsDe(nombre) {
  const porSprint = SPRINTS.map((s) => [s.n, ACTIVIDADES.filter((a) => a.sprint === s.n && a.responsable.split(" + ").includes(nombre)).length]);
  const max = Math.max(...porSprint.map(([, n]) => n));
  return porSprint
    .filter(([, n]) => n === max && n > 0)
    .map(([s]) => `Sprint ${s}`)
    .join(" y ");
}

function filaSim(nombre, pv, ev, spi, total = false) {
  const color = spi >= 1 ? "verde" : spi >= 0.9 ? "amarillo" : "rojo";
  const fill = total ? "gris" : undefined;
  return [
    c(nombre, fill, { bold: total }),
    c(n1(pv), fill, { align: "center", bold: total }),
    c(n1(ev), fill, { align: "center", bold: total }),
    c(n1(ev - pv), fill, { align: "center", bold: total }),
    c(n2(spi), fill, { align: "center", bold: total }),
    c(spi >= 1 ? "Verde" : spi >= 0.9 ? "Amarillo" : "Rojo", color, { align: "center", bold: true }),
  ];
}
