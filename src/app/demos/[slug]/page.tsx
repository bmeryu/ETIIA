import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Reveal";

const demos: Record<string, {
  nombre: string;
  industria: string;
  tagline: string;
  descripcion: string;
  resultado: string;
  resultadoLabel: string;
  tags: string[];
  color: string;
  iframeSrc: string;
  pasos: { titulo: string; desc: string }[];
}> = {
  facturai: {
    nombre: "FacturAI",
    industria: "Finanzas · Contabilidad",
    tagline: "Conciliación de facturas sin tipeo humano",
    descripcion: "Un agente de IA que lee tus facturas PDF (incluso escaneadas), extrae los datos clave con OCR, los cruza automáticamente con la cartola bancaria y empuja el resultado validado directo a tu ERP.",
    resultado: "247 facturas en 42 seg",
    resultadoLabel: "Procesamiento masivo en paralelo",
    tags: ["Google Cloud Vision", "Gemini", "OCR", "ERP Integration"],
    color: "emerald",
    iframeSrc: "/demos/facturai/index.html#demo",
    pasos: [
      { titulo: "OCR Masivo", desc: "Cloud Vision extrae texto de cualquier PDF en paralelo — incluso fotos de facturas impresas." },
      { titulo: "Conciliación Cruzada", desc: "La IA cruza cada factura contra los movimientos de la cartola bancaria, identificando matches y diferencias." },
      { titulo: "Push al ERP", desc: "Los registros validados se empujan automáticamente a tu ERP (SAP, Softland, Defontana) sin tipeo manual." },
    ],
  },
  autorend: {
    nombre: "AutoRend IA",
    industria: "Educación · Rendiciones",
    tagline: "El fin de los atrasos en las rendiciones",
    descripcion: "Un agente de IA que lee PDFs de observaciones del ente regulador, se conecta en tiempo real con el ERP Qbiz, razona la información y responde automáticamente. Si falta un dato, redacta y envía el correo al colegio.",
    resultado: "89% resolución automática",
    resultadoLabel: "Sin intervención humana",
    tags: ["PDF Processing", "ERP Qbiz", "Auto-email", "NLP"],
    color: "blue",
    iframeSrc: "/demos/autorend/index.html",
    pasos: [
      { titulo: "Ingesta y Razonamiento", desc: "El sistema lee el PDF, extrae cada observación y comprende qué se está pidiendo." },
      { titulo: "Cruce con ERP Qbiz", desc: "Mediante integración API, la IA busca facturas, folios y rendiciones en Qbiz para dar respuesta inmediata." },
      { titulo: "Gestión de Excepciones", desc: "Si la información NO está en el ERP, la IA identifica el colegio, redacta un correo y lo envía automáticamente." },
    ],
  },
  lexsearch: {
    nombre: "LexSearch",
    industria: "Legal · Jurídico",
    tagline: "Encuentra la cláusula exacta, no palabras sueltas",
    descripcion: "Un buscador semántico privado sobre tu base de contratos y jurisprudencia. La IA entiende contexto legal y devuelve la cláusula específica que necesitas, no un listado interminable.",
    resultado: "4hrs → 12min búsqueda",
    resultadoLabel: "Reducción del 95% en tiempo de búsqueda",
    tags: ["RAG", "Embeddings", "Pinecone", "NLP Legal"],
    color: "violet",
    iframeSrc: "/demos/lexsearch/index.html#demo",
    pasos: [
      { titulo: "Indexación Semántica", desc: "Cada cláusula de tus contratos se convierte en un vector de 768 dimensiones usando modelos de lenguaje legal." },
      { titulo: "Búsqueda por Concepto", desc: "Cuando preguntas en lenguaje natural, la IA compara tu consulta contra 48,000+ cláusulas por similitud semántica." },
      { titulo: "Resultado Preciso", desc: "Devuelve la cláusula exacta con su porcentaje de relevancia, documento de origen y página. Sin falsos positivos." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(demos).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const demo = demos[slug];
  if (!demo) return { title: "Demo no encontrada" };
  return {
    title: `${demo.nombre} — ${demo.tagline}`,
    description: demo.descripcion,
  };
}

export default async function DemoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const demo = demos[slug];

  if (!demo) {
    return (
      <section className="pt-40 pb-20 text-center">
        <h1 className="text-3xl font-black text-navy">Demo no encontrada</h1>
        <Link href="/demos" className="text-blue-600 mt-4 inline-block">← Volver a Demos</Link>
      </section>
    );
  }

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    violet: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-200" },
  };
  const c = colorMap[demo.color] || colorMap.blue;

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-white bg-grid-light relative overflow-hidden">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
          <FadeIn delay={0.1}>
            <Link href="/demos" className="inline-flex items-center text-sm text-slate-400 hover:text-slate-600 transition mb-6 font-medium">
              <ArrowLeft className="w-4 h-4 mr-1" /> Volver a Demos
            </Link>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`inline-flex items-center px-3 py-1 rounded-full ${c.bg} ${c.text} text-xs font-bold uppercase tracking-wider ${c.border} border`}>
                {demo.industria}
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-[0.65rem] font-bold uppercase tracking-wider border border-green-200">
                ● Demo interactiva
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A] mb-4 leading-[1.08]">
              {demo.nombre}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-slate-500 mb-6 max-w-3xl leading-relaxed font-medium">
              {demo.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-base text-slate-400 mb-8 max-w-2xl leading-relaxed">
              {demo.descripcion}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-2 mb-8">
              {demo.tags.map(tag => (
                <span key={tag} className="bg-slate-100 text-slate-500 text-xs font-semibold px-3 py-1 rounded-lg border border-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#demo-frame">
                <Button className="h-12 px-8 text-base">
                  Probar la Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Link href="/contacto">
                <Button variant="outline" className="h-12 px-8 text-base">
                  Solicitar para mi empresa
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ DEMO EMBEBIDA ══════════ */}
      <section id="demo-frame" className="py-12 md:py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-2">Demo Interactiva</h2>
              <p className="text-slate-400 text-sm">Haz clic en los elementos resaltados para interactuar con el sistema</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative mx-auto" style={{ maxWidth: '1000px' }}>
              {/* Browser chrome */}
              <div className="bg-[#f8fafc] rounded-t-xl border border-b-0 border-slate-200 h-10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <div className="flex-1 text-center">
                  <span className="inline-block bg-white rounded-md px-4 py-1 text-xs text-slate-400 border border-slate-200">
                    🔒 app.{demo.nombre.toLowerCase()}.cl/dashboard
                  </span>
                </div>
              </div>
              {/* iframe */}
              <div className="border border-slate-200 rounded-b-xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <iframe
                  src={demo.iframeSrc}
                  className="w-full border-0"
                  style={{ height: '580px' }}
                  title={`Demo ${demo.nombre}`}
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ CÓMO FUNCIONA ══════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-[2.5rem] font-black text-[#0F172A] leading-tight">Cómo funciona</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {demo.pasos.map((paso, i) => (
              <FadeIn key={paso.titulo} delay={0.1 * (i + 1)}>
                <div className="text-center">
                  <div className={`w-14 h-14 rounded-full ${c.bg} ${c.text} flex items-center justify-center text-xl font-bold mx-auto mb-5 ${c.border} border-2`}>
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{paso.titulo}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{paso.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Metric card */}
          <FadeIn delay={0.4}>
            <div className={`${c.bg} ${c.border} border rounded-2xl p-8 text-center max-w-md mx-auto`}>
              <p className={`text-3xl md:text-4xl font-black ${c.text} mb-1`}>{demo.resultado}</p>
              <p className="text-slate-500 text-sm font-medium">{demo.resultadoLabel}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200 text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-[2.5rem] font-black text-[#0F172A] mb-4 leading-tight">
              ¿Necesitas algo similar para tu empresa?
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
              Cada solución se adapta a tu operación. Cuéntanos tu desafío y te mostramos cómo resolverlo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-8 text-base btn-pulse">
                  Solicitar Diagnóstico Gratuito
                </Button>
              </Link>
              <Link href="/demos">
                <Button variant="outline" className="h-12 px-8 text-base">
                  Ver más demos <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
