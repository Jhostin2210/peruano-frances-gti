// Gestión de las comunicaciones (dominio de Interesados): planificar, gestionar y monitorear.
// INT-03 es el plan; INT-06, el registro de lo comunicado; INT-07, el informe de monitoreo.

import { c, h, kv, nota, ol, p, sec, tabla, ul } from "../lib/bloques.mjs";
import { PROYECTO as P, R } from "../proyecto.mjs";
import { SPRINTS, fmtIso } from "../datos/calendario.mjs";
import { INTERESADOS } from "../datos/interesados.mjs";
import { COMUNICACIONES, CORTE, PLAN_COMUNICACIONES, estadoAl, resumenComunicaciones } from "../datos/comunicaciones.mjs";
import { DOC } from "./comunes.mjs";

const base = { dominio: "Interesados", carpeta: "02 - Interesados/2.5 Comunicaciones" };
const nombreDe = (id) => INTERESADOS.find((i) => i.id === id)?.nombre ?? id;
const destinatarios = (ids) => ids.map((id) => `${id} ${nombreDe(id)}`);
const cuando = (x) => x.cuando || fmtIso(x.fecha);
const COLOR_ESTADO = { Realizada: "verde", Programada: "azul", "Por confirmar": "amarillo", Vencida: "rojo" };
const estadoCelda = (x) => c(estadoAl(x), COLOR_ESTADO[estadoAl(x)], { bold: true, align: "center" });
const nombreSprint = (n) => (n === 0 ? "Antes del inicio" : `Sprint ${n}`);
const R0 = resumenComunicaciones();
const clave = INTERESADOS.filter((i) => i.clave);
const claveContactados = clave.filter((i) => R0.contactados.includes(i.id));
const sinComunicacion = INTERESADOS.filter((i) => !R0.contactados.includes(i.id));
const sinPrevision = INTERESADOS.filter((i) => !R0.previstos.includes(i.id));
const clavePendientes = clave.filter((i) => !R0.contactados.includes(i.id));

