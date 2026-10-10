/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import {
  Calendar,
  Clock,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Search,
  Filter,
  Maximize2,
  X,
  FileText,
  HelpCircle,
  Activity,
  Layers,
  ArrowRightCircle,
  TrendingDown,
  RefreshCw,
  Check,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import Cite from "./Cite";
import { ACTIVIDADES, TAREAS_PROJECT, TOTALES } from "../content/datos";

interface ActivityItem {
  id: string;
  paquete: string;
  descripcion: string;
  responsable: string;
  semana: string;
  prioridad: "Alta" | "Media" | "Baja";
  sprint: number;
  to: number;
  tm: number;
  tp: number;
  te: number;
  sigma: number;
  sigmaSq: number;
  isCritical: boolean;
  isNew: boolean;
}

const ACTIVIDADES_DATA = ACTIVIDADES as ActivityItem[];

interface MSProjectTask {
  id: number;
  nombre: string;
  duracion: string;
  comienzo: string;
  fin: string;
  predecesoras: string;
  recursos: string;
  sprint: number;
  isSummary?: boolean;
}

const MSPROJECT_TASKS: MSProjectTask[] = TAREAS_PROJECT;

export default function ScheduleBaseline() {
  const [actSearch, setActSearch] = useState("");
  const [selectedSprint, setSelectedSprint] = useState<string>("Todos");
  const [selectedResp, setSelectedResp] = useState<string>("Todos");
  const [activePertEq, setActivePertEq] = useState<string | null>("A-0.1.1.1");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // MS Project state variables
  const [mspSearch, setMspSearch] = useState("");
  const [mspSprint, setMspSprint] = useState<string>("Todos");
  const [mspShowOnlySummary, setMspShowOnlySummary] = useState<boolean>(false);

  const openLightbox = (index: number) => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const images = [
    {
      src: "/DIAGRAMA DE GANT.png",
      alt: "Diagrama de Red del Cronograma - Método PDM (Colegio PF 2026)",
      caption: "Representación interactiva de las precedencias lógicas (Método de Diagramación por Precedencia - PDM) y la ruta crítica definida para las 44 actividades del proyecto en las 24 semanas."
    },
    {
      src: "/project.jpeg",
      alt: "Diagrama de Gantt del Cronograma - Planificación de 6 Meses",
      caption: "Línea temporal oficial estructurada en 6 Sprints de 4 semanas cada uno, mapeando las ventanas de desarrollo de modelos ML, módulos de alertas, periodo piloto docente formal y hitos de Sprint Review."
    }
  ];

  // Unique lists for filtering
  const responsabilidades = useMemo(() => {
    const list = new Set(ACTIVIDADES_DATA.map((a) => a.responsable));
    return ["Todos", ...Array.from(list)];
  }, []);

  // Filtered activities
  const filteredActivities = useMemo(() => {
    return ACTIVIDADES_DATA.filter((act) => {
      const matchSearch =
        act.descripcion.toLowerCase().includes(actSearch.toLowerCase()) ||
        act.id.toLowerCase().includes(actSearch.toLowerCase()) ||
        act.paquete.toLowerCase().includes(actSearch.toLowerCase());
      const matchSprint = selectedSprint === "Todos" ? true : act.sprint === parseInt(selectedSprint);
      const matchResp = selectedResp === "Todos" ? true : act.responsable === selectedResp;
      return matchSearch && matchSprint && matchResp;
    });
  }, [actSearch, selectedSprint, selectedResp]);

  // Filtered MS Project Tasks
  const filteredMspTasks = useMemo(() => {
    return MSPROJECT_TASKS.filter((task) => {
      const matchSearch =
        task.nombre.toLowerCase().includes(mspSearch.toLowerCase()) ||
        task.recursos.toLowerCase().includes(mspSearch.toLowerCase()) ||
        task.id.toString() === mspSearch.trim();
      const matchSprint = mspSprint === "Todos" ? true : task.sprint === parseInt(mspSprint);
      const matchSummaryOnly = mspShowOnlySummary ? task.isSummary === true : true;
      return matchSearch && matchSprint && matchSummaryOnly;
    });
  }, [mspSearch, mspSprint, mspShowOnlySummary]);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 1));
  };

  const handleZoomReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return;
    e.preventDefault();
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setDragStart({ x: touch.clientX - pan.x, y: touch.clientY - pan.y });
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || zoom <= 1) return;
    const touch = e.touches[0];
    setPan({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y,
    });
  };

  return (
    <div className="animate-fade-in text-slate-800">
      {/* ── SECCIÓN DE INTRODUCCIÓN ── */}
      <section id="p06-cronograma" className="py-12 bg-white border-b border-slate-200">
        <div className="px-6 sm:px-10 lg:px-12">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
            08.2 · Desarrollar el cronograma · Vista interactiva de la línea base, versión 3
          </span>
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
              Línea Base del Cronograma del Proyecto
            </h2>
            <span className="inline-flex items-center gap-1.5 self-start md:self-auto bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-xs font-mono font-bold shadow-xxs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Planificación en Microsoft Project
            </span>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed max-w-4xl text-justify mb-10">
            La gestión del cronograma es uno de los dominios de desempeño más críticos según el estándar del PMBOK <Cite r="PMI, 2025" />. Consiste en establecer las políticas, procedimientos y herramientas necesarios para planificar, desarrollar, monitorear y controlar el tiempo requerido. La versión 3 de la línea base organiza las <strong>44 actividades</strong> del proyecto y una reunión diaria en <strong>24 semanas de trabajo</strong> y <strong>6 sprints</strong>, del 12 de octubre de 2026 al 23 de abril de 2027, con un receso en febrero por vacaciones escolares, garantizando una validación oportuna del modelo, robustez en el piloto y sostenibilidad de la implantación en la institución educativa.
          </p>

          <div className="space-y-16 max-w-5xl">
            
            {/* ── PASO 1: PLAN DE GESTIÓN DEL CRONOGRAMA ── */}
            <div className="space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="bg-slate-900 text-white font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">1</span>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Plan de Gestión del Cronograma
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                Planificar la gestión del cronograma establece los procedimientos y la documentación necesarios para liderar y controlar el tiempo de ejecución. El beneficio fundamental es guiar la gestión del cronograma durante todo el ciclo de vida del proyecto, administrando de forma adaptativa y con control de desvíos las contingencias y solicitudes de cambio registradas.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <h4 className="font-serif text-base font-bold text-slate-900 border-b pb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-indigo-600" />
                    Marco Operativo y Parámetros Generales
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4 text-xs">
                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                      <span className="font-mono text-[9px] uppercase font-black text-indigo-700 block mb-1">Precisión de Estimaciones</span>
                      <p className="text-slate-700 leading-normal">
                        <strong>Unidad de Medida:</strong> Días hábiles de lunes a viernes (jornada laboral estándar de 8 horas). <br />
                        <strong>Técnica:</strong> Estimaciones por tres valores (Método PERT) para mitigar sesgos y robustecer las duraciones.
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                      <span className="font-mono text-[9px] uppercase font-black text-indigo-700 block mb-1">Reserva para Contingencias</span>
                      <p className="text-slate-700 leading-normal">
                        <strong>Contingencia por Sprint:</strong> 10% (2 días hábiles por sprint de 4 semanas). <br />
                        <strong>Reserva de Gestión:</strong> 1 semana adicional al final del Sprint 6 como colchón estratégico de cierre.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-sm border border-slate-800 flex flex-col justify-between h-full">
                    <div>
                      <span className="font-mono text-[9px] text-teal-400 uppercase font-black tracking-wider block mb-1">Ficha del Cronograma</span>
                      <h4 className="font-serif text-sm font-black text-white mb-3">Información General</h4>
                      <div className="space-y-2 font-mono text-[10px] text-slate-300">
                        <div className="flex justify-between border-b border-slate-800 pb-1.5">
                          <span className="text-slate-400">Proyecto:</span>
                          <span className="font-extrabold text-white text-right">Sistema ML — Alerta Temprana</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800 pb-1.5">
                          <span className="text-slate-400">Institución:</span>
                          <span className="font-extrabold text-white text-right">Colegio Peruano Francés</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800 pb-1.5">
                          <span className="text-slate-400">Metodología:</span>
                          <span className="font-extrabold text-white text-right">Agile SCRUM (6 Sprints)</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800 pb-1.5">
                          <span className="text-slate-400">Duración total:</span>
                          <span className="font-extrabold text-white">24 sem (12/10/2026 – 23/04/2027)</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800 pb-1.5">
                          <span className="text-slate-400">Total Actividades:</span>
                          <span className="font-extrabold text-white">44 y reunión diaria</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800 pb-1.5">
                          <span className="text-slate-400">Suma de duraciones (Te):</span>
                          <span className="font-extrabold text-teal-300">{TOTALES.te.toFixed(1)} días</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800 pb-1.5">
                          <span className="text-slate-400">Desviación (σ):</span>
                          <span className="font-extrabold text-white">±{TOTALES.sigma.toFixed(2)} días</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800 pb-1.5">
                          <span className="text-slate-400">Scrum Master:</span>
                          <span className="font-extrabold text-white text-right">Jhostin Galarza</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800 pb-1.5">
                          <span className="text-slate-400">Product Owner:</span>
                          <span className="font-extrabold text-white text-right">Por designar (coordinación académica)</span>
                        </div>
                        <div className="flex justify-between pb-1">
                          <span className="text-slate-400">Versión:</span>
                          <span className="font-extrabold text-teal-300">3.0 — 10/10/2026</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-800 border border-slate-700 text-teal-200 p-2 rounded-lg text-[9px] mt-3 flex items-center gap-2 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                      <span>Línea Base ampliada v2.0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* REGLAS Y TOLERANCIAS */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <div className="bg-slate-50 border-b px-5 py-3.5 flex items-center justify-between">
                  <h4 className="font-serif text-xs sm:text-sm font-bold text-slate-900">
                    Reglas de Monitoreo y Tolerancias
                  </h4>
                  <span className="font-mono text-[9px] uppercase font-black bg-indigo-50 text-indigo-700 border px-2 py-0.5 rounded-full">
                    Estándar PMBOK
                  </span>
                </div>
                <div className="p-5 grid sm:grid-cols-3 gap-6 text-xs text-justify">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-950">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                      Tolerancia de Desvíos
                    </div>
                    <p className="text-slate-650 leading-relaxed text-[11px]">
                      <strong>Por Actividad:</strong> ±2 días hábiles permitidos sin requerir acción correctiva. <br />
                      <strong>Por Sprint:</strong> ±3 días hábiles. Superado este límite, se activa el plan de respuesta inmediata. <br />
                      <strong>Por Proyecto:</strong> Desviación máxima permitida de ±1.5 semanas sobre las 24 planificadas.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-950">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                      Porcentaje de Avance (Reglas)
                    </div>
                    <p className="text-slate-650 leading-relaxed text-[11px]">
                      <strong>Regla 0/100:</strong> Aplicada a tareas cortas de 1 a 2 días hábiles (solo se acredita 100% al completarse). <br />
                      <strong>Regla 50/50:</strong> Aplicada a tareas de más de 3 días (50% al iniciar y el 50% restante al aprobar el entregable formal).
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-950">
                      <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                      Reporte de Avances (EVA)
                    </div>
                    <p className="text-slate-650 leading-relaxed text-[11px]">
                      <strong>Método de Control:</strong> Análisis del Valor Ganado (EVA) al cierre de cada Sprint Review. <br />
                      <strong>Métricas Clave:</strong> PV (Planificado), EV (Ganado), SV (Variación) y el Índice de Desempeño del Cronograma (SPI).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── PASO 2: DEFINIR LAS ACTIVIDADES (44) ── */}
            <div id="p06-lista-actividades" className="space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="bg-slate-900 text-white font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">2</span>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Lista de Actividades del Proyecto (44 actividades)
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                De acuerdo al Diccionario de la EDT ampliado, se han desagregado las actividades necesarias para construir el sistema inteligente en 6 Sprints. Se incluyen las actividades de la fase preliminar (Sprint 1) y de la prueba piloto real con docentes y recolección de retroalimentación (Sprint 5) con un total de 44 actividades y una reunión diaria continua.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-between border-b pb-4 border-slate-200">
                  <span className="text-xs font-mono font-bold text-slate-500">
                    Filtros de Búsqueda Dinámicos
                  </span>
                  <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    {/* Search bar */}
                    <div className="relative flex-1 sm:flex-initial">
                      <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Buscar actividad..."
                        value={actSearch}
                        onChange={(e) => setActSearch(e.target.value)}
                        className="pl-8 pr-3 py-1.5 w-full sm:w-56 text-xs border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-slate-900 border-slate-200"
                      />
                    </div>
                    {/* Sprint filter */}
                    <select
                      value={selectedSprint}
                      onChange={(e) => setSelectedSprint(e.target.value)}
                      className="border text-xs rounded-lg px-2 py-1.5 bg-white focus:outline-none border-slate-200 font-medium"
                    >
                      <option value="Todos">Todos los Sprints</option>
                      <option value="1">Sprint 1 (Análisis)</option>
                      <option value="2">Sprint 2 (Datos)</option>
                      <option value="3">Sprint 3 (Modelo ML)</option>
                      <option value="4">Sprint 4 (Alertas & Web)</option>
                      <option value="5">Sprint 5 (Pruebas & Piloto)</option>
                      <option value="6">Sprint 6 (Implantación & Cierre)</option>
                    </select>

                    {/* Responsable filter */}
                    <select
                      value={selectedResp}
                      onChange={(e) => setSelectedResp(e.target.value)}
                      className="border text-xs rounded-lg px-2 py-1.5 bg-white focus:outline-none border-slate-200 font-medium"
                    >
                      {responsabilidades.map((resp) => (
                        <option key={resp} value={resp}>
                          {resp === "Todos" ? "Todos los Responsables" : resp}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* GRID / TABLE FOR ACTIVITIES */}
                <div className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left divide-y divide-slate-150 text-xs text-slate-600">
                      <thead className="bg-slate-50 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                        <tr>
                          <th className="px-4 py-3 text-center w-[10%]">ID</th>
                          <th className="px-3 py-3 w-[50%]">Descripción de la Actividad</th>
                          <th className="px-3 py-3 w-[18%]">Responsable</th>
                          <th className="px-2 py-3 text-center w-[8%]">Semana</th>
                          <th className="px-2 py-3 text-center w-[8%]">Prioridad</th>
                          <th className="px-3 py-3 text-center w-[12%]">Te PERT</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150">
                        {filteredActivities.length > 0 ? (
                          filteredActivities.map((act) => (
                            <tr key={act.id} className="hover:bg-slate-50/50 transition-colors">
                              <td className="px-4 py-2.5 text-center font-mono font-bold text-slate-900 border-r border-slate-100">
                                {act.id}
                              </td>
                              <td className="px-3 py-2.5">
                                <div className="space-y-1">
                                  <p className="font-medium text-slate-800 leading-tight">
                                    {act.descripcion}
                                  </p>
                                  <div className="flex flex-wrap gap-1.5 items-center">
                                    {act.isNew && (
                                      <span className="font-mono text-[8px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-1 rounded-sm uppercase tracking-wider">
                                        NUEVO
                                      </span>
                                    )}
                                    {act.isCritical && (
                                      <span className="font-mono text-[8px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-1 rounded-sm uppercase tracking-wider">
                                        Ruta Crítica ★
                                      </span>
                                    )}
                                    <span className="font-mono text-[8px] text-slate-400">
                                      EDT {act.paquete} · Sprint {act.sprint}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="px-3 py-2.5 font-medium text-slate-700">
                                {act.responsable}
                              </td>
                              <td className="px-2 py-2.5 text-center font-mono font-bold text-slate-600">
                                {act.semana}
                              </td>
                              <td className="px-2 py-2.5 text-center">
                                <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-extrabold border ${
                                  act.prioridad === "Alta"
                                    ? "bg-red-50 text-red-700 border-red-150"
                                    : "bg-amber-50 text-amber-700 border-amber-150"
                                }`}>
                                  {act.prioridad}
                                </span>
                              </td>
                              <td className="px-3 py-2.5 text-center">
                                <span className="font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-150 px-1.5 py-0.5 rounded">
                                  {act.te.toFixed(1)} d
                                </span>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={6} className="px-4 py-8 text-center text-slate-400 text-xs">
                              Ninguna actividad coincide con los filtros de búsqueda.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* ── PASO 3: SECUENCIAR LAS ACTIVIDADES: DIAGRAMA DE RED ── */}
            <div id="p06-diagrama-red" className="space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="bg-slate-900 text-white font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">3</span>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Diagrama de Red por Precedencia (Método PDM)
                  </h3>
                </div>
                <button
                  onClick={() => openLightbox(0)}
                  className="flex items-center gap-1.5 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-150 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  Expandir Diagrama
                </button>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                El Diagrama de Red representa el flujo lógico de ejecución con método PDM. Define dependencias obligatorias (técnicas) y discretas, mapeando la secuencia crítica desde el Hito de Inicio en S1 hasta el Hito de Cierre en S24.
              </p>

              {/* Network Diagram Graphic Container */}
              <div className="border border-slate-200 bg-slate-50 rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
                {/* Real Image Render */}
                <img
                  src="/DIAGRAMA DE GANT.png"
                  alt="Diagrama de Red del Cronograma"
                  referrerPolicy="no-referrer"
                  className="max-h-[350px] max-w-full object-contain rounded-lg shadow-sm border bg-white hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                  onClick={() => openLightbox(0)}
                  onError={(e) => {
                    // fallback representation if the image file isn't uploaded yet or has issues
                    e.currentTarget.style.display = 'none';
                    const el = document.getElementById('diagram-red-fallback');
                    if (el) el.classList.remove('hidden');
                  }}
                />

                {/* Fallback Beautiful Vector Representation */}
                <div id="diagram-red-fallback" className="hidden text-center max-w-md py-6">
                  <Activity className="w-12 h-12 text-slate-300 mx-auto mb-3 animate-pulse" />
                  <h5 className="font-serif font-bold text-slate-800 text-sm mb-1.5">Diagrama de Red del Cronograma (PDM)</h5>
                  <p className="text-slate-400 text-xs leading-normal mb-4">
                    Aquí se visualiza la red interactiva de precedencias lógicas (Ruta Crítica destacada). Para una visualización óptima, suba el archivo <code className="font-mono text-[10px] bg-slate-200 px-1 py-0.5 rounded text-slate-700">DIAGRAMA DE GANT.png</code> al directorio raíz.
                  </p>
                  <div className="flex justify-center gap-3 font-mono text-[9px] text-slate-500">
                    <span className="bg-white border px-2 py-1 rounded">Inicio ── S1 ── S2 ── S3 ── S4 ── S5 ── S6 ── Fin</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── PASO 4: ESTIMAR EL ESFUERZO: MÉTODO PERT ── */}
            <div id="p06-estimacion-pert" className="space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="bg-slate-900 text-white font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">4</span>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Estimación de Esfuerzo mediante Método PERT
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                Para contrarrestar incertidumbres, aplicamos estimación estadística basada en tres escenarios: Optimista (To), Más Probable (Tm) y Pesimista (Tp). El cálculo del Tiempo Esperado (Te) y la Varianza (σ²) se fundamenta en las ecuaciones estándar:
              </p>

              <div className="grid sm:grid-cols-3 gap-4 font-mono text-[10px] bg-slate-50 border border-slate-150 p-4 rounded-xl text-center">
                <div>
                  <span className="text-slate-400 uppercase font-black tracking-wider block mb-1">Tiempo Esperado</span>
                  <strong className="text-indigo-950 text-xs">Te = (To + 4Tm + Tp) / 6</strong>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-black tracking-wider block mb-1">Desviación Estándar</span>
                  <strong className="text-indigo-950 text-xs">σ = (Tp - To) / 6</strong>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-black tracking-wider block mb-1">Varianza</span>
                  <strong className="text-indigo-950 text-xs">σ² = [(Tp - To) / 6]²</strong>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                {/* Select box for activity */}
                <div className="md:w-[35%] space-y-2">
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">Seleccione Actividad:</span>
                  <div className="border border-slate-200 rounded-xl overflow-y-auto max-h-[190px] divide-y divide-slate-100 bg-white">
                    {ACTIVIDADES_DATA.slice(0, 15).map((act) => (
                      <button
                        key={act.id}
                        onClick={() => setActivePertEq(act.id)}
                        className={`w-full text-left p-2.5 text-xs transition-colors flex items-center justify-between cursor-pointer ${
                          activePertEq === act.id
                            ? "bg-indigo-50 font-semibold text-indigo-900"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        <span className="font-mono">{act.id}</span>
                        <span className="text-slate-500 font-mono text-[9px]">Te: {act.te.toFixed(1)}d</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculations rendering panel */}
                <div className="flex-1 bg-slate-950 text-white rounded-xl p-5 font-mono text-xs flex flex-col justify-between border border-slate-800">
                  {activePertEq ? (() => {
                    const act = ACTIVIDADES_DATA.find((a) => a.id === activePertEq)!;
                    return (
                      <div className="space-y-4">
                        <div className="border-b border-slate-800 pb-2">
                          <span className="text-teal-400 font-bold text-[9px] uppercase tracking-widest">Cálculo Analítico PERT</span>
                          <h4 className="text-white text-xs font-serif font-semibold mt-0.5">{act.descripcion}</h4>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center py-1">
                          <div className="bg-slate-900 p-2 rounded">
                            <span className="text-[9px] text-slate-400 block mb-0.5">Optimista (To)</span>
                            <strong className="text-teal-300 text-sm">{act.to} d</strong>
                          </div>
                          <div className="bg-slate-900 p-2 rounded">
                            <span className="text-[9px] text-slate-400 block mb-0.5">Probable (Tm)</span>
                            <strong className="text-white text-sm">{act.tm} d</strong>
                          </div>
                          <div className="bg-slate-900 p-2 rounded">
                            <span className="text-[9px] text-slate-400 block mb-0.5">Pesimista (Tp)</span>
                            <strong className="text-red-300 text-sm">{act.tp} d</strong>
                          </div>
                        </div>
                        <div className="space-y-2 border-t border-slate-900 pt-3 text-[11px]">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Fórmula Esperada:</span>
                            <span className="text-teal-200">({act.to} + 4×{act.tm} + {act.tp}) / 6 = <strong>{act.te.toFixed(2)} días hábiles</strong></span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Desviación Estándar (σ):</span>
                            <span className="text-teal-200">({act.tp} - {act.to}) / 6 = <strong>{act.sigma.toFixed(3)}</strong></span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Varianza (σ²):</span>
                            <span className="text-teal-200"><strong>{act.sigmaSq.toFixed(3)}</strong></span>
                          </div>
                        </div>
                      </div>
                    );
                  })() : (
                    <div className="flex items-center justify-center text-slate-500 h-full py-10">
                      Seleccione una actividad para ver su cálculo PERT detallado.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ── PASO 5: DESARROLLAR EL CRONOGRAMA: DIAGRAMA DE GANTT ── */}
            <div id="p06-gantt" className="space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="bg-slate-900 text-white font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">5</span>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h3 className="font-serif text-xl font-bold text-slate-900">
                      Desarrollar el Cronograma (Diagrama de Gantt)
                    </h3>
                    <span className="inline-flex items-center gap-1 bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold self-start sm:self-auto">
                      Modelado en MS Project 2026
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => openLightbox(1)}
                  className="flex items-center gap-1.5 text-xs text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-150 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  Expandir Gantt
                </button>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                El Diagrama de Gantt detalla la distribución de los 6 Sprints ágiles de 4 semanas cada uno. Destaca las ventanas de trabajo, dependencias secuenciales y enmarca los 6 hitos formales de entrega en cada Sprint Review.
              </p>

              {/* Gantt Image Container */}
              <div className="border border-slate-200 bg-slate-50 rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
                {/* Real Image Render */}
                <img
                  src="/project.jpeg"
                  alt="Diagrama de Gantt del Cronograma"
                  referrerPolicy="no-referrer"
                  className="max-h-[350px] max-w-full object-contain rounded-lg shadow-sm border bg-white hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                  onClick={() => openLightbox(1)}
                  onError={(e) => {
                    const currentSrc = e.currentTarget.src;
                    if (currentSrc.includes("/project.jpeg")) {
                      e.currentTarget.src = "/project.png";
                    } else if (currentSrc.includes("/project.png")) {
                      e.currentTarget.src = "/PLAN DE CRONOGRAMA.png";
                    } else {
                      e.currentTarget.style.display = 'none';
                      const el = document.getElementById('diagram-gantt-fallback');
                      if (el) el.classList.remove('hidden');
                    }
                  }}
                />

                {/* Fallback Beautiful Vector Representation */}
                <div id="diagram-gantt-fallback" className="hidden text-center max-w-md py-6">
                  <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-3 animate-pulse" />
                  <h5 className="font-serif font-bold text-slate-800 text-sm mb-1.5">Diagrama de Gantt del Cronograma (Plan Base)</h5>
                  <p className="text-slate-400 text-xs leading-normal mb-4">
                    Aquí se visualiza la escala temporal de los 6 Sprints. Para una visualización óptima, suba el archivo de imagen <code className="font-mono text-[10px] bg-slate-200 px-1 py-0.5 rounded text-slate-700">project.jpeg</code>, <code className="font-mono text-[10px] bg-slate-200 px-1 py-0.5 rounded text-slate-700">project.png</code> o <code className="font-mono text-[10px] bg-slate-200 px-1 py-0.5 rounded text-slate-700">PLAN DE CRONOGRAMA.png</code> a la carpeta correspondiente.
                  </p>
                  <div className="flex justify-center gap-3 font-mono text-[9px] text-slate-500">
                    <span className="bg-white border px-2 py-1 rounded">Sprints 1-6 ── octubre de 2026 a abril de 2027</span>
                  </div>
                </div>
              </div>

              {/* COMPONENTES DEL CRONOGRAMA DESDE PDF PAGE 14 */}
              <div className="bg-[#0d7377]/5 border border-[#0d7377]/10 p-5 rounded-3xl space-y-3">
                <h4 className="font-serif text-sm font-bold text-[#0d7377] flex items-center gap-2">
                  <Layers className="w-4.5 h-4.5" />
                  Componentes del Cronograma (Línea Base Oficial)
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3 text-xs text-slate-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0d7377] mt-0.5 flex-shrink-0" />
                    <span><strong>Duración total:</strong> 24 semanas de trabajo, del 12 de octubre de 2026 al 23 de abril de 2027, con receso del 1 al 26 de febrero de 2027.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0d7377] mt-0.5 flex-shrink-0" />
                    <span><strong>6 Sprints SCRUM de 4 semanas:</strong> Sprint 1 verde oscuro (NUEVO), Sprint 2 verde claro, Sprint 3 azul, Sprint 4 morado, Sprint 5 rosado (NUEVO), Sprint 6 dorado.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0d7377] mt-0.5 flex-shrink-0" />
                    <span><strong>44 actividades y una reunión diaria:</strong> Con duraciones estimadas por el método estadístico PERT.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0d7377] mt-0.5 flex-shrink-0" />
                    <span><strong>Ruta crítica destacada:</strong> Marcada en color naranja/coral con símbolo de estrella (8 actividades nuevas marcadas con cuadrado).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0d7377] mt-0.5 flex-shrink-0" />
                    <span><strong>6 hitos de Sprint Review:</strong> Celebrados al cierre de cada Sprint en las semanas S4, S8, S12, S16, S20 y S24.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0d7377] mt-0.5 flex-shrink-0" />
                    <span><strong>Suma de duraciones esperadas:</strong> {TOTALES.te.toFixed(1)} días (σ = {TOTALES.sigma.toFixed(2)}). La ruta crítica reúne {TOTALES.criticas} actividades y {TOTALES.teCritica.toFixed(1)} días (σ = {TOTALES.sigmaCritica.toFixed(2)}).</span>
                  </li>
                </ul>
              </div>

              {/* CRONOGRAMA RESUMEN POR SPRINT TABLE */}
              <div className="space-y-4 pt-4">
                <h4 className="font-serif text-base font-bold text-slate-900">
                  Resumen de Tiempos y Fechas por Sprint
                </h4>
                <div className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-xs">
                  <table className="w-full text-left divide-y divide-slate-150 text-xs text-slate-600">
                    <thead className="bg-slate-50 text-[10px] font-mono font-bold text-slate-500 uppercase">
                      <tr>
                        <th className="px-4 py-3">Sprint / Fase</th>
                        <th className="px-3 py-3 text-center">Semanas</th>
                        <th className="px-3 py-3 text-center">Inicio</th>
                        <th className="px-3 py-3 text-center">Fin</th>
                        <th className="px-3 py-3 text-center">Duración (Te)</th>
                        <th className="px-4 py-3">Entregable Principal de Sprint Review</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150">
                      <tr className="hover:bg-slate-50/40">
                        <td className="px-4 py-3 font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                          Sprint 1: Análisis y Diseño (NUEVO)
                        </td>
                        <td className="px-3 py-3 text-center font-mono">S1–S4</td>
                        <td className="px-3 py-3 text-center">12 Oct</td>
                        <td className="px-3 py-3 text-center">06 Nov</td>
                        <td className="px-3 py-3 text-center font-mono font-bold text-indigo-700">17.4 d</td>
                        <td className="px-4 py-3 text-slate-500">Arquitectura validada y variables del modelo definidas.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/40">
                        <td className="px-4 py-3 font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                          Sprint 2: Gestión + Datos
                        </td>
                        <td className="px-3 py-3 text-center font-mono">S5–S8</td>
                        <td className="px-3 py-3 text-center">09 Nov</td>
                        <td className="px-3 py-3 text-center">04 Dic</td>
                        <td className="px-3 py-3 text-center font-mono font-bold text-indigo-700">31.7 d</td>
                        <td className="px-4 py-3 text-slate-500">Base de Datos centralizada y validada operativa localmente.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/40">
                        <td className="px-4 py-3 font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                          Sprint 3: Modelo ML Predictivo
                        </td>
                        <td className="px-3 py-3 text-center font-mono">S9–S12</td>
                        <td className="px-3 py-3 text-center">07 Dic</td>
                        <td className="px-3 py-3 text-center">01 Ene</td>
                        <td className="px-3 py-3 text-center font-mono font-bold text-indigo-700">29.2 d</td>
                        <td className="px-4 py-3 text-slate-500">Modelo ML entrenado con precisión superior o igual al 75%.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/40">
                        <td className="px-4 py-3 font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                          Sprint 4: Alertas + Dashboard
                        </td>
                        <td className="px-3 py-3 text-center font-mono">S13–S16</td>
                        <td className="px-3 py-3 text-center">04 Ene</td>
                        <td className="px-3 py-3 text-center">29 Ene</td>
                        <td className="px-3 py-3 text-center font-mono font-bold text-indigo-700">31.3 d</td>
                        <td className="px-4 py-3 text-slate-500">Sistema integrado con alertas y paneles web de tutoría operativos.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/40">
                        <td className="px-4 py-3 font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-pink-600"></span>
                          Sprint 5: Pruebas + Piloto (NUEVO)
                        </td>
                        <td className="px-3 py-3 text-center font-mono">S17–S20</td>
                        <td className="px-3 py-3 text-center">01 Mar</td>
                        <td className="px-3 py-3 text-center">26 Mar</td>
                        <td className="px-3 py-3 text-center font-mono font-bold text-indigo-700">20.6 d</td>
                        <td className="px-4 py-3 text-slate-500">Sistema validado con pruebas de integración y piloto real docente.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/40">
                        <td className="px-4 py-3 font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                          Sprint 6: Implantación + Cierre
                        </td>
                        <td className="px-3 py-3 text-center font-mono">S21–S24</td>
                        <td className="px-3 py-3 text-center">29 Mar</td>
                        <td className="px-3 py-3 text-center">23 Abr</td>
                        <td className="px-3 py-3 text-center font-mono font-bold text-indigo-700">29.0 d</td>
                        <td className="px-4 py-3 text-slate-500">Sistema en producción y proyecto cerrado formalmente.</td>
                      </tr>
                      <tr className="bg-slate-900 text-white font-mono font-bold text-[11px]">
                        <td className="px-4 py-3.5 uppercase font-serif">TOTAL PROYECTO</td>
                        <td className="px-3 py-3.5 text-center">S1–S24</td>
                        <td className="px-3 py-3.5 text-center">12 Oct</td>
                        <td className="px-3 py-3.5 text-center">23 Abr</td>
                        <td className="px-3 py-3.5 text-center text-teal-400">159.2 días</td>
                        <td className="px-4 py-3.5">24 semanas de trabajo, más el receso de febrero.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* VISOR INTERACTIVO MS PROJECT */}
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#107c41] flex items-center justify-center text-white font-mono text-sm font-black shadow-xs">
                      P
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-slate-900">
                        Lista de tareas de la línea base (formato de MS Project)
                      </h4>
                      <p className="text-[11px] text-slate-500 font-sans">
                        Tareas, fechas y responsables de la versión 3, generados desde la misma fuente que el documento CRO-01.
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 self-start sm:self-auto bg-[#eafaf1] border border-[#a2e2bd] text-[#107c41] px-2.5 py-1 rounded-full text-[10px] font-mono font-extrabold shadow-xxs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#107c41] animate-pulse"></span>
                    64 Filas de MS Project Vinculadas
                  </span>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-4">
                  <div className="flex flex-col md:flex-row gap-3 items-center justify-between border-b pb-4 border-slate-200">
                    <span className="text-xs font-mono font-bold text-slate-500 self-start md:self-auto">
                      Búsqueda y Filtros de Tareas (MS Project)
                    </span>
                    <div className="flex flex-wrap gap-2 w-full md:w-auto">
                      {/* Search Input */}
                      <div className="relative flex-1 sm:flex-initial min-w-[180px]">
                        <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Buscar por nombre o recurso..."
                          value={mspSearch}
                          onChange={(e) => setMspSearch(e.target.value)}
                          className="pl-8 pr-3 py-1.5 w-full text-xs border rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-[#107c41] border-slate-200"
                        />
                      </div>

                      {/* Sprint Filter */}
                      <select
                        value={mspSprint}
                        onChange={(e) => setMspSprint(e.target.value)}
                        className="border text-xs rounded-lg px-2.5 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-[#107c41] border-slate-200 font-medium"
                      >
                        <option value="Todos">Todos los Sprints</option>
                        <option value="1">Sprint 1</option>
                        <option value="2">Sprint 2</option>
                        <option value="3">Sprint 3</option>
                        <option value="4">Sprint 4</option>
                        <option value="5">Sprint 5</option>
                        <option value="6">Sprint 6</option>
                      </select>

                      {/* Summary Toggle */}
                      <button
                        onClick={() => setMspShowOnlySummary(!mspShowOnlySummary)}
                        className={`px-3 py-1.5 text-xs rounded-lg font-medium border transition-all flex items-center gap-1.5 cursor-pointer ${
                          mspShowOnlySummary
                            ? "bg-[#107c41] text-white border-[#107c41]"
                            : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <Filter className="w-3.5 h-3.5" />
                        Solo Resúmenes
                      </button>
                    </div>
                  </div>

                  {/* Task Grid */}
                  <div className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-xs">
                    <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
                      <table className="w-full text-left divide-y divide-slate-150 text-xs">
                        <thead className="bg-slate-50 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider sticky top-0 z-10 shadow-xxs">
                          <tr>
                            <th className="px-3 py-2.5 text-center w-[6%] bg-slate-50">Id</th>
                            <th className="px-3 py-2.5 w-[42%] bg-slate-50">Nombre de la Tarea</th>
                            <th className="px-3 py-2.5 w-[12%] text-center bg-slate-50">Duración</th>
                            <th className="px-3 py-2.5 w-[12%] text-center bg-slate-50">Comienzo</th>
                            <th className="px-3 py-2.5 w-[12%] text-center bg-slate-50">Fin</th>
                            <th className="px-2 py-2.5 text-center w-[8%] bg-slate-50">Predec.</th>
                            <th className="px-3 py-2.5 w-[20%] bg-slate-50">Recursos Asignados</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-150 text-slate-600">
                          {filteredMspTasks.length > 0 ? (
                            filteredMspTasks.map((task) => {
                              const isHeader = task.id === 1 || task.id === 2 || task.id === 9 || task.isSummary;
                              return (
                                <tr
                                  key={task.id}
                                  className={`transition-colors ${
                                    isHeader
                                      ? "bg-[#eafaf1]/30 hover:bg-[#eafaf1]/50 font-bold text-slate-900"
                                      : "hover:bg-slate-50/50"
                                  }`}
                                >
                                  <td className="px-3 py-2 font-mono text-center text-slate-500 font-medium border-r border-slate-100">
                                    {task.id}
                                  </td>
                                  <td className="px-3 py-2">
                                    <div className="flex items-center gap-1.5">
                                      {/* Visual Tree Indentation */}
                                      {!isHeader && <span className="text-slate-300 font-mono select-none mr-2">└──</span>}
                                      <span className={isHeader ? "text-slate-950 font-bold text-xs" : "text-slate-700 font-sans"}>
                                        {task.nombre}
                                      </span>
                                    </div>
                                  </td>
                                  <td className={`px-3 py-2 text-center font-mono ${isHeader ? "text-slate-900 font-bold" : "text-slate-600"}`}>
                                    {task.duracion}
                                  </td>
                                  <td className="px-3 py-2 text-center font-mono text-slate-500 text-[11px]">
                                    {task.comienzo}
                                  </td>
                                  <td className="px-3 py-2 text-center font-mono text-slate-500 text-[11px]">
                                    {task.fin}
                                  </td>
                                  <td className="px-2 py-2 text-center font-mono text-[#107c41] font-bold">
                                    {task.predecesoras || "-"}
                                  </td>
                                  <td className="px-3 py-2">
                                    {task.recursos ? (
                                      <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium font-mono border ${
                                        task.recursos.includes("Área de TI") || task.recursos.includes("TI")
                                          ? "bg-blue-50 text-blue-700 border-blue-150"
                                          : task.recursos.includes("ML") || task.recursos.includes("Equipo ML")
                                          ? "bg-purple-50 text-purple-700 border-purple-150"
                                          : task.recursos.includes("Docentes") || task.recursos.includes("Tutor")
                                          ? "bg-pink-50 text-pink-700 border-pink-150"
                                          : task.recursos.includes("Scrum Master")
                                          ? "bg-indigo-50 text-indigo-700 border-indigo-150"
                                          : "bg-slate-50 text-slate-700 border-slate-200"
                                      }`}>
                                        {task.recursos}
                                      </span>
                                    ) : (
                                      <span className="text-slate-300 font-mono text-[10px]">-</span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <tr>
                              <td colSpan={7} className="px-4 py-8 text-center text-slate-400 text-xs font-sans">
                                Ninguna tarea coincide con los filtros especificados.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-[#107c41]/5 border border-[#107c41]/10 p-4 rounded-xl flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-[#107c41] flex-shrink-0 mt-0.5" />
                    <p className="text-[10.5px] text-slate-650 leading-normal">
                      <strong>Acerca de esta lista:</strong> las fechas corresponden al calendario de la versión 3 (CRO-01). La columna de predecesoras muestra la semana planificada de cada actividad; la red de dependencias elaborada en MS Project en el curso anterior se conserva en el diagrama de red.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── PASO 6: CONTROLAR EL CRONOGRAMA (CONTROL DE DESVÍOS EVA) ── */}
            <div id="p06-control-desvios" className="space-y-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="bg-slate-900 text-white font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">6</span>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Monitorear y controlar el cronograma: ejercicio de simulación
                </h3>
              </div>
              <p className="text-slate-650 text-sm leading-relaxed text-justify">
                Este proceso compara el avance real con la línea base y gestiona los cambios. El proyecto inicia el 12 de octubre de 2026, así que todavía no hay avance que medir. Lo que sigue es un <strong>ejercicio de simulación del curso anterior</strong>: sus valores son supuestos, sirven para practicar el análisis del valor ganado y no describen lo ocurrido en el proyecto.
              </p>

              {/* MS Project Baseline Metrics Card Grid */}
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-[#107c41] flex items-center justify-center text-white font-mono text-[10px] font-bold">
                    M
                  </div>
                  <h4 className="font-serif text-sm font-bold text-slate-900">
                    Métricas del ejercicio de simulación
                  </h4>
                </div>
                <p className="text-xs text-slate-650 leading-relaxed text-justify">
                  La línea base vigente es la versión 3, del 10 de octubre de 2026. Las métricas siguientes pertenecen al ejercicio de simulación; solo el número de actividades críticas corresponde a la línea base.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-xxs">
                    <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase">Variación de Comienzo</span>
                    <span className="block text-sm font-mono font-black text-[#107c41] mt-1">0.00 días</span>
                    <span className="block text-[9px] text-slate-500 font-sans mt-0.5">Inicio puntual del proyecto</span>
                  </div>
                  <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-xxs">
                    <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase">Variación de Fin (Real)</span>
                    <span className="block text-sm font-mono font-black text-amber-600 mt-1">-4.70 días</span>
                    <span className="block text-[9px] text-slate-500 font-sans mt-0.5">Adelanto neto acumulado</span>
                  </div>
                  <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-xxs">
                    <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase">Holgura Total Restante</span>
                    <span className="block text-sm font-mono font-black text-indigo-600 mt-1">15.00 días</span>
                    <span className="block text-[9px] text-slate-500 font-sans mt-0.5">Colchón en ruta no crítica</span>
                  </div>
                  <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-xxs">
                    <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase">Ruta Crítica Oficial</span>
                    <span className="block text-sm font-mono font-black text-rose-600 mt-1">{TOTALES.criticas} actividades</span>
                    <span className="block text-[9px] text-slate-500 font-sans mt-0.5">Bajo monitoreo diario</span>
                  </div>
                </div>
              </div>

              {/* EVA Table */}
              <div className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-xs text-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left divide-y divide-slate-150">
                    <thead className="bg-slate-50 text-[10px] font-mono font-bold text-slate-500 uppercase">
                      <tr>
                        <th className="px-4 py-3">Sprint Evaluado</th>
                        <th className="px-3 py-3 text-center">PV (días)</th>
                        <th className="px-3 py-3 text-center">EV (días)</th>
                        <th className="px-3 py-3 text-center">SV = EV - PV</th>
                        <th className="px-3 py-3 text-center">SPI = EV / PV</th>
                        <th className="px-3 py-3 text-center">Estado</th>
                        <th className="px-4 py-3">Observación supuesta (simulación)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 text-slate-650">
                      <tr className="hover:bg-slate-50/40">
                        <td className="px-4 py-3 font-semibold text-slate-900">Sprint 1 (Análisis - NUEVO)</td>
                        <td className="px-3 py-3 text-center font-mono">17.4</td>
                        <td className="px-3 py-3 text-center font-mono">16.0</td>
                        <td className="px-3 py-3 text-center font-mono text-red-600">-1.4</td>
                        <td className="px-3 py-3 text-center font-mono text-red-600">0.92</td>
                        <td className="px-3 py-3 text-center">
                          <span className="bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold">Amarillo</span>
                        </td>
                        <td className="px-4 py-3 text-[11px]">Reunion con directivos tomo mas tiempo. Dentro de tolerancia.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/40">
                        <td className="px-4 py-3 font-semibold text-slate-900">Sprint 2 (Gestión & Datos)</td>
                        <td className="px-3 py-3 text-center font-mono">31.7</td>
                        <td className="px-3 py-3 text-center font-mono">31.7</td>
                        <td className="px-3 py-3 text-center font-mono text-emerald-600">0.0</td>
                        <td className="px-3 py-3 text-center font-mono text-emerald-600">1.00</td>
                        <td className="px-3 py-3 text-center">
                          <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold">Verde</span>
                        </td>
                        <td className="px-4 py-3 text-[11px]">BD entregada en tiempo. ETL sin incidencias gracias al analisis previo.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/40">
                        <td className="px-4 py-3 font-semibold text-slate-900">Sprint 3 (Modelo ML)</td>
                        <td className="px-3 py-3 text-center font-mono">29.2</td>
                        <td className="px-3 py-3 text-center font-mono">27.5</td>
                        <td className="px-3 py-3 text-center font-mono text-red-600">-1.7</td>
                        <td className="px-3 py-3 text-center font-mono text-red-600">0.94</td>
                        <td className="px-3 py-3 text-center">
                          <span className="bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold">Amarillo</span>
                        </td>
                        <td className="px-4 py-3 text-[11px]">Ajuste hiperparametros requirio mas iteraciones. Precision final 78%.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/40">
                        <td className="px-4 py-3 font-semibold text-slate-900">Sprint 4 (Alertas & Web)</td>
                        <td className="px-3 py-3 text-center font-mono">31.3</td>
                        <td className="px-3 py-3 text-center font-mono">31.3</td>
                        <td className="px-3 py-3 text-center font-mono text-emerald-600">0.0</td>
                        <td className="px-3 py-3 text-center font-mono text-emerald-600">1.00</td>
                        <td className="px-3 py-3 text-center">
                          <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold">Verde</span>
                        </td>
                        <td className="px-4 py-3 text-[11px]">Dashboard y alertas completados en tiempo. Semaforo validado.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/40">
                        <td className="px-4 py-3 font-semibold text-slate-900">Sprint 5 (Piloto - NUEVO)</td>
                        <td className="px-3 py-3 text-center font-mono">20.6</td>
                        <td className="px-3 py-3 text-center font-mono">19.0</td>
                        <td className="px-3 py-3 text-center font-mono text-red-600">-1.6</td>
                        <td className="px-3 py-3 text-center font-mono text-red-600">0.92</td>
                        <td className="px-3 py-3 text-center">
                          <span className="bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold">Amarillo</span>
                        </td>
                        <td className="px-4 py-3 text-[11px]">Piloto genero mas feedback. Se aplicaron 6 ajustes de interfaz.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/40">
                        <td className="px-4 py-3 font-semibold text-slate-900">Sprint 6 (Cierre)</td>
                        <td className="px-3 py-3 text-center font-mono">29.0</td>
                        <td className="px-3 py-3 text-center font-mono">29.0</td>
                        <td className="px-3 py-3 text-center font-mono text-emerald-600">0.0</td>
                        <td className="px-3 py-3 text-center font-mono text-emerald-600">1.00</td>
                        <td className="px-3 py-3 text-center">
                          <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold">Verde</span>
                        </td>
                        <td className="px-4 py-3 text-[11px]">Sistema desplegado. UAT aprobadas. Capacitacion ejecutada.</td>
                      </tr>
                      <tr className="bg-slate-900 text-white font-mono font-bold text-[11px]">
                        <td className="px-4 py-3 uppercase">TOTAL ACUMULADO</td>
                        <td className="px-3 py-3 text-center">159.2</td>
                        <td className="px-3 py-3 text-center">154.5</td>
                        <td className="px-3 py-3 text-center text-amber-300">-4.7</td>
                        <td className="px-3 py-3 text-center text-amber-300">0.97</td>
                        <td className="px-3 py-3 text-center">
                          <span className="bg-amber-900 text-amber-100 border border-amber-700 px-2.5 py-0.5 rounded text-[10px] font-bold">Amarillo</span>
                        </td>
                        <td className="px-4 py-3 text-teal-300 text-[11px]">Desviacion 4.7 dias. Dentro de tolerancia total del proyecto.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SOLICITUDES DE CAMBIO */}
              <div className="space-y-4 pt-4">
                <h4 className="font-serif text-base font-bold text-slate-900">
                  Solicitudes de cambio supuestas del ejercicio
                </h4>
                <p className="text-slate-600 text-xs">
                  Ejemplos supuestos para practicar el control de cambios. No pertenecen al registro de cambios del proyecto, que es el documento GOB-10 (capítulo 05).
                </p>

                <div className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-xs text-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left divide-y divide-slate-150">
                      <thead className="bg-slate-50 text-[10px] font-mono font-bold text-slate-500 uppercase">
                        <tr>
                          <th className="px-4 py-2.5 text-center">ID</th>
                          <th className="px-3 py-2.5">Sprint</th>
                          <th className="px-3 py-2.5">Descripción del Cambio Solicitado</th>
                          <th className="px-3 py-2.5 text-center">Impacto</th>
                          <th className="px-3 py-2.5">Solicitado Por</th>
                          <th className="px-3 py-2.5 text-center">Estado</th>
                          <th className="px-4 py-2.5">Aprobado Por</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 text-slate-650">
                        <tr>
                          <td className="px-4 py-3 text-center font-mono font-bold text-slate-900">Ej. 1</td>
                          <td className="px-3 py-3">Sprint 1</td>
                          <td className="px-3 py-3">Ampliar reunion con directivos por necesidad de validar acceso a 3 sistemas adicionales no identificados inicialmente.</td>
                          <td className="px-3 py-3 text-center font-semibold text-slate-800">+1 dia</td>
                          <td className="px-3 py-3">Equipo</td>
                          <td className="px-3 py-3 text-center"><span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-150 text-[10px]">Aprobado</span></td>
                          <td className="px-4 py-3">Scrum Master</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-center font-mono font-bold text-slate-900">Ej. 2</td>
                          <td className="px-3 py-3">Sprint 3</td>
                          <td className="px-3 py-3">Ampliar ajuste de hiperparametros por precision inicial de 67% que requirio 3 iteraciones adicionales.</td>
                          <td className="px-3 py-3 text-center font-semibold text-slate-800">+2 dias</td>
                          <td className="px-3 py-3">Equipo ML</td>
                          <td className="px-3 py-3 text-center"><span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-150 text-[10px]">Aprobado</span></td>
                          <td className="px-4 py-3">Product Owner</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-center font-mono font-bold text-slate-900">Ej. 3</td>
                          <td className="px-3 py-3 font-semibold text-slate-900">Sprint 5 (NUEVO)</td>
                          <td className="px-3 py-3">NUEVO: Ampliar duracion del piloto de 1 a 2 semanas por solicitud de docentes para cubrir un ciclo completo de evaluaciones.</td>
                          <td className="px-3 py-3 text-center font-semibold text-slate-800">+1 sem.</td>
                          <td className="px-3 py-3">Docentes tutores</td>
                          <td className="px-3 py-3 text-center"><span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-150 text-[10px]">Aprobado</span></td>
                          <td className="px-4 py-3">Product Owner</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-center font-mono font-bold text-slate-900">Ej. 4</td>
                          <td className="px-3 py-3 font-semibold text-slate-900">Sprint 5 (NUEVO)</td>
                          <td className="px-3 py-3">NUEVO: Agregar 6 ajustes de interfaz identificados en el piloto: reordenar columnas dashboard, cambiar paleta semaforo y filtro por docente.</td>
                          <td className="px-3 py-3 text-center font-semibold text-slate-800">+2 dias</td>
                          <td className="px-3 py-3">Docentes tutores</td>
                          <td className="px-3 py-3 text-center"><span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-150 text-[10px]">Aprobado</span></td>
                          <td className="px-4 py-3">Product Owner</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-center font-mono font-bold text-slate-900">Ej. 5</td>
                          <td className="px-3 py-3">Sprint 5</td>
                          <td className="px-3 py-3 text-slate-400">Agregar modulo de exportacion de alertas a WhatsApp para padres de familia.</td>
                          <td className="px-3 py-3 text-center font-semibold text-slate-400">+5 dias</td>
                          <td className="px-3 py-3 text-slate-400">Coord. Academico</td>
                          <td className="px-3 py-3 text-center"><span className="text-red-700 bg-red-50 px-2 py-0.5 rounded font-bold border border-red-150 text-[10px]">Rechazado</span></td>
                          <td className="px-4 py-3 text-slate-400">Scrum Master</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-center font-mono font-bold text-slate-900">Ej. 6</td>
                          <td className="px-3 py-3">Sprint 6</td>
                          <td className="px-3 py-3">Reprogramar sesion UAT formal por feriado escolar en semana S22.</td>
                          <td className="px-3 py-3 text-center font-semibold text-slate-800">0 dias</td>
                          <td className="px-3 py-3">Coord. Academico</td>
                          <td className="px-3 py-3 text-center"><span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-150 text-[10px]">Aprobado</span></td>
                          <td className="px-4 py-3">Product Owner</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* PLAN DE RESPUESTAS */}
              <div className="space-y-4 pt-4">
                <h4 className="font-serif text-base font-bold text-slate-900">
                  Plan de Respuesta Inmediata ante Desvíos
                </h4>
                <div className="grid md:grid-cols-2 gap-5 text-xs">
                  <div className="border border-amber-250 bg-amber-50/10 p-5 rounded-2xl">
                    <h5 className="font-serif font-bold text-amber-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      Nivel Amarillo: Alerta Preventiva (SPI 0.90 a 0.99)
                    </h5>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                      <li>Scrum Master notifica inmediatamente al equipo en la reunión diaria (Daily Standup).</li>
                      <li>Revisión exhaustiva de cuellos de botella y holguras en la ruta crítica de datos.</li>
                      <li>Uso de la reserva de contingencia del Sprint correspondiente (2 días hábiles de colchón).</li>
                    </ul>
                  </div>

                  <div className="border border-red-250 bg-red-50/5 p-5 rounded-2xl">
                    <h5 className="font-serif font-bold text-red-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                      Nivel Rojo: Alerta Correctiva Urgente (SPI &lt; 0.90)
                    </h5>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                      <li>Convocatoria a reunión urgente con el Product Owner para evaluar impactos.</li>
                      <li><strong>Fast Tracking:</strong> Paralelizar tareas de documentación de manuales de usuario y técnicos.</li>
                      <li><strong>Crashing:</strong> Reasignar recursos adicionales (segundo ingeniero ML para acelerar el ajuste).</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. ACTUALIZACIONES AL PLAN DEL PROYECTO */}
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <h4 className="font-serif text-base font-bold text-slate-900">
                  4. Documentos que se actualizan al controlar el cronograma
                </h4>
                <p className="text-slate-600 text-xs">
                  Cuando el control del cronograma detecte un desvío real, estos son los documentos que deberán actualizarse:
                </p>

                <div className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-xs text-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left divide-y divide-slate-150">
                      <thead className="bg-slate-50 text-[10px] font-mono font-bold text-slate-500 uppercase">
                        <tr>
                          <th className="px-4 py-2.5">Documento a actualizar</th>
                          <th className="px-3 py-2.5">Qué se actualiza</th>
                          <th className="px-3 py-2.5">Frecuencia</th>
                          <th className="px-4 py-2.5">Responsable</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-150 text-slate-650">
                        <tr className="hover:bg-slate-50/40">
                          <td className="px-4 py-3 font-semibold text-slate-900">Línea base del cronograma</td>
                          <td className="px-3 py-3">Fechas de inicio y fin afectadas por los cambios aprobados.</td>
                          <td className="px-3 py-3 font-mono text-[10px]">Por Sprint Review</td>
                          <td className="px-4 py-3">Scrum Master</td>
                        </tr>
                        <tr className="hover:bg-slate-50/40">
                          <td className="px-4 py-3 font-semibold text-slate-900">Registro lecciones aprendidas</td>
                          <td className="px-3 py-3">Causas de desvíos, acciones correctivas y efectividad. Incluir hallazgos del piloto Sprint 5.</td>
                          <td className="px-3 py-3 font-mono text-[10px]">Cierre Sprint</td>
                          <td className="px-4 py-3">Equipo completo</td>
                        </tr>
                        <tr className="hover:bg-slate-50/40">
                          <td className="px-4 py-3 font-semibold text-slate-900">Product Backlog</td>
                          <td className="px-3 py-3">Nueva priorización de las historias de usuario cuando haya cambios aprobados.</td>
                          <td className="px-3 py-3 font-mono text-[10px]">Por Sprint Review</td>
                          <td className="px-4 py-3">Product Owner</td>
                        </tr>
                        <tr className="hover:bg-slate-50/40">
                          <td className="px-4 py-3 font-semibold text-slate-900">Registro de riesgos</td>
                          <td className="px-3 py-3">Nuevos riesgos: disponibilidad de docentes para piloto, calidad de datos históricos del colegio.</td>
                          <td className="px-3 py-3 font-mono text-[10px]">Semanal</td>
                          <td className="px-4 py-3">Scrum Master</td>
                        </tr>
                        <tr className="hover:bg-slate-50/40">
                          <td className="px-4 py-3 font-semibold text-slate-900">Informe de desempeño</td>
                          <td className="px-3 py-3">SPI, SV, porcentaje de avance real vs planificado y proyección de cierre actualizada.</td>
                          <td className="px-3 py-3 font-mono text-[10px]">Semanal</td>
                          <td className="px-4 py-3">Scrum Master</td>
                        </tr>
                        <tr className="hover:bg-slate-50/40">
                          <td className="px-4 py-3 font-semibold text-slate-900">Plan gestión del cronograma</td>
                          <td className="px-3 py-3">Actualizar BAC de 86.8 a 159.2 días y tolerancia total a más o menos 1.5 semanas.</td>
                          <td className="px-3 py-3 font-mono text-[10px]">Una vez (inicio)</td>
                          <td className="px-4 py-3">Scrum Master</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* CONCLUSIÓN GENERAL */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-3">
                <h4 className="font-serif text-sm font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4.5 h-4.5 text-indigo-600" />
                  Conclusión de la Gestión de Tiempos
                </h4>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                  <strong>Lectura del ejercicio:</strong> en la simulación, el proyecto cerraría con una desviación de <strong>-4.7 días (SPI = 0.97)</strong>, dentro de la tolerancia de una semana y media. Es un resultado supuesto: muestra cómo se interpretarán los indicadores cuando haya mediciones reales, a partir de la revisión del Sprint 1 (6 de noviembre de 2026).
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── IMAGE ZOOM LIGHTBOX MODAL ── */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-slate-950/95 z-50 flex flex-col items-center justify-between p-4 md:p-6 select-none">
          {/* Header */}
          <div className="w-full flex items-center justify-between max-w-7xl border-b border-slate-800 pb-3">
            <h4 className="font-serif text-white font-bold text-sm sm:text-base text-left truncate pr-4">
              {images[lightboxIndex].alt}
            </h4>
            <button
              onClick={closeLightbox}
              className="text-slate-400 hover:text-white p-2 rounded-full bg-slate-900 hover:bg-slate-800 transition-colors border border-slate-800 cursor-pointer flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Main Stage */}
          <div className="w-full flex-1 flex items-center justify-center my-4 overflow-hidden relative">
            <div 
              className={`relative max-w-full max-h-[66vh] rounded-2xl bg-slate-900 border border-slate-800 p-2 sm:p-4 overflow-hidden flex items-center justify-center ${
                zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
              }`}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onMouseUp}
              onClick={(e) => {
                if (isDragging) return;
                if (zoom === 1) {
                  setZoom(2);
                } else {
                  handleZoomReset();
                }
              }}
            >
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] max-w-full object-contain rounded-lg select-none pointer-events-none"
                style={{
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                  transformOrigin: "center center",
                  transition: isDragging ? "none" : "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), translate 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onError={(e) => {
                  const currentSrc = e.currentTarget.src;
                  if (currentSrc.includes("/project.jpeg")) {
                    e.currentTarget.src = "/project.png";
                  } else if (currentSrc.includes("/project.png")) {
                    e.currentTarget.src = "/PLAN DE CRONOGRAMA.png";
                  } else {
                    e.currentTarget.style.display = 'none';
                    const msg = document.getElementById('lightbox-error');
                    if (msg) msg.classList.remove('hidden');
                  }
                }}
              />
              <div id="lightbox-error" className="hidden text-slate-400 py-12 text-center text-sm font-mono">
                La imagen <code className="bg-slate-950 p-1 rounded">{images[lightboxIndex].src}</code> no se encuentra en el servidor. <br />
                Suba el archivo correspondiente para visualizarlo.
              </div>
            </div>
          </div>

          {/* Footer Controls */}
          <div className="w-full max-w-2xl text-center space-y-4">
            {/* Zoom Controls Bar */}
            <div className="inline-flex items-center gap-4 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomOut(); }}
                disabled={zoom <= 1}
                className="text-slate-400 hover:text-white disabled:text-slate-700 disabled:cursor-not-allowed transition-colors p-1.5 hover:bg-slate-800 rounded-full cursor-pointer flex items-center justify-center"
                title="Alejar"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              
              <span className="text-white font-mono text-xs min-w-[50px] select-none text-center">
                {Math.round(zoom * 100)}%
              </span>
              
              <button
                onClick={(e) => { e.stopPropagation(); handleZoomIn(); }}
                disabled={zoom >= 4}
                className="text-slate-400 hover:text-white disabled:text-slate-700 disabled:cursor-not-allowed transition-colors p-1.5 hover:bg-slate-800 rounded-full cursor-pointer flex items-center justify-center"
                title="Acercar"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <div className="w-px h-4 bg-slate-800" />

              <button
                onClick={(e) => { e.stopPropagation(); handleZoomReset(); }}
                disabled={zoom === 1 && pan.x === 0 && pan.y === 0}
                className="text-xs text-slate-400 hover:text-white disabled:text-slate-700 disabled:cursor-not-allowed transition-colors px-2.5 py-1 hover:bg-slate-850 rounded-md font-mono cursor-pointer"
              >
                Restablecer
              </button>
            </div>

            <p className="text-slate-400 text-xs max-w-3xl mx-auto leading-relaxed px-4">
              {images[lightboxIndex].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
