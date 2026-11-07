/**
 * Entregables del cronograma: cada actividad con el paquete de la EDT al que pertenece, el entregable que produce,
 * sus fechas, su estado al último corte y la evidencia de las ya realizadas (CRO-01, sección 10).
 */

import { useState } from "react";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { CORTE_ALCANCE, ENTREGABLES_CRONOGRAMA, SPRINTS } from "../content/datos";

const ESTADOS = ["Realizada", "En curso", "Por confirmar", "Programada"] as const;
const ESTILO: Record<string, string> = {
  Realizada: "bg-emerald-100 text-emerald-800 border-emerald-200",
  "En curso": "bg-blue-50 text-blue-800 border-blue-200",
  "Por confirmar": "bg-amber-100 text-amber-800 border-amber-200",
  Programada: "bg-slate-100 text-slate-600 border-slate-200",
};
const corta = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}`;
const larga = (iso: string) => iso.split("-").reverse().join("/");

export default function EntregablesCronograma() {
  const [sprint, setSprint] = useState(1);
  const cuenta = (e: string) => ENTREGABLES_CRONOGRAMA.filter((a) => a.estado === e).length;
  const sp = SPRINTS[sprint - 1];
  const lista = ENTREGABLES_CRONOGRAMA.filter((a) => a.sprint === sprint);
  const realizadasDelSprint = lista.filter((a) => a.estado === "Realizada").length;

  return (
    <section id="cro-entregables" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">08.2 · Desarrollar el cronograma · Entregables</p>
        <h3 className="font-serif text-2xl font-bold text-slate-900">Entregables del cronograma</h3>
        <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">
          Cada actividad del cronograma produce un entregable y pertenece a un paquete de trabajo de la EDT versión 4. Aquí se ve qué entrega cada actividad y,
          en las ya realizadas, su evidencia. Estado al {CORTE_ALCANCE}.
        </p>

        <div className="flex flex-wrap gap-2 mt-4 text-[11px]">
          {ESTADOS.map((e) => (
            <span key={e} className={`border rounded-full px-2.5 py-0.5 font-semibold ${ESTILO[e]}`}>
              {e}: {cuenta(e)}
            </span>
          ))}
          <span className="text-slate-500 self-center">de {ENTREGABLES_CRONOGRAMA.length} actividades</span>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {SPRINTS.map((s) => (
            <button
              key={s.n}
              onClick={() => setSprint(s.n)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border cursor-pointer transition-colors ${sprint === s.n ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}
            >
              Sprint {s.n}
            </button>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl mt-4 overflow-hidden">
          <div className="px-5 py-3 border-b border-slate-200 flex flex-wrap items-center gap-x-4 gap-y-1">
            <p className="font-serif font-bold text-slate-900 text-sm">
              Sprint {sp.n}: {sp.nombre}
            </p>
            <p className="text-[11px] text-slate-500">
              {larga(sp.inicio)} al {larga(sp.fin)} · Hito: {sp.entregable} ({larga(sp.revision)})
            </p>
            {realizadasDelSprint === lista.length && lista.length > 0 && (
              <p className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" /> Hito cumplido
              </p>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-xs">
              <thead>
                <tr className="bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500 text-left">
                  <th className="px-4 py-2 font-semibold">Actividad</th>
                  <th className="px-3 py-2 font-semibold">Paquete de la EDT</th>
                  <th className="px-3 py-2 font-semibold">Entregable</th>
                  <th className="px-3 py-2 font-semibold">Fechas</th>
                  <th className="px-3 py-2 font-semibold">Estado</th>
                  <th className="px-4 py-2 font-semibold">Evidencia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {lista.map((a) => (
                  <tr key={a.id} className="align-top">
                    <td className="px-4 py-2.5">
                      <span className={`font-mono text-[10px] ${a.critica ? "text-red-700 font-bold" : "text-slate-500"}`}>{a.id}</span>
                      <p className="text-slate-700 leading-snug">{a.descripcion}</p>
                      <p className="text-[10px] text-slate-400">{a.responsable}</p>
                    </td>
                    <td className="px-3 py-2.5 text-slate-600">
                      <a href={`#edt-${a.paquete}`} className="hover:underline">
                        <span className="font-mono text-slate-500">{a.paquete}</span> {a.paqueteNombre}
                      </a>
                    </td>
                    <td className="px-3 py-2.5 font-semibold text-slate-800">{a.entregable}</td>
                    <td className="px-3 py-2.5 font-mono text-[11px] text-slate-600 whitespace-nowrap">
                      {corta(a.inicio)}–{corta(a.fin)}
                    </td>
                    <td className="px-3 py-2.5">
                      <span className={`border rounded px-1.5 py-0.5 text-[10px] font-semibold whitespace-nowrap ${ESTILO[a.estado]}`}>{a.estado}</span>
                    </td>
                    <td className="px-4 py-2.5 text-[11px] text-slate-600">
                      {a.evidencias.length === 0 ? (
                        <span className="text-slate-400">—</span>
                      ) : (
                        <ul className="space-y-1">
                          {a.evidencias.map((e) => (
                            <li key={e.texto}>
                              {e.url ? (
                                <a href={e.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline text-[#0d7377]">
                                  {e.texto} <ExternalLink className="w-3 h-3" />
                                </a>
                              ) : (
                                e.texto
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-[11px] text-slate-500 mt-3">
          Los mismos entregables están en la sección 10 del cronograma (CRO-01) y en el campo «Entregable» del archivo de MS Project. El avance de cada paquete
          está en el tablero de monitoreo del alcance (capítulo 07).
        </p>
      </div>
    </section>
  );
}
