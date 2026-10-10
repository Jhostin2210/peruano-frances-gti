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

## Dónde está cada cosa

| Qué quieres cambiar | Archivo |
|---|---|
| Orden de capítulos y sus tarjetas de entradas, herramientas y salidas | `src/App.tsx` |
| Índice lateral, referencias, stakeholders, encuesta, fotos de la visita | `src/data.ts` |
| Portada y equipo | `src/components/Portada.tsx`, `src/components/Introduccion.tsx` |
| Cap. 01 Stakeholders | `src/components/StakeholderAnalysis.tsx` |
| Cap. 02 Problema | `src/components/ProblemaAnalysis.tsx` |
| Cap. 03 Objetivo | `src/components/ObjetivoAnalysis.tsx` |
| Cap. 04 Alternativas y Design Thinking | `src/components/AlternativesAnalysis.tsx` |
| Cap. 05 Alcance, requisitos y EDT | `src/components/RequisitosAnalysis.tsx` |
| Cap. 06 Cronograma | `src/components/ScheduleBaseline.tsx` |
| Cap. 07 Costos | `src/components/CostBaseline.tsx` |
| Cap. 08 Video | `src/components/VideoPresentation.tsx` |
| Imágenes y videos | `public/` |

Si agregas una sección nueva, ponle un `id` y regístrala en `TOC_CHAPTERS` de `src/data.ts` para que aparezca en el índice.

## Cuidado con los datos

El repositorio es público. No subas listas de alumnos, notas reales, correos ni archivos `.env`.
