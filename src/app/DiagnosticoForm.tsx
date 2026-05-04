"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Loader2, CheckCircle2, Zap, Lock } from "lucide-react";

/* ── Mapa de intenciones ─────────────────────────────── */
const intentMap: Record<string, { proyecto: string; etapa: string; ctaText: string; nombre?: string; isSpecific?: boolean }> = {
  diagnostico: {
    proyecto: "Quiero evaluar si mi proyecto tiene potencial para aplicar IA.",
    etapa: "exploracion",
    ctaText: "Consultar Evaluación Gratuita",
    isSpecific: false,
  },
  formacion: {
    proyecto: "Quiero información sobre formación en IA para mi equipo (UpSkilling / ReSkilling in-company).",
    etapa: "idea",
    ctaText: "Consultar por Formación in-company",
    nombre: "Formación in-company",
    isSpecific: true,
  },
  atendeai: {
    proyecto: "Me interesa implementar AtendeAI para automatizar la atención al cliente.",
    etapa: "exploracion",
    ctaText: "Consultar por AtendeAI",
    nombre: "AtendeAI",
    isSpecific: true,
  },
  ventaai: {
    proyecto: "Me interesa VentaAI para personalizar ofertas y aumentar el cross-sell.",
    etapa: "exploracion",
    ctaText: "Consultar por VentaAI",
    nombre: "VentaAI",
    isSpecific: true,
  },
  facturai: {
    proyecto: "Me interesa FacturAI para automatizar la lectura y conciliación de facturas.",
    etapa: "exploracion",
    ctaText: "Consultar por FacturAI",
    nombre: "FacturAI",
    isSpecific: true,
  },
  agendai: {
    proyecto: "Me interesa implementar AgendAI para predecir inasistencias y optimizar la agenda.",
    etapa: "exploracion",
    ctaText: "Consultar por AgendAI",
    nombre: "AgendAI",
    isSpecific: true,
  },
  cosechai: {
    proyecto: "Me interesa implementar CosechAI para optimizar el rendimiento y detectar mermas.",
    etapa: "exploracion",
    ctaText: "Consultar por CosechAI",
    nombre: "CosechAI",
    isSpecific: true,
  },
  transcribai: {
    proyecto: "Me interesa implementar TranscribAI para transcribir y analizar reuniones o entrevistas.",
    etapa: "exploracion",
    ctaText: "Consultar por TranscribAI",
    nombre: "TranscribAI",
    isSpecific: true,
  },
  lexsearch: {
    proyecto: "Me interesa implementar LexSearch para buscar y analizar documentos legales con precisión semántica.",
    etapa: "exploracion",
    ctaText: "Consultar por LexSearch",
    nombre: "LexSearch",
    isSpecific: true,
  },
  talentparse: {
    proyecto: "Me interesa implementar TalentParse para automatizar el ranking y filtrado de currículums.",
    etapa: "exploracion",
    ctaText: "Consultar por TalentParse",
    nombre: "TalentParse",
    isSpecific: true,
  },
  inspectoai: {
    proyecto: "Me interesa implementar InspectoAI para detectar defectos de manufactura usando visión computacional.",
    etapa: "exploracion",
    ctaText: "Consultar por InspectoAI",
    nombre: "InspectoAI",
    isSpecific: true,
  },
  autorend: {
    proyecto: "Me interesa implementar AutoRend para automatizar la lectura y validación de boletas y rendiciones.",
    etapa: "exploracion",
    ctaText: "Consultar por AutoRend",
    nombre: "AutoRend",
    isSpecific: true,
  },
  "a-medida": {
    proyecto: "Busco desarrollar un flujo de IA o agente personalizado a la medida de mis procesos.",
    etapa: "idea",
    ctaText: "Consultar Solución a Medida",
    nombre: "Solución a Medida",
    isSpecific: true,
  },
};

