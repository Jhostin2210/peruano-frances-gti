// Dominio de Finanzas (versión del curso actual, 15/11/2026): tarifas, estimación de costos por actividad,
// línea base de costos con reservas, curva S y control con valor ganado a la fecha de corte.
// Todo se calcula desde el cronograma v3.1 y los supuestos de la estimación de recursos (REC-01).
// Los costos son de oportunidad: el proyecto es autofinanciado y no paga sueldos.

import { R } from "../proyecto.mjs";
import { FERIADOS, SPRINTS, aFecha, aIso, fmt, lunesDeSemana, programar, viernesDeSemana } from "./calendario.mjs";
import { ACTIVIDADES_REALIZADAS } from "./avance.mjs";
import { DEDICACION, EQUIPO, HORAS_DAILY, HORAS_DIA, recursosDe } from "./recursos.mjs";

const r2 = (n) => Math.round(n * 100) / 100;
const HORAS_MES = 176;

// Tarifas de profesional junior (la mitad del tarifario del curso anterior), elegidas por el equipo el 15/11/2026.
export const TARIFAS = [
  { persona: R.jhostin, rol: "Director del proyecto y Scrum Master", referencia: "Líder de proyecto (S/ 6 000)", mensual: 3000 },
  { persona: R.helber, rol: "Product Owner y modelo de Machine Learning", referencia: "Científico de datos (S/ 5 500)", mensual: 2750 },
  { persona: R.jadira, rol: "Datos, alertas y despliegue", referencia: "Área de TI (S/ 4 666,67)", mensual: 2333.33 },
  { persona: R.carlos, rol: "Tablero web y control de cambios", referencia: "Área de TI (S/ 4 666,67)", mensual: 2333.33 },
].map((t) => ({ ...t, hora: r2(t.mensual / HORAS_MES) }));
const tarifa = Object.fromEntries(TARIFAS.map((t) => [t.persona, t.hora]));

export const CONTINGENCIA = 0.1; // 10 % del costo de cada sprint (curso anterior)
export const SEMANAS_RESERVA_GESTION = 1; // una semana de todo el equipo

const esHabil = (d) => d.getUTCDay() !== 0 && d.getUTCDay() !== 6 && !FERIADOS.some((f) => f.fecha === aIso(d));
const dias = (a, b) => {
  const out = [];
  for (let d = new Date(a); d <= b; d = new Date(d.getTime() + 86400000)) if (esHabil(d)) out.push(aIso(d));
  return out;
};

// Costo diario de cada actividad: 8 h × 50 % por responsable del equipo (o 15 min por integrante en la reunión diaria).
export function costosPorActividad() {
  return programar().map((a) => {
    const habiles = dias(a.inicio, a.fin);
    const personas = a.continua ? EQUIPO : recursosDe(a.responsable).filter((x) => EQUIPO.includes(x));
    const horasDia = a.continua ? HORAS_DAILY : HORAS_DIA * DEDICACION;
    const costoDia = personas.reduce((s, p) => s + horasDia * tarifa[p], 0);
    return {
      id: a.id,
      descripcion: a.descripcion,
      paquete: a.paquete,
      sprint: a.sprint,
      continua: Boolean(a.continua),
      responsable: a.responsable,
      inicio: aIso(a.inicio),
      fin: aIso(a.fin),
      dias: habiles,
      horas: r2(habiles.length * horasDia * personas.length),
      costoDia: r2(costoDia),
      costo: r2(habiles.length * costoDia),
    };
  });
}

export function presupuesto() {
  const acts = costosPorActividad();
  const porSprint = SPRINTS.map((s) => {
    const costo = r2(acts.filter((a) => a.sprint === s.n).reduce((t, a) => t + a.costo, 0));
    // La reunión diaria se reparte por fechas entre los sprints en que ocurre.
    const daily = acts.filter((a) => a.continua).reduce((t, a) => t + a.dias.filter((d) => d >= s.inicio && d <= s.fin).length * a.costoDia, 0);
    const base = r2(costo - acts.filter((a) => a.continua && a.sprint === s.n).reduce((t, a) => t + a.costo, 0) + daily);
    return { sprint: s.n, nombre: s.nombre, inicio: s.inicio, fin: s.fin, costo: base, contingencia: r2(base * CONTINGENCIA), total: r2(base * (1 + CONTINGENCIA)) };
  });
  const bac = r2(porSprint.reduce((t, s) => t + s.costo, 0));
  const contingencia = r2(porSprint.reduce((t, s) => t + s.contingencia, 0));
  const reservaGestion = r2(EQUIPO.reduce((t, p) => t + tarifa[p] * HORAS_DIA * DEDICACION * 5 * SEMANAS_RESERVA_GESTION, 0));
  const porPaquete = Object.values(
    acts.reduce((m, a) => {
      (m[a.paquete] ??= { paquete: a.paquete, costo: 0, horas: 0 }).costo += a.costo;
      m[a.paquete].horas += a.horas;
      return m;
    }, {}),
  ).map((p) => ({ ...p, costo: r2(p.costo), horas: r2(p.horas) }));
  const porPersona = EQUIPO.map((p) => {
    const horas = acts.reduce((t, a) => t + (a.continua || recursosDe(a.responsable).includes(p) ? a.dias.length * (a.continua ? HORAS_DAILY : HORAS_DIA * DEDICACION) : 0), 0);
    return { persona: p, horas: r2(horas), costo: r2(horas * tarifa[p]) };
  });
  return { actividades: acts, porSprint, porPaquete, porPersona, bac, contingencia, lineaBase: r2(bac + contingencia), reservaGestion, total: r2(bac + contingencia + reservaGestion) };
}

