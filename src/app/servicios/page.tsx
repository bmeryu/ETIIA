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
      <section className="pt-36 pb-20 bg-slate-50 border-b border-slate-100 relative overflow-hidden" aria-label="Nuestros Servicios">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase mb-6">
              Servicios Corporativos
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] leading-tight mb-6 max-w-3xl mx-auto">
              Soluciones de Inteligencia Artificial<br />
              <span className="text-gradient-blue">sin el pitch de siempre.</span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              Desde el diagnóstico de viabilidad hasta la construcción de arquitecturas RAG a medida y el entrenamiento de tu equipo. Automatizamos procesos operativos reales, descartando la tecnología que no necesitas.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ PILARES DE SERVICIO ══════════ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-32">
          
          {/* 1. Evaluación Gratuita */}
          <div id="evaluacion" className="scroll-mt-32 grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6">
                <CalendarCheck className="w-8 h-8 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-[#0F172A] mb-4">Evaluación de Viabilidad Inicial</h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                El error más caro es desarrollar antes de entender el problema. Nuestro diagnóstico inicial dura 20 minutos y sirve para evaluar si tu desafío operativo es realmente un caso de uso para Inteligencia Artificial.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Mapeo del cuello de botella
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Evaluación de madurez de datos
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Estimación de ROI potencial
                </li>
              </ul>
              <Link href="/?interes=diagnostico#diagnostico" className="inline-flex items-center gap-2 text-indigo-700 font-bold hover:text-indigo-800 transition-colors">
                Agendar Evaluación <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <ScaleIn delay={0.2} className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Metodología</h3>
              <p className="text-[#0F172A] font-semibold text-lg italic leading-relaxed">
                "Si la IA no es la solución correcta para tu empresa, te lo diremos en los primeros 10 minutos. Sin preventas agresivas."
              </p>
            </ScaleIn>
          </div>

          <hr className="border-slate-100" />

          {/* 2. Soluciones IA */}
          <div id="soluciones" className="scroll-mt-32 grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <Reveal className="md:order-2">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                <BrainCircuit className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-[#0F172A] mb-4">Catálogo de Soluciones de IA</h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Implementamos agentes autónomos y motores de IA ya probados en entornos de producción. Soluciones diseñadas para resolver problemas universales del B2B de forma inmediata.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Facturación y conciliación automatizada
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Atención a clientes 24/7 (RAG)
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Análisis de documentos legales
                </li>
              </ul>
              <Link href="/demos" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-800 transition-colors">
                Explorar Casos de Uso <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <ScaleIn delay={0.2} className="md:order-1 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 border border-indigo-800 text-white shadow-xl shadow-blue-900/10">
              <h3 className="text-sm font-bold text-blue-300 uppercase tracking-widest mb-4">Sandboxes</h3>
              <p className="text-white font-semibold text-lg italic leading-relaxed">
                No tienes que imaginarlo. Hemos construido entornos interactivos para que pruebes nuestra tecnología en vivo antes de comprarla.
              </p>
            </ScaleIn>
          </div>

          <hr className="border-slate-100" />

          {/* 3. Diseño a Medida */}
          <div id="a-medida" className="scroll-mt-32 grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-cyan-600" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-[#0F172A] mb-4">Diseñamos Tu Solución (Desarrollo a Medida)</h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Cuando el software empaquetado no se adapta a las reglas de tu negocio, construimos infraestructuras desde cero. Especialistas en arquitecturas RAG que se conectan directamente a tu ERP de forma segura.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Integración vía API (SAP, Salesforce, Buk)
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Motores LLM corporativos y privados
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Automatización de flujos end-to-end
                </li>
              </ul>
              <Link href="/?interes=a-medida#diagnostico" className="inline-flex items-center gap-2 text-cyan-700 font-bold hover:text-cyan-800 transition-colors">
                Cotizar Proyecto a Medida <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <ScaleIn delay={0.2} className="bg-slate-900 rounded-3xl p-8 border border-slate-800 text-white">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Ingeniería Segura</h3>
              <p className="text-white font-semibold text-lg italic leading-relaxed">
                Tus datos nunca se usan para entrenar modelos públicos. Construimos silos seguros garantizando la confidencialidad absoluta de tu operación.
              </p>
            </ScaleIn>
          </div>

          <hr className="border-slate-100" />

          {/* 4. Formación y UpSkilling */}
          <div id="formacion" className="scroll-mt-32 grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <Reveal className="md:order-2">
              <div className="w-16 h-16 rounded-2xl bg-fuchsia-50 border border-fuchsia-100 flex items-center justify-center mb-6">
                <Presentation className="w-8 h-8 text-fuchsia-600" />
              </div>
              <h2 className="text-3xl font-black tracking-tight text-[#0F172A] mb-4">UpSkilling y Formación de Equipos</h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Invertir en Inteligencia Artificial sin capacitar a tu equipo es quemar presupuesto. A través de la adopción cultural, convertimos a tus colaboradores en operadores avanzados de IA.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Prompt Engineering para Ejecutivos
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Gestión del cambio tecnológico
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Avalado por AulaGenIA (OTEC)
                </li>
              </ul>
              <Link href="/?interes=formacion#diagnostico" className="inline-flex items-center gap-2 text-fuchsia-700 font-bold hover:text-fuchsia-800 transition-colors">
                Solicitar Formación In-Company <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <ScaleIn delay={0.2} className="bg-fuchsia-900 rounded-3xl p-8 border border-fuchsia-800 text-white shadow-xl shadow-fuchsia-900/10 md:order-1">
              <h3 className="text-sm font-bold text-fuchsia-300 uppercase tracking-widest mb-4">Adopción Real</h3>
              <p className="text-white font-semibold text-lg italic leading-relaxed">
                "La tecnología por sí sola no mejora la productividad. Es el cambio de mentalidad operativa del equipo lo que multiplica los resultados."
              </p>
            </ScaleIn>
          </div>

        </div>
      </section>
    </div>
  );
}
