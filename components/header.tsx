"use client"

import { useState, useEffect, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import { TEXT, COMPONENTS, SPACING, cn } from "@/lib/design-system"

const SCROLL_THRESHOLD = 50

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "journey", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "interests", label: "Interests" },
  { id: "recommendations", label: "Testimonials" },
  { id: "contact", label: "Contact" },
]

const EXTERNAL_NAV_ITEMS = [
  { href: "/resume", label: "Resume" },
]

export function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Only observe sections if we're on the homepage
    if (!isHomePage) return

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -30% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [isHomePage])

  const handleNavClick = useCallback((sectionId: string) => {
    // If we're not on the homepage, navigate to homepage with hash
    if (!isHomePage) {
      router.push(`/#${sectionId}`)
      setIsMobileMenuOpen(false)
      return
    }

    // If we're on the homepage, scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }, [isHomePage, router])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "h-14 sm:h-16",
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-md border-b border-border/30"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className={cn("container mx-auto px-4 sm:px-6 h-full")}>
        <div className="flex items-center justify-between h-full">

          {/* Logo/Name */}
          <button
            className={cn(TEXT.nav.logo, "font-bold text-foreground hover:text-primary transition-colors duration-200")}
            onClick={() => handleNavClick("home")}
          >
            <span className="hidden sm:inline">Hari Narayan Srivatsan</span>
            <span className="sm:hidden">HNS</span>
          </button>

          {/* Desktop Navigation */}
          <nav className={cn("hidden md:flex items-center", SPACING.gap.xs)}>
            {NAV_ITEMS.map((item) => {
              const isActive = isHomePage && activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-full transition-all duration-200",
                    TEXT.nav.link,
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  )}
                >
                  {item.label}
                </button>
              )
            })}
            {EXTERNAL_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-1.5 rounded-full transition-all duration-200",
                    TEXT.nav.link,
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  )}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full right-4 mt-2 bg-white rounded-lg shadow-xl border border-border/30 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 min-w-[200px]">
            <nav className={cn("flex flex-col p-2", SPACING.gap.xs)}>
              {NAV_ITEMS.map((item) => {
                const isActive = isHomePage && activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={cn(
                      "px-4 py-2 rounded-full transition-all duration-200 text-right whitespace-nowrap",
                      TEXT.nav.link,
                      isActive
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:text-white hover:bg-primary"
                    )}
                  >
                    {item.label}
                  </button>
                )
              })}
              {EXTERNAL_NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-full transition-all duration-200 text-right whitespace-nowrap",
                      TEXT.nav.link,
                      isActive
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:text-white hover:bg-primary"
                    )}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
