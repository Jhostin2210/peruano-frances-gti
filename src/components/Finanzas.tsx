/**
 * Dominio de Finanzas (curso actual) y control del cronograma: presupuesto con curva S (FIN-02) y tablero de
 * valor ganado al corte (FIN-03). Lee documentacion/datos/finanzas.mjs (FINANZAS en src/content/datos.ts).
 */

import type { ReactNode } from "react";
import { AlertTriangle, ArrowRight, Info } from "lucide-react";
import { FINANZAS as F } from "../content/datos";

const soles = (x: number, dec = 0) => {
  const [e, d] = Math.abs(x).toFixed(dec).split(".");
  return `${x < 0 ? "−" : ""}S/ ${e.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}${dec ? "," + d : ""}`;
};
const coma = (x: number, d = 2) => x.toFixed(d).replace(".", ",");
const fecha = (iso: string) => iso.split("-").reverse().join("/");
const CORTE = fecha(F.corte);
const SEM: Record<string, string> = { Verde: "bg-emerald-500", Amarillo: "bg-amber-400", Rojo: "bg-rose-500" };
const SEM_TXT: Record<string, string> = { Verde: "text-emerald-700", Amarillo: "text-amber-700", Rojo: "text-rose-700" };

function Bloque({ id, etiqueta, titulo, children, fondo = "bg-slate-50" }: { id: string; etiqueta: string; titulo: string; children: ReactNode; fondo?: string }) {
  return (
    <section id={id} className={`py-14 ${fondo} border-b border-slate-200 scroll-mt-16`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">{etiqueta}</p>
        <h3 className="font-serif text-2xl font-bold text-slate-900">{titulo}</h3>
        {children}
      </div>
    </section>
  );
}
function Tarjeta({ titulo, nota, children, className = "" }: { titulo: string; nota?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-2xl p-5 ${className}`}>
      <h4 className="font-serif font-bold text-slate-900 text-sm">{titulo}</h4>
      {nota && <p className="text-[11px] text-slate-500 mt-0.5 mb-3 leading-snug">{nota}</p>}
      {children}
    </div>
  );
}
function Dato({ valor, etiqueta, detalle, acento = "border-l-[#0d7377]" }: { valor: string; etiqueta: string; detalle?: string; acento?: string }) {
  return (
    <div className={`bg-white border border-slate-200 border-l-4 ${acento} rounded-xl p-4`}>
      <p className="font-serif text-2xl font-bold text-slate-900 tabular-nums">{valor}</p>
      <p className="text-xs font-semibold text-slate-800 mt-1">{etiqueta}</p>
      {detalle && <p className="text-[11px] text-slate-500 leading-snug mt-0.5">{detalle}</p>}
    </div>
  );
}

// Curva S: valor planificado acumulado por semana; al corte, el valor ganado y el costo real.
function CurvaS({ conCorte = false }: { conCorte?: boolean }) {
  const c = F.curvaS;
  const W = 760, H = 260, m = { l: 56, r: 16, t: 14, b: 40 };
  const max = Math.ceil(c[c.length - 1].pvAcumulado / 2000) * 2000;
  const x = (k: number) => m.l + ((k - 0.5) / c.length) * (W - m.l - m.r);
  const y = (v: number) => H - m.b - (v / max) * (H - m.t - m.b);
  const semCorte = c.findIndex((s) => s.viernes >= F.corte) + 1;
  const pvCorte = c[semCorte - 1]?.pvAcumulado ?? 0;
  const ticks = Array.from({ length: max / 4000 + 1 }, (_, i) => i * 4000);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Curva S del presupuesto">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={m.l} x2={W - m.r} y1={y(t)} y2={y(t)} className="stroke-slate-200" />
          <text x={m.l - 6} y={y(t) + 3} textAnchor="end" className="fill-slate-400 text-[9px]">
            {t / 1000} mil
          </text>
        </g>
      ))}
      {c.map((s) => (
        <text key={s.semana} x={x(s.semana)} y={H - m.b + 12} textAnchor="middle" className="fill-slate-400 text-[8px]">
          {s.semana}
        </text>
      ))}
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <text key={n} x={(x(n * 4 - 3) + x(n * 4)) / 2} y={H - m.b + 26} textAnchor="middle" className="fill-[#1f3864] text-[9px] font-bold">
          Sprint {n}
        </text>
      ))}
      <path d={c.map((s, i) => `${i ? "L" : "M"}${x(s.semana)},${y(s.pvAcumulado)}`).join(" ")} fill="none" stroke="#1f3864" strokeWidth={2.2} />
      {conCorte && semCorte > 0 && (
        <>
          <line x1={x(semCorte)} x2={x(semCorte)} y1={m.t} y2={H - m.b} className="stroke-slate-400" strokeDasharray="4 4" />
          <text x={x(semCorte) + 5} y={m.t + 9} className="fill-slate-500 text-[9px]">
            Corte {CORTE}
          </text>
          <circle cx={x(semCorte)} cy={y(pvCorte)} r={4.5} fill="#1f3864" />
          <circle cx={x(semCorte)} cy={y(F.evm.EV)} r={5.5} fill="#0d7377" />
          <circle cx={x(semCorte)} cy={y(F.evm.AC)} r={2.6} fill="#f59e0b" />
          <text x={x(semCorte) + 9} y={y(F.evm.EV) - 5} className="fill-[#0d7377] text-[10px] font-bold">
            EV {soles(F.evm.EV)}
          </text>
          <text x={x(semCorte) + 9} y={y(pvCorte) + 12} className="fill-[#1f3864] text-[10px] font-bold">
            PV {soles(pvCorte)}
          </text>
        </>
      )}
    </svg>
  );
}

// ───────────────────────── Presupuesto (FIN-02) ─────────────────────────
export function FinanzasPresupuesto() {
  const P = F.presupuesto;
  const maxSprint = Math.max(...P.porSprint.map((s) => s.total));
  const paquetes = [...P.porPaquete].sort((a, b) => b.costo - a.costo);
  const maxPaq = paquetes[0]?.costo ?? 1;
  return (
    <Bloque id="fin-presupuesto" etiqueta="10.3 · Desarrollar el presupuesto · Resultados" titulo="Línea base de costos y curva S">
      <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">
        Costo de oportunidad de las horas del equipo, estimado de forma ascendente desde las actividades del cronograma con tarifas de profesional junior. El proyecto no paga sueldos
        ni servicios: es autofinanciado. Detalle en <a href="#doc-FIN-02" className="underline font-semibold text-[#0d7377]">FIN-02</a>.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
        <Dato valor={soles(P.bac)} etiqueta="Costo del trabajo (BAC)" detalle={`${P.porPersona.reduce((t, x) => t + x.horas, 0).toFixed(0)} horas del equipo`} />
        <Dato valor={soles(P.lineaBase)} etiqueta="Línea base de costos" detalle={`Incluye la contingencia de ${F.contingencia * 100} % por sprint (${soles(P.contingencia)})`} />
        <Dato valor={soles(P.total)} etiqueta="Presupuesto total" detalle={`Con la reserva de gestión de una semana (${soles(P.reservaGestion)})`} acento="border-l-[#1f3864]" />
        <Dato valor={soles(F.cursoAnterior.total)} etiqueta="Presupuesto del curso anterior" detalle="Jornada completa de 8 horas y tarifas profesionales" acento="border-l-slate-300" />
      </div>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-4 mt-4">
        <Tarjeta titulo="Curva S de la línea base" nota="Valor planificado acumulado por semana del cronograma, sin reservas. Las semanas 17 a 24 son de marzo y abril de 2027.">
          <CurvaS />
        </Tarjeta>
        <Tarjeta titulo="Tarifas por hora" nota="Profesional junior: la mitad del tarifario del curso anterior (176 horas por mes).">
          <ul className="divide-y divide-slate-100">
            {F.tarifas.map((t) => (
              <li key={t.persona} className="py-2 flex items-start justify-between gap-3">
                <span className="text-[11px] leading-snug">
                  <strong className="text-slate-900 block">{t.persona}</strong>
                  <span className="text-slate-500">{t.rol}</span>
                </span>
                <span className="text-right shrink-0">
                  <span className="block text-sm font-bold text-slate-900 tabular-nums">{soles(t.hora, 2)}</span>
                  <span className="text-[10px] text-slate-400">{soles(t.mensual)} al mes</span>
                </span>
              </li>
            ))}
          </ul>
        </Tarjeta>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-4">
        <Tarjeta titulo="Presupuesto por sprint" nota="Costo del sprint más su contingencia del 10 %.">
          <div className="space-y-2">
            {P.porSprint.map((s) => (
              <div key={s.sprint} className="grid grid-cols-[5.5rem_1fr_6rem] items-center gap-2 text-[11px]">
                <span className="text-slate-600">Sprint {s.sprint}</span>
                <div className="h-3 rounded bg-slate-100 overflow-hidden flex">
                  <div className="h-full bg-[#0d7377]" style={{ width: `${(s.costo / maxSprint) * 100}%` }} />
                  <div className="h-full bg-teal-200" style={{ width: `${(s.contingencia / maxSprint) * 100}%` }} />
                </div>
                <span className="text-right font-mono text-slate-700">{soles(s.total)}</span>
              </div>
            ))}
          </div>
        </Tarjeta>
        <Tarjeta titulo="Costo por paquete de la EDT" nota="Los ocho paquetes de mayor costo.">
          <div className="space-y-1.5">
            {paquetes.slice(0, 8).map((p) => (
              <div key={p.paquete} className="grid grid-cols-[minmax(0,13rem)_1fr_5.5rem] items-center gap-2 text-[11px]">
                <span className="truncate text-slate-600">
                  <span className="font-mono text-slate-400">{p.paquete}</span> {p.nombre}
                </span>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-[#1f3864]" style={{ width: `${(p.costo / maxPaq) * 100}%` }} />
                </div>
                <span className="text-right font-mono text-slate-700">{soles(p.costo)}</span>
              </div>
            ))}
          </div>
        </Tarjeta>
      </div>
    </Bloque>
  );
}

// ───────────────────────── Control del cronograma y los costos (FIN-03) ─────────────────────────
function Indice({ nombre, valor, semaforo, formula, lectura }: { nombre: string; valor: number; semaforo: string; formula: string; lectura: string }) {
  const pos = Math.min(1.5, Math.max(0.5, valor));
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold text-slate-800">{nombre}</p>
        <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold ${SEM_TXT[semaforo]}`}>
          <span className={`w-2.5 h-2.5 rounded-full ${SEM[semaforo]}`} />
          {semaforo}
        </span>
      </div>
      <p className="font-serif text-4xl font-bold text-slate-900 tabular-nums mt-1">{coma(valor)}</p>
      <p className="text-[10px] text-slate-400 font-mono">{formula}</p>
      <div className="relative h-2 rounded-full mt-3 bg-gradient-to-r from-rose-300 via-amber-200 to-emerald-300">
        <span className="absolute -top-1 w-1 h-4 rounded bg-slate-900" style={{ left: `${((pos - 0.5) / 1) * 100}%` }} />
      </div>
      <div className="flex justify-between text-[9px] text-slate-400 mt-1">
        <span>0,50</span>
        <span>1,00</span>
        <span>1,50</span>
      </div>
      <p className="text-[11px] text-slate-600 leading-snug mt-2">{lectura}</p>
    </div>
  );
}

