// Archivo generado por documentacion/generar.mjs a partir de documentacion/. No editar a mano.

import type { DocDef, DominioDef, ProcesoDef } from "./tipos";

export const DOCUMENTOS: DocDef[] = [
 {
  "id": "BASE-01",
  "titulo": "Ficha del proyecto e índice de la documentación",
  "dominio": null,
  "area": "Todas",
  "proceso": "Documento de referencia",
  "salida": "Ficha única del proyecto e índice de documentos",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Punto de entrada a la documentación. Reúne los datos que deben coincidir en todos los documentos, la lista de documentos emitidos y su ubicación, y lo que falta por desarrollar.",
  "carpeta": "00 - Ficha e índice",
  "pdf": "/documentos/BASE-01-ficha-del-proyecto-e-indice-de-la-documentacion.pdf",
  "docx": "/documentos/BASE-01-ficha-del-proyecto-e-indice-de-la-documentacion.docx",
  "secciones": [
   {
    "titulo": "1. Ficha del proyecto",
    "apaisada": false,
    "bloques": [
     {
      "t": "kv",
      "filas": [
       [
        "Proyecto",
        "Sistema inteligente basado en Machine Learning para la alerta temprana del bajo rendimiento académico estudiantil"
       ],
       [
        "Sigla",
        "SIA-T"
       ],
       [
        "Organización cliente",
        "I.E.P. Peruano Francés. Av. Pastor Sevilla con Av. Juan Velasco Alvarado, Villa El Salvador, Lima."
       ],
       [
        "Patrocinadora",
        "Promotora Directora de la I.E.P. Peruano Francés"
       ],
       [
        "Director del proyecto",
        "Jhostin J. Galarza Camarena"
       ],
       [
        "Curso",
        "Gestión de Proyecto de TI — Universidad Nacional Tecnológica de Lima Sur"
       ],
       [
        "Docente asesor",
        "Mg. MBA Antonio Arqque Pantigozo"
       ],
       [
        "Guía de referencia",
        "Guía del PMBOK®, octava edición (PMI, 2025)"
       ],
       [
        "Periodo",
        "Del 12/10/2026 al 23/04/2027, con receso del 01/02/2027 al 26/02/2027"
       ],
       [
        "Enfoque de desarrollo",
        "Híbrido: líneas base predictivas y construcción en seis sprints de cuatro semanas"
       ],
       [
        "Blog del proyecto",
        "https://peruano-frances-gti.vercel.app"
       ],
       [
        "Repositorio",
        "https://github.com/Jhostin2210/peruano-frances-gti"
       ]
      ]
     },
     {
      "t": "tabla",
      "cols": [
       "Integrante",
       "Código",
       "Rol en el proyecto"
      ],
      "anchos": [
       40,
       18,
       42
      ],
      "filas": [
       [
        "Galarza Camarena, Jhostin Jefry",
        {
         "x": "2123010051",
         "align": "center"
        },
        "Director del proyecto y Scrum Master"
       ],
       [
        "Perez Gutierrez, Helber Javier",
        {
         "x": "2008100137",
         "align": "center"
        },
        "Responsable del modelo de Machine Learning"
       ],
       [
        "Curo Ramos, Carlos Agustín",
        {
         "x": "2113010682",
         "align": "center"
        },
        "Responsable del tablero web y del control de cambios"
       ],
       [
        "Vasquez Castro, Jadira Dina",
        {
         "x": "2213100026",
         "align": "center"
        },
        "Responsable de datos, alertas y despliegue"
       ]
      ],
      "titulo": "Equipo del proyecto"
     }
    ]
   },
   {
    "titulo": "2. Datos que no deben variar entre documentos",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Estas cifras se escriben una sola vez, en la fuente de contenido del repositorio, y todos los documentos las toman de ahí."
     },
     {
      "t": "tabla",
      "cols": [
       "Dato",
       "Valor",
       "Documento de origen"
      ],
      "anchos": [
       38,
       38,
       24
      ],
      "filas": [
       [
        "Colegio",
        "Alrededor de 200 estudiantes y 16 docentes y auxiliares",
        "GOB-01"
       ],
       [
        "Entrevista de campo",
        "24/04/2026, a la Promotora Directora",
        "INT-04"
       ],
       [
        "Encuesta a docentes",
        "15/05/2026, 6 respuestas",
        "INT-04"
       ],
       [
        "Validez del cuestionario",
        "0.88 (dos jueces, 88 de 100 puntos)",
        "GOB-10 (SC-05)"
       ],
       [
        "Interesados identificados",
        "17",
        "INT-01"
       ],
       [
        "Requisitos",
        "20: 12 funcionales y 8 no funcionales",
        "ALC-02"
       ],
       [
        "Casos de prueba",
        "80",
        "ALC-03"
       ],
       [
        "Entregables del producto",
        "9 (E-01 a E-09)",
        "ALC-02"
       ],
       [
        "Componentes de la EDT",
        "6",
        "ALC-02"
       ],
       [
        "Niveles de riesgo del estudiante",
        "Tres: bajo, medio y alto",
        "GOB-10 (SC-04)"
       ],
       [
        "Roles de usuario",
        "Cuatro: docente, coordinación, psicología y dirección",
        "GOB-10 (SC-04)"
       ],
       [
        "Actividades del cronograma",
        "44 y una reunión diaria",
        "CRO-01"
       ],
       [
        "Sprints y semanas",
        "6 sprints de 4 semanas: 24 semanas",
        "CRO-01"
       ],
       [
        "Suma de duraciones esperadas (PERT)",
        "159.2 días",
        "CRO-01"
       ],
       [
        "Línea base de costos",
        "S/ 59,859.17",
        "Línea base de costos v2"
       ],
       [
        "Presupuesto total",
        "S/ 63,495.53",
        "Línea base de costos v2"
       ],
       [
        "Solicitudes de cambio registradas",
        "10",
        "GOB-10"
       ]
      ],
      "titulo": "Cifras de referencia del proyecto",
      "compacta": true
     },
     {
      "t": "kv",
      "filas": [
       [
        "Costo de la EDT (44 actividades y reunión diaria)",
        "S/ 54,417.42"
       ],
       [
        "Reserva de contingencia (10 %)",
        "S/ 5,441.74"
       ],
       [
        "Línea base de costos",
        "S/ 59,859.17"
       ],
       [
        "Reserva de gestión (una semana)",
        "S/ 3,636.36"
       ],
       [
        "Presupuesto total del proyecto",
        "S/ 63,495.53"
       ]
      ]
     }
    ]
   },
   {
    "titulo": "3. Calendario",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Sprint",
       "Semanas",
       "Inicio",
       "Fin",
       "Revisión",
       "Entregable de la revisión"
      ],
      "anchos": [
       20,
       10,
       12,
       12,
       12,
       34
      ],
      "filas": [
       [
        "Sprint 1 · Análisis y diseño",
        "S1–S4",
        "12/10/2026",
        "06/11/2026",
        "06/11/2026",
        "Arquitectura validada y variables del modelo definidas"
       ],
       [
        "Sprint 2 · Gestión y datos",
        "S5–S8",
        "09/11/2026",
        "04/12/2026",
        "04/12/2026",
        "Base de datos centralizada y validada"
       ],
       [
        "Sprint 3 · Modelo ML",
        "S9–S12",
        "07/12/2026",
        "01/01/2027",
        "30/12/2026",
        "Modelo ML validado con el criterio acordado"
       ],
       [
        "Sprint 4 · Alertas y tablero",
        "S13–S16",
        "04/01/2027",
        "29/01/2027",
        "29/01/2027",
        "Sistema integrado con alertas y tablero operativos"
       ],
       [
        {
         "x": "Receso",
         "fill": "gris"
        },
        {
         "x": "—",
         "fill": "gris"
        },
        {
         "x": "01/02/2027",
         "fill": "gris"
        },
        {
         "x": "26/02/2027",
         "fill": "gris"
        },
        {
         "x": "—",
         "fill": "gris"
        },
        {
         "x": "Vacaciones escolares; la semana del 22 al 26 de febrero es la reserva de gestión.",
         "fill": "gris"
        }
       ],
       [
        "Sprint 5 · Pruebas y piloto",
        "S17–S20",
        "01/03/2027",
        "26/03/2027",
        "24/03/2027",
        "Sistema validado con pruebas y piloto real con docentes"
       ],
       [
        "Sprint 6 · Implantación y cierre",
        "S21–S24",
        "29/03/2027",
        "23/04/2027",
        "23/04/2027",
        "Sistema en producción, capacitación realizada y proyecto cerrado"
       ]
      ],
      "titulo": "Calendario de sprints"
     }
    ]
   },
   {
    "titulo": "4. Índice de documentos",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Código",
       "Documento",
       "Dominio",
       "Proceso",
       "Área de enfoque",
       "Carpeta"
      ],
      "anchos": [
       9,
       25,
       11,
       22,
       13,
       20
      ],
      "filas": [
       [
        {
         "x": "BASE-01",
         "bold": true
        },
        "Ficha del proyecto e índice de la documentación",
        "Transversal",
        "—",
        "—",
        "00 - Ficha e índice"
       ],
       [
        {
         "x": "GOB-01",
         "bold": true
        },
        "Caso de negocio y plan de gestión de beneficios",
        "Gobernanza",
        "Iniciar el proyecto o fase",
        "Iniciación",
        "01 - Gobernanza/1.1 Iniciar el proyecto"
       ],
       [
        {
         "x": "GOB-02",
         "bold": true
        },
        "Acta de constitución del proyecto",
        "Gobernanza",
        "Iniciar el proyecto o fase",
        "Iniciación",
        "01 - Gobernanza/1.1 Iniciar el proyecto"
       ],
       [
        {
         "x": "GOB-03",
         "bold": true
        },
        "Registro de supuestos y restricciones",
        "Gobernanza",
        "Iniciar el proyecto o fase",
        "Iniciación",
        "01 - Gobernanza/1.1 Iniciar el proyecto"
       ],
       [
        {
         "x": "GOB-04",
         "bold": true
        },
        "Plan para la dirección del proyecto",
        "Gobernanza",
        "Integrar y alinear los planes del proyecto",
        "Planificación",
        "01 - Gobernanza/1.2 Integrar los planes"
       ],
       [
        {
         "x": "GOB-05",
         "bold": true
        },
        "Plan de estrategia de abastecimiento",
        "Gobernanza",
        "Planificar la estrategia de abastecimiento",
        "Planificación",
        "01 - Gobernanza/1.3 Abastecimiento"
       ],
       [
        {
         "x": "GOB-06",
         "bold": true
        },
        "Registro de incidentes",
        "Gobernanza",
        "Gestionar la ejecución del proyecto",
        "Ejecución",
        "01 - Gobernanza/1.4 Ejecución"
       ],
       [
        {
         "x": "GOB-07",
         "bold": true
        },
        "Informe de calidad N.º 1",
        "Gobernanza",
        "Gestionar el aseguramiento de la calidad",
        "Ejecución",
        "01 - Gobernanza/1.5 Calidad"
       ],
       [
        {
         "x": "GOB-08",
         "bold": true
        },
        "Registro de lecciones aprendidas",
        "Gobernanza",
        "Gestionar el conocimiento del proyecto",
        "Ejecución",
        "01 - Gobernanza/1.6 Conocimiento"
       ],
       [
        {
         "x": "GOB-09",
         "bold": true
        },
        "Informe de desempeño N.º 1",
        "Gobernanza",
        "Monitorear y controlar el desempeño del proyecto",
        "Monitoreo y control",
        "01 - Gobernanza/1.7 Desempeño"
       ],
       [
        {
         "x": "GOB-10",
         "bold": true
        },
        "Plan de gestión de cambios y registro de cambios",
        "Gobernanza",
        "Evaluar e implementar cambios",
        "Monitoreo y control",
        "01 - Gobernanza/1.8 Cambios"
       ],
       [
        {
         "x": "GOB-11",
         "bold": true
        },
        "Informe de cierre de la fase de formulación",
        "Gobernanza",
        "Cerrar el proyecto o fase",
        "Cierre",
        "01 - Gobernanza/1.9 Cierre de fase"
       ],
       [
        {
         "x": "INT-01",
         "bold": true
        },
        "Registro y análisis de interesados",
        "Interesados",
        "Identificar a los interesados",
        "Iniciación",
        "02 - Interesados/2.1 Identificar"
       ],
       [
        {
         "x": "INT-02",
         "bold": true
        },
        "Plan de involucramiento de los interesados",
        "Interesados",
        "Planificar el involucramiento de los interesados",
        "Planificación",
        "02 - Interesados/2.2 Planificar"
       ],
       [
        {
         "x": "INT-04",
         "bold": true
        },
        "Bitácora de involucramiento y reglas básicas",
        "Interesados",
        "Gestionar el involucramiento de los interesados",
        "Ejecución",
        "02 - Interesados/2.3 Gestionar"
       ],
       [
        {
         "x": "INT-05",
         "bold": true
        },
        "Informe de seguimiento del involucramiento N.º 1",
        "Interesados",
        "Monitorear el involucramiento de los interesados",
        "Monitoreo y control",
        "02 - Interesados/2.4 Monitorear"
       ],
       [
        {
         "x": "INT-03",
         "bold": true
        },
        "Plan de gestión de las comunicaciones",
        "Interesados",
        "Planificar la gestión de las comunicaciones",
        "Planificación",
        "02 - Interesados/2.5 Comunicaciones"
       ],
       [
        {
         "x": "INT-06",
         "bold": true
        },
        "Registro de comunicaciones",
        "Interesados",
        "Gestionar las comunicaciones",
        "Ejecución",
        "02 - Interesados/2.5 Comunicaciones"
       ],
       [
        {
         "x": "INT-07",
         "bold": true
        },
        "Informe de monitoreo de las comunicaciones N.º 1",
        "Interesados",
        "Monitorear las comunicaciones",
        "Monitoreo y control",
        "02 - Interesados/2.5 Comunicaciones"
       ],
       [
        {
         "x": "ALC-01",
         "bold": true
        },
        "Plan de gestión del alcance y de los requisitos",
        "Alcance",
        "Planificar la gestión del alcance",
        "Planificación",
        "03 - Alcance/3.1 Planificar"
       ],
       [
        {
         "x": "ALC-02",
         "bold": true
        },
        "Enunciado del alcance del proyecto",
        "Alcance",
        "Definir el alcance",
        "Planificación",
        "03 - Alcance/3.2 Definir el alcance"
       ],
       [
        {
         "x": "ALC-03",
         "bold": true
        },
        "Plan de gestión de la calidad",
        "Alcance",
        "Planificar la gestión del alcance",
        "Planificación",
        "03 - Alcance/3.3 Calidad"
       ],
       [
        {
         "x": "ALC-04",
         "bold": true
        },
        "Procedimiento de validación del alcance",
        "Alcance",
        "Validar el alcance",
        "Monitoreo y control",
        "03 - Alcance/3.4 Validar el alcance"
       ],
       [
        {
         "x": "ALC-05",
         "bold": true
        },
        "Informe de avance del producto por EDT N.º 1",
        "Alcance",
        "Monitorear y controlar el alcance",
        "Monitoreo y control",
        "03 - Alcance/3.5 Controlar el alcance"
       ],
       [
        {
         "x": "CRO-01",
         "bold": true
        },
        "Línea base del cronograma",
        "Cronograma",
        "Desarrollar el cronograma",
        "Planificación",
        "04 - Cronograma"
       ]
      ],
      "titulo": "Documentos emitidos (25)",
      "compacta": true,
      "fuente": "Cada documento está en Word y en PDF dentro de su carpeta. Los PDF también se publican en el blog."
     }
    ]
   },
   {
    "titulo": "5. Cobertura de la Guía del PMBOK®",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "La octava edición organiza la dirección de proyectos en siete dominios de desempeño y 40 procesos. En esta entrega el equipo desarrolló los dominios de Gobernanza y de Interesados (con sus comunicaciones), y completó lo que faltaba de Alcance y de Cronograma."
     },
     {
      "t": "tabla",
      "cols": [
       "Dominio",
       "Procesos",
       "Con documento nuevo",
       "Estado",
       "Observación"
      ],
      "anchos": [
       14,
       10,
       14,
       18,
       44
      ],
      "filas": [
       [
        "Gobernanza",
        {
         "x": "9",
         "align": "center"
        },
        {
         "x": "9",
         "align": "center"
        },
        {
         "x": "Desarrollado",
         "fill": "verde",
         "bold": true
        },
        "Los nueve procesos tienen documento."
       ],
       [
        "Alcance",
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "Desarrollado en parte",
         "fill": "amarillo",
         "bold": true
        },
        "Los requisitos, la EDT y su diccionario vienen del curso anterior. El control tiene su primer informe de avance por EDT; la validación empieza con los sprints."
       ],
       [
        "Cronograma",
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "Desarrollado",
         "fill": "verde",
         "bold": true
        },
        "Línea base versión 3. El control empieza con los sprints."
       ],
       [
        "Finanzas",
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "Curso anterior",
         "fill": "azul",
         "bold": true
        },
        "Estimación y presupuesto del curso anterior; falta redistribuirlos con el calendario nuevo."
       ],
       [
        "Interesados",
        {
         "x": "7",
         "align": "center"
        },
        {
         "x": "7",
         "align": "center"
        },
        {
         "x": "Desarrollado",
         "fill": "verde",
         "bold": true
        },
        "Los siete procesos tienen documento: cuatro de involucramiento y tres de comunicaciones."
       ],
       [
        "Recursos",
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "Pendiente",
         "fill": "gris",
         "bold": true
        },
        "Por desarrollar."
       ],
       [
        "Riesgo",
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "Pendiente",
         "fill": "gris",
         "bold": true
        },
        "Por desarrollar. Hay una lista de riesgos de alto nivel en GOB-01."
       ]
      ],
      "titulo": "Cobertura por dominio de desempeño"
     }
    ]
   },
   {
    "titulo": "6. Documentos de la fase de formulación que siguen en uso",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Documento",
       "Situación",
       "Qué lo actualiza"
      ],
      "anchos": [
       34,
       38,
       28
      ],
      "filas": [
       [
        "Planteamiento del problema y árboles",
        "Vigente.",
        "—"
       ],
       [
        "Análisis de alternativas",
        "Vigente como antecedente; la decisión de alojamiento cambió.",
        "GOB-05 y SC-03"
       ],
       [
        "Documentación de requisitos V3",
        "Vigente: 20 requisitos.",
        "ALC-02 (cambios de la versión 3)"
       ],
       [
        "Matriz de trazabilidad",
        "Vigente: 80 casos de prueba.",
        "ALC-03"
       ],
       [
        "Declaración del alcance",
        "Reemplazada.",
        "ALC-02"
       ],
       [
        "EDT y diccionario de la EDT",
        "Vigentes; por unificar.",
        "SC-10"
       ],
       [
        "Cronograma (6 sprints)",
        "Reemplazado.",
        "CRO-01"
       ],
       [
        "Línea base de costos",
        "Montos vigentes; fechas por actualizar.",
        "SC-02"
       ],
       [
        "Registro de interesados",
        "Reemplazado.",
        "INT-01"
       ],
       [
        "Prototipo",
        "Demostración con datos simulados.",
        "IN-03 y SC-08"
       ]
      ],
      "titulo": "Material heredado del curso anterior",
      "fuente": "Los archivos originales del curso anterior no se modificaron."
     }
    ]
   },
   {
    "titulo": "7. Organización y mantenimiento",
    "apaisada": false,
    "bloques": [
     {
      "t": "h",
      "x": "Carpetas"
     },
     {
      "t": "ul",
      "items": [
       "**00 - Ficha e índice.** Este documento.",
       "**01 - Gobernanza.** Una subcarpeta por proceso, de 1.1 a 1.9.",
       "**02 - Interesados.** De 2.1 a 2.4, los procesos de involucramiento; en 2.5, los tres de comunicaciones.",
       "**03 - Alcance.** Planificación, enunciado, calidad y validación.",
       "**04 - Cronograma.** Línea base del cronograma."
      ]
     },
     {
      "t": "h",
      "x": "Códigos y versiones"
     },
     {
      "t": "ul",
      "items": [
       "El código indica el dominio: GOB, INT, ALC o CRO, más un número correlativo.",
       "Un ajuste de redacción sube el decimal de la versión; un cambio aprobado que altera el contenido sube el entero.",
       "Los informes periódicos (calidad, desempeño y seguimiento del involucramiento) llevan número: el siguiente se emite al cierre de cada sprint."
      ]
     },
     {
      "t": "h",
      "x": "Cómo se actualizan"
     },
     {
      "t": "p",
      "x": "El contenido de los documentos está en la carpeta «documentacion» del repositorio. Al cambiarlo se vuelven a generar los archivos Word, los PDF y las páginas del blog, de modo que los tres dicen siempre lo mismo."
     },
     {
      "t": "nota",
      "tipo": "aviso",
      "x": "Ningún documento de esta carpeta contiene nombres, notas ni correos de estudiantes, docentes o apoderados. El acta de constitución está emitida para firma y todavía no ha sido firmada."
     }
    ]
   }
  ]
 },
 {
  "id": "GOB-01",
  "titulo": "Caso de negocio y plan de gestión de beneficios",
  "dominio": "Gobernanza",
  "area": "Iniciación",
  "proceso": "Iniciar el proyecto o fase",
  "salida": "Documentos del negocio (entrada del acta de constitución)",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Justifica el proyecto ante el colegio: qué necesidad atiende, qué opciones se evaluaron, qué beneficios se esperan, cómo se medirán y cuánto cuesta.",
  "carpeta": "01 - Gobernanza/1.1 Iniciar el proyecto",
  "pdf": "/documentos/GOB-01-caso-de-negocio-y-plan-de-gestion-de-beneficios.pdf",
  "docx": "/documentos/GOB-01-caso-de-negocio-y-plan-de-gestion-de-beneficios.docx",
  "secciones": [
   {
    "titulo": "1. Necesidad del negocio",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "En la I.E.P. Peruano Francés el seguimiento del rendimiento de los estudiantes se apoya en tres fuentes que no se cruzan entre sí: las notas, que los docentes registran en la plataforma Cubicol; la asistencia, que se anota en cuadernos; y las incidencias, que se comunican a los padres por WhatsApp. Con la información repartida de esa manera, el docente suele advertir que un estudiante está en dificultades cuando ya desaprobó un periodo."
     },
     {
      "t": "p",
      "x": "El diagnóstico hecho con la metodología del marco lógico formuló el problema central como **deficiente detección temprana del bajo rendimiento académico estudiantil**. Sus causas directas son la información académica dispersa, el seguimiento manual y la baja capacidad de monitoreo del comportamiento académico."
     },
     {
      "t": "tabla",
      "cols": [
       "Fuente",
       "Fecha",
       "Hallazgo"
      ],
      "anchos": [
       26,
       14,
       60
      ],
      "filas": [
       [
        "Entrevista a la Promotora Directora",
        "24/04/2026",
        "La asistencia se registra en físico y las incidencias se comunican por WhatsApp o correo. Las notas se suben a Cubicol, pero pocos padres ingresan a la plataforma: la directora estima que alrededor del 40 %. Hay disposición a recibir propuestas y a facilitar datos."
       ],
       [
        "Encuesta a docentes (6 respuestas)",
        "15/05/2026",
        "Los 6 reconocen que los problemas académicos se detectan tarde (4 «algunas veces» y 2 «frecuentemente»). 5 de 6 hacen seguimiento diario, de forma manual. 5 de 6 usarían una plataforma de monitoreo y 5 de 6 creen que un sistema con Machine Learning ayudaría."
       ],
       [
        "Revisión de formatos y registros",
        "Abril a julio de 2026",
        "El reporte de incidencias es un formato impreso. Los exámenes mensuales se registran en cuadernos. No existe una base que una notas, asistencia e incidencias."
       ]
      ],
      "titulo": "Evidencia que sustenta la necesidad"
     },
     {
      "t": "nota",
      "tipo": "aviso",
      "x": "La encuesta recoge la opinión de 6 de los 16 docentes y auxiliares, y al menos uno de los encuestados integra el equipo del proyecto. Sus resultados orientan el diagnóstico, pero no representan a todo el personal; por eso el Sprint 1 incluye una validación directa con los docentes tutores."
     }
    ]
   },
   {
    "titulo": "2. Alineación con los objetivos de la institución",
    "apaisada": false,
    "bloques": [
     {
      "t": "ul",
      "items": [
       "**Calidad del servicio educativo.** Intervenir antes de que el estudiante desapruebe mejora el aprendizaje y la permanencia.",
       "**Decisiones de la dirección con información.** La directora señaló como necesidad un control ordenado y digital donde se vea el progreso del alumno durante el año.",
       "**Relación con las familias.** El colegio necesita constancia de que avisó a tiempo a los apoderados y un canal que estos realmente usen.",
       "**Aprovechar lo que ya existe.** El colegio usa Cubicol desde hace unos siete años y cuenta con internet de fibra óptica; el proyecto se apoya en esa base y no la reemplaza."
      ]
     }
    ]
   },
   {
    "titulo": "3. Opciones evaluadas",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Opción",
       "En qué consiste",
       "Evaluación"
      ],
      "anchos": [
       24,
       40,
       36
      ],
      "filas": [
       [
        "0. No hacer nada",
        "Mantener el seguimiento manual con Cubicol, cuadernos y WhatsApp.",
        "Descartada: el problema central se mantiene."
       ],
       [
        "1. Inteligencia de negocios tradicional",
        "Base PostgreSQL con cargas por lotes y tableros de Power BI actualizados cada bimestre.",
        "3.30 de 5. Coherente, pero insuficiente: describe lo ocurrido, no anticipa."
       ],
       [
        "2. Nube con MLOps",
        "Data Lakehouse en nube pública, predicción continua y notificaciones a una aplicación móvil.",
        "3.35 de 5. Cumple el objetivo, pero su costo y complejidad exceden a un colegio de 200 estudiantes."
       ],
       [
        {
         "x": "3. Procesamiento semanal con tablero web",
         "fill": "teal",
         "bold": true
        },
        {
         "x": "Modelo en Python y Scikit-learn que recalcula el riesgo cada semana, base PostgreSQL y tablero web en Next.js.",
         "fill": "teal"
        },
        {
         "x": "**4.55 de 5. Seleccionada.**",
         "fill": "teal"
        }
       ]
      ],
      "titulo": "Alternativas evaluadas en la fase de formulación",
      "fuente": "Fuente: matriz de decisión ponderada con cinco criterios (análisis de alternativas de solución)."
     },
     {
      "t": "p",
      "x": "La alternativa 3 se eligió con el sistema alojado en un servidor dentro del colegio. En octubre de 2026 el equipo aprobó pasar el alojamiento a servicios gestionados en la nube (solicitud de cambio SC-03) y mantener el resto de la alternativa. Las razones son dos: el colegio no tiene personal dedicado a administrar un servidor, y varios requisitos ya asumían servicios en la nube. El análisis de hacer o comprar está en el documento GOB-05."
     }
    ]
   },
   {
    "titulo": "4. Beneficios esperados y plan de gestión de beneficios",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El objetivo del proyecto, formulado con el criterio SMART, es **reducir en al menos 30 % la detección tardía del bajo rendimiento académico** en la I.E.P. Peruano Francés mediante un sistema inteligente basado en Machine Learning. Con la replanificación (SC-02) el sistema entra en operación en abril de 2027, por lo que el beneficio se mide durante el año escolar 2027."
     },
     {
      "t": "tabla",
      "cols": [
       "Beneficio",
       "Indicador",
       "Línea base",
       "Meta",
       "Cuándo se mide",
       "Responsable"
      ],
      "anchos": [
       16,
       27,
       16,
       15,
       14,
       12
      ],
      "filas": [
       [
        "B1. Detección oportuna",
        "Casos de detección tardía: estudiantes que desaprueban un periodo sin haber sido identificados antes de su cierre.",
        "Por levantar con las notas de 2026 (Sprint 1).",
        "Reducción de al menos 30 %.",
        "Cierre de cada bimestre de 2027.",
        "Helber Perez"
       ],
       [
        "B2. Menos trabajo manual",
        "Tiempo semanal que un tutor dedica a reunir notas, asistencia e incidencias.",
        "Por medir en el Sprint 1.",
        "Reducción de al menos 30 %.",
        "Piloto (marzo de 2027) y tres meses después.",
        "Jhostin Galarza"
       ],
       [
        "B3. Información para la dirección",
        "Reporte consolidado por aula y grado al cierre de cada unidad.",
        "No existe.",
        "Disponible en un día, sin elaboración manual.",
        "Desde el Sprint 6.",
        "Product Owner"
       ],
       [
        "B4. Aviso a las familias",
        "Casos de riesgo alto con comunicado al apoderado dentro de las 24 horas.",
        "No se registra.",
        "100 % de los casos.",
        "Desde el piloto.",
        "Tutor y coordinación"
       ],
       [
        "B5. Capacidad instalada",
        "Personal del colegio que opera el sistema sin apoyo del equipo.",
        "Ninguno.",
        "Un responsable de TI y 80 % de tutores y coordinadores capacitados.",
        "Cierre del proyecto.",
        "Jhostin Galarza"
       ]
      ],
      "titulo": "Plan de gestión de beneficios",
      "compacta": true
     },
     {
      "t": "nota",
      "tipo": "info",
      "x": "Dos indicadores (B1 y B2) no tienen línea base todavía. Se levantan en el Sprint 1, dentro de la actividad A-0.1.1.2; sin esa medición inicial no será posible demostrar el beneficio."
     }
    ]
   },
   {
    "titulo": "5. Costos e inversión",
    "apaisada": false,
    "bloques": [
     {
      "t": "kv",
      "filas": [
       [
        "Costo de la EDT (44 actividades y reunión diaria)",
        "S/ 54,417.42"
       ],
       [
        "Reserva de contingencia (10 %)",
        "S/ 5,441.74"
       ],
       [
        "Línea base de costos",
        "S/ 59,859.17"
       ],
       [
        "Reserva de gestión (una semana)",
        "S/ 3,636.36"
       ],
       [
        "Presupuesto total del proyecto",
        "S/ 63,495.53"
       ]
      ]
     },
     {
      "t": "p",
      "x": "Estos montos valorizan el trabajo del equipo con tarifas del mercado laboral de TI de Lima; es un costo de oportunidad. El proyecto es autofinanciado por sus integrantes y el colegio no realiza desembolsos durante su ejecución. Por tratarse de un proyecto académico sin fines de lucro no se calculan VAN ni TIR: la decisión se apoya en la comparación entre el costo valorizado y los beneficios de la sección anterior."
     },
     {
      "t": "p",
      "x": "Los servicios en la nube se usan en sus planes gratuitos mientras el consumo se mantenga dentro de los límites (supuesto S-05). Si el colegio adopta el sistema de forma permanente, tendrá que asumir un plan de pago de alojamiento y de base de datos y el tiempo de un responsable interno; la estimación está en GOB-05."
     },
     {
      "t": "nota",
      "tipo": "info",
      "x": "La distribución de la línea base de costos por sprint se elaboró con el calendario anterior (marzo a agosto de 2026). Los montos por sprint no cambian, pero sus fechas se actualizarán al trabajar el dominio de Finanzas; el pendiente está registrado en la solicitud de cambio SC-02."
     }
    ]
   },
   {
    "titulo": "6. Riesgos principales para el negocio",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Riesgo",
       "Por qué importa"
      ],
      "anchos": [
       34,
       66
      ],
      "filas": [
       [
        "Datos insuficientes o de baja calidad",
        "El modelo depende de notas históricas reales; la asistencia y las incidencias aún no están digitalizadas."
       ],
       [
        "Baja adopción por parte de los docentes",
        "Sin uso del tablero y de las alertas no hay beneficio, aunque el sistema funcione."
       ],
       [
        "Tratamiento de datos personales de menores",
        "La Ley N.° 29733 exige informar a los apoderados y contar con su consentimiento; alojar datos fuera del país agrega obligaciones."
       ],
       [
        "Dependencia de planes gratuitos de terceros",
        "Los límites o las condiciones del servicio pueden cambiar."
       ],
       [
        "Calendario escolar",
        "El piloto solo puede hacerse con clases en curso; por eso se programó en marzo de 2027."
       ]
      ],
      "titulo": "Riesgos de alto nivel"
     },
     {
      "t": "p",
      "x": "El análisis formal de riesgos corresponde al dominio de Riesgo, que el equipo desarrollará más adelante."
     }
    ]
   },
   {
    "titulo": "7. Recomendación",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Se recomienda autorizar el proyecto con la alternativa 3 alojada en servicios gestionados en la nube, bajo tres condiciones:"
     },
     {
      "t": "ol",
      "items": [
       "El colegio facilita las exportaciones de notas de Cubicol y designa a la persona que actuará como Product Owner.",
       "Antes de cargar datos reales en la nube se resuelve el tratamiento de datos personales: información a los apoderados, consentimiento y medidas de seguridad.",
       "El modelo se valida con datos reales del colegio antes del piloto; mientras tanto, el prototipo se presenta como una demostración con datos simulados."
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "GOB-02",
  "titulo": "Acta de constitución del proyecto",
  "dominio": "Gobernanza",
  "area": "Iniciación",
  "proceso": "Iniciar el proyecto o fase",
  "salida": "Acta de constitución del proyecto",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Autoriza formalmente el proyecto y da al director del proyecto la autoridad para usar los recursos. Contiene los doce elementos que pide la Guía del PMBOK® para un acta de constitución.",
  "carpeta": "01 - Gobernanza/1.1 Iniciar el proyecto",
  "pdf": "/documentos/GOB-02-acta-de-constitucion-del-proyecto.pdf",
  "docx": "/documentos/GOB-02-acta-de-constitucion-del-proyecto.docx",
  "secciones": [
   {
    "titulo": "1. Datos generales",
    "apaisada": false,
    "bloques": [
     {
      "t": "kv",
      "filas": [
       [
        "Proyecto",
        "Sistema inteligente basado en Machine Learning para la alerta temprana del bajo rendimiento académico estudiantil"
       ],
       [
        "Sigla",
        "SIA-T"
       ],
       [
        "Organización cliente",
        "I.E.P. Peruano Francés. Av. Pastor Sevilla con Av. Juan Velasco Alvarado, Villa El Salvador, Lima."
       ],
       [
        "Patrocinadora",
        "Promotora Directora de la I.E.P. Peruano Francés"
       ],
       [
        "Director del proyecto",
        "Jhostin J. Galarza Camarena"
       ],
       [
        "Equipo del proyecto",
        "Helber J. Perez Gutierrez, Carlos A. Curo Ramos, Jadira D. Vasquez Castro"
       ],
       [
        "Docente asesor",
        "Mg. MBA Antonio Arqque Pantigozo — Gestión de Proyecto de TI, UNTELS"
       ],
       [
        "Periodo",
        "Del 12/10/2026 al 23/04/2027"
       ],
       [
        "Fecha de emisión",
        "10/10/2026"
       ]
      ]
     }
    ]
   },
   {
    "titulo": "2. Propósito y justificación del proyecto",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El proyecto dotará a la I.E.P. Peruano Francés de un sistema web que reúne las notas, la asistencia y las incidencias de sus estudiantes, estima cada semana el riesgo de bajo rendimiento de cada uno y avisa a tiempo al docente tutor, a la coordinación y a la dirección."
     },
     {
      "t": "p",
      "x": "Se justifica porque hoy la detección es tardía: la información está repartida entre Cubicol, cuadernos y WhatsApp, y los seis docentes encuestados reconocen que los problemas académicos se advierten cuando ya ocurrieron. El sustento completo está en el caso de negocio (GOB-01)."
     }
    ]
   },
   {
    "titulo": "3. Objetivos medibles y criterios de éxito",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Objetivo",
       "Criterio de éxito",
       "Quién lo verifica"
      ],
      "anchos": [
       18,
       60,
       22
      ],
      "filas": [
       [
        "Alcance",
        "Se entregan y aceptan los nueve entregables del producto (E-01 a E-09), que cubren los 20 requisitos (12 funcionales y 8 no funcionales). Todos los requisitos de prioridad alta quedan aceptados.",
        "Product Owner"
       ],
       [
        "Tiempo",
        "El proyecto concluye el 23/04/2027. Los seis hitos se cumplen con una desviación total no mayor de una semana y media; índice de desempeño del cronograma (SPI) de 0.90 o más.",
        "Director del proyecto"
       ],
       [
        "Costo",
        "El costo valorizado no supera S/ 63,495.53; índice de desempeño del costo (CPI) de 0.90 o más. El colegio no realiza desembolsos durante el proyecto.",
        "Director del proyecto"
       ],
       [
        "Calidad del modelo",
        "El modelo alcanza el umbral mínimo de 75 % en la métrica de desempeño acordada, validado con datos reales del colegio. La línea base dice «precisión mínima de 75 %»; su redefinición como proporción de estudiantes en riesgo detectados está en evaluación (SC-08).",
        "Responsable del modelo ML y docente asesor"
       ],
       [
        "Uso",
        "Tres docentes tutores completan el piloto de dos semanas; al menos 80 % de tutores y coordinadores recibe la capacitación; el tablero carga en menos de 3 segundos.",
        "Product Owner"
       ],
       [
        "Cumplimiento legal",
        "El tratamiento de datos personales se ajusta a la Ley N.° 29733 antes de cargar datos reales de estudiantes.",
        "Patrocinadora"
       ],
       [
        "Beneficio",
        "Reducción de al menos 30 % en los casos de detección tardía durante el año escolar 2027. Se mide después del cierre del proyecto (ver GOB-01).",
        "Patrocinadora"
       ]
      ],
      "titulo": "Objetivos y criterios de éxito"
     }
    ]
   },
   {
    "titulo": "4. Requisitos de alto nivel",
    "apaisada": false,
    "bloques": [
     {
      "t": "ul",
      "items": [
       "Integrar en una sola base las notas, la asistencia, la participación y las incidencias de los estudiantes.",
       "Limpiar y validar los datos de forma automática antes de usarlos.",
       "Clasificar cada semana a cada estudiante en riesgo bajo, medio o alto mediante un modelo de Machine Learning.",
       "Avisar por correo y en el panel web al docente tutor y a la coordinación cuando un estudiante pasa a riesgo alto, y comunicar el caso al apoderado.",
       "Mostrar un tablero con semáforo por estudiante, aula y grado, la ficha de cada estudiante y reportes exportables.",
       "Registrar las acciones de seguimiento que el colegio toma con cada caso.",
       "Controlar el acceso por rol (docente, coordinación, psicología y dirección) y proteger los datos personales conforme a la Ley N.° 29733.",
       "Ser utilizable por un docente tras una capacitación de dos horas, desde cualquier navegador."
      ]
     },
     {
      "t": "p",
      "x": "El detalle está en la documentación de requisitos y en su matriz de trazabilidad (dominio de Alcance)."
     }
    ]
   },
   {
    "titulo": "5. Descripción de alto nivel, límites y entregables clave",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El producto es un sistema web alojado en servicios gestionados en la nube. Un proceso programado toma cada semana los datos académicos, actualiza el modelo y calcula el nivel de riesgo de cada estudiante; el tablero y el motor de alertas presentan esos resultados a quienes deben actuar."
     },
     {
      "t": "tabla",
      "cols": [
       "Código",
       "Entregable clave",
       "Sprint"
      ],
      "anchos": [
       12,
       70,
       18
      ],
      "filas": [
       [
        "E-01",
        "Módulo de integración y limpieza de datos",
        "Sprint 2"
       ],
       [
        "E-02",
        "Modelo predictivo de riesgo académico, con tres niveles y actualización semanal",
        "Sprint 3"
       ],
       [
        "E-03",
        "Motor de alertas tempranas (correo y panel web)",
        "Sprint 4"
       ],
       [
        "E-04",
        "Tablero web con semáforo, fichas de estudiante y reportes",
        "Sprint 4"
       ],
       [
        "E-05",
        "Gestión de roles y accesos",
        "Sprint 4"
       ],
       [
        "E-09",
        "Informe del piloto con docentes tutores y ajustes aplicados",
        "Sprint 5"
       ],
       [
        "E-06",
        "Manual de usuario",
        "Sprint 6"
       ],
       [
        "E-07",
        "Manual técnico",
        "Sprint 6"
       ],
       [
        "E-08",
        "Plan y sesión de capacitación de dos horas",
        "Sprint 6"
       ]
      ],
      "titulo": "Entregables clave del producto"
     },
     {
      "t": "h",
      "x": "Límites del proyecto"
     },
     {
      "t": "tabla",
      "cols": [
       "Dentro del alcance",
       "Fuera del alcance"
      ],
      "anchos": [
       50,
       50
      ],
      "filas": [
       [
        [
         "Datos de notas, asistencia, participación e incidencias.",
         "Usuarios: tutores, coordinación, psicología, dirección y personal administrativo.",
         "Comunicados a los apoderados de estudiantes en riesgo alto.",
         "Piloto con docentes antes del despliegue definitivo.",
         "Una institución: la I.E.P. Peruano Francés."
        ],
        [
         "Aplicación móvil nativa.",
         "Instalación o administración de servidores en el colegio.",
         "Integración con plataformas distintas de Cubicol.",
         "Registro de asistencia con código QR y envío automático por WhatsApp.",
         "Pagos, facturación y videoconferencia.",
         "Evaluación del desempeño de los docentes."
        ]
       ]
      ]
     }
    ]
   },
   {
    "titulo": "6. Riesgo general del proyecto",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El riesgo general del proyecto se considera **medio-alto**. El equipo tiene la capacidad técnica y un calendario con holgura, pero el resultado depende de condiciones que no controla: datos reales suficientes, adopción por parte de los docentes y un tratamiento correcto de los datos personales de menores. Los riesgos principales se listan en el caso de negocio (GOB-01); su análisis formal se hará en el dominio de Riesgo."
     }
    ]
   },
   {
    "titulo": "7. Resumen del cronograma de hitos",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Hito",
       "Fecha",
       "Qué se demuestra"
      ],
      "anchos": [
       30,
       18,
       52
      ],
      "filas": [
       [
        "Inicio del proyecto",
        "lun 12/10/2026",
        "Acta de constitución emitida y reunión de inicio con la Dirección."
       ],
       [
        "Hito 1 · Revisión del Sprint 1",
        "vie 06/11/2026",
        "Arquitectura validada y variables del modelo definidas."
       ],
       [
        "Hito 2 · Revisión del Sprint 2",
        "vie 04/12/2026",
        "Base de datos centralizada y validada."
       ],
       [
        "Hito 3 · Revisión del Sprint 3",
        "mié 30/12/2026",
        "Modelo ML validado con el criterio acordado."
       ],
       [
        "Hito 4 · Revisión del Sprint 4",
        "vie 29/01/2027",
        "Sistema integrado con alertas y tablero operativos."
       ],
       [
        {
         "x": "Receso",
         "fill": "gris"
        },
        {
         "x": "01/02/2027 al 26/02/2027",
         "fill": "gris"
        },
        {
         "x": "Vacaciones escolares, sin trabajo planificado. La última semana es la reserva de gestión.",
         "fill": "gris"
        }
       ],
       [
        "Hito 5 · Revisión del Sprint 5",
        "mié 24/03/2027",
        "Sistema validado con pruebas y piloto real con docentes."
       ],
       [
        "Hito 6 · Cierre del proyecto",
        "vie 23/04/2027",
        "Sistema en producción, capacitación realizada y proyecto cerrado."
       ]
      ],
      "titulo": "Resumen del cronograma de hitos"
     },
     {
      "t": "p",
      "x": "El detalle de las 44 actividades está en la línea base del cronograma (CRO-01)."
     }
    ]
   },
   {
    "titulo": "8. Recursos financieros preaprobados",
    "apaisada": false,
    "bloques": [
     {
      "t": "kv",
      "filas": [
       [
        "Costo de la EDT (44 actividades y reunión diaria)",
        "S/ 54,417.42"
       ],
       [
        "Reserva de contingencia (10 %)",
        "S/ 5,441.74"
       ],
       [
        "Línea base de costos",
        "S/ 59,859.17"
       ],
       [
        "Reserva de gestión (una semana)",
        "S/ 3,636.36"
       ],
       [
        "Presupuesto total del proyecto",
        "S/ 63,495.53"
       ]
      ]
     },
     {
      "t": "p",
      "x": "La patrocinadora no asigna fondos: el presupuesto corresponde al trabajo del equipo, valorizado, y lo asumen sus integrantes. El colegio aporta, sin costo, el acceso a los datos académicos, un ambiente para reuniones y capacitación, y el tiempo de su personal en entrevistas, validaciones, piloto y pruebas de aceptación."
     },
     {
      "t": "p",
      "x": "La reserva de contingencia la administra el director del proyecto. El uso de la reserva de gestión requiere la conformidad de la patrocinadora."
     }
    ]
   },
   {
    "titulo": "9. Lista de interesados clave",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Interesado",
       "Papel en el proyecto",
       "Estrategia"
      ],
      "anchos": [
       28,
       50,
       22
      ],
      "filas": [
       [
        "I-01 Promotora Directora",
        "Autoriza el proyecto, facilita datos y personal, aprueba las líneas base y el cierre",
        "Gestionar de cerca"
       ],
       [
        "I-02 Subdirector",
        "Supervisa la gestión académica y respalda la adopción del sistema",
        "Gestionar de cerca"
       ],
       [
        "I-03 Coordinación académica",
        "Candidata a Product Owner: prioriza requisitos, acepta entregables y usa los reportes",
        "Gestionar de cerca"
       ],
       [
        "I-05 Docentes tutores y auxiliares",
        "Usuarios principales: registran datos, reciben alertas y actúan con el estudiante",
        "Mantener informados"
       ],
       [
        "I-07 Gestora de la plataforma Cubicol",
        "Entrega las exportaciones de datos y conoce los formatos de evaluación",
        "Mantener satisfechos"
       ],
       [
        "I-08 Encargado de soporte de TI",
        "Soporte de red y equipos; futuro responsable técnico del sistema",
        "Gestionar de cerca"
       ],
       [
        "I-12 Equipo del proyecto",
        "Planifica, construye y entrega el sistema",
        "Gestionar de cerca"
       ],
       [
        "I-13 Docente asesor del curso",
        "Orienta y evalúa los entregables de gestión",
        "Gestionar de cerca"
       ]
      ],
      "titulo": "Interesados clave",
      "fuente": "Fuente: registro de interesados (INT-01), que identifica a 17 interesados."
     }
    ]
   },
   {
    "titulo": "10. Requisitos de aprobación del proyecto",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Qué se aprueba",
       "Quién aprueba",
       "Cómo queda constancia"
      ],
      "anchos": [
       38,
       30,
       32
      ],
      "filas": [
       [
        "Acta de constitución y cambios a sus objetivos",
        "Patrocinadora",
        "Firma del acta o de la solicitud de cambio"
       ],
       [
        "Líneas base de alcance, cronograma y costos, y sus cambios",
        "Patrocinadora o Product Owner designado, a propuesta del director del proyecto",
        "Registro de cambios (GOB-10)"
       ],
       [
        "Entregables de cada sprint",
        "Product Owner",
        "Acta de aceptación en la revisión del sprint (ALC-04)"
       ],
       [
        "Resultado del piloto y pase a producción",
        "Patrocinadora",
        "Acta de la revisión del Sprint 5"
       ],
       [
        "Entregables académicos del curso",
        "Docente asesor",
        "Calificación y observaciones en clase"
       ],
       [
        "Cierre del proyecto",
        "Patrocinadora y director del proyecto",
        "Acta de cierre"
       ]
      ],
      "titulo": "Aprobaciones"
     },
     {
      "t": "p",
      "x": "El proyecto se considera exitoso si cumple los criterios de la sección 3 y la patrocinadora firma el acta de cierre."
     }
    ]
   },
   {
    "titulo": "11. Criterios de salida del proyecto",
    "apaisada": false,
    "bloques": [
     {
      "t": "h",
      "x": "El proyecto se cierra cuando"
     },
     {
      "t": "ul",
      "items": [
       "Todos los entregables están aceptados, o sus pendientes fueron transferidos por escrito al colegio.",
       "El sistema opera en producción y los accesos de administración fueron entregados al colegio.",
       "La capacitación se realizó y los manuales fueron entregados.",
       "Las lecciones aprendidas y el informe final están registrados.",
       "Los datos de prueba fueron eliminados y los accesos del equipo, retirados."
      ]
     },
     {
      "t": "h",
      "x": "El proyecto se suspende o se cancela si"
     },
     {
      "t": "ul",
      "items": [
       "El colegio retira la autorización, o no entrega datos reales hasta el cierre del Sprint 2 (04/12/2026).",
       "No se resuelve el tratamiento de datos personales antes del Sprint 5.",
       "El modelo no alcanza el umbral con datos reales después del Sprint 3 y no hay una alternativa aprobada. En ese caso se evalúa reducir el alcance a tablero y alertas por reglas.",
       "El equipo se reduce a menos de tres integrantes."
      ]
     }
    ]
   },
   {
    "titulo": "12. Director del proyecto: responsabilidad y nivel de autoridad",
    "apaisada": false,
    "bloques": [
     {
      "t": "kv",
      "filas": [
       [
        "Director del proyecto",
        "Jhostin J. Galarza Camarena"
       ],
       [
        "Responsabilidad",
        "Planificar, coordinar y controlar el proyecto; integrar el trabajo del equipo; mantener informados a los interesados; custodiar los documentos y el registro de cambios."
       ],
       [
        "Puede decidir",
        "La asignación de tareas y la convocatoria a reuniones; el uso de la reserva de contingencia; los cambios que no alteran las líneas base; la representación del equipo ante el colegio y el docente."
       ],
       [
        "No puede decidir solo",
        "Cambios a los objetivos, al alcance, a las fechas de los hitos o al presupuesto (sección 10); compromisos del colegio con proveedores."
       ],
       [
        "Escalamiento",
        "Primero al Product Owner; luego a la patrocinadora. En lo académico, al docente asesor."
       ]
      ]
     }
    ]
   },
   {
    "titulo": "13. Patrocinadora y autorización",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Con su firma, la patrocinadora autoriza el inicio del proyecto y faculta al director del proyecto a utilizar los recursos descritos en este documento."
     },
     {
      "t": "nota",
      "tipo": "aviso",
      "x": "Documento emitido para firma el 10/10/2026. A esa fecha no cuenta con firmas; la reunión de inicio con la Dirección está programada para el 12/10/2026."
     },
     {
      "t": "firmas",
      "firmantes": [
       {
        "nombre": "Promotora Directora",
        "rol": "Patrocinadora — I.E.P. Peruano Francés"
       },
       {
        "nombre": "Jhostin J. Galarza Camarena",
        "rol": "Director del proyecto"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "GOB-03",
  "titulo": "Registro de supuestos y restricciones",
  "dominio": "Gobernanza",
  "area": "Iniciación",
  "proceso": "Iniciar el proyecto o fase",
  "salida": "Registro de supuestos",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Lista lo que el proyecto da por cierto sin tener aún la prueba y los límites que no puede cambiar. Cada supuesto tiene quién lo comprueba y cuándo.",
  "carpeta": "01 - Gobernanza/1.1 Iniciar el proyecto",
  "pdf": "/documentos/GOB-03-registro-de-supuestos-y-restricciones.pdf",
  "docx": "/documentos/GOB-03-registro-de-supuestos-y-restricciones.docx",
  "secciones": [
   {
    "titulo": "1. Uso del registro",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Un supuesto es algo que el proyecto da por cierto sin tener todavía la prueba; una restricción es un límite que el proyecto no puede cambiar. Cada supuesto tiene un responsable de comprobarlo y una fecha. Si resulta falso, se registra un incidente (GOB-06) o una solicitud de cambio (GOB-10)."
     },
     {
      "t": "p",
      "x": "El registro se revisa en la planificación de cada sprint y lo mantiene el director del proyecto."
     }
    ]
   },
   {
    "titulo": "2. Supuestos",
    "apaisada": true,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Supuesto",
       "Qué pasa si no se cumple",
       "Quién lo comprueba",
       "Cuándo",
       "Estado"
      ],
      "anchos": [
       5,
       28,
       25,
       14,
       14,
       14
      ],
      "filas": [
       [
        "S-01",
        "El colegio entregará exportaciones de notas de Cubicol de 2025 y 2026.",
        "No hay datos para entrenar ni validar el modelo.",
        "Jadira Vasquez",
        "Sprint 1 (hasta el 23/10/2026)",
        {
         "x": "Por comprobar",
         "fill": "amarillo"
        }
       ],
       [
        "S-02",
        "Los datos históricos cubren al menos dos periodos consecutivos por estudiante.",
        "No se puede predecir un periodo a partir del anterior.",
        "Helber Perez",
        "Sprint 1",
        {
         "x": "Comprobado en parte: hay registros de marzo a mayo y del primer trimestre de 2026 para algunos cursos",
         "fill": "azul"
        }
       ],
       [
        "S-03",
        "La asistencia y las incidencias podrán registrarse en formato digital desde el Sprint 2.",
        "El modelo trabaja solo con notas y pierde variables.",
        "Jadira Vasquez, con la Dirección",
        "Sprint 2",
        {
         "x": "Por comprobar",
         "fill": "amarillo"
        }
       ],
       [
        "S-04",
        "El colegio designará a una persona como Product Owner.",
        "Se retrasan las decisiones de prioridad y la aceptación de entregables.",
        "Jhostin Galarza",
        "Semana del 12/10/2026",
        {
         "x": "Por comprobar",
         "fill": "amarillo"
        }
       ],
       [
        "S-05",
        "Los planes gratuitos de alojamiento y base de datos alcanzan para 200 estudiantes y unos 20 usuarios.",
        "Se requiere un plan de pago o cambiar de proveedor.",
        "Jadira Vasquez",
        "Sprint 1 (diseño de arquitectura)",
        {
         "x": "Por comprobar",
         "fill": "amarillo"
        }
       ],
       [
        "S-06",
        "Los apoderados serán informados y darán su consentimiento para el tratamiento de los datos.",
        "No se pueden cargar datos reales en la nube; el piloto se haría con datos anonimizados.",
        "Dirección, con apoyo del equipo",
        "Antes del Sprint 5",
        {
         "x": "Por comprobar",
         "fill": "amarillo"
        }
       ],
       [
        "S-07",
        "Tres docentes tutores participarán en el piloto en marzo de 2027.",
        "El piloto no se realiza o pierde validez.",
        "Jhostin Galarza",
        "Sprint 4",
        {
         "x": "Por comprobar",
         "fill": "amarillo"
        }
       ],
       [
        "S-08",
        "Las clases terminan en diciembre de 2026 y se reanudan en marzo de 2027.",
        "Cambian las fechas del piloto y de las pruebas de aceptación.",
        "Jhostin Galarza, con la Dirección",
        "Semana del 12/10/2026",
        {
         "x": "Por comprobar",
         "fill": "amarillo"
        }
       ],
       [
        "S-09",
        "El servicio de internet del colegio se mantiene estable.",
        "El tablero no está disponible en horario escolar.",
        "Encargado de TI del colegio",
        "Sprint 5",
        {
         "x": "Por comprobar: en la entrevista se mencionó lentitud reciente",
         "fill": "amarillo"
        }
       ],
       [
        "S-10",
        "Los cuatro integrantes del equipo permanecen hasta abril de 2027.",
        "Se reasignan paquetes de trabajo y puede reducirse el alcance.",
        "Jhostin Galarza",
        "Revisión en cada sprint",
        {
         "x": "Vigente",
         "fill": "verde"
        }
       ],
       [
        "S-11",
        "Los docentes tienen un correo personal donde recibir las alertas.",
        "Las alertas llegan solo por el panel web.",
        "Jadira Vasquez",
        "Sprint 4",
        {
         "x": "Comprobado en parte: usan correo personal de Gmail; falta la lista de direcciones",
         "fill": "azul"
        }
       ]
      ],
      "titulo": "Registro de supuestos",
      "compacta": true
     }
    ]
   },
   {
    "titulo": "3. Restricciones",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Restricción",
       "Origen",
       "Efecto en el proyecto"
      ],
      "anchos": [
       8,
       38,
       16,
       38
      ],
      "filas": [
       [
        "R-01",
        "Fecha de cierre: 23/04/2027.",
        "Calendario del curso",
        "Seis sprints de cuatro semanas; después de la reserva de gestión no hay margen."
       ],
       [
        "R-02",
        "Sin presupuesto institucional: solo herramientas de licencia libre o planes gratuitos.",
        "Colegio y equipo",
        "Condiciona la arquitectura y el abastecimiento."
       ],
       [
        "R-03",
        "Equipo fijo de cuatro integrantes.",
        "Curso",
        "No se puede incorporar personal adicional."
       ],
       [
        "R-04",
        "Ley N.° 29733 de Protección de Datos Personales: los estudiantes son menores de edad.",
        "Legal",
        "Consentimiento, medidas de seguridad y reglas para alojar datos fuera del país."
       ],
       [
        "R-05",
        "Receso del 01/02/2027 al 26/02/2027.",
        "Calendario escolar",
        "No hay actividades con docentes; el piloto pasa a marzo."
       ],
       [
        "R-06",
        "El repositorio y el blog del proyecto son públicos.",
        "Decisión del equipo",
        "No pueden contener datos personales de estudiantes, docentes ni apoderados."
       ],
       [
        "R-07",
        "Cubicol es propiedad de un tercero.",
        "Proveedor",
        "El proyecto no puede modificarlo; solo usa sus exportaciones."
       ]
      ],
      "titulo": "Registro de restricciones"
     }
    ]
   },
   {
    "titulo": "4. Supuestos retirados",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Supuesto de la versión anterior",
       "Situación",
       "Qué lo reemplaza"
      ],
      "anchos": [
       36,
       34,
       30
      ],
      "filas": [
       [
        "El sistema se instalará en un servidor del colegio.",
        "Retirado por la solicitud de cambio SC-03.",
        "Alojamiento en servicios gestionados en la nube (S-05)."
       ],
       [
        "El colegio provee un servidor de correo institucional.",
        "Invalidado: en la entrevista se indicó que los docentes usan correos personales.",
        "Servicio de envío de correo y supuesto S-11."
       ],
       [
        "Cubicol ofrece una API o acceso directo a su base de datos.",
        "No comprobado; se trata como riesgo.",
        "Exportaciones entregadas por la gestora de la plataforma (S-01)."
       ],
       [
        "Los datos históricos cubren al menos tres años.",
        "No comprobado.",
        "Supuesto S-02, con un mínimo de dos periodos."
       ]
      ],
      "titulo": "Supuestos de la fase de formulación que ya no aplican"
     }
    ]
   }
  ]
 },
 {
  "id": "GOB-04",
  "titulo": "Plan para la dirección del proyecto",
  "dominio": "Gobernanza",
  "area": "Planificación",
  "proceso": "Integrar y alinear los planes del proyecto",
  "salida": "Plan para la dirección del proyecto",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Reúne en un solo documento cómo se ejecuta, se controla y se cierra el proyecto: enfoque de desarrollo, planes que lo componen, líneas base, gobernanza, configuración y medición del desempeño.",
  "carpeta": "01 - Gobernanza/1.2 Integrar los planes",
  "pdf": "/documentos/GOB-04-plan-para-la-direccion-del-proyecto.pdf",
  "docx": "/documentos/GOB-04-plan-para-la-direccion-del-proyecto.docx",
  "secciones": [
   {
    "titulo": "1. Enfoque de desarrollo y ciclo de vida",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El proyecto usa un **enfoque híbrido**. La planificación de alto nivel es predictiva: el alcance, el cronograma y los costos se fijan en líneas base que solo cambian por control de cambios. La construcción es adaptativa: el producto se desarrolla en seis sprints de cuatro semanas con el marco Scrum, y cada sprint termina con una revisión ante el colegio."
     },
     {
      "t": "tabla",
      "cols": [
       "Factor",
       "Situación del proyecto",
       "Enfoque que favorece"
      ],
      "anchos": [
       20,
       56,
       24
      ],
      "filas": [
       [
        "Requisitos",
        "Los 20 requisitos están definidos, pero la forma del tablero y de las alertas depende de la reacción de los docentes.",
        "Adaptativo"
       ],
       [
        "Entregables",
        "El sistema puede entregarse por partes: datos, modelo, alertas y tablero.",
        "Adaptativo"
       ],
       [
        "Fecha de cierre",
        "Fija: 23/04/2027, por el calendario del curso.",
        "Predictivo"
       ],
       [
        "Normativa",
        "Datos personales de menores: el cumplimiento debe planificarse desde el inicio.",
        "Predictivo"
       ],
       [
        "Organización cliente",
        "Colegio con estructura jerárquica; la Dirección espera un plan con fechas.",
        "Predictivo"
       ],
       [
        "Equipo",
        "Cuatro personas, tamaño adecuado para trabajar con Scrum.",
        "Adaptativo"
       ],
       [
        "Incertidumbre",
        "Alta en la calidad de los datos y en el desempeño del modelo.",
        "Adaptativo"
       ]
      ],
      "titulo": "Adaptación: por qué un enfoque híbrido",
      "fuente": "Criterios tomados de la sección de adaptación de la Guía del PMBOK®, octava edición."
     },
     {
      "t": "tabla",
      "cols": [
       "Fase",
       "Periodo",
       "Enfoque",
       "Resultado"
      ],
      "anchos": [
       24,
       24,
       14,
       38
      ],
      "filas": [
       [
        "Formulación y evaluación",
        "Abril a julio de 2026 (curso anterior)",
        "Predictivo",
        "Diagnóstico, alternativa seleccionada y líneas base v2. Fase cerrada (GOB-11)."
       ],
       [
        "Inicio y planificación",
        "Octubre de 2026",
        "Predictivo",
        "Acta de constitución, plan para la dirección y registros del proyecto."
       ],
       [
        "Construcción (Sprints 1 a 4)",
        "12/10/2026 al 29/01/2027",
        "Adaptativo",
        "Datos, modelo, alertas y tablero integrados."
       ],
       [
        "Validación (Sprint 5)",
        "01/03/2027 al 26/03/2027",
        "Adaptativo",
        "Pruebas y piloto con docentes."
       ],
       [
        "Implantación y cierre (Sprint 6)",
        "29/03/2027 al 23/04/2027",
        "Predictivo",
        "Sistema en producción, capacitación y cierre."
       ]
      ],
      "titulo": "Ciclo de vida del proyecto"
     }
    ]
   },
   {
    "titulo": "2. Planes que integran este plan",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Plan componente",
       "Dominio",
       "Documento",
       "Estado"
      ],
      "anchos": [
       34,
       15,
       25,
       26
      ],
      "filas": [
       [
        "Plan de gestión del alcance y de los requisitos",
        "Alcance",
        "ALC-01",
        {
         "x": "Vigente",
         "fill": "verde"
        }
       ],
       [
        "Plan de gestión de la calidad",
        "Alcance",
        "ALC-03",
        {
         "x": "Vigente",
         "fill": "verde"
        }
       ],
       [
        "Plan de gestión del cronograma",
        "Cronograma",
        "CRO-01",
        {
         "x": "Vigente (v3)",
         "fill": "verde"
        }
       ],
       [
        "Plan de gestión financiera",
        "Finanzas",
        "Línea base de costos v2",
        {
         "x": "Vigente; fechas por actualizar",
         "fill": "amarillo"
        }
       ],
       [
        "Plan de involucramiento de los interesados",
        "Interesados",
        "INT-02",
        {
         "x": "Vigente",
         "fill": "verde"
        }
       ],
       [
        "Plan de gestión de las comunicaciones",
        "Interesados",
        "INT-03",
        {
         "x": "Vigente",
         "fill": "verde"
        }
       ],
       [
        "Plan de estrategia de abastecimiento",
        "Gobernanza",
        "GOB-05",
        {
         "x": "Vigente",
         "fill": "verde"
        }
       ],
       [
        "Plan de gestión de cambios y de la configuración",
        "Gobernanza",
        "GOB-10 y sección 5",
        {
         "x": "Vigente",
         "fill": "verde"
        }
       ],
       [
        "Plan de gestión de los recursos",
        "Recursos",
        "—",
        {
         "x": "Pendiente: dominio no desarrollado",
         "fill": "gris"
        }
       ],
       [
        "Plan de gestión de los riesgos",
        "Riesgo",
        "—",
        {
         "x": "Pendiente: dominio no desarrollado",
         "fill": "gris"
        }
       ]
      ],
      "titulo": "Planes componentes y su estado"
     }
    ]
   },
   {
    "titulo": "3. Líneas base",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Línea base",
       "Contenido",
       "Versión vigente",
       "Situación"
      ],
      "anchos": [
       14,
       36,
       16,
       34
      ],
      "filas": [
       [
        "Alcance",
        "Enunciado del alcance (ALC-02), EDT de seis componentes y su diccionario.",
        "v3 (10/10/2026)",
        "Enunciado actualizado con el despliegue en la nube. La EDT y su diccionario están por unificar (SC-10)."
       ],
       [
        "Cronograma",
        "44 actividades y una reunión diaria en 6 sprints; las duraciones esperadas (PERT) suman 159.2 días.",
        "v3 (10/10/2026)",
        "Del 12/10/2026 al 23/04/2027, con receso en febrero (CRO-01)."
       ],
       [
        "Costos",
        "S/ 59,859.17; presupuesto total S/ 63,495.53.",
        "v2 (curso anterior)",
        "Montos vigentes. La distribución por fechas está pendiente (SC-02)."
       ]
      ],
      "titulo": "Líneas base del proyecto"
     },
     {
      "t": "p",
      "x": "Las tres líneas base forman la línea base para la medición del desempeño. Desde su aprobación, cualquier modificación sigue el proceso de control de cambios (GOB-10)."
     }
    ]
   },
   {
    "titulo": "4. Gobernanza del proyecto",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El modelo de gobernanza es estructurado y ligero: la patrocinadora y el Product Owner deciden sobre el qué y el cuándo; el equipo se organiza para decidir el cómo. Así se combina la supervisión que espera el colegio con la autonomía que requiere un equipo Scrum."
     },
     {
      "t": "tabla",
      "cols": [
       "Rol",
       "Quién",
       "Decide sobre"
      ],
      "anchos": [
       26,
       34,
       40
      ],
      "filas": [
       [
        "Patrocinadora",
        "Promotora Directora",
        "Autorización, líneas base, pase a producción y cierre."
       ],
       [
        "Product Owner",
        "Por designar por la Dirección (coordinación académica)",
        "Prioridad de los requisitos y aceptación de los entregables."
       ],
       [
        "Director del proyecto y Scrum Master",
        "Jhostin J. Galarza Camarena",
        "Plan, coordinación, reserva de contingencia y cambios menores."
       ],
       [
        "Equipo de desarrollo",
        "Jhostin J. Galarza Camarena, Helber J. Perez Gutierrez, Carlos A. Curo Ramos, Jadira D. Vasquez Castro",
        "Cómo construir cada entregable."
       ],
       [
        "Docente asesor",
        "Mg. MBA Antonio Arqque Pantigozo",
        "Evaluación académica y orientación metodológica."
       ]
      ],
      "titulo": "Roles y autoridad"
     },
     {
      "t": "tabla",
      "cols": [
       "Reunión",
       "Frecuencia",
       "Participantes",
       "Resultado"
      ],
      "anchos": [
       22,
       26,
       28,
       24
      ],
      "filas": [
       [
        "Reunión diaria",
        "Diaria, 15 minutos (desde el Sprint 2)",
        "Equipo",
        "Tablero de tareas al día"
       ],
       [
        "Planificación del sprint",
        "Primer día de cada sprint",
        "Equipo y Product Owner",
        "Trabajo comprometido"
       ],
       [
        "Revisión del sprint",
        "Último día hábil de cada sprint",
        "Equipo, Product Owner y patrocinadora",
        "Entregables aceptados u observados"
       ],
       [
        "Retrospectiva",
        "Después de cada revisión",
        "Equipo",
        "Lecciones aprendidas"
       ],
       [
        "Comité de cambios",
        "Cuando una solicitud afecta una línea base",
        "Director, Product Owner y patrocinadora",
        "Decisión registrada"
       ]
      ],
      "titulo": "Reuniones de gobierno"
     },
     {
      "t": "p",
      "x": "Escalamiento: un problema que el equipo no resuelve en dos días hábiles se registra como incidente y se eleva al Product Owner; si afecta una línea base o la relación con el colegio, se eleva a la patrocinadora."
     }
    ]
   },
   {
    "titulo": "5. Gestión de la configuración",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Elemento",
       "Regla"
      ],
      "anchos": [
       26,
       74
      ],
      "filas": [
       [
        "Código fuente y blog",
        "Repositorio en GitHub. La rama principal publica el sitio; todo cambio entra por una rama y una solicitud de integración revisada por otro integrante."
       ],
       [
        "Documentos de gestión",
        "Se generan desde una fuente única de contenido que está en el repositorio. Cada documento lleva código (GOB, INT, ALC o CRO), versión y fecha."
       ],
       [
        "Versiones",
        "Un ajuste de redacción sube el decimal (1.0 a 1.1). Un cambio aprobado que altera el contenido sube el entero (1.x a 2.0)."
       ],
       [
        "Ubicación",
        "Carpeta «Documentación» del proyecto, ordenada por dominio y proceso, con copia en PDF publicada en el blog."
       ],
       [
        "Datos del colegio",
        "Fuera del repositorio. Solo se versionan datos anonimizados o sintéticos."
       ],
       [
        "Modelo de Machine Learning",
        "Cada versión entrenada se guarda con su fecha, los datos de origen y su reporte de métricas."
       ]
      ],
      "titulo": "Reglas de configuración"
     }
    ]
   },
   {
    "titulo": "6. Medición del desempeño",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El desempeño se mide al cierre de cada sprint con el análisis del valor ganado y se complementa con indicadores de adelanto, que avisan antes de que el problema ocurra."
     },
     {
      "t": "tabla",
      "cols": [
       "Indicador",
       "Tipo",
       "Umbral de alerta",
       "Responsable"
      ],
      "anchos": [
       42,
       13,
       28,
       17
      ],
      "filas": [
       [
        "SPI: valor ganado entre valor planificado",
        "Retraso",
        "Menor de 0.90",
        "Jhostin Galarza"
       ],
       [
        "CPI: valor ganado entre costo real",
        "Retraso",
        "Menor de 0.90",
        "Jhostin Galarza"
       ],
       [
        "Requisitos aceptados sobre los comprometidos en el sprint",
        "Retraso",
        "Menos de 80 %",
        "Product Owner"
       ],
       [
        "Días de espera de los datos solicitados al colegio",
        "Adelanto",
        "Más de 5 días hábiles",
        "Jadira Vasquez"
       ],
       [
        "Supuestos por comprobar que vencen en el sprint",
        "Adelanto",
        "Alguno sin comprobar a mitad del sprint",
        "Jhostin Galarza"
       ],
       [
        "Interesados clave por debajo del nivel de involucramiento deseado",
        "Adelanto",
        "Más de la mitad al cierre del Sprint 2",
        "Jhostin Galarza"
       ],
       [
        "Incidentes abiertos de prioridad alta",
        "Adelanto",
        "Más de 3",
        "Jhostin Galarza"
       ]
      ],
      "titulo": "Indicadores de adelanto y de retraso"
     },
     {
      "t": "p",
      "x": "Semáforo: verde si el índice es 1.00 o más; amarillo entre 0.90 y 0.99; rojo por debajo de 0.90. En rojo se convoca al equipo y al Product Owner y se evalúa una solicitud de cambio."
     }
    ]
   },
   {
    "titulo": "7. Mantenimiento del plan",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El plan se revisa en cada revisión de sprint. Las actualizaciones que no alteran las líneas base las aprueba el director del proyecto; las demás pasan por control de cambios. Quedan por incorporar los planes de recursos y de riesgos cuando el equipo desarrolle esos dominios."
     }
    ]
   }
  ]
 },
 {
  "id": "GOB-05",
  "titulo": "Plan de estrategia de abastecimiento",
  "dominio": "Gobernanza",
  "area": "Planificación",
  "proceso": "Planificar la estrategia de abastecimiento",
  "salida": "Plan de estrategia de abastecimiento: decisiones de internalización o externalización y criterios de selección de proveedores",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Define qué hace el equipo y qué se obtiene de terceros, con qué criterios se eligen los proveedores y cómo se protegen los datos alojados fuera del colegio.",
  "carpeta": "01 - Gobernanza/1.3 Abastecimiento",
  "pdf": "/documentos/GOB-05-plan-de-estrategia-de-abastecimiento.pdf",
  "docx": "/documentos/GOB-05-plan-de-estrategia-de-abastecimiento.docx",
  "secciones": [
   {
    "titulo": "1. Propósito",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Este plan documenta qué partes del proyecto se hacen con el equipo y cuáles se obtienen de terceros, con qué criterios se eligen los proveedores y bajo qué condiciones. A diferencia de la gestión de recursos, que trata del equipo interno, aquí se trata solo lo que viene de fuera."
     }
    ]
   },
   {
    "titulo": "2. Análisis de hacer o comprar",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Componente",
       "Hacer",
       "Obtener de un tercero",
       "Decisión"
      ],
      "anchos": [
       18,
       29,
       33,
       20
      ],
      "filas": [
       [
        "Sistema SIA-T: integración, modelo, alertas y tablero",
        "Desarrollo por el equipo con herramientas de código abierto. Costo valorizado, sin desembolso.",
        "Módulos adicionales de Cubicol o una herramienta comercial de inteligencia de negocios: tienen costo de licencia y no incluyen el modelo predictivo.",
        {
         "x": "Hacer",
         "fill": "verde",
         "bold": true
        }
       ],
       [
        "Alojamiento del tablero web",
        "Servidor en el colegio administrado por su personal.",
        "Servicio gestionado (Vercel): despliegue automático desde el repositorio, sin administrar servidores.",
        {
         "x": "Servicio de un tercero",
         "fill": "azul",
         "bold": true
        }
       ],
       [
        "Base de datos",
        "PostgreSQL instalado en un equipo del colegio.",
        "PostgreSQL gestionado (Supabase): copias de seguridad, control de acceso por fila y autenticación incluidos.",
        {
         "x": "Servicio de un tercero",
         "fill": "azul",
         "bold": true
        }
       ],
       [
        "Entrenamiento y cálculo semanal del riesgo",
        "Tarea programada en un equipo del colegio.",
        "Ejecución programada en la nube (GitHub Actions) con el mismo código en Python.",
        {
         "x": "Servicio de un tercero",
         "fill": "azul",
         "bold": true
        }
       ],
       [
        "Envío de alertas por correo",
        "Servidor de correo propio; no existe.",
        "Servicio de envío de correo, por seleccionar en el Sprint 4.",
        {
         "x": "Servicio de un tercero",
         "fill": "azul",
         "bold": true
        }
       ],
       [
        "Datos académicos de origen",
        "Registro digital nuevo de asistencia e incidencias.",
        "Exportaciones de Cubicol, que el colegio ya paga.",
        {
         "x": "Mixto",
         "fill": "amarillo",
         "bold": true
        }
       ],
       [
        "Conectividad",
        "—",
        "Internet de fibra óptica del colegio (WIN), ya contratado.",
        {
         "x": "Usar lo existente",
         "fill": "gris",
         "bold": true
        }
       ]
      ],
      "titulo": "Hacer o comprar, por componente",
      "compacta": true
     }
    ]
   },
   {
    "titulo": "3. Decisiones de internalización o externalización",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Qué",
       "Quién lo provee",
       "Tipo de acuerdo",
       "Costo en el proyecto"
      ],
      "anchos": [
       30,
       20,
       30,
       20
      ],
      "filas": [
       [
        "Desarrollo y gestión del proyecto",
        "Equipo del proyecto",
        "Interno",
        "Valorizado en la línea base de costos"
       ],
       [
        "Alojamiento web",
        "Vercel",
        "Condiciones estándar del servicio; plan gratuito",
        "S/ 0"
       ],
       [
        "Base de datos y autenticación",
        "Supabase",
        "Condiciones estándar del servicio; plan gratuito",
        "S/ 0"
       ],
       [
        "Repositorio y tareas programadas",
        "GitHub",
        "Condiciones estándar del servicio; plan gratuito",
        "S/ 0"
       ],
       [
        "Correo de alertas",
        "Por seleccionar",
        "Condiciones estándar del servicio; plan gratuito",
        "S/ 0 previsto"
       ],
       [
        "Plataforma de notas",
        "Cubicol",
        "Contrato vigente del colegio",
        "Sin costo para el proyecto"
       ]
      ],
      "titulo": "Qué se hace con el equipo y qué con terceros"
     }
    ]
   },
   {
    "titulo": "4. Por qué cambió el alojamiento",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Criterio",
       "Servidor en el colegio (versión anterior)",
       "Servicios gestionados en la nube (versión vigente)"
      ],
      "anchos": [
       20,
       38,
       42
      ],
      "filas": [
       [
        "Costo durante el proyecto",
        "Requiere un equipo encendido de forma permanente y su mantenimiento.",
        "Planes gratuitos mientras el uso esté dentro de sus límites."
       ],
       [
        "Operación",
        "Alguien del colegio administra el servidor, las copias y las actualizaciones.",
        "El proveedor administra la infraestructura; el colegio solo gestiona usuarios."
       ],
       [
        "Disponibilidad",
        "Depende de la energía, del equipo y de la red del colegio.",
        "Depende del proveedor y de la conexión a internet del colegio."
       ],
       [
        "Custodia de los datos",
        {
         "x": "Los datos no salen del colegio.",
         "fill": "verde"
        },
        {
         "x": "Los datos se alojan con un tercero, fuera del país: exige consentimiento informado y medidas adicionales.",
         "fill": "amarillo"
        }
       ],
       [
        "Coherencia con los requisitos",
        {
         "x": "Tres requisitos no funcionales y la matriz de trazabilidad ya citaban Vercel y Supabase.",
         "fill": "amarillo"
        },
        {
         "x": "Coherente.",
         "fill": "verde"
        }
       ]
      ],
      "titulo": "Comparación de las dos opciones de alojamiento"
     },
     {
      "t": "p",
      "x": "La evaluación de la fase de formulación calificó mejor al servidor local por costo y por custodia de los datos. La reevaluación mantiene la ventaja del servidor local en custodia, pero concluye que el colegio difícilmente puede sostener su operación: cuenta con una sola persona de soporte y no se ha confirmado que disponga de un servidor dedicado. La desventaja de la nube se atiende con las medidas de la sección 7. El cambio quedó registrado como SC-03."
     }
    ]
   },
   {
    "titulo": "5. Criterios de selección de proveedores",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Criterio",
       "Peso",
       "Cómo se evalúa"
      ],
      "anchos": [
       34,
       10,
       56
      ],
      "filas": [
       [
        "Costo para el colegio, durante y después del proyecto",
        {
         "x": "30 %",
         "align": "center"
        },
        "Plan gratuito suficiente para 200 estudiantes; precio del primer plan de pago."
       ],
       [
        "Protección de datos",
        {
         "x": "25 %",
         "align": "center"
        },
        "Cifrado, control de acceso, ubicación de los servidores y condiciones de tratamiento de datos."
       ],
       [
        "Facilidad de operación",
        {
         "x": "20 %",
         "align": "center"
        },
        "Que el encargado de TI del colegio pueda administrarlo después de la transferencia."
       ],
       [
        "Disponibilidad y soporte",
        {
         "x": "15 %",
         "align": "center"
        },
        "Historial del servicio y calidad de la documentación."
       ],
       [
        "Portabilidad",
        {
         "x": "10 %",
         "align": "center"
        },
        "Que los datos y el código puedan llevarse a otro proveedor sin reescribir el sistema."
       ]
      ],
      "titulo": "Criterios y pesos"
     },
     {
      "t": "p",
      "x": "Con estos criterios se eligieron Vercel, Supabase y GitHub: los tres tienen plan gratuito, usan tecnologías estándar (Next.js, PostgreSQL y Python) y permiten salir sin pérdida de datos. El servicio de correo se evaluará con la misma tabla en el Sprint 4."
     }
    ]
   },
   {
    "titulo": "6. Tipo de acuerdo y condiciones",
    "apaisada": false,
    "bloques": [
     {
      "t": "ul",
      "items": [
       "No hay contratos negociados: se aceptan las condiciones estándar de cada servicio. Las cuentas se crean a nombre del proyecto y se transfieren al colegio en el cierre.",
       "Los planes gratuitos tienen límites de uso y sus condiciones pueden cambiar. El plan gratuito de alojamiento web está previsto para uso personal y no comercial; si el colegio adopta el sistema de forma permanente debe pasar a un plan de pago. Las condiciones vigentes se verifican antes del piloto.",
       "Ningún integrante del equipo puede comprometer al colegio con un proveedor; esa decisión corresponde a la patrocinadora."
      ]
     }
    ]
   },
   {
    "titulo": "7. Protección de datos personales en servicios de terceros",
    "apaisada": false,
    "bloques": [
     {
      "t": "ul",
      "items": [
       "Antes de cargar datos reales, la Dirección informa a los apoderados y recaba su consentimiento (supuesto S-06).",
       "En la nube se guarda lo mínimo necesario. En el Sprint 1 el equipo evaluará trabajar con códigos en lugar de nombres y mantener la correspondencia en el colegio.",
       "Acceso por rol y por fila en la base de datos; las contraseñas y las claves quedan fuera del repositorio.",
       "Se elige la región de servidores más cercana que ofrezca el proveedor y se documenta que los datos se alojan fuera del Perú.",
       "El repositorio y el blog, que son públicos, nunca contienen datos personales.",
       "Al cierre se eliminan los datos de prueba y se entrega al colegio la administración de las cuentas."
      ]
     },
     {
      "t": "nota",
      "tipo": "aviso",
      "x": "Estas medidas no reemplazan una revisión legal. La Ley N.° 29733 y su reglamento vigente deben revisarse con la Dirección antes del piloto."
     }
    ]
   },
   {
    "titulo": "8. Costos previstos y plan de salida",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Etapa",
       "Costo de los servicios",
       "Condición"
      ],
      "anchos": [
       26,
       38,
       36
      ],
      "filas": [
       [
        "Proyecto y piloto, hasta abril de 2027",
        "S/ 0",
        "Planes gratuitos; el consumo se revisa en cada sprint."
       ],
       [
        "Operación permanente",
        "Un plan de pago de alojamiento y uno de base de datos; del orden de 20 a 25 dólares mensuales cada uno, según las tarifas publicadas por los proveedores.",
        "Verificar las tarifas al momento de contratar. Es decisión de la patrocinadora."
       ],
       [
        "Salida",
        "Sin costo de licencias",
        "La base se exporta en formato SQL estándar y el código está en GitHub: el sistema puede instalarse con otro proveedor o en un servidor propio."
       ]
      ],
      "titulo": "Costos por etapa"
     }
    ]
   },
   {
    "titulo": "9. Seguimiento de los proveedores",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Jadira Vasquez, responsable del despliegue, revisa en cada sprint el consumo frente a los límites de cada servicio y cualquier cambio en sus condiciones, y lo informa en la revisión del sprint. Cambiar de proveedor requiere una solicitud de cambio."
     }
    ]
   }
  ]
 },
 {
  "id": "GOB-06",
  "titulo": "Registro de incidentes",
  "dominio": "Gobernanza",
  "area": "Ejecución",
  "proceso": "Gestionar la ejecución del proyecto",
  "salida": "Registro de incidentes",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Lleva la cuenta de los problemas que ya ocurrieron y que afectan al proyecto: quién los planteó, quién los atiende, para cuándo y cómo se resolvieron.",
  "carpeta": "01 - Gobernanza/1.4 Ejecución",
  "pdf": "/documentos/GOB-06-registro-de-incidentes.pdf",
  "docx": "/documentos/GOB-06-registro-de-incidentes.docx",
  "secciones": [
   {
    "titulo": "1. Uso del registro",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Un incidente es una situación presente que afecta al proyecto y que necesita una acción; se diferencia de un riesgo en que ya ocurrió. Cada incidente registra su tipo, quién lo planteó y cuándo, su descripción, la prioridad, la persona asignada, la fecha límite, el estado y la solución. El registro se revisa en la reunión diaria y al cierre de cada sprint; un incidente de prioridad alta sin avance en dos días hábiles se eleva al Product Owner."
     },
     {
      "t": "p",
      "x": "El proyecto inicia el 12/10/2026. Los incidentes de esta primera versión provienen de la revisión de calidad del material heredado (GOB-07) y de lo levantado en la entrevista y en la encuesta."
     }
    ]
   },
   {
    "titulo": "2. Incidentes registrados",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Tipo",
       "Descripción",
       "Planteado por",
       "Prioridad",
       "Asignado a",
       "Fecha límite",
       "Estado",
       "Solución o acción"
      ],
      "anchos": [
       5,
       9,
       27,
       10,
       7,
       9,
       8,
       7,
       18
      ],
      "filas": [
       [
        "IN-01",
        "Datos",
        "No está confirmado el acceso a los datos de Cubicol: no se ha comprobado que exista una API y las exportaciones dependen de la gestora de la plataforma.",
        "Equipo, 10/10/2026",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "Jadira Vasquez",
        "23/10/2026",
        {
         "x": "Abierto",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Segunda entrevista y acuerdo sobre las exportaciones (Sprint 1)."
       ],
       [
        "IN-02",
        "Datos",
        "La asistencia y las incidencias solo existen en papel y en mensajes; no hay datos digitales para el modelo.",
        "Entrevista, 24/04/2026",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "Jadira Vasquez",
        "04/12/2026",
        {
         "x": "Abierto",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Definir con la Jefa de Normas un registro digital simple (Sprint 2)."
       ],
       [
        "IN-03",
        "Producto",
        "El prototipo calcula el riesgo con reglas escritas a mano y muestra métricas que no provienen de un entrenamiento real.",
        "Revisión de calidad, 10/10/2026",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "Helber Perez",
        "30/12/2026",
        {
         "x": "Abierto",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Rotulado como demostración y métricas por defecto retiradas el 10/10/2026 (ALC-05). Falta reemplazarlo por el modelo validado (Sprint 3)."
       ],
       [
        "IN-04",
        "Datos personales",
        "Los archivos de trabajo contienen nombres y notas reales de estudiantes: hojas de cálculo, fotos de cuadernos y datos de carga de la base.",
        "Revisión de calidad, 10/10/2026",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "Helber Perez",
        "23/10/2026",
        {
         "x": "Abierto",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Retirarlos de las carpetas compartidas, reemplazar nombres por códigos y no subirlos al repositorio."
       ],
       [
        "IN-05",
        "Interesados",
        "La segunda entrevista, al soporte técnico y a la gestora de Cubicol, no se realizó; la guía está lista desde mayo.",
        "Equipo, 10/10/2026",
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "Jadira Vasquez",
        "23/10/2026",
        {
         "x": "Abierto",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Programarla en la semana 2 del proyecto."
       ],
       [
        "IN-06",
        "Calidad",
        "Los documentos heredados discrepan en fechas, número de actividades, niveles de riesgo y guía de referencia.",
        "Revisión de calidad, 10/10/2026",
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "Carlos Curo",
        "10/10/2026",
        {
         "x": "Cerrado",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Cambios SC-02, SC-04, SC-06 y SC-07 aprobados; documentos nuevos emitidos."
       ],
       [
        "IN-07",
        "Comunicación",
        "No existe correo institucional para los docentes; las alertas se diseñaron para ese canal.",
        "Entrevista, 24/04/2026",
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "Jadira Vasquez",
        "06/11/2026",
        {
         "x": "Abierto",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Solicitud SC-09 en evaluación: envío a correos personales autorizados."
       ],
       [
        "IN-08",
        "Gestión",
        "Varios enlaces del blog apuntan a documentos guardados en la cuenta de un integrante que ya no está en el equipo.",
        "Equipo, 10/10/2026",
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "Carlos Curo",
        "06/11/2026",
        {
         "x": "En curso",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Los documentos nuevos se publican en el propio blog; los anteriores se migran al trabajar cada dominio."
       ],
       [
        "IN-09",
        "Cronograma",
        "El calendario anterior ubicaba el piloto con docentes en vacaciones escolares.",
        "Equipo, 10/10/2026",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "Jhostin Galarza",
        "10/10/2026",
        {
         "x": "Cerrado",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Cambio SC-02 aprobado: receso en febrero y piloto en marzo."
       ],
       [
        "IN-10",
        "Alcance",
        "En la entrevista se ofreció elaborar guías para que los padres ingresen a Cubicol; ese trabajo no figura en ninguna línea base.",
        "Revisión de calidad, 10/10/2026",
        {
         "x": "Baja",
         "fill": "gris",
         "align": "center"
        },
        "Jhostin Galarza",
        "06/11/2026",
        {
         "x": "Abierto",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Aclararlo con la Dirección: incluirlo mediante una solicitud de cambio o descartarlo."
       ],
       [
        "IN-11",
        "Calidad",
        "El archivo del formato de reporte de incidencia escolar está vacío; solo existe la foto del formato.",
        "Revisión de calidad, 10/10/2026",
        {
         "x": "Baja",
         "fill": "gris",
         "align": "center"
        },
        "Carlos Curo",
        "06/11/2026",
        {
         "x": "Abierto",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Volver a escanearlo en la próxima visita al colegio."
       ]
      ],
      "titulo": "Registro de incidentes al 10/10/2026",
      "compacta": true
     }
    ]
   },
   {
    "titulo": "3. Resumen",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Estado",
       "Cantidad",
       "Prioridad",
       "Cantidad"
      ],
      "anchos": [
       30,
       20,
       30,
       20
      ],
      "filas": [
       [
        "Abierto",
        "8",
        "Alta",
        "5"
       ],
       [
        "En curso",
        "1",
        "Media",
        "4"
       ],
       [
        "Cerrado",
        "2",
        "Baja",
        "2"
       ],
       [
        {
         "x": "Total",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "11",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "Total",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "11",
         "fill": "gris",
         "bold": true
        }
       ]
      ],
      "titulo": "Incidentes por estado y por prioridad"
     }
    ]
   }
  ]
 },
 {
  "id": "GOB-07",
  "titulo": "Informe de calidad N.º 1",
  "dominio": "Gobernanza",
  "area": "Ejecución",
  "proceso": "Gestionar el aseguramiento de la calidad",
  "salida": "Informe de calidad y solicitudes de cambio",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Revisión de aseguramiento de la calidad del material heredado de la fase de formulación. Aplica una lista de verificación, registra los hallazgos, analiza sus causas y deriva las acciones.",
  "carpeta": "01 - Gobernanza/1.5 Calidad",
  "pdf": "/documentos/GOB-07-informe-de-calidad-n-1.pdf",
  "docx": "/documentos/GOB-07-informe-de-calidad-n-1.docx",
  "secciones": [
   {
    "titulo": "1. Objetivo y alcance de la revisión",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Antes de emitir los documentos del nuevo periodo, el equipo revisó el material heredado de la fase de formulación para comprobar que los procesos del proyecto se están llevando de forma coherente con lo que esperan los interesados. La revisión se hizo el 10/10/2026 y cubrió los documentos de la carpeta del proyecto, el blog anterior y el código del prototipo."
     },
     {
      "t": "tabla",
      "cols": [
       "Herramienta",
       "Cómo se aplicó"
      ],
      "anchos": [
       30,
       70
      ],
      "filas": [
       [
        "Lista de verificación",
        "Doce criterios aplicados al conjunto de documentos y al prototipo."
       ],
       [
        "Análisis de documentos",
        "Lectura cruzada de los documentos para encontrar cifras y afirmaciones que no coinciden."
       ],
       [
        "Diagrama de Pareto",
        "Agrupación de los hallazgos por categoría para ver dónde se concentran."
       ],
       [
        "Análisis de causa raíz",
        "Identificación de las causas comunes que explican varios hallazgos."
       ]
      ],
      "titulo": "Herramientas de aseguramiento utilizadas"
     }
    ]
   },
   {
    "titulo": "2. Lista de verificación",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "N.º",
       "Criterio",
       "Resultado",
       "Observación"
      ],
      "anchos": [
       6,
       44,
       16,
       34
      ],
      "filas": [
       [
        "1",
        "Los datos del proyecto (equipo, fechas y nombres) coinciden en todos los documentos.",
        {
         "x": "No cumple",
         "fill": "rojo",
         "bold": true,
         "align": "center"
        },
        "Tres calendarios y dos equipos distintos."
       ],
       [
        "2",
        "Las cifras se repiten sin variación (actividades, niveles de riesgo, paquetes de la EDT).",
        {
         "x": "No cumple",
         "fill": "rojo",
         "bold": true,
         "align": "center"
        },
        "40 y 44 actividades; 3 y 4 niveles; 18 y 20 paquetes."
       ],
       [
        "3",
        "Cada afirmación tiene una fuente verificable: entrevista, encuesta o registro.",
        {
         "x": "Cumple en parte",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "El uso de Cubicol por los padres aparece con tres cifras."
       ],
       [
        "4",
        "Los cálculos son reproducibles.",
        {
         "x": "Cumple en parte",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "PERT y costos, sí; la validez del instrumento, no."
       ],
       [
        "5",
        "Lo simulado está rotulado como simulado.",
        {
         "x": "No cumple",
         "fill": "rojo",
         "bold": true,
         "align": "center"
        },
        "Valor ganado del cronograma y métricas del prototipo."
       ],
       [
        "6",
        "Los documentos citados existen.",
        {
         "x": "Cumple en parte",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Faltaba el acta de constitución."
       ],
       [
        "7",
        "No hay datos personales en material compartido o público.",
        {
         "x": "No cumple",
         "fill": "rojo",
         "bold": true,
         "align": "center"
        },
        "Nombres y notas de estudiantes; correos de docentes."
       ],
       [
        "8",
        "El modelo se evalúa con datos que no vio y contra un resultado real.",
        {
         "x": "No cumple",
         "fill": "rojo",
         "bold": true,
         "align": "center"
        },
        "La etiqueta se deriva de las propias variables."
       ],
       [
        "9",
        "La terminología corresponde a la guía de referencia vigente.",
        {
         "x": "No cumple",
         "fill": "rojo",
         "bold": true,
         "align": "center"
        },
        "Sexta edición del PMBOK en lugar de la octava."
       ],
       [
        "10",
        "Los requisitos tienen criterio de aceptación y casos de prueba.",
        {
         "x": "Cumple",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "20 requisitos y 80 casos de prueba."
       ],
       [
        "11",
        "La EDT cubre todo el alcance y tiene diccionario.",
        {
         "x": "Cumple en parte",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Seis componentes; el número de paquetes varía entre documentos."
       ],
       [
        "12",
        "El cronograma respeta el calendario del cliente.",
        {
         "x": "No cumple",
         "fill": "rojo",
         "bold": true,
         "align": "center"
        },
        "El piloto caía en vacaciones escolares."
       ]
      ],
      "titulo": "Lista de verificación de la documentación y del prototipo"
     },
     {
      "t": "p",
      "x": "Resultado: 1 criterio cumple, 4 cumplen en parte y 7 no cumplen."
     }
    ]
   },
   {
    "titulo": "3. Hallazgos",
    "apaisada": true,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Categoría",
       "Hallazgo",
       "Evidencia",
       "Acción"
      ],
      "anchos": [
       5,
       14,
       36,
       27,
       18
      ],
      "filas": [
       [
        "H-01",
        "Coherencia entre documentos",
        "El cronograma tiene tres calendarios distintos.",
        "Octubre de 2026 a abril de 2027 y agosto de 2026 a enero de 2027 en el documento; marzo a agosto de 2026 en MS Project y en costos.",
        "SC-02"
       ],
       [
        "H-02",
        "Coherencia entre documentos",
        "El número de actividades figura como 40 en el texto y como 44 más la reunión diaria en las tablas.",
        "Documento del cronograma y modelo de costos.",
        "SC-06"
       ],
       [
        "H-03",
        "Coherencia entre documentos",
        "Los niveles de riesgo son tres en los requisitos y cuatro en la base de datos, el modelo y el prototipo.",
        "Requisito REQ-03 y esquema de la base.",
        "SC-04"
       ],
       [
        "H-04",
        "Coherencia entre documentos",
        "Los roles de usuario son cuatro o cinco en los requisitos y tres en la base de datos.",
        "Requisito REQ-11 y esquema de la base.",
        "SC-04"
       ],
       [
        "H-05",
        "Coherencia entre documentos",
        "El alcance excluía la nube pública, pero tres requisitos y la matriz de trazabilidad citan Vercel y Supabase.",
        "Declaración del alcance y requisitos no funcionales.",
        "SC-03"
       ],
       [
        "H-06",
        "Coherencia entre documentos",
        "Los documentos citan la sexta edición del PMBOK; el curso trabaja con la octava.",
        "Carátulas y blog.",
        "SC-07"
       ],
       [
        "H-07",
        "Coherencia entre documentos",
        "La EDT tiene 18 paquetes en la declaración del alcance y 20 en el diccionario.",
        "Declaración del alcance y diccionario de la EDT.",
        "SC-10"
       ],
       [
        "H-08",
        "Coherencia entre documentos",
        "Los documentos y el blog mezclaban integrantes del equipo anterior y del actual.",
        "Diccionario de la EDT del blog.",
        "SC-01"
       ],
       [
        "H-09",
        "Coherencia entre documentos",
        "El capítulo de requisitos del blog mostraba una lista distinta de la documentada: incluía asistencia con código QR, avisos por WhatsApp y alojamiento local.",
        "Blog anterior y Documentación de requisitos V3.",
        "Corregido: el blog toma los requisitos de la línea base (ALC-02)."
       ],
       [
        "H-10",
        "Exactitud de datos y cálculos",
        "La validez del instrumento figura como 0.90 con una fórmula para cinco jueces; opinaron dos, con 88 de 100 puntos.",
        "Documento de validez del instrumento.",
        "SC-05"
       ],
       [
        "H-11",
        "Exactitud de datos y cálculos",
        "El uso de Cubicol por los padres aparece con tres cifras distintas.",
        "«40 % no accede», «40 % accede» y «60 % accede», según el documento.",
        "Se usa la transcripción: alrededor del 40 % ingresa."
       ],
       [
        "H-12",
        "Exactitud de datos y cálculos",
        "Los documentos fechan la encuesta en abril; las respuestas son del 15/05/2026.",
        "Hoja de respuestas del formulario.",
        "Corregido en los documentos nuevos."
       ],
       [
        "H-13",
        "Exactitud de datos y cálculos",
        "La antigüedad del colegio figura como 24 y como 25 años.",
        "Transcripción de la entrevista y cuestionario.",
        "Confirmar con la Dirección."
       ],
       [
        "H-14",
        "Exactitud de datos y cálculos",
        "La encuesta tiene 6 respuestas y al menos un encuestado integra el equipo.",
        "Hoja de respuestas del formulario.",
        "Se declara como limitación; validación con tutores en el Sprint 1."
       ],
       [
        "H-15",
        "Exactitud de datos y cálculos",
        "El usuario tipo del Design Thinking tiene de 25 a 40 estudiantes por aula y correo institucional; el colegio tiene aulas de 4 a 10 estudiantes y correos personales.",
        "Ficha del usuario tipo y registros de aula.",
        "Ajustar al trabajar el dominio de Alcance."
       ],
       [
        "H-16",
        "Exactitud de datos y cálculos",
        "La maqueta del tablero muestra 312 estudiantes; el colegio tiene unos 200.",
        "Maqueta del prototipo.",
        "Ajustar la maqueta."
       ],
       [
        "H-17",
        "Exactitud de datos y cálculos",
        "Las desviaciones estándar por sprint y el número de actividades críticas del cronograma no coinciden con su tabla de actividades.",
        "Tabla PERT del cronograma v2: 26 actividades marcadas como críticas y 18 en el resumen.",
        "SC-06: recalculado en CRO-01."
       ],
       [
        "H-18",
        "Evidencia y trazabilidad",
        "El control con valor ganado es un ejercicio simulado, pero su conclusión habla del proyecto como terminado.",
        "Documento del cronograma v2.",
        "Rotulado como simulación en CRO-01."
       ],
       [
        "H-19",
        "Evidencia y trazabilidad",
        "El prototipo muestra métricas del modelo que están escritas en el código.",
        "Servicio de datos del prototipo.",
        "IN-03"
       ],
       [
        "H-20",
        "Evidencia y trazabilidad",
        "El área de TI figura como entrevistada; solo se entrevistó a la directora.",
        "Transcripción de la entrevista.",
        "Corregido en INT-01 e INT-04; IN-05."
       ],
       [
        "H-21",
        "Evidencia y trazabilidad",
        "Se citan documentos que no existían: el acta de constitución y el lienzo del modelo de negocio como documento.",
        "Documentación de requisitos.",
        "Acta emitida (GOB-02)."
       ],
       [
        "H-22",
        "Evidencia y trazabilidad",
        "El archivo del formato de incidencia escolar está vacío.",
        "Carpeta de la semana 11.",
        "IN-11"
       ],
       [
        "H-23",
        "Datos personales",
        "Hay nombres y notas reales de estudiantes en hojas de cálculo, fotos de cuadernos y datos de carga.",
        "Material del prototipo.",
        "IN-04"
       ],
       [
        "H-24",
        "Datos personales",
        "La hoja de respuestas de la encuesta contiene nombres y correos de docentes.",
        "Hoja de respuestas del formulario.",
        "Retirar esas columnas antes de compartirla."
       ],
       [
        "H-25",
        "Datos personales",
        "El blog publica fotos y un video con rostros de docentes y de la directora.",
        "Capítulos de introducción y de encuesta.",
        "Pedir autorización o recortar las imágenes."
       ],
       [
        "H-26",
        "Datos personales",
        "El modelo usa el estado de pago de pensiones como variable.",
        "Cuaderno de entrenamiento.",
        "SC-08: retirarla."
       ],
       [
        "H-27",
        "Datos personales",
        "El paquete del prototipo incluye un archivo de configuración con claves.",
        "Archivo comprimido del prototipo.",
        "No publicarlo y cambiar las claves."
       ],
       [
        "H-28",
        "Modelo de Machine Learning",
        "La etiqueta de riesgo es exactamente «promedio de las cuatro notas menor de 11», y esas notas son las variables de entrada.",
        "Verificado en las 250 filas del conjunto de datos.",
        "SC-08"
       ],
       [
        "H-29",
        "Modelo de Machine Learning",
        "El conjunto de entrenamiento es sintético; las inasistencias y las pensiones son simuladas.",
        "Conjunto de datos y datos de carga.",
        "SC-08"
       ],
       [
        "H-30",
        "Modelo de Machine Learning",
        "El archivo de datos separa columnas con punto y coma y el cuaderno de entrenamiento lo lee con coma.",
        "Archivo de datos y cuaderno.",
        "Corregir al rehacer el entrenamiento."
       ],
       [
        "H-31",
        "Modelo de Machine Learning",
        "Los cortes de los niveles de riesgo (0.25, 0.50 y 0.75) son arbitrarios.",
        "Cuaderno de entrenamiento.",
        "SC-08"
       ]
      ],
      "titulo": "Hallazgos de la revisión (31)",
      "compacta": true
     }
    ]
   },
   {
    "titulo": "4. Análisis de los hallazgos",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Categoría",
       "Hallazgos",
       "Porcentaje",
       "Acumulado"
      ],
      "anchos": [
       46,
       16,
       19,
       19
      ],
      "filas": [
       [
        "Coherencia entre documentos",
        "9",
        "29.0 %",
        "29.0 %"
       ],
       [
        "Exactitud de datos y cálculos",
        "8",
        "25.8 %",
        "54.8 %"
       ],
       [
        "Evidencia y trazabilidad",
        "5",
        "16.1 %",
        "71.0 %"
       ],
       [
        "Datos personales",
        "5",
        "16.1 %",
        "87.1 %"
       ],
       [
        "Modelo de Machine Learning",
        "4",
        "12.9 %",
        "100.0 %"
       ]
      ],
      "titulo": "Pareto de hallazgos por categoría",
      "fuente": "Total: 31 hallazgos."
     },
     {
      "t": "p",
      "x": "Las dos primeras categorías reúnen más de la mitad de los hallazgos y tienen el mismo origen: los datos comunes del proyecto se escribieron por separado en cada documento."
     },
     {
      "t": "tabla",
      "cols": [
       "Causa raíz",
       "Hallazgos que explica",
       "Acción de mejora"
      ],
      "anchos": [
       40,
       22,
       38
      ],
      "filas": [
       [
        "No había una fuente única de datos del proyecto: cada documento se escribió por separado.",
        "H-01 a H-09; H-11 a H-13",
        "Ficha única del proyecto y documentos generados desde un mismo contenido."
       ],
       [
        "Las entregas se armaron contra el plazo del curso, sin una revisión cruzada final.",
        "H-10, H-15 a H-18, H-20 y H-21",
        "Lista de verificación antes de cada entrega (ALC-03)."
       ],
       [
        "El prototipo se construyó para la demostración antes de contar con datos reales.",
        "H-19; H-28 a H-31",
        "Plan de validación con datos reales (SC-08) y rótulo de demostración."
       ],
       [
        "No se definieron reglas para los datos personales al inicio.",
        "H-23 a H-27",
        "Reglas de datos en GOB-05 y en el plan de comunicaciones (INT-03)."
       ],
       [
        "El cambio de equipo y de calendario no pasó por control de cambios.",
        "H-01 y H-08",
        "Registro de cambios (GOB-10)."
       ]
      ],
      "titulo": "Análisis de causa raíz"
     }
    ]
   },
   {
    "titulo": "5. Acciones derivadas",
    "apaisada": false,
    "bloques": [
     {
      "t": "ul",
      "items": [
       "Se registraron 10 solicitudes de cambio (GOB-10): 7 aprobadas por el equipo y 3 en evaluación.",
       "Se registraron 11 incidentes (GOB-06), de los cuales 2 ya están cerrados.",
       "Los hallazgos de coherencia quedan atendidos con los cambios SC-01 a SC-07. Los del modelo dependen de SC-08, en evaluación. Los de datos personales tienen abierto el incidente IN-04."
      ]
     }
    ]
   },
   {
    "titulo": "6. Conclusión",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El material heredado es sólido en requisitos, trazabilidad y estimación, pero no era coherente entre documentos ni distinguía lo real de lo simulado. Con los documentos de este periodo esas diferencias quedan corregidas o registradas. La próxima revisión de calidad se hará al cierre del Sprint 1 y verificará el avance de los incidentes abiertos."
     }
    ]
   }
  ]
 },
 {
  "id": "GOB-08",
  "titulo": "Registro de lecciones aprendidas",
  "dominio": "Gobernanza",
  "area": "Ejecución",
  "proceso": "Gestionar el conocimiento del proyecto",
  "salida": "Registro de lecciones aprendidas",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Recoge lo que el equipo aprendió en la fase de formulación para aplicarlo en esta fase: la situación, su impacto, la recomendación y la acción tomada.",
  "carpeta": "01 - Gobernanza/1.6 Conocimiento",
  "pdf": "/documentos/GOB-08-registro-de-lecciones-aprendidas.pdf",
  "docx": "/documentos/GOB-08-registro-de-lecciones-aprendidas.docx",
  "secciones": [
   {
    "titulo": "1. Cómo se gestiona el conocimiento",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El conocimiento explícito del proyecto se guarda en el repositorio y en la carpeta «Documentación»; el tácito se comparte en la reunión diaria y en las retrospectivas. Las lecciones se registran al cierre de cada sprint y cuando ocurre algo que conviene no repetir. Al cerrar el proyecto, el registro se entrega al colegio junto con los manuales."
     },
     {
      "t": "p",
      "x": "Esta primera versión reúne las lecciones de la fase de formulación; sirvió para transferir el conocimiento a los dos integrantes que se incorporaron al equipo."
     }
    ]
   },
   {
    "titulo": "2. Lecciones registradas",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Categoría",
       "Situación",
       "Impacto",
       "Lección o recomendación",
       "Acción tomada"
      ],
      "anchos": [
       6,
       11,
       30,
       7,
       26,
       20
      ],
      "filas": [
       [
        "LA-01",
        "Documentación",
        "Cada documento se escribió por separado y las cifras comunes terminaron distintas (fechas, actividades, niveles de riesgo).",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        "Mantener una ficha única del proyecto y generar los documentos desde un mismo contenido.",
        "Aplicada: fuente única en el repositorio."
       ],
       [
        "LA-02",
        "Documentación",
        "El control con valor ganado, que era un ejercicio, quedó redactado como si fuera el resultado real.",
        {
         "x": "Medio",
         "fill": "amarillo",
         "align": "center"
        },
        "Rotular siempre lo simulado y separarlo de los registros reales.",
        "Aplicada en CRO-01 y GOB-10."
       ],
       [
        "LA-03",
        "Levantamiento",
        "La encuesta se aplicó a 6 de 16 docentes y se fechó mal en los documentos.",
        {
         "x": "Medio",
         "fill": "amarillo",
         "align": "center"
        },
        "Registrar la fecha y el tamaño real de la muestra en el momento, y declarar sus límites.",
        "Aplicada en GOB-01 e INT-04."
       ],
       [
        "LA-04",
        "Levantamiento",
        "Una cifra de la entrevista (uso de Cubicol por los padres) se citó de tres formas.",
        {
         "x": "Medio",
         "fill": "amarillo",
         "align": "center"
        },
        "Citar desde la transcripción y no desde la memoria.",
        "Aplicada: una sola redacción en todos los documentos."
       ],
       [
        "LA-05",
        "Datos",
        "Se fijó el criterio de precisión del modelo antes de confirmar qué datos entregaría el colegio.",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        "Confirmar el acceso a los datos antes de comprometer criterios de aceptación que dependen de ellos.",
        "Supuestos S-01 a S-03 con responsable y fecha."
       ],
       [
        "LA-06",
        "Datos",
        "El modelo se entrenó con datos sintéticos cuya etiqueta salía de las propias variables.",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        "Validar un modelo solo contra un resultado futuro real y compararlo con una regla simple.",
        "SC-08 en evaluación."
       ],
       [
        "LA-07",
        "Datos personales",
        "Circularon archivos con nombres y notas de estudiantes entre carpetas de trabajo.",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        "Definir desde el primer día qué datos pueden salir del colegio y en qué forma.",
        "Restricción R-06 y reglas del plan de comunicaciones."
       ],
       [
        "LA-08",
        "Calendario",
        "El cronograma se armó sin mirar el calendario escolar y el piloto caía en vacaciones.",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        "Planificar las actividades con el cliente según su calendario, no solo según el del curso.",
        "Aplicada: receso en febrero y piloto en marzo."
       ],
       [
        "LA-09",
        "Interesados",
        "Pocos padres ingresan a Cubicol; el colegio se comunica con ellos por WhatsApp y por la agenda.",
        {
         "x": "Medio",
         "fill": "amarillo",
         "align": "center"
        },
        "Usar el canal que cada interesado realmente usa, no el que el sistema ofrece.",
        "Aplicada en el plan de comunicaciones."
       ],
       [
        "LA-10",
        "Equipo",
        "Al cambiar el equipo, parte de los documentos quedó en la cuenta personal de un integrante saliente.",
        {
         "x": "Medio",
         "fill": "amarillo",
         "align": "center"
        },
        "Guardar los entregables en un repositorio del proyecto y no en cuentas personales.",
        "Aplicada: repositorio y carpeta «Documentación»."
       ],
       [
        "LA-11",
        "Arquitectura",
        "Se eligió alojar el sistema en el colegio por un criterio teórico de custodia, sin verificar quién lo administraría.",
        {
         "x": "Medio",
         "fill": "amarillo",
         "align": "center"
        },
        "Evaluar las alternativas con la capacidad real de operación del cliente.",
        "Aplicada: reevaluación en GOB-05."
       ],
       [
        "LA-12",
        "Prototipo",
        "El prototipo ocultaba la falta de modelo con respuestas de respaldo y métricas por defecto.",
        {
         "x": "Medio",
         "fill": "amarillo",
         "align": "center"
        },
        "Un prototipo debe mostrar con claridad qué es real y qué es demostración.",
        "IN-03 abierto."
       ]
      ],
      "titulo": "Lecciones aprendidas de la fase de formulación (12)",
      "compacta": true
     }
    ]
   }
  ]
 },
 {
  "id": "GOB-09",
  "titulo": "Informe de desempeño N.º 1",
  "dominio": "Gobernanza",
  "area": "Monitoreo y control",
  "proceso": "Monitorear y controlar el desempeño del proyecto",
  "salida": "Informe de desempeño del trabajo",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Primer informe de estado. El proyecto todavía no inicia sus sprints, así que fija el punto de partida: qué está listo, qué falta y qué debe decidir la patrocinadora.",
  "carpeta": "01 - Gobernanza/1.7 Desempeño",
  "pdf": "/documentos/GOB-09-informe-de-desempeno-n-1.pdf",
  "docx": "/documentos/GOB-09-informe-de-desempeno-n-1.docx",
  "secciones": [
   {
    "titulo": "1. Datos del informe",
    "apaisada": false,
    "bloques": [
     {
      "t": "kv",
      "filas": [
       [
        "Informe",
        "N.º 1 — Estado de arranque"
       ],
       [
        "Periodo que cubre",
        "Preparación del inicio, hasta el 10/10/2026"
       ],
       [
        "Fecha de corte",
        "10/10/2026"
       ],
       [
        "Elaborado por",
        "Jhostin J. Galarza Camarena, director del proyecto"
       ],
       [
        "Dirigido a",
        "Patrocinadora, docente asesor y equipo del proyecto"
       ],
       [
        "Próximo informe",
        "Cierre del Sprint 1, 06/11/2026"
       ]
      ]
     }
    ]
   },
   {
    "titulo": "2. Resumen",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El proyecto inicia el 12/10/2026. A la fecha de corte no hay trabajo de sprints que medir, por lo que este informe no calcula índices de valor ganado: describe el estado de la preparación, los cambios aprobados y las decisiones que se necesitan de la patrocinadora."
     },
     {
      "t": "p",
      "x": "La planificación de gobernanza, interesados, alcance y cronograma está emitida (25 documentos). El asunto más serio es la calidad del producto: el prototipo heredado no tiene un modelo validado con datos reales."
     }
    ]
   },
   {
    "titulo": "3. Estado por dominio",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Dominio",
       "Estado",
       "Situación"
      ],
      "anchos": [
       20,
       14,
       66
      ],
      "filas": [
       [
        "Gobernanza",
        {
         "x": "Verde",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Acta de constitución emitida para firma; plan para la dirección, registros y control de cambios vigentes."
       ],
       [
        "Interesados",
        {
         "x": "Amarillo",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "17 interesados identificados; 3 están en el nivel de involucramiento deseado."
       ],
       [
        "Alcance",
        {
         "x": "Amarillo",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Enunciado del alcance v3 y planes emitidos. La EDT y su diccionario están por unificar (SC-10)."
       ],
       [
        "Cronograma",
        {
         "x": "Verde",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Línea base v3 aprobada por el equipo; el inicio se mantiene en la fecha prevista."
       ],
       [
        "Finanzas",
        {
         "x": "Amarillo",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Montos vigentes; falta distribuirlos con el calendario nuevo."
       ],
       [
        "Recursos",
        {
         "x": "Sin evaluar",
         "fill": "gris",
         "bold": true,
         "align": "center"
        },
        "Dominio aún no desarrollado."
       ],
       [
        "Riesgo",
        {
         "x": "Sin evaluar",
         "fill": "gris",
         "bold": true,
         "align": "center"
        },
        "Dominio aún no desarrollado; hay una lista de riesgos de alto nivel en GOB-01."
       ],
       [
        "Calidad del producto",
        {
         "x": "Rojo",
         "fill": "rojo",
         "bold": true,
         "align": "center"
        },
        "El prototipo calcula el riesgo con reglas y no con un modelo validado (IN-03)."
       ]
      ],
      "titulo": "Semáforo de estado al 10/10/2026"
     }
    ]
   },
   {
    "titulo": "4. Avance de los entregables de gestión",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Dominio",
       "Documentos emitidos"
      ],
      "anchos": [
       60,
       40
      ],
      "filas": [
       [
        "Transversal",
        "1"
       ],
       [
        "Gobernanza",
        "11"
       ],
       [
        "Interesados",
        "7"
       ],
       [
        "Alcance",
        "5"
       ],
       [
        "Cronograma",
        "1"
       ],
       [
        {
         "x": "Total",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "25",
         "fill": "gris",
         "bold": true
        }
       ]
      ],
      "titulo": "Documentos de gestión emitidos",
      "fuente": "Incluye este informe. La lista completa está en BASE-01."
     },
     {
      "t": "ul",
      "items": [
       "Blog del proyecto publicado en https://peruano-frances-gti.vercel.app y conectado al repositorio.",
       "Registro de cambios con 10 solicitudes e incidentes registrados: 11."
      ]
     }
    ]
   },
   {
    "titulo": "5. Hitos próximos",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Hito",
       "Fecha",
       "Condición para cumplirlo"
      ],
      "anchos": [
       34,
       16,
       50
      ],
      "filas": [
       [
        "Reunión de inicio y firma del acta",
        "12/10/2026",
        "Disponibilidad de la patrocinadora."
       ],
       [
        "Segunda entrevista y acuerdo de exportación de datos",
        "23/10/2026",
        "Disponibilidad de la gestora de Cubicol y del encargado de TI."
       ],
       [
        "Hito 1 · Revisión del Sprint 1",
        "06/11/2026",
        "Variables validadas con los docentes y arquitectura definida."
       ],
       [
        "Hito 2 · Revisión del Sprint 2",
        "04/12/2026",
        "Datos reales entregados por el colegio."
       ]
      ],
      "titulo": "Hitos de las próximas ocho semanas"
     }
    ]
   },
   {
    "titulo": "6. Decisiones que se solicitan a la patrocinadora",
    "apaisada": false,
    "bloques": [
     {
      "t": "ol",
      "items": [
       "Firmar el acta de constitución (GOB-02).",
       "Designar a la persona que actuará como Product Owner.",
       "Dar su conformidad a los cambios SC-02 (nuevo calendario) y SC-03 (alojamiento en la nube).",
       "Autorizar las exportaciones de notas de Cubicol y la segunda entrevista.",
       "Definir cómo se informará a los apoderados sobre el proyecto y el uso de los datos."
      ]
     }
    ]
   },
   {
    "titulo": "7. Cómo se medirá el desempeño desde el Sprint 1",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Medida",
       "Fórmula",
       "Lectura"
      ],
      "anchos": [
       30,
       30,
       40
      ],
      "filas": [
       [
        "Valor planificado (PV)",
        "Avance planificado × duración total",
        "Trabajo que debía estar hecho a la fecha."
       ],
       [
        "Valor ganado (EV)",
        "Avance real × duración total",
        "Trabajo realmente terminado y aceptado."
       ],
       [
        "Variación del cronograma (SV)",
        "EV − PV",
        "Negativa: retraso."
       ],
       [
        "Índice del cronograma (SPI)",
        "EV ÷ PV",
        "Menor de 0.90: acción correctiva."
       ],
       [
        "Variación del costo (CV)",
        "EV − costo real",
        "Negativa: sobrecosto."
       ],
       [
        "Índice del costo (CPI)",
        "EV ÷ costo real",
        "Menor de 0.90: acción correctiva."
       ]
      ],
      "titulo": "Medidas del valor ganado",
      "fuente": "El avance se mide en días de trabajo: la suma de las duraciones esperadas de la línea base es de 159.2 días."
     },
     {
      "t": "nota",
      "tipo": "simulado",
      "x": "Las cifras de valor ganado que aparecen en la versión anterior del cronograma corresponden a un ejercicio de simulación del curso anterior. No son mediciones de este proyecto."
     }
    ]
   }
  ]
 },
 {
  "id": "GOB-10",
  "titulo": "Plan de gestión de cambios y registro de cambios",
  "dominio": "Gobernanza",
  "area": "Monitoreo y control",
  "proceso": "Evaluar e implementar cambios",
  "salida": "Solicitudes de cambio aprobadas y registro de cambios",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Establece cómo se solicita, evalúa y decide un cambio, y registra los cambios que separan la versión anterior del proyecto de la versión vigente.",
  "carpeta": "01 - Gobernanza/1.8 Cambios",
  "pdf": "/documentos/GOB-10-plan-de-gestion-de-cambios-y-registro-de-cambios.pdf",
  "docx": "/documentos/GOB-10-plan-de-gestion-de-cambios-y-registro-de-cambios.docx",
  "secciones": [
   {
    "titulo": "1. Propósito y alcance",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Todo cambio a un documento controlado, a un entregable o a una línea base se evalúa de forma integrada: qué efecto tiene sobre el alcance, el cronograma, los costos, la calidad, los interesados y el riesgo. Así se evita que un ajuste hecho en un documento contradiga a los demás."
     },
     {
      "t": "ul",
      "items": [
       "**Sujetos a control de cambios:** acta de constitución, líneas base de alcance, cronograma y costos, requisitos, planes de gestión y entregables ya aceptados.",
       "**No requieren solicitud:** ajustes de redacción, y la reorganización del trabajo dentro de un sprint que no altere su objetivo."
      ]
     }
    ]
   },
   {
    "titulo": "2. Roles y niveles de aprobación",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Tipo de cambio",
       "Quién decide",
       "Plazo"
      ],
      "anchos": [
       46,
       34,
       20
      ],
      "filas": [
       [
        "No afecta ninguna línea base (por ejemplo, una corrección de datos)",
        "Director del proyecto",
        "2 días hábiles"
       ],
       [
        "Afecta el contenido de un sprint o la prioridad de los requisitos",
        "Product Owner",
        "Hasta la siguiente planificación"
       ],
       [
        "Afecta una línea base, el presupuesto o los objetivos del acta",
        "Comité de cambios: patrocinadora, Product Owner y director del proyecto",
        "5 días hábiles"
       ],
       [
        "Afecta entregables académicos del curso",
        "Docente asesor",
        "Siguiente clase"
       ]
      ],
      "titulo": "Niveles de aprobación"
     },
     {
      "t": "p",
      "x": "Carlos Curo lleva el registro de cambios y verifica que cada cambio aprobado se aplique en todos los documentos afectados."
     }
    ]
   },
   {
    "titulo": "3. Flujo de un cambio",
    "apaisada": false,
    "bloques": [
     {
      "t": "ol",
      "items": [
       "Cualquier interesado plantea el cambio al director del proyecto, que lo registra con un código SC.",
       "El equipo analiza el efecto sobre el alcance, el cronograma, los costos, la calidad, los interesados y el riesgo, y las alternativas.",
       "Decide quien corresponda según la sección 2: aprobar, aplazar o rechazar.",
       "La decisión se comunica al solicitante y se anota en el registro.",
       "Si se aprueba, se actualizan los documentos y las líneas base afectados y se sube su versión.",
       "En la siguiente revisión de sprint se verifica que el cambio quedó aplicado."
      ]
     }
    ]
   },
   {
    "titulo": "4. Formato de solicitud de cambio",
    "apaisada": false,
    "bloques": [
     {
      "t": "kv",
      "filas": [
       [
        "Código y fecha",
        "SC-00 · dd/mm/aaaa"
       ],
       [
        "Solicitante",
        "Nombre y rol"
       ],
       [
        "Descripción del cambio",
        "Qué se propone cambiar"
       ],
       [
        "Justificación",
        "Por qué es necesario y qué pasa si no se hace"
       ],
       [
        "Tipo",
        "Acción correctiva, acción preventiva, reparación de defecto o actualización"
       ],
       [
        "Efecto",
        "Alcance · cronograma · costos · calidad · interesados · riesgo"
       ],
       [
        "Alternativas consideradas",
        "Otras opciones y por qué se descartan"
       ],
       [
        "Decisión",
        "Aprobado, aplazado o rechazado · quién decide · fecha"
       ],
       [
        "Documentos a actualizar",
        "Lista y nueva versión"
       ]
      ]
     }
    ]
   },
   {
    "titulo": "5. Registro de cambios",
    "apaisada": true,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Cambio",
       "Origen",
       "Efecto",
       "Estado",
       "Decisión",
       "Aplicación"
      ],
      "anchos": [
       5,
       14,
       20,
       23,
       8,
       14,
       16
      ],
      "filas": [
       [
        "SC-01",
        "Cambio de equipo y reasignación de paquetes de trabajo",
        "Inicio del nuevo periodo académico: dos integrantes dejan el equipo y dos se incorporan.",
        "Responsables en la EDT, en el cronograma y en el blog.",
        {
         "x": "Aprobado",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Equipo del proyecto, 10/10/2026",
        "Aplicado en la EDT, en el cronograma v3 y en el blog."
       ],
       [
        "SC-02",
        "Replanificación del calendario",
        "El calendario anterior (marzo a agosto de 2026) ya venció y ubicaba el piloto en vacaciones escolares.",
        "Línea base del cronograma: del 12/10/2026 al 23/04/2027, receso en febrero y piloto en marzo. Línea base de costos: mismas cifras, nuevas fechas. El objetivo se mide en el año escolar 2027.",
        {
         "x": "Aprobado",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Equipo del proyecto, 10/10/2026. Conformidad de la patrocinadora: pendiente.",
        "Aplicado en el cronograma v3. Pendiente: distribución de costos por fechas."
       ],
       [
        "SC-03",
        "Alojamiento en servicios gestionados en la nube",
        "El colegio no tiene personal dedicado a administrar un servidor; tres requisitos ya citaban servicios en la nube.",
        "Exclusiones del alcance, requisitos no funcionales, paquetes 1.4.1 y 1.5.1 de la EDT, actividad A-5.1.1.1, abastecimiento y categoría de servicios de los costos. Agrega obligaciones de protección de datos.",
        {
         "x": "Aprobado",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Equipo del proyecto, 10/10/2026. Conformidad de la patrocinadora: pendiente.",
        "Aplicado en el enunciado del alcance v3, en el cronograma v3 y en GOB-05. Pendiente: capítulos de alternativas y de costos del blog."
       ],
       [
        "SC-04",
        "Tres niveles de riesgo y cuatro roles de usuario como estándar",
        "Los requisitos definen tres niveles (bajo, medio, alto) y cuatro roles; el prototipo y su base de datos usan cuatro niveles y tres roles.",
        "Base de datos, modelo y prototipo.",
        {
         "x": "Aprobado",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Equipo del proyecto, 10/10/2026",
        "Tres niveles aplicados en los documentos y en el prototipo (10/10/2026). Los roles siguen pendientes en el prototipo (Sprint 4)."
       ],
       [
        "SC-05",
        "Corrección de la validez del instrumento",
        "El documento reportaba 0.90 con una fórmula para cinco jueces; opinaron dos, con 88 de 100 puntos.",
        "Validez del cuestionario: 0.88 (88 %), que se mantiene en la categoría «muy bueno».",
        {
         "x": "Aprobado",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Equipo del proyecto, 10/10/2026",
        "Aplicado en los documentos nuevos."
       ],
       [
        "SC-06",
        "Corrección del número de actividades y de los totales PERT",
        "El texto del cronograma decía 40 actividades; sus tablas y el modelo de costos suman 44 más la reunión diaria. Las desviaciones estándar por sprint y el número de actividades críticas tampoco coincidían con la tabla.",
        "Texto y totales del cronograma y del blog. No cambian las duraciones ni las fechas.",
        {
         "x": "Aprobado",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Equipo del proyecto, 10/10/2026",
        "Aplicado en CRO-01 y en el blog."
       ],
       [
        "SC-07",
        "Adopción de la octava edición de la Guía del PMBOK®",
        "El curso Gestión de Proyecto de TI trabaja con la octava edición; los documentos anteriores citan la sexta.",
        "Estructura por dominios de desempeño y áreas de enfoque; nombres de los procesos.",
        {
         "x": "Aprobado",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Equipo del proyecto, 10/10/2026",
        "Aplicado en los documentos nuevos y en el blog. Pendiente: capítulo de finanzas."
       ],
       [
        "SC-08",
        "Rediseño de la validación del modelo de Machine Learning",
        "En el conjunto de datos del prototipo, la etiqueta de riesgo se calcula con las mismas notas que se usan como variables, por lo que la precisión obtenida no demuestra capacidad de predicción.",
        "Criterio de validación del requisito REQ-03 y paquete 1.3: predecir el periodo siguiente con datos reales anonimizados, comparar contra una regla simple, medir la proporción de estudiantes en riesgo detectados y retirar la variable de pensiones.",
        {
         "x": "En evaluación",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Se decide en la revisión del Sprint 1 (06/11/2026), con el docente asesor.",
        "—"
       ],
       [
        "SC-09",
        "Canal de las alertas por correo",
        "El diseño asumía un correo institucional que el colegio no tiene; los docentes usan correos personales.",
        "Requisito REQ-05 y paquete 1.4.1: servicio de envío de correo a direcciones personales autorizadas.",
        {
         "x": "En evaluación",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Requiere la lista de correos y la conformidad de la Dirección. Se decide en el Sprint 1.",
        "—"
       ],
       [
        "SC-10",
        "Unificación de la EDT y de su diccionario",
        "La declaración del alcance lista 18 paquetes de trabajo y el diccionario describe 20.",
        "Línea base del alcance: EDT, diccionario y matriz de trazabilidad.",
        {
         "x": "En evaluación",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Se decide al revisar la estructura del alcance en el Sprint 1.",
        "—"
       ]
      ],
      "titulo": "Registro de cambios al 10/10/2026",
      "compacta": true
     },
     {
      "t": "nota",
      "tipo": "aviso",
      "x": "Los cambios SC-02 y SC-03 alteran líneas base. Fueron aprobados por el equipo para poder planificar y se presentarán a la patrocinadora en la reunión de inicio; su conformidad está pendiente."
     },
     {
      "t": "nota",
      "tipo": "simulado",
      "x": "El cronograma anterior incluía una lista de solicitudes de cambio numeradas SC-01 a SC-06 que formaban parte de un ejercicio de simulación. No pertenecen a este registro."
     }
    ]
   },
   {
    "titulo": "6. Efecto de los cambios aprobados sobre los documentos",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Documento o línea base",
       "Cambios que lo afectan",
       "Situación"
      ],
      "anchos": [
       36,
       22,
       42
      ],
      "filas": [
       [
        "Acta de constitución (GOB-02)",
        "SC-01, SC-02, SC-03",
        {
         "x": "Emitida con los cambios incorporados",
         "fill": "verde"
        }
       ],
       [
        "Enunciado del alcance (ALC-02)",
        "SC-03, SC-04",
        {
         "x": "Versión 3 emitida",
         "fill": "verde"
        }
       ],
       [
        "EDT y diccionario",
        "SC-01, SC-03, SC-10",
        {
         "x": "Responsables y despliegue actualizados; unificación pendiente",
         "fill": "amarillo"
        }
       ],
       [
        "Requisitos y matriz de trazabilidad",
        "SC-03, SC-08, SC-09",
        {
         "x": "Requisitos de despliegue actualizados; SC-08 y SC-09 en evaluación",
         "fill": "amarillo"
        }
       ],
       [
        "Línea base del cronograma (CRO-01)",
        "SC-01, SC-02, SC-03, SC-06",
        {
         "x": "Versión 3 emitida",
         "fill": "verde"
        }
       ],
       [
        "Línea base de costos",
        "SC-02, SC-03",
        {
         "x": "Pendiente: fechas y categoría de servicios",
         "fill": "rojo"
        }
       ],
       [
        "Análisis de alternativas (blog)",
        "SC-03",
        {
         "x": "Nota de actualización publicada; reevaluación en GOB-05",
         "fill": "amarillo"
        }
       ],
       [
        "Prototipo",
        "SC-04, SC-08",
        {
         "x": "Pendiente (Sprints 3 y 4)",
         "fill": "rojo"
        }
       ]
      ],
      "titulo": "Aplicación de los cambios"
     }
    ]
   }
  ]
 },
 {
  "id": "GOB-11",
  "titulo": "Informe de cierre de la fase de formulación",
  "dominio": "Gobernanza",
  "area": "Cierre",
  "proceso": "Cerrar el proyecto o fase",
  "salida": "Informe final de la fase y transferencia de sus resultados",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Cierra formalmente la fase de formulación y evaluación: qué se entregó, qué queda pendiente y cómo se transfirió el trabajo al equipo actual.",
  "carpeta": "01 - Gobernanza/1.9 Cierre de fase",
  "pdf": "/documentos/GOB-11-informe-de-cierre-de-la-fase-de-formulacion.pdf",
  "docx": "/documentos/GOB-11-informe-de-cierre-de-la-fase-de-formulacion.docx",
  "secciones": [
   {
    "titulo": "1. Datos de la fase",
    "apaisada": false,
    "bloques": [
     {
      "t": "kv",
      "filas": [
       [
        "Fase que se cierra",
        "Formulación y evaluación del proyecto"
       ],
       [
        "Periodo",
        "Abril a julio de 2026, en el curso Formulación y Evaluación de Proyectos TI"
       ],
       [
        "Equipo de la fase",
        "Cuatro integrantes; dos continúan en el equipo actual"
       ],
       [
        "Fecha del informe",
        "10/10/2026"
       ],
       [
        "Motivo del cierre",
        "Fin del curso anterior e inicio de la fase de dirección del proyecto con un equipo parcialmente renovado"
       ]
      ]
     }
    ]
   },
   {
    "titulo": "2. Objetivo de la fase y resultado",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "La fase debía diagnosticar el problema del colegio, elegir una alternativa de solución y dejar planteadas las líneas base de alcance, cronograma y costos. El objetivo se cumplió: el problema central quedó formulado y sustentado, se seleccionó una alternativa con una matriz ponderada y se elaboraron las tres líneas base, además de un prototipo de demostración."
     },
     {
      "t": "p",
      "x": "La revisión de calidad (GOB-07) encontró que esos resultados no eran coherentes entre sí en varios datos. Esas diferencias se corrigieron o se registraron como cambios antes de iniciar la fase actual."
     }
    ]
   },
   {
    "titulo": "3. Entregables de la fase",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Entregable",
       "Dónde está",
       "Situación al cierre"
      ],
      "anchos": [
       38,
       28,
       34
      ],
      "filas": [
       [
        "Diagnóstico: entrevista, encuesta y análisis de interesados",
        "Carpeta de archivos del proyecto y blog",
        "Completo. El registro de interesados se actualizó en INT-01."
       ],
       [
        "Análisis del problema y del objetivo (marco lógico)",
        "Blog, capítulos 01 y 02",
        "Completo."
       ],
       [
        "Análisis de alternativas y Design Thinking",
        "Carpetas de las semanas 9 y 10; blog, capítulo 03",
        "Completo. El alojamiento cambió por SC-03."
       ],
       [
        "Requisitos, matriz de trazabilidad, declaración del alcance, EDT y diccionario",
        "Carpeta de la semana 11; blog, capítulo 07",
        "Completo. La EDT está por unificar (SC-10)."
       ],
       [
        "Línea base del cronograma, versión 2",
        "Carpeta de la semana 14",
        "Reemplazada por la versión 3 (CRO-01)."
       ],
       [
        "Línea base de costos, versión 2, y propuesta al cliente",
        "Carpeta de la semana 15",
        "Vigente en sus montos."
       ],
       [
        "Prototipo web y cuaderno de entrenamiento",
        "Carpeta de la semana 14 y prototipo en línea",
        "Demostración con datos simulados (IN-03)."
       ],
       [
        "Blog del proyecto",
        "Versión anterior en línea",
        "Migrado al blog actual."
       ]
      ],
      "titulo": "Entregables de la fase de formulación"
     }
    ]
   },
   {
    "titulo": "4. Verificación del cierre",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Actividad de cierre",
       "Resultado",
       "Observación"
      ],
      "anchos": [
       40,
       16,
       44
      ],
      "filas": [
       [
        "Revisar que no quede trabajo sin registrar",
        {
         "x": "Hecho",
         "fill": "verde",
         "align": "center"
        },
        "Los pendientes están en la sección 5."
       ],
       [
        "Verificar que no queden incidentes sin dueño",
        {
         "x": "Hecho",
         "fill": "verde",
         "align": "center"
        },
        "11 incidentes trasladados al registro (GOB-06)."
       ],
       [
        "Obtener la aceptación formal del cliente",
        {
         "x": "No consta",
         "fill": "rojo",
         "align": "center"
        },
        "No existe un acta firmada por el colegio para los entregables de la fase."
       ],
       [
        "Medir la satisfacción de los interesados",
        {
         "x": "No medida",
         "fill": "amarillo",
         "align": "center"
        },
        "Se medirá en la revisión del Sprint 1."
       ],
       [
        "Archivar la información de forma ordenada",
        {
         "x": "Hecho",
         "fill": "verde",
         "align": "center"
        },
        "Carpetas por semana; la documentación nueva está en «Documentación»."
       ],
       [
        "Liberar y reasignar recursos",
        {
         "x": "Hecho",
         "fill": "verde",
         "align": "center"
        },
        "Dos integrantes dejaron el equipo y dos se incorporaron (SC-01)."
       ],
       [
        "Registrar las lecciones aprendidas",
        {
         "x": "Hecho",
         "fill": "verde",
         "align": "center"
        },
        "12 lecciones en GOB-08."
       ],
       [
        "Emitir el informe final de la fase",
        {
         "x": "Hecho",
         "fill": "verde",
         "align": "center"
        },
        "Este documento."
       ]
      ],
      "titulo": "Lista de verificación del cierre de fase"
     }
    ]
   },
   {
    "titulo": "5. Pendientes que pasan a la fase actual",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Pendiente",
       "Dónde se atiende"
      ],
      "anchos": [
       60,
       40
      ],
      "filas": [
       [
        "Firma del acta de constitución por la patrocinadora",
        "Reunión de inicio; GOB-02"
       ],
       [
        "Segunda entrevista: soporte técnico y gestora de Cubicol",
        "Sprint 1; IN-05"
       ],
       [
        "Acceso a datos reales y digitalización de asistencia e incidencias",
        "Sprints 1 y 2; IN-01 e IN-02"
       ],
       [
        "Validación del modelo con datos reales",
        "Sprint 3; SC-08"
       ],
       [
        "Tratamiento de los datos personales",
        "Antes del piloto; IN-04 y supuesto S-06"
       ],
       [
        "Distribución de la línea base de costos con el calendario nuevo",
        "Dominio de Finanzas; SC-02"
       ],
       [
        "Unificación de la EDT y su diccionario",
        "Sprint 1; SC-10"
       ],
       [
        "Aclarar con la Dirección el ofrecimiento de guías para padres",
        "Reunión de inicio; IN-10"
       ]
      ],
      "titulo": "Pendientes transferidos"
     }
    ]
   },
   {
    "titulo": "6. Transferencia al equipo actual",
    "apaisada": false,
    "bloques": [
     {
      "t": "ul",
      "items": [
       "El código y el blog pasaron a un repositorio del proyecto: https://github.com/Jhostin2210/peruano-frances-gti.",
       "El blog se publica en https://peruano-frances-gti.vercel.app.",
       "La documentación vigente está en la carpeta «Documentación», ordenada por dominio y proceso.",
       "Los documentos de la fase de formulación se conservan como registro histórico y no se modifican; las diferencias con la versión vigente constan en el registro de cambios (GOB-10)."
      ]
     }
    ]
   },
   {
    "titulo": "7. Conclusión",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "La fase de formulación queda cerrada. Entregó el sustento del proyecto y sus líneas base; no dejó constancia de la aceptación del colegio, que se obtendrá con la firma del acta de constitución. El proyecto continúa con la fase de dirección según el plan GOB-04."
     }
    ]
   }
  ]
 },
 {
  "id": "INT-01",
  "titulo": "Registro y análisis de interesados",
  "dominio": "Interesados",
  "area": "Iniciación",
  "proceso": "Identificar a los interesados",
  "salida": "Registro de interesados",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Identifica a todas las personas y organizaciones que afectan al proyecto o son afectadas por él, las evalúa y las clasifica con cuatro técnicas: poder e interés, cubo, dirección de la influencia y prominencia.",
  "carpeta": "02 - Interesados/2.1 Identificar",
  "pdf": "/documentos/INT-01-registro-y-analisis-de-interesados.pdf",
  "docx": "/documentos/INT-01-registro-y-analisis-de-interesados.docx",
  "secciones": [
   {
    "titulo": "1. Cómo se identificó a los interesados",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Técnica",
       "Aplicación en el proyecto",
       "Fecha"
      ],
      "anchos": [
       22,
       60,
       18
      ],
      "filas": [
       [
        "Análisis de documentos",
        "Organigrama del colegio, formato de incidencias, caso de negocio y documentos de la fase de formulación.",
        "Abril a octubre de 2026"
       ],
       [
        "Entrevista",
        "Entrevista semiestructurada a la Promotora Directora, grabada y transcrita.",
        "24/04/2026"
       ],
       [
        "Cuestionario",
        "Encuesta en línea respondida por 6 docentes.",
        "15/05/2026"
       ],
       [
        "Tormenta de ideas",
        "Sesión del equipo para completar la lista con proveedores, reguladores y el propio equipo.",
        "10/10/2026"
       ],
       [
        "Análisis de interesados",
        "Evaluación de poder, interés, influencia y actitud de cada uno.",
        "10/10/2026"
       ]
      ],
      "titulo": "Técnicas de identificación"
     },
     {
      "t": "p",
      "x": "El registro anterior tenía 9 interesados, todos del colegio. Esta versión identifica 17: se separaron cargos que estaban agrupados y se agregaron el equipo, el docente asesor, los proveedores y los reguladores. La identificación se repite al inicio de cada sprint."
     }
    ]
   },
   {
    "titulo": "2. Registro de interesados",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Interesado",
       "Cargo o relación",
       "Tipo",
       "Contacto",
       "Rol en el proyecto",
       "Expectativa principal"
      ],
      "anchos": [
       5,
       13,
       17,
       7,
       16,
       20,
       22
      ],
      "filas": [
       [
        "I-01",
        "Promotora Directora",
        "Promotora y directora general; patrocinadora del proyecto",
        "Interno",
        "Oficina de dirección; reunión presencial y WhatsApp",
        "Autoriza el proyecto, facilita datos y personal, aprueba las líneas base y el cierre",
        "Control ordenado y digital del progreso del alumno; constancia de los avisos a las familias; interés en registrar la asistencia con código QR"
       ],
       [
        "I-02",
        "Subdirector",
        "Subdirector de la institución",
        "Interno",
        "Oficina de dirección",
        "Supervisa la gestión académica y respalda la adopción del sistema",
        "Por confirmar: seguimiento del desempeño por nivel educativo"
       ],
       [
        "I-03",
        "Coordinación académica",
        "Coordinadores de Ciencias y de Letras",
        "Interno",
        "Sala de docentes; reunión presencial",
        "Candidata a Product Owner: prioriza requisitos, acepta entregables y usa los reportes",
        "Información consolidada por aula al cierre de cada unidad"
       ],
       [
        "I-04",
        "Jefa de Normas",
        "Responsable de convivencia y disciplina",
        "Interno",
        "Oficina de normas; presencial",
        "Dueña del proceso de incidencias; valida cómo se registran",
        "Registrar incidencias con rapidez y conservar el historial"
       ],
       [
        "I-05",
        "Docentes tutores y auxiliares",
        "Docentes de aula, tutores y auxiliares (16 personas)",
        "Interno",
        "Aulas; reunión presencial, WhatsApp y correo personal",
        "Usuarios principales: registran datos, reciben alertas y actúan con el estudiante",
        "Detectar a tiempo sin aumentar su carga de trabajo; interfaz simple"
       ],
       [
        "I-06",
        "Responsable de psicología",
        "Área de psicología del colegio",
        "Interno",
        "Área de psicología; presencial",
        "Atiende los casos que se derivan por riesgo alto",
        "Recibir los casos con información previa del estudiante"
       ],
       [
        "I-07",
        "Gestora de la plataforma Cubicol",
        "Personal que administra Cubicol, descarga las notas y emite los reportes",
        "Interno",
        "Oficina administrativa; presencial",
        "Entrega las exportaciones de datos y conoce los formatos de evaluación",
        "Por confirmar: que el proyecto no le sume trabajo manual"
       ],
       [
        "I-08",
        "Encargado de soporte de TI",
        "Encargado del laboratorio de cómputo y del soporte de equipos y red",
        "Interno",
        "Laboratorio de cómputo; presencial",
        "Soporte de red y equipos; futuro responsable técnico del sistema",
        "Una solución que pueda mantener sin depender del equipo"
       ],
       [
        "I-09",
        "Personal administrativo",
        "Secretaría y administración",
        "Interno",
        "Oficina administrativa",
        "Custodia datos de matrícula y de contacto de los apoderados",
        "Que sus procesos no cambien"
       ],
       [
        "I-10",
        "Estudiantes",
        "Unos 200 estudiantes de inicial, primaria y secundaria",
        "Interno",
        "A través de sus tutores",
        "Beneficiarios; titulares de los datos (menores de edad)",
        "Recibir apoyo a tiempo y que sus datos se traten con reserva"
       ],
       [
        "I-11",
        "Padres de familia y apoderados",
        "Apoderados de los estudiantes",
        "Externo",
        "WhatsApp, agenda escolar y comunicados impresos; pocos ingresan a Cubicol",
        "Reciben los comunicados y autorizan el tratamiento de los datos de sus hijos",
        "Información clara y oportuna sobre el desempeño de sus hijos"
       ],
       [
        "I-12",
        "Equipo del proyecto",
        "Cuatro estudiantes de Ingeniería de Sistemas de la UNTELS; uno de ellos es además docente del colegio",
        "Externo",
        "Reunión diaria, WhatsApp y repositorio en GitHub",
        "Planifica, construye y entrega el sistema",
        "Cumplir el curso y dejar un sistema que el colegio realmente use"
       ],
       [
        "I-13",
        "Docente asesor del curso",
        "Docente del curso Gestión de Proyecto de TI (UNTELS)",
        "Externo",
        "Clase semanal y blog del proyecto",
        "Orienta y evalúa los entregables de gestión",
        "Aplicación correcta del PMBOK 8, trabajo real con la institución y blog ordenado"
       ],
       [
        "I-14",
        "Cubicol (proveedor)",
        "Empresa proveedora de la plataforma educativa del colegio",
        "Externo",
        "Soporte del proveedor, a través de la gestora de la plataforma",
        "Dueña de la plataforma donde están las notas; define qué se puede exportar",
        "Ninguna identificada"
       ],
       [
        "I-15",
        "Proveedores de nube e internet",
        "Vercel (alojamiento web), Supabase (base de datos), GitHub (repositorio y tareas programadas) y WIN (internet del colegio)",
        "Externo",
        "Sitio web y condiciones de servicio de cada proveedor",
        "Prestan la infraestructura sobre la que funciona el sistema",
        "Uso dentro de sus condiciones de servicio"
       ],
       [
        "I-16",
        "UGEL 01 y MINEDU",
        "Unidad de Gestión Educativa Local N.° 01 y Ministerio de Educación",
        "Externo",
        "Normativa publicada; a través de la Dirección",
        "Ente rector: norma la evaluación y los registros académicos",
        "Cumplimiento de la normativa educativa"
       ],
       [
        "I-17",
        "Autoridad de Protección de Datos Personales",
        "Autoridad Nacional de Protección de Datos Personales (Ministerio de Justicia y Derechos Humanos)",
        "Externo",
        "Normativa publicada",
        "Supervisa el cumplimiento de la Ley N.° 29733",
        "Tratamiento lícito, informado y seguro de los datos de menores"
       ]
      ],
      "titulo": "Información de identificación",
      "compacta": true,
      "fuente": "Tipo: interno o externo respecto del colegio. Por reserva, el registro publicado identifica cargos y no nombres de personas."
     }
    ]
   },
   {
    "titulo": "3. Evaluación",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Interesado",
       "Poder",
       "Interés",
       "Influencia",
       "Actitud",
       "Dirección de la influencia",
       "Estrategia"
      ],
      "anchos": [
       6,
       26,
       9,
       9,
       10,
       14,
       13,
       13
      ],
      "filas": [
       [
        "I-01",
        "Promotora Directora",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "Partidaria",
        "Ascendente",
        {
         "x": "Gestionar de cerca",
         "fill": "verde"
        }
       ],
       [
        "I-02",
        "Subdirector",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "Sin evidencia",
        "Ascendente",
        {
         "x": "Gestionar de cerca",
         "fill": "verde"
        }
       ],
       [
        "I-03",
        "Coordinación académica",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "Sin evidencia",
        "Lateral",
        {
         "x": "Gestionar de cerca",
         "fill": "verde"
        }
       ],
       [
        "I-04",
        "Jefa de Normas",
        {
         "x": "Bajo",
         "fill": "gris",
         "align": "center"
        },
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "Sin evidencia",
        "Lateral",
        {
         "x": "Mantener informados",
         "fill": "naranja"
        }
       ],
       [
        "I-05",
        "Docentes tutores y auxiliares",
        {
         "x": "Bajo",
         "fill": "gris",
         "align": "center"
        },
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "Partidaria en los encuestados",
        "Hacia afuera",
        {
         "x": "Mantener informados",
         "fill": "naranja"
        }
       ],
       [
        "I-06",
        "Responsable de psicología",
        {
         "x": "Bajo",
         "fill": "gris",
         "align": "center"
        },
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "Sin evidencia",
        "Hacia afuera",
        {
         "x": "Mantener informados",
         "fill": "naranja"
        }
       ],
       [
        "I-07",
        "Gestora de la plataforma Cubicol",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Bajo",
         "fill": "gris",
         "align": "center"
        },
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "Sin evidencia",
        "Lateral",
        {
         "x": "Mantener satisfechos",
         "fill": "azul"
        }
       ],
       [
        "I-08",
        "Encargado de soporte de TI",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "Sin evidencia",
        "Lateral",
        {
         "x": "Gestionar de cerca",
         "fill": "verde"
        }
       ],
       [
        "I-09",
        "Personal administrativo",
        {
         "x": "Bajo",
         "fill": "gris",
         "align": "center"
        },
        {
         "x": "Bajo",
         "fill": "gris",
         "align": "center"
        },
        {
         "x": "Baja",
         "fill": "gris",
         "align": "center"
        },
        "Sin evidencia",
        "Lateral",
        {
         "x": "Monitorear",
         "fill": "amarillo"
        }
       ],
       [
        "I-10",
        "Estudiantes",
        {
         "x": "Bajo",
         "fill": "gris",
         "align": "center"
        },
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Baja",
         "fill": "gris",
         "align": "center"
        },
        "Sin evidencia",
        "Hacia afuera",
        {
         "x": "Mantener informados",
         "fill": "naranja"
        }
       ],
       [
        "I-11",
        "Padres de familia y apoderados",
        {
         "x": "Bajo",
         "fill": "gris",
         "align": "center"
        },
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "Sin evidencia",
        "Hacia afuera",
        {
         "x": "Mantener informados",
         "fill": "naranja"
        }
       ],
       [
        "I-12",
        "Equipo del proyecto",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "Partidaria",
        "Descendente",
        {
         "x": "Gestionar de cerca",
         "fill": "verde"
        }
       ],
       [
        "I-13",
        "Docente asesor del curso",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "Partidaria",
        "Ascendente",
        {
         "x": "Gestionar de cerca",
         "fill": "verde"
        }
       ],
       [
        "I-14",
        "Cubicol (proveedor)",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Bajo",
         "fill": "gris",
         "align": "center"
        },
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "Sin evidencia",
        "Hacia afuera",
        {
         "x": "Mantener satisfechos",
         "fill": "azul"
        }
       ],
       [
        "I-15",
        "Proveedores de nube e internet",
        {
         "x": "Bajo",
         "fill": "gris",
         "align": "center"
        },
        {
         "x": "Bajo",
         "fill": "gris",
         "align": "center"
        },
        {
         "x": "Baja",
         "fill": "gris",
         "align": "center"
        },
        "Neutral",
        "Hacia afuera",
        {
         "x": "Monitorear",
         "fill": "amarillo"
        }
       ],
       [
        "I-16",
        "UGEL 01 y MINEDU",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Bajo",
         "fill": "gris",
         "align": "center"
        },
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "Sin evidencia",
        "Hacia afuera",
        {
         "x": "Mantener satisfechos",
         "fill": "azul"
        }
       ],
       [
        "I-17",
        "Autoridad de Protección de Datos Personales",
        {
         "x": "Alto",
         "fill": "rojo",
         "align": "center"
        },
        {
         "x": "Bajo",
         "fill": "gris",
         "align": "center"
        },
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "Sin evidencia",
        "Hacia afuera",
        {
         "x": "Mantener satisfechos",
         "fill": "azul"
        }
       ]
      ],
      "titulo": "Información de evaluación y clasificación",
      "compacta": true,
      "fuente": "Poder: capacidad de decidir o de bloquear. Interés: cuánto le afecta el resultado. Influencia: peso de su opinión sobre los demás."
     }
    ]
   },
   {
    "titulo": "4. Matriz de poder e interés",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "",
       "Interés bajo",
       "Interés alto"
      ],
      "anchos": [
       14,
       43,
       43
      ],
      "filas": [
       [
        {
         "x": "Poder alto",
         "fill": "gris",
         "bold": true
        },
        {
         "x": [
          "**Mantener satisfechos**",
          "I-07 Gestora de la plataforma Cubicol",
          "I-14 Cubicol (proveedor)",
          "I-16 UGEL 01 y MINEDU",
          "I-17 Autoridad de Protección de Datos Personales"
         ],
         "fill": "azul"
        },
        {
         "x": [
          "**Gestionar de cerca**",
          "I-01 Promotora Directora",
          "I-02 Subdirector",
          "I-03 Coordinación académica",
          "I-08 Encargado de soporte de TI",
          "I-12 Equipo del proyecto",
          "I-13 Docente asesor del curso"
         ],
         "fill": "verde"
        }
       ],
       [
        {
         "x": "Poder bajo",
         "fill": "gris",
         "bold": true
        },
        {
         "x": [
          "**Monitorear**",
          "I-09 Personal administrativo",
          "I-15 Proveedores de nube e internet"
         ],
         "fill": "amarillo"
        },
        {
         "x": [
          "**Mantener informados**",
          "I-04 Jefa de Normas",
          "I-05 Docentes tutores y auxiliares",
          "I-06 Responsable de psicología",
          "I-10 Estudiantes",
          "I-11 Padres de familia y apoderados"
         ],
         "fill": "naranja"
        }
       ]
      ],
      "titulo": "Matriz de poder e interés"
     },
     {
      "t": "p",
      "x": "La gestora de Cubicol es el caso que más cuidado requiere: tiene poder, porque de ella dependen las exportaciones de datos, y su interés en el proyecto todavía es bajo. Los docentes tienen poco poder formal, pero de su uso diario depende que el sistema sirva."
     }
    ]
   },
   {
    "titulo": "5. Cubo de interesados",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El cubo agrega una tercera dimensión, la actitud, a las de poder e interés. Solo se considera partidario a quien lo ha expresado; el resto figura como neutral hasta tener evidencia."
     },
     {
      "t": "tabla",
      "cols": [
       "Poder",
       "Interés",
       "Actitud",
       "Tipo en el cubo",
       "Interesados"
      ],
      "anchos": [
       10,
       10,
       14,
       26,
       40
      ],
      "filas": [
       [
        "Alto",
        "Alto",
        "Partidaria",
        {
         "x": "Influyente activo partidario",
         "fill": "verde"
        },
        "I-01 Promotora Directora, I-12 Equipo del proyecto, I-13 Docente asesor"
       ],
       [
        "Alto",
        "Alto",
        "Neutral",
        {
         "x": "Influyente activo neutral",
         "fill": "amarillo"
        },
        "I-02 Subdirector, I-03 Coordinación académica, I-08 Encargado de soporte de TI"
       ],
       [
        "Alto",
        "Bajo",
        "Neutral",
        {
         "x": "Influyente pasivo neutral",
         "fill": "amarillo"
        },
        "I-07 Gestora de Cubicol, I-14 Cubicol, I-16 UGEL 01 y MINEDU, I-17 Autoridad de Protección de Datos"
       ],
       [
        "Bajo",
        "Alto",
        "Partidaria",
        {
         "x": "Insignificante activo partidario",
         "fill": "verde"
        },
        "I-05 Docentes tutores y auxiliares (los encuestados)"
       ],
       [
        "Bajo",
        "Alto",
        "Neutral",
        {
         "x": "Insignificante activo neutral",
         "fill": "amarillo"
        },
        "I-04 Jefa de Normas, I-06 Psicología, I-10 Estudiantes, I-11 Padres y apoderados"
       ],
       [
        "Bajo",
        "Bajo",
        "Neutral",
        {
         "x": "Insignificante pasivo neutral",
         "fill": "gris"
        },
        "I-09 Personal administrativo, I-15 Proveedores de nube e internet"
       ]
      ],
      "titulo": "Clasificación con el cubo de interesados"
     },
     {
      "t": "p",
      "x": "No se ha identificado a ningún interesado resistente. Los dos lugares donde podría aparecer resistencia son la gestora de Cubicol, si el proyecto le suma trabajo, y los docentes con menos manejo de tecnología."
     }
    ]
   },
   {
    "titulo": "6. Dirección de la influencia",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Dirección",
       "A quiénes corresponde",
       "Interesados"
      ],
      "anchos": [
       16,
       38,
       46
      ],
      "filas": [
       [
        {
         "x": "Ascendente",
         "fill": "teal",
         "bold": true
        },
        "Quienes autorizan o evalúan: alta dirección del cliente, patrocinadora y docente asesor.",
        "I-01 Promotora Directora; I-02 Subdirector; I-13 Docente asesor del curso"
       ],
       [
        {
         "x": "Descendente",
         "fill": "teal",
         "bold": true
        },
        "El equipo que realiza el trabajo.",
        "I-12 Equipo del proyecto"
       ],
       [
        {
         "x": "Lateral",
         "fill": "teal",
         "bold": true
        },
        "Pares del director del proyecto en el colegio, con quienes se comparten información y recursos.",
        "I-03 Coordinación académica; I-04 Jefa de Normas; I-07 Gestora de la plataforma Cubicol; I-08 Encargado de soporte de TI; I-09 Personal administrativo"
       ],
       [
        {
         "x": "Hacia afuera",
         "fill": "teal",
         "bold": true
        },
        "Usuarios finales, familias, proveedores y reguladores.",
        "I-05 Docentes tutores y auxiliares; I-06 Responsable de psicología; I-10 Estudiantes; I-11 Padres de familia y apoderados; I-14 Cubicol (proveedor); I-15 Proveedores de nube e internet; I-16 UGEL 01 y MINEDU; I-17 Autoridad de Protección de Datos Personales"
       ]
      ],
      "titulo": "Dirección de la influencia respecto del director del proyecto"
     }
    ]
   },
   {
    "titulo": "7. Modelo de prominencia",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El modelo de prominencia clasifica a los interesados según tres atributos: poder para imponer su voluntad, urgencia de su necesidad y legitimidad de su participación. De la combinación salen siete categorías."
     },
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Interesado",
       "Poder",
       "Urgencia",
       "Legitimidad",
       "Categoría"
      ],
      "anchos": [
       8,
       42,
       11,
       11,
       12,
       16
      ],
      "filas": [
       [
        "I-01",
        "Promotora Directora",
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Definitivo",
         "fill": "verde",
         "bold": true
        }
       ],
       [
        "I-02",
        "Subdirector",
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Dominante",
         "bold": false
        }
       ],
       [
        "I-03",
        "Coordinación académica",
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Dominante",
         "bold": false
        }
       ],
       [
        "I-04",
        "Jefa de Normas",
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Discrecional",
         "bold": false
        }
       ],
       [
        "I-05",
        "Docentes tutores y auxiliares",
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Dependiente",
         "bold": false
        }
       ],
       [
        "I-06",
        "Responsable de psicología",
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Discrecional",
         "bold": false
        }
       ],
       [
        "I-07",
        "Gestora de la plataforma Cubicol",
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Dominante",
         "bold": false
        }
       ],
       [
        "I-08",
        "Encargado de soporte de TI",
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Dominante",
         "bold": false
        }
       ],
       [
        "I-09",
        "Personal administrativo",
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Discrecional",
         "bold": false
        }
       ],
       [
        "I-10",
        "Estudiantes",
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Dependiente",
         "bold": false
        }
       ],
       [
        "I-11",
        "Padres de familia y apoderados",
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Dependiente",
         "bold": false
        }
       ],
       [
        "I-12",
        "Equipo del proyecto",
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Definitivo",
         "fill": "verde",
         "bold": true
        }
       ],
       [
        "I-13",
        "Docente asesor del curso",
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Definitivo",
         "fill": "verde",
         "bold": true
        }
       ],
       [
        "I-14",
        "Cubicol (proveedor)",
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "Durmiente",
         "bold": false
        }
       ],
       [
        "I-15",
        "Proveedores de nube e internet",
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "Durmiente",
         "bold": false
        }
       ],
       [
        "I-16",
        "UGEL 01 y MINEDU",
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Dominante",
         "bold": false
        }
       ],
       [
        "I-17",
        "Autoridad de Protección de Datos Personales",
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "teal",
         "align": "center"
        },
        {
         "x": "Dominante",
         "bold": false
        }
       ]
      ],
      "titulo": "Atributos y categoría de cada interesado",
      "compacta": true
     },
     {
      "t": "tabla",
      "cols": [
       "Categoría",
       "Significado",
       "Interesados"
      ],
      "anchos": [
       16,
       44,
       40
      ],
      "filas": [
       [
        {
         "x": "Definitivo",
         "bold": true
        },
        "Poder, urgencia y legitimidad: atención prioritaria e inmediata.",
        "I-01, I-12, I-13"
       ],
       [
        {
         "x": "Dominante",
         "bold": true
        },
        "Poder y legitimidad: sus expectativas deben atenderse.",
        "I-02, I-03, I-07, I-08, I-16, I-17"
       ],
       [
        {
         "x": "Dependiente",
         "bold": true
        },
        "Urgencia y legitimidad, sin poder: dependen de otros para ser atendidos.",
        "I-05, I-10, I-11"
       ],
       [
        {
         "x": "Peligroso",
         "bold": true
        },
        "Poder y urgencia, sin legitimidad.",
        "Ninguno"
       ],
       [
        {
         "x": "Durmiente",
         "bold": true
        },
        "Solo poder: no lo ejercen mientras no se vean afectados.",
        "I-14, I-15"
       ],
       [
        {
         "x": "Discrecional",
         "bold": true
        },
        "Solo legitimidad: se les atiende por decisión del proyecto.",
        "I-04, I-06, I-09"
       ],
       [
        {
         "x": "Demandante",
         "bold": true
        },
        "Solo urgencia.",
        "Ninguno"
       ]
      ],
      "titulo": "Resumen por categoría de prominencia"
     },
     {
      "t": "p",
      "x": "Los docentes, los estudiantes y los padres son interesados dependientes: su necesidad es urgente y legítima, pero no tienen poder para lograr que se atienda. El proyecto debe representarlos ante quienes sí lo tienen."
     }
    ]
   },
   {
    "titulo": "8. Priorización",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Con las cuatro clasificaciones, el orden de atención de los interesados es el siguiente:"
     },
     {
      "t": "ol",
      "items": [
       "**I-01 Promotora Directora.** Definitiva y patrocinadora: sin su firma y sus decisiones el proyecto no avanza.",
       "**I-07 Gestora de Cubicol e I-08 Encargado de soporte de TI.** Controlan los datos y la operación futura; todavía no han sido entrevistados.",
       "**I-03 Coordinación académica.** Candidata a Product Owner.",
       "**I-05 Docentes tutores y auxiliares.** Usuarios principales; de ellos depende la adopción.",
       "**I-11 Padres y apoderados.** Su consentimiento es condición para usar datos reales.",
       "**I-13 Docente asesor.** Evalúa el proyecto.",
       "Los demás se atienden según el plan de involucramiento (INT-02)."
      ]
     }
    ]
   },
   {
    "titulo": "9. Cambios respecto al registro anterior",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Cambio",
       "Motivo"
      ],
      "anchos": [
       50,
       50
      ],
      "filas": [
       [
        "De 9 a 17 interesados.",
        "Faltaban el equipo, el docente asesor, los proveedores y los reguladores."
       ],
       [
        "«Área de TI» se separó en gestora de Cubicol y encargado de soporte.",
        "Son personas distintas, con poder e interés distintos."
       ],
       [
        "El área de TI ya no figura como entrevistada.",
        "La transcripción muestra que solo se entrevistó a la directora."
       ],
       [
        "Los docentes pasan de «mantener involucrados» a «mantener informados», con acciones de participación.",
        "Se aplicó la matriz de dos niveles; su peso real se refleja en la influencia y en la priorización."
       ],
       [
        "Los porcentajes de avance del involucramiento se reemplazaron por la matriz de niveles.",
        "No tenían una forma de medición; ver INT-05."
       ]
      ],
      "titulo": "Diferencias con el registro de la fase de formulación"
     }
    ]
   }
  ]
 },
 {
  "id": "INT-02",
  "titulo": "Plan de involucramiento de los interesados",
  "dominio": "Interesados",
  "area": "Planificación",
  "proceso": "Planificar el involucramiento de los interesados",
  "salida": "Plan de involucramiento de los interesados",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Define cómo llevar a cada interesado desde su nivel de involucramiento actual hasta el que el proyecto necesita, con acciones, responsables y momentos concretos.",
  "carpeta": "02 - Interesados/2.2 Planificar",
  "pdf": "/documentos/INT-02-plan-de-involucramiento-de-los-interesados.pdf",
  "docx": "/documentos/INT-02-plan-de-involucramiento-de-los-interesados.docx",
  "secciones": [
   {
    "titulo": "1. Objetivo",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El plan busca que cada interesado participe en la medida que el proyecto necesita: que la Dirección lidere, que quienes tienen los datos colaboren, que los docentes adopten el sistema y que las familias estén informadas. Parte del registro de interesados (INT-01) y se actualiza al inicio de cada sprint o cuando cambia la comunidad de interesados."
     }
    ]
   },
   {
    "titulo": "2. Matriz de evaluación del involucramiento",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Interesado",
       "Desconocedor",
       "Reticente",
       "Neutral",
       "De apoyo",
       "Líder"
      ],
      "anchos": [
       35,
       13,
       13,
       13,
       13,
       13
      ],
      "filas": [
       [
        "I-01 Promotora Directora",
        "",
        "",
        "",
        {
         "x": "C",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        {
         "x": "D",
         "fill": "azul",
         "bold": true,
         "align": "center"
        }
       ],
       [
        "I-02 Subdirector",
        {
         "x": "C",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "",
        "",
        {
         "x": "D",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        ""
       ],
       [
        "I-03 Coordinación académica",
        {
         "x": "C",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "",
        "",
        "",
        {
         "x": "D",
         "fill": "azul",
         "bold": true,
         "align": "center"
        }
       ],
       [
        "I-04 Jefa de Normas",
        {
         "x": "C",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "",
        "",
        {
         "x": "D",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        ""
       ],
       [
        "I-05 Docentes tutores y auxiliares",
        "",
        "",
        {
         "x": "C",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        {
         "x": "D",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        ""
       ],
       [
        "I-06 Responsable de psicología",
        {
         "x": "C",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "",
        "",
        {
         "x": "D",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        ""
       ],
       [
        "I-07 Gestora de la plataforma Cubicol",
        "",
        "",
        {
         "x": "C",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        {
         "x": "D",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        ""
       ],
       [
        "I-08 Encargado de soporte de TI",
        "",
        "",
        {
         "x": "C",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        {
         "x": "D",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        ""
       ],
       [
        "I-09 Personal administrativo",
        {
         "x": "C",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "",
        {
         "x": "D",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "",
        ""
       ],
       [
        "I-10 Estudiantes",
        {
         "x": "C",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "",
        {
         "x": "D",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "",
        ""
       ],
       [
        "I-11 Padres de familia y apoderados",
        {
         "x": "C",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "",
        "",
        {
         "x": "D",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        ""
       ],
       [
        "I-12 Equipo del proyecto",
        "",
        "",
        "",
        "",
        {
         "x": "C · D",
         "fill": "verde",
         "bold": true,
         "align": "center"
        }
       ],
       [
        "I-13 Docente asesor del curso",
        "",
        "",
        "",
        {
         "x": "C · D",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        ""
       ],
       [
        "I-14 Cubicol (proveedor)",
        {
         "x": "C",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "",
        {
         "x": "D",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "",
        ""
       ],
       [
        "I-15 Proveedores de nube e internet",
        "",
        "",
        {
         "x": "C · D",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "",
        ""
       ],
       [
        "I-16 UGEL 01 y MINEDU",
        {
         "x": "C",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "",
        {
         "x": "D",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "",
        ""
       ],
       [
        "I-17 Autoridad de Protección de Datos Personales",
        {
         "x": "C",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "",
        {
         "x": "D",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "",
        ""
       ]
      ],
      "titulo": "Nivel de involucramiento actual y deseado al 10/10/2026",
      "compacta": true,
      "fuente": "C: nivel actual. D: nivel deseado. Desconocedor: no conoce el proyecto. Reticente: lo conoce y se resiste. Neutral: lo conoce y no apoya ni se opone. De apoyo: lo conoce y apoya. Líder: lo conoce y participa activamente en su éxito."
     },
     {
      "t": "p",
      "x": "3 de 17 interesados están en el nivel deseado. La mayor distancia está en la coordinación académica, que pasaría de no conocer el proyecto a liderarlo como Product Owner."
     }
    ]
   },
   {
    "titulo": "3. Estrategias y acciones por interesado",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Interesado",
       "Estrategia",
       "Acciones",
       "Responsable"
      ],
      "anchos": [
       22,
       16,
       46,
       16
      ],
      "filas": [
       [
        "I-01 Promotora Directora",
        {
         "x": "Gestionar de cerca",
         "fill": "verde"
        },
        "Reunión de inicio y firma del acta; revisión al cierre de cada sprint; definir con ella al Product Owner y el tratamiento de datos.",
        "Jhostin Galarza"
       ],
       [
        "I-02 Subdirector",
        {
         "x": "Gestionar de cerca",
         "fill": "verde"
        },
        "Presentarle el proyecto en la reunión de inicio.",
        "Jhostin Galarza"
       ],
       [
        "I-03 Coordinación académica",
        {
         "x": "Gestionar de cerca",
         "fill": "verde"
        },
        "Pedir a la Dirección su designación como Product Owner; taller de priorización en el Sprint 1.",
        "Jhostin Galarza"
       ],
       [
        "I-04 Jefa de Normas",
        {
         "x": "Mantener informados",
         "fill": "naranja"
        },
        "Entrevista sobre el registro de incidencias en el Sprint 1.",
        "Jadira Vasquez"
       ],
       [
        "I-05 Docentes tutores y auxiliares",
        {
         "x": "Mantener informados",
         "fill": "naranja"
        },
        "Validar variables (semana 3), revisar el tablero (semana 15), piloto (semanas 18 y 19) y capacitación (semana 23).",
        "Helber Perez y Carlos Curo"
       ],
       [
        "I-06 Responsable de psicología",
        {
         "x": "Mantener informados",
         "fill": "naranja"
        },
        "Reunión para definir qué información necesita de cada alerta (Sprint 1).",
        "Helber Perez"
       ],
       [
        "I-07 Gestora de la plataforma Cubicol",
        {
         "x": "Mantener satisfechos",
         "fill": "azul"
        },
        "Realizar la segunda entrevista; acordar formato y frecuencia de las exportaciones.",
        "Jadira Vasquez"
       ],
       [
        "I-08 Encargado de soporte de TI",
        {
         "x": "Gestionar de cerca",
         "fill": "verde"
        },
        "Segunda entrevista; revisión de la red del colegio; transferencia de conocimiento en el Sprint 6.",
        "Jadira Vasquez y Helber Perez"
       ],
       [
        "I-09 Personal administrativo",
        {
         "x": "Monitorear",
         "fill": "amarillo"
        },
        "Informar al inicio del proyecto y antes del piloto.",
        "Jhostin Galarza"
       ],
       [
        "I-10 Estudiantes",
        {
         "x": "Mantener informados",
         "fill": "naranja"
        },
        "Los tutores explican el propósito del seguimiento; el nivel de riesgo de un estudiante nunca se publica.",
        "Docentes tutores"
       ],
       [
        "I-11 Padres de familia y apoderados",
        {
         "x": "Mantener informados",
         "fill": "naranja"
        },
        "Comunicado de la Dirección sobre el proyecto y el uso de los datos antes de cargar información real; mensajes en lenguaje simple.",
        "Dirección, con apoyo del equipo"
       ],
       [
        "I-12 Equipo del proyecto",
        {
         "x": "Gestionar de cerca",
         "fill": "verde"
        },
        "Reunión diaria; revisión y retrospectiva al cierre de cada sprint.",
        "Jhostin Galarza"
       ],
       [
        "I-13 Docente asesor del curso",
        {
         "x": "Gestionar de cerca",
         "fill": "verde"
        },
        "Presentar avances en clase, mantener el blog al día e incorporar sus observaciones.",
        "Equipo del proyecto"
       ],
       [
        "I-14 Cubicol (proveedor)",
        {
         "x": "Mantener satisfechos",
         "fill": "azul"
        },
        "Consultar, a través de la gestora, las opciones de exportación de datos.",
        "Jadira Vasquez"
       ],
       [
        "I-15 Proveedores de nube e internet",
        {
         "x": "Monitorear",
         "fill": "amarillo"
        },
        "Revisar límites y condiciones de servicio en cada sprint.",
        "Jadira Vasquez"
       ],
       [
        "I-16 UGEL 01 y MINEDU",
        {
         "x": "Mantener satisfechos",
         "fill": "azul"
        },
        "Verificar que el sistema no altere los registros oficiales de evaluación.",
        "Jhostin Galarza"
       ],
       [
        "I-17 Autoridad de Protección de Datos Personales",
        {
         "x": "Mantener satisfechos",
         "fill": "azul"
        },
        "Aplicar la lista de verificación de datos personales antes de cargar datos reales.",
        "Jadira Vasquez y Helber Perez"
       ]
      ],
      "titulo": "Plan de acción por interesado",
      "compacta": true
     }
    ]
   },
   {
    "titulo": "4. Expectativas que hay que gestionar",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Expectativa",
       "De quién",
       "Situación en el alcance",
       "Cómo se gestiona"
      ],
      "anchos": [
       26,
       16,
       28,
       30
      ],
      "filas": [
       [
        "Registrar la asistencia con código QR.",
        "Promotora Directora",
        "Fuera del alcance de esta versión.",
        "Explicarlo en la reunión de inicio y anotarlo como candidato a una segunda versión."
       ],
       [
        "Guías para que los padres ingresen a Cubicol.",
        "Promotora Directora",
        "Ofrecido en la entrevista; no figura en ninguna línea base (IN-10).",
        "Decidir con la Dirección: solicitud de cambio o descarte formal."
       ],
       [
        "Juegos interactivos para los estudiantes en la plataforma.",
        "Promotora Directora",
        "Fuera del alcance: Cubicol es de un tercero.",
        "Aclararlo en la reunión de inicio."
       ],
       [
        "Que el sistema no aumente la carga de trabajo.",
        "Docentes y gestora de Cubicol",
        "Requisito de usabilidad RNF-01.",
        "Mostrar el tablero en el Sprint 4 y medir el tiempo de uso en el piloto."
       ],
       [
        "Aviso inmediato a los padres.",
        "Dirección y padres",
        "El sistema calcula el riesgo cada semana; el comunicado sale en 24 horas.",
        "Explicar la frecuencia semanal y no prometer tiempo real."
       ],
       [
        "Predicciones exactas.",
        "Todos los usuarios",
        "El modelo no garantiza 100 % de acierto.",
        "Presentar el nivel de riesgo como una señal para revisar el caso, no como un diagnóstico."
       ]
      ],
      "titulo": "Expectativas y su tratamiento"
     }
    ]
   },
   {
    "titulo": "5. Reglas para mantener el plan",
    "apaisada": false,
    "bloques": [
     {
      "t": "ul",
      "items": [
       "El director del proyecto revisa la matriz al cierre de cada sprint y registra el resultado en el informe de seguimiento (INT-05).",
       "Un interesado nuevo se agrega al registro en cuanto se identifica.",
       "Si un interesado clave baja de nivel o aparece resistencia, se registra un incidente.",
       "Las estrategias individuales son de uso interno del equipo: la versión que se publica en el blog describe cargos, no personas."
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "INT-04",
  "titulo": "Bitácora de involucramiento y reglas básicas",
  "dominio": "Interesados",
  "area": "Ejecución",
  "proceso": "Gestionar el involucramiento de los interesados",
  "salida": "Registro de las actividades de involucramiento y actualizaciones de los documentos del proyecto",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Registra lo que efectivamente se ha hecho con los interesados, con su evidencia, y fija las reglas de trato que el equipo sigue con el colegio.",
  "carpeta": "02 - Interesados/2.3 Gestionar",
  "pdf": "/documentos/INT-04-bitacora-de-involucramiento-y-reglas-basicas.pdf",
  "docx": "/documentos/INT-04-bitacora-de-involucramiento-y-reglas-basicas.docx",
  "secciones": [
   {
    "titulo": "1. Reglas básicas",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El equipo acordó estas reglas para su relación con los interesados. Se presentarán a la Dirección en la reunión de inicio."
     },
     {
      "t": "ul",
      "items": [
       "Toda visita al colegio se coordina antes con la Dirección y respeta el horario de clases.",
       "Las reuniones tienen un objetivo, duran lo previsto y terminan con acuerdos escritos.",
       "Se graba o se fotografía solo con permiso de quienes aparecen.",
       "Lo que un docente o un padre comenta en una entrevista no se atribuye a su nombre en documentos públicos.",
       "No se promete nada que no esté en el alcance; un pedido nuevo se anota y se evalúa como solicitud de cambio.",
       "El integrante del equipo que es docente del colegio no responde encuestas ni valida entregables en nombre de los docentes.",
       "Ante un desacuerdo, primero se escucha, luego se revisa el dato y, si no hay acuerdo, se eleva según el plan de comunicaciones."
      ]
     }
    ]
   },
   {
    "titulo": "2. Actividades realizadas",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Fecha",
       "Actividad",
       "Interesados",
       "Resultado",
       "Evidencia"
      ],
      "anchos": [
       11,
       23,
       16,
       32,
       18
      ],
      "filas": [
       [
        "24/04/2026",
        "Visita de campo y entrevista semiestructurada",
        "I-01 Promotora Directora",
        "Se confirmó que la asistencia y las incidencias se registran en físico, que las notas están en Cubicol y que pocos padres ingresan a la plataforma. La Dirección expresó disposición a recibir propuestas y a facilitar datos.",
        "Transcripción, video y fotografías"
       ],
       [
        "24/04/2026",
        "Recojo de documentos del colegio",
        "I-01 Promotora Directora",
        "Organigrama y formato de reporte de incidencia escolar.",
        "Fotografías de los documentos"
       ],
       [
        "15/05/2026",
        "Encuesta en línea a docentes",
        "I-05 Docentes (6 de 16)",
        "Los 6 reconocen detección tardía; 5 de 6 usarían una plataforma de monitoreo.",
        "Hoja de respuestas y gráficos"
       ],
       [
        "15/05/2026",
        "Validación del cuestionario por juicio de dos expertos",
        "Dos jueces",
        "88 de 100 puntos: validez de 0.88.",
        "Matriz de juicio de expertos"
       ],
       [
        "05/07/2026",
        "Recepción de registros de notas",
        "I-05 Docentes",
        "Registros de exámenes de marzo, abril y primer trimestre de 2026 de varios cursos y grados.",
        "Hoja de cálculo y fotografías, en custodia del equipo (IN-04)"
       ],
       [
        "10/10/2026",
        "Tormenta de ideas y análisis de interesados",
        "I-12 Equipo del proyecto",
        "Registro ampliado a 17 interesados y matriz de involucramiento.",
        "INT-01 e INT-02"
       ]
      ],
      "titulo": "Actividades de involucramiento realizadas",
      "compacta": true
     },
     {
      "t": "nota",
      "tipo": "aviso",
      "x": "La segunda entrevista, dirigida al encargado de soporte de TI y a la gestora de Cubicol, tiene su guía preparada desde mayo de 2026 y no se ha realizado (IN-05)."
     }
    ]
   },
   {
    "titulo": "3. Asuntos surgidos del trato con los interesados",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Asunto",
       "Origen",
       "Tratamiento"
      ],
      "anchos": [
       44,
       22,
       34
      ],
      "filas": [
       [
        "La Dirección mostró interés en registrar la asistencia con código QR, que no está en el alcance.",
        "Entrevista",
        "Expectativa por gestionar (INT-02)."
       ],
       [
        "El equipo ofreció guías para que los padres ingresen a Cubicol.",
        "Entrevista",
        "Incidente IN-10."
       ],
       [
        "Los docentes usan correos personales; no hay correo institucional.",
        "Entrevista",
        "Incidente IN-07 y solicitud SC-09."
       ],
       [
        "Se mencionó lentitud reciente del internet del colegio.",
        "Entrevista",
        "Supuesto S-09."
       ],
       [
        "La antigüedad del colegio se registró con dos valores, 24 y 25 años.",
        "Entrevista y cuestionario",
        "Confirmar con la Dirección."
       ]
      ],
      "titulo": "Asuntos derivados"
     }
    ]
   },
   {
    "titulo": "4. Próximas actividades",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Fecha prevista",
       "Actividad",
       "Interesados",
       "Responsable"
      ],
      "anchos": [
       20,
       40,
       24,
       16
      ],
      "filas": [
       [
        "12/10/2026",
        "Reunión de inicio: acta de constitución, calendario, Product Owner y tratamiento de datos.",
        "I-01, I-02, I-03",
        "Jhostin Galarza"
       ],
       [
        "20/10/2026",
        "Segunda entrevista y acuerdo sobre las exportaciones de datos.",
        "I-07, I-08",
        "Jadira Vasquez"
       ],
       [
        "28/10/2026",
        "Taller de validación de variables.",
        "I-05, I-06",
        "Helber Perez"
       ],
       [
        "03/11/2026",
        "Entrevista sobre el registro de incidencias.",
        "I-04",
        "Jadira Vasquez"
       ],
       [
        "06/11/2026",
        "Revisión del Sprint 1.",
        "I-01, I-03",
        "Equipo del proyecto"
       ],
       [
        "11/12/2026",
        "Comunicado a los apoderados sobre el proyecto y los datos.",
        "I-11",
        "Dirección"
       ]
      ],
      "titulo": "Actividades planificadas para el Sprint 1 y siguientes"
     }
    ]
   }
  ]
 },
 {
  "id": "INT-05",
  "titulo": "Informe de seguimiento del involucramiento N.º 1",
  "dominio": "Interesados",
  "area": "Monitoreo y control",
  "proceso": "Monitorear el involucramiento de los interesados",
  "salida": "Información de desempeño del trabajo sobre el involucramiento",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Compara el nivel de involucramiento actual de cada interesado con el deseado, con la evidencia que lo sustenta, y define las acciones para cerrar la distancia.",
  "carpeta": "02 - Interesados/2.4 Monitorear",
  "pdf": "/documentos/INT-05-informe-de-seguimiento-del-involucramiento-n-1.pdf",
  "docx": "/documentos/INT-05-informe-de-seguimiento-del-involucramiento-n-1.docx",
  "secciones": [
   {
    "titulo": "1. Corte y método",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Fecha de corte: 10/10/2026, antes del inicio del Sprint 1. El nivel actual de cada interesado se asignó solo con evidencia: lo dicho en la entrevista, las respuestas de la encuesta o el hecho de no haber sido contactado. Esta medición reemplaza a los porcentajes de avance del registro anterior, que no tenían un método de cálculo."
     }
    ]
   },
   {
    "titulo": "2. Nivel actual frente al deseado",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Interesado",
       "Nivel actual",
       "Evidencia",
       "Nivel deseado",
       "Distancia",
       "Acción"
      ],
      "anchos": [
       16,
       10,
       28,
       10,
       8,
       28
      ],
      "filas": [
       [
        "I-01 Promotora Directora",
        {
         "x": "De apoyo",
         "fill": "amarillo",
         "align": "center"
        },
        "Entrevista del 24/04/2026: disposición a recibir propuestas y a facilitar los datos que convenga.",
        {
         "x": "Líder",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "1 nivel",
         "fill": "amarillo",
         "align": "center"
        },
        "Reunión de inicio y firma del acta; revisión al cierre de cada sprint; definir con ella al Product Owner y el tratamiento de datos."
       ],
       [
        "I-02 Subdirector",
        {
         "x": "Desconocedor",
         "fill": "amarillo",
         "align": "center"
        },
        "Figura en el organigrama; no ha sido contactado.",
        {
         "x": "De apoyo",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "3 niveles",
         "fill": "rojo",
         "align": "center"
        },
        "Presentarle el proyecto en la reunión de inicio."
       ],
       [
        "I-03 Coordinación académica",
        {
         "x": "Desconocedor",
         "fill": "amarillo",
         "align": "center"
        },
        "Figura en el organigrama; no ha sido contactada.",
        {
         "x": "Líder",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "4 niveles",
         "fill": "rojo",
         "align": "center"
        },
        "Pedir a la Dirección su designación como Product Owner; taller de priorización en el Sprint 1."
       ],
       [
        "I-04 Jefa de Normas",
        {
         "x": "Desconocedor",
         "fill": "amarillo",
         "align": "center"
        },
        "Figura en el organigrama; el formato de incidencias es impreso.",
        {
         "x": "De apoyo",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "3 niveles",
         "fill": "rojo",
         "align": "center"
        },
        "Entrevista sobre el registro de incidencias en el Sprint 1."
       ],
       [
        "I-05 Docentes tutores y auxiliares",
        {
         "x": "Neutral",
         "fill": "amarillo",
         "align": "center"
        },
        "Encuesta del 15/05/2026: 5 de 6 usarían la plataforma. Los otros 10 no conocen el proyecto y ninguno ha visto el sistema.",
        {
         "x": "De apoyo",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "1 nivel",
         "fill": "amarillo",
         "align": "center"
        },
        "Validar variables (semana 3), revisar el tablero (semana 15), piloto (semanas 18 y 19) y capacitación (semana 23)."
       ],
       [
        "I-06 Responsable de psicología",
        {
         "x": "Desconocedor",
         "fill": "amarillo",
         "align": "center"
        },
        "Mencionada en la entrevista; no ha sido contactada.",
        {
         "x": "De apoyo",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "3 niveles",
         "fill": "rojo",
         "align": "center"
        },
        "Reunión para definir qué información necesita de cada alerta (Sprint 1)."
       ],
       [
        "I-07 Gestora de la plataforma Cubicol",
        {
         "x": "Neutral",
         "fill": "amarillo",
         "align": "center"
        },
        "Identificada en la entrevista; la segunda entrevista (guía lista) no se ha realizado.",
        {
         "x": "De apoyo",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "1 nivel",
         "fill": "amarillo",
         "align": "center"
        },
        "Realizar la segunda entrevista; acordar formato y frecuencia de las exportaciones."
       ],
       [
        "I-08 Encargado de soporte de TI",
        {
         "x": "Neutral",
         "fill": "amarillo",
         "align": "center"
        },
        "Identificado en la entrevista; no ha sido entrevistado.",
        {
         "x": "De apoyo",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "1 nivel",
         "fill": "amarillo",
         "align": "center"
        },
        "Segunda entrevista; revisión de la red del colegio; transferencia de conocimiento en el Sprint 6."
       ],
       [
        "I-09 Personal administrativo",
        {
         "x": "Desconocedor",
         "fill": "amarillo",
         "align": "center"
        },
        "Figura en el organigrama.",
        {
         "x": "Neutral",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "2 niveles",
         "fill": "amarillo",
         "align": "center"
        },
        "Informar al inicio del proyecto y antes del piloto."
       ],
       [
        "I-10 Estudiantes",
        {
         "x": "Desconocedor",
         "fill": "amarillo",
         "align": "center"
        },
        "No participan directamente en el proyecto.",
        {
         "x": "Neutral",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "2 niveles",
         "fill": "amarillo",
         "align": "center"
        },
        "Los tutores explican el propósito del seguimiento; el nivel de riesgo de un estudiante nunca se publica."
       ],
       [
        "I-11 Padres de familia y apoderados",
        {
         "x": "Desconocedor",
         "fill": "amarillo",
         "align": "center"
        },
        "La directora estima que solo alrededor del 40 % ingresa a Cubicol; no conocen el proyecto.",
        {
         "x": "De apoyo",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "3 niveles",
         "fill": "rojo",
         "align": "center"
        },
        "Comunicado de la Dirección sobre el proyecto y el uso de los datos antes de cargar información real; mensajes en lenguaje simple."
       ],
       [
        "I-12 Equipo del proyecto",
        {
         "x": "Líder",
         "fill": "verde",
         "align": "center"
        },
        "Responsable de todos los entregables.",
        {
         "x": "Líder",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "En el nivel",
         "fill": "verde",
         "align": "center"
        },
        "Reunión diaria; revisión y retrospectiva al cierre de cada sprint."
       ],
       [
        "I-13 Docente asesor del curso",
        {
         "x": "De apoyo",
         "fill": "verde",
         "align": "center"
        },
        "Brinda observaciones en cada presentación.",
        {
         "x": "De apoyo",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "En el nivel",
         "fill": "verde",
         "align": "center"
        },
        "Presentar avances en clase, mantener el blog al día e incorporar sus observaciones."
       ],
       [
        "I-14 Cubicol (proveedor)",
        {
         "x": "Desconocedor",
         "fill": "amarillo",
         "align": "center"
        },
        "No ha sido contactado; no se ha comprobado que ofrezca una API.",
        {
         "x": "Neutral",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "2 niveles",
         "fill": "amarillo",
         "align": "center"
        },
        "Consultar, a través de la gestora, las opciones de exportación de datos."
       ],
       [
        "I-15 Proveedores de nube e internet",
        {
         "x": "Neutral",
         "fill": "verde",
         "align": "center"
        },
        "Servicios contratados con términos estándar.",
        {
         "x": "Neutral",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "En el nivel",
         "fill": "verde",
         "align": "center"
        },
        "Revisar límites y condiciones de servicio en cada sprint."
       ],
       [
        "I-16 UGEL 01 y MINEDU",
        {
         "x": "Desconocedor",
         "fill": "amarillo",
         "align": "center"
        },
        "La UGEL N.° 01 encabeza el organigrama del colegio.",
        {
         "x": "Neutral",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "2 niveles",
         "fill": "amarillo",
         "align": "center"
        },
        "Verificar que el sistema no altere los registros oficiales de evaluación."
       ],
       [
        "I-17 Autoridad de Protección de Datos Personales",
        {
         "x": "Desconocedor",
         "fill": "amarillo",
         "align": "center"
        },
        "No interviene salvo denuncia o fiscalización.",
        {
         "x": "Neutral",
         "fill": "azul",
         "align": "center"
        },
        {
         "x": "2 niveles",
         "fill": "amarillo",
         "align": "center"
        },
        "Aplicar la lista de verificación de datos personales antes de cargar datos reales."
       ]
      ],
      "titulo": "Seguimiento del involucramiento al 10/10/2026",
      "compacta": true
     }
    ]
   },
   {
    "titulo": "3. Indicadores",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Indicador",
       "Valor",
       "Lectura"
      ],
      "anchos": [
       44,
       16,
       40
      ],
      "filas": [
       [
        "Interesados en el nivel deseado",
        "3 de 17",
        "Es el punto de partida; la mayoría aún no conoce el proyecto."
       ],
       [
        "Interesados clave en el nivel deseado",
        "2 de 8",
        "Solo el equipo y el docente asesor."
       ],
       [
        "Interesados con contacto directo documentado",
        "4 de 17",
        "Directora, docentes encuestados, equipo y docente asesor."
       ],
       [
        "Interesados que no conocen el proyecto",
        "10 de 17",
        "Se atienden con la reunión de inicio y las entrevistas del Sprint 1."
       ],
       [
        "Interesados reticentes",
        "0",
        "No se ha identificado resistencia."
       ]
      ],
      "titulo": "Indicadores de involucramiento"
     }
    ]
   },
   {
    "titulo": "4. Conclusiones y acciones",
    "apaisada": false,
    "bloques": [
     {
      "t": "ul",
      "items": [
       "El apoyo de la Dirección es la principal fortaleza, pero todavía no se traduce en decisiones: acta firmada, Product Owner designado y datos entregados.",
       "Quienes controlan los datos y la operación futura (gestora de Cubicol y encargado de TI) no han sido entrevistados; es la acción más urgente del Sprint 1.",
       "El conocimiento del proyecto entre los docentes viene solo de la encuesta. Ninguno ha visto el sistema.",
       "No se generan solicitudes de cambio a partir de este seguimiento. El ofrecimiento de guías para padres queda como incidente IN-10."
      ]
     },
     {
      "t": "p",
      "x": "La próxima medición se hará al cierre del Sprint 1, el 06/11/2026."
     }
    ]
   }
  ]
 },
 {
  "id": "INT-03",
  "titulo": "Plan de gestión de las comunicaciones",
  "dominio": "Interesados",
  "area": "Planificación",
  "proceso": "Planificar la gestión de las comunicaciones",
  "salida": "Plan de gestión de las comunicaciones",
  "version": "1.1",
  "fecha": "10/10/2026",
  "resumen": "Establece qué información necesita cada interesado, quién la envía, por qué canal, con qué frecuencia y en qué fechas; los formatos que se usan, las reglas para proteger los datos de los estudiantes y cómo se mide si la comunicación funciona.",
  "carpeta": "02 - Interesados/2.5 Comunicaciones",
  "pdf": "/documentos/INT-03-plan-de-gestion-de-las-comunicaciones.pdf",
  "docx": "/documentos/INT-03-plan-de-gestion-de-las-comunicaciones.docx",
  "secciones": [
   {
    "titulo": "1. Objetivo y principios",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El plan asegura que cada interesado reciba la información que necesita para decidir o actuar, a tiempo y por un canal que realmente use."
     },
     {
      "t": "ul",
      "items": [
       "**Canal real.** Se usa el medio que cada grupo ya utiliza: reunión presencial con la Dirección, WhatsApp y agenda con las familias, correo personal con los docentes.",
       "**Lenguaje claro.** Nada de términos técnicos con docentes y familias: «riesgo alto» se explica como «necesita atención esta semana».",
       "**Constancia.** Toda comunicación que implique una decisión deja un registro: acta, mensaje o documento.",
       "**Reserva.** Los datos de un estudiante solo se comparten con quien debe actuar sobre su caso."
      ]
     },
     {
      "t": "tabla",
      "cols": [
       "Proceso",
       "Qué hace",
       "Documento"
      ],
      "anchos": [
       34,
       42,
       24
      ],
      "filas": [
       [
        "Planificar la gestión de las comunicaciones",
        "Define qué, a quién, cómo y cuándo se comunica.",
        "Este plan (INT-03)"
       ],
       [
        "Gestionar las comunicaciones",
        "Envía la información y deja constancia.",
        "Registro de comunicaciones (INT-06)"
       ],
       [
        "Monitorear las comunicaciones",
        "Comprueba que la información llegó y sirvió.",
        "Informe de monitoreo (INT-07) y tablero del blog"
       ]
      ],
      "titulo": "Los tres procesos de comunicaciones y sus documentos"
     }
    ]
   },
   {
    "titulo": "2. Requisitos de información de los interesados",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El análisis parte del registro de interesados (INT-01). Para cada grupo se definió qué necesita saber y en qué forma le sirve recibirlo."
     },
     {
      "t": "tabla",
      "cols": [
       "Interesado",
       "Qué necesita saber",
       "Forma que le sirve",
       "Momento"
      ],
      "anchos": [
       22,
       36,
       24,
       18
      ],
      "filas": [
       [
        "Patrocinadora (I-01)",
        "Estado del proyecto, decisiones que se le piden, cambios a las líneas base y situación de los datos personales.",
        "Resumen de una página y reunión breve.",
        "Cierre de cada sprint y cuando haya una decisión"
       ],
       [
        "Subdirector y coordinación académica (I-02, I-03)",
        "Qué se entrega en cada sprint, qué deben priorizar y qué deben aceptar.",
        "Demostración del sistema y acta.",
        "Cada cuatro semanas"
       ],
       [
        "Docentes tutores, Jefa de Normas y psicología (I-04, I-05, I-06)",
        "Qué hará el sistema, qué se les pide y cómo se lee una alerta.",
        "Taller presencial, en lenguaje sencillo.",
        "Semana 3, Sprint 4 y piloto"
       ],
       [
        "Gestora de Cubicol y encargado de TI (I-07, I-08)",
        "Qué datos se piden, en qué formato y para qué fecha; qué deberán operar después.",
        "Pedido escrito breve y reunión.",
        "Sprints 1 a 3 y Sprint 6"
       ],
       [
        "Padres y apoderados (I-11)",
        "Qué datos de sus hijos se usan, con qué fin y cuáles son sus derechos.",
        "Comunicado del colegio.",
        "Antes de cargar datos reales"
       ],
       [
        "Estudiantes (I-10)",
        "Reciben la información a través de sus tutores.",
        "Sin comunicación directa del proyecto.",
        "—"
       ],
       [
        "Docente asesor (I-13)",
        "Avance frente al plan y aplicación de la guía.",
        "Blog y presentación en clase.",
        "Cada semana"
       ],
       [
        "Equipo del proyecto (I-12)",
        "Tareas, impedimentos y cambios aprobados.",
        "Reunión breve y tablero de tareas.",
        "Cada día"
       ],
       [
        "Personal administrativo, proveedores y reguladores (I-09, I-14 a I-17)",
        "No requieren información periódica; se consultan sus normas y condiciones de servicio.",
        "Consulta puntual.",
        "Cuando haga falta"
       ]
      ],
      "titulo": "Requisitos de información por interesado",
      "compacta": true
     }
    ]
   },
   {
    "titulo": "3. Matriz de comunicaciones",
    "apaisada": true,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Código",
       "Qué se comunica",
       "A quién",
       "Quién lo emite",
       "Canal",
       "Frecuencia",
       "Constancia"
      ],
      "anchos": [
       7,
       20,
       17,
       12,
       16,
       14,
       14
      ],
      "filas": [
       [
        "PC-01",
        "Informe de desempeño del proyecto",
        "Patrocinadora, Product Owner y docente asesor",
        "Jhostin Galarza",
        "Reunión presencial y documento PDF",
        "Al cierre de cada sprint",
        "Informe (GOB-09 y siguientes)"
       ],
       [
        "PC-02",
        "Demostración de avances (revisión del sprint)",
        "Patrocinadora, coordinación y tutores invitados",
        "Equipo del proyecto",
        "Reunión presencial en el colegio",
        "Cada cuatro semanas",
        "Acta de aceptación (ALC-04)"
       ],
       [
        "PC-03",
        "Coordinación del trabajo diario",
        "Equipo del proyecto",
        "Jhostin Galarza",
        "Reunión breve y grupo de mensajería del equipo",
        "Diaria, 15 minutos",
        "Tablero de tareas"
       ],
       [
        "PC-04",
        "Pedidos y entregas de datos",
        "Gestora de Cubicol y encargado de TI",
        "Jadira Vasquez",
        "Presencial; mensaje directo para coordinar",
        "Semanal en los Sprints 1 a 3",
        "Registro de entrega de datos"
       ],
       [
        "PC-05",
        "Validación de variables y del tablero",
        "Docentes tutores",
        "Helber Perez y Carlos Curo",
        "Taller presencial",
        "Semanas 3 y 15, y piloto",
        "Lista de asistencia y acuerdos"
       ],
       [
        "PC-06",
        "Avance académico del proyecto",
        "Docente asesor",
        "Equipo del proyecto",
        "Clase y blog del proyecto",
        "Semanal",
        "Blog actualizado"
       ],
       [
        "PC-07",
        "Aviso sobre el proyecto y el uso de los datos",
        "Padres y apoderados",
        "Dirección; redacta el equipo",
        "Comunicado impreso o agenda, y WhatsApp del colegio",
        "Antes de cargar datos reales y al iniciar el piloto",
        "Comunicado y cargo de recepción"
       ],
       [
        "PC-08",
        "Solicitudes de cambio y su decisión",
        "Solicitante, patrocinadora y Product Owner",
        "Carlos Curo",
        "Reunión y documento",
        "Cuando ocurre",
        "Registro de cambios (GOB-10)"
       ],
       [
        "PC-09",
        "Incidentes de prioridad alta",
        "Product Owner y afectados",
        "Jhostin Galarza",
        "Llamada o mensaje directo",
        "En menos de 24 horas",
        "Registro de incidentes (GOB-06)"
       ],
       [
        "PC-10",
        "Capacitación y manuales",
        "Tutores, coordinación y encargado de TI",
        "Jhostin Galarza",
        "Sesión presencial de 2 horas y manuales",
        "Semana 23",
        "Lista de asistencia"
       ],
       [
        "PC-11",
        "Cierre del proyecto",
        "Todos los interesados del colegio y docente asesor",
        "Jhostin Galarza",
        "Reunión de cierre",
        "23/04/2027",
        "Acta de cierre e informe final"
       ]
      ],
      "titulo": "Matriz de comunicaciones del proyecto",
      "compacta": true
     }
    ]
   },
   {
    "titulo": "4. Calendario de comunicaciones",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "La matriz se convierte en fechas concretas en el registro de comunicaciones (INT-06). Estas son las comunicaciones programadas al 10/10/2026; el registro y el tablero del blog muestran su estado actualizado."
     },
     {
      "t": "tabla",
      "cols": [
       "Fecha",
       "Comunicación",
       "Destinatarios",
       "Responsable",
       "Sprint"
      ],
      "anchos": [
       16,
       40,
       20,
       14,
       10
      ],
      "filas": [
       [
        "12/10/2026",
        "Reunión de inicio: acta de constitución, calendario, Product Owner y tratamiento de datos",
        "I-01, I-02, I-03",
        "Jhostin Galarza",
        {
         "x": "1",
         "align": "center"
        }
       ],
       [
        "16/10/2026",
        "Avance semanal al docente asesor y demostración del entregable del sistema según la EDT",
        "I-13",
        "Equipo del proyecto",
        {
         "x": "1",
         "align": "center"
        }
       ],
       [
        "20/10/2026",
        "Segunda entrevista y acuerdo sobre las exportaciones de datos de Cubicol",
        "I-07, I-08",
        "Jadira Vasquez",
        {
         "x": "1",
         "align": "center"
        }
       ],
       [
        "23/10/2026",
        "Avance semanal al docente asesor",
        "I-13",
        "Equipo del proyecto",
        {
         "x": "1",
         "align": "center"
        }
       ],
       [
        "28/10/2026",
        "Taller de validación de las variables del modelo",
        "I-05, I-06",
        "Helber Perez",
        {
         "x": "1",
         "align": "center"
        }
       ],
       [
        "30/10/2026",
        "Avance semanal al docente asesor",
        "I-13",
        "Equipo del proyecto",
        {
         "x": "1",
         "align": "center"
        }
       ],
       [
        "03/11/2026",
        "Entrevista sobre el registro de incidencias",
        "I-04",
        "Jadira Vasquez",
        {
         "x": "1",
         "align": "center"
        }
       ],
       [
        "06/11/2026",
        "Revisión del Sprint 1 e informe de desempeño: arquitectura y variables del modelo",
        "I-01, I-03, I-13",
        "Equipo del proyecto",
        {
         "x": "1",
         "align": "center"
        }
       ],
       [
        "04/12/2026",
        "Revisión del Sprint 2 e informe de desempeño: base de datos centralizada",
        "I-01, I-03, I-13",
        "Equipo del proyecto",
        {
         "x": "2",
         "align": "center"
        }
       ],
       [
        "11/12/2026",
        "Comunicado a los apoderados sobre el proyecto y el uso de los datos",
        "I-11",
        "Dirección; redacta el equipo",
        {
         "x": "3",
         "align": "center"
        }
       ],
       [
        "30/12/2026",
        "Revisión del Sprint 3 e informe de desempeño: modelo validado",
        "I-01, I-03, I-13",
        "Equipo del proyecto",
        {
         "x": "3",
         "align": "center"
        }
       ],
       [
        "20/01/2027",
        "Convocatoria a tres docentes tutores para el piloto de marzo",
        "I-05, I-03",
        "Jhostin Galarza",
        {
         "x": "4",
         "align": "center"
        }
       ],
       [
        "29/01/2027",
        "Revisión del Sprint 4 e informe de desempeño: sistema integrado con alertas y tablero",
        "I-01, I-03, I-13",
        "Equipo del proyecto",
        {
         "x": "4",
         "align": "center"
        }
       ],
       [
        "24/03/2027",
        "Revisión del Sprint 5 e informe de desempeño: resultado de las pruebas y del piloto",
        "I-01, I-03, I-13",
        "Equipo del proyecto",
        {
         "x": "5",
         "align": "center"
        }
       ],
       [
        "14/04/2027",
        "Capacitación de dos horas a tutores y coordinadores, y entrega de manuales",
        "I-05, I-03, I-08",
        "Jhostin Galarza",
        {
         "x": "6",
         "align": "center"
        }
       ],
       [
        "23/04/2027",
        "Reunión de cierre del proyecto e informe final",
        "I-01, I-02, I-03, I-13",
        "Jhostin Galarza",
        {
         "x": "6",
         "align": "center"
        }
       ]
      ],
      "titulo": "Comunicaciones programadas",
      "compacta": true,
      "fuente": "Los códigos de los destinatarios corresponden al registro de interesados (INT-01)."
     }
    ]
   },
   {
    "titulo": "5. Canales y tecnología",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Canal",
       "Se usa para",
       "Consideraciones"
      ],
      "anchos": [
       24,
       34,
       42
      ],
      "filas": [
       [
        "Reunión presencial en el colegio",
        "Decisiones, demostraciones, talleres y capacitación.",
        "Se coordina con la Dirección según el horario escolar."
       ],
       [
        "WhatsApp",
        "Coordinación con la Dirección y avisos generales a las familias a través del colegio.",
        "Es el canal que el colegio ya usa con los padres. No se envían por este medio notas ni niveles de riesgo."
       ],
       [
        "Correo electrónico personal",
        "Alertas del sistema a los docentes y envío de informes.",
        "El colegio no tiene correo institucional: se requiere la lista de direcciones autorizadas (SC-09)."
       ],
       [
        "Comunicado impreso o agenda",
        "Información a los apoderados y consentimiento.",
        "Llega también a quienes no usan plataformas."
       ],
       [
        "Blog del proyecto",
        "Avance público, documentos de gestión y tablero de comunicaciones.",
        "Es público: no contiene datos personales."
       ],
       [
        "Repositorio en GitHub",
        "Código, contenido de los documentos y control de cambios técnicos.",
        "Es público: no contiene datos del colegio."
       ],
       [
        "Panel web del sistema",
        "Alertas y fichas de estudiantes.",
        "Acceso con usuario y contraseña, según el rol."
       ]
      ],
      "titulo": "Canales de comunicación"
     }
    ]
   },
   {
    "titulo": "6. Comunicaciones del producto",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Además de las comunicaciones del proyecto, el sistema emitirá sus propias comunicaciones una vez en operación. Se describen aquí porque forman parte de lo que los interesados recibirán."
     },
     {
      "t": "tabla",
      "cols": [
       "Comunicación",
       "Destinatario",
       "Momento",
       "Contenido"
      ],
      "anchos": [
       22,
       20,
       24,
       34
      ],
      "filas": [
       [
        "Alerta de riesgo alto",
        "Docente tutor y coordinación",
        "Dentro de las 24 horas siguientes al cálculo semanal",
        "Estudiante, nivel de riesgo y variables que lo explican."
       ],
       [
        "Resumen de alertas",
        "Docente, al ingresar al panel",
        "En cada ingreso",
        "Estudiantes en riesgo alto y medio, con acceso a su ficha."
       ],
       [
        "Comunicado al apoderado",
        "Padre o apoderado",
        "Dentro de las 24 horas, a través del colegio",
        "Áreas con dificultad y recomendaciones de apoyo, en lenguaje simple."
       ],
       [
        "Reporte por unidad",
        "Coordinación y dirección",
        "Al cierre de cada unidad",
        "Estudiantes en riesgo por aula y grado, y comparación con el periodo anterior."
       ]
      ],
      "titulo": "Comunicaciones que emitirá el sistema"
     }
    ]
   },
   {
    "titulo": "7. Formatos",
    "apaisada": false,
    "bloques": [
     {
      "t": "h",
      "x": "Acta de reunión"
     },
     {
      "t": "kv",
      "filas": [
       [
        "Reunión N.° y tipo",
        ""
       ],
       [
        "Fecha, hora y lugar",
        ""
       ],
       [
        "Convocó",
        ""
       ],
       [
        "Asistentes",
        ""
       ],
       [
        "Objetivo",
        ""
       ],
       [
        "Temas tratados",
        ""
       ],
       [
        "Acuerdos (qué, quién y cuándo)",
        ""
       ],
       [
        "Próxima reunión",
        ""
       ]
      ]
     },
     {
      "t": "h",
      "x": "Informe de desempeño"
     },
     {
      "t": "p",
      "x": "Sigue la estructura del informe N.º 1 (GOB-09): datos del informe, resumen, estado por dominio, avance de los entregables, hitos próximos y decisiones que se solicitan."
     },
     {
      "t": "h",
      "x": "Registro de una comunicación"
     },
     {
      "t": "p",
      "x": "Cada comunicación se anota en el registro (INT-06) con estos datos: fecha, tipo, asunto, quién la emite, interesados que participan, canal, estado y constancia."
     }
    ]
   },
   {
    "titulo": "8. Reglas de reserva de la información",
    "apaisada": false,
    "bloques": [
     {
      "t": "ul",
      "items": [
       "El nivel de riesgo de un estudiante se comunica solo a su tutor, a la coordinación, a psicología y a la dirección; al apoderado se le comunica el de su hijo.",
       "No se comparten listas de estudiantes ni notas por grupos de mensajería.",
       "Los archivos con datos reales no salen del colegio sin anonimizar y nunca se publican.",
       "Las fotos y los videos donde aparecen personas se publican solo con su autorización."
      ]
     }
    ]
   },
   {
    "titulo": "9. Monitoreo, escalamiento y actualización",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El director del proyecto revisa el registro cada semana y emite un informe de monitoreo al cierre de cada sprint. Los indicadores son estos:"
     },
     {
      "t": "tabla",
      "cols": [
       "Indicador",
       "Cómo se calcula",
       "Meta"
      ],
      "anchos": [
       30,
       46,
       24
      ],
      "filas": [
       [
        "Cumplimiento del calendario",
        "Comunicaciones realizadas entre las que ya debían haberse realizado.",
        "90 % o más"
       ],
       [
        "Comunicaciones vencidas",
        "Programadas cuya fecha pasó hace más de una semana sin registrarse como realizadas.",
        "Cero"
       ],
       [
        "Cobertura de interesados clave",
        "Interesados clave con al menos una comunicación realizada.",
        "Todos al cierre del Sprint 1"
       ],
       [
        "Constancia",
        "Comunicaciones realizadas que tienen evidencia.",
        "100 %"
       ],
       [
        "Respuesta a los pedidos",
        "Días entre un pedido al colegio y su respuesta.",
        "5 días hábiles o menos"
       ]
      ],
      "titulo": "Indicadores de las comunicaciones"
     },
     {
      "t": "p",
      "x": "Un asunto sin respuesta en dos días hábiles se eleva del responsable al director del proyecto, de este al Product Owner y, por último, a la patrocinadora. El plan se revisa al cierre de cada sprint junto con el plan de involucramiento."
     }
    ]
   },
   {
    "titulo": "10. Glosario",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Término",
       "Cómo se explica a los interesados"
      ],
      "anchos": [
       26,
       74
      ],
      "filas": [
       [
        "Alerta",
        "Aviso de que un estudiante necesita atención esta semana."
       ],
       [
        "Nivel de riesgo",
        "Señal de tres colores (verde, amarillo y rojo) sobre la probabilidad de que un estudiante baje su rendimiento. No es un diagnóstico."
       ],
       [
        "Sprint",
        "Periodo de trabajo de cuatro semanas que termina con una demostración al colegio."
       ],
       [
        "Revisión del sprint",
        "Reunión en la que el equipo muestra lo avanzado y el colegio lo acepta u observa."
       ],
       [
        "Product Owner",
        "Persona del colegio que decide qué es prioritario y acepta los entregables."
       ],
       [
        "Línea base",
        "Versión aprobada del alcance, del cronograma o de los costos, contra la que se mide el avance."
       ],
       [
        "Solicitud de cambio",
        "Pedido formal para modificar algo ya aprobado."
       ],
       [
        "Piloto",
        "Dos semanas de uso real del sistema por tres docentes tutores antes de ponerlo en marcha."
       ]
      ],
      "titulo": "Glosario común"
     }
    ]
   }
  ]
 },
 {
  "id": "INT-06",
  "titulo": "Registro de comunicaciones",
  "dominio": "Interesados",
  "area": "Ejecución",
  "proceso": "Gestionar las comunicaciones",
  "salida": "Comunicaciones del proyecto",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Lleva la cuenta de cada comunicación del proyecto: las que ya se hicieron, con su constancia, y las programadas, con su fecha límite y su responsable. Es la fuente del tablero de comunicaciones del blog.",
  "carpeta": "02 - Interesados/2.5 Comunicaciones",
  "pdf": "/documentos/INT-06-registro-de-comunicaciones.pdf",
  "docx": "/documentos/INT-06-registro-de-comunicaciones.docx",
  "secciones": [
   {
    "titulo": "1. Uso del registro",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Gestionar las comunicaciones es ejecutar el plan (INT-03): reunirse, enviar los informes, hacer los talleres y dejar constancia. Cada comunicación se anota aquí cuando se programa y se actualiza cuando se realiza. Cuando pasa la fecha de una comunicación programada, queda «por confirmar» durante una semana, que es el plazo para registrarla con su constancia; si no se registra, pasa a vencida."
     },
     {
      "t": "ul",
      "items": [
       "**Quién lo mantiene:** el director del proyecto; cada responsable informa cuando realiza su comunicación.",
       "**Constancia:** acta, lista de asistencia, mensaje, documento o publicación. Sin constancia no se marca como realizada.",
       "**Reserva:** el registro nombra cargos, no personas, y no incluye datos de estudiantes."
      ]
     }
    ]
   },
   {
    "titulo": "2. Comunicaciones realizadas",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Fecha",
       "Tipo",
       "Asunto",
       "Emite",
       "Interesados",
       "Canal",
       "Estado",
       "Constancia"
      ],
      "anchos": [
       5,
       9,
       9,
       23,
       10,
       15,
       10,
       8,
       11
      ],
      "filas": [
       [
        "C-01",
        "24/04/2026",
        "Entrevista",
        "Entrevista semiestructurada de diagnóstico a la Promotora Directora",
        "Equipo del proyecto",
        [
         "I-01 Promotora Directora"
        ],
        "Reunión presencial",
        {
         "x": "Realizada",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Transcripción, video y fotografías"
       ],
       [
        "C-02",
        "24/04/2026",
        "Solicitud",
        "Pedido y recojo del organigrama y del formato de reporte de incidencias",
        "Equipo del proyecto",
        [
         "I-01 Promotora Directora"
        ],
        "Reunión presencial",
        {
         "x": "Realizada",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Fotografías de los documentos"
       ],
       [
        "C-03",
        "15/05/2026",
        "Encuesta",
        "Encuesta sobre seguimiento y rendimiento académico: 6 respuestas de 16 docentes",
        "Equipo del proyecto",
        [
         "I-05 Docentes tutores y auxiliares"
        ],
        "Formulario en línea",
        {
         "x": "Realizada",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Hoja de respuestas y gráficos"
       ],
       [
        "C-04",
        "05/07/2026",
        "Entrega de datos",
        "Recepción de registros de notas de marzo, abril y primer trimestre de 2026",
        "Docentes del colegio",
        [
         "I-05 Docentes tutores y auxiliares"
        ],
        "Reunión presencial",
        {
         "x": "Realizada",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Hoja de cálculo y fotografías, en custodia del equipo"
       ],
       [
        "C-05",
        "10/10/2026",
        "Reunión",
        "Sesión de trabajo del equipo: análisis de interesados y emisión de los documentos de gestión",
        "Jhostin Galarza",
        [
         "I-12 Equipo del proyecto"
        ],
        "Reunión del equipo",
        {
         "x": "Realizada",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Documentos INT-01 e INT-02"
       ],
       [
        "C-06",
        "10/10/2026",
        "Publicación",
        "Publicación del blog del proyecto con el equipo y el periodo actuales",
        "Equipo del proyecto",
        [
         "I-13 Docente asesor del curso"
        ],
        "Blog del proyecto",
        {
         "x": "Realizada",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Blog en línea"
       ]
      ],
      "titulo": "Comunicaciones realizadas al 10/10/2026",
      "compacta": true
     },
     {
      "t": "nota",
      "tipo": "aviso",
      "x": "Las cuatro primeras corresponden al levantamiento de información de la fase de formulación. La segunda entrevista, al encargado de soporte de TI y a la gestora de Cubicol, no se realizó entonces y está programada para el Sprint 1 (incidente IN-05)."
     }
    ]
   },
   {
    "titulo": "3. Comunicaciones programadas del Sprint 1",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Fecha",
       "Tipo",
       "Asunto",
       "Emite",
       "Interesados",
       "Canal",
       "Estado",
       "Constancia"
      ],
      "anchos": [
       5,
       9,
       9,
       23,
       10,
       15,
       10,
       8,
       11
      ],
      "filas": [
       [
        "C-07",
        "12/10/2026",
        "Reunión",
        "Reunión de inicio: acta de constitución, calendario, Product Owner y tratamiento de datos",
        "Jhostin Galarza",
        [
         "I-01 Promotora Directora",
         "I-02 Subdirector",
         "I-03 Coordinación académica"
        ],
        "Reunión presencial",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Acta de reunión y acta de constitución firmada"
       ],
       [
        "C-08",
        "16/10/2026",
        "Avance académico",
        "Avance semanal al docente asesor y demostración del entregable del sistema según la EDT",
        "Equipo del proyecto",
        [
         "I-13 Docente asesor del curso"
        ],
        "Clase y blog del proyecto",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Blog actualizado y observaciones del docente"
       ],
       [
        "C-09",
        "20/10/2026",
        "Entrevista",
        "Segunda entrevista y acuerdo sobre las exportaciones de datos de Cubicol",
        "Jadira Vasquez",
        [
         "I-07 Gestora de la plataforma Cubicol",
         "I-08 Encargado de soporte de TI"
        ],
        "Reunión presencial",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Notas de la entrevista y acuerdo de entrega de datos"
       ],
       [
        "C-10",
        "23/10/2026",
        "Avance académico",
        "Avance semanal al docente asesor",
        "Equipo del proyecto",
        [
         "I-13 Docente asesor del curso"
        ],
        "Clase y blog del proyecto",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Blog actualizado"
       ],
       [
        "C-11",
        "28/10/2026",
        "Taller",
        "Taller de validación de las variables del modelo",
        "Helber Perez",
        [
         "I-05 Docentes tutores y auxiliares",
         "I-06 Responsable de psicología"
        ],
        "Taller presencial",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Lista de asistencia y acuerdos"
       ],
       [
        "C-12",
        "30/10/2026",
        "Avance académico",
        "Avance semanal al docente asesor",
        "Equipo del proyecto",
        [
         "I-13 Docente asesor del curso"
        ],
        "Clase y blog del proyecto",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Blog actualizado"
       ],
       [
        "C-13",
        "03/11/2026",
        "Entrevista",
        "Entrevista sobre el registro de incidencias",
        "Jadira Vasquez",
        [
         "I-04 Jefa de Normas"
        ],
        "Reunión presencial",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Notas de la entrevista"
       ],
       [
        "C-14",
        "06/11/2026",
        "Revisión de sprint",
        "Revisión del Sprint 1 e informe de desempeño: arquitectura y variables del modelo",
        "Equipo del proyecto",
        [
         "I-01 Promotora Directora",
         "I-03 Coordinación académica",
         "I-13 Docente asesor del curso"
        ],
        "Reunión presencial",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Acta de aceptación e informe de desempeño"
       ]
      ],
      "titulo": "Sprint 1: del 12/10/2026 al 06/11/2026",
      "compacta": true
     }
    ]
   },
   {
    "titulo": "4. Comunicaciones programadas de los Sprints 2 a 6",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Fecha",
       "Tipo",
       "Asunto",
       "Emite",
       "Interesados",
       "Canal",
       "Estado",
       "Constancia"
      ],
      "anchos": [
       5,
       9,
       9,
       23,
       10,
       15,
       10,
       8,
       11
      ],
      "filas": [
       [
        "C-15",
        "04/12/2026",
        "Revisión de sprint",
        "Revisión del Sprint 2 e informe de desempeño: base de datos centralizada",
        "Equipo del proyecto",
        [
         "I-01 Promotora Directora",
         "I-03 Coordinación académica",
         "I-13 Docente asesor del curso"
        ],
        "Reunión presencial",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Acta de aceptación e informe de desempeño"
       ],
       [
        "C-16",
        "11/12/2026",
        "Comunicado",
        "Comunicado a los apoderados sobre el proyecto y el uso de los datos",
        "Dirección; redacta el equipo",
        [
         "I-11 Padres de familia y apoderados"
        ],
        "Comunicado impreso o agenda",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Comunicado y cargo de recepción"
       ],
       [
        "C-17",
        "30/12/2026",
        "Revisión de sprint",
        "Revisión del Sprint 3 e informe de desempeño: modelo validado",
        "Equipo del proyecto",
        [
         "I-01 Promotora Directora",
         "I-03 Coordinación académica",
         "I-13 Docente asesor del curso"
        ],
        "Reunión presencial",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Acta de aceptación e informe de desempeño"
       ],
       [
        "C-18",
        "20/01/2027",
        "Convocatoria",
        "Convocatoria a tres docentes tutores para el piloto de marzo",
        "Jhostin Galarza",
        [
         "I-05 Docentes tutores y auxiliares",
         "I-03 Coordinación académica"
        ],
        "Reunión presencial",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Lista de participantes confirmados"
       ],
       [
        "C-19",
        "29/01/2027",
        "Revisión de sprint",
        "Revisión del Sprint 4 e informe de desempeño: sistema integrado con alertas y tablero",
        "Equipo del proyecto",
        [
         "I-01 Promotora Directora",
         "I-03 Coordinación académica",
         "I-13 Docente asesor del curso"
        ],
        "Reunión presencial",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Acta de aceptación e informe de desempeño"
       ],
       [
        "C-20",
        "24/03/2027",
        "Revisión de sprint",
        "Revisión del Sprint 5 e informe de desempeño: resultado de las pruebas y del piloto",
        "Equipo del proyecto",
        [
         "I-01 Promotora Directora",
         "I-03 Coordinación académica",
         "I-13 Docente asesor del curso"
        ],
        "Reunión presencial",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Acta de aceptación e informe de desempeño"
       ],
       [
        "C-21",
        "14/04/2027",
        "Capacitación",
        "Capacitación de dos horas a tutores y coordinadores, y entrega de manuales",
        "Jhostin Galarza",
        [
         "I-05 Docentes tutores y auxiliares",
         "I-03 Coordinación académica",
         "I-08 Encargado de soporte de TI"
        ],
        "Taller presencial",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Lista de asistencia"
       ],
       [
        "C-22",
        "23/04/2027",
        "Reunión",
        "Reunión de cierre del proyecto e informe final",
        "Jhostin Galarza",
        [
         "I-01 Promotora Directora",
         "I-02 Subdirector",
         "I-03 Coordinación académica",
         "I-13 Docente asesor del curso"
        ],
        "Reunión presencial",
        {
         "x": "Programada",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Acta de cierre e informe final"
       ]
      ],
      "titulo": "Sprints 2 a 6",
      "compacta": true
     },
     {
      "t": "p",
      "x": "La coordinación diaria del equipo, los pedidos de datos semanales, las solicitudes de cambio y los incidentes de prioridad alta se registran cuando ocurren; por eso no figuran con fecha en esta lista."
     }
    ]
   },
   {
    "titulo": "5. Resumen",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Momento",
       "Realizadas",
       "Programadas",
       "Vencidas",
       "Total"
      ],
      "anchos": [
       40,
       15,
       15,
       15,
       15
      ],
      "filas": [
       [
        "Antes del inicio",
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "6",
         "align": "center",
         "bold": true
        }
       ],
       [
        "Sprint 1",
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "8",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "8",
         "align": "center",
         "bold": true
        }
       ],
       [
        "Sprint 2",
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center",
         "bold": true
        }
       ],
       [
        "Sprint 3",
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center",
         "bold": true
        }
       ],
       [
        "Sprint 4",
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center",
         "bold": true
        }
       ],
       [
        "Sprint 5",
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center",
         "bold": true
        }
       ],
       [
        "Sprint 6",
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center",
         "bold": true
        }
       ],
       [
        {
         "x": "Total",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "6",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "16",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "0",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "22",
         "fill": "gris",
         "align": "center",
         "bold": true
        }
       ]
      ],
      "titulo": "Comunicaciones por momento del proyecto, al 10/10/2026"
     }
    ]
   }
  ]
 },
 {
  "id": "INT-07",
  "titulo": "Informe de monitoreo de las comunicaciones N.º 1",
  "dominio": "Interesados",
  "area": "Monitoreo y control",
  "proceso": "Monitorear las comunicaciones",
  "salida": "Información de desempeño del trabajo sobre las comunicaciones",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Comprueba si las comunicaciones se están haciendo según el plan y si llegan a quienes deben. Es la primera medición, antes del inicio del Sprint 1, y fija el punto de partida.",
  "carpeta": "02 - Interesados/2.5 Comunicaciones",
  "pdf": "/documentos/INT-07-informe-de-monitoreo-de-las-comunicaciones-n-1.pdf",
  "docx": "/documentos/INT-07-informe-de-monitoreo-de-las-comunicaciones-n-1.docx",
  "secciones": [
   {
    "titulo": "1. Corte y método",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Fecha de corte: 10/10/2026. El informe se elabora con el registro de comunicaciones (INT-06): compara lo realizado con lo programado en el plan (INT-03) y revisa a qué interesados se ha llegado. Los mismos indicadores se ven, actualizados, en el tablero de comunicaciones del blog."
     }
    ]
   },
   {
    "titulo": "2. Indicadores",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Indicador",
       "Valor",
       "Meta",
       "Lectura"
      ],
      "anchos": [
       28,
       16,
       20,
       36
      ],
      "filas": [
       [
        "Comunicaciones registradas",
        "22",
        "—",
        "6 realizadas y 16 programadas."
       ],
       [
        "Cumplimiento del calendario",
        "Aún no aplica",
        "90 % o más",
        "Ninguna comunicación programada ha llegado a su fecha límite."
       ],
       [
        "Comunicaciones vencidas",
        {
         "x": "0",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Cero",
        "Se medirá por primera vez en la semana del 12/10/2026."
       ],
       [
        "Cobertura de interesados",
        "4 de 17",
        "—",
        "Coincide con el seguimiento del involucramiento (INT-05)."
       ],
       [
        "Cobertura de interesados clave",
        {
         "x": "4 de 8",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Todos al cierre del Sprint 1",
        "Faltan: Subdirector, Coordinación académica, Gestora de la plataforma Cubicol, Encargado de soporte de TI."
       ],
       [
        "Constancia",
        {
         "x": "6 de 6",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "100 %",
        "Toda comunicación realizada tiene evidencia."
       ]
      ],
      "titulo": "Indicadores de las comunicaciones al 10/10/2026"
     }
    ]
   },
   {
    "titulo": "3. Comunicaciones por canal",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Canal",
       "Realizadas",
       "Programadas",
       "Vencidas",
       "Total"
      ],
      "anchos": [
       40,
       15,
       15,
       15,
       15
      ],
      "filas": [
       [
        "Reunión presencial",
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "10",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "13",
         "align": "center",
         "bold": true
        }
       ],
       [
        "Clase y blog del proyecto",
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center",
         "bold": true
        }
       ],
       [
        "Taller presencial",
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center",
         "bold": true
        }
       ],
       [
        "Formulario en línea",
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center",
         "bold": true
        }
       ],
       [
        "Reunión del equipo",
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center",
         "bold": true
        }
       ],
       [
        "Blog del proyecto",
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center",
         "bold": true
        }
       ],
       [
        "Comunicado impreso o agenda",
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center",
         "bold": true
        }
       ]
      ],
      "titulo": "Uso de los canales"
     },
     {
      "t": "p",
      "x": "La reunión presencial es el canal principal, como pidió la Dirección. Todavía no se usa el correo: el colegio no tiene correo institucional y la lista de direcciones personales autorizadas está pendiente (SC-09)."
     }
    ]
   },
   {
    "titulo": "4. Cobertura por interesado",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Interesado",
       "Clave",
       "Realizadas",
       "Programadas",
       "Situación"
      ],
      "anchos": [
       40,
       10,
       14,
       14,
       22
      ],
      "filas": [
       [
        "I-01 Promotora Directora",
        {
         "x": "Sí",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "7",
         "align": "center"
        },
        {
         "x": "Con comunicación",
         "fill": "verde"
        }
       ],
       [
        "I-02 Subdirector",
        {
         "x": "Sí",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "Programada",
         "fill": "azul"
        }
       ],
       [
        "I-03 Coordinación académica",
        {
         "x": "Sí",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "9",
         "align": "center"
        },
        {
         "x": "Programada",
         "fill": "azul"
        }
       ],
       [
        "I-04 Jefa de Normas",
        {
         "x": "",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "Programada",
         "fill": "azul"
        }
       ],
       [
        "I-05 Docentes tutores y auxiliares",
        {
         "x": "Sí",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "Con comunicación",
         "fill": "verde"
        }
       ],
       [
        "I-06 Responsable de psicología",
        {
         "x": "",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "Programada",
         "fill": "azul"
        }
       ],
       [
        "I-07 Gestora de la plataforma Cubicol",
        {
         "x": "Sí",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "Programada",
         "fill": "azul"
        }
       ],
       [
        "I-08 Encargado de soporte de TI",
        {
         "x": "Sí",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "Programada",
         "fill": "azul"
        }
       ],
       [
        "I-09 Personal administrativo",
        {
         "x": "",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "Sin comunicación directa",
         "fill": "gris"
        }
       ],
       [
        "I-10 Estudiantes",
        {
         "x": "",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "Sin comunicación directa",
         "fill": "gris"
        }
       ],
       [
        "I-11 Padres de familia y apoderados",
        {
         "x": "",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "Programada",
         "fill": "azul"
        }
       ],
       [
        "I-12 Equipo del proyecto",
        {
         "x": "Sí",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "Con comunicación",
         "fill": "verde"
        }
       ],
       [
        "I-13 Docente asesor del curso",
        {
         "x": "Sí",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "9",
         "align": "center"
        },
        {
         "x": "Con comunicación",
         "fill": "verde"
        }
       ],
       [
        "I-14 Cubicol (proveedor)",
        {
         "x": "",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "Sin comunicación directa",
         "fill": "gris"
        }
       ],
       [
        "I-15 Proveedores de nube e internet",
        {
         "x": "",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "Sin comunicación directa",
         "fill": "gris"
        }
       ],
       [
        "I-16 UGEL 01 y MINEDU",
        {
         "x": "",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "Sin comunicación directa",
         "fill": "gris"
        }
       ],
       [
        "I-17 Autoridad de Protección de Datos Personales",
        {
         "x": "",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "Sin comunicación directa",
         "fill": "gris"
        }
       ]
      ],
      "titulo": "Comunicaciones por interesado",
      "compacta": true
     },
     {
      "t": "p",
      "x": "6 interesados no tienen una comunicación directa prevista: Personal administrativo, Estudiantes, Cubicol (proveedor), Proveedores de nube e internet, UGEL 01 y MINEDU, Autoridad de Protección de Datos Personales. Es lo que establece el plan: los estudiantes reciben la información a través de sus tutores, y al personal administrativo, a los proveedores y a los reguladores solo se les consulta cuando hace falta."
     }
    ]
   },
   {
    "titulo": "5. Hallazgos",
    "apaisada": false,
    "bloques": [
     {
      "t": "ul",
      "items": [
       "Solo 4 de 17 interesados han tenido una comunicación directa; 13 todavía no.",
       "La segunda entrevista (encargado de TI y gestora de Cubicol) está pendiente desde mayo de 2026. Es la comunicación más urgente del Sprint 1.",
       "Con los padres y apoderados no ha habido ninguna comunicación del proyecto. El comunicado está programado para el 11/12/2026, antes del cierre del año escolar y de cargar datos reales.",
       "No existe aún un canal acordado para las alertas por correo (SC-09).",
       "La reunión de inicio está programada para el 12/10/2026 y todavía falta la confirmación de la Dirección."
      ]
     }
    ]
   },
   {
    "titulo": "6. Acciones",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Acción",
       "Responsable",
       "Fecha límite"
      ],
      "anchos": [
       58,
       22,
       20
      ],
      "filas": [
       [
        "Confirmar con la Dirección la reunión de inicio del 12/10/2026.",
        "Jhostin Galarza",
        "12/10/2026"
       ],
       [
        "Coordinar la segunda entrevista con la gestora de Cubicol y el encargado de TI.",
        "Jadira Vasquez",
        "23/10/2026"
       ],
       [
        "Pedir a la Dirección la lista de correos autorizados de los docentes.",
        "Jadira Vasquez",
        "06/11/2026"
       ],
       [
        "Redactar el borrador del comunicado a los apoderados para revisión de la Dirección.",
        "Jhostin Galarza",
        "04/12/2026"
       ],
       [
        "Actualizar el registro y el tablero cada viernes.",
        "Jhostin Galarza",
        "Semanal"
       ]
      ],
      "titulo": "Acciones derivadas del monitoreo"
     },
     {
      "t": "ol",
      "items": [
       "No se generan solicitudes de cambio a partir de este informe.",
       "La próxima medición se hará al cierre del Sprint 1, el 06/11/2026."
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "ALC-01",
  "titulo": "Plan de gestión del alcance y de los requisitos",
  "dominio": "Alcance",
  "area": "Planificación",
  "proceso": "Planificar la gestión del alcance",
  "salida": "Plan de gestión del alcance y plan de gestión de los requisitos",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Explica cómo se define, se desglosa, se valida y se controla el alcance del proyecto, y cómo se registran, priorizan y siguen los requisitos.",
  "carpeta": "03 - Alcance/3.1 Planificar",
  "pdf": "/documentos/ALC-01-plan-de-gestion-del-alcance-y-de-los-requisitos.pdf",
  "docx": "/documentos/ALC-01-plan-de-gestion-del-alcance-y-de-los-requisitos.docx",
  "secciones": [
   {
    "titulo": "1. Propósito y enfoque",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Este plan establece las reglas para que el proyecto haga todo el trabajo requerido y solo el trabajo requerido. Distingue dos alcances: el **alcance del producto**, que son las funciones y características del sistema, y el **alcance del proyecto**, que es el trabajo necesario para entregarlo."
     },
     {
      "t": "p",
      "x": "Como el enfoque de desarrollo es híbrido (GOB-04), el alcance general se fija al inicio en una línea base y el detalle de cada sprint se ordena en una lista de trabajo pendiente (Product Backlog) que el Product Owner prioriza."
     }
    ]
   },
   {
    "titulo": "2. Procesos del alcance en este proyecto",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Proceso",
       "Cómo se realiza",
       "Responsable",
       "Resultado"
      ],
      "anchos": [
       22,
       42,
       16,
       20
      ],
      "filas": [
       [
        "Recopilar y analizar requisitos",
        "Entrevista, encuesta, análisis de documentos y pensamiento de diseño (mapas de empatía, usuario tipo y recorrido del usuario). Cada requisito se registra en una planilla.",
        "Equipo del proyecto",
        "Documentación de requisitos y matriz de trazabilidad"
       ],
       [
        "Definir el alcance",
        "Análisis del producto y de alternativas; juicio del equipo con la Dirección.",
        "Jhostin Galarza",
        "Enunciado del alcance (ALC-02)"
       ],
       [
        "Desarrollar la estructura del alcance",
        "Descomposición del trabajo en componentes y paquetes hasta un nivel que se pueda estimar y asignar.",
        "Jhostin Galarza",
        "EDT y diccionario de la EDT"
       ],
       [
        "Validar el alcance",
        "Inspección de cada entregable frente a sus criterios en la revisión del sprint.",
        "Product Owner",
        "Actas de aceptación (ALC-04)"
       ],
       [
        "Monitorear y controlar el alcance",
        "Comparación del trabajo hecho con la línea base; todo pedido nuevo pasa por control de cambios.",
        "Carlos Curo",
        "Registro de cambios (GOB-10)"
       ]
      ],
      "titulo": "Cómo se lleva cada proceso del dominio"
     }
    ]
   },
   {
    "titulo": "3. Gestión de los requisitos",
    "apaisada": false,
    "bloques": [
     {
      "t": "h",
      "x": "Identificación y registro"
     },
     {
      "t": "p",
      "x": "Cada requisito tiene un código: REQ para los funcionales y RNF para los no funcionales. El proyecto tiene 20 requisitos: 12 funcionales y 8 no funcionales. La planilla de cada uno registra descripción, justificación, interesado que lo propone, criterio de validación, grado de satisfacción e insatisfacción, dependencias, conflictos y documentos de soporte."
     },
     {
      "t": "h",
      "x": "Priorización"
     },
     {
      "t": "p",
      "x": "La prioridad es alta o media. Es alta cuando sin el requisito el sistema no cumple su objetivo o incumple la ley; 14 de los 20 requisitos son de prioridad alta. Dentro de cada sprint, el Product Owner ordena el trabajo."
     },
     {
      "t": "h",
      "x": "Trazabilidad"
     },
     {
      "t": "p",
      "x": "La matriz de trazabilidad enlaza cada requisito con el objetivo que atiende, el entregable y el paquete de la EDT que lo produce, y sus casos de prueba. Hay 80 casos de prueba, cuatro por requisito (CP-01 a CP-80)."
     },
     {
      "t": "tabla",
      "cols": [
       "Estado",
       "Significado"
      ],
      "anchos": [
       24,
       76
      ],
      "filas": [
       [
        {
         "x": "Pendiente",
         "fill": "gris"
        },
        "Aún no se inicia su desarrollo."
       ],
       [
        {
         "x": "En desarrollo",
         "fill": "azul"
        },
        "En construcción o en prueba dentro de un sprint."
       ],
       [
        {
         "x": "Completado",
         "fill": "verde"
        },
        "Implementado, con sus casos de prueba aprobados y aceptado por el Product Owner."
       ],
       [
        {
         "x": "Bloqueado",
         "fill": "rojo"
        },
        "Tiene un impedimento; se registra un incidente (GOB-06)."
       ]
      ],
      "titulo": "Estados de un requisito",
      "fuente": "Al 10/10/2026, los 20 requisitos están en estado «Pendiente»."
     },
     {
      "t": "h",
      "x": "Cambios en los requisitos"
     },
     {
      "t": "p",
      "x": "Un requisito nuevo o modificado se presenta como solicitud de cambio. El responsable del control de cambios analiza su efecto en el alcance, el cronograma y el costo, y la decisión se registra en GOB-10 antes de tocar la línea base."
     }
    ]
   },
   {
    "titulo": "4. Métricas del alcance",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Métrica",
       "Cómo se calcula",
       "Meta",
       "Cuándo se mide"
      ],
      "anchos": [
       24,
       40,
       16,
       20
      ],
      "filas": [
       [
        "Cobertura de trazabilidad",
        "Requisitos con casos de prueba entre el total de requisitos.",
        "100 %",
        "Cada sprint"
       ],
       [
        "Estabilidad de los requisitos",
        "Requisitos sin cambios en el sprint entre el total de requisitos.",
        "90 % o más",
        "Cada sprint"
       ],
       [
        "Requisitos aceptados",
        "Requisitos aceptados entre los comprometidos en el sprint.",
        "80 % o más",
        "Revisión del sprint"
       ],
       [
        "Aceptación a la primera",
        "Entregables aceptados sin observaciones entre los presentados.",
        "80 % o más",
        "Revisión del sprint"
       ],
       [
        "Corrupción del alcance",
        "Trabajo realizado que no corresponde a un requisito ni a un cambio aprobado.",
        "Cero casos",
        "Cada sprint"
       ],
       [
        "Avance del alcance",
        "Paquetes de trabajo terminados entre el total de paquetes.",
        "Según el cronograma",
        "Cada sprint"
       ]
      ],
      "titulo": "Métricas de alcance y de requisitos"
     }
    ]
   },
   {
    "titulo": "5. Línea base del alcance",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "La línea base del alcance está formada por tres documentos. Se aprueba con el acta de constitución y solo cambia por control de cambios."
     },
     {
      "t": "tabla",
      "cols": [
       "Componente",
       "Documento",
       "Situación"
      ],
      "anchos": [
       26,
       38,
       36
      ],
      "filas": [
       [
        "Enunciado del alcance",
        "ALC-02 (versión 3)",
        {
         "x": "Actualizado al 10/10/2026",
         "fill": "verde"
        }
       ],
       [
        "Estructura de desglose del trabajo (EDT)",
        "Diagrama de la EDT (fase de formulación)",
        {
         "x": "Vigente; responsables actualizados (SC-01)",
         "fill": "verde"
        }
       ],
       [
        "Diccionario de la EDT",
        "Diccionario de la EDT (fase de formulación)",
        {
         "x": "Por unificar con la EDT (SC-10)",
         "fill": "amarillo"
        }
       ]
      ],
      "titulo": "Componentes de la línea base del alcance"
     }
    ]
   },
   {
    "titulo": "6. Roles",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Rol",
       "Responsabilidad sobre el alcance"
      ],
      "anchos": [
       30,
       70
      ],
      "filas": [
       [
        "Patrocinadora",
        "Aprueba la línea base y los cambios que la modifican."
       ],
       [
        "Product Owner",
        "Prioriza los requisitos y acepta los entregables."
       ],
       [
        "Director del proyecto",
        "Mantiene el enunciado del alcance y la EDT; vigila que no se haga trabajo fuera del alcance."
       ],
       [
        "Responsable del control de cambios",
        "Registra las solicitudes y mantiene la matriz de trazabilidad."
       ],
       [
        "Equipo de desarrollo",
        "Construye los entregables según los criterios de aceptación y la definición de terminado (ALC-03)."
       ]
      ],
      "titulo": "Roles en la gestión del alcance"
     }
    ]
   }
  ]
 },
 {
  "id": "ALC-02",
  "titulo": "Enunciado del alcance del proyecto",
  "dominio": "Alcance",
  "area": "Planificación",
  "proceso": "Definir el alcance",
  "salida": "Enunciado del alcance del proyecto",
  "version": "3.0",
  "fecha": "10/10/2026",
  "resumen": "Describe el producto, sus entregables y criterios de aceptación, lo que queda fuera, y los supuestos y restricciones. Es la versión 3: reemplaza el alojamiento en el colegio por servicios en la nube.",
  "carpeta": "03 - Alcance/3.2 Definir el alcance",
  "pdf": "/documentos/ALC-02-enunciado-del-alcance-del-proyecto.pdf",
  "docx": "/documentos/ALC-02-enunciado-del-alcance-del-proyecto.docx",
  "secciones": [
   {
    "titulo": "1. Descripción del producto",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El producto es un sistema web de alerta temprana del bajo rendimiento académico para la I.E.P. Peruano Francés, alojado en servicios gestionados en la nube. Reúne los datos académicos de los estudiantes (notas, asistencia, participación e incidencias), los procesa con un modelo de Machine Learning implementado en Python con Scikit-learn y clasifica a cada estudiante en riesgo alto, medio o bajo. Con ese resultado genera alertas para docentes, coordinación y dirección."
     },
     {
      "t": "p",
      "x": "La interfaz web, desarrollada con Next.js, muestra tableros, fichas individuales y reportes, y se usa desde el navegador sin instalar programas."
     },
     {
      "t": "kv",
      "filas": [
       [
        "Objetivo del producto",
        "Mejorar la detección temprana del bajo rendimiento académico mediante un sistema que genere alertas oportunas para la toma de decisiones pedagógicas."
       ],
       [
        "Usuarios",
        "Docentes tutores, coordinación académica, psicología, dirección y subdirección."
       ],
       [
        "Población atendida",
        "Alrededor de 200 estudiantes de inicial, primaria y secundaria."
       ]
      ]
     }
    ]
   },
   {
    "titulo": "2. Entregables del producto",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Código",
       "Entregable",
       "Tipo",
       "Descripción",
       "Sprint"
      ],
      "anchos": [
       9,
       23,
       13,
       43,
       12
      ],
      "filas": [
       [
        "E-01",
        "Módulo de integración y limpieza de datos",
        "Software",
        "Procesos que reúnen y limpian los datos académicos en una base de datos en la nube.",
        {
         "x": "Sprint 2",
         "align": "center"
        }
       ],
       [
        "E-02",
        "Modelo predictivo de riesgo académico",
        "Software",
        "Modelo entrenado en Python con Scikit-learn que clasifica a cada estudiante en riesgo bajo, medio o alto y se actualiza cada semana.",
        {
         "x": "Sprint 3",
         "align": "center"
        }
       ],
       [
        "E-03",
        "Motor de alertas tempranas",
        "Software",
        "Módulo que avisa por correo y en el panel web al docente tutor y a la coordinación.",
        {
         "x": "Sprint 4",
         "align": "center"
        }
       ],
       [
        "E-04",
        "Tablero web",
        "Software",
        "Interfaz web con semáforo de riesgo, fichas de estudiante, reportes y comparación por aula y grado.",
        {
         "x": "Sprint 4",
         "align": "center"
        }
       ],
       [
        "E-05",
        "Gestión de roles y accesos",
        "Software",
        "Ingreso con usuario y contraseña y vistas distintas para docente, coordinación, psicología y dirección.",
        {
         "x": "Sprint 4",
         "align": "center"
        }
       ],
       [
        "E-06",
        "Manual de usuario",
        "Documento",
        "Guía de uso para docentes y coordinadores, en lenguaje sencillo y con capturas de pantalla.",
        {
         "x": "Sprint 6",
         "align": "center"
        }
       ],
       [
        "E-07",
        "Manual técnico",
        "Documento",
        "Arquitectura, configuración de los servicios en la nube y procedimientos básicos de mantenimiento.",
        {
         "x": "Sprint 6",
         "align": "center"
        }
       ],
       [
        "E-08",
        "Plan y sesión de capacitación",
        "Capacitación",
        "Programa de dos horas para docentes y coordinadores.",
        {
         "x": "Sprint 6",
         "align": "center"
        }
       ],
       [
        "E-09",
        "Informe del piloto",
        "Validación",
        "Resultados del piloto con docentes tutores, observaciones y ajustes aplicados antes del despliegue definitivo.",
        {
         "x": "Sprint 5",
         "align": "center"
        }
       ]
      ],
      "titulo": "Entregables del producto"
     },
     {
      "t": "p",
      "x": "Los entregables de gestión del proyecto (planes, informes y registros) se listan en el índice de la documentación (BASE-01)."
     }
    ]
   },
   {
    "titulo": "3. Requisitos que cubre el alcance",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El alcance responde a 20 requisitos: 12 funcionales y 8 no funcionales. La planilla completa de cada uno está en la documentación de requisitos y sus 80 casos de prueba, en la matriz de trazabilidad."
     },
     {
      "t": "tabla",
      "cols": [
       "Código",
       "Requisito",
       "Prioridad",
       "Entregable",
       "Paquete EDT",
       "Casos de prueba"
      ],
      "anchos": [
       10,
       38,
       11,
       13,
       13,
       15
      ],
      "filas": [
       [
        "REQ-01",
        "Centralización de los datos académicos",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "E-01",
        "1.2.1",
        "CP-01 a CP-04"
       ],
       [
        "REQ-02",
        "Limpieza y validación automática de los datos",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "E-01",
        "1.2.2",
        "CP-05 a CP-08"
       ],
       [
        "REQ-03",
        "Modelo de clasificación del riesgo académico",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "E-02",
        "1.3.1 y 1.3.3",
        "CP-09 a CP-12"
       ],
       [
        "REQ-04",
        "Actualización semanal automática del modelo",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "E-02",
        "1.3.2",
        "CP-13 a CP-16"
       ],
       [
        "REQ-05",
        "Alertas automáticas por correo al docente tutor",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "E-03",
        "1.4.1",
        "CP-17 a CP-20"
       ],
       [
        "REQ-06",
        "Panel web de alertas para el docente",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "E-03",
        "1.4.1",
        "CP-21 a CP-24"
       ],
       [
        "REQ-07",
        "Registro del seguimiento de cada caso",
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "E-03",
        "1.4.1",
        "CP-25 a CP-28"
       ],
       [
        "REQ-08",
        "Tablero de indicadores de riesgo",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "E-04",
        "1.4.2.2",
        "CP-29 a CP-32"
       ],
       [
        "REQ-09",
        "Reportes exportables en PDF y Excel",
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "E-04",
        "1.4.2.2",
        "CP-33 a CP-36"
       ],
       [
        "REQ-10",
        "Ficha individual del estudiante",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "E-04",
        "1.4.2.2",
        "CP-37 a CP-40"
       ],
       [
        "REQ-11",
        "Roles y accesos diferenciados",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "E-05",
        "1.4.3",
        "CP-41 a CP-44"
       ],
       [
        "REQ-12",
        "Comunicado al apoderado del estudiante en riesgo alto",
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "E-03",
        "1.4.1",
        "CP-45 a CP-48"
       ],
       [
        "RNF-01",
        "Facilidad de uso",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "E-04 y E-08",
        "1.4.2.3 y 1.5.4",
        "CP-49 a CP-52"
       ],
       [
        "RNF-02",
        "Rendimiento del tablero",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "E-04",
        "1.6.1",
        "CP-53 a CP-56"
       ],
       [
        "RNF-03",
        "Autenticación y control de acceso",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "E-05",
        "1.4.3",
        "CP-57 a CP-60"
       ],
       [
        "RNF-04",
        "Cumplimiento de la Ley N.° 29733",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "E-05 y E-07",
        "1.5.1 y 1.5.3",
        "CP-61 a CP-64"
       ],
       [
        "RNF-05",
        "Disponibilidad en horario escolar",
        {
         "x": "Alta",
         "fill": "rojo",
         "align": "center"
        },
        "E-04",
        "1.5.1",
        "CP-65 a CP-68"
       ],
       [
        "RNF-06",
        "Compatibilidad con navegadores",
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "E-04",
        "1.4.2.2",
        "CP-69 a CP-72"
       ],
       [
        "RNF-07",
        "Capacidad y escalabilidad",
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "E-01 y E-04",
        "1.6.1",
        "CP-73 a CP-76"
       ],
       [
        "RNF-08",
        "Documentación y transferencia",
        {
         "x": "Media",
         "fill": "amarillo",
         "align": "center"
        },
        "E-07",
        "1.5.3",
        "CP-77 a CP-80"
       ]
      ],
      "titulo": "Requisitos, entregables y casos de prueba",
      "compacta": true
     }
    ]
   },
   {
    "titulo": "4. Criterios de aceptación del producto",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Aspecto",
       "Criterio de aceptación"
      ],
      "anchos": [
       20,
       80
      ],
      "filas": [
       [
        "Funcional",
        "El sistema detecta y alerta a los estudiantes en riesgo alto en un plazo máximo de 24 horas desde el procesamiento de los datos."
       ],
       [
        "Rendimiento",
        "El tablero carga en menos de 3 segundos y la clasificación semanal se genera sin intervención manual."
       ],
       [
        "Seguridad",
        "El acceso requiere usuario y contraseña, con vistas distintas según el rol."
       ],
       [
        "Facilidad de uso",
        "El docente tutor navega el tablero e interpreta las alertas tras una capacitación de dos horas como máximo."
       ],
       [
        "Modelo",
        "El modelo alcanza el umbral mínimo de 75 % en la métrica acordada, validado con datos reales del colegio. La línea base dice «precisión»; su redefinición está en evaluación (SC-08)."
       ],
       [
        "Datos personales",
        "Antes de cargar datos reales se cuenta con la política de tratamiento de datos y el consentimiento informado de los apoderados."
       ],
       [
        "Documentación",
        "Se entregan el manual de usuario, el manual técnico y el plan de capacitación, validados con el encargado de TI del colegio."
       ]
      ],
      "titulo": "Criterios de aceptación"
     }
    ]
   },
   {
    "titulo": "5. Dentro y fuera del alcance",
    "apaisada": false,
    "bloques": [
     {
      "t": "h",
      "x": "Dentro del alcance"
     },
     {
      "t": "ul",
      "items": [
       "Integración de datos de notas, asistencia, participación e incidencias.",
       "Modelo de clasificación del riesgo académico con actualización semanal.",
       "Tablero web con semáforo de riesgo, fichas individuales y reportes por unidad.",
       "Alertas automáticas por correo y en el panel web.",
       "Comunicados para los apoderados de estudiantes en riesgo alto.",
       "Roles y accesos diferenciados.",
       "Piloto con docentes antes del despliegue definitivo.",
       "Manuales y capacitación."
      ]
     },
     {
      "t": "h",
      "x": "Fuera del alcance"
     },
     {
      "t": "ul",
      "items": [
       "Aplicación móvil nativa.",
       "Instalación o administración de servidores en el colegio.",
       "Integración con plataformas distintas de Cubicol, y cualquier modificación de Cubicol.",
       "Registro de asistencia con código QR y envío automático de mensajes por WhatsApp.",
       "Pagos, facturación y videoconferencia.",
       "Evaluación del desempeño de los docentes.",
       "Más de una institución educativa en esta versión."
      ]
     },
     {
      "t": "h",
      "x": "Limitaciones conocidas"
     },
     {
      "t": "ul",
      "items": [
       "La calidad del modelo depende de la cantidad y la calidad de los datos históricos que entregue el colegio.",
       "El sistema requiere conexión a internet.",
       "El modelo no garantiza 100 % de acierto: el nivel de riesgo es una señal para revisar el caso, no un diagnóstico.",
       "Las mejoras y funciones nuevas se tratarán en versiones futuras."
      ]
     }
    ]
   },
   {
    "titulo": "6. Estructura de desglose del trabajo",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "La EDT tiene cuatro niveles: el proyecto, 6 componentes, los paquetes de trabajo y, en el tablero web, un nivel más de detalle."
     },
     {
      "t": "tabla",
      "cols": [
       "Código",
       "Componente",
       "Descripción"
      ],
      "anchos": [
       10,
       28,
       62
      ],
      "filas": [
       [
        "1.1",
        "Gestión del proyecto",
        "Planificación, seguimiento y control del proyecto."
       ],
       [
        "1.2",
        "Datos e integración",
        "Integración, validación y preparación de los datos académicos."
       ],
       [
        "1.3",
        "Modelo ML predictivo",
        "Entrenamiento, validación y clasificación del riesgo."
       ],
       [
        "1.4",
        "Alertas y tablero",
        "Alertas automáticas, tablero web y control de accesos."
       ],
       [
        "1.5",
        "Implantación y cierre",
        "Despliegue, documentación, capacitación y cierre."
       ],
       [
        "1.6",
        "Pruebas y piloto",
        "Pruebas de integración y rendimiento, y piloto con docentes."
       ]
      ],
      "titulo": "Componentes de la EDT (nivel 2)"
     },
     {
      "t": "tabla",
      "cols": [
       "Código",
       "Paquete de trabajo",
       "Responsable",
       "Entregable",
       "Criterio de aceptación"
      ],
      "anchos": [
       9,
       20,
       15,
       20,
       36
      ],
      "filas": [
       [
        "1.1.1",
        "Cronograma de hitos",
        "Jhostin Galarza",
        "Cronograma aprobado",
        "Cronograma aprobado y actualizado ante cada cambio del plan."
       ],
       [
        "1.1.2",
        "Informes de avance",
        "Jhostin Galarza",
        "Informes de desempeño por sprint",
        "Un informe por sprint que refleja el estado real del proyecto."
       ],
       [
        "1.1.3",
        "Actas y control de cambios",
        "Carlos Curo",
        "Registro de cambios al día",
        "Toda reunión con acuerdos escritos; todo cambio documentado y decidido antes de aplicarse."
       ],
       [
        "1.2.1",
        "Integración de datos (ETL)",
        "Jadira Vasquez",
        "Procesos de carga implementados",
        "Carga sin duplicados, validada con reconciliación en tres fechas."
       ],
       [
        "1.2.2",
        "Calidad de datos",
        "Jadira Vasquez",
        "Base de datos integrada y validada",
        "Sin vacíos críticos, duplicados ni inconsistencias; reporte de calidad con métricas de completitud."
       ],
       [
        "1.3.1",
        "Entrenamiento del modelo",
        "Helber Perez",
        "Modelo entrenado",
        "El modelo se entrena con los datos disponibles y genera los tres niveles de riesgo."
       ],
       [
        "1.3.2",
        "Clasificación de riesgo",
        "Helber Perez",
        "Clasificación semanal automática",
        "Clasifica a todos los estudiantes activos cada semana sin intervención manual."
       ],
       [
        {
         "x": "1.3.3",
         "fill": "amarillo"
        },
        "Validación del modelo",
        "Helber Perez",
        "Informe de validación del modelo",
        "Alcanza el umbral mínimo de 75 % en la métrica acordada, con datos reales (SC-08)."
       ],
       [
        "1.4.1",
        "Motor de alertas",
        "Jadira Vasquez",
        "Alertas por correo y panel web",
        "Alertas enviadas en 24 horas como máximo, con historial."
       ],
       [
        "1.4.2.1",
        "Diseño de la interfaz",
        "Carlos Curo",
        "Prototipo validado",
        "Maquetas aprobadas por el equipo y mostradas a docentes antes de desarrollar."
       ],
       [
        "1.4.2.2",
        "Desarrollo del tablero",
        "Carlos Curo",
        "Tablero implementado",
        "Carga en menos de 3 segundos y funciona en Chrome, Firefox y Edge."
       ],
       [
        "1.4.2.3",
        "Pruebas con usuarios",
        "Jhostin Galarza",
        "Reporte de validación de uso",
        "Pruebas con al menos 3 docentes y observaciones atendidas."
       ],
       [
        {
         "x": "1.4.3",
         "fill": "amarillo"
        },
        "Roles y accesos",
        "Jhostin Galarza",
        "Control de acceso por rol",
        "Cada rol ve solo lo que le corresponde; verificado con pruebas de acceso."
       ],
       [
        "1.5.1",
        "Despliegue del sistema",
        "Jadira Vasquez",
        "Sistema en producción en la nube",
        "Sistema operativo en el entorno de producción y accesos de administración entregados al colegio."
       ],
       [
        "1.5.2",
        "Manual de usuario",
        "Carlos Curo",
        "Manual de usuario",
        "Validado con al menos un docente y un coordinador."
       ],
       [
        "1.5.3",
        "Manual técnico",
        "Helber Perez",
        "Manual técnico",
        "Validado en la sesión de transferencia con el encargado de TI."
       ],
       [
        "1.5.4",
        "Plan de capacitación",
        "Jhostin Galarza",
        "Plan de capacitación",
        "Programa de dos horas aprobado por la coordinación."
       ],
       [
        "1.5.5",
        "Capacitación y cierre",
        "Jhostin Galarza",
        "Usuarios capacitados y acta de cierre",
        "Al menos 80 % de tutores y coordinadores capacitados; acta de cierre firmada."
       ],
       [
        "1.6.1",
        "Pruebas de integración y rendimiento",
        "Equipo del proyecto",
        "Reporte de pruebas",
        "Módulos integrados sin errores críticos; tablero en menos de 3 segundos."
       ],
       [
        "1.6.2",
        "Piloto y retroalimentación",
        "Equipo del proyecto",
        "Informe del piloto",
        "Dos semanas de uso por 3 docentes tutores y ajustes aplicados."
       ]
      ],
      "titulo": "Paquetes de trabajo",
      "compacta": true,
      "fuente": "En amarillo: paquetes que figuran en el diccionario de la EDT pero no en la declaración del alcance anterior. La declaración lista 18 paquetes y el diccionario, 20; la unificación está en evaluación (SC-10)."
     }
    ]
   },
   {
    "titulo": "7. Supuestos y restricciones",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Los supuestos y las restricciones del proyecto se mantienen en un solo lugar: el registro de supuestos (GOB-03). Los que más pesan sobre el alcance son:"
     },
     {
      "t": "ul",
      "items": [
       "**S-01 y S-02.** El colegio entrega exportaciones de notas de 2025 y 2026, con al menos dos periodos consecutivos por estudiante.",
       "**S-03.** La asistencia y las incidencias podrán registrarse en formato digital desde el Sprint 2; si no, el modelo trabajará solo con notas.",
       "**S-06.** Los apoderados son informados y dan su consentimiento antes de cargar datos reales.",
       "**R-02.** Solo herramientas de licencia libre o planes gratuitos.",
       "**R-04.** Ley N.° 29733: los estudiantes son menores de edad.",
       "**R-07.** Cubicol es de un tercero: el proyecto solo usa sus exportaciones."
      ]
     }
    ]
   },
   {
    "titulo": "8. Cambios respecto de la versión 2",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Tema",
       "Versión 2",
       "Versión 3",
       "Cambio"
      ],
      "anchos": [
       16,
       32,
       38,
       14
      ],
      "filas": [
       [
        "Alojamiento",
        "Sistema autohospedado en la infraestructura del colegio; la nube pública estaba excluida.",
        "Servicios gestionados en la nube; se excluye administrar servidores en el colegio.",
        "SC-03"
       ],
       [
        "Conexión",
        "Requería la red interna del colegio.",
        "Requiere conexión a internet.",
        "SC-03"
       ],
       [
        "Datos personales",
        "Los datos permanecían en el colegio.",
        "Se agregan el consentimiento de los apoderados y las condiciones para alojar datos fuera del país.",
        "SC-03"
       ],
       [
        "Correo de alertas",
        "Correo institucional.",
        "Correos personales autorizados; en evaluación.",
        "SC-09"
       ],
       [
        "Niveles y roles",
        "Tres niveles y cuatro roles en los documentos; cuatro y tres en el prototipo.",
        "Tres niveles y cuatro roles como estándar.",
        "SC-04"
       ],
       [
        "Criterio del modelo",
        "Precisión mínima de 75 %.",
        "Umbral de 75 % en la métrica acordada; redefinición en evaluación.",
        "SC-08"
       ],
       [
        "Responsables",
        "Equipo del curso anterior.",
        "Equipo actual.",
        "SC-01"
       ],
       [
        "Plazo",
        "Periodo del curso anterior.",
        "Del 12/10/2026 al 23/04/2027.",
        "SC-02"
       ],
       [
        "Asistencia con QR y WhatsApp",
        "No figuraban como requisitos, pero el blog los mostraba.",
        "Declarados fuera del alcance.",
        "—"
       ]
      ],
      "titulo": "Diferencias entre la versión 2 y la versión 3",
      "compacta": true
     }
    ]
   }
  ]
 },
 {
  "id": "ALC-03",
  "titulo": "Plan de gestión de la calidad",
  "dominio": "Alcance",
  "area": "Planificación",
  "proceso": "Planificar la gestión del alcance",
  "salida": "Plan de gestión de la calidad y métricas de calidad",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Define qué significa calidad en este proyecto, con qué métricas se mide, cómo se asegura durante el trabajo y cómo se controla cada entregable antes de presentarlo.",
  "carpeta": "03 - Alcance/3.3 Calidad",
  "pdf": "/documentos/ALC-03-plan-de-gestion-de-la-calidad.pdf",
  "docx": "/documentos/ALC-03-plan-de-gestion-de-la-calidad.docx",
  "secciones": [
   {
    "titulo": "1. Enfoque de la calidad",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "En la octava edición de la Guía del PMBOK®, la calidad no es un área separada: su planificación y su control están en el dominio de Alcance, y su aseguramiento, en el de Gobernanza. Este plan cubre los tres momentos y aplica el principio de incorporar la calidad en los procesos y en los entregables."
     },
     {
      "t": "tabla",
      "cols": [
       "Momento",
       "Pregunta que responde",
       "Dónde se documenta"
      ],
      "anchos": [
       24,
       44,
       32
      ],
      "filas": [
       [
        "Planificar la calidad",
        "¿Qué estándares aplican y cómo se medirán?",
        "Este plan"
       ],
       [
        "Asegurar la calidad",
        "¿Se están siguiendo los procesos acordados?",
        "Informes de calidad (GOB-07 y siguientes)"
       ],
       [
        "Controlar la calidad",
        "¿El entregable cumple sus requisitos?",
        "Casos de prueba y actas de aceptación (ALC-04)"
       ]
      ],
      "titulo": "Los tres momentos de la calidad"
     }
    ]
   },
   {
    "titulo": "2. Estándares y normas aplicables",
    "apaisada": false,
    "bloques": [
     {
      "t": "ul",
      "items": [
       "Guía del PMBOK®, octava edición, para la gestión del proyecto.",
       "Ley N.° 29733 de Protección de Datos Personales y su reglamento.",
       "Criterios de validación de los 20 requisitos y sus 80 casos de prueba.",
       "Buenas prácticas de validación de modelos predictivos: datos de prueba que el modelo no vio, comparación con una regla simple y reporte de la matriz de confusión.",
       "Convenciones de código del repositorio: revisión por otro integrante antes de integrar un cambio."
      ]
     }
    ]
   },
   {
    "titulo": "3. Métricas de calidad del producto",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Qué se mide",
       "Métrica",
       "Meta",
       "Requisito",
       "Cuándo"
      ],
      "anchos": [
       22,
       34,
       16,
       12,
       16
      ],
      "filas": [
       [
        "Datos integrados",
        "Registros cargados entre registros entregados; duplicados.",
        "100 %; cero duplicados",
        "REQ-01",
        "Sprint 2"
       ],
       [
        "Limpieza de datos",
        "Días seguidos de ejecución sin fallas críticas.",
        "15 días",
        "REQ-02",
        "Sprints 2 y 5"
       ],
       [
        "Modelo",
        "Métrica acordada sobre datos reales que el modelo no vio.",
        "75 % o más",
        "REQ-03",
        "Sprint 3"
       ],
       [
        "Modelo frente a una regla simple",
        "Diferencia con la regla «nota del periodo anterior menor de 11».",
        "El modelo la supera",
        "REQ-03 (SC-08)",
        "Sprint 3"
       ],
       [
        "Oportunidad de la alerta",
        "Horas entre la clasificación y el envío.",
        "24 horas o menos",
        "REQ-05",
        "Sprints 4 y 5"
       ],
       [
        "Rendimiento",
        "Tiempo de carga del tablero.",
        "Menos de 3 s en 95 % de los accesos",
        "RNF-02",
        "Sprint 5"
       ],
       [
        "Disponibilidad",
        "Tiempo disponible en horario escolar.",
        "95 % o más",
        "RNF-05",
        "Sprint 5"
       ],
       [
        "Facilidad de uso",
        "Docentes que usan el tablero sin ayuda tras la capacitación.",
        "Todos los capacitados; encuesta a 5 o más",
        "RNF-01",
        "Sprints 5 y 6"
       ],
       [
        "Control de acceso",
        "Accesos indebidos en las pruebas por rol.",
        "Cero",
        "REQ-11 y RNF-03",
        "Sprint 4"
       ],
       [
        "Seguimiento",
        "Alertas de riesgo alto con registro de seguimiento en el piloto.",
        "100 %",
        "REQ-07",
        "Sprint 5"
       ]
      ],
      "titulo": "Métricas de calidad del producto",
      "compacta": true
     }
    ]
   },
   {
    "titulo": "4. Métricas de calidad del proyecto",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Qué se mide",
       "Métrica",
       "Meta"
      ],
      "anchos": [
       30,
       46,
       24
      ],
      "filas": [
       [
        "Coherencia de la documentación",
        "Criterios de la lista de verificación que se cumplen.",
        "12 de 12"
       ],
       [
        "Casos de prueba",
        "Casos aprobados entre casos ejecutados en el sprint.",
        "90 % o más"
       ],
       [
        "Defectos",
        "Defectos críticos abiertos al cierre del sprint.",
        "Cero"
       ],
       [
        "Retrabajo",
        "Entregables devueltos con observaciones.",
        "20 % o menos"
       ],
       [
        "Datos personales",
        "Archivos con datos personales en el repositorio o en el blog.",
        "Cero"
       ]
      ],
      "titulo": "Métricas de calidad del proyecto",
      "fuente": "En la primera revisión (GOB-07), 1 de los 12 criterios de la lista de verificación se cumplía por completo y 4 se cumplían en parte."
     }
    ]
   },
   {
    "titulo": "5. Aseguramiento de la calidad",
    "apaisada": false,
    "bloques": [
     {
      "t": "ul",
      "items": [
       "**Revisión de calidad por sprint.** Antes de cada revisión de sprint se aplica la lista de verificación y se emite un informe de calidad.",
       "**Fuente única.** Los datos comunes del proyecto se escriben una sola vez y los documentos se generan desde ahí.",
       "**Revisión entre pares.** Ningún cambio de código o de contenido se integra sin la revisión de otro integrante.",
       "**Rótulo de lo simulado.** Todo dato, métrica o gráfico que no venga de una medición real se presenta como simulación.",
       "**Análisis de causa raíz.** Los hallazgos se agrupan por causa y la mejora se aplica al proceso, no solo al documento."
      ]
     }
    ]
   },
   {
    "titulo": "6. Control de la calidad",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "El control se hace con los 80 casos de prueba de la matriz de trazabilidad, cuatro por requisito. Un requisito pasa a «Completado» cuando sus cuatro casos están aprobados y el Product Owner lo acepta."
     },
     {
      "t": "tabla",
      "cols": [
       "Tipo de prueba",
       "Qué verifica",
       "Sprint",
       "Responsable"
      ],
      "anchos": [
       22,
       44,
       14,
       20
      ],
      "filas": [
       [
        "Reconciliación de datos",
        "Que la base coincide con los registros de origen.",
        "2",
        "Jadira Vasquez"
       ],
       [
        "Validación del modelo",
        "Desempeño con datos reales que el modelo no vio.",
        "3",
        "Helber Perez"
       ],
       [
        "Pruebas funcionales",
        "Cada requisito funcional frente a su criterio.",
        "2 a 4",
        "Quien desarrolla y un revisor"
       ],
       [
        "Pruebas de acceso por rol",
        "Que cada rol ve solo lo que le corresponde.",
        "4",
        "Jhostin Galarza"
       ],
       [
        "Pruebas de integración",
        "Que datos, modelo, alertas y tablero funcionan juntos.",
        "5",
        "Equipo del proyecto"
       ],
       [
        "Pruebas de rendimiento y carga",
        "Tiempo de carga y uso simultáneo.",
        "5",
        "Carlos Curo y Jadira Vasquez"
       ],
       [
        "Piloto",
        "Uso real por 3 docentes tutores durante dos semanas.",
        "5",
        "Equipo del proyecto"
       ],
       [
        "Pruebas de aceptación",
        "Aceptación formal por los docentes tutores.",
        "6",
        "Product Owner"
       ]
      ],
      "titulo": "Plan de pruebas"
     },
     {
      "t": "h",
      "x": "Definición de terminado"
     },
     {
      "t": "p",
      "x": "Un elemento de trabajo se considera terminado cuando cumple todo lo siguiente:"
     },
     {
      "t": "ol",
      "items": [
       "Cumple el criterio de validación de su requisito.",
       "Sus casos de prueba fueron ejecutados y aprobados.",
       "El cambio fue revisado por otro integrante e integrado en la rama principal.",
       "No usa datos personales reales fuera del entorno autorizado.",
       "Está documentado en el manual que corresponde.",
       "Fue mostrado en la revisión del sprint."
      ]
     }
    ]
   },
   {
    "titulo": "7. Roles y registros",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Rol",
       "Responsabilidad sobre la calidad"
      ],
      "anchos": [
       30,
       70
      ],
      "filas": [
       [
        "Director del proyecto",
        "Conduce la revisión de calidad de cada sprint y emite el informe."
       ],
       [
        "Responsable del control de cambios",
        "Aplica la lista de verificación a los documentos y mantiene la matriz de trazabilidad."
       ],
       [
        "Cada integrante",
        "Prueba lo que construye y revisa el trabajo de otro."
       ],
       [
        "Product Owner",
        "Acepta u observa los entregables."
       ],
       [
        "Docente asesor",
        "Observa el cumplimiento metodológico."
       ]
      ],
      "titulo": "Roles en la calidad"
     },
     {
      "t": "p",
      "x": "Registros de calidad: informes de calidad, resultados de los casos de prueba, actas de aceptación, registro de incidentes y registro de lecciones aprendidas."
     }
    ]
   }
  ]
 },
 {
  "id": "ALC-04",
  "titulo": "Procedimiento de validación del alcance",
  "dominio": "Alcance",
  "area": "Monitoreo y control",
  "proceso": "Validar el alcance",
  "salida": "Entregables aceptados y formato de acta de aceptación",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Establece cómo el colegio acepta formalmente cada entregable: quién lo revisa, contra qué criterio, en qué fecha y con qué formato queda la constancia.",
  "carpeta": "03 - Alcance/3.4 Validar el alcance",
  "pdf": "/documentos/ALC-04-procedimiento-de-validacion-del-alcance.pdf",
  "docx": "/documentos/ALC-04-procedimiento-de-validacion-del-alcance.docx",
  "secciones": [
   {
    "titulo": "1. Propósito",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Validar el alcance es obtener la aceptación formal de los entregables por parte del cliente. Es distinto del control de calidad: primero el equipo comprueba que el entregable es correcto (ALC-03) y después el Product Owner confirma que es lo que el colegio necesita."
     }
    ]
   },
   {
    "titulo": "2. Procedimiento",
    "apaisada": false,
    "bloques": [
     {
      "t": "ol",
      "items": [
       "El equipo verifica el entregable con sus casos de prueba y con la definición de terminado.",
       "El director del proyecto lo presenta en la revisión del sprint, con los resultados de las pruebas.",
       "El Product Owner lo inspecciona frente a los criterios de aceptación del enunciado del alcance (ALC-02).",
       "El resultado se registra en un acta de aceptación: aceptado, aceptado con observaciones o no aceptado.",
       "Las observaciones se convierten en trabajo del sprint siguiente; un pedido nuevo se trata como solicitud de cambio (GOB-10).",
       "La matriz de trazabilidad se actualiza con el nuevo estado de los requisitos."
      ]
     },
     {
      "t": "tabla",
      "cols": [
       "Resultado",
       "Significado",
       "Qué sigue"
      ],
      "anchos": [
       26,
       40,
       34
      ],
      "filas": [
       [
        {
         "x": "Aceptado",
         "fill": "verde",
         "bold": true
        },
        "Cumple los criterios.",
        "El requisito pasa a «Completado»."
       ],
       [
        {
         "x": "Aceptado con observaciones",
         "fill": "amarillo",
         "bold": true
        },
        "Cumple lo esencial; faltan ajustes menores.",
        "Los ajustes se programan en el sprint siguiente."
       ],
       [
        {
         "x": "No aceptado",
         "fill": "rojo",
         "bold": true
        },
        "No cumple un criterio.",
        "Se corrige y se vuelve a presentar; se registra un incidente."
       ]
      ],
      "titulo": "Resultados posibles de la validación"
     }
    ]
   },
   {
    "titulo": "3. Plan de validación por hito",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Hito",
       "Fecha",
       "Qué se valida",
       "Cómo",
       "Quién acepta"
      ],
      "anchos": [
       14,
       13,
       30,
       28,
       15
      ],
      "filas": [
       [
        "Revisión del Sprint 1",
        "06/11/2026",
        [
         "Arquitectura del sistema",
         "Lista de variables del modelo validada con docentes"
        ],
        "Revisión del documento de arquitectura y del acta del taller de variables.",
        "Product Owner"
       ],
       [
        "Revisión del Sprint 2",
        "04/12/2026",
        [
         "E-01 Módulo de integración y limpieza de datos"
        ],
        "Reconciliación de datos en tres fechas y revisión del reporte de calidad de datos.",
        "Product Owner"
       ],
       [
        "Revisión del Sprint 3",
        "30/12/2026",
        [
         "E-02 Modelo predictivo de riesgo académico"
        ],
        "Revisión del informe de validación del modelo con el docente asesor.",
        "Product Owner"
       ],
       [
        "Revisión del Sprint 4",
        "29/01/2027",
        [
         "E-03 Motor de alertas tempranas",
         "E-04 Tablero web",
         "E-05 Gestión de roles y accesos"
        ],
        "Demostración del sistema integrado y pruebas de acceso por rol.",
        "Product Owner"
       ],
       [
        "Revisión del Sprint 5",
        "24/03/2027",
        [
         "E-09 Informe del piloto"
        ],
        "Revisión del informe del piloto y de las pruebas de integración y rendimiento.",
        "Product Owner y patrocinadora"
       ],
       [
        "Revisión del Sprint 6",
        "23/04/2027",
        [
         "E-06 Manual de usuario",
         "E-07 Manual técnico",
         "E-08 Plan y sesión de capacitación"
        ],
        "Pruebas de aceptación con los tutores, revisión de manuales y lista de asistencia a la capacitación.",
        "Product Owner y patrocinadora"
       ]
      ],
      "titulo": "Validación de entregables por hito",
      "compacta": true
     },
     {
      "t": "nota",
      "tipo": "aviso",
      "x": "Al 10/10/2026 no se ha validado ningún entregable: el Sprint 1 empieza el 12/10/2026. Mientras la Dirección no designe al Product Owner (supuesto S-04), la aceptación la da la patrocinadora."
     }
    ]
   },
   {
    "titulo": "4. Formato de acta de aceptación",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "En cada revisión de sprint se llena un acta con este formato."
     },
     {
      "t": "kv",
      "filas": [
       [
        "Proyecto",
        "SIA-T — I.E.P. Peruano Francés"
       ],
       [
        "Acta N.°",
        ""
       ],
       [
        "Sprint e hito",
        ""
       ],
       [
        "Fecha y lugar",
        ""
       ],
       [
        "Participantes",
        ""
       ]
      ]
     },
     {
      "t": "tabla",
      "cols": [
       "Entregable",
       "Criterio de aceptación",
       "Evidencia presentada",
       "Resultado",
       "Observaciones"
      ],
      "anchos": [
       20,
       24,
       20,
       14,
       22
      ],
      "filas": [
       [
        "",
        "",
        "",
        "",
        ""
       ],
       [
        "",
        "",
        "",
        "",
        ""
       ],
       [
        "",
        "",
        "",
        "",
        ""
       ]
      ],
      "titulo": "Entregables revisados (formato)"
     },
     {
      "t": "kv",
      "filas": [
       [
        "Acuerdos y pendientes",
        ""
       ],
       [
        "Solicitudes de cambio derivadas",
        ""
       ]
      ]
     },
     {
      "t": "firmas",
      "firmantes": [
       {
        "nombre": "Product Owner",
        "rol": "I.E.P. Peruano Francés"
       },
       {
        "nombre": "Jhostin J. Galarza Camarena",
        "rol": "Director del proyecto"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "ALC-05",
  "titulo": "Informe de avance del producto por EDT N.º 1",
  "dominio": "Alcance",
  "area": "Monitoreo y control",
  "proceso": "Monitorear y controlar el alcance",
  "salida": "Información de desempeño del trabajo y entregables verificados",
  "version": "1.0",
  "fecha": "10/10/2026",
  "resumen": "Compara lo que existe hoy del sistema con cada paquete de trabajo de la EDT, separa lo real de lo que es demostración y prepara la presentación del entregable al docente asesor.",
  "carpeta": "03 - Alcance/3.5 Controlar el alcance",
  "pdf": "/documentos/ALC-05-informe-de-avance-del-producto-por-edt-n-1.pdf",
  "docx": "/documentos/ALC-05-informe-de-avance-del-producto-por-edt-n-1.docx",
  "secciones": [
   {
    "titulo": "1. Propósito y corte",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Monitorear y controlar el alcance es comparar el trabajo hecho con la línea base. Fecha de corte: 10/10/2026. Los sprints del proyecto empiezan el 12/10/2026, así que lo que se mide aquí es el punto de partida del producto: el prototipo heredado de la fase de formulación, con los ajustes aplicados el 10/10/2026."
     },
     {
      "t": "kv",
      "filas": [
       [
        "Página del prototipo",
        "https://proyecto-siat.vercel.app"
       ],
       [
        "API del prototipo",
        "https://proyecto-siat.onrender.com"
       ],
       [
        "Repositorio del sistema",
        "https://github.com/Jhostin2210/Proyecto-SIAT"
       ]
      ]
     }
    ]
   },
   {
    "titulo": "2. Avance por paquete de trabajo",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Paquete",
       "Estado",
       "Qué existe hoy",
       "Qué falta para cumplir el criterio"
      ],
      "anchos": [
       22,
       12,
       34,
       32
      ],
      "filas": [
       [
        "1.1.1 Cronograma de hitos",
        {
         "x": "Cumplido",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Línea base del cronograma, versión 3 (CRO-01).",
        "Mantenerlo actualizado ante cada cambio."
       ],
       [
        "1.1.2 Informes de avance",
        {
         "x": "En curso",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Informe de desempeño N.º 1 (GOB-09).",
        "Un informe al cierre de cada sprint."
       ],
       [
        "1.1.3 Actas y control de cambios",
        {
         "x": "En curso",
         "fill": "azul",
         "bold": true,
         "align": "center"
        },
        "Registro de cambios con 10 solicitudes (GOB-10).",
        "Actas de las reuniones desde el inicio."
       ],
       [
        "1.2.1 Integración de datos (ETL)",
        {
         "x": "Prototipo",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Esquema de la base de datos con ocho tablas. La carga de datos está esbozada y la base está vacía.",
        "Cargar las exportaciones de Cubicol y reconciliarlas."
       ],
       [
        "1.2.2 Calidad de datos",
        {
         "x": "No iniciado",
         "fill": "gris",
         "bold": true,
         "align": "center"
        },
        "—",
        "Limpieza y reporte de calidad de los datos reales."
       ],
       [
        "1.3.1 Entrenamiento del modelo",
        {
         "x": "Prototipo",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Modelo Random Forest de demostración, entrenado con un conjunto de datos sintético.",
        "Entrenarlo con datos reales del colegio."
       ],
       [
        "1.3.2 Clasificación de riesgo",
        {
         "x": "Prototipo",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "La API calcula el riesgo de un caso y lo clasifica en tres niveles.",
        "Ejecución semanal automática para todos los estudiantes."
       ],
       [
        "1.3.3 Validación del modelo",
        {
         "x": "No iniciado",
         "fill": "gris",
         "bold": true,
         "align": "center"
        },
        "No hay métricas reales: las que mostraba el prototipo se retiraron.",
        "Validar con datos que el modelo no vio (SC-08)."
       ],
       [
        "1.4.1 Motor de alertas",
        {
         "x": "Prototipo",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Lista de alertas en pantalla para los niveles medio y alto.",
        "Envío por correo, historial y registro de seguimiento."
       ],
       [
        "1.4.2.1 Diseño de la interfaz",
        {
         "x": "Demostrable",
         "fill": "teal",
         "bold": true,
         "align": "center"
        },
        "Prototipo navegable en línea: inicio, estudiantes, riesgos y simulador.",
        "Mostrarlo a los docentes y recoger sus observaciones."
       ],
       [
        "1.4.2.2 Desarrollo del tablero",
        {
         "x": "Prototipo",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Tablero, lista y ficha del estudiante conectados a la API, con datos de ejemplo.",
        "Datos reales, filtros por nivel educativo y reportes exportables."
       ],
       [
        "1.4.2.3 Pruebas con usuarios",
        {
         "x": "No iniciado",
         "fill": "gris",
         "bold": true,
         "align": "center"
        },
        "—",
        "Pruebas con al menos tres docentes."
       ],
       [
        "1.4.3 Roles y accesos",
        {
         "x": "No iniciado",
         "fill": "gris",
         "bold": true,
         "align": "center"
        },
        "La tabla de usuarios está en el esquema; no hay ingreso con usuario y contraseña.",
        "Autenticación y vistas por rol."
       ],
       [
        "1.5.1 Despliegue del sistema",
        {
         "x": "Prototipo",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Entorno de demostración en línea (página y API).",
        "Entorno de producción con base de datos gestionada y tarea programada (GOB-05)."
       ],
       [
        "1.5.2 Manual de usuario",
        {
         "x": "No iniciado",
         "fill": "gris",
         "bold": true,
         "align": "center"
        },
        "—",
        "Manual de usuario."
       ],
       [
        "1.5.3 Manual técnico",
        {
         "x": "No iniciado",
         "fill": "gris",
         "bold": true,
         "align": "center"
        },
        "Guía de instalación en el repositorio del sistema.",
        "Manual técnico completo."
       ],
       [
        "1.5.4 Plan de capacitación",
        {
         "x": "No iniciado",
         "fill": "gris",
         "bold": true,
         "align": "center"
        },
        "—",
        "Plan de capacitación."
       ],
       [
        "1.5.5 Capacitación y cierre",
        {
         "x": "No iniciado",
         "fill": "gris",
         "bold": true,
         "align": "center"
        },
        "—",
        "Capacitación y cierre."
       ],
       [
        "1.6.1 Pruebas de integración y rendimiento",
        {
         "x": "No iniciado",
         "fill": "gris",
         "bold": true,
         "align": "center"
        },
        "—",
        "Pruebas de integración y rendimiento."
       ],
       [
        "1.6.2 Piloto y retroalimentación",
        {
         "x": "No iniciado",
         "fill": "gris",
         "bold": true,
         "align": "center"
        },
        "—",
        "Piloto con tres docentes tutores."
       ]
      ],
      "titulo": "Estado de los 20 paquetes de la EDT al 10/10/2026",
      "compacta": true,
      "fuente": "Cumplido: cumple su criterio de aceptación. En curso: gestión que continúa todo el proyecto. Demostrable: se puede mostrar, con su criterio cumplido en parte. Prototipo: versión de demostración que aún no cumple el criterio."
     },
     {
      "t": "tabla",
      "cols": [
       "Estado",
       "Paquetes"
      ],
      "anchos": [
       60,
       40
      ],
      "filas": [
       [
        {
         "x": "Cumplido",
         "fill": "verde",
         "bold": true
        },
        {
         "x": "1",
         "align": "center"
        }
       ],
       [
        {
         "x": "En curso",
         "fill": "azul",
         "bold": true
        },
        {
         "x": "2",
         "align": "center"
        }
       ],
       [
        {
         "x": "Demostrable",
         "fill": "teal",
         "bold": true
        },
        {
         "x": "1",
         "align": "center"
        }
       ],
       [
        {
         "x": "Prototipo",
         "fill": "amarillo",
         "bold": true
        },
        {
         "x": "6",
         "align": "center"
        }
       ],
       [
        {
         "x": "No iniciado",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "10",
         "align": "center"
        }
       ],
       [
        {
         "x": "Total",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "20",
         "fill": "gris",
         "align": "center",
         "bold": true
        }
       ]
      ],
      "titulo": "Resumen del avance"
     },
     {
      "t": "p",
      "x": "El avance coincide con el cronograma: los paquetes de datos corresponden al Sprint 2, los del modelo al Sprint 3 y los de alertas y tablero al Sprint 4. En interfaz el producto está adelantado, porque el prototipo se construyó en la fase de formulación."
     }
    ]
   },
   {
    "titulo": "3. Entregable que se demuestra",
    "apaisada": false,
    "bloques": [
     {
      "t": "kv",
      "filas": [
       [
        "Paquete de la EDT",
        "1.4.2.1 Diseño de la interfaz, con avance del 1.4.2.2 Desarrollo del tablero"
       ],
       [
        "Entregable",
        "Prototipo validado"
       ],
       [
        "Criterio de aceptación",
        "Maquetas aprobadas por el equipo y mostradas a docentes antes de desarrollar."
       ],
       [
        "Situación del criterio",
        "Cumplido en parte: el equipo lo aprobó; falta mostrarlo a los docentes y recoger sus observaciones."
       ],
       [
        "Evidencia",
        "Prototipo navegable en línea, conectado a la API, con el simulador usando el modelo."
       ]
      ]
     },
     {
      "t": "p",
      "x": "Se eligió este paquete porque es el único cuyo resultado se puede mostrar funcionando hoy sin presentar como terminado algo que no lo está."
     }
    ]
   },
   {
    "titulo": "4. Qué es real y qué es demostración",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Elemento",
       "Situación",
       "Detalle"
      ],
      "anchos": [
       28,
       18,
       54
      ],
      "filas": [
       [
        "Pantallas y navegación",
        {
         "x": "Real",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Inicio, estudiantes, ficha, riesgos y simulador funcionan."
       ],
       [
        "Conexión de la página con la API",
        {
         "x": "Real",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "La página consulta la API en línea y muestra de dónde vienen los datos."
       ],
       [
        "Cálculo del riesgo en el simulador",
        {
         "x": "Real",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Lo calcula el modelo cargado en la API, no una regla escrita en la página."
       ],
       [
        "Tres niveles de riesgo",
        {
         "x": "Real",
         "fill": "verde",
         "bold": true,
         "align": "center"
        },
        "Bajo, medio y alto, como define el alcance. Los cortes son provisionales."
       ],
       [
        "Estudiantes y notas",
        {
         "x": "Ejemplo",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Cinco estudiantes ficticios. La base de datos está vacía."
       ],
       [
        "Modelo",
        {
         "x": "Demostración",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "Entrenado con datos sintéticos: no demuestra capacidad de predicción (SC-08)."
       ],
       [
        "Gráfico de tendencia",
        {
         "x": "Ilustrativo",
         "fill": "amarillo",
         "bold": true,
         "align": "center"
        },
        "No hay historial real de alertas."
       ],
       [
        "Métricas del modelo",
        {
         "x": "No hay",
         "fill": "gris",
         "bold": true,
         "align": "center"
        },
        "Se publicarán cuando el modelo se valide con datos reales."
       ],
       [
        "Alertas por correo, usuarios y roles",
        {
         "x": "No hay",
         "fill": "gris",
         "bold": true,
         "align": "center"
        },
        "Corresponden al Sprint 4."
       ]
      ],
      "titulo": "Lo que la demostración muestra de verdad"
     },
     {
      "t": "nota",
      "tipo": "info",
      "x": "La página lleva un rótulo permanente de «Demostración» que dice lo mismo que esta tabla."
     }
    ]
   },
   {
    "titulo": "5. Ajustes aplicados al prototipo",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Para que la demostración coincida con la documentación, el 10/10/2026 se aplicaron estos ajustes en el repositorio del sistema:"
     },
     {
      "t": "ul",
      "items": [
       "La página consulta la API en línea; antes apuntaba a una dirección local y mostraba datos fijos.",
       "El simulador pide el cálculo al modelo de la API; si la API no responde, lo dice y no presenta el resultado como si fuera del modelo.",
       "Tres niveles de riesgo en la página y en la API (solicitud de cambio SC-04).",
       "Rótulo visible de demostración y de origen de los datos.",
       "La API ya no devuelve métricas por defecto y tiene una consulta de estado que informa qué es real y qué es de ejemplo (incidente IN-03).",
       "Guía del repositorio con el estado real del sistema."
      ]
     },
     {
      "t": "p",
      "x": "No se cambió el modelo ni se agregaron datos: eso corresponde a los Sprints 2 y 3."
     }
    ]
   },
   {
    "titulo": "6. Guion de la demostración",
    "apaisada": false,
    "bloques": [
     {
      "t": "p",
      "x": "Duración: unos cinco minutos. Conviene abrir la página unos minutos antes, porque la API tarda cerca de un minuto en responder la primera vez."
     },
     {
      "t": "ol",
      "items": [
       "**Ubicar el entregable.** Mostrar en la EDT el paquete 1.4.2.1 y su criterio de aceptación.",
       "**Panel principal.** Señalar el rótulo de demostración y explicar qué es de ejemplo. Mostrar la distribución por nivel de riesgo y las alertas.",
       "**Estudiantes.** Filtrar por nivel de riesgo y abrir la ficha de un estudiante.",
       "**Simulador.** Ingresar notas bajas y varias inasistencias: el modelo de la API devuelve riesgo alto y los factores. Cambiar a notas altas: devuelve riesgo bajo.",
       "**Estado de la API.** Abrir la consulta de estado: origen de los datos «ejemplo», modelo cargado y tres niveles.",
       "**Avance por EDT.** Mostrar la tabla de la sección 2 y lo que sigue en el cronograma."
      ]
     }
    ]
   },
   {
    "titulo": "7. Qué sigue",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Sprint",
       "Cierre",
       "Qué cambia en el producto"
      ],
      "anchos": [
       26,
       16,
       58
      ],
      "filas": [
       [
        "Sprint 1 · Análisis y diseño",
        "06/11/2026",
        "Variables validadas con los docentes y arquitectura definitiva. El prototipo se muestra a los docentes."
       ],
       [
        "Sprint 2 · Gestión y datos",
        "04/12/2026",
        "Base de datos con notas reales del colegio; la página deja de usar datos de ejemplo."
       ],
       [
        "Sprint 3 · Modelo ML",
        "30/12/2026",
        "Modelo entrenado y validado con datos reales; se publican sus métricas."
       ],
       [
        "Sprint 4 · Alertas y tablero",
        "29/01/2027",
        "Alertas por correo, reportes y acceso por rol."
       ]
      ],
      "titulo": "Próximos cambios del producto según el cronograma"
     },
     {
      "t": "p",
      "x": "No se generan solicitudes de cambio a partir de este informe. El siguiente se emite al cierre del Sprint 1."
     }
    ]
   }
  ]
 },
 {
  "id": "CRO-01",
  "titulo": "Línea base del cronograma",
  "dominio": "Cronograma",
  "area": "Planificación",
  "proceso": "Desarrollar el cronograma",
  "salida": "Plan de gestión del cronograma, línea base del cronograma y cronograma de hitos",
  "version": "3.0",
  "fecha": "10/10/2026",
  "resumen": "Programa las 44 actividades del proyecto y la reunión diaria en seis sprints, del 12/10/2026 al 23/04/2027, con receso en febrero por vacaciones escolares. Mantiene la estimación PERT de la versión 2 y actualiza equipo, fechas y totales.",
  "carpeta": "04 - Cronograma",
  "pdf": "/documentos/CRO-01-linea-base-del-cronograma.pdf",
  "docx": "/documentos/CRO-01-linea-base-del-cronograma.docx",
  "secciones": [
   {
    "titulo": "1. Cambios respecto de la versión 2",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Tema",
       "Versión 2",
       "Versión 3",
       "Cambio"
      ],
      "anchos": [
       18,
       32,
       38,
       12
      ],
      "filas": [
       [
        "Periodo",
        "El documento y sus anexos tenían tres calendarios: marzo a agosto de 2026, agosto de 2026 a enero de 2027, y octubre de 2026 a abril de 2027.",
        "Un solo calendario: del 12/10/2026 al 23/04/2027.",
        "SC-02"
       ],
       [
        "Receso",
        "Sin receso: el piloto con docentes caía en vacaciones escolares.",
        "Receso del 01/02/2027 al 26/02/2027; el piloto pasa a marzo de 2027.",
        "SC-02"
       ],
       [
        "Equipo",
        "Integrantes del curso anterior.",
        "Equipo actual; paquetes reasignados.",
        "SC-01"
       ],
       [
        "Despliegue",
        "Configurar un servidor en el colegio.",
        "Configurar el entorno de producción en la nube (A-5.1.1.1).",
        "SC-03"
       ],
       [
        "Número de actividades",
        "El texto decía 40.",
        "44 actividades con estimación PERT y una reunión diaria continua.",
        "SC-06"
       ],
       [
        "Totales PERT",
        "Desviaciones por sprint y número de actividades críticas que no coincidían con la tabla.",
        "Totales recalculados desde la tabla de actividades.",
        "SC-06"
       ],
       [
        "Control con valor ganado",
        "Redactado como si fuera el resultado real.",
        "Presentado como ejercicio de simulación.",
        "—"
       ]
      ],
      "titulo": "Diferencias entre la versión 2 y la versión 3",
      "compacta": true
     },
     {
      "t": "p",
      "x": "No cambian las actividades, su secuencia ni sus tres estimaciones de duración."
     }
    ]
   },
   {
    "titulo": "2. Plan de gestión del cronograma",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Aspecto",
       "Definición"
      ],
      "anchos": [
       28,
       72
      ],
      "filas": [
       [
        "Método de programación",
        "Seis sprints de cuatro semanas (Scrum) dentro de una línea base predictiva; ruta crítica para identificar las actividades sin holgura."
       ],
       [
        "Estimación",
        "Tres valores por actividad (optimista, más probable y pesimista) y duración esperada PERT: Te = (To + 4·Tm + Tp) / 6. Desviación estándar: σ = (Tp − To) / 6."
       ],
       [
        "Unidad",
        "Días hábiles, de lunes a viernes. No se trabaja en feriados."
       ],
       [
        "Herramientas",
        "MS Project para la red y el diagrama de Gantt; tablero de tareas para el trabajo del sprint."
       ],
       [
        "Nivel de detalle",
        "Actividades de uno a siete días, asignadas a una semana o a un rango de semanas."
       ],
       [
        "Actualización",
        "El avance se registra cada semana y se consolida al cierre de cada sprint."
       ],
       [
        "Umbrales de control",
        "SPI de 1.00 o más: verde. Entre 0.90 y 0.99: amarillo. Menos de 0.90: rojo; se evalúa una solicitud de cambio."
       ],
       [
        "Reservas",
        "Holgura de los sprints frente a los días hábiles disponibles y una semana de reserva de gestión al final del receso (22 al 26 de febrero de 2027)."
       ],
       [
        "Cambios",
        "Mover la fecha de un hito requiere una solicitud de cambio (GOB-10)."
       ]
      ],
      "titulo": "Reglas para gestionar el cronograma"
     }
    ]
   },
   {
    "titulo": "3. Calendario del proyecto",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Sprint",
       "Semanas",
       "Inicio",
       "Fin",
       "Revisión",
       "Entregable de la revisión"
      ],
      "anchos": [
       20,
       10,
       12,
       12,
       12,
       34
      ],
      "filas": [
       [
        "Sprint 1 · Análisis y diseño",
        "S1–S4",
        "12/10/2026",
        "06/11/2026",
        "06/11/2026",
        "Arquitectura validada y variables del modelo definidas"
       ],
       [
        "Sprint 2 · Gestión y datos",
        "S5–S8",
        "09/11/2026",
        "04/12/2026",
        "04/12/2026",
        "Base de datos centralizada y validada"
       ],
       [
        "Sprint 3 · Modelo ML",
        "S9–S12",
        "07/12/2026",
        "01/01/2027",
        "30/12/2026",
        "Modelo ML validado con el criterio acordado"
       ],
       [
        "Sprint 4 · Alertas y tablero",
        "S13–S16",
        "04/01/2027",
        "29/01/2027",
        "29/01/2027",
        "Sistema integrado con alertas y tablero operativos"
       ],
       [
        {
         "x": "Receso",
         "fill": "gris"
        },
        {
         "x": "—",
         "fill": "gris"
        },
        {
         "x": "01/02/2027",
         "fill": "gris"
        },
        {
         "x": "26/02/2027",
         "fill": "gris"
        },
        {
         "x": "—",
         "fill": "gris"
        },
        {
         "x": "Vacaciones escolares; la semana del 22 al 26 de febrero es la reserva de gestión.",
         "fill": "gris"
        }
       ],
       [
        "Sprint 5 · Pruebas y piloto",
        "S17–S20",
        "01/03/2027",
        "26/03/2027",
        "24/03/2027",
        "Sistema validado con pruebas y piloto real con docentes"
       ],
       [
        "Sprint 6 · Implantación y cierre",
        "S21–S24",
        "29/03/2027",
        "23/04/2027",
        "23/04/2027",
        "Sistema en producción, capacitación realizada y proyecto cerrado"
       ]
      ],
      "titulo": "Calendario de sprints"
     },
     {
      "t": "tabla",
      "cols": [
       "Fecha",
       "Feriado",
       "Sprint afectado"
      ],
      "anchos": [
       25,
       45,
       30
      ],
      "filas": [
       [
        "mar 08/12/2026",
        "Inmaculada Concepción",
        "Sprint 3"
       ],
       [
        "mié 09/12/2026",
        "Batalla de Ayacucho",
        "Sprint 3"
       ],
       [
        "vie 25/12/2026",
        "Navidad",
        "Sprint 3"
       ],
       [
        "vie 01/01/2027",
        "Año Nuevo",
        "Sprint 3"
       ],
       [
        "jue 25/03/2027",
        "Jueves Santo",
        "Sprint 5"
       ],
       [
        "vie 26/03/2027",
        "Viernes Santo",
        "Sprint 5"
       ]
      ],
      "titulo": "Feriados dentro del periodo del proyecto"
     },
     {
      "t": "p",
      "x": "El proyecto tiene 24 semanas de trabajo, que equivalen a 114 días hábiles después de descontar los 6 feriados. Entre el Sprint 4 y el Sprint 5 hay un receso de cuatro semanas (01/02/2027 al 26/02/2027) porque el colegio está de vacaciones y no hay docentes para las pruebas ni para el piloto."
     }
    ]
   },
   {
    "titulo": "4. Lista de actividades y estimación PERT",
    "apaisada": true,
    "bloques": [
     {
      "t": "p",
      "x": "Duraciones en días hábiles. To: optimista. Tm: más probable. Tp: pesimista. Te: duración esperada. σ: desviación estándar. RC: actividad de la ruta crítica. Las fechas de inicio y fin se asignan dentro de la semana indicada, según la duración esperada."
     },
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Actividad",
       "Responsable",
       "Sem.",
       "Inicio",
       "Fin",
       "To",
       "Tm",
       "Tp",
       "Te",
       "σ",
       "RC"
      ],
      "anchos": [
       8,
       33,
       15,
       6,
       8,
       8,
       3.5,
       3.5,
       3.5,
       4,
       4,
       3.5
      ],
      "filas": [
       [
        "A-0.1.1.1",
        "Reunión de levantamiento con directivos, coordinadores y área de TI para validar el alcance del sistema y acceso a datos académicos",
        "Equipo del proyecto + Dirección",
        {
         "x": "S1",
         "align": "center"
        },
        {
         "x": "12/10/2026",
         "align": "center"
        },
        {
         "x": "14/10/2026",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "3.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-0.1.1.2",
        "Análisis de calidad y disponibilidad de datos académicos existentes en los sistemas del colegio",
        "Jadira Vasquez + Helber Perez",
        {
         "x": "S2",
         "align": "center"
        },
        {
         "x": "19/10/2026",
         "align": "center"
        },
        {
         "x": "23/10/2026",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "8",
         "align": "center"
        },
        {
         "x": "5.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.83",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-0.1.1.3",
        "Definición y validación con docentes de las variables académicas que predicen el riesgo de bajo rendimiento",
        "Helber Perez + docentes",
        {
         "x": "S3",
         "align": "center"
        },
        {
         "x": "26/10/2026",
         "align": "center"
        },
        {
         "x": "29/10/2026",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "4.0",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.67",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-0.1.1.4",
        "Diseño de la arquitectura completa del sistema: módulos, integraciones, flujo de datos y tecnologías",
        "Jadira Vasquez + Helber Perez",
        {
         "x": "S4",
         "align": "center"
        },
        {
         "x": "02/11/2026",
         "align": "center"
        },
        {
         "x": "06/11/2026",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "7",
         "align": "center"
        },
        {
         "x": "5.0",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.67",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "Sprint 1: 4 actividades",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "12/10/2026",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "06/11/2026",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "17.4",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "1.35",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "0",
         "fill": "gris",
         "align": "center",
         "bold": true
        }
       ]
      ],
      "titulo": "Sprint 1 · Análisis y diseño (semanas 1 a 4)",
      "compacta": true
     },
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Actividad",
       "Responsable",
       "Sem.",
       "Inicio",
       "Fin",
       "To",
       "Tm",
       "Tp",
       "Te",
       "σ",
       "RC"
      ],
      "anchos": [
       8,
       33,
       15,
       6,
       8,
       8,
       3.5,
       3.5,
       3.5,
       4,
       4,
       3.5
      ],
      "filas": [
       [
        "A-1.1.1.1",
        "Elaborar cronograma de hitos del proyecto (Gantt SCRUM)",
        "Jhostin Galarza",
        {
         "x": "S5",
         "align": "center"
        },
        {
         "x": "09/11/2026",
         "align": "center"
        },
        {
         "x": "11/11/2026",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "3.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-1.1.1.2",
        "Definir Product Backlog y priorizar historias de usuario",
        "Equipo del proyecto",
        {
         "x": "S5",
         "align": "center"
        },
        {
         "x": "11/11/2026",
         "align": "center"
        },
        {
         "x": "13/11/2026",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "3.0",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.33",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-1.1.1.3",
        "Asignar roles SCRUM: Product Owner, Scrum Master, Dev Team",
        "Equipo del proyecto",
        {
         "x": "S5",
         "align": "center"
        },
        {
         "x": "12/11/2026",
         "align": "center"
        },
        {
         "x": "12/11/2026",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "1.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.17",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-1.2.1.1",
        "Establecer plantilla de informe de avance semanal",
        "Jhostin Galarza",
        {
         "x": "S5",
         "align": "center"
        },
        {
         "x": "13/11/2026",
         "align": "center"
        },
        {
         "x": "13/11/2026",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "1.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.17",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-1.2.1.2",
        "Daily Standup 15 min diarios — continuo todo el proyecto",
        "Jhostin Galarza",
        {
         "x": "S5–S24",
         "align": "center"
        },
        {
         "x": "09/11/2026",
         "align": "center"
        },
        {
         "x": "23/04/2027",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "—",
         "align": "center",
         "bold": true
        },
        {
         "x": "—",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-2.1.1.1",
        "Levantar y mapear fuentes de datos académicos (asistencia, notas, participación, incidencias)",
        "Jadira Vasquez",
        {
         "x": "S6",
         "align": "center"
        },
        {
         "x": "16/11/2026",
         "align": "center"
        },
        {
         "x": "19/11/2026",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "4.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-2.1.1.2",
        "Diseñar modelo entidad-relación de la BD centralizada (PostgreSQL)",
        "Jadira Vasquez",
        {
         "x": "S6",
         "align": "center"
        },
        {
         "x": "18/11/2026",
         "align": "center"
        },
        {
         "x": "20/11/2026",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "3.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-2.1.1.3",
        "Codificar scripts ETL de extracción, transformación y carga",
        "Jadira Vasquez + Carlos Curo",
        {
         "x": "S7",
         "align": "center"
        },
        {
         "x": "23/11/2026",
         "align": "center"
        },
        {
         "x": "27/11/2026",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "8",
         "align": "center"
        },
        {
         "x": "5.3",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.67",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-2.1.1.4",
        "Ejecutar prueba de migración de datos y validar integridad",
        "Jadira Vasquez",
        {
         "x": "S7",
         "align": "center"
        },
        {
         "x": "25/11/2026",
         "align": "center"
        },
        {
         "x": "27/11/2026",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "3.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-2.2.1.1",
        "Configurar tareas programadas nocturnas de limpieza y validación de datos",
        "Jadira Vasquez",
        {
         "x": "S8",
         "align": "center"
        },
        {
         "x": "30/11/2026",
         "align": "center"
        },
        {
         "x": "03/12/2026",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "4.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-2.2.1.2",
        "Verificar consistencia de datos y corrección de registros erróneos",
        "Jadira Vasquez + Carlos Curo",
        {
         "x": "S8",
         "align": "center"
        },
        {
         "x": "02/12/2026",
         "align": "center"
        },
        {
         "x": "04/12/2026",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "3.0",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.33",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "Sprint 2: 10 actividades",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "09/11/2026",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "04/12/2026",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "31.7",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "1.40",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "5",
         "fill": "gris",
         "align": "center",
         "bold": true
        }
       ]
      ],
      "titulo": "Sprint 2 · Gestión y datos (semanas 5 a 8)",
      "compacta": true
     },
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Actividad",
       "Responsable",
       "Sem.",
       "Inicio",
       "Fin",
       "To",
       "Tm",
       "Tp",
       "Te",
       "σ",
       "RC"
      ],
      "anchos": [
       8,
       33,
       15,
       6,
       8,
       8,
       3.5,
       3.5,
       3.5,
       4,
       4,
       3.5
      ],
      "filas": [
       [
        "A-3.1.1.1",
        "Análisis exploratorio del dataset académico (EDA)",
        "Helber Perez",
        {
         "x": "S9",
         "align": "center"
        },
        {
         "x": "07/12/2026",
         "align": "center"
        },
        {
         "x": "14/12/2026",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "4.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-3.1.1.2",
        "Preprocesar y normalizar variables académicas para el modelo",
        "Helber Perez",
        {
         "x": "S9",
         "align": "center"
        },
        {
         "x": "10/12/2026",
         "align": "center"
        },
        {
         "x": "14/12/2026",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "3.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-3.1.1.3",
        "Seleccionar algoritmo ML (Random Forest / Gradient Boosting / Regresión logística)",
        "Helber Perez",
        {
         "x": "S10",
         "align": "center"
        },
        {
         "x": "14/12/2026",
         "align": "center"
        },
        {
         "x": "16/12/2026",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "3.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-3.1.1.4",
        "Entrenar modelo predictivo con Scikit-learn usando datos históricos",
        "Helber Perez",
        {
         "x": "S10",
         "align": "center"
        },
        {
         "x": "16/12/2026",
         "align": "center"
        },
        {
         "x": "22/12/2026",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "8",
         "align": "center"
        },
        {
         "x": "5.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.83",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-3.2.1.1",
        "Evaluar métricas del modelo (accuracy, precision, recall, F1-score)",
        "Helber Perez",
        {
         "x": "S11",
         "align": "center"
        },
        {
         "x": "21/12/2026",
         "align": "center"
        },
        {
         "x": "23/12/2026",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "3.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-3.2.1.2",
        "Ajustar hiperparámetros hasta alcanzar el umbral mínimo de 75 % en la métrica acordada",
        "Helber Perez",
        {
         "x": "S11",
         "align": "center"
        },
        {
         "x": "23/12/2026",
         "align": "center"
        },
        {
         "x": "29/12/2026",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "4.0",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.67",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-3.2.1.3",
        "Implementar lógica de clasificación: riesgo alto (rojo), medio (amarillo), bajo (verde)",
        "Helber Perez",
        {
         "x": "S11",
         "align": "center"
        },
        {
         "x": "24/12/2026",
         "align": "center"
        },
        {
         "x": "29/12/2026",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "3.0",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.33",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-3.2.1.4",
        "Configurar script de actualización semanal automática del modelo",
        "Helber Perez + Jadira Vasquez",
        {
         "x": "S12",
         "align": "center"
        },
        {
         "x": "28/12/2026",
         "align": "center"
        },
        {
         "x": "30/12/2026",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "3.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "Sprint 3: 8 actividades",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "07/12/2026",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "30/12/2026",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "29.2",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "1.58",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "6",
         "fill": "gris",
         "align": "center",
         "bold": true
        }
       ]
      ],
      "titulo": "Sprint 3 · Modelo ML (semanas 9 a 12)",
      "compacta": true
     },
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Actividad",
       "Responsable",
       "Sem.",
       "Inicio",
       "Fin",
       "To",
       "Tm",
       "Tp",
       "Te",
       "σ",
       "RC"
      ],
      "anchos": [
       8,
       33,
       15,
       6,
       8,
       8,
       3.5,
       3.5,
       3.5,
       4,
       4,
       3.5
      ],
      "filas": [
       [
        "A-4.1.1.1",
        "Diseñar plantilla de correo de alerta para el docente tutor",
        "Jadira Vasquez",
        {
         "x": "S13",
         "align": "center"
        },
        {
         "x": "04/01/2027",
         "align": "center"
        },
        {
         "x": "05/01/2027",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "2.0",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.33",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-4.1.1.2",
        "Desarrollar módulo de envío automático de alertas por correo electrónico",
        "Jadira Vasquez",
        {
         "x": "S13",
         "align": "center"
        },
        {
         "x": "06/01/2027",
         "align": "center"
        },
        {
         "x": "11/01/2027",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "4.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-4.1.1.3",
        "Desarrollar módulo web de alertas críticas en panel del docente",
        "Jadira Vasquez",
        {
         "x": "S14",
         "align": "center"
        },
        {
         "x": "11/01/2027",
         "align": "center"
        },
        {
         "x": "14/01/2027",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "4.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-4.1.1.4",
        "Implementar módulo de registro de seguimiento de casos críticos",
        "Jadira Vasquez",
        {
         "x": "S14",
         "align": "center"
        },
        {
         "x": "13/01/2027",
         "align": "center"
        },
        {
         "x": "15/01/2027",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "3.0",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.33",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-4.2.1.1",
        "Diseñar wireframes y prototipo de la interfaz Next.js",
        "Carlos Curo",
        {
         "x": "S15",
         "align": "center"
        },
        {
         "x": "18/01/2027",
         "align": "center"
        },
        {
         "x": "20/01/2027",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "3.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-4.2.1.2",
        "Desarrollar dashboard interactivo con semáforo de riesgo por alumno, aula y grado",
        "Carlos Curo",
        {
         "x": "S15",
         "align": "center"
        },
        {
         "x": "20/01/2027",
         "align": "center"
        },
        {
         "x": "26/01/2027",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "8",
         "align": "center"
        },
        {
         "x": "5.3",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.67",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-4.2.1.3",
        "Desarrollar ficha individual del estudiante con historial completo",
        "Carlos Curo",
        {
         "x": "S16",
         "align": "center"
        },
        {
         "x": "25/01/2027",
         "align": "center"
        },
        {
         "x": "27/01/2027",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "3.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-4.2.1.4",
        "Implementar módulo de roles y control de acceso por perfil de usuario",
        "Jhostin Galarza",
        {
         "x": "S16",
         "align": "center"
        },
        {
         "x": "27/01/2027",
         "align": "center"
        },
        {
         "x": "29/01/2027",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "3.0",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.33",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-4.2.1.5",
        "Desarrollar módulo de reportes exportables en PDF y Excel por unidad evaluativa",
        "Carlos Curo",
        {
         "x": "S16",
         "align": "center"
        },
        {
         "x": "27/01/2027",
         "align": "center"
        },
        {
         "x": "29/01/2027",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "3.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "Sprint 4: 9 actividades",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "04/01/2027",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "29/01/2027",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "31.3",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "1.42",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "5",
         "fill": "gris",
         "align": "center",
         "bold": true
        }
       ]
      ],
      "titulo": "Sprint 4 · Alertas y tablero (semanas 13 a 16)",
      "compacta": true
     },
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Actividad",
       "Responsable",
       "Sem.",
       "Inicio",
       "Fin",
       "To",
       "Tm",
       "Tp",
       "Te",
       "σ",
       "RC"
      ],
      "anchos": [
       8,
       33,
       15,
       6,
       8,
       8,
       3.5,
       3.5,
       3.5,
       4,
       4,
       3.5
      ],
      "filas": [
       [
        "A-5.0.1.1",
        "Pruebas de integración entre todos los módulos del sistema: verificar ETL, ML, alertas y dashboard funcionan en conjunto",
        "Equipo del proyecto",
        {
         "x": "S17",
         "align": "center"
        },
        {
         "x": "01/03/2027",
         "align": "center"
        },
        {
         "x": "05/03/2027",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "8",
         "align": "center"
        },
        {
         "x": "5.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.83",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-5.0.1.2",
        "Pruebas de rendimiento del sistema: confirmar que el tablero carga en menos de 3 segundos y que la clasificación semanal se ejecuta sin intervención manual",
        "Carlos Curo + Jadira Vasquez",
        {
         "x": "S17",
         "align": "center"
        },
        {
         "x": "03/03/2027",
         "align": "center"
        },
        {
         "x": "08/03/2027",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "4.0",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.67",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-5.0.2.1",
        "Prueba piloto real con grupo de 3 docentes tutores usando datos académicos reales del colegio durante 2 semanas",
        "Equipo del proyecto + docentes",
        {
         "x": "S18–S19",
         "align": "center"
        },
        {
         "x": "08/03/2027",
         "align": "center"
        },
        {
         "x": "19/03/2027",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "7",
         "align": "center"
        },
        {
         "x": "10",
         "align": "center"
        },
        {
         "x": "7.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.83",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-5.0.2.2",
        "Recopilar feedback del piloto, documentar observaciones y aplicar ajustes al sistema basados en uso real",
        "Equipo del proyecto + docentes",
        {
         "x": "S20",
         "align": "center"
        },
        {
         "x": "19/03/2027",
         "align": "center"
        },
        {
         "x": "24/03/2027",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "4.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "Sprint 5: 4 actividades",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "01/03/2027",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "24/03/2027",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "20.6",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "1.44",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "4",
         "fill": "gris",
         "align": "center",
         "bold": true
        }
       ]
      ],
      "titulo": "Sprint 5 · Pruebas y piloto (semanas 17 a 20)",
      "compacta": true
     },
     {
      "t": "tabla",
      "cols": [
       "ID",
       "Actividad",
       "Responsable",
       "Sem.",
       "Inicio",
       "Fin",
       "To",
       "Tm",
       "Tp",
       "Te",
       "σ",
       "RC"
      ],
      "anchos": [
       8,
       33,
       15,
       6,
       8,
       8,
       3.5,
       3.5,
       3.5,
       4,
       4,
       3.5
      ],
      "filas": [
       [
        "A-5.1.1.1",
        "Configurar el entorno de producción en la nube (alojamiento web, base de datos y tarea programada)",
        "Jadira Vasquez",
        {
         "x": "S21",
         "align": "center"
        },
        {
         "x": "29/03/2027",
         "align": "center"
        },
        {
         "x": "31/03/2027",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "3.0",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.33",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-5.1.1.2",
        "Desplegar sistema completo en entorno de producción definitivo",
        "Jadira Vasquez",
        {
         "x": "S21",
         "align": "center"
        },
        {
         "x": "31/03/2027",
         "align": "center"
        },
        {
         "x": "05/04/2027",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "4.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-5.1.1.3",
        "Ejecutar pruebas de aceptación UAT formales con todos los docentes tutores",
        "Equipo del proyecto + docentes",
        {
         "x": "S22",
         "align": "center"
        },
        {
         "x": "05/04/2027",
         "align": "center"
        },
        {
         "x": "09/04/2027",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "7",
         "align": "center"
        },
        {
         "x": "5.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-5.1.1.4",
        "Corregir observaciones y bugs detectados en pruebas UAT formales",
        "Carlos Curo + Jadira Vasquez",
        {
         "x": "S22",
         "align": "center"
        },
        {
         "x": "07/04/2027",
         "align": "center"
        },
        {
         "x": "09/04/2027",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "3.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-5.2.1.1",
        "Elaborar manual de usuario (docentes y coordinadores)",
        "Carlos Curo",
        {
         "x": "S23",
         "align": "center"
        },
        {
         "x": "12/04/2027",
         "align": "center"
        },
        {
         "x": "14/04/2027",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "3.0",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.33",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-5.2.1.2",
        "Elaborar manual técnico del sistema para el responsable de TI del colegio",
        "Helber Perez",
        {
         "x": "S23",
         "align": "center"
        },
        {
         "x": "14/04/2027",
         "align": "center"
        },
        {
         "x": "16/04/2027",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "3.0",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.33",
         "align": "center"
        },
        {
         "x": "",
         "align": "center"
        }
       ],
       [
        "A-5.2.1.3",
        "Ejecutar sesión formal de capacitación a todos los docentes y coordinadores (2 horas)",
        "Jhostin Galarza + Coordinación académica",
        {
         "x": "S23",
         "align": "center"
        },
        {
         "x": "15/04/2027",
         "align": "center"
        },
        {
         "x": "16/04/2027",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "2.0",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.33",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-5.2.1.4",
        "Realizar retrospectiva final del proyecto SCRUM",
        "Jhostin Galarza",
        {
         "x": "S24",
         "align": "center"
        },
        {
         "x": "19/04/2027",
         "align": "center"
        },
        {
         "x": "19/04/2027",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "1",
         "align": "center"
        },
        {
         "x": "2",
         "align": "center"
        },
        {
         "x": "1.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.17",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        "A-5.2.1.5",
        "Elaborar informe final del proyecto y presentación de cierre ante el docente del curso",
        "Equipo del proyecto",
        {
         "x": "S24",
         "align": "center"
        },
        {
         "x": "20/04/2027",
         "align": "center"
        },
        {
         "x": "23/04/2027",
         "align": "center"
        },
        {
         "x": "3",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "4.2",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.50",
         "align": "center"
        },
        {
         "x": "Sí",
         "fill": "rojo",
         "align": "center",
         "bold": true
        }
       ],
       [
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "Sprint 6: 9 actividades",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "29/03/2027",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "23/04/2027",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "29.0",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "1.21",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "6",
         "fill": "gris",
         "align": "center",
         "bold": true
        }
       ]
      ],
      "titulo": "Sprint 6 · Implantación y cierre (semanas 21 a 24)",
      "compacta": true
     }
    ]
   },
   {
    "titulo": "5. Resumen de la estimación",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Sprint",
       "Actividades",
       "Te (días)",
       "σ (días)",
       "En ruta crítica",
       "Agregadas en la v2"
      ],
      "anchos": [
       34,
       13,
       13,
       13,
       14,
       13
      ],
      "filas": [
       [
        "Sprint 1 · Análisis y diseño",
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "17.4",
         "align": "center"
        },
        {
         "x": "1.35",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        }
       ],
       [
        "Sprint 2 · Gestión y datos",
        {
         "x": "10",
         "align": "center"
        },
        {
         "x": "31.7",
         "align": "center"
        },
        {
         "x": "1.40",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        }
       ],
       [
        "Sprint 3 · Modelo ML",
        {
         "x": "8",
         "align": "center"
        },
        {
         "x": "29.2",
         "align": "center"
        },
        {
         "x": "1.58",
         "align": "center"
        },
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        }
       ],
       [
        "Sprint 4 · Alertas y tablero",
        {
         "x": "9",
         "align": "center"
        },
        {
         "x": "31.3",
         "align": "center"
        },
        {
         "x": "1.42",
         "align": "center"
        },
        {
         "x": "5",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        }
       ],
       [
        "Sprint 5 · Pruebas y piloto",
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "20.6",
         "align": "center"
        },
        {
         "x": "1.44",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        },
        {
         "x": "4",
         "align": "center"
        }
       ],
       [
        "Sprint 6 · Implantación y cierre",
        {
         "x": "9",
         "align": "center"
        },
        {
         "x": "29.0",
         "align": "center"
        },
        {
         "x": "1.21",
         "align": "center"
        },
        {
         "x": "6",
         "align": "center"
        },
        {
         "x": "0",
         "align": "center"
        }
       ],
       [
        {
         "x": "Total",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "44",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "159.2",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "3.44",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "26",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "8",
         "fill": "gris",
         "align": "center",
         "bold": true
        }
       ]
      ],
      "titulo": "Resumen PERT por sprint",
      "fuente": "La desviación estándar de cada sprint y la del total son la raíz cuadrada de la suma de las varianzas de sus actividades. La reunión diaria no se incluye en los totales."
     },
     {
      "t": "p",
      "x": "La suma de las duraciones esperadas es de 159.2 días. No es la duración del proyecto: varias actividades se hacen en paralelo, a cargo de distintos integrantes."
     },
     {
      "t": "p",
      "x": "La ruta crítica reúne 26 actividades que suman 101.4 días, con una desviación estándar de 2.82 días. Frente a los 114 días hábiles disponibles queda una holgura de 12.6 días. Con la aproximación normal de PERT (z = 4.47), la probabilidad de terminar la ruta crítica dentro del plazo es superior al 99 %. Esa cifra solo considera la incertidumbre de las duraciones; no incluye los riesgos de datos y de adopción descritos en el acta de constitución."
     },
     {
      "t": "ul",
      "items": [
       "El Sprint 1 no tiene actividades críticas: es de análisis y su resultado condiciona el resto, pero sus actividades tienen holgura dentro del sprint.",
       "El Sprint 5 es crítico completo: las pruebas y el piloto dependen de que haya clases y de que tres docentes participen."
      ]
     }
    ]
   },
   {
    "titulo": "6. Cronograma de hitos",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Hito",
       "Fecha",
       "Qué se demuestra"
      ],
      "anchos": [
       30,
       18,
       52
      ],
      "filas": [
       [
        "Inicio del proyecto",
        "lun 12/10/2026",
        "Acta de constitución emitida y reunión de inicio con la Dirección."
       ],
       [
        "Hito 1 · Revisión del Sprint 1",
        "vie 06/11/2026",
        "Arquitectura validada y variables del modelo definidas."
       ],
       [
        "Hito 2 · Revisión del Sprint 2",
        "vie 04/12/2026",
        "Base de datos centralizada y validada."
       ],
       [
        "Hito 3 · Revisión del Sprint 3",
        "mié 30/12/2026",
        "Modelo ML validado con el criterio acordado."
       ],
       [
        "Hito 4 · Revisión del Sprint 4",
        "vie 29/01/2027",
        "Sistema integrado con alertas y tablero operativos."
       ],
       [
        {
         "x": "Receso",
         "fill": "gris"
        },
        {
         "x": "01/02/2027 al 26/02/2027",
         "fill": "gris"
        },
        {
         "x": "Vacaciones escolares, sin trabajo planificado. La última semana es la reserva de gestión.",
         "fill": "gris"
        }
       ],
       [
        "Hito 5 · Revisión del Sprint 5",
        "mié 24/03/2027",
        "Sistema validado con pruebas y piloto real con docentes."
       ],
       [
        "Hito 6 · Cierre del proyecto",
        "vie 23/04/2027",
        "Sistema en producción, capacitación realizada y proyecto cerrado."
       ]
      ],
      "titulo": "Cronograma de hitos"
     }
    ]
   },
   {
    "titulo": "7. Diagrama de Gantt por semanas",
    "apaisada": true,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Grupo de actividades",
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "10",
       "11",
       "12",
       "13",
       "14",
       "15",
       "16",
       "R",
       "17",
       "18",
       "19",
       "20",
       "21",
       "22",
       "23",
       "24"
      ],
      "anchos": [
       25,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3,
       3
      ],
      "filas": [
       [
        "Análisis y diseño",
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "gris"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
       ],
       [
        "Organización del trabajo Scrum",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "teal"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "gris"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
       ],
       [
        "Seguimiento y reunión diaria",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        }
       ],
       [
        "Integración de datos",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "rojo"
        },
        {
         "x": "",
         "fill": "rojo"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "gris"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
       ],
       [
        "Calidad de datos",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "rojo"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "gris"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
       ],
       [
        "Entrenamiento del modelo",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "rojo"
        },
        {
         "x": "",
         "fill": "rojo"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "gris"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
       ],
       [
        "Validación y clasificación de riesgo",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "rojo"
        },
        {
         "x": "",
         "fill": "rojo"
        },
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "gris"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
       ],
       [
        "Motor de alertas",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "teal"
        },
        {
         "x": "",
         "fill": "teal"
        },
        "",
        "",
        {
         "x": "",
         "fill": "gris"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
       ],
       [
        "Tablero web y accesos",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "rojo"
        },
        {
         "x": "",
         "fill": "rojo"
        },
        {
         "x": "",
         "fill": "gris"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
       ],
       [
        "Pruebas de integración y rendimiento",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "gris"
        },
        {
         "x": "",
         "fill": "rojo"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        ""
       ],
       [
        "Piloto con docentes",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "gris"
        },
        "",
        {
         "x": "",
         "fill": "rojo"
        },
        {
         "x": "",
         "fill": "rojo"
        },
        {
         "x": "",
         "fill": "rojo"
        },
        "",
        "",
        "",
        ""
       ],
       [
        "Despliegue y pruebas de aceptación",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "gris"
        },
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "rojo"
        },
        {
         "x": "",
         "fill": "rojo"
        },
        "",
        ""
       ],
       [
        "Manuales, capacitación y cierre",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "gris"
        },
        "",
        "",
        "",
        "",
        "",
        "",
        {
         "x": "",
         "fill": "rojo"
        },
        {
         "x": "",
         "fill": "rojo"
        }
       ],
       [
        {
         "x": "Revisión del sprint (hito)",
         "bold": true
        },
        "",
        "",
        "",
        {
         "x": "◆",
         "fill": "navy",
         "align": "center",
         "bold": true
        },
        "",
        "",
        "",
        {
         "x": "◆",
         "fill": "navy",
         "align": "center",
         "bold": true
        },
        "",
        "",
        "",
        {
         "x": "◆",
         "fill": "navy",
         "align": "center",
         "bold": true
        },
        "",
        "",
        "",
        {
         "x": "◆",
         "fill": "navy",
         "align": "center",
         "bold": true
        },
        {
         "x": "",
         "fill": "gris"
        },
        "",
        "",
        "",
        {
         "x": "◆",
         "fill": "navy",
         "align": "center",
         "bold": true
        },
        "",
        "",
        "",
        {
         "x": "◆",
         "fill": "navy",
         "align": "center",
         "bold": true
        }
       ]
      ],
      "titulo": "Diagrama de Gantt resumido (semanas 1 a 24)",
      "compacta": true,
      "fuente": "Rojo: grupo con actividades de la ruta crítica. Verde azulado: grupo sin actividades críticas. R: receso de febrero. ◆: revisión del sprint. Las fechas de cada semana están en el calendario de sprints (sección 3). El diagrama de red y el Gantt detallado se elaboraron en MS Project."
     }
    ]
   },
   {
    "titulo": "8. Asignación por integrante",
    "apaisada": false,
    "bloques": [
     {
      "t": "tabla",
      "cols": [
       "Integrante",
       "Rol",
       "Actividades a cargo",
       "Sprints de mayor carga"
      ],
      "anchos": [
       20,
       34,
       18,
       28
      ],
      "filas": [
       [
        "Jhostin Galarza",
        "Director del proyecto y Scrum Master",
        {
         "x": "6",
         "align": "center"
        },
        "Sprint 2"
       ],
       [
        "Helber Perez",
        "Responsable del modelo de Machine Learning",
        {
         "x": "12",
         "align": "center"
        },
        "Sprint 3"
       ],
       [
        "Carlos Curo",
        "Responsable del tablero web y del control de cambios",
        {
         "x": "9",
         "align": "center"
        },
        "Sprint 4"
       ],
       [
        "Jadira Vasquez",
        "Responsable de datos, alertas y despliegue",
        {
         "x": "17",
         "align": "center"
        },
        "Sprint 2"
       ],
       [
        "Equipo del proyecto",
        "Actividades compartidas por los cuatro integrantes",
        {
         "x": "8",
         "align": "center"
        },
        "Sprint 5"
       ]
      ],
      "titulo": "Actividades por responsable",
      "fuente": "Una actividad con dos responsables se cuenta para ambos. El análisis de carga y la nivelación de recursos corresponden al dominio de Recursos."
     }
    ]
   },
   {
    "titulo": "9. Monitoreo y control del cronograma",
    "apaisada": false,
    "bloques": [
     {
      "t": "h",
      "x": "Cómo se controla"
     },
     {
      "t": "ul",
      "items": [
       "**Cada día.** En la reunión diaria, cada integrante dice qué terminó, qué hará y qué lo detiene.",
       "**Cada semana.** Se actualiza el avance de las actividades y el gráfico de trabajo pendiente del sprint.",
       "**Cada sprint.** Se calcula el valor ganado en días de trabajo y se informa en el informe de desempeño (GOB-09 y siguientes)."
      ]
     },
     {
      "t": "tabla",
      "cols": [
       "Indicador",
       "Fórmula",
       "Lectura"
      ],
      "anchos": [
       30,
       30,
       40
      ],
      "filas": [
       [
        "Valor planificado (PV)",
        "Te de las actividades programadas a la fecha",
        "Lo que debía estar hecho."
       ],
       [
        "Valor ganado (EV)",
        "Te de las actividades terminadas",
        "Lo que está hecho."
       ],
       [
        "Variación del cronograma (SV)",
        "EV − PV",
        "Negativa: retraso."
       ],
       [
        "Índice de desempeño (SPI)",
        "EV / PV",
        "Menor de 1.00: retraso."
       ]
      ],
      "titulo": "Indicadores del cronograma"
     },
     {
      "t": "h",
      "x": "Estado real"
     },
     {
      "t": "p",
      "x": "Al 10/10/2026 el proyecto no ha iniciado su ejecución: el valor planificado y el valor ganado son cero. La primera medición real se hará en la revisión del Sprint 1, el 06/11/2026."
     },
     {
      "t": "h",
      "x": "Ejercicio de simulación"
     },
     {
      "t": "nota",
      "tipo": "simulado",
      "x": "La tabla siguiente es un ejercicio elaborado en el curso anterior para practicar el cálculo del valor ganado. Sus valores son supuestos: no describen lo ocurrido en el proyecto ni son un pronóstico."
     },
     {
      "t": "tabla",
      "cols": [
       "Sprint",
       "PV (días)",
       "EV supuesto (días)",
       "SV",
       "SPI",
       "Semáforo"
      ],
      "anchos": [
       34,
       13,
       17,
       10,
       10,
       16
      ],
      "filas": [
       [
        {
         "x": "Sprint 1 · Análisis y diseño",
         "bold": false
        },
        {
         "x": "17.4",
         "align": "center",
         "bold": false
        },
        {
         "x": "16.0",
         "align": "center",
         "bold": false
        },
        {
         "x": "-1.4",
         "align": "center",
         "bold": false
        },
        {
         "x": "0.92",
         "align": "center",
         "bold": false
        },
        {
         "x": "Amarillo",
         "fill": "amarillo",
         "align": "center",
         "bold": true
        }
       ],
       [
        {
         "x": "Sprint 2 · Gestión y datos",
         "bold": false
        },
        {
         "x": "31.7",
         "align": "center",
         "bold": false
        },
        {
         "x": "31.7",
         "align": "center",
         "bold": false
        },
        {
         "x": "0.0",
         "align": "center",
         "bold": false
        },
        {
         "x": "1.00",
         "align": "center",
         "bold": false
        },
        {
         "x": "Verde",
         "fill": "verde",
         "align": "center",
         "bold": true
        }
       ],
       [
        {
         "x": "Sprint 3 · Modelo ML",
         "bold": false
        },
        {
         "x": "29.2",
         "align": "center",
         "bold": false
        },
        {
         "x": "27.5",
         "align": "center",
         "bold": false
        },
        {
         "x": "-1.7",
         "align": "center",
         "bold": false
        },
        {
         "x": "0.94",
         "align": "center",
         "bold": false
        },
        {
         "x": "Amarillo",
         "fill": "amarillo",
         "align": "center",
         "bold": true
        }
       ],
       [
        {
         "x": "Sprint 4 · Alertas y tablero",
         "bold": false
        },
        {
         "x": "31.3",
         "align": "center",
         "bold": false
        },
        {
         "x": "31.3",
         "align": "center",
         "bold": false
        },
        {
         "x": "0.0",
         "align": "center",
         "bold": false
        },
        {
         "x": "1.00",
         "align": "center",
         "bold": false
        },
        {
         "x": "Verde",
         "fill": "verde",
         "align": "center",
         "bold": true
        }
       ],
       [
        {
         "x": "Sprint 5 · Pruebas y piloto",
         "bold": false
        },
        {
         "x": "20.6",
         "align": "center",
         "bold": false
        },
        {
         "x": "19.0",
         "align": "center",
         "bold": false
        },
        {
         "x": "-1.6",
         "align": "center",
         "bold": false
        },
        {
         "x": "0.92",
         "align": "center",
         "bold": false
        },
        {
         "x": "Amarillo",
         "fill": "amarillo",
         "align": "center",
         "bold": true
        }
       ],
       [
        {
         "x": "Sprint 6 · Implantación y cierre",
         "bold": false
        },
        {
         "x": "29.0",
         "align": "center",
         "bold": false
        },
        {
         "x": "29.0",
         "align": "center",
         "bold": false
        },
        {
         "x": "0.0",
         "align": "center",
         "bold": false
        },
        {
         "x": "1.00",
         "align": "center",
         "bold": false
        },
        {
         "x": "Verde",
         "fill": "verde",
         "align": "center",
         "bold": true
        }
       ],
       [
        {
         "x": "Total",
         "fill": "gris",
         "bold": true
        },
        {
         "x": "159.2",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "154.5",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "-4.7",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "0.97",
         "fill": "gris",
         "align": "center",
         "bold": true
        },
        {
         "x": "Amarillo",
         "fill": "amarillo",
         "align": "center",
         "bold": true
        }
       ]
      ],
      "titulo": "Simulación del control con valor ganado (valores supuestos)"
     },
     {
      "t": "p",
      "x": "En el ejercicio, tres sprints quedan en amarillo y el proyecto cierra con un SPI de 0.97, dentro del umbral. Sirve para mostrar cómo se leerán los indicadores cuando haya datos reales. Las solicitudes de cambio que acompañaban al ejercicio en la versión 2 también eran supuestas y no forman parte del registro de cambios (GOB-10)."
     }
    ]
   }
  ]
 }
];

export const PROCESOS: ProcesoDef[] = [
 {
  "id": "gob-1",
  "dominio": "Gobernanza",
  "area": "Iniciación",
  "nombre": "Iniciar el proyecto o fase",
  "estado": "Aplicado",
  "que": "Autoriza formalmente el proyecto y da al director la autoridad para usar los recursos.",
  "entradas": [
   "Caso de negocio y plan de gestión de beneficios",
   "Factores ambientales del colegio",
   "Activos de los procesos: organigrama y formatos"
  ],
  "herramientas": [
   "Entrevista a la Promotora Directora",
   "Tormenta de ideas del equipo",
   "Lienzo del proyecto",
   "Reuniones"
  ],
  "salidas": [
   "Acta de constitución del proyecto",
   "Registro de supuestos"
  ],
  "docs": [
   "GOB-01",
   "GOB-02",
   "GOB-03"
  ]
 },
 {
  "id": "gob-2",
  "dominio": "Gobernanza",
  "area": "Planificación",
  "nombre": "Integrar y alinear los planes del proyecto",
  "estado": "Aplicado",
  "que": "Reúne los planes de cada dominio en un solo plan coherente, con sus líneas base.",
  "entradas": [
   "Acta de constitución",
   "Salidas de otros procesos: planes de alcance, cronograma, interesados y abastecimiento"
  ],
  "herramientas": [
   "Juicio del equipo",
   "Listas de verificación",
   "Reuniones"
  ],
  "salidas": [
   "Plan para la dirección del proyecto"
  ],
  "docs": [
   "GOB-04"
  ]
 },
 {
  "id": "gob-3",
  "dominio": "Gobernanza",
  "area": "Planificación",
  "nombre": "Planificar la estrategia de abastecimiento",
  "estado": "Aplicado",
  "que": "Decide qué hace el equipo y qué se obtiene de terceros, y con qué criterios se eligen los proveedores.",
  "entradas": [
   "Acta de constitución",
   "Línea base del alcance",
   "Documentación de requisitos",
   "Registro de interesados"
  ],
  "herramientas": [
   "Análisis de hacer o comprar",
   "Investigación de mercado",
   "Análisis de selección de proveedores"
  ],
  "salidas": [
   "Plan de estrategia de abastecimiento: decisiones de hacer o comprar y criterios de selección"
  ],
  "docs": [
   "GOB-05"
  ]
 },
 {
  "id": "gob-4",
  "dominio": "Gobernanza",
  "area": "Ejecución",
  "nombre": "Gestionar la ejecución del proyecto",
  "estado": "Aplicado",
  "que": "Dirige el trabajo definido en el plan y aplica los cambios aprobados.",
  "entradas": [
   "Plan para la dirección del proyecto",
   "Registro de cambios",
   "Solicitudes de cambio aprobadas"
  ],
  "herramientas": [
   "Reuniones de coordinación diarias",
   "Repositorio y tablero de tareas como sistema de información"
  ],
  "salidas": [
   "Registro de incidentes",
   "Solicitudes de cambio",
   "Entregables y datos de desempeño, desde el Sprint 1"
  ],
  "docs": [
   "GOB-06"
  ]
 },
 {
  "id": "gob-5",
  "dominio": "Gobernanza",
  "area": "Ejecución",
  "nombre": "Gestionar el aseguramiento de la calidad",
  "estado": "Aplicado",
  "que": "Comprueba que el proyecto sigue los procesos acordados y mejora los que fallan.",
  "entradas": [
   "Documentos del proyecto heredados",
   "Políticas y normas: Ley N.° 29733"
  ],
  "herramientas": [
   "Listas de verificación",
   "Análisis de documentos",
   "Diagrama de Pareto",
   "Análisis de causa raíz"
  ],
  "salidas": [
   "Informe de calidad",
   "Solicitudes de cambio"
  ],
  "docs": [
   "GOB-07"
  ]
 },
 {
  "id": "gob-6",
  "dominio": "Gobernanza",
  "area": "Ejecución",
  "nombre": "Gestionar el conocimiento del proyecto",
  "estado": "Aplicado",
  "que": "Aprovecha lo aprendido y lo deja disponible para el equipo y para el colegio.",
  "entradas": [
   "Documentos y entregables de la fase de formulación",
   "Registro de interesados"
  ],
  "herramientas": [
   "Revisión posterior a la acción",
   "Reuniones retrospectivas",
   "Gestión de la información en el repositorio"
  ],
  "salidas": [
   "Registro de lecciones aprendidas"
  ],
  "docs": [
   "GOB-08"
  ]
 },
 {
  "id": "gob-7",
  "dominio": "Gobernanza",
  "area": "Monitoreo y control",
  "nombre": "Monitorear y controlar el desempeño del proyecto",
  "estado": "Aplicado",
  "que": "Compara el avance con el plan e informa el estado a quienes deciden.",
  "entradas": [
   "Plan para la dirección del proyecto",
   "Registro de incidentes",
   "Informes de calidad",
   "Lista de hitos"
  ],
  "herramientas": [
   "Análisis de variación",
   "Análisis del valor ganado, desde el Sprint 1",
   "Tableros del proyecto"
  ],
  "salidas": [
   "Informe de desempeño del trabajo",
   "Solicitudes de cambio"
  ],
  "docs": [
   "GOB-09"
  ]
 },
 {
  "id": "gob-8",
  "dominio": "Gobernanza",
  "area": "Monitoreo y control",
  "nombre": "Evaluar e implementar cambios",
  "estado": "Aplicado",
  "que": "Revisa cada solicitud de cambio, decide y registra la decisión.",
  "entradas": [
   "Líneas base de alcance, cronograma y costos",
   "Solicitudes de cambio",
   "Matriz de trazabilidad de requisitos"
  ],
  "herramientas": [
   "Control integrado de cambios",
   "Análisis de alternativas",
   "Reuniones del comité de cambios"
  ],
  "salidas": [
   "Solicitudes de cambio aprobadas",
   "Registro de cambios"
  ],
  "docs": [
   "GOB-10"
  ]
 },
 {
  "id": "gob-9",
  "dominio": "Gobernanza",
  "area": "Cierre",
  "nombre": "Cerrar el proyecto o fase",
  "estado": "Aplicado",
  "que": "Finaliza formalmente una fase o el proyecto y transfiere sus resultados.",
  "entradas": [
   "Documentos y entregables de la fase de formulación",
   "Registro de lecciones aprendidas",
   "Caso de negocio"
  ],
  "herramientas": [
   "Análisis de documentos",
   "Reuniones"
  ],
  "salidas": [
   "Informe de cierre de la fase de formulación",
   "Transferencia al equipo actual",
   "Pendientes que pasan a la fase actual"
  ],
  "docs": [
   "GOB-11"
  ]
 },
 {
  "id": "alc-1",
  "dominio": "Alcance",
  "area": "Planificación",
  "nombre": "Planificar la gestión del alcance",
  "estado": "Aplicado",
  "que": "Define cómo se elaboran, validan y controlan el alcance, los requisitos y la calidad.",
  "entradas": [
   "Acta de constitución",
   "Documentación de requisitos",
   "Registro de interesados"
  ],
  "herramientas": [
   "Juicio del equipo",
   "Análisis de datos",
   "Planificación de pruebas e inspecciones"
  ],
  "salidas": [
   "Plan de gestión del alcance",
   "Plan de gestión de los requisitos",
   "Plan de gestión de la calidad"
  ],
  "docs": [
   "ALC-01",
   "ALC-03"
  ]
 },
 {
  "id": "alc-2",
  "dominio": "Alcance",
  "area": "Planificación",
  "nombre": "Recopilar y analizar los requisitos",
  "estado": "Curso anterior",
  "que": "Determina y documenta lo que los interesados necesitan del sistema.",
  "entradas": [
   "Caso de negocio",
   "Registro de interesados"
  ],
  "herramientas": [
   "Entrevista",
   "Cuestionario a docentes",
   "Análisis de documentos",
   "Pensamiento de diseño",
   "Priorización"
  ],
  "salidas": [
   "Documentación de requisitos: 12 funcionales y 8 no funcionales",
   "Matriz de trazabilidad con 80 casos de prueba"
  ],
  "docs": []
 },
 {
  "id": "alc-3",
  "dominio": "Alcance",
  "area": "Planificación",
  "nombre": "Definir el alcance",
  "estado": "Aplicado",
  "que": "Describe con detalle el producto y los límites del proyecto.",
  "entradas": [
   "Acta de constitución",
   "Registro de supuestos",
   "Documentación de requisitos"
  ],
  "herramientas": [
   "Análisis del producto",
   "Análisis de alternativas",
   "Juicio del equipo"
  ],
  "salidas": [
   "Enunciado del alcance del proyecto, versión 3"
  ],
  "docs": [
   "ALC-02"
  ]
 },
 {
  "id": "alc-4",
  "dominio": "Alcance",
  "area": "Planificación",
  "nombre": "Desarrollar la estructura del alcance",
  "estado": "Curso anterior",
  "que": "Divide el trabajo en partes que se pueden estimar, asignar y controlar.",
  "entradas": [
   "Enunciado del alcance",
   "Documentación de requisitos"
  ],
  "herramientas": [
   "Descomposición",
   "Juicio del equipo"
  ],
  "salidas": [
   "Estructura de desglose del trabajo (EDT) de seis componentes",
   "Diccionario de la EDT"
  ],
  "docs": []
 },
 {
  "id": "alc-5",
  "dominio": "Alcance",
  "area": "Monitoreo y control",
  "nombre": "Monitorear y controlar el alcance",
  "estado": "Aplicado",
  "que": "Vigila que solo se haga el trabajo aprobado y que los entregables cumplan sus requisitos de calidad.",
  "entradas": [
   "Línea base del alcance: EDT y diccionario",
   "Plan de gestión del alcance",
   "Plan de gestión de la calidad",
   "Prototipo del sistema"
  ],
  "herramientas": [
   "Inspección del producto",
   "Pruebas del prototipo",
   "Análisis de variación frente a la EDT"
  ],
  "salidas": [
   "Informe de avance del producto por EDT",
   "Entregables verificados y mediciones de calidad, desde el Sprint 2"
  ],
  "docs": [
   "ALC-05"
  ]
 },
 {
  "id": "alc-6",
  "dominio": "Alcance",
  "area": "Monitoreo y control",
  "nombre": "Validar el alcance",
  "estado": "Planificado",
  "que": "Obtiene la aceptación formal de los entregables por parte del colegio.",
  "entradas": [
   "Línea base del alcance",
   "Documentación de requisitos",
   "Entregables verificados"
  ],
  "herramientas": [
   "Inspección",
   "Reuniones de revisión del sprint",
   "Pruebas con el cliente"
  ],
  "salidas": [
   "Procedimiento y formato de acta de aceptación",
   "Entregables aceptados, desde la revisión del Sprint 1"
  ],
  "docs": [
   "ALC-04"
  ]
 },
 {
  "id": "cro-1",
  "dominio": "Cronograma",
  "area": "Planificación",
  "nombre": "Planificar la gestión del cronograma",
  "estado": "Aplicado",
  "que": "Establece las reglas para elaborar y controlar el cronograma.",
  "entradas": [
   "Acta de constitución",
   "Plan de gestión del alcance",
   "Enfoque de desarrollo híbrido"
  ],
  "herramientas": [
   "Juicio del equipo",
   "Análisis de alternativas",
   "Reuniones"
  ],
  "salidas": [
   "Plan de gestión del cronograma"
  ],
  "docs": [
   "CRO-01"
  ]
 },
 {
  "id": "cro-2",
  "dominio": "Cronograma",
  "area": "Planificación",
  "nombre": "Desarrollar el cronograma",
  "estado": "Aplicado",
  "que": "Define las actividades, las ordena, estima su duración y fija las fechas.",
  "entradas": [
   "Línea base del alcance",
   "Lista de actividades y estimaciones de la versión 2",
   "Calendario escolar",
   "Registro de supuestos"
  ],
  "herramientas": [
   "Descomposición",
   "Estimación por tres valores (PERT)",
   "Método de la ruta crítica",
   "Análisis de reserva",
   "Planificación por sprints"
  ],
  "salidas": [
   "Línea base del cronograma, versión 3",
   "Calendario del proyecto",
   "Cronograma de hitos"
  ],
  "docs": [
   "CRO-01"
  ]
 },
 {
  "id": "cro-3",
  "dominio": "Cronograma",
  "area": "Monitoreo y control",
  "nombre": "Monitorear y controlar el cronograma",
  "estado": "Planificado",
  "que": "Mide el avance frente a la línea base y gestiona sus cambios.",
  "entradas": [
   "Línea base del cronograma",
   "Datos de desempeño del trabajo"
  ],
  "herramientas": [
   "Análisis del valor ganado",
   "Gráfica de trabajo pendiente",
   "Reuniones diarias",
   "Revisiones del sprint"
  ],
  "salidas": [
   "Información de desempeño y pronósticos, desde el Sprint 1"
  ],
  "docs": [
   "CRO-01"
  ]
 },
 {
  "id": "fin-1",
  "dominio": "Finanzas",
  "area": "Planificación",
  "nombre": "Planificar la gestión financiera",
  "estado": "Curso anterior",
  "docs": []
 },
 {
  "id": "fin-2",
  "dominio": "Finanzas",
  "area": "Planificación",
  "nombre": "Estimar los costos",
  "estado": "Curso anterior",
  "docs": []
 },
 {
  "id": "fin-3",
  "dominio": "Finanzas",
  "area": "Planificación",
  "nombre": "Desarrollar el presupuesto",
  "estado": "Curso anterior",
  "docs": []
 },
 {
  "id": "fin-4",
  "dominio": "Finanzas",
  "area": "Monitoreo y control",
  "nombre": "Monitorear y controlar las finanzas",
  "estado": "Pendiente",
  "docs": []
 },
 {
  "id": "int-1",
  "dominio": "Interesados",
  "grupo": "Involucramiento",
  "area": "Iniciación",
  "nombre": "Identificar a los interesados",
  "estado": "Aplicado",
  "que": "Reconoce a las personas y organizaciones afectadas y analiza su poder, interés e influencia.",
  "entradas": [
   "Acta de constitución",
   "Caso de negocio",
   "Organigrama del colegio"
  ],
  "herramientas": [
   "Cuestionario",
   "Tormenta de ideas",
   "Análisis de interesados",
   "Matriz de poder e interés",
   "Cubo de interesados",
   "Modelo de prominencia",
   "Dirección de la influencia",
   "Priorización"
  ],
  "salidas": [
   "Registro de interesados: 17 interesados"
  ],
  "docs": [
   "INT-01"
  ]
 },
 {
  "id": "int-2",
  "dominio": "Interesados",
  "grupo": "Involucramiento",
  "area": "Planificación",
  "nombre": "Planificar el involucramiento de los interesados",
  "estado": "Aplicado",
  "que": "Define cómo lograr que cada interesado participe en la medida que el proyecto necesita.",
  "entradas": [
   "Registro de interesados",
   "Registro de supuestos",
   "Cronograma del proyecto"
  ],
  "herramientas": [
   "Matriz de evaluación del involucramiento",
   "Priorización",
   "Análisis de supuestos y restricciones"
  ],
  "salidas": [
   "Plan de involucramiento de los interesados"
  ],
  "docs": [
   "INT-02"
  ]
 },
 {
  "id": "int-4",
  "dominio": "Interesados",
  "grupo": "Involucramiento",
  "area": "Ejecución",
  "nombre": "Gestionar el involucramiento de los interesados",
  "estado": "Aplicado",
  "que": "Trabaja con los interesados para atender sus necesidades y expectativas.",
  "entradas": [
   "Plan de involucramiento",
   "Plan de comunicaciones",
   "Registro de incidentes"
  ],
  "herramientas": [
   "Reglas básicas",
   "Reuniones",
   "Observación y conversación",
   "Retroalimentación"
  ],
  "salidas": [
   "Bitácora de involucramiento",
   "Actualizaciones del registro de incidentes"
  ],
  "docs": [
   "INT-04"
  ]
 },
 {
  "id": "int-6",
  "dominio": "Interesados",
  "grupo": "Involucramiento",
  "area": "Monitoreo y control",
  "nombre": "Monitorear el involucramiento de los interesados",
  "estado": "Aplicado",
  "que": "Compara el involucramiento real con el deseado y ajusta las estrategias.",
  "entradas": [
   "Plan de involucramiento",
   "Registro de interesados",
   "Bitácora de involucramiento"
  ],
  "herramientas": [
   "Matriz de evaluación del involucramiento",
   "Análisis de interesados",
   "Análisis de causa raíz"
  ],
  "salidas": [
   "Informe de seguimiento del involucramiento"
  ],
  "docs": [
   "INT-05"
  ]
 },
 {
  "id": "int-3",
  "dominio": "Interesados",
  "grupo": "Comunicaciones",
  "area": "Planificación",
  "nombre": "Planificar la gestión de las comunicaciones",
  "estado": "Aplicado",
  "que": "Define qué información recibe cada interesado, por qué canal, con qué frecuencia y en qué fechas.",
  "entradas": [
   "Registro de interesados",
   "Plan de involucramiento",
   "Documentación de requisitos",
   "Cronograma del proyecto"
  ],
  "herramientas": [
   "Análisis de requisitos de comunicación",
   "Tecnología y métodos de comunicación",
   "Matriz de evaluación del involucramiento"
  ],
  "salidas": [
   "Plan de gestión de las comunicaciones: requisitos de información, matriz, calendario, formatos e indicadores"
  ],
  "docs": [
   "INT-03"
  ]
 },
 {
  "id": "int-5",
  "dominio": "Interesados",
  "grupo": "Comunicaciones",
  "area": "Ejecución",
  "nombre": "Gestionar las comunicaciones",
  "estado": "Aplicado",
  "que": "Ejecuta el plan: reúne, informa y deja constancia de cada comunicación.",
  "entradas": [
   "Plan de gestión de las comunicaciones",
   "Registro de interesados",
   "Informes de desempeño"
  ],
  "herramientas": [
   "Reuniones",
   "Informes del proyecto",
   "Blog del proyecto como sistema de información",
   "Retroalimentación"
  ],
  "salidas": [
   "Comunicaciones del proyecto",
   "Registro de comunicaciones"
  ],
  "docs": [
   "INT-06"
  ]
 },
 {
  "id": "int-7",
  "dominio": "Interesados",
  "grupo": "Comunicaciones",
  "area": "Monitoreo y control",
  "nombre": "Monitorear las comunicaciones",
  "estado": "Aplicado",
  "que": "Comprueba que la información llega a quien debe y cuando debe.",
  "entradas": [
   "Plan de gestión de las comunicaciones",
   "Registro de comunicaciones",
   "Registro de incidentes"
  ],
  "herramientas": [
   "Tablero de comunicaciones",
   "Matriz de cobertura por interesado",
   "Observación y conversación",
   "Reuniones"
  ],
  "salidas": [
   "Informe de monitoreo de las comunicaciones",
   "Acciones de mejora"
  ],
  "docs": [
   "INT-07"
  ]
 },
 {
  "id": "rec-1",
  "dominio": "Recursos",
  "area": "Planificación",
  "nombre": "Planificar la gestión de los recursos",
  "estado": "Pendiente",
  "docs": []
 },
 {
  "id": "rec-2",
  "dominio": "Recursos",
  "area": "Planificación",
  "nombre": "Estimar los recursos",
  "estado": "Pendiente",
  "docs": []
 },
 {
  "id": "rec-3",
  "dominio": "Recursos",
  "area": "Ejecución",
  "nombre": "Adquirir recursos",
  "estado": "Pendiente",
  "docs": []
 },
 {
  "id": "rec-4",
  "dominio": "Recursos",
  "area": "Ejecución",
  "nombre": "Liderar al equipo",
  "estado": "Pendiente",
  "docs": []
 },
 {
  "id": "rec-5",
  "dominio": "Recursos",
  "area": "Monitoreo y control",
  "nombre": "Monitorear y controlar los recursos",
  "estado": "Pendiente",
  "docs": []
 },
 {
  "id": "rie-1",
  "dominio": "Riesgo",
  "area": "Planificación",
  "nombre": "Planificar la gestión de los riesgos",
  "estado": "Pendiente",
  "docs": []
 },
 {
  "id": "rie-2",
  "dominio": "Riesgo",
  "area": "Planificación",
  "nombre": "Identificar los riesgos",
  "estado": "Pendiente",
  "docs": []
 },
 {
  "id": "rie-3",
  "dominio": "Riesgo",
  "area": "Planificación",
  "nombre": "Realizar el análisis de riesgos",
  "estado": "Pendiente",
  "docs": []
 },
 {
  "id": "rie-4",
  "dominio": "Riesgo",
  "area": "Planificación",
  "nombre": "Planificar la respuesta a los riesgos",
  "estado": "Pendiente",
  "docs": []
 },
 {
  "id": "rie-5",
  "dominio": "Riesgo",
  "area": "Ejecución",
  "nombre": "Implementar la respuesta a los riesgos",
  "estado": "Pendiente",
  "docs": []
 },
 {
  "id": "rie-6",
  "dominio": "Riesgo",
  "area": "Monitoreo y control",
  "nombre": "Monitorear los riesgos",
  "estado": "Pendiente",
  "docs": []
 }
];

export const DOMINIOS: DominioDef[] = [
 {
  "id": "gobernanza",
  "nombre": "Gobernanza",
  "procesos": 9,
  "descripcion": "Autoriza, integra, dirige y cierra el proyecto. Reúne lo que antes era integración, aseguramiento de la calidad y adquisiciones.",
  "estado": "Desarrollado"
 },
 {
  "id": "alcance",
  "nombre": "Alcance",
  "procesos": 6,
  "descripcion": "Define y controla qué se entrega y con qué calidad.",
  "estado": "Desarrollado en parte"
 },
 {
  "id": "cronograma",
  "nombre": "Cronograma",
  "procesos": 3,
  "descripcion": "Programa el trabajo y controla los plazos.",
  "estado": "Desarrollado"
 },
 {
  "id": "finanzas",
  "nombre": "Finanzas",
  "procesos": 4,
  "descripcion": "Estima los costos, arma el presupuesto y controla el gasto.",
  "estado": "Curso anterior"
 },
 {
  "id": "interesados",
  "nombre": "Interesados",
  "procesos": 7,
  "descripcion": "Identifica a las personas afectadas, planifica su participación y las comunicaciones.",
  "estado": "Desarrollado"
 },
 {
  "id": "recursos",
  "nombre": "Recursos",
  "procesos": 5,
  "descripcion": "Planifica, obtiene y lidera al equipo y los recursos físicos.",
  "estado": "Pendiente"
 },
 {
  "id": "riesgo",
  "nombre": "Riesgo",
  "procesos": 6,
  "descripcion": "Identifica, analiza y responde a la incertidumbre.",
  "estado": "Pendiente"
 }
];

export const AREAS: string[] = [
 "Iniciación",
 "Planificación",
 "Ejecución",
 "Monitoreo y control",
 "Cierre"
];
