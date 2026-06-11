"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  BrainCircuit, 
  Code2, 
  Presentation, 
  Database, 
  TrendingUp, 
  Check
} from "lucide-react";
import { Reveal, FadeIn, ScaleIn } from "@/components/ui/Reveal";

const servicesList = [
  {
    id: "estrategia",
    num: "01",
    title: "Diagnóstico de Madurez y Roadmap",
    tagline: "Estrategia y Gobernanza",
    desc: "Antes de comprar tecnología, necesitas saber en qué punto estás. Evaluamos la preparación de tu organización para adoptar IA, identificamos los procesos donde realmente tiene sentido aplicarla y diseñamos una hoja de ruta con prioridades, costos y plazos concretos.",
    icon: Presentation,
    queAbarca: [
      "Diagnóstico del nivel de madurez en datos e IA de tu organización",
      "Hoja de ruta priorizada con costos, plazos y retorno estimado",
      "Políticas de gobernanza, privacidad y cumplimiento regulatorio",
      "Gestión del cambio y formación in-company para equipos técnicos y gerenciales"
    ],
    loQueLograras: [
      "Tu directorio recibe un documento claro con el estado actual, las brechas y el plan de inversión para cada etapa.",
      "Las iniciativas se organizan por impacto y viabilidad: se sabe qué hacer primero y qué descartar.",
      "Los equipos internos entienden su rol dentro del proceso de adopción, con criterios comunes y sin ambigüedades."
    ],
    comoTrabajamos: [
      { step: "1", title: "Contexto", desc: "Mapeamos las metas comerciales y las prioridades operativas del negocio." },
      { step: "2", title: "Auditoría", desc: "Evaluamos la infraestructura técnica, la calidad de datos y los procesos actuales." },
      { step: "3", title: "Gobernanza", desc: "Definimos las políticas de privacidad, seguridad y control de acceso necesarias." },
      { step: "4", title: "Roadmap", desc: "Entregamos la hoja de ruta con fases, costos estimados y métricas de seguimiento." }
    ],
    ctaText: "Agendar Sesión de Diagnóstico",
    ctaHref: "/?interes=diagnostico#diagnostico",
    sidebarNote: "Partimos por lo que ya tienes. El diagnóstico identifica si la inversión en IA tiene sentido para tu caso."
  },
  {
    id: "datos",
    num: "02",
    title: "Arquitectura de Datos e Infraestructura Cloud",
    tagline: "Ingeniería de Datos y Cloud",
    desc: "Sin datos limpios y accesibles, cualquier modelo falla. Conectamos tus fuentes de información (ERP, CRM, bases heredadas), diseñamos la arquitectura de almacenamiento seguro y automatizamos los flujos de carga para que la información esté lista cuando se necesite.",
    icon: Database,
    queAbarca: [
      "Automatización de pipelines ETL y flujos de ingesta de datos",
      "Diseño de Data Lakes y almacenamiento en nubes privadas (AWS, Azure, GCP)",
      "Estandarización, limpieza y deduplicación de registros históricos",
      "Conexión segura de bases heredadas con sistemas actuales"
    ],
    loQueLograras: [
      "Tus datos comerciales se consolidan en una sola vista, sin duplicados ni inconsistencias entre sistemas.",
      "La información confidencial se almacena y transita bajo estándares de seguridad auditables.",
      "Los equipos de análisis y operaciones acceden a datos frescos sin depender de extracciones manuales."
    ],
    comoTrabajamos: [
      { step: "1", title: "Inventario", desc: "Identificamos dónde residen tus datos, en qué formato y con qué calidad." },
      { step: "2", title: "Arquitectura", desc: "Diseñamos la estructura de almacenamiento y procesamiento para tu escala." },
      { step: "3", title: "Automatización", desc: "Programamos los pipelines de limpieza, carga y validación de datos." },
      { step: "4", title: "Verificación", desc: "Probamos velocidad de acceso, integridad y permisos de seguridad." }
    ],
    ctaText: "Consultar por Infraestructura de Datos",
    ctaHref: "/?interes=diagnostico#diagnostico",
    sidebarNote: "La infraestructura se diseña para crecer con tu operación, no para un proyecto puntual."
  },
  {
    id: "analitica",
    num: "03",
    title: "Modelos Predictivos y Visualización de Datos",
    tagline: "Analítica Avanzada",
    desc: "Convertimos registros históricos en predicciones que se adelantan al comportamiento del negocio. Entrenamos modelos de Machine Learning adaptados a tus variables y diseñamos paneles interactivos que permiten tomar decisiones sin esperar reportes manuales.",
    icon: TrendingUp,
    queAbarca: [
      "Modelos de predicción de fugas de clientes, demanda e inasistencias",
      "Paneles interactivos de Business Intelligence con datos en tiempo real",
      "Algoritmos de Machine Learning personalizados para tu operación",
      "Detección temprana de anomalías operativas y patrones de fraude"
    ],
    loQueLograras: [
      "Tu equipo comercial sabe qué clientes requieren atención antes de que se vayan, con alertas automáticas.",
      "Las decisiones de inventario, dotación de personal y compras se basan en proyecciones reales, no en intuición.",
      "Los gerentes acceden a cuadros de mando que se actualizan solos, sin depender de analistas para cada consulta."
    ],
    comoTrabajamos: [
      { step: "1", title: "Variables", desc: "Revisamos el historial de datos y seleccionamos las variables con mayor poder predictivo." },
      { step: "2", title: "Entrenamiento", desc: "Entrenamos y validamos algoritmos adaptados a la realidad de tu negocio." },
      { step: "3", title: "Visualización", desc: "Diseñamos los paneles interactivos con las métricas que tu equipo necesita." },
      { step: "4", title: "Producción", desc: "Conectamos los modelos para entregar predicciones diarias a las áreas operativas." }
    ],
    ctaText: "Consultar por Analítica Predictiva",
    ctaHref: "/?interes=diagnostico#diagnostico",
    sidebarNote: "Los modelos se validan con datos reales de tu operación antes de pasar a producción."
  },
  {
    id: "a-medida",
    num: "04",
    title: "Software Corporativo e Integraciones con IA",
    tagline: "Desarrollo a Medida",
    desc: "Cuando el problema no se resuelve con herramientas genéricas, lo construimos. Desarrollamos software que se conecta con tus sistemas actuales (SAP, Salesforce, ERPs propios) y que incorpora IA donde realmente aporta: automatizar lo repetitivo, clasificar lo complejo y escalar lo que hoy depende de una persona.",
    icon: Code2,
    queAbarca: [
      "Integraciones directas vía API con SAP, Salesforce, CRMs y ERPs",
      "Software corporativo con módulos de IA integrados a los procesos del negocio",
      "Modelos de lenguaje (LLM) privados entrenados sobre manuales y documentos internos",
      "Ambientes aislados de procesamiento bajo acuerdos de confidencialidad (NDA)"
    ],
    loQueLograras: [
      "Las tareas administrativas repetitivas (ingreso de datos, cruces, validaciones) se ejecutan sin intervención manual.",
      "La información confidencial se procesa en entornos privados que no comparten datos con terceros.",
      "Los sistemas que hoy no se comunican entre sí quedan conectados con flujos automáticos y trazables."
    ],
    comoTrabajamos: [
      { step: "1", title: "Reglas", desc: "Documentamos la lógica de negocio, las excepciones y los criterios de decisión del proceso." },
      { step: "2", title: "Desarrollo", desc: "Construimos el software, las APIs y los módulos de IA necesarios." },
      { step: "3", title: "Despliegue", desc: "Instalamos la solución en tu entorno seguro, aislado de cualquier infraestructura externa." },
      { step: "4", title: "Adopción", desc: "Capacitamos al equipo que lo va a usar y entregamos la documentación técnica." }
    ],
    ctaText: "Consultar Proyecto a Medida",
    ctaHref: "/?interes=a-medida#diagnostico",
    sidebarNote: "Cada solución se desarrolla sobre tu infraestructura. No dependes de plataformas de terceros."
  }
];

