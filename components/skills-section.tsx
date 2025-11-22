"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TEXT, COMPONENTS, cn, getSectionClasses } from "@/lib/design-system"
import { SECTION_CONFIGS } from "@/lib/design-tokens"

const CONFIG = SECTION_CONFIGS.skills
const classes = getSectionClasses('skills')

const SKILL_CATEGORIES = [
  {
    title: "Programming",
    icon: "💻",
    skills: ["Python", "C++", "SQL", "JavaScript"]
  },
  {
    title: "AI Tools",
    icon: "🤖",
    skills: ["Claude Code", "Cursor", "Deep Research", "Perplexity Comet"]
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: ["Git", "Docker", "AWS", "CI/CD"]
  },
  {
    title: "Web Frameworks",
    icon: "🌐",
    skills: ["FastAPI", "LangChain", "React", "Streamlit"]
  },
  {
    title: "Certifications",
    icon: "🏆",
    skills: ["AWS Solutions Architect", "CCSK v4", "PSPO-1", "ISC2 CC"]
  },
] as const

export function SkillsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <SectionLayout id="skills">
      <div ref={ref} className={classes.wrapper}>
        <div className="w-full max-w-6xl mx-auto">
          <SectionHeader
            title="Technical Skills"
            subtitle="Technologies, tools, and certifications I work with"
          />

          <div className="w-full">
            <div className={classes.grid}>
              {SKILL_CATEGORIES.map((category, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "bg-white rounded-xl border-2 border-slate-200 p-5 text-center",
                    "transition-all duration-200 hover:border-primary hover:shadow-md hover:-translate-y-1"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className={cn(COMPONENTS.icon.md, "mb-3 text-4xl")}>
                    {category.icon}
                  </div>

                  <h3 className={cn(TEXT.card.title, "text-foreground mb-3 font-bold")}>
                    {category.title}
                  </h3>

                  <div className="flex flex-col gap-2 flex-1">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className={cn(
                          "px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-700 font-medium text-sm",
                          "transition-all duration-150 hover:bg-primary hover:text-white hover:border-primary"
                        )}
                      >
                        {skill}
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
