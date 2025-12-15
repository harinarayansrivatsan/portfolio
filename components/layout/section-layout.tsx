"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SectionLayoutProps {
  children: ReactNode
  id?: string
  className?: string
}

export function SectionLayout({
  children,
  id,
  className = "",
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full min-h-screen flex flex-col items-center justify-start py-20 md:pt-24 md:pb-32 scroll-mt-16",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container px-4 md:px-6 z-10 w-full"
      >
        {children}
      </motion.div>
    </section>
  )
}
