// Archivo generado por documentacion/generar.mjs a partir de documentacion/. No editar a mano.

export const PROYECTO = {
 "sigla": "SIA-T",
 "nombre": "Sistema inteligente basado en Machine Learning para la alerta temprana del bajo rendimiento académico estudiantil",
 "nombreCorto": "Sistema Inteligente de Alerta Temprana (SIA-T)",
 "cliente": "I.E.P. Peruano Francés",
 "clienteDireccion": "Av. Pastor Sevilla con Av. Juan Velasco Alvarado, Villa El Salvador, Lima",
 "universidad": "Universidad Nacional Tecnológica de Lima Sur",
 "facultad": "Facultad de Ingeniería y Gestión",
 "escuela": "Escuela Profesional de Ingeniería de Sistemas",
 "curso": "Gestión de Proyecto de TI",
 "docente": "Mg. MBA Antonio Arqque Pantigozo",
 "guia": "Guía del PMBOK®, octava edición (PMI, 2025)",
 "ciudad": "Lima, Perú",
 "anio": "2026",
 "fechaEmision": "10/10/2026",
 "patrocinadora": "Promotora Directora de la I.E.P. Peruano Francés",
 "director": "Jhostin J. Galarza Camarena",
 "productOwner": "Helber J. Perez Gutierrez, docente de la institución",
 "fechaCorte": "17/10/2026",
 "inicio": "12/10/2026",
 "fin": "23/04/2027",
 "equipo": [
  {
   "apellidos": "Galarza Camarena",
   "nombres": "Jhostin Jefry",
   "corto": "Jhostin J. Galarza Camarena",
   "codigo": "2123010051",
   "rol": "Director del proyecto y Scrum Master"
  },
  {
   "apellidos": "Perez Gutierrez",
   "nombres": "Helber Javier",
   "corto": "Helber J. Perez Gutierrez",
   "codigo": "2008100137",
   "rol": "Responsable del modelo de Machine Learning y Product Owner"
  },
  {
   "apellidos": "Curo Ramos",
   "nombres": "Carlos Agustín",
   "corto": "Carlos A. Curo Ramos",
   "codigo": "2113010682",
   "rol": "Responsable del tablero web y del control de cambios"
  },
  {
   "apellidos": "Vasquez Castro",
   "nombres": "Jadira Dina",
   "corto": "Jadira D. Vasquez Castro",
   "codigo": "2213100026",
   "rol": "Responsable de datos, alertas y despliegue"
  }
 ],
 "presupuesto": {
  "edt": "S/ 54,417.42",
  "contingencia": "S/ 5,441.74",
  "lineaBase": "S/ 59,859.17",
  "gestion": "S/ 3,636.36",
  "total": "S/ 63,495.53"
 },
 "enlaces": {
  "blog": "https://peruano-frances-gti.vercel.app",
  "repositorio": "https://github.com/Jhostin2210/peruano-frances-gti",
  "prototipo": "https://proyecto-siat.vercel.app",
  "api": "https://proyecto-siat.onrender.com",
  "repoSistema": "https://github.com/Jhostin2210/Proyecto-SIAT"
 }
};

export const SPRINTS = [
 {
  "n": 1,
  "nombre": "Análisis y diseño",
  "semanas": [
   1,
   4
  ],
  "inicio": "2026-10-12",
  "fin": "2026-11-06",
  "revision": "2026-11-06",
  "te": 17.4,
  "sigma": 1.35,
  "entregable": "Arquitectura validada y variables del modelo definidas"
 },
 {
  "n": 2,
  "nombre": "Gestión y datos",
  "semanas": [
   5,
   8
  ],
  "inicio": "2026-11-09",
  "fin": "2026-12-04",
  "revision": "2026-12-04",
  "te": 31.7,
  "sigma": 1.4,
  "entregable": "Base de datos centralizada y validada"
 },
 {
  "n": 3,
  "nombre": "Modelo ML",
  "semanas": [
   9,
   12
  ],
  "inicio": "2026-12-07",
  "fin": "2027-01-01",
  "revision": "2026-12-30",
  "te": 29.2,
  "sigma": 1.58,
  "entregable": "Modelo ML validado con el criterio acordado"
 },
 {
  "n": 4,
  "nombre": "Alertas y tablero",
  "semanas": [
   13,
   16
  ],
  "inicio": "2027-01-04",
  "fin": "2027-01-29",
  "revision": "2027-01-29",
  "te": 31.3,
  "sigma": 1.42,
  "entregable": "Sistema integrado con alertas y tablero operativos"
 },
 {
  "n": 5,
  "nombre": "Pruebas y piloto",
  "semanas": [
   17,
   20
  ],
  "inicio": "2027-03-01",
  "fin": "2027-03-26",
  "revision": "2027-03-24",
  "te": 20.6,
  "sigma": 1.44,
  "entregable": "Sistema validado con pruebas y piloto real con docentes"
 },
 {
  "n": 6,
  "nombre": "Implantación y cierre",
  "semanas": [
   21,
   24
  ],
  "inicio": "2027-03-29",
  "fin": "2027-04-23",
  "revision": "2027-04-23",
  "te": 29,
  "sigma": 1.21,
  "entregable": "Sistema en producción, capacitación realizada y proyecto cerrado"
 }
];

export const FERIADOS = [
 {
  "fecha": "2026-12-08",
  "nombre": "Inmaculada Concepción"
 },
 {
  "fecha": "2026-12-09",
  "nombre": "Batalla de Ayacucho"
 },
 {
  "fecha": "2026-12-25",
  "nombre": "Navidad"
 },
 {
  "fecha": "2027-01-01",
  "nombre": "Año Nuevo"
 },
 {
  "fecha": "2027-03-25",
  "nombre": "Jueves Santo"
 },
 {
  "fecha": "2027-03-26",
  "nombre": "Viernes Santo"
 }
];

export const RECESO = {
 "inicio": "2027-02-01",
 "fin": "2027-02-26",
 "motivo": "Vacaciones escolares: no hay docentes para pruebas ni piloto",
 "reservaGestion": {
  "inicio": "2027-02-22",
  "fin": "2027-02-26"
 }
};

export const TOTALES = {
 "actividades": 44,
 "continuas": 1,
 "te": 159.2,
 "sigma": 3.44,
 "criticas": 26,
 "teCritica": 101.4,
 "sigmaCritica": 2.82,
 "semanas": 24,
 "diasHabiles": 114
};

export const ACTIVIDADES = [
 {
  "id": "A-0.1.1.1",
  "paquete": "1.0.1",
  "entregable": "Acta de la reunión de levantamiento",
  "descripcion": "Reunión de levantamiento con directivos, coordinadores y área de TI para validar el alcance del sistema y acceso a datos académicos",
  "responsable": "Equipo del proyecto + Dirección",
  "semana": "S1",
  "prioridad": "Alta",
  "sprint": 1,
  "to": 2,
  "tm": 3,
  "tp": 5,
  "te": 3.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": false,
  "isNew": true,
  "continua": false,
  "inicio": "12/10/2026",
  "fin": "14/10/2026"
 },
 {
  "id": "A-0.1.1.2",
  "paquete": "1.0.2",
  "entregable": "Informe de calidad y disponibilidad de los datos",
  "descripcion": "Análisis de calidad y disponibilidad de datos académicos existentes en los sistemas del colegio",
  "responsable": "Jadira Vasquez + Helber Perez",
  "semana": "S2",
  "prioridad": "Alta",
  "sprint": 1,
  "to": 3,
  "tm": 5,
  "tp": 8,
  "te": 5.2,
  "sigma": 0.83,
  "sigmaSq": 0.69,
  "isCritical": false,
  "isNew": true,
  "continua": false,
  "inicio": "19/10/2026",
  "fin": "23/10/2026"
 },
 {
  "id": "A-0.1.1.3",
  "paquete": "1.0.3",
  "entregable": "Lista de variables del modelo validada con docentes",
  "descripcion": "Definición y validación con docentes de las variables académicas que predicen el riesgo de bajo rendimiento",
  "responsable": "Helber Perez + docentes",
  "semana": "S3",
  "prioridad": "Alta",
  "sprint": 1,
  "to": 2,
  "tm": 4,
  "tp": 6,
  "te": 4,
  "sigma": 0.67,
  "sigmaSq": 0.44,
  "isCritical": false,
  "isNew": true,
  "continua": false,
  "inicio": "26/10/2026",
  "fin": "29/10/2026"
 },
 {
  "id": "A-0.1.1.4",
  "paquete": "1.0.4",
  "entregable": "Documento de arquitectura del sistema",
  "descripcion": "Diseño de la arquitectura completa del sistema: módulos, integraciones, flujo de datos y tecnologías",
  "responsable": "Jadira Vasquez + Helber Perez",
  "semana": "S4",
  "prioridad": "Alta",
  "sprint": 1,
  "to": 3,
  "tm": 5,
  "tp": 7,
  "te": 5,
  "sigma": 0.67,
  "sigmaSq": 0.44,
  "isCritical": false,
  "isNew": true,
  "continua": false,
  "inicio": "02/11/2026",
  "fin": "06/11/2026"
 },
 {
  "id": "A-1.1.1.1",
  "paquete": "1.1.1",
  "entregable": "Cronograma de hitos (CRO-01)",
  "descripcion": "Elaborar cronograma de hitos del proyecto (Gantt SCRUM)",
  "responsable": "Jhostin Galarza",
  "semana": "S5",
  "prioridad": "Alta",
  "sprint": 2,
  "to": 2,
  "tm": 3,
  "tp": 5,
  "te": 3.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": false,
  "isNew": false,
  "continua": false,
  "inicio": "09/11/2026",
  "fin": "11/11/2026"
 },
 {
  "id": "A-1.1.1.2",
  "paquete": "1.1.1",
  "entregable": "Product Backlog priorizado",
  "descripcion": "Definir Product Backlog y priorizar historias de usuario",
  "responsable": "Equipo del proyecto",
  "semana": "S5",
  "prioridad": "Alta",
  "sprint": 2,
  "to": 2,
  "tm": 3,
  "tp": 4,
  "te": 3,
  "sigma": 0.33,
  "sigmaSq": 0.11,
  "isCritical": false,
  "isNew": false,
  "continua": false,
  "inicio": "11/11/2026",
  "fin": "13/11/2026"
 },
 {
  "id": "A-1.1.1.3",
  "paquete": "1.1.1",
  "entregable": "Roles Scrum asignados",
  "descripcion": "Asignar roles SCRUM: Product Owner, Scrum Master, Dev Team",
  "responsable": "Equipo del proyecto",
  "semana": "S5",
  "prioridad": "Alta",
  "sprint": 2,
  "to": 1,
  "tm": 1,
  "tp": 2,
  "te": 1.2,
  "sigma": 0.17,
  "sigmaSq": 0.03,
  "isCritical": false,
  "isNew": false,
  "continua": false,
  "inicio": "12/11/2026",
  "fin": "12/11/2026"
 },
 {
  "id": "A-1.2.1.1",
  "paquete": "1.1.2",
  "entregable": "Plantilla del informe de avance semanal",
  "descripcion": "Establecer plantilla de informe de avance semanal",
  "responsable": "Jhostin Galarza",
  "semana": "S5",
  "prioridad": "Media",
  "sprint": 2,
  "to": 1,
  "tm": 1,
  "tp": 2,
  "te": 1.2,
  "sigma": 0.17,
  "sigmaSq": 0.03,
  "isCritical": false,
  "isNew": false,
  "continua": false,
  "inicio": "13/11/2026",
  "fin": "13/11/2026"
 },
 {
  "id": "A-1.2.1.2",
  "paquete": "1.1.2",
  "entregable": "Registro de las reuniones diarias",
  "descripcion": "Daily Standup 15 min diarios — continuo todo el proyecto",
  "responsable": "Jhostin Galarza",
  "semana": "S5–S24",
  "prioridad": "Alta",
  "sprint": 2,
  "to": 1,
  "tm": 1,
  "tp": 2,
  "te": 1.2,
  "sigma": 0.17,
  "sigmaSq": 0.03,
  "isCritical": false,
  "isNew": false,
  "continua": true,
  "inicio": "09/11/2026",
  "fin": "23/04/2027"
 },
 {
  "id": "A-2.1.1.1",
  "paquete": "1.2.1",
  "entregable": "Mapa de las fuentes de datos académicos",
  "descripcion": "Levantar y mapear fuentes de datos académicos (asistencia, notas, participación, incidencias)",
  "responsable": "Jadira Vasquez",
  "semana": "S6",
  "prioridad": "Alta",
  "sprint": 2,
  "to": 3,
  "tm": 4,
  "tp": 6,
  "te": 4.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "16/11/2026",
  "fin": "19/11/2026"
 },
 {
  "id": "A-2.1.1.2",
  "paquete": "1.2.1",
  "entregable": "Modelo entidad-relación de la base de datos",
  "descripcion": "Diseñar modelo entidad-relación de la BD centralizada (PostgreSQL)",
  "responsable": "Jadira Vasquez",
  "semana": "S6",
  "prioridad": "Alta",
  "sprint": 2,
  "to": 2,
  "tm": 3,
  "tp": 5,
  "te": 3.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "18/11/2026",
  "fin": "20/11/2026"
 },
 {
  "id": "A-2.1.1.3",
  "paquete": "1.2.1",
  "entregable": "Scripts de carga de datos (ETL)",
  "descripcion": "Codificar scripts ETL de extracción, transformación y carga",
  "responsable": "Jadira Vasquez + Carlos Curo",
  "semana": "S7",
  "prioridad": "Alta",
  "sprint": 2,
  "to": 4,
  "tm": 5,
  "tp": 8,
  "te": 5.3,
  "sigma": 0.67,
  "sigmaSq": 0.44,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "23/11/2026",
  "fin": "27/11/2026"
 },
 {
  "id": "A-2.1.1.4",
  "paquete": "1.2.1",
  "entregable": "Informe de la prueba de migración",
  "descripcion": "Ejecutar prueba de migración de datos y validar integridad",
  "responsable": "Jadira Vasquez",
  "semana": "S7",
  "prioridad": "Alta",
  "sprint": 2,
  "to": 2,
  "tm": 3,
  "tp": 5,
  "te": 3.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "25/11/2026",
  "fin": "27/11/2026"
 },
 {
  "id": "A-2.2.1.1",
  "paquete": "1.2.2",
  "entregable": "Validación nocturna programada",
  "descripcion": "Configurar tareas programadas nocturnas de limpieza y validación de datos",
  "responsable": "Jadira Vasquez",
  "semana": "S8",
  "prioridad": "Alta",
  "sprint": 2,
  "to": 3,
  "tm": 4,
  "tp": 6,
  "te": 4.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "30/11/2026",
  "fin": "03/12/2026"
 },
 {
  "id": "A-2.2.1.2",
  "paquete": "1.2.2",
  "entregable": "Reporte de consistencia de los datos",
  "descripcion": "Verificar consistencia de datos y corrección de registros erróneos",
  "responsable": "Jadira Vasquez + Carlos Curo",
  "semana": "S8",
  "prioridad": "Media",
  "sprint": 2,
  "to": 2,
  "tm": 3,
  "tp": 4,
  "te": 3,
  "sigma": 0.33,
  "sigmaSq": 0.11,
  "isCritical": false,
  "isNew": false,
  "continua": false,
  "inicio": "02/12/2026",
  "fin": "04/12/2026"
 },
 {
  "id": "A-3.1.1.1",
  "paquete": "1.3.1",
  "entregable": "Informe del análisis exploratorio de los datos",
  "descripcion": "Análisis exploratorio del dataset académico (EDA)",
  "responsable": "Helber Perez",
  "semana": "S9",
  "prioridad": "Alta",
  "sprint": 3,
  "to": 3,
  "tm": 4,
  "tp": 6,
  "te": 4.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "07/12/2026",
  "fin": "14/12/2026"
 },
 {
  "id": "A-3.1.1.2",
  "paquete": "1.3.1",
  "entregable": "Variables preprocesadas para el modelo",
  "descripcion": "Preprocesar y normalizar variables académicas para el modelo",
  "responsable": "Helber Perez",
  "semana": "S9",
  "prioridad": "Alta",
  "sprint": 3,
  "to": 2,
  "tm": 3,
  "tp": 5,
  "te": 3.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": false,
  "isNew": false,
  "continua": false,
  "inicio": "10/12/2026",
  "fin": "14/12/2026"
 },
 {
  "id": "A-3.1.1.3",
  "paquete": "1.3.1",
  "entregable": "Algoritmo seleccionado y su justificación",
  "descripcion": "Seleccionar algoritmo ML (Random Forest / Gradient Boosting / Regresión logística)",
  "responsable": "Helber Perez",
  "semana": "S10",
  "prioridad": "Alta",
  "sprint": 3,
  "to": 2,
  "tm": 3,
  "tp": 5,
  "te": 3.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "14/12/2026",
  "fin": "16/12/2026"
 },
 {
  "id": "A-3.1.1.4",
  "paquete": "1.3.1",
  "entregable": "Modelo entrenado",
  "descripcion": "Entrenar modelo predictivo con Scikit-learn usando datos históricos",
  "responsable": "Helber Perez",
  "semana": "S10",
  "prioridad": "Alta",
  "sprint": 3,
  "to": 3,
  "tm": 5,
  "tp": 8,
  "te": 5.2,
  "sigma": 0.83,
  "sigmaSq": 0.69,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "16/12/2026",
  "fin": "22/12/2026"
 },
 {
  "id": "A-3.2.1.1",
  "paquete": "1.3.3",
  "entregable": "Reporte de métricas del modelo",
  "descripcion": "Evaluar métricas del modelo (accuracy, precision, recall, F1-score)",
  "responsable": "Helber Perez",
  "semana": "S11",
  "prioridad": "Alta",
  "sprint": 3,
  "to": 2,
  "tm": 3,
  "tp": 5,
  "te": 3.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "21/12/2026",
  "fin": "23/12/2026"
 },
 {
  "id": "A-3.2.1.2",
  "paquete": "1.3.3",
  "entregable": "Modelo ajustado que cumple el umbral",
  "descripcion": "Ajustar hiperparámetros hasta alcanzar el umbral mínimo de 75 % en la métrica acordada",
  "responsable": "Helber Perez",
  "semana": "S11",
  "prioridad": "Alta",
  "sprint": 3,
  "to": 2,
  "tm": 4,
  "tp": 6,
  "te": 4,
  "sigma": 0.67,
  "sigmaSq": 0.44,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "23/12/2026",
  "fin": "29/12/2026"
 },
 {
  "id": "A-3.2.1.3",
  "paquete": "1.3.2",
  "entregable": "Clasificación en tres niveles de riesgo",
  "descripcion": "Implementar lógica de clasificación: riesgo alto (rojo), medio (amarillo), bajo (verde)",
  "responsable": "Helber Perez",
  "semana": "S11",
  "prioridad": "Alta",
  "sprint": 3,
  "to": 2,
  "tm": 3,
  "tp": 4,
  "te": 3,
  "sigma": 0.33,
  "sigmaSq": 0.11,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "24/12/2026",
  "fin": "29/12/2026"
 },
 {
  "id": "A-3.2.1.4",
  "paquete": "1.3.2",
  "entregable": "Actualización semanal automática del modelo",
  "descripcion": "Configurar script de actualización semanal automática del modelo",
  "responsable": "Helber Perez + Jadira Vasquez",
  "semana": "S12",
  "prioridad": "Media",
  "sprint": 3,
  "to": 2,
  "tm": 3,
  "tp": 5,
  "te": 3.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": false,
  "isNew": false,
  "continua": false,
  "inicio": "28/12/2026",
  "fin": "30/12/2026"
 },
 {
  "id": "A-4.1.1.1",
  "paquete": "1.4.1",
  "entregable": "Plantilla del correo de alerta",
  "descripcion": "Diseñar plantilla de correo de alerta para el docente tutor",
  "responsable": "Jadira Vasquez",
  "semana": "S13",
  "prioridad": "Alta",
  "sprint": 4,
  "to": 1,
  "tm": 2,
  "tp": 3,
  "te": 2,
  "sigma": 0.33,
  "sigmaSq": 0.11,
  "isCritical": false,
  "isNew": false,
  "continua": false,
  "inicio": "04/01/2027",
  "fin": "05/01/2027"
 },
 {
  "id": "A-4.1.1.2",
  "paquete": "1.4.1",
  "entregable": "Envío automático de alertas por correo",
  "descripcion": "Desarrollar módulo de envío automático de alertas por correo electrónico",
  "responsable": "Jadira Vasquez",
  "semana": "S13",
  "prioridad": "Alta",
  "sprint": 4,
  "to": 3,
  "tm": 4,
  "tp": 6,
  "te": 4.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": false,
  "isNew": false,
  "continua": false,
  "inicio": "06/01/2027",
  "fin": "11/01/2027"
 },
 {
  "id": "A-4.1.1.3",
  "paquete": "1.4.1",
  "entregable": "Panel web de alertas del docente",
  "descripcion": "Desarrollar módulo web de alertas críticas en panel del docente",
  "responsable": "Jadira Vasquez",
  "semana": "S14",
  "prioridad": "Alta",
  "sprint": 4,
  "to": 3,
  "tm": 4,
  "tp": 6,
  "te": 4.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": false,
  "isNew": false,
  "continua": false,
  "inicio": "11/01/2027",
  "fin": "14/01/2027"
 },
 {
  "id": "A-4.1.1.4",
  "paquete": "1.4.1",
  "entregable": "Registro de seguimiento de casos",
  "descripcion": "Implementar módulo de registro de seguimiento de casos críticos",
  "responsable": "Jadira Vasquez",
  "semana": "S14",
  "prioridad": "Media",
  "sprint": 4,
  "to": 2,
  "tm": 3,
  "tp": 4,
  "te": 3,
  "sigma": 0.33,
  "sigmaSq": 0.11,
  "isCritical": false,
  "isNew": false,
  "continua": false,
  "inicio": "13/01/2027",
  "fin": "15/01/2027"
 },
 {
  "id": "A-4.2.1.1",
  "paquete": "1.4.2.1",
  "entregable": "Wireframes y prototipo de la interfaz",
  "descripcion": "Diseñar wireframes y prototipo de la interfaz Next.js",
  "responsable": "Carlos Curo",
  "semana": "S15",
  "prioridad": "Alta",
  "sprint": 4,
  "to": 2,
  "tm": 3,
  "tp": 5,
  "te": 3.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "18/01/2027",
  "fin": "20/01/2027"
 },
 {
  "id": "A-4.2.1.2",
  "paquete": "1.4.2.2",
  "entregable": "Tablero con semáforo de riesgo",
  "descripcion": "Desarrollar dashboard interactivo con semáforo de riesgo por alumno, aula y grado",
  "responsable": "Carlos Curo",
  "semana": "S15",
  "prioridad": "Alta",
  "sprint": 4,
  "to": 4,
  "tm": 5,
  "tp": 8,
  "te": 5.3,
  "sigma": 0.67,
  "sigmaSq": 0.44,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "20/01/2027",
  "fin": "26/01/2027"
 },
 {
  "id": "A-4.2.1.3",
  "paquete": "1.4.2.2",
  "entregable": "Ficha individual del estudiante",
  "descripcion": "Desarrollar ficha individual del estudiante con historial completo",
  "responsable": "Carlos Curo",
  "semana": "S16",
  "prioridad": "Media",
  "sprint": 4,
  "to": 2,
  "tm": 3,
  "tp": 5,
  "te": 3.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "25/01/2027",
  "fin": "27/01/2027"
 },
 {
  "id": "A-4.2.1.4",
  "paquete": "1.4.3",
  "entregable": "Roles y control de acceso",
  "descripcion": "Implementar módulo de roles y control de acceso por perfil de usuario",
  "responsable": "Jhostin Galarza",
  "semana": "S16",
  "prioridad": "Alta",
  "sprint": 4,
  "to": 2,
  "tm": 3,
  "tp": 4,
  "te": 3,
  "sigma": 0.33,
  "sigmaSq": 0.11,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "27/01/2027",
  "fin": "29/01/2027"
 },
 {
  "id": "A-4.2.1.5",
  "paquete": "1.4.2.2",
  "entregable": "Reportes exportables en PDF y Excel",
  "descripcion": "Desarrollar módulo de reportes exportables en PDF y Excel por unidad evaluativa",
  "responsable": "Carlos Curo",
  "semana": "S16",
  "prioridad": "Media",
  "sprint": 4,
  "to": 2,
  "tm": 3,
  "tp": 5,
  "te": 3.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "27/01/2027",
  "fin": "29/01/2027"
 },
 {
  "id": "A-5.0.1.1",
  "paquete": "1.6.1",
  "entregable": "Reporte de pruebas de integración",
  "descripcion": "Pruebas de integración entre todos los módulos del sistema: verificar ETL, ML, alertas y dashboard funcionan en conjunto",
  "responsable": "Equipo del proyecto",
  "semana": "S17",
  "prioridad": "Alta",
  "sprint": 5,
  "to": 3,
  "tm": 5,
  "tp": 8,
  "te": 5.2,
  "sigma": 0.83,
  "sigmaSq": 0.69,
  "isCritical": true,
  "isNew": true,
  "continua": false,
  "inicio": "01/03/2027",
  "fin": "05/03/2027"
 },
 {
  "id": "A-5.0.1.2",
  "paquete": "1.6.1",
  "entregable": "Reporte de pruebas de rendimiento",
  "descripcion": "Pruebas de rendimiento del sistema: confirmar que el tablero carga en menos de 3 segundos y que la clasificación semanal se ejecuta sin intervención manual",
  "responsable": "Carlos Curo + Jadira Vasquez",
  "semana": "S17",
  "prioridad": "Alta",
  "sprint": 5,
  "to": 2,
  "tm": 4,
  "tp": 6,
  "te": 4,
  "sigma": 0.67,
  "sigmaSq": 0.44,
  "isCritical": true,
  "isNew": true,
  "continua": false,
  "inicio": "03/03/2027",
  "fin": "08/03/2027"
 },
 {
  "id": "A-5.0.2.1",
  "paquete": "1.6.2",
  "entregable": "Registro de la prueba piloto",
  "descripcion": "Prueba piloto real con grupo de 3 docentes tutores usando datos académicos reales del colegio durante 2 semanas",
  "responsable": "Equipo del proyecto + docentes",
  "semana": "S18–S19",
  "prioridad": "Alta",
  "sprint": 5,
  "to": 5,
  "tm": 7,
  "tp": 10,
  "te": 7.2,
  "sigma": 0.83,
  "sigmaSq": 0.69,
  "isCritical": true,
  "isNew": true,
  "continua": false,
  "inicio": "08/03/2027",
  "fin": "19/03/2027"
 },
 {
  "id": "A-5.0.2.2",
  "paquete": "1.6.2",
  "entregable": "Informe del piloto con los ajustes aplicados",
  "descripcion": "Recopilar feedback del piloto, documentar observaciones y aplicar ajustes al sistema basados en uso real",
  "responsable": "Equipo del proyecto + docentes",
  "semana": "S20",
  "prioridad": "Alta",
  "sprint": 5,
  "to": 3,
  "tm": 4,
  "tp": 6,
  "te": 4.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": true,
  "continua": false,
  "inicio": "19/03/2027",
  "fin": "24/03/2027"
 },
 {
  "id": "A-5.1.1.1",
  "paquete": "1.5.1",
  "entregable": "Entorno de producción configurado",
  "descripcion": "Configurar el entorno de producción en la nube (alojamiento web, base de datos y tarea programada)",
  "responsable": "Jadira Vasquez",
  "semana": "S21",
  "prioridad": "Alta",
  "sprint": 6,
  "to": 2,
  "tm": 3,
  "tp": 4,
  "te": 3,
  "sigma": 0.33,
  "sigmaSq": 0.11,
  "isCritical": false,
  "isNew": false,
  "continua": false,
  "inicio": "29/03/2027",
  "fin": "31/03/2027"
 },
 {
  "id": "A-5.1.1.2",
  "paquete": "1.5.1",
  "entregable": "Sistema desplegado en producción",
  "descripcion": "Desplegar sistema completo en entorno de producción definitivo",
  "responsable": "Jadira Vasquez",
  "semana": "S21",
  "prioridad": "Alta",
  "sprint": 6,
  "to": 3,
  "tm": 4,
  "tp": 6,
  "te": 4.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "31/03/2027",
  "fin": "05/04/2027"
 },
 {
  "id": "A-5.1.1.3",
  "paquete": "1.4.2.3",
  "entregable": "Actas de las pruebas de aceptación con docentes",
  "descripcion": "Ejecutar pruebas de aceptación UAT formales con todos los docentes tutores",
  "responsable": "Equipo del proyecto + docentes",
  "semana": "S22",
  "prioridad": "Alta",
  "sprint": 6,
  "to": 4,
  "tm": 5,
  "tp": 7,
  "te": 5.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "05/04/2027",
  "fin": "09/04/2027"
 },
 {
  "id": "A-5.1.1.4",
  "paquete": "1.5.1",
  "entregable": "Registro de las correcciones",
  "descripcion": "Corregir observaciones y bugs detectados en pruebas UAT formales",
  "responsable": "Carlos Curo + Jadira Vasquez",
  "semana": "S22",
  "prioridad": "Alta",
  "sprint": 6,
  "to": 2,
  "tm": 3,
  "tp": 5,
  "te": 3.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "07/04/2027",
  "fin": "09/04/2027"
 },
 {
  "id": "A-5.2.1.1",
  "paquete": "1.5.2",
  "entregable": "Manual de usuario",
  "descripcion": "Elaborar manual de usuario (docentes y coordinadores)",
  "responsable": "Carlos Curo",
  "semana": "S23",
  "prioridad": "Media",
  "sprint": 6,
  "to": 2,
  "tm": 3,
  "tp": 4,
  "te": 3,
  "sigma": 0.33,
  "sigmaSq": 0.11,
  "isCritical": false,
  "isNew": false,
  "continua": false,
  "inicio": "12/04/2027",
  "fin": "14/04/2027"
 },
 {
  "id": "A-5.2.1.2",
  "paquete": "1.5.3",
  "entregable": "Manual técnico",
  "descripcion": "Elaborar manual técnico del sistema para el responsable de TI del colegio",
  "responsable": "Helber Perez",
  "semana": "S23",
  "prioridad": "Media",
  "sprint": 6,
  "to": 2,
  "tm": 3,
  "tp": 4,
  "te": 3,
  "sigma": 0.33,
  "sigmaSq": 0.11,
  "isCritical": false,
  "isNew": false,
  "continua": false,
  "inicio": "14/04/2027",
  "fin": "16/04/2027"
 },
 {
  "id": "A-5.2.1.3",
  "paquete": "1.5.4",
  "entregable": "Lista de asistencia a la capacitación",
  "descripcion": "Ejecutar sesión formal de capacitación a todos los docentes y coordinadores (2 horas)",
  "responsable": "Jhostin Galarza + Coordinación académica",
  "semana": "S23",
  "prioridad": "Alta",
  "sprint": 6,
  "to": 1,
  "tm": 2,
  "tp": 3,
  "te": 2,
  "sigma": 0.33,
  "sigmaSq": 0.11,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "15/04/2027",
  "fin": "16/04/2027"
 },
 {
  "id": "A-5.2.1.4",
  "paquete": "1.5.5",
  "entregable": "Acta de la retrospectiva final",
  "descripcion": "Realizar retrospectiva final del proyecto SCRUM",
  "responsable": "Jhostin Galarza",
  "semana": "S24",
  "prioridad": "Media",
  "sprint": 6,
  "to": 1,
  "tm": 1,
  "tp": 2,
  "te": 1.2,
  "sigma": 0.17,
  "sigmaSq": 0.03,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "19/04/2027",
  "fin": "19/04/2027"
 },
 {
  "id": "A-5.2.1.5",
  "paquete": "1.5.5",
  "entregable": "Informe final y presentación de cierre",
  "descripcion": "Elaborar informe final del proyecto y presentación de cierre ante el docente del curso",
  "responsable": "Equipo del proyecto",
  "semana": "S24",
  "prioridad": "Alta",
  "sprint": 6,
  "to": 3,
  "tm": 4,
  "tp": 6,
  "te": 4.2,
  "sigma": 0.5,
  "sigmaSq": 0.25,
  "isCritical": true,
  "isNew": false,
  "continua": false,
  "inicio": "20/04/2027",
  "fin": "23/04/2027"
 }
];

