"use client"

import { SectionLayout } from "./layout/section-layout"
import { Button } from "./ui/button"
import { useCallback } from "react"

const PROFILE_IMAGE_SIZE = "clamp(8rem, 18vw, 12rem)"

export function HeroSection() {
  const handleNavigation = useCallback((path: string) => {
    window.location.href = path
  }, [])

  return (
    <SectionLayout id="home">
      <div className="section-content">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center space-y-4 sm:space-y-5 lg:space-y-6">
          <div className="relative animate-slide-in">
            <div 
              className="mx-auto bg-gradient-to-br from-white to-gray-50 border-4 border-primary/10 rounded-full overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(80,0,0,0.25)] transition-all duration-300 hover:scale-[1.03] group"
              style={{
                width: PROFILE_IMAGE_SIZE,
                height: PROFILE_IMAGE_SIZE
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <img
                src="/images/professional-headshot.jpg"
                alt="Hari Narayan Srivatsan"
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110 will-change-transform"
                loading="eager"
                decoding="sync"
              />
              <div className="absolute inset-0 ring-4 ring-primary/20 ring-offset-4 ring-offset-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 animate-slide-in">
            <h1 className="text-display font-heading text-foreground leading-tight px-2">
              Hari Narayan Srivatsan
            </h1>

            <div className="w-full max-w-none px-2 sm:px-4 space-y-2 sm:space-y-3">
              <h2 className="text-heading-2 font-sans text-primary font-semibold text-center">
                MS in MIS student at Texas A&M University (Class of 2026)
              </h2>

              <p className="text-body font-sans text-muted-foreground w-full max-w-3xl mx-auto px-3 py-2 bg-muted/20 rounded-lg text-center">
                "Bridging innovation with business strategy through AI: building secure intelligent systems that drive impact"
              </p>
            </div>
          </div>

          <div className="w-full px-2 sm:px-4 animate-slide-in">
            <div className="glass-card max-w-2xl mx-auto">
              <p className="text-body text-foreground leading-relaxed text-center">
                With expertise in building secure applications to drive digital transformation, I'm currently gaining hands-on experience in
                building AI products through internships, campus employment, volunteering and coursework.
              </p>
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center animate-slide-in px-2 w-full">
            <Button
              variant="primary"
              size="lg"
              className="min-w-[140px] sm:min-w-[160px] group"
              onClick={() => handleNavigation('/resume')}
            >
              View My Resume
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="min-w-[140px] sm:min-w-[160px] group"
              onClick={() => handleNavigation('/projects')}
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="min-w-[140px] sm:min-w-[160px] group"
              onClick={() => handleNavigation('/contact')}
            >
              Contact Me
            </Button>
          </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
