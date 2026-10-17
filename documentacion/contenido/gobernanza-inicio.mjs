// Dominio de Gobernanza · área de enfoque de Iniciación · proceso «Iniciar el proyecto o fase».

import { c, firmas, h, kv, nota, ol, p, sec, tabla, ul } from "../lib/bloques.mjs";
import { PROYECTO as P, R } from "../proyecto.mjs";
import { DOC, kvPresupuesto, tablaHitos, tablaInteresadosClave } from "./comunes.mjs";

const base = {
  carpeta: "01 - Gobernanza/1.1 Iniciar el proyecto",
  dominio: "Gobernanza",
  area: "Iniciación",
  proceso: "Iniciar el proyecto o fase",
};

export const GOB01 = DOC({
  ...base,
  id: "GOB-01",
  titulo: "Caso de negocio y plan de gestión de beneficios",
  archivo: "GOB-01 Caso de negocio",
  salida: "Documentos del negocio (entrada del acta de constitución)",
  resumen:
    "Justifica el proyecto ante el colegio: qué necesidad atiende, qué opciones se evaluaron, qué beneficios se esperan, cómo se medirán y cuánto cuesta.",
  secciones: [
    sec("1. Necesidad del negocio", [
      p(
        "En la I.E.P. Peruano Francés el seguimiento del rendimiento de los estudiantes se apoya en tres fuentes que no se cruzan entre sí: las notas, que los docentes registran en la plataforma Cubicol; la asistencia, que se anota en cuadernos; y las incidencias, que se comunican a los padres por WhatsApp. Con la información repartida de esa manera, el docente suele advertir que un estudiante está en dificultades cuando ya desaprobó un periodo.",
      ),
      p(
        "El diagnóstico hecho con la metodología del marco lógico formuló el problema central como **deficiente detección temprana del bajo rendimiento académico estudiantil**. Sus causas directas son la información académica dispersa, el seguimiento manual y la baja capacidad de monitoreo del comportamiento académico.",
      ),
      tabla(
        ["Fuente", "Fecha", "Hallazgo"],
        [26, 14, 60],
        [
          [
            "Entrevista a la Promotora Directora",
            "24/04/2026",
            "La asistencia se registra en físico y las incidencias se comunican por WhatsApp o correo. Las notas se suben a Cubicol, pero pocos padres ingresan a la plataforma: la directora estima que alrededor del 40 %. Hay disposición a recibir propuestas y a facilitar datos.",
          ],
          [
            "Encuesta a docentes (6 respuestas)",
            "15/05/2026",
            "Los 6 reconocen que los problemas académicos se detectan tarde (4 «algunas veces» y 2 «frecuentemente»). 5 de 6 hacen seguimiento diario, de forma manual. 5 de 6 usarían una plataforma de monitoreo y 5 de 6 creen que un sistema con Machine Learning ayudaría.",
          ],
          [
            "Revisión de formatos y registros",
            "Abril a julio de 2026",
            "El reporte de incidencias es un formato impreso. Los exámenes mensuales se registran en cuadernos. No existe una base que una notas, asistencia e incidencias.",
          ],
        ],
        { titulo: "Evidencia que sustenta la necesidad" },
      ),
      nota(
        "La encuesta recoge la opinión de 6 de los 16 docentes y auxiliares, y al menos uno de los encuestados integra el equipo del proyecto. Sus resultados orientan el diagnóstico, pero no representan a todo el personal; por eso el Sprint 1 incluye una validación directa con los docentes tutores.",
        "aviso",
      ),
    ]),
    sec("2. Alineación con los objetivos de la institución", [
      ul(
        "**Calidad del servicio educativo.** Intervenir antes de que el estudiante desapruebe mejora el aprendizaje y la permanencia.",
        "**Decisiones de la dirección con información.** La directora señaló como necesidad un control ordenado y digital donde se vea el progreso del alumno durante el año.",
        "**Relación con las familias.** El colegio necesita constancia de que avisó a tiempo a los apoderados y un canal que estos realmente usen.",
        "**Aprovechar lo que ya existe.** El colegio usa Cubicol desde hace unos siete años y cuenta con internet de fibra óptica; el proyecto se apoya en esa base y no la reemplaza.",
      ),
    ]),
    sec("3. Opciones evaluadas", [
      tabla(
        ["Opción", "En qué consiste", "Evaluación"],
        [24, 40, 36],
        [
          ["0. No hacer nada", "Mantener el seguimiento manual con Cubicol, cuadernos y WhatsApp.", "Descartada: el problema central se mantiene."],
          [
            "1. Inteligencia de negocios tradicional",
            "Base PostgreSQL con cargas por lotes y tableros de Power BI actualizados cada bimestre.",
            "3.30 de 5. Coherente, pero insuficiente: describe lo ocurrido, no anticipa.",
          ],
          [
            "2. Nube con MLOps",
            "Data Lakehouse en nube pública, predicción continua y notificaciones a una aplicación móvil.",
            "3.35 de 5. Cumple el objetivo, pero su costo y complejidad exceden a un colegio de 200 estudiantes.",
          ],
          [
            c("3. Procesamiento semanal con tablero web", "teal", { bold: true }),
            c("Modelo en Python y Scikit-learn que recalcula el riesgo cada semana, base PostgreSQL y tablero web en Next.js.", "teal"),
            c("**4.55 de 5. Seleccionada.**", "teal"),
          ],
        ],
        {
          titulo: "Alternativas evaluadas en la fase de formulación",
          fuente: "Fuente: matriz de decisión ponderada con cinco criterios (análisis de alternativas de solución).",
        },
      ),
      p(
        "La alternativa 3 se eligió con el sistema alojado en un servidor dentro del colegio. En octubre de 2026 el equipo aprobó pasar el alojamiento a servicios gestionados en la nube (solicitud de cambio SC-03) y mantener el resto de la alternativa. Las razones son dos: el colegio no tiene personal dedicado a administrar un servidor, y varios requisitos ya asumían servicios en la nube. El análisis de hacer o comprar está en el documento GOB-05.",
      ),
    ]),
    sec("4. Beneficios esperados y plan de gestión de beneficios", [
      p(
        "El objetivo del proyecto, formulado con el criterio SMART, es **reducir en al menos 30 % la detección tardía del bajo rendimiento académico** en la I.E.P. Peruano Francés mediante un sistema inteligente basado en Machine Learning. Con la replanificación (SC-02) el sistema entra en operación en abril de 2027, por lo que el beneficio se mide durante el año escolar 2027.",
      ),
      tabla(
        ["Beneficio", "Indicador", "Línea base", "Meta", "Cuándo se mide", "Responsable"],
        [16, 27, 16, 15, 14, 12],
        [
          [
            "B1. Detección oportuna",
            "Casos de detección tardía: estudiantes que desaprueban un periodo sin haber sido identificados antes de su cierre.",
            "Por levantar con las notas de 2026 (Sprint 1).",
            "Reducción de al menos 30 %.",
            "Cierre de cada bimestre de 2027.",
            R.helber,
          ],
          [
            "B2. Menos trabajo manual",
            "Tiempo semanal que un tutor dedica a reunir notas, asistencia e incidencias.",
            "Por medir en el Sprint 1.",
            "Reducción de al menos 30 %.",
            "Piloto (marzo de 2027) y tres meses después.",
            R.jhostin,
          ],
          [
            "B3. Información para la dirección",
            "Reporte consolidado por aula y grado al cierre de cada unidad.",
            "No existe.",
            "Disponible en un día, sin elaboración manual.",
            "Desde el Sprint 6.",
            "Product Owner",
          ],
          [
            "B4. Aviso a las familias",
            "Casos de riesgo alto con comunicado al apoderado dentro de las 24 horas.",
            "No se registra.",
            "100 % de los casos.",
            "Desde el piloto.",
            "Tutor y coordinación",
          ],
          [
            "B5. Capacidad instalada",
            "Personal del colegio que opera el sistema sin apoyo del equipo.",
            "Ninguno.",
            "Un responsable de TI y 80 % de tutores y coordinadores capacitados.",
            "Cierre del proyecto.",
            R.jhostin,
          ],
        ],
        { titulo: "Plan de gestión de beneficios", compacta: true },
      ),
      nota(
        "Dos indicadores (B1 y B2) no tienen línea base todavía. Se levantan en el Sprint 1, dentro de la actividad A-0.1.1.2; sin esa medición inicial no será posible demostrar el beneficio.",
      ),
    ]),
    sec("5. Costos e inversión", [
      kvPresupuesto(),
      p(
        "Estos montos valorizan el trabajo del equipo con tarifas del mercado laboral de TI de Lima; es un costo de oportunidad. El proyecto es autofinanciado por sus integrantes y el colegio no realiza desembolsos durante su ejecución. Por tratarse de un proyecto académico sin fines de lucro no se calculan VAN ni TIR: la decisión se apoya en la comparación entre el costo valorizado y los beneficios de la sección anterior.",
      ),
      p(
        "Los servicios en la nube se usan en sus planes gratuitos mientras el consumo se mantenga dentro de los límites (supuesto S-05). Si el colegio adopta el sistema de forma permanente, tendrá que asumir un plan de pago de alojamiento y de base de datos y el tiempo de un responsable interno; la estimación está en GOB-05.",
      ),
      nota(
        "La distribución de la línea base de costos por sprint se elaboró con el calendario anterior (marzo a agosto de 2026). Los montos por sprint no cambian, pero sus fechas se actualizarán al trabajar el dominio de Finanzas; el pendiente está registrado en la solicitud de cambio SC-02.",
      ),
    ]),
    sec("6. Riesgos principales para el negocio", [
      tabla(
        ["Riesgo", "Por qué importa"],
        [34, 66],
        [
          ["Datos insuficientes o de baja calidad", "El modelo depende de notas históricas reales; la asistencia y las incidencias aún no están digitalizadas."],
          ["Baja adopción por parte de los docentes", "Sin uso del tablero y de las alertas no hay beneficio, aunque el sistema funcione."],
          [
            "Tratamiento de datos personales de menores",
            "La Ley N.° 29733 exige informar a los apoderados y contar con su consentimiento; alojar datos fuera del país agrega obligaciones.",
          ],
          ["Dependencia de planes gratuitos de terceros", "Los límites o las condiciones del servicio pueden cambiar."],
          ["Calendario escolar", "El piloto solo puede hacerse con clases en curso; por eso se programó en marzo de 2027."],
        ],
        { titulo: "Riesgos de alto nivel" },
      ),
      p("El análisis formal de riesgos corresponde al dominio de Riesgo, que el equipo desarrollará más adelante."),
    ]),
    sec("7. Recomendación", [
      p("Se recomienda autorizar el proyecto con la alternativa 3 alojada en servicios gestionados en la nube, bajo tres condiciones:"),
      ol(
        "El colegio facilita las exportaciones de notas de Cubicol y designa a la persona que actuará como Product Owner.",
        "Antes de cargar datos reales en la nube se resuelve el tratamiento de datos personales: información a los apoderados, consentimiento y medidas de seguridad.",
        "El modelo se valida con datos reales del colegio antes del piloto; mientras tanto, el prototipo se presenta como una demostración con datos simulados.",
      ),
    ]),
  ],
});

