// Campos de las planillas de la Documentación de requisitos V3 (fase de formulación).
// Texto del documento original con tres correcciones del informe de calidad GOB-07: fecha de la encuesta (mayo de 2026),
// uso de Cubicol por los padres (alrededor del 40 % ingresa) y referencias a capítulos del blog anterior.
// Se combinan con documentacion/datos/requisitos.mjs, que tiene la redacción vigente (versión 3 del alcance).

export const PLANILLAS = {
  "REQ-01": {
    "caso": "CU-01",
    "justificacion": "Actualmente la información académica se encuentra fragmentada entre Cubicol, cuadernos físicos de asistencia y notificaciones de incidencias por WhatsApp, sin trazabilidad centralizada (Entrevista de campo, abril de 2026). El 66.7 % de los docentes señala que necesita datos integrados multivariable para detectar oportunamente el riesgo académico (Encuesta a docentes P6). Este requisito es la base de todo el sistema de recolección de datos para el modelo predictivo.",
    "unidad": "Dirección Académica",
    "satisfaccion": 5,
    "insatisfaccion": 4,
    "dependencias": "REQ-02, REQ-07",
    "conflictos": "Ninguno",
    "soporte": "Entrevista de campo, abril de 2026; Encuesta a docentes P6"
  },
  "REQ-02": {
    "caso": "CU-02",
    "justificacion": "Los datos provenientes de fuentes manuales (cuadernos físicos, WhatsApp) presentan inconsistencias y errores de registro propios de un proceso 100 % manual (Entrevista de campo, abril de 2026). Sin un proceso de limpieza automatizado, el modelo ML entrenaría con datos de baja calidad, afectando directamente la precisión de la clasificación de riesgo académico.",
    "unidad": "Área de Tecnología",
    "satisfaccion": 5,
    "insatisfaccion": 4,
    "dependencias": "REQ-01",
    "conflictos": "Ninguno",
    "soporte": "Entrevista de campo, abril de 2026; Manual técnico Cubicol"
  },
  "REQ-03": {
    "caso": "CU-03",
    "justificacion": "El 100 % de los docentes encuestados reconoce que los problemas académicos se detectan tardíamente (Encuesta a docentes P7, mayo de 2026). El 83.3 % acepta la solución ML como herramienta de mejora (Encuesta P8). La literatura científica respalda la efectividad del Machine Learning en la predicción del bajo rendimiento académico (Márquez-Vera et al., 2013; Romero & Ventura, 2010).",
    "unidad": "Equipo de Desarrollo",
    "satisfaccion": 5,
    "insatisfaccion": 5,
    "dependencias": "REQ-01, REQ-02",
    "conflictos": "Ninguno",
    "soporte": "Encuesta a docentes, mayo de 2026; Márquez-Vera et al. (2013) IEEE RITA; Romero & Ventura (2010) IEEE TSMCC"
  },
  "REQ-04": {
    "caso": "CU-04",
    "justificacion": "El seguimiento académico actual se realiza de forma diaria por el 83.3 % de los docentes pero de manera manual e individualizada (Encuesta a docentes P2). Un modelo estático perdería relevancia rápidamente frente a cambios en el comportamiento académico del alumno. La actualización semanal automática asegura que las alertas reflejen la situación real y vigente del estudiante.",
    "unidad": "Equipo de Desarrollo",
    "satisfaccion": 5,
    "insatisfaccion": 4,
    "dependencias": "REQ-03",
    "conflictos": "Ninguno",
    "soporte": "Encuesta a docentes, mayo de 2026 (P2)"
  },
  "REQ-05": {
    "caso": "CU-05",
    "justificacion": "El 100 % de los docentes considera las alertas tempranas como útiles o muy útiles para el seguimiento académico (Encuesta a docentes P9). Actualmente las incidencias se notifican únicamente por WhatsApp, sin trazabilidad, historial ni priorización por nivel de riesgo (Entrevista de campo, abril de 2026). Este requisito constituye el núcleo del valor diferencial del sistema frente al proceso manual actual.",
    "unidad": "Dirección Académica",
    "satisfaccion": 5,
    "insatisfaccion": 5,
    "dependencias": "REQ-03, REQ-07",
    "conflictos": "Ninguno",
    "soporte": "Encuesta a docentes, mayo de 2026 (P9); Entrevista de campo, abril de 2026"
  },
  "REQ-06": {
    "caso": "CU-06",
    "justificacion": "El 83.3 % de los docentes estaría dispuesto a utilizar una plataforma tecnológica de monitoreo del rendimiento académico (Encuesta a docentes P10). El módulo de alertas críticas en el panel docente complementa la notificación por correo, asegurando que la información esté centralizada y visible incluso si el correo no fue revisado oportunamente.",
    "unidad": "Dirección Académica",
    "satisfaccion": 4,
    "insatisfaccion": 4,
    "dependencias": "REQ-05, REQ-08",
    "conflictos": "Ninguno",
    "soporte": "Encuesta a docentes, mayo de 2026 (P10); Prototipo mockup SIA-T"
  },
  "REQ-07": {
    "caso": "CU-07",
    "justificacion": "Los docentes señalan que requieren herramientas que faciliten el seguimiento de estudiantes sin incrementar su carga de trabajo diaria. Sin un registro de seguimiento, las intervenciones pedagógicas quedan dispersas y no es posible evaluar su efectividad a lo largo del año escolar. Este requisito da continuidad y trazabilidad a las alertas generadas por el sistema.",
    "unidad": "Dirección Académica",
    "satisfaccion": 4,
    "insatisfaccion": 3,
    "dependencias": "REQ-05",
    "conflictos": "Ninguno",
    "soporte": "Entrevista de campo, abril de 2026; Mapa de empatía del Docente"
  },
  "REQ-08": {
    "caso": "CU-08",
    "justificacion": "La directora señaló como necesidad prioritaria la visualización centralizada del progreso del alumno durante todo el año escolar (Entrevista de campo, abril de 2026). El 66.7 % de los docentes necesita datos integrados multivariable para la toma de decisiones (Encuesta P6). El mockup SIA-T fue diseñado con base en esta necesidad validada durante el Design Thinking.",
    "unidad": "Dirección Académica",
    "satisfaccion": 4,
    "insatisfaccion": 4,
    "dependencias": "REQ-01, REQ-02, REQ-03",
    "conflictos": "Ninguno",
    "soporte": "Entrevista de campo, abril de 2026; Prototipo mockup SIA-T; Customer Journey Map Docente"
  },
  "REQ-09": {
    "caso": "CU-09",
    "justificacion": "Los coordinadores académicos requieren presentar información consolidada a la dirección con datos reales y verificables al cierre de cada periodo evaluativo. Actualmente este proceso se realiza de forma manual a partir de fuentes dispersas (Cubicol y registros físicos), lo que demanda tiempo y es propenso a errores.",
    "unidad": "Gestión Académica",
    "satisfaccion": 4,
    "insatisfaccion": 4,
    "dependencias": "REQ-01, REQ-03, REQ-08",
    "conflictos": "Ninguno",
    "soporte": "Entrevista de campo, abril de 2026; Business Model Canvas del proyecto"
  },
  "REQ-10": {
    "caso": "CU-10",
    "justificacion": "La dispersión de la información académica dificulta el monitoreo personalizado de cada alumno, provocando retrasos en las decisiones pedagógicas (Análisis del Problema). El mapa de empatía del docente identificó que gran parte de la información necesaria para el seguimiento requiere revisión manual en distintas fuentes, lo que dificulta la intervención temprana.",
    "unidad": "Dirección Académica",
    "satisfaccion": 4,
    "insatisfaccion": 3,
    "dependencias": "REQ-01, REQ-02",
    "conflictos": "Ninguno",
    "soporte": "Mapa de empatía del Docente; Árbol de Problemas"
  },
  "REQ-11": {
    "caso": "CU-11",
    "justificacion": "El sistema manejará datos sensibles de 200 menores de edad (notas, asistencia, incidencias conductuales), lo cual exige controles de acceso diferenciados conforme a la estructura organizacional de la institución (Directora, Subdirector, Coordinadores, Docentes, Psicólogo Escolar). La ausencia de un control de roles adecuado podría comprometer la privacidad de los estudiantes.",
    "unidad": "Área de Tecnología",
    "satisfaccion": 5,
    "insatisfaccion": 5,
    "dependencias": "REQ-01, REQ-08",
    "conflictos": "Ninguno",
    "soporte": "Organigrama institucional; Registro de Interesados"
  },
  "REQ-12": {
    "caso": "CU-12",
    "justificacion": "Solo alrededor del 40 % de los padres de familia ingresa a Cubicol y las notificaciones por WhatsApp no garantizan una respuesta inmediata (Entrevista de campo, abril de 2026). El mapa de empatía de padres identificó que su principal preocupación es conocer oportunamente el desempeño académico de sus hijos para poder actuar antes de que los problemas se agraven.",
    "unidad": "Dirección Académica",
    "satisfaccion": 4,
    "insatisfaccion": 3,
    "dependencias": "REQ-02, REQ-05",
    "conflictos": "Ninguno",
    "soporte": "Entrevista de campo, abril de 2026; Mapa de empatía de Padres de Familia"
  },
  "RNF-01": {
    "caso": "CU-13",
    "justificacion": "El usuario primario identificado en el Design Thinking es el Docente Tutor, quien no necesariamente cuenta con formación técnica en tecnología. El mapa de empatía del docente evidenció que los usuarios esperan herramientas que faciliten el monitoreo sin incrementar su carga de trabajo diaria, lo que exige una interfaz simple y de aprendizaje rápido.",
    "unidad": "Dirección Académica",
    "satisfaccion": 5,
    "insatisfaccion": 4,
    "dependencias": "REQ-06, REQ-08",
    "conflictos": "Ninguno",
    "soporte": "Mapa de empatía del Docente; Buyer Persona Principal Docente Coordinador Académico"
  },
  "RNF-02": {
    "caso": "CU-14",
    "justificacion": "La institución cuenta con conectividad WIN de fibra óptica de 1000 Mbps (verificado en visita de campo, abril de 2026), lo cual garantiza la infraestructura de red necesaria para un rendimiento adecuado. Un dashboard lento desincentivaría el uso cotidiano del sistema por parte de los docentes, comprometiendo la adopción de la solución.",
    "unidad": "Área de Tecnología",
    "satisfaccion": 4,
    "insatisfaccion": 4,
    "dependencias": "REQ-01, REQ-03, REQ-08",
    "conflictos": "Ninguno",
    "soporte": "Factores Ambientales de la Empresa; Entrevista de campo, abril de 2026"
  },
  "RNF-03": {
    "caso": "CU-15",
    "justificacion": "El sistema gestionará información sensible de 200 estudiantes menores de edad, incluyendo calificaciones, asistencia e incidencias conductuales. La ausencia de mecanismos de autenticación y control de acceso adecuados expondría a la institución a riesgos de seguridad y vulneraría la confidencialidad de los datos de los estudiantes y sus familias.",
    "unidad": "Área de Tecnología",
    "satisfaccion": 5,
    "insatisfaccion": 5,
    "dependencias": "REQ-11",
    "conflictos": "Ninguno",
    "soporte": "Ley N° 29733 — Protección de Datos Personales; Organigrama institucional"
  },
  "RNF-04": {
    "caso": "CU-16",
    "justificacion": "El sistema procesará información personal y académica de 200 menores de edad, lo cual exige el cumplimiento estricto del marco normativo peruano de protección de datos personales. El incumplimiento de esta normativa podría generar responsabilidad legal para la institución educativa y comprometer la confianza de los padres de familia en el sistema.",
    "unidad": "Dirección Académica",
    "satisfaccion": 5,
    "insatisfaccion": 5,
    "dependencias": "REQ-11, RNF-03",
    "conflictos": "Ninguno",
    "soporte": "Ley N° 29733 — Protección de Datos Personales; D.S. N° 003-2013-JUS; MINEDU (2023)"
  },
  "RNF-05": {
    "caso": "CU-17",
    "justificacion": "El sistema debe ser confiable durante el horario escolar para no interrumpir el proceso de enseñanza-aprendizaje ni generar desconfianza en los usuarios ante posibles caídas del servicio. La institución cuenta con presupuesto limitado como colegio privado pequeño, por lo que la disponibilidad debe lograrse con una infraestructura de bajo costo pero confiable.",
    "unidad": "Área de Tecnología",
    "satisfaccion": 4,
    "insatisfaccion": 4,
    "dependencias": "REQ-01, REQ-08",
    "conflictos": "Ninguno",
    "soporte": "Factores Ambientales de la Empresa; Documentación técnica de hosting cloud (Vercel/Supabase)"
  },
  "RNF-06": {
    "caso": "CU-18",
    "justificacion": "La propuesta de canales del sistema contempla una plataforma web responsive accesible desde móvil y escritorio, sin requerir instalaciones adicionales que generen barreras de adopción para docentes y directivos con distinto nivel de competencia tecnológica.",
    "unidad": "Área de Tecnología",
    "satisfaccion": 4,
    "insatisfaccion": 3,
    "dependencias": "REQ-08",
    "conflictos": "Ninguno",
    "soporte": "Business Model Canvas del proyecto — Canales"
  },
  "RNF-07": {
    "caso": "CU-19",
    "justificacion": "La I.E.P. Peruano Francés cuenta actualmente con aproximadamente 200 alumnos y 16 docentes/auxiliares (datos verificados en visita de campo, abril de 2026). Adicionalmente, el modelo de negocio del proyecto contempla un potencial licenciamiento futuro a otras instituciones educativas del distrito de Villa El Salvador, lo que exige una arquitectura preparada para crecer.",
    "unidad": "Equipo de Desarrollo",
    "satisfaccion": 4,
    "insatisfaccion": 3,
    "dependencias": "REQ-01, RNF-02",
    "conflictos": "Ninguno",
    "soporte": "Datos institucionales verificados; Business Model Canvas — Fuentes de Ingresos"
  },
  "RNF-08": {
    "caso": "CU-20",
    "justificacion": "La institución cuenta con un técnico de laboratorio TI y una gestora de Cubicol con experiencia previa en la administración de plataformas digitales (Factores Ambientales de la Empresa). El proyecto busca dejar capacidad instalada en la institución para sostener el sistema a largo plazo con recursos propios, conforme a lo señalado en el Business Model Canvas.",
    "unidad": "Área de Tecnología",
    "satisfaccion": 4,
    "insatisfaccion": 3,
    "dependencias": "Ninguno",
    "conflictos": "Ninguno",
    "soporte": "Business Model Canvas — Relación con Clientes; Capital Humano"
  }
};
