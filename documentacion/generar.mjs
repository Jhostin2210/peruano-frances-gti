// Genera la documentación del proyecto a partir de documentacion/contenido:
//   1. un archivo Word por documento, en la carpeta «Documentación» del proyecto;
//   2. src/content/documentos.ts, que es lo que el blog muestra;
//   3. un manifiesto para exportar-pdf.ps1 (Word → PDF y copia a public/documentos).
//
// Uso:  node documentacion/generar.mjs ["carpeta de salida"] [ID ...]

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { construirDocx } from "./lib/docx-builder.mjs";
import { AREAS, DOCUMENTOS, DOMINIOS, PROCESOS } from "./contenido/index.mjs";
import { PROYECTO } from "./proyecto.mjs";
import { FERIADOS, RECESO, SPRINTS, TOTALES, aIso, fmt, ganttPorSemanas, programar, red, tareasProject } from "./datos/calendario.mjs";
import { INTERESADOS, NIVELES, brecha, cuadrante, prominencia } from "./datos/interesados.mjs";
import { CAMBIOS, INCIDENTES } from "./datos/registros.mjs";
import { COMPONENTES, ENTREGABLES, PAQUETES, REQUISITOS, TOTALES_ALCANCE } from "./datos/requisitos.mjs";
import { ACTIVIDADES_REALIZADAS, AVANCE, CASOS_E01, CORTES_ALCANCE, ENTREGABLES_AVANCE } from "./datos/avance.mjs";
import { DRIVE_CARPETA, enlaceDrive } from "./datos/drive.mjs";
import { DEDICACION, HERRAMIENTAS, HORAS_DAILY, HORAS_DIA, LINEAS_DE_CODIGO, RBS, RECURSOS_MATERIALES, capacidadPorSprint, cocomo, horasDelEquipo, horasPorPaquete, sobreasignaciones } from "./datos/recursos.mjs";
import { PLANILLAS } from "./datos/planillas.mjs";
import { COMUNICACIONES, CORTE, PLAN_COMUNICACIONES } from "./datos/comunicaciones.mjs";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(AQUI, "..");
const args = process.argv.slice(2);
const SALIDA =
  args.find((a) => !/^[A-Z]{3,4}-\d+$/.test(a)) ??
  path.resolve(
    REPO,
    "..",
    "TRABAJOS GRUPALES - FORMULACION Y EVALUACION DE PROYECTOS TI",
    "Proyecto - Colegio Peruano Frances - Archivos",
    "Documentación",
  );
const soloIds = args.filter((a) => /^[A-Z]{3,4}-\d+$/.test(a));

const slug = (s) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

const ids = new Set();
for (const d of DOCUMENTOS) {
  if (ids.has(d.id)) throw new Error(`Código de documento repetido: ${d.id}`);
  ids.add(d.id);
}

const manifiesto = [];
const pendientes = [];
const paraBlog = [];
for (const d of DOCUMENTOS) {
  const nombrePublico = `${d.id}-${slug(d.titulo)}`;
  const docx = path.join(SALIDA, ...d.carpeta.split("/"), `${d.archivo}.docx`);
  if (docx.length > 250) throw new Error(`Ruta demasiado larga para Windows (${docx.length}): ${docx}`);
  if (!soloIds.length || soloIds.includes(d.id)) {
    // Si el archivo está abierto en Word no se puede reemplazar: se genera aparte para que el blog quede al día
    // y se avisa para repetir la generación cuando se cierre.
    let destino = docx;
    try {
      await construirDocx(d, docx);
    } catch (e) {
      if (e.code !== "EBUSY" && e.code !== "EPERM") throw e;
      destino = path.join(AQUI, ".salida", "pendientes", `${d.archivo}.docx`);
      fs.mkdirSync(path.dirname(destino), { recursive: true });
      await construirDocx(d, destino);
      pendientes.push(docx);
    }
    manifiesto.push({
      id: d.id,
      docx: destino,
      pdf: destino.replace(/\.docx$/, ".pdf"),
      publicoDocx: path.join(REPO, "public", "documentos", `${nombrePublico}.docx`),
      publicoPdf: path.join(REPO, "public", "documentos", `${nombrePublico}.pdf`),
    });
  }
  paraBlog.push({
    id: d.id,
    titulo: d.titulo,
    dominio: d.dominio ?? null,
    area: d.area ?? null,
    proceso: d.proceso ?? null,
    salida: d.salida ?? d.titulo,
    version: d.version,
    fecha: d.fecha,
    resumen: d.resumen ?? "",
    carpeta: d.carpeta,
    drive: enlaceDrive(d.id),
    secciones: d.secciones.map((s) => ({ titulo: s.titulo, apaisada: Boolean(s.apaisada), bloques: s.bloques })),
  });
}