export const GOB02 = DOC({
  ...base,
  id: "GOB-02",
  titulo: "Acta de constitución del proyecto",
  archivo: "GOB-02 Acta de constitución",
  salida: "Acta de constitución del proyecto",
  aprobacion: "Firmada por la patrocinadora y el director del proyecto",
  version: "1.1",
  fecha: P.fechaCorte,
  versiones: [
    ["1.0", P.fechaEmision, "Versión inicial, emitida para firma.", P.director],
    ["1.1", P.fechaCorte, "Se registra la aprobación y la firma en la reunión de inicio del 12/10/2026 (GOB-12).", P.director],
  ],
  resumen:
    "Autoriza formalmente el proyecto y da al director del proyecto la autoridad para usar los recursos. Contiene los doce elementos que pide la Guía del PMBOK® para un acta de constitución.",
  secciones: [
    sec("1. Datos generales", [
      kv(
        ["Proyecto", P.nombre],
        ["Sigla", P.sigla],
        ["Organización cliente", `${P.cliente}. ${P.clienteDireccion}.`],
        ["Patrocinadora", P.patrocinadora],
        ["Director del proyecto", P.director],
        ["Equipo del proyecto", P.equipo.slice(1).map((m) => m.corto).join(", ")],
        ["Docente asesor", `${P.docente} — ${P.curso}, UNTELS`],
        ["Periodo", `Del ${P.inicio} al ${P.fin}`],
        ["Fecha de emisión", P.fechaEmision],
      ),
    ]),
    sec("2. Propósito y justificación del proyecto", [
      p(
        "El proyecto dotará a la I.E.P. Peruano Francés de un sistema web que reúne las notas, la asistencia y las incidencias de sus estudiantes, estima cada semana el riesgo de bajo rendimiento de cada uno y avisa a tiempo al docente tutor, a la coordinación y a la dirección.",
      ),
      p(
        "Se justifica porque hoy la detección es tardía: la información está repartida entre Cubicol, cuadernos y WhatsApp, y los seis docentes encuestados reconocen que los problemas académicos se advierten cuando ya ocurrieron. El sustento completo está en el caso de negocio (GOB-01).",
      ),
    ]),
    sec("3. Objetivos medibles y criterios de éxito", [
      tabla(
        ["Objetivo", "Criterio de éxito", "Quién lo verifica"],
        [18, 60, 22],
        [
          [
            "Alcance",
            "Se entregan y aceptan los nueve entregables del producto (E-01 a E-09), que cubren los 20 requisitos (12 funcionales y 8 no funcionales). Todos los requisitos de prioridad alta quedan aceptados.",
            "Product Owner",
          ],
          [
            "Tiempo",
            `El proyecto concluye el ${P.fin}. Los seis hitos se cumplen con una desviación total no mayor de una semana y media; índice de desempeño del cronograma (SPI) de 0.90 o más.`,
            "Director del proyecto",
          ],
          [
            "Costo",
            `El costo valorizado no supera ${P.presupuesto.total}; índice de desempeño del costo (CPI) de 0.90 o más. El colegio no realiza desembolsos durante el proyecto.`,
            "Director del proyecto",
          ],
          [
            "Calidad del modelo",
            "El modelo alcanza el umbral mínimo de 75 % en la métrica de desempeño acordada, validado con datos reales del colegio. La línea base dice «precisión mínima de 75 %»; su redefinición como proporción de estudiantes en riesgo detectados está en evaluación (SC-08).",
            "Responsable del modelo ML y docente asesor",
          ],
          [
            "Uso",
            "Tres docentes tutores completan el piloto de dos semanas; al menos 80 % de tutores y coordinadores recibe la capacitación; el tablero carga en menos de 3 segundos.",
            "Product Owner",
          ],
          [
            "Cumplimiento legal",
            "El tratamiento de datos personales se ajusta a la Ley N.° 29733 antes de cargar datos reales de estudiantes.",
            "Patrocinadora",
          ],
          [
            "Beneficio",
            "Reducción de al menos 30 % en los casos de detección tardía durante el año escolar 2027. Se mide después del cierre del proyecto (ver GOB-01).",
            "Patrocinadora",
          ],
        ],
        { titulo: "Objetivos y criterios de éxito" },
      ),
    ]),
    sec("4. Requisitos de alto nivel", [
      ul(
        "Integrar en una sola base las notas, la asistencia, la participación y las incidencias de los estudiantes.",
        "Limpiar y validar los datos de forma automática antes de usarlos.",
        "Clasificar cada semana a cada estudiante en riesgo bajo, medio o alto mediante un modelo de Machine Learning.",
        "Avisar por correo y en el panel web al docente tutor y a la coordinación cuando un estudiante pasa a riesgo alto, y comunicar el caso al apoderado.",
        "Mostrar un tablero con semáforo por estudiante, aula y grado, la ficha de cada estudiante y reportes exportables.",
        "Registrar las acciones de seguimiento que el colegio toma con cada caso.",
        "Controlar el acceso por rol (docente, coordinación, psicología y dirección) y proteger los datos personales conforme a la Ley N.° 29733.",
        "Ser utilizable por un docente tras una capacitación de dos horas, desde cualquier navegador.",
      ),
      p("El detalle está en la documentación de requisitos y en su matriz de trazabilidad (dominio de Alcance)."),
    ]),
    sec("5. Descripción de alto nivel, límites y entregables clave", [
      p(
        "El producto es un sistema web alojado en servicios gestionados en la nube. Un proceso programado toma cada semana los datos académicos, actualiza el modelo y calcula el nivel de riesgo de cada estudiante; el tablero y el motor de alertas presentan esos resultados a quienes deben actuar.",
      ),
      tabla(
        ["Código", "Entregable clave", "Sprint"],
        [12, 70, 18],
        [
          ["E-01", "Módulo de integración y limpieza de datos", "Sprint 2"],
          ["E-02", "Modelo predictivo de riesgo académico, con tres niveles y actualización semanal", "Sprint 3"],
          ["E-03", "Motor de alertas tempranas (correo y panel web)", "Sprint 4"],
          ["E-04", "Tablero web con semáforo, fichas de estudiante y reportes", "Sprint 4"],
          ["E-05", "Gestión de roles y accesos", "Sprint 4"],
          ["E-09", "Informe del piloto con docentes tutores y ajustes aplicados", "Sprint 5"],
          ["E-06", "Manual de usuario", "Sprint 6"],
          ["E-07", "Manual técnico", "Sprint 6"],
          ["E-08", "Plan y sesión de capacitación de dos horas", "Sprint 6"],
        ],
        { titulo: "Entregables clave del producto" },
      ),
      h("Límites del proyecto"),
      tabla(
        ["Dentro del alcance", "Fuera del alcance"],
        [50, 50],
        [
          [
            [
              "Datos de notas, asistencia, participación e incidencias.",
              "Usuarios: tutores, coordinación, psicología, dirección y personal administrativo.",
              "Comunicados a los apoderados de estudiantes en riesgo alto.",
              "Piloto con docentes antes del despliegue definitivo.",
              "Una institución: la I.E.P. Peruano Francés.",
            ],
            [
              "Aplicación móvil nativa.",
              "Instalación o administración de servidores en el colegio.",
              "Integración con plataformas distintas de Cubicol.",
              "Registro de asistencia con código QR y envío automático por WhatsApp.",
              "Pagos, facturación y videoconferencia.",
              "Evaluación del desempeño de los docentes.",
            ],
          ],
        ],
      ),
    ]),
    sec("6. Riesgo general del proyecto", [
      p(
        "El riesgo general del proyecto se considera **medio-alto**. El equipo tiene la capacidad técnica y un calendario con holgura, pero el resultado depende de condiciones que no controla: datos reales suficientes, adopción por parte de los docentes y un tratamiento correcto de los datos personales de menores. Los riesgos principales se listan en el caso de negocio (GOB-01); su análisis formal se hará en el dominio de Riesgo.",
      ),
    ]),
    sec("7. Resumen del cronograma de hitos", [
      tablaHitos(),
      p("El detalle de las 44 actividades está en la línea base del cronograma (CRO-01)."),
    ]),
    sec("8. Recursos financieros preaprobados", [
      kvPresupuesto(),
      p(
        "La patrocinadora no asigna fondos: el presupuesto corresponde al trabajo del equipo, valorizado, y lo asumen sus integrantes. El colegio aporta, sin costo, el acceso a los datos académicos, un ambiente para reuniones y capacitación, y el tiempo de su personal en entrevistas, validaciones, piloto y pruebas de aceptación.",
      ),
      p(
        "La reserva de contingencia la administra el director del proyecto. El uso de la reserva de gestión requiere la conformidad de la patrocinadora.",
      ),
    ]),
    sec("9. Lista de interesados clave", [tablaInteresadosClave()]),
    sec("10. Requisitos de aprobación del proyecto", [
      tabla(
        ["Qué se aprueba", "Quién aprueba", "Cómo queda constancia"],
        [38, 30, 32],
        [
          ["Acta de constitución y cambios a sus objetivos", "Patrocinadora", "Firma del acta o de la solicitud de cambio"],
          [
            "Líneas base de alcance, cronograma y costos, y sus cambios",
            "Patrocinadora o Product Owner designado, a propuesta del director del proyecto",
            "Registro de cambios (GOB-10)",
          ],
          ["Entregables de cada sprint", "Product Owner", "Acta de aceptación en la revisión del sprint (ALC-04)"],
          ["Resultado del piloto y pase a producción", "Patrocinadora", "Acta de la revisión del Sprint 5"],
          ["Entregables académicos del curso", "Docente asesor", "Calificación y observaciones en clase"],
          ["Cierre del proyecto", "Patrocinadora y director del proyecto", "Acta de cierre"],
        ],
        { titulo: "Aprobaciones" },
      ),
      p("El proyecto se considera exitoso si cumple los criterios de la sección 3 y la patrocinadora firma el acta de cierre."),
    ]),
    sec("11. Criterios de salida del proyecto", [
      h("El proyecto se cierra cuando"),
      ul(
        "Todos los entregables están aceptados, o sus pendientes fueron transferidos por escrito al colegio.",
        "El sistema opera en producción y los accesos de administración fueron entregados al colegio.",
        "La capacitación se realizó y los manuales fueron entregados.",
        "Las lecciones aprendidas y el informe final están registrados.",
        "Los datos de prueba fueron eliminados y los accesos del equipo, retirados.",
      ),
      h("El proyecto se suspende o se cancela si"),
      ul(
        "El colegio retira la autorización, o no entrega datos reales hasta el cierre del Sprint 2 (04/12/2026).",
        "No se resuelve el tratamiento de datos personales antes del Sprint 5.",
        "El modelo no alcanza el umbral con datos reales después del Sprint 3 y no hay una alternativa aprobada. En ese caso se evalúa reducir el alcance a tablero y alertas por reglas.",
        "El equipo se reduce a menos de tres integrantes.",
      ),
    ]),
    sec("12. Director del proyecto: responsabilidad y nivel de autoridad", [
      kv(
        ["Director del proyecto", P.director],
        [
          "Responsabilidad",
          "Planificar, coordinar y controlar el proyecto; integrar el trabajo del equipo; mantener informados a los interesados; custodiar los documentos y el registro de cambios.",
        ],
        [
          "Puede decidir",
          "La asignación de tareas y la convocatoria a reuniones; el uso de la reserva de contingencia; los cambios que no alteran las líneas base; la representación del equipo ante el colegio y el docente.",
        ],
        [
          "No puede decidir solo",
          "Cambios a los objetivos, al alcance, a las fechas de los hitos o al presupuesto (sección 10); compromisos del colegio con proveedores.",
        ],
        ["Escalamiento", "Primero al Product Owner; luego a la patrocinadora. En lo académico, al docente asesor."],
      ),
    ]),
    sec("13. Patrocinadora y autorización", [
      p(
        "Con su firma, la patrocinadora autoriza el inicio del proyecto y faculta al director del proyecto a utilizar los recursos descritos en este documento.",
      ),
      nota(
        `Documento emitido para firma el ${P.fechaEmision}. Aprobado en la reunión de inicio del ${P.inicio} (GOB-12) y firmado en físico por la Promotora Directora y el director del proyecto. El original firmado queda en custodia del equipo.`,
        "info",
      ),
      firmas(
        { nombre: "Promotora Directora", rol: "Patrocinadora — I.E.P. Peruano Francés" },
        { nombre: P.director, rol: "Director del proyecto" },
      ),
    ]),
  ],
});

