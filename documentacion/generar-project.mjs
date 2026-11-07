// Genera el cronograma v3 (CRO-01) como archivo XML de MS Project (formato MSPDI).
// Uso: node documentacion/generar-project.mjs
// Se abre en MS Project con Archivo → Abrir → tipo «Formato XML»; luego se guarda como .mpp.
//
// Las fechas y las dependencias salen de red() en datos/calendario.mjs (las mismas del documento CRO-01
// y del blog). Cada actividad lleva la restricción «No comenzar antes del» en su fecha, así Project
// respeta el calendario aunque las dependencias le dejen holgura.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FERIADOS, RECESO, SPRINTS, aFecha, aIso, diasHabiles, red } from "./datos/calendario.mjs";
import { RECURSOS_PROJECT as RECURSOS, recursosDe } from "./datos/recursos.mjs";
import { PROYECTO } from "./proyecto.mjs";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const SALIDA = path.resolve(
  AQUI,
  "../../TRABAJOS GRUPALES - FORMULACION Y EVALUACION DE PROYECTOS TI/Proyecto - Colegio Peruano Frances - Archivos/Cronograma MS Project/CRO-01 Cronograma SIA-T v3.xml",
);

const ini = (d) => `${aIso(d)}T08:00:00`;
const fin = (d) => `${aIso(d)}T17:00:00`;
const horas = (h) => `PT${Math.round(h * 100) / 100}H0M0S`;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// El equipo es de estudiantes a tiempo parcial: cada asignación es al 50 %. La reunión diaria (15 min) es el 3 %.
const UNIDADES = 0.5;
const UNIDADES_DAILY = 0.03;

const nodos = red();
const tareas = [];
let uid = 0;
const uidDe = new Map();

function tarea(t) {
  const x = { uid: ++uid, preds: [], recursos: [], ...t };
  tareas.push(x);
  if (t.clave) uidDe.set(t.clave, x.uid);
  return x;
}

const proyecto = tarea({
  nombre: "Sistema ML - Alerta Temprana Académica SIA-T (I.E.P. Peruano Francés)",
  nivel: 1,
  numero: "1",
  resumen: true,
  inicio: aFecha(SPRINTS[0].inicio),
  fin: aFecha(SPRINTS[5].fin),
});

const actividad = (a, nivel, numero, notas, unidades) =>
  tarea({
    clave: a.id,
    nombre: `${a.id} ${a.descripcion}${a.continua ? ` (${a.semana})` : ""}`,
    nivel,
    numero,
    inicio: a.inicio,
    fin: a.fin,
    dias: a.dias,
    paquete: a.paquete,
    entregable: a.entregable,
    notas,
    recursos: recursosDe(a.responsable),
    unidades,
    restriccion: true,
    predsClave: a.preds,
  });

let siguiente = 1;
for (const sp of SPRINTS) {
  const resumen = tarea({ nombre: `Sprint ${sp.n}: ${sp.nombre} (S${sp.semanas[0]}–S${sp.semanas[1]})`, nivel: 2, numero: `1.${siguiente++}`, resumen: true });
  let j = 0;
  for (const a of nodos.filter((x) => x.sprint === sp.n && (x.tipo === "actividad" || x.tipo === "hito"))) {
    const numero = `${resumen.numero}.${++j}`;
    if (a.tipo === "hito") tarea({ clave: a.id, nombre: a.descripcion, nivel: 3, numero, hito: true, inicio: a.inicio, fin: a.fin, predsClave: a.preds });
    else actividad(a, 3, numero, `Entregable: ${a.entregable}. Responsable: ${a.responsable}. Semana: ${a.semana}. PERT: To ${a.to} · Tm ${a.tm} · Tp ${a.tp} · Te ${a.te} días.${a.isCritical ? " Ruta crítica según el análisis PERT." : ""}`, UNIDADES);
  }
  const r = sp.n === 4 && nodos.find((x) => x.tipo === "receso");
  if (r)
    tarea({ clave: r.id, nombre: r.descripcion, nivel: 2, numero: `1.${siguiente++}`, inicio: r.inicio, fin: r.fin, dias: r.dias, notas: `${RECESO.motivo}. Reserva de gestión: 22/02/2027 al 26/02/2027.`, restriccion: true, predsClave: r.preds });
}
// Actividades continuas (la reunión diaria): van aparte, al final, para no estirar la barra de su sprint.
for (const a of nodos.filter((x) => x.tipo === "continua"))
  actividad(a, 2, `1.${siguiente++}`, `Responsable: ${a.responsable}. Actividad continua: no entra en el cálculo PERT. Empieza con el Sprint 2.`, UNIDADES_DAILY);
