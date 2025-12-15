"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "recommendations", label: "Recommendations" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleIntersection = () => {
      const sections = NAV_ITEMS.map(item => item.id)

      // Basic scroll spy
      for (const id of sections.reverse()) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(id)
            return
          }
        }
      }
    }

    if (isHomePage) {
      window.addEventListener("scroll", handleIntersection)
      return () => window.removeEventListener("scroll", handleIntersection)
    }
  }, [isHomePage])

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      // scroll with offset
      const y = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
      setActiveSection(id)
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 transition-all duration-300",
          isScrolled ? "pt-2" : "pt-6"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={cn(
          "relative flex items-center justify-between px-6 py-3 gap-4 rounded-full transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border border-white/10 shadow-lg w-[90%] sm:w-auto sm:min-w-[500px]"
            : "bg-transparent w-full max-w-7xl"
        )}>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-background/50 backdrop-blur-sm p-1 rounded-full border border-white/5 mx-auto">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 relative",
                  activeSection === item.id
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/20 border border-primary/50 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Resume Button & Mobile Toggle */}
          <div className={cn("flex items-center gap-4", !isScrolled && "absolute right-6")}>
            <a
              href="/resume"
              className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white transition-all duration-200 bg-primary hover:bg-primary/80 shadow-[0_0_20px_-5px_var(--color-primary)] rounded-full hover:scale-105"
            >
              Resume
            </a>

            <button
              className="md:hidden p-2 text-foreground relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-2xl font-bold text-left text-foreground py-2 border-b border-white/5"
                >
                  {item.label}
                </button>
              ))}
              <a href="/resume" className="text-2xl font-bold text-left text-primary py-4">
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
