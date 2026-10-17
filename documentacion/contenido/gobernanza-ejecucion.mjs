// Dominio de Gobernanza · áreas de enfoque de Ejecución, Monitoreo y control, y Cierre.

import { c, kv, nota, ol, p, sec, tabla, ul } from "../lib/bloques.mjs";
import { PROYECTO as P, R } from "../proyecto.mjs";
import { SPRINTS, fmtIso } from "../datos/calendario.mjs";
import { INTERESADOS, brecha } from "../datos/interesados.mjs";
import { CAMBIOS, CATEGORIAS, HALLAZGOS, INCIDENTES, LECCIONES, contar } from "../datos/registros.mjs";
import { DOC } from "./comunes.mjs";

const COLOR_ESTADO = { Abierto: "amarillo", "En curso": "azul", Cerrado: "verde", Aprobado: "verde", "En evaluación": "amarillo", Rechazado: "rojo", Aplazado: "gris" };
const COLOR_PRIORIDAD = { Alta: "rojo", Media: "amarillo", Baja: "gris" };
const estado = (x) => c(x, COLOR_ESTADO[x], { bold: true, align: "center" });

// ───────────────────────── GOB-06 ─────────────────────────
const porEstado = contar(INCIDENTES, "estado");
const porPrioridad = contar(INCIDENTES, "prioridad");

export const GOB06 = DOC({
  id: "GOB-06",
  version: "1.1",
  fecha: P.fechaCorte,
  versiones: [
    ["1.0", P.fechaEmision, "Versión inicial del documento.", P.director],
    ["1.1", P.fechaCorte, "Se cierran los incidentes IN-03, IN-05 e IN-10 y se actualiza el IN-01.", P.director],
  ],
  titulo: "Registro de incidentes",
  archivo: "GOB-06 Registro de incidentes",
  carpeta: "01 - Gobernanza/1.4 Ejecución",
  dominio: "Gobernanza",
  area: "Ejecución",
  proceso: "Gestionar la ejecución del proyecto",
  salida: "Registro de incidentes",
  apaisado: true,
  resumen:
    "Lleva la cuenta de los problemas que ya ocurrieron y que afectan al proyecto: quién los planteó, quién los atiende, para cuándo y cómo se resolvieron.",
  secciones: [
    sec("1. Uso del registro", [
      p(
        "Un incidente es una situación presente que afecta al proyecto y que necesita una acción; se diferencia de un riesgo en que ya ocurrió. Cada incidente registra su tipo, quién lo planteó y cuándo, su descripción, la prioridad, la persona asignada, la fecha límite, el estado y la solución. El registro se revisa en la reunión diaria y al cierre de cada sprint; un incidente de prioridad alta sin avance en dos días hábiles se eleva al Product Owner.",
      ),
      p(
        "El proyecto inicia el 12/10/2026. Los incidentes de esta primera versión provienen de la revisión de calidad del material heredado (GOB-07) y de lo levantado en la entrevista y en la encuesta.",
      ),
    ]),
    sec("2. Incidentes registrados", [
      tabla(
        ["ID", "Tipo", "Descripción", "Planteado por", "Prioridad", "Asignado a", "Fecha límite", "Estado", "Solución o acción"],
        [5, 9, 27, 10, 7, 9, 8, 7, 18],
        INCIDENTES.map((i) => [
          i.id,
          i.tipo,
          i.descripcion,
          i.origen,
          c(i.prioridad, COLOR_PRIORIDAD[i.prioridad], { align: "center" }),
          i.asignado,
          i.limite,
          estado(i.estado),
          i.accion,
        ]),
        { titulo: `Registro de incidentes al ${P.fechaCorte}`, compacta: true },
      ),
    ]),
    sec("3. Resumen", [
      tabla(
        ["Estado", "Cantidad", "Prioridad", "Cantidad"],
        [30, 20, 30, 20],
        [
          ["Abierto", String(porEstado["Abierto"] ?? 0), "Alta", String(porPrioridad["Alta"] ?? 0)],
          ["En curso", String(porEstado["En curso"] ?? 0), "Media", String(porPrioridad["Media"] ?? 0)],
          ["Cerrado", String(porEstado["Cerrado"] ?? 0), "Baja", String(porPrioridad["Baja"] ?? 0)],
          [c("Total", "gris", { bold: true }), c(String(INCIDENTES.length), "gris", { bold: true }), c("Total", "gris", { bold: true }), c(String(INCIDENTES.length), "gris", { bold: true })],
        ],
        { titulo: "Incidentes por estado y por prioridad" },
      ),
    ]),
  ],
});

