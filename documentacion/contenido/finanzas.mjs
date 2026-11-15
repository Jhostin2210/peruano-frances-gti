// Dominio de Finanzas (curso actual): plan de gestión financiera (FIN-01), estimación de costos y presupuesto
// (FIN-02) e informe de control del cronograma y los costos N.º 1 (FIN-03). Datos en datos/finanzas.mjs.

import { c, figura, h, kv, nota, p, sec, tabla, ul } from "../lib/bloques.mjs";
import { PROYECTO as P, R } from "../proyecto.mjs";
import { PAQUETES } from "../datos/requisitos.mjs";
import { SPRINTS, aFecha, fmt } from "../datos/calendario.mjs";
import { CONTINGENCIA, CORTE_CONTROL, CURSO_ANTERIOR, PARCIALES, TARIFAS, curvaS, presupuesto, semaforo, valorGanado } from "../datos/finanzas.mjs";
import { DOC } from "./comunes.mjs";

const soles = (x) => {
  const [e, d] = Math.abs(x).toFixed(2).split(".");
  return `${x < 0 ? "−" : ""}S/ ${e.replace(/\B(?=(\d{3})+(?!\d))/g, " ")},${d}`;
};
const num = (x, d = 2) => x.toFixed(d).replace(".", ",");
const centro = (x, fill, extra = {}) => c(String(x), fill, { align: "center", ...extra });
const der = (x, fill, extra = {}) => c(String(x), fill, { align: "right", ...extra });
const COLOR = { Verde: "verde", Amarillo: "amarillo", Rojo: "rojo" };
const nombrePaquete = (id) => PAQUETES.find((q) => q.id === id)?.nombre ?? "";
const fechaIso = (iso) => fmt(aFecha(iso));

const PRES = presupuesto();
const EVM = valorGanado(CORTE_CONTROL);
const CORTE = fechaIso(CORTE_CONTROL);
const comun = { dominio: "Finanzas", carpeta: "06 - Finanzas", version: "1.0" };

