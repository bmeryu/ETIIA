import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy pt-16 pb-8 text-slate-400">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo + Desc */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo variant="diamond" theme="light" className="h-9" />
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              Transformando Data en Estrategia y Crecimiento. Consultoría en Datos e IA.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/servicios#estrategia" className="hover:text-white transition-colors">Estrategia de Datos</Link></li>
              <li><Link href="/servicios#ml" className="hover:text-white transition-colors">Machine Learning & IA</Link></li>
              <li><Link href="/servicios#automatizacion" className="hover:text-white transition-colors">Automatización</Link></li>
              <li><Link href="/servicios#cloud" className="hover:text-white transition-colors">Arquitectura Cloud</Link></li>
              <li><Link href="/servicios#bi" className="hover:text-white transition-colors">Business Intelligence</Link></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/la-diferencia" className="hover:text-white transition-colors">Equipo</Link></li>
              <li><Link href="/formacion" className="hover:text-white transition-colors">Formación</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:contacto@etia.cl" className="hover:text-white transition-colors">contacto@etia.cl</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 shrink-0" />
                <a href="https://linkedin.com/company/etia" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© {currentYear} ETIA Consulting — Santiago, Chile 🇨🇱</span>
          <span>Partners: AWS · Google Cloud</span>
        </div>
      </div>
    </footer>
  );
}