// ───────────────────────── GOB-07 ─────────────────────────
const LISTA = [
  ["Los datos del proyecto (equipo, fechas y nombres) coinciden en todos los documentos.", "No cumple", "Tres calendarios y dos equipos distintos."],
  ["Las cifras se repiten sin variación (actividades, niveles de riesgo, paquetes de la EDT).", "No cumple", "40 y 44 actividades; 3 y 4 niveles; 18 y 20 paquetes."],
  ["Cada afirmación tiene una fuente verificable: entrevista, encuesta o registro.", "Cumple en parte", "El uso de Cubicol por los padres aparece con tres cifras."],
  ["Los cálculos son reproducibles.", "Cumple en parte", "PERT y costos, sí; la validez del instrumento, no."],
  ["Lo simulado está rotulado como simulado.", "No cumple", "Valor ganado del cronograma y métricas del prototipo."],
  ["Los documentos citados existen.", "Cumple en parte", "Faltaba el acta de constitución."],
  ["No hay datos personales en material compartido o público.", "No cumple", "Nombres y notas de estudiantes; correos de docentes."],
  ["El modelo se evalúa con datos que no vio y contra un resultado real.", "No cumple", "La etiqueta se deriva de las propias variables."],
  ["La terminología corresponde a la guía de referencia vigente.", "No cumple", "Sexta edición del PMBOK en lugar de la octava."],
  ["Los requisitos tienen criterio de aceptación y casos de prueba.", "Cumple", "20 requisitos y 80 casos de prueba."],
  ["La EDT cubre todo el alcance y tiene diccionario.", "Cumple en parte", "Seis componentes; el número de paquetes varía entre documentos."],
  ["El cronograma respeta el calendario del cliente.", "No cumple", "El piloto caía en vacaciones escolares."],
];
const COLOR_RESULTADO = { Cumple: "verde", "Cumple en parte": "amarillo", "No cumple": "rojo" };
const resumenLista = LISTA.reduce((a, [, r]) => ({ ...a, [r]: (a[r] ?? 0) + 1 }), {});
const porCategoria = contar(HALLAZGOS, "cat");
let acumulado = 0;
const pareto = Object.entries(porCategoria)
  .sort((a, b) => b[1] - a[1])
  .map(([cat, n]) => {
    acumulado += n;
    return [CATEGORIAS[cat], String(n), `${((n / HALLAZGOS.length) * 100).toFixed(1)} %`, `${((acumulado / HALLAZGOS.length) * 100).toFixed(1)} %`];
  });
const rango = (cat) => {
  const ids = HALLAZGOS.filter((x) => x.cat === cat).map((x) => x.id);
  return `${ids[0]} a ${ids[ids.length - 1]}`;
};

