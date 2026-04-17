"use client";

import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";

const logoFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

interface LogoProps {
  theme?: "dark" | "light";
  className?: string;
}

/**
 * ETIIA Logo — Wordmark tipográfico puro.
 *
 * Regla simple: toda la palabra "etii" en un solo peso y color.
 * Solo "a." recibe el acento de color (Blue-700 en fondo claro, Blue-400 en oscuro).
 * Lectura limpia: el ojo va directo al diferencial — la "A" de Artificial.
 */
export function Logo({ theme = "dark", className }: LogoProps) {
  const baseColor   = theme === "dark" ? "#0F172A" : "#ffffff";
  const accentColor = theme === "dark" ? "#1D4ED8" : "#60A5FA";

  return (
    <span
      className={cn(
        logoFont.className,
        "inline-flex items-baseline select-none leading-none",
        className
      )}
      aria-label="ETIIA"
      style={{ letterSpacing: "-0.04em" }}
    >
      {/* "etii" — todo uniforme, mismo peso, mismo color */}
      <span style={{ color: baseColor, fontWeight: 800 }}>etii</span>

      {/* "a." — el único acento, Blue-700 */}
      <span style={{ color: accentColor, fontWeight: 800, letterSpacing: "-0.02em" }}>
        a.
      </span>
    </span>
  );
}
