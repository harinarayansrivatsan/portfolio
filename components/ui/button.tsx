import { ReactNode, ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link"
type ButtonSize = "sm" | "default" | "lg" | "xl"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  asChild?: boolean
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-light shadow-sm hover:shadow-md",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-light shadow-sm hover:shadow-md",
  outline: "border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white shadow-sm hover:shadow-md",
  ghost: "text-foreground hover:bg-muted hover:text-primary",
  link: "text-primary hover:underline p-0 h-auto"
}

const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 py-2 text-sm",
  default: "h-11 px-6 py-2.5 text-base",
  lg: "h-12 px-8 py-3 text-base",
  xl: "h-14 px-10 py-4 text-lg"
}

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"

  return (
    <button
      className={cn(
        baseClasses,
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}