export const TAREAS_PROJECT = [
 {
  "id": 1,
  "predecesoras": "",
  "recursos": "",
  "nombre": "Sistema ML - Alerta Temprana Académica SIA-T (proyecto completo)",
  "nivel": 1,
  "desde": "2026-10-12",
  "hasta": "2027-04-23",
  "duracion": "134 días",
  "comienzo": "lun 12/10/26",
  "fin": "vie 23/04/27",
  "sprint": 0,
  "isSummary": true
 },
 {
  "id": 2,
  "predecesoras": "",
  "recursos": "",
  "nombre": "Sprint 1: Análisis y diseño (S1–S4)",
  "nivel": 2,
  "desde": "2026-10-12",
  "hasta": "2026-11-06",
  "duracion": "20 días",
  "comienzo": "lun 12/10/26",
  "fin": "vie 6/11/26",
  "sprint": 1,
  "isSummary": true
 },
 {
  "id": 3,
  "predecesoras": "",
  "recursos": "Equipo del proyecto + Dirección",
  "nivel": 3,
  "desde": "2026-10-12",
  "hasta": "2026-10-14",
  "hito": false,
  "critica": false,
  "nombre": "A-0.1.1.1 Reunión de levantamiento con directivos, coordinadores y área de TI para validar el alcance del sistema y acceso a datos académicos",
  "duracion": "3 días",
  "comienzo": "lun 12/10/26",
  "fin": "mié 14/10/26",
  "sprint": 1
 },
 {
  "id": 4,
  "predecesoras": "3",
  "recursos": "Jadira Vasquez + Helber Perez",
  "nivel": 3,
  "desde": "2026-10-19",
  "hasta": "2026-10-23",
  "hito": false,
  "critica": false,
  "nombre": "A-0.1.1.2 Análisis de calidad y disponibilidad de datos académicos existentes en los sistemas del colegio",
  "duracion": "5 días",
  "comienzo": "lun 19/10/26",
  "fin": "vie 23/10/26",
  "sprint": 1
 },
 {
  "id": 5,
  "predecesoras": "4",
  "recursos": "Helber Perez + docentes",
  "nivel": 3,
  "desde": "2026-10-26",
  "hasta": "2026-10-29",
  "hito": false,
  "critica": false,
  "nombre": "A-0.1.1.3 Definición y validación con docentes de las variables académicas que predicen el riesgo de bajo rendimiento",
  "duracion": "4 días",
  "comienzo": "lun 26/10/26",
  "fin": "jue 29/10/26",
  "sprint": 1
 },
 {
  "id": 6,
  "predecesoras": "5",
  "recursos": "Jadira Vasquez + Helber Perez",
  "nivel": 3,
  "desde": "2026-11-02",
  "hasta": "2026-11-06",
  "hito": false,
  "critica": false,
  "nombre": "A-0.1.1.4 Diseño de la arquitectura completa del sistema: módulos, integraciones, flujo de datos y tecnologías",
  "duracion": "5 días",
  "comienzo": "lun 2/11/26",
  "fin": "vie 6/11/26",
  "sprint": 1
 },
 {
  "id": 7,
  "predecesoras": "6",
  "recursos": "",
  "nivel": 3,
  "desde": "2026-11-06",
  "hasta": "2026-11-06",
  "hito": true,
  "critica": false,
  "nombre": "Hito 1: Sprint Review — Arquitectura validada y variables del modelo definidas",
  "duracion": "0 días",
  "comienzo": "vie 6/11/26",
  "fin": "vie 6/11/26",
  "sprint": 1
 },
 {
  "id": 8,
  "predecesoras": "",
  "recursos": "",
  "nombre": "Sprint 2: Gestión y datos (S5–S8)",
  "nivel": 2,
  "desde": "2026-11-09",
  "hasta": "2026-12-04",
  "duracion": "20 días",
  "comienzo": "lun 9/11/26",
  "fin": "vie 4/12/26",
  "sprint": 2,
  "isSummary": true
 },
 {
  "id": 9,
  "predecesoras": "7",
  "recursos": "Jhostin Galarza",
  "nivel": 3,
  "desde": "2026-11-09",
  "hasta": "2026-11-11",
  "hito": false,
  "critica": false,
  "nombre": "A-1.1.1.1 Elaborar cronograma de hitos del proyecto (Gantt SCRUM)",
  "duracion": "3 días",
  "comienzo": "lun 9/11/26",
  "fin": "mié 11/11/26",
  "sprint": 2
 },
 {
  "id": 10,
  "predecesoras": "7",
  "recursos": "Equipo del proyecto",
  "nivel": 3,
  "desde": "2026-11-11",
  "hasta": "2026-11-13",
  "hito": false,
  "critica": false,
  "nombre": "A-1.1.1.2 Definir Product Backlog y priorizar historias de usuario",
  "duracion": "3 días",
  "comienzo": "mié 11/11/26",
  "fin": "vie 13/11/26",
  "sprint": 2
 },
 {
  "id": 11,
  "predecesoras": "9",
  "recursos": "Equipo del proyecto",
  "nivel": 3,
  "desde": "2026-11-12",
  "hasta": "2026-11-12",
  "hito": false,
  "critica": false,
  "nombre": "A-1.1.1.3 Asignar roles SCRUM: Product Owner, Scrum Master, Dev Team",
  "duracion": "1 día",
  "comienzo": "jue 12/11/26",
  "fin": "jue 12/11/26",
  "sprint": 2
 },
 {
  "id": 12,
  "predecesoras": "11",
  "recursos": "Jhostin Galarza",
  "nivel": 3,
  "desde": "2026-11-13",
  "hasta": "2026-11-13",
  "hito": false,
  "critica": false,
  "nombre": "A-1.2.1.1 Establecer plantilla de informe de avance semanal",
  "duracion": "1 día",
  "comienzo": "vie 13/11/26",
  "fin": "vie 13/11/26",
  "sprint": 2
 },
 {
  "id": 13,
  "predecesoras": "10;12",
  "recursos": "Jadira Vasquez",
  "nivel": 3,
  "desde": "2026-11-16",
  "hasta": "2026-11-19",
  "hito": false,
  "critica": true,
  "nombre": "A-2.1.1.1 Levantar y mapear fuentes de datos académicos (asistencia, notas, participación, incidencias)",
  "duracion": "4 días",
  "comienzo": "lun 16/11/26",
  "fin": "jue 19/11/26",
  "sprint": 2
 },
 {
  "id": 14,
  "predecesoras": "10;12",
  "recursos": "Jadira Vasquez",
  "nivel": 3,
  "desde": "2026-11-18",
  "hasta": "2026-11-20",
  "hito": false,
  "critica": true,
  "nombre": "A-2.1.1.2 Diseñar modelo entidad-relación de la BD centralizada (PostgreSQL)",
  "duracion": "3 días",
  "comienzo": "mié 18/11/26",
  "fin": "vie 20/11/26",
  "sprint": 2
 },
 {
  "id": 15,
  "predecesoras": "14",
  "recursos": "Jadira Vasquez + Carlos Curo",
  "nivel": 3,
  "desde": "2026-11-23",
  "hasta": "2026-11-27",
  "hito": false,
  "critica": true,
  "nombre": "A-2.1.1.3 Codificar scripts ETL de extracción, transformación y carga",
  "duracion": "5 días",
  "comienzo": "lun 23/11/26",
  "fin": "vie 27/11/26",
  "sprint": 2
 },
 {
  "id": 16,
  "predecesoras": "14",
  "recursos": "Jadira Vasquez",
  "nivel": 3,
  "desde": "2026-11-25",
  "hasta": "2026-11-27",
  "hito": false,
  "critica": true,
  "nombre": "A-2.1.1.4 Ejecutar prueba de migración de datos y validar integridad",
  "duracion": "3 días",
  "comienzo": "mié 25/11/26",
  "fin": "vie 27/11/26",
  "sprint": 2
 },
 {
  "id": 17,
  "predecesoras": "15;16",
  "recursos": "Jadira Vasquez",
  "nivel": 3,
  "desde": "2026-11-30",
  "hasta": "2026-12-03",
  "hito": false,
  "critica": true,
  "nombre": "A-2.2.1.1 Configurar tareas programadas nocturnas de limpieza y validación de datos",
  "duracion": "4 días",
  "comienzo": "lun 30/11/26",
  "fin": "jue 3/12/26",
  "sprint": 2
 },
 {
  "id": 18,
  "predecesoras": "15;16",
  "recursos": "Jadira Vasquez + Carlos Curo",
  "nivel": 3,
  "desde": "2026-12-02",
  "hasta": "2026-12-04",
  "hito": false,
  "critica": false,
  "nombre": "A-2.2.1.2 Verificar consistencia de datos y corrección de registros erróneos",
  "duracion": "3 días",
  "comienzo": "mié 2/12/26",
  "fin": "vie 4/12/26",
  "sprint": 2
 },
 {
  "id": 19,
  "predecesoras": "13;17;18",
  "recursos": "",
  "nivel": 3,
  "desde": "2026-12-04",
  "hasta": "2026-12-04",
  "hito": true,
  "critica": false,
  "nombre": "Hito 2: Sprint Review — Base de datos centralizada y validada",
  "duracion": "0 días",
  "comienzo": "vie 4/12/26",
  "fin": "vie 4/12/26",
  "sprint": 2
 },
 {
  "id": 20,
  "predecesoras": "",
  "recursos": "",
  "nombre": "Sprint 3: Modelo ML (S9–S12)",
  "nivel": 2,
  "desde": "2026-12-07",
  "hasta": "2026-12-30",
  "duracion": "15 días",
  "comienzo": "lun 7/12/26",
  "fin": "mié 30/12/26",
  "sprint": 3,
  "isSummary": true
 },
 {
  "id": 21,
  "predecesoras": "19",
  "recursos": "Helber Perez",
  "nivel": 3,
  "desde": "2026-12-07",
  "hasta": "2026-12-14",
  "hito": false,
  "critica": true,
  "nombre": "A-3.1.1.1 Análisis exploratorio del dataset académico (EDA)",
  "duracion": "4 días",
  "comienzo": "lun 7/12/26",
  "fin": "lun 14/12/26",
  "sprint": 3
 },
 {
  "id": 22,
  "predecesoras": "19",
  "recursos": "Helber Perez",
  "nivel": 3,
  "desde": "2026-12-10",
  "hasta": "2026-12-14",
  "hito": false,
  "critica": false,
  "nombre": "A-3.1.1.2 Preprocesar y normalizar variables académicas para el modelo",
  "duracion": "3 días",
  "comienzo": "jue 10/12/26",
  "fin": "lun 14/12/26",
  "sprint": 3
 },
 {
  "id": 23,
  "predecesoras": "19",
  "recursos": "Helber Perez",
  "nivel": 3,
  "desde": "2026-12-14",
  "hasta": "2026-12-16",
  "hito": false,
  "critica": true,
  "nombre": "A-3.1.1.3 Seleccionar algoritmo ML (Random Forest / Gradient Boosting / Regresión logística)",
  "duracion": "3 días",
  "comienzo": "lun 14/12/26",
  "fin": "mié 16/12/26",
  "sprint": 3
 },
 {
  "id": 24,
  "predecesoras": "21;22",
  "recursos": "Helber Perez",
  "nivel": 3,
  "desde": "2026-12-16",
  "hasta": "2026-12-22",
  "hito": false,
  "critica": true,
  "nombre": "A-3.1.1.4 Entrenar modelo predictivo con Scikit-learn usando datos históricos",
  "duracion": "5 días",
  "comienzo": "mié 16/12/26",
  "fin": "mar 22/12/26",
  "sprint": 3
 },
 {
  "id": 25,
  "predecesoras": "23",
  "recursos": "Helber Perez",
  "nivel": 3,
  "desde": "2026-12-21",
  "hasta": "2026-12-23",
  "hito": false,
  "critica": true,
  "nombre": "A-3.2.1.1 Evaluar métricas del modelo (accuracy, precision, recall, F1-score)",
  "duracion": "3 días",
  "comienzo": "lun 21/12/26",
  "fin": "mié 23/12/26",
  "sprint": 3
 },
 {
  "id": 26,
  "predecesoras": "24",
  "recursos": "Helber Perez",
  "nivel": 3,
  "desde": "2026-12-23",
  "hasta": "2026-12-29",
  "hito": false,
  "critica": true,
  "nombre": "A-3.2.1.2 Ajustar hiperparámetros hasta alcanzar el umbral mínimo de 75 % en la métrica acordada",
  "duracion": "4 días",
  "comienzo": "mié 23/12/26",
  "fin": "mar 29/12/26",
  "sprint": 3
 },
 {
  "id": 27,
  "predecesoras": "25",
  "recursos": "Helber Perez",
  "nivel": 3,
  "desde": "2026-12-24",
  "hasta": "2026-12-29",
  "hito": false,
  "critica": true,
  "nombre": "A-3.2.1.3 Implementar lógica de clasificación: riesgo alto (rojo), medio (amarillo), bajo (verde)",
  "duracion": "3 días",
  "comienzo": "jue 24/12/26",
  "fin": "mar 29/12/26",
  "sprint": 3
 },
 {
  "id": 28,
  "predecesoras": "25",
  "recursos": "Helber Perez + Jadira Vasquez",
  "nivel": 3,
  "desde": "2026-12-28",
  "hasta": "2026-12-30",
  "hito": false,
  "critica": false,
  "nombre": "A-3.2.1.4 Configurar script de actualización semanal automática del modelo",
  "duracion": "3 días",
  "comienzo": "lun 28/12/26",
  "fin": "mié 30/12/26",
  "sprint": 3
 },
 {
  "id": 29,
  "predecesoras": "26;27;28",
  "recursos": "",
  "nivel": 3,
  "desde": "2026-12-30",
  "hasta": "2026-12-30",
  "hito": true,
  "critica": false,
  "nombre": "Hito 3: Sprint Review — Modelo ML validado con el criterio acordado",
  "duracion": "0 días",
  "comienzo": "mié 30/12/26",
  "fin": "mié 30/12/26",
  "sprint": 3
 },
 {
  "id": 30,
  "predecesoras": "",
  "recursos": "",
  "nombre": "Sprint 4: Alertas y tablero (S13–S16)",
  "nivel": 2,
  "desde": "2027-01-04",
  "hasta": "2027-01-29",
  "duracion": "20 días",
  "comienzo": "lun 4/01/27",
  "fin": "vie 29/01/27",
  "sprint": 4,
  "isSummary": true
 },
 {
  "id": 31,
  "predecesoras": "29",
  "recursos": "Jadira Vasquez",
  "nivel": 3,
  "desde": "2027-01-04",
  "hasta": "2027-01-05",
  "hito": false,
  "critica": false,
  "nombre": "A-4.1.1.1 Diseñar plantilla de correo de alerta para el docente tutor",
  "duracion": "2 días",
  "comienzo": "lun 4/01/27",
  "fin": "mar 5/01/27",
  "sprint": 4
 },
 {
  "id": 32,
  "predecesoras": "31",
  "recursos": "Jadira Vasquez",
  "nivel": 3,
  "desde": "2027-01-06",
  "hasta": "2027-01-11",
  "hito": false,
  "critica": false,
  "nombre": "A-4.1.1.2 Desarrollar módulo de envío automático de alertas por correo electrónico",
  "duracion": "4 días",
  "comienzo": "mié 6/01/27",
  "fin": "lun 11/01/27",
  "sprint": 4
 },
 {
  "id": 33,
  "predecesoras": "31",
  "recursos": "Jadira Vasquez",
  "nivel": 3,
  "desde": "2027-01-11",
  "hasta": "2027-01-14",
  "hito": false,
  "critica": false,
  "nombre": "A-4.1.1.3 Desarrollar módulo web de alertas críticas en panel del docente",
  "duracion": "4 días",
  "comienzo": "lun 11/01/27",
  "fin": "jue 14/01/27",
  "sprint": 4
 },
 {
  "id": 34,
  "predecesoras": "32",
  "recursos": "Jadira Vasquez",
  "nivel": 3,
  "desde": "2027-01-13",
  "hasta": "2027-01-15",
  "hito": false,
  "critica": false,
  "nombre": "A-4.1.1.4 Implementar módulo de registro de seguimiento de casos críticos",
  "duracion": "3 días",
  "comienzo": "mié 13/01/27",
  "fin": "vie 15/01/27",
  "sprint": 4
 },
 {
  "id": 35,
  "predecesoras": "34",
  "recursos": "Carlos Curo",
  "nivel": 3,
  "desde": "2027-01-18",
  "hasta": "2027-01-20",
  "hito": false,
  "critica": true,
  "nombre": "A-4.2.1.1 Diseñar wireframes y prototipo de la interfaz Next.js",
  "duracion": "3 días",
  "comienzo": "lun 18/01/27",
  "fin": "mié 20/01/27",
  "sprint": 4
 },
 {
  "id": 36,
  "predecesoras": "34",
  "recursos": "Carlos Curo",
  "nivel": 3,
  "desde": "2027-01-20",
  "hasta": "2027-01-26",
  "hito": false,
  "critica": true,
  "nombre": "A-4.2.1.2 Desarrollar dashboard interactivo con semáforo de riesgo por alumno, aula y grado",
  "duracion": "5 días",
  "comienzo": "mié 20/01/27",
  "fin": "mar 26/01/27",
  "sprint": 4
 },
 {
  "id": 37,
  "predecesoras": "35",
  "recursos": "Carlos Curo",
  "nivel": 3,
  "desde": "2027-01-25",
  "hasta": "2027-01-27",
  "hito": false,
  "critica": true,
  "nombre": "A-4.2.1.3 Desarrollar ficha individual del estudiante con historial completo",
  "duracion": "3 días",
  "comienzo": "lun 25/01/27",
  "fin": "mié 27/01/27",
  "sprint": 4
 },
 {
  "id": 38,
  "predecesoras": "36",
  "recursos": "Jhostin Galarza",
  "nivel": 3,
  "desde": "2027-01-27",
  "hasta": "2027-01-29",
  "hito": false,
  "critica": true,
  "nombre": "A-4.2.1.4 Implementar módulo de roles y control de acceso por perfil de usuario",
  "duracion": "3 días",
  "comienzo": "mié 27/01/27",
  "fin": "vie 29/01/27",
  "sprint": 4
 },
 {
  "id": 39,
  "predecesoras": "36",
  "recursos": "Carlos Curo",
  "nivel": 3,
  "desde": "2027-01-27",
  "hasta": "2027-01-29",
  "hito": false,
  "critica": true,
  "nombre": "A-4.2.1.5 Desarrollar módulo de reportes exportables en PDF y Excel por unidad evaluativa",
  "duracion": "3 días",
  "comienzo": "mié 27/01/27",
  "fin": "vie 29/01/27",
  "sprint": 4
 },
 {
  "id": 40,
  "predecesoras": "33;37;38;39",
  "recursos": "",
  "nivel": 3,
  "desde": "2027-01-29",
  "hasta": "2027-01-29",
  "hito": true,
  "critica": false,
  "nombre": "Hito 4: Sprint Review — Sistema integrado con alertas y tablero operativos",
  "duracion": "0 días",
  "comienzo": "vie 29/01/27",
  "fin": "vie 29/01/27",
  "sprint": 4
 },
 {
  "id": 41,
  "predecesoras": "40",
  "recursos": "",
  "nivel": 2,
  "desde": "2027-02-01",
  "hasta": "2027-02-26",
  "hito": false,
  "critica": false,
  "nombre": "Receso por vacaciones escolares (incluye la reserva de gestión del 22 al 26 de febrero)",
  "duracion": "20 días",
  "comienzo": "lun 1/02/27",
  "fin": "vie 26/02/27",
  "sprint": 4
 },
 {
  "id": 42,
  "predecesoras": "",
  "recursos": "",
  "nombre": "Sprint 5: Pruebas y piloto (S17–S20)",
  "nivel": 2,
  "desde": "2027-03-01",
  "hasta": "2027-03-24",
  "duracion": "18 días",
  "comienzo": "lun 1/03/27",
  "fin": "mié 24/03/27",
  "sprint": 5,
  "isSummary": true
 },
 {
  "id": 43,
  "predecesoras": "41",
  "recursos": "Equipo del proyecto",
  "nivel": 3,
  "desde": "2027-03-01",
  "hasta": "2027-03-05",
  "hito": false,
  "critica": true,
  "nombre": "A-5.0.1.1 Pruebas de integración entre todos los módulos del sistema: verificar ETL, ML, alertas y dashboard funcionan en conjunto",
  "duracion": "5 días",
  "comienzo": "lun 1/03/27",
  "fin": "vie 5/03/27",
  "sprint": 5
 },
 {
  "id": 44,
  "predecesoras": "41",
  "recursos": "Carlos Curo + Jadira Vasquez",
  "nivel": 3,
  "desde": "2027-03-03",
  "hasta": "2027-03-08",
  "hito": false,
  "critica": true,
  "nombre": "A-5.0.1.2 Pruebas de rendimiento del sistema: confirmar que el tablero carga en menos de 3 segundos y que la clasificación semanal se ejecuta sin intervención manual",
  "duracion": "4 días",
  "comienzo": "mié 3/03/27",
  "fin": "lun 8/03/27",
  "sprint": 5
 },
 {
  "id": 45,
  "predecesoras": "43",
  "recursos": "Equipo del proyecto + docentes",
  "nivel": 3,
  "desde": "2027-03-08",
  "hasta": "2027-03-19",
  "hito": false,
  "critica": true,
  "nombre": "A-5.0.2.1 Prueba piloto real con grupo de 3 docentes tutores usando datos académicos reales del colegio durante 2 semanas",
  "duracion": "10 días",
  "comienzo": "lun 8/03/27",
  "fin": "vie 19/03/27",
  "sprint": 5
 },
 {
  "id": 46,
  "predecesoras": "44",
  "recursos": "Equipo del proyecto + docentes",
  "nivel": 3,
  "desde": "2027-03-19",
  "hasta": "2027-03-24",
  "hito": false,
  "critica": true,
  "nombre": "A-5.0.2.2 Recopilar feedback del piloto, documentar observaciones y aplicar ajustes al sistema basados en uso real",
  "duracion": "4 días",
  "comienzo": "vie 19/03/27",
  "fin": "mié 24/03/27",
  "sprint": 5
 },
 {
  "id": 47,
  "predecesoras": "45;46",
  "recursos": "",
  "nivel": 3,
  "desde": "2027-03-24",
  "hasta": "2027-03-24",
  "hito": true,
  "critica": false,
  "nombre": "Hito 5: Sprint Review — Sistema validado con pruebas y piloto real con docentes",
  "duracion": "0 días",
  "comienzo": "mié 24/03/27",
  "fin": "mié 24/03/27",
  "sprint": 5
 },
 {
  "id": 48,
  "predecesoras": "",
  "recursos": "",
  "nombre": "Sprint 6: Implantación y cierre (S21–S24)",
  "nivel": 2,
  "desde": "2027-03-29",
  "hasta": "2027-04-23",
  "duracion": "20 días",
  "comienzo": "lun 29/03/27",
  "fin": "vie 23/04/27",
  "sprint": 6,
  "isSummary": true
 },
 {
  "id": 49,
  "predecesoras": "47",
  "recursos": "Jadira Vasquez",
  "nivel": 3,
  "desde": "2027-03-29",
  "hasta": "2027-03-31",
  "hito": false,
  "critica": false,
  "nombre": "A-5.1.1.1 Configurar el entorno de producción en la nube (alojamiento web, base de datos y tarea programada)",
  "duracion": "3 días",
  "comienzo": "lun 29/03/27",
  "fin": "mié 31/03/27",
  "sprint": 6
 },
 {
  "id": 50,
  "predecesoras": "47",
  "recursos": "Jadira Vasquez",
  "nivel": 3,
  "desde": "2027-03-31",
  "hasta": "2027-04-05",
  "hito": false,
  "critica": true,
  "nombre": "A-5.1.1.2 Desplegar sistema completo en entorno de producción definitivo",
  "duracion": "4 días",
  "comienzo": "mié 31/03/27",
  "fin": "lun 5/04/27",
  "sprint": 6
 },
 {
  "id": 51,
  "predecesoras": "49",
  "recursos": "Equipo del proyecto + docentes",
  "nivel": 3,
  "desde": "2027-04-05",
  "hasta": "2027-04-09",
  "hito": false,
  "critica": true,
  "nombre": "A-5.1.1.3 Ejecutar pruebas de aceptación UAT formales con todos los docentes tutores",
  "duracion": "5 días",
  "comienzo": "lun 5/04/27",
  "fin": "vie 9/04/27",
  "sprint": 6
 },
 {
  "id": 52,
  "predecesoras": "50",
  "recursos": "Carlos Curo + Jadira Vasquez",
  "nivel": 3,
  "desde": "2027-04-07",
  "hasta": "2027-04-09",
  "hito": false,
  "critica": true,
  "nombre": "A-5.1.1.4 Corregir observaciones y bugs detectados en pruebas UAT formales",
  "duracion": "3 días",
  "comienzo": "mié 7/04/27",
  "fin": "vie 9/04/27",
  "sprint": 6
 },
 {
  "id": 53,
  "predecesoras": "51;52",
  "recursos": "Carlos Curo",
  "nivel": 3,
  "desde": "2027-04-12",
  "hasta": "2027-04-14",
  "hito": false,
  "critica": false,
  "nombre": "A-5.2.1.1 Elaborar manual de usuario (docentes y coordinadores)",
  "duracion": "3 días",
  "comienzo": "lun 12/04/27",
  "fin": "mié 14/04/27",
  "sprint": 6
 },
 {
  "id": 54,
  "predecesoras": "51;52",
  "recursos": "Helber Perez",
  "nivel": 3,
  "desde": "2027-04-14",
  "hasta": "2027-04-16",
  "hito": false,
  "critica": false,
  "nombre": "A-5.2.1.2 Elaborar manual técnico del sistema para el responsable de TI del colegio",
  "duracion": "3 días",
  "comienzo": "mié 14/04/27",
  "fin": "vie 16/04/27",
  "sprint": 6
 },
 {
  "id": 55,
  "predecesoras": "53",
  "recursos": "Jhostin Galarza + Coordinación académica",
  "nivel": 3,
  "desde": "2027-04-15",
  "hasta": "2027-04-16",
  "hito": false,
  "critica": true,
  "nombre": "A-5.2.1.3 Ejecutar sesión formal de capacitación a todos los docentes y coordinadores (2 horas)",
  "duracion": "2 días",
  "comienzo": "jue 15/04/27",
  "fin": "vie 16/04/27",
  "sprint": 6
 },
 {
  "id": 56,
  "predecesoras": "54;55",
  "recursos": "Jhostin Galarza",
  "nivel": 3,
  "desde": "2027-04-19",
  "hasta": "2027-04-19",
  "hito": false,
  "critica": true,
  "nombre": "A-5.2.1.4 Realizar retrospectiva final del proyecto SCRUM",
  "duracion": "1 día",
  "comienzo": "lun 19/04/27",
  "fin": "lun 19/04/27",
  "sprint": 6
 },
 {
  "id": 57,
  "predecesoras": "56",
  "recursos": "Equipo del proyecto",
  "nivel": 3,
  "desde": "2027-04-20",
  "hasta": "2027-04-23",
  "hito": false,
  "critica": true,
  "nombre": "A-5.2.1.5 Elaborar informe final del proyecto y presentación de cierre ante el docente del curso",
  "duracion": "4 días",
  "comienzo": "mar 20/04/27",
  "fin": "vie 23/04/27",
  "sprint": 6
 },
 {
  "id": 58,
  "predecesoras": "57",
  "recursos": "",
  "nivel": 3,
  "desde": "2027-04-23",
  "hasta": "2027-04-23",
  "hito": true,
  "critica": false,
  "nombre": "Hito 6: Sprint Review — Sistema en producción, capacitación realizada y proyecto cerrado",
  "duracion": "0 días",
  "comienzo": "vie 23/04/27",
  "fin": "vie 23/04/27",
  "sprint": 6
 },
 {
  "id": 59,
  "predecesoras": "7",
  "recursos": "Jhostin Galarza",
  "nivel": 2,
  "desde": "2026-11-09",
  "hasta": "2027-04-23",
  "hito": false,
  "critica": false,
  "nombre": "A-1.2.1.2 Daily Standup 15 min diarios — continuo todo el proyecto",
  "duracion": "114 días",
  "comienzo": "lun 9/11/26",
  "fin": "vie 23/04/27",
  "sprint": 2
 }
];

export const GANTT_SEMANAS = [
 {
  "prefijo": "A-0.1.1",
  "nombre": "Análisis y diseño",
  "critico": false,
  "semanas": [
   1,
   2,
   3,
   4
  ],
  "actividades": [
   "A-0.1.1.1",
   "A-0.1.1.2",
   "A-0.1.1.3",
   "A-0.1.1.4"
  ]
 },
 {
  "prefijo": "A-1.1.1",
  "nombre": "Organización del trabajo Scrum",
  "critico": false,
  "semanas": [
   5
  ],
  "actividades": [
   "A-1.1.1.1",
   "A-1.1.1.2",
   "A-1.1.1.3"
  ]
 },
 {
  "prefijo": "A-1.2.1",
  "nombre": "Seguimiento y reunión diaria",
  "critico": false,
  "semanas": [
   5,
   6,
   7,
   8,
   9,
   10,
   11,
   12,
   13,
   14,
   15,
   16,
   17,
   18,
   19,
   20,
   21,
   22,
   23,
   24
  ],
  "actividades": [
   "A-1.2.1.1",
   "A-1.2.1.2"
  ]
 },
 {
  "prefijo": "A-2.1.1",
  "nombre": "Integración de datos",
  "critico": true,
  "semanas": [
   6,
   7
  ],
  "actividades": [
   "A-2.1.1.1",
   "A-2.1.1.2",
   "A-2.1.1.3",
   "A-2.1.1.4"
  ]
 },
 {
  "prefijo": "A-2.2.1",
  "nombre": "Calidad de datos",
  "critico": true,
  "semanas": [
   8
  ],
  "actividades": [
   "A-2.2.1.1",
   "A-2.2.1.2"
  ]
 },
 {
  "prefijo": "A-3.1.1",
  "nombre": "Entrenamiento del modelo",
  "critico": true,
  "semanas": [
   9,
   10
  ],
  "actividades": [
   "A-3.1.1.1",
   "A-3.1.1.2",
   "A-3.1.1.3",
   "A-3.1.1.4"
  ]
 },
 {
  "prefijo": "A-3.2.1",
  "nombre": "Validación y clasificación de riesgo",
  "critico": true,
  "semanas": [
   11,
   12
  ],
  "actividades": [
   "A-3.2.1.1",
   "A-3.2.1.2",
   "A-3.2.1.3",
   "A-3.2.1.4"
  ]
 },
 {
  "prefijo": "A-4.1.1",
  "nombre": "Motor de alertas",
  "critico": false,
  "semanas": [
   13,
   14
  ],
  "actividades": [
   "A-4.1.1.1",
   "A-4.1.1.2",
   "A-4.1.1.3",
   "A-4.1.1.4"
  ]
 },
 {
  "prefijo": "A-4.2.1",
  "nombre": "Tablero web y accesos",
  "critico": true,
  "semanas": [
   15,
   16
  ],
  "actividades": [
   "A-4.2.1.1",
   "A-4.2.1.2",
   "A-4.2.1.3",
   "A-4.2.1.4",
   "A-4.2.1.5"
  ]
 },
 {
  "prefijo": "A-5.0.1",
  "nombre": "Pruebas de integración y rendimiento",
  "critico": true,
  "semanas": [
   17
  ],
  "actividades": [
   "A-5.0.1.1",
   "A-5.0.1.2"
  ]
 },
 {
  "prefijo": "A-5.0.2",
  "nombre": "Piloto con docentes",
  "critico": true,
  "semanas": [
   18,
   19,
   20
  ],
  "actividades": [
   "A-5.0.2.1",
   "A-5.0.2.2"
  ]
 },
 {
  "prefijo": "A-5.1.1",
  "nombre": "Despliegue y pruebas de aceptación",
  "critico": true,
  "semanas": [
   21,
   22
  ],
  "actividades": [
   "A-5.1.1.1",
   "A-5.1.1.2",
   "A-5.1.1.3",
   "A-5.1.1.4"
  ]
 },
 {
  "prefijo": "A-5.2.1",
  "nombre": "Manuales, capacitación y cierre",
  "critico": true,
  "semanas": [
   23,
   24
  ],
  "actividades": [
   "A-5.2.1.1",
   "A-5.2.1.2",
   "A-5.2.1.3",
   "A-5.2.1.4",
   "A-5.2.1.5"
  ]
 }
];

