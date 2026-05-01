"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Calculator, Scale, Users, Stethoscope, Leaf, GraduationCap, Headset, ShoppingBag, Mic } from "lucide-react";
import { motion } from "framer-motion";

const casosUso = [
  {
    icon: <Headset className="w-6 h-6" />,
    title: "Atención al Cliente",
    desc: "Agentes de IA que resuelven consultas en tiempo real: cambian planes, agendan técnicos, generan boletas. Sin intervención humana.",
    href: "/demos/atendeai",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Retail y eCommerce",
    desc: "Motores de recomendación que personalizan la experiencia de cada cliente. +34% cross-sell con campañas automáticas por segmento.",
    href: "/demos/ventaai",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Finanzas y Contabilidad",
    desc: "Lectura masiva de facturas PDF, conciliación cruzada con cartolas y digitación directa al ERP. Sin tipeo humano.",
    href: "/demos/facturai",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Legal y Compliance",
    desc: "Búsqueda semántica sobre contratos y transcripción segura de reuniones con detección de compromisos incumplidos.",
    href: "/demos/lexsearch",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Recursos Humanos",
    desc: "Parseo automático de CVs en cualquier formato. La IA extrae variables críticas y genera un ranking instantáneo por cargo.",
    href: "/demos/talentparse",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Salud y Clínicas",
    desc: "Predicción de inasistencias médicas y contacto automático a pacientes en lista de espera. -62% no-shows.",
    href: "/demos/agendai",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Agricultura y Viñas",
    desc: "Modelos predictivos con datos satelitales e IoT para optimizar rendimiento y reducir merma en exportaciones.",
    href: "/demos/cosechai",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Educación",
    desc: "Agente de IA que lee rendiciones, cruza datos con el ERP y responde automáticamente. Si falta información, redacta y envía el correo.",
    href: "/demos/autorend",
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Compliance Corporativo",
    desc: "Transcripción segura de reuniones con diarización, resúmenes ejecutivos y alertas automáticas de compromisos.",
    href: "/demos/transcribai",
  }
];

export function UseCaseCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollByAmount = (amount: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full group mt-8">
      {/* Decorative gradient masks for edges */}
      <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none rounded-l-[2.5rem]" />
      <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none rounded-r-[2.5rem] flex items-center justify-end pr-2" />

      {/* Floating Scroll Buttons */}
      <button 
        onClick={() => scrollByAmount(-400)}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-5 md:-ml-6 z-20 w-12 h-12 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:scale-105 transition-all duration-300 ${canScrollLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={() => scrollByAmount(400)}
        className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-6 z-20 w-12 h-12 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:scale-105 transition-all duration-300 ${canScrollRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Track */}
      <div 
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto gap-6 pb-12 pt-4 snap-x snap-mandatory px-4 md:px-6 cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {casosUso.map((s, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            key={s.title} 
            className="w-[85vw] sm:w-[350px] flex-shrink-0 snap-start h-auto"
          >
            <Link href={s.href} className="block h-full outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-[0_12px_40px_-10px_rgba(29,78,216,0.18)] transition-all duration-500 h-full group/card cursor-pointer flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 transform origin-left scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 ease-out" />
                
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-blue-600 group-hover/card:bg-blue-600 group-hover/card:text-white transition-all duration-500 shadow-sm group-hover/card:shadow-md group-hover/card:-translate-y-1">
                    {s.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover/card:bg-blue-50 group-hover/card:text-blue-600 transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover/card:rotate-0 transition-transform duration-500" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover/card:text-blue-700 transition-colors duration-300">{s.title}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed flex-grow">{s.desc}</p>
                
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between overflow-hidden">
                  <span className="text-sm font-bold text-slate-400 group-hover/card:text-blue-600 transition-colors duration-300 relative">
                    <span className="relative z-10">Ver demo interactiva</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-200 -z-0 translate-y-1 opacity-0 group-hover/card:opacity-100 transition-all duration-300" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
