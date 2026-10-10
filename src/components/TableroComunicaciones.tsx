/**
 * Tablero de comunicaciones del proyecto (proceso «Monitorear las comunicaciones»).
 * Lee el registro de comunicaciones (INT-06), que está en documentacion/datos/comunicaciones.mjs.
 * Una comunicación programada cuya fecha límite ya pasó se muestra como vencida hasta que se registre como realizada.
 */

import { useMemo, useState } from "react";
import { AlertTriangle, CalendarClock, CheckCircle2, ClipboardList, FileCheck2, Users } from "lucide-react";
import { COMUNICACIONES, CORTE, INTERESADOS, SPRINTS } from "../content/datos";

type Estado = "Realizada" | "Programada" | "Vencida";

const COLOR: Record<Estado, { barra: string; chip: string }> = {
  Realizada: { barra: "bg-emerald-500", chip: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  Programada: { barra: "bg-blue-400", chip: "bg-blue-100 text-blue-800 border-blue-200" },
  Vencida: { barra: "bg-rose-500", chip: "bg-rose-100 text-rose-800 border-rose-200" },
};
const ESTADOS: Estado[] = ["Realizada", "Programada", "Vencida"];

const dd = (n: number) => String(n).padStart(2, "0");
const hoyIso = () => {
  const d = new Date();
  return `${d.getFullYear()}-${dd(d.getMonth() + 1)}-${dd(d.getDate())}`;
};
const fecha = (iso: string) => iso.split("-").reverse().join("/");
const nombreSprint = (n: number) => (n === 0 ? "Antes del inicio" : `Sprint ${n}`);

function Barras({ partes, total }: { partes: Record<Estado, number>; total: number }) {
  return (
    <div className="flex h-2.5 rounded-full overflow-hidden bg-slate-100" style={{ width: `${Math.max(6, total)}%` }}>
      {ESTADOS.map((e) => (partes[e] > 0 ? <div key={e} className={COLOR[e].barra} style={{ flexGrow: partes[e] }} title={`${e}: ${partes[e]}`} /> : null))}
    </div>
  );
}

export default function TableroComunicaciones() {
  const hoy = hoyIso();
  const [sprint, setSprint] = useState("Todos");
  const [estado, setEstado] = useState("Todos");
  const [interesado, setInteresado] = useState("Todos");

  // Estado efectivo a la fecha de hoy.
  const filas = useMemo(
    () =>
      COMUNICACIONES.map((c) => ({
        ...c,
        efectivo: (c.estado === "Realizada" ? "Realizada" : c.fecha < hoy ? "Vencida" : "Programada") as Estado,
      })),
    [hoy],
  );

  const cuenta = (e: Estado) => filas.filter((f) => f.efectivo === e).length;
  const realizadas = cuenta("Realizada");
  const vencidas = cuenta("Vencida");
  // El cumplimiento se mide sobre el calendario del proyecto (desde el Sprint 1), no sobre el levantamiento previo.
  const delCalendario = filas.filter((f) => f.sprint > 0 && f.efectivo !== "Programada");
  const cumplidas = delCalendario.filter((f) => f.efectivo === "Realizada").length;
  const contactados = new Set(filas.filter((f) => f.efectivo === "Realizada").flatMap((f) => f.interesados));
  const clave = INTERESADOS.filter((i) => i.clave);
  const claveContactados = clave.filter((i) => contactados.has(i.id)).length;
  const conConstancia = filas.filter((f) => f.efectivo === "Realizada" && f.constancia && f.constancia !== "—").length;
  const proximas = filas.filter((f) => f.efectivo === "Programada").slice(0, 5);

  const partesDe = (lista: typeof filas) =>
    ESTADOS.reduce((a, e) => ({ ...a, [e]: lista.filter((f) => f.efectivo === e).length }), {} as Record<Estado, number>);

  const canales = [...new Set(filas.map((f) => f.canal))]
    .map((canal) => ({ canal, lista: filas.filter((f) => f.canal === canal) }))
    .sort((a, b) => b.lista.length - a.lista.length);
  const maxCanal = Math.max(...canales.map((x) => x.lista.length));
  const porInteresado = INTERESADOS.map((i) => ({ i, lista: filas.filter((f) => f.interesados.includes(i.id)) }));
  const maxInteresado = Math.max(...porInteresado.map((x) => x.lista.length), 1);
  const porSprint = [0, 1, 2, 3, 4, 5, 6].map((n) => ({ n, lista: filas.filter((f) => f.sprint === n) }));
  const maxSprint = Math.max(...porSprint.map((x) => x.lista.length), 1);

  const visibles = filas.filter(
    (f) =>
      (sprint === "Todos" || String(f.sprint) === sprint) &&
      (estado === "Todos" || f.efectivo === estado) &&
      (interesado === "Todos" || f.interesados.includes(interesado)),
  );

  const tarjetas = [
    { icono: ClipboardList, valor: String(filas.length), etiqueta: "Comunicaciones registradas", detalle: "En el registro INT-06", tono: "text-[#1f3864]" },
    { icono: CheckCircle2, valor: String(realizadas), etiqueta: "Realizadas", detalle: `${conConstancia} con constancia`, tono: "text-emerald-600" },
    { icono: CalendarClock, valor: String(cuenta("Programada")), etiqueta: "Programadas", detalle: "Con fecha límite y responsable", tono: "text-blue-600" },
    { icono: AlertTriangle, valor: String(vencidas), etiqueta: "Vencidas", detalle: vencidas ? "Fecha límite pasada sin registrar" : "Ninguna fuera de plazo", tono: vencidas ? "text-rose-600" : "text-slate-400" },
    {
      icono: FileCheck2,
      valor: delCalendario.length ? `${Math.round((cumplidas / delCalendario.length) * 100)} %` : "—",
      etiqueta: "Cumplimiento del calendario",
      detalle: delCalendario.length ? "Realizadas entre las que ya debían hacerse · meta 90 %" : "Aún no vence ninguna comunicación programada · meta 90 %",
      tono: "text-[#0d7377]",
    },
    { icono: Users, valor: `${claveContactados} de ${clave.length}`, etiqueta: "Interesados clave contactados", detalle: `${contactados.size} de ${INTERESADOS.length} en total`, tono: "text-amber-600" },
  ];

  const selector = "border border-slate-300 rounded-lg px-3 py-2 text-xs bg-white text-slate-700";

  return (
    <section id="com-tablero" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">06.8 · Monitoreo y control · Tablero</p>
        <h3 className="font-serif text-2xl font-bold text-slate-900">Tablero de comunicaciones del proyecto</h3>
        <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">
          Muestra qué se ha comunicado, qué está programado y a quiénes se ha llegado. Se alimenta del registro de comunicaciones
          (<a href="#doc-INT-06" className="underline font-semibold text-[#0d7377]">INT-06</a>) y calcula los indicadores del plan
          (<a href="#doc-INT-03" className="underline font-semibold text-[#0d7377]">INT-03</a>). No contiene datos simulados.
        </p>
        <p className="font-mono text-[10px] text-slate-500 mt-2">
          Estado calculado al {fecha(hoy)} · Registro actualizado al {fecha(CORTE)}
        </p>

        {/* Indicadores */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
          {tarjetas.map((t) => (
            <div key={t.etiqueta} className="bg-white border border-slate-200 rounded-2xl p-4">
              <div className="flex items-start justify-between gap-2">
                <p className={`font-serif text-3xl font-bold ${t.tono}`}>{t.valor}</p>
                <t.icono className={`w-5 h-5 ${t.tono}`} />
              </div>
              <p className="text-xs font-semibold text-slate-800 mt-1">{t.etiqueta}</p>
              <p className="text-[11px] text-slate-500 leading-snug mt-0.5">{t.detalle}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-4 text-[11px] text-slate-600">
          {ESTADOS.map((e) => (
            <span key={e} className="inline-flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-sm ${COLOR[e].barra}`} /> {e}
            </span>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          {/* Por momento del proyecto */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h4 className="font-serif font-bold text-slate-900 text-sm mb-4">Comunicaciones por sprint</h4>
            <div className="space-y-2.5">
              {porSprint.map(({ n, lista }) => (
                <div key={n} className="grid grid-cols-[7.5rem_1fr_1.5rem] items-center gap-2 text-xs">
                  <span className="text-slate-600">{nombreSprint(n)}</span>
                  <Barras partes={partesDe(lista)} total={(lista.length / maxSprint) * 100} />
                  <span className="font-mono font-bold text-slate-700 text-right">{lista.length}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Por canal */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h4 className="font-serif font-bold text-slate-900 text-sm mb-4">Comunicaciones por canal</h4>
            <div className="space-y-2.5">
              {canales.map(({ canal, lista }) => (
                <div key={canal} className="grid grid-cols-[10.5rem_1fr_1.5rem] items-center gap-2 text-xs">
                  <span className="text-slate-600 leading-tight">{canal}</span>
                  <Barras partes={partesDe(lista)} total={(lista.length / maxCanal) * 100} />
                  <span className="font-mono font-bold text-slate-700 text-right">{lista.length}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cobertura por interesado */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h4 className="font-serif font-bold text-slate-900 text-sm mb-1">Cobertura por interesado</h4>
            <p className="text-[11px] text-slate-500 mb-4">★ interesado clave. Sin barra: no tiene comunicación directa prevista en el plan.</p>
            <div className="space-y-2">
              {porInteresado.map(({ i, lista }) => (
                <div key={i.id} className="grid grid-cols-[12.5rem_1fr_1.5rem] items-center gap-2 text-xs">
                  <span className={`leading-tight ${i.clave ? "text-slate-900 font-semibold" : "text-slate-600"}`}>
                    {i.clave ? "★ " : ""}
                    {i.nombre}
                  </span>
                  {lista.length > 0 ? <Barras partes={partesDe(lista)} total={(lista.length / maxInteresado) * 100} /> : <span className="h-2.5" />}
                  <span className="font-mono font-bold text-slate-700 text-right">{lista.length}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Próximas */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h4 className="font-serif font-bold text-slate-900 text-sm mb-4">Próximas comunicaciones</h4>
            {proximas.length === 0 ? (
              <p className="text-xs text-slate-500">No hay comunicaciones programadas.</p>
            ) : (
              <ol className="space-y-3">
                {proximas.map((f) => (
                  <li key={f.id} className="flex gap-3">
                    <div className="flex-shrink-0 w-[4.6rem] text-center bg-blue-50 border border-blue-200 rounded-lg py-1.5">
                      <p className="font-mono text-[10px] font-bold text-blue-800">{fecha(f.fecha).slice(0, 5)}</p>
                      <p className="font-mono text-[9px] text-blue-600">{f.fecha.slice(0, 4)}</p>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-800 leading-snug">{f.asunto}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {f.emisor} → {f.interesados.join(", ")} · {f.canal}
                        {f.cuando ? ` · ${f.cuando}` : ""}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>

        {/* Registro con filtros */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 mt-4">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h4 className="font-serif font-bold text-slate-900 text-sm">
              Registro de comunicaciones <span className="font-mono text-[11px] font-normal text-slate-500">({visibles.length} de {filas.length})</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              <select aria-label="Filtrar por sprint" className={selector} value={sprint} onChange={(e) => setSprint(e.target.value)}>
                <option value="Todos">Todos los sprints</option>
                <option value="0">Antes del inicio</option>
                {SPRINTS.map((s) => (
                  <option key={s.n} value={String(s.n)}>
                    Sprint {s.n} · {s.nombre}
                  </option>
                ))}
              </select>
              <select aria-label="Filtrar por estado" className={selector} value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option value="Todos">Todos los estados</option>
                {ESTADOS.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              <select aria-label="Filtrar por interesado" className={selector} value={interesado} onChange={(e) => setInteresado(e.target.value)}>
                <option value="Todos">Todos los interesados</option>
                {INTERESADOS.map((i) => (
                  <option key={i.id} value={i.id}>
                    {i.id} {i.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="overflow-x-auto border border-slate-200 rounded-lg">
            <table className="w-full text-xs text-left min-w-[860px]">
              <thead>
                <tr className="bg-[#1f3864] text-white">
                  {["ID", "Fecha", "Comunicación", "Emite", "Interesados", "Canal", "Estado", "Constancia"].map((col) => (
                    <th key={col} className="px-3 py-2 font-semibold">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibles.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-3 py-6 text-center text-slate-500">
                      Ninguna comunicación coincide con los filtros.
                    </td>
                  </tr>
                )}
                {visibles.map((f, k) => (
                  <tr key={f.id} className={k % 2 ? "bg-slate-50" : "bg-white"}>
                    <td className="px-3 py-2 border-t border-slate-200 font-mono font-bold text-[#1f3864] whitespace-nowrap">{f.id}</td>
                    <td className="px-3 py-2 border-t border-slate-200 whitespace-nowrap">{f.cuando || fecha(f.fecha)}</td>
                    <td className="px-3 py-2 border-t border-slate-200 text-slate-800">
                      <span className="block font-medium leading-snug">{f.asunto}</span>
                      <span className="text-[10px] text-slate-500">
                        {f.tipo} · {nombreSprint(f.sprint)}
                      </span>
                    </td>
                    <td className="px-3 py-2 border-t border-slate-200 text-slate-600">{f.emisor}</td>
                    <td className="px-3 py-2 border-t border-slate-200 text-slate-600">
                      {f.interesados.map((id) => INTERESADOS.find((i) => i.id === id)?.nombre ?? id).join("; ")}
                    </td>
                    <td className="px-3 py-2 border-t border-slate-200 text-slate-600">{f.canal}</td>
                    <td className="px-3 py-2 border-t border-slate-200">
                      <span className={`inline-block font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${COLOR[f.efectivo].chip}`}>{f.efectivo}</span>
                    </td>
                    <td className="px-3 py-2 border-t border-slate-200 text-slate-600">{f.efectivo === "Realizada" ? f.constancia : `Prevista: ${f.constancia}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-500 italic mt-2">
            Para actualizar el tablero se registra la comunicación en documentacion/datos/comunicaciones.mjs y se vuelve a generar la documentación.
          </p>
        </div>
      </div>
    </section>
  );
}
