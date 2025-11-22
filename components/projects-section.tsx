"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { TEXT, COMPONENTS, SPACING, cn, getSectionClasses } from "@/lib/design-system"
import { SECTION_CONFIGS } from "@/lib/design-tokens"
import { motion, AnimatePresence } from "framer-motion"

const CONFIG = SECTION_CONFIGS.projects
const classes = getSectionClasses('projects')

const PROJECTS = [
  {
    title: "Competency Tracker",
    description: "Customizable web portal providing teachers with real-time, data-driven insights on student skills and academic progress through a star-based scoring system.",
    image: "/images/competency-tracker.png",
    imageAlt: "Competency Tracker Dashboard",
    badges: ["AWS Serverless", "React", "Python", "Data Analytics"],
    impact: "Production Deployment",
    organization: "Plymouth State University",
    metrics: [
      { label: "Teachers", value: "50+" },
      { label: "Students Tracked", value: "500+" },
      { label: "Real-time Updates", value: "100%" }
    ],
    timeframe: "2025"
  },
  {
    title: "Instructor Connect",
    description: "AI-powered onboarding portal for pedagogical training of instructors via interactive chat sessions with AI personas of real students. Successfully managed product launch via a Randomized Controlled Trial.",
    image: "/images/instructor-connect.png",
    imageAlt: "Instructor Connect - AI-powered instructor training platform",
    badges: ["AI/ML", "RAG", "Product Launch", "Systems Design"],
    impact: "Live in Production",
    organization: "Agastya International Foundation",
    metrics: [
      { label: "Daily Users", value: "250+" },
      { label: "Students Served", value: "30M+" },
      { label: "Cost Reduction", value: "80%" }
    ],
    timeframe: "2024"
  }
] as const

export function ProjectsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    duration: 30
  })

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  // Track selected slide
  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 7000) // Change slide every 7 seconds

    return () => clearInterval(autoplay)
  }, [emblaApi])

  return (
    <SectionLayout id="projects" variant="alternate">
      <div className={classes.wrapper}>
        <div className="w-full max-w-6xl mx-auto">
          <SectionHeader
            title="Featured Projects"
            subtitle="Real-world solutions deployed at leading organizations"
          />
          
          {/* Swipe Instructions */}
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span>Swipe to view more projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </p>
          </div>

          <div className="relative w-full">
            {/* Carousel Container */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {PROJECTS.map((project, index) => (
                  <motion.div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 px-2 sm:px-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={cn("group overflow-hidden mx-auto max-w-4xl bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300")}>
                      <div className="flex flex-col md:flex-row">
                        {/* Project Image - No padding */}
                        <div className={cn(
                          "relative w-full md:w-1/2 overflow-hidden bg-slate-50",
                          "aspect-video md:aspect-square"
                        )}>
                          <img
                            src={project.image}
                            alt={project.imageAlt}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 right-3 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-primary shadow-md">
                            {project.timeframe}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-4 sm:p-6 flex flex-col justify-center">
                          <div className="mb-3">
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                              {project.title}
                            </h3>

                            <p className="text-sm sm:text-base text-primary font-semibold mb-2">
                              {project.organization}
                            </p>

                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-semibold">
                              <span>✓</span>
                              <span>{project.impact}</span>
                            </div>
                          </div>

                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                            {project.description}
                          </p>

                          {/* Technology Badges */}
                          <div className="flex flex-wrap gap-2">
                            {project.badges.map((badge, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-medium hover:bg-secondary hover:text-white transition-all duration-200 cursor-default"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {PROJECTS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    "hover:scale-125",
                    selectedIndex === index ? "w-8 opacity-100" : "w-2 opacity-30"
                  )}
                  style={{
                    backgroundColor: 'var(--primary)'
                  }}
                  aria-label={`Go to project ${index + 1}`}
                  aria-current={selectedIndex === index ? 'true' : 'false'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
