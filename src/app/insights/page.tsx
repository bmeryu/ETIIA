import { getInsightsList } from '@/lib/markdown';
import Link from 'next/link';
import { NewsletterForm } from '@/components/ui/NewsletterForm';

export const metadata = {
  title: { absolute: 'Insights & Estrategia B2B | ETIIA' },
  description: 'Análisis profundo sobre el impacto operativo y financiero de la Inteligencia Artificial en empresas tradicionales. Cero jerga, cien por ciento criterio.',
};

export default function InsightsHub() {
  const insights = getInsightsList();

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-24 pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ══ HERO EDITORIAL ══ */}
        <div className="mb-16 pb-16 border-b border-neutral-800/60">
          <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest mb-4">
            Criterio Editorial ETIIA
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            Perspectivas para quienes deciden.
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Análisis profundo sobre el impacto operativo y financiero de la IA en empresas reales.
            Sin jerga, sin promesas. Sólo criterio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight) => (
            <Link 
              key={insight.slug} 
              href={`/insights/${insight.slug}`}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-neutral-900 p-8 transition-all hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-600 group"
            >
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={insight.date} className="text-neutral-400">
                    {new Date(insight.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="relative z-10 rounded-full bg-indigo-500/10 px-3 py-1.5 font-medium text-indigo-400">
                    {insight.category}
                  </span>
                </div>
                <div className="group relative">
                  <h2 className="mt-4 text-xl font-semibold leading-7 text-white group-hover:text-indigo-300 transition-colors">
                    {insight.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-neutral-400">
                    {insight.description}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-x-4 border-t border-neutral-800 pt-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-white flex items-center gap-2">
                    {insight.author} <span className="text-neutral-500 font-normal">| Consultora ETIIA</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ══════════ AUTHOR / FIRM AUTHORITY ══════════ */}
        <div className="mt-24 pt-24 border-t border-neutral-800 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-24 h-24 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 border border-neutral-700">
            <span className="text-3xl font-serif text-neutral-400 italic">E</span>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Criterio Editorial ETIIA</h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-3xl">
              Nuestros artículos no son generados en masa para ganar clics. Cada pieza es un análisis profundo extraído de la experiencia de nuestros directores, incluyendo a <span className="text-neutral-200 font-semibold">Bernardita Mery</span> y especialistas técnicos. Documentamos lo que realmente funciona (y lo que falla) en las trincheras de la implementación de Inteligencia Artificial en América Latina.
            </p>
          </div>
        </div>

        {/* ══════════ NEWSLETTER SUBSCRIPTION ══════════ */}
        <div className="mt-32 max-w-4xl mx-auto bg-neutral-900 border border-neutral-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(79, 70, 229, 0.15) 0%, transparent 70%)" }} aria-hidden="true" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-4">
              Inteligencia para quienes deciden.
            </h2>
            <p className="text-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Únete a otros directivos que reciben nuestro análisis mensual sobre cómo la Inteligencia Artificial está reescribiendo las reglas de las operaciones corporativas. Sin spam, solo criterio.
            </p>
            
            <NewsletterForm />
            <p className="text-xs text-neutral-600 mt-4">
              Tus datos están protegidos. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
