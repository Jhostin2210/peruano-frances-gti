/**
 * Diagrama de Gantt y diagrama de red del cronograma v3, dibujados desde los datos del CRO-01
 * (documentacion/datos/calendario.mjs → red()). Son los mismos datos del archivo de MS Project.
 */

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FERIADOS, GANTT_SEMANAS, RECESO, RED, SPRINTS } from "../content/datos";

type Nodo = (typeof RED)[number];

const DIA = 86400000;
const ms = (iso: string) => Date.parse(`${iso}T00:00:00Z`);
const iso = (t: number) => new Date(t).toISOString().slice(0, 10);
const corta = (f: string) => `${f.slice(8, 10)}/${f.slice(5, 7)}`;
const larga = (f: string) => `${corta(f)}/${f.slice(0, 4)}`;
const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const POR_ID = new Map(RED.map((n) => [n.id, n]));
const lunesDeSemana = (k: number) => (k <= 16 ? ms("2026-10-12") + 7 * (k - 1) * DIA : ms("2027-03-01") + 7 * (k - 17) * DIA);
const hoy = () => new Date().toLocaleDateString("en-CA", { timeZone: "America/Lima" });
const nombreCorto = (n: Nodo) => (n.tipo === "hito" ? n.descripcion.split(" — ")[0] : n.descripcion);

function Detalle({ nodo }: { nodo: Nodo | null }) {
  if (!nodo)
    return (
      <p className="text-xs text-slate-400 px-3 py-2.5 border border-dashed border-slate-200 rounded-lg">
        Pase el cursor o toque una barra para ver sus fechas, responsable y predecesoras.
      </p>
    );
  const preds = nodo.preds.map((p) => POR_ID.get(p)).filter(Boolean) as Nodo[];
  return (
    <div className="text-xs text-slate-700 px-3 py-2.5 border border-slate-200 bg-slate-50 rounded-lg space-y-1">
      <p>
        <span className="font-mono font-bold text-slate-900">{nodo.tipo === "actividad" || nodo.tipo === "continua" ? nodo.id : ""}</span>{" "}
        <strong className="text-slate-900">{nodo.descripcion}</strong>
        {nodo.critica && <span className="ml-2 text-[10px] font-bold uppercase text-rose-700 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded">Ruta crítica</span>}
      </p>
      <p className="text-slate-500">
        {nodo.tipo === "hito" ? `Fecha: ${larga(nodo.fin)}` : `${larga(nodo.inicio)} al ${larga(nodo.fin)} · ${nodo.dias} ${nodo.dias === 1 ? "día hábil" : "días hábiles"}`}
        {nodo.te ? ` · Te PERT ${nodo.te} días` : ""}
        {nodo.responsable ? ` · ${nodo.responsable}` : ""}
        {nodo.paquete ? ` · Paquete EDT ${nodo.paquete}` : ""}
      </p>
      {preds.length > 0 && (
        <p className="text-slate-500">
          Predecesoras (fin-comienzo): {preds.map((p) => (p.tipo === "actividad" ? p.id : nombreCorto(p))).join(", ")}
        </p>
      )}
    </div>
  );
}

// Colores del documento CRO-01: rojo claro (grupo con ruta crítica), verde azulado (sin críticas),
// gris (receso) y azul marino (encabezados e hitos).
const NAVY = "#1F3864";
const CELDA_CRITICA = "bg-red-200";
const CELDA_NORMAL = "bg-teal-100";
const CELDA_RECESO = "bg-slate-200";
const COLUMNAS: (number | "R")[] = [...Array.from({ length: 16 }, (_, i) => i + 1), "R", ...Array.from({ length: 8 }, (_, i) => i + 17)];
const semanaDe = (f: string) => {
  const t = ms(f);
  for (let k = 1; k <= 24; k++) if (t >= lunesDeSemana(k) && t < lunesDeSemana(k) + 7 * DIA) return k;
  return null;
};

export function GanttCronograma() {
  const [sprint, setSprint] = useState(0);
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-1.5">
        {[0, ...SPRINTS.map((s) => s.n)].map((n) => (
          <button
            key={n}
            onClick={() => setSprint(n)}
            className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border cursor-pointer transition-colors ${
              sprint === n ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {n ? `Sprint ${n}` : "Proyecto completo"}
          </button>
        ))}
        <span className="text-[11px] text-slate-400 ml-1">{sprint ? "Detalle por días del sprint elegido." : "Elija un sprint para ver el detalle por días."}</span>
      </div>
      {sprint ? <GanttSprint n={sprint} /> : <GanttSemanas />}
    </div>
  );
}

