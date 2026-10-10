/**
 * Aviso al inicio de un capítulo: indica si su contenido viene del curso anterior
 * o si una decisión posterior lo modificó.
 */

import type { ReactNode } from "react";
import { History, RefreshCw } from "lucide-react";

interface AvisoEtapaProps {
  tipo: "anterior" | "cambio";
  children: ReactNode;
}

export default function AvisoEtapa({ tipo, children }: AvisoEtapaProps) {
  const anterior = tipo === "anterior";
  const Icono = anterior ? History : RefreshCw;
  return (
    <div className={`border-b ${anterior ? "bg-blue-50 border-blue-200" : "bg-amber-50 border-amber-200"}`}>
      <div className="px-6 sm:px-10 lg:px-12 py-4 flex gap-3 items-start max-w-5xl">
        <Icono className={`w-4 h-4 mt-0.5 flex-shrink-0 ${anterior ? "text-blue-700" : "text-amber-700"}`} />
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          <strong className={anterior ? "text-blue-800" : "text-amber-800"}>
            {anterior ? "Contenido del curso anterior." : "Actualización de esta etapa."}
          </strong>{" "}
          {children}
        </p>
      </div>
    </div>
  );
}
