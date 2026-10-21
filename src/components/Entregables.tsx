/**
 * Sección «Entregables»: los nueve entregables del producto (ALC-02) con su estado al corte del informe
 * ALC-05, y los documentos de gestión con su enlace de Google Drive. Enlace directo: #entregables.
 */

import { useEffect } from "react";
import { ExternalLink, FolderOpen, Github, MonitorSmartphone } from "lucide-react";
import { DRIVE_CARPETA, ENTREGABLES_ESTADO, PROYECTO } from "../content/datos";
import { DOCUMENTOS } from "../content/documentos";

const ESTILO_ESTADO: Record<string, string> = {
  "En validación": "bg-amber-100 text-amber-800 border-amber-300",
  "En desarrollo": "bg-blue-50 text-blue-700 border-blue-200",
  "No iniciado": "bg-slate-100 text-slate-600 border-slate-200",
  Cumplido: "bg-emerald-50 text-emerald-700 border-emerald-200",
};
const ESTILO_PAQUETE: Record<string, string> = {
  Cumplido: "text-emerald-700",
  "Cumplido en parte": "text-teal-700",
  Prototipo: "text-amber-700",
  "En curso": "text-blue-700",
  "No iniciado": "text-slate-500",
};
const GRUPOS_DOCS = [
  { titulo: "Ficha del proyecto", filtro: (d: (typeof DOCUMENTOS)[number]) => !d.dominio },
  { titulo: "Gobernanza", filtro: (d: (typeof DOCUMENTOS)[number]) => d.dominio === "Gobernanza" },
  { titulo: "Interesados", filtro: (d: (typeof DOCUMENTOS)[number]) => d.dominio === "Interesados" },
  { titulo: "Alcance", filtro: (d: (typeof DOCUMENTOS)[number]) => d.dominio === "Alcance" },
  { titulo: "Cronograma", filtro: (d: (typeof DOCUMENTOS)[number]) => d.dominio === "Cronograma" },
];

const boton = "inline-flex items-center gap-1.5 text-xs font-semibold border border-slate-300 text-slate-700 bg-white px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors";

