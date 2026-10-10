// Calendario del proyecto (línea base del cronograma v3).
// Lo usan el documento CRO-01 y el capítulo de cronograma del blog.

import { ACTIVIDADES } from "./actividades.mjs";

export const FERIADOS = [
  { fecha: "2026-12-08", nombre: "Inmaculada Concepción" },
  { fecha: "2026-12-09", nombre: "Batalla de Ayacucho" },
  { fecha: "2026-12-25", nombre: "Navidad" },
  { fecha: "2027-01-01", nombre: "Año Nuevo" },
  { fecha: "2027-03-25", nombre: "Jueves Santo" },
  { fecha: "2027-03-26", nombre: "Viernes Santo" },
];

export const RECESO = {
  inicio: "2027-02-01",
  fin: "2027-02-26",
  motivo: "Vacaciones escolares: no hay docentes para pruebas ni piloto",
  reservaGestion: { inicio: "2027-02-22", fin: "2027-02-26" },
};

// te: suma de las duraciones esperadas del sprint; sigma: raíz de la suma de las varianzas de sus actividades.
export const SPRINTS = [
  { n: 1, nombre: "Análisis y diseño", semanas: [1, 4], inicio: "2026-10-12", fin: "2026-11-06", revision: "2026-11-06", te: 17.4, sigma: 1.35, entregable: "Arquitectura validada y variables del modelo definidas" },
  { n: 2, nombre: "Gestión y datos", semanas: [5, 8], inicio: "2026-11-09", fin: "2026-12-04", revision: "2026-12-04", te: 31.7, sigma: 1.4, entregable: "Base de datos centralizada y validada" },
  { n: 3, nombre: "Modelo ML", semanas: [9, 12], inicio: "2026-12-07", fin: "2027-01-01", revision: "2026-12-30", te: 29.2, sigma: 1.58, entregable: "Modelo ML validado con el criterio acordado" },
  { n: 4, nombre: "Alertas y tablero", semanas: [13, 16], inicio: "2027-01-04", fin: "2027-01-29", revision: "2027-01-29", te: 31.3, sigma: 1.42, entregable: "Sistema integrado con alertas y tablero operativos" },
  { n: 5, nombre: "Pruebas y piloto", semanas: [17, 20], inicio: "2027-03-01", fin: "2027-03-26", revision: "2027-03-24", te: 20.6, sigma: 1.44, entregable: "Sistema validado con pruebas y piloto real con docentes" },
  { n: 6, nombre: "Implantación y cierre", semanas: [21, 24], inicio: "2027-03-29", fin: "2027-04-23", revision: "2027-04-23", te: 29.0, sigma: 1.21, entregable: "Sistema en producción, capacitación realizada y proyecto cerrado" },
];

const DIA = 86400000;
const DIAS = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const feriadoSet = new Set(FERIADOS.map((f) => f.fecha));

export const aFecha = (iso) => new Date(`${iso}T00:00:00Z`);
export const aIso = (d) => d.toISOString().slice(0, 10);
const dd = (n) => String(n).padStart(2, "0");
export const fmt = (d) => `${dd(d.getUTCDate())}/${dd(d.getUTCMonth() + 1)}/${d.getUTCFullYear()}`;
export const fmtCorto = (d) => `${dd(d.getUTCDate())} ${MESES[d.getUTCMonth()]}`;
export const fmtProject = (d) =>
  `${DIAS[d.getUTCDay()]} ${d.getUTCDate()}/${dd(d.getUTCMonth() + 1)}/${String(d.getUTCFullYear()).slice(2)}`;
export const fmtIso = (iso) => fmt(aFecha(iso));
export const fmtIsoCorto = (iso) => fmtCorto(aFecha(iso));

const esHabil = (d) => d.getUTCDay() !== 0 && d.getUTCDay() !== 6 && !feriadoSet.has(aIso(d));
const mover = (d, dias) => new Date(d.getTime() + dias * DIA);

function ajustarHabil(d, sentido = 1) {
  let x = d;
  while (!esHabil(x)) x = mover(x, sentido);
  return x;
}

function sumarHabiles(d, n) {
  let x = d;
  const paso = n >= 0 ? 1 : -1;
  for (let i = 0; i < Math.abs(n); ) {
    x = mover(x, paso);
    if (esHabil(x)) i++;
  }
  return x;
}

// Semana de trabajo k (1 a 24) → lunes de esa semana. Entre la 16 y la 17 está el receso de febrero.
export function lunesDeSemana(k) {
  return k <= 16 ? mover(aFecha("2026-10-12"), 7 * (k - 1)) : mover(aFecha("2027-03-01"), 7 * (k - 17));
}
export const viernesDeSemana = (k) => mover(lunesDeSemana(k), 4);

export function semanasDe(etiqueta) {
  const n = etiqueta.replace(/S/g, "").split(/[–-]/).map(Number);
  return [n[0], n[n.length - 1]];
}

