"use client"

import Image from "next/image"
import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { TEXT, COMPONENTS, SPACING, cn, getSectionClasses } from "@/lib/design-system"
import { SECTION_CONFIGS } from "@/lib/design-tokens"
import { useScrollFade } from "@/hooks/use-scroll-fade"

const CONFIG = SECTION_CONFIGS.journey
const classes = getSectionClasses('journey')

const TIMELINE_ITEMS = [
  {
    year: "2020 - 2021",
    type: "Internship",
    title: "Software Engineer (Automation)",
    company: "Hewlett Packard",
    location: "Bengaluru, India",
    timeframe: "2020 - 2021",
    description: "Achieved 70% reduction in IT support tickets in 6 months. Gained hands-on experience in enterprise software development and Robotic Process Automation.",
    image: "/images/hewlett-packard.png",
    achievements: ["IT Automation", "Enterprise Software", "Team Collaboration", "Ticket Resolution"],
    milestone: "HP Internship"
  },
  {
    year: "2021 - 2024",
    type: "Full-Time Employment",
    title: "Software Engineer (Consulting)",
    company: "Deloitte US-India",
    location: "Chennai, India",
    timeframe: "June 2021 – July 2024",
    description: "Built secure LLM guardrails system protecting 300+ users from adversarial attacks. Enhanced system efficiency by 30% through prompt engineering and API design.",
    image: "/images/deloitte.png",
    achievements: ["Consulting", "Software Engineering", "Cloud Security", "AI Security"],
    milestone: "Deloitte Engineer"
  },
  {
    year: "2024 - 2025",
    type: "Research Assistant",
    title: "Software Engineer (Research)",
    company: "Texas A&M University",
    location: "College Station, TX",
    timeframe: "September 2024 – May 2025",
    description: "Developed multilingual AI onboarding portal for educational non-profit serving 30M+ students. Reduced cloud costs by 80% through serverless migration.",
    image: "/images/gar.png",
    achievements: ["Product Launch", "RAG", "Marketing Research", "System Design"],
    milestone: "Graduate Assistant"
  },
  {
    year: "2025 (Summer)",
    type: "Internship",
    title: "Software Engineer (Security)",
    company: "Alcon R&D – Product Security",
    location: "Lake Forest, CA",
    timeframe: "May 2025 – August 2025",
    description: "Built AI-driven Q&A portal serving 300+ users with RAG chat interface. Designed medical image tamper detection workflow using Hailo AI accelerators.",
    image: "/images/alcon.png",
    achievements: ["Team collaboration", "AI Innovation", "Enterprise Software", "Product Ownership"],
    milestone: "Alcon R&D"
  },
] as const

function TimelineItem({ item, index, isLast }: { item: typeof TIMELINE_ITEMS[number], index: number, isLast: boolean }) {
  const { ref, isVisible } = useScrollFade({ threshold: 0.3, triggerOnce: true })
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex items-start w-full transition-all duration-700",
        "mb-12 md:mb-16",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
    >
      {/* Timeline line - Desktop */}
      {!isLast && (
        <div className="hidden md:block absolute left-1/2 top-16 w-px h-[calc(100%+4rem)] bg-gradient-to-b from-primary via-secondary/50 to-primary/20 -translate-x-1/2 z-0" />
      )}

      {/* Timeline line - Mobile */}
      {!isLast && (
        <div className="md:hidden absolute left-5 top-16 w-px h-[calc(100%+3rem)] bg-gradient-to-b from-primary via-secondary/50 to-primary/20 z-0" />
      )}

      {/* Content Layout */}
      <div className="w-full md:grid md:grid-cols-2 md:gap-8 relative">
        {/* Left side content (Desktop) */}
        <div className={cn(
          "hidden md:flex md:flex-col md:items-start",
          isLeft ? "" : "md:col-start-2"
        )}>
          <TimelineCard item={item} isLeft={isLeft} />
        </div>

        {/* Center timeline marker */}
        <div className={cn(
          "flex items-start md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0",
          "mb-4 md:mb-0 z-20"
        )}>
          <div className="flex flex-col items-center gap-2">
            {/* Animated dot */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>
            {/* Year badge */}
            <div className={cn(
              "px-3 py-1.5 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-bold whitespace-nowrap shadow-md",
              TEXT.card.badge
            )}>
              {item.year}
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden w-full pl-14">
          <TimelineCard item={item} isLeft={false} />
        </div>
      </div>
    </div>
  )
}

function TimelineCard({ item, isLeft }: { item: typeof TIMELINE_ITEMS[number], isLeft: boolean }) {
  return (
    <div className={cn(
      "group overflow-hidden max-w-[44rem] w-full bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
    )}>
      <div className="flex flex-col sm:flex-row">
        {/* Company Logo - Optimally sized for visibility */}
        <div className="relative w-full sm:w-[45%] overflow-hidden bg-slate-50 aspect-[4/3] sm:aspect-[5/3]">
          <Image
            src={item.image}
            alt={`${item.company} logo`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 45vw"
            priority={false}
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center">
          {/* Type Badge */}
          <div className="mb-2">
            <span className="inline-block px-2.5 py-1 bg-gradient-to-r from-primary to-secondary text-white rounded-md text-xs font-bold">
              {item.type}
            </span>
          </div>

          {/* Title & Company */}
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
            {item.title}
          </h3>

          <p className="text-sm sm:text-base text-primary font-semibold mb-1">
            {item.company}
          </p>

          <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 mb-3">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {item.location} • {item.timeframe}
          </p>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            {item.description}
          </p>

          {/* Achievements - Compact */}
          <div className="flex flex-wrap gap-1.5">
            {item.achievements.slice(0, 4).map((achievement, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-secondary/10 text-secondary border border-secondary/20 rounded text-xs font-medium"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function JourneySection() {
  return (
    <SectionLayout id="journey">
      <div className={classes.wrapper}>
        <div className="w-full max-w-6xl mx-auto">
          <SectionHeader
            title="Professional Journey"
            subtitle="Career milestones and experiences"
          />

          <div className="w-full">
            {[...TIMELINE_ITEMS].reverse().map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLast={index === TIMELINE_ITEMS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
