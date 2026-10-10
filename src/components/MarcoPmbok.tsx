/**
 * Capítulo «Marco de gestión»: cómo se organiza el blog según la Guía del PMBOK®, octava edición,
 * qué procesos están desarrollados y dónde está cada documento.
 */

import { Download, FileText } from "lucide-react";
import { AREAS, DOCUMENTOS, DOMINIOS, PROCESOS } from "../content/documentos";
import DocView from "./DocView";
import { EstadoProceso } from "./DominioPmbok";

const PRINCIPIOS = [
  {
    nombre: "Adoptar una visión holística",
    aplicacion: "Una sola ficha del proyecto y un plan integrado: cada cambio se evalúa a la vez sobre el alcance, el cronograma y los costos.",
    doc: "GOB-04",
  },
  {
    nombre: "Centrarse en el valor",
    aplicacion: "El éxito no es entregar software, sino que el colegio detecte a tiempo a los estudiantes en riesgo. Por eso hay un plan de beneficios con indicadores.",
    doc: "GOB-01",
  },
  {
    nombre: "Incorporar la calidad en los procesos y los entregables",
    aplicacion: "Revisión de calidad antes de cada entrega, casos de prueba por requisito y una definición de terminado.",
    doc: "ALC-03",
  },
  {
    nombre: "Liderar con responsabilidad",
    aplicacion: "Los estudiantes son menores de edad: sus datos no salen del colegio sin anonimizar, y lo simulado se presenta como simulado.",
    doc: "GOB-07",
  },
  {
    nombre: "Integrar la sostenibilidad",
    aplicacion: "El sistema debe poder mantenerlo el colegio cuando el equipo se retire: servicios gestionados, manual técnico y transferencia.",
    doc: "GOB-05",
  },
  {
    nombre: "Construir una cultura de empoderamiento",
    aplicacion: "El equipo decide cómo construir; el colegio, a través del Product Owner, decide qué es prioritario; los docentes validan las variables y el tablero.",
    doc: "INT-02",
  },
];

const CAMBIOS_GUIA = [
  ["Grupos de procesos", "Áreas de enfoque: iniciación, planificación, ejecución, monitoreo y control, y cierre"],
  ["10 áreas de conocimiento", "7 dominios de desempeño"],
  ["49 procesos", "40 procesos"],
  ["Integración, adquisiciones y aseguramiento de la calidad", "Dominio de Gobernanza"],
  ["Calidad: planificación y control", "Dominio de Alcance"],
  ["Comunicaciones", "Dominio de Interesados"],
  ["Costos", "Dominio de Finanzas"],
];

const CAPITULO_DE: Record<string, string> = { Gobernanza: "05", Interesados: "06", Alcance: "07", Cronograma: "08", Finanzas: "09" };
const COLOR_DOMINIO: Record<string, string> = {
  Desarrollado: "bg-emerald-100 text-emerald-800",
  "Desarrollado en parte": "bg-amber-100 text-amber-800",
  "Curso anterior": "bg-blue-100 text-blue-800",
  Pendiente: "bg-slate-100 text-slate-600",
};