export const RED = [
 {
  "id": "A-0.1.1.1",
  "tipo": "actividad",
  "sprint": 1,
  "descripcion": "Reunión de levantamiento con directivos, coordinadores y área de TI para validar el alcance del sistema y acceso a datos académicos",
  "responsable": "Equipo del proyecto + Dirección",
  "paquete": "1.0.1",
  "te": 3.2,
  "critica": false,
  "dias": 3,
  "inicio": "2026-10-12",
  "fin": "2026-10-14",
  "preds": []
 },
 {
  "id": "A-0.1.1.2",
  "tipo": "actividad",
  "sprint": 1,
  "descripcion": "Análisis de calidad y disponibilidad de datos académicos existentes en los sistemas del colegio",
  "responsable": "Jadira Vasquez + Helber Perez",
  "paquete": "1.0.2",
  "te": 5.2,
  "critica": false,
  "dias": 5,
  "inicio": "2026-10-19",
  "fin": "2026-10-23",
  "preds": [
   "A-0.1.1.1"
  ]
 },
 {
  "id": "A-0.1.1.3",
  "tipo": "actividad",
  "sprint": 1,
  "descripcion": "Definición y validación con docentes de las variables académicas que predicen el riesgo de bajo rendimiento",
  "responsable": "Helber Perez + docentes",
  "paquete": "1.0.3",
  "te": 4,
  "critica": false,
  "dias": 4,
  "inicio": "2026-10-26",
  "fin": "2026-10-29",
  "preds": [
   "A-0.1.1.2"
  ]
 },
 {
  "id": "A-0.1.1.4",
  "tipo": "actividad",
  "sprint": 1,
  "descripcion": "Diseño de la arquitectura completa del sistema: módulos, integraciones, flujo de datos y tecnologías",
  "responsable": "Jadira Vasquez + Helber Perez",
  "paquete": "1.0.4",
  "te": 5,
  "critica": false,
  "dias": 5,
  "inicio": "2026-11-02",
  "fin": "2026-11-06",
  "preds": [
   "A-0.1.1.3"
  ]
 },
 {
  "id": "H1",
  "tipo": "hito",
  "sprint": 1,
  "descripcion": "Hito 1: Sprint Review — Arquitectura validada y variables del modelo definidas",
  "responsable": "",
  "paquete": "",
  "te": 0,
  "critica": false,
  "dias": 0,
  "inicio": "2026-11-06",
  "fin": "2026-11-06",
  "preds": [
   "A-0.1.1.4"
  ]
 },
 {
  "id": "A-1.1.1.1",
  "tipo": "actividad",
  "sprint": 2,
  "descripcion": "Elaborar cronograma de hitos del proyecto (Gantt SCRUM)",
  "responsable": "Jhostin Galarza",
  "paquete": "1.1.1",
  "te": 3.2,
  "critica": false,
  "dias": 3,
  "inicio": "2026-11-09",
  "fin": "2026-11-11",
  "preds": [
   "H1"
  ]
 },
 {
  "id": "A-1.1.1.2",
  "tipo": "actividad",
  "sprint": 2,
  "descripcion": "Definir Product Backlog y priorizar historias de usuario",
  "responsable": "Equipo del proyecto",
  "paquete": "1.1.1",
  "te": 3,
  "critica": false,
  "dias": 3,
  "inicio": "2026-11-11",
  "fin": "2026-11-13",
  "preds": [
   "H1"
  ]
 },
 {
  "id": "A-1.1.1.3",
  "tipo": "actividad",
  "sprint": 2,
  "descripcion": "Asignar roles SCRUM: Product Owner, Scrum Master, Dev Team",
  "responsable": "Equipo del proyecto",
  "paquete": "1.1.1",
  "te": 1.2,
  "critica": false,
  "dias": 1,
  "inicio": "2026-11-12",
  "fin": "2026-11-12",
  "preds": [
   "A-1.1.1.1"
  ]
 },
 {
  "id": "A-1.2.1.1",
  "tipo": "actividad",
  "sprint": 2,
  "descripcion": "Establecer plantilla de informe de avance semanal",
  "responsable": "Jhostin Galarza",
  "paquete": "1.1.2",
  "te": 1.2,
  "critica": false,
  "dias": 1,
  "inicio": "2026-11-13",
  "fin": "2026-11-13",
  "preds": [
   "A-1.1.1.3"
  ]
 },
 {
  "id": "A-2.1.1.1",
  "tipo": "actividad",
  "sprint": 2,
  "descripcion": "Levantar y mapear fuentes de datos académicos (asistencia, notas, participación, incidencias)",
  "responsable": "Jadira Vasquez",
  "paquete": "1.2.1",
  "te": 4.2,
  "critica": true,
  "dias": 4,
  "inicio": "2026-11-16",
  "fin": "2026-11-19",
  "preds": [
   "A-1.1.1.2",
   "A-1.2.1.1"
  ]
 },
 {
  "id": "A-2.1.1.2",
  "tipo": "actividad",
  "sprint": 2,
  "descripcion": "Diseñar modelo entidad-relación de la BD centralizada (PostgreSQL)",
  "responsable": "Jadira Vasquez",
  "paquete": "1.2.1",
  "te": 3.2,
  "critica": true,
  "dias": 3,
  "inicio": "2026-11-18",
  "fin": "2026-11-20",
  "preds": [
   "A-1.1.1.2",
   "A-1.2.1.1"
  ]
 },
 {
  "id": "A-2.1.1.3",
  "tipo": "actividad",
  "sprint": 2,
  "descripcion": "Codificar scripts ETL de extracción, transformación y carga",
  "responsable": "Jadira Vasquez + Carlos Curo",
  "paquete": "1.2.1",
  "te": 5.3,
  "critica": true,
  "dias": 5,
  "inicio": "2026-11-23",
  "fin": "2026-11-27",
  "preds": [
   "A-2.1.1.2"
  ]
 },
 {
  "id": "A-2.1.1.4",
  "tipo": "actividad",
  "sprint": 2,
  "descripcion": "Ejecutar prueba de migración de datos y validar integridad",
  "responsable": "Jadira Vasquez",
  "paquete": "1.2.1",
  "te": 3.2,
  "critica": true,
  "dias": 3,
  "inicio": "2026-11-25",
  "fin": "2026-11-27",
  "preds": [
   "A-2.1.1.2"
  ]
 },
 {
  "id": "A-2.2.1.1",
  "tipo": "actividad",
  "sprint": 2,
  "descripcion": "Configurar tareas programadas nocturnas de limpieza y validación de datos",
  "responsable": "Jadira Vasquez",
  "paquete": "1.2.2",
  "te": 4.2,
  "critica": true,
  "dias": 4,
  "inicio": "2026-11-30",
  "fin": "2026-12-03",
  "preds": [
   "A-2.1.1.3",
   "A-2.1.1.4"
  ]
 },
 {
  "id": "A-2.2.1.2",
  "tipo": "actividad",
  "sprint": 2,
  "descripcion": "Verificar consistencia de datos y corrección de registros erróneos",
  "responsable": "Jadira Vasquez + Carlos Curo",
  "paquete": "1.2.2",
  "te": 3,
  "critica": false,
  "dias": 3,
  "inicio": "2026-12-02",
  "fin": "2026-12-04",
  "preds": [
   "A-2.1.1.3",
   "A-2.1.1.4"
  ]
 },
 {
  "id": "H2",
  "tipo": "hito",
  "sprint": 2,
  "descripcion": "Hito 2: Sprint Review — Base de datos centralizada y validada",
  "responsable": "",
  "paquete": "",
  "te": 0,
  "critica": false,
  "dias": 0,
  "inicio": "2026-12-04",
  "fin": "2026-12-04",
  "preds": [
   "A-2.1.1.1",
   "A-2.2.1.1",
   "A-2.2.1.2"
  ]
 },
 {
  "id": "A-3.1.1.1",
  "tipo": "actividad",
  "sprint": 3,
  "descripcion": "Análisis exploratorio del dataset académico (EDA)",
  "responsable": "Helber Perez",
  "paquete": "1.3.1",
  "te": 4.2,
  "critica": true,
  "dias": 4,
  "inicio": "2026-12-07",
  "fin": "2026-12-14",
  "preds": [
   "H2"
  ]
 },
 {
  "id": "A-3.1.1.2",
  "tipo": "actividad",
  "sprint": 3,
  "descripcion": "Preprocesar y normalizar variables académicas para el modelo",
  "responsable": "Helber Perez",
  "paquete": "1.3.1",
  "te": 3.2,
  "critica": false,
  "dias": 3,
  "inicio": "2026-12-10",
  "fin": "2026-12-14",
  "preds": [
   "H2"
  ]
 },
 {
  "id": "A-3.1.1.3",
  "tipo": "actividad",
  "sprint": 3,
  "descripcion": "Seleccionar algoritmo ML (Random Forest / Gradient Boosting / Regresión logística)",
  "responsable": "Helber Perez",
  "paquete": "1.3.1",
  "te": 3.2,
  "critica": true,
  "dias": 3,
  "inicio": "2026-12-14",
  "fin": "2026-12-16",
  "preds": [
   "H2"
  ]
 },
 {
  "id": "A-3.1.1.4",
  "tipo": "actividad",
  "sprint": 3,
  "descripcion": "Entrenar modelo predictivo con Scikit-learn usando datos históricos",
  "responsable": "Helber Perez",
  "paquete": "1.3.1",
  "te": 5.2,
  "critica": true,
  "dias": 5,
  "inicio": "2026-12-16",
  "fin": "2026-12-22",
  "preds": [
   "A-3.1.1.1",
   "A-3.1.1.2"
  ]
 },
 {
  "id": "A-3.2.1.1",
  "tipo": "actividad",
  "sprint": 3,
  "descripcion": "Evaluar métricas del modelo (accuracy, precision, recall, F1-score)",
  "responsable": "Helber Perez",
  "paquete": "1.3.3",
  "te": 3.2,
  "critica": true,
  "dias": 3,
  "inicio": "2026-12-21",
  "fin": "2026-12-23",
  "preds": [
   "A-3.1.1.3"
  ]
 },
 {
  "id": "A-3.2.1.2",
  "tipo": "actividad",
  "sprint": 3,
  "descripcion": "Ajustar hiperparámetros hasta alcanzar el umbral mínimo de 75 % en la métrica acordada",
  "responsable": "Helber Perez",
  "paquete": "1.3.3",
  "te": 4,
  "critica": true,
  "dias": 4,
  "inicio": "2026-12-23",
  "fin": "2026-12-29",
  "preds": [
   "A-3.1.1.4"
  ]
 },
 {
  "id": "A-3.2.1.3",
  "tipo": "actividad",
  "sprint": 3,
  "descripcion": "Implementar lógica de clasificación: riesgo alto (rojo), medio (amarillo), bajo (verde)",
  "responsable": "Helber Perez",
  "paquete": "1.3.2",
  "te": 3,
  "critica": true,
  "dias": 3,
  "inicio": "2026-12-24",
  "fin": "2026-12-29",
  "preds": [
   "A-3.2.1.1"
  ]
 },
 {
  "id": "A-3.2.1.4",
  "tipo": "actividad",
  "sprint": 3,
  "descripcion": "Configurar script de actualización semanal automática del modelo",
  "responsable": "Helber Perez + Jadira Vasquez",
  "paquete": "1.3.2",
  "te": 3.2,
  "critica": false,
  "dias": 3,
  "inicio": "2026-12-28",
  "fin": "2026-12-30",
  "preds": [
   "A-3.2.1.1"
  ]
 },
 {
  "id": "H3",
  "tipo": "hito",
  "sprint": 3,
  "descripcion": "Hito 3: Sprint Review — Modelo ML validado con el criterio acordado",
  "responsable": "",
  "paquete": "",
  "te": 0,
  "critica": false,
  "dias": 0,
  "inicio": "2026-12-30",
  "fin": "2026-12-30",
  "preds": [
   "A-3.2.1.2",
   "A-3.2.1.3",
   "A-3.2.1.4"
  ]
 },
 {
  "id": "A-4.1.1.1",
  "tipo": "actividad",
  "sprint": 4,
  "descripcion": "Diseñar plantilla de correo de alerta para el docente tutor",
  "responsable": "Jadira Vasquez",
  "paquete": "1.4.1",
  "te": 2,
  "critica": false,
  "dias": 2,
  "inicio": "2027-01-04",
  "fin": "2027-01-05",
  "preds": [
   "H3"
  ]
 },
 {
  "id": "A-4.1.1.2",
  "tipo": "actividad",
  "sprint": 4,
  "descripcion": "Desarrollar módulo de envío automático de alertas por correo electrónico",
  "responsable": "Jadira Vasquez",
  "paquete": "1.4.1",
  "te": 4.2,
  "critica": false,
  "dias": 4,
  "inicio": "2027-01-06",
  "fin": "2027-01-11",
  "preds": [
   "A-4.1.1.1"
  ]
 },
 {
  "id": "A-4.1.1.3",
  "tipo": "actividad",
  "sprint": 4,
  "descripcion": "Desarrollar módulo web de alertas críticas en panel del docente",
  "responsable": "Jadira Vasquez",
  "paquete": "1.4.1",
  "te": 4.2,
  "critica": false,
  "dias": 4,
  "inicio": "2027-01-11",
  "fin": "2027-01-14",
  "preds": [
   "A-4.1.1.1"
  ]
 },
 {
  "id": "A-4.1.1.4",
  "tipo": "actividad",
  "sprint": 4,
  "descripcion": "Implementar módulo de registro de seguimiento de casos críticos",
  "responsable": "Jadira Vasquez",
  "paquete": "1.4.1",
  "te": 3,
  "critica": false,
  "dias": 3,
  "inicio": "2027-01-13",
  "fin": "2027-01-15",
  "preds": [
   "A-4.1.1.2"
  ]
 },
 {
  "id": "A-4.2.1.1",
  "tipo": "actividad",
  "sprint": 4,
  "descripcion": "Diseñar wireframes y prototipo de la interfaz Next.js",
  "responsable": "Carlos Curo",
  "paquete": "1.4.2.1",
  "te": 3.2,
  "critica": true,
  "dias": 3,
  "inicio": "2027-01-18",
  "fin": "2027-01-20",
  "preds": [
   "A-4.1.1.4"
  ]
 },
 {
  "id": "A-4.2.1.2",
  "tipo": "actividad",
  "sprint": 4,
  "descripcion": "Desarrollar dashboard interactivo con semáforo de riesgo por alumno, aula y grado",
  "responsable": "Carlos Curo",
  "paquete": "1.4.2.2",
  "te": 5.3,
  "critica": true,
  "dias": 5,
  "inicio": "2027-01-20",
  "fin": "2027-01-26",
  "preds": [
   "A-4.1.1.4"
  ]
 },
 {
  "id": "A-4.2.1.3",
  "tipo": "actividad",
  "sprint": 4,
  "descripcion": "Desarrollar ficha individual del estudiante con historial completo",
  "responsable": "Carlos Curo",
  "paquete": "1.4.2.2",
  "te": 3.2,
  "critica": true,
  "dias": 3,
  "inicio": "2027-01-25",
  "fin": "2027-01-27",
  "preds": [
   "A-4.2.1.1"
  ]
 },
 {
  "id": "A-4.2.1.4",
  "tipo": "actividad",
  "sprint": 4,
  "descripcion": "Implementar módulo de roles y control de acceso por perfil de usuario",
  "responsable": "Jhostin Galarza",
  "paquete": "1.4.3",
  "te": 3,
  "critica": true,
  "dias": 3,
  "inicio": "2027-01-27",
  "fin": "2027-01-29",
  "preds": [
   "A-4.2.1.2"
  ]
 },
 {
  "id": "A-4.2.1.5",
  "tipo": "actividad",
  "sprint": 4,
  "descripcion": "Desarrollar módulo de reportes exportables en PDF y Excel por unidad evaluativa",
  "responsable": "Carlos Curo",
  "paquete": "1.4.2.2",
  "te": 3.2,
  "critica": true,
  "dias": 3,
  "inicio": "2027-01-27",
  "fin": "2027-01-29",
  "preds": [
   "A-4.2.1.2"
  ]
 },
 {
  "id": "H4",
  "tipo": "hito",
  "sprint": 4,
  "descripcion": "Hito 4: Sprint Review — Sistema integrado con alertas y tablero operativos",
  "responsable": "",
  "paquete": "",
  "te": 0,
  "critica": false,
  "dias": 0,
  "inicio": "2027-01-29",
  "fin": "2027-01-29",
  "preds": [
   "A-4.1.1.3",
   "A-4.2.1.3",
   "A-4.2.1.4",
   "A-4.2.1.5"
  ]
 },
 {
  "id": "REC",
  "tipo": "receso",
  "sprint": 4,
  "descripcion": "Receso por vacaciones escolares (incluye la reserva de gestión del 22 al 26 de febrero)",
  "responsable": "",
  "paquete": "",
  "te": 0,
  "critica": false,
  "dias": 20,
  "inicio": "2027-02-01",
  "fin": "2027-02-26",
  "preds": [
   "H4"
  ]
 },
 {
  "id": "A-5.0.1.1",
  "tipo": "actividad",
  "sprint": 5,
  "descripcion": "Pruebas de integración entre todos los módulos del sistema: verificar ETL, ML, alertas y dashboard funcionan en conjunto",
  "responsable": "Equipo del proyecto",
  "paquete": "1.6.1",
  "te": 5.2,
  "critica": true,
  "dias": 5,
  "inicio": "2027-03-01",
  "fin": "2027-03-05",
  "preds": [
   "REC"
  ]
 },
 {
  "id": "A-5.0.1.2",
  "tipo": "actividad",
  "sprint": 5,
  "descripcion": "Pruebas de rendimiento del sistema: confirmar que el tablero carga en menos de 3 segundos y que la clasificación semanal se ejecuta sin intervención manual",
  "responsable": "Carlos Curo + Jadira Vasquez",
  "paquete": "1.6.1",
  "te": 4,
  "critica": true,
  "dias": 4,
  "inicio": "2027-03-03",
  "fin": "2027-03-08",
  "preds": [
   "REC"
  ]
 },
 {
  "id": "A-5.0.2.1",
  "tipo": "actividad",
  "sprint": 5,
  "descripcion": "Prueba piloto real con grupo de 3 docentes tutores usando datos académicos reales del colegio durante 2 semanas",
  "responsable": "Equipo del proyecto + docentes",
  "paquete": "1.6.2",
  "te": 7.2,
  "critica": true,
  "dias": 10,
  "inicio": "2027-03-08",
  "fin": "2027-03-19",
  "preds": [
   "A-5.0.1.1"
  ]
 },
 {
  "id": "A-5.0.2.2",
  "tipo": "actividad",
  "sprint": 5,
  "descripcion": "Recopilar feedback del piloto, documentar observaciones y aplicar ajustes al sistema basados en uso real",
  "responsable": "Equipo del proyecto + docentes",
  "paquete": "1.6.2",
  "te": 4.2,
  "critica": true,
  "dias": 4,
  "inicio": "2027-03-19",
  "fin": "2027-03-24",
  "preds": [
   "A-5.0.1.2"
  ]
 },
 {
  "id": "H5",
  "tipo": "hito",
  "sprint": 5,
  "descripcion": "Hito 5: Sprint Review — Sistema validado con pruebas y piloto real con docentes",
  "responsable": "",
  "paquete": "",
  "te": 0,
  "critica": false,
  "dias": 0,
  "inicio": "2027-03-24",
  "fin": "2027-03-24",
  "preds": [
   "A-5.0.2.1",
   "A-5.0.2.2"
  ]
 },
 {
  "id": "A-5.1.1.1",
  "tipo": "actividad",
  "sprint": 6,
  "descripcion": "Configurar el entorno de producción en la nube (alojamiento web, base de datos y tarea programada)",
  "responsable": "Jadira Vasquez",
  "paquete": "1.5.1",
  "te": 3,
  "critica": false,
  "dias": 3,
  "inicio": "2027-03-29",
  "fin": "2027-03-31",
  "preds": [
   "H5"
  ]
 },
 {
  "id": "A-5.1.1.2",
  "tipo": "actividad",
  "sprint": 6,
  "descripcion": "Desplegar sistema completo en entorno de producción definitivo",
  "responsable": "Jadira Vasquez",
  "paquete": "1.5.1",
  "te": 4.2,
  "critica": true,
  "dias": 4,
  "inicio": "2027-03-31",
  "fin": "2027-04-05",
  "preds": [
   "H5"
  ]
 },
 {
  "id": "A-5.1.1.3",
  "tipo": "actividad",
  "sprint": 6,
  "descripcion": "Ejecutar pruebas de aceptación UAT formales con todos los docentes tutores",
  "responsable": "Equipo del proyecto + docentes",
  "paquete": "1.4.2.3",
  "te": 5.2,
  "critica": true,
  "dias": 5,
  "inicio": "2027-04-05",
  "fin": "2027-04-09",
  "preds": [
   "A-5.1.1.1"
  ]
 },
 {
  "id": "A-5.1.1.4",
  "tipo": "actividad",
  "sprint": 6,
  "descripcion": "Corregir observaciones y bugs detectados en pruebas UAT formales",
  "responsable": "Carlos Curo + Jadira Vasquez",
  "paquete": "1.5.1",
  "te": 3.2,
  "critica": true,
  "dias": 3,
  "inicio": "2027-04-07",
  "fin": "2027-04-09",
  "preds": [
   "A-5.1.1.2"
  ]
 },
 {
  "id": "A-5.2.1.1",
  "tipo": "actividad",
  "sprint": 6,
  "descripcion": "Elaborar manual de usuario (docentes y coordinadores)",
  "responsable": "Carlos Curo",
  "paquete": "1.5.2",
  "te": 3,
  "critica": false,
  "dias": 3,
  "inicio": "2027-04-12",
  "fin": "2027-04-14",
  "preds": [
   "A-5.1.1.3",
   "A-5.1.1.4"
  ]
 },
 {
  "id": "A-5.2.1.2",
  "tipo": "actividad",
  "sprint": 6,
  "descripcion": "Elaborar manual técnico del sistema para el responsable de TI del colegio",
  "responsable": "Helber Perez",
  "paquete": "1.5.3",
  "te": 3,
  "critica": false,
  "dias": 3,
  "inicio": "2027-04-14",
  "fin": "2027-04-16",
  "preds": [
   "A-5.1.1.3",
   "A-5.1.1.4"
  ]
 },
 {
  "id": "A-5.2.1.3",
  "tipo": "actividad",
  "sprint": 6,
  "descripcion": "Ejecutar sesión formal de capacitación a todos los docentes y coordinadores (2 horas)",
  "responsable": "Jhostin Galarza + Coordinación académica",
  "paquete": "1.5.4",
  "te": 2,
  "critica": true,
  "dias": 2,
  "inicio": "2027-04-15",
  "fin": "2027-04-16",
  "preds": [
   "A-5.2.1.1"
  ]
 },
 {
  "id": "A-5.2.1.4",
  "tipo": "actividad",
  "sprint": 6,
  "descripcion": "Realizar retrospectiva final del proyecto SCRUM",
  "responsable": "Jhostin Galarza",
  "paquete": "1.5.5",
  "te": 1.2,
  "critica": true,
  "dias": 1,
  "inicio": "2027-04-19",
  "fin": "2027-04-19",
  "preds": [
   "A-5.2.1.2",
   "A-5.2.1.3"
  ]
 },
 {
  "id": "A-5.2.1.5",
  "tipo": "actividad",
  "sprint": 6,
  "descripcion": "Elaborar informe final del proyecto y presentación de cierre ante el docente del curso",
  "responsable": "Equipo del proyecto",
  "paquete": "1.5.5",
  "te": 4.2,
  "critica": true,
  "dias": 4,
  "inicio": "2027-04-20",
  "fin": "2027-04-23",
  "preds": [
   "A-5.2.1.4"
  ]
 },
 {
  "id": "H6",
  "tipo": "hito",
  "sprint": 6,
  "descripcion": "Hito 6: Sprint Review — Sistema en producción, capacitación realizada y proyecto cerrado",
  "responsable": "",
  "paquete": "",
  "te": 0,
  "critica": false,
  "dias": 0,
  "inicio": "2027-04-23",
  "fin": "2027-04-23",
  "preds": [
   "A-5.2.1.5"
  ]
 },
 {
  "id": "A-1.2.1.2",
  "tipo": "continua",
  "sprint": 2,
  "descripcion": "Daily Standup 15 min diarios — continuo todo el proyecto",
  "responsable": "Jhostin Galarza",
  "paquete": "1.1.2",
  "te": 1.2,
  "critica": false,
  "dias": 114,
  "inicio": "2026-11-09",
  "fin": "2027-04-23",
  "preds": [
   "H1"
  ]
 }
];

export const NIVELES = [
 "Desconocedor",
 "Reticente",
 "Neutral",
 "De apoyo",
 "Líder"
];

