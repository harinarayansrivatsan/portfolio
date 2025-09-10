export function ContactSection() {
  return (
    <section id="contact" className="section-container bg-white">
      <div className="content-wrapper">
        <h2 className="text-4xl font-bold text-center text-black bg-white mb-16">Get In Touch</h2>

        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm always interested in discussing new opportunities, collaborations, or connecting with fellow
              professionals in the tech industry.
            </p>
            <div className="mt-4 p-4 bg-primary border border-primary rounded-lg">
              <p className="text-white font-semibold text-base">
                🌍 Open to Relocation | Available for Full-Time Work from January 2026
              </p>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
              {/* Email tile */}
              <div className="bg-muted border border-border rounded-lg p-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <a
                    href="mailto:harinarayan.professional@gmail.com"
                    className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <svg
                      className="h-6 w-6 text-primary-foreground"
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
                  </a>
                  <div className="w-full">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Email</p>
                    <p className="text-foreground font-medium text-base break-all">
                      harinarayan.professional@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* LinkedIn tile alongside email */}
              <div className="bg-muted border border-border rounded-lg p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <a
                    href="https://linkedin.com/in/harinarayansrivatsan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <svg className="h-6 w-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">LinkedIn</p>
                    <p className="text-foreground font-medium text-sm">Connect with me</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2"></div>
      </div>
    </section>
  )
}
