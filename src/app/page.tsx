"use client";

import Image from "next/image";
import { useState, type MouseEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  BellRing,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileText,
  Hammer,
  MessageCircle,
  ShieldCheck,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import DiagnosticoForm from "./DiagnosticoForm";
import { Carousel } from "./Carousel";

// Camino de conversión único: WhatsApp primario, Calendly secundario (brief §3.2).
const WHATSAPP_NUMBER = "56976305985";
const CALENDLY_URL = "https://calendly.com/etiia";
const wa = (mensaje: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

// CTA primario dominante: una sola etiqueta y un solo destino en toda la home.
const CTA_PRIMARIO = "Agenda tu diagnóstico gratis";
const CTA_PRIMARIO_WA = wa("Hola ETIIA, quiero agendar mi diagnóstico gratis.");
// Botón primario sólido con el acento de marca (--color-brand = blue-700).
const ctaPrimarioClass =
  "inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-0.5";

// Nube de dolores (PNG) con lupa — se muestra en desktop. En mobile se usa el
// auto-diagnóstico interactivo (SignalSelfCheck), más efectivo para CRO (brief §3.3).
const WORD_CLOUD_IMAGE = "/nube-dolores-etiia.png?v=22";
const WORD_CLOUD_ALT =
  "Nube de señales antes del Blueprint ETIIA: todo en Excel, clientes que se fugan, decisiones sin datos, procesos que no conversan, reportes manuales, KPIs a última hora, información dispersa, ventas sin trazabilidad y otras señales operacionales.";
const MAGNIFIER_SIZE = 168;
const MAGNIFIER_ZOOM = 1.75;

function WordCloudMagnifier() {
  const [lens, setLens] = useState({
    active: false,
    x: 0,
    y: 0,
    bgX: 0,
    bgY: 0,
    bgWidth: 0,
    bgHeight: 0,
  });

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const y = Math.max(0, Math.min(event.clientY - rect.top, rect.height));

    setLens({
      active: true,
      x,
      y,
      bgX: -(x * MAGNIFIER_ZOOM - MAGNIFIER_SIZE / 2),
      bgY: -(y * MAGNIFIER_ZOOM - MAGNIFIER_SIZE / 2),
      bgWidth: rect.width * MAGNIFIER_ZOOM,
      bgHeight: rect.height * MAGNIFIER_ZOOM,
    });
  };

  return (
    <div
      className="relative cursor-zoom-in"
      onMouseEnter={handleMove}
      onMouseMove={handleMove}
      onMouseLeave={() => setLens((current) => ({ ...current, active: false }))}
    >
      <Image
        src={WORD_CLOUD_IMAGE}
        alt={WORD_CLOUD_ALT}
        width={1416}
        height={738}
        sizes="(max-width: 1024px) 100vw, 1152px"
        className="block h-auto w-full select-none"
        draggable={false}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute hidden rounded-full border border-blue-200 bg-white ring-4 ring-white/85 shadow-[0_18px_50px_-22px_rgba(15,23,42,0.75)] transition-opacity duration-150 lg:block ${lens.active ? "opacity-100" : "opacity-0"}`}
        style={{
          width: MAGNIFIER_SIZE,
          height: MAGNIFIER_SIZE,
          left: lens.x,
          top: lens.y,
          transform: "translate(-50%, -50%)",
          backgroundImage: `url(${WORD_CLOUD_IMAGE})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${lens.bgWidth}px ${lens.bgHeight}px`,
          backgroundPosition: `${lens.bgX}px ${lens.bgY}px`,
        }}
      />
    </div>
  );
}

// Auto-diagnóstico interactivo de señales (mobile). El visitante marca las que
// le pasan: contador en vivo, CTA que se intensifica y mensaje de WhatsApp con
// las señales marcadas (lead pre-calificado).
const SELF_CHECK_SIGNALS = [
  "Clientes se fugan",
  "Decisiones sin datos",
  "Todo en Excel",
  "Reportes manuales",
  "Procesos que no conversan",
  "Presupuesto asignado a ojo",
  "Leads sin respuesta",
  "Equipo sobrecargado",
  "Errores repetidos",
  "KPIs a última hora",
  "Información dispersa",
  "Dependencia de personas",
];

function SignalSelfCheck() {
  const [picked, setPicked] = useState<string[]>([]);
  const toggle = (t: string) =>
    setPicked((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const n = picked.length;
  const message =
    n === 0
      ? "Toca las que te pasan hoy."
      : n <= 2
        ? `Reconoces ${n}: ya hay algo que conviene revisar.`
        : `Reconoces ${n} señales: conviene ponerle número a lo que cuestan.`;
  const waMsg =
    n === 0
      ? "Hola ETIIA, quiero agendar mi diagnóstico gratis."
      : `Hola ETIIA, quiero agendar mi diagnóstico gratis. Reconozco ${n} señales (${picked.join(", ")}).`;

  return (
    <div>
      <p className="mb-4 text-center text-sm text-slate-500">
        <span className="font-black text-blue-700">Marca las que te pasan.</span> Tú decides si son suficientes para actuar.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {SELF_CHECK_SIGNALS.map((t) => {
          const active = picked.includes(t);
          return (
            <button
              key={t}
              type="button"
              onClick={() => toggle(t)}
              aria-pressed={active}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all ${
                active
                  ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              {active ? (
                <CheckCircle2 className="h-4 w-4 shrink-0" />
              ) : (
                <span className="h-4 w-4 shrink-0 rounded-full border border-slate-300" />
              )}
              {t}
            </button>
          );
        })}
      </div>
      <div
        className={`mt-6 flex flex-col items-center gap-3 rounded-xl border p-4 text-center transition-colors ${
          n >= 3 ? "border-blue-200 bg-blue-50/70" : "border-slate-200 bg-slate-50/70"
        }`}
      >
        <p className="text-sm font-semibold text-[#0F172A]">{message}</p>
        <a
          href={wa(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-0.5 hover:bg-blue-800 ${
            n >= 3 ? "btn-pulse" : ""
          }`}
        >
          {CTA_PRIMARIO} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

const products = [
  {
    nombre: "VentaAI",
    slug: "ventaai",
    problema: "Hay clientes con potencial de recompra, pero hoy nadie prioriza a quién llamar ni qué ofrecer.",
    desc: "Demo de motor comercial que detecta oportunidades de cross-sell y retención con impacto medible en ingresos.",
    industria: "Comercial / Retención",
  },
  {
    nombre: "AtendeAI",
    slug: "atendeai",
    problema: "El equipo destina horas a responder consultas repetidas y las oportunidades se enfrían en la espera.",
    desc: "Demo de agente que atiende, responde y deriva cuando la decisión requiere criterio humano.",
    industria: "Atención / Operación",
    isAgent: true,
  },
  {
    nombre: "FacturAI",
    slug: "facturai",
    problema: "La operación pierde tiempo y control cuando documentos críticos se ingresan a mano.",
    desc: "Demo de lectura, validación y conciliación para estimar ahorro en horas, errores y costo por transacción.",
    industria: "Backoffice / Finanzas",
    isAgent: true,
  },
];

const funnelSteps = [
  {
    icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
    fase: "1",
    title: "Diagnóstico gratis",
    price: "$0",
    desc: "Si la conversación muestra una oportunidad real, hacemos un diagnóstico inicial para ordenar valor, factibilidad y siguiente paso.",
    deliverable: "Veredicto ejecutivo: sí/no, valor en juego, tipo de solución y recomendación.",
  },
  {
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    fase: "2",
    title: "Blueprint ETIIA",
    price: "Fee fijo",
    desc: "El producto central: un documento ejecutable del proyecto, con alcance, costos, plazos, riesgos y ROI. Se cobra por alcance cerrado, no por hora.",
    deliverable: "Documento + presentación para que el dueño pueda decidir inversión.",
  },
  {
    icon: <Hammer className="w-6 h-6 text-blue-600" />,
    fase: "3",
    title: "Implementación opcional",
    price: "Si conviene",
    desc: "Con el Blueprint en la mano, lo puede ejecutar ETIIA, tu equipo interno o una empresa de tu confianza.",
    deliverable: "El Blueprint es tuyo: lo puedes ejecutar con ETIIA, con tu equipo o con otro proveedor.",
  },
];

const blueprintIncludes = [
  "Línea base: cuánto cuesta hoy la decisión manual.",
  "Oportunidad en pesos: ahorro, ingreso retenido o margen recuperable.",
  "Alcance por fases: qué entra, qué queda fuera y en qué orden.",
  "Arquitectura necesaria: datos, integraciones, sistemas y supuestos.",
  "Costos y cronograma: inversión única, recurrentes y dependencias.",
  "ROI y medición: cómo se prueba si valió la pena seguir.",
];

const blueprintOutline = [
  "Proceso actual",
  "Oportunidad IA",
  "Arquitectura propuesta",
  "Alcance por fases",
  "Cronograma",
  "Costos",
  "ROI estimado",
  "Riesgos",
];

const coverage = [
  {
    icon: <Database className="w-6 h-6 text-blue-600" />,
    title: "ERP, CRM y Excel desconectados",
    desc: "Identificamos dónde ventas, contabilidad y operación duplican datos, trabajan con versiones distintas o dependen de planillas fuera del sistema.",
  },
  {
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    title: "Documentos y conocimiento disperso",
    desc: "Ordenamos contratos, facturas, órdenes, PDFs, políticas y procedimientos que hoy se buscan en correos, carpetas o chats.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "Datos personales y uso seguro de IA",
    desc: "Revisamos qué datos se usan, quién accede, qué debe quedar trazado y qué controles mínimos exige un flujo con información sensible.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    title: "Embudo de ventas con trazabilidad",
    desc: "Mapeamos leads, cotizaciones, oportunidades y clientes en riesgo para detectar dónde se enfría el seguimiento y qué automatizar primero.",
  },
  {
    icon: <BellRing className="w-6 h-6 text-blue-600" />,
    title: "Alertas e indicadores accionables",
    desc: "Definimos qué eventos deben avisar a qué área y qué KPIs deben actualizarse sin esperar reportes manuales de fin de mes.",
  },
  {
    icon: <Workflow className="w-6 h-6 text-blue-600" />,
    title: "Procesos manuales entre áreas",
    desc: "Detectamos tareas repetitivas entre ventas, operaciones, finanzas y atención que hoy se resuelven copiando datos o persiguiendo información.",
  },
];

const teamMembers = [
  { name: "Estrategia & Dirección", role: "Criterio de negocio", desc: "Más de 15 proyectos de transformación tecnológica liderados. Define qué conviene medir, cuánto podría rentar y qué corresponde descartar.", tags: ["Estrategia", "PMO", "ROI"] },
  { name: "Ingeniería IA", role: "Arquitectura ejecutable", desc: "El equipo técnico aterriza el Blueprint en requisitos reales: datos, APIs, integraciones, seguridad y restricciones de operación.", tags: ["Python", "LLMs", "RAG", "APIs"] },
  { name: "Ciencia de Datos", role: "Investigación aplicada · 2 PhD(c)", desc: "Dos candidatos a Doctor en Informática Aplicada evalúan factibilidad, modelos y métricas con rigor antes de recomendar inversión.", tags: ["Machine Learning", "Optimización", "Papers"] },
  { name: "Implementación & Ops", role: "Ejecución opcional", desc: "Si el cliente decide construir con ETIIA, conecta el Blueprint con ERP, CRM, documentos y flujos existentes sin volver a estimar desde cero.", tags: ["DevOps", "ERP", "Integración"] },
  { name: "Diseño & Producto", role: "Adopción real", desc: "El Blueprint considera quién usará la solución y cómo se incorpora a la operación sin depender de fe ni de capacitaciones eternas.", tags: ["UX", "Producto", "Adopción"] },
];

export default function HomeV2() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://etiia.com/#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Qué compra una empresa cuando contrata a ETIIA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El producto central de ETIIA es el Blueprint: un plano ejecutable con alcance, costos, plazos, riesgos y ROI para decidir si conviene invertir en IA o automatización."
                }
              },
              {
                "@type": "Question",
                "name": "¿La conversación inicial tiene costo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. La conversación inicial es gratuita y sirve para decidir si existen antecedentes suficientes para abrir un diagnóstico. Si el caso no amerita IA, ETIIA lo comunica con claridad."
                }
              },
              {
                "@type": "Question",
                "name": "¿ETIIA obliga a contratar la implementación?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. El Blueprint es propiedad del cliente y puede ejecutarlo con ETIIA, con su equipo interno o con otro proveedor."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué tipo de casos prioriza ETIIA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Casos donde una decisión operacional cara se hace a mano y puede medirse en pesos: foco comercial, retención, asignación de presupuesto, backoffice o atención repetitiva."
                }
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://etiia.com/#diagnostico-proceso",
            "name": "Cómo funciona el embudo ETIIA",
            "description": "Antes de entrar al proceso, una conversación inicial gratuita de 20 minutos permite decidir si existen antecedentes suficientes para avanzar. Si corresponde, el embudo tiene tres fases: diagnóstico gratuito, Blueprint pagado e implementación opcional.",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "CLP", "value": "0" },
            "step": [
              { "@type": "HowToStep", "position": 1, "name": "Diagnóstico gratuito", "text": "Se evalúa si el caso tiene una decisión o tarea cara, repetitiva y medible en pesos.", "url": "https://etiia.com/#diagnostico" },
              { "@type": "HowToStep", "position": 2, "name": "Blueprint ETIIA", "text": "Se diseña el plano ejecutable con alcance, costos, plazos, riesgos y ROI.", "url": "https://etiia.com/#blueprint" },
              { "@type": "HowToStep", "position": 3, "name": "Implementación opcional", "text": "El cliente decide si ejecuta el plano con ETIIA, con su equipo o con otro proveedor.", "url": "https://etiia.com/#fases" }
            ]
          })
        }}
      />

      {/* HERO */}
      <section
        className="pb-16 md:pb-20 bg-white relative overflow-hidden"
        style={{ paddingTop: "clamp(8.25rem, 9vw, 10rem)" }}
        aria-label="Propuesta principal"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" aria-hidden="true" />
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-12">
            <div className="mx-auto max-w-5xl text-center">
              <div className="fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-7">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  Consultoría de IA B2B · Chile y Latam
                </p>
              </div>

              <h1 className="mx-auto max-w-5xl text-3xl sm:text-5xl xl:text-[4.35rem] font-black tracking-normal text-[#0F172A] leading-[1.08] sm:leading-[1.02] mb-6 fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                Te entregamos el plano de ingeniería antes de que gastes un peso en construir.
              </h1>

              <div className="mx-auto max-w-3xl mb-8 fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
                <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-5">
                  <span className="font-bold text-blue-700">El Blueprint ETIIA mapea proceso, alcance, costos y ROI de tu proyecto de IA.</span>{" "} Un documento ejecutable para decidir con números — lo implementes con tu equipo o con el nuestro.
                </p>
                <p className="border-l-4 border-blue-600 bg-blue-50/70 px-4 py-3 text-sm text-[#0F172A] font-semibold leading-relaxed shadow-sm shadow-blue-900/5">
                  <span className="font-black text-blue-700">Primero conversamos.</span>{" "} Revisamos si existen antecedentes suficientes; si no hay valor medible, no recomendamos avanzar con tecnología.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start justify-center gap-3 fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                <div className="flex w-full flex-col items-center gap-1.5 sm:w-auto">
                  <a href={CTA_PRIMARIO_WA} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 btn-pulse">
                    {CTA_PRIMARIO} <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-xs font-normal text-slate-400">20 min · sin compromiso</span>
                </div>
                <Link href="#blueprint" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5">
                  Ver qué trae el Blueprint
                </Link>
              </div>
            </div>

            {/* Tira de dolores — texto escaneable, visible en mobile y desktop (brief §2.1) */}
            <div className="mx-auto max-w-4xl fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
              <div className="rounded-[1.35rem] border border-slate-200 bg-slate-50/70 p-5 md:p-7">
                <p className="mb-4 text-center text-sm font-black uppercase tracking-widest text-blue-700 sm:text-left">
                  ¿Te suena alguno de estos?
                </p>
                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {[
                    "Clientes que se van y nadie alcanza a retenerlos",
                    "Presupuesto que se reparte a ojo, no donde rinde",
                    "Horas caras en trabajo manual que se repite",
                    "Errores operacionales que vuelven mes a mes",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-[#0F172A]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNALS */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-100" aria-labelledby="senales-title">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto mb-8 max-w-4xl text-center md:mb-10">
              <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">Antes del Blueprint</p>
              <h2 id="senales-title" className="text-3xl md:text-5xl font-black tracking-normal text-[#0F172A] leading-tight mb-5">
                Antes del Blueprint: las señales.
              </h2>
              <p className="mx-auto max-w-3xl text-slate-500 leading-relaxed text-base md:text-lg">
                <span className="font-bold text-blue-700">No conviene partir implementando tecnología.</span>{" "}
                Cuando estas señales se repiten, primero hay que poner número a lo que cuesta resolverlo a mano — y recién ahí decidir si vale la pena automatizar.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                {/* Primario solo en desktop: en mobile lo entrega el auto-diagnóstico de abajo */}
                <a href={CTA_PRIMARIO_WA} target="_blank" rel="noopener noreferrer" className="hidden lg:inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-900/20 hover:-translate-y-0.5">
                  {CTA_PRIMARIO} <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="#blueprint" className="inline-flex items-center justify-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5">
                  Ver qué trae el Blueprint
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto max-w-3xl">
              {/* Mobile / tablet: auto-diagnóstico interactivo (brief §3.3) */}
              <div className="rounded-[1.35rem] border border-slate-200 bg-white p-5 shadow-[0_30px_90px_-52px_rgba(15,23,42,0.55)] md:p-7 lg:hidden">
                <SignalSelfCheck />
              </div>
              {/* Desktop: PNG original de la nube con lupa */}
              <div className="hidden overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_30px_90px_-52px_rgba(15,23,42,0.55)] lg:block">
                <WordCloudMagnifier />
              </div>
              <p className="mx-auto mt-4 max-w-5xl px-4 text-center text-[11px] leading-relaxed text-slate-400 sm:px-0">
                <span className="font-bold text-slate-500">Referencias:</span>{" "}
                McKinsey, <em>The State of AI</em>; BCG, <em>Flipping the Odds of Digital Transformation Success</em>; MIT Sloan Management Review &amp; BCG, <em>Artificial Intelligence in Business Gets Real</em>; IBM, <em>AI Adoption Challenges</em>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BLUEPRINT */}
      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-100" id="blueprint">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 lg:space-y-10">
            <Reveal>
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">El entregable</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-normal text-[#0F172A] leading-tight mb-5">
                  Blueprint ETIIA: el documento que queda en tus manos.
                </h2>
                <p className="text-slate-500 leading-relaxed mb-5">
                  Recibes un documento de proyecto con lo necesario para decidir: qué construir, cuánto cuesta, cuánto podría retornar, qué riesgos trae y cómo medir si funcionó.
                </p>
                <div className="mx-auto mb-6 max-w-2xl bg-blue-50/70 border border-blue-100 rounded-xl p-4 text-left">
                  <p className="text-sm font-black text-[#0F172A] mb-2">Nuestra promesa</p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    El Blueprint es tuyo: lo puedes ejecutar con ETIIA, con tu equipo o con otro proveedor, sin rehacer el diagnóstico.
                  </p>
                </div>
                <a href={CTA_PRIMARIO_WA} target="_blank" rel="noopener noreferrer" className={ctaPrimarioClass}>
                  {CTA_PRIMARIO} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mx-auto max-w-5xl bg-white border border-slate-200 rounded-[1.35rem] p-4 md:p-5 shadow-2xl shadow-slate-900/10">
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                  <div className="border-b border-slate-200 px-5 py-4 flex items-center justify-between gap-4 bg-slate-50/80">
                    <div>
                      <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-1">Documento ejecutable</p>
                      <h3 className="text-xl font-black text-[#0F172A]">Blueprint ETIIA</h3>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-200 rounded-full px-3 py-1">ROI</span>
                  </div>
                  <div className="grid md:grid-cols-2">
                    <div className="p-5 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50/80">
                      <p className="text-xs font-black text-[#0F172A] mb-3">Índice del entregable</p>
                      <div className="space-y-2">
                        {blueprintOutline.map((item, idx) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-slate-600">
                            <span className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold text-blue-700">{idx + 1}</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4 mb-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-blue-700 mb-1">Resumen ejecutivo</p>
                        <p className="text-sm font-bold text-[#0F172A]">Problema, inversión, retorno esperado y recomendación para decidir.</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {[
                          ["Base actual", "$"],
                          ["Meta", "ROI"],
                          ["Payback", "Meses"],
                          ["Riesgo", "Plan"],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-lg border border-slate-200 p-3">
                            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{label}</p>
                            <p className="text-lg font-black text-[#0F172A]">{value}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3">
                        {blueprintIncludes.slice(0, 4).map((item) => (
                          <div key={item} className="flex gap-3 items-start text-sm text-slate-600">
                            <BadgeDollarSign className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* APPLICATION AREAS */}
      <section className="py-24 bg-white border-y border-slate-100" id="ambitos-blueprint">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto mb-14 max-w-5xl text-center">
              <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">Qué puede cubrir el Blueprint</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#0F172A] leading-tight">
                El Blueprint convierte señales frecuentes en flujos, datos y decisiones concretas.
              </h2>
              <div className="mx-auto mt-5 max-w-4xl space-y-3 text-slate-500 leading-relaxed">
                <p>
                  <span className="font-bold text-blue-700">Estos son algunos de los frentes más frecuentes:</span>{" "}
                  ERP/CRM/contabilidad, documentación, datos personales, alertas, indicadores, embudo comercial y automatización entre áreas.
                </p>
                <p>
                  <span className="font-bold text-blue-700">No son los únicos.</span>{" "}
                  El Blueprint revisa otros procesos según el caso y prioriza por impacto y factibilidad, no por una herramienta de moda.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {coverage.map((s, idx) => (
              <Reveal key={s.title} delay={0.08 * (idx + 1)}>
                <div className="bg-white border border-slate-200 rounded-2xl p-7 lg:p-8 h-full flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#0F172A] tracking-tight mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mx-auto mt-10 max-w-5xl bg-white border border-slate-200 rounded-2xl p-6 md:px-8 flex flex-col items-center justify-center gap-6 text-center shadow-sm">
              <div className="flex flex-col items-center gap-5 text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-blue-400">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                  <path d="M6 18a4 4 0 0 1-1.967-.516" />
                  <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                </svg>
              </div>
                <div>
                <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-2">Cuando el equipo interno ejecuta</p>
                <h3 className="text-xl font-black text-[#0F172A] tracking-tight mb-2">UpSkilling & ReSkilling en IA</h3>
                <p className="mx-auto max-w-2xl text-sm text-slate-500 leading-relaxed">
                  Capacitamos equipos para que usen IA con criterio, alineado a tu negocio. En tu oficina, con tus datos y tus procesos.
                </p>
              </div>
              </div>
              <a href={CTA_PRIMARIO_WA} target="_blank" rel="noopener noreferrer" className={`group shrink-0 ${ctaPrimarioClass}`}>
                {CTA_PRIMARIO} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DECISION */}
      <section className="py-24 bg-slate-50 border-y border-slate-100" id="enfoque">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto mb-14 max-w-5xl text-center">
              <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">Para decidir con números</p>
              <h2 className="text-4xl font-black tracking-tight text-[#0F172A] mb-6 leading-tight">
                Con el Blueprint puedes decidir con información suficiente.
              </h2>
              <p className="mx-auto max-w-3xl text-slate-500 leading-relaxed">
                <span className="font-bold text-blue-700">Ordena la inversión antes de comprometer presupuesto.</span>{" "} El Blueprint muestra qué justifica avanzar, qué conviene dejar fuera y qué tendría que pasar para que el proyecto se pague.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Si se justifica construir",
                desc: "El caso queda medido contra una línea base, una meta y un retorno esperado en pesos.",
              },
              {
                title: "Qué construir primero",
                desc: "El alcance se separa por fases para evitar proyectos grandes que no llegan a producción.",
              },
              {
                title: "Con qué equipo ejecutarlo",
                desc: "Puedes avanzar con ETIIA, con tu equipo interno o pedir cotizaciones con un punto de partida claro.",
              },
            ].map((item, idx) => (
              <Reveal key={item.title} delay={0.08 * (idx + 1)}>
                <div className="bg-white border border-slate-200 rounded-2xl p-7 h-full">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mb-5" />
                  <h3 className="text-lg font-black text-[#0F172A] tracking-tight mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
              <a href={CTA_PRIMARIO_WA} target="_blank" rel="noopener noreferrer" className={ctaPrimarioClass}>
                {CTA_PRIMARIO} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEMOS */}
      <section className="py-24 bg-white" id="soluciones">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">Evidencia técnica</p>
            <div className="mx-auto mb-10 max-w-4xl text-center">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] leading-tight">
                Demos que puedes probar antes de comprar.
              </h2>
              <div className="mx-auto mt-5 flex max-w-3xl flex-col gap-2">
                <p className="text-slate-500 text-lg">
                  Úsalas como referencia concreta de lo que el Blueprint puede aterrizar: agentes, automatización, modelos y flujos integrados a sistemas de negocio.
                </p>
                <p className="text-sm text-blue-600 font-semibold mt-1">
                  Mostrando 3 de{" "}
                  <Link href="/demos" className="underline underline-offset-2 hover:text-blue-800 transition-colors">
                    9 demos disponibles
                  </Link>
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={0.1 * (i + 1)}>
                <div className="bg-white border border-slate-200 rounded-2xl p-7 h-full flex flex-col hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <span className="text-xs text-blue-700 font-bold uppercase tracking-wider mt-0.5">{p.industria}</span>
                    {p.isAgent && (
                      <span className="inline-flex shrink-0 items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        Agente
                      </span>
                    )}
                  </div>
                  <p className="text-base text-[#0F172A] font-semibold leading-snug mb-4">{p.problema}</p>
                  <h3 className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-500 tracking-tight mb-2">{p.nombre}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-grow mb-6">{p.desc}</p>
                  <Link href={`/demos/${p.slug}`} className="group/btn flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 border-2 border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 px-3 py-2.5 rounded-lg transition-all">
                    Ver demo <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mx-auto mt-12 max-w-5xl bg-[#0B1121] border border-slate-800/80 rounded-2xl p-8 flex flex-col items-center justify-center gap-8 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 10% -20%, rgba(29, 78, 216, 0.3) 0%, transparent 60%)" }} aria-hidden="true" />
              <div className="relative z-10 text-center">
                <h4 className="text-xl font-black text-white tracking-tight mb-2">¿No ves tu caso exacto?</h4>
                <p className="text-sm text-slate-400 leading-relaxed">La conversación parte por el costo de la operación, no por el nombre de la herramienta.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center shrink-0 relative z-10">
                <Link href="/demos" className="text-sm text-slate-300 hover:text-white font-semibold transition-colors">
                  Ver todas las demos
                </Link>
                <a href={CTA_PRIMARIO_WA} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-900/20">
                  {CTA_PRIMARIO} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FUNNEL */}
      <section className="py-20 md:py-24 bg-slate-50 border-y border-slate-100" id="fases">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">Proceso</p>
            <div className="mx-auto mb-14 max-w-4xl text-center">
              <h2 className="text-3xl md:text-5xl font-black tracking-normal text-[#0F172A] leading-tight">
                Avanzas solo cuando hay suficiente claridad para seguir.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-slate-500 leading-relaxed">
                <span className="font-bold text-blue-700">Primero conversamos.</span>{" "} Si existen antecedentes suficientes, hacemos un diagnóstico gratis; después diseñamos el Blueprint. <span className="font-bold text-blue-700">Con ese documento en mano,</span>{" "} decides si construir, cuándo y con quién.
              </p>
            </div>
          </Reveal>

          {/* Conversación — bloque previo al embudo */}
          <Reveal>
            <div className="flex items-start gap-4 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/50 p-5 md:p-6 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 flex items-center justify-center shrink-0 shadow-sm">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-lg font-black text-[#0F172A] tracking-tight">Antes de cualquier fase</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-white border border-blue-100 px-2.5 py-1 rounded-full">20 min · sin costo</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">Una conversación breve para entender la prioridad de negocio y ver si existen antecedentes suficientes. Si no se justifica avanzar, lo comunicamos con claridad. No es un servicio ni una fase: es el filtro para decidir si tiene sentido seguir.</p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5 items-stretch relative">
            <div className="hidden md:block absolute top-1/2 left-8 right-8 h-px bg-slate-200" aria-hidden="true" />
            {funnelSteps.map((step, idx) => {
              const isCore = idx === 1;
              return (
                <Reveal key={step.title} delay={0.08 * (idx + 1)}>
                  <div className={`rounded-2xl p-6 md:p-7 h-full flex flex-col gap-5 transition-all relative z-10 ${isCore ? "bg-[#0F172A] text-white border border-[#0F172A] shadow-2xl shadow-blue-900/20 md:-mt-5 md:mb-5" : "bg-white border border-slate-200 text-[#0F172A] shadow-sm"}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${isCore ? "bg-white/10 border-white/15 [&_svg]:text-white" : "bg-blue-50 border-blue-100"}`}>
                        {step.icon}
                      </div>
                      <span className={`text-[11px] font-black uppercase tracking-widest ${isCore ? "text-blue-200" : "text-slate-400"}`}>Fase {step.fase}</span>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between gap-3 mb-2">
                        <h3 className="text-xl font-black tracking-tight">{step.title}</h3>
                        <span className={`text-xs font-bold border px-2.5 py-1 rounded-full ${isCore ? "text-white bg-blue-600 border-blue-500" : "text-blue-700 bg-blue-50 border-blue-100"}`}>{step.price}</span>
                      </div>
                      <p className={`text-sm leading-relaxed mb-4 ${isCore ? "text-slate-300" : "text-slate-500"}`}>{step.desc}</p>
                      <p className={`text-sm font-semibold leading-relaxed ${isCore ? "text-white" : "text-[#0F172A]"}`}>{step.deliverable}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-white" id="equipo">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto mb-14 max-w-5xl text-center">
              <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">El equipo</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] leading-tight">
                Un buen Blueprint necesita negocio, datos e ingeniería en la misma mesa.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-slate-500 leading-relaxed">
                <span className="font-bold text-blue-700">Negocio, datos e ingeniería alineados desde el inicio.</span>{" "} El Blueprint lo diseña un equipo con <strong className="text-[#0F172A] font-semibold">2 PhD(c) en IA</strong> mirando el mismo número: cuánto puede retornar.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                img: "/bernardita-nueva.jpg",
                name: "Bernardita Mery",
                badge: "Co-fundadora · CEO",
                desc: "Ingeniera Comercial UC y Máster Ejecutivo en Inteligencia Artificial. Entra al caso desde negocio: qué prioridad está en juego, cuánto cuesta y qué número justificaría avanzar.",
                tags: ["Inteligencia de Negocios", "Estrategia Comercial", "IA Aplicada"],
                linkedin: "https://www.linkedin.com/in/bmeryu/",
              },
              {
                img: "/pablo.jpg",
                name: "Pablo Olivares",
                badge: "Co-fundador · CAIO",
                desc: "Candidato a Doctor en Informática Aplicada, con trayectoria en industria. Diseña sistemas de IA y agentes robustos cuando el caso realmente los necesita.",
                tags: ["Inteligencia Artificial", "Machine Learning", "Sistemas Cognitivos"],
                linkedin: "https://www.linkedin.com/in/pablo-e-olivares-z%C3%BA%C3%B1iga-01337933/",
              },
              {
                img: "/diego.jpg",
                name: "Diego Monsalves",
                badge: "CTO · Ingeniería de Modelos",
                desc: "Candidato a Doctor en Informática Aplicada. Evalúa la factibilidad técnica y traduce el Blueprint a requisitos que un equipo de ingeniería puede ejecutar.",
                tags: ["Machine Learning", "Investigación IA", "LLMs"],
                linkedin: "https://www.linkedin.com/in/505748216/",
              },
            ].map((f, i) => (
              <Reveal key={f.name} delay={0.1 * (i + 1)}>
                <div className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col items-center text-center hover:border-blue-200 hover:shadow-md transition-all h-full">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 mb-4 ring-2 ring-slate-100">
                    <Image src={f.img} alt={f.name} fill sizes="96px" className="object-cover" />
                  </div>
                  <span className="inline-block text-xs text-blue-700 font-bold uppercase tracking-wider bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full mb-2">{f.badge}</span>
                  <h3 className="text-xl font-black text-[#0F172A] tracking-tight mb-1 flex items-center gap-2">
                    {f.name}
                    <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors" aria-label={`LinkedIn de ${f.name}`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{f.desc}</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-auto">
                    {f.tags.map((t) => (
                      <span key={t} className="text-xs bg-slate-100 rounded-full px-3 py-1 text-slate-500 font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 sm:flex bg-slate-50 border-2 border-blue-50 rounded-2xl p-5 shadow-lg shadow-blue-900/10 sm:divide-x divide-slate-100 gap-y-5 sm:gap-y-0 mb-12">
              {[
                { value: "+10", label: "Profesionales activos" },
                { value: "5", label: "Áreas técnicas" },
                { value: "2", label: "PhD(c) en IA" },
                { value: "1", label: "Blueprint común" },
              ].map((s) => (
                <div key={s.label} className="flex-1 text-center px-3">
                  <p className="text-2xl md:text-[28px] font-black text-[#0F172A] tabular-nums leading-none mb-1.5">{s.value}</p>
                  <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-slate-500 leading-tight font-bold">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-6">Especialistas organizados por lo que el Blueprint necesita resolver</p>
          <Carousel items={teamMembers.map((m) => ({ ...m, type: "team" as const }))} />
        </div>
      </section>

      {/* TEAM PROOF */}
      <section className="bg-[#0F172A] py-20 px-6">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-relaxed mb-10">
              &ldquo;Armar un equipo con estrategia, datos, modelos e integración desde cero toma meses. En ETIIA ese equipo ya está en la mesa para diseñar un Blueprint que se pueda ejecutar de verdad.&rdquo;
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Estrategia", "Ciencia de Datos", "Ingeniería IA", "Integración", "Diseño"].map((pill) => (
                <span key={pill} className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />{pill}
                </span>
              ))}
            </div>
            <p className="text-base text-white/50 font-medium">
              La mayoría de los proyectos de IA fallan cuando una de estas áreas llega tarde.
            </p>
          </div>
        </Reveal>
      </section>

      {/* DIAGNOSTIC */}
      <section className="py-24 bg-slate-50 border-y border-slate-100" id="diagnostico">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <div>
                  <p className="text-xs text-blue-700 uppercase tracking-widest font-bold mb-3">Agenda</p>
                  <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0F172A] leading-tight mb-6">
                    Agenda la conversación de 20 minutos.
                  </h2>
                  <p className="text-slate-500 leading-relaxed text-base">
                    <span className="font-bold text-blue-700">Sin costo y sin compromiso.</span>{" "} Salimos con una lectura clara de si existe una oportunidad con valor medible y cuál es el siguiente paso concreto para tu caso.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row sm:items-start justify-center gap-3">
                  <div className="flex w-full flex-col items-center gap-1.5 sm:w-auto">
                    <a href={CTA_PRIMARIO_WA} target="_blank" rel="noopener noreferrer" className={`${ctaPrimarioClass} w-full sm:w-auto`}>
                      {CTA_PRIMARIO} <ArrowRight className="w-4 h-4 text-white" />
                    </a>
                    <span className="text-xs font-normal text-slate-400">20 min · sin compromiso</span>
                  </div>
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-[#0F172A] font-bold px-6 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 text-sm">
                    Ver agenda en Calendly <Calendar className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="mx-auto max-w-3xl bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <DiagnosticoForm />
                <div className="mt-5 flex items-start gap-3 bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 text-left">
                  <div className="bg-emerald-100 p-1.5 rounded-lg text-emerald-700 shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider mb-0.5">Privacidad corporativa</p>
                    <p className="text-[11px] text-emerald-600/90 leading-relaxed font-medium">
                      No entrenamos modelos públicos con la información confidencial de tu empresa.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#0B1121] border border-slate-800/80 p-10 md:p-14 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center gap-8 overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight mb-3">
                ¿Hay una decisión cara que tu equipo sigue resolviendo a mano?
              </h2>
              <p className="mx-auto max-w-2xl text-slate-400 text-sm">
                Partamos con una conversación inicial. Si existen antecedentes suficientes, pasamos al diagnóstico gratis; si hay valor medible, avanzamos al Blueprint.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start justify-center gap-3 shrink-0 relative z-10">
              <div className="flex w-full flex-col items-center gap-1.5 sm:w-auto">
                <a href={CTA_PRIMARIO_WA} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl text-sm shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 transition-all">
                  {CTA_PRIMARIO} <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs font-normal text-slate-400">20 min · sin compromiso</span>
              </div>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-white/15 bg-white/10 text-white font-bold px-8 py-4 rounded-xl text-sm hover:bg-white/15 transition-all">
                Ver agenda en Calendly
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