// ───────────────────────── INT-03 ─────────────────────────
export const INT03 = DOC({
  ...base,
  id: "INT-03",
  titulo: "Plan de gestión de las comunicaciones",
  archivo: "INT-03 Plan de comunicaciones",
  area: "Planificación",
  proceso: "Planificar la gestión de las comunicaciones",
  salida: "Plan de gestión de las comunicaciones",
  version: "1.1",
  versiones: [
    ["1.0", P.fechaEmision, "Versión inicial del documento.", P.director],
    ["1.1", P.fechaEmision, "Se agregan los requisitos de información, el calendario de comunicaciones, los formatos, los indicadores y el glosario.", P.director],
  ],
  resumen:
    "Establece qué información necesita cada interesado, quién la envía, por qué canal, con qué frecuencia y en qué fechas; los formatos que se usan, las reglas para proteger los datos de los estudiantes y cómo se mide si la comunicación funciona.",
  secciones: [
    sec("1. Objetivo y principios", [
      p("El plan asegura que cada interesado reciba la información que necesita para decidir o actuar, a tiempo y por un canal que realmente use."),
      ul(
        "**Canal real.** Se usa el medio que cada grupo ya utiliza: reunión presencial con la Dirección, WhatsApp y agenda con las familias, correo personal con los docentes.",
        "**Lenguaje claro.** Nada de términos técnicos con docentes y familias: «riesgo alto» se explica como «necesita atención esta semana».",
        "**Constancia.** Toda comunicación que implique una decisión deja un registro: acta, mensaje o documento.",
        "**Reserva.** Los datos de un estudiante solo se comparten con quien debe actuar sobre su caso.",
      ),
      tabla(
        ["Proceso", "Qué hace", "Documento"],
        [34, 42, 24],
        [
          ["Planificar la gestión de las comunicaciones", "Define qué, a quién, cómo y cuándo se comunica.", "Este plan (INT-03)"],
          ["Gestionar las comunicaciones", "Envía la información y deja constancia.", "Registro de comunicaciones (INT-06)"],
          ["Monitorear las comunicaciones", "Comprueba que la información llegó y sirvió.", "Informe de monitoreo (INT-07) y tablero del blog"],
        ],
        { titulo: "Los tres procesos de comunicaciones y sus documentos" },
      ),
    ]),
    sec("2. Requisitos de información de los interesados", [
      p("El análisis parte del registro de interesados (INT-01). Para cada grupo se definió qué necesita saber y en qué forma le sirve recibirlo."),
      tabla(
        ["Interesado", "Qué necesita saber", "Forma que le sirve", "Momento"],
        [22, 36, 24, 18],
        [
          ["Patrocinadora (I-01)", "Estado del proyecto, decisiones que se le piden, cambios a las líneas base y situación de los datos personales.", "Resumen de una página y reunión breve.", "Cierre de cada sprint y cuando haya una decisión"],
          ["Subdirector y coordinación académica (I-02, I-03)", "Qué se entrega en cada sprint, qué deben priorizar y qué deben aceptar.", "Demostración del sistema y acta.", "Cada cuatro semanas"],
          ["Docentes tutores, Jefa de Normas y psicología (I-04, I-05, I-06)", "Qué hará el sistema, qué se les pide y cómo se lee una alerta.", "Taller presencial, en lenguaje sencillo.", "Semana 3, Sprint 4 y piloto"],
          ["Gestora de Cubicol y encargado de TI (I-07, I-08)", "Qué datos se piden, en qué formato y para qué fecha; qué deberán operar después.", "Pedido escrito breve y reunión.", "Sprints 1 a 3 y Sprint 6"],
          ["Padres y apoderados (I-11)", "Qué datos de sus hijos se usan, con qué fin y cuáles son sus derechos.", "Comunicado del colegio.", "Antes de cargar datos reales"],
          ["Estudiantes (I-10)", "Reciben la información a través de sus tutores.", "Sin comunicación directa del proyecto.", "—"],
          ["Docente asesor (I-13)", "Avance frente al plan y aplicación de la guía.", "Blog y presentación en clase.", "Cada semana"],
          ["Equipo del proyecto (I-12)", "Tareas, impedimentos y cambios aprobados.", "Reunión breve y tablero de tareas.", "Cada día"],
          ["Personal administrativo, proveedores y reguladores (I-09, I-14 a I-17)", "No requieren información periódica; se consultan sus normas y condiciones de servicio.", "Consulta puntual.", "Cuando haga falta"],
        ],
        { titulo: "Requisitos de información por interesado", compacta: true },
      ),
    ]),
    sec(
      "3. Matriz de comunicaciones",
      [
        tabla(
          ["Código", "Qué se comunica", "A quién", "Quién lo emite", "Canal", "Frecuencia", "Constancia"],
          [7, 20, 17, 12, 16, 14, 14],
          PLAN_COMUNICACIONES.map((x) => [x.id, x.que, x.para, x.emisor, x.canal, x.frecuencia, x.constancia]),
          { titulo: "Matriz de comunicaciones del proyecto", compacta: true },
        ),
      ],
      { apaisada: true },
    ),
    sec("4. Calendario de comunicaciones", [
      p(
        `La matriz se convierte en fechas concretas en el registro de comunicaciones (INT-06). Estas son las comunicaciones programadas al ${fmtIso(CORTE)}; el registro y el tablero del blog muestran su estado actualizado.`,
      ),
      tabla(
        ["Fecha", "Comunicación", "Destinatarios", "Responsable", "Sprint"],
        [16, 40, 20, 14, 10],
        COMUNICACIONES.filter((x) => x.estado !== "Realizada").map((x) => [
          cuando(x),
          x.asunto,
          x.interesados.join(", "),
          x.emisor,
          c(String(x.sprint), undefined, { align: "center" }),
        ]),
        { titulo: "Comunicaciones programadas", compacta: true, fuente: "Los códigos de los destinatarios corresponden al registro de interesados (INT-01)." },
      ),
    ]),
    sec("5. Canales y tecnología", [
      tabla(
        ["Canal", "Se usa para", "Consideraciones"],
        [24, 34, 42],
        [
          ["Reunión presencial en el colegio", "Decisiones, demostraciones, talleres y capacitación.", "Se coordina con la Dirección según el horario escolar."],
          ["WhatsApp", "Coordinación con la Dirección y avisos generales a las familias a través del colegio.", "Es el canal que el colegio ya usa con los padres. No se envían por este medio notas ni niveles de riesgo."],
          ["Correo electrónico personal", "Alertas del sistema a los docentes y envío de informes.", "El colegio no tiene correo institucional: se requiere la lista de direcciones autorizadas (SC-09)."],
          ["Comunicado impreso o agenda", "Información a los apoderados y consentimiento.", "Llega también a quienes no usan plataformas."],
          ["Blog del proyecto", "Avance público, documentos de gestión y tablero de comunicaciones.", "Es público: no contiene datos personales."],
          ["Repositorio en GitHub", "Código, contenido de los documentos y control de cambios técnicos.", "Es público: no contiene datos del colegio."],
          ["Panel web del sistema", "Alertas y fichas de estudiantes.", "Acceso con usuario y contraseña, según el rol."],
        ],
        { titulo: "Canales de comunicación" },
      ),
    ]),
    sec("6. Comunicaciones del producto", [
      p(
        "Además de las comunicaciones del proyecto, el sistema emitirá sus propias comunicaciones una vez en operación. Se describen aquí porque forman parte de lo que los interesados recibirán.",
      ),
      tabla(
        ["Comunicación", "Destinatario", "Momento", "Contenido"],
        [22, 20, 24, 34],
        [
          ["Alerta de riesgo alto", "Docente tutor y coordinación", "Dentro de las 24 horas siguientes al cálculo semanal", "Estudiante, nivel de riesgo y variables que lo explican."],
          ["Resumen de alertas", "Docente, al ingresar al panel", "En cada ingreso", "Estudiantes en riesgo alto y medio, con acceso a su ficha."],
          ["Comunicado al apoderado", "Padre o apoderado", "Dentro de las 24 horas, a través del colegio", "Áreas con dificultad y recomendaciones de apoyo, en lenguaje simple."],
          ["Reporte por unidad", "Coordinación y dirección", "Al cierre de cada unidad", "Estudiantes en riesgo por aula y grado, y comparación con el periodo anterior."],
        ],
        { titulo: "Comunicaciones que emitirá el sistema" },
      ),
    ]),
    sec("7. Formatos", [
      h("Acta de reunión"),
      kv(
        ["Reunión N.° y tipo", ""],
        ["Fecha, hora y lugar", ""],
        ["Convocó", ""],
        ["Asistentes", ""],
        ["Objetivo", ""],
        ["Temas tratados", ""],
        ["Acuerdos (qué, quién y cuándo)", ""],
        ["Próxima reunión", ""],
      ),
      h("Informe de desempeño"),
      p("Sigue la estructura del informe N.º 1 (GOB-09): datos del informe, resumen, estado por dominio, avance de los entregables, hitos próximos y decisiones que se solicitan."),
      h("Registro de una comunicación"),
      p("Cada comunicación se anota en el registro (INT-06) con estos datos: fecha, tipo, asunto, quién la emite, interesados que participan, canal, estado y constancia."),
    ]),
    sec("8. Reglas de reserva de la información", [
      ul(
        "El nivel de riesgo de un estudiante se comunica solo a su tutor, a la coordinación, a psicología y a la dirección; al apoderado se le comunica el de su hijo.",
        "No se comparten listas de estudiantes ni notas por grupos de mensajería.",
        "Los archivos con datos reales no salen del colegio sin anonimizar y nunca se publican.",
        "Las fotos y los videos donde aparecen personas se publican solo con su autorización.",
      ),
    ]),
    sec("9. Monitoreo, escalamiento y actualización", [
      p("El director del proyecto revisa el registro cada semana y emite un informe de monitoreo al cierre de cada sprint. Los indicadores son estos:"),
      tabla(
        ["Indicador", "Cómo se calcula", "Meta"],
        [30, 46, 24],
        [
          ["Cumplimiento del calendario", "Comunicaciones realizadas entre las que ya debían haberse realizado.", "90 % o más"],
          ["Comunicaciones vencidas", "Programadas cuya fecha pasó hace más de una semana sin registrarse como realizadas.", "Cero"],
          ["Cobertura de interesados clave", "Interesados clave con al menos una comunicación realizada.", "Todos al cierre del Sprint 1"],
          ["Constancia", "Comunicaciones realizadas que tienen evidencia.", "100 %"],
          ["Respuesta a los pedidos", "Días entre un pedido al colegio y su respuesta.", "5 días hábiles o menos"],
        ],
        { titulo: "Indicadores de las comunicaciones" },
      ),
      p(
        "Un asunto sin respuesta en dos días hábiles se eleva del responsable al director del proyecto, de este al Product Owner y, por último, a la patrocinadora. El plan se revisa al cierre de cada sprint junto con el plan de involucramiento.",
      ),
    ]),
    sec("10. Glosario", [
      tabla(
        ["Término", "Cómo se explica a los interesados"],
        [26, 74],
        [
          ["Alerta", "Aviso de que un estudiante necesita atención esta semana."],
          ["Nivel de riesgo", "Señal de tres colores (verde, amarillo y rojo) sobre la probabilidad de que un estudiante baje su rendimiento. No es un diagnóstico."],
          ["Sprint", "Periodo de trabajo de cuatro semanas que termina con una demostración al colegio."],
          ["Revisión del sprint", "Reunión en la que el equipo muestra lo avanzado y el colegio lo acepta u observa."],
          ["Product Owner", "Persona del colegio que decide qué es prioritario y acepta los entregables."],
          ["Línea base", "Versión aprobada del alcance, del cronograma o de los costos, contra la que se mide el avance."],
          ["Solicitud de cambio", "Pedido formal para modificar algo ya aprobado."],
          ["Piloto", "Dos semanas de uso real del sistema por tres docentes tutores antes de ponerlo en marcha."],
        ],
        { titulo: "Glosario común" },
      ),
    ]),
  ],
});

