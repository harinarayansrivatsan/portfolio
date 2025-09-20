"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NavigationArrow } from "./navigation-arrow"
import { SectionLayout } from "./layout/section-layout"

export function LeadershipSection() {
  const leadershipRoles = [
    {
      title: "President",
      organization: "Business Information Technology Students @ TAMU",
      timeframe: "2024 - Present",
      achievement:
        "Partnered with 3+ local businesses in College Station TX and sourced candidates for technology transformation & web development volunteering opportunities",
      metric: "Active partnerships with 3+ local businesses",
      icon: () => (
        <svg className="text-white" style={{ width: "clamp(1.25rem, 3vw, 1.5rem)", height: "clamp(1.25rem, 3vw, 1.5rem)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Co-Founder",
      organization: "ACM Student Chapter - SASTRA University",
      timeframe: "2018 - 2020",
      achievement:
        "Co-founded ACM student chapter at SASTRA University, hosted online coding competitions, conducted in-person workshops and conducted classes on programming concepts",
      metric: "200+ students participated in events",
      icon: () => (
        <svg className="text-white" style={{ width: "clamp(1.25rem, 3vw, 1.5rem)", height: "clamp(1.25rem, 3vw, 1.5rem)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ]

  return (
    <SectionLayout id="leadership">
      <div className="section-content">
        <div className="text-center mb-4 lg:mb-6">
          <h2 className="section-title bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">Leadership Positions</h2>
          <p className="section-subtitle">Building communities and driving initiatives forward</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {leadershipRoles.map((item, index) => (
            <Card key={index} className="glass-card group h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 sm:gap-4 mb-2">
                  <div
                    className="flex-shrink-0 bg-primary rounded-lg flex items-center justify-center"
                    style={{ width: "clamp(2.5rem, 5vw, 3rem)", height: "clamp(2.5rem, 5vw, 3rem)" }}
                  >
                    {item.icon()}
                  </div>
                  <CardTitle className="text-heading-3 text-primary">{item.title}</CardTitle>
                </div>
                <h4 className="text-heading-4 text-foreground mb-2">{item.organization}</h4>
                <p className="text-body-sm text-muted-foreground flex items-center">
                  <svg
                    className="mr-2 text-muted-foreground"
                    style={{ width: "clamp(1rem, 2vw, 1.25rem)", height: "clamp(1rem, 2vw, 1.25rem)" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {item.timeframe}
                </p>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-body-lg text-muted-foreground mb-4 flex-grow leading-relaxed">{item.achievement}</p>
                <div className="bg-primary/5 rounded-md px-3 py-2 border-l-4 border-primary">
                  <p className="fluid-text-sm font-medium text-primary">
                    {item.metric}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <NavigationArrow targetPath="/interests" ariaLabel="Navigate to Interests page" />
      </div>
    </SectionLayout>
  )
}