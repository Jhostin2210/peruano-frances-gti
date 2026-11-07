/**
 * Resultados del proceso «Estimar los recursos» (REC-01): requisitos de recursos del equipo frente a las horas
 * disponibles, estimación ascendente por paquete, RBS, recursos no humanos y herramientas usadas.
 * Lee documentacion/datos/recursos.mjs (RECURSOS_ESTIMACION), que calcula todo desde el cronograma.
 */

import { AlertTriangle, CheckCircle2, CircleMinus } from "lucide-react";
import { RECURSOS_ESTIMACION as R, SPRINTS } from "../content/datos";

const n1 = (x: number) => {
  const [ent, dec] = (Math.round(x * 10) / 10).toFixed(1).split(".");
  return ent.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (dec === "0" ? "" : `,${dec}`);
};
// Intensidad de la celda según la carga frente a lo disponible (un solo tono; rojo solo si se excede).
const tono = (h: number, cap: number) => {
  if (h > cap) return "bg-rose-100 text-rose-800 font-bold";
  const r = h / cap;
  if (r >= 0.75) return "bg-teal-200 text-teal-900";
  if (r >= 0.4) return "bg-teal-100 text-teal-900";
  if (r > 0) return "bg-teal-50 text-teal-800";
  return "text-slate-400";
};