// Vista principal: la misma tabla del CRO-01 (sección 7), un grupo de actividades por fila y una columna por semana.
function GanttSemanas() {
  const [grupo, setGrupo] = useState<(typeof GANTT_SEMANAS)[number] | null>(null);
  const actual = semanaDe(hoy());
  const borde = "border border-slate-300";
  const titulo = (k: number) => `Semana ${k}: ${corta(iso(lunesDeSemana(k)))} al ${corta(iso(lunesDeSemana(k) + 4 * DIA))}`;
  return (
    <div className="space-y-3">
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[760px] border-collapse text-[11px] text-slate-700">
          <thead>
            <tr>
              <th className={`${borde} px-2 py-1 text-left font-semibold`} style={{ background: NAVY, color: "#fff" }} rowSpan={2}>
                Grupo de actividades
              </th>
              {SPRINTS.map((s) => (
                <React.Fragment key={s.n}>
                  <th colSpan={4} className={`${borde} py-1 font-semibold text-[10px]`} style={{ background: NAVY, color: "#fff" }}>
                    Sprint {s.n}
                  </th>
                  {s.n === 4 && <th className={`${borde} ${CELDA_RECESO}`} rowSpan={2} title={`Receso: ${larga(RECESO.inicio)} al ${larga(RECESO.fin)}`}>R</th>}
                </React.Fragment>
              ))}
            </tr>
            <tr>
              {COLUMNAS.filter((k) => k !== "R").map((k) => (
                <th
                  key={k}
                  title={titulo(k as number)}
                  className={`${borde} w-[26px] py-1 font-mono font-semibold text-[10px] ${k === actual ? "outline-2 outline-red-500 -outline-offset-2" : ""}`}
                  style={{ background: NAVY, color: "#fff" }}
                >
                  {k}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GANTT_SEMANAS.map((g) => (
              <tr key={g.prefijo} onMouseEnter={() => setGrupo(g)} onClick={() => setGrupo(g)} className={`cursor-pointer ${grupo?.prefijo === g.prefijo ? "bg-indigo-50" : ""}`}>
                <td className={`${borde} px-2 py-1.5 whitespace-nowrap`}>{g.nombre}</td>
                {COLUMNAS.map((k) =>
                  k === "R" ? (
                    <td key="R" className={`${borde} ${CELDA_RECESO}`} />
                  ) : (
                    <td key={k} title={titulo(k)} className={`${borde} ${g.semanas.includes(k) ? (g.critico ? CELDA_CRITICA : CELDA_NORMAL) : ""}`} />
                  ),
                )}
              </tr>
            ))}
            <tr>
              <td className={`${borde} px-2 py-1.5 font-bold whitespace-nowrap`}>Revisión del sprint (hito)</td>
              {COLUMNAS.map((k) =>
                k === "R" ? (
                  <td key="R" className={`${borde} ${CELDA_RECESO}`} />
                ) : k % 4 === 0 ? (
                  <td key={k} className={`${borde} text-center font-bold`} style={{ background: NAVY, color: "#fff" }} title={SPRINTS[k / 4 - 1] ? `Sprint Review ${k / 4}: ${larga(RED.find((n) => n.id === `H${k / 4}`)!.fin)}` : ""}>
                    ◆
                  </td>
                ) : (
                  <td key={k} className={borde} />
                ),
              )}
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-slate-500 leading-relaxed">
        <span className={`inline-block w-3 h-3 align-middle mr-1 border border-slate-300 ${CELDA_CRITICA}`} />Rojo: grupo con actividades de la ruta crítica.{" "}
        <span className={`inline-block w-3 h-3 align-middle mx-1 border border-slate-300 ${CELDA_NORMAL}`} />Verde azulado: grupo sin actividades críticas.{" "}
        <span className={`inline-block w-3 h-3 align-middle mx-1 border border-slate-300 ${CELDA_RECESO}`} />R: receso de febrero. ◆: revisión del sprint.
        {actual && <> Semana actual: S{actual} (marcada en el encabezado).</>}
      </p>
      {grupo ? (
        <div className="text-xs text-slate-700 px-3 py-2.5 border border-slate-200 bg-slate-50 rounded-lg space-y-1">
          <p>
            <strong className="text-slate-900">{grupo.nombre}</strong>
            <span className="text-slate-500"> · semanas S{grupo.semanas[0]} a S{grupo.semanas[grupo.semanas.length - 1]}{grupo.critico ? " · tiene actividades de la ruta crítica" : ""}</span>
          </p>
          <ul className="text-slate-500 space-y-0.5">
            {grupo.actividades.map((id) => {
              const n = POR_ID.get(id)!;
              return (
                <li key={id}>
                  <span className={`font-mono ${n.critica ? "text-red-700 font-bold" : ""}`}>{id}</span> {n.descripcion} · {corta(n.inicio)} al {corta(n.fin)} · {n.responsable}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p className="text-xs text-slate-400 px-3 py-2.5 border border-dashed border-slate-200 rounded-lg">Pase el cursor o toque un grupo para ver sus actividades, fechas y responsables.</p>
      )}
    </div>
  );
}

// Detalle de un sprint por días: código, actividad y responsable a la izquierda; barras y dependencias a la derecha.
// Las flechas van en escalón (salen del final de la predecesora, bajan y entran por el inicio de la sucesora)
// y se dibujan debajo de las barras, para no tapar textos.
function GanttSprint({ n }: { n: number }) {
  const [elegido, setElegido] = useState<Nodo | null>(null);
  const caja = useRef<HTMLDivElement>(null);
  const [disponible, setDisponible] = useState(1000);
  useEffect(() => {
    if (!caja.current) return;
    const obs = new ResizeObserver(([e]) => setDisponible(e.contentRect.width));
    obs.observe(caja.current);
    return () => obs.disconnect();
  }, []);
  const ancho1 = disponible >= 640 ? 300 : 150;
  const anchoResp = disponible >= 640 ? 140 : 0;
  const izquierda = ancho1 + anchoResp;

  const sp = SPRINTS[n - 1];
  const filas = RED.filter((x) => x.sprint === n && (x.tipo === "actividad" || x.tipo === "hito"));
  const desde = ms(sp.inicio) - DIA;
  const hasta = ms(filas[filas.length - 1].fin) + 3 * DIA;
  const totalDias = Math.round((hasta - desde) / DIA);
  const px = Math.max(20, (disponible - izquierda - 6) / totalDias);
  const ancho = totalDias * px;
  const x = (f: string) => ((ms(f) - desde) / DIA) * px;
  const xFin = (f: string) => x(f) + px;
  const ALTO = 28;
  const filaDe = new Map<string, number>(filas.map((f, i) => [f.id, i]));
  const dias = Array.from({ length: totalDias }, (_, i) => desde + i * DIA);
  const meses = [...new Set(dias.filter((t) => t >= ms(sp.inicio)).map((t) => `${MESES[new Date(t).getUTCMonth()]} ${new Date(t).getUTCFullYear()}`))];
  const fechaHoy = hoy();

  const flechas = filas.flatMap((f) =>
    f.preds
      .filter((p) => filaDe.has(p))
      .map((p) => {
        const pred = POR_ID.get(p)!;
        const x1 = xFin(pred.fin);
        const y1 = filaDe.get(p)! * ALTO + ALTO / 2;
        const x2 = f.tipo === "hito" ? xFin(f.fin) - 7 : x(f.inicio);
        const y2 = filaDe.get(f.id)! * ALTO + ALTO / 2;
        const d =
          x2 - x1 >= 12
            ? `M${x1},${y1} H${x1 + 6} V${y2} H${x2}`
            : `M${x1},${y1} H${x1 + 6} V${y2 - ALTO / 2} H${x2 - 6} V${y2} H${x2}`;
        return { clave: `${p}-${f.id}`, d, critica: Boolean(pred.critica && (f.critica || f.tipo === "hito")) };
      }),
  );

  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-600">
        <strong className="text-slate-900">Sprint {sp.n}: {sp.nombre}</strong> · {larga(sp.inicio)} al {larga(filas[filas.length - 1].fin)} · Entregable: {sp.entregable}
      </p>
      <div ref={caja} className="border border-slate-200 rounded-xl bg-white overflow-x-auto">
        <div className="flex min-w-max text-[11px]">
          {/* Columnas fijas */}
          <div className="sticky left-0 z-20 bg-white border-r border-slate-300 shrink-0 flex" style={{ width: izquierda }}>
            <div style={{ width: ancho1 }}>
              <div className="h-[44px] px-2 flex items-end pb-1.5 font-semibold" style={{ background: NAVY, color: "#fff" }}>Actividad</div>
              {filas.map((f) => (
                <div
                  key={f.id}
                  style={{ height: ALTO }}
                  onMouseEnter={() => setElegido(f)}
                  onClick={() => setElegido(f)}
                  title={f.descripcion}
                  className={`px-2 flex items-center gap-1.5 border-b border-slate-100 cursor-pointer ${elegido?.id === f.id ? "bg-indigo-50" : ""} ${f.tipo === "hito" ? "font-semibold text-slate-900" : "text-slate-600"}`}
                >
                  {f.tipo === "actividad" && <span className={`font-mono text-[10px] shrink-0 ${f.critica ? "text-red-700 font-bold" : "text-slate-400"}`}>{f.id}</span>}
                  <span className="truncate">{nombreCorto(f)}</span>
                </div>
              ))}
            </div>
            {anchoResp > 0 && (
              <div style={{ width: anchoResp }} className="border-l border-slate-200">
                <div className="h-[44px] px-2 flex items-end pb-1.5 font-semibold" style={{ background: NAVY, color: "#fff" }}>Responsable</div>
                {filas.map((f) => (
                  <div key={f.id} style={{ height: ALTO }} title={f.responsable} className={`px-2 flex items-center border-b border-slate-100 text-slate-500 ${elegido?.id === f.id ? "bg-indigo-50" : ""}`}>
                    <span className="truncate">{f.responsable || "—"}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Días y barras */}
          <div className="relative shrink-0" style={{ width: ancho }}>
            <div className="h-[44px] relative" style={{ background: NAVY, color: "#fff" }}>
              <div className="absolute top-1 left-2 text-[10px] font-semibold capitalize">
                {meses.join(" – ")}
              </div>
              {dias.map((t) => (
                <div key={t} className="absolute top-[22px] h-[22px] flex items-center justify-center font-mono text-[9px]" style={{ left: ((t - desde) / DIA) * px, width: px, opacity: [0, 6].includes(new Date(t).getUTCDay()) ? 0.5 : 1 }}>
                  {new Date(t).getUTCDate()}
                </div>
              ))}
            </div>
            <div className="relative" style={{ height: filas.length * ALTO }}>
              {dias
                .filter((t) => [0, 6].includes(new Date(t).getUTCDay()))
                .map((t) => <div key={t} className="absolute top-0 bottom-0 bg-slate-100/70" style={{ left: ((t - desde) / DIA) * px, width: px }} />)}
              {FERIADOS.filter((f) => ms(f.fecha) >= desde && ms(f.fecha) < hasta).map((f) => (
                <div key={f.fecha} title={`Feriado: ${f.nombre}`} className="absolute top-0 bottom-0 bg-orange-300/35" style={{ left: x(f.fecha), width: px }} />
              ))}
              {filas.map((f, i) => <div key={f.id} className="absolute left-0 right-0 border-b border-slate-100" style={{ top: i * ALTO, height: ALTO }} />)}
              {ms(fechaHoy) >= desde && ms(fechaHoy) < hasta && <div className="absolute top-0 bottom-0 border-l-2 border-red-500" style={{ left: x(fechaHoy) + px / 2 }} title="Hoy" />}

              {/* Flechas debajo de las barras */}
              <svg className="absolute inset-0 pointer-events-none" width={ancho} height={filas.length * ALTO}>
                <defs>
                  <marker id="gantt-punta" markerWidth="5" markerHeight="5" refX="4.5" refY="2.5" orient="auto">
                    <path d="M0,0 L5,2.5 L0,5 z" className="fill-slate-400" />
                  </marker>
                  <marker id="gantt-punta-c" markerWidth="5" markerHeight="5" refX="4.5" refY="2.5" orient="auto">
                    <path d="M0,0 L5,2.5 L0,5 z" className="fill-red-500" />
                  </marker>
                </defs>
                {flechas.map((a) => (
                  <path key={a.clave} d={a.d} fill="none" strokeWidth={1.1} strokeLinejoin="round" className={a.critica ? "stroke-red-500" : "stroke-slate-400"} markerEnd={`url(#${a.critica ? "gantt-punta-c" : "gantt-punta"})`} />
                ))}
              </svg>

              {filas.map((f, i) => {
                const top = i * ALTO;
                const sel = elegido?.id === f.id;
                const eventos = { onMouseEnter: () => setElegido(f), onClick: () => setElegido(f) };
                return f.tipo === "hito" ? (
                  <React.Fragment key={f.id}>
                    <div {...eventos} title={f.descripcion} className={`absolute w-[13px] h-[13px] rotate-45 bg-slate-700 cursor-pointer ${sel ? "ring-2 ring-amber-400" : ""}`} style={{ top: top + 7.5, left: xFin(f.fin) - 6.5 }} />
                    <span className="absolute text-[10px] font-semibold text-slate-700 whitespace-nowrap" style={{ top: top + 7, left: xFin(f.fin) + 10 }}>
                      {corta(f.fin)}
                    </span>
                  </React.Fragment>
                ) : (
                  <div
                    key={f.id}
                    {...eventos}
                    title={`${f.id} ${f.descripcion}`}
                    className={`absolute h-[14px] rounded-sm border cursor-pointer ${f.critica ? "bg-red-200 border-red-500" : "bg-teal-100 border-teal-600"} ${sel ? "ring-2 ring-offset-1 ring-amber-400" : ""}`}
                    style={{ top: top + 7, left: x(f.inicio) + 1, width: Math.max(xFin(f.fin) - x(f.inicio) - 2, 4) }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5"><span className="w-5 h-3 rounded-sm border bg-teal-100 border-teal-600" />Actividad</span>
        <span className="flex items-center gap-1.5"><span className="w-5 h-3 rounded-sm border bg-red-200 border-red-500" />Ruta crítica (PERT)</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rotate-45 bg-slate-700" />Revisión del sprint</span>
        <span className="flex items-center gap-1.5"><span className="w-5 border-t border-slate-400" />Dependencia fin-comienzo</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-orange-300/35 border border-orange-200" />Feriado</span>
        <span className="flex items-center gap-1.5"><span className="w-0.5 h-3 bg-red-500" />Hoy</span>
      </div>
      <Detalle nodo={elegido} />
    </div>
  );
}

// Diagrama de red por precedencia: una franja por sprint; dentro, las actividades van en columnas según
// cuántos pasos las separan del inicio del sprint. Cada franja empieza en el hito anterior (o en el receso).
const W = 132;
const H = 66;
const GX = 28;
const GY = 12;
const CAB = 30;

export function RedCronograma() {
  const [elegido, setElegido] = useState<Nodo | null>(null);

  const franjas = useMemo(
    () =>
      SPRINTS.map((sp) => {
        const inicio = sp.n === 1 ? "INI" : sp.n === 5 ? "REC" : `H${sp.n - 1}`;
        // La primera actividad del proyecto no tiene predecesora: se une al nodo de inicio.
        const nodos = RED.filter((n) => n.sprint === sp.n && (n.tipo === "actividad" || n.tipo === "hito")).map((n) => (n.preds.length ? n : { ...n, preds: [inicio] }));
        const rango = new Map<string, number>([[inicio, 0]]);
        for (const n of nodos) rango.set(n.id, 1 + Math.max(0, ...n.preds.map((p) => rango.get(p) ?? 0)));
        const carril = new Map<string, number>([[inicio, 0]]);
        const columnas: Nodo[][] = [];
        for (const n of nodos) (columnas[rango.get(n.id)!] ??= []).push(n);
        columnas.forEach((col) => {
          if (!col) return;
          const media = (n: Nodo) => n.preds.reduce((t, p) => t + (carril.get(p) ?? 0), 0) / Math.max(1, n.preds.length);
          col.sort((a, b) => media(a) - media(b)).forEach((n, i) => carril.set(n.id, i));
        });
        const carriles = Math.max(1, ...Array.from(columnas, (c) => c?.length ?? 0));
        const pos = (id: string) => ({ x: 12 + rango.get(id)! * (W + GX), y: CAB + carril.get(id)! * (H + GY) });
        const etiquetaInicio = sp.n === 1 ? "Inicio del proyecto" : sp.n === 5 ? "Receso de febrero" : `Hito ${sp.n - 1}`;
        return {
          sp,
          inicio,
          etiquetaInicio,
          nodos,
          pos,
          ancho: 24 + (Math.max(...rango.values()) + 1) * (W + GX) - GX,
          alto: CAB + carriles * (H + GY) + 4,
        };
      }),
    [],
  );
  const ancho = Math.max(...franjas.map((f) => f.ancho));
  const continua = RED.find((n) => n.tipo === "continua");

  return (
    <div className="space-y-3">
      <div className="border border-slate-200 rounded-xl bg-white overflow-x-auto">
        <div style={{ width: ancho }} className="divide-y divide-slate-200">
          {franjas.map((f) => (
            <div key={f.sp.n} className="relative overflow-hidden" style={{ height: f.alto }}>
              <div className="absolute left-3 top-2 text-[11px] font-bold text-slate-800">
                Sprint {f.sp.n}: {f.sp.nombre}
                <span className="font-normal text-slate-400"> · {larga(f.sp.inicio)} al {larga(f.nodos[f.nodos.length - 1].fin)}</span>
              </div>
              <svg className="absolute inset-0 pointer-events-none" width={ancho} height={f.alto}>
                <defs>
                  <marker id={`red-punta-${f.sp.n}`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 z" className="fill-slate-400" />
                  </marker>
                  <marker id={`red-punta-c-${f.sp.n}`} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 z" className="fill-rose-500" />
                  </marker>
                </defs>
                {f.nodos.flatMap((n) =>
                  n.preds.map((p) => {
                    const a = f.pos(p);
                    const b = f.pos(n.id);
                    const pn = POR_ID.get(p);
                    const critica = p === f.inicio ? n.critica : Boolean(pn?.critica && (n.critica || n.tipo === "hito"));
                    const x1 = a.x + W;
                    const y1 = a.y + H / 2;
                    const y2 = b.y + H / 2;
                    return (
                      <path
                        key={`${p}-${n.id}`}
                        d={`M${x1},${y1} C${x1 + GX / 2},${y1} ${b.x - GX / 2},${y2} ${b.x - 1},${y2}`}
                        fill="none"
                        strokeWidth={critica ? 1.8 : 1.2}
                        className={critica ? "stroke-rose-500" : "stroke-slate-400"}
                        markerEnd={`url(#${critica ? "red-punta-c-" : "red-punta-"}${f.sp.n})`}
                      />
                    );
                  }),
                )}
              </svg>
              {/* Nodo de entrada de la franja */}
              <div className="absolute rounded-lg border border-dashed border-slate-300 bg-slate-50 text-[10px] text-slate-500 flex flex-col items-center justify-center text-center px-2" style={{ left: f.pos(f.inicio).x, top: f.pos(f.inicio).y, width: W, height: H }}>
                <span className="font-semibold">{f.etiquetaInicio}</span>
                {f.inicio !== "INI" && <span className="font-mono">{larga(POR_ID.get(f.inicio)!.fin)}</span>}
              </div>
              {f.nodos.map((n) => {
                const { x, y } = f.pos(n.id);
                const sel = elegido?.id === n.id;
                const hito = n.tipo === "hito";
                return (
                  <button
                    key={n.id}
                    onMouseEnter={() => setElegido(n)}
                    onClick={() => setElegido(n)}
                    title={n.descripcion}
                    className={`absolute rounded-lg border text-left px-2 py-1.5 cursor-pointer transition-shadow overflow-hidden flex flex-col ${
                      hito ? "border-amber-400 bg-amber-50" : n.critica ? "border-rose-400 bg-rose-50" : "border-slate-300 bg-white"
                    } ${sel ? "ring-2 ring-amber-400 shadow-md" : "hover:shadow"}`}
                    style={{ left: x, top: y, width: W, height: H }}
                  >
                    <span className={`block font-mono text-[10px] font-bold ${hito ? "text-amber-700" : n.critica ? "text-rose-700" : "text-slate-800"}`}>
                      {hito ? `◆ Hito ${n.sprint}` : n.id}
                    </span>
                    <span className="text-[10px] text-slate-500 leading-tight line-clamp-2 flex-1">{hito ? n.descripcion.split(" — ")[1] : n.descripcion}</span>
                    <span className="block font-mono text-[9px] text-slate-400">
                      {hito ? larga(n.fin) : `${corta(n.inicio)}–${corta(n.fin)} · ${n.dias} d`}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5"><span className="w-4 h-3 rounded border border-slate-300 bg-white" />Actividad</span>
        <span className="flex items-center gap-1.5"><span className="w-4 h-3 rounded border border-rose-400 bg-rose-50" />Ruta crítica (PERT)</span>
        <span className="flex items-center gap-1.5"><span className="w-4 h-3 rounded border border-amber-400 bg-amber-50" />Hito</span>
        <span className="flex items-center gap-1.5"><span className="w-4 h-3 rounded border border-dashed border-slate-300 bg-slate-50" />Entrada desde la franja anterior</span>
      </div>
      {continua && (
        <p className="text-[11px] text-slate-500">
          Fuera de la red: {continua.id} {continua.descripcion.split(" — ")[0]}, del {larga(continua.inicio)} al {larga(continua.fin)} (actividad continua, sin cálculo PERT).
        </p>
      )}
      <Detalle nodo={elegido} />
    </div>
  );
}
