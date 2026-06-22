import { Metadata } from "next";
import ServiciosClient from "./ServiciosClient";

export const metadata: Metadata = {
  title: { absolute: "Servicios ETIIA: decidir inversión en IA antes de construir" },
  description: "Diagnóstico gratis, Blueprint ETIIA con fee fijo, implementación opcional y UpSkilling para decidir y ejecutar IA con retorno medible.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios ETIIA",
    description: "Antes de aprobar inversión en IA, define si el retorno justifica avanzar.",
    url: "https://etiia.com/servicios",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Servicios IA — ETIIA" }],
  },
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
