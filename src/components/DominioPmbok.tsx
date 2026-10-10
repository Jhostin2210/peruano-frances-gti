/**
 * Capítulo de un dominio de desempeño de la Guía del PMBOK®, octava edición.
 * Muestra cada proceso del dominio con sus entradas, herramientas y salidas, y los documentos
 * que el proyecto emitió para ese proceso. El contenido viene de src/content/documentos.ts.
 */

import { Fragment } from "react";
import type { ReactNode } from "react";
import { DOCUMENTOS, PROCESOS } from "../content/documentos";
import type { ProcesoDef } from "../content/tipos";
import DocView from "./DocView";

const ESTADO: Record<string, string> = {
  Aplicado: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Planificado: "bg-amber-100 text-amber-800 border-amber-200",
  "Curso anterior": "bg-blue-100 text-blue-800 border-blue-200",
  Pendiente: "bg-slate-100 text-slate-600 border-slate-200",
};

const NOTA_ESTADO: Record<string, string> = {
  Aplicado: "Proceso aplicado: hay documento emitido.",
  Planificado: "Proceso planificado: sus registros empiezan con los sprints.",
  "Curso anterior": "El resultado de este proceso viene de la fase de formulación (curso anterior).",
  Pendiente: "Dominio aún no desarrollado por el equipo.",
};

export function EstadoProceso({ estado }: { estado: string }) {
  return (
    <span className={`inline-block font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${ESTADO[estado] ?? ESTADO.Pendiente}`}>
      {estado}
    </span>
  );
}

function Itto({ titulo, items, color }: { titulo: string; items?: string[]; color: string }) {
  if (!items?.length) return null;
  return (
    <div className={`rounded-xl border p-4 ${color}`}>
      <p className="font-mono text-[10px] uppercase tracking-wider font-bold mb-2.5">{titulo}</p>
      <ul className="space-y-1.5 text-xs text-slate-700 leading-snug">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-current opacity-50 flex-shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ProcesoProps {
  proceso: ProcesoDef;
  numero: string;
  fondo: string;
  docsAparte?: string[];
  children?: ReactNode;
}

function Proceso({ proceso, numero, fondo, docsAparte = [], children }: ProcesoProps) {
  const docs = proceso.docs.filter((id) => !docsAparte.includes(id)).map((id) => DOCUMENTOS.find((d) => d.id === id));
  return (
    <section id={proceso.id} className={`py-14 border-b border-slate-200 ${fondo}`}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="font-mono text-[11px] font-bold text-[#0d7377]">
            {numero} · {proceso.area}
          </span>
          <EstadoProceso estado={proceso.estado} />
        </div>
        <h3 className="font-serif text-2xl font-bold text-slate-900 leading-tight">{proceso.nombre}</h3>
        {proceso.que && <p className="text-sm text-slate-600 leading-relaxed mt-2 max-w-3xl">{proceso.que}</p>}
        <p className="text-[11px] text-slate-500 italic mt-1">{NOTA_ESTADO[proceso.estado]}</p>

        <div className="grid md:grid-cols-3 gap-3 mt-6">
          <Itto titulo="Entradas" items={proceso.entradas} color="border-blue-200 bg-blue-50/60 text-blue-800" />
          <Itto titulo="Herramientas y técnicas" items={proceso.herramientas} color="border-amber-200 bg-amber-50/60 text-amber-800" />
          <Itto titulo="Salidas" items={proceso.salidas} color="border-emerald-200 bg-emerald-50/60 text-emerald-800" />
        </div>

        {children && (
          <div className="mt-8 border border-slate-200 rounded-2xl bg-white overflow-hidden [&_section]:py-8 [&_section]:bg-transparent [&_section>div]:px-5 sm:[&_section>div]:px-6 [&_h2]:text-2xl">
            <p className="font-mono text-[10px] uppercase tracking-wider font-bold text-slate-500 px-5 sm:px-6 pt-5">
              Material del levantamiento de información
            </p>
            {children}
          </div>
        )}

        {docs.length > 0 && (
          <div className="mt-8 space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-wider font-bold text-slate-500">
              {docs.length === 1 ? "Documento del proceso" : "Documentos del proceso"}
            </p>
            {docs.map(
              (d) =>
                d && (
                  <div key={d.id}>
                    <DocView doc={d} />
                  </div>
                ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}

interface DominioProps {
  dominio: string;
  // Número del capítulo en el blog, para numerar los procesos (por ejemplo "05").
  capitulo: string;
  // Material del levantamiento que sirve de entrada a un proceso: se muestra dentro de su sección, antes de los documentos.
  antes?: Record<string, ReactNode>;
  // Vistas interactivas de un proceso (requisitos, EDT, cronograma): se muestran a todo el ancho, después de su sección.
  despues?: Record<string, ReactNode>;
  // Documentos que el capítulo muestra en otro lugar y no deben repetirse bajo el proceso.
  docsAparte?: string[];
}

export default function DominioPmbok({ dominio, capitulo, antes = {}, despues = {}, docsAparte }: DominioProps) {
  const procesos = PROCESOS.filter((p) => p.dominio === dominio);
  return (
    <>
      {procesos.map((p, i) => (
        <Fragment key={p.id}>
          <Proceso
            proceso={p}
            numero={`${capitulo}.${i + 1}`}
            fondo={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
            docsAparte={docsAparte}
          >
            {antes[p.id]}
          </Proceso>
          {despues[p.id]}
        </Fragment>
      ))}
    </>
  );
}
