import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { JourneySection } from "@/components/journey-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { LeadershipSection } from "@/components/leadership-section"
import { InterestsSection } from "@/components/interests-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="relative z-10 bg-white">
        <HeroSection />
        <JourneySection />
        <ProjectsSection />
        <SkillsSection />
        <LeadershipSection />
        <InterestsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
