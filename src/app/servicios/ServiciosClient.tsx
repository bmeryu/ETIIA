"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Hammer,
  MessageCircle,
  Target,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    phase: "Fase 1",
    title: "Diagnóstico gratis",
    price: "$0",
    icon: ClipboardCheck,
    desc: "Si la conversación previa muestra una oportunidad real, ordenamos la oportunidad y decidimos si merece inversión en IA.",
    deliverables: [
      "Filtro ejecutivo: invertir/no invertir en IA.",
      "Valor potencial en pesos, con supuestos claros.",
      "Veredicto ejecutivo para decidir el siguiente paso.",
    ],
  },
  {
    phase: "Fase 2",
    title: "Blueprint ETIIA",
    price: "Fee fijo",
    icon: FileText,
    featured: true,
    desc: "El producto central: el plan de inversión y ejecución, con alcance, costos, plazos, riesgos, ROI y alternativas para construir.",
    deliverables: [
      "Fee fijo por alcance, no por hora.",
      "Documento + presentación para comité ejecutivo o dueño del negocio.",
      "El Blueprint es tuyo: lo puedes ejecutar con ETIIA, con tu equipo o con otro proveedor.",
    ],
  },
  {
    phase: "Fase 3",
    title: "Implementación opcional",
    price: "Según Blueprint",
    icon: Hammer,
    desc: "Si el Blueprint justifica construir con ETIIA, ejecutamos por fases con presupuesto, métricas y responsables definidos.",
    deliverables: [
      "Ejecución contra el alcance ya aprobado.",
      "Integración con sistemas y datos existentes.",
      "BI encendido para medir avance, retorno y adopción.",
    ],
  },
  {
    phase: "Soporte",
    title: "UpSkilling & ReSkilling",
    price: "Según alcance",
    icon: GraduationCap,
    desc: "Formación aplicada para que el equipo interno pueda adoptar, evaluar o ejecutar IA con criterio de negocio.",
    deliverables: [
      "Sesiones con tus datos, procesos y prioridades ejecutivas.",
      "Criterios para usar IA con lógica de negocio y adopción real.",
      "Material práctico para adopción y continuidad.",
    ],
  },
];

const diagnosticCriteria = [
  "Hay una decisión o tarea repetitiva que hoy consume criterio humano costoso.",
  "Existe, o se puede generar, información suficiente para sostener la solución.",
  "El error, la lentitud o la mala asignación actual tiene costo medible en pesos.",
  "La escala justifica intervenir; no es un caso aislado de una vez al año.",
  "Existe un responsable interno con autoridad para adoptar y sostener el cambio.",
];

const applicationAreas = [
  {
    title: "Comercial y retención",
    desc: "Priorización de clientes, recompra, fuga, cross-sell y uso más inteligente del presupuesto comercial.",
  },
  {
    title: "Asignación y demanda",
    desc: "Decisiones sobre inventario, dotación, campañas, capacidad, presupuesto o foco operativo.",
  },
  {
    title: "Backoffice y documentos",
    desc: "Lectura, validación, conciliación y clasificación de información que hoy consume horas caras.",
  },
  {
    title: "Atención y conocimiento operativo",
    desc: "Respuestas, derivaciones, búsqueda en documentos internos y flujos donde el sistema debe saber cuándo escalar.",
  },
];

