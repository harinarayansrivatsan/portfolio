"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InterestsSection() {
  const interests = [
    {
      category: "Fitness & Wellness",
      description: "Staying active and maintaining physical and mental well-being",
      activities: ["Weight Training", "Running", "Yoga", "Hiking"],
      icon: () => (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      category: "Technology & Innovation",
      description: "Building solutions and exploring emerging technologies",
      activities: ["AI Projects", "Web Development", "Cloud Architecture", "Cybersecurity Labs"],
      icon: () => (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      category: "Travel & Culture",
      description: "Discovering new places and experiencing diverse cultures",
      activities: ["International Travel", "Local Cuisine", "Photography", "Cultural Events"],
      icon: () => (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      category: "Knowledge & Growth",
      description: "Continuous learning and personal development",
      activities: ["Reading", "Online Courses", "Podcasts", "Industry Conferences"],
      icon: () => (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="interests" className="h-screen flex flex-col justify-center bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-sans font-bold text-center mb-6 text-foreground">Beyond Work</h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Life is about balance. Here's what fuels my creativity and keeps me inspired outside of professional work.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {interests.map((interest, index) => (
              <Card
                key={index}
                className="border border-border hover:border-primary hover:shadow-lg transition-all duration-300 bg-white group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-primary group-hover:text-primary transition-colors">
                      <interest.icon />
                    </div>
                    <CardTitle className="text-xl text-primary font-semibold">{interest.category}</CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{interest.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {interest.activities.map((activity, activityIndex) => (
                      <span
                        key={activityIndex}
                        className="bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white border-2 border-muted rounded-full p-4 hover:bg-muted hover:scale-110 hover:shadow-lg transition-all duration-300 animate-bounce"
        aria-label="Navigate to Contact section"
      >
        <svg className="h-6 w-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  )
}
