"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { FadeIn } from "./Reveal";

const contactSchema = z.object({
    name: z.string().min(2, "El nombre es muy corto"),
    company: z.string().min(2, "La empresa es requerida"),
    role: z.string().min(2, "El cargo es requerido"),
    email: z.string().email("Correo inválido"),
    challenge: z.string().min(10, "Cuéntanos un poco más sobre tu desafío"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        setError("");
        try {
            const res = await fetch("https://formspree.io/f/xjgarjgw", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.name,
                    company: data.company,
                    role: data.role,
                    email: data.email,
                    challenge: data.challenge,
                    _subject: "Lead - ETIIA | " + (data.company || data.name),
                }),
            });
            if (res.ok) {
                setIsSuccess(true);
                reset();
            } else {
                setError("Hubo un error al enviar el formulario. Intenta nuevamente.");
            }
        } catch {
            setError("Error de conexión. Verifica tu internet e intenta nuevamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <FadeIn>
                <div className="bg-cian/10 border border-cian/30 rounded-2xl p-8 text-center flex flex-col items-center">
                    <CheckCircle2 className="w-16 h-16 text-cian mb-4" />
                    <h3 className="text-2xl font-bold text-navy mb-2">¡Solicitud Recibida!</h3>
                    <p className="text-slate-600 mb-6">
                        Nos pondremos en contacto contigo en breve para coordinar el diagnóstico.
                    </p>
                    <Button onClick={() => setIsSuccess(false)} variant="outline">
                        Enviar otro mensaje
                    </Button>
                </div>
            </FadeIn>
        );
    }

    return (
        <FadeIn>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-navy">
                            Nombre Completo
                        </label>
                        <input
                            {...register("name")}
                            id="name"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cian transition-all bg-slate-50"
                            placeholder="Ej. Juan Pérez"
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-semibold text-navy">
                            Empresa
                        </label>
                        <input
                            {...register("company")}
                            id="company"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cian transition-all bg-slate-50"
                            placeholder="Ej. Acme Corp"
                        />
                        {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="role" className="text-sm font-semibold text-navy">
                            Cargo
                        </label>
                        <input
                            {...register("role")}
                            id="role"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cian transition-all bg-slate-50"
                            placeholder="Ej. Gerente General / CTO"
                        />
                        {errors.role && <p className="text-red-500 text-xs">{errors.role.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-navy">
                            Correo Electrónico Corporativo
                        </label>
                        <input
                            {...register("email")}
                            id="email"
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cian transition-all bg-slate-50"
                            placeholder="juan@empresa.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="challenge" className="text-sm font-semibold text-navy flex items-center justify-between">
                        <span>¿Cuál es tu principal desafío de negocio hoy?</span>
                        <span className="text-xs text-slate-400 font-normal">Opcional pero recomendado</span>
                    </label>
                    <textarea
                        {...register("challenge")}
                        id="challenge"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cian transition-all bg-slate-50 resize-none"
                        placeholder="Nuestros datos están silos y no logramos medir el ROI de las iniciativas anteriores..."
                    />
                    {errors.challenge && <p className="text-red-500 text-xs">{errors.challenge.message}</p>}
                </div>

                {error && (
                    <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
                )}

                <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Procesando...
                        </>
                    ) : (
                        "Solicitar Diagnóstico Gratuito"
                    )}
                </Button>
            </form>
        </FadeIn>
    );
}
