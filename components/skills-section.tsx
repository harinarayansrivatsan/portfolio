"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { motion } from "framer-motion"
import { Terminal, Cpu, Cloud, Globe, Award, Database } from "lucide-react"

const SKILL_CATEGORIES = [
  {
    title: "Programming",
    icon: Terminal,
    skills: ["Python", "C++", "SQL", "JavaScript", "TypeScript"],
    color: "text-blue-400"
  },
  {
    title: "AI & ML",
    icon: Cpu,
    skills: ["Claude Code", "Cursor", "Deep Research", "RAG", "LLMs"],
    color: "text-purple-400"
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Git", "CI/CD", "Terraform"],
    color: "text-cyan-400"
  },
  {
    title: "Full Stack",
    icon: Globe,
    skills: ["FastAPI", "React", "Next.js", "Streamlit", "Node.js"],
    color: "text-green-400"
  },
  {
    title: "Data & Analytics",
    icon: Database,
    skills: ["Pandas", "PostgreSQL", "Data Visualization", "ETL"],
    color: "text-orange-400"
  },
  {
    title: "Certifications",
    icon: Award,
    skills: ["AWS Solutions Architect", "CCSK v4", "PSPO-1", "ISC2 CC"],
    color: "text-yellow-400"
  },
]

export function SkillsSection() {
  return (
    <SectionLayout id="skills" className="bg-transparent">
      <SectionHeader
        title="Technical Arsenal"
        subtitle="The tools and technologies I use to build the future."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="glass-card p-6 hover:bg-white/5 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-sm text-gray-300 hover:text-white hover:border-primary/50 transition-colors cursor-default"
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
