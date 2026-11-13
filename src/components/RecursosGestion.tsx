/**
 * Dominio de Recursos, procesos 1, 3, 4 y 5 (el 2, estimar, está en RecursosEstimacion):
 * plan de gestión (organigrama, RACI, roles, FODA), adquisición (asignaciones, calendario, histograma y
 * nivelación SC-12), liderazgo del equipo (evaluación del Sprint 1) y control de los recursos físicos.
 * Lee documentacion/datos/gestion-recursos.mjs (RECURSOS_GESTION en src/content/datos.ts).
 */

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2, CircleDot } from "lucide-react";
import { RECURSOS_GESTION as G } from "../content/datos";
import { ArbolRbs } from "./RecursosEstimacion";
import type { Nodo } from "./RecursosEstimacion";

const n1 = (x: number) => String(Math.round(x * 10) / 10).replace(".", ",");
const corto = (nombre: string) => nombre.split(" ")[0];

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

const ESTADO_COLOR: Record<string, string> = {
  "En uso": "bg-emerald-100 text-emerald-800",
  "Aún no se necesita": "bg-slate-100 text-slate-600",
  "Por pedir": "bg-blue-50 text-blue-800",
  "Sin obtener": "bg-rose-100 text-rose-800",
};
const SEMAFORO: Record<string, string> = { verde: "bg-emerald-500", amarillo: "bg-amber-400", rojo: "bg-rose-500", gris: "bg-slate-300" };

