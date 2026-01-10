"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className={cn("relative z-10 pt-14 sm:pt-16", className)}>
        {children}
      </main>
      <Footer />

      {/* Scroll to Top / Home Button */}
      <ScrollToTopButton />
    </div>
  )
}