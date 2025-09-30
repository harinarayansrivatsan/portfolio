"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"

export function InterestsSection() {
  const interests = [
    {
      title: "Health & Wellness",
      description: "Maintaining physical and mental well-being through disciplined fitness routines and mindfulness practices",
      focus: "Balanced lifestyle approach",
      activities: ["Strength Training", "Endurance Running", "Mindfulness", "Outdoor Activities"],
      icon: "💪",
      color: "from-red-800 to-red-900",
    },
    {
      title: "Cultural Exploration",
      description: "Engaging with diverse perspectives through travel, cuisine, and cross-cultural experiences",
      focus: "Global perspective building",
      activities: ["Cultural Immersion", "Culinary Arts", "Travel Photography", "Language Learning"],
      icon: "🌍",
      color: "from-red-800 to-red-900",
    },
    {
      title: "Continuous Learning",
      description: "Pursuing knowledge across multiple disciplines to enhance professional expertise and personal growth",
      focus: "Lifelong education commitment",
      activities: ["Industry Research", "Professional Development", "Thought Leadership", "Skill Certification"],
      icon: "📚",
      color: "from-red-700 to-red-800",
    },
    {
      title: "Technology Innovation",
      description: "Exploring cutting-edge technologies in emerging fields",
      focus: "Future-focused development",
      activities: ["Vibe Coding", "Open Source", "Cloud Solutions", "Security Research"],
      icon: "🚀",
      color: "from-red-700 to-red-800",
    },
  ]

  return (
    <SectionLayout id="interests">
      <div className="section-content">
        <SectionHeader
          title="What I do beyond work"
          subtitle="Strategic focus areas that complement and enhance professional expertise."
        />

        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-none mx-auto px-4">
          {interests.map((interest, index) => (
            <div key={index} className="w-full max-w-80 mx-auto md:mx-0">
              {/* Card - Matching Other Sections Design */}
              <div className="relative w-full min-h-[480px] rounded-3xl overflow-hidden bg-background border border-border/50 shadow-sm flex flex-col">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-10`} />

                {/* Icon Section */}
                <div className="w-full h-24 relative overflow-hidden flex items-center justify-center bg-white">
                  <div className="text-5xl leading-none flex items-center justify-center w-full h-full">{interest.icon}</div>
                </div>

                {/* Content */}
                <div className="px-4 pb-4 pt-3 flex-1 flex flex-col">
                  {/* Header Section */}
                  <div className="text-center mb-4">
                    <h3 className="text-sm font-bold text-primary mb-2 leading-tight">
                      {interest.title}
                    </h3>
                    <div className="bg-primary/10 rounded px-2 py-1 border border-primary/20 mb-3">
                      <p className="text-xs font-medium text-primary text-center">
                        {interest.focus}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-foreground/80 leading-relaxed text-center mb-4 flex-1">
                    {interest.description}
                  </p>

                  {/* Activities Pills */}
                  <div className="grid grid-cols-1 gap-1">
                    {interest.activities.map((activity, i) => (
                      <div
                        key={i}
                        className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-medium text-center cursor-pointer transition-all duration-200 hover:bg-red-800 hover:text-white hover:scale-105 hover:shadow-lg hover:border-red-800"
                      >
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${interest.color}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}