import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ProfessionalCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  clickable?: boolean
  onClick?: () => void
}

export function ProfessionalCard({
  children,
  className = "",
  hover = true,
  clickable = false,
  onClick
}: ProfessionalCardProps) {
  const baseClasses = "bg-background border-2 border-border rounded-xl shadow-lg transition-all duration-300"
  const hoverClasses = hover ? "hover:shadow-xl hover:-translate-y-1" : ""
  const clickableClasses = clickable ? "cursor-pointer hover:border-primary/30" : ""

  return (
    <div
      className={cn(
        baseClasses,
        hoverClasses,
        clickableClasses,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
  padding?: "sm" | "default" | "lg"
}

export function CardContent({
  children,
  className = "",
  padding = "default"
}: CardContentProps) {
  const paddingClasses = {
    sm: "p-4",
    default: "p-6",
    lg: "p-8"
  }

  return (
    <div className={cn(paddingClasses[padding], className)}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  className?: string
}

export function CardHeader({
  title,
  subtitle,
  badge,
  className = ""
}: CardHeaderProps) {
  return (
    <div className={cn("mb-4", className)}>
      {badge && (
        <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-2">
          {badge}
        </span>
      )}
      <h3 className="text-lg font-bold text-primary mb-1 leading-tight">
        {title}
      </h3>
      {subtitle && (
        <p className="text-sm text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}