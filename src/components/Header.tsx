/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

// Alterna el modo oscuro: clase «dark» en <html> y preferencia guardada en el navegador.
function BotonTema() {
  const [oscuro, setOscuro] = useState(() => document.documentElement.classList.contains("dark"));
  const alternar = () => {
    const nuevo = !oscuro;
    document.documentElement.classList.toggle("dark", nuevo);
    try {
      localStorage.setItem("tema", nuevo ? "oscuro" : "claro");
    } catch {
      /* sin almacenamiento: el cambio dura hasta recargar */
    }
    setOscuro(nuevo);
  };
  return (
    <button
      onClick={alternar}
      aria-label={oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={oscuro ? "Modo claro" : "Modo oscuro"}
      className="flex h-9 w-9 flex-shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100"
    >
      {oscuro ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

interface HeaderProps {
  onOpenSidebar: () => void;
}

export default function Header({ onOpenSidebar }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 h-14 flex items-center">
      <div className="w-full flex items-center gap-3 px-4 lg:px-6">
        <button
          className="lg:hidden p-2 rounded-md hover:bg-slate-100 text-slate-800 text-lg leading-none cursor-pointer"
          onClick={onOpenSidebar}
          aria-label="Abrir índice"
        >
          ☰
        </button>
        <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200 flex-shrink-0 bg-white shadow-sm flex items-center justify-center">
          <img
            src="/logo.jpeg"
            alt="Logo IE Peruano Francés"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 min-w-0 animate-fade-in">
          <p className="font-serif text-sm font-bold text-slate-900 truncate">
            Sistema ML — Alerta Temprana del Bajo Rendimiento Académico
          </p>
          <p className="font-mono text-[10px] text-slate-800 hidden sm:block">
            UNTELS · Gestión de Proyecto de TI · Guía del PMBOK® 8.ª edición · 2026
          </p>
        </div>
        <span className="hidden md:flex items-center gap-1.5 font-mono text-[10px] text-slate-800 border border-slate-200 rounded-full px-3 py-1 flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0d7377] animate-pulse" />
          Proyecto Académico
        </span>
        <BotonTema />
      </div>
    </header>
  );
}
