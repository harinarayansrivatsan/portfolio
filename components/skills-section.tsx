"use client"

import { useState } from "react"
import { SectionHeader } from "./ui/section-header"
import { Badge } from "./ui/badge"
import { SectionLayout } from "./layout/section-layout"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming & Data",
      icon: "💻",
      color: "from-blue-500 to-purple-600",
      skills: ["Python", "C++", "SQL/NoSQL/Vector DBs", "Object Oriented Design", "Data Structures"],
    },
    {
      title: "Frameworks/Methodologies",
      icon: "🌐",
      color: "from-green-500 to-teal-600",
      skills: ["FastAPI", "Streamlit", "LangChain", "Retrieval Augmented Generation (RAG)"],
    },
    {
      title: "Cloud/DevOps",
      icon: "☁️",
      color: "from-orange-500 to-red-600",
      skills: ["Git", "Linux", "CI/CD", "Docker", "Infrastructure-as-Code (AWS CloudFormation)"],
    },
    {
      title: "Product",
      icon: "📊",
      color: "from-purple-500 to-pink-600",
      skills: ["Agile", "Scrum", "User Interviews", "Persona Mapping", "Lucid Chart"],
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      color: "from-indigo-500 to-blue-600",
      skills: ["Claude Code", "ChatGPT", "Gemini", "Hailo AI", "Perplexity", "Comet"],
    },
    {
      title: "Certifications",
      icon: "🏆",
      color: "from-amber-500 to-orange-600",
      skills: [
        "AWS Solutions Architect Associate",
        "Cloud Security Knowledge CCSK",
        "Professional Scrum Product Owner",
      ],
    },
  ]

  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <SectionLayout id="skills">
      <div className="section-content">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="Technical proficiencies and professional certifications"
        />

        <div className="w-full px-2 sm:px-4 space-y-4 sm:space-y-6">

          <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span className="hidden xs:inline">{category.title}</span>
                <span className="xs:hidden">{category.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-card to-muted/30 rounded-xl border border-border p-4 sm:p-6 min-h-[300px] sm:min-h-[200px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-xl sm:text-2xl border border-primary/10">
                {skillCategories[activeCategory].icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-primary">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors text-xs sm:text-sm px-2 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-6">
            <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/10">
              <div className="text-xl sm:text-2xl font-bold text-primary">6+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/10">
              <div className="text-xl sm:text-2xl font-bold text-primary">25+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/10">
              <div className="text-xl sm:text-2xl font-bold text-primary">3</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              My technical expertise spans full-stack development, cloud architecture, and AI/ML integration.
              I'm passionate about staying current with emerging technologies and applying them to solve real-world challenges.
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}