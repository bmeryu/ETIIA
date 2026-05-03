"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("https://formspree.io/f/xjgarjgw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Lead - Suscripción Newsletter Perspectivas ETIIA",
          email,
        }),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-indigo-900/40 border border-indigo-500/30 rounded-xl p-6 flex flex-col items-center gap-3 animate-in fade-in zoom-in max-w-md mx-auto">
        <CheckCircle2 className="w-8 h-8 text-indigo-400" />
        <h3 className="text-white font-bold text-lg">¡Suscripción confirmada!</h3>
        <p className="text-neutral-300 text-sm">A partir de ahora recibirás nuestro análisis mensual.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative">
      <input 
        type="email" 
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading}
        placeholder="Tu correo corporativo" 
        className="flex-1 bg-neutral-950 border border-neutral-800 text-white px-5 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-neutral-600 disabled:opacity-50"
      />
      <button 
        type="submit"
        disabled={loading}
        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-indigo-900/20 whitespace-nowrap disabled:opacity-50 flex items-center justify-center min-w-[140px]"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Suscribirme"}
      </button>
      {error && (
        <p className="absolute -bottom-8 left-0 right-0 text-red-400 text-xs font-bold text-center">
          Ocurrió un error. Por favor, inténtalo de nuevo.
        </p>
      )}
    </form>
  );
}
