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
  version: "1.2",
  fecha: P.fechaCorte,
  versiones: [
    ["1.0", P.fechaEmision, "Versión inicial del documento.", P.director],
    ["1.1", P.fechaEmision, "Se agregan los requisitos de información, el calendario de comunicaciones, los formatos, los indicadores y el glosario.", P.director],
    ["1.2", P.fechaCorte, "Canal único con el colegio a través del Product Owner (SC-11), aviso a los apoderados por WhatsApp de los tutores y avances semanales los sábados.", P.director],
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
          ["Patrocinadora (I-01)", "Estado del proyecto, decisiones que se le piden, cambios a las líneas base y situación de los datos personales.", "Resumen de una página que le entrega el Product Owner.", "Cierre de cada sprint y cuando haya una decisión"],
          ["Subdirector y coordinación académica (I-02, I-03)", "Qué se entrega en cada sprint, qué deben priorizar y qué deben aceptar.", "Información y demostración a través del Product Owner.", "Cada cuatro semanas"],
          ["Docentes tutores, Jefa de Normas y psicología (I-04, I-05, I-06)", "Qué hará el sistema, qué se les pide y cómo se lee una alerta.", "Taller presencial, en lenguaje sencillo.", "Semana 3, Sprint 4 y piloto"],
          ["Gestora de Cubicol y encargado de TI (I-07, I-08)", "Qué datos se piden, en qué formato y para qué fecha; qué deberán operar después.", "Pedido escrito breve que entrega el Product Owner.", "Sprints 1 a 3 y Sprint 6"],
          ["Padres y apoderados (I-11)", "Qué datos de sus hijos se usan, con qué fin y cuáles son sus derechos.", "Mensaje de WhatsApp del tutor de aula.", "Antes de cargar datos reales"],
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
          ["Product Owner (Helber Perez)", "Pedidos, observaciones, indicaciones y conformidad de la Dirección.", "Canal único con el colegio, acordado en la reunión de inicio (SC-11). Es docente de la institución."],
          ["Reunión presencial en el colegio", "Talleres con docentes y capacitación.", "Las organiza el Product Owner según el horario escolar."],
          ["Reunión virtual", "Reuniones con la Dirección cuando sean indispensables.", "La reunión de inicio fue virtual; no se prevén otras (R-08)."],
          ["WhatsApp del tutor de aula", "Aviso a los apoderados sobre el proyecto y comunicado al apoderado de un estudiante en riesgo alto.", "Solo mensajes individuales al apoderado de cada estudiante, nunca en grupos. El mensaje no menciona a otros estudiantes ni el porcentaje del modelo."],
          ["Correo electrónico personal", "Alertas del sistema a los docentes y envío de informes.", "El colegio no tiene correo institucional: se requiere la lista de direcciones autorizadas (SC-09)."],
          ["Comunicado impreso o agenda", "Respaldo para los apoderados que no usan WhatsApp.", "Llega también a quienes no usan plataformas."],
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
          ["Comunicado al apoderado", "Padre o apoderado", "Dentro de las 24 horas; lo redacta el sistema y lo envía el tutor por WhatsApp", "Áreas con dificultad, notas del periodo y recomendaciones de apoyo, en lenguaje simple."],
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
          ["Revisión del sprint", "Demostración en la que el equipo muestra lo avanzado al Product Owner, y el colegio lo acepta u observa."],
          ["Product Owner", "Persona del colegio que decide qué es prioritario y acepta los entregables. En este proyecto, Helber Perez, docente de la institución."],
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
  version: "1.1",
  fecha: P.fechaCorte,
  versiones: [
    ["1.0", P.fechaEmision, "Versión inicial del documento.", P.director],
    ["1.1", P.fechaCorte, "Reunión de inicio realizada, canal por el Product Owner, avances los sábados y aviso a los apoderados por WhatsApp de los tutores.", P.director],
  ],
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
        "Las cuatro primeras corresponden al levantamiento de información de la fase de formulación. En la reunión de inicio del 12/10/2026 se acordó que la comunicación con el colegio pasa por el Product Owner (SC-11); por eso la segunda entrevista se reemplazó por un pedido escrito que él entrega (incidente IN-05).",
        "info",
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
        "La coordinación diaria del equipo, las coordinaciones del Product Owner con el colegio, los pedidos de datos semanales, las solicitudes de cambio y los incidentes de prioridad alta se registran cuando ocurren; por eso no figuran con fecha en esta lista.",
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
    a[x.canal] ??= { Realizada: 0, Programada: 0, "Por confirmar": 0, Vencida: 0 };
    a[x.canal][estadoAl(x)]++;
    return a;
  }, {}),
).sort((a, b) => b[1].Realizada + b[1].Programada + b[1].Vencida - (a[1].Realizada + a[1].Programada + a[1].Vencida));
const centro = (n, extra = {}) => c(String(n), undefined, { align: "center", ...extra });
const debidas = COMUNICACIONES.filter((x) => x.fecha < CORTE);
const pctCalendario = debidas.length ? `${Math.round((100 * debidas.filter((x) => estadoAl(x) === "Realizada").length) / debidas.length)} %` : "—";

