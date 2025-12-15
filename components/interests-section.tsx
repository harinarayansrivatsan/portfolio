"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { cn } from "@/lib/design-system"
import { ANIMATION_DELAYS } from "@/lib/constants"

const INTERESTS = [
    {
      title: "Health & Wellness",
      description: "Maintaining physical and mental well-being through disciplined fitness routines and mindfulness practices",
      focus: "Balanced lifestyle approach",
      activities: ["Strength Training", "Endurance Running", "Mindfulness", "Outdoor Activities"],
      icon: "💪",
      isPrimary: true,
      size: "large"
    },
    {
      title: "Cultural Exploration",
      description: "Engaging with diverse perspectives through travel, cuisine, and cross-cultural experiences",
      focus: "Global perspective building",
      activities: ["Cultural Immersion", "Culinary Arts", "Travel Photography", "Language Learning"],
      icon: "🌍",
      isPrimary: false,
      size: "medium"
    },
    {
      title: "Continuous Learning",
      description: "Pursuing knowledge across multiple disciplines to enhance professional expertise and personal growth",
      focus: "Lifelong education commitment",
      activities: ["Industry Research", "Professional Development", "Thought Leadership", "Skill Certification"],
      icon: "📚",
      isPrimary: true,
      size: "medium"
    },
    {
      title: "Technology Innovation",
      description: "Exploring cutting-edge technologies in emerging fields",
      focus: "Future-focused development",
      activities: ["Vibe Coding", "Open Source", "Cloud Solutions", "Security Research"],
      icon: "🚀",
      isPrimary: false,
      size: "large"
    },
  ] as const

export function InterestsSection() {
  return (
    <SectionLayout id="interests">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <SectionHeader
          title="Beyond Work"
          subtitle="Interests and activities that drive personal growth"
        />

        <div className="w-full px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {INTERESTS.map((interest, index) => (
              <div
                key={index}
                className={cn(
                  "group relative bg-white rounded-xl border-2 border-slate-200 p-3.5 flex flex-col hover:shadow-2xl hover:border-primary hover:-translate-y-2 transition-all duration-300",
                  interest.size === "large" ? "lg:col-span-2" : "lg:col-span-1"
                )}
                style={{ animationDelay: `${index * ANIMATION_DELAYS.FAST}ms` }}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "text-2xl w-9 h-9 flex items-center justify-center rounded-lg mb-2 transform group-hover:scale-110 transition-transform duration-300",
                    interest.isPrimary ? "bg-primary/10" : "bg-secondary/10"
                  )}
                >
                  {interest.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground mb-1.5">
                  {interest.title}
                </h3>

                {/* Focus Badge */}
                <div
                  className={cn(
                    "inline-flex items-center px-2 py-0.5 rounded-full mb-2 text-xs font-semibold w-fit",
                    interest.isPrimary
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "bg-secondary/10 text-secondary border border-secondary/20"
                  )}
                >
                  {interest.focus}
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground mb-2.5 flex-1 leading-relaxed">
                  {interest.description}
                </p>

                {/* Activities */}
                <div className="flex flex-wrap gap-1.5">
                  {interest.activities.map((activity, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md text-xs font-medium border border-slate-200 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