type Nodo = { id: string; nombre: string; hijos?: Nodo[] };
function Rama({ nodo }: { nodo: Nodo; key?: string }) {
  return (
    <li className="mt-1">
      <span className="font-mono text-[10px] text-slate-400 mr-1">{nodo.id}</span>
      <span className="text-[12px] text-slate-700">{nodo.nombre}</span>
      {nodo.hijos && (
        <ul className="ml-4 border-l border-slate-200 pl-3">
          {nodo.hijos.map((h) => (
            <Rama key={h.id} nodo={h} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function RecursosEstimacion() {
  const total = R.equipo.reduce((s, t) => s + t.total, 0);
  const personaMes = total / 160;
  const maxPaquete = Math.max(...R.paquetes.map((p) => p.horas));
  const grupos = [...new Set(R.materiales.map((m) => m.grupo))];
  const tarjetas = [
    { valor: `${n1(total)} h`, etiqueta: "Horas del equipo", detalle: `Unas ${n1(personaMes)} personas-mes, al ${R.supuestos.dedicacion * 100} % de dedicación` },
    { valor: String(R.sobreasignaciones.length), etiqueta: "Sobreasignaciones", detalle: "Integrante y sprint con más horas que las disponibles", alerta: R.sobreasignaciones.length > 0 },
    { valor: String(R.materiales.length), etiqueta: "Recursos no humanos", detalle: `${grupos.join(", ").toLowerCase()}` },
    { valor: `${n1(R.cocomo.previsto.esfuerzo)}`, etiqueta: "COCOMO: personas-mes del sistema completo", detalle: `Frente a ${n1(personaMes)} del plan: el plan es ajustado` },
  ];

  return (
    <section id="rec-estimacion" className="py-14 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <p className="font-mono text-[11px] font-bold text-[#0d7377] mb-1">09.2 · Estimar los recursos · Resultados</p>
        <h3 className="font-serif text-2xl font-bold text-slate-900">Estimación de los recursos del proyecto</h3>
        <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">
          Requisitos de recursos calculados desde las 45 actividades del cronograma, de forma ascendente: los días hábiles de cada actividad por{" "}
          {R.supuestos.horasDia} horas y por una dedicación del {R.supuestos.dedicacion * 100} %, más {R.supuestos.horasDaily * 60} minutos de reunión diaria.
          El detalle está en el documento <a href="#doc-REC-01" className="underline font-semibold text-[#0d7377]">REC-01</a>.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {tarjetas.map((t) => (
            <div key={t.etiqueta} className={`bg-white border border-slate-200 border-l-4 ${t.alerta ? "border-l-rose-500" : "border-l-[#0d7377]"} rounded-xl p-4`}>
              <p className="font-serif text-2xl font-bold text-slate-900">{t.valor}</p>
              <p className="text-xs font-semibold text-slate-800 mt-1 flex items-center gap-1">
                {t.alerta && <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />}
                {t.etiqueta}
              </p>
              <p className="text-[11px] text-slate-500 leading-snug mt-0.5">{t.detalle}</p>
            </div>
          ))}
        </div>

        {/* Horas por integrante y sprint */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 mt-4">
          <h4 className="font-serif font-bold text-slate-900 text-sm">Horas por integrante y sprint</h4>
          <p className="text-[11px] text-slate-500 mb-3">Más oscuro, más cerca de lo disponible. En rojo, el sprint en que el integrante tiene más horas que las disponibles.</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-xs">
              <thead>
                <tr className="text-[10px] uppercase tracking-wide text-slate-500">
                  <th className="text-left py-1.5 pr-2 font-semibold">Integrante</th>
                  {SPRINTS.map((s) => (
                    <th key={s.n} className="py-1.5 font-semibold" title={s.nombre}>
                      Sprint {s.n}
                    </th>
                  ))}
                  <th className="py-1.5 font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {R.equipo.map((t) => (
                  <tr key={t.nombre} className="border-t border-slate-100">
                    <td className="py-1.5 pr-2 font-semibold text-slate-800 whitespace-nowrap">{t.nombre}</td>
                    {t.porSprint.map((h, i) => (
                      <td key={i} className="p-0.5">
                        <div title={`${n1(h)} h de ${n1(R.capacidad[i])} disponibles`} className={`rounded-md text-center py-1.5 font-mono ${tono(h, R.capacidad[i])}`}>
                          {n1(h)}
                        </div>
                      </td>
                    ))}
                    <td className="text-center font-mono font-bold text-slate-800">{n1(t.total)}</td>
                  </tr>
                ))}
                <tr className="border-t border-slate-200 text-slate-500">
                  <td className="py-1.5 pr-2 text-[11px]">Disponible por integrante</td>
                  {R.capacidad.map((c, i) => (
                    <td key={i} className="text-center font-mono text-[11px]">
                      {n1(c)}
                    </td>
                  ))}
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-500 mt-3">
            La carga se nivela al planificar cada sprint: el Product Owner ordena el trabajo y el equipo redistribuye actividades. Si hay que mover fechas de la
            línea base, se presenta una solicitud de cambio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          {/* Horas por paquete */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h4 className="font-serif font-bold text-slate-900 text-sm">Horas del equipo por paquete de la EDT</h4>
            <p className="text-[11px] text-slate-500 mb-3">Suma ascendente de las actividades de cada paquete. Se indica cuándo participa personal del colegio.</p>
            <div className="space-y-1.5">
              {R.paquetes.map((p) => (
                <div key={p.id} className="grid grid-cols-[minmax(0,12rem)_1fr_auto] items-center gap-2 text-[11px]" title={`${p.actividades} actividades`}>
                  <span className="text-slate-600 truncate">
                    <span className="font-mono text-slate-400">{p.id}</span> {p.nombre}
                  </span>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-[#0d7377]" style={{ width: `${(p.horas / maxPaquete) * 100}%` }} />
                  </div>
                  <span className="font-mono text-slate-700 text-right whitespace-nowrap">
                    {n1(p.horas)} h{p.colegio.length ? <span className="ml-1 text-[9px] text-amber-700">+ colegio</span> : null}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RBS */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5">
            <h4 className="font-serif font-bold text-slate-900 text-sm">Estructura de desglose de recursos (RBS)</h4>
            <p className="text-[11px] text-slate-500 mb-2">Los recursos del proyecto por categoría.</p>
            <ul>
              {(R.rbs as Nodo[]).map((n) => (
                <li key={n.id} className="mt-2">
                  <span className="font-mono text-[10px] text-slate-400 mr-1">{n.id}</span>
                  <span className="text-[12px] font-bold text-slate-900">{n.nombre}</span>
                  {n.hijos && (
                    <ul className="ml-4 border-l border-slate-200 pl-3">
                      {n.hijos.map((h) => (
                        <Rama key={h.id} nodo={h} />
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recursos no humanos */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 mt-4">
          <h4 className="font-serif font-bold text-slate-900 text-sm">Recursos físicos, tecnológicos, de datos e instalaciones</h4>
          <div className="overflow-x-auto mt-3">
            <table className="w-full min-w-[760px] text-xs">
              <thead>
                <tr className="text-[10px] uppercase tracking-wide text-slate-500 text-left">
                  <th className="py-1.5 pr-2 font-semibold">Tipo</th>
                  <th className="py-1.5 pr-2 font-semibold">Recurso</th>
                  <th className="py-1.5 pr-2 font-semibold">Cantidad</th>
                  <th className="py-1.5 pr-2 font-semibold">Para qué</th>
                  <th className="py-1.5 pr-2 font-semibold">Costo</th>
                  <th className="py-1.5 font-semibold">Cuándo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {R.materiales.map((m) => (
                  <tr key={m.recurso} className="align-top">
                    <td className="py-1.5 pr-2 text-slate-500">{m.grupo}</td>
                    <td className="py-1.5 pr-2 font-semibold text-slate-800">{m.recurso}</td>
                    <td className="py-1.5 pr-2 text-slate-600">{m.cantidad}</td>
                    <td className="py-1.5 pr-2 text-slate-600">{m.para}</td>
                    <td className="py-1.5 pr-2 text-slate-600">{m.costo}</td>
                    <td className="py-1.5 text-slate-600">{m.cuando}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Herramientas */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 mt-4">
          <h4 className="font-serif font-bold text-slate-900 text-sm">Herramientas y técnicas usadas</h4>
          <p className="text-[11px] text-slate-500 mb-3">Las de la guía de clase, con cómo se aplicó cada una o por qué no.</p>
          <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2">
            {R.herramientas.map((h) => (
              <li key={h.nombre} className="flex gap-2 text-[11px] leading-snug">
                {h.uso === "Sí" ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> : <CircleMinus className="w-4 h-4 text-slate-400 shrink-0" />}
                <span>
                  <strong className="text-slate-800">{h.nombre}.</strong> <span className="text-slate-600">{h.como}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-slate-500 mt-3">
            COCOMO básico (modo orgánico) sobre {n1(R.cocomo.lineas.valor)} líneas de código medidas el {R.cocomo.lineas.fecha}: el sistema actual equivale a{" "}
            {n1(R.cocomo.actual.esfuerzo)} personas-mes y el completo, a unas {n1(R.cocomo.previsto.esfuerzo)}. COCOMO supone un equipo profesional a tiempo
            completo que escribe todo el código; este proyecto reutiliza librerías libres y ya tiene un prototipo.
          </p>
        </div>
      </div>
    </section>
  );
}