for (const t of tareas) t.preds = (t.predsClave ?? []).map((k) => uidDe.get(k));

// Fechas de los resúmenes a partir de sus hijas.
for (const t of tareas.filter((x) => x.resumen).sort((a, b) => b.nivel - a.nivel)) {
  const hijas = tareas.filter((x) => x.numero.startsWith(`${t.numero}.`));
  if (!hijas.length) continue;
  t.inicio = new Date(Math.min(...hijas.map((h) => h.inicio.getTime())));
  t.fin = new Date(Math.max(...hijas.map((h) => h.fin.getTime())));
  t.dias = diasHabiles(t.inicio, t.fin);
}

const recursoUid = new Map(RECURSOS.map((r, i) => [r.nombre, i + 1]));
const asignaciones = [];
for (const t of tareas) {
  for (const nombre of t.recursos) {
    if (!recursoUid.has(nombre)) throw new Error(`Recurso desconocido: ${nombre} (${t.nombre})`);
    asignaciones.push({ uid: asignaciones.length + 1, tarea: t, recurso: recursoUid.get(nombre), unidades: t.unidades });
  }
}

const TEXT1 = 188743731; // campo Texto1 de Project, rotulado «Paquete EDT»
const TEXT2 = 188743734; // campo Texto2 de Project, rotulado «Entregable»

function xmlTarea(t) {
  const dur = t.hito ? 0 : t.dias * 8;
  const trabajo = t.recursos.length * dur * (t.unidades ?? 0);
  const l = [
    `<UID>${t.uid}</UID><ID>${t.uid}</ID>`,
    `<Name>${esc(t.nombre)}</Name>`,
    `<Type>1</Type><IsNull>0</IsNull>`,
    `<OutlineNumber>${t.numero}</OutlineNumber><OutlineLevel>${t.nivel}</OutlineLevel>`,
    `<Priority>500</Priority>`,
    `<Start>${t.hito ? fin(t.inicio) : ini(t.inicio)}</Start><Finish>${fin(t.fin)}</Finish>`,
    `<Duration>${horas(dur)}</Duration><DurationFormat>7</DurationFormat>`,
  ];
  if (trabajo) l.push(`<Work>${horas(trabajo)}</Work>`);
  l.push(`<EffortDriven>0</EffortDriven><Estimated>0</Estimated>`);
  l.push(`<Milestone>${t.hito ? 1 : 0}</Milestone><Summary>${t.resumen ? 1 : 0}</Summary>`);
  l.push(t.restriccion ? `<ConstraintType>4</ConstraintType><ConstraintDate>${ini(t.inicio)}</ConstraintDate>` : `<ConstraintType>0</ConstraintType>`);
  if (t.notas) l.push(`<Notes>${esc(t.notas)}</Notes>`);
  for (const p of t.preds)
    l.push(`<PredecessorLink><PredecessorUID>${p}</PredecessorUID><Type>1</Type><CrossProject>0</CrossProject><LinkLag>0</LinkLag><LinkLagFormat>7</LinkLagFormat></PredecessorLink>`);
  if (t.paquete) l.push(`<ExtendedAttribute><FieldID>${TEXT1}</FieldID><Value>${t.paquete}</Value></ExtendedAttribute>`);
  if (t.entregable) l.push(`<ExtendedAttribute><FieldID>${TEXT2}</FieldID><Value>${esc(t.entregable)}</Value></ExtendedAttribute>`);
  l.push(`<Baseline><Number>0</Number><Start>${t.hito ? fin(t.inicio) : ini(t.inicio)}</Start><Finish>${fin(t.fin)}</Finish><Duration>${horas(dur)}</Duration><DurationFormat>7</DurationFormat>${trabajo ? `<Work>${horas(trabajo)}</Work>` : ""}</Baseline>`);
  return `    <Task>\n      ${l.join("\n      ")}\n    </Task>`;
}

const jornada = `<WorkingTimes><WorkingTime><FromTime>08:00:00</FromTime><ToTime>12:00:00</ToTime></WorkingTime><WorkingTime><FromTime>13:00:00</FromTime><ToTime>17:00:00</ToTime></WorkingTime></WorkingTimes>`;
const semana = [1, 2, 3, 4, 5, 6, 7]
  .map((d) => (d === 1 || d === 7 ? `        <WeekDay><DayType>${d}</DayType><DayWorking>0</DayWorking></WeekDay>` : `        <WeekDay><DayType>${d}</DayType><DayWorking>1</DayWorking>${jornada}</WeekDay>`))
  .join("\n");