export const INTERESADOS = [
 {
  "id": "I-01",
  "nombre": "Promotora Directora",
  "cargo": "Promotora y directora general; patrocinadora del proyecto",
  "tipo": "Interno",
  "contacto": "Oficina de dirección; reunión presencial y WhatsApp",
  "rol": "Autoriza el proyecto, facilita datos y personal, aprueba las líneas base y el cierre",
  "expectativa": "Control ordenado y digital del progreso del alumno; constancia de los avisos a las familias; interés en registrar la asistencia con código QR",
  "poder": "Alto",
  "interes": "Alto",
  "influencia": "Alta",
  "actitud": "Partidaria",
  "direccion": "Ascendente",
  "p": true,
  "u": true,
  "l": true,
  "actual": "De apoyo",
  "deseado": "Líder",
  "evidencia": "Entrevista del 24/04/2026: disposición a recibir propuestas y a facilitar los datos que convenga.",
  "acciones": "Reunión de inicio y firma del acta; revisión al cierre de cada sprint; definir con ella al Product Owner y el tratamiento de datos.",
  "responsable": "Jhostin Galarza",
  "clave": true,
  "cuadrante": "Gestionar de cerca",
  "prominencia": "Definitivo",
  "brecha": 1
 },
 {
  "id": "I-02",
  "nombre": "Subdirector",
  "cargo": "Subdirector de la institución",
  "tipo": "Interno",
  "contacto": "Oficina de dirección",
  "rol": "Supervisa la gestión académica y respalda la adopción del sistema",
  "expectativa": "Por confirmar: seguimiento del desempeño por nivel educativo",
  "poder": "Alto",
  "interes": "Alto",
  "influencia": "Alta",
  "actitud": "Sin evidencia",
  "direccion": "Ascendente",
  "p": true,
  "u": false,
  "l": true,
  "actual": "Desconocedor",
  "deseado": "De apoyo",
  "evidencia": "Figura en el organigrama; no ha sido contactado.",
  "acciones": "Presentarle el proyecto en la reunión de inicio.",
  "responsable": "Jhostin Galarza",
  "clave": true,
  "cuadrante": "Gestionar de cerca",
  "prominencia": "Dominante",
  "brecha": 3
 },
 {
  "id": "I-03",
  "nombre": "Coordinación académica",
  "cargo": "Coordinadores de Ciencias y de Letras",
  "tipo": "Interno",
  "contacto": "Sala de docentes; reunión presencial",
  "rol": "Candidata a Product Owner: prioriza requisitos, acepta entregables y usa los reportes",
  "expectativa": "Información consolidada por aula al cierre de cada unidad",
  "poder": "Alto",
  "interes": "Alto",
  "influencia": "Alta",
  "actitud": "Sin evidencia",
  "direccion": "Lateral",
  "p": true,
  "u": false,
  "l": true,
  "actual": "Desconocedor",
  "deseado": "Líder",
  "evidencia": "Figura en el organigrama; no ha sido contactada.",
  "acciones": "Pedir a la Dirección su designación como Product Owner; taller de priorización en el Sprint 1.",
  "responsable": "Jhostin Galarza",
  "clave": true,
  "cuadrante": "Gestionar de cerca",
  "prominencia": "Dominante",
  "brecha": 4
 },
 {
  "id": "I-04",
  "nombre": "Jefa de Normas",
  "cargo": "Responsable de convivencia y disciplina",
  "tipo": "Interno",
  "contacto": "Oficina de normas; presencial",
  "rol": "Dueña del proceso de incidencias; valida cómo se registran",
  "expectativa": "Registrar incidencias con rapidez y conservar el historial",
  "poder": "Bajo",
  "interes": "Alto",
  "influencia": "Media",
  "actitud": "Sin evidencia",
  "direccion": "Lateral",
  "p": false,
  "u": false,
  "l": true,
  "actual": "Desconocedor",
  "deseado": "De apoyo",
  "evidencia": "Figura en el organigrama; el formato de incidencias es impreso.",
  "acciones": "Entrevista sobre el registro de incidencias en el Sprint 1.",
  "responsable": "Jadira Vasquez",
  "cuadrante": "Mantener informados",
  "prominencia": "Discrecional",
  "brecha": 3
 },
 {
  "id": "I-05",
  "nombre": "Docentes tutores y auxiliares",
  "cargo": "Docentes de aula, tutores y auxiliares (16 personas)",
  "tipo": "Interno",
  "contacto": "Aulas; reunión presencial, WhatsApp y correo personal",
  "rol": "Usuarios principales: registran datos, reciben alertas y actúan con el estudiante",
  "expectativa": "Detectar a tiempo sin aumentar su carga de trabajo; interfaz simple",
  "poder": "Bajo",
  "interes": "Alto",
  "influencia": "Alta",
  "actitud": "Partidaria en los encuestados",
  "direccion": "Hacia afuera",
  "p": false,
  "u": true,
  "l": true,
  "actual": "Neutral",
  "deseado": "De apoyo",
  "evidencia": "Encuesta del 15/05/2026: 5 de 6 usarían la plataforma. Los otros 10 no conocen el proyecto y ninguno ha visto el sistema.",
  "acciones": "Validar variables (semana 3), revisar el tablero (semana 15), piloto (semanas 18 y 19) y capacitación (semana 23).",
  "responsable": "Helber Perez y Carlos Curo",
  "clave": true,
  "cuadrante": "Mantener informados",
  "prominencia": "Dependiente",
  "brecha": 1
 },
 {
  "id": "I-06",
  "nombre": "Responsable de psicología",
  "cargo": "Área de psicología del colegio",
  "tipo": "Interno",
  "contacto": "Área de psicología; presencial",
  "rol": "Atiende los casos que se derivan por riesgo alto",
  "expectativa": "Recibir los casos con información previa del estudiante",
  "poder": "Bajo",
  "interes": "Alto",
  "influencia": "Media",
  "actitud": "Sin evidencia",
  "direccion": "Hacia afuera",
  "p": false,
  "u": false,
  "l": true,
  "actual": "Desconocedor",
  "deseado": "De apoyo",
  "evidencia": "Mencionada en la entrevista; no ha sido contactada.",
  "acciones": "Reunión para definir qué información necesita de cada alerta (Sprint 1).",
  "responsable": "Helber Perez",
  "cuadrante": "Mantener informados",
  "prominencia": "Discrecional",
  "brecha": 3
 },
 {
  "id": "I-07",
  "nombre": "Gestora de la plataforma Cubicol",
  "cargo": "Personal que administra Cubicol, descarga las notas y emite los reportes",
  "tipo": "Interno",
  "contacto": "Oficina administrativa; presencial",
  "rol": "Entrega las exportaciones de datos y conoce los formatos de evaluación",
  "expectativa": "Por confirmar: que el proyecto no le sume trabajo manual",
  "poder": "Alto",
  "interes": "Bajo",
  "influencia": "Alta",
  "actitud": "Sin evidencia",
  "direccion": "Lateral",
  "p": true,
  "u": false,
  "l": true,
  "actual": "Neutral",
  "deseado": "De apoyo",
  "evidencia": "Identificada en la entrevista; la segunda entrevista (guía lista) no se ha realizado.",
  "acciones": "Realizar la segunda entrevista; acordar formato y frecuencia de las exportaciones.",
  "responsable": "Jadira Vasquez",
  "clave": true,
  "cuadrante": "Mantener satisfechos",
  "prominencia": "Dominante",
  "brecha": 1
 },
 {
  "id": "I-08",
  "nombre": "Encargado de soporte de TI",
  "cargo": "Encargado del laboratorio de cómputo y del soporte de equipos y red",
  "tipo": "Interno",
  "contacto": "Laboratorio de cómputo; presencial",
  "rol": "Soporte de red y equipos; futuro responsable técnico del sistema",
  "expectativa": "Una solución que pueda mantener sin depender del equipo",
  "poder": "Alto",
  "interes": "Alto",
  "influencia": "Media",
  "actitud": "Sin evidencia",
  "direccion": "Lateral",
  "p": true,
  "u": false,
  "l": true,
  "actual": "Neutral",
  "deseado": "De apoyo",
  "evidencia": "Identificado en la entrevista; no ha sido entrevistado.",
  "acciones": "Segunda entrevista; revisión de la red del colegio; transferencia de conocimiento en el Sprint 6.",
  "responsable": "Jadira Vasquez y Helber Perez",
  "clave": true,
  "cuadrante": "Gestionar de cerca",
  "prominencia": "Dominante",
  "brecha": 1
 },
 {
  "id": "I-09",
  "nombre": "Personal administrativo",
  "cargo": "Secretaría y administración",
  "tipo": "Interno",
  "contacto": "Oficina administrativa",
  "rol": "Custodia datos de matrícula y de contacto de los apoderados",
  "expectativa": "Que sus procesos no cambien",
  "poder": "Bajo",
  "interes": "Bajo",
  "influencia": "Baja",
  "actitud": "Sin evidencia",
  "direccion": "Lateral",
  "p": false,
  "u": false,
  "l": true,
  "actual": "Desconocedor",
  "deseado": "Neutral",
  "evidencia": "Figura en el organigrama.",
  "acciones": "Informar al inicio del proyecto y antes del piloto.",
  "responsable": "Jhostin Galarza",
  "cuadrante": "Monitorear",
  "prominencia": "Discrecional",
  "brecha": 2
 },
 {
  "id": "I-10",
  "nombre": "Estudiantes",
  "cargo": "Unos 200 estudiantes de inicial, primaria y secundaria",
  "tipo": "Interno",
  "contacto": "A través de sus tutores",
  "rol": "Beneficiarios; titulares de los datos (menores de edad)",
  "expectativa": "Recibir apoyo a tiempo y que sus datos se traten con reserva",
  "poder": "Bajo",
  "interes": "Alto",
  "influencia": "Baja",
  "actitud": "Sin evidencia",
  "direccion": "Hacia afuera",
  "p": false,
  "u": true,
  "l": true,
  "actual": "Desconocedor",
  "deseado": "Neutral",
  "evidencia": "No participan directamente en el proyecto.",
  "acciones": "Los tutores explican el propósito del seguimiento; el nivel de riesgo de un estudiante nunca se publica.",
  "responsable": "Docentes tutores",
  "cuadrante": "Mantener informados",
  "prominencia": "Dependiente",
  "brecha": 2
 },
 {
  "id": "I-11",
  "nombre": "Padres de familia y apoderados",
  "cargo": "Apoderados de los estudiantes",
  "tipo": "Externo",
  "contacto": "WhatsApp, agenda escolar y comunicados impresos; pocos ingresan a Cubicol",
  "rol": "Reciben los comunicados y autorizan el tratamiento de los datos de sus hijos",
  "expectativa": "Información clara y oportuna sobre el desempeño de sus hijos",
  "poder": "Bajo",
  "interes": "Alto",
  "influencia": "Media",
  "actitud": "Sin evidencia",
  "direccion": "Hacia afuera",
  "p": false,
  "u": true,
  "l": true,
  "actual": "Desconocedor",
  "deseado": "De apoyo",
  "evidencia": "La directora estima que solo alrededor del 40 % ingresa a Cubicol; no conocen el proyecto.",
  "acciones": "Comunicado de la Dirección sobre el proyecto y el uso de los datos antes de cargar información real; mensajes en lenguaje simple.",
  "responsable": "Dirección, con apoyo del equipo",
  "cuadrante": "Mantener informados",
  "prominencia": "Dependiente",
  "brecha": 3
 },
 {
  "id": "I-12",
  "nombre": "Equipo del proyecto",
  "cargo": "Cuatro estudiantes de Ingeniería de Sistemas de la UNTELS; uno de ellos es además docente del colegio",
  "tipo": "Externo",
  "contacto": "Reunión diaria, WhatsApp y repositorio en GitHub",
  "rol": "Planifica, construye y entrega el sistema",
  "expectativa": "Cumplir el curso y dejar un sistema que el colegio realmente use",
  "poder": "Alto",
  "interes": "Alto",
  "influencia": "Alta",
  "actitud": "Partidaria",
  "direccion": "Descendente",
  "p": true,
  "u": true,
  "l": true,
  "actual": "Líder",
  "deseado": "Líder",
  "evidencia": "Responsable de todos los entregables.",
  "acciones": "Reunión diaria; revisión y retrospectiva al cierre de cada sprint.",
  "responsable": "Jhostin Galarza",
  "clave": true,
  "cuadrante": "Gestionar de cerca",
  "prominencia": "Definitivo",
  "brecha": 0
 },
 {
  "id": "I-13",
  "nombre": "Docente asesor del curso",
  "cargo": "Docente del curso Gestión de Proyecto de TI (UNTELS)",
  "tipo": "Externo",
  "contacto": "Clase semanal y blog del proyecto",
  "rol": "Orienta y evalúa los entregables de gestión",
  "expectativa": "Aplicación correcta del PMBOK 8, trabajo real con la institución y blog ordenado",
  "poder": "Alto",
  "interes": "Alto",
  "influencia": "Alta",
  "actitud": "Partidaria",
  "direccion": "Ascendente",
  "p": true,
  "u": true,
  "l": true,
  "actual": "De apoyo",
  "deseado": "De apoyo",
  "evidencia": "Brinda observaciones en cada presentación.",
  "acciones": "Presentar avances en clase, mantener el blog al día e incorporar sus observaciones.",
  "responsable": "Equipo del proyecto",
  "clave": true,
  "cuadrante": "Gestionar de cerca",
  "prominencia": "Definitivo",
  "brecha": 0
 },
 {
  "id": "I-14",
  "nombre": "Cubicol (proveedor)",
  "cargo": "Empresa proveedora de la plataforma educativa del colegio",
  "tipo": "Externo",
  "contacto": "Soporte del proveedor, a través de la gestora de la plataforma",
  "rol": "Dueña de la plataforma donde están las notas; define qué se puede exportar",
  "expectativa": "Ninguna identificada",
  "poder": "Alto",
  "interes": "Bajo",
  "influencia": "Media",
  "actitud": "Sin evidencia",
  "direccion": "Hacia afuera",
  "p": true,
  "u": false,
  "l": false,
  "actual": "Desconocedor",
  "deseado": "Neutral",
  "evidencia": "No ha sido contactado; no se ha comprobado que ofrezca una API.",
  "acciones": "Consultar, a través de la gestora, las opciones de exportación de datos.",
  "responsable": "Jadira Vasquez",
  "cuadrante": "Mantener satisfechos",
  "prominencia": "Durmiente",
  "brecha": 2
 },
 {
  "id": "I-15",
  "nombre": "Proveedores de nube e internet",
  "cargo": "Vercel (alojamiento web), Supabase (base de datos), GitHub (repositorio y tareas programadas) y WIN (internet del colegio)",
  "tipo": "Externo",
  "contacto": "Sitio web y condiciones de servicio de cada proveedor",
  "rol": "Prestan la infraestructura sobre la que funciona el sistema",
  "expectativa": "Uso dentro de sus condiciones de servicio",
  "poder": "Bajo",
  "interes": "Bajo",
  "influencia": "Baja",
  "actitud": "Neutral",
  "direccion": "Hacia afuera",
  "p": true,
  "u": false,
  "l": false,
  "actual": "Neutral",
  "deseado": "Neutral",
  "evidencia": "Servicios contratados con términos estándar.",
  "acciones": "Revisar límites y condiciones de servicio en cada sprint.",
  "responsable": "Jadira Vasquez",
  "cuadrante": "Monitorear",
  "prominencia": "Durmiente",
  "brecha": 0
 },
 {
  "id": "I-16",
  "nombre": "UGEL 01 y MINEDU",
  "cargo": "Unidad de Gestión Educativa Local N.° 01 y Ministerio de Educación",
  "tipo": "Externo",
  "contacto": "Normativa publicada; a través de la Dirección",
  "rol": "Ente rector: norma la evaluación y los registros académicos",
  "expectativa": "Cumplimiento de la normativa educativa",
  "poder": "Alto",
  "interes": "Bajo",
  "influencia": "Media",
  "actitud": "Sin evidencia",
  "direccion": "Hacia afuera",
  "p": true,
  "u": false,
  "l": true,
  "actual": "Desconocedor",
  "deseado": "Neutral",
  "evidencia": "La UGEL N.° 01 encabeza el organigrama del colegio.",
  "acciones": "Verificar que el sistema no altere los registros oficiales de evaluación.",
  "responsable": "Jhostin Galarza",
  "cuadrante": "Mantener satisfechos",
  "prominencia": "Dominante",
  "brecha": 2
 },
 {
  "id": "I-17",
  "nombre": "Autoridad de Protección de Datos Personales",
  "cargo": "Autoridad Nacional de Protección de Datos Personales (Ministerio de Justicia y Derechos Humanos)",
  "tipo": "Externo",
  "contacto": "Normativa publicada",
  "rol": "Supervisa el cumplimiento de la Ley N.° 29733",
  "expectativa": "Tratamiento lícito, informado y seguro de los datos de menores",
  "poder": "Alto",
  "interes": "Bajo",
  "influencia": "Media",
  "actitud": "Sin evidencia",
  "direccion": "Hacia afuera",
  "p": true,
  "u": false,
  "l": true,
  "actual": "Desconocedor",
  "deseado": "Neutral",
  "evidencia": "No interviene salvo denuncia o fiscalización.",
  "acciones": "Aplicar la lista de verificación de datos personales antes de cargar datos reales.",
  "responsable": "Jadira Vasquez y Helber Perez",
  "cuadrante": "Mantener satisfechos",
  "prominencia": "Dominante",
  "brecha": 2
 }
];

export const REQUISITOS = [
 {
  "id": "REQ-01",
  "tipo": "Funcional",
  "titulo": "Centralización de los datos académicos",
  "prioridad": "Alta",
  "objetivo": "OE1",
  "entregable": "E-01",
  "paquete": "1.2.1",
  "cp": "CP-01 a CP-04",
  "fuente": "Promotora Directora y encargados de TI",
  "descripcion": "Integrar en una sola base de datos las notas, la asistencia, la participación y las incidencias de los 200 estudiantes, que hoy están repartidas entre Cubicol, registros físicos y WhatsApp.",
  "criterio": "La base reúne el 100 % de los registros entregados, sin duplicados ni registros huérfanos. Se comprueba comparando el origen con la base en tres fechas distintas.",
  "v3": "",
  "caso": "CU-01",
  "justificacion": "Actualmente la información académica se encuentra fragmentada entre Cubicol, cuadernos físicos de asistencia y notificaciones de incidencias por WhatsApp, sin trazabilidad centralizada (Entrevista de campo, abril de 2026). El 66.7 % de los docentes señala que necesita datos integrados multivariable para detectar oportunamente el riesgo académico (Encuesta a docentes P6). Este requisito es la base de todo el sistema de recolección de datos para el modelo predictivo.",
  "unidad": "Dirección Académica",
  "satisfaccion": 5,
  "insatisfaccion": 4,
  "dependencias": "REQ-02, REQ-07",
  "conflictos": "Ninguno",
  "soporte": "Entrevista de campo, abril de 2026; Encuesta a docentes P6"
 },
 {
  "id": "REQ-02",
  "tipo": "Funcional",
  "titulo": "Limpieza y validación automática de los datos",
  "prioridad": "Alta",
  "objetivo": "OE1",
  "entregable": "E-01",
  "paquete": "1.2.2",
  "cp": "CP-05 a CP-08",
  "fuente": "Encargado de TI y gestora de Cubicol",
  "descripcion": "Ejecutar cada noche una tarea programada que limpia, valida y corrige inconsistencias en los datos integrados.",
  "criterio": "La tarea corre fuera del horario escolar y detecta, como mínimo, duplicados, vacíos críticos y fechas inconsistentes. Se revisan los registros de ejecución de 15 días seguidos sin fallas críticas.",
  "v3": "La tarea se ejecuta como servicio programado en la nube, no en un servidor del colegio (SC-03).",
  "caso": "CU-02",
  "justificacion": "Los datos provenientes de fuentes manuales (cuadernos físicos, WhatsApp) presentan inconsistencias y errores de registro propios de un proceso 100 % manual (Entrevista de campo, abril de 2026). Sin un proceso de limpieza automatizado, el modelo ML entrenaría con datos de baja calidad, afectando directamente la precisión de la clasificación de riesgo académico.",
  "unidad": "Área de Tecnología",
  "satisfaccion": 5,
  "insatisfaccion": 4,
  "dependencias": "REQ-01",
  "conflictos": "Ninguno",
  "soporte": "Entrevista de campo, abril de 2026; Manual técnico Cubicol"
 },
 {
  "id": "REQ-03",
  "tipo": "Funcional",
  "titulo": "Modelo de clasificación del riesgo académico",
  "prioridad": "Alta",
  "objetivo": "OE2",
  "entregable": "E-02",
  "paquete": "1.3.1 y 1.3.3",
  "cp": "CP-09 a CP-12",
  "fuente": "Equipo del proyecto y Promotora Directora",
  "descripcion": "Entrenar un modelo de Machine Learning con datos históricos para clasificar a cada estudiante en riesgo alto (rojo), medio (amarillo) o bajo (verde).",
  "criterio": "El modelo alcanza una precisión mínima de 75 % al clasificar estudiantes en riesgo, validada con datos reales del colegio. Se entrega un informe de métricas (precisión, sensibilidad y F1).",
  "v3": "Tres niveles confirmados como estándar (SC-04). La forma de validar está en evaluación (SC-08).",
  "caso": "CU-03",
  "justificacion": "El 100 % de los docentes encuestados reconoce que los problemas académicos se detectan tardíamente (Encuesta a docentes P7, mayo de 2026). El 83.3 % acepta la solución ML como herramienta de mejora (Encuesta P8). La literatura científica respalda la efectividad del Machine Learning en la predicción del bajo rendimiento académico (Márquez-Vera et al., 2013; Romero & Ventura, 2010).",
  "unidad": "Equipo de Desarrollo",
  "satisfaccion": 5,
  "insatisfaccion": 5,
  "dependencias": "REQ-01, REQ-02",
  "conflictos": "Ninguno",
  "soporte": "Encuesta a docentes, mayo de 2026; Márquez-Vera et al. (2013) IEEE RITA; Romero & Ventura (2010) IEEE TSMCC"
 },
 {
  "id": "REQ-04",
  "tipo": "Funcional",
  "titulo": "Actualización semanal automática del modelo",
  "prioridad": "Alta",
  "objetivo": "OE2",
  "entregable": "E-02",
  "paquete": "1.3.2",
  "cp": "CP-13 a CP-16",
  "fuente": "Equipo del proyecto y encargado de TI",
  "descripcion": "Actualizar el modelo cada semana con los datos nuevos, de modo que el nivel de riesgo refleje el desempeño más reciente de cada estudiante.",
  "criterio": "La actualización corre cada 7 días sin intervención manual y los resultados aparecen en el tablero dentro de las 24 horas. Se revisa el historial de 4 semanas seguidas.",
  "v3": "Se ejecuta con una tarea programada en la nube (SC-03).",
  "caso": "CU-04",
  "justificacion": "El seguimiento académico actual se realiza de forma diaria por el 83.3 % de los docentes pero de manera manual e individualizada (Encuesta a docentes P2). Un modelo estático perdería relevancia rápidamente frente a cambios en el comportamiento académico del alumno. La actualización semanal automática asegura que las alertas reflejen la situación real y vigente del estudiante.",
  "unidad": "Equipo de Desarrollo",
  "satisfaccion": 5,
  "insatisfaccion": 4,
  "dependencias": "REQ-03",
  "conflictos": "Ninguno",
  "soporte": "Encuesta a docentes, mayo de 2026 (P2)"
 },
 {
  "id": "REQ-05",
  "tipo": "Funcional",
  "titulo": "Alertas automáticas por correo al docente tutor",
  "prioridad": "Alta",
  "objetivo": "OE4",
  "entregable": "E-03",
  "paquete": "1.4.1",
  "cp": "CP-17 a CP-20",
  "fuente": "Promotora Directora y docentes",
  "descripcion": "Enviar un correo al docente tutor cuando un estudiante pasa a riesgo alto, con el nombre del estudiante, el nivel de riesgo y las variables que lo explican.",
  "criterio": "La alerta sale en un máximo de 24 horas desde la clasificación; queda un historial por estudiante (fecha, receptor y nivel); el 100 % de las alertas de riesgo alto se notifica en las pruebas de integración.",
  "v3": "El colegio no tiene correo institucional: el envío a correos personales autorizados está en evaluación (SC-09).",
  "caso": "CU-05",
  "justificacion": "El 100 % de los docentes considera las alertas tempranas como útiles o muy útiles para el seguimiento académico (Encuesta a docentes P9). Actualmente las incidencias se notifican únicamente por WhatsApp, sin trazabilidad, historial ni priorización por nivel de riesgo (Entrevista de campo, abril de 2026). Este requisito constituye el núcleo del valor diferencial del sistema frente al proceso manual actual.",
  "unidad": "Dirección Académica",
  "satisfaccion": 5,
  "insatisfaccion": 5,
  "dependencias": "REQ-03, REQ-07",
  "conflictos": "Ninguno",
  "soporte": "Encuesta a docentes, mayo de 2026 (P9); Entrevista de campo, abril de 2026"
 },
 {
  "id": "REQ-06",
  "tipo": "Funcional",
  "titulo": "Panel web de alertas para el docente",
  "prioridad": "Alta",
  "objetivo": "OE4",
  "entregable": "E-03",
  "paquete": "1.4.1",
  "cp": "CP-21 a CP-24",
  "fuente": "Docentes, auxiliares y Promotora Directora",
  "descripcion": "Mostrar en el panel del docente un resumen de los estudiantes en riesgo alto y medio, con acceso directo a la ficha de cada uno.",
  "criterio": "El resumen se actualiza cada vez que el docente ingresa y se llega a la ficha en dos clics como máximo. Se prueba con al menos 3 docentes.",
  "v3": "",
  "caso": "CU-06",
  "justificacion": "El 83.3 % de los docentes estaría dispuesto a utilizar una plataforma tecnológica de monitoreo del rendimiento académico (Encuesta a docentes P10). El módulo de alertas críticas en el panel docente complementa la notificación por correo, asegurando que la información esté centralizada y visible incluso si el correo no fue revisado oportunamente.",
  "unidad": "Dirección Académica",
  "satisfaccion": 4,
  "insatisfaccion": 4,
  "dependencias": "REQ-05, REQ-08",
  "conflictos": "Ninguno",
  "soporte": "Encuesta a docentes, mayo de 2026 (P10); Prototipo mockup SIA-T"
 },
 {
  "id": "REQ-07",
  "tipo": "Funcional",
  "titulo": "Registro del seguimiento de cada caso",
  "prioridad": "Media",
  "objetivo": "OE4",
  "entregable": "E-03",
  "paquete": "1.4.1",
  "cp": "CP-25 a CP-28",
  "fuente": "Docentes y responsable de psicología",
  "descripcion": "Registrar las acciones pedagógicas tomadas con cada estudiante en riesgo, de modo que quede un historial en su ficha.",
  "criterio": "Cada registro tiene fecha, responsable, acción y resultado, y se consulta desde la ficha. En el piloto, el 100 % de las alertas de riesgo alto tiene al menos un registro de seguimiento.",
  "v3": "",
  "caso": "CU-07",
  "justificacion": "Los docentes señalan que requieren herramientas que faciliten el seguimiento de estudiantes sin incrementar su carga de trabajo diaria. Sin un registro de seguimiento, las intervenciones pedagógicas quedan dispersas y no es posible evaluar su efectividad a lo largo del año escolar. Este requisito da continuidad y trazabilidad a las alertas generadas por el sistema.",
  "unidad": "Dirección Académica",
  "satisfaccion": 4,
  "insatisfaccion": 3,
  "dependencias": "REQ-05",
  "conflictos": "Ninguno",
  "soporte": "Entrevista de campo, abril de 2026; Mapa de empatía del Docente"
 },
 {
  "id": "REQ-08",
  "tipo": "Funcional",
  "titulo": "Tablero de indicadores de riesgo",
  "prioridad": "Alta",
  "objetivo": "OG",
  "entregable": "E-04",
  "paquete": "1.4.2.2",
  "cp": "CP-29 a CP-32",
  "fuente": "Promotora Directora y coordinación",
  "descripcion": "Mostrar un tablero con indicadores de riesgo por estudiante, aula y grado, con filtros por nivel educativo y por fechas, accesible desde el navegador.",
  "criterio": "El tablero carga en menos de 3 segundos, los filtros funcionan para los 200 estudiantes de los tres niveles educativos y los gráficos muestran los datos de la última actualización.",
  "v3": "",
  "caso": "CU-08",
  "justificacion": "La directora señaló como necesidad prioritaria la visualización centralizada del progreso del alumno durante todo el año escolar (Entrevista de campo, abril de 2026). El 66.7 % de los docentes necesita datos integrados multivariable para la toma de decisiones (Encuesta P6). El mockup SIA-T fue diseñado con base en esta necesidad validada durante el Design Thinking.",
  "unidad": "Dirección Académica",
  "satisfaccion": 4,
  "insatisfaccion": 4,
  "dependencias": "REQ-01, REQ-02, REQ-03",
  "conflictos": "Ninguno",
  "soporte": "Entrevista de campo, abril de 2026; Prototipo mockup SIA-T; Customer Journey Map Docente"
 },
 {
  "id": "REQ-09",
  "tipo": "Funcional",
  "titulo": "Reportes exportables en PDF y Excel",
  "prioridad": "Media",
  "objetivo": "OG",
  "entregable": "E-04",
  "paquete": "1.4.2.2",
  "cp": "CP-33 a CP-36",
  "fuente": "Jefa de Normas y coordinación",
  "descripcion": "Generar al cierre de cada unidad reportes para coordinación y dirección, con estadísticas por aula, grado y nivel de riesgo.",
  "criterio": "El reporte se genera sin intervención manual, se exporta en menos de 10 segundos e incluye el porcentaje de estudiantes en riesgo por aula y grado y la comparación con el periodo anterior.",
  "v3": "",
  "caso": "CU-09",
  "justificacion": "Los coordinadores académicos requieren presentar información consolidada a la dirección con datos reales y verificables al cierre de cada periodo evaluativo. Actualmente este proceso se realiza de forma manual a partir de fuentes dispersas (Cubicol y registros físicos), lo que demanda tiempo y es propenso a errores.",
  "unidad": "Gestión Académica",
  "satisfaccion": 4,
  "insatisfaccion": 4,
  "dependencias": "REQ-01, REQ-03, REQ-08",
  "conflictos": "Ninguno",
  "soporte": "Entrevista de campo, abril de 2026; Business Model Canvas del proyecto"
 },
 {
  "id": "REQ-10",
  "tipo": "Funcional",
  "titulo": "Ficha individual del estudiante",
  "prioridad": "Alta",
  "objetivo": "OE1",
  "entregable": "E-04",
  "paquete": "1.4.2.2",
  "cp": "CP-37 a CP-40",
  "fuente": "Docentes y coordinación",
  "descripcion": "Mostrar en una ficha el historial completo de cada estudiante: notas, asistencia, participación e incidencias.",
  "criterio": "La ficha reúne el 100 % de los registros disponibles y carga en 3 segundos o menos. Se compara con los registros de origen en una muestra de 10 estudiantes.",
  "v3": "",
  "caso": "CU-10",
  "justificacion": "La dispersión de la información académica dificulta el monitoreo personalizado de cada alumno, provocando retrasos en las decisiones pedagógicas (Análisis del Problema). El mapa de empatía del docente identificó que gran parte de la información necesaria para el seguimiento requiere revisión manual en distintas fuentes, lo que dificulta la intervención temprana.",
  "unidad": "Dirección Académica",
  "satisfaccion": 4,
  "insatisfaccion": 3,
  "dependencias": "REQ-01, REQ-02",
  "conflictos": "Ninguno",
  "soporte": "Mapa de empatía del Docente; Árbol de Problemas"
 },
 {
  "id": "REQ-11",
  "tipo": "Funcional",
  "titulo": "Roles y accesos diferenciados",
  "prioridad": "Alta",
  "objetivo": "OE1 a OE4",
  "entregable": "E-05",
  "paquete": "1.4.3",
  "cp": "CP-41 a CP-44",
  "fuente": "Encargado de TI y Promotora Directora",
  "descripcion": "Gestionar cuatro roles (docente, coordinación, psicología y dirección) de modo que cada usuario vea solo la información que corresponde a su función.",
  "criterio": "Ningún usuario puede ver información fuera de su rol. Se verifica con pruebas de acceso para los cuatro roles.",
  "v3": "Cuatro roles confirmados como estándar, más un administrador técnico (SC-04).",
  "caso": "CU-11",
  "justificacion": "El sistema manejará datos sensibles de 200 menores de edad (notas, asistencia, incidencias conductuales), lo cual exige controles de acceso diferenciados conforme a la estructura organizacional de la institución (Directora, Subdirector, Coordinadores, Docentes, Psicólogo Escolar). La ausencia de un control de roles adecuado podría comprometer la privacidad de los estudiantes.",
  "unidad": "Área de Tecnología",
  "satisfaccion": 5,
  "insatisfaccion": 5,
  "dependencias": "REQ-01, REQ-08",
  "conflictos": "Ninguno",
  "soporte": "Organigrama institucional; Registro de Interesados"
 },
 {
  "id": "REQ-12",
  "tipo": "Funcional",
  "titulo": "Comunicado al apoderado del estudiante en riesgo alto",
  "prioridad": "Media",
  "objetivo": "OG",
  "entregable": "E-03",
  "paquete": "1.4.1",
  "cp": "CP-45 a CP-48",
  "fuente": "Promotora Directora y padres de familia",
  "descripcion": "Generar un comunicado para el apoderado cuando su hijo pasa a riesgo alto, con las áreas de mayor dificultad y recomendaciones de apoyo en casa.",
  "criterio": "El comunicado sale en 24 horas como máximo, usa lenguaje sin tecnicismos (validado con al menos 2 padres en el piloto) y se verifica su entrega.",
  "v3": "La plataforma virtual es de un tercero y pocos padres la usan: el sistema genera el comunicado y el colegio lo entrega por sus canales. Por confirmar con la Dirección.",
  "caso": "CU-12",
  "justificacion": "Solo alrededor del 40 % de los padres de familia ingresa a Cubicol y las notificaciones por WhatsApp no garantizan una respuesta inmediata (Entrevista de campo, abril de 2026). El mapa de empatía de padres identificó que su principal preocupación es conocer oportunamente el desempeño académico de sus hijos para poder actuar antes de que los problemas se agraven.",
  "unidad": "Dirección Académica",
  "satisfaccion": 4,
  "insatisfaccion": 3,
  "dependencias": "REQ-02, REQ-05",
  "conflictos": "Ninguno",
  "soporte": "Entrevista de campo, abril de 2026; Mapa de empatía de Padres de Familia"
 },
 {
  "id": "RNF-01",
  "tipo": "No funcional",
  "titulo": "Facilidad de uso",
  "prioridad": "Alta",
  "objetivo": "OG",
  "entregable": "E-04 y E-08",
  "paquete": "1.4.2.3 y 1.5.4",
  "cp": "CP-49 a CP-52",
  "fuente": "Docentes, auxiliares y Promotora Directora",
  "descripcion": "La interfaz debe poder usarla un docente sin conocimientos técnicos después de una capacitación de menos de dos horas.",
  "criterio": "Los docentes capacitados navegan el tablero e interpretan las alertas tras dos horas como máximo. Se mide con una encuesta de uso a por lo menos 5 docentes.",
  "v3": "",
  "caso": "CU-13",
  "justificacion": "El usuario primario identificado en el Design Thinking es el Docente Tutor, quien no necesariamente cuenta con formación técnica en tecnología. El mapa de empatía del docente evidenció que los usuarios esperan herramientas que faciliten el monitoreo sin incrementar su carga de trabajo diaria, lo que exige una interfaz simple y de aprendizaje rápido.",
  "unidad": "Dirección Académica",
  "satisfaccion": 5,
  "insatisfaccion": 4,
  "dependencias": "REQ-06, REQ-08",
  "conflictos": "Ninguno",
  "soporte": "Mapa de empatía del Docente; Buyer Persona Principal Docente Coordinador Académico"
 },
 {
  "id": "RNF-02",
  "tipo": "No funcional",
  "titulo": "Rendimiento del tablero",
  "prioridad": "Alta",
  "objetivo": "OG",
  "entregable": "E-04",
  "paquete": "1.6.1",
  "cp": "CP-53 a CP-56",
  "fuente": "Encargado de TI y equipo del proyecto",
  "descripcion": "El tablero debe cargar en menos de 3 segundos con la conexión habitual del colegio.",
  "criterio": "Carga en 3 segundos o menos en al menos 95 % de los accesos del piloto, medido durante 15 días de uso real.",
  "v3": "",
  "caso": "CU-14",
  "justificacion": "La institución cuenta con conectividad WIN de fibra óptica de 1000 Mbps (verificado en visita de campo, abril de 2026), lo cual garantiza la infraestructura de red necesaria para un rendimiento adecuado. Un dashboard lento desincentivaría el uso cotidiano del sistema por parte de los docentes, comprometiendo la adopción de la solución.",
  "unidad": "Área de Tecnología",
  "satisfaccion": 4,
  "insatisfaccion": 4,
  "dependencias": "REQ-01, REQ-03, REQ-08",
  "conflictos": "Ninguno",
  "soporte": "Factores Ambientales de la Empresa; Entrevista de campo, abril de 2026"
 },
 {
  "id": "RNF-03",
  "tipo": "No funcional",
  "titulo": "Autenticación y control de acceso",
  "prioridad": "Alta",
  "objetivo": "OE1 a OE4",
  "entregable": "E-05",
  "paquete": "1.4.3",
  "cp": "CP-57 a CP-60",
  "fuente": "Encargado de TI y Promotora Directora",
  "descripcion": "Proteger los datos con ingreso por usuario y contraseña y control de acceso por rol.",
  "criterio": "Contraseñas de 8 caracteres alfanuméricos como mínimo y cierre de sesión tras 30 minutos sin actividad. Se verifica con pruebas de acceso por rol.",
  "v3": "",
  "caso": "CU-15",
  "justificacion": "El sistema gestionará información sensible de 200 estudiantes menores de edad, incluyendo calificaciones, asistencia e incidencias conductuales. La ausencia de mecanismos de autenticación y control de acceso adecuados expondría a la institución a riesgos de seguridad y vulneraría la confidencialidad de los datos de los estudiantes y sus familias.",
  "unidad": "Área de Tecnología",
  "satisfaccion": 5,
  "insatisfaccion": 5,
  "dependencias": "REQ-11",
  "conflictos": "Ninguno",
  "soporte": "Ley N° 29733 — Protección de Datos Personales; Organigrama institucional"
 },
 {
  "id": "RNF-04",
  "tipo": "No funcional",
  "titulo": "Cumplimiento de la Ley N.° 29733",
  "prioridad": "Alta",
  "objetivo": "OG",
  "entregable": "E-05 y E-07",
  "paquete": "1.5.1 y 1.5.3",
  "cp": "CP-61 a CP-64",
  "fuente": "Promotora Directora y encargado de TI",
  "descripcion": "El tratamiento de los datos debe cumplir la Ley N.° 29733 de Protección de Datos Personales, su reglamento y las normas del MINEDU sobre información de estudiantes menores de edad.",
  "criterio": "Existe una política de tratamiento de datos acorde con la ley. Antes del pase a producción se hace una revisión de cumplimiento, documentada en el manual técnico.",
  "v3": "Al alojar los datos en la nube se agregan el consentimiento informado de los apoderados y las condiciones para el flujo de datos fuera del país (SC-03).",
  "caso": "CU-16",
  "justificacion": "El sistema procesará información personal y académica de 200 menores de edad, lo cual exige el cumplimiento estricto del marco normativo peruano de protección de datos personales. El incumplimiento de esta normativa podría generar responsabilidad legal para la institución educativa y comprometer la confianza de los padres de familia en el sistema.",
  "unidad": "Dirección Académica",
  "satisfaccion": 5,
  "insatisfaccion": 5,
  "dependencias": "REQ-11, RNF-03",
  "conflictos": "Ninguno",
  "soporte": "Ley N° 29733 — Protección de Datos Personales; D.S. N° 003-2013-JUS; MINEDU (2023)"
 },
 {
  "id": "RNF-05",
  "tipo": "No funcional",
  "titulo": "Disponibilidad en horario escolar",
  "prioridad": "Alta",
  "objetivo": "OG",
  "entregable": "E-04",
  "paquete": "1.5.1",
  "cp": "CP-65 a CP-68",
  "fuente": "Encargado de TI y Promotora Directora",
  "descripcion": "El sistema debe estar disponible al menos 95 % del horario escolar (de 7:00 a 18:00, de lunes a sábado).",
  "criterio": "Se verifica con los registros de disponibilidad del servicio de alojamiento durante el piloto. Se documentan las caídas y su tiempo de recuperación.",
  "v3": "",
  "caso": "CU-17",
  "justificacion": "El sistema debe ser confiable durante el horario escolar para no interrumpir el proceso de enseñanza-aprendizaje ni generar desconfianza en los usuarios ante posibles caídas del servicio. La institución cuenta con presupuesto limitado como colegio privado pequeño, por lo que la disponibilidad debe lograrse con una infraestructura de bajo costo pero confiable.",
  "unidad": "Área de Tecnología",
  "satisfaccion": 4,
  "insatisfaccion": 4,
  "dependencias": "REQ-01, REQ-08",
  "conflictos": "Ninguno",
  "soporte": "Factores Ambientales de la Empresa; Documentación técnica de hosting cloud (Vercel/Supabase)"
 },
 {
  "id": "RNF-06",
  "tipo": "No funcional",
  "titulo": "Compatibilidad con navegadores",
  "prioridad": "Media",
  "objetivo": "OG",
  "entregable": "E-04",
  "paquete": "1.4.2.2",
  "cp": "CP-69 a CP-72",
  "fuente": "Encargado de TI y equipo del proyecto",
  "descripcion": "El sistema debe funcionar en Chrome, Firefox y Edge sin instalar programas adicionales.",
  "criterio": "Las vistas principales (tablero, ficha y alertas) se muestran bien en las dos últimas versiones de los tres navegadores.",
  "v3": "",
  "caso": "CU-18",
  "justificacion": "La propuesta de canales del sistema contempla una plataforma web responsive accesible desde móvil y escritorio, sin requerir instalaciones adicionales que generen barreras de adopción para docentes y directivos con distinto nivel de competencia tecnológica.",
  "unidad": "Área de Tecnología",
  "satisfaccion": 4,
  "insatisfaccion": 3,
  "dependencias": "REQ-08",
  "conflictos": "Ninguno",
  "soporte": "Business Model Canvas del proyecto — Canales"
 },
 {
  "id": "RNF-07",
  "tipo": "No funcional",
  "titulo": "Capacidad y escalabilidad",
  "prioridad": "Media",
  "objetivo": "OG",
  "entregable": "E-01 y E-04",
  "paquete": "1.6.1",
  "cp": "CP-73 a CP-76",
  "fuente": "Equipo del proyecto y encargado de TI",
  "descripcion": "La versión inicial debe atender a 200 estudiantes y 16 docentes y auxiliares, con una arquitectura que permita crecer sin rediseñarla.",
  "criterio": "El sistema opera sin lentitud perceptible con el total de usuarios previstos. Se comprueba con una prueba de carga.",
  "v3": "",
  "caso": "CU-19",
  "justificacion": "La I.E.P. Peruano Francés cuenta actualmente con aproximadamente 200 alumnos y 16 docentes/auxiliares (datos verificados en visita de campo, abril de 2026). Adicionalmente, el modelo de negocio del proyecto contempla un potencial licenciamiento futuro a otras instituciones educativas del distrito de Villa El Salvador, lo que exige una arquitectura preparada para crecer.",
  "unidad": "Equipo de Desarrollo",
  "satisfaccion": 4,
  "insatisfaccion": 3,
  "dependencias": "REQ-01, RNF-02",
  "conflictos": "Ninguno",
  "soporte": "Datos institucionales verificados; Business Model Canvas — Fuentes de Ingresos"
 },
 {
  "id": "RNF-08",
  "tipo": "No funcional",
  "titulo": "Documentación y transferencia",
  "prioridad": "Media",
  "objetivo": "OG",
  "entregable": "E-07",
  "paquete": "1.5.3",
  "cp": "CP-77 a CP-80",
  "fuente": "Encargado de TI y equipo del proyecto",
  "descripcion": "El código debe estar documentado y ordenado para que el personal del colegio pueda hacer tareas básicas de configuración y soporte.",
  "criterio": "Se entrega el manual técnico y se realiza una sesión de transferencia con el encargado de TI antes del cierre.",
  "v3": "El manual describe la administración de los servicios en la nube en lugar de la instalación en un servidor (SC-03).",
  "caso": "CU-20",
  "justificacion": "La institución cuenta con un técnico de laboratorio TI y una gestora de Cubicol con experiencia previa en la administración de plataformas digitales (Factores Ambientales de la Empresa). El proyecto busca dejar capacidad instalada en la institución para sostener el sistema a largo plazo con recursos propios, conforme a lo señalado en el Business Model Canvas.",
  "unidad": "Área de Tecnología",
  "satisfaccion": 4,
  "insatisfaccion": 3,
  "dependencias": "Ninguno",
  "conflictos": "Ninguno",
  "soporte": "Business Model Canvas — Relación con Clientes; Capital Humano"
 }
];

