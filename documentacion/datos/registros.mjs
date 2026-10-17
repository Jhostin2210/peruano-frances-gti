// Registros vivos del proyecto: cambios, incidentes, hallazgos de calidad y lecciones aprendidas.
// Varios documentos los citan; se definen una vez aquí.

import { R } from "../proyecto.mjs";

// ───────────────────────── Solicitudes de cambio (GOB-10) ─────────────────────────
export const CAMBIOS = [
  {
    id: "SC-01",
    titulo: "Cambio de equipo y reasignación de paquetes de trabajo",
    origen: "Inicio del nuevo periodo académico: dos integrantes dejan el equipo y dos se incorporan.",
    impacto: "Responsables en la EDT, en el cronograma y en el blog.",
    estado: "Aprobado",
    decision: "Equipo del proyecto, 10/10/2026",
    aplicacion: "Aplicado en la EDT, en el cronograma v3 y en el blog.",
  },
  {
    id: "SC-02",
    titulo: "Replanificación del calendario",
    origen: "El calendario anterior (marzo a agosto de 2026) ya venció y ubicaba el piloto en vacaciones escolares.",
    impacto: "Línea base del cronograma: del 12/10/2026 al 23/04/2027, receso en febrero y piloto en marzo. Línea base de costos: mismas cifras, nuevas fechas. El objetivo se mide en el año escolar 2027.",
    estado: "Aprobado",
    decision: "Equipo del proyecto, 10/10/2026. Conformidad de la patrocinadora en la reunión de inicio, 12/10/2026 (GOB-12).",
    aplicacion: "Aplicado en el cronograma v3. Pendiente: distribución de costos por fechas.",
  },
  {
    id: "SC-03",
    titulo: "Alojamiento en servicios gestionados en la nube",
    origen: "El colegio no tiene personal dedicado a administrar un servidor; tres requisitos ya citaban servicios en la nube.",
    impacto: "Exclusiones del alcance, requisitos no funcionales, paquetes 1.4.1 y 1.5.1 de la EDT, actividad A-5.1.1.1, abastecimiento y categoría de servicios de los costos. Agrega obligaciones de protección de datos.",
    estado: "Aprobado",
    decision: "Equipo del proyecto, 10/10/2026. Conformidad de la patrocinadora en la reunión de inicio, 12/10/2026 (GOB-12).",
    aplicacion: "Aplicado en el enunciado del alcance v3, en el cronograma v3 y en GOB-05. Pendiente: capítulos de alternativas y de costos del blog.",
  },
  {
    id: "SC-04",
    titulo: "Tres niveles de riesgo y cuatro roles de usuario como estándar",
    origen: "Los requisitos definen tres niveles (bajo, medio, alto) y cuatro roles; el prototipo y su base de datos usan cuatro niveles y tres roles.",
    impacto: "Base de datos, modelo y prototipo.",
    estado: "Aprobado",
    decision: "Equipo del proyecto, 10/10/2026",
    aplicacion: "Tres niveles aplicados en los documentos y en el prototipo (10/10/2026). Los roles siguen pendientes en el prototipo (Sprint 4).",
  },
  {
    id: "SC-05",
    titulo: "Corrección de la validez del instrumento",
    origen: "El documento reportaba 0.90 con una fórmula para cinco jueces; opinaron dos, con 88 de 100 puntos.",
    impacto: "Validez del cuestionario: 0.88 (88 %), que se mantiene en la categoría «muy bueno».",
    estado: "Aprobado",
    decision: "Equipo del proyecto, 10/10/2026",
    aplicacion: "Aplicado en los documentos nuevos.",
  },
  {
    id: "SC-06",
    titulo: "Corrección del número de actividades y de los totales PERT",
    origen: "El texto del cronograma decía 40 actividades; sus tablas y el modelo de costos suman 44 más la reunión diaria. Las desviaciones estándar por sprint y el número de actividades críticas tampoco coincidían con la tabla.",
    impacto: "Texto y totales del cronograma y del blog. No cambian las duraciones ni las fechas.",
    estado: "Aprobado",
    decision: "Equipo del proyecto, 10/10/2026",
    aplicacion: "Aplicado en CRO-01 y en el blog.",
  },
  {
    id: "SC-07",
    titulo: "Adopción de la octava edición de la Guía del PMBOK®",
    origen: "El curso Gestión de Proyecto de TI trabaja con la octava edición; los documentos anteriores citan la sexta.",
    impacto: "Estructura por dominios de desempeño y áreas de enfoque; nombres de los procesos.",
    estado: "Aprobado",
    decision: "Equipo del proyecto, 10/10/2026",
    aplicacion: "Aplicado en los documentos nuevos y en el blog. Pendiente: capítulo de finanzas.",
  },
  {
    id: "SC-08",
    titulo: "Rediseño de la validación del modelo de Machine Learning",
    origen: "En el conjunto de datos del prototipo, la etiqueta de riesgo se calcula con las mismas notas que se usan como variables, por lo que la precisión obtenida no demuestra capacidad de predicción.",
    impacto: "Criterio de validación del requisito REQ-03 y paquete 1.3: predecir el periodo siguiente con datos reales anonimizados, comparar contra una regla simple, medir la proporción de estudiantes en riesgo detectados y retirar la variable de pensiones.",
    estado: "En evaluación",
    decision: "Se decide en la revisión del Sprint 1 (06/11/2026), con el docente asesor.",
    aplicacion: "—",
  },
  {
    id: "SC-09",
    titulo: "Canal de las alertas por correo",
    origen: "El diseño asumía un correo institucional que el colegio no tiene; los docentes usan correos personales.",
    impacto: "Requisito REQ-05 y paquete 1.4.1: servicio de envío de correo a direcciones personales autorizadas.",
    estado: "En evaluación",
    decision: "Requiere la lista de correos y la conformidad de la Dirección. Se decide en el Sprint 1.",
    aplicacion: "—",
  },
  {
    id: "SC-10",
    titulo: "Unificación de la EDT y de su diccionario",
    origen: "La declaración del alcance lista 18 paquetes de trabajo y el diccionario describe 20.",
    impacto: "Línea base del alcance: EDT, diccionario y matriz de trazabilidad.",
    estado: "En evaluación",
    decision: "Se decide al revisar la estructura del alcance en el Sprint 1.",
    aplicacion: "—",
  },
  {
    id: "SC-11",
    titulo: "Comunicación con el colegio a través del Product Owner",
    origen: "En la reunión de inicio se acordó que no habrá más reuniones con la Dirección, por el cruce de horarios del equipo, y que el contacto con el colegio será Helber Perez, docente de la institución, integrante del equipo y Product Owner.",
    impacto: "Plan de comunicaciones (INT-03): las entrevistas y los pedidos de datos se canalizan por el Product Owner, y las revisiones de sprint se le presentan a él. Agrega la restricción R-08 y el supuesto S-12 (GOB-03).",
    estado: "Aprobado",
    decision: "Patrocinadora y equipo, reunión de inicio, 12/10/2026 (GOB-12)",
    aplicacion: "Aplicado en INT-03, INT-06 y el tablero de comunicaciones el 17/10/2026.",
  },
];

