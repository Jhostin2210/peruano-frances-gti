// Los 40 procesos de la Guía del PMBOK®, octava edición (tabla 2-1), y cómo se aplicó cada uno en el proyecto.
// Entradas, herramientas y salidas: de las que la guía propone como ilustrativas, las que este proyecto usó.
// estado: "Aplicado" (hay documento nuevo), "Curso anterior" (existe material de la fase de formulación),
// "Planificado" (definido en un plan, sin registros todavía) o "Pendiente" (dominio aún no trabajado).

const I = "Iniciación";
const PL = "Planificación";
const E = "Ejecución";
const MC = "Monitoreo y control";
const C = "Cierre";

export const DOMINIOS = [
  { id: "gobernanza", nombre: "Gobernanza", procesos: 9, descripcion: "Autoriza, integra, dirige y cierra el proyecto. Reúne lo que antes era integración, aseguramiento de la calidad y adquisiciones.", estado: "Desarrollado" },
  { id: "alcance", nombre: "Alcance", procesos: 6, descripcion: "Define y controla qué se entrega y con qué calidad.", estado: "Desarrollado en parte" },
  { id: "cronograma", nombre: "Cronograma", procesos: 3, descripcion: "Programa el trabajo y controla los plazos.", estado: "Desarrollado" },
  { id: "finanzas", nombre: "Finanzas", procesos: 4, descripcion: "Estima los costos, arma el presupuesto y controla el gasto.", estado: "Curso anterior" },
  { id: "interesados", nombre: "Interesados", procesos: 7, descripcion: "Identifica a las personas afectadas, planifica su participación y las comunicaciones.", estado: "Desarrollado" },
  { id: "recursos", nombre: "Recursos", procesos: 5, descripcion: "Planifica, obtiene y lidera al equipo y los recursos físicos.", estado: "Pendiente" },
  { id: "riesgo", nombre: "Riesgo", procesos: 6, descripcion: "Identifica, analiza y responde a la incertidumbre.", estado: "Pendiente" },
];

