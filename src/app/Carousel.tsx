"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

/* ── TYPES ─────────────────────────────────────────── */
interface ProductCard {
  type: "product";
  nombre: string;
  slug: string;
  industria: string;
  problema: string;
  desc: string;
  icon: string;
}

interface TeamCard {
  type: "team";
  name: string;
  role: string;
  desc: string;
  tags: string[];
}

type CarouselItem = ProductCard | TeamCard;

/* ── ICONS MAP ──────────────────────────────────────── */
const icons: Record<string, string> = {
  atendeai: "🎧",
  ventaai: "🛍️",
  facturai: "🧾",
};

/* ── CAROUSEL COMPONENT ─────────────────────────────── */
export function Carousel({ items }: { items: CarouselItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  function scroll(dir: "left" | "right") {
    if (!ref.current) return;
    const card = ref.current.querySelector("[data-card]") as HTMLElement;
    const amount = card ? card.offsetWidth + 24 : 320;
    const track = ref.current;

    if (dir === "right") {
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }
    } else {
      if (track.scrollLeft <= 0) {
        track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
        return;
      }
    }
    track.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  }

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      scroll("right");
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Nav buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-4 h-4 text-[#0F172A]" />
      </button>

      {/* Cards track */}
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            data-card
            className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col shrink-0 hover:border-blue-200 hover:shadow-md transition-all"
            style={{ width: "280px" }}
          >
            {item.type === "product" ? (
              <>
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-xl">
                    {icons[item.slug] ?? "🤖"}
                  </div>
                  <Link href={`/demos/${item.slug}`} aria-label={`Ver demo ${item.nombre}`}>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 hover:text-blue-600 transition-colors" />
                  </Link>
                </div>
                <p className="text-xs text-blue-700 font-bold uppercase tracking-wider mb-3">{item.industria}</p>
                <p className="text-sm text-[#0F172A] font-semibold leading-snug mb-4">{item.problema}</p>
                <h3 className="text-lg font-black text-blue-700 tracking-tight mb-2">{item.nombre}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-grow mb-5">{item.desc}</p>
                <Link
                  href={`/demos/${item.slug}`}
                  className="text-sm text-slate-400 hover:text-blue-700 font-medium transition-colors"
                >
                  Ver demo interactiva
                </Link>
              </>
            ) : (
              <>
                <p className="text-xs text-blue-700 font-bold uppercase tracking-wider mb-3">{item.role}</p>
                <h3 className="text-xl font-black text-[#0F172A] tracking-tight mb-3">{item.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs bg-slate-100 rounded-full px-3 py-1 text-slate-500 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-4 h-4 text-[#0F172A]" />
      </button>
    </div>
  );
}
