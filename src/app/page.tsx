import Link from "next/link";
import { ArrowRight, BarChart3, Brain, Cog, Cloud, PieChart, Users, CheckCircle2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, FadeIn } from "@/components/ui/Reveal";
import { TechLogos } from "@/components/ui/TechLogos";

const servicios = [
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Estrategia de Datos & IA",
    desc: "Define una estrategia que permita aprovechar todo el potencial de tu información para cumplir tus objetivos comerciales.",
    href: "/servicios#estrategia",
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Machine Learning & IA Generativa",
    desc: "Modelos predictivos y generativos aplicados a casos de negocio reales. No IA teórica — IA que genera dinero.",
    href: "/servicios#ml",
  },
  {
    icon: <Cog className="w-7 h-7" />,
    title: "Automatización de Procesos",
    desc: "Transforma procesos manuales en flujos inteligentes que reducen costos y eliminan errores.",
    href: "/servicios#automatizacion",
  },
  {
    icon: <Cloud className="w-7 h-7" />,
    title: "Arquitectura Cloud",
    desc: "Ecosistemas de datos en AWS y Google Cloud. Seguros, escalables y listos para producción.",
    href: "/servicios#cloud",
  },
  {
    icon: <PieChart className="w-7 h-7" />,
    title: "Business Intelligence & Dashboards",
    desc: "Visión clara de tu negocio con dashboards automatizados y KPIs que importan.",
    href: "/servicios#bi",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Customer Intelligence",
    desc: "Conoce a tus clientes en profundidad. Anticipa necesidades, personaliza experiencias, aumenta la retención.",
    href: "/servicios#customer",
  },
];

export default function Home() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 text-sm text-slate-500 font-medium mb-8">
              Consultoría en Datos & IA · Santiago, Chile 🇨🇱
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-[3.5rem] font-black tracking-tight text-navy mb-6 leading-[1.1]">
              Transformando Data en{" "}
              <span className="text-cian">Estrategia y Crecimiento</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Combinamos inteligencia artificial con visión estratégica para convertir tus datos en decisiones que generan impacto real en tu negocio.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-8 text-base">
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
        </div>
      </section>

      {/* ══════════ IMPULSORES DE VALOR (3 cols) ══════════ */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-14">
            <Reveal>
              <h2 className="text-3xl md:text-[2.5rem] font-black text-navy leading-tight">
                Impulsa tu negocio con Datos e IA
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">
                Aprovecha al máximo el potencial de los datos para transformar tus estrategias y alcanzar nuevos resultados.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Eficiencia y rentabilidad", desc: "Mejora la eficiencia operativa, disminuye costos y aumenta la rentabilidad mediante la optimización de procesos." },
              { title: "Crecimiento de ventas", desc: "Identifica oportunidades de crecimiento al tener una mejor comprensión del mercado y de tus clientes." },
              { title: "Innovación digital", desc: "Incorpora Machine Learning & IA Generativa con casos de uso que tengan impacto real en tu negocio." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={0.1 * (i + 1)}>
                <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-md transition-all h-full text-center">
                  <div className="w-14 h-14 bg-cian/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-7 h-7 text-cian" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICIOS GRID (estilo MAS) ══════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-xs text-slate-500 font-semibold uppercase tracking-wider mb-6">
                Conoce nuestros servicios
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-[2.5rem] font-black text-navy leading-tight">
                Soluciones end-to-end en Datos e IA
              </h2>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((s, i) => (
              <Reveal key={s.title} delay={0.08 * (i + 1)}>
                <Link href={s.href}>
                  <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-cian/40 hover:shadow-lg transition-all h-full group cursor-pointer">
                    <div className="w-12 h-12 bg-cian/10 rounded-xl flex items-center justify-center mb-5 text-cian group-hover:bg-cian group-hover:text-white transition-colors">
                      {s.icon}
                    </div>
                    <h3 className="text-base font-bold text-navy mb-2 group-hover:text-cian transition-colors">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-cian mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver más <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PROCESO 3 PASOS ══════════ */}
      <section className="py-20 md:py-28 bg-navy text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-[2.5rem] font-black leading-tight">
                Cuéntanos sobre tu proyecto
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto mt-4">
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
                  <div className="w-14 h-14 rounded-full border-2 border-cian text-cian flex items-center justify-center text-xl font-bold mx-auto mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
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
                Capacita a tu equipo en IA & Datos
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
            <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-8">Partners estratégicos</p>
          </Reveal>
          <div className="flex justify-center items-center gap-16 md:gap-24">
            <Reveal delay={0.1}>
              <div className="opacity-50 hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 60 24" className="h-8 w-auto">
                  <text x="0" y="20" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="800" fill="#252F3E">aws</text>
                  <path d="M0 22h60" stroke="#FF9900" strokeWidth="2.5"/>
                </svg>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="opacity-50 hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 130 24" className="h-7 w-auto">
                  <text x="0" y="18" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#5F6368">Google</text>
                  <text x="60" y="18" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#4285F4"> Cloud</text>
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALES ══════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="text-center mb-14">
            <Reveal>
              <h2 className="text-3xl md:text-[2.5rem] font-black text-navy leading-tight">
                Lo que dicen nuestros clientes
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { quote: "Nos ayudaron a transformar nuestros datos en información accionable. Ahora tomamos decisiones comerciales con KPIs reales, no con intuición.", name: "María C.", role: "Gerente Comercial · Sector industrial" },
              { quote: "La diferencia fue tener a alguien que habla el idioma del negocio Y el idioma de la tecnología. No tuvimos que traducir nada.", name: "Roberto A.", role: "Director de Operaciones · Empresa de servicios" },
            ].map((t, i) => (
              <Reveal key={t.name} delay={0.1 * (i + 1)}>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 h-full">
                  <p className="text-slate-600 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cian/10 flex items-center justify-center text-cian font-bold text-sm">
                      {t.name.split(" ").map(w => w[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy">{t.name}</p>
                      <p className="text-xs text-slate-400">{t.role}</p>
                    </div>
                  </div>
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
            <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-4">Tecnologías que dominamos</p>
          </Reveal>
          <TechLogos />
        </div>
      </section>

      {/* ══════════ CTA FINAL (con contacto integrado) ══════════ */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-[2.5rem] font-black text-navy mb-4 leading-tight">
              Transforma tus datos en estrategia y crecimiento
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
              Solicita tu diagnóstico gratuito y descubre cómo la IA puede impulsar tu negocio. Un consultor se pondrá en contacto para agendar una reunión.
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
