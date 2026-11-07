// Estimación de los recursos (dominio de Recursos, proceso «Estimar los recursos»; documento REC-01).
// Las horas del equipo salen de las actividades del cronograma (datos/actividades.mjs y calendario.mjs) con la
// misma dedicación que usa el archivo de MS Project; así el documento, el blog y Project dicen lo mismo.

import { SPRINTS, diasHabiles, programar } from "./calendario.mjs";
import { PAQUETES } from "./requisitos.mjs";
import { R } from "../proyecto.mjs";

export const EQUIPO = [R.jhostin, R.helber, R.jadira, R.carlos];
// Recursos de MS Project (generar-project.mjs) y grupos de la RBS.
export const RECURSOS_PROJECT = [
  { nombre: R.jhostin, iniciales: "JG", grupo: "Equipo del proyecto" },
  { nombre: R.helber, iniciales: "HP", grupo: "Equipo del proyecto" },
  { nombre: R.jadira, iniciales: "JV", grupo: "Equipo del proyecto" },
  { nombre: R.carlos, iniciales: "CC", grupo: "Equipo del proyecto" },
  { nombre: "Dirección del colegio", iniciales: "DIR", grupo: "Colegio" },
  { nombre: "Coordinación académica", iniciales: "COO", grupo: "Colegio" },
  { nombre: "Docentes tutores", iniciales: "DOC", grupo: "Colegio" },
];
const ALIAS = { "Dirección": "Dirección del colegio", docentes: "Docentes tutores", "Coordinación académica": "Coordinación académica" };
// Cada responsable de la tabla de actividades se separa por «+»; «Equipo del proyecto» son los cuatro integrantes.
export const recursosDe = (responsable) =>
  responsable.split("+").map((s) => s.trim()).flatMap((s) => (s === "Equipo del proyecto" ? EQUIPO : [ALIAS[s] ?? s]));

// Supuestos de la estimación.
export const HORAS_DIA = 8;
export const DEDICACION = 0.5; // estudiantes a tiempo parcial: medio día hábil por actividad asignada
export const HORAS_DAILY = 0.25; // reunión diaria de 15 minutos, todo el equipo, desde el Sprint 2
export const LINEAS_DE_CODIGO = { valor: 4204, fecha: "07/11/2026", detalle: "líneas no vacías del repositorio del sistema (Python, TypeScript, CSS, SQL y la tarea nocturna)" };

const r1 = (n) => Math.round(n * 10) / 10;

// Horas de cada integrante por sprint: actividades (días hábiles × 8 h × dedicación) y reunión diaria.
export function horasDelEquipo() {
  const prog = programar();
  const tabla = EQUIPO.map((nombre) => ({ nombre, sprints: SPRINTS.map(() => 0), daily: SPRINTS.map(() => 0) }));
  for (const a of prog) {
    const dias = diasHabiles(a.inicio, a.fin);
    if (a.continua) {
      // La reunión diaria corre en cada sprint desde que empieza.
      SPRINTS.forEach((sp, i) => {
        const desde = new Date(Math.max(a.inicio.getTime(), Date.parse(`${sp.inicio}T00:00:00Z`)));
        const hasta = new Date(Math.min(a.fin.getTime(), Date.parse(`${sp.fin}T00:00:00Z`)));
        if (desde <= hasta) tabla.forEach((t) => (t.daily[i] += diasHabiles(desde, hasta) * HORAS_DAILY));
      });
      continue;
    }
    for (const nombre of recursosDe(a.responsable)) {
      const t = tabla.find((x) => x.nombre === nombre);
      if (t) t.sprints[a.sprint - 1] += dias * HORAS_DIA * DEDICACION;
    }
  }
  return tabla.map((t) => ({
    nombre: t.nombre,
    porSprint: t.sprints.map((h, i) => r1(h + t.daily[i])),
    actividades: r1(t.sprints.reduce((s, h) => s + h, 0)),
    reunionDiaria: r1(t.daily.reduce((s, h) => s + h, 0)),
    total: r1(t.sprints.reduce((s, h) => s + h, 0) + t.daily.reduce((s, h) => s + h, 0)),
  }));
}

// Horas disponibles de cada integrante por sprint: días hábiles del sprint (sin feriados) × 8 h × dedicación.
export const capacidadPorSprint = () =>
  SPRINTS.map((sp) => r1(diasHabiles(new Date(`${sp.inicio}T00:00:00Z`), new Date(`${sp.fin}T00:00:00Z`)) * HORAS_DIA * DEDICACION));

// Sprints en que la carga estimada de un integrante supera sus horas disponibles.
export function sobreasignaciones() {
  const cap = capacidadPorSprint();
  return horasDelEquipo().flatMap((t) => t.porSprint.map((h, i) => ({ nombre: t.nombre, sprint: i + 1, horas: h, capacidad: cap[i] })).filter((x) => x.horas > x.capacidad));
}

