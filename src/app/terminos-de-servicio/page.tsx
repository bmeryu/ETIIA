import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Términos de Servicio | ETIIA" },
  description: "Términos y Condiciones de Servicio de ETIIA Consultoría IA.",
};

export default function TerminosServicio() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-black text-navy mb-8">Términos de Servicio</h1>
        
        <div className="prose prose-slate max-w-none prose-headings:text-navy prose-a:text-blue-600">
          <p className="lead text-lg text-slate-600 mb-6">
            Última actualización: Mayo 2026
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar el sitio web de ETIIA y nuestras demos interactivas, aceptas estar 
            sujeto a estos Términos de Servicio y a nuestra Política de Privacidad. Si no estás de acuerdo 
            con alguna parte de estos términos, te solicitamos no utilizar nuestros servicios.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Uso de Demos y Prototipos</h2>
          <p>
            Las demos interactivas proporcionadas en este sitio web tienen fines puramente demostrativos. 
            Aunque nos esforzamos por mantener "Cero Alucinaciones" en nuestros sistemas en producción mediante 
            arquitecturas RAG, los resultados de las demos públicas son referenciales. ETIIA no se hace 
            responsable por decisiones comerciales tomadas basadas en interacciones con estas demos públicas.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Propiedad Intelectual</h2>
          <p>
            Todo el contenido, diseño, logotipos, arquitecturas descritas y código subyacente de este 
            sitio web son propiedad intelectual de ETIIA. Está prohibida su reproducción, distribución o 
            modificación sin nuestro consentimiento expreso por escrito.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Servicios de Consultoría</h2>
          <p>
            La contratación de nuestros servicios de consultoría, implementación de Agentes Autónomos 
            y desarrollo de modelos (RAG/LLMs) se rige por contratos específicos (SOW) y acuerdos de 
            confidencialidad (NDA) firmados independientemente con cada cliente B2B. Estos términos web 
            no sustituyen ni modifican dichos contratos corporativos.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios 
            entrarán en vigor inmediatamente después de su publicación en el sitio web.
          </p>
        </div>
      </div>
    </div>
  );
}
