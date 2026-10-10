# Blog del proyecto SIA-T — I.E.P. Peruano Francés

Blog académico del proyecto "Sistema inteligente usando Machine Learning para alerta temprana del bajo rendimiento académico" (UNTELS).

Sitio publicado: https://peruano-frances-gti.vercel.app

Cada cambio que entra a la rama `main` se publica solo en esa dirección. Cada rama o pull request recibe además un enlace de vista previa de Vercel.

## Probarlo en tu equipo

Necesitas Node.js 20 o superior.

```bash
git clone https://github.com/Jhostin2210/peruano-frances-gti.git
cd peruano-frances-gti
npm install
npm run dev
```

Abre http://localhost:3000. Antes de subir un cambio, confirma que compila con `npm run build`.

## Cómo aportar un cambio

1. Actualiza tu copia: `git checkout main` y `git pull`.
2. Crea una rama: `git checkout -b cambio/descripcion-corta`.
3. Haz el cambio y revísalo en `npm run dev`.
4. Súbelo: `git add -A`, `git commit -m "Qué cambiaste"`, `git push -u origin cambio/descripcion-corta`.
5. Abre un pull request en GitHub. Vercel comentará el enlace de vista previa.
6. Cuando otro integrante lo revise, se fusiona a `main` y el blog público se actualiza.

No subas cambios directo a `main`: lo que entra ahí se publica de inmediato.

## Cómo está organizado

El blog sigue la Guía del PMBOK®, octava edición. Los capítulos 00 a 03 son la formulación del curso anterior; del 04 al 08 cada capítulo es un dominio de desempeño, y el 09 y el 10 son material del curso anterior pendiente de actualizar.

| Qué quieres cambiar | Archivo |
|---|---|
| Orden de capítulos y sus tarjetas de entradas, herramientas y salidas | `src/App.tsx` |
| Índice lateral, referencias, encuesta, fotos de la visita | `src/data.ts` |
| Portada y equipo | `src/components/Portada.tsx`, `src/components/Introduccion.tsx` |
| Cap. 01 Problema | `src/components/ProblemaAnalysis.tsx` |
| Cap. 02 Objetivo | `src/components/ObjetivoAnalysis.tsx` |
| Cap. 03 Alternativas y Design Thinking | `src/components/AlternativesAnalysis.tsx` |
| Cap. 04 Marco de gestión (principios, mapa de procesos, índice de documentos) | `src/components/MarcoPmbok.tsx` |
| Cap. 05 a 08: procesos y documentos de Gobernanza, Interesados, Alcance y Cronograma | `documentacion/` (ver abajo) |
| Vistas interactivas de requisitos y EDT (cap. 07) | `src/components/RequisitosAnalysis.tsx` |
| Vista interactiva del cronograma (cap. 08) | `src/components/ScheduleBaseline.tsx` |
| Cap. 09 Costos | `src/components/CostBaseline.tsx` |
| Cap. 10 Video | `src/components/VideoPresentation.tsx` |
| Imágenes y videos | `public/` |

Si agregas una sección nueva, ponle un `id` y regístrala en `TOC_CHAPTERS` de `src/data.ts` para que aparezca en el índice.

## Documentos de gestión: una sola fuente

Los documentos del proyecto (acta de constitución, registro de interesados, cronograma y los demás) se escriben **una sola vez**, en la carpeta `documentacion/`. De ahí salen los archivos Word y PDF y también lo que muestra el blog, así que los tres dicen siempre lo mismo.

| Qué quieres cambiar | Archivo |
|---|---|
| Datos comunes: nombre del proyecto, equipo, fechas, presupuesto | `documentacion/proyecto.mjs` |
| Actividades y calendario del cronograma | `documentacion/datos/actividades.mjs`, `documentacion/datos/calendario.mjs` |
| Interesados | `documentacion/datos/interesados.mjs` |
| Requisitos, entregables y paquetes de la EDT | `documentacion/datos/requisitos.mjs` |
| Cambios, incidentes, hallazgos de calidad y lecciones aprendidas | `documentacion/datos/registros.mjs` |
| Texto de cada documento | `documentacion/contenido/*.mjs` |
| Procesos del PMBOK y sus entradas, herramientas y salidas | `documentacion/contenido/procesos.mjs` |
| Diseño de los archivos Word | `documentacion/lib/docx-builder.mjs` |

Después de cambiar algo en `documentacion/`:

```bash
node documentacion/generar.mjs
powershell -File documentacion/exportar-pdf.ps1
```

El primer comando crea los Word en la carpeta «Documentación» del proyecto (fuera del repositorio; se puede indicar otra carpeta como argumento) y actualiza `src/content/`. El segundo necesita Microsoft Word: actualiza los índices, exporta los PDF y copia Word y PDF a `public/documentos/`. No edites a mano `src/content/documentos.ts` ni `src/content/datos.ts`.

## Cuidado con los datos

El repositorio es público. No subas listas de alumnos, notas reales, correos ni archivos `.env`. Los documentos de gestión nombran a las personas del colegio por su cargo, no por su nombre.
