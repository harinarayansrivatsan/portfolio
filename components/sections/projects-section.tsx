"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { EmblaCarouselType } from "embla-carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { SectionLayout } from "@/components/layout/section-layout"
import { SectionHeader } from "@/components/ui/section-header"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { PROJECTS } from "@/lib/data"

export function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: false,
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateScrollEvents = useCallback((api: EmblaCarouselType) => {
    const slides = api.slideNodes()
    const rootNode = api.rootNode()
    const rootRect = rootNode.getBoundingClientRect()
    const viewportCenter = rootRect.width / 2

    slides.forEach((slide: HTMLElement) => {
      const slideRect = slide.getBoundingClientRect()
      const slideCenter = slideRect.left - rootRect.left + (slideRect.width / 2)
      const dist = Math.abs(viewportCenter - slideCenter)
      const maxDist = rootRect.width * 0.6 // Falloff distance

      let intensity = dist / maxDist
      intensity = Math.max(0, Math.min(1, intensity))

      // Styles - Glass Effect
      const scale = 1 - (intensity * 0.15)
      const opacity = 1 - (intensity * 0.5)

      const content = slide.querySelector('.slide-inner') as HTMLElement
      if (content) {
        content.style.transform = `scale(${scale})`
        content.style.opacity = `${opacity}`

        // Active vs Inactive
        if (intensity < 0.1) {
          content.style.backgroundColor = "hsl(var(--card))"
          content.style.boxShadow = "var(--shadow-xl)"
          content.style.borderColor = "hsl(var(--border))"
        } else {
          content.style.backgroundColor = "hsl(var(--card) / 0.5)"
          content.style.boxShadow = "none"
          content.style.borderColor = "transparent"
        }
      }
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap())
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }
    const onScroll = () => {
      updateScrollEvents(emblaApi)
    }

    emblaApi.on("scroll", onScroll)
    emblaApi.on("reInit", onScroll)
    emblaApi.on("select", onScroll)
    emblaApi.on("select", onSelect)

    updateScrollEvents(emblaApi)
    onSelect()
  }, [emblaApi, updateScrollEvents])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  return (
    <SectionLayout id="projects" className="bg-background overflow-hidden">
      <SectionHeader
        title="What I've shipped so far"
        subtitle="Measurable impact working closely with client organizations"
        className="mb-2"
      />

      <div className="relative w-full max-w-7xl mx-auto pt-4 pb-12">

        {/* Navigation Buttons */}
        {canScrollPrev && (
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-4 z-20 hidden md:block">
            <Button
              size="icon"
              className="rounded-full border-2 border-white/10 shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-110 active:scale-95 transition-all duration-300 h-14 w-14"
              onClick={scrollPrev}
              aria-label="Previous project"
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </Button>
          </div>
        )}

        {canScrollNext && (
          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-4 z-20 hidden md:block">
            <Button
              size="icon"
              className="rounded-full border-2 border-white/10 shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-110 active:scale-95 transition-all duration-300 h-14 w-14"
              onClick={scrollNext}
              aria-label="Next project"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </Button>
          </div>
        )}

        {/* Carousel */}
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom gap-4">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="flex-[0_0_90%] md:flex-[0_0_80%] lg:flex-[0_0_950px] min-w-0 relative pl-4"
              >
                <div
                  className="slide-inner h-full flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-card rounded-3xl border border-border p-4 md:p-8 transition-colors duration-300 origin-center"
                  style={{ willChange: 'transform, opacity' }}
                  onClick={() => scrollTo(index)}
                >
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 flex items-center justify-center h-full">
                    <div className="relative w-full h-[250px] md:h-full min-h-[250px] md:min-h-[350px] rounded-2xl overflow-hidden bg-muted/30 border border-border/50 group shadow-sm">
                      <div className="absolute inset-0 bg-gradient-to-tr from-background/10 to-transparent z-10" />
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={cn(
                          "object-contain transition-transform duration-700 group-hover:scale-105",
                          project.imageClass
                        )}
                        priority={index === 0}
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-1/2 flex flex-col h-full justify-center space-y-4 md:space-y-6 pointer-events-none">
                    <div>
                      <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase mb-2">
                        <span>{project.organization}</span>
                        <span className="w-1 h-1 rounded-full bg-primary/40" />
                        <span>{project.timeframe}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3 w-full py-3 border-y border-border/50 bg-background/30 rounded-lg px-2">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                          <metric.icon size={16} className="text-primary mb-1" />
                          <span className="text-base sm:text-lg font-bold text-foreground">{metric.value}</span>
                          <span className="text-[10px] sm:text-xs text-muted-foreground font-medium uppercase">{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.badges.map((badge, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-semibold border border-transparent hover:border-primary/20 transition-colors">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8 z-10 relative">
          {PROJECTS.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              onClick={() => scrollTo(index)}
              className={cn(
                "p-0 min-h-0 min-w-0 rounded-full transition-all duration-300 h-2.5 hover:bg-transparent",
                index === currentIndex
                  ? "bg-primary w-8 hover:bg-primary"
                  : "bg-muted-foreground/30 w-2.5 hover:bg-muted-foreground/50"
              )}
              style={{ padding: 0 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}
