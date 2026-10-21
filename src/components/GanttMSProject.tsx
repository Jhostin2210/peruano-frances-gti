/**
 * Vista «Diagrama de Gantt» con el formato de MS Project: tabla de tareas a la izquierda y escala de tiempo
 * a la derecha, con un divisor que se arrastra. Usa las mismas filas, números, fechas y predecesoras que el
 * archivo de MS Project del proyecto (documentacion/generar-project.mjs → TAREAS_PROJECT).
 * Los colores son fijos (como en Project) y no cambian con el modo oscuro.
 */

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FERIADOS, TAREAS_PROJECT } from "../content/datos";

type Tarea = (typeof TAREAS_PROJECT)[number] & { nivel: number; desde: string; hasta: string; hito?: boolean; critica?: boolean };
const TAREAS = TAREAS_PROJECT as Tarea[];

const DIA = 86400000;
const ms = (iso: string) => Date.parse(`${iso}T00:00:00Z`);
const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const LETRAS = ["D", "L", "M", "X", "J", "V", "S"];
const DESDE = ms("2026-10-11");
const HASTA = ms("2027-04-26");
const TOTAL = Math.round((HASTA - DESDE) / DIA);
const FILA = 22;
const CAB = 40;
const feriados = new Set(FERIADOS.map((f) => f.fecha));
const hoy = () => new Date().toLocaleDateString("en-CA", { timeZone: "America/Lima" });

// Colores de MS Project.
const C = {
  borde: "#D4D4D4",
  cabecera: "#F3F3F3",
  texto: "#262626",
  gris: "#7A7A7A",
  noLaborable: "#EFEFEF",
  barra: "#8EB4E3",
  bordeBarra: "#4A7EBB",
  critica: "#F2A5A5",
  bordeCritica: "#C0504D",
  resumen: "#1F1F1F",
  vinculo: "#4A7EBB",
  vinculoCritico: "#C0504D",
  seleccion: "#DCE9F7",
  hoy: "#4CAF50",
};

const COLUMNAS = [
  { clave: "id", titulo: "", ancho: 34 },
  { clave: "nombre", titulo: "Nombre de tarea", ancho: 300 },
  { clave: "duracion", titulo: "Duración", ancho: 68 },
  { clave: "comienzo", titulo: "Comienzo", ancho: 88 },
  { clave: "fin", titulo: "Fin", ancho: 88 },
  { clave: "predecesoras", titulo: "Predecesoras", ancho: 92 },
  { clave: "recursos", titulo: "Nombres de los recursos", ancho: 200 },
] as const;
const ANCHO_TABLA = COLUMNAS.reduce((t, c) => t + c.ancho, 0);

type Zoom = "todo" | "semanas" | "dias";

