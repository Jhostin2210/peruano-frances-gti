// Dominio de Alcance (incluye la calidad): lo que faltaba respecto de la fase de formulación.
// Los requisitos, la EDT y su diccionario ya existían; aquí se emiten el plan de gestión, el enunciado
// del alcance actualizado, el plan de calidad y el procedimiento de validación.

import { c, firmas, h, kv, nota, ol, p, sec, tabla, ul } from "../lib/bloques.mjs";
import { PROYECTO as P, R } from "../proyecto.mjs";
import { SPRINTS, fmtIso } from "../datos/calendario.mjs";
import { COMPONENTES, ENTREGABLES, PAQUETES, REQUISITOS, TOTALES_ALCANCE as T } from "../datos/requisitos.mjs";
import { DOC } from "./comunes.mjs";

const base = { dominio: "Alcance" };
const COLOR_PRIORIDAD = { Alta: "rojo", Media: "amarillo" };

// ───────────────────────── ALC-01 ─────────────────────────
export const ALC01 = DOC({
  ...base,
  id: "ALC-01",
  titulo: "Plan de gestión del alcance y de los requisitos",
  archivo: "ALC-01 Plan de gestión del alcance",
  carpeta: "03 - Alcance/3.1 Planificar",
  area: "Planificación",
  proceso: "Planificar la gestión del alcance",
  salida: "Plan de gestión del alcance y plan de gestión de los requisitos",
  resumen:
    "Explica cómo se define, se desglosa, se valida y se controla el alcance del proyecto, y cómo se registran, priorizan y siguen los requisitos.",
  secciones: [
    sec("1. Propósito y enfoque", [
      p(
        "Este plan establece las reglas para que el proyecto haga todo el trabajo requerido y solo el trabajo requerido. Distingue dos alcances: el **alcance del producto**, que son las funciones y características del sistema, y el **alcance del proyecto**, que es el trabajo necesario para entregarlo.",
      ),
      p(
        "Como el enfoque de desarrollo es híbrido (GOB-04), el alcance general se fija al inicio en una línea base y el detalle de cada sprint se ordena en una lista de trabajo pendiente (Product Backlog) que el Product Owner prioriza.",
      ),
    ]),
    sec("2. Procesos del alcance en este proyecto", [
      tabla(
        ["Proceso", "Cómo se realiza", "Responsable", "Resultado"],
        [22, 42, 16, 20],
        [
          ["Recopilar y analizar requisitos", "Entrevista, encuesta, análisis de documentos y pensamiento de diseño (mapas de empatía, usuario tipo y recorrido del usuario). Cada requisito se registra en una planilla.", R.equipo, "Documentación de requisitos y matriz de trazabilidad"],
          ["Definir el alcance", "Análisis del producto y de alternativas; juicio del equipo con la Dirección.", R.jhostin, "Enunciado del alcance (ALC-02)"],
          ["Desarrollar la estructura del alcance", "Descomposición del trabajo en componentes y paquetes hasta un nivel que se pueda estimar y asignar.", R.jhostin, "EDT y diccionario de la EDT"],
          ["Validar el alcance", "Inspección de cada entregable frente a sus criterios en la revisión del sprint.", "Product Owner", "Actas de aceptación (ALC-04)"],
          ["Monitorear y controlar el alcance", "Comparación del trabajo hecho con la línea base; todo pedido nuevo pasa por control de cambios.", R.carlos, "Registro de cambios (GOB-10)"],
        ],
        { titulo: "Cómo se lleva cada proceso del dominio" },
      ),
    ]),
    sec("3. Gestión de los requisitos", [
      h("Identificación y registro"),
      p(
        `Cada requisito tiene un código: REQ para los funcionales y RNF para los no funcionales. El proyecto tiene ${T.requisitos} requisitos: ${T.funcionales} funcionales y ${T.noFuncionales} no funcionales. La planilla de cada uno registra descripción, justificación, interesado que lo propone, criterio de validación, grado de satisfacción e insatisfacción, dependencias, conflictos y documentos de soporte.`,
      ),
      h("Priorización"),
      p(
        `La prioridad es alta o media. Es alta cuando sin el requisito el sistema no cumple su objetivo o incumple la ley; ${T.alta} de los ${T.requisitos} requisitos son de prioridad alta. Dentro de cada sprint, el Product Owner ordena el trabajo.`,
      ),
      h("Trazabilidad"),
      p(
        `La matriz de trazabilidad enlaza cada requisito con el objetivo que atiende, el entregable y el paquete de la EDT que lo produce, y sus casos de prueba. Hay ${T.casosDePrueba} casos de prueba, cuatro por requisito (CP-01 a CP-80).`,
      ),
      tabla(
        ["Estado", "Significado"],
        [24, 76],
        [
          [c("Pendiente", "gris"), "Aún no se inicia su desarrollo."],
          [c("En desarrollo", "azul"), "En construcción o en prueba dentro de un sprint."],
          [c("Completado", "verde"), "Implementado, con sus casos de prueba aprobados y aceptado por el Product Owner."],
          [c("Bloqueado", "rojo"), "Tiene un impedimento; se registra un incidente (GOB-06)."],
        ],
        { titulo: "Estados de un requisito", fuente: `Al ${P.fechaEmision}, los ${T.requisitos} requisitos están en estado «Pendiente».` },
      ),
      h("Cambios en los requisitos"),
      p(
        "Un requisito nuevo o modificado se presenta como solicitud de cambio. El responsable del control de cambios analiza su efecto en el alcance, el cronograma y el costo, y la decisión se registra en GOB-10 antes de tocar la línea base.",
      ),
    ]),
    sec("4. Métricas del alcance", [
      tabla(
        ["Métrica", "Cómo se calcula", "Meta", "Cuándo se mide"],
        [24, 40, 16, 20],
        [
          ["Cobertura de trazabilidad", "Requisitos con casos de prueba entre el total de requisitos.", "100 %", "Cada sprint"],
          ["Estabilidad de los requisitos", "Requisitos sin cambios en el sprint entre el total de requisitos.", "90 % o más", "Cada sprint"],
          ["Requisitos aceptados", "Requisitos aceptados entre los comprometidos en el sprint.", "80 % o más", "Revisión del sprint"],
          ["Aceptación a la primera", "Entregables aceptados sin observaciones entre los presentados.", "80 % o más", "Revisión del sprint"],
          ["Corrupción del alcance", "Trabajo realizado que no corresponde a un requisito ni a un cambio aprobado.", "Cero casos", "Cada sprint"],
          ["Avance del alcance", "Paquetes de trabajo terminados entre el total de paquetes.", "Según el cronograma", "Cada sprint"],
        ],
        { titulo: "Métricas de alcance y de requisitos" },
      ),
    ]),
    sec("5. Línea base del alcance", [
      p("La línea base del alcance está formada por tres documentos. Se aprueba con el acta de constitución y solo cambia por control de cambios."),
      tabla(
        ["Componente", "Documento", "Situación"],
        [26, 38, 36],
        [
          ["Enunciado del alcance", "ALC-02 (versión 3)", c("Actualizado al 10/10/2026", "verde")],
          ["Estructura de desglose del trabajo (EDT)", "Diagrama de la EDT (fase de formulación)", c("Vigente; responsables actualizados (SC-01)", "verde")],
          ["Diccionario de la EDT", "Diccionario de la EDT (fase de formulación)", c("Por unificar con la EDT (SC-10)", "amarillo")],
        ],
        { titulo: "Componentes de la línea base del alcance" },
      ),
    ]),
    sec("6. Roles", [
      tabla(
        ["Rol", "Responsabilidad sobre el alcance"],
        [30, 70],
        [
          ["Patrocinadora", "Aprueba la línea base y los cambios que la modifican."],
          ["Product Owner", "Prioriza los requisitos y acepta los entregables."],
          ["Director del proyecto", "Mantiene el enunciado del alcance y la EDT; vigila que no se haga trabajo fuera del alcance."],
          ["Responsable del control de cambios", "Registra las solicitudes y mantiene la matriz de trazabilidad."],
          ["Equipo de desarrollo", "Construye los entregables según los criterios de aceptación y la definición de terminado (ALC-03)."],
        ],
        { titulo: "Roles en la gestión del alcance" },
      ),
    ]),
  ],
});