// ───────────────────────── Incidentes (GOB-06) ─────────────────────────
export const INCIDENTES = [
  { id: "IN-01", tipo: "Datos", descripcion: "No está confirmado el acceso a los datos de Cubicol: no se ha comprobado que exista una API y las exportaciones dependen de la gestora de la plataforma.", origen: "Equipo, 10/10/2026", prioridad: "Alta", asignado: R.jadira, limite: "23/10/2026", estado: "Abierto", accion: "Pedido de las exportaciones a través del Product Owner, programado para el 20/10/2026 (SC-11)." },
  { id: "IN-02", tipo: "Datos", descripcion: "La asistencia y las incidencias solo existen en papel y en mensajes; no hay datos digitales para el modelo.", origen: "Entrevista, 24/04/2026", prioridad: "Alta", asignado: R.jadira, limite: "04/12/2026", estado: "Abierto", accion: "Definir con la Jefa de Normas un registro digital simple (Sprint 2)." },
  { id: "IN-03", tipo: "Producto", descripcion: "El prototipo calcula el riesgo con reglas escritas a mano y muestra métricas que no provienen de un entrenamiento real.", origen: "Revisión de calidad, 10/10/2026", prioridad: "Alta", asignado: R.helber, limite: "30/12/2026", estado: "Cerrado", accion: "Reemplazado por una red neuronal entrenada y probada con una base pública y aplicada a los datos del colegio; sus métricas salen del entrenamiento (ALC-05 N.º 2, 17/10/2026)." },
  { id: "IN-04", tipo: "Datos personales", descripcion: "Los archivos de trabajo contienen nombres y notas reales de estudiantes: hojas de cálculo, fotos de cuadernos y datos de carga de la base.", origen: "Revisión de calidad, 10/10/2026", prioridad: "Alta", asignado: R.helber, limite: "23/10/2026", estado: "Abierto", accion: "Retirarlos de las carpetas compartidas, reemplazar nombres por códigos y no subirlos al repositorio." },
  { id: "IN-05", tipo: "Interesados", descripcion: "La segunda entrevista, al soporte técnico y a la gestora de Cubicol, no se realizó; la guía está lista desde mayo.", origen: "Equipo, 10/10/2026", prioridad: "Media", asignado: R.jadira, limite: "23/10/2026", estado: "Cerrado", accion: "Reemplazada: en la reunión de inicio se acordó canalizar la comunicación con el colegio por el Product Owner (SC-11)." },
  { id: "IN-06", tipo: "Calidad", descripcion: "Los documentos heredados discrepan en fechas, número de actividades, niveles de riesgo y guía de referencia.", origen: "Revisión de calidad, 10/10/2026", prioridad: "Media", asignado: R.carlos, limite: "10/10/2026", estado: "Cerrado", accion: "Cambios SC-02, SC-04, SC-06 y SC-07 aprobados; documentos nuevos emitidos." },
  { id: "IN-07", tipo: "Comunicación", descripcion: "No existe correo institucional para los docentes; las alertas se diseñaron para ese canal.", origen: "Entrevista, 24/04/2026", prioridad: "Media", asignado: R.jadira, limite: "06/11/2026", estado: "Abierto", accion: "Solicitud SC-09 en evaluación: envío a correos personales autorizados." },
  { id: "IN-08", tipo: "Gestión", descripcion: "Varios enlaces del blog apuntan a documentos guardados en la cuenta de un integrante que ya no está en el equipo.", origen: "Equipo, 10/10/2026", prioridad: "Media", asignado: R.carlos, limite: "06/11/2026", estado: "En curso", accion: "Los documentos nuevos se publican en el propio blog; los anteriores se migran al trabajar cada dominio." },
  { id: "IN-09", tipo: "Cronograma", descripcion: "El calendario anterior ubicaba el piloto con docentes en vacaciones escolares.", origen: "Equipo, 10/10/2026", prioridad: "Alta", asignado: R.jhostin, limite: "10/10/2026", estado: "Cerrado", accion: "Cambio SC-02 aprobado: receso en febrero y piloto en marzo." },
  { id: "IN-10", tipo: "Alcance", descripcion: "En la entrevista se ofreció elaborar guías para que los padres ingresen a Cubicol; ese trabajo no figura en ninguna línea base.", origen: "Revisión de calidad, 10/10/2026", prioridad: "Baja", asignado: R.jhostin, limite: "06/11/2026", estado: "Cerrado", accion: "Descartado en la reunión de inicio del 12/10/2026 (GOB-12)." },
  { id: "IN-11", tipo: "Calidad", descripcion: "El archivo del formato de reporte de incidencia escolar está vacío; solo existe la foto del formato.", origen: "Revisión de calidad, 10/10/2026", prioridad: "Baja", asignado: R.carlos, limite: "06/11/2026", estado: "Abierto", accion: "Volver a escanearlo en la próxima visita al colegio." },
];

