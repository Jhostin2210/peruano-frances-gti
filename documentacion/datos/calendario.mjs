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

export function diasHabiles(a, b) {
  let n = 0;
  for (let d = a; d <= b; d = mover(d, 1)) if (esHabil(d)) n++;
  return n;
}

// Red de dependencias fin-comienzo del cronograma. La usan el Gantt y el diagrama de red del blog y el
// archivo de MS Project. Regla: dentro de cada sprint, una actividad depende de las que terminan justo
// antes de que empiece; la primera de cada sprint depende del hito del sprint anterior (la del Sprint 5,
// del receso de febrero). El hito depende de las actividades del sprint que no tienen sucesora.
export function red() {
  const prog = programar();
  const nodos = [];
  let hitoAnterior = null;
  let receso = null;
  for (const sp of SPRINTS) {
    const hechas = [];
    for (const a of prog.filter((x) => x.sprint === sp.n && !x.continua)) {
      const antes = hechas.filter((h) => h.fin < a.inicio);
      let preds = [];
      if (antes.length) {
        const ultimo = Math.max(...antes.map((h) => h.fin.getTime()));
        preds = antes.filter((h) => h.fin.getTime() === ultimo).map((h) => h.id);
      } else if (sp.n === 5 && receso) preds = [receso.id];
      else if (hitoAnterior) preds = [hitoAnterior.id];
      const n = { ...a, tipo: "actividad", dias: diasHabiles(a.inicio, a.fin), preds };
      nodos.push(n);
      hechas.push(n);
    }
    const finSprint = new Date(Math.max(...hechas.map((h) => h.fin.getTime())));
    const conSucesora = new Set(hechas.flatMap((h) => h.preds));
    hitoAnterior = {
      id: `H${sp.n}`,
      tipo: "hito",
      sprint: sp.n,
      descripcion: `Hito ${sp.n}: Sprint Review — ${sp.entregable}`,
      inicio: finSprint,
      fin: finSprint,
      dias: 0,
      preds: hechas.filter((h) => !conSucesora.has(h.id)).map((h) => h.id),
    };
    nodos.push(hitoAnterior);
    if (sp.n === 4) {
      receso = {
        id: "REC",
        tipo: "receso",
        sprint: 4,
        descripcion: "Receso por vacaciones escolares (incluye la reserva de gestión del 22 al 26 de febrero)",
        inicio: aFecha(RECESO.inicio),
        fin: aFecha(RECESO.fin),
        dias: diasHabiles(aFecha(RECESO.inicio), aFecha(RECESO.fin)),
        preds: [hitoAnterior.id],
      };
      nodos.push(receso);
    }
  }
  for (const a of prog.filter((x) => x.continua)) nodos.push({ ...a, tipo: "continua", dias: diasHabiles(a.inicio, a.fin), preds: ["H1"] });
  return nodos;
}

// Gantt por semanas (CRO-01, sección 7, y vista principal del blog): una fila por grupo de actividades.
export const GRUPOS = [
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

// Semanas que ocupa cada grupo y si tiene actividades de la ruta crítica (mismo criterio que el CRO-01).
export function ganttPorSemanas() {
  const prog = programar();
  return GRUPOS.map(([prefijo, nombre]) => {
    const lista = prog.filter((a) => a.id.startsWith(`${prefijo}.`));
    const semanas = Array.from({ length: 24 }, (_, i) => i + 1).filter((s) => lista.some((a) => s >= a.semanasNum[0] && s <= a.semanasNum[1]));
    return { prefijo, nombre, critico: lista.some((a) => a.isCritical), semanas, actividades: lista.map((a) => a.id) };
  });
}

// Lista tipo MS Project para el blog. Mismas filas, en el mismo orden y con los mismos números que el archivo
// de MS Project (generar-project.mjs): resumen del proyecto, cada sprint con sus actividades y su hito, el
// receso después del Sprint 4 y la reunión diaria al final. Las predecesoras son números de fila.
export function tareasProject() {
  const nodos = red();
  const filas = [];
  const filaDe = new Map();
  const dur = (n) => `${n} ${n === 1 ? "día" : "días"}`;
  const agregar = (f, clave) => {
    const fila = { id: filas.length + 1, predecesoras: "", recursos: "", ...f };
    filas.push(fila);
    if (clave) filaDe.set(clave, fila);
    return fila;
  };
  const deNodo = (n) =>
    agregar(
      {
        nivel: n.tipo === "actividad" || n.tipo === "hito" ? 3 : 2,
        desde: aIso(n.inicio),
        hasta: aIso(n.fin),
        hito: n.tipo === "hito",
        critica: Boolean(n.isCritical),
        nombre: n.tipo === "hito" || n.tipo === "receso" ? n.descripcion : `${n.id} ${n.descripcion}`,
        duracion: dur(n.dias),
        comienzo: fmtProject(n.inicio),
        fin: fmtProject(n.fin),
        recursos: n.responsable ?? "",
        sprint: n.sprint,
        preds: n.preds,
      },
      n.id,
    );
  const inicio = aFecha(SPRINTS[0].inicio);
  const fin = ajustarHabil(aFecha(SPRINTS[5].fin), -1);
  agregar({ nombre: "Sistema ML - Alerta Temprana Académica SIA-T (proyecto completo)", nivel: 1, desde: aIso(inicio), hasta: aIso(fin), duracion: dur(diasHabiles(inicio, fin)), comienzo: fmtProject(inicio), fin: fmtProject(fin), sprint: 0, isSummary: true });
  for (const sp of SPRINTS) {
    const del = nodos.filter((n) => n.sprint === sp.n && (n.tipo === "actividad" || n.tipo === "hito"));
    const a = del[0].inicio;
    const b = del[del.length - 1].fin;
    agregar({ nombre: `Sprint ${sp.n}: ${sp.nombre} (S${sp.semanas[0]}–S${sp.semanas[1]})`, nivel: 2, desde: aIso(a), hasta: aIso(b), duracion: dur(diasHabiles(a, b)), comienzo: fmtProject(a), fin: fmtProject(b), sprint: sp.n, isSummary: true });
    del.forEach(deNodo);
    if (sp.n === 4) deNodo(nodos.find((n) => n.tipo === "receso"));
  }
  nodos.filter((n) => n.tipo === "continua").forEach(deNodo);
  for (const f of filas) {
    if (f.preds) f.predecesoras = f.preds.map((p) => filaDe.get(p).id).join(";");
    delete f.preds;
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