// Horas-persona del equipo por paquete de la EDT (suma ascendente desde las actividades).
export function horasPorPaquete() {
  const prog = programar().filter((a) => !a.continua);
  return PAQUETES.map((p) => {
    const acts = prog.filter((a) => a.paquete === p.id);
    const horas = acts.reduce((s, a) => s + diasHabiles(a.inicio, a.fin) * HORAS_DIA * DEDICACION * recursosDe(a.responsable).filter((x) => EQUIPO.includes(x)).length, 0);
    const colegio = [...new Set(acts.flatMap((a) => recursosDe(a.responsable).filter((x) => !EQUIPO.includes(x))))];
    return { id: p.id, nombre: p.nombre, actividades: acts.length, horas: r1(horas), colegio };
  }).filter((p) => p.actividades > 0);
}

// Participación del colegio: actividades en que intervienen la Dirección, la coordinación o los docentes.
export function participacionDelColegio() {
  return programar()
    .filter((a) => recursosDe(a.responsable).some((x) => !EQUIPO.includes(x)))
    .map((a) => ({ id: a.id, descripcion: a.descripcion, quienes: recursosDe(a.responsable).filter((x) => !EQUIPO.includes(x)), sprint: a.sprint, inicio: a.inicio, fin: a.fin }));
}

// Modelo de costos constructivos (COCOMO básico, modo orgánico): esfuerzo E = 2,4 · KLOC^1,05 personas-mes y
// duración D = 2,5 · E^0,38 meses. Se aplica al código actual y al tamaño previsto del sistema completo.
export function cocomo(avanceProducto) {
  const kloc = LINEAS_DE_CODIGO.valor / 1000;
  const esfuerzo = (k) => 2.4 * k ** 1.05;
  const duracion = (e) => 2.5 * e ** 0.38;
  const previsto = kloc / (avanceProducto / 100);
  return {
    actual: { kloc: r1(kloc), esfuerzo: r1(esfuerzo(kloc)), duracion: r1(duracion(esfuerzo(kloc))) },
    previsto: { kloc: r1(previsto), esfuerzo: r1(esfuerzo(previsto)), duracion: r1(duracion(esfuerzo(previsto))) },
  };
}

// Recursos físicos, tecnológicos, de datos e instalaciones (requisitos de recursos no humanos).
export const RECURSOS_MATERIALES = [
  { grupo: "Físicos", recurso: "Laptops del equipo", cantidad: "4 (una por integrante)", para: "Desarrollo, documentación y reuniones", costo: "Propias", cuando: "Todo el proyecto" },
  { grupo: "Físicos", recurso: "Conexión a internet", cantidad: "4 hogares y la red del colegio", para: "Trabajo remoto, servicios en la nube y demostraciones", costo: "Propia y del colegio", cuando: "Todo el proyecto" },
  { grupo: "Físicos", recurso: "Proyector o pantalla del colegio", cantidad: "1", para: "Taller con docentes, piloto y capacitación", costo: "Del colegio", cuando: "Sprints 1, 5 y 6" },
  { grupo: "Tecnológicos", recurso: "Python, scikit-learn, FastAPI, React y Vite", cantidad: "—", para: "Construcción del sistema y del modelo", costo: "Software libre", cuando: "Sprints 2 a 6" },
  { grupo: "Tecnológicos", recurso: "Vercel (página) y Render (API)", cantidad: "1 proyecto cada uno", para: "Publicar el sistema", costo: "Plan gratuito", cuando: "Desde el Sprint 2" },
  { grupo: "Tecnológicos", recurso: "Base de datos gestionada en la nube", cantidad: "1", para: "Datos reales en producción", costo: "Plan gratuito", cuando: "Sprint 6" },
  { grupo: "Tecnológicos", recurso: "GitHub y GitHub Actions", cantidad: "2 repositorios", para: "Código, versiones y validación nocturna de datos", costo: "Gratuito (repositorios públicos)", cuando: "Todo el proyecto" },
  { grupo: "Tecnológicos", recurso: "Servicio de envío de correo", cantidad: "1", para: "Alertas al docente tutor (SC-09)", costo: "Plan gratuito", cuando: "Sprint 4" },
  { grupo: "Tecnológicos", recurso: "Google Drive", cantidad: "1 carpeta compartida", para: "Documentos de gestión en Word", costo: "Gratuito", cuando: "Todo el proyecto" },
  { grupo: "Tecnológicos", recurso: "MS Project", cantidad: "1 equipo con licencia", para: "Abrir y mantener el cronograma (archivo XML)", costo: "Licencia de estudiante o laboratorio de la universidad", cuando: "Al actualizar el cronograma" },
  { grupo: "Datos", recurso: "Exportaciones de notas de Cubicol", cantidad: "Una por entrega, tres antes del 04/12/2026", para: "Integración y validación de datos (E-01)", costo: "Las entrega el colegio", cuando: "Sprints 2 y 3" },
  { grupo: "Datos", recurso: "Base pública Student Performance (UCI)", cantidad: "1", para: "Entrenamiento del modelo de referencia", costo: "Libre", cuando: "Sprint 3" },
  { grupo: "Instalaciones", recurso: "Aula o laboratorio del colegio", cantidad: "1, dos horas", para: "Capacitación a tutores y coordinadores", costo: "Del colegio", cuando: "Sprint 6" },
];