// ───────────────────────── Hallazgos de calidad (GOB-07) ─────────────────────────
export const CATEGORIAS = {
  A: "Coherencia entre documentos",
  B: "Exactitud de datos y cálculos",
  C: "Evidencia y trazabilidad",
  D: "Datos personales",
  E: "Modelo de Machine Learning",
};

export const HALLAZGOS = [
  { cat: "A", hallazgo: "El cronograma tiene tres calendarios distintos.", evidencia: "Octubre de 2026 a abril de 2027 y agosto de 2026 a enero de 2027 en el documento; marzo a agosto de 2026 en MS Project y en costos.", accion: "SC-02" },
  { cat: "A", hallazgo: "El número de actividades figura como 40 en el texto y como 44 más la reunión diaria en las tablas.", evidencia: "Documento del cronograma y modelo de costos.", accion: "SC-06" },
  { cat: "A", hallazgo: "Los niveles de riesgo son tres en los requisitos y cuatro en la base de datos, el modelo y el prototipo.", evidencia: "Requisito REQ-03 y esquema de la base.", accion: "SC-04" },
  { cat: "A", hallazgo: "Los roles de usuario son cuatro o cinco en los requisitos y tres en la base de datos.", evidencia: "Requisito REQ-11 y esquema de la base.", accion: "SC-04" },
  { cat: "A", hallazgo: "El alcance excluía la nube pública, pero tres requisitos y la matriz de trazabilidad citan Vercel y Supabase.", evidencia: "Declaración del alcance y requisitos no funcionales.", accion: "SC-03" },
  { cat: "A", hallazgo: "Los documentos citan la sexta edición del PMBOK; el curso trabaja con la octava.", evidencia: "Carátulas y blog.", accion: "SC-07" },
  { cat: "A", hallazgo: "La EDT tiene 18 paquetes en la declaración del alcance y 20 en el diccionario.", evidencia: "Declaración del alcance y diccionario de la EDT.", accion: "SC-10" },
  { cat: "A", hallazgo: "Los documentos y el blog mezclaban integrantes del equipo anterior y del actual.", evidencia: "Diccionario de la EDT del blog.", accion: "SC-01" },
  { cat: "A", hallazgo: "El capítulo de requisitos del blog mostraba una lista distinta de la documentada: incluía asistencia con código QR, avisos por WhatsApp y alojamiento local.", evidencia: "Blog anterior y Documentación de requisitos V3.", accion: "Corregido: el blog toma los requisitos de la línea base (ALC-02)." },
  { cat: "B", hallazgo: "La validez del instrumento figura como 0.90 con una fórmula para cinco jueces; opinaron dos, con 88 de 100 puntos.", evidencia: "Documento de validez del instrumento.", accion: "SC-05" },
  { cat: "B", hallazgo: "El uso de Cubicol por los padres aparece con tres cifras distintas.", evidencia: "«40 % no accede», «40 % accede» y «60 % accede», según el documento.", accion: "Se usa la transcripción: alrededor del 40 % ingresa." },
  { cat: "B", hallazgo: "Los documentos fechan la encuesta en abril; las respuestas son del 15/05/2026.", evidencia: "Hoja de respuestas del formulario.", accion: "Corregido en los documentos nuevos." },
  { cat: "B", hallazgo: "La antigüedad del colegio figura como 24 y como 25 años.", evidencia: "Transcripción de la entrevista y cuestionario.", accion: "Confirmar con la Dirección." },
  { cat: "B", hallazgo: "La encuesta tiene 6 respuestas y al menos un encuestado integra el equipo.", evidencia: "Hoja de respuestas del formulario.", accion: "Se declara como limitación; validación con tutores en el Sprint 1." },
  { cat: "B", hallazgo: "El usuario tipo del Design Thinking tiene de 25 a 40 estudiantes por aula y correo institucional; el colegio tiene aulas de 4 a 10 estudiantes y correos personales.", evidencia: "Ficha del usuario tipo y registros de aula.", accion: "Ajustar al trabajar el dominio de Alcance." },
  { cat: "B", hallazgo: "La maqueta del tablero muestra 312 estudiantes; el colegio tiene unos 200.", evidencia: "Maqueta del prototipo.", accion: "Ajustar la maqueta." },
  { cat: "B", hallazgo: "Las desviaciones estándar por sprint y el número de actividades críticas del cronograma no coinciden con su tabla de actividades.", evidencia: "Tabla PERT del cronograma v2: 26 actividades marcadas como críticas y 18 en el resumen.", accion: "SC-06: recalculado en CRO-01." },
  { cat: "C", hallazgo: "El control con valor ganado es un ejercicio simulado, pero su conclusión habla del proyecto como terminado.", evidencia: "Documento del cronograma v2.", accion: "Rotulado como simulación en CRO-01." },
  { cat: "C", hallazgo: "El prototipo muestra métricas del modelo que están escritas en el código.", evidencia: "Servicio de datos del prototipo.", accion: "IN-03" },
  { cat: "C", hallazgo: "El área de TI figura como entrevistada; solo se entrevistó a la directora.", evidencia: "Transcripción de la entrevista.", accion: "Corregido en INT-01 e INT-04; IN-05." },
  { cat: "C", hallazgo: "Se citan documentos que no existían: el acta de constitución y el lienzo del modelo de negocio como documento.", evidencia: "Documentación de requisitos.", accion: "Acta emitida (GOB-02)." },
  { cat: "C", hallazgo: "El archivo del formato de incidencia escolar está vacío.", evidencia: "Carpeta de la semana 11.", accion: "IN-11" },
  { cat: "D", hallazgo: "Hay nombres y notas reales de estudiantes en hojas de cálculo, fotos de cuadernos y datos de carga.", evidencia: "Material del prototipo.", accion: "IN-04" },
  { cat: "D", hallazgo: "La hoja de respuestas de la encuesta contiene nombres y correos de docentes.", evidencia: "Hoja de respuestas del formulario.", accion: "Retirar esas columnas antes de compartirla." },
  { cat: "D", hallazgo: "El blog publica fotos y un video con rostros de docentes y de la directora.", evidencia: "Capítulos de introducción y de encuesta.", accion: "Pedir autorización o recortar las imágenes." },
  { cat: "D", hallazgo: "El modelo usa el estado de pago de pensiones como variable.", evidencia: "Cuaderno de entrenamiento.", accion: "SC-08: retirarla." },
  { cat: "D", hallazgo: "El paquete del prototipo incluye un archivo de configuración con claves.", evidencia: "Archivo comprimido del prototipo.", accion: "No publicarlo y cambiar las claves." },
  { cat: "E", hallazgo: "La etiqueta de riesgo es exactamente «promedio de las cuatro notas menor de 11», y esas notas son las variables de entrada.", evidencia: "Verificado en las 250 filas del conjunto de datos.", accion: "SC-08" },
  { cat: "E", hallazgo: "El conjunto de entrenamiento es sintético; las inasistencias y las pensiones son simuladas.", evidencia: "Conjunto de datos y datos de carga.", accion: "SC-08" },
  { cat: "E", hallazgo: "El archivo de datos separa columnas con punto y coma y el cuaderno de entrenamiento lo lee con coma.", evidencia: "Archivo de datos y cuaderno.", accion: "Corregir al rehacer el entrenamiento." },
  { cat: "E", hallazgo: "Los cortes de los niveles de riesgo (0.25, 0.50 y 0.75) son arbitrarios.", evidencia: "Cuaderno de entrenamiento.", accion: "SC-08" },
].map((x, i) => ({ id: `H-${String(i + 1).padStart(2, "0")}`, ...x }));

