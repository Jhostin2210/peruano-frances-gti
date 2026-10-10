// Convierte la definición de un documento (contenido/*.mjs) en un archivo Word con formato académico:
// carátula, control del documento, tabla de contenido, encabezado y pie, y secciones numeradas.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  Header,
  HeadingLevel,
  ImageRun,
  LevelFormat,
  Packer,
  PageNumber,
  PageOrientation,
  Paragraph,
  SectionType,
  ShadingType,
  Tab,
  TabStopType,
  Table,
  TableCell,
  TableLayoutType,
  TableOfContents,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
} from "docx";
import { PROYECTO } from "../proyecto.mjs";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const LOGO_UNI = fs.readFileSync(path.join(AQUI, "..", "assets", "untels.jpg"));
const LOGO_COL = fs.readFileSync(path.join(AQUI, "..", "assets", "colegio.jpg"));

const NAVY = "1F3864";
const TEAL = "0D7377";
const GRIS = "5F6B7A";
const BORDE = "B8C2CC";
const CEBRA = "F5F7FA";
const ETIQUETA = "EEF2F7";
const SERIF = "Times New Roman";
const SANS = "Arial";

export const RELLENOS = {
  verde: "CFEBD6",
  amarillo: "FFE9A8",
  rojo: "F6C7BE",
  azul: "D6E6F5",
  gris: "E9ECEF",
  teal: "CDEBEB",
  naranja: "FAD7B0",
  morado: "E3D7F4",
  navy: NAVY,
};

const A4 = { w: 11906, h: 16838 };
const MARGEN_V = { top: 1418, bottom: 1304, left: 1701, right: 1418, header: 620, footer: 560 };
const MARGEN_H = { top: 1304, bottom: 1134, left: 1134, right: 1134, header: 600, footer: 520 };
const anchoUtil = (apaisada) =>
  apaisada ? A4.h - MARGEN_H.left - MARGEN_H.right : A4.w - MARGEN_V.left - MARGEN_V.right;

const SIN_BORDE = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const SIN_BORDES = { top: SIN_BORDE, bottom: SIN_BORDE, left: SIN_BORDE, right: SIN_BORDE };
const LINEA = { style: BorderStyle.SINGLE, size: 4, color: BORDE };
const BORDES = { top: LINEA, bottom: LINEA, left: LINEA, right: LINEA };

// "texto con **negrita**" → TextRun[]
function runs(texto, base = {}) {
  return String(texto)
    .split("**")
    .map((parte, i) => (parte ? new TextRun({ text: parte, ...base, bold: base.bold || i % 2 === 1 }) : null))
    .filter(Boolean);
}

const parrafo = (texto, extra = {}) =>
  new Paragraph({
    alignment: AlignmentType.JUSTIFIED,
    spacing: { after: 140, line: 300 },
    ...extra,
    children: runs(texto, extra.run ?? {}),
  });

const espacio = (after = 120) => new Paragraph({ spacing: { after, line: 240 }, children: [] });
// Párrafo casi sin altura: Word exige un párrafo después de una tabla, y uno normal puede empujar una página en blanco.
const minimo = () =>
  new Paragraph({ spacing: { before: 0, after: 0, line: 20, lineRule: "exact" }, children: [new TextRun({ text: "", size: 2 })] });

function celda(valor, ancho, base = {}) {
  const v = valor !== null && typeof valor === "object" && !Array.isArray(valor) ? valor : { x: valor };
  const relleno = v.fill ? RELLENOS[v.fill] ?? v.fill : base.fill;
  const oscuro = relleno === NAVY;
  const color = v.color ?? (oscuro ? "FFFFFF" : base.color ?? "1A1A1A");
  const size = base.size ?? 18;
  const lineas = Array.isArray(v.x) ? v.x : [v.x ?? ""];
  return new TableCell({
    width: { size: ancho, type: WidthType.DXA },
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 55, bottom: 55, left: 85, right: 85 },
    borders: BORDES,
    shading: relleno ? { fill: relleno, type: ShadingType.CLEAR, color: "auto" } : undefined,
    children: lineas.map(
      (l) =>
        new Paragraph({
          alignment: v.align === "center" || base.align === "center" ? AlignmentType.CENTER : AlignmentType.LEFT,
          spacing: { after: lineas.length > 1 ? 40 : 0, line: 250 },
          children: runs(l, { font: SANS, size, color, bold: v.bold ?? base.bold ?? false }),
        }),
    ),
  });
}

function repartir(ancho, porcentajes) {
  const total = porcentajes.reduce((a, b) => a + b, 0);
  const w = porcentajes.map((x) => Math.floor((ancho * x) / total));
  w[w.length - 1] += ancho - w.reduce((a, b) => a + b, 0);
  return w;
}

