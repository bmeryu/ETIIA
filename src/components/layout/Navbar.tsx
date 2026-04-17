"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Formación", href: "/formacion" },
  { name: "Equipo", href: "/equipo" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-white/96 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm"
          : "bg-white py-5"
      )}
    >
      {/* ═══ Scroll Progress Bar ═══ */}
      <div
        className="absolute top-0 left-0 h-[3px] rounded-r bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group">
          <Logo theme="dark" className="text-[2.5rem] md:text-5xl" />
        </Link>

        {/* ═══ Desktop Nav ═══ */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-link-animated text-sm font-medium text-slate-500 hover:text-[#0F172A] transition-colors pb-0.5"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contacto">
            <Button>Solicitar Diagnóstico</Button>
          </Link>
        </div>

        {/* ═══ Mobile Toggle ═══ */}
        <button
          className="md:hidden text-slate-700 hover:text-[#0F172A] transition-colors p-1"
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
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 flex flex-col items-center py-6 gap-4 md:hidden shadow-md overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-blue-700 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>
              <Button>Solicitar Diagnóstico</Button>
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
