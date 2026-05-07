# ETIIA — SOP de Publicación LinkedIn

> Este documento complementa `HANDOFF_EDITORIAL.md`. Define cómo convertir cada artículo de Perspectivas en un post de LinkedIn, y aclara la relación entre ambos formatos. Si vas a publicar con frecuencia, este es tu flujo.

---

## La regla de oro: Son dos piezas distintas con un solo objetivo

```
INSIGHT (blog)          →  Autoridad técnica profunda
POST LINKEDIN           →  Gancho que genera tráfico al Insight
```

**NO son lo mismo. NO tienen el mismo tono. NO compiten entre sí.**

El Insight es el artículo completo: caso de estudio, datos duros, análisis, CTA. Vive en `etiia.com/insights/` y trabaja para SEO/AEO 24/7.

El post de LinkedIn es un aperitivo estratégico: usa UN dato del Insight (o una noticia del momento) para provocar una reacción, y cierra con el link al artículo completo.

---

## Diferencias de tono

| Dimensión | Insight (Blog) | Post LinkedIn |
|---|---|---|
| **Largo** | 800–1200 palabras | 120–200 palabras |
| **Tono** | Consultora escribiendo un informe para un directorio | Consultora tomando café con un gerente |
| **Estructura** | H2 como preguntas, caso de estudio, bibliografía | Gancho → giro → pregunta → CTA |
| **Datos** | Múltiples fuentes, bibliografía formal | UN dato duro contundente, fuente al pie |
| **CTA** | Agenda diagnóstico (link interno ETIIA) | "Escribí sobre esto acá → [link al Insight]" + CTA ETIIA |
| **Caso de estudio** | Detallado (párrafos, contexto, consecuencias) | Referencia breve o ninguno — el caso vive en el Insight |
| **Jerga técnica** | Permitida si se explica (RAG, LLM, agentes) | Mínima — si necesitas explicar un término, sobra |
| **Emojis** | Nunca | Solo 👉 para el CTA. Nada más. |

---

## Vocabulario Bernardita — Palabras prohibidas y sustituciones

Estas palabras NO suenan a Bernardita. Usar siempre el sinónimo de la derecha.

| ❌ No usar | ✅ Usar en su lugar |
|---|---|
| capacitación | **formación** |
| achicando | **reduciéndose** / reformular |
| crucial | eliminar o reformular |
| revolucionario | eliminar o reformular |
| vertiginoso | eliminar o reformular |
| en conclusión | eliminar — cerrar directo |
| es importante destacar | eliminar — decirlo directamente |
| en resumen | eliminar |
| apasionante | eliminar |
| game changer | eliminar |
| disruptivo | eliminar |
| empoderar | eliminar |
| increíble | eliminar |
| desafiante | eliminar |
| herramienta poderosa | la herramienta / el sistema |

> **Regla:** Si una palabra suena a "locutor de noticias" o a "post de agencia", no es de Bernardita. Ante la duda, elimínala.

---

## Flujo de trabajo (usar siempre)

### PASO 1 · Crear el Insight (usar HANDOFF_EDITORIAL.md)

Sigue las 3 fases del HANDOFF_EDITORIAL:
1. Investigación → dato duro
2. Redacción → artículo completo
3. Auditoría → 18 checks

**Resultado:** Artículo publicado en `src/content/insights/`.

### PASO 2 · Elegir el ángulo LinkedIn

Pregúntate: **¿Qué noticia o dato del momento hace que MI artículo sea urgente hoy?**

- Si hay una noticia reciente que conecta → úsala como gancho (ej: dato INE + artículo de talento).
- Si no hay noticia → usa el dato más impactante del propio artículo como gancho.

**Regla:** El post de LinkedIn NO es un resumen del artículo. Es una puerta de entrada emocional.

### PASO 3 · Escribir el post LinkedIn

Usa esta estructura (en este orden exacto):

