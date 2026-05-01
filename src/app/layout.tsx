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
    template: "%s | ETIIA",
    default: "ETIIA | Consultoría e Implementación de Inteligencia Artificial",
  },
  description: "Firma especializada en Inteligencia Artificial y Automatización Inteligente B2B. Conectamos tecnología con KPIs de negocio reales.",
  keywords: ["Inteligencia Artificial", "Consultoría IA Chile", "Automatización de Procesos", "Machine Learning", "IA Generativa B2B", "UpSkilling Corporativo", "Agentes IA"],
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
    title: "ETIIA | Consultoría e Implementación de IA",
    description: "Firma especializada en Inteligencia Artificial B2B. Conectamos tecnología con KPIs de negocio reales.",
    url: "https://www.etiia.com",
    siteName: "ETIIA",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ETIIA Consultoría en IA' }],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ETIIA | Consultoría e Implementación de IA",
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
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "ETIIA",
              "url": "https://www.etiia.com",
              "logo": "https://www.etiia.com/favicon.svg",
              "image": "https://www.etiia.com/og-image.jpg",
              "description": "Consultoría e implementación de Inteligencia Artificial aplicada a negocios B2B en Chile y Latam.",
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
                "https://linkedin.com/company/etiia",
                "https://bernarditamery.cl"
              ],
              "founder": [
                {
                  "@type": "Person",
                  "name": "Bernardita Mery"
                },
                {
                  "@type": "Person",
                  "name": "Pablo E. Olivares"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${jakartaSans.variable} font-sans antialiased bg-white text-navy flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
