"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"

export function ProjectsSection() {
  const projects = [
    {
      title: "Competency Tracker",
      description: "Customizable web portal providing teachers with real-time, data-driven insights on student skills & academic progress through a star-based scoring system.",
      image: "/images/competency-tracker.png",
      imageAlt: "Competency Tracker Dashboard",
      badges: ["AWS Serverless", "React", "Python", "Data Analytics"],
      featured: true,
      impact: "Deployed at Plymouth State University",
      timeframe: "2025"
    },
    {
      title: "Instructor Connect",
      description: "Onboarding portal for pedagogical training of instructors via chat sessions with AI personas of real students. Managed system roll out via a Randomized Controlled Trial on 250+ daily users.",
      image: "/images/instructor-connect.png",
      imageAlt: "Instructor Connect - AI-powered instructor training platform",
      badges: ["AI/ML", "RAG", "Product Launch", "Systems Design"],
      featured: false,
      impact: "Deployed at Agastya International Foundation",
      timeframe: "2024"
    }
  ]

  return (
    <SectionLayout id="projects">
      <div className="section-content">
        <SectionHeader
          title="What I've built"
          subtitle="Innovative solutions currently driving impact at real organizations"
        />

        {/* Grid Layout - Narrower cards for better content rendering */}
        <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative w-full max-w-96 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card - Uniform size with fixed sections */}
                <div className="relative w-full min-h-[520px] rounded-3xl overflow-hidden bg-background border border-border/50 shadow-sm flex flex-col">
                  {/* Background Gradient - Aggie Maroon */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-50" />


                  {/* Project Image Section - Zoomed in */}
                  <div className="w-full h-52 relative overflow-hidden bg-white flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover"
                      style={project.title === "Competency Tracker" ? { objectPosition: '50% 25%' } : {}}
                    />
                  </div>

                  {/* Content - Reduced spacing between text and pills */}
                  <div className="px-4 pb-4 pt-3 flex-1 flex flex-col">
                    {/* Timeframe - Fixed height */}
                    <div className="text-center mb-1 h-6 flex items-center justify-center">
                      <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-primary bg-primary/10 border border-primary/20">
                        {project.timeframe}
                      </div>
                    </div>

                    {/* Title - Fixed height */}
                    <div className="text-center mb-2 h-8 flex items-center justify-center">
                      <h3 className="text-base font-bold text-primary leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Impact Statement - Highlighted pill */}
                    <div className="mb-2 h-8 flex items-center justify-center">
                      <div className="inline-flex items-center px-3 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all duration-200 border-2 border-primary-light">
                        ✅ {project.impact}
                      </div>
                    </div>

                    {/* Description - Fixed height with overflow handling */}
                    <div className="text-center mb-2 h-16 flex items-start justify-center">
                      <p className="text-xs text-foreground/80 leading-relaxed text-center line-clamp-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Technology Badges - Fixed position at bottom */}
                    <div className="grid grid-cols-2 gap-1.5 mt-auto h-20">
                      {project.badges.map((badge, i) => (
                        <div
                          key={i}
                          className="px-2 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-medium text-center cursor-pointer transition-all duration-200 hover:bg-red-800 hover:text-white hover:scale-105 hover:shadow-lg hover:border-red-800 flex items-center justify-center"
                        >
                          {badge}
                        </div>
                      ))}
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