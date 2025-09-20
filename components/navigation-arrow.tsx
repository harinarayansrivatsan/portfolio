"use client"

import { useRouter } from "next/navigation"

interface NavigationArrowProps {
  targetPath: string
  ariaLabel: string
}

export function NavigationArrow({ targetPath, ariaLabel }: NavigationArrowProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(targetPath)
  }

  return (
    <div className="section-footer">
      <button
        onClick={handleClick}
        className="nav-arrow"
        aria-label={ariaLabel}
      >
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  )
}