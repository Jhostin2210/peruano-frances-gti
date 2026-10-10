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
import { FERIADOS, RECESO, SPRINTS, TOTALES, fmt, programar, tareasProject } from "./datos/calendario.mjs";
import { INTERESADOS, NIVELES, brecha, cuadrante, prominencia } from "./datos/interesados.mjs";
import { CAMBIOS, INCIDENTES } from "./datos/registros.mjs";
import { COMPONENTES, ENTREGABLES, PAQUETES, REQUISITOS, TOTALES_ALCANCE } from "./datos/requisitos.mjs";
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
const paraBlog = [];
for (const d of DOCUMENTOS) {
  const nombrePublico = `${d.id}-${slug(d.titulo)}`;
  const docx = path.join(SALIDA, ...d.carpeta.split("/"), `${d.archivo}.docx`);
  if (docx.length > 250) throw new Error(`Ruta demasiado larga para Windows (${docx.length}): ${docx}`);
  if (!soloIds.length || soloIds.includes(d.id)) {
    await construirDocx(d, docx);
    manifiesto.push({
      id: d.id,
      docx,
      pdf: docx.replace(/\.docx$/, ".pdf"),
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
    pdf: `/documentos/${nombrePublico}.pdf`,
    docx: `/documentos/${nombrePublico}.docx`,
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
const interesados = INTERESADOS.map((i) => ({ ...i, cuadrante: cuadrante(i), prominencia: prominencia(i), brecha: brecha(i) }));
const datos = {
  PROYECTO,
  SPRINTS,
  FERIADOS,
  RECESO,
  TOTALES,
  ACTIVIDADES: actividades,
  TAREAS_PROJECT: tareasProject(),
  NIVELES,
  INTERESADOS: interesados,
  REQUISITOS: REQUISITOS.map((r) => ({ ...r, ...PLANILLAS[r.id] })),
  ENTREGABLES,
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