fs.mkdirSync(path.join(AQUI, ".salida"), { recursive: true });
fs.writeFileSync(path.join(AQUI, ".salida", "manifiesto.json"), JSON.stringify({ salida: SALIDA, documentos: manifiesto }, null, 2), "utf8");

const AVISO = "// Archivo generado por documentacion/generar.mjs a partir de documentacion/. No editar a mano.\n\n";
const json = (x) => JSON.stringify(x, null, 1);
fs.mkdirSync(path.join(REPO, "src", "content"), { recursive: true });
fs.writeFileSync(
  path.join(REPO, "src", "content", "documentos.ts"),
  AVISO +
    'import type { DocDef, DominioDef, ProcesoDef } from "./tipos";\n\n' +
    `export const DOCUMENTOS: DocDef[] = ${json(paraBlog)};\n\n` +
    `export const PROCESOS: ProcesoDef[] = ${json(PROCESOS)};\n\n` +
    `export const DOMINIOS: DominioDef[] = ${json(DOMINIOS)};\n\n` +
    `export const AREAS: string[] = ${json(AREAS)};\n`,
  "utf8",
);

// Datos que usan los capítulos del blog (cronograma, interesados y alcance).
const actividades = programar().map(({ inicio, fin, semanasNum, dias, ...a }) => ({ ...a, inicio: fmt(inicio), fin: fmt(fin) }));
// Seguimiento semanal del alcance (tablero del capítulo 07): cada corte acumula sus cambios sobre el anterior.
const entregableDe = (paquete) => Object.keys(ENTREGABLES_AVANCE).find((k) => ENTREGABLES_AVANCE[k].paquetes.includes(paquete)) ?? null;
const isoAFecha = (iso) => iso.split("-").reverse().join("/");
let acumulado = { ...AVANCE };
let casos = { ...CASOS_E01 };
const seguimiento = CORTES_ALCANCE.map((k) => {
  acumulado = { ...acumulado, ...k.cambios };
  casos = { ...casos, ...k.casos };
  // Solo los paquetes que la EDT tenía en ese corte (el componente 1.0 aparece con la versión 4).
  const paquetes = PAQUETES.filter((p) => acumulado[p.id]).map((p) => {
    const [estado, pct, existe, falta] = acumulado[p.id];
    const e = entregableDe(p.id);
    const revision = e ? SPRINTS[ENTREGABLES.find((x) => x.id === e).sprint - 1].revision : p.id.startsWith("1.0.") ? SPRINTS[0].revision : null;
    return { id: p.id, nombre: p.nombre, componente: p.id.split(".").slice(0, 2).join("."), estado, pct, existe, falta, entregable: e, revision, cambio: p.id in k.cambios };
  });
  // Estado de cada requisito según los paquetes que lo producen (ALC-01, sección 3). Ninguno está aceptado aún.
  const requisitos = REQUISITOS.map((q) => {
    const suyos = q.paquete.match(/\d+(\.\d+)+/g).map((id) => paquetes.find((p) => p.id === id));
    const empezado = suyos.some((p) => (p.pct ?? 0) > 0);
    return { id: q.id, titulo: q.titulo, prioridad: q.prioridad, entregable: q.entregable, paquete: q.paquete, casos: q.cp, estado: empezado ? "En desarrollo" : "Pendiente" };
  });
  return { ...k, requisitosCambiados: k.requisitosCambiados ?? [], paquetes, requisitos, casos: Object.entries(casos).map(([id, estado]) => ({ id, estado })) };
});
const ultimo = seguimiento[seguimiento.length - 1];

// Entregables del cronograma: cada actividad con su paquete de la EDT, su entregable, su estado y su evidencia.
const corteIso = ultimo.fecha;
const entregablesCronograma = red()
  .filter((n) => n.tipo === "actividad" || n.tipo === "continua")
  .map((n) => {
    const hecha = ACTIVIDADES_REALIZADAS[n.id];
    const paquete = PAQUETES.find((p) => p.id === n.paquete);
    const avancePaquete = ultimo.paquetes.find((p) => p.id === n.paquete);
    return {
      id: n.id,
      descripcion: n.descripcion,
      sprint: n.sprint,
      responsable: n.responsable,
      paquete: n.paquete,
      paqueteNombre: paquete.nombre,
      entregable: n.entregable,
      inicio: aIso(n.inicio),
      fin: aIso(n.fin),
      critica: Boolean(n.isCritical),
      estado: hecha ? "Realizada" : aIso(n.fin) < corteIso ? "Por confirmar" : aIso(n.inicio) <= corteIso ? "En curso" : "Programada",
      avancePaquete: avancePaquete?.pct ?? null,
      evidencias: (hecha?.evidencias ?? []).map((e) => (e.doc ? { texto: e.texto, url: enlaceDrive(e.doc) } : e)),
    };
  });

