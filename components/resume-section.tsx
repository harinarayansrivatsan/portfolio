"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"

export function ResumeSection() {
  const [isMobile, setIsMobile] = useState(false)
  const resumePath = "/resume/Hari Narayan Srivatsan_TAMU_Resume.pdf"

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumePath
    link.download = 'Hari_Narayan_Srivatsan_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenNew = () => {
    window.open(resumePath, '_blank')
  }

  return (
    <SectionLayout id="resume">
      <div className="section-content">
        <SectionHeader
          title="Resume"
        />

        {/* Info Pills - Flex Row */}
        <div className="flex flex-wrap gap-3 items-center justify-center mb-8 px-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          {/* Availability Info */}
          <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
            <span className="text-xs sm:text-sm font-semibold text-primary whitespace-nowrap">
              Seeking FTE starting May 2026
            </span>
          </div>

          <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
            <span className="text-xs sm:text-sm font-semibold text-primary whitespace-nowrap">
              Open to relocation
            </span>
          </div>

          {/* Work Authorization Info */}
          <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
            <span className="text-xs sm:text-sm font-semibold text-primary whitespace-nowrap">
              Current: F-1 OPT + STEM Extension (36 months)
            </span>
          </div>

          <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
            <span className="text-xs sm:text-sm font-semibold text-primary whitespace-nowrap">
              Future: Requires H1B Sponsorship (Without 100k fee)
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <Button
            onClick={handleDownload}
            variant="primary"
            size="lg"
            className="group min-w-[160px]"
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
            className="group min-w-[160px]"
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
        <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 animate-fade-in-up" style={{ animationDelay: '250ms' }}>
          <div className="max-w-5xl mx-auto">
            {isMobile ? (
              // Mobile: Show download card matching the portfolio card style
              <div className="relative w-full max-w-96 mx-auto">
                <div className="relative w-full min-h-[400px] rounded-3xl overflow-hidden bg-background border border-border/50 shadow-sm flex flex-col">
                  {/* Background Gradient - Aggie Maroon */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-50" />

                  {/* Icon Section */}
                  <div className="w-full h-24 relative overflow-hidden flex items-center justify-center bg-white">
                    <svg
                      className="text-5xl w-16 h-16 text-primary"
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
                  </div>

                  {/* Content */}
                  <div className="px-5 pb-5 pt-3 flex-1 flex flex-col justify-center">
                    <div className="text-center">
                      <h3 className="text-base font-bold text-primary mb-2 leading-tight">
                        Resume Preview
                      </h3>
                      <p className="text-xs text-foreground/80 leading-relaxed">
                        PDF preview is not available on mobile devices. Please use the download or open buttons above to view your resume.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Accent - Aggie Maroon */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-primary-light" />
                </div>
              </div>
            ) : (
              // Desktop: Embed PDF with portfolio styling
              <div className="relative w-full rounded-3xl overflow-hidden bg-white border border-border/50 shadow-sm">
                <div className="relative w-full" style={{ height: 'calc(100vh - 400px)', minHeight: '600px' }}>
                  <iframe
                    src={resumePath}
                    className="w-full h-full"
                    title="Resume Preview"
                    style={{ border: 'none' }}
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
