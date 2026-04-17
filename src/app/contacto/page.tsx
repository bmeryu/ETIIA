import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata = {
    title: "Contacto",
    description: "Agenda una sesión de exploración con los fundadores de ETIIA para descubrir cómo la IA puede transformar tus KPIs.",
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

                        {/* WhatsApp CTA */}
                        <div className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-md hover:border-cian/30 transition-colors mt-8">
                            <p className="text-navy font-bold text-base mb-1">Canal Ejecutivo Directo</p>
                            <p className="text-slate-600 text-sm mb-5">¿Prefieres gestionar la sesión de manera más ágil o tienes dudas previas?</p>
                            <a href="https://wa.me/56998956864?text=Hola%20equipo%20ETIIA,%20necesito%20agendar%20una%20sesión%20de%20exploración%20B2B." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-sm transition-all hover:-translate-y-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg> 
                                WhatsApp de Ventas B2B
                            </a>
                        </div>

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