// Estructura de desglose de recursos (RBS).
export const RBS = [
  { id: "1", nombre: "Recursos humanos", hijos: [
    { id: "1.1", nombre: "Equipo del proyecto", hijos: [
      { id: "1.1.1", nombre: `${R.jhostin}: director del proyecto y Scrum Master` },
      { id: "1.1.2", nombre: `${R.helber}: modelo de Machine Learning y Product Owner` },
      { id: "1.1.3", nombre: `${R.jadira}: datos, alertas y despliegue` },
      { id: "1.1.4", nombre: `${R.carlos}: tablero web y control de cambios` },
    ] },
    { id: "1.2", nombre: "Colegio", hijos: [
      { id: "1.2.1", nombre: "Promotora Directora (patrocinadora)" },
      { id: "1.2.2", nombre: "Coordinación académica" },
      { id: "1.2.3", nombre: "Docentes tutores" },
      { id: "1.2.4", nombre: "Gestora de Cubicol y encargado de TI" },
    ] },
  ] },
  { id: "2", nombre: "Recursos tecnológicos", hijos: [
    { id: "2.1", nombre: "Software libre de desarrollo y Machine Learning" },
    { id: "2.2", nombre: "Servicios en la nube (página, API, base de datos y correo)" },
    { id: "2.3", nombre: "Herramientas de gestión (GitHub, Google Drive y MS Project)" },
  ] },
  { id: "3", nombre: "Recursos físicos", hijos: [
    { id: "3.1", nombre: "Laptops del equipo" },
    { id: "3.2", nombre: "Conexión a internet" },
    { id: "3.3", nombre: "Proyector o pantalla del colegio" },
  ] },
  { id: "4", nombre: "Datos", hijos: [
    { id: "4.1", nombre: "Exportaciones de notas de Cubicol" },
    { id: "4.2", nombre: "Base consolidada de notas del colegio" },
    { id: "4.3", nombre: "Base pública Student Performance (UCI)" },
  ] },
  { id: "5", nombre: "Instalaciones", hijos: [{ id: "5.1", nombre: "Aula o laboratorio del colegio para el taller y la capacitación" }] },
];

// Herramientas y técnicas del proceso (guía de clase) y cómo se usó cada una.
export const HERRAMIENTAS = [
  ["Juicio de expertos", "Sí", "Helber Perez, docente del colegio, validó qué participación de los docentes y de la coordinación es realista."],
  ["Estimación ascendente", "Sí", "Las horas se calculan por actividad del cronograma y se suman por paquete de la EDT, por integrante y por sprint."],
  ["Estimación análoga", "Sí", "Las duraciones PERT vienen del cronograma del curso anterior, que ya estimó estas mismas actividades."],
  ["Estimación paramétrica", "Sí", "Reglas fijas: 8 horas por día hábil al 50 % de dedicación y 15 minutos por día de reunión diaria."],
  ["Análisis de alternativas", "Sí", "Servidor en el colegio frente a servicios gratuitos en la nube; se eligió la nube (SC-03)."],
  ["Sistema de información para la dirección de proyectos", "Sí", "El archivo de MS Project del cronograma tiene los 7 recursos y sus 82 asignaciones."],
  ["Reuniones", "Sí", "Reunión de inicio con la Dirección (12/10/2026) y revisión del Sprint 1 con el Product Owner (06/11/2026)."],
  ["Recopilación de datos: entrevistas", "Sí", "Entrevista a la Dirección (abril de 2026) sobre el personal y los datos disponibles."],
  ["Inteligencia artificial", "Sí", "El equipo usó un asistente de IA para organizar y calcular las estimaciones a partir del cronograma; el equipo revisó cada resultado."],
  ["Modelo de costos constructivos (COCOMO)", "Sí", "Se aplicó al tamaño del código del sistema como contraste del esfuerzo (sección 5)."],
  ["Análisis predictivo", "No", "No hay historial de proyectos del equipo para predecir recursos. El producto sí usa un modelo predictivo, pero para el riesgo académico."],
  ["Realidad virtual", "No", "No aporta a un proyecto de software de este tamaño."],
  ["Algoritmos genéticos", "No", "Con 45 actividades y 4 integrantes, la asignación se revisa a mano; no hace falta optimizarla con algoritmos."],
];
