"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { TEXT, COMPONENTS, SPACING, cn, getSectionClasses } from "@/lib/design-system"
import { SECTION_CONFIGS } from "@/lib/design-tokens"

const CONFIG = SECTION_CONFIGS.recommendations
const classes = getSectionClasses('recommendations')

const RECOMMENDATIONS = [
  {
    name: "Thomas Jackson",
    title: "Director at Alcon",
    role: "Global R&D: Embedded Systems Security",
    relationship: "Manager at Alcon",
    date: "August 15, 2025",
    icon: "💼",
    content: "I had the pleasure of working with Hari during his time as a 2025 Summer Product Security Intern at Alcon, and I was consistently impressed by his talent, curiosity, and passion. He worked on innovative projects at the intersection of cybersecurity and edge AI processors, tackling complex technical challenges with creativity and precision.\n\nIn addition to his edge AI processors work, Hari made significant contributions to a generative AI initiative, bringing fresh ideas and technical insight that meaningfully advanced the project. He asked the right questions, approached problems methodically, and demonstrated a level of focus and enthusiasm that was really great.\n\nAbove all, Hari was a joy to work with—collaborative, proactive, and genuinely passionate about the work. I have no doubt that his skills and mindset will take him far, and I wish him nothing but the best in his future endeavors.",
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
    highlights: ["GenAI Expertise", "Analytical Skills", "Automation", "Problem Solving"]
  }
] as const

export function RecommendationsSection() {
  return (
    <SectionLayout id="recommendations" variant="alternate">
      <div className={classes.wrapper}>
        <div className="w-full max-w-6xl mx-auto">
          <SectionHeader
            title="Recommendations"
            subtitle="What colleagues and mentors say"
          />

          <div className="w-full px-4 sm:px-0">
            <div className={classes.grid}>
              {RECOMMENDATIONS.map((recommendation, index) => (
                <div key={index} className={classes.card}>

                  {/* Icon */}
                  <div className={cn("text-3xl sm:text-4xl mb-2 text-center")}>
                    {recommendation.icon}
                  </div>

                  {/* Header */}
                  <div className="text-center mb-2 px-2">
                    <h3 className={cn("text-base sm:text-lg font-bold text-foreground mb-0.5")}>
                      {recommendation.name}
                    </h3>

                    <p className={cn("text-xs sm:text-sm font-semibold text-primary mb-0.5")}>
                      {recommendation.title}
                    </p>

                    <p className={cn("text-[10px] sm:text-xs text-muted-foreground mb-1")}>
                      {recommendation.role}
                    </p>

                    <div className={cn("inline-flex items-center px-2 py-0.5 bg-primary text-white rounded-full text-[10px] sm:text-xs font-semibold mb-0.5")}>
                      {recommendation.relationship}
                    </div>

                    <p className={cn("text-[10px] sm:text-xs text-muted-foreground italic")}>
                      {recommendation.date}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 mb-2 px-2">
                    <p className={cn("text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-6")}>
                      {recommendation.content}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className={cn("flex flex-wrap gap-1 sm:gap-1.5 px-2")}>
                    {recommendation.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-[10px] sm:text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