// ───────────────────────── INT-06 ─────────────────────────
const filaRegistro = (x) => [x.id, cuando(x), x.tipo, x.asunto, x.emisor, destinatarios(x.interesados), x.canal, estadoCelda(x), x.constancia];
const tablaRegistro = (lista, titulo) =>
  tabla(["ID", "Fecha", "Tipo", "Asunto", "Emite", "Interesados", "Canal", "Estado", "Constancia"], [5, 9, 9, 23, 10, 15, 10, 8, 11], lista.map(filaRegistro), {
    titulo,
    compacta: true,
  });

export const INT06 = DOC({
  ...base,
  id: "INT-06",
  titulo: "Registro de comunicaciones",
  archivo: "INT-06 Registro de comunicaciones",
  area: "Ejecución",
  proceso: "Gestionar las comunicaciones",
  salida: "Comunicaciones del proyecto",
  apaisado: true,
  resumen:
    "Lleva la cuenta de cada comunicación del proyecto: las que ya se hicieron, con su constancia, y las programadas, con su fecha límite y su responsable. Es la fuente del tablero de comunicaciones del blog.",
  secciones: [
    sec("1. Uso del registro", [
      p(
        "Gestionar las comunicaciones es ejecutar el plan (INT-03): reunirse, enviar los informes, hacer los talleres y dejar constancia. Cada comunicación se anota aquí cuando se programa y se actualiza cuando se realiza. Cuando pasa la fecha de una comunicación programada, queda «por confirmar» durante una semana, que es el plazo para registrarla con su constancia; si no se registra, pasa a vencida.",
      ),
      ul(
        "**Quién lo mantiene:** el director del proyecto; cada responsable informa cuando realiza su comunicación.",
        "**Constancia:** acta, lista de asistencia, mensaje, documento o publicación. Sin constancia no se marca como realizada.",
        "**Reserva:** el registro nombra cargos, no personas, y no incluye datos de estudiantes.",
      ),
    ]),
    sec("2. Comunicaciones realizadas", [
      tablaRegistro(
        COMUNICACIONES.filter((x) => x.estado === "Realizada"),
        `Comunicaciones realizadas al ${fmtIso(CORTE)}`,
      ),
      nota(
        "Las cuatro primeras corresponden al levantamiento de información de la fase de formulación. La segunda entrevista, al encargado de soporte de TI y a la gestora de Cubicol, no se realizó entonces y está programada para el Sprint 1 (incidente IN-05).",
        "aviso",
      ),
    ]),
    sec("3. Comunicaciones programadas del Sprint 1", [
      tablaRegistro(
        COMUNICACIONES.filter((x) => x.estado !== "Realizada" && x.sprint === 1),
        `Sprint 1: del ${fmtIso(SPRINTS[0].inicio)} al ${fmtIso(SPRINTS[0].fin)}`,
      ),
    ]),
    sec("4. Comunicaciones programadas de los Sprints 2 a 6", [
      tablaRegistro(
        COMUNICACIONES.filter((x) => x.estado !== "Realizada" && x.sprint > 1),
        "Sprints 2 a 6",
      ),
      p(
        "La coordinación diaria del equipo, los pedidos de datos semanales, las solicitudes de cambio y los incidentes de prioridad alta se registran cuando ocurren; por eso no figuran con fecha en esta lista.",
      ),
    ]),
    sec("5. Resumen", [
      tabla(
        ["Momento", "Realizadas", "Programadas", "Vencidas", "Total"],
        [40, 15, 15, 15, 15],
        [
          ...[0, 1, 2, 3, 4, 5, 6].map((n) => {
            const lista = COMUNICACIONES.filter((x) => x.sprint === n);
            const cuenta = (e) => c(String(lista.filter((x) => estadoAl(x) === e).length), undefined, { align: "center" });
            return [nombreSprint(n), cuenta("Realizada"), cuenta("Programada"), cuenta("Vencida"), c(String(lista.length), undefined, { align: "center", bold: true })];
          }),
          [
            c("Total", "gris", { bold: true }),
            c(String(R0.realizadas), "gris", { align: "center", bold: true }),
            c(String(R0.programadas), "gris", { align: "center", bold: true }),
            c(String(R0.vencidas), "gris", { align: "center", bold: true }),
            c(String(R0.total), "gris", { align: "center", bold: true }),
          ],
        ],
        { titulo: `Comunicaciones por momento del proyecto, al ${fmtIso(CORTE)}` },
      ),
    ]),
  ],
});

