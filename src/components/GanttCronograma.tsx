/**
 * Diagrama de Gantt y diagrama de red del cronograma v3, dibujados desde los datos del CRO-01
 * (documentacion/datos/calendario.mjs → red()). Son los mismos datos del archivo de MS Project.
 */

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FERIADOS, RECESO, RED, SPRINTS } from "../content/datos";

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

type Fila = { clave: string; tipo: "sprint" | Nodo["tipo"]; etiqueta: string; codigo?: string; inicio: string; fin: string; nodo?: Nodo };

export function GanttCronograma() {
  const [sprint, setSprint] = useState(0);
  const [elegido, setElegido] = useState<Nodo | null>(null);
  // El ancho de la escala se ajusta al espacio disponible para que el proyecto completo quepa sin desplazarse.
  const caja = useRef<HTMLDivElement>(null);
  const [disponible, setDisponible] = useState(1000);
  useEffect(() => {
    if (!caja.current) return;
    const obs = new ResizeObserver(([e]) => setDisponible(e.contentRect.width));
    obs.observe(caja.current);
    return () => obs.disconnect();
  }, []);
  const etiqueta = disponible >= 640 ? 260 : 150;

  const filas = useMemo(() => {
    const lista: Fila[] = [];
    for (const sp of SPRINTS) {
      if (sprint && sp.n !== sprint) continue;
      const del = RED.filter((n) => n.sprint === sp.n && (n.tipo === "actividad" || n.tipo === "hito"));
      lista.push({ clave: `S${sp.n}`, tipo: "sprint", etiqueta: `Sprint ${sp.n}: ${sp.nombre}`, inicio: sp.inicio, fin: del[del.length - 1].fin });
      for (const n of del) lista.push({ clave: n.id, tipo: n.tipo, codigo: n.tipo === "actividad" ? n.id : "", etiqueta: nombreCorto(n), inicio: n.inicio, fin: n.fin, nodo: n });
      if (!sprint && sp.n === 4) {
        const r = POR_ID.get("REC")!;
        lista.push({ clave: r.id, tipo: "receso", etiqueta: "Receso de febrero", inicio: r.inicio, fin: r.fin, nodo: r });
      }
    }
    if (!sprint) for (const n of RED.filter((x) => x.tipo === "continua")) lista.push({ clave: n.id, tipo: "continua", codigo: n.id, etiqueta: "Reunión diaria (continua)", inicio: n.inicio, fin: n.fin, nodo: n });
    return lista;
  }, [sprint]);

  const sp = sprint ? SPRINTS[sprint - 1] : null;
  const desde = sp ? ms(sp.inicio) - 2 * DIA : ms("2026-10-12");
  const hasta = sp ? ms(filas[0].fin) + 6 * DIA : ms("2027-04-26");
  const totalDias = Math.round((hasta - desde) / DIA);
  const px = Math.max(sp ? 22 : 3.5, (disponible - etiqueta - 6) / totalDias);
  const ancho = totalDias * px;
  const x = (f: string) => ((ms(f) - desde) / DIA) * px;
  const xFin = (f: string) => x(f) + px;
  const ALTO = 26;
  const filaDe = new Map<string, number>(filas.map((f, i) => [f.clave, i]));

  const meses: { x: number; ancho: number; texto: string }[] = [];
  for (let d = new Date(desde); d.getTime() < hasta; d = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1))) {
    const a = Math.max(d.getTime(), desde);
    const b = Math.min(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1), hasta);
    meses.push({ x: ((a - desde) / DIA) * px, ancho: ((b - a) / DIA) * px, texto: `${MESES[d.getUTCMonth()]} ${d.getUTCFullYear()}` });
  }
  const semanas = Array.from({ length: 24 }, (_, i) => ({ k: i + 1, t: lunesDeSemana(i + 1) })).filter((s) => s.t >= desde && s.t < hasta);
  const dias = sp ? Array.from({ length: totalDias }, (_, i) => desde + i * DIA) : [];
  const fechaHoy = hoy();
  const flechas = sp
    ? filas.flatMap((f) =>
        (f.nodo?.preds ?? [])
          .filter((p) => filaDe.has(p))
          .map((p) => {
            const pred = POR_ID.get(p)!;
            const x1 = xFin(pred.fin);
            const y1 = filaDe.get(p)! * ALTO + ALTO / 2;
            const x2 = f.tipo === "hito" ? xFin(f.fin) - 6 : x(f.inicio);
            const y2 = filaDe.get(f.clave)! * ALTO + ALTO / 2;
            return { clave: `${p}-${f.clave}`, d: `M${x1},${y1} C${x1 + 14},${y1} ${x2 - 14},${y2} ${x2},${y2}`, critica: Boolean(pred.critica && f.nodo?.critica) };
          }),
      )
    : [];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-1.5">
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
      </div>

      <div ref={caja} className="border border-slate-200 rounded-xl bg-white overflow-x-auto">
        <div className="flex min-w-max">
          {/* Columna de nombres */}
          <div className="sticky left-0 z-20 bg-white border-r border-slate-200 shrink-0" style={{ width: etiqueta }}>
            <div className="h-[44px] border-b border-slate-200 px-2 flex items-end pb-1.5 text-[10px] font-mono font-bold uppercase text-slate-400">Tarea</div>
            {filas.map((f) => (
              <div
                key={f.clave}
                style={{ height: ALTO }}
                onMouseEnter={() => f.nodo && setElegido(f.nodo)}
                onClick={() => f.nodo && setElegido(f.nodo)}
                className={`px-2 flex items-center gap-1.5 text-[11px] border-b border-slate-100 truncate ${
                  f.tipo === "sprint" ? "font-bold text-slate-900 bg-slate-50" : f.tipo === "hito" ? "text-amber-700 font-semibold" : "text-slate-600"
                } ${elegido && f.nodo?.id === elegido.id ? "bg-indigo-50" : ""}`}
                title={f.nodo?.descripcion ?? f.etiqueta}
              >
                {f.codigo && <span className={`font-mono text-[10px] shrink-0 ${f.nodo?.critica ? "text-rose-600 font-bold" : "text-slate-400"}`}>{f.codigo}</span>}
                <span className="truncate">{f.etiqueta}</span>
              </div>
            ))}
          </div>

          {/* Escala de tiempo y barras */}
          <div className="relative shrink-0" style={{ width: ancho }}>
            <div className="h-[44px] border-b border-slate-200 relative text-[10px] text-slate-500">
              {meses.map((m) => (
                <div key={m.texto} className="absolute top-0 h-[22px] border-l border-slate-200 px-1.5 flex items-center font-semibold capitalize truncate" style={{ left: m.x, width: m.ancho }}>
                  {m.texto}
                </div>
              ))}
              {sp
                ? dias.map((t) => (
                    <div key={t} className={`absolute top-[22px] h-[22px] flex items-center justify-center font-mono text-[9px] ${[0, 6].includes(new Date(t).getUTCDay()) ? "text-slate-300" : ""}`} style={{ left: ((t - desde) / DIA) * px, width: px }}>
                      {new Date(t).getUTCDate()}
                    </div>
                  ))
                : semanas.map((s) => (
                    <div key={s.k} className="absolute top-[22px] h-[22px] border-l border-slate-200 pl-0.5 flex items-center font-mono text-[9px]" style={{ left: ((s.t - desde) / DIA) * px }}>
                      S{s.k}
                    </div>
                  ))}
              {!sp && (
                <div className="absolute top-[22px] h-[22px] flex items-center justify-center font-mono text-[9px] text-amber-700" style={{ left: x(RECESO.inicio), width: xFin(RECESO.fin) - x(RECESO.inicio) }}>
                  receso
                </div>
              )}
            </div>

            <div className="relative" style={{ height: filas.length * ALTO }}>
              {/* Fondo: fines de semana o semanas, feriados, receso y hoy */}
              {sp
                ? dias
                    .filter((t) => [0, 6].includes(new Date(t).getUTCDay()))
                    .map((t) => <div key={t} className="absolute top-0 bottom-0 bg-slate-50" style={{ left: ((t - desde) / DIA) * px, width: px }} />)
                : semanas.map((s) => <div key={s.k} className="absolute top-0 bottom-0 border-l border-slate-100" style={{ left: ((s.t - desde) / DIA) * px }} />)}
              {!sp && <div className="absolute top-0 bottom-0 bg-amber-200/25" style={{ left: x(RECESO.inicio), width: xFin(RECESO.fin) - x(RECESO.inicio) }} />}
              {FERIADOS.filter((f) => ms(f.fecha) >= desde && ms(f.fecha) < hasta).map((f) => (
                <div key={f.fecha} title={`Feriado: ${f.nombre}`} className="absolute top-0 bottom-0 bg-orange-300/35" style={{ left: x(f.fecha), width: Math.max(px, 2) }} />
              ))}
              {ms(fechaHoy) >= desde && ms(fechaHoy) < hasta && (
                <div className="absolute top-0 bottom-0 border-l-2 border-rose-500 z-10" style={{ left: x(fechaHoy) + px / 2 }}>
                  <span className="absolute -top-0 left-1 text-[9px] font-bold text-rose-600 bg-white px-1 rounded">Hoy</span>
                </div>
              )}

              {filas.map((f, i) => {
                const top = i * ALTO;
                const sel = elegido && f.nodo?.id === elegido.id;
                const eventos = { onMouseEnter: () => f.nodo && setElegido(f.nodo), onClick: () => f.nodo && setElegido(f.nodo) };
                return (
                  <div key={f.clave} className="absolute left-0 right-0 border-b border-slate-100" style={{ top, height: ALTO }}>
                    {f.tipo === "sprint" && (
                      <div className="absolute top-[9px] h-[8px] bg-slate-700 rounded-sm" style={{ left: x(f.inicio), width: xFin(f.fin) - x(f.inicio) }} />
                    )}
                    {(f.tipo === "actividad" || f.tipo === "continua") && (
                      <>
                        <div
                          {...eventos}
                          title={`${f.codigo} ${f.nodo?.descripcion}`}
                          className={`absolute top-[7px] h-[12px] rounded cursor-pointer ${
                            f.tipo === "continua" ? "bg-slate-300" : f.nodo?.critica ? "bg-rose-500" : "bg-indigo-500"
                          } ${sel ? "ring-2 ring-offset-1 ring-amber-400" : ""}`}
                          style={{ left: x(f.inicio), width: Math.max(xFin(f.fin) - x(f.inicio), 3) }}
                        />
                        {sp && f.nodo?.responsable && (
                          <span className="absolute top-[5px] text-[10px] text-slate-500 whitespace-nowrap" style={{ left: xFin(f.fin) + 6 }}>
                            {f.nodo.responsable}
                          </span>
                        )}
                      </>
                    )}
                    {f.tipo === "receso" && (
                      <div {...eventos} className="absolute top-[5px] h-[16px] rounded border border-dashed border-amber-400 bg-amber-100 text-[9px] text-amber-800 flex items-center justify-center cursor-pointer whitespace-nowrap overflow-hidden" style={{ left: x(f.inicio), width: xFin(f.fin) - x(f.inicio) }}>
                        Receso
                      </div>
                    )}
                    {f.tipo === "hito" && (
                      <>
                        <div {...eventos} title={f.nodo?.descripcion} className={`absolute top-[7px] w-[12px] h-[12px] rotate-45 bg-amber-500 border border-amber-700 cursor-pointer ${sel ? "ring-2 ring-amber-300" : ""}`} style={{ left: xFin(f.fin) - 6 }} />
                        <span className="absolute top-[5px] text-[10px] font-semibold text-amber-700 whitespace-nowrap" style={{ left: xFin(f.fin) + 10 }}>
                          {corta(f.fin)}
                        </span>
                      </>
                    )}
                  </div>
                );
              })}

              {flechas.length > 0 && (
                <svg className="absolute inset-0 pointer-events-none overflow-visible" width={ancho} height={filas.length * ALTO}>
                  <defs>
                    <marker id="gantt-punta" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6 z" className="fill-slate-400" />
                    </marker>
                  </defs>
                  {flechas.map((a) => (
                    <path key={a.clave} d={a.d} fill="none" strokeWidth={1.2} markerEnd="url(#gantt-punta)" className={a.critica ? "stroke-rose-400" : "stroke-slate-400"} />
                  ))}
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5"><span className="w-5 h-2.5 rounded bg-indigo-500" />Actividad</span>
        <span className="flex items-center gap-1.5"><span className="w-5 h-2.5 rounded bg-rose-500" />Ruta crítica (PERT)</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rotate-45 bg-amber-500 border border-amber-700" />Hito: Sprint Review</span>
        <span className="flex items-center gap-1.5"><span className="w-5 h-2 rounded-sm bg-slate-700" />Sprint (resumen)</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-orange-100 border border-orange-200" />Feriado</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-amber-50 border border-amber-200" />Receso de febrero</span>
        <span className="flex items-center gap-1.5"><span className="w-0.5 h-3 bg-rose-500" />Hoy</span>
        {sp && <span className="flex items-center gap-1.5"><span className="w-5 border-t border-slate-400" />Dependencia fin-comienzo</span>}
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