export const GOB07 = DOC({
  id: "GOB-07",
  titulo: "Informe de calidad N.º 1",
  archivo: "GOB-07 Informe de calidad 01",
  carpeta: "01 - Gobernanza/1.5 Calidad",
  dominio: "Gobernanza",
  area: "Ejecución",
  proceso: "Gestionar el aseguramiento de la calidad",
  salida: "Informe de calidad y solicitudes de cambio",
  resumen:
    "Revisión de aseguramiento de la calidad del material heredado de la fase de formulación. Aplica una lista de verificación, registra los hallazgos, analiza sus causas y deriva las acciones.",
  secciones: [
    sec("1. Objetivo y alcance de la revisión", [
      p(
        "Antes de emitir los documentos del nuevo periodo, el equipo revisó el material heredado de la fase de formulación para comprobar que los procesos del proyecto se están llevando de forma coherente con lo que esperan los interesados. La revisión se hizo el 10/10/2026 y cubrió los documentos de la carpeta del proyecto, el blog anterior y el código del prototipo.",
      ),
      tabla(
        ["Herramienta", "Cómo se aplicó"],
        [30, 70],
        [
          ["Lista de verificación", "Doce criterios aplicados al conjunto de documentos y al prototipo."],
          ["Análisis de documentos", "Lectura cruzada de los documentos para encontrar cifras y afirmaciones que no coinciden."],
          ["Diagrama de Pareto", "Agrupación de los hallazgos por categoría para ver dónde se concentran."],
          ["Análisis de causa raíz", "Identificación de las causas comunes que explican varios hallazgos."],
        ],
        { titulo: "Herramientas de aseguramiento utilizadas" },
      ),
    ]),
    sec("2. Lista de verificación", [
      tabla(
        ["N.º", "Criterio", "Resultado", "Observación"],
        [6, 44, 16, 34],
        LISTA.map(([criterio, r, obs], i) => [String(i + 1), criterio, c(r, COLOR_RESULTADO[r], { bold: true, align: "center" }), obs]),
        { titulo: "Lista de verificación de la documentación y del prototipo" },
      ),
      p(
        `Resultado: ${resumenLista["Cumple"] ?? 0} criterio cumple, ${resumenLista["Cumple en parte"] ?? 0} cumplen en parte y ${resumenLista["No cumple"] ?? 0} no cumplen.`,
      ),
    ]),
    sec(
      "3. Hallazgos",
      [
        tabla(
          ["ID", "Categoría", "Hallazgo", "Evidencia", "Acción"],
          [5, 14, 36, 27, 18],
          HALLAZGOS.map((x) => [x.id, CATEGORIAS[x.cat], x.hallazgo, x.evidencia, x.accion]),
          { titulo: `Hallazgos de la revisión (${HALLAZGOS.length})`, compacta: true },
        ),
      ],
      { apaisada: true },
    ),
    sec("4. Análisis de los hallazgos", [
      tabla(["Categoría", "Hallazgos", "Porcentaje", "Acumulado"], [46, 16, 19, 19], pareto, {
        titulo: "Pareto de hallazgos por categoría",
        fuente: `Total: ${HALLAZGOS.length} hallazgos.`,
      }),
      p(
        "Las dos primeras categorías reúnen más de la mitad de los hallazgos y tienen el mismo origen: los datos comunes del proyecto se escribieron por separado en cada documento.",
      ),
      tabla(
        ["Causa raíz", "Hallazgos que explica", "Acción de mejora"],
        [40, 22, 38],
        [
          ["No había una fuente única de datos del proyecto: cada documento se escribió por separado.", `${rango("A")}; H-11 a H-13`, "Ficha única del proyecto y documentos generados desde un mismo contenido."],
          ["Las entregas se armaron contra el plazo del curso, sin una revisión cruzada final.", "H-10, H-15 a H-18, H-20 y H-21", "Lista de verificación antes de cada entrega (ALC-03)."],
          ["El prototipo se construyó para la demostración antes de contar con datos reales.", `H-19; ${rango("E")}`, "Plan de validación con datos reales (SC-08) y rótulo de demostración."],
          ["No se definieron reglas para los datos personales al inicio.", rango("D"), "Reglas de datos en GOB-05 y en el plan de comunicaciones (INT-03)."],
          ["El cambio de equipo y de calendario no pasó por control de cambios.", "H-01 y H-08", "Registro de cambios (GOB-10)."],
        ],
        { titulo: "Análisis de causa raíz" },
      ),
    ]),
    sec("5. Acciones derivadas", [
      ul(
        `Se registraron ${CAMBIOS.length} solicitudes de cambio (GOB-10): ${CAMBIOS.filter((x) => x.estado === "Aprobado").length} aprobadas por el equipo y ${CAMBIOS.filter((x) => x.estado === "En evaluación").length} en evaluación.`,
        `Se registraron ${INCIDENTES.length} incidentes (GOB-06), de los cuales ${INCIDENTES.filter((x) => x.estado === "Cerrado").length} ya están cerrados.`,
        "Los hallazgos de coherencia quedan atendidos con los cambios SC-01 a SC-07. Los del modelo dependen de SC-08, en evaluación. Los de datos personales tienen abierto el incidente IN-04.",
      ),
    ]),
    sec("6. Conclusión", [
      p(
        "El material heredado es sólido en requisitos, trazabilidad y estimación, pero no era coherente entre documentos ni distinguía lo real de lo simulado. Con los documentos de este periodo esas diferencias quedan corregidas o registradas. La próxima revisión de calidad se hará al cierre del Sprint 1 y verificará el avance de los incidentes abiertos.",
      ),
    ]),
  ],
});

