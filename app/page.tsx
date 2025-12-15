"use client"

import { HeroSection } from "@/components/hero-section"
import { JourneySection } from "@/components/journey-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { LeadershipSection } from "@/components/leadership-section"
import { InterestsSection } from "@/components/interests-section"
import { RecommendationsSection } from "@/components/recommendations-section"

import { PageLayout } from "@/components/layout/page-layout"

export default function HomePage() {
  return (
    <PageLayout className="pt-0 sm:pt-0">
      <div className="scroll-smooth overflow-x-hidden w-full">
        <HeroSection />
        <JourneySection />
        <ProjectsSection />
        <SkillsSection />
        <LeadershipSection />
        <InterestsSection />
        <RecommendationsSection />
      </div>
    </PageLayout>
  )
}
