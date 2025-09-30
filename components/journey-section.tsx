"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"

export function JourneySection() {

  const timelineItems = [
    {
      year: "2020 - 2021",
      type: "Internship",
      title: "Software Engineer (Automation)",
      company: "Hewlett Packard",
      location: "Bengaluru, India",
      timeframe: "2020 - 2021",
      description: "Achieved 70% reduction in IT support tickets in 6 months. Gained hands-on experience in enterprise software development and Robotic Process Automation.",
      image: "/images/hewlett-packard.png",
      achievements: ["IT Automation", "Enterprise Software", "Team Collaboration", "Ticket Resolution"],
      color: "from-blue-600 to-blue-800",
      milestone: "HP Internship"
    },
    {
      year: "2021 - 2024",
      type: "Full-Time Employment",
      title: "Software Engineer (Consulting)",
      company: "Deloitte US-India",
      location: "Chennai, India",
      timeframe: "June 2021 – July 2024",
      description: "Built secure LLM guardrails system protecting 300+ users from adversarial attacks. Enhanced system performance by 30% through prompt engineering and API design.",
      image: "/images/deloitte.png",
      achievements: ["Consulting", "Software Engineering", "Cloud Security", "AI Security"],
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
      title: "Software Engineer (Security)",
      company: "Alcon R&D – Product Security",
      location: "Lake Forest, CA",
      timeframe: "May 2025 – August 2025",
      description: "Built AI-driven Q&A portal serving 300+ users with RAG chat interface. Designed medical image tamper detection workflow using Hailo AI accelerators.",
      image: "/images/alcon.png",
      achievements: ["Team collaboration", "AI Innovation", "Enterprise Software", "Product Ownership"],
      color: "from-blue-500 to-blue-700",
      milestone: "Alcon R&D"
    },
  ]

  return (
    <SectionLayout id="journey">
      <div className="section-content">
        <SectionHeader
          title="My Professional Journey"
          subtitle="A timeline of my career milestones"
        />

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">
          {timelineItems.reverse().map((item, index) => (
            <div
              key={index}
              className="relative w-full max-w-80 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
                    {/* Duration on Top */}
                    <div className="text-center mb-4">
                      <div className="text-sm font-bold text-foreground">
                        {item.timeframe}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="relative w-full min-h-[480px] rounded-3xl overflow-hidden bg-background border border-border/50 shadow-sm flex flex-col">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`} />

                      {/* High Quality Company Image */}
                      <div className="w-full h-48 relative overflow-hidden bg-white">
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
                      </div>

                    {/* Content */}
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
                            className="px-2 py-1 bg-muted rounded-lg text-[11px] font-medium text-muted-foreground text-center border border-border cursor-pointer transition-all duration-200 hover:bg-red-800 hover:text-white hover:scale-105 hover:shadow-lg hover:border-red-800"
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