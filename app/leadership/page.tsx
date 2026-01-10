import type { Metadata } from "next"
import { PageLayout } from "@/components/layout/page-layout"
import { LeadershipSection } from "@/components/sections/leadership-section"

export const metadata: Metadata = {
  title: "Leadership | Hari Narayan Srivatsan",
  description: "Leadership experience in student organizations and community initiatives",
  openGraph: {
    title: "Leadership | Hari Narayan Srivatsan",
    description: "Leadership experience in student organizations and community initiatives",
    url: "https://hari-narayan.com/leadership",
    siteName: "Hari Narayan Srivatsan",
    type: "website",
  },
}

export default function LeadershipPage() {
  return (
    <PageLayout>
      <LeadershipSection />
    </PageLayout>
  )
}