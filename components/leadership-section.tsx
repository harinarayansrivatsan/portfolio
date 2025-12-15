"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { motion } from "framer-motion"
import { Users, Rocket } from "lucide-react"

const LEADERSHIP_ROLES = [
  {
    title: "President",
    subtitle: "Business Information Technology Students @ TAMU",
    timeframe: "2024 - Present",
    description: "Partnered with 3+ local businesses in College Station TX and sourced candidates for technology transformation & web development volunteering opportunities",
    metric: "Active partnerships with 3+ local businesses",
    icon: Users,
    color: "text-red-500",
  },
  {
    title: "Co-Founder",
    subtitle: "ACM Student Chapter - SASTRA University",
    timeframe: "2018 - 2020",
    description: "Co-founded ACM student chapter at SASTRA University, hosted online coding competitions, conducted in-person workshops and conducted classes on programming concepts",
    metric: "200+ students participated in events",
    icon: Rocket,
    color: "text-orange-500",
  },
]

export function LeadershipSection() {
  return (
    <SectionLayout id="leadership" className="bg-transparent">
      <SectionHeader
        title="Leadership"
        subtitle="Driving initiatives and building communities."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
        {LEADERSHIP_ROLES.map((role, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col items-center text-center hover:bg-white/5 transition-colors group"
          >
            <div className={`p-4 rounded-full bg-white/5 border border-white/10 ${role.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <role.icon size={32} />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">{role.title}</h3>
            <p className="text-primary font-medium mb-1">{role.subtitle}</p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">{role.timeframe}</p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {role.description}
            </p>

            <div className="mt-auto px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
              {role.metric}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  )
}
