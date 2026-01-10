"use client"

import { useEffect, useState, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ArrowUp, Home } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
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
    <Button
      onClick={handleClick}
      size="icon"
      className="fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full border-2 border-white/10 shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-110 active:scale-95 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
      aria-label={isHomePage ? "Scroll to top" : "Go to home"}
    >
      {isHomePage ? (
        <ArrowUp className="w-6 h-6" strokeWidth={3} />
      ) : (
        <Home className="w-6 h-6" strokeWidth={3} />
      )}
    </Button>
  )
}
