"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NavigationArrow } from "@/components/navigation-arrow"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  const pathname = usePathname()

  // Smart navigation mapping - follows header navigation order
  const navigationMap: Record<string, {
    next?: { path: string; label: string };
    previous?: { path: string; label: string };
  }> = {
    '/': {
      next: { path: '/journey', label: 'View Experience' }
    },
    '/journey': {
      next: { path: '/projects', label: 'View Projects' },
      previous: { path: '/', label: 'Back to Home' }
    },
    '/projects': {
      next: { path: '/skills', label: 'View Skills' },
      previous: { path: '/journey', label: 'Back to Experience' }
    },
    '/skills': {
      next: { path: '/recommendations', label: 'View Testimonials' },
      previous: { path: '/projects', label: 'Back to Projects' }
    },
    '/recommendations': {
      next: { path: '/contact', label: 'Get in Touch' },
      previous: { path: '/skills', label: 'Back to Skills' }
    },
    '/contact': {
      previous: { path: '/recommendations', label: 'Back to Testimonials' }
    }
  }

  const currentNav = navigationMap[pathname]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className={`relative z-10 pt-14 sm:pt-16 ${className}`}>
        {children}
      </main>
      <Footer />

      {/* Scroll to Top / Home Button */}
      <ScrollToTopButton />

      {/* Smart Navigation - Bidirectional arrows */}
      {currentNav?.next && (
        <NavigationArrow
          targetPath={currentNav.next.path}
          label={currentNav.next.label}
          variant="floating"
          size="md"
          direction="next"
        />
      )}

      {currentNav?.previous && (
        <NavigationArrow
          targetPath={currentNav.previous.path}
          label={currentNav.previous.label}
          variant="floating"
          size="md"
          direction="previous"
        />
      )}
    </div>
  )
}