import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: ReactNode
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className = "",
  titleClassName = "",
  subtitleClassName = ""
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-4 lg:mb-6", className)}>
      <h1 className={cn(
        "section-title bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent",
        titleClassName
      )}>
        {title}
      </h1>

      {subtitle && (
        <p className={cn("section-subtitle", subtitleClassName)}>
          {subtitle}
        </p>
      )}

      {description && (
        <div className="mt-4 max-w-3xl mx-auto">
          {description}
        </div>
      )}
    </div>
  )
}