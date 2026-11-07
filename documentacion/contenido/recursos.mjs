// Dominio de Recursos · Planificación: estimación de los recursos de las actividades (REC-01).
// Las cifras salen de datos/recursos.mjs, que las calcula desde el cronograma.

import { c, h, nota, p, sec, tabla, ul } from "../lib/bloques.mjs";
import { PROYECTO as P } from "../proyecto.mjs";
import { SPRINTS, fmt } from "../datos/calendario.mjs";
import {
  DEDICACION,
  HERRAMIENTAS,
  HORAS_DAILY,
  HORAS_DIA,
  LINEAS_DE_CODIGO,
  RBS,
  RECURSOS_MATERIALES,
  capacidadPorSprint,
  cocomo,
  horasDelEquipo,
  horasPorPaquete,
  participacionDelColegio,
  sobreasignaciones,
} from "../datos/recursos.mjs";
import { ACTIVIDADES } from "../datos/actividades.mjs";
import { DOC } from "./comunes.mjs";

// Como en los demás documentos: miles con espacio y decimales con coma (3 878; 83,7).
const n1 = (x) => {
  const [ent, dec] = (Math.round(x * 10) / 10).toFixed(1).split(".");
  return ent.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (dec === "0" ? "" : `,${dec}`);
};
const centro = (x, fill, extra = {}) => c(String(x), fill, { align: "center", ...extra });
const ROLES = Object.fromEntries(P.equipo.map((e) => [e.corto.split(" ")[0], e.rol]));
const AVANCE_PRODUCTO = 42.4; // avance del producto al 07/11/2026 (tablero del alcance)

const equipo = horasDelEquipo();
const capacidad = capacidadPorSprint();
const excesos = sobreasignaciones();
const total = equipo.reduce((s, t) => s + t.total, 0);
const co = cocomo(AVANCE_PRODUCTO);
const personaMes = total / 160;

const filaRbs = (nodo, nivel = 0) => [[`${"   ".repeat(nivel)}${nodo.id}`, nivel === 0 ? c(nodo.nombre, undefined, { bold: true }) : nodo.nombre], ...(nodo.hijos ?? []).flatMap((x) => filaRbs(x, nivel + 1))];

