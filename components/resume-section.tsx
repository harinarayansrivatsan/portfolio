"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { Button } from "./ui/button"
import { useState, useEffect, useCallback } from "react"
import { ANIMATION_DELAYS } from "@/lib/constants"

const RESUME_PATH = "/resume/Hari Narayan Srivatsan_TAMU_Resume.pdf"
const MOBILE_BREAKPOINT = 768

export function ResumeSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleDownload = useCallback(() => {
    const link = document.createElement('a')
    link.href = RESUME_PATH
    link.download = 'Hari_Narayan_Srivatsan_Resume.pdf'
    link.click()
  }, [])

  const handleOpenNew = useCallback(() => {
    window.open(RESUME_PATH, '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <SectionLayout id="resume">
      <div className="section-content">
        <SectionHeader
          title="Resume"
        />

        {/* Availability Info - More Professional */}
        <div className="flex flex-wrap gap-3 items-center justify-center mb-8 px-4 animate-fade-in-up" style={{ animationDelay: `${ANIMATION_DELAYS.NORMAL}ms` }}>
          <div className="px-5 py-3 bg-primary text-white rounded-xl shadow-md">
            <span className="text-sm sm:text-base font-bold whitespace-nowrap">
              Available for Full-Time Roles: May 2026
            </span>
          </div>

          <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
            <span className="text-xs sm:text-sm font-semibold text-primary whitespace-nowrap">
              Open to Relocation
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up max-w-md mx-auto" style={{ animationDelay: `${ANIMATION_DELAYS.SLOW}ms` }}>
          <Button
            onClick={handleDownload}
            variant="primary"
            size="lg"
            className="group w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download PDF
          </Button>

          <Button
            onClick={handleOpenNew}
            variant="outline"
            size="lg"
            className="group w-full sm:w-auto"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Open in New Tab
          </Button>
        </div>

        {/* Resume Preview */}
        <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 animate-fade-in-up" style={{ animationDelay: `${ANIMATION_DELAYS.SLOW + 50}ms` }}>
          <div className="max-w-5xl mx-auto">
            {isMobile ? (
              // Mobile: Show download card
              <div className="glass-card max-w-md mx-auto text-center">
                <svg
                  className="w-20 h-20 text-primary mx-auto mb-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Resume Preview
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  PDF preview is not available on mobile devices. Please use the download or open buttons above to view the resume.
                </p>
              </div>
            ) : (
              // Desktop: Embed PDF
              <div className="glass-card overflow-hidden">
                <div className="relative w-full" style={{ height: 'calc(100vh - 400px)', minHeight: '600px' }}>
                  <iframe
                    src={RESUME_PATH}
                    className="w-full h-full border-0"
                    title="Resume Preview"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
