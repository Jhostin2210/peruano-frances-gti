/**
 * EDT versión 4 (SC-10): árbol de la EDT y diccionario, desde los mismos datos del enunciado del alcance (ALC-02)
 * y del cronograma (CRO-01). Cada paquete muestra las actividades del cronograma que lo producen.
 */

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { COMPONENTES, ENTREGABLES_CRONOGRAMA, PAQUETES, SEGUIMIENTO_ALCANCE } from "../content/datos";

const ULTIMO = SEGUIMIENTO_ALCANCE[SEGUIMIENTO_ALCANCE.length - 1];
const avanceDe = (id: string) => ULTIMO.paquetes.find((p) => p.id === id);
const actividadesDe = (id: string) => ENTREGABLES_CRONOGRAMA.filter((a) => a.paquete === id);
const componenteDe = (id: string) => id.split(".").slice(0, 2).join(".");
const fecha = (iso: string) => iso.split("-").reverse().join("/");
const ESTADO: Record<string, string> = {
  Cumplido: "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Cumplido en parte": "bg-teal-50 text-teal-800 border-teal-200",
  Prototipo: "bg-amber-50 text-amber-800 border-amber-200",
  "En curso": "bg-blue-50 text-blue-800 border-blue-200",
  "No iniciado": "bg-slate-100 text-slate-600 border-slate-200",
};

