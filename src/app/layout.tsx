import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | ETIA",
    default: "ETIA | Inteligencia Artificial Accionable",
  },
  description: "Consultora de Inteligencia Artificial que une Estrategia de Negocio e Ingeniería Robusta. Convertimos datos en retorno medible.",
  openGraph: {
    title: "ETIA | Inteligencia Artificial Accionable",
    description: "Consultora de Inteligencia Artificial que une Estrategia de Negocio e Ingeniería Robusta.",
    url: "https://etia.cl",
    siteName: "ETIA",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-navy flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
