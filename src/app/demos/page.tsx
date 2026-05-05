import { Metadata } from "next";
import DemosFilterClient from "./DemosFilterClient";

export const metadata: Metadata = {
  title: { absolute: "Catálogo de Soluciones IA B2B | ETIIA" },
  description: "Catálogo de agentes de IA B2B en producción: OCR inteligente, RAG corporativo, integración de ERPs y Machine Learning. Explora casos interactivos.",
  alternates: { canonical: "/demos" },
  openGraph: {
    title: "Catálogo de Soluciones IA B2B | ETIIA",
    description: "Agentes autónomos, arquitecturas RAG, OCR y ML predictivo para empresas. Casos de uso en vivo.",
    url: "https://etiia.com/demos",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Catálogo de Soluciones IA — ETIIA" }],
  },
};

export default function DemosPage() {
  return <DemosFilterClient />;
}
