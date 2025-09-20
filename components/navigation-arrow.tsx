"use client"

import { ChevronDown, ChevronRight, ArrowRight, ArrowLeft } from "lucide-react"

interface NavigationArrowProps {
  targetPath: string
  label?: string
  variant?: 'floating' | 'inline' | 'bottom-center'
  size?: 'sm' | 'md' | 'lg'
  direction?: 'next' | 'previous'
}

export function NavigationArrow({
  targetPath,
  label = "Continue",
  variant = 'floating',
  size = 'md',
  direction = 'next'
}: NavigationArrowProps) {
  const handleClick = () => {
    window.location.href = targetPath
  }

  const sizeClasses = {
    sm: 'h-8 w-8 sm:h-10 sm:w-10',
    md: 'h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14',
    lg: 'h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16'
  }

  const iconSizes = {
    sm: 'w-3 h-3 sm:w-4 sm:h-4',
    md: 'w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6',
    lg: 'w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7'
  }

  if (variant === 'floating') {
    const positionClass = direction === 'next'
      ? "fixed top-1/2 right-4 sm:right-6 lg:right-8 z-50 transform -translate-y-1/2"
      : "fixed top-1/2 left-4 sm:left-6 lg:left-8 z-50 transform -translate-y-1/2"

    const icon = direction === 'next'
      ? <ArrowRight className={`${iconSizes[size]} transition-transform duration-300 group-hover:translate-x-0.5`} />
      : <ArrowLeft className={`${iconSizes[size]} transition-transform duration-300 group-hover:-translate-x-0.5`} />

    return (
      <div className={positionClass}>
        <button
          onClick={handleClick}
          className={`${sizeClasses[size]} bg-primary hover:bg-primary-light text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group flex items-center justify-center backdrop-blur-sm border border-primary-dark/20`}
          aria-label={`Navigate to ${label}`}
        >
          {icon}
        </button>
      </div>
    )
  }

  if (variant === 'bottom-center') {
    return (
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-50 sm:bottom-20 lg:bottom-24">
        <button
          onClick={handleClick}
          className="bg-white/90 hover:bg-primary hover:text-primary-foreground text-primary border border-primary/30 rounded-full px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md group flex items-center gap-2"
          aria-label={`Navigate to ${label}`}
        >
          <span className="text-xs sm:text-sm lg:text-base font-medium">
            {label}
          </span>
          <ChevronRight className={`${iconSizes.sm} transition-transform duration-300 group-hover:translate-x-0.5`} />
        </button>
      </div>
    )
  }

  // Inline variant
  return (
    <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10">
      <button
        onClick={handleClick}
        className="bg-primary hover:bg-primary-light text-primary-foreground rounded-xl px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group flex items-center gap-2 sm:gap-3"
        aria-label={`Navigate to ${label}`}
      >
        <span className="text-sm sm:text-base lg:text-lg font-semibold">
          {label}
        </span>
        <ArrowRight className={`${iconSizes.sm} transition-transform duration-300 group-hover:translate-x-1`} />
      </button>
    </div>
  )
}

// Section scroll navigation for within-page navigation
interface SectionScrollProps {
  targetSection: string
  label?: string
}

export function SectionScroll({ targetSection, label = "Next Section" }: SectionScrollProps) {
  const scrollToSection = () => {
    const element = document.getElementById(targetSection)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-40 sm:bottom-20 lg:bottom-24">
      <button
        onClick={scrollToSection}
        className="bg-white/80 hover:bg-primary/10 text-primary border border-primary/20 rounded-full p-2 sm:p-3 lg:p-4 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm group animate-bounce hover:animate-none"
        aria-label={`Scroll to ${label}`}
      >
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-y-1" />
      </button>
    </div>
  )
}