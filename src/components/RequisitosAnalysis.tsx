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

interface EDTWorkPackage {
  id: string; // 1.1.1
  controlAccount: string; // 1.1
  titulo: string;
  responsable: string;
  fecha: string;
  descripcion: string;
  criterioAceptacion: string;
  entregables: string;
  supuestos: string;
  recursos: string;
  duracion: string;
  categoria: "Gestión" | "Datos" | "Modelado ML" | "Alertas" | "Despliegue" | "Capacitación" | "Pruebas y piloto";
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

// "requisitos": resumen y explorador de requisitos. "edt": diagrama y diccionario de la EDT.
interface RequisitosAnalysisProps {
  parte: "requisitos" | "edt";
}

export default function RequisitosAnalysis({ parte }: RequisitosAnalysisProps) {
  // Requirement states
  const [activeTab, setActiveTab] = useState<"todos" | "funcional" | "no-funcional">("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoria, setSelectedCategoria] = useState("Todas");
  const [expandedId, setExpandedId] = useState<string | null>("REQ-01");

  // EDT Image state
  const [edtImageUri, setEdtImageUri] = useState<string>("/Sistema ML – Diagrama de Proyecto.png");
  const [useInteractiveFallback, setUseInteractiveFallback] = useState<boolean>(false);

  // EDT Dictionary states
  const [edtSearch, setEdtSearch] = useState("");
  const [edtActiveCat, setEdtActiveCat] = useState<string>("Todas");
  const [edtExpandedId, setEdtExpandedId] = useState<string | null>("1.1.1");

  // EDT Tree highlighted parent
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

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

  // Paquetes de trabajo del diccionario de la EDT, con los responsables del equipo actual.
  const edtDictionaryData: EDTWorkPackage[] = [
    {
      id: "1.1.1",
      controlAccount: "1.1",
      titulo: "Cronograma de Hitos clave",
      responsable: "Jhostin J. Galarza Camarena",
      fecha: "Junio 2026",
      descripcion: "Elaboración y actualización periódica del cronograma general del proyecto, detallando hitos fundamentales, fechas estimadas de entrega, duraciones y lógica relacional entre requerimientos.",
      criterioAceptacion: "El cronograma debe estar formalmente visado por el docente asesor de UNTELS y ser modificado sistemáticamente ante cualquier cambio en el plan.",
      entregables: "Cronograma de hitos detallado en formato Gantt con visualización de responsables y estado de avance del software.",
      supuestos: "El equipo dispone de herramientas de gestión de proyectos (MS Project, hojas de cálculo y tablero de tareas) de forma gratuita. Los plazos generales no sufrirán ampliaciones externas.",
      recursos: "1 Líder de proyecto, 1 Computadora con herramientas de diagramación.",
      duracion: "Durante todo el ciclo del proyecto (Monitoreo y reporte semanal)",
      categoria: "Gestión"
    },
    {
      id: "1.1.2",
      controlAccount: "1.1",
      titulo: "Informes de Avance de Entregas",
      responsable: "Jhostin J. Galarza Camarena",
      fecha: "Junio 2026",
      descripcion: "Confección y emisión biquincenal de informes estructurados de avance técnico detallando hitos cumplidos, riesgos identificados y acciones correctivas aplicadas dirigidas al docente asesor.",
      criterioAceptacion: "Los reportes deben entregarse conforme al calendario académico oficial del curso y reflejar el estado actual exacto del desarrollo tecnológico.",
      entregables: "Informe de avance consolidado firmado en formato digital Word/PDF por cada entrega parcial del curso universitarias.",
      supuestos: "El docente asesor suministra los contenidos mínimos o rúbricas de control con un mínimo de anticipación de una semana calendario.",
      recursos: "1 Redactor técnico, 1 Computadora con procesador de textos.",
      duracion: "Cada 2 semanas (Biquincenal)",
      categoria: "Gestión"
    },
    {
      id: "1.1.3",
      controlAccount: "1.1",
      titulo: "Actas de Reuniones y Control de Cambios",
      responsable: "Carlos A. Curo Ramos",
      fecha: "Junio 2026",
      descripcion: "Redacción permanente de actas correspondientes a reuniones presenciales o virtuales del equipo y control de solicitudes de alteración sobre el alcance, cronograma y entregables del código del SIA-T.",
      criterioAceptacion: "Todas las sesiones contarán con acta firmada por los asistentes. Cualquier cambio sobre el alcance de las 20 planillas y base de datos demandará justificación y firma aprobatoria.",
      entregables: "Bitácora en Word de actas foliada y registro riguroso de solicitudes de control de cambios aprobados.",
      supuestos: "El equipo sostiene reuniones de trabajo por lo menos una vez por semana. Los desacuerdos técnicos son gestionados por mayoría simple.",
      recursos: "1 Secretario del equipo de proyecto, Documentos de control, Computadora.",
      duracion: "Durante todo el proyecto (Registro síncrono tras reunión)",
      categoria: "Gestión"
    },
    {
      id: "1.2.1",
      controlAccount: "1.2",
      titulo: "Integración de Scripts ETL",
      responsable: "Jadira D. Vasquez Castro",
      fecha: "Junio 2026",
      descripcion: "Planificación y desarrollo de rutinas en Python (procesos de carga y tareas programadas) para la extracción, limpieza de duplicados y migración diaria automatizada de registros académicos de Cubicol hacia PostgreSQL.",
      criterioAceptacion: "El pipeline automatizado de integración de datos debe ejecutarse en menos de 15 minutos, ofrecer consistencia bidireccional, omitir duplicados de alumnos y reportar logs de depuración.",
      entregables: "Scripts de nivel técnico en Python debidamente documentados, triggers relacionales configurados en base de datos PostgreSQL en la nube.",
      supuestos: "El colegio entrega exportaciones de notas de Cubicol (supuesto S-01); no se ha comprobado que exista una API.",
      recursos: "1 Desarrollador Backend, Computadora con entorno de Python.",
      duracion: "15 días hábiles",
      categoria: "Datos"
    },
    {
      id: "1.2.2",
      controlAccount: "1.2",
      titulo: "Limpieza y Calidad de Datos históricos",
      responsable: "Jadira D. Vasquez Castro",
      fecha: "Junio 2026",
      descripcion: "Análisis preliminar, minería de datos, imputación de nulos y verificación de redundancias en promedios y asistencias escolares acumuladas de los tres últimos años académicos.",
      criterioAceptacion: "El dataset pulido final no presentará valores nulos en columnas críticas (promedios, faltas). Se acompañará de informe de indicadores de completitud general.",
      entregables: "Dataset (.csv / .sql) unificado depurado histórico, Reporte de calidad y depuración formal.",
      supuestos: "Los datos históricos cubren al menos dos periodos consecutivos por estudiante (supuesto S-02).",
      recursos: "1 Analista de datos, Computadora personal con Jupyter / Pandas configurado.",
      duracion: "10 días hábiles",
      categoria: "Datos"
    },
    {
      id: "1.3.1",
      controlAccount: "1.3",
      titulo: "Entrenamiento del Modelo ML",
      responsable: "Helber J. Perez Gutierrez",
      fecha: "Junio 2026",
      descripcion: "Generación, experimentación, entrenamiento de algoritmos de clasificación multiclase (como SVM, Random Forest, AdaBoost) usando Scikit-learn para segmentar el riesgo predictivo.",
      criterioAceptacion: "El modelo entrenado debe guardarse en extensiones de archivo serializadas compatibles (.pkl) y discriminar de manera precisa los 3 estados de riesgo solicitados.",
      entregables: "Archivo .pkl serializado del clasificador ML capacitado, Jupyter Notebook detallado de experimentación.",
      supuestos: "El dataset pulido (paquete 1.2.2) se halla disponible antes del inicio del entrenamiento predictivo.",
      recursos: "1 Científico de datos, Jupyter Notebook, Python y Scikit-learn instalados.",
      duracion: "12 días hábiles",
      categoria: "Modelado ML"
    },
    {
      id: "1.3.2",
      controlAccount: "1.3",
      titulo: "Clasificación de Riesgo predictivo",
      responsable: "Helber J. Perez Gutierrez",
      fecha: "Junio 2026",
      descripcion: "Escritura del módulo encargado de consumir semanalmente el archivo del clasificador para procesar la matraícula vigente, grabando puntuaciones de riesgo en PostgreSQL.",
      criterioAceptacion: "La rutina clasificatoria recopilará calificaciones vigentes e inasistencias y las rotulará semanalmente sin requerimiento de activación o mediación humana.",
      entregables: "Módulo back-end de predicción indexada ejecutado con una tarea programada en la nube, que guarda los resultados en la base de datos.",
      supuestos: "El pipeline de extracción ETL opera en correspondencia alimentando la base de datos de manera previa.",
      recursos: "1 Desarrollador de Inteligencia artificial, PostgreSQL gestionado y tarea programada en Python.",
      duracion: "8 días hábiles",
      categoria: "Modelado ML"
    },
    {
      id: "1.3.3",
      controlAccount: "1.3",
      titulo: "Validación de Precisión de Inteligencia Artificial",
      responsable: "Helber J. Perez Gutierrez",
      fecha: "Junio 2026",
      descripcion: "Validación cruzada de 5 pliegues (K-Fold CV), cálculo formal de métricas críticas de precisión (Precision, Recall, F1-score y matriz de confusión) sobre la data de prueba.",
      criterioAceptacion: "El algoritmo propuesto debe arrojar un porcentaje de acierto de predicción mínima del 75% (0.75 de F1-score mínimo) sobre los datos históricos de validación.",
      entregables: "Ficha oficial de métricas de precisión y validez con diagramas de confusión debidamente justificados.",
      supuestos: "Contamos con datos de estudiantes retirados que fracasaron materialmente en periodos previos para sintonizar el acierto algorítmico.",
      recursos: "1 Analista IA, Python y librerías estadísticas, Base de datos históricos.",
      duracion: "6 días hábiles",
      categoria: "Modelado ML"
    },
    {
      id: "1.4.1",
      controlAccount: "1.4",
      titulo: "Desarrollo del Motor de Alertas",
      responsable: "Jadira D. Vasquez Castro",
      fecha: "Junio 2026",
      descripcion: "Desarrollo de los triggers lógicos encargados de disparar el envío de correos automatizados (mediante un servicio de envío de correo) a docentes y coordinadores al detectarse alumnos de alto riesgo.",
      criterioAceptacion: "El correo electrónico debe generarse y despacharse antes de transcurrir 24 horas del procesamiento predictivo semanal e indexar histórico de despachos.",
      entregables: "Módulo de código del motor de alertas, Historial relacional de despacho de alertas.",
      supuestos: "Los docentes tienen un correo personal donde recibir las alertas y la Dirección autoriza la lista de direcciones (supuesto S-11 y solicitud SC-09).",
      recursos: "1 Desarrollador Backend, Servicio de envío de correo y acceso a la base de datos.",
      duracion: "10 días hábiles",
      categoria: "Alertas"
    },
    {
      id: "1.4.2.1",
      controlAccount: "1.4.2",
      titulo: "Diseño de Interfaz UX (Mockups)",
      responsable: "Carlos A. Curo Ramos",
      fecha: "Junio 2026",
      descripcion: "Elaboración de la maqueta digital e interfaz de usuario del dashboard principal del SIA-T: semáforos, listados de filtrado y ficha clínica unificada del alumno.",
      criterioAceptacion: "El diseño de alta fidelidad debe ser aprobado explícitamente en taller con al menos dos integrantes docentes antes del desarrollo de software.",
      entregables: "Mockups interactivos en herramienta de diseño Figma que cumplan con la guía visual e iconografía Lucide.",
      supuestos: "El equipo tiene acceso a la plataforma Figma de manera gratuita y cuenta con la paleta tipográfica escolar.",
      recursos: "1 Diseñador de interfaces (UIX), Herramientas Figma, Internet.",
      duracion: "8 días hábiles",
      categoria: "Alertas"
    },
    {
      id: "1.4.2.2",
      controlAccount: "1.4.2",
      titulo: "Desarrollo de Dashboard interactivo",
      responsable: "Carlos A. Curo Ramos",
      fecha: "Junio 2026",
      descripcion: "Desarrollo frontend en React con Next.js y Tailwind CSS del panel que exhibe las semaforizaciones de alertas académicas de los 200 estudiantes del colegio.",
      criterioAceptacion: "La aplicación debe registrar Lighthouse de rendimiento superior al 90% y cargarse en un lapso absoluto inferior a los 3 segundos con la conexión del colegio.",
      entregables: "Código fuente frontend web modular en repositorio Git unificado, Despliegue preliminar de prueba.",
      supuestos: "Los mockups preliminares Figma (paquete 1.4.2.1) cuentan con la aprobación firmada de la gerencia técnica.",
      recursos: "1 Desarrollador Frontend, Entorno Node.js, Librerías React / Tailwind CSS.",
      duracion: "15 días hábiles",
      categoria: "Alertas"
    },
    {
      id: "1.4.2.3",
      controlAccount: "1.4.2",
      titulo: "Pruebas de Usabilidad del Dashboard",
      responsable: "Jhostin J. Galarza Camarena",
      fecha: "Junio 2026",
      descripcion: "Ejecución de simulaciones guiadas de usuario con el personal docente real para validar la interpretación intuitiva de semáforos, clicks y carga emocional de la interfaz.",
      criterioAceptacion: "El 90% de los docentes convocados debe navegar autónomamente el software tras recibir una inducción de un lapso no superior de 2 horas.",
      entregables: "Informe de diagnóstico de usabilidad detallando correcciones funcionales aplicadas e incidentes documentados.",
      supuestos: "El colegio otorga disponibilidad para convocar por lo menos a 3 profesores de aula de primaria y secundaria.",
      recursos: "1 Tester de experiencia de usuario (UX), Docente de prueba, Computadora con la versión de pruebas.",
      duracion: "5 días hábiles",
      categoria: "Alertas"
    },
    {
      id: "1.4.3",
      controlAccount: "1.4",
      titulo: "Módulo de Roles y Autenticación",
      responsable: "Jhostin J. Galarza Camarena",
      fecha: "Junio 2026",
      descripcion: "Desarrollo del módulo de ingreso de credenciales de usuario y control fino de accesos por roles (Director, Auxiliar, Coordinador, Tutor, Psicólogo).",
      criterioAceptacion: "Cada rol tendrá acceso únicamente a las secciones de la base de datos permitidas, encriptando las contraseñas lógicas de forma obligatoria en hash (bcrypt).",
      entregables: "Módulo backend de control de ingreso, Tablas relacionales de usuarios con políticas de accesos.",
      supuestos: "El listado oficial de roles y privilegios está visado por psicología y dirección previamente.",
      recursos: "1 Desarrollador backend de seguridad, Base de datos PostgreSQL, Librería de hashing.",
      duracion: "8 días hábiles",
      categoria: "Alertas"
    },
    {
      id: "1.5.1",
      controlAccount: "1.5",
      titulo: "Despliegue del Sistema en la Nube",
      responsable: "Jadira D. Vasquez Castro",
      fecha: "Junio 2026",
      descripcion: "Configuración del entorno de producción en servicios gestionados en la nube (alojamiento web, base de datos PostgreSQL y tarea programada) y despliegue del sistema desde el repositorio.",
      criterioAceptacion: "El sistema debe estar operativo en el entorno de producción, dentro de los planes gratuitos de los servicios, y los accesos de administración deben quedar entregados al colegio.",
      entregables: "Entorno de producción configurado, reporte técnico del despliegue y registros de ejecución sin errores.",
      supuestos: "Los planes gratuitos de alojamiento y base de datos alcanzan para 200 estudiantes y unos 20 usuarios (supuesto S-05).",
      recursos: "1 responsable de despliegue, cuentas de los servicios en la nube y conexión a internet.",
      duracion: "5 días hábiles",
      categoria: "Despliegue"
    },
    {
      id: "1.5.2",
      controlAccount: "1.5",
      titulo: "Manual de usuario",
      responsable: "Carlos A. Curo Ramos",
      fecha: "Junio 2026",
      descripcion: "Elaboración del manual de usuario dirigido a docentes y coordinadores, con lenguaje accesible, capturas de pantalla y guías paso a paso para el uso del sistema.",
      criterioAceptacion: "El manual debe cubrir todas las funcionalidades del sistema accesibles para docentes y coordinadores, y ser validado por al menos un usuario representativo.",
      entregables: "Manual de usuario en formato PDF/Word, revisado y aprobado por el área de TI de la institución.",
      supuestos: "El sistema está finalizado antes de la redacción del manual. Se cuenta con acceso a capturas de pantalla reales del sistema.",
      recursos: "1 redactor técnico, 1 computadora, procesador de texto, acceso al sistema.",
      duracion: "5 días hábiles",
      categoria: "Capacitación"
    },
    {
      id: "1.5.3",
      controlAccount: "1.5",
      titulo: "Manual técnico",
      responsable: "Helber J. Perez Gutierrez",
      fecha: "Junio 2026",
      descripcion: "Elaboración del manual técnico para el área de TI de la institución, documentando la arquitectura del sistema, instrucciones de instalación, configuración y mantenimiento.",
      criterioAceptacion: "El manual debe permitir al personal de TI instalar, configurar y mantener el sistema de forma autónoma. Validado por el área de TI.",
      entregables: "Manual técnico en formato PDF/Word con diagramas de arquitectura, pasos de instalación y guía de mantenimiento.",
      supuestos: "El área de TI participa en la revisión del manual antes de la entrega final.",
      recursos: "1 redactor técnico, 1 computadora, diagramas de arquitectura del sistema.",
      duracion: "5 días hábiles",
      categoria: "Capacitación"
    },
    {
      id: "1.5.4",
      controlAccount: "1.5",
      titulo: "Planificación de Capacitación básica",
      responsable: "Jhostin J. Galarza Camarena",
      fecha: "Junio 2026",
      descripcion: "Diseño instruccional de la agenda pedagógica de 2 horas para profesores, producción de material multimedia (pantallas paso-a-paso) y formatos impresos de control.",
      criterioAceptacion: "El plan debe estar visado por tutoría y subdirección general antes de convocar a los 16 docentes de aula del colegio.",
      entregables: "Agenda estructurada del taller de inducción de 2 horas, Diapositivas explicativas y lista impresa de firmas.",
      supuestos: "La dirección general escolar asigna la sala de cómputo y horario libre coincidente para congregar al profesorado.",
      recursos: "1 Diseñador educativo, Proyector local, Computadoras del laboratorio escolar.",
      duracion: "3 días hábiles (Preparación técnica)",
      categoria: "Capacitación"
    },
    {
      id: "1.5.5",
      controlAccount: "1.5",
      titulo: "Ejecución de Inducción y Acta de Aceptación",
      responsable: "Jhostin J. Galarza Camarena",
      fecha: "Junio 2026",
      descripcion: "Despliegue del taller de inducción para docentes, psicólogo, auxiliares y firma de la Entrega Formal y Acta de Aceptación de Cierre del software por la directora.",
      criterioAceptacion: "Por lo menos el 80% de los profesores firmarán asistencia, y la promotora directora firmará formalmente el acta de conformidad de Cierre del Proyecto.",
      entregables: "Lista de asistencia certificada con firmas, Acta de conformidad y cierre de proyecto SIA-T firmada en físico.",
      supuestos: "El sistema se mantiene estable durante la capacitación y las pruebas de aceptación.",
      recursos: "4 Integrantes del equipo UNTELS, Sala escolar, Proyector de diapositivas, Acta física de cierre.",
      duracion: "2 días hábiles (Taller de cierre)",
      categoria: "Capacitación"
    },
    {
      id: "1.6.1",
      controlAccount: "1.6",
      titulo: "Pruebas de Integración y Rendimiento",
      responsable: "Equipo del proyecto",
      fecha: "Junio 2026",
      descripcion: "Pruebas de integración entre todos los módulos del sistema (carga de datos, modelo, motor de alertas y tablero) y pruebas de rendimiento para validar los tiempos de respuesta antes del despliegue definitivo.",
      criterioAceptacion: "Todos los módulos funcionan en conjunto sin errores de integración. El tablero carga en menos de 3 segundos y la clasificación semanal se ejecuta sin intervención manual.",
      entregables: "Reporte de pruebas de integración y rendimiento, con los tiempos de carga y de clasificación.",
      supuestos: "Los módulos individuales están desarrollados y disponibles para probarse juntos antes de iniciar este paquete.",
      recursos: "Equipo completo, entorno de pruebas y sistema desplegado en un ambiente previo a producción.",
      duracion: "Semana 17 (Sprint 5)",
      categoria: "Pruebas y piloto"
    },
    {
      id: "1.6.2",
      controlAccount: "1.6",
      titulo: "Piloto y Retroalimentación",
      responsable: "Equipo del proyecto",
      fecha: "Junio 2026",
      descripcion: "Prueba piloto con tres docentes tutores, usando datos académicos reales del colegio durante dos semanas, para recoger sus observaciones y ajustar el sistema antes del despliegue definitivo.",
      criterioAceptacion: "El piloto se realiza con al menos 3 docentes tutores durante 2 semanas seguidas. Las observaciones quedan documentadas y los ajustes se aplican antes del cierre del sprint.",
      entregables: "Informe del piloto con los hallazgos y los ajustes aplicados (entregable E-09).",
      supuestos: "Tres docentes tutores participan de forma voluntaria (supuesto S-07) y hay datos reales disponibles con el consentimiento de los apoderados (supuesto S-06).",
      recursos: "Equipo completo, 3 docentes tutores, sistema en ambiente de pruebas y guía de retroalimentación.",
      duracion: "Semanas 18 a 20 (Sprint 5)",
      categoria: "Pruebas y piloto"
    }
  ];

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

  const filteredEDT = useMemo(() => {
    return edtDictionaryData.filter((wp) => {
      if (edtActiveCat !== "Todas" && wp.categoria !== edtActiveCat) return false;

      if (edtSearch.trim() !== "") {
        const query = edtSearch.toLowerCase();
        return (
          wp.id.toLowerCase().includes(query) ||
          wp.titulo.toLowerCase().includes(query) ||
          wp.descripcion.toLowerCase().includes(query) ||
          wp.responsable.toLowerCase().includes(query) ||
          wp.criterioAceptacion.toLowerCase().includes(query) ||
          wp.entregables.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [edtSearch, edtActiveCat]);

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
            La línea base del alcance está formada por el enunciado del alcance, la estructura de desglose del trabajo (EDT) y su diccionario <Cite r="PMI, 2025" />. El levantamiento en la <strong>I.E.P. Peruano Francés</strong> determinó <strong>12 requisitos funcionales</strong> y <strong>8 no funcionales</strong>, cada uno con cuatro casos de prueba. La lista que se muestra aquí es la misma del enunciado del alcance (ALC-02), versión 3: incluye el alojamiento en la nube y deja fuera el registro de asistencia con código QR y el envío por WhatsApp.
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

      {parte === "edt" && (
      <>
      {/* ── DIAGRAMA DE LA EDT ── */}
      <section id="p05-diagrama-edt" className="py-14 bg-white border-b border-slate-200">
        <div className="px-6 sm:px-10 lg:px-12">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
            07.4 · Desarrollar la estructura del alcance · EDT
          </span>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              Diagrama del Sistema ML (EDT)
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setUseInteractiveFallback(false)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  !useInteractiveFallback
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-650 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                Imagen Oficial
              </button>
              <button
                onClick={() => setUseInteractiveFallback(true)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                  useInteractiveFallback
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-650 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                Estructura Interactiva
              </button>
            </div>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed max-w-4xl text-justify mb-8">
            La Estructura de Desglose del Trabajo (EDT) organiza de forma jerárquica el alcance total del esfuerzo educativo. Cada bloque representa un entregable concreto que mitiga la detección tardía del bajo rendimiento académico en el Colegio Peruano Francés.
          </p>

          {!useInteractiveFallback ? (
            <div className="border border-slate-200 bg-slate-50 rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
              <img
                src={edtImageUri}
                alt="Diagrama del Sistema ML (EDT)"
                referrerPolicy="no-referrer"
                className="max-h-[500px] max-w-full object-contain rounded-lg shadow-sm border bg-white hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
                onError={(e) => {
                  const currentSrc = e.currentTarget.src;
                  if (currentSrc.includes("/Sistema%20ML%20%E2%80%93%20Diagrama%20de%20Proyecto.png") || currentSrc.includes("Sistema%20ML%20%E2%80%93%20Diagrama%20de%20Proyecto.png") || currentSrc.includes("Sistema%20ML%20-%20Diagrama%20de%20Proyecto.png")) {
                    setEdtImageUri("/Sistema ML - Diagrama de Proyecto.png");
                  } else {
                    setUseInteractiveFallback(true);
                  }
                }}
              />
              <p className="text-slate-400 text-[10px] font-mono mt-3 text-center">
                Visualizando archivo de imagen: <code className="font-mono text-[10px] bg-slate-200 px-1 py-0.5 rounded text-slate-700">{edtImageUri.substring(1)}</code>. Use los botones superiores para alternar vistas.
              </p>
            </div>
          ) : (
            /* MAIN INTERACTIVE GRAPHIC WORKSPACE WITH MINIMUM WIDTH TO GUARANTEE INTEGRITY */
            <div className="w-full overflow-x-auto border border-slate-200 rounded-3xl p-6 bg-slate-50/55 shadow-xxs">
            <div className="min-w-[1240px] select-none py-4 relative font-sans">
              
              {/* === NIVEL 1 === */}
              <div className="relative flex items-center mb-6">
                {/* Level bracket left label */}
                <div className="w-[88px] relative flex-shrink-0 flex items-center justify-between font-mono text-[10px] font-black uppercase text-slate-500 border-r border-slate-250 pr-3 mr-4">
                  <span>NIVEL 1</span>
                  <span className="text-[12px] text-slate-350 font-normal">{"{"}</span>
                </div>
                
                {/* Parent node */}
                <div className="flex-1">
                  <div className="w-[520px] mx-auto bg-slate-900 text-white rounded-2xl p-3.5 border border-slate-950 shadow-md flex items-center gap-4 transition-all duration-300 hover:ring-2 hover:ring-slate-900/30">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/15">
                      <Monitor className="w-7 h-7 text-[#22d3ee] animate-pulse" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="bg-[#22d3ee]/20 text-[#22d3ee] text-[9px] font-mono px-2 py-0.5 rounded font-black">PROYECTO</span>
                      </div>
                      <h4 className="font-serif text-[13px] font-black tracking-normal leading-tight">
                        1. Sistema ML — Alerta Temprana Académica
                      </h4>
                      <p className="font-mono text-[9.5px] text-slate-400 leading-none">
                        Colegio Peruano Francés • UNTELS 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nivel 1 to Nivel 2 connecting lines */}
              <div className="relative mb-6">
                <div className="w-0.5 h-6 bg-slate-400 mx-auto"></div>
                <div className="grid grid-cols-5 h-4 relative">
                  {/* Row-span connector horizontal line across columns */}
                  <div className="border-t border-slate-400 w-1/2 ml-auto h-full"></div>
                  <div className="border-t border-slate-400 w-full h-full"></div>
                  <div className="border-t border-slate-400 w-full h-full"></div>
                  <div className="border-t border-slate-400 w-full h-full"></div>
                  <div className="border-t border-slate-400 w-1/2 mr-auto h-full"></div>
                  
                  {/* Vertical ticks pointing to Nivel 2 cards */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-5 pointer-events-none">
                    {[0, 1, 2, 3, 4].map((idx) => (
                      <div key={idx} className="w-0.5 h-4 bg-slate-400 mx-auto"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* === NIVEL 2 === */}
              <div className="relative flex items-center mb-6">
                {/* Level bracket left label */}
                <div className="w-[88px] relative flex-shrink-0 flex items-center justify-between font-mono text-[10px] font-black uppercase text-slate-500 border-r border-slate-250 pr-3 mr-4">
                  <span>NIVEL 2</span>
                  <span className="text-[12px] text-slate-350 font-normal">{"{"}</span>
                </div>
                
                {/* Component cards row */}
                <div className="flex-1 grid grid-cols-5 gap-3.5">
                  {/* 1.1 GESTIÓN */}
                  <div className="border border-blue-300 bg-white hover:bg-blue-50/20 rounded-2xl p-3 flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xs min-h-20">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center border border-blue-200 flex-shrink-0">
                      <FileText className="w-5.5 h-5.5 text-blue-800" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[9px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-black block w-max mb-1">1.1</span>
                      <h5 className="font-serif font-black text-slate-900 text-xs leading-tight">
                        Gestión del Proyecto
                      </h5>
                    </div>
                  </div>

                  {/* 1.2 DATOS */}
                  <div className="border border-cyan-300 bg-white hover:bg-cyan-50/20 rounded-2xl p-3 flex items-center gap-3 transition-all duration-350 hover:-translate-y-0.5 hover:shadow-xs min-h-20">
                    <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center border border-cyan-200 flex-shrink-0">
                      <Database className="w-5.5 h-5.5 text-cyan-800" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[9px] bg-cyan-50 text-cyan-750 px-2 py-0.5 rounded font-black block w-max mb-1">1.2</span>
                      <h5 className="font-serif font-black text-slate-900 text-xs leading-tight">
                        Módulo de Integración de Datos
                      </h5>
                    </div>
                  </div>

                  {/* 1.3 EXPERIMENTO */}
                  <div className="border border-emerald-300 bg-white hover:bg-emerald-50/20 rounded-2xl p-3 flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xs min-h-20">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center border border-emerald-200 flex-shrink-0">
                      <Cpu className="w-5.5 h-5.5 text-emerald-800" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[9px] bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-black block w-max mb-1">1.3</span>
                      <h5 className="font-serif font-black text-slate-900 text-xs leading-tight">
                        Modelo ML Predictivo
                      </h5>
                    </div>
                  </div>

                  {/* 1.4 PORTAFOLIO */}
                  <div className="border border-red-300 bg-white hover:bg-red-50/20 rounded-2xl p-3 flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xs min-h-20">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center border border-red-200 flex-shrink-0">
                      <Bell className="w-5.5 h-5.5 text-red-800" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[9px] bg-red-50 text-red-800 px-2 py-0.5 rounded font-black block w-max mb-1">1.4</span>
                      <h5 className="font-serif font-black text-slate-900 text-xs leading-tight">
                        Alertas y Dashboard
                      </h5>
                    </div>
                  </div>

                  {/* 1.5 DESPLIEGUE */}
                  <div className="border border-purple-300 bg-white hover:bg-purple-50/20 rounded-2xl p-3 flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xs min-h-20">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center border border-purple-200 flex-shrink-0">
                      <Rocket className="w-5.5 h-5.5 text-purple-800" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-[9px] bg-purple-50 text-purple-800 px-2 py-0.5 rounded font-black block w-max mb-1">1.5</span>
                      <h5 className="font-serif font-black text-slate-900 text-xs leading-tight">
                        Implantación y Cierre
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nivel 2 to Nivel 3 sub-connectors */}
              <div className="flex pl-[106px] pointer-events-none select-none">
                <div className="flex-1 grid grid-cols-5 gap-3.5">
                  {/* 1.1 (3 children) lines */}
                  <div>
                    <div className="w-0.5 h-3 bg-blue-300 mx-auto"></div>
                    <div className="grid grid-cols-3 h-3 relative">
                      <div className="border-t border-blue-300 w-1/2 ml-auto"></div>
                      <div className="border-t border-blue-300 w-full"></div>
                      <div className="border-t border-blue-300 w-1/2 mr-auto"></div>
                    </div>
                    <div className="grid grid-cols-3 h-3">
                      <div className="w-0.5 h-3 bg-blue-300 mx-auto"></div>
                      <div className="w-0.5 h-3 bg-blue-300 mx-auto"></div>
                      <div className="w-0.5 h-3 bg-blue-300 mx-auto"></div>
                    </div>
                  </div>

                  {/* 1.2 (2 children) lines */}
                  <div>
                    <div className="w-0.5 h-3 bg-cyan-300 mx-auto"></div>
                    <div className="grid grid-cols-2 h-3 relative">
                      <div className="border-t border-cyan-300 w-1/2 ml-auto"></div>
                      <div className="border-t border-cyan-300 w-1/2 mr-auto"></div>
                    </div>
                    <div className="grid grid-cols-2 h-3">
                      <div className="w-0.5 h-3 bg-cyan-300 mx-auto"></div>
                      <div className="w-0.5 h-3 bg-cyan-300 mx-auto"></div>
                    </div>
                  </div>

                  {/* 1.3 (2 children) lines */}
                  <div>
                    <div className="w-0.5 h-3 bg-emerald-300 mx-auto"></div>
                    <div className="grid grid-cols-2 h-3 relative">
                      <div className="border-t border-emerald-300 w-1/2 ml-auto"></div>
                      <div className="border-t border-emerald-300 w-1/2 mr-auto"></div>
                    </div>
                    <div className="grid grid-cols-2 h-3">
                      <div className="w-0.5 h-3 bg-emerald-300 mx-auto"></div>
                      <div className="w-0.5 h-3 bg-emerald-300 mx-auto"></div>
                    </div>
                  </div>

                  {/* 1.4 (2 children) lines */}
                  <div>
                    <div className="w-0.5 h-3 bg-red-300 mx-auto"></div>
                    <div className="grid grid-cols-2 h-3 relative">
                      <div className="border-t border-red-300 w-1/2 ml-auto"></div>
                      <div className="border-t border-red-300 w-1/2 mr-auto"></div>
                    </div>
                    <div className="grid grid-cols-2 h-3">
                      <div className="w-0.5 h-3 bg-red-300 mx-auto"></div>
                      <div className="w-0.5 h-3 bg-red-300 mx-auto"></div>
                    </div>
                  </div>

                  {/* 1.5 (5 children) lines */}
                  <div>
                    <div className="w-0.5 h-3 bg-purple-300 mx-auto"></div>
                    <div className="grid grid-cols-5 h-3 relative">
                      <div className="border-t border-purple-300 w-1/2 ml-auto"></div>
                      <div className="border-t border-purple-300 w-full"></div>
                      <div className="border-t border-purple-300 w-full"></div>
                      <div className="border-t border-purple-300 w-full"></div>
                      <div className="border-t border-purple-300 w-1/2 mr-auto"></div>
                    </div>
                    <div className="grid grid-cols-5 h-3">
                      {[1, 2, 3, 4, 5].map((x) => (
                        <div key={x} className="w-0.5 h-3 bg-purple-300 mx-auto"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* === NIVEL 3 === */}
              <div className="relative flex items-center mb-6">
                {/* Level bracket left label */}
                <div className="w-[88px] relative flex-shrink-0 flex items-center justify-between font-mono text-[10px] font-black uppercase text-slate-500 border-r border-slate-250 pr-3 mr-4">
                  <span>NIVEL 3</span>
                  <span className="text-[12px] text-slate-350 font-normal">{"{"}</span>
                </div>
                
                {/* Child packages row */}
                <div className="flex-1 grid grid-cols-5 gap-3.5">
                  {/* Under 1.1 (3 children) */}
                  <div className="grid grid-cols-3 gap-1.5 matches-col">
                    {/* 1.1.1 */}
                    <div className="bg-white border hover:border-blue-450 rounded-xl p-2.5 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-blue-200">
                      <span className="font-mono text-[8.5px] font-extrabold text-blue-700 bg-blue-50 px-1 rounded">1.1.1</span>
                      <Calendar className="w-5 h-5 text-blue-600 mt-2" />
                      <h6 className="font-sans text-[10px] font-black text-slate-900 leading-tight mt-2 flex-grow flex items-center justify-center">
                        Cronograma de Hitos
                      </h6>
                    </div>
                    {/* 1.1.2 */}
                    <div className="bg-white border hover:border-blue-450 rounded-xl p-2.5 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-blue-200">
                      <span className="font-mono text-[8.5px] font-extrabold text-blue-700 bg-blue-50 px-1 rounded">1.1.2</span>
                      <TrendingUp className="w-5 h-5 text-blue-600 mt-2" />
                      <h6 className="font-sans text-[10px] font-black text-slate-900 leading-tight mt-2 flex-grow flex items-center justify-center">
                        Informes de Avance
                      </h6>
                    </div>
                    {/* 1.1.3 */}
                    <div className="bg-white border hover:border-blue-450 rounded-xl p-2.5 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-blue-200">
                      <span className="font-mono text-[8.5px] font-extrabold text-blue-700 bg-blue-50 px-1 rounded">1.1.3</span>
                      <FileText className="w-5 h-5 text-blue-600 mt-2" />
                      <h6 className="font-sans text-[10px] font-black text-slate-900 leading-tight mt-2 flex-grow flex items-center justify-center">
                        Actas y Control de Cambios
                      </h6>
                    </div>
                  </div>

                  {/* Under 1.2 (2 children) */}
                  <div className="grid grid-cols-2 gap-2 mt-0">
                    {/* 1.2.1 */}
                    <div className="bg-white border hover:border-cyan-455 rounded-xl p-2.5 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-cyan-200">
                      <span className="font-mono text-[8.5px] font-extrabold text-cyan-800 bg-cyan-50 px-1 rounded">1.2.1</span>
                      <Settings className="w-5 h-5 text-cyan-600 mt-2" />
                      <h6 className="font-sans text-[10px] font-black text-slate-900 leading-tight mt-2 flex-grow flex items-center justify-center">
                        Integración ETL
                      </h6>
                    </div>
                    {/* 1.2.2 */}
                    <div className="bg-white border hover:border-cyan-455 rounded-xl p-2.5 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-cyan-200">
                      <span className="font-mono text-[8.5px] font-extrabold text-cyan-850 bg-cyan-50 px-1 rounded">1.2.2</span>
                      <Check className="w-5 h-5 text-cyan-600 mt-2 bg-cyan-100 rounded-full p-0.5 border border-cyan-300" />
                      <h6 className="font-sans text-[10px] font-black text-slate-900 leading-tight mt-2 flex-grow flex items-center justify-center">
                        Módulo de Integración de Datos
                      </h6>
                    </div>
                  </div>

                  {/* Under 1.3 (2 children) */}
                  <div className="grid grid-cols-2 gap-2 mt-0">
                    {/* 1.3.1 */}
                    <div className="bg-white border hover:border-emerald-450 rounded-xl p-2.5 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-emerald-200">
                      <span className="font-mono text-[8.5px] font-extrabold text-emerald-800 bg-emerald-50 px-1 rounded">1.3.1</span>
                      <Cpu className="w-5 h-5 text-emerald-600 mt-2" />
                      <h6 className="font-sans text-[10px] font-black text-slate-900 leading-tight mt-2 flex-grow flex items-center justify-center">
                        Entrenamiento ML
                      </h6>
                    </div>
                    {/* 1.3.2 */}
                    <div className="bg-white border hover:border-emerald-450 rounded-xl p-2.5 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-emerald-200">
                      <span className="font-mono text-[8.5px] font-extrabold text-emerald-850 bg-emerald-50 px-1 rounded">1.3.2</span>
                      <Gauge className="w-5 h-5 text-emerald-600 mt-2" />
                      <h6 className="font-sans text-[10px] font-black text-slate-900 leading-tight mt-2 flex-grow flex items-center justify-center">
                        Clasificación de Riesgo
                      </h6>
                    </div>
                  </div>

                  {/* Under 1.4 (2 children) */}
                  <div className="grid grid-cols-2 gap-2 mt-0">
                    {/* 1.4.1 */}
                    <div className="bg-white border hover:border-red-450 rounded-xl p-2.5 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-red-200">
                      <span className="font-mono text-[8.5px] font-extrabold text-red-800 bg-red-50 px-1 rounded">1.4.1</span>
                      <Mail className="w-5 h-5 text-red-600 mt-2" />
                      <h6 className="font-sans text-[10px] font-black text-slate-900 leading-tight mt-2 flex-grow flex items-center justify-center">
                        Motor de Alertas
                      </h6>
                    </div>
                    {/* 1.4.2 Dashboard Web */}
                    <div className="bg-white border-2 border-dashed border-red-400 bg-red-50/5 hover:border-solid rounded-xl p-2.5 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs">
                      <span className="font-mono text-[8.5px] font-extrabold text-red-800 bg-red-105 px-1 rounded">1.4.2</span>
                      <Monitor className="w-5 h-5 text-red-600 mt-2" />
                      <h6 className="font-sans text-[10.5px] font-black text-slate-955 leading-tight mt-2 flex-grow flex items-center justify-center">
                        Dashboard Web
                      </h6>
                    </div>
                  </div>

                  {/* Under 1.5 (5 children) */}
                  <div className="grid grid-cols-5 gap-1 mt-0">
                    {/* 1.5.1 */}
                    <div className="bg-white border hover:border-purple-450 rounded-xl p-1.5 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-purple-200">
                      <span className="font-mono text-[7.5px] font-extrabold text-purple-750 bg-purple-50 px-1 rounded">1.5.1</span>
                      <Server className="w-4 h-4 text-purple-600 mt-1" />
                      <p className="font-sans text-[9px] font-bold text-slate-800 leading-tight mt-2 flex-grow flex items-center justify-center">
                        Despliegue del Sistema
                      </p>
                    </div>
                    {/* 1.5.2 */}
                    <div className="bg-white border hover:border-purple-450 rounded-xl p-1.5 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-purple-200">
                      <span className="font-mono text-[7.5px] font-extrabold text-purple-750 bg-purple-50 px-1 rounded">1.5.2</span>
                      <BookOpen className="w-4 h-4 text-purple-600 mt-1" />
                      <p className="font-sans text-[9px] font-bold text-slate-800 leading-tight mt-2 flex-grow flex items-center justify-center">
                        Manual de Usuario
                      </p>
                    </div>
                    {/* 1.5.3 */}
                    <div className="bg-white border hover:border-purple-450 rounded-xl p-1.5 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-purple-200">
                      <span className="font-mono text-[7.5px] font-extrabold text-purple-750 bg-purple-50 px-1 rounded">1.5.3</span>
                      <Code2 className="w-4 h-4 text-purple-600 mt-1" />
                      <p className="font-sans text-[9px] font-bold text-slate-800 leading-tight mt-2 flex-grow flex items-center justify-center">
                        Manual Técnico
                      </p>
                    </div>
                    {/* 1.5.4 */}
                    <div className="bg-white border hover:border-purple-450 rounded-xl p-1.5 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-purple-200">
                      <span className="font-mono text-[7.5px] font-extrabold text-purple-750 bg-purple-50 px-1 rounded">1.5.4</span>
                      <Presentation className="w-4 h-4 text-purple-600 mt-1" />
                      <p className="font-sans text-[9px] font-bold text-slate-800 leading-tight mt-2 flex-grow flex items-center justify-center">
                        Plan de Capacitación
                      </p>
                    </div>
                    {/* 1.5.5 */}
                    <div className="bg-white border hover:border-purple-450 rounded-xl p-1.5 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-purple-200">
                      <span className="font-mono text-[7.5px] font-extrabold text-purple-750 bg-purple-50 px-1 rounded">1.5.5</span>
                      <Users className="w-4 h-4 text-purple-600 mt-1" />
                      <p className="font-sans text-[9px] font-bold text-slate-800 leading-tight mt-2 flex-grow flex items-center justify-center">
                        Capacitación a Docentes y Cierre
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nivel 3 to Nivel 4 red connectors under 1.4.2 */}
              <div className="flex pl-[106px] pointer-events-none select-none">
                <div className="flex-1 grid grid-cols-5 gap-3.5">
                  <div className="col-span-3"></div> {/* Empty under 1.1, 1.2, 1.3 */}
                  
                  {/* Under 1.4 */}
                  <div className="grid grid-cols-2 gap-2">
                    <div></div> {/* Under 1.4.1 */}
                    
                    {/* Under 1.4.2 Dashboard Web */}
                    <div className="relative">
                      <div className="w-0.5 h-6 bg-red-400 mx-auto"></div>
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[240px] z-10">
                        {/* Horizontal red divider */}
                        <div className="grid grid-cols-3 h-3 relative">
                          <div className="border-t-2 border-red-400 w-1/2 ml-auto"></div>
                          <div className="border-t-2 border-red-400 w-full"></div>
                          <div className="border-t-2 border-red-400 w-1/2 mr-auto"></div>
                        </div>
                        {/* Lower vertical prongs */}
                        <div className="grid grid-cols-3 h-3">
                          <div className="w-0.5 h-3 bg-red-400 mx-auto"></div>
                          <div className="w-0.5 h-3 bg-red-400 mx-auto"></div>
                          <div className="w-0.5 h-3 bg-red-400 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div> {/* Under 1.5 */}
                </div>
              </div>

              {/* === NIVEL 4 === */}
              <div className="relative flex items-center mt-6">
                {/* Level bracket left label */}
                <div className="w-[88px] relative flex-shrink-0 flex items-center justify-between font-mono text-[10px] font-black uppercase text-slate-500 border-r border-slate-250 pr-3 mr-4">
                  <span>NIVEL 4</span>
                  <span className="text-[12px] text-slate-350 font-normal">{"{"}</span>
                </div>
                
                {/* Dashboard Nivel 4 sub-grid & Legend bottom-left */}
                <div className="flex-1 grid grid-cols-5 gap-3.5 items-end">
                  
                  {/* LEYENDA BOX IN BOTTOM LEFT (Cols 1 & 2) */}
                  <div className="col-span-2 bg-white border border-slate-250 rounded-2xl p-4 shadow-xxs">
                    <span className="font-mono text-[9px] uppercase tracking-widest font-black text-slate-450 block mb-3 border-b pb-1.5 font-bold">
                      LEYENDA DEL DIAGRAMA EDT
                    </span>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10.5px]">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-slate-900 rounded border border-slate-950 flex-shrink-0 font-bold"></div>
                        <span className="text-slate-700 font-bold">Nivel 1 – Proyecto</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-white rounded border border-blue-400 flex-shrink-0"></div>
                        <span className="text-slate-700">Nivel 2 – Componentes EDT</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-105 rounded border border-blue-300 flex-shrink-0"></div>
                        <span className="text-slate-600">Nivel 3 – Paquetes (Nivel 2)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-white rounded border border-red-400 flex-shrink-0 border-2 border-dashed"></div>
                        <span className="text-slate-700 font-semibold">Nivel 4 – Paquetes (Finales)</span>
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer (Col 3) */}
                  <div></div>

                  {/* Under 1.4.2 Dashboard Sub-packages (Col 4) */}
                  <div className="relative">
                    <div className="absolute -top-[16px] left-1/2 -translate-x-1/2 w-[240px]">
                      <div className="grid grid-cols-3 gap-1.5">
                        {/* 1.4.2.1 */}
                        <div className="bg-white border hover:border-red-500 rounded-xl p-2 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-red-300">
                          <span className="font-mono text-[7.5px] font-extrabold text-red-800 bg-red-50 px-1 rounded">1.4.2.1</span>
                          <Palette className="w-4 h-4 text-red-500 mt-1" />
                          <p className="font-sans text-[8.5px] font-black text-slate-800 leading-snug mt-1.5 flex-grow flex items-center justify-center">
                            Diseño de Interfaz
                          </p>
                        </div>
                        {/* 1.4.2.2 */}
                        <div className="bg-white border hover:border-red-500 rounded-xl p-2 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-red-300">
                          <span className="font-mono text-[7.5px] font-extrabold text-red-800 bg-red-50 px-1 rounded">1.4.2.2</span>
                          <Code2 className="w-4 h-4 text-red-500 mt-1" />
                          <p className="font-sans text-[8.5px] font-black text-slate-800 leading-snug mt-1.5 flex-grow flex items-center justify-center">
                            Desarrollo Frontend
                          </p>
                        </div>
                        {/* 1.4.2.3 */}
                        <div className="bg-white border hover:border-red-500 rounded-xl p-2 flex flex-col items-center justify-between text-center min-h-[142px] transition-all hover:shadow-xxs border-red-300 font-semibold">
                          <span className="font-mono text-[7.5px] font-extrabold text-red-800 bg-red-50 px-1 rounded">1.4.2.3</span>
                          <UserCheck className="w-4 h-4 text-red-500 mt-1" />
                          <p className="font-sans text-[8.5px] font-black text-slate-800 leading-snug mt-1.5 flex-grow flex items-center justify-center">
                            Pruebas de Usuario
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 5 is empty */}
                  <div></div>
                </div>
              </div>

            </div>
          </div>
          )}
        </div>
      </section>

      {/* ── SECCIÓN 5.3: DICCIONARIO DE EDT (SIA-T) ── */}
      <section id="p05-diccionario" className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="px-6 sm:px-10 lg:px-12">
          <span className="font-mono text-xs text-slate-500 uppercase tracking-wider block mb-2">
            07.4 · Desarrollar la estructura del alcance · Diccionario
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-2">
            Diccionario de la EDT del SIA-T
          </h2>
          <p className="text-slate-655 text-sm leading-relaxed max-w-4xl text-justify mb-8 font-medium">
            El Diccionario de EDT describe detalladamente el trabajo técnico obligatorio para cada paquete de trabajo, incluyendo Criterios de Aceptación, Productos Entregables, Supuestos de Partida, Recursos Asignados directos y Duración estimada.
          </p>

          {/* SEARCH & FILTERS FOR EDT DICCIONARIO */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-8 max-w-5xl shadow-xxs">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-450" />
                <input
                  type="text"
                  placeholder="Buscar en Diccionario por ID, título, responsable..."
                  value={edtSearch}
                  onChange={(e) => setEdtSearch(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 px-10 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0d7377]/30 transition-all font-sans"
                />
              </div>

              {/* HORIZONTAL CATEGORY SWITCHER */}
              <div className="flex flex-wrap gap-1.5">
                {["Todas", "Gestión", "Datos", "Modelado ML", "Alertas", "Despliegue", "Capacitación", "Pruebas y piloto"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setEdtActiveCat(cat)}
                    className={`px-3 py-1.5 text-[10px] font-mono font-bold uppercase rounded-lg transition-all cursor-pointer ${
                      edtActiveCat === cat
                        ? "bg-slate-900 text-white shadow-xs"
                        : "bg-slate-50 border border-slate-150 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* DICCIONARIO GRID CARDS */}
          <div className="space-y-4 max-w-5xl">
            {filteredEDT.length === 0 ? (
              <div className="border border-slate-200 rounded-2xl p-10 text-center bg-white max-w-md mx-auto">
                <Info className="w-10 h-10 text-slate-350 mx-auto mb-3" />
                <p className="font-serif font-bold text-slate-700 text-sm mb-1">
                  Ningún paquete de trabajo coincide
                </p>
                <p className="text-xs text-slate-500">
                  Pruebe reiniciando los filtros o escribiendo otros términos en la búsqueda.
                </p>
              </div>
            ) : (
              filteredEDT.map((wp) => {
                const isOpen = edtExpandedId === wp.id;
                return (
                  <div
                    key={wp.id}
                    className={`border rounded-2xl bg-white overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? "border-slate-800 shadow-sm ring-1 ring-slate-800/10"
                        : "border-slate-250 hover:border-slate-350 shadow-xxs"
                    }`}
                  >
                    <div
                      onClick={() => setEdtExpandedId(isOpen ? null : wp.id)}
                      className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-mono text-[10px] font-black bg-slate-100 border px-2 py-0.5 rounded text-slate-700">
                          ID: {wp.id}
                        </span>
                        <div className="min-w-0">
                          <p className="font-serif font-black text-xs sm:text-sm text-slate-950">
                            {wp.titulo}
                          </p>
                          <p className="text-[9px] text-slate-500 font-mono uppercase tracking-wider mt-0.5">
                            Responsable: <span className="font-bold text-slate-700">{wp.responsable}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[9px] bg-slate-50 border border-slate-200 text-slate-650 px-2 py-0.5 rounded hidden sm:inline">
                          Duración: {wp.duracion === "15 días hábiles" ? "15d" : wp.duracion === "10 días hábiles" ? "10d" : "Fase"}
                        </span>
                        <div className="p-1 rounded-lg hover:bg-slate-100 text-slate-400">
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-slate-800" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-500" />
                          )}
                        </div>
                      </div>
                    </div>

                    {isOpen && (
                      <div className="px-5 pb-5 border-t border-slate-100 bg-slate-50/15 text-xs sm:text-xs">
                        <div className="grid md:grid-cols-2 gap-6 pt-5">
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-mono text-[9px] text-slate-450 uppercase tracking-widest font-black mb-1 flex items-center gap-1.5">
                                <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                                DESCRIPCIÓN OPERATIVA DEL TRABAJO
                              </h5>
                              <p className="text-slate-750 text-justify leading-relaxed font-semibold">
                                {wp.descripcion}
                              </p>
                            </div>

                            <div>
                              <h5 className="font-mono text-[9px] text-slate-450 uppercase tracking-widest font-black mb-1 flex items-center gap-1.5">
                                <Sliders className="w-3.5 h-3.5 text-slate-400" />
                                CRITERIOS EXIGIDOS DE ACEPTACIÓN
                              </h5>
                              <p className="text-slate-700 text-justify leading-relaxed">
                                {wp.criterioAceptacion}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h5 className="font-mono text-[9px] text-slate-450 uppercase tracking-widest font-black mb-1">
                                PRODUCTOS ENTREGABLES CLAVE
                              </h5>
                              <p className="text-slate-800 text-justify font-medium">
                                - {wp.entregables}
                              </p>
                            </div>

                            <div className="bg-white border p-3 rounded-xl shadow-xxs grid grid-cols-2 gap-3 text-[11px]">
                              <div>
                                <span className="text-slate-400 font-mono text-[8px] uppercase tracking-wider block">
                                  Cuenta Control
                                </span>
                                <span className="font-bold text-slate-800">{wp.controlAccount}</span>
                              </div>
                              <div>
                                <span className="text-slate-400 font-mono text-[8px] uppercase tracking-wider block">
                                  Última versión
                                </span>
                                <span className="font-bold text-slate-800">{wp.fecha}</span>
                              </div>
                              <div>
                                <span className="text-slate-400 font-mono text-[8px] uppercase tracking-wider block">
                                  Personal Asignado
                                </span>
                                <span className="font-bold text-slate-800 leading-none block mt-0.5 truncate" title={wp.recursos}>{wp.recursos.split(",")[0]}</span>
                              </div>
                              <div>
                                <span className="text-slate-400 font-mono text-[8px] uppercase tracking-wider block">
                                  Duración del esfuerzo
                                </span>
                                <span className="font-bold text-emerald-800">{wp.duracion}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono leading-relaxed text-slate-550 italic text-justify">
                          <strong>SUPUESTOS DE ACTIVIDAD:</strong> "{wp.supuestos}"
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
