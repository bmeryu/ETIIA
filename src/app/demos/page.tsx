import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, FileText, Scale, Users, Stethoscope, Leaf, Calculator, Mic } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, FadeIn } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Demos Interactivas",
  description: "Portfolio de soluciones de IA implementadas por ETIIA. Demos interactivas de productos reales en contabilidad, legal, RRHH, salud y más.",
};

const productos = [
  {
    nombre: "AutoRend IA",
    slug: "autorend",
    industria: "Educación · Rendiciones",
    icon: <FileText className="w-6 h-6" />,
    descripcion: "Agente de IA que lee PDFs de observaciones, cruza datos con el ERP y responde automáticamente. Si falta información, redacta y envía el correo al colegio.",
    resultado: "89% resolución automática",
    tags: ["PDF Processing", "ERP Integration", "Auto-email"],
    color: "blue",
    disponible: true,
  },
  {
    nombre: "FacturAI",
    slug: "facturai",
    industria: "Finanzas · Contabilidad",
    icon: <Calculator className="w-6 h-6" />,
    descripcion: "Lectura masiva de facturas PDF con OCR inteligente, conciliación cruzada automática con cartolas bancarias y digitación directa al ERP sin intervención humana.",
    resultado: "95% precisión OCR",
    tags: ["OCR", "Conciliación", "ERP Push"],
    color: "emerald",
    disponible: true,
  },
  {
    nombre: "LexSearch",
    slug: "lexsearch",
    industria: "Legal · Jurídico",
    icon: <Scale className="w-6 h-6" />,
    descripcion: "Buscador semántico privado sobre tu base de contratos y jurisprudencia. La IA entiende contexto legal y devuelve la cláusula exacta, no palabras aisladas.",
    resultado: "4hrs → 12min búsqueda",
    tags: ["RAG", "Embeddings", "NLP Legal"],
    color: "violet",
    disponible: true,
  },
  {
    nombre: "TalentParse",
    slug: "talentparse",
    industria: "Recursos Humanos",
    icon: <Users className="w-6 h-6" />,
    descripcion: "Parseo automático de CVs en cualquier formato. La IA extrae variables críticas y las mapea contra la descripción del cargo, generando un ranking instantáneo.",
    resultado: "300 CVs en 8 min",
    tags: ["CV Parsing", "Scoring", "Ranking"],
    color: "amber",
    disponible: true,
  },
  {
    nombre: "AgendAI",
    slug: "agendai",
    industria: "Salud · Clínicas",
    icon: <Stethoscope className="w-6 h-6" />,
    descripcion: "Análisis predictivo de agenda médica: detecta inasistencias antes de que ocurran y contacta automáticamente a pacientes en lista de espera.",
    resultado: "-62% no-shows",
    tags: ["Predictivo", "Auto-contacto", "Agenda"],
    color: "rose",
    disponible: true,
  },
  {
    nombre: "CosechAI",
    slug: "cosechai",
    industria: "Agricultura · Viñas",
    icon: <Leaf className="w-6 h-6" />,
    descripcion: "Cruzamos históricos de producción con modelos predictivos para optimizar rendimiento, reducir merma y maximizar la rentabilidad de exportaciones.",
    resultado: "+28% eficiencia",
    tags: ["ML Predictivo", "IoT", "Dashboard"],
    color: "green",
    disponible: true,
  },
  {
    nombre: "TranscribAI",
    industria: "Legal · Compliance · Corporativo",
    icon: <Mic className="w-6 h-6" />,
    descripcion: "Transcripción segura de audios con IA. Genera resúmenes ejecutivos, detecta discrepancias entre participantes y levanta alertas automáticas sobre compromisos incumplidos.",
    resultado: "2hrs audio → 5 min",
    tags: ["Whisper", "Diarización", "NLP", "Alertas"],
    color: "cyan",
    disponible: false,
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; tagBg: string; tagText: string }> = {
  blue:    { bg: "bg-blue-50",    text: "text-blue-600",    border: "border-blue-200",   tagBg: "bg-blue-100",    tagText: "text-blue-700" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", tagBg: "bg-emerald-100", tagText: "text-emerald-700" },
  violet:  { bg: "bg-violet-50",  text: "text-violet-600",  border: "border-violet-200",  tagBg: "bg-violet-100",  tagText: "text-violet-700" },
  amber:   { bg: "bg-amber-50",   text: "text-amber-600",   border: "border-amber-200",   tagBg: "bg-amber-100",   tagText: "text-amber-700" },
  rose:    { bg: "bg-rose-50",    text: "text-rose-600",    border: "border-rose-200",    tagBg: "bg-rose-100",    tagText: "text-rose-700" },
  green:   { bg: "bg-green-50",   text: "text-green-600",   border: "border-green-200",   tagBg: "bg-green-100",   tagText: "text-green-700" },
  cyan:    { bg: "bg-cyan-50",    text: "text-cyan-600",    border: "border-cyan-200",    tagBg: "bg-cyan-100",    tagText: "text-cyan-700" },
};

export default function CasosPage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white text-center bg-grid-light relative overflow-hidden">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/60 text-sm text-blue-700 font-semibold mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block mr-2 animate-pulse" />
              Portfolio de Soluciones
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-[#0F172A] mb-6 leading-[1.08]">
              Productos que{" "}
              <span className="text-gradient-blue">construimos</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Cada solución nace de un problema real de negocio. Explora demos interactivas de lo que hacemos — desde la lectura inteligente de documentos hasta análisis predictivo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ══════════ PRODUCT STACK ══════════ */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos.map((p, i) => {
              const c = colorMap[p.color];
              return (
                <Reveal key={p.nombre} delay={0.08 * (i + 1)}>
                  {p.disponible && p.slug ? (
                    <Link href={`/demos/${p.slug}`} className="block h-full">
                      <div className={`bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-300 hover:shadow-[0_8px_28px_-6px_rgba(29,78,216,0.14)] transition-all h-full group cursor-pointer flex flex-col lift-card relative overflow-hidden`}>
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center ${c.text} group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300`}>{p.icon}</div>
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-[0.65rem] font-bold uppercase tracking-wider border border-green-200">● Demo live</span>
                        </div>
                        <span className={`text-xs font-semibold ${c.text} uppercase tracking-wider mb-1`}>{p.industria}</span>
                        <h3 className="text-xl font-black text-[#0F172A] mb-2 group-hover:text-blue-700 transition-colors">{p.nombre}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-4">{p.descripcion}</p>
                        <div className={`${c.bg} ${c.border} border rounded-xl px-4 py-3 mb-4`}><p className={`text-lg font-black ${c.text}`}>{p.resultado}</p></div>
                        <div className="flex flex-wrap gap-1.5 mb-4">{p.tags.map(tag => (<span key={tag} className={`${c.tagBg} ${c.tagText} text-[0.6rem] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide`}>{tag}</span>))}</div>
                        <span className="inline-flex items-center text-sm font-semibold text-blue-600 mt-auto opacity-0 group-hover:opacity-100 transition-opacity">Ver demo interactiva <ArrowRight className="ml-1 w-3.5 h-3.5" /></span>
                      </div>
                    </Link>
                  ) : (
                    <div className={`bg-white rounded-2xl p-7 border border-slate-200 transition-all h-full flex flex-col relative overflow-hidden opacity-75`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center ${c.text}`}>{p.icon}</div>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-50 text-slate-400 text-[0.65rem] font-bold uppercase tracking-wider border border-slate-200">Próximamente</span>
                      </div>
                      <span className={`text-xs font-semibold ${c.text} uppercase tracking-wider mb-1`}>{p.industria}</span>
                      <h3 className="text-xl font-black text-[#0F172A] mb-2">{p.nombre}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-4">{p.descripcion}</p>
                      <div className={`${c.bg} ${c.border} border rounded-xl px-4 py-3 mb-4`}><p className={`text-lg font-black ${c.text}`}>{p.resultado}</p></div>
                      <div className="flex flex-wrap gap-1.5 mb-4">{p.tags.map(tag => (<span key={tag} className={`${c.tagBg} ${c.tagText} text-[0.6rem] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide`}>{tag}</span>))}</div>
                      <span className="inline-flex items-center text-sm font-medium text-slate-400 mt-auto">Demo en desarrollo</span>
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-[2.5rem] font-black text-[#0F172A] mb-4 leading-tight">
              ¿Necesitas algo similar para tu empresa?
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
              Cada producto se adapta a tu operación. Cuéntanos tu desafío y te mostramos cómo resolverlo.
            </p>
            <Link href="/contacto">
              <Button className="h-12 px-8 text-base btn-pulse">
                Solicitar Diagnóstico Gratuito
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