// ───────────────────────── INT-07 ─────────────────────────
const porCanal = Object.entries(
  COMUNICACIONES.reduce((a, x) => {
    a[x.canal] ??= { Realizada: 0, Programada: 0, Vencida: 0 };
    a[x.canal][estadoAl(x)]++;
    return a;
  }, {}),
).sort((a, b) => b[1].Realizada + b[1].Programada + b[1].Vencida - (a[1].Realizada + a[1].Programada + a[1].Vencida));
const centro = (n, extra = {}) => c(String(n), undefined, { align: "center", ...extra });

export const INT07 = DOC({
  ...base,
  id: "INT-07",
  titulo: "Informe de monitoreo de las comunicaciones N.º 1",
  archivo: "INT-07 Monitoreo de las comunicaciones 01",
  area: "Monitoreo y control",
  proceso: "Monitorear las comunicaciones",
  salida: "Información de desempeño del trabajo sobre las comunicaciones",
  resumen:
    "Comprueba si las comunicaciones se están haciendo según el plan y si llegan a quienes deben. Es la primera medición, antes del inicio del Sprint 1, y fija el punto de partida.",
  secciones: [
    sec("1. Corte y método", [
      p(
        `Fecha de corte: ${fmtIso(CORTE)}. El informe se elabora con el registro de comunicaciones (INT-06): compara lo realizado con lo programado en el plan (INT-03) y revisa a qué interesados se ha llegado. Los mismos indicadores se ven, actualizados, en el tablero de comunicaciones del blog.`,
      ),
    ]),
    sec("2. Indicadores", [
      tabla(
        ["Indicador", "Valor", "Meta", "Lectura"],
        [28, 16, 20, 36],
        [
          ["Comunicaciones registradas", String(R0.total), "—", `${R0.realizadas} realizadas y ${R0.programadas} programadas.`],
          ["Cumplimiento del calendario", "Aún no aplica", "90 % o más", "Ninguna comunicación programada ha llegado a su fecha límite."],
          ["Comunicaciones vencidas", c(String(R0.vencidas), R0.vencidas ? "rojo" : "verde", { bold: true, align: "center" }), "Cero", "Se medirá por primera vez en la semana del 12/10/2026."],
          ["Cobertura de interesados", `${R0.contactados.length} de ${INTERESADOS.length}`, "—", "Coincide con el seguimiento del involucramiento (INT-05)."],
          [
            "Cobertura de interesados clave",
            c(`${claveContactados.length} de ${clave.length}`, claveContactados.length === clave.length ? "verde" : "amarillo", { bold: true, align: "center" }),
            "Todos al cierre del Sprint 1",
            `Faltan: ${clavePendientes.map((i) => i.nombre).join(", ")}.`,
          ],
          ["Constancia", c(`${R0.conConstancia} de ${R0.realizadas}`, "verde", { bold: true, align: "center" }), "100 %", "Toda comunicación realizada tiene evidencia."],
        ],
        { titulo: `Indicadores de las comunicaciones al ${fmtIso(CORTE)}` },
      ),
    ]),
    sec("3. Comunicaciones por canal", [
      tabla(
        ["Canal", "Realizadas", "Programadas", "Vencidas", "Total"],
        [40, 15, 15, 15, 15],
        porCanal.map(([canal, n]) => [canal, centro(n.Realizada), centro(n.Programada), centro(n.Vencida), centro(n.Realizada + n.Programada + n.Vencida, { bold: true })]),
        { titulo: "Uso de los canales" },
      ),
      p(
        "La reunión presencial es el canal principal, como pidió la Dirección. Todavía no se usa el correo: el colegio no tiene correo institucional y la lista de direcciones personales autorizadas está pendiente (SC-09).",
      ),
    ]),
    sec("4. Cobertura por interesado", [
      tabla(
        ["Interesado", "Clave", "Realizadas", "Programadas", "Situación"],
        [40, 10, 14, 14, 22],
        INTERESADOS.map((i) => {
          const suyas = COMUNICACIONES.filter((x) => x.interesados.includes(i.id));
          const hechas = suyas.filter((x) => estadoAl(x) === "Realizada").length;
          const prog = suyas.filter((x) => estadoAl(x) === "Programada").length;
          const situacion = hechas ? c("Con comunicación", "verde") : prog ? c("Programada", "azul") : c("Sin comunicación directa", "gris");
          return [`${i.id} ${i.nombre}`, centro(i.clave ? "Sí" : ""), centro(hechas), centro(prog), situacion];
        }),
        { titulo: "Comunicaciones por interesado", compacta: true },
      ),
      p(
        `${sinPrevision.length} interesados no tienen una comunicación directa prevista: ${sinPrevision.map((i) => i.nombre).join(", ")}. Es lo que establece el plan: los estudiantes reciben la información a través de sus tutores, y al personal administrativo, a los proveedores y a los reguladores solo se les consulta cuando hace falta.`,
      ),
    ]),
    sec("5. Hallazgos", [
      ul(
        `Solo ${R0.contactados.length} de ${INTERESADOS.length} interesados han tenido una comunicación directa; ${sinComunicacion.length} todavía no.`,
        "La segunda entrevista (encargado de TI y gestora de Cubicol) está pendiente desde mayo de 2026. Es la comunicación más urgente del Sprint 1.",
        "Con los padres y apoderados no ha habido ninguna comunicación del proyecto. El comunicado está programado para el 11/12/2026, antes del cierre del año escolar y de cargar datos reales.",
        "No existe aún un canal acordado para las alertas por correo (SC-09).",
        "La reunión de inicio está programada para el 12/10/2026 y todavía falta la confirmación de la Dirección.",
      ),
    ]),
    sec("6. Acciones", [
      tabla(
        ["Acción", "Responsable", "Fecha límite"],
        [58, 22, 20],
        [
          ["Confirmar con la Dirección la reunión de inicio del 12/10/2026.", R.jhostin, "12/10/2026"],
          ["Coordinar la segunda entrevista con la gestora de Cubicol y el encargado de TI.", R.jadira, "23/10/2026"],
          ["Pedir a la Dirección la lista de correos autorizados de los docentes.", R.jadira, "06/11/2026"],
          ["Redactar el borrador del comunicado a los apoderados para revisión de la Dirección.", R.jhostin, "04/12/2026"],
          ["Actualizar el registro y el tablero cada viernes.", R.jhostin, "Semanal"],
        ],
        { titulo: "Acciones derivadas del monitoreo" },
      ),
      ol(
        "No se generan solicitudes de cambio a partir de este informe.",
        `La próxima medición se hará al cierre del Sprint 1, el ${fmtIso(SPRINTS[0].revision)}.`,
      ),
    ]),
  ],
});