// ───────────────────────── FIN-01 Plan de gestión financiera ─────────────────────────
export const FIN01 = DOC({
  ...comun,
  id: "FIN-01",
  titulo: "Plan de gestión financiera",
  archivo: "FIN-01 Plan de gestión financiera",
  area: "Planificación",
  proceso: "Planificar la gestión financiera",
  salida: "Plan de gestión financiera",
  fecha: "15/11/2026",
  versiones: [["1.0", "15/11/2026", "Versión del curso actual: reemplaza la del curso anterior (jornada completa y fechas de 2026).", P.director]],
  resumen: "Define cómo se estiman, presupuestan y controlan los costos del proyecto: unidades, tarifas, reservas, método de valor ganado, umbrales e informes.",
  secciones: [
    sec("1. Propósito y entradas", [
      p("Este plan forma parte del plan para la dirección del proyecto (GOB-04). Se basa en el cronograma v3.1 (CRO-01), la estimación de los recursos (REC-01), la estrategia de abastecimiento (GOB-05) y la restricción R-02: el proyecto no tiene presupuesto institucional."),
      p(`El acta de constitución (GOB-02) autorizó recursos por hasta ${soles(CURSO_ANTERIOR.total)} con la estimación del curso anterior. El presupuesto del curso actual (${soles(PRES.total)}) queda dentro de ese monto y reemplaza la línea base anterior mediante la solicitud de cambio SC-15.`),
    ]),
    sec("2. Financiamiento y unidades", [
      tabla(
        ["Tema", "Definición"],
        [26, 74],
        [
          ["Financiamiento", "Autofinanciado por el equipo. No hay pagos en efectivo: los costos son de oportunidad (el valor de las horas del equipo)."],
          ["Recursos físicos", "Sin costo para el proyecto: laptops e internet propios, software libre y planes gratuitos en la nube (REC-01)."],
          ["Personal del colegio", "No se costea: su participación es aporte del colegio."],
          ["Unidad de medida", "Soles (S/) con dos decimales; horas de trabajo."],
          ["Unidad de control", "Actividad del cronograma, agrupada por paquete de la EDT y por sprint."],
        ],
        { titulo: "Financiamiento y unidades" },
      ),
    ]),
    sec("3. Tarifas", [
      tabla(
        ["Integrante", "Rol", "Referencia del curso anterior", "Mensual", "Por hora"],
        [20, 26, 24, 15, 15],
        TARIFAS.map((t) => [t.persona, t.rol, t.referencia, der(soles(t.mensual)), der(soles(t.hora), undefined, { bold: true })]),
        { titulo: "Tarifas de profesional junior (176 horas por mes)", fuente: "El equipo eligió el 15/11/2026 la mitad del tarifario del curso anterior (mercado laboral de Lima 2026), por tratarse de estudiantes en roles profesionales." },
      ),
    ]),
    sec("4. Reservas", [
      tabla(
        ["Reserva", "Cálculo", "Monto", "Quién la usa"],
        [22, 34, 16, 28],
        [
          ["Contingencia", `${CONTINGENCIA * 100} % del costo de cada sprint`, der(soles(PRES.contingencia)), "El director del proyecto, para riesgos identificados (por ejemplo, la sobrecarga de los Sprints 3 y 5)."],
          ["Gestión", "Una semana de trabajo de todo el equipo", der(soles(PRES.reservaGestion)), "Con solicitud de cambio aprobada por el Product Owner (GOB-10)."],
        ],
        { titulo: "Reservas del presupuesto" },
      ),
    ]),
    sec("5. Control con valor ganado", [
      ul(
        "**Valor planificado (PV):** costo de las horas que el cronograma programa hasta la fecha de corte.",
        "**Valor ganado (EV):** costo planificado de lo realmente terminado. Cada actividad vale 0 % o 100 %; pasa a 100 % cuando su entregable tiene evidencia. Las parciales se declaran con su evidencia. La reunión diaria es de nivel de esfuerzo (su EV es igual a su PV).",
        "**Costo real (AC):** horas registradas por la tarifa de cada integrante (plantilla GOB-13, desde el 16/11/2026).",
        "**Índices:** SPI = EV ÷ PV y CPI = EV ÷ AC; pronóstico EAC = BAC ÷ CPI.",
      ),
      tabla(
        ["Índice", "Verde", "Amarillo", "Rojo"],
        [25, 25, 25, 25],
        [
          ["SPI y CPI", centro("1,00 o más", "verde"), centro("0,90 a 0,99", "amarillo"), centro("menos de 0,90", "rojo")],
          ["Qué se hace", centro("Seguir"), centro("Acción correctiva en el sprint"), centro("Solicitud de cambio (GOB-10)")],
        ],
        { titulo: "Umbrales de control", fuente: "Los mismos del plan para la dirección del proyecto (GOB-04) y del cronograma (CRO-01)." },
      ),
      p("Corte: el viernes de cada semana para el informe semanal (GOB-13) y al cierre de cada sprint para el informe de control (FIN-03 y siguientes)."),
    ]),
    sec("6. Cambios respecto del curso anterior", [
      tabla(
        ["Aspecto", "Curso anterior", "Curso actual"],
        [26, 37, 37],
        [
          ["Jornada", CURSO_ANTERIOR.jornada, "50 % de dedicación (4 horas por día por actividad), como en REC-01"],
          ["Tarifas", "Mercado de Lima 2026, nivel profesional", "Profesional junior: la mitad"],
          ["Fechas", CURSO_ANTERIOR.fechas, "Del 12/10/2026 al 23/04/2027 (cronograma v3.1)"],
          ["Presupuesto total", soles(CURSO_ANTERIOR.total), soles(PRES.total)],
        ],
        { titulo: "Qué cambió" },
      ),
    ]),
  ],
});

