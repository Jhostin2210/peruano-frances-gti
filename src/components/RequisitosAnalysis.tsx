/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import {
  FileText,
  Database,
  Layers,
  CheckCircle2,
  ExternalLink,
  Search,
  Filter,
  Clock,
  Shield,
  Table,
  ChevronDown,
  ChevronUp,
  Info,
  Sliders,
  Users,
  Award,
  BookOpenCheck,
  Briefcase,
  Layers3,
  ListFilter,
  Check,
  Calendar,
  TrendingUp,
  Settings,
  Cpu,
  Gauge,
  Bell,
  Rocket,
  Server,
  BookOpen,
  Code2,
  Presentation,
  Palette,
  UserCheck,
  Monitor,
  Mail
} from "lucide-react";
import Cite from "./Cite";
import { REQUISITOS } from "../content/datos";

interface Requirement {
  id: string; // REQ-01, RNF-01
  tipo: "Funcional" | "No Funcional";
  caso: string; // CU-01
  titulo: string;
  prioridad: string;
  descripcion: string;
  justificacion: string;
  fuente: string;
  unidad: string;
  criterios: string;
  satisfaccion: number; // 1-5
  insatisfaccion: number; // 1-5
  dependencias: string;
  conflictos: string;
  soporte: string;
  categoria: "Recolección" | "Algoritmo" | "Alertas" | "Dashboard" | "Usabilidad" | "Seguridad" | "Cumplimiento" | "Rendimiento" | "Infraestructura";
}


// Agrupación de los requisitos para los filtros del explorador.
const CATEGORIA: Record<string, Requirement["categoria"]> = {
  "REQ-01": "Recolección",
  "REQ-02": "Recolección",
  "REQ-03": "Algoritmo",
  "REQ-04": "Algoritmo",
  "REQ-05": "Alertas",
  "REQ-06": "Alertas",
  "REQ-07": "Alertas",
  "REQ-08": "Dashboard",
  "REQ-09": "Dashboard",
  "REQ-10": "Dashboard",
  "REQ-11": "Seguridad",
  "REQ-12": "Alertas",
  "RNF-01": "Usabilidad",
  "RNF-02": "Rendimiento",
  "RNF-03": "Seguridad",
  "RNF-04": "Cumplimiento",
  "RNF-05": "Infraestructura",
  "RNF-06": "Usabilidad",
  "RNF-07": "Rendimiento",
  "RNF-08": "Infraestructura",
};

// Resumen y explorador de requisitos. La EDT y su diccionario están en EdtProyecto.
interface RequisitosAnalysisProps {
  parte: "requisitos";
}