// ───────────────────────── ALC-02 ─────────────────────────
export const ALC02 = DOC({
  ...base,
  id: "ALC-02",
  titulo: "Enunciado del alcance del proyecto",
  archivo: "ALC-02 Enunciado del alcance",
  carpeta: "03 - Alcance/3.2 Definir el alcance",
  area: "Planificación",
  proceso: "Definir el alcance",
  salida: "Enunciado del alcance del proyecto",
  version: "3.0",
  versiones: [
    ["1.0", "2026 (curso anterior)", "Declaración del alcance de la fase de formulación.", "Equipo anterior"],
    ["2.0", "2026 (curso anterior)", "Se agregan el componente de pruebas y piloto y el entregable E-09.", "Equipo anterior"],
    ["3.0", P.fechaEmision, "Alojamiento en la nube (SC-03), tres niveles y cuatro roles (SC-04), nuevo equipo (SC-01) y nuevo periodo (SC-02).", P.director],
  ],
  resumen:
    "Describe el producto, sus entregables y criterios de aceptación, lo que queda fuera, y los supuestos y restricciones. Es la versión 3: reemplaza el alojamiento en el colegio por servicios en la nube.",
  secciones: [
    sec("1. Descripción del producto", [
      p(
        "El producto es un sistema web de alerta temprana del bajo rendimiento académico para la I.E.P. Peruano Francés, alojado en servicios gestionados en la nube. Reúne los datos académicos de los estudiantes (notas, asistencia, participación e incidencias), los procesa con un modelo de Machine Learning implementado en Python con Scikit-learn y clasifica a cada estudiante en riesgo alto, medio o bajo. Con ese resultado genera alertas para docentes, coordinación y dirección.",
      ),
      p(
        "La interfaz web, desarrollada con Next.js, muestra tableros, fichas individuales y reportes, y se usa desde el navegador sin instalar programas.",
      ),
      kv(
        ["Objetivo del producto", "Mejorar la detección temprana del bajo rendimiento académico mediante un sistema que genere alertas oportunas para la toma de decisiones pedagógicas."],
        ["Usuarios", "Docentes tutores, coordinación académica, psicología, dirección y subdirección."],
        ["Población atendida", "Alrededor de 200 estudiantes de inicial, primaria y secundaria."],
      ),
    ]),
    sec("2. Entregables del producto", [
      tabla(
        ["Código", "Entregable", "Tipo", "Descripción", "Sprint"],
        [9, 23, 13, 43, 12],
        ENTREGABLES.map((e) => [e.id, e.nombre, e.tipo, e.descripcion, c(`Sprint ${e.sprint}`, undefined, { align: "center" })]),
        { titulo: "Entregables del producto" },
      ),
      p("Los entregables de gestión del proyecto (planes, informes y registros) se listan en el índice de la documentación (BASE-01)."),
    ]),
    sec("3. Requisitos que cubre el alcance", [
      p(
        `El alcance responde a ${T.requisitos} requisitos: ${T.funcionales} funcionales y ${T.noFuncionales} no funcionales. La planilla completa de cada uno está en la documentación de requisitos y sus ${T.casosDePrueba} casos de prueba, en la matriz de trazabilidad.`,
      ),
      tabla(
        ["Código", "Requisito", "Prioridad", "Entregable", "Paquete EDT", "Casos de prueba"],
        [10, 38, 11, 13, 13, 15],
        REQUISITOS.map((r) => [r.id, r.titulo, c(r.prioridad, COLOR_PRIORIDAD[r.prioridad], { align: "center" }), r.entregable, r.paquete, r.cp]),
        { titulo: "Requisitos, entregables y casos de prueba", compacta: true },
      ),
    ]),
    sec("4. Criterios de aceptación del producto", [
      tabla(
        ["Aspecto", "Criterio de aceptación"],
        [20, 80],
        [
          ["Funcional", "El sistema detecta y alerta a los estudiantes en riesgo alto en un plazo máximo de 24 horas desde el procesamiento de los datos."],
          ["Rendimiento", "El tablero carga en menos de 3 segundos y la clasificación semanal se genera sin intervención manual."],
          ["Seguridad", "El acceso requiere usuario y contraseña, con vistas distintas según el rol."],
          ["Facilidad de uso", "El docente tutor navega el tablero e interpreta las alertas tras una capacitación de dos horas como máximo."],
          ["Modelo", "El modelo alcanza el umbral mínimo de 75 % en la métrica acordada, validado con datos reales del colegio. La línea base dice «precisión»; su redefinición está en evaluación (SC-08)."],
          ["Datos personales", "Antes de cargar datos reales se cuenta con la política de tratamiento de datos y el consentimiento informado de los apoderados."],
          ["Documentación", "Se entregan el manual de usuario, el manual técnico y el plan de capacitación, validados con el encargado de TI del colegio."],
        ],
        { titulo: "Criterios de aceptación" },
      ),
    ]),
    sec("5. Dentro y fuera del alcance", [
      h("Dentro del alcance"),
      ul(
        "Integración de datos de notas, asistencia, participación e incidencias.",
        "Modelo de clasificación del riesgo académico con actualización semanal.",
        "Tablero web con semáforo de riesgo, fichas individuales y reportes por unidad.",
        "Alertas automáticas por correo y en el panel web.",
        "Comunicados para los apoderados de estudiantes en riesgo alto.",
        "Roles y accesos diferenciados.",
        "Piloto con docentes antes del despliegue definitivo.",
        "Manuales y capacitación.",
      ),
      h("Fuera del alcance"),
      ul(
        "Aplicación móvil nativa.",
        "Instalación o administración de servidores en el colegio.",
        "Integración con plataformas distintas de Cubicol, y cualquier modificación de Cubicol.",
        "Registro de asistencia con código QR y envío automático de mensajes por WhatsApp.",
        "Pagos, facturación y videoconferencia.",
        "Evaluación del desempeño de los docentes.",
        "Más de una institución educativa en esta versión.",
      ),
      h("Limitaciones conocidas"),
      ul(
        "La calidad del modelo depende de la cantidad y la calidad de los datos históricos que entregue el colegio.",
        "El sistema requiere conexión a internet.",
        "El modelo no garantiza 100 % de acierto: el nivel de riesgo es una señal para revisar el caso, no un diagnóstico.",
        "Las mejoras y funciones nuevas se tratarán en versiones futuras.",
      ),
    ]),
    sec("6. Estructura de desglose del trabajo", [
      p(
        `La EDT tiene cuatro niveles: el proyecto, ${COMPONENTES.length} componentes, los paquetes de trabajo y, en el tablero web, un nivel más de detalle.`,
      ),
      tabla(
        ["Código", "Componente", "Descripción"],
        [10, 28, 62],
        COMPONENTES.map((x) => [x.id, x.nombre, x.descripcion]),
        { titulo: "Componentes de la EDT (nivel 2)" },
      ),
      tabla(
        ["Código", "Paquete de trabajo", "Responsable", "Entregable", "Criterio de aceptación"],
        [9, 20, 15, 20, 36],
        PAQUETES.map((x) => [
          x.origen === "ambos" ? x.id : c(x.id, "amarillo"),
          x.nombre,
          x.responsable,
          x.entregable,
          x.criterio,
        ]),
        {
          titulo: "Paquetes de trabajo",
          compacta: true,
          fuente: `En amarillo: paquetes que figuran en el diccionario de la EDT pero no en la declaración del alcance anterior. La declaración lista ${T.paquetesDeclaracion} paquetes y el diccionario, ${T.paquetes}; la unificación está en evaluación (SC-10).`,
        },
      ),
    ]),
    sec("7. Supuestos y restricciones", [
      p("Los supuestos y las restricciones del proyecto se mantienen en un solo lugar: el registro de supuestos (GOB-03). Los que más pesan sobre el alcance son:"),
      ul(
        "**S-01 y S-02.** El colegio entrega exportaciones de notas de 2025 y 2026, con al menos dos periodos consecutivos por estudiante.",
        "**S-03.** La asistencia y las incidencias podrán registrarse en formato digital desde el Sprint 2; si no, el modelo trabajará solo con notas.",
        "**S-06.** Los apoderados son informados y dan su consentimiento antes de cargar datos reales.",
        "**R-02.** Solo herramientas de licencia libre o planes gratuitos.",
        "**R-04.** Ley N.° 29733: los estudiantes son menores de edad.",
        "**R-07.** Cubicol es de un tercero: el proyecto solo usa sus exportaciones.",
      ),
    ]),
    sec("8. Cambios respecto de la versión 2", [
      tabla(
        ["Tema", "Versión 2", "Versión 3", "Cambio"],
        [16, 32, 38, 14],
        [
          ["Alojamiento", "Sistema autohospedado en la infraestructura del colegio; la nube pública estaba excluida.", "Servicios gestionados en la nube; se excluye administrar servidores en el colegio.", "SC-03"],
          ["Conexión", "Requería la red interna del colegio.", "Requiere conexión a internet.", "SC-03"],
          ["Datos personales", "Los datos permanecían en el colegio.", "Se agregan el consentimiento de los apoderados y las condiciones para alojar datos fuera del país.", "SC-03"],
          ["Correo de alertas", "Correo institucional.", "Correos personales autorizados; en evaluación.", "SC-09"],
          ["Niveles y roles", "Tres niveles y cuatro roles en los documentos; cuatro y tres en el prototipo.", "Tres niveles y cuatro roles como estándar.", "SC-04"],
          ["Criterio del modelo", "Precisión mínima de 75 %.", "Umbral de 75 % en la métrica acordada; redefinición en evaluación.", "SC-08"],
          ["Responsables", "Equipo del curso anterior.", "Equipo actual.", "SC-01"],
          ["Plazo", "Periodo del curso anterior.", `Del ${P.inicio} al ${P.fin}.`, "SC-02"],
          ["Asistencia con QR y WhatsApp", "No figuraban como requisitos, pero el blog los mostraba.", "Declarados fuera del alcance.", "—"],
        ],
        { titulo: "Diferencias entre la versión 2 y la versión 3", compacta: true },
      ),
    ]),
  ],
});