export default function ServiciosClient() {
  return (
    <div className="bg-white min-h-screen text-[#0F172A]">
      <section className="pt-40 md:pt-36 pb-14 md:pb-24 bg-white relative overflow-hidden" aria-label="Servicios ETIIA">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]" aria-hidden="true" />
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="space-y-12">
              <div className="mx-auto max-w-5xl text-center">
                <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-5">
                  Servicios ETIIA
                </p>
                <h1 className="text-[2.2rem] sm:text-5xl lg:text-[4.35rem] font-black tracking-normal text-[#0F172A] leading-[1.07] mb-5">
                  Antes de aprobar inversión en IA, define si el retorno justifica avanzar.
                </h1>
                <p className="mx-auto max-w-3xl text-base md:text-lg text-slate-500 leading-relaxed">
                  Primero conversamos para revisar si existen antecedentes suficientes. Si corresponde avanzar, evaluamos la oportunidad, diseñamos el Blueprint y dejamos en tus manos un plan ejecutable con alcance, costos, plazos y retorno esperado.
                </p>
                <Link href="/contacto" className="mt-6 md:mt-8 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-900/15">
                  Conversemos <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mx-auto grid max-w-5xl gap-3 md:gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4 md:p-5 shadow-xl shadow-slate-900/5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                    <div>
                      <p className="text-sm font-black text-[#0F172A] mb-2">
                        Criterio para avanzar
                      </p>
                      <p className="mx-auto max-w-2xl text-sm text-slate-500 leading-relaxed">
                        Si no hay información suficiente, escala operativa, responsable interno y retorno medible, no recomendamos avanzar.
                      </p>
                    </div>
                    <CheckCircle2 className="hidden sm:block w-9 h-9 text-blue-600 shrink-0" />
                  </div>
                </div>

                {/* Conversación — nota previa diferenciada */}
                <div className="flex items-center gap-3 rounded-xl border border-dashed border-blue-200 bg-blue-50/60 px-4 py-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-blue-100 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-widest font-extrabold text-blue-600 leading-tight">Antes de agendar</p>
                    <p className="text-xs text-slate-600 font-semibold leading-snug">Conversamos 20 min · sin costo · sin compromiso</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                      <div key={service.title} className={`border rounded-xl p-3 md:p-4 min-h-[112px] md:min-h-[132px] flex flex-col justify-between ${service.featured ? "bg-[#0F172A] border-slate-800 text-white shadow-xl shadow-blue-900/10" : "bg-white border-slate-200 shadow-sm shadow-slate-900/5"}`}>
                        <div className="flex items-start justify-between gap-2 md:gap-3 mb-3 md:mb-4">
                          <div className={`w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center border ${service.featured ? "bg-blue-500/15 border-blue-400/20" : "bg-blue-50 border-blue-100"}`}>
                            <Icon className={`w-4 h-4 md:w-5 md:h-5 ${service.featured ? "text-blue-300" : "text-blue-600"}`} />
                          </div>
                          <span className={`text-[10px] font-black uppercase tracking-widest ${service.featured ? "text-blue-200" : "text-blue-700"}`}>
                            {service.phase}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm md:text-base font-black leading-tight mb-2">
                            {service.title}
                          </p>
                          <p className={`text-xs font-bold ${service.featured ? "text-slate-300" : "text-slate-500"}`}>
                            {service.price}
                          </p>
                        </div>
                        <span className={`mt-4 h-1 w-10 rounded-full ${idx === 1 ? "bg-blue-500" : service.featured ? "bg-blue-300/40" : "bg-slate-200"}`} aria-hidden="true" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto mb-10 max-w-5xl text-center">
              <div>
                <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">
                  Qué se contrata
                </p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                  Servicios para decidir inversión, ejecutar con control y preparar al equipo.
                </h2>
              </div>
              <p className="mx-auto mt-5 max-w-3xl text-slate-500 leading-relaxed">
                Antes de contratar cualquier servicio, conversamos 20 minutos para filtrar si existen antecedentes suficientes. Esa conversación no es un servicio ni una fase: es el filtro previo. El diagnóstico reduce incertidumbre; el Blueprint concentra la decisión de inversión. La implementación y formación aparecen cuando el plan ya está justificado.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={0.08 * (idx + 1)}>
                  <article className={`h-full rounded-2xl border p-7 flex flex-col ${service.featured ? "bg-[#0F172A] border-slate-800 text-white shadow-xl shadow-blue-900/10" : "bg-white border-slate-200"}`}>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${service.featured ? "bg-blue-500/15 border-blue-400/20" : "bg-blue-50 border-blue-100"}`}>
                        <Icon className={`w-6 h-6 ${service.featured ? "text-blue-300" : "text-blue-600"}`} />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${service.featured ? "text-blue-200" : "text-blue-700"}`}>
                          {service.phase}
                        </span>
                        <span className={`text-xs font-bold border px-2.5 py-1 rounded-full ${service.featured ? "text-white bg-blue-600 border-blue-500" : "text-slate-700 bg-slate-50 border-slate-200"}`}>
                          {service.price}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-black tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-6 ${service.featured ? "text-slate-300" : "text-slate-500"}`}>
                      {service.desc}
                    </p>
                    <div className="grid gap-3 mt-auto">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex flex-col items-center gap-3 text-center">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${service.featured ? "text-blue-300" : "text-blue-600"}`} />
                          <span className={`text-sm leading-relaxed ${service.featured ? "text-slate-200" : "text-[#0F172A]"}`}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <Reveal>
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">
                  Diagnóstico gratis
                </p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-5">
                  El diagnóstico empieza cuando ya existen antecedentes suficientes.
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  La primera conversación no es el diagnóstico completo. Sirve para decidir si se justifica iniciarlo. Cuando corresponde, el diagnóstico entrega una respuesta clara: si el caso amerita Blueprint, si requiere otro enfoque o si no corresponde invertir todavía.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mx-auto max-w-5xl bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {diagnosticCriteria.map((item, idx) => (
                    <div key={item} className="flex gap-4 items-start bg-white border border-slate-200 rounded-xl p-4">
                      <span className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-xs font-black text-blue-700 shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-slate-200 pt-6 flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-[#0F172A] font-semibold leading-relaxed">
                    Resultado: una síntesis ejecutiva con recomendación de inversión, valor en juego, tipo de solución probable y siguiente paso recomendado.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto mb-12 max-w-5xl text-center">
              <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">
                Dónde se aplica
              </p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                Nuestros servicios se aplican donde una decisión relevante puede mejorar con datos e IA.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-slate-500 leading-relaxed">
                La solución puede terminar en BI, automatización con IA o modelos predictivos. Esa decisión se toma después del diagnóstico, según retorno esperado, factibilidad y prioridad ejecutiva.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {applicationAreas.map((area, idx) => (
              <Reveal key={area.title} delay={0.08 * (idx + 1)}>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full">
                  <Target className="w-5 h-5 text-blue-600 mb-5" />
                  <h3 className="text-lg font-black tracking-tight mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center gap-8 text-center overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 85% 10%, rgba(37, 99, 235, 0.18) 0%, transparent 45%)" }} aria-hidden="true" />
            <Reveal>
              <div className="relative z-10">
                <BadgeDollarSign className="w-9 h-9 text-blue-300 mb-6" />
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight mb-5">
                  El Blueprint es el activo que queda en tus manos.
                </h2>
                <p className="mx-auto max-w-3xl text-slate-300 leading-relaxed">
                  Incluye alcance, costos, cronograma, riesgos, métricas y opciones de ejecución. Sirve para decidir inversión, pedir presupuesto interno o comparar proveedores sin partir desde cero.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative z-10 mx-auto w-full max-w-4xl bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="grid gap-4 md:grid-cols-3">
                  {[
                    "Fee fijo por alcance, no bolsa de horas.",
                    "Propiedad del cliente, sin reservas para forzar la implementación.",
                    "Implementación opcional con ETIIA si el número lo justifica.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-200 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl border border-slate-200 bg-slate-50 rounded-2xl p-8 flex flex-col items-center justify-center gap-6 text-center">
            <div>
              <BarChart3 className="w-7 h-7 text-blue-600 mb-4" />
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                Partamos por decidir si se justifica avanzar.
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                Primero conversemos. Si existen antecedentes suficientes, abrimos el diagnóstico gratis; si hay retorno medible, avanzamos al Blueprint.
              </p>
            </div>
            <Link href="/contacto" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 shrink-0">
              Conversemos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
