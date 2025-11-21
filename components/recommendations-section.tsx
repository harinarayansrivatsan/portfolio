"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { ANIMATION_DELAYS, GRADIENTS } from "@/lib/constants"

const RECOMMENDATIONS = [
    {
      name: "Thomas Jackson",
      title: "Director at Alcon",
      role: "Global R&D: Embedded Systems Security",
      relationship: "Manager at Alcon",
      date: "August 15, 2025",
      icon: "💼",
      content: "I had the pleasure of working with Hari during his time as a 2025 Summer Product Security Intern at Alcon, and I was consistently impressed by his talent, curiosity, and passion. He worked on innovative projects at the intersection of cybersecurity and edge AI processors, tackling complex technical challenges with creativity and precision.\n\nIn addition to his edge AI processors work, Hari made significant contributions to a generative AI initiative, bringing fresh ideas and technical insight that meaningfully advanced the project. He asked the right questions, approached problems methodically, and demonstrated a level of focus and enthusiasm that was really great.\n\nAbove all, Hari was a joy to work with—collaborative, proactive, and genuinely passionate about the work. I have no doubt that his skills and mindset will take him far, and I wish him nothing but the best in his future endeavors.",
      color: GRADIENTS.BLUE,
      highlights: ["Cybersecurity & AI", "Technical Excellence", "Team Collaboration", "Problem Solving"]
    },
    {
      name: "Raiven Myrick",
      title: "CEO at EverSpark",
      role: "Ex-Deloitte Security Engineer",
      relationship: "Team Leader at Deloitte",
      date: "September 11, 2024",
      icon: "🚀",
      content: "Working with Hari was a good experience. He always had a positive attitude each day. He had a willingness and desire to continually learn which helped him pick up the skills quickly to adapt to our team. He was great at researching a troubleshooting defect with our security roles to ensure functionality worked correctly. Additionally had great attention to detail while performing SOD analysis to make our roles more clean. Took direction and constructive feedback very well.",
      color: GRADIENTS.GREEN,
      highlights: ["Positive Attitude", "Quick Learner", "Attention to Detail", "Team Adaptability"]
    },
    {
      name: "Preetham Derangula",
      title: "Senior Product Leader at Deloitte",
      role: "Product Executive & Technologist",
      relationship: "Manager at Deloitte",
      date: "August 15, 2024",
      icon: "⭐",
      content: "Hari has joined as analyst in GenAI and Trustworthy AI team. Hari quickly gained other senior developers confidence with his thoroughness, focus, positive attitude and analytical abilities. Hari was effective in creating the prompts to test and validate many commercial and open source LLMs and even wrote all the scripts to automate testing. Hari takes on challenges and is resourceful in solving problems. I recommend anyone who is looking for these abilities. All the best",
      color: GRADIENTS.RED_MEDIUM,
      highlights: ["GenAI Expertise", "Analytical Skills", "Automation", "Problem Solving"]
    }
  ] as const

export function RecommendationsSection() {
  return (
    <SectionLayout id="recommendations">
      <div className="section-content">
        <SectionHeader
          title="Recommendations"
          subtitle="What my colleagues and mentors say about working with me"
        />

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center px-4">
          {RECOMMENDATIONS.map((recommendation, index) => (
            <div
              key={index}
              className="relative w-full max-w-80 mx-auto animate-fade-in-up"
              style={{ animationDelay: `${index * ANIMATION_DELAYS.NORMAL}ms` }}
            >
              {/* Card */}
              <div className="relative min-h-[480px] rounded-3xl overflow-hidden bg-background border border-border/50 shadow-sm flex flex-col">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${recommendation.color} opacity-10`} />

                {/* Icon Section */}
                <div className="w-full h-24 relative overflow-hidden flex items-center justify-center bg-white">
                  <div className="text-5xl leading-none flex items-center justify-center w-full h-full">{recommendation.icon}</div>
                </div>

                {/* Content */}
                <div className="px-5 pb-5 pt-3 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="text-center mb-3">
                    <h3 className="text-base font-bold text-primary mb-2 leading-tight">
                      {recommendation.name}
                    </h3>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      {recommendation.title}
                    </p>
                    <p className="text-xs text-muted-foreground mb-2">
                      {recommendation.role}
                    </p>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${recommendation.color} shadow-lg mb-2`}>
                      {recommendation.relationship}
                    </div>
                    <p className="text-[11px] text-muted-foreground italic">
                      {recommendation.date}
                    </p>
                  </div>

                  {/* Recommendation Content */}
                  <div className="flex-1 overflow-y-auto">
                    <p className="text-xs text-foreground/80 leading-relaxed text-center">
                      {recommendation.content}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${recommendation.color}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}