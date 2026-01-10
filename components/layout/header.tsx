"use client"

import { Menu, X } from "lucide-react"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useScrollSpy } from "@/lib/hooks/use-scroll-spy"

import { NAV_ITEMS } from "@/lib/data"

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  // Use the scroll spy to track active section
  const activeSection = useScrollSpy(NAV_ITEMS.map(item => item.id), 100)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none pt-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={cn(
            "relative flex items-center justify-between px-2 pl-6 pr-2 py-2 gap-2 rounded-full pointer-events-auto",
            "bg-background/80 border border-border shadow-sm backdrop-blur-md",
            "w-fit max-w-[95%]"
          )}
        >
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 mx-auto">
            {NAV_ITEMS.map((navItem) => (
              <Button
                key={navItem.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(navItem.id)}
                className={cn(
                  "relative h-9 px-4 hover:bg-transparent rounded-full transition-colors duration-200 cursor-pointer",
                  activeSection === navItem.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground"
                )}
              >
                {activeSection === navItem.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 text-sm font-medium">
                  {navItem.label}
                </span>
              </Button>
            ))}
          </nav>

          {/* Resume Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button
                asChild
                size="sm"
                className="text-sm font-medium rounded-full shadow-sm w-24"
              >
                <a href="/resume">Resume</a>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative z-50 hover:bg-transparent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md md:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-x-0 top-0 bg-background border-b border-border shadow-2xl pt-24 pb-8 px-6 flex flex-col space-y-6"
            >
              <nav className="flex flex-col space-y-2">
                {NAV_ITEMS.map((item, i) => (
                  <Button
                    key={item.id}
                    asChild
                    variant="ghost"
                    className="justify-start h-auto p-0 hover:bg-transparent"
                  >
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "text-lg font-medium text-left py-3 px-4 rounded-xl transition-colors w-full",
                        activeSection === item.id
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </motion.button>
                  </Button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 border-t border-border"
              >
                <Button asChild size="lg" className="w-full text-base font-semibold h-12 rounded-xl shadow-lg shadow-primary/20">
                  <a href="/resume">Download Resume</a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Click outside to close */}
            <div className="flex-1 h-full w-full cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
