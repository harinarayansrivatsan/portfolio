"use client"

import { SectionLayout } from "@/components/layout/section-layout"
import { SectionHeader } from "@/components/ui/section-header"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

import { RECOMMENDATIONS } from "@/lib/data"

export function RecommendationsSection() {
  return (
    <SectionLayout id="recommendations" className="bg-muted/30 pb-32">
      <SectionHeader
        title="Recommendations"
        subtitle="Endorsements from leaders reflecting my impact and work ethic."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1500px] mx-auto px-4">
        {RECOMMENDATIONS.map((recommendation, index) => (
          <motion.div
            key={index}
            className="bg-card rounded-3xl p-8 flex flex-col h-full relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border hover:border-primary/20"
          >
            <Quote className={cn("absolute top-8 right-8 w-10 h-10 opacity-10 group-hover:opacity-20 transition-opacity transform rotate-12 text-primary")} />

            <div className="pb-6 border-b border-border mb-6 flex items-center gap-4 relative z-10">
              <div className={cn("w-12 h-12 rounded-full flex items-center justify-center bg-secondary text-primary border border-border font-black text-lg shadow-sm shrink-0 uppercase")}>
                {recommendation.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground leading-tight">{recommendation.name}</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-wide mt-1">{recommendation.title}</p>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">{recommendation.role}</p>
              </div>
            </div>

            <div className="flex-grow">
              {/* Use whitespace-pre-line to respect paragraph breaks in content */}
              <p className="text-muted-foreground leading-relaxed relative z-10 whitespace-pre-line text-base font-normal font-sans">
                "{recommendation.content}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  )
}
