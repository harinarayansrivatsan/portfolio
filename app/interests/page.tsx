import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import { InterestsSection } from "@/components/sections/interests-section"

export const metadata: Metadata = {
  title: "Interests | Hari Narayan Srivatsan",
  description: "Personal interests in basketball, photography, travel, and continuous learning",
  openGraph: {
    title: "Interests | Hari Narayan Srivatsan",
    description: "Personal interests in basketball, photography, travel, and continuous learning",
    url: "https://hari-narayan.com/interests",
    siteName: "Hari Narayan Srivatsan",
    type: "website",
  },
}

export default function InterestsPage() {
  return (
    <PageLayout>
      <InterestsSection />
    </PageLayout>
  )
}