export const ENTREGABLES = [
 {
  "id": "E-01",
  "nombre": "Módulo de integración y limpieza de datos",
  "tipo": "Software",
  "sprint": 2,
  "descripcion": "Procesos que reúnen y limpian los datos académicos en una base de datos en la nube."
 },
 {
  "id": "E-02",
  "nombre": "Modelo predictivo de riesgo académico",
  "tipo": "Software",
  "sprint": 3,
  "descripcion": "Modelo entrenado en Python con Scikit-learn que clasifica a cada estudiante en riesgo bajo, medio o alto y se actualiza cada semana."
 },
 {
  "id": "E-03",
  "nombre": "Motor de alertas tempranas",
  "tipo": "Software",
  "sprint": 4,
  "descripcion": "Módulo que avisa por correo y en el panel web al docente tutor y a la coordinación."
 },
 {
  "id": "E-04",
  "nombre": "Tablero web",
  "tipo": "Software",
  "sprint": 4,
  "descripcion": "Interfaz web con semáforo de riesgo, fichas de estudiante, reportes y comparación por aula y grado."
 },
 {
  "id": "E-05",
  "nombre": "Gestión de roles y accesos",
  "tipo": "Software",
  "sprint": 4,
  "descripcion": "Ingreso con usuario y contraseña y vistas distintas para docente, coordinación, psicología y dirección."
 },
 {
  "id": "E-06",
  "nombre": "Manual de usuario",
  "tipo": "Documento",
  "sprint": 6,
  "descripcion": "Guía de uso para docentes y coordinadores, en lenguaje sencillo y con capturas de pantalla."
 },
 {
  "id": "E-07",
  "nombre": "Manual técnico",
  "tipo": "Documento",
  "sprint": 6,
  "descripcion": "Arquitectura, configuración de los servicios en la nube y procedimientos básicos de mantenimiento."
 },
 {
  "id": "E-08",
  "nombre": "Plan y sesión de capacitación",
  "tipo": "Capacitación",
  "sprint": 6,
  "descripcion": "Programa de dos horas para docentes y coordinadores."
 },
 {
  "id": "E-09",
  "nombre": "Informe del piloto",
  "tipo": "Validación",
  "sprint": 5,
  "descripcion": "Resultados del piloto con docentes tutores, observaciones y ajustes aplicados antes del despliegue definitivo."
 }
];

export const ENTREGABLES_ESTADO = [
 {
  "id": "E-01",
  "nombre": "Módulo de integración y limpieza de datos",
  "tipo": "Software",
  "sprint": 2,
  "descripcion": "Procesos que reúnen y limpian los datos académicos en una base de datos en la nube.",
  "estado": "En validación",
  "nota": "Presentado al docente asesor el 17/10/2026 con el informe ALC-05 N.º 2. Al 31/10/2026, siete de los ocho casos de prueba están aprobados; falta repetir la reconciliación en tres fechas (CP-03). Se acepta en la revisión del Sprint 2 (04/12/2026), con el Product Owner.",
  "avance": 90,
  "revision": "04/12/2026",
  "paquetes": [
   {
    "id": "1.2.1",
    "nombre": "Integración de datos (ETL)",
    "estado": "Cumplido en parte",
    "pct": 85,
    "existe": "Carga de la base consolidada de notas del colegio (3 878 notas de 173 estudiantes), sin duplicados y reconciliada. El colegio ya entrega las exportaciones de Cubicol de forma periódica, a través del Product Owner.",
    "falta": "Cargar las exportaciones periódicas de Cubicol y repetir la reconciliación en tres fechas (CP-03)."
   },
   {
    "id": "1.2.2",
    "nombre": "Calidad de datos",
    "estado": "Cumplido en parte",
    "pct": 95,
    "existe": "Diez reglas de calidad y validación automática cada noche: 21 noches seguidas sin fallas, del 11/10 al 31/10/2026 (CP-05 cumplido el 25/10).",
    "falta": "Cotejar las notas transcritas de fotografías."
   }
  ],
  "requisitos": [
   {
    "id": "REQ-01",
    "titulo": "Centralización de los datos académicos"
   },
   {
    "id": "REQ-02",
    "titulo": "Limpieza y validación automática de los datos"
   },
   {
    "id": "RNF-07",
    "titulo": "Capacidad y escalabilidad"
   }
  ],
  "evidencias": [
   {
    "texto": "Pantalla «Datos» del sistema",
    "url": "https://proyecto-siat.vercel.app/#/datos"
   },
   {
    "texto": "Casos de prueba del Sprint 2",
    "url": "https://github.com/Jhostin2210/Proyecto-SIAT/blob/main/docs/pruebas-sprint-2.md"
   },
   {
    "texto": "Datos y variables",
    "url": "https://github.com/Jhostin2210/Proyecto-SIAT/blob/main/docs/datos-y-variables.md"
   }
  ],
  "documentos": [
   {
    "id": "ALC-05",
    "titulo": "Informe de avance del producto por EDT N.º 2",
    "drive": "https://drive.google.com/file/d/1PNypm_v1OYE8V_anF6oO47e8_lONrxKQ/view"
   },
   {
    "id": "ALC-04",
    "titulo": "Procedimiento de validación del alcance",
    "drive": "https://drive.google.com/file/d/1LSWrbXPY2o7ChgUFdcmdPe__dA1xf6Ai/view"
   }
  ]
 },
 {
  "id": "E-02",
  "nombre": "Modelo predictivo de riesgo académico",
  "tipo": "Software",
  "sprint": 3,
  "descripcion": "Modelo entrenado en Python con Scikit-learn que clasifica a cada estudiante en riesgo bajo, medio o alto y se actualiza cada semana.",
  "estado": "En desarrollo",
  "nota": "La red neuronal está entrenada y clasifica en tres niveles; falta la ejecución semanal automática y cerrar la métrica acordada (SC-08).",
  "avance": 73,
  "revision": "30/12/2026",
  "paquetes": [
   {
    "id": "1.3.1",
    "nombre": "Entrenamiento del modelo",
    "estado": "Cumplido",
    "pct": 100,
    "existe": "Red neuronal 35-32-16-8-1 entrenada con una base pública (Student Performance, UCI); clasifica en tres niveles.",
    "falta": "Volver a entrenarla cuando el colegio acumule datos propios."
   },
   {
    "id": "1.3.2",
    "nombre": "Clasificación de riesgo",
    "estado": "Prototipo",
    "pct": 50,
    "existe": "Clasifica a todos los estudiantes al cargar datos y con el botón «Evaluar aula».",
    "falta": "Ejecución semanal automática."
   },
   {
    "id": "1.3.3",
    "nombre": "Validación del modelo",
    "estado": "Cumplido en parte",
    "pct": 70,
    "existe": "Prueba con 209 registros no vistos: exactitud 83,7 %, AUC 0,95. Aplicada a 558 casos del colegio. La forma de validarlo (SC-08) se aprobó el 06/11/2026.",
    "falta": "Aplicar la validación aprobada en SC-08 con los datos del colegio."
   }
  ],
  "requisitos": [
   {
    "id": "REQ-03",
    "titulo": "Modelo de clasificación del riesgo académico"
   },
   {
    "id": "REQ-04",
    "titulo": "Actualización semanal automática del modelo"
   }
  ],
  "evidencias": [
   {
    "texto": "Pantalla «Modelo» del sistema",
    "url": "https://proyecto-siat.vercel.app/#/modelo"
   },
   {
    "texto": "Evaluar un caso",
    "url": "https://proyecto-siat.vercel.app/#/evaluar"
   },
   {
    "texto": "Modelo y validación",
    "url": "https://github.com/Jhostin2210/Proyecto-SIAT/blob/main/docs/modelo-y-validacion.md"
   }
  ],
  "documentos": [
   {
    "id": "ALC-05",
    "titulo": "Informe de avance del producto por EDT N.º 2",
    "drive": "https://drive.google.com/file/d/1PNypm_v1OYE8V_anF6oO47e8_lONrxKQ/view"
   }
  ]
 },
 {
  "id": "E-03",
  "nombre": "Motor de alertas tempranas",
  "tipo": "Software",
  "sprint": 4,
  "descripcion": "Módulo que avisa por correo y en el panel web al docente tutor y a la coordinación.",
  "estado": "En desarrollo",
  "nota": "Hay un prototipo: lista de estudiantes en riesgo alto y comunicado al apoderado que redacta el sistema. Faltan el correo al tutor y el registro de seguimiento.",
  "avance": 40,
  "revision": "29/01/2027",
  "paquetes": [
   {
    "id": "1.4.1",
    "nombre": "Motor de alertas",
    "estado": "Prototipo",
    "pct": 40,
    "existe": "Lista de estudiantes en riesgo alto y comunicado al apoderado que el sistema redacta y el tutor envía por WhatsApp (REQ-12).",
    "falta": "Correo al tutor, historial de alertas y registro de seguimiento."
   }
  ],
  "requisitos": [
   {
    "id": "REQ-05",
    "titulo": "Alertas automáticas por correo al docente tutor"
   },
   {
    "id": "REQ-06",
    "titulo": "Panel web de alertas para el docente"
   },
   {
    "id": "REQ-07",
    "titulo": "Registro del seguimiento de cada caso"
   },
   {
    "id": "REQ-12",
    "titulo": "Comunicado al apoderado del estudiante en riesgo alto"
   }
  ],
  "evidencias": [
   {
    "texto": "Inicio del sistema (riesgo alto)",
    "url": "https://proyecto-siat.vercel.app"
   }
  ],
  "documentos": [
   {
    "id": "ALC-05",
    "titulo": "Informe de avance del producto por EDT N.º 2",
    "drive": "https://drive.google.com/file/d/1PNypm_v1OYE8V_anF6oO47e8_lONrxKQ/view"
   }
  ]
 },
 {
  "id": "E-04",
  "nombre": "Tablero web",
  "tipo": "Software",
  "sprint": 4,
  "descripcion": "Interfaz web con semáforo de riesgo, fichas de estudiante, reportes y comparación por aula y grado.",
  "estado": "En desarrollo",
  "nota": "La interfaz en línea tiene aulas, estudiantes, ficha y reportes en PDF, y los docentes tutores le dieron su conformidad en el taller del 28/10/2026. Faltan las pruebas de uso con docentes (1.4.2.3).",
  "avance": 58,
  "revision": "29/01/2027",
  "paquetes": [
   {
    "id": "1.4.2.1",
    "nombre": "Diseño de la interfaz",
    "estado": "Cumplido",
    "pct": 100,
    "existe": "Interfaz en línea revisada con los docentes tutores en el taller del 28/10/2026, que dieron su conformidad.",
    "falta": "Mantenerla al día con los ajustes de los sprints siguientes."
   },
   {
    "id": "1.4.2.2",
    "nombre": "Desarrollo del tablero",
    "estado": "Cumplido en parte",
    "pct": 75,
    "existe": "Indicadores por nivel y por aula, ficha del estudiante, reporte en PDF y exportación por aula.",
    "falta": "Filtros por fecha, comparación con el periodo anterior y prueba en Firefox y Edge."
   },
   {
    "id": "1.4.2.3",
    "nombre": "Pruebas con usuarios",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Pruebas con al menos tres docentes."
   }
  ],
  "requisitos": [
   {
    "id": "REQ-08",
    "titulo": "Tablero de indicadores de riesgo"
   },
   {
    "id": "REQ-09",
    "titulo": "Reportes exportables en PDF y Excel"
   },
   {
    "id": "REQ-10",
    "titulo": "Ficha individual del estudiante"
   },
   {
    "id": "RNF-01",
    "titulo": "Facilidad de uso"
   },
   {
    "id": "RNF-02",
    "titulo": "Rendimiento del tablero"
   },
   {
    "id": "RNF-05",
    "titulo": "Disponibilidad en horario escolar"
   },
   {
    "id": "RNF-06",
    "titulo": "Compatibilidad con navegadores"
   },
   {
    "id": "RNF-07",
    "titulo": "Capacidad y escalabilidad"
   }
  ],
  "evidencias": [
   {
    "texto": "Pantalla «Aulas»",
    "url": "https://proyecto-siat.vercel.app/#/aulas"
   },
   {
    "texto": "Pantalla «Estudiantes»",
    "url": "https://proyecto-siat.vercel.app/#/estudiantes"
   }
  ],
  "documentos": [
   {
    "id": "ALC-05",
    "titulo": "Informe de avance del producto por EDT N.º 2",
    "drive": "https://drive.google.com/file/d/1PNypm_v1OYE8V_anF6oO47e8_lONrxKQ/view"
   }
  ]
 },
 {
  "id": "E-05",
  "nombre": "Gestión de roles y accesos",
  "tipo": "Software",
  "sprint": 4,
  "descripcion": "Ingreso con usuario y contraseña y vistas distintas para docente, coordinación, psicología y dirección.",
  "estado": "No iniciado",
  "nota": "Solo existe la tabla de usuarios con los cuatro roles en la base de datos.",
  "avance": 5,
  "revision": "29/01/2027",
  "paquetes": [
   {
    "id": "1.4.3",
    "nombre": "Roles y accesos",
    "estado": "No iniciado",
    "pct": 5,
    "existe": "La tabla de usuarios con los cuatro roles está en la base de datos.",
    "falta": "Inicio de sesión y vistas por rol."
   }
  ],
  "requisitos": [
   {
    "id": "REQ-11",
    "titulo": "Roles y accesos diferenciados"
   },
   {
    "id": "RNF-03",
    "titulo": "Autenticación y control de acceso"
   },
   {
    "id": "RNF-04",
    "titulo": "Cumplimiento de la Ley N.° 29733"
   }
  ],
  "evidencias": [],
  "documentos": []
 },
 {
  "id": "E-06",
  "nombre": "Manual de usuario",
  "tipo": "Documento",
  "sprint": 6,
  "descripcion": "Guía de uso para docentes y coordinadores, en lenguaje sencillo y con capturas de pantalla.",
  "estado": "No iniciado",
  "nota": "Se elabora en el Sprint 6.",
  "avance": 0,
  "revision": "23/04/2027",
  "paquetes": [
   {
    "id": "1.5.2",
    "nombre": "Manual de usuario",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Manual de usuario."
   }
  ],
  "requisitos": [],
  "evidencias": [],
  "documentos": []
 },
 {
  "id": "E-07",
  "nombre": "Manual técnico",
  "tipo": "Documento",
  "sprint": 6,
  "descripcion": "Arquitectura, configuración de los servicios en la nube y procedimientos básicos de mantenimiento.",
  "estado": "En desarrollo",
  "nota": "Hay documentos de arquitectura, datos, modelo y pruebas en el repositorio del sistema; falta completarlo y validarlo con el encargado de TI.",
  "avance": 40,
  "revision": "23/04/2027",
  "paquetes": [
   {
    "id": "1.5.3",
    "nombre": "Manual técnico",
    "estado": "Prototipo",
    "pct": 40,
    "existe": "Documentos de arquitectura, datos y variables, modelo y pruebas en el repositorio del sistema.",
    "falta": "Completarlo y validarlo con el encargado de TI."
   }
  ],
  "requisitos": [
   {
    "id": "RNF-04",
    "titulo": "Cumplimiento de la Ley N.° 29733"
   },
   {
    "id": "RNF-08",
    "titulo": "Documentación y transferencia"
   }
  ],
  "evidencias": [
   {
    "texto": "Arquitectura del sistema",
    "url": "https://github.com/Jhostin2210/Proyecto-SIAT/blob/main/docs/arquitectura.md"
   }
  ],
  "documentos": []
 },
 {
  "id": "E-08",
  "nombre": "Plan y sesión de capacitación",
  "tipo": "Capacitación",
  "sprint": 6,
  "descripcion": "Programa de dos horas para docentes y coordinadores.",
  "estado": "No iniciado",
  "nota": "Se elabora y se dicta en el Sprint 6.",
  "avance": 0,
  "revision": "23/04/2027",
  "paquetes": [
   {
    "id": "1.5.4",
    "nombre": "Plan de capacitación",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Plan de capacitación."
   },
   {
    "id": "1.5.5",
    "nombre": "Capacitación y cierre",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Capacitación y cierre."
   }
  ],
  "requisitos": [
   {
    "id": "RNF-01",
    "titulo": "Facilidad de uso"
   }
  ],
  "evidencias": [],
  "documentos": []
 },
 {
  "id": "E-09",
  "nombre": "Informe del piloto",
  "tipo": "Validación",
  "sprint": 5,
  "descripcion": "Resultados del piloto con docentes tutores, observaciones y ajustes aplicados antes del despliegue definitivo.",
  "estado": "No iniciado",
  "nota": "El piloto con tres docentes tutores es en el Sprint 5 (marzo de 2027).",
  "avance": 0,
  "revision": "24/03/2027",
  "paquetes": [
   {
    "id": "1.6.2",
    "nombre": "Piloto y retroalimentación",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Piloto con tres docentes tutores."
   }
  ],
  "requisitos": [],
  "evidencias": [],
  "documentos": []
 }
];

export const CORTE_ALCANCE = "07/11/2026";

