"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"

export function ProjectsSection() {
  return (
    <SectionLayout id="projects">
      <div style={{paddingTop: "clamp(1.5rem, 4vh, 2rem)"}}>
        <SectionHeader
          title="Projects"
          subtitle="Innovative solutions that make a difference"
        />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 w-full max-w-6xl mx-auto">
        <Card className="glass-card group h-full flex flex-col overflow-hidden">
          <CardHeader className="pb-6">
            <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/50 rounded-xl mb-4 overflow-hidden relative">
              <img
                src="/images/competency-tracker.png"
                alt="Competency Tracker Dashboard"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-caption font-semibold">
                Featured
              </div>
            </div>
            <CardTitle className="text-heading-2 text-primary group-hover:text-primary-light transition-colors duration-300">
              Competency Tracker
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow pt-0">
            <p className="text-body text-foreground mb-3 flex-grow leading-relaxed">
              Customizable web portal deployed at Plymouth State University NH, providing teachers with real-time, data-driven insights on student skills & academic progress through a star-based scoring system.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                AWS Serverless
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                React
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                Python
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                Data Analytics
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card group h-full flex flex-col overflow-hidden">
          <CardHeader className="pb-6">
            <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/50 rounded-xl mb-4 overflow-hidden relative">
              <img
                src="/images/instructor-connect.png"
                alt="Instructor Connect - AI-powered instructor training platform"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-caption font-semibold">
                AI Powered
              </div>
            </div>
            <CardTitle className="text-heading-2 text-primary group-hover:text-primary-light transition-colors duration-300">
              Instructor Connect
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow pt-0">
            <p className="text-body text-foreground mb-3 flex-grow leading-relaxed">
              AI-powered portal enabling instructors to practice teaching through chat sessions with AI student
              personas. Built for a non-profit serving 10,000+ students & rolled out via an RCT involving 250+ daily
              users.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                AI/ML
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                RAG
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                Product Development
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                System Design
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </SectionLayout>
  )
}