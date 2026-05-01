import { getInsightBySlug, getInsightsList } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  const insights = getInsightsList();
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const insight = getInsightBySlug(params.slug);
  if (!insight) return { title: 'Not Found' };

  return {
    title: `${insight.metadata.title} | ETIIA Insights`,
    description: insight.metadata.description,
  };
}

export default function InsightArticle({ params }: { params: { slug: string } }) {
  const insight = getInsightBySlug(params.slug);

  if (!insight) {
    notFound();
  }

  const { metadata, content } = insight;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title,
    description: metadata.description,
    author: [{
      '@type': 'Person',
      name: metadata.author,
      url: 'https://www.etiia.com'
    }],
    datePublished: metadata.date,
    dateModified: metadata.date,
    publisher: {
      '@type': 'Organization',
      name: 'ETIIA',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.etiia.com/etiia_square_magin_full.png'
      }
    }
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
              Estrategia AI
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
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-indigo-500 bg-neutral-900 px-6 py-4 rounded-r-lg italic text-neutral-200 mb-6" {...props} />
            }}
          >
            {content}
          </ReactMarkdown>
        </article>

      </div>
    </div>
  );
}
