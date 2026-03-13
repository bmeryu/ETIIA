import { FounderCard } from "@/components/ui/FounderCard";
import { Reveal, FadeIn } from "@/components/ui/Reveal";
import { CheckCircle2, Target, Lightbulb, Shield } from "lucide-react";

export const metadata = {
    title: "Equipo | ETIIA",
    description: "Conoce al equipo de ETIIA. Unimos estrategia comercial con ingeniería robusta para resolver desafíos con IA.",
};

export default function EquipoPage() {
    return (
        <div className="pt-32 pb-0">
            {/* Hero */}
            <section className="container mx-auto px-6 md:px-12 mb-20 text-center max-w-4xl">
                <FadeIn delay={0.1}>
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-xs text-slate-500 font-semibold uppercase tracking-wider mb-6">
                        Quiénes somos
                    </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <h1 className="text-4xl md:text-[2.8rem] font-black text-navy mb-6 leading-tight">
                        Un equipo que habla el idioma del negocio y de la tecnología
                    </h1>
                </FadeIn>
                <FadeIn delay={0.35}>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        ETIIA nace de una convicción: la IA solo genera valor cuando la estrategia comercial y la ingeniería trabajan como una sola unidad. Sin traducciones. Sin brechas.
                    </p>
                </FadeIn>
            </section>

            {/* Misión & Valores */}
            <section className="py-16 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Reveal delay={0.1}>
                            <div className="text-center p-6">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 border border-slate-200">
                                    <Target className="w-6 h-6 text-cian" />
                                </div>
                                <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-2">Nuestra Misión</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Transformar datos en resultados comerciales reales para empresas que necesitan IA accionable, no teórica.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <div className="text-center p-6">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 border border-slate-200">
                                    <Lightbulb className="w-6 h-6 text-cian" />
                                </div>
                                <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-2">Nuestro Enfoque</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Cada proyecto parte desde el cliente: qué necesita, cómo retenerlo, cómo crecer. La tecnología es el medio, no el fin.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div className="text-center p-6">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 border border-slate-200">
                                    <Shield className="w-6 h-6 text-cian" />
                                </div>
                                <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-2">Nuestro Compromiso</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Sin vendor lock-in. Transferimos la solución completa. Tú operas autónomo desde el día uno.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Liderazgo */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <div className="text-center mb-14">
                        <Reveal>
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-xs text-slate-500 font-semibold uppercase tracking-wider mb-6">
                                Liderazgo
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-3xl md:text-[2.2rem] font-black text-navy leading-tight">
                                Dos perfiles complementarios. Una sola dirección.
                            </h2>
                        </Reveal>
                    </div>

                    <div className="space-y-10">
                        <FounderCard
                            name="Bernardita Mery Undurraga"
                            role="CEO · Strategy & Growth"
                            bio="+15 años traduciendo datos en ROI, estrategia de marketing y cambio organizacional. Su foco siempre parte desde el cliente: entender qué necesita, cómo retenerlo y cómo crecer las ventas. Ella asegura que la IA genere dinero."
                            imageSrc="/berni.jpg"
                            imageAlt="Bernardita Mery Undurraga - CEO de ETIIA"
                            linkedinUrl="https://www.linkedin.com/in/bmeryu/"
                            delay={0.1}
                        />

                        <FounderCard
                            name="Pablo E. Olivares"
                            role="CTO · Engineering & Delivery"
                            bio="Candidato a Doctor (PhD(c)) en Informática. Experto en Arquitectura Cloud segura (AWS/GCP), Microservicios y Deep Learning. Su obsesión es diseñar infraestructuras impecables para que la IA opere a escala corporativa. Él asegura que la IA realmente funcione en producción."
                            imageSrc="/pablo.jpg"
                            imageAlt="Pablo E. Olivares - CTO de ETIIA"
                            linkedinUrl="https://www.linkedin.com/in/pablo-e-olivares-z%C3%BA%C3%B1iga-01337933/"
                            delay={0.2}
                        />
                    </div>
                </div>
            </section>

            {/* Historia / Evolución */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <Reveal>
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs text-slate-500 font-semibold uppercase tracking-wider mb-6">
                            Nuestra evolución
                        </div>
                    </Reveal>

                    <div className="space-y-6 text-base text-slate-600 leading-relaxed">
                        <Reveal delay={0.1}>
                            <p>
                                ETIIA nació de una frustración compartida: la profunda desconexión entre los "laboratorios de innovación" tecnológicos y el directorio comercial. Tras presenciar múltiples inversiones millonarias en Data & AI que terminaban en modelos que nadie usaba, Bernardita y Pablo decidieron estructurar una solución definitiva.
                            </p>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p>
                                Lo que comenzó como una consultoría de nicho para alinear arquitecturas cloud con estrategias de ventas, rápidamente escaló. En menos de dos años, ETIIA pasó de optimizar flujos de datos en empresas medianas, a construir y desplegar motores de IA transaccionales para líderes del mercado financiero e industrial.
                            </p>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p>
                                Hoy, ETIIA es una firma de consultoría e implementación de IA que asegura que antes de escribir una línea de código, el modelo de negocio esté matemáticamente justificado. La base es full aplicación de IA.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
                    <Reveal>
                        <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider mb-8">Partners estratégicos</p>
                    </Reveal>
                    <div className="flex justify-center items-center gap-12 md:gap-20 opacity-50">
                        <Reveal delay={0.1}>
                            <svg viewBox="0 0 100 30" className="h-8 w-auto">
                                <text x="0" y="22" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" fill="#FF9900">aws</text>
                            </svg>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <svg viewBox="0 0 140 30" className="h-8 w-auto">
                                <text x="0" y="22" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" fill="#4285F4">Google Cloud</text>
                            </svg>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Filosofía / CTA */}
            <section className="bg-navy py-20 text-center">
                <div className="container mx-auto px-6 md:px-12 max-w-3xl">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            "La IA sin impacto comercial es solo gasto en servidores."
                        </h2>
                        <p className="text-lg text-slate-400 max-w-xl mx-auto">
                            Nuestra metodología asegura que cada línea de código sirva a un objetivo de negocio medible, auditable y escalable.
                        </p>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
