import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.etiia.com"),
  title: {
    template: "%s | ETIIA Consultoría IA B2B",
    default: "Consultoría en Inteligencia Artificial B2B & Agentes IA | ETIIA",
  },
  description: "Firma experta en Consultoría de Inteligencia Artificial B2B. Implementamos Agentes Autónomos, Arquitecturas RAG y LLMs corporativos para maximizar tu ROI. Agenda tu diagnóstico IA.",
  keywords: ["Consultoría Inteligencia Artificial B2B", "Implementación IA empresas", "Agentes IA Autónomos", "Sistemas RAG para empresas", "LLMs Corporativos", "Machine Learning B2B", "IA Chile Latam"],
  authors: [{ name: "Bernardita Mery" }, { name: "Pablo E. Olivares" }],
  creator: "ETIIA",
  publisher: "ETIIA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Consultoría en Inteligencia Artificial B2B & Agentes IA | ETIIA",
    description: "Conectamos tecnología de IA con KPIs de negocio reales. Implementación de sistemas RAG y automatización cognitiva B2B.",
    url: "https://www.etiia.com",
    siteName: "ETIIA",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ETIIA Consultoría en Inteligencia Artificial' }],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría en Inteligencia Artificial B2B | ETIIA",
    description: "Firma especializada en IA B2B. Conectamos tecnología con KPIs de negocio reales.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.etiia.com/#organization",
                  "name": "ETIIA - Consultoría en Inteligencia Artificial B2B",
                  "url": "https://www.etiia.com",
                  "logo": "https://www.etiia.com/favicon.svg",
                  "image": "https://www.etiia.com/og-image.jpg",
                  "description": "Consultoría e implementación de Inteligencia Artificial, Agentes Autónomos y sistemas RAG aplicados a negocios B2B.",
                  "knowsAbout": [
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Retrieval-Augmented Generation (RAG)",
                    "Large Language Models",
                    "Business Process Automation",
                    "Cognitive Computing"
                  ],
                  "areaServed": ["CL", "US", "MX", "ES", "CO"],
                  "priceRange": "$$$",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Santiago",
                    "addressCountry": "CL"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "hola@etiia.com",
                    "contactType": "customer support"
                  },
                  "sameAs": [
                    "https://linkedin.com/company/etiia"
                  ],
                  "founder": [
                    {
                      "@type": "Person",
                      "@id": "https://bernarditamery.cl/#person",
                      "name": "Bernardita Mery",
                      "jobTitle": "Co-founder & AI Strategy Director",
                      "sameAs": ["https://www.linkedin.com/in/bernarditamery/"]
                    },
                    {
                      "@type": "Person",
                      "name": "Pablo E. Olivares",
                      "jobTitle": "Co-founder & Cloud AI Architect"
                    }
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Servicios de Inteligencia Artificial",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Implementación de Agentes IA Autónomos"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Desarrollo de Arquitecturas RAG y LLMs corporativos"
                        }
                      }
                    ]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.etiia.com/#website",
                  "url": "https://www.etiia.com",
                  "name": "ETIIA Consultoría IA",
                  "publisher": {
                    "@id": "https://www.etiia.com/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${jakartaSans.variable} font-sans antialiased bg-white text-navy flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
