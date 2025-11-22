"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { ANIMATION_DELAYS, GRADIENTS } from "@/lib/constants"

const INTERESTS = [
    {
      title: "Health & Wellness",
      description: "Maintaining physical and mental well-being through disciplined fitness routines and mindfulness practices",
      focus: "Balanced lifestyle approach",
      activities: ["Strength Training", "Endurance Running", "Mindfulness", "Outdoor Activities"],
      icon: "💪",
      color: GRADIENTS.RED_DARK,
    },
    {
      title: "Cultural Exploration",
      description: "Engaging with diverse perspectives through travel, cuisine, and cross-cultural experiences",
      focus: "Global perspective building",
      activities: ["Cultural Immersion", "Culinary Arts", "Travel Photography", "Language Learning"],
      icon: "🌍",
      color: GRADIENTS.RED_DARK,
    },
    {
      title: "Continuous Learning",
      description: "Pursuing knowledge across multiple disciplines to enhance professional expertise and personal growth",
      focus: "Lifelong education commitment",
      activities: ["Industry Research", "Professional Development", "Thought Leadership", "Skill Certification"],
      icon: "📚",
      color: GRADIENTS.RED_MEDIUM,
    },
    {
      title: "Technology Innovation",
      description: "Exploring cutting-edge technologies in emerging fields",
      focus: "Future-focused development",
      activities: ["Vibe Coding", "Open Source", "Cloud Solutions", "Security Research"],
      icon: "🚀",
      color: GRADIENTS.RED_MEDIUM,
    },
  ] as const

export function InterestsSection() {
  return (
    <SectionLayout id="interests">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full max-w-6xl mx-auto">
          <SectionHeader
            title="Beyond Work"
            subtitle="Interests and activities that drive personal growth"
          />

          <div className="w-full px-4 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {INTERESTS.map((interest, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * ANIMATION_DELAYS.FAST}ms` }}
                >
                  <div className="glass-card h-full flex flex-col text-center hover:shadow-xl transition-all duration-300">

                    {/* Icon */}
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                      {interest.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 px-2">
                      {interest.title}
                    </h3>

                    {/* Focus Badge */}
                    <div className="px-2 sm:px-3 py-1.5 sm:py-2 bg-primary/5 border border-primary/10 rounded-full mb-3 sm:mb-4 mx-2">
                      <p className="text-[10px] sm:text-xs font-semibold text-primary">
                        {interest.focus}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4 flex-1 px-2">
                      {interest.description}
                    </p>

                    {/* Activities */}
                    <div className="flex flex-col gap-1.5 sm:gap-2 px-2">
                      {interest.activities.map((activity, i) => (
                        <div
                          key={i}
                          className="px-2 sm:px-3 py-1.5 sm:py-2 bg-primary/5 text-primary border border-primary/10 rounded-full text-xs sm:text-sm font-medium hover:bg-primary hover:text-white transition-all duration-200 cursor-default"
                        >
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
