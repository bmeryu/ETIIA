import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Code2, Presentation, CalendarCheck } from "lucide-react";
import { Reveal, FadeIn, ScaleIn } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Servicios de Consultoría e Implementación de IA | ETIIA",
  description: "Desde diagnóstico y automatización RAG a medida, hasta UpSkilling corporativo. Descubre cómo implementamos Inteligencia Artificial en procesos de negocio reales.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios B2B | ETIIA",
    description: "Evaluación, Desarrollo a Medida y UpSkilling Corporativo en Inteligencia Artificial.",
    url: "https://www.etiia.com/servicios",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Servicios IA — ETIIA" }],
  },
};

export default function ServiciosPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* ══════════ HERO ══════════ */}
      <section className="pt-36 pb-20 bg-white relative overflow-hidden" aria-label="Nuestros Servicios">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
              Servicios Corporativos
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A] leading-[1.1] mb-6 max-w-3xl">
              Arquitecturas RAG y <br />
              <span className="text-blue-600">Automatización Inteligente</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Implementamos modelos de Inteligencia Artificial que se integran a tu ERP y resuelven cuellos de botella operativos. Desde el diagnóstico inicial hasta el entrenamiento de tu equipo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ PILARES DE SERVICIO ══════════ */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-24">
          
          {/* 1. Evaluación Gratuita */}
          <div id="evaluacion" className="scroll-mt-32 grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                <CalendarCheck className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-[#0F172A] mb-4">Evaluación Gratuita (20 min)</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                El error más caro es desarrollar antes de entender el problema. Nuestro diagnóstico inicial sirve para mapear tu flujo de trabajo y confirmar si tu desafío operativo requiere Inteligencia Artificial.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Mapeo del cuello de botella
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Evaluación de madurez de datos
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Estimación de ROI potencial
                </li>
              </ul>
              <Link href="/?interes=diagnostico#diagnostico" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-800 transition-colors">
                Agendar Evaluación <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <ScaleIn delay={0.2} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Enfoque</h3>
              <p className="text-[#0F172A] font-medium text-lg leading-relaxed">
                Revisamos tus sistemas actuales y te decimos con franqueza si la automatización es viable o si necesitas ordenar tus datos primero.
              </p>
            </ScaleIn>
          </div>

          <hr className="border-slate-200" />

          {/* 2. Soluciones IA */}
          <div id="soluciones" className="scroll-mt-32 grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <Reveal className="md:order-2">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-6">
                <BrainCircuit className="w-7 h-7 text-slate-700" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-[#0F172A] mb-4">Soluciones de IA en Producción</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Implementamos agentes autónomos y motores de IA ya probados en entornos corporativos. Soluciones diseñadas para resolver problemas universales del B2B de forma inmediata.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Facturación y conciliación automatizada
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Agentes RAG de atención 24/7
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Extracción de datos no estructurados
                </li>
              </ul>
              <Link href="/demos" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-800 transition-colors">
                Ver Casos de Uso <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <ScaleIn delay={0.2} className="md:order-1 bg-[#0F172A] rounded-3xl p-8 border border-slate-800 text-white shadow-xl">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Casos de Uso</h3>
              <p className="text-white font-medium text-lg leading-relaxed">
                Hemos habilitado demostraciones interactivas para que pruebes la precisión de nuestros agentes de software antes de comprometer recursos.
              </p>
            </ScaleIn>
          </div>

          <hr className="border-slate-200" />

          {/* 3. Diseño a Medida */}
          <div id="a-medida" className="scroll-mt-32 grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                <Code2 className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-[#0F172A] mb-4">Diseñamos Tu Solución a Medida</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Cuando el software empaquetado no se adapta a las reglas de tu negocio, construimos infraestructuras RAG personalizadas que se conectan directamente a tu ERP de forma segura.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Integración vía API (SAP, Buk, Defontana)
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> LLMs conectados a bases de datos privadas
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Entornos seguros y on-premise
                </li>
              </ul>
              <Link href="/?interes=a-medida#diagnostico" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-800 transition-colors">
                Cotizar Implementación <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <ScaleIn delay={0.2} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Privacidad</h3>
              <p className="text-[#0F172A] font-medium text-lg leading-relaxed">
                Tus datos corporativos nunca se usan para entrenar modelos públicos. Construimos silos seguros garantizando la confidencialidad absoluta de tu operación.
              </p>
            </ScaleIn>
          </div>

          <hr className="border-slate-200" />

          {/* 4. Formación y UpSkilling */}
          <div id="formacion" className="scroll-mt-32 grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <Reveal className="md:order-2">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-6">
                <Presentation className="w-7 h-7 text-slate-700" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-[#0F172A] mb-4">UpSkilling y Formación</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Integrar Inteligencia Artificial sin capacitar a tu equipo es ineficiente. A través de la adopción cultural, convertimos a tus colaboradores en operadores avanzados.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Prompt Engineering para equipos
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Reducción de la resistencia al cambio
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Metodología certificada
                </li>
              </ul>
              <Link href="/?interes=formacion#diagnostico" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-800 transition-colors">
                Solicitar Formación <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <ScaleIn delay={0.2} className="md:order-1 bg-[#0F172A] rounded-3xl p-8 border border-slate-800 text-white shadow-xl">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Adopción Cultural</h3>
              <p className="text-white font-medium text-lg leading-relaxed">
                La tecnología por sí sola no mejora la productividad. Es el cambio de mentalidad operativa lo que multiplica el valor del software.
              </p>
            </ScaleIn>
          </div>

        </div>
      </section>
    </div>
  );
}
