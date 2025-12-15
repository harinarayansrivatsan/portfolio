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
    <div className={cn("text-center mb-16 space-y-4", className)}>
      <div className="inline-block relative">
        <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-foreground to-white/70 pb-2">
          {title}
        </h2>
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-sm mix-blend-screen" />
      </div>

      {subtitle && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      {description && (
        <div className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          {description}
        </div>
      )}
    </div>
  )
}
