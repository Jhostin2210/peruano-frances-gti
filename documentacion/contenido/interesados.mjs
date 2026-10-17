// Dominio de Interesados: identificar, planificar, gestionar y monitorear el involucramiento.
// Los tres procesos de comunicaciones del mismo dominio están en comunicaciones.mjs.

import { c, h, kv, nota, ol, p, sec, tabla, ul } from "../lib/bloques.mjs";
import { PROYECTO as P, R } from "../proyecto.mjs";
import { SPRINTS, fmtIso } from "../datos/calendario.mjs";
import { INTERESADOS, NIVELES, brecha, cuadrante, prominencia } from "../datos/interesados.mjs";
import { DOC } from "./comunes.mjs";

const base = { dominio: "Interesados" };
const nombres = (lista) => lista.map((i) => `${i.id} ${i.nombre}`);
const enCuadrante = (q) => INTERESADOS.filter((i) => cuadrante(i) === q);
const COLOR_CUADRANTE = { "Gestionar de cerca": "verde", "Mantener satisfechos": "azul", "Mantener informados": "naranja", Monitorear: "amarillo" };
const COLOR_NIVEL = { Alto: "rojo", Alta: "rojo", Media: "amarillo", Bajo: "gris", Baja: "gris" };

// ───────────────────────── INT-01 ─────────────────────────
const categorias = ["Definitivo", "Dominante", "Dependiente", "Peligroso", "Durmiente", "Discrecional", "Demandante"];
const DEFINICION = {
  Definitivo: "Poder, urgencia y legitimidad: atención prioritaria e inmediata.",
  Dominante: "Poder y legitimidad: sus expectativas deben atenderse.",
  Dependiente: "Urgencia y legitimidad, sin poder: dependen de otros para ser atendidos.",
  Peligroso: "Poder y urgencia, sin legitimidad.",
  Durmiente: "Solo poder: no lo ejercen mientras no se vean afectados.",
  Discrecional: "Solo legitimidad: se les atiende por decisión del proyecto.",
  Demandante: "Solo urgencia.",
};
const marca = (v) => (v ? c("Sí", "teal", { align: "center" }) : c("—", undefined, { align: "center" }));

