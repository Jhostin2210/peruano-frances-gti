/**
 * Tablero de monitoreo y control del alcance (proceso «Monitorear y controlar el alcance»; ALC-01, sección 7).
 * Lee el seguimiento semanal del alcance (documentacion/datos/avance.mjs → SEGUIMIENTO_ALCANCE), el registro de
 * cambios (GOB-10) y los entregables del producto. No contiene datos simulados.
 */

import { useState } from "react";
import { AlertTriangle, CheckCircle2, CircleMinus, CircleX, ExternalLink, Flag } from "lucide-react";
import { CAMBIOS, COMPONENTES_EDT, ENTREGABLES_ESTADO, SEGUIMIENTO_ALCANCE, SPRINTS } from "../content/datos";

type Semaforo = "verde" | "amarillo" | "rojo" | "gris";
type Corte = (typeof SEGUIMIENTO_ALCANCE)[number];

const SEMAFORO: Record<Semaforo, { texto: string; icono: typeof CheckCircle2; tono: string; borde: string }> = {
  verde: { texto: "En meta", icono: CheckCircle2, tono: "text-emerald-700", borde: "border-l-emerald-500" },
  amarillo: { texto: "Atención", icono: AlertTriangle, tono: "text-amber-700", borde: "border-l-amber-500" },
  rojo: { texto: "Fuera de meta", icono: CircleX, tono: "text-rose-700", borde: "border-l-rose-500" },
  gris: { texto: "Sin medición aún", icono: CircleMinus, tono: "text-slate-500", borde: "border-l-slate-300" },
};
// Estados de los paquetes, como en el informe ALC-05.
const ESTADO_PAQUETE: Record<string, string> = {
  Cumplido: "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Cumplido en parte": "bg-teal-50 text-teal-800 border-teal-200",
  Prototipo: "bg-amber-50 text-amber-800 border-amber-200",
  "En curso": "bg-blue-50 text-blue-800 border-blue-200",
  "No iniciado": "bg-slate-100 text-slate-600 border-slate-200",
};
// Estados de un requisito (ALC-01, sección 3).
const ESTADO_REQUISITO: Record<string, string> = {
  Pendiente: "bg-slate-100 text-slate-600 border-slate-200",
  "En desarrollo": "bg-blue-50 text-blue-800 border-blue-200",
  Completado: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Bloqueado: "bg-rose-100 text-rose-800 border-rose-200",
};
const ESTADO_ENTREGABLE: Record<string, string> = {
  "En validación": "bg-amber-100 text-amber-800 border-amber-300",
  "En desarrollo": "bg-blue-50 text-blue-800 border-blue-200",
  "No iniciado": "bg-slate-100 text-slate-600 border-slate-200",
  Aceptado: "bg-emerald-100 text-emerald-800 border-emerald-200",
};

const fecha = (iso: string) => iso.split("-").reverse().join("/");
const pct1 = (n: number) => `${n.toLocaleString("es-PE", { maximumFractionDigits: 1 })} %`;
const promedio = (lista: { pct: number | null }[]) => {
  const con = lista.filter((p) => p.pct !== null);
  return con.length ? con.reduce((t, p) => t + (p.pct ?? 0), 0) / con.length : 0;
};
const delProducto = (c: Corte) => c.paquetes.filter((p) => p.pct !== null);

