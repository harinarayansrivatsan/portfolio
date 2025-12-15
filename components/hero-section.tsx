"use client"

import { SectionLayout } from "./layout/section-layout"
import { Button } from "./ui/button"
import { useCallback } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TEXT, LAYOUT, SPACING, COMPONENTS, cn } from "@/lib/design-system"
import { SECTION_CONFIGS } from "@/lib/design-tokens"

const CONFIG = SECTION_CONFIGS.hero

const STATS = [
  { value: "3+", label: "Years Experience" },
  { value: "300+", label: "Users Impacted" },
  { value: "80%", label: "Cost Reduction" },
]

export function HeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleNavigation = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  return (
    <SectionLayout id="home">
      <div ref={ref} className="w-full max-w-6xl mx-auto flex flex-col">

        {/* Profile Image */}
        <motion.div
          className="relative mb-2 sm:mb-3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto rounded-full overflow-hidden border-3 border-white shadow-lg relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary p-[3px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src="/images/professional-headshot.jpg"
                  alt="Hari Narayan Srivatsan"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.div
          className="text-center space-y-1.5 sm:space-y-2 mb-2 sm:mb-3"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h1 className={cn(TEXT.hero.title, "text-foreground font-bold")}>
            Hari Narayan Srivatsan
          </h1>

          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-gradient-to-r from-blue-50 to-amber-50 border-2 border-primary/20 rounded-full">
            <p className={cn(TEXT.hero.badge, "text-foreground font-semibold")}>
              MS in MIS • Texas A&M University • Class of 2026
            </p>
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          className="max-w-3xl mx-auto mb-2 sm:mb-3 px-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2 className={cn(TEXT.hero.subtitle, "text-center mb-1 font-bold text-foreground")}>
            AI Product Engineer & Security Specialist
          </h2>
          <p className={cn(TEXT.hero.description, "text-center text-muted-foreground")}>
            Building secure, scalable AI solutions that drive measurable business impact
          </p>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          className="max-w-4xl mx-auto mb-3 sm:mb-4 px-4"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className={cn(
                  "text-center py-2 sm:py-3 px-1.5 sm:px-2 rounded-lg bg-white border-2 border-slate-200",
                  "transition-all duration-200 hover:border-primary hover:shadow-md hover:-translate-y-1"
                )}
              >
                <div className={cn(TEXT.hero.statValue, "text-primary mb-0.5 font-bold")}>
                  {stat.value}
                </div>
                <p className={cn(TEXT.hero.statLabel, "text-slate-600 font-medium text-[10px] sm:text-xs")}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Button
            variant="primary"
            size="default"
            onClick={() => handleNavigation('contact')}
          >
            Let's Connect
          </Button>

          <Button
            variant="outline"
            size="default"
            onClick={() => handleNavigation('projects')}
          >
            View My Work
          </Button>

          <Button
            variant="outline"
            size="default"
            asChild
          >
            <a href="/resume/Hari Narayan Srivatsan_TAMU_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </motion.div>

      </div>
    </SectionLayout>
  )
}