export const PROCESOS = [
  // ───────────── Gobernanza ─────────────
  {
    id: "gob-1", dominio: "Gobernanza", area: I, nombre: "Iniciar el proyecto o fase", estado: "Aplicado",
    que: "Autoriza formalmente el proyecto y da al director la autoridad para usar los recursos.",
    entradas: ["Caso de negocio y plan de gestión de beneficios", "Factores ambientales del colegio", "Activos de los procesos: organigrama y formatos"],
    herramientas: ["Entrevista a la Promotora Directora", "Tormenta de ideas del equipo", "Lienzo del proyecto", "Reuniones"],
    salidas: ["Acta de constitución del proyecto", "Registro de supuestos"],
    docs: ["GOB-01", "GOB-02", "GOB-03"],
  },
  {
    id: "gob-2", dominio: "Gobernanza", area: PL, nombre: "Integrar y alinear los planes del proyecto", estado: "Aplicado",
    que: "Reúne los planes de cada dominio en un solo plan coherente, con sus líneas base.",
    entradas: ["Acta de constitución", "Salidas de otros procesos: planes de alcance, cronograma, interesados y abastecimiento"],
    herramientas: ["Juicio del equipo", "Listas de verificación", "Reuniones"],
    salidas: ["Plan para la dirección del proyecto"],
    docs: ["GOB-04"],
  },
  {
    id: "gob-3", dominio: "Gobernanza", area: PL, nombre: "Planificar la estrategia de abastecimiento", estado: "Aplicado",
    que: "Decide qué hace el equipo y qué se obtiene de terceros, y con qué criterios se eligen los proveedores.",
    entradas: ["Acta de constitución", "Línea base del alcance", "Documentación de requisitos", "Registro de interesados"],
    herramientas: ["Análisis de hacer o comprar", "Investigación de mercado", "Análisis de selección de proveedores"],
    salidas: ["Plan de estrategia de abastecimiento: decisiones de hacer o comprar y criterios de selección"],
    docs: ["GOB-05"],
  },
  {
    id: "gob-4", dominio: "Gobernanza", area: E, nombre: "Gestionar la ejecución del proyecto", estado: "Aplicado",
    que: "Dirige el trabajo definido en el plan y aplica los cambios aprobados.",
    entradas: ["Plan para la dirección del proyecto", "Registro de cambios", "Solicitudes de cambio aprobadas"],
    herramientas: ["Reuniones de coordinación diarias", "Repositorio y tablero de tareas como sistema de información"],
    salidas: ["Registro de incidentes", "Solicitudes de cambio", "Entregables y datos de desempeño, desde el Sprint 1"],
    docs: ["GOB-06"],
  },
  {
    id: "gob-5", dominio: "Gobernanza", area: E, nombre: "Gestionar el aseguramiento de la calidad", estado: "Aplicado",
    que: "Comprueba que el proyecto sigue los procesos acordados y mejora los que fallan.",
    entradas: ["Documentos del proyecto heredados", "Políticas y normas: Ley N.° 29733"],
    herramientas: ["Listas de verificación", "Análisis de documentos", "Diagrama de Pareto", "Análisis de causa raíz"],
    salidas: ["Informe de calidad", "Solicitudes de cambio"],
    docs: ["GOB-07"],
  },
  {
    id: "gob-6", dominio: "Gobernanza", area: E, nombre: "Gestionar el conocimiento del proyecto", estado: "Aplicado",
    que: "Aprovecha lo aprendido y lo deja disponible para el equipo y para el colegio.",
    entradas: ["Documentos y entregables de la fase de formulación", "Registro de interesados"],
    herramientas: ["Revisión posterior a la acción", "Reuniones retrospectivas", "Gestión de la información en el repositorio"],
    salidas: ["Registro de lecciones aprendidas"],
    docs: ["GOB-08"],
  },
  {
    id: "gob-7", dominio: "Gobernanza", area: MC, nombre: "Monitorear y controlar el desempeño del proyecto", estado: "Aplicado",
    que: "Compara el avance con el plan e informa el estado a quienes deciden.",
    entradas: ["Plan para la dirección del proyecto", "Registro de incidentes", "Informes de calidad", "Lista de hitos"],
    herramientas: ["Análisis de variación", "Análisis del valor ganado, desde el Sprint 1", "Tableros del proyecto"],
    salidas: ["Informe de desempeño del trabajo", "Solicitudes de cambio"],
    docs: ["GOB-09"],
  },
  {
    id: "gob-8", dominio: "Gobernanza", area: MC, nombre: "Evaluar e implementar cambios", estado: "Aplicado",
    que: "Revisa cada solicitud de cambio, decide y registra la decisión.",
    entradas: ["Líneas base de alcance, cronograma y costos", "Solicitudes de cambio", "Matriz de trazabilidad de requisitos"],
    herramientas: ["Control integrado de cambios", "Análisis de alternativas", "Reuniones del comité de cambios"],
    salidas: ["Solicitudes de cambio aprobadas", "Registro de cambios"],
    docs: ["GOB-10"],
  },
  {
    id: "gob-9", dominio: "Gobernanza", area: C, nombre: "Cerrar el proyecto o fase", estado: "Aplicado",
    que: "Finaliza formalmente una fase o el proyecto y transfiere sus resultados.",
    entradas: ["Documentos y entregables de la fase de formulación", "Registro de lecciones aprendidas", "Caso de negocio"],
    herramientas: ["Análisis de documentos", "Reuniones"],
    salidas: ["Informe de cierre de la fase de formulación", "Transferencia al equipo actual", "Pendientes que pasan a la fase actual"],
    docs: ["GOB-11"],
  },

  // ───────────── Alcance ─────────────
  {
    id: "alc-1", dominio: "Alcance", area: PL, nombre: "Planificar la gestión del alcance", estado: "Aplicado",
    que: "Define cómo se elaboran, validan y controlan el alcance, los requisitos y la calidad.",
    entradas: ["Acta de constitución", "Documentación de requisitos", "Registro de interesados"],
    herramientas: ["Juicio del equipo", "Análisis de datos", "Planificación de pruebas e inspecciones"],
    salidas: ["Plan de gestión del alcance", "Plan de gestión de los requisitos", "Plan de gestión de la calidad"],
    docs: ["ALC-01", "ALC-03"],
  },
  {
    id: "alc-2", dominio: "Alcance", area: PL, nombre: "Recopilar y analizar los requisitos", estado: "Curso anterior",
    que: "Determina y documenta lo que los interesados necesitan del sistema.",
    entradas: ["Caso de negocio", "Registro de interesados"],
    herramientas: ["Entrevista", "Cuestionario a docentes", "Análisis de documentos", "Pensamiento de diseño", "Priorización"],
    salidas: ["Documentación de requisitos: 12 funcionales y 8 no funcionales", "Matriz de trazabilidad con 80 casos de prueba"],
    docs: [],
  },
  {
    id: "alc-3", dominio: "Alcance", area: PL, nombre: "Definir el alcance", estado: "Aplicado",
    que: "Describe con detalle el producto y los límites del proyecto.",
    entradas: ["Acta de constitución", "Registro de supuestos", "Documentación de requisitos"],
    herramientas: ["Análisis del producto", "Análisis de alternativas", "Juicio del equipo"],
    salidas: ["Enunciado del alcance del proyecto, versión 3"],
    docs: ["ALC-02"],
  },
  {
    id: "alc-4", dominio: "Alcance", area: PL, nombre: "Desarrollar la estructura del alcance", estado: "Curso anterior",
    que: "Divide el trabajo en partes que se pueden estimar, asignar y controlar.",
    entradas: ["Enunciado del alcance", "Documentación de requisitos"],
    herramientas: ["Descomposición", "Juicio del equipo"],
    salidas: ["Estructura de desglose del trabajo (EDT) de seis componentes", "Diccionario de la EDT"],
    docs: [],
  },
  {
    id: "alc-5", dominio: "Alcance", area: MC, nombre: "Monitorear y controlar el alcance", estado: "Planificado",
    que: "Vigila que solo se haga el trabajo aprobado y que los entregables cumplan sus requisitos de calidad.",
    entradas: ["Plan de gestión del alcance", "Plan de gestión de la calidad", "Métricas de calidad"],
    herramientas: ["Pruebas del producto", "Inspecciones", "Análisis de variación"],
    salidas: ["Entregables verificados y mediciones de control de calidad, desde el Sprint 2"],
    docs: ["ALC-01", "ALC-03"],
  },
  {
    id: "alc-6", dominio: "Alcance", area: MC, nombre: "Validar el alcance", estado: "Planificado",
    que: "Obtiene la aceptación formal de los entregables por parte del colegio.",
    entradas: ["Línea base del alcance", "Documentación de requisitos", "Entregables verificados"],
    herramientas: ["Inspección", "Reuniones de revisión del sprint", "Pruebas con el cliente"],
    salidas: ["Procedimiento y formato de acta de aceptación", "Entregables aceptados, desde la revisión del Sprint 1"],
    docs: ["ALC-04"],
  },

  // ───────────── Cronograma ─────────────
  {
    id: "cro-1", dominio: "Cronograma", area: PL, nombre: "Planificar la gestión del cronograma", estado: "Aplicado",
    que: "Establece las reglas para elaborar y controlar el cronograma.",
    entradas: ["Acta de constitución", "Plan de gestión del alcance", "Enfoque de desarrollo híbrido"],
    herramientas: ["Juicio del equipo", "Análisis de alternativas", "Reuniones"],
    salidas: ["Plan de gestión del cronograma"],
    docs: ["CRO-01"],
  },
  {
    id: "cro-2", dominio: "Cronograma", area: PL, nombre: "Desarrollar el cronograma", estado: "Aplicado",
    que: "Define las actividades, las ordena, estima su duración y fija las fechas.",
    entradas: ["Línea base del alcance", "Lista de actividades y estimaciones de la versión 2", "Calendario escolar", "Registro de supuestos"],
    herramientas: ["Descomposición", "Estimación por tres valores (PERT)", "Método de la ruta crítica", "Análisis de reserva", "Planificación por sprints"],
    salidas: ["Línea base del cronograma, versión 3", "Calendario del proyecto", "Cronograma de hitos"],
    docs: ["CRO-01"],
  },
  {
    id: "cro-3", dominio: "Cronograma", area: MC, nombre: "Monitorear y controlar el cronograma", estado: "Planificado",
    que: "Mide el avance frente a la línea base y gestiona sus cambios.",
    entradas: ["Línea base del cronograma", "Datos de desempeño del trabajo"],
    herramientas: ["Análisis del valor ganado", "Gráfica de trabajo pendiente", "Reuniones diarias", "Revisiones del sprint"],
    salidas: ["Información de desempeño y pronósticos, desde el Sprint 1"],
    docs: ["CRO-01"],
  },

  // ───────────── Finanzas ─────────────
  { id: "fin-1", dominio: "Finanzas", area: PL, nombre: "Planificar la gestión financiera", estado: "Curso anterior", docs: [] },
  { id: "fin-2", dominio: "Finanzas", area: PL, nombre: "Estimar los costos", estado: "Curso anterior", docs: [] },
  { id: "fin-3", dominio: "Finanzas", area: PL, nombre: "Desarrollar el presupuesto", estado: "Curso anterior", docs: [] },
  { id: "fin-4", dominio: "Finanzas", area: MC, nombre: "Monitorear y controlar las finanzas", estado: "Pendiente", docs: [] },

  // ───────────── Interesados ─────────────
  // grupo: la guía de clase trata por separado el involucramiento (cuatro procesos) y las comunicaciones (tres).
  {
    id: "int-1", dominio: "Interesados", grupo: "Involucramiento", area: I, nombre: "Identificar a los interesados", estado: "Aplicado",
    que: "Reconoce a las personas y organizaciones afectadas y analiza su poder, interés e influencia.",
    entradas: ["Acta de constitución", "Caso de negocio", "Organigrama del colegio"],
    herramientas: ["Cuestionario", "Tormenta de ideas", "Análisis de interesados", "Matriz de poder e interés", "Cubo de interesados", "Modelo de prominencia", "Dirección de la influencia", "Priorización"],
    salidas: ["Registro de interesados: 17 interesados"],
    docs: ["INT-01"],
  },
  {
    id: "int-2", dominio: "Interesados", grupo: "Involucramiento", area: PL, nombre: "Planificar el involucramiento de los interesados", estado: "Aplicado",
    que: "Define cómo lograr que cada interesado participe en la medida que el proyecto necesita.",
    entradas: ["Registro de interesados", "Registro de supuestos", "Cronograma del proyecto"],
    herramientas: ["Matriz de evaluación del involucramiento", "Priorización", "Análisis de supuestos y restricciones"],
    salidas: ["Plan de involucramiento de los interesados"],
    docs: ["INT-02"],
  },
  {
    id: "int-4", dominio: "Interesados", grupo: "Involucramiento", area: E, nombre: "Gestionar el involucramiento de los interesados", estado: "Aplicado",
    que: "Trabaja con los interesados para atender sus necesidades y expectativas.",
    entradas: ["Plan de involucramiento", "Plan de comunicaciones", "Registro de incidentes"],
    herramientas: ["Reglas básicas", "Reuniones", "Observación y conversación", "Retroalimentación"],
    salidas: ["Bitácora de involucramiento", "Actualizaciones del registro de incidentes"],
    docs: ["INT-04"],
  },
  {
    id: "int-6", dominio: "Interesados", grupo: "Involucramiento", area: MC, nombre: "Monitorear el involucramiento de los interesados", estado: "Aplicado",
    que: "Compara el involucramiento real con el deseado y ajusta las estrategias.",
    entradas: ["Plan de involucramiento", "Registro de interesados", "Bitácora de involucramiento"],
    herramientas: ["Matriz de evaluación del involucramiento", "Análisis de interesados", "Análisis de causa raíz"],
    salidas: ["Informe de seguimiento del involucramiento"],
    docs: ["INT-05"],
  },
  {
    id: "int-3", dominio: "Interesados", grupo: "Comunicaciones", area: PL, nombre: "Planificar la gestión de las comunicaciones", estado: "Aplicado",
    que: "Define qué información recibe cada interesado, por qué canal, con qué frecuencia y en qué fechas.",
    entradas: ["Registro de interesados", "Plan de involucramiento", "Documentación de requisitos", "Cronograma del proyecto"],
    herramientas: ["Análisis de requisitos de comunicación", "Tecnología y métodos de comunicación", "Matriz de evaluación del involucramiento"],
    salidas: ["Plan de gestión de las comunicaciones: requisitos de información, matriz, calendario, formatos e indicadores"],
    docs: ["INT-03"],
  },
  {
    id: "int-5", dominio: "Interesados", grupo: "Comunicaciones", area: E, nombre: "Gestionar las comunicaciones", estado: "Aplicado",
    que: "Ejecuta el plan: reúne, informa y deja constancia de cada comunicación.",
    entradas: ["Plan de gestión de las comunicaciones", "Registro de interesados", "Informes de desempeño"],
    herramientas: ["Reuniones", "Informes del proyecto", "Blog del proyecto como sistema de información", "Retroalimentación"],
    salidas: ["Comunicaciones del proyecto", "Registro de comunicaciones"],
    docs: ["INT-06"],
  },
  {
    id: "int-7", dominio: "Interesados", grupo: "Comunicaciones", area: MC, nombre: "Monitorear las comunicaciones", estado: "Aplicado",
    que: "Comprueba que la información llega a quien debe y cuando debe.",
    entradas: ["Plan de gestión de las comunicaciones", "Registro de comunicaciones", "Registro de incidentes"],
    herramientas: ["Tablero de comunicaciones", "Matriz de cobertura por interesado", "Observación y conversación", "Reuniones"],
    salidas: ["Informe de monitoreo de las comunicaciones", "Acciones de mejora"],
    docs: ["INT-07"],
  },

  // ───────────── Recursos ─────────────
  { id: "rec-1", dominio: "Recursos", area: PL, nombre: "Planificar la gestión de los recursos", estado: "Pendiente", docs: [] },
  { id: "rec-2", dominio: "Recursos", area: PL, nombre: "Estimar los recursos", estado: "Pendiente", docs: [] },
  { id: "rec-3", dominio: "Recursos", area: E, nombre: "Adquirir recursos", estado: "Pendiente", docs: [] },
  { id: "rec-4", dominio: "Recursos", area: E, nombre: "Liderar al equipo", estado: "Pendiente", docs: [] },
  { id: "rec-5", dominio: "Recursos", area: MC, nombre: "Monitorear y controlar los recursos", estado: "Pendiente", docs: [] },

  // ───────────── Riesgo ─────────────
  { id: "rie-1", dominio: "Riesgo", area: PL, nombre: "Planificar la gestión de los riesgos", estado: "Pendiente", docs: [] },
  { id: "rie-2", dominio: "Riesgo", area: PL, nombre: "Identificar los riesgos", estado: "Pendiente", docs: [] },
  { id: "rie-3", dominio: "Riesgo", area: PL, nombre: "Realizar el análisis de riesgos", estado: "Pendiente", docs: [] },
  { id: "rie-4", dominio: "Riesgo", area: PL, nombre: "Planificar la respuesta a los riesgos", estado: "Pendiente", docs: [] },
  { id: "rie-5", dominio: "Riesgo", area: E, nombre: "Implementar la respuesta a los riesgos", estado: "Pendiente", docs: [] },
  { id: "rie-6", dominio: "Riesgo", area: MC, nombre: "Monitorear los riesgos", estado: "Pendiente", docs: [] },
];

export const AREAS = [I, PL, E, MC, C];
