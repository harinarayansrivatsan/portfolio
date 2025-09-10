"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming & Tools",
      skills: ["JavaScript", "TypeScript", "Python", "SQL/NoSQL", "Object Oriented Design", "Code Review"],
    },
    {
      title: "Web Frameworks",
      skills: ["React", "FastAPI", "Streamlit", "LangChain"],
    },
    {
      title: "Cloud/DevOps",
      skills: ["AWS Serverless", "CloudFormation", "Docker", "Git", "Linux"],
    },
    {
      title: "Product Management",
      skills: ["Agile/Scrum", "User Interviews", "Persona Mapping", "Lucid Chart"],
    },
    {
      title: "AI Tools",
      skills: ["Claude Code", "Vercel (v0.app)", "ChatGPT", "Gemini", "Hailo AI", "Perplexity", "Comet"],
    },
    {
      title: "Professional Certifications",
      skills: [
        "AWS Solutions Architect Associate",
        "ISC2 Certified in Cybersecurity",
        "Professional Scrum Product Owner",
        "Cloud Security Knowledge CCSK",
      ],
    },
  ]

  return (
    <section id="skills" className="h-screen flex flex-col justify-center bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white mb-12">
            <h2 className="text-4xl font-sans font-bold text-center text-black">Skills & Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="border border-border hover:border-primary hover:shadow-md transition-all duration-300 bg-white"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-primary font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("leadership")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white border-2 border-muted rounded-full p-4 hover:bg-muted hover:scale-110 hover:shadow-lg transition-all duration-300 animate-bounce"
        aria-label="Navigate to Leadership section"
      >
        <svg className="h-6 w-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  )
}
