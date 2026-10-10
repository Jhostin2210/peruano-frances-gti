/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Cite from "./Cite";

export default function Abstract() {
  const keywords = [
    "Machine Learning",
    "Bajo rendimiento académico",
    "PMBOK 8",
    "Gestión de proyectos TI",
    "Alertas tempranas",
    "IEP Peruano Francés",
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100 animate-fade-in">
      <div className="px-6 sm:px-10 lg:px-12">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
              Resumen / Abstract
            </span>
            <span className="font-mono text-slate-700 text-[10px] sm:text-[11px]">
              Guía de referencia: PMBOK® 8.ª edición <Cite r="PMI, 2025" />
            </span>
          </div>
          <p className="text-slate-800 leading-relaxed text-xs sm:text-sm text-justify">
            Este blog documenta la gestión de un proyecto de tecnología de información orientado a la detección temprana del bajo rendimiento académico en la I.E.P. Peruano Francés, ubicada en Villa El Salvador, Lima, Perú. El proyecto se formuló en el curso anterior y ahora se gestiona siguiendo la{" "}
            <strong className="text-slate-900">Guía del PMBOK®, octava edición</strong>
            <Cite r="PMI, 2025" />: en esta etapa se desarrollan los dominios de Gobernanza y de Interesados y se completan los de Alcance y Cronograma. El diagnóstico se apoya en una entrevista a la Dirección (24 de abril de 2026) y en una encuesta a seis docentes (15 de mayo de 2026), que mostraron un registro manual de la asistencia y de las incidencias y que solo alrededor del 40&nbsp;% de los padres de familia ingresa a la plataforma Cubicol. La solución propuesta es un sistema web inteligente basado en técnicas de{" "}
            <strong className="text-slate-900">Machine Learning</strong>
            <Cite r="Romero & Ventura, 2010" /> que procesa las notas, la asistencia y las incidencias para clasificar a cada estudiante en riesgo bajo, medio o alto y avisar a tiempo al docente tutor. El caso de negocio se estructuró con el{" "}
            <strong className="text-slate-900">Business Model Canvas</strong>
            <Cite r="Osterwalder & Pigneur, 2010" />.
          </p>
          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] sm:text-[11px] text-slate-700 font-bold">
              Palabras clave:
            </span>
            {keywords.map((k) => (
              <span
                key={k}
                className="bg-[#e8f5f5] text-[#0a5c5f] border border-[#c0e0e0] text-[10px] sm:text-xs px-2 px-2.5 py-0.5 rounded-full font-medium"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