export function ControlCronogramaCostos() {
  const E = F.evm;
  return (
    <Bloque id="fin-control" etiqueta={`10.4 · Monitorear y controlar las finanzas y el cronograma · Corte ${CORTE}`} titulo="Tablero de valor ganado" fondo="bg-white">
      <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">
        Compara lo planificado, lo terminado y lo gastado a la fecha de corte, y mide el avance de la implementación por paquete de la EDT. Detalle en{" "}
        <a href="#doc-FIN-03" className="underline font-semibold text-[#0d7377]">FIN-03</a>.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <Indice
          nombre="Índice del cronograma (SPI)"
          valor={E.SPI}
          semaforo={E.semaforoSPI}
          formula="SPI = EV ÷ PV"
          lectura={`Adelantado: lo terminado equivale a lo planificado hasta la semana ${E.semanaEquivalente} (fin del Sprint 2). Las actividades de datos se terminaron antes de su fecha.`}
        />
        <Indice
          nombre="Índice del costo (CPI)"
          valor={E.CPI}
          semaforo={E.semaforoCPI}
          formula="CPI = EV ÷ AC"
          lectura="1,00 por construcción: no hubo registro de horas y el costo real se estimó con las horas planificadas. Desde el 16/11 se registran las horas reales."
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
        <Dato valor={soles(E.PV)} etiqueta="Valor planificado (PV)" detalle={`${coma(E.avance.planificado, 1)} % del trabajo`} acento="border-l-[#1f3864]" />
        <Dato valor={soles(E.EV)} etiqueta="Valor ganado (EV)" detalle={`${coma(E.avance.real, 1)} % del trabajo terminado`} />
        <Dato valor={soles(E.AC)} etiqueta="Costo real estimado (AC)" detalle="Sin registro de horas hasta el 15/11" acento="border-l-amber-400" />
        <Dato valor={soles(E.SV)} etiqueta="Variación del cronograma (SV)" detalle={`CV = ${soles(E.CV)} · EAC = ${soles(E.EAC)}`} acento="border-l-emerald-500" />
      </div>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-4 mt-4">
        <Tarjeta titulo="Curva S al corte" nota="Línea: valor planificado acumulado. Puntos al corte: PV (azul), EV (verde) y costo real estimado (ámbar, igual al EV).">
          <CurvaS conCorte />
        </Tarjeta>
        <Tarjeta titulo="Pronósticos" nota="Con el CPI de 1,00 el costo final previsto es el presupuesto.">
          <dl className="divide-y divide-slate-100 text-xs">
            {[
              ["Presupuesto del trabajo (BAC)", soles(E.BAC)],
              ["Estimación al término (EAC = BAC ÷ CPI)", soles(E.EAC)],
              ["Por gastar (ETC = EAC − AC)", soles(E.ETC)],
              ["Variación al término (VAC)", soles(E.VAC)],
              ["Índice por completar (TCPI)", coma(E.TCPI)],
              ["Fecha de fin prevista", "23/04/2027 (sin cambio)"],
            ].map(([k, v]) => (
              <div key={k} className="py-2 flex justify-between gap-3">
                <dt className="text-slate-600">{k}</dt>
                <dd className="font-mono font-semibold text-slate-900 text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </Tarjeta>
      </div>

      <Tarjeta
        className="mt-4"
        titulo="Avance de la implementación por paquete de la EDT"
        nota="Barra gris: presupuesto del paquete. Azul: lo que debía estar hecho al corte (PV). Verde: lo terminado (EV). El avance funcional del producto está en el tablero del alcance (capítulo 07)."
      >
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
          {E.porPaquete.map((p) => {
            const pv = p.costo ? (p.pv / p.costo) * 100 : 0;
            const ev = p.costo ? (p.ev / p.costo) * 100 : 0;
            return (
              <div key={p.paquete} className="text-[11px]">
                <div className="flex justify-between gap-2">
                  <span className="truncate text-slate-700">
                    <span className="font-mono text-slate-400">{p.paquete}</span> {p.nombre}
                  </span>
                  <span className={`font-mono font-semibold ${ev >= 100 ? "text-emerald-700" : ev > 0 ? "text-amber-700" : "text-slate-400"}`}>{Math.round(ev)} %</span>
                </div>
                <div className="relative h-2.5 rounded bg-slate-100 mt-0.5 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-[#1f3864]/25" style={{ width: `${pv}%` }} />
                  <div className="absolute inset-y-1/4 left-0 bg-[#0d7377] rounded" style={{ width: `${ev}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </Tarjeta>

      <div className="mt-4 flex gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[12px] text-amber-900 leading-snug">
        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
        <p>
          <strong>Cómo leer este tablero.</strong> El SPI es una medida real: sale de actividades terminadas con evidencia. El CPI todavía no lo es: hasta el 15/11 no se registraron horas, y el
          costo real se estimó con las horas planificadas de lo terminado.
        </p>
      </div>
    </Bloque>
  );
}

// ───────────────────────── Resumen para el capítulo de cronograma ─────────────────────────
export function ResumenControlCronograma() {
  const E = F.evm;
  return (
    <section id="cro-control" className="py-10 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">08.3 · Monitorear y controlar el cronograma · Corte {CORTE}</p>
        <div className="grid md:grid-cols-[auto_1fr_auto] items-center gap-5 mt-3 bg-slate-50 border border-slate-200 rounded-2xl p-5">
          <div>
            <p className="text-[11px] text-slate-500">Índice del cronograma</p>
            <p className="font-serif text-4xl font-bold text-slate-900">SPI {coma(E.SPI)}</p>
            <p className={`text-xs font-bold ${SEM_TXT[E.semaforoSPI]}`}>● {E.semaforoSPI}: adelantado</p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Al {CORTE} se ganó {soles(E.EV)} de valor frente a {soles(E.PV)} planificados ({coma(E.avance.real, 1)} % del trabajo frente a {coma(E.avance.planificado, 1)} %). Lo terminado
            equivale a lo planificado hasta la semana {E.semanaEquivalente}. La fecha de fin se mantiene en el 23/04/2027.
          </p>
          <a href="#fin-control" className="inline-flex items-center gap-1 text-sm font-semibold text-[#0d7377] hover:underline whitespace-nowrap">
            Ver el tablero de valor ganado <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <p className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-2">
          <Info className="w-3.5 h-3.5" /> El cronograma y los costos se controlan juntos con valor ganado (informe FIN-03, capítulo 10).
        </p>
      </div>
    </section>
  );
}