export const ENTREGABLES_CRONOGRAMA = [
 {
  "id": "A-0.1.1.1",
  "descripcion": "Reunión de levantamiento con directivos, coordinadores y área de TI para validar el alcance del sistema y acceso a datos académicos",
  "sprint": 1,
  "responsable": "Equipo del proyecto + Dirección",
  "paquete": "1.0.1",
  "paqueteNombre": "Levantamiento del alcance",
  "entregable": "Acta de la reunión de levantamiento",
  "inicio": "2026-10-12",
  "fin": "2026-10-14",
  "critica": false,
  "estado": "Realizada",
  "avancePaquete": 100,
  "evidencias": [
   {
    "texto": "Acta GOB-12",
    "url": "https://drive.google.com/file/d/1-fKkCdb72Xk3e0t6xDx93MtEv6CdJnQU/view"
   }
  ]
 },
 {
  "id": "A-0.1.1.2",
  "descripcion": "Análisis de calidad y disponibilidad de datos académicos existentes en los sistemas del colegio",
  "sprint": 1,
  "responsable": "Jadira Vasquez + Helber Perez",
  "paquete": "1.0.2",
  "paqueteNombre": "Diagnóstico de los datos",
  "entregable": "Informe de calidad y disponibilidad de los datos",
  "inicio": "2026-10-19",
  "fin": "2026-10-23",
  "critica": false,
  "estado": "Realizada",
  "avancePaquete": 100,
  "evidencias": [
   {
    "texto": "Datos y variables",
    "url": "https://github.com/Jhostin2210/Proyecto-SIAT/blob/main/docs/datos-y-variables.md"
   }
  ]
 },
 {
  "id": "A-0.1.1.3",
  "descripcion": "Definición y validación con docentes de las variables académicas que predicen el riesgo de bajo rendimiento",
  "sprint": 1,
  "responsable": "Helber Perez + docentes",
  "paquete": "1.0.3",
  "paqueteNombre": "Variables del modelo",
  "entregable": "Lista de variables del modelo validada con docentes",
  "inicio": "2026-10-26",
  "fin": "2026-10-29",
  "critica": false,
  "estado": "Realizada",
  "avancePaquete": 100,
  "evidencias": [
   {
    "texto": "Taller con los 16 docentes y la directora; lista de asistencia y acuerdos"
   },
   {
    "texto": "Variables del modelo",
    "url": "https://github.com/Jhostin2210/Proyecto-SIAT/blob/main/docs/datos-y-variables.md"
   }
  ]
 },
 {
  "id": "A-0.1.1.4",
  "descripcion": "Diseño de la arquitectura completa del sistema: módulos, integraciones, flujo de datos y tecnologías",
  "sprint": 1,
  "responsable": "Jadira Vasquez + Helber Perez",
  "paquete": "1.0.4",
  "paqueteNombre": "Arquitectura del sistema",
  "entregable": "Documento de arquitectura del sistema",
  "inicio": "2026-11-02",
  "fin": "2026-11-06",
  "critica": false,
  "estado": "Realizada",
  "avancePaquete": 100,
  "evidencias": [
   {
    "texto": "Arquitectura del sistema",
    "url": "https://github.com/Jhostin2210/Proyecto-SIAT/blob/main/docs/arquitectura.md"
   }
  ]
 },
 {
  "id": "A-1.1.1.1",
  "descripcion": "Elaborar cronograma de hitos del proyecto (Gantt SCRUM)",
  "sprint": 2,
  "responsable": "Jhostin Galarza",
  "paquete": "1.1.1",
  "paqueteNombre": "Cronograma de hitos",
  "entregable": "Cronograma de hitos (CRO-01)",
  "inicio": "2026-11-09",
  "fin": "2026-11-11",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": null,
  "evidencias": []
 },
 {
  "id": "A-1.1.1.2",
  "descripcion": "Definir Product Backlog y priorizar historias de usuario",
  "sprint": 2,
  "responsable": "Equipo del proyecto",
  "paquete": "1.1.1",
  "paqueteNombre": "Cronograma de hitos",
  "entregable": "Product Backlog priorizado",
  "inicio": "2026-11-11",
  "fin": "2026-11-13",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": null,
  "evidencias": []
 },
 {
  "id": "A-1.1.1.3",
  "descripcion": "Asignar roles SCRUM: Product Owner, Scrum Master, Dev Team",
  "sprint": 2,
  "responsable": "Equipo del proyecto",
  "paquete": "1.1.1",
  "paqueteNombre": "Cronograma de hitos",
  "entregable": "Roles Scrum asignados",
  "inicio": "2026-11-12",
  "fin": "2026-11-12",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": null,
  "evidencias": []
 },
 {
  "id": "A-1.2.1.1",
  "descripcion": "Establecer plantilla de informe de avance semanal",
  "sprint": 2,
  "responsable": "Jhostin Galarza",
  "paquete": "1.1.2",
  "paqueteNombre": "Informes de avance",
  "entregable": "Plantilla del informe de avance semanal",
  "inicio": "2026-11-13",
  "fin": "2026-11-13",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": null,
  "evidencias": []
 },
 {
  "id": "A-2.1.1.1",
  "descripcion": "Levantar y mapear fuentes de datos académicos (asistencia, notas, participación, incidencias)",
  "sprint": 2,
  "responsable": "Jadira Vasquez",
  "paquete": "1.2.1",
  "paqueteNombre": "Integración de datos (ETL)",
  "entregable": "Mapa de las fuentes de datos académicos",
  "inicio": "2026-11-16",
  "fin": "2026-11-19",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 85,
  "evidencias": []
 },
 {
  "id": "A-2.1.1.2",
  "descripcion": "Diseñar modelo entidad-relación de la BD centralizada (PostgreSQL)",
  "sprint": 2,
  "responsable": "Jadira Vasquez",
  "paquete": "1.2.1",
  "paqueteNombre": "Integración de datos (ETL)",
  "entregable": "Modelo entidad-relación de la base de datos",
  "inicio": "2026-11-18",
  "fin": "2026-11-20",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 85,
  "evidencias": []
 },
 {
  "id": "A-2.1.1.3",
  "descripcion": "Codificar scripts ETL de extracción, transformación y carga",
  "sprint": 2,
  "responsable": "Jadira Vasquez + Carlos Curo",
  "paquete": "1.2.1",
  "paqueteNombre": "Integración de datos (ETL)",
  "entregable": "Scripts de carga de datos (ETL)",
  "inicio": "2026-11-23",
  "fin": "2026-11-27",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 85,
  "evidencias": []
 },
 {
  "id": "A-2.1.1.4",
  "descripcion": "Ejecutar prueba de migración de datos y validar integridad",
  "sprint": 2,
  "responsable": "Jadira Vasquez",
  "paquete": "1.2.1",
  "paqueteNombre": "Integración de datos (ETL)",
  "entregable": "Informe de la prueba de migración",
  "inicio": "2026-11-25",
  "fin": "2026-11-27",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 85,
  "evidencias": []
 },
 {
  "id": "A-2.2.1.1",
  "descripcion": "Configurar tareas programadas nocturnas de limpieza y validación de datos",
  "sprint": 2,
  "responsable": "Jadira Vasquez",
  "paquete": "1.2.2",
  "paqueteNombre": "Calidad de datos",
  "entregable": "Validación nocturna programada",
  "inicio": "2026-11-30",
  "fin": "2026-12-03",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 95,
  "evidencias": []
 },
 {
  "id": "A-2.2.1.2",
  "descripcion": "Verificar consistencia de datos y corrección de registros erróneos",
  "sprint": 2,
  "responsable": "Jadira Vasquez + Carlos Curo",
  "paquete": "1.2.2",
  "paqueteNombre": "Calidad de datos",
  "entregable": "Reporte de consistencia de los datos",
  "inicio": "2026-12-02",
  "fin": "2026-12-04",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": 95,
  "evidencias": []
 },
 {
  "id": "A-3.1.1.1",
  "descripcion": "Análisis exploratorio del dataset académico (EDA)",
  "sprint": 3,
  "responsable": "Helber Perez",
  "paquete": "1.3.1",
  "paqueteNombre": "Entrenamiento del modelo",
  "entregable": "Informe del análisis exploratorio de los datos",
  "inicio": "2026-12-07",
  "fin": "2026-12-14",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 100,
  "evidencias": []
 },
 {
  "id": "A-3.1.1.2",
  "descripcion": "Preprocesar y normalizar variables académicas para el modelo",
  "sprint": 3,
  "responsable": "Helber Perez",
  "paquete": "1.3.1",
  "paqueteNombre": "Entrenamiento del modelo",
  "entregable": "Variables preprocesadas para el modelo",
  "inicio": "2026-12-10",
  "fin": "2026-12-14",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": 100,
  "evidencias": []
 },
 {
  "id": "A-3.1.1.3",
  "descripcion": "Seleccionar algoritmo ML (Random Forest / Gradient Boosting / Regresión logística)",
  "sprint": 3,
  "responsable": "Helber Perez",
  "paquete": "1.3.1",
  "paqueteNombre": "Entrenamiento del modelo",
  "entregable": "Algoritmo seleccionado y su justificación",
  "inicio": "2026-12-14",
  "fin": "2026-12-16",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 100,
  "evidencias": []
 },
 {
  "id": "A-3.1.1.4",
  "descripcion": "Entrenar modelo predictivo con Scikit-learn usando datos históricos",
  "sprint": 3,
  "responsable": "Helber Perez",
  "paquete": "1.3.1",
  "paqueteNombre": "Entrenamiento del modelo",
  "entregable": "Modelo entrenado",
  "inicio": "2026-12-16",
  "fin": "2026-12-22",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 100,
  "evidencias": []
 },
 {
  "id": "A-3.2.1.1",
  "descripcion": "Evaluar métricas del modelo (accuracy, precision, recall, F1-score)",
  "sprint": 3,
  "responsable": "Helber Perez",
  "paquete": "1.3.3",
  "paqueteNombre": "Validación del modelo",
  "entregable": "Reporte de métricas del modelo",
  "inicio": "2026-12-21",
  "fin": "2026-12-23",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 70,
  "evidencias": []
 },
 {
  "id": "A-3.2.1.2",
  "descripcion": "Ajustar hiperparámetros hasta alcanzar el umbral mínimo de 75 % en la métrica acordada",
  "sprint": 3,
  "responsable": "Helber Perez",
  "paquete": "1.3.3",
  "paqueteNombre": "Validación del modelo",
  "entregable": "Modelo ajustado que cumple el umbral",
  "inicio": "2026-12-23",
  "fin": "2026-12-29",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 70,
  "evidencias": []
 },
 {
  "id": "A-3.2.1.3",
  "descripcion": "Implementar lógica de clasificación: riesgo alto (rojo), medio (amarillo), bajo (verde)",
  "sprint": 3,
  "responsable": "Helber Perez",
  "paquete": "1.3.2",
  "paqueteNombre": "Clasificación de riesgo",
  "entregable": "Clasificación en tres niveles de riesgo",
  "inicio": "2026-12-24",
  "fin": "2026-12-29",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 50,
  "evidencias": []
 },
 {
  "id": "A-3.2.1.4",
  "descripcion": "Configurar script de actualización semanal automática del modelo",
  "sprint": 3,
  "responsable": "Helber Perez + Jadira Vasquez",
  "paquete": "1.3.2",
  "paqueteNombre": "Clasificación de riesgo",
  "entregable": "Actualización semanal automática del modelo",
  "inicio": "2026-12-28",
  "fin": "2026-12-30",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": 50,
  "evidencias": []
 },
 {
  "id": "A-4.1.1.1",
  "descripcion": "Diseñar plantilla de correo de alerta para el docente tutor",
  "sprint": 4,
  "responsable": "Jadira Vasquez",
  "paquete": "1.4.1",
  "paqueteNombre": "Motor de alertas",
  "entregable": "Plantilla del correo de alerta",
  "inicio": "2027-01-04",
  "fin": "2027-01-05",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": 40,
  "evidencias": []
 },
 {
  "id": "A-4.1.1.2",
  "descripcion": "Desarrollar módulo de envío automático de alertas por correo electrónico",
  "sprint": 4,
  "responsable": "Jadira Vasquez",
  "paquete": "1.4.1",
  "paqueteNombre": "Motor de alertas",
  "entregable": "Envío automático de alertas por correo",
  "inicio": "2027-01-06",
  "fin": "2027-01-11",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": 40,
  "evidencias": []
 },
 {
  "id": "A-4.1.1.3",
  "descripcion": "Desarrollar módulo web de alertas críticas en panel del docente",
  "sprint": 4,
  "responsable": "Jadira Vasquez",
  "paquete": "1.4.1",
  "paqueteNombre": "Motor de alertas",
  "entregable": "Panel web de alertas del docente",
  "inicio": "2027-01-11",
  "fin": "2027-01-14",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": 40,
  "evidencias": []
 },
 {
  "id": "A-4.1.1.4",
  "descripcion": "Implementar módulo de registro de seguimiento de casos críticos",
  "sprint": 4,
  "responsable": "Jadira Vasquez",
  "paquete": "1.4.1",
  "paqueteNombre": "Motor de alertas",
  "entregable": "Registro de seguimiento de casos",
  "inicio": "2027-01-13",
  "fin": "2027-01-15",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": 40,
  "evidencias": []
 },
 {
  "id": "A-4.2.1.1",
  "descripcion": "Diseñar wireframes y prototipo de la interfaz Next.js",
  "sprint": 4,
  "responsable": "Carlos Curo",
  "paquete": "1.4.2.1",
  "paqueteNombre": "Diseño de la interfaz",
  "entregable": "Wireframes y prototipo de la interfaz",
  "inicio": "2027-01-18",
  "fin": "2027-01-20",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 100,
  "evidencias": []
 },
 {
  "id": "A-4.2.1.2",
  "descripcion": "Desarrollar dashboard interactivo con semáforo de riesgo por alumno, aula y grado",
  "sprint": 4,
  "responsable": "Carlos Curo",
  "paquete": "1.4.2.2",
  "paqueteNombre": "Desarrollo del tablero",
  "entregable": "Tablero con semáforo de riesgo",
  "inicio": "2027-01-20",
  "fin": "2027-01-26",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 75,
  "evidencias": []
 },
 {
  "id": "A-4.2.1.3",
  "descripcion": "Desarrollar ficha individual del estudiante con historial completo",
  "sprint": 4,
  "responsable": "Carlos Curo",
  "paquete": "1.4.2.2",
  "paqueteNombre": "Desarrollo del tablero",
  "entregable": "Ficha individual del estudiante",
  "inicio": "2027-01-25",
  "fin": "2027-01-27",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 75,
  "evidencias": []
 },
 {
  "id": "A-4.2.1.4",
  "descripcion": "Implementar módulo de roles y control de acceso por perfil de usuario",
  "sprint": 4,
  "responsable": "Jhostin Galarza",
  "paquete": "1.4.3",
  "paqueteNombre": "Roles y accesos",
  "entregable": "Roles y control de acceso",
  "inicio": "2027-01-27",
  "fin": "2027-01-29",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 5,
  "evidencias": []
 },
 {
  "id": "A-4.2.1.5",
  "descripcion": "Desarrollar módulo de reportes exportables en PDF y Excel por unidad evaluativa",
  "sprint": 4,
  "responsable": "Carlos Curo",
  "paquete": "1.4.2.2",
  "paqueteNombre": "Desarrollo del tablero",
  "entregable": "Reportes exportables en PDF y Excel",
  "inicio": "2027-01-27",
  "fin": "2027-01-29",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 75,
  "evidencias": []
 },
 {
  "id": "A-5.0.1.1",
  "descripcion": "Pruebas de integración entre todos los módulos del sistema: verificar ETL, ML, alertas y dashboard funcionan en conjunto",
  "sprint": 5,
  "responsable": "Equipo del proyecto",
  "paquete": "1.6.1",
  "paqueteNombre": "Pruebas de integración y rendimiento",
  "entregable": "Reporte de pruebas de integración",
  "inicio": "2027-03-01",
  "fin": "2027-03-05",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 20,
  "evidencias": []
 },
 {
  "id": "A-5.0.1.2",
  "descripcion": "Pruebas de rendimiento del sistema: confirmar que el tablero carga en menos de 3 segundos y que la clasificación semanal se ejecuta sin intervención manual",
  "sprint": 5,
  "responsable": "Carlos Curo + Jadira Vasquez",
  "paquete": "1.6.1",
  "paqueteNombre": "Pruebas de integración y rendimiento",
  "entregable": "Reporte de pruebas de rendimiento",
  "inicio": "2027-03-03",
  "fin": "2027-03-08",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 20,
  "evidencias": []
 },
 {
  "id": "A-5.0.2.1",
  "descripcion": "Prueba piloto real con grupo de 3 docentes tutores usando datos académicos reales del colegio durante 2 semanas",
  "sprint": 5,
  "responsable": "Equipo del proyecto + docentes",
  "paquete": "1.6.2",
  "paqueteNombre": "Piloto y retroalimentación",
  "entregable": "Registro de la prueba piloto",
  "inicio": "2027-03-08",
  "fin": "2027-03-19",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 0,
  "evidencias": []
 },
 {
  "id": "A-5.0.2.2",
  "descripcion": "Recopilar feedback del piloto, documentar observaciones y aplicar ajustes al sistema basados en uso real",
  "sprint": 5,
  "responsable": "Equipo del proyecto + docentes",
  "paquete": "1.6.2",
  "paqueteNombre": "Piloto y retroalimentación",
  "entregable": "Informe del piloto con los ajustes aplicados",
  "inicio": "2027-03-19",
  "fin": "2027-03-24",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 0,
  "evidencias": []
 },
 {
  "id": "A-5.1.1.1",
  "descripcion": "Configurar el entorno de producción en la nube (alojamiento web, base de datos y tarea programada)",
  "sprint": 6,
  "responsable": "Jadira Vasquez",
  "paquete": "1.5.1",
  "paqueteNombre": "Despliegue del sistema",
  "entregable": "Entorno de producción configurado",
  "inicio": "2027-03-29",
  "fin": "2027-03-31",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": 40,
  "evidencias": []
 },
 {
  "id": "A-5.1.1.2",
  "descripcion": "Desplegar sistema completo en entorno de producción definitivo",
  "sprint": 6,
  "responsable": "Jadira Vasquez",
  "paquete": "1.5.1",
  "paqueteNombre": "Despliegue del sistema",
  "entregable": "Sistema desplegado en producción",
  "inicio": "2027-03-31",
  "fin": "2027-04-05",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 40,
  "evidencias": []
 },
 {
  "id": "A-5.1.1.3",
  "descripcion": "Ejecutar pruebas de aceptación UAT formales con todos los docentes tutores",
  "sprint": 6,
  "responsable": "Equipo del proyecto + docentes",
  "paquete": "1.4.2.3",
  "paqueteNombre": "Pruebas con usuarios",
  "entregable": "Actas de las pruebas de aceptación con docentes",
  "inicio": "2027-04-05",
  "fin": "2027-04-09",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 0,
  "evidencias": []
 },
 {
  "id": "A-5.1.1.4",
  "descripcion": "Corregir observaciones y bugs detectados en pruebas UAT formales",
  "sprint": 6,
  "responsable": "Carlos Curo + Jadira Vasquez",
  "paquete": "1.5.1",
  "paqueteNombre": "Despliegue del sistema",
  "entregable": "Registro de las correcciones",
  "inicio": "2027-04-07",
  "fin": "2027-04-09",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 40,
  "evidencias": []
 },
 {
  "id": "A-5.2.1.1",
  "descripcion": "Elaborar manual de usuario (docentes y coordinadores)",
  "sprint": 6,
  "responsable": "Carlos Curo",
  "paquete": "1.5.2",
  "paqueteNombre": "Manual de usuario",
  "entregable": "Manual de usuario",
  "inicio": "2027-04-12",
  "fin": "2027-04-14",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": 0,
  "evidencias": []
 },
 {
  "id": "A-5.2.1.2",
  "descripcion": "Elaborar manual técnico del sistema para el responsable de TI del colegio",
  "sprint": 6,
  "responsable": "Helber Perez",
  "paquete": "1.5.3",
  "paqueteNombre": "Manual técnico",
  "entregable": "Manual técnico",
  "inicio": "2027-04-14",
  "fin": "2027-04-16",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": 40,
  "evidencias": []
 },
 {
  "id": "A-5.2.1.3",
  "descripcion": "Ejecutar sesión formal de capacitación a todos los docentes y coordinadores (2 horas)",
  "sprint": 6,
  "responsable": "Jhostin Galarza + Coordinación académica",
  "paquete": "1.5.4",
  "paqueteNombre": "Plan de capacitación",
  "entregable": "Lista de asistencia a la capacitación",
  "inicio": "2027-04-15",
  "fin": "2027-04-16",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 0,
  "evidencias": []
 },
 {
  "id": "A-5.2.1.4",
  "descripcion": "Realizar retrospectiva final del proyecto SCRUM",
  "sprint": 6,
  "responsable": "Jhostin Galarza",
  "paquete": "1.5.5",
  "paqueteNombre": "Capacitación y cierre",
  "entregable": "Acta de la retrospectiva final",
  "inicio": "2027-04-19",
  "fin": "2027-04-19",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 0,
  "evidencias": []
 },
 {
  "id": "A-5.2.1.5",
  "descripcion": "Elaborar informe final del proyecto y presentación de cierre ante el docente del curso",
  "sprint": 6,
  "responsable": "Equipo del proyecto",
  "paquete": "1.5.5",
  "paqueteNombre": "Capacitación y cierre",
  "entregable": "Informe final y presentación de cierre",
  "inicio": "2027-04-20",
  "fin": "2027-04-23",
  "critica": true,
  "estado": "Programada",
  "avancePaquete": 0,
  "evidencias": []
 },
 {
  "id": "A-1.2.1.2",
  "descripcion": "Daily Standup 15 min diarios — continuo todo el proyecto",
  "sprint": 2,
  "responsable": "Jhostin Galarza",
  "paquete": "1.1.2",
  "paqueteNombre": "Informes de avance",
  "entregable": "Registro de las reuniones diarias",
  "inicio": "2026-11-09",
  "fin": "2027-04-23",
  "critica": false,
  "estado": "Programada",
  "avancePaquete": null,
  "evidencias": []
 }
];

