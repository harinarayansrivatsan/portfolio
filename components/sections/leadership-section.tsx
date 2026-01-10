"use client"

import { SectionLayout } from "@/components/layout/section-layout"
import { SectionHeader } from "@/components/ui/section-header"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

import { LEADERSHIP_ROLES } from "@/lib/data"

export function LeadershipSection() {
  return (
    <SectionLayout id="leadership" className="bg-muted/30">
      <SectionHeader
        title="Leadership"
        subtitle="Driving initiatives, building communities, and fostering growth."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto px-4">
        {LEADERSHIP_ROLES.map((role, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group h-full relative overflow-hidden"
          >
            <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-sm bg-secondary text-primary")}>
              <role.icon size={28} strokeWidth={2} />
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {role.title}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
                  {role.timeframe}
                </span>
              </div>
              <p className="text-sm text-primary font-semibold">{role.subtitle}</p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow font-normal">
              {role.description}
            </p>

            <div className="mt-auto pt-6 border-t border-border w-full">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border w-full">
                <span className="relative flex h-2.5 w-2.5 shrink-0 bg-green-500 rounded-full" />
                <span className="text-xs font-bold text-foreground">{role.metric}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  )
}
