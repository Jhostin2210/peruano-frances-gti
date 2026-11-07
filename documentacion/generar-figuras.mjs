// Genera las figuras de los Word que son diagramas (hoy, la RBS del REC-01) como imágenes PNG en assets/.
// Dibuja cada figura en HTML y la captura con Microsoft Edge sin ventana (protocolo de depuración de Chrome).
// Uso: node documentacion/generar-figuras.mjs   (luego, node documentacion/generar.mjs para rehacer los Word)

import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { RBS } from "./datos/recursos.mjs";
import { PROYECTO as P } from "./proyecto.mjs";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const EDGE = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
].find((r) => fs.existsSync(r));
const PUERTO = 9341;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// ── RBS: raíz, categorías en una fila y, debajo de cada una, sus tipos de recurso ──
function htmlRbs() {
  const hoja = (n) =>
    `<div class="hoja"><span class="cod">${n.id}</span><b>${esc(n.nombre)}</b>${n.detalle ? `<i>${esc(n.detalle)}</i>` : ""}</div>`;
  const lista = (hijos) => `<div class="lista">${hijos.map(hoja).join("")}</div>`;
  const columna = (n, clase) =>
    `<div class="col"><div class="${clase}"><span class="cod">${n.id}</span><b>${esc(n.nombre)}</b>${n.detalle ? `<i>${esc(n.detalle)}</i>` : ""}</div>${
      n.hijos?.length ? lista(n.hijos) : ""
    }</div>`;
  const categoria = (n) => {
    const conGrupos = n.hijos?.some((h) => h.hijos?.length);
    const cuerpo = conGrupos ? `<div class="sub">${n.hijos.map((h) => columna(h, "grupo")).join("")}</div>` : n.hijos?.length ? lista(n.hijos) : "";
    return `<div class="cat" style="flex:${conGrupos ? n.hijos.length : 1}"><div class="caja"><span class="cod">${n.id}</span><b>${esc(n.nombre)}</b></div>${cuerpo}</div>`;
  };
  return `<!doctype html><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0}
  body{font-family:Arial,Helvetica,sans-serif;background:#fff;color:#1e293b}
  #fig{width:1100px;padding:18px 14px 16px;background:#fff}
  .cod{display:block;font-family:Consolas,monospace;font-size:10px;opacity:.75}
  b{display:block;font-size:12.5px;line-height:1.2}
  i{display:block;font-style:normal;font-size:10.5px;line-height:1.25;color:#475569;margin-top:2px}
  .raiz{width:520px;margin:0 auto;background:#1f3864;color:#fff;border-radius:10px;padding:9px 14px;text-align:center}
  .raiz b{font-size:14px}
  .tallo{width:2px;height:14px;background:#94a3b8;margin:0 auto}
  .fila{display:flex;gap:10px;position:relative}
  .cat{position:relative;padding-top:14px;display:flex;flex-direction:column}
  .cat:before{content:"";position:absolute;top:0;left:50%;width:2px;height:14px;background:#94a3b8}
  .caja{background:#0d7377;color:#fff;border-radius:8px;padding:7px 10px;text-align:center}
  .caja .cod{color:#d1fae5;opacity:1}
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
  <div class="raiz"><b>${esc(P.sigla)} · Recursos del proyecto</b></div>
  <div class="tallo"></div>
  <div class="fila">${RBS.map(categoria).join("")}<div class="barra"></div></div>
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
const FIGURAS = [["rbs.png", htmlRbs()]];
fs.mkdirSync(path.join(AQUI, "..", "public", "figuras"), { recursive: true });
for (const [archivo, html] of FIGURAS) {
  const destino = path.join(AQUI, "assets", archivo);
  await capturar(html, destino);
  fs.copyFileSync(destino, path.join(AQUI, "..", "public", "figuras", archivo));
}
