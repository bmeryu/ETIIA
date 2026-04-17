import Image from "next/image";
import { Linkedin } from "lucide-react";
import { FadeIn } from "./Reveal";

interface FounderCardProps {
    name: string;
    role: string;
    bio: string;
    imageSrc?: string;
    imageAlt: string;
    linkedinUrl: string;
    delay?: number;
}

export function FounderCard({
    name,
    role,
    bio,
    imageSrc,
    imageAlt,
    linkedinUrl,
    delay = 0,
}: FounderCardProps) {
    const initials = name.split(" ").slice(0, 2).map(w => w[0]).join("");

    return (
        <FadeIn delay={delay} className="w-full">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:shadow-md transition-all duration-300 h-full flex flex-col sm:flex-row gap-6 items-start">
                {/* Photo or fallback initials */}
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 shadow-sm">
                    {imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-navy to-cian flex items-center justify-center">
                            <span className="text-2xl sm:text-3xl font-bold text-white">{initials}</span>
                        </div>
                    )}
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-navy mb-0.5">{name}</h3>
                    <p className="text-sm font-semibold text-cian mb-3">{role}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{bio}</p>

                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-cian transition-colors"
                    >
                        <Linkedin className="w-3.5 h-3.5" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </FadeIn>
    );
}
