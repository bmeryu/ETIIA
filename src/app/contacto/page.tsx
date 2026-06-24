import DiagnosticoForm from "@/app/DiagnosticoForm";

export const metadata = {
  title: { absolute: "Conversemos | ETIIA" },
  description: "Habla directamente con ETIIA para evaluar si una iniciativa de IA tiene valor medible y si corresponde avanzar a un Blueprint.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Conversemos | ETIIA",
    description: "Una conversación ejecutiva para decidir si se justifica invertir tiempo y presupuesto en IA.",
    url: "https://etiia.com/contacto",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Contacto ETIIA" }],
  },
};

const reviewItems = [
  {
    value: "1",
    title: "Valor en juego",
    desc: "Identificamos qué decisión, proceso o presupuesto podría justificar una evaluación más profunda.",
  },
  {
    value: "2",
    title: "Criterio de avance",
    desc: "Revisamos si existe información suficiente, responsables internos y una métrica que pueda traducirse a pesos.",
  },
  {
    value: "3",
    title: "Siguiente paso",
    desc: "Si hay una oportunidad seria, definimos si corresponde abrir el diagnóstico gratis y luego avanzar a un Blueprint ETIIA.",
  },
];

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <section className="mx-auto max-w-5xl text-center">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-blue-200 bg-blue-50/70 px-4 py-1.5 text-xs font-bold tracking-wide text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                20 min · sin costo · sin compromiso
              </span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-navy md:text-5xl lg:text-[4.35rem] lg:leading-[0.98]">
              Conversemos antes de decidir si se justifica invertir en IA.
            </h1>
            <div className="mx-auto mt-6 max-w-3xl space-y-4">
              <p className="text-lg leading-relaxed text-slate-600">
                Hablas directamente con ETIIA. Revisamos la prioridad de negocio, el valor en juego y si corresponde avanzar a un Blueprint con alcance, costo y retorno estimado.
              </p>
              <p className="text-sm leading-relaxed text-slate-500">
                Esta conversación no es un servicio ni una fase del proceso: es un filtro para decidir si se justifica iniciar el diagnóstico.
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm" aria-label="Formulario de contacto">
            <DiagnosticoForm fuente="contacto" />
          </section>

          <section className="grid gap-5 lg:grid-cols-3" aria-label="Qué revisamos">
            {reviewItems.map((item) => (
              <div key={item.value} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-sm font-black text-blue-700">
                  {item.value}
                </div>
                <h2 className="mb-3 text-xl font-black tracking-tight text-navy">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </section>

          <section className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Canal directo</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-navy">
              También podemos coordinar por WhatsApp.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
              Si prefieres escribir primero, cuéntanos brevemente qué decisión o proceso quieres evaluar y lo revisamos con criterio de negocio.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="https://wa.me/56976305985?text=Hola%20ETIIA%2C%20quiero%20conversar%20sobre%20una%20prioridad%20de%20negocio%20y%20evaluar%20si%20se%20justifica%20aplicar%20IA." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                Conversemos por WhatsApp
              </a>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-500">
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cian" /> Conversación directa</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cian" /> Confidencialidad</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
