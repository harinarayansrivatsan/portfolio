"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"

export function InterestsSection() {
  const interests = [
    {
      category: "Health & Wellness",
      description: "Maintaining physical and mental well-being through disciplined fitness routines and mindfulness practices",
      focus: "Balanced lifestyle approach",
      activities: ["Strength Training", "Endurance Running", "Mindfulness", "Outdoor Activities"],
      icon: () => (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      category: "Technology Innovation",
      description: "Exploring cutting-edge technologies and contributing to open-source projects in emerging fields",
      focus: "Future-focused development",
      activities: ["AI Research", "Open Source", "Cloud Solutions", "Security Research"],
      icon: () => (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      category: "Cultural Exploration",
      description: "Engaging with diverse perspectives through travel, cuisine, and cross-cultural experiences",
      focus: "Global perspective building",
      activities: ["Cultural Immersion", "Culinary Arts", "Travel Photography", "Language Learning"],
      icon: () => (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      category: "Continuous Learning",
      description: "Pursuing knowledge across multiple disciplines to enhance professional expertise and personal growth",
      focus: "Lifelong education commitment",
      activities: ["Industry Research", "Professional Development", "Thought Leadership", "Skill Certification"],
      icon: () => (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ]

  return (
    <SectionLayout id="interests">
      <div className="section-content">
        <SectionHeader
          title="Professional Interests"
          subtitle="Strategic focus areas that complement and enhance professional expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {interests.map((interest, index) => (
            <Card
              key={index}
              className="glass-card group flex flex-col h-[500px] lg:h-[480px]"
            >
              <CardHeader className="pb-2 pt-4 px-4 flex-shrink-0">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary rounded-lg p-2 text-primary-foreground group-hover:bg-primary-light transition-colors flex-shrink-0 mb-2">
                    <interest.icon />
                  </div>
                  <div className="space-y-2 min-h-[70px] flex flex-col justify-center">
                    <CardTitle className="text-heading-4 text-primary group-hover:text-primary-light transition-colors leading-tight text-center">
                      {interest.category}
                    </CardTitle>
                    <div className="bg-primary/5 rounded px-2 py-1 border-l-2 border-primary mx-auto">
                      <p className="text-xs font-medium text-primary text-center">
                        {interest.focus}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col pt-0 px-4 pb-3 h-full">
                <div className="text-center mb-4">
                  <p className="text-caption text-foreground leading-relaxed h-[80px] flex items-center justify-center">
                    {interest.description}
                  </p>
                </div>
                <div className="mt-auto space-y-3">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide text-center">
                    Key Areas
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {interest.activities.map((activity, activityIndex) => (
                      <span
                        key={activityIndex}
                        className="bg-primary/10 text-primary px-3 py-2 rounded-full text-xs font-medium border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors h-[26px] flex items-center justify-center text-center overflow-hidden whitespace-nowrap"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}