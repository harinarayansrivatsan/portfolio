"use client"

import { SectionLayout } from "@/components/layout/section-layout"
import { SectionHeader } from "@/components/ui/section-header"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

import { INTERESTS } from "@/lib/data"

export function InterestsSection() {
  return (
    <SectionLayout id="interests" className="bg-background">
      <SectionHeader
        title="Beyond Work"
        subtitle="Passions that drive personal growth and broaden perspectives."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1400px] mx-auto px-4">
        {INTERESTS.map((interest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
          >
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 bg-secondary text-primary")}>
              <interest.icon size={24} strokeWidth={2} />
            </div>

            <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{interest.title}</h3>
            <div className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-widest mb-4 border-b border-border pb-3">{interest.focus}</div>

            <p className="text-base text-muted-foreground leading-relaxed font-medium mt-auto">
              {interest.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  )
}
