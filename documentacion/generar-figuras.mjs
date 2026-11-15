// Genera las figuras de los Word que son diagramas (RBS, organigrama e histograma de recursos) como PNG en assets/.
// Dibuja cada figura en HTML y la captura con Microsoft Edge sin ventana (protocolo de depuración de Chrome).
// Uso: node documentacion/generar-figuras.mjs   (luego, node documentacion/generar.mjs para rehacer los Word)

import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { RBS } from "./datos/recursos.mjs";
import { ORGANIGRAMA, histograma } from "./datos/gestion-recursos.mjs";
import { CORTE_CONTROL, curvaS, valorGanado } from "./datos/finanzas.mjs";
import { PROYECTO as P } from "./proyecto.mjs";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const EDGE = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
].find((r) => fs.existsSync(r));
const PUERTO = 9341;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ── Árbol jerárquico: raíz, categorías en una fila y, debajo de cada una, sus grupos u hojas (RBS y organigrama) ──
const cod = (n) => (n.id ? `<span class="cod">${n.id}</span>` : "");
function htmlArbol({ raiz, nodos, ancho = 1100 }) {
  const hoja = (n) =>
    `<div class="hoja">${cod(n)}<b>${esc(n.nombre)}</b>${n.detalle ? `<i>${esc(n.detalle)}</i>` : ""}</div>`;
  const lista = (hijos) => `<div class="lista">${hijos.map(hoja).join("")}</div>`;
  const columna = (n, clase) =>
    `<div class="col"><div class="${clase}">${cod(n)}<b>${esc(n.nombre)}</b>${n.detalle ? `<i>${esc(n.detalle)}</i>` : ""}</div>${
      n.hijos?.length ? lista(n.hijos) : ""
    }</div>`;
  const categoria = (n) => {
    const conGrupos = n.hijos?.some((h) => h.hijos?.length);
    const cuerpo = conGrupos ? `<div class="sub">${n.hijos.map((h) => columna(h, "grupo")).join("")}</div>` : n.hijos?.length ? lista(n.hijos) : "";
    return `<div class="cat" style="flex:${conGrupos ? n.hijos.length : 1}"><div class="caja">${cod(n)}<b>${esc(n.nombre)}</b>${n.detalle ? `<i>${esc(n.detalle)}</i>` : ""}</div>${cuerpo}</div>`;
  };
  return `<!doctype html><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0}
  body{font-family:Arial,Helvetica,sans-serif;background:#fff;color:#1e293b}
  #fig{width:${ancho}px;padding:18px 14px 16px;background:#fff}
  .cod{display:block;font-family:Consolas,monospace;font-size:10px;opacity:.75}
  b{display:block;font-size:12.5px;line-height:1.2}
  i{display:block;font-style:normal;font-size:10.5px;line-height:1.25;color:#475569;margin-top:2px}
  .raiz{width:${Math.min(520, ancho - 200)}px;margin:0 auto;background:#1f3864;color:#fff;border-radius:10px;padding:9px 14px;text-align:center}
  .raiz b{font-size:14px}
  .raiz i{color:#c7d2fe}
  .tallo{width:2px;height:14px;background:#94a3b8;margin:0 auto}
  .fila{display:flex;gap:10px;position:relative}
  .cat{position:relative;padding-top:14px;display:flex;flex-direction:column}
  .cat:before{content:"";position:absolute;top:0;left:50%;width:2px;height:14px;background:#94a3b8}
  .caja{background:#0d7377;color:#fff;border-radius:8px;padding:7px 10px;text-align:center}
  .caja .cod{color:#d1fae5;opacity:1}
  .caja i{color:#ccfbf1}
  .sub{display:flex;gap:10px;margin-top:12px;position:relative}
  .sub:before{content:"";position:absolute;top:-14px;left:50%;width:2px;height:12px;background:#94a3b8}
  .sub .col{flex:1;position:relative;padding-top:12px}
  .sub .col:before{content:"";position:absolute;top:0;left:50%;width:2px;height:12px;background:#94a3b8}
  .grupo{background:#e6f2f2;border:1.5px solid #0d7377;border-radius:8px;padding:6px 9px;text-align:center}
  .grupo .cod{color:#0d7377}
  .lista{margin:8px 0 0 12px;display:flex;flex-direction:column;gap:6px}
  .hoja{position:relative;margin-left:12px;background:#fff;border:1px solid #cbd5e1;border-radius:6px;padding:5px 8px}
  .hoja:before{content:"";position:absolute;left:-14px;top:50%;width:12px;height:2px;background:#94a3b8}
  .hoja:after{content:"";position:absolute;left:-14px;top:-8px;width:2px;height:calc(100% + 8px);background:#94a3b8}
  .hoja:last-child:after{height:calc(50% + 9px)}
  .hoja .cod{color:#64748b}
  .hoja b{font-size:11.5px;font-weight:600}
  /* La línea horizontal de cada fila va del centro del primer recuadro al centro del último. */
  .barra{position:absolute;top:0;height:2px;background:#94a3b8}
</style>
<div id="fig">
  <div class="raiz"><b>${esc(raiz.nombre)}</b>${raiz.detalle ? `<i>${esc(raiz.detalle)}</i>` : ""}</div>
  <div class="tallo"></div>
  <div class="fila">${nodos.map(categoria).join("")}<div class="barra"></div></div>
</div>
<script>
  // Ubica la barra horizontal entre los centros de la primera y la última categoría.
  const cats=[...document.querySelectorAll(".fila>.cat")], fila=document.querySelector(".fila").getBoundingClientRect();
  const cx=(e)=>e.getBoundingClientRect().left+e.getBoundingClientRect().width/2-fila.left;
  const b=document.querySelector(".barra"); b.style.left=cx(cats[0])+"px"; b.style.width=(cx(cats.at(-1))-cx(cats[0]))+"px";
  // Igual en las subcategorías de cada categoría con grupos.
  for(const s of document.querySelectorAll(".sub")){const r=s.getBoundingClientRect(),cs=[...s.children];
    const x=document.createElement("div");x.className="barra";
    const c=(e)=>e.getBoundingClientRect().left+e.getBoundingClientRect().width/2-r.left;
    x.style.left=c(cs[0])+"px";x.style.width=(c(cs.at(-1))-c(cs[0]))+"px";s.appendChild(x);}
</script>`;
}

