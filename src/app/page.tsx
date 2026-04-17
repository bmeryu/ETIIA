import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator, Scale, Users, Stethoscope, Leaf, GraduationCap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, FadeIn } from "@/components/ui/Reveal";
import { TechLogos } from "@/components/ui/TechLogos";

const casosUso = [
  {
    icon: <Calculator className="w-7 h-7" />,
    title: "Finanzas y Contabilidad",
    desc: "Lectura masiva de facturas PDF, conciliación cruzada con cartolas y digitación hacia el ERP local sin tipeo humano.",
    href: "/contacto?caso=contabilidad",
  },
  {
    icon: <Scale className="w-7 h-7" />,
    title: "Legal y Jurídico",
    desc: "Creamos un 'Google privado' de tus contratos dictando sentencia o jurisprudencia para buscar respuestas y no palabras aisladas.",
    href: "/contacto?caso=juridico",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Recursos Humanos",
    desc: "Parseo automático de montañas de CVs. La IA extrae variables críticas y las mapea contra la descripción de tu cargo al instante.",
    href: "/contacto?caso=rrhh",
  },
  {
    icon: <Stethoscope className="w-7 h-7" />,
    title: "Salud y Clínicas",
    desc: "Análisis predictivo de la agenda: la IA detecta inasistencias antes de que ocurran y contacta automáticamente a pacientes en lista de espera.",
    href: "/contacto?caso=salud",
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Agricultura y Viñas",
    desc: "Cruzamos tus históricos de producción con modelos predictivos para mejorar tremendamente la eficiencia y rentabilidad de exportaciones.",
    href: "/contacto?caso=agro",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Educación y OTECs",
    desc: "Automatización en la creación de programas y rúbricas de evaluación a medida, multiplicando el volumen sin gastar en más planificadores.",
    href: "/contacto?caso=educacion",
  },
];

