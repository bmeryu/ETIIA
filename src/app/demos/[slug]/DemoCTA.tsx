"use client";

import { useState } from "react";
import { Lock, X } from "lucide-react";
import DiagnosticoForm from "@/app/DiagnosticoForm";

export default function DemoCTA({ slug, demoName }: { slug: string, demoName: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* FLOATING GATED CTA (BOTTOM CENTER) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
        <div className="bg-[#0F172A]/95 backdrop-blur-md border border-slate-700/50 shadow-2xl rounded-2xl md:rounded-full p-4 md:p-3 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left flex-1">
            <p className="text-sm font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Lock className="w-4 h-4 text-blue-400" /> Modo de Demostración
            </p>
            <p className="text-xs text-slate-300 mt-1">
              Versión con datos de muestra.
            </p>
          </div>
          <button 
            onClick={() => setIsOpen(true)}
            className="shrink-0 bg-blue-600 text-white hover:bg-blue-500 w-full md:w-auto px-6 py-2.5 rounded-xl md:rounded-full text-xs font-bold transition-all shadow-lg shadow-blue-900/20 text-center hover:-translate-y-0.5"
          >
            Consultar para mi empresa
          </button>
        </div>
      </div>

      {/* MODAL BACKDROP & CONTAINER */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#0F172A]/80 backdrop-blur-sm">
          {/* MODAL CONTENT */}
          <div 
            className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
              <div>
                <h3 className="text-xl font-black tracking-tight text-[#0F172A]">Consultar por {demoName}</h3>
                <p className="text-xs text-slate-500 mt-1">Ingresa tus datos y te contactaremos para evaluar el caso de tu empresa.</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Form Container */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
              <DiagnosticoForm presetInteres={slug} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
