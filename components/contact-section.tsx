"use client"

import { SectionLayout } from "./layout/section-layout"

export function ContactSection() {
  return (
    <SectionLayout id="contact">
      <div className="section-content">
        <div className="text-center mb-4 lg:mb-6">
          <h2 className="section-title bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">Get In Touch</h2>
          <p className="section-subtitle">Let's connect and explore opportunities together</p>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="glass-card">
            <p className="text-body-lg text-foreground mb-6 leading-relaxed">
              I'm always interested in discussing new opportunities, collaborations, or connecting with fellow
              professionals in the tech industry.
            </p>
            <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-6 mb-6 shadow-lg">
              <p className="text-white font-semibold text-body-lg text-center flex items-center justify-center gap-3">
                <span className="text-xl">🌍</span>
                Open to Relocation | Available for Full-Time Work from May 2026
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="mailto:harinarayan.professional@gmail.com" className="glass-card group hover:shadow-2xl transition-all duration-500 block">
              <div className="flex flex-col items-center text-center gap-6">
                <div
                  className="flex-shrink-0 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl"
                  style={{ width: "4rem", height: "4rem" }}
                >
                  <svg
                    className="text-primary-foreground"
                    style={{ width: "1.75rem", height: "1.75rem" }}
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
                <div className="w-full">
                  <p className="fluid-text-sm font-medium text-primary mb-3">Email</p>
                  <p className="text-foreground font-medium fluid-text-sm break-all group-hover:text-primary transition-colors">
                    harinarayan.professional@gmail.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/harinarayansrivatsan"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group hover:shadow-2xl transition-all duration-500 block"
            >
              <div className="flex flex-col items-center text-center gap-6">
                <div
                  className="flex-shrink-0 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-2xl"
                  style={{ width: "4rem", height: "4rem" }}
                >
                  <svg className="text-secondary-foreground"
                       style={{ width: "1.75rem", height: "1.75rem" }}
                       fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="fluid-text-sm font-medium text-secondary mb-3">LinkedIn</p>
                  <p className="text-foreground font-medium fluid-text-sm group-hover:text-secondary transition-colors">Connect with me</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}