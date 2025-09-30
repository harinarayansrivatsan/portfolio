"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming",
      icon: "💻",
      skills: ["Python", "C++", "SQL", "JavaScript"],
      description: "Core programming languages and data management technologies for building robust applications and handling complex data structures."
    },
    {
      title: "AI Tools",
      icon: "🤖",
      skills: ["Claude Code", "Cursor", "Deep Research", "Perplexity Comet"],
      description: "Advanced AI tools and machine learning techniques for developing intelligent systems and natural language processing applications."
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["Git", "Docker", "AWS", "CI/CD"],
      description: "Cloud infrastructure, containerization, and automated deployment pipelines for scalable and reliable software delivery."
    },
    {
      title: "Web Frameworks",
      icon: "🌐",
      skills: ["FastAPI", "LangChain", "React", "Streamlit"],
      description: "Modern web frameworks and development tools for creating high-performance APIs and responsive user interfaces."
    },
    {
      title: "Certifications",
      icon: "🏆",
      skills: ["AWS Solutions Architect", "CCSK v4", "PSPO-1", "ISC2 CC"],
      description: "Professional certifications demonstrating expertise in cloud architecture, security, and agile product management methodologies."
    },
  ]

  return (
    <SectionLayout id="skills">
      <div className="section-content">
        <SectionHeader
          title="What I'm good at"
          subtitle="Technical proficiencies and professional certifications"
        />

        {/* Grid Layout - Optimized for Navigation and Viewport */}
        <div className="w-full mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-none mx-auto">
            {skillCategories.map((category, index) => (
              <div key={index} className="w-full max-w-80 mx-auto md:mx-0">
                {/* Card - Aggie Maroon Theme with Subtle Hover Effect */}
                <div className="relative w-full min-h-[320px] rounded-3xl overflow-hidden bg-background border border-border/50 shadow-sm flex flex-col">
                  {/* Background Gradient - Aggie Maroon with Enhanced Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-50" />

                  {/* Icon Section - Clean White Background */}
                  <div className="w-full h-24 relative overflow-hidden flex items-center justify-center bg-white">
                    <div className="text-5xl leading-none flex items-center justify-center w-full h-full">{category.icon}</div>
                  </div>

                  {/* Content - Clean Typography */}
                  <div className="px-3 pb-3 pt-2 flex-1 flex flex-col">
                    {/* Title Section */}
                    <div className="text-center mb-4">
                      <h3 className="text-sm font-bold text-primary leading-tight">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills Pills - Aligned Section */}
                    <div className="flex-1 flex flex-col justify-end">
                      <div className="grid grid-cols-1 gap-1">
                        {category.skills.map((skill, i) => (
                          <div
                            key={i}
                            className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-medium text-center cursor-pointer transition-all duration-200 hover:bg-red-800 hover:text-white hover:scale-105 hover:shadow-lg hover:border-red-800"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent - Aggie Maroon */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-primary-light" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </SectionLayout>
  )
}