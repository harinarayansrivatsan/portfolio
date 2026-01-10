import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 py-16 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6 max-w-md">
            <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
              Hari Narayan Srivatsan
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed font-medium">
              Crafting secure, intelligent, and scalable digital experiences for the future.
            </p>
            <div className="flex items-center gap-4">
              <Button
                asChild
                variant="secondary"
                size="icon"
                className="border border-input hover:bg-primary hover:text-primary-foreground shadow-sm"
              >
                <a
                  href="https://linkedin.com/in/harinarayansrivatsan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} strokeWidth={2} />
                </a>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="icon"
                className="border border-input hover:bg-primary hover:text-primary-foreground shadow-sm"
              >
                <a
                  href="mailto:harinarayan.professional@gmail.com"
                >
                  <Mail size={20} strokeWidth={2} />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-16 lg:gap-24">
            {/* Status */}
            <div>
              <h4 className="font-bold text-foreground mb-4 text-base">Current Status</h4>
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-secondary border border-border mb-3">
                <span className="relative flex h-2 w-2 bg-green-500 rounded-full"></span>
                <span className="text-xs font-bold text-foreground uppercase tracking-wide">Available for hire</span>
              </div>
              <p className="text-muted-foreground font-medium text-sm">
                Open to Security Engineering and AI/ML roles.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-muted-foreground">
          <p>© {currentYear} Hari Narayan Srivatsan. All rights reserved.</p>
          <p className="hidden md:block">Designed & Built with Intelligence.</p>
        </div>
      </div>
    </footer>
  )
}
