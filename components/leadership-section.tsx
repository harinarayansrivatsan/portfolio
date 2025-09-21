"use client"

import { NavigationArrow } from "./navigation-arrow"
import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"

export function LeadershipSection() {
  const leadershipRoles = [
    {
      title: "President",
      subtitle: "Business Information Technology Students @ TAMU",
      timeframe: "2024 - Present",
      description:
        "Partnered with 3+ local businesses in College Station TX and sourced candidates for technology transformation & web development volunteering opportunities",
      metric: "Active partnerships with 3+ local businesses",
      icon: "👥",
      color: "from-red-800 to-red-900",
    },
    {
      title: "Co-Founder",
      subtitle: "ACM Student Chapter - SASTRA University",
      timeframe: "2018 - 2020",
      description:
        "Co-founded ACM student chapter at SASTRA University, hosted online coding competitions, conducted in-person workshops and conducted classes on programming concepts",
      metric: "200+ students participated in events",
      icon: "🚀",
      color: "from-red-700 to-red-800",
    },
  ]

  return (
    <SectionLayout id="leadership">
      <div className="section-content">
        <SectionHeader
          title="Positions I've held"
          subtitle="Building communities and driving initiatives forward"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center max-w-6xl mx-auto">
          {leadershipRoles.map((item, index) => (
            <div key={index} className="relative w-80">
              {/* Card - Matching Journey/Skills Design */}
              <div className="relative w-full min-h-[400px] rounded-3xl overflow-hidden bg-background border border-border/50 shadow-sm flex flex-col">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`} />

                {/* Icon Section */}
                <div className="w-full h-24 relative overflow-hidden flex items-center justify-center bg-white">
                  <div className="text-5xl leading-none flex items-center justify-center w-full h-full">{item.icon}</div>
                </div>

                {/* Content */}
                <div className="px-5 pb-5 pt-3 flex-1 flex flex-col">
                  {/* Header Section */}
                  <div className="text-center mb-4">
                    <h3 className="text-base font-bold text-primary mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.timeframe}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-foreground/80 leading-relaxed text-center mb-4 flex-1">
                    {item.description}
                  </p>

                  {/* Metric Badge */}
                  <div className="bg-primary/10 rounded-lg px-3 py-2 border border-primary/20 text-center cursor-pointer transition-all duration-200 hover:bg-red-800 hover:scale-105 hover:shadow-lg hover:border-red-800 group">
                    <p className="text-xs font-medium text-primary group-hover:text-white">
                      {item.metric}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color}`} />
              </div>
            </div>
          ))}
        </div>

        <NavigationArrow targetPath="/interests" label="Navigate to Interests page" />
      </div>
    </SectionLayout>
  )
}