export default function Home() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-28 bg-white text-center bg-grid-light relative overflow-hidden">
        {/* Glow azul centrado — ADN del ecosistema */}
        <div className="hero-glow" aria-hidden="true" />

        <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/60 text-sm text-blue-700 font-semibold mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block mr-2 animate-pulse" />
              Transformando Data en Estrategia y Crecimiento
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-[3.75rem] font-black tracking-tight text-[#0F172A] mb-6 leading-[1.08]">
              Inteligencia Artificial que{" "}
              <br className="hidden md:block" />
              se traduce en{" "}
              <span className="text-gradient-blue">resultados</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Combinamos IA con visión estratégica para convertir tus desafíos de negocio en resultados medibles. Desde el diagnóstico hasta la implementación en producción.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-8 text-base btn-pulse">
                  Solicitar Diagnóstico Gratuito
                </Button>
              </Link>
              <Link href="/servicios">
                <Button variant="outline" className="h-12 px-8 text-base">
                  ¿Cómo Funciona? <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.65}>
            <p className="mt-6 text-xs text-slate-400 font-medium tracking-widest uppercase">
              Diagnóstico gratuito · Sin compromiso · 100% confidencial
            </p>
          </FadeIn>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "+20", label: "Proyectos de IA implementados" },
              { number: "3.2x", label: "ROI promedio en el primer año" },
              { number: "+5", label: "Industrias atendidas" },
              { number: "100%", label: "Proyectos entregados a tiempo" },
            ].map((m, i) => (
              <Reveal key={m.label} delay={0.1 * (i + 1)}>
                <div>
                  <p className="text-3xl md:text-4xl font-black text-blue-400 tabular-nums">{m.number}</p>
                  <p className="text-xs md:text-sm text-slate-300 mt-2 leading-snug font-medium">{m.label}</p>
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
            <h2 className="text-2xl md:text-4xl font-black text-navy leading-tight mb-12">
              Trabajamos con empresas que ya leyeron suficiente sobre IA y quieren, por fin, <span className="text-blue-700">llevarla a producción.</span>
            </h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left px-2 sm:px-0">
            <Reveal delay={0.1}>
              <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl hover:-translate-y-1 hover:bg-white hover:border-blue-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 h-full">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm text-blue-700 font-black mb-5 text-sm">1</div>
                <h3 className="font-bold text-navy text-lg mb-2">Entienden la teoría</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">El directorio comprende la disrupción tecnológica y el equipo logra ejecutar un par de pruebas aisladas con éxito.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl hover:-translate-y-1 hover:bg-white hover:border-blue-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 h-full">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm text-blue-700 font-black mb-5 text-sm">2</div>
                <h3 className="font-bold text-navy text-lg mb-2">Aparece la fricción</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">Al intentar integrarlo a la operación real saltan alertas de seguridad, trabas de TI y cuestionamientos duros sobre el ROI.</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl hover:-translate-y-1 hover:bg-white hover:border-blue-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 h-full group">
                <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm text-blue-700 font-black mb-5 text-sm group-hover:text-blue-800">3</div>
                <h3 className="font-bold text-navy text-lg mb-2">La Parálisis</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">Las pruebas quedan archivadas en un cajón. La innovación se frena y la empresa sigue operando igual que hace cinco años.</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
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
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 flex flex-col md:flex-row items-center gap-10">
            <Reveal className="w-full md:w-1/3 flex flex-col justify-center items-center">
              <div className="flex flex-row justify-center items-center -space-x-6">
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md z-20 hover:z-30 hover:scale-105 transition-all outline-none">
                  <Image src="/bernardita-nueva.jpg" alt="Bernardita Mery" fill className="object-cover" />
                </div>
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md z-10 hover:z-30 hover:scale-105 transition-all outline-none">
                  <Image src="/pablo.jpg" alt="Pablo Olivares" fill className="object-cover object-top" />
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
                  Ingeniería robusta con visión de negocio
                </h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  ETIIA fue fundada por <strong>Bernardita Mery</strong> (Estrategia Comercial) y <strong>Pablo Olivares</strong> (Arquitectura Cloud & Delivery). Combinamos la más rigurosa metodología de negocios con ingeniería de software avanzada. Nos aseguramos de que cada desarrollo de Data, Machine Learning y automatización esté directamente conectado con los KPIs estratégicos de la Alta Dirección.
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
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-xs text-blue-700 font-bold uppercase tracking-wider mb-4 border border-blue-100">
                El Desafío Real
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="max-w-2xl mx-auto mt-6 mb-16 flex justify-center px-4 relative z-10">
                <div className="relative w-full">
                  {/* Globo principal */}
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200">
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 leading-relaxed tracking-tight">
                      Todo esto suena muy bien,<br/>
                      ¿pero qué hacen exactamente?<br/>
                      <span className="font-black text-navy">¿Automatizan?</span>
                    </h2>
                  </div>
                  {/* Cola del globo (Tail) */}
                  <div className="absolute -bottom-[22px] left-12 w-12 h-12 bg-white border-b border-l border-slate-200 transform -rotate-45 rounded-bl-sm -z-10 shadow-[-4px_4px_10px_rgb(0,0,0,0.02)]"></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-slate-100 mt-8 mb-16 max-w-4xl mx-auto hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-left sm:text-center group">
                <p className="text-lg md:text-xl font-medium text-slate-600 leading-relaxed">
                   <strong className="text-navy font-black block sm:inline mb-3 sm:mb-0 text-xl md:text-2xl">¿Automatización? Sí, hoy eso cualquiera lo hace.</strong><br className="hidden sm:block mt-2"/>
                   <span className="block mt-4">
                     Pero no instalamos automatización tradicional que se rompe si cambia un formato. Implementamos sistemas híbridos de <span className="font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg inline-block mt-2 sm:mt-0 sm:ml-1 border border-blue-100/50 group-hover:bg-blue-100/50 transition-colors">Inteligencia Artificial</span> capaces de entender contexto, tomar micro-decisiones escalables y conectarse directo a tus resultados.
                   </span>
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.3}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full">
                <h3 className="text-lg font-bold text-navy mb-3">1. Operaciones Inteligentes</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  No es un robot que solo hace clic (RPA clásico). Un modelo de IA puede leer cotizaciones en texto libre, entender qué está pidiendo el cliente, categorizarlo y empujar el dato validado a tu ERP sin intervención manual.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full">
                <h3 className="text-lg font-bold text-navy mb-3">2. Análisis Predictivo</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Conectamos tu historial con modelos que detectan quién dejará de comprarte el próximo mes o qué producto ofrecer para maximizar ticket. Es pasar de "mirar reportes pasados" a anticiparse al mercado corporativo.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full">
                <h3 className="text-lg font-bold text-navy mb-3">3. Adopción sin Temor</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  La IA fracasa si tu equipo siente que va a perder su empleo por ella. Nosotros no solo entregamos el software; entrenamos 1 a 1 a tu gerencia para que incorporen las herramientas con criterio de negocio.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 text-center">
             <Reveal delay={0.6}>
               <p className="text-navy font-bold text-xl drop-shadow-sm">
                 El mayor riesgo no es "equivocarse" usando Inteligencia Artificial.<br/>Es quedarse con tecnología de la década pasada.
               </p>
             </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ SERVICIOS GRID (estilo MAS) ══════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-xs text-slate-500 font-semibold uppercase tracking-wider mb-6">
                Casos de Uso Reales
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-[2.5rem] font-black text-navy leading-tight">
                No vendemos tecnología teórica.<br/>Resolvemos cuellos de botella específicos.
              </h2>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {casosUso.map((s, i) => (
              <Reveal key={s.title} delay={0.08 * (i + 1)}>
                <Link href={s.href}>
                  <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-300 hover:shadow-[0_8px_28px_-6px_rgba(29,78,216,0.14)] transition-all h-full group cursor-pointer flex flex-col lift-card relative overflow-hidden">
                    {/* Borde top coloreado al hover — mismo patrón que BernarditaMery */}
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 text-blue-600 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                      {s.icon}
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-blue-700 transition-colors">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-grow">{s.desc}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-blue-600 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      Hablemos de tu caso <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center max-w-3xl mx-auto">
            <Reveal delay={0.6}>
              <div className="inline-block bg-cian/5 border border-cian/20 rounded-2xl p-6 text-base text-slate-700 font-medium shadow-sm">
                <span className="block text-xl font-black text-navy mb-2">Y más...</span> 
                <span className="font-bold">¿No ves tu industria aquí?</span> Estos casos son referenciales. Nuestra tecnología es transversal: si en tu empresa hay alta volumetría de datos, operativas repetitivas o cuellos de botella para procesar información, <strong className="text-cian font-black">podemos resolverlo</strong>.
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ PROCESO 3 PASOS ══════════ */}
      <section className="py-20 md:py-28 text-white bg-grid-dark relative overflow-hidden" style={{ background: '#0D1117' }}>
        {/* Glow azul — ADN ecosistema */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(29,78,216,0.22) 0%, transparent 60%)' }}
        />
        <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-800/60 bg-blue-900/30 text-xs text-blue-400 font-bold uppercase tracking-widest mb-6">
                Cómo trabajamos
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-[2.5rem] font-black leading-tight text-white">
                Cuéntanos sobre tu empresa
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-4">
                Estamos listos para comprender tus metas y transformar tus datos en resultados tangibles.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { step: "1", title: "Programa una llamada", desc: "Agenda un diagnóstico gratuito con uno de nuestros consultores." },
              { step: "2", title: "Define tus objetivos", desc: "Desarrolla una estrategia clara alineada a tus KPIs de negocio." },
              { step: "3", title: "Implementa con nosotros", desc: "Construimos la solución, te la transferimos y tú operas autónomo." },
            ].map((item, i) => (
              <Reveal key={item.step} delay={0.15 * (i + 1)}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-blue-500/60 text-blue-400 flex items-center justify-center text-xl font-bold mx-auto mb-5 bg-blue-900/20">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center">
            <FadeIn delay={0.5}>
              <Link href="/contacto">
                <Button className="h-12 px-8 text-base">
                  Solicitar Diagnóstico Gratuito
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════ FORMACIÓN (nuevo) ══════════ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-14">
            <Reveal>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-xs text-slate-500 font-semibold uppercase tracking-wider mb-6">
                Servicio de Formación
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-[2.5rem] font-black text-navy leading-tight">
                Capacita a tu equipo en IA
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
                Capacitaciones in-company adaptadas a las necesidades de tu organización.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "IA Generativa para Negocios", desc: "Aprende a usar herramientas de IA Generativa (ChatGPT, Claude, Gemini) para automatizar tareas, generar contenido y tomar mejores decisiones comerciales.", tag: "Más popular" },
              { title: "Automatización Inteligente con IA", desc: "Identifica procesos manuales y repetitivos en tu operación y aprende a automatizarlos con herramientas de IA. Reduce errores, ahorra tiempo y escala sin sumar personal.", tag: "Práctico" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={0.1 * (i + 1)}>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-cian/40 hover:shadow-md transition-all h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-6 h-6 text-cian" />
                    <span className="text-xs font-bold text-cian bg-cian/10 px-3 py-1 rounded-full">{item.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <Link href="/contacto" className="text-sm font-semibold text-cian hover:text-cian-dark transition-colors inline-flex items-center">
                    Más información <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PARTNERS ══════════ */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <Reveal>
            <p className="text-base text-navy font-bold uppercase tracking-wider mb-8">Partners estratégicos</p>
          </Reveal>
          <div className="flex justify-center items-center gap-16 md:gap-24">
            <Reveal delay={0.1}>
              <div className="opacity-80 hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 60 24" className="h-10 w-auto">
                  <text x="0" y="20" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="800" fill="#252F3E">aws</text>
                  <path d="M0 22h60" stroke="#FF9900" strokeWidth="2.5"/>
                </svg>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="opacity-80 hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 130 24" className="h-9 w-auto">
                  <text x="0" y="18" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#5F6368">Google</text>
                  <text x="60" y="18" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#4285F4"> Cloud</text>
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ CASOS DE ÉXITO ══════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-14">
            <Reveal>
              <h2 className="text-3xl md:text-[2.5rem] font-black text-navy leading-tight">
                Resultados reales en empresas reales
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
                challenge: "Pérdida de clientes por falta de personalización en ofertas y campañas.",
                result: "+38% conversión",
                detail: "Motor de recomendaciones con IA que personaliza ofertas por segmento de cliente en tiempo real.",
              },
              {
                industry: "Financiero · Banca",
                challenge: "Procesos manuales de evaluación crediticia que tomaban 5+ días.",
                result: "De 5 días a 4 horas",
                detail: "Pipeline de scoring crediticio automatizado con ML que redujo el time-to-decision un 95%.",
              },
              {
                industry: "Industrial · Manufactura",
                challenge: "Paradas no planificadas que costaban USD $50K por incidente.",
                result: "-72% paradas",
                detail: "Sistema de mantenimiento predictivo con sensores IoT y Deep Learning para anticipar fallas.",
              },
            ].map((c, i) => (
              <Reveal key={c.industry} delay={0.1 * (i + 1)}>
                <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100 h-full flex flex-col">
                  <span className="text-xs font-semibold text-cian uppercase tracking-wider mb-3">{c.industry}</span>
                  <p className="text-sm text-slate-500 mb-4">{c.challenge}</p>
                  <p className="text-2xl font-black text-navy mb-2">{c.result}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mt-auto">{c.detail}</p>
                </div>
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
                <Button className="h-12 px-8 text-base">
                  Solicitar Diagnóstico Gratuito
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              30 minutos · Diagnóstico gratuito · Tu información es 100% confidencial
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
