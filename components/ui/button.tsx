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
  primary: "bg-primary text-primary-foreground hover:bg-primary-light shadow-md hover:shadow-lg",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-light shadow-md hover:shadow-lg",
  outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground shadow-sm hover:shadow-lg",
  ghost: "text-foreground hover:bg-muted hover:text-primary",
  link: "text-primary hover:underline p-0 h-auto"
}

const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 py-2 text-sm",
  default: "h-11 px-6 py-2.5 text-sm",
  lg: "h-12 sm:h-14 px-6 sm:px-8 py-3 text-base sm:text-lg",
  xl: "h-14 px-10 py-4 text-lg"
}

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"

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