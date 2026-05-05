import { getInsightBySlug, getInsightsList } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { ArrowLeft, Zap } from 'lucide-react';

export async function generateStaticParams() {
  const insights = getInsightsList();
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return { title: 'Not Found' };

  return {
    title: { absolute: `${insight.metadata.title} | ETIIA Insights` },
    description: insight.metadata.description,
    alternates: {
      canonical: `/insights/${slug}`,
    },
    openGraph: {
      title: `${insight.metadata.title} | ETIIA Insights`,
      description: insight.metadata.description,
      url: `https://etiia.com/insights/${slug}`,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: insight.metadata.title }],
      type: 'article',
      publishedTime: insight.metadata.date,
    },
  };
}

export default async function InsightArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const { metadata, content } = insight;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://etiia.com/insights/${slug}#article`,
    headline: metadata.title,
    description: metadata.description,
    wordCount: Math.round(content.split(/\s+/).length),
    articleSection: metadata.category,
    inLanguage: 'es-CL',
    image: {
      '@type': 'ImageObject',
      url: 'https://etiia.com/og-image.jpg',
      width: 1200,
      height: 630,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'article p:first-of-type'],
    },
    author: [{
      '@type': 'Person',
      '@id': 'https://bernarditamery.cl/#person',
      name: metadata.author,
      url: 'https://www.linkedin.com/in/bmeryu/',
      sameAs: ['https://bernarditamery.cl', 'https://www.linkedin.com/in/bmeryu/'],
    }],
    datePublished: metadata.date,
    dateModified: metadata.date,
    isPartOf: { '@id': 'https://etiia.com/#website' },
    publisher: {
      '@type': 'Organization',
      name: 'ETIIA',
      '@id': 'https://etiia.com/#organization',
      logo: {
        '@type': 'ImageObject',
        url: 'https://etiia.com/favicon.svg',
        width: 512,
        height: 512,
      },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://etiia.com' },
        { '@type': 'ListItem', position: 2, name: 'Perspectivas', item: 'https://etiia.com/insights' },
        { '@type': 'ListItem', position: 3, name: metadata.title, item: `https://etiia.com/insights/${slug}` },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-24 pt-32 selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 mb-8 transition-colors">
          <ArrowLeft size={16} /> Volver a Insights
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-x-4 text-sm mb-6">
            <time dateTime={metadata.date} className="text-neutral-400">
              {new Date(metadata.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="rounded-full bg-indigo-500/10 px-3 py-1 font-medium text-indigo-400">
              {metadata.category}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6 leading-tight">
            {metadata.title}
          </h1>
          <div className="flex items-center gap-x-4 border-t border-neutral-800 pt-6">
            <div className="text-sm leading-6">
              <p className="font-semibold text-white">
                Por {metadata.author}
              </p>
              <p className="text-neutral-400">Consultora ETIIA</p>
            </div>
          </div>
        </header>

        <article className="max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-10 mb-4 text-white" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-12 mb-6 pb-2 border-b border-neutral-800 text-white" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-8 mb-4 text-white" {...props} />,
              p: ({node, ...props}) => <p className="text-neutral-300 leading-relaxed mb-6 text-lg" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 text-neutral-300 space-y-2 text-lg" {...props} />,
              strong: ({node, ...props}) => <strong className="font-semibold text-white" {...props} />,
              a: ({node, ...props}) => <a className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4" {...props} />,
              blockquote: ({node, ...props}) => (
                <div className="relative my-10 overflow-hidden rounded-2xl border border-neutral-800/60 bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm">
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 rounded-l-full"></div>
                  <div className="mb-5 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-widest text-indigo-300">
                      <Zap size={14} className="fill-indigo-500/20" />
                      Resumen Ejecutivo
                    </span>
                  </div>
                  <blockquote className="text-xl font-medium leading-relaxed text-neutral-200 [&>p:not(:last-child)]:mb-4" {...props} />
                </div>
              )
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

        {/* ═══ CTA POST-ARTÍCULO ═══ */}
        <div className="mt-20 p-8 md:p-10 bg-[#0B1121] border border-blue-900/40 rounded-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(29,78,216,0.2) 0%, transparent 65%)' }} aria-hidden="true" />
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">¿Te resonó este artículo?</p>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight mb-4">
              20 minutos pueden ahorrarte<br />meses de decisiones equivocadas.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Evaluamos si tu problema es realmente un caso para IA, qué conviene hacer primero y qué no.
            </p>
            <Link
              href="/?interes=diagnostico#diagnostico"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-blue-900/30 hover:-translate-y-0.5"
            >
              Agendar diagnóstico gratuito <ArrowLeft size={16} className="rotate-180" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
