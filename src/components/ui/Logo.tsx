"use client";

import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";

// Outfit perfectly matches the reference: flat 't', circular dots, geometric 'e' and 'a'.
const logoFont = Outfit({
  subsets: ["latin"],
  weight: ["800", "900"],
  display: "swap"
});

interface LogoProps {
  theme?: "dark" | "light";
  className?: string;
}

/**
 * ETIIA Logo — CSS-rendered with exact geometric font matching reference.
 * Navy "et" + bright blue "iia."
 */
export function Logo({ theme = "dark", className }: LogoProps) {
  // Exact colors from the user's logo reference image
  const navy = theme === "dark" ? "text-[#111827]" : "text-white";
  const blue = "text-[#2B5797]";

  return (
    <span
      className={cn(
        logoFont.className,
        "inline-flex items-baseline font-[900] select-none",
        className
      )}
      style={{ lineHeight: "0.8" }}
      aria-label="ETIIA"
    >
      {/* Bloque 1: Estrategia + Tecnología + Impacto */}
      <span className={cn(navy, "tracking-[-0.04em]")}>et</span>
      <span className={navy} style={{ letterSpacing: "-0.07em" }}>i</span>

      {/* Bloque 2: Inteligencia Artificial */}
      <span className={blue}>
        <span style={{ letterSpacing: "-0.02em" }}>i</span>
        <span className="tracking-[-0.04em]">a.</span>
      </span>
    </span>
  );
}
