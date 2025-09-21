"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { Button } from "./ui/button"

export function ContactSection() {
  const contactMethods = [
    {
      title: "LinkedIn",
      subtitle: "Professional Networking",
      description: "Connect for networking, industry insights, quick updates, and professional relationship building. Open to relocation for the right opportunity.",
      contact: "linkedin.com/in/harinarayansrivatsan",
      href: "https://linkedin.com/in/harinarayansrivatsan",
      icon: "💼",
      color: "from-red-700 to-red-800",
      availability: "Active daily"
    },
    {
      title: "Email",
      subtitle: "Professional Communication",
      description: "Best for formal inquiries, job opportunities, and detailed discussions about projects or collaborations. Currently open to full-time opportunities starting January 2026.",
      contact: "harinarayan.professional@gmail.com",
      href: "mailto:harinarayan.professional@gmail.com",
      icon: "📧",
      color: "from-red-800 to-red-900",
      availability: "Response within 24 hours"
    }
  ]

  return (
    <SectionLayout id="contact">
      <div className="section-content">
        <SectionHeader
          title="Let's connect!"
          subtitle="Let's connect and explore opportunities together"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <div key={index} className="relative w-80">
              {/* Card - Matching Other Sections Design */}
              <a
                href={method.href}
                target={method.href.includes('linkedin') ? '_blank' : undefined}
                rel={method.href.includes('linkedin') ? 'noopener noreferrer' : undefined}
                className="block w-full h-full"
              >
                <div className="relative w-full min-h-[400px] rounded-3xl overflow-hidden bg-background border border-border/50 shadow-sm flex flex-col">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-10`} />

                  {/* Icon Section */}
                  <div className="w-full h-24 relative overflow-hidden flex items-center justify-center bg-white">
                    <div className="text-5xl leading-none flex items-center justify-center w-full h-full">{method.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="px-5 pb-5 pt-3 flex-1 flex flex-col">
                    {/* Header Section */}
                    <div className="text-center mb-4">
                      <h3 className="text-base font-bold text-primary mb-2 leading-tight">
                        {method.title}
                      </h3>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">
                        {method.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-foreground/80 leading-relaxed text-center mb-4 flex-1">
                      {method.description}
                    </p>

                    {/* Contact Info */}
                    <div className="bg-primary/10 rounded-lg px-3 py-2 border border-primary/20 text-center mb-3 cursor-pointer transition-all duration-200 hover:bg-red-800 hover:scale-105 hover:shadow-lg hover:border-red-800 group">
                      <p className="text-xs font-medium text-primary break-all group-hover:text-white">
                        {method.contact}
                      </p>
                    </div>

                    {/* Availability Badge */}
                    <div className="bg-muted rounded-lg px-2 py-1 border border-border text-center cursor-pointer transition-all duration-200 hover:bg-red-800 hover:scale-105 hover:shadow-lg hover:border-red-800 group">
                      <p className="text-xs font-medium text-muted-foreground group-hover:text-white">
                        {method.availability}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${method.color}`} />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}