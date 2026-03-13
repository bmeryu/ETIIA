import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, FadeIn } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { BarChart3, Brain, Cog, Cloud, PieChart, Users, Search, Hammer, TrendingUp, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Servicios | ETIIA",
    description: "Soluciones end-to-end en Inteligencia Artificial. Estrategia, ML, Automatización, Cloud, BI y Customer Intelligence.",
};

const servicios = [
    {
        id: "estrategia",
        icon: <BarChart3 className="w-7 h-7" />,
        title: "Estrategia de Datos & IA",
        desc: "Define una estrategia que permita aprovechar todo el potencial de tu información para cumplir tus objetivos comerciales.",
        details: [
            "Diagnóstico de madurez analítica de la organización",
            "Identificación de casos de uso con mayor impacto en ROI",
            "Hoja de ruta priorizada con plazos y costos estimados",
            "Alineamiento entre áreas comerciales y técnicas",
        ],
    },
    {
        id: "ml",
        icon: <Brain className="w-7 h-7" />,
        title: "Machine Learning & IA Generativa",
        desc: "Modelos predictivos y generativos aplicados a casos de negocio reales. No IA teórica — IA que genera dinero.",
        details: [
            "Modelos de predicción de ventas, churn y demanda",
            "Motores de recomendación personalizados",
            "IA Generativa aplicada a contenido, atención y automatización",
            "MLOps para monitoreo y reentrenamiento continuo",
        ],
    },
    {
        id: "automatizacion",
        icon: <Cog className="w-7 h-7" />,
        title: "Automatización de Procesos",
        desc: "Transforma procesos manuales en flujos inteligentes que reducen costos y eliminan errores.",
        details: [
            "Automatización de workflows con IA",
            "Integración con ERPs, CRMs y herramientas existentes",
            "Procesamiento inteligente de documentos",
            "Reducción medible de costos operativos",
        ],
    },
    {
        id: "cloud",
        icon: <Cloud className="w-7 h-7" />,
        title: "Arquitectura Cloud",
        desc: "Ecosistemas de datos en AWS y Google Cloud. Seguros, escalables y listos para producción.",
        details: [
            "Diseño de arquitectura cloud (AWS / Google Cloud)",
            "Data lakes y data warehouses escalables",
            "Pipelines de datos en tiempo real",
            "Seguridad, compliance y gobernanza de datos",
        ],
    },
    {
        id: "bi",
        icon: <PieChart className="w-7 h-7" />,
        title: "Business Intelligence & Dashboards",
        desc: "Visión clara de tu negocio con dashboards automatizados y KPIs que importan.",
        details: [
            "Dashboards ejecutivos con KPIs accionables",
            "Reportería automatizada y alertas inteligentes",
            "Integración de múltiples fuentes de datos",
            "Capacitación para autonomía analítica del equipo",
        ],
    },
    {
        id: "customer",
        icon: <Users className="w-7 h-7" />,
        title: "Customer Intelligence",
        desc: "Conoce a tus clientes en profundidad. Anticipa necesidades, personaliza experiencias, aumenta la retención.",
        details: [
            "Segmentación avanzada basada en comportamiento",
            "Customer lifetime value y predicción de churn",
            "Personalización de ofertas y comunicaciones",
            "Scoring de leads y propensión de compra",
        ],
    },
];

const proceso = [
    {
        step: "1",
        icon: <Search className="w-7 h-7" />,
        title: "Diagnóstico & Hoja de Ruta",
        desc: "Auditoría de 360° para evaluar la madurez de datos de tu empresa. Entregamos un plan de acción claro con ROI estimado y casos de uso priorizados.",
    },
    {
        step: "2",
        icon: <Hammer className="w-7 h-7" />,
        title: "Fábrica de Soluciones IA",
        desc: "Desarrollo e implementación a medida. Desde el modelo hasta su despliegue en producción, con métricas de negocio integradas desde el día uno.",
    },
    {
        step: "3",
        icon: <TrendingUp className="w-7 h-7" />,
        title: "Adopción & Escalamiento",
        desc: "Asegurar que la solución se use y genere valor continuo. Capacitación, dashboards accionables y transferencia para que operes autónomo.",
    },
];

