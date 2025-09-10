"use client"

import { useState, useRef } from "react"

export function JourneySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const journeyItems = [
    {
      year: "2016-2020",
      type: "Education",
      title: "Bachelors",
      company: "Computer Science Engineering",
      location: "SASTRA Deemed University, Thanjavur",
      timeframe: "July 2016 – July 2020",
      description:
        "Built strong foundation in computer science principles, data structures, and software engineering practices.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SASTRA-nvVhc1pAh3IkInM9PqgjJabsZZ5vlv.png",
    },
    {
      year: "2020-2021",
      type: "Internship",
      title: "Software Engineer Intern",
      company: "Hewlett Packard",
      location: "Bengaluru, India",
      timeframe: "July 2020 – June 2021",
      description: "Gained hands-on experience in enterprise software development and learned industry best practices.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hewlett%20Packard.png-UmUPBXroN42n6lykBRSEShUIVFgPMT.jpeg",
    },
    {
      year: "2021-2024",
      type: "Full-Time",
      title: "Software/Security Engineer",
      company: "Deloitte USI – Cyber Risk Advisory",
      location: "Chennai, India",
      timeframe: "June 2021 – July 2024",
      description:
        "Designed secure LLM guardrails system for 300+ users. Improved scanning performance by 25% and threat detection by 60%.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Deloitte.png-Nh4n22MzZiZOvNpk8n9FV7RYLltWiz.jpeg",
    },
    {
      year: "2024-2026",
      type: "Education",
      title: "Masters",
      company: "Management Information Systems",
      location: "Texas A&M University",
      timeframe: "August 2024 – May 2026",
      description: "Pursuing MS in MIS, bridging technology and business strategy. GPA: 3.85/4.00",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TAMU.png-MflZMl0bbfUMgmjpHYbCmkhr8IIbZN.jpeg",
    },
    {
      year: "2024-2025",
      type: "Graduate Assistant",
      title: "Software Engineer Graduate Assistant",
      company: "Texas A&M University – Mays Business School",
      location: "College Station, TX",
      timeframe: "September 2024 – May 2025",
      description:
        "Assisted Dr. Hari Sridhar in researching the impact of AI in education by building an end-to-end AI application for a non-profit organization",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gar.png-mMWEzvHe2bqiofeRLLgEyJMo8Fft9f.jpeg",
    },
    {
      year: "Summer 2025",
      type: "Internship",
      title: "AI Software Engineer – R&D",
      company: "Alcon – Global Product Security",
      location: "Lake Forest, CA",
      timeframe: "May 2025 – August 2025",
      description:
        "Developed AI-powered medical image authentication system and built Q&A portal serving 300+ internal users.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Alcon%20Internship-qB0JX4z9MIUgGvZ1st13nKK3yvnb3Z.png",
    },
  ]

  const scrollToCard = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : journeyItems.length - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex < journeyItems.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
  }

  return (
    <section id="journey" className="h-screen flex flex-col justify-center bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-bold text-foreground mb-6">My Journey</h2>
            <p className="text-primary text-lg font-sans">The Road Behind, the Road Ahead</p>
          </div>

          <div className="relative max-w-7xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white border border-border shadow-lg rounded-full p-3 hover:bg-muted hover:scale-110 transition-all duration-200"
              aria-label="Previous milestone"
            >
              <svg className="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white border border-border shadow-lg rounded-full p-3 hover:bg-muted hover:scale-110 transition-all duration-200"
              aria-label="Next milestone"
            >
              <svg className="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div ref={containerRef} className="relative h-[500px] flex items-center justify-center">
              <div className="relative w-full flex items-center justify-center">
                {journeyItems.map((item, index) => {
                  const offset = index - currentIndex
                  const isActive = index === currentIndex
                  const getBlurClass = () => {
                    if (isActive) return "" // No blur for active card
                    if (Math.abs(offset) === 1) return "blur-[2px]" // Mild blur for adjacent cards
                    return "blur-[4px]" // Stronger blur for cards at distance 2+
                  }

                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                        isActive
                          ? "z-10 scale-100 opacity-100"
                          : `z-0 scale-75 opacity-40 hover:opacity-60 ${getBlurClass()}`
                      }`}
                      style={{
                        transform: `translateX(${offset * 380}px) scale(${isActive ? 1 : 0.75})`,
                      }}
                      onClick={() => !isActive && setCurrentIndex(index)}
                    >
                      <div className="w-80 bg-white border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-[500px] flex flex-col">
                        {/* Background image */}
                        <div className="relative h-48 overflow-hidden flex-shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={`${item.title} at ${item.company}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                            {item.year}
                          </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                          <div className="mb-4">
                            <h3 className="text-xl font-bold text-foreground mb-1">{item.type}</h3>
                            <h4 className="text-base font-semibold text-primary mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.company}</p>
                            <p className="text-xs text-muted-foreground mt-1">{item.location}</p>
                          </div>

                          <p className="text-muted-foreground text-sm leading-relaxed flex-grow overflow-hidden">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-3">
              {journeyItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-125 shadow-lg"
                      : "bg-muted hover:bg-secondary hover:scale-110"
                  }`}
                  aria-label={`Go to milestone ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white border-2 border-muted rounded-full p-4 hover:bg-muted hover:scale-110 hover:shadow-lg transition-all duration-200 animate-bounce"
        aria-label="Navigate to Projects section"
      >
        <svg className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  )
}
