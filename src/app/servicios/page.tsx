import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Search, Hammer, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
    title: "Servicios | ETIA",
    description: "Diagnóstico, implementación y adopción de IA. Un proceso claro de 3 pasos para transformar tu negocio con datos.",
};

const services = [
    {
        title: "1. Diagnóstico & Hoja de Ruta",
        description: "Auditoría de 360° para evaluar si tu empresa está lista para la IA. Entregamos un plan de acción claro con ROI estimado.",
        icon: <Search className="w-7 h-7" />,
        strategyPoint: "Análisis de procesos comerciales, cuellos de botella, KPIs actuales y oportunidades de crecimiento.",
        engineeringPoint: "Evaluación de infraestructura de datos, seguridad y factibilidad técnica en la nube.",
    },
    {
        title: "2. Fábrica de Soluciones IA",
        description: "Desarrollo e implementación a medida. Desde el modelo hasta su despliegue y consumo en producción.",
        icon: <Hammer className="w-7 h-7" />,
        strategyPoint: "Definición de reglas de negocio, métricas de éxito y casos de uso que guiarán el modelo.",
        engineeringPoint: "Desarrollo de modelos ML/Deep Learning, APIs y microservicios seguros e integrados.",
    },
    {
        title: "3. Adopción & BI Predictivo",
        description: "Asegurar que la solución se use y genere valor continuo mediante dashboards, capacitación y monitoreo.",
        icon: <TrendingUp className="w-7 h-7" />,
        strategyPoint: "Gestión del cambio organizacional, capacitación de equipos y dashboards accionables.",
        engineeringPoint: "Mantenimiento de la arquitectura cloud y reentrenamiento de modelos para evitar degradación.",
    },
];

export default function ServiciosPage() {
    return (
        <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
            {/* Header */}
            <section className="container mx-auto px-6 md:px-12 mb-16 text-center max-w-4xl">
                <SectionHeading
                    title="Cómo Funciona"
                    subtitle="Transformamos la complejidad de la IA en un proceso claro de 3 pasos. Cada fase integra estrategia comercial con ingeniería robusta."
                    centered
                />
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-6 md:px-12 mb-24 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            strategyPoint={service.strategyPoint}
                            engineeringPoint={service.engineeringPoint}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </section>

            {/* CTA Bottom */}
            <section className="container mx-auto px-6 md:px-12 text-center">
                <Reveal>
                    <div className="bg-navy rounded-3xl p-12 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cian/10 to-transparent pointer-events-none" />
                        <h2 className="text-3xl font-bold text-white mb-6 relative z-10">¿Listo para el primer paso?</h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
                            Solicita tu diagnóstico gratuito y descubre exactamente dónde generar el mayor retorno con IA.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <Link href="/contacto">
                                <Button className="h-14 px-8 text-lg rounded-full">Solicitar Diagnóstico Gratuito</Button>
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    );
}
