import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import { ProjectsSection } from "@/components/sections/projects-section"

export const metadata: Metadata = {
  title: "Projects | Hari Narayan Srivatsan",
  description: "Portfolio of AI-powered applications and enterprise software projects",
  openGraph: {
    title: "Projects | Hari Narayan Srivatsan",
    description: "Portfolio of AI-powered applications and enterprise software projects",
    url: "https://hari-narayan.com/projects",
    siteName: "Hari Narayan Srivatsan",
    type: "website",
  },
}

export default function ProjectsPage() {
  return (
    <PageLayout>
      <ProjectsSection />
    </PageLayout>
  )
}