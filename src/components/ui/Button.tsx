import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cian disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-2 cursor-pointer"
    
    const variants = {
      default: "bg-gradient-to-br from-red-600 to-red-500 text-white font-bold shadow-[0_4px_14px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)] hover:-translate-y-0.5 tracking-wide",
      outline: "border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300",
      ghost: "hover:bg-slate-100/50 text-slate-600",
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