function tablaDocx(b, ancho, numero) {
  const n = b.cols.length;
  const w = repartir(ancho, b.anchos ?? Array(n).fill(1));
  const size = b.compacta ? 15 : 18;
  const filas = [
    new TableRow({
      tableHeader: true,
      cantSplit: true,
      children: b.cols.map((col, i) => celda(col, w[i], { fill: NAVY, bold: true, size, align: "center" })),
    }),
    ...b.filas.map(
      (f, r) =>
        new TableRow({
          cantSplit: true,
          children: f.map((v, i) => celda(v, w[i], { fill: r % 2 ? CEBRA : undefined, size })),
        }),
    ),
  ];
  const out = [];
  if (b.titulo) {
    out.push(
      new Paragraph({
        keepNext: true,
        spacing: { before: 120, after: 80 },
        children: [
          new TextRun({ text: `Tabla ${numero}. `, font: SANS, size: 18, bold: true, color: NAVY }),
          new TextRun({ text: b.titulo, font: SANS, size: 18, color: NAVY }),
        ],
      }),
    );
  }
  out.push(
    new Table({
      width: { size: ancho, type: WidthType.DXA },
      columnWidths: w,
      layout: TableLayoutType.FIXED,
      borders: { ...BORDES, insideHorizontal: LINEA, insideVertical: LINEA },
      rows: filas,
    }),
  );
  if (b.fuente) {
    out.push(
      new Paragraph({
        spacing: { before: 60, after: 0 },
        children: [new TextRun({ text: b.fuente, font: SANS, size: 16, italics: true, color: GRIS })],
      }),
    );
  }
  out.push(espacio(160));
  return out;
}

function kvDocx(b, ancho) {
  const w = repartir(ancho, [30, 70]);
  return [
    new Table({
      width: { size: ancho, type: WidthType.DXA },
      columnWidths: w,
      layout: TableLayoutType.FIXED,
      borders: { ...BORDES, insideHorizontal: LINEA, insideVertical: LINEA },
      rows: b.filas.map(
        ([k, v]) =>
          new TableRow({
            cantSplit: true,
            children: [celda({ x: k, bold: true, color: NAVY }, w[0], { fill: ETIQUETA }), celda(v, w[1])],
          }),
      ),
    }),
    espacio(160),
  ];
}

const NOTAS = {
  info: { etiqueta: "Nota.", borde: TEAL, fondo: "EAF5F5" },
  aviso: { etiqueta: "Importante.", borde: "C77700", fondo: "FFF4D6" },
  simulado: { etiqueta: "Simulación.", borde: "6B4FA0", fondo: "F1EBFA" },
};

