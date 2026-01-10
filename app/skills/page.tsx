import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import { SkillsSection } from "@/components/sections/skills-section"

export const metadata: Metadata = {
  title: "Skills | Hari Narayan Srivatsan",
  description: "Technical expertise in full-stack development, AI/ML, and cloud technologies",
  openGraph: {
    title: "Skills | Hari Narayan Srivatsan",
    description: "Technical expertise in full-stack development, AI/ML, and cloud technologies",
    url: "https://hari-narayan.com/skills",
    siteName: "Hari Narayan Srivatsan",
    type: "website",
  },
}

export default function SkillsPage() {
  return (
    <PageLayout>
      <SkillsSection />
    </PageLayout>
  )
}