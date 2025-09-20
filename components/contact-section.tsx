"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { Button } from "./ui/button"

export function ContactSection() {
  return (
    <SectionLayout id="contact">
      <div style={{paddingTop: "clamp(1.5rem, 4vh, 2rem)"}}>
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's connect and explore opportunities together"
        />

        <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Introduction Card */}
          <div className="glass-card text-center">
            <p className="text-body text-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, collaborations, or connecting with fellow
              professionals in the tech industry. Currently open to full-time opportunities starting January 2026.
            </p>

            {/* Availability Banner */}
            <div className="bg-gradient-to-br from-primary/90 to-primary-light rounded-2xl p-4 sm:p-6 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-xl animate-pulse">🌍</span>
                  <span className="font-semibold text-body-lg">Open to Relocation</span>
                </div>
                <span className="hidden sm:inline text-white/70">|</span>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🚀</span>
                  <span className="font-semibold text-body-lg">Available from January 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email Card */}
            <a
              href="mailto:harinarayan.professional@gmail.com"
              className="glass-card group hover:shadow-2xl transition-all duration-500 block h-full"
            >
              <div className="flex flex-col items-center text-center gap-6 h-full">
                <div className="flex-shrink-0 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl relative overflow-hidden w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <svg
                    className="text-primary-foreground relative z-10"
                    width="28"
                    height="28"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-heading-3 font-semibold text-primary mb-3 group-hover:text-primary-light transition-colors">
                    Email
                  </h3>
                  <p className="text-foreground font-medium text-body break-all group-hover:text-primary transition-colors">
                    harinarayan.professional@gmail.com
                  </p>
                  <p className="text-muted-foreground text-body-sm mt-2">
                    Best for formal inquiries
                  </p>
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/harinarayansrivatsan"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group hover:shadow-2xl transition-all duration-500 block h-full"
            >
              <div className="flex flex-col items-center text-center gap-6 h-full">
                <div className="flex-shrink-0 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl relative overflow-hidden w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <svg
                    className="text-secondary-foreground relative z-10"
                    width="28"
                    height="28"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="text-heading-3 font-semibold text-secondary mb-3 group-hover:text-secondary-light transition-colors">
                    LinkedIn
                  </h3>
                  <p className="text-foreground font-medium text-body group-hover:text-secondary transition-colors">
                    Connect with me professionally
                  </p>
                  <p className="text-muted-foreground text-body-sm mt-2">
                    Quick networking & updates
                  </p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </SectionLayout>
  )
}