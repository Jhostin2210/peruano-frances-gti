// Dominio de Gobernanza · área de enfoque de Planificación.
// Procesos «Integrar y alinear los planes del proyecto» y «Planificar la estrategia de abastecimiento».

import { c, nota, p, sec, tabla, ul } from "../lib/bloques.mjs";
import { PROYECTO as P, R } from "../proyecto.mjs";
import { DOC } from "./comunes.mjs";

export const GOB04 = DOC({
  id: "GOB-04",
  titulo: "Plan para la dirección del proyecto",
  archivo: "GOB-04 Plan para la dirección del proyecto",
  carpeta: "01 - Gobernanza/1.2 Integrar los planes",
  dominio: "Gobernanza",
  area: "Planificación",
  proceso: "Integrar y alinear los planes del proyecto",
  salida: "Plan para la dirección del proyecto",
  resumen:
    "Reúne en un solo documento cómo se ejecuta, se controla y se cierra el proyecto: enfoque de desarrollo, planes que lo componen, líneas base, gobernanza, configuración y medición del desempeño.",
  secciones: [
    sec("1. Enfoque de desarrollo y ciclo de vida", [
      p(
        "El proyecto usa un **enfoque híbrido**. La planificación de alto nivel es predictiva: el alcance, el cronograma y los costos se fijan en líneas base que solo cambian por control de cambios. La construcción es adaptativa: el producto se desarrolla en seis sprints de cuatro semanas con el marco Scrum, y cada sprint termina con una revisión ante el colegio.",
      ),
      tabla(
        ["Factor", "Situación del proyecto", "Enfoque que favorece"],
        [20, 56, 24],
        [
          ["Requisitos", "Los 20 requisitos están definidos, pero la forma del tablero y de las alertas depende de la reacción de los docentes.", "Adaptativo"],
          ["Entregables", "El sistema puede entregarse por partes: datos, modelo, alertas y tablero.", "Adaptativo"],
          ["Fecha de cierre", `Fija: ${P.fin}, por el calendario del curso.`, "Predictivo"],
          ["Normativa", "Datos personales de menores: el cumplimiento debe planificarse desde el inicio.", "Predictivo"],
          ["Organización cliente", "Colegio con estructura jerárquica; la Dirección espera un plan con fechas.", "Predictivo"],
          ["Equipo", "Cuatro personas, tamaño adecuado para trabajar con Scrum.", "Adaptativo"],
          ["Incertidumbre", "Alta en la calidad de los datos y en el desempeño del modelo.", "Adaptativo"],
        ],
        {
          titulo: "Adaptación: por qué un enfoque híbrido",
          fuente: "Criterios tomados de la sección de adaptación de la Guía del PMBOK®, octava edición.",
        },
      ),
      tabla(
        ["Fase", "Periodo", "Enfoque", "Resultado"],
        [24, 24, 14, 38],
        [
          ["Formulación y evaluación", "Abril a julio de 2026 (curso anterior)", "Predictivo", "Diagnóstico, alternativa seleccionada y líneas base v2. Fase cerrada (GOB-11)."],
          ["Inicio y planificación", "Octubre de 2026", "Predictivo", "Acta de constitución, plan para la dirección y registros del proyecto."],
          ["Construcción (Sprints 1 a 4)", "12/10/2026 al 29/01/2027", "Adaptativo", "Datos, modelo, alertas y tablero integrados."],
          ["Validación (Sprint 5)", "01/03/2027 al 26/03/2027", "Adaptativo", "Pruebas y piloto con docentes."],
          ["Implantación y cierre (Sprint 6)", "29/03/2027 al 23/04/2027", "Predictivo", "Sistema en producción, capacitación y cierre."],
        ],
        { titulo: "Ciclo de vida del proyecto" },
      ),
    ]),
    sec("2. Planes que integran este plan", [
      tabla(
        ["Plan componente", "Dominio", "Documento", "Estado"],
        [34, 15, 25, 26],
        [
          ["Plan de gestión del alcance y de los requisitos", "Alcance", "ALC-01", c("Vigente", "verde")],
          ["Plan de gestión de la calidad", "Alcance", "ALC-03", c("Vigente", "verde")],
          ["Plan de gestión del cronograma", "Cronograma", "CRO-01", c("Vigente (v3)", "verde")],
          ["Plan de gestión financiera", "Finanzas", "Línea base de costos v2", c("Vigente; fechas por actualizar", "amarillo")],
          ["Plan de involucramiento de los interesados", "Interesados", "INT-02", c("Vigente", "verde")],
          ["Plan de gestión de las comunicaciones", "Interesados", "INT-03", c("Vigente", "verde")],
          ["Plan de estrategia de abastecimiento", "Gobernanza", "GOB-05", c("Vigente", "verde")],
          ["Plan de gestión de cambios y de la configuración", "Gobernanza", "GOB-10 y sección 5", c("Vigente", "verde")],
          ["Plan de gestión de los recursos", "Recursos", "—", c("Pendiente: dominio no desarrollado", "gris")],
          ["Plan de gestión de los riesgos", "Riesgo", "—", c("Pendiente: dominio no desarrollado", "gris")],
        ],
        { titulo: "Planes componentes y su estado" },
      ),
    ]),
    sec("3. Líneas base", [
      tabla(
        ["Línea base", "Contenido", "Versión vigente", "Situación"],
        [14, 36, 16, 34],
        [
          [
            "Alcance",
            "Enunciado del alcance (ALC-02), EDT de seis componentes y su diccionario.",
            "v3 (10/10/2026)",
            "Enunciado actualizado con el despliegue en la nube. La EDT y su diccionario están por unificar (SC-10).",
          ],
          [
            "Cronograma",
            "44 actividades y una reunión diaria en 6 sprints; las duraciones esperadas (PERT) suman 159.2 días.",
            "v3 (10/10/2026)",
            `Del ${P.inicio} al ${P.fin}, con receso en febrero (CRO-01).`,
          ],
          [
            "Costos",
            `${P.presupuesto.lineaBase}; presupuesto total ${P.presupuesto.total}.`,
            "v2 (curso anterior)",
            "Montos vigentes. La distribución por fechas está pendiente (SC-02).",
          ],
        ],
        { titulo: "Líneas base del proyecto" },
      ),
      p(
        "Las tres líneas base forman la línea base para la medición del desempeño. Desde su aprobación, cualquier modificación sigue el proceso de control de cambios (GOB-10).",
      ),
    ]),
    sec("4. Gobernanza del proyecto", [
      p(
        "El modelo de gobernanza es estructurado y ligero: la patrocinadora y el Product Owner deciden sobre el qué y el cuándo; el equipo se organiza para decidir el cómo. Así se combina la supervisión que espera el colegio con la autonomía que requiere un equipo Scrum.",
      ),
      tabla(
        ["Rol", "Quién", "Decide sobre"],
        [26, 34, 40],
        [
          ["Patrocinadora", "Promotora Directora", "Autorización, líneas base, pase a producción y cierre."],
          ["Product Owner", "Por designar por la Dirección (coordinación académica)", "Prioridad de los requisitos y aceptación de los entregables."],
          ["Director del proyecto y Scrum Master", P.director, "Plan, coordinación, reserva de contingencia y cambios menores."],
          ["Equipo de desarrollo", P.equipo.map((m) => m.corto).join(", "), "Cómo construir cada entregable."],
          ["Docente asesor", P.docente, "Evaluación académica y orientación metodológica."],
        ],
        { titulo: "Roles y autoridad" },
      ),
      tabla(
        ["Reunión", "Frecuencia", "Participantes", "Resultado"],
        [22, 26, 28, 24],
        [
          ["Reunión diaria", "Diaria, 15 minutos (desde el Sprint 2)", "Equipo", "Tablero de tareas al día"],
          ["Planificación del sprint", "Primer día de cada sprint", "Equipo y Product Owner", "Trabajo comprometido"],
          ["Revisión del sprint", "Último día hábil de cada sprint", "Equipo, Product Owner y patrocinadora", "Entregables aceptados u observados"],
          ["Retrospectiva", "Después de cada revisión", "Equipo", "Lecciones aprendidas"],
          ["Comité de cambios", "Cuando una solicitud afecta una línea base", "Director, Product Owner y patrocinadora", "Decisión registrada"],
        ],
        { titulo: "Reuniones de gobierno" },
      ),
      p(
        "Escalamiento: un problema que el equipo no resuelve en dos días hábiles se registra como incidente y se eleva al Product Owner; si afecta una línea base o la relación con el colegio, se eleva a la patrocinadora.",
      ),
    ]),
    sec("5. Gestión de la configuración", [
      tabla(
        ["Elemento", "Regla"],
        [26, 74],
        [
          ["Código fuente y blog", "Repositorio en GitHub. La rama principal publica el sitio; todo cambio entra por una rama y una solicitud de integración revisada por otro integrante."],
          ["Documentos de gestión", "Se generan desde una fuente única de contenido que está en el repositorio. Cada documento lleva código (GOB, INT, ALC o CRO), versión y fecha."],
          ["Versiones", "Un ajuste de redacción sube el decimal (1.0 a 1.1). Un cambio aprobado que altera el contenido sube el entero (1.x a 2.0)."],
          ["Ubicación", "Carpeta «Documentación» del proyecto, ordenada por dominio y proceso, con copia en PDF publicada en el blog."],
          ["Datos del colegio", "Fuera del repositorio. Solo se versionan datos anonimizados o sintéticos."],
          ["Modelo de Machine Learning", "Cada versión entrenada se guarda con su fecha, los datos de origen y su reporte de métricas."],
        ],
        { titulo: "Reglas de configuración" },
      ),
    ]),
    sec("6. Medición del desempeño", [
      p(
        "El desempeño se mide al cierre de cada sprint con el análisis del valor ganado y se complementa con indicadores de adelanto, que avisan antes de que el problema ocurra.",
      ),
      tabla(
        ["Indicador", "Tipo", "Umbral de alerta", "Responsable"],
        [42, 13, 28, 17],
        [
          ["SPI: valor ganado entre valor planificado", "Retraso", "Menor de 0.90", R.jhostin],
          ["CPI: valor ganado entre costo real", "Retraso", "Menor de 0.90", R.jhostin],
          ["Requisitos aceptados sobre los comprometidos en el sprint", "Retraso", "Menos de 80 %", "Product Owner"],
          ["Días de espera de los datos solicitados al colegio", "Adelanto", "Más de 5 días hábiles", R.jadira],
          ["Supuestos por comprobar que vencen en el sprint", "Adelanto", "Alguno sin comprobar a mitad del sprint", R.jhostin],
          ["Interesados clave por debajo del nivel de involucramiento deseado", "Adelanto", "Más de la mitad al cierre del Sprint 2", R.jhostin],
          ["Incidentes abiertos de prioridad alta", "Adelanto", "Más de 3", R.jhostin],
        ],
        { titulo: "Indicadores de adelanto y de retraso" },
      ),
      p(
        "Semáforo: verde si el índice es 1.00 o más; amarillo entre 0.90 y 0.99; rojo por debajo de 0.90. En rojo se convoca al equipo y al Product Owner y se evalúa una solicitud de cambio.",
      ),
    ]),
    sec("7. Mantenimiento del plan", [
      p(
        "El plan se revisa en cada revisión de sprint. Las actualizaciones que no alteran las líneas base las aprueba el director del proyecto; las demás pasan por control de cambios. Quedan por incorporar los planes de recursos y de riesgos cuando el equipo desarrolle esos dominios.",
      ),
    ]),
  ],
});

