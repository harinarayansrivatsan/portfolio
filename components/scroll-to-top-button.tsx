"use client"

import { useEffect, useState, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility, { passive: true })
    toggleVisibility() // Check initial scroll position

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const handleClick = useCallback(() => {
    if (isHomePage) {
      // Scroll to top on home page
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // Navigate to home page on other pages
      router.push("/")
    }
  }, [isHomePage, router])

  if (!isVisible) return null

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 group"
      aria-label={isHomePage ? "Scroll to top" : "Go to home"}
    >
      <div className="relative">
        {/* Button circle */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary hover:bg-primary-light shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110">
          {isHomePage ? (
            // Up arrow for scroll to top
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          ) : (
            // Home icon for navigation
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          )}
        </div>

        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {isHomePage ? "Back to Top" : "Home"}
        </div>
      </div>
    </button>
  )
}
