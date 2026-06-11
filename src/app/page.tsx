"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, Calendar, Presentation, Database, TrendingUp, Code2 } from "lucide-react";
import { Reveal, FadeIn, ScaleIn } from "@/components/ui/Reveal";
import DiagnosticoForm from "./DiagnosticoForm";
import { Carousel } from "./Carousel";

const products = [
  {
    nombre: "AtendeAI",
    slug: "atendeai",
    problema: "Tu equipo pasa horas respondiendo las mismas preguntas de clientes una y otra vez.",
    desc: "Un agente que atiende, responde, agenda y genera documentos solo. Sin que nadie tenga que intervenir.",
    industria: "Servicios B2B",
    isAgent: true,
  },
  {
    nombre: "VentaAI",
    slug: "ventaai",
    problema: "Tus clientes compran una vez y no vuelven, aunque tú tienes más cosas que les podrían servir.",
    desc: "Un motor que detecta qué le conviene ofrecer a cada cliente y lanza la campaña automáticamente.",
    industria: "Retail / eCommerce",
  },
  {
    nombre: "FacturAI",
    slug: "facturai",
    problema: "Alguien en tu empresa pasa horas ingresando facturas a mano en el sistema.",
    desc: "Lee las facturas, las cruza con el banco y las registra sola. Sin que nadie las toque.",
    industria: "Finanzas / Contabilidad",
    isAgent: true,
  },
];

const teamMembers = [
  { name: "Estrategia & Dirección", role: "Liderazgo de proyectos", desc: "Más de 15 proyectos de transformación tecnológica liderados. Define qué se hace, en qué orden, y cuánto debería rentar cada etapa.", tags: ["Estrategia", "PMO", "ROI"] },
  { name: "Ingeniería IA", role: "Desarrollo & Arquitectura", desc: "El equipo de ingeniería diseña, entrena y despliega los modelos y agentes que operan en producción. Desde la preparación de datos hasta la API que consume tu equipo.", tags: ["Python", "LLMs", "RAG", "APIs"] },
  { name: "Ciencia de Datos", role: "Investigación aplicada · 2 PhD(c)", desc: "Dos candidatos a Doctor en Informática Aplicada lideran la investigación. Publican papers, pero que se usan en proyectos reales, con resultados sólidos.", tags: ["Machine Learning", "Optimización", "Papers"] },
  { name: "Implementación & Ops", role: "Integración técnica", desc: "Conecta el modelo con el ERP, el CRM y los documentos que ya usa tu empresa. Sin que nada se rompa.", tags: ["DevOps", "ERP", "Integración"] },
  { name: "Diseño & Producto", role: "UX & Interfaces", desc: "Si el equipo no lo usa, no sirve. Diseñamos interfaces que la gente adopta sin necesitar capacitación de 3 días.", tags: ["UX", "Producto", "Adopción"] },
];

