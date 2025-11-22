"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { TEXT, COMPONENTS, SPACING, cn, getSectionClasses } from "@/lib/design-system"
import { SECTION_CONFIGS } from "@/lib/design-tokens"

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
  return (
    <SectionLayout id="projects" variant="alternate">
      <div className={classes.wrapper}>
        <div className="w-full max-w-6xl mx-auto">
          <SectionHeader
            title="Featured Projects"
            subtitle="Real-world solutions deployed at leading organizations"
          />

          <div className="w-full">
            <div className={classes.grid}>
              {PROJECTS.map((project, index) => (
                <div key={index} className={cn(classes.card, "group overflow-hidden")}>

                  {/* Project Image */}
                  <div className={cn(
                    "relative w-full overflow-hidden rounded-lg mb-4 bg-muted",
                    CONFIG.imageHeight
                  )}>
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={project.title === "Competency Tracker" ? { objectPosition: '50% 25%' } : {}}
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-bold text-primary border border-primary/20">
                      {project.timeframe}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="mb-3">
                      <h3 className={cn(TEXT.card.title, "text-foreground mb-2 font-bold")}>
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-2 mb-2">
                        <div className={cn(COMPONENTS.badge.success, "inline-flex items-center gap-1")}>
                          <span className="text-xs">✅</span>
                          <span>{project.impact}</span>
                        </div>
                      </div>

                      <p className={cn(TEXT.card.subtitle, "text-primary font-semibold")}>
                        {project.organization}
                      </p>
                    </div>

                    <p className={cn(TEXT.card.body, "text-muted-foreground mb-4 leading-relaxed")}>
                      {project.description}
                    </p>

                    {/* Key Metrics - Compact */}
                    <div className={cn("grid grid-cols-3 gap-2 mb-3")}>
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center p-2 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                          <div className="text-sm font-bold text-primary">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technology Badges - Compact */}
                    <div className={cn("flex flex-wrap gap-1.5")}>
                      {project.badges.map((badge, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-md text-xs font-medium hover:bg-secondary hover:text-white transition-all duration-200 cursor-default"
                        >
                          {badge}
                        </span>
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
