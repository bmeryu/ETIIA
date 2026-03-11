import { FadeIn } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

export function SectionHeading({
    title,
    subtitle,
    centered = false,
    className,
}: SectionHeadingProps) {
    return (
        <div className={cn("mb-16", centered ? "text-center" : "", className)}>
            <FadeIn>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy mb-4">
                    {title}
                </h2>
            </FadeIn>

            {subtitle && (
                <FadeIn delay={0.1}>
                    <p className={cn(
                        "text-lg text-slate-600",
                        centered ? "mx-auto max-w-2xl" : "max-w-3xl"
                    )}>
                        {subtitle}
                    </p>
                </FadeIn>
            )}
        </div>
    );
}
