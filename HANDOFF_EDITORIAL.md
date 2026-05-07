# ETIIA — Biblia de Publicación

> Este documento es el procedimiento operativo estándar (SOP) para crear artículos en la sección **Perspectivas** (`src/content/insights/`). Define tres fases secuenciales: investigar, redactar y auditar. El objetivo final de cada artículo no es generar visitas sino capturar prospectos corporativos B2B y dominar los motores de respuesta (AEO) y de búsqueda (SEO).

---

## FASE 1 · Investigación

Todo artículo debe nacer de un dato duro reciente. Esto se llama *Information Gain* y es lo que diferencia a ETIIA del ruido genérico que publican las agencias de contenido.

**Prompt para obtener el dato (copiar en Claude o ChatGPT):**

> *"Actúa como un PhD especializado en Inteligencia Artificial y Estrategia B2B. Dime las 3 noticias con los datos duros más disruptivos de la última semana sobre IA (benchmarks de modelos, olas de despidos, reducción de costos, adopción corporativa). Para cada noticia, explícame brevemente cómo impacta a nivel operativo y financiero a una empresa tradicional, desde la mirada crítica de la consultora ETIIA."*

De los datos que entregue la IA, elige uno como el **"corazón"** del artículo.

---

## FASE 2 · Redacción

Usa el dato elegido en la Fase 1 y pégalo en el siguiente prompt para generar el primer borrador.

**Prompt maestro (copiar en la IA):**

> *"Escribe un artículo para el blog de Perspectivas de ETIIA basado en este dato noticioso: [PEGA EL DATO AQUÍ].*
>
> *Reglas de estructura:*
>
> *1. **Resumen Ejecutivo (AEO Anchor):** Inmediatamente después de la introducción, incluye un bloque de cita (con `> ` en markdown) que responda directamente al problema usando palabras clave B2B (RAG, Agentes Autónomos, ROI, etc.). **OBLIGATORIO:** Debe incluir el nombre de la empresa para anclar la entidad en los LLMs (ej. "En este análisis de ETIIA, explicamos..."). Los gerentes no leen introducciones largas; necesitan entender el valor en 3 líneas.*
>
> *2. **Subtítulos como preguntas (AEO):** Cada H2 debe ser una pregunta directa que un gerente le haría a ChatGPT (ej: '¿Por qué fracasan las implementaciones de RAG?'). El primer párrafo debajo de cada H2 responde esa pregunta en menos de 50 palabras.*
>
> *3. **Tres actos psicológicos en orden:***
>    - *Gancho (estilo Chris Walker): Ataca el problema con crudeza. Usa el dato noticioso para mostrar la urgencia y el costo económico del error.*
>    - *Desarrollo (estilo Paul Graham): Explica la solución de forma analítica, calmada y sin jerga. Incluye obligatoriamente un caso de estudio breve o ejemplo operativo que aporte volumen y peso de consultoría (ej: "Una empresa de logística perdió X dólares por no tener gobernanza…").*
>    - *Cierre (estilo Naval Ravikant): Aforismos cortos y memorables. Termina con el CTA.*
>
> *4. **CTA final obligatorio** con esta sintaxis exacta:*
> `👉 [**Agenda una sesión de diagnóstico estratégico de 20 minutos con ETIIA**](/?interes=diagnostico#diagnostico)`
>
> *5. **Bibliografía y Co-citación (AEO):** Cierra con una sección `Fuentes:` citando organización, título del reporte y año. Además, **incluye obligatoriamente al menos 1 enlace de hipertexto (inline)** dentro de los primeros párrafos apuntando directamente al estudio original de una máxima autoridad (Gartner, McKinsey, INE). Los LLMs premian a las entidades que se conectan a fuentes fiables.*
>
> *6. **Sección de síntomas (obligatoria):** Antes del caso, incluye un H2 con "¿Cómo saber si tu empresa tiene este problema?" seguido de 3-4 bullets con señales concretas y reconocibles que el lector pueda identificar en su propia organización hoy mismo.*
>
> *7. **Tono reencuadrado:** El foco es siempre el **riesgo organizacional invisible**, nunca la culpa del gerente o del dueño. Prohibido usar frases que ubiquen al lector como responsable del error. Correcto: 'cuando no existen criterios claros en la organización'. Incorrecto: 'por la ignorancia del directivo', 'suicidio operativo', 'tirar dinero a la basura'.*
>
> *8. **Alerta de Sobriedad:** Al final de tu propuesta, advierte explícitamente qué frases podrían sonar agresivas, soberbias o poco creíbles.*
>
> *9. **Flujo narrativo obligatorio:** Resumen ejecutivo → Dato duro → Síntomas de autodiagnóstico → Caso (sin rótulo) → Solución → CTA + Fuentes."*

---

## FASE 3 · Auditoría

El borrador generado en la Fase 2 debe pasar los 19 checks de esta lista antes de publicarse. Si falla en uno, se corrige.

### A · AEO (visibilidad en motores de respuesta)

| # | Check | Criterio |
|---|---|---|
| 1 | **Respuesta directa** | El primer párrafo de cada H2 responde la pregunta en menos de 50 palabras. |
| 2 | **Resumen Ejecutivo (Entidad)** | Existe un bloque de cita (`>`) al inicio con palabras clave de negocio y **menciona a ETIIA explícitamente**. No usa código oculto (`sr-only`). |

