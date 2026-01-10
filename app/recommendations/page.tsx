import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import { RecommendationsSection } from "@/components/sections/recommendations-section"

export const metadata: Metadata = {
  title: "Recommendations | Hari Narayan Srivatsan",
  description: "Professional testimonials and recommendations from colleagues and mentors",
  openGraph: {
    title: "Recommendations | Hari Narayan Srivatsan",
    description: "Professional testimonials and recommendations from colleagues and mentors",
    url: "https://hari-narayan.com/recommendations",
    siteName: "Hari Narayan Srivatsan",
    type: "website",
  },
}

export default function RecommendationsPage() {
  return (
    <PageLayout>
      <RecommendationsSection />
    </PageLayout>
  )
}