function indicadores(c: Corte, anterior: Corte | null) {
  const terminados = c.paquetes.filter((p) => p.estado === "Cumplido").length;
  const plan = c.paquetes.filter((p) => p.revision && p.revision <= c.fecha).length;
  const avance = promedio(delProducto(c));
  const planProducto = delProducto(c).filter((p) => p.revision && p.revision <= c.fecha).length;
  const delta = anterior ? avance - promedio(delProducto(anterior)) : 0;
  const conCasos = c.requisitos.filter((r) => r.casos).length;
  const enEvaluacion = CAMBIOS.filter((s) => s.estado === "En evaluación");
  const reqEnCambio = [...new Set(enEvaluacion.flatMap((s) => s.impacto.match(/(REQ|RNF)-\d\d/g) ?? []))];
  const aprobados = c.casos.filter((x) => x.estado === "Aprobado").length;
  const tasaCasos = (aprobados / c.casos.length) * 100;
  const porRevisar = c.fueraDeAlcance.filter((f) => f.estado === "Por revisar").length;
  const confirmados = c.fueraDeAlcance.filter((f) => f.estado === "Confirmado").length;
  const primeraRevision = fecha(SPRINTS[1].revision);
  return [
    {
      nombre: "Avance del alcance",
      valor: `${terminados} de ${c.paquetes.length}`,
      detalle: `Paquetes terminados. Plan al corte: ${plan}.`,
      semaforo: (terminados >= plan ? "verde" : plan - terminados === 1 ? "amarillo" : "rojo") as Semaforo,
    },
    {
      nombre: "Avance del producto",
      valor: pct1(avance),
      detalle: `${anterior ? `${delta >= 0 ? "+" : ""}${delta.toLocaleString("es-PE", { maximumFractionDigits: 1 })} puntos desde el ${fecha(anterior.fecha)}. ` : ""}Plan al corte: ${planProducto ? "según el cronograma" : "0 % (el primer entregable se acepta el " + primeraRevision + ")"}.`,
      semaforo: "verde" as Semaforo,
    },
    {
      nombre: "Cobertura de trazabilidad",
      valor: pct1((conCasos / c.requisitos.length) * 100),
      detalle: `${conCasos} de ${c.requisitos.length} requisitos con casos de prueba. Meta: 100 %.`,
      semaforo: (conCasos === c.requisitos.length ? "verde" : conCasos / c.requisitos.length >= 0.9 ? "amarillo" : "rojo") as Semaforo,
    },
    {
      nombre: "Estabilidad de los requisitos",
      valor: "100 %",
      detalle: `Ningún requisito cambió en el sprint. ${reqEnCambio.length ? `En evaluación: ${reqEnCambio.join(", ")}.` : ""}`,
      semaforo: "verde" as Semaforo,
    },
    {
      nombre: "Casos de prueba aprobados",
      valor: pct1(tasaCasos),
      detalle: `${aprobados} de ${c.casos.length} casos del E-01, el entregable en validación. Meta: 90 %.`,
      semaforo: (tasaCasos >= 90 ? "verde" : tasaCasos >= 75 ? "amarillo" : "rojo") as Semaforo,
    },
    {
      nombre: "Requisitos aceptados",
      valor: "—",
      detalle: `Se mide desde la revisión del Sprint 2 (${primeraRevision}). Meta: 80 %.`,
      semaforo: "gris" as Semaforo,
    },
    {
      nombre: "Aceptación a la primera",
      valor: "—",
      detalle: `Aún no se presenta ningún entregable a aceptación formal (primera: ${primeraRevision}). Meta: 80 %.`,
      semaforo: "gris" as Semaforo,
    },
    {
      nombre: "Cambios en evaluación",
      valor: String(enEvaluacion.length),
      detalle: `${enEvaluacion.map((s) => s.id).join(", ")} esperan decisión (GOB-10).`,
      semaforo: (enEvaluacion.length ? "amarillo" : "verde") as Semaforo,
    },
    {
      nombre: "Corrupción del alcance",
      valor: String(confirmados + porRevisar),
      detalle: confirmados ? `${confirmados} confirmado(s).` : porRevisar ? `${porRevisar} caso por revisar. Meta: cero.` : "Ningún trabajo fuera del alcance. Meta: cero.",
      semaforo: (confirmados ? "rojo" : porRevisar ? "amarillo" : "verde") as Semaforo,
    },
  ];
}