export default function ServiciosPage() {
    return (
        <div className="pt-32 pb-0 min-h-screen">
            {/* ══════════ HEADER ══════════ */}
            <section className="container mx-auto px-6 md:px-12 mb-16 text-center max-w-4xl">
                <SectionHeading
                    title="Soluciones end-to-end en Inteligencia Artificial"
                    subtitle="Desde la estrategia hasta la implementación en producción. Cada servicio integra visión comercial con ingeniería robusta."
                    centered
                />
            </section>

            {/* ══════════ 6 SERVICIOS CON DETALLE ══════════ */}
            <section className="container mx-auto px-6 md:px-12 mb-24 max-w-6xl">
                <div className="space-y-8">
                    {servicios.map((s, i) => (
                        <Reveal key={s.id} delay={0.08 * (i + 1)}>
                            <div id={s.id} className="scroll-mt-28 bg-white rounded-2xl p-8 md:p-10 border border-slate-200 hover:shadow-md transition-all">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                                    {/* Left: Icon + Title + Desc */}
                                    <div className="md:w-1/2">
                                        <div className="w-14 h-14 bg-cian/10 rounded-xl flex items-center justify-center mb-5 text-cian">
                                            {s.icon}
                                        </div>
                                        <h2 className="text-xl md:text-2xl font-bold text-navy mb-3">{s.title}</h2>
                                        <p className="text-slate-500 leading-relaxed">{s.desc}</p>
                                    </div>

                                    {/* Right: Details */}
                                    <div className="md:w-1/2">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Qué incluye</p>
                                        <ul className="space-y-2.5">
                                            {s.details.map((d) => (
                                                <li key={d} className="flex items-start gap-3 text-sm text-slate-600">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cian mt-1.5 shrink-0" />
                                                    {d}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ══════════ CÓMO FUNCIONA (3 pasos) ══════════ */}
            <section className="py-20 bg-navy text-white">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <div className="text-center mb-16">
                        <Reveal>
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 text-xs text-slate-300 font-semibold uppercase tracking-wider mb-6">
                                Nuestro Proceso
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-3xl md:text-[2.5rem] font-black leading-tight">
                                Cómo lo hacemos
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-lg text-slate-300 max-w-2xl mx-auto mt-4">
                                Cada fase de nuestro proceso integra los 5 pilares de ETIIA.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div className="flex justify-center items-center gap-3 md:gap-5 mt-8 text-sm">
                                <span className="text-white font-bold">E<span className="text-slate-400 font-normal">strategia</span></span>
                                <span className="text-slate-500">·</span>
                                <span className="text-white font-bold">T<span className="text-slate-400 font-normal">ecnología</span></span>
                                <span className="text-slate-500">·</span>
                                <span className="text-white font-bold">I<span className="text-slate-400 font-normal">mpacto</span></span>
                                <span className="text-slate-500">·</span>
                                <span className="text-cian-light font-bold">I<span className="text-slate-400 font-normal">nteligencia</span></span>
                                <span className="text-cian-light font-bold">A<span className="text-slate-400 font-normal">rtificial</span></span>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {proceso.map((p, i) => (
                            <Reveal key={p.step} delay={0.15 * (i + 1)}>
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full">
                                    <div className="w-12 h-12 rounded-full border-2 border-cian-light text-cian-light flex items-center justify-center text-xl font-bold mb-5">
                                        {p.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════ CTA FINAL ══════════ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-black text-navy mb-6 leading-tight">
                            ¿Listo para el primer paso?
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
                            Solicita tu diagnóstico gratuito y descubre exactamente dónde generar el mayor retorno con IA.
                        </p>
                    </Reveal>
                    <FadeIn delay={0.2}>
                        <Link href="/contacto">
                            <Button className="h-14 px-8 text-lg">
                                Solicitar Diagnóstico Gratuito <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