// ───────────────────────── ALC-03 ─────────────────────────
export const ALC03 = DOC({
  ...base,
  id: "ALC-03",
  titulo: "Plan de gestión de la calidad",
  archivo: "ALC-03 Plan de gestión de la calidad",
  carpeta: "03 - Alcance/3.3 Calidad",
  area: "Planificación",
  proceso: "Planificar la gestión del alcance",
  salida: "Plan de gestión de la calidad y métricas de calidad",
  resumen:
    "Define qué significa calidad en este proyecto, con qué métricas se mide, cómo se asegura durante el trabajo y cómo se controla cada entregable antes de presentarlo.",
  secciones: [
    sec("1. Enfoque de la calidad", [
      p(
        "En la octava edición de la Guía del PMBOK®, la calidad no es un área separada: su planificación y su control están en el dominio de Alcance, y su aseguramiento, en el de Gobernanza. Este plan cubre los tres momentos y aplica el principio de incorporar la calidad en los procesos y en los entregables.",
      ),
      tabla(
        ["Momento", "Pregunta que responde", "Dónde se documenta"],
        [24, 44, 32],
        [
          ["Planificar la calidad", "¿Qué estándares aplican y cómo se medirán?", "Este plan"],
          ["Asegurar la calidad", "¿Se están siguiendo los procesos acordados?", "Informes de calidad (GOB-07 y siguientes)"],
          ["Controlar la calidad", "¿El entregable cumple sus requisitos?", "Casos de prueba y actas de aceptación (ALC-04)"],
        ],
        { titulo: "Los tres momentos de la calidad" },
      ),
    ]),
    sec("2. Estándares y normas aplicables", [
      ul(
        "Guía del PMBOK®, octava edición, para la gestión del proyecto.",
        "Ley N.° 29733 de Protección de Datos Personales y su reglamento.",
        "Criterios de validación de los 20 requisitos y sus 80 casos de prueba.",
        "Buenas prácticas de validación de modelos predictivos: datos de prueba que el modelo no vio, comparación con una regla simple y reporte de la matriz de confusión.",
        "Convenciones de código del repositorio: revisión por otro integrante antes de integrar un cambio.",
      ),
    ]),
    sec("3. Métricas de calidad del producto", [
      tabla(
        ["Qué se mide", "Métrica", "Meta", "Requisito", "Cuándo"],
        [22, 34, 16, 12, 16],
        [
          ["Datos integrados", "Registros cargados entre registros entregados; duplicados.", "100 %; cero duplicados", "REQ-01", "Sprint 2"],
          ["Limpieza de datos", "Días seguidos de ejecución sin fallas críticas.", "15 días", "REQ-02", "Sprints 2 y 5"],
          ["Modelo", "Métrica acordada sobre datos reales que el modelo no vio.", "75 % o más", "REQ-03", "Sprint 3"],
          ["Modelo frente a una regla simple", "Diferencia con la regla «nota del periodo anterior menor de 11».", "El modelo la supera", "REQ-03 (SC-08)", "Sprint 3"],
          ["Oportunidad de la alerta", "Horas entre la clasificación y el envío.", "24 horas o menos", "REQ-05", "Sprints 4 y 5"],
          ["Rendimiento", "Tiempo de carga del tablero.", "Menos de 3 s en 95 % de los accesos", "RNF-02", "Sprint 5"],
          ["Disponibilidad", "Tiempo disponible en horario escolar.", "95 % o más", "RNF-05", "Sprint 5"],
          ["Facilidad de uso", "Docentes que usan el tablero sin ayuda tras la capacitación.", "Todos los capacitados; encuesta a 5 o más", "RNF-01", "Sprints 5 y 6"],
          ["Control de acceso", "Accesos indebidos en las pruebas por rol.", "Cero", "REQ-11 y RNF-03", "Sprint 4"],
          ["Seguimiento", "Alertas de riesgo alto con registro de seguimiento en el piloto.", "100 %", "REQ-07", "Sprint 5"],
        ],
        { titulo: "Métricas de calidad del producto", compacta: true },
      ),
    ]),
    sec("4. Métricas de calidad del proyecto", [
      tabla(
        ["Qué se mide", "Métrica", "Meta"],
        [30, 46, 24],
        [
          ["Coherencia de la documentación", "Criterios de la lista de verificación que se cumplen.", "12 de 12"],
          ["Casos de prueba", "Casos aprobados entre casos ejecutados en el sprint.", "90 % o más"],
          ["Defectos", "Defectos críticos abiertos al cierre del sprint.", "Cero"],
          ["Retrabajo", "Entregables devueltos con observaciones.", "20 % o menos"],
          ["Datos personales", "Archivos con datos personales en el repositorio o en el blog.", "Cero"],
        ],
        { titulo: "Métricas de calidad del proyecto", fuente: "En la primera revisión (GOB-07), 1 de los 12 criterios de la lista de verificación se cumplía por completo y 4 se cumplían en parte." },
      ),
    ]),
    sec("5. Aseguramiento de la calidad", [
      ul(
        "**Revisión de calidad por sprint.** Antes de cada revisión de sprint se aplica la lista de verificación y se emite un informe de calidad.",
        "**Fuente única.** Los datos comunes del proyecto se escriben una sola vez y los documentos se generan desde ahí.",
        "**Revisión entre pares.** Ningún cambio de código o de contenido se integra sin la revisión de otro integrante.",
        "**Rótulo de lo simulado.** Todo dato, métrica o gráfico que no venga de una medición real se presenta como simulación.",
        "**Análisis de causa raíz.** Los hallazgos se agrupan por causa y la mejora se aplica al proceso, no solo al documento.",
      ),
    ]),
    sec("6. Control de la calidad", [
      p(
        `El control se hace con los ${T.casosDePrueba} casos de prueba de la matriz de trazabilidad, cuatro por requisito. Un requisito pasa a «Completado» cuando sus cuatro casos están aprobados y el Product Owner lo acepta.`,
      ),
      tabla(
        ["Tipo de prueba", "Qué verifica", "Sprint", "Responsable"],
        [22, 44, 14, 20],
        [
          ["Reconciliación de datos", "Que la base coincide con los registros de origen.", "2", R.jadira],
          ["Validación del modelo", "Desempeño con datos reales que el modelo no vio.", "3", R.helber],
          ["Pruebas funcionales", "Cada requisito funcional frente a su criterio.", "2 a 4", "Quien desarrolla y un revisor"],
          ["Pruebas de acceso por rol", "Que cada rol ve solo lo que le corresponde.", "4", R.jhostin],
          ["Pruebas de integración", "Que datos, modelo, alertas y tablero funcionan juntos.", "5", R.equipo],
          ["Pruebas de rendimiento y carga", "Tiempo de carga y uso simultáneo.", "5", `${R.carlos} y ${R.jadira}`],
          ["Piloto", "Uso real por 3 docentes tutores durante dos semanas.", "5", R.equipo],
          ["Pruebas de aceptación", "Aceptación formal por los docentes tutores.", "6", "Product Owner"],
        ],
        { titulo: "Plan de pruebas" },
      ),
      h("Definición de terminado"),
      p("Un elemento de trabajo se considera terminado cuando cumple todo lo siguiente:"),
      ol(
        "Cumple el criterio de validación de su requisito.",
        "Sus casos de prueba fueron ejecutados y aprobados.",
        "El cambio fue revisado por otro integrante e integrado en la rama principal.",
        "No usa datos personales reales fuera del entorno autorizado.",
        "Está documentado en el manual que corresponde.",
        "Fue mostrado en la revisión del sprint.",
      ),
    ]),
    sec("7. Roles y registros", [
      tabla(
        ["Rol", "Responsabilidad sobre la calidad"],
        [30, 70],
        [
          ["Director del proyecto", "Conduce la revisión de calidad de cada sprint y emite el informe."],
          ["Responsable del control de cambios", "Aplica la lista de verificación a los documentos y mantiene la matriz de trazabilidad."],
          ["Cada integrante", "Prueba lo que construye y revisa el trabajo de otro."],
          ["Product Owner", "Acepta u observa los entregables."],
          ["Docente asesor", "Observa el cumplimiento metodológico."],
        ],
        { titulo: "Roles en la calidad" },
      ),
      p("Registros de calidad: informes de calidad, resultados de los casos de prueba, actas de aceptación, registro de incidentes y registro de lecciones aprendidas."),
    ]),
  ],
});