function notaDocx(b, ancho) {
  const n = NOTAS[b.tipo] ?? NOTAS.info;
  return [
    new Table({
      width: { size: ancho, type: WidthType.DXA },
      columnWidths: [ancho],
      layout: TableLayoutType.FIXED,
      borders: {
        top: SIN_BORDE,
        bottom: SIN_BORDE,
        right: SIN_BORDE,
        left: { style: BorderStyle.SINGLE, size: 24, color: n.borde },
        insideHorizontal: SIN_BORDE,
        insideVertical: SIN_BORDE,
      },
      rows: [
        new TableRow({
          cantSplit: true,
          children: [
            new TableCell({
              width: { size: ancho, type: WidthType.DXA },
              shading: { fill: n.fondo, type: ShadingType.CLEAR, color: "auto" },
              margins: { top: 90, bottom: 90, left: 160, right: 140 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.JUSTIFIED,
                  spacing: { after: 0, line: 270 },
                  children: [
                    new TextRun({ text: `${n.etiqueta} `, font: SANS, size: 19, bold: true, color: n.borde }),
                    ...runs(b.x, { font: SANS, size: 19, color: "1A1A1A" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    espacio(160),
  ];
}

function firmasDocx(b, ancho) {
  const n = b.firmantes.length;
  const w = repartir(ancho, Array(n).fill(1));
  const centro = (texto, opts = {}) =>
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 20, line: 250 },
      ...opts.p,
      children: [new TextRun({ text: texto, font: SANS, size: opts.size ?? 18, bold: opts.bold, color: opts.color })],
    });
  return [
    espacio(260),
    new Table({
      width: { size: ancho, type: WidthType.DXA },
      columnWidths: w,
      layout: TableLayoutType.FIXED,
      borders: { ...SIN_BORDES, insideHorizontal: SIN_BORDE, insideVertical: SIN_BORDE },
      rows: [
        new TableRow({
          cantSplit: true,
          children: b.firmantes.map(
            (f, i) =>
              new TableCell({
                width: { size: w[i], type: WidthType.DXA },
                margins: { top: 0, bottom: 0, left: 180, right: 180 },
                borders: SIN_BORDES,
                children: [
                  new Paragraph({ spacing: { before: 760, after: 0 }, children: [] }),
                  centro(f.nombre, {
                    bold: true,
                    p: { border: { top: { style: BorderStyle.SINGLE, size: 6, color: "404040", space: 6 } } },
                  }),
                  centro(f.rol, { size: 17, color: GRIS }),
                  centro("Fecha: ____ / ____ / ________", { size: 16, color: GRIS }),
                ],
              }),
          ),
        }),
      ],
    }),
    minimo(),
  ];
}

function bloqueDocx(b, ancho, estado) {
  switch (b.t) {
    case "p":
      return [parrafo(b.x)];
    case "h":
      return [new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(b.x)] })];
    case "ul":
      return b.items.map(
        (it) =>
          new Paragraph({
            numbering: { reference: "vinetas", level: 0 },
            alignment: AlignmentType.JUSTIFIED,
            spacing: { after: 80, line: 290 },
            children: runs(it),
          }),
      );
    case "ol": {
      const instancia = ++estado.listas;
      return b.items.map(
        (it) =>
          new Paragraph({
            numbering: { reference: "numeros", level: 0, instance: instancia },
            alignment: AlignmentType.JUSTIFIED,
            spacing: { after: 80, line: 290 },
            children: runs(it),
          }),
      );
    }
    case "tabla":
      return tablaDocx(b, ancho, b.titulo ? ++estado.tablas : estado.tablas);
    case "kv":
      return kvDocx(b, ancho);
    case "nota":
      return notaDocx(b, ancho);
    case "firmas":
      return firmasDocx(b, ancho);
    default:
      throw new Error(`Bloque desconocido: ${b.t}`);
  }
}

const centrado = (texto, opts = {}) =>
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: opts.after ?? 60, before: opts.before ?? 0, line: opts.line ?? 276 },
    border: opts.border,
    children: [
      new TextRun({
        text: texto,
        font: opts.font ?? SANS,
        size: opts.size ?? 22,
        bold: opts.bold,
        italics: opts.italics,
        color: opts.color ?? "1A1A1A",
        characterSpacing: opts.tracking,
      }),
    ],
  });

function caratula(doc) {
  const ancho = anchoUtil(false);
  const w = repartir(ancho, [20, 60, 20]);
  const logo = (data, px) =>
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new ImageRun({ type: "jpg", data, transformation: { width: px, height: px } })],
    });
  const celdaLibre = (children, i) =>
    new TableCell({
      width: { size: w[i], type: WidthType.DXA },
      verticalAlign: VerticalAlign.CENTER,
      borders: SIN_BORDES,
      children,
    });
  const cabecera = new Table({
    width: { size: ancho, type: WidthType.DXA },
    columnWidths: w,
    layout: TableLayoutType.FIXED,
    borders: { ...SIN_BORDES, insideHorizontal: SIN_BORDE, insideVertical: SIN_BORDE },
    rows: [
      new TableRow({
        children: [
          celdaLibre([logo(LOGO_UNI, 104)], 0),
          celdaLibre(
            [
              centrado(PROYECTO.universidad.toUpperCase(), { size: 23, bold: true, color: NAVY, after: 50 }),
              centrado(PROYECTO.facultad, { size: 20, color: NAVY, after: 30 }),
              centrado(PROYECTO.escuela, { size: 20, color: NAVY, after: 0 }),
            ],
            1,
          ),
          celdaLibre([logo(LOGO_COL, 84)], 2),
        ],
      }),
    ],
  });

  const etiqueta = [doc.dominio ? `Dominio de ${doc.dominio}` : "Dirección del proyecto", doc.proceso]
    .filter(Boolean)
    .join("  ·  ")
    .toUpperCase();

  const largo = doc.titulo.length > 30;
  const wm = repartir(ancho, [30, 70]);
  const meta = new Table({
    width: { size: ancho, type: WidthType.DXA },
    columnWidths: wm,
    layout: TableLayoutType.FIXED,
    borders: { ...BORDES, insideHorizontal: LINEA, insideVertical: LINEA },
    rows: [
      ["Proyecto", `${PROYECTO.nombreCorto}`],
      ["Institución cliente", `${PROYECTO.cliente} — Villa El Salvador, Lima`],
      ["Asignatura", PROYECTO.curso],
      ["Docente", PROYECTO.docente],
      ["Guía de referencia", PROYECTO.guia],
      ["Documento", `${doc.id}  ·  Versión ${doc.version}  ·  ${doc.fecha}`],
    ].map(
      ([k, v]) =>
        new TableRow({
          children: [celda({ x: k, bold: true, color: NAVY }, wm[0], { fill: ETIQUETA, size: 19 }), celda(v, wm[1], { size: 19 })],
        }),
    ),
  });

  const wi = repartir(ancho, [46, 20, 34]);
  const integrantes = new Table({
    width: { size: ancho, type: WidthType.DXA },
    columnWidths: wi,
    layout: TableLayoutType.FIXED,
    borders: { ...BORDES, insideHorizontal: LINEA, insideVertical: LINEA },
    rows: [
      new TableRow({
        children: ["Integrantes", "Código", "Rol en el proyecto"].map((x, i) =>
          celda(x, wi[i], { fill: NAVY, bold: true, size: 18, align: "center" }),
        ),
      }),
      ...PROYECTO.equipo.map(
        (m, r) =>
          new TableRow({
            children: [
              celda(`${m.apellidos}, ${m.nombres}`, wi[0], { fill: r % 2 ? CEBRA : undefined, size: 18 }),
              celda({ x: m.codigo, align: "center" }, wi[1], { fill: r % 2 ? CEBRA : undefined, size: 18 }),
              celda(m.rol, wi[2], { fill: r % 2 ? CEBRA : undefined, size: 17 }),
            ],
          }),
      ),
    ],
  });

  return [
    cabecera,
    new Paragraph({
      spacing: { before: 160, after: 0 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 18, color: NAVY, space: 1 } },
      children: [],
    }),
    new Paragraph({
      spacing: { before: 30, after: 0 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: TEAL, space: 1 } },
      children: [],
    }),
    // El tamaño del título y los espacios se ajustan a su largo para que la carátula siempre quepa en una página.
    centrado(etiqueta, { size: 17, bold: true, color: TEAL, tracking: 40, before: largo ? 620 : 1000, after: 200 }),
    centrado(doc.titulo, { size: largo ? 40 : 50, bold: true, color: NAVY, after: 220, line: largo ? 480 : 580 }),
    centrado(PROYECTO.nombre, { font: SERIF, size: 25, italics: true, color: "333333", after: 100, line: 330 }),
    centrado(`Aplicado a la ${PROYECTO.cliente}`, { font: SERIF, size: 24, color: "333333", after: largo ? 520 : 780 }),
    meta,
    espacio(200),
    integrantes,
    centrado(`${PROYECTO.ciudad} — ${PROYECTO.anio}`, { size: 22, bold: true, color: NAVY, before: largo ? 360 : 520, after: 0 }),
  ];
}