export const GOB05 = DOC({
  id: "GOB-05",
  titulo: "Plan de estrategia de abastecimiento",
  archivo: "GOB-05 Estrategia de abastecimiento",
  carpeta: "01 - Gobernanza/1.3 Abastecimiento",
  dominio: "Gobernanza",
  area: "Planificación",
  proceso: "Planificar la estrategia de abastecimiento",
  salida: "Plan de estrategia de abastecimiento: decisiones de internalización o externalización y criterios de selección de proveedores",
  resumen:
    "Define qué hace el equipo y qué se obtiene de terceros, con qué criterios se eligen los proveedores y cómo se protegen los datos alojados fuera del colegio.",
  secciones: [
    sec("1. Propósito", [
      p(
        "Este plan documenta qué partes del proyecto se hacen con el equipo y cuáles se obtienen de terceros, con qué criterios se eligen los proveedores y bajo qué condiciones. A diferencia de la gestión de recursos, que trata del equipo interno, aquí se trata solo lo que viene de fuera.",
      ),
    ]),
    sec("2. Análisis de hacer o comprar", [
      tabla(
        ["Componente", "Hacer", "Obtener de un tercero", "Decisión"],
        [18, 29, 33, 20],
        [
          [
            "Sistema SIA-T: integración, modelo, alertas y tablero",
            "Desarrollo por el equipo con herramientas de código abierto. Costo valorizado, sin desembolso.",
            "Módulos adicionales de Cubicol o una herramienta comercial de inteligencia de negocios: tienen costo de licencia y no incluyen el modelo predictivo.",
            c("Hacer", "verde", { bold: true }),
          ],
          [
            "Alojamiento del tablero web",
            "Servidor en el colegio administrado por su personal.",
            "Servicio gestionado (Vercel): despliegue automático desde el repositorio, sin administrar servidores.",
            c("Servicio de un tercero", "azul", { bold: true }),
          ],
          [
            "Base de datos",
            "PostgreSQL instalado en un equipo del colegio.",
            "PostgreSQL gestionado (Supabase): copias de seguridad, control de acceso por fila y autenticación incluidos.",
            c("Servicio de un tercero", "azul", { bold: true }),
          ],
          [
            "Entrenamiento y cálculo semanal del riesgo",
            "Tarea programada en un equipo del colegio.",
            "Ejecución programada en la nube (GitHub Actions) con el mismo código en Python.",
            c("Servicio de un tercero", "azul", { bold: true }),
          ],
          [
            "Envío de alertas por correo",
            "Servidor de correo propio; no existe.",
            "Servicio de envío de correo, por seleccionar en el Sprint 4.",
            c("Servicio de un tercero", "azul", { bold: true }),
          ],
          [
            "Datos académicos de origen",
            "Registro digital nuevo de asistencia e incidencias.",
            "Exportaciones de Cubicol, que el colegio ya paga.",
            c("Mixto", "amarillo", { bold: true }),
          ],
          ["Conectividad", "—", "Internet de fibra óptica del colegio (WIN), ya contratado.", c("Usar lo existente", "gris", { bold: true })],
        ],
        { titulo: "Hacer o comprar, por componente", compacta: true },
      ),
    ]),
    sec("3. Decisiones de internalización o externalización", [
      tabla(
        ["Qué", "Quién lo provee", "Tipo de acuerdo", "Costo en el proyecto"],
        [30, 20, 30, 20],
        [
          ["Desarrollo y gestión del proyecto", "Equipo del proyecto", "Interno", "Valorizado en la línea base de costos"],
          ["Alojamiento web", "Vercel", "Condiciones estándar del servicio; plan gratuito", "S/ 0"],
          ["Base de datos y autenticación", "Supabase", "Condiciones estándar del servicio; plan gratuito", "S/ 0"],
          ["Repositorio y tareas programadas", "GitHub", "Condiciones estándar del servicio; plan gratuito", "S/ 0"],
          ["Correo de alertas", "Por seleccionar", "Condiciones estándar del servicio; plan gratuito", "S/ 0 previsto"],
          ["Plataforma de notas", "Cubicol", "Contrato vigente del colegio", "Sin costo para el proyecto"],
        ],
        { titulo: "Qué se hace con el equipo y qué con terceros" },
      ),
    ]),
    sec("4. Por qué cambió el alojamiento", [
      tabla(
        ["Criterio", "Servidor en el colegio (versión anterior)", "Servicios gestionados en la nube (versión vigente)"],
        [20, 38, 42],
        [
          ["Costo durante el proyecto", "Requiere un equipo encendido de forma permanente y su mantenimiento.", "Planes gratuitos mientras el uso esté dentro de sus límites."],
          ["Operación", "Alguien del colegio administra el servidor, las copias y las actualizaciones.", "El proveedor administra la infraestructura; el colegio solo gestiona usuarios."],
          ["Disponibilidad", "Depende de la energía, del equipo y de la red del colegio.", "Depende del proveedor y de la conexión a internet del colegio."],
          ["Custodia de los datos", c("Los datos no salen del colegio.", "verde"), c("Los datos se alojan con un tercero, fuera del país: exige consentimiento informado y medidas adicionales.", "amarillo")],
          ["Coherencia con los requisitos", c("Tres requisitos no funcionales y la matriz de trazabilidad ya citaban Vercel y Supabase.", "amarillo"), c("Coherente.", "verde")],
        ],
        { titulo: "Comparación de las dos opciones de alojamiento" },
      ),
      p(
        "La evaluación de la fase de formulación calificó mejor al servidor local por costo y por custodia de los datos. La reevaluación mantiene la ventaja del servidor local en custodia, pero concluye que el colegio difícilmente puede sostener su operación: cuenta con una sola persona de soporte y no se ha confirmado que disponga de un servidor dedicado. La desventaja de la nube se atiende con las medidas de la sección 7. El cambio quedó registrado como SC-03.",
      ),
    ]),
    sec("5. Criterios de selección de proveedores", [
      tabla(
        ["Criterio", "Peso", "Cómo se evalúa"],
        [34, 10, 56],
        [
          ["Costo para el colegio, durante y después del proyecto", c("30 %", undefined, { align: "center" }), "Plan gratuito suficiente para 200 estudiantes; precio del primer plan de pago."],
          ["Protección de datos", c("25 %", undefined, { align: "center" }), "Cifrado, control de acceso, ubicación de los servidores y condiciones de tratamiento de datos."],
          ["Facilidad de operación", c("20 %", undefined, { align: "center" }), "Que el encargado de TI del colegio pueda administrarlo después de la transferencia."],
          ["Disponibilidad y soporte", c("15 %", undefined, { align: "center" }), "Historial del servicio y calidad de la documentación."],
          ["Portabilidad", c("10 %", undefined, { align: "center" }), "Que los datos y el código puedan llevarse a otro proveedor sin reescribir el sistema."],
        ],
        { titulo: "Criterios y pesos" },
      ),
      p(
        "Con estos criterios se eligieron Vercel, Supabase y GitHub: los tres tienen plan gratuito, usan tecnologías estándar (Next.js, PostgreSQL y Python) y permiten salir sin pérdida de datos. El servicio de correo se evaluará con la misma tabla en el Sprint 4.",
      ),
    ]),
    sec("6. Tipo de acuerdo y condiciones", [
      ul(
        "No hay contratos negociados: se aceptan las condiciones estándar de cada servicio. Las cuentas se crean a nombre del proyecto y se transfieren al colegio en el cierre.",
        "Los planes gratuitos tienen límites de uso y sus condiciones pueden cambiar. El plan gratuito de alojamiento web está previsto para uso personal y no comercial; si el colegio adopta el sistema de forma permanente debe pasar a un plan de pago. Las condiciones vigentes se verifican antes del piloto.",
        "Ningún integrante del equipo puede comprometer al colegio con un proveedor; esa decisión corresponde a la patrocinadora.",
      ),
    ]),
    sec("7. Protección de datos personales en servicios de terceros", [
      ul(
        "Antes de cargar datos reales, la Dirección informa a los apoderados y recaba su consentimiento (supuesto S-06).",
        "En la nube se guarda lo mínimo necesario. En el Sprint 1 el equipo evaluará trabajar con códigos en lugar de nombres y mantener la correspondencia en el colegio.",
        "Acceso por rol y por fila en la base de datos; las contraseñas y las claves quedan fuera del repositorio.",
        "Se elige la región de servidores más cercana que ofrezca el proveedor y se documenta que los datos se alojan fuera del Perú.",
        "El repositorio y el blog, que son públicos, nunca contienen datos personales.",
        "Al cierre se eliminan los datos de prueba y se entrega al colegio la administración de las cuentas.",
      ),
      nota(
        "Estas medidas no reemplazan una revisión legal. La Ley N.° 29733 y su reglamento vigente deben revisarse con la Dirección antes del piloto.",
        "aviso",
      ),
    ]),
    sec("8. Costos previstos y plan de salida", [
      tabla(
        ["Etapa", "Costo de los servicios", "Condición"],
        [26, 38, 36],
        [
          ["Proyecto y piloto, hasta abril de 2027", "S/ 0", "Planes gratuitos; el consumo se revisa en cada sprint."],
          [
            "Operación permanente",
            "Un plan de pago de alojamiento y uno de base de datos; del orden de 20 a 25 dólares mensuales cada uno, según las tarifas publicadas por los proveedores.",
            "Verificar las tarifas al momento de contratar. Es decisión de la patrocinadora.",
          ],
          ["Salida", "Sin costo de licencias", "La base se exporta en formato SQL estándar y el código está en GitHub: el sistema puede instalarse con otro proveedor o en un servidor propio."],
        ],
        { titulo: "Costos por etapa" },
      ),
    ]),
    sec("9. Seguimiento de los proveedores", [
      p(
        `${R.jadira}, responsable del despliegue, revisa en cada sprint el consumo frente a los límites de cada servicio y cualquier cambio en sus condiciones, y lo informa en la revisión del sprint. Cambiar de proveedor requiere una solicitud de cambio.`,
      ),
    ]),
  ],
});