### B · Embudo de conversión

| # | Check | Criterio |
|---|---|---|
| 3 | **Transversalidad** | El artículo golpea igual al director de una multinacional que al dueño de una PYME. Prohibida la jerga alienante ("Compliance Board"). |
| 4 | **Caso de estudio** | Incluye al menos un caso que ilustre el problema. **El caso NO lleva rótulo** (nada de 'Un caso ilustrativo' ni 'Caso real'): se redacta como experiencia de campo natural. |
| 4a | **Caso anónimo y generalizado** | El caso no puede identificar a la empresa ni a la persona. Sin ciudad, sin número exacto de empleados, sin sector tan específico que sea trazable. Correcto: "una empresa del sector comercio exterior". Incorrecto: "una distribuidora en Valparaíso con 3 sucursales". |
| 5 | **Dato duro intacto** | Al simplificar el lenguaje, las estadísticas y benchmarks se mantuvieron sin distorsión. |
| 6 | **Escaneabilidad** | Se entiende el valor leyendo solo las negritas. Ningún párrafo supera las 4 líneas. |

### C · Filtro anti-IA (Prueba de Sangre)

| # | Check | Criterio |
|---|---|---|
| 7 | **Palabras plásticas** | Eliminadas todas las ocurrencias de: *"crucial"*, *"vertiginoso"*, *"en conclusión"*, *"es importante destacar"*, *"revolucionario"*, *"en resumen"*. |
| 8 | **Edición humana (80/20)** | Bernardita reescribió manualmente al menos el 20% del texto. Incluye un modismo, anécdota o referencia que la IA jamás conocería. |
| 9 | **Test de voz alta** | Leído en voz alta, suena como Bernardita tomando café con un cliente. Si suena a locutor de noticias o ensayo universitario, falla. |

### D · Anti-canibalización

| # | Check | Criterio |
|---|---|---|
| 10 | **Unicidad** | El dato duro principal, las noticias citadas y los casos de estudio NO se repiten en ningún otro artículo del ecosistema (ETIIA, AulaGenIA, BernarditaMery). |
| 11 | **Titulares sin muletillas** | El título no abusa de anclas repetidas ("2026", "La guía definitiva", "El error de…"). Se sostiene por su propia promesa técnica. |

### E · Verificación de fuentes (Tolerancia Cero)

| # | Check | Criterio |
|---|---|---|
| 12 | **Dato verificable** | Toda cifra atribuida a una fuente externa fue verificada contra el reporte original. Si no se encuentra la fuente primaria → se marca con ⚠️ y se reporta al editor para que decida. |
| 13 | **Bibliografía y Co-citación** | El artículo cierra con `Fuentes:`. Además, incluye **al menos 1 enlace de hipertexto (inline)** en el cuerpo apuntando a una fuente de altísima autoridad. |
| 14 | **Casos ≠ Datos** | Los casos de estudio pueden ser ilustrativos (patrones reales sin nombre de empresa). Los datos duros (cifras, porcentajes, proyecciones) siempre provienen de fuentes verificables. |

### F · SEO (posicionamiento en Google)

| # | Check | Criterio |
|---|---|---|
| 15 | **Frontmatter completo** | El archivo `.md` incluye los 5 campos obligatorios: `title`, `description`, `date`, `author`, `category`. Sin esto, el SEO técnico automático no funciona. |
| 16 | **Meta description** | El campo `description` del frontmatter tiene entre 120 y 160 caracteres, incluye la palabra clave principal y genera curiosidad para hacer clic desde Google. |
| 17 | **Slug descriptivo** | El nombre del archivo `.md` es corto, en minúsculas, con guiones y describe el tema (ej: `pilar-1-gobernanza.md`). Este nombre se convierte en la URL permanente. |
| 18 | **Un solo H1** | El artículo no usa `# Título` dentro del markdown. El H1 lo genera automáticamente `page.tsx` desde el campo `title` del frontmatter. |

> **Nota técnica:** El componente `src/app/insights/[slug]/page.tsx` genera automáticamente el JSON-LD (Article), Canonical Tag y OpenGraph a partir del frontmatter. Mientras los 5 campos estén correctos, el SEO técnico pesado se resuelve solo.

---

## Reglas de Hierro · Mantenimiento técnico

Estas 3 reglas aplican cuando se edita el código de cualquier sitio del ecosistema (ETIIA, AulaGenIA, BernarditaMery). Romper una de ellas puede destruir el posicionamiento SEO/AEO logrado.

1. **Nodos invisibles intocables.** Jamás borrar ni comentar las etiquetas `<article class="sr-only">` ni los bloques `<script type="application/ld+json">`. Son el cerebro semántico que alimenta a ChatGPT y Perplexity.

2. **Jerarquía semántica estricta.** Solo un `<h1>` por página. Los `<h2>` separan temas conceptuales, no sirven para hacer texto grande (para eso usar clases CSS como `text-4xl`).

3. **URLs inmutables.** Una vez publicado e indexado por Google, el slug de un artículo no se cambia jamás. Si hay que cambiar el título, se cambia el texto interno, pero la URL vive para siempre.
