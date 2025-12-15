"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { CheckCircle2, Trophy, Users, BarChart } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"

const PROJECTS = [
  {
    title: "Competency Tracker",
    description: "Customizable web portal providing teachers with real-time, data-driven insights on student skills and academic progress through a star-based scoring system.",
    image: "/images/competency-tracker.png",
    badges: ["AWS Serverless", "React", "Python", "Data Analytics"],
    impact: "Production Deployment",
    organization: "Plymouth State University",
    metrics: [
      { label: "Teachers", value: "50+", icon: Users },
      { label: "Students", value: "500+", icon: CheckCircle2 },
      { label: "Real-time", value: "100%", icon: BarChart }
    ],
    timeframe: "2025"
  },
  {
    title: "Instructor Connect",
    description: "AI-powered onboarding portal for pedagogical training of instructors via interactive chat sessions with AI personas of real students. Managed product launch via RCT.",
    image: "/images/instructor-connect.png",
    badges: ["AI/ML", "RAG", "Product Launch", "Systems Design"],
    impact: "Live in Production",
    organization: "Agastya International Foundation",
    metrics: [
      { label: "Daily Users", value: "250+", icon: Users },
      { label: "Served", value: "30M+", icon: Trophy },
      { label: "Savings", value: "80%", icon: BarChart }
    ],
    timeframe: "2024"
  }
]

export function ProjectsSection() {
  return (
    <SectionLayout id="projects" className="bg-transparent">
      <SectionHeader
        title="Featured Work"
        subtitle="Real-world solutions deployed at leading organizations, driving measurable business impact."
      />

      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <div key={index} className="h-full">
              <div className="glass-card h-full flex flex-col overflow-hidden border border-white/10 group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                {/* Image Side */}
                <div className="relative h-52 overflow-hidden bg-black/40 aspect-video w-full border-b border-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    quality={100}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-white shadow-lg">
                      {project.timeframe}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="mb-auto">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-4">
                      {project.organization}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 py-6 my-6 border-y border-white/5">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="flex justify-center mb-1 text-primary">
                          <metric.icon size={16} />
                        </div>
                        <div className="font-bold text-lg text-white">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.badges.map((badge, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-indigo-300 font-mono font-medium">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}
