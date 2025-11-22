import { ReactNode } from "react"
import { TEXT, cn } from "@/lib/design-system"

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
    <div className={cn("text-center mb-8", className)}>
      <h1 className={cn(
        TEXT.section.title,
        "text-foreground mb-2",
        titleClassName
      )}>
        {title}
      </h1>

      {subtitle && (
        <p className={cn(
          TEXT.section.subtitle,
          "text-muted-foreground max-w-2xl mx-auto mb-6",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}

      {description && (
        <div className="mt-2 max-w-3xl mx-auto">
          {description}
        </div>
      )}
    </div>
  )
}
