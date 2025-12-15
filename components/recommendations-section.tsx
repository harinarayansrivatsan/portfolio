"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { cn } from "@/lib/design-system"

const RECOMMENDATIONS = [
  {
    name: "Thomas Jackson",
    title: "Director at Alcon",
    role: "Global R&D: Embedded Systems Security",
    relationship: "Manager at Alcon",
    date: "August 15, 2025",
    logo: "/logos/alcon.png",
    content: "I had the pleasure of working with Hari during his time as a 2025 Summer Product Security Intern at Alcon, and I was consistently impressed by his talent, curiosity, and passion. He worked on innovative projects at the intersection of cybersecurity and edge AI processors, tackling complex technical challenges with creativity and precision.\n\nIn addition to his edge AI processors work, Hari made significant contributions to a generative AI initiative, bringing fresh ideas and technical insight that meaningfully advanced the project. He asked the right questions, approached problems methodically, and demonstrated a level of focus and enthusiasm that was really great.\n\nAbove all, Hari was a joy to work with—collaborative, proactive, and genuinely passionate about the work. I have no doubt that his skills and mindset will take him far, and I wish him nothing but the best in his future endeavors.",
    highlights: ["Cybersecurity & AI", "Technical Excellence", "Team Collaboration", "Problem Solving"],
    isPrimary: true
  },
  {
    name: "Raiven Myrick",
    title: "CEO at EverSpark",
    role: "Ex-Deloitte Security Engineer",
    relationship: "Team Leader at Deloitte",
    date: "September 11, 2024",
    logo: "/logos/everspark.png",
    content: "Working with Hari was a good experience. He always had a positive attitude each day. He had a willingness and desire to continually learn which helped him pick up the skills quickly to adapt to our team. He was great at researching a troubleshooting defect with our security roles to ensure functionality worked correctly. Additionally had great attention to detail while performing SOD analysis to make our roles more clean. Took direction and constructive feedback very well.",
    highlights: ["Positive Attitude", "Quick Learner", "Attention to Detail", "Team Adaptability"],
    isPrimary: false
  },
  {
    name: "Preetham Derangula",
    title: "Senior Product Leader at Deloitte",
    role: "Product Executive & Technologist",
    relationship: "Manager at Deloitte",
    date: "August 15, 2024",
    logo: "/logos/deloitte.png",
    content: "Hari has joined as analyst in GenAI and Trustworthy AI team. Hari quickly gained other senior developers confidence with his thoroughness, focus, positive attitude and analytical abilities. Hari was effective in creating the prompts to test and validate many commercial and open source LLMs and even wrote all the scripts to automate testing. Hari takes on challenges and is resourceful in solving problems. I recommend anyone who is looking for these abilities. All the best",
    highlights: ["GenAI Expertise", "Analytical Skills", "Automation", "Problem Solving"],
    isPrimary: true
  }
] as const

export function RecommendationsSection() {
  return (
    <SectionLayout id="recommendations" variant="alternate">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <SectionHeader
          title="Recommendations"
          subtitle="What colleagues and mentors say"
        />

        <div className="w-full px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RECOMMENDATIONS.map((recommendation, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl border-2 border-slate-200 p-6 flex flex-col hover:shadow-2xl hover:border-primary hover:-translate-y-2 transition-all duration-300"
              >
                {/* Header with Name and Title */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-foreground">
                    {recommendation.name}
                  </h3>
                  
                  <p className={cn(
                    "text-xs font-semibold text-right",
                    recommendation.isPrimary ? "text-primary" : "text-secondary"
                  )}>
                    {recommendation.title}
                  </p>
                </div>

                {/* Role and Relationship */}
                <div className="flex items-center gap-2 mb-3">
                  <div className={cn(
                    "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white",
                    recommendation.isPrimary ? "bg-primary" : "bg-secondary"
                  )}>
                    {recommendation.relationship}
                  </div>
                  <p className="text-xs text-muted-foreground italic">
                    {recommendation.date}
                  </p>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {recommendation.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