export const INT01 = DOC({
  ...base,
  id: "INT-01",
  titulo: "Registro y análisis de interesados",
  archivo: "INT-01 Registro de interesados",
  carpeta: "02 - Interesados/2.1 Identificar",
  area: "Iniciación",
  proceso: "Identificar a los interesados",
  salida: "Registro de interesados",
  apaisado: true,
  resumen:
    "Identifica a todas las personas y organizaciones que afectan al proyecto o son afectadas por él, las evalúa y las clasifica con cuatro técnicas: poder e interés, cubo, dirección de la influencia y prominencia.",
  secciones: [
    sec("1. Cómo se identificó a los interesados", [
      tabla(
        ["Técnica", "Aplicación en el proyecto", "Fecha"],
        [22, 60, 18],
        [
          ["Análisis de documentos", "Organigrama del colegio, formato de incidencias, caso de negocio y documentos de la fase de formulación.", "Abril a octubre de 2026"],
          ["Entrevista", "Entrevista semiestructurada a la Promotora Directora, grabada y transcrita.", "24/04/2026"],
          ["Cuestionario", "Encuesta en línea respondida por 6 docentes.", "15/05/2026"],
          ["Tormenta de ideas", "Sesión del equipo para completar la lista con proveedores, reguladores y el propio equipo.", "10/10/2026"],
          ["Análisis de interesados", "Evaluación de poder, interés, influencia y actitud de cada uno.", "10/10/2026"],
        ],
        { titulo: "Técnicas de identificación" },
      ),
      p(
        `El registro anterior tenía 9 interesados, todos del colegio. Esta versión identifica ${INTERESADOS.length}: se separaron cargos que estaban agrupados y se agregaron el equipo, el docente asesor, los proveedores y los reguladores. La identificación se repite al inicio de cada sprint.`,
      ),
    ]),
    sec("2. Registro de interesados", [
      tabla(
        ["ID", "Interesado", "Cargo o relación", "Tipo", "Contacto", "Rol en el proyecto", "Expectativa principal"],
        [5, 13, 17, 7, 16, 20, 22],
        INTERESADOS.map((i) => [i.id, i.nombre, i.cargo, i.tipo, i.contacto, i.rol, i.expectativa]),
        {
          titulo: "Información de identificación",
          compacta: true,
          fuente: "Tipo: interno o externo respecto del colegio. Por reserva, el registro publicado identifica cargos y no nombres de personas.",
        },
      ),
    ]),
    sec("3. Evaluación", [
      tabla(
        ["ID", "Interesado", "Poder", "Interés", "Influencia", "Actitud", "Dirección de la influencia", "Estrategia"],
        [6, 26, 9, 9, 10, 14, 13, 13],
        INTERESADOS.map((i) => [
          i.id,
          i.nombre,
          c(i.poder, COLOR_NIVEL[i.poder], { align: "center" }),
          c(i.interes, COLOR_NIVEL[i.interes], { align: "center" }),
          c(i.influencia, COLOR_NIVEL[i.influencia], { align: "center" }),
          i.actitud,
          i.direccion,
          c(cuadrante(i), COLOR_CUADRANTE[cuadrante(i)]),
        ]),
        {
          titulo: "Información de evaluación y clasificación",
          compacta: true,
          fuente: "Poder: capacidad de decidir o de bloquear. Interés: cuánto le afecta el resultado. Influencia: peso de su opinión sobre los demás.",
        },
      ),
    ]),
    sec("4. Matriz de poder e interés", [
      tabla(
        ["", "Interés bajo", "Interés alto"],
        [14, 43, 43],
        [
          [
            c("Poder alto", "gris", { bold: true }),
            c(["**Mantener satisfechos**", ...nombres(enCuadrante("Mantener satisfechos"))], COLOR_CUADRANTE["Mantener satisfechos"]),
            c(["**Gestionar de cerca**", ...nombres(enCuadrante("Gestionar de cerca"))], COLOR_CUADRANTE["Gestionar de cerca"]),
          ],
          [
            c("Poder bajo", "gris", { bold: true }),
            c(["**Monitorear**", ...nombres(enCuadrante("Monitorear"))], COLOR_CUADRANTE["Monitorear"]),
            c(["**Mantener informados**", ...nombres(enCuadrante("Mantener informados"))], COLOR_CUADRANTE["Mantener informados"]),
          ],
        ],
        { titulo: "Matriz de poder e interés" },
      ),
      p(
        "La gestora de Cubicol es el caso que más cuidado requiere: tiene poder, porque de ella dependen las exportaciones de datos, y su interés en el proyecto todavía es bajo. Los docentes tienen poco poder formal, pero de su uso diario depende que el sistema sirva.",
      ),
    ]),
    sec("5. Cubo de interesados", [
      p(
        "El cubo agrega una tercera dimensión, la actitud, a las de poder e interés. Solo se considera partidario a quien lo ha expresado; el resto figura como neutral hasta tener evidencia.",
      ),
      tabla(
        ["Poder", "Interés", "Actitud", "Tipo en el cubo", "Interesados"],
        [10, 10, 14, 26, 40],
        [
          ["Alto", "Alto", "Partidaria", c("Influyente activo partidario", "verde"), "I-01 Promotora Directora, I-12 Equipo del proyecto, I-13 Docente asesor"],
          ["Alto", "Alto", "Neutral", c("Influyente activo neutral", "amarillo"), "I-02 Subdirector, I-03 Coordinación académica, I-08 Encargado de soporte de TI"],
          ["Alto", "Bajo", "Neutral", c("Influyente pasivo neutral", "amarillo"), "I-07 Gestora de Cubicol, I-14 Cubicol, I-16 UGEL 01 y MINEDU, I-17 Autoridad de Protección de Datos"],
          ["Bajo", "Alto", "Partidaria", c("Insignificante activo partidario", "verde"), "I-05 Docentes tutores y auxiliares (los encuestados)"],
          ["Bajo", "Alto", "Neutral", c("Insignificante activo neutral", "amarillo"), "I-04 Jefa de Normas, I-06 Psicología, I-10 Estudiantes, I-11 Padres y apoderados"],
          ["Bajo", "Bajo", "Neutral", c("Insignificante pasivo neutral", "gris"), "I-09 Personal administrativo, I-15 Proveedores de nube e internet"],
        ],
        { titulo: "Clasificación con el cubo de interesados" },
      ),
      p(
        "No se ha identificado a ningún interesado resistente. Los dos lugares donde podría aparecer resistencia son la gestora de Cubicol, si el proyecto le suma trabajo, y los docentes con menos manejo de tecnología.",
      ),
    ]),
    sec("6. Dirección de la influencia", [
      tabla(
        ["Dirección", "A quiénes corresponde", "Interesados"],
        [16, 38, 46],
        ["Ascendente", "Descendente", "Lateral", "Hacia afuera"].map((d) => [
          c(d, "teal", { bold: true }),
          {
            Ascendente: "Quienes autorizan o evalúan: alta dirección del cliente, patrocinadora y docente asesor.",
            Descendente: "El equipo que realiza el trabajo.",
            Lateral: "Pares del director del proyecto en el colegio, con quienes se comparten información y recursos.",
            "Hacia afuera": "Usuarios finales, familias, proveedores y reguladores.",
          }[d],
          nombres(INTERESADOS.filter((i) => i.direccion === d)).join("; "),
        ]),
        { titulo: "Dirección de la influencia respecto del director del proyecto" },
      ),
    ]),
    sec("7. Modelo de prominencia", [
      p(
        "El modelo de prominencia clasifica a los interesados según tres atributos: poder para imponer su voluntad, urgencia de su necesidad y legitimidad de su participación. De la combinación salen siete categorías.",
      ),
      tabla(
        ["ID", "Interesado", "Poder", "Urgencia", "Legitimidad", "Categoría"],
        [8, 42, 11, 11, 12, 16],
        INTERESADOS.map((i) => [i.id, i.nombre, marca(i.p), marca(i.u), marca(i.l), c(prominencia(i), prominencia(i) === "Definitivo" ? "verde" : undefined, { bold: prominencia(i) === "Definitivo" })]),
        { titulo: "Atributos y categoría de cada interesado", compacta: true },
      ),
      tabla(
        ["Categoría", "Significado", "Interesados"],
        [16, 44, 40],
        categorias.map((cat) => {
          const lista = INTERESADOS.filter((i) => prominencia(i) === cat);
          return [c(cat, undefined, { bold: true }), DEFINICION[cat], lista.length ? lista.map((i) => i.id).join(", ") : "Ninguno"];
        }),
        { titulo: "Resumen por categoría de prominencia" },
      ),
      p(
        "Los docentes, los estudiantes y los padres son interesados dependientes: su necesidad es urgente y legítima, pero no tienen poder para lograr que se atienda. El proyecto debe representarlos ante quienes sí lo tienen.",
      ),
    ]),
    sec("8. Priorización", [
      p("Con las cuatro clasificaciones, el orden de atención de los interesados es el siguiente:"),
      ol(
        "**I-01 Promotora Directora.** Definitiva y patrocinadora: sin su firma y sus decisiones el proyecto no avanza.",
        "**I-07 Gestora de Cubicol e I-08 Encargado de soporte de TI.** Controlan los datos y la operación futura; todavía no han sido entrevistados.",
        "**I-03 Coordinación académica.** Candidata a Product Owner.",
        "**I-05 Docentes tutores y auxiliares.** Usuarios principales; de ellos depende la adopción.",
        "**I-11 Padres y apoderados.** Su consentimiento es condición para usar datos reales.",
        "**I-13 Docente asesor.** Evalúa el proyecto.",
        "Los demás se atienden según el plan de involucramiento (INT-02).",
      ),
    ]),
    sec("9. Cambios respecto al registro anterior", [
      tabla(
        ["Cambio", "Motivo"],
        [50, 50],
        [
          ["De 9 a 17 interesados.", "Faltaban el equipo, el docente asesor, los proveedores y los reguladores."],
          ["«Área de TI» se separó en gestora de Cubicol y encargado de soporte.", "Son personas distintas, con poder e interés distintos."],
          ["El área de TI ya no figura como entrevistada.", "La transcripción muestra que solo se entrevistó a la directora."],
          ["Los docentes pasan de «mantener involucrados» a «mantener informados», con acciones de participación.", "Se aplicó la matriz de dos niveles; su peso real se refleja en la influencia y en la priorización."],
          ["Los porcentajes de avance del involucramiento se reemplazaron por la matriz de niveles.", "No tenían una forma de medición; ver INT-05."],
        ],
        { titulo: "Diferencias con el registro de la fase de formulación" },
      ),
    ]),
  ],
});

