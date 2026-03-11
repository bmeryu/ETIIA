import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2),
    company: z.string().min(2),
    role: z.string().min(2),
    email: z.string().email(),
    challenge: z.string().optional(),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Server-side validation
        const parsedData = contactSchema.parse(body);

        // In a real scenario, here we would:
        // 1. Send an email via Resend/SendGrid to contacto@etia.ai
        // 2. Add lead to a CRM (HubSpot, Salesforce) or a Database (Supabase)

        // Simulating delay for the robust feel
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: "Lead recibido exitosamente", data: parsedData },
            { status: 200 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { message: "Validación fallida", errors: (error as any).errors },
                { status: 400 }
            );
        }

        console.error("Error en API Contacto:", error);
        return NextResponse.json(
            { message: "Error interno del servidor" },
            { status: 500 }
        );
    }
}
