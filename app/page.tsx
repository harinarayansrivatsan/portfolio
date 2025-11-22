"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { JourneySection } from "@/components/journey-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { LeadershipSection } from "@/components/leadership-section"
import { InterestsSection } from "@/components/interests-section"
import { RecommendationsSection } from "@/components/recommendations-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTopButton } from "@/components/scroll-to-top-button"

export default function HomePage() {
  return (
    <div className="scroll-smooth overflow-x-hidden">
      <Header />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <ProjectsSection />
        <SkillsSection />
        <LeadershipSection />
        <InterestsSection />
        <RecommendationsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