export default function Entregables() {
  // Enlace directo (…/#entregables): lleva a la sección aunque la página termine de cargar después.
  useEffect(() => {
    if (window.location.hash === "#entregables" || window.location.hash === "#entregables-documentos") {
      setTimeout(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView(), 300);
    }
  }, []);

  const cuenta = (estado: string) => ENTREGABLES_ESTADO.filter((e) => e.estado === estado).length;

  return (
    <div>
      <section id="entregables" className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">Entregables del proyecto</p>
          <h2 className="font-serif text-3xl font-bold text-slate-900">Entregables del producto</h2>
          <p className="text-sm text-slate-700 leading-relaxed mt-3 max-w-3xl">
            Los {ENTREGABLES_ESTADO.length} entregables del producto definidos en el enunciado del alcance (ALC-02), con su estado al{" "}
            {PROYECTO.fechaCorte} según el informe de avance del producto (ALC-05 N.º 2) y los enlaces para revisarlos. Cada entregable se acepta en la
            revisión del sprint indicado, con el Product Owner.
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            <a href={PROYECTO.enlaces.prototipo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold bg-[#0d7377] text-white px-3.5 py-2 rounded-lg hover:bg-[#0a5c5f] transition-colors">
              <MonitorSmartphone className="w-4 h-4" /> Abrir el sistema SIA-T
            </a>
            <a href={DRIVE_CARPETA} target="_blank" rel="noreferrer" className={boton}>
              <FolderOpen className="w-4 h-4" /> Documentos de gestión en Drive
            </a>
            <a href={PROYECTO.enlaces.repoSistema} target="_blank" rel="noreferrer" className={boton}>
              <Github className="w-4 h-4" /> Repositorio del sistema
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mt-5 text-[11px]">
            {["En validación", "En desarrollo", "No iniciado"].map((e) => (
              <span key={e} className={`border rounded-full px-2.5 py-0.5 font-semibold ${ESTILO_ESTADO[e]}`}>
                {e}: {cuenta(e)}
              </span>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-4 mt-6">
            {ENTREGABLES_ESTADO.map((e) => (
              <article key={e.id} id={`entregable-${e.id}`} className={`border rounded-2xl p-5 bg-white flex flex-col gap-3 ${e.estado === "En validación" ? "border-amber-300 ring-1 ring-amber-200" : "border-slate-200"}`}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] font-bold bg-slate-800 text-white px-2 py-0.5 rounded">{e.id}</span>
                  <span className="text-[10px] font-semibold text-slate-500 border border-slate-200 rounded px-1.5 py-0.5">{e.tipo}</span>
                  <span className={`text-[10px] font-bold border rounded px-1.5 py-0.5 ${ESTILO_ESTADO[e.estado]}`}>{e.estado}</span>
                  <span className="text-[10px] text-slate-500 ml-auto">
                    Sprint {e.sprint} · revisión {e.revision}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 leading-snug">{e.nombre}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">{e.descripcion}</p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                    <span>Avance del producto (promedio de sus paquetes)</span>
                    <span className="font-mono font-bold text-slate-700">{e.avance} %</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full rounded-full bg-[#0d7377]" style={{ width: `${e.avance}%` }} />
                  </div>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">{e.nota}</p>

                <div className="text-[11px] space-y-0.5">
                  <p className="font-semibold text-slate-500 uppercase tracking-wide text-[10px]">Paquetes de la EDT</p>
                  {e.paquetes.map((p) => (
                    <p key={p.id} className="text-slate-600" title={`Qué existe: ${p.existe}\nQué falta: ${p.falta}`}>
                      <span className="font-mono text-slate-500">{p.id}</span> {p.nombre} ·{" "}
                      <span className={`font-semibold ${ESTILO_PAQUETE[p.estado] ?? ""}`}>
                        {p.estado}
                        {p.pct !== null ? ` (${p.pct} %)` : ""}
                      </span>
                    </p>
                  ))}
                </div>

                {e.requisitos.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {e.requisitos.map((r) => (
                      <span key={r.id} title={r.titulo} className="font-mono text-[10px] bg-slate-50 border border-slate-200 text-slate-600 rounded px-1.5 py-0.5">
                        {r.id}
                      </span>
                    ))}
                  </div>
                )}

                {(e.evidencias.length > 0 || e.documentos.length > 0) && (
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                    {e.evidencias.map((v) => (
                      <a key={v.url} href={v.url} target="_blank" rel="noreferrer" className={boton}>
                        <ExternalLink className="w-3.5 h-3.5" /> {v.texto}
                      </a>
                    ))}
                    {e.documentos.map(
                      (d) =>
                        d.drive && (
                          <a key={d.id} href={d.drive} target="_blank" rel="noreferrer" className={boton} title={d.titulo}>
                            <ExternalLink className="w-3.5 h-3.5" /> {d.id} en Drive
                          </a>
                        ),
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="entregables-documentos" className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">Entregables del proyecto · Documentos</p>
          <h3 className="font-serif text-2xl font-bold text-slate-900">Documentos de gestión en Google Drive</h3>
          <p className="text-sm text-slate-700 leading-relaxed mt-3 max-w-3xl">
            Los {DOCUMENTOS.length} documentos de gestión de esta etapa, en Word, para verlos en Google Drive sin descargarlos. También se pueden leer
            dentro de este blog, en el capítulo de su dominio.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {GRUPOS_DOCS.map((g) => {
              const docs = DOCUMENTOS.filter(g.filtro);
              return (
                <div key={g.titulo} className="border border-slate-200 rounded-xl bg-white overflow-hidden">
                  <p className="px-4 py-2 text-xs font-bold text-slate-800 bg-slate-100 border-b border-slate-200">
                    {g.titulo} <span className="font-normal text-slate-500">· {docs.length}</span>
                  </p>
                  <ul className="divide-y divide-slate-100">
                    {docs.map((d) => (
                      <li key={d.id} className="flex items-center gap-2 px-4 py-2 text-xs">
                        <span className="font-mono font-bold text-slate-500 w-16 shrink-0">{d.id}</span>
                        <a href={`#doc-${d.id}`} className="flex-1 text-slate-700 hover:text-[#0d7377] hover:underline leading-snug">
                          {d.titulo}
                        </a>
                        {d.drive && (
                          <a href={d.drive} target="_blank" rel="noreferrer" aria-label={`Ver ${d.id} en Google Drive`} className="inline-flex items-center gap-1 border border-slate-300 rounded px-2 py-1 text-[10px] font-semibold text-slate-700 hover:bg-slate-100 whitespace-nowrap">
                            <ExternalLink className="w-3 h-3" /> Drive
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
