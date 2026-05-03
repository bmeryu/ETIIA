"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, FileText, Scale, Users, Stethoscope, Leaf, Calculator, Mic, Headset, ShoppingBag, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal, FadeIn } from "@/components/ui/Reveal";

const productos = [
  {
    nombre: "AtendeAI",
    slug: "atendeai",
    industria: "Transversal · Atención al Cliente",
    categoria: "Atención Cliente",
    icon: <Headset className="w-6 h-6" />,
    descripcion: "Agente de IA que entiende lenguaje natural, accede a tu CRM y ejecuta acciones reales: cambia planes, agenda técnicos, genera boletas. No es un chatbot — es un agente.",
    resultado: "73% resolución sin humano",
    tags: ["LLM Agents", "RAG", "CRM", "Multicanal"],
    color: "teal",
    disponible: true,
    isAgent: true,
  },
  {
    nombre: "VentaAI",
    slug: "ventaai",
    industria: "Retail · eCommerce",
    categoria: "Retail",
    icon: <ShoppingBag className="w-6 h-6" />,
    descripcion: "Motor de recomendación que analiza comportamiento, historial y perfil del cliente para sugerir productos con alta probabilidad de conversión. Genera campañas automáticas por segmento.",
    resultado: "+34% cross-sell",
    tags: ["Collaborative Filtering", "NLP", "Predicción"],
    color: "indigo",
    disponible: true,
  },
  {
    nombre: "AutoRend IA",
    slug: "autorend",
    industria: "Educación · Rendiciones",
    categoria: "Operaciones",
    icon: <FileText className="w-6 h-6" />,
    descripcion: "Agente de IA que lee PDFs de observaciones, cruza datos con el ERP y responde automáticamente. Si falta información, redacta y envía el correo al colegio.",
    resultado: "78% resolución automática",
    tags: ["PDF Processing", "ERP Integration", "Auto-email"],
    color: "blue",
    disponible: true,
    isAgent: true,
  },
  {
    nombre: "FacturAI",
    slug: "facturai",
    industria: "Finanzas · Contabilidad",
    categoria: "Finanzas",
    icon: <Calculator className="w-6 h-6" />,
    descripcion: "Lectura masiva de facturas PDF con OCR inteligente, conciliación cruzada automática con cartolas bancarias y digitación directa al ERP sin intervención humana.",
    resultado: "82% conciliación automática",
    tags: ["OCR", "Conciliación", "ERP Push"],
    color: "emerald",
    disponible: true,
    isAgent: true,
  },
  {
    nombre: "LexSearch",
    slug: "lexsearch",
    industria: "Legal · Jurídico",
    categoria: "Legal",
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
    categoria: "RRHH",
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
    categoria: "Salud",
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
    categoria: "Agro",
    icon: <Leaf className="w-6 h-6" />,
    descripcion: "Cruzamos históricos de producción con modelos predictivos para optimizar rendimiento, reducir merma y maximizar la rentabilidad de exportaciones.",
    resultado: "+28% eficiencia",
    tags: ["ML Predictivo", "IoT", "Dashboard"],
    color: "green",
    disponible: true,
  },
  {
    nombre: "TranscribAI",
    slug: "transcribai",
    industria: "Legal · Compliance",
    categoria: "Legal",
    icon: <Mic className="w-6 h-6" />,
    descripcion: "Transcripción segura de audios con IA. Genera resúmenes ejecutivos, detecta discrepancias entre participantes y levanta alertas automáticas sobre compromisos incumplidos.",
    resultado: "2hrs audio → 5 min",
    tags: ["Whisper", "Diarización", "NLP", "Alertas"],
    color: "cyan",
    disponible: true,
  },
];

const categoriasDisponibles = ["Todos", "Atención Cliente", "Finanzas", "Legal", "RRHH", "Operaciones", "Agro", "Retail", "Salud"];

const colorMap: Record<string, { bg: string; text: string; border: string; tagBg: string; tagText: string }> = {
  blue:    { bg: "bg-blue-50",    text: "text-blue-600",    border: "border-blue-200",   tagBg: "bg-blue-100",    tagText: "text-blue-700" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", tagBg: "bg-emerald-100", tagText: "text-emerald-700" },
  violet:  { bg: "bg-violet-50",  text: "text-violet-600",  border: "border-violet-200",  tagBg: "bg-violet-100",  tagText: "text-violet-700" },
  amber:   { bg: "bg-amber-50",   text: "text-amber-600",   border: "border-amber-200",   tagBg: "bg-amber-100",   tagText: "text-amber-700" },
  rose:    { bg: "bg-rose-50",    text: "text-rose-600",    border: "border-rose-200",    tagBg: "bg-rose-100",    tagText: "text-rose-700" },
  green:   { bg: "bg-green-50",   text: "text-green-600",   border: "border-green-200",   tagBg: "bg-green-100",   tagText: "text-green-700" },
  cyan:    { bg: "bg-cyan-50",    text: "text-cyan-600",    border: "border-cyan-200",    tagBg: "bg-cyan-100",    tagText: "text-cyan-700" },
  teal:    { bg: "bg-teal-50",    text: "text-teal-600",    border: "border-teal-200",    tagBg: "bg-teal-100",    tagText: "text-teal-700" },
  indigo:  { bg: "bg-indigo-50",  text: "text-indigo-600",  border: "border-indigo-200",  tagBg: "bg-indigo-100",  tagText: "text-indigo-700" },
};

export default function DemosFilterClient() {
  const [filtro, setFiltro] = useState("Todos");
  const productosFiltrados = productos.filter(p => filtro === "Todos" || p.categoria === filtro);

  return (
    <>
      {/* ══════════ PRODUCT STACK ══════════ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-6 tracking-tight">Catálogo de Soluciones IA</h1>
            <p className="text-lg text-slate-500 max-w-2xl mb-8">
              Explora nuestra librería de agentes y modelos predictivos. Usa los filtros para encontrar herramientas diseñadas para tu departamento.
            </p>
            
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-slate-400 mr-2 flex items-center gap-1">
                <Filter className="w-4 h-4" /> Filtrar por:
              </span>
              {categoriasDisponibles.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFiltro(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    filtro === cat 
                      ? "bg-blue-700 text-white shadow-md shadow-blue-900/10" 
                      : "bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-800 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productosFiltrados.map((p, i) => {
              const c = colorMap[p.color];
              return (
                <Reveal key={p.nombre} delay={0.05 * (i + 1)}>
                  {p.disponible && p.slug ? (
                    <Link href={`/demos/${p.slug}`} className="block h-full">
                      <div className={`bg-white rounded-2xl p-7 border border-slate-200 hover:border-blue-300 hover:shadow-[0_8px_28px_-6px_rgba(29,78,216,0.14)] transition-all h-full group cursor-pointer flex flex-col lift-card relative overflow-hidden`}>
                        <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center ${c.text} group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300`}>{p.icon}</div>
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-[0.65rem] font-bold uppercase tracking-wider border border-green-200">● Demo live</span>
                        </div>
                        <div className="flex flex-col gap-1.5 mb-2">
                          <span className={`text-xs font-semibold ${c.text} uppercase tracking-wider`}>{p.industria}</span>
                          {p.isAgent && (
                            <span className="inline-flex self-start items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 shadow-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                              Agente Autónomo
                            </span>
                          )}
                        </div>
                        <h2 className="text-xl font-black text-[#0F172A] mb-2 group-hover:text-blue-700 transition-colors">{p.nombre}</h2>
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
                      <h2 className="text-xl font-black text-[#0F172A] mb-2">{p.nombre}</h2>
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