// ───────────────────────── GOB-08 ─────────────────────────
export const GOB08 = DOC({
  id: "GOB-08",
  titulo: "Registro de lecciones aprendidas",
  archivo: "GOB-08 Lecciones aprendidas",
  carpeta: "01 - Gobernanza/1.6 Conocimiento",
  dominio: "Gobernanza",
  area: "Ejecución",
  proceso: "Gestionar el conocimiento del proyecto",
  salida: "Registro de lecciones aprendidas",
  apaisado: true,
  resumen:
    "Recoge lo que el equipo aprendió en la fase de formulación para aplicarlo en esta fase: la situación, su impacto, la recomendación y la acción tomada.",
  secciones: [
    sec("1. Cómo se gestiona el conocimiento", [
      p(
        "El conocimiento explícito del proyecto se guarda en el repositorio y en la carpeta «Documentación»; el tácito se comparte en la reunión diaria y en las retrospectivas. Las lecciones se registran al cierre de cada sprint y cuando ocurre algo que conviene no repetir. Al cerrar el proyecto, el registro se entrega al colegio junto con los manuales.",
      ),
      p(
        "Esta primera versión reúne las lecciones de la fase de formulación; sirvió para transferir el conocimiento a los dos integrantes que se incorporaron al equipo.",
      ),
    ]),
    sec("2. Lecciones registradas", [
      tabla(
        ["ID", "Categoría", "Situación", "Impacto", "Lección o recomendación", "Acción tomada"],
        [6, 11, 30, 7, 26, 20],
        LECCIONES.map((l) => [l.id, l.cat, l.situacion, c(l.impacto, COLOR_PRIORIDAD[l.impacto === "Alto" ? "Alta" : "Media"], { align: "center" }), l.leccion, l.accion]),
        { titulo: `Lecciones aprendidas de la fase de formulación (${LECCIONES.length})`, compacta: true },
      ),
    ]),
  ],
});

