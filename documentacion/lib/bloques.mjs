// Bloques con los que se escribe el contenido de cada documento.
// El mismo contenido se convierte en Word (lib/docx-builder.mjs) y se muestra en el blog (src/components/DocView.tsx).
// Dentro de un texto, **así** se marca negrita.

export const p = (x) => ({ t: "p", x });
export const h = (x) => ({ t: "h", x });
export const ul = (...items) => ({ t: "ul", items });
export const ol = (...items) => ({ t: "ol", items });

// cols: encabezados; anchos: porcentaje por columna; filas: celdas (texto, lista de textos o c(...)).
export const tabla = (cols, anchos, filas, extra = {}) => ({ t: "tabla", cols, anchos, filas, ...extra });

// tipo: "info" | "aviso" | "simulado"
export const nota = (x, tipo = "info") => ({ t: "nota", tipo, x });

// Tabla de dos columnas etiqueta → valor.
export const kv = (...filas) => ({ t: "kv", filas });

export const firmas = (...firmantes) => ({ t: "firmas", firmantes });

// Celda con color de fondo: verde, amarillo, rojo, azul, gris, teal, naranja, morado, navy.
export const c = (x, fill, extra = {}) => ({ x, fill, ...extra });

export const sec = (titulo, bloques, extra = {}) => ({ titulo, bloques, ...extra });
