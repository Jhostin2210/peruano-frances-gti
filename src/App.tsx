/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Portada from "./components/Portada";
import Abstract from "./components/Abstract";
import ChapterIntro from "./components/ChapterIntro";
import Introduccion from "./components/Introduccion";
import StakeholderAnalysis from "./components/StakeholderAnalysis";
import ProblemaAnalysis from "./components/ProblemaAnalysis";
import ObjetivoAnalysis from "./components/ObjetivoAnalysis";
import AlternativesAnalysis from "./components/AlternativesAnalysis";
import RequisitosAnalysis from "./components/RequisitosAnalysis";
import ScheduleBaseline from "./components/ScheduleBaseline";
import CostBaseline from "./components/CostBaseline";
import VideoPresentation from "./components/VideoPresentation";
import ReferenciasBiblio from "./components/ReferenciasBiblio";
import MarcoPmbok from "./components/MarcoPmbok";
import DominioPmbok from "./components/DominioPmbok";
import AvisoEtapa from "./components/AvisoEtapa";
import TableroComunicaciones from "./components/TableroComunicaciones";
import { TOC_SECTIONS } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for tracking active sections & applying fade effects
  useEffect(() => {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    TOC_SECTIONS.forEach(({ href }) => {
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        activeObserver.observe(el);
        fadeObserver.observe(el);
      }
    });

    return () => {
      activeObserver.disconnect();
      fadeObserver.disconnect();
    };
  }, []);

  const handleStartProject = () => {
    const el = document.getElementById("problema");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 relative antialiased">
      {/* Real-time scroll indicator */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-1 transition-all duration-100 ease-out"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #0d7377, #1e3a8a)",
        }}
      />

      {/* Header bar */}
      <Header onOpenSidebar={() => setSidebarOpen(true)} />

      <div className="flex pt-14">
        {/* Navigation Sidebar Drawer */}
        <Sidebar
          activeSection={activeSection}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Core Layout Content */}
        <main className="flex-1 lg:ml-64 min-w-0 transition-all duration-200">

          {/* Main Cover Section */}
          <Portada onStartClick={handleStartProject} />

          {/* Research Summary Abstract */}
          <Abstract />

          {/* ═════════ PARTE I · FORMULACIÓN (curso anterior) ═════════ */}

          {/* CAPÍTULO 00 — INTRODUCCIÓN */}
          <ChapterIntro
            num="00"
            title="Introducción al Diagnóstico"
            subtitle="Motivación del proyecto, perfil de la I.E.P. Peruano Francés, organigrama y propuesta de valor del sistema de alerta temprana."
            subheading="Capítulo 00 · Introducción"
          />
          <Introduccion />

          {/* CAPÍTULO 01 — ANÁLISIS DEL PROBLEMA */}
          <ChapterIntro
            num="01"
            title="Análisis del Problema"
            subtitle="Diagnóstico de la brecha con datos de la encuesta a docentes y el árbol de problemas del marco lógico."
            subheading="Capítulo 01 · Formulación · Diagnóstico"
            inputs={[
              "Percepción de los docentes",
              "Formatos físicos de reporte de incidencias",
              "Registros de asistencia en cuadernos",
            ]}
            tools={[
              "Marco lógico (árbol de problemas)",
              "Encuesta en línea a docentes",
            ]}
            outputs={[
              "Enunciado del problema central",
              "Causas directas e indirectas",
              "Resultados de la encuesta por pregunta",
            ]}
          />
          <ProblemaAnalysis />

          {/* CAPÍTULO 02 — ANÁLISIS DEL OBJETIVO */}
          <ChapterIntro
            num="02"
            title="Análisis del Objetivo"
            subtitle="Árbol de medios y fines, objetivo central y objetivos específicos validados con el criterio SMART."
            subheading="Capítulo 02 · Formulación · Objetivos"
            inputs={[
              "Enunciado del problema central",
              "Árbol de problemas",
              "Análisis de factibilidad técnica",
            ]}
            tools={[
              "Árbol de objetivos (marco lógico)",
              "Criterio SMART",
            ]}
            outputs={[
              "Objetivo central",
              "Objetivos específicos (medios directos)",
              "Fin último del sistema",
            ]}
          />
          <ObjetivoAnalysis />

          {/* CAPÍTULO 03 — ANÁLISIS DE ALTERNATIVA DE SOLUCIÓN */}
          <ChapterIntro
            num="03"
            title="Análisis de Alternativa de Solución"
            subtitle="Acciones por cada medio, alternativas tecnológicas evaluadas y diseño de la experiencia con pensamiento de diseño."
            subheading="Capítulo 03 · Formulación · Alternativas"
            inputs={[
              "Árbol de objetivos (capítulo 02)",
              "Soluciones tecnológicas comparables",
            ]}
            tools={[
              "Matriz de acciones mutuamente excluyentes",
              "Evaluación de suficiencia de cada alternativa",
              "Pensamiento de diseño (cinco fases)",
            ]}
            outputs={[
              "Alternativa recomendada",
              "Maquetas y prototipo de la experiencia",
            ]}
          />
          <AvisoEtapa tipo="cambio">
            La evaluación de este capítulo eligió una solución alojada en el colegio. En la etapa actual el alojamiento pasó a
            servicios gestionados en la nube: el cambio está registrado como <strong>SC-03</strong> y su sustento está en el plan de
            estrategia de abastecimiento (<a href="#doc-GOB-05" className="underline font-semibold">GOB-05</a>). El modelo, las alertas
            y el tablero de la alternativa elegida se mantienen.
          </AvisoEtapa>
          <AlternativesAnalysis />

          {/* ═════════ PARTE II · GESTIÓN DEL PROYECTO (PMBOK® 8) ═════════ */}

          {/* CAPÍTULO 04 — MARCO DE GESTIÓN */}
          <ChapterIntro
            num="04"
            title="Marco de Gestión del Proyecto"
            subtitle="Cómo se organiza el proyecto según la Guía del PMBOK®, octava edición: principios, áreas de enfoque, dominios de desempeño, procesos desarrollados e índice de documentos."
            subheading="Capítulo 04 · Guía del PMBOK® · octava edición"
          />
          <MarcoPmbok />

          {/* CAPÍTULO 05 — DOMINIO DE GOBERNANZA */}
          <ChapterIntro
            num="05"
            title="Dominio de Gobernanza"
            subtitle="Autoriza el proyecto, integra sus planes, dirige la ejecución, asegura la calidad, gestiona el conocimiento, controla el desempeño y los cambios, y cierra cada fase. Nueve procesos."
            subheading="Capítulo 05 · Dominio de desempeño · 9 procesos"
            inputs={[
              "Caso de negocio y plan de beneficios",
              "Factores del entorno y activos del colegio",
              "Documentos de la fase de formulación",
            ]}
            tools={[
              "Entrevista y tormenta de ideas",
              "Análisis de hacer o comprar",
              "Lista de verificación, Pareto y causa raíz",
              "Control integrado de cambios",
            ]}
            outputs={[
              "Acta de constitución y registro de supuestos",
              "Plan para la dirección del proyecto",
              "Registros de incidentes, cambios y lecciones",
              "Informes de calidad, desempeño y cierre de fase",
            ]}
          />
          <DominioPmbok
            dominio="Gobernanza"
            capitulo="05"
            antes={{ "gob-1": <StakeholderAnalysis parte="caso" /> }}
          />

          {/* CAPÍTULO 06 — DOMINIO DE INTERESADOS */}
          <ChapterIntro
            num="06"
            title="Dominio de Interesados"
            subtitle="Identifica a las personas y organizaciones afectadas por el proyecto, planifica su involucramiento y las comunicaciones, y da seguimiento a su participación."
            subheading="Capítulo 06 · Dominio de desempeño · 7 procesos"
            inputs={[
              "Acta de constitución",
              "Organigrama del colegio",
              "Entrevista y encuesta del levantamiento",
            ]}
            tools={[
              "Matriz de poder e interés y cubo de interesados",
              "Modelo de prominencia y dirección de la influencia",
              "Matriz de evaluación del involucramiento",
              "Reglas básicas",
            ]}
            outputs={[
              "Registro de interesados (17)",
              "Plan de involucramiento y plan de gestión de las comunicaciones",
              "Bitácora, registro de comunicaciones e informes de seguimiento",
              "Tablero de comunicaciones",
            ]}
          />
          <DominioPmbok
            dominio="Interesados"
            capitulo="06"
            grupo="Involucramiento"
            antes={{ "int-1": <StakeholderAnalysis parte="entrevista" /> }}
          />

          {/* Gestión de las comunicaciones: tres procesos del mismo dominio y su tablero */}
          <section id="comunicaciones" className="py-10 px-8 lg:px-12 bg-[#12305a] text-white border-y border-slate-700">
            <p className="font-mono text-xs uppercase tracking-widest text-[#4ec8cc] mb-1">Capítulo 06 · Segunda parte</p>
            <h2 className="font-serif text-2xl font-bold leading-tight">Gestión de las comunicaciones del proyecto</h2>
            <p className="text-slate-300 text-sm mt-2 max-w-3xl">
              La octava edición de la Guía del PMBOK® ubica las comunicaciones dentro del dominio de Interesados. Son tres procesos:
              planificar la gestión de las comunicaciones, gestionarlas y monitorearlas.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mt-5 max-w-4xl">
              {[
                ["Planificación", "Planificar la gestión de las comunicaciones", "Plan de gestión de las comunicaciones", "#int-3"],
                ["Ejecución", "Gestionar las comunicaciones", "Registro de comunicaciones", "#int-5"],
                ["Monitoreo y control", "Monitorear las comunicaciones", "Informe de monitoreo y tablero", "#int-7"],
              ].map(([area, proceso, salida, enlace]) => (
                <a key={enlace} href={enlace} className="block bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl p-4 transition-colors">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#4ec8cc]">{area}</p>
                  <p className="font-serif font-bold text-sm mt-1 leading-snug">{proceso}</p>
                  <p className="text-[11px] text-slate-300 mt-1.5">{salida}</p>
                </a>
              ))}
            </div>
          </section>
          <DominioPmbok dominio="Interesados" capitulo="06" grupo="Comunicaciones" desde={5} />
          <TableroComunicaciones />

          {/* CAPÍTULO 07 — DOMINIO DE ALCANCE */}
          <ChapterIntro
            num="07"
            title="Dominio de Alcance"
            subtitle="Define qué se entrega y con qué calidad: plan de gestión, 20 requisitos con su trazabilidad, enunciado del alcance, EDT y validación de los entregables."
            subheading="Capítulo 07 · Dominio de desempeño · 6 procesos"
            inputs={[
              "Acta de constitución",
              "Registro de interesados",
              "Alternativa recomendada",
            ]}
            tools={[
              "Entrevista, encuesta y pensamiento de diseño",
              "Matriz de trazabilidad de requisitos",
              "Descomposición del trabajo (EDT)",
              "Inspección y pruebas",
            ]}
            outputs={[
              "Planes de alcance, requisitos y calidad",
              "Enunciado del alcance, versión 3",
              "EDT de seis componentes y su diccionario",
              "Procedimiento de validación",
            ]}
          />
          <DominioPmbok
            dominio="Alcance"
            capitulo="07"
            despues={{
              "alc-2": <RequisitosAnalysis parte="requisitos" />,
              "alc-4": <RequisitosAnalysis parte="edt" />,
            }}
          />

          {/* CAPÍTULO 08 — DOMINIO DE CRONOGRAMA */}
          <ChapterIntro
            num="08"
            title="Dominio de Cronograma"
            subtitle="Línea base del cronograma, versión 3: 44 actividades y una reunión diaria en seis sprints, del 12 de octubre de 2026 al 23 de abril de 2027, con receso en febrero."
            subheading="Capítulo 08 · Dominio de desempeño · 3 procesos"
            inputs={[
              "Línea base del alcance (capítulo 07)",
              "Estimaciones de la versión 2",
              "Calendario escolar y feriados",
            ]}
            tools={[
              "Estimación por tres valores (PERT)",
              "Método de la ruta crítica",
              "Planificación por sprints",
              "Análisis del valor ganado",
            ]}
            outputs={[
              "Plan de gestión del cronograma",
              "Línea base del cronograma y calendario",
              "Cronograma de hitos",
            ]}
          />
          <DominioPmbok
            dominio="Cronograma"
            capitulo="08"
            despues={{ "cro-2": <ScheduleBaseline /> }}
          />

          {/* ═════════ PARTE III · MATERIAL DEL CURSO ANTERIOR ═════════ */}

          {/* CAPÍTULO 09 — DOMINIO DE FINANZAS */}
          <ChapterIntro
            num="09"
            title="Dominio de Finanzas: Línea Base de Costos"
            subtitle="Estimación de costos por categoría, línea base de costos y distribución en el tiempo. Elaborado en el curso anterior; pendiente de actualizar en esta etapa."
            subheading="Capítulo 09 · Curso anterior · Pendiente de actualizar"
            inputs={[
              "Diccionario de la EDT",
              "Cronograma de seis sprints",
              "Tarifas del mercado laboral de TI de Lima, 2026",
            ]}
            tools={[
              "Estimación ascendente",
              "Estimación por tres valores (PERT)",
              "Análisis de reserva",
              "Curva S por sprints",
            ]}
            outputs={[
              "Estimación de costos por categoría",
              "Línea base de costos: S/ 59,859.17",
              "Presupuesto total: S/ 63,495.53",
            ]}
          />
          <AvisoEtapa tipo="anterior">
            Este capítulo se elaboró en el curso anterior con la sexta edición del PMBOK y el equipo de entonces. Los
            montos siguen vigentes, pero las fechas, los responsables y la partida de servidor local corresponden a la versión anterior:
            se actualizarán cuando el equipo desarrolle el dominio de Finanzas (pendiente registrado en <strong>SC-02</strong> y{" "}
            <strong>SC-03</strong>).
          </AvisoEtapa>
          <CostBaseline />

          {/* CAPÍTULO 10 — VIDEO DE PRESENTACIÓN */}
          <ChapterIntro
            num="10"
            title="Video de Presentación de la Solución"
            subtitle="Sustentación en video de la propuesta SIA-T presentada en el curso anterior, con la demostración del prototipo."
            subheading="Capítulo 10 · Curso anterior"
          />
          <AvisoEtapa tipo="anterior">
            El video y el prototipo que muestra son del curso anterior. El prototipo es una demostración con datos simulados: todavía
            no usa un modelo validado con datos reales del colegio (incidente <strong>IN-03</strong>).
          </AvisoEtapa>
          <VideoPresentation />

          {/* SYSTEM BIBLIOGRAPHY */}
          <ReferenciasBiblio />

          {/* Persistent global footer */}
          <footer className="bg-slate-900 py-8 text-center text-slate-400 text-xs border-t border-slate-800">
            <p className="font-mono">
              © 2026 · Sistema ML Alerta Temprana del Bajo Rendimiento Académico · I.E.P. Peruano Francés · UNTELS · Gestión de Proyecto de TI
            </p>
          </footer>

        </main>
      </div>
    </div>
  );
}