export default function HomeV2() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://etiia.com/#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuál es la diferencia entre automatización tradicional y los Agentes IA de ETIIA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La automatización tradicional (ej. RPA) se rompe cuando cambian las reglas o formatos. En ETIIA implementamos Agentes de Inteligencia Artificial basados en LLMs corporativos que entienden contexto, deciden qué hacer sin que alguien los programe caso por caso. Si aparece algo raro, lo escalan. Si es rutina, lo resuelven solos."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué es una arquitectura RAG y por qué ETIIA la implementa en empresas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RAG conecta un modelo de lenguaje con la información interna de tu empresa. En vez de inventar respuestas, el modelo consulta tus datos reales antes de responder. ETIIA lo implementa para que la IA trabaje solo con lo que tú tienes, no con lo que el modelo cree saber."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto tarda ETIIA en implementar una solución de Inteligencia Artificial B2B?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dependiendo de la complejidad operativa y la limpieza de los datos, ETIIA despliega productos de Inteligencia Artificial (como motores de recomendación, OCR inteligente o agentes de atención) en entornos de producción en un plazo promedio de 2 a 4 semanas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta implementar un agente de IA en una empresa en Chile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El diagnóstico inicial es gratis. Te decimos si tu proyecto tiene sentido técnico y cuánto cuesta antes de que inviertas. Los proyectos van de 6 a 16 semanas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué ERPs son compatibles con las soluciones de ETIIA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Las soluciones de ETIIA son agnósticas. Se integran con absolutamente CUALQUIER sistema o ERP que la empresa ya utilice, siempre que tenga APIs, webhooks o permita ingesta de archivos. Esto incluye, a modo de ejemplo, SAP, Softland, Defontana, Salesforce, HubSpot o sistemas desarrollados a medida por la empresa."
                }
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://etiia.com/#diagnostico-proceso",
            "name": "Cómo funciona el Diagnóstico IA de ETIIA",
            "description": "Proceso de diagnóstico inicial gratuito para evaluar la viabilidad de implementar IA en tu empresa B2B.",
            "totalTime": "P14D",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "CLP", "value": "0" },
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Revisión del problema y contexto", "text": "Analizamos el problema real detrás del síntoma: qué decisiones se toman, con qué datos, con qué frecuencia.", "url": "https://etiia.com/#diagnostico" },
              { "@type": "HowToStep", "position": 2, "name": "Evaluación de viabilidad técnica", "text": "Determinamos qué enfoque de IA tiene sentido —o si no lo tiene— con honestidad y criterio técnico real.", "url": "https://etiia.com/#diagnostico" },
              { "@type": "HowToStep", "position": 3, "name": "Mapa de acción con prioridades", "text": "Recibes un documento claro: qué conviene hacer primero, qué no hacer, y por qué. Con estimaciones de plazo y ROI esperado.", "url": "https://etiia.com/#diagnostico" }
            ]
          })
        }}
      />

      {/* ══════════ HERO ══════════ */}
      <section className="pt-36 pb-20 bg-white relative overflow-hidden" aria-label="Propuesta principal">
        <div className="hero-glow" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                <h1 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  Partner Tecnológico B2B
                </h1>
              </div>
              <p className="text-5xl md:text-[3.25rem] font-black tracking-tight text-[#0F172A] leading-[1.08] mb-6 fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                  Transformamos tu empresa<br />
                  con <span className="text-gradient-blue">Inteligencia Artificial</span><br />
                  y Software a la medida
              </p>

              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                Primero te decimos si tiene sentido aplicar IA. Antes de invertir en desarrollo, necesitas saber si tu problema es un caso para IA, qué hacer primero y qué no.
              </p>

              <div className="flex flex-wrap gap-4 mb-14 fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                <Link href="?interes=diagnostico#diagnostico" onClick={(e) => { document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 bg-gradient-to-br from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 btn-pulse">
                  Conversemos <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Stats compactos — visible solo en mobile, arriba del fold */}
              <div className="flex md:hidden justify-start gap-6 mb-10 fade-in-up" style={{ animationDelay: '0.35s', animationFillMode: 'both' }}>
                {[
                  { value: "+15", label: "Años exp.", gradient: "from-slate-800 to-slate-600" },
                  { value: "+50", label: "Proyectos B2B", gradient: "from-blue-800 to-blue-600" },
                  { value: "Gratis", label: "Diagnóstico", gradient: "from-indigo-500 to-blue-400" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className={`text-2xl font-black bg-clip-text text-transparent bg-gradient-to-br ${s.gradient} tabular-nums leading-none mb-1`}>{s.value}</p>
                    <p className="text-[9px] uppercase tracking-wider text-slate-500 leading-tight font-bold">{s.label}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* Hero card & Stats */}
            <div className="flex flex-col gap-6">
              
              {/* 3 Trust Stats - PUNCH ANIMATION */}
              <ScaleIn 
                delay={0.1}
                className="flex bg-white border-2 border-blue-50 rounded-2xl p-4 shadow-xl shadow-blue-900/10 divide-x divide-slate-100 relative z-20 origin-center"
              >
                {[
                  { value: "+15", label: "Años experiencia", gradient: "from-slate-800 to-slate-600" },
                  { value: "+50", label: "Proyectos B2B", gradient: "from-blue-800 to-blue-600" },
                  { value: "Gratis", label: "Diagnóstico", gradient: "from-indigo-500 to-blue-400" },
                ].map((s) => (
                  <div key={s.label} className="flex-1 text-center px-2">
                    <p className={`text-[26px] font-black bg-clip-text text-transparent bg-gradient-to-br ${s.gradient} tabular-nums leading-none mb-1.5`}>{s.value}</p>
                    <p className="text-[9px] uppercase tracking-wider text-slate-500 leading-tight font-bold">{s.label}</p>
                  </div>
                ))}
              </ScaleIn>

              <FadeIn delay={0.35}>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div className="inline-flex items-center gap-2 text-xs text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-6 font-bold uppercase tracking-wider">
                  ✦ Diagnóstico inicial
                </div>
                <h2 className="text-2xl font-black text-[#0F172A] tracking-tight mb-3">¿Tu problema necesita IA, software o rediseñar procesos?</h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Evaluamos si tiene sentido, qué puede salir mal y por dónde empezar. Sin vender tecnología antes de entender tu contexto.
                </p>
                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-blue-700 font-bold mb-1 uppercase tracking-wider">+10 profesionales integrados desde el día uno</p>
                  <p className="text-sm text-[#0F172A] font-medium">Estrategia · Datos · Ingeniería IA · Implementación · Diseño</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <span className="text-2xl font-black text-[#0F172A]">6–16</span>
                  <p className="text-xs text-slate-400 leading-tight">semanas es la duración<br />promedio de un proyecto</p>
                </div>
              </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* ══════════ TRUST & TECH BANDS ══════════ */}
        <div className="border-y border-slate-100 bg-slate-50/30 py-5 mt-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-20 w-full">
            
            {/* Integrations */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Integración nativa</span>
              <div className="flex items-center gap-6 opacity-40 grayscale">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sap.svg" alt="SAP" width="24" height="24" className="h-5 w-auto" />
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/salesforce.svg" alt="Salesforce" width="24" height="24" className="h-5 w-auto" />
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" alt="AWS" width="24" height="24" className="h-4 w-auto" />
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg" alt="Microsoft" width="24" height="24" className="h-4 w-auto" />
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hubspot.svg" alt="HubSpot" width="24" height="24" className="h-4 w-auto" />
              </div>
            </div>

            <div className="hidden md:block w-px h-6 bg-slate-200"></div>

            {/* Tech stack */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-400 font-medium">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Tecnología</span>
              <span className="text-slate-500 font-semibold">OpenAI GPT</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-semibold">Anthropic Claude</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-semibold">Meta Llama</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-semibold">RAG & Agentes</span>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════ CAPACIDADES / SERVICIOS ══════════ */}
      <section className="py-24 bg-white" id="servicios">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center md:text-left mb-16">
            <Reveal>
              <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">Nuestras Capacidades</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0F172A] leading-tight">
                Líneas de Servicio B2B
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: <Presentation className="w-6 h-6 text-blue-600" />,
                title: "Estrategia y Gobernanza",
                desc: "Alineamos la Inteligencia Artificial con los objetivos estratégicos de tu negocio. Diseñamos la hoja de ruta de adopción y establecemos políticas de gobernanza que garantizan la seguridad de tus datos, la privacidad de la información y el cumplimiento regulatorio."
              },
              {
                icon: <Database className="w-6 h-6 text-blue-600" />,
                title: "Ingeniería de Datos y Cloud",
                desc: "Conectamos, centralizamos y organizamos las fuentes de información de tu empresa (VPC, ERP, CRM). Diseñamos arquitecturas seguras en la nube para asegurar que tus datos estén limpios, accesibles y listos para ser utilizados."
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
                title: "Analítica Avanzada y Modelos Predictivos",
                desc: "Convertimos tus datos históricos en predicciones estratégicas y decisiones automáticas. Desarrollamos modelos a la medida para anticipar comportamientos de negocio y diseñamos paneles interactivos para la toma de decisiones."
              },
              {
                icon: <Code2 className="w-6 h-6 text-blue-600" />,
                title: "Desarrollo de Software e IA a Medida",
                desc: "Diseñamos y desarrollamos soluciones personalizadas que se integran directamente con tus sistemas actuales (SAP, Salesforce, etc.). Creamos flujos de automatización inteligentes adaptados exactamente a las reglas y lógica de tu operación."
              }
            ].map((s, idx) => (
              <Reveal key={s.title} delay={0.08 * (idx + 1)}>
                <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-7 lg:p-8 hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 h-full flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#0F172A] tracking-tight mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ DIAGNÓSTICO + FORMULARIO ══════════ */}
      <section className="py-24 bg-slate-50 border-y border-slate-100" id="diagnostico">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* ── Columna izquierda: contexto y confianza ── */}
            <div className="flex flex-col gap-8">
              <Reveal>
                <div>
                  <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">Conversemos</p>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0F172A] leading-tight mb-6">
                    Cuéntanos tu proyecto.<br />Te decimos por dónde empezar.
                  </h2>
                  <p className="text-slate-500 leading-relaxed text-base mb-4">
                    Agenda una sesión de exploración inicial. Evaluamos el impacto estratégico y la viabilidad técnica antes de sugerir cualquier inversión en desarrollo.
                  </p>
                  <p className="text-slate-500 leading-relaxed text-base">
                    Analizamos tus necesidades de Inteligencia Artificial, arquitectura de software y rediseño de procesos para entregarte un plan de acción con estimaciones claras de plazos, costos y retorno esperado.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-500 mb-3">¿Prefieres agendar una reunión directamente?</p>
                  <a href="https://calendly.com/etiia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-[#0F172A] border border-slate-200 hover:border-blue-300 font-bold px-6 py-3 rounded-xl transition-all hover:bg-white hover:shadow-sm text-sm">
                    Agendar reunión de 20 min <Calendar className="w-4 h-4 text-blue-600" />
                  </a>
                </div>
              </Reveal>
            </div>

            {/* ── Columna derecha: formulario ── */}
            <Reveal delay={0.15}>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm sticky top-28">
                <DiagnosticoForm />

                {/* Privacidad Corporativa (Compacto) */}
                <div className="mt-5 flex items-start gap-3 bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 text-left">
                  <div className="bg-emerald-100 p-1.5 rounded-lg text-emerald-700 shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider mb-0.5">Privacidad Corporativa</p>
                    <p className="text-[11px] text-emerald-600/90 leading-relaxed font-medium">
                      No entrenamos modelos públicos con la información confidencial de tu empresa.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
      {/* ══════════ MANIFIESTO AGENTES AUTÓNOMOS ══════════ */}
      <section className="py-24 bg-[#0F172A] border-t border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 150%, rgba(29, 78, 216, 0.15) 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              El Nuevo Estándar
            </div>
            <p className="text-xl md:text-2xl text-slate-400 font-serif italic max-w-3xl mx-auto leading-relaxed mb-6">
              &ldquo;Desarrollamos agentes de IA que se conectan a tus sistemas y hacen el trabajo solos. Cuando hay riesgo o la decisión es importante, paran y preguntan.&rdquo;
            </p>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white leading-[1.1]">
              No instalamos &quot;chatbots&quot; genéricos.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ══════════ SOLUCIONES (carousel) ══════════ */}
      <section className="py-24 bg-slate-50 border-y border-slate-100" id="soluciones">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">Soluciones disponibles</p>
          <div className="grid md:grid-cols-2 gap-8 items-end mb-10">
            <h2 className="text-4xl font-black tracking-tight text-[#0F172A] leading-tight">
              Herramientas que ya ayudan<br />a empresas como la tuya
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-slate-500 text-lg">Puedes probar cada solución en acción o consultarnos directamente por la que te interesa.</p>
              <p className="text-sm text-blue-600 font-semibold mt-1">
                Mostrando 3 de{" "}
                <Link href="/demos" className="underline underline-offset-2 hover:text-blue-800 transition-colors">
                  9 soluciones disponibles
                </Link>
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={0.1 * (i + 1)}>
                <div className="bg-white border border-slate-200 rounded-2xl p-7 h-full flex flex-col hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative overflow-hidden">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span className="text-xs text-blue-700 font-bold uppercase tracking-wider mt-0.5">{p.industria}</span>
                    {p.isAgent && (
                      <span className="inline-flex shrink-0 items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                        Agente Autónomo
                      </span>
                    )}
                  </div>
                  <p className="text-base text-[#0F172A] font-semibold leading-snug mb-4">{p.problema}</p>
                  <h3 className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-500 tracking-tight mb-2">{p.nombre}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-grow mb-6">{p.desc}</p>
                  <div className="flex gap-3">
                    <Link href={`/demos/${p.slug}`} className="flex-1 flex items-center justify-center text-xs font-bold text-slate-700 border-2 border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 px-3 py-2 rounded-lg transition-all">
                      Ver demo
                    </Link>
                    <Link href={`?interes=${p.slug}#diagnostico`} onClick={(e) => { document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' }); }} className="flex-1 flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br from-blue-800 to-blue-600 border border-blue-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:from-blue-900 hover:to-blue-700 transition-all px-3 py-2 rounded-lg">
                      Consultar
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 md:px-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-200 transition-colors">
              <div>
                <h4 className="text-base font-black text-[#0F172A] mb-1">¿Tu operación requiere algo distinto?</h4>
                <p className="text-sm text-slate-500">No te adaptes al software. Desarrollamos agentes de IA y flujos automatizados a la medida de tus procesos.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center shrink-0">
                <Link href="/demos" className="text-sm text-slate-500 hover:text-slate-800 font-semibold transition-colors">
                  Ver catálogo completo
                </Link>
                <Link href="?interes=a-medida#diagnostico" onClick={(e) => { document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 text-sm text-white bg-[#0F172A] hover:bg-slate-800 font-semibold px-5 py-2.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-lg group">
                  Diseñemos tu solución <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ B2B QUOTE ══════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-2xl md:text-3xl font-serif italic text-slate-700 leading-relaxed mb-8">
              &ldquo;No vendemos promesas. Tenemos soluciones de IA funcionando que puedes probar ahora mismo. Atención al cliente, retail, contabilidad, legal y más.&rdquo;
            </p>
            <Link
              href="/demos"
              className="inline-flex items-center gap-2 text-blue-700 border border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-300 font-bold text-sm px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
            >
              Ver el catálogo de soluciones <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

            {/* ══════════ EQUIPO ══════════ */}
      <section className="py-24 bg-slate-50 border-y border-slate-100" id="equipo">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">El equipo</p>
            <div className="grid md:grid-cols-2 gap-8 items-end mb-14">
              <h2 className="text-4xl font-black tracking-tight text-[#0F172A] leading-tight">
                Autoridad que viene de haber entregado soluciones reales
              </h2>
              <p className="text-slate-500 leading-relaxed">El equipo ETIIA reúne <strong className="text-[#0F172A] font-semibold">más de 10 profesionales</strong> con experiencia en liderazgo de proyectos, investigación publicada y ejecución técnica real en empresas B2B.</p>
            </div>
          </Reveal>

          {/* Socios fundadores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                img: "/bernardita-nueva.jpg",
                name: "Bernardita Mery",
                badge: "Co-fundadora · CEO",
                desc: "Chief Executive Officer de ETIIA. Ingeniera Comercial UC y Máster Ejecutivo en Inteligencia Artificial. Antes de definir qué tecnología usar, entiende qué necesita el negocio y cuánto debería rentar.",
                tags: ["Inteligencia de Negocios", "Estrategia Comercial", "IA Aplicada"],
                linkedin: "https://www.linkedin.com/in/bmeryu/"
              },
              {
                img: "/pablo.jpg",
                name: "Pablo Olivares",
                badge: "Co-fundador · CAIO",
                desc: "Chief AI Officer de ETIIA y Candidato a Doctor en Informática Aplicada. A diferencia del investigador tradicional, posee una fuerte trayectoria en la industria. Es el estratega que diseña e implementa sistemas de IA y agentes autónomos robustos.",
                tags: ["Inteligencia Artificial", "Machine Learning", "Sistemas Cognitivos"],
                linkedin: "https://www.linkedin.com/in/pablo-e-olivares-z%C3%BA%C3%B1iga-01337933/"
              },
              {
                img: "/diego.jpg",
                name: "Diego Monsalves",
                badge: "CTO · Ingeniería de Modelos",
                desc: "Candidato a Doctor en Informática Aplicada. Construye y entrena los modelos. Si un LLM necesita entender tus documentos, responder a tus clientes o procesar tus datos, Diego lo arma.",
                tags: ["Machine Learning", "Investigación IA", "LLMs"],
                linkedin: "https://www.linkedin.com/in/505748216/"
              },
            ].map((f, i) => (
              <Reveal key={f.name} delay={0.1 * (i + 1)}>
                <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col items-center text-center hover:border-blue-200 hover:shadow-md transition-all h-full">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 mb-4 ring-2 ring-slate-100">
                    <Image src={f.img} alt={f.name} fill sizes="96px" className="object-cover" />
                  </div>
                  <span className="inline-block text-xs text-blue-700 font-bold uppercase tracking-wider bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full mb-2">{f.badge}</span>
                  <h3 className="text-xl font-black text-[#0F172A] tracking-tight mb-1 flex items-center gap-2">
                    {f.name}
                    <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors" aria-label={`LinkedIn de ${f.name}`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{f.desc}</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-auto">
                    {f.tags.map(t => (
                      <span key={t} className="text-xs bg-slate-100 rounded-full px-3 py-1 text-slate-500 font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats bar del equipo */}
          <Reveal delay={0.15}>
            <div className="flex bg-white border-2 border-blue-50 rounded-2xl p-5 shadow-lg shadow-blue-900/10 divide-x divide-slate-100 mb-12">
              {[
                { value: "+10", label: "Profesionales activos", gradient: "from-slate-800 to-slate-600" },
                { value: "5", label: "Áreas técnicas", gradient: "from-blue-800 to-blue-600" },
                { value: "2", label: "PhD(c) en IA", gradient: "from-indigo-600 to-blue-500" },
                { value: "+50", label: "Proyectos B2B", gradient: "from-blue-600 to-indigo-400" },
              ].map((s) => (
                <div key={s.label} className="flex-1 text-center px-3">
                  <p className={`text-2xl md:text-[28px] font-black bg-clip-text text-transparent bg-gradient-to-br ${s.gradient} tabular-nums leading-none mb-1.5`}>{s.value}</p>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-slate-500 leading-tight font-bold">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-6">Más de 10 especialistas organizados en 5 áreas de ejecución</p>
          <Carousel items={teamMembers.map(m => ({ ...m, type: "team" as const }))} />

        </div>
      </section>

      {/* ══════════ BANDA NAVY ══════════ */}
      <section className="bg-[#0F172A] py-20 px-6">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed mb-10">
              &ldquo;Armar un equipo con estrategia, datos, modelos e integración desde cero toma meses. En ETIIA ya está operando. Más de 10 profesionales organizados para ejecutar desde el día uno.&rdquo;
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Área de Estrategia", "Área de Ciencia de Datos", "Área de Ingeniería IA", "Área de Implementación", "Área de Diseño"].map((pill) => (
                <span key={pill} className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />{pill}
                </span>
              ))}
            </div>
            <p className="text-base text-white/50 font-medium">
              La mayoría de los proyectos de IA fracasan cuando falta una de estas áreas.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══════════ B2B UPSKILLING (MOVED) ══════════ */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="bg-[#0B1121] border border-slate-800/80 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 10% -20%, rgba(29, 78, 216, 0.3) 0%, transparent 60%)" }} aria-hidden="true" />
              <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-blue-400">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
                  <path d="M6 18a4 4 0 0 1-1.967-.516"/>
                  <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
                </svg>
              </div>
              <div className="flex-1">
                  <h3 className="text-xl font-black text-white tracking-tight mb-2">UpSkilling & ReSkilling en IA</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Capacitamos equipos para que usen IA con criterio, alineado a tu negocio. En tu oficina, con tus datos y tus procesos.
                </p>
              </div>
              <Link href="?interes=formacion#diagnostico" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#0B1121] font-bold text-sm px-6 py-3 rounded-xl hover:bg-slate-50 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/20 relative z-10 group">
                Formar a mi equipo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ DIFERENCIACIÓN ══════════ */}
      <section className="py-24" id="enfoque">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">Nuestro enfoque</p>
            <h2 className="text-4xl font-black tracking-tight text-[#0F172A] mb-14 leading-tight">
              Lo que distingue<br />un diagnóstico honesto
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-12">
            <Reveal delay={0.1}>
              <div>
                <h3 className="text-lg font-bold text-slate-400 mb-8">Lo que suele pasar</h3>
                <div className="flex flex-col gap-5">
                  {[
                    "Te proponen IA antes de entender tu problema real.",
                    "El consultor de negocio y el técnico hablan idiomas distintos.",
                    "El prototipo funciona en demo pero falla en el uso real.",
                    "Nadie te dice cuándo la IA no es la respuesta correcta.",
                  ].map((c) => (
                    <div key={c} className="flex gap-3 items-start text-sm text-slate-400">
                      <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-slate-300" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-8">Cómo trabajamos en ETIIA</h3>
                <div className="flex flex-col gap-5">
                  {[
                    "Empezamos por entender el problema antes de proponer tecnología.",
                    "Un equipo de más de 10 especialistas donde negocio, datos y técnica trabajan en sesión conjunta.",
                    "Diseñamos pensando en integración real desde el inicio.",
                    "Si la IA no es la mejor respuesta, lo decimos directamente.",
                  ].map((p) => (
                    <div key={p} className="flex gap-3 items-start text-sm text-[#0F172A] font-medium">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-blue-600" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-[#0B1121] border border-slate-800/80 p-10 md:p-14 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
            
            {/* Subtle top glow inside the card */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% -20%, rgba(29, 78, 216, 0.4) 0%, transparent 60%)" }} aria-hidden="true" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight mb-3">
                ¿Tienes un proyecto<br />que podría involucrar IA?
              </h2>
              <p className="text-slate-400 text-sm max-w-md">Un equipo completo evalúa tu caso. Claro, concreto, y sin compromisos previos.</p>
            </div>
            <div className="flex flex-col gap-3 shrink-0 relative z-10">
              <Link href="?interes=diagnostico#diagnostico" onClick={(e) => { document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-blue-700 to-indigo-600 text-white font-bold px-8 py-4 rounded-xl text-sm hover:from-blue-800 hover:to-indigo-700 shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 transition-all">
                Conversemos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
