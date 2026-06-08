"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Inicio", href: "/" },
  { 
    name: "Soluciones de IA", 
    href: "/demos",
    megaMenuTheme: "blue",
    megaMenu: [
      {
        title: "Atención & Ventas",
        items: [
          { name: "AtendeAI", desc: "Agente autónomo RAG", href: "/demos/atendeai" },
          { name: "VentaAI", desc: "Recomendación retail", href: "/demos/ventaai" },
          { name: "ProspectAI", desc: "Outbound B2B", href: "/demos/prospectai" }
        ]
      },
      {
        title: "Backoffice",
        items: [
          { name: "FacturAI", desc: "OCR y conciliación", href: "/demos/facturai" },
          { name: "AutoRend IA", desc: "Rendiciones en ERP", href: "/demos/autorend" }
        ]
      },
      {
        title: "Legal & RRHH",
        items: [
          { name: "LexSearch", desc: "Buscador de contratos", href: "/demos/lexsearch" },
          { name: "TalentParse", desc: "Ranking de CVs", href: "/demos/talentparse" }
        ]
      },
      {
        title: "Salud, Agro & Más",
        items: [
          { name: "AgendAI", desc: "Predicción de inasistencias", href: "/demos/agendai" },
          { name: "CosechAI", desc: "ML agrícola predictivo", href: "/demos/cosechai" },
          { name: "TranscribAI", desc: "Transcripción y análisis", href: "/demos/transcribai" }
        ]
      }
    ]
  },
  { 
    name: "Perspectivas", 
    href: "/insights",
    megaMenuTheme: "navy",
    megaMenu: [
      {
        title: "Artículos Destacados",
        items: [
          { name: "Digitalizar el desorden", desc: "El error más caro al comprar IA.", href: "/insights/pilar-1-gobernanza" },
          { name: "Automatizar lo roto", desc: "Por qué es tirar dinero a la basura.", href: "/insights/pilar-2-transformacion" }
        ]
      },
      {
        title: "Estrategia & Talento",
        items: [
          { name: "El mito del Ingeniero IA", desc: "El verdadero talento que necesitas.", href: "/insights/pilar-3-talento" },
          { name: "La puerta trasera invisible", desc: "El mayor riesgo de seguridad.", href: "/insights/pilar-4-seguridad" }
        ]
      },
      {
        title: "Recursos B2B",
        items: [
          { name: "UpSkilling y Formación", desc: "Entrena a tu equipo interno.", href: "/servicios#formacion" },
          { name: "Desarrollo a Medida", desc: "Soluciones y arquitecturas RAG.", href: "/servicios#a-medida" }
        ]
      }
    ]
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setHoveredNav(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Scroll progress bar
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center pointer-events-none pt-4 pb-4 transition-all duration-500">
      <header
        className={cn(
          "pointer-events-auto w-full transition-all duration-500",
          isScrolled || isMobileMenuOpen
            ? "max-w-5xl mx-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2.5 px-2"
            : "max-w-[100%] bg-transparent py-3"
        )}
      >


      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group">
          <Logo theme={pathname.startsWith("/insights") && !isScrolled && !isMobileMenuOpen ? "light" : "dark"} className="text-[2.5rem] md:text-5xl" />
        </Link>

        {/* ═══ Desktop Nav ═══ */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => setHoveredNav(link.name)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "nav-link-animated text-sm font-medium flex items-center py-2 transition-colors",
                  pathname.startsWith("/insights") && !isScrolled && !isMobileMenuOpen
                    ? "text-slate-300 hover:text-white"
                    : "text-slate-500 hover:text-[#0F172A]"
                )}
              >
                {link.name}
              </Link>
              
              {/* EY-style Horizontal Mega Menu */}
              {link.megaMenu && (
                <div className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 z-50",
                  link.megaMenu.length >= 4 ? "w-[880px]" : "w-[680px]",
                  hoveredNav === link.name 
                    ? "opacity-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 translate-y-2 pointer-events-none"
                )}>
                  <div className={cn(
                    "bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-100 p-8 flex flex-col gap-6 relative overflow-hidden",
                    link.megaMenuTheme === "navy" ? "border-t-4 border-t-blue-950" : "border-t-4 border-t-blue-600"
                  )}>
                    <div className={cn(
                      "absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2 transition-colors duration-500",
                      link.megaMenuTheme === "navy" ? "bg-slate-200/60" : "bg-blue-100/60"
                    )} />
                    
                    <div className={cn("gap-6", link.megaMenu.length >= 4 ? "grid grid-cols-4" : "grid grid-cols-3")}>
                      {link.megaMenu.map((column) => (
                        <div key={column.title}>
                          <h4 className={cn(
                            "text-[10px] font-bold uppercase tracking-widest mb-4 inline-block px-2.5 py-1 rounded-md",
                            link.megaMenuTheme === "navy" ? "text-white bg-[#0F172A]" : "text-blue-800 bg-blue-50"
                          )}>
                            {column.title}
                          </h4>
                          <div className="flex flex-col gap-4">
                            {column.items.map((item) => (
                              <Link 
                                key={item.name} 
                                href={item.href}
                                className="group/item flex flex-col"
                              >
                                <span className={cn(
                                  "text-sm font-black text-slate-800 transition-colors",
                                  link.megaMenuTheme === "navy" ? "group-hover/item:text-[#0F172A]" : "group-hover/item:text-blue-700"
                                )}>{item.name}</span>
                                <span className="text-xs text-slate-500 mt-0.5">{item.desc}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 mt-2 border-t border-slate-100 flex justify-between items-center">
                      <p className="text-xs text-slate-500">
                        {link.megaMenuTheme === "navy" ? "Lee nuestros últimos análisis." : "Explora nuestra librería B2B."}
                      </p>
                      <Link href={link.href} className={cn(
                        "text-xs font-bold flex items-center transition-colors px-4 py-2 rounded-lg",
                        link.megaMenuTheme === "navy" ? "bg-[#0F172A] text-white hover:bg-black" : "bg-blue-700 text-white hover:bg-blue-800"
                      )}>
                        {link.megaMenuTheme === "navy" ? "Ver todos los artículos" : "Ver catálogo completo"} <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          {pathname !== "/contacto" && (
            <Link href="/contacto">
              <Button variant={pathname.startsWith("/insights") && !isScrolled && !isMobileMenuOpen ? "light" : "dark"}>Conversemos</Button>
            </Link>
          )}
        </div>

        {/* ═══ Mobile Toggle ═══ */}
        <button
          className="md:hidden text-slate-700 hover:text-[#0F172A] transition-colors p-3 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menú"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ═══ Mobile Nav ═══ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-b border-slate-100 flex flex-col items-center py-6 gap-4 md:hidden shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="w-full flex flex-col items-center">
                {link.megaMenu ? (
                  <details className="w-full group text-center">
                    <summary className="text-lg transition-all font-medium text-slate-700 hover:text-blue-700 flex justify-center items-center gap-1.5 cursor-pointer list-none py-1">
                      {link.name}
                      <svg className="w-4 h-4 transition-transform group-open:rotate-180 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="flex flex-col items-center gap-3 pt-4 pb-2 bg-slate-50 mt-3 rounded-2xl mx-4">
                      <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-blue-700 mb-1">Ir a {link.name} →</Link>
                      {link.megaMenu.flatMap(m => m.items).map(item => (
                        <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[13px] font-semibold text-slate-600 hover:text-[#0F172A]">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg transition-all py-1",
                      link.name === "Conversemos"
                        ? "bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-2 rounded-full mt-2"
                        : "font-medium text-slate-700 hover:text-blue-700"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            {pathname !== "/contacto" && (
              <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="dark">Conversemos</Button>
              </Link>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
      </header>
    </div>
  );
}
