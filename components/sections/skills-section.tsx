"use client"

import { SectionLayout } from "@/components/layout/section-layout"
import { SectionHeader } from "@/components/ui/section-header"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

import { SKILL_CATEGORIES } from "@/lib/data"

export function SkillsSection() {
  return (
    <SectionLayout id="skills" className="bg-muted/30">
      <SectionHeader
        title="Skills"
        subtitle="The tools and technologies I leverage to build scalable solutions."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1400px] mx-auto px-4">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col bg-card rounded-xl border border-border/50 shadow-sm p-5 hover:border-primary/20 transition-colors h-full"
          >
            <div className="flex items-center gap-3 mb-4 border-b border-border/50 pb-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <category.icon size={18} strokeWidth={2} />
              </div>
              <h3 className="text-base font-bold text-foreground">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-background border border-border shadow-sm text-xs font-semibold text-foreground hover:border-primary/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  )
}
