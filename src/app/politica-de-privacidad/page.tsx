import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | ETIIA",
  description: "Política de Privacidad de ETIIA Consultoría IA.",
};

export default function PoliticaPrivacidad() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-black text-navy mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-slate max-w-none prose-headings:text-navy prose-a:text-blue-600">
          <p className="lead text-lg text-slate-600 mb-6">
            Última actualización: Mayo 2026
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Información que Recopilamos</h2>
          <p>
            En ETIIA, respetamos tu privacidad y estamos comprometidos a proteger tus datos personales. 
            Recopilamos información cuando interactúas con nuestro sitio web, solicitas un diagnóstico 
            o utilizas nuestras demos interactivas. Esta información puede incluir tu nombre, correo 
            electrónico corporativo, cargo y detalles de la empresa.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Uso de la Información</h2>
          <p>
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Proporcionar y mejorar nuestros servicios de consultoría IA.</li>
            <li>Responder a tus consultas y solicitudes de diagnóstico.</li>
            <li>Enviar comunicaciones relevantes sobre soluciones tecnológicas (solo si has dado tu consentimiento).</li>
            <li>Analizar el uso de nuestro sitio web para mejorar la experiencia del usuario.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Inteligencia Artificial y Datos</h2>
          <p>
            Nuestras demos y sistemas interactivos están diseñados con privacidad por defecto. 
            No utilizamos los datos ingresados en las demos públicas para entrenar modelos fundacionales. 
            En proyectos corporativos, establecemos acuerdos de confidencialidad (NDA) estrictos y 
            aseguramos que tus datos empresariales permanezcan privados y aislados.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Seguridad de los Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger tu información 
            personal contra acceso no autorizado, pérdida o alteración. Trabajamos con proveedores 
            de infraestructura Cloud (AWS, Google Cloud) que cumplen con los más altos estándares de seguridad.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en: 
            <a href="mailto:hola@etiia.com" className="font-semibold ml-1">hola@etiia.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