// ───────────────────────── ALC-04 ─────────────────────────
const entregablesDe = (n) => ENTREGABLES.filter((e) => e.sprint === n).map((e) => `${e.id} ${e.nombre}`);
const VALIDACION = {
  1: { que: ["Arquitectura del sistema", "Lista de variables del modelo validada con docentes"], como: "Revisión del documento de arquitectura y del acta del taller de variables." },
  2: { que: entregablesDe(2), como: "Reconciliación de datos en tres fechas y revisión del reporte de calidad de datos." },
  3: { que: entregablesDe(3), como: "Revisión del informe de validación del modelo con el docente asesor." },
  4: { que: entregablesDe(4), como: "Demostración del sistema integrado y pruebas de acceso por rol." },
  5: { que: entregablesDe(5), como: "Revisión del informe del piloto y de las pruebas de integración y rendimiento." },
  6: { que: entregablesDe(6), como: "Pruebas de aceptación con los tutores, revisión de manuales y lista de asistencia a la capacitación." },
};

export const ALC04 = DOC({
  ...base,
  id: "ALC-04",
  titulo: "Procedimiento de validación del alcance",
  archivo: "ALC-04 Validación del alcance",
  carpeta: "03 - Alcance/3.4 Validar el alcance",
  area: "Monitoreo y control",
  proceso: "Validar el alcance",
  salida: "Entregables aceptados y formato de acta de aceptación",
  resumen:
    "Establece cómo el colegio acepta formalmente cada entregable: quién lo revisa, contra qué criterio, en qué fecha y con qué formato queda la constancia.",
  secciones: [
    sec("1. Propósito", [
      p(
        "Validar el alcance es obtener la aceptación formal de los entregables por parte del cliente. Es distinto del control de calidad: primero el equipo comprueba que el entregable es correcto (ALC-03) y después el Product Owner confirma que es lo que el colegio necesita.",
      ),
    ]),
    sec("2. Procedimiento", [
      ol(
        "El equipo verifica el entregable con sus casos de prueba y con la definición de terminado.",
        "El director del proyecto lo presenta en la revisión del sprint, con los resultados de las pruebas.",
        "El Product Owner lo inspecciona frente a los criterios de aceptación del enunciado del alcance (ALC-02).",
        "El resultado se registra en un acta de aceptación: aceptado, aceptado con observaciones o no aceptado.",
        "Las observaciones se convierten en trabajo del sprint siguiente; un pedido nuevo se trata como solicitud de cambio (GOB-10).",
        "La matriz de trazabilidad se actualiza con el nuevo estado de los requisitos.",
      ),
      tabla(
        ["Resultado", "Significado", "Qué sigue"],
        [26, 40, 34],
        [
          [c("Aceptado", "verde", { bold: true }), "Cumple los criterios.", "El requisito pasa a «Completado»."],
          [c("Aceptado con observaciones", "amarillo", { bold: true }), "Cumple lo esencial; faltan ajustes menores.", "Los ajustes se programan en el sprint siguiente."],
          [c("No aceptado", "rojo", { bold: true }), "No cumple un criterio.", "Se corrige y se vuelve a presentar; se registra un incidente."],
        ],
        { titulo: "Resultados posibles de la validación" },
      ),
    ]),
    sec("3. Plan de validación por hito", [
      tabla(
        ["Hito", "Fecha", "Qué se valida", "Cómo", "Quién acepta"],
        [14, 13, 30, 28, 15],
        SPRINTS.map((s) => [
          `Revisión del Sprint ${s.n}`,
          fmtIso(s.revision),
          VALIDACION[s.n].que,
          VALIDACION[s.n].como,
          s.n === 5 || s.n === 6 ? "Product Owner y patrocinadora" : "Product Owner",
        ]),
        { titulo: "Validación de entregables por hito", compacta: true },
      ),
      nota(
        `Al ${P.fechaEmision} no se había validado ningún entregable: el Sprint 1 empezó el ${P.inicio}. En la reunión de inicio se designó Product Owner a Helber Perez, docente de la institución (GOB-12); la Dirección da su conformidad por su intermedio.`,
        "aviso",
      ),
    ]),
    sec("4. Formato de acta de aceptación", [
      p("En cada revisión de sprint se llena un acta con este formato."),
      kv(
        ["Proyecto", `${P.sigla} — ${P.cliente}`],
        ["Acta N.°", ""],
        ["Sprint e hito", ""],
        ["Fecha y lugar", ""],
        ["Participantes", ""],
      ),
      tabla(
        ["Entregable", "Criterio de aceptación", "Evidencia presentada", "Resultado", "Observaciones"],
        [20, 24, 20, 14, 22],
        [
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
        ],
        { titulo: "Entregables revisados (formato)" },
      ),
      kv(["Acuerdos y pendientes", ""], ["Solicitudes de cambio derivadas", ""]),
      firmas({ nombre: "Product Owner", rol: "I.E.P. Peruano Francés" }, { nombre: P.director, rol: "Director del proyecto" }),
    ]),
  ],
});
