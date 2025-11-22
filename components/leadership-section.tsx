"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { ANIMATION_DELAYS, GRADIENTS } from "@/lib/constants"

const LEADERSHIP_ROLES = [
    {
      title: "President",
      subtitle: "Business Information Technology Students @ TAMU",
      timeframe: "2024 - Present",
      description:
        "Partnered with 3+ local businesses in College Station TX and sourced candidates for technology transformation & web development volunteering opportunities",
      metric: "Active partnerships with 3+ local businesses",
      icon: "👥",
      color: GRADIENTS.RED_DARK,
    },
    {
      title: "Co-Founder",
      subtitle: "ACM Student Chapter - SASTRA University",
      timeframe: "2018 - 2020",
      description:
        "Co-founded ACM student chapter at SASTRA University, hosted online coding competitions, conducted in-person workshops and conducted classes on programming concepts",
      metric: "200+ students participated in events",
      icon: "🚀",
      color: GRADIENTS.RED_MEDIUM,
    },
  ] as const

export function LeadershipSection() {
  return (
    <SectionLayout id="leadership">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full max-w-6xl mx-auto">
          <SectionHeader
            title="Leadership Experience"
            subtitle="Building communities and driving initiatives"
          />

          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {LEADERSHIP_ROLES.map((item, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * ANIMATION_DELAYS.NORMAL}ms` }}
                >
                  <div className="glass-card h-full flex flex-col text-center hover:shadow-xl transition-all duration-300">

                    {/* Icon */}
                    <div className="text-6xl mb-6">
                      {item.icon}
                    </div>

                    {/* Header */}
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>

                    <p className="text-base font-semibold text-primary mb-2">
                      {item.subtitle}
                    </p>

                    <p className="text-sm text-muted-foreground mb-6">
                      {item.timeframe}
                    </p>

                    {/* Description */}
                    <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-1">
                      {item.description}
                    </p>

                    {/* Metric */}
                    <div className="px-4 py-3 bg-primary/5 border border-primary/10 rounded-xl">
                      <p className="text-sm font-semibold text-primary">
                        {item.metric}
                      </p>
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
