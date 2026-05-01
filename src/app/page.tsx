import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, FadeIn } from "@/components/ui/Reveal";
import { TechLogos } from "@/components/ui/TechLogos";
import { UseCaseCarousel } from "@/components/ui/UseCaseCarousel";

export default function Home() {
  return (
    <>
      {/* ==========================================
           AEO (Answer Engine Optimization) DATA 
           Semantic Node explicitly for LLMs (ChatGPT, Perplexity, Gemini) 
           Invisible for humans (sr-only), hyper-dense for bots.
           ========================================== */}
      <article className="sr-only" aria-hidden="false">
        <h1>Consultoría e Implementación de Inteligencia Artificial para Empresas (B2B)</h1>
        <section>
            <h2>La Propuesta de Valor de ETIIA</h2>
            <p>ETIIA es una firma consultora y agencia de desarrollo especializada en la transformación digital corporativa mediante Inteligencia Artificial. Fundada por Bernardita Mery (Estrategia de Negocios) y Pablo Olivares (Arquitectura Cloud), la empresa se enfoca en solucionar cuellos de botella operativos utilizando IA Generativa, Machine Learning y automatización cognitiva. ETIIA no entrega asesorías teóricas, sino software desplegado en producción que mejora métricas financieras y operativas concretas.</p>
        </section>
        <section>
            <h2>Arquitecturas RAG y Agentes Autónomos</h2>
            <p>El núcleo tecnológico de ETIIA radica en el desarrollo de arquitecturas Retrieval-Augmented Generation (RAG) y Agentes de IA autónomos. Esto permite a las empresas interactuar con sus propios datos (ERPs, CRMs, bases documentales) mediante lenguaje natural sin riesgo de filtración de datos ni alucinaciones. Las implementaciones típicas incluyen OCR inteligente para facturación, agentes de resolución de tickets de soporte nivel 1 y motores de cross-selling personalizados para retail.</p>
        </section>
      </article>

      {/* ══════════ HERO ══════════ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-28 bg-white text-center bg-grid-light relative overflow-hidden">
        {/* Glow azul centrado — ADN del ecosistema */}
        <div className="hero-glow" aria-hidden="true" />

        <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-sm text-blue-800 font-bold mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block mr-2 animate-pulse" />
              Transformando Data en Estrategia y Crecimiento
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-[3.75rem] font-black tracking-tight text-[#0F172A] mb-6 leading-[1.08]">
              Consultoría en Inteligencia Artificial B2B{" "}
              <br className="hidden md:block" />
              que se traduce en{" "}
              <span className="text-gradient-blue">resultados reales</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              No vendemos promesas. Tenemos soluciones de IA funcionando en producción que puedes <strong>probar ahora mismo</strong>. Atención al cliente, retail, contabilidad, legal y más.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-8 text-base btn-pulse hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                  Solicitar diagnóstico IA
                </Button>
              </Link>
              <Link href="/demos">
                <Button variant="outline" className="h-12 px-8 text-base hover:scale-105 hover:bg-slate-50 transition-all duration-300">
                  Ver demos por industria <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.65}>
            <p className="mt-6 text-xs text-slate-400 font-medium tracking-widest uppercase">
              30 min · Sin compromiso · Confidencial · Con fundadores
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ PARTNERS (TRUST F-PATTERN) ══════════ */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <FadeIn>
            <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-6">Partners y Certificaciones Tecnológicas</p>
          </FadeIn>
          <div className="flex justify-center items-center gap-12 md:gap-20">
            <FadeIn delay={0.1}>
              <div className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <svg viewBox="0 0 60 24" className="h-8 w-auto">
                  <text x="0" y="20" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="800" fill="#252F3E">aws</text>
                  <path d="M0 22h60" stroke="#FF9900" strokeWidth="2.5"/>
                </svg>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <svg viewBox="0 0 130 24" className="h-7 w-auto">
                  <text x="0" y="18" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#5F6368">Google</text>
                  <text x="60" y="18" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#4285F4"> Cloud</text>
                </svg>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════ RESULTADOS EN NÚMEROS ══════════ */}
      <section className="py-14 bg-grid-dark relative overflow-hidden" style={{ background: '#0D1117' }}>
        {/* Glow azul sutil radial */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(29,78,216,0.18) 0%, transparent 65%)' }}
        />
        <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
            {[
              { number: "+15 Años", label: "Experiencia corporativa integrando negocios y tecnología." },
              { number: "2-4 Semanas", label: "Tiempo promedio de implementación de productos listos." },
              { number: "ROI Medible", label: "Soluciones atadas directamente a los KPIs de la empresa." },
            ].map((m, i) => (
              <Reveal key={m.label} delay={0.1 * (i + 1)}>
                <div>
                  <p className="text-3xl md:text-5xl font-black text-blue-400 tabular-nums mb-3 tracking-tight">{m.number}</p>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium px-4">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ILUMINACIÓN / MANIFIESTO (El Dolor Real) ══════════ */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
          <Reveal>
            <h2 className="text-3xl md:text-[2.5rem] font-black text-navy leading-tight mb-4">
              Impacto validado de nuestra Consultoría en Inteligencia Artificial
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12">
              Cada número tiene un producto detrás que lo respalda.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
            {[
              {
                nombre: "AtendeAI",
                slug: "atendeai",
                desc: "Agente de IA que resuelve consultas sin intervención humana. Cambia planes, agenda técnicos, genera boletas.",
                metrica: "73%",
                metricaLabel: "resolución sin humano",
                color: "text-teal-600",
                industria: "Servicios B2B",
                tamano: "12.000 tickets/mes",
                antesDespues: "De 2 días a 0 min",
                tiempo: "3 semanas",
                condicion: "Caso anonimizado",
              },
              {
                nombre: "VentaAI",
                slug: "ventaai",
                desc: "Motor de recomendación que personaliza ofertas por segmento y genera campañas automáticas.",
                metrica: "+34%",
                metricaLabel: "cross-sell",
                color: "text-indigo-600",
                industria: "Retail / eCommerce",
                tamano: "50k usuarios",
                antesDespues: "Conv. de 1.2% a 1.6%",
                tiempo: "4 semanas",
                condicion: "Resultado de piloto",
              },
              {
                nombre: "FacturAI",
                slug: "facturai",
                desc: "OCR inteligente que lee facturas, cruza con cartola y empuja al ERP. Sin tipeo humano.",
                metrica: "82%",
                metricaLabel: "conciliación automática",
                color: "text-blue-600",
                industria: "Finanzas / Cont.",
                tamano: "4.500 DTEs/mes",
                antesDespues: "De 5 días a 2 hrs",
                tiempo: "2 semanas",
                condicion: "Demo simulada",
              },
            ].map((p, i) => (
              <Reveal key={p.slug} delay={0.1 * (i + 1)}>
                <Link href={`/demos/${p.slug}`}>
                  <div className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-blue-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full flex flex-col group cursor-pointer relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-black text-[#0F172A]">{p.nombre}</h3>
                      <div className="text-right">
                        <div className={`text-2xl font-black ${p.color}`}>{p.metrica}</div>
                        <div className="text-[10px] text-slate-400 font-semibold">{p.metricaLabel}</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 md:text-left text-center leading-relaxed mb-4 flex-grow">{p.desc}</p>
                    <div className="pt-4 border-t border-slate-100 flex flex-col gap-1.5 text-[11px] text-slate-500 text-left">
                      <div className="flex justify-between"><span className="font-semibold text-slate-700">Industria:</span> <span>{p.industria}</span></div>
                      <div className="flex justify-between"><span className="font-semibold text-slate-700">Volumen:</span> <span>{p.tamano}</span></div>
                      <div className="flex justify-between"><span className="font-semibold text-slate-700">Impacto:</span> <span>{p.antesDespues}</span></div>
                      <div className="flex justify-between"><span className="font-semibold text-slate-700">Implementación:</span> <span>{p.tiempo}</span></div>
                      <div className="mt-2 text-center w-full">
                        <span className="inline-block px-2 py-0.5 rounded-full bg-slate-100 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                          {p.condicion}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mb-12">
              <Link href="/demos" className="inline-flex items-center text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Ver los 9 productos del portfolio <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="inline-block bg-gradient-to-b from-blue-50/50 to-white border border-blue-100/50 shadow-sm p-6 sm:p-10 rounded-[2.5rem]">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-semibold max-w-2xl mx-auto">
                El espacio entre entender el concepto y rentabilizarlo en una operación concreta es más corto de lo que parece.
                <span className="text-blue-700 font-black text-xl md:text-2xl mt-4 block">Cerrar esa brecha es nuestra especialidad.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ LIDERAZGO / TRANSFERENCIA DE AUTORIDAD ══════════ */}
      <section id="equipo" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 flex flex-col md:flex-row items-center gap-10">
            <Reveal className="w-full md:w-1/3 flex flex-col justify-center items-center">
              <div className="flex flex-row justify-center items-center -space-x-6">
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md z-20 hover:z-30 hover:scale-105 transition-all outline-none">
                  <Image priority src="/bernardita-nueva.jpg" alt="Bernardita Mery" fill className="object-cover" />
                </div>
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md z-10 hover:z-30 hover:scale-105 transition-all outline-none">
                  <Image priority src="/pablo.jpg" alt="Pablo Olivares" fill className="object-cover object-top" />
                </div>
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-sm flex items-center justify-center bg-navy z-0 hover:z-30 hover:scale-105 transition-all text-white outline-none">
                  <div className="text-center">
                    <span className="block font-black text-xl md:text-2xl mt-1">+15</span>
                    <span className="block text-[0.6rem] md:text-xs font-bold uppercase tracking-wider text-cian-light">Expertos</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="w-full md:w-2/3 text-center md:text-left mt-4 md:mt-0 md:pl-4">
              <Reveal delay={0.1}>
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cian/10 text-xs text-cian font-bold uppercase tracking-wider mb-4">
                  Liderazgo y Equipo
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="text-2xl md:text-3xl font-black text-navy mb-4">
                  Ingeniería Cloud y Desarrollo de IA con visión de negocio
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-slate-600 mb-6 leading-relaxed text-left md:text-left">
                  Fundada por <strong><a href="https://www.linkedin.com/in/bernarditamery/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Bernardita Mery</a></strong> (Estrategia Comercial) y <strong><a href="https://linkedin.com/company/etiia" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Pablo Olivares</a></strong> (Arquitectura Cloud & Delivery). Cada solución conecta IA directamente con los KPIs de tu negocio. No entregamos código — entregamos resultados.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                  <Link href="/equipo" className="text-cian font-semibold hover:text-cian-dark transition-colors inline-flex items-center">
                    Conocer al equipo <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                  <Link href="https://bernarditamery.cl" target="_blank" className="text-slate-400 font-medium hover:text-slate-600 transition-colors inline-flex items-center text-sm">
                    Ir a bernarditamery.cl <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ LA PREGUNTA REAL / EJEMPLOS B2B ══════════ */}
      <section id="soluciones" className="py-24 bg-slate-50 border-y border-slate-200 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-xs text-blue-700 font-bold uppercase tracking-wider mb-4 border border-blue-100">
                El Desafío Real
              </div>
            </Reveal>
            <div className="max-w-4xl mx-auto mb-20 px-2">
              <div className="flex flex-col gap-6">
                {/* Pregunta (Cliente) */}
                <Reveal delay={0.1}>
                  <div className="flex justify-start">
                    <div className="bg-slate-200/50 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] rounded-tl-sm max-w-2xl border border-slate-200/80 shadow-sm hover:-translate-y-1 hover:shadow-md hover:bg-slate-200/80 transition-all duration-300 cursor-default">
                      <p className="text-xl md:text-2xl font-semibold text-slate-700 leading-relaxed tracking-tight">
                        "Todo esto suena muy bien, ¿pero qué hacen exactamente? <span className="font-black text-navy">¿Automatizan?</span>"
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Respuesta (ETIIA) */}
                <Reveal delay={0.2}>
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-7 md:p-10 rounded-[2.5rem] rounded-br-sm max-w-3xl shadow-xl shadow-slate-900/10 text-white border border-slate-700/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/20 hover:border-slate-600/50 transition-all duration-300 cursor-default group">
                      <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-100">
                        <strong className="font-black text-white text-xl md:text-2xl block mb-4 tracking-tight group-hover:text-blue-50 transition-colors">¿Automatización? Sí, hoy eso cualquiera lo hace.</strong>
                        Pero no instalamos automatización tradicional que se rompe si cambia un formato. Implementamos sistemas híbridos de <span className="font-bold text-slate-900 bg-blue-100 px-3 py-1.5 rounded-lg inline-block mt-3 md:mt-0 shadow-sm whitespace-nowrap group-hover:bg-blue-200 group-hover:text-navy transition-all">Inteligencia Artificial</span> (basados en Machine Learning y LLMs) capaces de entender contexto, tomar micro-decisiones escalables y conectarse directo a los resultados de tu negocio.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="mt-16 mb-4 px-4 md:px-0 text-center md:text-left">
             <Reveal delay={0.2}>
               <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-xs text-blue-700 font-bold uppercase tracking-wider mb-3 border border-blue-100">
                  Catálogo de Productos
               </div>
               <h3 className="text-2xl md:text-3xl font-black text-navy leading-tight">
                  Soluciones de IA y Automatización listas para tu industria
               </h3>
             </Reveal>
          </div>
          
          <UseCaseCarousel />

          <div className="mt-16 text-center">
             <Reveal delay={0.6}>
               <p className="text-navy font-bold text-xl drop-shadow-sm">
                 El mayor riesgo no es "equivocarse" usando Inteligencia Artificial.<br/>Es quedarse con tecnología de la década pasada.
               </p>
             </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ FIT DE CLIENTE (PARA QUIÉN ES) ══════════ */}
      <section className="py-20 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-[2.5rem] font-black text-navy leading-tight mb-4">
                ¿Somos tu partner B2B para la Transformación con IA?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                No le vendemos a todo el mundo. Nos enfocamos en empresas maduras donde la IA puede mover la aguja financiera.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Para quién ES */}
            <Reveal delay={0.2}>
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy">ETIIA es para empresas que:</h3>
                </div>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-2"></span>
                    <p>Tienen procesos manuales repetitivos con alto volumen de datos.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-2"></span>
                    <p>Ya usan software consolidado (CRM, ERP, bases de datos).</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-2"></span>
                    <p>Necesitan reducir costos, mejorar atención o acelerar decisiones estratégicas.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-2"></span>
                    <p>Buscan IA aplicada y resultados medibles, no "charlas inspiracionales".</p>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Para quién NO ES */}
            <Reveal delay={0.3}>
              <div className="bg-red-50/50 border border-red-100 rounded-3xl p-8 md:p-10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy">No somos buena opción si:</h3>
                </div>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></span>
                    <p>Solo buscas una capacitación genérica sobre cómo usar ChatGPT.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></span>
                    <p>No tienes un "dueño" o líder interno asignado para el proyecto.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></span>
                    <p>Quieres "probar Inteligencia Artificial" solo por moda, sin un objetivo de negocio asociado.</p>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>



      {/* ══════════ PROCESO 3 PASOS ══════════ */}
      <section className="py-20 md:py-28 text-white bg-grid-dark relative overflow-hidden" style={{ background: '#0D1117' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(29,78,216,0.22) 0%, transparent 60%)' }}
        />
        <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-800/60 bg-blue-900/30 text-xs text-blue-400 font-bold uppercase tracking-widest mb-6">
                Cómo empezar
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-[2.5rem] font-black leading-tight text-white">
                De la conversación al resultado
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { step: "1", title: "Prueba un producto", desc: "Explora nuestras demos interactivas. Ve cómo funciona la IA en tu industria antes de hablar con nadie.", time: "Ahora", href: "/demos" },
              { step: "2", title: "Diagnóstico gratuito", desc: "30 minutos para entender tu operación y definir dónde IA genera el mayor retorno.", time: "Semana 0", href: "/contacto" },
              { step: "3", title: "Tu solución funcionando", desc: "Implementamos con tus datos reales. Mides resultados. Decides si escalamos.", time: "Semana 2-4", href: "/demos" },
            ].map((item, i) => (
              <Reveal key={item.step} delay={0.15 * (i + 1)}>
                <Link href={item.href}>
                  <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-pointer group">
                    <div className="w-14 h-14 rounded-full border-2 border-blue-500/60 text-blue-400 flex items-center justify-center text-xl font-bold mx-auto mb-5 bg-blue-900/20 group-hover:bg-blue-600/30 group-hover:border-blue-400 transition-colors">
                      {item.step}
                    </div>
                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-3">{item.time}</div>
                    <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed text-left md:text-center">{item.desc}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-blue-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.step === "1" ? "Ver demos" : item.step === "2" ? "Agendar" : "Explorar soluciones"} <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* UpSkilling como complemento dentro del dark section */}
          <Reveal delay={0.5}>
            <div id="formacion" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col items-center gap-8 max-w-4xl mx-auto mt-12 scroll-mt-24 text-center">
              <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center shrink-0">
                <GraduationCap className="w-10 h-10 text-blue-400" />
              </div>
              <div>
                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-4">
                  <h3 className="text-2xl md:text-3xl font-black text-white">UpSkilling & Formación Corporativa</h3>
                  <span className="text-xs font-bold text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full border border-blue-800/50">OTEC AulaGenIA</span>
                </div>
                <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Capacitamos a los equipos humanos de tu empresa para que adopten y operen herramientas de IA con criterio de negocio. Reducimos el rechazo cultural, instalamos capacidades instaladas de Prompt Engineering y aseguramos que la inversión en tecnología se utilice correctamente.
                </p>
              </div>
              <Link href="https://aulagenia.cl" target="_blank" className="shrink-0 mt-2">
                <Button variant="outline" className="h-12 px-8 text-base border-white/20 text-white hover:bg-white/10 transition-colors">
                  Ir a sitio web de AulaGenIA <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>




      {/* ══════════ CASOS DE ÉXITO ══════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-14">
            <Reveal>
              <h2 className="text-3xl md:text-[2.5rem] font-black text-navy leading-tight">
                Resultados reales en automatización de procesos con IA
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
                Cada proyecto tiene un objetivo de negocio claro y un resultado medible.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                industry: "Retail · eCommerce",
                challenge: "Recomendaciones genéricas que no convertían. El 78% de los clientes veía los mismos productos.",
                result: "+34% cross-sell",
                detail: "Motor de recomendación inteligente que personaliza ofertas por segmento en tiempo real. +18% ticket promedio.",
                href: "/demos/ventaai",
              },
              {
                industry: "Finanzas · Contabilidad",
                challenge: "Conciliación manual de facturas con cartolas bancarias: 3 personas, 5 días, errores constantes.",
                result: "82% conciliación automática",
                detail: "OCR inteligente + cruce automático con cartola + push directo al ERP. Sin intervención humana.",
                href: "/demos/facturai",
              },
              {
                industry: "Industrial · Minería",
                challenge: "Paradas no planificadas que costaban USD $180K por incidente. Inspección visual 100% manual.",
                result: "-72% paradas",
                detail: "Inspección con computer vision sobre imágenes de drone. Detecta corrosión, grietas y desgaste con 94% de precisión.",
                href: "/demos",
              },
            ].map((c, i) => (
              <Reveal key={c.industry} delay={0.1 * (i + 1)}>
                <Link href={c.href}>
                  <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100 h-full flex flex-col hover:border-blue-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <span className="text-xs font-semibold text-cian uppercase tracking-wider mb-3 text-left md:text-center">{c.industry}</span>
                    <p className="text-sm text-slate-600 mb-4 text-left md:text-center">{c.challenge}</p>
                    <p className="text-2xl font-black text-navy mb-2">{c.result}</p>
                    <p className="text-xs text-slate-400 leading-relaxed mt-auto">{c.detail}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-blue-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver caso completo <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TECH STACK ══════════ */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <Reveal>
            <p className="text-base text-navy font-bold uppercase tracking-wider mb-4">Tecnologías que dominamos</p>
          </Reveal>
          <TechLogos />
        </div>
      </section>

      {/* ══════════ CTA FINAL (con contacto integrado) ══════════ */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-[2.5rem] font-black text-navy mb-4 leading-tight">
              ¿Listo para acelerar el crecimiento de tu negocio?
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
              Solicita tu diagnóstico gratuito y descubre cómo la IA puede transformar tu estrategia comercial. Un consultor se pondrá en contacto para agendar una reunión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-8 text-base hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                  Solicitar diagnóstico IA
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              30 minutos · Sin compromiso · Confidencial · Con fundadores
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