// Asigna fechas a cada actividad a partir de su semana y de su duración esperada (Te).
// Regla: una actividad de varias semanas ocupa esas semanas completas; las de una semana empiezan
// escalonadas (lunes, miércoles, jueves, viernes) y nunca terminan después del cierre de su sprint.
export function programar() {
  const usadas = new Map();
  return ACTIVIDADES.map((a) => {
    const [s1, s2] = semanasDe(a.semana);
    const sprint = SPRINTS[a.sprint - 1];
    const finSprint = ajustarHabil(aFecha(sprint.fin), -1);
    let inicio;
    let fin;
    let dias;
    if (s2 > s1) {
      inicio = ajustarHabil(lunesDeSemana(s1));
      fin = ajustarHabil(viernesDeSemana(s2), -1);
      dias = null;
    } else {
      const orden = usadas.get(s1) ?? 0;
      usadas.set(s1, orden + 1);
      dias = Math.max(1, Math.round(a.te));
      inicio = ajustarHabil(mover(lunesDeSemana(s1), [0, 2, 3, 4][Math.min(orden, 3)]));
      fin = sumarHabiles(inicio, dias - 1);
      if (fin > finSprint) {
        fin = finSprint;
        inicio = sumarHabiles(fin, -(dias - 1));
      }
    }
    return { ...a, inicio, fin, dias, semanasNum: [s1, s2] };
  });
}

// Lista tipo MS Project para el blog: resumen del proyecto, resumen por sprint, actividades e hitos.
export function tareasProject() {
  const prog = programar();
  const filas = [];
  let id = 1;
  filas.push({
    id: id++,
    nombre: "Sistema ML - Alerta Temprana (proyecto completo)",
    duracion: "24 semanas",
    comienzo: fmtProject(aFecha(SPRINTS[0].inicio)),
    fin: fmtProject(aFecha(SPRINTS[5].fin)),
    predecesoras: "",
    recursos: "",
    sprint: 0,
    isSummary: true,
  });
  for (const sp of SPRINTS) {
    filas.push({
      id: id++,
      nombre: `Sprint ${sp.n}: ${sp.nombre} (S${sp.semanas[0]}–S${sp.semanas[1]})`,
      duracion: "4 semanas",
      comienzo: fmtProject(aFecha(sp.inicio)),
      fin: fmtProject(ajustarHabil(aFecha(sp.fin), -1)),
      predecesoras: "",
      recursos: "",
      sprint: sp.n,
      isSummary: true,
    });
    for (const a of prog.filter((x) => x.sprint === sp.n)) {
      filas.push({
        id: id++,
        nombre: `${a.id} ${a.descripcion}`,
        duracion: a.dias ? `${a.dias} ${a.dias === 1 ? "día" : "días"}` : `S${a.semanasNum[0]}–S${a.semanasNum[1]}`,
        comienzo: fmtProject(a.inicio),
        fin: fmtProject(a.fin),
        predecesoras: a.semana,
        recursos: a.responsable,
        sprint: sp.n,
      });
    }
    filas.push({
      id: id++,
      nombre: `Hito ${sp.n}: Sprint Review — ${sp.entregable}`,
      duracion: "0 días",
      comienzo: fmtProject(aFecha(sp.revision)),
      fin: fmtProject(aFecha(sp.revision)),
      predecesoras: "",
      recursos: "",
      sprint: sp.n,
    });
    if (sp.n === 4) {
      filas.push({
        id: id++,
        nombre: "Receso por vacaciones escolares (incluye la reserva de gestión del 22 al 26 de febrero)",
        duracion: "4 semanas",
        comienzo: fmtProject(aFecha(RECESO.inicio)),
        fin: fmtProject(aFecha(RECESO.fin)),
        predecesoras: "",
        recursos: "",
        sprint: 4,
        isSummary: true,
      });
    }
  }
  return filas;
}

const conPert = ACTIVIDADES.filter((a) => !a.continua);
const criticas = conPert.filter((a) => a.isCritical);
const suma = (lista, campo) => lista.reduce((t, a) => t + a[campo], 0);
const r1 = (n) => Math.round(n * 10) / 10;
const r2 = (n) => Math.round(n * 100) / 100;

// Totales PERT calculados desde la tabla de actividades. La desviación estándar es la raíz de la suma de varianzas.
export const TOTALES = {
  actividades: conPert.length,
  continuas: ACTIVIDADES.length - conPert.length,
  te: r1(suma(conPert, "te")),
  sigma: r2(Math.sqrt(suma(conPert, "sigmaSq"))),
  criticas: criticas.length,
  teCritica: r1(suma(criticas, "te")),
  sigmaCritica: r2(Math.sqrt(suma(criticas, "sigmaSq"))),
  semanas: 24,
  diasHabiles: 24 * 5 - FERIADOS.length,
};