// Entregables del producto con su estado al último corte del seguimiento, para la sección «Entregables» del blog.
const entregables = ENTREGABLES.map((e) => {
  const x = ENTREGABLES_AVANCE[e.id];
  const paquetes = x.paquetes.map((id) => {
    const { estado, pct, existe, falta } = ultimo.paquetes.find((p) => p.id === id);
    return { id, nombre: PAQUETES.find((p) => p.id === id).nombre, estado, pct, existe, falta };
  });
  return {
    ...e,
    estado: x.estado,
    nota: x.nota,
    avance: Math.round(paquetes.reduce((t, p) => t + (p.pct ?? 0), 0) / paquetes.length),
    revision: fmt(new Date(`${SPRINTS[e.sprint - 1].revision}T00:00:00Z`)),
    paquetes,
    requisitos: REQUISITOS.filter((q) => q.entregable.includes(e.id)).map((q) => ({ id: q.id, titulo: q.titulo })),
    evidencias: x.evidencias,
    documentos: x.documentos.map((id) => ({ id, titulo: DOCUMENTOS.find((d) => d.id === id).titulo, drive: enlaceDrive(id) })),
  };
});
const interesados = INTERESADOS.map((i) => ({ ...i, cuadrante: cuadrante(i), prominencia: prominencia(i), brecha: brecha(i) }));
const datos = {
  PROYECTO,
  SPRINTS,
  FERIADOS,
  RECESO,
  TOTALES,
  ACTIVIDADES: actividades,
  TAREAS_PROJECT: tareasProject(),
  RECURSOS_ESTIMACION: {
    supuestos: { horasDia: HORAS_DIA, dedicacion: DEDICACION, horasDaily: HORAS_DAILY },
    equipo: horasDelEquipo(),
    capacidad: capacidadPorSprint(),
    sobreasignaciones: sobreasignaciones(),
    paquetes: horasPorPaquete(),
    materiales: RECURSOS_MATERIALES,
    rbs: RBS,
    herramientas: HERRAMIENTAS.map(([nombre, uso, como]) => ({ nombre, uso, como })),
    cocomo: { ...cocomo(42.4), lineas: LINEAS_DE_CODIGO },
  },
  GANTT_SEMANAS: ganttPorSemanas(),
  RED: red().map((n) => ({ id: n.id, tipo: n.tipo, sprint: n.sprint, descripcion: n.descripcion, responsable: n.responsable ?? "", paquete: n.paquete ?? "", te: n.te ?? 0, critica: Boolean(n.isCritical), dias: n.dias, inicio: aIso(n.inicio), fin: aIso(n.fin), preds: n.preds })),
  NIVELES,
  INTERESADOS: interesados,
  REQUISITOS: REQUISITOS.map((r) => ({ ...r, ...PLANILLAS[r.id] })),
  ENTREGABLES,
  ENTREGABLES_ESTADO: entregables,
  CORTE_ALCANCE: isoAFecha(ultimo.fecha),
  ENTREGABLES_CRONOGRAMA: entregablesCronograma,
  SEGUIMIENTO_ALCANCE: seguimiento,
  COMPONENTES_EDT: COMPONENTES,
  DRIVE_CARPETA,
  COMPONENTES,
  PAQUETES,
  TOTALES_ALCANCE,
  CAMBIOS,
  INCIDENTES,
  CORTE,
  PLAN_COMUNICACIONES,
  COMUNICACIONES,
};
fs.writeFileSync(
  path.join(REPO, "src", "content", "datos.ts"),
  AVISO +
    Object.entries(datos)
      .map(([nombre, valor]) => `export const ${nombre} = ${json(valor)};\n`)
      .join("\n"),
  "utf8",
);

console.log(`Word generados: ${manifiesto.length} de ${DOCUMENTOS.length} documentos`);
console.log(`Carpeta: ${SALIDA}`);
if (pendientes.length) {
  console.log(`\nATENCIÓN: ${pendientes.length} archivo(s) estaban abiertos y no se reemplazaron. Ciérralos y vuelve a generar:`);
  for (const x of pendientes) console.log(`  - ${x}`);
}