// ── Histograma de recursos: horas por semana de cada integrante frente a sus horas disponibles ──
function htmlHistograma() {
  const h = histograma();
  const max = 40, alto = 64;
  const fila = (t) => `<div class="fila-h"><div class="nom">${esc(t.nombre)}</div><div class="barras">${t.horas
    .map((x, i) => {
      const cap = h.semanas[i].capacidad, exc = x > cap * 1.1 ? "exc" : x > cap ? "leve" : "";
      return `<div class="col-h"><div class="cap" style="bottom:${(cap / max) * alto}px"></div><div class="bar ${exc}" style="height:${(Math.min(x, max) / max) * alto}px"></div></div>`;
    })
    .join("")}</div></div>`;
  const sprints = [1, 2, 3, 4, 5, 6].map((n) => `<div class="sp" style="flex:${h.semanas.filter((s) => s.sprint === n).length}">Sprint ${n}</div>`).join("");
  const semanas = h.semanas.map((s) => `<div class="sem">${s.n}</div>`).join("");
  return `<!doctype html><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0} body{font-family:Arial,Helvetica,sans-serif;background:#fff;color:#1e293b}
  #fig{width:1100px;padding:14px 16px}
  .fila-h{display:flex;align-items:flex-end;margin-bottom:10px}
  .nom{width:130px;font-size:12px;font-weight:bold;padding-bottom:4px}
  .barras,.eje{flex:1;display:flex;gap:3px}
  .col-h{flex:1;height:${alto}px;position:relative;background:#f1f5f9;border-radius:2px}
  .bar{position:absolute;bottom:0;left:0;right:0;background:#0d7377;border-radius:2px 2px 0 0}
  .bar.exc{background:#dc2626}
  .bar.leve{background:#f59e0b}
  .cap{position:absolute;left:-1px;right:-1px;height:0;border-top:2px dashed #1f3864;z-index:2}
  .eje{margin-left:130px}
  .sem{flex:1;text-align:center;font-size:10px;color:#64748b}
  .sps{display:flex;gap:3px;margin:4px 0 0 130px}
  .sp{text-align:center;font-size:10.5px;font-weight:bold;color:#1f3864;border-top:2px solid #1f3864;padding-top:2px}
  .ley{margin:10px 0 0 130px;font-size:11px;color:#475569;display:flex;gap:18px}
  .ley span{display:inline-block;width:12px;height:10px;margin-right:5px;vertical-align:middle}
</style><div id="fig">${h.integrantes.map(fila).join("")}<div class="eje">${semanas}</div><div class="sps">${sprints}</div>
<div class="ley"><div><span style="background:#0d7377"></span>Horas asignadas</div><div><span style="background:#f59e0b"></span>Hasta 10 % más que lo disponible</div><div><span style="background:#dc2626"></span>Más del 10 % sobre lo disponible</div><div><span style="border-top:2px dashed #1f3864;height:0"></span>Disponible en la semana (20 h; menos con feriados)</div><div>Escala: 0 a ${max} h</div></div></div>`;
}