// ───────────────────────── 09.0 Introducción del dominio ─────────────────────────
export function IntroRecursos() {
  const enfoques = [
    { titulo: "Recursos del equipo", texto: "Las cuatro personas del equipo y el personal del colegio que participa. Se gestionan en «Liderar al equipo»." },
    { titulo: "Recursos físicos y virtuales", texto: "Equipos, software, servicios en la nube, conectividad e instalaciones. Se controlan en «Monitorear y controlar los recursos»." },
  ];
  const adaptacion = [
    "Enfoque híbrido: la carga se planifica con el cronograma (predictivo) y se ajusta en cada sprint con un equipo autoorganizado (adaptativo).",
    "Equipo virtual y a tiempo parcial: WhatsApp, videollamada, GitHub y Drive; acta de constitución del equipo con las formas de trabajo.",
    "Sin presupuesto: software libre y planes gratuitos; reconocimientos no monetarios.",
    "Bienestar: no se programa trabajo los sábados (clase del curso) y la carga se nivela antes de cada sprint.",
  ];
  return (
    <section id="rec-intro" className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">09.0 · Cómo se gestionan los recursos en SIA-T</p>
        <div className="grid md:grid-cols-2 gap-3 mt-3">
          {enfoques.map((e) => (
            <div key={e.titulo} className="border border-slate-200 border-l-4 border-l-[#0d7377] rounded-xl p-4 bg-white">
              <p className="text-sm font-bold text-slate-900">{e.titulo}</p>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{e.texto}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          <Tarjeta titulo="Consideraciones de adaptación" nota="Cómo se ajustan los procesos del dominio a este proyecto (PMBOK, sección 2.6.3).">
            <ul className="space-y-1.5">
              {adaptacion.map((a) => (
                <li key={a} className="flex gap-2 text-xs text-slate-700 leading-snug">
                  <CircleDot className="w-3.5 h-3.5 text-[#0d7377] mt-0.5 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </Tarjeta>
          <Tarjeta titulo="Comprobación de resultados del dominio" nota="Resultados esperados del PMBOK (tabla 2-10) y cómo están al 07/11/2026 (REC-06).">
            <ul className="space-y-1.5">
              {G.comprobacion.map((c) => (
                <li key={c.resultado} className="flex items-start justify-between gap-3 text-xs">
                  <span className="text-slate-700 leading-snug">{c.resultado}</span>
                  <span
                    className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded ${
                      c.estado === "Se cumple" ? "bg-emerald-100 text-emerald-800" : c.estado === "Sin datos" ? "bg-slate-100 text-slate-600" : "bg-amber-100 text-amber-800"
                    }`}
                    title={c.comprobacion}
                  >
                    {c.estado}
                  </span>
                </li>
              ))}
            </ul>
          </Tarjeta>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── 09.1 Planificar la gestión de los recursos ─────────────────────────
const LETRA: Record<string, string> = {
  R: "bg-emerald-100 text-emerald-800",
  A: "bg-blue-100 text-blue-800",
  "R/A": "bg-teal-200 text-teal-900",
  C: "bg-amber-50 text-amber-800",
  I: "bg-slate-100 text-slate-600",
};

export function PlanRecursos() {
  const [persona, setPersona] = useState("Todos");
  const filas = useMemo(() => (persona === "Todos" ? G.raci : G.raci.filter((r) => (r.fila as Record<string, string>)[persona])), [persona]);
  const foda = [
    { titulo: "Fortalezas", items: G.foda.fortalezas, color: "border-emerald-300 bg-emerald-50/60" },
    { titulo: "Debilidades", items: G.foda.debilidades, color: "border-amber-300 bg-amber-50/60" },
    { titulo: "Oportunidades", items: G.foda.oportunidades, color: "border-blue-300 bg-blue-50/60" },
    { titulo: "Amenazas", items: G.foda.amenazas, color: "border-rose-300 bg-rose-50/60" },
  ];
  return (
    <Bloque id="rec-plan" etiqueta="09.1 · Planificar la gestión de los recursos · Resultados" titulo="Organigrama, roles y responsabilidades">
      <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">
        Cómo se organiza el equipo, quién responde por cada paquete de la EDT y con qué estilo se lo dirige. El detalle está en el plan de gestión de los recursos (
        <a href="#doc-REC-02" className="underline font-semibold text-[#0d7377]">REC-02</a>) y en el acta de constitución del equipo (
        <a href="#doc-REC-03" className="underline font-semibold text-[#0d7377]">REC-03</a>).
      </p>

      <Tarjeta className="mt-6" titulo="Organigrama del proyecto" nota="Gráfico jerárquico. El Product Owner es el canal único con el personal del colegio.">
        <ArbolRbs rbs={G.organigrama.hijos as Nodo[]} raiz={{ id: "", ...G.organigrama.raiz }} minimo={640} />
      </Tarjeta>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
        {G.roles.map((r) => (
          <div key={r.persona} className="bg-white border border-slate-200 rounded-2xl p-4">
            <p className="font-mono text-[10px] uppercase tracking-wide text-[#0d7377] font-bold">Ficha de rol</p>
            <p className="text-sm font-bold text-slate-900 leading-tight mt-1">{r.rol}</p>
            <p className="text-[11px] text-slate-500">{r.persona}</p>
            <ul className="mt-2 space-y-1">
              {r.responsabilidades.map((x) => (
                <li key={x} className="text-[11px] text-slate-700 leading-snug">• {x}</li>
              ))}
            </ul>
            <p className="text-[11px] text-slate-600 mt-2 leading-snug">
              <strong className="text-slate-800">Autoridad:</strong> {r.autoridad}
            </p>
            <p className="text-[11px] text-slate-600 mt-1 leading-snug">
              <strong className="text-slate-800">Competencias:</strong> {r.competencias}
            </p>
          </div>
        ))}
      </div>

      <Tarjeta
        className="mt-4"
        titulo="Matriz de asignación de responsabilidades (RACI)"
        nota="R: encargado (uno por paquete). A: rinde cuentas y acepta: el Product Owner en el producto y el director en la gestión. C: consultado. I: informado."
      >
        <div className="flex flex-wrap gap-1.5 mb-3">
          {["Todos", ...G.raciColumnas].map((p) => (
            <button
              key={p}
              onClick={() => setPersona(p)}
              className={`text-[11px] px-2.5 py-1 rounded-full border ${persona === p ? "bg-[#0d7377] text-white border-[#0d7377]" : "bg-white text-slate-600 border-slate-200 hover:border-[#0d7377]"}`}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-[11px]">
            <thead>
              <tr className="text-[10px] uppercase tracking-wide text-slate-500">
                <th className="text-left py-1.5 pr-2 font-semibold">Paquete de la EDT</th>
                {G.raciColumnas.map((c) => (
                  <th key={c} className={`py-1.5 px-1 font-semibold text-center ${persona === c ? "text-[#0d7377]" : ""}`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filas.map((r) => (
                <tr key={r.id}>
                  <td className="py-1 pr-2 text-slate-700">
                    <span className="font-mono text-slate-400">{r.id}</span> {r.nombre}
                  </td>
                  {G.raciColumnas.map((c) => {
                    const v = (r.fila as Record<string, string>)[c];
                    return (
                      <td key={c} className="py-1 px-1 text-center">
                        {v && <span className={`inline-block min-w-[2rem] rounded px-1 py-0.5 font-bold ${LETRA[v] ?? ""}`}>{v}</span>}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Tarjeta>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4 mt-4">
        <Tarjeta titulo="Análisis FODA del equipo">
          <div className="grid sm:grid-cols-2 gap-2">
            {foda.map((f) => (
              <div key={f.titulo} className={`border rounded-xl p-3 ${f.color}`}>
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-700">{f.titulo}</p>
                <ul className="mt-1 space-y-1">
                  {f.items.map((x) => (
                    <li key={x} className="text-[11px] text-slate-700 leading-snug">• {x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <ul className="mt-3 space-y-1">
            {G.foda.estrategias.map((x) => (
              <li key={x} className="text-[11px] text-slate-600 leading-snug">
                <strong className="text-slate-800">Estrategia:</strong> {x}
              </li>
            ))}
          </ul>
        </Tarjeta>
        <Tarjeta titulo="Estilos de liderazgo" nota="Teoría organizacional aplicada al equipo.">
          <div className="space-y-2">
            {G.liderazgo.map((l, i) => (
              <div key={l.estilo} className={`rounded-xl border p-3 ${i === 0 ? "border-[#0d7377] bg-teal-50/60" : "border-slate-200"}`}>
                <p className="text-xs font-bold text-slate-900">
                  {l.estilo} {i === 0 && <span className="text-[10px] font-semibold text-[#0d7377]">· principal</span>}
                </p>
                <p className="text-[11px] text-slate-600 leading-snug mt-0.5">{l.uso}</p>
              </div>
            ))}
          </div>
        </Tarjeta>
      </div>
    </Bloque>
  );
}

// ───────────────────────── 09.3 Adquirir recursos ─────────────────────────
function Histograma({ h, marcar = {} }: { h: typeof G.histograma; marcar?: Record<string, boolean> }) {
  const max = 40;
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[760px]">
        {h.integrantes.map((t) => (
          <div key={t.nombre} className={`flex items-end gap-2 mb-2 ${marcar[t.nombre] ? "" : ""}`}>
            <p className="w-28 shrink-0 text-[11px] font-semibold text-slate-700 pb-0.5">{t.nombre}</p>
            <div className="flex-1 flex gap-[3px]">
              {t.horas.map((x, i) => {
                const cap = h.semanas[i].capacidad;
                const color = x > cap * 1.1 ? "bg-rose-500" : x > cap ? "bg-amber-400" : "bg-[#0d7377]";
                return (
                  <div key={i} className="relative flex-1 h-14 bg-slate-100 rounded-sm" title={`Semana ${i + 1}: ${n1(x)} h de ${cap} h disponibles`}>
                    <div className={`absolute bottom-0 inset-x-0 rounded-t-sm ${color}`} style={{ height: `${(Math.min(x, max) / max) * 100}%` }} />
                    <div className="absolute inset-x-0 border-t-2 border-dashed border-[#1f3864]" style={{ bottom: `${(cap / max) * 100}%` }} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="flex gap-2">
          <div className="w-28 shrink-0" />
          <div className="flex-1 flex gap-[3px]">
            {h.semanas.map((s) => (
              <p key={s.n} className="flex-1 text-center text-[9px] text-slate-400">
                {s.n}
              </p>
            ))}
          </div>
        </div>
        <div className="flex gap-2 mt-1">
          <div className="w-28 shrink-0" />
          <div className="flex-1 flex gap-[3px]">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <p key={n} className="text-center text-[10px] font-bold text-[#1f3864] border-t-2 border-[#1f3864]" style={{ flex: h.semanas.filter((s) => s.sprint === n).length }}>
                Sprint {n}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const horasSprint = (h: typeof G.histograma, persona: string, sprint: number) =>
  h.integrantes.find((t) => t.nombre === persona)!.horas.reduce((s, x, i) => s + (h.semanas[i].sprint === sprint ? x : 0), 0);

export function AdquirirRecursos() {
  const [conSc12, setConSc12] = useState(false);
  const h = conSc12 ? G.histogramaSc12 : G.histograma;
  return (
    <Bloque id="rec-adquirir" etiqueta="09.3 · Adquirir recursos · Resultados" titulo="Asignaciones, calendario e histograma de recursos" fondo="bg-white">
      <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">
        Quién integra el equipo, qué recursos físicos y servicios tiene el proyecto, cuándo están disponibles y cómo se reparte la carga semana a semana. Detalle en{" "}
        <a href="#doc-REC-04" className="underline font-semibold text-[#0d7377]">REC-04</a>.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
        {G.asignacionesEquipo.map((a) => (
          <div key={a.persona} className="bg-slate-50 border border-slate-200 rounded-xl p-3">
            <p className="text-xs font-bold text-slate-900">{a.persona}</p>
            <p className="text-[11px] text-slate-500 leading-snug">{a.rol}</p>
            <p className="text-[11px] text-slate-700 mt-1">
              <strong>Paquetes (R):</strong> <span className="font-mono">{a.paquetes.join(", ")}</span>
            </p>
            <p className="text-[10px] text-slate-500 mt-1 leading-snug">{a.forma}</p>
          </div>
        ))}
      </div>

      <Tarjeta className="mt-4" titulo="Asignaciones de recursos físicos y servicios" nota="Quién provee cada recurso de la RBS, quién responde por él y su estado al 07/11/2026.">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-[11px]">
            <thead>
              <tr className="text-[10px] uppercase tracking-wide text-slate-500 text-left">
                <th className="py-1.5 pr-2 font-semibold">Recurso</th>
                <th className="py-1.5 pr-2 font-semibold">Lo provee</th>
                <th className="py-1.5 pr-2 font-semibold">Responsable</th>
                <th className="py-1.5 pr-2 font-semibold">Se necesita</th>
                <th className="py-1.5 pr-2 font-semibold">Estado</th>
                <th className="py-1.5 font-semibold">Se libera</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {G.asignacionesFisicas.map((a) => (
                <tr key={a.recurso} className="align-top">
                  <td className="py-1.5 pr-2 font-semibold text-slate-800">
                    {a.recurso} <span className="font-mono font-normal text-slate-400">{a.rbs}</span>
                  </td>
                  <td className="py-1.5 pr-2 text-slate-600">{a.provee}</td>
                  <td className="py-1.5 pr-2 text-slate-600">{a.responsable}</td>
                  <td className="py-1.5 pr-2 text-slate-600">{a.necesita}</td>
                  <td className="py-1.5 pr-2">
                    <span className={`inline-block text-[10px] font-bold px-1.5 py-0.5 rounded ${ESTADO_COLOR[a.estado] ?? ""}`}>{a.estado}</span>
                    <p className="text-[10px] text-slate-500 leading-snug mt-0.5">{a.real}</p>
                  </td>
                  <td className="py-1.5 text-slate-600">{a.libera}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Tarjeta>

      <Tarjeta className="mt-4" titulo="Calendario de recursos" nota={G.disponibilidad.join(" ")}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-2">
          {G.calendario.map((c) => (
            <div key={c.sprint} className="border border-slate-200 rounded-xl p-3">
              <p className="text-[10px] font-mono font-bold text-[#0d7377]">Sprint {c.sprint}</p>
              <p className="text-xs font-bold text-slate-900 leading-tight">{c.nombre}</p>
              <p className="text-[10px] text-slate-500">{c.fechas}</p>
              <p className="text-[11px] text-slate-700 mt-1">
                {c.dias} días · <strong>{c.horasPorIntegrante} h</strong> por integrante
              </p>
              {c.feriados.length > 0 && <p className="text-[10px] text-amber-700 mt-0.5 leading-snug">Feriados: {c.feriados.length}</p>}
              <p className="text-[10px] text-slate-500 mt-1 leading-snug">{c.colegio}</p>
            </div>
          ))}
        </div>
      </Tarjeta>

      <Tarjeta
        className="mt-4"
        titulo="Histograma de recursos"
        nota="Horas asignadas a cada integrante por semana. Línea punteada: lo disponible (20 h; menos con feriados). Ámbar: hasta 10 % más (la reunión diaria); rojo: más del 10 %. Los picos semanales se absorben dentro del sprint; la carga se controla por sprint."
      >
        <div className="flex gap-1.5 mb-3">
          {[
            { v: false, t: "Línea base" },
            { v: true, t: `Con la ${G.sc12?.id ?? "SC-12"}${G.sc12?.estado === "Aprobado" ? " (aprobada el 09/11)" : " (propuesta)"}` },
          ].map((b) => (
            <button
              key={b.t}
              onClick={() => setConSc12(b.v)}
              className={`text-[11px] px-2.5 py-1 rounded-full border ${conSc12 === b.v ? "bg-[#0d7377] text-white border-[#0d7377]" : "bg-white text-slate-600 border-slate-200"}`}
            >
              {b.t}
            </button>
          ))}
        </div>
        <Histograma h={h} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
          {h.integrantes.map((t) => {
            const x = horasSprint(h, t.nombre, 2);
            return (
              <div key={t.nombre} className={`rounded-lg border px-3 py-2 ${x > 80 ? "border-rose-300 bg-rose-50" : "border-slate-200"}`}>
                <p className="text-[10px] text-slate-500">{t.nombre} · Sprint 2</p>
                <p className={`text-sm font-bold ${x > 80 ? "text-rose-700" : "text-slate-900"}`}>
                  {n1(x)} h <span className="text-[10px] font-normal text-slate-500">de 80</span>
                </p>
              </div>
            );
          })}
        </div>
      </Tarjeta>

      <Tarjeta
        className="mt-4"
        titulo={`Nivelación del Sprint 2: análisis de decisiones con múltiples criterios (${G.sc12?.id})`}
        nota={`Criterios: ${G.criterios.map((c) => `${c.criterio} (${c.peso * 100} %)`).join(", ")}. Puntajes de 1 a 5 del director; decide el Product Owner.`}
      >
        <div className="grid lg:grid-cols-2 gap-3">
          {G.mcda.map((m) => (
            <div key={m.actividad} className="border border-slate-200 rounded-xl p-3">
              <p className="text-xs font-bold text-slate-900">
                <span className="font-mono text-slate-400">{m.actividad}</span> {m.descripcion}
              </p>
              <div className="mt-2 space-y-1.5">
                {m.candidatos.map((c, i) => (
                  <div key={c.persona} className="grid grid-cols-[6.5rem_1fr_2.5rem] items-center gap-2 text-[11px]" title={c.razon}>
                    <span className={i === 0 ? "font-bold text-[#0d7377]" : "text-slate-600"}>{c.persona}</span>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className={`h-full rounded-full ${i === 0 ? "bg-[#0d7377]" : "bg-slate-400"}`} style={{ width: `${(c.total / 5) * 100}%` }} />
                    </div>
                    <span className="font-mono text-right">{n1(c.total)}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-500 mt-2 leading-snug">{m.candidatos[0].razon}</p>
            </div>
          ))}
        </div>
        {G.sc12 && (
          <p className="text-[11px] text-slate-600 mt-3 leading-snug">
            <strong className="text-slate-800">
              {G.sc12.id} · {G.sc12.estado}:
            </strong>{" "}
            {G.sc12.impacto}
          </p>
        )}
      </Tarjeta>
    </Bloque>
  );
}

// ───────────────────────── 09.4 Liderar al equipo ─────────────────────────
export function LiderarEquipo() {
  const r = G.retrospectiva;
  return (
    <Bloque id="rec-liderar" etiqueta="09.4 · Liderar al equipo · Resultados" titulo="Desempeño del equipo en el Sprint 1">
      <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">
        Evaluación con indicadores tomados de los registros del proyecto, retrospectiva del {r.fecha} y etapa del equipo. Detalle en{" "}
        <a href="#doc-REC-05" className="underline font-semibold text-[#0d7377]">REC-05</a>.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
        {G.indicadores.map((i) => (
          <div key={i.indicador} className={`bg-white border border-slate-200 border-l-4 ${i.ok ? "border-l-emerald-500" : "border-l-amber-400"} rounded-xl p-3`}>
            <p className="text-[11px] text-slate-500 leading-snug">{i.indicador}</p>
            <p className="text-sm font-bold text-slate-900 mt-1 leading-snug">{i.resultado}</p>
            <p className={`text-[10px] font-semibold mt-1 flex items-center gap-1 ${i.ok ? "text-emerald-700" : "text-amber-700"}`}>
              {i.ok ? <CheckCircle2 className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
              {i.ok ? "Cumple" : "A mejorar"} · meta: {i.meta}
            </p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-4 mt-4">
        <Tarjeta titulo="Qué salió bien">
          <ul className="space-y-1">
            {r.bien.map((x) => (
              <li key={x} className="text-[11px] text-slate-700 leading-snug flex gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                {x}
              </li>
            ))}
          </ul>
        </Tarjeta>
        <Tarjeta titulo="Qué mejorar">
          <ul className="space-y-1">
            {r.mejorar.map((x) => (
              <li key={x} className="text-[11px] text-slate-700 leading-snug flex gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                {x}
              </li>
            ))}
          </ul>
        </Tarjeta>
        <Tarjeta titulo="Acciones de mejora">
          <ul className="space-y-1.5">
            {r.acciones.map((a) => (
              <li key={a.accion} className="text-[11px] text-slate-700 leading-snug">
                {a.accion}
                <span className="block text-[10px] text-slate-500">
                  {a.responsable} · {a.fecha}
                </span>
              </li>
            ))}
          </ul>
        </Tarjeta>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-4">
        <Tarjeta titulo="Etapa del equipo (escalera de Tuckman)" nota={G.tuckman.evidencia}>
          <div className="flex items-end gap-1.5">
            {G.tuckman.etapas.map((e, i) => {
              const actual = e === G.tuckman.actual;
              return (
                <div key={e} className="flex-1 text-center">
                  <div className={`mx-auto rounded-t-md ${actual ? "bg-[#0d7377]" : "bg-slate-200"}`} style={{ height: 14 + i * 12 }} />
                  <p className={`text-[10px] mt-1 leading-tight ${actual ? "font-bold text-[#0d7377]" : "text-slate-500"}`}>{e}</p>
                </div>
              );
            })}
          </div>
        </Tarjeta>
        <Tarjeta titulo="Logros a reconocer en la revisión" nota={`Plan de reconocimiento: ${G.reconocimiento.map((x) => x.cuando.toLowerCase()).join(", ")}.`}>
          <ul className="space-y-1.5">
            {G.logros.map((l) => (
              <li key={l.persona} className="text-[11px] text-slate-700 leading-snug">
                <strong className="text-slate-900">{corto(l.persona)}:</strong> {l.logro}
              </li>
            ))}
          </ul>
        </Tarjeta>
      </div>

      <Tarjeta
        className="mt-4"
        titulo={`Autoevaluación del Sprint 1 (${G.autoevaluacionS1.fecha})`}
        nota="Cada integrante se calificó de 1 (nunca) a 5 (siempre). Desde el Sprint 2 se repite al final de cada sprint."
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-[11px]">
            <thead>
              <tr className="text-[10px] uppercase tracking-wide text-slate-500">
                <th className="text-left py-1.5 pr-2 font-semibold">Afirmación</th>
                {Object.keys(G.autoevaluacionS1.puntajes).map((p) => (
                  <th key={p} className="py-1.5 px-1 font-semibold text-center">
                    {corto(p)}
                  </th>
                ))}
                <th className="py-1.5 px-1 font-semibold text-center">Promedio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {G.autoevaluacion.map((a, i) => {
                const v = Object.values(G.autoevaluacionS1.puntajes).map((x) => x[i]);
                const prom = v.reduce((s, x) => s + x, 0) / v.length;
                return (
                  <tr key={a}>
                    <td className="py-1.5 pr-2 text-slate-700">{a}</td>
                    {v.map((x, k) => (
                      <td key={k} className="py-1.5 px-1 text-center">
                        <span className={`inline-block w-7 rounded font-bold ${x === 5 ? "bg-emerald-100 text-emerald-800" : "bg-teal-50 text-teal-800"}`}>{x}</span>
                      </td>
                    ))}
                    <td className="py-1.5 px-1 text-center font-mono font-bold text-slate-800">{n1(prom)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Tarjeta>
    </Bloque>
  );
}

// ───────────────────────── 09.5 Monitorear y controlar los recursos ─────────────────────────
export function ControlRecursos() {
  const [abierta, setAbierta] = useState(0);
  const d = G.desviaciones[abierta];
  return (
    <Bloque id="rec-control" etiqueta="09.5 · Monitorear y controlar los recursos · Resultados" titulo="Control de los recursos físicos y virtuales al 07/11/2026" fondo="bg-white">
      <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">
        Uso planificado frente al real, desviaciones, tendencias y acciones correctivas. Detalle en{" "}
        <a href="#doc-REC-06" className="underline font-semibold text-[#0d7377]">REC-06</a>.
      </p>

      <Tarjeta className="mt-6" titulo="Tablero de recursos">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {G.control.map((c) => (
            <div key={c.recurso} className="flex gap-2.5 border border-slate-200 rounded-xl p-3">
              <span className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${SEMAFORO[c.semaforo] ?? "bg-slate-300"}`} />
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">{c.recurso}</p>
                <p className="text-[10px] text-slate-500">Planificado: {c.planificado}</p>
                <p className="text-[11px] text-slate-700 leading-snug mt-0.5">{c.real}</p>
              </div>
            </div>
          ))}
        </div>
      </Tarjeta>

      <div className="grid lg:grid-cols-2 gap-4 mt-4">
        <Tarjeta titulo="Desviaciones: resolución de problemas en 6 pasos">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {G.desviaciones.map((x, i) => (
              <button
                key={x.problema}
                onClick={() => setAbierta(i)}
                className={`text-[11px] px-2.5 py-1 rounded-full border text-left ${abierta === i ? "bg-[#0d7377] text-white border-[#0d7377]" : "bg-white text-slate-600 border-slate-200"}`}
              >
                {x.problema}
              </button>
            ))}
          </div>
          <ol className="space-y-1.5">
            {d.pasos.map(([paso, texto], i) => (
              <li key={paso} className="grid grid-cols-[1.5rem_5.5rem_1fr] gap-1 text-[11px] leading-snug">
                <span className="font-mono font-bold text-[#0d7377]">{i + 1}</span>
                <span className="font-semibold text-slate-800">{paso}</span>
                <span className="text-slate-600">{texto}</span>
              </li>
            ))}
          </ol>
        </Tarjeta>
        <Tarjeta titulo="Análisis costo-beneficio: velocidad de la API en el piloto" nota={`Recomendación: ${G.recomendacionCB}`}>
          <div className="space-y-2">
            {G.costoBeneficio.map((c, i) => (
              <div key={c.opcion} className={`rounded-xl border p-3 ${i === 2 ? "border-[#0d7377] bg-teal-50/60" : "border-slate-200"}`}>
                <p className="text-xs font-bold text-slate-900">
                  {c.opcion} <span className="font-mono font-normal text-slate-500">· {c.costo}</span>
                </p>
                <p className="text-[11px] text-emerald-700 leading-snug">+ {c.beneficio}</p>
                <p className="text-[11px] text-rose-700 leading-snug">− {c.contra}</p>
              </div>
            ))}
          </div>
        </Tarjeta>
      </div>
    </Bloque>
  );
}
