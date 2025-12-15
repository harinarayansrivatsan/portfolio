"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { motion } from "framer-motion"
import { Heart, Globe, BookOpen, Rocket } from "lucide-react"

const INTERESTS = [
  {
    title: "Health & Wellness",
    description: "Strength Training, Endurance Running, Mindfulness, Outdoor Activities",
    focus: "Balanced lifestyle",
    icon: Heart,
    color: "text-red-400"
  },
  {
    title: "Cultural Exploration",
    description: "Travel Photography, Culinary Arts, Language Learning, Cultural Immersion",
    focus: "Global perspective",
    icon: Globe,
    color: "text-blue-400"
  },
  {
    title: "Continuous Learning",
    description: "Industry Research, Professional Development, Thought Leadership",
    focus: "Lifelong growth",
    icon: BookOpen,
    color: "text-yellow-400"
  },
  {
    title: "Tech Innovation",
    description: "Vibe Coding, Open Source, Cloud Solutions, Security Research",
    focus: "Future-focused",
    icon: Rocket,
    color: "text-purple-400"
  },
]

export function InterestsSection() {
  return (
    <SectionLayout id="interests" className="bg-transparent">
      <SectionHeader
        title="Beyond Work"
        subtitle="Passions that drive personal growth and perspective."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {INTERESTS.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 hover:bg-white/5 transition-colors group flex flex-col"
          >
            <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <item.icon size={24} />
            </div>

            <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
            <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">{item.focus}</div>

            <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  )
}
