import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { DIMENSIONS } from "@/lib/constants"

interface ProfessionalCardBaseProps {
  icon?: string
  gradient: string
  children: ReactNode
  className?: string
  minHeight?: string
  maxWidth?: string
}

export function ProfessionalCardBase({
  icon,
  gradient,
  children,
  className = "",
  minHeight = DIMENSIONS.CARD_MIN_HEIGHT,
  maxWidth = DIMENSIONS.CARD_MAX_WIDTH,
}: ProfessionalCardBaseProps) {
  return (
    <div className={cn("relative w-full", maxWidth, className)}>
      <div className={cn("relative w-full rounded-3xl overflow-hidden bg-background border border-border/50 shadow-sm flex flex-col", minHeight)}>
        {/* Background Gradient */}
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-10", gradient)} />

        {/* Icon Section */}
        {icon && (
          <div className={cn("w-full relative overflow-hidden flex items-center justify-center bg-white", DIMENSIONS.ICON_HEIGHT)}>
            <div className="text-5xl leading-none flex items-center justify-center w-full h-full">
              {icon}
            </div>
          </div>
        )}

        {/* Content */}
        {children}

        {/* Bottom Accent */}
        <div className={cn("absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r", gradient)} />
      </div>
    </div>
  )
}