export const SEGUIMIENTO_ALCANCE = [
 {
  "fecha": "2026-10-17",
  "fuente": "Informe ALC-05 N.º 2",
  "cambios": {},
  "casos": [
   {
    "id": "CP-01",
    "estado": "Aprobado"
   },
   {
    "id": "CP-02",
    "estado": "Aprobado"
   },
   {
    "id": "CP-03",
    "estado": "Aprobado en parte"
   },
   {
    "id": "CP-04",
    "estado": "Aprobado"
   },
   {
    "id": "CP-05",
    "estado": "En curso"
   },
   {
    "id": "CP-06",
    "estado": "Aprobado"
   },
   {
    "id": "CP-07",
    "estado": "Aprobado"
   },
   {
    "id": "CP-08",
    "estado": "Aprobado"
   }
  ],
  "hechos": [
   "Se presenta al docente asesor el primer entregable del producto (E-01) con el informe ALC-05 N.º 2."
  ],
  "sprint": [],
  "alertas": [],
  "fueraDeAlcance": [],
  "requisitosCambiados": [],
  "paquetes": [
   {
    "id": "1.1.1",
    "nombre": "Cronograma de hitos",
    "componente": "1.1",
    "estado": "Cumplido",
    "pct": null,
    "existe": "Línea base del cronograma v3 (CRO-01), con la conformidad de la patrocinadora (12/10/2026).",
    "falta": "Mantenerla actualizada ante cada cambio.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.1.2",
    "nombre": "Informes de avance",
    "componente": "1.1",
    "estado": "En curso",
    "pct": null,
    "existe": "Informe de desempeño N.º 1 (GOB-09).",
    "falta": "Un informe al cierre de cada sprint.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.1.3",
    "nombre": "Actas y control de cambios",
    "componente": "1.1",
    "estado": "En curso",
    "pct": null,
    "existe": "Registro de cambios con 11 solicitudes (GOB-10) y acta de la reunión de inicio (GOB-12).",
    "falta": "Actas y cambios hasta el cierre.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.2.1",
    "nombre": "Integración de datos (ETL)",
    "componente": "1.2",
    "estado": "Cumplido en parte",
    "pct": 85,
    "existe": "Carga de la base consolidada de notas del colegio: 3 878 notas de 173 estudiantes, sin duplicados y reconciliada con el archivo de origen.",
    "falta": "Repetir la reconciliación en tres fechas y cargar las exportaciones de Cubicol.",
    "entregable": "E-01",
    "revision": "2026-12-04",
    "cambio": false
   },
   {
    "id": "1.2.2",
    "nombre": "Calidad de datos",
    "componente": "1.2",
    "estado": "Cumplido en parte",
    "pct": 85,
    "existe": "Diez reglas de calidad y validación automática cada noche: 6 noches seguidas sin fallas críticas al 17/10/2026.",
    "falta": "Completar 15 noches seguidas y cotejar las notas transcritas de fotografías.",
    "entregable": "E-01",
    "revision": "2026-12-04",
    "cambio": false
   },
   {
    "id": "1.3.1",
    "nombre": "Entrenamiento del modelo",
    "componente": "1.3",
    "estado": "Cumplido",
    "pct": 100,
    "existe": "Red neuronal 35-32-16-8-1 entrenada con una base pública (Student Performance, UCI); clasifica en tres niveles.",
    "falta": "Volver a entrenarla cuando el colegio acumule datos propios.",
    "entregable": "E-02",
    "revision": "2026-12-30",
    "cambio": false
   },
   {
    "id": "1.3.2",
    "nombre": "Clasificación de riesgo",
    "componente": "1.3",
    "estado": "Prototipo",
    "pct": 50,
    "existe": "Clasifica a todos los estudiantes al cargar datos y con el botón «Evaluar aula».",
    "falta": "Ejecución semanal automática.",
    "entregable": "E-02",
    "revision": "2026-12-30",
    "cambio": false
   },
   {
    "id": "1.3.3",
    "nombre": "Validación del modelo",
    "componente": "1.3",
    "estado": "Cumplido en parte",
    "pct": 70,
    "existe": "Prueba con 209 registros no vistos: exactitud 83,7 %, AUC 0,95. Aplicada a 558 casos del colegio: en riesgo alto le fue mal al 55 %; en bajo, al 3 %.",
    "falta": "Cerrar la métrica acordada (SC-08) y contrastar las alertas con los docentes.",
    "entregable": "E-02",
    "revision": "2026-12-30",
    "cambio": false
   },
   {
    "id": "1.4.1",
    "nombre": "Motor de alertas",
    "componente": "1.4",
    "estado": "Prototipo",
    "pct": 40,
    "existe": "Lista de estudiantes en riesgo alto y comunicado al apoderado que el sistema redacta y el tutor envía por WhatsApp (REQ-12).",
    "falta": "Correo al tutor, historial de alertas y registro de seguimiento.",
    "entregable": "E-03",
    "revision": "2027-01-29",
    "cambio": false
   },
   {
    "id": "1.4.2.1",
    "nombre": "Diseño de la interfaz",
    "componente": "1.4",
    "estado": "Cumplido en parte",
    "pct": 80,
    "existe": "Interfaz en línea: inicio, aulas, estudiantes, ficha, evaluación de un caso, modelo y datos.",
    "falta": "Mostrarla a los docentes en el taller del 28/10/2026.",
    "entregable": "E-04",
    "revision": "2027-01-29",
    "cambio": false
   },
   {
    "id": "1.4.2.2",
    "nombre": "Desarrollo del tablero",
    "componente": "1.4",
    "estado": "Cumplido en parte",
    "pct": 75,
    "existe": "Indicadores por nivel y por aula, ficha del estudiante, reporte en PDF y exportación por aula.",
    "falta": "Filtros por fecha, comparación con el periodo anterior y prueba en Firefox y Edge.",
    "entregable": "E-04",
    "revision": "2027-01-29",
    "cambio": false
   },
   {
    "id": "1.4.2.3",
    "nombre": "Pruebas con usuarios",
    "componente": "1.4",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Pruebas con al menos tres docentes.",
    "entregable": "E-04",
    "revision": "2027-01-29",
    "cambio": false
   },
   {
    "id": "1.4.3",
    "nombre": "Roles y accesos",
    "componente": "1.4",
    "estado": "No iniciado",
    "pct": 5,
    "existe": "La tabla de usuarios con los cuatro roles está en la base de datos.",
    "falta": "Inicio de sesión y vistas por rol.",
    "entregable": "E-05",
    "revision": "2027-01-29",
    "cambio": false
   },
   {
    "id": "1.5.1",
    "nombre": "Despliegue del sistema",
    "componente": "1.5",
    "estado": "Prototipo",
    "pct": 40,
    "existe": "Sistema en línea (página en Vercel y API en Render) con datos de práctica.",
    "falta": "Base gestionada y entorno de producción con datos reales.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.5.2",
    "nombre": "Manual de usuario",
    "componente": "1.5",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Manual de usuario.",
    "entregable": "E-06",
    "revision": "2027-04-23",
    "cambio": false
   },
   {
    "id": "1.5.3",
    "nombre": "Manual técnico",
    "componente": "1.5",
    "estado": "Prototipo",
    "pct": 40,
    "existe": "Documentos de arquitectura, datos y variables, modelo y pruebas en el repositorio del sistema.",
    "falta": "Completarlo y validarlo con el encargado de TI.",
    "entregable": "E-07",
    "revision": "2027-04-23",
    "cambio": false
   },
   {
    "id": "1.5.4",
    "nombre": "Plan de capacitación",
    "componente": "1.5",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Plan de capacitación.",
    "entregable": "E-08",
    "revision": "2027-04-23",
    "cambio": false
   },
   {
    "id": "1.5.5",
    "nombre": "Capacitación y cierre",
    "componente": "1.5",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Capacitación y cierre.",
    "entregable": "E-08",
    "revision": "2027-04-23",
    "cambio": false
   },
   {
    "id": "1.6.1",
    "nombre": "Pruebas de integración y rendimiento",
    "componente": "1.6",
    "estado": "Prototipo",
    "pct": 20,
    "existe": "Pruebas del entregable E-01 y de los flujos de la página.",
    "falta": "Reporte formal de integración y prueba de rendimiento.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.6.2",
    "nombre": "Piloto y retroalimentación",
    "componente": "1.6",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Piloto con tres docentes tutores.",
    "entregable": "E-09",
    "revision": "2027-03-24",
    "cambio": false
   }
  ],
  "requisitos": [
   {
    "id": "REQ-01",
    "titulo": "Centralización de los datos académicos",
    "prioridad": "Alta",
    "entregable": "E-01",
    "paquete": "1.2.1",
    "casos": "CP-01 a CP-04",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-02",
    "titulo": "Limpieza y validación automática de los datos",
    "prioridad": "Alta",
    "entregable": "E-01",
    "paquete": "1.2.2",
    "casos": "CP-05 a CP-08",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-03",
    "titulo": "Modelo de clasificación del riesgo académico",
    "prioridad": "Alta",
    "entregable": "E-02",
    "paquete": "1.3.1 y 1.3.3",
    "casos": "CP-09 a CP-12",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-04",
    "titulo": "Actualización semanal automática del modelo",
    "prioridad": "Alta",
    "entregable": "E-02",
    "paquete": "1.3.2",
    "casos": "CP-13 a CP-16",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-05",
    "titulo": "Alertas automáticas por correo al docente tutor",
    "prioridad": "Alta",
    "entregable": "E-03",
    "paquete": "1.4.1",
    "casos": "CP-17 a CP-20",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-06",
    "titulo": "Panel web de alertas para el docente",
    "prioridad": "Alta",
    "entregable": "E-03",
    "paquete": "1.4.1",
    "casos": "CP-21 a CP-24",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-07",
    "titulo": "Registro del seguimiento de cada caso",
    "prioridad": "Media",
    "entregable": "E-03",
    "paquete": "1.4.1",
    "casos": "CP-25 a CP-28",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-08",
    "titulo": "Tablero de indicadores de riesgo",
    "prioridad": "Alta",
    "entregable": "E-04",
    "paquete": "1.4.2.2",
    "casos": "CP-29 a CP-32",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-09",
    "titulo": "Reportes exportables en PDF y Excel",
    "prioridad": "Media",
    "entregable": "E-04",
    "paquete": "1.4.2.2",
    "casos": "CP-33 a CP-36",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-10",
    "titulo": "Ficha individual del estudiante",
    "prioridad": "Alta",
    "entregable": "E-04",
    "paquete": "1.4.2.2",
    "casos": "CP-37 a CP-40",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-11",
    "titulo": "Roles y accesos diferenciados",
    "prioridad": "Alta",
    "entregable": "E-05",
    "paquete": "1.4.3",
    "casos": "CP-41 a CP-44",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-12",
    "titulo": "Comunicado al apoderado del estudiante en riesgo alto",
    "prioridad": "Media",
    "entregable": "E-03",
    "paquete": "1.4.1",
    "casos": "CP-45 a CP-48",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-01",
    "titulo": "Facilidad de uso",
    "prioridad": "Alta",
    "entregable": "E-04 y E-08",
    "paquete": "1.4.2.3 y 1.5.4",
    "casos": "CP-49 a CP-52",
    "estado": "Pendiente"
   },
   {
    "id": "RNF-02",
    "titulo": "Rendimiento del tablero",
    "prioridad": "Alta",
    "entregable": "E-04",
    "paquete": "1.6.1",
    "casos": "CP-53 a CP-56",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-03",
    "titulo": "Autenticación y control de acceso",
    "prioridad": "Alta",
    "entregable": "E-05",
    "paquete": "1.4.3",
    "casos": "CP-57 a CP-60",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-04",
    "titulo": "Cumplimiento de la Ley N.° 29733",
    "prioridad": "Alta",
    "entregable": "E-05 y E-07",
    "paquete": "1.5.1 y 1.5.3",
    "casos": "CP-61 a CP-64",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-05",
    "titulo": "Disponibilidad en horario escolar",
    "prioridad": "Alta",
    "entregable": "E-04",
    "paquete": "1.5.1",
    "casos": "CP-65 a CP-68",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-06",
    "titulo": "Compatibilidad con navegadores",
    "prioridad": "Media",
    "entregable": "E-04",
    "paquete": "1.4.2.2",
    "casos": "CP-69 a CP-72",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-07",
    "titulo": "Capacidad y escalabilidad",
    "prioridad": "Media",
    "entregable": "E-01 y E-04",
    "paquete": "1.6.1",
    "casos": "CP-73 a CP-76",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-08",
    "titulo": "Documentación y transferencia",
    "prioridad": "Media",
    "entregable": "E-07",
    "paquete": "1.5.3",
    "casos": "CP-77 a CP-80",
    "estado": "En desarrollo"
   }
  ]
 },
 {
  "fecha": "2026-10-31",
  "fuente": "Seguimiento semanal",
  "cambios": {
   "1.2.1": [
    "Cumplido en parte",
    85,
    "Carga de la base consolidada de notas del colegio (3 878 notas de 173 estudiantes), sin duplicados y reconciliada. El colegio ya entrega las exportaciones de Cubicol de forma periódica, a través del Product Owner.",
    "Cargar las exportaciones periódicas de Cubicol y repetir la reconciliación en tres fechas (CP-03)."
   ],
   "1.2.2": [
    "Cumplido en parte",
    95,
    "Diez reglas de calidad y validación automática cada noche: 21 noches seguidas sin fallas, del 11/10 al 31/10/2026 (CP-05 cumplido el 25/10).",
    "Cotejar las notas transcritas de fotografías."
   ],
   "1.4.2.1": [
    "Cumplido",
    100,
    "Interfaz en línea revisada con los docentes tutores en el taller del 28/10/2026, que dieron su conformidad.",
    "Mantenerla al día con los ajustes de los sprints siguientes."
   ]
  },
  "casos": [
   {
    "id": "CP-01",
    "estado": "Aprobado"
   },
   {
    "id": "CP-02",
    "estado": "Aprobado"
   },
   {
    "id": "CP-03",
    "estado": "Aprobado en parte"
   },
   {
    "id": "CP-04",
    "estado": "Aprobado"
   },
   {
    "id": "CP-05",
    "estado": "Aprobado"
   },
   {
    "id": "CP-06",
    "estado": "Aprobado"
   },
   {
    "id": "CP-07",
    "estado": "Aprobado"
   },
   {
    "id": "CP-08",
    "estado": "Aprobado"
   }
  ],
  "hechos": [
   "28/10: taller de validación con los docentes tutores, organizado por el Product Owner. Conformidad con las variables del modelo y con la interfaz.",
   "El colegio entrega las exportaciones de notas de Cubicol de forma periódica, a través del Product Owner.",
   "25/10: se completan 15 noches seguidas de validación de datos sin fallas (CP-05). Al 31/10 son 21."
  ],
  "sprint": [
   {
    "que": "Arquitectura del sistema",
    "estado": "Lista para revisión",
    "evidencia": "Documento de arquitectura en el repositorio del sistema; se revisa el 06/11/2026.",
    "url": "https://github.com/Jhostin2210/Proyecto-SIAT/blob/main/docs/arquitectura.md"
   },
   {
    "que": "Lista de variables del modelo validada con docentes",
    "estado": "Cumplido",
    "evidencia": "Taller del 28/10/2026: los docentes tutores dieron su conformidad. Constancia: lista de asistencia y acuerdos."
   }
  ],
  "alertas": [
   {
    "nivel": "Atención",
    "texto": "Archivar la lista de asistencia y los acuerdos del taller del 28/10: son la evidencia para aceptar el alcance del Sprint 1.",
    "responsable": "Helber Perez",
    "fecha": "06/11/2026"
   },
   {
    "nivel": "Atención",
    "texto": "Decidir la solicitud SC-08 (rediseño de la validación del modelo) en la revisión del Sprint 1.",
    "responsable": "Jhostin Galarza",
    "fecha": "06/11/2026"
   },
   {
    "nivel": "Atención",
    "texto": "Cargar las exportaciones de Cubicol y repetir la reconciliación en tres fechas (CP-03) antes de la aceptación del E-01.",
    "responsable": "Jadira Vasquez",
    "fecha": "04/12/2026"
   },
   {
    "nivel": "Seguimiento",
    "texto": "SC-09 (canal de las alertas por correo) y SC-10 (unificación de la EDT) siguen en evaluación.",
    "responsable": "Carlos Curo",
    "fecha": "Sprint 2"
   }
  ],
  "fueraDeAlcance": [
   {
    "texto": "Pantalla «Evaluar un caso»: evalúa a un estudiante con datos ingresados a mano. No figura en la matriz de requisitos.",
    "estado": "Por revisar",
    "accion": "Registrarla como solicitud de cambio o dejarla solo como demostración del modelo."
   }
  ],
  "requisitosCambiados": [],
  "paquetes": [
   {
    "id": "1.1.1",
    "nombre": "Cronograma de hitos",
    "componente": "1.1",
    "estado": "Cumplido",
    "pct": null,
    "existe": "Línea base del cronograma v3 (CRO-01), con la conformidad de la patrocinadora (12/10/2026).",
    "falta": "Mantenerla actualizada ante cada cambio.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.1.2",
    "nombre": "Informes de avance",
    "componente": "1.1",
    "estado": "En curso",
    "pct": null,
    "existe": "Informe de desempeño N.º 1 (GOB-09).",
    "falta": "Un informe al cierre de cada sprint.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.1.3",
    "nombre": "Actas y control de cambios",
    "componente": "1.1",
    "estado": "En curso",
    "pct": null,
    "existe": "Registro de cambios con 11 solicitudes (GOB-10) y acta de la reunión de inicio (GOB-12).",
    "falta": "Actas y cambios hasta el cierre.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.2.1",
    "nombre": "Integración de datos (ETL)",
    "componente": "1.2",
    "estado": "Cumplido en parte",
    "pct": 85,
    "existe": "Carga de la base consolidada de notas del colegio (3 878 notas de 173 estudiantes), sin duplicados y reconciliada. El colegio ya entrega las exportaciones de Cubicol de forma periódica, a través del Product Owner.",
    "falta": "Cargar las exportaciones periódicas de Cubicol y repetir la reconciliación en tres fechas (CP-03).",
    "entregable": "E-01",
    "revision": "2026-12-04",
    "cambio": true
   },
   {
    "id": "1.2.2",
    "nombre": "Calidad de datos",
    "componente": "1.2",
    "estado": "Cumplido en parte",
    "pct": 95,
    "existe": "Diez reglas de calidad y validación automática cada noche: 21 noches seguidas sin fallas, del 11/10 al 31/10/2026 (CP-05 cumplido el 25/10).",
    "falta": "Cotejar las notas transcritas de fotografías.",
    "entregable": "E-01",
    "revision": "2026-12-04",
    "cambio": true
   },
   {
    "id": "1.3.1",
    "nombre": "Entrenamiento del modelo",
    "componente": "1.3",
    "estado": "Cumplido",
    "pct": 100,
    "existe": "Red neuronal 35-32-16-8-1 entrenada con una base pública (Student Performance, UCI); clasifica en tres niveles.",
    "falta": "Volver a entrenarla cuando el colegio acumule datos propios.",
    "entregable": "E-02",
    "revision": "2026-12-30",
    "cambio": false
   },
   {
    "id": "1.3.2",
    "nombre": "Clasificación de riesgo",
    "componente": "1.3",
    "estado": "Prototipo",
    "pct": 50,
    "existe": "Clasifica a todos los estudiantes al cargar datos y con el botón «Evaluar aula».",
    "falta": "Ejecución semanal automática.",
    "entregable": "E-02",
    "revision": "2026-12-30",
    "cambio": false
   },
   {
    "id": "1.3.3",
    "nombre": "Validación del modelo",
    "componente": "1.3",
    "estado": "Cumplido en parte",
    "pct": 70,
    "existe": "Prueba con 209 registros no vistos: exactitud 83,7 %, AUC 0,95. Aplicada a 558 casos del colegio: en riesgo alto le fue mal al 55 %; en bajo, al 3 %.",
    "falta": "Cerrar la métrica acordada (SC-08) y contrastar las alertas con los docentes.",
    "entregable": "E-02",
    "revision": "2026-12-30",
    "cambio": false
   },
   {
    "id": "1.4.1",
    "nombre": "Motor de alertas",
    "componente": "1.4",
    "estado": "Prototipo",
    "pct": 40,
    "existe": "Lista de estudiantes en riesgo alto y comunicado al apoderado que el sistema redacta y el tutor envía por WhatsApp (REQ-12).",
    "falta": "Correo al tutor, historial de alertas y registro de seguimiento.",
    "entregable": "E-03",
    "revision": "2027-01-29",
    "cambio": false
   },
   {
    "id": "1.4.2.1",
    "nombre": "Diseño de la interfaz",
    "componente": "1.4",
    "estado": "Cumplido",
    "pct": 100,
    "existe": "Interfaz en línea revisada con los docentes tutores en el taller del 28/10/2026, que dieron su conformidad.",
    "falta": "Mantenerla al día con los ajustes de los sprints siguientes.",
    "entregable": "E-04",
    "revision": "2027-01-29",
    "cambio": true
   },
   {
    "id": "1.4.2.2",
    "nombre": "Desarrollo del tablero",
    "componente": "1.4",
    "estado": "Cumplido en parte",
    "pct": 75,
    "existe": "Indicadores por nivel y por aula, ficha del estudiante, reporte en PDF y exportación por aula.",
    "falta": "Filtros por fecha, comparación con el periodo anterior y prueba en Firefox y Edge.",
    "entregable": "E-04",
    "revision": "2027-01-29",
    "cambio": false
   },
   {
    "id": "1.4.2.3",
    "nombre": "Pruebas con usuarios",
    "componente": "1.4",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Pruebas con al menos tres docentes.",
    "entregable": "E-04",
    "revision": "2027-01-29",
    "cambio": false
   },
   {
    "id": "1.4.3",
    "nombre": "Roles y accesos",
    "componente": "1.4",
    "estado": "No iniciado",
    "pct": 5,
    "existe": "La tabla de usuarios con los cuatro roles está en la base de datos.",
    "falta": "Inicio de sesión y vistas por rol.",
    "entregable": "E-05",
    "revision": "2027-01-29",
    "cambio": false
   },
   {
    "id": "1.5.1",
    "nombre": "Despliegue del sistema",
    "componente": "1.5",
    "estado": "Prototipo",
    "pct": 40,
    "existe": "Sistema en línea (página en Vercel y API en Render) con datos de práctica.",
    "falta": "Base gestionada y entorno de producción con datos reales.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.5.2",
    "nombre": "Manual de usuario",
    "componente": "1.5",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Manual de usuario.",
    "entregable": "E-06",
    "revision": "2027-04-23",
    "cambio": false
   },
   {
    "id": "1.5.3",
    "nombre": "Manual técnico",
    "componente": "1.5",
    "estado": "Prototipo",
    "pct": 40,
    "existe": "Documentos de arquitectura, datos y variables, modelo y pruebas en el repositorio del sistema.",
    "falta": "Completarlo y validarlo con el encargado de TI.",
    "entregable": "E-07",
    "revision": "2027-04-23",
    "cambio": false
   },
   {
    "id": "1.5.4",
    "nombre": "Plan de capacitación",
    "componente": "1.5",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Plan de capacitación.",
    "entregable": "E-08",
    "revision": "2027-04-23",
    "cambio": false
   },
   {
    "id": "1.5.5",
    "nombre": "Capacitación y cierre",
    "componente": "1.5",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Capacitación y cierre.",
    "entregable": "E-08",
    "revision": "2027-04-23",
    "cambio": false
   },
   {
    "id": "1.6.1",
    "nombre": "Pruebas de integración y rendimiento",
    "componente": "1.6",
    "estado": "Prototipo",
    "pct": 20,
    "existe": "Pruebas del entregable E-01 y de los flujos de la página.",
    "falta": "Reporte formal de integración y prueba de rendimiento.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.6.2",
    "nombre": "Piloto y retroalimentación",
    "componente": "1.6",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Piloto con tres docentes tutores.",
    "entregable": "E-09",
    "revision": "2027-03-24",
    "cambio": false
   }
  ],
  "requisitos": [
   {
    "id": "REQ-01",
    "titulo": "Centralización de los datos académicos",
    "prioridad": "Alta",
    "entregable": "E-01",
    "paquete": "1.2.1",
    "casos": "CP-01 a CP-04",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-02",
    "titulo": "Limpieza y validación automática de los datos",
    "prioridad": "Alta",
    "entregable": "E-01",
    "paquete": "1.2.2",
    "casos": "CP-05 a CP-08",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-03",
    "titulo": "Modelo de clasificación del riesgo académico",
    "prioridad": "Alta",
    "entregable": "E-02",
    "paquete": "1.3.1 y 1.3.3",
    "casos": "CP-09 a CP-12",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-04",
    "titulo": "Actualización semanal automática del modelo",
    "prioridad": "Alta",
    "entregable": "E-02",
    "paquete": "1.3.2",
    "casos": "CP-13 a CP-16",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-05",
    "titulo": "Alertas automáticas por correo al docente tutor",
    "prioridad": "Alta",
    "entregable": "E-03",
    "paquete": "1.4.1",
    "casos": "CP-17 a CP-20",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-06",
    "titulo": "Panel web de alertas para el docente",
    "prioridad": "Alta",
    "entregable": "E-03",
    "paquete": "1.4.1",
    "casos": "CP-21 a CP-24",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-07",
    "titulo": "Registro del seguimiento de cada caso",
    "prioridad": "Media",
    "entregable": "E-03",
    "paquete": "1.4.1",
    "casos": "CP-25 a CP-28",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-08",
    "titulo": "Tablero de indicadores de riesgo",
    "prioridad": "Alta",
    "entregable": "E-04",
    "paquete": "1.4.2.2",
    "casos": "CP-29 a CP-32",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-09",
    "titulo": "Reportes exportables en PDF y Excel",
    "prioridad": "Media",
    "entregable": "E-04",
    "paquete": "1.4.2.2",
    "casos": "CP-33 a CP-36",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-10",
    "titulo": "Ficha individual del estudiante",
    "prioridad": "Alta",
    "entregable": "E-04",
    "paquete": "1.4.2.2",
    "casos": "CP-37 a CP-40",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-11",
    "titulo": "Roles y accesos diferenciados",
    "prioridad": "Alta",
    "entregable": "E-05",
    "paquete": "1.4.3",
    "casos": "CP-41 a CP-44",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-12",
    "titulo": "Comunicado al apoderado del estudiante en riesgo alto",
    "prioridad": "Media",
    "entregable": "E-03",
    "paquete": "1.4.1",
    "casos": "CP-45 a CP-48",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-01",
    "titulo": "Facilidad de uso",
    "prioridad": "Alta",
    "entregable": "E-04 y E-08",
    "paquete": "1.4.2.3 y 1.5.4",
    "casos": "CP-49 a CP-52",
    "estado": "Pendiente"
   },
   {
    "id": "RNF-02",
    "titulo": "Rendimiento del tablero",
    "prioridad": "Alta",
    "entregable": "E-04",
    "paquete": "1.6.1",
    "casos": "CP-53 a CP-56",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-03",
    "titulo": "Autenticación y control de acceso",
    "prioridad": "Alta",
    "entregable": "E-05",
    "paquete": "1.4.3",
    "casos": "CP-57 a CP-60",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-04",
    "titulo": "Cumplimiento de la Ley N.° 29733",
    "prioridad": "Alta",
    "entregable": "E-05 y E-07",
    "paquete": "1.5.1 y 1.5.3",
    "casos": "CP-61 a CP-64",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-05",
    "titulo": "Disponibilidad en horario escolar",
    "prioridad": "Alta",
    "entregable": "E-04",
    "paquete": "1.5.1",
    "casos": "CP-65 a CP-68",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-06",
    "titulo": "Compatibilidad con navegadores",
    "prioridad": "Media",
    "entregable": "E-04",
    "paquete": "1.4.2.2",
    "casos": "CP-69 a CP-72",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-07",
    "titulo": "Capacidad y escalabilidad",
    "prioridad": "Media",
    "entregable": "E-01 y E-04",
    "paquete": "1.6.1",
    "casos": "CP-73 a CP-76",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-08",
    "titulo": "Documentación y transferencia",
    "prioridad": "Media",
    "entregable": "E-07",
    "paquete": "1.5.3",
    "casos": "CP-77 a CP-80",
    "estado": "En desarrollo"
   }
  ]
 },
 {
  "fecha": "2026-11-07",
  "fuente": "Revisión del Sprint 1",
  "cambios": {
   "1.0.1": [
    "Cumplido",
    100,
    "Reunión de inicio del 12/10/2026 con la Dirección, con su acta (GOB-12).",
    "—"
   ],
   "1.0.2": [
    "Cumplido",
    100,
    "Fuentes de datos del colegio identificadas, con su calidad y disponibilidad descritas.",
    "—"
   ],
   "1.0.3": [
    "Cumplido",
    100,
    "Variables del modelo aprobadas por los docentes tutores en el taller del 28/10/2026.",
    "—"
   ],
   "1.0.4": [
    "Cumplido",
    100,
    "Documento de arquitectura aprobado en la revisión del Sprint 1 (06/11/2026).",
    "—"
   ],
   "1.3.3": [
    "Cumplido en parte",
    70,
    "Prueba con 209 registros no vistos: exactitud 83,7 %, AUC 0,95. Aplicada a 558 casos del colegio. La forma de validarlo (SC-08) se aprobó el 06/11/2026.",
    "Aplicar la validación aprobada en SC-08 con los datos del colegio."
   ]
  },
  "casos": [
   {
    "id": "CP-01",
    "estado": "Aprobado"
   },
   {
    "id": "CP-02",
    "estado": "Aprobado"
   },
   {
    "id": "CP-03",
    "estado": "Aprobado en parte"
   },
   {
    "id": "CP-04",
    "estado": "Aprobado"
   },
   {
    "id": "CP-05",
    "estado": "Aprobado"
   },
   {
    "id": "CP-06",
    "estado": "Aprobado"
   },
   {
    "id": "CP-07",
    "estado": "Aprobado"
   },
   {
    "id": "CP-08",
    "estado": "Aprobado"
   }
  ],
  "requisitosCambiados": [
   "REQ-03"
  ],
  "hechos": [
   "04/11: el Product Owner aprueba la EDT versión 4 (SC-10): componente 1.0 «Análisis y diseño» y cada actividad del cronograma enlazada a su paquete y su entregable. Se aplica el 07/11.",
   "06/11: revisión del Sprint 1 con el Product Owner. Se aprueban la arquitectura y la lista de variables del modelo: hito 1 cumplido.",
   "06/11: se aprueba sin cambios la solicitud SC-08 (validación del modelo); cambia el criterio de validación de REQ-03."
  ],
  "sprint": [
   {
    "que": "Arquitectura del sistema",
    "estado": "Cumplido",
    "evidencia": "Aprobada en la revisión del Sprint 1 (06/11/2026).",
    "url": "https://github.com/Jhostin2210/Proyecto-SIAT/blob/main/docs/arquitectura.md"
   },
   {
    "que": "Lista de variables del modelo validada con docentes",
    "estado": "Cumplido",
    "evidencia": "Taller del 28/10/2026 y revisión del Sprint 1 (06/11/2026)."
   }
  ],
  "alertas": [
   {
    "nivel": "Atención",
    "texto": "Cargar las exportaciones de Cubicol y repetir la reconciliación en tres fechas (CP-03) antes de la aceptación del E-01.",
    "responsable": "Jadira Vasquez",
    "fecha": "04/12/2026"
   },
   {
    "nivel": "Seguimiento",
    "texto": "SC-09 (canal de las alertas por correo) sigue en evaluación.",
    "responsable": "Carlos Curo",
    "fecha": "Sprint 2"
   }
  ],
  "fueraDeAlcance": [
   {
    "texto": "Pantalla «Evaluar un caso»: evalúa a un estudiante con datos ingresados a mano. No figura en la matriz de requisitos.",
    "estado": "Por revisar",
    "accion": "Registrarla como solicitud de cambio o dejarla solo como demostración del modelo."
   }
  ],
  "paquetes": [
   {
    "id": "1.0.1",
    "nombre": "Levantamiento del alcance",
    "componente": "1.0",
    "estado": "Cumplido",
    "pct": 100,
    "existe": "Reunión de inicio del 12/10/2026 con la Dirección, con su acta (GOB-12).",
    "falta": "—",
    "entregable": null,
    "revision": "2026-11-06",
    "cambio": true
   },
   {
    "id": "1.0.2",
    "nombre": "Diagnóstico de los datos",
    "componente": "1.0",
    "estado": "Cumplido",
    "pct": 100,
    "existe": "Fuentes de datos del colegio identificadas, con su calidad y disponibilidad descritas.",
    "falta": "—",
    "entregable": null,
    "revision": "2026-11-06",
    "cambio": true
   },
   {
    "id": "1.0.3",
    "nombre": "Variables del modelo",
    "componente": "1.0",
    "estado": "Cumplido",
    "pct": 100,
    "existe": "Variables del modelo aprobadas por los docentes tutores en el taller del 28/10/2026.",
    "falta": "—",
    "entregable": null,
    "revision": "2026-11-06",
    "cambio": true
   },
   {
    "id": "1.0.4",
    "nombre": "Arquitectura del sistema",
    "componente": "1.0",
    "estado": "Cumplido",
    "pct": 100,
    "existe": "Documento de arquitectura aprobado en la revisión del Sprint 1 (06/11/2026).",
    "falta": "—",
    "entregable": null,
    "revision": "2026-11-06",
    "cambio": true
   },
   {
    "id": "1.1.1",
    "nombre": "Cronograma de hitos",
    "componente": "1.1",
    "estado": "Cumplido",
    "pct": null,
    "existe": "Línea base del cronograma v3 (CRO-01), con la conformidad de la patrocinadora (12/10/2026).",
    "falta": "Mantenerla actualizada ante cada cambio.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.1.2",
    "nombre": "Informes de avance",
    "componente": "1.1",
    "estado": "En curso",
    "pct": null,
    "existe": "Informe de desempeño N.º 1 (GOB-09).",
    "falta": "Un informe al cierre de cada sprint.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.1.3",
    "nombre": "Actas y control de cambios",
    "componente": "1.1",
    "estado": "En curso",
    "pct": null,
    "existe": "Registro de cambios con 11 solicitudes (GOB-10) y acta de la reunión de inicio (GOB-12).",
    "falta": "Actas y cambios hasta el cierre.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.2.1",
    "nombre": "Integración de datos (ETL)",
    "componente": "1.2",
    "estado": "Cumplido en parte",
    "pct": 85,
    "existe": "Carga de la base consolidada de notas del colegio (3 878 notas de 173 estudiantes), sin duplicados y reconciliada. El colegio ya entrega las exportaciones de Cubicol de forma periódica, a través del Product Owner.",
    "falta": "Cargar las exportaciones periódicas de Cubicol y repetir la reconciliación en tres fechas (CP-03).",
    "entregable": "E-01",
    "revision": "2026-12-04",
    "cambio": false
   },
   {
    "id": "1.2.2",
    "nombre": "Calidad de datos",
    "componente": "1.2",
    "estado": "Cumplido en parte",
    "pct": 95,
    "existe": "Diez reglas de calidad y validación automática cada noche: 21 noches seguidas sin fallas, del 11/10 al 31/10/2026 (CP-05 cumplido el 25/10).",
    "falta": "Cotejar las notas transcritas de fotografías.",
    "entregable": "E-01",
    "revision": "2026-12-04",
    "cambio": false
   },
   {
    "id": "1.3.1",
    "nombre": "Entrenamiento del modelo",
    "componente": "1.3",
    "estado": "Cumplido",
    "pct": 100,
    "existe": "Red neuronal 35-32-16-8-1 entrenada con una base pública (Student Performance, UCI); clasifica en tres niveles.",
    "falta": "Volver a entrenarla cuando el colegio acumule datos propios.",
    "entregable": "E-02",
    "revision": "2026-12-30",
    "cambio": false
   },
   {
    "id": "1.3.2",
    "nombre": "Clasificación de riesgo",
    "componente": "1.3",
    "estado": "Prototipo",
    "pct": 50,
    "existe": "Clasifica a todos los estudiantes al cargar datos y con el botón «Evaluar aula».",
    "falta": "Ejecución semanal automática.",
    "entregable": "E-02",
    "revision": "2026-12-30",
    "cambio": false
   },
   {
    "id": "1.3.3",
    "nombre": "Validación del modelo",
    "componente": "1.3",
    "estado": "Cumplido en parte",
    "pct": 70,
    "existe": "Prueba con 209 registros no vistos: exactitud 83,7 %, AUC 0,95. Aplicada a 558 casos del colegio. La forma de validarlo (SC-08) se aprobó el 06/11/2026.",
    "falta": "Aplicar la validación aprobada en SC-08 con los datos del colegio.",
    "entregable": "E-02",
    "revision": "2026-12-30",
    "cambio": true
   },
   {
    "id": "1.4.1",
    "nombre": "Motor de alertas",
    "componente": "1.4",
    "estado": "Prototipo",
    "pct": 40,
    "existe": "Lista de estudiantes en riesgo alto y comunicado al apoderado que el sistema redacta y el tutor envía por WhatsApp (REQ-12).",
    "falta": "Correo al tutor, historial de alertas y registro de seguimiento.",
    "entregable": "E-03",
    "revision": "2027-01-29",
    "cambio": false
   },
   {
    "id": "1.4.2.1",
    "nombre": "Diseño de la interfaz",
    "componente": "1.4",
    "estado": "Cumplido",
    "pct": 100,
    "existe": "Interfaz en línea revisada con los docentes tutores en el taller del 28/10/2026, que dieron su conformidad.",
    "falta": "Mantenerla al día con los ajustes de los sprints siguientes.",
    "entregable": "E-04",
    "revision": "2027-01-29",
    "cambio": false
   },
   {
    "id": "1.4.2.2",
    "nombre": "Desarrollo del tablero",
    "componente": "1.4",
    "estado": "Cumplido en parte",
    "pct": 75,
    "existe": "Indicadores por nivel y por aula, ficha del estudiante, reporte en PDF y exportación por aula.",
    "falta": "Filtros por fecha, comparación con el periodo anterior y prueba en Firefox y Edge.",
    "entregable": "E-04",
    "revision": "2027-01-29",
    "cambio": false
   },
   {
    "id": "1.4.2.3",
    "nombre": "Pruebas con usuarios",
    "componente": "1.4",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Pruebas con al menos tres docentes.",
    "entregable": "E-04",
    "revision": "2027-01-29",
    "cambio": false
   },
   {
    "id": "1.4.3",
    "nombre": "Roles y accesos",
    "componente": "1.4",
    "estado": "No iniciado",
    "pct": 5,
    "existe": "La tabla de usuarios con los cuatro roles está en la base de datos.",
    "falta": "Inicio de sesión y vistas por rol.",
    "entregable": "E-05",
    "revision": "2027-01-29",
    "cambio": false
   },
   {
    "id": "1.5.1",
    "nombre": "Despliegue del sistema",
    "componente": "1.5",
    "estado": "Prototipo",
    "pct": 40,
    "existe": "Sistema en línea (página en Vercel y API en Render) con datos de práctica.",
    "falta": "Base gestionada y entorno de producción con datos reales.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.5.2",
    "nombre": "Manual de usuario",
    "componente": "1.5",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Manual de usuario.",
    "entregable": "E-06",
    "revision": "2027-04-23",
    "cambio": false
   },
   {
    "id": "1.5.3",
    "nombre": "Manual técnico",
    "componente": "1.5",
    "estado": "Prototipo",
    "pct": 40,
    "existe": "Documentos de arquitectura, datos y variables, modelo y pruebas en el repositorio del sistema.",
    "falta": "Completarlo y validarlo con el encargado de TI.",
    "entregable": "E-07",
    "revision": "2027-04-23",
    "cambio": false
   },
   {
    "id": "1.5.4",
    "nombre": "Plan de capacitación",
    "componente": "1.5",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Plan de capacitación.",
    "entregable": "E-08",
    "revision": "2027-04-23",
    "cambio": false
   },
   {
    "id": "1.5.5",
    "nombre": "Capacitación y cierre",
    "componente": "1.5",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Capacitación y cierre.",
    "entregable": "E-08",
    "revision": "2027-04-23",
    "cambio": false
   },
   {
    "id": "1.6.1",
    "nombre": "Pruebas de integración y rendimiento",
    "componente": "1.6",
    "estado": "Prototipo",
    "pct": 20,
    "existe": "Pruebas del entregable E-01 y de los flujos de la página.",
    "falta": "Reporte formal de integración y prueba de rendimiento.",
    "entregable": null,
    "revision": null,
    "cambio": false
   },
   {
    "id": "1.6.2",
    "nombre": "Piloto y retroalimentación",
    "componente": "1.6",
    "estado": "No iniciado",
    "pct": 0,
    "existe": "—",
    "falta": "Piloto con tres docentes tutores.",
    "entregable": "E-09",
    "revision": "2027-03-24",
    "cambio": false
   }
  ],
  "requisitos": [
   {
    "id": "REQ-01",
    "titulo": "Centralización de los datos académicos",
    "prioridad": "Alta",
    "entregable": "E-01",
    "paquete": "1.2.1",
    "casos": "CP-01 a CP-04",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-02",
    "titulo": "Limpieza y validación automática de los datos",
    "prioridad": "Alta",
    "entregable": "E-01",
    "paquete": "1.2.2",
    "casos": "CP-05 a CP-08",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-03",
    "titulo": "Modelo de clasificación del riesgo académico",
    "prioridad": "Alta",
    "entregable": "E-02",
    "paquete": "1.3.1 y 1.3.3",
    "casos": "CP-09 a CP-12",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-04",
    "titulo": "Actualización semanal automática del modelo",
    "prioridad": "Alta",
    "entregable": "E-02",
    "paquete": "1.3.2",
    "casos": "CP-13 a CP-16",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-05",
    "titulo": "Alertas automáticas por correo al docente tutor",
    "prioridad": "Alta",
    "entregable": "E-03",
    "paquete": "1.4.1",
    "casos": "CP-17 a CP-20",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-06",
    "titulo": "Panel web de alertas para el docente",
    "prioridad": "Alta",
    "entregable": "E-03",
    "paquete": "1.4.1",
    "casos": "CP-21 a CP-24",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-07",
    "titulo": "Registro del seguimiento de cada caso",
    "prioridad": "Media",
    "entregable": "E-03",
    "paquete": "1.4.1",
    "casos": "CP-25 a CP-28",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-08",
    "titulo": "Tablero de indicadores de riesgo",
    "prioridad": "Alta",
    "entregable": "E-04",
    "paquete": "1.4.2.2",
    "casos": "CP-29 a CP-32",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-09",
    "titulo": "Reportes exportables en PDF y Excel",
    "prioridad": "Media",
    "entregable": "E-04",
    "paquete": "1.4.2.2",
    "casos": "CP-33 a CP-36",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-10",
    "titulo": "Ficha individual del estudiante",
    "prioridad": "Alta",
    "entregable": "E-04",
    "paquete": "1.4.2.2",
    "casos": "CP-37 a CP-40",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-11",
    "titulo": "Roles y accesos diferenciados",
    "prioridad": "Alta",
    "entregable": "E-05",
    "paquete": "1.4.3",
    "casos": "CP-41 a CP-44",
    "estado": "En desarrollo"
   },
   {
    "id": "REQ-12",
    "titulo": "Comunicado al apoderado del estudiante en riesgo alto",
    "prioridad": "Media",
    "entregable": "E-03",
    "paquete": "1.4.1",
    "casos": "CP-45 a CP-48",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-01",
    "titulo": "Facilidad de uso",
    "prioridad": "Alta",
    "entregable": "E-04 y E-08",
    "paquete": "1.4.2.3 y 1.5.4",
    "casos": "CP-49 a CP-52",
    "estado": "Pendiente"
   },
   {
    "id": "RNF-02",
    "titulo": "Rendimiento del tablero",
    "prioridad": "Alta",
    "entregable": "E-04",
    "paquete": "1.6.1",
    "casos": "CP-53 a CP-56",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-03",
    "titulo": "Autenticación y control de acceso",
    "prioridad": "Alta",
    "entregable": "E-05",
    "paquete": "1.4.3",
    "casos": "CP-57 a CP-60",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-04",
    "titulo": "Cumplimiento de la Ley N.° 29733",
    "prioridad": "Alta",
    "entregable": "E-05 y E-07",
    "paquete": "1.5.1 y 1.5.3",
    "casos": "CP-61 a CP-64",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-05",
    "titulo": "Disponibilidad en horario escolar",
    "prioridad": "Alta",
    "entregable": "E-04",
    "paquete": "1.5.1",
    "casos": "CP-65 a CP-68",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-06",
    "titulo": "Compatibilidad con navegadores",
    "prioridad": "Media",
    "entregable": "E-04",
    "paquete": "1.4.2.2",
    "casos": "CP-69 a CP-72",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-07",
    "titulo": "Capacidad y escalabilidad",
    "prioridad": "Media",
    "entregable": "E-01 y E-04",
    "paquete": "1.6.1",
    "casos": "CP-73 a CP-76",
    "estado": "En desarrollo"
   },
   {
    "id": "RNF-08",
    "titulo": "Documentación y transferencia",
    "prioridad": "Media",
    "entregable": "E-07",
    "paquete": "1.5.3",
    "casos": "CP-77 a CP-80",
    "estado": "En desarrollo"
   }
  ]
 }
];

export const COMPONENTES_EDT = [
 {
  "id": "1.0",
  "nombre": "Análisis y diseño",
  "descripcion": "Levantamiento del alcance, diagnóstico de los datos, variables del modelo y arquitectura del sistema."
 },
 {
  "id": "1.1",
  "nombre": "Gestión del proyecto",
  "descripcion": "Planificación, seguimiento y control del proyecto."
 },
 {
  "id": "1.2",
  "nombre": "Datos e integración",
  "descripcion": "Integración, validación y preparación de los datos académicos."
 },
 {
  "id": "1.3",
  "nombre": "Modelo ML predictivo",
  "descripcion": "Entrenamiento, validación y clasificación del riesgo."
 },
 {
  "id": "1.4",
  "nombre": "Alertas y tablero",
  "descripcion": "Alertas automáticas, tablero web y control de accesos."
 },
 {
  "id": "1.5",
  "nombre": "Implantación y cierre",
  "descripcion": "Despliegue, documentación, capacitación y cierre."
 },
 {
  "id": "1.6",
  "nombre": "Pruebas y piloto",
  "descripcion": "Pruebas de integración y rendimiento, y piloto con docentes."
 }
];

export const DRIVE_CARPETA = "https://drive.google.com/drive/folders/1XRES5CZ7T-1BxqLaRGALFxZDjROnNjF7";

export const COMPONENTES = [
 {
  "id": "1.0",
  "nombre": "Análisis y diseño",
  "descripcion": "Levantamiento del alcance, diagnóstico de los datos, variables del modelo y arquitectura del sistema."
 },
 {
  "id": "1.1",
  "nombre": "Gestión del proyecto",
  "descripcion": "Planificación, seguimiento y control del proyecto."
 },
 {
  "id": "1.2",
  "nombre": "Datos e integración",
  "descripcion": "Integración, validación y preparación de los datos académicos."
 },
 {
  "id": "1.3",
  "nombre": "Modelo ML predictivo",
  "descripcion": "Entrenamiento, validación y clasificación del riesgo."
 },
 {
  "id": "1.4",
  "nombre": "Alertas y tablero",
  "descripcion": "Alertas automáticas, tablero web y control de accesos."
 },
 {
  "id": "1.5",
  "nombre": "Implantación y cierre",
  "descripcion": "Despliegue, documentación, capacitación y cierre."
 },
 {
  "id": "1.6",
  "nombre": "Pruebas y piloto",
  "descripcion": "Pruebas de integración y rendimiento, y piloto con docentes."
 }
];

export const PAQUETES = [
 {
  "id": "1.0.1",
  "nombre": "Levantamiento del alcance",
  "responsable": "Jhostin Galarza",
  "entregable": "Acta de la reunión de levantamiento",
  "criterio": "Alcance y acceso a los datos validados con la Dirección y registrados en un acta.",
  "origen": "v4"
 },
 {
  "id": "1.0.2",
  "nombre": "Diagnóstico de los datos",
  "responsable": "Jadira Vasquez",
  "entregable": "Informe de calidad y disponibilidad de los datos",
  "criterio": "Fuentes de datos del colegio identificadas, con su calidad y disponibilidad descritas.",
  "origen": "v4"
 },
 {
  "id": "1.0.3",
  "nombre": "Variables del modelo",
  "responsable": "Helber Perez",
  "entregable": "Lista de variables validada con docentes",
  "criterio": "Variables del modelo revisadas y aprobadas por los docentes tutores en un taller.",
  "origen": "v4"
 },
 {
  "id": "1.0.4",
  "nombre": "Arquitectura del sistema",
  "responsable": "Jadira Vasquez",
  "entregable": "Documento de arquitectura",
  "criterio": "Módulos, flujo de datos y tecnologías definidos y aprobados en la revisión del Sprint 1.",
  "origen": "v4"
 },
 {
  "id": "1.1.1",
  "nombre": "Cronograma de hitos",
  "responsable": "Jhostin Galarza",
  "entregable": "Cronograma aprobado",
  "criterio": "Cronograma aprobado y actualizado ante cada cambio del plan.",
  "origen": "ambos"
 },
 {
  "id": "1.1.2",
  "nombre": "Informes de avance",
  "responsable": "Jhostin Galarza",
  "entregable": "Informes de desempeño por sprint",
  "criterio": "Un informe por sprint que refleja el estado real del proyecto.",
  "origen": "ambos"
 },
 {
  "id": "1.1.3",
  "nombre": "Actas y control de cambios",
  "responsable": "Carlos Curo",
  "entregable": "Registro de cambios al día",
  "criterio": "Toda reunión con acuerdos escritos; todo cambio documentado y decidido antes de aplicarse.",
  "origen": "ambos"
 },
 {
  "id": "1.2.1",
  "nombre": "Integración de datos (ETL)",
  "responsable": "Jadira Vasquez",
  "entregable": "Procesos de carga implementados",
  "criterio": "Carga sin duplicados, validada con reconciliación en tres fechas.",
  "origen": "ambos"
 },
 {
  "id": "1.2.2",
  "nombre": "Calidad de datos",
  "responsable": "Jadira Vasquez",
  "entregable": "Base de datos integrada y validada",
  "criterio": "Sin vacíos críticos, duplicados ni inconsistencias; reporte de calidad con métricas de completitud.",
  "origen": "ambos"
 },
 {
  "id": "1.3.1",
  "nombre": "Entrenamiento del modelo",
  "responsable": "Helber Perez",
  "entregable": "Modelo entrenado",
  "criterio": "El modelo se entrena con los datos disponibles y genera los tres niveles de riesgo.",
  "origen": "ambos"
 },
 {
  "id": "1.3.2",
  "nombre": "Clasificación de riesgo",
  "responsable": "Helber Perez",
  "entregable": "Clasificación semanal automática",
  "criterio": "Clasifica a todos los estudiantes activos cada semana sin intervención manual.",
  "origen": "ambos"
 },
 {
  "id": "1.3.3",
  "nombre": "Validación del modelo",
  "responsable": "Helber Perez",
  "entregable": "Informe de validación del modelo",
  "criterio": "Alcanza el umbral mínimo de 75 % en la métrica acordada, con datos reales (SC-08).",
  "origen": "ambos"
 },
 {
  "id": "1.4.1",
  "nombre": "Motor de alertas",
  "responsable": "Jadira Vasquez",
  "entregable": "Alertas por correo y panel web",
  "criterio": "Alertas enviadas en 24 horas como máximo, con historial.",
  "origen": "ambos"
 },
 {
  "id": "1.4.2.1",
  "nombre": "Diseño de la interfaz",
  "responsable": "Carlos Curo",
  "entregable": "Prototipo validado",
  "criterio": "Maquetas aprobadas por el equipo y mostradas a docentes antes de desarrollar.",
  "origen": "ambos"
 },
 {
  "id": "1.4.2.2",
  "nombre": "Desarrollo del tablero",
  "responsable": "Carlos Curo",
  "entregable": "Tablero implementado",
  "criterio": "Carga en menos de 3 segundos y funciona en Chrome, Firefox y Edge.",
  "origen": "ambos"
 },
 {
  "id": "1.4.2.3",
  "nombre": "Pruebas con usuarios",
  "responsable": "Jhostin Galarza",
  "entregable": "Reporte de validación de uso",
  "criterio": "Pruebas con al menos 3 docentes y observaciones atendidas.",
  "origen": "ambos"
 },
 {
  "id": "1.4.3",
  "nombre": "Roles y accesos",
  "responsable": "Jhostin Galarza",
  "entregable": "Control de acceso por rol",
  "criterio": "Cada rol ve solo lo que le corresponde; verificado con pruebas de acceso.",
  "origen": "ambos"
 },
 {
  "id": "1.5.1",
  "nombre": "Despliegue del sistema",
  "responsable": "Jadira Vasquez",
  "entregable": "Sistema en producción en la nube",
  "criterio": "Sistema operativo en el entorno de producción y accesos de administración entregados al colegio.",
  "origen": "ambos"
 },
 {
  "id": "1.5.2",
  "nombre": "Manual de usuario",
  "responsable": "Carlos Curo",
  "entregable": "Manual de usuario",
  "criterio": "Validado con al menos un docente y un coordinador.",
  "origen": "ambos"
 },
 {
  "id": "1.5.3",
  "nombre": "Manual técnico",
  "responsable": "Helber Perez",
  "entregable": "Manual técnico",
  "criterio": "Validado en la sesión de transferencia con el encargado de TI.",
  "origen": "ambos"
 },
 {
  "id": "1.5.4",
  "nombre": "Plan de capacitación",
  "responsable": "Jhostin Galarza",
  "entregable": "Plan de capacitación",
  "criterio": "Programa de dos horas aprobado por la coordinación.",
  "origen": "ambos"
 },
 {
  "id": "1.5.5",
  "nombre": "Capacitación y cierre",
  "responsable": "Jhostin Galarza",
  "entregable": "Usuarios capacitados y acta de cierre",
  "criterio": "Al menos 80 % de tutores y coordinadores capacitados; acta de cierre firmada.",
  "origen": "ambos"
 },
 {
  "id": "1.6.1",
  "nombre": "Pruebas de integración y rendimiento",
  "responsable": "Equipo del proyecto",
  "entregable": "Reporte de pruebas",
  "criterio": "Módulos integrados sin errores críticos; tablero en menos de 3 segundos.",
  "origen": "ambos"
 },
 {
  "id": "1.6.2",
  "nombre": "Piloto y retroalimentación",
  "responsable": "Equipo del proyecto",
  "entregable": "Informe del piloto",
  "criterio": "Dos semanas de uso por 3 docentes tutores y ajustes aplicados.",
  "origen": "ambos"
 }
];