// ───────────────────────── INT-02 ─────────────────────────
const filaMatriz = (i) => [
  `${i.id} ${i.nombre}`,
  ...NIVELES.map((n) => {
    const actual = i.actual === n;
    const deseado = i.deseado === n;
    if (actual && deseado) return c("C · D", "verde", { bold: true, align: "center" });
    if (actual) return c("C", "amarillo", { bold: true, align: "center" });
    if (deseado) return c("D", "azul", { bold: true, align: "center" });
    return "";
  }),
];
const matrizInvolucramiento = (titulo) =>
  tabla(["Interesado", ...NIVELES], [35, 13, 13, 13, 13, 13], INTERESADOS.map(filaMatriz), {
    titulo,
    compacta: true,
    fuente:
      "C: nivel actual. D: nivel deseado. Desconocedor: no conoce el proyecto. Reticente: lo conoce y se resiste. Neutral: lo conoce y no apoya ni se opone. De apoyo: lo conoce y apoya. Líder: lo conoce y participa activamente en su éxito.",
  });

export const INT02 = DOC({
  ...base,
  id: "INT-02",
  titulo: "Plan de involucramiento de los interesados",
  archivo: "INT-02 Plan de involucramiento",
  carpeta: "02 - Interesados/2.2 Planificar",
  area: "Planificación",
  proceso: "Planificar el involucramiento de los interesados",
  salida: "Plan de involucramiento de los interesados",
  resumen:
    "Define cómo llevar a cada interesado desde su nivel de involucramiento actual hasta el que el proyecto necesita, con acciones, responsables y momentos concretos.",
  secciones: [
    sec("1. Objetivo", [
      p(
        "El plan busca que cada interesado participe en la medida que el proyecto necesita: que la Dirección lidere, que quienes tienen los datos colaboren, que los docentes adopten el sistema y que las familias estén informadas. Parte del registro de interesados (INT-01) y se actualiza al inicio de cada sprint o cuando cambia la comunidad de interesados.",
      ),
    ]),
    sec("2. Matriz de evaluación del involucramiento", [
      matrizInvolucramiento("Nivel de involucramiento actual y deseado al 10/10/2026"),
      p(
        `${INTERESADOS.filter((i) => brecha(i) <= 0).length} de ${INTERESADOS.length} interesados están en el nivel deseado. La mayor distancia está en la coordinación académica, que pasaría de no conocer el proyecto a liderarlo como Product Owner.`,
      ),
    ]),
    sec("3. Estrategias y acciones por interesado", [
      tabla(
        ["Interesado", "Estrategia", "Acciones", "Responsable"],
        [22, 16, 46, 16],
        INTERESADOS.map((i) => [`${i.id} ${i.nombre}`, c(cuadrante(i), COLOR_CUADRANTE[cuadrante(i)]), i.acciones, i.responsable]),
        { titulo: "Plan de acción por interesado", compacta: true },
      ),
    ]),
    sec("4. Expectativas que hay que gestionar", [
      tabla(
        ["Expectativa", "De quién", "Situación en el alcance", "Cómo se gestiona"],
        [26, 16, 28, 30],
        [
          ["Registrar la asistencia con código QR.", "Promotora Directora", "Fuera del alcance de esta versión.", "Descartado en la reunión de inicio (12/10/2026)."],
          ["Guías para que los padres ingresen a Cubicol.", "Promotora Directora", "Ofrecido en la entrevista; no figura en ninguna línea base (IN-10).", "Descartado en la reunión de inicio (12/10/2026); incidente IN-10 cerrado."],
          ["Juegos interactivos para los estudiantes en la plataforma.", "Promotora Directora", "Fuera del alcance: Cubicol es de un tercero.", "Descartado en la reunión de inicio (12/10/2026)."],
          ["Que el sistema no aumente la carga de trabajo.", "Docentes y gestora de Cubicol", "Requisito de usabilidad RNF-01.", "Mostrar el tablero en el Sprint 4 y medir el tiempo de uso en el piloto."],
          ["Aviso inmediato a los padres.", "Dirección y padres", "El sistema calcula el riesgo cada semana; el comunicado sale en 24 horas.", "Explicar la frecuencia semanal y no prometer tiempo real."],
          ["Predicciones exactas.", "Todos los usuarios", "El modelo no garantiza 100 % de acierto.", "Presentar el nivel de riesgo como una señal para revisar el caso, no como un diagnóstico."],
        ],
        { titulo: "Expectativas y su tratamiento" },
      ),
    ]),
    sec("5. Reglas para mantener el plan", [
      ul(
        "El director del proyecto revisa la matriz al cierre de cada sprint y registra el resultado en el informe de seguimiento (INT-05).",
        "Un interesado nuevo se agrega al registro en cuanto se identifica.",
        "Si un interesado clave baja de nivel o aparece resistencia, se registra un incidente.",
        "Las estrategias individuales son de uso interno del equipo: la versión que se publica en el blog describe cargos, no personas.",
      ),
    ]),
  ],
});