export default function RequisitosAnalysis({ parte }: RequisitosAnalysisProps) {
  // Requirement states
  const [activeTab, setActiveTab] = useState<"todos" | "funcional" | "no-funcional">("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("Todas");
  const [expandedId, setExpandedId] = useState<string | null>("REQ-01");


  const googleDocUri = "https://docs.google.com/document/d/1zlgbDf6TJQEyCT0cXs2hXvkgiy9CvxvK/edit?usp=sharing&ouid=107121906244921513138&rtpof=true&sd=true";
  const googleSheetUri = "https://docs.google.com/spreadsheets/d/1O8zNQFLdGbagfmUx7dz59Y51JzoM5kqF/edit?usp=sharing&ouid=107121906244921513138&rtpof=true&sd=true";

  // Los 20 requisitos de la línea base del alcance, versión 3. Fuente única: documentacion/datos (requisitos y planillas).
  const requisitosData: Requirement[] = REQUISITOS.map((r) => ({
    id: r.id,
    tipo: r.tipo === "Funcional" ? "Funcional" : "No Funcional",
    caso: r.caso,
    titulo: r.titulo,
    prioridad: r.prioridad,
    descripcion: r.descripcion,
    justificacion: r.justificacion,
    fuente: r.fuente,
    unidad: r.unidad,
    criterios: r.v3 ? `${r.criterio} Cambio en la versión 3: ${r.v3}` : r.criterio,
    satisfaccion: r.satisfaccion,
    insatisfaccion: r.insatisfaccion,
    dependencias: r.dependencias,
    conflictos: r.conflictos,
    soporte: r.soporte,
    categoria: CATEGORIA[r.id],
  }));


  // Memoized lists
  const categories = useMemo(() => {
    const cats = new Set(requisitosData.map((req) => req.categoria));
    return ["Todas", ...Array.from(cats)];
  }, []);

  const filteredRequisitos = useMemo(() => {
    return requisitosData.filter((req) => {
      if (activeTab === "funcional" && req.tipo !== "Funcional") return false;
      if (activeTab === "no-funcional" && req.tipo !== "No Funcional") return false;
      if (selectedCategoria !== "Todas" && req.categoria !== selectedCategoria) return false;

      if (searchTerm.trim() !== "") {
        const query = searchTerm.toLowerCase();
        return (
          req.id.toLowerCase().includes(query) ||
          req.titulo.toLowerCase().includes(query) ||
          req.descripcion.toLowerCase().includes(query) ||
          req.justificacion.toLowerCase().includes(query) ||
          req.fuente.toLowerCase().includes(query) ||
          req.criterios.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [activeTab, searchTerm, selectedCategoria]);

  return (
    <div className="animate-fade-in text-slate-805">
      {parte === "requisitos" && (
      <>
      {/* ── REQUISITOS (ESPECIFICACIONES DEL SISTEMA) ── */}
      <section id="p05-requisitos" className="py-14 bg-white border-b border-slate-200">
        <div className="px-6 sm:px-10 lg:px-12">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
            07.2 · Recopilar y analizar los requisitos · Curso anterior, actualizado a la versión 3
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Línea Base del Alcance: 20 Especificaciones de Sistema
          </h2>
          <p className="text-slate-650 text-sm leading-relaxed max-w-4xl text-justify mb-8 font-medium">
            La línea base del alcance está formada por el enunciado del alcance, la estructura de desglose del trabajo (EDT) y su diccionario <Cite r="PMI, 2025" />. El levantamiento en la <strong>I.E.P. Peruano Francés</strong> determinó <strong>12 requisitos funcionales</strong> y <strong>8 no funcionales</strong>, cada uno con cuatro casos de prueba. La lista que se muestra aquí es la misma del enunciado del alcance (ALC-02), versión 4: incluye el alojamiento en la nube y deja fuera el registro de asistencia con código QR y el envío por WhatsApp.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mb-12">
            <div className="border border-blue-150 bg-blue-50/20 p-5 rounded-2xl shadow-xxs">
              <div className="w-10 h-10 rounded-xl bg-blue-105 text-blue-700 flex items-center justify-center mb-4 shadow-xxs">
                <FileText className="w-5 h-5 animate-pulse" />
              </div>
              <h3 className="font-serif font-bold text-slate-910 text-sm mb-2">
                Documentación de requisitos
              </h3>
              <p className="text-xs text-slate-650 leading-relaxed text-justify">
                Cada requisito tiene una planilla con su justificación, el interesado que lo propone y su criterio de validación.
              </p>
            </div>

            <div className="border border-amber-200 bg-amber-50/10 p-5 rounded-2xl shadow-xxs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 shadow-xxs">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-slate-910 text-sm mb-2">
                Matriz de trazabilidad
              </h3>
              <p className="text-xs text-slate-650 leading-relaxed text-justify">
                Enlaza cada requisito con su objetivo, su entregable de la EDT y sus casos de prueba: 80 en total (CP-01 a CP-80).
              </p>
            </div>

            <div className="border border-emerald-250 bg-emerald-50/20 p-5 rounded-2xl shadow-xxs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 shadow-xxs">
                <BookOpenCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-slate-910 text-sm mb-2">
                Documentos de origen
              </h3>
              <p className="text-xs text-slate-650 leading-relaxed text-justify font-medium">
                La documentación de requisitos V3 y la matriz de trazabilidad son del curso anterior y siguen vigentes; sus cambios están en ALC-02.
              </p>
            </div>
          </div>

          {/* DOCUMENT LINKS (DRIVE & SHEETS) */}
          <div className="mb-12 max-w-5xl">
            <h3 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-black mb-4">
              Documentación Oficial y Matriz en Google Workspace
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* GOOGLE DOC CARD */}
              <a
                href={googleDocUri}
                target="_blank"
                rel="noreferrer"
                className="group border border-emerald-200 bg-white rounded-2xl p-5 hover:border-emerald-500 hover:shadow-md transition-all duration-300 flex items-start gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-750 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-xxs">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="font-mono text-[9px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded border border-emerald-200">
                      GOOGLE DOCS
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-650 transition-colors" />
                  </div>
                  <h4 className="font-serif font-bold text-slate-900 text-sm mb-1 group-hover:text-emerald-700 transition-colors">
                    Planilla Completa de Requisitos
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed text-justify">
                    Especificación de requisitos de software unificados bajo estándar IEEE 830, visada con firmas de equipo.
                  </p>
                </div>
              </a>

              {/* GOOGLE SHEET CARD */}
              <a
                href={googleSheetUri}
                target="_blank"
                rel="noreferrer"
                className="group border border-[#0d7377]/20 bg-white rounded-2xl p-5 hover:border-[#0d7377] hover:shadow-md transition-all duration-300 flex items-start gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e8f5f5] text-[#0d7377] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200 shadow-xxs">
                  <Table className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="font-mono text-[9px] bg-[#e8f5f5] text-[#0d7377] font-bold px-2 py-0.5 rounded border border-[#c0e0e0]">
                      GOOGLE SHEETS
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0d7377] transition-colors" />
                  </div>
                  <h4 className="font-serif font-bold text-slate-900 text-sm mb-1 group-hover:text-[#0d7377] transition-colors">
                    Matriz de Trazabilidad RTM
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed text-justify">
                    Trazabilidad relacional bidireccional cruzando cada ID tecnológico con objetivos, entregable y fuente interesada.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPANDABLE INTERACTIVE DIRECTORY OF REQUIREMENTS ── */}
      <section id="p05-planillas" className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="px-6 sm:px-10 lg:px-12">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
            07.2 · Recopilar y analizar los requisitos · Planillas
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">
            Explorador de requisitos funcionales y no funcionales
          </h2>
          <p className="text-slate-650 text-sm leading-relaxed max-w-4xl text-justify mb-8 font-medium">
            Explore interactivamente el catálogo detallado de requisitos unificados del SIA-T. Filtre por tipo de requerimiento, busque por coincidencia de términos claves o examine el plan de criterios de validación escolar.
          </p>

          {/* INTERACTIVE CONTROLS CONTAINER */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-8 max-w-5xl shadow-xxs">
            <div className="flex flex-col gap-4">
              {/* TAB ROW */}
              <div className="flex flex-wrap gap-2 border-b border-slate-150 pb-4">
                <button
                  onClick={() => {
                    setActiveTab("todos");
                    setSelectedCategoria("Todas");
                  }}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-xl transition-all cursor-pointer ${
                    activeTab === "todos"
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-slate-50 border border-slate-150 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Todos los Requisitos ({requisitosData.length})
                </button>
                <button
                  onClick={() => {
                    setActiveTab("funcional");
                    setSelectedCategoria("Todas");
                  }}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-xl transition-all cursor-pointer ${
                    activeTab === "funcional"
                      ? "bg-blue-700 text-white shadow-xs"
                      : "bg-slate-50 border border-slate-150 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Funcionales (12)
                </button>
                <button
                  onClick={() => {
                    setActiveTab("no-funcional");
                    setSelectedCategoria("Todas");
                  }}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-xl transition-all cursor-pointer ${
                    activeTab === "no-funcional"
                      ? "bg-[#0d7377] text-white shadow-xs"
                      : "bg-slate-50 border border-slate-150 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  No Funcionales (8)
                </button>
              </div>

              {/* SEARCH & SELECT FILTERS */}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                {/* Search field */}
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar por ID, título, justificación..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0d7377]/40 focus:border-[#0d7377] transition-all"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-650 text-xs font-black"
                    >
                      Limpiar
                    </button>
                  )}
                </div>

                {/* Categories selector */}
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-slate-550 flex-shrink-0" />
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase">Categoría:</span>
                  <select
                    value={selectedCategoria}
                    onChange={(e) => setSelectedCategoria(e.target.value)}
                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0d7377]/40 focus:border-[#0d7377] transition-all cursor-pointer"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* LIST RESULTS */}
          <div className="space-y-4 max-w-5xl">
            {filteredRequisitos.length === 0 ? (
              <div className="border border-slate-200 rounded-2xl p-10 text-center bg-white max-w-md mx-auto">
                <Info className="w-10 h-10 text-slate-350 mx-auto mb-3" />
                <p className="font-serif font-bold text-slate-700 text-sm mb-1">
                  Ningún requisito coincide
                </p>
                <p className="text-xs text-slate-500">
                  Pruebe adaptando el término de búsqueda o cambiando el filtro de categoría.
                </p>
              </div>
            ) : (
              filteredRequisitos.map((req) => {
                const isOpen = expandedId === req.id;
                return (
                  <div
                    key={req.id}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
                      isOpen
                        ? "border-slate-800 shadow-xs ring-1 ring-slate-800/10"
                        : "border-slate-200 hover:border-slate-400 hover:shadow-xs shadow-xxs"
                    }`}
                  >
                    {/* REQUIREMENT ACCORDION HEADER */}
                    <div
                      onClick={() => setExpandedId(isOpen ? null : req.id)}
                      className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`font-mono text-[9px] sm:text-[10px] uppercase font-black px-2.5 py-1 rounded-md flex-shrink-0 border ${
                            req.tipo === "Funcional"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : "bg-[#e8f5f5] text-[#0d7377] border-[#c0e0e0]"
                          }`}
                        >
                          {req.id}
                        </span>
                        <div className="min-w-0">
                          <p className="font-serif font-bold text-xs sm:text-sm text-slate-900 truncate">
                            {req.titulo}
                          </p>
                          <p className="text-[9px] text-slate-500 font-mono uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
                            <span>Módulo: {req.caso}</span>
                            <span className="text-slate-300">•</span>
                            <span>Categoría: {req.categoria}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[9px] bg-slate-100 text-slate-650 px-2 py-0.5 rounded hidden sm:inline border border-slate-200">
                          Prioridad: {req.prioridad}
                        </span>
                        <div className="p-1 rounded-lg hover:bg-slate-100 text-slate-400">
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-slate-700" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-500" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* EXPANDED CONTENT DETAIL */}
                    {isOpen && (
                      <div className="px-5 pb-5 border-t border-slate-100 bg-slate-50/15 text-xs sm:text-xs">
                        <div className="grid md:grid-cols-2 gap-6 pt-5">
                          <div>
                            <h4 className="font-mono text-[9px] text-slate-500 uppercase tracking-wider font-extrabold mb-1.5 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                              Descripción de Especificación
                            </h4>
                            <p className="text-slate-750 text-justify leading-relaxed font-medium">
                              {req.descripcion}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-mono text-[9px] text-slate-500 uppercase tracking-wider font-extrabold mb-1.5 flex items-center gap-1">
                              <Info className="w-3.5 h-3.5 text-slate-400" />
                              Justificación e Impacto (Cierre Clínico UX)
                            </h4>
                            <p className="text-slate-750 text-justify leading-relaxed italic">
                              "{req.justificacion}"
                            </p>
                          </div>
                        </div>

                        {/* Validation Criteria */}
                        <div className="mt-5 bg-white border border-slate-200 rounded-xl p-4 shadow-xxs">
                          <h4 className="font-mono text-[9px] text-slate-800 uppercase tracking-wider font-black mb-1.5 flex items-center gap-1">
                            <Sliders className="w-3.5 h-3.5 text-slate-600" />
                            Criterio de Aceptación & Validación
                          </h4>
                          <p className="text-slate-750 text-justify leading-relaxed font-semibold">
                            {req.criterios}
                          </p>
                        </div>

                        {/* Metadata grid attributes */}
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5 pt-4 border-t border-slate-100 text-[10px]">
                          <div>
                            <p className="text-slate-450 font-mono text-[8px] uppercase tracking-wider">
                              Fuente interesada
                            </p>
                            <p className="font-bold text-slate-800 mt-0.5">{req.fuente}</p>
                          </div>

                          <div>
                            <p className="text-slate-450 font-mono text-[8px] uppercase tracking-wider">
                              Unidad Propietaria
                            </p>
                            <p className="font-bold text-slate-850 mt-0.5">{req.unidad}</p>
                          </div>

                          <div>
                            <p className="text-slate-450 font-mono text-[8px] uppercase tracking-wider">
                              Validez de Interés
                            </p>
                            <p className="mt-1 flex gap-2 font-mono text-[8px] font-black">
                              <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-1.5 py-0.5 rounded">
                                Sat: {req.satisfaccion}/5
                              </span>
                              <span className="bg-rose-50 text-rose-800 border border-rose-200 px-1.5 py-0.5 rounded">
                                Ins: {req.insatisfaccion}/5
                              </span>
                            </p>
                          </div>

                          <div>
                            <p className="text-slate-450 font-mono text-[8px] uppercase tracking-wider">
                              Trazabilidad / Documento
                            </p>
                            <p className="font-bold text-slate-700 mt-0.5 truncate" title={req.soporte}>
                              {req.soporte}
                            </p>
                          </div>
                        </div>

                        {/* Dependencies & Conflicts */}
                        <div className="flex flex-wrap gap-4 mt-4 pt-3 border-t border-slate-100 text-[9px] font-mono font-bold text-slate-500">
                          <p>
                            DEPENDENCIAS REQUERIDAS:{" "}
                            <span className="text-indigo-600 font-extrabold">{req.dependencias}</span>
                          </p>
                          <p>
                            CONFLICTOS DETECTADOS:{" "}
                            <span className="text-slate-800 font-black">{req.conflictos}</span>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      </>
      )}


    </div>
  );
}
