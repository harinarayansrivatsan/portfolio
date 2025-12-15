"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Download, ExternalLink, FileText } from "lucide-react"

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
    <SectionLayout id="resume" className="bg-transparent">
      <SectionHeader
        title="Resume"
        subtitle="A detailed overview of my professional experience and skills."
      />

      {/* Availability Info */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-4 items-center justify-center mb-12 px-4"
      >
        <div className="px-5 py-2 bg-primary/20 border border-primary/30 rounded-full shadow-[0_0_15px_-5px_var(--color-primary)]">
          <span className="text-sm font-semibold text-primary-foreground whitespace-nowrap">
            Available for Full-Time Roles: May 2026
          </span>
        </div>

        <div className="px-5 py-2 glass-card rounded-full hover:bg-white/10 transition-colors">
          <span className="text-sm font-medium text-white/80 whitespace-nowrap">
            Open to Relocation
          </span>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
      >
        <button
          onClick={handleDownload}
          className="group flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
        >
          <Download size={20} className="group-hover:animate-bounce" />
          <span className="font-semibold">Download PDF</span>
        </button>

        <button
          onClick={handleOpenNew}
          className="group flex items-center justify-center gap-2 px-8 py-3 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
        >
          <ExternalLink size={20} />
          <span className="font-semibold">Open in New Tab</span>
        </button>
      </motion.div>

      {/* Resume Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto px-4"
      >
        {isMobile ? (
          // Mobile: Show download card
          <div className="glass-card p-8 text-center max-w-md mx-auto">
            <FileText size={48} className="text-primary mx-auto mb-6" />
            <h3 className="text-xl font-bold text-foreground mb-3">
              Resume Preview
            </h3>
            <p className="text-muted-foreground">
              PDF preview is not available on mobile devices. Please use the download or open buttons above to view the resume.
            </p>
          </div>
        ) : (
          // Desktop: Embed PDF
          <div className="glass-card p-1 overflow-hidden h-[800px]">
            <iframe
              src={`${RESUME_PATH}#view=FitH`}
              className="w-full h-full rounded-lg bg-white"
              title="Resume Preview"
            />
          </div>
        )}
      </motion.div>
    </SectionLayout>
  )
}