// ───────────────────────── INT-04 ─────────────────────────
export const INT04 = DOC({
  ...base,
  id: "INT-04",
  titulo: "Bitácora de involucramiento y reglas básicas",
  archivo: "INT-04 Bitácora de involucramiento",
  carpeta: "02 - Interesados/2.3 Gestionar",
  area: "Ejecución",
  proceso: "Gestionar el involucramiento de los interesados",
  salida: "Registro de las actividades de involucramiento y actualizaciones de los documentos del proyecto",
  resumen:
    "Registra lo que efectivamente se ha hecho con los interesados, con su evidencia, y fija las reglas de trato que el equipo sigue con el colegio.",
  secciones: [
    sec("1. Reglas básicas", [
      p("El equipo acordó estas reglas para su relación con los interesados. Se presentarán a la Dirección en la reunión de inicio."),
      ul(
        "Toda visita al colegio se coordina antes con la Dirección y respeta el horario de clases.",
        "Las reuniones tienen un objetivo, duran lo previsto y terminan con acuerdos escritos.",
        "Se graba o se fotografía solo con permiso de quienes aparecen.",
        "Lo que un docente o un padre comenta en una entrevista no se atribuye a su nombre en documentos públicos.",
        "No se promete nada que no esté en el alcance; un pedido nuevo se anota y se evalúa como solicitud de cambio.",
        "El integrante del equipo que es docente del colegio no responde encuestas ni valida entregables en nombre de los docentes.",
        "Ante un desacuerdo, primero se escucha, luego se revisa el dato y, si no hay acuerdo, se eleva según el plan de comunicaciones.",
      ),
    ]),
    sec("2. Actividades realizadas", [
      tabla(
        ["Fecha", "Actividad", "Interesados", "Resultado", "Evidencia"],
        [11, 23, 16, 32, 18],
        [
          [
            "24/04/2026",
            "Visita de campo y entrevista semiestructurada",
            "I-01 Promotora Directora",
            "Se confirmó que la asistencia y las incidencias se registran en físico, que las notas están en Cubicol y que pocos padres ingresan a la plataforma. La Dirección expresó disposición a recibir propuestas y a facilitar datos.",
            "Transcripción, video y fotografías",
          ],
          [
            "24/04/2026",
            "Recojo de documentos del colegio",
            "I-01 Promotora Directora",
            "Organigrama y formato de reporte de incidencia escolar.",
            "Fotografías de los documentos",
          ],
          [
            "15/05/2026",
            "Encuesta en línea a docentes",
            "I-05 Docentes (6 de 16)",
            "Los 6 reconocen detección tardía; 5 de 6 usarían una plataforma de monitoreo.",
            "Hoja de respuestas y gráficos",
          ],
          [
            "15/05/2026",
            "Validación del cuestionario por juicio de dos expertos",
            "Dos jueces",
            "88 de 100 puntos: validez de 0.88.",
            "Matriz de juicio de expertos",
          ],
          [
            "05/07/2026",
            "Recepción de registros de notas",
            "I-05 Docentes",
            "Registros de exámenes de marzo, abril y primer trimestre de 2026 de varios cursos y grados.",
            "Hoja de cálculo y fotografías, en custodia del equipo (IN-04)",
          ],
          [
            "10/10/2026",
            "Tormenta de ideas y análisis de interesados",
            "I-12 Equipo del proyecto",
            "Registro ampliado a 17 interesados y matriz de involucramiento.",
            "INT-01 e INT-02",
          ],
        ],
        { titulo: "Actividades de involucramiento realizadas", compacta: true },
      ),
      nota(
        "La segunda entrevista, dirigida al encargado de soporte de TI y a la gestora de Cubicol, tiene su guía preparada desde mayo de 2026 y no se ha realizado (IN-05).",
        "aviso",
      ),
    ]),
    sec("3. Asuntos surgidos del trato con los interesados", [
      tabla(
        ["Asunto", "Origen", "Tratamiento"],
        [44, 22, 34],
        [
          ["La Dirección mostró interés en registrar la asistencia con código QR, que no está en el alcance.", "Entrevista", "Expectativa por gestionar (INT-02)."],
          ["El equipo ofreció guías para que los padres ingresen a Cubicol.", "Entrevista", "Incidente IN-10."],
          ["Los docentes usan correos personales; no hay correo institucional.", "Entrevista", "Incidente IN-07 y solicitud SC-09."],
          ["Se mencionó lentitud reciente del internet del colegio.", "Entrevista", "Supuesto S-09."],
          ["La antigüedad del colegio se registró con dos valores, 24 y 25 años.", "Entrevista y cuestionario", "Confirmar con la Dirección."],
        ],
        { titulo: "Asuntos derivados" },
      ),
    ]),
    sec("4. Próximas actividades", [
      tabla(
        ["Fecha prevista", "Actividad", "Interesados", "Responsable"],
        [20, 40, 24, 16],
        [
          [P.inicio, "Reunión de inicio: acta de constitución, calendario, Product Owner y tratamiento de datos.", "I-01, I-02, I-03", R.jhostin],
          ["20/10/2026", "Segunda entrevista y acuerdo sobre las exportaciones de datos.", "I-07, I-08", R.jadira],
          ["28/10/2026", "Taller de validación de variables.", "I-05, I-06", R.helber],
          ["03/11/2026", "Entrevista sobre el registro de incidencias.", "I-04", R.jadira],
          [fmtIso(SPRINTS[0].revision), "Revisión del Sprint 1.", "I-01, I-03", R.equipo],
          ["11/12/2026", "Comunicado a los apoderados sobre el proyecto y los datos.", "I-11", "Dirección"],
        ],
        { titulo: "Actividades planificadas para el Sprint 1 y siguientes" },
      ),
    ]),
  ],
});