export const GOB03 = DOC({
  ...base,
  id: "GOB-03",
  titulo: "Registro de supuestos y restricciones",
  archivo: "GOB-03 Registro de supuestos",
  salida: "Registro de supuestos",
  resumen:
    "Lista lo que el proyecto da por cierto sin tener aún la prueba y los límites que no puede cambiar. Cada supuesto tiene quién lo comprueba y cuándo.",
  secciones: [
    sec("1. Uso del registro", [
      p(
        "Un supuesto es algo que el proyecto da por cierto sin tener todavía la prueba; una restricción es un límite que el proyecto no puede cambiar. Cada supuesto tiene un responsable de comprobarlo y una fecha. Si resulta falso, se registra un incidente (GOB-06) o una solicitud de cambio (GOB-10).",
      ),
      p("El registro se revisa en la planificación de cada sprint y lo mantiene el director del proyecto."),
    ]),
    sec(
      "2. Supuestos",
      [
        tabla(
          ["ID", "Supuesto", "Qué pasa si no se cumple", "Quién lo comprueba", "Cuándo", "Estado"],
          [5, 28, 25, 14, 14, 14],
          [
            ["S-01", "El colegio entregará exportaciones de notas de Cubicol de 2025 y 2026.", "No hay datos para entrenar ni validar el modelo.", R.jadira, "Sprint 1 (hasta el 23/10/2026)", c("Por comprobar", "amarillo")],
            [
              "S-02",
              "Los datos históricos cubren al menos dos periodos consecutivos por estudiante.",
              "No se puede predecir un periodo a partir del anterior.",
              R.helber,
              "Sprint 1",
              c("Comprobado en parte: hay registros de marzo a mayo y del primer trimestre de 2026 para algunos cursos", "azul"),
            ],
            ["S-03", "La asistencia y las incidencias podrán registrarse en formato digital desde el Sprint 2.", "El modelo trabaja solo con notas y pierde variables.", `${R.jadira}, con la Dirección`, "Sprint 2", c("Por comprobar", "amarillo")],
            ["S-04", "El colegio designará a una persona como Product Owner.", "Se retrasan las decisiones de prioridad y la aceptación de entregables.", R.jhostin, `Semana del ${P.inicio}`, c("Comprobado: Helber Perez, docente de la institución (reunión de inicio, 12/10/2026)", "verde")],
            ["S-05", "Los planes gratuitos de alojamiento y base de datos alcanzan para 200 estudiantes y unos 20 usuarios.", "Se requiere un plan de pago o cambiar de proveedor.", R.jadira, "Sprint 1 (diseño de arquitectura)", c("Por comprobar", "amarillo")],
            ["S-06", "Los apoderados serán informados y darán su consentimiento para el tratamiento de los datos.", "No se pueden cargar datos reales en la nube; el piloto se haría con datos anonimizados.", "Dirección, con apoyo del equipo", "Antes del Sprint 5", c("Por comprobar", "amarillo")],
            ["S-07", "Tres docentes tutores participarán en el piloto en marzo de 2027.", "El piloto no se realiza o pierde validez.", R.jhostin, "Sprint 4", c("Por comprobar", "amarillo")],
            ["S-08", "Las clases terminan en diciembre de 2026 y se reanudan en marzo de 2027.", "Cambian las fechas del piloto y de las pruebas de aceptación.", `${R.jhostin}, con la Dirección`, `Semana del ${P.inicio}`, c("Por comprobar", "amarillo")],
            ["S-09", "El servicio de internet del colegio se mantiene estable.", "El tablero no está disponible en horario escolar.", "Encargado de TI del colegio", "Sprint 5", c("Por comprobar: en la entrevista se mencionó lentitud reciente", "amarillo")],
            ["S-10", "Los cuatro integrantes del equipo permanecen hasta abril de 2027.", "Se reasignan paquetes de trabajo y puede reducirse el alcance.", R.jhostin, "Revisión en cada sprint", c("Vigente", "verde")],
            [
              "S-11",
              "Los docentes tienen un correo personal donde recibir las alertas.",
              "Las alertas llegan solo por el panel web.",
              R.jadira,
              "Sprint 4",
              c("Comprobado en parte: usan correo personal de Gmail; falta la lista de direcciones", "azul"),
            ],
            ["S-12", "El Product Owner dispone de tiempo cada semana para llevar los pedidos y observaciones entre el colegio y el equipo.", "Se retrasan los pedidos de datos, el taller con docentes y la aceptación de los entregables.", R.jhostin, "Cada semana", c("Por comprobar", "amarillo")],
          ],
          { titulo: "Registro de supuestos", compacta: true },
        ),
      ],
      { apaisada: true },
    ),
    sec("3. Restricciones", [
      tabla(
        ["ID", "Restricción", "Origen", "Efecto en el proyecto"],
        [8, 38, 16, 38],
        [
          ["R-01", `Fecha de cierre: ${P.fin}.`, "Calendario del curso", "Seis sprints de cuatro semanas; después de la reserva de gestión no hay margen."],
          ["R-02", "Sin presupuesto institucional: solo herramientas de licencia libre o planes gratuitos.", "Colegio y equipo", "Condiciona la arquitectura y el abastecimiento."],
          ["R-03", "Equipo fijo de cuatro integrantes.", "Curso", "No se puede incorporar personal adicional."],
          ["R-04", "Ley N.° 29733 de Protección de Datos Personales: los estudiantes son menores de edad.", "Legal", "Consentimiento, medidas de seguridad y reglas para alojar datos fuera del país."],
          ["R-05", "Receso del 01/02/2027 al 26/02/2027.", "Calendario escolar", "No hay actividades con docentes; el piloto pasa a marzo."],
          ["R-06", "El repositorio y el blog del proyecto son públicos.", "Decisión del equipo", "No pueden contener datos personales de estudiantes, docentes ni apoderados."],
          ["R-08", "La comunicación con el colegio se hace a través del Product Owner; no se programan más reuniones con la Dirección (SC-11).", "Reunión de inicio, 12/10/2026", "Los pedidos de datos, las validaciones con docentes y la conformidad de los entregables dependen de su disponibilidad."],
          ["R-07", "Cubicol es propiedad de un tercero.", "Proveedor", "El proyecto no puede modificarlo; solo usa sus exportaciones."],
        ],
        { titulo: "Registro de restricciones" },
      ),
    ]),
    sec("4. Supuestos retirados", [
      tabla(
        ["Supuesto de la versión anterior", "Situación", "Qué lo reemplaza"],
        [36, 34, 30],
        [
          ["El sistema se instalará en un servidor del colegio.", "Retirado por la solicitud de cambio SC-03.", "Alojamiento en servicios gestionados en la nube (S-05)."],
          ["El colegio provee un servidor de correo institucional.", "Invalidado: en la entrevista se indicó que los docentes usan correos personales.", "Servicio de envío de correo y supuesto S-11."],
          ["Cubicol ofrece una API o acceso directo a su base de datos.", "No comprobado; se trata como riesgo.", "Exportaciones entregadas por la gestora de la plataforma (S-01)."],
          ["Los datos históricos cubren al menos tres años.", "No comprobado.", "Supuesto S-02, con un mínimo de dos periodos."],
        ],
        { titulo: "Supuestos de la fase de formulación que ya no aplican" },
      ),
    ]),
  ],
});
