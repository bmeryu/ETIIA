"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const servicios = [
  { name: "Estrategia de Datos & IA", href: "/servicios#estrategia" },
  { name: "Machine Learning & IA Generativa", href: "/servicios#ml" },
  { name: "Automatización de Procesos", href: "/servicios#automatizacion" },
  { name: "Arquitectura Cloud", href: "/servicios#cloud" },
  { name: "Business Intelligence & Dashboards", href: "/servicios#bi" },
  { name: "Customer Intelligence", href: "/servicios#customer" },
];

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios", hasDropdown: true },
  { name: "Formación", href: "/formacion" },
  { name: "Equipo", href: "/equipo" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 py-3"
          : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group">
          <Logo theme="dark" className="text-[2.5rem] md:text-5xl" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-slate-500 hover:text-navy transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", isServicesOpen && "rotate-180")} />
                  </Link>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72"
                      >
                        <div className="bg-white rounded-xl shadow-lg border border-slate-100 py-2 overflow-hidden">
                          {servicios.map((s) => (
                            <Link
                              key={s.name}
                              href={s.href}
                              className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-navy transition-colors"
                            >
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-500 hover:text-navy transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contacto">
            <Button>Solicitar Diagnóstico</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 flex flex-col items-center py-6 gap-4 md:hidden shadow-sm overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-navy transition-colors"
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
