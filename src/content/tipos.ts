// Tipos del contenido que genera documentacion/generar.mjs (documentos.ts y datos.ts).

export type Relleno = "verde" | "amarillo" | "rojo" | "azul" | "gris" | "teal" | "naranja" | "morado" | "navy";

export interface CeldaDef {
  x: string | string[];
  fill?: string;
  bold?: boolean;
  align?: string;
}

export type Celda = string | string[] | CeldaDef;

export type Bloque =
  | { t: "p"; x: string }
  | { t: "h"; x: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "tabla"; cols: string[]; anchos: number[]; filas: Celda[][]; titulo?: string; fuente?: string; compacta?: boolean }
  | { t: "nota"; tipo: string; x: string }
  | { t: "kv"; filas: string[][] }
  | { t: "firmas"; firmantes: { nombre: string; rol: string }[] };

export interface SeccionDef {
  titulo: string;
  apaisada: boolean;
  bloques: Bloque[];
}

export interface DocDef {
  id: string;
  titulo: string;
  dominio: string | null;
  area: string | null;
  proceso: string | null;
  salida: string;
  version: string;
  fecha: string;
  resumen: string;
  carpeta: string;
  pdf: string;
  docx: string;
  secciones: SeccionDef[];
}

export interface ProcesoDef {
  id: string;
  dominio: string;
  grupo?: string;
  area: string;
  nombre: string;
  estado: string;
  que?: string;
  entradas?: string[];
  herramientas?: string[];
  salidas?: string[];
  docs: string[];
}

export interface DominioDef {
  id: string;
  nombre: string;
  procesos: number;
  descripcion: string;
  estado: string;
}
