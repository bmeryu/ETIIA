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
              Inteligencia Artificial para <br />
              <span className="text-blue-600">Escalar tu Negocio</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Implementamos tecnología que resuelve tus mayores cuellos de botella. Desde descubrir dónde pierdes tiempo, hasta automatizar tareas repetitivas y entrenar a tu equipo para hacer más con menos.
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
                El error más caro es invertir en tecnología sin tener clara la estrategia. Nuestra sesión inicial sirve para mapear cómo funciona tu empresa hoy y descubrir exactamente dónde la Inteligencia Artificial te generará mayor rentabilidad.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Detección de procesos lentos o manuales
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Análisis de viabilidad para tu industria
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Proyección de retorno de inversión
                </li>
              </ul>
              <Link href="/?interes=diagnostico#diagnostico" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-800 transition-colors">
                Agendar Evaluación <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <ScaleIn delay={0.2} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Nuestro Enfoque</h3>
              <p className="text-[#0F172A] font-medium text-lg leading-relaxed">
                Revisamos cómo operas diariamente y te decimos con franqueza si la Inteligencia Artificial es el camino correcto para ti en este momento. Sin compromisos.
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
              <h2 className="text-3xl font-black tracking-tight text-[#0F172A] mb-4">Soluciones Listas para Operar</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Contamos con herramientas tecnológicas comprobadas que asumen las tareas más repetitivas de tu empresa. Liberamos a tu equipo del trabajo mecánico para que puedan enfocarse en lo que realmente hace crecer tu negocio.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Lectura y conciliación automática de facturas
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Asistentes virtuales que atienden clientes 24/7
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Búsqueda rápida en miles de documentos
                </li>
              </ul>
              <Link href="/demos" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-800 transition-colors">
                Ver Casos de Uso <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <ScaleIn delay={0.2} className="md:order-1 bg-[#0F172A] rounded-3xl p-8 border border-slate-800 text-white shadow-xl">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Interactivos</h3>
              <p className="text-white font-medium text-lg leading-relaxed">
                Hemos habilitado espacios interactivos para que pruebes cómo funcionan estas herramientas en tiempo real antes de tomar cualquier decisión.
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
                Entendemos que cada empresa es única. Si el software tradicional no cubre tus necesidades, creamos un asistente inteligente exclusivo que converse directamente con tus sistemas y entienda tus propias reglas de negocio.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Conexión perfecta con tus plataformas actuales
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Respuestas precisas basadas solo en tu información
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Procesamiento seguro de tus datos
                </li>
              </ul>
              <Link href="/?interes=a-medida#diagnostico" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-800 transition-colors">
                Cotizar Proyecto a Medida <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <ScaleIn delay={0.2} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Confidencialidad</h3>
              <p className="text-[#0F172A] font-medium text-lg leading-relaxed">
                Tus documentos y manuales son tuyos. Creamos entornos donde tu información se mantiene 100% privada y segura en todo momento.
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
              <h2 className="text-3xl font-black tracking-tight text-[#0F172A] mb-4">Capacitación y Entrenamiento</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Tener la mejor tecnología no sirve si tu equipo no sabe cómo sacarle provecho. Acompañamos a tus colaboradores para perderle el miedo a la IA y enseñarles a utilizarla en su trabajo diario.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Habilidades prácticas para ahorrar tiempo
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Talleres diseñados para perfiles no tecnológicos
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" /> Transición guiada paso a paso
                </li>
              </ul>
              <Link href="/?interes=formacion#diagnostico" className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-800 transition-colors">
                Solicitar Formación <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
            <ScaleIn delay={0.2} className="md:order-1 bg-[#0F172A] rounded-3xl p-8 border border-slate-800 text-white shadow-xl">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Adopción Real</h3>
              <p className="text-white font-medium text-lg leading-relaxed">
                El verdadero ahorro no ocurre cuando compras un software, ocurre cuando tu equipo se acostumbra a usarlo todos los días.
              </p>
            </ScaleIn>
          </div>

        </div>
      </section>
    </div>
  );
}
