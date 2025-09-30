"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NavigationArrow } from "@/components/navigation-arrow"
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
      next: { path: '/journey', label: 'View Journey' }
    },
    '/journey': {
      next: { path: '/projects', label: 'View Projects' },
      previous: { path: '/', label: 'Back to Home' }
    },
    '/projects': {
      next: { path: '/skills', label: 'View Skills' },
      previous: { path: '/journey', label: 'Back to Journey' }
    },
    '/skills': {
      next: { path: '/leadership', label: 'View Leadership' },
      previous: { path: '/projects', label: 'Back to Projects' }
    },
    '/leadership': {
      next: { path: '/interests', label: 'View Interests' },
      previous: { path: '/skills', label: 'Back to Skills' }
    },
    '/interests': {
      next: { path: '/recommendations', label: 'View Recommendations' },
      previous: { path: '/leadership', label: 'Back to Leadership' }
    },
    '/recommendations': {
      next: { path: '/contact', label: 'Get in Touch' },
      previous: { path: '/interests', label: 'Back to Interests' }
    },
    '/contact': {
      previous: { path: '/recommendations', label: 'Back to Recommendations' }
    }
  }

  const currentNav = navigationMap[pathname]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className={`relative z-10 flex-1 ${className}`}>
        {children}
      </main>
      <Footer />

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