export const REC01 = DOC({
  id: "REC-01",
  titulo: "Estimación de los recursos de las actividades",
  archivo: "REC-01 Estimación de los recursos",
  carpeta: "05 - Recursos",
  dominio: "Recursos",
  area: "Planificación",
  proceso: "Estimar los recursos",
  salida: "Requisitos de recursos, base de las estimaciones y estructura de desglose de recursos",
  version: "1.0",
  fecha: "07/11/2026",
  versiones: [["1.0", "07/11/2026", "Versión inicial, con el cronograma v3.1 y la EDT versión 4.", P.director]],
  resumen:
    "Estima los recursos del equipo y los recursos físicos, tecnológicos, de datos e instalaciones que necesita cada actividad del cronograma, y los organiza en una estructura de desglose de recursos.",
  secciones: [
    sec("1. Propósito y entradas", [
      p(
        `Este documento identifica el tipo, la cantidad y las características de los recursos que necesita el proyecto. Parte de las ${ACTIVIDADES.length} actividades del cronograma (CRO-01, versión 3.1), cada una enlazada a su paquete de la EDT versión 4 (ALC-02), y suma las necesidades de forma ascendente.`,
      ),
      tabla(
        ["Entrada de la guía", "Qué se usó en este proyecto"],
        [32, 68],
        [
          ["Plan de gestión de los recursos", "Aún no se emite. Se usan los roles del acta de constitución (GOB-02) y del plan para la dirección del proyecto (GOB-04)."],
          ["Plan de gestión del cronograma y línea base del alcance", "CRO-01 (plan y calendario) y ALC-02 (EDT versión 4)."],
          ["Atributos y lista de actividades", "CRO-01: 45 actividades con responsable, paquete de la EDT, entregable, semana y duración PERT."],
          ["Registro de supuestos", "GOB-03."],
          ["Estimaciones de costos", "Línea base de costos del curso anterior (blog, capítulo de Finanzas)."],
          ["Calendarios de recursos", "Calendario del proyecto: lunes a viernes, sin feriados, receso en febrero de 2027."],
          ["Registro de riesgos", "Aún no se emite (dominio de Riesgo pendiente). Los riesgos de recursos se anotan en la sección 7."],
          ["Factores ambientales y activos de la organización", "Equipo de estudiantes a tiempo parcial; el colegio no tiene personal de TI dedicado; estimaciones PERT del curso anterior."],
        ],
        { titulo: "Entradas" },
      ),
    ]),
    sec("2. Requisitos de recursos del equipo", [
      p(
        `Horas estimadas de cada integrante por sprint: los días hábiles de cada actividad que tiene a su cargo por ${HORAS_DIA} horas y por una dedicación del ${DEDICACION * 100} %, más ${HORAS_DAILY * 60} minutos de reunión diaria desde el Sprint 2. La última fila es lo disponible de cada integrante en el sprint.`,
      ),
      tabla(
        ["Integrante", ...SPRINTS.map((s) => `S${s.n}`), "Total"],
        [30, 10, 10, 10, 10, 10, 10, 10],
        [
          ...equipo.map((t) => [
            `${t.nombre} · ${ROLES[t.nombre.split(" ")[0]] ?? ""}`,
            ...t.porSprint.map((x, i) => centro(n1(x), x > capacidad[i] ? "rojo" : undefined, { bold: x > capacidad[i] })),
            centro(n1(t.total), undefined, { bold: true }),
          ]),
          [c("Disponible por integrante", "gris", { bold: true }), ...capacidad.map((x) => centro(n1(x), "gris")), centro("", "gris")],
        ],
        { titulo: "Horas estimadas por integrante y sprint", compacta: true, fuente: `En rojo: el integrante tiene más horas asignadas que las disponibles en ese sprint. Total del equipo: ${n1(total)} horas (unas ${n1(personaMes)} personas-mes de 160 horas).` },
      ),
    ]),
    sec("3. Requisitos de recursos por paquete de la EDT", [
      tabla(
        ["Paquete de la EDT", "Actividades", "Horas del equipo", "Participación del colegio"],
        [40, 14, 16, 30],
        horasPorPaquete().map((x) => [`${x.id} ${x.nombre}`, centro(x.actividades), centro(n1(x.horas)), x.colegio.join(", ") || "—"]),
        { titulo: "Estimación ascendente por paquete", compacta: true, fuente: "Los paquetes de gestión 1.1.3 (actas y control de cambios) y la reunión diaria son trabajo continuo, sin actividad propia en el cronograma." },
      ),
      h("Participación del colegio"),
      tabla(
        ["Actividad", "Quiénes", "Sprint", "Fechas"],
        [52, 22, 8, 18],
        participacionDelColegio().map((a) => [`${a.id} ${a.descripcion}`, a.quienes.join(", "), centro(a.sprint), `${fmt(a.inicio)} al ${fmt(a.fin)}`]),
        { titulo: "Actividades con personal del colegio", compacta: true, fuente: "Al taller de validación del 28/10/2026 asistieron los 16 docentes y la directora. La capacitación del Sprint 6 dura dos horas." },
      ),
    ]),
    sec("4. Recursos físicos, tecnológicos, de datos e instalaciones", [
      tabla(
        ["Tipo", "Recurso", "Cantidad", "Para qué", "Costo", "Cuándo"],
        [11, 22, 16, 22, 14, 15],
        RECURSOS_MATERIALES.map((x) => [x.grupo, x.recurso, x.cantidad, x.para, x.costo, x.cuando]),
        { titulo: "Requisitos de recursos no humanos", compacta: true },
      ),
    ]),
    sec("5. Estructura de desglose de recursos (RBS)", [
      tabla(["Código", "Recurso"], [16, 84], RBS.flatMap((x) => filaRbs(x)), { titulo: "Estructura de desglose de recursos", compacta: true }),
    ]),
    sec("6. Base de las estimaciones", [
      h("Supuestos"),
      ul(
        `Cada integrante dedica el ${DEDICACION * 100} % de un día hábil de ${HORAS_DIA} horas a cada actividad que tiene a su cargo; si dos actividades se cruzan, sus horas se suman.`,
        `La reunión diaria dura ${HORAS_DAILY * 60} minutos y la hace todo el equipo desde el Sprint 2.`,
        "No se trabaja en feriados ni en el receso de febrero de 2027.",
        "Los servicios en la nube se usan en sus planes gratuitos (SC-03).",
      ),
      h("Herramientas y técnicas"),
      tabla(
        ["Herramienta", "¿Se usó?", "Cómo"],
        [28, 10, 62],
        HERRAMIENTAS.map(([nombre, uso, como]) => [nombre, centro(uso, uso === "Sí" ? "verde" : "gris", { bold: true }), como]),
        { titulo: "Herramientas y técnicas de la estimación" },
      ),
      h("Contraste con el modelo de costos constructivos (COCOMO)"),
      tabla(
        ["Tamaño", "Líneas de código", "Esfuerzo (personas-mes)", "Duración (meses)"],
        [34, 22, 22, 22],
        [
          ["Sistema actual", centro(`${n1(co.actual.kloc)} mil`), centro(n1(co.actual.esfuerzo)), centro(n1(co.actual.duracion))],
          [`Sistema completo (si el ${n1(AVANCE_PRODUCTO)} % actual crece en proporción)`, centro(`${n1(co.previsto.kloc)} mil`), centro(n1(co.previsto.esfuerzo)), centro(n1(co.previsto.duracion))],
          [c("Plan del equipo (sección 2)", "gris", { bold: true }), centro("—", "gris"), centro(n1(personaMes), "gris", { bold: true }), centro("5,5", "gris")],
        ],
        {
          titulo: "COCOMO básico, modo orgánico",
          compacta: true,
          fuente: `Esfuerzo = 2,4 · (miles de líneas)^1,05; duración = 2,5 · esfuerzo^0,38. El plan del equipo dura 24 semanas de trabajo (unos 5,5 meses, sin el receso). Tamaño medido el ${LINEAS_DE_CODIGO.fecha}: ${n1(LINEAS_DE_CODIGO.valor)} ${LINEAS_DE_CODIGO.detalle}.`,
        },
      ),
      p(
        `COCOMO supone un equipo profesional a tiempo completo que escribe todo el código. Este proyecto reutiliza librerías libres y ya tiene un prototipo, por eso el plan necesita menos esfuerzo. Aun así, la diferencia (${n1(co.previsto.esfuerzo)} frente a ${n1(personaMes)} personas-mes) indica que el plan es ajustado: conviene priorizar los requisitos de prioridad alta en cada sprint.`,
      ),
    ]),
    sec("7. Hallazgos y actualizaciones", [
      h("Sobreasignación del equipo"),
      tabla(
        ["Integrante", "Sprint", "Horas asignadas", "Horas disponibles"],
        [40, 20, 20, 20],
        excesos.map((x) => [x.nombre, centro(x.sprint), centro(n1(x.horas), "rojo", { bold: true }), centro(n1(x.capacidad))]),
        { titulo: "Sprints con más horas asignadas que disponibles", compacta: true },
      ),
      p(
        "La carga se nivela al planificar cada sprint: el Product Owner ordena el trabajo y el equipo redistribuye actividades entre integrantes con la misma habilidad. Si hace falta mover fechas de la línea base del cronograma, se presenta una solicitud de cambio (GOB-10).",
      ),
      h("Actualizaciones a otros documentos"),
      ul(
        "**Registro de supuestos (GOB-03):** dedicación del 50 %, planes gratuitos en la nube y acceso a un equipo con licencia de MS Project.",
        "**Riesgos de recursos** (para el registro de riesgos, cuando se desarrolle ese dominio): sobreasignación en los Sprints 2, 3 y 5; disponibilidad de los docentes para el piloto; el plan gratuito de la API tarda en responder la primera vez.",
        "**Lecciones aprendidas (GOB-08):** estimar los recursos desde el cronograma mostró la sobrecarga antes de que ocurriera.",
      ),
      nota("Estas actualizaciones se incorporan en la próxima versión de cada documento.", "info"),
    ]),
  ],
});
