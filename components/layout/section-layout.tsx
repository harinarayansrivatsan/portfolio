"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

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

  // Journey section needs scrollable content
  // All other sections should fit in viewport with top-center alignment
  const sectionClasses = isJourneySection
    ? "relative w-full min-h-screen flex items-start justify-center px-3 sm:px-4 lg:px-6"
    : "relative w-full min-h-screen flex items-start justify-center px-3 sm:px-4 lg:px-6"

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        sectionClasses,
        "scroll-mt-14 sm:scroll-mt-16",
        "transition-all duration-700 ease-out",
        // Add top padding for all sections to account for fixed header
        "pt-[calc(3.5rem+1rem)] sm:pt-[calc(4rem+1.5rem)]",
        variant === "alternate" && "bg-[#f8f9fb]",
        isFirstSection || isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </section>
  )
}
