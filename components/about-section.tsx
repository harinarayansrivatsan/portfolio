"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TEXT, LAYOUT, SPACING, COMPONENTS, cn, getSectionClasses } from "@/lib/design-system"
import { SECTION_CONFIGS } from "@/lib/design-tokens"

const CONFIG = SECTION_CONFIGS.about
const classes = getSectionClasses('about')

const LEADERSHIP_ROLES = [
  {
    title: "President",
    organization: "Business Information Technology Students @ TAMU",
    timeframe: "2024 - Present",
    description:
      "Leading technology transformation initiatives by partnering with local businesses in College Station, TX. Successfully sourced candidates for web development and technology volunteering opportunities.",
    impact: "3+ active business partnerships",
    icon: "👥",
  },
  {
    title: "Co-Founder",
    organization: "ACM Student Chapter - SASTRA University",
    timeframe: "2018 - 2020",
    description:
      "Co-founded and established the ACM student chapter at SASTRA University. Organized online coding competitions, conducted workshops, and taught programming fundamentals to students.",
    impact: "200+ students reached",
    icon: "🚀",
  },
]

const INTERESTS = [
  {
    category: "Professional Development",
    icon: "📚",
    items: [
      { title: "AI Innovation", description: "Exploring cutting-edge developments in artificial intelligence and machine learning" },
      { title: "Cloud Architecture", description: "Staying current with serverless computing and cloud-native solutions" },
      { title: "Security Research", description: "Continuous learning in cybersecurity and product security" },
    ],
  },
  {
    category: "Personal Growth",
    icon: "💪",
    items: [
      { title: "Fitness & Wellness", description: "Maintaining physical and mental well-being through strength training and running" },
      { title: "Cultural Exploration", description: "Engaging with diverse perspectives through travel and culinary experiences" },
      { title: "Technology Community", description: "Contributing to open source and engaging with the developer community" },
    ],
  },
]

export function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <SectionLayout id="about" variant="alternate">
      <div ref={ref} className={classes.wrapper}>
        <div className={cn(LAYOUT.container.lg, "mx-auto")}>
          <SectionHeader
            title="About Me"
            subtitle="Leadership experience and personal interests that shape my perspective"
          />

          {/* Leadership Experience */}
          <div className="w-full mb-6 sm:mb-8">
            <h2 className={cn(TEXT.card.title, "text-foreground mb-4 text-center font-bold")}>
              Leadership Experience
            </h2>
            <div className={classes.grid}>
              {LEADERSHIP_ROLES.map((role, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "bg-white rounded-xl border-2 border-slate-200 p-5",
                    "transition-all duration-200 hover:border-primary hover:shadow-md hover:-translate-y-1"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={cn("flex items-start", SPACING.gap.sm, "mb-3")}>
                    <div className={cn(COMPONENTS.icon.md, "flex-shrink-0 text-3xl")}>
                      {role.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={cn(TEXT.card.title, "text-foreground mb-1 font-bold")}>
                        {role.title}
                      </h3>
                      <p className={cn(TEXT.card.subtitle, "text-primary mb-1 font-semibold")}>
                        {role.organization}
                      </p>
                      <p className={cn(TEXT.card.meta, "text-slate-500 font-medium")}>
                        {role.timeframe}
                      </p>
                    </div>
                  </div>

                  <p className={cn(TEXT.card.body, "text-slate-600 mb-3 leading-relaxed")}>
                    {role.description}
                  </p>

                  <div className="px-3 py-2 bg-gradient-to-r from-blue-100 to-amber-100 rounded-lg">
                    <p className={cn(TEXT.card.badge, "text-slate-700 font-bold text-center")}>
                      {role.impact}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interests & Values */}
          <div className="w-full">
            <h2 className={cn(TEXT.card.title, "text-foreground mb-4 text-center font-bold")}>
              Beyond Work
            </h2>
            <div className={classes.grid}>
              {INTERESTS.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className={cn(
                    "bg-white rounded-xl border-2 border-slate-200 p-5",
                    "transition-all duration-200 hover:border-primary hover:shadow-md hover:-translate-y-1"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.2 + categoryIndex * 0.1 }}
                >
                  <div className={cn("flex items-center", SPACING.gap.sm, "mb-4")}>
                    <div className={cn(COMPONENTS.icon.md, "text-3xl")}>
                      {category.icon}
                    </div>
                    <h3 className={cn(TEXT.card.title, "text-foreground font-bold")}>
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="pb-3 last:pb-0 border-b border-slate-200/60 last:border-0"
                      >
                        <h4 className={cn(TEXT.card.subtitle, "text-foreground mb-1 font-semibold")}>
                          {item.title}
                        </h4>
                        <p className={cn(TEXT.card.body, "text-slate-600 leading-relaxed")}>
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
