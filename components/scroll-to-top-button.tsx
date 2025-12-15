"use client"

import { useEffect, useState, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ArrowUp, Home } from "lucide-react"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
    toggleVisibility()

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const handleClick = useCallback(() => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
    }
  }, [isHomePage, router])

  if (!isVisible) return null

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label={isHomePage ? "Scroll to top" : "Go to home"}
    >
      <div className="relative">
        <div className="glass-card p-3 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300 border-primary/30 flex items-center justify-center">
          {isHomePage ? (
            <ArrowUp className="w-6 h-6 text-primary" strokeWidth={2.5} />
          ) : (
            <Home className="w-6 h-6 text-primary" strokeWidth={2.5} />
          )}
        </div>
      </div>
    </button>
  )
}
