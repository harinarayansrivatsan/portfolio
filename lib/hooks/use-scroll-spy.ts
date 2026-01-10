"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(ids: string[], offset: number = 100) {
    const [activeId, setActiveId] = useState<string>(ids[0])

    useEffect(() => {
        let ticking = false

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY
                    const viewportHeight = window.innerHeight
                    const documentHeight = document.documentElement.scrollHeight

                    // Check if bottom reached
                    if (scrollY + viewportHeight >= documentHeight - 50) {
                        setActiveId(ids[ids.length - 1])
                        ticking = false
                        return
                    }

                    // Check if top (first section)
                    if (scrollY < 100) {
                        setActiveId(ids[0])
                        ticking = false
                        return
                    }

                    // Use a "look ahead" line at 30% of the screen
                    const checkLine = scrollY + (viewportHeight * 0.3)

                    for (const id of ids) {
                        const element = document.getElementById(id)
                        if (element) {
                            const { offsetTop, offsetHeight } = element
                            const offsetBottom = offsetTop + offsetHeight

                            // If the section contains the checkLine
                            if (checkLine >= offsetTop && checkLine < offsetBottom) {
                                setActiveId(id)
                                break
                            }
                        }
                    }
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        // Initial check
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [ids, offset])

    return activeId
}
