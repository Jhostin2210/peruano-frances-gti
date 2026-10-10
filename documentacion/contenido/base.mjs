// BASE-01: ficha del proyecto e índice de la documentación. Se arma con la lista completa de documentos.

import { c, h, kv, nota, p, sec, tabla, ul } from "../lib/bloques.mjs";
import { PROYECTO as P } from "../proyecto.mjs";
import { TOTALES as TC } from "../datos/calendario.mjs";
import { INTERESADOS } from "../datos/interesados.mjs";
import { CAMBIOS } from "../datos/registros.mjs";
import { COMPONENTES, ENTREGABLES, TOTALES_ALCANCE as TA } from "../datos/requisitos.mjs";
import { DOC, kvPresupuesto, tablaEquipo, tablaSprints } from "./comunes.mjs";
import { DOMINIOS, PROCESOS } from "./procesos.mjs";

export const BASE_META = {
  id: "BASE-01",
  titulo: "Ficha del proyecto e índice de la documentación",
  archivo: "BASE-01 Ficha e índice",
  carpeta: "00 - Ficha e índice",
};

const COLOR_ESTADO = { Desarrollado: "verde", "Desarrollado en parte": "amarillo", "Curso anterior": "azul", Pendiente: "gris" };

export function crearBASE01(documentos) {
  const todos = [{ ...BASE_META, proceso: "—", area: "—", dominio: "Transversal" }, ...documentos];
  const aplicados = (dominio) => PROCESOS.filter((x) => x.dominio === dominio && x.estado === "Aplicado").length;
  return DOC({
    ...BASE_META,
    area: "Todas",
    proceso: "Documento de referencia",
    salida: "Ficha única del proyecto e índice de documentos",
    resumen:
      "Punto de entrada a la documentación. Reúne los datos que deben coincidir en todos los documentos, la lista de documentos emitidos y su ubicación, y lo que falta por desarrollar.",
    secciones: [
      sec("1. Ficha del proyecto", [
        kv(
          ["Proyecto", P.nombre],
          ["Sigla", P.sigla],
          ["Organización cliente", `${P.cliente}. ${P.clienteDireccion}.`],
          ["Patrocinadora", P.patrocinadora],
          ["Director del proyecto", P.director],
          ["Curso", `${P.curso} — ${P.universidad}`],
          ["Docente asesor", P.docente],
          ["Guía de referencia", P.guia],
          ["Periodo", `Del ${P.inicio} al ${P.fin}, con receso del 01/02/2027 al 26/02/2027`],
          ["Enfoque de desarrollo", "Híbrido: líneas base predictivas y construcción en seis sprints de cuatro semanas"],
          ["Blog del proyecto", P.enlaces.blog],
          ["Repositorio", P.enlaces.repositorio],
        ),
        tablaEquipo(),
      ]),
      sec("2. Datos que no deben variar entre documentos", [
        p("Estas cifras se escriben una sola vez, en la fuente de contenido del repositorio, y todos los documentos las toman de ahí."),
        tabla(
          ["Dato", "Valor", "Documento de origen"],
          [38, 38, 24],
          [
            ["Colegio", "Alrededor de 200 estudiantes y 16 docentes y auxiliares", "GOB-01"],
            ["Entrevista de campo", "24/04/2026, a la Promotora Directora", "INT-04"],
            ["Encuesta a docentes", "15/05/2026, 6 respuestas", "INT-04"],
            ["Validez del cuestionario", "0.88 (dos jueces, 88 de 100 puntos)", "GOB-10 (SC-05)"],
            ["Interesados identificados", String(INTERESADOS.length), "INT-01"],
            ["Requisitos", `${TA.requisitos}: ${TA.funcionales} funcionales y ${TA.noFuncionales} no funcionales`, "ALC-02"],
            ["Casos de prueba", String(TA.casosDePrueba), "ALC-03"],
            ["Entregables del producto", `${ENTREGABLES.length} (E-01 a E-09)`, "ALC-02"],
            ["Componentes de la EDT", String(COMPONENTES.length), "ALC-02"],
            ["Niveles de riesgo del estudiante", "Tres: bajo, medio y alto", "GOB-10 (SC-04)"],
            ["Roles de usuario", "Cuatro: docente, coordinación, psicología y dirección", "GOB-10 (SC-04)"],
            ["Actividades del cronograma", `${TC.actividades} y una reunión diaria`, "CRO-01"],
            ["Sprints y semanas", `6 sprints de 4 semanas: ${TC.semanas} semanas`, "CRO-01"],
            ["Suma de duraciones esperadas (PERT)", `${TC.te.toFixed(1)} días`, "CRO-01"],
            ["Línea base de costos", P.presupuesto.lineaBase, "Línea base de costos v2"],
            ["Presupuesto total", P.presupuesto.total, "Línea base de costos v2"],
            ["Solicitudes de cambio registradas", String(CAMBIOS.length), "GOB-10"],
          ],
          { titulo: "Cifras de referencia del proyecto", compacta: true },
        ),
        kvPresupuesto(),
      ]),
      sec("3. Calendario", [tablaSprints()]),
      sec("4. Índice de documentos", [
        tabla(
          ["Código", "Documento", "Dominio", "Proceso", "Área de enfoque", "Carpeta"],
          [9, 25, 11, 22, 13, 20],
          todos.map((d) => [c(d.id, undefined, { bold: true }), d.titulo, d.dominio ?? "Transversal", d.proceso ?? "—", d.area ?? "—", d.carpeta]),
          {
            titulo: `Documentos emitidos (${todos.length})`,
            compacta: true,
            fuente: "Cada documento está en Word y en PDF dentro de su carpeta. Los PDF también se publican en el blog.",
          },
        ),
      ]),
      sec("5. Cobertura de la Guía del PMBOK®", [
        p(
          "La octava edición organiza la dirección de proyectos en siete dominios de desempeño y 40 procesos. En esta entrega el equipo desarrolló los dominios de Gobernanza y de Interesados, y completó lo que faltaba de Alcance y de Cronograma.",
        ),
        tabla(
          ["Dominio", "Procesos", "Con documento nuevo", "Estado", "Observación"],
          [14, 10, 14, 18, 44],
          DOMINIOS.map((d) => [
            d.nombre,
            c(String(d.procesos), undefined, { align: "center" }),
            c(String(aplicados(d.nombre)), undefined, { align: "center" }),
            c(d.estado, COLOR_ESTADO[d.estado], { bold: true }),
            {
              Gobernanza: "Los nueve procesos tienen documento.",
              Alcance: "Los requisitos, la EDT y su diccionario vienen del curso anterior. El control y la validación están planificados y empiezan con los sprints.",
              Cronograma: "Línea base versión 3. El control empieza con los sprints.",
              Finanzas: "Estimación y presupuesto del curso anterior; falta redistribuirlos con el calendario nuevo.",
              Interesados: "Los cuatro procesos de involucramiento y el plan de comunicaciones tienen documento.",
              Recursos: "Por desarrollar.",
              Riesgo: "Por desarrollar. Hay una lista de riesgos de alto nivel en GOB-01.",
            }[d.nombre],
          ]),
          { titulo: "Cobertura por dominio de desempeño" },
        ),
      ]),
      sec("6. Documentos de la fase de formulación que siguen en uso", [
        tabla(
          ["Documento", "Situación", "Qué lo actualiza"],
          [34, 38, 28],
          [
            ["Planteamiento del problema y árboles", "Vigente.", "—"],
            ["Análisis de alternativas", "Vigente como antecedente; la decisión de alojamiento cambió.", "GOB-05 y SC-03"],
            ["Documentación de requisitos V3", "Vigente: 20 requisitos.", "ALC-02 (cambios de la versión 3)"],
            ["Matriz de trazabilidad", "Vigente: 80 casos de prueba.", "ALC-03"],
            ["Declaración del alcance", "Reemplazada.", "ALC-02"],
            ["EDT y diccionario de la EDT", "Vigentes; por unificar.", "SC-10"],
            ["Cronograma (6 sprints)", "Reemplazado.", "CRO-01"],
            ["Línea base de costos", "Montos vigentes; fechas por actualizar.", "SC-02"],
            ["Registro de interesados", "Reemplazado.", "INT-01"],
            ["Prototipo", "Demostración con datos simulados.", "IN-03 y SC-08"],
          ],
          { titulo: "Material heredado del curso anterior", fuente: "Los archivos originales del curso anterior no se modificaron." },
        ),
      ]),
      sec("7. Organización y mantenimiento", [
        h("Carpetas"),
        ul(
          "**00 - Ficha e índice.** Este documento.",
          "**01 - Gobernanza.** Una subcarpeta por proceso, de 1.1 a 1.9.",
          "**02 - Interesados.** Una subcarpeta por proceso, de 2.1 a 2.4.",
          "**03 - Alcance.** Planificación, enunciado, calidad y validación.",
          "**04 - Cronograma.** Línea base del cronograma.",
        ),
        h("Códigos y versiones"),
        ul(
          "El código indica el dominio: GOB, INT, ALC o CRO, más un número correlativo.",
          "Un ajuste de redacción sube el decimal de la versión; un cambio aprobado que altera el contenido sube el entero.",
          "Los informes periódicos (calidad, desempeño y seguimiento del involucramiento) llevan número: el siguiente se emite al cierre de cada sprint.",
        ),
        h("Cómo se actualizan"),
        p(
          "El contenido de los documentos está en la carpeta «documentacion» del repositorio. Al cambiarlo se vuelven a generar los archivos Word, los PDF y las páginas del blog, de modo que los tres dicen siempre lo mismo.",
        ),
        nota(
          "Ningún documento de esta carpeta contiene nombres, notas ni correos de estudiantes, docentes o apoderados. El acta de constitución está emitida para firma y todavía no ha sido firmada.",
          "aviso",
        ),
      ]),
    ],
  });
}
