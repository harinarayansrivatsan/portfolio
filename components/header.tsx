"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/journey", label: "Journey" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/leadership", label: "Leadership" },
    { href: "/interests", label: "Interests" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ]

  const handleNavClick = (href: string) => {
    router.push(href)
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
      style={{
        boxShadow: isScrolled ? 'var(--shadow-lg)' : 'none'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div
            className="text-heading-4 font-heading text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
            onClick={() => handleNavClick("/")}
          >
            <span className="hidden sm:inline text-base font-semibold">Hari Narayan Srivatsan</span>
            <span className="sm:hidden text-sm font-semibold">Hari N. Srivatsan</span>
          </div>

          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg whitespace-nowrap relative overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-primary-light text-primary-foreground shadow-md"
                      : "text-foreground hover:text-primary hover:bg-muted/80 hover:scale-105"
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          <button
            className="md:hidden p-3 text-foreground hover:text-primary hover:bg-muted/80 rounded-xl transition-all duration-300 hover:scale-105"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <svg className="text-foreground" style={{ width: "clamp(1.25rem, 2.5vw, 1.5rem)", height: "clamp(1.25rem, 2.5vw, 1.5rem)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="text-foreground" style={{ width: "clamp(1.25rem, 2.5vw, 1.5rem)", height: "clamp(1.25rem, 2.5vw, 1.5rem)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="bg-white/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-xl">
            <div className="flex flex-col py-4">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`px-4 py-2.5 text-sm font-medium transition-all duration-300 text-left mx-3 mb-2 rounded-lg relative overflow-hidden ${
                      isActive
                        ? "bg-gradient-to-r from-primary to-primary-light text-primary-foreground shadow-md"
                        : "text-foreground hover:text-primary hover:bg-muted/80 hover:scale-105"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}