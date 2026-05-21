"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, Calendar } from "lucide-react";
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
  { name: "Dirección de proyecto", role: "Estrategia & Liderazgo", desc: "Experiencia comprobada en liderar proyectos de transformación tecnológica. Traduce objetivos de negocio en decisiones técnicas accionables.", tags: ["Estrategia", "Gestión de proyectos", "Inteligencia de negocios"] },
  { name: "IA & Machine Learning", role: "Investigación · Candidato a Doctor", desc: "Candidato a Doctor en Informática Aplicada con publicaciones en IA y optimización. Diseña arquitecturas de modelos con criterio académico y aplicabilidad real.", tags: ["Machine Learning", "Deep Learning", "Publicaciones IA"] },
  { name: "Optimización & Datos", role: "Investigación · Candidato a Doctor", desc: "Candidato a Doctor en Informática Aplicada. Especialidad en exploración de datos y optimización de modelos con aplicaciones en procesos empresariales complejos.", tags: ["Optimización", "Exploración de datos", "Modelos aplicados"] },
  { name: "Ingeniería & Despliegue", role: "Implementación & Procesos", desc: "Cierra la brecha entre el modelo y el sistema real. Experiencia en integrar soluciones de IA en flujos de trabajo empresariales con foco en procesos.", tags: ["Implementación", "Procesos", "Integración técnica"] },
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
                  "text": "La automatización tradicional (ej. RPA) se rompe cuando cambian las reglas o formatos. En ETIIA implementamos Agentes de Inteligencia Artificial basados en LLMs corporativos que entienden contexto, toman micro-decisiones escalables y se adaptan a excepciones, conectándose directamente a los KPIs de negocio B2B."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué es una arquitectura RAG y por qué ETIIA la implementa en empresas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RAG (Retrieval-Augmented Generation) es una arquitectura que conecta Modelos de Lenguaje (como GPT-4 o Claude) de forma segura con las bases de datos privadas de una empresa. ETIIA implementa RAG para asegurar que la IA genere respuestas precisas basadas 100% en la data corporativa interna, eliminando el riesgo de alucinaciones."
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
                  "text": "ETIIA ofrece un diagnóstico inicial gratuito para evaluar la viabilidad técnica y comercial del proyecto. Los proyectos de implementación tienen una duración promedio de 6 a 16 semanas según su complejidad. Contamos con un portafolio de soluciones B2B en distintos rangos de inversión."
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
      <section className="pt-36 pb-20 bg-white bg-grid-light relative overflow-hidden" aria-label="Propuesta principal">
        <div className="hero-glow" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                <h1 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  Consultoría en Inteligencia Artificial B2B y Agentes Autónomos
                </h1>
              </div>
              <p className="text-5xl md:text-[3.25rem] font-black tracking-tight text-[#0F172A] leading-[1.08] mb-6 fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
                  Primero te decimos<br />
                  <span className="text-gradient-blue">si tiene sentido</span><br />
                  aplicar IA
              </p>

              <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                Antes de invertir en desarrollo, necesitas saber si tu problema es realmente un caso para IA, qué conviene hacer primero y qué no. Eso es exactamente lo que hacemos.
              </p>

              <div className="flex flex-wrap gap-4 mb-14 fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                <Link href="?interes=diagnostico#diagnostico" onClick={(e) => { document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 bg-gradient-to-br from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 btn-pulse">
                  Consultar Evaluación Gratuita <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/#equipo" className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-[#0F172A] px-7 py-3.5 rounded-xl font-semibold text-sm transition-all hover:bg-slate-50">
                  Conocer el equipo
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
                <h2 className="text-2xl font-black text-[#0F172A] tracking-tight mb-3">¿Tu problema es un caso real para IA?</h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Evaluamos el potencial, los riesgos y el punto de partida correcto. Sin vender tecnología antes de entender tu contexto.
                </p>
                <div className="bg-white border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-blue-700 font-bold mb-1 uppercase tracking-wider">Equipo completo integrado desde el día uno</p>
                  <p className="text-sm text-[#0F172A] font-medium">Negocio · Datos · Tecnología · Implementación</p>
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
        <div className="border-y border-slate-100 bg-white/50 py-12 mt-20 relative overflow-hidden flex flex-col gap-12">
          
          {/* Trust Band */}
          <div className="max-w-5xl mx-auto px-6 text-center relative z-20 w-full">
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-6">Nuestros sistemas se integran de forma nativa con</p>
            <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sap.svg" alt="SAP" width="40" height="40" className="h-8 md:h-10 w-auto cursor-default hover:scale-110 hover:-translate-y-1 transition-all duration-300" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/salesforce.svg" alt="Salesforce" width="40" height="40" className="h-8 md:h-10 w-auto cursor-default hover:scale-110 hover:-translate-y-1 transition-all duration-300" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" alt="AWS" width="40" height="40" className="h-8 md:h-9 w-auto cursor-default hover:scale-110 hover:-translate-y-1 transition-all duration-300 mt-2" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg" alt="Microsoft" width="40" height="40" className="h-7 md:h-8 w-auto cursor-default hover:scale-110 hover:-translate-y-1 transition-all duration-300" />
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hubspot.svg" alt="HubSpot" width="40" height="40" className="h-7 md:h-9 w-auto cursor-default hover:scale-110 hover:-translate-y-1 transition-all duration-300" />
            </div>
          </div>

          {/* Separator */}
          <div className="w-24 h-px bg-slate-200 mx-auto"></div>

          {/* Tech Ticker */}
          <div className="max-w-5xl mx-auto px-6 text-center relative z-20 w-full">
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-6">Tecnologías que dominamos</p>
            <ul aria-label="Tecnologías principales" className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-8 items-center text-slate-400 font-medium w-full">
              {[
                { category: 'Modelos', items: [
                  <span key="gpt"><span className="font-bold text-slate-600">OpenAI</span> GPT</span>,
                  <span key="claude"><span className="font-bold text-slate-600">Anthropic</span> Claude</span>,
                  <span key="llama"><span className="font-bold text-slate-600">Meta</span> Llama</span>
                ] },
                { category: 'Cloud', items: ['AWS', 'GCP', 'Azure'] },
                { category: 'Arquitectura', items: ['RAG', 'LangChain'] },
              ].map((group, gIdx) => (
                <li key={group.category} className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-widest border border-slate-200 px-2 py-0.5 rounded">{group.category}</span>
                  <div className="flex items-center gap-3 md:gap-6">
                    {group.items.map((tech, i) => (
                      <span key={i} className="flex items-center gap-3 md:gap-6 group">
                        <span className="inline-block cursor-default transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-0.5 group-hover:text-slate-800">{tech}</span>
                        {i < group.items.length - 1 && <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true" />}
                      </span>
                    ))}
                  </div>
                  {gIdx < 2 && <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-200 ml-1 md:ml-2" aria-hidden="true" />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════ DIAGNÓSTICO + FORMULARIO ══════════ */}
      <section className="py-24 bg-slate-50 border-y border-slate-100" id="diagnostico">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal>
                <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">Oferta de entrada</p>
                <h2 className="text-4xl font-black tracking-tight text-[#0F172A] leading-tight mb-6">
                  Diagnóstico inicial:<br />saber qué hacer<br />antes de hacer
                </h2>
                <p className="text-slate-500 leading-relaxed mb-10 text-lg">
                  Muchas empresas pierden tiempo y dinero implementando IA donde no agrega valor real. Nuestro diagnóstico te da claridad concreta en menos de dos semanas.
                </p>
              </Reveal>
              <div className="flex flex-col gap-6">
                {[
                  { n: "1", title: "Revisión del problema y contexto", desc: "Analizamos el problema real detrás del síntoma: qué decisiones se toman, con qué datos, con qué frecuencia." },
                  { n: "2", title: "Evaluación de viabilidad técnica", desc: "Determinamos qué enfoque de IA tiene sentido —o si no lo tiene— con honestidad y criterio técnico real." },
                  { n: "3", title: "Mapa de acción con prioridades", desc: "Recibes un documento claro: qué conviene hacer primero, qué no hacer, y por qué. Sin jerga innecesaria." },
                ].map((step) => (
                  <Reveal key={step.n}>
                    <div className="flex gap-5">
                      <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold">{step.n}</div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A] mb-1">{step.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

            </div>

            <Reveal delay={0.2}>
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-black tracking-tight text-[#0F172A] mb-2">Agendar Diagnóstico</h3>
                <p className="text-sm text-slate-500 mb-8">Cuéntanos brevemente tu proyecto. Te contactamos en 24 horas hábiles para agendar la sesión inicial.</p>
                <DiagnosticoForm />
                
                <div className="mt-5 flex flex-col sm:flex-row items-center sm:items-start gap-3 bg-emerald-50/50 border border-emerald-100/80 rounded-xl p-3 w-full text-left">
                  <div className="bg-emerald-100 p-1.5 rounded-lg text-emerald-700 shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-0.5">Privacidad Corporativa</p>
                    <p className="text-[11px] text-emerald-600/90 leading-relaxed">
                      Datos encriptados. No entrenamos modelos públicos con la información confidencial de nuestros clientes.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                  <p className="text-sm text-slate-500 mb-3">¿Prefieres no esperar 24 horas?</p>
                  <a href="https://calendly.com/etiia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full text-[#0F172A] border border-slate-200 hover:border-blue-300 font-bold px-6 py-3.5 rounded-xl transition-all hover:bg-slate-50 hover:shadow-sm">
                    Agendar reunión directa (20 min) <Calendar className="w-4 h-4 text-blue-600" />
                  </a>
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
              &ldquo;Desarrollamos Agentes Autónomos B2B: Software que razona, se conecta a los sistemas de tu empresa y ejecuta flujos de trabajo completos de principio a fin, con puntos de control humano donde el riesgo o la responsabilidad lo exigen.&rdquo;
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
                Autoridad que viene de haber resuelto problemas reales
              </h2>
              <p className="text-slate-500 leading-relaxed">No consultores teóricos. El equipo ETIIA combina experiencia en liderazgo de proyectos, investigación publicada y ejecución técnica real.</p>
            </div>
          </Reveal>

          {/* Socios fundadores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                img: "/bernardita-nueva.jpg",
                name: "Bernardita Mery",
                badge: "Co-fundadora · CEO",
                desc: "Chief Executive Officer de ETIIA. Ingeniera Comercial UC y Máster Ejecutivo en Inteligencia Artificial. Traduce los objetivos del negocio en decisiones tecnológicas concretas y modelos de rentabilidad.",
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
                desc: "Candidato a Doctor en Informática Aplicada. Es el motor algorítmico del equipo. Construye, entrena y optimiza los sistemas cognitivos y LLMs que le dan inteligencia a cada solución.",
                tags: ["Machine Learning", "Investigación IA", "LLMs"],
                linkedin: "https://www.linkedin.com/in/505748216/"
              },
            ].map((f, i) => (
              <Reveal key={f.name} delay={0.1 * (i + 1)}>
                <div className="bg-white border border-slate-200 rounded-2xl p-7 flex gap-5 hover:border-blue-200 hover:shadow-md transition-all">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <Image src={f.img} alt={f.name} fill sizes="80px" className="object-cover" />
                  </div>
                  <div>
                    <span className="inline-block text-xs text-blue-700 font-bold uppercase tracking-wider bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full mb-2">{f.badge}</span>
                    <h3 className="text-xl font-black text-[#0F172A] tracking-tight mb-2 flex items-center gap-2">
                      {f.name}
                      <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors" aria-label={`LinkedIn de ${f.name}`}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">{f.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.tags.map(t => (
                        <span key={t} className="text-xs bg-slate-100 rounded-full px-3 py-1 text-slate-500 font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-6">Equipo de investigación e implementación</p>
          <Carousel items={teamMembers.map(m => ({ ...m, type: "team" as const }))} />

        </div>
      </section>

      {/* ══════════ BANDA NAVY ══════════ */}
      <section className="bg-[#0F172A] py-20 px-6">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed mb-10">
              &ldquo;Acceder a un equipo con estas capacidades reunidas normalmente requiere contratar cuatro perfiles distintos. ETIIA lo ofrece integrado desde el primer proyecto.&rdquo;
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Negocio + estrategia", "Datos + ciencia", "Modelos + IA", "Ingeniería + integración"].map((pill) => (
                <span key={pill} className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />{pill}
                </span>
              ))}
            </div>
            <p className="text-base text-white/50 font-medium">
              La mayoría de los proyectos de IA fracasan cuando falta uno de estos cuatro.
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
                  Capacitamos a tu equipo para que adopte las herramientas con criterio de negocio. IA Generativa, automatización inteligente y análisis de datos — in-company.
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
                    "Un equipo donde negocio, datos y técnica hablan en sesión conjunta.",
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
              <p className="text-slate-400 text-sm max-w-md">El diagnóstico inicial es el mejor punto de partida: claro, concreto, y sin compromisos previos.</p>
            </div>
            <div className="flex flex-col gap-3 shrink-0 relative z-10">
              <Link href="?interes=diagnostico#diagnostico" onClick={(e) => { document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 bg-gradient-to-br from-blue-700 to-indigo-600 text-white font-bold px-8 py-4 rounded-xl text-sm hover:from-blue-800 hover:to-indigo-700 shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 transition-all">
                Consultar Evaluación Gratuita <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#equipo" className="inline-flex items-center justify-center border border-slate-700 text-slate-300 px-8 py-4 rounded-xl text-sm hover:bg-slate-800 hover:text-white transition-colors font-medium">
                Ver el equipo
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