// ───────────────────────── GOB-09 (necesita la lista de documentos) ─────────────────────────
export function crearGOB09(documentos) {
  const enNivel = INTERESADOS.filter((i) => brecha(i) <= 0).length;
  const porDominio = documentos.reduce((a, d) => ({ ...a, [d.dominio ?? "Transversal"]: (a[d.dominio ?? "Transversal"] ?? 0) + 1 }), {});
  const total = documentos.length + 1;
  return DOC({
    id: "GOB-09",
    titulo: "Informe de desempeño N.º 1",
    archivo: "GOB-09 Informe de desempeño 01",
    carpeta: "01 - Gobernanza/1.7 Desempeño",
    dominio: "Gobernanza",
    area: "Monitoreo y control",
    proceso: "Monitorear y controlar el desempeño del proyecto",
    salida: "Informe de desempeño del trabajo",
    resumen:
      "Primer informe de estado. El proyecto todavía no inicia sus sprints, así que fija el punto de partida: qué está listo, qué falta y qué debe decidir la patrocinadora.",
    secciones: [
      sec("1. Datos del informe", [
        kv(
          ["Informe", "N.º 1 — Estado de arranque"],
          ["Periodo que cubre", "Preparación del inicio, hasta el 10/10/2026"],
          ["Fecha de corte", "10/10/2026"],
          ["Elaborado por", `${P.director}, director del proyecto`],
          ["Dirigido a", "Patrocinadora, docente asesor y equipo del proyecto"],
          ["Próximo informe", `Cierre del Sprint 1, ${fmtIso(SPRINTS[0].revision)}`],
        ),
      ]),
      sec("2. Resumen", [
        p(
          `El proyecto inicia el ${P.inicio}. A la fecha de corte no hay trabajo de sprints que medir, por lo que este informe no calcula índices de valor ganado: describe el estado de la preparación, los cambios aprobados y las decisiones que se necesitan de la patrocinadora.`,
        ),
        p(
          `La planificación de gobernanza, interesados, alcance y cronograma está emitida (${total} documentos). El asunto más serio es la calidad del producto: el prototipo heredado no tiene un modelo validado con datos reales.`,
        ),
      ]),
      sec("3. Estado por dominio", [
        tabla(
          ["Dominio", "Estado", "Situación"],
          [20, 14, 66],
          [
            ["Gobernanza", c("Verde", "verde", { bold: true, align: "center" }), "Acta de constitución emitida para firma; plan para la dirección, registros y control de cambios vigentes."],
            ["Interesados", c("Amarillo", "amarillo", { bold: true, align: "center" }), `${INTERESADOS.length} interesados identificados; ${enNivel} están en el nivel de involucramiento deseado.`],
            ["Alcance", c("Amarillo", "amarillo", { bold: true, align: "center" }), "Enunciado del alcance v3 y planes emitidos. La EDT y su diccionario están por unificar (SC-10)."],
            ["Cronograma", c("Verde", "verde", { bold: true, align: "center" }), "Línea base v3 aprobada por el equipo; el inicio se mantiene en la fecha prevista."],
            ["Finanzas", c("Amarillo", "amarillo", { bold: true, align: "center" }), "Montos vigentes; falta distribuirlos con el calendario nuevo."],
            ["Recursos", c("Sin evaluar", "gris", { bold: true, align: "center" }), "Dominio aún no desarrollado."],
            ["Riesgo", c("Sin evaluar", "gris", { bold: true, align: "center" }), "Dominio aún no desarrollado; hay una lista de riesgos de alto nivel en GOB-01."],
            ["Calidad del producto", c("Rojo", "rojo", { bold: true, align: "center" }), "El prototipo calcula el riesgo con reglas y no con un modelo validado (IN-03)."],
          ],
          { titulo: "Semáforo de estado al 10/10/2026" },
        ),
      ]),
      sec("4. Avance de los entregables de gestión", [
        tabla(
          ["Dominio", "Documentos emitidos"],
          [60, 40],
          [
            ...Object.entries({ ...porDominio, Gobernanza: (porDominio.Gobernanza ?? 0) + 1 }).map(([d, n]) => [d, String(n)]),
            [c("Total", "gris", { bold: true }), c(String(total), "gris", { bold: true })],
          ],
          { titulo: "Documentos de gestión emitidos", fuente: "Incluye este informe. La lista completa está en BASE-01." },
        ),
        ul(
          `Blog del proyecto publicado en ${P.enlaces.blog} y conectado al repositorio.`,
          `Registro de cambios con ${CAMBIOS.length} solicitudes e incidentes registrados: ${INCIDENTES.length}.`,
        ),
      ]),
      sec("5. Hitos próximos", [
        tabla(
          ["Hito", "Fecha", "Condición para cumplirlo"],
          [34, 16, 50],
          [
            ["Reunión de inicio y firma del acta", P.inicio, "Disponibilidad de la patrocinadora."],
            ["Segunda entrevista y acuerdo de exportación de datos", "23/10/2026", "Disponibilidad de la gestora de Cubicol y del encargado de TI."],
            ["Hito 1 · Revisión del Sprint 1", fmtIso(SPRINTS[0].revision), "Variables validadas con los docentes y arquitectura definida."],
            ["Hito 2 · Revisión del Sprint 2", fmtIso(SPRINTS[1].revision), "Datos reales entregados por el colegio."],
          ],
          { titulo: "Hitos de las próximas ocho semanas" },
        ),
      ]),
      sec("6. Decisiones que se solicitan a la patrocinadora", [
        ol(
          "Firmar el acta de constitución (GOB-02).",
          "Designar a la persona que actuará como Product Owner.",
          "Dar su conformidad a los cambios SC-02 (nuevo calendario) y SC-03 (alojamiento en la nube).",
          "Autorizar las exportaciones de notas de Cubicol y la segunda entrevista.",
          "Definir cómo se informará a los apoderados sobre el proyecto y el uso de los datos.",
        ),
      ]),
      sec("7. Cómo se medirá el desempeño desde el Sprint 1", [
        tabla(
          ["Medida", "Fórmula", "Lectura"],
          [30, 30, 40],
          [
            ["Valor planificado (PV)", "Avance planificado × duración total", "Trabajo que debía estar hecho a la fecha."],
            ["Valor ganado (EV)", "Avance real × duración total", "Trabajo realmente terminado y aceptado."],
            ["Variación del cronograma (SV)", "EV − PV", "Negativa: retraso."],
            ["Índice del cronograma (SPI)", "EV ÷ PV", "Menor de 0.90: acción correctiva."],
            ["Variación del costo (CV)", "EV − costo real", "Negativa: sobrecosto."],
            ["Índice del costo (CPI)", "EV ÷ costo real", "Menor de 0.90: acción correctiva."],
          ],
          { titulo: "Medidas del valor ganado", fuente: "El avance se mide en días de trabajo: la suma de las duraciones esperadas de la línea base es de 159.2 días." },
        ),
        nota(
          "Las cifras de valor ganado que aparecen en la versión anterior del cronograma corresponden a un ejercicio de simulación del curso anterior. No son mediciones de este proyecto.",
          "simulado",
        ),
      ]),
    ],
  });
}

