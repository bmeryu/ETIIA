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
  title: {
    template: "%s | ETIIA",
    default: "ETIIA | Consultoría en Inteligencia Artificial",
  },
  description: "Consultoría en Inteligencia Artificial en Chile. Transformamos data en estrategia y crecimiento para empresas que buscan resultados medibles con IA.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "ETIIA | Consultoría en Inteligencia Artificial",
    description: "Consultoría en Inteligencia Artificial. Transformamos data en estrategia y crecimiento.",
    url: "https://etia.cl",
    siteName: "ETIIA",
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
