"use client"

import { Header } from "@/components/header"
import { ResumeSection } from "@/components/resume-section"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative z-10 pt-20">
        <ResumeSection />
      </main>
      <ScrollToTopButton />
    </div>
  )
}
