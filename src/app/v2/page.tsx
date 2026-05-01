import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator, Scale, Users, Stethoscope, Leaf, GraduationCap, Headset, ShoppingBag, Mic, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, FadeIn } from "@/components/ui/Reveal";
import { TechLogos } from "@/components/ui/TechLogos";

const productosDestacados = [
  {
    nombre: "AtendeAI",
    slug: "atendeai",
    desc: "Agente de IA que resuelve consultas sin intervención humana. Cambia planes, agenda técnicos, genera boletas.",
    metrica: "73%",
    metricaLabel: "resolución sin humano",
    color: "teal",
  },
  {
    nombre: "VentaAI",
    slug: "ventaai",
    desc: "Motor de recomendación que personaliza ofertas por segmento y genera campañas automáticas.",
    metrica: "+34%",
    metricaLabel: "cross-sell",
    color: "indigo",
  },
  {
    nombre: "FacturAI",
    slug: "facturai",
    desc: "OCR inteligente que lee facturas, cruza con cartola y empuja al ERP. Sin tipeo humano.",
    metrica: "82%",
    metricaLabel: "conciliación automática",
    color: "blue",
  },
];

const verticales = [
  { icon: <Headset className="w-5 h-5" />, title: "Atención al Cliente", href: "/demos/atendeai" },
  { icon: <ShoppingBag className="w-5 h-5" />, title: "Retail", href: "/demos/ventaai" },
  { icon: <Calculator className="w-5 h-5" />, title: "Contabilidad", href: "/demos/facturai" },
  { icon: <Scale className="w-5 h-5" />, title: "Legal", href: "/demos/lexsearch" },
  { icon: <Users className="w-5 h-5" />, title: "RRHH", href: "/demos/talentparse" },
  { icon: <Stethoscope className="w-5 h-5" />, title: "Salud", href: "/demos/agendai" },
  { icon: <Leaf className="w-5 h-5" />, title: "Agricultura", href: "/demos/cosechai" },
  { icon: <GraduationCap className="w-5 h-5" />, title: "Educación", href: "/demos/autorend" },
  { icon: <Mic className="w-5 h-5" />, title: "Compliance", href: "/demos/transcribai" },
];

