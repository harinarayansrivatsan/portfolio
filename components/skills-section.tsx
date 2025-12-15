"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { cn } from "@/lib/design-system"

const SKILL_CATEGORIES = [
  {
    title: "Programming",
    icon: "💻",
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 75 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 80 }
    ],
    isPrimary: true
  },
  {
    title: "AI Tools",
    icon: "🤖",
    skills: [
      { name: "Claude Code", level: 95 },
      { name: "Cursor", level: 90 },
      { name: "Deep Research", level: 85 },
      { name: "Perplexity Comet", level: 80 }
    ],
    isPrimary: false
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 75 }
    ],
    isPrimary: true
  },
  {
    title: "Web Frameworks",
    icon: "🌐",
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "LangChain", level: 80 },
      { name: "React", level: 75 },
      { name: "Streamlit", level: 85 }
    ],
    isPrimary: false
  },
  {
    title: "Certifications",
    icon: "🏆",
    skills: [
      { name: "AWS Solutions Architect", level: 100 },
      { name: "CCSK v4", level: 100 },
      { name: "PSPO-1", level: 100 },
      { name: "ISC2 CC", level: 100 }
    ],
    isPrimary: true
  },
] as const

export function SkillsSection() {
  return (
    <SectionLayout id="skills">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <SectionHeader
          title="Technical Skills"
          subtitle="Technologies, tools, and certifications I work with"
        />

        <div className="w-full px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="group relative bg-white rounded-2xl border-2 border-slate-200 p-6 shadow-lg hover:shadow-2xl hover:border-primary hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Top Accent Bar */}
                <div className={cn(
                  "absolute top-0 left-0 right-0 h-1",
                  category.isPrimary ? "bg-primary" : "bg-secondary"
                )} />

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={cn(
                    "text-4xl p-3 rounded-xl transform group-hover:scale-110 transition-transform duration-300",
                    category.isPrimary ? "bg-primary/10" : "bg-secondary/10"
                  )}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      {/* Skill Name and Percentage */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-slate-700">
                          {skill.name}
                        </span>
                        <span className={cn(
                          "text-xs font-bold px-2 py-0.5 rounded-full",
                          category.isPrimary 
                            ? "bg-primary/10 text-primary" 
                            : "bg-secondary/10 text-secondary"
                        )}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-500",
                            category.isPrimary 
                              ? "bg-gradient-to-r from-primary to-primary-light" 
                              : "bg-gradient-to-r from-secondary to-secondary-light"
                          )}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative Circle */}
                <div className={cn(
                  "absolute -bottom-6 -right-6 w-24 h-24 rounded-full",
                  category.isPrimary ? "bg-primary/5" : "bg-secondary/5"
                )} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
