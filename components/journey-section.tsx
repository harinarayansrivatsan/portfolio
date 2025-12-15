"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { Calendar, MapPin } from "lucide-react"

const TIMELINE_ITEMS = [
  {
    year: "2025 (Summer)",
    title: "Software Engineer (Security)",
    company: "Alcon R&D",
    location: "Lake Forest, CA",
    description: "Built AI-driven Q&A portal serving 300+ users with RAG chat interface. Designed medical image tamper detection workflow using Hailo AI accelerators.",
    image: "/images/alcon.png",
    skills: ["AI Innovation", "Enterprise Software", "Product Ownership"]
  },
  {
    year: "2024 - 2025",
    title: "Software Engineer (Research)",
    company: "Texas A&M University",
    location: "College Station, TX",
    description: "Developed multilingual AI onboarding portal for educational non-profit serving 30M+ students. Reduced cloud costs by 80% through serverless migration.",
    image: "/images/gar.png",
    skills: ["Product Launch", "RAG", "System Design"]
  },
  {
    year: "2021 - 2024",
    title: "Software Engineer (Consulting)",
    company: "Deloitte US-India",
    location: "Chennai, India",
    description: "Built secure LLM guardrails system protecting 300+ users from adversarial attacks. Enhanced system efficiency by 30% through prompt engineering and API design.",
    image: "/images/deloitte.png",
    skills: ["Consulting", "Cloud Security", "AI Security"]
  },
  {
    year: "2020 - 2021",
    title: "Software Engineer (Automation)",
    company: "Hewlett Packard",
    location: "Bengaluru, India",
    description: "Achieved 70% reduction in IT support tickets in 6 months. Gained hands-on experience in enterprise software development and Robotic Process Automation.",
    image: "/images/hewlett-packard.png",
    skills: ["IT Automation", "Enterprise Software", "RPA"]
  }
]

export function JourneySection() {
  return (
    <SectionLayout id="journey">
      <SectionHeader
        title="Professional Journey"
        subtitle="My path through software engineering, security, and AI innovation."
      />

      <div className="relative max-w-5xl mx-auto pl-8 md:pl-0">
        <div className="space-y-12">
          {TIMELINE_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              {/* Timeline Connector (Desktop Only) */}
              {index !== TIMELINE_ITEMS.length - 1 && (
                <div className="absolute left-[24px] md:left-1/2 top-[80px] bottom-[-48px] w-px bg-gradient-to-b from-primary via-primary/30 to-transparent md:-translate-x-1/2 z-0 hidden md:block" />
              )}

              <div className="glass-card overflow-hidden flex flex-col md:flex-row group border border-white/10 hover:border-primary/50 transition-all duration-300">

                {/* Logo Section - High Visibility */}
                <div className="w-full md:w-64 bg-white/95 p-0 flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-black/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
                  <div className="relative w-full h-48 md:h-full min-h-[160px] transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={item.image}
                      alt={item.company}
                      fill
                      className="object-cover"
                      quality={100}
                      priority={index < 2}
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-center bg-black/20 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium mt-1">
                        <span>{item.company}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        <span className="text-sm text-muted-foreground">{item.location}</span>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-white/80 whitespace-nowrap self-start md:self-center shadow-inner">
                      {item.year}
                    </span>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed mb-6 border-l-2 border-primary/20 pl-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-medium text-primary-foreground/90">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}