function controlDocumento(doc) {
  const ancho = anchoUtil(false);
  const titulo = (texto) =>
    new Paragraph({
      spacing: { before: 0, after: 160 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: TEAL, space: 4 } },
      children: [new TextRun({ text: texto, font: SANS, size: 28, bold: true, color: NAVY })],
    });
  const estado = { tablas: 0, listas: 0 };
  const versiones = doc.versiones ?? [[doc.version, doc.fecha, "Versión inicial del documento.", PROYECTO.director]];
  const ubicacion = [
    ["Dominio de desempeño", doc.dominio ?? "Transversal"],
    ["Área de enfoque", doc.area ?? "—"],
    ["Proceso", doc.proceso ?? "—"],
    ["Salida que documenta", doc.salida ?? doc.titulo],
  ];
  return [
    titulo("Control del documento"),
    ...kvDocx(
      {
        filas: [
          ["Código", doc.id],
          ["Título", doc.titulo],
          ["Elaborado por", doc.elaboradoPor ?? "Equipo del proyecto"],
          ["Revisado por", `${PROYECTO.director} (Director del proyecto)`],
          ["Aprobación", doc.aprobacion ?? "Pendiente de revisión del docente del curso"],
        ],
      },
      ancho,
    ),
    ...tablaDocx(
      { cols: ["Versión", "Fecha", "Descripción del cambio", "Responsable"], anchos: [12, 16, 47, 25], filas: versiones },
      ancho,
      0,
    ),
    new Paragraph({
      spacing: { before: 60, after: 100 },
      children: [new TextRun({ text: "Ubicación en la Guía del PMBOK®, octava edición", font: SANS, size: 21, bold: true, color: NAVY })],
    }),
    ...kvDocx({ filas: ubicacion }, ancho),
    ...(doc.resumen ? notaDocx({ tipo: "info", x: doc.resumen }, ancho) : []),
    espacio(260),
    titulo("Contenido"),
    new TableOfContents("Contenido", { hyperlink: true, headingStyleRange: "1-1" }),
    void estado,
  ].filter(Boolean);
}

