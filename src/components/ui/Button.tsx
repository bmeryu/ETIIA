import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-2 cursor-pointer"
    
    const variants = {
      // Blue-700 corporativo — reemplaza el rojo que era ajeno al ecosistema
      default: "bg-gradient-to-br from-blue-700 to-blue-600 text-white font-bold shadow-[0_4px_14px_rgba(29,78,216,0.30)] hover:shadow-[0_6px_22px_rgba(29,78,216,0.45)] hover:-translate-y-0.5 tracking-wide hover:from-blue-800 hover:to-blue-700",
      outline: "border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-blue-200 hover:text-blue-700",
      ghost: "hover:bg-blue-50/60 text-slate-600 hover:text-blue-700",
    }
    
    return (
      <button
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
