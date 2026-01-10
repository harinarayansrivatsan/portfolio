import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import { JourneySection } from "@/components/sections/journey-section"

export const metadata: Metadata = {
  title: "Journey | Hari Narayan Srivatsan",
  description: "Professional journey spanning enterprise consulting, product development, and technical leadership",
  openGraph: {
    title: "Journey | Hari Narayan Srivatsan",
    description: "Professional journey spanning enterprise consulting, product development, and technical leadership",
    url: "https://hari-narayan.com/journey",
    siteName: "Hari Narayan Srivatsan",
    type: "website",
  },
}

export default function JourneyPage() {
  return (
    <PageLayout>
      <JourneySection />
    </PageLayout>
  )
}