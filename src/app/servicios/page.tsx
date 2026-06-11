import { Metadata } from "next";
import ServiciosClient from "./ServiciosClient";

export const metadata: Metadata = {
  title: { absolute: "Servicios de Consultoría e Implementación IA | ETIIA" },
  description: "Desde diagnóstico y automatización RAG a medida, hasta UpSkilling corporativo. Descubre cómo implementamos IA en procesos de negocio.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios B2B | ETIIA",
    description: "Evaluación, Desarrollo a Medida y UpSkilling Corporativo en Inteligencia Artificial.",
    url: "https://etiia.com/servicios",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Servicios IA — ETIIA" }],
  },
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}