// ───────────────────────── GOB-10 ─────────────────────────
export const GOB10 = DOC({
  id: "GOB-10",
  version: "1.1",
  fecha: P.fechaCorte,
  versiones: [
    ["1.0", P.fechaEmision, "Versión inicial del documento.", P.director],
    ["1.1", P.fechaCorte, "Conformidad de la patrocinadora con SC-02 y SC-03 y nuevo cambio SC-11.", P.director],
  ],
  titulo: "Plan de gestión de cambios y registro de cambios",
  archivo: "GOB-10 Plan y registro de cambios",
  carpeta: "01 - Gobernanza/1.8 Cambios",
  dominio: "Gobernanza",
  area: "Monitoreo y control",
  proceso: "Evaluar e implementar cambios",
  salida: "Solicitudes de cambio aprobadas y registro de cambios",
  resumen:
    "Establece cómo se solicita, evalúa y decide un cambio, y registra los cambios que separan la versión anterior del proyecto de la versión vigente.",
  secciones: [
    sec("1. Propósito y alcance", [
      p(
        "Todo cambio a un documento controlado, a un entregable o a una línea base se evalúa de forma integrada: qué efecto tiene sobre el alcance, el cronograma, los costos, la calidad, los interesados y el riesgo. Así se evita que un ajuste hecho en un documento contradiga a los demás.",
      ),
      ul(
        "**Sujetos a control de cambios:** acta de constitución, líneas base de alcance, cronograma y costos, requisitos, planes de gestión y entregables ya aceptados.",
        "**No requieren solicitud:** ajustes de redacción, y la reorganización del trabajo dentro de un sprint que no altere su objetivo.",
      ),
    ]),
    sec("2. Roles y niveles de aprobación", [
      tabla(
        ["Tipo de cambio", "Quién decide", "Plazo"],
        [46, 34, 20],
        [
          ["No afecta ninguna línea base (por ejemplo, una corrección de datos)", "Director del proyecto", "2 días hábiles"],
          ["Afecta el contenido de un sprint o la prioridad de los requisitos", "Product Owner", "Hasta la siguiente planificación"],
          ["Afecta una línea base, el presupuesto o los objetivos del acta", "Comité de cambios: patrocinadora, Product Owner y director del proyecto", "5 días hábiles"],
          ["Afecta entregables académicos del curso", "Docente asesor", "Siguiente clase"],
        ],
        { titulo: "Niveles de aprobación" },
      ),
      p(`${R.carlos} lleva el registro de cambios y verifica que cada cambio aprobado se aplique en todos los documentos afectados.`),
    ]),
    sec("3. Flujo de un cambio", [
      ol(
        "Cualquier interesado plantea el cambio al director del proyecto, que lo registra con un código SC.",
        "El equipo analiza el efecto sobre el alcance, el cronograma, los costos, la calidad, los interesados y el riesgo, y las alternativas.",
        "Decide quien corresponda según la sección 2: aprobar, aplazar o rechazar.",
        "La decisión se comunica al solicitante y se anota en el registro.",
        "Si se aprueba, se actualizan los documentos y las líneas base afectados y se sube su versión.",
        "En la siguiente revisión de sprint se verifica que el cambio quedó aplicado.",
      ),
    ]),
    sec("4. Formato de solicitud de cambio", [
      kv(
        ["Código y fecha", "SC-00 · dd/mm/aaaa"],
        ["Solicitante", "Nombre y rol"],
        ["Descripción del cambio", "Qué se propone cambiar"],
        ["Justificación", "Por qué es necesario y qué pasa si no se hace"],
        ["Tipo", "Acción correctiva, acción preventiva, reparación de defecto o actualización"],
        ["Efecto", "Alcance · cronograma · costos · calidad · interesados · riesgo"],
        ["Alternativas consideradas", "Otras opciones y por qué se descartan"],
        ["Decisión", "Aprobado, aplazado o rechazado · quién decide · fecha"],
        ["Documentos a actualizar", "Lista y nueva versión"],
      ),
    ]),
    sec(
      "5. Registro de cambios",
      [
        tabla(
          ["ID", "Cambio", "Origen", "Efecto", "Estado", "Decisión", "Aplicación"],
          [5, 14, 20, 23, 8, 14, 16],
          CAMBIOS.map((x) => [x.id, x.titulo, x.origen, x.impacto, estado(x.estado), x.decision, x.aplicacion]),
          { titulo: `Registro de cambios al ${P.fechaCorte}`, compacta: true },
        ),
        nota(
          "Los cambios SC-02 y SC-03 alteran líneas base. Fueron aprobados por el equipo para poder planificar y la patrocinadora dio su conformidad en la reunión de inicio del 12/10/2026 (GOB-12). En esa reunión se aprobó también el SC-11.",
          "info",
        ),
        nota(
          "El cronograma anterior incluía una lista de solicitudes de cambio numeradas SC-01 a SC-06 que formaban parte de un ejercicio de simulación. No pertenecen a este registro.",
          "simulado",
        ),
      ],
      { apaisada: true },
    ),
    sec("6. Efecto de los cambios aprobados sobre los documentos", [
      tabla(
        ["Documento o línea base", "Cambios que lo afectan", "Situación"],
        [36, 22, 42],
        [
          ["Acta de constitución (GOB-02)", "SC-01, SC-02, SC-03", c("Emitida con los cambios incorporados", "verde")],
          ["Enunciado del alcance (ALC-02)", "SC-03, SC-04", c("Versión 3 emitida", "verde")],
          ["EDT y diccionario", "SC-01, SC-03, SC-10", c("Responsables y despliegue actualizados; unificación pendiente", "amarillo")],
          ["Requisitos y matriz de trazabilidad", "SC-03, SC-08, SC-09", c("Requisitos de despliegue actualizados; SC-08 y SC-09 en evaluación", "amarillo")],
          ["Línea base del cronograma (CRO-01)", "SC-01, SC-02, SC-03, SC-06", c("Versión 3 emitida", "verde")],
          ["Línea base de costos", "SC-02, SC-03", c("Pendiente: fechas y categoría de servicios", "rojo")],
          ["Análisis de alternativas (blog)", "SC-03", c("Nota de actualización publicada; reevaluación en GOB-05", "amarillo")],
          ["Prototipo", "SC-04, SC-08", c("Pendiente (Sprints 3 y 4)", "rojo")],
        ],
        { titulo: "Aplicación de los cambios" },
      ),
    ]),
  ],
});

