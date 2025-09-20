"use client"


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SectionLayout } from "./layout/section-layout"

export function JourneySection() {

  const timelineItems = [
    {
      year: "2020 - 2021",
      type: "Internship",
      title: "Software Engineer",
      company: "Hewlett Packard",
      location: "Bengaluru, India",
      timeframe: "2020 - 2021",
      description: "Gained hands-on experience in enterprise software development and learned industry best practices.",
      image: "/images/hewlett-packard.png",
      achievements: ["ServiceNow", "REST APIs", "Google Cloud", "UiPath"],
      color: "from-blue-600 to-blue-800",
      milestone: "HP Internship"
    },
    {
      year: "2021 - 2024",
      type: "Full-Time",
      title: "Software Engineer (Security)",
      company: "Deloitte US-India",
      location: "Chennai, India",
      timeframe: "June 2021 – July 2024",
      description: "Built secure LLM guardrails system protecting 300+ users from AI attacks. Enhanced performance by 30% through optimized scanning processes.",
      image: "/images/deloitte.png",
      achievements: ["Oracle Consulting", "AWS", "Cloud Security", "LLM Guardrails"],
      color: "from-green-600 to-green-800",
      milestone: "Deloitte Engineer"
    },
    {
      year: "2024 - 2025",
      type: "Research Assistant",
      title: "Software Engineer (Research)",
      company: "Texas A&M University",
      location: "College Station, TX",
      timeframe: "September 2024 – May 2025",
      description: "Developed multilingual AI onboarding portal for educational non-profit serving 10,000+ students. Reduced cloud costs by 60% through serverless migration.",
      image: "/images/gar.png",
      achievements: ["Product Launch", "RAG", "Marketing Research", "System Design"],
      color: "from-red-800 to-red-900",
      milestone: "Graduate Assistant"
    },
    {
      year: "2025 (Summer)",
      type: "Internship",
      title: "Software Engineer Intern",
      company: "Alcon R&D – Product Security",
      location: "Lake Forest, CA",
      timeframe: "May 2025 – August 2025",
      description: "Built AI-driven Q&A portal serving 300+ users with RAG chat interface. Designed medical image tamper detection workflow using Hailo AI accelerators.",
      image: "/images/alcon.png",
      achievements: ["Medical Devices", "Edge AI", "Enterprise Software", "AI Engineering"],
      color: "from-blue-500 to-blue-700",
      milestone: "Alcon R&D"
    },
  ]


  return (
    <SectionLayout id="journey">
      <div className="section-content">
        <div className="text-center mb-4 lg:mb-6">
          <h2 className="section-title bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">My Professional Journey</h2>
          <p className="section-subtitle">A timeline of my career milestones</p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative">
                    {/* Duration on Top */}
                    <div className="text-center mb-4">
                      <div className="text-sm font-bold text-foreground">
                        {item.timeframe}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="relative w-80 min-h-[480px] rounded-3xl overflow-hidden bg-background border border-border/50 transition-all duration-300 hover:shadow-lg shadow-sm flex flex-col">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`} />

                      {/* High Quality Company Image */}
                      <Popover>
                        <PopoverTrigger asChild>
                          <button className="w-full h-48 relative overflow-hidden cursor-pointer transition-transform hover:scale-105 group bg-white p-0 border-0">
                            <img
                              src={item.image}
                              alt={item.company}
                              className="w-full h-full object-contain block"
                              style={{
                                imageRendering: 'crisp-edges',
                                objectPosition: 'center',
                                display: 'block',
                                margin: 0,
                                padding: 0,
                                transform: 'scale(1.5)',
                                transformOrigin: 'center'
                              }}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-15 transition-opacity`} />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-2 border shadow-xl">
                          <div className="text-center">
                            <img
                              src={item.image}
                              alt={item.company}
                              className="rounded-lg max-w-xs max-h-64 object-contain mx-auto"
                            />
                            <p className="mt-2 text-sm font-medium">{item.company}</p>
                          </div>
                        </PopoverContent>
                      </Popover>                    {/* Content */}
                    <div className="px-5 pb-5 pt-3 flex-1 flex flex-col">
                      <div className="text-center mb-3">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color} shadow-lg`}>
                            {item.type}
                          </div>
                          {(item.company.includes('Texas A&M') || item.company.includes('Alcon')) && (
                            <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-foreground bg-blue-100 border border-blue-200">
                              🇺🇸 US
                            </div>
                          )}
                          {(item.company.includes('Hewlett Packard') || item.company.includes('Deloitte')) && (
                            <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium text-foreground bg-orange-100 border border-orange-200">
                              🇮🇳 India
                            </div>
                          )}
                        </div>
                        <h3 className="text-base font-bold text-foreground mb-1 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs font-semibold text-muted-foreground">
                          {item.company}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {item.location}
                        </p>
                      </div>

                      <p className="text-xs text-foreground/80 leading-relaxed text-center mb-3 flex-1">
                        {item.description}
                      </p>

                      <div className="grid grid-cols-2 gap-1.5">
                        {item.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className="px-2 py-1 bg-muted rounded-lg text-[11px] font-medium text-muted-foreground text-center border border-border"
                          >
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color}`} />
                  </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}