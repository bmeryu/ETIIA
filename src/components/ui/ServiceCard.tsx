"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FadeIn } from "./Reveal";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    strategyPoint: string;
    engineeringPoint: string;
    delay?: number;
}

export function ServiceCard({
    title,
    description,
    icon,
    strategyPoint,
    engineeringPoint,
    delay = 0,
}: ServiceCardProps) {
    return (
        <FadeIn delay={delay} fullWidth>
            <motion.div
                whileHover={{ y: -4 }}
                className="h-full bg-white rounded-2xl p-7 border border-slate-200/80 hover:shadow-lg hover:border-cian/20 transition-all duration-300 group"
            >
                <div className="w-11 h-11 bg-slate-50 text-cian rounded-lg flex items-center justify-center mb-5 group-hover:bg-cian/10 transition-colors">
                    {icon}
                </div>

                <h3 className="text-lg font-bold text-navy mb-2 leading-snug">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{description}</p>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cian mt-1.5 shrink-0" />
                        <p className="text-xs text-slate-500 leading-relaxed">
                            <span className="font-semibold text-slate-700">Strategy</span> · {strategyPoint}
                        </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                        <p className="text-xs text-slate-500 leading-relaxed">
                            <span className="font-semibold text-slate-700">Engineering</span> · {engineeringPoint}
                        </p>
                    </div>
                </div>
            </motion.div>
        </FadeIn>
    );
}
