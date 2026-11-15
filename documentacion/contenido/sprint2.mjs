// Entregables de gestión del Sprint 2: Product Backlog priorizado (ALC-07, actividad A-1.1.1.2) y plantilla
// del informe de avance semanal (GOB-13, actividad A-1.2.1.1).

import { c, h, kv, nota, p, sec, tabla, ul } from "../lib/bloques.mjs";
import { PROYECTO as P, R } from "../proyecto.mjs";
import { DEFINICION_LISTO, DEFINICION_TERMINADO, FECHA_BACKLOG, productBacklog } from "../datos/backlog.mjs";
import { EQUIPO } from "../datos/recursos.mjs";
import { DOC } from "./comunes.mjs";

const centro = (x, fill, extra = {}) => c(String(x), fill, { align: "center", ...extra });
const COLOR = { Hecho: "verde", "En curso": "amarillo", "Por hacer": "gris" };
const backlog = productBacklog();
const suma = (lista) => lista.reduce((s, x) => s + x.puntos, 0);

// ───────────────────────── ALC-07 Product Backlog priorizado ─────────────────────────
export const ALC07 = DOC({
  id: "ALC-07",
  titulo: "Product Backlog priorizado",
  archivo: "ALC-07 Product Backlog priorizado",
  carpeta: "03 - Alcance/3.2 Definir el alcance",
  dominio: "Alcance",
  area: "Planificación",
  proceso: "Recopilar y analizar los requisitos",
  salida: "Product Backlog con historias de usuario y criterios de aceptación",
  aprobacion: "Orden aprobado por el Product Owner el 15/11/2026",
  version: "1.0",
  fecha: FECHA_BACKLOG,
  versiones: [["1.0", FECHA_BACKLOG, "Versión inicial (actividad A-1.1.1.2). Orden revisado y aprobado por el Product Owner el 15/11/2026.", P.director]],
  resumen:
    "Lista ordenada de lo que el sistema debe hacer, escrita como historias de usuario con sus criterios de aceptación, puntos de esfuerzo, sprint y estado. Es la forma ágil de los requisitos de la línea base del alcance.",
  secciones: [
    sec("1. Propósito", [
      p(
        `El Product Backlog traduce los ${backlog.filter((x) => x.tipo === "Historia de usuario").length} requisitos funcionales en historias de usuario y los ${backlog.filter((x) => x.tipo === "Historia técnica").length} no funcionales en historias técnicas. Cada historia conserva el criterio de aceptación de su requisito (ALC-02), su paquete de la EDT y su entregable. El Product Owner lo ordena y el equipo toma de arriba hacia abajo las historias de cada sprint.`,
      ),
      kv(["Responsable de ordenarlo", `${R.helber}, Product Owner`], ["Lo mantiene", "Equipo del proyecto"], ["Se revisa", "En la planificación de cada sprint"]),
    ]),
    sec("2. Cómo se ordena y se estima", [
      ul(
        "**Orden:** primero el sprint en que se termina el paquete de la EDT; dentro del sprint, la prioridad del requisito (alta antes que media).",
        "**Puntos:** 1 punto equivale a unas 8 horas del equipo según la estimación de los recursos (REC-01), redondeado a la serie 1, 2, 3, 5, 8, 13. Cuando un paquete tiene varias historias, sus horas se reparten entre ellas.",
        "**Estado:** Hecho (construido y probado; falta solo la aceptación del Product Owner), En curso o Por hacer.",
      ),
    ]),
    sec(
      "3. Product Backlog",
      [
        tabla(
          ["N.º", "ID", "Historia", "Criterio de aceptación", "Req.", "Paquete", "Sprint", "Puntos", "Estado"],
          [4, 6, 27, 25, 7, 8, 7, 6, 10],
          backlog.map((x, i) => [centro(i + 1), x.id, x.historia, x.criterio, x.requisito, x.paquete, centro(x.sprint), centro(x.puntos), centro(x.estado, COLOR[x.estado], { bold: true })]),
          { titulo: `Product Backlog al ${FECHA_BACKLOG}`, compacta: true, fuente: "HU: historia de usuario (requisito funcional). HT: historia técnica (requisito no funcional)." },
        ),
      ],
      { apaisada: true },
    ),
    sec("4. Estado del backlog", [
      tabla(
        ["Sprint", "Historias", "Puntos", "Hechas", "En curso", "Por hacer"],
        [16, 16, 16, 16, 18, 18],
        [...new Set(backlog.map((x) => x.sprint))].map((s) => {
          const l = backlog.filter((x) => x.sprint === s);
          return [`Sprint ${s}`, centro(l.length), centro(suma(l)), centro(l.filter((x) => x.estado === "Hecho").length), centro(l.filter((x) => x.estado === "En curso").length), centro(l.filter((x) => x.estado === "Por hacer").length)];
        }),
        { titulo: "Historias y puntos por sprint" },
      ),
      tabla(
        ["ID", "Situación al " + FECHA_BACKLOG],
        [10, 90],
        backlog.filter((x) => x.estado !== "Por hacer" || x.nota !== "—").map((x) => [x.id, x.nota]),
        { titulo: "Notas de avance", compacta: true },
      ),
    ]),
    sec("5. Definición de listo y de terminado", [
      h("Una historia está lista para entrar a un sprint cuando…"),
      ul(...DEFINICION_LISTO),
      h("Una historia está terminada cuando…"),
      ul(...DEFINICION_TERMINADO),
      nota("El Product Owner revisó este orden y lo dejó conforme el 15/11/2026. Puede reordenarlo en cada planificación de sprint; los cambios de orden no requieren solicitud de cambio, salvo que alteren la línea base del alcance.", "info"),
    ]),
  ],
});

