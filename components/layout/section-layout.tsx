import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionLayoutProps {
  children: ReactNode
  id?: string
  className?: string
}

export function SectionLayout({
  children,
  id,
  className = ""
}: SectionLayoutProps) {
  // Standardized layout for consistent viewport usage
  const baseClasses = "relative overflow-hidden"

  return (
    <section
      id={id}
      className={cn(baseClasses, className)}
    >
      <div className="universal-container">
        <div className="section-content">
          {children}
        </div>
      </div>
    </section>
  )
}