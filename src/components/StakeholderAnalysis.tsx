/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Cite from "./Cite";
import { FACTORES_INTERNOS, FACTORES_EXTERNOS, ACTIVOS, CANVAS } from "../data";

// Material del levantamiento de información de la fase de formulación.
// "caso": lienzo del modelo de negocio y factores del entorno (entradas para iniciar el proyecto).
// "entrevista": entrevista a la Dirección (técnica para identificar a los interesados).
// El registro y el análisis de interesados están ahora en los documentos INT-01 a INT-05.
interface StakeholderAnalysisProps {
  parte: "caso" | "entrevista";
}

export default function StakeholderAnalysis({ parte }: StakeholderAnalysisProps) {
  return (
    <div className="animate-fade-in">
      {parte === "caso" && (
      <>
      {/* ── CASO DE NEGOCIO (CANVAS) ── */}
      <section id="canvas" className="py-14 bg-white border-b border-slate-200">
        <div className="px-6 sm:px-10 lg:px-12">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
            05.1 · Iniciar el proyecto · Entrada: caso de negocio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Caso de Negocio
          </h2>
          <p className="text-slate-650 text-sm font-mono mb-2">Business Model Canvas</p>
          <p className="text-slate-700 text-sm mb-8 leading-relaxed max-w-4xl">
            Modelo de negocio estratégico estructurado para el despliegue del sistema inteligente de alerta temprana, resguardando la autosuficiencia técnica del colegio
            <Cite r="Osterwalder & Pigneur, 2010" />.
          </p>

          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs text-sm max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="bg-blue-50/50 p-5">
                <p className="font-mono text-[10px] font-black text-blue-700 uppercase tracking-wider mb-3">
                  Socios Clave
                </p>
                <ul className="space-y-2">
                  {CANVAS.socios.map((i) => (
                    <li key={i} className="text-xs text-slate-800 flex gap-1.5 leading-snug">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-1 divide-y divide-slate-200">
                <div className="bg-indigo-50/50 p-5">
                  <p className="font-mono text-[10px] font-black text-indigo-700 uppercase tracking-wider mb-3">
                    Actividades Clave
                  </p>
                  <ul className="space-y-2">
                    {CANVAS.actividades.map((i) => (
                      <li key={i} className="text-xs text-slate-800 flex gap-1.5 leading-snug">
                        <span className="text-indigo-400 font-bold">•</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-violet-50/50 p-5">
                  <p className="font-mono text-[10px] font-black text-violet-700 uppercase tracking-wider mb-3">
                    Recursos Clave
                  </p>
                  <ul className="space-y-2">
                    {CANVAS.recursos.map((i) => (
                      <li key={i} className="text-xs text-slate-800 flex gap-1.5 leading-snug">
                        <span className="text-violet-400 font-bold">•</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#0d7377] p-5 text-white shadow-inner">
                <p className="font-mono text-[10px] font-black text-[#8fecec] uppercase tracking-wider mb-3">
                  Propuesta de Valor
                </p>
                <ul className="space-y-2.5">
                  {CANVAS.propuesta.map((i) => (
                    <li key={i} className="text-xs text-white/95 flex gap-1.5 leading-relaxed font-medium">
                      <span className="text-[#8fecec] font-bold">•</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-1 divide-y divide-slate-200">
                <div className="bg-amber-50/50 p-5">
                  <p className="font-mono text-[10px] font-black text-amber-700 uppercase tracking-wider mb-3">
                    Relación con Clientes
                  </p>
                  <ul className="space-y-2">
                    {CANVAS.relacion.map((i) => (
                      <li key={i} className="text-xs text-slate-800 flex gap-1.5 leading-snug">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50/50 p-5">
                  <p className="font-mono text-[10px] font-black text-orange-700 uppercase tracking-wider mb-3">
                    Canales
                  </p>
                  <ul className="space-y-2">
                    {CANVAS.canales.map((i) => (
                      <li key={i} className="text-xs text-slate-800 flex gap-1.5 leading-snug">
                        <span className="text-orange-400 font-bold">•</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50/50 p-5">
                <p className="font-mono text-[10px] font-black text-emerald-700 uppercase tracking-wider mb-3">
                  Segmentos de Clientes
                </p>
                <ul className="space-y-2">
                  {CANVAS.segmentos.map((i) => (
                    <li key={i} className="text-xs text-slate-800 flex gap-1.5 leading-snug">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-slate-200">
              <div className="bg-slate-100 p-5">
                <p className="font-mono text-[10px] font-black text-slate-700 uppercase tracking-wider mb-3">
                  Estructura de Costos
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                  {CANVAS.costos.map((i) => (
                    <li key={i} className="text-xs text-slate-800 flex gap-1.5 items-start leading-snug">
                      <span className="text-slate-500 font-bold">•</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-teal-50/50 p-5">
                <p className="font-mono text-[10px] font-black text-teal-700 uppercase tracking-wider mb-3">
                  Fuentes de Ingresos / Valor
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                  {CANVAS.ingresos.map((i) => (
                    <li key={i} className="text-xs text-slate-800 flex gap-1.5 items-start leading-snug">
                      <span className="text-teal-400 font-bold">•</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACTORES AMBIENTALES ── */}
      <section id="factores" className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="px-6 sm:px-10 lg:px-12">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
            05.1 · Iniciar el proyecto · Entrada: factores del entorno
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Factores Ambientales de la Empresa
          </h2>
          <p className="text-slate-705 text-sm mb-8 leading-relaxed max-w-4xl">
            Análisis de las variables ambientales y organizacionales externas e internas que inciden en la factibilidad técnica y adopción del software
            <Cite r="PMI, 2025" />.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-5xl">
            <div>
              <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg mb-4 flex items-center gap-2">
                <span className="font-mono w-6 h-6 rounded-full bg-teal-600 text-white text-[10px] font-bold flex items-center justify-center">
                  I
                </span>
                Factores Internos (Capacidad Instalada)
              </h3>
              <div className="space-y-3">
                {FACTORES_INTERNOS.map((f) => (
                  <div
                    key={f.factor}
                    className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs"
                  >
                    <h4 className="font-bold text-teal-850 text-sm mb-1">{f.factor}</h4>
                    <p className="text-slate-700 text-xs leading-relaxed">{f.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg mb-4 flex items-center gap-2">
                <span className="font-mono w-6 h-6 rounded-full bg-orange-600 text-white text-[10px] font-bold flex items-center justify-center">
                  E
                </span>
                Factores Externos (Condiciones del Entorno)
              </h3>
              <div className="space-y-3">
                {FACTORES_EXTERNOS.map((f) => (
                  <div
                    key={f.factor}
                    className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs"
                  >
                    <h4 className="font-bold text-orange-850 text-sm mb-1">{f.factor}</h4>
                    <p className="text-slate-700 text-xs leading-relaxed">{f.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 max-w-5xl">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Activos de los Procesos de la Organización
            </h3>
            <p className="text-slate-700 text-sm mb-6 leading-relaxed">
              Base documental y de procesos acumulados en la IEP que actúan como aceleradores para el desarrollo
              <Cite r="PMI, 2025" />.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ACTIVOS.map((a) => (
                <div
                  key={a.titulo}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-[#0d7377] transition-colors"
                >
                  <h4 className="font-serif font-bold text-slate-900 text-xs sm:text-sm mb-3 pb-2 border-b border-slate-100 uppercase tracking-wider font-mono">
                    {a.titulo}
                  </h4>
                  <ul className="space-y-2">
                    {a.items.map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-xs text-slate-800 leading-snug">
                        <span className="text-[#0d7377] font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      </>
      )}

      {parte === "entrevista" && (
      <>
      {/* ── ENTREVISTA SEMI-ESTRUCTURADA ── */}
      <section id="entrevista" className="py-14 bg-white border-b border-slate-200">
        <div className="px-6 sm:px-10 lg:px-12">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
            06.1 · Identificar a los interesados · Técnica: entrevista
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Entrevista a la Dirección General
          </h2>
          <p className="text-slate-705 text-sm mb-8 leading-relaxed max-w-4xl">
            Entrevista semiestructurada realizada en el colegio a la Promotora Directora. La segunda entrevista, al encargado de soporte de TI y a la gestora de Cubicol, está pendiente (incidente IN-05).
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-5xl">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h3 className="font-serif font-bold text-slate-900 text-sm uppercase font-mono tracking-wider mb-4 text-[#0d7377]">
                Ficha Técnica del Proceso
              </h3>
              <dl className="space-y-3.5 text-xs sm:text-sm">
                {[
                  ["Participante", "Promotora Directora de la institución"],
                  ["Fecha", "24 de abril de 2026"],
                  ["Lugar", "Oficina de dirección — I.E.P. Peruano Francés, VES"],
                  ["Asignación", "Presencial — entrevista semi-estructurada interactiva"],
                  ["Estructura", "12 preguntas divididas en 8 dimensiones diagnósticas"],
                  ["Registro", "Video, audio y transcripción"],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                    <dt className="font-mono font-bold text-slate-550 min-w-[100px] flex-shrink-0 text-[10px] sm:text-[11px] uppercase tracking-wider self-center">
                      {k}
                    </dt>
                    <dd className="text-slate-800 font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h3 className="font-serif font-bold text-slate-900 text-sm uppercase font-mono tracking-wider mb-4 text-[#0d7377]">
                Dimensiones Indagadas
              </h3>
              <ol className="space-y-2 text-xs sm:text-sm">
                {[
                  "Datos demográficos y matrícula",
                  "Experiencias críticas con deserción estudiantil",
                  "Métodos manuales actuales de control",
                  "Costo de licenciamiento y hardware activo",
                  "Requisitos esenciales de alertas para tutores",
                  "Factibilidad de adopción organizativa",
                  "Herramientas alternativas contempladas",
                  "Expectativas de interoperabilidad con Cubicol",
                ].map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800">
                    <span className="font-mono w-5 h-5 rounded-full bg-[#e8f5f5] text-[#0d7377] text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="font-medium">{b}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 mb-8 max-w-5xl shadow-xs">
            <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg mb-4">
              Hallazgos Relevantes Diagnósticos
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  num: "1",
                  t: "Cuaderno Físico",
                  d: "Auxiliares de Inicial, Primaria y Secundaria anotan inasistencias a mano, aumentando carga operacional.",
                },
                {
                  num: "2",
                  t: "Padres y Cubicol",
                  d: "Solo alrededor del 40 % de los apoderados ingresa a Cubicol; el colegio se comunica con ellos por WhatsApp y por la agenda.",
                },
                {
                  num: "3",
                  t: "Apertura QR",
                  d: "La Dirección mostró interés en registrar la asistencia con código QR. Quedó fuera del alcance de esta versión y se gestiona como expectativa (INT-02).",
                },
                {
                  num: "4",
                  t: "Deserción Atípica",
                  d: "Se identifican retiros mayormente por traslados, mudanzas fuera del distrito de VES o presiones financieras.",
                },
                {
                  num: "5",
                  t: "Colaboración UNTELS",
                  d: "Directiva provee total soporte y autorización para el acceso controlado de información académica de prueba.",
                },
                {
                  num: "6",
                  t: "Alarma Preventiva",
                  d: "Necesidad explícita de recibir avisos de alumnos críticos de forma continua.",
                },
              ].map((h) => (
                <div key={h.t} className="bg-white border border-slate-200 rounded-xl p-4 shadow-xxs">
                  <div className="font-mono w-7 h-7 rounded-lg bg-[#e8f5f5] text-[#0a5c5f] text-[11px] font-bold flex items-center justify-center mb-2.5">
                    {h.num}
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">{h.t}</h4>
                  <p className="text-slate-650 text-[11px] sm:text-xs leading-relaxed">{h.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-850 rounded-2xl p-6 text-white mb-8 max-w-5xl">
            <h3 className="font-serif font-bold text-base sm:text-lg mb-3">
              Conclusión de la entrevista
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify">
              Se confirma un entorno con madurez tecnológica media-alta debido al uso de Cubicol por más de 7 años y al servicio de internet de alta velocidad de fibra óptica. No obstante, los flujos preventivos son inexistentes por carencia de una base consolidada y analítica inteligente. Es un escenario favorable para el sistema SIA-T, siempre que el colegio facilite los datos y los docentes lo adopten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-xs">
              <h3 className="font-serif font-bold text-slate-900 text-sm sm:text-base mb-1">
                Video Documental del Diagnóstico
              </h3>
              <p className="font-mono text-slate-550 text-[10px] mb-4">
                Entrevista registrada en campo con la Directora General
              </p>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xs border bg-slate-900 flex items-center justify-center">
                <video
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  <source src="/entrevista.mp4" type="video/mp4" />
                  Reproducción no disponible.
                </video>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
              <div>
                <h3 className="font-serif font-bold text-slate-900 text-sm sm:text-base mb-1">
                  Evidencias del levantamiento
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 mt-2">
                  Carpeta del curso anterior con la transcripción, la guía de entrevista y el material fotográfico. Los documentos de esta etapa están en el propio blog (capítulo 04).
                </p>
              </div>
              <a
                href="https://drive.google.com/drive/folders/1z33A6WEsA_c8dG4UWaxbnaLNTMgPQo2S?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0d7377] hover:bg-[#0a5c5f] text-white font-semibold px-5 py-3 rounded-xl transition-all shadow-xs text-xs sm:text-sm cursor-pointer"
              >
                Abrir Carpeta en Google Drive ↗
              </a>
            </div>
          </div>
        </div>
      </section>
      </>
      )}
    </div>
  );
}
