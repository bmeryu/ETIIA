"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

/* ── Mapa de intenciones ─────────────────────────────── */
const intentMap: Record<string, { proyecto: string; etapa: string; ctaText: string }> = {
  diagnostico: {
    proyecto: "Quiero evaluar si mi proyecto tiene potencial para aplicar IA.",
    etapa: "exploracion",
    ctaText: "Agendar Diagnóstico IA",
  },
  formacion: {
    proyecto: "Quiero información sobre formación en IA para mi equipo (UpSkilling / ReSkilling in-company).",
    etapa: "idea",
    ctaText: "Solicitar Formación in-company",
  },
  atendeai: {
    proyecto: "Me interesa implementar AtendeAI para automatizar la atención al cliente.",
    etapa: "exploracion",
    ctaText: "Implementar AtendeAI",
  },
  ventaai: {
    proyecto: "Me interesa VentaAI para personalizar ofertas y aumentar el cross-sell.",
    etapa: "exploracion",
    ctaText: "Implementar VentaAI",
  },
  facturai: {
    proyecto: "Me interesa FacturAI para automatizar la lectura y conciliación de facturas.",
    etapa: "exploracion",
    ctaText: "Implementar FacturAI",
  },
  agendai: {
    proyecto: "Me interesa implementar AgendAI para predecir inasistencias y optimizar la agenda.",
    etapa: "exploracion",
    ctaText: "Implementar AgendAI",
  },
  cosechai: {
    proyecto: "Me interesa implementar CosechAI para optimizar el rendimiento y detectar mermas.",
    etapa: "exploracion",
    ctaText: "Implementar CosechAI",
  },
  transcribai: {
    proyecto: "Me interesa implementar TranscribAI para transcribir y analizar reuniones o entrevistas.",
    etapa: "exploracion",
    ctaText: "Implementar TranscribAI",
  },
  "a-medida": {
    proyecto: "Busco desarrollar un flujo de IA o agente personalizado a la medida de mis procesos.",
    etapa: "idea",
    ctaText: "Cotizar Solución a Medida",
  },
};

/* ── Form interno ────────────────────────────────────── */
function FormInner() {
  const params = useSearchParams();
  const interes = params.get("interes") ?? "";
  const preset = intentMap[interes] ?? { proyecto: "", etapa: "", ctaText: "Agendar Diagnóstico IA" };

  const [proyecto, setProyecto] = useState(preset.proyecto);
  const [etapa, setEtapa]     = useState(preset.etapa);
  const [btnText, setBtnText] = useState(preset.ctaText);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Re-sync if the URL changes (e.g. user clicks another button)
  useEffect(() => {
    const p = intentMap[interes] ?? { proyecto: "", etapa: "", ctaText: "Agendar Diagnóstico IA" };
    setProyecto(p.proyecto);
    setEtapa(p.etapa);
    setBtnText(p.ctaText);
  }, [interes]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      nombre:   (form.elements.namedItem("nombre")  as HTMLInputElement).value,
      empresa:  (form.elements.namedItem("empresa") as HTMLInputElement).value,
      email:    (form.elements.namedItem("email")   as HTMLInputElement).value,
      proyecto,
      etapa,
      interes,
      _subject: `ETIIA — ${interes ? interes.toUpperCase() : "Diagnóstico"} — ${(form.elements.namedItem("nombre") as HTMLInputElement).value}`,
    };
    try {
      await fetch("https://formspree.io/f/xjgarjgw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSuccess(true);
    } catch {
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-blue-600" />
        <p className="font-bold text-[#0F172A]">✓ Recibimos tu solicitud.</p>
        <p className="text-sm text-slate-500">Te escribimos en las próximas 24 horas hábiles.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate aria-label="Formulario de diagnóstico">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nombre" className="text-xs text-slate-500 font-medium">Tu nombre</label>
          <input id="nombre" name="nombre" type="text" required placeholder="Ej: Ana Torres" autoComplete="name"
            className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="empresa" className="text-xs text-slate-500 font-medium">Empresa u organización</label>
          <input id="empresa" name="empresa" type="text" required placeholder="Ej: Consultora XYZ" autoComplete="organization"
            className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs text-slate-500 font-medium">Correo de trabajo</label>
        <input id="email" name="email" type="email" required placeholder="ana@empresa.cl" autoComplete="email"
          className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="proyecto" className="text-xs text-slate-500 font-medium">¿Qué necesitas?</label>
        <textarea id="proyecto" name="proyecto" required rows={3}
          value={proyecto}
          onChange={e => setProyecto(e.target.value)}
          placeholder="Ej: Quiero predecir rotación de clientes con datos históricos"
          className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="etapa" className="text-xs text-slate-500 font-medium">¿En qué etapa estás?</label>
        <select id="etapa" name="etapa"
          value={etapa}
          onChange={e => setEtapa(e.target.value)}
          className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
          <option value="">Selecciona una opción</option>
          <option value="idea">Solo tengo la idea</option>
          <option value="exploracion">Estoy explorando opciones</option>
          <option value="curso">Proyecto en curso, necesito orientación</option>
          <option value="detenido">Proyecto detenido, necesito diagnóstico</option>
        </select>
      </div>

      <button type="submit" disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3.5 rounded-lg text-sm transition-colors mt-2 disabled:opacity-60">
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><span>{btnText}</span><ArrowRight className="w-4 h-4" /></>}
      </button>

      <p className="text-xs text-slate-400 leading-relaxed">
        Sin spam. Tus datos se usan solo para coordinar la sesión de diagnóstico. No los compartimos con terceros.
      </p>
    </form>
  );
}

/* ── Export con Suspense (requerido por useSearchParams) */
export default function DiagnosticoForm() {
  return (
    <Suspense fallback={null}>
      <FormInner />
    </Suspense>
  );
}
