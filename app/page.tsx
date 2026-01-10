"use client"

import { HeroSection } from "@/components/sections/hero-section"
import { JourneySection } from "@/components/sections/journey-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { LeadershipSection } from "@/components/sections/leadership-section"
import { InterestsSection } from "@/components/sections/interests-section"
import { RecommendationsSection } from "@/components/sections/recommendations-section"

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
