import { TYPOGRAPHY } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-border/30 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {/* About */}
            <div>
              <h3 className={`${TYPOGRAPHY.FOOTER.HEADING} font-bold text-foreground mb-3`}>Hari Narayan Srivatsan</h3>
              <p className={`${TYPOGRAPHY.FOOTER.TEXT} text-muted-foreground`}>
                AI Product Engineer & Security Specialist building secure, scalable solutions
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className={`${TYPOGRAPHY.FOOTER.HEADING} font-bold text-foreground mb-3`}>Quick Links</h3>
              <div className="space-y-2">
                <a href="/#journey" className={`block ${TYPOGRAPHY.FOOTER.TEXT} text-muted-foreground hover:text-primary transition-colors`}>
                  Experience
                </a>
                <a href="/#projects" className={`block ${TYPOGRAPHY.FOOTER.TEXT} text-muted-foreground hover:text-primary transition-colors`}>
                  Projects
                </a>
                <a href="/resume" className={`block ${TYPOGRAPHY.FOOTER.TEXT} text-muted-foreground hover:text-primary transition-colors`}>
                  Resume
                </a>
                <a href="/#contact" className={`block ${TYPOGRAPHY.FOOTER.TEXT} text-muted-foreground hover:text-primary transition-colors`}>
                  Contact
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className={`${TYPOGRAPHY.FOOTER.HEADING} font-bold text-foreground mb-3`}>Get in Touch</h3>
              <div className="space-y-2">
                <a
                  href="mailto:harinarayan.professional@gmail.com"
                  className={`block ${TYPOGRAPHY.FOOTER.TEXT} text-muted-foreground hover:text-primary transition-colors`}
                >
                  harinarayan.professional@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/harinarayansrivatsan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ${TYPOGRAPHY.FOOTER.TEXT} text-muted-foreground hover:text-primary transition-colors`}
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="mt-3 px-3 py-2 bg-primary/5 border border-primary/10 rounded-lg inline-block">
                <p className={`${TYPOGRAPHY.FOOTER.SMALL} font-semibold text-primary`}>
                  Available: May 2026
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border/30 text-center">
            <p className={`${TYPOGRAPHY.FOOTER.TEXT} text-muted-foreground`}>
              © {currentYear} Hari Narayan Srivatsan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