const excepciones = FERIADOS.map(
  (f) => `        <WeekDay><DayType>0</DayType><DayWorking>0</DayWorking><TimePeriod><FromDate>${f.fecha}T00:00:00</FromDate><ToDate>${f.fecha}T23:59:00</ToDate></TimePeriod></WeekDay>`,
).join("\n");

const fechaCorte = PROYECTO.fechaCorte.split("/").reverse().join("-");
const xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Project xmlns="http://schemas.microsoft.com/project">
  <SaveVersion>14</SaveVersion>
  <Name>CRO-01 Cronograma SIA-T v3</Name>
  <Title>Línea base del cronograma v3 - SIA-T, Sistema de Alerta Temprana Académica - I.E.P. Peruano Francés</Title>
  <Subject>Gestión de Proyecto de TI - UNTELS</Subject>
  <Author>Equipo SIA-T (UNTELS)</Author>
  <Manager>Jhostin Galarza</Manager>
  <CreationDate>${fechaCorte}T08:00:00</CreationDate>
  <LastSaved>${fechaCorte}T08:00:00</LastSaved>
  <ScheduleFromStart>1</ScheduleFromStart>
  <StartDate>${ini(proyecto.inicio)}</StartDate>
  <FinishDate>${fin(proyecto.fin)}</FinishDate>
  <FYStartDate>1</FYStartDate>
  <CriticalSlackLimit>0</CriticalSlackLimit>
  <CurrencyDigits>2</CurrencyDigits>
  <CurrencySymbol>S/</CurrencySymbol>
  <CurrencyCode>PEN</CurrencyCode>
  <CurrencySymbolPosition>0</CurrencySymbolPosition>
  <CalendarUID>1</CalendarUID>
  <DefaultStartTime>08:00:00</DefaultStartTime>
  <DefaultFinishTime>17:00:00</DefaultFinishTime>
  <MinutesPerDay>480</MinutesPerDay>
  <MinutesPerWeek>2400</MinutesPerWeek>
  <DaysPerMonth>20</DaysPerMonth>
  <DefaultTaskType>1</DefaultTaskType>
  <DefaultFixedCostAccrual>3</DefaultFixedCostAccrual>
  <DefaultStandardRate>0</DefaultStandardRate>
  <DefaultOvertimeRate>0</DefaultOvertimeRate>
  <DurationFormat>7</DurationFormat>
  <WorkFormat>2</WorkFormat>
  <WeekStartDay>1</WeekStartDay>
  <CurrentDate>${fechaCorte}T08:00:00</CurrentDate>
  <ExtendedAttributes>
    <ExtendedAttribute><FieldID>${TEXT1}</FieldID><FieldName>Text1</FieldName><Alias>Paquete EDT</Alias></ExtendedAttribute>
    <ExtendedAttribute><FieldID>${TEXT2}</FieldID><FieldName>Text2</FieldName><Alias>Entregable</Alias></ExtendedAttribute>
  </ExtendedAttributes>
  <Calendars>
    <Calendar>
      <UID>1</UID>
      <Name>SIA-T (lunes a viernes, feriados de Perú)</Name>
      <IsBaseCalendar>1</IsBaseCalendar>
      <BaseCalendarUID>-1</BaseCalendarUID>
      <WeekDays>
${semana}
${excepciones}
      </WeekDays>
    </Calendar>
  </Calendars>
  <Tasks>
${tareas.map(xmlTarea).join("\n")}
  </Tasks>
  <Resources>
${RECURSOS.map((r, i) => `    <Resource><UID>${i + 1}</UID><ID>${i + 1}</ID><Name>${esc(r.nombre)}</Name><Type>1</Type><IsNull>0</IsNull><Initials>${r.iniciales}</Initials><Group>${esc(r.grupo)}</Group><MaxUnits>1</MaxUnits></Resource>`).join("\n")}
  </Resources>
  <Assignments>
${asignaciones
  .map((a) => {
    const t = a.tarea;
    const trabajo = t.dias * 8 * a.unidades;
    return `    <Assignment><UID>${a.uid}</UID><TaskUID>${t.uid}</TaskUID><ResourceUID>${a.recurso}</ResourceUID><Finish>${fin(t.fin)}</Finish><Start>${ini(t.inicio)}</Start><Units>${a.unidades}</Units><Work>${horas(trabajo)}</Work></Assignment>`;
  })
  .join("\n")}
  </Assignments>
</Project>
`;

fs.mkdirSync(path.dirname(SALIDA), { recursive: true });
fs.writeFileSync(SALIDA, xml, "utf8");
const enlaces = tareas.reduce((n, t) => n + t.preds.length, 0);
console.log(`${SALIDA}\n${tareas.length} tareas, ${enlaces} dependencias, ${RECURSOS.length} recursos, ${asignaciones.length} asignaciones`);