// Línea base del curso anterior, para comparar.
export const CURSO_ANTERIOR = { lineaBase: 59859.17, reservaGestion: 3636.36, total: 63495.53, jornada: "8 horas diarias, jornada completa", fechas: "marzo a agosto de 2026" };

// Curva S: valor planificado acumulado por semana del cronograma (sin reservas).
export function curvaS() {
  const acts = costosPorActividad();
  const semanas = Array.from({ length: 24 }, (_, i) => i + 1).map((k) => ({ n: k, lunes: aIso(lunesDeSemana(k)), viernes: aIso(viernesDeSemana(k)) }));
  let acum = 0;
  return semanas.map((s) => {
    const pv = acts.reduce((t, a) => t + a.dias.filter((d) => d >= s.lunes && d <= s.viernes).length * a.costoDia, 0);
    acum += pv;
    return { semana: s.n, lunes: s.lunes, viernes: s.viernes, pv: r2(pv), pvAcumulado: r2(acum) };
  });
}

// ───────────────────────── Control con valor ganado ─────────────────────────
// Porcentaje completado de cada actividad a la fecha de corte, con su evidencia (ACTIVIDADES_REALIZADAS).
// Las actividades parciales se declaran aquí. La reunión diaria es de nivel de esfuerzo: su EV es igual a su PV.
export const PARCIALES = {
  "A-3.2.1.1": { pct: 50, evidencia: "Métricas del modelo en el colegio con el criterio de la SC-14 (AUC 0,71, detecta 39 %); falta compararlas con una regla simple." },
};

export function valorGanado(corteIso) {
  const p = presupuesto();
  const filas = p.actividades.map((a) => {
    const pv = r2(a.dias.filter((d) => d <= corteIso).length * a.costoDia);
    const hecha = ACTIVIDADES_REALIZADAS[a.id];
    const pct = a.continua ? (a.costo ? (pv / a.costo) * 100 : 0) : hecha && hecha.fecha <= corteIso ? 100 : PARCIALES[a.id]?.pct ?? 0;
    const ev = r2((a.costo * pct) / 100);
    // Costo real estimado: no hubo registro de horas. Se asume que cada actividad hecha consumió las horas que
    // tenía estimadas (REC-01); por eso el CPI sale 1,00 por construcción.
    const ac = ev;
    return { ...a, pv, pct: Math.round(pct), ev, ac };
  });
  const suma = (k) => r2(filas.reduce((t, f) => t + f[k], 0));
  const PV = suma("pv"), EV = suma("ev"), AC = suma("ac");
  const SPI = EV / PV, CPI = AC ? EV / AC : 1;
  const EAC = p.bac / CPI;
  const semanas = curvaS();
  // Fecha a la que el valor ganado equivale en el plan (cuánto adelanto lleva el proyecto).
  const equivalente = semanas.find((s) => s.pvAcumulado >= EV) ?? semanas[semanas.length - 1];
  return {
    corte: corteIso,
    filas,
    PV, EV, AC,
    SV: r2(EV - PV), CV: r2(EV - AC),
    SPI: r2(SPI), CPI: r2(CPI),
    BAC: p.bac, EAC: r2(EAC), ETC: r2(EAC - AC), VAC: r2(p.bac - EAC), TCPI: r2((p.bac - EV) / (p.bac - AC)),
    avance: { planificado: r2((PV / p.bac) * 100), real: r2((EV / p.bac) * 100) },
    semanaEquivalente: equivalente.semana,
    porPaquete: p.porPaquete.map((q) => {
      const fs = filas.filter((f) => f.paquete === q.paquete);
      return { ...q, pv: r2(fs.reduce((t, f) => t + f.pv, 0)), ev: r2(fs.reduce((t, f) => t + f.ev, 0)) };
    }),
    porSprint: SPRINTS.map((s) => {
      const fs = filas.filter((f) => f.sprint === s.n);
      return { sprint: s.n, presupuesto: r2(fs.reduce((t, f) => t + f.costo, 0)), pv: r2(fs.reduce((t, f) => t + f.pv, 0)), ev: r2(fs.reduce((t, f) => t + f.ev, 0)) };
    }),
  };
}

export const semaforo = (indice) => (indice >= 0.95 ? "Verde" : indice >= 0.9 ? "Amarillo" : "Rojo");
export const CORTE_CONTROL = "2026-11-20";
export const fechaCorte = () => fmt(aFecha(CORTE_CONTROL));