export default function TableroAlcance() {
  const [indice, setIndice] = useState(SEGUIMIENTO_ALCANCE.length - 1);
  const corte = SEGUIMIENTO_ALCANCE[indice];
  const anterior = indice > 0 ? SEGUIMIENTO_ALCANCE[indice - 1] : null;
  const tarjetas = indicadores(corte, anterior);
  const sprintActual = SPRINTS.find((s) => s.inicio <= corte.fecha && corte.fecha <= s.fin) ?? SPRINTS[0];
  const pctPrevio = (id: string) => anterior?.paquetes.find((p) => p.id === id)?.pct ?? null;
  const enEvaluacion = CAMBIOS.filter((s) => s.estado === "En evaluación");
  const cuentaCambios = [...new Set(CAMBIOS.map((s) => s.estado))].map((e) => ({ e, n: CAMBIOS.filter((s) => s.estado === e).length }));
  const cuentaReq = Object.keys(ESTADO_REQUISITO).map((e) => ({ e, n: corte.requisitos.filter((r) => r.estado === e).length }));
  const avanceEntregable = (ids: string[]) => Math.round(promedio(corte.paquetes.filter((p) => ids.includes(p.id))));

  return (
    <section id="alc-tablero" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">07.5 · Monitoreo y control · Tablero</p>
        <h3 className="font-serif text-2xl font-bold text-slate-900">Tablero de monitoreo y control del alcance</h3>
        <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">
          Compara cada semana lo construido con la línea base del alcance: cuánto del producto existe, qué entregables están listos para aceptarse, si los
          requisitos siguen estables y si hay trabajo fuera del alcance. Los indicadores, sus umbrales y el procedimiento cuando uno pasa a rojo están en el
          plan de gestión del alcance (<a href="#doc-ALC-01" className="underline font-semibold text-[#0d7377]">ALC-01</a>, sección 7). Se alimenta del
          informe de avance (<a href="#doc-ALC-05" className="underline font-semibold text-[#0d7377]">ALC-05</a>), la matriz de trazabilidad y el registro de
          cambios (<a href="#doc-GOB-10" className="underline font-semibold text-[#0d7377]">GOB-10</a>). No contiene datos simulados.
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-4">
          <span className="text-[11px] font-semibold text-slate-600">Corte:</span>
          {SEGUIMIENTO_ALCANCE.map((c, i) => (
            <button
              key={c.fecha}
              onClick={() => setIndice(i)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border cursor-pointer transition-colors ${
                i === indice ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {fecha(c.fecha)} · {c.fuente}
            </button>
          ))}
        </div>

        {/* 1. Indicadores */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
          {tarjetas.map((t) => {
            const s = SEMAFORO[t.semaforo];
            return (
              <div key={t.nombre} className={`bg-white border border-slate-200 border-l-4 ${s.borde} rounded-xl p-4`}>
                <p className="text-xs font-semibold text-slate-700">{t.nombre}</p>
                <p className="font-serif text-2xl font-bold text-slate-900 mt-1">{t.valor}</p>
                <p className={`flex items-center gap-1 text-[11px] font-semibold mt-1 ${s.tono}`}>
                  <s.icono className="w-3.5 h-3.5" /> {s.texto}
                </p>
                <p className="text-[11px] text-slate-500 leading-snug mt-1">{t.detalle}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-5 gap-4 mt-4">
          {/* 2. Avance por la EDT */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-5">
            <h4 className="font-serif font-bold text-slate-900 text-sm">Avance por la EDT</h4>
            <p className="text-[11px] text-slate-500 mb-4">
              Porcentaje de cada paquete según el informe ALC-05 y el seguimiento semanal. La marca gris es el corte anterior. Pase el cursor por un paquete para ver
              qué existe y qué falta.
            </p>
            <div className="space-y-4">
              {COMPONENTES_EDT.map((comp) => (
                <div key={comp.id}>
                  <p className="text-[11px] font-bold text-slate-800 mb-1.5">
                    <span className="font-mono text-slate-500">{comp.id}</span> {comp.nombre}
                  </p>
                  <div className="space-y-1.5">
                    {corte.paquetes
                      .filter((p) => p.componente === comp.id)
                      .map((p) => {
                        const previo = pctPrevio(p.id);
                        const subio = previo !== null && p.pct !== null && p.pct > previo;
                        return (
                          <div key={p.id} title={`${p.id} ${p.nombre}\nQué existe: ${p.existe}\nQué falta: ${p.falta}`} className="grid grid-cols-[minmax(0,11rem)_1fr_auto] sm:grid-cols-[minmax(0,14rem)_1fr_auto] items-center gap-2 text-[11px]">
                            <span className="text-slate-600 truncate">
                              <span className="font-mono text-slate-400">{p.id}</span> {p.nombre}
                            </span>
                            {p.pct === null ? (
                              <span className="text-[10px] text-slate-400 italic">Paquete de gestión, sin porcentaje</span>
                            ) : (
                              <div className="relative h-2 rounded-full bg-slate-100">
                                <div className="absolute inset-y-0 left-0 rounded-full bg-[#0d7377]" style={{ width: `${p.pct}%` }} />
                                {previo !== null && previo !== p.pct && <div className="absolute -top-0.5 -bottom-0.5 w-0.5 bg-slate-400" style={{ left: `${previo}%` }} />}
                              </div>
                            )}
                            <span className="flex items-center gap-1.5 justify-end">
                              {p.pct !== null && <span className="font-mono font-bold text-slate-700 w-9 text-right">{p.pct} %</span>}
                              {subio && <span className="font-mono text-[10px] text-emerald-700">+{(p.pct ?? 0) - (previo ?? 0)}</span>}
                              <span className={`border rounded px-1.5 py-0.5 text-[10px] font-semibold whitespace-nowrap ${ESTADO_PAQUETE[p.estado]}`}>{p.estado}</span>
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {/* 4. Alcance del sprint en curso */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <h4 className="font-serif font-bold text-slate-900 text-sm">
                Alcance del Sprint {sprintActual.n}: {sprintActual.nombre}
              </h4>
              <p className="text-[11px] text-slate-500 mb-3">
                Lo que el procedimiento de validación (ALC-04) pide aceptar en la revisión del {fecha(sprintActual.revision)}.
              </p>
              {corte.sprint.length === 0 ? (
                <p className="text-xs text-slate-500">Este corte no registró el seguimiento del sprint.</p>
              ) : (
                <ul className="space-y-2.5">
                  {corte.sprint.map((x) => (
                    <li key={x.que} className="text-xs">
                      <p className="flex items-start gap-2">
                        {x.estado === "Cumplido" ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> : <Flag className="w-4 h-4 text-blue-600 shrink-0" />}
                        <span>
                          <strong className="text-slate-900">{x.que}</strong> · <span className={x.estado === "Cumplido" ? "text-emerald-700 font-semibold" : "text-blue-700 font-semibold"}>{x.estado}</span>
                          <span className="block text-[11px] text-slate-500 mt-0.5">
                            {x.evidencia}{" "}
                            {x.url && (
                              <a href={x.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 underline text-[#0d7377]">
                                ver <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </span>
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* 6. Control de cambios */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5">
              <h4 className="font-serif font-bold text-slate-900 text-sm">Control de cambios del alcance</h4>
              <p className="text-[11px] text-slate-500 mb-3">Solicitudes del registro de cambios (GOB-10).</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {cuentaCambios.map(({ e, n }) => (
                  <span key={e} className={`border rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${e === "Aprobado" ? "bg-emerald-50 text-emerald-800 border-emerald-200" : e === "En evaluación" ? "bg-amber-50 text-amber-800 border-amber-200" : "bg-slate-100 text-slate-600 border-slate-200"}`}>
                    {e}: {n}
                  </span>
                ))}
              </div>
              <ul className="space-y-2">
                {enEvaluacion.map((s) => (
                  <li key={s.id} className="text-[11px] text-slate-600 leading-snug">
                    <span className="font-mono font-bold text-slate-800">{s.id}</span> {s.titulo}. <span className="text-slate-500">{s.decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Entregables en el tiempo */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 mt-4">
          <h4 className="font-serif font-bold text-slate-900 text-sm">Entregables en el tiempo</h4>
          <p className="text-[11px] text-slate-500 mb-3">Cada entregable en el sprint en que se acepta. El sprint en curso está resaltado.</p>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-6 gap-2 min-w-[720px]">
              {SPRINTS.map((s) => {
                const actual = s.n === sprintActual.n;
                return (
                  <div key={s.n} className={`rounded-xl border p-2.5 ${actual ? "border-indigo-300 bg-indigo-50/60" : "border-slate-200 bg-slate-50"}`}>
                    <p className="text-[11px] font-bold text-slate-800">Sprint {s.n}</p>
                    <p className="text-[10px] text-slate-500 mb-2">Revisión {fecha(s.revision)}</p>
                    {actual && <p className="text-[10px] font-semibold text-indigo-700 mb-2">◀ corte del {fecha(corte.fecha)}</p>}
                    <div className="space-y-1.5">
                      {ENTREGABLES_ESTADO.filter((e) => e.sprint === s.n).map((e) => (
                        <a key={e.id} href={`#entregable-${e.id}`} title={`${e.nombre}: ${e.estado}, ${avanceEntregable(e.paquetes.map((p) => p.id))} %`} className={`block border rounded-lg px-2 py-1.5 text-[10px] leading-tight hover:shadow-sm ${ESTADO_ENTREGABLE[e.estado]}`}>
                          <span className="font-mono font-bold">{e.id}</span> · {avanceEntregable(e.paquetes.map((p) => p.id))} %
                          <span className="block font-normal opacity-90">{e.nombre}</span>
                        </a>
                      ))}
                      {s.n === 1 && <p className="text-[10px] text-slate-500">Análisis y diseño: sin entregable del producto.</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-3 text-[11px] text-slate-600">
            {Object.entries(ESTADO_ENTREGABLE).map(([e, cls]) => (
              <span key={e} className="inline-flex items-center gap-1.5">
                <span className={`w-3 h-3 rounded border ${cls}`} /> {e}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          {/* 5. Requisitos */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h4 className="font-serif font-bold text-slate-900 text-sm">Requisitos</h4>
            <p className="text-[11px] text-slate-500 mb-3">
              Estado de los {corte.requisitos.length} requisitos según los paquetes que los producen. Pasan a «Completado» cuando el Product Owner los acepta.
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5">
              {corte.requisitos.map((r) => (
                <div key={r.id} title={`${r.id} ${r.titulo}\nPrioridad ${r.prioridad} · ${r.entregable} · paquete ${r.paquete} · ${r.casos}`} className={`border rounded-lg px-1.5 py-1.5 text-center ${ESTADO_REQUISITO[r.estado]}`}>
                  <p className="font-mono text-[10px] font-bold">{r.id}</p>
                  <p className="text-[9px] leading-tight">{r.estado}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-3 text-[11px] text-slate-600">
              {cuentaReq.map(({ e, n }) => (
                <span key={e} className="inline-flex items-center gap-1.5">
                  <span className={`w-3 h-3 rounded border ${ESTADO_REQUISITO[e]}`} /> {e}: {n}
                </span>
              ))}
            </div>
          </div>

          {/* 7. Alertas, trabajo fuera del alcance y hechos del periodo */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h4 className="font-serif font-bold text-slate-900 text-sm">Alertas y acciones</h4>
            <p className="text-[11px] text-slate-500 mb-3">Lo que requiere una acción, con su responsable y su fecha.</p>
            {corte.alertas.length === 0 ? (
              <p className="text-xs text-slate-500">Este corte no registró alertas.</p>
            ) : (
              <ul className="space-y-2">
                {corte.alertas.map((a) => (
                  <li key={a.texto} className="flex gap-2 text-[11px] leading-snug">
                    <AlertTriangle className={`w-4 h-4 shrink-0 ${a.nivel === "Atención" ? "text-amber-600" : "text-slate-400"}`} />
                    <span className="text-slate-700">
                      <strong className={a.nivel === "Atención" ? "text-amber-800" : "text-slate-600"}>{a.nivel}.</strong> {a.texto}
                      <span className="block text-slate-500">
                        {a.responsable} · {a.fecha}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <h5 className="text-[11px] font-bold text-slate-800 mt-4 mb-1.5">Posible trabajo fuera del alcance</h5>
            {corte.fueraDeAlcance.length === 0 ? (
              <p className="text-xs text-slate-500">Ninguno registrado en este corte.</p>
            ) : (
              <ul className="space-y-1.5">
                {corte.fueraDeAlcance.map((f) => (
                  <li key={f.texto} className="text-[11px] text-slate-700 leading-snug">
                    <span className="font-semibold text-amber-800">{f.estado}:</span> {f.texto} <span className="text-slate-500">Acción: {f.accion}</span>
                  </li>
                ))}
              </ul>
            )}
            <h5 className="text-[11px] font-bold text-slate-800 mt-4 mb-1.5">Hechos del periodo</h5>
            <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-600 leading-snug">
              {corte.hechos.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-mono text-[10px] text-slate-500 mt-4">
          Corte del {fecha(corte.fecha)} ({corte.fuente}). Se actualiza cada semana antes de la clase del sábado; al cierre de cada sprint el corte se emite como informe ALC-05.
        </p>
      </div>
    </section>
  );
}
