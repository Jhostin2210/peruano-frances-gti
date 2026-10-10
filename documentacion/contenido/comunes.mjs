// Fragmentos que se repiten en varios documentos. Se arman a partir de los datos únicos
// (proyecto, calendario, interesados) para que todos los documentos digan lo mismo.

import { c, kv, tabla } from "../lib/bloques.mjs";
import { PROYECTO as P } from "../proyecto.mjs";
import { FERIADOS, RECESO, SPRINTS, aFecha, fmtIso, fmtProject } from "../datos/calendario.mjs";
import { INTERESADOS, cuadrante } from "../datos/interesados.mjs";

const diaFecha = (iso) => {
  const t = fmtProject(aFecha(iso)); // "vie 6/11/26"
  return `${t.split(" ")[0]} ${fmtIso(iso)}`;
};

export const tablaHitos = (titulo = "Resumen del cronograma de hitos") =>
  tabla(
    ["Hito", "Fecha", "Qué se demuestra"],
    [30, 18, 52],
    [
      ["Inicio del proyecto", diaFecha(SPRINTS[0].inicio), "Acta de constitución emitida y reunión de inicio con la Dirección."],
      ...SPRINTS.flatMap((s) => {
        const fila = [
          s.n === 6 ? "Hito 6 · Cierre del proyecto" : `Hito ${s.n} · Revisión del Sprint ${s.n}`,
          diaFecha(s.revision),
          `${s.entregable}.`,
        ];
        return s.n === 4
          ? [
              fila,
              [
                c("Receso", "gris"),
                c(`${fmtIso(RECESO.inicio)} al ${fmtIso(RECESO.fin)}`, "gris"),
                c("Vacaciones escolares, sin trabajo planificado. La última semana es la reserva de gestión.", "gris"),
              ],
            ]
          : [fila];
      }),
    ],
    { titulo },
  );

export const tablaSprints = (titulo = "Calendario de sprints") =>
  tabla(
    ["Sprint", "Semanas", "Inicio", "Fin", "Revisión", "Entregable de la revisión"],
    [20, 10, 12, 12, 12, 34],
    SPRINTS.flatMap((s) => {
      const fila = [
        `Sprint ${s.n} · ${s.nombre}`,
        `S${s.semanas[0]}–S${s.semanas[1]}`,
        fmtIso(s.inicio),
        fmtIso(s.fin),
        fmtIso(s.revision),
        s.entregable,
      ];
      return s.n === 4
        ? [fila, [c("Receso", "gris"), c("—", "gris"), c(fmtIso(RECESO.inicio), "gris"), c(fmtIso(RECESO.fin), "gris"), c("—", "gris"), c("Vacaciones escolares; la semana del 22 al 26 de febrero es la reserva de gestión.", "gris")]]
        : [fila];
    }),
    { titulo },
  );

export const tablaFeriados = (titulo = "Feriados dentro del periodo del proyecto") =>
  tabla(
    ["Fecha", "Feriado", "Sprint afectado"],
    [25, 45, 30],
    FERIADOS.map((f) => {
      const s = SPRINTS.find((x) => f.fecha >= x.inicio && f.fecha <= x.fin);
      return [diaFecha(f.fecha), f.nombre, s ? `Sprint ${s.n}` : "—"];
    }),
    { titulo },
  );

export const kvPresupuesto = () =>
  kv(
    ["Costo de la EDT (44 actividades y reunión diaria)", P.presupuesto.edt],
    ["Reserva de contingencia (10 %)", P.presupuesto.contingencia],
    ["Línea base de costos", P.presupuesto.lineaBase],
    ["Reserva de gestión (una semana)", P.presupuesto.gestion],
    ["Presupuesto total del proyecto", P.presupuesto.total],
  );

export const tablaEquipo = (titulo = "Equipo del proyecto") =>
  tabla(
    ["Integrante", "Código", "Rol en el proyecto"],
    [40, 18, 42],
    P.equipo.map((m) => [`${m.apellidos}, ${m.nombres}`, c(m.codigo, undefined, { align: "center" }), m.rol]),
    { titulo },
  );

export const tablaInteresadosClave = (titulo = "Interesados clave") =>
  tabla(
    ["Interesado", "Papel en el proyecto", "Estrategia"],
    [28, 50, 22],
    INTERESADOS.filter((i) => i.clave).map((i) => [`${i.id} ${i.nombre}`, i.rol, cuadrante(i)]),
    { titulo, fuente: "Fuente: registro de interesados (INT-01), que identifica a 17 interesados." },
  );

export const DOC = (def) => ({ version: "1.0", fecha: P.fechaEmision, ...def });