// ───────────────────────── Lecciones aprendidas (GOB-08) ─────────────────────────
export const LECCIONES = [
  { cat: "Documentación", situacion: "Cada documento se escribió por separado y las cifras comunes terminaron distintas (fechas, actividades, niveles de riesgo).", impacto: "Alto", leccion: "Mantener una ficha única del proyecto y generar los documentos desde un mismo contenido.", accion: "Aplicada: fuente única en el repositorio." },
  { cat: "Documentación", situacion: "El control con valor ganado, que era un ejercicio, quedó redactado como si fuera el resultado real.", impacto: "Medio", leccion: "Rotular siempre lo simulado y separarlo de los registros reales.", accion: "Aplicada en CRO-01 y GOB-10." },
  { cat: "Levantamiento", situacion: "La encuesta se aplicó a 6 de 16 docentes y se fechó mal en los documentos.", impacto: "Medio", leccion: "Registrar la fecha y el tamaño real de la muestra en el momento, y declarar sus límites.", accion: "Aplicada en GOB-01 e INT-04." },
  { cat: "Levantamiento", situacion: "Una cifra de la entrevista (uso de Cubicol por los padres) se citó de tres formas.", impacto: "Medio", leccion: "Citar desde la transcripción y no desde la memoria.", accion: "Aplicada: una sola redacción en todos los documentos." },
  { cat: "Datos", situacion: "Se fijó el criterio de precisión del modelo antes de confirmar qué datos entregaría el colegio.", impacto: "Alto", leccion: "Confirmar el acceso a los datos antes de comprometer criterios de aceptación que dependen de ellos.", accion: "Supuestos S-01 a S-03 con responsable y fecha." },
  { cat: "Datos", situacion: "El modelo se entrenó con datos sintéticos cuya etiqueta salía de las propias variables.", impacto: "Alto", leccion: "Validar un modelo solo contra un resultado futuro real y compararlo con una regla simple.", accion: "SC-08 en evaluación." },
  { cat: "Datos personales", situacion: "Circularon archivos con nombres y notas de estudiantes entre carpetas de trabajo.", impacto: "Alto", leccion: "Definir desde el primer día qué datos pueden salir del colegio y en qué forma.", accion: "Restricción R-06 y reglas del plan de comunicaciones." },
  { cat: "Calendario", situacion: "El cronograma se armó sin mirar el calendario escolar y el piloto caía en vacaciones.", impacto: "Alto", leccion: "Planificar las actividades con el cliente según su calendario, no solo según el del curso.", accion: "Aplicada: receso en febrero y piloto en marzo." },
  { cat: "Interesados", situacion: "Pocos padres ingresan a Cubicol; el colegio se comunica con ellos por WhatsApp y por la agenda.", impacto: "Medio", leccion: "Usar el canal que cada interesado realmente usa, no el que el sistema ofrece.", accion: "Aplicada en el plan de comunicaciones." },
  { cat: "Equipo", situacion: "Al cambiar el equipo, parte de los documentos quedó en la cuenta personal de un integrante saliente.", impacto: "Medio", leccion: "Guardar los entregables en un repositorio del proyecto y no en cuentas personales.", accion: "Aplicada: repositorio y carpeta «Documentación»." },
  { cat: "Arquitectura", situacion: "Se eligió alojar el sistema en el colegio por un criterio teórico de custodia, sin verificar quién lo administraría.", impacto: "Medio", leccion: "Evaluar las alternativas con la capacidad real de operación del cliente.", accion: "Aplicada: reevaluación en GOB-05." },
  { cat: "Prototipo", situacion: "El prototipo ocultaba la falta de modelo con respuestas de respaldo y métricas por defecto.", impacto: "Medio", leccion: "Un prototipo debe mostrar con claridad qué es real y qué es demostración.", accion: "IN-03 abierto." },
].map((x, i) => ({ id: `LA-${String(i + 1).padStart(2, "0")}`, ...x }));

export const contar = (lista, campo) =>
  lista.reduce((acc, x) => {
    acc[x[campo]] = (acc[x[campo]] ?? 0) + 1;
    return acc;
  }, {});