// ───────────────────────── GOB-13 Plantilla del informe de avance semanal ─────────────────────────
const vacio = (n) => Array.from({ length: n }, () => "");
export const GOB13 = DOC({
  id: "GOB-13",
  titulo: "Plantilla del informe de avance semanal",
  archivo: "GOB-13 Plantilla del informe de avance semanal",
  carpeta: "01 - Gobernanza/1.7 Desempeño",
  dominio: "Gobernanza",
  area: "Monitoreo y control",
  proceso: "Monitorear y controlar el desempeño del proyecto",
  salida: "Formato del informe de avance semanal",
  version: "1.0",
  fecha: FECHA_BACKLOG,
  versiones: [["1.0", FECHA_BACKLOG, "Versión inicial (actividad A-1.2.1.1).", P.director]],
  resumen: "Formato de una página para informar cada semana el avance, las horas trabajadas, los indicadores de cronograma y costo, los problemas y el plan de la semana siguiente.",
  secciones: [
    sec("Instrucciones", [
      ul(
        "Lo llena el director del proyecto cada viernes con los datos de la reunión diaria y del registro de horas; se comparte con el equipo y el Product Owner.",
        "El avance por paquete sale del tablero del alcance; los indicadores, del informe de control del cronograma y los costos.",
        "Semáforo: verde si el índice es 0,95 o más; amarillo entre 0,90 y 0,94; rojo por debajo de 0,90.",
      ),
    ]),
    sec("1. Datos del informe", [kv(["Semana N.º", ""], ["Fechas", "del ____ / ____ al ____ / ____"], ["Sprint", ""], ["Preparado por", ""], ["Fecha de emisión", ""])]),
    sec("2. Resumen de la semana", [
      tabla(["Aspecto", "Semáforo", "Comentario"], [24, 16, 60], [["Alcance", "", ""], ["Cronograma (SPI)", "", ""], ["Costo (CPI)", "", ""], ["Calidad", "", ""], ["Equipo", "", ""]], { titulo: "Estado general" }),
    ]),
    sec("3. Avance", [
      tabla(["Actividad", "Paquete EDT", "Responsable", "Estado", "Evidencia"], [32, 12, 18, 14, 24], [vacio(5), vacio(5), vacio(5), vacio(5)], { titulo: "Actividades terminadas y en curso" }),
    ]),
    sec("4. Horas trabajadas", [
      tabla(["Integrante", "Lun", "Mar", "Mié", "Jue", "Vie", "Total", "Planificadas"], [26, 9, 9, 9, 9, 9, 14, 15], EQUIPO.map((x) => [x, ...vacio(7)]), { titulo: "Registro de horas de la semana" }),
    ]),
    sec("5. Indicadores", [
      tabla(["Indicador", "Valor", "Semana anterior"], [40, 30, 30], [["Valor planificado acumulado (PV)", "", ""], ["Valor ganado acumulado (EV)", "", ""], ["Costo real acumulado (AC)", "", ""], ["SPI = EV ÷ PV", "", ""], ["CPI = EV ÷ AC", "", ""]], { titulo: "Cronograma y costos" }),
    ]),
    sec("6. Problemas, cambios y próxima semana", [
      tabla(["Tipo", "Descripción", "Acción y responsable"], [20, 45, 35], [["Incidente", "", ""], ["Riesgo nuevo", "", ""], ["Solicitud de cambio", "", ""]], { titulo: "Problemas y cambios" }),
      tabla(["Qué se hará", "Responsable", "Fecha"], [60, 22, 18], [vacio(3), vacio(3), vacio(3)], { titulo: "Plan de la próxima semana" }),
    ]),
  ],
});
