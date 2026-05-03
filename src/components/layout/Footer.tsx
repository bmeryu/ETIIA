import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy pt-16 pb-8 text-slate-400">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-12">
          {/* Logo + Desc */}
          <div className="md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Logo theme="light" className="text-[2.5rem] md:text-5xl" />
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed mt-3 tracking-wide">
              <span className="text-white font-bold">E</span>strategia{" · "}
              <span className="text-white font-bold">T</span>ecnología{" · "}
              <span className="text-white font-bold">I</span>mpacto{" · "}
              <span className="text-white font-bold">I</span>nteligencia{" "}
              <span className="text-blue-400 font-bold">A</span>rtificial
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mt-3">
              Consultoría en Inteligencia Artificial.
            </p>
          </div>

          {/* Soluciones */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Soluciones</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/demos" className="hover:text-white transition-colors">Portafolio de Software</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Evaluación de Viabilidad</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition-colors">Desarrollo a Medida</Link></li>
              <li><a href="https://aulagenia.cl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Capacitación (AulaGenIA)</a></li>
            </ul>
          </div>

          {/* Perspectivas */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Perspectivas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/insights" className="hover:text-white transition-colors">Todos los artículos</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Cultura de Datos</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Gobernanza de IA</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Transformación B2B</Link></li>
            </ul>
          </div>

          {/* Empresa & Legal */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#equipo" className="hover:text-white transition-colors">El Equipo</Link></li>
              <li><Link href="/politica-de-privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
              <li><Link href="/terminos-de-servicio" className="hover:text-white transition-colors">Términos de Servicio</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:hola@etiia.com" className="hover:text-white transition-colors">hola@etiia.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 shrink-0" />
                <a href="https://linkedin.com/company/etiia" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© {currentYear} ETIIA Consulting — Santiago, Chile 🇨🇱</span>

          {/* Ecosystem badge — visible but quiet */}
          <a
            href="https://bernarditamery.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 text-slate-500 hover:text-slate-300 transition-all duration-200 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="tracking-wide uppercase" style={{ fontSize: "0.6rem", letterSpacing: "0.12em" }}>
              Ecosistema Bernardita Mery
            </span>
          </a>

          <span>Partners: AWS · Google Cloud</span>
        </div>
      </div>
    </footer>
  );
}
