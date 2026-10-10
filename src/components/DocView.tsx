/**
 * Muestra un documento de gestión del proyecto tal como está en la carpeta «Documentación»:
 * resumen, botones de descarga (PDF y Word) y, al desplegarlo, su contenido completo.
 * El contenido viene de src/content/documentos.ts, que se genera junto con los archivos Word.
 */

import { Fragment, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown, Download, FileText } from "lucide-react";
import type { Bloque, Celda, CeldaDef, DocDef } from "../content/tipos";

const RELLENO: Record<string, string> = {
  verde: "bg-emerald-100",
  amarillo: "bg-amber-100",
  rojo: "bg-rose-200",
  azul: "bg-blue-100",
  gris: "bg-slate-200",
  teal: "bg-teal-200",
  naranja: "bg-orange-100",
  morado: "bg-purple-100",
  navy: "bg-[#1f3864] text-white",
};

const NOTA: Record<string, { caja: string; etiqueta: string; texto: string }> = {
  info: { caja: "border-[#0d7377] bg-teal-50", etiqueta: "Nota", texto: "text-[#0d7377]" },
  aviso: { caja: "border-amber-500 bg-amber-50", etiqueta: "Importante", texto: "text-amber-700" },
  simulado: { caja: "border-purple-500 bg-purple-50", etiqueta: "Simulación", texto: "text-purple-700" },
};

// "texto con **negrita**" → nodos
function rico(texto: string): ReactNode {
  return texto.split("**").map((parte, i) => (i % 2 === 1 ? <strong key={i}>{parte}</strong> : <Fragment key={i}>{parte}</Fragment>));
}

function esCelda(v: Celda): v is CeldaDef {
  return typeof v === "object" && !Array.isArray(v);
}

function contenidoCelda(x: string | string[]): ReactNode {
  if (Array.isArray(x)) {
    return (
      <div className="space-y-1">
        {x.map((linea, i) => (
          <div key={i}>{rico(linea)}</div>
        ))}
      </div>
    );
  }
  return rico(x);
}

