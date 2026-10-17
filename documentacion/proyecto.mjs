// Ficha única del proyecto. Los documentos Word y el blog toman de aquí los datos comunes,
// de modo que un cambio se hace una sola vez y queda igual en todos lados.

export const PROYECTO = {
  sigla: "SIA-T",
  nombre:
    "Sistema inteligente basado en Machine Learning para la alerta temprana del bajo rendimiento académico estudiantil",
  nombreCorto: "Sistema Inteligente de Alerta Temprana (SIA-T)",
  cliente: "I.E.P. Peruano Francés",
  clienteDireccion: "Av. Pastor Sevilla con Av. Juan Velasco Alvarado, Villa El Salvador, Lima",
  universidad: "Universidad Nacional Tecnológica de Lima Sur",
  facultad: "Facultad de Ingeniería y Gestión",
  escuela: "Escuela Profesional de Ingeniería de Sistemas",
  curso: "Gestión de Proyecto de TI",
  docente: "Mg. MBA Antonio Arqque Pantigozo",
  guia: "Guía del PMBOK®, octava edición (PMI, 2025)",
  ciudad: "Lima, Perú",
  anio: "2026",
  fechaEmision: "10/10/2026",
  patrocinadora: "Promotora Directora de la I.E.P. Peruano Francés",
  director: "Jhostin J. Galarza Camarena",
  productOwner: "Helber J. Perez Gutierrez, docente de la institución",
  fechaCorte: "17/10/2026",
  inicio: "12/10/2026",
  fin: "23/04/2027",
  equipo: [
    {
      apellidos: "Galarza Camarena",
      nombres: "Jhostin Jefry",
      corto: "Jhostin J. Galarza Camarena",
      codigo: "2123010051",
      rol: "Director del proyecto y Scrum Master",
    },
    {
      apellidos: "Perez Gutierrez",
      nombres: "Helber Javier",
      corto: "Helber J. Perez Gutierrez",
      codigo: "2008100137",
      rol: "Responsable del modelo de Machine Learning y Product Owner",
    },
    {
      apellidos: "Curo Ramos",
      nombres: "Carlos Agustín",
      corto: "Carlos A. Curo Ramos",
      codigo: "2113010682",
      rol: "Responsable del tablero web y del control de cambios",
    },
    {
      apellidos: "Vasquez Castro",
      nombres: "Jadira Dina",
      corto: "Jadira D. Vasquez Castro",
      codigo: "2213100026",
      rol: "Responsable de datos, alertas y despliegue",
    },
  ],
  presupuesto: {
    edt: "S/ 54,417.42",
    contingencia: "S/ 5,441.74",
    lineaBase: "S/ 59,859.17",
    gestion: "S/ 3,636.36",
    total: "S/ 63,495.53",
  },
  enlaces: {
    blog: "https://peruano-frances-gti.vercel.app",
    repositorio: "https://github.com/Jhostin2210/peruano-frances-gti",
    prototipo: "https://proyecto-siat.vercel.app",
    api: "https://proyecto-siat.onrender.com",
    repoSistema: "https://github.com/Jhostin2210/Proyecto-SIAT",
  },
};

// Nombres cortos para usar en tablas de responsables.
export const R = {
  jhostin: "Jhostin Galarza",
  helber: "Helber Perez",
  carlos: "Carlos Curo",
  jadira: "Jadira Vasquez",
  equipo: "Equipo del proyecto",
};
