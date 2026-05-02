"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
    dropdown: [
      { name: "AtendeAI (Cliente)", href: "/demos/atendeai" },
      { name: "FacturAI (Finanzas)", href: "/demos/facturai" },
      { name: "LexSearch (Legal)", href: "/demos/lexsearch" },
      { name: "TalentParse (RRHH)", href: "/demos/talentparse" },
      { name: "Catálogo completo →", href: "/demos", isSpecial: true }
    ]
  },
  { name: "Perspectivas", href: "/insights" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

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
          <Logo theme="dark" className="text-[2.5rem] md:text-5xl" />
        </Link>

        {/* ═══ Desktop Nav ═══ */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="nav-link-animated text-sm font-medium text-slate-500 hover:text-[#0F172A] flex items-center py-2 transition-colors"
              >
                {link.name}
              </Link>
              
              {/* EY-style Dropdown */}
              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 w-56">
                  <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 p-2 flex flex-col">
                    {link.dropdown.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.href}
                        className={cn(
                          "px-3 py-2 rounded-xl text-sm transition-all",
                          subItem.isSpecial 
                            ? "text-blue-700 font-bold bg-blue-50 mt-1 hover:bg-blue-100 text-center" 
                            : "text-slate-600 hover:text-[#0F172A] hover:bg-slate-50 font-medium"
                        )}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          {pathname !== "/contacto" && (
            <Link href="/contacto">
              <Button variant="dark">Contáctanos</Button>
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
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-lg transition-all",
                  link.name === "Contáctanos"
                    ? "bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-5 py-2 rounded-full mt-2"
                    : "font-medium text-slate-700 hover:text-blue-700"
                )}
              >
                {link.name}
              </Link>
            ))}
            {pathname !== "/contacto" && (
              <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="dark">Contáctanos</Button>
              </Link>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
      </header>
    </div>
  );
}
