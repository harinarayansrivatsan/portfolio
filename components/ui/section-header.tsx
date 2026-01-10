import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: ReactNode
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-10 space-y-3", className)}>
      <div className="inline-block relative">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
          {title}
        </h2>
        <div className="w-20 h-1 bg-primary/80 mx-auto mt-3 rounded-full" />
      </div>

      {subtitle && (
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
          {subtitle}
        </p>
      )}

      {description && (
        <div className="mt-4 max-w-3xl mx-auto text-muted-foreground text-base">
          {description}
        </div>
      )}
    </div>
  )
}