export default function ServiciosClient() {
  return (
    <div className="bg-white min-h-screen">

      {/* ══════════ HERO ══════════ */}
      <section className="pt-36 pb-16 bg-white relative overflow-hidden" aria-label="Nuestros Servicios">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-xs text-blue-600 uppercase tracking-[0.2em] font-bold mb-5">
              Servicios B2B
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight text-[#0F172A] leading-[1.08] mb-6 max-w-2xl">
              Del diagnóstico a la{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                operación
              </span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
              Cada línea de servicio resuelve una etapa distinta del proceso de adopción de IA. Desde entender si tiene sentido aplicarla, hasta construir la solución que opera en producción.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ NAV PILARES ══════════ */}
      <div className="border-y border-slate-200 bg-slate-50/60 sticky top-[72px] z-30">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex gap-1 overflow-x-auto scrollbar-hide -mx-1 py-1" aria-label="Pilares de servicio">
            {servicesList.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2.5 px-4 py-3 text-sm font-semibold text-slate-500 hover:text-[#0F172A] hover:bg-white rounded-lg transition-all whitespace-nowrap group"
              >
                <span className="text-[10px] font-black text-blue-600 bg-blue-50 border border-blue-100 w-6 h-6 rounded-md flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                  {s.num}
                </span>
                {s.tagline}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ══════════ CONTEXTO ══════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight mb-6 leading-tight">
                El error más frecuente es comprar tecnología sin saber para qué
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                La mayoría de las inversiones en IA que no rinden se hicieron sin un diagnóstico previo. Sin claridad sobre el estado de los datos, la capacidad del equipo y la prioridad del problema, los proyectos se convierten en pilotos que consumen presupuesto y no llegan a producción.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ SECCIONES DE SERVICIOS ══════════ */}
      {servicesList.map((service, index) => {
        const IconComp = service.icon;
        const isEven = index % 2 === 0;
        return (
          <section 
            key={service.id} 
            id={service.id} 
            className={`scroll-mt-32 ${isEven ? 'bg-white' : 'bg-[#FAFBFC]'}`}
          >
            {/* ── Encabezado del pilar ── */}
            <div className={`border-t ${isEven ? 'border-slate-200' : 'border-slate-200/70'}`}>
              <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
                <Reveal>
                  <div className="flex items-start gap-6 md:gap-8 mb-8">
                    <span className="text-6xl md:text-7xl lg:text-8xl font-black text-blue-100 leading-none select-none shrink-0 -mt-2 tabular-nums">
                      {service.num}
                    </span>
                    <div className="space-y-3 pt-1">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                          <IconComp className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-[#0F172A] tracking-tight leading-[1.1]">
                          {service.tagline}
                        </h2>
                      </div>
                      <p className="text-base md:text-lg font-medium text-slate-400">
                        {service.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-base md:text-[17px] leading-relaxed max-w-2xl ml-0 md:ml-[calc(4rem+2rem)]">
                    {service.desc}
                  </p>
                </Reveal>
              </div>
            </div>

            {/* ── Contenido: Alcance + Resultados ── */}
            <div className={`${isEven ? 'bg-[#FAFBFC]' : 'bg-white'}`}>
              <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                  {/* Alcance */}
                  <FadeIn delay={0.05}>
                    <div>
                      <h3 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-[0.15em] mb-6 flex items-center gap-2">
                        <span className="w-5 h-px bg-blue-600" />
                        Alcance del servicio
                      </h3>
                      <ul className="space-y-4">
                        {service.queAbarca.map((item, idx) => (
                          <li key={idx} className="flex gap-3 items-start group">
                            <span className="w-5 h-5 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                              <Check className="w-3 h-3 text-blue-600 group-hover:text-white transition-colors" />
                            </span>
                            <span className="text-[15px] text-slate-600 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>

                  {/* Resultados */}
                  <FadeIn delay={0.15}>
                    <div className="bg-[#0F172A] rounded-2xl p-7 md:p-8 relative overflow-hidden h-full flex flex-col">
                      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-blue-500/5 blur-3xl" />
                      
                      <h3 className="text-xs font-extrabold text-blue-400 uppercase tracking-[0.15em] mb-6 flex items-center gap-2 relative z-10">
                        <span className="w-5 h-px bg-blue-500" />
                        Qué cambia en tu operación
                      </h3>
                      
                      <ul className="space-y-5 flex-grow relative z-10">
                        {service.loQueLograras.map((item, idx) => (
                          <li key={idx} className="flex gap-3 items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                            <p className="text-[15px] text-slate-300 leading-relaxed">{item}</p>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 pt-6 border-t border-slate-700/50 relative z-10">
                        <Link 
                          href={service.ctaHref}
                          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-950/30 hover:-translate-y-0.5"
                        >
                          {service.ctaText}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <p className="text-center text-[11px] text-slate-500 mt-3 leading-relaxed">
                          {service.sidebarNote}
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                </div>
              </div>
            </div>

            {/* ── Metodología ── */}
            <div className={`${isEven ? 'bg-white' : 'bg-[#FAFBFC]'} border-t ${isEven ? 'border-slate-100' : 'border-slate-200/50'}`}>
              <div className="max-w-6xl mx-auto px-6 py-14">
                <Reveal>
                  <h3 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-[0.15em] mb-10 flex items-center gap-2">
                    <span className="w-5 h-px bg-blue-600" />
                    Cómo lo ejecutamos
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 relative">
                    {/* Línea conectora horizontal (solo desktop) */}
                    <div className="hidden lg:block absolute top-5 left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200" />
                    
                    {service.comoTrabajamos.map((step, idx) => (
                      <div key={idx} className="relative flex flex-col items-start">
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center mb-4 relative z-10 shadow-sm">
                          <span className="text-xs font-black text-blue-600">{step.step}</span>
                        </div>
                        <p className="text-sm font-bold text-[#0F172A] mb-1.5">
                          {step.title}
                        </p>
                        <p className="text-[13px] text-slate-500 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* ══════════ SOLUCIONES LISTAS PARA OPERAR ══════════ */}
      <section className="py-24 bg-[#FAFBFC] border-t border-slate-200" id="soluciones">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal className="md:order-2">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-6">
                <BrainCircuit className="w-6 h-6 text-slate-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0F172A] mb-4 leading-tight">Soluciones Listas para Operar</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Además de los servicios a medida, contamos con herramientas probadas que ya están resolviendo tareas repetitivas en otras empresas. Se integran a tu operación y liberan a tu equipo del trabajo mecánico.
              </p>
              <ul className="space-y-3.5 mb-8">
                {[
                  "Lectura y conciliación automática de facturas",
                  "Asistentes virtuales que atienden clientes 24/7",
                  "Búsqueda rápida en miles de documentos"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/demos" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors text-sm">
                Ver Soluciones en Vivo <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <ScaleIn delay={0.15} className="md:order-1">
              <div className="bg-[#0F172A] rounded-2xl p-8 md:p-10 border border-slate-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)" }} />
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] mb-5 flex items-center gap-2 relative z-10">
                  <span className="w-5 h-px bg-slate-600" />
                  Interactivos
                </h3>
                <p className="text-white/90 font-medium text-lg leading-relaxed relative z-10">
                  Puedes probar cada herramienta en tiempo real antes de tomar cualquier decisión. Los demos están disponibles sin costo ni compromiso.
                </p>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>
    </div>
  );
}