// ── Curva S: valor planificado acumulado por semana y valor ganado y costo real al corte ──
function htmlCurvaS() {
  const c = curvaS(), v = valorGanado(CORTE_CONTROL);
  const W = 1000, H = 380, m = { l: 70, r: 20, t: 20, b: 50 };
  const max = Math.ceil(c[c.length - 1].pvAcumulado / 2000) * 2000;
  const x = (k) => m.l + ((k - 0.5) / c.length) * (W - m.l - m.r);
  const y = (val) => H - m.b - (val / max) * (H - m.t - m.b);
  const semCorte = c.findIndex((s) => s.viernes >= CORTE_CONTROL) + 1;
  const linea = c.map((s, i) => `${i ? "L" : "M"}${x(s.semana).toFixed(1)},${y(s.pvAcumulado).toFixed(1)}`).join(" ");
  const ejeY = Array.from({ length: max / 2000 + 1 }, (_, i) => i * 2000).map((val) => `<line x1="${m.l}" x2="${W - m.r}" y1="${y(val)}" y2="${y(val)}" stroke="#e2e8f0"/><text x="${m.l - 8}" y="${y(val) + 4}" text-anchor="end" font-size="11" fill="#64748b">S/ ${(val / 1000).toFixed(0)} mil</text>`).join("");
  const ejeX = c.map((s) => `<text x="${x(s.semana)}" y="${H - m.b + 16}" text-anchor="middle" font-size="10" fill="#64748b">${s.semana}</text>`).join("");
  const sprints = [[1, 4], [5, 8], [9, 12], [13, 16], [17, 20], [21, 24]].map(([a, b], i) => `<text x="${(x(a) + x(b)) / 2}" y="${H - m.b + 34}" text-anchor="middle" font-size="11" font-weight="bold" fill="#1f3864">Sprint ${i + 1}</text>`).join("");
  const pvCorte = c[semCorte - 1].pvAcumulado;
  return `<!doctype html><meta charset="utf-8"><style>*{margin:0} body{font-family:Arial,sans-serif;background:#fff} #fig{width:${W}px;padding:6px}</style>
<div id="fig"><svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">${ejeY}${ejeX}${sprints}
<line x1="${x(semCorte)}" x2="${x(semCorte)}" y1="${m.t}" y2="${H - m.b}" stroke="#94a3b8" stroke-dasharray="4 4"/>
<text x="${x(semCorte) + 6}" y="${m.t + 12}" font-size="11" fill="#475569">Corte ${CORTE_CONTROL.split("-").reverse().join("/")}</text>
<path d="${linea}" fill="none" stroke="#1f3864" stroke-width="2.5"/>
<circle cx="${x(semCorte)}" cy="${y(pvCorte)}" r="6" fill="#1f3864"/>
<circle cx="${x(semCorte)}" cy="${y(v.EV)}" r="7" fill="#0d7377"/>
<circle cx="${x(semCorte)}" cy="${y(v.AC)}" r="3.5" fill="#f59e0b"/>
<text x="${x(semCorte) + 12}" y="${y(v.EV) - 6}" font-size="12" font-weight="bold" fill="#0d7377">EV S/ ${v.EV.toFixed(0)}</text>
<text x="${x(semCorte) + 12}" y="${y(pvCorte) + 16}" font-size="12" font-weight="bold" fill="#1f3864">PV S/ ${pvCorte.toFixed(0)}</text>
</svg>
<div style="font-size:12px;color:#334155;margin:4px 0 0 ${m.l}px;display:flex;gap:22px">
<span><b style="color:#1f3864">━</b> Valor planificado acumulado (PV)</span><span><b style="color:#0d7377">●</b> Valor ganado (EV)</span><span><b style="color:#f59e0b">●</b> Costo real estimado (AC = EV)</span><span>Eje X: semana del cronograma</span></div></div>`;
}