// ───────────────────────── GOB-11 ─────────────────────────
export const GOB11 = DOC({
  id: "GOB-11",
  titulo: "Informe de cierre de la fase de formulación",
  archivo: "GOB-11 Cierre de la fase de formulación",
  carpeta: "01 - Gobernanza/1.9 Cierre de fase",
  dominio: "Gobernanza",
  area: "Cierre",
  proceso: "Cerrar el proyecto o fase",
  salida: "Informe final de la fase y transferencia de sus resultados",
  resumen:
    "Cierra formalmente la fase de formulación y evaluación: qué se entregó, qué queda pendiente y cómo se transfirió el trabajo al equipo actual.",
  secciones: [
    sec("1. Datos de la fase", [
      kv(
        ["Fase que se cierra", "Formulación y evaluación del proyecto"],
        ["Periodo", "Abril a julio de 2026, en el curso Formulación y Evaluación de Proyectos TI"],
        ["Equipo de la fase", "Cuatro integrantes; dos continúan en el equipo actual"],
        ["Fecha del informe", P.fechaEmision],
        ["Motivo del cierre", "Fin del curso anterior e inicio de la fase de dirección del proyecto con un equipo parcialmente renovado"],
      ),
    ]),
    sec("2. Objetivo de la fase y resultado", [
      p(
        "La fase debía diagnosticar el problema del colegio, elegir una alternativa de solución y dejar planteadas las líneas base de alcance, cronograma y costos. El objetivo se cumplió: el problema central quedó formulado y sustentado, se seleccionó una alternativa con una matriz ponderada y se elaboraron las tres líneas base, además de un prototipo de demostración.",
      ),
      p(
        "La revisión de calidad (GOB-07) encontró que esos resultados no eran coherentes entre sí en varios datos. Esas diferencias se corrigieron o se registraron como cambios antes de iniciar la fase actual.",
      ),
    ]),
    sec("3. Entregables de la fase", [
      tabla(
        ["Entregable", "Dónde está", "Situación al cierre"],
        [38, 28, 34],
        [
          ["Diagnóstico: entrevista, encuesta y análisis de interesados", "Carpeta de archivos del proyecto y blog", "Completo. El registro de interesados se actualizó en INT-01."],
          ["Análisis del problema y del objetivo (marco lógico)", "Blog, capítulos 01 y 02", "Completo."],
          ["Análisis de alternativas y Design Thinking", "Carpetas de las semanas 9 y 10; blog, capítulo 03", "Completo. El alojamiento cambió por SC-03."],
          ["Requisitos, matriz de trazabilidad, declaración del alcance, EDT y diccionario", "Carpeta de la semana 11; blog, capítulo 07", "Completo. La EDT está por unificar (SC-10)."],
          ["Línea base del cronograma, versión 2", "Carpeta de la semana 14", "Reemplazada por la versión 3 (CRO-01)."],
          ["Línea base de costos, versión 2, y propuesta al cliente", "Carpeta de la semana 15", "Vigente en sus montos."],
          ["Prototipo web y cuaderno de entrenamiento", "Carpeta de la semana 14 y prototipo en línea", "Demostración con datos simulados (IN-03)."],
          ["Blog del proyecto", "Versión anterior en línea", "Migrado al blog actual."],
        ],
        { titulo: "Entregables de la fase de formulación" },
      ),
    ]),
    sec("4. Verificación del cierre", [
      tabla(
        ["Actividad de cierre", "Resultado", "Observación"],
        [40, 16, 44],
        [
          ["Revisar que no quede trabajo sin registrar", c("Hecho", "verde", { align: "center" }), "Los pendientes están en la sección 5."],
          ["Verificar que no queden incidentes sin dueño", c("Hecho", "verde", { align: "center" }), `${INCIDENTES.length} incidentes trasladados al registro (GOB-06).`],
          ["Obtener la aceptación formal del cliente", c("No consta", "rojo", { align: "center" }), "No existe un acta firmada por el colegio para los entregables de la fase."],
          ["Medir la satisfacción de los interesados", c("No medida", "amarillo", { align: "center" }), "Se medirá en la revisión del Sprint 1."],
          ["Archivar la información de forma ordenada", c("Hecho", "verde", { align: "center" }), "Carpetas por semana; la documentación nueva está en «Documentación»."],
          ["Liberar y reasignar recursos", c("Hecho", "verde", { align: "center" }), "Dos integrantes dejaron el equipo y dos se incorporaron (SC-01)."],
          ["Registrar las lecciones aprendidas", c("Hecho", "verde", { align: "center" }), `${LECCIONES.length} lecciones en GOB-08.`],
          ["Emitir el informe final de la fase", c("Hecho", "verde", { align: "center" }), "Este documento."],
        ],
        { titulo: "Lista de verificación del cierre de fase" },
      ),
    ]),
    sec("5. Pendientes que pasan a la fase actual", [
      tabla(
        ["Pendiente", "Dónde se atiende"],
        [60, 40],
        [
          ["Firma del acta de constitución por la patrocinadora", "Reunión de inicio; GOB-02"],
          ["Segunda entrevista: soporte técnico y gestora de Cubicol", "Sprint 1; IN-05"],
          ["Acceso a datos reales y digitalización de asistencia e incidencias", "Sprints 1 y 2; IN-01 e IN-02"],
          ["Validación del modelo con datos reales", "Sprint 3; SC-08"],
          ["Tratamiento de los datos personales", "Antes del piloto; IN-04 y supuesto S-06"],
          ["Distribución de la línea base de costos con el calendario nuevo", "Dominio de Finanzas; SC-02"],
          ["Unificación de la EDT y su diccionario", "Sprint 1; SC-10"],
          ["Aclarar con la Dirección el ofrecimiento de guías para padres", "Reunión de inicio; IN-10"],
        ],
        { titulo: "Pendientes transferidos" },
      ),
    ]),
    sec("6. Transferencia al equipo actual", [
      ul(
        `El código y el blog pasaron a un repositorio del proyecto: ${P.enlaces.repositorio}.`,
        `El blog se publica en ${P.enlaces.blog}.`,
        "La documentación vigente está en la carpeta «Documentación», ordenada por dominio y proceso.",
        "Los documentos de la fase de formulación se conservan como registro histórico y no se modifican; las diferencias con la versión vigente constan en el registro de cambios (GOB-10).",
      ),
    ]),
    sec("7. Conclusión", [
      p(
        "La fase de formulación queda cerrada. Entregó el sustento del proyecto y sus líneas base; no dejó constancia de la aceptación del colegio, que se obtendrá con la firma del acta de constitución. El proyecto continúa con la fase de dirección según el plan GOB-04.",
      ),
    ]),
  ],
});