export default function MarcoPmbok() {
  const ficha = DOCUMENTOS.find((d) => d.id === "BASE-01");
  const conDocumento = PROCESOS.filter((p) => p.estado === "Aplicado").length;
  return (
    <div className="text-slate-800">
      {/* ── LA GUÍA ── */}
      <section id="pmbok-guia" className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">04.1 · Guía de referencia</p>
          <h3 className="font-serif text-2xl font-bold text-slate-900">La guía que ordena este proyecto</h3>
          <p className="text-sm text-slate-700 leading-relaxed mt-3 max-w-3xl">
            Desde este capítulo el blog sigue la <strong>Guía del PMBOK®, octava edición</strong> (PMI, 2025), que es la que trabaja el curso
            Gestión de Proyecto de TI. La guía propone seis principios, cinco áreas de enfoque y siete dominios de desempeño que agrupan 40
            procesos. Los capítulos 00 a 03 corresponden al trabajo previo de formulación; los capítulos 05 a 08 desarrollan un dominio cada uno.
          </p>

          <div className="grid sm:grid-cols-4 gap-3 mt-7">
            {[
              ["6", "principios"],
              ["5", "áreas de enfoque"],
              ["7", "dominios de desempeño"],
              ["40", "procesos"],
            ].map(([n, t]) => (
              <div key={t} className="border border-slate-200 rounded-xl p-4 text-center bg-slate-50">
                <p className="font-serif text-3xl font-bold text-[#1f3864]">{n}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 mt-1">{t}</p>
              </div>
            ))}
          </div>

          <h4 className="font-serif font-bold text-slate-900 text-base mt-10 mb-3">Qué cambió respecto de la sexta edición</h4>
          <p className="text-sm text-slate-600 leading-relaxed mb-4 max-w-3xl">
            Los documentos del curso anterior citaban la sexta edición. El cambio de guía está registrado como solicitud de cambio SC-07.
          </p>
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-[#1f3864] text-white">
                  <th className="px-3 py-2 font-semibold w-1/2">Sexta edición</th>
                  <th className="px-3 py-2 font-semibold">Octava edición</th>
                </tr>
              </thead>
              <tbody>
                {CAMBIOS_GUIA.map(([antes, ahora], i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                    <td className="px-3 py-2 border-t border-slate-200 text-slate-600">{antes}</td>
                    <td className="px-3 py-2 border-t border-slate-200 text-slate-800 font-medium">{ahora}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PRINCIPIOS ── */}
      <section id="pmbok-principios" className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">04.2 · Principios</p>
          <h3 className="font-serif text-2xl font-bold text-slate-900">Los seis principios y cómo se aplican</h3>
          <div className="grid md:grid-cols-2 gap-4 mt-7">
            {PRINCIPIOS.map((pr, i) => (
              <div key={pr.nombre} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[11px] font-bold bg-[#e8f5f5] text-[#0d7377] rounded px-2 py-0.5 flex-shrink-0">{i + 1}</span>
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 text-sm leading-snug">{pr.nombre}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1.5">{pr.aplicacion}</p>
                    <a href={`#doc-${pr.doc}`} className="inline-block font-mono text-[10px] font-bold text-[#0d7377] hover:underline mt-2">
                      Ver {pr.doc} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAPA DE PROCESOS ── */}
      <section id="pmbok-mapa" className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">04.3 · Mapa de procesos</p>
          <h3 className="font-serif text-2xl font-bold text-slate-900">Los 40 procesos y su estado en el proyecto</h3>
          <p className="text-sm text-slate-700 leading-relaxed mt-3 max-w-3xl">
            Cada fila es un dominio de desempeño y cada columna, un área de enfoque. {conDocumento} de los 40 procesos tienen un documento
            nuevo de esta etapa. Los nombres con enlace llevan a la sección donde se desarrolla el proceso.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Aplicado", "Planificado", "Curso anterior", "Pendiente"].map((e) => (
              <span key={e}>
                <EstadoProceso estado={e} />
              </span>
            ))}
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-lg mt-5">
            <table className="w-full text-[11px] text-left min-w-[900px] border-collapse">
              <thead>
                <tr className="bg-[#1f3864] text-white">
                  <th className="px-3 py-2 font-semibold w-[14%]">Dominio</th>
                  {AREAS.map((a) => (
                    <th key={a} className="px-3 py-2 font-semibold border-l border-white/10">
                      {a}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DOMINIOS.map((d) => (
                  <tr key={d.id} className="align-top">
                    <td className="px-3 py-3 border-t border-slate-200 bg-slate-50">
                      <p className="font-serif font-bold text-slate-900 text-xs">{d.nombre}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{d.procesos} procesos</p>
                      <span className={`inline-block mt-1.5 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${COLOR_DOMINIO[d.estado]}`}>{d.estado}</span>
                    </td>
                    {AREAS.map((a) => (
                      <td key={a} className="px-2 py-3 border-t border-l border-slate-200">
                        <div className="space-y-2">
                          {PROCESOS.filter((p) => p.dominio === d.nombre && p.area === a).map((p) => (
                            <div key={p.id}>
                              {p.que ? (
                                <a href={`#${p.id}`} className="text-slate-800 font-medium hover:text-[#0d7377] hover:underline leading-snug block">
                                  {p.nombre}
                                </a>
                              ) : (
                                <span className="text-slate-600 leading-snug block">{p.nombre}</span>
                              )}
                              <div className="mt-1">
                                <EstadoProceso estado={p.estado} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
            {DOMINIOS.map((d) => (
              <div key={d.id} className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-serif font-bold text-slate-900 text-sm">{d.nombre}</p>
                  {CAPITULO_DE[d.nombre] && <span className="font-mono text-[10px] text-slate-500">Cap. {CAPITULO_DE[d.nombre]}</span>}
                </div>
                <p className="text-[11px] text-slate-600 leading-snug mt-1.5">{d.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÍNDICE DE DOCUMENTOS ── */}
      <section id="pmbok-documentos" className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">04.4 · Documentación</p>
          <h3 className="font-serif text-2xl font-bold text-slate-900">Índice de documentos del proyecto</h3>
          <p className="text-sm text-slate-700 leading-relaxed mt-3 max-w-3xl">
            Los {DOCUMENTOS.length} documentos de gestión de esta etapa se pueden leer aquí mismo, abrir en PDF o descargar en Word. El blog y los
            archivos se generan desde un mismo contenido, de modo que siempre dicen lo mismo.
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-lg mt-6 bg-white">
            <table className="w-full text-xs text-left min-w-[720px]">
              <thead>
                <tr className="bg-[#1f3864] text-white">
                  <th className="px-3 py-2 font-semibold">Código</th>
                  <th className="px-3 py-2 font-semibold">Documento</th>
                  <th className="px-3 py-2 font-semibold">Dominio</th>
                  <th className="px-3 py-2 font-semibold">Proceso</th>
                  <th className="px-3 py-2 font-semibold text-center">Archivos</th>
                </tr>
              </thead>
              <tbody>
                {DOCUMENTOS.map((d, i) => (
                  <tr key={d.id} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                    <td className="px-3 py-2 border-t border-slate-200 font-mono font-bold text-[#1f3864] whitespace-nowrap">{d.id}</td>
                    <td className="px-3 py-2 border-t border-slate-200">
                      <a href={`#doc-${d.id}`} className="text-slate-800 font-medium hover:text-[#0d7377] hover:underline">
                        {d.titulo}
                      </a>
                    </td>
                    <td className="px-3 py-2 border-t border-slate-200 text-slate-600">{d.dominio ?? "Transversal"}</td>
                    <td className="px-3 py-2 border-t border-slate-200 text-slate-600">{d.proceso}</td>
                    <td className="px-3 py-2 border-t border-slate-200">
                      <div className="flex items-center justify-center gap-1.5">
                        <a
                          href={d.pdf}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Abrir ${d.id} en PDF`}
                          className="inline-flex items-center gap-1 border border-slate-300 rounded px-2 py-1 text-[10px] font-semibold text-slate-700 hover:bg-slate-100"
                        >
                          <FileText className="w-3 h-3" /> PDF
                        </a>
                        <a
                          href={d.docx}
                          download
                          aria-label={`Descargar ${d.id} en Word`}
                          className="inline-flex items-center gap-1 border border-slate-300 rounded px-2 py-1 text-[10px] font-semibold text-slate-700 hover:bg-slate-100"
                        >
                          <Download className="w-3 h-3" /> Word
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {ficha && (
            <div className="mt-8">
              <DocView doc={ficha} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
