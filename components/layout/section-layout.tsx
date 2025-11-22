"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { LAYOUT } from "@/lib/design-system"

interface SectionLayoutProps {
  children: ReactNode
  id?: string
  className?: string
  variant?: "default" | "alternate"
}

export function SectionLayout({
  children,
  id,
  className = "",
  variant = "default"
}: SectionLayoutProps) {
  const isFirstSection = id === "home"
  const isJourneySection = id === "journey"

  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.15,
    rootMargin: "-50px",
    triggerOnce: true,
  })

  // Choose layout based on section type
  const layoutClass = isJourneySection
    ? LAYOUT.section.journey
    : LAYOUT.section.default

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        layoutClass,
        "scroll-mt-14 sm:scroll-mt-16",
        "transition-all duration-700 ease-out",
        // Add top padding for first section to account for fixed header
        isFirstSection ? "pt-14 sm:pt-16" : "",
        variant === "alternate" && "bg-[#f8f9fb]",
        isFirstSection || isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </section>
  )
}