export default function EdtProyecto() {
  const [busqueda, setBusqueda] = useState("");
  const [componente, setComponente] = useState("Todos");
  const visibles = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return PAQUETES.filter(
      (p) =>
        (componente === "Todos" || componenteDe(p.id) === componente) &&
        (!q ||
          [p.id, p.nombre, p.responsable, p.entregable, p.criterio, ...actividadesDe(p.id).map((a) => `${a.id} ${a.descripcion} ${a.entregable}`)]
            .join(" ")
            .toLowerCase()
            .includes(q)),
    );
  }, [busqueda, componente]);

  return (
    <div>
      {/* ── ÁRBOL DE LA EDT ── */}
      <section id="p05-diagrama-edt" className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">07.4 · Desarrollar la estructura del alcance · EDT versión 4</p>
          <h3 className="font-serif text-2xl font-bold text-slate-900">Estructura de desglose del trabajo (EDT)</h3>
          <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">
            La EDT descompone el proyecto en {COMPONENTES.length} componentes y {PAQUETES.length} paquetes de trabajo, cada uno con su entregable. En la versión 4
            (SC-10) se unifica con su diccionario, se agrega el componente <strong>1.0 Análisis y diseño</strong> para el trabajo del Sprint 1 y cada actividad del
            cronograma queda dentro de un paquete. Toque un paquete para ver su detalle en el diccionario.
          </p>

          <div className="mt-6 overflow-x-auto pb-2">
            <div className="min-w-[980px]">
              <div className="flex justify-center">
                <div className="bg-[#1f3864] text-white rounded-xl px-5 py-3 text-center shadow-sm">
                  <p className="font-mono text-[10px] opacity-80">1</p>
                  <p className="font-serif font-bold text-sm">SIA-T · Sistema ML de alerta temprana del bajo rendimiento académico</p>
                </div>
              </div>
              <div className="mx-auto h-4 w-px bg-slate-300" />
              <div className="grid gap-2 border-t border-slate-300 pt-4" style={{ gridTemplateColumns: `repeat(${COMPONENTES.length}, minmax(0, 1fr))` }}>
                {COMPONENTES.map((c) => (
                  <div key={c.id} className="space-y-1.5">
                    <div className={`rounded-lg border px-2 py-2 text-center ${c.id === "1.0" ? "border-teal-400 bg-teal-50" : "border-slate-300 bg-slate-100"}`}>
                      <p className="font-mono text-[10px] font-bold text-slate-500">{c.id}</p>
                      <p className="text-[11px] font-bold text-slate-900 leading-tight">{c.nombre}</p>
                      {c.id === "1.0" && <p className="text-[9px] font-semibold text-teal-700 mt-0.5">Nuevo en la versión 4</p>}
                    </div>
                    {PAQUETES.filter((p) => componenteDe(p.id) === c.id).map((p) => {
                      const av = avanceDe(p.id);
                      return (
                        <a
                          key={p.id}
                          href={`#edt-${p.id}`}
                          title={`${p.id} ${p.nombre}\nEntregable: ${p.entregable}\nActividades: ${actividadesDe(p.id).map((a) => a.id).join(", ") || "—"}`}
                          className="block rounded-lg border border-slate-200 bg-white px-2 py-1.5 hover:border-[#0d7377] hover:shadow-sm transition"
                        >
                          <p className="font-mono text-[9px] text-slate-400">{p.id}</p>
                          <p className="text-[10px] font-semibold text-slate-800 leading-tight">{p.nombre}</p>
                          <p className="text-[9px] text-slate-500 leading-tight mt-0.5">{p.entregable}</p>
                          {av && av.pct !== null && (
                            <div className="mt-1 h-1 rounded-full bg-slate-100">
                              <div className="h-full rounded-full bg-[#0d7377]" style={{ width: `${av.pct}%` }} />
                            </div>
                          )}
                        </a>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 mt-3">
            La barra de cada paquete es su avance al {fecha(ULTIMO.fecha)} según el tablero de monitoreo del alcance. Los paquetes de gestión (1.1) no se miden en
            porcentaje.
          </p>
        </div>
      </section>

      {/* ── DICCIONARIO DE LA EDT ── */}
      <section id="p05-diccionario" className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">07.4 · Desarrollar la estructura del alcance · Diccionario</p>
          <h3 className="font-serif text-2xl font-bold text-slate-900">Diccionario de la EDT</h3>
          <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">
            Cada paquete con su responsable, su entregable, su criterio de aceptación y las actividades del cronograma que lo producen, con el entregable de cada
            una. Es el enlace entre la EDT y el cronograma.
          </p>

          <div className="flex flex-col md:flex-row gap-3 mt-5">
            <div className="relative md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar paquete, actividad o entregable"
                className="w-full bg-white border border-slate-200 rounded-lg py-2 pl-9 pr-3 text-xs"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Todos", ...COMPONENTES.map((c) => c.id)].map((id) => (
                <button
                  key={id}
                  onClick={() => setComponente(id)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border cursor-pointer ${componente === id ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}
                  title={id === "Todos" ? "" : COMPONENTES.find((c) => c.id === id)?.nombre}
                >
                  {id === "Todos" ? "Todos" : `${id} ${COMPONENTES.find((c) => c.id === id)?.nombre}`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 mt-5">
            {visibles.map((p) => {
              const av = avanceDe(p.id);
              const acts = actividadesDe(p.id);
              return (
                <article key={p.id} id={`edt-${p.id}`} className="bg-white border border-slate-200 rounded-2xl p-5 scroll-mt-20">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] font-bold bg-slate-800 text-white px-2 py-0.5 rounded">{p.id}</span>
                    {p.origen === "v4" && <span className="text-[10px] font-semibold border border-teal-300 bg-teal-50 text-teal-800 rounded px-1.5 py-0.5">Versión 4</span>}
                    {av && <span className={`text-[10px] font-semibold border rounded px-1.5 py-0.5 ${ESTADO[av.estado] ?? ""}`}>{av.estado}{av.pct !== null ? ` · ${av.pct} %` : ""}</span>}
                    <span className="text-[10px] text-slate-500 ml-auto">{p.responsable}</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-slate-900 mt-2">{p.nombre}</h4>
                  <dl className="text-xs mt-2 space-y-1">
                    <div>
                      <dt className="inline font-semibold text-slate-700">Entregable: </dt>
                      <dd className="inline text-slate-600">{p.entregable}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold text-slate-700">Criterio de aceptación: </dt>
                      <dd className="inline text-slate-600">{p.criterio}</dd>
                    </div>
                  </dl>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide mt-3 mb-1">Actividades del cronograma</p>
                  {acts.length === 0 ? (
                    <p className="text-[11px] text-slate-500">Trabajo continuo de gestión, sin actividad propia en el cronograma.</p>
                  ) : (
                    <ul className="space-y-1">
                      {acts.map((a) => (
                        <li key={a.id} className="text-[11px] text-slate-600 leading-snug">
                          <span className={`font-mono ${a.critica ? "text-red-700 font-bold" : "text-slate-500"}`}>{a.id}</span> {a.descripcion}
                          <span className="block text-slate-500">
                            → {a.entregable} · Sprint {a.sprint} · {fecha(a.inicio)} al {fecha(a.fin)}
                            {a.estado === "Realizada" ? <span className="text-emerald-700 font-semibold"> · Realizada</span> : null}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
