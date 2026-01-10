"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { EmblaCarouselType } from "embla-carousel"
import { useEffect, useCallback, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { SectionLayout } from "@/components/layout/section-layout"
import { SectionHeader } from "@/components/ui/section-header"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { JOURNEY_ITEMS } from "@/lib/data"

export function JourneySection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: false,
  })

  // Navigation State
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateScrollEvents = useCallback((api: EmblaCarouselType) => {
    const slides = api.slideNodes()
    const rootNode = api.rootNode()
    const rootRect = rootNode.getBoundingClientRect()
    const viewportCenter = rootRect.width / 2

    slides.forEach((slide: HTMLElement) => {
      const slideRect = slide.getBoundingClientRect()
      // Calculate center of slide relative to the viewport (rootNode)
      const slideCenter = slideRect.left - rootRect.left + (slideRect.width / 2)

      const dist = Math.abs(viewportCenter - slideCenter)

      // Falloff distance: how far from center until max effect is applied
      // varying this changes how "tight" the focus is
      const maxDist = rootRect.width * 0.6

      let intensity = dist / maxDist
      intensity = Math.max(0, Math.min(1, intensity)) // 0 = center, 1 = far

      // Styles
      const scale = 1 - (intensity * 0.1) // 1 -> 0.9
      const opacity = 1 - (intensity * 0.5) // 1 -> 0.5

      const content = slide.querySelector('.slide-inner') as HTMLElement
      if (content) {
        content.style.transform = `scale(${scale})`
        content.style.opacity = `${opacity}`

        // Highlight active card
        if (intensity < 0.1) {
          content.style.borderColor = "hsl(var(--primary) / 0.2)"
          content.style.backgroundColor = "hsl(var(--card))"
          content.style.boxShadow = "var(--shadow-xl)"
        } else {
          content.style.borderColor = "transparent" // clear border for glass look
          content.style.backgroundColor = "hsl(var(--card) / 0.5)" // more transparent background
          content.style.boxShadow = "none"
        }
      }
    })
  }, [])

  const onSlideClick = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index)
      }
    },
    [emblaApi]
  )

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onScroll = () => {
      updateScrollEvents(emblaApi)
    }

    emblaApi.on("scroll", onScroll)
    emblaApi.on("reInit", onScroll)
    emblaApi.on("select", onScroll)

    // Initial call
    updateScrollEvents(emblaApi)

    // Update navigation state
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }

    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    // Initial check
    onSelect()

  }, [emblaApi, updateScrollEvents])

  return (
    <SectionLayout id="journey" className="bg-background overflow-hidden">
      <SectionHeader
        title="Professional Journey"
        subtitle="My path through software engineering, security, and AI innovation."
      />

      <div className="relative w-full max-w-7xl mx-auto py-12">
        {/* Navigation Buttons */}
        {canScrollPrev && (
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-4 z-20 hidden md:block">
            <Button
              size="icon"
              className="rounded-full border-2 border-white/10 shadow-xl shadow-primary/30 hover:bg-primary/90 hover:scale-110 active:scale-95 transition-all duration-300 h-14 w-14"
              onClick={scrollPrev}
              aria-label="Previous role"
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
              aria-label="Next role"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </Button>
          </div>
        )}

        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom gap-4">
            {JOURNEY_ITEMS.map((journeyItem, index) => (
              <div
                key={index}
                className="flex-[0_0_85%] md:flex-[0_0_600px] lg:flex-[0_0_800px] min-w-0 relative pl-4"
              >
                <div
                  className="slide-inner h-full p-6 md:p-8 rounded-3xl border transition-colors duration-300 bg-card origin-center cursor-pointer flex flex-col md:flex-row gap-6 md:gap-8"
                  style={{ willChange: 'transform, opacity, filter' }}
                  onClick={() => onSlideClick(index)}
                >
                  {/* Image Section - Prominent & Fitted */}
                  <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 rounded-2xl overflow-hidden bg-card/95 border border-border flex items-center justify-center p-2 shadow-sm">
                    <Image
                      src={journeyItem.image}
                      alt={journeyItem.company}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col flex-1 min-w-0 pointer-events-none justify-center">
                    <div className="flex flex-col gap-1 mb-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <h3 className="font-bold text-foreground text-2xl md:text-3xl leading-tight">
                          {journeyItem.company}
                        </h3>
                        <span className="inline-block self-start md:self-auto px-3 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full uppercase tracking-wider shrink-0">
                          {journeyItem.year}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm md:text-base font-medium">
                        <span className="text-primary font-semibold">{journeyItem.title}</span>
                        <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
                        <span className="text-muted-foreground">{journeyItem.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                      {journeyItem.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {journeyItem.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs md:text-sm font-medium rounded-md border border-transparent"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
