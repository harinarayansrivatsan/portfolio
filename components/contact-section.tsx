"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TEXT, COMPONENTS, cn, getSectionClasses } from "@/lib/design-system"
import { SECTION_CONFIGS } from "@/lib/design-tokens"

const CONFIG = SECTION_CONFIGS.contact
const classes = getSectionClasses('contact')

const CONTACT_METHODS = [
  {
    title: "LinkedIn",
    subtitle: "Professional Networking",
    description: "Connect for networking, industry insights, quick updates, and professional relationship building. Open to relocation for the right opportunity.",
    contact: "linkedin.com/in/harinarayansrivatsan",
    href: "https://linkedin.com/in/harinarayansrivatsan",
    icon: "💼",
    availability: "Active daily",
  },
  {
    title: "Email",
    subtitle: "Professional Communication",
    description: "Best for formal inquiries, job opportunities, and detailed discussions about projects or collaborations. Open to full-time opportunities starting May 2026.",
    contact: "harinarayan.professional@gmail.com",
    href: "mailto:harinarayan.professional@gmail.com",
    icon: "📧",
    availability: "Response within 24 hours",
  }
] as const

export function ContactSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <SectionLayout id="contact">
      <div ref={ref} className="w-full max-w-6xl mx-auto flex flex-col">
        <SectionHeader
          title="Get in Touch"
          subtitle="Let's connect and explore opportunities"
        />

        <div className="w-full px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {CONTACT_METHODS.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.includes('linkedin') ? '_blank' : undefined}
                rel={method.href.includes('linkedin') ? 'noopener noreferrer' : undefined}
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl border-2 border-slate-200 p-3 sm:p-4 text-center transition-all duration-200 hover:border-primary hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                  <div className="text-2xl sm:text-3xl mb-2">
                    {method.icon}
                  </div>

                  <h3 className="text-base sm:text-lg text-foreground mb-1 font-bold">
                    {method.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-primary mb-2 font-semibold">
                    {method.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 mb-2 leading-relaxed flex-1">
                    {method.description}
                  </p>

                  <div className="px-2 py-1.5 bg-slate-50 border-2 border-slate-200 rounded-xl mb-1.5 transition-colors duration-200 hover:bg-primary hover:border-primary group">
                    <p className="text-xs break-all font-bold text-slate-700 group-hover:text-white">
                      {method.contact}
                    </p>
                  </div>

                  <div className="px-2 py-1 bg-slate-100 rounded-full">
                    <p className="text-[10px] sm:text-xs text-slate-600 font-medium">
                      {method.availability}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
