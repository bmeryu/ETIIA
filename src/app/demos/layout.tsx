import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio de Soluciones IA | ETIIA",
  description: "Portfolio de soluciones de IA implementadas por ETIIA. Productos interactivos reales en contabilidad, legal, RRHH, salud y más.",
};

export default function DemosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
