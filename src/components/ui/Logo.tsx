"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "diamond" | "pulse";
  theme?: "dark" | "light";
  className?: string;
}

/**
 * ETIA Logo — Uses the actual brand image.
 * Navy "et" + blue "i" (with blue dot) + blue "a" + trailing blue dot.
 */
export function Logo({ variant = "default", theme = "dark", className }: LogoProps) {
  return (
    <Image
      src="/logo-etia.png"
      alt="ETIA — Transformando Data en Estrategia y Crecimiento"
      width={160}
      height={50}
      className={cn("h-10 w-auto", theme === "light" ? "brightness-0 invert" : "", className)}
      priority
    />
  );
}
