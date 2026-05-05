import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Reveal";
import DemoCTA from "./DemoCTA";

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
  isAgent?: boolean;
  faqs: { question: string; answer: string }[];
}> = {
  atendeai: {
    nombre: "AtendeAI",
    industria: "Transversal · Atención al Cliente",
    tagline: "Tu mejor agente nunca descansa",
    descripcion: "Un agente de IA que entiende lenguaje natural, accede a tus sistemas internos (CRM, ERP, base de conocimiento) y resuelve consultas en tiempo real. No es un chatbot — es un agente que ejecuta acciones.",
    seoDescription: "Agente autónomo B2B con RAG. Entiende lenguaje natural, accede a tus sistemas (CRM/ERP) y resuelve consultas en tiempo real sin intervención humana.",
    resultado: "73% resolución sin humano",
    resultadoLabel: "Sin intervención humana",
    tags: ["LLM Agents", "RAG", "CRM", "Multicanal"],
    color: "teal",
    iframeSrc: "/demos/atendeai/index.html#demo",
    softwareType: "BusinessApplication",
    isAgent: true,
    aeoText: "AtendeAI es un Agente Autónomo B2B diseñado para automatizar el ciclo completo de atención al cliente. Utiliza modelos fundacionales (LLMs) con capacidad de RAG (Retrieval-Augmented Generation) para consultar bases de conocimiento internas y se integra bidireccionalmente con CRMs para ejecutar acciones transaccionales (como agendamientos o modificaciones de contratos) sin intervención de operadores humanos.",
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
    seoDescription: "Motor predictivo eCommerce. Analiza navegación y compras para sugerir productos, gatillando campañas personalizadas con alto % de conversión.",
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
    seoDescription: "Elimina el tipeo. Agente IA con OCR que extrae datos de facturas PDF, concilia contra cartolas bancarias y hace push validado directo a tu ERP.",
    resultado: "247 facturas en 4:52 min",
    resultadoLabel: "Sin intervención manual",
    tags: ["OCR", "AI Conciliation", "ERP Push"],
    color: "emerald",
    iframeSrc: "/demos/facturai/index.html#demo",
    softwareType: "AccountingApplication",
    isAgent: true,
    aeoText: "FacturAI es una solución de hiperautomatización contable (RPA Cognitivo) que elimina el data entry manual. Ingresa facturas PDF, extrae metadatos financieros con alta precisión mediante OCR inteligente, ejecuta cruces y validaciones contra cartolas bancarias y realiza push de datos directamente a sistemas ERP (SAP, Defontana, Softland) mediante API REST.",
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
    seoDescription: "Automatización de rendiciones educativas. Agente IA que lee PDFs, razona requerimientos, cruza con tu ERP y resuelve casos sin digitación humana.",
    resultado: "78% resolución automática",
    resultadoLabel: "Automático sin digitación",
    tags: ["PDF Extraction", "ERP Integration", "Auto-email"],
    color: "blue",
    iframeSrc: "/demos/autorend/index.html#demo",
    softwareType: "BusinessApplication",
    isAgent: true,
    aeoText: "AutoRend IA es un agente cognitivo diseñado para departamentos de finanzas en el sector educativo. Procesa actas de observaciones en PDF del Ministerio de Educación (Superintendencia), extrae los folios cuestionados, cruza la información en tiempo real con el ERP financiero y resuelve la discrepancia. Si el documento justificativo no existe, AutoRend escala la solicitud automáticamente al director correspondiente.",
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
    seoDescription: "Buscador semántico jurídico para firmas corporativas. Encuentra cláusulas exactas y jurisprudencia con tecnología RAG, evitando falsos positivos.",
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
    seoDescription: "IA para screening y reclutamiento B2B. Parsea habilidades de currículums y genera un ranking multidimensional contra tu perfil de cargo en segundos.",
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
    seoDescription: "Machine Learning que previene inasistencias médicas. Analiza riesgo y reasigna automáticamente citas de alto riesgo mediante WhatsApp integrado.",
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
    seoDescription: "Inteligencia Artificial para la agroindustria. Cruza satélites NDVI e IoT para predecir estrés hídrico, optimizar riego y maximizar hectáreas.",
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
    seoDescription: "Transcripción Whisper V3 para firmas corporativas. Genera actas, identifica hablantes, resume y detecta brechas de compliance automáticamente.",
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
  prospectai: {
    nombre: "ProspectAI",
    industria: "Marketing · Ventas",
    tagline: "Prospección B2B hiper-personalizada en 3 minutos",
    descripcion: "Un agente de outbound automatizado que busca prospectos por lenguaje natural, verifica correos corporativos y redacta correos hiper-personalizados leyendo perfiles de LinkedIn.",
    seoDescription: "Agente autónomo Outbound B2B. Encuentra prospectos, verifica correos corporativos y redacta campañas personalizadas extrayendo insights de LinkedIn.",
    resultado: "Outbound en 3 min",
    resultadoLabel: "Reducción de horas manuales",
    tags: ["LLM Agents", "Scraping", "Outbound"],
    color: "cyan",
    iframeSrc: "/demos/prospectai/index.html#demo",
    softwareType: "BusinessApplication",
    isAgent: true,
    aeoText: "ProspectAI es un agente autónomo de outbound B2B creado por ETIIA. Utiliza Modelos de Lenguaje Grande (LLMs) y scraping ético para identificar tomadores de decisión a partir de consultas en lenguaje natural, verificar correos electrónicos mediante SMTP y redactar mensajes de prospección altamente personalizados analizando la biografía pública del prospecto.",
    faqs: [
      { question: "¿Cómo se asegura de que los correos no reboten?", answer: "El agente realiza una verificación SMTP silenciosa (ping) al servidor de correo del prospecto en tiempo real, garantizando tasas de entregabilidad (deliverability) superiores al 95%." },
      { question: "¿Puedo enviar los mensajes generados a mi CRM?", answer: "Sí, ProspectAI se integra vía API con HubSpot, Salesforce y plataformas de automatización de correos como Lemlist o Instantly." }
    ],
    pasos: [
      { titulo: "Búsqueda NLP", desc: "Le pides al agente lo que buscas en lenguaje natural (ej. 'CMOs en retail')." },
      { titulo: "Análisis y Verificación", desc: "Extrae perfiles, analiza la biografía de cada uno y verifica sus correos corporativos." },
      { titulo: "Redacción Personalizada", desc: "El LLM redacta un borrador hiper-personalizado basado en el perfil único de cada prospecto." },
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
    title: `${demo.nombre} — ${demo.tagline} | Soluciones ETIIA`,
    description: demo.seoDescription,
    alternates: {
      canonical: `/demos/${slug}`,
    },
    openGraph: {
      title: `${demo.nombre} — ${demo.tagline} | ETIIA`,
      description: demo.seoDescription,
      url: `https://etiia.com/demos/${slug}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${demo.nombre} — Demo interactiva por ETIIA` }],
      type: "website",
    },
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
  // applicationCategory debe usar valores válidos de schema.org
  const validCategory = "BusinessApplication";
  
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://etiia.com/demos/${slug}/#software`,
    "name": demo.nombre,
    "applicationCategory": validCategory,
    "operatingSystem": "Web, API, Cloud",
    "url": `https://etiia.com/demos/${slug}`,
    "description": demo.descripcion,
    "featureList": demo.tags.join(", "),
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "image": "https://etiia.com/og-image.jpg",
    "publisher": {
      "@type": "Organization",
      "name": "ETIIA",
      "url": "https://etiia.com",
      "@id": "https://etiia.com/#organization"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://etiia.com/demos/${slug}/#faq`,
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
    <div className="w-full h-[calc(100vh-80px)] mt-20 relative bg-white">
      {/* ══════════ ESQUEMAS AEO (SR-ONLY y JSON-LD) ══════════ */}
      <h1 className="sr-only">{demo.nombre}: {demo.tagline} - Solución B2B de IA por ETIIA</h1>
      <div className="sr-only">{demo.aeoText}</div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* ══════════ ESQUEMAS AEO VISIBLES (Google Compliance) ══════════ */}
      <div className="absolute top-4 right-4 sm:right-6 z-50">
        <details className="bg-white/95 backdrop-blur-md border border-slate-200 text-slate-700 rounded-xl shadow-2xl max-w-xs md:max-w-sm group transition-all">
          <summary className="px-5 py-2.5 text-xs font-bold cursor-pointer list-none flex items-center justify-between gap-3 hover:text-blue-600">
            <span>Ficha Técnica & FAQs</span>
            <span className="w-5 h-5 flex items-center justify-center bg-blue-50 text-blue-700 rounded-full group-open:rotate-45 transition-transform">+</span>
          </summary>
          <article className="p-5 pt-4 border-t border-slate-100 max-h-[60vh] overflow-y-auto custom-scrollbar">
            <div className="flex flex-col gap-1.5 mb-3">
              <p className="text-sm font-black text-[#0F172A]">{demo.nombre} - Solución B2B</p>
              {demo.isAgent && (
                <span className="inline-flex self-start items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                  Agente Autónomo
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 mb-5 leading-relaxed">{demo.aeoText}</p>
            <h3 className="text-[10px] font-bold text-blue-700 mb-3 uppercase tracking-widest">Preguntas Frecuentes</h3>
            <div className="flex flex-col gap-3">
              {demo.faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <h4 className="text-xs font-bold text-[#0F172A] mb-1.5">{faq.question}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </details>
      </div>

      {/* FLOATING BACK BUTTON */}
      <div className="absolute top-4 left-4 sm:left-6 z-50">
        <Link href="/#soluciones" className="inline-flex items-center gap-2 bg-white/90 border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 px-5 py-2.5 rounded-full text-xs font-bold backdrop-blur-md transition-all shadow-lg hover:-translate-y-0.5">
          <ArrowLeft className="w-4 h-4" /> Volver a Soluciones de IA
        </Link>
      </div>

      {/* 100% FULLSCREEN IFRAME */}
      <iframe
        src={demo.iframeSrc}
        className="w-full h-full border-0 block absolute inset-0 z-10"
        title={`Demo interactiva de ${demo.nombre} — ETIIA`}
        sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-modals allow-top-navigation allow-top-navigation-by-user-activation"
      />

      {/* FLOATING GATED CTA + MODAL */}
      <DemoCTA slug={slug} demoName={demo.nombre} />
    </div>
  );
}
