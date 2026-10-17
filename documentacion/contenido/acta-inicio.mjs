// Dominio de Gobernanza · Iniciación: acta de la reunión de inicio del 12/10/2026.
// Solo registra lo que el equipo confirmó de esa reunión; lo que no se trató no se anota.

import { c, firmas, kv, nota, p, sec, tabla } from "../lib/bloques.mjs";
import { PROYECTO as P, R } from "../proyecto.mjs";
import { SPRINTS, fmtIso } from "../datos/calendario.mjs";
import { DOC } from "./comunes.mjs";

export const GOB12 = DOC({
  id: "GOB-12",
  titulo: "Acta de la reunión de inicio",
  archivo: "GOB-12 Acta de la reunión de inicio",
  carpeta: "01 - Gobernanza/1.1 Iniciar el proyecto",
  dominio: "Gobernanza",
  area: "Iniciación",
  proceso: "Iniciar el proyecto o fase",
  salida: "Acta de reunión",
  fecha: P.fechaCorte,
  aprobacion: "Emitida para firma de los asistentes",
  resumen:
    "Deja constancia de la reunión de inicio con la Dirección del colegio: la firma del acta de constitución, la conformidad con el calendario y con el alojamiento en la nube, la designación del Product Owner, el canal de comunicación con el colegio y el tratamiento de los datos.",
  secciones: [
    sec("1. Datos de la reunión", [
      kv(
        ["Reunión", "N.º 1 · Reunión de inicio del proyecto"],
        ["Fecha", `${P.inicio}, primer día del Sprint 1`],
        ["Modalidad", "Virtual"],
        ["Convocó", `${R.jhostin}, director del proyecto`],
        ["Objetivo", "Iniciar formalmente el proyecto y acordar con la Dirección cómo se trabajará con el colegio."],
      ),
      tabla(
        ["Asistente", "Cargo o rol"],
        [40, 60],
        [
          ["Promotora Directora", "Patrocinadora del proyecto · I.E.P. Peruano Francés"],
          ["Coordinación académica", "I.E.P. Peruano Francés"],
          [P.director, "Director del proyecto y Scrum Master"],
          ["Helber J. Perez Gutierrez", "Responsable del modelo de Machine Learning y docente de la institución"],
        ],
        { titulo: "Asistentes" },
      ),
    ]),
    sec("2. Temas tratados", [
      tabla(
        ["N.º", "Tema", "Qué se resolvió"],
        [6, 30, 64],
        [
          ["1", "Acta de constitución del proyecto (GOB-02)", "Se aprobó. La firman la Promotora Directora, en físico, y el director del proyecto."],
          ["2", "Calendario del proyecto (cambio SC-02)", `La patrocinadora dio su conformidad: del ${fmtIso(SPRINTS[0].inicio)} al ${fmtIso(SPRINTS[5].fin)}, seis sprints de cuatro semanas y receso en febrero de 2027.`],
          ["3", "Alojamiento del sistema en servicios de la nube (cambio SC-03)", "La patrocinadora dio su conformidad."],
          ["4", "Product Owner", "Se designó a Helber Perez, docente de la institución e integrante del equipo."],
          ["5", "Comunicación con el colegio", "Por el cruce de horarios del equipo no se programarán más reuniones como esta. La comunicación con el colegio será a través de Helber Perez, que tiene contacto directo con la institución: por él llegan las observaciones y las indicaciones."],
          ["6", "Tratamiento de los datos", "La Dirección autorizó el uso de las notas de los estudiantes para el proyecto. Se avisará a los apoderados mediante un mensaje de WhatsApp del tutor de cada aula, lo antes posible."],
          ["7", "Exportaciones de notas de Cubicol", "Se acordó pedirlas a través del Product Owner."],
          ["8", "Solicitudes de la entrevista de abril de 2026", "Se descartaron la asistencia con código QR, los juegos interactivos para estudiantes y las guías para que los padres ingresen a Cubicol."],
        ],
        { titulo: "Temas y resoluciones" },
      ),
    ]),
    sec("3. Acuerdos", [
      tabla(
        ["N.º", "Acuerdo", "Responsable", "Plazo"],
        [6, 54, 22, 18],
        [
          ["A-1", "Firmar el acta de constitución del proyecto.", `Promotora Directora y ${R.jhostin}`, c("Cumplido", "verde", { align: "center" })],
          ["A-2", "Canalizar toda la comunicación con el colegio a través del Product Owner.", `${R.helber}`, "Desde el 12/10/2026"],
          ["A-3", "Avisar a los apoderados sobre el proyecto y el uso de los datos por WhatsApp de los tutores.", "Dirección, por medio de los tutores; redacta el equipo", "Lo antes posible"],
          ["A-4", "Pedir las exportaciones de notas de Cubicol a través del Product Owner.", `${R.jadira} y ${R.helber}`, "—"],
        ],
        { titulo: "Acuerdos de la reunión" },
      ),
      p(
        "Los acuerdos A-2 y A-4 cambian el plan de comunicaciones y quedan registrados como el cambio SC-11 (GOB-10). La fecha tentativa del aviso a los apoderados figura en el registro de comunicaciones (INT-06).",
      ),
    ]),
    sec("4. Próximos pasos", [
      kv(
        ["Próxima reunión con la Dirección", "No se programa. La coordinación sigue a través del Product Owner."],
        ["Próxima revisión de avance", `Revisión del Sprint 1, el ${fmtIso(SPRINTS[0].revision)}, presentada al Product Owner.`],
      ),
      nota(`Acta emitida para firma el ${P.fechaCorte}.`, "info"),
      firmas(
        { nombre: "Promotora Directora", rol: "Patrocinadora — I.E.P. Peruano Francés" },
        { nombre: P.director, rol: "Director del proyecto" },
      ),
    ]),
  ],
});
