"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const RECOMMENDATIONS = [
  {
    name: "Thomas Jackson",
    title: "Director at Alcon",
    role: "Global R&D: Embedded Systems Security",
    content: `I had the pleasure of working with Hari during his time as a 2025 Summer Product Security Intern at Alcon, and I was consistently impressed by his talent, curiosity, and passion. He worked on innovative projects at the intersection of cybersecurity and edge AI processors, tackling complex technical challenges with creativity and precision.

In addition to his edge AI processors work, Hari made significant contributions to a generative AI initiative, bringing fresh ideas and technical insight that meaningfully advanced the project. He asked the right questions, approached problems methodically, and demonstrated a level of focus and enthusiasm that was really great.

Above all, Hari was a joy to work with—collaborative, proactive, and genuinely passionate about the work. I have no doubt that his skills and mindset will take him far, and I wish him nothing but the best in his future endeavors.`,
    highlights: ["Cybersecurity & AI", "Technical Excellence"],
    color: "text-blue-400"
  },
  {
    name: "Raiven Myrick",
    title: "CEO at EverSpark",
    role: "Ex-Deloitte Security Engineer",
    content: "Working with Hari was a good experience. He always had a positive attitude each day. He had a willingness and desire to continually learn which helped him pick up the skills quickly to adapt to our team. He was great at researching a troubleshooting defect with our security roles to ensure functionality worked correctly. Additionally had great attention to detail while performing SOD analysis to make our roles more clean. Took direction and constructive feedback very well.",
    highlights: ["Positive Attitude", "Quick Learner"],
    color: "text-purple-400"
  },
  {
    name: "Preetham Derangula",
    title: "Senior Product Leader",
    role: "Deloitte",
    content: "Hari has joined as analyst in GenAI and Trustworthy AI team. Hari quickly gained other senior developers confidence with his thoroughness, focus, positive attitude and analytical abilities. Hari was effective in creating the prompts to test and validate many commercial and open source LLMs and even wrote all the scripts to automate testing. Hari takes on challenges and is resourceful in solving problems. I recommend anyone who is looking for these abilities. All the best",
    highlights: ["GenAI Expertise", "Analytical Skills"],
    color: "text-green-400"
  }
]

export function RecommendationsSection() {
  return (
    <SectionLayout id="recommendations" className="bg-transparent">
      <SectionHeader
        title="Recommendations"
        subtitle="Feedback from leaders and colleagues."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
        {RECOMMENDATIONS.map((rec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col h-full relative group hover:bg-white/5 transition-colors"
          >
            <Quote className={`absolute top-6 right-6 w-8 h-8 ${rec.color} opacity-20`} />

            <div className="flex-grow">
              <p className="text-muted-foreground leading-relaxed mb-6 italic relative z-10 break-words whitespace-pre-wrap text-sm md:text-base">
                "{rec.content}"
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 mt-auto">
              <h3 className="text-lg font-bold text-foreground">{rec.name}</h3>
              <p className={`text-sm font-medium ${rec.color}`}>{rec.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{rec.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  )
}