function Tabla({ b }: { b: Extract<Bloque, { t: "tabla" }> }) {
  const ancha = b.cols.length > 6;
  const muyAncha = b.cols.length > 12;
  return (
    <figure className="my-5">
      {b.titulo && <figcaption className="text-xs font-semibold text-[#1f3864] mb-2">{b.titulo}</figcaption>}
      <div className="overflow-x-auto border border-slate-200 rounded-lg">
        <table className={`w-full text-left border-collapse ${b.compacta ? "text-[11px]" : "text-xs"} ${muyAncha ? "min-w-[980px]" : ancha ? "min-w-[820px]" : ""}`}>
          <colgroup>
            {b.anchos.map((a, i) => (
              <col key={i} style={{ width: `${a}%` }} />
            ))}
          </colgroup>
          <thead>
            <tr className="bg-[#1f3864] text-white">
              {b.cols.map((col, i) => (
                <th key={i} className={`font-semibold ${muyAncha && i > 0 ? "px-0.5 text-center" : "px-3"} py-2 align-middle border-r border-white/10 last:border-r-0`}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {b.filas.map((fila, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-slate-50/70" : "bg-white"}>
                {fila.map((valor, j) => {
                  const cel: CeldaDef = esCelda(valor) ? valor : { x: valor };
                  const alineado = cel.align === "center" ? "text-center" : cel.align === "right" ? "text-right" : "";
                  return (
                    <td
                      key={j}
                      className={`${muyAncha && j > 0 ? "px-0.5" : "px-3"} py-2 align-top border-t border-r border-slate-200 last:border-r-0 text-slate-700 leading-snug ${cel.fill ? RELLENO[cel.fill] ?? "" : ""} ${cel.bold ? "font-semibold text-slate-900" : ""} ${alineado}`}
                    >
                      {contenidoCelda(cel.x)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {b.fuente && <p className="text-[11px] text-slate-500 italic mt-1.5 leading-snug">{b.fuente}</p>}
    </figure>
  );
}

export function BloqueView({ b }: { b: Bloque }) {
  switch (b.t) {
    case "p":
      return <p className="text-sm text-slate-700 leading-relaxed my-3">{rico(b.x)}</p>;
    case "h":
      return <h5 className="font-serif font-bold text-[#0d7377] text-sm mt-5 mb-2">{b.x}</h5>;
    case "ul":
      return (
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700 leading-relaxed my-3">
          {b.items.map((it, i) => (
            <li key={i}>{rico(it)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal pl-5 space-y-1.5 text-sm text-slate-700 leading-relaxed my-3">
          {b.items.map((it, i) => (
            <li key={i}>{rico(it)}</li>
          ))}
        </ol>
      );
    case "tabla":
      return <Tabla b={b} />;
    case "nota": {
      const n = NOTA[b.tipo] ?? NOTA.info;
      return (
        <div className={`border-l-4 ${n.caja} rounded-r-lg px-4 py-3 my-4 text-sm text-slate-700 leading-relaxed`}>
          <strong className={n.texto}>{n.etiqueta}.</strong> {rico(b.x)}
        </div>
      );
    }
    case "kv":
      return (
        <div className="my-4 border border-slate-200 rounded-lg overflow-hidden text-xs">
          {b.filas.map(([k, v], i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-[30%_70%] border-t border-slate-200 first:border-t-0">
              <div className="bg-slate-100 px-3 py-2 font-semibold text-[#1f3864]">{k}</div>
              <div className="px-3 py-2 text-slate-700 leading-snug break-words min-h-[2rem]">{rico(v)}</div>
            </div>
          ))}
        </div>
      );
    case "firmas":
      return (
        <div className="grid sm:grid-cols-3 gap-6 mt-10 mb-4">
          {b.firmantes.map((f, i) => (
            <div key={i} className="text-center">
              <div className="border-t border-slate-500 pt-2 mt-8">
                <p className="text-xs font-semibold text-slate-900">{f.nombre}</p>
                <p className="text-[11px] text-slate-500">{f.rol}</p>
              </div>
            </div>
          ))}
        </div>
      );
  }
}

interface DocViewProps {
  doc: DocDef;
  abierto?: boolean;
}

export default function DocView({ doc, abierto = false }: DocViewProps) {
  const [open, setOpen] = useState(abierto);

  // Un enlace del índice (#doc-GOB-02) lleva al documento y lo despliega.
  useEffect(() => {
    const abrirSiEsDestino = () => {
      if (window.location.hash === `#doc-${doc.id}`) setOpen(true);
    };
    abrirSiEsDestino();
    window.addEventListener("hashchange", abrirSiEsDestino);
    return () => window.removeEventListener("hashchange", abrirSiEsDestino);
  }, [doc.id]);
  return (
    <article id={`doc-${doc.id}`} className="border border-slate-200 rounded-2xl bg-white shadow-xs overflow-hidden">
      <header className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="font-mono text-[10px] font-bold bg-[#1f3864] text-white px-2 py-0.5 rounded">{doc.id}</span>
          <span className="font-mono text-[10px] text-slate-500">
            Versión {doc.version} · {doc.fecha}
          </span>
        </div>
        <h4 className="font-serif text-lg font-bold text-slate-900 leading-snug">{doc.titulo}</h4>
        <p className="text-xs text-slate-500 mt-1">
          <span className="font-semibold text-slate-600">Salida del proceso:</span> {doc.salida}
        </p>
        {doc.resumen && <p className="text-sm text-slate-700 leading-relaxed mt-3">{doc.resumen}</p>}
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#0d7377] text-white px-3.5 py-2 rounded-lg hover:bg-[#0a5c5f] transition-colors cursor-pointer"
          >
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
            {open ? "Ocultar el documento" : "Leer el documento"}
          </button>
          <a
            href={doc.pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold border border-slate-300 text-slate-700 px-3.5 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            Abrir PDF
          </a>
          <a
            href={doc.docx}
            download
            className="inline-flex items-center gap-1.5 text-xs font-semibold border border-slate-300 text-slate-700 px-3.5 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Descargar Word
          </a>
        </div>
      </header>

      {open && (
        <div className="border-t border-slate-200 bg-slate-50/40 px-5 sm:px-6 py-5">
          {doc.secciones.map((s, i) => (
            <section key={i} className="mb-7 last:mb-0">
              <h5 className="font-serif font-bold text-[#1f3864] text-base border-b border-[#0d7377]/40 pb-1.5 mb-3">{s.titulo}</h5>
              {s.bloques.map((b, j) => (
                <Fragment key={j}>
                  <BloqueView b={b} />
                </Fragment>
              ))}
            </section>
          ))}
        </div>
      )}
    </article>
  );
}