// ── Captura con Edge ──
async function capturar(html, destino) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "sia-t-fig-"));
  const archivo = path.join(tmp, "figura.html");
  fs.writeFileSync(archivo, html);
  const edge = spawn(EDGE, ["--headless=new", `--remote-debugging-port=${PUERTO}`, `--user-data-dir=${path.join(tmp, "perfil")}`, "--hide-scrollbars", "about:blank"], { stdio: "ignore" });
  try {
    let lista;
    for (let i = 0; i < 50 && !lista; i++) {
      try {
        lista = await (await fetch(`http://127.0.0.1:${PUERTO}/json/list`)).json();
      } catch {
        await new Promise((r) => setTimeout(r, 200));
      }
    }
    const pagina = lista.find((t) => t.type === "page");
    const ws = new WebSocket(pagina.webSocketDebuggerUrl);
    await new Promise((r) => ws.addEventListener("open", r, { once: true }));
    let id = 0;
    const pendientes = new Map();
    ws.addEventListener("message", (e) => {
      const m = JSON.parse(e.data);
      if (m.id && pendientes.has(m.id)) pendientes.get(m.id)(m), pendientes.delete(m.id);
    });
    const cdp = (method, params = {}) =>
      new Promise((r) => {
        pendientes.set(++id, r);
        ws.send(JSON.stringify({ id, method, params }));
      });
    await cdp("Emulation.setDeviceMetricsOverride", { width: 1200, height: 900, deviceScaleFactor: 2.5, mobile: false });
    await cdp("Page.navigate", { url: pathToFileURL(archivo).href });
    await new Promise((r) => setTimeout(r, 1200));
    const caja = await cdp("Runtime.evaluate", {
      expression: "JSON.stringify((({x,y,width,height})=>({x,y,width,height}))(document.getElementById('fig').getBoundingClientRect()))",
      returnByValue: true,
    });
    const clip = { ...JSON.parse(caja.result.result.value), scale: 1 };
    const foto = await cdp("Page.captureScreenshot", { format: "png", clip, captureBeyondViewport: true });
    fs.writeFileSync(destino, Buffer.from(foto.result.data, "base64"));
    ws.close();
    console.log(`${path.relative(process.cwd(), destino)}: ${Math.round(clip.width)} × ${Math.round(clip.height)} px (× 2,5)`);
  } finally {
    edge.kill();
    setTimeout(() => fs.rmSync(tmp, { recursive: true, force: true }), 1500);
  }
}

// Cada figura queda en assets/ (para los Word) y en public/figuras/ (para el documento desplegado en el blog).
const FIGURAS = [
  ["rbs.png", htmlArbol({ raiz: { nombre: `${P.sigla} · Recursos del proyecto` }, nodos: RBS })],
  ["organigrama.png", htmlArbol({ raiz: ORGANIGRAMA.raiz, nodos: ORGANIGRAMA.hijos, ancho: 900 })],
  ["histograma.png", htmlHistograma()],
  ["curva-s.png", htmlCurvaS()],
];
fs.mkdirSync(path.join(AQUI, "..", "public", "figuras"), { recursive: true });
for (const [archivo, html] of FIGURAS) {
  const destino = path.join(AQUI, "assets", archivo);
  await capturar(html, destino);
  fs.copyFileSync(destino, path.join(AQUI, "..", "public", "figuras", archivo));
}
