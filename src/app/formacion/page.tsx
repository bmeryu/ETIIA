import Link from "next/link";
import { GraduationCap, ArrowRight, Users, Brain, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, FadeIn } from "@/components/ui/Reveal";

export const metadata = {
  title: "Formación | ETIA",
  description: "Capacitaciones in-company en IA Generativa, Datos y Dashboards. Programas adaptados a tu organización.",
};

const programas = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "IA Generativa para Negocios",
    desc: "Aprende a usar ChatGPT, Claude y Gemini para automatizar tareas, generar contenido y tomar mejores decisiones comerciales. Sin código.",
    duracion: "8 horas",
    formato: "Presencial o remoto",
    nivel: "Todos los niveles",
    tag: "Más popular",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Automatización Inteligente con IA",
    desc: "Identifica procesos manuales y repetitivos en tu operación y aprende a automatizarlos con herramientas de IA. Reduce errores, ahorra tiempo y escala sin sumar personal.",
    duracion: "12 horas",
    formato: "Presencial o remoto",
    nivel: "Intermedio",
    tag: "Práctico",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Estrategia de IA para Líderes",
    desc: "Programa ejecutivo para C-Level y gerentes. Entiende qué puede hacer la IA por tu negocio, cómo priorizarla y cuánto invertir.",
    duracion: "4 horas",
    formato: "Presencial",
    nivel: "Ejecutivo",
    tag: "C-Level",
  },
];

export default function FormacionPage() {
  return (
    <div className="pt-32 pb-0">
      {/* Hero */}
      <section className="container mx-auto px-6 md:px-12 mb-16 text-center max-w-4xl">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-xs text-slate-500 font-semibold uppercase tracking-wider mb-6">
            Servicio de Formación
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-[2.8rem] font-black text-navy mb-6 leading-tight">
            Capacita a tu equipo en IA & Datos
          </h1>
        </FadeIn>
        <FadeIn delay={0.35}>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Capacitaciones in-company personalizadas, adaptadas a las necesidades específicas de tu organización. Potencia las competencias digitales de tu equipo.
          </p>
        </FadeIn>
      </section>

      {/* Programas */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="space-y-6">
            {programas.map((p, i) => (
              <Reveal key={p.title} delay={0.1 * (i + 1)}>
                <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-cian/40 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-14 h-14 bg-cian/10 rounded-xl flex items-center justify-center text-cian shrink-0">
                      {p.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-navy">{p.title}</h3>
                        <span className="text-xs font-bold text-cian bg-cian/10 px-3 py-1 rounded-full">{p.tag}</span>
                      </div>
                      <p className="text-slate-500 leading-relaxed mb-4">{p.desc}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-medium">
                        <span>⏱ {p.duracion}</span>
                        <span>📍 {p.formato}</span>
                        <span>📊 {p.nivel}</span>
                      </div>
                    </div>
                    <Link href="/contacto" className="shrink-0 self-center">
                      <Button variant="outline" className="text-sm">
                        Solicitar Diagnóstico <ArrowRight className="ml-1 w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <FadeIn>
            <GraduationCap className="w-12 h-12 text-cian mx-auto mb-6" />
            <h2 className="text-3xl font-black text-navy mb-4">¿Necesitas un programa a medida?</h2>
            <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto">
              Diseñamos capacitaciones 100% personalizadas para tu equipo. Cuéntanos tu necesidad y armamos la propuesta.
            </p>
            <Link href="/contacto">
              <Button className="h-12 px-8 text-base">
                Solicitar Diagnóstico Gratuito
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