// ───────────────────────── FIN-02 Estimación de costos y presupuesto ─────────────────────────
const semanas = curvaS();
export const FIN02 = DOC({
  ...comun,
  id: "FIN-02",
  titulo: "Estimación de costos y presupuesto",
  archivo: "FIN-02 Estimación de costos y presupuesto",
  area: "Planificación",
  proceso: "Estimar los costos y desarrollar el presupuesto",
  salida: "Estimaciones de costos, línea base de costos y requisitos de financiamiento",
  fecha: "15/11/2026",
  versiones: [["1.0", "15/11/2026", "Línea base de costos con el cronograma v3.1 y las tarifas de profesional junior.", P.director]],
  resumen: "Estima el costo de cada actividad desde las horas del cronograma y las tarifas, lo agrega por integrante, paquete de la EDT y sprint, y fija la línea base de costos con su curva S.",
  secciones: [
    sec("1. Base de la estimación", [
      ul(
        `Estimación ascendente: ${PRES.actividades.length} actividades del cronograma; cada responsable del equipo dedica 4 horas por día hábil (8 horas al 50 %).`,
        "Reunión diaria: 15 minutos por integrante y día hábil, desde el Sprint 2.",
        "Costo = horas × tarifa del integrante (FIN-01). Recursos físicos y personal del colegio: sin costo para el proyecto.",
      ),
    ]),
    sec("2. Costo por integrante", [
      tabla(
        ["Integrante", "Horas", "Tarifa", "Costo"],
        [40, 20, 20, 20],
        [...PRES.porPersona.map((x) => [x.persona, der(num(x.horas, 1)), der(soles(TARIFAS.find((t) => t.persona === x.persona).hora)), der(soles(x.costo))]), [c("Total", "gris", { bold: true }), der(num(PRES.porPersona.reduce((t, x) => t + x.horas, 0), 1), "gris", { bold: true }), der("", "gris"), der(soles(PRES.bac), "gris", { bold: true })]],
        { titulo: "Costo por integrante" },
      ),
    ]),
    sec("3. Costo por paquete de la EDT", [
      tabla(
        ["Paquete", "Horas", "Costo", "% del total"],
        [52, 14, 20, 14],
        PRES.porPaquete.map((x) => [`${x.paquete} ${nombrePaquete(x.paquete)}`, der(num(x.horas, 1)), der(soles(x.costo)), der(`${num((x.costo / PRES.bac) * 100, 1)} %`)]),
        { titulo: "Estimación por paquete", compacta: true },
      ),
    ]),
    sec("4. Presupuesto por sprint y línea base", [
      tabla(
        ["Sprint", "Fechas", "Costo", "Contingencia (10 %)", "Total del sprint"],
        [24, 24, 17, 17, 18],
        PRES.porSprint.map((s) => [`${s.sprint} · ${s.nombre}`, `${fechaIso(s.inicio)} al ${fechaIso(s.fin)}`, der(soles(s.costo)), der(soles(s.contingencia)), der(soles(s.total))]),
        { titulo: "Presupuesto por sprint" },
      ),
      tabla(
        ["Componente", "Monto"],
        [70, 30],
        [
          ["Costo del trabajo (BAC)", der(soles(PRES.bac))],
          ["Reserva de contingencia", der(soles(PRES.contingencia))],
          [c("Línea base de costos", "gris", { bold: true }), der(soles(PRES.lineaBase), "gris", { bold: true })],
          ["Reserva de gestión", der(soles(PRES.reservaGestion))],
          [c("Presupuesto total del proyecto", "verde", { bold: true }), der(soles(PRES.total), "verde", { bold: true })],
        ],
        { titulo: "Línea base de costos y presupuesto", fuente: `Curso anterior: línea base ${soles(CURSO_ANTERIOR.lineaBase)} y presupuesto ${soles(CURSO_ANTERIOR.total)}, con jornada completa y tarifas profesionales.` },
      ),
      nota(`Esta línea base (versión 3) reemplaza la del curso anterior mediante la solicitud de cambio SC-15, aprobada por el Product Owner el 15/11/2026. Queda dentro de los recursos autorizados en el acta de constitución (${soles(CURSO_ANTERIOR.total)}).`, "info"),
    ]),
    sec(
      "5. Curva S",
      [
        figura("curva-s.png", "Valor planificado acumulado por semana (línea base sin reservas)"),
        tabla(
          ["Semana", ...semanas.slice(0, 12).map((s) => String(s.semana))],
          [16, ...Array(12).fill(7)],
          [["PV acumulado (S/)", ...semanas.slice(0, 12).map((s) => der(Math.round(s.pvAcumulado)))]],
          { compacta: true },
        ),
        tabla(
          ["Semana", ...semanas.slice(12).map((s) => String(s.semana))],
          [16, ...Array(12).fill(7)],
          [["PV acumulado (S/)", ...semanas.slice(12).map((s) => der(Math.round(s.pvAcumulado)))]],
          { compacta: true, fuente: "Las semanas 17 a 24 son de marzo y abril de 2027 (después del receso de febrero)." },
        ),
      ],
      { apaisada: true },
    ),
    sec("6. Requisitos de financiamiento", [
      p("No se requiere dinero en efectivo. Lo que el proyecto necesita en cada sprint son horas del equipo; su valor por sprint es el de la tabla de la sección 4. Si en algún momento se necesitara un servicio de pago (por ejemplo, el plan de pago de la API durante el piloto), se presentaría una solicitud de cambio con su costo."),
    ]),
  ],
});