/* ── Form interno ────────────────────────────────────── */
function FormInner({ presetInteres }: { presetInteres?: string }) {
  const params = useSearchParams();
  const interes = presetInteres || params.get("interes") || "diagnostico";
  const preset = intentMap[interes] || intentMap["diagnostico"];

  const [proyecto, setProyecto] = useState(preset.proyecto);
  const [etapa, setEtapa]     = useState(preset.etapa);
  const [btnText, setBtnText] = useState(preset.ctaText);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sendError, setSendError] = useState(false);

  // Re-sync if the URL changes (e.g. user clicks another button)
  useEffect(() => {
    const p = intentMap[interes] || intentMap["diagnostico"];
    setProyecto(p.proyecto);
    setEtapa(p.etapa);
    setBtnText(p.ctaText);
  }, [interes]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSendError(false);
    const form = e.currentTarget;
    const data = {
      nombre:   (form.elements.namedItem("nombre")  as HTMLInputElement).value,
      empresa:  (form.elements.namedItem("empresa") as HTMLInputElement).value,
      email:    (form.elements.namedItem("email")   as HTMLInputElement).value,
      tamano_empresa: (form.elements.namedItem("tamano_empresa") as HTMLSelectElement).value,
      proyecto, // El servidor recibe la intención correcta siempre
      etapa,
      interes,
      _subject: `ETIIA — ${interes ? interes.toUpperCase() : "Diagnóstico"} — ${(form.elements.namedItem("nombre") as HTMLInputElement).value}`,
    };
    try {
      const res = await fetch("https://formspree.io/f/xjgarjgw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSuccess(true);
        // Tracking de conversión
        if (typeof window !== 'undefined') {
          const w = window as Window & { gtag?: Function; fbq?: Function };
          if (w.gtag) w.gtag('event', 'generate_lead', { event_category: 'lead', event_label: interes, value: 1 });
          if (w.fbq) w.fbq('track', 'Lead', { content_name: interes });
        }
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center animate-in fade-in zoom-in duration-500">
        <CheckCircle2 className="w-12 h-12 text-blue-600" />
        <p className="font-bold text-[#0F172A] text-xl">✓ Solicitud Recibida</p>
        <p className="text-sm text-slate-500">Un especialista de nuestro equipo se contactará en las próximas 24 horas hábiles.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 md:gap-4 relative" noValidate aria-label="Formulario de diagnóstico">
      
      {/* ── BANNER DE CONTEXTO (Solo visible si es específico) ── */}
      {preset.isSpecific && (
        <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 mb-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-600/20 mt-0.5">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-0.5">Solución de Interés</p>
              <h4 className="text-sm font-black text-[#0F172A]">{preset.nombre}</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Hemos pre-configurado tu solicitud para evaluar la viabilidad de implementar esta herramienta en tu operación.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nombre" className="text-xs text-slate-500 font-medium">Tu nombre</label>
          <input id="nombre" name="nombre" type="text" required placeholder="Ej: Ana Torres" autoComplete="name"
            className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="empresa" className="text-xs text-slate-500 font-medium">Empresa</label>
          <input id="empresa" name="empresa" type="text" required placeholder="Ej: Consultora XYZ" autoComplete="organization"
            className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs text-slate-500 font-medium">Correo corporativo</label>
        <input id="email" name="email" type="email" required placeholder="ana@empresa.cl" autoComplete="email"
          className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="telefono" className="text-xs text-slate-500 font-medium">
          Teléfono <span className="text-slate-300">(opcional)</span>
        </label>
        <input id="telefono" name="telefono" type="tel" placeholder="+56 9 XXXX XXXX" autoComplete="tel"
          className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm" />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="tamano_empresa" className="text-xs text-slate-500 font-medium">Tamaño de la empresa</label>
        <select id="tamano_empresa" name="tamano_empresa" required aria-required="true"
          className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
          defaultValue="">
          <option value="">Selecciona una opción</option>
          <option value="1-10">Startup / Menos de 10 personas</option>
          <option value="10-50">Pyme (10–50 personas)</option>
          <option value="50-200">Empresa mediana (50–200 personas)</option>
          <option value="200+">Corporación (más de 200 personas)</option>
        </select>
      </div>

      {/* ── SECCIÓN DINÁMICA: Mostrar campos largos solo si NO hay contexto específico ── */}
      {!preset.isSpecific && (
        <div className="animate-in fade-in duration-500 space-y-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="proyecto" className="text-xs text-slate-500 font-medium">¿Qué necesitas resolver?</label>
            <textarea id="proyecto" name="proyecto" required rows={3}
              value={proyecto}
              onChange={e => setProyecto(e.target.value)}
              placeholder="Ej: 'Queremos automatizar la respuesta a consultas de clientes' o 'Tenemos un proceso manual de 3 personas que podría automatizarse'..."
              className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none shadow-sm" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="etapa" className="text-xs text-slate-500 font-medium">¿En qué etapa estás?</label>
            <select id="etapa" name="etapa" required
              value={etapa}
              onChange={e => setEtapa(e.target.value)}
              className="bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm">
              <option value="">Selecciona una opción</option>
              <option value="idea">Solo tengo la idea</option>
              <option value="exploracion">Estoy explorando opciones</option>
              <option value="curso">Proyecto en curso, necesito orientación</option>
              <option value="detenido">Proyecto detenido, necesito diagnóstico</option>
            </select>
          </div>
        </div>
      )}

      {sendError && (
        <p role="alert" aria-live="assertive" className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2.5 animate-in fade-in">
          Hubo un problema de conexión al enviar el formulario. Por favor, escríbenos directamente a{" "}
          <a href="mailto:hola@etiia.com" className="font-bold underline">hola@etiia.com</a>
        </p>
      )}

      {/* Honeypot anti-spam */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <button type="submit" disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md shadow-blue-900/20 hover:-translate-y-0.5 mt-2 disabled:opacity-60 disabled:hover:translate-y-0">
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><span>{btnText}</span><ArrowRight className="w-4 h-4" /></>}
      </button>
      
      <p className="text-center text-[10px] text-slate-400 mt-1">
        Sin compromiso. Sin spam. Te responderemos en menos de 24 horas.
      </p>
    </form>
  );
}

/* ── Export con Suspense (requerido por useSearchParams) */
export default function DiagnosticoForm({ presetInteres }: { presetInteres?: string }) {
  return (
    <Suspense fallback={null}>
      <FormInner presetInteres={presetInteres} />
    </Suspense>
  );
}
