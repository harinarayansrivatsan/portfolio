"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  return (
    <section id="projects" className="h-screen flex flex-col justify-center bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance text-foreground">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Project 1 - Competency Tracker */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-border">
              <CardHeader className="pb-3">
                <div className="aspect-[4/3] bg-muted rounded-lg mb-3 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/competency%20tracker-qO3D9PGRWK9BNUNVEScumRnaBE2yJS.png"
                    alt="Competency Tracker Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl text-foreground">Competency Tracker</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground mb-3 text-pretty text-sm flex-grow">
                  A customizable web portal providing teachers with real-time, data-driven insights on student skills &
                  progress through a 5 star-based scoring system. Deployed at Plymouth State University, NH.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                    AWS Serverless
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                    Data Analytics
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 - Instructor Connect */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-border">
              <CardHeader className="pb-3">
                <div className="aspect-[4/3] bg-muted rounded-lg mb-3 overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/instructor%20connect-wEyeAcJ2WnmZGvFfKk3G9BfmLsEt5I.png"
                    alt="Instructor Connect - AI-powered instructor training platform"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl text-foreground">Instructor Connect</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground mb-3 text-pretty text-sm flex-grow">
                  AI-powered portal enabling instructors to practice teaching through chat sessions with AI student
                  personas. Built for a non-profit serving 10,000+ students & rolled out via an RCT involving 250+ daily
                  users.
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                    AI/ML
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                    Retrieval Augmented Generation (RAG)
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                    Product Development
                  </Badge>
                  <Badge variant="secondary" className="text-xs bg-muted text-muted-foreground">
                    System Design
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white border-2 border-muted rounded-full p-4 hover:bg-muted hover:scale-110 hover:shadow-lg transition-all duration-300 animate-bounce"
        aria-label="Navigate to Skills section"
      >
        <svg className="h-6 w-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  )
}