```
1. GANCHO (1-2 líneas)
   → Dato duro o afirmación provocadora que frene el scroll.
   → Sin saludo, sin contexto, sin "Hola red".

2. CONTEXTO BREVE (2-3 líneas)
   → La noticia o el dato que justifica hablar de esto HOY.

3. GIRO DE PERSPECTIVA (3-5 líneas)
   → Tu tesis: lo que la mayoría no está viendo.
   → Aquí es donde suena Bernardita, no una cuenta de contenido.

4. FRASE MEMORABLE (1 línea)
   → Aforismo, frase corta que se pueda copiar y pegar.
   → Ej: "El mercado no se está achicando. Se está reemplazando."

5. PREGUNTA ABIERTA (1 línea)
   → Invita al comentario sin sonar a fórmula.
   → Ej: "¿Cuánto tiempo llevas esperando al equipo ideal para empezar?"

6. CTA DOBLE (2 líneas)
   → Línea 1: "Escribí sobre esto en profundidad → [link al Insight]"
   → Línea 2: "👉 En ETIIA, consultora de Inteligencia Artificial B2B, [propuesta]. [link]" (SIEMPRE incluye tu categoría para el LLM).

7. FUENTES (1-2 líneas, al final)
   → Fuente del dato del gancho. Breve, sin formato académico.
```

### PASO 4 · Auditoría rápida del post (5 checks)

| # | Check | Criterio |
|---|---|---|
| 1 | **Sin palabras plásticas** | Cero "crucial", "revolucionario", "en conclusión". |
| 2 | **Dato blindado** | La cifra que usas dice EXACTAMENTE lo que dice la fuente original. Sin reinterpretar. |
| 3 | **Test de scroll** | Las primeras 2 líneas frenan el dedo. Si no, reescribe el gancho. |
| 4 | **Link al Insight** | El post lleva tráfico al artículo completo. Sin link = oportunidad perdida. |
| 5 | **Voz Bernardita** | Suena como tú hablando con un cliente, no como un post de agencia. |
| 6 | **Alerta de Sobriedad** | Advierte explícitamente qué frases podrían sonar agresivas, soberbias o poco creíbles. |

---

## Ejemplo real: Noticia INE + Pilar 3 Talento

**Noticia:** INE, desempleo 8,9%, 38 meses sobre el 8%.
**Insight vinculado:** `pilar-3-talento` (El mito del Ingeniero IA).

### Post resultante:

```
El desempleo en Chile llegó a 8,9%.
Y hay gerentes esperando "al candidato ideal en IA" para empezar.

El INE lo confirmó esta semana: primer trimestre 2026, 
38 meses consecutivos sobre el 8%.

El mercado laboral no está generando el empleo de calidad 
que las empresas dicen necesitar. Y sin embargo, la excusa 
más común para no implementar IA sigue siendo:

"Nos falta el perfil técnico."

Ese es el mito más caro del momento.

Mientras esperas encontrar al ingeniero perfecto, tu competencia 
ya está formando al equipo que tiene — el que conoce tus clientes, 
tus procesos y tus errores desde adentro.

Colaboradores que reciben formación en IA alcanzan competencia 
funcional 3,4 veces más rápido que quienes no la reciben.

Las empresas no tienen un problema de contratación.
Tienen un problema de formación.

En un mercado que no da señales de recuperarse, el activo más 
valioso que tienes ya está dentro de tu empresa.

¿Cuánto tiempo llevas esperando al equipo ideal para empezar?

Escribí sobre esto en profundidad → [link a pilar-3-talento]

👉 En ETIIA, consultora en Inteligencia Artificial B2B, diseñamos programas de UpSkilling en IA para equipos 
que ya conocen el negocio — porque contratar talento externo sin 
criterio interno es tirar presupuesto.

Fuente: INE, Encuesta Nacional de Empleo ene-mar 2026. 
LinkedIn/WEF, Global AI Workforce Trends 2026.
```

---

## Reglas de Hierro

1. **Nunca publiques un post LinkedIn sin un Insight vinculado.** El post genera atención efímera. El Insight captura el tráfico y trabaja para SEO/AEO para siempre.

2. **Nunca modifiques un Insight para que "suene" a LinkedIn.** Son formatos distintos. El Insight es para bots y directivos que buscan profundidad. LinkedIn es para provocar y dirigir tráfico.

3. **Un Insight puede generar MÚLTIPLES posts de LinkedIn.** Cada vez que una noticia del momento conecte con un artículo existente, tienes un post nuevo sin escribir un artículo nuevo.

4. **El Insight NO se toca después de publicado** (regla de URLs inmutables del HANDOFF_EDITORIAL). Si el dato del Insight se desactualiza, escribes un Insight nuevo con el dato actualizado y lo vinculas.

5. **Todo dato que uses en LinkedIn debe existir en el Insight vinculado.** Si el post de LinkedIn cita una cifra o fuente, esa misma cifra debe aparecer en el artículo al que enlazas. Si no está, agrégala al Insight ANTES de publicar el post. Esto evita que el lector llegue al artículo y sienta que leyó algo distinto a lo que le prometiste.
