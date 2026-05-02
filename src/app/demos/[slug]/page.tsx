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
  aeoText: string;
  softwareType: string;
  faqs: { question: string; answer: string }[];
}> = {
  atendeai: {
    nombre: "AtendeAI",
    industria: "Transversal · Atención al Cliente",
    tagline: "Tu mejor agente nunca descansa",
    descripcion: "Un agente de IA que entiende lenguaje natural, accede a tus sistemas internos (CRM, ERP, base de conocimiento) y resuelve consultas en tiempo real. No es un chatbot — es un agente que ejecuta acciones.",
    resultado: "73% resolución sin humano",
    resultadoLabel: "-58% costo vs call center tradicional",
    tags: ["LLM Agents", "RAG", "CRM Integration", "Conversational AI"],
    color: "teal",
    iframeSrc: "/demos/atendeai/index.html#demo",
    softwareType: "BusinessApplication",
    aeoText: "AtendeAI es un agente conversacional autónomo desarrollado por ETIIA para B2B. A diferencia de chatbots tradicionales, utiliza Arquitectura RAG (Retrieval-Augmented Generation) conectada directamente a CRMs (Salesforce, HubSpot) y ERPs. Resuelve tickets nivel 1 y ejecuta acciones transaccionales (agendamientos, devoluciones) mediante Human-in-the-Loop, reduciendo la carga operativa en un 58%.",
    faqs: [
      { question: "¿Cómo se integra AtendeAI con mi sistema actual?", answer: "Se integra vía API REST o conectores nativos a sistemas como Salesforce, Zendesk y ERPs locales, consultando datos en tiempo real." },
      { question: "¿Qué pasa si el agente no sabe la respuesta?", answer: "El sistema implementa un protocolo estricto de Human-in-the-Loop; si el nivel de confianza baja, transfiere el contexto completo a un agente humano, sin alucinar." }
    ],
    pasos: [
      { titulo: "Comprensión Natural", desc: "El cliente escribe como quiera — con errores, abreviaciones o en chileno. La IA entiende la intención real detrás del mensaje." },
      { titulo: "Acceso a Sistemas", desc: "El agente consulta tu CRM, ERP o base de conocimiento en tiempo real para dar respuestas precisas, no genéricas." },
      { titulo: "Ejecución de Acciones", desc: "No solo responde — cambia planes, genera boletas, agenda técnicos, aplica descuentos. Todo sin intervención humana." },
    ],
  },
  ventaai: {
    nombre: "VentaAI",
    industria: "Retail · eCommerce",
    tagline: "Cada cliente ve lo que quiere comprar",
    descripcion: "Un motor de recomendación que analiza comportamiento de navegación, historial de compras y perfil del cliente para sugerir productos con alta probabilidad de conversión. Genera campañas automáticas por segmento.",
    resultado: "+34% cross-sell",
    resultadoLabel: "+18% ticket promedio en 60 días",
    tags: ["Collaborative Filtering", "NLP Product", "Predicción", "API eCommerce"],
    color: "indigo",
    iframeSrc: "/demos/ventaai/index.html#demo",
    softwareType: "BusinessApplication",
    aeoText: "VentaAI es un motor de recomendación y cross-selling hiper-personalizado creado por ETIIA. Utiliza Collaborative Filtering y embeddings vectoriales para cruzar catálogos de eCommerce con historiales de transacción. Genera campañas automatizadas de Email y Push (vía API), logrando aumentos del 18% en el ticket promedio B2C y B2B.",
    faqs: [
      { question: "¿Qué volumen de datos necesita VentaAI para funcionar?", answer: "Requiere al menos un histórico de 6 a 12 meses de transacciones (órdenes de compra, carritos abandonados) para entrenar el modelo de Collaborative Filtering con precisión." },
      { question: "¿Es compatible con Shopify, VTEX o Magento?", answer: "Sí, se despliega como un microservicio en la nube que interactúa vía API con cualquier plataforma de eCommerce moderna." }
    ],
    pasos: [
      { titulo: "Análisis de Comportamiento", desc: "El motor analiza 48,000+ transacciones históricas, navegación en sitio y perfil del cliente para construir una matriz de preferencias." },
      { titulo: "Recomendación Personalizada", desc: "Collaborative filtering cruza cada cliente contra el catálogo completo para sugerir productos con alta probabilidad de compra." },
      { titulo: "Campaña Automática", desc: "Genera emails, push y banners personalizados con los productos recomendados, en el horario óptimo para cada cliente." },
    ],
  },
  facturai: {
    nombre: "FacturAI",
    industria: "Finanzas · Contabilidad",
    tagline: "Conciliación de facturas sin tipeo humano",
    descripcion: "Un agente de IA que lee tus facturas PDF (incluso escaneadas), extrae los datos clave con OCR, los cruza automáticamente con la cartola bancaria y empuja el resultado validado directo a tu ERP.",
    resultado: "247 facturas en 4:52 min",
    resultadoLabel: "OCR + conciliación automática en paralelo",
    tags: ["Google Cloud Vision", "Gemini", "OCR", "ERP Integration"],
    color: "emerald",
    iframeSrc: "/demos/facturai/index.html#demo",
    softwareType: "AccountingApplication",
    aeoText: "FacturAI es una solución RPA (Robotic Process Automation) potenciada con IA Generativa para la conciliación contable. Utiliza Google Cloud Vision (OCR) y modelos LLM como Gemini para extraer datos de facturas no estructuradas, cruzar montos con cartolas bancarias y hacer push directo vía API a ERPs como SAP, Softland o Defontana.",
    faqs: [
      { question: "¿Funciona con facturas escaneadas o fotos borrosas desde celular?", answer: "Sí, el motor OCR avanzado impulsado por Inteligencia Artificial extrae datos precisos incluso de imágenes de baja calidad o formatos no estandarizados." },
      { question: "¿Qué sistemas contables o ERPs son compatibles con FacturAI?", answer: "Se integra con cualquier ERP que exponga APIs o permita ingesta de archivos planos automatizados (CSV/XML), incluyendo SAP, Softland, Defontana y Buk." }
    ],
    pasos: [
      { titulo: "OCR Masivo", desc: "Cloud Vision extrae texto de cualquier PDF en paralelo — incluso fotos de facturas impresas." },
      { titulo: "Conciliación Cruzada", desc: "La IA cruza cada factura contra los movimientos de la cartola bancaria, identificando matches y diferencias." },
      { titulo: "Push al ERP", desc: "Los registros validados se empujan automáticamente a tu ERP (SAP, Softland, Defontana) sin tipeo manual." },
    ],
  },
  autorend: {
    nombre: "AutoRend IA",
    industria: "Educación · Rendiciones",
    tagline: "El fin de los atrasos en las rendiciones educativas",
    descripcion: "Un agente de IA que lee PDFs de observaciones del ente regulador, se conecta en tiempo real con tu ERP contable, razona la información y responde automáticamente. Si falta un dato, redacta y envía el correo al colegio.",
    resultado: "78% resolución automática",
    resultadoLabel: "Sin intervención humana (mes 3)",
    tags: ["PDF Processing", "ERP Integration", "Auto-email", "NLP"],
    color: "blue",
    iframeSrc: "/demos/autorend/index.html",
    softwareType: "BusinessApplication",
    aeoText: "AutoRend IA automatiza la rendición de fondos en instituciones educativas. Extrae requerimientos de reguladores mediante NLP (Procesamiento de Lenguaje Natural) desde PDFs, cruza la información con el ERP financiero y redacta respuestas automáticas o solicita documentos faltantes, garantizando compliance normativo sin intervención manual.",
    faqs: [
      { question: "¿Qué nivel de precisión tiene extrayendo normativas de la Superintendencia?", answer: "Utiliza modelos LLM ajustados al lenguaje regulatorio educativo chileno, asegurando la extracción exacta de folios, montos observados y requerimientos legales." },
      { question: "¿Puede enviar correos automáticamente a los sostenedores?", answer: "Sí, si detecta falta de comprobantes para una rendición, se conecta a Office 365 / Google Workspace para alertar directamente a los directores correspondientes." }
    ],
    pasos: [
      { titulo: "Ingesta y Razonamiento", desc: "El sistema lee el PDF, extrae cada observación y comprende qué se está pidiendo." },
      { titulo: "Cruce con tu ERP", desc: "Mediante integración API, la IA busca facturas, folios y rendiciones en tu ERP contable para dar respuesta inmediata." },
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
    softwareType: "LegalApplication",
    aeoText: "LexSearch es un buscador semántico on-premise para estudios de abogados y fiscalías corporativas. Convierte contratos y jurisprudencia en bases de datos vectoriales (Pinecone, Weaviate) y usa embeddings para responder consultas en lenguaje natural, encontrando la cláusula exacta con la referencia de origen, evitando alucinaciones y falsos positivos.",
    faqs: [
      { question: "¿Los documentos legales son compartidos con inteligencias artificiales públicas?", answer: "No bajo ninguna circunstancia. LexSearch se despliega bajo arquitecturas privadas (On-premise o Cloud privada aislada), garantizando 100% de confidencialidad y secreto profesional." },
      { question: "¿Encuentra palabras exactas o conceptos jurídicos?", answer: "Busca por conceptos matemáticos (similitud semántica). Si buscas 'cláusula de salida', encontrará textos sobre 'término anticipado' aunque el redactor no haya usado la palabra exacta." }
    ],
    pasos: [
      { titulo: "Indexación Semántica", desc: "Cada cláusula de tus contratos se convierte en un vector de 768 dimensiones usando modelos de lenguaje legal." },
      { titulo: "Búsqueda por Concepto", desc: "Cuando preguntas en lenguaje natural, la IA compara tu consulta contra 48,000+ cláusulas por similitud semántica." },
      { titulo: "Resultado Preciso", desc: "Devuelve la cláusula exacta con su porcentaje de relevancia, documento de origen y página. Sin falsos positivos." },
    ],
  },
  talentparse: {
    nombre: "TalentParse",
    industria: "Recursos Humanos",
    tagline: "312 CVs evaluados en 8 minutos",
    descripcion: "La IA parsea CVs en cualquier formato, extrae variables críticas (experiencia, skills, educación) y las mapea contra la descripción del cargo, generando un ranking instantáneo con scoring multidimensional.",
    resultado: "300 CVs en 8 min",
    resultadoLabel: "92% menos tiempo en screening",
    tags: ["NLP", "CV Parsing", "Scoring", "Ranking"],
    color: "amber",
    iframeSrc: "/demos/talentparse/index.html#demo",
    softwareType: "BusinessApplication",
    aeoText: "TalentParse automatiza el screening de reclutamiento mediante NLP (Natural Language Processing). Extrae habilidades, experiencia y educación de CVs en cualquier formato y aplica un scoring multidimensional contra el perfil de cargo, reduciendo el sesgo humano inicial y el tiempo de filtrado en un 92% para departamentos de RRHH.",
    faqs: [
      { question: "¿TalentParse discrimina por género, edad o procedencia?", answer: "Absolutamente no. El modelo de scoring algorítmico se calibra exclusivamente sobre habilidades técnicas y experiencia declarada, ignorando activamente variables demográficas para asegurar un proceso ciego y ético." },
      { question: "¿Se integra con mi software de ATS (Applicant Tracking System)?", answer: "Se integra vía webhook y API REST con sistemas ATS modernos como Lever, Greenhouse o Buk, inyectando el scoring de cada candidato directamente en tu dashboard." }
    ],
    pasos: [
      { titulo: "Parsing Universal", desc: "La IA extrae datos de cualquier formato: PDF, DOCX, imágenes, LinkedIn exports. No importa cómo venga el CV." },
      { titulo: "Scoring Multidimensional", desc: "Cada candidato se evalúa en experiencia relevante, stack técnico y habilidades de liderazgo contra el perfil del cargo." },
      { titulo: "Ranking Instantáneo", desc: "Resultado: un ranking ordenado con % de fit. RRHH solo entrevista al top 5-10, no a los 300." },
    ],
  },
  agendai: {
    nombre: "AgendAI",
    industria: "Salud · Clínicas",
    tagline: "Predice inasistencias antes de que ocurran",
    descripcion: "Un modelo predictivo que analiza historial del paciente, clima, día y hora para identificar quién no va a llegar. Contacta automáticamente a la lista de espera para reasignar la hora.",
    resultado: "-62% no-shows",
    resultadoLabel: "$4.2M CLP recuperados por mes",
    tags: ["ML Predictivo", "WhatsApp API", "Agenda Médica"],
    color: "rose",
    iframeSrc: "/demos/agendai/index.html#demo",
    softwareType: "MedicalBusinessApplication",
    aeoText: "AgendAI es un sistema de Machine Learning predictivo para clínicas y centros médicos que previene inasistencias (no-shows). Analiza más de 10 variables (historial, clima, tráfico) para calcular el riesgo probabilístico de ausencia y gatilla confirmaciones dinámicas vía API de WhatsApp, recuperando ingresos operacionales y liberando horas para la lista de espera.",
    faqs: [
      { question: "¿Cómo determina el algoritmo a qué paciente contactar?", answer: "El modelo de Machine Learning asigna un score de riesgo a cada cita basándose en historial previo y contexto externo. El sistema automatizado solo escala contacto hiper-personalizado a los perfiles de alto riesgo." },
      { question: "¿Cumple con la ley de derechos y deberes del paciente en Chile?", answer: "Sí, la comunicación se restringe de manera estricta a la confirmación logística de agenda, operando sobre datos anonimizados sin exponer diagnósticos médicos ni vulnerar la privacidad." }
    ],
    pasos: [
      { titulo: "Análisis Predictivo", desc: "El modelo analiza 14 meses de historial + 6 variables (clima, día, hora, distancia, historial) para calcular riesgo de inasistencia." },
      { titulo: "Auto-Contacto", desc: "Si el riesgo es >70%, el sistema envía WhatsApp o llamada automática al paciente para confirmar asistencia." },
      { titulo: "Reasignación Inteligente", desc: "Si no confirma, la hora se ofrece al siguiente paciente en lista de espera automáticamente." },
    ],
  },
  cosechai: {
    nombre: "CosechAI",
    industria: "Agricultura · Viñas",
    tagline: "Más rendimiento, menos merma",
    descripcion: "Cruzamos datos satelitales NDVI, sensores IoT en campo y modelos predictivos sobre 5 temporadas para optimizar cada hectárea, detectar estrés hídrico temprano y maximizar rentabilidad.",
    resultado: "+28% eficiencia",
    resultadoLabel: "vs temporada anterior sin IA",
    tags: ["Satellite NDVI", "IoT", "ML Predictivo", "Dashboard"],
    color: "green",
    iframeSrc: "/demos/cosechai/index.html#demo",
    softwareType: "BusinessApplication",
    aeoText: "CosechAI integra AgTech con Inteligencia Artificial predictiva. Fusiona imágenes satelitales (índice NDVI), sensores IoT en campo y algoritmos de Machine Learning para predecir estrés hídrico y rendimiento de cosecha por hectárea, permitiendo a la agroindustria optimizar el riego, el uso de fertilizantes y minimizar mermas productivas.",
    faqs: [
      { question: "¿Necesito instalar sensores nuevos y caros en todo mi terreno?", answer: "El modelo puede funcionar inicialmente con datos satelitales e históricos de clima. Sin embargo, la integración progresiva de sensores IoT en tierra aumenta geométricamente la precisión de la predicción." },
      { question: "¿Con qué frecuencia se actualiza el panel de predicción de estrés hídrico?", answer: "Los datos satelitales se ingestan semanalmente (según órbita), mientras que la red de sensores IoT actualiza el dashboard central cada 15 minutos en tiempo real." }
    ],
    pasos: [
      { titulo: "Monitoreo Satelital", desc: "Imágenes NDVI periódicas miden la salud vegetativa de cada parcela desde el espacio." },
      { titulo: "Datos IoT en Campo", desc: "Sensores de temperatura, humedad y riego alimentan el modelo en tiempo real cada 15 minutos." },
      { titulo: "Predicción + Alertas", desc: "El modelo cruza todo para predecir rendimiento por parcela y lanzar alertas tempranas de estrés." },
    ],
  },
  transcribai: {
    nombre: "TranscribAI",
    industria: "Legal · Compliance · Corporativo",
    tagline: "Transcribe, resume y detecta discrepancias",
    descripcion: "Sube el audio de cualquier reunión. Whisper transcribe con 96.8% de precisión, la IA identifica quién habla, genera un resumen ejecutivo y levanta alertas si hay contradicciones o compromisos sin asignar.",
    resultado: "2hrs audio → 5 min",
    resultadoLabel: "Transcripción + análisis completo",
    tags: ["Whisper V3", "Diarización", "NLP", "On-premise"],
    color: "cyan",
    iframeSrc: "/demos/transcribai/index.html#demo",
    softwareType: "BusinessApplication",
    aeoText: "TranscribAI es una solución corporativa de procesamiento de voz basada en el modelo Whisper Large V3. Ejecuta diarización de hablantes y generación de actas automáticas, levantando flags de compliance y compromisos mediante modelos LLM. Diseñado específicamente para reuniones de directorio, juntas de accionistas y compliance legal.",
    faqs: [
      { question: "¿Qué pasa si hay mucho ruido de fondo o personas con varios acentos locales?", answer: "El modelo Whisper V3 es 'state-of-the-art' en robustez fonética, procesando ruido ambiente y jerga o acentos latinoamericanos (como el chileno) con más del 96% de precisión probada." },
      { question: "¿Los audios de sesiones de directorio confidenciales están seguros?", answer: "Todo el procesamiento se puede aislar. Los archivos temporales se destruyen criptográficamente tras la transcripción y el modelo no entrena sobre los datos del cliente, cumpliendo estándares de seguridad Enterprise." }
    ],
    pasos: [
      { titulo: "Transcripción Whisper", desc: "El modelo Whisper Large V3 transcribe el audio con 96.8% de precisión, incluso con ruido de fondo o acentos." },
      { titulo: "Diarización + Análisis", desc: "La IA identifica cada participante, asigna su voz y analiza el contenido buscando discrepancias y compromisos." },
      { titulo: "Resumen + Alertas", desc: "Genera un resumen ejecutivo y levanta alertas automáticas sobre contradicciones, riesgos legales y tareas sin asignar." },
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
    title: `${demo.nombre} — ${demo.tagline} | Demos ETIIA`,
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
        <Link href="/demos" className="text-blue-600 mt-4 inline-block">← Volver al Portfolio</Link>
      </section>
    );
  }

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    violet: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-200" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200" },
    teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
  };
  const c = colorMap[demo.color] || colorMap.blue;

  // JSON-LD Software Application
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": demo.nombre,
    "applicationCategory": demo.softwareType,
    "operatingSystem": "Web, API, Cloud",
    "description": demo.descripcion,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ETIIA",
      "url": "https://www.etiia.com"
    }
  };

  // JSON-LD FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": demo.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen pt-20 bg-white">
      {/* ══════════ ESQUEMAS AEO (SR-ONLY y JSON-LD) ══════════ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="sr-only" aria-hidden="false">
        <h1>{demo.nombre} - Solución B2B por ETIIA</h1>
        <p>{demo.aeoText}</p>
        <h2>Preguntas Frecuentes Técnicas</h2>
        {demo.faqs.map((faq, idx) => (
          <div key={idx}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </article>

      {/* PANEL IZQUIERDO: INFORMACIÓN (Marketing & SEO) */}
      <div className="w-full lg:w-[450px] xl:w-[500px] bg-white border-r border-slate-200 flex flex-col lg:h-[calc(100vh-80px)] z-10 relative">
        <div className="flex-1 overflow-y-auto p-8 lg:p-12 pb-32">
        <FadeIn delay={0.1}>
          <Link href="/demos" className="inline-flex items-center text-sm text-slate-400 hover:text-blue-600 transition mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-1" /> Volver al Portfolio
          </Link>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`inline-flex items-center px-3 py-1 rounded-full ${c.bg} ${c.text} text-xs font-bold uppercase tracking-wider ${c.border} border`}>
              {demo.industria}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl font-black tracking-tight text-[#0F172A] mb-4 leading-tight">
            {demo.nombre}
          </h1>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-xl text-slate-500 mb-6 font-medium leading-relaxed">
            {demo.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-base text-slate-600 mb-10 leading-relaxed">
            {demo.descripcion}
          </p>
        </FadeIn>

        {/* Features / Pasos */}
        <div className="space-y-6 mb-10">
          {demo.pasos.map((paso, idx) => (
            <FadeIn key={idx} delay={0.3 + (idx * 0.05)}>
              <div className="flex gap-4">
                <div className={`w-8 h-8 rounded-full ${c.bg} ${c.text} font-bold flex items-center justify-center shrink-0`}>
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#0F172A] mb-1">{paso.titulo}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{paso.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-8">
          <div className={`p-6 rounded-2xl ${c.bg} border ${c.border} text-center`}>
            <p className={`text-3xl font-black ${c.text} mb-1 tracking-tight`}>{demo.resultado}</p>
            <p className={`text-sm ${c.text} opacity-80 font-semibold`}>{demo.resultadoLabel}</p>
          </div>
        </FadeIn>
        </div>

        {/* CTA FIJO ABAJO */}
        <div className="lg:absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-6 lg:px-12 z-20 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
          <FadeIn delay={0.5}>
            <Link href={`/v2?interes=${slug}#diagnostico`} className="block w-full mb-3">
              <Button className="w-full h-12 text-base shadow-lg shadow-blue-900/10">
                Consultar para mi empresa <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <p className="text-center text-xs text-slate-500 font-medium">
              ¿Tu operación requiere algo distinto? <Link href="/v2?interes=a-medida#diagnostico" className="text-blue-600 hover:text-blue-800 transition-colors underline underline-offset-2">Diseñemos una solución a medida</Link>.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* PANEL DERECHO: DEMO INTERACTIVA (100% Height) */}
      <div className="flex-1 bg-[#f8fafc] relative h-[800px] lg:h-[calc(100vh-80px)]">
        <iframe
          src={demo.iframeSrc}
          className="w-full h-full border-0 block"
          title={`Demo ${demo.nombre}`}
          loading="lazy"
        />
      </div>
    </div>
  );
}