// ───────────────────────── INT-05 ─────────────────────────
const clave = INTERESADOS.filter((i) => i.clave);
const enDeseado = INTERESADOS.filter((i) => brecha(i) <= 0);
const contactados = ["I-01", "I-05", "I-12", "I-13"];

export const INT05 = DOC({
  ...base,
  id: "INT-05",
  titulo: "Informe de seguimiento del involucramiento N.º 1",
  archivo: "INT-05 Seguimiento del involucramiento 01",
  carpeta: "02 - Interesados/2.4 Monitorear",
  area: "Monitoreo y control",
  proceso: "Monitorear el involucramiento de los interesados",
  salida: "Información de desempeño del trabajo sobre el involucramiento",
  apaisado: true,
  resumen:
    "Compara el nivel de involucramiento actual de cada interesado con el deseado, con la evidencia que lo sustenta, y define las acciones para cerrar la distancia.",
  secciones: [
    sec("1. Corte y método", [
      p(
        "Fecha de corte: 10/10/2026, antes del inicio del Sprint 1. El nivel actual de cada interesado se asignó solo con evidencia: lo dicho en la entrevista, las respuestas de la encuesta o el hecho de no haber sido contactado. Esta medición reemplaza a los porcentajes de avance del registro anterior, que no tenían un método de cálculo.",
      ),
    ]),
    sec("2. Nivel actual frente al deseado", [
      tabla(
        ["Interesado", "Nivel actual", "Evidencia", "Nivel deseado", "Distancia", "Acción"],
        [16, 10, 28, 10, 8, 28],
        INTERESADOS.map((i) => {
          const b = brecha(i);
          return [
            `${i.id} ${i.nombre}`,
            c(i.actual, b > 0 ? "amarillo" : "verde", { align: "center" }),
            i.evidencia,
            c(i.deseado, "azul", { align: "center" }),
            c(b <= 0 ? "En el nivel" : `${b} ${b === 1 ? "nivel" : "niveles"}`, b <= 0 ? "verde" : b >= 3 ? "rojo" : "amarillo", { align: "center" }),
            i.acciones,
          ];
        }),
        { titulo: "Seguimiento del involucramiento al 10/10/2026", compacta: true },
      ),
    ]),
    sec("3. Indicadores", [
      tabla(
        ["Indicador", "Valor", "Lectura"],
        [44, 16, 40],
        [
          ["Interesados en el nivel deseado", `${enDeseado.length} de ${INTERESADOS.length}`, "Es el punto de partida; la mayoría aún no conoce el proyecto."],
          ["Interesados clave en el nivel deseado", `${clave.filter((i) => brecha(i) <= 0).length} de ${clave.length}`, "Solo el equipo y el docente asesor."],
          ["Interesados con contacto directo documentado", `${contactados.length} de ${INTERESADOS.length}`, "Directora, docentes encuestados, equipo y docente asesor."],
          ["Interesados que no conocen el proyecto", `${INTERESADOS.filter((i) => i.actual === "Desconocedor").length} de ${INTERESADOS.length}`, "Se atienden con la reunión de inicio y las entrevistas del Sprint 1."],
          ["Interesados reticentes", `${INTERESADOS.filter((i) => i.actual === "Reticente").length}`, "No se ha identificado resistencia."],
        ],
        { titulo: "Indicadores de involucramiento" },
      ),
    ]),
    sec("4. Conclusiones y acciones", [
      ul(
        "El apoyo de la Dirección es la principal fortaleza, pero todavía no se traduce en decisiones: acta firmada, Product Owner designado y datos entregados.",
        "Quienes controlan los datos y la operación futura (gestora de Cubicol y encargado de TI) no han sido entrevistados; es la acción más urgente del Sprint 1.",
        "El conocimiento del proyecto entre los docentes viene solo de la encuesta. Ninguno ha visto el sistema.",
        "No se generan solicitudes de cambio a partir de este seguimiento. El ofrecimiento de guías para padres queda como incidente IN-10.",
      ),
      p(`La próxima medición se hará al cierre del Sprint 1, el ${fmtIso(SPRINTS[0].revision)}.`),
    ]),
  ],
});