export default function HomeV2() {
  return (
    <>
      {/* ══════════ BANNER V2 ══════════ */}
      <div className="bg-amber-50 border-b border-amber-200 text-center py-2 text-sm text-amber-800 font-medium fixed top-16 w-full z-40">
        Estás viendo la <strong>V2 del homepage</strong> · <Link href="/" className="underline font-bold">Ver versión actual →</Link>
      </div>

      {/* ══════════ HERO ══════════ */}
      <section className="pt-44 pb-16 md:pt-52 md:pb-28 bg-white text-center bg-grid-light relative overflow-hidden">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/60 text-sm text-blue-700 font-semibold mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block mr-2 animate-pulse" />
              9 productos con demo interactiva
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-[3.75rem] font-black tracking-tight text-[#0F172A] mb-6 leading-[1.08]">
              Productos de IA{" "}
              <br className="hidden md:block" />
              <span className="text-gradient-blue">listos para tu operación</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              No vendemos promesas. Tenemos soluciones de IA funcionando en producción que puedes <strong>probar ahora mismo</strong>. Atención al cliente, retail, contabilidad, legal y más.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demos">
                <Button className="h-12 px-8 text-base btn-pulse">
                  <Play className="w-4 h-4 mr-2" /> Probar un Producto
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" className="h-12 px-8 text-base">
                  Agendar Diagnóstico Gratuito <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ STATS BAR ══════════ */}
      <section className="py-14 relative overflow-hidden" style={{ background: '#0D1117' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(29,78,216,0.18) 0%, transparent 65%)' }}
        />
        <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "9", label: "Productos con demo interactiva" },
              { number: "3.2x", label: "ROI promedio primer año" },
              { number: "+8", label: "Industrias atendidas" },
              { number: "4 sem", label: "Tiempo a producción" },
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

      {/* ══════════ PRODUCTOS DESTACADOS ══════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-14">
            <Reveal>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-xs text-slate-500 font-semibold uppercase tracking-wider mb-6">
                Productos Destacados
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-[2.5rem] font-black text-[#0F172A] leading-tight">
                No te contamos qué hacemos.<br/>Te lo mostramos.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
                Cada producto tiene una demo interactiva que puedes probar ahora. Sin formularios, sin ventas.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {productosDestacados.map((p, i) => (
              <Reveal key={p.slug} delay={0.1 * (i + 1)}>
                <Link href={`/demos/${p.slug}`}>
                  <div className="bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all h-full group cursor-pointer relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-[3px] bg-${p.color}-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                    <div className="p-7">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-black text-[#0F172A]">{p.nombre}</h3>
                        <div className="text-right">
                          <div className={`text-2xl font-black text-${p.color}-600`}>{p.metrica}</div>
                          <div className="text-[10px] text-slate-400 font-semibold">{p.metricaLabel}</div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4">{p.desc}</p>
                      <span className="inline-flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-3.5 h-3.5 mr-1" /> Probar demo <ArrowRight className="ml-1 w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="text-center">
            <Reveal delay={0.4}>
              <Link href="/demos" className="inline-flex items-center text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                Ver los 9 productos del portfolio <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ VERTICALES COMPACTAS ══════════ */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-10">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-black text-[#0F172A]">
                Funciona en tu industria
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
            {verticales.map((v, i) => (
              <Reveal key={v.title} delay={0.05 * (i + 1)}>
                <Link href={v.href}>
                  <div className="bg-white rounded-xl p-3 border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all text-center group cursor-pointer">
                    <div className="w-10 h-10 mx-auto bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-2 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      {v.icon}
                    </div>
                    <p className="text-[11px] font-semibold text-slate-600 leading-tight">{v.title}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CASOS DE ÉXITO ══════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-14">
            <Reveal>
              <h2 className="text-3xl md:text-[2.5rem] font-black text-[#0F172A] leading-tight">
                Impacto validado en producción
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
                Cada número tiene un producto detrás que lo respalda.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                industry: "Retail · eCommerce",
                challenge: "Recomendaciones genéricas que no convertían. El 78% de los clientes veía los mismos productos.",
                result: "+34% cross-sell",
                detail: "Motor de recomendación inteligente que personaliza ofertas por segmento en tiempo real.",
                href: "/demos/ventaai",
              },
              {
                industry: "Finanzas · Contabilidad",
                challenge: "Conciliación manual de facturas con cartolas bancarias: 3 personas, 5 días, errores constantes.",
                result: "82% automático",
                detail: "OCR inteligente + cruce automático con cartola + push directo al ERP.",
                href: "/demos/facturai",
              },
              {
                industry: "Industrial · Minería",
                challenge: "Paradas no planificadas que costaban USD $180K por incidente. Inspección visual 100% manual.",
                result: "-72% paradas",
                detail: "Inspección con computer vision sobre imágenes de drone. 94% de precisión.",
                href: "/demos",
              },
            ].map((c, i) => (
              <Reveal key={c.industry} delay={0.1 * (i + 1)}>
                <Link href={c.href}>
                  <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100 h-full flex flex-col hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group">
                    <span className="text-xs font-semibold text-cian uppercase tracking-wider mb-3">{c.industry}</span>
                    <p className="text-sm text-slate-500 mb-4">{c.challenge}</p>
                    <p className="text-2xl font-black text-[#0F172A] mb-2">{c.result}</p>
                    <p className="text-xs text-slate-400 leading-relaxed mt-auto">{c.detail}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-blue-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver demo <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ EQUIPO ══════════ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 flex flex-col md:flex-row items-center gap-10 shadow-sm">
            <Reveal className="w-full md:w-1/3 flex flex-col justify-center items-center">
              <div className="flex flex-row justify-center items-center -space-x-6">
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md z-20">
                  <Image src="/bernardita-nueva.jpg" alt="Bernardita Mery" fill className="object-cover" />
                </div>
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md z-10">
                  <Image src="/pablo.jpg" alt="Pablo Olivares" fill className="object-cover object-top" />
                </div>
              </div>
            </Reveal>
            <div className="w-full md:w-2/3 text-center md:text-left mt-4 md:mt-0 md:pl-4">
              <Reveal delay={0.1}>
                <h2 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-4">
                  Negocio + Ingeniería
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Fundada por <strong>Bernardita Mery</strong> (Estrategia Comercial) y <strong>Pablo Olivares</strong> (Arquitectura Cloud). Cada solución conecta IA directamente con los KPIs de la Alta Dirección. No entregamos código — entregamos resultados.
                </p>
                <Link href="/equipo" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
                  Conocer al equipo <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROCESO 3 PASOS ══════════ */}
      <section className="py-20 md:py-28 text-white relative overflow-hidden" style={{ background: '#0D1117' }}>
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
              { step: "1", title: "Prueba un producto", desc: "Explora nuestras demos interactivas. Ve cómo funciona la IA en tu industria antes de hablar con nadie.", time: "Ahora" },
              { step: "2", title: "Diagnóstico gratuito", desc: "30 minutos para entender tu operación y definir dónde IA genera el mayor retorno.", time: "Semana 0" },
              { step: "3", title: "Piloto en producción", desc: "Implementamos con tus datos reales. Mides resultados. Decides si escalamos.", time: "Semana 4" },
            ].map((item, i) => (
              <Reveal key={item.step} delay={0.15 * (i + 1)}>
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="w-14 h-14 rounded-full border-2 border-blue-500/60 text-blue-400 flex items-center justify-center text-xl font-bold mx-auto mb-5 bg-blue-900/20">
                    {item.step}
                  </div>
                  <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-3">{item.time}</div>
                  <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PARTNERS + TECH ══════════ */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <Reveal>
            <p className="text-base text-[#0F172A] font-bold uppercase tracking-wider mb-4">Tecnologías que dominamos</p>
          </Reveal>
          <TechLogos />
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-[2.5rem] font-black text-[#0F172A] mb-4 leading-tight">
              ¿Quieres verlo funcionando con tus datos?
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
              Prueba una demo ahora o agenda una conversación con nuestro equipo. Sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demos">
                <Button className="h-12 px-8 text-base">
                  <Play className="w-4 h-4 mr-2" /> Explorar Productos
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" className="h-12 px-8 text-base">
                  Agendar Diagnóstico Gratuito
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