// ───────────────────────── FIN-03 Informe de control del cronograma y los costos N.º 1 ─────────────────────────
const actividadesConValor = EVM.filas.filter((f) => f.pv || f.ev);
const sprintDelCorte = SPRINTS.find((s) => CORTE_CONTROL >= s.inicio && CORTE_CONTROL <= s.fin);
export const FIN03 = DOC({
  ...comun,
  id: "FIN-03",
  titulo: "Informe de control del cronograma y los costos N.º 1",
  archivo: "FIN-03 Control del cronograma y los costos 01",
  area: "Monitoreo y control",
  proceso: "Monitorear y controlar el cronograma y las finanzas",
  salida: "Información de desempeño del trabajo, pronósticos y solicitudes de cambio",
  fecha: CORTE,
  versiones: [["1.0", CORTE, `Corte al ${CORTE} (Sprint ${sprintDelCorte.n}).`, P.director]],
  resumen: `Mide el avance del cronograma y de los costos al ${CORTE} con valor ganado: valor planificado, valor ganado, costo real, índices, pronósticos y avance por paquete de la EDT.`,
  secciones: [
    sec("1. Resumen", [
      kv(["Fecha de corte", CORTE], ["Sprint", `${sprintDelCorte.n} · ${sprintDelCorte.nombre}`], ["Preparó", `${R.jhostin}, director del proyecto`]),
      tabla(
        ["Indicador", "Valor", "Lectura"],
        [34, 22, 44],
        [
          ["Valor planificado (PV)", der(soles(EVM.PV)), `${num(EVM.avance.planificado, 1)} % del trabajo planificado`],
          ["Valor ganado (EV)", der(soles(EVM.EV)), `${num(EVM.avance.real, 1)} % del trabajo terminado`],
          ["Costo real (AC), estimado", der(soles(EVM.AC)), "Sin registro de horas: ver la sección 3"],
          ["Variación del cronograma (SV = EV − PV)", der(soles(EVM.SV)), EVM.SV >= 0 ? "Adelantado" : "Atrasado"],
          ["Índice del cronograma (SPI)", centro(num(EVM.SPI), COLOR[semaforo(EVM.SPI)], { bold: true }), `Lo terminado equivale a lo planificado hasta la semana ${EVM.semanaEquivalente}`],
          ["Variación del costo (CV = EV − AC)", der(soles(EVM.CV)), "Sin variación (por el método de estimación)"],
          ["Índice del costo (CPI)", centro(num(EVM.CPI), COLOR[semaforo(EVM.CPI)], { bold: true }), "1,00 por construcción: no mide eficiencia todavía"],
          ["Presupuesto del trabajo (BAC)", der(soles(EVM.BAC)), "Línea base sin reservas (FIN-02)"],
          ["Estimación al término (EAC = BAC ÷ CPI)", der(soles(EVM.EAC)), "Igual al presupuesto"],
          ["Por gastar (ETC = EAC − AC)", der(soles(EVM.ETC)), ""],
        ],
        { titulo: `Indicadores de valor ganado al ${CORTE}` },
      ),
    ]),
    sec("2. Cronograma", [
      p(
        `El proyecto va adelantado: SPI ${num(EVM.SPI)}. Las actividades de datos del Sprint 2 (carga y reconciliación de Cubicol, validación y corrección de los datos) se terminaron antes de sus fechas, porque las exportaciones llegaron y el Product Owner aprobó rearmar la base (SC-13). La fecha de fin se mantiene en el ${P.fin}: los hitos con el colegio (piloto y capacitación) dependen de su calendario, no del avance del equipo.`,
      ),
      tabla(
        ["Actividad", "Paquete", "PV", "% hecho", "EV"],
        [48, 10, 14, 12, 16],
        actividadesConValor.map((f) => [`${f.id} ${f.descripcion.slice(0, 70)}`, f.paquete, der(soles(f.pv)), centro(`${f.pct} %`, f.pct === 100 ? "verde" : f.pct > 0 ? "amarillo" : undefined), der(soles(f.ev))]),
        { titulo: "Actividades con valor planificado o ganado al corte", compacta: true, fuente: Object.entries(PARCIALES).map(([id, x]) => `${id} al ${x.pct} %: ${x.evidencia}`).join(" ") },
      ),
    ]),
    sec("3. Costos", [
      p(
        "El equipo no registró las horas trabajadas hasta el 15/11/2026. El costo real se estimó suponiendo que cada actividad terminada consumió las horas que tenía estimadas (REC-01); por eso el CPI sale 1,00 y todavía no dice si el equipo gasta más o menos de lo previsto. Desde el 16/11/2026 cada integrante anota sus horas en la plantilla semanal (GOB-13): el informe N.º 2 tendrá costo real medido.",
      ),
      nota("Lectura correcta de este informe: el SPI sí es una medida real (sale de actividades terminadas con evidencia); el CPI no lo es todavía.", "aviso"),
    ]),
    sec(
      "4. Avance de la implementación por paquete de la EDT",
      [
        tabla(
          ["Paquete de la EDT", "Presupuesto", "PV al corte", "EV al corte", "% ganado del paquete"],
          [40, 15, 15, 15, 15],
          EVM.porPaquete.map((x) => [`${x.paquete} ${nombrePaquete(x.paquete)}`, der(soles(x.costo)), der(soles(x.pv)), der(soles(x.ev)), centro(`${Math.round((x.ev / x.costo) * 100)} %`, x.ev >= x.costo ? "verde" : x.ev > 0 ? "amarillo" : undefined)]),
          { titulo: "Valor ganado por paquete", compacta: true, fuente: "El avance funcional del producto (qué existe del sistema) se mide aparte en el tablero del alcance (ALC-05 y blog, capítulo 07)." },
        ),
        figura("curva-s.png", "Curva S: valor planificado, valor ganado y costo real al corte"),
      ],
      { apaisada: true },
    ),
    sec("5. Análisis y acciones", [
      tabla(
        ["Hallazgo", "Acción", "Responsable", "Fecha"],
        [36, 36, 16, 12],
        [
          ["Sin registro de horas reales: el CPI no mide eficiencia.", "Anotar las horas cada semana en la plantilla GOB-13.", R.jhostin, "Desde el 16/11/2026"],
          ["Adelanto del Sprint 2 en el paquete de datos.", "Usar el tiempo libre para preparar el Sprint 3, donde Helber tiene más horas que las disponibles (REC-04).", R.helber, "Sprint 2"],
          ["Los cortes de nivel del modelo detectan el 39 % de los casos con dificultad (SC-14).", "Revisar los cortes con los datos del colegio en el Sprint 3.", R.helber, "Sprint 3"],
        ],
        { titulo: "Acciones" },
      ),
      p("No se requiere solicitud de cambio: el adelanto no altera la línea base y los índices están en verde."),
    ]),
  ],
});

export const DOCS_FINANZAS = [FIN01, FIN02, FIN03];
