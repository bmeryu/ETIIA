import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata = {
    title: "Contacto",
    description: "Agenda una sesión de exploración con los fundadores de ETIA para descubrir cómo la IA puede transformar tus KPIs.",
};

export default function ContactoPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column - Copy */}
                    <div className="space-y-8 sticky top-32">
                        <SectionHeading
                            title="La puerta de entrada a la excelencia."
                            subtitle="Agenda una sesión de exploración confidencial de 30 minutos directamente con nuestros fundadores, sin intermediarios comerciales."
                        />

                        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                            <h3 className="text-xl font-bold text-navy mb-4 border-b border-slate-100 pb-4">
                                Qué esperar de esta sesión:
                            </h3>

                            <ul className="space-y-4 text-slate-600">
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-navy font-bold text-sm">1</div>
                                    <p><strong>Evaluación de Viabilidad.</strong> Analizaremos en conjunto si el dolor principal de tu negocio puede resolverse eficientemente con Data/IA.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-navy font-bold text-sm">2</div>
                                    <p><strong>Alineamiento Estratégico.</strong> Discutiremos los KPIs críticos que este proyecto debería mover transversalmente.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-navy font-bold text-sm">3</div>
                                    <p><strong>Sanidad Técnica.</strong> Revisaremos a alto nivel el estado actual de tu infraestructura e integración técnica de la que partes hoy.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="flex gap-4 text-slate-500 font-medium text-sm">
                            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cian" /> Consultoría B2B Directa</span>
                            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cian" /> Privacidad Absoluta</span>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:mt-4">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </div>
    );
}