export default function GanttMSProject() {
  const caja = useRef<HTMLDivElement>(null);
  const [anchoCaja, setAnchoCaja] = useState(1000);
  const [anchoTabla, setAnchoTabla] = useState<number | null>(null);
  const [zoom, setZoom] = useState<Zoom>("todo");
  const [criticas, setCriticas] = useState(true);
  const [contraidas, setContraidas] = useState<Set<number>>(new Set());
  const [elegida, setElegida] = useState<number | null>(null);

  useEffect(() => {
    if (!caja.current) return;
    const obs = new ResizeObserver(([e]) => setAnchoCaja(e.contentRect.width));
    obs.observe(caja.current);
    return () => obs.disconnect();
  }, []);

  const izquierda = Math.min(anchoTabla ?? Math.round(anchoCaja * (anchoCaja >= 640 ? 0.42 : 0.4)), ANCHO_TABLA, anchoCaja - 120);
  const derecha = Math.max(120, anchoCaja - izquierda - 6);
  const px = zoom === "dias" ? 22 : zoom === "semanas" ? 9 : Math.max(1.5, (derecha - 2) / TOTAL);
  const ancho = TOTAL * px;
  const x = (iso: string) => ((ms(iso) - DESDE) / DIA) * px;
  const xFin = (iso: string) => x(iso) + px;

  // Filas visibles: se ocultan las hijas de un resumen contraído.
  const visibles = useMemo(() => {
    const lista: Tarea[] = [];
    let ocultarHasta: number | null = null;
    for (const t of TAREAS) {
      if (ocultarHasta !== null && t.nivel > ocultarHasta) continue;
      ocultarHasta = null;
      lista.push(t);
      if (t.isSummary && contraidas.has(t.id)) ocultarHasta = t.nivel;
    }
    return lista;
  }, [contraidas]);
  const filaDe = new Map<number, number>(visibles.map((t, i) => [t.id, i]));
  const porId = new Map<number, Tarea>(TAREAS.map((t) => [t.id, t]));

  const alternar = (id: number) =>
    setContraidas((s) => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  const sprints = TAREAS.filter((t) => t.isSummary && t.nivel === 2).map((t) => t.id);

  // Divisor que se arrastra, como en Project.
  const arrastrar = (e: React.PointerEvent) => {
    const inicioX = e.clientX;
    const inicioAncho = izquierda;
    const mover = (ev: PointerEvent) => setAnchoTabla(Math.max(120, Math.min(ANCHO_TABLA, inicioAncho + ev.clientX - inicioX)));
    const soltar = () => {
      window.removeEventListener("pointermove", mover);
      window.removeEventListener("pointerup", soltar);
    };
    window.addEventListener("pointermove", mover);
    window.addEventListener("pointerup", soltar);
  };

  // Escala de tiempo en dos niveles, según el zoom.
  const dias = Array.from({ length: TOTAL }, (_, i) => DESDE + i * DIA);
  const superior: { x: number; w: number; texto: string }[] = [];
  const inferior: { x: number; w: number; texto: string }[] = [];
  if (zoom === "dias") {
    for (const t of dias) {
      const d = new Date(t);
      if (d.getUTCDay() === 0) superior.push({ x: ((t - DESDE) / DIA) * px, w: 7 * px, texto: `${d.getUTCDate()} ${MESES[d.getUTCMonth()]} '${String(d.getUTCFullYear()).slice(2)}` });
      inferior.push({ x: ((t - DESDE) / DIA) * px, w: px, texto: LETRAS[d.getUTCDay()] });
    }
  } else {
    let mes = -1;
    for (const t of dias) {
      const d = new Date(t);
      if (d.getUTCMonth() !== mes) {
        mes = d.getUTCMonth();
        const fin = Math.min(Date.UTC(d.getUTCFullYear(), mes + 1, 1), HASTA);
        superior.push({ x: ((t - DESDE) / DIA) * px, w: ((fin - t) / DIA) * px, texto: zoom === "todo" && px < 3 ? `${MESES[mes]} '${String(d.getUTCFullYear()).slice(2)}` : `${MESES[mes]} ${d.getUTCFullYear()}` });
      }
      if (d.getUTCDay() === 1) inferior.push({ x: ((t - DESDE) / DIA) * px, w: 7 * px, texto: zoom === "semanas" ? `${d.getUTCDate()} ${MESES[d.getUTCMonth()]}` : String(d.getUTCDate()) });
    }
  }
  const noLaborables = dias.filter((t) => {
    const d = new Date(t);
    return d.getUTCDay() === 0 || d.getUTCDay() === 6 || feriados.has(new Date(t).toISOString().slice(0, 10));
  });

  // Vínculos fin-comienzo en escalón. El de la reunión diaria (fila continua, al final) no se dibuja: cruzaría
  // todo el gráfico; su predecesora sigue en la columna.
  const continua = (t: Tarea) => t.nivel === 2 && !t.isSummary && t.nombre.startsWith("A-");
  const vinculos = visibles.flatMap((t) =>
    (t.predecesoras && !continua(t) ? t.predecesoras.split(";").map(Number) : [])
      .filter((p) => filaDe.has(p))
      .map((p) => {
        const pred = porId.get(p)!;
        const x1 = pred.hito ? xFin(pred.hasta) + 5 : xFin(pred.hasta);
        const y1 = filaDe.get(p)! * FILA + FILA / 2;
        const x2 = t.hito ? xFin(t.hasta) - 6 : x(t.desde);
        const y2 = filaDe.get(t.id)! * FILA + FILA / 2;
        const d = x2 - x1 >= 10 ? `M${x1},${y1} H${x1 + 5} V${y2} H${x2}` : `M${x1},${y1} H${x1 + 5} V${y2 - FILA / 2} H${x2 - 5} V${y2} H${x2}`;
        return { clave: `${p}-${t.id}`, d, critico: criticas && Boolean(pred.critica && (t.critica || t.hito)) };
      }),
  );
  const fechaHoy = hoy();
  const alto = visibles.length * FILA;

  const boton = (activo: boolean) =>
    `px-2.5 py-1 rounded-md text-[11px] font-semibold border cursor-pointer transition-colors ${activo ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`;

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-slate-600">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold">Escala:</span>
          <button className={boton(zoom === "todo")} onClick={() => setZoom("todo")}>Proyecto completo</button>
          <button className={boton(zoom === "semanas")} onClick={() => setZoom("semanas")}>Semanas</button>
          <button className={boton(zoom === "dias")} onClick={() => setZoom("dias")}>Días</button>
        </div>
        <div className="flex items-center gap-1.5">
          <button className={boton(false)} onClick={() => setContraidas(new Set(sprints))}>Contraer sprints</button>
          <button className={boton(false)} onClick={() => setContraidas(new Set())}>Expandir todo</button>
        </div>
        <label className="flex items-center gap-1.5 cursor-pointer select-none">
          <input type="checkbox" checked={criticas} onChange={(e) => setCriticas(e.target.checked)} className="accent-red-600" />
          Tareas críticas
        </label>
      </div>

      <div ref={caja} className="rounded-md overflow-hidden select-none" style={{ border: `1px solid ${C.borde}`, background: "#FFFFFF", color: C.texto, fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: 11 }}>
        <div className="flex">
          {/* Tabla de tareas */}
          <div className="overflow-x-auto shrink-0" style={{ width: izquierda }}>
            <div style={{ width: ANCHO_TABLA }}>
              <div className="flex" style={{ height: CAB, background: C.cabecera, borderBottom: `1px solid ${C.borde}` }}>
                {COLUMNAS.map((c) => (
                  <div key={c.clave} className="flex items-end px-1.5 pb-1 font-semibold truncate" style={{ width: c.ancho, borderRight: `1px solid ${C.borde}` }}>
                    {c.titulo}
                  </div>
                ))}
              </div>
              {visibles.map((t) => {
                const sel = elegida === t.id;
                return (
                  <div key={t.id} onClick={() => setElegida(t.id)} className="flex cursor-default" style={{ height: FILA, borderBottom: `1px solid ${C.borde}`, background: sel ? C.seleccion : "#FFFFFF", fontWeight: t.isSummary ? 700 : 400 }}>
                    <div className="flex items-center justify-end px-1.5" style={{ width: COLUMNAS[0].ancho, borderRight: `1px solid ${C.borde}`, background: sel ? C.seleccion : C.cabecera, color: C.gris, fontWeight: 400 }}>
                      {t.id}
                    </div>
                    <div className="flex items-center gap-1 px-1.5 overflow-hidden" style={{ width: COLUMNAS[1].ancho, borderRight: `1px solid ${C.borde}`, paddingLeft: 6 + (t.nivel - 1) * 14 }} title={t.nombre}>
                      {t.isSummary ? (
                        <button onClick={(e) => { e.stopPropagation(); alternar(t.id); }} className="shrink-0 w-3 text-[9px] cursor-pointer" style={{ color: C.gris }} aria-label={contraidas.has(t.id) ? "Expandir" : "Contraer"}>
                          {contraidas.has(t.id) ? "▷" : "◢"}
                        </button>
                      ) : null}
                      <span className="truncate">{t.nombre}</span>
                    </div>
                    {(["duracion", "comienzo", "fin", "predecesoras", "recursos"] as const).map((k, i) => (
                      <div key={k} className="flex items-center px-1.5 truncate" style={{ width: COLUMNAS[i + 2].ancho, borderRight: `1px solid ${C.borde}`, fontWeight: k === "recursos" ? 400 : undefined }} title={String(t[k] ?? "")}>
                        <span className="truncate">{t[k]}</span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Divisor */}
          <div onPointerDown={arrastrar} className="shrink-0 cursor-col-resize touch-none" style={{ width: 6, background: C.cabecera, borderLeft: `1px solid ${C.borde}`, borderRight: `1px solid ${C.borde}` }} title="Arrastre para cambiar el ancho de la tabla" />

          {/* Escala de tiempo y barras */}
          <div className="overflow-x-auto flex-1" style={{ width: derecha }}>
            <div style={{ width: ancho }} className="relative">
              <div className="relative" style={{ height: CAB, background: C.cabecera, borderBottom: `1px solid ${C.borde}` }}>
                {superior.map((s) => (
                  <div key={`s${s.x}`} className="absolute top-0 flex items-center px-1 truncate" style={{ left: s.x, width: s.w, height: CAB / 2, borderLeft: `1px solid ${C.borde}`, borderBottom: `1px solid ${C.borde}` }}>
                    {s.texto}
                  </div>
                ))}
                {inferior.map((s) => (
                  <div key={`i${s.x}`} className="absolute flex items-center justify-center truncate" style={{ left: s.x, width: s.w, top: CAB / 2, height: CAB / 2, borderLeft: `1px solid ${C.borde}`, fontSize: 10 }}>
                    {s.w >= 12 ? s.texto : ""}
                  </div>
                ))}
              </div>
              <div className="relative" style={{ height: alto }}>
                {noLaborables.map((t) => (
                  <div key={t} className="absolute top-0 bottom-0" style={{ left: ((t - DESDE) / DIA) * px, width: px, background: C.noLaborable }} />
                ))}
                {visibles.map((t, i) => (
                  <div key={t.id} className="absolute left-0 right-0" style={{ top: i * FILA, height: FILA, background: elegida === t.id ? "rgba(220,233,247,0.6)" : undefined }} />
                ))}
                {ms(fechaHoy) >= DESDE && ms(fechaHoy) < HASTA && (
                  <div className="absolute top-0 bottom-0" style={{ left: x(fechaHoy) + px / 2, borderLeft: `2px dashed ${C.hoy}` }} title="Fecha actual" />
                )}
                <svg className="absolute inset-0 pointer-events-none" width={ancho} height={alto}>
                  <defs>
                    <marker id="msp-flecha" markerWidth="5" markerHeight="5" refX="4.5" refY="2.5" orient="auto">
                      <path d="M0,0 L5,2.5 L0,5 z" fill={C.vinculo} />
                    </marker>
                    <marker id="msp-flecha-c" markerWidth="5" markerHeight="5" refX="4.5" refY="2.5" orient="auto">
                      <path d="M0,0 L5,2.5 L0,5 z" fill={C.vinculoCritico} />
                    </marker>
                  </defs>
                  {vinculos.map((v) => (
                    <path key={v.clave} d={v.d} fill="none" stroke={v.critico ? C.vinculoCritico : C.vinculo} strokeWidth={1} markerEnd={`url(#${v.critico ? "msp-flecha-c" : "msp-flecha"})`} />
                  ))}
                </svg>
                {visibles.map((t, i) => {
                  const top = i * FILA;
                  if (t.isSummary) {
                    const a = x(t.desde);
                    const w = xFin(t.hasta) - a;
                    return (
                      <div key={t.id} className="absolute" style={{ top: top + 7, left: a, width: w, height: 5, background: C.resumen }}>
                        <span className="absolute left-0 top-[5px]" style={{ borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: `5px solid ${C.resumen}`, marginLeft: -1 }} />
                        <span className="absolute right-0 top-[5px]" style={{ borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: `5px solid ${C.resumen}`, marginRight: -1 }} />
                      </div>
                    );
                  }
                  if (t.hito)
                    return (
                      <React.Fragment key={t.id}>
                        <div className="absolute rotate-45" title={t.nombre} style={{ top: top + 6, left: xFin(t.hasta) - 5, width: 10, height: 10, background: C.resumen }} />
                        <span className="absolute whitespace-nowrap" style={{ top: top + 4, left: xFin(t.hasta) + 9, fontSize: 10 }}>
                          {t.hasta.slice(8, 10)}/{t.hasta.slice(5, 7)}
                        </span>
                      </React.Fragment>
                    );
                  const critica = criticas && t.critica;
                  return (
                    <div
                      key={t.id}
                      onClick={() => setElegida(t.id)}
                      title={`${t.nombre}\n${t.comienzo} → ${t.fin} (${t.duracion})${t.recursos ? `\n${t.recursos}` : ""}`}
                      className="absolute"
                      style={{ top: top + 6, left: x(t.desde), width: Math.max(xFin(t.hasta) - x(t.desde), 3), height: 10, background: critica ? C.critica : C.barra, border: `1px solid ${critica ? C.bordeCritica : C.bordeBarra}` }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[11px] text-slate-500">
        Vista con el formato de MS Project, dibujada con los datos del archivo de MS Project del proyecto («CRO-01 Cronograma SIA-T v3»): mismas filas, fechas, duraciones en días hábiles y predecesoras. Arrastre la barra gris del centro para ver más columnas de la tabla. Con «Tareas críticas» marcado, las actividades de la ruta crítica del análisis PERT van en rojo; la línea verde discontinua es la fecha actual. El vínculo de la reunión diaria con el Hito 1 figura en la columna de predecesoras, pero no se dibuja para no cruzar todo el gráfico.
      </p>
    </div>
  );
}