export const TOTALES_ALCANCE = {
 "requisitos": 20,
 "funcionales": 12,
 "noFuncionales": 8,
 "alta": 14,
 "casosDePrueba": 80,
 "paquetes": 24,
 "paquetesDeclaracion": 20
};

export const CAMBIOS = [
 {
  "id": "SC-01",
  "titulo": "Cambio de equipo y reasignación de paquetes de trabajo",
  "origen": "Inicio del nuevo periodo académico: dos integrantes dejan el equipo y dos se incorporan.",
  "impacto": "Responsables en la EDT, en el cronograma y en el blog.",
  "estado": "Aprobado",
  "decision": "Equipo del proyecto, 10/10/2026",
  "aplicacion": "Aplicado en la EDT, en el cronograma v3 y en el blog."
 },
 {
  "id": "SC-02",
  "titulo": "Replanificación del calendario",
  "origen": "El calendario anterior (marzo a agosto de 2026) ya venció y ubicaba el piloto en vacaciones escolares.",
  "impacto": "Línea base del cronograma: del 12/10/2026 al 23/04/2027, receso en febrero y piloto en marzo. Línea base de costos: mismas cifras, nuevas fechas. El objetivo se mide en el año escolar 2027.",
  "estado": "Aprobado",
  "decision": "Equipo del proyecto, 10/10/2026. Conformidad de la patrocinadora en la reunión de inicio, 12/10/2026 (GOB-12).",
  "aplicacion": "Aplicado en el cronograma v3. Pendiente: distribución de costos por fechas."
 },
 {
  "id": "SC-03",
  "titulo": "Alojamiento en servicios gestionados en la nube",
  "origen": "El colegio no tiene personal dedicado a administrar un servidor; tres requisitos ya citaban servicios en la nube.",
  "impacto": "Exclusiones del alcance, requisitos no funcionales, paquetes 1.4.1 y 1.5.1 de la EDT, actividad A-5.1.1.1, abastecimiento y categoría de servicios de los costos. Agrega obligaciones de protección de datos.",
  "estado": "Aprobado",
  "decision": "Equipo del proyecto, 10/10/2026. Conformidad de la patrocinadora en la reunión de inicio, 12/10/2026 (GOB-12).",
  "aplicacion": "Aplicado en el enunciado del alcance v3, en el cronograma v3 y en GOB-05. Pendiente: capítulos de alternativas y de costos del blog."
 },
 {
  "id": "SC-04",
  "titulo": "Tres niveles de riesgo y cuatro roles de usuario como estándar",
  "origen": "Los requisitos definen tres niveles (bajo, medio, alto) y cuatro roles; el prototipo y su base de datos usan cuatro niveles y tres roles.",
  "impacto": "Base de datos, modelo y prototipo.",
  "estado": "Aprobado",
  "decision": "Equipo del proyecto, 10/10/2026",
  "aplicacion": "Tres niveles aplicados en los documentos y en el prototipo (10/10/2026). Los roles siguen pendientes en el prototipo (Sprint 4)."
 },
 {
  "id": "SC-05",
  "titulo": "Corrección de la validez del instrumento",
  "origen": "El documento reportaba 0.90 con una fórmula para cinco jueces; opinaron dos, con 88 de 100 puntos.",
  "impacto": "Validez del cuestionario: 0.88 (88 %), que se mantiene en la categoría «muy bueno».",
  "estado": "Aprobado",
  "decision": "Equipo del proyecto, 10/10/2026",
  "aplicacion": "Aplicado en los documentos nuevos."
 },
 {
  "id": "SC-06",
  "titulo": "Corrección del número de actividades y de los totales PERT",
  "origen": "El texto del cronograma decía 40 actividades; sus tablas y el modelo de costos suman 44 más la reunión diaria. Las desviaciones estándar por sprint y el número de actividades críticas tampoco coincidían con la tabla.",
  "impacto": "Texto y totales del cronograma y del blog. No cambian las duraciones ni las fechas.",
  "estado": "Aprobado",
  "decision": "Equipo del proyecto, 10/10/2026",
  "aplicacion": "Aplicado en CRO-01 y en el blog."
 },
 {
  "id": "SC-07",
  "titulo": "Adopción de la octava edición de la Guía del PMBOK®",
  "origen": "El curso Gestión de Proyecto de TI trabaja con la octava edición; los documentos anteriores citan la sexta.",
  "impacto": "Estructura por dominios de desempeño y áreas de enfoque; nombres de los procesos.",
  "estado": "Aprobado",
  "decision": "Equipo del proyecto, 10/10/2026",
  "aplicacion": "Aplicado en los documentos nuevos y en el blog. Pendiente: capítulo de finanzas."
 },
 {
  "id": "SC-08",
  "titulo": "Rediseño de la validación del modelo de Machine Learning",
  "origen": "En el conjunto de datos del prototipo, la etiqueta de riesgo se calcula con las mismas notas que se usan como variables, por lo que la precisión obtenida no demuestra capacidad de predicción.",
  "impacto": "Criterio de validación del requisito REQ-03 y paquete 1.3: predecir el periodo siguiente con datos reales anonimizados, comparar contra una regla simple, medir la proporción de estudiantes en riesgo detectados y retirar la variable de pensiones.",
  "estado": "Aprobado",
  "decidido": "2026-11-06",
  "decision": "Aprobado sin cambios en la revisión del Sprint 1 (06/11/2026).",
  "aplicacion": "Criterio de validación de REQ-03 y paquete 1.3.3 (validación del modelo)."
 },
 {
  "id": "SC-09",
  "titulo": "Canal de las alertas por correo",
  "origen": "El diseño asumía un correo institucional que el colegio no tiene; los docentes usan correos personales.",
  "impacto": "Requisito REQ-05 y paquete 1.4.1: servicio de envío de correo a direcciones personales autorizadas.",
  "estado": "En evaluación",
  "decision": "Requiere la lista de correos y la conformidad de la Dirección. Se decide en el Sprint 1.",
  "aplicacion": "—"
 },
 {
  "id": "SC-10",
  "titulo": "Unificación de la EDT y de su diccionario, y enlace con el cronograma (EDT versión 4)",
  "origen": "La declaración del alcance lista 18 paquetes de trabajo y el diccionario describe 20. Además, las actividades del cronograma usan la numeración anterior de la EDT y las del Sprint 1 (análisis y diseño) no tienen paquete propio.",
  "impacto": "Línea base del alcance (EDT y diccionario) y cronograma: componente 1.0 «Análisis y diseño» con cuatro paquetes, cada actividad enlazada a su paquete y con su entregable.",
  "estado": "Aprobado",
  "decidido": "2026-11-04",
  "decision": "Aprobado por el Product Owner el 04/11/2026.",
  "aplicacion": "EDT versión 4 en el enunciado del alcance (ALC-02 v4.0) y en el cronograma (CRO-01 v3.1), el 07/11/2026."
 },
 {
  "id": "SC-11",
  "titulo": "Comunicación con el colegio a través del Product Owner",
  "origen": "En la reunión de inicio se acordó que no habrá más reuniones con la Dirección, por el cruce de horarios del equipo, y que el contacto con el colegio será Helber Perez, docente de la institución, integrante del equipo y Product Owner.",
  "impacto": "Plan de comunicaciones (INT-03): las entrevistas y los pedidos de datos se canalizan por el Product Owner, y las revisiones de sprint se le presentan a él. Agrega la restricción R-08 y el supuesto S-12 (GOB-03).",
  "estado": "Aprobado",
  "decision": "Patrocinadora y equipo, reunión de inicio, 12/10/2026 (GOB-12)",
  "aplicacion": "Aplicado en INT-03, INT-06 y el tablero de comunicaciones el 17/10/2026."
 }
];

export const INCIDENTES = [
 {
  "id": "IN-01",
  "tipo": "Datos",
  "descripcion": "No está confirmado el acceso a los datos de Cubicol: no se ha comprobado que exista una API y las exportaciones dependen de la gestora de la plataforma.",
  "origen": "Equipo, 10/10/2026",
  "prioridad": "Alta",
  "asignado": "Jadira Vasquez",
  "limite": "23/10/2026",
  "estado": "Abierto",
  "accion": "Pedido de las exportaciones a través del Product Owner, programado para el 20/10/2026 (SC-11)."
 },
 {
  "id": "IN-02",
  "tipo": "Datos",
  "descripcion": "La asistencia y las incidencias solo existen en papel y en mensajes; no hay datos digitales para el modelo.",
  "origen": "Entrevista, 24/04/2026",
  "prioridad": "Alta",
  "asignado": "Jadira Vasquez",
  "limite": "04/12/2026",
  "estado": "Abierto",
  "accion": "Definir con la Jefa de Normas un registro digital simple (Sprint 2)."
 },
 {
  "id": "IN-03",
  "tipo": "Producto",
  "descripcion": "El prototipo calcula el riesgo con reglas escritas a mano y muestra métricas que no provienen de un entrenamiento real.",
  "origen": "Revisión de calidad, 10/10/2026",
  "prioridad": "Alta",
  "asignado": "Helber Perez",
  "limite": "30/12/2026",
  "estado": "Cerrado",
  "accion": "Reemplazado por una red neuronal entrenada y probada con una base pública y aplicada a los datos del colegio; sus métricas salen del entrenamiento (ALC-05 N.º 2, 17/10/2026)."
 },
 {
  "id": "IN-04",
  "tipo": "Datos personales",
  "descripcion": "Los archivos de trabajo contienen nombres y notas reales de estudiantes: hojas de cálculo, fotos de cuadernos y datos de carga de la base.",
  "origen": "Revisión de calidad, 10/10/2026",
  "prioridad": "Alta",
  "asignado": "Helber Perez",
  "limite": "23/10/2026",
  "estado": "Abierto",
  "accion": "Retirarlos de las carpetas compartidas, reemplazar nombres por códigos y no subirlos al repositorio."
 },
 {
  "id": "IN-05",
  "tipo": "Interesados",
  "descripcion": "La segunda entrevista, al soporte técnico y a la gestora de Cubicol, no se realizó; la guía está lista desde mayo.",
  "origen": "Equipo, 10/10/2026",
  "prioridad": "Media",
  "asignado": "Jadira Vasquez",
  "limite": "23/10/2026",
  "estado": "Cerrado",
  "accion": "Reemplazada: en la reunión de inicio se acordó canalizar la comunicación con el colegio por el Product Owner (SC-11)."
 },
 {
  "id": "IN-06",
  "tipo": "Calidad",
  "descripcion": "Los documentos heredados discrepan en fechas, número de actividades, niveles de riesgo y guía de referencia.",
  "origen": "Revisión de calidad, 10/10/2026",
  "prioridad": "Media",
  "asignado": "Carlos Curo",
  "limite": "10/10/2026",
  "estado": "Cerrado",
  "accion": "Cambios SC-02, SC-04, SC-06 y SC-07 aprobados; documentos nuevos emitidos."
 },
 {
  "id": "IN-07",
  "tipo": "Comunicación",
  "descripcion": "No existe correo institucional para los docentes; las alertas se diseñaron para ese canal.",
  "origen": "Entrevista, 24/04/2026",
  "prioridad": "Media",
  "asignado": "Jadira Vasquez",
  "limite": "06/11/2026",
  "estado": "Abierto",
  "accion": "Solicitud SC-09 en evaluación: envío a correos personales autorizados."
 },
 {
  "id": "IN-08",
  "tipo": "Gestión",
  "descripcion": "Varios enlaces del blog apuntan a documentos guardados en la cuenta de un integrante que ya no está en el equipo.",
  "origen": "Equipo, 10/10/2026",
  "prioridad": "Media",
  "asignado": "Carlos Curo",
  "limite": "06/11/2026",
  "estado": "En curso",
  "accion": "Los documentos nuevos se publican en el propio blog; los anteriores se migran al trabajar cada dominio."
 },
 {
  "id": "IN-09",
  "tipo": "Cronograma",
  "descripcion": "El calendario anterior ubicaba el piloto con docentes en vacaciones escolares.",
  "origen": "Equipo, 10/10/2026",
  "prioridad": "Alta",
  "asignado": "Jhostin Galarza",
  "limite": "10/10/2026",
  "estado": "Cerrado",
  "accion": "Cambio SC-02 aprobado: receso en febrero y piloto en marzo."
 },
 {
  "id": "IN-10",
  "tipo": "Alcance",
  "descripcion": "En la entrevista se ofreció elaborar guías para que los padres ingresen a Cubicol; ese trabajo no figura en ninguna línea base.",
  "origen": "Revisión de calidad, 10/10/2026",
  "prioridad": "Baja",
  "asignado": "Jhostin Galarza",
  "limite": "06/11/2026",
  "estado": "Cerrado",
  "accion": "Descartado en la reunión de inicio del 12/10/2026 (GOB-12)."
 },
 {
  "id": "IN-11",
  "tipo": "Calidad",
  "descripcion": "El archivo del formato de reporte de incidencia escolar está vacío; solo existe la foto del formato.",
  "origen": "Revisión de calidad, 10/10/2026",
  "prioridad": "Baja",
  "asignado": "Carlos Curo",
  "limite": "06/11/2026",
  "estado": "Abierto",
  "accion": "Volver a escanearlo en la próxima visita al colegio."
 }
];

export const CORTE = "2026-10-31";

export const PLAN_COMUNICACIONES = [
 {
  "id": "PC-01",
  "que": "Informe de desempeño del proyecto",
  "para": "Patrocinadora, Product Owner y docente asesor",
  "emisor": "Jhostin Galarza",
  "canal": "Documento PDF que el Product Owner entrega a la Dirección",
  "frecuencia": "Al cierre de cada sprint",
  "constancia": "Informe (GOB-09 y siguientes)"
 },
 {
  "id": "PC-02",
  "que": "Demostración de avances (revisión del sprint)",
  "para": "Product Owner; la Dirección da su conformidad por su intermedio",
  "emisor": "Equipo del proyecto",
  "canal": "Demostración al Product Owner",
  "frecuencia": "Cada cuatro semanas",
  "constancia": "Acta de aceptación (ALC-04)"
 },
 {
  "id": "PC-03",
  "que": "Coordinación del trabajo diario",
  "para": "Equipo del proyecto",
  "emisor": "Jhostin Galarza",
  "canal": "Reunión breve y grupo de mensajería del equipo",
  "frecuencia": "Diaria, 15 minutos",
  "constancia": "Tablero de tareas"
 },
 {
  "id": "PC-04",
  "que": "Pedidos y entregas de datos",
  "para": "Gestora de Cubicol y encargado de TI",
  "emisor": "Jadira Vasquez, por medio del Product Owner",
  "canal": "Pedido escrito que el Product Owner entrega en el colegio",
  "frecuencia": "Semanal en los Sprints 1 a 3",
  "constancia": "Registro de entrega de datos"
 },
 {
  "id": "PC-05",
  "que": "Validación de variables y del tablero",
  "para": "Docentes tutores",
  "emisor": "Helber Perez y Carlos Curo",
  "canal": "Taller presencial",
  "frecuencia": "Semanas 3 y 15, y piloto",
  "constancia": "Lista de asistencia y acuerdos"
 },
 {
  "id": "PC-06",
  "que": "Avance académico del proyecto",
  "para": "Docente asesor",
  "emisor": "Equipo del proyecto",
  "canal": "Clase y blog del proyecto",
  "frecuencia": "Semanal",
  "constancia": "Blog actualizado"
 },
 {
  "id": "PC-07",
  "que": "Aviso sobre el proyecto y el uso de los datos",
  "para": "Padres y apoderados",
  "emisor": "Dirección, por medio de los tutores; redacta el equipo",
  "canal": "Mensaje de WhatsApp del tutor de cada aula",
  "frecuencia": "Antes de cargar datos reales y al iniciar el piloto",
  "constancia": "Texto del mensaje y confirmación de envío de cada tutor"
 },
 {
  "id": "PC-08",
  "que": "Solicitudes de cambio y su decisión",
  "para": "Solicitante, patrocinadora y Product Owner",
  "emisor": "Carlos Curo",
  "canal": "Reunión y documento",
  "frecuencia": "Cuando ocurre",
  "constancia": "Registro de cambios (GOB-10)"
 },
 {
  "id": "PC-09",
  "que": "Incidentes de prioridad alta",
  "para": "Product Owner y afectados",
  "emisor": "Jhostin Galarza",
  "canal": "Llamada o mensaje directo",
  "frecuencia": "En menos de 24 horas",
  "constancia": "Registro de incidentes (GOB-06)"
 },
 {
  "id": "PC-10",
  "que": "Capacitación y manuales",
  "para": "Tutores, coordinación y encargado de TI",
  "emisor": "Jhostin Galarza",
  "canal": "Sesión presencial de 2 horas y manuales",
  "frecuencia": "Semana 23",
  "constancia": "Lista de asistencia"
 },
 {
  "id": "PC-12",
  "que": "Coordinación con el colegio: pedidos, observaciones e indicaciones",
  "para": "Dirección, coordinación y docentes",
  "emisor": "Helber Perez (Product Owner)",
  "canal": "Comunicación directa del Product Owner en el colegio y grupo del equipo",
  "frecuencia": "Cuando haga falta; reemplaza a las entrevistas",
  "constancia": "Mensaje en el grupo del equipo y registro de comunicaciones"
 },
 {
  "id": "PC-11",
  "que": "Cierre del proyecto",
  "para": "Todos los interesados del colegio y docente asesor",
  "emisor": "Jhostin Galarza",
  "canal": "Reunión de cierre",
  "frecuencia": "23/04/2027",
  "constancia": "Acta de cierre e informe final"
 }
];

export const COMUNICACIONES = [
 {
  "id": "C-01",
  "cuando": "",
  "fecha": "2026-04-24",
  "tipo": "Entrevista",
  "asunto": "Entrevista semiestructurada de diagnóstico a la Promotora Directora",
  "emisor": "Equipo del proyecto",
  "interesados": [
   "I-01"
  ],
  "canal": "Reunión presencial",
  "sprint": 0,
  "estado": "Realizada",
  "constancia": "Transcripción, video y fotografías",
  "plan": "—"
 },
 {
  "id": "C-02",
  "cuando": "",
  "fecha": "2026-04-24",
  "tipo": "Solicitud",
  "asunto": "Pedido y recojo del organigrama y del formato de reporte de incidencias",
  "emisor": "Equipo del proyecto",
  "interesados": [
   "I-01"
  ],
  "canal": "Reunión presencial",
  "sprint": 0,
  "estado": "Realizada",
  "constancia": "Fotografías de los documentos",
  "plan": "—"
 },
 {
  "id": "C-03",
  "cuando": "",
  "fecha": "2026-05-15",
  "tipo": "Encuesta",
  "asunto": "Encuesta sobre seguimiento y rendimiento académico: 6 respuestas de 16 docentes",
  "emisor": "Equipo del proyecto",
  "interesados": [
   "I-05"
  ],
  "canal": "Formulario en línea",
  "sprint": 0,
  "estado": "Realizada",
  "constancia": "Hoja de respuestas y gráficos",
  "plan": "—"
 },
 {
  "id": "C-04",
  "cuando": "",
  "fecha": "2026-07-05",
  "tipo": "Entrega de datos",
  "asunto": "Recepción de registros de notas de marzo, abril y primer trimestre de 2026",
  "emisor": "Docentes del colegio",
  "interesados": [
   "I-05"
  ],
  "canal": "Reunión presencial",
  "sprint": 0,
  "estado": "Realizada",
  "constancia": "Hoja de cálculo y fotografías, en custodia del equipo",
  "plan": "PC-04"
 },
 {
  "id": "C-05",
  "cuando": "",
  "fecha": "2026-10-10",
  "tipo": "Reunión",
  "asunto": "Sesión de trabajo del equipo: análisis de interesados y emisión de los documentos de gestión",
  "emisor": "Jhostin Galarza",
  "interesados": [
   "I-12"
  ],
  "canal": "Reunión del equipo",
  "sprint": 0,
  "estado": "Realizada",
  "constancia": "Documentos INT-01 e INT-02",
  "plan": "PC-03"
 },
 {
  "id": "C-06",
  "cuando": "",
  "fecha": "2026-10-10",
  "tipo": "Publicación",
  "asunto": "Publicación del blog del proyecto con el equipo y el periodo actuales",
  "emisor": "Equipo del proyecto",
  "interesados": [
   "I-13"
  ],
  "canal": "Blog del proyecto",
  "sprint": 0,
  "estado": "Realizada",
  "constancia": "Blog en línea",
  "plan": "PC-06"
 },
 {
  "id": "C-07",
  "cuando": "",
  "fecha": "2026-10-12",
  "tipo": "Reunión",
  "asunto": "Reunión de inicio: acta de constitución, calendario, Product Owner, tratamiento de datos y canal de comunicación con el colegio",
  "emisor": "Jhostin Galarza",
  "interesados": [
   "I-01",
   "I-03",
   "I-12"
  ],
  "canal": "Reunión virtual",
  "sprint": 1,
  "estado": "Realizada",
  "constancia": "Acta de la reunión de inicio (GOB-12) y acta de constitución firmada (GOB-02)",
  "plan": "PC-01"
 },
 {
  "id": "C-08",
  "cuando": "",
  "fecha": "2026-10-17",
  "tipo": "Avance académico",
  "asunto": "Avance semanal al docente asesor: gestión de las comunicaciones y validación del primer entregable del sistema según la EDT (E-01)",
  "emisor": "Equipo del proyecto",
  "interesados": [
   "I-13"
  ],
  "canal": "Clase y blog del proyecto",
  "sprint": 1,
  "estado": "Realizada",
  "constancia": "Observaciones del docente: habilitar un enlace para los entregables y que los documentos se vean por Drive. Sin observaciones al E-01",
  "plan": "PC-06"
 },
 {
  "id": "C-09",
  "cuando": "",
  "fecha": "2026-10-20",
  "tipo": "Solicitud",
  "asunto": "Pedido de las exportaciones de notas de Cubicol, a través del Product Owner",
  "emisor": "Jadira Vasquez y Helber Perez",
  "interesados": [
   "I-07",
   "I-08"
  ],
  "canal": "Pedido escrito entregado por el Product Owner",
  "sprint": 1,
  "estado": "Realizada",
  "constancia": "El colegio entrega las exportaciones de Cubicol de forma periódica, a través del Product Owner",
  "plan": "PC-04 y PC-12"
 },
 {
  "id": "C-10",
  "cuando": "",
  "fecha": "2026-10-24",
  "tipo": "Avance académico",
  "asunto": "Avance semanal al docente asesor",
  "emisor": "Equipo del proyecto",
  "interesados": [
   "I-13"
  ],
  "canal": "Clase y blog del proyecto",
  "sprint": 1,
  "estado": "Programada",
  "constancia": "Blog actualizado",
  "plan": "PC-06"
 },
 {
  "id": "C-11",
  "cuando": "",
  "fecha": "2026-10-28",
  "tipo": "Taller",
  "asunto": "Taller de validación de las variables del modelo, organizado por el Product Owner",
  "emisor": "Helber Perez y Carlos Curo",
  "interesados": [
   "I-05",
   "I-06"
  ],
  "canal": "Taller presencial en el colegio",
  "sprint": 1,
  "estado": "Realizada",
  "constancia": "Asistieron los 16 docentes y la directora, que dieron su conformidad con las variables del modelo y con la interfaz del sistema. Lista de asistencia y acuerdos",
  "plan": "PC-05"
 },
 {
  "id": "C-12",
  "cuando": "",
  "fecha": "2026-10-31",
  "tipo": "Avance académico",
  "asunto": "Avance semanal al docente asesor",
  "emisor": "Equipo del proyecto",
  "interesados": [
   "I-13"
  ],
  "canal": "Clase y blog del proyecto",
  "sprint": 1,
  "estado": "Programada",
  "constancia": "Blog actualizado",
  "plan": "PC-06"
 },
 {
  "id": "C-13",
  "cuando": "",
  "fecha": "2026-11-03",
  "tipo": "Consulta",
  "asunto": "Consulta sobre el registro de incidencias, a través del Product Owner",
  "emisor": "Jadira Vasquez y Helber Perez",
  "interesados": [
   "I-04"
  ],
  "canal": "Consulta del Product Owner en el colegio",
  "sprint": 1,
  "estado": "Programada",
  "constancia": "Nota de la consulta en el grupo del equipo",
  "plan": "PC-12"
 },
 {
  "id": "C-14",
  "cuando": "",
  "fecha": "2026-11-06",
  "tipo": "Comunicado",
  "asunto": "Aviso a los apoderados sobre el proyecto y el uso de los datos (fecha tentativa)",
  "emisor": "Dirección, por medio de los tutores; redacta el equipo",
  "interesados": [
   "I-11",
   "I-05"
  ],
  "canal": "Mensaje de WhatsApp del tutor de cada aula",
  "sprint": 1,
  "estado": "Programada",
  "constancia": "Texto del mensaje y confirmación de envío de cada tutor",
  "plan": "PC-07"
 },
 {
  "id": "C-15",
  "cuando": "",
  "fecha": "2026-11-06",
  "tipo": "Revisión de sprint",
  "asunto": "Revisión del Sprint 1 e informe de desempeño: arquitectura y variables del modelo",
  "emisor": "Equipo del proyecto",
  "interesados": [
   "I-01",
   "I-12",
   "I-13"
  ],
  "canal": "Demostración al Product Owner; conformidad de la Dirección por su intermedio",
  "sprint": 1,
  "estado": "Programada",
  "constancia": "Acta de aceptación e informe de desempeño",
  "plan": "PC-01 y PC-02"
 },
 {
  "id": "C-16",
  "cuando": "",
  "fecha": "2026-12-04",
  "tipo": "Revisión de sprint",
  "asunto": "Revisión del Sprint 2 e informe de desempeño: base de datos centralizada",
  "emisor": "Equipo del proyecto",
  "interesados": [
   "I-01",
   "I-12",
   "I-13"
  ],
  "canal": "Demostración al Product Owner; conformidad de la Dirección por su intermedio",
  "sprint": 2,
  "estado": "Programada",
  "constancia": "Acta de aceptación e informe de desempeño",
  "plan": "PC-01 y PC-02"
 },
 {
  "id": "C-17",
  "cuando": "",
  "fecha": "2026-12-30",
  "tipo": "Revisión de sprint",
  "asunto": "Revisión del Sprint 3 e informe de desempeño: modelo validado",
  "emisor": "Equipo del proyecto",
  "interesados": [
   "I-01",
   "I-12",
   "I-13"
  ],
  "canal": "Demostración al Product Owner; conformidad de la Dirección por su intermedio",
  "sprint": 3,
  "estado": "Programada",
  "constancia": "Acta de aceptación e informe de desempeño",
  "plan": "PC-01 y PC-02"
 },
 {
  "id": "C-18",
  "cuando": "",
  "fecha": "2027-01-20",
  "tipo": "Convocatoria",
  "asunto": "Convocatoria a tres docentes tutores para el piloto de marzo",
  "emisor": "Helber Perez (Product Owner)",
  "interesados": [
   "I-05",
   "I-03"
  ],
  "canal": "Convocatoria del Product Owner en el colegio",
  "sprint": 4,
  "estado": "Programada",
  "constancia": "Lista de participantes confirmados",
  "plan": "PC-05"
 },
 {
  "id": "C-19",
  "cuando": "",
  "fecha": "2027-01-29",
  "tipo": "Revisión de sprint",
  "asunto": "Revisión del Sprint 4 e informe de desempeño: sistema integrado con alertas y tablero",
  "emisor": "Equipo del proyecto",
  "interesados": [
   "I-01",
   "I-12",
   "I-13"
  ],
  "canal": "Demostración al Product Owner; conformidad de la Dirección por su intermedio",
  "sprint": 4,
  "estado": "Programada",
  "constancia": "Acta de aceptación e informe de desempeño",
  "plan": "PC-01 y PC-02"
 },
 {
  "id": "C-20",
  "cuando": "",
  "fecha": "2027-03-24",
  "tipo": "Revisión de sprint",
  "asunto": "Revisión del Sprint 5 e informe de desempeño: resultado de las pruebas y del piloto",
  "emisor": "Equipo del proyecto",
  "interesados": [
   "I-01",
   "I-12",
   "I-13"
  ],
  "canal": "Demostración al Product Owner; conformidad de la Dirección por su intermedio",
  "sprint": 5,
  "estado": "Programada",
  "constancia": "Acta de aceptación e informe de desempeño",
  "plan": "PC-01 y PC-02"
 },
 {
  "id": "C-21",
  "cuando": "",
  "fecha": "2027-04-14",
  "tipo": "Capacitación",
  "asunto": "Capacitación de dos horas a tutores y coordinadores, y entrega de manuales",
  "emisor": "Jhostin Galarza",
  "interesados": [
   "I-05",
   "I-03",
   "I-08"
  ],
  "canal": "Taller presencial",
  "sprint": 6,
  "estado": "Programada",
  "constancia": "Lista de asistencia",
  "plan": "PC-10"
 },
 {
  "id": "C-22",
  "cuando": "",
  "fecha": "2027-04-23",
  "tipo": "Reunión",
  "asunto": "Reunión de cierre del proyecto e informe final",
  "emisor": "Jhostin Galarza",
  "interesados": [
   "I-01",
   "I-02",
   "I-03",
   "I-13"
  ],
  "canal": "Reunión presencial",
  "sprint": 6,
  "estado": "Programada",
  "constancia": "Acta de cierre e informe final",
  "plan": "PC-11"
 }
];
