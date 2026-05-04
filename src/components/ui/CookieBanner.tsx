"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("etiia-cookie-consent");
    if (!consent) {
      // Small delay to ensure hydration before showing
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("etiia-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("etiia-cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none flex justify-center"
        >
          <div className="bg-[#0F172A]/95 border border-slate-700/50 shadow-2xl rounded-2xl md:rounded-full p-4 md:p-3 md:px-6 max-w-3xl w-full pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md">
            <div className="flex-1 text-center md:text-left">
              <p className="text-slate-300 text-xs md:text-sm">
                Usamos cookies para mejorar tu experiencia corporativa. Al navegar, aceptas nuestra{" "}
                <Link href="/politica-de-privacidad" className="text-white font-semibold hover:text-blue-300 underline underline-offset-2">
                  Política de Privacidad
                </Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full md:w-auto">
              <button
                onClick={declineCookies}
                className="w-full sm:w-auto px-4 py-2 md:py-1.5 rounded-xl md:rounded-full text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={acceptCookies}
                className="w-full sm:w-auto px-4 py-2 md:py-1.5 rounded-xl md:rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
