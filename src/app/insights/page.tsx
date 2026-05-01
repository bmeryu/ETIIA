import { getInsightsList } from '@/lib/markdown';
import Link from 'next/link';

export const metadata = {
  title: 'Insights & Estrategia B2B | ETIIA',
  description: 'Análisis profundo sobre el impacto operativo y financiero de la Inteligencia Artificial en empresas tradicionales. Cero jerga, cien por ciento criterio.',
};

export default function InsightsHub() {
  const insights = getInsightsList();

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-24 pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Insights Estratégicos
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Inteligencia Artificial para directivos y dueños de negocio. Menos software, más criterio operativo.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h3 className="mt-4 text-xl font-semibold leading-7 text-white group-hover:text-indigo-300 transition-colors">
                    {insight.title}
                  </h3>
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
      </div>
    </div>
  );
}