function encabezado(doc, apaisada) {
  const ancho = anchoUtil(apaisada);
  return new Header({
    children: [
      new Paragraph({
        tabStops: [{ type: TabStopType.RIGHT, position: ancho }],
        spacing: { after: 0 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: TEAL, space: 4 } },
        children: [
          new TextRun({ text: `${PROYECTO.sigla}  ·  ${doc.titulo}`, font: SANS, size: 16, color: GRIS }),
          new TextRun({ children: [new Tab(), `${doc.id}  ·  v${doc.version}`], font: SANS, size: 16, color: GRIS }),
        ],
      }),
    ],
  });
}

function pie(apaisada) {
  const ancho = anchoUtil(apaisada);
  return new Footer({
    children: [
      new Paragraph({
        tabStops: [{ type: TabStopType.RIGHT, position: ancho }],
        spacing: { before: 0, after: 0 },
        border: { top: { style: BorderStyle.SINGLE, size: 4, color: BORDE, space: 4 } },
        children: [
          new TextRun({ text: `UNTELS  ·  ${PROYECTO.curso}  ·  ${PROYECTO.anio}`, font: SANS, size: 16, color: GRIS }),
          new TextRun({
            children: [new Tab(), "Página ", PageNumber.CURRENT, " de ", PageNumber.TOTAL_PAGES],
            font: SANS,
            size: 16,
            color: GRIS,
          }),
        ],
      }),
    ],
  });
}

const pagina = (apaisada) =>
  apaisada
    ? { size: { width: A4.w, height: A4.h, orientation: PageOrientation.LANDSCAPE }, margin: MARGEN_H }
    : { size: { width: A4.w, height: A4.h, orientation: PageOrientation.PORTRAIT }, margin: MARGEN_V };

export async function construirDocx(doc, destino) {
  const estado = { tablas: 0, listas: 0 };
  // Agrupa las secciones seguidas con la misma orientación en una sola sección de Word.
  const grupos = [];
  for (const s of doc.secciones) {
    const apaisada = Boolean(doc.apaisado || s.apaisada);
    if (!grupos.length || grupos[grupos.length - 1].apaisada !== apaisada) grupos.push({ apaisada, hijos: [] });
    const g = grupos[grupos.length - 1];
    const ancho = anchoUtil(apaisada);
    g.hijos.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(s.titulo)] }));
    for (const b of s.bloques) g.hijos.push(...bloqueDocx(b, ancho, estado));
  }

  const documento = new Document({
    creator: `Equipo ${PROYECTO.sigla} — UNTELS`,
    title: `${doc.id} ${doc.titulo}`,
    description: doc.resumen ?? doc.titulo,
    styles: {
      default: { document: { run: { font: SERIF, size: 24 } } },
      paragraphStyles: [
        {
          id: "Heading1",
          name: "Heading 1",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { font: SANS, size: 27, bold: true, color: NAVY },
          paragraph: {
            spacing: { before: 380, after: 170 },
            keepNext: true,
            outlineLevel: 0,
            border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: TEAL, space: 3 } },
          },
        },
        {
          id: "Heading2",
          name: "Heading 2",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { font: SANS, size: 23, bold: true, color: TEAL },
          paragraph: { spacing: { before: 260, after: 120 }, keepNext: true, outlineLevel: 1 },
        },
      ],
    },
    numbering: {
      config: [
        {
          reference: "vinetas",
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: "•",
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 560, hanging: 280 } } },
            },
          ],
        },
        {
          reference: "numeros",
          levels: [
            {
              level: 0,
              format: LevelFormat.DECIMAL,
              text: "%1.",
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 560, hanging: 340 } } },
            },
          ],
        },
      ],
    },
    sections: [
      { properties: { page: pagina(false) }, children: caratula(doc) },
      {
        properties: { type: SectionType.NEXT_PAGE, page: pagina(false) },
        headers: { default: encabezado(doc, false) },
        footers: { default: pie(false) },
        children: controlDocumento(doc),
      },
      ...grupos.map((g) => ({
        properties: { type: SectionType.NEXT_PAGE, page: pagina(g.apaisada) },
        headers: { default: encabezado(doc, g.apaisada) },
        footers: { default: pie(g.apaisada) },
        children: g.hijos,
      })),
    ],
  });

  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, await Packer.toBuffer(documento));
}
