import { Reveal, FadeIn } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Brain, Cog, BarChart3, Sparkles } from "lucide-react";

export const metadata = {
    title: "Servicios | ETIIA",
    description: "Soluciones end-to-end en Inteligencia Artificial. Desde el diagnóstico hasta la implementación en producción.",
};

export default function ServiciosPage() {
    return (
        <div className="pt-32 pb-0 min-h-screen">
            {/* ══════════ HERO ══════════ */}
            <section className="container mx-auto px-6 md:px-12 mb-20 text-center max-w-4xl">
                <FadeIn delay={0.1}>
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/60 text-sm text-blue-700 font-semibold mb-8 tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block mr-2 animate-pulse" />
                        Servicios ETIIA
                    </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0F172A] mb-6 leading-[1.08]">
                        No vendemos IA.{" "}
                        <span className="text-gradient-blue">Resolvemos problemas.</span>
                    </h1>
                </FadeIn>
                <FadeIn delay={0.35}>
                    <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Si tu empresa tiene datos, procesos manuales o decisiones que dependen de intuición en vez de evidencia — podemos ayudarte.
                    </p>
                </FadeIn>
            </section>

            {/* ══════════ LAS 3 COSAS QUE HACEMOS ══════════ */}
            <section className="container mx-auto px-6 md:px-12 mb-24 max-w-6xl">
                <div className="grid md:grid-cols-3 gap-6">
                    <Reveal delay={0.1}>
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all h-full group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <Brain className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl font-black text-[#0F172A] mb-3">Inteligencia Artificial</h2>
                            <p className="text-slate-500 leading-relaxed mb-6">
                                Modelos predictivos, motores de recomendación, agentes conversacionales y visión por computador. IA que se conecta directo a tus KPIs.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                                    Predicción de demanda y churn
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                                    IA Generativa aplicada a negocio
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                                    Agentes autónomos (LLM Agents)
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Lo hemos hecho</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {[
                                        { n: "VentaAI", s: "ventaai" },
                                        { n: "AgendAI", s: "agendai" },
                                        { n: "AtendeAI", s: "atendeai" },
                                        { n: "CosechAI", s: "cosechai" },
                                    ].map((p) => (
                                        <Link key={p.s} href={`/demos/${p.s}`} className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-[11px] font-semibold text-blue-700 hover:bg-blue-100 transition-colors">
                                            {p.n}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all h-full group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <Cog className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl font-black text-[#0F172A] mb-3">Automatización</h2>
                            <p className="text-slate-500 leading-relaxed mb-6">
                                Procesos que hoy toman 3 personas y 5 días, los convertimos en flujos automáticos que corren solos. Conectados a tu ERP, CRM y herramientas actuales.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                                    OCR + procesamiento de documentos
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                                    Integración con ERPs y CRMs
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                                    Workflows inteligentes end-to-end
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Lo hemos hecho</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {[
                                        { n: "FacturAI", s: "facturai" },
                                        { n: "AutoRend IA", s: "autorend" },
                                        { n: "TranscribAI", s: "transcribai" },
                                    ].map((p) => (
                                        <Link key={p.s} href={`/demos/${p.s}`} className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-[11px] font-semibold text-blue-700 hover:bg-blue-100 transition-colors">
                                            {p.n}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.3}>
                        <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all h-full group relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <h2 className="text-2xl font-black text-[#0F172A] mb-3">Estrategia & Datos</h2>
                            <p className="text-slate-500 leading-relaxed mb-6">
                                No implementamos tecnología sin estrategia. Primero entendemos tu negocio, luego definimos qué construir y medimos el ROI real.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                                    Diagnóstico de madurez de datos
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                                    Arquitectura Cloud (AWS / GCP)
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                                    Dashboards y BI accionable
                                </div>
                            </div>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Lo hemos hecho</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {[
                                        { n: "LexSearch", s: "lexsearch" },
                                        { n: "TalentParse", s: "talentparse" },
                                    ].map((p) => (
                                        <Link key={p.s} href={`/demos/${p.s}`} className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-[11px] font-semibold text-blue-700 hover:bg-blue-100 transition-colors">
                                            {p.n}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ══════════ LA DIFERENCIA ══════════ */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                    <div className="text-center mb-14">
                        <Reveal>
                            <h2 className="text-3xl md:text-[2.5rem] font-black text-[#0F172A] leading-tight">
                                Lo que nos hace diferentes
                            </h2>
                        </Reveal>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                bad: "\"Te hacemos un modelo de IA\"",
                                good: "\"Reducimos tu conciliación de 5 días a 4 horas\"",
                                desc: "No hablamos de tecnología. Hablamos de resultados de negocio.",
                            },
                            {
                                bad: "\"Proyecto de 8 meses con alcance variable\"",
                                good: "\"Piloto en 4 semanas con ROI medible\"",
                                desc: "Velocidad de implementación. No vendemos horas — vendemos impacto.",
                            },
                            {
                                bad: "\"Te entregamos el código y listo\"",
                                good: "\"Capacitamos a tu equipo para que operes autónomo\"",
                                desc: "Transferencia real. No creamos dependencia — creamos capacidad interna.",
                            },
                            {
                                bad: "\"Funciona en el laboratorio\"",
                                good: "\"Funciona en producción con tus datos reales\"",
                                desc: "Cero PoCs que mueren en un PowerPoint. Todo lo que hacemos va a producción.",
                            },
                        ].map((item, i) => (
                            <Reveal key={i} delay={0.1 * (i + 1)}>
                                <div className="bg-white rounded-2xl p-7 border border-slate-200 h-full hover:shadow-md transition-all">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="text-red-400 text-sm line-through font-medium shrink-0 bg-red-50 px-3 py-1 rounded-lg">{item.bad}</div>
                                    </div>
                                    <p className="text-lg font-black text-[#0F172A] mb-2">{item.good}</p>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
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
                                Cómo trabajamos
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-3xl md:text-[2.5rem] font-black leading-tight text-white">
                                De la conversación al resultado en 3 pasos
                            </h2>
                        </Reveal>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                step: "1",
                                title: "Diagnóstico gratuito",
                                desc: "Una llamada de 30 minutos. Entendemos tu operación, identificamos los cuellos de botella y te decimos exactamente dónde IA genera el mayor ROI.",
                                time: "Semana 0",
                            },
                            {
                                step: "2",
                                title: "Piloto con datos reales",
                                desc: "Construimos un piloto funcional con TUS datos. No slides, no mockups — un sistema que puedes probar y validar con tu equipo.",
                                time: "Semana 2-4",
                            },
                            {
                                step: "3",
                                title: "Producción + transferencia",
                                desc: "Llevamos la solución a producción, la conectamos a tus sistemas y capacitamos a tu equipo. Tú operas autónomo.",
                                time: "Semana 4-8",
                            },
                        ].map((item, i) => (
                            <Reveal key={item.step} delay={0.15 * (i + 1)}>
                                <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full">
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
                    <div className="text-center">
                        <FadeIn delay={0.5}>
                            <Link href="/contacto">
                                <Button className="h-12 px-8 text-base">
                                    Empezar con el Diagnóstico <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ══════════ CTA FINAL ══════════ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4 leading-tight">
                            ¿Quieres ver cómo funciona en tu industria?
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
                            Explora nuestro portfolio con demos interactivas de cada solución.
                        </p>
                    </Reveal>
                    <FadeIn delay={0.2}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/demos">
                                <Button variant="outline" className="h-12 px-8 text-base">
                                    Ver Portfolio <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                            <Link href="/contacto">
                                <Button className="h-12 px-8 text-base">
                                    Solicitar Diagnóstico Gratuito
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