export const INT07 = DOC({
  ...base,
  id: "INT-07",
  titulo: "Informe de monitoreo de las comunicaciones N.º 2",
  archivo: "INT-07 Monitoreo de las comunicaciones 02",
  version: "2.0",
  fecha: P.fechaCorte,
  versiones: [
    ["1.0", P.fechaEmision, "Informe N.º 1: punto de partida, antes del inicio del Sprint 1.", P.director],
    ["2.0", P.fechaCorte, "Informe N.º 2: primera semana del Sprint 1, con la reunión de inicio realizada y el canal único por el Product Owner. Reemplaza al N.º 1.", P.director],
  ],
  area: "Monitoreo y control",
  proceso: "Monitorear las comunicaciones",
  salida: "Información de desempeño del trabajo sobre las comunicaciones",
  resumen:
    "Comprueba si las comunicaciones se están haciendo según el plan y si llegan a quienes deben. Es la segunda medición: cubre la primera semana del Sprint 1, con la reunión de inicio y el nuevo canal con el colegio.",
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
          ["Cumplimiento del calendario", c(`${pctCalendario}`, "verde", { bold: true, align: "center" }), "90 % o más", `${debidas.filter((x) => estadoAl(x) === "Realizada").length} de ${debidas.length} comunicaciones que debían hacerse hasta el corte están realizadas.`],
          ["Comunicaciones vencidas", c(String(R0.vencidas), R0.vencidas ? "rojo" : "verde", { bold: true, align: "center" }), "Cero", R0.vencidas ? "Hay comunicaciones fuera de plazo." : "Ninguna comunicación fuera de plazo."],
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
        "Desde la reunión de inicio, el canal principal con el colegio es el Product Owner (SC-11): los pedidos de datos y las consultas pasan por él, y la reunión con la Dirección fue virtual. Los apoderados recibirán el aviso por WhatsApp de sus tutores. Todavía no se usa el correo: el colegio no tiene correo institucional y la lista de direcciones personales autorizadas está pendiente (SC-09).",
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
        "La reunión de inicio se realizó el 12/10/2026, de forma virtual, con la Promotora Directora y la coordinación académica. Se firmó el acta de constitución y quedó registrada en su acta (GOB-12).",
        "Se acordó un canal único con el colegio a través del Product Owner, Helber Perez (SC-11). Reduce la dependencia de las agendas de la Dirección, pero concentra la comunicación en una sola persona (restricción R-08 y supuesto S-12).",
        "La segunda entrevista, pendiente desde mayo de 2026, se reemplazó por un pedido escrito de las exportaciones de Cubicol que entrega el Product Owner (20/10/2026).",
        "Con los padres y apoderados todavía no ha habido comunicación del proyecto. La Dirección autorizó el uso de las notas y el aviso se adelantó: lo enviarán los tutores por WhatsApp, a más tardar el 06/11/2026.",
        "No existe aún un canal acordado para las alertas por correo (SC-09).",
      ),
    ]),
    sec("6. Acciones", [
      tabla(
        ["Acción", "Responsable", "Fecha límite"],
        [58, 22, 20],
        [
          ["Obtener la firma del acta de la reunión de inicio (GOB-12).", `${R.jhostin}, por medio de ${R.helber}`, "24/10/2026"],
          ["Redactar el pedido escrito de las exportaciones de Cubicol y entregarlo en el colegio.", `${R.jadira} y ${R.helber}`, "20/10/2026"],
          ["Redactar el mensaje de aviso a los apoderados y entregarlo a los tutores.", `${R.jhostin} y ${R.helber}`, "30/10/2026"],
          ["Organizar el taller de validación de variables con los docentes.", R.helber, "28/10/2026"],
          ["Pedir, a través del Product Owner, la lista de correos autorizados de los docentes.", R.jadira, "06/11/2026"],
          ["Actualizar el registro y el tablero cada sábado, después de la clase.", R.jhostin, "Semanal"],
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
